---
title: "An internal data and AI platform, GPUs included"
description: "One internal platform for data and AI/ML: GPU pools with time-slicing and per-tenant quotas, one scheduler for pods and VMs, usage metrics that feed billing. In rollout."
hero_subtitle: "GPU pools, quotas and one scheduler for pods and VMs"
date: 2026-08-21
lastmod: 2026-08-21
page_type: "case-study"
language: "en"
hreflang_de: "/de/case-studies/internal-data-and-ai-platform/"
images: ["img/og/og-case-internal-data-and-ai-platform.png"]
primary_keyword: "internal AI platform GPU"
secondary_keywords:
  - "multi-tenant GPU scheduling"
  - "GPU quotas kubernetes"
  - "self-hosted AI platform"
  - "GPU lifecycle management"
  - "data platform and AI infrastructure"
related_pages:
  - /products/ai-platform/
  - /solutions/sovereign-ai/
  - /solutions/private-llm/
  - /products/private-cloud-platform/
faq:
  - q: "Why one platform for both data and AI workloads?"
    a: "Because they are the same infrastructure problem seen twice. Analytics, data lakes and marts, model training and model serving all want object storage, databases, scheduling, quotas and pipelines. Splitting them into two platforms means two operating models, two capacity plans and a copy of every dataset between them."
  - q: "How are GPUs shared between teams?"
    a: "GPUs live in resource pools with time-slicing, and quotas are set per tenant and per project. Freed capacity is redistributed dynamically rather than sitting idle behind whoever booked it. Each team sees an isolated space, and the platform keeps an inventory of every card, where it is and what state it is in."
  - q: "Do virtual machines and containers compete for the same GPUs?"
    a: "They share one scheduler. Pods and VMs are placed by the same planner with the same usage metrics behind them, which is also what makes chargeback and deep utilisation analytics possible — you cannot bill or analyse what two separate schedulers each think they own."
  - q: "Is this NVIDIA-only?"
    a: "Full automation — provisioning, driver management, lifecycle — is in place for NVIDIA. Cards from other vendors are supported through GPU passthrough today, with automation for them on the roadmap."
  - q: "What state is the project in?"
    a: "In rollout. GPU support is complete: automated provisioning, passthrough, monitoring and accounting. The AI-services MVP is about seventy percent through a two-month phase. Expanded services, better orchestration and MIG support follow in a three-month phase after that."
---

<div class="cs-tags">
  <span class="cs-tag">AI / ML platform</span>
  <span class="cs-tag">GPU pools · quotas</span>
  <span class="cs-tag">Pods + VMs, one scheduler</span>
  <span class="cs-tag">Data lakes · GitOps</span>
  <span class="cs-tag">In rollout</span>
</div>

**One internal platform for two things a large organisation usually builds twice: data — analytics, lakes and marts, model training — and AI/ML services, from development through training to serving. Underneath sits AI-ready infrastructure: GPU resource pools with time-slicing and per-tenant quotas, a single scheduler placing both pods and virtual machines, and usage metrics detailed enough to charge teams and to see where capacity actually goes. The platform is in rollout: GPU support is live, the AI-services MVP is most of the way through its phase.**

<div class="cs-stats">
  <div class="cs-stat"><div class="cs-stat__num">One scheduler</div><div class="cs-stat__label">for pods and virtual machines, with usage metrics behind billing and analytics</div></div>
  <div class="cs-stat"><div class="cs-stat__num">Per tenant</div><div class="cs-stat__label">GPU pools, time-slicing and quotas per team and per project</div></div>
  <div class="cs-stat"><div class="cs-stat__num">Phase 2 · 70%</div><div class="cs-stat__label">AI-services MVP, in a two-month phase; GPU support already complete</div></div>
</div>

## About the project

The client is building one internal platform to cover data management and AI/ML work for the whole organisation, instead of letting each function accumulate its own stack. On the data side: analytics, data lakes and data marts, and model training. On the AI/ML side: running, developing and training models as a service other teams consume.

The two are usually treated as separate programmes and then spend years copying datasets to each other. Here they share infrastructure, tenancy and quotas from the start.

## Goals and objectives

- One internal platform for data management and for AI/ML services, rather than two operating models over one estate.
- GPU capacity that can be shared between teams without either starving anyone or leaving cards idle.
- Usage measured precisely enough to charge internal consumers and to make capacity decisions on evidence.
- Multi-tenancy strong enough that teams work in isolation on shared hardware.
- Automation of the GPU lifecycle end to end, from provisioning to decommissioning.

## Proposed solution

**AI-ready infrastructure: GPUs for both Kubernetes and VMs.**

- **The GPU infrastructure layer** — GPU resource pools, time-slicing, quotas per tenant and per project.
- **One scheduler** — a single planner for pods and virtual machines, with utilisation metrics that feed both chargeback and deep analytics.
- **Data and pipelines** — S3-compatible storage, databases and model artefacts, with pipelines automated GitOps-style.

**Full GPU lifecycle management.** Automated GPU provisioning, passthrough into both VMs and Kubernetes, and driver management, joined up rather than scripted per case:

- Full autopilot for NVIDIA cards; GPU passthrough for other vendors.
- Automatic driver installation and GPU resource management inside Kubernetes.
- Lifecycle and resource management, autoscaling and on-demand provisioning.
- Security and multi-tenancy, decommissioning and rolling upgrades.

{{< placeholder-image width="1200" height="640" label="Internal data and AI platform: GPU pools with time-slicing and per-tenant quotas feed one scheduler placing both pods and VMs; above it, data services (S3 object storage, databases, model artefacts) and GitOps pipelines; the GPU lifecycle layer handles automated provisioning, passthrough to VM and Kubernetes, driver management, autoscaling, decommissioning and rolling upgrades; usage metrics flow to billing, quotas and inventory" >}}

## What the platform already does

- **Monitoring** — utilisation, load, and the idle capacity nobody was accounting for.
- **Provisioning** — fast allocation of GPU or vGPU to an ML project.
- **Multi-tenancy** — isolated working spaces per team.
- **Billing and quotas** — limits, tariffs and consumption accounting.
- **Dynamic allocation** — GPUs redistributed as they are released instead of staying reserved.
- **Inventory** — every card, its location and its state, in one register.

## Roadmap

- **Phase 1 — complete. GPU support.** Autopilot for NVIDIA, passthrough for other vendors, monitoring and resource accounting. This is the infrastructure layer.
- **Phase 2 — two months, about 70% done. First AI-services MVP.** AI services surfaced in the platform dashboard, support for other vendors' GPUs, popular self-hosted models.
- **Phase 3 — three months. Expanded services.** Better orchestration of AI services, an enterprise-grade GPU toolset, MIG support.
- **Phase 4 — expansion.** Fine-tuning of the AI platform and automation for non-NVIDIA GPUs.

## Why this case matters

<div class="cs-why card-grid">
  <div class="card"><div class="card-body"><h3 class="card-title">Data and AI on one platform</h3><p class="card-description">Same storage, same tenancy, same quotas. No second operating model, and no copy of every dataset moving between two stacks.</p></div></div>
  <div class="card"><div class="card-body"><h3 class="card-title">Pods and VMs, one scheduler</h3><p class="card-description">Which is what makes chargeback possible at all — two schedulers each believing they own the cards cannot produce a number anyone will sign.</p></div></div>
  <div class="card"><div class="card-body"><h3 class="card-title">Idle GPUs are a measurable line</h3><p class="card-description">Utilisation, load and unused capacity are reported per tenant, and freed cards go back into the pool instead of staying booked.</p></div></div>
  <div class="card"><div class="card-body"><h3 class="card-title">A roadmap with a finished phase in it</h3><p class="card-description">GPU support is done and running; the AI-services layer is being built on top of it. Published in progress, not in retrospect.</p></div></div>
</div>

---

*This case study describes an engagement in rollout and is published in anonymized form (Tier-3 evidence): the customer is described by profile, not by name. A customer reference is available under NDA on request — [talk to Ænix sales](/contact/).*

*Ænix is the team behind [Cozystack](https://cozystack.io) — a CNCF project (Sandbox today; Incubating expected late summer 2026), Apache 2.0. Ænix commercializes it as Ænix Platform, as three platforms on one engine — Public Cloud, Private Cloud and AI — that combine rather than exclude each other.*
