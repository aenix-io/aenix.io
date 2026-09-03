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
        - { text: "Vier", correct: true }
        - { text: "Acht", correct: false }
      explanation: "Vier Workstreams laufen parallel: (1) Inventar und Plattformreife, (2) Souveränität und Aufsichtslücke, (3) Kosten und Cloud-Ausgabenlage, (4) Developer-Self-Service und Platform Engineering. Jeder Workstream adressiert genau einen der vier Beschaffungsdrücke auf Kundenseite."
    - q: "Welcher Anteil der Public-Cloud-Ausgaben ist in 6–12 Monaten typischerweise repatriierbar, ohne dass die Performance leidet?"
      options:
        - { text: "5–10 Prozent", correct: false }
        - { text: "15–35 Prozent", correct: true }
        - { text: "70–90 Prozent", correct: false }
      explanation: "Häufige Befunde aus Workstream 3: 15–35 Prozent der Public-Cloud-Ausgaben lassen sich in sechs bis zwölf Monaten strukturell zurückholen, ohne Performance einzubüßen; Egress-Kosten konzentrieren sich in Datenflüssen, die nie bewusst entworfen wurden; die Einlösequote der Reservierungen liegt unter 60 Prozent."
    - q: "Was passiert an Tag 10 des Assessments?"
      options:
        - { text: "Das abschließende Executive Readout", correct: false }
        - { text: "Der Zwischenstand mit den vorläufigen Befunden", correct: true }
        - { text: "Der Workshop zur Anbieterauswahl", correct: false }
      explanation: "Tag 10 ist der Zwischenstand (60 Minuten). Der Kunde korrigiert, schärft oder widerspricht den vorläufigen Befunden, bevor der Bericht an den Tagen 11 bis 13 geschrieben wird. Das abschließende Executive Readout findet an Tag 14 statt; die Anbieterauswahl gehört nur in die 28-Tage-Variante."
    - q: "Warum lehnt Aenix eine bereits feststehende Antwort an Tag 0 ab?"
      options:
        - { text: "Weil sich die parallelen Workstreams sonst nicht planen lassen", correct: false }
        - { text: "Weil der Bericht dann intern als Bestätigungsfehler abgewertet wird", correct: true }
        - { text: "Weil sich dadurch die Preisstufe des Auftrags ändert", correct: false }
      explanation: "Wenn der Auftraggeber bereits mit „wir gehen komplett zu Azure“ oder „wir gehen on premises mit Cozystack“ in das Assessment startet, wird der Bericht intern als Bestätigungsfehler abgewertet und entfaltet keine Wirkung. Vorab feststehende Antworten verfälschen die Bewertung."
    - q: "Welche Situation passt besonders gut zu einem Assessment?"
      options:
        - { text: "Ein Fünf-Personen-IT-Team mit ein oder zwei Systemen", correct: false }
        - { text: "Ein gerade unterschriebenes mehrjähriges Hyperscaler-Commitment", correct: false }
        - { text: "Ein konkreter aufsichtsrechtlicher Termin, etwa DORA oder NIS2", correct: true }
      explanation: "Gute Passform: ein konkreter aufsichtsrechtlicher Termin (DORA Artikel 28, NIS2-Umsetzung, ein sektorales Audit), eine anstehende Kostenentscheidung auf Vorstandsebene, eine neu aufgebaute Platform-Engineering-Funktion, die eine externe Ausgangsbasis braucht, oder ein KI- beziehungsweise Datenresidenz-Projekt, das im Architektur-Review feststeckt."
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

*Ænix ist das Team hinter Cozystack.*

