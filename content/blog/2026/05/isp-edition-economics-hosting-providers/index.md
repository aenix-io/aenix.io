---
title: "When Public Cloud Platform pays back for hosting providers"
seo_title: "Public Cloud Platform economics for hosting providers"
description: "Unit economics of Ænix Public Cloud Platform for hosting providers: ARPU, infrastructure cost per tenant, platform-team capacity, payback, and where it breaks."
date: "2026-05-15"
cover_image: "/img/blog/covers/isp-edition-economics-hosting-providers.jpg"
author: "Timur Tukaev"
type: "article"
topics: ["Hosting", "Cozystack", "Multi-tenancy", "Platform Engineering", "Cloud"]
language: "en"
hreflang_de: "/de/blog/2026/05/public-cloud-platform-wirtschaftlichkeit-hosting-anbieter/"
companion_landing: "/products/public-cloud-platform/"
companion_label: "See Public Cloud Platform product details →"
quiz:
  title: "Test yourself: Public Cloud Platform unit economics"
  questions:
    - q: "What is the published entry price for Public Cloud Platform Basic support tier?"
      options:
        - { text: "From $1,250 per month covering 10 nodes", correct: true }
        - { text: "€500 per month for unlimited nodes and tenants", correct: false }
        - { text: "Per-VM pricing starting around €5 per VM monthly", correct: false }
      explanation: "The pricing section explicitly states 'from $1,250/month for the Basic support tier covering 10 nodes' — Ænix does not charge per VM, per CPU, or per GB."
    - q: "At a mid-size provider running 500 tenants, what is the all-in cost per typical tenant the article cites?"
      options:
        - { text: "Around €5 to €10 per tenant per month", correct: false }
        - { text: "Around €80 to €100 per tenant per month", correct: false }
        - { text: "Around €20 to €40 per tenant per month", correct: true }
      explanation: "The unit economics section calculates €15-30/month direct infra cost plus €5-10 platform-team allocation across 500 tenants, landing at €20-40/month all-in per typical tenant at the lower end of resource consumption."
    - q: "For a full programme with a dedicated team and 50 nodes, around what break-even tenant count does the article compute?"
      options:
        - { text: "Roughly 100 to 200 paying tenants", correct: false }
        - { text: "Roughly 1,200 to 4,000 paying tenants", correct: true }
        - { text: "Roughly 10,000 or more paying tenants", correct: false }
      explanation: "The break-even section adds Standard-tier support for 50 nodes ($15,000/month at list price) to €44-85k of team, hardware, colocation, support and sales cost. With €25-50/month margin per tenant, break-even sits at roughly 1,200-4,000 paying tenants. A smaller start on 10 nodes with existing staff changes this picture."
    - q: "Which of these is identified as the biggest single failure mode for Public Cloud Platform providers in the pipeline?"
      options:
        - { text: "Customer-facing portal getting under-invested", correct: false }
        - { text: "Operations team undersized for 18-month-out volume", correct: true }
        - { text: "Service catalog exposing services ops can't operate", correct: false }
      explanation: "The article calls the operations under-staffing 'the biggest single failure mode in our pipeline': 4-person ops teams that worked at 50 customers can't scale at 200+, SLA breaches multiply, churn picks up."
    - q: "Why does the article say a full programme with a dedicated platform team is often premature below ~300 customers?"
      options:
        - { text: "Cozystack technically cannot scale to that small a tenant count", correct: false }
        - { text: "EU regulators forbid commercial clouds with under 300 tenants", correct: false }
        - { text: "A dedicated team's fixed cost overwhelms the margin contribution at that scale", correct: true }
      explanation: "Below ~300 customers, a full programme with a dedicated 3-5 person platform team usually costs more than the margin it earns. The article suggests a smaller start instead: 10 nodes on the Basic tier, a narrow catalogue and existing staff."
---


Most "should we build our own cloud product?" conversations at hosting
providers stop at the technology question. The harder question is the
unit economics: what does it cost per tenant, what's a realistic ARPU,
how many tenants until break-even, and where does the model fail.

This article is the working version of that conversation. It assumes
the technology decision is settled (the Cozystack-based Ænix Public
Cloud Platform) and focuses on whether the economics fit *your* hosting
business — not the abstract one.

## What Public Cloud Platform actually delivers

Before economics, scope. Public Cloud Platform is a complete public-cloud
product Ænix sells to hosting providers, MSPs, regional clouds, and small-to-
mid data centres. It includes:

- **Multi-tenant Cozystack platform** running on customer-controlled
  bare metal (KubeVirt + Cilium + Kube-OVN + LINSTOR + Tenant CRD).
- **Cozystack Dashboard** — customer-facing self-service portal, brandable to
  your hosting brand.
- **WHMCS integration** — billing flows through the customer-management
  system most hosting providers already operate.
- **Service catalog** — VMs, tenant Kubernetes clusters, managed
  databases (PostgreSQL, MariaDB, MongoDB, Redis, Valkey, Kafka, ClickHouse, etc.), S3-compatible
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

Public Cloud Platform subscriptions use the published support tiers,
priced per 10 physical nodes per month on annual billing: **Basic
$1,250**, **Standard $3,000**, **Plus $5,500**; Enterprise is quoted
individually. Higher tiers add faster response times, unlimited
incidents, 24×7 support (Plus and Enterprise) and a wider support
scope — the full matrix is on [/pricing/](/pricing/). Ænix does not charge per VM,
per CPU, or per GB — the Cozystack platform itself is free under
Apache 2.0; what you pay for is engagement, support, and operational
assurance. Every support tier includes the proprietary Ænix commercial
modules (billing system and WHMCS integration).

For a typical mid-size hosting provider running 30-100 customer-facing
nodes, that is $3,750-12,500/month on Basic or $9,000-30,000/month on
Standard at list price. Compare it with the recurring licence and
subscription cost you pay VMware or an OpenStack distribution vendor
today.

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

The fixed cost stack for a mid-size hosting provider on Public Cloud Platform:

| Item | Monthly | Annual |
|---|---|---|
| Ænix support (Standard tier, 50 nodes = 5 × $3,000) | $15k | $180k |
| Platform operations (ISP calculator default model: about 1.3 FTE at 10 nodes, about 2.6 at 40; more at 50 nodes and for 24×7 on-call) | €20-35k | €240-420k |
| Hardware amortisation (50 nodes) | €5-8k | €60-100k |
| Colocation / power / bandwidth | €4-7k | €50-85k |
| Customer support team, separate from platform operations (2-4 FTE for cloud customers) | €10-20k | €120-240k |
| Marketing / sales | €5-15k | €60-180k |

**Total monthly fixed: €44-85k, plus $15k for Ænix support.**

With €25-50/month margin per tenant (€40-80 ARPU after €15-30 direct
infrastructure cost), break-even sits at **roughly 1,200-4,000 paying tenants** depending on ARPU
mix and where you are in the salary band. This is the full-programme
case with a dedicated team; a 10-node start on the Basic tier with
existing staff breaks even far earlier — model your own numbers in the
[ISP calculator](/isp-calculator/).

For providers currently running ~500 customers on legacy infrastructure
who are evaluating the move, this matters: you need a credible path to
at least double tenant count within 18-24 months for the economics to actually
work. Without growth, Public Cloud Platform is a cost reduction (modest) but not
a transformation.

For providers below ~300 customers, a full programme with a dedicated
platform team is often *premature* — that fixed cost
overwhelms the margin contribution. A smaller start (10 nodes on the
Basic tier, a narrow catalogue, existing staff) is usually the better
first step. We'll say so in a discovery call rather than push a larger
engagement.

## Where the model breaks

Three failure patterns recur:

### 1. Customer-facing portal under-investment

Hosting providers historically compete on price and reliability.
The Cozystack Dashboard out of the box is functional but generic; differentiation
comes from polish (UX flows that match how *your* customers think about
ordering, configuring, paying). Providers who treat the portal as
"good enough" lose conversion to providers who invest in it.

Ænix engagement includes Cozystack Dashboard brand customization; deeper UX
work is typically a separate Phase 2.

### 2. Service-catalog mismatch

Cozystack offers 20+ managed services; not all of them fit every
provider's customer base. Exposing all of them without operational
backing means customers ordering Kafka or ClickHouse and discovering
the provider can't really support them. Curate the catalog to what
you can actually operate at the SLA you promise. Service rollout in
cohorts is the standard playbook.

### 3. Operations team under-staffed for growth

The biggest single failure mode in our pipeline: Public Cloud Platform deployed,
launches successfully, signs 200 customers in the first quarter — and
then the 4-person operations team that worked at 50 customers can't
scale. Customer support response time degrades, SLA breaches multiply,
churn picks up.

Plan operations team size for 18-month-out customer count, not current.
Hire ahead.

## How Public Cloud Platform compares to alternatives for hosting providers

**Versus VMware Cloud Director (vCD):**

vCD is the historical incumbent for hosting providers. Post-Broadcom,
subscription pricing has reshaped the math — 2-5× increases on
renewal, mandatory VCF bundling, end of perpetual licensing. For most
providers running vCD today, the renewal cycle is the trigger.
Ænix Public Cloud Platform goes live in weeks once hardware is ready;
moving an existing vCD estate onto it is a separate migration project,
sized by estate in the assessment.

**Versus OpenStack:**

OpenStack remains valid for providers with deep OpenStack expertise
and large-scale (>500 nodes) deployments where operational complexity
is amortised. For mid-size providers, OpenStack's operational footprint
(50+ services, distinct upgrade lifecycles per component) overshoots
what the team can sustain. Public Cloud Platform substantially smaller surface.

**Versus building it yourself on vanilla Kubernetes + KubeVirt + Helm:**

This is the credible alternative for providers with strong platform
engineering capacity. Trade-off: 12-24 months of build time + ongoing
maintenance versus a turnkey deployment. We've seen both work; the
build-it-yourself path is the right choice when you have a 10+ engineer
platform team and the components match your specific operational
preferences. For the typical mid-size provider with a 3-5 engineer
platform team, Public Cloud Platform wins on time-to-market and operational
predictability.

**Versus a hyperscaler-managed cloud product (white-label):**

Hyperscalers (AWS, Azure, GCP) sometimes offer hosting partners
white-label or co-branded cloud arrangements. Trade-off: lower
operational complexity for the provider, but per-customer margin is
typically lower, and sovereignty positioning is weaker (the provider
still depends on the hyperscaler, which European customers
increasingly view as a structural risk).

## When Public Cloud Platform is the right answer

It fits when at least three of the following hold:

1. **You operate today on bare metal or commercial hypervisor with
   recurring licence pressure** — VMware, OpenStack, Virtuozzo, or
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
   not just treat Cozystack Dashboard as "good enough."

Fewer than three: usually a different answer is better — staying on
existing infrastructure with cost optimisation, partnering with a
larger sovereign provider as their channel, or going hyperscaler-
managed-cloud-product as a smaller-margin route.

## Engagement structure

For providers where Public Cloud Platform fits:

- **Discovery call** (30 min, free)
- **[Platform Readiness Assessment](/services/platform-readiness-assessment/)**
  (fixed price, 14 days focused or 28 days full) — current estate
  inventory, target architecture, migration plan
- **Platform live and pilot cohort** — the platform goes live in weeks
  on your hardware with the productized installer; 5-10 friendly
  customers migrated, billing validated
- **Limited GA** (2-4 months) — 50-100 customers, operational
  workflows stabilised
- **General availability** — open market launch
- **Support subscription** (ongoing) — one of the [published tiers](/pricing/);
  Plus or Enterprise for 24×7 coverage

How long the commercial launch takes after the platform is live
depends on migration scope and team readiness. Multi-region national
or operator programmes follow a 3-6 month pilot, then 9-18 months to
full multi-region operation.

## Where to dig deeper

- **[Public Cloud Platform landing page](/products/public-cloud-platform/)** —
  feature list, pricing block, FAQ
- **[Hosting providers industry page](/industries/hosting-providers/)** —
  hosting-provider-specific positioning
- **[White-label cloud services](/services/white-label-cloud/)** —
  for MSP / channel-partner extensions of the model
