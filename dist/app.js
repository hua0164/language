const $=s=>document.querySelector(s),modal=$('#modal'),content=$('#modal-content');
const vocabulary=[
 [['你好','nǐ hǎo','hello'],['谢谢','xièxie','thank you'],['再见','zàijiàn','goodbye'],['朋友','péngyou','friend']],
 [['学习','xuéxí','to study'],['喜欢','xǐhuan','to like'],['今天','jīntiān','today'],['明天','míngtiān','tomorrow']],
 [['机会','jīhuì','opportunity'],['习惯','xíguàn','habit'],['理解','lǐjiě','to understand'],['坚持','jiānchí','to persist']]
];
const emotions=[
 [['开心','kāixīn','happy','☺'],['难过','nánguò','sad','☂'],['累','lèi','tired','☾'],['生气','shēngqì','angry','⚡']],
 [['兴奋','xīngfèn','excited','✦'],['紧张','jǐnzhāng','nervous','〰'],['担心','dānxīn','worried','☁'],['无聊','wúliáo','bored','…']],
 [['失望','shīwàng','disappointed','☂'],['自豪','zìháo','proud','★'],['感激','gǎnjī','grateful','♡'],['困惑','kùnhuò','confused','?']]
];
const gaps=[
 [['你___！','Hello!','好','hǎo',['好','谢','见','我']],['___谢！','Thank you!','谢','xiè',['谢','好','不','你']],['___见！','Goodbye!','再','zài',['再','你','好','我']],['我是___。','I am a student.','学生','xuésheng',['学生','谢谢','再见','你好']]],
 [['我___中文。','I like Chinese.','喜欢','xǐhuan',['喜欢','明天','今天','朋友']],['我每天___中文。','I study Chinese every day.','学习','xuéxí',['学习','谢谢','今天','朋友']],['___见！','See you tomorrow!','明天','míngtiān',['明天','学习','喜欢','朋友']],['他是我的___。','He is my friend.','朋友','péngyou',['朋友','今天','明天','学习']]],
 [['每天练习是个好___。','Practicing every day is a good habit.','习惯','xíguàn',['习惯','机会','理解','坚持']],['我终于___了。','I finally understand.','理解','lǐjiě',['理解','机会','习惯','今天']],['这是一个好___。','This is a good opportunity.','机会','jīhuì',['机会','理解','坚持','谢谢']],['学习语言需要___。','Learning a language requires persistence.','坚持','jiānchí',['坚持','机会','理解','习惯']]]
];
let level=0,game=null,rounds=0;
try {
  const savedRounds=Number(localStorage.getItem('phenix-rounds'));
  if(Number.isSafeInteger(savedRounds)&&savedRounds>=0)rounds=savedRounds;
} catch {}
function progress() {
  $('#progress').textContent=`${rounds} round${rounds===1?'':'s'} completed on this device`;
}
progress();
let announcementTimer;
function announce(message) {
  clearTimeout(announcementTimer);
  $('#announcement').textContent='';
  announcementTimer=setTimeout(()=>{$('#announcement').textContent=message;},30);
}
function speak(text) {
  if(!('speechSynthesis' in window)||typeof SpeechSynthesisUtterance==='undefined') {
    announce('Speech playback is unavailable in this browser.');return;
  }
  speechSynthesis.cancel();
  const utterance=new SpeechSynthesisUtterance(text),voices=speechSynthesis.getVoices();
  const voice=voices.find(v=>/^zh[-_]CN$/i.test(v.lang))||voices.find(v=>/^(?:zh(?:[-_](?:CN|SG|TW|Hans|Hant))?|cmn)(?:[-_]|$)/i.test(v.lang));
  utterance.lang=voice?voice.lang:'zh-CN';
  if(voice)utterance.voice=voice;
  utterance.rate=.75;
  utterance.onerror=event=>{
    if(!['canceled','interrupted'].includes(event.error))announce('Speech playback is unavailable. Please use the pinyin guide.');
  };
  speechSynthesis.speak(utterance);
}
function open(label) {
  modal.classList.remove('curriculum-dialog');$('#modal-label').textContent=label;
  if(!modal.open)modal.showModal();
}
$('#close-modal').onclick=()=>modal.close();
modal.addEventListener('click',event=>{
  if(event.target===modal) {
    const rect=modal.getBoundingClientRect();
    if(event.clientX<rect.left||event.clientX>rect.right||event.clientY<rect.top||event.clientY>rect.bottom)modal.close();
  }
});
modal.addEventListener('close',()=>{if('speechSynthesis' in window)speechSynthesis.cancel();});
document.querySelectorAll('[data-speak]').forEach(button=>button.onclick=()=>speak(button.dataset.speak));
document.querySelectorAll('[data-level]').forEach(button=>button.onclick=()=>{
  level=Number(button.dataset.level);
  document.querySelectorAll('[data-level]').forEach(item=>{
    item.classList.toggle('active',item===button);item.setAttribute('aria-pressed',String(item===button));
  });
});
function shuffle(items) {
  const shuffled=[...items];
  for(let i=shuffled.length-1;i>0;i--) {
    const j=Math.floor(Math.random()*(i+1));[shuffled[i],shuffled[j]]=[shuffled[j],shuffled[i]];
  }
  return shuffled;
}
function start(type) {
  game={type,index:0,score:0,items:shuffle(type==='fill'?gaps[level]:type==='feelings'?emotions[level]:vocabulary[level]),level};
  open(`LEVEL ${level+1} / ${type==='words'?'WORD MATCH':type==='fill'?'MISSING WORDS':'WORDS WITH FEELING'}`);
  renderQuestion();
}
document.querySelectorAll('[data-game]').forEach(button=>button.onclick=()=>start(button.dataset.game));
function renderQuestion() {
  const g=game,word=g.items[g.index],isFill=g.type==='fill',isMood=g.type==='feelings';
  const answer=isFill?word[2]:isMood?word[0]:word[2];
  const choices=shuffle(isFill?word[4]:(isMood?emotions[g.level]:vocabulary[g.level]).map(item=>isMood?item[0]:item[2]));
  g.answered=false;
  content.innerHTML=`<div class="eyebrow" id="game-progress">QUESTION ${g.index+1} OF ${g.items.length} · ${g.score} CORRECT</div><h2 id="game-heading" tabindex="-1" aria-describedby="game-progress game-prompt">${isFill?'Find the missing word.':isMood?'Find the feeling.':'What does this word mean?'}</h2><div class="game-question" id="game-prompt">${isMood?`<span aria-hidden="true">${word[3]}</span>`:`<span lang="zh-CN">${word[0]}</span>`}<small ${isFill||isMood?'lang="en"':'lang="zh-Latn-pinyin"'}>${isFill?word[1]:isMood?word[2]:word[1]}</small></div><div class="choices">${choices.map(choice=>`<button class="choice" ${isFill||isMood?'lang="zh-CN"':''}>${choice}</button>`).join('')}</div><div class="feedback" id="game-feedback"></div><button class="button red modal-next" id="next" aria-describedby="game-feedback" hidden>Next question →</button>`;
  content.querySelectorAll('.choice').forEach(button=>button.onclick=()=>{
    if(g.answered)return;
    g.answered=true;
    const correct=button.textContent===answer;
    if(correct)g.score++;
    content.querySelectorAll('.choice').forEach(item=>{
      item.disabled=true;if(item.textContent===answer)item.classList.add('correct');
    });
    if(!correct)button.classList.add('incorrect');
    const chinese=isFill?answer:word[0],pinyin=isFill?word[3]:word[1];
    $('#game-feedback').innerHTML=`${correct?'Nice work!':'Keep going! The answer is'} <span ${isFill||isMood||correct?'lang="zh-CN"':''}>${correct?chinese:answer}</span> · <span lang="zh-Latn-pinyin">${pinyin}</span>${correct&&!isFill?' · '+word[2]:''}`;
    const next=$('#next');next.hidden=false;
    next.textContent=g.index===g.items.length-1?'See your results →':'Next question →';
    next.focus();announce($('#game-feedback').textContent);
  });
  $('#next').onclick=()=>{
    if(!g.answered)return;
    g.index++;if(g.index<g.items.length)renderQuestion();else finish();
  };
  $('#game-heading').focus();
}
function finish() {
  rounds=Math.min(rounds+1,Number.MAX_SAFE_INTEGER);
  let saved=true;try{localStorage.setItem('phenix-rounds',String(rounds));}catch{saved=false;}
  progress();
  content.innerHTML=`<div class="game-question"><span lang="zh-CN">${game.score===game.items.length?'太棒了！':'加油！'}</span><small><span lang="zh-Latn-pinyin">${game.score===game.items.length?'Tài bàng le!':'Jiāyóu!'}</span> · ${game.score===game.items.length?'Fantastic!':'Keep going!'}</small></div><h2 id="game-heading" tabindex="-1">${game.score} out of ${game.items.length}. A little progress!</h2><p>Every round is a chance to make these words more familiar. Try again or explore a new level.</p>${saved?'':'<p>Progress could not be saved in this browser. You can keep practising.</p>'}<button class="button red modal-next" id="again">Play again ↗</button><button class="choice modal-next" id="done">Choose another game</button>`;
  $('#again').onclick=()=>start(game.type);
  $('#done').onclick=()=>{
    modal.close();const heading=$('#play h2');heading.tabIndex=-1;heading.focus({preventScroll:true});$('#play').scrollIntoView();
  };
  $('#game-heading').focus();
  if(!saved)announce('Progress could not be saved in this browser. You can keep practising.');
}
