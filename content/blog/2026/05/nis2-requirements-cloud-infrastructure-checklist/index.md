---
title: "NIS2 requirements for cloud infrastructure — a checklist for in-scope entities in 2026"
description: "This is the long-form companion to our NIS2 compliance services page. It walks through what NIS2 actually requires of your cloud architecture — by Article,..."
date: "2026-05-01"
author: "Aenix Team"
type: "article"
topics: ["NIS2", "Financial Services", "Compliance"]
language: "en"
companion_landing: "/solutions/nis2-compliance/"
quiz:
  title: "Test yourself: NIS2 for cloud infrastructure"
  questions:
    - q: "When was NIS2 transposition into national law due across EU member states?"
      options:
        - { text: "17 January 2025", correct: false }
        - { text: "17 October 2024", correct: true }
        - { text: "1 January 2026", correct: false }
      explanation: "NIS2 transposition was due by 17 October 2024 (some member states ran late). DORA — easy to confuse — went into force on 17 January 2025."
    - q: "In the NIS2 incident-reporting timeline (Article 23), what is the deadline for the first \"early warning\"?"
      options:
        - { text: "24 hours of becoming aware", correct: true }
        - { text: "72 hours of becoming aware", correct: false }
        - { text: "One month of becoming aware", correct: false }
      explanation: "Three-stage process: early warning within 24h, incident notification within 72h, final report within one month. The 24h alert is usually the tightest constraint and forces investment in detection telemetry."
    - q: "Cloud providers and datacenter providers are classified under NIS2 as which kind of entity?"
      options:
        - { text: "Important entities (Annex II)", correct: false }
        - { text: "Essential entities under Digital Infrastructure (Annex I)", correct: true }
        - { text: "Out of scope", correct: false }
      explanation: "Annex I (essential entities) lists Digital Infrastructure including IXPs, DNS service providers, TLD name registries, cloud providers, datacenter providers, CDN providers, MSPs, MSSPs, and public electronic communications services."
    - q: "In Article 21 → architecture mapping, which control is named for service-to-service authentication?"
      options:
        - { text: "Username + password rotation", correct: false }
        - { text: "Workload identity via SPIFFE/SPIRE or equivalent", correct: true }
        - { text: "Anonymous internal traffic", correct: false }
      explanation: "Under \"Access control / human resources\" the architecture mapping names workload identity (SPIFFE/SPIRE or equivalent) for service-to-service auth. Privileged access management, joiner-mover-leaver automation, and asset register completeness round out the control area."
    - q: "How does NIS2 typically apply for entities below the size threshold but in specific roles like DNS service providers?"
      options:
        - { text: "Always exempt", correct: false }
        - { text: "Some entities are in scope regardless of size — e.g. DNS service providers, TLD registries, MSPs", correct: true }
        - { text: "Only above 500 employees", correct: false }
      explanation: "Entity classification depends on size thresholds AND sector-specific criteria. Some entities are in scope regardless of size — explicitly DNS service providers, TLD registries, MSPs."
---

**This is the long-form companion to our [NIS2 compliance services page](/solutions/nis2-compliance/). It walks through what NIS2 actually requires of your cloud architecture — by Article, by control, with a working checklist for the engineers and architects implementing it.**

The Network and Information Security Directive 2 (Directive (EU) 2022/2555 — NIS2) replaced the original NIS Directive in 2023. Transposition into national law was due by 17 October 2024. Some EU member states completed transposition on time; others ran late. Either way, by mid-2025 NIS2 is operational across the EU, with competent authorities in each member state and the European Cybersecurity Agency (ENISA) playing a coordination role.

For in-scope entities — and the ICT third parties serving them — the architectural work is concrete, even if the regulatory text is broad.

## Who is in scope

NIS2 applies to two categories of entities, with sectoral scoping:

### Essential entities (Article 3, Annex I)
- Energy (electricity, gas, oil, district heating/cooling, hydrogen)
- Transport (air, rail, water, road)
- Banking
- Financial market infrastructures
- Healthcare
- Drinking water
- Wastewater
- **Digital infrastructure** — IXPs, DNS service providers, TLD name registries, cloud providers, datacenter providers, CDN providers, MSPs, MSSPs, public electronic communications networks/services
- ICT services management (B2B)
- Public administration (central + at member state's discretion regional)
- Space

### Important entities (Article 3, Annex II)
- Postal and courier services
- Waste management
- Chemical (manufacture, production, distribution)
- Food production, processing, distribution
- Manufacturing of critical products (medical devices, computers, electronic equipment, machinery, motor vehicles)
- **Digital service providers** — online marketplaces, search engines, social networking platforms
- Research

Entity classification depends on size thresholds (medium/large enterprise) and sector-specific criteria. Some entities are in scope regardless of size (e.g., DNS service providers, TLD registries, MSPs).

## Article 21 — risk management measures

The substantive heart of NIS2 cybersecurity requirements. Member states must ensure essential and important entities take appropriate technical, operational, and organisational measures across:

1. Policies on risk analysis and information system security
2. Incident handling
3. Business continuity (backup management, disaster recovery, crisis management)
4. Supply chain security (including security-related aspects in relationships with direct suppliers and service providers)
5. Security in network and information systems acquisition, development, and maintenance (incl. vulnerability handling and disclosure)
6. Policies and procedures to assess effectiveness of cybersecurity risk-management measures
7. Basic cyber hygiene practices and cybersecurity training
8. Policies and procedures regarding the use of cryptography and, where appropriate, encryption
9. Human resources security, access control policies, asset management
10. Use of multi-factor authentication / continuous authentication, secured voice/video/text comms, secured emergency comms

For cloud architecture, that maps to specific controls.

## Article 21 → architecture mapping

### Risk analysis and information system security
- Risk register documented per critical workload
- Threat model annual review
- Network segmentation (zero-trust by default)
- Pod Security Standards / Kubernetes Network Policies enforced

### Incident handling
- 24×7 detection capability for critical workloads
- Documented incident response with named roles
- Blameless post-mortems with action items

### Business continuity
- Backup with tested recovery (Velero + per-app PITR for databases)
- DR site in separate region or jurisdiction
- BCP exercises at least annually with documented results
- RTO/RPO documented and tested per critical workload

### Supply chain security
- ICT third-party inventory complete
- Critical-function dependencies mapped to second hop
- Contractual security clauses in critical-function agreements
- Continuous monitoring of supplier security posture
- Concentration-risk position documented

### Acquisition, development, maintenance security
- SAST / DAST in CI
- Container image scanning + SBOM
- Vulnerability handling SLA defined and met
- Disclosure policy published

### Effectiveness assessment
- Annual external assessment recommended for essential entities
- Internal review quarterly
- Metrics tracked over time

### Cyber hygiene and training
- Mandatory cybersecurity training for all staff
- Phishing simulation
- Privileged-user training
- Management body cybersecurity training (Article 20)

### Cryptography
- TLS 1.2+ for transit
- Encryption at rest for sensitive data classes
- Customer-controlled keys for the most sensitive workloads
- Key rotation and emergency access documented

### Access control / human resources
- Workload identity (SPIFFE/SPIRE or equivalent)
- Privileged access management
- Joiner-mover-leaver process automated where possible
- Asset register complete and current

### MFA / secured comms
- MFA for all privileged accounts
- MFA for end-user access where reasonable
- Secured comms for incident response

## Article 23 — incident reporting

NIS2 mandates a three-stage incident reporting process for significant incidents:

- **Early warning** within 24 hours of becoming aware
- **Incident notification** within 72 hours, including initial assessment of severity, impact, and (where applicable) cross-border implications
- **Final report** within one month, with detailed description, type of threat or root cause, applied/ongoing mitigation, and (where applicable) cross-border impact

For cloud architecture this requires:
- Detection telemetry capable of recognizing significant incidents at a 24-hour timeline (often the bottleneck — alert fatigue masks signal)
- Incident classification process (what counts as significant?)
- Incident response procedures with clear escalation triggers
- Communication channels with national CSIRT / competent authority pre-established
- Documentation discipline so the 72-hour and one-month reports are evidence-based

## Article 28 — registration of essential / important entities

Many essential and important entities must register with their national competent authority. The architecture decision: ensure your registration data (including DNS, IP ranges, contact details) reflects what's actually deployed.

## Article 30 — coordinated vulnerability disclosure

Member states must designate a CSIRT to coordinate vulnerability disclosures. Entities should publish a vulnerability disclosure policy. Architecture: a structured CSAF feed or Hugo-equivalent for security advisories, with named contact points.

## A working NIS2 cloud architecture checklist

Use this during architecture review or production-readiness assessment.

### Risk management
- [ ] Risk register documented per critical workload
- [ ] Annual risk review completed
- [ ] ICT asset register complete and current
- [ ] Threat model documented
- [ ] Cybersecurity policy approved by management body

### Incident handling
- [ ] 24×7 detection capability for critical workloads
- [ ] Documented incident response with named roles
- [ ] Incident classification process documented
- [ ] Pre-established communication channels with CSIRT/authority
- [ ] Reporting templates aligned to 24/72-hour/one-month structure
- [ ] Annual incident-response exercise

### Business continuity
- [ ] BCP plan documented per critical workload
- [ ] RTO/RPO documented per critical workload
- [ ] Backup tested with recovery in past 12 months
- [ ] DR site operational and tested
- [ ] BCP exercise within past 12 months

### Supply chain
- [ ] ICT third-party inventory complete
- [ ] Critical-function dependencies mapped to second hop
- [ ] Contractual security clauses in critical-function agreements
- [ ] Continuous supplier monitoring documented
- [ ] Concentration-risk position documented

### Cybersecurity hygiene
- [ ] MFA for privileged accounts (universal)
- [ ] MFA for end-user access where reasonable
- [ ] Cybersecurity training mandatory for all staff
- [ ] Management body trained
- [ ] Privileged-access management deployed
- [ ] Joiner-mover-leaver automated

### Vulnerability management
- [ ] CVE response SLA documented
- [ ] SAST/DAST in CI pipelines
- [ ] Container scanning + SBOM
- [ ] Disclosure policy published
- [ ] Coordinated vulnerability response process

### Cryptography
- [ ] TLS 1.2+ for transit
- [ ] Encryption at rest for sensitive data
- [ ] Customer-controlled keys where applicable
- [ ] Key rotation documented

### Audit and effectiveness
- [ ] Annual external assessment (essential entities)
- [ ] Quarterly internal review
- [ ] Audit log retention meets longest applicable requirement
- [ ] Metrics tracked over time
- [ ] Management body kept informed

## Common architectural failures

### Failure 1: detection telemetry tuned for performance, not security
Observability built for SLO compliance; not tuned to alert on security-significant events. NIS2 requires the latter.

### Failure 2: BCP plan never tested
NIS2 requires BCP. Most plans have never been exercised under realistic failure.

### Failure 3: supply chain visible only to first hop
Article 21(2)(d) requires supply-chain security including direct suppliers and service providers. Most entities cannot enumerate beyond first hop.

### Failure 4: incident-reporting process undocumented
24/72-hour/one-month timeline is tight. Without pre-established process and templates, the first real incident becomes a scramble.

### Failure 5: management body untrained
Article 20 requires management body to follow cybersecurity training. Many compliance programs treat NIS2 as IT-only.

## How to assess where you stand

A structured NIS2 readiness assessment is the cheapest insurance before regulator dialog. Aenix runs this as part of **[Platform Readiness Assessment](/services/platform-readiness-assessment/)** with sovereignty/regulator workstream emphasized.

For details see the **[NIS2 compliance services page](/solutions/nis2-compliance/)**.

---

## Want to dig deeper?

- **[NIS2 compliance services](/solutions/nis2-compliance/)** — engagement details
- **[DORA compliance](/solutions/dora-compliance/)** — financial-services regulator
- **[Data sovereignty](/solutions/data-sovereignty/)** — adjacent trigger
- **[Cozystack](/products/cozystack/)** — sovereign-by-architecture platform

---

*Aenix is the team behind Cozystack — a CNCF Project, Kubernetes Certified Distribution.*

<!--
SEO meta description (≤155):
"NIS2 requirements for cloud infrastructure 2026: Article 21 controls, Article 23 incident reporting, working architecture checklist."
Word count: ~2900.
-->
