#!/usr/bin/env bash
# Builds the Ænix IDP (Cozy Apps) demo into ../static/idp-app.
#
# Source: aenix-org/cozystack-ui @ feat/cozyapps-mock-ui (fork; Railway-styled builder) — a fully self-contained
# in-memory mock (no backend, no /kc, no service worker). Two small patches make
# it servable under a sub-path: a Vite base and a router basename; a third swaps
# the upstream Cozystack branding for Ænix (logo, favicon, title). The site page
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

echo "==> patching Ænix branding (logo, favicon, title)"
# Upstream ships the Cozystack wordmark and favicon; the demo on aenix.io is
# the Ænix IDP, so the brand comes from the site's own assets. Mentions of
# Cozystack in mock data (template maintainers etc.) are left as they are.
python3 - "$SRC" "$SITE" <<'PY'
import sys, shutil
src, site = sys.argv[1], sys.argv[2]
def sub(path, old, new):
    s = open(path).read()
    if new in s:
        return
    if old not in s:
        sys.exit(f"branding patch: {old!r} not found in {path}")
    open(path, "w").write(s.replace(old, new))
app = f"{src}/apps/cozyapps"
ui = f"{src}/packages/ui/src"
# White header: the blue Ænix wordmark replaces the Cozystack one.
shutil.copy(f"{site}/static/images/logo-full-blue.svg", f"{ui}/assets/logo.svg")
sub(f"{ui}/components/Logo.tsx", 'title = "Cozystack"', 'title = "Ænix"')
sub(f"{ui}/components/layout/Header.tsx",
    '<Logo className="h-5 w-auto" svgContent={logoSvg} text={logoText} />',
    '<Logo className="h-6 w-auto" svgContent={logoSvg} text={logoText} />'
    '<span className="text-sm font-semibold text-slate-700">IDP</span>')
shutil.copy(f"{site}/static/favicon.svg", f"{app}/public/favicon.svg")
shutil.copy(f"{site}/static/favicon.png", f"{app}/public/favicon.png")
shutil.copy(f"{site}/static/apple-touch-icon.png", f"{app}/public/apple-touch-icon.png")
sub(f"{app}/index.html", '<link rel="icon" type="image/svg+xml" href="/favicon.svg" />',
    '<link rel="icon" type="image/svg+xml" href="/favicon.svg" />\n'
    '    <link rel="icon" type="image/png" href="/favicon.png" />\n'
    '    <link rel="apple-touch-icon" href="/apple-touch-icon.png" />')
sub(f"{app}/index.html", "<title>Cozy User Apps</title>", "<title>Ænix IDP — demo</title>")
print("branded")
PY

echo "==> installing + building (base /idp-app/)"
( cd "$SRC"
  corepack enable >/dev/null 2>&1 || true
  pnpm install --frozen-lockfile=false
  DEMO_BASE_PATH=/idp-app/ pnpm --filter @cozystack/cozyapps build
  # SPA deep links: on refresh GitHub Pages serves the folder's 404.html.
  cp apps/cozyapps/dist/index.html apps/cozyapps/dist/404.html )

echo "==> publishing to static/idp-app"
rm -rf "$SITE/static/idp-app"; mkdir -p "$SITE/static/idp-app"
cp -R "$SRC/apps/cozyapps/dist/." "$SITE/static/idp-app/"
echo "==> done: $(find "$SITE/static/idp-app" -type f | wc -l) files in static/idp-app"

echo "==> robots, fonts and next-step bar for the vendored apps"
python3 "$SITE/scripts/harden-static-apps.py"
