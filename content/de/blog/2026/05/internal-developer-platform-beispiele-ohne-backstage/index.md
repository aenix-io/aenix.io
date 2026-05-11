---
title: "Internal Developer Platform Beispiele — 6 architektonische Muster ohne Backstage-Lock-in"
description: "- Internal Developer Platform — die Capability-Schicht (Compute, Storage, Networking, Identity, Observability, Deployment-Automatisierung) - Internal..."
date: "2026-05-01"
author: "Aenix Team"
type: "article"
topics: ["Backstage", "Kubernetes", "Cozystack", "GitOps", "Multi-tenancy", "Platform Engineering"]
language: "de"
companion_landing: "/de/dienstleistungen/internal-developer-platform/"
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
