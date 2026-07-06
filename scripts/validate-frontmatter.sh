#!/usr/bin/env bash
# validate-frontmatter.sh — pre-commit / CI validation for aenix.io page frontmatter.
#
# Catches missing required SEO/GEO frontmatter BEFORE Hugo build runs.
# Faster feedback than waiting for Hugo to fail.
#
# Mirrors the authoritative validation in layouts/partials/seo/head.html:
#   - page_type is auto-assigned by section via the cascade block in hugo.yaml,
#     so it is derived from the file path here when absent from frontmatter.
#   - Missing page_type / description are WARN-level (like Hugo warnf).
#   - Missing GEO fields (direct_answer / quick_facts / faq >= 4) on landing
#     types are ERROR-level (like Hugo errorf) and fail the run.
#
# Install as pre-commit hook:
#   ln -s "$(pwd)/scripts/validate-frontmatter.sh" .git/hooks/pre-commit
#
# Or invoke in CI:
#   - name: Validate page frontmatter
#     run: ./scripts/validate-frontmatter.sh

set -euo pipefail

# Colors
RED='\033[0;31m'
YELLOW='\033[1;33m'
GREEN='\033[0;32m'
NC='\033[0m'

CONTENT_DIR="${CONTENT_DIR:-content}"

if [[ ! -d "$CONTENT_DIR" ]]; then
  echo -e "${YELLOW}validate-frontmatter: $CONTENT_DIR not found, skipping${NC}"
  exit 0
fi

ERRORS=0
WARNINGS=0
PAGES_CHECKED=0

# Page types that REQUIRE GEO frontmatter
REQUIRES_GEO=("solution-landing" "services-landing" "industry-landing" "compare" "alternative" "migration-hub" "lead-magnet" "product")

is_geo_required() {
  local type="$1"
  for t in "${REQUIRES_GEO[@]}"; do
    [[ "$t" == "$type" ]] && return 0
  done
  return 1
}

# Mirror of the cascade block in hugo.yaml. Takes the page's logical path
# (relative to content/, locale prefix stripped, no _index.md/index.md/.md
# suffix) and prints the cascaded page_type, or nothing if no target matches.
# Cascade targets use '<section>/**', which matches pages BELOW the section
# root but not the root itself — same as Hugo's glob semantics.
cascade_page_type() {
  local p="$1"
  case "$p" in
    solutions/*|loesungen/*)           echo "solution-landing" ;;
    services/*|dienstleistungen/*)     echo "services-landing" ;;
    industries/*|branchen/*)           echo "industry-landing" ;;
    alternatives/*|alternativen/*)     echo "alternative" ;;
    compare/*|vergleichen/*)           echo "compare" ;;
    migration/*)                       echo "migration-hub" ;;
    resources/*|ressourcen/*)          echo "lead-magnet" ;;
    products/*|produkte/*)             echo "product" ;;
    for/*|fuer/*)                      echo "flag-page" ;;
    blog/*)                            echo "blog-article" ;;
  esac
}

# Check a single markdown file
check_page() {
  local file="$1"
  local rel="${file#./}"

  # Extract frontmatter (between --- markers)
  local fm
  fm=$(awk '/^---$/{c++; if(c==2) exit; next} c==1' "$file")

  # Skip if no frontmatter
  [[ -z "$fm" ]] && return 0

  PAGES_CHECKED=$((PAGES_CHECKED + 1))

  # Logical page path: strip content dir, locale prefix, and file name
  local logical="${rel#"$CONTENT_DIR"/}"
  logical="${logical#de/}"
  local is_branch=0
  case "$logical" in
    *_index.md) is_branch=1 ;;
  esac
  logical="${logical%_index.md}"
  logical="${logical%index.md}"
  logical="${logical%.md}"
  logical="${logical%/}"

  # page_type: explicit frontmatter wins, then the hugo.yaml cascade.
  local page_type=""
  if grep -q '^page_type:' <<< "$fm"; then
    page_type=$(grep '^page_type:' <<< "$fm" | head -1 | sed 's/^page_type:[[:space:]]*//' | tr -d '"' | tr -d "'" | xargs)
  else
    page_type=$(cascade_page_type "$logical")
  fi

  if [[ -z "$page_type" ]]; then
    if [[ $is_branch -eq 1 || -z "$logical" ]]; then
      # home/section kinds default to flag-page with no GEO requirement
      page_type="flag-page"
    else
      echo -e "${YELLOW}SEO WARNING${NC} — $rel: missing frontmatter ${YELLOW}page_type${NC} (no cascade match; Hugo will default non-content kinds to flag-page)"
      WARNINGS=$((WARNINGS + 1))
      page_type="flag-page"
    fi
  fi

  # description: warn-level, matching Hugo warnf
  if ! grep -q '^description:' <<< "$fm"; then
    echo -e "${YELLOW}SEO WARNING${NC} — $rel: missing frontmatter ${YELLOW}description${NC}"
    WARNINGS=$((WARNINGS + 1))
  fi

  # GEO required for landing types (hard-fail, matching Hugo errorf)
  if is_geo_required "$page_type"; then
    if ! grep -q '^direct_answer:' <<< "$fm"; then
      echo -e "${RED}SEO ERROR${NC} — $rel (type=$page_type): missing required frontmatter ${YELLOW}direct_answer${NC}"
      ERRORS=$((ERRORS + 1))
    fi
    if ! grep -q '^quick_facts:' <<< "$fm"; then
      echo -e "${RED}SEO ERROR${NC} — $rel (type=$page_type): missing required frontmatter ${YELLOW}quick_facts${NC}"
      ERRORS=$((ERRORS + 1))
    fi
    if ! grep -q '^faq:' <<< "$fm"; then
      echo -e "${RED}SEO ERROR${NC} — $rel (type=$page_type): missing required frontmatter ${YELLOW}faq${NC}"
      ERRORS=$((ERRORS + 1))
    else
      # Count FAQ entries (lines starting with "- q:" inside faq: block)
      local faq_count
      faq_count=$(awk '/^faq:/{flag=1; next} /^[a-z_]+:/ && !/^  /{flag=0} flag && /^[[:space:]]*-[[:space:]]*q:/{c++} END{print c+0}' <<< "$fm")
      if [[ "$faq_count" -lt 4 ]]; then
        echo -e "${RED}SEO ERROR${NC} — $rel: only ${faq_count} FAQ questions. Minimum 4 required for FAQPage schema."
        ERRORS=$((ERRORS + 1))
      fi
    fi
  fi
}

# Walk content tree
while IFS= read -r -d '' file; do
  check_page "$file"
done < <(find "$CONTENT_DIR" -type f -name '*.md' -print0)

# Summary
echo
if [[ $WARNINGS -gt 0 ]]; then
  echo -e "${YELLOW}!${NC} validate-frontmatter: ${WARNINGS} warnings (non-blocking)"
fi
if [[ $ERRORS -eq 0 ]]; then
  echo -e "${GREEN}✓${NC} validate-frontmatter: ${PAGES_CHECKED} pages OK"
  exit 0
else
  echo -e "${RED}✗${NC} validate-frontmatter: ${ERRORS} errors across ${PAGES_CHECKED} pages"
  echo -e "See ${YELLOW}docs/FRONTMATTER_SCHEMA.md${NC} for the contract."
  exit 1
fi
