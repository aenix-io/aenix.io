---
title: "Vendor-neutral cloud strategy — what an honest cloud advisory engagement looks like in 2026"
description: "What a vendor-neutral cloud strategy engagement actually delivers, and how it differs from Big-4 cloud advisory and hyperscaler-aligned consultancies."
date: 2026-05-11
author: "Aenix Team"
type: "article"
topics: ["Cloud", "Platform Engineering", "Sovereignty", "Compliance"]
language: "en"
companion_landing: "/services/cloud-strategy-consultancy/"
companion_label: "See cloud strategy consultancy →"
quiz:
  title: "Test yourself: vendor-neutral cloud strategy"
  questions:
    - q: "How many strategic questions does the article say a 2026 cloud strategy engagement has to answer?"
      options:
        - { text: "Five strategic questions", correct: true }
        - { text: "Three strategic questions", correct: false }
        - { text: "Seven strategic questions", correct: false }
      explanation: "Five questions: where each workload class lives, sovereignty position, 3-5 year cost trajectory, operational model that scales, and how the regulatory landscape evolves. A strategy missing any of these is a tooling roadmap, not a strategy."
    - q: "Why does the article argue Big-4 cloud advisory is structurally not vendor-neutral?"
      options:
        - { text: "Their consultants lack technical competence in cloud", correct: false }
        - { text: "Their fees are too high to allow objective analysis", correct: false }
        - { text: "Their integration revenue follows hyperscaler partnerships", correct: true }
      explanation: "Deloitte, KPMG, EY, PwC each have hyperscaler partnership programmes; most engagements end with hyperscaler-aligned modernization plans because that's where integration revenue follows. Vendor-neutral by marketing, vendor-aligned by economics."
    - q: "What does the article say Aenix will explicitly do when trade-offs warrant it?"
      options:
        - { text: "Always recommend Aenix Platform regardless of fit", correct: false }
        - { text: "Recommend staying on hyperscaler in writing", correct: true }
        - { text: "Hand the engagement off to a Big-4 firm", correct: false }
      explanation: "Aenix's vendor-neutral position means they will write 'stay on hyperscaler' when warranted. The downside-incentive — engagements that end with no follow-on Aenix platform work — is real, and that's how vendor-neutrality is supposed to operate."
    - q: "What's the page-count range of the synthesised strategy deliverable described in the article?"
      options:
        - { text: "Ten to fifteen pages of focused summary", correct: false }
        - { text: "Thirty to fifty pages plus an executive deck", correct: true }
        - { text: "One hundred or more pages of executive slides", correct: false }
      explanation: "The deliverable is 30-50 pages of usable detail (3-5 page exec summary, 5-8 pages per workstream, 2-3 page roadmap) plus an executive deck. The article positions this against 100-page executive-grade theatre as decision-velocity over slide polish."
    - q: "How does the article distinguish Cloud Strategy Consultancy from a Platform Readiness Assessment?"
      options:
        - { text: "Strategy is tactical while PRA is strategic", correct: false }
        - { text: "They are the same product under different names", correct: false }
        - { text: "PRA is tactical; Strategy defines target and substrate", correct: true }
      explanation: "PRA = tactical, used when strategic direction is settled, produces a 14-28 day remediation plan. Cloud Strategy = strategic, used when the direction is still in question, defines target architecture and substrate position. Most customers engage strategy first, then assessment, then implementation."
---

**Long-form companion to the [cloud strategy consultancy services page](/services/cloud-strategy-consultancy/). For CIOs, CTOs, heads of cloud, and strategy directors evaluating what a vendor-neutral cloud advisory engagement actually delivers — versus Big-4 cloud advisory, hyperscaler-aligned consultancies, and in-house strategy teams.**

"Cloud strategy" is a saturated term. Hyperscalers offer it (Azure
Cloud Adoption Framework, AWS Migration Acceleration Programme, Google
Cloud Adoption Framework). The Big-4 offer it (Deloitte, KPMG, EY,
PwC each have cloud advisory practices in the thousands of consultants).
Hyperscaler partners offer it (system integrators with thousands of
certified cloud consultants). Boutique firms offer it. In-house
strategy teams generate it.

The market is crowded, and the methodologies look similar from the
outside. The difference shows up in what the strategy actually
recommends, who's incentivised to recommend what, and whether the
recommendation survives 18 months in practice.

This article is the honest version. What does an *Aenix-style*
vendor-neutral cloud strategy engagement deliver, why it's different
from hyperscaler-aligned or Big-4 alternatives, and when each is the
right fit.

## What "cloud strategy" actually has to answer in 2026

Five strategic questions dominate the 2026 conversation:

### 1. Where should each workload class live?

The 2018 default — "everything to public cloud" — has broken down.
DORA-aligned workloads run differently than SaaS workloads. Sustained
AI inference runs differently than spike-y customer-facing apps.
Regulated data classes run differently than open data. The strategy
has to take a position per workload class, not blanket all of them.

### 2. What's the sovereignty position?

Different jurisdictions, different sectors, different customer
relationships impose different sovereignty requirements. The strategy
has to name the position explicitly — including what it costs in
operational complexity and how it affects vendor selection.

### 3. What's the cost trajectory?

Public-cloud bills compound. The strategy has to project cost across
the next 3-5 years across each workload class and substrate option.
Honest projection — including hardware refresh, platform-engineering
capacity, vendor lock-in switching cost — not the marketing version.

### 4. What's the operational model that scales?

DevOps-only? Platform engineering? SRE-embedded? Centralized SRE?
The model has to fit the engineering organisation's headcount profile
and growth trajectory; mismatches cost more than they save.

### 5. How does the regulatory landscape evolve?

DORA in force since Jan 2025. NIS2 transposition Oct 2024. EUCS
finalising. Sectoral overlays expanding. Sovereign-cloud frameworks
sharpening. The strategy can't be locked to today's regulatory
state; it has to incorporate likely 24-36 month evolution.

A "cloud strategy" engagement that doesn't have positions on all
five questions is not a strategy. It's a tooling roadmap.

## Why vendor-neutral matters

Hyperscaler-aligned and most Big-4 advisory practices have implicit
commercial alignment that shapes recommendations:

- **Hyperscaler-led advisory** — AWS, Azure, GCP, IBM Cloud each
  fund their own and partner-led advisory practices. The advisory
  is structurally aligned to recommend that hyperscaler. Honest
  practitioners try to mitigate this, but the commercial incentive
  is clear.
- **Big-4 cloud advisory** — Deloitte, KPMG, EY, PwC each have
  partnership programmes with hyperscalers that influence
  recommendations. Most engagements end with a hyperscaler-aligned
  modernization plan because that's where the integration revenue
  follows.
- **Hyperscaler-partner SIs** — Capgemini, Accenture, Infosys,
  Wipro have certified-partner status with hyperscalers and revenue
  alignment with hyperscaler-led implementation. Vendor-neutral by
  marketing; vendor-aligned by economics.

Vendor-neutral advisory means the engagement's commercial outcome
does not depend on the customer choosing any specific hyperscaler,
distribution, or product. Aenix's commercial model — we build and
operate Ænix Platform — creates a different alignment: we want the
strategy to land on Ænix Platform *where it fits*, but we explicitly
do not push it when it doesn't.

We will say "stay on hyperscaler" when the trade-offs warrant it. We
say so in writing. The downside-incentive that creates is real —
some engagements end with no follow-on platform work for Aenix — and
that's how vendor-neutrality is supposed to operate.

## What our engagement actually delivers

A typical Aenix cloud strategy engagement covers:

### Workstream 1 — Workload portfolio strategy

Workload-class taxonomy: regulated / non-regulated, sustained /
spike-y, sensitive data class / non-sensitive, latency-critical /
elastic. For each class, the substrate fit (public cloud /
hyperscaler-managed / private cloud / sovereign / hybrid / edge).

Output: workload-class-to-substrate matrix with rationale per class.

### Workstream 2 — Sovereignty position

Regulatory applicability across jurisdictions and sectors. Substantive
sovereignty requirements per workload class. Vendor evaluation
criteria from a sovereignty perspective.

Output: written sovereignty position with named jurisdictions, named
substrate constraints, residual risk acceptance documented.

### Workstream 3 — Cost trajectory

Three-to-five-year cost projection across substrate options. Honest
TCO including hidden costs (egress, reservation under-utilization,
platform-engineering capacity, vendor lock-in switching cost,
hardware refresh cycles). Sensitivity analysis for key assumptions.

Output: spreadsheet your CFO can audit, plus narrative explanation.

### Workstream 4 — Operational model recommendation

DevOps / SRE / platform engineering function design. Headcount
projections. Hiring plan. Org-structure recommendations. Tooling
priorities.

Output: org-design recommendations with named roles, RACI matrices,
priority hiring queue.

### Workstream 5 — Regulatory trajectory

24-36 month outlook on applicable regulations. EUCS finalisation,
NIS2 enforcement, sectoral overlay sharpening, sovereignty
framework expansion. How the workload-portfolio strategy adapts as
the regulatory landscape evolves.

Output: regulatory roadmap with checkpoint dates and decision
triggers.

### Synthesis: the 18-36 month plan

Three workstream outputs synthesised into a board-grade strategy
document. Executive summary (3-5 pages). Workstream detail (5-8 pages
per workstream). Roadmap with milestones (2-3 pages). Implementation
sequencing recommendations.

Total: 30-50 page deliverable with executive deck for board /
sponsor distribution.

## Engagement variants

- **4-week strategic assessment** — narrower scope, fixed-price,
  single workload portfolio segment
- **8-week strategy engagement** — full five-workstream scope, fixed-
  price
- **Quarterly strategic advisory** — ongoing engagement for strategic
  decisions as they emerge (typically for tier-1 customers)

## Where engagement value compounds

Strategic engagements often face a "shelfware" problem — the
deliverable lands, gets distributed, and 18 months later nobody
remembers what it said. Aenix engagement model addresses this:

- **Engineer-written, not consultant-written** — our deliverables are
  written by the same engineers who'd implement them; technical
  reproducibility means every claim traces to specific artefacts.
- **Implementation continuity** — if the customer engages Aenix for
  implementation, the engineering team that wrote the strategy
  participates in execution. No handoff loss.
- **Decision-velocity over slide-grade polish** — we deliver 30-50
  pages of usable detail, not 100 pages of executive-grade theatre.
- **Quarterly strategic advisory** for tier-1 customers keeps the
  strategy current as the customer environment and regulatory
  landscape evolve.

## When this engagement fits

Strong fit:

- CIO / CTO / Head of Cloud at €100M+ revenue organisation
- Pre-decision on a multi-year cloud direction (modernization,
  repatriation, sovereign cloud, AI infrastructure)
- Existing strategy work has produced vendor-aligned options that
  feel uncomfortable
- Regulatory pressure (DORA, NIS2, sectoral) requires substantive
  positioning beyond procurement-clause compliance

Marginal fit:

- Mid-size organisations with simpler decision space — may fit
  Platform Readiness Assessment (more tactical) rather than full
  strategy engagement
- Single workload class decision (e.g., AI infrastructure only) —
  may fit AI-specific Sovereign AI Architecture Review

Poor fit:

- Organisations that have already committed to a specific
  hyperscaler programme — Aenix can advise on specific architecture
  gaps within that commitment, but full strategy work assumes
  decisions remain open
- Strategy work that's primarily change-management or
  organisational-restructure work — that's a different category

## How this differs from a Platform Readiness Assessment

The two engagements have overlapping scope but different purpose:

- **Platform Readiness Assessment** is *tactical* — assesses current
  state against a target architecture, produces a 14-28 day
  remediation plan. Used when the strategic direction is settled.
- **Cloud Strategy Consultancy** is *strategic* — defines the target
  architecture and substrate position. Used when the strategic
  direction is still in question.

Most customers eventually engage both, sequentially: strategy
engagement first, then assessment, then implementation.

## Where to dig deeper

- **[Cloud strategy consultancy services](/services/cloud-strategy-consultancy/)** —
  the commercial landing
- **[Platform Readiness Assessment](/services/platform-readiness-assessment/)** —
  the tactical assessment engagement
- **[Cloud Readiness Assessment — 14-day methodology](/blog/2026/05/cloud-readiness-assessment-14-day-methodology/)** —
  methodology detail for the tactical engagement
- **[Cloud engineering disciplines in 2026](/blog/2026/05/cloud-engineering-disciplines-2026/)** —
  the seven cloud-engineering disciplines

---

*Aenix is the company behind Cozystack — a CNCF project, Kubernetes
Certified Distribution. Our engineering team takes strategic
engagements as a deliberate part of the business, not as a sales-
funnel feeder. We will not deliver a strategy whose recommendation
we wouldn't stand behind technically.*
