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
    - q: "Welcher DORA-Artikel verlangt einen dokumentierten Exit-Plan für kritische Funktionen?"
      options:
        - { text: "Artikel 21", correct: false }
        - { text: "Artikel 28(8)", correct: true }
        - { text: "Artikel 30", correct: false }
      explanation: "DORA Artikel 28(8) verlangt für kritische Funktionen einen dokumentierten Exit-Plan UND einen tatsächlichen Test innerhalb der letzten 24 Monate. Ein Plan ohne Test reicht nicht — die Time-to-Exit ist sonst fiktiv."
    - q: "Wie tief in die Lieferantenkette muss laut Artikel-30/Article-28-Erwartungen mindestens dokumentiert werden?"
      options:
        - { text: "Nur direkter Lieferant", correct: false }
        - { text: "Bis zur zweiten Hop (Sub-Lieferanten des direkten Lieferanten)", correct: true }
        - { text: "Bis zum Stromanbieter des Rechenzentrums", correct: false }
      explanation: "Lieferanten-Transparenz bis zur zweiten Hop. Service-Katalog mit Lieferanten-Mapping; Sub-Lieferantenketten für kritische Funktionen dokumentiert; Konzentrationsrisiko-Position annual reviewed."
    - q: "Was ist die häufigste DORA-Lücke laut Artikel?"
      options:
        - { text: "Fehlende MFA", correct: false }
        - { text: "Observability verlässt den Aufsichtsbereich leise — SaaS-Observability prozessiert Logs außerhalb der zulässigen Region", correct: true }
        - { text: "Falsche Hypervisor-Wahl", correct: false }
      explanation: "Lücke 1: Observability verlässt den Aufsichtsbereich leise. Die Produktionsdatenbank kann konform sein; der SaaS-Observability-Stack, der Logs daraus sammelt, in der Regel nicht. DORA-Artikel-28-Datenresidenzerwartungen gelten für die gesamte ICT-Drittanbieter-Vereinbarung."
    - q: "Was muss für Operative Resilienz im Cloud-Architektur-Kontext sichergestellt sein?"
      options:
        - { text: "Nur Backup-Plan", correct: false }
        - { text: "RTO/RPO dokumentiert und annual getestet, Architektur unterstützt kontrollierte Failure-Injection, Backup/DR über Regionen hinweg", correct: true }
        - { text: "Nur DR-Site", correct: false }
      explanation: "Operative Resilienz erfordert RTO/RPO dokumentiert UND annual getestet (nicht nur dokumentiert), Architektur die kontrollierte Failure-Injection (Chaos Engineering) ohne inakzeptable Kundenwirkung unterstützt, Backup und DR über mindestens zwei Regionen hinweg."
    - q: "Worauf bezieht sich \"Konzentrationsrisiko als Beschaffungsfrage behandelt\"?"
      options:
        - { text: "Eine richtige Vorgehensweise", correct: false }
        - { text: "Ein häufiger Fehler — vertragliche Lieferanten-Diversität ohne tatsächliche architektonische Diversität", correct: true }
        - { text: "Eine GDPR-Anforderung", correct: false }
      explanation: "Häufige Lücke: Konzentrationsrisiko wird oft markiert und dann durch vertragliche Diversitätsklauseln gemildert — ohne architektonische Änderung daran, wie Workloads tatsächlich von einem Anbieter abhängen. DORA fordert die substantielle Resilienz, nicht nur die vertragliche Formalität."
---

Begleitung zur **[DORA-Compliance-Page](/de/loesungen/dora-compliance)**. Praktische Checkliste für Plattform-Engineers und Cloud-Architekten zur DORA-Umsetzung.

## DORA-Geltungsbereich

DORA gilt für betroffene Finanzunternehmen und ihre ICT-Drittanbieter mit kritischen Funktionen.

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
- Alle ICT-Drittanbieter-Vereinbarungen inventarisiert
- Article-30-Vertragsinhalt für kritische Funktionen
- Konzentrations-Schwellenwerte vereinbart

## Häufige Lücken in bestehenden Setups

1. **Observability verlässt den Aufsichtsbereich leise** — SaaS-Observability prozessiert Logs in den USA
2. **Exit-Plan nie getestet** — DORA Article 28(8) erfordert Tests
3. **Konzentrationsrisiko als Beschaffungsfrage behandelt** — vertragliche Diversität ohne architektonische Diversität
4. **Sub-Lieferantenkette unsichtbar nach erstem Hop**

## Wie geht es weiter?

Strukturierte DORA-Bewertung → **[Platform Readiness Assessment](/services/platform-readiness-assessment/)**.

---

*Aenix ist das Team hinter Cozystack.*

<!-- Word count: ~450. -->
