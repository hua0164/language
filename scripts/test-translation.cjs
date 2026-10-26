// Dependency-free browser-controller tests. Every fetch is supplied by a local stub.
'use strict';
const assert=require('node:assert/strict');
const fs=require('node:fs');
const path=require('node:path');
const vm=require('node:vm');
const source=fs.readFileSync(path.join(__dirname,'../dist/translation.js'),'utf8');

class Element {
  constructor() {this.value='';this.textContent='';this.hidden=false;this.disabled=false;this.attributes={};this.listeners={};}
  addEventListener(type,callback) {(this.listeners[type]||=[]).push(callback);}
  setAttribute(name,value) {this.attributes[name]=String(value);}
  emit(type) {return Promise.all((this.listeners[type]||[]).map(callback=>callback({preventDefault(){}})));}
}
function response(text,extra={}) {
  return {ok:true,status:200,json:async()=>({responseStatus:200,responseData:{translatedText:text},...extra})};
}
function deferred(abortable=false) {
  let resolve,reject;
  const promise=new Promise((yes,no)=>{resolve=yes;reject=no;});
  return {
    resolve,reject,
    fetch({options}) {
      if(abortable)options.signal.addEventListener('abort',()=>{
        const error=new Error('Aborted by test signal');error.name='AbortError';reject(error);
      },{once:true});
      return promise;
    }
  };
}
function harness(...queued) {
  const selectors=['#translation-form','#help-mode','#source-language','#translation-text','#intended-meaning','#translation-status','.translation-output','#translation-result','#translation-listen','#translate-submit','#meaning-result','#back-translation','#mode-description','label[for="source-language"]','#meaning-label','#result-label'];
  const elements=new Map(selectors.map(selector=>[selector,new Element()]));
  const get=selector=>{assert(elements.has(selector),'Known selector '+selector);return elements.get(selector);};
  get('#help-mode').value='translate';get('#source-language').value='en';get('#translation-text').value='hello';
  get('#translation-listen').hidden=true;get('#meaning-result').hidden=true;get('#intended-meaning').hidden=true;
  const requests=[],spoken=[],timers=new Map();let timerID=0;
  const context=vm.createContext({
    document:{querySelector:get},window:{speechSynthesis:{}},speak:text=>spoken.push(text),
    URL,TextEncoder,AbortController,TypeError,
    setTimeout(callback,ms) {const id=++timerID;timers.set(id,{callback,ms});return id;},
    clearTimeout:id=>timers.delete(id),
    DOMParser:class {
      parseFromString(text,mime) {
        assert.equal(mime,'text/html');
        return {body:{textContent:text.replace(/<[^>]*>/g,'').replace(/&amp;/g,'&').replace(/&lt;/g,'<').replace(/&gt;/g,'>')}};
      }
    },
    fetch(url,options) {
      const request={url:new URL(url),options};requests.push(request);
      assert(queued.length,'Unexpected extra API request; real networking is never allowed');
      const next=queued.shift();
      return typeof next==='function'?next(request):Promise.resolve(next);
    }
  });
  vm.runInContext(source,context,{filename:'translation.js'});
  return {
    get,requests,spoken,timers,queue:item=>queued.push(item),submit:()=>get('#translation-form').emit('submit'),
    async mode(value) {get('#help-mode').value=value;await get('#help-mode').emit('change');},
    async edit(selector,value,event='input') {get(selector).value=value;await get(selector).emit(event);},
    timeout() {assert.equal(timers.size,1);const [id,timer]=[...timers][0];assert.equal(timer.ms,30000);timers.delete(id);timer.callback();},
    idle() {
      assert.equal(get('#translate-submit').disabled,false);assert.equal(get('#help-mode').disabled,false);
      assert.equal(get('.translation-output').attributes['aria-busy'],'false');assert.equal(timers.size,0);
    }
  };
}
const testCases=[];
function test(name,run) {testCases.push({name,run});}
function pairs(h) {return h.requests.map(request=>request.url.searchParams.get('langpair'));}
function inputTexts(h) {return h.requests.map(request=>request.url.searchParams.get('q'));}
async function flush() {for(let i=0;i<8;i++)await Promise.resolve();}

test('translation uses the captured source and renders text safely',async()=>{
  const h=harness(response('<b>你好</b>&amp;欢迎'));h.get('#source-language').value='fr';h.get('#translation-text').value='bonjour';
  await h.submit();
  assert.deepEqual(pairs(h),['fr|zh-CN']);assert.deepEqual(inputTexts(h),['bonjour']);
  assert.equal(h.get('#translation-result').textContent,'你好&欢迎');assert.equal(h.get('#translation-listen').hidden,false);
  assert.equal(h.get('#meaning-result').hidden,true);
  assert.equal(h.requests[0].options.credentials,'omit');assert.equal(h.requests[0].options.referrerPolicy,'no-referrer');
  assert.equal(h.requests[0].url.origin,'https://api.mymemory.translated.net');
  await h.get('#translation-listen').emit('click');assert.deepEqual(h.spoken,['你好&欢迎']);h.idle();
});
test('mixed-language mode performs the two expected requests',async()=>{
  const h=harness(response('我想学习中文'),response('I want to learn Chinese'));
  await h.mode('mixed');h.get('#translation-text').value='我 want to learn 中文';await h.submit();
  assert.deepEqual(pairs(h),['en|zh-CN','zh-CN|en']);assert.equal(h.get('#back-translation').textContent,'I want to learn Chinese');
  assert.equal(h.get('#meaning-result').hidden,false);assert.match(h.get('#translation-status').textContent,/not a verified correction/);
  assert.equal(h.get('#source-language').disabled,true);h.idle();
});
test('Chinese rephrasing performs all three requests in order',async()=>{
  const h=harness(response('I went to school yesterday.'),response('我昨天去学校了。'),response('I went to school yesterday.'));
  await h.mode('chinese');h.get('#translation-text').value='我昨天去学校。';await h.submit();
  assert.deepEqual(pairs(h),['zh-CN|en','en|zh-CN','zh-CN|en']);
  assert.deepEqual(inputTexts(h),['我昨天去学校。','I went to school yesterday.','我昨天去学校了。']);
  assert.equal(h.get('#translation-result').textContent,'我昨天去学校了。');h.idle();
});
for(const mode of ['mixed','chinese'])test('intended meaning takes precedence in '+mode+' mode',async()=>{
  const h=harness(response('我想喝茶。'),response('I would like some tea.'));await h.mode(mode);
  h.get('#translation-text').value='unclear original';h.get('#intended-meaning').value='I would like some tea.';await h.submit();
  assert.deepEqual(inputTexts(h),['I would like some tea.','我想喝茶。']);assert.deepEqual(pairs(h),['en|zh-CN','zh-CN|en']);
  assert.match(h.get('#translation-status').textContent,/rather than a correction/);h.idle();
});
test('plain translation ignores a hidden intended meaning',async()=>{
  const h=harness(response('你好'));h.get('#intended-meaning').value='old hidden meaning';await h.submit();
  assert.deepEqual(inputTexts(h),['hello']);h.idle();
});
test('HTTP quota failure restores the controls and hides playback',async()=>{
  const h=harness({ok:false,status:429});await h.submit();
  assert.match(h.get('#translation-status').textContent,/limit has been reached/);assert.equal(h.get('#translation-listen').hidden,true);h.idle();
});
for(const payload of [{quotaFinished:true},{quotaFinished:'true'},{responseStatus:429}])test('response quota failure '+JSON.stringify(payload),async()=>{
  const h=harness(response('not usable',payload));await h.submit();assert.match(h.get('#translation-status').textContent,/limit has been reached/);h.idle();
});
test('a false quota flag does not discard a valid result',async()=>{
  const h=harness(response('你好',{quotaFinished:'false'}));await h.submit();assert.equal(h.get('#translation-result').textContent,'你好');h.idle();
});
test('HTTP service failure is recoverable',async()=>{
  const h=harness({ok:false,status:503});await h.submit();assert.match(h.get('#translation-status').textContent,/service is unavailable/);h.idle();
  h.queue(response('你好'));await h.submit();assert.equal(h.get('#translation-result').textContent,'你好');h.idle();
});
test('connection errors have a useful message',async()=>{
  const h=harness(()=>Promise.reject(new TypeError('Offline')));await h.submit();assert.match(h.get('#translation-status').textContent,/Check your connection/);h.idle();
});
test('malformed JSON is reported without exposing parser details',async()=>{
  const h=harness({ok:true,status:200,json:async()=>{throw new SyntaxError('Unexpected private payload');}});await h.submit();
  assert.match(h.get('#translation-status').textContent,/unreadable response/);assert.doesNotMatch(h.get('#translation-status').textContent,/private payload/);h.idle();
});
for(const data of [null,{responseStatus:200,responseData:{}},{responseStatus:200,responseData:{translatedText:'   '}}])test('invalid translation payload '+JSON.stringify(data),async()=>{
  const h=harness({ok:true,status:200,json:async()=>data});await h.submit();
  assert.match(h.get('#translation-status').textContent,/No translation was returned/);assert.equal(h.get('#translation-listen').hidden,true);h.idle();
});
test('empty and oversized inputs never send a request',async()=>{
  const h=harness();h.get('#translation-text').value='  ';await h.submit();assert.match(h.get('#translation-status').textContent,/Enter a word/);
  h.get('#translation-text').value='字'.repeat(151);await h.submit();assert.match(h.get('#translation-status').textContent,/150 characters/);
  assert.equal(h.requests.length,0);h.idle();
});
test('a service expansion over 500 bytes stops the next pipeline segment',async()=>{
  const h=harness(response('字'.repeat(167)));await h.mode('mixed');await h.submit();
  assert.equal(h.requests.length,1);assert.match(h.get('#translation-status').textContent,/too long/);h.idle();
});
test('duplicate submissions cannot start a second in-flight request',async()=>{
  const gate=deferred(),h=harness(gate.fetch);const first=h.submit();await h.submit();
  assert.equal(h.requests.length,1);assert.equal(h.get('#translate-submit').disabled,true);assert.equal(h.get('#help-mode').disabled,false);
  gate.resolve(response('你好'));await first;h.idle();
});
test('timeout aborts the request and permits another attempt',async()=>{
  const gate=deferred(true),h=harness(gate.fetch);const pending=h.submit();h.timeout();await pending;
  assert.equal(h.requests[0].options.signal.aborted,true);assert.match(h.get('#translation-status').textContent,/took too long/);h.idle();
});
for(const [selector,value,event] of [
  ['#translation-text','new sentence','input'],['#intended-meaning','new intention','input'],['#source-language','fr','change'],['#help-mode','mixed','change']
])test('editing '+selector+' aborts active work without a timeout error',async()=>{
  const gate=deferred(true),h=harness(gate.fetch);const pending=h.submit();await h.edit(selector,value,event);await pending;
  assert.equal(h.requests[0].options.signal.aborted,true);assert.equal(h.get('#translation-result').textContent,'…');
  assert.equal(h.get('#translation-listen').hidden,true);assert.doesNotMatch(h.get('#translation-status').textContent,/took too long/);h.idle();
});
test('editing after success clears all stale output and playback',async()=>{
  const h=harness(response('你好'),response('Hello'));await h.mode('mixed');await h.submit();
  assert.equal(h.get('#meaning-result').hidden,false);await h.edit('#translation-text','different input');
  assert.equal(h.get('#translation-result').textContent,'…');assert.equal(h.get('#meaning-result').hidden,true);assert.equal(h.get('#back-translation').textContent,'');
  await h.get('#translation-listen').emit('click');assert.deepEqual(h.spoken,[]);h.idle();
});
test('an old success cannot clear or overwrite a newer pending request',async()=>{
  const old=deferred(),newer=deferred(),h=harness(old.fetch,newer.fetch);
  const first=h.submit();await h.edit('#translation-text','new input');const second=h.submit();
  old.resolve(response('旧结果'));await first;
  assert.equal(h.get('#translation-result').textContent,'…');assert.equal(h.get('#translate-submit').disabled,true);
  assert.equal(h.get('.translation-output').attributes['aria-busy'],'true');assert.equal(h.timers.size,1);
  newer.resolve(response('新结果'));await second;assert.equal(h.get('#translation-result').textContent,'新结果');h.idle();
});
test('an old failure cannot overwrite a newer completed result',async()=>{
  const old=deferred(),h=harness(old.fetch,response('新结果'));const first=h.submit();
  await h.edit('#translation-text','new input');await h.submit();old.reject(new TypeError('Old connection failed'));await first;
  assert.equal(h.get('#translation-result').textContent,'新结果');assert.match(h.get('#translation-status').textContent,/Ready to practice/);h.idle();
});
test('a stale Chinese pipeline stops before issuing any further segment',async()=>{
  const old=deferred(),h=harness(response('first English'),old.fetch,response('新结果'));await h.mode('chinese');
  const first=h.submit();await flush();assert.equal(h.requests.length,2);
  await h.mode('translate');h.get('#translation-text').value='new sentence';await h.submit();
  old.resolve(response('旧结果'));await first;assert.equal(h.requests.length,3);assert.equal(h.get('#translation-result').textContent,'新结果');h.idle();
});
test('changing help modes preserves the selected original language',async()=>{
  const h=harness();h.get('#source-language').value='fr';await h.mode('mixed');await h.mode('translate');
  assert.equal(h.get('#source-language').value,'fr');assert.equal(h.get('#source-language').hidden,false);assert.equal(h.get('#source-language').disabled,false);h.idle();
});

(async()=>{
  for(const {name,run} of testCases) {
    try {await run();console.log('PASS '+name);}
    catch(error) {console.error('FAIL '+name);throw error;}
  }
  console.log(`PASS: ${testCases.length} translation controller cases; all requests mocked, no real API calls.`);
})().catch(error=>{console.error(error);process.exitCode=1;});
