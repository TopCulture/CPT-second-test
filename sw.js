const V='pharm-plan-v3';
const CORE=['./','index.html','manifest.webmanifest','icon-180.png','icon-192.png','icon-512.png'];
self.addEventListener('install',e=>{e.waitUntil(caches.open(V).then(c=>c.addAll(CORE)).then(()=>self.skipWaiting()));});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(k=>Promise.all(k.filter(x=>x.indexOf('pharm-plan-')===0&&x!==V).map(x=>caches.delete(x)))).then(()=>self.clients.claim()));});
function keep(r,res){if(res&&(res.ok||res.type==='opaque')){const cp=res.clone();caches.open(V).then(c=>c.put(r,cp));}return res;}
self.addEventListener('fetch',e=>{
  const r=e.request,u=new URL(r.url);
  if(r.method!=='GET')return;
  if(u.origin===location.origin){
    // network first, so edits show up as soon as you are online; cache when offline
    e.respondWith(fetch(r,{cache:'no-cache'}).then(res=>keep(r,res)).catch(()=>caches.match(r,{ignoreSearch:true}).then(h=>h||caches.match('./'))));
  }else if(u.hostname==='fonts.googleapis.com'||u.hostname==='fonts.gstatic.com'){
    // fonts: cache first
    e.respondWith(caches.match(r).then(h=>h||fetch(r).then(res=>keep(r,res))));
  }
  // everything else (for example the GitHub API used for sync) goes straight to the network
});
