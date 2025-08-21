// Empty service worker to prevent 404 errors
// This file exists to stop browsers from generating 404 errors when looking for service workers

self.addEventListener('install', function(event) {
  // Skip waiting to activate immediately
  self.skipWaiting();
});

self.addEventListener('activate', function(event) {
  // Claim all clients immediately
  event.waitUntil(self.clients.claim());
});
