---
title: "Proxmox to Cozystack — when single-tenant outgrows itself"
seo_title: "Proxmox to Cozystack: when single-tenant outgrows itself"
description: "When does Proxmox VE outgrow single-tenant? A Proxmox-to-Cozystack migration guide for MSPs and growing teams hitting multi-tenancy and scale limits."
date: "2026-05-23"
cover_image: "/img/blog/covers/proxmox-migration-when-cozystack-fits.jpg"
author: "Timur Tukaev"
type: "tutorial"
topics: ["Proxmox", "Cozystack", "Migration", "Multi-tenancy", "Hosting"]
language: "en"
hreflang_de: "/de/blog/2026/05/proxmox-migration-cozystack-single-tenant-grenzen/"
companion_landing: "/migration/proxmox/"
companion_label: "See Proxmox migration hub →"
quiz:
  title: "Test yourself: Proxmox-to-Cozystack migration"
  questions:
    - q: "Around what customer count does Proxmox's multi-tenancy model start to feel thin for hosting providers?"
      options:
        - { text: "~300 customers (tenant audit and quota pain starts)", correct: true }
        - { text: "~50 customers (single-rack deployment thresholds)", correct: false }
        - { text: "~5,000 customers (hyperscale-tier operational ceiling)", correct: false }
      explanation: "Above ~300 customer-facing tenants, Proxmox's pools + realms + permissions model (no hard isolation) starts to feel thin; per-customer audit trails, isolation guarantees, and quota enforcement become operational pain."
    - q: "Which two Proxmox components map to KubeVirt and Cilium respectively in Cozystack?"
      options:
        - { text: "ZFS storage and Proxmox Backup Server (PBS)", correct: false }
        - { text: "LXC containers and pvesh (CLI management plane)", correct: false }
        - { text: "KVM hypervisor and Linux SDN / Linux bridges", correct: true }
      explanation: "Per the architectural mapping table: KVM hypervisor → KubeVirt (KVM-based), and Linux SDN / bridges → Cilium (eBPF). LXC needs redesign rather than 1:1 mapping; PBS maps to Velero+S3+PITR."
    - q: "For a typical 300-1,000 customer hosting provider, what's the realistic end-to-end migration timeline?"
      options:
        - { text: "1-3 months (rapid lift-and-shift programme)", correct: false }
        - { text: "Platform live in weeks; moving customers typically 3-9 months", correct: true }
        - { text: "3-5 years (long-tail parallel-platform operation)", correct: false }
      explanation: "After a 14- or 28-day assessment, the platform is live in weeks once hardware is ready; moving workloads and customers typically takes 3-9 months for a typical mid-size provider. Larger operators (1,000-5,000 customers) need slower cohort pacing, so their migration runs longer."
    - q: "Why is LXC the most problematic Proxmox component to migrate?"
      options:
        - { text: "Because LXC is closed source (no upstream code parity)", correct: false }
        - { text: "Because LXC = system containers; K8s = application containers", correct: true }
        - { text: "Because LXC doesn't support live snapshots or replication", correct: false }
      explanation: "Proxmox LXC = system containers (full OS image); Kubernetes containers = application containers (single process or small set). Workloads using LXC for system-container patterns either migrate to KubeVirt VMs (1:1 but heavier) or get refactored to Kubernetes-native apps."
    - q: "When does the article say a hosting provider should stay on Proxmox rather than run a full migration?"
      options:
        - { text: "Stable base under ~200 customers, mostly-VM workloads", correct: true }
        - { text: "When customers demand managed PostgreSQL as a service", correct: false }
        - { text: "When the operator needs multi-DC active/active topology", correct: false }
      explanation: "For sub-200-customer providers, SMB IT under 100 internal VMs, lab/dev environments, and mostly-VM workloads, Proxmox stays the better answer — a full migration programme is over-engineered for that scope; a greenfield service line on Ænix Public Cloud Platform at provider scale is the alternative if new services are the goal. Managed services and multi-DC active/active are pressures that justify migration."
---


Proxmox VE is one of the most successful open-source virtualisation
platforms of the last decade. Mature, easy to install, strong
community, AGPLv3 with commercial subscription. We talk to a lot of
operators who started on Proxmox, grew, and are evaluating what comes
next.

Crucially: Proxmox is the right answer for many of them. This article
covers when migration is warranted and when it's premature.

## Where Proxmox keeps winning

Proxmox VE remains the right answer for:

- **SMB IT departments** — small-to-mid businesses running 10-50
  virtualised workloads on premises, no customer-facing multi-
  tenancy needs
- **Single-tenant labs and dev environments** — Proxmox's
  operational simplicity beats any heavier alternative
- **Mature operators with stable customer base under ~200 customers** —
  Proxmox's commercial economics still work; migration cost would
  exceed the value
- **Mostly-VM workloads** — Proxmox's KVM + LXC scope fits cleanly
- **Existing operators with deep Proxmox expertise and stable team** —
  switching cost includes team retraining

If your situation matches these, *don't migrate*. The Ænix Public Cloud
Platform is over-engineered for SMB single-tenant operation. We say
this in discovery calls rather than push the engagement.

## When Proxmox is being outgrown

Migration warrants serious evaluation when at least three of these
hold:

### 1. Customer count growing past ~300

Proxmox's multi-tenancy model (pools, realms and permissions, not hard
isolation) starts to feel thin above ~300 customer-facing tenants.
Per-customer audit trails, isolation guarantees, and quota enforcement
become operational pain.

### 2. Customers asking for services beyond VMs

Managed PostgreSQL, MariaDB, MongoDB, Redis, Valkey, Kafka, S3-compatible object
storage, tenant Kubernetes clusters, GPU services. Proxmox's scope is
VMs + LXC; everything else is bolted on with manual integration or
external systems.

### 3. WHMCS or similar customer-management integration

Proxmox has WHMCS integration, but the service catalog beyond VMs is
manual integration work. Ænix Public Cloud Platform adds a WHMCS
integration (a proprietary Ænix module, not part of open-source
Cozystack) that covers the full service catalog.

### 4. Multi-DC active/active

Proxmox clustering is single-DC. Geographic distribution requires
manual cross-cluster replication patterns. Cozystack handles multi-
DC active/active as a first-class deployment mode.

### 5. Container-native customer demand

Customers want tenant Kubernetes clusters or container-native
service catalogs. Proxmox can host containers via LXC but isn't the
right operational model for tenant-facing Kubernetes-as-a-service.

### 6. Recurring licence / subscription pressure on commercial Proxmox

Proxmox's commercial subscription is competitive but real cost.
Operators with growing infrastructure footprint sometimes find the
total subscription cost approaching what Ænix charges for Public Cloud
Platform support — at which point the service-catalog and operational
upside of Cozystack tips the decision.

## Architectural mapping: Proxmox → Cozystack

| Proxmox VE | Cozystack equivalent |
|---|---|
| **KVM hypervisor** | KubeVirt (KVM-based) |
| **LXC containers** | Native Kubernetes containers (different model — LXC system-style vs Kubernetes application-style) |
| **ZFS storage** | LINSTOR (DRBD) |
| **Ceph (Proxmox-managed)** | LINSTOR (DRBD); Cozystack does not ship Ceph |
| **Linux SDN / bridges** | Cilium (eBPF) |
| **Proxmox web UI** | Cozystack Dashboard |
| **Proxmox Backup Server (PBS)** | Velero + S3-compatible target + per-app PITR |
| **PVE-Storage replication** | LINSTOR DRBD replication |
| **Proxmox API / pvesh, qm, pct** | Kubernetes API |
| **Datacenter / Pool / VM** | Tenant CRD + namespace + KubeVirt VM |
| **Permission model (roles)** | Kubernetes RBAC + Tenant CRD scope |

Two areas need redesign rather than 1:1 mapping:

- **LXC vs Kubernetes containers** — Proxmox LXC is system-container
  (full OS image), Kubernetes container is application-container
  (single process or small set). Workloads using LXC for system-
  container patterns either migrate to KubeVirt VMs or get
  refactored.
- **Multi-tenancy model** — Proxmox tenant model (pools, realms
  and permissions) versus Cozystack Tenant CRD (Kubernetes-native).
  Customer-facing isolation is stronger in Cozystack; operational
  abstraction is different.

## Migration phases

### Phase 0 — Assessment (14 or 28 days)

Inventory: customer count, customer-facing services consumed, VM
count, OS mix, LXC usage, storage tiers, network topology, backup
patterns, WHMCS / customer-management integration.

Honest TCO comparison: current Proxmox + commercial subscription +
operational team versus Ænix Public Cloud Platform + hardware refresh +
Ænix support tier. For operators under ~300 customers, this often
shows Proxmox staying competitive; above ~500, Cozystack typically
wins on service-catalog and operational depth.

Output: go/no-go decision with quantified justification.

### Phase 1 — Cozystack foundation (live in weeks)

The platform goes live in weeks once hardware is ready, using the
productized installer; catalogue and brand work continue alongside
the pilot. Cozystack platform deployed on new hardware or repurposed Proxmox
hardware (commodity x86 servers move easily). Cilium networking
configured. LINSTOR storage operationalised. Identity integration
(typically Keycloak + customer IdP). Cozystack Dashboard brand customisation
matching the operator's existing brand.

WHMCS integration validated end-to-end. Service catalog populated
with the operator's chosen services (VMs first, managed databases
next, S3 then, expanding from there).

### Phase 2 — Pilot customer migration

5-20 friendly customers migrated to Cozystack as the first cohort.
Pattern per customer:

1. Customer VMs converted from Proxmox qcow2 to KubeVirt-compatible
   format
2. Network configuration translated (Proxmox bridges → Cilium
   ClusterPool + NetworkPolicies)
3. Storage migrated (ZFS / Ceph volumes → LINSTOR in
   Cozystack)
4. Customer-side validation window (7-14 days)
5. DNS / load balancer cutover

During the pilot, customer support team builds operational
familiarity with Cozystack. Documentation patterns shake out.

### Phase 3 — Production migration cohorts

Cohorts of 30-100 customers at a time. Same per-customer pattern as
pilot, with operational efficiency improvements as the team
internalises the workflow.

LXC-using customers receive special handling: either system-style
KubeVirt VM (1:1 replacement) or refactor to Kubernetes-native
application container (depending on customer's preference and
support).

### Phase 4 — Proxmox decommission

As migration cohorts complete, Proxmox hardware moves into the
Cozystack cluster. Proxmox subscription wound down per renewal
cycle. Proxmox Backup Server data archived per customer agreements.

## Timeline realities

For typical mid-size hosting provider (300-1,000 customers):

- Phase 0: 14 or 28 days
- Phase 1: platform live in weeks once hardware is ready
- Phases 2-3 (pilot and production cohorts): typically 3-9 months
- Phase 4: alongside the last cohorts, timed to Proxmox renewals

**Total: the platform is live in weeks once hardware is ready;
moving workloads and customers typically takes 3-9 months**

For larger operators (1,000-5,000 customers), Phase 3 runs longer
for sustainable cohort pacing; the assessment sets the schedule.

## Where Proxmox-to-Cozystack migrations stumble

### 1. LXC workloads

If a substantial fraction of customer workloads use LXC for
system-container patterns (e.g., per-customer LAMP stack as a single
LXC), the migration to Kubernetes-native containers requires
refactoring. The alternative is running them as KubeVirt VMs (1:1
mapping but heavier resource footprint). Plan time for this in
Phase 0.

### 2. Customer-facing API divergence

Some customers built tooling against the Proxmox API. Cozystack
exposes Kubernetes API + Cozystack Dashboard API; the contracts differ.
Customer-facing migration support (documentation, sometimes API
compatibility shim) is engagement work.

### 3. Operations team training

Proxmox operators are comfortable with the Proxmox web UI and the
imperative `qm` / `pct` / `pvesh` CLI tools. Cozystack expects GitOps for production
changes. Operations team needs 4-8 weeks of focused training plus
3-6 months of practice. Ænix engagement includes training; customer
investment in the transition is also required.

### 4. ZFS-specific workloads

Some customers chose Proxmox specifically for ZFS-on-host features
(advanced snapshots, ZFS-replicated backups). Cozystack ships LINSTOR
(DRBD); ZFS-specific operational patterns don't translate. Customer
dialogue about feature equivalence is part of Phase 0.

## Versus other alternatives

**Versus building it yourself on raw KVM + libvirt + Kubernetes:**
Same trade-offs as for any open-source-build option. Cozystack
gets a multi-tenant platform to production in weeks to a few months;
raw builds take 12-24 months to reach the same level. For operators with
strong platform engineering capacity, the raw-build is a credible
alternative.

**Versus VMware (post-Broadcom):** Proxmox-to-VMware migration is
rare in 2026 — reverse migration usually doesn't make economic sense
post-Broadcom.

**Versus Nutanix:** Nutanix AHV is closed-source proprietary KVM.
For operators valuing open-source substrate, Cozystack wins on that
property alone. For operators valuing integrated commercial support
without open-source overhead, Nutanix wins.

**Versus OpenShift Virtualization:** Both are KubeVirt-based. OpenShift
fits existing Red Hat / OpenShift customers; Cozystack fits operators
preferring open-source-first procurement and lighter operational
footprint.

## When this engagement model fits

Strong fit:

- Hosting provider or MSP with 300+ customers
- Growth trajectory toward 1,000+ customers
- Customer demand for services beyond VMs
- Multi-DC operational reality
- Budget for a migration programme (typically 3-9 months of customer moves)

Marginal fit:

- 200-300 customer providers — borderline; depends on growth
  trajectory and service-catalog ambition

Poor fit:

- SMB IT (<100 internal VMs) — Proxmox is still better
- Lab / dev environments — Proxmox simplicity wins
- Sub-200-customer hosting providers — poor fit for a full migration
  programme; consider a greenfield service line on Ænix Public Cloud
  Platform at provider scale instead

## Engagement structure

- **Discovery call** (30 min, free)
- **[Platform Readiness Assessment](/services/platform-readiness-assessment/)**
  (fixed price, 14 days focused or 28 days full) — go/no-go with TCO
  comparison
- **Pilot deployment** — Cozystack stood up (live in weeks once
  hardware is ready), 5-20 friendly customers migrated
- **Cohort migration** — customer migration in cohorts; pilot and
  cohorts together typically take 3-9 months
- **Proxmox decommission** (parallel) — as cohorts
  complete
- **Support subscription** (ongoing) — Plus or Enterprise support tier
  for 24×7 coverage (see [/pricing/](/pricing/))

## Where to dig deeper

- **[Proxmox migration hub](/migration/proxmox/)** — commercial landing
- **[Proxmox vs VMware vs Cozystack comparison](/blog/2026/05/proxmox-vs-vmware-vs-cozystack-comparison/)** —
  decision matrix
- **[Proxmox alternative](/alternatives/proxmox-alternative/)** —
  alternative-focused commercial landing
- **[Hosting providers industry page](/industries/hosting-providers/)** —
  industry-specific positioning
- **[Public Cloud Platform economics for hosting providers](/blog/2026/05/isp-edition-economics-hosting-providers/)** —
  unit-economics walkthrough
- **[Hosting provider platform modernization](/blog/2026/05/hosting-provider-platform-modernization/)** —
  modernisation pattern
