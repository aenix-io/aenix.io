---
title: "Cozystack — what it is, architecture, and how it fits in 2026"
description: "What Cozystack is technically, the architectural choices behind it, how it compares to OpenStack and OpenShift, and when it is the wrong answer."
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
        - { text: "In 2023, after the pattern proved generally useful", correct: true }
        - { text: "In 2020, to support a Series A fundraise", correct: false }
        - { text: "In 2026, following CNCF Sandbox acceptance", correct: false }
      explanation: "Cozystack started as an internal platform for service-provider customers. It was open-sourced in 2023 because the architectural pattern proved generally useful beyond Aenix's own customer engagements."
    - q: "Why does Cozystack use Talos Linux as its host OS by default?"
      options:
        - { text: "Talos is the only Linux distribution supporting KubeVirt", correct: false }
        - { text: "Talos has the cheapest commercial subscription pricing", correct: false }
        - { text: "Talos is minimal, immutable, and API-configured", correct: true }
      explanation: "Talos: no SSH, configuration via API, no package manager, no shell. Whole classes of incident (drift, manual hotfixes, snowflake nodes) disappear. Patching is boring."
    - q: "Why does the article emphasise that Cozystack and Aenix are intentionally separate?"
      options:
        - { text: "Customer choice, project longevity, Aenix focus", correct: true }
        - { text: "Marketing positioning and brand separation", correct: false }
        - { text: "A CNCF governance rule mandates it", correct: false }
      explanation: "Three reasons: (1) customers can deploy Cozystack independently of Aenix, (2) project longevity — Cozystack survives Aenix-business decisions because CNCF-governed and Apache-licensed, (3) Aenix focus is engagement (assessment, build, support) rather than licenses."
    - q: "How does the article characterise OpenStack vs Cozystack architecturally?"
      options:
        - { text: "Both are 2010s-era architectures; choose by license", correct: false }
        - { text: "OpenStack is 2010s-era heavyweight; Cozystack is K8s-native", correct: true }
        - { text: "Cozystack is closed source; OpenStack is open source", correct: false }
      explanation: "OpenStack: 2010s architecture, comprehensive but operationally heavy, 50–100+ services. Cozystack: 2020s-era Kubernetes-native, single platform abstraction, 5–15 components running as Kubernetes operators with single platform team."
    - q: "In the architectural choices, why is Cilium picked over NSX-equivalent vendor offerings?"
      options:
        - { text: "Cilium benchmarks faster than every alternative CNI", correct: false }
        - { text: "Cilium replaces NSX features without licensing fees", correct: true }
        - { text: "Cozystack itself is forked from the Cilium codebase", correct: false }
      explanation: "Choice 4: Cilium gives eBPF-based networking with native L4/L7 policies, observability, and service-mesh capabilities — replacing what NSX did in VMware deployments without the NSX licensing."
---

*Component facts below reflect the Cozystack v1.6 release line (current as of September 2026).*

Cozystack is an open-source cloud platform — Apache 2.0 licensed, CNCF Project, built primarily by Ænix with growing community contribution. It started as an internal platform for service-provider customers and was open-sourced in 2023 because the architectural pattern proved generally useful.

## What Cozystack is, technically

A single Kubernetes-based platform that runs on bare metal and provides:

- KubeVirt-based virtualization (VMs alongside containers)
- Multi-tenant control plane via Tenant CRD
- Managed database, queue, cache services
- S3-compatible object storage
- GPU as a service (VFIO passthrough or NVIDIA vGPU for VMs; HAMi fractional sharing for containers in tenant Kubernetes clusters)
- Self-service portal (Cozystack Dashboard)
- Observability (VictoriaMetrics + VictoriaLogs)
- Backup and DR (Velero + per-app PITR)
- WHMCS billing integration for the service-provider model (an Ænix [product](/products/whmcs-integration/) on top of Cozystack, not an upstream component)

All controlled by a cohesive operational model — single platform team running one stack rather than integrating ten.

## Architectural choices and why

### Choice 1: KubeVirt for virtualization

KubeVirt runs VMs as Kubernetes resources. Pods that wrap qemu/KVM, with all the Kubernetes ecosystem benefits — declarative config, GitOps, observability, RBAC, networking integration — extending to VMs naturally.

The alternative would be a parallel virtualization stack (libvirt directly, OpenStack, vendor hypervisor). KubeVirt unifies; alternatives fragment.

### Choice 2: Talos Linux as the OS

Talos is a minimal, immutable Linux designed for Kubernetes. No SSH; configuration via API; no package manager; no shell. Operationally simpler and more secure than general-purpose Linux for Kubernetes hosts.

Talos is the default, not a requirement. Since Cozystack v1.0 the platform also installs onto an existing Kubernetes cluster running a general-purpose distribution (Ubuntu, Debian, RHEL-family, openSUSE) via the `isp-full-generic` variant or the `cozystack.installer` Ansible collection.

### Choice 3: LINSTOR as default storage

LINSTOR (DRBD-based, deployed through the Piraeus operator) provides replicated block storage with good operational characteristics for Kubernetes. It remains the shipped default through the v1.6 release line. Object storage is a separate layer — SeaweedFS, exposed as the managed Bucket service. Cozystack does not ship Rook or Ceph. Ænix is building [Blockstor](https://github.com/cozystack/blockstor), a Kubernetes-native, LINSTOR-API-compatible control plane for LVM/ZFS with DRBD replication; it is not yet part of a Cozystack release.

### Choice 4: Cilium for networking

eBPF-based networking with native L4/L7 policies, observability, and service-mesh capabilities. Replaces what NSX did in VMware deployments without licensing.

### Choice 5: Tenant CRD for multi-tenancy

Native Kubernetes resource defining tenant boundaries. Nested tenants for resellers / business units. Per-tenant quotas, RBAC, audit trail. Service-provider model is structural rather than bolted-on.

### Choice 6: Flux for GitOps

Lightweight, upstream-Kubernetes-aligned GitOps engine. Flux is the platform's own reconciliation engine (v2.8 as of Cozystack v1.6). You can point Argo CD at your Cozystack manifests like any other Kubernetes resources, but Argo CD as an alternative *platform* engine is still a roadmap item, not a supported install path.

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

Cozystack: Apache 2.0 open source. Ænix commercial support optional. Lighter operational footprint without the OpenShift surface area.

For Red Hat customers, OpenShift Virtualization fits naturally. For organizations preferring open-source-first, Cozystack.

### Cozystack vs Proxmox VE

Both open source. Different scales.

Proxmox: SMB-friendly, single-tenant, mature. Excellent under ~50 hosts.

Cozystack: Multi-tenant scale, service-provider-friendly. Better above ~50 hosts and where multi-tenancy matters.

## The Ænix relationship

Cozystack and Ænix are intentionally separate:

- **Cozystack** is community-governed CNCF Project. Apache 2.0. Anyone can deploy, contribute, or fork.
- **Ænix** is the commercial entity. Builds and maintains Cozystack. Provides paid support tiers and professional services.

The separation matters because:

- **Customer choice** — you can deploy Cozystack independently. You don't need Ænix to use the platform.
- **Project longevity** — Cozystack survives Ænix-business decisions because it's CNCF-governed and Apache-licensed.
- **Ænix focus** — Ænix sells engagement (assessment, build, support), not licenses.

For organizations seeking commercial support, Ænix is one option (the primary one in 2026 because Ænix is the largest contributor). Other commercial support providers may emerge as the project matures.

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
