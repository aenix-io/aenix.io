---
title: "Developer Self-Service — Environments in Stunden, nicht Wochen"
description: "Das einzelne teuerste, was in den meisten Engineering-Organisationen passiert, ist die Wartezeit zwischen \"Team braucht Environment\" und \"Team hat..."
type: "page"
related_pages:
  - /de/dienstleistungen/internal-developer-platform
  - /de/dienstleistungen/platform-engineering
  - /de/produkte/private-cloud-platform/
  - /de/produkte/cozystack
language: "de"
quick_facts_style: "rows"
faq_style: "rows"
hreflang_en: /solutions/developer-self-service/
direct_answer: |
  **Developer Self-Service bedeutet, dass Produkt-Teams die häufigsten Plattform-Bedürfnisse — neue Environments, Services, Datenbanken, Object Storage, Observability oder CI/CD — eigenständig provisionieren, ohne ein Ticket zu öffnen, abgeschlossen in unter einer Stunde von Anfrage bis Lauf. Aenix baut diese Fähigkeit auf Cozystack (CNCF-Projekt, Apache 2.0) auf: KubeVirt für VMs und Container über eine Kubernetes-API, Cilium (eBPF) Networking und LINSTOR/DRBD Storage, mit Tenant-CRD-Mandantenfähigkeit. Statt Backstage nur als Oberfläche zu liefern, implementiert Aenix die zugrunde liegenden Golden Paths, die Anfragen in provisionierte Realität verwandeln — produktisiert in der Developer-Self-Service-Schicht der Ænix Private Cloud Platform plus Services.**

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
    value: "Produktisiert als Developer-Self-Service-Schicht der Ænix Private Cloud Platform plus Services; kostenloses Platform Engineering Maturity Assessment verfügbar"

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

**Der teuerste einzelne Vorgang in den meisten Engineering-Organisationen ist die Wartezeit zwischen "Team braucht ein Environment" und "Team hat ein Environment". Wenn diese Lücke Tage oder Wochen beträgt, sinkt die Produkt-Velocity messbar; beträgt sie nur Stunden, verzinst sich die Plattform-Investition über Jahre.**

Ænix baut Developer-self-service in Plattformen ein, die Produktteams auch wirklich nutzen — nicht Backstage als reine Fassade, sondern echte Golden Paths, die Anfragen ohne Ticket in bereitgestellte Realität verwandeln.

> **Passt zu:** **[Developer-Self-Service-Schicht der Ænix Private Cloud Platform](/de/produkte/private-cloud-platform/)** — Internal Developer Platform Layer mit GitLab-Automatisierung, Argo CD Workflows, APIs für self-service, Golden-Path-Templates und Dashboards für die Engineering-Produktivität. Kostenloses [Platform Engineering Maturity Assessment →](/de/ressourcen/platform-engineering-maturity-assessment/).

<div class="cta-row">
  <a class="cta-primary" href="/de/kontakt/">Discovery-Call buchen</a>
  <a class="cta-secondary" href="/de/blog/2026/05/internal-developer-platform-beispiele-ohne-backstage/">Leitfaden zu Self-Service-Pfaden lesen →</a>
</div>

---

## Wie Developer-self-service tatsächlich aussieht

<div class="arch-section__fig">
<div class="diagram">
<div class="diagram__node"><b>Anfrage des Produkt-Teams</b><div class="diagram__chips"><span>Environments, Services, Datenbanken</span></div></div>
<div class="diagram__conn">provisioniert ohne Ticket über</div>
<div class="diagram__node diagram__node--brand"><b>Golden Paths auf Cozystack</b><div class="diagram__chips"><span>GitLab-Automation, Argo CD Workflows</span></div></div>
<div class="diagram__conn">verwandelt in unter einer Stunde in</div>
<div class="diagram__node"><b>Provisionierte Realität</b></div>
</div>
</div>

Eine praktikable Arbeitsdefinition: Developer-self-service liegt dann vor, wenn die zehn häufigsten Bedürfnisse eines Produktteams ohne Ticket erfüllt werden können — von der Anfrage bis zum laufenden Betrieb in unter einer Stunde.

Häufige Anfragen:

1. Provisionierung neuer Environments (dev / staging / preview)
2. Bereitstellung neuer Services (HTTP API, Batch-Job, geplanter Job)
3. Datenbank-Provisionierung (managed Postgres / MySQL / Redis)
4. Object-Storage-Bucket
5. Observability-Onboarding (Metriken + Logs + Traces)
6. Secrets-Management
7. Netzwerkzugriff auf Legacy- oder Shared-Services
8. Identity- / SSO-Integration
9. CI/CD-Pipeline-Setup
10. Backup/DR für Stateful Workloads

Wenn 7 dieser 10 Punkte in Ihrer Organisation ein Ticket erfordern — genau dort setzt das Engagement an.

---

<div class="band-fullbleed band-fullbleed--tint">
<div class="band-fullbleed__inner">

## Wo die meisten "Self-Service"-Ansätze aufhören

- **Backstage nur als Katalog** — die Registry existiert, aber die eigentliche Provisionierung erfordert weiterhin ein Eingreifen des Plattform-Teams.
- **Halber Self-Service** — drei der zehn Anfragen laufen im self-service, sieben nicht.
- **Self-Service, der zerbricht** — funktioniert auf dem Golden Path, scheitert bei jeder Abweichung; die Produktteams verlieren das Vertrauen.
- **Dokumentation als Self-Service** — ein "Sie können das selbst erledigen", das auf ein Runbook verweist, das die Teams manuell interpretieren müssen.

Die ehrliche Variante braucht eine meinungsstarke Plattform darunter, nicht nur eine Katalog-Oberfläche.

</div>
</div>

---

## Wie Ænix arbeitet

Self-service ist Teil der umfassenderen Platform-Engineering-Arbeit — siehe **[Internal Developer Platform Services](/de/dienstleistungen/internal-developer-platform/)** und **[Platform Engineering Services](/de/dienstleistungen/platform-engineering/)** für die Einordnung des Engagements. Das self-service-spezifische Ergebnis ist:

- **Golden-Path-Inventar** — Ist-Zustand vs. Ziel für die 10 häufigsten Anfragen
- **Entworfene Self-Service-Pfade** — für die priorisierten Anfragen
- **Umsetzungs-Engagement** — Ænix-Ingenieure bauen die Pfade, integriert in Ihre Plattform
- **Framework für Adoptionsmetriken** — messen, was funktioniert

---

## Aufbau des Engagements

| Phase | Dauer |
|---|---|
| Discovery | 30 Min., kostenlos |
| Assessment | 14–28 Tage (im Rahmen des Platform Readiness Assessment) |
| Build | 1–6 Monate |

---

## Preisgestaltung

<div class="pricing-cards-2">

### Assessment
**Auf Anfrage**

### Build-Engagement
**Auf Anfrage**

</div>

---

## So starten Sie

<div class="cta-row">
  <a class="cta-primary" href="/de/kontakt/">Discovery-Call buchen</a>
</div>

- **[Artikel zu Self-Service-Pfaden](/de/blog/2026/05/internal-developer-platform-beispiele-ohne-backstage/)**
- **[Internal Developer Platform](/de/dienstleistungen/internal-developer-platform/)** — breiterer Umfang
- **[Platform Engineering Services](/de/dienstleistungen/platform-engineering/)** — breitester Umfang
- **[Cozystack](/de/produkte/cozystack/)**

---

*Ænix ist das Team hinter Cozystack (CNCF Project), und wir bieten die Ænix Platform an — unser kommerzielles, produktisiertes Angebot auf Basis von Cozystack.*
