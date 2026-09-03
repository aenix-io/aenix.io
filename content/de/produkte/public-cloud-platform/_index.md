---
title: "Ænix Public Cloud Platform"
description: "Ænix Public Cloud Platform: schlüsselfertige Cloud-Plattform für Hosting-Anbieter und MSPs. WHMCS-Billing, Tenant-Suspension, Migration von VMware/OpenStack."
type: "page"
language: "de"
hreflang_en: /products/public-cloud-platform/
direct_answer: |
  **Die Ænix Public Cloud Platform ist eine schlüsselfertige, Kubernetes-native Cloud-Plattform für kleine und mittlere Hosting-Anbieter, MSPs, regionale Cloud-Anbieter und Rechenzentren. Sie bündelt Hosting-Panel, kundenseitiges Portal (cozyportal), Billing, Payment-Processing, Tenant-Suspension und Support in einem produktisierten Stack auf Basis des Open-Source-Projekts Cozystack (CNCF, Apache 2.0). Die Plattform ersetzt OpenStack, VMware Cloud Director, Virtuozzo und eigene In-House-Panels, ist WHMCS-integriert und in Wochen produktionsreif. Aenix liefert Enterprise-Support ab 1.250 USD/Monat sowie produktisierte Migrations-Module und Engagement-Expertise für den Umstieg von VMware, OpenStack, Virtuozzo und OpenNebula.**
quick_facts:
  - label: "Was es ist"
    value: "Schlüsselfertige Cloud-in-a-Box für Hosting-Anbieter und MSPs: Panel, Billing, Portal, Payments und Support auf Kubernetes-nativer Basis (Cozystack)"
  - label: "Für wen"
    value: "Kleine und mittlere Hosting-Anbieter, MSPs, regionale Cloud-Anbieter und Rechenzentren, die ihr Cloud-Produkt modernisieren oder erweitern"
  - label: "Lizenz"
    value: "Apache 2.0 (keine CPU-/Core-basierte Lizenzierung)"
  - label: "Status"
    value: "Cozystack ist ein CNCF-Projekt (Sandbox seit 28.02.2025; Incubating erwartet Spätsommer 2026)"
  - label: "Architektur"
    value: "Talos + KubeVirt (VMs und Container über eine Kubernetes-API), Cilium (eBPF) Networking, LINSTOR/DRBD Storage, Tenant-CRD-Mandantenfähigkeit, cozyportal, VictoriaMetrics + VictoriaLogs"
  - label: "Ersetzt"
    value: "OpenStack, VMware Cloud Director, Virtuozzo, OpenNebula, eigene In-House-Panels"
  - label: "Pricing"
    value: "Enterprise-Support ab 1.250 USD/Monat; höhere Tiers und Migrations-/Build-Engagements auf Anfrage"
faq:
  - q: "Wie unterscheidet sich die Public Cloud Platform vom Selbstbetrieb von Open-Source-Cozystack?"
    a: "Cozystack liefert den Motor, die Public Cloud Platform das fertige Auto: WHMCS-Integration, Billing, Kunden-Portal, Payment-Processing, Tenant-Suspension und Enterprise-Support — alle Surfaces, die ein echtes Cloud-Geschäft braucht. Cozystack bleibt Apache-2.0-Open-Source; die Public Cloud Platform ergänzt produktisierte Module und einen Support-Tier."
  - q: "Was kostet die Public Cloud Platform?"
    a: "Der Entry-Support-Tier startet ab 1.250 USD/Monat und umfasst direkten Support-Kanal, Zugang zu ISP-spezifischen Modulen und Migrations-Expertise. Höhere Tiers bringen einen Named Technical Account Manager. Migrations- und Build-Engagements werden projektbasiert im Discovery-Call kalkuliert."
  - q: "Können wir unser eigenes Billing statt WHMCS nutzen?"
    a: "Ja. Es gibt zwei Integrationsmodi: WHMCS als kundenseitiges Frontend mit Cozystack als Backend, oder cozyportal als Frontend mit WHMCS als Billing-Backend. Custom-Billing wird bei Bedarf unterstützt, da die Plattform vollständige Nutzungsdaten über eine klare API bereitstellt."
  - q: "Von welchen Plattformen migriert die Public Cloud Platform?"
    a: "Aenix liefert produktisierte Module und Runbooks für die Migration von VMware Cloud Director / vSphere, OpenStack, Virtuozzo, OpenNebula und eigenen Panels. Häufigster Trigger 2026 ist der Broadcom-Subscription-Druck bei VMware. Migrationen erfolgen mit Erfahrung aus Produktions-Engagements."
  - q: "Wie lange dauert eine Migration von VMware?"
    a: "Der produktisierte Installer bringt die Public Cloud Platform in Wochen live. Die eigentliche Kundenmigration ist workload-abhängig — typisch ist ein Parallel-Run mit kohorten-basierter Migration über 3-6 Monate für mittelgroße Hosting-Estates."
  - q: "Unterstützt die Public Cloud Platform White-Label und Reseller-Modelle?"
    a: "Ja. cozyportal ist vollständig white-label-fähig pro Anbieter (Farben, Logo, Domain) und unterstützt ein Multi-Tier-Reseller-Modell (Aenix → MSP → MSP-Kunden). Das Partner-Programm bietet bis zu 40% Marge inklusive Deal-Registrierung, Sales-Kit und Technical-Pre-Sales-Support."
  - q: "Welche Services bietet der Katalog jenseits von VMs?"
    a: "Managed Databases (PostgreSQL via Cloud Native PG, MySQL via MariaDB, Redis, Kafka via Strimzi, ClickHouse via Altinity, RabbitMQ, NATS), S3-kompatibler Object Storage (SeaweedFS), HTTP-Cache, VPN-Service (Outline), Kubernetes-Cluster und GPU-Workloads — bereitstellbar per geführtem Wizard ohne YAML für Endkunden."
aliases:
  - /de/produkte/aenix-platform/provider-edition/
  - /de/produkte/aenix-platform/public-cloud-edition/
---

**Eine moderne Alternative zu OpenStack, gebaut für kleine und mittlere Hosting-Anbieter, MSPs, regionale Cloud-Anbieter und Rechenzentren. Turnkey Cloud-in-a-Box: Hosting-Panel, Billing, Kunden-Portal, Payments, Support — installieren, Nutzer einbinden, Betrieb starten. WHMCS-integriert. Produktionsreif in Wochen.**

<div class="cta-row">
  <a class="cta-primary" href="/de/kontakt/">Discovery-Call buchen</a>
  <a class="cta-secondary" href="/de/produkte/">Alle Plattforms →</a>
</div>

**Sehen Sie das Kundenportal selbst.** Die cozyportal-Konsole ist das echte Kundenfrontend der Ænix Platform — sie läuft vollständig in Ihrem Browser mit Demodaten, ohne Anmeldung, ohne Cluster, ohne Setup.

<div class="cta-row">
  <a class="cta-primary" href="/demo/" target="_blank" rel="noopener">Live-Demo öffnen →</a>
</div>


---


---

## Was in der Public Cloud Platform enthalten ist

### WHMCS-Integration

Produktionsreifes WHMCS-Modul mit Billing-Templates für Ihr existierendes Hosting-Panel. Zwei Integrationsmodi — WHMCS als kundenseitiges Frontend oder cozyportal-Frontend mit WHMCS als Billing-Backend. Erfasst und speichert vollständige Nutzungsdaten mit klarer API.

### Hosting-Panel + kundenseitiges Portal

Gebrandetes Admin-Dashboard für den Betreiber + kundenseitiges Console-Portal (cozyportal mit Ihrem Branding). Self-Service-Registrierung, Profile, Team-Management, Support-Ticketing.

### Service-Erstellungs-Wizards

Einfache geführte UX zum Hochfahren von VMs, Kubernetes-Clustern, Managed Databases (PostgreSQL, MySQL, Redis, Kafka, ClickHouse, RabbitMQ, NATS), S3-kompatiblem Object Storage, GPU-Workloads. Kein YAML von Endkunden erforderlich.

### Tenant Lock / Suspension

Eingebaute Tenant-Lifecycle-Kontrollen — automatische Suspension überfälliger Tenants, Ressourcen-Blocking, Lock für Security-Review. Kein Engineering-Ticket erforderlich.

### Vollständiges Billing — Backend + Frontend

Usage-Metering, Invoicing, Payment-Processing. Stripe + regionale Zahlungsanbieter + B2B-Invoicing. Nicht nur API-Hooks — tatsächliche Produktions-Billing-Surface.

### Migrations-Expertise + Tooling

Fertige Module und Runbooks für Migration von VMware, OpenStack, Virtuozzo, OpenNebula. Ænix liefert Migration mit Erfahrung aus Produktions-Engagements.

### Fast Feature Delivery

Proprietäre Module (über Open-Source-Cozystack hinaus) ausgeliefert ohne die langen Wartezeiten typisch für Community-only-Plattformen.

### Enterprise-Support

24/7-Support mit Named Technical Account Manager (höhere Tiers). Entry-Tier ab 1.250 USD/Monat.

### Service-Katalog jenseits VMs

Managed Databases (PostgreSQL via Cloud Native PG, MySQL via MariaDB, Redis, Kafka via Strimzi, ClickHouse via Altinity, RabbitMQ, NATS Messaging), S3 Storage (SeaweedFS), HTTP-Cache (Nginx-basiert), VPN-Service (Outline), GPU-Workloads.

---

## Warum Hosting-Anbieter / MSPs Public Cloud Platform statt OpenStack wählen

| Dimension | OpenStack | Ænix Public Cloud Platform |
|---|---|---|
| Time-to-Production | Typisch 6+ Monate | Wochen |
| Operations-Team-Größe | 8-15+ Engineers | 3-7 Engineers |
| Service-Katalog | DIY jenseits Core Compute / Storage / Network | Eingebaut: K8s, DBs, S3, GPU, Cache, VPN |
| Kundenseitiges Portal | DIY | cozyportal, gebrandet, inklusive |
| Billing | DIY-Integration | WHMCS-nativ + Stripe + regionale Anbieter |
| Multi-Tenancy | Project-Modell — limitiert | Tenant CRD mit Quotas / RBAC / Observability per Tenant |
| Migration von VMware | Schwere Aufgabe | Produktisierte Module + Ænix-Expertise |
| Vendor-Support | Community + Add-ons | Ænix Enterprise-Support ab 1.250 USD/Monat |
| Upgrade-Kadenz | Manuell / risikoreich | GitOps-managed, low-risk |

---

## Produktivkunden (derzeit auf aenix.io gelistet)

Regionale Hosting-Anbieter mit Ænix Public Cloud Platform: **GoHost.kz, HDReady, Beby Cloud, HiKube, UseTech, Cloupard, Cloudsy**.

Diese Kunden nutzen Ænix Public Cloud Platform, um Multi-Tenant-Cloud-Produkte an ihre Endkunden in der EU, DACH, Zentralasien und anderen Regionen zu liefern.

---

## Pricing

**Entry ab 1.250 USD/Monat Support-Tier.** Höhere Tiers und projektbasierte Migrations- / Build-Engagements auf Anfrage via Discovery-Call.

[Public Cloud Platform Pricing diskutieren →](/de/kontakt/?edition=isp)

---

## Migrations-Pfade

Ænix liefert Public Cloud Platform Migrationen mit produktisierten Modulen und Engagement-Expertise:

- **Von VMware Cloud Director / vSphere** — häufigster 2026-Trigger (Broadcom-Subscription-Druck)
- **Von OpenStack** — Reduzierung operativer Komplexität; schnellere Feature-Velocity
- **Von Virtuozzo / OpenNebula** — Modernisierung von Legacy-Hosting-Stacks
- **Von eigenen Panels** — Konsolidierung von Multi-Vendor-Stacks unter einer Plattform

[VMware-Migrations-Hub →](/de/migration/vmware/) | [OpenStack-Migrations-Hub →](/de/migration/openstack/)

---

## Reseller- / Partner-Pricing

Bis zu 40% Marge auf Ænix-Platform-Verkäufe für Reseller, Integratoren und Distributoren. Inklusive Deal-Registrierung, Sales-Kit, Technical-Pre-Sales-Support, L3-Support-Zugang, Training.

[Partner-Programm →](/de/partner/)

---

## Pure Cozystack mit Ænix-Support (Entry-Tier)

Für Produkt-Teams, die Cozystack auf eigener / gemieteter Hardware (Hetzner, OVH, regionale Bare-Metal) laufen lassen ohne kommerzielle Portal-/Billing-Schicht:

**Cloud-Erfahrung auf kundenkontrollierter Hardware. Reduzieren Sie AWS-Level-Rechnungen 2-7×. Live-Migration von Public Clouds in 1-2 Wochen.** Vendor-Support, Architektur-Review und Migrations-Expertise — ohne kommerzielle Portal-/Billing-Schicht.

[Pure Cozystack Support diskutieren →](/de/kontakt/?edition=cozystack-support)

---


---

## Architektur-Review buchen

Erzählen Sie uns von Ihrem Hosting-Geschäft, aktuellen Stack und Kundenmix — wir richten ein fokussiertes Architektur-Review mit einem Ænix-Engineer ein und bestätigen den Public Cloud Platform Fit.

{{< pipedrive-form type="demo" >}}

Lieber ein kürzerer erster Schritt? [30-Minuten-Discovery-Call buchen](/de/kontakt/) stattdessen.

---

*Ænix Public Cloud Platform basiert auf [Cozystack](https://cozystack.io) — einem CNCF-Projekt, das wir erstellt haben und pflegen (derzeit CNCF Sandbox; CNCF Incubating erwartet Spätsommer 2026). Apache 2.0. Ænix ist das Open-Core-Unternehmen.*
