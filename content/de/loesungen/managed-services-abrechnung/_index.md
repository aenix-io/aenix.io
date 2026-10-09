---
title: "Managed Cloud Services als Hosting-Anbieter verkaufen und abrechnen"
seo_title: "Abrechnung von Managed Services für Hosting-Anbieter"
description: "Managed Datenbanken, Kubernetes, S3, VMs und GPU auf eigener Hardware verkaufen und minutengenau abrechnen: Ænix Billing, WHMCS-Integration, Tenant-Sperre."
language: "de"
quick_facts_style: "rows"
faq_style: "rows"
primary_keyword: "abrechnung managed services hosting anbieter"
secondary_keywords: ["cloud billing hosting anbieter", "nutzungsbasierte abrechnung managed datenbanken", "managed kubernetes verkaufen hoster", "dbaas abrechnung whmcs", "minutengenaue abrechnung kubernetes"]
hreflang_en: /solutions/managed-services-billing/
related_pages:
  - /de/produkte/public-cloud-platform/
  - /de/produkte/whmcs-integration/
  - /de/branchen/hosting-anbieter/
  - /isp-calculator/
  - /webinars/launch-public-cloud/
  - /de/preise/
service:
  type: "Abrechnungsplattform für Managed Cloud Services"
  areaServed: ["EU", "DACH", "MENA", "Central Asia"]
  audience: "Hosting-Anbieter"
direct_answer: |
  **Ein Hosting-Anbieter, der Managed Datenbanken, Kubernetes, S3-Speicher, virtuelle Maschinen und GPU verkaufen will, braucht zwei Dinge, die ein VPS-Panel nicht liefert: einen Katalog, aus dem Kunden selbst bestellen, und eine Abrechnung, die misst, was jeder Tenant tatsächlich genutzt hat. Die Ænix Public Cloud Platform liefert beides auf eigener oder gemieteter Hardware. Der Servicekatalog ist Open-Source-Cozystack (Apache 2.0, ein CNCF-Projekt, das Ænix entwickelt hat und mitpflegt). Darüber liegen zwei proprietäre Ænix-Module: Ænix Billing, das die Nutzung pro Tenant und Workload minutengenau über eine Kubernetes-native API ausweist, und die WHMCS-Integration, die daraus WHMCS-Produkte und Rechnungen macht. Sperre und Suspendierung säumiger Tenants sowie ein Kundenportal unter Ihrer Marke vervollständigen die kommerzielle Schicht. Beide Module sind in jeder Abonnementstufe enthalten, ab 1.250 $ pro 10 Knoten und Monat bei jährlicher Zahlung.**
quick_facts:
  - label: "Was Sie verkaufen"
    value: "Managed PostgreSQL, MariaDB, Valkey, ClickHouse, Kafka, RabbitMQ, NATS, MongoDB, OpenSearch und Qdrant; Managed Kubernetes; S3-kompatibler Objektspeicher; Linux- und Windows-VMs; GPU-Workloads."
  - label: "Wie die Nutzung gemessen wird"
    value: "Ænix Billing: ein UsageReport pro Tenant und Workload — CPU- oder vCPU-Stunden, Arbeitsspeicher, flüchtiger und persistenter Speicher nach StorageClass, IP-Adressen, S3-Speicher, Laufzeit."
  - label: "Wie Kunden Rechnungen erhalten"
    value: "Über WHMCS (als Storefront oder als Abrechnungs-Backend hinter dem Cozystack Dashboard) oder über das plattformeigene Billing-Frontend mit Stripe und regionalen Zahlungsanbietern."
  - label: "Open Source und proprietär"
    value: "Servicekatalog, Mandantenfähigkeit, White-Labeling und GPU-Sharing sind Open-Source-Cozystack. Ænix Billing und die WHMCS-Integration sind proprietäre Ænix-Module."
  - label: "Preis"
    value: "Abonnement der Ænix Public Cloud Platform: Basic 1.250 $, Standard 3.000 $, Plus 5.500 $ pro 10 physische Knoten und Monat bei jährlicher Zahlung; Enterprise individuell. Beide Module in jeder Stufe."
  - label: "Zeit bis zum Verkauf"
    value: "Produktiv in Wochen, sobald die Hardware bereitsteht, über den produktisierten Installer."
faq:
  - q: "Welche Managed Services kann ein Hosting-Anbieter auf der Plattform verkaufen?"
    a: "Managed Datenbanken und Datendienste (PostgreSQL über CloudNativePG, MariaDB, Valkey, ClickHouse, MongoDB, OpenSearch, Qdrant), Message Broker (Kafka, RabbitMQ, NATS), Managed-Kubernetes-Cluster mit eigener Control Plane pro Tenant, S3-kompatiblen Objektspeicher auf SeaweedFS, KubeVirt-VMs (Linux und Windows), HTTP-Cache, VPN und GPU-Workloads. Kunden bestellen über Assistenten, ohne YAML zu schreiben."
  - q: "Wie misst Ænix Billing die Nutzung?"
    a: "Es ist eine Kubernetes-Extension-API (billing.aenix.io/v1alpha1). Sie fordern einen UsageReport für einen Tenant und ein Zeitfenster an, auf Wunsch einschließlich Sub-Tenants, und erhalten einen Eintrag pro Verbraucher — ein Datenbank-Replikat, einen Kubernetes-Worker, eine VM, einen Bucket — mit CPU- oder vCPU-Stunden, Arbeitsspeicher, flüchtigem und persistentem Speicher je StorageClass, IP-Adressen, S3-Speicher und Laufzeit. Die Workload-Metadaten (Art, Primary oder Replikat, zugehöriger Tenant) reisen mit jedem Eintrag, die Preisregeln bleiben Ihre."
  - q: "Muss ich WHMCS verwenden?"
    a: "Nein. Die WHMCS-Integration kennt zwei Modi: WHMCS als Storefront für Kunden oder das Cozystack Dashboard als Frontend mit WHMCS als Abrechnungs-Backend. Ohne WHMCS übernimmt das plattformeigene Billing-Frontend Rechnungsstellung und Zahlungen mit Stripe und regionalen Zahlungsanbietern, oder Sie speisen die Nutzungsberichte in ein bestehendes Abrechnungssystem ein."
  - q: "Was passiert, wenn ein Kunde nicht zahlt?"
    a: "Sperre und Suspendierung von Tenants sind in die Plattform eingebaut: automatische Suspendierung überfälliger Konten, Blockieren von Ressourcen und eine Sperre zur Sicherheitsprüfung. Einen säumigen Tenant zu suspendieren braucht kein Engineering-Ticket."
  - q: "Kann ich unter eigener Marke verkaufen?"
    a: "Ja. Das Kundenportal ist das Cozystack Dashboard mit Ihrem Branding. White-Labeling ist eine Open-Source-Funktion von Cozystack; Ænix-Support bei der Konfiguration ist ab der Stufe Standard enthalten."
  - q: "Wie wird GPU-Nutzung abgerechnet?"
    a: "Die GPU-Nutzung wird pro Tenant gemessen, berechnet wird sie in Ihrem Abrechnungssystem — WHMCS oder Ihrem eigenen. In Tenant-Kubernetes-Clustern lassen sich mit MIG-Partitionen auf MIG-fähigen Karten und zeitgeteiltem Sharing über HAMi Bruchteile einer GPU verkaufen; virtuelle Maschinen erhalten ganze GPUs per PCI-Passthrough oder NVIDIA vGPU mit Ihrer NVIDIA-vGPU-Lizenz."
  - q: "Was ist Open Source und was proprietär?"
    a: "Die Plattform, die die Services betreibt und isoliert — Cozystack, Apache 2.0, CNCF — ist Open Source, einschließlich Servicekatalog, Mandantenfähigkeit, White-Labeling und GPU-Sharing. Ænix Billing und die WHMCS-Integration sind proprietäre Ænix-Module und in jeder Abonnementstufe enthalten. Endet das Abonnement, läuft Cozystack auf Ihrer Hardware weiter; die Module und der Ænix-Support entfallen."
---

**Wer VPS verkauft, konkurriert über den Preis pro vCPU. Wer ein Managed PostgreSQL, einen Kubernetes-Cluster oder einen S3-Bucket verkauft, berechnet einen Service, und genau dorthin verschiebt sich die Marge eines Hosting-Geschäfts. Das Schwierige ist selten die Datenbank. Schwierig ist die kommerzielle Schicht darum herum: ein Katalog, aus dem Kunden bestellen, Nutzung, die sich ohne Tabellenkalkulation abrechnen lässt, und ein Weg, einen Kunden nicht mehr zu bedienen, der nicht mehr zahlt.**

Diese Seite beschreibt diese kommerzielle Schicht der [Ænix Public Cloud Platform](/de/produkte/public-cloud-platform/), und welche Teile Open Source sind und welche nicht.

---

<div class="band-fullbleed band-fullbleed--tint">
<div class="band-fullbleed__inner">

## Der Katalog, den Sie verkaufen können

Jeder der folgenden Services läuft auf derselben Plattform im Tenant des Kunden, von anderen Kunden durch Netzwerkrichtlinien, Quotas und RBAC getrennt. Kunden bestellen über Assistenten; niemand schreibt YAML.

| Service-Familie | Was der Kunde erhält |
|---|---|
| **Managed Datenbanken** | PostgreSQL (CloudNativePG), MariaDB, Valkey, ClickHouse, MongoDB, OpenSearch, Qdrant |
| **Messaging** | Kafka, RabbitMQ, NATS |
| **Managed Kubernetes** | Tenant-Kubernetes-Cluster mit verwalteter Control Plane pro Tenant |
| **Objektspeicher** | S3-kompatible Buckets auf SeaweedFS |
| **Virtuelle Maschinen** | KubeVirt-VMs, Linux und Windows, mit Upload eigener Images |
| **GPU** | In Tenant-Kubernetes: MIG-Partitionen auf MIG-fähigen Karten und zeitgeteiltes Sharing über HAMi. Für VMs: ganze GPUs per PCI-Passthrough oder NVIDIA vGPU mit Ihrer NVIDIA-vGPU-Lizenz |
| **Netzwerkdienste** | HTTP-Cache, VPN-Service |

Der Katalog selbst ist Open-Source-[Cozystack](/de/produkte/cozystack/). Zum Geschäft wird er durch die nächsten drei Abschnitte.

</div>
</div>

---

## Abrechenbare Nutzung: Ænix Billing

Ænix Billing ist ein Kubernetes-Extension-API-Server, der `billing.aenix.io/v1alpha1` bereitstellt. Ihr Billing-Team fordert einen `UsageReport` an, so wie es jedes andere Kubernetes-Objekt abfragen würde, mit RBAC, das auf die Billing-API beschränkt ist und auf nichts sonst:

```yaml
apiVersion: billing.aenix.io/v1alpha1
kind: UsageReport
query:
  tenant: tenant-acme
  includeSubTenants: true
  startTimestamp: 2026-04-01T00:00:00Z
  endTimestamp:   2026-05-01T00:00:00Z
```

Der Bericht liefert einen Eintrag pro Verbraucher, etwa ein PostgreSQL-Replikat, einen Kafka-Broker, einen Kubernetes-Worker, eine VM oder einen Bucket. Jeder Eintrag enthält:

- **CPU**: `vCPUHours` oder `CPUHours`, je nachdem, ob Sie virtuelle oder physische CPU abrechnen
- **Arbeitsspeicher**: `MemoryGiBHours`
- **Speicher**: `EphemeralStorageGiBHours` und `PersistentVolumeGBHours` je StorageClass, sodass NVMe-, HDD- und replizierte Volumes unterschiedliche Preise tragen können
- **Netzwerk**: `IPAddressHours`
- **Objektspeicher**: `S3StorageGBHours` und `S3PhysicalStorageGBHours`
- **Laufzeit**: `LifetimeHours`, unabhängig von Reservierungen

Die Metadaten des Workloads reisen mit jeder Position: die Art des Service, Primary oder Replikat und der zugehörige Tenant. Die Preisgestaltung ist eine Regel, die Sie auf den Bericht anwenden, kein Code, den Sie umschreiben. Replikate können die Hälfte eines Primary kosten, NVMe das Dreifache von HDD, und ein strategischer Kunde kann einen Rabatt erhalten. Der Kunde kann dieselbe Abfrage ausführen und die Rechnung Position für Position abgleichen.

Unter der Haube arbeiten ein kleiner Controller, der den Zustand der Workloads in Metriken übersetzt, der VictoriaMetrics-Speicher der Plattform und der API-Server, der die Reservierungen über das angefragte Zeitfenster integriert. Es kommt nichts Neues zum Betreiben hinzu. Die Einzelheiten stehen in der [Ankündigung von Ænix Billing](/de/blog/2026/05/aenix-billing-pay-per-minute-managed-services-cozystack/).

---

## Rechnungen und Zahlungen: WHMCS oder das plattformeigene Billing

Aus Nutzung wird auf einem von drei Wegen eine Rechnung:

1. **WHMCS als Storefront.** Ihre Kunden bestellen Cozystack-Services als WHMCS-Produkte, Bereitstellung, Messung und Rechnungsstellung laufen über die WHMCS-Abrechnung, die Sie bereits betreiben. Siehe [WHMCS-Integration](/de/produkte/whmcs-integration/).
2. **Cozystack Dashboard als Storefront, WHMCS als Abrechnungs-Backend.** Kunden arbeiten in Ihrem Portal unter Ihrer Marke, WHMCS übernimmt die Rechnungsstellung.
3. **Das plattformeigene Billing-Frontend.** Prepaid-Guthaben, nachträgliche Rechnungsstellung, Stripe und regionale Zahlungsanbieter, B2B-Rechnungen. In Betreibergröße kommen Mehrwährungs- und Multi-Jurisdiktions-Fähigkeit, Abrechnung über Channel-Partner und Reseller-Margen hinzu.

Wenn Sie bereits ein Abrechnungssystem betreiben, dem Sie vertrauen, ist die `UsageReport`-API der Integrationspunkt. Speisen Sie den Bericht ein und behalten Sie Ihre Rechnungsstellung, wo sie ist.

---

<div class="band-fullbleed band-fullbleed--tint">
<div class="band-fullbleed__inner">

## Tenant-Sperre, Suspendierung und Ihre Marke

**Sperre und Suspendierung.** Die Steuerung des Tenant-Lebenszyklus ist Teil der Plattform: automatische Suspendierung überfälliger Konten, Blockieren von Ressourcen und eine Sperre zur Sicherheitsprüfung. Einen säumigen Kunden zu suspendieren ist ein Abrechnungsereignis, kein Engineering-Ticket.

**Ein Portal unter Ihrer Marke.** Kunden sehen das Cozystack Dashboard mit Ihrem Branding. Es umfasst Selbstregistrierung, Profile, Teamverwaltung und Support-Tickets. Dahinter zeigt das Back-Office des Betreibers Kunden, Verifizierung, Rechnungen und Ressourcenpreise. Beides können Sie in der [Live-Demo](/demo/) ausprobieren, die mit Demodaten in Ihrem Browser läuft.

</div>
</div>

---

## Was Open Source ist und wofür Sie zahlen

Ænix verkauft ein Abonnement — Support plus proprietäre kommerzielle Module —, keine Lizenz.

| Komponente | Lizenz | Hinweise |
|---|---|---|
| Servicekatalog, Mandantenfähigkeit, Managed Kubernetes, VMs, S3 | Open Source (Cozystack, Apache 2.0) | Frei betreibbar; die Support-Stufe entscheidet, was Ænix unterstützt |
| White-Labeling des Kundenportals | Open Source (Cozystack) | Konfigurationssupport durch Ænix ab Standard |
| GPU-Sharing (HAMi) | Open Source (Cozystack) | Konfigurationssupport durch Ænix ab Standard |
| **Ænix Billing** | Proprietäres Ænix-Modul | In jeder Stufe enthalten |
| **WHMCS-Integration** | Proprietäres Ænix-Modul | In jeder Stufe enthalten |

**Preisbasis.** Das Abonnement der Ænix Public Cloud Platform wird pro 10 physische Knoten und Monat berechnet: Basic 1.250 $, Standard 3.000 $, Plus 5.500 $ bei jährlicher Zahlung, dazu eine individuelle Enterprise-Stufe. Jährliche Zahlung entspricht zehn Monatspreisen. Die Installation der Plattform ist ab Standard enthalten, 24×7-Support ab Plus. Verträge mit der AENIX s.r.o. werden in EUR geschlossen; die Listenpreise sind in USD angegeben. Siehe den [vollständigen Stufenvergleich](/de/preise/#support).

**Wenn Sie uns nicht mehr bezahlen.** Cozystack läuft auf Ihrer Hardware weiter, und die Datenbanken und Cluster Ihrer Kunden laufen weiter. Ænix Billing, die WHMCS-Integration und der Ænix-Support entfallen.

---

## Wo das produktiv läuft

Hosting-Anbieter und regionale Clouds betreiben die Ænix Public Cloud Platform in der EU, im DACH-Raum, in Zentralasien und weiteren Regionen. Einer ist ausführlich beschrieben: [ein Schweizer Anbieter, der eine kommerzielle Public Cloud über drei Rechenzentren betreibt](/de/case-studies/sovereign-public-cloud/), mit VMs, Managed Kubernetes, Datenbanken und GPUs auf eigener Infrastruktur. Für Abrechnung über Infrastruktur, die Sie behalten, siehe [ein Portal über OpenNebula, VMware und Kubernetes](/de/case-studies/unified-cloud-portal-financial-group/): Nutzung, Tarife und Rechnungen liegen dort im selben Portal wie der Servicekatalog.

---

## Wann das nicht passt

Wenn VPS-Weiterverkauf Ihr ganzes Geschäft ist und Ihnen die Marge genügt, ist ein VPS-Panel mit angebauter Abrechnung günstiger und einfacher. Behalten Sie es. Diese Plattform rechnet sich, wenn Sie auf derselben Hardware Managed Services, Kubernetes und GPU verkaufen wollen, ohne jeden Service und seine Abrechnung selbst zu bauen.

Rechnen Sie zuerst im [Rechner für Hosting-Anbieter](/de/hosting-anbieter-rechner/) nach. Das aufgezeichnete Webinar [Add Kubernetes, databases and GPU to your price list](/webinars/launch-public-cloud/) (Englisch) zeigt Katalog, Abrechnung und Migrationsweg. Sie ziehen erst von einem anderen Stack um? Siehe die [Virtuozzo-Migration](/de/migration/virtuozzo/) und die [Vergleiche](/de/vergleichen/).

<div class="cta-row">
  <a class="cta-primary" href="/de/kontakt/">Discovery-Call buchen</a>
  <a class="cta-secondary" href="/demo/" target="_blank" rel="noopener">Live-Demo öffnen →</a>
</div>

---

*Ænix hat [Cozystack](https://cozystack.io) entwickelt, ein CNCF-Projekt (heute Sandbox; Antrag auf Incubation in der Due-Diligence-Prüfung) unter Apache 2.0, und pflegt es gemeinsam mit Maintainern anderer Unternehmen. Ænix verkauft drei darauf aufbauende Plattformen: Public Cloud, Private Cloud und AI.*
