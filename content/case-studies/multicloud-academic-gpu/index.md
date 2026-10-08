---
title: "From public cloud to bare metal — and bursting compute on demand"
seo_title: "Public cloud to bare metal, with GPU bursting"
description: "An academic-computing SaaS moved from a hyperscaler to owned bare metal on Cozystack, kept one Cluster API across three clouds and cut GPU cost about 5x."
hero_subtitle: "Off hyperscaler onto bare metal, GPU cost cut ~5x"
date: 2026-06-15
lastmod: 2026-06-15
page_type: "case-study"
language: "en"
hreflang_de: "/de/case-studies/multicloud-academic-gpu/"
images: ["img/og/og-case-multicloud-academic-gpu.jpg"]
related_pages:
  - /solutions/gpu-cloud-bursting/
  - /industries/universities/
  - /solutions/cloud-repatriation/
  - /products/ai-platform/
---

<div class="cs-tags">
  <span class="cs-tag">GPU bursting</span>
  <span class="cs-tag">Multi-cloud</span>
  <span class="cs-tag">Sovereign cloud</span>
  <span class="cs-tag">Multi-tenancy</span>
</div>

**A European SaaS platform for academic computing moved its backend and user workloads off a public hyperscaler onto owned bare metal on Cozystack — without downtime for thousands of active users — and kept a single Cluster API spanning bare metal, a public hyperscaler and a sovereign Swiss OpenStack cloud. GPUs on the sovereign cloud came out roughly 5× cheaper than the previous setup.**

<div class="cs-stats">
  <div class="cs-stat"><div class="cs-stat__num">~11,000</div><div class="cs-stat__label">active users; classes of 100+ students</div></div>
  <div class="cs-stat"><div class="cs-stat__num">≈5×</div><div class="cs-stat__label">cheaper GPU on the sovereign cloud vs. the prior setup</div></div>
  <div class="cs-stat"><div class="cs-stat__num">3 → 1</div><div class="cs-stat__label">infrastructure types under one Cluster API</div></div>
</div>

<div class="cta-row">
  <a class="cta-primary" href="/contact/">Book a call</a>
  <a class="cta-secondary" href="/case-studies/">All case studies →</a>
</div>

## About the project

The client is a European SaaS platform for universities and business schools, used for teaching and research. In the browser, a user spins up virtually any Linux application in their own pod — Python, JupyterLab, MATLAB, Julia and around a hundred legacy applications — and works with shared files and datasets. Part of the workload runs on GPUs.

Originally the whole platform lived in a public hyperscaler's managed Kubernetes. It worked, but it hurt on two fronts at once: expensive (especially GPUs) and opaque on cost — the lack of granular resource accounting made it hard to show investors clean unit economics.

## Goals and objectives

The primary goal was economic: radically cut infrastructure cost and gain a transparent cost model — without downtime for thousands of active users.

- Move the backend and user workloads off the public cloud onto owned bare-metal hardware.
- Keep the existing external storage (Ceph, run by a contractor) as is.
- Strictly separate prod and staging: distinct control planes and hardware, no single point of failure.
- Burst compute on demand: GPU and CPU into public clouds for peaks and heavy jobs, tearing down afterwards.
- Expand onto a sovereign Swiss cloud (OpenStack) — for regulated sectors and far cheaper GPUs.
- Secure multi-tenancy: every client isolated, even though arbitrary user code runs inside the pods.

## Proposed solution

At the core — Cozystack on Talos Linux on owned hardware. A management cluster carries the platform, while tenant clusters run as hosted control planes (Kamaji) — the foundation of secure multi-tenancy.

- **Networking.** Cilium as the CNI plus a WireGuard mesh (Kilo) stitching sites and clouds into a single pod and service network.
- **Compute on demand.** Cluster Autoscaler adds nodes where they are needed now: bare metal, public hyperscaler, sovereign OpenStack cloud — all behind a single Cluster API.
- **GPU.** NVIDIA GPU-operator on Talos for discovery and passthrough, with HAMi on top for fractional sharing (several jobs share one physical card).
- **Storage.** External Ceph (CephFS RWX) stays the storage system; locally — LINSTOR/DRBD with volume encryption.
- **Access & observability.** Keycloak (OIDC) instead of the cloud IdP; Cozystack's built-in monitoring (VictoriaMetrics/VictoriaLogs) alongside the client's own logging stack.

{{< case-diagram src="/img/case-studies/multicloud-academic-gpu-en.webp" alt="Multi-cloud architecture: a single management cluster (Cozystack · Talos · Kamaji) orchestrates bare metal, a public hyperscaler and a sovereign OpenStack via one Cluster API; sites and external Ceph stitched by a WireGuard mesh" >}}

## Execution: new requirements and how we handled them

- **The public cloud throttled mesh traffic.** The hyperscaler wouldn't pass node-to-node traffic without explicit routing. We implemented IP-in-IP encapsulation in Kilo and contributed the change upstream — after which everything worked with no extra setup.
- **The sovereign cloud had no autoscaler.** It's plain OpenStack without Magnum. We wrote our own autoscaler — a working prototype in about a week — and built a separate Cozystack package for managed Kubernetes on OpenStack (Cluster API + Talos + Kamaji).
- **The environment is inherently hostile.** A user can get console access to their VM and try to steal a join token. The answer — a separate control plane per tenant: compromising one tenant doesn't reach the main cluster.
- **User files in Ceph over an encrypted mesh.** Freshly autoscaled nodes automatically advertise their addresses into the WireGuard network toward the Ceph monitors and gain access to shared files with no manual steps. No single point of failure.
- **Urgent fixes ahead of a key demo.** The night before an important demo, two networking bugs surfaced (a node grabbing the WireGuard address after a kubelet restart, and CephFS failing to mount on freshly added nodes). Both were quickly diagnosed and fixed.

## Economics

GPUs on the sovereign cloud cost roughly **5× less** than the previous hyperscaler setup (accounting for the prior model's margin). Because GPU prices are volatile and have spiked sharply in short windows, this is exactly where bursting and spot capacity pay off.

## Results and current state

- Production moved to bare metal (Talos + Cozystack), real users are working; GPU/CPU bursting into the public cloud works, nodes come up across several regions, fractional GPU sharing is available.
- Tenant clusters are live in the sovereign cloud: deployed from a single manifest, control plane in the management cluster, workers on OpenStack; tenant autoscaling and service publishing confirmed, shared-file access confirmed after the mesh rework.
- A demo ran on the sovereign infrastructure — the client's first application launched from their own interface.

## Roadmap

- Opening the sovereign cloud to a broad set of organizations (on the order of a hundred) — each paying for its own resources directly.
- Bring-your-own-cloud: GPU workloads in the client's own subscription at any provider.
- GPU job checkpointing to run on spot pricing with migration on capacity reclaim.
- Full exit from the remaining hyperscaler dependencies.

## Why this case matters

<div class="cs-why card-grid">
  <div class="card"><div class="card-body"><h3 class="card-title">Genuinely multi-cloud</h3><p class="card-description">A single Cozystack orchestrates bare metal, a public hyperscaler and a sovereign OpenStack through one Cluster API.</p></div></div>
  <div class="card"><div class="card-body"><h3 class="card-title">Secure multi-tenancy for a hostile environment</h3><p class="card-description">Per-tenant control plane and storage keys, network policies, user-code isolation.</p></div></div>
  <div class="card"><div class="card-body"><h3 class="card-title">A self-healing mesh</h3><p class="card-description">A WireGuard mesh with auto-registration of nodes and no single point of failure.</p></div></div>
  <div class="card"><div class="card-body"><h3 class="card-title">Co-development-grade support</h3><p class="card-description">Fixes go upstream (IP-in-IP in Kilo, an issue filed in Talos), a working autoscaler built in a week, critical bugs closed fast.</p></div></div>
</div>

## Discuss a similar project

A 30-minute discovery call is enough to tell whether this architecture fits your estate and what the first step would be.

<div class="cta-row">
  <a class="cta-primary" href="/contact/">Book a call</a>
  <a class="cta-secondary" href="/demo/">Open the live demo</a>
</div>

---

*This case study is published in anonymized form: the platform is described by profile, not by name. For a reference call under NDA on an active opportunity, [talk to Ænix sales](/contact/).*

*Ænix created [Cozystack](https://cozystack.io), a CNCF Sandbox project (Incubation application in due diligence) under Apache 2.0, and co-maintains it with maintainers from other companies. On it, Ænix builds three platforms that combine rather than exclude each other: Ænix Public Cloud Platform, Ænix Private Cloud Platform and Ænix AI Platform.*
