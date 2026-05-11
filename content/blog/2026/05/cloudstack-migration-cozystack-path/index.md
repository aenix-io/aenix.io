---
title: "CloudStack migration to Cozystack — the modernization path for established service providers"
description: "Long-form companion to the CloudStack migration hub. For service providers running Apache CloudStack who are evaluating Cozystack as a Kubernetes-native modernization target — covering architectural mapping, migration phases, and where the trade-offs differ from VMware or OpenStack migrations."
date: 2026-05-11
author: "Aenix Team"
type: "tutorial"
topics: ["CloudStack", "Cozystack", "Migration", "Hosting", "Multi-tenancy"]
language: "en"
companion_landing: "/migration/cloudstack/"
companion_label: "See CloudStack migration hub →"
---

**Long-form companion to the [CloudStack migration hub](/migration/cloudstack/). For service providers running Apache CloudStack who are evaluating Cozystack as a Kubernetes-native modernization target — covering architectural mapping, migration phases, and where the trade-offs differ from VMware or OpenStack migrations.**

Apache CloudStack remains established with service providers in
several EU, MENA, and APAC markets. It has a mature multi-tenancy
model, broad community support, and well-understood operational
patterns. So why are operators evaluating modernization in 2026?

Three pressures stand out:

1. **Engineer scarcity** — CloudStack expertise pool is smaller than
   it was, and newer engineers are trained on Kubernetes, not on
   CloudStack's component model.
2. **Service-catalog ceiling** — CloudStack's primary scope is VMs,
   networks, and storage. Managed databases, S3-compatible object
   storage, container-native workloads, and GPU-as-a-service either
   bolt on awkwardly or live outside the platform entirely.
3. **Kubernetes-native customer demand** — customers increasingly
   want tenant Kubernetes clusters, container workloads, and
   Kubernetes-native networking. CloudStack handles this via
   integration; Cozystack handles it natively.

This article walks through what a CloudStack-to-Cozystack migration
looks like — what carries over, what redesigns, and how it phases.

## Where CloudStack still wins

Before discussing modernization, let's be honest about where
CloudStack remains the right answer:

- **Established expertise + stable customer base** — operators with
  deep CloudStack ops experience and stable customer count where
  migration cost might exceed the value of modernisation
- **VMware-on-CloudStack deployments** — where CloudStack is the
  orchestration layer over an existing VMware estate, the modernisation
  question is "do we leave VMware?" first, then "do we change the
  orchestrator?" second
- **Specific CloudStack features without direct Kubernetes equivalents**
  — deep network configuration patterns, specific load-balancer
  integrations, regional procurement-tied features

Where modernization fits is somewhere else: providers with growing
customer demand for Kubernetes-native services, providers facing
operational complexity that compounds with team turnover, providers
launching managed databases / S3 / GPU services that don't fit
CloudStack natively.

## Architectural mapping: CloudStack → Cozystack

| CloudStack component | Cozystack equivalent | Notes |
|---|---|---|
| **Management server** | Cozystack control plane (Kubernetes API + cozystack-controller) | Different operational model — declarative GitOps vs imperative CloudStack API |
| **System VMs (SSVM, CPVM, VR)** | Built into Cozystack platform — no per-tenant system VMs needed | Substantial operational simplification |
| **Hypervisor (KVM, XenServer, VMware)** | KubeVirt on Talos | KVM-only path is most common; VMware-on-CloudStack typically becomes VMware-to-Cozystack migration first |
| **Primary storage** | LINSTOR (DRBD) or Ceph | Different replication model; capacity sizing recalculation |
| **Secondary storage** | SeaweedFS or Ceph RGW (S3-compatible) | Better for snapshots, backups, ISOs; native S3 API customers can consume |
| **Networking (Advanced / Basic / Isolated)** | Cilium (eBPF) | Architectural rethink — Cilium is L4/L7 with eBPF; CloudStack network model is L2/L3-anchored |
| **Virtual router (VR)** | Cilium + MetalLB or BGP | Different concept; routing happens at Cilium level |
| **Accounts and domains (multi-tenancy)** | Tenant CRD with nested tenants | Conceptually closer to CloudStack than other Kubernetes platforms |
| **API and UI** | Kubernetes API + cozyportal | Customer-facing surface differs |
| **Volumes, snapshots, templates** | KubeVirt CDI + DataVolume + VirtualMachineImage | Image migration via image-conversion |
| **Service offering / disk offering** | Cozystack package definitions | Different model; product team curates catalog |
| **Network offering** | Cilium NetworkPolicy + ingress | Different abstraction |
| **VPC** | Cilium ClusterPool + tenant-scoped NetworkPolicy | Conceptually similar |

Two areas need substantial redesign rather than 1:1 mapping:
**networking** (Cilium's eBPF model is fundamentally different from
CloudStack's L2/L3 virtual router) and **service catalog** (CloudStack
service offerings vs Cozystack package + ApplicationDefinition).

## Migration phases

### Phase 0 — Assessment (3-6 weeks)

Workload inventory: VM count, OS mix, vCPU/RAM/disk profiles,
criticality tier. Network inventory: VPC count, public IP allocation,
load-balancer configurations, security-group rules. Storage inventory:
primary/secondary capacity, snapshot retention, volume types.
Multi-tenancy inventory: account count, domain hierarchy, project
structure.

Customer-facing inventory: ARPU per customer, service consumption,
contractual obligations, SLA tiers, billing integration touchpoints.

Output: a migration plan with workload buckets (migrate-now /
migrate-later / stay / re-architect), risk flags, timing.

### Phase 1 — Cozystack foundation (2-4 months)

Hardware procurement (or repurpose). Cozystack platform deployed on
new infrastructure alongside the existing CloudStack estate. Cilium
networking validated. LINSTOR or Ceph storage operationalised.
Identity integration (Keycloak or whatever IdP the provider operates).

Tenant CRD model designed to map cleanly from CloudStack's account /
domain hierarchy — typically each top-level CloudStack account becomes
a Cozystack Tenant; nested CloudStack domains become nested Tenants.

End state: working Cozystack platform, internal validation complete,
not yet customer-facing.

### Phase 2 — Service catalog and customer-facing portal (2-4 months)

cozyportal customisation to match the provider's brand. WHMCS integration
if the provider uses WHMCS (most CloudStack-on-WHMCS providers do).
Service-catalog rollout — start with foundational services (VMs,
volumes, S3 buckets, basic networking), layer in managed services
that didn't exist in the CloudStack era.

### Phase 3 — VM migration (3-9 months)

Workload migration in cohorts of 50-200 customers at a time. Per
cohort:

1. **Image conversion** — CloudStack templates and customer images
   converted to KubeVirt-compatible format. Most CloudStack KVM
   images convert with qemu-img conversion + minor metadata
   adjustment. Customer Windows VMs get virtio driver injection
   (standard pattern).
2. **Network mapping** — VLAN-to-Cilium policy translation, security
   group rules to NetworkPolicies, VPC routing to ClusterPool +
   Cilium L3.
3. **Storage migration** — volume data migrated from CloudStack
   primary storage to LINSTOR/Ceph. Snapshot history preserved or
   pruned per retention policy.
4. **Cutover** — workload runs in parallel on Cozystack for a
   validation window (typically 7-14 days). Customer notified of
   cutover; final cutover during scheduled window.

### Phase 4 — CloudStack decommission (2-6 months)

Hardware repurposed into Cozystack cluster as migration cohorts
complete. CloudStack management server retired. Operational tooling
(monitoring, ticketing integrations) consolidated to the Cozystack
stack.

## Where CloudStack-to-Cozystack migrations stumble

### 1. Network model translation

CloudStack's network model has historically been more configurable
than most cloud-orchestration platforms — Advanced networking, Basic
networking, Isolated networks, VPC, public IPs, hairpin routing,
elaborate security group configurations. Translating all of this to
Cilium + MetalLB + standard Kubernetes NetworkPolicies requires
careful architecture work. Skipping this in Phase 0-1 produces
production incidents in Phase 3.

### 2. Customer billing integration

CloudStack's billing hooks differ from Cozystack's. Providers running
WHMCS-integrated CloudStack billing usually need WHMCS-integration
work on the Cozystack side — Aenix provides this as part of the
engagement but it's specific per provider.

### 3. Customer self-service-API divergence

CloudStack offers a comprehensive customer-facing API (cmdkit / SDK).
Customers who built tooling against the CloudStack API need a
migration path: either CloudStack-API-compatible shim on Cozystack
(possible for a subset of operations), or customer-facing API
migration to Cozystack-native patterns. Plan for this.

## When CloudStack-to-Cozystack migration is the right answer

Strong fit:

- Service provider running KVM-based CloudStack with growing customer
  demand for managed databases, S3, container-native, or GPU services
- Engineer scarcity is starting to hurt operational quality
- Customer base is growing or stable; not declining
- Operator has budget for a 9-24 month modernisation programme

Marginal fit:

- VMware-on-CloudStack providers — solve VMware migration first
- Stable, slow-growing operators with deep CloudStack expertise who
  aren't feeling the operational pain — modernisation is a deferrable
  capital project

Poor fit:

- Operators in declining-customer-count territory — modernisation
  cost is hard to justify
- Very small operators (<200 customers) — Cozystack ISP Edition fixed
  cost overshoots the savings

## Engagement structure

- **Discovery call** (30 min, free)
- **Migration assessment** (3-6 weeks, fixed-price) — inventory,
  workload buckets, timing
- **Pilot deployment** (3-6 months) — Cozystack platform stood up,
  5-10 friendly customers migrated, billing workflows validated
- **Customer-cohort migration** (6-18 months) — workload migration in
  cohorts, decommission of CloudStack in parallel
- **Managed retainer** (optional, ongoing) — Aenix Tier-3 SLA

Total elapsed time: 12-24 months from project start to CloudStack
fully retired.

## Where to dig deeper

- **[CloudStack migration hub](/migration/cloudstack/)** — high-level
  migration entry point
- **[ISP Edition product page](/products/aenix-platform/isp-edition/)** —
  the most common target edition for CloudStack migrations
- **[Hosting providers industry page](/industries/hosting-providers/)** —
  hosting-provider-specific positioning
- **[Hosting provider platform modernization](/blog/2026/05/hosting-provider-platform-modernization/)** —
  related modernization pattern article

---

*Aenix is the company behind Cozystack — a CNCF project, Kubernetes
Certified Distribution. We have engagement experience with multiple
hosting providers including CloudStack-based ones; specific named case
studies remain confidential until customers publicly confirm.*
