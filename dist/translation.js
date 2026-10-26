(() => {
  'use strict';
  const q=selector=>document.querySelector(selector);
  const form=q('#translation-form'),modeSelect=q('#help-mode'),sourceSelect=q('#source-language');
  const textInput=q('#translation-text'),intentInput=q('#intended-meaning');
  const status=q('#translation-status'),output=q('.translation-output'),result=q('#translation-result');
  const listen=q('#translation-listen'),submit=q('#translate-submit'),meaningResult=q('#meaning-result');
  const descriptions={
    translate:'Choose the original language and enter a word or sentence.',
    mixed:'Write English and Chinese together. We will try translating it into Chinese. This can miss context and does not check grammar.',
    chinese:'Try a Chinese → English → Chinese rephrasing. This can change your meaning; compare the English meaning carefully. This is not a grammar correction.'
  };
  let latestTranslation='',activeRequest=null;
  const submitLabel=()=>modeSelect.value==='translate'?'Translate to Chinese ↗':'Find a possible expression ↗';

  function clearResult() {
    latestTranslation='';result.textContent='…';listen.hidden=true;meaningResult.hidden=true;
    q('#back-translation').textContent='';
  }
  function invalidate(message='Your input changed. Translate again to see a matching result.') {
    const previous=activeRequest;
    activeRequest=null;
    if(previous) {clearTimeout(previous.timer);previous.controller.abort();}
    clearResult();submit.disabled=false;submit.textContent=submitLabel();output.setAttribute('aria-busy','false');
    status.textContent=message;
  }
  function updateMode() {
    const mode=modeSelect.value;
    q('#mode-description').textContent=descriptions[mode];
    sourceSelect.disabled=mode!=='translate';sourceSelect.hidden=mode!=='translate';
    q('label[for="source-language"]').hidden=mode!=='translate';
    q('#meaning-label').hidden=mode==='translate';intentInput.hidden=mode==='translate';
    textInput.placeholder=mode==='mixed'?'e.g. 我 want to learn 中文':mode==='chinese'?'例如：我昨天去学校了。':'e.g. hello, friendship, I love learning';
    q('#result-label').textContent=mode==='translate'?'简体中文 / SIMPLIFIED CHINESE':'POSSIBLE PHRASING / TRANSLATION-BASED';
    invalidate('Ready for your next sentence.');
  }
  modeSelect.addEventListener('change',updateMode);
  sourceSelect.addEventListener('change',()=>invalidate());
  textInput.addEventListener('input',()=>invalidate());
  intentInput.addEventListener('input',()=>invalidate());

  async function translateSegment(text,from,to,signal) {
    if(new TextEncoder().encode(text).length>500)throw new Error('The text is too long for the translation service. Try a shorter sentence.');
    const url=new URL('https://api.mymemory.translated.net/get');
    url.searchParams.set('q',text);url.searchParams.set('langpair',from+'|'+to);
    const response=await fetch(url,{signal,credentials:'omit',referrerPolicy:'no-referrer'});
    if(response.status===429)throw new Error('The free translation limit has been reached. Please try again later.');
    if(!response.ok)throw new Error('The translation service is unavailable. Please try again shortly.');
    let data;
    try {data=await response.json();}
    catch(error) {
      if(error.name==='AbortError')throw error;
      throw new Error('The translation service returned an unreadable response. Please try again.');
    }
    if(data?.quotaFinished===true||data?.quotaFinished==='true'||Number(data?.responseStatus)===429)throw new Error('The free translation limit has been reached. Please try again later.');
    if(Number(data?.responseStatus)!==200||typeof data?.responseData?.translatedText!=='string'||!data.responseData.translatedText.trim())throw new Error('No translation was returned. Try a shorter sentence or provide your intended meaning in English.');
    const parsed=new DOMParser().parseFromString(data.responseData.translatedText,'text/html');
    const value=parsed.body.textContent.trim();
    if(!value)throw new Error('No usable translation was returned. Please try a different phrase.');
    return value;
  }
  form.addEventListener('submit',async event=>{
    event.preventDefault();
    if(activeRequest)return;
    const snapshot=Object.freeze({
      text:textInput.value.trim(),mode:modeSelect.value,source:sourceSelect.value,
      intent:modeSelect.value==='translate'?'':intentInput.value.trim()
    });
    if(!snapshot.text) {invalidate('Enter a word or sentence first.');return;}
    if([snapshot.text,snapshot.intent].some(text=>text.length>150||new TextEncoder().encode(text).length>500)) {
      invalidate('Please keep each input within 150 characters and 500 UTF-8 bytes.');return;
    }
    const request={controller:new AbortController(),timer:null};
    activeRequest=request;
    request.timer=setTimeout(()=>request.controller.abort(),30000);
    clearResult();submit.disabled=true;submit.textContent='Finding your words…';output.setAttribute('aria-busy','true');
    status.textContent=snapshot.mode==='translate'?'Translating into Chinese…':'Preparing a translation-based suggestion…';
    const segment=async(text,from,to)=>{
      const value=await translateSegment(text,from,to,request.controller.signal);
      if(activeRequest!==request||request.controller.signal.aborted) {
        const error=new Error('Translation canceled.');error.name='AbortError';throw error;
      }
      return value;
    };
    try {
      let chinese,meaning='';
      if(snapshot.intent) {
        chinese=await segment(snapshot.intent,'en','zh-CN');meaning=await segment(chinese,'zh-CN','en');
      } else if(snapshot.mode==='chinese') {
        meaning=await segment(snapshot.text,'zh-CN','en');chinese=await segment(meaning,'en','zh-CN');meaning=await segment(chinese,'zh-CN','en');
      } else {
        chinese=await segment(snapshot.text,snapshot.mode==='mixed'?'en':snapshot.source,'zh-CN');
        if(snapshot.mode==='mixed')meaning=await segment(chinese,'zh-CN','en');
      }
      if(activeRequest!==request)return;
      latestTranslation=chinese;result.textContent=chinese;listen.hidden=false;
      if(meaning) {q('#back-translation').textContent=meaning;meaningResult.hidden=false;}
      status.textContent=snapshot.mode==='translate'?'Ready to practice. Listen, then try saying it aloud.':snapshot.intent?'Based on your English meaning, rather than a correction of the original. Check that the meaning still matches.':'A possible expression, not a verified correction. Check the English meaning; if it is wrong, add your intended meaning and try again.';
    } catch(error) {
      if(activeRequest!==request)return;
      clearResult();
      status.textContent=error.name==='AbortError'?'That took too long. Please try again.':error instanceof TypeError?'Could not connect to the translation service. Check your connection and try again.':error.message||'The translation could not be completed. Please try again.';
    } finally {
      clearTimeout(request.timer);
      if(activeRequest===request) {
        activeRequest=null;submit.disabled=false;submit.textContent=submitLabel();output.setAttribute('aria-busy','false');
      }
    }
  });
  listen.addEventListener('click',()=>{
    if(!latestTranslation)return;
    if(!('speechSynthesis' in window)) {status.textContent='Your browser does not support speech playback.';return;}
    speak(latestTranslation);
  });
})();
