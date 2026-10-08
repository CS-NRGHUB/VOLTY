// Service worker minimo: serve solo a rendere la pagina installabile. Non salva dati in cache.
self.addEventListener("install", () => self.skipWaiting());
self.addEventListener("activate", e => e.waitUntil(self.clients.claim()));
self.addEventListener("fetch", () => {});
