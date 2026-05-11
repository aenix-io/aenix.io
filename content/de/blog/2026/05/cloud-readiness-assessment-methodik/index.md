---
title: "Cloud Readiness Assessment — was 14 Tage tatsächlich abdecken (Methodik 2026)"
description: "Begleitung zur Platform-Readiness-Assessment-Page."
date: "2026-05-01"
author: "Aenix Team"
type: "article"
topics: ["DORA", "NIS2", "Cozystack", "GitOps", "Cloud Repatriation", "Platform Engineering"]
language: "de"
companion_landing: "/de/dienstleistungen/platform-readiness-assessment/"
quiz:
  title: "Wissens-Check: 14-Tage Cloud Readiness Assessment"
  questions:
    - q: "Wie viele parallele Workstreams strukturieren das 14-Tage-Assessment?"
      options:
        - { text: "Zwei", correct: false }
        - { text: "Vier — Inventar, Souveränität/Regulator, Kosten, Developer-Self-Service", correct: true }
        - { text: "Acht", correct: false }
      explanation: "Vier Workstreams parallel: (1) Inventar und Plattform-Reife, (2) Souveränität und Regulator-Lücke, (3) Kosten und Cloud-Spend-Posture, (4) Developer-Self-Service und Platform Engineering. Jeder mappt zu einem Buyer-Druck."
    - q: "Welcher Anteil von Public-Cloud-Spend ist in 6-12 Monaten typischerweise repatriierbar (ohne Performance-Regression)?"
      options:
        - { text: "5-10%", correct: false }
        - { text: "15-35%", correct: true }
        - { text: "70-90%", correct: false }
      explanation: "Häufige Workstream-3-Findings: 15-35% von Public-Cloud-Spend strukturell in 6-12 Monaten repatriierbar ohne Performance-Regression; Egress-Kosten konzentriert in Flows die nie architektonisch entschieden wurden; Reservation-Realisierungsrate unter 60%."
    - q: "Was passiert am Tag 10 des Assessments?"
      options:
        - { text: "Final Executive Readout", correct: false }
        - { text: "Findings Checkpoint — vorläufige Findings mit Kunde geteilt zum Korrigieren oder Bestreiten vor finaler Berichterstellung", correct: true }
        - { text: "Vendor-Auswahl-Workshop", correct: false }
      explanation: "Tag 10 ist der Findings-Checkpoint (60 min). Kunde korrigiert, schärft oder bestreitet vorläufige Findings, bevor der finale Bericht in Tagen 11-13 erstellt wird. Final Executive Readout ist Tag 14."
    - q: "Warum verzichtet Aenix auf vorab-festgelegte Antworten am Tag 0?"
      options:
        - { text: "Weil parallele Workstreams sonst nicht möglich sind", correct: false }
        - { text: "Ein Bericht aligned mit einer vorab-festgelegten Antwort wird intern als Confirmation Bias abgewertet", correct: true }
        - { text: "Weil das Engagement-Pricing wechselt", correct: false }
      explanation: "Wenn der Sponsor mit \"wir migrieren alles zu Azure\" oder \"wir gehen on-prem mit Cozystack\" als bereits getroffene Entscheidung kommt, wird der Bericht intern als Confirmation Bias abgewertet. Vor-festgelegte Antworten kontaminieren das Assessment."
    - q: "Welche Situation ist eine STARKE Passform für das Assessment?"
      options:
        - { text: "Ein 5-Personen-IT-Team mit ein oder zwei Systemen", correct: false }
        - { text: "Sie haben gerade einen mehrjährigen Hyperscaler-Commitment unterschrieben", correct: false }
        - { text: "Ein spezifischer Regulator-Termin (DORA Article 28, NIS2-Transposition, sektoraler Audit)", correct: true }
      explanation: "Starke Passform: spezifischer Regulator-Termin, anstehende vorstandsrelevante Kostenentscheidung, neue Plattform-Engineering-Funktion die einen externen Baseline benötigt, KI/Datenresidenz-Projekt das im Architektur-Review blockiert ist."
---

Begleitung zur **[Platform-Readiness-Assessment-Page](/de/dienstleistungen/platform-readiness-assessment)**.

## Vier parallele Workstreams in 14 Tagen

Jeder hat einen benannten Eigentümer auf unserer Seite, ein definiertes Deliverable und ein festes Fenster.

### Workstream 1: Inventar und Plattform-Reife
- Workloads (VMs / Container / Datenbanken), Umgebungen, Provisionierungsgeschwindigkeit
- IaC-Abdeckung, GitOps-Reife, CI/CD-Eigentum

### Workstream 2: Souveränität und Regulator-Lücke
- DORA / NIS2 / GDPR / sektorale Anwendbarkeit
- Datenresidenz-Mapping, Verschlüsselungsposture, Lieferanten-Risikokonzentration
- Audit-Trail

### Workstream 3: Kosten und Cloud-Spend-Posture
- Public-Cloud-Rechnung der letzten 12 Monate
- Commitment / Reservierungs-Auslastung
- Egress-Kosten, Repatriations-Machbarkeit

### Workstream 4: Developer-Self-Service und Platform Engineering
- Time-to-Environment (aktuelle SLA)
- Provisionierungs-Friktionspunkte
- Golden-Path-Abdeckung

## Wie die 14 Tage sequenziert werden

- Tag 0: Discovery-Call
- Tag 1: Kickoff-Workshop
- Tage 2-9: parallele Workstream-Analyse
- Tag 10: Findings-Checkpoint
- Tage 11-13: Bericht-Drafting
- Tag 14: Executive-Readout

## Was der Bericht enthält

30-50 Seiten: Executive-Summary, vier Workstream-Sektionen, drei Outcomes, Remediation-Roadmap, Phase-2-Implementation-Scoping.

---

*Aenix ist das Team hinter Cozystack.*

<!-- Word count: ~350. -->
