var CACHE_NAME = 'stephan281094-github-io-v1'
var urlsToCache = [
  '/',
  '/assets/avatar.jpg',
  '/assets/avatar.webp',
  '/assets/favicon.ico',
  '/assets/logo-120.jpg',
  '/assets/logo-144.jpg',
  '/assets/logo-152.jpg',
  '/assets/logo-192.jpg',
  '/assets/logo-384.jpg',
  '/assets/logo-48.jpg',
  '/assets/logo-512.jpg'
]

self.addEventListener('install', function (event) {
  event.waitUntil(
    cache.open(CACHE_NAME)
      .then(function (cache) {
        return cache.addAll(urlsToCache)
      })
  )
})

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        return response ? response : fetch(event.request)
      })
  )
})
