---
title: "NIS2 cybersecurity requirements — checklist for essential and important entities"
description: "Companion to NIS2 compliance checklist resource."
date: "2026-05-01"
author: "Aenix Team"
type: "article"
topics: ["NIS2", "Cozystack", "Platform Engineering", "Compliance"]
language: "en"
companion_landing: "/solutions/nis2-compliance/"
quiz:
  title: "Test yourself: NIS2 checklist (essential entities)"
  questions:
    - q: "How many mandatory areas does NIS2 Article 21 require measures across?"
      options:
        - { text: "5", correct: false }
        - { text: "10 — risk analysis, incident handling, BC, supply chain, secure development, effectiveness assessment, hygiene/training, cryptography, HR/access/asset, MFA/secure comms", correct: true }
        - { text: "15", correct: false }
      explanation: "Article 21 requires measures across 10 areas: risk analysis & infosec policy, incident handling, business continuity, supply-chain security, secure acquisition/development/maintenance, effectiveness assessment, cyber hygiene + training, cryptography/encryption, HR/access/asset management, MFA/continuous auth/secure comms."
    - q: "What is the deadline structure for NIS2 incident reporting (Article 23)?"
      options:
        - { text: "24-hour early warning + 72-hour incident notification + 1-month final report", correct: true }
        - { text: "One annual summary report", correct: false }
        - { text: "7-day timeline only", correct: false }
      explanation: "Three-stage process: 24-hour early warning to CSIRT → 72-hour incident notification with severity assessment → 1-month final report with root cause and mitigation. Architecture must support detection and reporting at these timelines."
    - q: "Which finding does Aenix engagements identify as most-common in NIS2 readiness reviews?"
      options:
        - { text: "Wrong CPU architecture", correct: false }
        - { text: "Detection telemetry tuned for performance, not security; BCP plan documented but never tested; supply-chain visibility only to first hop; incident-reporting process undocumented for 24-hour timeline", correct: true }
        - { text: "Lack of GPU compute", correct: false }
      explanation: "Most-common findings: (1) detection telemetry tuned for performance not security (alert fatigue masks signals), (2) BCP plan documented but never tested, (3) supply-chain visible only to first hop, (4) incident-reporting process undocumented for the 24h timeline."
    - q: "When was the NIS2 transposition deadline?"
      options:
        - { text: "17 January 2025", correct: false }
        - { text: "17 October 2024", correct: true }
        - { text: "1 January 2026", correct: false }
      explanation: "NIS2 transposition deadline was 17 October 2024. National competent authorities + CSIRTs are operational. Most member states have transposed; some are late. Enforcement is now."
    - q: "What does the article recommend for actually walking through the checklist?"
      options:
        - { text: "Compliance team alone", correct: false }
        - { text: "Walk through with platform engineering + security + compliance jointly; identify gaps; prioritize remediation", correct: true }
        - { text: "Hand it to vendor", correct: false }
      explanation: "Walk through with platform engineering + security + compliance jointly. Identify gaps. Prioritize remediation. Joint review surfaces architecture-level decisions that pure compliance reviews miss."
---

Companion to **[NIS2 compliance checklist resource](/resources/nis2-compliance-checklist)**.

## Why NIS2 timing matters

NIS2 transposition deadline was 17 October 2024. Most EU member states have transposed; some are late. National competent authorities and CSIRTs are operational. Enforcement is now.

## Article 21 — 10 mandatory areas

Each in-scope entity must take measures across:

1. Policies on risk analysis and information system security
2. Incident handling
3. Business continuity
4. Supply chain security
5. Acquisition / development / maintenance security
6. Effectiveness assessment policies
7. Cyber hygiene + cybersecurity training
8. Cryptography / encryption
9. HR security, access control, asset management
10. MFA / continuous authentication / secured comms

## Article 23 — incident reporting timeline

- **24-hour early warning** to CSIRT
- **72-hour incident notification** with severity assessment
- **1-month final report** with root cause and mitigation

The architecture must support detection and reporting at these timelines.

## Most-common findings

In Aenix NIS2 engagements:
1. Detection telemetry tuned for performance, not security
2. BCP plan documented but never tested
3. Supply-chain visible only to first hop
4. Incident-reporting process undocumented for 24-hour timeline

## How to use the checklist

Walk through with platform engineering + security + compliance. Identify gaps. Prioritize remediation.

For deeper engagement: **[NIS2 compliance services](/solutions/nis2-compliance/)**.

---

*Aenix is the team behind Cozystack.*

<!-- Word count: ~300. -->
