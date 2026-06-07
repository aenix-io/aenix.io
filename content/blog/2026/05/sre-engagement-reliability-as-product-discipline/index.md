---
title: "SRE as a product discipline — what an SRE engagement actually changes"
description: "Companion to the SRE consulting page: embed SRE in product teams, centralize it as a function, or buy an engagement — what each delivers and how to measure it."
date: 2026-05-11
author: "Aenix Team"
type: "article"
topics: ["DevOps", "Platform Engineering", "Observability", "Cozystack"]
language: "en"
companion_landing: "/services/sre-consulting/"
companion_label: "See SRE consulting services →"
quiz:
  title: "Test yourself: SRE as a discipline"
  questions:
    - q: "What is the toil cap that the Google SRE formulation puts on SRE engineers?"
      options:
        - { text: "20% — SREs should mostly write code", correct: false }
        - { text: "50% — above that it becomes ops", correct: true }
        - { text: "No fixed cap, as long as SLOs are met", correct: false }
      explanation: "The Google formulation caps operational toil at 50%; the rest must go to software engineering that reduces toil. Teams that structurally exceed this cap have an ops function masquerading as SRE."
    - q: "Why does the article say SLOs without roadmap consequences are not SRE practice?"
      options:
        - { text: "Error budgets must steer product priorities", correct: true }
        - { text: "SLOs are too hard to measure without dashboards", correct: false }
        - { text: "SLOs need a central SRE function to enforce", correct: false }
      explanation: "Error budgets are a contract: when they burn down, feature work pauses and reliability work takes priority. Organisations that have SLOs but don't let them affect roadmap have observability with SLO labels, not SRE practice."
    - q: "Which engagement model does the article recommend for 500+ engineer organisations with multiple business units?"
      options:
        - { text: "Embedded SRE inside each product team", correct: false }
        - { text: "Hybrid: embedded plus a central function", correct: true }
        - { text: "Centralised SRE function as the only mode", correct: false }
      explanation: "The hybrid model (embedded + centralised) is recommended for 500+-engineer organisations with multiple BUs; below 500 engineers, the dual investment is hard to amortise."
    - q: "What observability stack does Aenix recommend by default for SRE engagements?"
      options:
        - { text: "Prometheus, Loki, and Jaeger stack", correct: false }
        - { text: "Datadog SaaS as the unified backend", correct: false }
        - { text: "VictoriaMetrics, VictoriaLogs, OpenTelemetry", correct: true }
      explanation: "Aenix's default observability recommendation is VictoriaMetrics + VictoriaLogs + OpenTelemetry — self-hosted, sovereignty-friendly, lower overhead than Prometheus + Loki at scale, and no SaaS data-residency leak."
    - q: "When does the article say an SRE engagement is a poor fit?"
      options:
        - { text: "Firefighting culture without leadership backing", correct: true }
        - { text: "When the organisation has 100-200 engineers", correct: false }
        - { text: "When platform engineering already exists in-house", correct: false }
      explanation: "Without executive backing for the discipline shift, SRE engagement degrades to incident response training — helpful but not what Aenix sells. Platform engineering existing is actually a strong-fit signal."
---

**Long-form companion to the [SRE consulting services page](/services/sre-consulting/). For engineering leaders deciding whether to embed SRE inside product teams, centralize SRE as a function, or buy SRE engineering as an engagement — what each option actually delivers, and how to measure whether SRE practice is real or theatre.**

SRE — Site Reliability Engineering — is one of the most-adopted and
most-misunderstood engineering disciplines of the past decade. Most
mid-to-large engineering organisations claim to "do SRE." Far fewer
actually run the discipline as Google's original SRE book describes
it: software engineering applied to operations, with explicit error
budgets, SLOs that affect prioritisation, and a hard ceiling on
operational toil.

This article walks through what the discipline actually requires,
where it shows up as theatre rather than practice, and what an SRE
engagement from Aenix delivers when reliability has become a
business-grade problem.

## What SRE means, precisely

The original Google formulation has three load-bearing properties:

### 1. SRE is software engineering applied to operations

SREs are software engineers — they write code, they ship systems,
they automate operations. Not a relabelled ops team with the same
job and a fancier title. The "is your SRE actually writing code?"
test is a real test; teams that fail it have an ops function, not
an SRE function.

### 2. Error budgets affect prioritisation

The SLO defines the bar. The error budget is the difference between
100% and the SLO target. When the error budget burns down, the product
team's prioritisation shifts — feature work pauses, reliability work
becomes the priority. When the error budget is healthy, feature work
can proceed.

Crucially, this is a *contract*, not a suggestion. SLO breach has
real consequences for product roadmap. Organisations that have SLOs
but don't let them affect roadmap have observability, not SRE
practice.

### 3. Operational toil is capped (often at 50%)

The Google formulation: SREs cannot spend more than 50% of their
time on operational toil (repetitive, manual, automatable work).
The remainder must go to software engineering that reduces toil.
This makes the function self-improving over time — toil decreases,
engineering capacity increases.

Teams that exceed the toil cap structurally have an ops function
masquerading as SRE. The discipline degrades over months until the
function is indistinguishable from traditional ops.

## Three engagement models

In 2026, three structurally different SRE models exist in production:

### Model 1: embedded SRE

SREs sit inside product teams. The product team includes 2-5
engineers, one of whom holds the SRE function. Same team owns
features and reliability; the SRE shapes the architecture and
on-call from inside.

Strengths: alignment between SRE and product priorities, fast
feedback, no cross-team friction.

Weaknesses: SRE-quality varies per team, depending on the embedded
person. Centralised SRE expertise doesn't compound. Hard to scale
across many product teams without losing consistency.

Fits: 100-300-engineer organisations where each product team has
clear ownership and ~1 SRE-skilled engineer is available per team.

### Model 2: centralised SRE function

SREs sit in a separate function with their own reporting line.
They consult with product teams, set reliability standards, run
shared infrastructure components, and operate the critical-path
services.

Strengths: SRE expertise compounds. Standards are consistent across
teams. Critical-path services have dedicated reliability owners.

Weaknesses: cross-team friction when SRE recommendations conflict
with product team priorities. Risk of SRE-as-blocker rather than
SRE-as-enabler.

Fits: 300+-engineer organisations with multiple critical-path
services and a clear platform-engineering function. Often paired
with platform engineering as a sister function.

### Model 3: hybrid (embedded + centralised)

Embedded SREs in product teams handle team-specific reliability.
Centralised SRE function operates shared infrastructure, sets
standards, escalates for cross-team incidents.

Strengths: gets benefits of both. Most common pattern at large
organisations (Google, Netflix, large fintech).

Weaknesses: requires substantial scale to justify the dual
investment. Below 500 engineers, the overhead is hard to amortise.

Fits: 500+-engineer organisations with multiple business units and
substantial reliability-sensitive workload portfolio.

## Where SRE shows up as theatre

Patterns we see in assessments:

### Theatre 1: SLOs exist, but don't affect roadmap

SLOs are documented. Dashboards show SLO compliance. Quarterly
reviews mention SLO trends. But product team prioritisation
proceeds independently of error-budget state. When SLO breach
happens, the response is incident-specific firefighting, not a
roadmap re-prioritisation.

This is observability with SLO labels, not SRE practice. The
distinction matters for buying decisions: organisations in this
state don't need more dashboards, they need a different governance
model.

### Theatre 2: SRE title applied to traditional ops

Operations engineers get retitled "SRE" without a change in job
content. They still spend 90% of their time on ticket queue. They
write no code beyond shell scripts. They have no error-budget
authority.

This is a label change, not a discipline shift. Often happens
during DevOps-to-SRE transitions that didn't get executive sponsor
investment.

### Theatre 3: error budgets defined but never invoked

Error budgets are calculated. Some dashboards show them. But no
process exists for what happens when they burn down. Effectively
the same as no error budget.

Fix: write down the explicit feature-pause protocol that activates
on error budget burn. Get product leadership to sign off on it.
Test it once with an artificial burn-down before assuming it works
in production.

### Theatre 4: incident post-mortems without action items

Post-mortems happen after incidents. They get written. They go
into a folder. No action items are tracked to completion. The same
incident class recurs within 6 months.

Fix: post-mortem action items go into the same backlog as feature
work, with named owners, due dates, and explicit prioritisation.
The post-mortem hasn't worked if its action items don't ship.

## What Aenix SRE engagement delivers

We typically engage with organisations where SRE practice is at
one of three states:

- **Pre-SRE** — no formal SRE function; reliability is incident-
  driven firefighting. Engagement covers function definition,
  hiring plan, initial SLO definition for critical services.
- **Theatre-state SRE** — SRE titles and dashboards exist, but
  discipline hasn't landed. Engagement diagnoses which theatre
  patterns are operating, designs corrections, often involves
  cross-functional governance work.
- **Mature SRE needing expansion** — discipline works in one
  business unit, needs to scale across the organisation or pick up
  new service families (AI/GPU workloads, edge compute, sovereign
  cloud). Engagement focuses on consistency and expertise transfer.

### Workstream 1 — SLO definition

For each critical service, define:
- SLI (Service Level Indicator) — what we measure
- SLO (Service Level Objective) — the target
- Error budget — the difference between 100% and the SLO
- Burn-down policy — what happens when the budget is being consumed
- Recovery threshold — what restores feature-work prioritisation

Aenix doesn't define SLOs for you in isolation — we facilitate the
workshop where engineering and product leadership co-author them.
SLOs without joint ownership don't stick.

### Workstream 2 — Incident response process

Roles (incident commander, scribe, communicator). Severity
classification. Runbook structure. Escalation paths. Blameless
post-mortem template. Action-item tracking.

This is often the highest-leverage workstream — the framework
multiplies the effectiveness of every future incident.

### Workstream 3 — Toil measurement and reduction

Inventory current SRE / ops team work. Categorise: toil (repetitive,
manual, automatable) versus engineering (durable, automation-
generating). Measure toil ratio.

Recommend the 3-5 automations that reduce the most toil. Stage
them by ROI. Hand off to engineering team for implementation; we
support if needed.

### Workstream 4 — Observability stack

Aenix's default observability recommendation: VictoriaMetrics for
metrics, VictoriaLogs for logs, OpenTelemetry for tracing where
applicable. Self-hosted (sovereignty-friendly, lower-overhead than
Prometheus + Loki at scale, no SaaS vendor data-residency leak).

For organisations already on a different stack, we work with what's
in place rather than push replacement. Observability stack matters;
SRE discipline matters more.

### Workstream 5 — Function design

Embedded / centralised / hybrid model recommendation per the
engineering organisation's profile. Headcount planning. Hiring
priorities. Reporting line. Interface with platform engineering
(if separate function) and product teams.

## The Cozystack reliability defaults

For organisations running Ænix Platform editions, SRE practice
gets a head start because the platform ships with SRE-aligned
defaults:

- **Observability built in** — VictoriaMetrics + VictoriaLogs
  pre-deployed, security-focused alert rules curated
- **SLO templates** — per-service SLO templates for managed
  database services, message queues, Kubernetes control plane
- **Failure-injection hooks** — for controlled chaos engineering
  in production without unacceptable customer impact
- **Tenant CRD audit trail** — every change traceable to who, what,
  when, with what change ticket
- **Backup-restore tested patterns** — Velero + per-app PITR with
  documented RPO / RTO

This lets the SRE engagement focus on the organisation-specific
work (function design, SLOs aligned to business priorities,
governance) rather than rebuilding the technical substrate.

## When this engagement fits

Strong fit:

- Engineering organisation 200+ engineers with reliability
  becoming a board-level concern
- Recent incident pattern that exposed reliability gaps
- Regulator-driven RTO/RPO obligations (DORA Article 21, NIS2)
- Existing observability investment but no clear SRE discipline
- Platform engineering function exists or is being built (SRE pairs
  naturally with platform engineering)

Marginal fit:

- Smaller organisations (<100 engineers) — usually embedded SRE
  rather than separate function; Aenix engagement can be lighter
  (workshop + advisory rather than full multi-month engagement)
- Organisations with mature SRE in one BU needing expansion —
  scope can be narrower

Poor fit:

- Pure firefighting culture without engineering leadership
  sponsorship for the discipline shift — SRE engagement without
  executive backing degrades to incident response training, which
  is helpful but not what we sell

## Where to dig deeper

- **[SRE consulting services](/services/sre-consulting/)** — the
  commercial landing
- **[DevOps best practices for 2026](/blog/2026/05/devops-best-practices-2026/)** —
  the eight DevOps practices including SRE
- **[Platform engineering vs DevOps vs SRE](/blog/2026/05/platform-engineering-vs-devops-vs-sre/)** —
  terminology and function design
- **[Cloud engineering disciplines](/blog/2026/05/cloud-engineering-disciplines-2026/)** —
  the seven disciplines that compound

---

*Aenix is the company behind Cozystack — a CNCF project, Kubernetes
Certified Distribution. Our SRE engagements pair naturally with
Cozystack-based platform engineering work, but we engage on SRE
discipline regardless of underlying platform substrate.*
