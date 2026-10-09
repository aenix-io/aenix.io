---
title: "Sovereign AI infrastructure — GenAI and inference on data that can't leave the perimeter"
seo_title: "Sovereign AI: GenAI on infrastructure you control"
primary_keyword: "sovereign ai"
description: "Sovereign AI for regulated organisations: inference, fine-tuning and RAG on GPUs you control, in your jurisdiction, with data that never leaves the perimeter."
type: "page"
related_pages:
  - /solutions/data-sovereignty/
  - /solutions/dora-compliance/
  - /services/platform-readiness-assessment/
  - /services/ai-platform-build/
  - /products/ai-platform/
  - /products/cozystack/
language: "en"
quick_facts_style: "rows"
faq_style: "rows"
direct_answer: |
  **Sovereign AI infrastructure runs GenAI, inference, fine-tuning, and RAG on hardware the customer owns or controls, in the customer's chosen jurisdiction, under the customer's governance — with model weights, prompts, completions, and embeddings never leaving the perimeter. It is built for regulated organizations (financial services, healthcare, public sector) and AI/GPU operators whose data class, regulator, or inference economics make hyperscaler AI services unviable. Ænix designs, builds, and operates these platforms on Cozystack, an Apache 2.0 CNCF Sandbox project accepted into the CNCF Kubernetes AI Conformance program in September 2026, which combines KubeVirt VMs and Kubernetes inference workloads on one API and supports NVIDIA data-centre GPUs through the NVIDIA GPU Operator: whole-GPU passthrough to VMs, NVIDIA vGPU for VMs (requires your NVIDIA vGPU licence), whole GPUs to pods via the device plugin, and MIG partitions or HAMi time-sliced sharing for pods in tenant Kubernetes clusters. Ænix has no model-provider bias and recommends the open-weight model — Llama, Mistral, Qwen, DeepSeek, Phi — that fits the data class and economics.**
quick_facts:
  - label: "What it is"
    value: "AI inference, fine-tuning, and RAG running on customer-controlled hardware, in the customer's jurisdiction, under the customer's governance, with data never leaving the perimeter"
  - label: "Who it's for"
    value: "Regulated financial services, healthcare, public sector, and AI/GPU operators where data class, regulator, or inference economics rule out hyperscaler AI services"
  - label: "Licence"
    value: "Apache 2.0 (no per-CPU / per-core licensing)"
  - label: "Status"
    value: "Cozystack is a CNCF project (Sandbox since 2025-02-28; Incubating application in due diligence)"
  - label: "Platform"
    value: "Cozystack — KubeVirt for VMs and Kubernetes for inference on one API; CNCF Kubernetes AI Conformance (accepted September 2026)"
  - label: "GPUs"
    value: "NVIDIA data-centre GPUs through the NVIDIA GPU Operator: whole-GPU passthrough to VMs, NVIDIA vGPU for VMs (requires your NVIDIA vGPU licence), whole GPUs to pods via the device plugin, and either MIG partitions (on MIG-capable cards) or time-sliced sharing via HAMi for pods. Model-to-hardware fit is established during the assessment."
  - label: "Engagement"
    value: "14- or 28-day fixed-price Platform Readiness Assessment, then an Ænix-delivered build (typically 3-12 months depending on scope); quoted per RFP; air-gapped deployment supported"
faq:
  - q: "Is sovereign AI the same as private AI?"
    a: "No. Private AI is used both for SaaS endpoints with a privacy clause and for true on-prem deployments. Sovereign AI specifically requires the model running on customer hardware, data staying inside the customer perimeter, and the platform operated under customer governance."
  - q: "Which open-weight LLMs does Ænix support?"
    a: "The current production-ready landscape includes Llama, Mistral, Qwen, DeepSeek, Phi, and Gemma, plus specialized code, vision, and embedding models. Specific selection happens during the assessment based on data class, language requirements, and inference economics."
  - q: "Does sovereign AI cover training, or only inference?"
    a: "Both. Inference is the more common entry point; most regulated organizations start there and add fine-tuning of open-weight models later. Full pre-training of frontier models is rare in this segment."
  - q: "Which GPUs does the platform support?"
    a: "NVIDIA data-centre GPUs through the NVIDIA GPU Operator: whole-GPU passthrough to VMs, NVIDIA vGPU for VMs (requires your NVIDIA vGPU licence), whole GPUs to pods via the device plugin, and two ways to share one card between pods in tenant Kubernetes clusters: MIG partitions on MIG-capable cards and time-sliced sharing via HAMi. Other accelerators (AMD, Intel) can be passed through to VMs as PCI devices; operator automation is NVIDIA-only today. There is no published list of validated GPU models; specific model-to-hardware fit is established during the assessment."
  - q: "Can the platform run air-gapped?"
    a: "Yes. Cozystack has a documented air-gapped installation workflow, used where a regulator or security policy forbids outbound connectivity — for example in public-sector and critical-infrastructure environments."
  - q: "Does Ænix have a model-provider bias?"
    a: "No. Ænix has no commercial relationship with any LLM provider. The architecture recommends the open-weight model and serving stack — vLLM, Triton, or alternatives — that fit the customer's data class, regulator, and inference economics."
hreflang_de: /de/loesungen/sovereign-ai/
---

<!-- BLOCK 1: HERO -->

**For regulated workloads, AI is no longer a hyperscaler-only conversation. Sensitive data classes, sectoral rules, and the economics of inference at scale are pushing financial services, healthcare, public sector, and AI-platform operators toward sovereign AI infrastructure — GenAI, inference, and analytics on the customer's own hardware, in the customer's chosen jurisdiction, under the customer's governance.**

Ænix builds and operates these platforms end-to-end: an architecture, a deployment, and an operations model your team can actually run.

> **Pairs with:** **[Ænix AI Platform](/products/ai-platform/)** — multi-tenant GPU scheduling, inference, fine-tuning and RAG on one platform, with vector database and object storage; add [Private Cloud Platform](/products/private-cloud-platform/) for a broader sovereign cloud, or the free [Sovereign AI Decision Guide →](/resources/sovereign-ai-decision-guide/).

<div class="cta-row">
  <a class="cta-primary" href="/contact/">Book a call</a>
  <a class="cta-secondary" href="/blog/2026/05/private-llm-deployment-guide/">Read guide →</a>
</div>

<div class="trust-badges">
CNCF Kubernetes AI Conformance · NVIDIA GPU Operator-based stack · Apache 2.0 platform · Air-gapped installation supported
</div>


<!-- /BLOCK 1 -->

---

<!-- BLOCK 2: WHO THIS IS FOR -->

## Who needs sovereign AI

Sovereign AI is not for every workload. It is the right answer when at least three of the following hold:

- **Data class is sensitive** — regulated personal data, financial records, healthcare records, internal IP that cannot be exposed to model providers.
- **Regulator binds AI processing to jurisdiction** — DORA, NIS2, sectoral rules, sovereign-cloud mandates (EU member states, Kazakhstan, several APAC).
- **Inference at scale is economically painful in hyperscaler** — GPU pricing, egress costs, and unpredictable spend make 24/7 inference workloads better suited to dedicated infrastructure.
- **Model behavior must be reproducible and auditable** — regulator dialog requires "exactly which model produced this output, with which weights, with which input data."
- **Air-gap or restricted-egress is required** — public-sector or critical-infrastructure workloads where outbound connectivity is not permitted.

If you have none of these, sovereign AI is over-engineering.

> **Leading an ML platform team?** The [Head of AI/ML guide](/for/head-of-ai-ml/) covers GPU allocation, model serving and the operations model. If you have three or more, the question is not whether — it's how, by when, and at what cost.

{{< factoid number="14 or 28 days" label="from Platform Readiness Assessment to a written architecture, GPU strategy, and sovereignty controls for your data class" >}}

<!-- /BLOCK 2 -->

---

<!-- BLOCK 3: WHAT SOVEREIGN AI ACTUALLY MEANS -->

<div class="band-fullbleed band-fullbleed--tint">
<div class="band-fullbleed__inner">

## What sovereign AI actually means

<div class="grid-2x2">

**1. The model runs on your hardware**
Inference (and training, where applicable) on GPUs you own or operate, not on a hyperscaler's GPU instances or model API. NVIDIA data-centre GPUs are the mainstream path, automated through the NVIDIA GPU Operator; other accelerators can be passed through to VMs as PCI devices.

**2. The data never leaves the perimeter**
Training data, prompts, completions, embeddings, and any derivative artifacts stay within the customer-controlled environment. No traffic to model-provider endpoints; no observability data to SaaS vendors that process outside the perimeter.

**3. The model weights are in your control**
Open-weight models (Llama, Mistral, Qwen, DeepSeek, Phi, etc.) running locally; or fine-tuned variants whose weights you own. Not a model API with prompt-routing into a third-party model.

**4. The platform is operated by you, under your governance**
Kubernetes-native AI platform with clear ownership of GPU scheduling, autoscaling, model management, and audit trails. Not a black-box appliance with vendor-controlled operations.

</div>

This is not "private AI" as a label for a SaaS endpoint with a privacy clause. It's an architecturally sovereign stack with named components and demonstrable controls.

</div>
</div>

<!-- /BLOCK 3 -->

---

<!-- BLOCK 4: WHERE COMMON APPROACHES FAIL -->

## Where common AI-platform approaches fail the sovereignty test

<div class="gap-cards-2">

**"Private deployment" of a SaaS model API**
Model provider runs the inference; data flows to the provider's endpoint. Privacy clause notwithstanding, the data has left the perimeter. Sovereignty failed.

**Hyperscaler-managed GPU with proprietary services**
GPU is in the right region, but model orchestration, observability, and storage hooks lock the workload into proprietary services. Exit cost grows; concentration risk grows.

**Single-tenant SaaS in a "sovereign" hyperscaler region**
The region is sovereign, but the service plane is operated by the hyperscaler. Encryption keys, control-plane access, and software-update channels remain with a non-sovereign vendor.

**Self-hosted LLM with no platform underneath**
A team runs vLLM or llama.cpp on a couple of bare-metal boxes, calls it private AI. Works for a PoC. Fails on multi-tenancy, GPU autoscaling, audit-readiness, or operational availability for production.

</div>

The honest answer is usually a Kubernetes-native AI platform on customer-controlled hardware, with a defined operations model.

<!-- /BLOCK 4 -->

---

<!-- BLOCK 5: HOW AENIX HELPS -->

## How Ænix helps

<div class="arch-section__fig">
<div class="diagram">
<div class="diagram__node"><b>AI workloads</b><div class="diagram__chips"><span>Inference</span><span>Fine-tuning</span><span>RAG</span></div></div>
<div class="diagram__conn">scheduled on</div>
<div class="diagram__node diagram__node--brand"><b>Cozystack / Ænix</b><div class="diagram__chips"><span>KubeVirt VMs + Kubernetes</span><span>GPU Operator: passthrough, vGPU, HAMi</span><span>Customer hardware and jurisdiction</span></div></div>
<div class="diagram__conn">delivers</div>
<div class="diagram__node"><b>Sovereign AI</b><div class="diagram__chips"><span>Data never leaves the perimeter</span><span>No model-provider endpoints</span></div></div>
</div>
</div>

The sovereign-AI engagement runs as part of our **[Platform Readiness Assessment](/services/platform-readiness-assessment/)** with sovereignty + AI-platform workstreams emphasized. Where the engagement leads to implementation, Ænix delivers the platform end-to-end.

The assessment phase produces:

- **Architecture options** — concrete platform designs for inference / training / fine-tuning at your scale, with hardware sizing.
- **Sovereignty controls** — data-residency, key-custody, and audit-trail design specific to AI workloads.
- **GPU strategy** — GPU sizing, allocation mode per workload (dedicated, vGPU or fractional), model-to-hardware fit, scaling assumptions.
- **Operations model** — who runs the platform, what self-service surface product / data-science teams get, what the on-call model looks like.
- **Phase 2 implementation roadmap** — Ænix-delivered build, with timeline, effort estimates, and success criteria.

The implementation phase delivers:

- **Cozystack-based AI platform** with KubeVirt for VMs and Kubernetes for inference workloads. GPU allocation modes: whole-GPU passthrough or NVIDIA vGPU for VMs (requires your NVIDIA vGPU licence), whole GPUs, MIG partitions or HAMi time-sliced sharing for pods.
- **Model serving** — vLLM, Triton, or alternatives matched to model architecture.
- **GPU usage measured per tenant** — charging or chargeback happens in your billing system.
- **Self-service for data-science teams** — provisioning paths, observability, audit trails.
- **Air-gapped deployment** where the regulator requires it.

{{< factoid number="3-12 months" label="typical build to a production sovereign AI platform on hardware you own, depending on scope" >}}

<!-- /BLOCK 5 -->

---

<!-- BLOCK 6: WHY AENIX SPECIFICALLY -->

## Why Ænix specifically

- **AI infrastructure is what we run.** Four GPU deployments are written up as case studies (see below), covering inference, multi-cloud GPU capacity and internal AI platforms. Cozystack is accepted into the CNCF Kubernetes AI Conformance program (September 2026).
- **No model-provider bias.** We do not have a commercial relationship with a specific LLM provider. The architecture recommends the open-weight model that fits your data class, regulator, and economics — Llama, Mistral, Qwen, DeepSeek, Phi, or fine-tuned variants — and the serving stack to match.
- **Open-source platform foundation.** [Cozystack](/products/cozystack/), which Ænix created and co-maintains, is a CNCF Sandbox project running on the customer's chosen hardware in the chosen jurisdiction. Cluster-level access stays with the customer; we operate under your governance, not in spite of it.

<!-- /BLOCK 6 -->

---

<!-- BLOCK 7: TIMELINE -->

## What the engagement looks like

Day 0 is a free 30-minute discovery call that fixes the scope. Days 1-13 (or 1-27) run four parallel workstreams with sovereignty and AI-platform emphasized. Day 14 (or 28) is a 60-90 minute executive readout against the written report — architecture options, sovereignty controls, GPU strategy, operations model and Phase 2 roadmap. Phase 2 is the Ænix-delivered build, typically 3-12 months to a production platform and handover, depending on scope. Full day-by-day methodology: **[Platform Readiness Assessment](/services/platform-readiness-assessment/)**.

<!-- /BLOCK 7 -->

---

<!-- BLOCK 8: PROOF -->

## GPU and AI case studies

Four GPU deployments are written up in anonymised form:

- **[Bare-metal GPU inference](/case-studies/bare-metal-gpu-inference/)** — an 8×H100 inference platform on owned hardware.
- **[Multi-cloud GPU for an academic platform](/case-studies/multicloud-academic-gpu/)** — owned GPUs plus burst capacity.
- **[Universal AI installer](/case-studies/ai-universal-installer/)** — a repeatable AI stack for a telecom operator and integrator.
- **[Internal data and AI platform](/case-studies/internal-data-and-ai-platform/)** — shared GPU pools with per-team chargeback.

The quotes below come from hosting providers running platforms built with Ænix, not from the GPU deployments above.

{{< quote-carousel >}}

<!-- /BLOCK 8 -->

---

<!-- BLOCK 9: PRICING -->

## Pricing and engagement scope

The sovereign-AI engagement runs in two phases.

<div class="pricing-cards-2">

### Assessment (14- or 28-day)
Architecture options, GPU strategy, sovereignty controls, operations model, Phase 2 roadmap. Fixed-price.
**On request**

### Phase 2 implementation
Ænix-delivered build of the sovereign AI platform. Fixed-scope or time-and-materials, depending on workload count and complexity. Typically 3-12 months elapsed.
**Quoted per RFP**

</div>

If Phase 2 follows assessment, the assessment cost is credited against the implementation engagement subject to scope.

Ænix AI Platform is quoted per RFP. We accept RFI / RFP through standard procurement channels; EU contracts are with AENIX s.r.o. (Czech Republic).

<!-- /BLOCK 9 -->

---

<!-- BLOCK 10: FAQ -->


<!-- /BLOCK 10 -->

---

<!-- BLOCK 11: BOTTOM CTA -->

<a id="discovery"></a>
## Start with a 30-minute discovery call

We confirm fit, narrow the scope to your data class and regulator, and name the 14-day or 28-day variant.

<div class="cta-row">
  <a class="cta-primary" href="/contact/">Book a call</a>
</div>

Or read more:
- **[Private LLM deployment guide](/blog/2026/05/private-llm-deployment-guide/)** — practical architecture
- **[Data sovereignty](/solutions/data-sovereignty/)** — adjacent regulatory trigger
- **[DORA compliance](/solutions/dora-compliance/)** — financial-services regulatory trigger
- **[Platform Readiness Assessment](/services/platform-readiness-assessment/)** — assessment methodology
- **[Cozystack](/products/cozystack/)** — the platform we run AI workloads on

<!-- /BLOCK 11 -->

---

<!-- BLOCK 12: FOOTER TRUST STRIP -->

*Ænix created Cozystack — a CNCF Sandbox project, CNCF Certified Kubernetes distribution, CNCF Kubernetes AI Conformance, OpenSSF Best Practices — and co-maintains it. We build sovereign AI platforms for GPU operators and regulated organisations.*

<!-- /BLOCK 12 -->

