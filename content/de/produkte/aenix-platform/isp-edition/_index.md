---
title: "Ænix Platform ISP Edition"
description: "Ænix Platform ISP Edition: schlüsselfertige Cloud-Plattform für Hosting-Anbieter und MSPs. WHMCS-Billing, Tenant-Suspension, Migration von VMware/OpenStack."
type: "page"
language: "de"
direct_answer: |
  **Die Ænix Platform ISP Edition ist eine schlüsselfertige, Kubernetes-native Cloud-Plattform für kleine und mittlere Hosting-Anbieter, MSPs, regionale Cloud-Anbieter und Rechenzentren. Sie bündelt Hosting-Panel, kundenseitiges Portal (cozyportal), Billing, Payment-Processing, Tenant-Suspension und Support in einem produktisierten Stack auf Basis des Open-Source-Projekts Cozystack (CNCF, Apache 2.0). Die Plattform ersetzt OpenStack, VMware Cloud Director, Virtuozzo und eigene In-House-Panels, ist WHMCS-integriert und in Wochen produktionsreif. Aenix liefert Enterprise-Support ab €1.3k/Monat sowie produktisierte Migrations-Module und Engagement-Expertise für den Umstieg von VMware, OpenStack, Virtuozzo und OpenNebula.**
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
    value: "Enterprise-Support ab €1.3k/Monat; höhere Tiers und Migrations-/Build-Engagements auf Anfrage"
faq:
  - q: "Wie unterscheidet sich die ISP Edition vom Selbstbetrieb von Open-Source-Cozystack?"
    a: "Cozystack liefert den Motor, die ISP Edition das fertige Auto: WHMCS-Integration, Billing, Kunden-Portal, Payment-Processing, Tenant-Suspension und Enterprise-Support — alle Surfaces, die ein echtes Cloud-Geschäft braucht. Cozystack bleibt Apache-2.0-Open-Source; die ISP Edition ergänzt produktisierte Module und einen Support-Tier."
  - q: "Was kostet die ISP Edition?"
    a: "Der Entry-Support-Tier startet ab €1.3k/Monat und umfasst direkten Support-Kanal, Zugang zu ISP-spezifischen Modulen und Migrations-Expertise. Höhere Tiers bringen einen Named Technical Account Manager. Migrations- und Build-Engagements werden projektbasiert im Discovery-Call kalkuliert."
  - q: "Können wir unser eigenes Billing statt WHMCS nutzen?"
    a: "Ja. Es gibt zwei Integrationsmodi: WHMCS als kundenseitiges Frontend mit Cozystack als Backend, oder cozyportal als Frontend mit WHMCS als Billing-Backend. Custom-Billing wird bei Bedarf unterstützt, da die Plattform vollständige Nutzungsdaten über eine klare API bereitstellt."
  - q: "Von welchen Plattformen migriert die ISP Edition?"
    a: "Aenix liefert produktisierte Module und Runbooks für die Migration von VMware Cloud Director / vSphere, OpenStack, Virtuozzo, OpenNebula und eigenen Panels. Häufigster Trigger 2026 ist der Broadcom-Subscription-Druck bei VMware. Migrationen erfolgen mit Erfahrung aus Produktions-Engagements."
  - q: "Wie lange dauert eine Migration von VMware?"
    a: "Der produktisierte Installer bringt die ISP Edition in Wochen live. Die eigentliche Kundenmigration ist workload-abhängig — typisch ist ein Parallel-Run mit kohorten-basierter Migration über 3-6 Monate für mittelgroße Hosting-Estates."
  - q: "Unterstützt die ISP Edition White-Label und Reseller-Modelle?"
    a: "Ja. cozyportal ist vollständig white-label-fähig pro Anbieter (Farben, Logo, Domain) und unterstützt ein Multi-Tier-Reseller-Modell (Aenix → MSP → MSP-Kunden). Das Partner-Programm bietet bis zu 40% Marge inklusive Deal-Registrierung, Sales-Kit und Technical-Pre-Sales-Support."
  - q: "Welche Services bietet der Katalog jenseits von VMs?"
    a: "Managed Databases (PostgreSQL via Cloud Native PG, MySQL via MariaDB, Redis, Kafka via Strimzi, ClickHouse via Altinity, RabbitMQ, NATS), S3-kompatibler Object Storage (SeaweedFS), HTTP-Cache, VPN-Service (Outline), Kubernetes-Cluster und GPU-Workloads — bereitstellbar per geführtem Wizard ohne YAML für Endkunden."
---

**Eine moderne Alternative zu OpenStack, gebaut für kleine und mittlere Hosting-Anbieter, MSPs, regionale Cloud-Anbieter und Rechenzentren. Turnkey Cloud-in-a-Box: Hosting-Panel, Billing, Kunden-Portal, Payments, Support — installieren, Nutzer einbinden, Betrieb starten. WHMCS-integriert. Produktionsreif in Wochen.**

<div class="cta-row">
  <a class="cta-primary" href="/contact/">Discovery-Call buchen</a>
  <a class="cta-secondary" href="/de/produkte/aenix-platform/">Alle Editions →</a>
</div>

---

## Quick facts

- **Für:** Kleine / mittlere Hosting-Anbieter, MSPs, regionale Clouds, Rechenzentren beim Modernisieren oder Erweitern des Cloud-Produkts
- **Foundation:** Open-Source Cozystack (CNCF-Projekt, Apache 2.0)
- **Entry-Pricing:** **Ab €1.3k/Monat** Support-Tier
- **Time-to-Live:** Wochen (mit produktisiertem Installer + Migrations-Tooling)
- **Ersetzt:** OpenStack, VMware Cloud Director, Virtuozzo, OpenNebula, eigene In-House-Panels
- **Architektur:** Kubernetes-nativ (Talos + KubeVirt + Cilium + LINSTOR + Tenant CRD + cozyportal + VictoriaMetrics + VictoriaLogs)

---

## Was in der ISP Edition enthalten ist

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

Fertige Module und Runbooks für Migration von VMware, OpenStack, Virtuozzo, OpenNebula. Aenix liefert Migration mit Erfahrung aus Produktions-Engagements.

### Fast Feature Delivery

Proprietäre Module (über Open-Source-Cozystack hinaus) ausgeliefert ohne die langen Wartezeiten typisch für Community-only-Plattformen.

### Enterprise-Support

24/7-Support mit Named Technical Account Manager (höhere Tiers). Entry-Tier ab €1.3k/Monat.

### Service-Katalog jenseits VMs

Managed Databases (PostgreSQL via Cloud Native PG, MySQL via MariaDB, Redis, Kafka via Strimzi, ClickHouse via Altinity, RabbitMQ, NATS Messaging), S3 Storage (SeaweedFS), HTTP-Cache (Nginx-basiert), VPN-Service (Outline), GPU-Workloads.

---

## Warum Hosting-Anbieter / MSPs ISP Edition statt OpenStack wählen

| Dimension | OpenStack | Ænix Platform ISP Edition |
|---|---|---|
| Time-to-Production | Typisch 6+ Monate | Wochen |
| Operations-Team-Größe | 8-15+ Engineers | 3-7 Engineers |
| Service-Katalog | DIY jenseits Core Compute / Storage / Network | Eingebaut: K8s, DBs, S3, GPU, Cache, VPN |
| Kundenseitiges Portal | DIY | cozyportal, gebrandet, inklusive |
| Billing | DIY-Integration | WHMCS-nativ + Stripe + regionale Anbieter |
| Multi-Tenancy | Project-Modell — limitiert | Tenant CRD mit Quotas / RBAC / Observability per Tenant |
| Migration von VMware | Schwere Aufgabe | Produktisierte Module + Aenix-Expertise |
| Vendor-Support | Community + Add-ons | Aenix Enterprise-Support ab €1.3k/Monat |
| Upgrade-Kadenz | Manuell / risikoreich | GitOps-managed, low-risk |

---

## Produktivkunden (derzeit auf aenix.io gelistet)

Regionale Hosting-Anbieter mit Ænix Platform ISP Edition: **GoHost.kz, HDReady, Beby Cloud, HiKube, UseTech, Cloupard, Cloudsy**.

Diese Kunden nutzen Ænix Platform ISP Edition, um Multi-Tenant-Cloud-Produkte an ihre Endkunden in der EU, DACH, Zentralasien und anderen Regionen zu liefern.

---

## Pricing

**Entry ab €1.3k/Monat Support-Tier.** Höhere Tiers und projektbasierte Migrations- / Build-Engagements auf Anfrage via Discovery-Call.

[ISP Edition Pricing diskutieren →](/de/kontakt/?edition=isp)

---

## Migrations-Pfade

Aenix liefert ISP Edition Migrationen mit produktisierten Modulen und Engagement-Expertise:

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

## Häufige Fragen

### Wie unterscheidet sich ISP Edition vom Selbstbetrieb von Open-Source-Cozystack?

Cozystack gibt Ihnen den Motor. ISP Edition gibt Ihnen das Auto: WHMCS-Integration, Billing, Kunden-Portal, Payment-Processing, Tenant-Suspension, Support — alle Surfaces, die ein echtes Cloud-Geschäft braucht. Plus Enterprise-Support-Tier.

### Was beinhaltet €1.3k/Monat?

Entry-Support-Tier — direkter Support-Kanal, Named TAM in höheren Tiers, Zugang zu ISP-spezifischen Modulen, Migrations-Expertise. Im Discovery-Call besprechen wir die aktuelle Tier-Aufteilung.

### Können wir unser eigenes Billing-System statt WHMCS nutzen?

Ja. Zwei Integrationsmodi:
1. **WHMCS-Frontend + Cozystack-Backend** — Ihre Kunden sehen WHMCS; Cozystack ist das Substrat
2. **cozyportal-Frontend + WHMCS-Backend** — Ihre Kunden sehen cozyportal; WHMCS handhabt Billing
Plus Support für Custom-Billing bei Bedarf.

### Wie lange dauert Migration von VMware?

Produktisierter Installer bringt ISP Edition in Wochen live. VMware-Kundenmigration ist workload-abhängig — typisches Muster ist Parallel-Run mit kohorten-basierter Migration über 3-6 Monate für mittelgroße Hosting-Estates.

### Unterstützen Sie White-Label?

Ja. cozyportal ist vollständig white-label-fähig pro Anbieter — Farben, Logo, Domain. Multi-Tier-Reseller-Modell unterstützt (Aenix → MSP → MSP-Kunden).

### Gibt es eine Managed-Operations-Option?

Ja. Aenix kann ISP Edition unter Vertrag betreiben, während Sie sich auf Kundenakquise konzentrieren. Im Discovery-Call besprechen.

---

## Wie starten

Buchen Sie einen 30-Minuten-Discovery-Call. Wir besprechen Ihr Hosting-Geschäft, aktuellen Stack, Kundenmix und ISP Edition Fit.

<div class="cta-row">
  <a class="cta-primary" href="/contact/">Discovery-Call buchen</a>
</div>

---

*Ænix Platform ISP Edition basiert auf [Cozystack](https://cozystack.io) — einem CNCF-Projekt, das wir erstellt haben und pflegen (derzeit CNCF Sandbox; CNCF Incubating erwartet Spätsommer 2026). Apache 2.0. Aenix ist das Open-Core-Unternehmen.*
