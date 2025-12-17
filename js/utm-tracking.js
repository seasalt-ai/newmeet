(function(){
  const UTM_PARAMETERS = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content'];
  const UTM_STORAGE_KEY = 'seameet_utm_params';
  function extractUTMFromURL(url){
    try{const u=new URL(url||window.location.href);const p={};UTM_PARAMETERS.forEach(k=>{const v=u.searchParams.get(k);if(v){p[k]=v;}});return p;}catch{return {}}}
  function saveUTMParams(params){ if(Object.keys(params).length){ try{ sessionStorage.setItem(UTM_STORAGE_KEY, JSON.stringify(params)); (window.dataLayer=window.dataLayer||[]).push({event:'utm_params_captured',utm_params:params}); }catch{}}
  }
  function getSavedUTMParams(){ try{const s=sessionStorage.getItem(UTM_STORAGE_KEY); return s?JSON.parse(s):{};}catch{return {}} }
  function appendUTMToURL(url, params){ if(!params||!Object.keys(params).length) return url; try{const u=new URL(url); Object.entries(params).forEach(([k,v])=>{ if(v) u.searchParams.set(k,v); }); return u.toString(); }catch{ return url; } }
  function isExternalLink(url){ try{const u=new URL(url); return u.hostname!==window.location.hostname;}catch{ return false; } }
  function setupExternalLinkTracking(){ document.addEventListener('click', (e)=>{ const link=e.target && e.target.closest ? e.target.closest('a') : null; if(!link||!link.href) return; if(isExternalLink(link.href)){ const saved=getSavedUTMParams(); if(Object.keys(saved).length){ link.href=appendUTMToURL(link.href, saved); (window.dataLayer=window.dataLayer||[]).push({event:'external_link_click_with_utm', link_url:link.href, utm_params:saved, link_text:link.textContent||link.innerText||''}); } } }); }
  function init(){ const current=extractUTMFromURL(); if(Object.keys(current).length){ saveUTMParams(current); }
    setupExternalLinkTracking(); const saved=getSavedUTMParams(); if(Object.keys(saved).length){ (window.dataLayer=window.dataLayer||[]).push({event:'page_view_with_utm', page_location:window.location.href, page_title:document.title, utm_params:saved}); } }
  if(document.readyState==='loading'){ document.addEventListener('DOMContentLoaded', init); } else { init(); }
  window.seameetUTM={ getUTMStatus(){ return { currentUTM:extractUTMFromURL(), savedUTM:getSavedUTMParams(), hasUTM:Object.keys(getSavedUTMParams()).length>0 }; }, clearUTM(){ try{ sessionStorage.removeItem(UTM_STORAGE_KEY);}catch{} } };
})();