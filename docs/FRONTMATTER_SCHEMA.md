# Frontmatter schema for aenix.io pages

**This is the contract.** Hugo build fails hard if a page is missing required fields. This is intentional — pages without proper frontmatter rank poorly and aren't cited by AI search engines.

If you're working with Claude (or any AI assistant) on a new aenix.io page, refer Claude to this schema. The relevant rules also live in `CLAUDE.md` at the repo root.

---

## Schema by page type

### Universal (every page)

```yaml
---
title: "Page title (55-65 chars including site suffix)"
description: "Meta description (145-160 chars). Used for <meta>, og:description, JSON-LD."
date: 2026-05-10        # publish date
lastmod: 2026-05-10     # last update
page_type: solution-landing  # see "page_type values" below
primary_keyword: "..."
secondary_keywords: ["...", "..."]
images: ["social-card.png"]   # 1200×630, raster only (not SVG); first one is og:image
---
```

### page_type values

| Value | When to use |
|---|---|
| `solution-landing` | `/solutions/<slug>/` — buyer-trigger-led pages |
| `services-landing` | `/services/<slug>/` — engagement-led service pages |
| `industry-landing` | `/industries/<slug>/` — vertical pages |
| `compare` | `/compare/<vs-X>/` — direct comparisons |
| `alternative` | `/<X>-alternative/` — alternative pages |
| `migration-hub` | `/migration/<from>/` — migration source pages |
| `lead-magnet` | `/resources/<slug>/` — lead magnet landings |
| `product` | `/products/<slug>/` — product pages |
| `blog-article` | `/blog/<YYYY/MM>/<slug>/` — blog companion articles |
| `flag-page` | `/pricing/`, `/case-studies/`, `/about/` |

### REQUIRED for landing types (solution / services / industry / compare / alternative / migration-hub / lead-magnet / product)

These types ALL require GEO frontmatter. Hugo build fails if any field is missing.

```yaml
direct_answer: |
  **<75-150 word direct-answer paragraph. Bold via **markdown**. Citation-ready: "X is Y because Z. It works for A, B, C audiences. Aenix helps with this by...".>**

quick_facts:
  - label: "What it is"
    value: "<one-sentence definition>"
  - label: "License"
    value: "Apache 2.0 (no per-CPU licensing)"
  - label: "Status"
    value: "CNCF project (Sandbox since 2024-09-26; Incubating expected late summer 2026)"
  - label: "Production reference"
    value: "Tier-1 European bank engagements (NDA-protected; named cases expected mid-2027)"
  - label: "Engagement timeline"
    value: "9-18 months full estate"
  # 5-7 bullets total

quick_facts_source: "[CNCF Landscape](https://landscape.cncf.io), [Cozystack docs](https://cozystack.io)"

faq:
  - q: "Question 1?"
    a: "Answer 1 (30-80 words). Plain text or markdown."
  - q: "Question 2?"
    a: "Answer 2."
  # MINIMUM 4 questions, recommended 6
```

### Optional (recommended) — service Schema fields

For `solution-landing`, `services-landing`, `industry-landing`:

```yaml
service:
  type: "Platform Engineering"     # Schema.org serviceType
  areaServed: ["EU", "DACH", "MENA"]
  audience: "Financial Services"   # Schema.org audienceType
```

### Optional (recommended) — Customer evidence

```yaml
customer_evidence:
  logos:
    # Use logos only for customers with current permission. Default — leave commented.
    # Hosting customers currently on aenix.io may be re-used after Timur sign-off:
    # - alt: "GoHost.kz"
    #   src: "/img/logos/gohost.svg"
    #   url: "https://gohost.kz/"
  quote:
    # Quotes require explicit written permission. No customer quotes are currently public.
    # text: "..."
    # author: "Person Name"
    # title: "Their Title"
    # company: "Company Name"
```

### Required for `services-landing` with HowTo

```yaml
howto_steps:
  - name: "Discovery call"
    text: "30-minute consultation to confirm fit and scope"
  - name: "Stakeholder interviews"
    text: "1-2 days of stakeholder interviews"
howto_total_time: "PT5D"     # ISO 8601 — PT5D = 5 days
howto_cost:
  currency: "EUR"
  value: "20000-50000"
```

### Required for `blog-article`

```yaml
author: "Timur Tukaev"
articleSection: "Solutions"  # or "Services", "Industries", "Compare"
keywords: ["primary kw", "secondary kw"]
```

### Translations / hreflang (DE locale)

```yaml
translations:
  de: /de/loesungen/dora-compliance/    # absolute path
  # x-default auto-set to current page
```

### Breadcrumbs (auto-derived; override only if needed)

```yaml
breadcrumb:    # OPTIONAL override
  - name: Home
    url: /
  - name: Solutions
    url: /solutions/
  - name: DORA Compliance
    url: /solutions/dora-compliance/
```

---

## Validation

Hugo build performs these checks (and fails on missing):

| Check | Trigger | Error |
|---|---|---|
| `page_type` set | Every page | `SEO ERROR — page X is missing required frontmatter page_type` |
| `description` set | Every page | `SEO ERROR — page X is missing required frontmatter description` |
| `description` ≤ 165 chars | Every page | Warning if longer (SERP truncates) |
| `direct_answer` set | Landing types | `SEO ERROR — page X (type=Y) is missing required frontmatter direct_answer` |
| `quick_facts` set | Landing types | `SEO ERROR — page X is missing required frontmatter quick_facts` |
| `faq` set, ≥4 entries | Landing types | `SEO ERROR — page X has only N FAQ questions. Minimum 4 required` |

Run `hugo --gc --minify --logLevel info` and watch for `SEO ERROR` lines. Build halts on first error.

---

## Single source of truth

- **FAQ visible content** + **FAQPage JSON-LD** read from same `faq:` frontmatter
- **Quick facts visible block** + (eventual structured data) read from same `quick_facts:` frontmatter
- No duplication; fix once, applies everywhere

---

## Example pages

See `EXAMPLE_solution_landing.md` and `EXAMPLE_blog_article.md` in this folder for complete worked examples.
