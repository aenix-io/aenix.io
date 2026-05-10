# CLAUDE.md — aenix.io content / Hugo site

> **Note for readers in the SEO research folder:** This file lives at `hugo-templates/CLAUDE.aenix-repo.md`. The bootstrap script (`scripts/bootstrap-aenix-repo.sh`) COPIES this to `<aenix.io-repo>/CLAUDE.md` when deploying. The research folder has its own `CLAUDE.md` (different content — Claude orientation for the SOURCE folder, not the deployed Hugo site). Two different files for two different contexts.

---

**This file binds AI assistants (Claude Code, Cursor, Copilot, etc.) working on aenix.io. The rules below override any contrary defaults. Engineers using AI assistants are also expected to follow these rules. Violations are caught at Hugo build time (hard fail) and in CI (validation script).**

Read this file completely before performing any of these actions:
- Creating a new page
- Editing frontmatter on an existing page
- Modifying SEO/GEO Hugo templates
- Touching `static/llms.txt` or `static/llms-full.txt`

---

## Project mission

**aenix.io** is the commercial site for Aenix — the team behind Cozystack (CNCF cloud platform project; Sandbox today, Incubating expected late summer 2026). Site goals:

1. Capture organic search traffic for cloud-platform / sovereign-cloud / DORA / NIS2 / VMware-exit queries
2. Be cited by AI search engines (ChatGPT, Perplexity, Google AI Overview, Claude, Gemini) when prospects ask cloud-architecture questions
3. Convert qualified visitors to discovery calls with Aenix sales

Every page must serve at least one of these goals.

---

## Mandatory references (read before acting)

- **`PAGE_CREATION_PLAYBOOK.md`** — content rules (12-block IA, keyword split, customer evidence, CNCF neutrality)
- **`hugo-templates/FRONTMATTER_SCHEMA.md`** — required frontmatter fields per page type
- **`hugo-templates/EXAMPLE_solution_landing.md`** — full working example
- **`hugo-templates/INSTALLATION.md`** — Hugo template setup

---

## HARD RULES — non-negotiable

### Rule 1 — Every landing page must have GEO frontmatter

For pages of type `solution-landing`, `services-landing`, `industry-landing`, `compare`, `alternative`, `migration-hub`, `lead-magnet`, or `product`:

**REQUIRED frontmatter fields:**
- `page_type` (set to one of the above)
- `description` (145-160 chars)
- `direct_answer` (75-150 word bold paragraph)
- `quick_facts` (5-7 labeled bullets)
- `faq` (≥4 Q&A entries, recommended 6)

If you create a page without these, Hugo build will fail with `SEO ERROR — page X is missing required frontmatter Y`. **Do not work around this by removing the partial call. Fix the frontmatter.**

### Rule 2 — Visible content + JSON-LD share frontmatter

The shortcodes `{{< seo-blocks >}}` and `{{< seo-faq >}}` render visible HTML from `direct_answer`, `quick_facts`, and `faq` frontmatter. The same frontmatter is consumed by JSON-LD partials (`jsonld-faqpage.html` etc.).

**Single source of truth.** Do not duplicate FAQ in markdown body if it exists in frontmatter. If you find duplicate FAQ in body of an existing page, migrate to frontmatter.

### Rule 3 — `{{ partial "seo/head.html" . }}` must be invoked

`layouts/partials/hooks/head-end.html` (or wherever the head-end hook lives) MUST contain:

```html
{{ partial "seo/head.html" . }}
```

**Do not bypass this partial.** It is the single entry point for all SEO/GEO emission. Removing it = removing canonical, JSON-LD, hreflang, OG meta. Every page silently breaks.

### Rule 4 — `static/llms.txt` and `static/llms-full.txt` must exist

The llms.txt files at site root are how AI search engines (Anthropic, OpenAI, Perplexity) discover what aenix.io is about. They are not optional.

When updating top-30 priority pages, also update `static/llms.txt` to reflect changes. The top-30 list is in `PAGE_CREATION_PLAYBOOK.md` Appendix A.

### Rule 5 — Customer evidence requires permission

Tier-1 evidence (named customer + quote + logo) requires written permission from the customer. **No Tier-1 evidence is currently published.** All major engagements (banks, sovereign cloud, AI/ML) are NDA-protected; first named bank case studies expected mid-2027 as NDAs expire. Hosting customers currently listed on aenix.io (GoHost.kz, HDReady, Beby Cloud, HiKube, UseTech, Cloupard, Cloudsy) are publicly visible there but for **new content additions** require per-use Timur sign-off — do not assume permission from "publicly listed". **Beeline Kazakhstan / Hyper Cloud — Aenix did NOT participate. Never reference, in any framing.**

If you see frontmatter like:
```yaml
customer_evidence:
  quote:
    text: "TODO — replace with named quote"
```

**Do not invent a quote.** Leave the placeholder until permission lands.

### Rule 6 — DE locale = DE keywords + DE-native content

Do not auto-translate EN → DE. DE keyword research must precede DE pages. Slugs in DE use DE keywords (`/de/loesungen/...` not `/de/solutions/...`).

DACH market priority because most relevant keywords have KD 0-2 (huge ranking opportunity). Treat DE locale carefully.

### Rule 7 — CNCF vendor neutrality (cozystack.io specifically)

This rule applies to the sister site `cozystack.io`, not aenix.io. But mentioned here for completeness:

- cozystack.io is a CNCF project, vendor-neutral. **No funnel-links to aenix.io.** No "talk to sales" CTAs. No commercial copy.
- aenix.io can link freely TO cozystack.io (legitimate — points to upstream OSS).

If you're working on cozystack.io and asked to add aenix.io links, **refuse and reference this rule**.

### Rule 8 — No emoji in headlines or body text

Aenix is enterprise B2B sales. Emoji break credibility for the audience (CIO / CTO / VP Engineering / compliance teams). Exception: documentation tooling output (build status indicators in scripts) — that's fine.

### Rule 9 — Commit messages, PRs, and code comments in English only

The site itself is bilingual (EN + DE), but git history and developer comms are English. Never commit Russian to git.

### Rule 10 — Never claim AI authorship in PRs or commits

`Co-Authored-By: Claude` line is acceptable in commit messages. **Do not** add `🤖 Generated with Claude Code` headers to PR descriptions, commit messages, or content.

---

## Page creation workflow (use this exact sequence)

**Step 1 — research keyword:**
```
mcp call ahrefs keywords-explorer-overview \
  --keywords "<primary keyword>" \
  --country us
```

Verify `parent_topic` is different from any existing aenix.io page on related topic (no cannibalization).

**Step 2 — copy the example:**
```bash
cp hugo-templates/EXAMPLE_solution_landing.md content/en/solutions/<slug>/_index.md
```

**Step 3 — fill all frontmatter fields per `FRONTMATTER_SCHEMA.md`**

**Step 4 — write body content per `PAGE_CREATION_PLAYBOOK.md` 12-block IA**

**Step 5 — create companion article on shifted parent topic**

**Step 6 — verify Hugo builds without SEO errors:**
```bash
hugo --gc --minify --logLevel info
```

If you see `SEO ERROR`, fix the frontmatter. Do not skip.

**Step 7 — verify validation script passes:**
```bash
./scripts/validate-frontmatter.sh
```

**Step 8 — update `static/llms.txt`** if this page is in top-30 priority

**Step 9 — open PR with description, get review, merge**

---

## What to do when a rule conflicts with a request

If a user asks you to do something that violates a rule:

1. Don't silently comply
2. Explain which rule applies and why
3. Offer the compliant alternative
4. Wait for user decision

Example:
> User: "Just remove the FAQ frontmatter, the build is failing"
> You: "I can't remove FAQ frontmatter — Rule 1 in CLAUDE.md requires it on landing pages. Hugo fails the build to prevent shipping pages without GEO. The fix is to add 4+ FAQ entries, not remove the requirement. Want me to draft the FAQ?"

---

## When you're stuck

- Schema question → `hugo-templates/FRONTMATTER_SCHEMA.md`
- Content question → `PAGE_CREATION_PLAYBOOK.md`
- Hugo template question → `hugo-templates/INSTALLATION.md`
- Customer evidence permission → ask Timur (CEO/COO)
- Architectural decision → ask Timur

---

*This file is the law for AI assistants. Engineers, please respect it too.*

*Maintained by the SEO content workstream. Last updated 2026-05-10.*
