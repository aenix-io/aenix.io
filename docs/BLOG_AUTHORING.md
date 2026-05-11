# Blog authoring guide — aenix.io

How to write and add a blog post on aenix.io, including quizzes and cross-links.

For shortcode reference see [`SHORTCODES.md`](SHORTCODES.md). For frontmatter schema see [`FRONTMATTER_SCHEMA.md`](FRONTMATTER_SCHEMA.md).

---

## Where blog posts live

```
content/blog/                       # EN posts
content/blog/YYYY/MM/<slug>/index.md
content/de/blog/                    # DE posts (mirror structure)
content/de/blog/YYYY/MM/<slug>/index.md
```

Permalink pattern: `/blog/:year/:month/:slug/` (configured in `hugo.yaml` → `permalinks:`). DE posts auto-prefix with `/de/`.

---

## Minimum frontmatter for a new post

```yaml
---
title: "Your post title — under 70 chars for tweet width"
description: "150-160 character description used for OG, Twitter card, and SERP snippet"
date: 2026-05-11
author: "Aenix Team"          # or named author: "Timur Tukaev" / "Andrei Kvapil"
type: "article"                # one of: article / tutorial / news / announcement / case-study / opinion
topics: ["Cozystack", "Kubernetes", "DORA"]   # 1-6 topics
language: "en"                 # or "de"
---

Body in markdown. Use `##` for sections, `###` for subsections. H1 comes from frontmatter — don't write `# Heading` in body.
```

---

## Optional frontmatter

| Field | Purpose | Example |
|---|---|---|
| `cover_image` | Cover image URL. If unset, placeholder SVG 1200×630 renders. | `https://cdn-images-1.medium.com/...` |
| `source_url` | Link to original publication (e.g. Medium). Used for archive imports. | `https://medium.com/p/3ad9b04a39de` |
| `external_only: true` | Stub post with no full body; redirect-style link to `source_url`. | (boolean) |
| `companion_landing` | Path to paired landing page. Renders back-link card at end of post. | `/products/aenix-platform/isp-edition/` |
| `companion_label` | Custom text on back-link card. | `See ISP Edition product details →` |
| `related_posts` | Explicit list of post paths to show as "Read also". If unset, auto-picks by topic overlap. | `["/blog/.../slug/"]` |
| `quiz` | Inline quiz block. See "Adding a quiz" below. | (object) |

---

## Authoring conventions

### Voice

- Engineer-to-engineer, not marketer-to-buyer
- Concise. Short paragraphs. No filler.
- Concrete numbers when available (€1.3k/month, 30-50% utilisation, 14-day assessment)
- Honest acknowledgments. "When this doesn't fit:" sections are encouraged.

### Cross-linking

- Internal links to other Aenix pages: relative `/path/` (not absolute URL)
- External links: full URL with `https://`
- When referring to Cozystack docs: link to `cozystack.io` (vendor-neutral) — NOT to anchor on aenix.io
- Link to companion blog posts liberally — they reinforce each other for SEO and AI search citation

### Headings

- `H1` comes from frontmatter `title:` — don't write it in body
- Use `H2` (`##`) for main sections, `H3` (`###`) for subsections
- Avoid going deeper than H4 — usually a sign the article should be split

### Customer evidence

- Don't invent customer quotes
- For NDA-protected engagements use anonymized phrasing only: "a tier-1 European bank", "a regional sovereign cloud builder"
- Hosting customers publicly listed on aenix.io need per-use Timur sign-off for blog mentions
- For long-form companions, "Aenix engagements with X" type generic phrasing is acceptable

---

## Adding a quiz

Quizzes go on `article` and `tutorial` posts only. They render automatically at the end of the post if the `quiz:` frontmatter field is present.

```yaml
quiz:
  title: "Test yourself: DORA for cloud architects"   # optional; default "Test yourself"
  questions:
    - q: "When did DORA come into force in the EU?"
      options:
        - { text: "17 October 2024", correct: false }
        - { text: "17 January 2025", correct: true }
        - { text: "1 January 2026", correct: false }
      explanation: "DORA (Regulation (EU) 2022/2554) has been in force since 17 January 2025. NIS2 was transposed across member states from 17 October 2024 — easy to confuse."
    - q: "..."
      options:
        - { text: "...", correct: true }
        - { text: "...", correct: false }
      explanation: "..."
    # ... 5 questions total
```

**Conventions:**

- 5 questions per quiz (the JS pre-configured for tier feedback at 5)
- 3-4 options per question, one correct
- Wrong options should be plausible-adjacent — adjacent dates, sister components, similar terms — so a skim-only reader doesn't ace it
- `explanation` is mandatory — it cites the specific section / fact / number from the article
- Localisation: for DE posts, write the quiz in German. The blog-quiz partial detects `language: de` and renders DE-localised UI ("Quiz starten" / "Weiter" / "Ergebnis sehen" / "Nochmal versuchen") plus DE tier-praise

**Tier feedback** (auto-applied based on score):

| Score | EN tier | DE tier |
|---|---|---|
| 0-1 / 5 | "Just getting started" | "Aller Anfang ist schwer" |
| 2-3 / 5 | "Solid grasp" | "Solide Basis" |
| 4 / 5 | "Almost perfect" | "Fast perfekt" |
| 5 / 5 | "Full score" | "Volle Punktzahl" |

---

## Auto-rendered elements (you don't have to invoke these manually)

`layouts/blog/single.html` automatically renders, for every post:

- **Hero** — type + date + author + topics chips + title + lede
- **Cover image** — from `cover_image` frontmatter or placeholder SVG
- **Share bar** (left sidebar, sticky) — LinkedIn / X / Telegram / Copy link
- **Body** — your markdown
- **Quiz** — if `quiz:` is set in frontmatter
- **Companion-landing back-link** — if `companion_landing:` is set
- **Related posts** — auto-picked by topic overlap, or explicit via `related_posts:` frontmatter
- **Back-to-blog** link

JSON-LD `BlogPosting` schema + Open Graph + Twitter cards emitted automatically via `partials/seo/head.html`.

---

## Cannibalization rules

Every landing page that has a companion blog article must use a *shifted parent_topic*. Landing owns one head term; article owns adjacent / sub-topic / informational term.

When writing a new long-form companion:

1. Identify the landing's primary keyword
2. Pick a sub-topic / framework / playbook / decision-framework angle that has its own search demand
3. Verify the new angle has a different parent_topic via Ahrefs `keywords-explorer-overview` (Aenix-internal, MCP-available)
4. Set `companion_landing:` in the article frontmatter to link them

Reference: all 14 May-2026 companion articles follow this pattern (see `/blog/2026/05/*` posts written for the 14 orphaned landings).

---

## Importing from Medium (existing tooling)

Two scripts in the SEO research folder (`~/Загрузки/ahrefs research/aenix_seo_research_2026-05-08/scripts/`):

- `scrape-medium-blog.py` — pulls RSS feed (last 10 posts), converts HTML → Markdown, writes to `content/blog/`
- `import-medium-archive.py` — parses a Medium "Download your information" HTML archive, imports all posts (with `external_only: true` stub for missing bodies)

Both are idempotent and skip existing target files. Run when:

- New posts appear on `blog.aenix.io` Medium publication (use RSS script)
- Andrei Kvapil's Medium archive arrives (use archive script — will overwrite the 12 `external_only` stubs with real content)

---

## Style preferences

- Sentence case for headings (not Title Case)
- Em-dash with spaces: ` — `
- Use Æ in "Ænix Platform" product name
- "Cozystack" as one word
- "open-source" hyphenated as adjective; "open source" as noun
- Times in lowercase: "12 noon", "5 pm UTC"
- DORA / NIS2 / GDPR uppercase; cited regulations with article reference: "DORA Article 28"

---

## When in doubt

- See existing posts in `/content/blog/2026/05/` as reference
- 14 long-form companions written May 2026 are the gold-standard format
- Imported Medium posts under `/content/blog/2024-2026/` show the casual / announcement-style range
- Quiz examples: any `article` or `tutorial` post under `/content/blog/` has a `quiz:` block in frontmatter

For corner cases, ask Timur or check `CLAUDE.md` rules.
