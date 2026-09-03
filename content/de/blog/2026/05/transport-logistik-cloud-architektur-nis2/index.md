---
title: "Transport- und Logistik-Cloud-Architektur — NIS2, KI, Edge im Jahr 2026"
description: "Begleitung zur Transport-Industry-Page."
date: "2026-05-01"
author: "Aenix Team"
type: "article"
topics: ["NIS2", "Cozystack"]
language: "de"
companion_landing: "/de/branchen/transport-logistik/"
quiz:
  title: "Wissens-Check: Transport / Logistik Cloud-Architektur"
  questions:
    - q: "In welchen NIS2-Anhang fällt der Sektor Verkehr?"
      options:
        - { text: "Anhang II als wichtige Einrichtung", correct: false }
        - { text: "Anhang I als wesentliche Einrichtung", correct: true }
        - { text: "Der Sektor liegt außerhalb des Geltungsbereichs", correct: false }
      explanation: "Verkehr steht in NIS2 Anhang I als wesentliche Einrichtung. Die Risikomanagementmaßnahmen aus Artikel 21 und die Meldepflichten aus Artikel 23 gelten für die IT von Verkehrsunternehmen auf Schiene, Straße, Wasser und in der Luft."
    - q: "Welche dreistufige Architektur beschreibt der Artikel?"
      options:
        - { text: "Zentrale Cloud, regionale Standorte und Edge in Depots und Terminals", correct: true }
        - { text: "Eine einzige Hyperscaler-Region für alle Anwendungen", correct: false }
        - { text: "Ein konsolidierter Cluster im eigenen Rechenzentrum", correct: false }
      explanation: "Drei Stufen: zentrale Cloud für Transportmanagement, Flottenmanagement, KI-Training und kundenorientierte Anwendungen, regionale Standorte für Leitstellen, regionale Disposition und KI-Inferenz sowie Edge in Depots, Häfen, Terminals und im Fahrzeug."
    - q: "Welche transportspezifischen NIS2-Kontrollen nennt der Artikel?"
      options:
        - { text: "Ausschließlich die Standardmaßnahmen aus Artikel 21", correct: false }
        - { text: "Grenzüberschreitende Frachtdaten, tiefe Lieferkette, Notfallplanung, OT-Trennung", correct: true }
        - { text: "Ausschließlich Mehr-Faktor-Authentifizierung an den Leitständen", correct: false }
      explanation: "Zusätzlich zur üblichen Zuordnung von Artikel 21 und 23 nennt der Artikel: multimodale Datensouveränität für grenzüberschreitende Frachtdaten, Transparenz über Sublieferanten in Logistikketten mit fünf und mehr Ebenen, Notfallplanung für physische Störungen wie Hafensperrungen, Straßensperrungen und Unwetter sowie eine Netztrennung für sicherheitskritische OT wie Bahnsignaltechnik und automatisierte Terminals."
    - q: "Welche KI-Anwendungsfälle sind im Transport häufig?"
      options:
        - { text: "Routenoptimierung, Nachfrageprognose, vorausschauende Wartung, letzte Meile", correct: true }
        - { text: "Ausschließlich die Erzeugung synthetischer Trainingsdaten", correct: false }
        - { text: "Ausschließlich Personalisierung im Marketing", correct: false }
      explanation: "Häufige Anwendungsfälle: Routenoptimierung in Echtzeit und in der Planung, Nachfrageprognose, vorausschauende Wartung der Flotte, Optimierung der letzten Meile und kundenorientierte KI für Ankunftsprognosen und den Kundenservice."
    - q: "Warum ist die Transparenz über Sublieferanten in der Logistik besonders schwierig?"
      options:
        - { text: "Weil es in Logistikketten kaum Sublieferanten gibt", correct: false }
        - { text: "Weil die Ketten oft fünf und mehr Ebenen tief verschachtelt sind", correct: true }
        - { text: "Weil moderne Transportmanagementsysteme das ohnehin abbilden", correct: false }
      explanation: "Logistikketten reichen häufig über fünf und mehr Ebenen: Carrier, Spediteur, Makler, Umschlagbetrieb, Terminalbetreiber. NIS2 und DORA erwarten Transparenz bis zur zweiten Ebene — schon das ist in der Logistik ungewöhnlich schwer, und alles darüber hinaus ist ohne eigene Nachverfolgungswerkzeuge kaum zu leisten."
---

Begleitung zur **[Transport-Industry-Page](/de/branchen/transport-logistik)**.

## Drei Druckpunkte

1. NIS2 wesentliche Einrichtung (Anhang I)
2. KI-Optimierung
3. Edge-Compute-Dichte

## Three-Tier-Architekturmuster

- **Zentrale Cloud** — TMS, Fleet-Management, KI-Training
- **Regionale Standorte** — operative Zentren, regionale Disposition
- **Edge** — Depots, Häfen, Terminals, On-Vehicle-Compute

## NIS2-Architekturkontrollen für Transport

Standard-Article-21+23-Mapping; transport-spezifisch:
- Multi-modale Datensouveränität
- Sub-Lieferanten-Transparenz (Logistikketten 5+ Ebenen)
- BCP für kinetische Disruption
- Air-gap für sicherheitskritische OT

## KI-Use-Cases im Transport

- Routenoptimierung
- Nachfrageprognose
- Predictive Maintenance für Flotte
- Last-Mile-Optimierung
- Customer-facing KI (Lieferzeit, Kundenservice)

---

*Ænix ist das Team hinter Cozystack.*

