---
title: "DORA-Compliance-Checkliste für Cloud-Architektur — was Finanzunternehmen 2026 nachweisen müssen"
description: "Begleitung zur DORA-Compliance-Page. Praktische Checkliste für Plattform-Engineers und Cloud-Architekten zur DORA-Umsetzung."
date: "2026-05-01"
author: "Aenix Team"
type: "article"
topics: ["DORA", "Compliance", "Backup & DR", "Observability"]
language: "de"
companion_landing: "/de/loesungen/dora-compliance/"
quiz:
  title: "Wissens-Check: DORA-Checkliste für Cloud-Architektur"
  questions:
    - q: "Welcher DORA-Artikel verlangt einen dokumentierten Ausstiegsplan für kritische Funktionen?"
      options:
        - { text: "Artikel 21", correct: false }
        - { text: "Artikel 28(8)", correct: true }
        - { text: "Artikel 30", correct: false }
      explanation: "DORA Artikel 28(8) verlangt für kritische Funktionen einen dokumentierten Ausstiegsplan und zusätzlich einen tatsächlichen Test innerhalb der letzten 24 Monate. Ein Plan ohne Probe reicht nicht — die Ausstiegsdauer bleibt sonst eine Zahl auf dem Papier."
    - q: "Wie tief muss die Lieferkette nach den Erwartungen aus Artikel 28 und 30 mindestens dokumentiert sein?"
      options:
        - { text: "Nur der direkte Lieferant", correct: false }
        - { text: "Bis zur zweiten Ebene, also den Sublieferanten", correct: true }
        - { text: "Bis hinunter zum Stromanbieter des Rechenzentrums", correct: false }
      explanation: "Lieferantentransparenz bis zur zweiten Ebene. Dazu gehören ein Servicekatalog mit Lieferantenzuordnung, dokumentierte Sublieferantenketten für kritische Funktionen und eine jährlich überprüfte Position zum Konzentrationsrisiko."
    - q: "Was ist laut Artikel die häufigste DORA-Lücke?"
      options:
        - { text: "Fehlende Mehr-Faktor-Authentifizierung", correct: false }
        - { text: "Observability verlässt unbemerkt den Aufsichtsbereich", correct: true }
        - { text: "Die falsche Wahl des Hypervisors", correct: false }
      explanation: "Lücke 1: Observability verlässt unbemerkt den Aufsichtsbereich. Die Produktionsdatenbank kann konform sein, der SaaS-Observability-Stack, der ihre Logs einsammelt, ist es in der Regel nicht. Die Residenzerwartungen aus DORA Artikel 28 gelten für die gesamte Vereinbarung mit dem IKT-Drittanbieter."
    - q: "Was ist für operative Resilienz im Cloud-Kontext sicherzustellen?"
      options:
        - { text: "Ein dokumentierter Backup-Plan genügt", correct: false }
        - { text: "RTO und RPO dokumentiert und jährlich getestet, DR über zwei Regionen", correct: true }
        - { text: "Eine ausgewiesene DR-Site genügt", correct: false }
      explanation: "Operative Resilienz verlangt RTO und RPO dokumentiert und jährlich getestet, nicht bloß dokumentiert; eine Architektur, die kontrollierte Fehlerinjektion (Chaos Engineering) ohne unzumutbare Kundenwirkung verträgt; sowie Backup und Disaster Recovery über mindestens zwei Regionen."
    - q: "Was meint der Artikel mit „Konzentrationsrisiko als Beschaffungsfrage behandelt“?"
      options:
        - { text: "Eine bewährte und empfohlene Vorgehensweise", correct: false }
        - { text: "Einen häufigen Fehler: vertragliche statt architektonischer Vielfalt", correct: true }
        - { text: "Eine ausdrückliche Anforderung aus der DSGVO", correct: false }
      explanation: "Häufige Lücke: Das Konzentrationsrisiko wird erkannt und dann mit vertraglichen Diversitätsklauseln beruhigt — ohne dass sich architektonisch etwas daran ändert, wie stark die Workloads von einem Anbieter abhängen. DORA fordert die tatsächliche Resilienz, nicht die vertragliche Formalie."
---

Begleitung zur **[DORA-Compliance-Page](/de/loesungen/dora-compliance)**. Praktische Checkliste für Plattform-Engineers und Cloud-Architekten zur DORA-Umsetzung.

## DORA-Geltungsbereich

DORA gilt für betroffene Finanzunternehmen und ihre IKT-Drittanbieter mit kritischen Funktionen.

## Architektonische Anforderungen

### Workload-Portabilität (Artikel 28(8))
- Dokumentierter Exit-Plan pro kritischer Funktion
- Test des Exit-Plans innerhalb der letzten 24 Monate
- Plattform-Abstraktion existiert auf ≥2 Anbietern

### Konzentrationsrisiko-Transparenz
- Service-Katalog mit Lieferanten-Mapping
- Sub-Lieferantenketten bis zur zweiten Hop dokumentiert
- Konzentrationsrisiko-Position dokumentiert und annual reviewed

### Operative Resilienz
- RTO/RPO dokumentiert und annual getestet
- Architektur unterstützt kontrollierte Failure-Injection
- Backup und DR funktionieren über Regionen hinweg

### Souveränität und Aufsichtszugang
- Datenresidenz auf jeder Schicht durchgesetzt (Produktion, Backup, Observability, CI/CD)
- Verschlüsselung at rest, in transit, in use
- Verschlüsselungsschlüssel unter Kundenkontrolle
- Audit-Logs in Standardformaten exportierbar

### Vertragliche und Lieferanten-Risiken
- Alle IKT-Drittanbieter-Vereinbarungen inventarisiert
- Article-30-Vertragsinhalt für kritische Funktionen
- Konzentrations-Schwellenwerte vereinbart

## Häufige Lücken in bestehenden Setups

1. **Observability verlässt den Aufsichtsbereich leise** — SaaS-Observability prozessiert Logs in den USA
2. **Exit-Plan nie getestet** — DORA Article 28(8) erfordert Tests
3. **Konzentrationsrisiko als Beschaffungsfrage behandelt** — vertragliche Diversität ohne architektonische Diversität
4. **Sub-Lieferantenkette unsichtbar nach erstem Hop**

## Wie geht es weiter?

Strukturierte DORA-Bewertung → **[Platform Readiness Assessment](/de/dienstleistungen/platform-readiness-assessment/)**.

---

*Ænix ist das Team hinter Cozystack.*

