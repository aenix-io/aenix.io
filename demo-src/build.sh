#!/usr/bin/env bash
# Builds the Ænix Platform (cozyportal) demo into ../static/demo-app and wires
# it up for static hosting on GitHub Pages.
#
# The demo is a standalone app (aenix-org/cozyportal-demo, package
# @cozyportal/console) with a fully in-memory mock — no backend, no oauth, no
# Keycloak. It just needs to be built with the /demo-app/ sub-path base.
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

echo "==> installing + building console (base /demo-app/)"
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
  [ -x "$VITE_BIN" ] || VITE_BIN="$SRC/apps/console/node_modules/.bin/vite"
  ( cd apps/console && DEMO_BASE_PATH=/demo-app/ "$VITE_BIN" build )
  # SPA deep links: on refresh GitHub Pages serves the folder's 404.html.
  cp apps/console/dist/index.html apps/console/dist/404.html )

# The docs subsite under apps/console/public/docs is a pre-built static site
# vendored into the demo repo, so Vite copies it verbatim and its root-relative
# links (/docs/..., /console, /marketplace, /account, /support, /resources,
# /auth) resolve against aenix.io rather than /demo-app/. Left alone, every
# Docs click inside the live demo lands on a branded 404 — and because this is
# generated output, fixing it by hand lasts until the next refresh. Namespace
# it here instead, so the correction survives every rebuild.
echo "==> namespacing vendored docs links under /demo-app/"
find "$SRC/apps/console/dist" -type f \( -name '*.html' -o -name '*.xml' \) -print0 |
  xargs -0 sed -i.bak -E 's#href="/(docs|console|marketplace|account|support|resources|auth)(/|")#href="/demo-app/\1\2#g; s#href="/"#href="/demo-app/"#g'
find "$SRC/apps/console/dist" -name '*.bak' -delete

echo "==> publishing to static/demo-app"
rm -rf "$SITE/static/demo-app"; mkdir -p "$SITE/static/demo-app"
cp -R "$SRC/apps/console/dist/." "$SITE/static/demo-app/"
echo "==> done: $(find "$SITE/static/demo-app" -type f | wc -l) files in static/demo-app"
