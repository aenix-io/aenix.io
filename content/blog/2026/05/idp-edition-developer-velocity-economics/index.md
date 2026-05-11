---
title: "IDP Edition — the cost of developer drag, and what an internal developer platform actually pays back"
description: "Long-form companion to the IDP Edition product page. Walks through time-to-environment cost, golden-path coverage, platform-team sizing, and the economic case for an internal developer platform versus DevOps-only or ticket-driven infrastructure."
date: 2026-05-11
author: "Aenix Team"
type: "article"
topics: ["Platform Engineering", "Cozystack", "DevOps", "Multi-tenancy"]
language: "en"
companion_landing: "/products/aenix-platform/idp-edition/"
companion_label: "See IDP Edition product details →"
---

**Long-form companion to the [IDP Edition landing](/products/aenix-platform/idp-edition/). For engineering leaders at 200-2,000-engineer organisations evaluating whether an Internal Developer Platform pays back — versus continuing on DevOps-only, ticket-driven infrastructure, or a half-built in-house platform.**

The "should we invest in a platform team?" conversation tends to stall
at one of two places: either the CFO can't see the economic case ("we
already pay DevOps engineers, why add more headcount?"), or the
engineering organisation tried Backstage-as-a-platform once, found it
shallow, and has lost trust in the category.

This article walks through both. What does the cost of developer drag
actually look like in numbers? What does an IDP that *works* deliver?
And what does Ænix Platform IDP Edition do that you'd otherwise have
to build?

## The cost of developer drag

The most consistent finding across our platform-readiness assessments
of 200-engineer-plus organisations is that **time-to-environment is
2-6 weeks for what should be a 30-minute self-service action.**

Where does the time go? Typically:

- IAM: a ticket to the security team, 2-5 days
- Network connectivity: a ticket to network engineering, 3-7 days
- Observability onboarding: ad-hoc, often discovered as missing late
- Compliance review: 1-3 days, sometimes longer for regulated data
- Approval chain: 2-4 days, occasionally longer in matrixed orgs

Each step requires a handoff, which means context loss, which means
re-confirmation, which means more time. The standalone steps are
small; the cumulative friction is large.

At 5% of engineering productivity (rough estimate from our engagements
matching the 200-engineer scale and 2-6 week time-to-environment), the
cost of drag on a 200-engineer organisation is **~10 engineers' worth
of lost throughput per year** — roughly €1.5-2M at fully loaded rates.
Compressing time-to-environment to hours captures most of that.

The internal-developer-platform investment that delivers this
compression typically pays back inside 12 months for organisations of
this scale.

## What "platform that works" actually delivers

For a credible IDP, five characteristics matter more than tool choice:

### 1. Faster than the ticket alternative

If self-service takes 2 days and a ticket takes 3 days, teams will
take the ticket — waiting is easier than learning. The platform has
to be substantially faster for adoption to flip.

### 2. Reliable enough to trust

The self-service path works the first time, every time, for the
documented use case. If it breaks 1 in 10 times, teams stop trusting
it. Adoption stalls.

### 3. Documented in one page or less

If the docs are longer than a page, the architecture is too complex.
Real golden paths are simple by design.

### 4. Owned by a real team

A team maintains the path, fields edge cases, ships improvements.
Without ownership, paths decay. The platform-engineering function
must be a function, not a hobby.

### 5. Has escape hatches

Product teams can deviate when their case is special. The escape is
to a real conversation with the platform team, not "use the path or
fail."

## What IDP Edition ships

Ænix Platform IDP Edition is the productisation of these characteristics
on top of the Cozystack foundation. Specifically:

### A multi-tenant Cozystack platform with Tenant CRD

Every product team gets a Tenant — a Kubernetes-native object with
its own namespace, quota, RBAC, observability scope. Per-tenant
isolation without per-team cluster overhead. Nested tenants support
business-unit hierarchies.

This solves the "soft multi-tenancy is too leaky, cluster-per-team is
operationally expensive" trilemma without compromise.

### Golden-path-first cozyportal

The cozyportal in IDP Edition exposes opinionated paths for the 5-10
most common product-team needs: environment provisioning, application
deployment, managed-database provisioning, observability onboarding,
secrets management. Each path completes in minutes.

Curated, not exhaustive — what your platform team can actually back
with support, not every Cozystack capability.

### GitOps automation

Argo CD and Argo Workflows pre-integrated with the platform. GitLab
integration for the most common enterprise SCM. Product teams commit
IaC; the platform reacts. No clicky-clicky for production changes.

### Pre-built service templates

Standard service templates (HTTP API, batch worker, scheduled job)
with embedded observability, deployment, alerting. New service =
template instantiation. Time-to-first-production-deploy is hours, not
weeks.

### Internal-product-management discipline built in

The platform team is treated as a function with product-team
customers. IDP Edition engagement includes platform-team RACI,
internal-NPS metrics, deprecation policy templates, roadmap-management
patterns. The discipline is often the missing piece.

## What stays the customer's responsibility

IDP Edition is the platform substrate plus the operational discipline.
Several things remain yours:

- **Defining your specific golden paths** — the 5-10 you build first
  depend on what your product teams actually request most.
- **Platform-engineering team sizing** — typical mature ratio is
  1 platform engineer per 10-20 product engineers; we recommend hiring
  ahead of demand.
- **Adoption** — a great platform that nobody uses is a sunk cost.
  Platform-team product-management practices (interviewing product
  teams, measuring adoption per path, sunsetting paths that don't get
  used) need to happen.

Aenix's engagement model supports all three but doesn't replace
customer ownership. Platforms that customers don't own organisationally
don't outlast the engagement.

## The economic case versus alternatives

### Versus DevOps-only

DevOps without separate platform engineering scales linearly with team
count — every product team figures out infrastructure, observability,
identity, release engineering independently. Above ~50 engineers the
duplication overwhelms the savings. Above ~200 engineers it's an
operational drag.

IDP Edition shifts the model: platform engineering compounds
sublinearly with team count. Adding the 21st product team doesn't add
21st-team's-worth of platform overhead — the existing platform absorbs
them.

### Versus building it yourself on vanilla Kubernetes + Backstage

This is a credible alternative for organisations with strong platform
engineering capacity and clear architectural opinions. Trade-off:
12-24 months of build time before the platform reaches "production
ready" for product teams; ongoing platform-component maintenance
overhead.

IDP Edition delivers the platform substrate in 3-6 months with
ongoing Aenix support. For organisations not staffed for a 12-24
month build, this is the difference between platform engineering
happening this year or in 2028.

### Versus Backstage-as-platform anti-pattern

Backstage is a portal, not a platform. Buying Backstage before the
underlying capabilities are self-service produces a beautiful catalog
over the same operational chaos. Adoption stalls.

IDP Edition's cozyportal can be replaced or augmented by Backstage if
the customer prefers — but the underlying capabilities (environment
provisioning, observability, secrets, identity) are self-service
because the platform is, not because the portal pretends they are.

### Versus hyperscaler-managed Kubernetes (EKS / AKS / GKE)

Hyperscaler managed Kubernetes is operationally simpler than self-
managed clusters. Trade-off: vendor lock-in (control plane is the
vendor's; you can't replicate exactly elsewhere); cost ceiling
(hyperscaler economics on sustained workloads); sovereignty
implications.

IDP Edition fits when the cost or sovereignty trade-offs make
self-managed worth the operational investment. For early-stage
companies without sovereignty pressure, hyperscaler-managed is still
the right call.

## When IDP Edition is the right answer

Strong fit:

- 200+ engineers across 5+ product teams
- Time-to-environment is currently 2-6 weeks; target is hours
- Existing platform team is overwhelmed by ticket volume rather than
  building paths
- Multi-tenant isolation matters (regulated data, BU separation, or
  service-provider model)
- Investment in platform engineering is supported by engineering
  leadership

Marginal fit:

- 100-200 engineers with growing platform pain but limited budget;
  start with Pure Cozystack with Ænix Support and scale into IDP
  Edition as the team grows
- Strong existing in-house platform with specific gaps — partial
  engagement may fit better than full IDP Edition

Poor fit:

- Under 50 engineers, single product team; DevOps-only is right
- Hyperscaler-managed Kubernetes meets all requirements; sovereignty
  not a concern

## Engagement structure

- **Discovery call** (30 min, free) — fit assessment
- **Platform Readiness Assessment** (14- or 28-day, IDP workstream
  emphasised) — current-state time-to-environment, maturity score,
  recommended golden paths
- **Pilot deployment** (3-6 months) — Cozystack platform + 3-5 golden
  paths + 2-3 pilot product teams onboarded
- **Full IDP Edition build** (6-18 months) — platform expanded to
  full engineering organisation, all targeted golden paths shipped
- **Managed retainer** (optional, ongoing) — Aenix runs platform
  Tier-3 under SLA

Engagement size: €300k - €2M project; managed retainer post-deployment.

## Where to dig deeper

- **[IDP Edition landing](/products/aenix-platform/idp-edition/)** —
  feature list, edition-specific FAQ
- **[Internal Developer Platform services](/services/internal-developer-platform/)** —
  engagement details
- **[Platform Engineering services](/services/platform-engineering/)** —
  broader scope
- **[Developer self-service solutions](/solutions/developer-self-service/)** —
  buyer-trigger landing
- **[Internal developer platform examples — 6 patterns](/blog/2026/05/internal-developer-platform-examples-without-backstage/)** —
  the six production IDP patterns
- **[Internal developer portal vs platform](/blog/2026/05/internal-developer-portal-vs-platform/)** —
  Backstage's place in 2026

---

*Aenix is the company behind Cozystack — a CNCF project, Kubernetes
Certified Distribution.*
