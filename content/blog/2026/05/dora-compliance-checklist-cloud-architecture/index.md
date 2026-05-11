---
title: "A DORA compliance checklist for cloud infrastructure — framework, controls, and what to demonstrate in 2026"
description: "The Digital Operational Resilience Act (DORA) has been in force since 17 January 2025. This is a working DORA compliance checklist and architectural..."
date: "2026-05-01"
author: "Aenix Team"
type: "article"
topics: ["DORA", "Financial Services", "Compliance"]
language: "en"
companion_landing: "/solutions/dora-compliance/"
quiz:
  title: "Test yourself: DORA for cloud architects"
  questions:
    - q: "When did DORA come into force in the EU?"
      options:
        - { text: "17 October 2024", correct: false }
        - { text: "17 January 2025", correct: true }
        - { text: "1 January 2026", correct: false }
      explanation: "DORA (Regulation (EU) 2022/2554) has been in force since 17 January 2025. NIS2 was transposed across member states from 17 October 2024 — easy to confuse."
    - q: "Which DORA pillar concentrates the most architectural work for cloud teams?"
      options:
        - { text: "Pillar 1 — ICT risk management", correct: false }
        - { text: "Pillar 3 — operational resilience testing", correct: false }
        - { text: "Pillar 4 — management of ICT third-party risk (Articles 28–44)", correct: true }
        - { text: "Pillar 5 — information sharing", correct: false }
      explanation: "The article calls Pillar 4 \"where most of the new technical work concentrates\" — every hyperscaler, SaaS, and managed service in the stack becomes an \"ICT third-party service provider\" with Article 28–44 obligations."
    - q: "For a critical-function arrangement, which exit-readiness expectation is increasingly enforced by supervisors?"
      options:
        - { text: "A documented exit policy on file", correct: false }
        - { text: "A full or partial exit drill within the past 24 months", correct: true }
        - { text: "Quarterly exit-cost recalculations", correct: false }
        - { text: "A signed migration contract with a backup provider", correct: false }
      explanation: "Article 28(8) requires an exit plan; supervisors increasingly expect at least a partial exit drill within the past 24 months for critical-function arrangements. A plan that has never been rehearsed makes the time-to-exit fictional."
    - q: "In the four typical gaps section, where does the article say data residency most often quietly leaks outside the regulator perimeter?"
      options:
        - { text: "In the production database", correct: false }
        - { text: "In the SaaS observability stack collecting application logs", correct: true }
        - { text: "In customer-facing CDN nodes", correct: false }
        - { text: "In the CI/CD compute layer", correct: false }
      explanation: "Gap 1 — observability data quietly leaves the regulator's perimeter. The production database may be compliant; the SaaS observability stack collecting logs from it usually is not, and DORA Article 28's data-residency expectations apply to the entire ICT third-party arrangement."
    - q: "How frequently does DORA require threat-led penetration testing (TLPT) for significant entities?"
      options:
        - { text: "Annually", correct: false }
        - { text: "Every three years", correct: true }
        - { text: "Every five years", correct: false }
        - { text: "Only after a major incident", correct: false }
      explanation: "For significant entities, TLPT is required every three years. Other in-scope entities run scenario-based resilience testing at least annually."
---

**The Digital Operational Resilience Act (DORA) has been in force since 17 January 2025. This is a working DORA compliance checklist and architectural framework for the platform engineers, cloud architects, and infrastructure leads who now have to translate DORA's expectations into running cloud systems. If you're looking for a partner to run a DORA-aligned readiness engagement, the [DORA compliance services page](/solutions/dora-compliance/) covers our offer; this article is the practical detail behind it.**

Across the EU's financial sector — banks, insurers, investment firms, payment institutions, crypto-asset service providers, and the third-party ICT providers serving them — DORA replaced a fragmented patchwork of supervisory expectations with a single, directly applicable regulation.

Most coverage of DORA so far has concentrated on policy and procedural requirements: incident reporting timelines, governance, risk management process. That work matters, and your CISO and legal team have been doing it for two years.

This article is for the people on the other side of that conversation — the platform engineers, cloud architects, and infrastructure leads who now have to translate DORA's expectations into running systems. Specifically: what does DORA require of your *cloud infrastructure*, what does a DORA-compliant cloud architecture actually look like, and where do current public-cloud setups typically fall short?

## What DORA is, very briefly

DORA (Regulation (EU) 2022/2554) sets binding rules across five areas:

1. **ICT risk management** — governance, identification, protection, detection, response, recovery.
2. **ICT-related incident management, classification, and reporting** — including major incident notifications to competent authorities.
3. **Digital operational resilience testing** — including, for significant entities, threat-led penetration testing (TLPT) every three years.
4. **Management of ICT third-party risk** — Articles 28-44, the part most relevant to cloud.
5. **Information and intelligence sharing** — voluntary frameworks for sharing cyber-threat intelligence.

It applies to a broad set of in-scope financial entities and, indirectly, to ICT third-party service providers serving them. From October 2024, the European Supervisory Authorities (ESAs) finalized a long set of Regulatory Technical Standards (RTS) and Implementing Technical Standards (ITS) that put numerical and structural detail on the framework. Some of these continue to be refined.

For practical purposes, DORA enforcement is *now*. Compliance is not a future planning exercise.

## Why cloud architecture sits at the centre of DORA

Of the five DORA pillars, three apply directly to the cloud infrastructure layer:

- **Pillar 1 (ICT risk management)** — your cloud setup is "ICT" by definition. Detection, recovery, segmentation, and resilience controls live there.
- **Pillar 3 (operational resilience testing)** — TLPT and resilience scenarios are run against the live infrastructure. The architecture has to make resilience demonstrable, not just claimed.
- **Pillar 4 (third-party risk)** — every hyperscaler, SaaS, and managed service in your stack is an "ICT third-party service provider" that brings DORA Article 28-44 obligations.

Pillar 4 is where most of the new technical work concentrates. In practice, DORA forces a financial entity to look at every ICT supplier — including the public-cloud platforms its workloads run on — through a contractual, architectural, and exit-readiness lens.

## DORA Article 28 and the supplier-risk dimension

Article 28 sets the general principles for ICT third-party risk management. Several of its requirements have direct architectural implications:

- **Risk assessment before contracting** — the financial entity must assess concentration risk, sub-contractor risk, and the criticality of services received from each ICT third party.
- **Monitoring throughout the contract** — ongoing assessment of performance, security posture, and resilience of the third-party arrangement.
- **Exit strategies** — for arrangements supporting *critical or important functions*, a documented exit plan with feasibility tests.
- **Contractual content** — Article 30 specifies clauses that must be present, including SLAs, audit rights, sub-contracting rules, security and resilience requirements, and termination grounds.

Then Article 28(7), and the related RTS, target **concentration risk** specifically. A financial entity may not concentrate critical-function ICT supply on a single third party, or on multiple third parties that share underlying infrastructure dependencies, where this concentration would impair the entity's resilience.

For most banks and insurers operating in 2026, that wording maps directly onto a familiar question: *we run our critical workloads in one hyperscaler region — does that satisfy DORA?* The honest answer is "depends" — but the work to demonstrate it didn't exist before DORA, and is non-trivial.

## What "DORA-compliant cloud infrastructure" actually means

There is no DORA certification stamp. DORA defines obligations that must be satisfied; how a financial entity demonstrates that satisfaction is open, subject to ESAs' supervisory expectations and the entity's own risk profile.

That said, supervisors and most large financial entities have converged on a similar set of architectural attributes that a DORA-aligned cloud setup should have.

### 1. Workload portability across providers

A *critical or important function* must have a documented, tested exit plan. In practice this means the workload either runs in a way that can be moved between providers within a defined time window, or the financial entity accepts higher residual concentration risk and documents why.

Architectural implications:
- Workloads use platform abstractions that exist on at least two cloud providers (Kubernetes, KubeVirt, S3-compatible storage, standard relational databases) rather than provider-proprietary services.
- Data formats and APIs are standardized.
- Identity, secrets, and observability are not locked to a single provider's platform service.

### 2. Concentration-risk transparency

The financial entity must be able to enumerate, for each critical function, the underlying ICT supply chain — including sub-contractors and shared infrastructure dependencies (e.g., two SaaS providers running on the same hyperscaler region).

Architectural implications:
- Service catalogue maps each critical function to its underlying infrastructure layer.
- Multi-region or multi-provider architecture for the most critical workloads, where the regulator's risk assessment requires it.
- Documentation of where each data class actually resides — including backups, observability data, and CI/CD artifacts.

### 3. Demonstrable resilience

Operational resilience must be tested, not just declared. For significant financial entities, TLPT exercises every three years inject real attack scenarios into live production environments. For all in-scope entities, scenario-based resilience testing is expected at least annually.

Architectural implications:
- Architecture supports realistic failure injection (chaos engineering) without unacceptable customer impact.
- Recovery time and recovery point objectives are testable, with telemetry to prove them.
- Backup and disaster recovery work across regions and, ideally, across providers — not just within a single hyperscaler region.

### 4. Sovereignty and supervisory access

Supervisors must have access to the information required to oversee the financial entity's ICT arrangements — including arrangements that involve cross-border data transfers. For some critical functions and certain regulators, that means data must remain in EU member states.

Architectural implications:
- Data residency is enforceable at the storage, backup, observability, and CI/CD-artifact layers — not just at the production storage layer.
- Encryption posture is documented and key custody is the financial entity's responsibility, not the cloud provider's.
- Logging and audit trails are exportable to formats supervisors can consume.

### 5. Audit and exit-readiness

Article 30 requires audit rights for the financial entity and the supervisor. Article 28(8) requires exit plans with documented feasibility for critical-function arrangements.

Architectural implications:
- Architecture supports independent audit — security, performance, resilience — by parties other than the cloud provider's own first-line.
- Exit drills (full or partial) have been performed at least once and documented.
- The exit plan names the destination architecture, the migration sequence, and the data-portability mechanism.

## Where current cloud setups typically fall short

In our work running platform readiness assessments for financial-services organizations across the EU, four gaps recur in nearly every engagement.

### Gap 1 — observability data quietly leaves the regulator's perimeter

The production database may be compliant. The SaaS observability stack collecting application logs from that database probably isn't, and the financial entity often cannot say with certainty where those logs are processed, replicated, or retained. DORA Article 28's data-residency expectations apply to the entire ICT third-party arrangement — observability tools included.

### Gap 2 — the exit plan exists on paper but has never been tested

Article 28(8) requires an exit plan; many financial entities have one. But if the plan has never been rehearsed, the time-to-exit is fictional. Supervisors increasingly expect at least a partial exit drill within the past 24 months for critical-function arrangements.

### Gap 3 — concentration risk is treated as a procurement question, not an architecture question

Concentration risk often gets flagged, then mitigated by contractual diversity language — without any architectural change to how workloads actually depend on a single provider's compute, storage, identity, and network. Article 28 requires the substantive condition of resilience, not just the procurement formality.

### Gap 4 — sub-contractor risk is invisible

Hyperscalers run on data centres and connectivity providers; SaaS providers run on hyperscalers; managed services depend on shared underlying infrastructure. Article 30(2)(a) requires the financial entity to know the chain. Most do not, beyond the first hop.

## A DORA compliance checklist for cloud architecture

For platform engineering and infrastructure leads, this is the working checklist we use during a DORA-aligned readiness assessment. It maps to the requirements above, in plain operational language.

### Workload portability and exit-readiness
- [ ] Each critical-function workload has a named exit destination (not "another provider" but "this specific architecture on this specific provider/on-prem").
- [ ] Each critical-function workload uses platform abstractions that exist on ≥2 providers.
- [ ] At least one full or substantial exit drill has been performed for each critical-function arrangement in the last 24 months.
- [ ] Exit-time estimates are calibrated against the drill, not against a tabletop.
- [ ] Data-portability path is documented at the schema, format, and tooling level.

### Concentration risk
- [ ] Service catalogue maps each critical function to the cloud provider, region, and shared dependencies.
- [ ] Concentration-risk position is documented per critical function and reviewed annually.
- [ ] Where concentration is accepted, the residual-risk justification names the mitigations (multi-region, multi-AZ, multi-provider, on-prem fallback).
- [ ] Sub-contractor chain is mapped to the second hop for all critical-function ICT third parties.

### Operational resilience
- [ ] Recovery time objective (RTO) and recovery point objective (RPO) are documented per critical function.
- [ ] RTO and RPO are tested annually with results reported.
- [ ] Production architecture supports controlled failure injection without unacceptable customer impact.
- [ ] Telemetry exists to prove RTO and RPO during real or simulated failure.
- [ ] Backup and DR work across at least two regions; for the most critical functions, across two providers or to on-prem.

### Sovereignty and supervisory access
- [ ] Data-residency stance is documented per data class — production, backup, observability, CI/CD artifacts.
- [ ] Encryption is at-rest, in-transit, and (for the most sensitive data) in-use.
- [ ] Encryption keys are under the financial entity's control, with documented rotation and emergency access.
- [ ] Audit logs are exportable in standard formats, retained per regulator's requirement, and tamper-evident.
- [ ] Supervisor access process is documented and tested.

### Third-party risk and contracting
- [ ] All ICT third-party arrangements are inventoried, categorized as critical / non-critical, and reviewed.
- [ ] Article 30 contractual content is in place for all critical-function arrangements.
- [ ] Continuous monitoring of third-party performance and security posture is in place.
- [ ] Concentration-risk thresholds are agreed and breach-detection is automated where possible.

A real-world DORA readiness assessment goes deeper than this checklist on each line, but the checklist captures the architectural surface area an infrastructure lead will be asked about.

## How Cozystack and similar Kubernetes-native architectures help

A DORA-aligned cloud architecture does not require a specific product. It requires the architectural attributes above — portability, concentration-risk transparency, testable resilience, sovereignty, audit-readiness.

Several architectural patterns make those attributes structurally easier rather than reliant on heroic operational discipline. Kubernetes-native virtualization platforms are one of them; Cozystack, the open-source CNCF Project Aenix builds, is one example.

What that pattern does for DORA:

- **Portability is structural.** Workloads run as KubeVirt VMs and standard Kubernetes resources. The exit destination is "the same Kubernetes API, on different underlying hardware or cloud" — a substantially smaller migration than from a hyperscaler-proprietary service.
- **Sovereignty is in the architecture, not in policy.** The platform runs on the financial entity's chosen hardware, in the chosen jurisdiction, with the entity holding encryption keys and root cluster access. There is no provider-controlled control plane to reason about.
- **Concentration risk is reduced** — the cloud provider relationship becomes hardware and bandwidth, not platform services. Sub-contractor mapping shortens.
- **Operational resilience is testable** — the same Kubernetes primitives that allow controlled failure injection (chaos engineering) in development apply in production.
- **Audit and supervisory access** are simpler because the financial entity owns the platform stack: telemetry, audit trails, configuration history, and change-management records all live in the entity's tooling.

Note what this does *not* claim: it does not say a Cozystack-based architecture is automatically DORA-compliant, or that a hyperscaler-based architecture cannot be. Both can be made to satisfy DORA's substantive requirements. The difference is in how much of the work is architectural-and-then-routine versus contractual-and-then-continuously-monitored.

## How to assess where you are

DORA compliance is not "have we written a policy" but "can we demonstrate each control to a supervisor with evidence from the running system." Most financial entities want to know, before committing to a multi-year remediation, where they actually stand.

A focused DORA-aligned platform readiness assessment, run against your existing cloud architecture, covers four workstreams:

1. **Inventory and platform maturity** — workload-level mapping, including which workloads support critical functions.
2. **DORA gap analysis** — control-by-control review of cloud-related DORA requirements against current architecture.
3. **Concentration and exit-feasibility** — supplier-chain mapping and time-to-exit calibration.
4. **Resilience-testing readiness** — whether your architecture supports the testing supervisors expect.

Aenix runs this as a 14- or 28-day engagement. The output is a written report that names, per control: where you stand, what's missing, what an architecture-level fix looks like, and what an implementation roadmap would sequence. See the **[Platform Readiness Assessment page](/services/platform-readiness-assessment/)** for the methodology in detail.

## Where this sits in the broader compliance picture

DORA does not stand alone. In practice, financial entities operating in the EU are addressing DORA in parallel with:

- **NIS2** — the EU directive on cybersecurity for essential and important entities, transposed across member states with sector-specific scoping. Many of NIS2's controls overlap with DORA Pillar 1 and Pillar 4; a single architectural posture can satisfy both, with mapping work.
- **GDPR** — data residency and processing rules that pre-date DORA but interact with it on cross-border arrangements.
- **Sectoral rules** — banking secrecy, insurance regulation, payments services. These vary by member state and overlay DORA without replacing it.
- **Sovereign-cloud initiatives** — France's SecNumCloud, Germany's BSI C5, the EU's emerging EUCS scheme. Where applicable, these add specific certification expectations to DORA's outcome-based requirements.

A useful working principle: design for the most demanding overlay, then map the same controls back to DORA. The architectural surface is largely shared.

## Timing — why this matters in 2026 specifically

DORA's regulatory technical standards continue to be refined; ESA guidance is published in waves. Supervisor expectations are sharpening. The exam cycle for major financial entities — including TLPT exercises — is now reaching architectures that were assumed compliant when DORA went live in January 2025 but had never been tested under realistic regulator scrutiny.

For an infrastructure leader in 2026, the practical answer is to treat DORA-aligned architecture as a non-optional layer of the platform, planned and tested, rather than as a once-a-year compliance project.

---

## Want to dig deeper?

- **[Platform Readiness Assessment — the engagement that includes a DORA workstream](/services/platform-readiness-assessment/)**
- **[Data sovereignty in 2026 — what European and APAC enterprises actually need](/solutions/data-sovereignty/)**
- **[Cozystack — the open-source platform we typically recommend for sovereign architectures](/products/cozystack/)**

---

*Aenix is the company behind Cozystack — a CNCF Project, Kubernetes Certified Distribution, OpenSSF Best Practices. We run DORA-aligned platform readiness assessments and platform engineering programs for financial-services organizations across the EU.*

<!--
SEO meta description (≤155 chars):
"DORA compliance for cloud infrastructure in 2026: what financial entities must demonstrate, where current setups fall short, a control-level checklist."

OG image: 1200×630 — DORA / EU shield + cloud architecture grid

Slug: /blog/2026/05/dora-compliance-cloud-infrastructure/

Hreflang setup (when DE locale launches):
- en: /blog/2026/05/dora-compliance-cloud-infrastructure/
- de: /de/blog/2026/05/dora-compliance-cloud-infrastruktur/
- x-default: en

Canonical: self.

Internal-link strategy:
- Article → /services/platform-readiness-assessment/ — primary CTA destination
- Article → /solutions/data-sovereignty/ — adjacent trigger
- Article → /products/cozystack/ — underlying tech
- Future: /solutions/dora-compliance/ landing — when built

Word count target: 2500-3500. Actual: ~3100. On target.

Keyword cannibalization check:
- This article: "dora compliance" parent
- Platform Readiness Assessment article: "cloud assessment framework" + "cloud migration assessment" parent — DIFFERENT
- Platform Readiness Assessment landing: "cloud readiness assessment" parent — DIFFERENT
- VMware alternative landing: "vmware alternative" parent — DIFFERENT
- VMware alternative article: "vmware replacement" parent — DIFFERENT

No conflicts. Each artifact owns a clearly distinct parent topic.
-->
