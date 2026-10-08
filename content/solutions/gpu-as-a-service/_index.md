---
title: "GPU as a service platform for GPU clouds and data centres"
description: "Sell NVIDIA GPU capacity as a multi-tenant cloud: GPU VMs, Kubernetes with GPUs, a self-service portal and per-tenant usage for billing. Built on Cozystack."
date: 2026-10-08
lastmod: 2026-10-08
language: "en"
hreflang_de: "/de/loesungen/gpu-as-a-service/"
quick_facts_style: "rows"
faq_style: "rows"
primary_keyword: "gpu as a service platform"
secondary_keywords: ["gpu cloud platform", "gpu cloud software for data centers", "neocloud platform", "multi-tenant gpu cloud", "gpuaas"]
related_pages:
  - /products/public-cloud-platform/
  - /products/ai-platform/
  - /products/whmcs-integration/
  - /case-studies/sovereign-public-cloud/
  - /case-studies/bare-metal-gpu-inference/
  - /webinars/build-your-gpu-cloud/
  - /compliance/kubernetes-conformance/
  - /pricing/
service:
  type: "GPU as a Service Platform"
  areaServed: ["EU", "DACH", "MENA", "Central Asia"]
  audience: "GPU cloud providers and data centres"
direct_answer: |
  **A GPU as a service platform is the software layer that turns a fleet of GPU servers into a cloud you can sell: tenants, self-service ordering, isolation between customers, usage data for billing, and the services customers expect next to the GPU. Ænix builds this for data centres and new GPU clouds running their own NVIDIA estate. It runs on Cozystack, a CNCF project Ænix created and co-maintains, delivered as Ænix Public Cloud Platform with Ænix AI Platform for the AI services on top. GPUs are passed through to tenant VMs or shared between containers with HAMi; MIG partitioning is on the roadmap. Tenants get GPU VMs, Kubernetes clusters with GPU nodes, managed databases and S3 from a branded portal, and per-tenant usage feeds WHMCS or your own billing system.**
quick_facts:
  - label: "What it is"
    value: "Software to run and sell a multi-tenant GPU cloud on your own NVIDIA servers: tenants, portal, GPU VMs and Kubernetes, managed services, usage data for billing."
  - label: "Who it is for"
    value: "Data centres and new GPU clouds (neoclouds) selling GPU capacity to their own customers."
  - label: "GPU modes"
    value: "Whole GPUs passed through to tenant VMs; NVIDIA vGPU for VMs where you hold the NVIDIA vGPU licence; fractional sharing between containers with HAMi. MIG and time-slicing are on the roadmap."
  - label: "Kubernetes for AI"
    value: "Cozystack is a CNCF Certified Kubernetes distribution and was accepted into the CNCF Kubernetes AI Conformance program in September 2026."
  - label: "NVIDIA stack"
    value: "NVIDIA data-centre GPUs through the NVIDIA GPU Operator. Partner validation of the GPU Operator stack was submitted to NVIDIA in October 2026 and is pending."
  - label: "Billing"
    value: "GPU usage is measured per tenant; you charge for it in WHMCS (through the Ænix WHMCS integration) or in your own billing system."
  - label: "Time to launch"
    value: "Productized installer: live in weeks once hardware is ready. Multi-region operator programmes: 3–6 month pilot, then 9–18 months to full multi-region."
quick_facts_source: "[Cozystack (CNCF)](https://cozystack.io), [CNCF Kubernetes AI Conformance](https://github.com/cncf/k8s-ai-conformance), [Ænix pricing](/pricing/)"
faq:
  - q: "What is a GPU as a service platform?"
    a: "It is the layer between your GPU servers and your customers. It creates isolated tenants, lets customers order GPU VMs or Kubernetes clusters with GPUs themselves, keeps their workloads apart, records how much each tenant used, and hands that usage to your billing. Without it, a data centre can rent out servers; with it, it can run a cloud."
  - q: "How are GPUs shared between tenants?"
    a: "Two ways ship today. A whole GPU, or several, can be passed through to one tenant's virtual machine, so that tenant has the card to itself. Inside Kubernetes, HAMi lets several containers share one physical GPU with memory and compute limits. MIG partitioning and time-slicing are on the roadmap, so a product that promises hard partitions of one card to untrusted tenants should not be planned around them yet."
  - q: "Can we bill GPU usage through WHMCS?"
    a: "Yes. The platform measures usage per tenant, and the Ænix WHMCS integration, a proprietary Ænix module, passes provisioning and usage to WHMCS, where you set prices and invoice. Providers with their own billing system take the same usage data from the platform instead. The price per GPU-hour is yours to set."
  - q: "Is the NVIDIA stack validated by NVIDIA?"
    a: "Not yet. GPUs run through the NVIDIA GPU Operator, and Ænix submitted the stack for NVIDIA partner validation in October 2026. That review is pending, and we will say so on this page when it completes. Cozystack is already a CNCF Certified Kubernetes distribution and part of the CNCF Kubernetes AI Conformance program."
  - q: "How long does it take to launch a GPU cloud?"
    a: "At provider scale the productized installer brings the platform live in weeks once the hardware is racked and ready. Multi-region national or operator programmes run a 3–6 month pilot and then 9–18 months to full multi-region. Most projects start with a 30-minute discovery call and a fixed-price Platform Readiness Assessment of 14 or 28 days."
  - q: "How is it priced?"
    a: "Ænix sells a subscription, not a licence. Public Cloud Platform uses the published support tiers, priced per 10 physical nodes per month, with GPU sharing support included from the Standard tier up. AI services such as model serving, and multi-region programmes, are quoted per RFP. The open-source Cozystack underneath stays free to run."
---

**Turn your NVIDIA servers into a GPU cloud you can sell. Tenants order GPU virtual machines, Kubernetes clusters with GPU nodes, managed databases and S3 storage from your own branded portal. Each tenant stays isolated, and its usage goes to WHMCS or your own billing system. It runs on hardware you own, with an open-source CNCF project underneath.**

> **Pairs with:** **[Ænix Public Cloud Platform](/products/public-cloud-platform/)**, the platform for organisations that sell cloud, and **[Ænix AI Platform](/products/ai-platform/)** for model serving and AI services on top. Try the customer portal in the **[live demo](/demo/)**.

<div class="cta-row">
  <a class="cta-primary" href="/contact/">Book a call</a>
  <a class="cta-secondary" href="/demo/" target="_blank" rel="noopener">Open the live demo →</a>
</div>

---

## Who is this for?

- **Data centres** with GPU racks that want to sell GPU cloud, not only colocation or dedicated servers.
- **New GPU clouds (neoclouds)** with a few hundred to a few thousand NVIDIA GPUs and a customer base that expects self-service.
- **Hosting providers and telcos** adding GPU to an existing cloud product.
- **National and regional cloud programmes** that need GPU capacity to stay in the country.

If you only rent whole servers to a handful of customers on long contracts, a bare-metal provisioning tool may be enough. This platform is for when customers order, scale and pay for GPU themselves.

---

## What does a GPU cloud need beyond the GPUs?

<div class="grid-2x2">

**Tenants and isolation**
Every customer is a tenant with its own quotas, access rights, network isolation and monitoring. Resellers get nested tenants for their own customers.

**Self-service ordering**
A branded customer portal with registration, team management and support tickets. Customers create GPU VMs, Kubernetes clusters and databases without writing YAML or opening a ticket.

**Usage you can bill**
Usage is recorded per tenant and handed to your billing. Overdue tenants can be suspended automatically, without an engineering ticket.

**Services next to the GPU**
Customers training or serving models also need storage, databases and queues. Selling them on the same platform raises revenue per GPU customer.

</div>

---

<div class="band-fullbleed band-fullbleed--tint">
<div class="band-fullbleed__inner">

## How are GPUs allocated to tenants?

Each mode has a different level of isolation, so choose it per product rather than per cluster.

| Mode | How it works | Isolation | Status |
|---|---|---|---|
| **Whole GPU to a VM** | One or more GPUs passed through (VFIO) to a tenant's KubeVirt virtual machine | The tenant has the card to itself | Shipping |
| **NVIDIA vGPU to a VM** | A card split into vGPU profiles for several VMs | A separate vGPU per VM; requires your NVIDIA vGPU licence | Shipping |
| **GPU nodes in tenant Kubernetes** | Kubernetes node groups with GPUs, driver managed by the NVIDIA GPU Operator | Per tenant cluster | Shipping |
| **Fractional sharing in Kubernetes** | HAMi lets several containers share one GPU with memory and compute limits | Shared card; compute limits need container images with glibc older than 2.34 | Shipping (opt-in) |
| **MIG partitions** | Hardware partitions of one card | Hardware-level | Roadmap |
| **Time-slicing** | Containers take turns on one card | None between workloads | Roadmap |

GPU support covers NVIDIA data-centre GPUs through the NVIDIA GPU Operator. Ænix submitted the GPU Operator stack for NVIDIA partner validation in October 2026; the review is pending. For other accelerators, PCI passthrough to VMs is the supported path.

</div>
</div>

---

## What do your customers get?

- **GPU virtual machines** with Linux or Windows, including custom images and templates.
- **Managed Kubernetes** with GPU node groups. Each tenant cluster has its own control plane.
- **Managed databases and queues:** PostgreSQL, MariaDB, Valkey, Kafka, ClickHouse, RabbitMQ, NATS, MongoDB, OpenSearch, and Qdrant as a vector database.
- **S3-compatible object storage** for datasets and model checkpoints.
- **AI services** delivered with [Ænix AI Platform](/products/ai-platform/): model serving and the AI stack around it. One telecom operator's platform, for example, runs NVIDIA Dynamo inference and RAG on Qdrant, packaged as Cozystack services ([case study](/case-studies/ai-universal-installer/)).

### Kubernetes for AI, with third-party proof

Cozystack is a CNCF Certified Kubernetes distribution. In September 2026 it was accepted into the [CNCF Kubernetes AI Conformance](https://github.com/cncf/k8s-ai-conformance) program for Kubernetes v1.35, which checks that a platform runs AI workloads the way the Kubernetes community specifies. Conformance details and how to reproduce the runs are on the [Kubernetes conformance page](/compliance/kubernetes-conformance/).

---

## How do billing and the portal work?

- **WHMCS.** The Ænix WHMCS integration, a proprietary Ænix module, sells GPU VMs, Kubernetes, databases and storage as WHMCS products. It works in two modes: WHMCS as the customer storefront, or the Ænix portal as the storefront with WHMCS as the billing back-end. [More on WHMCS →](/products/whmcs-integration/)
- **Your own billing.** Providers with their own system take per-tenant usage from the platform. A Swiss provider on Cozystack bills dedicated resources hourly from its in-house system ([case study](/case-studies/sovereign-public-cloud/)).
- **Ænix billing.** Ænix Public Cloud Platform also includes a billing back-end and front-end with payment processing, for providers that have neither.

You set the price per GPU, per hour or per bundle. The platform supplies usage per tenant; it does not dictate your price list.

---

## Sovereignty and control

- **Your hardware, your jurisdiction.** The platform runs on your servers. Customer data and model weights stay in your data centre.
- **Air-gapped installation** is supported, and telemetry is off unless you turn it on.
- **Open source underneath.** Cozystack is Apache 2.0. If you stop the Ænix subscription, the platform keeps running.
- **Ænix as a supplier:** AENIX s.r.o. holds [ISO/IEC 27001:2022](/compliance/iso-27001/) certification.

---

## How does a launch run?

<div class="engagement-steps">

  <div class="engagement-step">
    <div class="engagement-step__number">1</div>
    <h3 class="engagement-step__title">Discovery call</h3>
    <p class="engagement-step__body">30 minutes, free. Your GPU fleet, your customers, what you sell today.</p>
  </div>

  <div class="engagement-step">
    <div class="engagement-step__number">2</div>
    <h3 class="engagement-step__title">Platform Readiness Assessment</h3>
    <p class="engagement-step__body">Fixed price, 14 or 28 days. Target architecture, network and storage design, GPU product modes, risk register.</p>
  </div>

  <div class="engagement-step">
    <div class="engagement-step__number">3</div>
    <h3 class="engagement-step__title">Install</h3>
    <p class="engagement-step__body">Productized installer: live in weeks once hardware is ready. Multi-region programmes start with a 3–6 month pilot.</p>
  </div>

  <div class="engagement-step">
    <div class="engagement-step__number">4</div>
    <h3 class="engagement-step__title">First tenants</h3>
    <p class="engagement-step__body">Portal branding, service catalogue, billing connection, then onboarding.</p>
  </div>

  <div class="engagement-step">
    <div class="engagement-step__number">5</div>
    <h3 class="engagement-step__title">Run and grow</h3>
    <p class="engagement-step__body">Support under SLA. Multi-region programmes reach full scale in 9–18 months after the pilot.</p>
  </div>

</div>

Network fabric design for multi-node training (InfiniBand, RoCE) is scoped in the assessment for your hardware, not sold as a packaged feature.

---

## Where is it running?

These deployments are written up in full, with the customers anonymised as their contracts require:

- **[A sovereign public cloud on bare metal](/case-studies/sovereign-public-cloud/)**: a Swiss provider sells VMs, Kubernetes and GPUs from three data centres, with billing from its own system.
- **[8×H100 inference on your own bare metal](/case-studies/bare-metal-gpu-inference/)**: all eight GPUs passed through to one isolated tenant VM, about two months to production.
- **[Cozystack as a universal installer](/case-studies/ai-universal-installer/)**: a telecom operator runs GPU passthrough into VMs and clusters, NVIDIA Dynamo and geo-distributed GPU.
- **[From public cloud to bare metal, bursting on demand](/case-studies/multicloud-academic-gpu/)**: fractional GPU sharing and GPU cost about five times lower than the previous hyperscaler setup.

The largest GPU deployment written up here is a single 8×H100 node. For a larger fleet, we scope a proof of concept on your own hardware.

---

## Pricing

Ænix sells a subscription (support, commercial modules and services), not a licence. Public Cloud Platform uses the published support tiers, priced per 10 physical nodes per month; support for GPU sharing is included from the Standard tier up, and Plus and Enterprise add 24×7 support and a full proof-of-concept package. AI services such as model serving, and multi-region operator programmes, are quoted per RFP. Out-of-scope work is billed at $150 per hour. Full tier details are on the **[pricing page](/pricing/)**.

---

## Start with a call

Bring your GPU count and models, your current stack and what you sell today. An Ænix engineer will tell you which GPU modes fit your product and what a launch would take.

<div class="cta-row">
  <a class="cta-primary" href="/contact/">Book a call</a>
  <a class="cta-secondary" href="/webinars/build-your-gpu-cloud/">Webinar: build your GPU cloud →</a>
</div>

---

*Ænix created [Cozystack](https://cozystack.io) and maintains it together with maintainers from other companies. Cozystack is a CNCF Sandbox project, Apache 2.0; its CNCF Incubation application is in due diligence. Ænix delivers it as three platforms on one engine (Public Cloud, Private Cloud and AI) that combine rather than exclude each other.*
