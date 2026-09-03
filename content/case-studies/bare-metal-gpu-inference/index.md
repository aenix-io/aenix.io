---
title: "8xH100 inference on your own bare metal"
description: "A mobile photo/video app moved bare-metal GPU inference off a rented GPU cloud onto its own 8xH100 server on Cozystack — 2-3x GPU efficiency, ~2 months to production, KubeVirt passthrough."
hero_subtitle: "8xH100 inference moved off rented GPU cloud onto owned bare metal"
date: 2026-06-20
lastmod: 2026-06-20
page_type: "case-study"
language: "en"
hreflang_de: "/de/case-studies/bare-metal-gpu-inference/"
images: ["img/og/og-case-bare-metal-gpu-inference.png"]
primary_keyword: "bare metal GPU inference"
secondary_keywords:
  - "on-premise AI inference"
  - "private GPU cloud"
  - "KubeVirt GPU passthrough"
  - "self-hosted H100 inference"
  - "GPU cloud repatriation"
related_pages:
  - /products/ai-platform/
  - /solutions/sovereign-ai/
  - /solutions/gpu-cloud-bursting/
  - /solutions/cloud-repatriation/
faq:
  - q: "Can Cozystack run on generic k3s, not just Talos?"
    a: "Yes. The reference Cozystack install runs on immutable Talos Linux, but the platform is not bound to it. When the hosting provider gave us SSH-only access with no console or IPMI — which makes installing Talos impossible — we deployed a generic-Linux Cozystack on k3s over Ubuntu. No manageability was lost: LINSTOR, Cilium, KubeVirt, GPU passthrough and monitoring all work the same way."
  - q: "How are GPUs isolated per tenant?"
    a: "All eight H100s on the node are handed to a single isolated tenant VM via KubeVirt PCI passthrough (vfio-pci). The tenant gets a dedicated etcd, secrets, registry and monitoring, and runs its own nested Kubernetes with the NVIDIA GPU Operator inside the VM. The customer's ML workloads never share a kernel or a control plane with anyone else's."
  - q: "Does this avoid vendor lock-in?"
    a: "That was an explicit requirement. The stack is entirely open source and CNCF-aligned — Cozystack, Kubernetes, KubeVirt, LINSTOR, Cilium/KubeOVN, KEDA, VictoriaMetrics. There is no proprietary control plane and no managed-cloud API to get trapped behind. The customer can move the same manifests to different hardware or a different provider at any time."
  - q: "How does autoscaling work for inference traffic?"
    a: "Two pipelines run side by side. Asynchronous jobs flow through an API gateway into a RabbitMQ queue, are processed by GPU ML workers, and return via webhook. Synchronous HTTP inference is autoscaled with KEDA driven by nginx-ingress request rate (RPS) metrics collected in VictoriaMetrics, so worker pods scale up and down with live traffic."
  - q: "Bare-metal GPU inference vs a rented GPU cloud — when does it pay off?"
    a: "Once inference load is steady and predictable, owned hardware typically delivers 2-3x better GPU efficiency than paying per hour on a public GPU cloud, because you stop renting idle headroom and margin. It also keeps model weights and user data on infrastructure you control. Rented capacity still makes sense for short-lived spikes and experiments; the two models are complementary."
---

<div class="cs-tags">
  <span class="cs-tag">Sovereign AI</span>
  <span class="cs-tag">8xH100 · KubeVirt</span>
  <span class="cs-tag">GPU repatriation</span>
  <span class="cs-tag">Inference at scale</span>
  <span class="cs-tag">No lock-in</span>
</div>

**A fast-growing developer of a mass-market mobile photo/video editing app moved its AI inference off a rented per-hour GPU cloud onto its own bare-metal 8xH100 server — keeping the familiar cloud UX (API, queues, autoscaling, model storage, monitoring) but on hardware it owns and controls. On Cozystack, running on generic Linux/k3s, the platform reached production traffic in about two months and delivers 2-3x better GPU efficiency than the previous rental.**

<div class="cs-stats">
  <div class="cs-stat"><div class="cs-stat__num">~2 months</div><div class="cs-stat__label">from kickoff to production traffic on the customer's own hardware</div></div>
  <div class="cs-stat"><div class="cs-stat__num">8x H100</div><div class="cs-stat__label">80GB GPUs on one node passed through to an isolated tenant VM (KubeVirt)</div></div>
  <div class="cs-stat"><div class="cs-stat__num">2-3x</div><div class="cs-stat__label">GPU-efficiency gain moving off per-hour rental onto owned bare metal</div></div>
</div>

## About the project

The client is a fast-growing developer of a mass-market mobile app for creative photo and video editing. Several of its headline features — background removal and replacement, beautification, visual effects — are powered by the company's own AI models rather than third-party APIs.

Those models ran on a rented public GPU cloud, billed by the hour. As usage grew the rental became expensive and capacity-capped: cost scaled linearly with load, and peak throughput was bounded by what the provider would hand out. The client decided to move inference onto its own bare-metal GPU server, while keeping the "cloud" developer experience its team was used to — an API, task queues, autoscaling, model storage and monitoring.

## Goals and objectives

- Repatriate AI inference from a per-hour rented GPU cloud onto an owned bare-metal 8xH100 server, cutting cost and lifting the capacity ceiling.
- Preserve the cloud-native UX: API gateway, task queues, autoscaling, model-weight storage, full monitoring.
- Split responsibilities cleanly: the client writes and owns the ML business logic; Ænix owns architecture, DevOps and 24x7 support of the GPU infrastructure, Kubernetes and monitoring.
- Keep model weights and user data on infrastructure the client controls (data locality).
- No technology lock-in — an explicit, non-negotiable requirement: an all-open-source, CNCF-aligned stack with no proprietary control plane.

## Proposed solution

A single 8xH100 server, layered top to bottom, turns owned bare metal into a private GPU cloud with an isolated tenant boundary:

- **Client ML workers** — the customer's inference models, queue consumers and synchronous/asynchronous handlers, running as pods inside the tenant.
- **Nested Kubernetes ("main")** — the GPUs are passed through to the tenant VM; the NVIDIA GPU Operator runs inside the VM for driver and device management, with ingress in front.
- **Isolated tenant** — a dedicated etcd, secrets, container registry and monitoring, so the workload never shares a control plane with anyone else.
- **Cozystack on k3s / generic Linux** — LINSTOR for storage, Cilium + KubeOVN for networking, KubeVirt for virtualization, GPU passthrough via vfio-pci, MetalLB for service publishing.
- **Bare metal** — 8x NVIDIA H100 80GB with NVLink and 2TB RAM.

Inference runs as two complementary pipelines. Asynchronous: API gateway → RabbitMQ queue → GPU ML workers → webhook callback. Synchronous: HTTP inference endpoints autoscaled with KEDA on nginx-ingress request rate (RPS), using VictoriaMetrics as the metrics source.

{{< placeholder-image width="1200" height="640" label="Single 8xH100 bare-metal node, layered: client ML workers (inference models, RabbitMQ queues, sync/async) on a nested tenant Kubernetes with GPUs passed through and the NVIDIA GPU Operator inside; isolated tenant (dedicated etcd, secrets, registry, monitoring) on Cozystack over k3s/generic Linux (LINSTOR, Cilium+KubeOVN, KubeVirt, vfio-pci passthrough, MetalLB); bare metal: 8x NVIDIA H100 80GB, NVLink, 2TB RAM" >}}

## Execution: new requirements and how we handled them

- **Talos to k3s, without losing manageability.** The provider handed over SSH-only access — no console, no IPMI — which makes installing immutable Talos Linux impossible. We built a generic-Linux Cozystack on k3s over Ubuntu instead. The full platform (LINSTOR, Cilium/KubeOVN, KubeVirt, GPU passthrough, monitoring) works identically; nothing was given up.
- **GPU passthrough of all eight H100s.** Every H100 is handed to the KubeVirt tenant VM via vfio-pci. The classic "nvidia driver vs vfio-pci" race at boot — where the host driver claims a card before vfio can — was solved with an initramfs `driver_override`, so the devices land in the VM deterministically.
- **RWX storage for shared model weights.** Many worker pods need the same model weights concurrently. We provided shared read-write-many storage via a CSI wrapper plus NFS-Ganesha; the fix was contributed upstream to Cozystack.
- **Traffic-based autoscaling.** Synchronous inference workers scale with live demand using KEDA driven by nginx-ingress RPS metrics from VictoriaMetrics. The metrics-path fix that made this reliable also went upstream.
- **GPU density.** To pack more inference onto each card, we enabled GPU sharing via HAMi / HAMi fractional sharing, so several jobs can share one physical H100.

## Results and current state

- In about two months the platform went live: end-to-end QA passed and all production inference traffic moved onto the client's own cluster, where it has run stably since.
- Both pipelines are in production — asynchronous RabbitMQ jobs with webhook callbacks, and synchronous HTTP inference autoscaled on traffic.
- Grafana and VictoriaMetrics provide monitoring, with centralized logging across the platform.
- The customer runs its ML business logic on infrastructure it owns, at 2-3x the GPU efficiency of the previous per-hour rental, with no proprietary lock-in.

## What's next

- Grow the GPU-server fleet beyond the first node.
- GPU partitioning (HAMi / MIG) for higher inference density per card.
- A dedicated Harbor registry for heavy (~100GB) model images.
- Expand self-service on top of the multi-tenancy model.

## Why this case matters

<div class="cs-why card-grid">
  <div class="card"><div class="card-body"><h3 class="card-title">Cozystack runs on generic k3s</h3><p class="card-description">Not only Talos — an SSH-only host with no IPMI became a full private GPU cloud on k3s over Ubuntu, with nothing lost.</p></div></div>
  <div class="card"><div class="card-body"><h3 class="card-title">8xH100 NVLink, virtualized and isolated</h3><p class="card-description">All eight cards passed through into one isolated tenant via KubeVirt — dedicated etcd, secrets, registry and monitoring per workload.</p></div></div>
  <div class="card"><div class="card-body"><h3 class="card-title">Real AI inference, two pipelines</h3><p class="card-description">Asynchronous RabbitMQ queues plus synchronous HTTP inference autoscaled on live traffic with KEDA and VictoriaMetrics.</p></div></div>
  <div class="card"><div class="card-body"><h3 class="card-title">Engineering depth that compounds</h3><p class="card-description">RWX-storage and metrics fixes went upstream to Cozystack — the platform itself improved over the course of the project.</p></div></div>
</div>

---

*This case study is published in anonymized form (Tier-3 evidence): the customer is described by profile, not by name. A customer reference is available under NDA on request — [talk to Ænix sales](/contact/).*

*Ænix is the team behind [Cozystack](https://cozystack.io) — a CNCF project (Sandbox today; Incubating expected late summer 2026), Apache 2.0. Ænix commercializes it as Ænix Platform, as three platforms on one engine — Public Cloud, Private Cloud and AI — that combine rather than exclude each other.*
