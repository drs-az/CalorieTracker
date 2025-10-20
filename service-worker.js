self.addEventListener("install", event => {
  event.waitUntil(
    caches.open("calorie-cache").then(cache =>
      cache.addAll([
        "/",
        "/index.html",
        "/manifest.json",
        "/logo-ct.png"
      ])
    )
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(response => response || fetch(event.request))
  );
});
