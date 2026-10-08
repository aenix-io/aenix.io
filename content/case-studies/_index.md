---
title: "Case studies"
seo_title: "Case studies: Cozystack platforms in production"
description: "Nine anonymised Ænix deployments with numbers: GPU inference, Proxmox consolidation, a sovereign public cloud, a bank private cloud and an AI platform."
hero_subtitle: "Anonymised deployments across hosting, regulated finance, telecom, AI and academia"
hide_child_cards: true
language: "en"
hreflang_de: /de/case-studies/
aliases:
  - /kubefarm/
---

**Nine deployments below, written up in detail — what the estate looked like before, what was built, what broke, and what the numbers were afterwards. The customers are anonymized because the contracts require it; the architectures, the failure modes and the figures are not. Beyond these, the hosting providers named below run Ænix Public Cloud Platform in production, and reference calls for other engagements can be arranged under NDA.**

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

One platform for analytics, data lakes and model training as well as AI/ML services: GPU pools with per-tenant quotas, a single scheduler for pods and VMs, and usage metrics precise enough to charge teams. In rollout, with the GPU layer already complete.

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

- **Platform R&D engagements:** CSI driver development, block storage research, virtualization platform prototypes — for ecosystem vendors
- **Detailed written-up deployments:** nine, anonymized by contract, with architecture and figures published in full (above)
- **Banks:** Ænix Private Cloud Platform engagements under NDA; one is written up anonymously above ([a private cloud inside a bank](/case-studies/private-cloud-in-a-bank/))
- **Engagement sizes:** from Ænix Public Cloud Platform subscriptions on the published [support tiers](/pricing/) to Private Cloud Platform programmes quoted per RFP

---

## Case categories

### Regional hosting providers (Ænix Public Cloud Platform)

Production deployments of Ænix Public Cloud Platform: WHMCS-integrated billing, branded customer-facing portal, multi-tier reseller model, expanded service catalog (managed databases, S3, GPU), tenant lock/suspension.

**Customers named with their permission:**
- GoHost.kz
- HDReady
- Beby Cloud
- HiKube
- UseTech
- Cloupard
- Cloudsy

These customers use Ænix Public Cloud Platform to deliver multi-tenant cloud products to their end customers.

[Ænix Public Cloud Platform →](/products/public-cloud-platform/)

### Banks and regulated finance (under NDA)

Ænix Private Cloud Platform engagements for banks and financial groups, on customer-owned hardware, with tenant isolation, audit logging the customer routes and retains, and backups and encryption configured during the build. The DORA obligations remain the bank's; the platform supplies controls it can evidence — see the [DORA evidence page](/compliance/dora/). Two of these are written up anonymously: [a private cloud inside a bank](/case-studies/private-cloud-in-a-bank/) and [one portal for a financial group](/case-studies/unified-cloud-portal-financial-group/). Named write-ups depend on customer permission.

[DORA readiness engagement →](/solutions/dora-compliance/)

### Earlier platform R&D (no write-ups)

Before the current platforms, the team delivered platform component R&D for established platform vendors. There are no published write-ups for these projects; they are listed for the engineering background they represent.

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


---

## What we can share publicly

| Customer type | What we can say |
|---|---|
| Regional hosting providers | Named with their permission; deployment scope; Ænix Public Cloud Platform usage |
| Platform R&D for ecosystem vendors | Project name and outcomes; vendor-specific details vary |
| Banks and financial groups | Anonymized only, under NDA |
| Sovereign cloud initiatives | Anonymized only; named cases pending procurement / publicity windows |
| AI/ML deployments | Anonymized only; under NDA |

---

## Frequently asked questions

### How can I learn more about a specific case?

Book a [discovery call](/contact/) and we will walk through the cases closest to your situation. For the named hosting providers, and for some NDA-protected engagements, we can arrange a reference call under NDA when you are evaluating a concrete project.

### Are these all Ænix customers?

The platform R&D engagements are earlier work by the same engineering team.

The hosting providers are current Ænix Public Cloud Platform customers.

The bank engagements are current Ænix Private Cloud Platform customers under NDA.

### Will named bank case studies be published?

Only when the customers agree. Until then, bank engagements are described in anonymized form, and reference calls can be arranged under NDA.

### Can I see Cozystack production deployments separately?

Cozystack is open source, and many organizations run it without a commercial Ænix engagement. Those users are not necessarily Ænix customers, and they are not listed here; the project itself is described at [cozystack.io](https://cozystack.io).

---

## How to start

Book a discovery call. We'll match your situation against relevant case patterns and discuss next steps.

<div class="cta-row">
  <a class="cta-primary" href="/contact/">Book a call</a>
</div>

---

*Ænix created [Cozystack](https://cozystack.io), a CNCF Sandbox project, and co-maintains it with maintainers from other companies. On it, Ænix builds three commercial platforms: Ænix Public Cloud Platform, Ænix Private Cloud Platform and Ænix AI Platform.*
