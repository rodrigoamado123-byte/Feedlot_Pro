const CACHE_NAME = "feedlot-pro-cache-v1";

const urlsToCache = [
  "./",
  "./index.html",
  "./manifest.json",
  "./icon.png"
];

// INSTALAR SERVICE WORKER
self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log("Cache abierto");
        return cache.addAll(urlsToCache);
      })
  );
});

// ACTIVAR SERVICE WORKER
self.addEventListener("activate", event => {
  console.log("Service Worker activado");
});

// INTERCEPTAR PETICIONES
self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        return response || fetch(event.request);
      })
  );
});
