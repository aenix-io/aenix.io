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
    - q: "Wie charakterisiert der Artikel die drei Begriffe in einem Satz?"
      options:
        - { text: "Alle drei sind Synonyme für dieselbe Aufgabe", correct: false }
        - { text: "DevOps ist Praxis, SRE ist Disziplin, Platform Engineering ist Funktion", correct: true }
        - { text: "Alle drei sind Rollenbezeichnungen für einzelne Engineers", correct: false }
      explanation: "Die knappste Zusammenfassung: DevOps ist eine Praxis, die in den Produktteams selbst gelebt wird. SRE ist eine Disziplin, nämlich Software-Engineering angewandt auf den Betrieb. Platform Engineering ist eine Funktion, also ein eigenes Team, dessen Kunden andere Engineering-Teams sind."
    - q: "Wer ist der Kunde des Platform-Engineering-Teams?"
      options:
        - { text: "Die Endnutzerinnen und Endnutzer des Produkts", correct: false }
        - { text: "Die anderen Engineering-Teams im Unternehmen", correct: true }
        - { text: "Niemand, es handelt sich um ein reines Innenteam", correct: false }
      explanation: "Platform Engineering ist eine Funktion mit den Produktteams als Kunden. Bei DevOps ist das Team selbst der Kunde, bei SRE sind es die Produktteams, die den Dienst betreiben."
    - q: "Was baut das Platform-Engineering-Team konkret?"
      options:
        - { text: "Ausschließlich Dokumentation und Architekturvorgaben", correct: false }
        - { text: "Eine IDP, Golden Paths, ein Betriebsmodell und internes Produktmanagement", correct: true }
        - { text: "Ausschließlich eine Backstage-Instanz mit Servicekatalog", correct: false }
      explanation: "Vier Ergebnisse: (1) eine Internal Developer Platform als Self-Service-Oberfläche ohne Tickets, (2) Golden Paths als vorgegebene Wege für die üblichen Bedürfnisse, (3) ein Betriebsmodell mit SLOs, Rufbereitschaft und Runbooks, (4) internes Produktmanagement mit Roadmap, Priorisierung und Gesprächen mit den Nutzerteams."
    - q: "Wann genügt DevOps allein, ohne SRE oder Platform Engineering?"
      options:
        - { text: "Immer, unabhängig von der Größe der Organisation", correct: false }
        - { text: "In kleinen Organisationen mit ein bis drei Produktteams", correct: true }
        - { text: "Ausschließlich in stark regulierten Branchen", correct: false }
      explanation: "DevOps allein passt für kleine bis mittelgroße Organisationen mit ein bis drei Produktteams. Jedes Team betreibt seine eigenen Dienste mit gemeinsamen Werkzeugen, ohne dedizierte Reliability- oder Plattformfunktion."
    - q: "Wie ist das typische Verhältnis von Plattform- zu Produkt-Engineers in reifen Organisationen?"
      options:
        - { text: "1:2 bis 1:5", correct: false }
        - { text: "1:10 bis 1:20", correct: true }
        - { text: "1:50 bis 1:100", correct: false }
      explanation: "In reifen Organisationen liegt das Verhältnis bei 1:10 bis 1:20. Unter 1:10 ist die Plattformfunktion überbesetzt; über 1:20 wird das Plattformteam in der Regel vom Wachstum der Produktteams überholt."
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

**[Platform Readiness Assessment](/de/dienstleistungen/platform-readiness-assessment/)** für eine strukturierte Bewertung.

---

*Ænix ist das Team hinter Cozystack.*

