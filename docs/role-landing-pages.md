# Role landing pages (`/for/`) — keyword map, ICP, and ad targeting

New section added 2026-05-29. Six job-title landing pages (EN + DE twins) under `/for/` and `/de/fuer/`,
plus a section hub. **Purpose: paid-traffic landing pages for LinkedIn (and similar) job-title ads** — each
page is written for one seat, presents the offer tailored to that role, and routes the visitor to the
matching "money" page. Organic SEO/GEO is a secondary benefit (entity signals, FAQ schema, role long-tail).

## Why these are paid-first (and cannibalization-safe)

Role-framed queries ("vmware alternative for infrastructure leaders", "private cloud aufbauen") have near-zero
organic volume — confirmed via Ahrefs (`private cloud aufbauen` = 0 DE volume; `vmware exit` = 50 US). So the
role pages do **not** compete with the existing money pages for head terms. Instead they target the **role
frame** as primary_keyword and **internal-link to** the head-term owners (vmware-alternative, nis2, dora,
data-sovereignty, internal-developer-platform, cloud-repatriation, white-label-cloud, partners). No shared
parent_topic → no cannibalization.

## Ahrefs keyword data (2026-05-29) — the head terms each role routes to

EN (country=US): volume / KD / CPC(USD) / parent_topic
- vmware alternative — 450 / 3 / 7.00 / vmware alternatives
- private cloud platform — 450 / 33 / 8.00 / private cloud
- vmware migration — 250 / 1 / 9.00
- internal developer platform — 800 / 22 / 9.00
- platform engineering — 2800 / 32 / 3.50
- cloud repatriation — 600 / 0 / 6.00
- managed kubernetes — 800 / 48 / 11.00
- white label cloud — 100 / 0 / 3.00 (commercial intent)
- nis2 compliance — 700 / 28 / 2.50
- dora compliance — 1000 / 8 / 3.50
- data sovereignty — 2400 / 23 / 3.50
- sovereign ai — 2700 / 33

DE (country=DE): volume / KD / CPC(EUR)
- private cloud — 4200 / 6 / 2.00  ← low-KD, high-volume DACH opportunity
- vmware alternative — 700 / 0 / 1.60
- dora verordnung — 1500 / 1 / 1.30
- datensouveränität — 350 / 2 / 1.70
- nis2 umsetzung — 300
- internal developer platform — 250 / 18 / 2.50
- managed kubernetes — 300 / 19 / 3.50
- vmware migration — 150
- cloud repatriation — 150
- (private cloud aufbauen ≈ 0, vmware ablösen ≈ 10, souveräne ki ≈ 90 — role/long-tail only)

Takeaways baked into the pages: DACH is a real ranking opportunity (low KD on private cloud / dora / vmware
alternative / datensouveränität); high CPCs on vmware-migration / managed-kubernetes / private-cloud-platform
confirm strong commercial value for paid LinkedIn spend.

## The dual offer (on every role page)

Per the GTM model, each page presents **two engagement modes**:
1. **Turnkey platform** — resell/run Ænix Platform editions (cloud / IDP / AI-ML / enterprise).
2. **Framework + outsourced team** — Cozystack as the framework, Aenix as the outsourced engineering team
   that builds a custom platform. This is the key differentiator for Infrastructure / CTO / Head-of-Cloud.

## Page → LinkedIn job-title targeting → money pages

| Page (EN / DE) | LinkedIn job titles to target | Primary offer | Routes to |
|---|---|---|---|
| `/for/head-of-infrastructure/` · `/de/fuer/leiter-infrastruktur/` | Head/VP/Director of Infrastructure, Head of IT Infrastructure, Infrastructure Architect | VMware exit (turnkey or build) | vmware-alternative, migration/vmware, build-private-cloud, enterprise-edition |
| `/for/head-of-platform-engineering/` · `/de/fuer/leiter-platform-engineering/` | Head/Director Platform Engineering, Platform Lead, DevEx Lead, Head of DevOps | IDP / self-service | developer-self-service, internal-developer-platform, idp-edition, platform-engineering |
| `/for/cto/` · `/de/fuer/cto/` | CTO, VP Engineering, Chief Architect, VP Technology (scale-up/SaaS/product) | repatriation / cost / control | cloud-repatriation, cloud-cost-optimization, enterprise-edition, TCO worksheet |
| `/for/head-of-cloud/` · `/de/fuer/leiter-cloud/` | Head of Cloud, Cloud Practice Lead, Head of Managed Services (SI/MSP) | branded cloud to resell/build | white-label-cloud, public-cloud-builder, isp-edition, partners |
| `/for/head-of-alliances/` · `/de/fuer/leiter-allianzen/` | Head/VP/Director Alliances, Partnerships, Channel, BizDev (SI/MSP/distributor) | partner line (resell/co-deliver) | partners, aenix-platform, white-label-cloud |
| `/for/ciso/` · `/de/fuer/ciso/` | CISO, Head of Compliance/Risk, DORA/NIS2 Programme Lead, Head of Information Security | sovereignty / DORA / NIS2 | dora-compliance, nis2-compliance, data-sovereignty, enterprise-edition |

## ICP enrichment (from the 2026-05-29 partner-channel GTM work)

The partner-channel research (SI/MSP/cloud-consultancy targets, post-Broadcom VMware exit) sharpened two of
these personas and confirmed the dual offer:
- **Head of Cloud / Head of Alliances** are the SI/MSP **channel** personas — the ~120-company partner
  workbook (aenix CRM / Drive) maps to these two pages. Wedge: VMware/Broadcom margin squeeze → resell or
  co-deliver an open cloud → up to 40% margin + recurring revenue.
- **Head of Infrastructure / CTO / CISO** are the **end-buyer** personas (enterprise, scale-up, regulated).
- Strongest current market wedge across all: the **VMware/Broadcom exit** + **sovereignty (EU/DACH/GCC/CIS)**.
- See the Sales Playbook + regional partner workbook in `~/claude/cozystack-gtm/` for the channel motion.

## Production notes / to-do before merge

- These follow the live landing pattern (minimal frontmatter + 12-block body + trailing SEO/JSON-LD comment),
  matching `content/solutions/data-sovereignty/_index.md`.
- hreflang wired via `hreflang_de:` (EN pages) and `hreflang_en:` + `language: "de"` (DE pages).
- DE pages link to confirmed DE solution slugs + DE section roots (`/de/produkte/`, `/de/dienstleistungen/`,
  `/de/partner/`, `/de/alternativen/`, `/de/migration/`) to avoid 404s; tighten to specific DE slugs once
  verified against `docs/CONTENT_OPERATIONS.md`.
- llms.txt updated with a "By role" section.
- Suggested OG images: 1200×630 per role (raster). Currently rely on site default.
- Add 1–2 inbound internal links from each money page back to its role page (SEO checklist: no orphans).
- Optional next: AI/ML lead persona (`/for/head-of-ai-ml/`) routing to sovereign-ai + AI/ML Edition.
