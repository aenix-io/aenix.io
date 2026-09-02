#!/usr/bin/env bash
# Builds the Ænix IDP (Cozy Apps) demo into ../static/idp-app.
#
# Source: aenix-org/cozystack-ui @ feat/cozyapps-mock-ui (fork; Railway-styled builder) — a fully self-contained
# in-memory mock (no backend, no /kc, no service worker). Two small patches make
# it servable under a sub-path: a Vite base and a router basename. The site page
# at /idp/ (layout idp-demo) embeds this build in an iframe, so a refresh always
# reloads a real page and the site nav stays on top.
#
#   idp-demo-src/build.sh [ref]   # ref defaults to feat/cozyapps-mock-ui
set -euo pipefail

REF="${1:-feat/cozyapps-mock-ui}"
HERE="$(cd "$(dirname "$0")" && pwd)"; SITE="$(cd "$HERE/.." && pwd)"
WORK="$(mktemp -d)"; trap 'rm -rf "$WORK"' EXIT; SRC="$WORK/ui"

echo "==> cloning cozystack-ui @ $REF"
git clone --depth 1 --branch "$REF" https://github.com/aenix-org/cozystack-ui.git "$SRC"

echo "==> patching base + router basename for sub-path"
python3 - "$SRC" <<'PY'
import sys
src=sys.argv[1]
vf=f"{src}/apps/cozyapps/vite.config.ts"; s=open(vf).read()
if "DEMO_BASE_PATH" not in s:
    s=s.replace("export default defineConfig({",
                'export default defineConfig({\n  base: process.env.DEMO_BASE_PATH || "/",')
    open(vf,"w").write(s)
mf=f"{src}/apps/cozyapps/src/main.tsx"; m=open(mf).read()
if "basename" not in m:
    m=m.replace("<BrowserRouter>",'<BrowserRouter basename={import.meta.env.BASE_URL.replace(/\\/$/, "")}>')
    open(mf,"w").write(m)
print("patched")
PY

echo "==> installing + building (base /idp-app/)"
( cd "$SRC"
  corepack enable >/dev/null 2>&1 || true
  pnpm install --frozen-lockfile=false
  DEMO_BASE_PATH=/idp-app/ pnpm --filter @cozystack/cozyapps build )

echo "==> publishing to static/idp-app"
rm -rf "$SITE/static/idp-app"; mkdir -p "$SITE/static/idp-app"
cp -R "$SRC/apps/cozyapps/dist/." "$SITE/static/idp-app/"
echo "==> done: $(find "$SITE/static/idp-app" -type f | wc -l) files in static/idp-app"
