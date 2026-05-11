---
title: "Build an AI platform for startups — when dedicated infrastructure pays back"
description: "Companion to AI platform build services page."
date: "2026-05-01"
author: "Aenix Team"
type: "article"
topics: ["Cozystack", "KubeVirt", "Sovereignty", "AI/ML", "GPU", "Multi-tenancy"]
language: "en"
companion_landing: "/services/ai-platform-build/"
quiz:
  title: "Test yourself: AI platform for startups"
  questions:
    - q: "For H100 sustained inference, around what utilization is the crossover point where on-premise GPU becomes cheaper than hyperscaler?"
      options:
        - { text: "~5%", correct: false }
        - { text: "~30% utilization", correct: true }
        - { text: "~80% utilization", correct: false }
      explanation: "Crossover varies by GPU class: H100 ~30%, L40S ~40%, A100 second-hand ~25%, Blackwell depends on availability. For sustained 24/7 inference, owning the GPUs is usually 30-60% cheaper after Year 2."
    - q: "Why is the A100 second-hand market crossover lower (~25%) than H100's (~30%)?"
      options:
        - { text: "A100 is faster than H100", correct: false }
        - { text: "Second-hand acquisition cost is lower than new-hardware H100, so the break-even hits earlier", correct: true }
        - { text: "H100 doesn't support inference", correct: false }
      explanation: "A100's second-hand market means the upfront capital is lower; the on-prem economics break even at lower utilization. The article positions A100 as cost-effective for many inference workloads when sourced second-hand."
    - q: "For most AI startups, which scenario does the article say is rare?"
      options:
        - { text: "Inference", correct: false }
        - { text: "Training at scale (vs inference + occasional fine-tuning, which is the norm)", correct: true }
        - { text: "RAG", correct: false }
      explanation: "Most AI startups: inference + occasional fine-tuning. Training at scale (i.e., training a foundation model from scratch) is rare in startup context. This shapes the platform sizing — inference fleet + fine-tuning capacity, not pre-training compute."
    - q: "What does the article say about open-weight vs proprietary model selection?"
      options:
        - { text: "Always proprietary for production", correct: false }
        - { text: "Open-weight (Llama, Mistral, Qwen, DeepSeek) for sovereignty + cost; proprietary only for specific capability needs. Most production deployments are open-weight in 2026", correct: true }
        - { text: "Mixed equally", correct: false }
      explanation: "Decision 3: open-weight (Llama, Mistral, Qwen, DeepSeek) for sovereignty + cost; proprietary for specific capability needs. Most production deployments are open-weight in 2026. Open-weight wins both economics and sovereignty for sustained workloads."
    - q: "For the GPU compute decision (Decision 1), how does Cozystack support both VM and container-based GPU workloads?"
      options:
        - { text: "Only one is supported", correct: false }
        - { text: "KubeVirt + NVIDIA vGPU for VMs (data-science teams that need full VMs); MIG / passthrough for containers (production inference)", correct: true }
        - { text: "Through bare-metal scheduling only", correct: false }
      explanation: "Cozystack supports both: KubeVirt + NVIDIA vGPU for VMs (data-science teams that need notebook-heavy environments), and MIG / time-slicing / passthrough for containers (production inference). Same platform; different consumption patterns."
---

Companion to **[AI platform build services page](/services/ai-platform-build)**.

## When dedicated GPU pays back

Hyperscaler GPU is competitive for sporadic workloads. For sustained workloads, the math shifts. Crossover point varies by GPU class:

- **H100 sustained:** crossover ~30% utilization
- **L40S sustained:** crossover ~40% utilization
- **A100 second-hand market:** crossover ~25% utilization
- **Blackwell:** depends on availability and pricing

For inference serving 24/7 at sustained traffic, owning the GPUs is usually 30-60% cheaper after Year 2.

## What goes in an AI platform

- **GPU compute** — sized by workload, expandable
- **Model serving stack** — vLLM, Triton, or alternatives
- **Inference orchestration** — request routing, batching, autoscaling
- **Vector store** for RAG (where applicable)
- **Multi-tenant** for customer-facing AI products
- **Observability** for GPU utilization, latency, costs
- **Operations** for 24×7

## Common architectural decisions

### Decision 1: VM-based vs container-based GPU
KubeVirt + NVIDIA vGPU for VMs (data-science teams that need full VMs); MIG / passthrough for containers (production inference). Cozystack supports both.

### Decision 2: Self-hosted vs cloud GPU
Self-hosted for sustained; cloud for sporadic. Hybrid for elastic.

### Decision 3: Open-weight vs proprietary models
Open-weight (Llama, Mistral, Qwen, DeepSeek) for sovereignty + cost; proprietary for specific capability needs. Most production deployments are open-weight in 2026.

### Decision 4: Inference-only vs fine-tuning vs training
Most AI startups: inference + occasional fine-tuning. Training at scale is rare in startup context.

## How to start

**[AI platform build services](/services/ai-platform-build)**.

---

*Aenix is the team behind Cozystack.*

<!-- Word count: ~400. -->
