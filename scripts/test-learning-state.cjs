const assert=require('node:assert/strict');
const fs=require('node:fs');
const path=require('node:path');
const vm=require('node:vm');
const state=require('../dist/learning-state.js');
const context=vm.createContext({window:{}});
for(const file of ['foundations.js','paths-personal.js','paths-professional.js'])vm.runInContext(fs.readFileSync(path.join(__dirname,'../dist',file),'utf8'),context);
const all=[...context.window.PHENIX_FOUNDATIONS,...context.window.PHENIX_PATHS.flatMap(p=>p.lessons)];
for(const lesson of all){
  const session=state.session({stage:'practice',questionIndex:1,orders:[[2,0,1],[1,2,0]],selected:[0,2],checks:[true,false,true]});
  const saved=JSON.parse(JSON.stringify(session));
  const restored=state.session(saved);
  assert.deepEqual(restored,session,'Lesson state survives JSON round-trip');
  const first=state.questions(lesson,session.orders),second=state.questions(lesson,restored.orders);
  assert.deepEqual(second,first,'Shuffled answer order stays stable after resume');
  for(const q of first){assert.equal(q.options.filter(o=>o.correct).length,1);assert.equal(q.options.length,3);}
  assert.equal(state.canComplete(session.selected.map(selected=>({selected})),session.checks),false,'Incomplete self-check remains blocked');
  assert.equal(state.canComplete([{selected:0},{selected:2}],[true,true,true]),true,'Attempts plus self-check count as practice, not a scored assessment');
}
for(const raw of [null,42,'broken',{stage:'unknown',questionIndex:-1,orders:[[0,0,0],[0,1]],selected:[7,'1'],checks:[1,'true',null]}]){
  const safe=state.session(raw);assert.equal(safe.stage,'learn');assert.equal(safe.questionIndex,0);assert.deepEqual(safe.selected,[null,null]);assert.deepEqual(safe.checks,[false,false,false]);
  for(const order of safe.orders)assert.deepEqual([...order].sort(),[0,1,2]);
}
const sparseOrder=[0,1];sparseOrder.length=3;
assert.deepEqual([...state.session({orders:[sparseOrder,sparseOrder]}).orders[0]].sort(),[0,1,2]);
assert.equal(state.canComplete(new Array(2),[true,true,true]),false);
assert.equal(state.canComplete([{selected:0},{selected:1}],new Array(3)),false);
assert.equal(state.canComplete([{selected:0}],[true,true,true]),false);
console.log('PASS: 42 lesson resume/answer-order checks, completion gates, and corrupted storage handling.');
