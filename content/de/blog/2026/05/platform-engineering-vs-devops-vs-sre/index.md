---
title: "Platform Engineering vs DevOps vs SRE — Terminologie-Leitfaden 2026"
description: "Begleitung zur Platform-Engineering-Services-Page. Wo überlappen sich die drei Begriffe, wo nicht, was tut jede Funktion tatsächlich."
date: "2026-05-01"
author: "Aenix Team"
type: "article"
topics: ["Cozystack", "DevOps", "Platform Engineering", "Compliance", "Observability"]
language: "de"
companion_landing: "/de/dienstleistungen/platform-engineering/"
quiz:
  title: "Wissens-Check: Platform Engineering vs DevOps vs SRE"
  questions:
    - q: "Wie charakterisiert der Artikel die drei Begriffe in einer Zeile?"
      options:
        - { text: "Alle drei sind Synonyme", correct: false }
        - { text: "DevOps ist eine Praxis, SRE ist eine Disziplin, Platform Engineering ist eine Funktion", correct: true }
        - { text: "Alle drei sind Rollen", correct: false }
      explanation: "Sauberste Zusammenfassung: DevOps ist eine Praxis (lebt in Produkt-Teams), SRE ist eine Disziplin (Software-Engineering auf Operations angewendet), Platform Engineering ist eine Funktion (separate Team, dessen Kunden andere Engineering-Teams sind)."
    - q: "Wer ist der Kunde des Platform-Engineering-Teams?"
      options:
        - { text: "Endbenutzer des Produkts", correct: false }
        - { text: "Andere Engineering-Teams (Produkt-Teams)", correct: true }
        - { text: "Kein Kunde — internes Team", correct: false }
      explanation: "Platform Engineering ist eine Funktion mit Produkt-Team-Kunden — andere Engineering-Teams. DevOps-Kunde ist das Team selbst. SRE-Kunde sind Produkt-Teams, die den Service betreiben."
    - q: "Was baut das Platform-Engineering-Team konkret?"
      options:
        - { text: "Nur Dokumentation", correct: false }
        - { text: "Internal Developer Platform (IDP), Golden Paths, Operatives Modell, Internes Produktmanagement", correct: true }
        - { text: "Nur Backstage", correct: false }
      explanation: "Vier Outputs: (1) Internal Developer Platform — Self-Service-Surface ohne Tickets; (2) Golden Paths — opinionated Pfade für übliche Bedürfnisse; (3) Operatives Modell — SLOs, On-Call, Runbooks; (4) Internes Produktmanagement — Roadmap, Priorisierung, Customer Interviews."
    - q: "Wann ist \"DevOps allein\" ohne SRE oder Platform Engineering ausreichend?"
      options:
        - { text: "Immer, in jeder Organisation", correct: false }
        - { text: "Kleine Organisationen mit 1–3 Produkt-Teams", correct: true }
        - { text: "Nur in regulierten Industrien", correct: false }
      explanation: "DevOps allein passt für kleine bis mittelgroße Organisationen mit 1–3 Produkt-Teams. Jedes Team betreibt seine eigenen Services mit gemeinsamen Tools, aber ohne dedizierte Reliability- oder Plattform-Funktion."
    - q: "Was ist der typische Verhältnis-Wert von Plattform-Engineer zu Produkt-Engineer in reifen Organisationen?"
      options:
        - { text: "1:2 bis 1:5", correct: false }
        - { text: "1:10 bis 1:20", correct: true }
        - { text: "1:50 bis 1:100", correct: false }
      explanation: "In reifen Organisationen: 1:10 bis 1:20 Plattform-Engineer-zu-Produkt-Engineer-Verhältnis. Niedriger als 1:10 = Plattform überdotiert; höher als 1:20 = Plattform-Team wird vom Produkt-Wachstum überholt."
---

Begleitung zur **[Platform-Engineering-Services-Page](/de/dienstleistungen/platform-engineering)**. Wo überlappen sich die drei Begriffe, wo nicht, was tut jede Funktion tatsächlich.

## Drei Definitionen

**DevOps** ist eine kulturelle und operative Praxis innerhalb von Produkt-Teams. Das gleiche Team baut und betreibt die Software in Produktion.

**SRE (Site Reliability Engineering)** ist eine Disziplin, die Software-Engineering auf Operations anwendet — mit SLOs, Error Budgets und Toil-Begrenzung.

**Platform Engineering** ist die Praxis, interne Plattformen zu bauen, die Produkt-Teams konsumieren. Eine separate Funktion, deren Kunden andere Engineering-Teams sind.

## Wo sie sich überlappen

Alle drei kümmern sich um:
- Zuverlässigkeit (SLOs, Error Budgets)
- Tooling (CI/CD, IaC, Observability, Identity)
- Geschwindigkeit
- Operative Exzellenz

## Wo sie sich unterscheiden

| | DevOps | SRE | Platform Engineering |
|---|---|---|---|
| Wer | Produkt-Team | Reliability-Funktion | Plattform-Team |
| Kunde | Das Team selbst | Produkt-Teams | Andere Engineering-Teams |
| Output | Software in Produktion | SLO-Compliance | Self-Service-Pfade |
| Zentralisiert? | Nein | Manchmal | Ja |

## Wann jedes passt

- **DevOps allein:** kleine Organisationen, 1-3 Produkt-Teams
- **DevOps + SRE:** mittelgroße Organisationen mit Reliability-Bedenken
- **DevOps + Platform Engineering:** mittlere bis große Organisationen mit Self-Service-Bedarf
- **Alle drei:** große Organisationen

## Was Platform Engineering tatsächlich baut

1. Internal Developer Platform (IDP)
2. Golden Paths
3. Operatives Modell
4. Internes Produktmanagement

## Wie geht es weiter?

**[Platform Readiness Assessment](/services/platform-readiness-assessment/)** für eine strukturierte Bewertung.

---

*Aenix ist das Team hinter Cozystack.*

<!-- Word count: ~400. -->
