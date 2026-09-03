---
title: "VMware replacement after Broadcom: a guide for service providers, banks, and sovereign clouds in 2026"
description: "What changed under Broadcom, a component-by-component VMware-to-Cozystack mapping, how the migration actually runs, and the FAQ engineers ask first."
date: "2026-05-01"
author: "Aenix Team"
type: "tutorial"
topics: ["VMware", "Kubernetes", "Cozystack", "Sovereignty", "AI/ML", "GPU"]
language: "en"
images: ["img/og/og-vmware-replacement-broadcom.png"]
companion_landing: "/alternatives/vmware-alternative/"
quiz:
  title: "Test yourself: VMware replacement essentials"
  questions:
    - q: "According to the article, what kind of price increases on VCF renewal does Aenix observe across its customer pipeline?"
      options:
        - { text: "2× to 5× over previous spend", correct: true }
        - { text: "10–25% over previous spend", correct: false }
        - { text: "6× to 10× over previous spend", correct: false }
      explanation: "The piece states that renewal quotes \"have come back at 2× to 5× prior spend across our pipeline\" after Broadcom replaced perpetual licensing with VCF subscription bundles."
    - q: "Which Cozystack component is positioned as the direct vCenter alternative?"
      options:
        - { text: "KubeVirt, which schedules and runs the virtual machines", correct: false }
        - { text: "Cilium, which carries the network policy and datapath", correct: false }
        - { text: "The Cozystack control plane, via the Kubernetes API and Dashboard", correct: true }
        - { text: "Tenant CRD (used as the unified plane)", correct: false }
      explanation: "The architecture-mapping table maps the Kubernetes API + Cozystack Dashboard as the vCenter alternative, with Cluster API providing multi-cluster federation. KubeVirt replaces ESXi; Cilium replaces NSX."
    - q: "Which of these limitations is described as industry-wide rather than Cozystack-specific?"
      options:
        - { text: "Windows VMs are not supported", correct: false }
        - { text: "Air-gapped installation is unsupported", correct: false }
        - { text: "GPU live migration is not supported", correct: true }
        - { text: "No multi-tenancy primitive available", correct: false }
      explanation: "The FAQ explicitly calls GPU live migration an industry-wide limitation — VMware vGPU has known caveats too. Cozystack supports Windows VMs (with an automated VMware-Tools cleanup step), air-gap install, and multi-tenancy via the Tenant CRD."
    - q: "In the recommended VMware-to-Cozystack migration sequence, what comes immediately before VM-by-VM image migration to KubeVirt?"
      options:
        - { text: "Decommissioning the VMware estate", correct: false }
        - { text: "Network and storage stack cutover", correct: false }
        - { text: "DR cutover validation testing", correct: false }
        - { text: "Cozystack deployed in parallel", correct: true }
      explanation: "The migration runs: discovery & assessment → Cozystack deployed in parallel on new or repurposed hardware → VM-by-VM image migration → network and storage cutover → validation and DR cutover → VMware decommission. No big-bang cutover."
    - q: "According to the article, how long does a VMware migration take for an estate under 100 VMs?"
      options:
        - { text: "6-12 weeks end-to-end, the whole estate decommissioned", correct: false }
        - { text: "First production cohort in 6-12 weeks; whole estate 7-10 months", correct: true }
        - { text: "16-25 months regardless of estate size", correct: false }
      explanation: "The article separates two numbers deliberately. The first production cohort runs 6-12 weeks after kickoff, which is when the platform stops being a proof of concept; decommissioning the whole estate takes 7-10 months under 100 VMs and longer above that. Quoting the cohort figure as the estate figure is how migration plans slip."
---

After Broadcom, the VMware bill stopped being predictable. Subscription-only licensing, mandatory VCF bundling, two-to-five-times price increases on renewal, and the end of perpetual licenses changed the math for every infrastructure team running VMware at scale. The result has been a documented wave of VMware replacement projects across service providers, banks, government, telecom, and AI/GPU operators evaluating how to exit VMware safely.

---

## VMware competitors at a glance

If you're scoping the market, here is how Cozystack compares to the most-cited alternatives to VMware:

- **Cozystack (this page)** — open-source, Kubernetes-native, multi-tenant. VMs + containers + databases + object storage + GPU on one platform. Best for service providers and regulated enterprises that need sovereignty and want one stack.
- **Nutanix AHV** — proprietary KVM-based hypervisor inside Nutanix HCI. Strong VM-only story, weak on Kubernetes-native multi-tenancy, expensive at scale.
- **Proxmox VE** — open-source KVM + LXC. Excellent for SMB and labs; thin on managed databases, multi-tenancy, and enterprise support model.
- **Scale Computing HC3** — appliance-based hyperconverged stack. Good for ROBO/edge; closed ecosystem.
- **Red Hat OpenShift Virtualization** — KubeVirt-based, similar foundations to Cozystack. Heavier OpenShift footprint and Red Hat licensing model.
- **OpenStack** — broad, mature, large operational surface area. Best when you have a dedicated team running it.
- **Microsoft Azure Stack HCI** — Hyper-V on validated hardware. Locks into Microsoft licensing.
- **Verge.io / Spectro Cloud / Platform9** — vendor-led KubeVirt or hyperconverged stacks; comparable to Cozystack on architecture, different commercial models.

The rest of this page goes deep on Cozystack as a Cozystack-specific VMware replacement. For a head-to-head listicle, see [VMware alternatives](/alternatives/vmware-alternatives).

---

## Why teams replace VMware in 2026

The technical case for moving off VMware existed before Broadcom. Broadcom turned it into a board-level decision.

### 1. Unpredictable, subscription-only economics

VCF subscription pricing replaced perpetual licensing. Renewal quotes have come back at 2× to 5× prior spend across our pipeline. ELAs have been broken or restructured mid-term. Standalone vSphere SKUs were retired in favour of bundled VCF tiers that include components most customers do not need.

For service providers, this collapses margin: end-customer prices are sticky, license costs are not. For banks and regulated enterprises, it breaks multi-year capex planning that was built around perpetual entitlements.

### 2. Vendor lock-in across the stack

VMware's strength was integration: vSphere, vSAN, NSX, vRealize, Horizon, vCD, all assumed each other. That same integration is now the lock-in surface. Replacing one component meant rebuilding adjacent ones, so most teams stayed.

Cozystack inverts this. Each layer is an independent open-source project (KubeVirt, LINSTOR/DRBD, Cilium, Kube-OVN, KubeVirt CDI, SeaweedFS, Velero, Flux, etc.), composed by a Kubernetes operator. You can replace any layer without rewriting the rest, and you can audit every line.

### 3. Sovereignty, regulator pressure, and US-vendor risk

DORA (in force across the EU since January 2025) and NIS2 require demonstrable control over critical ICT third parties. For European banks, telcos, and government workloads, depending on a US-headquartered closed-source hypervisor stack is a documented operational risk.

Cozystack is open source under Apache 2.0. Your binaries, your hardware, your data plane. Ænix ships air-gap install workflows and an advisory support model that does not require direct customer-environment access.

### 4. Pricing isn't the only cliff — capability is

VMware's roadmap is now Broadcom's roadmap. KubeVirt and the Kubernetes-native virtualization stack have a community of hundreds of contributors and a release cadence VMware can no longer match in the open. GPU support, multi-tenant tenancy, modern storage replication, GitOps-native ops — all moved to Kubernetes-native projects years ago. VMware tries to retro-fit them through Tanzu and VCF.

---

## What Cozystack gives you instead

Cozystack is a single platform you install on bare metal. Once it's up, you have:

- **Virtual machines** through KubeVirt — full KVM-based VMs with live migration (CPU only), block-storage attach, snapshots, and templates.
- **Tenant Kubernetes clusters** for customers who want containers — every tenant gets their own K8s, isolated.
- **Managed databases** — PostgreSQL, MariaDB, MongoDB, Redis, Valkey, RabbitMQ, Kafka, NATS, ClickHouse, OpenSearch, Qdrant, FoundationDB — exposed as cloud services your tenants self-provision.
- **S3-compatible object storage** — for backups, application data, and AI training sets.
- **GPU as a service** — for VMs (VFIO passthrough, or NVIDIA vGPU with an NVIDIA licence) and for Kubernetes pods (whole-GPU through the NVIDIA GPU Operator, fractional sharing through HAMi). Validated on A100, H100, H200, L40S, and Blackwell.
- **Multi-tenant control plane** — `Tenant` Kubernetes CRD, nested tenants, per-tenant quotas and presets.
- **Observability built in** — VictoriaMetrics + VictoriaLogs, no Prometheus/Loki licensing trap.
- **Backup and DR** — Velero + S3 + per-database point-in-time recovery for managed services.
- **Self-service portal and billing** — through Cozystack Dashboard or via WHMCS integration (production-ready, two integration modes — see below).

It runs on your bare metal. No public cloud dependency. No phone-home telemetry by default.

---

## VMware-to-Cozystack architecture mapping (vSphere alternative, ESXi alternative, vCenter alternative — all in one)

The questions every VMware admin asks first: *"What replaces vSphere? What's a real ESXi alternative? What replaces vCenter, NSX, vSAN, vCloud Director?"* Here is the direct one-to-one mapping.

| VMware / VCF component | Cozystack equivalent | Acts as |
|---|---|---|
| **vSphere / ESXi** | KubeVirt on Talos | vSphere alternative, ESXi alternative — KVM-based VMs with live migration, snapshots, templates |
| **vCenter** | Cozystack control plane (Kubernetes API + Cozystack Dashboard) | vCenter alternative — multi-cluster federation through Cluster API |
| **vSAN** | LINSTOR (DRBD, via the Piraeus operator) | vSAN alternative — hyperconverged synchronous replicated block storage |
| **NSX** | Cilium (eBPF) | NSX alternative — native L4/L7, network policies, observability, no NSX licensing |
| **vCloud Director (vCD)** | Tenant CRD + Cozystack Dashboard | vCloud Director alternative — multi-tenancy, self-service, quotas, RBAC |
| **vRealize / Aria Operations** | VictoriaMetrics + VictoriaLogs + Grafana | Aria Operations alternative — open-source observability stack |
| **Site Recovery Manager (SRM)** | Velero + S3 + PostgreSQL PITR | SRM alternative — backup-based DR; replication for stateful services |
| **Horizon (VDI)** | Not in scope of Cozystack | Pair with KasmWorkspaces or similar; talk to us about reference designs |
| **Tanzu Kubernetes Grid** | Tenant Kubernetes (native) | Tanzu alternative — each tenant gets a real K8s control plane |
| **vRealize Automation / vRA** | ApplicationDefinition + portal catalog | vRA alternative — self-service service catalog, GitOps-native |
| **VMware Cloud Foundation (VCF)** | Cozystack | VCF alternative — whole-stack equivalent, single open-source distribution |

Two areas need redesign rather than one-for-one mapping: **networking** (Cilium is fundamentally different from NSX) and **multi-tenancy model** (Cozystack tenants are Kubernetes-native; vCD orgs are vSphere-native). For both, we run an architecture review before any migration commits.

---

## How VMware migration actually works

Migration paths are workload-dependent. For most teams, this is the realistic sequence.

### 1. Discovery and assessment

We run a structured assessment of the current vSphere / VCF / vCD inventory: workload count, OS mix, vSAN / NSX dependencies, integrations (backup, identity, monitoring), and tenancy model. Output is a migration plan with workload buckets, risk flags, and timing.

### 2. Cozystack deployed in parallel

Cozystack is installed on new or repurposed hardware alongside the existing VMware estate. No big-bang cutover. Tenants migrate cohort by cohort.

### 3. VM-by-VM image migration to KubeVirt

For most VMs, migration is a disk-image copy. We use KubeVirt CDI plus a set of dedicated migration scripts we've built and reused across customer deployments. For Windows VMs and VMs with VMware Tools dependencies, we run an automated cleanup pass before boot on KubeVirt.

### 4. Network and storage cutover

Networking: VLAN mapping into Cilium, with policy parity checked against the source NSX rules. Storage: import disks into LINSTOR, validate IOPS and replication.

### 5. Validation and DR cutover

Each migrated workload runs in parallel on Cozystack until validated by the application owner. DR plans (Velero, PostgreSQL PITR) replace SRM playbooks before final cutover.

### 6. VMware decommission

Licenses end on their own terms. Hardware repurposed into the Cozystack cluster (we run on commodity x86 — your existing servers usually qualify).

For OpenStack, CloudStack, and Proxmox sources we run the same playbook with different image-import and network-mapping steps. Ænix has shipped each path in production.

> **Looking for a checklist?** A detailed migration assessment template is on the roadmap. For now, a structured assessment is part of the engagement — book it through the form below.

---

## Multi-tenancy and sovereignty

Cozystack was built for service providers first. The same model works for any organization that needs hard separation between business units.

- **Tenant CRD** — each tenant is a Kubernetes object. Namespaces are derived (`<parent>-<name>`), nested tenants are supported, quotas are enforced via Kubernetes ResourceQuotas.
- **RBAC by default** — tenants cannot see each other. Tenant operators get a scoped Kubernetes API.
- **Air-gap install** — supported and documented; works behind Harbor / Nexus / proxy patterns.
- **No phone-home** — telemetry is opt-in and disabled by default.
- **DORA / NIS2-aligned controls** — operational resilience, incident reporting, supplier-risk documentation. Architecture maps to the controls; certification, where required, is the customer's audit process to run.
- **Ænix support model** — advisory, runbooks, GitOps PR review. We do not require kubectl access to your production cluster. Critical for banks, telcos, and any regulated buyer who cannot expose infrastructure to a vendor.

---

## Cozystack vs VMware — feature comparison

| Capability | VMware (VCF, post-Broadcom) | Cozystack + Ænix |
|---|---|---|
| **License model** | Subscription only (VCF bundles) | Apache 2.0 open source + optional Ænix support tier |
| **Renewal risk** | 2–5× increases observed; bundling forced | Predictable support pricing; OSS code remains usable regardless |
| **Compute** | vSphere / ESXi | KubeVirt (KVM-based) |
| **Live migration** | Yes (incl. with GPU under vGPU) | Yes (CPU); GPU live migration not supported (industry-wide limitation, not Cozystack-specific) |
| **Storage** | vSAN | LINSTOR (DRBD); synchronous replication, production-grade |
| **Network** | NSX (proprietary) | Cilium (CNCF Graduated, eBPF) |
| **Multi-tenancy** | vCloud Director | Tenant CRD; native to Kubernetes |
| **Service catalog** | vRealize Automation / Aria | ApplicationDefinition + Cozystack Dashboard |
| **Backup / DR** | Site Recovery Manager (SRM) | Velero + S3 + PostgreSQL PITR |
| **GPU for VMs** | NVIDIA vGPU under Horizon | NVIDIA vGPU + KubeVirt (NVIDIA Enterprise license required) |
| **GPU for containers** | Tanzu (limited) | Whole-GPU via NVIDIA GPU Operator; fractional sharing (GPU memory + cores) via HAMi — Kubernetes-native |
| **Observability** | vRealize / Aria (licensed separately) | VictoriaMetrics + VictoriaLogs (OSS, included) |
| **Ops model** | Vendor support requires environment access | Advisory + runbooks + GitOps PR review (no kubectl access needed) |
| **Sovereignty** | Closed source, US vendor | Open source, hosted on your hardware, EU-based support team |
| **Air-gap install** | Supported (additional licensing) | Supported (no additional cost) |
| **Compliance posture** | Customer responsibility on top of VCF | Architecture aligned with DORA / NIS2 controls; OpenSSF Best Practices, Kubernetes Certified |
| **Pricing transparency** | Quote-driven; non-public | Public pricing on aenix.io/pricing; OSS is free |

---

## FAQ

### Can we keep our existing hardware?

Yes — in most cases. Cozystack runs on commodity x86. The standard scenario is to deploy Cozystack on a new pod of servers, migrate workloads off VMware, then repurpose the freed VMware hardware into Cozystack as licenses lapse.

### How long is a typical migration?

Two numbers matter, and conflating them is how migration plans go wrong. The **first production cohort** typically runs in a live environment 6-12 weeks after kickoff — that is when the platform stops being a proof of concept. The **whole estate** takes 7-10 months under 100 VMs, 10-16 months for 100-500, and 16-25 months for 500-2000, assessment through VMware decommission. Small, flat estates land at the short end; vCD- or NSX-heavy regulated ones at the long end, run in cohorts. The driver is rarely raw migration speed — it's regression testing and the parallel-run windows application owners will agree to.

### Do you support Windows VMs?

Yes. KubeVirt runs Windows. We have an automated cleanup step that removes VMware Tools and installs the right virtio drivers before first boot on KubeVirt. Activation handling depends on your Windows licensing model — discussed during assessment.

### What happens to our existing VMware operational skills?

The hypervisor concepts (VMs, snapshots, templates, networking) carry over. The control-plane shifts from vCenter to Kubernetes — for most teams this is a 4–8 week ramp with the right training and runbooks. Ænix runs the training as part of professional services.

### What about VMware Cloud Foundation specifically — is the migration different?

VCF migrations are larger (more components, more integrations). The discovery phase covers SDDC Manager, Workspace ONE, Aria, NSX-T overlays, and any custom service definitions. Ænix has run VCF migrations end-to-end.

### What if we use vCloud Director for our customers?

vCD migration is the most common path for service providers. Tenant model maps to Cozystack Tenant CRD, service catalog maps to ApplicationDefinition, billing maps to the WHMCS integration or Cozystack Dashboard. We've shipped this for several providers — happy to share architecture in an NDA call.

### Is GPU live migration supported?

No — industry-wide limitation, not Cozystack-specific. VMware vGPU live migration has known caveats too. For inference workloads we recommend designing for stateless restart rather than relying on GPU live migration.
