---
title: "Seven decisions when designing sovereign AI architecture"
description: "Seven architecture decisions behind a sovereign AI stack, how they interlock, and the combinations that recur in real deployments."
date: "2026-05-27"
lastmod: "2026-10-09"
cover_image: "/img/blog/covers/sovereign-ai-architecture-decisions.jpg"
author: "Timur Tukaev"
type: "article"
topics: ["DORA", "NIS2", "Sovereignty", "AI and ML", "Multi-tenancy", "Financial Services"]
language: "en"
hreflang_de: "/de/blog/2026/05/sovereign-ai-architektur-entscheidungen/"
companion_landing: "/solutions/sovereign-ai/"
faq:
  - q: "What are the seven decisions behind a sovereign AI architecture?"
    a: "Trigger profile, regulatory scope, model selection, hardware sizing and GPU allocation, multi-tenancy model, sovereignty controls and operational model. They interlock: the trigger shapes the regulatory scope, the scope shapes the controls, the controls shape who can operate the platform, and the operating model limits which models are realistic."
  - q: "How can one GPU be shared between workloads on the platform?"
    a: "In tenant Kubernetes clusters, the NVIDIA GPU Operator exposes MIG partitions of MIG-capable cards as schedulable resources, and HAMi provides time-sliced sharing with oversubscription. Both are available now. Virtual machines take whole GPUs by PCI passthrough, or NVIDIA vGPU with your own NVIDIA vGPU licence."
  - q: "What is the difference between MIG and HAMi sharing?"
    a: "MIG partitions are separated in hardware, so one workload cannot see another's memory or compute share. HAMi shares are enforced in software with per-workload memory and compute limits and allow oversubscription. Choose MIG where tenants must not affect each other, HAMi where utilisation matters more than strict isolation."
  - q: "How is data encrypted on a sovereign AI platform built on Cozystack?"
    a: "Volume encryption is opt-in per storage class, with a passphrase you hold, and key handling is designed with you during the build. Audit logs have configurable retention (30 days by default) and can be shipped to a log store you control."
  - q: "Is a sovereign AI platform always the right answer?"
    a: "No. If no regulator binds your AI processing, your data class allows a model API and your inference load is spiky rather than sustained, a hosted API is usually simpler and cheaper. Sovereign infrastructure pays off when several of those conditions point the other way."
quiz:
  title: "Test yourself: seven sovereign-AI decisions"
  questions:
    - q: "What does the article say about how the seven decisions relate to each other?"
      options:
        - { text: "They are each fully independent", correct: false }
        - { text: "They frequently contradict each other", correct: false }
        - { text: "They interlock — earlier ones shape later", correct: true }
      explanation: "The trigger profile shapes regulatory scope, the scope shapes sovereignty controls, the controls shape the operational model, and the operational model limits which models are realistic. That is why the article takes them in order."
    - q: "Which open-weight model families does the article list as common choices?"
      options:
        - { text: "Only GPT-4 derivative variants", correct: false }
        - { text: "Llama, Mistral, Qwen, DeepSeek, Phi, Gemma", correct: true }
        - { text: "Only the Llama 3 family of models", correct: false }
      explanation: "The model-selection section names Llama, Mistral, Qwen, DeepSeek, Phi and Gemma, and says the choice depends on language, workload type, licence terms and capability target."
    - q: "How do virtual machines receive GPUs on the platform?"
      options:
        - { text: "MIG slices assigned directly to each VM", correct: false }
        - { text: "Whole-GPU passthrough, or NVIDIA vGPU with your licence", correct: true }
        - { text: "HAMi time-slicing inside the hypervisor", correct: false }
        - { text: "Only through a hosted GPU cloud API", correct: false }
      explanation: "The hardware section: VMs take whole GPUs by PCI passthrough, or NVIDIA vGPU with the customer's own NVIDIA vGPU licence. MIG partitions and HAMi time-slicing apply to pods in tenant Kubernetes clusters, not to VMs."
    - q: "Which GPU sharing mode separates workloads in hardware?"
      options:
        - { text: "HAMi time-sliced sharing", correct: false }
        - { text: "MIG partitions on MIG-capable cards", correct: true }
        - { text: "Oversubscription of one card", correct: false }
      explanation: "MIG partitions are separated in hardware; HAMi shares are enforced in software and allow oversubscription. The article recommends choosing by the isolation a workload needs."
    - q: "How does the article describe volume encryption on the platform?"
      options:
        - { text: "Always on, with keys held by the vendor", correct: false }
        - { text: "Vendor-held keys in a hardware module", correct: false }
        - { text: "Opt-in per storage class, with a passphrase you hold", correct: true }
      explanation: "The sovereignty-controls section: volume encryption is opt-in per storage class, with a passphrase the customer holds, and key handling is designed with the customer during the build."
---

Most sovereign AI projects we see start in the wrong place. Someone picks a model, someone else orders GPUs, and only later does the compliance team ask where the prompts are logged and who can read them. By then the hardware is racked and the architecture has already decided half the answers by accident.

The better order is to treat a sovereign AI platform as a chain of seven decisions, each of which narrows the next. This article walks through them in that order, shows where they pull against each other, and describes the combinations that keep coming up in practice. It is the long-form companion to our [sovereign AI](/solutions/sovereign-ai/) page and to the free [Sovereign AI Decision Guide](/resources/sovereign-ai-decision-guide/), which goes through the same seven steps with sizing tables.

## 1. Trigger profile — what is actually pushing you

Before anything technical, write down why a hosted model API is not good enough. The answer is almost always one of four things: a data class that cannot leave your perimeter, inference economics that stopped working at scale, a need to prove exactly which model produced an output, or a policy that forbids outbound connectivity altogether.

This matters because each trigger produces a different platform. A team pushed by economics wants dense GPU utilisation and cheap capacity growth. A team pushed by data class wants hard isolation and controls it can show to an auditor. A team that needs an air gap has to plan every model download, update and support interaction around a closed perimeter. If you have more than one trigger, rank them; the top one wins every later tie.

## 2. Regulatory scope — who will read your evidence

Next, name the regulators. For a European bank that usually means DORA, with Article 28 on ICT third-party risk shaping how you depend on any supplier, including us. Operators of essential services look at NIS2. Anyone processing personal data looks at GDPR and its rules on cross-border transfers, and some jurisdictions add sovereign-cloud mandates on top.

No platform discharges these obligations for you. What the platform can do is be built to support the obligations: run in your jurisdiction, on hardware you control, with an exit path you can rehearse rather than a clause promising cooperation. Our [DORA compliance](/solutions/dora-compliance/) and [data sovereignty](/solutions/data-sovereignty/) pages describe what that support looks like and where the platform's responsibility ends.

## 3. Model selection — open weights, and which ones

A sovereign platform almost always means open-weight models, because a model you can only reach through someone else's API is not under your control. The families most teams evaluate today are Llama, Mistral, Qwen, DeepSeek, Phi and Gemma, plus specialised code, vision and embedding models.

The choice between them is less about leaderboards than about four practical questions. Does the model handle the languages your users write in? Does it fit the workload — chat, retrieval-augmented generation, code, vision or embeddings? Do its licence terms allow your commercial use and any redistribution of fine-tuned weights? And what capability do you actually need, given that a smaller model you can serve cheaply often beats a larger one you cannot afford to run around the clock? Ænix has no commercial relationship with any model provider, so the recommendation follows your data and economics, not a partnership.

## 4. Hardware sizing and GPU allocation

Model choice drives memory, and memory drives cards. A model that fits on one card is a very different platform from one that needs several cards or several nodes, and multi-node training adds network fabric design that has to be scoped for your hardware. We size this during the assessment rather than from a catalogue, and there is no list of "validated" GPU models.

What the platform does today is clear. NVIDIA data-centre GPUs are supported through the NVIDIA GPU Operator. Virtual machines receive whole GPUs by PCI passthrough, or NVIDIA vGPU if you hold an NVIDIA vGPU licence. Inside tenant Kubernetes clusters there are two ways to share one card between pods: the GPU Operator exposes MIG partitions of MIG-capable cards as schedulable resources, and HAMi provides time-sliced sharing with per-workload memory and compute limits and oversubscription. A tenant cluster's worker VMs get their cards by passthrough or vGPU; the partitioning and time-slicing then happen inside that cluster.

Choose between MIG and HAMi by isolation, not habit. MIG partitions are separated in hardware, which suits tenants that must not affect each other. HAMi shares are enforced in software and pack more workloads onto a card, which suits teams that care more about utilisation. Other accelerators can be passed through to VMs as PCI devices, without operator automation. Cozystack, the CNCF project the platform runs on, was accepted into the CNCF Kubernetes AI Conformance program in September 2026; NVIDIA partner validation of the GPU Operator stack was submitted in October 2026 and is still pending.

## 5. Multi-tenancy model

Who shares the hardware? A lab or a single product team can run one tenant and keep things simple. An enterprise platform serving many teams, or a provider selling capacity, needs tenants with their own quotas, access rules, network policy and monitoring. Cozystack models this with tenants that can nest, and each tenant can run its own Kubernetes cluster with its own control plane on top of shared hardware.

At the far end, a tenant gets dedicated nodes. In our [bare-metal GPU inference](/case-studies/bare-metal-gpu-inference/) case study, all eight H100 cards of one server were passed through to a single isolated tenant VM, with the NVIDIA GPU Operator running inside the tenant's own Kubernetes. That is the most isolated option and also the least flexible: idle capacity stays idle. The [internal data and AI platform](/case-studies/internal-data-and-ai-platform/) takes the opposite trade, with shared GPU pools and per-tenant quotas, so cards move to whichever team needs them.

## 6. Sovereignty controls

Residency is the easy part. The harder questions are who holds the keys, which suppliers can touch the platform, and what evidence you can hand to an auditor.

On the platform, volume encryption is opt-in per storage class, with a passphrase you hold, and key handling is designed with you during the build. The Kubernetes API server writes an audit log under a policy you supply; retention is configurable, 30 days by default, which is shorter than most supervisors expect, so plan to ship logs to a long-term store you control. Supplier transparency means tracing every component and every party with access to the second hop, and Ænix engineers work on your environment only with your approval. For the most sensitive workloads, Cozystack has a documented air-gapped installation workflow, with models and a self-contained registry mirrored into the perimeter.

## 7. Operational model

Finally, decide who runs it. Some organisations operate the platform themselves and buy a support subscription; the published tiers on our [pricing](/pricing/) page cover that, and air-gapped install support starts at the Plus tier. Others prefer Ænix to run the platform under a managed retainer. Many settle on a hybrid: your team operates day to day, Ænix acts as second line.

This choice feeds back into model selection. A small team that will operate the platform alone should prefer fewer model families and one serving stack, because every additional runtime is something it has to patch and monitor at night.

## How the decisions interlock

The seven are not a checklist you can fill in any order. The trigger profile decides which regulators matter; the regulators decide which sovereignty controls you need; the controls decide who is allowed to operate the platform; and the operating model limits which models and how many of them you can realistically run. When a decision late in the chain feels impossible, the cause is usually an earlier one that was left vague.

## Combinations that recur

Three combinations come up often enough to describe.

**Regulated finance, sustained inference, many internal teams.** DORA sets the scope, so the exit path and supplier map matter as much as the GPUs. The platform is multi-tenant, with tenancy as the control boundary — the same model we used in our [private cloud inside a bank](/case-studies/private-cloud-in-a-bank/), where the bank's own identity provider and storage stayed authoritative. Opt-in volume encryption with a passphrase the bank holds, audit logs shipped to the bank's own store, open-weight models in the 70B class, and either a hybrid or an Ænix-managed operating model.

**Public sector with an air gap.** A sovereign-cloud mandate and a closed perimeter push towards customer-operated platforms on customer hardware, smaller open-weight models such as Llama or Phi that are easier to mirror and update, and a deliberate process for bringing in new model versions.

**An AI product company with steady 24/7 inference.** No specific regulator; the trigger is cost. The bare-metal case study above is this pattern: inference moved off a rented GPU cloud onto an owned 8×H100 server, reached production in about two months and delivered 2–3x better GPU efficiency. The economics behind that kind of move are covered in [sustained GPU economics](/blog/2026/05/ai-ml-edition-sustained-gpu-economics/).

## When a sovereign AI platform is the wrong answer

If no regulator binds your AI processing, your data class allows a model API, and your load is spiky rather than sustained, a hosted API is simpler and probably cheaper. The same is true if you have no team willing to own GPU infrastructure and no budget for someone else to. A sovereign platform earns its keep when several triggers line up; with none of them, it is over-engineering.

## Where to start

Answer the seven questions in order and write the answers down; the architecture options narrow quickly. The [Platform Readiness Assessment](/services/platform-readiness-assessment/) does this with you in 14 or 28 days at a fixed price and ends with a written architecture, GPU strategy and sovereignty controls. Delivery then runs as an [AI platform build](/services/ai-platform-build/) on the [Ænix AI Platform](/products/ai-platform/), typically 3–12 months depending on scope and quoted per RFP. For the serving side in more detail, read the [private LLM deployment guide](/blog/2026/05/private-llm-deployment-guide/); for the open-source project itself, see the [Cozystack documentation](https://cozystack.io/docs/).
