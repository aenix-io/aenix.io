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
    - q: "Wie viele Maßnahmenbereiche verlangt NIS2 Artikel 21?"
      options:
        - { text: "Fünf", correct: false }
        - { text: "Zehn", correct: true }
        - { text: "Fünfzehn", correct: false }
      explanation: "Artikel 21 verlangt Maßnahmen in zehn Bereichen: (1) Risikoanalyse und Sicherheitsleitlinie, (2) Behandlung von Vorfällen, (3) Geschäftskontinuität, (4) Sicherheit der Lieferkette, (5) sichere Beschaffung, Entwicklung und Wartung, (6) Bewertung der Wirksamkeit, (7) Cyberhygiene und Schulung, (8) Kryptographie, (9) Personal, Zugriff und Assets, (10) Mehr-Faktor-Authentifizierung und sichere Notfallkommunikation."
    - q: "Wie sind die Meldefristen nach Artikel 23 gestaffelt?"
      options:
        - { text: "24 Stunden Frühwarnung, 72 Stunden Meldung, ein Monat Abschluss", correct: true }
        - { text: "Ein einziger jährlicher Sammelbericht an das CSIRT", correct: false }
        - { text: "Eine einzelne Meldung innerhalb von sieben Tagen", correct: false }
      explanation: "Dreistufiger Prozess: Frühwarnung an das CSIRT binnen 24 Stunden, Vorfallmeldung mit Schweregradbewertung binnen 72 Stunden, Abschlussbericht mit Ursache und Gegenmaßnahmen binnen eines Monats. Die Architektur muss Erkennung und Meldung in diesen Fenstern tragen."
    - q: "Bis wohin müssen Lieferantenketten unter NIS2 dokumentiert sein?"
      options:
        - { text: "Nur bis zum direkten Lieferanten", correct: false }
        - { text: "Bis zur zweiten Ebene, also den Sublieferanten", correct: true }
        - { text: "Über die gesamte Tiefe der Kette", correct: false }
      explanation: "Lieferantentransparenz bis zur zweiten Ebene. Die architektonischen Anforderungen daneben: mehrschichtige Datenresidenz, kundenkontrollierte Verschlüsselung, Audit-Logs in Standardformaten und ein dokumentierter Zugang für die Aufsicht."
    - q: "Welche Kontrolle über kryptographische Schlüssel verlangt die NIS2-Architektur?"
      options:
        - { text: "Die Schlüssel liegen beim Cloud-Anbieter", correct: false }
        - { text: "Die Schlüssel liegen beim Kunden", correct: true }
        - { text: "Eine Verschlüsselung ist nicht erforderlich", correct: false }
      explanation: "Architektonische Anforderungen: mehrschichtige Datenresidenz, kundenkontrollierte Verschlüsselungsschlüssel für sensible Daten, Lieferantentransparenz bis zur zweiten Ebene, in Standardformaten exportierbare Audit-Logs sowie ein dokumentierter und getesteter Zugang für die Aufsicht."
    - q: "Welche Rolle spielt das Aenix Platform Readiness Assessment im NIS2-Kontext?"
      options:
        - { text: "Eine strukturierte Architekturbewertung mit NIS2-Schwerpunkt", correct: true }
        - { text: "Es ist für NIS2 nicht einschlägig, sondern rein technisch", correct: false }
        - { text: "Es deckt ausschließlich DORA-Anforderungen ab", correct: false }
      explanation: "Das Platform Readiness Assessment lässt sich mit NIS2-Schwerpunkt durchführen: eine strukturierte Architekturbewertung gegen die Anforderungen aus Artikel 21 und Artikel 23, bevor die Auditzyklen anlaufen."
---

Begleitung zur **[NIS2-Compliance-Page](/de/loesungen/nis2-compliance)**.

## Artikel 21 — Risikomanagement-Maßnahmen

10 erforderliche Bereiche, die jede betroffene Einrichtung abdecken muss:

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

**[Platform Readiness Assessment](/de/dienstleistungen/platform-readiness-assessment/)** mit NIS2-Schwerpunkt.

---

*Ænix ist das Team hinter Cozystack.*

