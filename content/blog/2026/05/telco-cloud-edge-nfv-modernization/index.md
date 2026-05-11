---
title: "Telco cloud modernization in 2026 — from legacy NFV to Kubernetes-native edge"
description: "Long-form companion to the telco industry page. For network architects, cloud-platform leads, and CTOs at tier-1 and tier-2 telecom operators planning the modernization of legacy NFV environments to Kubernetes-native sovereign cloud platforms."
date: 2026-05-11
author: "Aenix Team"
type: "article"
topics: ["Telco", "Sovereignty", "Multi-tenancy", "Cozystack", "Cloud", "AI/ML"]
language: "en"
companion_landing: "/industries/telco/"
companion_label: "See telco industry page →"
---

**Long-form companion to the [telco industry page](/industries/telco/). For network architects, cloud-platform leads, and CTOs at tier-1 and tier-2 telecom operators planning modernization of legacy NFV environments to Kubernetes-native sovereign cloud platforms — covering the architectural drivers, what to keep from the NFV era, where Kubernetes-native breaks the legacy mould, and how to phase a multi-year programme.**

The telco cloud conversation in 2026 sits at an unusual intersection
of pressures that no other vertical faces simultaneously. NFV
deployments from 2015-2020 are aging out. NIS2 obligations apply
across the operator's infrastructure. Sovereign-cloud branded
products are commercially attractive (regional sovereignty
positioning is hard for hyperscalers to replicate). Edge-compute
demand for 5G/6G workloads is growing. AI for network operations
(traffic prediction, anomaly detection, customer-facing assistants)
is emerging.

The architectural answer is rarely "one platform for everything" —
telcos have multiple operational domains, each with its own
constraints. But the patterns that work across all of them have
converged on Kubernetes-native multi-site platforms with strong
multi-tenant isolation, sovereign operation, and edge-aware
scheduling.

## What modernization actually replaces

Most tier-1 European telcos in 2026 operate three or four parallel
infrastructure environments:

### 1. Legacy NFV environment (2015-2020 vintage)

Typically built on VMware Cloud Foundation, OpenStack-based vendor
distros (Red Hat OSP, Mirantis Cloud Platform, Wind River, etc.), or
vendor-specific NFVI (Ericsson CEE, Nokia CloudBand). Hosts VNFs from
network-equipment vendors with vendor-specific certification
requirements.

Modernization driver: vendor distribution lifecycles (Red Hat OSP
EOL, Mirantis transition), VMware Broadcom pricing, operational
complexity that compounds with team turnover. Most tier-1 operators
have parallel modernization programmes running.

### 2. IT cloud (separate from NFV)

For business workloads, customer-facing portals, billing, OSS/BSS.
Typically a separate VMware estate or hyperscaler-region deployment.
Same Broadcom pressure on VMware; sovereignty pressure on hyperscaler
deployment.

### 3. Edge compute (5G/6G era)

Distributed edge sites at substations, central offices, MEC nodes.
Smaller-footprint deployments with intermittent connectivity to core.
Often built on different stack from core platform (legacy small-
footprint orchestration).

### 4. AI / data lake / network analytics

Newer environment for traffic prediction, anomaly detection, customer-
facing AI. Often hyperscaler-based today; under sovereignty pressure
to move on-prem for sensitive workload patterns.

## The single-platform vision (and where it works)

The architectural attraction of Cozystack-based modernization is a
unified platform across all four environments. One operational model,
one upgrade lifecycle, one observability stack, federated identity,
GitOps-driven changes.

Where this works:

- **IT cloud workloads** — straightforward Cozystack-based deployment.
  Most tier-1 telco IT cloud modernizations follow this pattern.
- **AI / data lake / analytics** — Cozystack AI/ML Edition workload
  patterns; sovereign by default; multi-tenant for cross-BU access.
- **Edge compute** — Cozystack supports small-footprint edge
  deployments with federation to core. Standardised across sites.

Where it requires nuance:

- **NFV environment specifically** — VNF certification with vendor
  equipment is still vendor-managed. The Cozystack platform underneath
  can host KubeVirt-based VNFs, but the certification stack remains
  vendor-bound. Some VNFs are certified on specific OpenStack
  distributions and need a parallel modernization track.
- **Critical SCADA-style network OAM** — air-gapped network management
  systems with their own operational model. Cozystack can host them,
  but the OT-style operational discipline differs from IT cloud.

The practical pattern: Cozystack as the IT cloud platform + AI
platform + edge platform; NFV gets its own modernization track with
Cozystack-equivalent architecture where vendor certification allows.

## Multi-tenancy for telco

Telco operators have layered multi-tenancy needs:

- **Operational BU separation** — fixed broadband, mobile, enterprise,
  consumer; each BU has different operational ownership.
- **Customer-facing services** — telco offers cloud capacity to its
  business customers (sovereign cloud product line); each customer
  is its own tenant.
- **Internal vs external workloads** — internal-only workloads (OAM,
  observability backends) versus customer-facing workloads (cloud
  product, customer portal).
- **Sectoral / regulated tenants** — telcos increasingly host
  regulated workloads (financial sector adjacencies, public-sector
  contracts) under sectoral tenant isolation.

Cozystack's Tenant CRD model with nested tenants supports all four
layers natively. A tier-1 telco typically operates 5-50 top-level
tenants with hundreds to thousands of nested tenants.

## Sovereignty positioning

For telcos, sovereignty is not just compliance — it's a commercial
differentiator. European customers increasingly view US-headquartered
hyperscaler dependencies as structural risk. Telcos can offer sovereign
cloud products in their region that hyperscaler-managed offerings
cannot match on the substantive sovereignty criteria.

Cozystack-based architecture supports this commercially:

- **Customer-controlled keys** — telco customer holds keys, telco
  provides operational support
- **Air-gap option** — for defence-adjacent / classified customers
- **Open-source substrate** — exit-readiness built in; telco doesn't
  lock customers into vendor relationship
- **EU jurisdiction** — telco's EU presence + Aenix EU contracting
  entity (AENIX s.r.o.)

For sovereign cloud commercial product lines, the Ænix Platform
Public Cloud Edition is the typical pairing — multi-region, multi-DC,
service-catalog depth, brand-engineered customer portal.

## Edge compute realities

5G/6G drove distributed compute requirements that NFV-era architecture
didn't anticipate. Modern edge compute for telco operations spans:

- **MEC (Multi-access Edge Computing) nodes** at base-station or
  central-office locations for low-latency customer workloads
- **Distributed RAN intelligence** — vRAN / O-RAN workloads with
  real-time constraints
- **Customer-edge compute** — telco-managed edge instances on customer
  premises (factories, smart-grid sites, transport hubs)
- **Sectoral edge** — telco-operated edge for sectoral customers
  (financial branch offices, healthcare facilities, retail)

Cozystack supports edge deployment with reduced footprint (~3-node
clusters at edge sites typical) with federation to regional and core
platforms. Same operational model; same observability; differentiated
service catalog per tier.

## AI for telco operations

The AI workload patterns at tier-1 telcos:

- **Traffic prediction and capacity planning** — 24/7 inference on
  network telemetry
- **Anomaly detection** — security and operational anomalies in real-
  time
- **Customer-facing AI** — chatbot, billing assistance, customer
  service routing
- **Network optimization** — routing, traffic engineering, energy
  efficiency
- **Fraud detection** — transaction anomaly detection, identity
  validation
- **Sectoral AI services** — telco-hosted AI capacity for sectoral
  customers (banking AI, healthcare AI, public-sector AI)

Sustained-utilisation workload profiles dominate; this is exactly the
case where dedicated GPU economics beat hyperscaler. Cozystack AI/ML
Edition fits.

## Phasing a tier-1 telco modernization

Tier-1 telco modernization runs 18-36+ months. Typical phasing:

### Phase 0 — Strategic engagement (3-6 months)

Architecture review across all four environments. Commercial alignment
on sovereign cloud product line, sectoral positioning, modernization
sequencing. Sponsor and workstream-lead identification.

### Phase 1 — IT cloud modernization (6-12 months)

Cozystack-based Enterprise / Public Cloud Edition deployed. Internal
workloads migrated. Customer-facing portal launched for sovereign
cloud product.

### Phase 2 — AI / data lake (6-9 months, parallel)

Cozystack AI/ML Edition deployed. Network analytics workloads moved
on-prem. Customer-facing AI services launched.

### Phase 3 — Edge expansion (6-18 months, ongoing)

Edge sites stood up at MEC / central-office / customer-edge locations.
Federated identity and observability across.

### Phase 4 — NFV modernization (parallel, 12-30 months)

Vendor-certified VNF replatforming where allowed. Greenfield deployments
of new VNFs on Cozystack-based architecture. Legacy NFV maintained
in parallel until vendor lifecycle forces upgrade.

Phase 5+ depends on customer-facing product growth: regional expansion,
sectoral SKUs, new service families.

## When this fits a telco

Strong fit:

- Tier-1 or tier-2 European telecom operator
- Active legacy NFV modernization programme
- Strategic intent to offer sovereign cloud product line
- Multi-million-euro budget envelope across multi-year programme
- Senior executive sponsorship (CIO / CTO / Cloud BU lead)

Marginal fit:

- Smaller operators (regional, MVNO-style) — may fit Enterprise
  Edition rather than full Public Cloud Edition
- Operators with deep OpenStack-based NFV investment that still
  works — modernization can wait for vendor lifecycle to force it

## Where to dig deeper

- **[Telco industry page](/industries/telco/)** — commercial landing
- **[Public Cloud Edition product page](/products/aenix-platform/public-cloud-edition/)** —
  the typical edition for tier-1 telco engagements
- **[Sovereign cloud builder services](/services/sovereign-cloud-builder/)** —
  for sovereign cloud product line builds
- **[Sovereign AI services](/solutions/sovereign-ai/)** — for AI
  workload patterns
- **[Public Cloud Edition build phasing](/blog/2026/05/public-cloud-edition-multi-tenant-cloud-builder/)** —
  multi-year build phasing
- **[Sovereign AI architecture decisions](/blog/2026/05/sovereign-ai-architecture-decisions/)** —
  seven decisions for sovereign AI

---

*Aenix is the company behind Cozystack — a CNCF project, Kubernetes
Certified Distribution. Engineering teams across the EU and Central
Asia, with telco-specific engagement experience under NDA.*
