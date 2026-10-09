#!/usr/bin/env bash
# Builds the Ænix Platform (cozyportal) demo into ../static/demo-app and wires
# it up for static hosting on GitHub Pages.
#
# The demo is a standalone app (aenix-org/cozyportal-demo, package
# @cozyportal/portal) with a fully in-memory mock — no backend, no oauth, no
# Keycloak. It is built as one bundle with the back-office inside
# (WITH_ADMIN=1, the Admin entry in the top bar) and the /demo-app/ sub-path
# base.
#
#   demo-src/build.sh [cozyportal-demo-ref]   # ref defaults to "master"
#
# The site page at /demo/ (layout demo-app) embeds this build in an iframe, so
# a refresh always reloads /demo/ (a real page) and the site nav stays on top.
# Cross-section links inside the app navigate client-side (see the shared
# Header), so the iframe never does a full page load that GitHub Pages (which
# has no sub-path fallback) would answer with a 404.
set -euo pipefail

REF="${1:-master}"
HERE="$(cd "$(dirname "$0")" && pwd)"
SITE="$(cd "$HERE/.." && pwd)"
WORK="$(mktemp -d)"; trap 'rm -rf "$WORK"' EXIT
SRC="$WORK/cozyportal"

echo "==> cloning cozyportal-demo @ $REF"
# cozyportal-demo is private and in a different org, so CI needs an explicit
# token; locally `gh auth` already covers it via the credential helper.
if [ -n "${DEMO_SRC_TOKEN:-}" ]; then
  CLONE_URL="https://x-access-token:${DEMO_SRC_TOKEN}@github.com/aenix-org/cozyportal-demo.git"
else
  CLONE_URL="https://github.com/aenix-org/cozyportal-demo.git"
fi
git clone --depth 1 --branch "$REF" "$CLONE_URL" "$SRC"

echo "==> patching Ænix branding (logo, favicon, title, sign-in mock-ups)"
# Upstream's demo identity is an "Ænix Platform" stacked-cube mark. The page on
# aenix.io uses the site's own Ænix wordmark and favicon instead, so a rebuild
# stays on-brand. The portal reads its brand from public/env.js (BRAND_*), the
# static sign-in mock-ups under public/auth carry their own logo and title.
python3 - "$SRC" "$SITE" <<'PY'
import base64, json, re, shutil, sys
from pathlib import Path
src, site = Path(sys.argv[1]), Path(sys.argv[2])
pub = src / "apps/portal/public"

def must_sub(pattern, repl, text, where, flags=0):
    new, n = re.subn(pattern, lambda _m: repl, text, count=1, flags=flags)
    if n != 1:
        sys.exit(f"branding patch: {pattern!r} not found in {where}")
    return new

# Ænix wordmark (blue, for the white header) followed by the product name in
# the page font. Inline SVG, so the <text> inherits the app's Inter.
logo = (site / "static/images/logo-full-blue.svg").read_text()
inner = re.search(r"<svg[^>]*>(.*)</svg>", logo, re.S).group(1).strip()
mark = (
    '<svg width="548" height="84" viewBox="22 108 548 84" fill="none" '
    'xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Ænix Platform">'
    f"{inner}"
    '<text x="296" y="186" font-family="Inter, system-ui, sans-serif" '
    'font-size="56" font-weight="600" fill="#334155">Platform</text></svg>'
)

env = pub / "env.js"
js = env.read_text()
for key, val in (("BRAND_NAME", "Ænix Platform"), ("BRAND_TITLE", "Ænix Platform — demo"),
                 ("BRAND_LOGO_SVG", mark)):
    js = must_sub(rf"^(\s*){key}: .*,$", f"  {key}: {json.dumps(val, ensure_ascii=False)},", js, env, re.M)
env.write_text(js)

for name in ("favicon.svg", "favicon.png", "apple-touch-icon.png"):
    shutil.copy(site / "static" / name, pub / name)
icons = ('<link rel="icon" type="image/svg+xml" href="/favicon.svg" />\n'
         '    <link rel="icon" type="image/png" href="/favicon.png" />\n'
         '    <link rel="apple-touch-icon" href="/apple-touch-icon.png" />')
index = src / "apps/portal/index.html"
html = index.read_text()
html = must_sub(r'<link rel="icon" href="/favicon\.ico".*?<link rel="apple-touch-icon"[^>]*>', icons, html, index, re.S)
index.write_text(html)

# The saved Keycloak pages carry a <base href> into the original host, so a
# relative icon path would miss: the favicon is inlined as a data: URI.
fav = base64.b64encode((site / "static/favicon.svg").read_bytes()).decode()
auth_icons = f'<link rel="icon" type="image/svg+xml" href="data:image/svg+xml;base64,{fav}">'
for page in sorted((pub / "auth").glob("*.html")):
    html = page.read_text()
    html = must_sub(r"<title>[^<]*</title>", "<title>Sign in — Ænix Platform demo</title>", html, page)
    html = re.sub(r'<link rel="icon"[^>]*>', "", html)
    html = html.replace("</title>", "</title>" + auth_icons, 1)
    html = must_sub(r'<svg class="h-8 w-auto" width="268".*?</svg>',
                    mark.replace("<svg ", '<svg class="h-8 w-auto" ', 1), html, page, re.S)
    page.write_text(html)
print("branded")
PY

echo "==> installing + building portal with the back-office (base /demo-app/)"
( cd "$SRC"
  corepack enable >/dev/null 2>&1 || true
  # pnpm 11 fails the install outright when a dependency's build script is
  # ignored (ERR_PNPM_IGNORED_BUILDS). The only one here is msw, whose
  # postinstall drops a service worker into a dev server's public dir — a
  # static production build never uses it, so the strictness buys nothing.
  pnpm install --frozen-lockfile=false --config.strict-dep-builds=false
  # Call the vite binary directly (skips pnpm's deps-status check and the
  # package build's tsc typecheck — this is a demo, not a type gate).
  VITE_BIN="$SRC/node_modules/.bin/vite"
  [ -x "$VITE_BIN" ] || VITE_BIN="$SRC/apps/portal/node_modules/.bin/vite"
  ( cd apps/portal && WITH_ADMIN=1 DEMO_BASE_PATH=/demo-app/ "$VITE_BIN" build )
  # SPA deep links: on refresh GitHub Pages serves the folder's 404.html.
  cp apps/portal/dist/index.html apps/portal/dist/404.html )

echo "==> publishing to static/demo-app"
rm -rf "$SITE/static/demo-app"; mkdir -p "$SITE/static/demo-app"
cp -R "$SRC/apps/portal/dist/." "$SITE/static/demo-app/"
echo "==> done: $(find "$SITE/static/demo-app" -type f | wc -l) files in static/demo-app"

echo "==> robots, fonts and next-step bar for the vendored apps"
python3 "$SITE/scripts/harden-static-apps.py"
