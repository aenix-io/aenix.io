---
title: "Cozystack as a universal installer: an AI platform shipped into the customer's environment"
description: "A telecom integrator built a corporate AI platform on Cozystack — GPU, RAG on Qdrant, NVIDIA Dynamo inference, geo-distributed GPU — and shipped the same distribution into a state-owned end customer."
hero_subtitle: "A corporate AI platform shipped into the customer's environment"
date: 2026-06-15
lastmod: 2026-06-15
page_type: "case-study"
language: "en"
hreflang_de: "/de/case-studies/ai-universal-installer/"
images: ["img/og/og-case-ai-universal-installer.png"]
related_pages:
  - /solutions/sovereign-ai/
  - /products/aenix-platform/ai-ml-edition/
  - /services/ai-platform-build/
  - /industries/telco/
---

<div class="cs-tags">
  <span class="cs-tag">AI / ML on GPU</span>
  <span class="cs-tag">NVIDIA Dynamo</span>
  <span class="cs-tag">RAG · Qdrant</span>
  <span class="cs-tag">Multi-tenancy</span>
  <span class="cs-tag">Geo-GPU</span>
</div>

**A large telecom operator and systems integrator built a corporate AI platform on Cozystack and used the same distribution as a universal installer — shipping its own AI services into a state-owned end customer's environment, with data staying inside the customer's boundary. The engagement moved the integrator from a CapEx "hardware and licenses" model to a long-term OpEx service contract.**

<div class="cs-stats">
  <div class="cs-stat"><div class="cs-stat__num">141 / 141</div><div class="cs-stat__label">managed releases in Ready state on the production cluster</div></div>
  <div class="cs-stat"><div class="cs-stat__num">12–20 ms</div><div class="cs-stat__label">between data centres — geo-GPU joined by an encrypted mesh</div></div>
  <div class="cs-stat"><div class="cs-stat__num">1 → 2</div><div class="cs-stat__label">one distribution, two delivery models (SaaS + in-customer boundary)</div></div>
</div>

## About the project

The client is a large telecom operator and systems integrator building a corporate AI platform for an end customer — a large state-owned enterprise in the transport sector. The commercial goal was to shift from buying hardware and licenses (CapEx) to a service model (OpEx) under a long-term contract.

The starting pain is typical for a large integrator: heterogeneous legacy hardware and virtualization with vendor lock-in, a slow path to shipping new services, and capital spend instead of predictable subscription. The client needed a single layer to quickly assemble and sell its own AI services — and to ship them into the end customer's environment just as fast.

The client builds the AI services itself — corporate LLM assistants, RAG search over regulatory documentation, classic ML and computer vision — and uses Cozystack as a universal substrate and installer: the same platform its applications sit on, deployable both in-house and inside the end customer's environment.

## Goals and objectives

- A single orchestrator over heterogeneous hardware (bare metal, virtualization, third-party clouds) — escaping lock-in, with unified monitoring, billing and security.
- Self-service multi-tenancy: each team or customer is an isolated tenant that orders services from the catalog (Postgres, Redis, Kafka, S3, vector DB, Kubernetes, GPU VMs).
- GPU as a resource: passthrough into VMs and clusters, LLM inference with usage accounting.
- Ship the same platform distribution, with the client's services, into the end customer's infrastructure — with data sovereignty (storage stays inside their boundary).

## Proposed solution

Cozystack here is not a "box" but a framework that already ships storage, networking, virtualization, monitoring and GPU, plus a catalog of managed services. The client builds its products on top. The architecture is layered:

1. **Hardware** — bare metal and the customer's existing virtualization.
2. **Cozystack framework** — IaaS (LINSTOR, Cilium/Kube-OVN, KubeVirt, GPU passthrough) and a PaaS service catalog.
3. **Multi-tenancy** — a `root → umbrella tenant → dev/staging/prod` hierarchy, single sign-on via Keycloak, RBAC, namespace isolation, quotas, unified monitoring.
4. **Client's products** — LLM assistants and internal services, deployed into tenants as code, consuming GPU and the vector DB.

We proposed a phased rollout: first the base infrastructure and catalog, then distributed training and model serving, then full MLOps and a data lake.

{{< placeholder-image width="1200" height="640" label="Architecture: one distribution, platform layers and geo-GPU — hardware → Cozystack framework → multi-tenancy → client's products, with a geo-distributed GPU cluster joined over an encrypted mesh" >}}

## Execution: new requirements and how we handled them

- **Vector DB for RAG.** The client asked for a vector database for document search — we packaged Qdrant as a Cozystack app and deployed it next to the GPU workloads; integration took about a week.
- **NVIDIA Dynamo — new development for the client.** To use the expensive cards more efficiently, we packaged Dynamo as a full platform package (a dedicated resource in the Cozystack API that the controller renders into a ready inference stack). Dynamo raises GPU utilization through disaggregated inference serving and KV-cache-aware routing across the fleet — with no extra vendor licenses.
- **Geo-distributed GPU.** A powerful GPU node sits in one data centre, the main cluster in another, 12–20 ms apart. We joined the clusters with an encrypted tunnel (WireGuard/Kilo): the GPU node connects to the main cluster's API, brings up the tunnel and sets routing.
- **Single access to models from all tenants.** We built a multi-cluster service proxy: a scheduled job syncs the remote GPU cluster's services and publishes them behind a shared address. Tenants reach the models as ordinary Kubernetes services.
- **Self-service for access and networking.** We added an intermediate level to the tenant hierarchy (dev → staging → prod via GitLab), expanded the address pool, switched to MetalLB, and scaled resources for heavy analytical queries — all on request.

Worth noting the engineering depth of support: some of the needed fixes (bucket-readiness propagation, a series of TLS fixes for managed services) went straight upstream into the platform.

## Results and current state

- A working cluster on Cozystack/Talos: **141 of 141 managed releases in Ready state**, all catalog service types available.
- The tenant hierarchy is implemented on GitOps: `root → umbrella tenant → three environments`; each with guest Kubernetes clusters and managed databases; shared services (secrets, image registry, backup buckets) at the umbrella level.
- A geo-distributed GPU cluster is up with an AI/ML service set (the NVIDIA Dynamo inference stack, LLM gateway, Qdrant vector DB, speech recognition and other RAG-stack services), bridged into the main cluster via the multi-cluster proxy syncing every 5 minutes.
- A demo for top management was prepared and shown: service provisioning and GPU passthrough through the web UI, single sign-on, multi-tenancy — with no YAML or direct cluster access.
- The move to production on the customer's infrastructure has begun — that "one distribution → deploys at the end customer".

## Roadmap

- Scaling for a large AI-factory project (tens of thousands of GPUs), token-based billing, a front-end and metering on top of the platform.
- Next phases: distributed training and serving (Ray/KServe), then MLOps and a data lake.
- Tenant-level self-service for access, catalog expansion with third-party services, a dev→staging→prod pipeline.
- A long-term service contract and shipping the distribution with the client's services into the end customer's boundary.

## Why this case matters

<div class="cs-why card-grid">
  <div class="card"><div class="card-body"><h3 class="card-title">Cozystack as a universal installer</h3><p class="card-description">The client builds the product; the platform provides one distribution — for in-house SaaS and for the end customer's isolated boundary.</p></div></div>
  <div class="card"><div class="card-body"><h3 class="card-title">Real AI/ML GPU workloads</h3><p class="card-description">A RAG stack and LLM inference with GPU utilization raised via NVIDIA Dynamo, packaged into the platform for the client.</p></div></div>
  <div class="card"><div class="card-body"><h3 class="card-title">Geo-distribution</h3><p class="card-description">Two clusters in different data centres stitched by an encrypted mesh; models available to all tenants as ordinary services.</p></div></div>
  <div class="card"><div class="card-body"><h3 class="card-title">Speed and customization</h3><p class="card-description">Non-standard requirements closed in "a day to a week", with some improvements going upstream into Cozystack.</p></div></div>
</div>

---

*This case study is published in anonymized form (Tier-3 evidence): the integrator and end customer are described by profile, not by name. For a reference call under NDA on an active opportunity, [talk to Aenix sales](/contact/).*

*Aenix is the team behind [Cozystack](https://cozystack.io) — a CNCF project (Sandbox today; Incubating expected late summer 2026), Apache 2.0. Aenix commercializes it as Ænix Platform, available in five editions: Public Cloud, ISP, Enterprise, IDP, AI/ML.*
