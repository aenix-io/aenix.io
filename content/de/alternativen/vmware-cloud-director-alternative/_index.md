---
title: "VMware-Cloud-Director-Alternative für Service-Provider"
description: "Abschied von VMware Cloud Director? Behalten Sie Mandanten, Self-Service, Kataloge und Billing auf der Ænix Public Cloud Platform und migrieren Sie in Kohorten."
date: 2026-10-08
lastmod: 2026-10-08
language: "de"
hreflang_en: /alternatives/vmware-cloud-director-alternative/
quick_facts_style: "rows"
faq_style: "rows"
primary_keyword: "VMware Cloud Director Alternative"
secondary_keywords: ["vCloud Director Alternative", "VCD Alternative für Service-Provider", "Ausstieg aus VMware VCPP", "VMware-Ausstieg für VCSP", "mandantenfähige Cloud-Plattform für Service-Provider"]
related_pages:
  - /de/produkte/public-cloud-platform/
  - /de/migration/vmware/
  - /de/alternativen/vmware-alternative/
  - /de/produkte/whmcs-integration/
  - /de/branchen/hosting-anbieter/
  - /de/ressourcen/vmware-migrations-checkliste/
  - /de/preise/
direct_answer: |
  **Eine Alternative zu VMware Cloud Director ersetzt die Schicht, über die ein Service-Provider verkauft: Mandanten-Organisationen, Self-Service, Kataloge und die Anbindung an das Billing, nicht nur den Hypervisor darunter. Die Ænix Public Cloud Platform leistet das für Hosting-Anbieter, MSPs und regionale Clouds, die nach den Änderungen durch Broadcom das VMware Cloud Service Provider Program verlassen. Sie läuft auf Cozystack, einem CNCF-Projekt, das Ænix entwickelt hat und mitpflegt. Mandanten werden zu Cozystack-Tenants mit Quotas und Zugriffsrechten, für Reseller verschachtelt. Kunden bestellen über ein Portal in Ihrem Branding VMs, Kubernetes, Managed-Datenbanken, S3 und GPUs. Das Billing läuft über WHMCS oder Ihr eigenes System. Mandanten-VMs wechseln in Kohorten mit Konveyor Forklift, das in der Ænix-Plattform enthalten ist, von vSphere, während die VMware-Umgebung weiterläuft.**
quick_facts:
  - label: "Was es ist"
    value: "Ein Ersatz für die Service-Provider-Schicht von VMware Cloud Director: Mandantenfähigkeit, Self-Service-Portal, Service-Katalog und Billing-Anbindung, auf der Ænix Public Cloud Platform."
  - label: "Zielgruppe"
    value: "Hosting-Anbieter, MSPs, regionale Clouds und Telcos, die heute Cloud-Leistungen über VMware Cloud Director verkaufen."
  - label: "Mandanten"
    value: "Cozystack-Tenants mit Quotas, Zugriffsrechten, Netzwerkisolation und Monitoring pro Tenant; verschachtelte Tenants für Reseller."
  - label: "Billing"
    value: "Ænix-WHMCS-Integration (ein proprietäres Ænix-Modul) in zwei Varianten, das Ænix-Billing-Backend oder Ihr eigenes Billing-System."
  - label: "Migration der Mandanten-VMs"
    value: "Konveyor Forklift ist in der Ænix-Plattform enthalten: Cold- oder Warm-Migration von vSphere, Gastkonvertierung mit VirtIO-Treibern, in Kohorten."
  - label: "Zeit bis zum Start"
    value: "Produktisierter Installer: live innerhalb weniger Wochen, sobald die Hardware bereitsteht. Multi-Region-Programme für Betreiber: 3–6 Monate Pilot, danach 9–18 Monate."
  - label: "Kommerzielles Modell"
    value: "Abonnement auf Basis der veröffentlichten Support-Stufen, berechnet pro 10 physische Nodes und Monat; das Open-Source-Cozystack darunter ist kostenlos."
quick_facts_source: "[Cozystack (CNCF)](https://cozystack.io), [Konveyor Forklift](https://github.com/kubev2v/forklift), [Ænix-Preise](/de/preise/)"
faq:
  - q: "Was ersetzt Organisationen und Org-VDCs aus VMware Cloud Director?"
    a: "Cozystack-Tenants. Jeder Tenant ist eine Isolationsgrenze mit eigenen Quotas, Zugriffsrechten, Netzwerkisolation und eigenem Monitoring, und Tenants können weitere Tenants enthalten. So kann ein Reseller oder ein großer Kunde eigene Sub-Tenants betreiben, etwa für Produktion, Staging und Test. Das Modell ist Kubernetes-nativ statt vSphere-nativ und wird deshalb im Assessment neu entworfen, nicht eins zu eins kopiert."
  - q: "Können unsere Kunden den Self-Service behalten?"
    a: "Ja. Ihre Kunden nutzen ein Portal in Ihrem Branding, das Cozystack Dashboard, mit Selbstregistrierung, Teamverwaltung und Support-Tickets. Dort legen sie VMs, Kubernetes-Cluster, Managed-Datenbanken, S3-Storage und GPU-Workloads an, ohne ein Ticket an Ihr Team. Die Kundenseite können Sie in der Live-Demo ausprobieren."
  - q: "Wie wechseln Mandanten-VMs von vSphere?"
    a: "Mit Konveyor Forklift, das in der Ænix-Plattform enthalten ist. Es führt Cold- oder Warm-Migrationen von vSphere durch, bildet Netzwerke und Storage ab und konvertiert Gastsysteme mit virt-v2v, das VirtIO-Treiber einspielt und die VMware Tools entfernt. Migriert wird in Kohorten mit Validierung im Parallelbetrieb. Windows-VMs mit Measured Boot sowie Windows Server 2012 und 2012 R2 werden neu aufgebaut statt konvertiert."
  - q: "Müssen wir VMware am ersten Tag abschalten?"
    a: "Nein. Die Plattform läuft neben Ihrer VMware-Umgebung und lässt sich mit ihr integrieren. Sie können neue Leistungen bereits über die neue Plattform verkaufen, während die Mandanten Kohorte für Kohorte umziehen. VMware wird stillgelegt, sobald die letzte Kohorte umgezogen ist und die Lizenzen auslaufen."
  - q: "Wie funktioniert das Billing ohne die Nutzungserfassung von vCloud Director?"
    a: "Die Plattform erfasst die Nutzung pro Tenant und übergibt sie an das Billing. Mit der Ænix-WHMCS-Integration dient WHMCS entweder als Ihr Storefront oder arbeitet hinter dem Ænix-Portal als Billing-Backend. Provider mit eigenem Billing-System übernehmen die Nutzungsdaten direkt, und die Public Cloud Platform enthält zusätzlich ein Billing-Backend mit Zahlungsabwicklung."
  - q: "Was kostet das?"
    a: "Ænix verkauft ein Abonnement, keine Lizenz. Für die Public Cloud Platform gelten die veröffentlichten Support-Stufen, berechnet pro 10 physische Nodes und Monat. Die Migrationsunterstützung hängt von der Stufe ab: Dokumentation bei Basic und Standard, von Ænix begleitet bei Plus, von Ænix durchgeführt bei Enterprise. Multi-Region-Programme werden per RFP angeboten, und das Open-Source-Cozystack darunter können Sie kostenlos betreiben."
---

**Ihre Kunden kaufen über VMware Cloud Director: Organisationen, Self-Service, Kataloge und am Monatsende eine Rechnung. Wer nur vSphere ersetzt, ersetzt das nicht. Die Ænix Public Cloud Platform tut es: Mandantenfähigkeit, ein Self-Service-Portal in Ihrem Branding, ein Service-Katalog, der über VMs hinausgeht, und Billing über WHMCS oder Ihr eigenes System. Die VMs Ihrer Mandanten ziehen in Kohorten um, während VMware weiterläuft.**

> **Kein Service-Provider?** Wenn Sie VMware für Ihre eigene Organisation betreiben, statt es weiterzuverkaufen, lesen Sie stattdessen **[die VMware-Alternative für die eigene Umgebung](/de/alternativen/vmware-alternative/)**. Sie planen den Umzug selbst? Siehe **[den VMware-Migrationspfad](/de/migration/vmware/)** und die kostenlose **[VMware-Migrations-Checkliste](/de/ressourcen/vmware-migrations-checkliste/)**.

<div class="cta-row">
  <a class="cta-primary" href="/de/kontakt/">Gespräch vereinbaren</a>
  <a class="cta-secondary" href="/demo/" target="_blank" rel="noopener">Kundenportal ansehen →</a>
</div>

---

## Warum verlassen Provider VMware Cloud Director?

Broadcom hat VMware auf reine Subscription-Bundles für VCF umgestellt, unbefristete Lizenzen abgeschafft und die Bedingungen des VMware Cloud Service Provider Program geändert. Die Kosten eines Providers hängen damit an einem Lizenzmodell, das er nicht steuern kann, und diese Kosten weiterzugeben ist schwer, wenn Kunden dieselbe Kapazität auch anderswo kaufen können.

vSphere zu ersetzen ist die leichtere Hälfte. Die meisten VMware-Alternativen beantworten die Hypervisor-Frage: wo die VMs laufen. Ein Provider muss aber auch die Schicht ersetzen, die seine Kunden tatsächlich nutzen: wer ein Mandant ist, was er bestellen kann und wie aus Nutzung eine Rechnung wird. Um diese Schicht geht es auf dieser Seite. Für ein Unternehmen, das vSphere und VMware Cloud Foundation für den eigenen Bedarf verlässt, ist die [Seite zur VMware-Alternative](/de/alternativen/vmware-alternative/) der bessere Einstieg.

---

## Was hat vCloud Director Ihnen geboten, und was ersetzt es?

| Was VMware Cloud Director Providern geboten hat | Auf der Ænix Public Cloud Platform |
|---|---|
| **Organisationen und Org-VDCs** für jeden Kunden | Cozystack-Tenants mit Quotas, Zugriffsrechten, Netzwerkisolation und Monitoring pro Tenant |
| **Struktur für Reseller und Unterkunden** | Verschachtelte Tenants: Ein Reseller oder Kunde betreibt eigene Sub-Tenants |
| **Self-Service-Portal für Mandanten** | Cozystack Dashboard in Ihrem Branding: Selbstregistrierung, Teamverwaltung, Support-Tickets |
| **Kataloge und vApp-Templates** | Service-Katalog mit VMs aus eigenen Images und Templates, dazu Managed Kubernetes, Datenbanken, S3 und GPU |
| **Nutzungsdaten für das VCPP-Billing** | Nutzung pro Tenant an WHMCS, das Ænix-Billing-Backend oder Ihr eigenes Billing-System |
| **Sperren zahlungssäumiger Kunden** | Automatisches Sperren von Tenants und Blockieren von Ressourcen bei überfälligen Konten |
| **Edge-Gateways und NSX-Networking** | Networking mit Cilium und Kube-OVN mit Isolation pro Tenant. Erfordert ein Redesign, keine Eins-zu-eins-Abbildung |
| **vSphere und ESXi darunter** | Virtuelle Maschinen mit KubeVirt und Container auf einer Kubernetes-API, replizierter Storage mit LINSTOR/DRBD |

Zwei Schichten brauchen ein Redesign statt einer wörtlichen Abbildung: das **Mandantenmodell** (Cozystack-Tenants sind Kubernetes-nativ, vCD-Organisationen vSphere-nativ) und das **Networking** (Cilium ist nicht NSX). Beides wird im Platform Readiness Assessment geklärt, bevor der erste Mandant umzieht.

---

<div class="band-fullbleed band-fullbleed--tint">
<div class="band-fullbleed__inner">

## Was können Sie verkaufen, was vCloud Director nicht bot?

Ein Katalog in VMware Cloud Director besteht überwiegend aus VMs. Auf der Ænix Public Cloud Platform können dieselben Kunden bestellen:

<div class="capability-grid">

- **Virtuelle Maschinen**: Linux und Windows, aus Ihren Images und Templates
- **Managed Kubernetes**: ein Cluster pro Kunde, mit eigener Control Plane
- **Managed-Datenbanken und Queues**: PostgreSQL, MariaDB, Valkey, Kafka, ClickHouse, RabbitMQ, NATS, MongoDB, OpenSearch, Qdrant
- **S3-kompatibler Object Storage** für Backups und Anwendungen
- **GPU-Workloads**: Passthrough ganzer GPUs an VMs, NVIDIA vGPU für VMs (erfordert Ihre NVIDIA-vGPU-Lizenz) oder für Container in Tenant-Kubernetes-Clustern MIG-Partitionen und Time-Slicing über HAMi. Siehe [GPU as a Service](/de/loesungen/gpu-as-a-service/)

</div>

Managed Services auf derselben Hardware zu verkaufen bringt einem Provider mehr pro Kunde, als über den Preis pro vCPU zu konkurrieren.

</div>
</div>

---

## Wie passen Billing und WHMCS dazu?

- **WHMCS als Storefront.** Die Ænix-WHMCS-Integration, ein proprietäres Ænix-Modul, verkauft Plattformleistungen als WHMCS-Produkte. Kunden bestellen in WHMCS; die Plattform stellt bereit und meldet die Nutzung zurück.
- **Ænix-Portal als Storefront, WHMCS für das Billing.** Kunden nutzen das Portal in Ihrem Branding; WHMCS stellt im Hintergrund die Rechnungen.
- **Ihr eigenes Billing.** Provider mit einem eigenen System übernehmen die Nutzung pro Tenant von der Plattform. Ein Schweizer Provider auf Cozystack rechnet dedizierte Ressourcen stündlich über sein eigenes System ab ([Fallstudie](/de/case-studies/sovereign-public-cloud/)).
- **Ænix-Billing.** Die Public Cloud Platform enthält ein Billing-Backend und -Frontend mit Zahlungsabwicklung für Provider, die ihr Billing gleich mit ablösen.

[Mehr zur WHMCS-Integration →](/de/produkte/whmcs-integration/)

---

## Wie wechseln Mandanten-VMs von vSphere?

<div class="engagement-steps">

  <div class="engagement-step">
    <div class="engagement-step__number">1</div>
    <h3 class="engagement-step__title">Bestandsaufnahme</h3>
    <p class="engagement-step__body">Inventar aus vSphere und vCD: Mandanten, VMs, Betriebssystem-Mix, Netzwerke, Storage, Integrationen.</p>
  </div>

  <div class="engagement-step">
    <div class="engagement-step__number">2</div>
    <h3 class="engagement-step__title">Plattform parallel</h3>
    <p class="engagement-step__body">Ænix Public Cloud Platform auf neuer oder frei gewordener Hardware, neben VMware.</p>
  </div>

  <div class="engagement-step">
    <div class="engagement-step__number">3</div>
    <h3 class="engagement-step__title">Mandanten und Katalog</h3>
    <p class="engagement-step__body">Tenant-Struktur, Portal-Branding, Service-Katalog und Anbindung an das Billing.</p>
  </div>

  <div class="engagement-step">
    <div class="engagement-step__number">4</div>
    <h3 class="engagement-step__title">VMs in Kohorten migrieren</h3>
    <p class="engagement-step__body">Konveyor Forklift: Cold- oder Warm-Migration, Gastkonvertierung, Validierung im Parallelbetrieb gemeinsam mit dem Mandanten.</p>
  </div>

  <div class="engagement-step">
    <div class="engagement-step__number">5</div>
    <h3 class="engagement-step__title">VMware stilllegen</h3>
    <p class="engagement-step__body">Sobald die letzte Kohorte umgezogen ist, die Hardware weiterverwenden, während die Lizenzen auslaufen.</p>
  </div>

</div>

Planen Sie diese Fälle als Neuaufbau ein: Windows-VMs mit Measured Boot lassen sich nicht konvertieren, und Windows Server 2012 und 2012 R2 starten nach der Konvertierung nicht. Die vollständige Methode finden Sie im **[VMware-Migrations-Hub](/de/migration/vmware/)**.

Wenn Sie während des Umzugs ein Portal über mehrere Infrastrukturen brauchen: Das gibt es bereits. Eine Finanzgruppe betreibt einen gemeinsamen Self-Service-Katalog über OpenNebula, VMware und Kubernetes ([Fallstudie](/de/case-studies/unified-cloud-portal-financial-group/)).

---

## Wo VMware Cloud Director noch vorn liegt

- **Tiefe im vSphere-Betrieb.** DRS, Storage DRS und Fault Tolerance haben kein genaues Gegenstück. KubeVirt migriert VMs live und plant sie gut ein, ist aber ein anderes Werkzeug.
- **Das Backup-Ökosystem von VMware.** Werkzeuge auf Basis der Backup-APIs von VMware werden durch Velero und Point-in-Time-Recovery pro Datenbank ersetzt, und Runbooks müssen neu geschrieben werden.
- **Automatisches standortübergreifendes VM-Failover.** Gibt es nicht. Stretched-Designs über mehrere Standorte existieren, wie in der [Schweizer Fallstudie mit drei Rechenzentren](/de/case-studies/sovereign-public-cloud/), werden aber pro Projekt entworfen.
- **ISV-Zertifizierung.** Manche Softwarehersteller unterstützen ihre Produkte nur auf ESXi.

Wenn Ihre VMware-Konditionen für Sie noch funktionieren und Ihre Kunden nicht mehr als VMs verlangen, kann Bleiben die richtige Entscheidung sein. Das sagen wir Ihnen im ersten Gespräch.

---

## Wie lange dauert es, und was kostet es?

**Zeitplan.** Ein 30-minütiges Discovery-Gespräch ist kostenlos. Das Platform Readiness Assessment hat einen Festpreis und dauert 14 oder 28 Tage. In Provider-Größenordnung bringt der produktisierte Installer die Plattform innerhalb weniger Wochen live, sobald die Hardware bereitsteht. Multi-Region-Programme für Betreiber beginnen mit einem Pilot von 3–6 Monaten, danach folgen 9–18 Monate bis zum vollständigen Multi-Region-Betrieb. Wie lange der Umzug der Mandanten-VMs dauert, hängt von der Umgebung ab und wird im Assessment geplant.

**Preise.** Ænix verkauft ein Abonnement (Support, kommerzielle Module, Services), keine Lizenz. Für die Public Cloud Platform gelten die veröffentlichten Support-Stufen, berechnet pro 10 physische Nodes und Monat. Die Migrationsunterstützung hängt von der Stufe ab: Dokumentation bei Basic und Standard, von Ænix begleitet bei Plus, von Ænix durchgeführt bei Enterprise. Arbeiten außerhalb des Leistungsumfangs werden mit 150 USD pro Stunde berechnet, Multi-Region-Programme per RFP angeboten. Details finden Sie auf der **[Preisseite](/de/preise/)**.

---

## Starten Sie mit einem Gespräch

Sagen Sie uns, wie viele Mandanten und VMs Sie auf VMware Cloud Director betreiben, was Sie verkaufen und wann Ihre VMware-Verträge zur Verlängerung anstehen. Ein Engineer von Ænix ordnet Ihr Setup der Plattform zu und sagt Ihnen, was sich leicht übertragen lässt und was ein Redesign braucht.

<div class="cta-row">
  <a class="cta-primary" href="/de/kontakt/">Gespräch vereinbaren</a>
  <a class="cta-secondary" href="/de/produkte/public-cloud-platform/">Ænix Public Cloud Platform →</a>
</div>

---

*Ænix hat [Cozystack](https://cozystack.io) entwickelt und pflegt es gemeinsam mit Maintainern anderer Unternehmen. Cozystack ist ein CNCF-Sandbox-Projekt unter Apache 2.0; der Antrag auf CNCF Incubation befindet sich in der Due-Diligence-Prüfung. Ænix liefert es als drei Plattformen auf einer gemeinsamen Engine (Public Cloud, Private Cloud und AI), die sich kombinieren lassen, statt sich gegenseitig auszuschließen.*
