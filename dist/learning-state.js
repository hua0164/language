(function(root,factory){
  const api=factory();
  if(typeof module==='object'&&module.exports)module.exports=api;
  else root.PhenixLearningState=api;
})(typeof window==='object'?window:globalThis,function(){
  'use strict';
  function shuffledIndexes(){const a=[0,1,2];for(let i=2;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]];}return a;}
  function validOrder(a){return Array.isArray(a)&&a.length===3&&new Set(a).size===3&&Array.from(a).every(i=>Number.isInteger(i)&&i>=0&&i<3);}
  function session(raw){
    const r=raw&&typeof raw==='object'?raw:{};
    return {
      stage:['learn','practice','mission'].includes(r.stage)?r.stage:'learn',
      questionIndex:r.questionIndex===1?1:0,
      orders:[0,1].map(i=>validOrder(r.orders?.[i])?[...r.orders[i]]:shuffledIndexes()),
      selected:[0,1].map(i=>Number.isInteger(r.selected?.[i])&&r.selected[i]>=0&&r.selected[i]<3?r.selected[i]:null),
      checks:[0,1,2].map(i=>r.checks?.[i]===true)
    };
  }
  function questions(lesson,orders){
    const chosen=lesson.level%3;
    const original=[
      {prompt:lesson.quiz.prompt,options:lesson.quiz.choices.map((text,i)=>({text,correct:i===lesson.quiz.answer})),explanation:lesson.quiz.explanation},
      {prompt:`Which expression means “${lesson.phrases[chosen][2]}”?`,options:lesson.phrases.slice(0,3).map((p,i)=>({text:p[0],correct:i===chosen})),explanation:`${lesson.phrases[chosen][0]} (${lesson.phrases[chosen][1]}) means “${lesson.phrases[chosen][2]}”.`}
    ];
    return original.map((q,i)=>({...q,options:orders[i].map(index=>q.options[index])}));
  }
  function canComplete(answers,checks){return Array.isArray(answers)&&answers.length===2&&[0,1].every(i=>answers[i]&&Number.isInteger(answers[i].selected)&&answers[i].selected>=0&&answers[i].selected<3)&&Array.isArray(checks)&&checks.length===3&&[0,1,2].every(i=>checks[i]===true);}
  return {session,questions,canComplete};
});
