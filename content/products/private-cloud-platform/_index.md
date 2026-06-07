---
title: "Private cloud platform — open source, Kubernetes-native, multi-tenant"
description: "Cozystack is the open-source private cloud platform built for service providers, regulated enterprises, and sovereign-cloud builders. KubeVirt-based..."
related_pages: ["/services/private-cloud-consulting", "/solutions/data-sovereignty", "/solutions/cloud-repatriation", "/alternatives/vmware-alternative", "/products/cozystack"]
language: "en"
direct_answer: |
  **A private cloud platform is infrastructure an organization runs on hardware it owns or controls, replacing the VMware Cloud Foundation stack with software it governs end to end. Cozystack is an open-source, Kubernetes-native private cloud platform built for service providers, regulated enterprises, telecom operators, and sovereign-cloud builders. It combines KubeVirt virtualization for VMs and containers, Cilium (eBPF) networking, LINSTOR/DRBD replicated storage, a Tenant CRD multi-tenant control plane, managed databases, S3 object storage, and GPU as a service on bare metal. Cozystack is a CNCF project under Apache 2.0 with no per-CPU or per-core licensing. Aenix, the company behind Cozystack, builds and maintains it and offers the productized Ænix Platform plus commercial support and engineering services on top.**
quick_facts:
  - label: "What it is"
    value: "An open-source, Kubernetes-native private cloud platform that runs VMs and containers on bare metal you own, replacing the VMware Cloud Foundation stack."
  - label: "License"
    value: "Apache 2.0 (no per-CPU / per-core licensing)"
  - label: "Status"
    value: "Cozystack is a CNCF project (Sandbox since 2025-02-28; Incubating expected late summer 2026)"
  - label: "Who it's for"
    value: "Service providers, regulated enterprises (DORA / sectoral compliance), telecom operators, public sector, and AI/GPU operators."
  - label: "Core stack"
    value: "KubeVirt for VMs and containers, Cilium (eBPF) networking, LINSTOR/DRBD replicated storage, Tenant CRD multi-tenancy."
  - label: "Commercial offering"
    value: "Aenix sells the productized Ænix Platform plus support tiers: Basic $1,250/mo (10 nodes), Standard $3,000, Plus $5,500, Enterprise Custom."
  - label: "Deployment options"
    value: "Self-deploy from open source (docs at cozystack.io), or Aenix-supported assessment and implementation; air-gapped installs supported."
faq:
  - q: "What is the difference between Cozystack and Aenix?"
    a: "Cozystack is the open-source platform and a CNCF project, community-governed under Apache 2.0. Aenix is the company that builds and maintains Cozystack, runs it in production, and offers the productized Ænix Platform plus commercial support and professional services. You can run Cozystack entirely without Aenix."
  - q: "How does a Cozystack private cloud differ from VMware Cloud Foundation?"
    a: "Cozystack replaces the full VCF stack with a Kubernetes-native equivalent under Apache 2.0. It uses KubeVirt instead of vSphere/ESXi, Cilium instead of NSX, a Tenant CRD instead of vCloud Director, and has no per-CPU or per-core subscription. The operational footprint is lighter and there is no vendor lock-in."
  - q: "How is Cozystack different from OpenStack?"
    a: "Both are open-source private cloud platforms. OpenStack is older, broader in scope, and more operationally complex; Cozystack is Kubernetes-native, more focused, and has a lighter operational footprint. OpenStack remains strong where deep OpenStack expertise already exists."
  - q: "Does Cozystack support air-gapped deployments?"
    a: "Yes. Cozystack has a documented air-gapped install workflow, making it suitable for classified, defence, healthcare, and other highly restricted environments where outbound connectivity is not permitted."
  - q: "What does it cost to run Cozystack?"
    a: "The Cozystack platform is open source under Apache 2.0 and free to run on your own hardware, with no per-CPU, per-VM, or per-core meter. Aenix support tiers start at Basic $1,250/mo (10 nodes), then Standard $3,000, Plus $5,500, and Enterprise Custom, plus engagement-based professional services."
  - q: "Can Cozystack run both virtual machines and containers?"
    a: "Yes. Cozystack uses KubeVirt to run KVM-based VMs (with live migration, snapshots, and templates) alongside Kubernetes containers on a single Kubernetes API, so you do not need separate VM and container platforms."
---

<!-- BLOCK 1: HERO -->


**Cozystack is the open-source private cloud platform built for service providers, regulated enterprises, and sovereign-cloud builders. KubeVirt-based virtualization, Cilium networking, LINSTOR storage, multi-tenant control plane, managed databases, S3, GPU as a service — on bare metal you own. CNCF Project, Apache 2.0 license, Kubernetes Certified Distribution.**

The Cozystack platform replaces the entire VMware Cloud Foundation stack with a Kubernetes-native equivalent that you operate under your own governance. Aenix is the company behind Cozystack — we build it, ship it in production with banks, telecom operators, and AI/GPU operators across the EU and Central Asia, and back it with engineering services.

<div class="cta-row">
  <a class="cta-primary" href="/contact/?type=architecture-review">Book a 30-minute architecture review</a>
  <a class="cta-secondary" href="https://cozystack.io">cozystack.io →</a>
</div>

<div class="trust-badges">
CNCF Project · Kubernetes Certified Distribution · OpenSSF Best Practices · Apache 2.0
</div>

<!-- /BLOCK 1 -->

---

<!-- BLOCK 2: WHO -->

## Who runs Cozystack as their private cloud platform

- **Service providers** — operating multi-tenant cloud products for enterprise customers
- **Banks and insurers** — regulated workloads under DORA / sectoral compliance
- **Telecom operators** — sovereign-cloud product launches
- **AI / GPU operators** — sustained-utilization GPU workloads where hyperscaler economics don't fit
- **Public-sector and quasi-public** — sovereignty-mandated infrastructure under procurement rules
- **Enterprise platform teams** — internal developer platforms with multi-BU isolation

<!-- /BLOCK 2 -->

---

<!-- BLOCK 3: WHAT'S IN THE PLATFORM -->

## What Cozystack provides as a private cloud platform

<div class="grid-2x2">

**1. Compute — VMs and containers on one platform**
KubeVirt for VMs (KVM-based with live migration, snapshots, templates) plus Kubernetes containers, side by side. No separate VM platform; no separate container platform.

**2. Storage — replicated block + S3 object storage**
LINSTOR (DRBD) for replicated block storage at scale. Rook-Ceph integration for object/file. S3-compatible (SeaweedFS) for application + backup storage.

**3. Networking — eBPF-native**
Cilium as the CNI: L4/L7 policies, observability, MetalLB integration, BGP fabric support. NSX-equivalent functionality without NSX licensing.

**4. Multi-tenant control plane**
Tenant CRD model with nested tenants, per-tenant quotas, RBAC, audit. Suitable for service-provider model (multi-customer) or enterprise multi-BU.

**5. Managed services**
PostgreSQL, MySQL, Redis, RabbitMQ, Kafka, ClickHouse, OpenSearch, MongoDB — first-class managed-service offerings.

**6. GPU as a service**
NVIDIA vGPU for VMs, MIG / time-slicing / passthrough for containers. Validated on A100, H100, H200, L40S, Blackwell.

**7. Observability**
VictoriaMetrics + VictoriaLogs included — low-overhead, sovereignty-friendly. Optional Grafana on top.

**8. Backup and DR**
Velero + S3 + per-database PITR for managed services.

**9. Self-service portal & WHMCS billing**
cozyportal for service provisioning. Production-ready WHMCS integration with two modes (native UI + frontend Cozystack).

</div>

<!-- /BLOCK 3 -->

---

<!-- BLOCK 4: HOW IT'S DIFFERENT -->

## How Cozystack is different from other private cloud platforms

| | VMware (VCF) | OpenStack | OpenShift Virtualization | **Cozystack** |
|---|---|---|---|---|
| **License** | Subscription only | Apache 2.0 | Red Hat commercial | **Apache 2.0** |
| **Compute** | vSphere + ESXi | Nova + KVM | KubeVirt | **KubeVirt** |
| **Multi-tenancy** | vCloud Director | Keystone projects | Namespaces | **Tenant CRD (Kubernetes-native)** |
| **Managed databases** | Limited | DBaaS optional | Available | **First-class** |
| **Self-service portal** | vCD | Horizon | Console | **cozyportal** |
| **Operational footprint** | Heavy (VCF) | Heavy (OpenStack) | Medium (OpenShift) | **Light (Kubernetes-native, single platform)** |
| **Vendor relationship** | Closed source US vendor | Foundation, vendor distros | Red Hat | **Open source, no vendor lock-in** |
| **Best for** | Existing VMware | Large telco / OpenStack-fluent teams | Existing Red Hat customers | **Service providers, regulated multi-tenant, sovereign cloud** |

<!-- /BLOCK 4 -->

---

<!-- BLOCK 5: HOW TO START -->

## How to start with Cozystack

Two paths:

- **Self-deploy** — Cozystack is open source. Architecture, install, and operations documentation: **[cozystack.io](https://cozystack.io)**. CNCF community Slack and Telegram for support.
- **Aenix-supported deployment** — assessment + Phase 2 implementation by Aenix engineers. See **[Private cloud consulting](/services/private-cloud-consulting/)** for engagement details.

For sovereignty / DORA / repatriation / AI-specific motivations, the relevant solution pages:

- **[Data sovereignty](/solutions/data-sovereignty/)**
- **[DORA compliance](/solutions/dora-compliance/)**
- **[Cloud repatriation](/solutions/cloud-repatriation/)**
- **[Sovereign AI](/solutions/sovereign-ai/)**
- **[VMware alternative](/alternatives/vmware-alternative/)**

<!-- /BLOCK 5 -->

---

<!-- BLOCK 6: PROOF -->

## What's running on Cozystack in production

{{< placeholder-logos >}}

Production deployments across the EU, DACH, and Central Asia. Customer base spans service providers, regulated enterprises, telcos, and AI/GPU operators.

> {{< placeholder-quote >}}

<!-- /BLOCK 6 -->

---

<!-- BLOCK 7: PRICING -->

## Pricing

The Cozystack platform is **open source under Apache 2.0** and free to run.

Aenix offers commercial support and engagement tiers:

<div class="pricing-cards-3">

### Community
GitHub issues, public Slack, no SLA.
**Free**

### Standard support
Business-hours response, runbooks, advisory.
****

### Enterprise / 24×7
Production SLA, dedicated TAM, GitOps PR review, incident response.
****

</div>

**Professional services** (engagement-based): Platform Readiness Assessment, build engagement, managed engagement. See **[platform-readiness-assessment](/services/platform-readiness-assessment/)**.

No per-CPU, per-VM, or per-core meter. Hardware + chosen Aenix tier.

<!-- /BLOCK 7 -->

---

<!-- BLOCK 8: FAQ -->

## FAQ

**What's the difference between Cozystack the project and Aenix the company?**
Cozystack is the open-source platform (CNCF Project). Aenix is the company that builds and maintains Cozystack, runs it in production, and offers commercial support and professional services. Cozystack remains community-governed and Apache 2.0; Aenix's services are independent.

**Can we run Cozystack without Aenix?**
Yes — Cozystack is fully open source. Many production deployments are self-managed.

**How is Cozystack different from OpenStack?**
Both are open-source private cloud platforms. OpenStack is older, broader-scope, more operationally complex; Cozystack is Kubernetes-native, more focused, lighter operational footprint. For new deployments in 2026, Cozystack is increasingly the default; OpenStack remains strong where deep OpenStack expertise exists.

**Does Cozystack support air-gapped deployments?**
Yes, with documented install workflow. Suitable for classified, defence, healthcare, and other highly-restricted environments.

**More questions?** See **[private cloud providers comparison](/blog/2026/05/private-cloud-providers-comparison/)** or visit **[cozystack.io](https://cozystack.io)**.

<!-- /BLOCK 8 -->

---

<!-- BLOCK 9: BOTTOM CTA -->

<a id="discovery"></a>
## Get started

/contact/

Or:
- **[cozystack.io](https://cozystack.io)** — install and documentation
- **[Private cloud consulting](/services/private-cloud-consulting/)** — engineering services
- **[Platform Readiness Assessment](/services/platform-readiness-assessment/)** — assessment methodology
- **[Private cloud providers comparison](/blog/2026/05/private-cloud-providers-comparison/)** — full guide

<!-- /BLOCK 9 -->

---

*Aenix is the team behind Cozystack (CNCF Project), and we offer Ænix Platform — our commercial productized offering based on Cozystack, Kubernetes Certified Distribution, OpenSSF Best Practices.*

<!-- SEO: title "Cozystack — Open-Source Private Cloud Platform on Kubernetes | Aenix"
Description (≤155): "Cozystack — open-source private cloud platform: KubeVirt VMs, managed databases, S3, GPU, multi-tenant. CNCF Project. Built by Aenix."
Word count: ~1100.
-->
