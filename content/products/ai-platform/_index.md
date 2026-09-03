---
title: "Ænix AI Platform — sovereign AI and GPU infrastructure"
description: "Aenix AI Platform: turnkey self-hosted AI infrastructure with multi-tenant GPU scheduling, model serving, vector databases and sovereignty controls."
type: "page"
language: "en"
primary_keyword: "sovereign ai infrastructure"
secondary_keywords: ["private gpu cloud", "self-hosted llm infrastructure", "multi-tenant gpu scheduling", "on-premise ai platform"]
images: ["img/og/ai-platform.png"]
hreflang_de: /de/produkte/ai-platform/
related_pages: ["/products/private-cloud-platform/", "/products/public-cloud-platform/", "/solutions/sovereign-ai/", "/solutions/private-llm/"]
quick_facts_style: "rows"
faq_style: "rows"
direct_answer_image: "/images/cozystack-screenshot.png"
direct_answer_image_alt: "Aenix AI Platform console"
direct_answer: |
  **Aenix AI Platform is turnkey, self-hosted AI infrastructure for AI-heavy and regulated organizations that need to run inference, fine-tuning, and RAG workloads on their own GPUs instead of hyperscaler AI APIs. Built on Cozystack (Apache 2.0, CNCF project), it bundles multi-tenant GPU scheduling with GPU-class awareness, pre-integrated model serving (vLLM-compatible), vector databases, object storage, ready-to-use open-weight models, service APIs, and sovereignty controls such as customer-controlled encryption keys and air-gapped deployment. Aenix, the open-core company behind Cozystack, productizes and delivers it as a project plus optional managed retainer, letting AI teams reach production faster while keeping model weights, training data, and operations fully under customer control.**
quick_facts:
  - label: "What it is"
    value: "Turnkey, self-hosted multi-tenant AI infrastructure for inference, fine-tuning, and RAG on customer-controlled GPUs"
  - label: "License"
    value: "Apache 2.0 (no per-CPU / per-core licensing)"
  - label: "Status"
    value: "Cozystack is a CNCF project (Sandbox since 2025-02-28; Incubating expected late summer 2026)"
  - label: "For"
    value: "AI-native organizations at scale, regulated AI deployments, GPU-heavy product companies, telcos and enterprises running internal AI platforms"
  - label: "GPU support"
    value: "NVIDIA H100, H200, A100, L40S, B100/B200 (Blackwell); CPU-only and alternative accelerators (AMD MI series, Intel Gaudi) supported"
  - label: "Foundation"
    value: "Cozystack with KubeVirt (VMs + containers on one Kubernetes API), Cilium (eBPF) networking, LINSTOR/DRBD storage, Tenant CRD multi-tenancy"
  - label: "Engagement"
    value: "3-6 months for a typical inference fleet; 6-12 months for full inference + fine-tuning + RAG; optional managed retainer"
faq:
  - q: "How is AI Platform different from running open-source Cozystack with our own AI stack?"
    a: "Cozystack provides the multi-tenant Kubernetes and GPU foundation. AI Platform adds pre-integrated inference (vLLM), fine-tuning and RAG patterns, GPU-class-aware multi-tenant scheduling, vector DB and object storage, ready-to-use models and blueprints, AI service APIs, bundled sovereignty controls, GPU sizing expertise, and Aenix delivery experience, saving teams the MLOps build effort."
  - q: "Which open-weight models are supported?"
    a: "Open-weight families including Llama 3.x, Mistral / Mixtral, Qwen, DeepSeek (incl. V3), Phi, and Gemma, with new models added as the landscape evolves. Proprietary closed-weight models can be integrated via an API gateway pattern but are not run on customer infrastructure."
  - q: "Which GPU classes do you support?"
    a: "NVIDIA H100 and H200 for flagship inference and fine-tuning, A100 for general-purpose work, L40S for cost-effective inference, and B100/B200 (Blackwell) for large training and inference. CPU-only is viable for small models and RAG, and AMD MI series and Intel Gaudi are supported for sovereignty and supply-continuity scenarios."
  - q: "Can we run this air-gapped?"
    a: "Yes. Air-gapped deployment is one of the four standard reference architectures: open-weight models, a self-contained registry, customer-controlled HSM-backed keys, and customer-side audit logging. Operational overhead is higher, but sovereignty is maximal."
  - q: "Is sovereign inference cheaper than hyperscaler AI APIs?"
    a: "For sustained inference (steady production load or millions of tokens per day), running on owned or leased GPU infrastructure typically delivers a significantly lower cost per token than per-token API pricing. The breakeven depends on your workload pattern, which a discovery call scopes."
  - q: "Can we fine-tune on customer data and keep ownership?"
    a: "Yes. Fine-tuning is a first-class workload supporting LoRA, QLoRA, and full or partial multi-GPU runs. Training data and the resulting models stay customer-controlled, with an audit-isolated environment available for regulated training data."
aliases:
  - /products/aenix-platform/ai-ml-edition/
---

> **This is the AI and GPU module.** Ænix Platform has two editions — [Provider](/products/public-cloud-platform/) and [Enterprise](/products/private-cloud-platform/) — and this capability extends either one: a provider sells it as GPU-as-a-Service, an enterprise runs its own inference on it.

**AI platform automation out of the box. Standard AI workloads, service APIs, and ready-to-use blueprints, databases, apps and models — so your AI team goes from idea to running jobs faster. Multi-tenant GPU scheduling, vector DBs, sovereignty controls included. Built for AI-native organizations and regulated AI deployments at scale.**

<div class="cta-row">
  <a class="cta-primary" href="/contact/">Book a call</a>
  <a class="cta-secondary" href="/products/">Compare platforms →</a>
</div>

---

## What's included

### AI platform automation out of the box

Pre-integrated stack for inference, fine-tuning, and RAG workloads. Service APIs for spinning up model-serving endpoints, fine-tuning jobs, vector indexes, evaluation harnesses — without bespoke MLOps engineering for each.

### Ready-to-use blueprints

Pre-validated patterns for common AI workload types:
- **Single-tenant inference cluster** — for one customer, one workload class
- **Multi-tenant inference fleet** — shared GPU pool with logical tenant isolation
- **Inference + fine-tuning + RAG** — full-stack pattern with heterogeneous GPU pools
- **Air-gapped sovereign deployment** — for defence, isolated industrial, sovereign-cloud customers

(See [Sovereign AI Decision Guide](/resources/sovereign-ai-decision-guide/) for blueprint detail.)

### Multi-tenant GPU scheduling

Per-tenant GPU pools, GPU-class-aware scheduling (e.g., L40S for inference, H100 for fine-tuning), MIG support on capable cards. Quotas + RBAC + observability per tenant for AI workloads.

### Models, databases, apps included

Pre-deployed open-weight models (Llama, Mistral, Qwen, DeepSeek, Phi, Gemma families). Vector DB (pgvector via PostgreSQL operator, or Qdrant). Managed databases (PostgreSQL, MySQL, Redis, Kafka, ClickHouse, RabbitMQ). Object storage (S3-compatible) for training data + model checkpoints.

### Service APIs

Inference API (vLLM-compatible by default; Triton supported). Fine-tuning job API. Embedding generation API. RAG retrieval API. All multi-tenant-aware.

### Sovereignty controls

Customer-controlled encryption keys for model weights at rest, training data, vector indexes. Supplier transparency to second hop. Audit-isolated environment. Provider personnel access logged + time-limited. Air-gap deployment supported.

### GPU sizing reference

Practical sizing tables for common workload profiles (Llama 7B / 13B / 70B / 405B, Mistral, Qwen, DeepSeek, Phi, Gemma — single-card / multi-card / multi-node configurations). Aenix engagement includes capacity planning for sustained workloads.

### Hosting panel + admin interface

Branded admin dashboard for the AI platform operator. Service-creation wizards for end users (ML engineers, data scientists, app teams).

### Observability for AI workloads

Inference latency / throughput metrics. GPU utilisation per tenant. Model-serving SLOs. Cost-per-token tracking. Anomaly detection for inference quality drift.

### Migration tooling and expertise

Productized patterns for migration from hyperscaler AI (AWS Bedrock, Azure OpenAI Service, GCP Vertex AI) to sovereign AI infrastructure. Particularly for organisations with sustained inference workloads where economics no longer fit hyperscaler API pricing.

---

## Who buys AI Platform

| Buyer | Typical engagement |
|---|---|
| AI-native startup at scale | Sovereign inference fleet, replacing hyperscaler API spend |
| Regulated AI deployment (bank / public sector / healthcare) | Sovereignty-required AI infrastructure with customer-controlled keys |
| GPU-heavy product company | Multi-tenant GPU platform with strict cost discipline |
| Telco / large enterprise running AI | Internal AI platform shared across BUs |

---

## Why AI Platform over alternatives

| Vs. | Why AI Platform |
|---|---|
| **Hyperscaler AI APIs** (Bedrock, Azure OpenAI, Vertex) | Sovereign — customer controls weights, data, operations. Sustained-utilization economics typically beat hyperscaler API pricing. Fine-tuning ownership. Auditability. |
| **Building AI infra on raw Kubernetes + GPU drivers** | Multi-tenant GPU scheduling, observability, sovereignty controls, ready blueprints, service APIs — all included. Avoid 12-24 months of MLOps engineering. |
| **Closed-source MLOps platforms** | Open-source foundation (Cozystack Apache 2.0) — no per-engineer / per-model licensing. Customer-controlled. |
| **Building in-house from open-source components** | Aenix has built this many times. Engagement avoids the multi-year build path. |
| **Run:ai (NVIDIA)** | Run:ai is a GPU scheduler and quota layer that assumes a Kubernetes platform already exists underneath — cluster lifecycle, storage, networking, tenancy and the VM estate are still yours to build and run. AI Platform brings the platform itself: GPU fractioning and MIG, KubeVirt for the workloads that never containerized, LINSTOR/DRBD storage, Tenant CRD isolation. It is also Apache 2.0 with no per-GPU subscription and no NVIDIA-only hardware assumption. If you already run a mature Kubernetes platform and only need scheduling, Run:ai is a narrower and reasonable purchase. |
| **Kubeflow** | Kubeflow is an ML toolchain — pipelines, notebooks, training operators, serving — not an infrastructure platform, and running it is itself a platform-engineering project. AI Platform supplies what Kubeflow assumes: multi-tenant GPU scheduling, managed databases and vector stores, object storage, observability, isolation per team. The two are complementary: teams run Kubeflow, or Dynamo, or plain vLLM, as tenant workloads on top. |

---

## Pricing

Project plus managed retainer, quoted per RFP. Discovery call to scope.

[Discuss AI Platform →](/contact/?edition=ai-ml)

---

## Engagement structure

- **Discovery call** (30 min, free)
- **Sovereign AI architecture review** (1-2 weeks, fixed-price) — using the [Sovereign AI Decision Guide](/resources/sovereign-ai-decision-guide/) framework + Aenix expertise
- **Pilot engagement** (3-6 months) — defined slice (one workload class, one tenant, one model family)
- **Full AI Platform build** (6-12 months) — production AI infrastructure with all targeted workload types
- **Managed retainer** (optional, ongoing) — Aenix runs the AI platform under SLA

<div class="cta-row">
  <a class="cta-secondary" href="/services/ai-platform-build/">AI Platform Build service →</a>
  <a class="cta-secondary" href="/resources/sovereign-ai-decision-guide/">Free Sovereign AI Decision Guide →</a>
</div>

---

## Customer evidence

AI Platform customers are NDA-protected. AI-native organizations and regulated AI deployments are in production. Anonymized phrasing pattern: "Sovereign AI infrastructure for regulated organization at scale".
### How is AI Platform different from running open-source Cozystack with our own AI stack?

Cozystack provides the multi-tenant Kubernetes + GPU foundation. AI Platform adds: pre-integrated inference (vLLM) + fine-tuning + RAG patterns, multi-tenant GPU scheduling with GPU-class awareness, vector DB + object storage included, ready-to-use models / blueprints, service APIs for AI-specific workflows, sovereignty controls bundled, GPU sizing expertise, and Aenix's AI engagement experience. For organisations not staffed for full MLOps engineering, this saves 12-24 months.

### Which open-weight models are supported?

Llama 3 / 3.1 / 3.2 / 3.3 family, Mistral / Mixtral, Qwen 2 / 3 family, DeepSeek (incl. V3), Phi family, Gemma family. New models added as the landscape evolves. Proprietary closed-weight models can be integrated via API gateway pattern but not run on customer infrastructure.

### Which GPU classes do you support?

NVIDIA H100, H200 (flagship inference + fine-tuning), A100 (general-purpose), L40S (cost-effective inference), B100 / B200 (Blackwell — large training/inference). CPU-only viable for small models + RAG. Alternative accelerators (AMD MI series, Intel Gaudi) supported for sovereignty / supply-continuity scenarios.

### Can we run this air-gapped?

Yes. Air-gapped pattern is one of the four standard reference architectures. Open-weight models, self-contained registry, customer-controlled keys (HSM-backed), customer-side audit log SIEM. Operational overhead is higher; sovereignty is maximal.

### What's the inference economics vs hyperscaler APIs?

For sustained inference (~millions of tokens/day or steady production load), sovereign inference on owned/leased GPU infrastructure typically delivers significantly lower $/token than per-token API pricing — but the breakeven depends on workload pattern. Discovery call covers the economics for your specific workload.

### Can we fine-tune on customer data?

Yes — fine-tuning is a first-class workload. Multi-GPU fine-tuning supported (LoRA / QLoRA / full / partial). Customer-controlled training data, customer-controlled output models. Audit-isolated environment for regulated training data.

### How does this fit with our existing observability stack?

AI Platform includes VictoriaMetrics + VictoriaLogs for AI-specific metrics (inference latency / throughput, GPU utilisation, cost-per-token, model-serving SLOs). Integrates with customer-side Datadog / Splunk / etc. via standard exporters.

---

## Combine it with the other platforms

The three Ænix platforms are one engine with different surfaces switched on. AI Platform is not a separate installation — it is GPU tenancy, model serving and the data services around them, running on the same substrate as everything else you operate.

- **[Private Cloud Platform](/products/private-cloud-platform/)** — the usual pairing for regulated buyers. DORA / NIS2 architecture, customer-managed keys and audit-ready logging extend over the AI estate: model weights at rest fall under the same key custody as the primary datastore, and GPU workloads sit inside the Tenant CRD boundary the auditor already reviewed. Taking AI Platform with Private Cloud features is a configuration decision, not a second contract.
- **[Public Cloud Platform](/products/public-cloud-platform/)** — for providers selling GPU-as-a-Service. Billing, metering and the customer portal come from that side; GPU-class-aware scheduling, MIG and fractioning come from this one. Providers commonly start with VMs and databases and switch GPU on when demand appears, on hardware they already run.

## How to start

Book a discovery call. Bring your AI workload profile (steady inference / training / fine-tuning / RAG / mix), regulatory scope, and target deployment model. We'll discuss AI Platform fit and engagement scope.

<div class="cta-row">
  <a class="cta-primary" href="/contact/">Book a call</a>
</div>

---

*Ænix AI Platform is built on [Cozystack](https://cozystack.io) — a CNCF project we created and maintain (currently CNCF Sandbox; CNCF Incubating expected late summer 2026). Apache 2.0. Aenix is the open-core company.*
