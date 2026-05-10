#!/usr/bin/env bash
# validate-frontmatter.sh — pre-commit / CI validation for aenix.io page frontmatter.
#
# Catches missing required SEO/GEO frontmatter BEFORE Hugo build runs.
# Faster feedback than waiting for Hugo to fail.
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

# Find content/*/<section>/_index.md and content/**/*.md (excluding _index of root)
CONTENT_DIR="${CONTENT_DIR:-content}"

if [[ ! -d "$CONTENT_DIR" ]]; then
  echo -e "${YELLOW}validate-frontmatter: $CONTENT_DIR not found, skipping${NC}"
  exit 0
fi

ERRORS=0
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

  # Required: page_type
  if ! grep -q '^page_type:' <<< "$fm"; then
    echo -e "${RED}SEO ERROR${NC} — $rel: missing required frontmatter ${YELLOW}page_type${NC}"
    ERRORS=$((ERRORS + 1))
    return
  fi

  local page_type
  page_type=$(grep '^page_type:' <<< "$fm" | head -1 | sed 's/^page_type:[[:space:]]*//' | tr -d '"' | tr -d "'" | xargs)

  # Required: description
  if ! grep -q '^description:' <<< "$fm"; then
    echo -e "${RED}SEO ERROR${NC} — $rel: missing required frontmatter ${YELLOW}description${NC}"
    ERRORS=$((ERRORS + 1))
  fi

  # GEO required for landing types
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
if [[ $ERRORS -eq 0 ]]; then
  echo -e "${GREEN}✓${NC} validate-frontmatter: ${PAGES_CHECKED} pages OK"
  exit 0
else
  echo -e "${RED}✗${NC} validate-frontmatter: ${ERRORS} errors across ${PAGES_CHECKED} pages"
  echo -e "See ${YELLOW}hugo-templates/FRONTMATTER_SCHEMA.md${NC} for the contract."
  exit 1
fi
