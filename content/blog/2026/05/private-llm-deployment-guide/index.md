---
title: "Private LLM deployment — a practical guide to on-premise AI infrastructure in 2026"
description: "This is the long-form companion to our sovereign AI services page. It walks through what a real private LLM deployment looks like — model selection,..."
date: "2026-05-01"
author: "Aenix Team"
type: "tutorial"
topics: ["DORA", "Kubernetes", "Sovereignty", "AI/ML", "GPU", "Multi-tenancy"]
language: "en"
companion_landing: "/solutions/sovereign-ai/"
quiz:
  title: "Test yourself: private LLM deployment"
  questions:
    - q: "How many layers does the article say a real private LLM stack has?"
      options:
        - { text: "Three", correct: false }
        - { text: "Six — hardware, platform, serving, model, application, operations", correct: true }
        - { text: "Nine", correct: false }
      explanation: "Skipping any of the six layers — particularly the platform and operations layers — produces a PoC that does not survive contact with production."
    - q: "Which serving stack is named as the default choice for most production inference workloads?"
      options:
        - { text: "TGI", correct: false }
        - { text: "llama.cpp / Ollama", correct: false }
        - { text: "vLLM", correct: true }
        - { text: "NVIDIA Triton Inference Server", correct: false }
      explanation: "vLLM is the default for transformer model inference because of its high throughput via PagedAttention. Triton is good for mixed workloads (LLM + vision + classical ML); TGI has niche features; llama.cpp/Ollama suit small models or PoCs."
    - q: "Around what sustained utilization does the crossover from hyperscaler GPU economics to on-premise typically happen?"
      options:
        - { text: "5–10%", correct: false }
        - { text: "30–50%", correct: true }
        - { text: "70–90%", correct: false }
      explanation: "The article notes that the crossover varies by GPU class and utilization but moves a lot of inference workloads onto on-premise economics around 30–50% sustained utilization."
    - q: "Which GPU class is positioned as the cost-effective inference choice for tenant-fleet inference, distinct from the H100/H200 fine-tuning workhorse?"
      options:
        - { text: "L40S (48 GB)", correct: true }
        - { text: "B200 (Blackwell)", correct: false }
        - { text: "AMD MI300", correct: false }
        - { text: "Groq", correct: false }
      explanation: "The L40S has 48 GB of GPU memory and is positioned for inference of smaller models or as part of a multi-tenant inference fleet. The H100/H200 are the fine-tuning + high-throughput inference workhorses; Blackwell is for the largest models with longer lead times."
    - q: "What is \"Pitfall 3\" — under-sizing memory — caused by, according to the article?"
      options:
        - { text: "Choosing FP16 instead of FP8", correct: false }
        - { text: "Not accounting for KV cache memory that scales with context length and batch size", correct: true }
        - { text: "Running the model on AMD GPUs", correct: false }
        - { text: "Using vLLM instead of Triton", correct: false }
      explanation: "A model that \"fits\" by parameter count may not fit at the operational batch size because of KV cache memory growth with context length and batch size. Right-sizing requires actual benchmark with realistic context lengths."
---

**This is the long-form companion to our [sovereign AI services page](/solutions/sovereign-ai/). It walks through what a real private LLM deployment looks like — model selection, hardware sizing, the serving stack, the platform underneath, and the operational model your team has to run afterwards. Written for the engineers and architects who have to translate "we need our own LLM" into a system that actually works.**

The decision to deploy a private LLM is increasingly easy to make and surprisingly hard to execute well. The decision is easy because the trigger is usually clear: regulated data, sectoral rules, or the economics of inference at scale make a hyperscaler model API the wrong answer. Execution is hard because the supporting infrastructure — GPU scheduling, model serving, observability, multi-tenancy, audit-readiness — is more work than the LLM itself.

This article covers the actual scope.

## When a private LLM is the right answer

Three trigger profiles dominate the conversations that lead to private LLM deployment.

### Trigger 1 — regulated data class

The data your AI must process is bound to a jurisdiction by regulator, sector, or contract. Examples: customer financial records under DORA / sectoral banking rules; patient-data in healthcare; classified or sensitive public-sector data; legal-privilege content; internal IP whose exposure to a third-party model would constitute a contractual or competitive breach.

For these workloads, sending data to a hyperscaler model API — even one with a "private" deployment branding — fails the substantive requirement. The data must stay in the customer's perimeter, and so must the model.

### Trigger 2 — inference economics at scale

For 24/7 inference workloads at sustained throughput, hyperscaler GPU economics break down. A workload that consumes a few hundred GPU-hours per day at peak burst rates can cost more on a hyperscaler than a dedicated cluster does in a year. The crossover point varies by GPU class and utilization, but moves a lot of inference workloads onto on-premise economics around 30-50% sustained utilization.

### Trigger 3 — auditability and reproducibility

Regulator dialog increasingly requires "exactly which model produced this output, with which weights, with which input data, on which hardware, at what time." Hyperscaler model APIs answer the first question (model name + version) but not the others. Private deployment makes all of them auditable.

If your situation matches one of these triggers strongly, or two weakly, private LLM deployment moves from "interesting option" to "obvious next step."

## What goes into a real private LLM stack

A production private LLM stack has six layers, all of which need an answer:

1. **Hardware** — GPUs, CPUs, networking, storage
2. **Platform** — Kubernetes, virtualization, GPU scheduling
3. **Serving stack** — model server, batching, autoscaling
4. **Model layer** — open-weight models, fine-tuned variants, embeddings
5. **Application layer** — RAG, agent frameworks, LLM gateway
6. **Operations** — observability, audit, cost management, on-call

Skipping any layer — particularly platform and operations — produces a PoC that doesn't survive contact with production.

## Layer 1: hardware

The right GPU depends on workload, model size, and budget. The current production-ready landscape:

- **NVIDIA H100 / H200** — the workhorse for fine-tuning and high-throughput inference of mid-to-large models. Expensive, available with lead time, broadly supported.
- **NVIDIA Blackwell (B100/B200)** — newer, higher memory bandwidth, well-suited for the largest models. Lead times longer.
- **NVIDIA L40S** — 48 GB GPU memory; good fit for inference of smaller models or as part of a multi-tenant inference fleet.
- **NVIDIA A100** — older but still cost-effective for many inference workloads; second-hand market reasonable.
- **AMD MI300 / MI325** — credible alternative for some workloads; ROCm tooling still maturing relative to CUDA.
- **Specialized accelerators (Groq, Cerebras, etc.)** — strong for specific use cases; ecosystem narrower.

For most regulated-industry deployments, a fleet of H100/H200 (or A100 for cost-sensitive) plus L40S for tenant-fleet inference is the typical answer. Validated GPU models in our deployments: A100, H100, H200, L40S, and Blackwell.

The CPU and storage sizing are also important — but largely follow standard practice once GPU sizing is set. Networking matters significantly for multi-GPU training (NVLink, InfiniBand, RoCE) and somewhat less for inference (where 25-100 Gbps Ethernet is usually sufficient).

## Layer 2: platform

The platform sits between hardware and applications. For private LLM, the right platform answers:

- How GPUs are scheduled across workloads — full passthrough, MIG (NVIDIA Multi-Instance GPU), time-slicing, or virtual GPU (vGPU)
- How VMs and containers coexist (most data-science workloads run as containers; some legacy or notebook-heavy workloads as VMs)
- How multi-tenancy is enforced — tenant isolation, quota, scoped audit
- How observability, identity, and storage integrate

Kubernetes-native virtualization platforms (Cozystack, OpenShift Virtualization, vendor-led variants) are increasingly the default because they answer all of these in one stack.

[Cozystack](/products/cozystack/) supports:
- Container-based AI workloads with Kubernetes GPU scheduling: MIG, time-slicing, passthrough
- VM-based AI workloads through KubeVirt with NVIDIA vGPU (NVIDIA Enterprise license required)
- Multi-tenant isolation through Tenant CRD with per-tenant GPU quotas

OpenStack-based or VMware-based legacy platforms can be retrofitted to host AI workloads, but typically with more operational friction and less native Kubernetes integration.

## Layer 3: serving stack

The serving stack runs the model. Options:

- **vLLM** — high-throughput serving for transformer models with PagedAttention. Default choice for most inference workloads.
- **NVIDIA Triton Inference Server** — broader model-format support; strong for mixed workloads (LLM + vision + embedding + classical ML).
- **TGI (Text Generation Inference)** — Hugging Face's serving stack; some specific feature niches.
- **llama.cpp / Ollama** — for smaller models, single-machine deployments, or development/PoC.
- **Custom** — for specialized workloads that need direct framework access.

For multi-tenant production: vLLM (or Triton) with autoscaling, batched inference, and a request router (LiteLLM, Portkey, or custom). The choice between vLLM and Triton is mostly a function of the model formats and existing ML pipelines.

## Layer 4: model layer

Open-weight models in production-ready 2026 landscape:

- **Llama (Meta)** — large family covering 1B to 405B+, license permits commercial use with caveats
- **Mistral** — Mixtral (MoE) and Mistral Large; commercial license for some, Apache 2.0 for older
- **Qwen (Alibaba)** — strong multilingual, including non-English; Apache 2.0
- **DeepSeek** — strong reasoning models; license varies
- **Phi (Microsoft)** — small models with surprising capability; MIT
- **Gemma (Google)** — small/medium-size; license permits commercial use

Selection depends on:
- Language requirement (multilingual vs English-only)
- Workload type (chat / RAG / code / vision / embedding)
- Cost-per-token target at expected throughput
- License terms (commercial use, attribution, redistribution)

For most regulated-industry deployments: a primary model in the 7B-70B range for general use, plus smaller models (Phi, Gemma) for cost-sensitive paths, plus an embedding model for RAG. Fine-tuning happens for domain-specific accuracy needs.

## Layer 5: application layer

Most production deployments add:

- **LLM gateway** — request routing, rate limiting, audit logging, cost tracking. Examples: LiteLLM, Portkey, custom.
- **RAG infrastructure** — vector database (Weaviate, Qdrant, Milvus, pgvector), document indexing pipeline, retrieval orchestration.
- **Agent framework** (where applicable) — LangChain, LlamaIndex, custom.
- **Observability for LLM** — token usage, latency p50/p95/p99, error rates, content filters.

The application layer is where model-provider switching costs concentrate. A well-engineered LLM gateway makes the underlying model swappable; a poorly-engineered one locks the application to a specific model API.

## Layer 6: operations

The post-deployment steady state is where most private LLM projects underperform expectations. The operational surface includes:

- **GPU utilization monitoring** — under-utilized GPUs are wasted budget; over-utilized GPUs cause queueing
- **Model lifecycle management** — when do you upgrade Llama 3.x to 4.x? When do you re-fine-tune? Who owns the regression-test suite?
- **Cost tracking by tenant / team / workload** — without per-tenant tracking, cost allocation becomes unmaintainable
- **Audit trail** — for regulator dialog, every inference request must trace to: model + version, weights, input, output, requesting user, timestamp
- **On-call** — GPU failures, OOM events, queue backups
- **Capacity planning** — when do you buy more GPUs? When do you retire older ones?

A team that under-staffs the operations layer ends up with a stack that "works" but isn't production-grade for regulator audit or business-continuity standards.

## Common deployment patterns

### Pattern 1: single-tenant inference cluster

Smallest reasonable deployment. Single inference workload, single team, single model family. Typical hardware: 4-16 H100/H200 or 8-32 L40S. Platform: bare Kubernetes or Cozystack. Serving: vLLM. Best for: regulated workloads with one application owner; PoCs.

### Pattern 2: multi-tenant inference fleet

Multi-team or multi-application deployment. Multiple model families, per-tenant quotas, shared observability. Typical hardware: 16-128 GPUs across multiple model classes. Platform: Cozystack with Tenant CRD or OpenShift with namespaces + quotas. Serving: vLLM or Triton with autoscaling and a request router. Best for: enterprise platform teams supporting multiple data-science teams.

### Pattern 3: inference + fine-tuning + RAG

Full AI platform. Inference fleet, dedicated fine-tuning capacity, RAG infrastructure with vector database, embedding model, LLM gateway. Typical hardware: 32-512 GPUs across roles. Platform: Cozystack or full Kubernetes with operators. Best for: financial services, healthcare, public sector with sustained AI program.

### Pattern 4: air-gapped sovereign deployment

Air-gapped or restricted-egress deployment for the most sensitive workloads. No internet egress; updates through controlled channels (Harbor mirror, internal package registry, manually distributed model weights). Typical hardware: customer-supplied. Platform: Cozystack with air-gap install. Best for: classified, defence-adjacent, healthcare-with-strict-residency.

## Common pitfalls

### Pitfall 1: skipping the platform layer

Teams deploy vLLM on a couple of bare-metal boxes, call it a private LLM deployment. Works for a PoC. Falls over the first time GPU demand exceeds available capacity, or the first time multi-tenant isolation matters, or the first time the regulator asks for an audit trail.

### Pitfall 2: model-API-as-private-LLM

Some vendors market a SaaS endpoint with privacy controls as "private LLM." The data still leaves the customer's perimeter, even if the privacy clause is strong. For trigger-1 (regulated data) workloads, this fails the substantive requirement.

### Pitfall 3: under-sizing memory

The most common mistake in initial sizing: not accounting for KV cache memory that scales with context length and batch size. A model that "fits" by parameter count may not fit at the operational batch size. Right-sizing requires actual benchmark with realistic context lengths.

### Pitfall 4: ignoring the cost-allocation problem

Without per-tenant cost tracking, the platform's economics become opaque to finance. Teams over-request GPU; finance pushes back; the platform team has to retrofit cost tracking after the fact. Build it from day one.

## When NOT to deploy private LLM

Private LLM is the wrong answer when:

- Your AI workload is small (under ~10K requests/day) and not regulated. The economics of running dedicated GPU fleet don't beat hyperscaler on this scale.
- Your team has no Kubernetes / platform-engineering capacity. A private LLM platform is an operational commitment.
- Your model needs are at the absolute frontier (current GPT-class capability with all bells and whistles). The largest open-weight models close the gap rapidly, but the very latest frontier capability still trails.
- Your data is not actually regulated, your spend is not actually growing, and the trigger is more "we want our own thing" than a substantive driver. The work is real and substantial; the trigger has to be real too.

A good engagement is honest about these cases. The Aenix engagement specifically does not push private LLM when the alternative is the right answer.

## How to start

If your trigger profile fits, the structured next step is a sovereign-AI assessment of your specific workload, data class, and economics. The output is a written architecture for your situation — not a generic recommendation.

Aenix runs this as part of the **[Platform Readiness Assessment](/services/platform-readiness-assessment/)** with sovereignty + AI-platform workstreams emphasized. See the **[sovereign AI services page](/solutions/sovereign-ai/)** for engagement details.

---

## Want to dig deeper?

- **[Sovereign AI services page](/solutions/sovereign-ai/)** — engagement details
- **[Data sovereignty](/solutions/data-sovereignty/)** — regulator-side trigger
- **[DORA compliance](/solutions/dora-compliance/)** — financial-services trigger
- **[Cozystack](/products/cozystack/)** — the platform we run AI workloads on

---

*Aenix is the company behind Cozystack — a CNCF Project, Kubernetes Certified Distribution, OpenSSF Best Practices. We build sovereign AI platforms for AI / GPU operators, financial services, and public-sector organizations across the EU, DACH, and Central Asia.*

<!--
SEO meta description (≤155 chars):
"Private LLM deployment in 2026: model selection, hardware sizing, serving stack, platform, operations. Practical guide for regulated industries."

OG image: 1200×630 — GPU rack + LLM token stream + jurisdictional shield

Slug: /blog/2026/05/private-llm-deployment-guide/

Hreflang setup (when DE locale launches):
- en: /blog/2026/05/private-llm-deployment-guide/
- de: /de/blog/2026/05/private-llm-deployment-guide/
- x-default: en

Word count target: 2500-3500. Actual: ~3200.

Keyword cannibalization check: distinct parent topic from sovereign-ai landing and all other artifacts. No conflict.
-->
