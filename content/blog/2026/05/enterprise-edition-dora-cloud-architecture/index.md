---
title: "Enterprise Edition for regulated cloud — DORA Articles 21 and 28 mapped to running architecture"
description: "Long-form companion to the Enterprise Edition product page. For regulated enterprises (banks, insurers, public sector, energy, healthcare) translating DORA Article 21 and Article 28 obligations into a defensible cloud architecture."
date: 2026-05-11
author: "Aenix Team"
type: "article"
topics: ["DORA", "Financial Services", "Compliance", "Sovereignty", "Multi-tenancy", "Cozystack"]
language: "en"
companion_landing: "/products/aenix-platform/enterprise-edition/"
companion_label: "See Enterprise Edition product details →"
quiz:
  title: "Test yourself: DORA Article 21 & 28 architecture"
  questions:
    - q: "What are the DORA Article 23 incident reporting windows that detection telemetry must support?"
      options:
        - { text: "24-hour early warning, 72-hour notification, one-month report", correct: true }
        - { text: "1-hour early warning, 24-hour notification, 7-day final report", correct: false }
        - { text: "No fixed windows — the entity defines its own SLO", correct: false }
      explanation: "Detection must operate within Article 23 windows: 24-hour early warning, 72-hour incident notification, and one-month final report."
    - q: "Why does the article say SaaS observability vendors create a DORA Article 28 risk?"
      options:
        - { text: "They charge in USD and breach FX exposure rules in DORA", correct: false }
        - { text: "Their data-processing default is US, so logs leave the perimeter", correct: true }
        - { text: "They refuse to sign EU Standard Contractual Clauses", correct: false }
      explanation: "Pattern 1 in the Article 28 section: SaaS observability tools default to US data processing, moving customer identifiers and protected data to a non-compliant jurisdiction every minute. Article 28 residency expectations apply to the entire ICT third-party arrangement."
    - q: "Article 28(8) requires a documented exit plan with what additional property that most entities lack?"
      options:
        - { text: "A notarised legal copy filed with the national supervisor", correct: false }
        - { text: "A second backup hyperscaler signed under contract", correct: false }
        - { text: "Tested feasibility — a rehearsal in the past 24 months", correct: true }
      explanation: "Pattern 2 in the Article 28 section explains that most entities have an exit plan on paper but few have rehearsed it, and supervisors are now asking for rehearsal within the last 24 months."
    - q: "What does 'advisory-only support model' mean in Enterprise Edition?"
      options:
        - { text: "Aenix engineers operate via GitOps PR review, not kubectl", correct: true }
        - { text: "Aenix only provides written advice and no engineering work", correct: false }
        - { text: "The customer must hire its own consultancy for cluster changes", correct: false }
      explanation: "Advisory-only means Aenix engineers don't need kubectl access to production; reviewers operate via GitOps PR review and runbooks remain customer-side — critical for banks where vendor-side access is a structural risk."
    - q: "What total elapsed time does the article cite for an Enterprise Edition production deployment at a tier-1 bank with full TLPT readiness?"
      options:
        - { text: "6 to 12 months", correct: false }
        - { text: "18 to 36 months", correct: true }
        - { text: "12 to 18 months", correct: false }
      explanation: "The engagement structure section states 18–36 months for tier-1 banks with full TLPT readiness, and 12–18 months for mid-size regulated enterprises with narrower scope."
---

**Long-form companion to the [Enterprise Edition landing](/products/aenix-platform/enterprise-edition/). For regulated enterprises — banks, insurers, public-sector entities, energy operators, healthcare — translating DORA Article 21 and Article 28 obligations into a running cloud architecture that survives a supervisory audit.**

Regulated-enterprise cloud architecture in 2026 is a different
conversation than it was in 2022. DORA went into force on 17 January
2025. NIS2 transposition deadline passed in October 2024. Supervisory
expectations are sharpening with each TLPT cycle. The pre-DORA pattern
— hyperscaler region with a few contractual clauses — does not survive
realistic audit scrutiny.

This article walks through what an audit-defensible cloud architecture
actually looks like, why Aenix Enterprise Edition is structured the
way it is, and where most regulated organisations still have gaps.

## Article 21 — ten architectural areas

DORA Article 21 requires "appropriate technical, operational, and
organisational measures" across ten enumerated areas. NIS2 Article 21
covers similar ground for essential and important entities. Both treat
cloud infrastructure as a first-class object of the regulation, not
an afterthought.

For platform engineers, the ten areas map to concrete architecture
decisions:

### 1. Policies on risk analysis and information system security

Architecture implication: every critical-function workload has a
documented risk register entry. Threat-model artifacts are stored
alongside the workload (not in a separate "compliance system" that
drifts). Pod Security Standards and Kubernetes Network Policies
enforce the technical controls the risk register names.

### 2. Incident handling

Detection must operate within the Article 23 reporting windows: 24-hour
early warning, 72-hour incident notification, one-month final report.
The bottleneck in practice is detection telemetry — alert fatigue
masks signal. Enterprise Edition ships with VictoriaMetrics +
VictoriaLogs and curated alert rules tuned for security, not just
performance.

### 3. Business continuity

RTO and RPO are documented per critical workload, *and tested annually*
with telemetry that proves the test outcome. Backup-only is
insufficient. Enterprise Edition includes Velero + per-application
patterns (PostgreSQL PITR, Kafka snapshots, etc.) plus chaos-engineering
hooks for controlled failure injection.

### 4. Supply chain security

Article 28's most demanding requirement: ICT third-party arrangements
inventoried, classified by criticality, with sub-contractor chain
mapped to the *second hop*. Enterprise Edition gives you the
provider relationship Aenix can attest to (we are the platform vendor);
the open-source substrate (Cozystack) gives you transparency to the
upstream-component level. Beyond that, the customer's responsibility.

### 5. Security in acquisition, development, maintenance

SAST/DAST in CI, container scanning + SBOM, vulnerability handling
with documented SLA, disclosure policy published. Enterprise Edition
provides the operator-side discipline; customer pipelines integrate.

### 6. Effectiveness assessment

Annual external assessment is the supervisor expectation for essential
entities. Enterprise Edition documentation aligns with the working
formats supervisors consume — control-level mapping, evidence
catalogue, audit-trail completeness.

### 7. Cyber hygiene and training

Out of scope for the platform itself; in scope for the customer's
operations team. Aenix can deliver Kubernetes Deep Dive Course as
part of the engagement (separate product).

### 8. Cryptography

Customer-controlled encryption keys at every layer — production
storage, backups, observability data, audit logs. HSM-backed for
sensitive data classes. Key rotation and emergency-access procedures
documented. Enterprise Edition supports External Secrets Operator
backed by customer HSM (CloudHSM, Azure Key Vault HSM-mode, on-prem
HSM appliance).

### 9. Human resources security, access control, asset management

Workload identity via SPIFFE/SPIRE or equivalent. Privileged access
management. Joiner-mover-leaver process automated. Asset register
complete and current. Enterprise Edition ships with cozystack-controller
that maintains the asset register as a Kubernetes-native object — no
drift between policy and running state.

### 10. MFA / continuous authentication / secured comms

MFA on all privileged accounts at minimum. Enterprise tier of Aenix
support requires MFA on all customer-side cluster access. Secured
emergency comms via the support channel itself.

## Article 28 — the supplier-risk dimension that breaks most setups

Article 28 is where most banks and insurers we engage with have the
biggest gaps. Three patterns recur:

### Pattern 1 — observability data quietly leaving the regulator perimeter

The production database is hosted in an EU region matching the
regulatory mandate. The application running on top sends logs and
metrics to a SaaS observability vendor — Datadog, New Relic, Splunk
Cloud — whose data-processing region defaults to US. Application logs
containing transaction details, customer identifiers, and protected
data move to non-compliant jurisdiction every minute the application
runs.

Article 28's data-residency expectations apply to the *entire ICT
third-party arrangement* — observability tools included. Supervisor
audits increasingly catch this; legacy "data classification policies"
do not. Enterprise Edition replaces SaaS observability with self-hosted
VictoriaMetrics + VictoriaLogs running on the same customer
infrastructure. Eliminates the most common residency leak.

### Pattern 2 — exit plans on paper, never tested

Article 28(8) requires a documented exit plan for critical-function
arrangements with *tested feasibility*. Most entities have a plan;
fewer have rehearsed it. Supervisors are now asking for the rehearsal
within the last 24 months.

Enterprise Edition's open-source substrate makes the exit-test
mechanically simpler: the workloads are standard KubeVirt VMs and
Kubernetes resources. The exit destination can be "the same
Kubernetes API, different underlying hardware or provider" rather
than a wholesale migration. Aenix's engagement model includes a
documented exit-drill playbook customers run annually.

### Pattern 3 — concentration risk treated as a procurement question

Concentration risk often gets flagged then "mitigated" by contractual
diversity clauses. The substantive condition — workloads architecturally
diversified across multiple providers — typically isn't met. Article 28
demands the substantive condition, not just the procurement formality.

Enterprise Edition's architecture inherently breaks the concentration:
the cloud provider relationship becomes hardware and bandwidth, not
platform services. Sub-contractor mapping shortens dramatically. The
sovereignty story becomes architectural rather than contractual.

## What Enterprise Edition includes that ISP / Public Cloud doesn't

Several Enterprise-specific layers:

- **Air-gap install** documented and supported as a first-class
  deployment mode. Updates flow through controlled channels (Harbor
  mirror, customer-side artifact registry, manual approval). Used by
  defence-adjacent, classified-data, and the most sensitive banking
  workloads.
- **Multi-DC active/passive or active/active** — Enterprise typically
  deploys to two or more datacentres with cross-DC replication tuned
  for RTO/RPO targets. ISP Edition is single-DC by default.
- **Advisory-only support model** — Aenix engineers do not require
  kubectl access to your production cluster. Reviewers operate via
  GitOps PR review; runbooks remain on the customer side. Critical
  for banks where vendor-side access is a structural risk.
- **Customer-controlled HSM integration** — keys never leave the
  customer's HSM appliance. Cozystack reaches keys only through
  attested signed requests.
- **Audit-isolated environments** — separate clusters for production,
  audit, and forensic copy. Tamper-evident logging across.
- **Compliance documentation deliverables** — at engagement close,
  the customer receives a control-by-control evidence catalogue
  aligned to DORA / NIS2 supervisor expectations.

## What stays the customer's responsibility

Enterprise Edition is *architecture-aligned with DORA / NIS2*. It is
not a certification. Several obligations remain on the customer:

- **Internal governance** — board reporting, RM committee, ICT risk
  function. Out of platform scope.
- **Sectoral overlays** — banking secrecy, insurance regulation,
  healthcare data laws. Customer's responsibility to interpret
  alongside DORA.
- **The audit itself** — Enterprise Edition gives you defensible
  architecture and evidence; running the audit cycle is your audit
  team's work.
- **Workload-specific risk decisions** — Enterprise Edition supplies
  the substrate; which workloads are critical, how they're classified,
  and what residual risk you accept is your call.

## When Enterprise Edition is the right answer

Strong fit:

- You operate in a regulated sector (financial services, public sector,
  healthcare, energy, telco) with DORA, NIS2, or sectoral overlay
  obligations.
- You have a board-level decision to bring critical-function workloads
  off hyperscaler.
- You can budget €500k–€5M for a multi-year platform programme.
- You have or can hire a 5-10 engineer platform team to operate the
  infrastructure.
- You have sectoral pressure on TLPT, supplier-chain audit, or
  exit-readiness in the next 12-18 months.

Marginal fit:

- Mid-size organisations where the regulatory pressure is real but
  the budget for a multi-year programme isn't yet there. ISP Edition
  with sovereignty-focused architecture may bridge.

Poor fit:

- Organisations without regulatory pressure. Use a different edition
  (IDP Edition or Pure Cozystack Support) — Enterprise Edition's
  compliance overhead doesn't pay back without the regulator driver.

## Engagement structure

- **Discovery call** (30 min, free)
- **Platform Readiness Assessment** (14- or 28-day, DORA / NIS2
  workstream emphasised) — control-level gap analysis against current
  architecture
- **Pilot** (3-6 months) — defined slice migrated to Enterprise
  Edition, supervisor evidence catalogue partially built
- **Full Enterprise Edition build** (12-30 months) — production-grade
  multi-DC deployment with full compliance documentation
- **Managed retainer** (ongoing) — advisory, runbooks, GitOps PR
  review, incident response under SLA

Total elapsed time from project start to production: 18-36 months
for tier-1 banks with full TLPT readiness; 12-18 months for mid-size
regulated enterprises with narrower scope.

## Where to dig deeper

- **[Enterprise Edition landing](/products/aenix-platform/enterprise-edition/)** —
  feature list, edition-specific FAQ, customer evidence
- **[DORA compliance services](/solutions/dora-compliance/)** —
  DORA-aligned engagement details
- **[NIS2 compliance services](/solutions/nis2-compliance/)** —
  NIS2-aligned engagement details
- **[DORA compliance checklist resource](/resources/dora-compliance-checklist/)** —
  free downloadable controls checklist
- **[A DORA compliance checklist for cloud infrastructure](/blog/2026/05/dora-compliance-checklist-cloud-architecture/)** —
  longer architecture-level DORA walkthrough

---

*Aenix is the company behind Cozystack — a CNCF project, Kubernetes
Certified Distribution, OpenSSF Best Practices. Our Enterprise Edition
engagements with tier-1 European banks are NDA-protected until mid-2027;
first named bank case studies will be published as NDAs expire.*
