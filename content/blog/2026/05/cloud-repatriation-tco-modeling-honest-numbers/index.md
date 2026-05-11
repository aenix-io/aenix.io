---
title: "Honest TCO modelling for cloud repatriation — what numbers to actually compare"
description: "Companion to Cloud Repatriation TCO Worksheet."
date: "2026-05-01"
author: "Aenix Team"
type: "article"
topics: ["Cloud Repatriation", "Financial Services", "Platform Engineering", "Backup & DR", "Observability"]
language: "en"
companion_landing: "/solutions/cloud-repatriation/"
quiz:
  title: "Test yourself: honest cloud repatriation TCO"
  questions:
    - q: "What share of public-cloud spend does egress typically eat, according to the article?"
      options:
        - { text: "Five to fifteen percent of total spend", correct: true }
        - { text: "Less than one percent of total spend", correct: false }
        - { text: "Forty to fifty percent of total spend", correct: false }
      explanation: "Egress is often 5-15% of total spend and easy to miss. Combined with reservation under-utilization (30-50% realization is common), idle/over-sized resources (10-20% of compute), hyperscaler managed-service premium (2-4× over self-managed), and lock-in switching cost — the bill number alone understates real TCO."
    - q: "What reservation realization rate does the article say is common?"
      options:
        - { text: "Above ninety percent realization", correct: false }
        - { text: "Thirty to fifty percent realization", correct: true }
        - { text: "Effectively one hundred percent realization", correct: false }
      explanation: "30-50% reservation realization is common — meaning the discount evaporates. A reservation only saves money if you actually use what you committed to. Mismatch between commitment portfolio and actual workload mix is a typical source."
    - q: "What share of repatriation cost case do the top-10 workloads typically represent?"
      options:
        - { text: "Ten to twenty percent of cost case", correct: false }
        - { text: "Above ninety-five percent of cost case", correct: false }
        - { text: "Sixty to eighty percent of cost case", correct: true }
      explanation: "TCO at workload level usually shows the top-10 workloads = 60-80% of cost case; tail workloads are marginally cost-positive or neutral. Repatriating top-10 and leaving tail in cloud is often best."
    - q: "What does the article say about destination cost — what gets missed in shallow models?"
      options:
        - { text: "Only hardware acquisition cost matters", correct: false }
        - { text: "Refresh cliffs, network, backup, tooling, headcount", correct: true }
        - { text: "Nothing — destination is always cheaper", correct: false }
      explanation: "Skipping destination items makes TCO look artificially good; reality bites in Year 2. Full destination cost includes hardware acquisition + 5-year refresh, datacenter/colocation, network bandwidth, storage tiering, backup/DR, identity/observability/tooling, platform-engineering capacity, software licenses."
    - q: "Which sensitivity factor has \"outsized impact\" on private-cloud economics?"
      options:
        - { text: "Steady-state utilization at 50 percent vs 80 percent", correct: true }
        - { text: "Share of the bill spent on GPU compute", correct: false }
        - { text: "Currency exchange rate fluctuation", correct: false }
      explanation: "Honest TCO is sensitive to occupancy assumptions: steady-state at 50% vs 80% utilization changes private-cloud economics dramatically. Workload growth (20%/year vs 50%/year) changes hardware refresh cycles. Egress volume changes have outsized impact."
---

Companion to **[Cloud Repatriation TCO Worksheet](/resources/cloud-repatriation-tco-worksheet)**.

## Why most cloud TCO models are wrong

The bill is one number. Real public-cloud TCO includes:

- **Egress charges** — often 5-15% of total spend, easy to miss
- **Reservation under-utilization** — 30-50% realization is common; the discount evaporates
- **Idle and over-sized resources** — 10-20% of compute spend
- **Hyperscaler-managed-service premium** — 2-4× over self-managed at scale
- **Vendor lock-in switching cost** — invisible until something breaks
- **Platform-engineering capacity dedicated to public-cloud-specific complexity**

A real TCO model captures all of these.

## Destination cost — what's missed

For private-cloud destination:

- **Hardware acquisition + 5-year refresh** (the refresh cliff arrives)
- **Datacenter or colocation**
- **Network bandwidth, including egress between sites**
- **Storage tiering and growth**
- **Backup and DR infrastructure**
- **Identity, observability, platform tooling**
- **Platform-engineering capacity to operate**
- **Software licenses where applicable**

Skip these and the TCO looks artificially good; reality bites in Year 2.

## Sensitivity analysis

Honest TCO model is sensitive to occupancy assumptions:
- Steady-state at 50% utilization vs 80% changes private-cloud-economics dramatically
- Workload growth at 20%/year vs 50%/year changes hardware refresh cycles
- Egress volume changes have outsized impact

## Workload-level decisions

TCO at portfolio level may be neutral. TCO at workload level usually shows:
- Top-10 workloads: 60-80% of cost case
- Tail of workloads: marginally cost-positive or neutral

Repatriating top-10 workloads, leaving tail in cloud, often best.

## How to use the worksheet

Fill in your numbers, walk through with finance partner + platform engineering. Identify top-10 repatriation candidates. Validate assumptions.

For full engagement see **[Cloud repatriation services](/solutions/cloud-repatriation/)**.

---

*Aenix is the team behind Cozystack.*

<!-- Word count: ~450. -->
