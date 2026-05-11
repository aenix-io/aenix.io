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
        - { text: "Around 30% utilization", correct: true }
        - { text: "Around 5% utilization", correct: false }
        - { text: "Around 80% utilization", correct: false }
      explanation: "Crossover varies by GPU class: H100 ~30%, L40S ~40%, A100 second-hand ~25%, Blackwell depends on availability. For sustained 24/7 inference, owning the GPUs is usually 30-60% cheaper after Year 2."
    - q: "Why is the A100 second-hand market crossover lower (~25%) than H100's (~30%)?"
      options:
        - { text: "A100 is faster than H100 on transformer inference workloads", correct: false }
        - { text: "Lower second-hand acquisition cost shifts break-even earlier", correct: true }
        - { text: "H100 does not support inference workloads in production use", correct: false }
      explanation: "A100's second-hand market means the upfront capital is lower; the on-prem economics break even at lower utilization. The article positions A100 as cost-effective for many inference workloads when sourced second-hand."
    - q: "For most AI startups, which scenario does the article say is rare?"
      options:
        - { text: "Inference traffic against a hosted production endpoint", correct: false }
        - { text: "Retrieval-augmented generation on internal document corpora", correct: false }
        - { text: "Training foundation models at scale from scratch", correct: true }
      explanation: "Most AI startups: inference + occasional fine-tuning. Training at scale (i.e., training a foundation model from scratch) is rare in startup context. This shapes the platform sizing — inference fleet + fine-tuning capacity, not pre-training compute."
    - q: "What does the article say about open-weight vs proprietary model selection?"
      options:
        - { text: "Always proprietary endpoints for production-grade reliability", correct: false }
        - { text: "Open-weight by default for sovereignty and cost; proprietary as exception", correct: true }
        - { text: "Mixed equally between open-weight and proprietary models", correct: false }
      explanation: "Decision 3: open-weight (Llama, Mistral, Qwen, DeepSeek) for sovereignty + cost; proprietary for specific capability needs. Most production deployments are open-weight in 2026. Open-weight wins both economics and sovereignty for sustained workloads."
    - q: "For the GPU compute decision (Decision 1), how does Cozystack support both VM and container-based GPU workloads?"
      options:
        - { text: "Through bare-metal scheduling only, with no VM layer", correct: false }
        - { text: "Only one mode is supported at a time per cluster", correct: false }
        - { text: "KubeVirt+vGPU for VMs and MIG / passthrough for containers", correct: true }
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
