---
title: "Ænix Platform IDP Edition"
description: "Ænix Platform IDP Edition: Internal-Developer-Platform-Layer auf der Cozystack-Cloud-Foundation mit GitLab-Automation, Argo-CD-Workflows und Self-Service-APIs."
type: "page"
language: "de"
direct_answer: |
  **Die Ænix Platform IDP Edition ist ein produktisierter Internal-Developer-Platform-Layer auf einer Kubernetes-nativen Cloud-Foundation aus Cozystack. Sie richtet sich an Produkt- und SaaS-Organisationen mit starken Engineering-Teams, die in Developer Experience investieren. Die Edition liefert Golden Paths, Self-Service-APIs, GitLab-Automation, Argo-CD-Workflows und Service-Erstellungs-Wizards über einem Multi-Tenant-Kubernetes-Substrat — sodass Engineers Environments, Datenbanken und Cluster ohne Ticket-Queues hochfahren. Aenix baut, betreibt und pflegt die Plattform; die offene Cozystack-Foundation (Apache 2.0, KubeVirt, Cilium, LINSTOR, Tenant-CRD-Mandantenfähigkeit) bringt Tenancy, Observability, Secrets, Identity und Multi-Cluster bereits mit.**
quick_facts:
  - label: "Was es ist"
    value: "Produktisierter Internal-Developer-Platform-Layer (Golden Paths, Self-Service-APIs, GitLab, Argo CD) auf einer Kubernetes-nativen Cozystack-Cloud-Foundation"
  - label: "Für wen"
    value: "Produkt- und SaaS-Organisationen mit starken Engineering-Teams, typisch 300+ Engineers (kleinere Teams mit hohem DevEx-Fokus passen ebenfalls)"
  - label: "Foundation"
    value: "Open-Source Cozystack — KubeVirt (VMs + Container auf einer Kubernetes-API), Cilium (eBPF) Networking, LINSTOR/DRBD Storage, Tenant-CRD-Mandantenfähigkeit"
  - label: "Lizenz"
    value: "Apache 2.0 (keine CPU-/Core-basierte Lizenzierung)"
  - label: "Status"
    value: "Cozystack ist ein CNCF-Projekt (Sandbox seit 28.02.2025; Incubating erwartet Spätsommer 2026)"
  - label: "Engagement"
    value: "€300k - €2M Projekt; Time-to-Production 6-12 Monate; Managed-Retainer post-Deployment optional"
faq:
  - q: "Was ist die Ænix Platform IDP Edition?"
    a: "Ein produktisierter Internal-Developer-Platform-Layer auf einer Kubernetes-nativen Cozystack-Cloud-Foundation. Sie liefert Golden Paths, Self-Service-APIs, GitLab-Automation, Argo-CD-Workflows und Service-Erstellungs-Wizards, mit denen Engineers Environments, Datenbanken und Cluster ohne Ticket-Queues bereitstellen."
  - q: "Wie unterscheidet sich die IDP Edition von Backstage?"
    a: "Backstage ist ein internes Tool, das Sie selbst bauen und betreiben. Die IDP Edition ist ein managed Plattform-Produkt mit inkludierter Cloud-Foundation: Aenix baut und betreibt den Stack, während Ihr Engineering die Golden Paths besitzt. Cozystack liefert Tenancy, Observability, Secrets und Multi-Cluster bereits mit."
  - q: "Auf welcher Technologie basiert die IDP Edition?"
    a: "Auf Open-Source Cozystack, einem CNCF-Projekt unter Apache 2.0. Die Foundation nutzt KubeVirt für VMs und Container auf einer Kubernetes-API, Cilium (eBPF) für Networking, LINSTOR/DRBD für Storage und ein Tenant-CRD für Mandantenfähigkeit. Observability läuft über VictoriaMetrics und VictoriaLogs."
  - q: "Was kostet die IDP Edition?"
    a: "Pricing auf Anfrage. Typische Engagements liegen bei €300k - €2M Projekt, mit optionalem Managed-Retainer nach dem Deployment. Time-to-Production beträgt 6-12 Monate für einen typischen IDP-Build, kürzer bei Golden-Path-only-Scope."
  - q: "Wer kauft die IDP Edition typischerweise?"
    a: "Produkt- und SaaS-Organisationen mit starken Engineering-Teams — VP Engineering, SaaS-CTOs und Plattform-Engineering-Leads, die eine IDP-as-Product statt eines weiteren internen Tools wollen. Typisch ab 300+ Engineers, aber auch kleinere Teams mit hohem Developer-Experience-Fokus."
  - q: "Vermeidet die IDP Edition Vendor-Lock-in?"
    a: "Ja. Die Foundation ist Open-Source Cozystack unter Apache 2.0 ohne CPU-/Core-basierte Lizenzierung. Der gesamte Stack läuft auf Standard-Kubernetes-APIs, sodass keine proprietäre Bindung an Aenix entsteht."
---

**Ein Internal Developer Platform Layer auf einer Kubernetes-nativen Cloud. GitLab-Automation, Argo CD Workflows und APIs — damit Ihre Engineers weniger Zeit mit Routine-Arbeit und mehr Zeit mit Produkt-Auslieferung verbringen. Inklusive der vollständigen Cozystack-basierten Cloud darunter: Tenancy, Observability, Secrets, Identity, Multi-Cluster.**

<div class="cta-row">
  <a class="cta-primary" href="/contact/">Discovery-Call buchen</a>
  <a class="cta-secondary" href="/de/produkte/aenix-platform/">Alle Editions →</a>
</div>

---

## Quick facts

- **Für:** Produkt- / SaaS-Organisationen mit starken Engineering-Teams, die in Developer Experience investieren (typisch 300+ Engineers, aber kleinere Teams mit hohem DevEx-Fokus passen auch)
- **Foundation:** Open-Source Cozystack (CNCF-Projekt, Apache 2.0)
- **Engagement-Größe:** €300k - €2M Projekt; Managed-Retainer post-Deployment
- **Time-to-Production:** 6-12 Monate für typischen IDP-Build; kürzer für Golden-Path-only-Scope
- **Architektur:** Kubernetes-native Cloud + IDP-Layer (GitLab, Argo CD, APIs, Golden Paths, Service-Erstellungs-Wizards, internes Portal)

---

## Was in der IDP Edition enthalten ist

### Internal Developer Platform Layer

Eine Plattform-Produkt-Schicht über der Cozystack-Cloud-Foundation. Bietet Golden Paths, Self-Service-Primitives und Developer-zentrische APIs über das darunterliegende Multi-Tenant-Kubernetes-Substrat.

### GitLab-Automation

Vor-integrierte GitLab-Patterns für CI/CD, Environments, Secrets, Deployment-Promotion. Templates für gängige Workload-Typen (Web Service, Worker, Batch Job, ML Pipeline). Alternative SCM-Integrationen unterstützt (GitHub, Bitbucket).

### Argo CD Workflows

Produktionsreifes Argo CD Setup mit Multi-Cluster, Multi-Environment, App-of-Apps-Pattern. PR-driven Changes für App + Infra. Drift-Detection + Remediation.

### APIs für Self-Service

Service-Erstellungs-APIs für Engineers zum Hochfahren von Environments, Datenbanken (Managed PostgreSQL / MySQL / Redis / Kafka / ClickHouse), Object Storage, K8s-Clustern, Observability-Scopes, Identity-Bindings — ohne Ticket-Queues.

### Service-Erstellungs-Wizards

Geführte UX für gängige Workload-Patterns. Engineers beschreiben Outcomes (Workload + SLO + Tenancy); die Plattform realisiert sie. Anpassbar an organisations-spezifische Golden Paths.

### Multi-Tenant Tenant CRD

Tenancy aus der Cloud-Foundation oberflächt als IDP's Team / Squad / Project-Modell. Quotas, RBAC, Observability-Scoping per Team.

### Hosting-Panel + Admin-Interface

Gebrandetes Admin-Dashboard für das Plattform-Team. Engineering-Productivity-Dashboards (Time-to-Environment, Deployment-Frequency, Lead Time, Drift-Events).

### Observability + SLOs

Unified Observability (VictoriaMetrics + VictoriaLogs) mit Team-scoped Views. SLO-Disziplin für Tier-1-Services. Alert-Hygiene eingebaut in Golden Paths.

### Secrets, Identity, Networking

Zentralisierte Secrets (Vault / External Secrets Operator), Workload-Identity (OIDC / SPIFFE), NetworkPolicy / Cilium für Tenant-Isolation.

### Bildung und Training

Plattform-Engineering-Team-Training als Teil des Engagements. Kurs (Kubernetes Deep Dive) optional gebündelt für breitere Engineering-Befähigung.

---

## Wer kauft IDP Edition

| Buyer | Typisches Engagement |
|---|---|
| Produkt-Unternehmen VP Engineering | "Wir brauchen eine IDP. Wir haben Backstage evaluiert, wollen aber einen managed Platform-Produkt-Ansatz mit der Cloud-Foundation inklusive." |
| SaaS CTO | "Wir geben zu viel Engineering-Zeit für Infra aus. Wir wollen Golden Paths und Self-Service für die nächsten 50-200 Engineers." |
| Mittlerer-bis-Großer-Enterprise-Plattform-Engineering-Lead | "Wir wollen IDP-as-Product, nicht noch-ein-internes-Tool. Aenix's Produkt-Mindset und Cozystack-Foundation sind das Paket." |

---

## Pricing

Pricing auf Anfrage — €300k - €2M Projekt; Managed-Retainer post-Deployment.

[IDP Edition diskutieren →](/de/kontakt/?edition=idp)

---

## Engagement-Struktur

- **Discovery-Call** (30 min, kostenlos)
- **Platform Readiness Assessment** (5-10 Tage, Festpreis) — aktuelle Plattform-Engineering-Reife (nutzen Sie unser [kostenloses Maturity Assessment](/de/ressourcen/platform-engineering-maturity-assessment/)), Gap-Analyse, IDP-Design
- **Pilot-Engagement** (3-6 Monate) — Golden Paths für Top-3-Workload-Typen, erstes Squad onboarded
- **Vollständiger IDP-Build** (6-12 Monate) — produktive IDP mit allen primären Workload-Typen, vollständigem Self-Service, Observability + DR + Tenancy at IDP-scale
- **Managed-Retainer** (optional, laufend) — Aenix betreibt die Plattform-Foundation während Customer-Engineering die Golden Paths besitzt

[Platform Readiness Assessment →](/de/dienstleistungen/platform-readiness-assessment/) | [Kostenloses Platform Engineering Maturity Assessment →](/de/ressourcen/platform-engineering-maturity-assessment/)

---

## Kunden-Evidenz

IDP Edition Kunden sind derzeit NDA-geschützt. Produkt- / SaaS-Engagements aktiv. Anonymisierte Phrasierung: "Mittel-bis-großes Produkt-Unternehmen baut IDP für 300+ Engineers".

---

## Wie starten

Buchen Sie einen 30-Minuten-Discovery-Call. Bringen Sie Ihre Plattform-Engineering-Reife-Selbsteinschätzung mit (oder nutzen Sie unser [kostenloses Assessment](/de/ressourcen/platform-engineering-maturity-assessment/)).

<div class="cta-row">
  <a class="cta-primary" href="/contact/">Discovery-Call buchen</a>
</div>

---

*Ænix Platform IDP Edition basiert auf [Cozystack](https://cozystack.io) — einem CNCF-Projekt, das wir erstellt haben und pflegen (derzeit CNCF Sandbox; CNCF Incubating erwartet Spätsommer 2026). Apache 2.0. Aenix ist das Open-Core-Unternehmen.*
