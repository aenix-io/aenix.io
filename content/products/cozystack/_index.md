---
title: "Cozystack — open-source cloud platform on Kubernetes"
description: "Cozystack is the open-source cloud platform Aenix created and maintains, and a CNCF project. It runs virtual machines, containers, managed databases, S3..."
related_pages: ["/products", "/products/public-cloud-platform", "/services/platform-engineering", "/services/private-cloud-consulting", "/alternatives/vmware-alternative"]
language: "en"
quick_facts_style: "rows"
faq_style: "rows"
direct_answer_image: "/images/cozystack-screenshot.png"
direct_answer_image_alt: "Cozystack console — self-service marketplace"
direct_answer: |
  **Cozystack is an open-source cloud platform built on Kubernetes that runs virtual machines, containers, managed databases, S3 object storage, and GPU workloads on bare metal you own, under one Kubernetes-native control plane with multi-tenant isolation. It is licensed Apache 2.0 with no per-CPU or per-core fees, and is a CNCF project (Sandbox since February 2025, CNCF Incubating expected late summer 2026). Aenix is the open-core company that created and maintains Cozystack and is its largest single contributor. Cozystack fits service providers, regulated enterprises, telecom operators, and platform teams that want a self-hosted alternative to proprietary virtualization and public cloud. Aenix sells Ænix Platform, a turnkey cloud-in-a-box on top of Cozystack, plus engagement and managed services.**
quick_facts:
  - label: "What it is"
    value: "An open-source, Kubernetes-native cloud platform running VMs, containers, managed databases, S3, and GPU workloads on bare metal under one multi-tenant control plane."
  - label: "License"
    value: "Apache 2.0 (no per-CPU / per-core licensing)"
  - label: "Status"
    value: "Cozystack is a CNCF project (Sandbox since 2025-02-28; Incubating expected late summer 2026)"
  - label: "Core technology"
    value: "KubeVirt for VMs and containers on one Kubernetes API, Cilium (eBPF) networking, LINSTOR/DRBD and SeaweedFS storage, Tenant CRD multi-tenancy, VictoriaMetrics + VictoriaLogs observability."
  - label: "Who it is for"
    value: "Service providers, regulated enterprises (DORA/NIS2), telecom operators, AI/GPU operators, and enterprise platform teams running self-hosted private cloud."
  - label: "Commercial offering"
    value: "Aenix sells Ænix Platform (turnkey cloud-in-a-box) and services; support tiers Basic $1,250/mo (10 nodes), Standard $3,000, Plus $5,500, Enterprise Custom."
  - label: "Certifications"
    value: "CNCF-Certified Kubernetes Distribution and OpenSSF Best Practices badge."
faq:
  - q: "Is Cozystack free to use?"
    a: "Yes. Cozystack is open source under Apache 2.0 with no per-CPU or per-core licensing, so anyone can deploy it on their own or leased servers. Aenix's commercial Ænix Platform and support engagements on top are optional."
  - q: "What is the difference between Cozystack and Ænix Platform?"
    a: "Cozystack is the open-source, community-governed CNCF project. Ænix Platform is Aenix's turnkey commercial cloud-in-a-box built on top of Cozystack, adding a hosting panel, billing, portals, payments, support, a productized installer, and enterprise SLA across three platforms."
  - q: "How does Cozystack run both virtual machines and containers?"
    a: "Cozystack uses KubeVirt to run KVM-based virtual machines side by side with containers on the same Kubernetes API. VMs support live migration, snapshots, and templates, so legacy VM workloads and cloud-native containers share one control plane."
  - q: "Can Cozystack be deployed air-gapped?"
    a: "Yes. Cozystack has a documented air-gapped install workflow, which suits classified, healthcare-restricted, and defence-adjacent environments where the platform must run without internet access."
  - q: "What hardware does Cozystack support?"
    a: "Cozystack runs on commodity x86 servers, with ARM support emerging. Bare metal is preferred, though running on VMs is possible. Storage options include LINSTOR (DRBD), SeaweedFS, and vendor SAN."
  - q: "Does Aenix provide commercial support?"
    a: "Yes. Aenix offers Platform Readiness Assessments, build engagements, and managed engagements, with support tiers from Basic ($1,250/month per 10 nodes) up to Enterprise Custom. Direct support covers EU, DACH, and Central Asia time zones, with other regions via partners."
aliases:
  - /cozystack/
---

<!-- BLOCK 1: HERO -->


**Cozystack is the open-source cloud platform Ænix created and maintains, and a CNCF project. It runs virtual machines, containers, managed databases, S3 object storage, and GPU workloads on bare metal you own — under one Kubernetes-native control plane with multi-tenant isolation. Apache 2.0 license, currently CNCF Sandbox (CNCF Incubating expected late summer 2026), CNCF-Certified Kubernetes Distribution, OpenSSF Best Practices badge.**

This page describes Cozystack as Ænix's open-source product. The open-source project itself lives at **[cozystack.io](https://cozystack.io)** with documentation, install guides, and the community. For the turnkey commercial cloud-in-a-box on top of Cozystack, see **[Ænix Platform](/products/)** with its three platforms.

<div class="cta-row">
  <a class="cta-primary" href="/contact/?type=architecture-review">Book a review</a>
  <a class="cta-secondary" href="https://cozystack.io">cozystack.io →</a>
</div>

<div class="trust-badges">
CNCF Project · CNCF-Certified Kubernetes Distribution · OpenSSF Best Practices · Apache 2.0
</div>

<!-- /BLOCK 1 -->

---

<!-- BLOCK 2: WHAT'S IN COZYSTACK -->

<div class="band-fullbleed band-fullbleed--tint">
<div class="band-fullbleed__inner">

## What's in Cozystack

<div class="capability-grid-3x3">

**KubeVirt VMs**
KVM-based VMs with live migration, snapshots, templates. Side-by-side with containers on the same Kubernetes platform.

**Multi-tenant control plane**
Tenant CRD, nested tenants, per-tenant quotas, RBAC, audit. Built for service-provider model.

**Managed databases**
PostgreSQL, MariaDB, Redis, RabbitMQ, Kafka, ClickHouse, OpenSearch, MongoDB.

**S3 object storage**
SeaweedFS-based S3-compatible storage for backups, applications, AI training data.

**GPU as a service**
NVIDIA vGPU for VMs, MIG / time-slicing / passthrough for containers. A100, H100, H200, L40S, Blackwell validated.

**Cilium networking**
eBPF-native, network policies, MetalLB, BGP. Replaces NSX-equivalent functionality.

**LINSTOR storage**
Replicated block storage at scale. SeaweedFS also supported.

**Observability**
VictoriaMetrics + VictoriaLogs included.

**Self-service portal & WHMCS**
Cozystack Dashboard for self-service. Production-ready WHMCS billing integration with two modes.

</div>

<div class="arch-section__fig">
<div class="diagram">
<div class="diagram__node diagram__node--brand"><b>Cozystack</b><div class="diagram__chips"><span>Tenant CRD multi-tenancy</span><span>Cozystack Dashboard</span><span>WHMCS billing</span></div></div>
<div class="diagram__conn">one Kubernetes API</div>
<div class="diagram__node"><b>Workloads</b><div class="diagram__chips"><span>KubeVirt VMs</span><span>Containers</span><span>Managed databases</span><span>S3 object storage</span><span>GPU</span></div></div>
<div class="diagram__conn">networking, storage, observability</div>
<div class="diagram__node"><b>Platform services</b><div class="diagram__chips"><span>Cilium eBPF</span><span>LINSTOR / DRBD</span><span>SeaweedFS</span><span>VictoriaMetrics + VictoriaLogs</span></div></div>
<div class="diagram__conn">on</div>
<div class="diagram__node"><b>Bare metal you own</b><div class="diagram__chips"><span>Commodity x86 servers</span></div></div>
</div>
</div>

</div>
</div>

<!-- /BLOCK 2 -->

---

<!-- BLOCK 3: PROJECT VS PRODUCT -->

## Cozystack the project vs Ænix the company vs Ænix Platform the product

<div class="advantage-panel">

- **Cozystack** — open-source platform. CNCF project (currently Sandbox; CNCF Incubating expected late summer 2026). Apache 2.0. Community-governed. Anyone can deploy, contribute, fork.
- **Ænix** — the open-core company that created and maintains Cozystack. Largest single contributor. Maker of Ænix Platform.
- **Ænix Platform** — Ænix's turnkey commercial cloud-in-a-box on top of Cozystack. Three platforms on one engine — Public Cloud, Private Cloud and AI — that combine rather than exclude each other. Adds hosting panel, billing, portals, payments, support, productized installer, enterprise SLA. **[Explore platform →](/products/)**.
- **cozystack.io** — official project site. Documentation, install, releases, community. Vendor-neutral, CNCF-aligned.
- **aenix.io** (this site) — Ænix's commercial offering and product surface.

</div>

You can use Cozystack open-source without Ænix; Ænix's commercial offering (Ænix Platform + engagement services) is optional. Many customers choose Ænix Platform for the turnkey package — billing, portals, payments, support — without building those layers themselves.

<!-- /BLOCK 3 -->

---

<!-- BLOCK 4: WHO USES COZYSTACK -->

## Who runs Cozystack in production

{{< clients >}}

Production deployments across the EU, DACH, and Central Asia. Customer base spans:

- Service providers running multi-tenant cloud products (publicly: GoHost.kz, HDReady, Beby Cloud, HiKube, UseTech, Cloupard, Cloudsy on Ænix Public Cloud Platform)
- Banks and insurers under DORA / sectoral regulation (NDA until mid-2027)
- Telecom operators with sovereign-cloud product launches (NDA)
- AI / GPU operators with sustained inference workloads (NDA)
- Public-sector and quasi-public organizations (NDA)
- Enterprise platform teams building internal developer platforms

Cozystack is also listed in the [CNCF Landscape](https://landscape.cncf.io) — community production users beyond Ænix's customer base.

{{< quote-carousel >}}

<!-- /BLOCK 4 -->

---

<!-- BLOCK 5: HOW TO USE COZYSTACK -->

## How to use Cozystack

### Before either path: what a trial actually costs

There is no `kind` or single-binary demo, and pretending otherwise wastes an evening. Cozystack assumes Talos Linux and a real disk layout, because the storage and networking layers it manages are not simulated.

The smallest honest lab is **three nodes** — physical hosts, or virtual machines with host CPU passthrough, which is what most people use. Per node: 8 cores, 24 GB RAM, a 50 GB system disk and a 256 GB raw secondary disk for the data pool. That is enough for a couple of tenants, a few tenant Kubernetes clusters and some VMs or databases. Three cheap dedicated servers from any provider will do it; so will one workstation with 96 GB of RAM running three VMs.

The [getting-started tutorial](https://cozystack.io/docs/getting-started/) walks the whole path: Talos install via boot-to-talos, cluster bootstrap with Talm, Cozystack install, first tenant, then a VM and a managed database. Expect an afternoon the first time.

### Path 1: Self-deploy

Cozystack is open source. Install, documentation, community at **[cozystack.io](https://cozystack.io)**. CNCF Slack and Telegram for community support.

Suitable when:
- Your team has Kubernetes expertise to operate
- No commercial support requirement
- Lower-stakes / non-production initially

### Path 2: Ænix-supported deployment

Ænix runs the engagement end-to-end:
- **[Platform Readiness Assessment](/services/platform-readiness-assessment/)** — 14-28 days, written assessment
- **Build engagement** — 3-12 months, integrated team, knowledge transfer
- **Managed engagement** — Ænix operates the platform under contract

Suitable when:
- Production-grade SLA from day 1
- Regulator-aligned deployment with audit-readiness
- Knowledge-transfer acceleration desired

For specific use cases see:
- **[Private cloud consulting](/services/private-cloud-consulting/)** — broad scope
- **[VMware alternative](/alternatives/vmware-alternative/)** — VMware exit
- **[Sovereign AI](/solutions/sovereign-ai/)** — AI workload focus
- **[DORA compliance](/solutions/dora-compliance/)** — financial services

<!-- /BLOCK 5 -->

---

<!-- BLOCK 6: PRICING -->

## Pricing

Cozystack the platform is **free** (Apache 2.0). Anyone can run it.

For commercial Ænix support and the turnkey cloud-in-a-box on top of Cozystack, see **[Ænix Platform](/products/)** — three platforms plus two modules, with four support tiers (Basic from $1,250/month per 10 nodes; Standard $3,000; Plus $5,500; Enterprise Custom).

Entry tier — **Pure Cozystack with Ænix Support** — for product teams running Cozystack on their own / leased servers (Hetzner, OVH, regional bare-metal) without the commercial portal/billing layer.

<div class="cta-row">
  <a class="cta-secondary" href="/pricing/">Pricing details →</a>
  <a class="cta-secondary" href="/products/">Compare platforms →</a>
</div>

<!-- /BLOCK 6 -->

---

<!-- BLOCK 7: FAQ -->

---

<!-- BLOCK 8: BOTTOM CTA -->

<a id="discovery"></a>
<div class="cta-row">
  <a class="cta-primary" href="/contact/">Book a call</a>
</div>

- **[cozystack.io](https://cozystack.io)** — install, documentation, community
- **[Cozystack architecture article](/blog/2026/05/cozystack-introduction-architecture/)**
- **[Ænix Platform](/products/)** — turnkey commercial cloud-in-a-box on top of Cozystack
  - [Public Cloud Platform](/products/public-cloud-platform/) — for hosting providers
  - [Private Cloud Platform](/products/private-cloud-platform/) — for regulated enterprises
  - [Public Cloud Platform](/products/public-cloud-platform/) — for large operators
  - [Developer Self-Service](/products/private-cloud-platform/) — for product engineering teams
  - [AI Platform](/products/ai-platform/) — for AI-heavy organizations
- **[Platform Readiness Assessment](/services/platform-readiness-assessment/)** — engagement methodology

<!-- /BLOCK 8 -->

---

*Cozystack is a CNCF project (currently CNCF Sandbox; CNCF Incubating expected late summer 2026), Apache 2.0. Ænix is the open-core company that created and maintains it, and the maker of Ænix Platform — the turnkey commercial cloud-in-a-box.*

<!-- SEO: title "Cozystack — Open-Source Cloud Platform on Kubernetes | Ænix"
Description (≤155): "Cozystack — open-source cloud platform: KubeVirt VMs, managed databases, S3, GPU, multi-tenant. Apache 2.0, CNCF Project. Built and supported by Ænix."
Word count: ~900.
-->
