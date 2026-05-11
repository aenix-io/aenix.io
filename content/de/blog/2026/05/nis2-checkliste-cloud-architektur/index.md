---
title: "NIS2-Anforderungen für Cloud-Infrastruktur — Checkliste für DACH-Unternehmen"
description: "Begleitung zur NIS2-Compliance-Page."
date: "2026-05-01"
author: "Aenix Team"
type: "article"
topics: ["NIS2", "Cozystack", "Compliance", "Backup & DR"]
language: "de"
companion_landing: "/de/loesungen/nis2-compliance/"
quiz:
  title: "Wissens-Check: NIS2 für Cloud-Architektur"
  questions:
    - q: "Wie viele erforderliche Bereiche umfasst NIS2 Artikel 21?"
      options:
        - { text: "5", correct: false }
        - { text: "10 — Risikoanalyse, Vorfallhandhabung, Geschäftskontinuität, Lieferkette, Sicherer Lebenszyklus, Effektivitäts-Bewertung, Hygiene/Training, Kryptographie, HR/Zugriff, MFA/sichere Komms", correct: true }
        - { text: "15", correct: false }
      explanation: "Artikel 21 erfordert Maßnahmen in 10 Bereichen: (1) Risikoanalyse + Infosec-Policy, (2) Vorfallhandhabung, (3) Geschäftskontinuität, (4) Lieferkette-Sicherheit, (5) Sicheres Acquisition/Development/Maintenance, (6) Effektivitätsbewertung, (7) Cyberhygiene + Training, (8) Kryptographie, (9) HR/Zugriff/Asset, (10) MFA/sichere Notfall-Komms."
    - q: "Wie ist die Reporting-Zeitfenster-Struktur unter Artikel 23?"
      options:
        - { text: "24h Frühwarnung an CSIRT + 72h vollständige Meldung + 1 Monat Abschlussbericht", correct: true }
        - { text: "Nur ein jährlicher Sammelreport", correct: false }
        - { text: "Nur 7 Tage", correct: false }
      explanation: "Drei-Stufen-Prozess: 24-Stunden-Frühwarnung an CSIRT → 72-Stunden-Vorfall-Meldung mit Schweregrad-Bewertung → 1-Monat-Abschlussbericht mit Ursache und Mitigation. Architektur muss Erkennung und Reporting in diesen Zeitfenstern unterstützen."
    - q: "Bis wohin müssen Lieferantenketten unter NIS2 dokumentiert sein?"
      options:
        - { text: "Nur direkter Lieferant", correct: false }
        - { text: "Bis zur zweiten Hop (Sub-Lieferanten des direkten Lieferanten)", correct: true }
        - { text: "Komplette Tiefe", correct: false }
      explanation: "Lieferantenketten-Transparenz bis zum zweiten Hop. Architektonische Anforderung: Multi-Schicht-Datenresidenz, kundenkontrollierte Verschlüsselung, Lieferantenketten-Transparenz bis zum zweiten Hop, Audit-Logs in Standardformaten."
    - q: "Welche kryptographische Schlüsselkontrolle ist in der NIS2-Architektur erforderlich?"
      options:
        - { text: "Schlüssel beim Cloud-Provider", correct: false }
        - { text: "Customer-controlled Verschlüsselungsschlüssel", correct: true }
        - { text: "Keine Verschlüsselung notwendig", correct: false }
      explanation: "Architektonische Anforderungen: Multi-Schicht-Datenresidenz; customer-controlled Verschlüsselungsschlüssel (für sensitive Daten); Lieferanten-Transparenz bis zum zweiten Hop; Audit-Logs exportierbar in Standardformaten; Aufsichtszugang dokumentiert und getestet."
    - q: "Welche Rolle spielt das Aenix Platform Readiness Assessment in NIS2-Kontext?"
      options:
        - { text: "Strukturierte NIS2-Bewertung mit NIS2-Schwerpunkt — gegen Architektur-Lücken vor Audit-Zyklen", correct: true }
        - { text: "Nicht relevant für NIS2", correct: false }
        - { text: "Nur für DORA", correct: false }
      explanation: "Das Platform Readiness Assessment kann mit NIS2-Schwerpunkt durchgeführt werden — strukturierte Architektur-Bewertung gegen Article-21- und Article-23-Anforderungen vor Audit-Zyklen."
---

Begleitung zur **[NIS2-Compliance-Page](/de/loesungen/nis2-compliance)**.

## Artikel 21 — Risikomanagement-Maßnahmen

10 erforderliche Bereiche, die jede betroffene Entität abdecken muss:

1. Risikoanalyse und Informationssystem-Sicherheit
2. Vorfall-Handhabung
3. Geschäftskontinuität (Backup, DR, Krisenmanagement)
4. Lieferkette-Sicherheit
5. Sicherheit in Acquisition / Development / Maintenance
6. Effektivitäts-Bewertung
7. Cyber-Hygiene und Cybersicherheits-Training
8. Kryptographie (Verschlüsselung)
9. Personalsicherheit, Zugriffskontrolle, Asset-Management
10. MFA, sichere Kommunikation, sichere Notfall-Kommunikation

## Artikel 23 — Vorfall-Reporting-Zeitfenster

- **24 Stunden** — Frühwarnung an CSIRT
- **72 Stunden** — vollständige Vorfall-Meldung
- **1 Monat** — Abschlussbericht

Die Architektur muss Erkennung und Reporting innerhalb dieser Zeitfenster unterstützen.

## Architektonische Anforderungen

- Multi-Schicht-Datenresidenz
- Customer-controlled Verschlüsselungsschlüssel
- Lieferantenketten-Transparenz bis zum zweiten Hop
- Audit-Logs in Standardformaten
- Aufsichtszugang dokumentiert und getestet

## Wie geht es weiter?

**[Platform Readiness Assessment](/services/platform-readiness-assessment/)** mit NIS2-Schwerpunkt.

---

*Aenix ist das Team hinter Cozystack.*

<!-- Word count: ~350. -->
