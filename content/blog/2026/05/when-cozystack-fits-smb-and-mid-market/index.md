---
title: "When Cozystack fits SMB and mid-market — and when it doesn't"
description: "Honest companion to SMB / mid-market industry page. Most SMB organizations don't need Cozystack. This article explains when they do, and what alternatives..."
date: "2026-05-01"
author: "Aenix Team"
type: "article"
topics: ["DORA", "VMware", "Proxmox", "Kubernetes", "Cozystack", "Sovereignty"]
language: "en"
companion_landing: "/industries/smb-mid-market/"
quiz:
  title: "Test yourself: when Cozystack fits SMB / mid-market"
  questions:
    - q: "According to the article, what is the honest test for whether Cozystack fits an SMB or mid-market organisation?"
      options:
        - { text: "At least 3 of 6 criteria match", correct: true }
        - { text: "At least 1 of the 6 criteria", correct: false }
        - { text: "All 6 of the criteria match", correct: false }
      explanation: "The honest test: 0-1 of the criteria = over-engineering, 2 = marginal, 3+ = fits. Criteria are regulated data, multi-tenant model, sustained workloads, internal platform team, AI/GPU at scale, specific exit trigger."
    - q: "Which alternative does the article recommend for SMB without regulated data?"
      options:
        - { text: "Always Cozystack for consistency", correct: false }
        - { text: "Custom-built virtualisation platform", correct: false }
        - { text: "Hyperscaler-managed or Proxmox VE", correct: true }
      explanation: "For SMB without regulated data: hyperscaler-managed (AWS/Azure/GCP) for operational simplicity, or DigitalOcean/Hetzner/OVHcloud for managed cloud-adjacent, or Proxmox VE for on-prem virtualization. Cozystack is over-engineering for these cases."
    - q: "What does the article offer as a free initial step for evaluating Cozystack fit?"
      options:
        - { text: "Two-week paid proof-of-concept", correct: false }
        - { text: "Free 15-minute fit-check call", correct: true }
        - { text: "Full paid architecture audit", correct: false }
      explanation: "The mid-market engagement model starts with a 15-minute fit-check call (free, no sales pressure), then optionally architecture review (5-10 days), then phase-2 implementation only if it actually fits. The article is explicit: for most SMB outreach, the honest answer is \"stay where you are.\""
    - q: "For a \"mid-market becoming multi-tenant\" example, what use case is named?"
      options:
        - { text: "Personal blog hosting platform", correct: false }
        - { text: "Single-team developer environment", correct: false }
        - { text: "SaaS with 100+ customers needing hard isolation", correct: true }
      explanation: "Mid-market becoming multi-tenant examples: SaaS company with 100+ customers needing hard isolation; B2B platform serving regulated industry customers; specialty cloud product for vertical market. These match Cozystack's strengths in structural multi-tenancy."
    - q: "What is named as a \"container-only mid-market\" alternative if Cozystack is over-engineering?"
      options:
        - { text: "Vanilla Kubernetes without KubeVirt", correct: true }
        - { text: "OpenStack on shared hardware pool", correct: false }
        - { text: "A bigger multi-region Cozystack", correct: false }
      explanation: "For container-only mid-market: vanilla Kubernetes is lighter than Cozystack (no KubeVirt overhead). Other \"doesn't fit\" alternatives include staying on existing managed cloud (don't fix what isn't broken) or Hetzner cloud + VPS for small operationally-simple teams."
---

**Honest companion to [SMB / mid-market industry page](/industries/smb-mid-market). Most SMB organizations don't need Cozystack. This article explains when they do, and what alternatives fit when they don't.**

## The honest test

Cozystack fits when at least three of:

1. **Regulated data** — banking, healthcare, public sector data with sovereignty / residency requirements
2. **Multi-tenant model** — SaaS / customer-facing / cross-BU isolation needed
3. **Sustained workloads** — 24/7 utilization where dedicated economics beat hyperscaler
4. **Internal platform team** — capacity to operate (or building it)
5. **AI/GPU workloads at scale** — sustained inference / training
6. **Specific exit trigger** — VMware migration, hyperscaler repatriation

If you have 0-1 of these, Cozystack is over-engineering. If 2, marginal. If 3+, fits.

## When it doesn't fit — what to do instead

### For SMB without regulated data
- **Hyperscaler-managed deployments** (AWS, Azure, GCP) — operationally simple
- **DigitalOcean / Hetzner / OVHcloud** — managed cloud-adjacent
- **Proxmox VE** for on-prem virtualization

### For mid-market with simple needs
- **Vanilla Kubernetes** if container-only — lighter than Cozystack
- **Existing managed cloud** if it works — don't fix what isn't broken
- **Hetzner cloud + VPS** if team is small — operationally simple

## When it does fit — examples

### Mid-market with regulated data
- Regional bank with multi-jurisdictional operations under DORA
- Mid-size insurance carrier with claims-processing AI on regulated data
- Public-sector or quasi-public with procurement-mandated sovereignty

### Mid-market becoming multi-tenant
- SaaS company with 100+ customers needing hard isolation
- B2B platform serving regulated industry customers
- Specialty cloud product for vertical market

### Mid-market with strong platform team
- Mid-market with intentional in-house platform engineering investment
- Fast-growing tech-mid-market scaling beyond hyperscaler simple model

## Aenix engagement model для mid-market

- **15-minute fit-check call** — free, no sales pressure
- **Architecture review** (5-10 days) — if mid-market wants structured assessment
- **Phase 2 implementation** — only if it actually fits

For most SMB outreach, the honest answer is "stay where you are." We're explicit about this.

---

*Aenix is the team behind Cozystack.*

<!-- Word count: ~500. Honest article. -->
