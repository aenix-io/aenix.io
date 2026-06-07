---
title: "Developer self-service — environments in hours, not weeks"
description: "The single most expensive thing happening in most engineering organizations is the wait time between \"team needs an environment\" and \"team has an..."
type: "page"
related_pages: ["/services/internal-developer-platform", "/services/platform-engineering", "/products/aenix-platform/idp-edition/", "/products/cozystack"]
language: "en"
direct_answer: |
  **Developer self-service is the platform-engineering capability that lets product teams provision environments, databases, services, storage, and observability on their own — without filing tickets — typically in under an hour from request to running. It targets engineering organizations where the wait between "team needs an environment" and "team has one" stretches into days or weeks, decaying product velocity. Aenix builds this capability into platforms teams actually adopt: opinionated golden paths backed by a real platform layer, not a catalog UI as wallpaper. Engagements deliver a golden-path inventory of the ten most common requests, self-service paths designed and implemented by Aenix engineers, and an adoption-metrics framework. The work runs on the Ænix Platform IDP Edition, the company's productized Internal Developer Platform built on Cozystack.**
quick_facts:
  - label: "What it is"
    value: "A platform-engineering capability where the most common product-team needs are satisfied without tickets, completed in under an hour from request to running."
  - label: "Who it's for"
    value: "Engineering organizations where provisioning environments, databases, or services requires platform-team tickets and waits of days or weeks."
  - label: "Delivered on"
    value: "Ænix Platform IDP Edition — GitLab automation, Argo CD workflows, golden-path templates, self-service APIs, and productivity dashboards, built on Cozystack."
  - label: "License"
    value: "Apache 2.0 (no per-CPU / per-core licensing)"
  - label: "Engagement timeline"
    value: "Discovery 30 min (free); Assessment 14-28 days; Build 1-6 months."
  - label: "Status"
    value: "Cozystack is a CNCF project (Sandbox since 2025-02-28; Incubating expected late summer 2026)"
faq:
  - q: "What counts as real developer self-service versus a catalog?"
    a: "Real self-service means the most common product-team requests are completed without filing a ticket, in under an hour from request to running. A catalog-only Backstage where provisioning still needs platform-team intervention does not qualify — that is a registry, not self-service."
  - q: "Which requests should be self-service first?"
    a: "Aenix scopes the ten most common needs: environment provisioning, service deployment, database provisioning, object storage, observability onboarding, secrets management, network access, SSO integration, CI/CD setup, and backup/DR. The engagement prioritizes whichever of these still require tickets in your organization."
  - q: "How does Aenix deliver developer self-service?"
    a: "Through a golden-path inventory (current versus target state), self-service paths designed for priority requests, an implementation engagement where Aenix engineers build the paths into your platform, and an adoption-metrics framework to measure what works. It is scoped within broader Internal Developer Platform and Platform Engineering services."
  - q: "What platform does the self-service capability run on?"
    a: "The Ænix Platform IDP Edition — an Internal Developer Platform layer with GitLab automation, Argo CD workflows, self-service APIs, golden-path templates, and engineering productivity dashboards. It is built on Cozystack, which runs VMs and containers on one Kubernetes API via KubeVirt, with Cilium eBPF networking and LINSTOR/DRBD storage."
  - q: "How long before product teams can self-serve?"
    a: "Discovery is a free 30-minute call. Assessment runs 14-28 days within a Platform Readiness Assessment. The build engagement spans 1-6 months depending on how many golden paths are in scope and the maturity of the existing platform."
  - q: "Is there vendor lock-in?"
    a: "No. The capability is built on Cozystack, an open-source CNCF project licensed under Apache 2.0 with no per-CPU or per-core licensing. The golden paths and platform layer use standard Kubernetes APIs, so the foundation remains portable."
---

**The single most expensive thing happening in most engineering organizations is the wait time between "team needs an environment" and "team has an environment." When that gap is days or weeks, product velocity decays measurably; when it's hours, the platform investment compounds for years.**

Aenix builds developer self-service capability into platforms that product teams actually adopt — not Backstage as wallpaper, but underlying golden paths that turn requests into provisioned reality without filing tickets.

> **Pairs with:** **[Ænix Platform IDP Edition](/products/aenix-platform/idp-edition/)** — Internal Developer Platform layer with GitLab automation, Argo CD workflows, APIs for self-service, golden-path templates, engineering productivity dashboards. Free [Platform Engineering Maturity Assessment →](/resources/platform-engineering-maturity-assessment/).

<div class="cta-row">
  <a class="cta-primary" href="/contact/">Book a 30-minute discovery call</a>
  <a class="cta-secondary" href="/blog/2026/05/developer-experience-platform-self-service-paths/">Read the self-service paths guide →</a>
</div>

---

## What developer self-service actually looks like

A useful working definition: developer self-service is when the most common 10 product-team needs can be satisfied without filing a ticket, completed in under an hour from request to running.

Common requests:

1. New environment provisioning (dev / staging / preview)
2. New service deployment (HTTP API, batch job, scheduled job)
3. Database provisioning (managed Postgres / MySQL / Redis)
4. Object storage bucket
5. Observability onboarding (metrics + logs + traces)
6. Secrets management
7. Network access to legacy or shared services
8. Identity / SSO integration
9. CI/CD pipeline setup
10. Backup/DR for stateful workloads

If 7 of these 10 require tickets in your org — that's where the engagement lives.

---

## Where most "self-service" stops

- **Catalog-only Backstage** — registry exists, but actual provisioning still requires platform-team intervention.
- **Half-self-service** — three of the ten requests are self-service; seven aren't.
- **Self-service that broke** — works for golden path; breaks at any deviation; product teams stop trusting it.
- **Documentation as self-service** — "you can do it yourself" pointing at runbook teams have to interpret manually.

The honest version requires opinionated platform underneath, not just a catalog UI.

---

## How Aenix engages

Self-service is part of broader platform engineering work — see **[Internal Developer Platform services](/services/internal-developer-platform/)** and **[Platform Engineering services](/services/platform-engineering/)** for the engagement framing. The self-service-specific output is:

- **Golden-path inventory** — current state vs target for the 10 most-common requests
- **Self-service paths designed** — for the priority requests
- **Implementation engagement** — Aenix engineers build paths integrated with your platform
- **Adoption metrics framework** — measure what's working

---

## Engagement structure

| Phase | Duration |
|---|---|
| Discovery | 30 min, free |
| Assessment | 14-28 days (within Platform Readiness Assessment) |
| Build | 1-6 months |

---

## Pricing

<div class="pricing-cards-2">

### Assessment
****

### Build engagement
****

</div>

---

## How to start

/contact/

- **[Self-service paths article](/blog/2026/05/developer-experience-platform-self-service-paths/)**
- **[Internal developer platform](/services/internal-developer-platform/)** — broader scope
- **[Platform engineering services](/services/platform-engineering/)** — broadest scope
- **[Cozystack](/products/cozystack/)**

---

*Aenix is the team behind Cozystack (CNCF Project), and we offer Ænix Platform — our commercial productized offering based on Cozystack.*

<!-- SEO: title "Developer Self-Service — Environments in Hours, Not Weeks | Aenix"
Word count: ~600. -->
