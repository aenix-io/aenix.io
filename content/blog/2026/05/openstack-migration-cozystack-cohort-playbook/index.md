---
title: "OpenStack migration — a cohort-based playbook for moving to Cozystack in 2026"
description: "Long-form companion to the OpenStack migration hub. Cohort-based migration playbook from production OpenStack to Cozystack — component mapping, image conversion, networking redesign, operational handover, and the realistic timeline for tier-1 telco-scale and mid-size enterprise estates."
date: 2026-05-11
author: "Aenix Team"
type: "tutorial"
topics: ["OpenStack", "Cozystack", "Migration", "Multi-tenancy", "Kubernetes"]
language: "en"
companion_landing: "/migration/openstack/"
companion_label: "See OpenStack migration hub →"
quiz:
  title: "Test yourself: OpenStack-to-Cozystack migration"
  questions:
    - q: "What does Nova map to in the OpenStack→Cozystack component table?"
      options:
        - { text: "Cilium on Talos", correct: false }
        - { text: "KubeVirt on Talos", correct: true }
        - { text: "LINSTOR + Ceph", correct: false }
      explanation: "Per the component mapping: Nova (compute) → KubeVirt on Talos. Neutron maps to Cilium (eBPF); Cinder maps to LINSTOR or Ceph (Rook-managed)."
    - q: "Which of the three migration pressures is structurally tied to Red Hat OSP transitioning toward OpenShift Virtualization?"
      options:
        - { text: "Engineer scarcity", correct: false }
        - { text: "Vendor distro lifecycle", correct: true }
        - { text: "Service-catalog ceiling", correct: false }
      explanation: "Red Hat OSP 17/18 are the final major release lines as Red Hat transitions toward OpenShift Virtualization. Mirantis transitioned years ago; Canonical Charmed OpenStack has narrower enterprise sales motion. Vendor distro lifecycle is the structural pressure forcing the decision."
    - q: "For a tier-1 telco with 1,000-5,000 nodes and certified VNFs, what's the realistic total modernization timeline?"
      options:
        - { text: "12-24 months", correct: false }
        - { text: "24-48 months for full modernization; first production workloads on Cozystack within 12-18 months", correct: true }
        - { text: "6-12 months", correct: false }
      explanation: "Tier-1 telco modernization is 24-48 months total, with first production workloads on Cozystack within 12-18 months. The VNF modernization track runs 18-36 months in parallel. Mid-size enterprises (200-500 nodes) hit 12-24 months."
    - q: "Which three approaches does the article describe for handling certified VNFs in a tier-1 telco migration?"
      options:
        - { text: "Force re-certification, drop the VNF, or replace the vendor", correct: false }
        - { text: "Run VNFs on KubeVirt under Cozystack, keep certified VNFs on OpenStack in parallel, or negotiate a cloud-native (CNF) equivalent with the vendor", correct: true }
        - { text: "Wait for the regulator to decide", correct: false }
      explanation: "The three documented approaches: (1) run VNFs as VMs on KubeVirt (vendor cert may or may not extend); (2) keep certified VNFs on OpenStack with parallel platforms for that VNF's lifecycle; (3) align with the vendor's own CNF modernization toward Cloud-Native Network Functions on Kubernetes."
    - q: "What culture/discipline shift does the article say takes 4-8 weeks of focused training plus 3-6 months of practice for OpenStack operators?"
      options:
        - { text: "Learning the Cozystack CLI", correct: false }
        - { text: "Internalising GitOps discipline (declarative changes) instead of imperative APIs (CLI, REST, console actions)", correct: true }
        - { text: "Reading Kubernetes RBAC documentation", correct: false }
      explanation: "OpenStack operators are used to imperative APIs. Cozystack expects GitOps for production changes — a culture shift, not just a tool shift. Engineers need 4-8 weeks focused training plus 3-6 months practice to internalise GitOps discipline."
---

**Long-form companion to the [OpenStack migration hub](/migration/openstack/). A cohort-based migration playbook from production OpenStack to Cozystack — covering component mapping, image conversion, networking redesign, operational handover, and the realistic timeline for tier-1 telco-scale and mid-size enterprise estates.**

OpenStack remains widely deployed in telecom and large-enterprise
infrastructure. Modernization is not a one-size-fits-all conversation:
mature telco-scale OpenStack with deep vendor distro support is a
different migration than a mid-size enterprise running upstream
OpenStack with a small ops team. Both can move to Cozystack; the
phasing and risk profile differ substantially.

This article walks through what an OpenStack-to-Cozystack migration
actually looks like in 2026 — phase by phase, with the architectural
decisions that matter and the gotchas that recur.

## Where OpenStack still works (and we'll say so)

Before discussing migration, the honest reverse case. OpenStack remains
the right answer for:

- **Tier-1 telco NFV environments** where vendor distro (Red Hat OSP,
  Mirantis, Canonical, Wind River) still has support runway and VNF
  certification is OpenStack-specific
- **Very large estates (>1,000 nodes)** with deep OpenStack expertise
  where operational complexity is already amortised
- **Government clouds** where OpenStack is the procurement-mandated
  platform (some EU member-state and APAC public-sector tenders)
- **Existing investments at year 2-3 of a 5-year deployment** where
  migration cost would exceed continuing operations cost

For everyone else, modernization typically warrants serious evaluation.

## What pushes OpenStack-running organisations to migrate

Three pressures dominate the 2026 conversation:

### 1. Vendor distro lifecycle

Red Hat OSP (OpenStack Platform) is being transitioned by Red Hat
toward OpenShift Virtualization, with OSP 17/18 as the final major
release lines. Mirantis Cloud Platform transitioned its commercial
focus years ago. Canonical Charmed OpenStack remains active but with
narrower enterprise sales motion. Vendor support for OpenStack distros
is consolidating; mid-2020s deployments face a structural transition
in the next 24-36 months.

### 2. Engineer scarcity

OpenStack expertise is a shrinking pool. New engineers are trained on
Kubernetes, not on OpenStack's Nova/Neutron/Cinder/Keystone component
model. Operators with deep OpenStack expertise are aging out or moving
to other roles. Hiring is harder; retention is harder.

### 3. Service-catalog ceiling

OpenStack's primary scope is IaaS (compute, network, storage). Managed
databases (Trove), container orchestration (Magnum), and modern
service families (managed Kafka, S3-equivalent at scale, GPU-as-a-
service, AI inference) either bolt on awkwardly or live outside the
platform entirely. For operators whose customers or internal teams
increasingly expect platform-grade services, OpenStack falls behind
without significant additional engineering.

## Component mapping

For OpenStack operators evaluating Cozystack, the canonical translation:

| OpenStack | Cozystack equivalent |
|---|---|
| **Nova** (compute) | KubeVirt on Talos |
| **Neutron** (networking) | Cilium (eBPF) |
| **Cinder** (block storage) | LINSTOR or Ceph (Rook-managed) |
| **Swift** (object storage) | SeaweedFS or Ceph RGW (S3-compatible) |
| **Keystone** (identity) | Kubernetes RBAC + workforce IdP federation (Keycloak / Okta / AD) |
| **Glance** (image registry) | KubeVirt CDI + container image registry |
| **Magnum** (managed Kubernetes) | Native — Kubernetes IS the platform |
| **Heat** (orchestration) | Kubernetes operators + GitOps (Flux / Argo CD) |
| **Horizon** (UI) | cozyportal |
| **Ceilometer / Telemetry** | VictoriaMetrics + VictoriaLogs |
| **Trove** (DBaaS) | Cozystack managed databases (PostgreSQL, MySQL, Redis, Kafka, RabbitMQ, ClickHouse) |
| **Designate** (DNS) | external-dns operator + customer DNS provider |
| **Octavia** (load balancing) | MetalLB + Cilium L7 + ingress controllers |
| **Manila** (file share) | LINSTOR + NFS-Ganesha (RWX volumes, Cozystack v1.0+) |
| **Project / Domain / Role** (tenancy) | Tenant CRD + nested tenants |

Most OpenStack engineers find Cozystack's operational model simpler
once they cross the Kubernetes learning curve — fewer moving parts,
more declarative, integrated observability. The learning curve itself
is real: 4-8 weeks per engineer for focused training, longer for
domain depth.

## Cohort-based migration phases

### Phase 0 — Assessment (3-6 weeks)

Inventory the OpenStack deployment:

- **Service-by-service usage** — which OpenStack services do you
  actually use (Nova / Neutron / Cinder almost always; everything
  else is variable)
- **Workload inventory** — instance count, OS mix, vCPU/RAM/disk
  profiles, criticality tier
- **Network inventory** — subnets, security groups, floating IPs,
  external network configurations, Octavia load balancers
- **Storage inventory** — Cinder volume types, snapshot retention,
  Swift bucket usage
- **Multi-tenancy** — project / domain hierarchy, custom roles, RBAC
  policies
- **Integrations** — vendor VNF certifications, observability hooks,
  CI/CD pipelines, ITSM tooling

Output: migration plan with workload buckets (migrate-now /
migrate-later / stay / re-architect), risk flags, phasing options.

### Phase 1 — Cozystack foundation (2-4 months)

Hardware procurement (or repurpose of OpenStack-freed capacity in
later phases). Cozystack platform deployed on new hardware in parallel
to existing OpenStack. Cilium networking validated against OpenStack
network configurations expected to translate. LINSTOR / Ceph storage
operationalised at scale. Federated identity (Keycloak + customer
IdP).

Tenant CRD model designed to map cleanly from OpenStack project /
domain hierarchy. Each top-level OpenStack project typically becomes
a Cozystack Tenant; nested projects become nested Tenants.

End state: Cozystack platform up, internally validated, ready for
workload onboarding.

### Phase 2 — Operational tooling (2-3 months)

Observability stack (VictoriaMetrics + VictoriaLogs) integrated with
customer SIEM. Backup/DR with Velero + per-app patterns. Runbook
library. On-call rotation. Incident response process. GitOps
deployment workflow (Flux default; Argo CD if customer prefers).

End state: production-operations-grade tooling in place; team
training in progress.

### Phase 3 — Workload migration cohorts (4-12 months)

Cohorts of 50-200 instances migrating at a time. Per cohort:

1. **Image conversion** — OpenStack Glance images converted to
   KubeVirt-compatible format. Most KVM-based OpenStack images
   convert with `qemu-img convert` + minor metadata adjustment.
   Windows instances get virtio driver injection.
2. **Network mapping** — OpenStack subnets to Cilium ClusterPool +
   NetworkPolicies, security groups to NetworkPolicies, Octavia load
   balancers to MetalLB + ingress controllers.
3. **Storage migration** — Cinder volume data migrated to LINSTOR or
   Ceph. Snapshot history preserved or pruned per retention policy.
   For Swift-stored data, S3 API compatibility allows direct
   migration to SeaweedFS / Ceph RGW.
4. **Validation window** — workload runs in parallel on Cozystack
   for typically 7-14 days. Application owner sign-off required
   before final cutover.
5. **Final cutover** — DNS / load balancer flip to Cozystack
   endpoint. OpenStack instance kept available for 7-30 days
   rollback window.

### Phase 4 — Operational handover (2-4 months, parallel to Phase 3)

Aenix engineers reduce direct involvement. Customer operations team
absorbs Tier-1 / Tier-2 incidents. Aenix retainer continues for
Tier-3 SLA escalation. Documentation handover. Knowledge transfer
sessions.

### Phase 5 — OpenStack decommission (2-6 months)

As migration cohorts complete, OpenStack capacity is repurposed into
the Cozystack cluster. Hardware is the same commodity x86; OpenStack
software stack is retired. Vendor distro contracts wound down per
their lifecycle.

## Where OpenStack-to-Cozystack migrations stumble

### 1. Network model redesign

OpenStack Neutron's network model has historically been highly
configurable — provider networks, tenant networks, security groups,
floating IPs, FWaaS, VPNaaS, complex routing topologies. Cilium's
eBPF model is fundamentally different: L4/L7 NetworkPolicies, eBPF-
based routing, Hubble for observability.

Translating elaborate Neutron configurations to Cilium requires
careful architecture work in Phase 0-1. Skipping this produces
production incidents in Phase 3 where customer workloads expected
specific network behaviour that doesn't translate directly.

### 2. Multi-tenant policy translation

OpenStack's role-based access (Keystone roles, project policies)
doesn't map 1:1 to Kubernetes RBAC + Tenant CRD. Custom roles
defined for specific OpenStack APIs may not have direct Kubernetes
equivalents. Plan time for policy redesign rather than mechanical
translation.

### 3. VNF certification

Tier-1 telco deployments running certified VNFs face a different
challenge: the VNF vendor certifies on specific OpenStack distros,
not on Cozystack. Three approaches:

- **Run VNFs on KubeVirt under Cozystack** — the VNF runs as a VM;
  vendor certification may or may not extend to this configuration.
  Vendor dialogue required.
- **Keep certified VNFs on OpenStack** — parallel platforms for the
  lifecycle of the certified VNF; modernization track for new VNFs
  on Cozystack.
- **Negotiate cloud-native equivalent** — many VNF vendors are
  migrating toward Cloud-Native Network Functions (CNFs) on
  Kubernetes; the migration may align with vendor's own CNF
  modernization.

In our tier-1 telco engagements, all three patterns appear,
depending on which VNF vendor and which generation.

### 4. Operational culture shift

OpenStack operators are used to imperative APIs (CLI commands, REST
calls, console actions). Cozystack expects GitOps for production
changes. This is a culture shift, not just a tool shift. Engineers
who built OpenStack expertise around imperative workflows need 4-8
weeks of focused training plus 3-6 months of practice to internalise
the GitOps discipline.

Aenix engagement includes training as a workstream; customer
investment in the cultural transition is also required.

## Timeline realities

Mid-size enterprise (200-500 nodes, simple multi-tenancy, mostly
default networking):

- Phase 0: 3-6 weeks
- Phase 1: 2-3 months
- Phase 2: 1-2 months
- Phase 3: 6-12 months
- Phase 4-5: 3-6 months

**Total: 12-24 months**

Tier-1 telco (1,000-5,000 nodes, complex multi-tenancy, certified VNF
environments, NFV-specific networking):

- Phase 0: 2-3 months
- Phase 1: 4-6 months
- Phase 2: 2-3 months
- Phase 3: 12-24 months (multiple parallel cohorts)
- Phase 4-5: 6-12 months
- VNF modernization track: 18-36 months in parallel

**Total: 24-48 months for full modernization; first production
workloads on Cozystack within 12-18 months**

## When OpenStack-to-Cozystack migration is the right answer

Strong fit:

- Vendor distro lifecycle is forcing a decision within 24 months
- Engineer scarcity is starting to hurt operational quality
- Customer demand for managed databases / S3 / containers / GPU
  services exceeds what OpenStack natively handles
- Modernisation budget is available across 2-4 years

Marginal fit:

- Stable, mature OpenStack deployment with deep team expertise and
  no service-catalog pressure — modernisation can wait for vendor
  lifecycle
- Very large estates (>5,000 nodes) where modernisation cost is in
  the multi-tens-of-millions range — phased multi-year programme
  required

Poor fit:

- Recently-deployed OpenStack at year 1 of a 5-year programme —
  finish what you started; modernise at lifecycle
- OpenStack-on-government-procurement-mandate without flexibility to
  change platforms

## Engagement structure

- **Discovery call** (30 min, free)
- **Migration assessment** (3-6 weeks, fixed-price) — workload buckets,
  phasing options, risk flags
- **Pilot deployment** (2-3 months) — Cozystack stood up, 50-100
  workloads migrated, billing / operational workflows validated
- **Cohort migration** (6-24 months) — workload migration in cohorts
- **OpenStack decommission** (parallel to cohort migration) — staged
  as cohorts complete
- **Managed retainer** (optional, ongoing) — Aenix Tier-3 SLA

## Where to dig deeper

- **[OpenStack migration hub](/migration/openstack/)** — commercial
  landing
- **[OpenStack vs Cozystack modernization](/blog/2026/05/openstack-vs-cozystack-modernization/)** —
  the modernization path analysis
- **[OpenStack alternative](/alternatives/openstack-alternative/)** —
  alternative-focused commercial landing
- **[ISP Edition product page](/products/aenix-platform/isp-edition/)** —
  common target edition for hosting-provider OpenStack migrations
- **[Public Cloud Edition product page](/products/aenix-platform/public-cloud-edition/)** —
  common target edition for tier-1 telco OpenStack migrations

---

*Aenix is the company behind Cozystack — a CNCF project, Kubernetes
Certified Distribution. We have shipped OpenStack-to-Cozystack
migrations across hosting providers and telco operators; specific
named case studies remain NDA-protected.*
