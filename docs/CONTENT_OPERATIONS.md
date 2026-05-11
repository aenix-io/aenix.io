# Content operations — aenix.io

Where things live, how to add / change / translate content, and what scripts exist to automate it.

For day-to-day authoring conventions see [`BLOG_AUTHORING.md`](BLOG_AUTHORING.md) (blog posts) and [`PAGE_CREATION_PLAYBOOK.md`](PAGE_CREATION_PLAYBOOK.md) (landings).

---

## Where things live

### Repo layout

```
aenix.io/
├── content/                    # Hugo content tree
│   ├── _index.md              # Homepage (EN)
│   ├── about/                  # About page
│   ├── alternatives/           # 7 alternatives
│   ├── blog/                   # 84 EN blog posts under YYYY/MM/<slug>/
│   ├── case-studies/           # Case studies index
│   ├── compare/                # 4 head-to-head comparisons
│   ├── conferences/            # Conferences page
│   ├── contact/                # Contact page
│   ├── enterprise-support/     # Enterprise Support page
│   ├── industries/             # 12 industries
│   ├── kubernetes-deep-dive/   # Course page
│   ├── migration/              # 4 migration hubs
│   ├── partners/               # Partner Program page
│   ├── pricing/                # Pricing page
│   ├── products/               # Ænix Platform + 5 editions + Cozystack OSS
│   ├── resources/              # 6 lead-magnet resources
│   ├── services/               # 15 services
│   ├── solutions/              # 8 solutions
│   ├── 404.md                  # 404 page
│   ├── oss-contribution.md    # Preserved from legacy site
│   ├── quiz/modern-cloud/      # Preserved from legacy site
│   └── de/                     # DE locale mirror
│       ├── _index.md           # Homepage (DE)
│       ├── alternativen/       # alternatives → alternativen
│       ├── blog/               # 24 DE blog posts
│       ├── branchen/           # industries → branchen
│       ├── case-studies/
│       ├── dienstleistungen/   # services → dienstleistungen
│       ├── konferenzen/        # conferences → konferenzen
│       ├── kontakt/            # contact → kontakt
│       ├── kubernetes-deep-dive/
│       ├── loesungen/          # solutions → loesungen
│       ├── migration/
│       ├── partner/            # partners → partner
│       ├── preise/             # pricing → preise
│       ├── produkte/           # products → produkte
│       ├── ressourcen/         # resources → ressourcen
│       ├── ueber-uns/          # about → ueber-uns
│       └── vergleichen/        # compare → vergleichen
├── layouts/                    # Project-level overrides (these override theme)
│   ├── blog/
│   │   ├── list.html          # Blog index — filters + card grid
│   │   └── single.html        # Blog post — hero + share + body + quiz + related
│   ├── partials/
│   │   ├── blog/              # share-bar, related, quiz partials
│   │   ├── hooks/head-end.html  # entry-point for SEO partial
│   │   └── seo/               # JSON-LD, hreflang, OG, head, pairs-with-editions
│   ├── shortcodes/            # All custom shortcodes (see SHORTCODES.md)
│   ├── 404.html
│   ├── index.html             # Homepage layout (project-level override)
│   └── partials/header.html   # Header with grouped dropdown menu
├── static/
│   ├── css/aenix-seo-extensions.css   # All custom CSS (blog, quiz, factoid, etc.)
│   ├── js/blog-filter.js              # Blog listing filters
│   ├── js/blog-quiz.js                # Quiz interaction
│   ├── js/blog-share.js               # Copy-link button
│   ├── llms.txt                       # AI search index
│   ├── llms-full.txt                  # AI search full-content version
│   └── _redirects                     # Netlify 301s
├── themes/aenix/              # Custom theme (engine-level)
├── docs/                       # This documentation
│   ├── BLOG_AUTHORING.md      # Blog post authoring guide
│   ├── CONTENT_OPERATIONS.md  # This file
│   ├── EXAMPLE_solution_landing.md
│   ├── FRONTMATTER_SCHEMA.md
│   ├── PAGE_CREATION_PLAYBOOK.md
│   └── SHORTCODES.md
├── _archive_legacy/            # Pre-redesign content (not rendered)
├── scripts/validate-frontmatter.sh
├── CLAUDE.md                   # AI assistant binding rules
├── AGENTS.md                   # Same rules, Cursor/Copilot/Cody format
├── .cursorrules                # Same rules, Cursor format
├── hugo.yaml                   # Hugo config (menu, taxonomies, markup, params)
├── netlify.toml                # Netlify build config
└── README.md
```

### Sister repos / folders

- `~/Загрузки/ahrefs research/aenix_seo_research_2026-05-08/` — SEO research workstream
  - `pages/<pack>/landing.md` — source-of-truth for landings
  - `pages/<pack>/article.md` — source-of-truth for companion articles (70 packs)
  - `scripts/map-pages-to-content.py` — maps `pages/<pack>/landing.md` → `content/<path>/_index.md`
  - `scripts/map-articles-to-blog.py` — maps `pages/<pack>/article.md` → `content/blog/YYYY/MM/<slug>/index.md`
  - `scripts/scrape-medium-blog.py` — pulls latest 10 from blog.aenix.io RSS
  - `scripts/import-medium-archive.py` — parses Medium "Download your information" archive
  - `scripts/bootstrap-aenix-repo.sh` — one-shot install of SEO/GEO automation into this repo
- `cozystack.io` repo (sister site, separate GitHub repo) — vendor-neutral CNCF docs

---

## DE slug map

When translating EN paths to DE paths, use this map:

| EN section | DE section |
|---|---|
| `solutions` | `loesungen` |
| `services` | `dienstleistungen` |
| `industries` | `branchen` |
| `alternatives` | `alternativen` |
| `compare` | `vergleichen` |
| `resources` | `ressourcen` |
| `products` | `produkte` |
| `pricing` | `preise` |
| `contact` | `kontakt` |
| `partners` | `partner` |
| `about` | `ueber-uns` |
| `conferences` | `konferenzen` |
| `migration` | `migration` |
| `case-studies` | `case-studies` |
| `enterprise-support` | `enterprise-support` |
| `kubernetes-deep-dive` | `kubernetes-deep-dive` |

Specific child-slug renames (where the DE keyword differs from EN slug):

| EN child slug | DE child slug |
|---|---|
| `financial-services` | `finanzdienstleistungen` |
| `public-sector` | `oeffentlicher-sektor` |
| `education-k12` | `k12-bildung` |
| `energy` | `energie` |
| `manufacturing` | `fertigung` |
| `transport-logistics` | `transport-logistik` |
| `universities` | `universitaeten` |
| `hosting-providers` | `hosting-anbieter` |
| `insurance` | `versicherung` |
| `smb-mid-market` | `mittelstand` |
| `hybrid-cloud-platform` | `hybrid-cloud` |
| `private-cloud-platform` | `private-cloud` |
| `cloud-cost-optimization` | `cloud-kostenoptimierung` |
| `dora-compliance-checklist` | `dora-compliance-checkliste` |
| `nis2-compliance-checklist` | `nis2-compliance-checkliste` |
| `vmware-migration-checklist` | `vmware-migrations-checkliste` |
| `sovereign-ai-decision-guide` | `sovereign-ai-architektur-leitfaden` |
| `vmware-alternatives` | `vmware-alternativen` |

All other child slugs map 1:1 (e.g., `dora-compliance` stays `dora-compliance`, `nis2-compliance` stays `nis2-compliance` because the German uses the English term).

---

## Cross-locale linking (hreflang)

The `seo/head.html` partial emits hreflang annotations from frontmatter fields:

```yaml
language: "en"
hreflang_de: "/de/loesungen/dora-compliance/"
```

For DE pages:
```yaml
language: "de"
hreflang_en: "/solutions/dora-compliance/"
```

Helper script `scripts/sync-hreflang.sh` (in research folder) audits the cross-references.

---

## Adding a new page (full workflow)

### For landings

1. **Author in the research folder**: `pages/<pack>/landing.md` (and `pages/de-<pack>/landing.md` for DE)
2. **Run mapper**: `python3 scripts/map-pages-to-content.py /path/to/aenix.io`
3. **Verify**: check `content/<section>/<slug>/_index.md` looks correct
4. **Commit + push** on feature branch

### For blog posts

See [`BLOG_AUTHORING.md`](BLOG_AUTHORING.md) — direct authoring in `content/blog/YYYY/MM/<slug>/index.md`.

---

## Adding a new menu item

Menu lives in `hugo.yaml` → `menus.main:` (top nav) and `menus.footer:` (footer). Three patterns:

**Flat menu item:**
```yaml
- name: Pricing
  url: /pricing/
  weight: 50
```

**Submenu (parent + children):**
```yaml
- name: Products
  url: /products/aenix-platform/
  identifier: products
  weight: 10
- name: Public Cloud Edition
  url: /products/aenix-platform/public-cloud-edition/
  parent: products
  weight: 2
```

**Grouped submenu with non-clickable section headings:**
```yaml
- name: Solutions
  url: /solutions/
  identifier: solutions
  weight: 20

- name: Regulatory                   # SECTION HEADING (non-clickable)
  identifier: solutions-regulatory
  parent: solutions
  weight: 10
  params: { heading: true }          # ← marks it as a heading

- name: DORA Compliance               # ACTUAL LINK under the heading
  url: /solutions/dora-compliance/
  parent: solutions-regulatory       # ← references the heading's identifier
  weight: 1
```

The `params.heading: true` flag is detected by `layouts/partials/header.html` (project-level override). Headings render as `<span class="dropdown-group-heading">`, not as `<a>`.

---

## Sovereignty for forms (DACH commercial team)

Pipedrive workspace is owned by Aenix. Five forms are pre-configured (Discovery / Demo / Partner / Course / Lead Magnet). All embed via the `pipedrive-form` shortcode — see [SHORTCODES.md](SHORTCODES.md#pipedrive-forms-live-embeds).

For DACH-specific form configuration (translated fields, regional disclaimers): contact sales@aenix.io. Pipedrive form fields are managed in Pipedrive UI, not in repo code.

---

## When in doubt

- Ask Timur (CEO/COO, timur.tukaev@aenix.io) for content / customer-evidence questions
- Ask Andrei Kvapil (founder) for technical / Cozystack questions
- See `cozystack.io` for technical docs about the underlying CNCF project
