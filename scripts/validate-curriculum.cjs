const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const assert = require('node:assert/strict');
const root = path.resolve(__dirname,'../dist');
const context = vm.createContext({window:{}});
const dataFiles = ['foundations.js','paths-personal.js','paths-professional.js'];
for (const name of dataFiles) vm.runInContext(fs.readFileSync(path.join(root,name),'utf8'),context,{filename:name});
for (const name of ['app.js','translation.js','learning-state.js','curriculum.js']) new vm.Script(fs.readFileSync(path.join(root,name),'utf8'),{filename:name});
const paths = context.window.PHENIX_PATHS;
const core = context.window.PHENIX_FOUNDATIONS;
assert.equal(paths.length,12,'Twelve learning goals');
assert.equal(core.length,6,'Six shared foundations');
assert.equal(new Set(paths.map(p=>p.id)).size,12,'Unique path IDs');
const groups = new Set(['Everyday','Connections','Work & study','Interests']);
const skills = new Set(['Speaking','Listening','Reading','Writing']);
const all = [...core,...paths.flatMap(p=>p.lessons)];
assert.equal(all.length,42);
assert.equal(new Set(all.map(l=>l.id)).size,42,'Unique lesson IDs');
function string(s,label) { assert.equal(typeof s,'string',label);assert(s.trim().length>0,label+' must be present'); }
function phrase(row) { assert.equal(row.length,3);row.forEach((v,i)=>string(v,'Phrase field '+i));assert(/[\u3400-\u9fff]/.test(row[0]),'Hanzi expected'); }
for (const p of paths) {
  ['id','title','icon','summary'].forEach(k=>string(p[k],k));
  assert(groups.has(p.group),'Group supported by filter');
  assert.equal(p.lessons.length,3);
  assert.deepEqual(Array.from(p.lessons,l=>l.level),[0,1,2],'Level order used by selector');
  assert.equal(new Set(p.lessons.map(l=>l.title)).size,3,'Distinct missions in each path');
  string(p.guide.title,'Guide title');string(p.guide.tip,'Guide tip');
  assert.equal(p.guide.steps.length,3);p.guide.steps.forEach(s=>string(s,'Guide step'));
  assert.equal(p.guide.phrases.length,4);p.guide.phrases.forEach(phrase);
}
for (const l of all) {
  ['id','title','mission','challenge'].forEach(k=>string(l[k],k));
  assert([0,1,2].includes(l.level));assert(Number.isInteger(l.minutes)&&l.minutes>0);
  assert(l.skills.length>0);l.skills.forEach(s=>assert(skills.has(s),'Canonical skill '+s));
  assert.equal(l.dialogue.length,4);l.dialogue.forEach(d=>['speaker','zh','py','en'].forEach(k=>string(d[k],'Dialogue '+k)));
  assert(l.phrases.length>=3);l.phrases.forEach(phrase);
  assert.equal(new Set(l.phrases.slice(0,3).map(p=>p[0])).size,3,'Recall exercise needs unique choices');
  string(l.pattern.title,'Pattern title');string(l.pattern.explanation,'Pattern explanation');
  string(l.quiz.prompt,'Question');assert.equal(l.quiz.choices.length,3);l.quiz.choices.forEach(s=>string(s,'Answer option'));
  assert.equal(new Set(l.quiz.choices).size,3,'Unique scenario choices');
  assert(Number.isInteger(l.quiz.answer)&&l.quiz.answer>=0&&l.quiz.answer<3);
  string(l.quiz.explanation,'Feedback');assert.equal(l.checklist.length,3);l.checklist.forEach(s=>string(s,'Self-check'));
}
const html=fs.readFileSync(path.join(root,'index.html'),'utf8');
for (const file of [...dataFiles,'app.js','translation.js','learning-state.js','curriculum.js','curriculum.css','style.css']) assert(html.includes('"'+file+'"'),'Referenced asset '+file);
for (const id of ['home','learn','translate','play','about','path-level','path-situation','skill-filter','panel-paths','panel-foundations','panel-guides','modal']) assert(html.includes('id="'+id+'"'),'Required interface '+id);
for (const file of dataFiles) assert(html.indexOf('src="'+file+'"')<html.indexOf('src="curriculum.js"'),'Data loaded before UI');
console.log('PASS: 12 paths, 36 level-specific lessons, 6 foundations, 12 guides; all dialogues, phrases, quizzes, filters and asset references validated.');

const situation=html.match(/<select id="path-situation">([\s\S]*?)<\/select>/)?.[1]||'';
for(const p of paths) assert(situation.includes('value="'+p.id+'"'),'Clickable situation for '+p.id);
assert(!html.includes('id="path-search"'),'No keyword field for choosing a situation');
