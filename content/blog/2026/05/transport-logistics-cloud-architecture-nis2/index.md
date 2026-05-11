---
title: "Transport and logistics cloud architecture — NIS2, AI, edge in 2026"
description: "Companion to transport / logistics industry page."
date: "2026-05-01"
author: "Aenix Team"
type: "article"
topics: ["NIS2", "Cozystack", "Sovereignty", "AI/ML", "GPU"]
language: "en"
companion_landing: "/industries/transport-logistics/"
quiz:
  title: "Test yourself: transport / logistics cloud"
  questions:
    - q: "Under NIS2, what category does transport fall into?"
      options:
        - { text: "Essential entity under Annex I", correct: true }
        - { text: "Important entity under Annex II", correct: false }
        - { text: "Out of scope for transport ICT", correct: false }
      explanation: "Transport is in NIS2 Annex I as an essential entity. Article 21 risk-management measures and Article 23 incident reporting apply to ICT used by transport organisations (rail, road, water, air)."
    - q: "What three-tier architecture does the article describe for transport / logistics?"
      options:
        - { text: "Single hyperscaler region for everything", correct: false }
        - { text: "HQ cloud, regional sites, and edge tier", correct: true }
        - { text: "One consolidated on-prem cluster", correct: false }
      explanation: "Three tiers: HQ Cloud (transport management system, fleet management, AI training, customer-facing) → Regional sites (operational centres, regional dispatch, AI inference) → Edge (depots, ports, terminals, on-vehicle compute). Cozystack at all three with OT boundary at edge for safety-critical systems."
    - q: "Which transport-specific NIS2 architecture controls does the article highlight?"
      options:
        - { text: "Standard Article 21 risk-management measures only", correct: false }
        - { text: "Cross-border freight, deep sub-contractor visibility, BCP, OT air-gap", correct: true }
        - { text: "Multi-factor authentication for operator consoles only", correct: false }
      explanation: "Standard Article 21 + 23 mapping plus transport-specific: multi-modal data sovereignty (cross-border freight data), sub-contractor visibility (logistics chains often 5+ levels), BCP for kinetic disruption scenarios (port closures, road blockages, weather), air-gap for safety-critical OT (rail signalling, automated terminal ops)."
    - q: "What kind of AI workload pattern is most common in transport?"
      options:
        - { text: "One-off batch jobs run overnight", correct: false }
        - { text: "Training-only workloads, no inference", correct: false }
        - { text: "Sustained 24/7 inference at scale", correct: true }
      explanation: "Most transport AI workloads are sustained 24/7 inference where dedicated GPU economics fit. Use cases: route optimisation (real-time + planning), demand forecasting, predictive maintenance for fleet, last-mile optimisation, customer-facing AI (delivery ETA, customer service)."
    - q: "Why does the article say sub-contractor visibility is particularly hard in logistics?"
      options:
        - { text: "Sub-contractors are rare in transport chains", correct: false }
        - { text: "Tracing is trivial with modern TMS tooling", correct: false }
        - { text: "Chains run 5+ sub-contracting levels deep", correct: true }
      explanation: "Logistics chains often have 5+ levels of sub-contracting (carrier → forwarder → broker → handler → terminal operator). NIS2 (and DORA) expect supplier transparency to second hop — for logistics, even that is unusually hard, and beyond second hop is often impossible without dedicated traceability tooling."
---

Companion to **[transport / logistics industry page](/industries/transport-logistics)**.

## Three pressures

1. **NIS2 essential entity** — transport is Annex I; Article 21/23 apply to ICT
2. **AI optimization** — routing, demand forecasting, predictive maintenance
3. **Edge compute density** — depots, ports, terminals, vehicles

## Three-tier architecture pattern

- **HQ Cloud** — TMS, fleet management, AI training, customer-facing
- **Regional sites** — operational centres, regional dispatch, AI inference
- **Edge** — depots, ports, terminals, on-vehicle compute

Cozystack at all three tiers, with OT boundary at edge for safety-critical systems (rail signalling, automated terminal operations).

## NIS2 architecture controls for transport

Standard Article 21 + 23 mapping; transport-specific:
- Multi-modal data sovereignty (cross-border freight data)
- Sub-contractor visibility (logistics chains often have 5+ levels)
- BCP for kinetic disruption scenarios
- Air-gap for safety-critical OT

## AI use cases in transport

- Route optimization (real-time + planning)
- Demand forecasting
- Predictive maintenance for fleet
- Last-mile optimization
- Customer-facing AI (delivery ETA, customer service)

Most workloads are sustained 24/7 inference where dedicated GPU economics fit.

## How Aenix engages

Standard **[Platform Readiness Assessment](/services/platform-readiness-assessment/)** with transport workstream emphasis.

---

*Aenix is the team behind Cozystack.*

<!-- Word count: ~400. -->
