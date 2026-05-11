# CLAUDE.md — aenix.io content / Hugo site

**This file binds AI assistants (Claude Code, Cursor, Copilot, etc.) working on aenix.io. Read it completely before performing any non-trivial action.**

The site is a Hugo static site published via Netlify. Source of truth: this Git repo. Theme: `themes/aenix/` (custom). Project-level overrides live in `/layouts/`, `/static/`, and `/content/`.

---

## Project mission

**aenix.io** is the commercial site for Aenix — the open-core company behind Cozystack (CNCF Sandbox project; CNCF Incubating expected late summer 2026). Site goals:

1. Capture organic search traffic for cloud-platform / sovereign-cloud / DORA / NIS2 / VMware-exit / AI infra queries
2. Be cited by AI search engines (ChatGPT, Perplexity, Google AI Overview, Claude, Gemini) when prospects ask cloud-architecture questions
3. Convert qualified visitors to discovery calls via Pipedrive forms

Every page should serve at least one of these goals.

---

## Current site state (as of 2026-05-11)

- **5 product editions** under `/products/aenix-platform/` — Public Cloud / ISP / Enterprise / IDP / AI/ML
- **8 solutions** under `/solutions/` — DORA / NIS2 / Data sovereignty / Sovereign AI / Cloud repatriation / Cost optimization / Hybrid cloud / Developer self-service
- **15 services** under `/services/`
- **12 industries** under `/industries/`
- **7 alternatives** under `/alternatives/` (vs VMware / OpenStack / Proxmox / OpenShift / Nutanix / Backstage)
- **4 compare** pages under `/compare/`
- **4 migration hubs** under `/migration/`
- **6 lead-magnet resources** under `/resources/`
- **DE locale** mirrored at `/de/` — 81 landing pages
- **Blog** at `/blog/` — 108 posts, native Hugo blog (not Medium RSS pull):
  - 70 companion articles paired with landing pages (cannibalization-safe, shifted parent_topic)
  - 14 long-form companion articles (May 2026, ~2k words each)
  - 24 imported Medium archive posts (Aug 2024 – Apr 2026)
  - 12 stubs (`external_only: true`) waiting for Andrei Kvapil's Medium archive
  - 24 DE companion articles
- **80 quizzes** (5 questions × ~80 posts, EN + DE)
- **5 Pipedrive web forms** embedded via `{{< pipedrive-form type="..." >}}` — discovery / demo / partner / course / lead-magnet

---

## Preserved pages (DO NOT touch without explicit request)

These were on the legacy site before the redesign and remain authoritative:

- `/blog/` — Hugo native blog content (not the old Medium-RSS loader)
- `/oss-contribution/` — manually maintained OSS contribution report
- `/quiz/modern-cloud/` — existing standalone quiz (separate from blog quizzes)

Legacy content from before redesign is archived (not rendered) at `/home/.../aenix.io/_archive_legacy/` — git history preserved for reference.

---

## Hard rules — non-negotiable

### Rule 1 — Customer evidence requires permission

Tier-1 evidence (named customer + quote + logo) requires written permission. **No Tier-1 evidence is currently published.** Tier-1 European bank engagements: NDA-protected until **mid-2027** as NDAs expire.

Hosting customers publicly listed on aenix.io (GoHost.kz, HDReady, Beby Cloud, HiKube, UseTech, Cloupard, Cloudsy) require per-use Timur sign-off for new content. Don't assume permission from "publicly listed elsewhere."

**Beeline Kazakhstan / Hyper Cloud — Aenix did NOT participate.** Never reference under any framing.

Many landing pages contain literal `{{LOGOS}}`, `{{QUOTE_1}}`, `{{QUOTE_X}}`, `{{NAMED_CASE_STUDIES_LIST}}` placeholders. These are intentional — they will be filled by the design / content team when permissions land. Do not invent or remove them without instruction.

### Rule 2 — `{{ partial "seo/head.html" . }}` must stay invoked

`layouts/partials/hooks/head-end.html` MUST contain `{{ partial "seo/head.html" . }}`. This is the single entry point for canonical, JSON-LD, hreflang, OG / Twitter meta, and stylesheet links (including `aenix-seo-extensions.css`). Removing it silently breaks SEO across every page.

### Rule 3 — `static/llms.txt` and `static/llms-full.txt` are mandatory

The llms.txt files at site root are how AI search engines (Anthropic, OpenAI, Perplexity, Google AI Overview) discover what aenix.io is about. They are not optional. When adding a major new landing or top-30 blog post, update `static/llms.txt` to reflect it.

### Rule 4 — DE locale uses DE slugs and DE keywords

Don't auto-translate EN → DE. DE slugs use German keywords (`/de/loesungen/...` not `/de/solutions/...`). Slug-to-slug map lives in `scripts/map-pages-to-content.py` (in research folder). DACH-relevant DE keywords have low KD; the locale is a real ranking opportunity.

For full DE-slug reference: see `docs/CONTENT_OPERATIONS.md`.

### Rule 5 — CNCF vendor neutrality (cozystack.io specifically)

This rule applies to the sister site `cozystack.io`, NOT aenix.io. But mentioned here for completeness: cozystack.io is a CNCF project, vendor-neutral. No funnel-links to aenix.io. No "talk to sales" CTAs. No commercial copy. aenix.io can link freely TO cozystack.io.

### Rule 6 — No emoji in headlines or body text

Aenix is enterprise B2B sales. Emoji break credibility for the audience (CIO / CTO / VP Engineering / compliance teams). Exception: status indicators in tooling scripts. Engineering team prefers concise prose over hype-driven copy.

### Rule 7 — Commit messages, PRs, and content in English only

The site itself is bilingual (EN + DE in `/content/` and `/content/de/`), but git history and developer comms are English. Never commit Russian to git. (Russian is fine in private chat with Timur.)

### Rule 8 — Never claim AI authorship in PRs or commits

`Co-Authored-By: Claude` line is acceptable in commit messages. Do not add `🤖 Generated with Claude Code` headers to PR descriptions, commit messages, or content.

### Rule 9 — Cannibalization-safe pairs

Every landing page that has a companion blog article must use a *shifted parent_topic*. Landing owns one head term; article owns adjacent / sub-topic / informational term. Existing pairs were validated through Ahrefs `keywords-explorer-overview` queries. When adding new pairs, run the same check (`parent_topic` field must differ).

---

## Content type taxonomy

Blog post `type:` frontmatter values (Hugo taxonomy `types`):

- **article** — long-form analytic / opinion / explainer (default for landing companions)
- **tutorial** — how-to / step-by-step / migration playbook
- **news** — event invitations, recognitions, release announcements, recurring updates
- **announcement** — version releases (Cozystack v1.0, v1.3, etc.) and major product / company news
- **case-study** — customer success story (placeholder — not in use until NDAs expire)
- **opinion** — POV / commentary (used sparingly)

**Quiz targeting:** quizzes go on `article` and `tutorial` posts only. `announcement` / `news` posts are excluded (events don't warrant a quiz). 9 posts were reclassified during the quiz pass — release announcements, webinar invites, recognitions moved from `article` to `news`.

Blog post `topics:` frontmatter values are open taxonomy. Current top topics: Cozystack, Kubernetes, Multi-tenancy, Sovereignty, NIS2, DORA, Platform Engineering, VMware, AI/ML, Observability, KubeVirt, CNCF, Talos, GPU, LINSTOR, Financial Services. See actual distribution at `/topics/`.

---

## Shortcodes (see docs/SHORTCODES.md for full reference)

**Forms:**
- `{{< pipedrive-form type="discovery" >}}` — discovery / demo / partner / course / lead-magnet
- `{{< placeholder-form ... >}}` — design preview only (no live form behind it)

**Pull-out content:**
- `{{< factoid number="92%" label="..." source="..." >}}` — big-number callout
- `{{< quote author="..." role="..." >}}...{{< /quote >}}` — styled pull-quote
- `{{< spoiler title="..." kind="term" >}}...{{< /spoiler >}}` — collapsible details block

**Inline:**
- `{{% var "Tenant" kind="crd" %}}` — colored entity-name chip. Kinds: default / crd / api / component / env / path

**Design-process:**
- `{{< design-note kind="illustration" >}}...{{< /design-note >}}` — hidden in production via `params.hide_design_notes: true` in `hugo.yaml`. Visible only when explicitly enabled.
- `{{< lorem-block size="medium" >}}` — lorem ipsum placeholder
- `{{< placeholder-image width="800" height="450" label="..." >}}` — SVG placeholder
- `{{< placeholder-quote >}}` — placeholder quote block
- `{{< placeholder-logos count="6" >}}` — placeholder logo strip

**Blog-only:**
- Quiz rendered automatically from frontmatter `quiz:` block — no shortcode needed
- Share bar / related posts / companion-landing back-link rendered automatically by `layouts/blog/single.html`

---

## Adding a new blog post

Quickest path (for native Hugo blog, NOT for Medium-republished content):

```bash
mkdir -p content/blog/$(date +%Y/%m)/your-slug-here/
$EDITOR content/blog/$(date +%Y/%m)/your-slug-here/index.md
```

Minimum frontmatter:
```yaml
---
title: "Your post title"
description: "150-160 character description for OG and search results"
date: 2026-05-11
author: "Aenix Team"  # or "Timur Tukaev" / "Andrei Kvapil" / name
type: "article"        # article / tutorial / news / announcement / case-study / opinion
topics: ["Cozystack", "Kubernetes", "..."]
language: "en"         # or "de"
companion_landing: "/products/aenix-platform/..."  # optional, renders back-link card
companion_label: "See ISP Edition →"               # optional, customises back-link text
cover_image: "..."     # optional; defaults to placeholder SVG 1200×630
---

Body in markdown. Use the shortcodes above for callouts.
```

For full conventions, see `docs/BLOG_AUTHORING.md`. For quiz authoring, see same doc § "Adding a quiz".

---

## Adding a new landing page

Two paths:

1. **Re-mapping from source folder**: source content lives in `/home/.../Загрузки/ahrefs research/aenix_seo_research_2026-05-08/pages/<pack>/landing.md`. Re-run `scripts/map-pages-to-content.py` (in the research folder) targeting this repo. This is the canonical source-of-truth path for landings.

2. **Direct authoring in Hugo content/**: create `content/<section>/<slug>/_index.md` with minimum frontmatter:
   ```yaml
   ---
   title: "..."
   description: "..."
   language: "en"
   related_pages: [...]
   ---
   ```

Path 1 keeps landing source-of-truth aligned with the SEO research repo; Path 2 is for ad-hoc / direct edits.

For DE locale: `content/de/<DE-section>/<DE-slug>/_index.md` with `language: "de"`. DE-section / DE-slug per the slug map in `docs/CONTENT_OPERATIONS.md`.

---

## Hugo build + preview

Local:
```bash
hugo server -D
# http://localhost:1313/
```

Production-like build:
```bash
hugo --gc --minify --logLevel info
```

Netlify auto-builds on every push to `feat/new-site-content` (Deploy Preview) and on `main` (production). `netlify.toml` config in repo root.

---

## When you're stuck

- Schema / frontmatter question → `docs/FRONTMATTER_SCHEMA.md`
- Content authoring → `docs/BLOG_AUTHORING.md` and `docs/PAGE_CREATION_PLAYBOOK.md`
- Shortcode reference → `docs/SHORTCODES.md`
- DE locale operations → `docs/CONTENT_OPERATIONS.md`
- Customer evidence permission → ask Timur (CEO/COO, timur.tukaev@aenix.io)
- Architectural decision → ask Timur
- Cozystack technical question → docs at `cozystack.io/docs` or ask Andrei Kvapil

---

## Working with this repo using AI assistants

If you're a future Claude / GPT / Cursor agent picking this up:

1. **Read this file first** (you're here).
2. **Read `docs/CONTENT_OPERATIONS.md`** for the where-things-live map.
3. **Read `docs/SHORTCODES.md`** before using or adding shortcodes.
4. **Read `docs/BLOG_AUTHORING.md`** if writing blog content.
5. **Check `_archive_legacy/`** before adding anything that might have a predecessor.
6. **Don't push to `main`** — work on `feat/new-site-content` or feature branches off it.
7. **Don't invent customer logos / quotes.** Leave the `{{LOGOS}}` / `{{QUOTE_X}}` placeholders until permission lands.
8. **Don't claim AI authorship** in PR descriptions or commit titles. `Co-Authored-By: Claude` line in commit body is fine.

---

*This file is the law for AI assistants. Engineers, please respect it too.*

*Maintained by the content workstream. Last updated 2026-05-11.*
