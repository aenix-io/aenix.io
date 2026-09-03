---
title: "Reverse Cloud Migration — praktischer Leitfaden für Public-Cloud-Ausstieg im Jahr 2026"
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
    - q: "Wie sieht ein typischer Bestand nach einem Jahr Repatriierungsarbeit aus?"
      options:
        - { text: "Vollständig on premises, die Public Cloud wird abgeschaltet", correct: false }
        - { text: "Etwa je zur Hälfte on premises und in der Public Cloud, Rest im Übergang", correct: true }
        - { text: "Unverändert vollständig in der Public Cloud", correct: false }
      explanation: "Typischer Bestand nach einem Jahr: 30–50 Prozent on premises oder in der Private Cloud (Dauerlast, reguliert, teuer, latenzkritisch), 30–50 Prozent bleiben in der Public Cloud (elastisch, an proprietäre Hyperscaler-Dienste gebunden) und 10–20 Prozent befinden sich im Übergang."
    - q: "Aus wie vielen Schritten besteht das Playbook?"
      options:
        - { text: "Drei", correct: false }
        - { text: "Fünf", correct: true }
        - { text: "Zehn", correct: false }
      explanation: "Fünf Schritte: (1) ehrliche TCO-Modellierung mit allen versteckten Kosten, (2) Workload-Klassifikation in jetzt repatriieren, später repatriieren, in der Cloud belassen oder neu bewerten, (3) Zielarchitektur, (4) Sequenzierung des Cutovers, (5) Betrieb der Plattform nach der Migration."
    - q: "Was beschreibt der Fallstrick „Wunsch-TCO“?"
      options:
        - { text: "Ein Modell ohne Hardware-Refresh und ohne Plattformteam-Kapazität", correct: true }
        - { text: "Ein Modell, das die Kosten für KI-Workloads nicht berücksichtigt", correct: false }
        - { text: "Das methodisch korrekte Vorgehen bei der TCO-Rechnung", correct: false }
      explanation: "Wunsch-TCO bezeichnet Modelle, die den Hardware-Refresh nach fünf Jahren ausblenden, die Kapazität des Plattformteams zu niedrig ansetzen und Kosten für Rechenzentrum, Backup und Disaster Recovery überspringen. Auf dem Papier sieht das gut aus; im zweiten Jahr holt die Realität die Rechnung ein."
    - q: "Wann ist der vollständige Ausstieg aus der Public Cloud die falsche Antwort?"
      options:
        - { text: "Grundsätzlich nie, der vollständige Ausstieg ist immer das Ziel", correct: false }
        - { text: "Wenn die selektive Repatriierung den größten Teil des Nutzens bringt", correct: true }
        - { text: "Grundsätzlich immer, ein Teilausstieg ist nie tragfähig", correct: false }
      explanation: "Häufiger Fehler: der vollständige Ausstieg, wo die selektive Repatriierung richtig wäre. Auf Workload-Ebene zeigt die TCO-Rechnung typischerweise, dass die zehn größten Workloads 60–80 Prozent des Kostenarguments ausmachen. Diese zehn zurückzuholen und den Rest in der Cloud zu belassen, ist oft die beste Lösung."
    - q: "Was bedeutet der Fallstrick „Datenschwerkraft als Häkchen“?"
      options:
        - { text: "Ein methodisch sauberes Vorgehen bei der Datenmigration", correct: false }
        - { text: "Den Aufwand der Datenverlagerung als erledigt abzuhaken", correct: true }
        - { text: "Eine bestimmte Backup-Strategie während der Migration", correct: false }
      explanation: "Fallstrick: die Datenschwerkraft unterschätzen. 50 Terabyte Produktionsdaten zu verlagern ist keine Wochenendaufgabe. Übertragung über das Netz, Cutover-Fenster, Phasen mit Doppelschreiben, Rückfallpfade und Backups während der Migration brauchen eigenes Engineering. Teams, die das nicht planen, landen mitten in einem mehrwöchigen Notfall."
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

*Ænix ist das Team hinter Cozystack.*

