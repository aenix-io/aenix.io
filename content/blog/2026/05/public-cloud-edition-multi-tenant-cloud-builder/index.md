---
title: "Public Cloud Edition — what it actually takes to launch a sovereign cloud product at scale"
description: "Long-form companion to the Public Cloud Edition product page. For tier-1 telcos, national operators, big banks building their own cloud, and large sovereign cloud initiatives: what a multi-million-euro multi-year build covers, and how to phase it."
date: 2026-05-11
author: "Aenix Team"
type: "article"
topics: ["Cozystack", "Multi-tenancy", "Sovereignty", "Cloud", "Platform Engineering"]
language: "en"
companion_landing: "/products/aenix-platform/public-cloud-edition/"
companion_label: "See Public Cloud Edition product details →"
quiz:
  title: "Test yourself: Public Cloud Edition"
  questions:
    - q: "How many managed services does Public Cloud Edition typically target compared to ISP Edition?"
      options:
        - { text: "Same ~20 services, just at higher scale", correct: false }
        - { text: "30-50+ services versus ~20 for ISP Edition", correct: true }
        - { text: "100+ services to match hyperscaler depth", correct: false }
      explanation: "The article states ISP Edition exposes ~20 managed services while Public Cloud Edition typically targets 30-50+ services across compute, storage, databases, AI/GPU, etc."
    - q: "What is the typical engagement size and duration for a Public Cloud Edition build?"
      options:
        - { text: "€100k-€500k over 6-12 months", correct: false }
        - { text: "€1M-€10M+ multi-year programmes over 18-36 months", correct: true }
        - { text: "Fixed €500k annual subscription", correct: false }
      explanation: "The engagement structure section explicitly states engagement size is €1M-€10M+ multi-year programmes, with the build phased across 18-36 months."
    - q: "Why does the article say regulator dialog should happen in Phase 0-1 rather than Phase 4?"
      options:
        - { text: "Regulators require notification before any construction begins", correct: false }
        - { text: "Late-phase regulator engagement forces rebuilding architecture to satisfy expectations that could have been designed in", correct: true }
        - { text: "Phase 4 is too late legally to obtain operating licences", correct: false }
      explanation: "The failure pattern 'Regulator dialog deferred' explains projects that defer the conversation find themselves rebuilding architecture to satisfy expectations they could have designed for at the start."
    - q: "Which buyer profile is described as a POOR fit for Public Cloud Edition?"
      options:
        - { text: "Smaller hosting providers", correct: true }
        - { text: "Tier-1 telcos launching sovereign cloud products", correct: false }
        - { text: "Large banks operating their own cloud", correct: false }
      explanation: "The article lists smaller hosting providers as poor fit because ISP Edition fits substantially better on economics and operational model; Public Cloud Edition is for tier-1/national-scale builds."
    - q: "What happens in Phase 1 (Foundation) of a Public Cloud Edition engagement?"
      options:
        - { text: "Open-market customer launch with full marketing activation", correct: false }
        - { text: "Service catalog buildout for all 30-50+ managed services", correct: false }
        - { text: "Hardware procurement, Talos/Cozystack deployment in first DC, storage and identity foundation", correct: true }
      explanation: "Phase 1 covers hardware procurement and racking, Talos/Cozystack platform deployment in the first datacentre, storage layer, networking foundation, identity integration, and initial observability — ending with a working single-region internal platform."
---

**Long-form companion to the [Public Cloud Edition landing](/products/aenix-platform/public-cloud-edition/). For tier-1 telcos, national operators, big banks building their own cloud, and large sovereign cloud initiatives evaluating what a multi-million-euro Aenix engagement actually covers — and how to phase it across the 18-36 months it typically runs.**

The Public Cloud Edition conversation is different from every other
Aenix engagement. It's not "should we use Cozystack?" — that's already
decided. It's "we are launching a cloud product at national or
tier-1-customer scale; what does the partnership with Aenix look like
across the 18-36 months it takes to ship?"

This article walks through what an actual Public Cloud Edition build
covers, how it phases, where most large cloud projects fail, and what
makes the difference between a cloud product that customers will pay
for and a cloud project that runs over budget.

## What Public Cloud Edition is built for

Five buyer profiles dominate Public Cloud Edition engagements:

1. **Tier-1 telcos / national operators** — incumbent telecom
   operators launching or scaling a public cloud as part of their
   product portfolio. Often paired with sovereignty positioning
   ("our sovereign cloud", "national cloud").
2. **Big banks operating their own cloud** — the bank consumes its
   own cloud product for internal workloads and, sometimes, sells
   capacity to its customer base.
3. **Sovereign cloud initiatives** — government-mandated cloud
   products, sometimes with public-private-partnership structure,
   with explicit sovereignty requirements and regulator alignment.
4. **Hosting providers at large scale** — providers above ~5,000
   customers where the ISP Edition operational model needs scaling
   into multi-region with multi-DC active/active.
5. **National AI/GPU operators** — sustained inference + training
   capacity for sectoral customers (banks, healthcare, public
   sector, defence) where AI sovereignty is a national-level
   requirement.

All five share the same operational reality: multi-region or
multi-DC active/active; multi-million-euro infrastructure investment;
customer-facing SLAs that map to national regulator expectations; and
a partnership model with Aenix that lasts years, not months.

## What Public Cloud Edition includes that other editions don't

### Multi-region / multi-DC active/active

Single-DC deployments are ISP Edition or Enterprise Edition territory.
Public Cloud Edition assumes from day one that the customer needs
active/active across regions or datacentres with cross-DC replication
tuned for RTO/RPO targets. The platform's control plane, observability,
identity, and storage layers all design for multi-region from the
foundation rather than retrofitting.

### Service-catalog depth

ISP Edition exposes ~20 managed services. Public Cloud Edition
typically targets 30-50+ services across compute, storage, networking,
managed databases, observability, AI/GPU, message queues, search,
content delivery, security tooling. Cozystack's package architecture
(Package + PackageSource + ApplicationDefinition resources, as of
v1.x) supports the catalog expansion.

### Operations team at scale

10-30+ engineers running the platform, depending on customer count
and SLA. Public Cloud Edition engagement includes operations team
hiring and training as a substantial workstream — not "you find
people, we'll train them" but "we design the org structure with you,
participate in interviews, do hands-on training, and run Tier-3 for
the first 12-18 months while your team builds confidence."

### Regulator and sovereignty alignment

Whatever the sovereignty framework is in the customer's market —
SecNumCloud, BSI C5, EUCS, sectoral overlays, national procurement
mandates — the architecture is designed to satisfy it substantively,
not just contractually. Compliance evidence catalogue is a deliverable.

### Customer-facing brand engineering

Beyond cozyportal customisation, Public Cloud Edition includes
brand-engineering work: customer portal that looks like a top-tier
cloud product, not a customised Cozystack instance. UX flows tuned
to how customer's customers think about ordering, configuring,
paying. Designer-led, not engineering-led.

## How an 18-36 month engagement phases

### Phase 0 — Discovery and partnership formation (1-3 months)

Before engineering, agreement on:
- Strategic objectives (what cloud product, what customer base, what
  competitive positioning)
- Regulatory scope (which frameworks bind the platform)
- Org structure (who owns what; how Aenix and customer teams interact)
- Commercial structure (engagement model, IP, support model post-go-live)
- Roadmap (phasing of services, geographic expansion, SLA tiers)

Output: signed engagement plan with named workstream leads on both
sides.

### Phase 1 — Foundation (3-6 months)

Hardware procurement and racking. Talos / Cozystack platform deployment
in the first datacentre. Storage layer (LINSTOR or Ceph at scale).
Networking foundation. Identity integration with customer's existing
workforce identity (Keycloak / Okta / Active Directory / sovereign IdP).
Initial observability stack.

End state: working platform, single region, internal access only.
Not yet customer-ready.

### Phase 2 — Multi-region foundation (3-6 months)

Second datacentre stood up. Cross-DC replication validated. Federated
identity. Multi-region storage replication (LINSTOR async or Ceph
cross-region). Disaster recovery patterns tested. Compliance
documentation foundation built.

End state: multi-DC platform, internal access, RTO/RPO validated
against targets.

### Phase 3 — Service catalog buildout (4-12 months)

Service-by-service rollout. Start with foundational services (compute,
storage, basic networking, managed PostgreSQL). Layer in managed
service families (databases, queues, caches, search, observability).
Add edition-specific services (GPU, AI inference, sectoral compliance
tooling).

Each service goes through: deployment → internal testing → friendly-
customer pilot → production GA. Cohort-based rollout, not big-bang.

### Phase 4 — Customer onboarding and limited GA (3-6 months)

Customer-facing portal launched (brand-engineered). Billing integration
validated end-to-end. Support runbooks documented. First 10-50 friendly
customers onboarded. SLA monitoring operationalised.

End state: cloud product live with first customer cohort, billing
and support workflows proven.

### Phase 5 — General availability and scale (ongoing)

Open market launch. Marketing and sales activated. Operations team
scales to support customer growth. Aenix Tier-3 retainer continues
until customer team is ready to absorb Tier-3 (typically 12-24 months
post-GA).

Subsequent phases are roadmap-driven: new services, new regions, new
sectoral SKUs.

## Where multi-million-euro cloud projects fail

Three failure patterns we've seen across the industry:

### 1. Under-investing in brand engineering

Engineering-led platform with engineering-grade UX. Customers click
around, find it functional but unappealing, sign up for hyperscaler
instead. Public Cloud Edition engagement includes design partnership
explicitly to avoid this.

### 2. Operations team sized for go-live, not 18-month-out volume

Cloud products grow exponentially during the first year of GA if
positioning is right. Operations teams sized for go-live customer
count get overwhelmed at month 6-12. Plan operations capacity for
18-month-out volume; hire ahead.

### 3. Regulator dialog deferred

Sovereignty positioning depends on regulator endorsement (explicit or
implicit). Projects that defer the regulator conversation until
late-phase find themselves rebuilding architecture to satisfy
expectations they could have designed for at the start. Engage
regulators in Phase 0-1, not Phase 4.

## When Public Cloud Edition is the right answer

Strong fit:

- Tier-1 telco / national operator / large bank / sovereign cloud
  initiative
- Multi-region or multi-DC operational reality
- 5,000+ target customer count or strategic customer base
- Multi-million-euro budget envelope across 18-36 months
- Sovereignty / regulator positioning is core to value proposition
- Senior executive sponsorship (CIO or CTO level minimum)

Marginal fit:

- Large hosting providers above the ISP Edition ceiling but below
  tier-1 telco scale — may fit Public Cloud Edition or extended ISP
  Edition depending on growth profile
- AI/GPU-focused operators where the AI workload dominates — AI/ML
  Edition may fit better with selective Public Cloud Edition
  components

Poor fit:

- Smaller hosting providers — ISP Edition fits substantially better
  on economics and operational model
- Regulated enterprises consuming cloud rather than producing it —
  Enterprise Edition is the right answer

## Engagement structure

- **Discovery call** (executive level, 60-90 min) — strategic fit
  assessment
- **Strategic engagement plan** (4-8 weeks, fixed-price) —
  partnership formation, output is signed engagement plan
- **Phase 1-5 build** (18-36 months) — phased build per above
- **Managed Tier-3** (ongoing) — Aenix retainer until customer team
  is ready to absorb

Engagement size: €1M - €10M+ multi-year programmes.

## Where to dig deeper

- **[Public Cloud Edition landing](/products/aenix-platform/public-cloud-edition/)** —
  feature list, edition-specific FAQ
- **[Public Cloud Builder services](/services/public-cloud-builder/)** —
  engagement details
- **[Sovereign Cloud Builder services](/services/sovereign-cloud-builder/)** —
  for the sovereignty-specific variant
- **[Build sovereign cloud — playbook for EU and Central Asia](/blog/2026/05/build-sovereign-cloud-eu-and-central-asia/)** —
  sovereign cloud architectural patterns

---

*Aenix is the company behind Cozystack — a CNCF project, Kubernetes
Certified Distribution. Our Public Cloud Edition engagements with
tier-1 telcos and sovereign cloud initiatives are NDA-protected. Aenix
secured $300K seed investment from Prospective Technologies in April
2025 to accelerate platform development for these large engagements.*
