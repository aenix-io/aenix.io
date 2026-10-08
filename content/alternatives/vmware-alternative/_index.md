---
title: "The open-source VMware alternative for service providers and regulated enterprises"
seo_title: "Open-source VMware alternative: Cozystack on bare metal"
primary_keyword: "vmware alternative"
secondary_keywords:
  - "open source vmware alternative"
  - "vmware replacement"
  - "vmware cloud director alternative"
description: "An open-source VMware alternative: replace vSphere, vCenter, vSAN and NSX with one Kubernetes-native platform on your own bare metal, with no per-CPU licensing."
related_pages:
  - /migration/vmware/
  - /alternatives/vmware-alternatives/
  - /compare/cozystack-vs-vmware/
  - /products/public-cloud-platform/
  - /products/private-cloud-platform/
  - /products/cozystack/
  - /pricing/
language: "en"
quick_facts_style: "rows"
faq_style: "rows"
direct_answer: |
  **Cozystack is an open-source, Kubernetes-native VMware alternative that covers the core VMware Cloud Foundation stack — vSphere/ESXi, vCenter, vSAN, NSX and vCloud Director — on your own bare metal, with backups and a documented DR runbook in place of Site Recovery Manager. It is built for service providers exiting VMware Cloud Director and regulated enterprises exiting VCF. It runs virtual machines through KubeVirt (KVM-based, with live migration and snapshots) alongside containers on one Kubernetes API, uses Cilium (eBPF) for networking, LINSTOR/DRBD for replicated block storage and SeaweedFS for object storage, and a Tenant CRD for native multi-tenancy. Licensed Apache 2.0 with no per-CPU, per-VM, or per-core metering. Ænix, the company that created Cozystack and co-maintains it, builds Ænix Public Cloud Platform and Ænix Private Cloud Platform on it and runs the VMware migration end to end.**
quick_facts:
  - label: "What it is"
    value: "An open-source, Kubernetes-native platform that covers the core VMware Cloud Foundation stack (vSphere, vCenter, vSAN, NSX, vCloud Director) on bare metal; DR is a backup-and-runbook design, not an SRM-style orchestrator."
  - label: "License"
    value: "Apache 2.0 (no per-CPU / per-core licensing)"
  - label: "Status"
    value: "Cozystack is a CNCF project (Sandbox since 2025-02-28; Incubating application in due diligence)"
  - label: "Who it is for"
    value: "Service providers exiting VMware Cloud Director and regulated enterprises exiting VMware Cloud Foundation."
  - label: "Architecture"
    value: "KubeVirt VMs + containers on one Kubernetes API, Cilium (eBPF) networking, LINSTOR/DRBD block and SeaweedFS object storage, Tenant CRD multi-tenancy."
  - label: "Migration"
    value: "Six-step path: discover, deploy in parallel, transfer VMs with Konveyor Forklift, cut over networking and storage, validate DR, decommission VMware."
  - label: "Commercial model"
    value: "Cozystack is free. Ænix Private Cloud Platform for regulated enterprises is quoted per RFP; support tiers for providers and self-run Cozystack start at $1,250 per 10 nodes per month."
faq:
  - q: "Is Cozystack a true one-to-one replacement for VMware Cloud Foundation?"
    a: "It maps the core VCF stack: KubeVirt for vSphere/ESXi, Kubernetes API plus Cozystack Dashboard for vCenter and vCloud Director, LINSTOR/DRBD for vSAN, Cilium for NSX, and Velero backups, DRBD replication or stretched clusters plus a documented runbook in place of Site Recovery Manager. There is no automated, orchestrated failover like SRM. Networking and multi-tenancy need redesign rather than literal 1:1 mapping, which the Platform Readiness Assessment covers."
  - q: "How does Cozystack avoid Broadcom-style renewal increases?"
    a: "Cozystack is licensed Apache 2.0 with no per-CPU, per-VM, or per-core meter, so the open-source code stays usable regardless of any support contract. Your spend is hardware plus an optional Ænix support subscription or engagement, not a subscription tied to socket counts."
  - q: "What replaces ESXi in Cozystack?"
    a: "KubeVirt, a KVM-based virtualization layer that runs on Talos and provides live migration and snapshots. It runs VMs and containers on the same Kubernetes API, so legacy VM workloads and cloud-native workloads share one control plane."
  - q: "Can Cozystack run in an air-gapped or sovereign environment?"
    a: "Yes. Air-gapped installation is supported and documented with no extra licensing, there is no phone-home telemetry (opt-in, disabled by default), and it runs on your own bare metal. Ænix engineering teams are in the EU and Central Asia, and EU contracts run through AENIX s.r.o. (Czech Republic). This supports your DORA and NIS2 operational-resilience and supplier-risk work."
  - q: "What does it cost compared to VMware?"
    a: "Cozystack is free and open source. Regulated enterprises exiting VCF go through Ænix Private Cloud Platform, which is quoted per RFP after a Platform Readiness Assessment. Service providers on Ænix Public Cloud Platform and teams running Cozystack themselves buy support tiers from $1,250 per 10 nodes per month (Basic), then Standard $3,000, Plus $5,500 and Enterprise custom. Migration services are quoted separately. VMware VCF pricing is quote-driven and non-public."
  - q: "Does Cozystack support GPUs for AI and VDI workloads?"
    a: "Yes, with the boundary stated plainly. NVIDIA vGPU is available for VMs where you hold the NVIDIA licence, and container workloads schedule through the NVIDIA GPU Operator with HAMi to share a card. MIG and time-slicing are on the roadmap rather than shipping, so an untrusted-tenant GPU product should not be planned around it yet."
hreflang_de: /de/alternativen/vmware-alternative/
---

<!-- BLOCK 1: HERO -->

**Replace vSphere, vCenter, vSAN, NSX, and the rest of VCF with one Kubernetes-native platform on your own bare metal — no per-CPU licensing, no Broadcom renewal cliff, no US-vendor lock-in.**

Cozystack is a CNCF Sandbox project. Ænix created it, co-maintains it with maintainers from other companies, runs it in production with hosting providers, and runs the migration end to end.

> **Pairs with:** **[Ænix Public Cloud Platform](/products/public-cloud-platform/)** for anyone selling cloud — hosting providers exiting VMware Cloud Director, MSPs, telcos, national operators; **[Ænix Private Cloud Platform](/products/private-cloud-platform/)** for regulated enterprises exiting VMware Cloud Foundation. Service providers exiting VMware Cloud Director: see [the VCD alternative](/alternatives/vmware-cloud-director-alternative/). Free [VMware Migration Checklist →](/resources/vmware-migration-checklist/).

<div class="cta-row">
  <a class="cta-primary" href="/contact/?type=architecture-review">Book an architecture call</a>
  <a class="cta-secondary" href="/migration/vmware/">Migration path →</a>
</div>

<div class="trust-badges">
CNCF Project · Kubernetes Certified Distribution · OpenSSF Best Practices · Apache 2.0
</div>

<!-- /BLOCK 1 -->

---

<!-- BLOCK 2: VENDOR LANDSCAPE (compact) -->

## Where Cozystack fits in the VMware-alternative market

| Vendor | Stack model | Best for |
|---|---|---|
| **Cozystack** | Open-source, Kubernetes-native, multi-tenant | Service providers, regulated enterprises, sovereign cloud |
| Nutanix AHV | Proprietary HCI on certified nodes | VM-centric enterprise estates wanting one vendor |
| Proxmox VE | Open-source KVM/LXC | SMB and labs |
| Scale Computing HC3 | Appliance HCI | ROBO/edge |
| OpenShift Virtualization | KubeVirt + OpenShift licensing | Existing Red Hat customers |
| OpenStack | Mature open-source IaaS | Teams with dedicated platform engineering |
| Azure Local (formerly Azure Stack HCI) | Microsoft-licensed Hyper-V, Arc-managed | Microsoft-aligned shops |

For the wider market: **[Best VMware alternatives 2026 — market comparison](/alternatives/vmware-alternatives/)**. For a feature-by-feature view: **[Cozystack vs VMware — head to head](/compare/cozystack-vs-vmware/)**.

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

{{< factoid number="2–5×" label="renewal price increases on VMware VCF bundles seen in Ænix migration engagements since the Broadcom acquisition" source="Ænix customer renewal quotes, 2024–2026; not a published industry benchmark" >}}

<!-- /BLOCK 3 -->

---

<!-- BLOCK 4: WHAT YOU GET (capability list) -->

<div class="band-fullbleed band-fullbleed--tint">
<div class="band-fullbleed__inner">

## What Cozystack gives you instead

<div class="capability-grid">

- **Virtual machines** — KubeVirt, KVM-based, live migration, snapshots
- **Tenant Kubernetes** — every tenant gets their own real K8s cluster
- **Managed databases** — PostgreSQL, MariaDB, Valkey, RabbitMQ, Kafka, ClickHouse, OpenSearch, MongoDB
- **S3-compatible object storage** — for backups, AI training data, applications
- **GPU as a service** — NVIDIA data-centre GPUs through the NVIDIA GPU Operator: passthrough or NVIDIA vGPU for VMs, fractional sharing for pods via HAMi; MIG and time-slicing on the roadmap
- **Multi-tenant control plane** — Tenant CRD, nested tenants, per-tenant quotas
- **Observability** — VictoriaMetrics + VictoriaLogs + Grafana, included
- **Backup & DR** — Velero to S3 outside the cluster, per-database PITR, DRBD replication; VM recovery as a documented runbook
- **Self-service portal** — Cozystack Dashboard; WHMCS billing integration is a proprietary Ænix module in Ænix Public Cloud Platform

</div>

Runs on your bare metal — no public-cloud dependency.

</div>
</div>

<!-- /BLOCK 4 -->

---

<!-- BLOCK 4b: WHERE VMWARE STILL WINS -->

## Where VMware is still the better choice

A comparison that only lists our wins is a battle card, not an evaluation. These are the places VMware is genuinely ahead, and they are the ones your architects will raise:

- **Operational depth.** DRS and Storage DRS, Fault Tolerance, Storage vMotion between arrays, vVols, EVC. KubeVirt live-migrates VMs and schedules them well; it does not match twenty years of automated placement and rebalancing behaviour.
- **A certified hardware compatibility list.** VMware qualifies servers, HBAs, NICs and firmware levels, and supports you on a listed configuration. Cozystack runs on commodity hardware, which means that qualification becomes yours.
- **The backup and DR ecosystem.** Veeam, Commvault, Rubrik, Zerto and Site Recovery Manager speak VADP natively. Velero plus per-database PITR covers backup and restore with different tools and no orchestrated failover, and every runbook, retention policy and piece of audit evidence built on the VMware ecosystem gets rewritten.
- **ISV certification.** Some application vendors certify only against ESXi and will decline a support call about the same workload on KubeVirt, whatever the technical merits.
- **Windows guests with hard edges.** VMs using Measured Boot do not convert, and Windows Server 2012 and 2012 R2 do not boot after conversion. Those are rebuilds, not migrations — see the [VMware migration hub](/migration/vmware/).

If your renewal is tolerable, your team is deep on vSphere, and no sovereignty or multi-tenancy requirement is pushing, staying is the right call and we will say so on the review.

<!-- /BLOCK 4b -->

---

<!-- BLOCK 5: ARCHITECTURE MAPPING (table only — no narrative) -->

## VMware → Cozystack: one-to-one component mapping

<div class="arch-section__fig">
<div class="diagram">
<div class="diagram__node"><b>VMware Cloud Foundation</b><div class="diagram__chips"><span>vSphere / vCenter</span><span>vSAN / NSX</span><span>Per-CPU subscription</span></div></div>
<div class="diagram__conn">migrate via</div>
<div class="diagram__node"><b>Six-step migration</b><div class="diagram__chips"><span>KubeVirt CDI</span><span>Parallel deploy</span><span>Cilium / LINSTOR cutover</span></div></div>
<div class="diagram__conn">lands on</div>
<div class="diagram__node diagram__node--brand"><b>Cozystack</b><div class="diagram__chips"><span>KubeVirt VMs + containers</span><span>Cilium (eBPF)</span><span>LINSTOR/DRBD</span><span>Tenant CRD</span></div></div>
<div class="diagram__conn">delivers</div>
<div class="diagram__node"><b>No per-CPU licensing</b><div class="diagram__chips"><span>Apache 2.0</span><span>Your bare metal</span><span>Support with your approval</span></div></div>
</div>
</div>

| VMware / VCF | Cozystack equivalent |
|---|---|
| vSphere / ESXi | KubeVirt on Talos |
| vCenter | Kubernetes API + Cozystack Dashboard |
| vSAN | LINSTOR or SeaweedFS |
| NSX | Cilium (eBPF) |
| vCloud Director | Tenant CRD + Cozystack Dashboard |
| vRealize / Aria Operations | VictoriaMetrics + VictoriaLogs + Grafana |
| Site Recovery Manager | Velero + DRBD/stretched clusters + runbook (no automated orchestrated failover — see [DR](/solutions/disaster-recovery/)) |
| Tanzu Kubernetes Grid | Tenant Kubernetes (native) |
| vRealize Automation | Self-service service catalogue in the portal |
| VMware Cloud Foundation | Cozystack |

Two layers need redesign rather than 1:1 mapping: **networking** (Cilium ≠ NSX) and **multi-tenancy** (Tenant CRD ≠ vCD orgs). Both are addressed in the [Platform Readiness Assessment](/services/platform-readiness-assessment/).

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
    <p class="engagement-step__body">Konveyor Forklift drives virt-v2v and CDI; VirtIO injection and VMware Tools removal are automated.</p>
  </div>

  <div class="engagement-step">
    <div class="engagement-step__number">4</div>
    <h3 class="engagement-step__title">Cut over networking and storage</h3>
    <p class="engagement-step__body">Cilium policy parity, LINSTOR (DRBD) import.</p>
  </div>

  <div class="engagement-step">
    <div class="engagement-step__number">5</div>
    <h3 class="engagement-step__title">Validate and cut over DR</h3>
    <p class="engagement-step__body">Velero backups and a rehearsed recovery runbook take over from SRM; no automated failover.</p>
  </div>

  <div class="engagement-step">
    <div class="engagement-step__number">6</div>
    <h3 class="engagement-step__title">Decommission VMware</h3>
    <p class="engagement-step__body">Repurpose hardware as VMware subscriptions lapse.</p>
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
- **Built to support DORA / NIS2 work** — operational resilience, supplier-risk transparency
- **Support model** — support works through your GitOps repository and, with your approval, remote access to your clusters

<!-- /BLOCK 7 -->

---

<!-- BLOCK 8: COMPARISON TABLE (kept full — high signal density) -->

## Cozystack vs VMware — at a glance

| | VMware (VCF, post-Broadcom) | Cozystack + Ænix |
|---|---|---|
| **License model** | Subscription only (VCF bundles) | Apache 2.0 + optional Ænix support subscription |
| **Renewal risk** | 2–5× increases seen in Ænix engagements | Predictable; OSS code remains usable regardless |
| **Compute** | vSphere / ESXi | KubeVirt (KVM-based) |
| **Storage** | vSAN | LINSTOR/DRBD (block), SeaweedFS (object) |
| **Network** | NSX | Cilium (eBPF, CNCF Graduated) |
| **Multi-tenancy** | vCloud Director | Tenant CRD (Kubernetes-native) |
| **Backup / DR** | Site Recovery Manager | Velero + DRBD/stretched clusters + runbook (no automated orchestrated failover — see [DR](/solutions/disaster-recovery/)) |
| **Observability** | vRealize / Aria (separate license) | VictoriaMetrics + VictoriaLogs (included) |
| **GPU for VMs** | NVIDIA vGPU on vSphere | NVIDIA vGPU + KubeVirt |
| **Sovereignty** | Closed source, US vendor | Open source, on-prem; EU contracts via AENIX s.r.o. |
| **Air-gap install** | Supported (extra licensing) | Supported (no extra cost) |
| **Pricing transparency** | Quote-driven, non-public | Public on aenix.io/pricing; OSS is free |

<!-- /BLOCK 8 -->

---

<!-- BLOCK 9: CUSTOMER PROOF (compact) -->

## Companies running platforms built with Ænix

Hosting providers running Ænix Public Cloud Platform in production.

{{< clients >}}

{{< quote-carousel >}}

Written-up deployments, including a bank and a financial group, are in the [case studies](/case-studies/).

<!-- /BLOCK 9 -->

---

<!-- BLOCK 10: PRICING -->

## Pricing

Cozystack is open source and free to run.

- **Regulated enterprises exiting VCF** go through **[Ænix Private Cloud Platform](/products/private-cloud-platform/)**, quoted per RFP after a Platform Readiness Assessment.
- **Service providers** on **[Ænix Public Cloud Platform](/products/public-cloud-platform/)** and **teams running Cozystack themselves** buy support tiers per 10 physical nodes per month: **Basic $1,250**, **Standard $3,000**, **Plus $5,500**, **Enterprise** per RFP.

Migration services are scoped separately. Full breakdown on the **[pricing page](/pricing/)**. No per-CPU, per-VM, or per-core meter.

<!-- /BLOCK 10 -->

---

<!-- BLOCK 11: FAQ (rendered from frontmatter faq: — single source of truth) -->


More questions about Windows VMs, vCD migration, hardware reuse, GPU support, and migration timelines: see the **[full VMware replacement guide on our blog](/blog/2026/05/vmware-replacement-after-broadcom/)** or **[talk to us](/contact/)**.

Running infrastructure and weighing the exit? See **[the guide for heads of infrastructure](/for/head-of-infrastructure/)**.

<!-- /BLOCK 11 -->

---

<!-- BLOCK 12: BOTTOM CTA -->

## Three ways to start

<div class="cta-cards">

**Architecture call (30 min)**
Free. Your stack against the Cozystack mapping, with the obvious workload buckets and risk flags.

**[Platform Readiness Assessment](/services/platform-readiness-assessment/) (fixed price)**
14 days (focused) or 28 days (full): inventory, dependencies, and a migration plan with timeline, budget and success criteria.

**Production pilot**
Run a workload cohort on Cozystack hardware we provision, parallel to your VMware estate, validated against your application owners.

</div>

Or read the **[full VMware replacement guide on our blog](/blog/2026/05/vmware-replacement-after-broadcom/)** · See **[the VMware migration path](/migration/vmware/)** · **[Best VMware alternatives 2026 — market comparison](/alternatives/vmware-alternatives/)** · **[Cozystack vs VMware — head to head](/compare/cozystack-vs-vmware/)**.

<!-- /BLOCK 12 -->

---

<!-- BLOCK 13: FOOTER TRUST STRIP -->

*Cozystack is a CNCF Sandbox project, a CNCF Certified Kubernetes distribution, accepted into the CNCF Kubernetes AI Conformance program (September 2026), with an OpenSSF Best Practices badge. Ænix created Cozystack and co-maintains it.*

<!-- /BLOCK 13 -->
