---
title: "Ænix AI Platform — sovereign AI and GPU infrastructure"
description: "Ænix AI Platform: self-hosted AI infrastructure on your own NVIDIA GPUs — multi-tenant GPU scheduling, HAMi sharing, model serving, vector databases."
type: "page"
language: "en"
hero_cta: {secondary_text: "GPU as a Service for providers", secondary_url: "/solutions/gpu-as-a-service/"}
primary_keyword: "sovereign ai infrastructure"
secondary_keywords: ["private gpu cloud", "self-hosted llm infrastructure", "multi-tenant gpu scheduling", "on-premise ai platform", "kubernetes ai conformance"]
images: ["img/og/ai-platform.jpg"]
hreflang_de: /de/produkte/ai-platform/
related_pages: ["/products/private-cloud-platform/", "/products/public-cloud-platform/", "/solutions/sovereign-ai/", "/solutions/private-llm/", "/case-studies/bare-metal-gpu-inference/"]
quick_facts_style: "rows"
faq_style: "rows"
direct_answer_image: "/images/screens/ai-platform-ai-gateway.jpg"
direct_answer_image_alt: "Ænix AI Platform: the AI Gateway with an OpenAI-compatible API key, available models and usage against a budget"
direct_answer: |
  **Ænix AI Platform is self-hosted AI infrastructure for organizations that run inference, fine-tuning and RAG on their own GPUs instead of hyperscaler AI APIs. It is the third Ænix platform, alongside Public Cloud and Private Cloud, and runs on the same Cozystack engine (Apache 2.0, a CNCF project accepted into the CNCF Kubernetes AI Conformance program in September 2026). NVIDIA data-centre GPUs are supported through the NVIDIA GPU Operator, with passthrough of whole GPUs or NVIDIA vGPU (requires your NVIDIA vGPU licence) for virtual machines, and MIG partitions or time-sliced sharing via HAMi in tenant Kubernetes clusters. Around that sit multi-tenant GPU quotas, model serving (vLLM-compatible), vector databases, object storage and air-gapped deployment. Ænix delivers it as a project quoted per RFP — a 14- or 28-day assessment, then a 3-12 month build depending on scope — with an optional managed retainer.**
quick_facts:
  - label: "What it is"
    value: "Self-hosted, multi-tenant AI infrastructure for inference, fine-tuning and RAG on GPUs you control. The third Ænix platform, on the same engine as Public Cloud and Private Cloud."
  - label: "GPUs"
    value: "NVIDIA data-centre GPUs through the NVIDIA GPU Operator: passthrough or NVIDIA vGPU (requires your NVIDIA vGPU licence) for VMs; MIG partitions and time-sliced sharing via HAMi in tenant Kubernetes clusters. Other accelerators: PCI passthrough to VMs only."
  - label: "Conformance"
    value: "Cozystack accepted into the CNCF Kubernetes AI Conformance program (September 2026); CNCF Certified Kubernetes distribution. NVIDIA partner validation of the GPU Operator stack submitted in October 2026, pending."
  - label: "Licence"
    value: "Apache 2.0 engine (no per-CPU, per-core or per-GPU licensing)"
  - label: "GPU usage and billing"
    value: "GPU usage is measured per tenant; charging happens in your billing system (WHMCS or your own)."
  - label: "Engagement"
    value: "Quoted per RFP: discovery call, 14- or 28-day assessment, then a 3-12 month build depending on scope; optional managed retainer."
  - label: "Evidence"
    value: "Four anonymized GPU case studies, including 8×H100 inference on owned bare metal in about two months."
faq:
  - q: "How is AI Platform different from running open-source Cozystack with our own AI stack?"
    a: "Cozystack provides the multi-tenant Kubernetes and GPU foundation: the NVIDIA GPU Operator, GPU passthrough to VMs, NVIDIA vGPU support for VMs and HAMi sharing are open source (vGPU itself needs your NVIDIA vGPU licence). AI Platform adds the delivery around it — architecture and GPU sizing for your workloads, inference, fine-tuning and RAG patterns, vector databases and object storage set up for them, tenant quotas, observability and an enterprise support tier — so your team does not run the platform build itself."
  - q: "Which GPUs are supported?"
    a: "NVIDIA data-centre GPUs, through the NVIDIA GPU Operator: a whole GPU passed through to a virtual machine, NVIDIA vGPU for virtual machines (requires your NVIDIA vGPU licence), or a GPU shared between containers with HAMi. Our published deployments include an 8×H100 inference server. We do not publish a validated-model list; NVIDIA partner validation of the GPU Operator stack was submitted in October 2026 and is pending. Other accelerators can be passed through to VMs as PCI devices, without operator automation."
  - q: "Do you support MIG or time-slicing?"
    a: "Yes, both, in tenant Kubernetes clusters. The NVIDIA GPU Operator exposes MIG partitions of MIG-capable cards such as A100 and H100 as schedulable resources, and HAMi provides time-sliced sharing with memory and compute limits per workload and oversubscription. Virtual machines take whole GPUs by passthrough, or NVIDIA vGPU with your NVIDIA vGPU licence. Choose by the isolation a workload needs: MIG partitions are separated in hardware, HAMi shares are not."
  - q: "What is the CNCF Kubernetes AI Conformance?"
    a: "A CNCF programme that checks whether a Kubernetes platform supports the capabilities AI workloads rely on. Cozystack was accepted into it in September 2026, so it sits in the same list as other conformant Kubernetes platforms that AI teams compare."
  - q: "How is GPU usage billed?"
    a: "GPU usage is measured per tenant. Charging happens in the billing system you already run — WHMCS through the Ænix integration, or your own. Combined with Public Cloud Platform, a provider sells GPU capacity through the same billing surface as its VMs and databases."
  - q: "Can we run this air-gapped?"
    a: "Yes. Air-gapped installation is a documented Cozystack workflow; open-weight models and a self-contained registry are mirrored into the perimeter. Operational overhead is higher, and Ænix support for air-gapped installations is included from the Plus tier."
  - q: "Is sovereign inference cheaper than hyperscaler AI APIs?"
    a: "For sustained inference — steady production load — owned or leased GPUs typically cost less per token than per-token API pricing. One customer cut GPU cost about five times after moving off a public hyperscaler. The break-even depends on your workload pattern, which the assessment models."
aliases:
  - /products/aenix-platform/ai-ml-edition/
---

> **One engine, three platforms.** AI Platform is the third Ænix platform. It runs on the same substrate as [Public Cloud Platform](/products/public-cloud-platform/) and [Private Cloud Platform](/products/private-cloud-platform/) and combines with either: a provider sells GPU capacity through the billing surface it already has, and a regulated enterprise runs its own inference inside the tenant boundary its auditor already reviewed.

**Infrastructure for inference, fine-tuning and RAG on your own GPUs: multi-tenant GPU scheduling, model serving, vector databases, object storage and air-gapped deployment, built on a CNCF Kubernetes AI Conformance platform. For AI-heavy organizations and regulated AI deployments.**

<div class="cta-row">
  <a class="cta-primary" href="/contact/">Book a call</a>
  <a class="cta-secondary" href="/products/">Compare platforms →</a>
</div>

---

## What's included

### GPU allocation

NVIDIA data-centre GPUs through the NVIDIA GPU Operator:

| Mode | How it works | Status |
|---|---|---|
| Whole GPU to a virtual machine | PCI passthrough into a KubeVirt VM | Shipping |
| NVIDIA vGPU for VMs | Mediated vGPU devices in KubeVirt VMs; requires your NVIDIA vGPU licence | Shipping since Cozystack 1.5 |
| Whole GPU to a container | NVIDIA GPU Operator device plugin | Shipping |
| MIG partitions (tenant Kubernetes, GPU Operator) | Hardware partitions of a MIG-capable card, exposed as schedulable resources | Shipping (addon) |
| Time-sliced sharing (tenant Kubernetes, HAMi) | Containers share one card, with memory and compute limits per workload and oversubscription | Shipping (addon) |

Per-tenant GPU quotas, RBAC and observability. GPU usage is measured per tenant; charging happens in your billing system.

### Blueprints

Patterns for common AI workload types, adapted to your estate during the engagement:
- **Single-tenant inference cluster** — one team, one workload class
- **Multi-tenant inference fleet** — shared GPU pool with tenant isolation
- **Inference + fine-tuning + RAG** — full-stack pattern with heterogeneous GPU pools
- **Air-gapped deployment** — for isolated industrial, sovereign-cloud and regulated customers

(See the [Sovereign AI Decision Guide](/resources/sovereign-ai-decision-guide/) for blueprint detail.)

### Models, databases and storage

Open-weight models (Llama, Mistral, Qwen, DeepSeek, Phi, Gemma families) deployed for your workloads. Vector databases (pgvector via the PostgreSQL operator, or Qdrant). Managed databases (PostgreSQL, MariaDB, Valkey, ClickHouse) and message brokers (Kafka, RabbitMQ). S3-compatible object storage for training data and model checkpoints.

### Serving and fine-tuning

Inference with vLLM-compatible serving by default (Triton supported), fine-tuning jobs, embedding generation and RAG retrieval, set up as multi-tenant platform services rather than a bespoke build per workload.

### Sovereignty controls

Hardware and data in your jurisdiction. Air-gapped deployment supported. Encryption and key handling designed with you during the build. Ænix engineers work on your environment only with your approval.

### GPU sizing

Sizing for common workload profiles (7B to 405B-parameter models, single-card, multi-card and multi-node configurations) and capacity planning for sustained workloads, as part of the engagement. Network fabric design for multi-node training (InfiniBand, RoCE) is scoped in the assessment for your hardware, not sold as a packaged feature.

### Observability for AI workloads

Inference latency and throughput, GPU utilisation per tenant and model-serving SLOs in VictoriaMetrics and VictoriaLogs, exportable to an existing Prometheus, Datadog or Splunk estate.

### Moving off hyperscaler AI APIs

Migration planning from AWS Bedrock, Azure OpenAI Service or GCP Vertex AI to self-hosted inference, for organizations whose sustained inference no longer fits per-token pricing.

---

## Deployments we have written up

| Case | What happened |
|---|---|
| [8×H100 inference on your own bare metal](/case-studies/bare-metal-gpu-inference/) | A mobile photo/video app moved GPU inference off a rented GPU cloud onto its own 8×H100 server: about two months to production, KubeVirt passthrough |
| [From public cloud to bare metal](/case-studies/multicloud-academic-gpu/) | A European academic-computing SaaS moved to owned bare metal and cut GPU cost about five times |
| [Cozystack as a universal installer](/case-studies/ai-universal-installer/) | A telecom operator and integrator built a corporate AI platform with RAG on Qdrant and NVIDIA Dynamo inference, then shipped it into its end customer's environment |
| [An internal data and AI platform](/case-studies/internal-data-and-ai-platform/) | GPU pools with per-tenant quotas and usage metrics that feed billing, in rollout |

---

## Who buys AI Platform

| Buyer | Typical engagement |
|---|---|
| AI-native company at scale | Self-hosted inference fleet, replacing hyperscaler API spend |
| Regulated AI deployment (bank / public sector / healthcare) | AI infrastructure inside the regulated perimeter |
| GPU-heavy product company | Multi-tenant GPU platform with strict cost discipline |
| Telco / large enterprise running AI | Internal AI platform shared across business units |
| Data centre or GPU cloud selling capacity | GPU tenancy combined with Public Cloud Platform billing and portal |

---

## Why AI Platform over alternatives

| Vs. | Why AI Platform |
|---|---|
| **Hyperscaler AI APIs** (Bedrock, Azure OpenAI, Vertex) | You control weights, data and operations. Sustained-utilization economics typically beat per-token API pricing. You own fine-tuned models. |
| **Building it yourself on Kubernetes and GPU drivers** | GPU scheduling, tenancy, storage, observability and blueprints arrive together instead of as a long platform-engineering project. |
| **Closed-source MLOps platforms** | Open-source foundation (Cozystack, Apache 2.0) — no per-engineer or per-model licensing, and the substrate stays yours if the contract ends. |
| **Run:ai (NVIDIA)** | Run:ai is a GPU scheduler and quota layer that assumes a Kubernetes platform already exists underneath — cluster lifecycle, storage, networking, tenancy and the VM estate are still yours to build and run. AI Platform brings the platform itself: fractional GPU sharing, KubeVirt for workloads that never containerized, LINSTOR/DRBD storage, tenant isolation. It is also Apache 2.0 with no per-GPU subscription. If you already run a mature Kubernetes platform and only need scheduling, Run:ai is a narrower and reasonable purchase. |
| **Kubeflow** | Kubeflow is an ML toolchain — pipelines, notebooks, training operators, serving — not an infrastructure platform. AI Platform supplies what Kubeflow assumes: multi-tenant GPU scheduling, managed databases and vector stores, object storage, observability, isolation per team. Teams run Kubeflow, Dynamo or plain vLLM as tenant workloads on top. |

---

## Pricing

Project plus optional managed retainer, quoted per RFP after a discovery call. GPU nodes are not priced from the published support list, which covers Public Cloud Platform and self-run Cozystack.

[Discuss AI Platform →](/contact/?platform=ai)

---

## Engagement structure

- **Discovery call** (30 minutes, free)
- **Platform Readiness Assessment** (14 or 28 days, fixed price) — workload profile, GPU sizing, architecture and roadmap, using the [Sovereign AI Decision Guide](/resources/sovereign-ai-decision-guide/) framework
- **Build** (3-12 months, depending on scope) — often starting with a defined slice: one workload class, one tenant, one model family
- **Managed retainer** (optional, ongoing) — Ænix runs the AI platform under SLA

<div class="cta-row">
  <a class="cta-secondary" href="/services/ai-platform-build/">AI Platform Build service →</a>
  <a class="cta-secondary" href="/resources/sovereign-ai-decision-guide/">Free Sovereign AI Decision Guide →</a>
</div>

---

## Combine it with the other platforms

The three Ænix platforms are one engine with different surfaces switched on. AI Platform is not a separate installation — it is GPU tenancy, model serving and the data services around them, running on the same substrate as everything else you operate.

- **[Private Cloud Platform](/products/private-cloud-platform/)** — the usual pairing for regulated buyers. The DORA- and NIS2-aligned architecture, encryption and audit logging designed for the private cloud cover the AI estate too, and GPU workloads sit inside the tenant boundary the auditor already reviewed.
- **[Public Cloud Platform](/products/public-cloud-platform/)** — for providers selling GPU capacity. Billing, the WHMCS integration and the customer portal come from that side; GPU scheduling and HAMi sharing come from this one, with GPU usage measured per tenant. Providers commonly start with VMs and databases and switch GPU on when demand appears. How a data centre or GPU cloud sells this capacity is described on [GPU as a service platform](/solutions/gpu-as-a-service/).

## How to start

Book a discovery call. Bring your AI workload profile (steady inference / training / fine-tuning / RAG / mix), regulatory scope and target deployment model.

<div class="cta-row">
  <a class="cta-primary" href="/contact/">Book a call</a>
</div>

---

*Ænix AI Platform is built on [Cozystack](https://cozystack.io) — a CNCF project Ænix created and maintains with maintainers from other companies (currently CNCF Sandbox; CNCF Incubating application in due diligence). Apache 2.0.*
