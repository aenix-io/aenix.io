---
title: "Cozystack — what it is, architecture, and how it fits in 2026"
description: "This is the long-form companion to our Cozystack product page. It walks through what Cozystack is, the architecture, how it differs from OpenStack and..."
date: "2026-05-01"
author: "Aenix Team"
type: "article"
topics: ["OpenStack", "OpenShift", "Kubernetes", "Cozystack", "KubeVirt", "Talos"]
language: "en"
companion_landing: "/products/cozystack/"
quiz:
  title: "Test yourself: what Cozystack is"
  questions:
    - q: "When was Cozystack open-sourced, and why?"
      options:
        - { text: "2020 — to support a Series A pitch", correct: false }
        - { text: "2023 — because the architectural pattern (built originally for service-provider customers) proved generally useful", correct: true }
        - { text: "2026 — after CNCF acceptance", correct: false }
      explanation: "Cozystack started as an internal platform for service-provider customers. It was open-sourced in 2023 because the architectural pattern proved generally useful beyond Aenix's own customer engagements."
    - q: "Why does Cozystack use Talos Linux as its host OS by default?"
      options:
        - { text: "Talos is the only Linux that supports KubeVirt", correct: false }
        - { text: "Talos is minimal and immutable — no SSH, configuration via API, no shell — operationally simpler and more secure than general-purpose Linux for Kubernetes hosts", correct: true }
        - { text: "Talos is the cheapest commercial license", correct: false }
      explanation: "Talos: no SSH, configuration via API, no package manager, no shell. Whole classes of incident (drift, manual hotfixes, snowflake nodes) disappear. Patching is boring."
    - q: "Why does the article emphasise that Cozystack and Aenix are intentionally separate?"
      options:
        - { text: "Marketing reasons", correct: false }
        - { text: "Customer choice (deploy without Aenix), project longevity (CNCF-governed survives Aenix decisions), Aenix focus (sells engagement, not licenses)", correct: true }
        - { text: "CNCF requires it", correct: false }
      explanation: "Three reasons: (1) customers can deploy Cozystack independently of Aenix, (2) project longevity — Cozystack survives Aenix-business decisions because CNCF-governed and Apache-licensed, (3) Aenix focus is engagement (assessment, build, support) rather than licenses."
    - q: "How does the article characterise OpenStack vs Cozystack architecturally?"
      options:
        - { text: "Both are 2010s-era; choose by license", correct: false }
        - { text: "OpenStack is 2010s-era (50–100+ services, distinct teams per component); Cozystack is 2020s-era Kubernetes-native (5–15 components as Kubernetes operators, single platform team)", correct: true }
        - { text: "Cozystack is closed source; OpenStack is open source", correct: false }
      explanation: "OpenStack: 2010s architecture, comprehensive but operationally heavy, 50–100+ services. Cozystack: 2020s-era Kubernetes-native, single platform abstraction, 5–15 components running as Kubernetes operators with single platform team."
    - q: "In the architectural choices, why is Cilium picked over NSX-equivalent vendor offerings?"
      options:
        - { text: "Cilium is faster than every alternative", correct: false }
        - { text: "eBPF-based with native L4/L7 policies, observability, service mesh — replaces NSX functionality without licensing", correct: true }
        - { text: "Cozystack is forked from Cilium", correct: false }
      explanation: "Choice 4: Cilium gives eBPF-based networking with native L4/L7 policies, observability, and service-mesh capabilities — replacing what NSX did in VMware deployments without the NSX licensing."
---

**This is the long-form companion to our [Cozystack product page](/products/cozystack/). It walks through what Cozystack is, the architecture, how it differs from OpenStack and OpenShift, and where it fits in the 2026 cloud platform landscape.**

Cozystack is an open-source cloud platform — Apache 2.0 licensed, CNCF Project, built primarily by Aenix with growing community contribution. It started as an internal platform for service-provider customers and was open-sourced in 2023 because the architectural pattern proved generally useful.

## What Cozystack is, technically

A single Kubernetes-based platform that runs on bare metal and provides:

- KubeVirt-based virtualization (VMs alongside containers)
- Multi-tenant control plane via Tenant CRD
- Managed database, queue, cache services
- S3-compatible object storage
- GPU as a service (NVIDIA vGPU for VMs; MIG / time-slicing / passthrough for containers)
- Self-service portal (cozyportal)
- Observability (VictoriaMetrics + VictoriaLogs)
- Backup and DR (Velero + per-app PITR)
- WHMCS billing integration for service-provider model

All controlled by a cohesive operational model — single platform team running one stack rather than integrating ten.

## Architectural choices and why

### Choice 1: KubeVirt for virtualization

KubeVirt runs VMs as Kubernetes resources. Pods that wrap qemu/KVM, with all the Kubernetes ecosystem benefits — declarative config, GitOps, observability, RBAC, networking integration — extending to VMs naturally.

The alternative would be a parallel virtualization stack (libvirt directly, OpenStack, vendor hypervisor). KubeVirt unifies; alternatives fragment.

### Choice 2: Talos Linux as the OS

Talos is a minimal, immutable Linux designed for Kubernetes. No SSH; configuration via API; no package manager; no shell. Operationally simpler and more secure than general-purpose Linux for Kubernetes hosts.

### Choice 3: LINSTOR as default storage

LINSTOR (DRBD-based) provides replicated block storage with good operational characteristics for Kubernetes. Rook-Ceph is also supported for object/file or for teams preferring Ceph.

### Choice 4: Cilium for networking

eBPF-based networking with native L4/L7 policies, observability, and service-mesh capabilities. Replaces what NSX did in VMware deployments without licensing.

### Choice 5: Tenant CRD for multi-tenancy

Native Kubernetes resource defining tenant boundaries. Nested tenants for resellers / business units. Per-tenant quotas, RBAC, audit trail. Service-provider model is structural rather than bolted-on.

### Choice 6: Flux for GitOps

Lightweight, upstream-Kubernetes-aligned GitOps engine. Argo CD also works; Flux is the default.

### Choice 7: VictoriaMetrics + VictoriaLogs for observability

Lower-overhead than Prometheus + Loki at scale. Important for sovereignty (self-hosted, no SaaS observability dependency).

## How Cozystack compares

### Cozystack vs OpenStack

Both open source. Both private cloud platforms. Different generations.

OpenStack: 2010s-era architecture. Comprehensive but operationally heavy. Strong in telco / large government use cases. Operational footprint: 50-100+ services, distinct teams maintaining each component.

Cozystack: 2020s-era architecture. Kubernetes-native. Single platform abstraction. Operational footprint: 5-15 components running as Kubernetes operators, single platform team.

For new deployments in 2026, Cozystack is increasingly the default. For existing OpenStack deployments where operational expertise lives, OpenStack remains valid.

### Cozystack vs OpenShift Virtualization

Both KubeVirt-based.

OpenShift Virtualization: Red Hat commercial subscription. Strong enterprise tooling. Tied to Red Hat / IBM relationship.

Cozystack: Apache 2.0 open source. Aenix commercial support optional. Lighter operational footprint without the OpenShift surface area.

For Red Hat customers, OpenShift Virtualization fits naturally. For organizations preferring open-source-first, Cozystack.

### Cozystack vs Proxmox VE

Both open source. Different scales.

Proxmox: SMB-friendly, single-tenant, mature. Excellent under ~50 hosts.

Cozystack: Multi-tenant scale, service-provider-friendly. Better above ~50 hosts and where multi-tenancy matters.

## The Aenix relationship

Cozystack and Aenix are intentionally separate:

- **Cozystack** is community-governed CNCF Project. Apache 2.0. Anyone can deploy, contribute, or fork.
- **Aenix** is the commercial entity. Builds and maintains Cozystack. Provides paid support tiers and professional services.

The separation matters because:

- **Customer choice** — you can deploy Cozystack independently. You don't need Aenix to use the platform.
- **Project longevity** — Cozystack survives Aenix-business decisions because it's CNCF-governed and Apache-licensed.
- **Aenix focus** — Aenix sells engagement (assessment, build, support), not licenses.

For organizations seeking commercial support, Aenix is one option (the primary one in 2026 because Aenix is the largest contributor). Other commercial support providers may emerge as the project matures.

## When Cozystack is the right answer

- Service-provider model — multi-customer cloud, billing, customer-facing portal
- Regulated multi-tenant — banks, insurers, public sector
- AI/GPU at scale — sustained workloads, sovereignty for data residency
- Greenfield private cloud — new infrastructure, modern architecture
- VMware exit — Cozystack as destination for KubeVirt-based migration

## When Cozystack is not the right answer

- Single-tenant SMB — Proxmox VE is operationally simpler
- Existing deep OpenStack expertise — extending OpenStack may be cheaper than migrating
- Existing Red Hat / OpenShift — OpenShift Virtualization fits the procurement and team familiarity
- Pure container workloads (no VMs) — vanilla Kubernetes is sufficient
- Pure public-cloud-native architecture — hyperscaler-managed services may be the right call

A good engagement is honest about these cases.

## How to start

- Self-deploy: **[cozystack.io](https://cozystack.io)**
- Aenix engagement: **[Platform Readiness Assessment](/services/platform-readiness-assessment/)**
- Specific use case: see solution / alternatives pages

---

*Cozystack is a CNCF Project. Aenix is the company that builds and supports it.*

<!-- SEO: title "Cozystack — Architecture, Comparison, and 2026 Fit | Aenix"
Word count: ~1500.
-->
