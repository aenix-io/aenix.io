---
title: "Internal Developer Platform Beispiele — 6 architektonische Muster ohne Backstage-Lock-in"
description: "- Internal Developer Platform — die Capability-Schicht (Compute, Storage, Networking, Identity, Observability, Deployment-Automatisierung) - Internal..."
date: "2026-05-01"
author: "Aenix Team"
type: "article"
topics: ["Backstage", "Kubernetes", "Cozystack", "GitOps", "Multi-tenancy", "Platform Engineering"]
language: "de"
companion_landing: "/de/dienstleistungen/internal-developer-platform/"
quiz:
  title: "Wissens-Check: IDP ohne Backstage-Lock-in"
  questions:
    - q: "Worin besteht der entscheidende Unterschied zwischen Plattform und Portal?"
      options:
        - { text: "Die Plattform ist die Oberfläche, das Portal ist das Backend", correct: false }
        - { text: "Die Plattform ist die Fähigkeitsschicht, das Portal die Oberfläche", correct: true }
        - { text: "Beide bezeichnen dasselbe, nur in unterschiedlichen Märkten", correct: false }
      explanation: "Das Kürzel IDP ist überladen: Die Internal Developer Platform ist die Fähigkeitsschicht mit Compute, Storage, Networking, Identität, Observability und Deployment-Automatisierung. Das Internal Developer Portal ist die Oberflächen- und Katalogschicht (Backstage, Port, Cortex). Eine Plattform ohne Portal funktioniert; ein Portal ohne Plattform ist Tapete."
    - q: "Wie viele Produktionsmuster für IDPs beschreibt der Artikel?"
      options:
        - { text: "Drei", correct: false }
        - { text: "Sechs", correct: true }
        - { text: "Zehn", correct: false }
      explanation: "Sechs Muster: (1) Multi-Mandanten-Cloud-Plattform auf Kubernetes-Basis (Cozystack), (2) GitOps-First mit Kubernetes je Team, (3) Service-Templates plus Golden Paths, (4) PaaS-Lite auf Kubernetes, (5) Backstage-First mit Capability-Operatoren, (6) External Services as Platform."
    - q: "Welcher Fehler steht an erster Stelle der Fallstricke?"
      options:
        - { text: "Mit dem Portal anfangen, bevor die Plattform trägt", correct: true }
        - { text: "Argo CD statt Flux als GitOps-Engine wählen", correct: false }
        - { text: "Zu viele SREs für das Plattformteam einstellen", correct: false }
      explanation: "Erster Fallstrick: mit dem Portal anfangen. Wer Backstage kauft, bevor die darunterliegenden Fähigkeiten wirklich self-service sind, bekommt einen schönen Katalog über demselben betrieblichen Chaos. Die Nutzung bleibt aus."
    - q: "Welches Muster empfiehlt der Artikel für Service-Provider und Multi-Mandanten-Cloud-Anbieter?"
      options:
        - { text: "PaaS-Lite auf Kubernetes", correct: false }
        - { text: "Muster 1, die Kubernetes-native Multi-Mandanten-Plattform", correct: true }
        - { text: "External Services as Platform", correct: false }
      explanation: "Muster 1 auf Cozystack-Basis: ein Kubernetes-Cluster mit harter Mandantentrennung über das Tenant CRD, KubeVirt für virtuelle Maschinen, Container-Workloads und verwaltete Datenbanken. Die beste Wahl für Service-Provider und Multi-Mandanten-Umgebungen."
    - q: "Was passiert, wenn das Plattformteam unterbesetzt ist?"
      options:
        - { text: "Es passiert nichts Nennenswertes, die Arbeit verteilt sich", correct: false }
        - { text: "Die Kapazität für Golden Paths verschwindet im Ticketbetrieb", correct: true }
        - { text: "Die Liefergeschwindigkeit der Produktteams steigt", correct: false }
      explanation: "Fallstrick 4: Plattformteams, die zugleich die Plattform bauen und die Rufbereitschaft für gemeinsame Dienste tragen, verbringen ihre Zeit mit Tickets. Die Kapazität für die Arbeit an den Golden Paths verschwindet, und die Funktion kommt zum Stillstand."
---

Begleitung zur **[IDP-Page](/de/dienstleistungen/internal-developer-platform)**.

## Plattform vs Portal — kritische Unterscheidung

- **Internal Developer Platform** — die Capability-Schicht (Compute, Storage, Networking, Identity, Observability, Deployment-Automatisierung)
- **Internal Developer Portal** — die UI/Catalog-Schicht (Backstage, Port, Cortex)

Plattform ohne Portal funktioniert. Portal ohne Plattform ist Tapete.

## Sechs IDP-Muster aus der Produktion

1. **Multi-Tenant Kubernetes-native Cloud-Plattform** — Cozystack
2. **GitOps-First per-Team Kubernetes** — vanilla K8s + Flux
3. **Service-Template + Golden-Path-Plattform**
4. **PaaS-Lite auf Kubernetes**
5. **Backstage-First mit Capability-Operatoren**
6. **External-Services-as-Platform**

## Wie wählt man

Je nach Multi-Tenancy-Bedarf, Produkt-Team-Autonomie, Service-Erstellungsrate, Kubernetes-Vertrautheit.

## Häufige Fehler

- Mit dem Portal anfangen
- Zu viele Meinungen, zu rigide
- Plattform-Team unterbesetzt
- Vendor-led „Plattform-in-a-Box“
- Für Engineering-Eleganz statt Adoption optimieren

---

*Ænix ist das Team hinter Cozystack.*

