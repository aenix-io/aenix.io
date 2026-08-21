---
title: "Ænix Platform"
description: "Ænix Platform — turnkey Cloud-in-a-Box von Aenix auf Open-Source-Cozystack. Zwei Editions, Hosting-Panel, Billing, Portale, Payments, bereit zum Betrieb."
language: "de"
quick_facts_style: "rows"
faq_style: "rows"
direct_answer: |
  **Ænix Platform ist eine turnkey Cloud-in-a-Box von Aenix, dem Open-Core-Unternehmen hinter Cozystack. Sie basiert auf dem Open-Source-Projekt Cozystack (CNCF-Sandbox-Projekt, Apache 2.0) und ergänzt alles, was ein Betreiber für ein echtes Cloud-Geschäft braucht: Hosting-Panel, User- / Admin- / Support-Portale, Service-Erstellungs-Wizards, vollständiges Billing (Backend + Frontend), Payment-Integrationen, WHMCS-Integration und Enterprise-SLA. Das Produkt gibt es in zwei Editions — Provider, wenn Sie Cloud an Kunden verkaufen, und Enterprise, wenn Sie sie für die eigene Organisation betreiben — dazu die Module AI & GPU und Developer Self-Service. Technisch ist die Plattform Kubernetes-nativ (KubeVirt für VMs und Container, Cilium für eBPF-Networking, LINSTOR für Storage, Tenant-CRD-Mandantenfähigkeit) und läuft auf kundenkontrollierter Hardware.**
quick_facts:
  - label: "Was es ist"
    value: "Turnkey Cloud-in-a-Box (kommerzielles Produkt + Services von Aenix), basierend auf Open-Source-Cozystack, in zwei Editions"
  - label: "Lizenz"
    value: "Apache 2.0 (keine CPU-/Core-basierte Lizenzierung)"
  - label: "Status"
    value: "Cozystack ist ein CNCF-Projekt (Sandbox seit 28.02.2025; Incubating erwartet Spätsommer 2026)"
  - label: "Zielgruppe"
    value: "Public-Cloud-Betreiber, Hosting-Anbieter / MSPs, regulierte Unternehmen (DORA / NIS2), Produkt- / SaaS-Teams und KI-lastige Organisationen"
  - label: "Architektur"
    value: "Kubernetes-nativ — KubeVirt (VMs + Container über eine API), Cilium (eBPF-Networking), LINSTOR (Storage), Tenant-CRD-Mandantenfähigkeit, kundenkontrollierte Hardware"
  - label: "Was über Cozystack hinaus hinzukommt"
    value: "Hosting-Panel, User- / Admin- / Support-Portale, Service-Wizards, vollständiges Billing, Console-Portal, Payment- und WHMCS-Integration, Enterprise-SLA"
  - label: "Engagement-Modell"
    value: "Lizenz + Services Bundle; Provider Edition-Entry ab 1.250 USD/Monat (Support-Tier), Full Builds nach RFP"
faq:
  - q: "Was fügt Ænix Platform über Open-Source-Cozystack hinaus hinzu?"
    a: "Cozystack ist die Foundation — eine Kubernetes-native Multi-Tenant-Cloud-Plattform. Ænix Platform ergänzt Hosting-Panel, User- / Admin- / Support-Portale, Service-Erstellungs-Wizards, vollständiges Billing (Backend + Frontend), Console-Portal, Usage-Charts, Payment- und WHMCS-Integration, produktisierten Installer, Enterprise-SLA, dedizierten Support sowie Edition-spezifische Features und Compliance-fertige Bundles."
  - q: "Was kostet Ænix Platform?"
    a: "Pricing hängt von Edition und Engagement-Scope ab. Die Provider Edition startet ab 1.250 USD/Monat im Support-Tier. Provider-Builds im Betreiber-Maßstab und Enterprise-Full-Builds werden nach RFP angeboten."
  - q: "Welche der beiden Editions passt zu meiner Organisation?"
    a: "Provider Edition, wenn Sie Cloud-Kapazität an Kunden verkaufen — Hosting-Anbieter und MSPs am einen Ende, Telcos, nationale Betreiber und große Public Clouds am anderen. Enterprise Edition, wenn Sie Cloud unter Aufsicht für die eigene Organisation betreiben. Die Module AI & GPU und Developer Self-Service erweitern beide. Im Zweifel klärt ein Discovery-Call den Fit."
  - q: "Ist Cozystack wirklich Open Source und herstellerneutral?"
    a: "Ja. Cozystack steht unter Apache 2.0 und ist ein CNCF-Sandbox-Projekt (seit 28.02.2025), das Aenix erstellt hat und pflegt. Es gibt keine CPU- oder Core-basierte Lizenzierung. Ænix Platform ist die kommerzielle, produktisierte Schicht darüber; die Open-Source-Basis bleibt frei nutzbar."
  - q: "Auf welcher Hardware läuft Ænix Platform?"
    a: "Auf kundenkontrollierter Hardware — eigene Rechenzentren oder gemietete Bare-Metal-Server (etwa Hetzner oder OVH). Die Plattform ist Kubernetes-nativ und nutzt KubeVirt für VMs und Container, Cilium für Networking und LINSTOR für Storage. Es besteht keine Bindung an einen Public-Cloud-Anbieter."
  - q: "Unterstützt Ænix Platform die Migration von VMware oder OpenStack?"
    a: "Ja. Es gibt Migrations-Tooling und -Expertise für die Migration von VMware, OpenStack, OpenNebula und Virtuozzo. Eine Control Plane kann bestehende Umgebungen wie VMware, OpenNebula oder OpenShift verbinden, was schrittweise Migrationen ohne Big-Bang-Umstellung ermöglicht."
---

**Ænix Platform ist eine turnkey Cloud-in-a-Box. Sie basiert auf dem Open-Source-Projekt Cozystack, das wir erstellt haben und pflegen (CNCF-Projekt, Apache 2.0), und ergänzt alles, was ein Betreiber braucht, um ein echtes Cloud-Geschäft zu führen: Hosting-Panel, User- / Admin- / Support-Portale, Service-Erstellungs-Wizards, vollständiges Billing (Backend + Frontend), Payment-Integrationen, WHMCS-Integration, Enterprise-SLA. Zwei Editions decken beide Fälle ab. Installieren. Nutzer einbinden. Betrieb starten.**

<div class="cta-row">
  <a class="cta-primary" href="/de/kontakt/">Discovery-Call buchen</a>
  <a class="cta-secondary" href="https://cozystack.io">Cozystack Open Source →</a>
</div>

---

## Was Ænix Platform über Open-Source-Cozystack hinaus liefert

Cozystack ist der Motor. Ænix Platform ist das Auto — turnkey Cloud mit allem, was ein echter Betreiber braucht:

<div class="arch-section__fig">
<div class="diagram">
<div class="diagram__node diagram__node--brand"><b>Ænix Platform</b><div class="diagram__chips"><span>Hosting-Panel</span><span>Billing</span><span>Portale</span><span>WHMCS-Integration</span><span>Enterprise-SLA</span></div></div>
<div class="diagram__conn">produktisiert</div>
<div class="diagram__node"><b>Cozystack</b><div class="diagram__chips"><span>Tenant-CRD-Mandantenfähigkeit</span><span>Service-Wizards</span><span>Admin-UI</span></div></div>
<div class="diagram__conn">läuft auf</div>
<div class="diagram__node"><b>Kubernetes-nativ</b><div class="diagram__chips"><span>KubeVirt</span><span>Cilium (eBPF)</span><span>LINSTOR</span></div></div>
<div class="diagram__conn">auf</div>
<div class="diagram__node"><b>kundenkontrollierte Hardware</b><div class="diagram__chips"><span>eigene Rechenzentren</span><span>gemietete Bare-Metal-Server</span></div></div>
</div>
</div>

![Ænix Platform console — managed tenant Kubernetes clusters](/images/uploads/2026/04/cozystack-managed-kubernetes.png)


| Schicht | Was es ist |
|---|---|
| **Hosting-Panel** | Gebrandetes Admin-Dashboard für den Plattform-Betreiber |
| **User-Management** | Self-Service-Registrierung, Profile, Team-Management |
| **Admin-Interface** | Steuerungsoberfläche des Betreibers — Provisioning, Quotas, Alerts, Suspension |
| **Support-Portal** | Ticketing, Knowledge Base, kundenseitige Support-Workflows |
| **Service-Erstellungs-Wizards** | Geführte UX für VMs, K8s-Cluster, Datenbanken, S3, GPU-Workloads |
| **Vollständiges Billing — Backend + Frontend** | Usage-Metering, Invoicing, Payment-Processing — nicht nur API-Hooks |
| **Console-Portal** | Kundenseitige Cloud-Console (cozyportal mit Ihrem Branding) |
| **Usage-Charts und -Graphen** | Eingebaute Analytics + Observability-Dashboards |
| **Payment-Integrationen** | Stripe, regionale Anbieter, B2B-Invoicing-Flows |
| **WHMCS-Integration** | Turnkey für Hosting-Anbieter, die bereits WHMCS nutzen |
| **Enterprise-SLA + dedizierter Support** | 24/7 für höhere Tiers; Named TAM |
| **Produktisierter Installer** | Beschleunigtes Deployment vs manuelle / GitOps-Cozystack-Einrichtung |
| **Compliance-fertige Bundles** | Vorvalidiert gegen DORA / NIS2, ISO 27001 / SOC 2 |
| **Migrations-Tooling und -Expertise** | Module für Migration von VMware, OpenStack, OpenNebula, Virtuozzo |

---

<div class="band-fullbleed band-fullbleed--tint">
<div class="band-fullbleed__inner">

## Zwei Editions

Eine Frage entscheidet, welche Sie brauchen: Verkaufen Sie Cloud-Kapazität an andere, oder betreiben Sie sie für die eigene Organisation? Alles andere — Maßstab, Regionen, Aufsicht, GPUs — ist Konfiguration darauf.

### Ænix Platform Provider Edition

Für alle, deren Kunden nicht die eigenen Kolleginnen und Kollegen sind: Hosting-Anbieter, MSPs, regionale Clouds und Rechenzentren am einen Ende; Telcos, nationale Betreiber und Banken mit kommerzieller Cloud am anderen.

Billing-Backend und -Frontend, WHMCS-Integration, Payment-Processing, White-Label-Kundenportal, Tenant-Sperrung und -Suspendierung, Reseller-Stufen, Service-Erstellungs-Wizards. Im Betreiber-Maßstab kommen eine Multi-Region-Control-Plane und die Föderation mit dem VMware-, OpenNebula- oder OpenShift-Bestand hinzu, den Sie ablösen.

**Wie es gekauft wird:** veröffentlichte Preisliste ab **1.250 USD/Monat** pro 10 Nodes im Anbieter-Maßstab; Multi-Region-Programme nach RFP.

[Provider Edition Details →](/de/produkte/aenix-platform/provider-edition/) · [Im Betreiber-Maßstab →](/de/produkte/aenix-platform/public-cloud-edition/)

### Ænix Platform Enterprise Edition

Für Organisationen, die Cloud unter Aufsicht für sich selbst betreiben: Banken, Versicherer, öffentliche Verwaltung, Telcos, Gesundheitswesen, Energie, Hochschulen.

Private und hybride souveräne Cloud über mehrere Rechenzentren. DORA- und NIS2-Architekturkontrollen, kundenverwaltete Schlüssel, auditfähiges Logging, Air-Gap-Deployment, eine Control Plane über VMware, OpenNebula und OpenShift. Schulung inklusive.

**Wie es gekauft wird:** mehrjähriger Plattform-Build, Angebot nach RFP. Tier-1-europäische Banken unter NDA.

[Enterprise Edition Details →](/de/produkte/aenix-platform/enterprise-edition/)

### Zwei Module, für beide Editions

Beide laufen als gewöhnliche Workloads auf derselben Plattform — sie hinzuzunehmen ist eine Konfigurationsentscheidung, keine zweite Beschaffung.

**AI & GPU** — mandantenfähiges GPU-Scheduling mit Fractioning und MIG, Model Serving, fertige Blueprints, Vektordatenbanken. Ein Anbieter verkauft das als GPU-as-a-Service, ein Unternehmen betreibt darauf die eigene Inferenz. [Details →](/de/produkte/aenix-platform/ai-ml-edition/)

**Developer Self-Service** — die IDP-Ebene: Golden Paths, GitLab-Automatisierung, Argo-CD-Workflows, Self-Service-APIs für Umgebungen, Datenbanken, Storage und Cluster. Meist zusammen mit der Enterprise Edition gekauft. [Details →](/de/produkte/aenix-platform/idp-edition/)

## Entry-Tier — Pure Cozystack mit Ænix-Support

Für Produkt-Teams, die auf eigener / gemieteter Hardware (Hetzner, OVH, regionale Bare-Metal) laufen und Vendor-Support ohne kommerzielle Portal-/Billing-Schicht wollen.

Cloud-Erfahrung auf kundenkontrollierter Hardware. Reduzieren Sie AWS-Level-Rechnungen 2-7×. Live-Migration von Public Clouds in 1-2 Wochen.

[Pure Cozystack mit Ænix-Support →](/de/produkte/aenix-platform/provider-edition/#cozystack-support-tier)

---

## Ænix Platform vs Cozystack — was ist der Unterschied?

| Dimension | Cozystack (Open Source) | Ænix Platform (kommerziell) |
|---|---|---|
| Lizenz | Apache 2.0 (kostenlos) | Kommerziell |
| Wartung | Aenix + Community | Aenix-managed für zahlende Kunden |
| SLA | Best-Effort, Community | Enterprise-SLA-Stufen |
| Installer | Manuell / GitOps | Produktisiert, beschleunigt |
| Kunden-Portal | cozyportal generisch | Markenanpassung pro Kunde |
| Billing | Nur API-Hooks | Vollständig Back+Front, Payment-Integrationen, WHMCS |
| Support | Community Slack / GitHub | Dedizierte Kanäle pro Tier |
| Hosting-Panel | — | Inklusive |
| Admin-Interface | kubectl / GitOps | Eingebautes Admin-UI + Service-Wizards |
| Compliance | Architektur-aligniert | Zertifizierte Bundles (ISO, SOC) |
| Roadmap-Einfluss | Community-getrieben | Kundenanforderungen werden gehört |
### Was fügt Ænix Platform über Open-Source-Cozystack hinaus hinzu?

Cozystack ist der Motor — Kubernetes-native Multi-Tenant-Cloud-Plattform-Foundation. Ænix Platform ist das Auto — fügt Hosting-Panel, User- / Admin- / Support-Portale, Service-Erstellungs-Wizards, vollständiges Billing (Backend + Frontend), Console-Portal, Usage-Charts, Payment-Integrationen, WHMCS-Integration, produktisierten Installer, Enterprise-SLA, dedizierten Support, Edition-spezifische Features pro Buyer-Profil und Compliance-fertige Bundles hinzu.

### Wie wird Ænix Platform bepreist?

Pricing hängt von Edition und Engagement-Scope ab. Provider Edition Entry ab 1.250 USD/Monat Support-Tier. Public Cloud / Enterprise Full Builds werden nach RFP angeboten. Andere Editions: Pricing on Request via Discovery-Call. [Preisseite →](/de/preise/).

### Welche Edition passt für meine Organisation?

- **Große Public Cloud, große Bank, großer Telco:** Ænix Platform Provider Edition
- **Hosting-Anbieter, MSP, regionale Cloud:** Ænix Platform Provider Edition
- **Regulierte Bank / Versicherung / öffentlicher Sektor:** Ænix Platform Enterprise Edition
- **Produkt- / SaaS-Team mit Investitionen in Developer Experience:** the Developer Self-Service module of Ænix Platform
- **KI-natives Unternehmen / GPU-lastige Workloads:** the AI & GPU module of Ænix Platform
- **Produkt-Team auf Hetzner/OVH mit Wunsch nach Vendor-Support:** Pure Cozystack mit Ænix-Support
- **Nicht sicher:** Discovery-Call buchen; wir bestätigen Fit und empfehlen die Edition.

### Bieten Sie ein Partner-Programm an?

Ja — bis zu 40% Marge auf Ænix-Platform-Verkäufe für Reseller, Integratoren und Distributoren. Inklusive Deal-Registrierung, Sales-Kit, Technical-Pre-Sales-Support, L3-Support-Zugang, Training. [Partner-Programm →](/de/partner/).

---

## Wie starten

Buchen Sie einen 30-Minuten-Discovery-Call. Wir besprechen Ihre Plattform-Prioritäten, regulatorischen Kontext, Scope und welche Ænix Platform Edition passt.

<div class="cta-row">
  <a class="cta-primary" href="/de/kontakt/">Discovery-Call buchen</a>
</div>

---

*Ænix Platform basiert auf [Cozystack](https://cozystack.io) — einem CNCF-Projekt, das wir erstellt haben und pflegen. Aenix ist das Open-Core-Unternehmen.*
