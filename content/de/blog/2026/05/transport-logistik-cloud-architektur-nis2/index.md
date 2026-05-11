---
title: "Transport- und Logistik-Cloud-Architektur — NIS2, KI, Edge in 2026"
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
    - q: "In welchen NIS2-Annex fällt Transport?"
      options:
        - { text: "Annex II (wichtige Entität)", correct: false }
        - { text: "Annex I (wesentliche Entität) — Article 21/23 Verpflichtungen", correct: true }
        - { text: "Außerhalb des Geltungsbereichs", correct: false }
      explanation: "Transport ist NIS2 Annex I als wesentliche Entität. Article 21 Risikomanagement-Maßnahmen und Article 23 Vorfall-Reporting gelten für ICT der Transport-Organisationen (Schiene, Straße, Wasser, Luft)."
    - q: "Welche Three-Tier-Architektur wird beschrieben?"
      options:
        - { text: "Zentrale Cloud (TMS, Fleet-Management, KI-Training) + regionale Standorte (operative Zentren, regionale Disposition) + Edge (Depots, Häfen, Terminals, On-Vehicle-Compute)", correct: true }
        - { text: "Nur Hyperscaler-Region", correct: false }
        - { text: "Single on-prem Cluster", correct: false }
      explanation: "Drei Tiers: Zentrale Cloud (Transport-Management-System, Fleet-Management, KI-Training, Customer-facing) → regionale Standorte (operative Zentren, regionale Disposition, KI-Inferenz) → Edge (Depots, Häfen, Terminals, On-Vehicle-Compute)."
    - q: "Welche transport-spezifische NIS2-Kontrolle wird genannt?"
      options:
        - { text: "Multi-modale Datensouveränität (grenzüberschreitende Frachtdaten), Sub-Lieferanten-Transparenz (Logistikketten 5+ Ebenen), BCP für kinetische Disruption, Air-gap für sicherheitskritische OT", correct: true }
        - { text: "Nur Standard Article 21", correct: false }
        - { text: "Nur MFA", correct: false }
      explanation: "Standard Article 21+23-Mapping plus transport-spezifisch: multi-modale Datensouveränität (grenzüberschreitende Frachtdaten), Sub-Lieferanten-Transparenz (Logistikketten 5+ Ebenen), BCP für kinetische Disruption (Hafen-Schließung, Straßen-Sperrung, Wetter), Air-gap für sicherheitskritische OT (Bahn-Signalisierung, automatisierte Terminal-Operationen)."
    - q: "Welche KI-Use-Cases sind im Transport häufig?"
      options:
        - { text: "Routenoptimierung, Nachfrageprognose, Predictive Maintenance, Last-Mile-Optimierung, Customer-facing KI (Lieferzeit, Kundenservice)", correct: true }
        - { text: "Nur Synthetic-Data-Generation", correct: false }
        - { text: "Nur Marketing-Personalization", correct: false }
      explanation: "Häufige KI-Use-Cases: Routenoptimierung (Echtzeit + Planung), Nachfrageprognose, Predictive Maintenance für Flotte, Last-Mile-Optimierung, Customer-facing KI (Lieferzeit-Schätzung, Kundenservice)."
    - q: "Warum ist Sub-Lieferanten-Transparenz im Logistik besonders schwer?"
      options:
        - { text: "Es gibt keine Sub-Lieferanten in Logistik", correct: false }
        - { text: "Logistikketten haben oft 5+ Ebenen Sub-Subcontracting (Carrier → Forwarder → Broker → Handler → Terminal-Operator)", correct: true }
        - { text: "Es ist einfach", correct: false }
      explanation: "Logistikketten haben oft 5+ Ebenen Sub-Subcontracting (Carrier → Forwarder → Broker → Handler → Terminal-Operator). NIS2 (und DORA) erwarten Lieferanten-Transparenz bis zur zweiten Hop — für Logistik ist sogar das ungewöhnlich schwer; jenseits zweiter Hop ist oft unmöglich ohne dedizierte Traceability-Tooling."
---

Begleitung zur **[Transport-Industry-Page](/de/branchen/transport-logistik)**.

## Drei Druckpunkte

1. NIS2 wesentliche Entität (Annex I)
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

*Aenix ist das Team hinter Cozystack.*

<!-- Word count: ~250. -->
