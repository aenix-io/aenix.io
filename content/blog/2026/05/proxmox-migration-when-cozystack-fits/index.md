---
title: "Proxmox to Cozystack — when single-tenant outgrows itself"
description: "Long-form companion to the Proxmox migration hub. For service providers, MSPs, and growing enterprises whose Proxmox VE deployment is hitting multi-tenancy, service-catalog, or scale ceilings — what a Proxmox-to-Cozystack migration looks like, and when staying on Proxmox is still the right call."
date: 2026-05-11
author: "Aenix Team"
type: "tutorial"
topics: ["Proxmox", "Cozystack", "Migration", "Multi-tenancy", "Hosting"]
language: "en"
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
      explanation: "Above ~300 customer-facing tenants, Proxmox's namespace+permissions model (no hard isolation) starts to feel thin; per-customer audit trails, isolation guarantees, and quota enforcement become operational pain."
    - q: "Which two Proxmox components map to KubeVirt and Cilium respectively in Cozystack?"
      options:
        - { text: "ZFS storage and Proxmox Backup Server (PBS)", correct: false }
        - { text: "LXC containers and pvecli (CLI management plane)", correct: false }
        - { text: "KVM hypervisor and Linux SDN / Linux bridges", correct: true }
      explanation: "Per the architectural mapping table: KVM hypervisor → KubeVirt (KVM-based), and Linux SDN / bridges → Cilium (eBPF). LXC needs redesign rather than 1:1 mapping; PBS maps to Velero+S3+PITR."
    - q: "For a typical 300-1,000 customer hosting provider, what's the realistic end-to-end migration timeline?"
      options:
        - { text: "1-3 months (rapid lift-and-shift programme)", correct: false }
        - { text: "6-18 months end-to-end for mid-size providers", correct: true }
        - { text: "3-5 years (long-tail parallel-platform operation)", correct: false }
      explanation: "Total time from project start to Proxmox fully retired is 6-18 months for typical mid-size providers. Larger operators (1,000-5,000 customers) extend Phase 3 to 12-24 months for sustainable cohort pacing."
    - q: "Why is LXC the most problematic Proxmox component to migrate?"
      options:
        - { text: "Because LXC is closed source (no upstream code parity)", correct: false }
        - { text: "Because LXC = system containers; K8s = application containers", correct: true }
        - { text: "Because LXC doesn't support live snapshots or replication", correct: false }
      explanation: "Proxmox LXC = system containers (full OS image); Kubernetes containers = application containers (single process or small set). Workloads using LXC for system-container patterns either migrate to KubeVirt VMs (1:1 but heavier) or get refactored to Kubernetes-native apps."
    - q: "When does the article say a hosting provider should stay on Proxmox rather than migrate?"
      options:
        - { text: "Stable base under ~200 customers, mostly-VM workloads", correct: true }
        - { text: "When customers demand managed PostgreSQL as a service", correct: false }
        - { text: "When the operator needs multi-DC active/active topology", correct: false }
      explanation: "For sub-200-customer providers, SMB IT under 100 internal VMs, lab/dev environments, and mostly-VM workloads, Proxmox stays the better answer — Cozystack ISP Edition is over-engineered for that scope. Managed services and multi-DC active/active are pressures that justify migration."
---

**Long-form companion to the [Proxmox migration hub](/migration/proxmox/). For service providers, MSPs, and growing enterprises whose Proxmox VE deployment is hitting multi-tenancy, service-catalog, or scale ceilings — what a Proxmox-to-Cozystack migration looks like, and when staying on Proxmox is still the right call.**

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

If your situation matches these, *don't migrate*. Cozystack ISP
Edition is over-engineered for SMB single-tenant operation. We say
this in discovery calls rather than push the engagement.

## When Proxmox is being outgrown

Migration warrants serious evaluation when at least three of these
hold:

### 1. Customer count growing past ~300

Proxmox's multi-tenancy model (namespace + permissions, not hard
isolation) starts to feel thin above ~300 customer-facing tenants.
Per-customer audit trails, isolation guarantees, and quota enforcement
become operational pain.

### 2. Customers asking for services beyond VMs

Managed PostgreSQL, MySQL, Redis, Kafka, S3-compatible object
storage, tenant Kubernetes clusters, GPU services. Proxmox's scope is
VMs + LXC; everything else is bolted on with manual integration or
external systems.

### 3. WHMCS or similar customer-management integration

Proxmox has WHMCS integration, but the service catalog beyond VMs is
manual integration work. Cozystack ISP Edition ships with WHMCS
integration for the full service catalog.

### 4. Multi-DC active/active

Proxmox clustering is single-DC. Geographic distribution requires
manual cross-cluster replication patterns. Cozystack handles multi-
DC active/active as a first-class deployment mode.

### 5. Container-native customer demand

Customers want tenant Kubernetes clusters or container-native
service catalogs. Proxmox can host containers via LXC but isn't the
right operational model for tenant-facing Kubernetes-as-a-service.

### 6. Recurring license / subscription pressure on commercial Proxmox

Proxmox's commercial subscription is competitive but real cost.
Operators with growing infrastructure footprint sometimes find the
total subscription cost approaching what Aenix charges for ISP
Edition support — at which point the service-catalog and operational
upside of Cozystack tips the decision.

## Architectural mapping: Proxmox → Cozystack

| Proxmox VE | Cozystack equivalent |
|---|---|
| **KVM hypervisor** | KubeVirt (KVM-based) |
| **LXC containers** | Native Kubernetes containers (different model — LXC system-style vs Kubernetes application-style) |
| **ZFS storage** | LINSTOR (DRBD) or Ceph |
| **Ceph (Proxmox-managed)** | Ceph (Rook-managed) or LINSTOR |
| **Linux SDN / bridges** | Cilium (eBPF) |
| **Proxmox web UI** | cozyportal |
| **Proxmox Backup Server (PBS)** | Velero + S3-compatible target + per-app PITR |
| **PVE-Storage replication** | LINSTOR DRBD replication |
| **Proxmox API / pvecli** | Kubernetes API |
| **Datacenter / Pool / VM** | Tenant CRD + namespace + KubeVirt VM |
| **Permission model (roles)** | Kubernetes RBAC + Tenant CRD scope |

Two areas need redesign rather than 1:1 mapping:

- **LXC vs Kubernetes containers** — Proxmox LXC is system-container
  (full OS image), Kubernetes container is application-container
  (single process or small set). Workloads using LXC for system-
  container patterns either migrate to KubeVirt VMs or get
  refactored.
- **Multi-tenancy model** — Proxmox tenant model (namespace +
  permissions) versus Cozystack Tenant CRD (Kubernetes-native).
  Customer-facing isolation is stronger in Cozystack; operational
  abstraction is different.

## Migration phases

### Phase 0 — Assessment (2-4 weeks)

Inventory: customer count, customer-facing services consumed, VM
count, OS mix, LXC usage, storage tiers, network topology, backup
patterns, WHMCS / customer-management integration.

Honest TCO comparison: current Proxmox + commercial subscription +
operational team versus Cozystack ISP Edition + hardware refresh +
Aenix support tier. For operators under ~300 customers, this often
shows Proxmox staying competitive; above ~500, Cozystack typically
wins on service-catalog and operational depth.

Output: go/no-go decision with quantified justification.

### Phase 1 — Cozystack foundation (1-3 months)

Cozystack platform deployed on new hardware or repurposed Proxmox
hardware (commodity x86 servers move easily). Cilium networking
configured. LINSTOR storage operationalised. Identity integration
(typically Keycloak + customer IdP). cozyportal brand customisation
matching the operator's existing brand.

WHMCS integration validated end-to-end. Service catalog populated
with the operator's chosen services (VMs first, managed databases
next, S3 then, expanding from there).

### Phase 2 — Pilot customer migration (1-3 months)

5-20 friendly customers migrated to Cozystack as the first cohort.
Pattern per customer:

1. Customer VMs converted from Proxmox qcow2 to KubeVirt-compatible
   format
2. Network configuration translated (Proxmox bridges → Cilium
   ClusterPool + NetworkPolicies)
3. Storage migrated (ZFS / Ceph volumes → LINSTOR or Ceph in
   Cozystack)
4. Customer-side validation window (7-14 days)
5. DNS / load balancer cutover

During the pilot, customer support team builds operational
familiarity with Cozystack. Documentation patterns shake out.

### Phase 3 — Production migration cohorts (3-9 months)

Cohorts of 30-100 customers at a time. Same per-customer pattern as
pilot, with operational efficiency improvements as the team
internalises the workflow.

LXC-using customers receive special handling: either system-style
KubeVirt VM (1:1 replacement) or refactor to Kubernetes-native
application container (depending on customer's preference and
support).

### Phase 4 — Proxmox decommission (1-3 months)

As migration cohorts complete, Proxmox hardware moves into the
Cozystack cluster. Proxmox subscription wound down per renewal
cycle. Proxmox Backup Server data archived per customer agreements.

## Timeline realities

For typical mid-size hosting provider (300-1,000 customers):

- Phase 0: 2-4 weeks
- Phase 1: 1-3 months
- Phase 2: 1-3 months
- Phase 3: 3-9 months
- Phase 4: 1-3 months

**Total: 6-18 months from project start to Proxmox fully retired**

For larger operators (1,000-5,000 customers), Phase 3 extends to
12-24 months for sustainable cohort pacing.

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
exposes Kubernetes API + cozyportal API; the contracts differ.
Customer-facing migration support (documentation, sometimes API
compatibility shim) is engagement work.

### 3. Operations team training

Proxmox operators are comfortable with the Proxmox web UI and the
imperative `pvecli` command. Cozystack expects GitOps for production
changes. Operations team needs 4-8 weeks of focused training plus
3-6 months of practice. Aenix engagement includes training; customer
investment in the transition is also required.

### 4. ZFS-specific workloads

Some customers chose Proxmox specifically for ZFS-on-host features
(advanced snapshots, ZFS-replicated backups). Cozystack uses LINSTOR
or Ceph; ZFS-specific operational patterns don't translate. Customer
dialogue about feature equivalence is part of Phase 0.

## Versus other alternatives

**Versus building it yourself on raw KVM + libvirt + Kubernetes:**
Same trade-offs as for any open-source-build option. Cozystack
delivers in 3-6 months what raw-builds take 12-24 months to reach
production-grade for multi-tenant operation. For operators with
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
- Budget for 6-18 month migration programme

Marginal fit:

- 200-300 customer providers — borderline; depends on growth
  trajectory and service-catalog ambition

Poor fit:

- SMB IT (<100 internal VMs) — Proxmox is still better
- Lab / dev environments — Proxmox simplicity wins
- Sub-200-customer hosting providers — fixed-cost economics

## Engagement structure

- **Discovery call** (30 min, free)
- **Migration assessment** (2-4 weeks, fixed-price) — go/no-go with
  TCO comparison
- **Pilot deployment** (1-3 months) — Cozystack stood up, 5-20
  friendly customers migrated
- **Cohort migration** (3-12 months) — customer migration in cohorts
- **Proxmox decommission** (1-3 months, parallel) — as cohorts
  complete
- **Managed retainer** (optional, ongoing) — Aenix Tier-3 SLA

## Where to dig deeper

- **[Proxmox migration hub](/migration/proxmox/)** — commercial landing
- **[Proxmox vs VMware vs Cozystack comparison](/blog/2026/05/proxmox-vs-vmware-vs-cozystack-comparison/)** —
  decision matrix
- **[Proxmox alternative](/alternatives/proxmox-alternative/)** —
  alternative-focused commercial landing
- **[Hosting providers industry page](/industries/hosting-providers/)** —
  industry-specific positioning
- **[ISP Edition economics for hosting providers](/blog/2026/05/isp-edition-economics-hosting-providers/)** —
  unit-economics walkthrough
- **[Hosting provider platform modernization](/blog/2026/05/hosting-provider-platform-modernization/)** —
  modernisation pattern

---

*Aenix is the company behind Cozystack — a CNCF project, Kubernetes
Certified Distribution. We have shipped Proxmox-to-Cozystack
migrations for growing hosting providers; specific named case studies
remain confidential.*
