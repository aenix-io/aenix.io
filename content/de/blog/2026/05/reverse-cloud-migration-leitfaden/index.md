---
title: "Reverse Cloud Migration — praktischer Leitfaden für Public-Cloud-Ausstieg in 2026"
description: "Begleitung zur Cloud-Repatriation-Page."
date: "2026-05-01"
author: "Aenix Team"
type: "article"
topics: ["Cozystack", "Cloud Repatriation", "Migration"]
language: "de"
companion_landing: "/de/loesungen/cloud-repatriation/"
quiz:
  title: "Wissens-Check: Reverse Cloud Migration"
  questions:
    - q: "Wie sieht ein typischer repatriierter Bestand aus?"
      options:
        - { text: "100% on-prem", correct: false }
        - { text: "30-50% on-prem oder Private Cloud + 30-50% bleibt in Public Cloud + 10-20% in Übergang", correct: true }
        - { text: "100% in Public Cloud", correct: false }
      explanation: "Typischer Bestand nach einem Jahr Repatriierungsarbeit: 30-50% on-prem/Private Cloud (steady-state, reguliert, teuer, latenz-kritisch), 30-50% bleibt in Public Cloud (elastisch, hyperscaler-proprietär), 10-20% in Übergang."
    - q: "Wie viele Schritte hat das Playbook?"
      options:
        - { text: "Drei", correct: false }
        - { text: "Fünf — TCO-Modellierung, Workload-Klassifikation, Zielarchitektur, Cutover-Sequenzierung, Plattform betreiben", correct: true }
        - { text: "Zehn", correct: false }
      explanation: "Fünf-Schritte-Playbook: (1) ehrliche TCO-Modellierung mit allen versteckten Kosten, (2) Workload-Klassifikation (repatriate now / later / stay / reassess), (3) Zielarchitektur, (4) Cutover-Sequenzierung, (5) Plattform betreiben nach Migration."
    - q: "Was ist Pitfall: \"Wishful TCO\"?"
      options:
        - { text: "TCO-Modell ohne Hardware-Refresh-Kosten und Plattform-Team-Kapazität — Realität trifft in Year 2", correct: true }
        - { text: "TCO ohne KI-Berechnung", correct: false }
        - { text: "Korrektes TCO-Vorgehen", correct: false }
      explanation: "Wishful TCO: Modelle die Hardware-Refresh nicht einbeziehen (5-Year-Refresh-Klippe), Plattform-Team-Kapazität unterbewerten und Datacenter/Backup/DR-Kosten überspringen. Sieht artificially gut aus; Realität trifft in Year 2."
    - q: "Wann ist vollumfänglicher Ausstieg falsch?"
      options:
        - { text: "Niemals", correct: false }
        - { text: "Wenn selektive Repatriierung die richtige Antwort ist (top-10 Workloads = 60-80% des Cost-Cases; Rest in Cloud belassen)", correct: true }
        - { text: "Immer", correct: false }
      explanation: "Häufiger Fehler: vollumfänglicher Ausstieg, wenn selektiv die richtige Antwort ist. TCO auf Workload-Level zeigt typischerweise: Top-10 = 60-80% des Cost-Cases. Repatriierung der Top-10 mit Tail in Cloud ist oft am besten."
    - q: "Was bedeutet \"Datenschwerkraft als Checkbox\"?"
      options:
        - { text: "Korrektes Vorgehen", correct: false }
        - { text: "Ein Pitfall — 50TB Produktionsdaten verschieben ist kein Wochenend-Job; braucht explizites Engineering für Cross-Network, Cutover-Fenster, Dual-Write, Rollback", correct: true }
        - { text: "Eine Backup-Strategie", correct: false }
      explanation: "Pitfall: Datenschwerkraft unterschätzen. 50TB Produktionsdaten zu verschieben ist kein Wochenend-Job. Cross-Network-Bewegung, Cutover-Fenster, Dual-Write-Perioden, Rollback-Pfade, Backup-during-Migration brauchen explizites Engineering. Teams die das nicht planen landen im Mittelpunkt einer Multi-Wochen-Notfall."
---

Begleitung zur **[Cloud-Repatriation-Page](/de/loesungen/cloud-repatriation)**.

## Repatriation ist nicht alles-oder-nichts

Typischer repatriierter Bestand:
- 30-50% on-prem oder Private Cloud (steady-state, reguliert, teuer, latenz-kritisch)
- 30-50% bleibt in Public Cloud (elastisch, hyperscaler-proprietär, latenzempfindlich)
- 10-20% in Übergang

## Fünf-Schritte-Playbook

1. **Ehrliche TCO-Modellierung** — alle versteckten Kosten erfasst
2. **Workload-Klassifikation** — repatriate now / later / stay / reassess
3. **Zielarchitektur** — vollständige Plattform mit Ops-Modell
4. **Cutover-Sequenzierung** — respektiert Commitment-Verfallszeiten
5. **Plattform betreiben** — nach der Migration

## Häufige Fehler

- Wishful TCO ohne Hardware-Refresh / Plattform-Team-Kapazität
- Zielarchitektur als Gedanke später
- Datenschwerkraft als Checkbox
- Vollumfänglicher Ausstieg, wenn selektiv die richtige Antwort ist

---

*Aenix ist das Team hinter Cozystack.*

<!-- Word count: ~250. -->
