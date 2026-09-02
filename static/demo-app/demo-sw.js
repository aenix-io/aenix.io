// Canned Keycloak Account API for the static demo (GitHub Pages has no backend).
const CANNED = {"": {"username": "john.smith", "firstName": "John", "lastName": "Smith", "email": "john.smith@acme.com", "emailVerified": true, "attributes": {"locale": ["en"]}, "userProfileMetadata": {"attributes": [{"name": "username", "readOnly": true}, {"name": "email", "readOnly": false}, {"name": "firstName", "readOnly": false}, {"name": "lastName", "readOnly": false}]}}, "/credentials": [{"type": "password", "category": "basic-authentication", "displayName": "password", "helptext": "my-password-help-text", "createAction": "UPDATE_PASSWORD", "updateAction": "UPDATE_PASSWORD", "removeable": false, "userCredentialMetadatas": [{"credential": {"id": "demo-credential-password", "type": "password", "userLabel": "", "createdDate": 1773705600000}}]}], "/sessions/devices": [{"os": "macOS", "osVersion": "15.3", "browser": "Chrome/141.0.0", "device": "Other", "lastAccess": 1781478000000, "current": true, "sessions": [{"id": "demo-session-current", "ipAddress": "203.0.113.10", "started": 1781467200000, "lastAccess": 1781478000000, "expires": 1781503200000, "clients": {"cozy-portal": "Cozy Portal"}, "browser": "Chrome/141.0.0", "current": true}]}]};
self.addEventListener("install", () => self.skipWaiting());
self.addEventListener("activate", (e) => e.waitUntil(self.clients.claim()));
self.addEventListener("fetch", (e) => {
  const m = new URL(e.request.url).pathname.match(/\/kc(\/.*|)$/);
  if (!m) return;
  const json = (o) => new Response(JSON.stringify(o), { headers: { "content-type": "application/json" } });
  if (e.request.method !== "GET") { e.respondWith(json({})); return; }
  const s = m[1] || "";
  e.respondWith(json((Object.prototype.hasOwnProperty.call(CANNED, s) ? CANNED[s] : CANNED[""]) ?? {}));
});
