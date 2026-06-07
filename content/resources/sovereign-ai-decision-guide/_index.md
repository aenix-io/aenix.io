---
title: "Sovereign AI Architecture Decision Guide — visual flowchart + Q&A (free PDF)"
description: "A 12-page decision guide for organizations evaluating sovereign AI infrastructure. Visual flowchart leads through 7 key decisions: trigger profile,..."
type: "page"
related_pages: ["/solutions/sovereign-ai", "/services/ai-platform-build", "/products/aenix-platform/ai-ml-edition/"]
language: "en"
direct_answer: |
  **The Sovereign AI Architecture Decision Guide is a free 12-page PDF for organizations evaluating sovereign AI infrastructure - AI workloads run on infrastructure they control rather than on a hyperscaler API. It is aimed at AI infrastructure leads, CTOs, and platform engineering teams. A visual flowchart walks through seven decisions: trigger profile, regulatory scope (DORA, NIS2, sovereign-cloud mandates), open-weight model selection, GPU hardware sizing, multi-tenancy model, sovereignty controls, and operational model, then maps the answers to one of four architecture patterns. Aenix uses this framework when scoping sovereign AI engagements, and the output maps directly to the Ænix Platform AI/ML Edition, which is built on Cozystack, a CNCF project, and offers multi-tenant GPU scheduling with inference, fine-tuning, and RAG blueprints.**
quick_facts:
  - label: "What it is"
    value: "A free 12-page decision guide and visual flowchart for designing sovereign AI infrastructure, the same framework Aenix uses to scope sovereign AI engagements"
  - label: "Who it is for"
    value: "AI infrastructure leads, CTOs, architects, and platform engineering teams evaluating sovereign AI versus hyperscaler AI"
  - label: "What it covers"
    value: "Seven decisions plus four architecture patterns: single-tenant inference, multi-tenant inference fleet, inference + fine-tuning + RAG, and air-gapped sovereign deployment"
  - label: "Maps to"
    value: "Ænix Platform AI/ML Edition - multi-tenant GPU scheduling with inference, fine-tuning, and RAG blueprints"
  - label: "License"
    value: "Apache 2.0 (no per-CPU / per-core licensing)"
  - label: "Status"
    value: "Cozystack is a CNCF project (Sandbox since 2025-02-28; Incubating expected late summer 2026)"
faq:
  - q: "What is sovereign AI infrastructure?"
    a: "Sovereign AI infrastructure runs AI workloads (inference, fine-tuning, RAG) on infrastructure an organization controls - on-premises or in a chosen jurisdiction - rather than on a hyperscaler AI API. It keeps data, models, and encryption keys under the operator's control to meet regulatory, residency, and auditability requirements."
  - q: "Who should download the Sovereign AI Decision Guide?"
    a: "AI infrastructure leads and CTOs at AI-heavy organizations, architects comparing sovereign AI against hyperscaler AI, platform engineering leads scoping AI infrastructure, and AI startup CTOs planning dedicated infrastructure. The guide gives them a structured framework for the key architecture decisions before committing to a build."
  - q: "Which AI models and GPUs does the guide cover?"
    a: "It covers open-weight model selection across families such as Llama, Mistral, Qwen, DeepSeek, Phi, and Gemma, and weighs open-weight versus proprietary. Hardware sizing covers GPUs including A100, H100, H200, L40S, and Blackwell, with practical sizing tables for common workload profiles."
  - q: "How does the guide relate to the Ænix Platform?"
    a: "The guide outputs an architecture pattern that maps directly to the deployment scope of Ænix Platform AI/ML Edition - turnkey AI infrastructure with multi-tenant GPU scheduling and blueprints for inference, fine-tuning, and RAG, built on Cozystack with sovereignty controls."
  - q: "How does Cozystack enable multi-tenant sovereign AI?"
    a: "Cozystack runs VMs and containers on one Kubernetes API via KubeVirt, uses Cilium (eBPF) for networking and LINSTOR/DRBD for storage, and isolates teams through a Tenant CRD. This supports namespace-per-team, cluster-per-tenant, and multi-tenant GPU scheduling under Apache 2.0 with no per-core licensing."
  - q: "How much does the decision guide cost?"
    a: "The decision guide is a free PDF download. The productized infrastructure it maps to, Ænix Platform, starts at Basic $1,250/mo for up to 10 nodes, with Standard $3,000, Plus $5,500, and Enterprise on custom pricing."
---

**A 12-page decision guide for organizations evaluating sovereign AI infrastructure. Visual flowchart leads through 7 key decisions: trigger profile, regulatory scope, model selection, hardware sizing, multi-tenancy model, sovereignty controls, operational model. Used by Aenix during sovereign AI engagement scoping.**

> **Pairs with:** **[Ænix Platform AI/ML Edition](/products/aenix-platform/ai-ml-edition/)** — turnkey AI infrastructure with multi-tenant GPU scheduling, ready blueprints for inference + fine-tuning + RAG, sovereignty controls. The decision guide outputs an architecture pattern that maps directly to AI/ML Edition deployment scope.

<div class="lead-magnet-form">
{{< pipedrive-form type="lead-magnet" >}}
[Download the Sovereign AI Decision Guide (PDF)]
</div>

---

## What's in the guide

### Decision tree
Visual flowchart that walks you through:

1. **Trigger profile** — regulated data, inference economics, auditability, air-gap
2. **Regulatory scope** — DORA, NIS2, sectoral, sovereign-cloud mandate
3. **Model selection** — Llama, Mistral, Qwen, DeepSeek, Phi, Gemma; open-weight vs proprietary
4. **Hardware sizing** — A100, H100, H200, L40S, Blackwell; CPU/memory/network
5. **Multi-tenancy model** — Tenant CRD, namespace-per-team, cluster-per-tenant
6. **Sovereignty controls** — encryption keys, supplier transparency, audit-readiness
7. **Operational model** — customer-operated, vendor-operated, hybrid

### Q&A pages
For each decision, expanded Q&A with trade-offs.

### Architecture patterns
Four common patterns with annotated diagrams:
- Single-tenant inference cluster
- Multi-tenant inference fleet
- Inference + fine-tuning + RAG
- Air-gapped sovereign deployment

### Sizing reference
Practical sizing tables for common workload profiles.

---

## Who uses this

- AI infrastructure leads / CTOs at AI-heavy organizations
- Architects evaluating sovereign AI vs hyperscaler AI
- Platform engineering leads scoping AI infrastructure
- AI startup CTOs scoping dedicated infrastructure

---

## After downloading

The guide gives you the architectural framework to make decisions. For specific engagement see **[Sovereign AI services](/solutions/sovereign-ai/)** or **[AI platform build](/services/ai-platform-build/)**.

---

## Related resources

- **[Sovereign AI services](/solutions/sovereign-ai/)** — engagement details
- **[AI platform build](/services/ai-platform-build/)** — broader scope
- **[Data sovereignty](/solutions/data-sovereignty/)** — regulator-side trigger

---

*Aenix is the team behind Cozystack (CNCF Project), and we offer Ænix Platform — our commercial productized offering based on Cozystack.*

<!-- Word count: ~450. -->
