---
title: "Platform engineering maturity model — five stages, eight dimensions"
description: "Companion to Platform Engineering Maturity Assessment."
date: "2026-05-01"
author: "Aenix Team"
type: "article"
topics: ["GitOps", "Multi-tenancy", "Platform Engineering", "Observability"]
language: "en"
companion_landing: "/services/platform-engineering/"
---

Companion to **[Platform Engineering Maturity Assessment](/resources/platform-engineering-maturity-assessment)**.

## Why a maturity model

Platform engineering decisions need a baseline. Where are you today, where do you need to be, what's the gap. Without baseline, investment decisions are guess.

## Five stages

1. **Pre-platform** — each team owns infra; tooling fragmented; ad-hoc shared services
2. **Shared infrastructure** — central team owns shared infrastructure; ticket-driven
3. **Self-service primitives** — central team exposes APIs / IaC modules; limited golden paths
4. **Internal developer platform** — opinionated platform with golden paths; self-service for most operations
5. **Mature platform engineering** — platform is a coherent product; SLOs; internal product management

Most organizations sit at stage 2-3.

## Eight dimensions to score

1. **Workload portability** — can workloads run on multiple substrates without rewrite?
2. **GitOps adoption** — fraction of changes via PR-driven Git workflow
3. **Observability unification** — single observability stack; SLOs defined per service
4. **Secrets handling** — centralized; rotated; audited
5. **Identity model** — federated workforce-to-workload identity
6. **Multi-tenancy** — namespace / project / Tenant CRD model
7. **Disaster-recovery posture** — RTO/RPO documented and tested
8. **Self-service depth** — golden paths covering 80% of common requests

For each, 5-stage rubric (matching overall stages).

## How to use the maturity assessment

1. Download the PDF
2. Walk through with engineering leadership and platform team (separately)
3. Compare answers — disagreement = real signal
4. Identify priority dimensions (lowest scores or highest leverage)
5. Build remediation roadmap

## What "good" looks like

For mid-large engineering organization (200+ engineers, multiple product teams):
- Target stage 4 across all 8 dimensions within 18-24 months
- Mature stage 5 typically takes 3-5 years

Smaller organizations (under 100 engineers): stage 3 may be sufficient; stage 4-5 is over-engineering.

## Engagement

For structured assessment with an external lens see **[Platform Readiness Assessment](/services/platform-readiness-assessment/)**.

---

*Aenix is the team behind Cozystack.*

<!-- Word count: ~450. -->
