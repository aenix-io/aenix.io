---
title: "DORA-Compliance-Checkliste für Cloud-Architektur — was Finanzunternehmen 2026 nachweisen müssen"
description: "Begleitung zur DORA-Compliance-Page. Praktische Checkliste für Plattform-Engineers und Cloud-Architekten zur DORA-Umsetzung."
date: "2026-05-01"
author: "Aenix Team"
type: "article"
topics: ["DORA", "Compliance", "Backup & DR", "Observability"]
language: "de"
companion_landing: "/de/loesungen/dora-compliance/"
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
