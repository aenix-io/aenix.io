---
title: "Public-sector sovereign cloud — from procurement framework to running platform"
description: "Long-form companion to the public-sector industry page. For procurement leads, IT directors, and platform engineers at government and quasi-public organisations translating sovereignty mandates and procurement frameworks into a running cloud platform."
date: 2026-05-11
author: "Aenix Team"
type: "article"
topics: ["Public Sector", "Sovereignty", "Compliance", "NIS2", "Cozystack"]
language: "en"
companion_landing: "/industries/public-sector/"
companion_label: "See public-sector industry page →"
quiz:
  title: "Test yourself: public-sector sovereign cloud"
  questions:
    - q: "Which framework is described as the most demanding EU-member-state sovereign-cloud scheme and the reference for several other national initiatives?"
      options:
        - { text: "France: SecNumCloud", correct: true }
        - { text: "Germany: BSI C5", correct: false }
        - { text: "Spain: ENS High", correct: false }
      explanation: "The post identifies SecNumCloud as the strict French national framework — the most demanding EU-member-state sovereign-cloud scheme and the reference standard for several other national initiatives."
    - q: "Why do hyperscaler 'sovereign' offerings most commonly fail the substantive sovereignty test?"
      options:
        - { text: "They lack a regional datacentre presence", correct: false }
        - { text: "They do not support GDPR Articles 44-50", correct: false }
        - { text: "Provider retains access to encryption keys", correct: true }
      explanation: "The article calls this out specifically as the most common point where hyperscaler 'sovereign' offerings fall short — the provider retains operational access to keys, which fails the substantive condition for customer-controlled encryption keys."
    - q: "How far should the supplier chain be documented under Article 28-equivalent provisions across the major frameworks?"
      options:
        - { text: "Only the first hop is required", correct: false }
        - { text: "At least to the second hop", correct: true }
        - { text: "No documentation needed under GDPR", correct: false }
      explanation: "The post explains that Article 28-equivalent provisions expect documentation of the supplier chain at least to the second hop, and that most hyperscaler-based sovereign-cloud arrangements stop at the first hop (the hyperscaler itself)."
    - q: "Which entity does the post identify as Aenix's EU contracting entity?"
      options:
        - { text: "AENIX INC (Delaware)", correct: false }
        - { text: "AENIX s.r.o. (Czechia)", correct: true }
        - { text: "AENIX GmbH (Germany)", correct: false }
      explanation: "The article states that AENIX s.r.o. in Czechia is the EU contracting entity, while AENIX INC in Delaware is the US contracting entity."
    - q: "What is the typical end-to-end timeline from project start to certified production for a public-sector sovereign cloud engagement?"
      options:
        - { text: "12-36 months end-to-end", correct: true }
        - { text: "3-6 months fast-track", correct: false }
        - { text: "6-12 months phased rollout", correct: false }
      explanation: "The post specifies a 12-36 month total timeline from project start to certified production — substantially longer than private-sector engagements because of certification overhead, but compounding into annual recertification afterwards."
---

**Long-form companion to the [public-sector industry page](/industries/public-sector/). For procurement leads, IT directors, and platform engineers at government and quasi-public organisations translating sovereignty mandates and procurement frameworks into a running cloud platform — covering SecNumCloud, BSI C5, EUCS, Kazakhstan procurement-portal sovereignty, APAC variants, and what it takes to satisfy them substantively, not just contractually.**

The public-sector sovereign-cloud conversation in 2026 is more
fragmented than in financial services. There's no single regulation
like DORA driving alignment. Instead, each jurisdiction has its own
framework, often layered on top of GDPR, NIS2, and sectoral overlays.
A multinational public-sector engagement — or even a national one
crossing regions — usually maps against three or more frameworks
simultaneously.

This article walks through what the major frameworks actually require,
where they overlap, where they diverge, and what an architecturally-
sovereign cloud platform delivers across all of them.

## The framework landscape

### EU level

- **EUCS (EU Cybersecurity Certification Scheme for Cloud Services)** —
  emerging EU-wide framework, finalised in 2025. Three assurance levels
  (Basic, Substantial, High). High level requires substantive
  sovereignty controls.
- **NIS2** — applies to public administration as an essential entity
  category (Annex I). Article 21 + Article 23 obligations.
- **GDPR** — personal-data baseline, cross-border-transfer rules under
  Articles 44-50.

### Member-state level

- **France: SecNumCloud** — strict French national framework. The most
  demanding EU-member-state sovereign-cloud scheme. Reference standard
  for several other national initiatives.
- **Germany: BSI C5** — German cloud security catalogue. Now widely
  referenced beyond Germany for DACH operations.
- **Italy: ACN** — National Cybersecurity Agency frameworks; Polo
  Strategico Nazionale infrastructure rules.
- **Spain: ENS High** — Esquema Nacional de Seguridad highest level.

Other member states have variations.

### Central Asia and APAC

- **Kazakhstan** — procurement-mandated sovereignty for public-sector
  workloads via goszakup.gov.kz / mitwork.kz / zakup.sk.kz. Active
  sovereign cloud market: QazCloud, Clever Cloud, regional telco
  sovereign cloud product launches.
- **Singapore: IM8** — Government IT security standards.
- **India: MeitY** — Ministry of Electronics IT, including STQC
  Empanelled CSP framework.
- **Australia: IRAP** — Information Security Registered Assessors
  Program; Protected / Secret levels for government workloads.

### Sectoral overlays

- Defence-adjacent workloads (most jurisdictions): national
  classification overlay
- Healthcare: national health-data sovereignty rules
- Critical-infrastructure: sectoral cybersecurity overlays

## What "substantively sovereign" means

A "sovereign cloud" product that doesn't satisfy all of the following
substantively will fail under audit at the High-assurance level of
most frameworks:

### 1. Data residency at every layer

Not just production storage. Backup, observability, CI/CD artefacts,
managed-service telemetry, cross-border replication, sub-contractor
processing — every layer must respect the residency requirement.

### 2. Customer-controlled encryption keys

HSM-backed for sensitive data classes. Documented rotation. Emergency-
access procedures. Provider personnel cannot extract or copy keys
under any circumstances. This is the most common point where
hyperscaler "sovereign" offerings fall short — the provider retains
operational access to keys, which fails the substantive condition.

### 3. Open-source platform foundation

For transparency, exit-readiness, and auditability. Closed-source
platforms tied to a single vendor's roadmap fail several frameworks'
substantive requirements (even where they pass procurement-policy
checks).

### 4. Supplier-chain transparency

Article 28-equivalent provisions across the frameworks expect
documentation of the supplier chain at least to the second hop. Most
hyperscaler-based sovereign-cloud arrangements stop at the first hop
(the hyperscaler itself).

### 5. Air-gap deployment option

For the most sensitive workloads — classified, defence-adjacent,
healthcare-with-strict-residency. Updates flow through controlled
channels (customer-side artefact registry, manual approval). Most
sovereign-cloud frameworks at High level require air-gap support as
an architectural option even if not used by every workload.

### 6. Audit-trail completeness in standard formats

Logs in standard formats (Syslog, CEF, OpenTelemetry) that the
customer's audit team can consume independently of the platform
vendor. Tamper-evident. Retention per the longest applicable
regulatory requirement.

### 7. No phone-home telemetry

Telemetry that leaves the customer perimeter must be opt-in and
explicitly documented. Many hyperscaler-managed cloud products have
non-optional telemetry channels that fail this criterion.

### 8. Operational independence under sovereign jurisdiction

Provider personnel access logged and time-limited. Sovereign
jurisdiction for the support entity (Aenix has AENIX s.r.o. in
Czechia for EU contracts and AENIX INC in Delaware for US contracts).
No cross-jurisdictional support routing for sovereignty-sensitive
workloads.

## What Cozystack-based architecture delivers across frameworks

The architectural pattern that satisfies all major frameworks
simultaneously:

- **Open-source platform** — Cozystack under Apache 2.0, CNCF Project,
  vendor-neutral substrate. Customer can audit, modify, or replace
  the platform vendor.
- **Customer-controlled keys** — External Secrets Operator backed by
  customer HSM; Aenix never holds keys.
- **Air-gap support** — documented and used by classified-data and
  defence-adjacent customers.
- **Self-hosted observability** — VictoriaMetrics + VictoriaLogs in
  jurisdiction; no SaaS-observability residency leak.
- **Customer-controlled identity** — Keycloak / Active Directory /
  national IdP integration; Aenix never holds production credentials.
- **Multi-tenant Tenant CRD** — strong isolation per data class /
  business unit / sectoral overlay.
- **Audit-isolated environments** — separate clusters for production,
  audit, and forensic copy.
- **EU jurisdiction support entity** — AENIX s.r.o. (Czechia).

The architectural pattern is the same; the certification work is
framework-specific. For SecNumCloud-tier engagements, the customer
typically engages a certified auditor; Aenix provides the architecture
and documentation deliverables, the customer runs the audit cycle.

## Procurement realities

Public-sector engagements are procurement-framework-driven in a way
that private-sector engagements are not. A few practical realities:

### Tender response

Public-sector RFPs typically specify which frameworks must be
satisfied (SecNumCloud High, BSI C5, EUCS Substantial, etc.). The
response must demonstrate substantive compliance, not just intent.
Aenix engagement model includes tender-response support, with named
references from prior public-sector engagements where allowed.

### Multi-year framework agreements

Many public-sector engagements run through framework agreements with
specific compliance and exit clauses. Aenix's commercial entity
(AENIX s.r.o. in Czechia for EU; AENIX INC in Delaware for US) is
the contracting entity; engagement structure adapts to framework-
agreement requirements.

### Aenix is not a hyperscaler — that's the point

Several public-sector mandates explicitly require non-hyperscaler
sovereign provision. Aenix's open-core model — customer hardware,
customer keys, customer operational control, optional Aenix support
— fits these mandates structurally rather than via contractual
workarounds.

## Engagement phases for public-sector

### Phase 0 — Framework scoping

Confirm applicable frameworks. Identify the highest-bar one (usually
SecNumCloud High for French, BSI C5 for German, EUCS High for EU-wide,
Kazakhstan procurement-portal sovereignty for KZ). Design the
architecture against the highest bar; map down to the others.

### Phase 1 — Architecture and procurement-response work

Produce procurement-response artefacts: technical proposal, framework
compliance mapping, reference architecture, sample evidence catalogue.
Typical duration: 2-4 months.

### Phase 2 — Phase-1 platform build (per Public Cloud / Enterprise
Edition models)

Multi-DC deployment, air-gap option enabled if applicable, sovereign
identity integration, audit-isolated environments. 6-18 months.

### Phase 3 — Certification cycle

Customer engages accredited auditor; Aenix provides architecture
documentation, control mapping, evidence catalogue. Aenix engineers
participate in technical interviews with the auditor where allowed.
Typical certification cycle: 6-12 months parallel to Phase 2.

### Phase 4 — Production operations

Customer team operates the platform under Aenix advisory + Tier-3
SLA. Annual recertification cycle (most frameworks).

Total timeline: 12-36 months from project start to certified
production. Substantially longer than private-sector engagements due
to certification overhead, but the certification value compounds —
once certified, the platform retains certification with annual
recertification rather than per-engagement.

## Aenix's existing public-sector posture

We currently operate within established EU and Central Asia
public-sector procurement frameworks. Specific named engagements
remain confidential under procurement-confidentiality rules; named
case studies in public sector typically follow a 3-5 year
publication lag.

What we will say publicly: Aenix has multi-year engagements with
Kazakhstan procurement-portal-listed sovereign cloud products, EU
member-state regional digitalisation programmes, and tier-1 European
defence-adjacent infrastructure. Concrete references available
under NDA in the discovery call.

## When this engagement model fits

Strong fit:

- National sovereign cloud initiatives (public, public-private
  partnership, sovereign cloud operator)
- EU member-state regional / sectoral cloud programmes
- Defence-adjacent or classified-data hosting with air-gap requirement
- Healthcare sovereign cloud at national or regional level
- Education / research consortia with multi-decade planning horizon

Marginal fit:

- Single ministry / agency procurement with smaller scope — may fit
  Enterprise Edition rather than Public Cloud Edition

Poor fit:

- Workloads where hyperscaler-managed cloud is already framework-
  compliant (some specific procurement frameworks)
- Organisations without sovereignty pressure (use private-sector
  edition matching workload profile)

## Where to dig deeper

- **[Public-sector industry page](/industries/public-sector/)** — the
  commercial landing
- **[Data sovereignty services](/solutions/data-sovereignty/)** —
  buyer-trigger sovereignty landing
- **[NIS2 compliance services](/solutions/nis2-compliance/)** —
  for the NIS2 overlay (public administration is Annex I)
- **[Sovereign Cloud Builder services](/services/sovereign-cloud-builder/)** —
  the engagement type
- **[Build sovereign cloud — playbook for EU and Central Asia](/blog/2026/05/build-sovereign-cloud-eu-and-central-asia/)** —
  EU + KZ sovereign cloud playbook
- **[Data residency requirements in 2026](/blog/2026/05/data-residency-requirements-2026/)** —
  per-layer residency walkthrough

---

*Aenix is the company behind Cozystack — a CNCF project, Kubernetes
Certified Distribution. AENIX s.r.o. (Czechia) is the EU contracting
entity; AENIX INC (Delaware) is the US contracting entity. Engineering
teams across the EU and Central Asia.*
