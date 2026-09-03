---
title: "Ænix products"
description: "Aenix products: Public Cloud Platform, Private Cloud Platform, AI Platform, enterprise support for Cozystack, and the WHMCS integration for hosters."
hero_subtitle: "One engine. Three platforms. Pick by who consumes the capacity."
language: "en"
page_type: "product"
primary_keyword: "aenix products"
secondary_keywords: ["cozystack commercial platform", "kubernetes cloud platform editions", "sovereign cloud products"]
images: ["img/og/products.png"]
related_pages: ["/products/public-cloud-platform/", "/products/private-cloud-platform/", "/products/ai-platform/", "/products/cozystack-enterprise-support/", "/products/whmcs-integration/"]
direct_answer: |
  **Aenix sells three cloud platforms plus two supporting products, all built on Cozystack — the open-source, Apache 2.0 CNCF project Aenix created and maintains. Ænix Public Cloud Platform is for organizations that sell cloud capacity to customers: hosting providers, MSPs, telcos and national operators, with billing, payments and a white-label portal included. Ænix Private Cloud Platform is for regulated organizations that run cloud for themselves, with DORA and NIS2 architecture, customer-controlled keys, audit-ready logging and an optional developer self-service layer. Ænix AI Platform adds multi-tenant GPU scheduling, model serving and vector databases for teams running inference and fine-tuning on their own hardware. Alongside them, Aenix offers enterprise support for self-run Cozystack and a proprietary WHMCS integration for hosters. All three platforms are the same engine with different surfaces switched on, so they combine without a second procurement.**
quick_facts:
  - label: "How to choose"
    value: "By who consumes the capacity: customers who are not you (Public Cloud), your own business units (Private Cloud), or AI and GPU workloads (AI Platform)."
  - label: "Do they exclude each other?"
    value: "No. One engine, one control plane, one operations team — combining them is a configuration decision, not a second contract."
  - label: "Foundation"
    value: "Cozystack — Apache 2.0, CNCF project (Sandbox since 2025-02-28; Incubating expected late summer 2026). No per-CPU or per-core licensing."
  - label: "Entry price"
    value: "From $1,250/month at provider scale. Enterprise and multi-region operator programmes are quoted per RFP."
  - label: "Also available"
    value: "Enterprise support for self-run Cozystack, and a WHMCS integration that adds Cozystack services and billing to the panel you already run."
  - label: "Try before you buy"
    value: "The customer portal runs live in the browser with demo data — no signup, no cluster."
faq:
  - q: "Which platform do we need?"
    a: "Start from who consumes the capacity. If you sell it to customers who are not you, you need billing, payments and a customer-facing portal, so Public Cloud Platform. If your own business units consume it under regulatory scope, you need compliance architecture, customer-managed keys and audit-ready logging, so Private Cloud Platform. If the workload is inference, fine-tuning or RAG on your own GPUs, that is AI Platform. Many organizations answer yes to more than one, which is fine — see the next question."
  - q: "Does choosing one exclude the others?"
    a: "No, and this is the most common misreading of the product line. The three platforms are the same Cozystack engine with different surfaces enabled, running under one control plane. Taking AI Platform with Private Cloud features, or adding a commercial billing layer to an internal estate later, is a configuration decision on the platform you already run — not a migration, not a second installation, not a second procurement."
  - q: "What is the difference between Cozystack and the Ænix platforms?"
    a: "Cozystack is the open-source engine: Kubernetes-native multi-tenancy, KubeVirt VMs and containers on one API, Cilium networking, replicated storage, managed databases. It is Apache 2.0 and you can run it yourself, forever, without paying us. The Ænix platforms add the surfaces a business needs around that engine — billing, portals, compliance architecture, migration tooling, SLA and the engineers who maintain the project. If you want the engine and a support contract but none of the commercial layer, that is enterprise support for Cozystack."
  - q: "Can we start small and grow?"
    a: "Yes, and the growth path is deliberately not a replatform. A provider that starts on the price list at provider scale and grows into a multi-region national operator switches multi-region on and keeps its portal, its billing and its tenants. An enterprise that starts with a regulated private cloud and later wants GPU tenancy adds it on the same substrate, inheriting the key custody and tenancy boundary the auditor already accepted."
  - q: "Is there vendor lock-in?"
    a: "The core is Apache 2.0 with no per-CPU or per-core licensing, and it is a CNCF project rather than a Aenix-owned codebase, so the engine outlives any commercial relationship with us. The commercial layer — portals, billing, proprietary modules — is what you stop receiving if you leave. The exit is documented rather than theoretical: you keep running the open-source platform on the same hardware."
aliases:
  - /products/aenix-platform/
---

**Three platforms on one engine, plus two products around it. The platforms are not tiers and not alternatives — they are different surfaces on the same Cozystack foundation, and they combine.**

## Choose by who consumes the capacity

That single question settles the choice in most conversations. Everything else follows from it.

| If the capacity goes to… | You need | Platform |
|---|---|---|
| Customers who are not you | Billing, payments, customer portal, tenant suspension, resale | **[Public Cloud Platform](/products/public-cloud-platform/)** |
| Your own business units, under regulation | DORA / NIS2 architecture, customer-managed keys, audit-ready logging | **[Private Cloud Platform](/products/private-cloud-platform/)** |
| Inference, fine-tuning, RAG on your own GPUs | GPU tenancy, MIG and fractioning, model serving, vector databases | **[AI Platform](/products/ai-platform/)** |

## They combine — that is the design, not a concession

The three platforms are the same engine with different surfaces switched on. There is one control plane, one API, one operations team and one upgrade path underneath all of them. So the honest answer to "which one, though?" is often "two of them, and that costs you a configuration change rather than a second programme."

What that looks like in practice:

- **AI Platform with Private Cloud controls.** The usual regulated pairing. Customer-managed keys extend to model weights at rest; GPU workloads sit inside the same Tenant CRD boundary the auditor already reviewed. You do not build a second compliance story for the AI estate.
- **Public Cloud with GPU-as-a-Service.** A provider running VMs and managed databases switches on GPU tenancy and sells it, metered and billed through the surface it already has, on hardware it already owns.
- **Public and Private together.** A telco or bank selling a sovereign cloud product while running its own regulated internal estate operates both on one platform, with one team, rather than maintaining two stacks that happen to look similar.

Nothing in the line is a dead end. Starting on the price list at provider scale and growing into a multi-region national build is a switch, not a replatform.

<div class="cta-row">
  <a class="cta-primary" href="/contact/">Book a call</a>
  <a class="cta-secondary" href="/demo/" target="_blank" rel="noopener">Open the live demo →</a>
</div>

---

## Ænix Public Cloud Platform

**For everyone who sells cloud** — hosting providers, MSPs and regional clouds at one end; telcos, national operators and banks running a commercial cloud at the other.

Turnkey cloud-in-a-box: full billing back-end and front-end, WHMCS integration, white-label customer portal, payment processing, tenant lock and suspension, and service-creation wizards for VMs, Kubernetes, managed databases, S3 and GPU. Multi-region and multi-hypervisor, so it extends an existing VMware or OpenStack estate instead of replacing it.

From $1,250/month at provider scale; multi-region operator programmes quoted per RFP.

[Ænix Public Cloud Platform →](/products/public-cloud-platform/)

## Ænix Private Cloud Platform

**For regulated organizations running cloud for themselves** — banks, insurance carriers, public administration, telco, healthcare and regulated industry.

One Kubernetes-native control plane that coexists with VMware, OpenNebula and OpenShift rather than forcing a rip-and-replace. Pre-validated DORA and NIS2 architecture, customer-controlled encryption at every layer, immutable audit logging, multi-DC operations with tested failover, ISO 27001 and SOC 2 alignment support. The developer self-service layer — golden paths, GitLab CI/CD, Argo CD GitOps, self-service APIs — is part of this platform rather than a separate product.

Multi-year builds: 3-6 month pilot, 9-18 months to full multi-DC production.

[Ænix Private Cloud Platform →](/products/private-cloud-platform/)

## Ænix AI Platform

**For teams running AI on their own hardware** — AI-native organizations at scale, regulated AI deployments, GPU-heavy product companies, and providers selling GPU-as-a-Service.

Multi-tenant GPU scheduling with GPU-class awareness, pre-integrated model serving, vector databases, object storage, ready-to-use open-weight models and service APIs. Sovereignty controls included: customer-controlled keys covering model weights, and air-gapped deployment. NVIDIA H100, H200, A100, L40S and Blackwell classes, with AMD and Intel accelerators supported.

3-6 months for a typical inference fleet; 6-12 months for inference plus fine-tuning plus RAG.

[Ænix AI Platform →](/products/ai-platform/)

---

## Enterprise support for Cozystack

**For teams running open-source Cozystack themselves** and wanting the engineers who maintain it on call — without the commercial portal and billing layer.

SLA-backed support with direct access to the maintainers, dedicated channels, upgrade guidance and compliance support. The common entry point for product teams on Hetzner, OVH or leased bare metal.

[Enterprise support for Cozystack →](/products/cozystack-enterprise-support/)

## WHMCS integration

**For hosters already running WHMCS.** A proprietary Ænix module that adds Cozystack services — Kubernetes clusters, managed databases, VMs, message brokers, object storage and GPU — to the panel you already operate, with usage metering and billing wired through.

[WHMCS integration →](/products/whmcs-integration/)

---

## The engine underneath

All of the above runs on **[Cozystack](/products/cozystack/)** — the open-source cloud platform Ænix created and maintains, and a CNCF project (Sandbox since February 2025; Incubating expected late summer 2026). Apache 2.0, no per-CPU or per-core fees.

That matters commercially, not just philosophically: the engine is not ours to withdraw. If the commercial relationship ends you keep running the platform on the same hardware, and the exit path is documented rather than hypothetical.

<div class="cta-row">
  <a class="cta-primary" href="/contact/">Book a call</a>
  <a class="cta-secondary" href="/pricing/">Pricing →</a>
</div>
