#!/usr/bin/env bash
# Builds the Ænix Platform (cozyportal) demo into ../static/demo-app and wires
# it up for static hosting on GitHub Pages.
#
# The demo is a standalone app (aenix-org/cozyportal-demo) with an in-memory
# mock — it needs no backend except two endpoints: /oauth2/userinfo (a static
# file) and /kc/* (the Keycloak Account API for the User Settings screen).
# GitHub Pages can't serve /kc dynamically, so a tiny service worker
# (demo-sw.js) answers it with canned responses baked from demo-keycloak.json.
#
#   demo-src/build.sh [cozyportal-demo-ref]   # ref defaults to "master"
#
# The site page at /demo/ (layout demo-app) embeds this build in an iframe, so
# a refresh always reloads /demo/ (a real page) and the site nav stays on top.
set -euo pipefail

REF="${1:-master}"
HERE="$(cd "$(dirname "$0")" && pwd)"
SITE="$(cd "$HERE/.." && pwd)"
WORK="$(mktemp -d)"; trap 'rm -rf "$WORK"' EXIT
SRC="$WORK/cozyportal"

echo "==> cloning cozyportal-demo @ $REF"
git clone --depth 1 --branch "$REF" https://github.com/aenix-org/cozyportal-demo.git "$SRC"

echo "==> installing + building portal (base /demo-app/)"
( cd "$SRC"
  corepack enable >/dev/null 2>&1 || true
  pnpm install --frozen-lockfile=false
  DEMO_BASE_PATH=/demo-app/ DEMO_DOCS_URL=https://cozystack.io/docs/ python3 build-env-js.py
  DEMO_BASE_PATH=/demo-app/ VITE_DEMO_MOCK=true pnpm --filter @cozyportal/portal build
  cp apps/portal/public/env.js apps/portal/dist/env.js )

echo "==> generating /kc service worker + injecting registration"
python3 - "$SRC" <<'PY'
import json, sys
src = sys.argv[1]
kc = json.load(open(f"{src}/apps/portal/demo-keycloak.json"))
canned = {"": kc.get(""), "/credentials": kc.get("/credentials"), "/sessions/devices": kc.get("/sessions/devices")}
sw = '''// Canned Keycloak Account API for the static demo (GitHub Pages has no backend).
const CANNED = %s;
self.addEventListener("install", () => self.skipWaiting());
self.addEventListener("activate", (e) => e.waitUntil(self.clients.claim()));
self.addEventListener("fetch", (e) => {
  const m = new URL(e.request.url).pathname.match(/\\/kc(\\/.*|)$/);
  if (!m) return;
  const json = (o) => new Response(JSON.stringify(o), { headers: { "content-type": "application/json" } });
  if (e.request.method !== "GET") { e.respondWith(json({})); return; }
  const s = m[1] || "";
  e.respondWith(json((Object.prototype.hasOwnProperty.call(CANNED, s) ? CANNED[s] : CANNED[""]) ?? {}));
});
''' % json.dumps(canned, ensure_ascii=False)
open(f"{src}/apps/portal/dist/demo-sw.js", "w").write(sw)
idx = f"{src}/apps/portal/dist/index.html"
h = open(idx).read()
reg = '<script>if("serviceWorker"in navigator){navigator.serviceWorker.register("/demo-app/demo-sw.js").catch(()=>{})}</script>'
open(idx, "w").write(h.replace("</head>", reg + "</head>", 1))
print("demo-sw.js + registration ready")
PY

echo "==> publishing to static/demo-app"
rm -rf "$SITE/static/demo-app"; mkdir -p "$SITE/static/demo-app"
cp -R "$SRC/apps/portal/dist/." "$SITE/static/demo-app/"
echo "==> done: $(find "$SITE/static/demo-app" -type f | wc -l) files in static/demo-app"
