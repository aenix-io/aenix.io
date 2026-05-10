---
title: "Ænix Platform IDP Edition"
description: "Ænix Platform IDP Edition — Internal Developer Platform layer on top of the Cozystack cloud foundation. GitLab automation, Argo CD workflows, APIs. Engineers spend less time on routine work and more on shipping product."
type: "page"
language: "en"
---

**An Internal Developer Platform layer on top of a Kubernetes-native cloud. GitLab automation, Argo CD workflows, and APIs — so your engineers spend less time on routine work and more on shipping product. Includes the full Cozystack-based cloud underneath: tenancy, observability, secrets, identity, multi-cluster.**

<div class="cta-row">
  <a class="cta-primary" href="/contact/">Book a discovery call</a>
  <a class="cta-secondary" href="/products/aenix-platform/">All editions →</a>
</div>

---

## Quick facts

- **For:** Product / SaaS organizations with strong engineering teams investing in developer experience (typically 300+ engineers, but smaller teams with high DevEx focus also fit)
- **Foundation:** Open-source Cozystack (CNCF project, Apache 2.0)
- **Engagement size:** €300k - €2M project; managed retainer post-deployment
- **Time to production:** 6-12 months for typical IDP build; shorter for golden-path-only scope
- **Architecture:** Kubernetes-native cloud + IDP layer (GitLab, Argo CD, APIs, golden paths, service-creation wizards, internal portal)

---

## What's included in IDP Edition

### Internal Developer Platform layer

A platform-product layer above the Cozystack cloud foundation. Provides golden paths, self-service primitives, and developer-centric APIs over the underlying multi-tenant Kubernetes substrate.

### GitLab automation

Pre-integrated GitLab patterns for CI/CD, environments, secrets, deployment promotion. Templates for common workload types (Web service, worker, batch job, ML pipeline). Alternative SCM integrations supported (GitHub, Bitbucket).

### Argo CD workflows

Production-ready Argo CD setup with multi-cluster, multi-environment, app-of-apps pattern. PR-driven changes for app + infra. Drift detection + remediation.

### APIs for self-service

Service-creation APIs for engineers to spin up environments, databases (managed PostgreSQL / MySQL / Redis / Kafka / ClickHouse), object storage, K8s clusters, observability scopes, identity bindings — without ticket queues.

### Service-creation wizards

Guided UX for common workload patterns. Engineers describe outcomes (workload + SLO + tenancy); the platform realises them. Customizable to organization-specific golden paths.

### Multi-tenant Tenant CRD

Tenancy from the cloud foundation surfaced as the IDP's team / squad / project model. Quotas, RBAC, observability scoping per team.

### Hosting panel + admin interface

Branded admin dashboard for the platform team. Engineering productivity dashboards (time-to-environment, deployment frequency, lead time, drift events).

### Observability + SLOs

Unified observability (VictoriaMetrics + VictoriaLogs) with team-scoped views. SLO discipline for tier-1 services. Alert hygiene built into the golden paths.

### Secrets, identity, networking

Centralized secrets (Vault / External Secrets Operator), workload identity (OIDC / SPIFFE), NetworkPolicy / Cilium for tenant isolation.

### Education and training

Platform-engineering team training as part of the engagement. Course (Kubernetes Deep Dive) optionally bundled for broader engineering enablement.

---

## Who buys IDP Edition

| Buyer | Typical engagement |
|---|---|
| Product company VP Engineering | "We need an IDP. We've evaluated Backstage, but want a managed platform-product approach with the cloud foundation included." |
| SaaS CTO | "We're spending too much engineering time on infra. We want golden paths and self-service for the next 50-200 engineers we hire." |
| Mid-large enterprise platform engineering lead | "We want IDP-as-product, not yet-another-internal-tool. Aenix's product mindset and Cozystack foundation are the package." |

---

## Why IDP Edition over alternatives

| Vs. | Why IDP Edition |
|---|---|
| **Building IDP on Backstage from scratch** | Backstage is a UI framework. IDP Edition includes the underlying cloud foundation (multi-tenant K8s, DBs, storage, identity, observability) plus the IDP layer on top. Significantly faster time to production. |
| **Hyperscaler "developer platforms"** (AWS Proton, GCP Cloud Workstations, etc.) | Not bound to one hyperscaler. Cozystack-based foundation runs on customer-controlled hardware or any infrastructure. No data egress costs for cross-team interactions. |
| **Heroku / fly.io / Render-style PaaS** | Multi-tenant by design for organizations operating their own platform. No per-app pricing. Customer-controlled — appropriate for regulated workloads. |
| **Custom in-house IDP** | Aenix has built this pattern many times — engagement avoids the multi-year build path. Customer engineering team focuses on golden paths specific to their org, not foundation. |

---

## Pricing

Pricing on request — €300k - €2M project; managed retainer post-deployment. Discovery call to scope.

[Discuss IDP Edition →](/contact/?edition=idp)

---

## Engagement structure

- **Discovery call** (30 min, free)
- **Platform Readiness Assessment** (5-10 days, fixed-price) — current platform-engineering maturity (use our [free maturity assessment](/resources/platform-engineering-maturity-assessment/)), gap analysis, IDP design
- **Pilot engagement** (3-6 months) — golden paths for top-3 workload types, first squad onboarded
- **Full IDP build** (6-12 months) — production IDP with all primary workload types, full self-service, observability + DR + tenancy at IDP-scale
- **Managed retainer** (optional, ongoing) — Aenix runs the platform foundation while customer engineering owns the golden paths

[Platform Readiness Assessment →](/services/platform-readiness-assessment/) | [Free Platform Engineering Maturity Assessment →](/resources/platform-engineering-maturity-assessment/)

---

## Customer evidence

IDP Edition customers are currently NDA-protected. Product / SaaS engagements active. Anonymized phrasing pattern: "Mid-large product company building IDP for 300+ engineers".

---

## Frequently asked questions

### How is IDP Edition different from running open-source Cozystack ourselves?

Cozystack provides the multi-tenant cloud foundation — a strong substrate for an IDP. IDP Edition adds the platform-product layer on top: GitLab + Argo CD pre-integration, APIs for self-service, service-creation wizards, golden-path templates, engineering productivity dashboards, and Aenix's IDP design + delivery experience. For organizations that want IDP-as-product and have not built one before, this saves 12-24 months of platform-engineering team-build.

### How does this compare to Backstage?

Backstage is a UI framework — useful but not an IDP by itself. IDP Edition includes the underlying cloud foundation, the GitLab + Argo CD integration, the APIs, and the golden-path patterns that turn Backstage-style UI into actual self-service capability. We can integrate Backstage UI as the front-end if customer prefers; the foundation underneath is what makes the IDP work.

### Is this only for orgs with 300+ engineers?

That's the typical scale where IDP investment pays back, but smaller organizations with strong DevEx focus or fast-growing engineering teams can fit. Discovery call helps confirm.

### Can we start with golden paths only, then expand?

Yes. Pilot scope often = top-3 workload types (web service, worker, database-backed app) with golden paths and first squad onboarded. Full IDP scope expands from there.

### Can we run IDP Edition on hyperscaler infrastructure?

Yes — Cozystack and IDP Edition run on hyperscaler bare-metal / dedicated instances when sovereignty isn't binding. More common is customer-controlled hardware (own DC, colocation, Hetzner / OVH).

### Does it integrate with our existing CI?

Yes — GitLab integration is pre-built; GitHub, Bitbucket, others supported via standard webhooks + Argo CD patterns.

---

## How to start

Book a 30-minute discovery call. Bring your platform-engineering maturity self-assessment (or use our [free assessment](/resources/platform-engineering-maturity-assessment/)). We'll discuss IDP scope, current state, and engagement fit.

<div class="cta-row">
  <a class="cta-primary" href="/contact/">Book a discovery call</a>
</div>

---

*Ænix Platform IDP Edition is built on [Cozystack](https://cozystack.io) — a CNCF project we created and maintain (currently CNCF Sandbox; CNCF Incubating expected late summer 2026). Apache 2.0. Aenix is the open-core company.*
