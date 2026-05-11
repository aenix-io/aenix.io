---
title: "AI/ML Edition — when sustained-inference economics beat hyperscaler GPU"
description: "Long-form companion to the AI/ML Edition product page. Walks through GPU economics for sustained inference, multi-tenant GPU scheduling, and the architectural decisions that make dedicated AI infrastructure pay back over Year 2."
date: 2026-05-11
author: "Aenix Team"
type: "article"
topics: ["AI/ML", "GPU", "Cozystack", "Sovereignty", "Multi-tenancy", "KubeVirt"]
language: "en"
companion_landing: "/products/aenix-platform/ai-ml-edition/"
companion_label: "See AI/ML Edition product details →"
quiz:
  title: "Test yourself: sustained GPU economics"
  questions:
    - q: "At what H100 utilisation does on-prem GPU typically beat hyperscaler pricing according to the article?"
      options:
        - { text: "Around 30% sustained utilisation", correct: true }
        - { text: "Around 5-10% utilisation, almost always cheaper to own", correct: false }
        - { text: "Only above 80% sustained utilisation around the clock", correct: false }
      explanation: "The crossover analysis states H100 sustained crossover is around 30% utilisation: hyperscaler H100 is ~€3-4/hr, while amortised on-prem H100 works out to ~€0.9-1.3/hr at 30% utilisation."
    - q: "What is the 2026 default serving stack for transformer model inference cited in the article?"
      options:
        - { text: "TGI as the universal default for all transformer workloads", correct: false }
        - { text: "Triton only, with vLLM deprecated for production use", correct: false }
        - { text: "vLLM, with PagedAttention for high-throughput serving", correct: true }
      explanation: "Layer 3 (Serving stack) states 'vLLM is the 2026 default for transformer-model inference (PagedAttention delivers high throughput)', with Triton fitting mixed workloads."
    - q: "What is the most common initial GPU-sizing mistake the article identifies?"
      options:
        - { text: "Choosing H100s when L40S would handle the inference load", correct: false }
        - { text: "Not accounting for KV cache memory at operational batch size", correct: true }
        - { text: "Skipping NVLink between GPUs in multi-GPU model parallelism", correct: false }
      explanation: "Pitfall 3 says the most common initial-sizing mistake is not accounting for KV cache memory — a model that 'fits' by parameter count may not fit at the operational batch size."
    - q: "For sustained 24/7 customer-facing inference, how much cheaper is owning the GPUs after Year 2 according to the article?"
      options:
        - { text: "Roughly break-even with hyperscalers, crossing over only at Year 5", correct: false }
        - { text: "10× cheaper instantly, profitable from the first month of operation", correct: false }
        - { text: "30-60% cheaper after Year 2, with hardware refresh accounted for", correct: true }
      explanation: "The crossover section concludes that for sustained 24/7 customer-facing inference (millions of tokens per day), owning the GPUs is typically 30-60% cheaper after Year 2."
    - q: "Why is the 'SaaS endpoint marketed as private LLM' pattern called a pitfall?"
      options:
        - { text: "Data still leaves the customer perimeter, failing regulated workloads", correct: true }
        - { text: "Endpoints rate-limit aggressively and break burst-traffic patterns", correct: false }
        - { text: "SaaS endpoints lack OpenAI-compatible APIs for drop-in migration", correct: false }
      explanation: "Pitfall 2 (model-API-as-private-LLM) says the data still leaves the customer perimeter even when the privacy clause is strong, and for regulated-data workloads this fails the substantive requirement."
---

**Long-form companion to the [AI/ML Edition landing](/products/aenix-platform/ai-ml-edition/). Walks through GPU economics for sustained inference, multi-tenant GPU scheduling, model selection trade-offs, and the architectural decisions that make dedicated AI infrastructure pay back over Year 2 — versus continuing on hyperscaler GPU or proprietary model APIs.**

The "should we run our own AI infrastructure?" conversation has shifted
in 2026. For sporadic experimentation, hyperscaler GPU on demand is
still right. For sustained 24/7 inference, the math has moved
substantially. This article walks through where the crossover sits,
what an AI platform actually costs to operate, and what AI/ML Edition
ships that you'd otherwise have to build.

## The crossover point — sustained inference

The economics question that drives most AI/ML Edition engagements:
*at what utilisation does our own GPU infrastructure beat hyperscaler
GPU?*

For dedicated GPU instances, the crossover varies by class:

- **H100 sustained:** crossover around 30% utilisation. Hyperscaler
  H100 instance pricing in 2026 sits at ~€3-4/hr; amortised on-prem
  H100 (€25-30k acquisition + 4-year refresh + power + colocation)
  works out to ~€0.9-1.3/hr at 30% utilisation, ~€0.5-0.7/hr at 60%+.
- **L40S:** crossover around 40% utilisation. Lower hyperscaler pricing
  per hour (~€1.5/hr) but lower acquisition cost on-prem too
  (€12-15k). For multi-tenant inference fleets where workloads share
  GPU via MIG / time-slicing, L40S typically dominates.
- **A100 (second-hand market):** crossover around 25% utilisation.
  Lower upfront capital makes the break-even lower; A100 remains
  cost-effective for inference workloads through 2026.
- **Blackwell B100/B200:** depends on supply and pricing as the
  generation rolls out. Early adopters with sustained large-model
  inference benefit; for smaller-model inference, H100/L40S still
  fits.
- **AMD MI300/MI325:** credible alternative when ecosystem fits.
  ROCm tooling has matured; some workloads benefit. Hyperscaler
  options for AMD GPUs are thinner, so the on-prem case is often
  stronger.

For sustained 24/7 customer-facing inference (millions of tokens per
day, steady load profile), owning the GPUs is typically **30-60%
cheaper after Year 2**, accounting for hardware refresh and operational
overhead.

For sporadic experimentation, hyperscaler still wins — and we say so
when fit assessment finds the workload profile.

## What goes into a real AI platform

GPU is the visible cost line. The real platform has six layers, each
of which AI/ML Edition standardises:

### Layer 1 — Hardware

A typical multi-tenant inference fleet runs a mix:
- **8-32 H100 / H200** for high-throughput large-model inference and
  fine-tuning workloads
- **16-64 L40S** for tenant-facing inference of mid-sized models, with
  MIG / time-slicing for sharing across multiple smaller workloads
- **CPU-only nodes** for RAG retrieval, embedding generation,
  preprocessing pipelines that don't need GPU

Validated configurations in our deployments: A100 40/80GB, H100 80GB,
H200 141GB, L40S 48GB, Blackwell B100/B200. NVLink for multi-GPU
training where applicable; 25-100 Gbps Ethernet sufficient for most
inference patterns.

### Layer 2 — Platform

This is where AI/ML Edition adds substantial value over rolling your
own. Cozystack provides:

- **KubeVirt** for VM-bound AI workloads (legacy notebook environments,
  data-science teams that need full VMs).
- **Container-based GPU** via NVIDIA GPU operator with MIG support,
  time-slicing for fractional GPU allocation, full passthrough for
  exclusive workloads.
- **Multi-tenant Tenant CRD** with per-tenant GPU quotas, GPU-class-
  aware scheduling (e.g., L40S for inference tenants, H100 for
  fine-tuning tenants).
- **Identity, storage, observability** integrated.

Building this on raw Kubernetes is doable but expensive: 12-24 months
of MLOps engineering before production-ready multi-tenant GPU
scheduling works.

### Layer 3 — Serving stack

vLLM is the 2026 default for transformer-model inference (PagedAttention
delivers high throughput). NVIDIA Triton fits mixed workloads (LLM +
vision + classical ML). TGI has niche features. AI/ML Edition includes
both vLLM and Triton, pre-integrated with the platform autoscaling
and observability.

### Layer 4 — Model layer

Open-weight model families in 2026 production:
- **Llama 3 / 3.1 / 3.2 / 3.3** (Meta) — 1B to 405B+, license permits
  commercial with caveats
- **Mistral / Mixtral** — commercial license for newer, Apache 2.0
  for older
- **Qwen 2 / 3** (Alibaba) — strong multilingual including DACH and
  Eastern European languages, Apache 2.0
- **DeepSeek V3** — strong reasoning, license varies
- **Phi** (Microsoft) — small models with surprising capability, MIT
- **Gemma** (Google) — small/medium, commercial-use permitted

For most regulated-industry deployments: a primary model in the 7B-70B
range for general use, smaller models (Phi, Gemma) for cost-sensitive
paths, plus an embedding model for RAG. Fine-tuning happens for
domain-specific accuracy needs.

AI/ML Edition pre-deploys curated open-weight models in the cluster
registry. Customer can add others; Aenix engagement covers compatibility
testing.

### Layer 5 — Application layer

- **LLM gateway** (LiteLLM, Portkey, custom) — request routing, rate
  limiting, audit logging, cost tracking
- **RAG infrastructure** — pgvector (PostgreSQL operator), Qdrant,
  Weaviate, Milvus
- **Embedding pipelines** — document indexing, retrieval orchestration

The application layer is where model-provider switching cost
concentrates. A well-engineered LLM gateway makes the model swappable;
a poorly-engineered one locks the application to a specific API
contract.

### Layer 6 — Operations

The post-deployment steady state is where most private AI projects
underperform expectations. The operational surface includes:

- **GPU utilisation per tenant** — under-utilised GPUs are wasted
  budget; over-utilised GPUs cause queueing
- **Model lifecycle management** — when to upgrade Llama 3.x to 4.x?
  When to re-fine-tune? Who owns the regression-test suite?
- **Cost tracking per tenant / team / workload** — without per-tenant
  tracking, cost allocation becomes unmaintainable in multi-tenant
  AI platforms
- **Audit trail** — for regulator dialog, every inference request must
  trace to: model + version, weights, input, output, requesting user,
  timestamp
- **On-call** — GPU failures, OOM events, queue backups
- **Capacity planning** — when to buy more GPUs? When to retire older?

AI/ML Edition ships VictoriaMetrics + VictoriaLogs with AI-specific
metrics out of the box (token/sec per tenant, latency percentiles per
model version, cost-per-token per tenant) plus a capacity-planning
dashboard tied to the GPU sizing tables.

## Common deployment patterns

**Pattern 1 — single-tenant inference cluster.** Smallest reasonable
deployment. Single workload, single team, single model family. 4-16
H100/H200 or 8-32 L40S. Best for: regulated workloads with one
application owner, PoCs that will grow.

**Pattern 2 — multi-tenant inference fleet.** Multi-team or multi-
application deployment. 16-128 GPUs across mixed classes. Tenant CRD
with per-tenant quotas. Best for: enterprise platform teams supporting
multiple data-science teams.

**Pattern 3 — inference + fine-tuning + RAG full stack.** 32-512 GPUs
across roles. Vector DB, embedding model, LLM gateway. Best for:
financial services, healthcare, public sector with sustained AI
programme. This is the typical AI/ML Edition flagship deployment.

**Pattern 4 — air-gapped sovereign deployment.** No internet egress;
updates through controlled channels. Customer-supplied hardware,
customer-controlled keys (HSM-backed), customer-side audit SIEM. Best
for: classified workloads, defence-adjacent, healthcare with strict
residency.

## Common pitfalls

### Pitfall 1 — skipping the platform layer

Teams deploy vLLM on bare-metal boxes, call it a private AI deployment.
Works for a PoC. Falls over the first time GPU demand exceeds available
capacity, multi-tenant isolation matters, or the regulator asks for an
audit trail.

### Pitfall 2 — model-API-as-private-LLM

Some vendors market a SaaS endpoint with privacy controls as "private
LLM." The data still leaves the customer perimeter even if the privacy
clause is strong. For regulated-data workloads this fails the
substantive requirement.

### Pitfall 3 — under-sizing memory

Most common initial-sizing mistake: not accounting for KV cache memory
that scales with context length and batch size. A model that "fits" by
parameter count may not fit at the operational batch size. Right-sizing
requires actual benchmark with realistic context lengths and batch
profiles.

### Pitfall 4 — under-staffing operations

GPU clusters need ongoing operational care. A team that nails the
build-out but under-staffs operations ends up with a stack that "works"
but isn't audit-grade or business-continuity-grade. Plan operations
team size for sustained workload, not PoC.

## When AI/ML Edition is the right answer

Strong fit:

- Sustained inference workloads (~millions of tokens per day or steady
  production load) where sustained-utilisation economics favour
  on-prem GPU.
- Regulated data class that can't go to hyperscaler model APIs (banking,
  healthcare, classified, sectoral).
- Auditability requirement — every inference request traceable to
  model + version + input + output + user + timestamp.
- Existing platform-engineering capacity or willingness to invest in
  it (5-10 engineers).

Marginal fit:

- AI experimentation where sporadic GPU is sufficient. Hyperscaler
  on-demand wins for low-utilisation patterns.
- Single-workload deployments under 50 tokens/sec sustained. Often
  smaller deployments fit on hyperscaler-managed AI services more
  cost-effectively.

Poor fit:

- No regulated data, no sustained workload, no platform team. Use
  hyperscaler AI APIs or smaller open-source deployments.

## Engagement structure

- **Discovery call** (30 min, free)
- **Sovereign AI architecture review** (1-2 weeks, fixed-price) —
  using the [Sovereign AI Decision Guide](/resources/sovereign-ai-decision-guide/) framework plus Aenix experience
- **Pilot engagement** (3-6 months) — defined slice: one workload
  class, one tenant, one model family
- **Full AI/ML Edition build** (6-12 months) — production AI
  infrastructure with all targeted workload types
- **Managed retainer** (ongoing) — Aenix runs the AI platform under
  SLA

Engagement size: €500k - €3M+ project; managed retainer post-deployment.

## Where to dig deeper

- **[AI/ML Edition landing](/products/aenix-platform/ai-ml-edition/)** —
  feature list, GPU sizing tables, edition-specific FAQ
- **[Sovereign AI services](/solutions/sovereign-ai/)** — buyer-trigger
  landing for sovereign AI
- **[AI platform build services](/services/ai-platform-build/)** —
  engagement details
- **[Private LLM deployment — practical guide](/blog/2026/05/private-llm-deployment-guide/)** —
  six-layer stack walkthrough with hardware tables
- **[Sovereign AI architecture decisions](/blog/2026/05/sovereign-ai-architecture-decisions/)** —
  the seven decisions that define a sovereign AI architecture
- **[Sovereign AI Decision Guide](/resources/sovereign-ai-decision-guide/)** —
  downloadable decision-framework PDF

---

*Aenix is the company behind Cozystack — a CNCF project, Kubernetes
Certified Distribution. Cozystack was included in the CNCF CNAI Landscape
in May 2025. Our AI/ML Edition engagements are NDA-protected; anonymized
phrasing pattern is "Sovereign AI infrastructure for regulated
organisation at scale."*
