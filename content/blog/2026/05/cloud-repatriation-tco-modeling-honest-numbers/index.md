---
title: "Honest TCO modelling for cloud repatriation — what numbers to actually compare"
description: "Companion to Cloud Repatriation TCO Worksheet."
date: "2026-05-01"
author: "Aenix Team"
type: "article"
topics: ["Cloud Repatriation", "Financial Services", "Platform Engineering", "Backup & DR", "Observability"]
language: "en"
companion_landing: "/solutions/cloud-repatriation/"
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
