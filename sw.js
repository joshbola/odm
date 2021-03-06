self.addEventListener("install", e => {
    e.waitUntil(
        caches.open("ODM").then(cache => {
            return cache.addAll([
                "./",
                "./Assets/script/app.js",
                "./Assets/style/powder.css",
                "./Assets/images/1.jpg",
                "./Assets/images/logo192.png",
                "./Assets/images/logo512.png",
        ]);
        })
    );
});

self.addEventListener("fetch", e => {
    e.respondWith(
        caches.match(e.request).then(response => {
            return response || fetch(e.request);
        })
    );
});
