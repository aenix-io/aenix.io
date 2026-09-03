---
title: "Case studies"
description: "Five Aenix deployments written up with numbers: GPU repatriation, Proxmox consolidation, a sovereign public cloud, GPU bursting, an AI platform as installer."
hero_subtitle: "Real Aenix Platform deployments across hosting, AI, and academia"
language: "en"
---

**Nine deployments below, written up in detail — what the estate looked like before, what was built, what broke, and what the numbers were afterwards. The customers are anonymized because the contracts require it; the architectures, the failure modes and the figures are not. Beyond these, public references include regional hosting providers running Ænix Public Cloud Platform, platform R&D for ecosystem vendors, and tier-1 European bank engagements still under NDA.**

---

## The detailed cases

### [8xH100 inference on your own bare metal](/case-studies/bare-metal-gpu-inference/)

A mass-market mobile photo and video app moved AI inference off a rented per-hour GPU cloud onto its own 8xH100 server, with KubeVirt GPU passthrough. Two to three times the GPU efficiency at the same workload, roughly two months to production.

### [Bare-metal Kubernetes for a messaging-API SaaS](/case-studies/bare-metal-kubernetes-messaging-saas/)

Thirteen Proxmox hypervisor hosts consolidated onto a single declarative cluster carrying 25,000 workload instances, managed databases included, run by one engineer through GitOps.

### [A sovereign public cloud on bare metal](/case-studies/sovereign-public-cloud/)

A Swiss provider replaced a hypervisor stack with a full commercial public cloud across three data centres — synchronous cross-DC replication, at-rest encryption, GPU in production, and a 20-hour incident closed with zero data loss.

### [From public cloud to bare metal, bursting on demand](/case-studies/multicloud-academic-gpu/)

A European academic-computing SaaS left a hyperscaler for owned bare metal without downtime for thousands of active users, kept one Cluster API across bare metal, hyperscaler and a sovereign OpenStack cloud, and cut GPU cost about fivefold.

### [One portal over OpenNebula, VMware and Kubernetes](/case-studies/unified-cloud-portal-financial-group/)

A financial group in Asia put one self-service catalogue over three infrastructures it kept running underneath — OpenNebula, VMware and Kubernetes-as-a-Service. Four months to production, and the provisioning that used to arrive as tickets became automation.

### [A private cloud inside a bank](/case-studies/private-cloud-in-a-bank/)

Internal teams get environments and managed services on demand, inside the bank, with per-tenant RBAC, self-managed firewall and load-balancer rules, backup policy and threshold alerting. Three months from the start of integration, on the bank's own Keycloak and Ceph.

### [An internal data and AI platform, GPUs included](/case-studies/internal-data-and-ai-platform/)

One platform for analytics, data lakes and model training as well as AI/ML services: GPU pools with time-slicing and per-tenant quotas, a single scheduler for pods and VMs, and usage metrics precise enough to charge teams. In rollout, with the GPU layer already complete.

### [When the return packet takes the wrong door](/case-studies/metallb-evpn-address-mobility/)

A hosting provider's public addresses were pinned to a rack and half the traffic died silently. A controller turned six manual commands per subnet per node into declared state and made every node a VTEP in the provider's EVPN fabric, so the address follows the workload.

### [Cozystack as a universal installer](/case-studies/ai-universal-installer/)

A telecom operator and integrator built a corporate AI platform — GPU scheduling, RAG on Qdrant, NVIDIA Dynamo inference, geo-distributed GPU — then shipped the same distribution into a state-owned end customer's own environment.

<div class="cta-row">
  <a class="cta-primary" href="/contact/">Discuss your case</a>
  <a class="cta-secondary" href="/tco-calculator/">Model your TCO →</a>
</div>

---

## Quick facts

- **Public production customers (subject to permission per use):** GoHost.kz, HDReady, Beby Cloud, HiKube, UseTech, Cloupard, Cloudsy (Ænix Public Cloud Platform)
- **Platform R&D engagements:** CSI driver development, block storage research, virtualization platform prototypes — for ecosystem vendors
- **Detailed written-up deployments:** nine, anonymized by contract, with architecture and figures published in full (above)
- **Tier-1 European banks:** multi-million-euro Ænix Private Cloud Platform engagements (NDA-protected; naming permitted from mid-2027)
- **Engagement sizes:** from a $1,250/month Public Cloud Platform support tier through to multi-year Public Cloud and Enterprise builds quoted per RFP

---

## Case categories

### Regional hosting providers (Ænix Public Cloud Platform)

Production deployments running our hosting-specific edition. WHMCS-integrated billing, branded customer-facing portal, multi-tier reseller model, expanded service catalog (managed databases, S3, GPU), tenant lock/suspension.

**Public customers** (currently listed on aenix.io):
- GoHost.kz
- HDReady
- Beby Cloud
- HiKube
- UseTech
- Cloupard
- Cloudsy

These customers use Ænix Public Cloud Platform to deliver multi-tenant cloud products to their end customers.

[Ænix Public Cloud Platform →](/products/public-cloud-platform/)

### Tier-1 European bank engagements (NDA until mid-2027)

Multi-million-euro Ænix Private Cloud Platform deployments delivering DORA-aligned sovereign cloud workloads. Customer-controlled hardware, customer-managed keys, audit-ready logging, multi-tenant isolation aligned with risk classification.

**Status:** Multiple engagements active. **First named case studies expected mid-2027** as NDAs expire.

[DORA compliance with Ænix Platform →](/solutions/dora-compliance/)

### Platform R&D for ecosystem vendors

Aenix has delivered deep platform component R&D for established platform vendors. These engagements demonstrate the technical capability that underpins Ænix Platform delivery.

**Public case studies:**

#### CSI driver for shared SAN environments
Custom Container Storage Interface driver development for shared SAN architecture, integrated into platform vendor's distribution.

#### Backup system reducing storage cost up to 75%
Storage cost optimization through deduplication and tiering — production deployment saving customer ~75% on backup storage spend.

#### Kubernetes-in-Kubernetes + PXE bootable server farm
Nested Kubernetes architecture with PXE-based provisioning for fleet-scale server management.

#### Lightweight VDI
Virtual desktop infrastructure on Kubernetes-native architecture — alternative to traditional VDI stacks.

#### Public Cloud / VPS hosting platform
Cloud platform research and prototype for hosting provider modernization.

#### Virtualization platform research for Kubernetes
Foundational research on KubeVirt-based virtualization at production scale.

These engagements predate Ænix Platform's commercial launch and represent the technical foundation Aenix brings to platform builds.

---

## What we can share publicly

| Customer type | What we can say |
|---|---|
| Regional hosting providers | Named (currently listed on aenix.io); deployment scope; Ænix Public Cloud Platform usage |
| Platform R&D for ecosystem vendors | Project name and outcomes; vendor-specific details vary |
| Tier-1 European banks | Anonymized only ("tier-1 European bank under DORA scope") until mid-2027 NDA expirations |
| Sovereign cloud initiatives | Anonymized only; named cases pending procurement / publicity windows |
| AI/ML deployments | Anonymized only; under NDA |

---

## Frequently asked questions

### How can I learn more about a specific case?

For named case studies, the engagement details are public — book a [discovery call](/contact/) and we'll walk through them.

For NDA-protected engagements (banks, sovereign cloud, AI/ML), Aenix sales can arrange direct customer reference calls under NDA for active engagement opportunities.

### Are these all Aenix customers?

The platform R&D engagements are historical work — Aenix delivered the projects. Some predate the Aenix legal entities in their current form but are credited as Aenix work.

The hosting providers are current Ænix Public Cloud Platform customers.

The bank engagements are current Ænix Private Cloud Platform customers (NDA-protected until mid-2027).

### When will named bank case studies become available?

First NDA expirations are expected mid-2027. As they land, named case studies will be published here. Until then, bank engagements are described only in anonymized form.

### Can I see Cozystack production deployments separately?

Cozystack is open-source — many organizations run it without commercial Aenix engagement. The CNCF Landscape lists Cozystack production users community-wide. Aenix tracks Cozystack production references as part of community engagement, but Cozystack production users are not necessarily Aenix customers.

---

## How to start

Book a discovery call. We'll match your situation against relevant case patterns and discuss next steps.

<div class="cta-row">
  <a class="cta-primary" href="/contact/">Book a call</a>
</div>

---

*Aenix is the open-core company behind [Cozystack](https://cozystack.io) (CNCF project) and the maker of Ænix Platform — a turnkey commercial cloud-in-a-box with three platforms.*
