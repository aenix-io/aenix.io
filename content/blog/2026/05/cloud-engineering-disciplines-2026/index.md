---
title: "Cloud engineering disciplines in 2026 — the seven disciplines that compound"
description: "This is the long-form companion to our cloud engineering services page. It walks through the seven cloud engineering disciplines that mature organizations..."
date: "2026-05-01"
author: "Aenix Team"
type: "article"
topics: ["DORA", "NIS2", "Kubernetes", "GitOps", "Sovereignty", "DevOps"]
language: "en"
companion_landing: "/services/cloud-engineering/"
---

**This is the long-form companion to our [cloud engineering services page](/services/cloud-engineering/). It walks through the seven cloud engineering disciplines that mature organizations practice in 2026 — what each is, where they overlap, what tools matter.**

"Cloud engineering" as a job title and discipline has matured beyond "DevOps engineer with cloud experience." In 2026, the core disciplines are well-defined.

## Discipline 1: Architecture

Cloud architecture decisions — public vs private vs hybrid, hyperscaler vs sovereign, container vs VM, monolith vs microservices, multi-region patterns. Architects make these decisions; cloud engineers implement them.

## Discipline 2: Infrastructure-as-code

All infrastructure in version control. Terraform / OpenTofu for cloud and infrastructure. Crossplane for Kubernetes-native infrastructure. Pulumi as a programmer-friendly alternative. Drift detection, policy-as-code, automated provisioning.

## Discipline 3: GitOps

Argo CD or Flux as the deployment substrate. All Kubernetes changes through Git. Mature change management; auditable history. See **[platform engineering](/services/platform-engineering/)** for depth.

## Discipline 4: Observability

VictoriaMetrics + VictoriaLogs (or Prometheus + Loki) at platform layer. SLOs per service. Error budgets driving prioritization. Tracing for complex distributed systems.

## Discipline 5: Security

Workload identity (SPIFFE/SPIRE), secrets management (Vault or external secrets), policy-as-code (OPA / Kyverno), supply-chain security (Sigstore), runtime threat detection.

## Discipline 6: FinOps

Cost as a non-functional requirement. Per-team / per-service cost attribution. Cost gates in IaC review. FinOps owner with platform-team relationship.

## Discipline 7: Compliance

Architecture-aligned with applicable regulators (DORA / NIS2 / GDPR / sectoral). Audit trails. Encryption posture. See **[DORA compliance](/solutions/dora-compliance/)** and **[NIS2 compliance](/solutions/nis2-compliance/)** for specifics.

## How they fit together

A mature cloud-engineering organization practices all seven, not as separate functions but as overlapping disciplines integrated through platform engineering. See **[platform engineering services](/services/platform-engineering/)** for how this integrates.

## How to start

For an assessment of where your organization stands across these disciplines, see **[Platform Readiness Assessment](/services/platform-readiness-assessment/)**.

---

*Aenix is the team behind Cozystack.*

<!-- Word count: ~500. -->
