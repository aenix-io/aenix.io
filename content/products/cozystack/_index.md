---
title: "Cozystack — open-source cloud platform on Kubernetes"
description: "Cozystack is the open-source cloud platform Aenix created and maintains, and a CNCF project. It runs virtual machines, containers, managed databases, S3..."
related_pages: ["/products/aenix-platform", "/products/aenix-platform/isp-edition", "/services/platform-engineering", "/services/private-cloud-consulting", "/alternatives/vmware-alternative"]
language: "en"
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
    value: "KubeVirt for VMs and containers on one Kubernetes API, Cilium (eBPF) networking, LINSTOR/DRBD and Rook-Ceph storage, Tenant CRD multi-tenancy, VictoriaMetrics + VictoriaLogs observability."
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
    a: "Cozystack is the open-source, community-governed CNCF project. Ænix Platform is Aenix's turnkey commercial cloud-in-a-box built on top of Cozystack, adding a hosting panel, billing, portals, payments, support, a productized installer, and enterprise SLA across five editions."
  - q: "How does Cozystack run both virtual machines and containers?"
    a: "Cozystack uses KubeVirt to run KVM-based virtual machines side by side with containers on the same Kubernetes API. VMs support live migration, snapshots, and templates, so legacy VM workloads and cloud-native containers share one control plane."
  - q: "Can Cozystack be deployed air-gapped?"
    a: "Yes. Cozystack has a documented air-gapped install workflow, which suits classified, healthcare-restricted, and defence-adjacent environments where the platform must run without internet access."
  - q: "What hardware does Cozystack support?"
    a: "Cozystack runs on commodity x86 servers, with ARM support emerging. Bare metal is preferred, though running on VMs is possible. Storage options include LINSTOR (DRBD), Rook-Ceph, and vendor SAN."
  - q: "Does Aenix provide commercial support?"
    a: "Yes. Aenix offers Platform Readiness Assessments, build engagements, and managed engagements, with support tiers from Basic ($1,250/month per 10 nodes) up to Enterprise Custom. Direct support covers EU, DACH, and Central Asia time zones, with other regions via partners."
---

<!-- BLOCK 1: HERO -->


**Cozystack is the open-source cloud platform Aenix created and maintains, and a CNCF project. It runs virtual machines, containers, managed databases, S3 object storage, and GPU workloads on bare metal you own — under one Kubernetes-native control plane with multi-tenant isolation. Apache 2.0 license, currently CNCF Sandbox (CNCF Incubating expected late summer 2026), CNCF-Certified Kubernetes Distribution, OpenSSF Best Practices badge.**

This page describes Cozystack as Aenix's open-source product. The open-source project itself lives at **[cozystack.io](https://cozystack.io)** with documentation, install guides, and the community. For the turnkey commercial cloud-in-a-box on top of Cozystack, see **[Ænix Platform](/products/aenix-platform/)** with its five editions.

<div class="cta-row">
  <a class="cta-primary" href="/contact/?type=architecture-review">Book an architecture review</a>
  <a class="cta-secondary" href="https://cozystack.io">cozystack.io →</a>
</div>

<div class="trust-badges">
CNCF Project · CNCF-Certified Kubernetes Distribution · OpenSSF Best Practices · Apache 2.0
</div>

<!-- /BLOCK 1 -->

---

<!-- BLOCK 2: WHAT'S IN COZYSTACK -->

## What's in Cozystack

<div class="capability-grid-3x3">

**KubeVirt VMs**
KVM-based VMs with live migration, snapshots, templates. Side-by-side with containers on the same Kubernetes platform.

**Multi-tenant control plane**
Tenant CRD, nested tenants, per-tenant quotas, RBAC, audit. Built for service-provider model.

**Managed databases**
PostgreSQL, MySQL, Redis, RabbitMQ, Kafka, ClickHouse, OpenSearch, MongoDB.

**S3 object storage**
SeaweedFS-based S3-compatible storage for backups, applications, AI training data.

**GPU as a service**
NVIDIA vGPU for VMs, MIG / time-slicing / passthrough for containers. A100, H100, H200, L40S, Blackwell validated.

**Cilium networking**
eBPF-native, network policies, MetalLB, BGP. Replaces NSX-equivalent functionality.

**LINSTOR storage**
Replicated block storage at scale. Rook-Ceph also supported.

**Observability**
VictoriaMetrics + VictoriaLogs included.

**Self-service portal & WHMCS**
cozyportal for self-service. Production-ready WHMCS billing integration with two modes.

</div>

<!-- /BLOCK 2 -->

---

<!-- BLOCK 3: PROJECT VS PRODUCT -->

## Cozystack the project vs Aenix the company vs Ænix Platform the product

- **Cozystack** — open-source platform. CNCF project (currently Sandbox; CNCF Incubating expected late summer 2026). Apache 2.0. Community-governed. Anyone can deploy, contribute, fork.
- **Aenix** — the open-core company that created and maintains Cozystack. Largest single contributor. Maker of Ænix Platform.
- **Ænix Platform** — Aenix's turnkey commercial cloud-in-a-box on top of Cozystack. Five editions (Public Cloud / ISP / Enterprise / IDP / AI/ML) matched to buyer profile. Adds hosting panel, billing, portals, payments, support, productized installer, enterprise SLA. **[Explore Ænix Platform →](/products/aenix-platform/)**.
- **cozystack.io** — official project site. Documentation, install, releases, community. Vendor-neutral, CNCF-aligned.
- **aenix.io** (this site) — Aenix's commercial offering and product surface.

You can use Cozystack open-source without Aenix; Aenix's commercial offering (Ænix Platform + engagement services) is optional. Many customers choose Ænix Platform for the turnkey package — billing, portals, payments, support — without building those layers themselves.

<!-- /BLOCK 3 -->

---

<!-- BLOCK 4: WHO USES COZYSTACK -->

## Who runs Cozystack in production

{{< placeholder-logos >}}

Production deployments across the EU, DACH, and Central Asia. Customer base spans:

- Service providers running multi-tenant cloud products (publicly: GoHost.kz, HDReady, Beby Cloud, HiKube, UseTech, Cloupard, Cloudsy on Ænix Platform ISP Edition)
- Banks and insurers under DORA / sectoral regulation (NDA until mid-2027)
- Telecom operators with sovereign-cloud product launches (NDA)
- AI / GPU operators with sustained inference workloads (NDA)
- Public-sector and quasi-public organizations (NDA)
- Enterprise platform teams building internal developer platforms

Cozystack is also listed in the [CNCF Landscape](https://landscape.cncf.io) — community production users beyond Aenix's customer base.

> {{QUOTE_1 — pending permission}}

<!-- /BLOCK 4 -->

---

<!-- BLOCK 5: HOW TO USE COZYSTACK -->

## How to use Cozystack

### Path 1: Self-deploy

Cozystack is open source. Install, documentation, community at **[cozystack.io](https://cozystack.io)**. CNCF Slack and Telegram for community support.

Suitable when:
- Your team has Kubernetes expertise to operate
- No commercial support requirement
- Lower-stakes / non-production initially

### Path 2: Aenix-supported deployment

Aenix runs the engagement end-to-end:
- **[Platform Readiness Assessment](/services/platform-readiness-assessment/)** — 14-28 days, written assessment
- **Build engagement** — 3-12 months, integrated team, knowledge transfer
- **Managed engagement** — Aenix operates the platform under contract

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

For commercial Aenix support and the turnkey cloud-in-a-box on top of Cozystack, see **[Ænix Platform](/products/aenix-platform/)** — five editions matched to buyer profile, with four support tiers (Basic from $1,250/month per 10 nodes; Standard $3,000; Plus $5,500; Enterprise Custom).

Entry tier — **Pure Cozystack with Ænix Support** — for product teams running Cozystack on their own / leased servers (Hetzner, OVH, regional bare-metal) without the commercial portal/billing layer.

[Pricing details →](/pricing/) | [All editions →](/products/aenix-platform/)

<!-- /BLOCK 6 -->

---

<!-- BLOCK 7: FAQ -->

## FAQ

**Cozystack vs OpenStack vs OpenShift?**
See **[Cozystack architecture article](/blog/2026/05/cozystack-introduction-architecture/)** for detailed comparison. Briefly: Cozystack is Kubernetes-native (vs OpenStack's older architecture); open-source (vs OpenShift's Red Hat subscription); multi-tenant by design (vs vanilla Kubernetes); modern foundation (vs legacy hypervisor stacks).

**Can we deploy Cozystack air-gapped?**
Yes. Documented air-gap install workflow. Suitable for classified, healthcare-restricted, defence-adjacent.

**What hardware does Cozystack support?**
Commodity x86 servers. ARM support emerging. Bare metal preferred; VMs hosting Cozystack also possible. Storage: LINSTOR (DRBD), Rook-Ceph, vendor SAN supported.

**Does Aenix provide commercial support globally?**
Aenix-direct support: EU + DACH + Central Asia time zones. Other regions covered via partner network or extended-hours arrangements.

**More questions?** See **[cozystack.io](https://cozystack.io)** for documentation, or **[talk to us](#discovery)**.

<!-- /BLOCK 7 -->

---

<!-- BLOCK 8: BOTTOM CTA -->

<a id="discovery"></a>
/contact/

- **[cozystack.io](https://cozystack.io)** — install, documentation, community
- **[Cozystack architecture article](/blog/2026/05/cozystack-introduction-architecture/)**
- **[Ænix Platform](/products/aenix-platform/)** — turnkey commercial cloud-in-a-box on top of Cozystack
  - [ISP Edition](/products/aenix-platform/isp-edition/) — for hosting providers
  - [Enterprise Edition](/products/aenix-platform/enterprise-edition/) — for regulated enterprises
  - [Public Cloud Edition](/products/aenix-platform/public-cloud-edition/) — for large operators
  - [IDP Edition](/products/aenix-platform/idp-edition/) — for product engineering teams
  - [AI/ML Edition](/products/aenix-platform/ai-ml-edition/) — for AI-heavy organizations
- **[Platform Readiness Assessment](/services/platform-readiness-assessment/)** — engagement methodology

<!-- /BLOCK 8 -->

---

*Cozystack is a CNCF project (currently CNCF Sandbox; CNCF Incubating expected late summer 2026), Apache 2.0. Aenix is the open-core company that created and maintains it, and the maker of Ænix Platform — the turnkey commercial cloud-in-a-box.*

<!-- SEO: title "Cozystack — Open-Source Cloud Platform on Kubernetes | Aenix"
Description (≤155): "Cozystack — open-source cloud platform: KubeVirt VMs, managed databases, S3, GPU, multi-tenant. Apache 2.0, CNCF Project. Built and supported by Aenix."
Word count: ~900.
-->
