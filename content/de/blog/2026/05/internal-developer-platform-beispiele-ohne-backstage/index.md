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
    - q: "Was ist die kritische Unterscheidung zwischen Plattform und Portal?"
      options:
        - { text: "Plattform ist UI, Portal ist Backend", correct: false }
        - { text: "Plattform = Capability-Schicht (Compute/Storage/Identity); Portal = UI/Catalog-Schicht. Plattform ohne Portal funktioniert. Portal ohne Plattform ist Tapete", correct: true }
        - { text: "Beide sind dasselbe", correct: false }
      explanation: "IDP ist überladen: Internal Developer Platform = die Capability-Schicht (Compute, Storage, Networking, Identity, Observability, Deployment-Automatisierung). Internal Developer Portal = die UI/Catalog-Schicht (Backstage, Port, Cortex). Plattform ohne Portal funktioniert; Portal ohne Plattform ist Tapete."
    - q: "Wie viele Produktions-IDP-Muster werden beschrieben?"
      options:
        - { text: "Drei", correct: false }
        - { text: "Sechs", correct: true }
        - { text: "Zehn", correct: false }
      explanation: "Sechs Muster: (1) Multi-Tenant Kubernetes-native Cloud-Plattform (Cozystack), (2) GitOps-First per-Team Kubernetes, (3) Service-Template + Golden-Path-Plattform, (4) PaaS-Lite auf Kubernetes, (5) Backstage-First mit Capability-Operatoren, (6) External-Services-as-Platform."
    - q: "Welcher häufige Fehler steht an erster Stelle der Pitfalls?"
      options:
        - { text: "Mit dem Portal anfangen (Backstage-First ohne Plattform)", correct: true }
        - { text: "Argo CD statt Flux verwenden", correct: false }
        - { text: "Zu viele SREs einstellen", correct: false }
      explanation: "Erster Pitfall: mit dem Portal anfangen. Backstage zu kaufen bevor die underlying Capabilities self-service sind, produziert einen schönen Katalog über demselben operativen Chaos. Adoption blockiert."
    - q: "Welches Muster wird für Service-Provider und Multi-Tenant Cloud-Builder empfohlen?"
      options:
        - { text: "PaaS-Lite", correct: false }
        - { text: "Muster 1 — Multi-Tenant Kubernetes-native Cloud-Plattform (Cozystack)", correct: true }
        - { text: "External-Services-as-Platform", correct: false }
      explanation: "Muster 1 (Cozystack): Single Kubernetes-Cluster mit hard-multi-tenancy, Tenant CRD, KubeVirt für VMs, Container-Workloads, verwaltete Datenbanken. Beste Wahl für Service-Provider und Multi-Tenant."
    - q: "Was passiert, wenn das Plattform-Team unterbesetzt ist?"
      options:
        - { text: "Nichts", correct: false }
        - { text: "Plattform-Team absorbiert sowohl Plattform-Build als auch On-Call für gemeinsame Services; Capacity für Golden-Path-Arbeit verschwindet; Funktion blockiert", correct: true }
        - { text: "Schnellere Velocity", correct: false }
      explanation: "Pitfall 4: Plattform-Teams die sowohl Plattform-Build als auch On-Call für gemeinsame Services absorbieren, verbringen ihre Zeit mit Tickets. Capacity für Golden-Path-Arbeit verschwindet. Die Funktion blockiert."
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
- Vendor-led "Plattform-in-a-Box"
- Für Engineering-Eleganz statt Adoption optimieren

---

*Aenix ist das Team hinter Cozystack.*

<!-- Word count: ~300. -->
