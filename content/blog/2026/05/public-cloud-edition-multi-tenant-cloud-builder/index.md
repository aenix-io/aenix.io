---
title: "Public Cloud Platform at operator scale — what it takes to launch a national sovereign cloud"
seo_title: "Public Cloud Platform at operator scale"
description: "What an operator-scale sovereign cloud build on Ænix Public Cloud Platform covers for telcos, banks and national operators: phases, timeline, team, pitfalls."
date: "2026-05-25"
cover_image: "/img/blog/covers/public-cloud-edition-multi-tenant-cloud-builder.jpg"
author: "Aenix Team"
type: "article"
topics: ["Cozystack", "Multi-tenancy", "Sovereignty", "Cloud", "Platform Engineering"]
language: "en"
hreflang_de: "/de/blog/2026/05/public-cloud-platform-souveraenes-cloud-produkt/"
companion_landing: "/products/public-cloud-platform/"
companion_label: "See Public Cloud Platform product details →"
quiz:
  title: "Test yourself: Public Cloud Platform"
  questions:
    - q: "How many managed services does an operator-scale build typically target compared to a provider-scale one?"
      options:
        - { text: "30-50+ versus ~20 at provider scale", correct: true }
        - { text: "Same ~20 at higher scale", correct: false }
        - { text: "100+ to match hyperscalers", correct: false }
      explanation: "The article states a provider-scale build exposes ~20 managed services while an operator-scale build typically targets 30-50+ across compute, storage, databases, AI/GPU, and more."
    - q: "What is the typical timeline for an operator-scale, multi-region Public Cloud Platform programme?"
      options:
        - { text: "Live in a few days with no pilot", correct: false }
        - { text: "Fixed €500k annual subscription with no phasing", correct: false }
        - { text: "A 3-6 month pilot, then 9-18 months to full multi-region", correct: true }
      explanation: "The engagement structure section describes a multi-year programme quoted per RFP: a 3-6 month pilot (Phases 0-1), then 9-18 months to full multi-region operation (Phases 2-4). A single provider at provider scale goes live much faster — in weeks once hardware is ready."
    - q: "Why does the article say regulator dialog should happen in Phase 0-1 rather than Phase 4?"
      options:
        - { text: "Regulators require pre-construction notification", correct: false }
        - { text: "Phase 4 is legally too late for licences", correct: false }
        - { text: "Late engagement forces architecture rebuilds", correct: true }
      explanation: "The failure pattern 'Regulator dialog deferred' explains that projects which defer the conversation end up rebuilding architecture to satisfy expectations they could have designed for at the start."
    - q: "Which buyer profile is described as a POOR fit for an operator-scale programme?"
      options:
        - { text: "Tier-1 telcos launching a sovereign cloud", correct: false }
        - { text: "Smaller hosting providers (served at provider scale)", correct: true }
        - { text: "Large banks running their own private cloud", correct: false }
      explanation: "The article lists smaller hosting providers as a poor fit for an operator-scale programme, not for the product: Public Cloud Platform at provider scale, from the published price list, fits their economics and operating model better."
    - q: "What happens in Phase 1 (Foundation) of an operator-scale engagement?"
      options:
        - { text: "Hardware, first DC, storage and identity", correct: true }
        - { text: "Open-market launch and marketing activation", correct: false }
        - { text: "Service catalog for all 30-50+ services", correct: false }
      explanation: "Phase 1 covers hardware procurement and racking, Talos/Cozystack platform deployment in the first datacentre, storage layer, networking foundation, identity integration, and initial observability — ending with a working single-region internal platform."
---


Most hosting providers run Ænix Public Cloud Platform at provider
scale: the productized installer puts the platform live in weeks once
hardware is ready, priced from the published support tiers. This post
is about the other end — the operator-scale programme. The question
there is not "should we use Cozystack?" — that's already decided. It's
"we are launching a cloud product at national or tier-1-customer scale;
what does the partnership with Ænix look like across a 3-6 month pilot
and the 9-18 months to full multi-region operation?"

## Who runs Public Cloud Platform at operator scale

Five buyer profiles dominate operator-scale Public Cloud Platform engagements:

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
   customers where the Public Cloud Platform operational model needs scaling
   into multi-region with multi-DC active/active.
5. **National AI/GPU operators** — sustained inference + training
   capacity for sectoral customers (banks, healthcare, public
   sector) where AI sovereignty is a national-level
   requirement.

All five share the same operational reality: multi-region or
multi-DC active/active; multi-million-euro infrastructure investment;
customer-facing SLAs that map to national regulator expectations; and
a partnership model with Ænix that lasts years, not months.

## What an operator-scale build adds

### Multi-region / multi-DC active/active

Single-DC deployments are served by Public Cloud Platform at provider
scale (or Private Cloud Platform for internal use). Operator-scale builds
assume from day one that the customer needs
active/active across regions or datacentres with cross-DC replication
tuned for RTO/RPO targets. The platform's control plane, observability,
identity, and storage layers all design for multi-region from the
foundation rather than retrofitting.

### Service-catalog depth

A provider-scale build exposes ~20 managed services. An operator-scale build
typically targets 30-50+ services across compute, storage, networking,
managed databases, observability, AI/GPU, message queues, search,
content delivery, security tooling. Cozystack's package architecture
(Package + PackageSource + ApplicationDefinition resources, as of
v1.x) supports the catalog expansion.

### Operations team at scale

10-30+ engineers running the platform, depending on customer count
and SLA. An operator-scale engagement includes operations team
hiring and training as a substantial workstream — not "you find
people, we'll train them" but "we design the org structure with you,
participate in interviews, do hands-on training, and provide escalation
support (Plus or Enterprise tier) for the first 12-18 months while your
team builds confidence."

### Regulator and sovereignty alignment

Whatever the sovereignty framework is in the customer's market —
SecNumCloud, BSI C5, EUCS, sectoral overlays, national procurement
mandates — the architecture is designed to satisfy it substantively,
not just contractually. Compliance evidence catalogue is a deliverable.

### Customer-facing brand engineering

Beyond Cozystack Dashboard customisation, an operator-scale engagement includes
brand-engineering work: customer portal that looks like a top-tier
cloud product, not a customised Cozystack instance. UX flows tuned
to how customer's customers think about ordering, configuring,
paying. Designer-led, not engineering-led.

## How an operator-scale engagement phases

Phases 0 and 1 form the pilot and take 3-6 months together. Phases 2-4
take 9-18 months to full multi-region operation, overlapping where the
teams allow.

### Phase 0 — Discovery and partnership formation (start of the pilot)

Before engineering, agreement on:
- Strategic objectives (what cloud product, what customer base, what
  competitive positioning)
- Regulatory scope (which frameworks bind the platform)
- Org structure (who owns what; how Ænix and customer teams interact)
- Commercial structure (engagement model, IP, support model post-go-live)
- Roadmap (phasing of services, geographic expansion, SLA tiers)

Output: signed engagement plan with named workstream leads on both
sides.

### Phase 1 — Foundation (rest of the pilot)

Hardware procurement and racking. Talos / Cozystack platform deployment
in the first datacentre. Storage layer (LINSTOR/DRBD at scale).
Networking foundation. Identity integration with customer's existing
workforce identity (Keycloak / Okta / Active Directory / sovereign IdP).
Initial observability stack.

End state: working platform, single region, internal access only.
Not yet customer-ready.

### Phase 2 — Multi-region foundation

Second datacentre stood up. Cross-DC replication validated. Federated
identity. Multi-region storage replication (LINSTOR async or Ceph
cross-region). Disaster recovery patterns tested. Compliance
documentation foundation built.

End state: multi-DC platform, internal access, RTO/RPO validated
against targets.

### Phase 3 — Service catalog buildout

Service-by-service rollout. Start with foundational services (compute,
storage, basic networking, managed PostgreSQL). Layer in managed
service families (databases, queues, caches, search, observability).
Add product-specific services (GPU, AI inference, sectoral compliance
tooling).

Each service goes through: deployment → internal testing → friendly-
customer pilot → production GA. Cohort-based rollout, not big-bang.

### Phase 4 — Customer onboarding and limited GA

Customer-facing portal launched (brand-engineered). Billing integration
validated end-to-end. Support runbooks documented. First 10-50 friendly
customers onboarded. SLA monitoring operationalised.

End state: cloud product live with first customer cohort, billing
and support workflows proven.

### Phase 5 — General availability and scale (ongoing)

Open market launch. Marketing and sales activated. Operations team
scales to support customer growth. Ænix escalation support (Plus or
Enterprise tier) continues until the customer team is ready to absorb
it (typically 12-24 months post-GA).

Subsequent phases are roadmap-driven: new services, new regions, new
sectoral SKUs.

## Where multi-million-euro cloud projects fail

Three failure patterns we've seen across the industry:

### 1. Under-investing in brand engineering

Engineering-led platform with engineering-grade UX. Customers click
around, find it functional but unappealing, sign up for hyperscaler
instead. An operator-scale engagement includes design partnership
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

## When an operator-scale programme is the right answer

Strong fit:

- Tier-1 telco / national operator / large bank / sovereign cloud
  initiative
- Multi-region or multi-DC operational reality
- 5,000+ target customer count or strategic customer base
- Multi-million-euro budget envelope across a multi-year programme
- Sovereignty / regulator positioning is core to value proposition
- Senior executive sponsorship (CIO or CTO level minimum)

Marginal fit:

- Large hosting providers below tier-1 telco scale — Public Cloud
  Platform at provider scale, extended region by region, often fits
  better than a full operator programme, depending on growth profile
- AI/GPU-focused operators where the AI workload dominates — the Ænix AI
  Platform may fit better, with selective Public Cloud Platform
  components

Poor fit:

- Smaller hosting providers — Public Cloud Platform at provider scale
  (from the [published price list](/pricing/)) fits substantially better
  on economics and operational model
- Regulated enterprises consuming cloud rather than producing it —
  Private Cloud Platform is the right answer

## Engagement structure

- **Discovery call** (executive level, 60-90 min) — strategic fit
  assessment
- **[Platform Readiness Assessment](/services/platform-readiness-assessment/)**
  (fixed price, 28 days full) — input to partnership formation;
  output is a signed engagement plan
- **Pilot** (Phases 0-1, 3-6 months), then **Phases 2-4** (9-18 months
  to full multi-region operation)
- **Support subscription** (ongoing) — Plus or Enterprise tier (see
  [/pricing/](/pricing/)) until the customer team is ready to absorb
  escalation

Engagement size: multi-year programme, quoted per RFP.

## Where to dig deeper

- **[Public Cloud Platform landing](/products/public-cloud-platform/)** —
  feature list, product-specific FAQ
- **[Public Cloud Builder services](/services/public-cloud-builder/)** —
  engagement details
- **[Sovereign Cloud Builder services](/services/sovereign-cloud-builder/)** —
  for the sovereignty-specific variant
- **[Build sovereign cloud — playbook for EU and Central Asia](/blog/2026/05/build-sovereign-cloud-eu-and-central-asia/)** —
  sovereign cloud architectural patterns
