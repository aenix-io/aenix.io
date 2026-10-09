---
title: "What is a private cloud platform — open source, Kubernetes-native, multi-tenant"
seo_title: "What is a private cloud platform? Open-source guide"
description: "What a private cloud platform is, what it has to provide, and how the open-source Kubernetes-native option compares with VMware VCF, OpenStack and OpenShift."
primary_keyword: "what is a private cloud platform"
secondary_keywords: ["private cloud platform", "open source private cloud", "kubernetes private cloud", "vmware cloud foundation alternative"]
related_pages: ["/products/private-cloud-platform/", "/services/private-cloud-consulting/", "/solutions/data-sovereignty/", "/solutions/cloud-repatriation/", "/alternatives/vmware-alternative/", "/products/cozystack/"]
language: "en"
quick_facts_style: "rows"
faq_style: "rows"
direct_answer_image: "/images/cozystack-screenshot.png"
direct_answer_image_alt: "Cozystack private-cloud console — self-service marketplace"
direct_answer: |
  **A private cloud platform is the software layer that turns hardware an organization owns or controls into self-service cloud: compute, storage, networking, multi-tenancy, managed data services and a provisioning surface, all governed by the organization itself rather than by a hyperscaler. It is what replaces a VMware Cloud Foundation stack for teams that want the cloud operating model without the cloud landlord. The open-source, Kubernetes-native option in this category is Cozystack — a CNCF Sandbox project under Apache 2.0, with no per-CPU or per-core licensing, combining KubeVirt virtualization for VMs and containers, Cilium (eBPF) networking, LINSTOR/DRBD replicated storage, a Tenant CRD multi-tenant control plane, managed databases, SeaweedFS S3 object storage and NVIDIA GPUs on bare metal. Ænix created Cozystack and co-maintains it with maintainers from other companies; Ænix Private Cloud Platform is the supported build for regulated organisations, quoted per RFP.**
quick_facts:
  - label: "What it is"
    value: "The software layer that turns hardware you own into self-service cloud — compute, storage, networking, multi-tenancy and managed data services under your own governance."
  - label: "Licence"
    value: "Apache 2.0 (no per-CPU / per-core licensing)"
  - label: "Status"
    value: "Cozystack is a CNCF project (Sandbox since 2025-02-28; Incubating application in due diligence)"
  - label: "Who it's for"
    value: "Service providers, regulated enterprises (DORA / sectoral compliance), telecom operators, public sector, and AI/GPU operators."
  - label: "Core stack"
    value: "KubeVirt for VMs and containers, Cilium (eBPF) networking, LINSTOR/DRBD replicated storage, Tenant CRD multi-tenancy."
  - label: "Commercial offering"
    value: "Ænix Private Cloud Platform — the supported build on Cozystack for regulated organisations, built to support DORA and NIS2 work. Quoted per RFP after scoping; see the pricing page."
  - label: "Deployment options"
    value: "Self-deploy from open source (docs at cozystack.io), or an Ænix-supported 14- or 28-day assessment and a 3-12 month build; air-gapped installs supported."
faq:
  - q: "What is the difference between Cozystack and Ænix?"
    a: "Cozystack is the open-source platform and a CNCF Sandbox project under Apache 2.0, with maintainers from several companies. Ænix created Cozystack, co-maintains it, and sells subscriptions — support, commercial modules and services — including Ænix Private Cloud Platform. You can run Cozystack entirely without Ænix."
  - q: "How does a Cozystack private cloud differ from VMware Cloud Foundation?"
    a: "Cozystack replaces the full VCF stack with a Kubernetes-native equivalent under Apache 2.0. It uses KubeVirt instead of vSphere/ESXi, Cilium instead of NSX, a Tenant CRD instead of vCloud Director, and has no per-CPU or per-core subscription. The operational footprint is lighter and there is no vendor lock-in."
  - q: "How is Cozystack different from OpenStack?"
    a: "Both are open-source private cloud platforms. OpenStack is older, broader in scope, and more operationally complex; Cozystack is Kubernetes-native, more focused, and has a lighter operational footprint. OpenStack remains strong where deep OpenStack expertise already exists."
  - q: "Does Cozystack support air-gapped deployments?"
    a: "Yes. Cozystack has a documented air-gapped install workflow, making it suitable for healthcare, public-sector and other restricted environments where outbound connectivity is not permitted."
  - q: "What does it cost to run a private cloud platform on Cozystack?"
    a: "Cozystack itself is open source under Apache 2.0 and free to run on your own hardware, with no per-CPU, per-VM or per-core meter — the cost is hardware plus the platform team. Ænix Private Cloud Platform is quoted per RFP after a Platform Readiness Assessment. Support tiers for self-run Cozystack start at $1,250 per 10 nodes per month (Basic, billed annually) on the published price list."
  - q: "Can Cozystack run both virtual machines and containers?"
    a: "Yes. Cozystack uses KubeVirt to run KVM-based VMs (with live migration, snapshots, and templates) alongside Kubernetes containers on a single Kubernetes API, so you do not need separate VM and container platforms."
hreflang_de: /de/loesungen/private-cloud/
---

<!-- BLOCK 1: HERO -->


**A private cloud platform is the software that turns hardware you own into self-service cloud — compute, storage, networking, multi-tenancy, managed data services and a provisioning surface, under your own governance. This page explains what the category has to provide, and how the open-source Kubernetes-native option compares with VMware Cloud Foundation, OpenStack and OpenShift Virtualization.**

The open-source reference implementation here is [Cozystack](/products/cozystack/) — a CNCF Sandbox project under Apache 2.0, created by Ænix and co-maintained with maintainers from other companies; [nine production deployments](/case-studies/) are written up as case studies.

> **Buying rather than learning?** The supported commercial version for a regulated estate is **[Ænix Private Cloud Platform](/products/private-cloud-platform/)** — architecture, build, support and pricing are on the product page. Heads of infrastructure can start with the [infrastructure guide](/for/head-of-infrastructure/).

<div class="cta-row">
  <a class="cta-primary" href="/products/private-cloud-platform/">See Ænix Private Cloud Platform →</a>
  <a class="cta-secondary" href="https://cozystack.io">cozystack.io →</a>
</div>

<div class="trust-badges">
CNCF Sandbox project · CNCF Certified Kubernetes distribution · OpenSSF Best Practices · Apache 2.0
</div>

<!-- /BLOCK 1 -->

---

<!-- BLOCK 2: WHO -->

## Who runs a private cloud platform

- **Service providers** — operating multi-tenant cloud products for enterprise customers
- **Banks and insurers** — regulated workloads under DORA / sectoral compliance
- **Telecom operators** — sovereign-cloud product launches
- **AI / GPU operators** — sustained-utilization GPU workloads where hyperscaler economics don't fit
- **Public-sector and quasi-public** — sovereignty-mandated infrastructure under procurement rules
- **Enterprise platform teams** — internal developer platforms with multi-BU isolation

<!-- /BLOCK 2 -->

---

<!-- BLOCK 3: WHAT'S IN THE PLATFORM -->

## What a private cloud platform has to provide

<div class="grid-2x2">

**1. Compute — VMs and containers on one platform**
KubeVirt for VMs (KVM-based with live migration, snapshots, templates) plus Kubernetes containers, side by side. No separate VM platform; no separate container platform.

**2. Storage — replicated block + S3 object storage**
LINSTOR (DRBD) for replicated block storage at scale; SeaweedFS for S3-compatible object storage used by applications and backups.

**3. Networking — eBPF-native**
Cilium as the CNI: L4/L7 policies, observability, MetalLB integration, BGP fabric support. NSX-equivalent functionality without NSX licensing.

**4. Multi-tenant control plane**
Tenant CRD model with nested tenants, per-tenant quotas, RBAC, audit. Suitable for service-provider model (multi-customer) or enterprise multi-BU.

**5. Managed data services**
PostgreSQL (CloudNativePG), MariaDB, MongoDB, ClickHouse, Valkey, OpenSearch, Kafka, NATS, RabbitMQ and Qdrant — provisioned as first-class platform services, not bolted-on Helm charts.

**6. GPUs**
NVIDIA data-centre GPUs through the NVIDIA GPU Operator: whole-GPU passthrough to VMs, NVIDIA vGPU for VMs (requires your NVIDIA vGPU licence), whole GPUs to pods via the device plugin, MIG partitions on MIG-capable cards, and time-sliced sharing for pods via HAMi.

**7. Observability**
VictoriaMetrics + VictoriaLogs included — low-overhead, sovereignty-friendly. Optional Grafana on top.

**8. Backup and DR**
Velero + S3 + per-database PITR for managed services. Backups should go to object storage outside the cluster they protect. There is no automated cross-site VM failover; multi-site designs are engineering work.

**9. Self-service portal and billing**
Cozystack Dashboard for service provisioning. Operators that bill tenants add the [WHMCS integration](/products/whmcs-integration/), a proprietary Ænix module that is not part of open-source Cozystack.

</div>

<!-- /BLOCK 3 -->

---

<!-- BLOCK 4: HOW IT'S DIFFERENT -->

## How the options compare

| | VMware (VCF) | OpenStack | OpenShift Virtualization | **Cozystack** |
|---|---|---|---|---|
| **Licence** | Subscription only | Apache 2.0 | Red Hat commercial | **Apache 2.0** |
| **Compute** | vSphere + ESXi | Nova + KVM | KubeVirt | **KubeVirt** |
| **Multi-tenancy** | vCloud Director | Keystone projects | Namespaces | **Tenant CRD (Kubernetes-native)** |
| **Managed databases** | Limited | DBaaS optional | Available | **First-class** |
| **Self-service portal** | vCD | Horizon | Console | **Cozystack Dashboard** |
| **Operational footprint** | Heavy (VCF) | Heavy (OpenStack) | Medium (OpenShift) | **Light (Kubernetes-native, single platform)** |
| **Vendor relationship** | Closed source US vendor | Foundation, vendor distros | Red Hat | **Open source, no vendor lock-in** |
| **Best for** | Existing VMware | Large telco / OpenStack-fluent teams | Existing Red Hat customers | **Service providers, regulated multi-tenant, sovereign cloud** |

<!-- /BLOCK 4 -->

---

<!-- BLOCK 5: HOW TO START -->

## How to start

Two paths:

- **Self-deploy** — Cozystack is open source. Architecture, install and operations documentation: **[cozystack.io](https://cozystack.io)**. Community support in #cozystack on Kubernetes Slack and on Telegram.
- **Buy the supported product** — **[Ænix Private Cloud Platform](/products/private-cloud-platform/)** adds an architecture built to support DORA and NIS2 work, multi-DC designs and runbooks, opt-in volume encryption with key handling designed with you, audit logging with configurable retention, SLA-backed support and developer self-service. Delivery runs through **[private cloud consulting](/services/private-cloud-consulting/)**.

For sovereignty / DORA / repatriation / AI-specific motivations, the relevant solution pages:

- **[Data sovereignty](/solutions/data-sovereignty/)**
- **[DORA compliance](/solutions/dora-compliance/)**
- **[Cloud repatriation](/solutions/cloud-repatriation/)**
- **[Sovereign AI](/solutions/sovereign-ai/)**
- **[VMware alternative](/alternatives/vmware-alternative/)**

<!-- /BLOCK 5 -->

---

<!-- BLOCK 6: PROOF -->

## Companies running platforms built with Ænix

{{< clients >}}

Hosting providers running Ænix Public Cloud Platform in production. Regulated, telecom and GPU deployments are written up in anonymised form on the [case studies page](/case-studies/).

{{< quote-carousel >}}

<!-- /BLOCK 6 -->

---

<!-- BLOCK 7: COST -->

## What it costs

Cozystack itself is **open source under Apache 2.0** and free to run: no per-CPU, per-VM or per-core meter. The real cost of a private cloud platform is hardware plus the platform team that operates it — which is what an assessment sizes.

Ænix sells two things on top: subscription support for organisations running Cozystack themselves, from $1,250 per 10 nodes per month on the published price list, and **[Ænix Private Cloud Platform](/products/private-cloud-platform/)** as a programme for regulated estates, quoted per RFP. Both are on the **[pricing page](/pricing/)**.

<!-- /BLOCK 7 -->

---

<!-- BLOCK 8: FAQ -->

---

<!-- BLOCK 9: BOTTOM CTA -->

<a id="discovery"></a>
## Get started

<div class="cta-row">
  <a class="cta-primary" href="/contact/">Book a call</a>
</div>

Or:
- **[Ænix Private Cloud Platform](/products/private-cloud-platform/)** — the supported product for regulated estates
- **[cozystack.io](https://cozystack.io)** — install and documentation
- **[Private cloud consulting](/services/private-cloud-consulting/)** — engineering services
- **[Platform Readiness Assessment](/services/platform-readiness-assessment/)** — assessment methodology
- **[Private cloud providers comparison](/blog/2026/05/private-cloud-providers-comparison/)** — full guide

<!-- /BLOCK 9 -->

---

*Ænix created Cozystack (CNCF Sandbox project, CNCF Certified Kubernetes distribution, OpenSSF Best Practices) and co-maintains it. Ænix sells three platforms on that engine — Public Cloud Platform, Private Cloud Platform and AI Platform.*


