---
title: "Developer Self-Service — Environments in Stunden, nicht Wochen"
description: "Das einzelne teuerste, was in den meisten Engineering-Organisationen passiert, ist die Wartezeit zwischen \"Team braucht Environment\" und \"Team hat..."
type: "page"
related_pages:
  - /de/dienstleistungen/internal-developer-platform
  - /de/dienstleistungen/platform-engineering
  - /de/produkte/aenix-platform/idp-edition/
  - /de/produkte/cozystack
language: "de"
direct_answer: |
  **Developer Self-Service bedeutet, dass Produkt-Teams die häufigsten Plattform-Bedürfnisse — neue Environments, Services, Datenbanken, Object Storage, Observability oder CI/CD — eigenständig provisionieren, ohne ein Ticket zu öffnen, abgeschlossen in unter einer Stunde von Anfrage bis Lauf. Aenix baut diese Fähigkeit auf Cozystack (CNCF-Projekt, Apache 2.0) auf: KubeVirt für VMs und Container über eine Kubernetes-API, Cilium (eBPF) Networking und LINSTOR/DRBD Storage, mit Tenant-CRD-Mandantenfähigkeit. Statt Backstage nur als Oberfläche zu liefern, implementiert Aenix die zugrunde liegenden Golden Paths, die Anfragen in provisionierte Realität verwandeln — produktisiert in der Ænix Platform IDP Edition plus Services.**

quick_facts:
  - label: "Was es ist"
    value: "Self-Service-Plattform-Fähigkeit, mit der Produkt-Teams Environments, Services und Datenbanken ohne Ticket in unter einer Stunde provisionieren"
  - label: "Lizenz"
    value: "Apache 2.0 (keine CPU-/Core-basierte Lizenzierung)"
  - label: "Status"
    value: "Cozystack ist ein CNCF-Projekt (Sandbox seit 28.02.2025; Incubating erwartet Spätsommer 2026)"
  - label: "Zielgruppe"
    value: "Engineering-Organisationen, in denen die häufigsten Produkt-Team-Bedürfnisse heute Tickets erfordern und Wartezeiten Velocity bremsen"
  - label: "Schlüsselfunktion"
    value: "Golden-Path-Templates, GitLab-Automation und Argo CD Workflows statt Backstage als reine Oberfläche"
  - label: "Technische Basis"
    value: "Cozystack — KubeVirt (VMs + Container), Cilium (eBPF), LINSTOR/DRBD Storage, Tenant-CRD-Mandantenfähigkeit"
  - label: "Engagement"
    value: "Produktisiert als Ænix Platform IDP Edition plus Services; kostenloses Platform Engineering Maturity Assessment verfügbar"

faq:
  - q: "Was ist Developer Self-Service?"
    a: "Developer Self-Service ist erreicht, wenn die häufigsten zehn Produkt-Team-Bedürfnisse — Environments, Services, Datenbanken, Object Storage, Observability, Secrets, CI/CD und mehr — ohne Ticket befriedigt werden können, abgeschlossen in unter einer Stunde von Anfrage bis Lauf."
  - q: "Ist das nur Backstage?"
    a: "Nein. Backstage als Oberfläche ohne Substanz ist Tapete. Aenix implementiert die zugrunde liegenden Golden Paths — GitLab-Automation, Argo CD Workflows und APIs — die eine Anfrage tatsächlich in provisionierte Realität verwandeln, statt nur einen Katalog anzuzeigen."
  - q: "Auf welcher Technologie basiert die Plattform?"
    a: "Auf Cozystack, einem CNCF-Projekt unter Apache 2.0. Es nutzt KubeVirt für VMs und Container über eine Kubernetes-API, Cilium (eBPF) für Networking, LINSTOR/DRBD für Storage und das Tenant-CRD für Mandantenfähigkeit."
  - q: "Fällt eine CPU- oder Core-basierte Lizenzgebühr an?"
    a: "Nein. Cozystack steht unter Apache 2.0 ohne CPU- oder Core-basierte Lizenzierung. Aenix verkauft die produktisierte Ænix Platform und Services in Stufen: Basic 1.250 $/Monat (10 Nodes), Standard 3.000 $, Plus 5.500 $ und Enterprise nach Vereinbarung."
  - q: "Woran erkenne ich, dass dieses Engagement zu uns passt?"
    a: "Wenn sieben der zehn häufigsten Anfragen — Environment-Provisionierung, Service-Bereitstellung, Datenbanken, Object Storage, Observability, Secrets, CI/CD — in Ihrer Organisation heute ein Ticket erfordern, lebt dort das Engagement."
  - q: "Wie schnell sollen Environments verfügbar sein?"
    a: "Das Ziel ist die Lücke zwischen \"Team braucht Environment\" und \"Team hat Environment\" von Tagen oder Wochen auf Stunden zu verkürzen. Wird sie klein, kompoundiert die Plattform-Investition über Jahre statt Velocity zu verfallen."
---

**Das einzelne teuerste, was in den meisten Engineering-Organisationen passiert, ist die Wartezeit zwischen "Team braucht Environment" und "Team hat Environment". Wenn diese Lücke Tage oder Wochen ist, verfällt Produkt-Velocity messbar; wenn sie Stunden ist, kompoundiert die Plattform-Investition jahrelang.**

Aenix baut Developer-Self-Service-Fähigkeit in Plattformen, die Produkt-Teams tatsächlich adoptieren — nicht Backstage als Tapete, sondern zugrunde liegende Golden Paths, die Anfragen in provisionierte Realität verwandeln, ohne Tickets zu öffnen.

> **Passt zu:** **[Ænix Platform IDP Edition](/de/produkte/aenix-platform/idp-edition/)** — Internal Developer Platform Layer mit GitLab-Automation, Argo CD Workflows, APIs für Self-Service, Golden-Path-Templates, Engineering-Productivity-Dashboards. Kostenloses [Platform Engineering Maturity Assessment →](/de/ressourcen/platform-engineering-maturity-assessment/).

<div class="cta-row">
  <a class="cta-primary" href="/contact/">Discovery-Call buchen</a>
  <a class="cta-secondary" href="/de/blog/2026/05/developer-experience-platform-self-service-paths/">Self-Service-Pfade-Leitfaden lesen →</a>
</div>

---

## Was Developer-Self-Service tatsächlich aussieht

Eine nützliche Arbeitsdefinition: Developer-Self-Service ist, wenn die häufigsten 10 Produkt-Team-Bedürfnisse befriedigt werden können, ohne ein Ticket zu öffnen, abgeschlossen in unter einer Stunde von Anfrage bis Lauf.

Häufige Anfragen:

1. Neue Environment-Provisionierung (dev / staging / preview)
2. Neue Service-Bereitstellung (HTTP API, Worker, Scheduled Job)
3. Datenbank-Provisionierung (managed Postgres / MySQL / Redis)
4. Object-Storage-Bucket
5. Observability-Onboarding (Metriken + Logs + Traces)
6. Secrets-Management
7. Network-Zugang zu Legacy- oder Shared-Services
8. Identity / SSO-Integration
9. CI/CD-Pipeline-Setup
10. Backup/DR für Stateful-Workloads

Wenn 7 von diesen 10 Tickets in Ihrer Org erfordern — dort lebt das Engagement.

---

*Aenix ist das Open-Core-Unternehmen hinter [Cozystack](https://cozystack.io) (CNCF-Projekt). Hersteller von Ænix Platform — turnkey kommerzielle Cloud-in-a-Box in fünf Editions.*
