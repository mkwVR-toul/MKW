const CACHE_NAME = "mk-app-cache-v1";
const urlsToCache = [
  "./",
  "./index.html",
  "https://cdn.jsdelivr.net/npm/chart.js"
];

self.addEventListener("install", e => {
  e.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener("fetch", e => {
  e.respondWith(
    caches.match(e.request).then(res => res || fetch(e.request))
  );
});
