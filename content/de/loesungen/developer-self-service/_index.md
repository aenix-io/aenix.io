---
title: "Developer Self-Service — Umgebungen in Stunden statt Wochen"
seo_title: "Developer Self-Service: Umgebungen in Stunden"
description: "Developer Self-Service: Golden Paths, über die Produktteams Umgebungen, Datenbanken und Services ohne Ticket erhalten — in Stunden statt Wochen."
primary_keyword: "Developer Self-Service"
type: "page"
related_pages:
  - /de/dienstleistungen/internal-developer-platform/
  - /de/dienstleistungen/platform-engineering/
  - /de/produkte/private-cloud-platform/
  - /de/produkte/cozystack/
language: "de"
quick_facts_style: "rows"
faq_style: "rows"
hreflang_en: /solutions/developer-self-service/
direct_answer: |
  **Developer Self-Service ist die Platform-Engineering-Fähigkeit, mit der Produktteams Umgebungen, Datenbanken, Services, Storage und Observability selbst bereitstellen — ohne Ticket und typischerweise in weniger als einer Stunde von der Anfrage bis zum laufenden System. Sie richtet sich an Engineering-Organisationen, in denen die Zeit zwischen „Team braucht eine Umgebung“ und „Team hat eine“ auf Tage oder Wochen anwächst und die Produktgeschwindigkeit leidet. Ænix baut diese Fähigkeit in Plattformen ein, die Teams tatsächlich nutzen: Golden Paths mit klaren Vorgaben auf einer echten Plattformschicht, keine Katalogoberfläche als Fassade. Das Projekt liefert ein Inventar der Golden Paths für die zehn häufigsten Anfragen, Self-Service-Pfade, die Ænix-Ingenieure entwerfen und umsetzen, sowie ein Kennzahlen-Framework für die Nutzung. Die Arbeit läuft auf der Developer-Self-Service-Schicht, die Teil der Ænix Private Cloud Platform ist (kein separates Produkt) und auf Cozystack aufbaut.**
quick_facts:
  - label: "Was es ist"
    value: "Eine Platform-Engineering-Fähigkeit, mit der die häufigsten Anforderungen von Produktteams ohne Ticket erfüllt werden — in weniger als einer Stunde von der Anfrage bis zum laufenden System."
  - label: "Für wen"
    value: "Engineering-Organisationen, in denen Umgebungen, Datenbanken oder Services nur per Ticket an das Plattform-Team und nach Tagen oder Wochen Wartezeit bereitstehen."
  - label: "Geliefert auf"
    value: "Der Developer-Self-Service-Schicht der Ænix Private Cloud Platform — GitLab-Automatisierung, Argo-CD-Workflows, Golden-Path-Templates, Self-Service-APIs und Produktivitäts-Dashboards, aufgebaut auf Cozystack."
  - label: "Lizenz"
    value: "Apache 2.0 (keine Lizenzkosten pro CPU/Core)"
  - label: "Zeitplan"
    value: "Discovery 30 Minuten (kostenlos); Assessment zum Festpreis über 14 oder 28 Tage; Aufbau 1–6 Monate für den Self-Service-Umfang."
  - label: "Status"
    value: "Cozystack ist ein CNCF-Projekt (Sandbox seit 28.02.2025; der Antrag auf CNCF Incubation befindet sich in der Due-Diligence-Prüfung)"
faq:
  - q: "Was ist echter Developer Self-Service und was nur ein Katalog?"
    a: "Echter Self-Service heißt: Die häufigsten Anfragen von Produktteams werden ohne Ticket erledigt, in weniger als einer Stunde von der Anfrage bis zum laufenden System. Ein reiner Backstage-Katalog, bei dem die Bereitstellung weiterhin ein Eingreifen des Plattform-Teams erfordert, zählt nicht — das ist ein Verzeichnis, kein Self-Service."
  - q: "Welche Anfragen sollten zuerst in den Self-Service?"
    a: "Ænix grenzt die zehn häufigsten Anforderungen ab: Bereitstellung von Umgebungen, Deployment von Services, Datenbanken (PostgreSQL, MariaDB, Valkey), Object Storage, Observability-Onboarding, Secrets-Management, Netzwerkzugriff, SSO-Integration, CI/CD-Einrichtung sowie Backup und DR. Das Projekt priorisiert diejenigen, die in Ihrer Organisation noch ein Ticket erfordern."
  - q: "Wie liefert Ænix Developer Self-Service?"
    a: "Über ein Inventar der Golden Paths (Ist- gegenüber Zielzustand), Self-Service-Pfade für die priorisierten Anfragen, ein Umsetzungsprojekt, in dem Ænix-Ingenieure die Pfade in Ihre Plattform einbauen, und ein Kennzahlen-Framework, das misst, was funktioniert. Der Umfang ist Teil der übergreifenden Leistungen Internal Developer Platform und Platform Engineering."
  - q: "Auf welcher Plattform läuft der Self-Service?"
    a: "Auf der Developer-Self-Service-Schicht der Ænix Private Cloud Platform — Teil dieser Plattform, kein separates Produkt — mit GitLab-Automatisierung, Argo-CD-Workflows, Self-Service-APIs, Golden-Path-Templates und Dashboards zur Engineering-Produktivität. Sie baut auf Cozystack auf, das VMs und Container über KubeVirt auf einer Kubernetes-API betreibt, mit Cilium-eBPF-Networking und LINSTOR/DRBD-Storage."
  - q: "Wie lange dauert es, bis Produktteams sich selbst versorgen können?"
    a: "Das Discovery-Gespräch dauert 30 Minuten und ist kostenlos. Das Assessment zum Festpreis läuft 14 oder 28 Tage im Rahmen eines Platform Readiness Assessment. Der Aufbau dauert 1–6 Monate, je nachdem, wie viele Golden Paths im Umfang liegen und wie ausgereift die bestehende Plattform ist."
  - q: "Gibt es einen Vendor-Lock-in?"
    a: "Nein. Die Fähigkeit baut auf Cozystack auf, einem Open-Source-CNCF-Sandbox-Projekt unter Apache 2.0 ohne Lizenzkosten pro CPU oder Core. Golden Paths und Plattformschicht nutzen Standard-Kubernetes-APIs, das Fundament bleibt also portabel."
---

**Eine der teuersten Größen in den meisten Engineering-Organisationen ist die Wartezeit zwischen „Team braucht eine Umgebung“ und „Team hat eine Umgebung“. Dauert sie Tage oder Wochen, sinkt die Produktgeschwindigkeit messbar; dauert sie Stunden, zahlt sich die Plattforminvestition über Jahre aus.**

Ænix baut Developer Self-Service in Plattformen ein, die Produktteams tatsächlich nutzen — nicht Backstage als Fassade, sondern Golden Paths darunter, die bereitstellen, was ein Team anfordert, ohne dass es ein Ticket öffnen muss.

> **Passt zu:** **[Ænix Private Cloud Platform](/de/produkte/private-cloud-platform/)** und ihrer Developer-Self-Service-Schicht — GitLab-Automatisierung, Argo-CD-Workflows, Self-Service-APIs, Golden-Path-Templates, Dashboards zur Engineering-Produktivität. Kostenloses [Platform Engineering Maturity Assessment →](/de/ressourcen/platform-engineering-maturity-assessment/). Für Platform-Verantwortliche: siehe den [Leitfaden für Leiter Platform Engineering](/de/fuer/leiter-platform-engineering/).

<div class="cta-row">
  <a class="cta-primary" href="/de/kontakt/">Gespräch vereinbaren</a>
  <a class="cta-secondary" href="/de/blog/2026/05/developer-experience-plattform-self-service-pfade/">Leitfaden lesen →</a>
</div>

---

## Wie Developer Self-Service tatsächlich aussieht

Eine brauchbare Arbeitsdefinition: Developer Self-Service liegt vor, wenn die zehn häufigsten Anforderungen von Produktteams ohne Ticket erfüllt werden — in weniger als einer Stunde von der Anfrage bis zum laufenden System.

<div class="arch-section__fig">
<div class="diagram">
<div class="diagram__node"><b>Produktteams</b><div class="diagram__chips"><span>Umgebung</span><span>Datenbank</span><span>Service</span></div></div>
<div class="diagram__conn">fordern ohne Ticket an</div>
<div class="diagram__node diagram__node--brand"><b>Ænix Private Cloud Platform — Self-Service-Schicht</b><div class="diagram__chips"><span>Golden Paths</span><span>Self-Service-APIs</span></div></div>
<div class="diagram__conn">stellt auf Cozystack bereit</div>
<div class="diagram__node"><b>Bereitgestellte Services</b><div class="diagram__chips"><span>Object Storage</span><span>Observability</span><span>CI/CD</span></div></div>
<div class="diagram__conn">in weniger als einer Stunde</div>
<div class="diagram__node"><b>Produktgeschwindigkeit</b><div class="diagram__chips"><span>Stunden statt Wochen</span></div></div>
</div>
</div>

Häufige Anfragen:

1. Bereitstellung neuer Umgebungen (Dev / Staging / Preview)
2. Deployment neuer Services (HTTP-API, Batch-Job, geplanter Job)
3. Bereitstellung von Datenbanken (Managed PostgreSQL / MariaDB / Valkey)
4. Object-Storage-Bucket
5. Observability-Onboarding (Metriken, Logs, Traces)
6. Secrets-Management
7. Netzwerkzugriff auf Legacy- oder gemeinsam genutzte Services
8. Identity- und SSO-Integration
9. Einrichtung von CI/CD-Pipelines
10. Backup und DR für zustandsbehaftete Workloads

Wenn 7 dieser 10 Anfragen in Ihrer Organisation ein Ticket erfordern — genau dort setzt das Projekt an.

---

## Wo die meisten „Self-Service“-Ansätze aufhören

- **Backstage nur als Katalog** — das Verzeichnis existiert, die eigentliche Bereitstellung erfordert aber weiterhin ein Eingreifen des Plattform-Teams.
- **Halber Self-Service** — drei der zehn Anfragen laufen im Self-Service, sieben nicht.
- **Self-Service, der bricht** — funktioniert auf dem Golden Path, scheitert bei jeder Abweichung; die Produktteams verlieren das Vertrauen.
- **Dokumentation als Self-Service** — „Das können Sie selbst erledigen“ mit Verweis auf ein Runbook, das die Teams manuell auslegen müssen.

Die ehrliche Variante braucht darunter eine Plattform mit klaren Vorgaben, nicht nur eine Katalogoberfläche.

---

<div class="band-fullbleed band-fullbleed--tint">
<div class="band-fullbleed__inner">

## Wie Ænix arbeitet

Self-Service ist Teil der übergreifenden Platform-Engineering-Arbeit — zur Einordnung des Projekts siehe **[Internal Developer Platform](/de/dienstleistungen/internal-developer-platform/)** und **[Platform Engineering](/de/dienstleistungen/platform-engineering/)**. Speziell für den Self-Service entstehen:

- **Inventar der Golden Paths** — Ist- gegenüber Zielzustand für die 10 häufigsten Anfragen
- **Entworfene Self-Service-Pfade** — für die priorisierten Anfragen
- **Umsetzungsprojekt** — Ænix-Ingenieure bauen die Pfade, integriert in Ihre Plattform
- **Kennzahlen-Framework für die Nutzung** — misst, was funktioniert

</div>
</div>

---

## Projektaufbau

| Phase | Dauer |
|---|---|
| Discovery | 30 Min., kostenlos |
| Assessment | 14 oder 28 Tage, Festpreis (im Rahmen des Platform Readiness Assessment) |
| Aufbau | 1–6 Monate |

---

## Preise

<div class="pricing-cards-2">

### Assessment
**Auf Anfrage**

### Aufbauprojekt
**Auf Anfrage**

</div>

---

## So starten Sie

<div class="cta-row">
  <a class="cta-primary" href="/de/kontakt/">Gespräch vereinbaren</a>
</div>

- **[Artikel zu Self-Service-Pfaden](/de/blog/2026/05/developer-experience-plattform-self-service-pfade/)**
- **[Internal Developer Platform](/de/dienstleistungen/internal-developer-platform/)** — breiterer Umfang
- **[Platform Engineering](/de/dienstleistungen/platform-engineering/)** — breitester Umfang
- **[Cozystack](/de/produkte/cozystack/)**

---

*Ænix hat Cozystack (ein CNCF-Sandbox-Projekt) initiiert und pflegt es gemeinsam mit Maintainern anderer Unternehmen. Developer Self-Service ist Teil der Ænix Private Cloud Platform, einer von drei Ænix-Plattformen auf dieser Grundlage.*
