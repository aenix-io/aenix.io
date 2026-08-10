# PR template — aenix.io

## What

<!-- One-paragraph summary -->

## Why

<!-- Goal / background -->

## Type of change

- [ ] New page (landing / article / lead-magnet / etc.)
- [ ] Content edit (existing page)
- [ ] Hugo template / partial / shortcode
- [ ] Infrastructure / config / CI
- [ ] Other: ___

## SEO/GEO checklist (REQUIRED for new or edited landing pages)

- [ ] `page_type` set in frontmatter
- [ ] `description` 145-160 chars
- [ ] `direct_answer` 75-150 word bold paragraph
- [ ] `quick_facts` 5-7 labeled bullets
- [ ] `faq` ≥4 Q&A entries
- [ ] Companion blog article exists with **different parent_topic** (no cannibalization)
- [ ] Customer evidence either has permission or is left as TODO placeholder
- [ ] DE locale page added if applicable (DACH market priority)
- [ ] `static/llms.txt` updated if this is a top-30 priority page

## Testing

- [ ] `hugo --gc --minify --logLevel info` runs clean (no SEO ERRORs)
- [ ] `./scripts/validate-frontmatter.sh` passes
- [ ] Visual review of rendered page on local Hugo server
- [ ] All `{{LOGOS}}`, `{{QUOTE_X}}`, `{{PRICING_*}}`, `{{PIPEDRIVE_FORM_*}}` placeholders replaced or explicit-TODO

## CNCF neutrality (cozystack.io repo only)

- [ ] No funnel-links to aenix.io added
- [ ] No commercial CTAs
- [ ] Vendor-neutral language preserved

(Skip this section for aenix.io repo PRs.)

## Reviewers

<!-- Tag relevant reviewers; do not @-mention Timur (he sees his own repo PRs automatically) -->

---

By submitting this PR I confirm I read `CLAUDE.md` and `PAGE_CREATION_PLAYBOOK.md`.
