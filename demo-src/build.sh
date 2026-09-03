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
git clone --depth 1 --branch "$REF" https://github.com/aenix-org/cozyportal-demo.git "$SRC"

echo "==> installing + building console (base /demo-app/)"
( cd "$SRC"
  corepack enable >/dev/null 2>&1 || true
  pnpm install --frozen-lockfile=false
  # Call the vite binary directly (skips pnpm's deps-status check and the
  # package build's tsc typecheck — this is a demo, not a type gate).
  VITE_BIN="$SRC/node_modules/.bin/vite"
  [ -x "$VITE_BIN" ] || VITE_BIN="$SRC/apps/console/node_modules/.bin/vite"
  ( cd apps/console && DEMO_BASE_PATH=/demo-app/ "$VITE_BIN" build )
  # SPA deep links: on refresh GitHub Pages serves the folder's 404.html.
  cp apps/console/dist/index.html apps/console/dist/404.html )

echo "==> publishing to static/demo-app"
rm -rf "$SITE/static/demo-app"; mkdir -p "$SITE/static/demo-app"
cp -R "$SRC/apps/console/dist/." "$SITE/static/demo-app/"
echo "==> done: $(find "$SITE/static/demo-app" -type f | wc -l) files in static/demo-app"
