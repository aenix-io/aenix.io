---
title: "DORA compliance checklist for financial services — what to demonstrate to supervisors"
description: "Companion to DORA compliance checklist resource."
date: "2026-05-01"
author: "Aenix Team"
type: "article"
topics: ["DORA", "Cozystack", "Financial Services", "Platform Engineering", "Compliance", "Observability"]
language: "en"
companion_landing: "/solutions/dora-compliance/"
quiz:
  title: "Test yourself: DORA evidence checklist"
  questions:
    - q: "For each Article 21 / Article 28 requirement, what three things should you be able to do \"demonstrably\"?"
      options:
        - { text: "Buy a vendor product, store the receipt, file it", correct: false }
        - { text: "Name the control, locate it in the running system (not just policy), provide evidence in regulator-consumable format", correct: true }
        - { text: "Write a one-page summary annually", correct: false }
      explanation: "For each Article 21 / Article 28 requirement: name the control, locate it in the running system (configurations, logs, test results), provide evidence in a regulator-consumable format. \"We have a DORA policy\" is now insufficient."
    - q: "Which is NOT named as one of the four most-common DORA findings?"
      options:
        - { text: "Observability data leaving the regulator perimeter", correct: false }
        - { text: "Exit plans never tested", correct: false }
        - { text: "Concentration risk treated as procurement question rather than architecture", correct: false }
        - { text: "Wrong colour scheme on the customer portal", correct: true }
        - { text: "Sub-contractor chain invisible past first hop", correct: false }
      explanation: "Four recurring findings in Aenix DORA engagements: (1) observability data leaves the regulator perimeter, (2) exit plans never tested, (3) concentration risk treated as procurement question not architecture, (4) sub-contractor chain invisible past first hop. UI colour schemes are not on the list."
    - q: "What does the article say about supervisor expectations as of 2026?"
      options:
        - { text: "They are loosening as DORA matures", correct: false }
        - { text: "They are sharpening — TLPT exercises are reaching architectures assumed compliant when DORA went live", correct: true }
        - { text: "They are unchanged from 2025", correct: false }
      explanation: "Supervisor expectations are sharpening. TLPT exercises are reaching architectures that were assumed compliant when DORA went live in January 2025 but had never been tested under realistic regulator scrutiny."
    - q: "What is the recommended workflow for using the checklist?"
      options:
        - { text: "Compliance team alone", correct: false }
        - { text: "Walk through with platform engineering AND compliance teams jointly; identify gaps; prioritise remediation", correct: true }
        - { text: "Hand to vendor for review", correct: false }
      explanation: "Walk through with platform engineering and compliance teams jointly. Joint review surfaces architecture-level gaps that compliance-only or engineering-only reviews miss."
    - q: "When did DORA come into force?"
      options:
        - { text: "17 October 2024", correct: false }
        - { text: "17 January 2025", correct: true }
        - { text: "1 January 2026", correct: false }
      explanation: "DORA has been in force since 17 January 2025. NIS2 transposition (a separate regulation) was due 17 October 2024 — easy to confuse."
---

Companion to **[DORA compliance checklist resource](/resources/dora-compliance-checklist)**.

## Why DORA timing matters

DORA has been in force since 17 January 2025. Supervisor expectations are sharpening. TLPT exercises are reaching architectures assumed compliant when DORA went live.

For financial entities, "we have a DORA policy" is now insufficient. Supervisors expect demonstrable evidence — at the architecture level — that controls are met.

## What demonstrable means

For each Article 21 and Article 28 requirement, you should be able to:

- **Name the control** that satisfies it
- **Locate it in the running system** (not just policy)
- **Provide evidence** in a regulator-consumable format (logs, configurations, test results)

## Most-common findings

In Aenix DORA engagements, four findings recur:

1. Observability data leaving the regulator's perimeter
2. Exit plans never tested
3. Concentration risk treated as procurement question
4. Sub-contractor chain invisible past first hop

## How to use the checklist

Download, walk through with your platform engineering and compliance teams. Identify gaps. Prioritize remediation.

For deeper engagement: **[DORA compliance services](/solutions/dora-compliance/)**.

---

*Aenix is the team behind Cozystack.*

<!-- Word count: ~300. -->
