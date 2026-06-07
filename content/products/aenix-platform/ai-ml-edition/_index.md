---
title: "Ænix Platform AI/ML Edition"
description: "Ænix Platform AI/ML Edition: turnkey self-hosted AI infrastructure with multi-tenant GPU scheduling, model serving, and sovereignty controls."
type: "page"
language: "en"
direct_answer: |
  **Ænix Platform AI/ML Edition is turnkey, self-hosted AI infrastructure for AI-heavy and regulated organizations that need to run inference, fine-tuning, and RAG workloads on their own GPUs instead of hyperscaler AI APIs. Built on Cozystack (Apache 2.0, CNCF project), it bundles multi-tenant GPU scheduling with GPU-class awareness, pre-integrated model serving (vLLM-compatible), vector databases, object storage, ready-to-use open-weight models, service APIs, and sovereignty controls such as customer-controlled encryption keys and air-gapped deployment. Aenix, the open-core company behind Cozystack, productizes and delivers it as a project plus optional managed retainer, letting AI teams reach production faster while keeping model weights, training data, and operations fully under customer control.**
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
  - q: "How is AI/ML Edition different from running open-source Cozystack with our own AI stack?"
    a: "Cozystack provides the multi-tenant Kubernetes and GPU foundation. AI/ML Edition adds pre-integrated inference (vLLM), fine-tuning and RAG patterns, GPU-class-aware multi-tenant scheduling, vector DB and object storage, ready-to-use models and blueprints, AI service APIs, bundled sovereignty controls, GPU sizing expertise, and Aenix delivery experience, saving teams the MLOps build effort."
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
---

**AI platform automation out of the box. Standard AI workloads, service APIs, and ready-to-use blueprints, databases, apps and models — so your AI team goes from idea to running jobs faster. Multi-tenant GPU scheduling, vector DBs, sovereignty controls included. Built for AI-native organizations and regulated AI deployments at scale.**

<div class="cta-row">
  <a class="cta-primary" href="/contact/">Book a discovery call</a>
  <a class="cta-secondary" href="/products/aenix-platform/">All editions →</a>
</div>

---

## Quick facts

- **For:** AI-heavy organizations, regulated AI deployments, GPU-heavy product companies, AI-native startups at scale
- **Foundation:** Open-source Cozystack (CNCF project, Apache 2.0)
- **Engagement size:** €500k - €3M+ project; managed retainer post-deployment
- **Time to production:** 3-6 months for typical AI inference fleet; 6-12 months for full inference + fine-tuning + RAG architecture
- **GPU support:** H100, H200, L40S, A100, B100/B200 (Blackwell); CPU-only and alternative accelerators (AMD MI series, Intel Gaudi) supported
- **Architecture:** Kubernetes-native, multi-tenant GPU scheduling (Tenant CRD), KubeVirt for VM-bound workloads, vector DB + object storage included

---

## What's included in AI/ML Edition

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

## Who buys AI/ML Edition

| Buyer | Typical engagement |
|---|---|
| AI-native startup at scale | Sovereign inference fleet, replacing hyperscaler API spend |
| Regulated AI deployment (bank / public sector / healthcare) | Sovereignty-required AI infrastructure with customer-controlled keys |
| GPU-heavy product company | Multi-tenant GPU platform with strict cost discipline |
| Telco / large enterprise running AI | Internal AI platform shared across BUs |

---

## Why AI/ML Edition over alternatives

| Vs. | Why AI/ML Edition |
|---|---|
| **Hyperscaler AI APIs** (Bedrock, Azure OpenAI, Vertex) | Sovereign — customer controls weights, data, operations. Sustained-utilization economics typically beat hyperscaler API pricing. Fine-tuning ownership. Auditability. |
| **Building AI infra on raw Kubernetes + GPU drivers** | Multi-tenant GPU scheduling, observability, sovereignty controls, ready blueprints, service APIs — all included. Avoid 12-24 months of MLOps engineering. |
| **Closed-source MLOps platforms** | Open-source foundation (Cozystack Apache 2.0) — no per-engineer / per-model licensing. Customer-controlled. |
| **Building in-house from open-source components** | Aenix has built this many times. Engagement avoids the multi-year build path. |

---

## Pricing

Pricing on request — €500k - €3M+ project; managed retainer post-deployment. Discovery call to scope.

[Discuss AI/ML Edition →](/contact/?edition=ai-ml)

---

## Engagement structure

- **Discovery call** (30 min, free)
- **Sovereign AI architecture review** (1-2 weeks, fixed-price) — using the [Sovereign AI Decision Guide](/resources/sovereign-ai-decision-guide/) framework + Aenix expertise
- **Pilot engagement** (3-6 months) — defined slice (one workload class, one tenant, one model family)
- **Full AI/ML Edition build** (6-12 months) — production AI infrastructure with all targeted workload types
- **Managed retainer** (optional, ongoing) — Aenix runs the AI platform under SLA

[AI Platform Build service →](/services/ai-platform-build/) | [Free Sovereign AI Decision Guide →](/resources/sovereign-ai-decision-guide/)

---

## Customer evidence

AI/ML Edition customers are NDA-protected. AI-native organizations and regulated AI deployments are in production. Anonymized phrasing pattern: "Sovereign AI infrastructure for regulated organization at scale".

---

## Frequently asked questions

### How is AI/ML Edition different from running open-source Cozystack with our own AI stack?

Cozystack provides the multi-tenant Kubernetes + GPU foundation. AI/ML Edition adds: pre-integrated inference (vLLM) + fine-tuning + RAG patterns, multi-tenant GPU scheduling with GPU-class awareness, vector DB + object storage included, ready-to-use models / blueprints, service APIs for AI-specific workflows, sovereignty controls bundled, GPU sizing expertise, and Aenix's AI engagement experience. For organisations not staffed for full MLOps engineering, this saves 12-24 months.

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

AI/ML Edition includes VictoriaMetrics + VictoriaLogs for AI-specific metrics (inference latency / throughput, GPU utilisation, cost-per-token, model-serving SLOs). Integrates with customer-side Datadog / Splunk / etc. via standard exporters.

---

## How to start

Book a 30-minute discovery call. Bring your AI workload profile (steady inference / training / fine-tuning / RAG / mix), regulatory scope, and target deployment model. We'll discuss AI/ML Edition fit and engagement scope.

<div class="cta-row">
  <a class="cta-primary" href="/contact/">Book a discovery call</a>
</div>

---

*Ænix Platform AI/ML Edition is built on [Cozystack](https://cozystack.io) — a CNCF project we created and maintain (currently CNCF Sandbox; CNCF Incubating expected late summer 2026). Apache 2.0. Aenix is the open-core company.*
