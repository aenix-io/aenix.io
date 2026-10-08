---
title: "Cozystack — open-source cloud platform on Kubernetes"
description: "Cozystack is an open-source CNCF cloud platform on Kubernetes for VMs, containers, managed databases, S3 and GPUs. Created by Ænix; support from $1,250."
related_pages: ["/products/cozystack-enterprise-support/", "/pricing/", "/products/", "/products/public-cloud-platform/", "/alternatives/vmware-alternative/"]
language: "en"
quick_facts_style: "rows"
faq_style: "rows"
direct_answer_image: "/images/cozystack-screenshot.png"
direct_answer_image_alt: "Cozystack console — self-service marketplace"
direct_answer: |
  **Cozystack is an open-source cloud platform built on Kubernetes that runs virtual machines, containers, managed databases, S3 object storage, and GPU workloads on bare metal you own, under one Kubernetes-native control plane with multi-tenant isolation. It is licensed Apache 2.0 with no per-CPU or per-core fees, and is a CNCF project (Sandbox since February 2025, CNCF Incubating application in due diligence). Ænix created Cozystack and maintains it together with maintainers from other companies. Cozystack fits service providers, regulated enterprises, telecom operators, and platform teams that want a self-hosted alternative to proprietary virtualization and public cloud. Ænix sells enterprise support for self-run Cozystack (from $1,250 per 10 nodes per month), three commercial platforms built on it, and engagement services.**
quick_facts:
  - label: "What it is"
    value: "An open-source, Kubernetes-native cloud platform running VMs, containers, managed databases, S3, and GPU workloads on bare metal under one multi-tenant control plane."
  - label: "License"
    value: "Apache 2.0 (no per-CPU / per-core licensing)"
  - label: "Status"
    value: "CNCF project (Sandbox since 2025-02-28; Incubating application in due diligence). CNCF-Certified Kubernetes Distribution; accepted into the CNCF Kubernetes AI Conformance program (September 2026); OpenSSF Best Practices badge."
  - label: "Core technology"
    value: "KubeVirt for VMs and containers on one Kubernetes API, Cilium (eBPF) networking, LINSTOR/DRBD and SeaweedFS storage, Tenant CRD multi-tenancy, VictoriaMetrics + VictoriaLogs observability."
  - label: "Who it is for"
    value: "Service providers, regulated enterprises (DORA/NIS2), telecom operators, AI/GPU operators, and enterprise platform teams running self-hosted private cloud."
  - label: "Commercial offering"
    value: "Ænix sells enterprise support for self-run Cozystack and Ænix Public Cloud Platform subscriptions on the same tiers — Basic $1,250, Standard $3,000, Plus $5,500 per 10 nodes per month, Enterprise custom. Private Cloud and AI Platform are quoted per RFP."
faq:
  - q: "Is Cozystack free to use?"
    a: "Yes. Cozystack is open source under Apache 2.0 with no per-CPU or per-core licensing, so anyone can deploy it on their own or leased servers. Ænix's commercial platforms, support and services on top are optional."
  - q: "What is the difference between Cozystack and the Ænix platforms?"
    a: "Cozystack is the open-source, community-governed CNCF project. The three Ænix platforms (Public Cloud, Private Cloud and AI) are commercial offerings built on top of it: they add proprietary modules such as the billing system and the WHMCS integration, a productized installer, delivery services and enterprise SLA."
  - q: "How does Cozystack run both virtual machines and containers?"
    a: "Cozystack uses KubeVirt to run KVM-based virtual machines side by side with containers on the same Kubernetes API. VMs support live migration, snapshots, and templates, so legacy VM workloads and cloud-native containers share one control plane."
  - q: "Can Cozystack be deployed air-gapped?"
    a: "Yes. Cozystack has a documented air-gapped install workflow, which suits regulated and isolated environments where the platform must run without internet access."
  - q: "What hardware does Cozystack support?"
    a: "Cozystack runs on commodity x86 servers. Bare metal is preferred, though running on VMs is possible. Storage options include LINSTOR (DRBD), SeaweedFS, and vendor SAN."
  - q: "We already run Cozystack. Can we buy support?"
    a: "Yes. Enterprise support for self-run Cozystack is sold on the published tiers: Basic $1,250, Standard $3,000 and Plus $5,500 per 10 physical nodes per month on annual billing, and a custom Enterprise tier. These are the same tiers that apply to Ænix Public Cloud Platform subscriptions. Business-hours coverage on Basic and Standard, 24×7 on Plus and Enterprise."
aliases:
  - /cozystack/
hreflang_de: /de/produkte/cozystack/
---

**Cozystack is an open-source cloud platform and a CNCF project, created by Ænix and maintained by Ænix together with maintainers from other companies. It runs virtual machines, containers, managed databases, S3 object storage, and GPU workloads on bare metal you own — under one Kubernetes-native control plane with multi-tenant isolation. Apache 2.0 license, currently CNCF Sandbox (CNCF Incubating application in due diligence), CNCF-Certified Kubernetes Distribution, CNCF Kubernetes AI Conformance, OpenSSF Best Practices badge.**

This page explains Cozystack from Ænix's side: what the project is and how Ænix supports it commercially. The project itself lives at **[cozystack.io](https://cozystack.io)** with documentation, install guides and the community. For the commercial platforms built on Cozystack, see **[the Ænix platforms](/products/)**.

<div class="cta-row">
  <a class="cta-primary" href="/products/cozystack-enterprise-support/">Get enterprise support</a>
  <a class="cta-secondary" href="https://cozystack.io">cozystack.io →</a>
</div>

<div class="trust-badges">
CNCF Project · CNCF-Certified Kubernetes Distribution · CNCF Kubernetes AI Conformance · OpenSSF Best Practices · Apache 2.0
</div>

---

<div class="band-fullbleed band-fullbleed--tint">
<div class="band-fullbleed__inner">

## What's in Cozystack

<div class="capability-grid-3x3">

**KubeVirt VMs**
KVM-based VMs with live migration, snapshots, templates. Side-by-side with containers on the same Kubernetes platform.

**Multi-tenant control plane**
Tenant CRD, nested tenants, per-tenant quotas, RBAC, audit. Built for service-provider model.

**Managed databases**
PostgreSQL (CloudNativePG), MariaDB, MongoDB, ClickHouse, Valkey, OpenSearch, Kafka, NATS, RabbitMQ, Qdrant, FoundationDB.

**S3 object storage**
SeaweedFS-based S3-compatible storage for backups, applications, AI training data.

**GPU as a service**
NVIDIA data-centre GPUs through the NVIDIA GPU Operator: passthrough to VMs, sharing via HAMi. MIG and time-slicing are on the roadmap.

**Cilium networking**
eBPF-native, network policies, MetalLB, BGP. Replaces NSX-equivalent functionality.

**LINSTOR storage**
Replicated block storage via LINSTOR/DRBD (Piraeus operator). SeaweedFS for S3.

**Observability**
VictoriaMetrics + VictoriaLogs included.

**Self-service portal**
Cozystack Dashboard for self-service, with runtime branding for white-labeling.

</div>

<div class="arch-section__fig">
<div class="diagram">
<div class="diagram__node diagram__node--brand"><b>Cozystack</b><div class="diagram__chips"><span>Tenant CRD multi-tenancy</span><span>Cozystack Dashboard</span></div></div>
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

---

## Cozystack the project vs Ænix the company

<div class="advantage-panel">

- **Cozystack** — open-source cloud platform. CNCF project (currently Sandbox; CNCF Incubating application in due diligence). Apache 2.0. Community-governed, with maintainers from several companies. Anyone can deploy, contribute or fork it.
- **Ænix** — the company that created Cozystack and is one of its maintainers. Sells support for Cozystack, three commercial platforms built on it, and engagement services.
- **The Ænix platforms** — [Public Cloud](/products/public-cloud-platform/), [Private Cloud](/products/private-cloud-platform/) and [AI Platform](/products/ai-platform/): Cozystack plus proprietary Ænix modules, a productized installer, delivery and enterprise SLA. **[Compare the platforms →](/products/)**
- **cozystack.io** — official project site. Documentation, install, releases, community. Vendor-neutral.
- **aenix.io** (this site) — Ænix's commercial offering.

</div>

### What Ænix adds on top

Not part of open-source Cozystack, and sold by Ænix:

- **[WHMCS integration](/products/whmcs-integration/)** — a proprietary Ænix module that sells Cozystack services from WHMCS and bills them there. Part of the Ænix Public Cloud Platform subscription.
- **Ænix billing system** — proprietary, part of the Ænix Public Cloud Platform subscription.
- **[Enterprise support](/products/cozystack-enterprise-support/)**, delivery and managed operations.

You can use Cozystack without Ænix. Everything Ænix sells on top is optional.

---

## Who runs Cozystack in production

{{< clients >}}

Production deployments across the EU, DACH and Central Asia, including:

- Service providers running multi-tenant cloud products (publicly: GoHost.kz, HDReady, Beby Cloud, HiKube, UseTech, Cloupard, Cloudsy on Ænix Public Cloud Platform)
- Banks and financial groups running internal private clouds (anonymized [case studies](/case-studies/))
- Telecom integrators and AI / GPU operators running inference and AI platforms
- Enterprise platform teams building internal developer platforms

Cozystack is listed in the [CNCF Landscape](https://landscape.cncf.io).

{{< quote-carousel >}}

---

## How to use Cozystack

### Before you start: what a trial actually costs

There is no `kind` or single-binary demo, and pretending otherwise wastes an evening. Talos Linux is the recommended operating system; Cozystack can also be installed on generic Kubernetes distributions such as k3s, kubeadm or RKE2. Either way it needs a real disk layout, because the storage and networking layers it manages are not simulated.

The smallest honest lab is **three nodes** — physical hosts, or virtual machines with host CPU passthrough, which is what most people use. Per node: 8 cores, 24 GB RAM, a 50 GB system disk and a 256 GB raw secondary disk for the data pool. That is enough for a couple of tenants, a few tenant Kubernetes clusters and some VMs or databases.

The [getting-started tutorial](https://cozystack.io/docs/getting-started/) walks the whole path: Talos install, cluster bootstrap, Cozystack install, first tenant, then a VM and a managed database. Expect an afternoon the first time.

### Path 1: Self-deploy

Cozystack is open source. Install, documentation and community at **[cozystack.io](https://cozystack.io)**. Community support on the #cozystack channel of [Kubernetes Slack](https://kubernetes.slack.com/archives/C06L3CPRVN1) and in Telegram.

Suitable when your team has the Kubernetes expertise to operate it and needs no response-time commitment.

### Path 2: Already running Cozystack? Get enterprise support

If Cozystack already runs in production, Ænix enterprise support puts the maintainers on call for your clusters. It is priced from the published list — Basic $1,250, Standard $3,000, Plus $5,500 per 10 physical nodes per month on annual billing, Enterprise custom — the same tiers that apply to Ænix Public Cloud Platform subscriptions. Tiers cover incident response SLAs, CVE fixes, supervised upgrades from Standard and 24×7 coverage from Plus.

<div class="cta-row">
  <a class="cta-primary" href="/products/cozystack-enterprise-support/">Enterprise support for Cozystack →</a>
  <a class="cta-secondary" href="/pricing/#support">Support tiers and prices →</a>
</div>

### Path 3: Ænix-delivered platform

Ænix runs the engagement end-to-end:
- **[Platform Readiness Assessment](/services/platform-readiness-assessment/)** — 14 or 28 days, fixed price, written report
- **Build** — live in weeks for Ænix Public Cloud Platform at provider scale; a 3-12 month build for Ænix Private Cloud Platform, depending on scope
- **Managed operations** — Ænix operates the platform under contract

For specific use cases see:
- **[Private cloud consulting](/services/private-cloud-consulting/)** — broad scope
- **[VMware alternative](/alternatives/vmware-alternative/)** — VMware exit
- **[Sovereign AI](/solutions/sovereign-ai/)** — AI workload focus
- **[DORA compliance](/solutions/dora-compliance/)** — financial services

---

## Pricing

Cozystack is **free** (Apache 2.0). Anyone can run it.

Enterprise support for self-run Cozystack and Ænix Public Cloud Platform subscriptions use the same four tiers: Basic $1,250, Standard $3,000 and Plus $5,500 per 10 physical nodes per month on annual billing, and a custom Enterprise tier. Ænix Private Cloud Platform and Ænix AI Platform are quoted per RFP.

<div class="cta-row">
  <a class="cta-secondary" href="/pricing/">Pricing details →</a>
  <a class="cta-secondary" href="/products/">Compare platforms →</a>
</div>

---

<a id="discovery"></a>
<div class="cta-row">
  <a class="cta-primary" href="/contact/">Book a call</a>
</div>

- **[cozystack.io](https://cozystack.io)** — install, documentation, community
- **[Cozystack architecture article](/blog/2026/05/cozystack-introduction-architecture/)**
- **[Enterprise support for Cozystack](/products/cozystack-enterprise-support/)** — for teams that already run it
- **[The Ænix platforms](/products/)** — commercial platforms built on Cozystack
  - [Public Cloud Platform](/products/public-cloud-platform/) — for organisations selling cloud, from regional hosters to national operators
  - [Private Cloud Platform](/products/private-cloud-platform/) — for regulated organisations running cloud for themselves, developer self-service included
  - [AI Platform](/products/ai-platform/) — for inference, fine-tuning and RAG on your own GPUs

---

*Cozystack is a CNCF project (currently CNCF Sandbox; CNCF Incubating application in due diligence), Apache 2.0. Ænix created it and maintains it together with maintainers from other companies.*
