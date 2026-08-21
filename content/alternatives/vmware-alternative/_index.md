---
title: "The open-source VMware alternative for service providers and regulated enterprises"
description: "Replace vSphere, vCenter, vSAN, NSX, and the rest of VCF with one Kubernetes-native platform on your own bare metal — no per-CPU licensing, no Broadcom..."
related_pages:
  - /migration/vmware
  - /alternatives/vmware-alternatives
  - /products/aenix-platform/isp-edition/
  - /products/aenix-platform/enterprise-edition/
  - /products/aenix-platform/public-cloud-edition/
  - /products/cozystack
  - /pricing
language: "en"
quick_facts_style: "rows"
faq_style: "rows"
direct_answer: |
  **Cozystack is an open-source, Kubernetes-native VMware alternative that replaces the full VMware Cloud Foundation stack — vSphere/ESXi, vCenter, vSAN, NSX, vCloud Director, and Site Recovery Manager — on your own bare metal. It is built for service providers exiting VMware Cloud Director and regulated enterprises exiting VCF. It runs virtual machines through KubeVirt (KVM-based, with live migration and snapshots) alongside containers on one Kubernetes API, uses Cilium (eBPF) for networking, LINSTOR or Ceph for storage, and a Tenant CRD for native multi-tenancy. Licensed Apache 2.0 with no per-CPU, per-VM, or per-core metering. Aenix, the company behind Cozystack, productizes it as the Ænix Platform and runs the VMware migration end to end.**
quick_facts:
  - label: "What it is"
    value: "An open-source, Kubernetes-native platform that replaces the full VMware Cloud Foundation stack (vSphere, vCenter, vSAN, NSX, vCloud Director, SRM) on bare metal."
  - label: "License"
    value: "Apache 2.0 (no per-CPU / per-core licensing)"
  - label: "Status"
    value: "Cozystack is a CNCF project (Sandbox since 2025-02-28; Incubating expected late summer 2026)"
  - label: "Who it is for"
    value: "Service providers exiting VMware Cloud Director and regulated enterprises exiting VMware Cloud Foundation."
  - label: "Architecture"
    value: "KubeVirt VMs + containers on one Kubernetes API, Cilium (eBPF) networking, LINSTOR or Ceph storage, Tenant CRD multi-tenancy."
  - label: "Migration"
    value: "Six-step path: discover, deploy in parallel, migrate VMs via KubeVirt CDI, cut over networking and storage, validate DR, decommission VMware."
  - label: "Commercial model"
    value: "OSS is free; Ænix Platform tiers start at Basic $1,250/mo (10 nodes), Standard $3,000, Plus $5,500, Enterprise custom."
faq:
  - q: "Is Cozystack a true one-to-one replacement for VMware Cloud Foundation?"
    a: "It maps the full VCF stack: KubeVirt for vSphere/ESXi, Kubernetes API plus cozyportal for vCenter and vCloud Director, LINSTOR or Ceph for vSAN, Cilium for NSX, and Velero plus S3 plus PostgreSQL PITR for Site Recovery Manager. Networking and multi-tenancy need redesign rather than literal 1:1 mapping, which the architecture review covers."
  - q: "How does Cozystack avoid Broadcom-style renewal increases?"
    a: "Cozystack is licensed Apache 2.0 with no per-CPU, per-VM, or per-core meter, so the open-source code stays usable regardless of any support contract. Your spend is hardware plus an optional Aenix engagement, not a subscription tied to socket counts."
  - q: "What replaces ESXi in Cozystack?"
    a: "KubeVirt, a KVM-based virtualization layer that runs on Talos and provides live migration and snapshots. It runs VMs and containers on the same Kubernetes API, so legacy VM workloads and cloud-native workloads share one control plane."
  - q: "Can Cozystack run in an air-gapped or sovereign environment?"
    a: "Yes. Air-gapped installation is supported and documented with no extra licensing, there is no phone-home telemetry (opt-in, disabled by default), and it runs on your own bare metal with an EU support team. This supports DORA and NIS2 operational-resilience and supplier-risk requirements."
  - q: "What does it cost compared to VMware?"
    a: "The Cozystack platform is free and open source. Aenix sells the productized Ænix Platform with support tiers starting at Basic $1,250/mo for 10 nodes, then Standard $3,000, Plus $5,500, and Enterprise custom, plus professional services for migration. VMware VCF pricing is quote-driven and non-public."
  - q: "Does Cozystack support GPUs for AI and VDI workloads?"
    a: "Yes. It provides NVIDIA vGPU for VMs and MIG/time-slicing for containers, validated on A100, H100, H200, L40S, and Blackwell GPUs, so AI training and GPU-as-a-service workloads run alongside general virtualization."
---

<!-- BLOCK 1: HERO -->

**Replace vSphere, vCenter, vSAN, NSX, and the rest of VCF with one Kubernetes-native platform on your own bare metal — no per-CPU licensing, no Broadcom renewal cliff, no US-vendor lock-in.**

Cozystack is a CNCF project. Aenix builds it, operates it in production with hosting providers and banks, and runs the migration end-to-end.

> **Pairs with:** **[Ænix Platform ISP Edition](/products/aenix-platform/isp-edition/)** for hosting providers (VMware Cloud Director exit); **[Enterprise Edition](/products/aenix-platform/enterprise-edition/)** for regulated enterprises (VMware Cloud Foundation exit); **[Public Cloud Edition](/products/aenix-platform/public-cloud-edition/)** for large operators. Free [VMware Migration Checklist →](/resources/vmware-migration-checklist/).

<div class="cta-row">
  <a class="cta-primary" href="/contact/?type=architecture-review">Book a review</a>
  <a class="cta-secondary" href="/migration/vmware">Migration path →</a>
</div>

<div class="trust-badges">
CNCF Project · Kubernetes Certified Distribution · OpenSSF Best Practices · Apache 2.0
</div>

<!-- /BLOCK 1 -->

---


---

<!-- BLOCK 2: VENDOR LANDSCAPE (compact) -->

## Where Cozystack fits in the VMware-alternative market

| Vendor | Stack model | Best for |
|---|---|---|
| **Cozystack** | Open-source, Kubernetes-native, multi-tenant | Service providers, regulated enterprises, sovereign cloud |
| Nutanix AHV | Proprietary HCI | VM-only enterprise estates |
| Proxmox VE | Open-source KVM/LXC | SMB and labs |
| Scale Computing HC3 | Appliance HCI | ROBO/edge |
| OpenShift Virtualization | KubeVirt + OpenShift licensing | Existing Red Hat customers |
| OpenStack | Mature open-source IaaS | Teams with dedicated platform engineering |
| Azure Stack HCI | Microsoft-licensed Hyper-V | Microsoft-aligned shops |

For a head-to-head listicle: **[VMware alternatives 2026](/alternatives/vmware-alternatives)**.

<!-- /BLOCK 2 -->

---

<!-- BLOCK 3: WHY (4 cards, one sentence each) -->

## Why teams replace VMware in 2026

<div class="grid-2x2">

**1. Subscription-only economics, post-Broadcom**
Perpetual licenses retired, mandatory VCF bundling, renewals subscription-only.

**2. Stack-wide vendor lock-in**
vSphere, NSX, vSAN, vCD, Aria — replacing one means rebuilding the rest.

**3. Sovereignty and regulator pressure**
DORA, NIS2, and on-prem mandates make a closed US hypervisor a documented operational risk.

**4. Open-source velocity has overtaken VMware's roadmap**
KubeVirt, Cilium, LINSTOR, and Flux ship faster as community projects than Broadcom can match in the open.

</div>

{{< factoid number="2–5×" label="renewal price increases observed on VMware VCF bundles after the Broadcom acquisition" >}}

<!-- /BLOCK 3 -->

---

<!-- BLOCK 4: WHAT YOU GET (capability list) -->

<div class="band-fullbleed band-fullbleed--tint">
<div class="band-fullbleed__inner">

## What Cozystack gives you instead

<div class="capability-grid">

- **Virtual machines** — KubeVirt, KVM-based, live migration, snapshots
- **Tenant Kubernetes** — every tenant gets their own real K8s cluster
- **Managed databases** — PostgreSQL, MySQL, Redis, RabbitMQ, Kafka, ClickHouse, OpenSearch, MongoDB
- **S3-compatible object storage** — for backups, AI training data, applications
- **GPU as a service** — NVIDIA vGPU for VMs, MIG/time-slicing for containers (validated A100, H100, H200, L40S, Blackwell)
- **Multi-tenant control plane** — Tenant CRD, nested tenants, per-tenant quotas
- **Observability** — VictoriaMetrics + VictoriaLogs (no Prometheus/Loki licensing trap)
- **Backup & DR** — Velero + S3 + per-database PITR
- **Self-service portal & WHMCS billing** — production-ready, two integration modes

</div>

Runs on your bare metal — no public-cloud dependency.

</div>
</div>

<!-- /BLOCK 4 -->

---

<!-- BLOCK 5: ARCHITECTURE MAPPING (table only — no narrative) -->

## VMware → Cozystack: one-to-one component mapping

<div class="arch-section__fig">
<div class="diagram">
<div class="diagram__node"><b>VMware Cloud Foundation</b><div class="diagram__chips"><span>vSphere / vCenter</span><span>vSAN / NSX</span><span>Per-CPU subscription</span></div></div>
<div class="diagram__conn">migrate via</div>
<div class="diagram__node"><b>Six-step migration</b><div class="diagram__chips"><span>KubeVirt CDI</span><span>Parallel deploy</span><span>Cilium / LINSTOR cutover</span></div></div>
<div class="diagram__conn">lands on</div>
<div class="diagram__node diagram__node--brand"><b>Cozystack</b><div class="diagram__chips"><span>KubeVirt VMs + containers</span><span>Cilium (eBPF)</span><span>LINSTOR or Ceph</span><span>Tenant CRD</span></div></div>
<div class="diagram__conn">delivers</div>
<div class="diagram__node"><b>No per-CPU licensing</b><div class="diagram__chips"><span>Apache 2.0</span><span>Your bare metal</span><span>EU support team</span></div></div>
</div>
</div>

| VMware / VCF | Cozystack equivalent |
|---|---|
| vSphere / ESXi | KubeVirt on Talos |
| vCenter | Kubernetes API + cozyportal |
| vSAN | LINSTOR or Rook-Ceph |
| NSX | Cilium (eBPF) |
| vCloud Director | Tenant CRD + cozyportal |
| vRealize / Aria Operations | VictoriaMetrics + VictoriaLogs + Grafana |
| Site Recovery Manager | Velero + S3 + PostgreSQL PITR |
| Tanzu Kubernetes Grid | Tenant Kubernetes (native) |
| vRealize Automation | ApplicationDefinition + portal catalog |
| VMware Cloud Foundation | Cozystack |

Two layers need redesign rather than 1:1 mapping: **networking** (Cilium ≠ NSX) and **multi-tenancy** (Tenant CRD ≠ vCD orgs). Both are addressed in the architecture review.

<!-- /BLOCK 5 -->

---

<!-- BLOCK 6: MIGRATION (visual stepper, 1-line each) -->

## Migration path — six steps

<div class="engagement-steps">

  <div class="engagement-step">
    <div class="engagement-step__number">1</div>
    <h3 class="engagement-step__title">Discover</h3>
    <p class="engagement-step__body">vSphere/VCF inventory, dependencies, workload buckets.</p>
  </div>

  <div class="engagement-step">
    <div class="engagement-step__number">2</div>
    <h3 class="engagement-step__title">Deploy in parallel</h3>
    <p class="engagement-step__body">Cozystack on new or repurposed hardware.</p>
  </div>

  <div class="engagement-step">
    <div class="engagement-step__number">3</div>
    <h3 class="engagement-step__title">Migrate VMs</h3>
    <p class="engagement-step__body">KubeVirt CDI + dedicated migration scripts, Windows VM cleanup automated.</p>
  </div>

  <div class="engagement-step">
    <div class="engagement-step__number">4</div>
    <h3 class="engagement-step__title">Cut over networking and storage</h3>
    <p class="engagement-step__body">Cilium policy parity, LINSTOR/Ceph import.</p>
  </div>

  <div class="engagement-step">
    <div class="engagement-step__number">5</div>
    <h3 class="engagement-step__title">Validate and cut over DR</h3>
    <p class="engagement-step__body">Velero playbook replaces SRM.</p>
  </div>

  <div class="engagement-step">
    <div class="engagement-step__number">6</div>
    <h3 class="engagement-step__title">Decommission VMware</h3>
    <p class="engagement-step__body">Repurpose hardware as licenses lapse.</p>
  </div>

</div>

OpenStack, CloudStack, and Proxmox migrations follow the same playbook with different image-import and network-mapping steps.

<!-- /BLOCK 6 -->

---

<!-- BLOCK 7: MULTI-TENANCY / SOVEREIGNTY (bullets) -->

## Multi-tenancy and sovereignty

- **Tenant CRD** — each tenant is a Kubernetes-native isolation boundary, with quotas, RBAC, billing scope, and observability scope
- **Nested tenants** — for resellers and BU separation
- **Air-gapped install** — supported, documented, no extra licensing
- **No phone-home telemetry** — opt-in, disabled by default
- **DORA / NIS2-aligned controls** — operational resilience, supplier-risk transparency
- **No-kubectl support model** — Aenix advisory + GitOps PR review; we don't need access to your production environment

<!-- /BLOCK 7 -->

---

<!-- BLOCK 8: COMPARISON TABLE (kept full — high signal density) -->

## Cozystack vs VMware — at a glance

| | VMware (VCF, post-Broadcom) | Cozystack + Aenix |
|---|---|---|
| **License model** | Subscription only (VCF bundles) | Apache 2.0 + optional Aenix support tier |
| **Renewal risk** | 2–5× increases observed | Predictable; OSS code remains usable regardless |
| **Compute** | vSphere / ESXi | KubeVirt (KVM-based) |
| **Storage** | vSAN | LINSTOR or Ceph |
| **Network** | NSX | Cilium (eBPF, CNCF Graduated) |
| **Multi-tenancy** | vCloud Director | Tenant CRD (Kubernetes-native) |
| **Backup / DR** | Site Recovery Manager | Velero + S3 + PostgreSQL PITR |
| **Observability** | vRealize / Aria (separate license) | VictoriaMetrics + VictoriaLogs (included) |
| **GPU for VMs** | NVIDIA vGPU under Horizon | NVIDIA vGPU + KubeVirt |
| **Sovereignty** | Closed source, US vendor | Open source, on-prem, EU support team |
| **Air-gap install** | Supported (extra licensing) | Supported (no extra cost) |
| **Pricing transparency** | Quote-driven, non-public | Public on aenix.io/pricing; OSS is free |

<!-- /BLOCK 8 -->

---

<!-- BLOCK 9: CUSTOMER PROOF (compact) -->

## Running in production with

{{< clients >}}

{{< quote-carousel >}}
> *— {{NAME_1}}, {{TITLE_1}}*

{{< quote-carousel >}}
> *— {{NAME_2}}, {{TITLE_2}}*

Service providers, telecom operators, regional sovereign clouds, GPU/AI operators, regulated enterprises across the EU and North America.

<!-- /BLOCK 9 -->

---

<!-- BLOCK 10: PRICING -->

## Pricing

The Cozystack platform is open source and free to run. Aenix offers:

- **Community** — GitHub issues, public Slack, no SLA
- **Standard** — business-hours response, runbooks, advisory
- **Enterprise / 24×7** — production SLA, dedicated TAM, GitOps PR review
- **Professional Services** — VMware migration assessment, deployment, training

No per-CPU, per-VM, or per-core meter. Your spend is hardware + Aenix engagement.

<!-- /BLOCK 10 -->

---

<!-- BLOCK 11: FAQ (rendered from frontmatter faq: — single source of truth) -->


More questions about Windows VMs, vCD migration, hardware reuse, GPU support, and migration timelines: see the **[full VMware replacement guide on our blog](/blog/2026/05/vmware-replacement-after-broadcom/)** or **[talk to us](#contact)**.

<!-- /BLOCK 11 -->

---

<!-- BLOCK 12: BOTTOM CTA -->

## Three ways to start

<div class="cta-cards">

**Architecture review (60 min)**
Free. Your stack against Cozystack mapping, written assessment with workload buckets and risk flags.

**Migration assessment (paid)**
Deeper inventory, 4-6 week engagement, full migration plan with timeline, budget, and success criteria.

**Production pilot**
Run a workload cohort on Cozystack hardware we provision, parallel to your VMware estate, validated against your application owners.

</div>

Or read the **[full VMware replacement guide on our blog](/blog/2026/05/vmware-replacement-after-broadcom/)** · See **[the VMware migration path](/migration/vmware)** · Compare to the broader market in **[VMware alternatives 2026](/alternatives/vmware-alternatives)**.

<!-- /BLOCK 12 -->

---

<!-- BLOCK 13: FOOTER TRUST STRIP -->

*Cozystack is a CNCF Project. Kubernetes Certified Distribution. OpenSSF Best Practices. Aenix is the company behind Cozystack.*

<!-- /BLOCK 13 -->

<!--
SEO meta tags (frontmatter / page header):
- title: "VMware Alternative — Open-Source, Sovereign, Kubernetes-Native | Aenix"
- description: "Replace vSphere, vCenter, vSAN, NSX, and VCF with Cozystack — the open-source VMware alternative for service providers and regulated enterprises. Architecture review on demand."
- og:image: 1200×630 PNG, brand mark + claim, replace site default
- canonical: this URL
- hreflang en (default), de (when DE locale launches at /de/alternativen/vmware-alternative)

JSON-LD on page (handled by aenix.io site framework):
- WebPage / BreadcrumbList: Home → Alternatives → VMware Alternative
- FAQPage from BLOCK 11 (4 questions)
-->

