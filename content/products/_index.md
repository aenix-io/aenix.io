---
title: "Ænix products: three cloud platforms on Cozystack"
description: "Ænix products: Public Cloud Platform, Private Cloud Platform and AI Platform on Cozystack, plus enterprise support for Cozystack and the WHMCS module."
hero_subtitle: "One engine. Three platforms. Pick by who consumes the capacity."
language: "en"
page_type: "product"
primary_keyword: "aenix products"
secondary_keywords: ["cozystack commercial platform", "kubernetes cloud platform products", "sovereign cloud products"]
images: ["img/og/products.jpg"]
related_pages: ["/products/public-cloud-platform/", "/products/private-cloud-platform/", "/products/ai-platform/", "/products/cozystack-enterprise-support/", "/products/whmcs-integration/"]
direct_answer: |
  **Ænix sells three cloud platforms plus two supporting products, all built on Cozystack — the Apache 2.0 CNCF project Ænix created and maintains with maintainers from other companies. Ænix Public Cloud Platform is for organizations that sell cloud capacity: hosting providers, MSPs, telcos and national operators, with the Ænix billing system, WHMCS integration and a brandable customer portal. Ænix Private Cloud Platform is for regulated organizations that run cloud for themselves, with DORA- and NIS2-aligned architecture, encryption and audit logging designed with you, and a developer self-service layer. Ænix AI Platform adds multi-tenant GPU scheduling, model serving and vector databases for inference and fine-tuning on owned hardware. Alongside them, Ænix offers enterprise support for self-run Cozystack and a WHMCS integration for hosters. The three platforms are one engine with different surfaces switched on, so combining them is a configuration decision rather than a second procurement.**
quick_facts:
  - label: "How to choose"
    value: "By who consumes the capacity: customers who are not you (Public Cloud), your own business units (Private Cloud), or AI and GPU workloads (AI Platform)."
  - label: "Do they exclude each other?"
    value: "No. One engine, one control plane, one operations team — combining them is a configuration decision, not a second contract."
  - label: "Foundation"
    value: "Cozystack — Apache 2.0, CNCF project (Sandbox since 2025-02-28; Incubating application in due diligence). No per-CPU or per-core licensing."
  - label: "Entry price"
    value: "Public Cloud Platform and support for self-run Cozystack from $1,250 per 10 nodes per month. Private Cloud Platform, AI Platform and multi-region operator programmes are quoted per RFP."
  - label: "Also available"
    value: "Enterprise support for self-run Cozystack, and a WHMCS integration that adds Cozystack services and billing to the panel you already run."
  - label: "Try before you buy"
    value: "The customer portal runs live in the browser with demo data — no signup, no cluster."
faq:
  - q: "Which platform do we need?"
    a: "Start from who consumes the capacity. If you sell it to customers who are not you, you need billing, payments and a customer-facing portal, so Public Cloud Platform. If your own business units consume it under regulatory scope, you need compliance architecture, encryption and audit logging designed for your regulator, so Private Cloud Platform. If the workload is inference, fine-tuning or RAG on your own GPUs, that is AI Platform. Many organizations answer yes to more than one, which is fine — see the next question."
  - q: "Does choosing one exclude the others?"
    a: "No, and this is the most common misreading of the product line. The three platforms are the same Cozystack engine with different surfaces enabled, running under one control plane. Taking AI Platform with Private Cloud features, or adding a commercial billing layer to an internal estate later, is a configuration decision on the platform you already run — not a migration, not a second installation, not a second procurement."
  - q: "What is the difference between Cozystack and the Ænix platforms?"
    a: "Cozystack is the open-source engine: Kubernetes-native multi-tenancy, KubeVirt VMs and containers on one API, Cilium networking, replicated storage, managed databases. It is Apache 2.0 and you can run it yourself, forever, without paying us. The Ænix platforms add what a business needs around that engine — proprietary modules such as the billing system and WHMCS integration, compliance architecture, migration delivery, SLA and the engineers who maintain the project. If you run the open-source engine yourself and want the maintainers on call, that is enterprise support for Cozystack: the same subscription and price list, with the commercial modules included in every tier and free to leave unused."
  - q: "Can we start small and grow?"
    a: "Yes, and the growth path is deliberately not a replatform. A provider that starts on the price list at provider scale and grows into a multi-region national operator switches multi-region on and keeps its portal, its billing and its tenants. An enterprise that starts with a regulated private cloud and later wants GPU tenancy adds it on the same substrate, inside the tenancy boundary the auditor already reviewed."
  - q: "Is there vendor lock-in?"
    a: "The core is Apache 2.0 with no per-CPU or per-core licensing, and it is a CNCF project rather than an Ænix-owned codebase, so the engine outlives any commercial relationship with us. The proprietary Ænix modules (billing system, WHMCS integration) and Ænix support are what stop if you leave; you keep running the open-source platform on the same hardware."
aliases:
  - /products/aenix-platform/
hreflang_de: /de/produkte/
---

**Three platforms on one engine, plus two products around it. The platforms are not tiers and not alternatives — they are different surfaces on the same Cozystack foundation, and they combine.**

## Choose by who consumes the capacity

| If the capacity goes to… | You need | Platform |
|---|---|---|
| Customers who are not you | Billing, payments, customer portal, tenant suspension, resale | **[Public Cloud Platform](/products/public-cloud-platform/)** |
| Your own business units, under regulation | DORA / NIS2-aligned architecture, encryption, audit logging | **[Private Cloud Platform](/products/private-cloud-platform/)** |
| Inference, fine-tuning, RAG on your own GPUs | GPU tenancy, fractional GPU sharing, model serving, vector databases | **[AI Platform](/products/ai-platform/)** |

## They combine — that is the design, not a concession

One control plane, one API, one operations team, one upgrade path underneath all three. So the honest answer to "which one, though?" is often "two of them, and that costs you a configuration change rather than a second programme." In practice:

- **AI Platform with Private Cloud controls.** The usual regulated pairing. GPU workloads sit inside the same tenant boundary the auditor already reviewed. You do not build a second compliance story for the AI estate.
- **Public Cloud with GPU-as-a-Service.** A provider running VMs and managed databases switches on GPU tenancy and sells it on hardware it already owns: GPU usage is measured per tenant, and charging happens in the billing system it already runs (WHMCS or its own).
- **Public and Private together.** A telco or bank selling a sovereign cloud product while running its own regulated internal estate operates both on one platform, with one team, rather than maintaining two stacks that happen to look similar.

Nothing in the line is a dead end. Starting on the price list at provider scale and growing into a multi-region national build is a switch, not a replatform.

<div class="cta-row">
  <a class="cta-primary" href="/contact/">Book a call</a>
  <a class="cta-secondary" href="/demo/" target="_blank" rel="noopener">Open the live demo →</a>
</div>

---

## Ænix Public Cloud Platform

**For everyone who sells cloud** — hosting providers, MSPs and regional clouds at one end; telcos, national operators and banks running a commercial cloud at the other.

A complete public-cloud product for hosting providers: full billing back-end and front-end, WHMCS integration, a customer portal with your branding, payment processing, tenant lock and suspension, and service-creation wizards for VMs, Kubernetes, managed databases, S3 and GPU. Multi-region, and it runs alongside an existing VMware or OpenStack estate while you migrate.

From $1,250 per 10 nodes per month at provider scale, live in weeks once the hardware is ready; multi-region operator programmes quoted per RFP.

[Ænix Public Cloud Platform →](/products/public-cloud-platform/)

## Ænix Private Cloud Platform

**For regulated organizations running cloud for themselves** — banks, insurance carriers, public administration, telco, healthcare and regulated industry.

One Kubernetes-native platform that runs alongside VMware, OpenNebula and OpenShift while you migrate. DORA- and NIS2-aligned architecture, volume encryption, configurable audit-log retention, multi-site designs, and evidence for your own ISO 27001 work. The developer self-service layer — golden paths, GitLab CI/CD, Argo CD GitOps, self-service APIs — is part of this platform rather than a separate product.

Quoted per RFP: a 14- or 28-day assessment, then a 3-12 month build depending on scope.

[Ænix Private Cloud Platform →](/products/private-cloud-platform/)

## Ænix AI Platform

**For teams running AI on their own hardware** — AI-native organizations at scale, regulated AI deployments, GPU-heavy product companies, and providers selling GPU-as-a-Service.

Multi-tenant GPU scheduling, model serving, vector databases, object storage and service APIs, with air-gapped deployment available. NVIDIA data-centre GPUs through the NVIDIA GPU Operator: passthrough of whole GPUs to VMs, NVIDIA vGPU for VMs (requires your NVIDIA vGPU licence) and, inside tenant Kubernetes clusters, MIG partitions on MIG-capable cards plus time-sliced sharing via HAMi. Cozystack is accepted into the CNCF Kubernetes AI Conformance program.

Quoted per RFP: a 14- or 28-day assessment, then a 3-12 month build depending on scope.

[Ænix AI Platform →](/products/ai-platform/)

---

## Enterprise support for Cozystack

**For teams running open-source Cozystack themselves** and wanting the engineers who maintain it on call.

SLA-backed support from the maintainers on the published tiers, from $1,250 per 10 physical nodes per month. It is the same subscription as Public Cloud Platform: every tier includes the proprietary Ænix commercial modules (billing system and WHMCS integration), which a self-run team can simply leave unused. The common entry point for teams on Hetzner, OVH or leased bare metal.

[Enterprise support for Cozystack →](/products/cozystack-enterprise-support/)

## WHMCS integration

**For hosters already running WHMCS.** A proprietary Ænix module that adds Cozystack services — Kubernetes clusters, managed databases, VMs, message brokers, object storage and GPU — to the panel you already operate, with usage metering and billing wired through. Included in every Public Cloud Platform tier.

[WHMCS integration →](/products/whmcs-integration/)

---

## The engine underneath

All of the above runs on **[Cozystack](/products/cozystack/)** — the open-source cloud platform Ænix created and maintains with maintainers from other companies, and a CNCF project (Sandbox since February 2025; Incubating application in due diligence). Apache 2.0, no per-CPU or per-core fees.

That matters commercially, not just philosophically: the engine is not ours to withdraw. If the commercial relationship ends you keep running the open-source platform on the same hardware; the proprietary Ænix modules and support stop.

<div class="cta-row">
  <a class="cta-primary" href="/contact/">Book a call</a>
  <a class="cta-secondary" href="/pricing/">Pricing →</a>
</div>
