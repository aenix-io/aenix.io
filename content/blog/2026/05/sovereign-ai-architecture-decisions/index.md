---
title: "Seven decisions when designing sovereign AI architecture"
description: "Companion to Sovereign AI Decision Guide."
date: "2026-05-01"
author: "Aenix Team"
type: "article"
topics: ["DORA", "NIS2", "Sovereignty", "AI/ML", "Multi-tenancy", "Financial Services"]
language: "en"
companion_landing: "/solutions/sovereign-ai/"
---

Companion to **[Sovereign AI Decision Guide](/resources/sovereign-ai-decision-guide)**.

## The seven decisions

### 1. Trigger profile
What's pushing toward sovereign? (Regulated data class / inference economics / auditability / air-gap requirement)

### 2. Regulatory scope
Which regulators bind you? (DORA, NIS2, sectoral, sovereign-cloud mandate, GDPR cross-border)

### 3. Model selection
Open-weight vs proprietary. Common 2026 open-weight: Llama, Mistral, Qwen, DeepSeek, Phi, Gemma. Choice depends on:
- Language requirement (multilingual vs English)
- Workload type (chat / RAG / code / vision / embedding)
- License (commercial use, attribution, redistribution)
- Capability target

### 4. Hardware sizing
- NVIDIA H100/H200 — workhorse for fine-tuning and high-throughput inference
- NVIDIA Blackwell — newer, highest memory bandwidth
- NVIDIA L40S — 48GB, multi-tenant inference fleet
- NVIDIA A100 — cost-effective, second-hand market
- AMD MI300/MI325 — alternative when ecosystem fits

### 5. Multi-tenancy model
- Single-tenant: lab / single-team / PoC
- Multi-tenant via Tenant CRD: enterprise platform / customer-facing
- Cluster-per-tenant: highest isolation, operationally expensive

### 6. Sovereignty controls
- Encryption keys customer-controlled (HSM)
- Supplier transparency to second hop
- Audit-trail completeness in regulator-consumable formats
- Air-gap option for most sensitive workloads

### 7. Operational model
- Customer-operated (you run it)
- Vendor-operated (Aenix or similar runs it)
- Hybrid (you operate; vendor 2nd-line)

## How decisions interlock

The seven aren't independent. Trigger profile shapes regulatory scope; regulatory scope shapes sovereignty controls; sovereignty controls shape operational model; operational model affects model selection feasibility.

## Common combinations

**Pattern 1: Regulated finance + sustained inference + multi-tenant**
DORA + Article 28 controls + multi-tenant Tenant CRD + customer-controlled keys + Aenix-managed operations + open-weight (Llama 70B class) on H100/L40S fleet.

**Pattern 2: Public sector + air-gapped + classified data**
Sovereign-cloud mandate + air-gap + customer-operated + open-weight (Llama / Phi) on customer hardware.

**Pattern 3: AI startup + sustained 24/7 inference + customer-facing**
No specific regulator + cost economics trigger + multi-tenant + customer-operated + open-weight + GPU mix matched to workload.

## How to use the decision guide

Walk through the flowchart. Note your answers. Architecture options narrow naturally.

For specific engagement see **[Sovereign AI services](/solutions/sovereign-ai/)**.

---

*Aenix is the team behind Cozystack.*

<!-- Word count: ~500. -->
