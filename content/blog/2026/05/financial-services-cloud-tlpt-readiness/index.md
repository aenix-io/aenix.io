---
title: "Financial-services cloud platforms — what TLPT readiness actually looks like in 2026"
description: "Long-form companion to the financial-services industry page. For platform engineers at banks, insurers, payment institutions translating DORA's TLPT obligations, supplier-chain transparency, and exit-readiness into architecture that survives a real supervisor cycle."
date: 2026-05-11
author: "Aenix Team"
type: "article"
topics: ["Financial Services", "DORA", "Compliance", "Sovereignty", "Cozystack"]
language: "en"
companion_landing: "/industries/financial-services/"
companion_label: "See financial-services industry page →"
---

**Long-form companion to the [financial-services industry page](/industries/financial-services/). For platform engineers and infrastructure leads at banks, insurers, payment institutions, and market-infrastructure providers translating DORA's TLPT, supplier-chain transparency, and exit-readiness obligations into architecture that survives a real supervisor cycle — not a policy review.**

The DORA conversation at most financial-services organisations split
into two halves in 2024-2025. The first half — governance, policy,
ICT risk management documentation — went to legal, compliance, and
CISO teams. By the time DORA went into force on 17 January 2025,
most regulated entities had that documentation in reasonable shape.

The second half — making the cloud architecture *demonstrably*
DORA-compliant when a real TLPT cycle hits — has been quieter. That
silence is starting to break in 2026. Supervisor TLPT exercises are
reaching architectures that were assumed compliant when DORA went
live but had never been tested under realistic regulator scrutiny.

This article walks through what TLPT readiness actually looks like
at the architecture level — what platform engineers should already
have done, what gaps recur, and what an Aenix engagement closes.

## What TLPT means and why it matters now

Threat-Led Penetration Testing (TLPT) is required for significant
financial entities under DORA. Every three years a structured red-
team exercise is run against the live production environment by an
external test provider, with the financial entity's CSIRT / SOC
treated as a real defender.

The point is not to find vulnerabilities (any pen test does that).
The point is to demonstrate operational resilience under realistic
attack scenarios — that the entity's people, processes, and
infrastructure can detect, respond, and recover within DORA's
expected windows.

For platform engineers, three TLPT-readiness questions matter:

1. **Detection at 24-hour timeline.** Article 23 requires an early
   warning within 24 hours of becoming aware of a significant
   incident. If your detection telemetry is tuned for performance
   and not security, the 24-hour window is fictional.
2. **Audit-trail completeness.** Article 21 requires that you can
   demonstrate to a supervisor *with evidence* what controls were in
   place at the time of the incident. Documentation isn't enough;
   running-system evidence is the bar.
3. **Containment and recovery.** TLPT exercises injection of real-
   world attack patterns. The platform's network policies, identity
   model, and isolation boundaries must survive realistic lateral
   movement and persistence attempts.

## What "DORA-ready architecture" actually looks like

A defensible cloud architecture for financial services has six
properties supervisors care about:

### 1. Detection telemetry tuned for security

Most banks we engage with have rich performance telemetry and
alert-fatigued security telemetry. The alert ratio is wrong: too many
performance noise alerts, not enough signal-to-noise on the security
events that map to Article 23 triggers.

Fix patterns:
- Curated alert rules tuned to MITRE ATT&CK techniques relevant to
  cloud infrastructure
- Logs flowing from VictoriaLogs / VictoriaMetrics (self-hosted, in
  jurisdiction) to a SIEM the SOC actually monitors
- 24×7 detection coverage with documented escalation
- Alert hygiene as a recurring task

Aenix Enterprise Edition ships VictoriaMetrics + VictoriaLogs
configured for security-grade telemetry by default, plus security-
focused alert rules. The customer SIEM integration is engagement work.

### 2. Workload identity that's not a wide-open service account

Default Kubernetes service accounts are wide-open. For DORA-aligned
architecture, every workload has an identity, every identity is
narrowly scoped, every service-to-service call is authenticated and
authorised.

Pattern: SPIFFE/SPIRE for workload identity, External Secrets Operator
backed by customer HSM, Pod Security Standards enforced as policy.
Aenix engagement covers the integration; the customer's IdP /
workforce identity remains customer-controlled.

### 3. Tenant CRD isolation as the structural answer to concentration risk

Article 28 demands the substantive condition of resilience, not
contractual diversity. The Tenant CRD model provides namespace-level
isolation per business function, per data class, per criticality
tier — with per-tenant quotas, RBAC scope, observability scope,
audit-trail scope.

This is not "soft multi-tenancy with hope." Tenant CRD is a Kubernetes-
native object reconciled by cozystack-controller; the running state
matches the spec or the operator surfaces the drift.

### 4. Audit-isolated environments

Critical workloads run in tenants that are explicitly audit-isolated:
separate clusters from non-production workloads, tamper-evident
logging that the customer's audit team can replay independently, no
shared infrastructure between audit-relevant and audit-irrelevant
workloads.

This costs more in infrastructure. The cost is the price of
defensible audit evidence.

### 5. Exit-readiness with tested exit drills

Article 28(8) requires a tested exit plan for critical-function
arrangements. Supervisors increasingly expect a partial exit drill
within the past 24 months.

The Cozystack-based architecture makes exit drills mechanically
simpler: workloads are standard KubeVirt VMs and Kubernetes resources.
The exit destination can be "the same Kubernetes API on different
hardware or provider." Aenix's engagement model includes a documented
exit-drill playbook that customers run annually.

### 6. Supplier-chain transparency to second hop

Article 28 demands visibility into the ICT supply chain at least to
the second hop. For the platform vendor relationship, Aenix is on the
hook — we provide an attested supplier-disclosure document that maps
upstream open-source components, security disclosure channels, and
operational dependencies.

Beyond the platform vendor, the customer is responsible for mapping
their own supplier chain. Aenix engagements include tooling to
inventory it but the inventory itself is customer-side work.

## Where most financial-services cloud architectures still fall short

Four recurring patterns in our 2025-2026 assessments:

### Gap 1: observability quietly leaving the regulator perimeter

The production database is in an EU region matching the regulatory
mandate. The application running on top sends logs to a SaaS
observability vendor whose data-processing region defaults to US.
Every minute the application runs, application logs containing
transaction details, customer identifiers, protected data move to
non-compliant jurisdiction.

Most banks catch this only after a supervisor flag. By then, the
remediation involves either replacing the SaaS vendor (multi-quarter
project) or negotiating a regional data-processing arrangement
(possible with some vendors, slow with others).

The Cozystack-based architectural answer: self-hosted VictoriaMetrics +
VictoriaLogs running on the same infrastructure as the workloads.
Eliminates the residency leak.

### Gap 2: exit plan exists on paper, never tested

The exit plan was written for the supervisor; nobody has rehearsed
it. Time-to-exit estimates are tabletop, not calibrated against a
drill. When the supervisor asks "when did you last test the exit
plan?" the answer is silence.

Fix: annual exit-drill rehearsal with documented outcome. Aenix
engagement provides the playbook; the customer runs the rehearsal.

### Gap 3: concentration risk treated as procurement question

"We use AWS in two regions; we have a contract clause requiring
geographic diversification of our backup." Both true. Neither
addresses what Article 28 actually demands — substantive architectural
resilience against single-provider failure.

Substantive answer: workloads use platform abstractions (Kubernetes,
KubeVirt, S3-compatible storage, standard relational databases) that
exist on multiple substrates. The exit destination is named at the
architecture level, not the legal level.

### Gap 4: sub-contractor risk invisible past first hop

The contracted hyperscaler is documented. Its data-centre operators,
network connectivity providers, shared platform services beneath are
not. Article 30(2)(a) requires visibility to second hop.

For Cozystack-based architecture, the platform vendor (Aenix) discloses
upstream component sourcing. The hardware vendor is the next hop;
beyond that, customer responsibility.

## The Aenix engagement model for financial services

We approach the financial-services engagement differently from other
verticals, because the regulator-driver and audit-readiness drivers
shape the work.

### Phase 0 — Discovery and DORA scoping

Confirm regulatory scope (DORA + national overlays + sectoral rules).
Confirm criticality classification of workloads. Sponsor and
supervisor-engagement contacts on customer side. Engagement model
(typical: Aenix runs advisory + Tier-3 SLA; customer runs production
operations).

### Phase 1 — Platform Readiness Assessment with DORA workstream

14- or 28-day fixed-price assessment. Control-by-control architecture
review against DORA Article 21 + Article 28 expectations. Output: 30-50
page report with gap analysis, prioritised remediation, timing.

### Phase 2 — Pilot deployment of Enterprise Edition

3-6 months. Defined slice of critical-function workloads migrated to
Cozystack-based Enterprise Edition. Supervisor evidence catalogue
partially built. TLPT-readiness validated against the pilot scope.

### Phase 3 — Full Enterprise Edition build

12-30 months depending on workload scope, multi-DC structure, TLPT
cycle. Production-grade deployment with full compliance documentation
deliverables. Aenix participates in TLPT preparation; the test itself
is run by accredited red-team providers.

### Phase 4 — Managed retainer

Aenix advisory + Tier-3 under SLA. No kubectl access to customer
production cluster — operates via GitOps PR review only. Critical for
bank governance.

## When this engagement model fits

Strong fit:

- Tier-1 or tier-2 European bank with active DORA programme
- Insurance carrier with multi-jurisdictional regulatory exposure
- Payment institution under DORA + PSD2/PSD3 overlap
- Market infrastructure (CSDs, CCPs) under DORA + CSDR
- Existing TLPT cycle that needs architecture readiness work

Marginal fit:

- Smaller banks where the budget envelope for a multi-year programme
  isn't yet sized for it; ISP Edition with sovereignty-focused
  architecture may bridge

Poor fit:

- Banks that have already committed to a multi-year hyperscaler
  programme and aren't reopening that decision — Aenix can advise on
  specific DORA architecture gaps within the hyperscaler context, but
  the full Enterprise Edition isn't a fit

## Where to dig deeper

- **[Financial-services industry page](/industries/financial-services/)** —
  the trigger-led commercial landing
- **[DORA compliance services](/solutions/dora-compliance/)** —
  buyer-trigger DORA landing
- **[Enterprise Edition product page](/products/aenix-platform/enterprise-edition/)** —
  the edition for regulated enterprises
- **[A DORA compliance checklist for cloud infrastructure](/blog/2026/05/dora-compliance-checklist-cloud-architecture/)** —
  architecture-level DORA walkthrough
- **[DORA compliance evidence checklist](/blog/2026/05/dora-compliance-checklist-detailed/)** —
  what demonstrable means in practice
- **[Enterprise Edition — DORA Article 21 + 28 mapped to architecture](/blog/2026/05/enterprise-edition-dora-cloud-architecture/)** —
  edition-level architectural detail
- **[DORA compliance checklist resource](/resources/dora-compliance-checklist/)** —
  downloadable controls checklist

---

*Aenix is the company behind Cozystack — a CNCF project, Kubernetes
Certified Distribution. Our tier-1 European bank engagements are
NDA-protected until mid-2027; first named bank case studies will be
published as NDAs expire.*
