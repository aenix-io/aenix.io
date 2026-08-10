---
title: "Bare-metal Kubernetes for a messaging-API SaaS"
description: "A messaging-API SaaS ran a Proxmox to Kubernetes migration on Cozystack — 25,000 instances consolidated from 13 hosts to one GitOps cluster, run by one engineer."
hero_subtitle: "25,000 workloads off 13 Proxmox hosts onto one GitOps cluster"
date: 2026-06-20
lastmod: 2026-06-20
page_type: "case-study"
language: "en"
hreflang_de: "/de/case-studies/bare-metal-kubernetes-messaging-saas/"
images: ["img/og/og-case-bare-metal-kubernetes-messaging-saas.png"]
primary_keyword: "proxmox to kubernetes migration"
secondary_keywords:
  - "bare metal kubernetes"
  - "multi-tenant kubernetes SaaS"
  - "managed databases on kubernetes"
  - "proxmox alternative"
  - "GitOps kubernetes"
related_pages:
  - /alternatives/proxmox-alternative/
  - /products/aenix-platform/isp-edition/
  - /solutions/data-sovereignty/
  - /services/build-private-cloud/
faq:
  - q: "How do you migrate ~25,000 workloads off Proxmox with negligible downtime?"
    a: "The migration ran host-by-host, not big-bang. Each per-customer instance keeps its authentication state as a small file in S3, so a container is drained on one Proxmox host and recreated on the Cozystack platform, reattaching to the same state with only seconds of interruption. As instances moved, each hypervisor host was emptied and retired in turn, so the fleet shrank gradually without a maintenance window."
  - q: "Can you run Kubernetes without rewriting the application?"
    a: "Yes. The existing per-customer containers run unchanged inside KubeVirt VMs on Kubernetes, so the container-in-VM model the SaaS already relied on is preserved. A golden-image cloning workflow turns 'provision a VM' into a single line in Git. The application code was never touched; the change was to the platform underneath it."
  - q: "How do managed MongoDB, PostgreSQL and RabbitMQ perform on bare metal?"
    a: "All three run as managed Cozystack services directly on bare-metal nodes with dual-NVMe and DRBD-replicated block storage, delivering near-native performance with no external DBaaS and no public cloud. MongoDB runs under the Percona operator, PostgreSQL as a primary/replica pair under its operator, and RabbitMQ as a one-click HA cluster. There is no hypervisor tax between the databases and the disks."
  - q: "Is there vendor lock-in with this platform?"
    a: "No. Cozystack is Apache 2.0 open source under the CNCF, and the engagement ran with no private fork. Two pieces of work from this project — a first-class MongoDB app and the RabbitMQ v4 chart — landed upstream in the public project. The customer's sovereignty is backed by code they can inspect and self-host, not by a proprietary contract."
  - q: "Proxmox vs bare-metal Kubernetes — when should a SaaS switch?"
    a: "When manual hypervisor operations start capping growth. Adding a Proxmox host here was a manual, cluster-risking chore, and a fleet of 13 hosts had become the bottleneck for a service onboarding hundreds of customers a day. Bare-metal Kubernetes with GitOps makes a node or VM a declarative Git change, which is why a one-person infrastructure team can now operate roughly 25,000 instances. Proxmox remains fine for small, static fleets; the switch pays off when provisioning must scale without more operators."
---

<div class="cs-tags">
  <span class="cs-tag">Proxmox → Kubernetes</span>
  <span class="cs-tag">13 → 1 host</span>
  <span class="cs-tag">KubeVirt</span>
  <span class="cs-tag">Managed databases</span>
  <span class="cs-tag">GitOps</span>
</div>

**A fast-growing messaging-API SaaS consolidated a fleet of 13 Proxmox hypervisor hosts onto a single declarative Cozystack cluster on bare metal — moving roughly 25,000 isolated per-customer instances onto KubeVirt VMs with no application rewrite and negligible downtime. Managed MongoDB, PostgreSQL and RabbitMQ now run at near-native performance on owned hardware, and the whole platform is operated day-to-day by an effectively one-person infrastructure team.**

<div class="cs-stats">
  <div class="cs-stat"><div class="cs-stat__num">25,000+</div><div class="cs-stat__label">isolated per-customer instances; hundreds onboarded per day</div></div>
  <div class="cs-stat"><div class="cs-stat__num">13 → 1</div><div class="cs-stat__label">legacy Proxmox hosts consolidated to one declarative Cozystack cluster</div></div>
  <div class="cs-stat"><div class="cs-stat__num">~1 week</div><div class="cs-stat__label">bare metal to first production workloads; a VM is now one line in Git</div></div>
</div>

## About the project

The client is a fast-growing messaging-API SaaS — a WhatsApp and Telegram Business gateway. Each customer gets an isolated messenger "instance" (a lightweight container) plus an HTTP API, CRM integrations and AI assistants on top. The service had grown to roughly 25,000 per-customer instances and was adding hundreds a day, all run by an effectively one-person infrastructure team.

Before the project it ran on a fleet of about 13 Proxmox hypervisor hosts — roughly 200 VMs and around 100 container-host nodes, each carrying 200–300 containers. A regulatory network-blocking event had already forced a rushed repatriation off a foreign hosting provider, so an in-country footprint and data residency were non-negotiable from the start. Adding a hypervisor host was a manual, cluster-risking chore, and a prior self-managed Kubernetes attempt had collapsed on expired certificates. The client wanted the leverage of Kubernetes **without rewriting the application**, plus an expertise safety net behind it.

## Goals and objectives

- Move the whole service onto Kubernetes on bare metal with Cozystack, retiring the Proxmox fleet.
- Automate provisioning so onboarding hundreds of customers a day no longer means manual hypervisor work.
- Run managed MongoDB, PostgreSQL and RabbitMQ at near-native performance on owned hardware — no external DBaaS, no public cloud.
- Keep the existing container-in-VM model intact via KubeVirt, so the application ships unchanged.
- Make the platform stable, observable and GitOps-managed — nodes, VMs and services as declarative Git changes.
- Deliver in three phases with knowledge transfer, so the client's single engineer can operate it, backed by L3 support.

## Proposed solution

- **Compute** — Cozystack on Talos Linux (immutable OS), provisioned declaratively with Talm; per-node configs and SOPS-encrypted secrets live in Git. An 8-node bare-metal cluster: 3 control-plane nodes (HA etcd) plus 5 workers, dual-NVMe throughout. KubeVirt VMs host the existing per-customer containers unchanged; a golden-image cloning workflow (CDI DataVolume → VM disk → VM) makes "provision a VM" one line in Git.
- **Managed data** — MongoDB under the Percona operator, PostgreSQL at near-native performance, and one-click RabbitMQ. Aenix added MongoDB to Cozystack as a first-class app and upgraded the RabbitMQ chart to v4; **both landed upstream in the CNCF project.**
- **Storage** — LINSTOR/DRBD replicated block storage on ZFS for stateful workloads, plus SeaweedFS S3 for media and backups.
- **Networking** — Kube-OVN + Cilium + Multus + MetalLB; VMs draw addresses on the local subnet.
- **Delivery pipeline** — a nested managed Kubernetes ("kube-in-kube") for the API services, driven by ArgoCD and a GitLab image pipeline; Cozystack ingress plus cert-manager retire the hand-rolled nginx and manual certificate renewals.
- **Observability** — VictoriaMetrics + VictoriaLogs + Grafana from day one.

{{< placeholder-image width="1200" height="640" label="Consolidation architecture: 13 Proxmox hosts collapse onto one 8-node Cozystack cluster on Talos (3 control-plane HA etcd + 5 dual-NVMe workers); ~25,000 per-customer containers run unchanged inside KubeVirt VMs on the local subnet; managed MongoDB / PostgreSQL / RabbitMQ on LINSTOR/DRBD over ZFS; API services in a nested Kubernetes driven by ArgoCD; SeaweedFS S3 for media and backups" >}}

## Execution: three phases

- **Phase 1 — Platform stand-up.** The first server was converted from hypervisor to Talos as a Cozystack management cluster. VMs drew IPs from the local subnet; a golden Ubuntu VM template plus the client's own Ansible roles reproduced the setup reliably. The first managed MongoDB went live, the first production containers moved onto KubeVirt VMs, and the MongoDB app was contributed upstream.
- **Phase 2 — API services into Kubernetes.** A separate workload Kubernetes cluster was stood up so user-driven changes never touch the system cluster. The Go API services run behind a LoadBalancer and ingress; ArgoCD plus a GitLab pipeline give push-to-deploy; cert-manager replaced the manual nginx and certificate renewal.
- **Phase 3 — Container migration and consolidation.** The roughly 25,000 per-customer containers were migrated off the hypervisor fleet host-by-host. Because each instance's auth state is a small file in S3, a container drains on one host and is recreated on the platform with negligible downtime, which freed every hypervisor host to retire. PostgreSQL moved under its operator (primary/replica), MongoDB gained HA replicas, and SeaweedFS replaced the external object store.

**Engineering along the way.** A node-rename during a node addition once evicted pods; the team restored service with **zero data loss** and delivered a written post-mortem, which drove protection webhooks, Velero backups and a node-decommission runbook. MTU mismatches, cross-subnet routing, LINSTOR clone throttling, MongoDB OOM behaviour and Talos NTP drift were each diagnosed and turned into runbooks.

## Results and current state

- One bare-metal Cozystack cluster now carries the whole service: roughly 25,000 instances on KubeVirt VMs, managed MongoDB / PostgreSQL / RabbitMQ, and the API services in a nested Kubernetes. The Proxmox hypervisor fleet has been retired.
- The platform is declarative end-to-end — a VM or a node is a Git change — and highly available (3 control-plane nodes, DRBD-replicated storage).
- The client's own single engineer operates it day-to-day, backed by unlimited L3 support.
- Two upstream contributions — the MongoDB app and the RabbitMQ v4 chart — landed in the CNCF project. No private fork, no lock-in.

## Roadmap

- Re-architect the per-customer workload from ~25,000 discrete containers to a supervisor/controller model — a WhatsAppClient-style CRD sharding clients across a bounded pod set.
- Finish the internal developer platform: ArgoCD self-service, standardized GitLab CI, central alerting and SLOs.
- Expand the SeaweedFS S3 tier.
- Monthly architecture and cost-of-ownership reviews.

## Why this case matters

<div class="cs-why card-grid">
  <div class="card"><div class="card-body"><h3 class="card-title">Kubernetes without a rewrite</h3><p class="card-description">KubeVirt moved a container-in-VM application as-is, migrated host-by-host with negligible downtime — no re-platforming of the app.</p></div></div>
  <div class="card"><div class="card-body"><h3 class="card-title">Managed data on bare metal</h3><p class="card-description">MongoDB, PostgreSQL and RabbitMQ run near-native on DRBD-replicated storage — no external DBaaS, no public cloud.</p></div></div>
  <div class="card"><div class="card-body"><h3 class="card-title">GitOps from day one</h3><p class="card-description">Talos + Talm + ArgoCD + SOPS turn nodes, VMs and services into declarative Git changes — one engineer operates the fleet.</p></div></div>
  <div class="card"><div class="card-body"><h3 class="card-title">Open source contributed upstream</h3><p class="card-description">MongoDB and the RabbitMQ v4 chart landed in CNCF Cozystack — sovereignty backed by code, not by contract.</p></div></div>
</div>

---

*This case study is published in anonymized form; a customer reference under NDA is available on request. The provider is described by profile, not by name. For a reference call on an active opportunity, [talk to Aenix sales](/contact/).*

*Aenix is the team behind [Cozystack](https://cozystack.io) — a CNCF project (Sandbox today; Incubating expected late summer 2026), Apache 2.0. Aenix commercializes it as Ænix Platform, available in five editions: Public Cloud, ISP, Enterprise, IDP, AI/ML.*
