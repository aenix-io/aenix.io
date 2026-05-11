---
title: "Build your own private cloud — a 90-day playbook for the platform-team-led approach"
description: "This is the long-form companion to our build private cloud services page. It walks through what it actually takes to build a private cloud in 90 days — what..."
date: "2026-05-01"
author: "Aenix Team"
type: "article"
topics: ["DORA", "NIS2", "VMware", "Cozystack", "Cilium", "Talos"]
language: "en"
companion_landing: "/services/build-private-cloud/"
quiz:
  title: "Test yourself: 90-day private cloud playbook"
  questions:
    - q: "How long does the discovery phase last in the playbook?"
      options:
        - { text: "One day", correct: false }
        - { text: "One week — output is a one-page architecture brief, no code yet", correct: true }
        - { text: "One month", correct: false }
      explanation: "Day-0 discovery is one week. Output: a one-page architecture brief covering trigger, workload portfolio, capacity, hardware constraints, and compliance scope. No code yet."
    - q: "What is the primary deliverable at end of day-30?"
      options:
        - { text: "Production-ready multi-tenant platform with all customer workloads migrated", correct: false }
        - { text: "Working single-tenant single-cluster platform with basic observability — not yet production-ready for customers", correct: true }
        - { text: "Just the hardware racked", correct: false }
      explanation: "End of day-30: working platform — single-tenant, single-cluster, basic observability. NOT production-ready for customers yet. Multi-tenancy and operations come in days 31-60."
    - q: "What gets explicitly skipped in the 90-day scope?"
      options:
        - { text: "Backup and DR with Velero", correct: false }
        - { text: "Multi-region operation, GPU workload optimisation, comprehensive compliance certification, polished UI, legacy decommission", correct: true }
        - { text: "Identity integration", correct: false }
      explanation: "Honest acknowledgments of what 90 days does NOT cover: polished customer-facing portal, multi-region/multi-DC operation, GPU/AI workload optimization, comprehensive compliance certification (architecture is aligned, but audit is separate), legacy decommissioning (months 4-12 in cohorts)."
    - q: "What is the typical duration of the foundation phase?"
      options:
        - { text: "Days 1-30 — hardware → OS+platform → storage+network → identity+observability", correct: true }
        - { text: "Days 31-60", correct: false }
        - { text: "Days 61-90", correct: false }
      explanation: "Foundation phase = days 1-30: week 1 hardware, week 2 OS+platform, week 3 storage+network, week 4 identity+observability. Multi-tenancy + operations is days 31-60; workload onboarding + golden paths is days 61-90."
    - q: "What infrastructure is set up in week 4?"
      options:
        - { text: "KubeVirt VMs only", correct: false }
        - { text: "Identity (Keycloak or chosen IdP) + observability (VictoriaMetrics + VictoriaLogs) + initial dashboards/alerts + audit logging", correct: true }
        - { text: "Tenant CRD multi-tenancy", correct: false }
      explanation: "Week 4 closes the foundation: Keycloak (or chosen IdP) integrated; VictoriaMetrics + VictoriaLogs deployed; initial dashboards and alerts; audit logging configured. Multi-tenancy comes only in week 5-6."
---

**This is the long-form companion to our [build private cloud services page](/services/build-private-cloud). It walks through what it actually takes to build a private cloud in 90 days — what to build first, what to skip, where most teams stumble. Written for platform leads, infrastructure architects, and engineering managers about to take this on.**

The phrase "build your own cloud" was niche in 2018. By 2026, it's mainstream — Broadcom's pricing changes plus sovereignty pressures plus AI workload economics have pushed thousands of organizations from "we'll just rent cloud" to "we need a platform we control."

What used to take 18 months can now take ~90 days for the foundation, with subsequent quarters adding maturity. The reason: the open-source platform stack has matured.

## Day-0: discovery (1 week)

Before you build, agree on:

- **Trigger** — what's pushing you to build? (VMware exit, sovereignty, cost, AI.) The trigger shapes architecture.
- **Workload portfolio** — what's running, what's coming. Sizing follows.
- **Capacity** — internal team capacity to operate the platform after build.
- **Hardware constraints** — datacenter / colocation arrangements, refresh cycles, network connectivity.
- **Compliance scope** — DORA, NIS2, GDPR, sectoral.

Output: a one-page architecture brief. No code yet.

## Days 1-30: foundation

### Week 1: hardware setup
- Compute servers procured / repurposed
- Storage tier provisioned
- Network fabric configured (BGP, leaf-spine)
- Out-of-band management

### Week 2: OS and platform
- Talos Linux installed (default for Cozystack) or chosen OS layer
- Cozystack platform deployed
- Initial cluster operational
- Operator and admin access verified

### Week 3: storage and network
- LINSTOR (or Ceph) deployed and validated
- Cilium configured with network policies
- MetalLB / ingress set up
- Cross-node replication tested

### Week 4: identity and observability
- Keycloak (or chosen IdP) integrated
- VictoriaMetrics + VictoriaLogs deployed
- Initial dashboards and alerts
- Audit logging configured

End of day-30: a working platform. Single-tenant, single-cluster, basic observability. Not production-ready for customers yet.

## Days 31-60: multi-tenancy and operations

### Week 5-6: multi-tenancy
- Tenant CRD configured
- Per-tenant RBAC, quotas
- Tenant onboarding playbook
- First test tenants provisioned

### Week 7-8: operations
- Runbooks for common scenarios (pod failure, node failure, control-plane recovery, certificate rotation)
- On-call rotation set up
- Backup and DR with Velero
- Incident response process documented

End of day-60: platform supports multiple tenants with documented operations. Ready for first real workload onboarding.

## Days 61-90: workload onboarding and golden paths

### Week 9-10: first workload migration
- Pilot workload (low-risk) migrated from existing infrastructure
- Performance and stability validated
- Backup and recovery tested
- Customer (internal) feedback collected

### Week 11-12: golden paths
- Self-service paths for the 5-10 most common product-team needs
- Service templates documented
- Observability auto-onboarding
- Application-level CI/CD integrated

End of day-90: platform supports production workloads with self-service. Maturity continues compounding from here.

## What you skip in 90 days

Honest acknowledgments:

- **Polished customer-facing portal** — cozyportal works but UI polish is iterative.
- **Multi-region / multi-DC operation** — single-region first; multi-region in months 4-6.
- **GPU/AI workload optimization** — generic GPU support yes; AI-platform-specific optimizations later.
- **Comprehensive compliance certification** — architecture aligned with DORA/NIS2/GDPR; certification audit is a separate exercise.
- **Decommissioning of legacy infrastructure** — usually months 4-12 in cohorts.

## Where teams routinely stumble

### Stumble 1: under-staffed platform team
A 5-person platform team building a private cloud while operating existing infrastructure stalls in week 4. Realistic platform-team headcount: 5-10 dedicated engineers for the build phase; can shrink to 3-5 for steady-state operations.

### Stumble 2: skipping observability investment
Observability gets squeezed because it doesn't show up in Day 0 demos. Falls over in production. Build observability in Week 4 alongside core platform.

### Stumble 3: vendor-led "private cloud appliance"
Buying a "complete private cloud in a box" rebuilds lock-in. Build velocity is also slower because the appliance is in the way.

### Stumble 4: no platform-team product orientation
Engineering excellence without product orientation produces a platform that internal customers don't adopt the way it was designed.

### Stumble 5: skipping the compliance overlay
Architecture that ignores compliance until later requires retrofitting. Build sovereignty / audit / observability with compliance in mind from Day 0.

## What 90 days does not include

The 90-day playbook delivers a foundation. Maturity continues:

- **Months 4-6:** workload migration cohorts, golden-path expansion, regional / DR site
- **Months 7-12:** GPU/AI subsystems, advanced multi-tenancy patterns, FinOps integration
- **Year 2:** maturity, optimization, scaling

A private cloud at year 2 is a different platform from a private cloud at day 90.

## How to start

If you fit the profile, the structured next step is a focused assessment. Aenix runs this as part of **[Platform Readiness Assessment](/services/platform-readiness-assessment/)**. For details see the **[build private cloud services page](/services/build-private-cloud)**.

---

*Aenix is the team behind Cozystack (CNCF Project), and we offer Ænix Platform — our commercial productized offering based on Cozystack, Kubernetes Certified Distribution.*

<!-- SEO: title "Build Your Own Private Cloud — A 90-Day Playbook | Aenix"
Word count: ~1500. -->
