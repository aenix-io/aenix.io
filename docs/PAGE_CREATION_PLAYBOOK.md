# aenix.io page creation playbook

**The "engine" for content creation on aenix.io — covers IA, content rules, SEO, GEO (AI search), localization, and production deployment. Read this BEFORE creating any new page or modifying any existing one.**

**Hugo automation:** the rules in this playbook are enforced at Hugo build time and CI by templates in `hugo-templates/`. Pages missing required GEO frontmatter fail the build. AI assistants are also bound by `CLAUDE.md` at repo root.

Related files:
- `hugo-templates/FRONTMATTER_SCHEMA.md` — exact frontmatter contract
- `hugo-templates/INSTALLATION.md` — Hugo template setup
- `hugo-templates/EXAMPLE_solution_landing.md` — full working example
- `CLAUDE.md` — AI-assistant constraints
- `AGENTS.md` / `.cursorrules` — same constraints, different filenames

Last updated: 2026-05-10. Maintained by SEO content workstream.

---

## Table of contents

1. [Site information architecture](#1-site-information-architecture)
2. [Page-pack folder convention](#2-page-pack-folder-convention)
3. [Content rules per page type](#3-content-rules-per-page-type)
4. [Keyword split pattern (no cannibalization)](#4-keyword-split-pattern-no-cannibalization)
5. [SEO checklist (every page)](#5-seo-checklist-every-page)
6. [GEO checklist (AI search optimization)](#6-geo-checklist-ai-search-optimization)
7. [Required JSON-LD blocks](#7-required-json-ld-blocks)
8. [Required content blocks](#8-required-content-blocks)
9. [llms.txt rules](#9-llmstxt-rules)
10. [Localization rules (DE / future locales)](#10-localization-rules)
11. [Lead magnet rules](#11-lead-magnet-rules)
12. [Customer evidence rules](#12-customer-evidence-rules)
13. [CNCF vendor neutrality](#13-cncf-vendor-neutrality)
14. [Production deployment checklist](#14-production-deployment-checklist)
15. [Common pitfalls (don't repeat)](#15-common-pitfalls)

---

## 1. Site information architecture

aenix.io has a **three-tier IA**:

| Tier | URL pattern | Purpose | Audience entry point |
|---|---|---|---|
| Solutions | `/solutions/<trigger>/` | Buyer-trigger-led | "I have a regulation problem / cost problem / sovereignty problem" |
| Services | `/services/<engagement>/` | Engagement-led | "I want a specific service / build / assessment" |
| Industries | `/industries/<vertical>/` | Vertical proof | "I work in finance / energy / public sector" |
| Products | `/products/<product>/` | Product (Cozystack) | "I want to know what Cozystack is" |
| Compare | `/compare/<vs-X>/` | Direct comparison | "I'm evaluating X vs Y" |
| Migration | `/migration/<from>/` | Migration hub | "I'm leaving X" |
| Resources | `/resources/<asset>/` | Lead magnets, guides | Bottom of funnel |
| Industries (specific) | `/industries/<vertical>/` | Industry deep dive | Top of funnel by vertical |
| Audience-specific (sales) | `/services/<audience-builder>/` | Sales-only pages | "We are a Hosting Provider / MSP / Telco" |
| Blog | `/blog/YYYY/MM/<slug>/` | Companion articles | SEO long-tail |
| Flag pages | `/pricing/`, `/case-studies/`, `/about/` | Trust + commerce | Direct |

### Naming rules

- Slugs are **kebab-case English**
- Slugs are **never longer than 4 words**
- DE locale paths use **DE keywords** in slug (`/de/branchen/finanzdienstleistungen/`, not `/de/industries/financial-services/`)
- Industry pages: `/industries/<vertical>/` (not `/sectors/`)
- Solutions pages: `/solutions/<trigger>/`
- Services pages: `/services/<engagement>/`

### URL canonicalization

- All canonical URLs are **lowercase, trailing slash, no trailing parameters**
- Canonical is set explicitly in JSON-LD (see §7)
- `<link rel="canonical">` set on every page
- Lowercase URLs even in DE locale

---

## 2. Page-pack folder convention

Every page is created as a **pack** in `pages/<slug>/`:

```
pages/<slug>/
├── README.md          ← Pack summary (entry point)
├── landing.md         ← Conversion landing copy (markdown)
├── article.md         ← Companion blog article (different parent keyword)
├── keyword-map.md     ← Ahrefs research (volumes, KD, parent topics)
├── layout-spec.md     ← (optional) UI/visual brief for design team
├── content-spec.md    ← (lead magnets only) PDF/asset brief
├── geo-blocks.md      ← (NEW 2026-05-10) AI-search-optimized content blocks
└── assets/            ← Images, diagrams, lead-magnet sources
```

### Required files (minimum)

For every pack: `README.md`, `landing.md`, `article.md`.

For SEO-driven packs (P0/P1): also `keyword-map.md` and `geo-blocks.md`.

For lead-magnet packs: also `content-spec.md`.

For top-30 priority packs: all six files.

### README.md format

```markdown
# <slug>

Pack <N>. <Tier> — <P0/P1/P2/P3>. <One-line context>.

| URL | File | Notes |
|---|---|---|
| `/solutions/<trigger>/` | landing.md | <KW> head term, KD <X>, TP <Y> |
| `/blog/.../<companion-slug>/` | article.md | <KW> companion, KD <X> |

**GEO status:** v1 / v2 (with quick-facts + FAQ schema)
**Customer evidence:** placeholder / partial / named-customer
**Last update:** YYYY-MM-DD
```

---

## 3. Content rules per page type

### Solutions / Services / Industries landing (12-block template)

The **12-block IA** is locked. Every solution / services / industry landing follows it.

```
1.  Hero (H1 + bold subhead + 2 CTAs)              ~80-120 words
2.  Quick facts block (NEW — see §8)               ~80-120 words
3.  Who this is for (bulleted, 4-5 audiences)      ~50-80 words
4.  4-card requirements (problems we solve)        ~150 words
5.  4-card warnings / pitfalls                     ~150 words
6.  How Aenix helps (3-5 bullet pattern)            ~150 words
7.  Why Aenix / Cozystack pattern                  ~150 words
8.  Timeline (engagement sequence)                 ~150 words
9.  Customer proof (logos + named quote)           ~100 words
10. Pricing (or "Speak to us" placeholder)         ~80 words
11. FAQ block (4-6 questions)                      ~250 words
12. Final CTA + footer + JSON-LD                   ~80 words
```

Total target: **~1100-1400 words**.

### Companion article (long-form blog)

- Target **2500-4000 words**
- H1 from frontmatter
- H2s in **question-shape where possible** (e.g., "How does Cozystack handle DORA Article 24?" not "DORA Article 24 handling")
- Lead with **direct answer paragraph** (75-150 words)
- Include 1-2 diagrams or comparison tables
- Closing block with related resources + CTA back to landing

### Compare pages

- Target **1800-2500 words**
- Comparison **table** mandatory (LLMs cite tables)
- "When X is better" / "When Y is better" honest sections
- Cozystack vs <X> page must NOT be marketing-only — concede where competitor wins

### Migration hubs

- "From <X> to Cozystack" — covers technical + economic + organizational
- Include ROI calculator link
- Include staffing/timeline reality check

### Honest-positioning pages (SMB, K-12, etc.)

- Different tone — explicit "when this does NOT fit"
- Filter unqualified leads early
- Build trust through honesty

### Lead magnets

- See §11 for full rules
- Always pair with landing page that has form-gated download
- Companion article promotes the lead magnet

---

## 4. Keyword split pattern (no cannibalization)

**Critical rule:** landing and article in same pack target **different parent topics** — never same.

### How to split

1. **Landing** owns the **head term** with conversion intent
   - Example: `/solutions/dora-compliance/` owns "DORA compliance"
2. **Article** owns a **shifted parent topic** with informational intent
   - Example: `/blog/.../dora-article-24-cloud-architecture/` owns "DORA Article 24"

### Verification before publishing

- Run Ahrefs `keyword-explorer-overview` on both keywords
- Check `parent_topic` field — must be **different**
- If parent_topic is the same → reshape one

### No canonical between landing and article

- Each is canonical to itself
- They link to each other but do not canonical to each other

### Cannibalization check before going live

For each new pack:
- Search `site:aenix.io <primary keyword>` — should return only the new page
- Internal links: landing → article + article → landing (1 each, no more)

---

## 5. SEO checklist (every page)

**Before any landing or article merges:**

### On-page

- [ ] H1 unique to this page (not duplicated site-wide)
- [ ] H1 contains primary keyword (or close variant)
- [ ] Title tag 55-65 chars, contains primary keyword
- [ ] Meta description 145-160 chars, contains primary + secondary keyword
- [ ] H2s descriptive (and question-shape preferred — see §6)
- [ ] One H1 only; H2/H3 hierarchy clean
- [ ] Internal links: 3-7 contextual links to related pages
- [ ] External links: 2-4 to authoritative sources (CNCF, NIST, regulations) — all `rel="noopener"` for non-link-juice sources, no `nofollow` for authority sources we trust
- [ ] Image alt text descriptive (not "image1.png")
- [ ] No orphan pages — must be linked from at least 2 internal pages

### Technical

- [ ] Canonical URL set (lowercase, trailing slash)
- [ ] hreflang for DE/EN twin pages
- [ ] sitemap.xml entry generated
- [ ] robots.txt allows the URL
- [ ] Page loads under 2.5s LCP target
- [ ] Mobile-responsive (default for Hugo Docsy)

### Content

- [ ] Word count meets template target (landing 1100-1400, article 2500+)
- [ ] No keyword stuffing (primary keyword appears naturally 5-15 times)
- [ ] Citation-ready facts present (specific numbers, names, dates)
- [ ] No empty placeholders left in published version (replace `{{LOGOS}}`, `{{QUOTE_X}}` before merge)

---

## 6. GEO checklist (AI search optimization)

**GEO = Generative Engine Optimization.** Optimizing for Google AI Overview, ChatGPT search, Perplexity, Claude, Bing Copilot.

LLMs cite content that is:
- **Clear** (direct answers near the top)
- **Structured** (tables, bulleted lists, FAQ)
- **Citable** (specific facts, named entities, dates)
- **Trustworthy** (entity signals, outbound to authoritative sources)
- **Not marketing fluff**

**Every published page must have:**

### Direct answer block (top of page)

Under H1 (after hero), include a **direct-answer paragraph** answering the page's primary question:

```markdown
**[Direct answer paragraph — 75-150 words. Format: "X is Y because Z. It works for A, B, C audiences. Aenix helps with this by..."]**
```

### Quick facts block

A scannable bulleted list of **citable facts** about the topic:

```markdown
## Quick facts

- **What it is:** [one-sentence definition]
- **Who it applies to:** [audience]
- **Key requirement / number:** [specific data point]
- **Timeline / cost / scope:** [specific data point]
- **Common pitfall:** [specific gotcha]
- **Related Cozystack feature:** [feature name + link]
```

5-7 bullets, ~80-120 words. LLMs love this format — they extract bullets directly into responses.

### Question-shape H2s

Where natural, write H2s as **questions a user would ask**:

| Avoid | Prefer |
|---|---|
| "DORA implementation" | "How do you implement DORA?" |
| "Cost considerations" | "How much does this cost?" |
| "Timeline" | "How long does this take?" |
| "Architecture" | "What architecture pattern fits?" |

Don't force every H2 — but at least 30% of H2s should be question-shape.

### FAQ block + FAQ schema

Every landing has a **FAQ section** with 4-6 questions answered in 30-80 words each.

The FAQ section MUST be paired with **FAQPage JSON-LD** (see §7).

### Comparison tables

Where comparison is natural (vs-X pages, alternative pages, evaluation), use a **comparison table**. LLMs cite tables.

### Citable facts (explicit)

In the body, lead with specific facts:
- "DORA enters force on **2025-01-17**"
- "NIS2 covers **18 essential entity sectors** in Annex I"
- "Cozystack is **CNCF project** (Sandbox since **2024-09-26**; Incubating expected **late summer 2026**)"
- "Ænix Platform is available in **5 editions**: Public Cloud, ISP, Enterprise, IDP, AI/ML"

These get cited verbatim.

### Entity authority block (footer)

Every page closes with:

```markdown
*Aenix is the team behind [Cozystack](https://cozystack.io) — a CNCF project (Sandbox today; Incubating expected late summer 2026). Apache 2.0 license. Aenix commercializes Cozystack as Ænix Platform, available in five editions matched to buyer profile.*
```

This gives LLMs the entity relationship + authority signal.

### Outbound to authoritative sources

LLMs reward outbound to authoritative sources:
- CNCF (cncf.io, kubernetes.io)
- NIST (nist.gov)
- EU regulations (europa.eu, eur-lex.europa.eu)
- ENISA (enisa.europa.eu)
- BSI / sectoral regulators

Include 2-4 such links per page where natural.

### llms.txt

Site-level — see §9.

---

## 7. Required JSON-LD blocks

Every page has JSON-LD in `<head>`. Use the right block per page type.

### Organization (every page, in `<head>`)

```json
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Aenix",
  "url": "https://aenix.io",
  "logo": "https://aenix.io/logo.png",
  "sameAs": [
    "https://github.com/aenix-io",
    "https://www.linkedin.com/company/aenix-io"
  ],
  "description": "Aenix is the team behind Cozystack, a CNCF cloud platform project (Sandbox today; Incubating expected late summer 2026). We deliver Ænix Platform — turnkey cloud-in-a-box with five editions for regulated enterprises, hosting providers, and AI-heavy organizations."
}
```

### WebSite (homepage)

```json
{
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Aenix",
  "url": "https://aenix.io",
  "publisher": { "@id": "https://aenix.io#org" }
}
```

### Service (every services page + solutions page)

```json
{
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "<page title>",
  "url": "<canonical url>",
  "provider": { "@id": "https://aenix.io#org" },
  "serviceType": "<e.g., Platform Engineering, Cloud Migration, DORA Compliance>",
  "areaServed": ["EU", "DACH", "MENA", "Central Asia"],
  "audience": {
    "@type": "Audience",
    "audienceType": "<e.g., Financial Services, Public Sector, Hosting Providers>"
  },
  "description": "<page meta description>"
}
```

### BlogPosting (every article)

```json
{
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "headline": "<H1>",
  "datePublished": "YYYY-MM-DD",
  "dateModified": "YYYY-MM-DD",
  "author": { "@type": "Person", "name": "Timur Tukaev", "url": "https://aenix.io/about" },
  "publisher": { "@id": "https://aenix.io#org" },
  "url": "<canonical url>",
  "image": "<og image>",
  "description": "<meta description>",
  "keywords": "<primary, secondary, secondary>",
  "wordCount": <integer>,
  "articleSection": "<Solutions / Services / Industries / Compare>"
}
```

### FAQPage (every landing with FAQ block)

```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "<question>",
      "acceptedAnswer": { "@type": "Answer", "text": "<answer>" }
    }
  ]
}
```

### BreadcrumbList (every page)

```json
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://aenix.io/" },
    { "@type": "ListItem", "position": 2, "name": "<section>", "item": "<section url>" },
    { "@type": "ListItem", "position": 3, "name": "<page>", "item": "<page url>" }
  ]
}
```

### HowTo (services pages with step-by-step)

```json
{
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "<service name>",
  "step": [
    { "@type": "HowToStep", "name": "Step 1", "text": "..." },
    { "@type": "HowToStep", "name": "Step 2", "text": "..." }
  ]
}
```

### Product (for Cozystack product page)

```json
{
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "Cozystack",
  "applicationCategory": "Cloud Platform",
  "operatingSystem": "Linux",
  "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD", "url": "https://cozystack.io" },
  "license": "https://www.apache.org/licenses/LICENSE-2.0",
  "publisher": { "@id": "https://aenix.io#org" }
}
```

---

## 8. Required content blocks

### Hero (top of every landing)

```markdown
# <H1 — primary keyword>

**<Bold subhead — 2-3 sentences answering "what + who + outcome". This is the citation-ready paragraph for AI Overview.>**

<div class="cta-row">
  <a class="cta-primary" href="{{PIPEDRIVE_FORM_DISCOVERY}}">Book a 30-minute discovery call</a>
  <a class="cta-secondary" href="<companion article>">Companion article →</a>
</div>
```

### Quick facts block (NEW — every landing post 2026-05-10)

```markdown
## Quick facts

- **What it is:** <one-sentence definition>
- **Who it applies to:** <audience>
- **Key fact 1:** <specific number or date>
- **Key fact 2:** <specific number or date>
- **Common pitfall:** <specific gotcha>
- **Cozystack relevance:** <feature + link>
- **Status:** <Apache 2.0 / CNCF project (Sandbox since 2024-09-26; Incubating expected late summer 2026) / etc.>

[Source: <NIST / EU regulation / CNCF Landscape / etc., with link>]
```

### Customer evidence block

```markdown
## What runs on Cozystack today

{{LOGOS_FINANCE}}  {{LOGOS_TELCO}}  {{LOGOS_CLOUD_BUILDER}}

> {{QUOTE_X}} — {{NAMED_CUSTOMER_X}}, <title>, <company>
```

### FAQ block (every landing)

```markdown
## Frequently asked questions

### <Question 1 — exact phrase users would search>
<Answer 30-80 words>

### <Question 2>
<Answer>

### <Question 3>
<Answer>

[Continue for 4-6 questions total]
```

### Closing CTA block

```markdown
## Ready to start?

<2-3 sentences summarizing what we offer + how to start>

<div class="cta-row">
  <a class="cta-primary" href="{{PIPEDRIVE_FORM_DISCOVERY}}">Book a 30-minute discovery call</a>
</div>

---

*Aenix is the team behind [Cozystack](https://cozystack.io) — CNCF project (Sandbox today; Incubating expected late summer 2026), Apache 2.0. Aenix commercializes Cozystack as Ænix Platform, available in five editions: Public Cloud, ISP, Enterprise, IDP, AI/ML.*
```

### Mandatory placeholders (replace before merge)

- `{{PIPEDRIVE_FORM_DISCOVERY}}` — discovery call form URL
- `{{PIPEDRIVE_FORM_ASSESSMENT}}` — assessment form URL
- `{{LOGOS_<industry>}}` — customer logo set
- `{{QUOTE_<topic>}}` — named customer quote
- `{{NAMED_CUSTOMER_<topic>}}` — customer name (gated by permission)
- `{{PRICING_*}}` — pricing card data (or "Speak to us")
- `{{OG_IMAGE}}` — 1200x630 social card

Any unresolved placeholder = page does not ship.

---

## 9. llms.txt rules

### What llms.txt is

`/llms.txt` is an emerging standard (2025-2026) for guiding AI crawlers. It tells LLMs:
- What this site is about
- Which pages are most important to read
- Which authoritative pages summarize key topics

Anthropic, OpenAI, Perplexity, and other LLM providers have begun reading it.

### File location

- aenix.io: `/llms.txt` (site root) and `/llms-full.txt` (full content of priority pages)
- cozystack.io: `/llms.txt` (site root)

### File format (markdown)

```markdown
# <Site name>

> <One-paragraph site description>

## <Section>

- [Page title](https://aenix.io/path/): One-sentence description

## <Another section>

- [Page title](url): Description
```

### Content priority

**Order matters.** Place most important pages first. LLMs prioritize earlier sections.

### Update cadence

- Whenever a top-30 page is published → add to llms.txt
- Whenever new product (Cozystack version, lead magnet) launches → update llms.txt
- Quarterly review for stale entries

---

## 10. Localization rules

### Locale strategy

- **EN** = primary
- **DE** = first localization (DACH market priority)
- **Future** = consider RU, FR, IT after DE proves out

### URL pattern

- EN: `/<section>/<slug>/`
- DE: `/de/<localized-section>/<localized-slug>/`

DE section names use **DE keywords**:
- `solutions/` → `loesungen/`
- `services/` → `dienstleistungen/`
- `industries/` → `branchen/`
- `compare/` → `vergleich/`
- `migration/` → `migration/`
- `resources/` → `ressourcen/`

### Slug rules

- Slug stays in DE (don't transliterate from EN)
- `vmware-alternative` → `vmware-alternative` (loanword)
- `financial-services` → `finanzdienstleistungen`
- `data-sovereignty` → `datensouveraenitaet`

### hreflang setup

Every twin page has:

```html
<link rel="alternate" hreflang="en" href="https://aenix.io/<en-path>/" />
<link rel="alternate" hreflang="de" href="https://aenix.io/de/<de-path>/" />
<link rel="alternate" hreflang="x-default" href="https://aenix.io/<en-path>/" />
```

### Translation rules

- Don't auto-translate. Use DE-native (or DE-fluent) reviewer
- Title and meta description must be DE-native (not EN-translated)
- Customer evidence: use DACH customer logos / quotes when available
- DACH-specific facts: BSI references, ENISA, German federal regulations, Datenschutz nuances

### Keyword research per locale

- Run `keywords-explorer-overview` with `country=de` for every DE pack
- Don't assume EN keyword maps to DE — usually doesn't

---

## 11. Lead magnet rules

### Format options

- **PDF guide** (most common) — designer-produced, content from `content-spec.md`
- **Spreadsheet / calculator** (Excel / Google Sheet) — for ROI / TCO worksheets
- **Decision tree / checklist** (interactive HTML or PDF) — for go/no-go decisions

### Pack structure

```
pages/<slug>/
├── README.md
├── landing.md               ← Form-gated download page
├── article.md               ← Companion article promoting the asset
├── content-spec.md          ← Detailed brief for designer
├── keyword-map.md
└── assets/
    └── <final asset file>
```

### content-spec.md required fields

- Asset format + page count target
- Page-by-page content outline
- Required visuals (diagrams, charts, tables)
- Source data references
- Brand colors / typography (consistent with aenix.io)
- Final filename pattern: `aenix-<topic>-<version>.pdf`

### Form gating

- Email + company + role required
- GDPR-compliant consent for follow-up
- Pipedrive integration captures lead

### Promotion sequence

1. Landing page goes live with form
2. Companion article published; CTA promotes magnet
3. LinkedIn post + email to existing list
4. Outbound campaign (sales-led)

### Magnet tracking

- Each magnet has unique UTM source
- Pipedrive tags lead by magnet origin
- 90-day review: convert rate by magnet → kill underperformers

---

## 12. Customer evidence rules

### Tiers of evidence

| Tier | Format | Permission required |
|---|---|---|
| 1 | Named customer + quote + logo | Explicit approval |
| 2 | Named customer + logo (no quote) | Approval |
| 3 | Anonymized ("a regional bank") | Internal |
| 4 | "We are piloting with [vertical] operator" | Internal |

### Process

- Before publishing tier 1 or 2 evidence: written customer approval
- Quote must be approved verbatim
- Logo permission must include marketing use scope
- Renew permission annually

### Placeholders

- Tier 4 (pilot) → keep until tier 1 / 2 permission lands
- Never publish tier 1 evidence without permission
- Better to have placeholder than unauthorized name

### Public references currently available (as of 2026-05-10)

- **Hosting customers currently listed on aenix.io** — GoHost.kz, HDReady, Beby Cloud, HiKube, UseTech, Cloupard, Cloudsy. Use **only with Timur sign-off per use** in new content (do not assume permission from "publicly listed").
- **Cozystack production deployments** — listed in CNCF Landscape, generic community reference (not Aenix customer references)
- **Bank / sovereign / AI-ML cases** — all NDA-protected; first named bank cases expected mid-2027.
- **Beeline Kazakhstan / Hyper Cloud** — Aenix did NOT participate. **Never reference, in any framing.**

Update this list as evidence permissions land. Track NDA expirations in `evidence_register.md`.

---

## 13. CNCF vendor neutrality

**Critical constraint.** Cozystack is a CNCF project (currently Sandbox; Incubating expected late summer 2026). cozystack.io must remain **vendor-neutral**.

### Rules

- **cozystack.io** does NOT have funnel-links to aenix.io
- **cozystack.io** does NOT have "talk to sales" / "book a discovery call" CTAs
- **cozystack.io** does NOT have aenix.io marketing copy
- **cozystack.io** is project documentation, community, releases — vendor-neutral

### What aenix.io can do

- Link from aenix.io → cozystack.io (legitimate — points to upstream open source)
- aenix.io content can reference Cozystack architecture freely
- aenix.io can reference being "the team behind Cozystack"
- Aenix marketing happens on aenix.io, not cozystack.io

### Why this matters

- Violation → CNCF community trust loss
- Violation → CNCF graduation review risk
- Violation → undermines Cozystack's neutral positioning

### When in doubt

If considering a cross-link from cozystack.io to aenix.io: **don't.** If unclear if a cozystack.io page is vendor-neutral: ask CNCF Cloud Native maintainers.

---

## 14. Production deployment checklist

Before any new page goes live:

### Pre-deploy

- [ ] All placeholder values resolved (`{{LOGOS}}`, `{{QUOTE_X}}`, `{{PRICING_*}}`)
- [ ] Customer permissions secured for tier 1/2 evidence
- [ ] hreflang twin (DE if applicable) ready
- [ ] keyword-map.md verified — no cannibalization
- [ ] geo-blocks.md content embedded in landing
- [ ] FAQ schema, BlogPosting schema (where applicable), BreadcrumbList — all in JSON-LD
- [ ] OG image ready (1200×630)
- [ ] Mobile viewport tested
- [ ] LCP under 2.5s on staging

### Deploy

- [ ] Hugo build clean (no warnings)
- [ ] Internal links resolve (no 404s)
- [ ] sitemap.xml regenerates
- [ ] llms.txt updated to include new page (if top-30)

### Post-deploy

- [ ] Submit to Google Search Console (request indexing)
- [ ] Bing Webmaster — re-submit sitemap
- [ ] Internal links from related pages (3-7 incoming) confirmed
- [ ] Brand Radar (when set up) tracks new page citations

### 30 / 90 / 180 day review

- 30 days: check ranking position for primary keyword
- 90 days: traffic established, refine if no movement
- 180 days: AI Overview citation check — is page being cited?

---

## 15. Common pitfalls

### Don't do

- ❌ Publish landing without companion article (no long-tail catchment)
- ❌ Use same parent_topic for landing + article (cannibalization)
- ❌ Copy EN page → translate via tool → publish DE (DE keyword research must precede)
- ❌ Skip Quick Facts block on a landing
- ❌ Skip FAQ schema on a landing with FAQ
- ❌ Publish with `{{LOGOS}}` placeholders unresolved
- ❌ Cross-link from cozystack.io → aenix.io (vendor neutrality)
- ❌ Use marketing language on cozystack.io
- ❌ Add "Fixes #" or AI-attribution to PR descriptions automatically
- ❌ Ship a customer logo without written permission
- ❌ Submit DE pages without hreflang
- ❌ Forget to update llms.txt for top-30 pages
- ❌ Add comments to code/markdown like "// Updated 2026-05-10" — git history is the source of truth
- ❌ Use SVG as og:image (Telegram/FB don't render)
- ❌ Use emoji in headlines or body text (only in CTAs / FAQ if explicitly intended)

### Do do

- ✅ Run keyword-map for every pack before writing
- ✅ Set hreflang for both EN and DE
- ✅ Add FAQ schema as JSON-LD
- ✅ Question-shape at least 30% of H2s
- ✅ Lead with direct answer paragraph
- ✅ Cite specific facts (dates, numbers, names)
- ✅ Outbound 2-4 authoritative links per page
- ✅ Footer entity authority block
- ✅ Update llms.txt when top-30 page lands
- ✅ Check production deployment checklist 100% before merge
- ✅ Maintain page-pack folder convention

---

## Appendix A: page priority tiers (P0-P3)

| Tier | Definition | Treatment |
|---|---|---|
| P0 | Top traffic potential + strategic conversion | Full GEO + customer evidence + lead magnet pair |
| P1 | High traffic potential or strategic | Full GEO + customer evidence |
| P2 | Adjacent / supporting | Standard GEO, lighter evidence |
| P3 | Niche / honest-positioning / explorer | Compact format, honest tone |

### Top-30 (Tier 1) priority list

Updated 2026-05-10. Re-evaluate quarterly.

1. vmware-alternative
2. vmware-migration
3. private-cloud-platform
4. nis2-compliance
5. dora-compliance
6. data-sovereignty
7. sovereign-ai
8. cloud-repatriation
9. proxmox-alternative (`pages/proxmox/`)
10. openstack-alternative (`pages/openstack/`)

(11-30: cloud-cost-optimization, hybrid-cloud-platform, developer-self-service, openshift, nutanix, vs-vmware, vs-openstack, vs-proxmox, vs-openshift, backstage, financial-services, public-sector, telco, energy, insurance, manufacturing, universities, platform-readiness-assessment, cozystack, about)

---

## Appendix B: file change cadence

| File | Change cadence |
|---|---|
| This playbook | Quarterly review; immediate update for major shifts |
| llms.txt | Each top-30 page launch + product launches |
| customer-evidence ledger (in §12) | Monthly |
| top-30 priority list (Appendix A) | Quarterly |

---

## Appendix C: glossary

- **GEO** — Generative Engine Optimization (AI search)
- **AEO** — Answer Engine Optimization (sometimes used interchangeably with GEO)
- **AI Overview** — Google's LLM-generated answer at top of SERP
- **LLM** — Large Language Model
- **Pack** — folder of files for a single page
- **Tier** — page priority level (P0-P3)
- **Twin page** — EN/DE pair of same page
- **CNCF** — Cloud Native Computing Foundation
- **Cozystack** — CNCF cloud platform project built by Aenix (Sandbox today; Incubating expected late summer 2026)

---

*Maintained by SEO content workstream. Questions / changes: open issue in this repo or contact Timur Tukaev.*
