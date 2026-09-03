---
title: "A sovereign public cloud on bare metal"
description: "A Swiss provider moved off a hypervisor stack to a full commercial public cloud on Cozystack — multi-region across three data centres, synchronous cross-DC replication, at-rest encryption, and a 20-hour incident closed with zero data loss."
hero_subtitle: "A commercial public cloud on bare metal, multi-region"
date: 2026-06-15
lastmod: 2026-06-15
page_type: "case-study"
language: "en"
hreflang_de: "/de/case-studies/sovereign-public-cloud/"
images: ["img/og/og-case-sovereign-public-cloud.png"]
related_pages:
  - /products/public-cloud-platform/
  - /solutions/data-sovereignty/
  - /industries/hosting-providers/
  - /services/sovereign-cloud-builder/
---

<div class="cs-tags">
  <span class="cs-tag">Sovereignty</span>
  <span class="cs-tag">3 DCs · DRBD</span>
  <span class="cs-tag">GPU in production</span>
  <span class="cs-tag">Disaster Recovery</span>
  <span class="cs-tag">Encryption</span>
</div>

**A Swiss cloud provider moved off a hypervisor stack and stood up a full commercial public cloud on Cozystack — VMs, managed Kubernetes, databases and GPUs on owned infrastructure, with no hyperscalers. The compute cluster is geo-distributed across three Swiss data centres with synchronous replication; a major 20-hour storage incident during an upgrade was recovered with zero data loss.**

<div class="cs-stats">
  <div class="cs-stat"><div class="cs-stat__num">3 DCs</div><div class="cs-stat__label">synchronous storage replication across data centres, etcd over three</div></div>
  <div class="cs-stat"><div class="cs-stat__num">20 h → 0</div><div class="cs-stat__label">hours of incident — zero data lost</div></div>
  <div class="cs-stat"><div class="cs-stat__num">10+</div><div class="cs-stat__label">tenants in production; public site in three languages</div></div>
</div>

## About the project

The client is a Swiss cloud provider. Before the project it ran on a hypervisor stack (Harvester) and, historically, on a Jelastic/Virtuozzo legacy — hence the pain with vendor lock-in, licensing and the inability to add features quickly. Before Cozystack it evaluated OpenShift and OpenStack and considered building its own platform — "we didn't have the bandwidth or the people".

The goal — a full-fledged commercial public cloud under its own brand: VMs, managed Kubernetes, databases and GPUs, entirely on owned infrastructure, with no hyperscalers. For the Swiss market (public sector, finance) this is about sovereignty: data must stay in-country and be encrypted, and the provider must offer a contractual SLA on top of an open CNCF project. Two delivery formats: a public cloud and an on-prem appliance for large customers (banks, government) with thousands of VMs.

## Goals and objectives

- Move off the hypervisor stack entirely and stand up a public cloud on Cozystack.
- An operator model like the big clouds: the admin provisions tenants and sub-tenants (customer → their prod/dev/test) with role separation.
- Managed services: VMs (with custom image/template upload for Windows/Linux), Kubernetes, databases, S3 object storage, GPU.
- Multi-region and resilience: multiple DCs, synchronous replication, tolerance to a node failure and a whole DC.
- Sovereignty and encryption: at-rest volume encryption, encrypted replication and inter-DC traffic, a secured S3, a path to BYOK.
- Transparent billing (by dedicated resources, like the big clouds).

## Proposed solution

- **Compute & services** — VMs on KubeVirt, tenant Kubernetes clusters (control plane via Kamaji), managed databases, object storage on SeaweedFS. Two clusters: compute and a separate storage cluster (S3 backend).
- **Multi-region** — the compute cluster is geo-distributed across three Swiss DCs: synchronous LINSTOR/DRBD volume replication across DCs, geo-distributed etcd, replication factor 3 (one replica per DC).
- **Storage** — LINSTOR/DRBD on ZFS, four classes (local / replicated × encrypted LUKS, master-passphrase per cluster), BYOK on the roadmap (OpenBao); RWX for tenant clusters via LINSTOR-NFS; for backup buckets — Object Lock and versioning (immutable copies).
- **Networking** — Kube-OVN + Cilium + MetalLB; VPC, firewall gateways, dual uplinks with policy routing.
- **Billing** — an in-house system: selling dedicated vCPU/RAM (like the big clouds), hourly metering into an external database.

The engagement grew into ongoing support and co-development: the client's engineers became Cozystack maintainers.

{{< placeholder-image width="1200" height="640" label="Sovereign boundary (Switzerland): compute cluster geo-distributed across three DCs with synchronous DRBD replication and etcd over three sites; a separate SeaweedFS object-storage cluster holds immutable backups; at-rest / in-transit encryption throughout" >}}

## Execution: new requirements and how we handled them

- **Encryption for regulatory requirements.** As clients from regulated sectors onboarded, requests appeared: encrypted storage classes, an encrypted S3 endpoint, encrypted DRBD replication and inter-DC traffic. Part shipped, part (bucket encryption, BYOK) is being driven upstream.
- **Real DR drills.** The client regularly tests resilience "for real" — powering nodes off to see what happens. This surfaced non-obvious cascades (e.g. the network controller's sensitivity to leader loss). We rolled out backups (Velero at platform and tenant level), tenant-cluster snapshots, and a protection webhook that prevents critical objects (volumes, namespaces, load balancers) from being deleted by accident.
- **A major incident — recovered with zero data loss.** During a major upgrade, a cascading storage failure hit: a DRBD race, loss of some patches at an intermediate step, network-port exhaustion due to OS defaults, and a breaking change in the network layer. The team worked around the clock for about 20 hours and recovered the cloud with **no data loss**; the bugs found went upstream (LINSTOR and its CSI driver; the KubeVirt CSI driver).
- **Operational maturity.** We built a process around it: notify before changes, rehearse upgrades on staging "on the record" then repeat on prod, drop non-declarative commands, AI-assisted incident analysis and ready runbooks (DRBD recovery, Cozystack upgrade).
- **Proactive security.** For Linux kernel vulnerabilities we sent advance write-ups assessing whether the platform was affected, with mitigations. An external pentest found a cross-tenant listing leak (one tenant could see another's object list) — fixed.
- **A stream of enterprise features on demand.** Next-gen GPUs, Windows-VM scheduling with per-node licensing, UEFI/secure boot, guaranteed IOPS, tenant-level network policies, per-tenant OIDC/SSO, golden images and air-gap, white-labeling, CIS hardening.

## Results and current state

- The public cloud is in production: VMs, Kubernetes and GPUs are sold, real clients are onboarding (more than a dozen tenants). A public site in three languages, conference participation, talks on the "vendor lock-in → sovereignty → Cozystack" journey.
- The compute cluster is geo-distributed across three Swiss DCs with synchronous cross-DC replication; the architecture is designed to survive the loss of a whole DC.
- Both clusters (compute and storage) are stable after the incidents — recovery with no data loss.
- Billing by dedicated resources (including S3), backups (Velero + immutable buckets) and volume encryption are in operation; the client runs its own Kubernetes-native dashboard and is an active Cozystack co-contributor.

## Roadmap

- BYOK and bucket encryption (sponsoring the upstream work), per-tenant OIDC/SSO and network policies.
- Guaranteed IOPS and next-generation block storage; moving service announcement from MetalLB to Cilium BGP.
- Expanding the DC footprint; sub-tenant billing; GPU inference as a service; moving the image registry to a separate cluster.

## Why this case matters

<div class="cs-why card-grid">
  <div class="card"><div class="card-body"><h3 class="card-title">A full sovereign public cloud on bare metal</h3><p class="card-description">Migration off a hypervisor to Cozystack and a commercial cloud on Talos, with no hyperscalers.</p></div></div>
  <div class="card"><div class="card-body"><h3 class="card-title">Multi-region resilience</h3><p class="card-description">Three geographically separated DCs, synchronous cross-DC replication and geo-distributed etcd; designed to survive the loss of a whole DC.</p></div></div>
  <div class="card"><div class="card-body"><h3 class="card-title">A 20-hour incident, zero data loss</h3><p class="card-description">A transparent post-mortem and fixes pushed upstream — this is what holding an SLA on the client's production looks like.</p></div></div>
  <div class="card"><div class="card-body"><h3 class="card-title">A mature enterprise set</h3><p class="card-description">At-rest/in-transit encryption, per-tenant SSO and network policies, Windows licensing, performance guarantees, instance-type billing.</p></div></div>
</div>

---

*This case study is published in anonymized form (Tier-3 evidence): the provider is described by profile, not by name. For a reference call under NDA on an active opportunity, [talk to Aenix sales](/contact/).*

*Aenix is the team behind [Cozystack](https://cozystack.io) — a CNCF project (Sandbox today; Incubating expected late summer 2026), Apache 2.0. Aenix commercializes it as Ænix Platform, as three platforms on one engine — Public Cloud, Private Cloud and AI — that combine rather than exclude each other.*
