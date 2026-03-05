const CACHE_NAME = "feedlot-pro-v1";

const urlsToCache = [
  "/Feedlot_Pro/",
  "/Feedlot_Pro/index.html",
  "/Feedlot_Pro/manifest.json",
  "/Feedlot_Pro/icon.png"
];

self.addEventListener("install", function(event) {
  event.waitUntil(
    caches.open(CACHE_NAME).then(function(cache) {
      return cache.addAll(urlsToCache);
    })
  );
});

self.addEventListener("fetch", function(event) {
  event.respondWith(
    caches.match(event.request).then(function(response) {
      return response || fetch(event.request);
    })
  );
});
