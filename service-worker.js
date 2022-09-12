// const cacheName = 'v1';
// const cacheAssets = [
//     'index.html',
//     '/css/worker.css',
//     '/js/index.js',
//     '/pages/dashboard.html',
//     '/pages/about.html',
//     '/pages/blogs.html'
// ];

// self.addEventListener('install', async(e)=>{
//     console.log({e,msg:"service worker installed"});
//     const cache = await caches.open(cacheName);
//     await cache.addAll(cacheAssets);
//     await self.skipWaiting();
// });

// self.addEventListener('activate',async(e)=>{
//     console.log({e,msg:"service worker activated"});
//     const cachedNames = await caches.keys();
//     cachedNames.forEach(cached=>cached == cacheName ? cached : caches.delete(cached));
// });

// self.addEventListener('fetch',async (e)=>{
//     const resp = fetch(e.request).catch(()=>caches.match(e.request));
//     e.respondWith(resp);
// });

// self.addEventListener('fetch',async (e)=>{
//     e.respondWith(fetch(e.request).
//     then(resp=>{
//         const res = resp.clone();
//         caches.open(cacheName).then(cache=>cache.put(e.request,res));
//         return res;
//     }).catch(err=>caches.match(e.request).then(res=>res))
//     ); 
// });



