---
title: "Cloud platform for universities — research computing, AI/ML labs, and cloud-native teaching"
description: "Universities and research institutions in 2026 need cloud-native infrastructure for three overlapping missions: serious research computing (especially..."
related_pages:
  - /solutions/sovereign-ai
  - /solutions/data-sovereignty
  - /services/platform-readiness-assessment
  - /products/aenix-platform/enterprise-edition/
  - /products/aenix-platform/ai-ml-edition/
  - /products/cozystack
language: "en"
direct_answer: |
  **Cozystack is an open-source cloud platform that universities and research institutions use to serve three overlapping missions on one foundation: research computing (including GPU clusters for AI/ML), reproducible research environments for publication, and curriculum delivery for cloud-native courses. It is multi-tenant via a Tenant CRD, so departments, labs, and student cohorts get isolated quotas, RBAC, and audit trails; it runs VMs and containers side by side on one Kubernetes API through KubeVirt; and it supports air-gapped deployment where research-data sovereignty matters. Aenix, the team behind Cozystack, builds and supports these platforms for universities, research institutes, and R&D organizations across the EU, DACH, and Central Asia, with academic-friendly engagement structures aligned to grant cycles.**
quick_facts:
  - label: "What it is"
    value: "An open-source, multi-tenant Cozystack cloud platform for university research computing, reproducible research, and cloud-native teaching, built and supported by Aenix."
  - label: "License"
    value: "Apache 2.0 (no per-CPU / per-core licensing)"
  - label: "Status"
    value: "Cozystack is a CNCF project (Sandbox since 2025-02-28; Incubating expected late summer 2026)"
  - label: "Who it is for"
    value: "Universities, research institutes, and R&D organizations across the EU, DACH, and Central Asia."
  - label: "Key capability"
    value: "GPU-as-a-service (vGPU, MIG, time-slicing; validated A100/H100/H200/L40S/Blackwell), Tenant CRD per-lab and per-cohort isolation, KubeVirt VMs plus containers, and air-gapped support."
  - label: "Standards and federation"
    value: "Supports reproducible-research mandates (Plan S, FAIR, Horizon Europe) and integrates with research-infrastructure federations such as EOSC, EuroHPC, and GÉANT via standard Kubernetes APIs."
  - label: "Engagement"
    value: "Academic discounts, phased engagement aligned to grant cycles, and explicit capacity transfer to in-house academic IT."
faq:
  - q: "Can Cozystack provide GPU access for AI/ML research labs?"
    a: "Yes. Cozystack offers GPU-as-a-service with NVIDIA vGPU, MIG, and time-slicing for shared utilization, validated on A100, H100, H200, L40S, and Blackwell. Labs self-provision GPU environments under per-lab quotas via the Tenant CRD, without ticket queues."
  - q: "How does Cozystack isolate departments, labs, and student cohorts?"
    a: "Through the Tenant CRD multi-tenancy model. Each department, lab, or student cohort gets its own tenant with quotas, RBAC, and audit trails. Cohort sandboxes support per-student quotas and automatic cleanup, so teaching and research workloads stay isolated on shared hardware."
  - q: "Does Cozystack support sensitive or classified research data?"
    a: "Yes. Cozystack supports air-gapped deployment for medical, classified, or industrial-partner research under NDA constraints, keeping data within institutional control. This suits sovereignty requirements where research data cannot leave the institution."
  - q: "Can it run both legacy VM workloads and modern containers?"
    a: "Yes. Cozystack runs VMs and containers side by side on a single Kubernetes API using KubeVirt. This accommodates legacy research workflows alongside modern containerized pipelines without requiring a separate virtualization stack."
  - q: "Is Cozystack suitable for teaching cloud-native courses?"
    a: "Yes. Computer-science and engineering departments use it to teach Kubernetes, KubeVirt, GitOps, and observability. Because it is open source (Apache 2.0) and a CNCF project, students can run it on personal hardware and gain CNCF-ecosystem familiarity that matches production reality."
  - q: "How does Aenix structure university engagements?"
    a: "Aenix offers academic discounts on commercial support tiers, phased engagement aligned to research-grant cycles, and explicit capacity transfer so academic IT teams operate the platform after build. Engagements can run through EU TED and member-state public-procurement portals and serve multi-institution consortia."
---

**Universities and research institutions in 2026 need cloud-native infrastructure for three overlapping missions: serious research computing (especially AI/ML), reproducible research environments for publication, and curriculum delivery for cloud-native courses. Cozystack provides a single open-source foundation that serves all three — multi-tenant for departments, labs, and student cohorts; KubeVirt for legacy and modern workloads; GPU-as-a-service for AI research; air-gapped support where research data sovereignty matters.**

Aenix builds Cozystack-based platforms for universities, research institutes, and R&D organizations across the EU, DACH, and Central Asia.

> **Pairs with:** **[Ænix Platform Enterprise Edition](/products/aenix-platform/enterprise-edition/)** for sovereign student-data + multi-tenant research-group isolation; **[AI/ML Edition](/products/aenix-platform/ai-ml-edition/)** for AI/ML research labs with GPU pools.

<div class="cta-row">
  <a class="cta-primary" href="/contact/">Book a 30-minute discovery call</a>
  <a class="cta-secondary" href="/blog/2026/05/cloud-native-research-and-teaching-infrastructure/">Cloud-native research infrastructure →</a>
</div>

---

## Three university missions Cozystack serves

### 1. Research computing infrastructure

Modern research increasingly demands GPU clusters, large-scale data processing, and HPC-adjacent workloads. AI/ML research, computational biology, climate modelling, materials science — all need infrastructure that's between traditional HPC and modern cloud-native.

Cozystack delivers:
- **GPU clusters** with NVIDIA vGPU + MIG + time-slicing for shared utilization (validated A100, H100, H200, L40S, Blackwell)
- **Multi-tenant per-lab isolation** — Tenant CRD model with per-lab quotas, RBAC, audit trails
- **VM and container side-by-side** — accommodates legacy research workflows alongside modern containerized pipelines
- **Self-service for principal investigators** — labs can provision their own environments without ticket queues
- **Reproducible environments** — declarative IaC means experiments can be reproduced years later

### 2. Reproducible research and publication

Open science and publication-reproducibility mandates (Plan S, FAIR data principles, Horizon Europe requirements) increasingly require that research artifacts include reproducible compute environments — not just datasets and code, but the runtime that ran them.

Cozystack delivers:
- **Containerized research artifacts** — research environments as Kubernetes manifests + container images
- **Air-gapped support** — for sensitive research data (medical, classified, industrial-partner)
- **Long-term archival** — environments preserved alongside data for multi-decade reproducibility
- **DOI integration** with research data management workflows
- **EOSC and similar federations** — Cozystack platforms can participate in European Open Science Cloud federations

### 3. Cloud-native education and НИОКР

CS / engineering departments increasingly teach Kubernetes, KubeVirt, GitOps, observability — the modern cloud-native stack. Industrial partners running Cozystack in production benefit from graduates already familiar with the platform.

Cozystack delivers:
- **Student / cohort sandboxes** — Tenant CRD per cohort, per-student quotas, automatic cleanup
- **Curriculum-ready** — install/upgrade workflows that work for academic-IT teams
- **Open-source first** — students can run platform on personal hardware; reproduces production reality
- **CNCF connection** — Cozystack is CNCF Project; students gain CNCF-ecosystem familiarity
- **Industrial-relevant** — graduates familiar with platforms used by hosting providers, banks, AI operators

---

## Why universities specifically benefit from Cozystack

Beyond the three missions, several university-specific considerations:

### Open-source preferred
Academic ethos, transparency, and budget constraints all favor open-source infrastructure. Apache 2.0 license aligns with academic preferences and procurement realities.

### Sovereignty for sensitive research
Medical research data, classified research (defence-adjacent), industrial-partner research with NDA constraints — all benefit from sovereign infrastructure that keeps data within institutional control. Air-gap support handles the most sensitive cases.

### Federation with national / European research infrastructure
EuroHPC, EOSC, GÉANT, national research networks — Cozystack platforms can integrate with broader research-infrastructure federations through standard Kubernetes APIs.

### Multi-stakeholder governance
Universities have complex stakeholders: principal investigators, IT departments, research-funding agencies, industrial partners, students. Cozystack's multi-tenant model accommodates this without privileging any single stakeholder.

### Long-horizon planning
Universities don't refresh infrastructure on commercial-vendor schedules. Open-source platform with community governance fits multi-decade planning horizons.

### EuroHPC and national HPC facilities adjacent
Many universities have access to EuroHPC or national HPC; Cozystack works alongside these for the workload portfolio that doesn't need full HPC-scale.

---

## What runs on Cozystack in research and academic settings

{{< placeholder-logos >}}

*Customer evidence — Aenix to populate. Examples of proof points to include:*
- A European research university operating shared GPU cluster for AI/ML research across 12 labs
- An НИОКР institute with classified research data on air-gapped Cozystack deployment
- A computer-science department running Cozystack-based curriculum for cloud-native course
- A multi-institution research consortium with federated Cozystack across institutions
- A research-computing service offering Cozystack to faculty across multiple universities

> {{< placeholder-quote >}}

---

## Engagement structure

University engagements often have specific characteristics:

- **Procurement through public-procurement portals** — EU TED, member-state portals, KZ goszakup.gov.kz where applicable
- **Multi-institution consortia** — engagements may serve multiple universities simultaneously
- **Capacity transfer to in-house IT** — academic IT teams operate the platform after build; knowledge handover is first-class
- **Research-grant alignment** — engagement timeline often aligned with grant cycles
- **Industrial-partner collaboration scope** — universities increasingly partner with industry; platform supports multi-stakeholder access

For methodology see **[Platform Readiness Assessment](/services/platform-readiness-assessment/)**.

---

## Pricing

Cozystack platform is open source (Apache 2.0). Aenix offers academic-friendly engagement structures:

- **Academic discount** on commercial support tiers
- **Phased engagement** aligned with grant cycles
- **Capacity-transfer focus** — engagement explicitly invests in long-term institutional capability
- **CNCF Project status** — Cozystack participates in academic open-source ecosystem; some universities can apply CNCF / open-source procurement frameworks

For specific terms see discovery call.

---

## How to start

/contact/

Or read more:
- **[Cloud-native research and teaching infrastructure article](/blog/2026/05/cloud-native-research-and-teaching-infrastructure/)** — long-form
- **[Sovereign AI](/solutions/sovereign-ai/)** — AI/ML research with sensitive data
- **[Data sovereignty](/solutions/data-sovereignty/)** — research data sovereignty
- **[Platform Readiness Assessment](/services/platform-readiness-assessment/)** — engagement methodology
- **[Cozystack](/products/cozystack/)** — the platform
- **[cozystack.io](https://cozystack.io)** — open-source project, install/docs/community

---

*Aenix is the team behind Cozystack (CNCF Project), and we offer Ænix Platform — our commercial productized offering based on Cozystack, Kubernetes Certified Distribution, OpenSSF Best Practices. We build cloud-native infrastructure for universities, research institutes, and НИОКР organizations across the EU, DACH, and Central Asia.*

<!-- SEO: title "Cloud Platform for Universities — Research Computing, AI/ML, Cloud-Native Teaching | Aenix"
Description (≤155): "Cozystack for universities: research computing, AI/ML labs, reproducible research, cloud-native curriculum. Multi-tenant, GPU-ready, open source."
Word count: ~1300. -->
