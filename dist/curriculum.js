(() => {
  'use strict';
  const q = s => document.querySelector(s);
  const labels = ['First steps', 'Finding your feet', 'Keep growing'];
  const order = ['travel','living','dining','friends','family','work','business','service','study','exams','culture','online'];
  const paths = [...(window.PHENIX_PATHS || [])].sort((a,b) => order.indexOf(a.id)-order.indexOf(b.id));
  const foundations = window.PHENIX_FOUNDATIONS || [];
  const lessons = new Map([...foundations, ...paths.flatMap(p => p.lessons)].map(l => [l.id,l]));
  const owners = new Map(paths.flatMap(p => p.lessons.map(l => [l.id,p.id])));
  const esc = value => String(value).replace(/[&<>"']/g,c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const normalize = s => String(s).normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase();
  let saved = {};
  try { saved = JSON.parse(localStorage.getItem('phenix-curriculum-v1') || '{}') || {}; } catch {}
  const completed = new Set(Array.isArray(saved.completed) ? saved.completed.filter(id => lessons.has(id)) : []);
  let selectedLevel = [0,1,2].includes(saved.level) ? saved.level : 0;
  let group = 'all', currentView = 'paths', lastLesson = lessons.has(saved.lastLesson) ? saved.lastLesson : null;
  let selectedSituation = paths.some(p=>p.id===saved.situation) ? saved.situation : 'all';
  const stateTools=window.PhenixLearningState,sessions=Object.create(null);
  for(const id of lessons.keys())if(saved.sessions?.[id]&&!completed.has(id))sessions[id]=stateTools.session(saved.sessions[id]);
  let questionOrders=[],returnLessonId=null;
  let currentLesson = null, homePath = null, stage = 'learn', questionIndex = 0, questions = [], answers = [], checks = [false,false,false];
  let showPinyin = saved.support?.pinyin!==false, showEnglish = saved.support?.english!==false, missionDraft = '';
  const dialog = q('#modal'), body = q('#modal-content');

  function persist() {
    try { localStorage.setItem('phenix-curriculum-v1',JSON.stringify({completed:[...completed],level:selectedLevel,lastLesson,situation:selectedSituation,support:{pinyin:showPinyin,english:showEnglish},sessions})); }
    catch { q('#announcement').textContent = 'Progress cannot be saved in this browser. You can still use every lesson.'; }
  }
  function updateProgress() {
    q('#curriculum-count').textContent = String(lessons.size);
    q('#curriculum-progress').textContent = `${completed.size} of ${lessons.size} lessons completed on this device`;
    q('#resume-row').hidden = !lastLesson || completed.has(lastLesson);
    if (lastLesson) q('#resume-text').textContent = `Pick up where you left off: ${lessons.get(lastLesson).title}`;
  }
  function resultText(count, noun) { return `${count} ${noun}${count===1?'':'s'} found`; }
  function setGroup(value){group=value;document.querySelectorAll('[data-group]').forEach(b=>{b.classList.toggle('active',b.dataset.group===group);b.setAttribute('aria-pressed',String(b.dataset.group===group));});}
  function resetFilters() { setGroup('all');selectedSituation='all';q('#path-situation').value='all';q('#skill-filter').value='all';persist();renderPaths(); }
  function renderPaths() {
    const skill=q('#skill-filter').value;
    const shown = paths.filter(p => (group==='all'||p.group===group) && (skill==='all'||p.lessons[selectedLevel].skills.includes(skill)) && (selectedSituation==='all'||p.id===selectedSituation));
    q('#path-results').textContent = `${resultText(shown.length,'path')} · Level ${selectedLevel+1}: ${labels[selectedLevel]}`;
    q('#path-grid').innerHTML = shown.length ? shown.map(p => {
      const l=p.lessons[selectedLevel],done=p.lessons.filter(item=>completed.has(item.id)).length;
      return `<article class="path-card"><div class="path-card-top"><span class="path-icon" lang="zh">${esc(p.icon)}</span><span class="path-category">${esc(p.group)}</span></div><h3>${esc(p.title)}</h3><p class="path-summary">${esc(p.summary)}</p><div class="path-feature"><small>LEVEL ${selectedLevel+1} · ${l.minutes} MIN · ${esc(l.skills.join(' + '))}</small><strong>${esc(l.title)}</strong><div class="path-actions"><button data-start="${esc(l.id)}" aria-label="Start ${esc(l.title)}">${completed.has(l.id)?'Revisit lesson':'Start lesson'} ↗</button><button data-path="${esc(p.id)}" aria-label="Explore ${esc(p.title)}">Explore path →</button></div></div><span class="path-done">${done} / 3 missions completed</span></article>`;
    }).join('') : '<div class="empty-state">No matching paths at this level. Try another skill or choose all situations.<br><button id="clear-path-filters">Clear filters</button></div>';
    q('#path-grid').querySelectorAll('[data-start]').forEach(b => b.onclick=()=>openLesson(b.dataset.start));
    q('#path-grid').querySelectorAll('[data-path]').forEach(b => b.onclick=()=>openPath(b.dataset.path));
    const clear=q('#clear-path-filters');if(clear)clear.onclick=resetFilters;
  }
  function renderFoundations() {
    q('#foundation-grid').innerHTML = foundations.map((l,i)=>`<button class="foundation-card" data-foundation="${esc(l.id)}"><span>${String(i+1).padStart(2,'0')} / SHARED FOUNDATION ${completed.has(l.id)?'· ✓':''}</span><h3>${esc(l.title)}</h3><p>${esc(l.mission)}</p><small>${l.minutes} min · ${esc(l.skills.join(' + '))} ↗</small></button>`).join('');
    q('#foundation-grid').querySelectorAll('[data-foundation]').forEach(b=>b.onclick=()=>openLesson(b.dataset.foundation));
  }
  function renderGuides() {
    const term=normalize(q('#guide-search').value.trim());
    const found=paths.filter(p=>normalize(JSON.stringify({title:p.title,guide:p.guide})).includes(term));
    q('#guide-results').textContent=resultText(found.length,'guide');
    q('#guide-grid').innerHTML=found.length?found.map(p=>`<button class="guide-card" data-guide="${esc(p.id)}"><div><small>${esc(p.title)} · ALL LEVELS</small><h3>${esc(p.guide.title)}</h3></div><span aria-hidden="true">↗</span></button>`).join(''):'<p class="empty-state">No guide found. Try a topic such as travel, work, or family.</p>';
    q('#guide-grid').querySelectorAll('[data-guide]').forEach(b=>b.onclick=()=>openGuide(b.dataset.guide));
  }
  function selectView(name,focus=false) {
    currentView=name;
    document.querySelectorAll('[data-view]').forEach(b=>{const active=b.dataset.view===name;b.setAttribute('aria-selected',String(active));b.tabIndex=active?0:-1;if(active&&focus)b.focus();});
    ['paths','foundations','guides'].forEach(v=>q('#panel-'+v).hidden=v!==name);
  }
  document.querySelectorAll('[data-view]').forEach((b,i,all)=>{
    b.onclick=()=>selectView(b.dataset.view);
    b.onkeydown=e=>{let n=i;if(e.key==='ArrowRight')n=(i+1)%all.length;else if(e.key==='ArrowLeft')n=(i+all.length-1)%all.length;else if(e.key==='Home')n=0;else if(e.key==='End')n=all.length-1;else return;e.preventDefault();selectView(all[n].dataset.view,true);};
  });
  q('#path-level').value=String(selectedLevel);
  q('#path-level').onchange=()=>{selectedLevel=Number(q('#path-level').value);persist();renderPaths();};
  q('#path-situation').value=selectedSituation;
  q('#path-situation').onchange=()=>{selectedSituation=q('#path-situation').value;setGroup('all');q('#skill-filter').value='all';persist();renderPaths();};
  q('#skill-filter').onchange=renderPaths;q('#guide-search').oninput=renderGuides;
  document.querySelectorAll('[data-group]').forEach(b=>b.onclick=()=>{setGroup(b.dataset.group);selectedSituation='all';q('#path-situation').value='all';persist();renderPaths();});
  q('#resume-lesson').onclick=()=>{if(lastLesson)openLesson(lastLesson);};

  function showDialog(label,html) {
    if ('speechSynthesis' in window) speechSynthesis.cancel();
    dialog.classList.add('curriculum-dialog');q('#modal-label').textContent=label;body.innerHTML=html;
    if(!dialog.open)dialog.showModal();
    dialog.scrollTop=0;
    const heading=body.querySelector('h2');if(heading){heading.tabIndex=-1;heading.focus({preventScroll:true});}
  }
  function bindAudio() {
    body.querySelectorAll('[data-listen]').forEach(b=>b.onclick=()=>speak(b.dataset.listen));
  }
  function phraseRows(phrases) {
    return `<div class="phrase-list">${phrases.map(p=>`<div class="phrase-item"><div class="hanzi" lang="zh-CN">${esc(p[0])}</div><div class="pinyin" ${showPinyin?'':'hidden'}>${esc(p[1])}</div><div class="english" ${showEnglish?'':'hidden'}>${esc(p[2])}</div><button class="listen-line" data-listen="${esc(p[0])}" aria-label="Listen to ${esc(p[2])}">◖))</button></div>`).join('')}</div>`;
  }
  function supportControls() {
    return `<div class="support-toggles"><span>Make it your level:</span><label><input id="show-pinyin" type="checkbox" ${showPinyin?'checked':''}> Show pinyin</label><label><input id="show-english" type="checkbox" ${showEnglish?'checked':''}> Show English</label></div>`;
  }
  function bindSupport() {
    const py=q('#show-pinyin'),en=q('#show-english');
    if(py)py.onchange=()=>{showPinyin=py.checked;body.querySelectorAll('.pinyin').forEach(e=>e.hidden=!showPinyin);persist();};
    if(en)en.onchange=()=>{showEnglish=en.checked;body.querySelectorAll('.english').forEach(e=>e.hidden=!showEnglish);persist();};
  }
  function openPath(id) {
    const p=paths.find(p=>p.id===id);if(!p)return;
    showDialog('YOUR LEARNING PATH',`<h2>${esc(p.title)}</h2><p class="path-intro">${esc(p.summary)} Start at a comfortable level, or explore the whole path.</p><div class="path-modal-steps">${p.lessons.map(l=>`<button class="path-modal-step ${l.level===selectedLevel?'selected':''}" data-path-lesson="${esc(l.id)}"><span>${l.level+1}</span><div><small>${esc(labels[l.level])} · ${l.minutes} MIN ${completed.has(l.id)?'· COMPLETED ✓':''}</small><h3>${esc(l.title)}</h3><p>${esc(l.mission)}</p></div><b aria-hidden="true">↗</b></button>`).join('')}</div><button class="button red modal-next" id="path-guide">Open the practical guide ↗</button><p class="audio-note">All levels are open. These are short practice missions, not complete proficiency courses.</p>`);
    body.querySelectorAll('[data-path-lesson]').forEach(b=>b.onclick=()=>openLesson(b.dataset.pathLesson,id));q('#path-guide').onclick=()=>openGuide(id);
  }
  function openGuide(id) {
    const p=paths.find(p=>p.id===id);if(!p)return;const g=p.guide;
    showDialog('QUICK GUIDE / '+p.title,`<h2>${esc(g.title)}</h2><p class="path-intro">Keep these steps and expressions close when you need them.</p><ol class="guide-steps">${g.steps.map(s=>`<li>${esc(s)}</li>`).join('')}</ol><h3 class="mini-heading">Your pocket phrases</h3>${supportControls()}${phraseRows(g.phrases)}<div class="guide-tip">${esc(g.tip)}</div><p class="audio-note">Listen uses your browser's Mandarin voice when available.</p><div class="guide-footer"><button id="save-guide">Save phrase sheet (.txt) ↓</button><button id="guide-path">Explore this learning path →</button></div>`);
    bindAudio();bindSupport();q('#save-guide').onclick=()=>downloadGuide(p);q('#guide-path').onclick=()=>openPath(id);
  }
  function downloadGuide(p) {
    const text=[`Chinese with Phenix — ${p.guide.title}`,'',...p.guide.steps.map((s,i)=>`${i+1}. ${s}`),'','POCKET PHRASES',...p.guide.phrases.map(w=>`${w[0]}\n${w[1]}\n${w[2]}\n`),p.guide.tip].join('\n');
    const url=URL.createObjectURL(new Blob(['\uFEFF'+text],{type:'text/plain;charset=utf-8'}));
    const a=document.createElement('a');a.href=url;a.download=`phenix-${p.id}-guide.txt`;document.body.appendChild(a);a.click();a.remove();setTimeout(()=>URL.revokeObjectURL(url),1000);
  }
  function rememberSession(){
    if(!currentLesson||completed.has(currentLesson.id))return;
    sessions[currentLesson.id]={stage,questionIndex,orders:questionOrders,selected:[0,1].map(i=>answers[i]?.selected??null),checks:[...checks]};persist();
  }
  function openLesson(id,fromPath,keepReturn=false) {
    const l=lessons.get(id);if(!l)return;
    if(!keepReturn)returnLessonId=null;
    const session=stateTools.session(completed.has(id)?null:sessions[id]);
    currentLesson=l;homePath=fromPath||owners.get(id)||null;stage=session.stage;questionIndex=session.questionIndex;questionOrders=session.orders;checks=session.checks;missionDraft='';
    questions=stateTools.questions(l,questionOrders);
    answers=session.selected.map((selected,i)=>selected===null?null:{selected,correct:questions[i].options[selected].correct});
    if(!keepReturn)lastLesson=id;persist();updateProgress();renderLesson();
  }
  function lessonHeader(l) {
    const owner=paths.find(p=>p.id===homePath);
    return `<button class="modal-back" id="lesson-back">← ${owner?esc(owner.title):'Shared foundations'}</button><h2>${esc(l.title)}</h2><div class="lesson-meta-line"><span>Level ${l.level+1} · ${esc(labels[l.level])}</span><span>${l.minutes} min</span>${l.skills.map(s=>`<span>${esc(s)}</span>`).join('')}${completed.has(l.id)?'<span>Completed ✓</span>':''}</div><div class="lesson-goal"><b>Your mission:</b> ${esc(l.mission)}</div><div class="lesson-tabs" role="tablist" aria-label="Lesson steps"><button id="lesson-tab-learn" role="tab" aria-selected="${stage==='learn'}" aria-controls="lesson-step" tabindex="${stage==='learn'?0:-1}" data-stage="learn" class="${stage==='learn'?'active':''}">1 · Learn</button><button id="lesson-tab-practice" role="tab" aria-selected="${stage==='practice'}" aria-controls="lesson-step" tabindex="${stage==='practice'?0:-1}" data-stage="practice" class="${stage==='practice'?'active':''}">2 · Practice</button><button id="lesson-tab-mission" role="tab" aria-selected="${stage==='mission'}" aria-controls="lesson-step" tabindex="${stage==='mission'?0:-1}" data-stage="mission" class="${stage==='mission'?'active':''}">3 · Your mission</button></div>`;
  }
  function renderLesson() {
    rememberSession();
    const l=currentLesson;let html=(returnLessonId&&returnLessonId!==l.id?`<div class="return-context"><button id="return-lesson">← Return to ${esc(lessons.get(returnLessonId).title)}</button></div>`:'')+lessonHeader(l);
    html+=`<div id="lesson-step" role="tabpanel" aria-labelledby="lesson-tab-${stage}">`;
    if(stage==='learn'){
      html+=`${supportControls()}<h3 class="mini-heading">Listen to the situation</h3><div class="dialogue-lines">${l.dialogue.map(d=>`<div class="dialogue-line"><span class="speaker">${esc(d.speaker)}</span><div class="hanzi" lang="zh-CN">${esc(d.zh)}</div><div class="pinyin" ${showPinyin?'':'hidden'}>${esc(d.py)}</div><div class="english" ${showEnglish?'':'hidden'}>${esc(d.en)}</div><button class="listen-line" data-listen="${esc(d.zh)}" aria-label="Listen to ${esc(d.speaker)}: ${esc(d.en)}">◖))</button></div>`).join('')}</div><p class="audio-note">Browser pronunciation is available when your device has a Mandarin voice. Listen, pause, and repeat at your own pace.</p><h3 class="mini-heading">Useful expressions</h3>${phraseRows(l.phrases)}<div class="pattern-box"><h3>${esc(l.pattern.title)}</h3><p>${esc(l.pattern.explanation)}</p></div>${owners.has(l.id)?'<button class="warmup-link" id="lesson-warmup">Need a warm-up? Revisit asking questions →</button>':''}<button class="button red modal-next" id="go-practice">Try the situation →</button>`;
    }else if(stage==='practice'){
      const item=questions[questionIndex],answered=answers[questionIndex];
      html+=`<div class="practice-progress">QUESTION ${questionIndex+1} OF ${questions.length} · ${questionIndex===0?'Choose a useful response':'Recall an expression'}</div><h3 class="lesson-question">${esc(item.prompt)}</h3><div class="lesson-choices">${item.options.map((o,i)=>`<button data-choice="${i}" ${answered?'disabled':''} class="${answered?(o.correct?'correct':answered.selected===i?'incorrect':''):''}"><span ${/[\u3400-\u9fff]/.test(o.text)?'lang="zh-CN"':''}>${esc(o.text)}</span></button>`).join('')}</div><div class="lesson-feedback" id="lesson-feedback">${answered?esc((answered.correct?'Nice work. ':'A useful one to revisit. ')+item.explanation):'Choose an answer to see the explanation.'}</div><button class="button red modal-next" id="practice-next" aria-describedby="lesson-feedback" ${answered?'':'hidden'}>${questionIndex<questions.length-1?'Next question →':'Try your mission →'}</button>`;
    }else{
      html+=`<div class="mission-card"><h3>Make it your own.</h3><p>${esc(l.challenge)}</p><label for="mission-draft">Optional writing space</label><textarea id="mission-draft" rows="3" maxlength="600" placeholder="Try your own version here…">${esc(missionDraft)}</textarea><p class="audio-note">This space is for your own practice. Your draft is not graded or saved.</p>${l.checklist.map((c,i)=>`<label><input type="checkbox" data-check="${i}" ${checks[i]?'checked':''}>${esc(c)}</label>`).join('')}</div><p class="mission-status" id="mission-status" role="status"></p><button class="button red modal-next" id="complete-lesson" disabled>Complete this mission ✓</button>`;
    }
    html+='</div>';
    showDialog((owners.has(l.id)?'PRACTICAL LESSON':'SHARED FOUNDATION')+' / '+labels[l.level],html);
    const returnButton=q('#return-lesson');if(returnButton)returnButton.onclick=()=>{const target=returnLessonId;returnLessonId=null;openLesson(target);};
    q('#lesson-back').onclick=()=>{if(homePath)openPath(homePath);else{dialog.close();selectView('foundations');q('#tab-foundations').focus();}};
    body.querySelectorAll('[data-stage]').forEach((b,i,all)=>{
      b.onclick=()=>{stage=b.dataset.stage;renderLesson();};
      b.onkeydown=e=>{let n=i;if(e.key==='ArrowRight')n=(i+1)%all.length;else if(e.key==='ArrowLeft')n=(i+all.length-1)%all.length;else return;e.preventDefault();stage=all[n].dataset.stage;renderLesson();q('#lesson-tab-'+stage).focus();};
    });
    if(stage==='learn'){
      bindAudio();bindSupport();q('#go-practice').onclick=()=>{stage='practice';renderLesson();};
      const warm=q('#lesson-warmup');if(warm)warm.onclick=()=>{returnLessonId=l.id;openLesson('core-questions',homePath,true);};
    }else if(stage==='practice'){
      body.querySelectorAll('[data-choice]').forEach(b=>b.onclick=()=>{const selected=Number(b.dataset.choice);answers[questionIndex]={selected,correct:questions[questionIndex].options[selected].correct};renderLesson();q('#announcement').textContent=q('#lesson-feedback').textContent;q('#practice-next').focus();});
      q('#practice-next').onclick=()=>{if(questionIndex<questions.length-1)questionIndex++;else stage='mission';renderLesson();};
    }else{
      q('#mission-draft').oninput=()=>{missionDraft=q('#mission-draft').value;};
      body.querySelectorAll('[data-check]').forEach(b=>b.onchange=()=>{checks[Number(b.dataset.check)]=b.checked;rememberSession();updateMission();});
      q('#complete-lesson').onclick=completeLesson;updateMission();
    }
  }
  function updateMission() {
    const practised=answers.filter(Boolean).length===questions.length,ready=stateTools.canComplete(answers,checks);
    q('#complete-lesson').disabled=!ready;
    q('#mission-status').textContent=!practised?'Complete the two practice questions, then use the checklist to reflect on your mission.':!checks.every(Boolean)?'Tick the three things you have tried. You can revisit the dialogue whenever you need.':'Ready to mark your practice complete. This records your self-check, not a language assessment.';
  }
  function completeLesson() {
    if(!stateTools.canComplete(answers,checks))return;
    completed.add(currentLesson.id);delete sessions[currentLesson.id];persist();updateProgress();renderPaths();renderFoundations();
    const owner=paths.find(p=>p.id===owners.get(currentLesson.id)),sequence=owner?owner.lessons:foundations,index=sequence.findIndex(l=>l.id===currentLesson.id),next=sequence[index+1];
    showDialog('ONE MORE LITTLE STEP',`<div class="completion-banner"><div class="hanzi" lang="zh-CN">太棒了！</div><h2>Mission practised.</h2><p>${esc(currentLesson.title)}</p><p>${completed.size} of ${lessons.size} lessons completed on this device.</p></div><p class="path-intro">Return to this lesson any time. Try saying your own version again tomorrow, with fewer hints.</p>${next?`<button class="button red modal-next" id="next-mission">Next: ${esc(next.title)} →</button>`:''}${owner?'<button class="choice modal-next" id="completed-guide">Keep the practical guide ↗</button>':''}<button class="choice modal-next" id="choose-path">Explore learning paths</button>`);
    if(returnLessonId&&currentLesson.id!==returnLessonId){const b=document.createElement('button');b.className='button red modal-next';b.textContent='Return to '+lessons.get(returnLessonId).title+' →';b.onclick=()=>{const target=returnLessonId;returnLessonId=null;openLesson(target);};body.prepend(b);}
    if(next)q('#next-mission').onclick=()=>openLesson(next.id);if(owner)q('#completed-guide').onclick=()=>openGuide(owner.id);
    q('#choose-path').onclick=()=>{dialog.close();selectView('paths');q('#tab-paths').focus();};
  }
  renderPaths();renderFoundations();renderGuides();updateProgress();
})();
