---
title: "Developer self-service — environments in hours, not weeks"
description: "One of the most expensive things in most engineering organizations is the wait time between \"team needs an environment\" and \"team has an..."
type: "page"
related_pages: ["/services/internal-developer-platform", "/services/platform-engineering", "/products/private-cloud-platform/", "/products/cozystack"]
language: "en"
quick_facts_style: "rows"
faq_style: "rows"
direct_answer: |
  **Developer self-service is the platform-engineering capability that lets product teams provision environments, databases, services, storage, and observability on their own — without filing tickets — typically in under an hour from request to running. It targets engineering organizations where the wait between "team needs an environment" and "team has one" stretches into days or weeks, decaying product velocity. Aenix builds this capability into platforms teams actually adopt: opinionated golden paths backed by a real platform layer, not a catalog UI as wallpaper. Engagements deliver a golden-path inventory of the ten most common requests, self-service paths designed and implemented by Aenix engineers, and an adoption-metrics framework. The work runs on the developer self-service layer of Ænix Private Cloud Platform, the company's productized Internal Developer Platform built on Cozystack.**
quick_facts:
  - label: "What it is"
    value: "A platform-engineering capability where the most common product-team needs are satisfied without tickets, completed in under an hour from request to running."
  - label: "Who it's for"
    value: "Engineering organizations where provisioning environments, databases, or services requires platform-team tickets and waits of days or weeks."
  - label: "Delivered on"
    value: "the developer self-service layer of Ænix Private Cloud Platform — GitLab automation, Argo CD workflows, golden-path templates, self-service APIs, and productivity dashboards, built on Cozystack."
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
    a: "The the developer self-service layer of Ænix Private Cloud Platform — an Internal Developer Platform layer with GitLab automation, Argo CD workflows, self-service APIs, golden-path templates, and engineering productivity dashboards. It is built on Cozystack, which runs VMs and containers on one Kubernetes API via KubeVirt, with Cilium eBPF networking and LINSTOR/DRBD storage."
  - q: "How long before product teams can self-serve?"
    a: "Discovery is a free 30-minute call. Assessment runs 14-28 days within a Platform Readiness Assessment. The build engagement spans 1-6 months depending on how many golden paths are in scope and the maturity of the existing platform."
  - q: "Is there vendor lock-in?"
    a: "No. The capability is built on Cozystack, an open-source CNCF project licensed under Apache 2.0 with no per-CPU or per-core licensing. The golden paths and platform layer use standard Kubernetes APIs, so the foundation remains portable."
---

**One of the most expensive things in most engineering organizations is the wait time between "team needs an environment" and "team has an environment." When that gap is days or weeks, product velocity decays measurably; when it's hours, the platform investment compounds for years.**

Ænix builds developer self-service capability into platforms that product teams actually adopt — not Backstage as wallpaper, but underlying golden paths that provision what a team asks for without filing a ticket.

> **Pairs with:** **[the developer self-service layer of Ænix Private Cloud Platform](/products/private-cloud-platform/)** — Internal Developer Platform layer with GitLab automation, Argo CD workflows, APIs for self-service, golden-path templates, engineering productivity dashboards. Free [Platform Engineering Maturity Assessment →](/resources/platform-engineering-maturity-assessment/).

<div class="cta-row">
  <a class="cta-primary" href="/contact/">Book a call</a>
  <a class="cta-secondary" href="/blog/2026/05/developer-experience-platform-self-service-paths/">Read guide →</a>
</div>

---

## What developer self-service actually looks like

A useful working definition: developer self-service is when the most common 10 product-team needs can be satisfied without filing a ticket, completed in under an hour from request to running.

<div class="arch-section__fig">
<div class="diagram">
<div class="diagram__node"><b>Product teams</b><div class="diagram__chips"><span>Environment</span><span>Database</span><span>Service</span></div></div>
<div class="diagram__conn">request without tickets</div>
<div class="diagram__node diagram__node--brand"><b>the developer self-service layer of Ænix Private Cloud Platform</b><div class="diagram__chips"><span>Golden paths</span><span>Self-service APIs</span></div></div>
<div class="diagram__conn">provisions on Cozystack</div>
<div class="diagram__node"><b>Provisioned services</b><div class="diagram__chips"><span>Object storage</span><span>Observability</span><span>CI/CD</span></div></div>
<div class="diagram__conn">in under an hour</div>
<div class="diagram__node"><b>Product velocity</b><div class="diagram__chips"><span>Hours, not weeks</span></div></div>
</div>
</div>

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

<div class="band-fullbleed band-fullbleed--tint">
<div class="band-fullbleed__inner">

## How Ænix engages

Self-service is part of broader platform engineering work — see **[Internal Developer Platform services](/services/internal-developer-platform/)** and **[Platform Engineering services](/services/platform-engineering/)** for the engagement framing. The self-service-specific output is:

- **Golden-path inventory** — current state vs target for the 10 most-common requests
- **Self-service paths designed** — for the priority requests
- **Implementation engagement** — Ænix engineers build paths integrated with your platform
- **Adoption metrics framework** — measure what's working

</div>
</div>

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
**On request**

### Build engagement
**On request**

</div>

---

## How to start

<div class="cta-row">
  <a class="cta-primary" href="/contact/">Book a call</a>
</div>

- **[Self-service paths article](/blog/2026/05/developer-experience-platform-self-service-paths/)**
- **[Internal developer platform](/services/internal-developer-platform/)** — broader scope
- **[Platform engineering services](/services/platform-engineering/)** — broadest scope
- **[Cozystack](/products/cozystack/)**

---

*Ænix is the team behind Cozystack (CNCF Project), and we offer Ænix Platform — our commercial productized offering based on Cozystack.*

<!-- SEO: title "Developer Self-Service — Environments in Hours, Not Weeks | Ænix"
Word count: ~600. -->
