// Fosenger service worker (generated at build time)
const CACHE = 'fosenger-142ff35';
const FILES = ["index.html","favicon.svg","manifest.webmanifest","icon-192.png","icon-512.png","assets/index-CvwYbqc7.js","assets/index-SZ30X2bh.css"];
const scopeUrl = (path) => new URL(path, self.registration.scope).href;
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches
      .open(CACHE)
      .then((cache) => Promise.all(FILES.map((file) => cache.add(scopeUrl(file)).catch(() => undefined))))
      .then(() => self.skipWaiting()),
  );
});
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((keys) => Promise.all(keys.filter((key) => key.startsWith('fosenger-') && key !== CACHE).map((key) => caches.delete(key))))
      .then(() => self.clients.claim()),
  );
});
self.addEventListener('fetch', (event) => {
  const request = event.request;
  if (request.method !== 'GET') return;
  const url = new URL(request.url);
  if (url.origin !== self.location.origin || !url.protocol.startsWith('http')) return;
  if (request.mode === 'navigate') {
    const index = scopeUrl('index.html');
    event.respondWith(
      fetch(request)
        .then((response) => {
          if (response.ok) caches.open(CACHE).then((cache) => cache.put(index, response.clone()));
          return response;
        })
        .catch(() => caches.match(index)),
    );
    return;
  }
  event.respondWith(
    caches.match(request).then(
      (hit) =>
        hit ||
        fetch(request).then((response) => {
          if (response.ok && url.pathname.includes('/assets/')) caches.open(CACHE).then((cache) => cache.put(request, response.clone()));
          return response;
        }),
    ),
  );
});
