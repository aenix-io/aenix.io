---
title: "ISP Edition economics — when a turnkey cloud-in-a-box pays back for hosting providers"
description: "A unit-economics walkthrough for hosting providers evaluating Ænix Platform ISP Edition: ARPU expectations, infrastructure cost per tenant, platform-team capacity, payback profile, and where the model breaks."
date: 2026-05-11
author: "Aenix Team"
type: "article"
topics: ["Hosting", "Cozystack", "Multi-tenancy", "Platform Engineering", "Cloud"]
language: "en"
companion_landing: "/products/aenix-platform/isp-edition/"
companion_label: "See ISP Edition product details →"
quiz:
  title: "Test yourself: ISP Edition unit economics"
  questions:
    - q: "What is the published entry price for ISP Edition Basic support tier?"
      options:
        - { text: "€500/month for unlimited nodes", correct: false }
        - { text: "From €1.3k/month covering 10 nodes", correct: true }
        - { text: "Per-VM pricing starting at €5/VM/month", correct: false }
      explanation: "The pricing section explicitly states 'from €1.3k/month for the Basic support tier covering 10 nodes' — Aenix does not charge per VM, per CPU, or per GB."
    - q: "At a mid-size provider running 500 tenants, what is the all-in cost per typical tenant the article cites?"
      options:
        - { text: "€5-10/month", correct: false }
        - { text: "€20-40/month at the lower end of resource consumption", correct: true }
        - { text: "€80-100/month", correct: false }
      explanation: "The unit economics section calculates €15-30/month direct infra cost plus €5-10 platform-team allocation across 500 tenants, landing at €20-40/month all-in per typical tenant."
    - q: "Around what break-even tenant count does the article say ISP Edition starts to make economic sense?"
      options:
        - { text: "100-200 tenants", correct: false }
        - { text: "~1,000-2,000 paying tenants depending on ARPU mix", correct: true }
        - { text: "10,000+ tenants", correct: false }
      explanation: "The break-even math section computes total monthly fixed cost of €50-90k and with €40-80/month margin per tenant, break-even sits at roughly 1,000-2,000 paying tenants."
    - q: "Which of these is identified as the biggest single failure mode for ISP Edition providers in the pipeline?"
      options:
        - { text: "Customer-facing portal under-investment", correct: false }
        - { text: "Service-catalog mismatch — exposing services the team can't operate", correct: false }
        - { text: "Operations team sized for current customers, not 18-month-out volume", correct: true }
      explanation: "The article calls the operations under-staffing 'the biggest single failure mode in our pipeline': 4-person ops teams that worked at 50 customers can't scale at 200+, SLA breaches multiply, churn picks up."
    - q: "Why does the article say providers below ~300 customers are usually NOT a fit for ISP Edition?"
      options:
        - { text: "Cozystack technically can't scale that small", correct: false }
        - { text: "The fixed-cost stack overwhelms margin contribution at that scale", correct: true }
        - { text: "EU regulators forbid clouds with under 300 tenants", correct: false }
      explanation: "The article explicitly says 'for providers below ~300 customers, ISP Edition is often premature — the fixed-cost stack overwhelms the margin contribution. We'll say so in a discovery call rather than push the engagement.'"
---

**Long-form companion to the [ISP Edition landing](/products/aenix-platform/isp-edition/). Walks through the unit economics, infrastructure cost, platform-team capacity, and payback profile for hosting providers evaluating Ænix Platform ISP Edition — versus continuing on VMware, OpenStack, or per-customer-built infrastructure.**

Most "should we build our own cloud product?" conversations at hosting
providers stop at the technology question. The harder question is the
unit economics: what does it cost per tenant, what's a realistic ARPU,
how many tenants until break-even, and where does the model fail.

This article is the working version of that conversation. It assumes
the technology decision is settled (Cozystack-based Ænix Platform ISP
Edition) and focuses on whether the economics fit *your* hosting
business — not the abstract one.

## What ISP Edition actually delivers

Before economics, scope. ISP Edition is the turnkey cloud-in-a-box
Aenix sells to hosting providers, MSPs, regional clouds, and small-to-
mid data centres. It includes:

- **Multi-tenant Cozystack platform** running on customer-controlled
  bare metal (KubeVirt + Cilium + LINSTOR/Ceph + Tenant CRD).
- **cozyportal** — customer-facing self-service portal, brandable to
  your hosting brand.
- **WHMCS integration** — billing flows through the customer-management
  system most hosting providers already operate.
- **Service catalog** — VMs, tenant Kubernetes clusters, managed
  databases (PostgreSQL, MySQL, Redis, Kafka, etc.), S3-compatible
  object storage, GPU services. Curatable per provider.
- **Tenant lock / suspension** — operational hooks for non-payment
  and policy enforcement.
- **Migration tooling** — productized patterns for VMware, OpenStack,
  Virtuozzo, Proxmox sources.

What it is *not*: a hyperscaler. It is a sovereign, multi-tenant cloud
product for hosting providers who want to compete on regional presence,
sovereignty, and pricing flexibility — not on hyperscaler-scale catalog
depth.

## Pricing model

ISP Edition is the only Ænix Platform edition with a published entry
price: from **€1.3k/month** for the Basic support tier covering 10
nodes. Higher tiers (Standard, Enterprise) add SLA, dedicated TAM,
24×7 response, with pricing on RFP. Aenix does not charge per VM,
per CPU, or per GB — the Cozystack platform itself is free under
Apache 2.0; what you pay for is engagement, support, and operational
assurance.

For a typical mid-size hosting provider running 30-100 customer-facing
nodes, Aenix support cost lands in the €4-15k/month range depending on
tier and SLA. That's a fraction of the recurring license cost most
providers have been paying VMware or OpenStack distribution vendors.

## Unit economics — per-tenant view

The economics question every hosting CFO asks: *what does it cost us to
serve one tenant, and what can we realistically charge?*

### Cost per tenant

Infrastructure cost per tenant is dominated by the underlying compute,
storage, and bandwidth, not by Cozystack itself. Cozystack overhead is
~5-10% of node capacity (typical Kubernetes-platform overhead, well
within acceptable for production). For a tenant consuming roughly:

- 2 vCPU
- 4 GB RAM
- 50 GB block storage (replicated 3×)
- 100 GB egress / month

Direct infrastructure cost (amortised hardware + colocation + bandwidth)
in 2026 European pricing is typically €15-30/month. Cozystack platform
overhead allocation (the platform team's salary spread across all
tenants) on a mid-size provider running 500 tenants adds another €5-10.

So **all-in cost per typical tenant: €20-40/month** at the lower end of
the resource consumption profile.

### What you can charge

Hosting-provider ARPU for a comparable resource profile in 2026 EU
markets typically lands in €40-80/month. Higher in DACH and Western
Europe, lower in Central / Eastern Europe and Central Asia. Add managed
services (managed PostgreSQL, managed S3, GPU access) and ARPU lifts
to €80-200+/month per tenant.

That puts margin at roughly **2-3× cost** at the low end, **4-6× cost**
on managed-service-heavy tenants. Not hyperscaler-margins; not VMware
reseller margins either. Closer to traditional hosting margins in the
post-Broadcom 2026 reality.

## Break-even math

The other CFO question: *how many customers until we make money?*

The fixed cost stack for a mid-size hosting provider on ISP Edition:

| Item | Monthly | Annual |
|---|---|---|
| Aenix support (Standard tier) | €6k | €72k |
| Platform-engineering team (3-5 FTE) | €20-35k | €240-420k |
| Hardware amortisation (50 nodes) | €5-8k | €60-100k |
| Colocation / power / bandwidth | €4-7k | €50-85k |
| Customer support team (2-4 FTE for cloud) | €10-20k | €120-240k |
| Marketing / sales | €5-15k | €60-180k |

**Total monthly fixed: €50-90k.**

With €40-80/month margin per tenant (after direct infrastructure cost),
break-even sits at **~1,000-2,000 paying tenants** depending on ARPU
mix and where you are in the salary band.

For providers currently running ~500 customers on legacy infrastructure
who are evaluating the move, this matters: you need a credible path to
double tenant count within 18-24 months for the economics to actually
work. Without growth, ISP Edition is a cost reduction (modest) but not
a transformation.

For providers below ~300 customers, ISP Edition is often *premature* —
the fixed-cost stack overwhelms the margin contribution. We'll say so
in a discovery call rather than push the engagement.

## Where the model breaks

Three failure patterns recur:

### 1. Customer-facing portal under-investment

Hosting providers historically compete on price and reliability.
Cozyportal out of the box is functional but generic; differentiation
comes from polish (UX flows that match how *your* customers think about
ordering, configuring, paying). Providers who treat the portal as
"good enough" lose conversion to providers who invest in it.

Aenix engagement includes cozyportal brand customization; deeper UX
work is typically a separate Phase 2.

### 2. Service-catalog mismatch

Cozystack offers 20+ managed services; not all of them fit every
provider's customer base. Exposing all of them without operational
backing means customers ordering Kafka or ClickHouse and discovering
the provider can't really support them. Curate the catalog to what
you can actually operate at the SLA you promise. Service rollout in
cohorts is the standard playbook.

### 3. Operations team under-staffed for growth

The biggest single failure mode in our pipeline: ISP Edition deployed,
launches successfully, signs 200 customers in the first quarter — and
then the 4-person operations team that worked at 50 customers can't
scale. Customer support response time degrades, SLA breaches multiply,
churn picks up.

Plan operations team size for 18-month-out customer count, not current.
Hire ahead.

## How ISP Edition compares to alternatives for hosting providers

**Versus VMware Cloud Director (vCD):**

vCD is the historical incumbent for hosting providers. Post-Broadcom,
subscription pricing has reshaped the math — 2-5× increases on
renewal, mandatory VCF bundling, end of perpetual licensing. For most
providers running vCD today, the renewal cycle is the trigger.
Cozystack ISP Edition migration path is documented; we've shipped it
for several providers. Engagement scope: 6-18 months depending on
estate size.

**Versus OpenStack:**

OpenStack remains valid for providers with deep OpenStack expertise
and large-scale (>500 nodes) deployments where operational complexity
is amortised. For mid-size providers, OpenStack's operational footprint
(50+ services, distinct upgrade lifecycles per component) overshoots
what the team can sustain. ISP Edition substantially smaller surface.

**Versus building it yourself on vanilla Kubernetes + KubeVirt + Helm:**

This is the credible alternative for providers with strong platform
engineering capacity. Trade-off: 12-24 months of build time + ongoing
maintenance versus a turnkey deployment. We've seen both work; the
build-it-yourself path is the right choice when you have a 10+ engineer
platform team and the components match your specific operational
preferences. For the typical mid-size provider with a 3-5 engineer
platform team, ISP Edition wins on time-to-market and operational
predictability.

**Versus a hyperscaler-managed cloud product (white-label):**

Hyperscalers (AWS, Azure, GCP) sometimes offer hosting partners
white-label or co-branded cloud arrangements. Trade-off: lower
operational complexity for the provider, but per-customer margin is
typically lower, and sovereignty positioning is weaker (the provider
still depends on the hyperscaler, which European customers
increasingly view as a structural risk).

## When ISP Edition is the right answer

It fits when at least three of the following hold:

1. **You operate today on bare metal or commercial hypervisor with
   recurring license pressure** — VMware, OpenStack, Virtuozzo, or
   commercial KVM distribution.
2. **You have direct customer relationships you can monetise** — not
   pure reseller of someone else's cloud.
3. **You have or can hire a 3-5 engineer platform team** — Cozystack
   needs operational ownership.
4. **You target regional, regulated, or sovereignty-sensitive
   customers** — where European-EU positioning matters.
5. **Your customer count is 300+ today or you have credible growth
   path to 1,000+** — for fixed-cost amortisation.
6. **You're willing to invest in customer-facing portal polish** —
   not just treat cozyportal as "good enough."

Fewer than three: usually a different answer is better — staying on
existing infrastructure with cost optimisation, partnering with a
larger sovereign provider as their channel, or going hyperscaler-
managed-cloud-product as a smaller-margin route.

## Engagement structure

For providers where ISP Edition fits:

- **Discovery call** (30 min, free)
- **Architecture assessment** (1-2 weeks, fixed-price) — current
  estate inventory, target architecture, migration plan
- **Pilot deployment** (1-3 months) — Cozystack platform stood up
  on your hardware, 5-10 friendly customers migrated, billing
  validated
- **Limited GA** (2-4 months) — 50-100 customers, operational
  workflows stabilised
- **General availability** — open market launch
- **Managed retainer** (optional, ongoing) — Aenix runs Tier-3
  operations under SLA

Typical end-to-end timeline from project start to market launch: 9-18
months depending on estate complexity and team readiness.

## Where to dig deeper

- **[ISP Edition landing page](/products/aenix-platform/isp-edition/)** —
  feature list, pricing block, FAQ
- **[Hosting providers industry page](/industries/hosting-providers/)** —
  hosting-provider-specific positioning
- **[White-label cloud services](/services/white-label-cloud/)** —
  for MSP / channel-partner extensions of the model

---

*Aenix is the company behind Cozystack — a CNCF project, Kubernetes
Certified Distribution, OpenSSF Best Practices. We build sovereign
cloud products with hosting providers across the EU, DACH, and Central
Asia.*
