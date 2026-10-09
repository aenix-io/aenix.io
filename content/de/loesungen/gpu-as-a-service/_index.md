---
title: "GPU-as-a-Service-Plattform für GPU-Clouds und Rechenzentren"
seo_title: "GPU as a Service Plattform für Rechenzentren"
description: "NVIDIA-GPUs als mandantenfähige Cloud verkaufen: GPU-VMs, Kubernetes mit GPUs, Self-Service-Portal und Nutzung pro Tenant für die Abrechnung. Auf Cozystack."
date: 2026-10-08
lastmod: 2026-10-08
language: "de"
quick_facts_style: "rows"
faq_style: "rows"
primary_keyword: "gpu as a service plattform"
secondary_keywords: ["gpu cloud plattform", "gpu cloud software für rechenzentren", "neocloud plattform", "mandantenfähige gpu cloud", "gpuaas"]
hreflang_en: "/solutions/gpu-as-a-service/"
related_pages:
  - /de/produkte/public-cloud-platform/
  - /de/produkte/ai-platform/
  - /de/produkte/whmcs-integration/
  - /de/case-studies/sovereign-public-cloud/
  - /de/case-studies/bare-metal-gpu-inference/
  - /webinars/build-your-gpu-cloud/
  - /de/compliance/kubernetes-conformance/
  - /de/preise/
service:
  type: "GPU as a Service Platform"
  areaServed: ["EU", "DACH", "MENA", "Central Asia"]
  audience: "GPU cloud providers and data centres"
direct_answer: |
  **Eine GPU-as-a-Service-Plattform ist die Softwareschicht, die aus einem Bestand an GPU-Servern eine Cloud macht, die Sie verkaufen können: Tenants, Bestellung im Self-Service, Isolation zwischen Kunden, Nutzungsdaten für die Abrechnung und die Dienste, die Kunden neben der GPU erwarten. Ænix baut das für Rechenzentren und neue GPU-Clouds, die ihren eigenen NVIDIA-Bestand betreiben. Grundlage ist Cozystack, ein CNCF-Projekt, das Ænix entwickelt hat und gemeinsam mit Maintainern anderer Unternehmen pflegt; geliefert wird es als Ænix Public Cloud Platform, ergänzt um die Ænix AI Platform für die KI-Dienste darüber. GPUs werden per Passthrough an Tenant-VMs durchgereicht oder in Tenant-Kubernetes-Clustern zwischen Containern geteilt — als MIG-Partitionen oder per Time-Slicing mit HAMi. Tenants erhalten GPU-VMs, Kubernetes-Cluster mit GPU-Nodes, verwaltete Datenbanken und S3 aus einem Portal in Ihrer Marke, und die Nutzung pro Tenant fließt in WHMCS oder Ihr eigenes Billing-System.**
quick_facts:
  - label: "Was es ist"
    value: "Software, um eine mandantenfähige GPU-Cloud auf eigenen NVIDIA-Servern zu betreiben und zu verkaufen: Tenants, Portal, GPU-VMs und Kubernetes, verwaltete Dienste, Nutzungsdaten für die Abrechnung."
  - label: "Für wen"
    value: "Rechenzentren und neue GPU-Clouds (Neoclouds), die GPU-Kapazität an eigene Kunden verkaufen."
  - label: "GPU-Modi"
    value: "Ganze GPUs per Passthrough an Tenant-VMs; NVIDIA vGPU für VMs, sofern Sie die NVIDIA-vGPU-Lizenz besitzen; in Tenant-Kubernetes-Clustern MIG-Partitionen auf MIG-fähigen Karten und Time-Slicing zwischen Containern mit HAMi."
  - label: "Kubernetes für KI"
    value: "Cozystack ist eine CNCF Certified Kubernetes Distribution und wurde im September 2026 in das Programm CNCF Kubernetes AI Conformance aufgenommen."
  - label: "NVIDIA-Stack"
    value: "NVIDIA-GPUs für Rechenzentren über den NVIDIA GPU Operator. Die Partner-Validierung des GPU-Operator-Stacks bei NVIDIA wurde im Oktober 2026 eingereicht und steht noch aus."
  - label: "Abrechnung"
    value: "Die GPU-Nutzung wird pro Tenant erfasst; abgerechnet wird in WHMCS (über die Ænix-WHMCS-Integration) oder in Ihrem eigenen Billing-System."
  - label: "Zeit bis zum Start"
    value: "Produktisierter Installer: live innerhalb weniger Wochen, sobald die Hardware bereitsteht. Multi-Region-Programme von Betreibern: 3–6 Monate Pilot, danach 9–18 Monate bis zum vollständigen Multi-Region-Betrieb."
quick_facts_source: "[Cozystack (CNCF)](https://cozystack.io), [CNCF Kubernetes AI Conformance](https://github.com/cncf/k8s-ai-conformance), [Ænix-Preise](/de/preise/)"
faq:
  - q: "Was ist eine GPU-as-a-Service-Plattform?"
    a: "Sie ist die Schicht zwischen Ihren GPU-Servern und Ihren Kunden. Sie legt isolierte Tenants an, lässt Kunden GPU-VMs oder Kubernetes-Cluster mit GPUs selbst bestellen, hält ihre Workloads voneinander getrennt, erfasst, wie viel jeder Tenant verbraucht hat, und übergibt diese Nutzung an Ihre Abrechnung. Ohne sie kann ein Rechenzentrum Server vermieten; mit ihr kann es eine Cloud betreiben."
  - q: "Wie werden GPUs zwischen Tenants aufgeteilt?"
    a: "Heute gibt es vier Wege. Eine ganze GPU oder mehrere lassen sich per Passthrough an die virtuelle Maschine eines Tenants durchreichen, sodass dieser Tenant die Karte für sich allein hat. Mit NVIDIA vGPU wird eine Karte in vGPU-Profile für mehrere VMs aufgeteilt; das erfordert Ihre NVIDIA-vGPU-Lizenz. Innerhalb von Tenant-Kubernetes-Clustern stellt der GPU Operator MIG-Partitionen MIG-fähiger Karten als einplanbare Ressourcen bereit, auf Hardware-Ebene getrennt, und HAMi erlaubt mehreren Containern, sich eine physische GPU per Time-Slicing mit Grenzen für Speicher und Rechenleistung und mit Überbuchung zu teilen. HAMi-Anteile sind nicht in Hardware getrennt; ein Produkt, das nicht vertrauenswürdigen Tenants harte Partitionen einer Karte verspricht, sollte daher auf MIG, vGPU oder ganze Karten setzen."
  - q: "Können wir die GPU-Nutzung über WHMCS abrechnen?"
    a: "Ja. Die Plattform erfasst die Nutzung pro Tenant, und die Ænix-WHMCS-Integration, ein proprietäres Ænix-Modul, übergibt Bereitstellung und Nutzung an WHMCS, wo Sie Preise festlegen und Rechnungen stellen. Anbieter mit eigenem Billing-System übernehmen dieselben Nutzungsdaten direkt aus der Plattform. Den Preis pro GPU-Stunde legen Sie selbst fest."
  - q: "Ist der NVIDIA-Stack von NVIDIA validiert?"
    a: "Noch nicht. Die GPUs laufen über den NVIDIA GPU Operator, und Ænix hat den Stack im Oktober 2026 zur Partner-Validierung bei NVIDIA eingereicht. Diese Prüfung steht noch aus; sobald sie abgeschlossen ist, sagen wir es auf dieser Seite. Cozystack ist bereits eine CNCF Certified Kubernetes Distribution und Teil des Programms CNCF Kubernetes AI Conformance."
  - q: "Wie lange dauert der Start einer GPU-Cloud?"
    a: "Im Maßstab eines Anbieters bringt der produktisierte Installer die Plattform innerhalb weniger Wochen live, sobald die Hardware eingebaut und bereit ist. Nationale oder betreibergeführte Multi-Region-Programme laufen mit 3–6 Monaten Pilot und danach 9–18 Monaten bis zum vollständigen Multi-Region-Betrieb. Die meisten Projekte beginnen mit einem 30-minütigen Discovery-Gespräch und einem Platform Readiness Assessment zum Festpreis über 14 oder 28 Tage."
  - q: "Wie sieht die Preisgestaltung aus?"
    a: "Ænix verkauft ein Abonnement, keine Lizenz. Für die Public Cloud Platform gelten die veröffentlichten Support-Stufen, bepreist pro 10 physische Nodes und Monat; Support für GPU-Sharing ist ab der Stufe Standard enthalten. KI-Dienste wie Model Serving sowie Multi-Region-Programme werden per RFP angeboten. Das Open-Source-Projekt Cozystack darunter bleibt kostenlos nutzbar."
---

**Machen Sie aus Ihren NVIDIA-Servern eine GPU-Cloud, die Sie verkaufen können. Tenants bestellen GPU-VMs, Kubernetes-Cluster mit GPU-Nodes, verwaltete Datenbanken und S3-Storage aus Ihrem eigenen Portal in Ihrer Marke. Jeder Tenant bleibt isoliert, und seine Nutzung fließt in WHMCS oder Ihr eigenes Billing-System. Alles läuft auf Hardware, die Ihnen gehört, mit einem Open-Source-CNCF-Projekt als Fundament.**

> **Passt zu:** **[Ænix Public Cloud Platform](/de/produkte/public-cloud-platform/)**, der Plattform für Organisationen, die Cloud verkaufen, und **[Ænix AI Platform](/de/produkte/ai-platform/)** für Model Serving und KI-Dienste darüber. Probieren Sie das Kundenportal in der **[Live-Demo](/demo/)** aus.

<div class="cta-row">
  <a class="cta-primary" href="/de/kontakt/">Gespräch vereinbaren</a>
  <a class="cta-secondary" href="/demo/" target="_blank" rel="noopener">Live-Demo öffnen →</a>
</div>

---

## Für wen ist das gedacht?

- **Rechenzentren** mit GPU-Racks, die GPU-Cloud verkaufen wollen, nicht nur Colocation oder dedizierte Server.
- **Neue GPU-Clouds (Neoclouds)** mit einigen hundert bis einigen tausend NVIDIA-GPUs und Kunden, die Self-Service erwarten.
- **Hosting-Anbieter und Telcos**, die ein bestehendes Cloud-Produkt um GPUs erweitern.
- **Nationale und regionale Cloud-Programme**, deren GPU-Kapazität im Land bleiben muss.

Wenn Sie nur ganze Server mit langen Verträgen an eine Handvoll Kunden vermieten, reicht womöglich ein Werkzeug zur Bare-Metal-Bereitstellung. Diese Plattform ist für den Fall gedacht, dass Kunden GPUs selbst bestellen, skalieren und bezahlen.

---

## Was braucht eine GPU-Cloud außer den GPUs?

<div class="grid-2x2">

**Tenants und Isolation**
Jeder Kunde ist ein Tenant mit eigenen Quotas, Zugriffsrechten, Netzwerkisolation und eigenem Monitoring. Reseller erhalten verschachtelte Tenants für ihre eigenen Kunden.

**Bestellung im Self-Service**
Ein Kundenportal in Ihrer Marke mit Registrierung, Teamverwaltung und Support-Tickets. Kunden legen GPU-VMs, Kubernetes-Cluster und Datenbanken an, ohne YAML zu schreiben oder ein Ticket zu eröffnen.

**Abrechenbare Nutzung**
Die Nutzung wird pro Tenant erfasst und an Ihre Abrechnung übergeben. Tenants mit offenen Rechnungen lassen sich automatisch sperren, ohne Ticket an das Engineering.

**Dienste neben der GPU**
Kunden, die Modelle trainieren oder bereitstellen, brauchen auch Storage, Datenbanken und Queues. Wer sie auf derselben Plattform verkauft, steigert den Umsatz pro GPU-Kunde.

</div>

---

<div class="band-fullbleed band-fullbleed--tint">
<div class="band-fullbleed__inner">

## Wie werden GPUs den Tenants zugeteilt?

Jeder Modus bietet ein anderes Maß an Isolation — wählen Sie ihn daher pro Produkt, nicht pro Cluster.

| Modus | Funktionsweise | Isolation | Status |
|---|---|---|---|
| **Ganze GPU an eine VM** | Eine oder mehrere GPUs per Passthrough (VFIO) an die KubeVirt-VM eines Tenants | Der Tenant hat die Karte für sich allein | Verfügbar |
| **NVIDIA vGPU an eine VM** | Eine Karte, aufgeteilt in vGPU-Profile für mehrere VMs | Eigene vGPU pro VM; erfordert Ihre NVIDIA-vGPU-Lizenz | Verfügbar |
| **GPU-Nodes im Tenant-Kubernetes** | Kubernetes-Node-Gruppen mit GPUs, Treiber verwaltet vom NVIDIA GPU Operator | Pro Tenant-Cluster | Verfügbar |
| **MIG-Partitionen in Kubernetes (GPU Operator)** | Hardware-Partitionen einer MIG-fähigen Karte, im Tenant-Cluster als einplanbare Ressourcen | Auf Hardware-Ebene | Verfügbar (Add-on) |
| **Time-Slicing in Kubernetes (HAMi)** | Mehrere Container nutzen eine GPU abwechselnd, mit Grenzen für Speicher und Rechenleistung und Überbuchung | Geteilte Karte; Grenzen für die Rechenleistung erfordern Container-Images mit glibc älter als 2.34 | Verfügbar (Add-on) |

Unterstützt werden NVIDIA-GPUs für Rechenzentren über den NVIDIA GPU Operator. Ænix hat den GPU-Operator-Stack im Oktober 2026 zur Partner-Validierung bei NVIDIA eingereicht; die Prüfung steht noch aus. Für andere Beschleuniger ist PCI-Passthrough an VMs der unterstützte Weg.

</div>
</div>

---

## Was bekommen Ihre Kunden?

- **GPU-VMs** mit Linux oder Windows, auch mit eigenen Images und Templates.
- **Managed Kubernetes** mit GPU-Node-Gruppen. Jeder Tenant-Cluster hat eine eigene Control Plane.
- **Verwaltete Datenbanken und Queues:** PostgreSQL, MariaDB, Valkey, Kafka, ClickHouse, RabbitMQ, NATS, MongoDB, OpenSearch und Qdrant als Vektordatenbank.
- **S3-kompatibler Object Storage** für Datensätze und Modell-Checkpoints.
- **KI-Dienste** mit der [Ænix AI Platform](/de/produkte/ai-platform/): Model Serving und der KI-Stack drumherum. Die Plattform eines Telekommunikationsbetreibers und Integrators etwa betreibt NVIDIA-Dynamo-Inferenz und RAG auf Qdrant, paketiert als Cozystack-Dienste ([Fallstudie](/de/case-studies/ai-universal-installer/)).

### Kubernetes für KI, von Dritten bestätigt

Cozystack ist eine CNCF Certified Kubernetes Distribution. Im September 2026 wurde es für Kubernetes v1.35 in das Programm [CNCF Kubernetes AI Conformance](https://github.com/cncf/k8s-ai-conformance) aufgenommen, das prüft, ob eine Plattform KI-Workloads so ausführt, wie es die Kubernetes-Community festlegt. Details zur Conformance und wie sich die Prüfläufe nachvollziehen lassen, finden Sie auf der Seite zur [Kubernetes Conformance](/de/compliance/kubernetes-conformance/).

---

## Wie funktionieren Abrechnung und Portal?

- **WHMCS.** Die Ænix-WHMCS-Integration, ein proprietäres Ænix-Modul, verkauft GPU-VMs, Kubernetes, Datenbanken und Storage als WHMCS-Produkte. Sie arbeitet in zwei Modi: WHMCS als Storefront für Kunden oder das Ænix-Portal als Storefront mit WHMCS als Billing-Backend. [Mehr zu WHMCS →](/de/produkte/whmcs-integration/)
- **Eigenes Billing.** Anbieter mit eigenem System übernehmen die Nutzung pro Tenant aus der Plattform. Ein Schweizer Anbieter auf Cozystack rechnet dedizierte Ressourcen stundengenau aus seinem hauseigenen System ab ([Fallstudie](/de/case-studies/sovereign-public-cloud/)).
- **Ænix-Billing.** Die Ænix Public Cloud Platform enthält außerdem ein Billing-Backend und -Frontend mit Zahlungsabwicklung für Anbieter, die weder das eine noch das andere haben.

Sie legen den Preis pro GPU, pro Stunde oder pro Paket fest. Die Plattform liefert die Nutzung pro Tenant; Ihre Preisliste gibt sie nicht vor.

---

## Souveränität und Kontrolle

- **Ihre Hardware, Ihre Rechtsordnung.** Die Plattform läuft auf Ihren Servern. Kundendaten und Modell-Weights bleiben in Ihrem Rechenzentrum.
- **Air-Gap-Installation** wird unterstützt, und Telemetrie ist ausgeschaltet, solange Sie sie nicht einschalten.
- **Open Source als Fundament.** Cozystack steht unter Apache 2.0. Wenn Sie das Ænix-Abonnement beenden, läuft die Plattform weiter.
- **Ænix als Lieferant:** Die AENIX s.r.o. ist nach [ISO/IEC 27001:2022](/de/compliance/iso-27001/) zertifiziert.

---

## Wie läuft ein Start ab?

<div class="engagement-steps">

  <div class="engagement-step">
    <div class="engagement-step__number">1</div>
    <h3 class="engagement-step__title">Discovery-Gespräch</h3>
    <p class="engagement-step__body">30 Minuten, kostenlos. Ihr GPU-Bestand, Ihre Kunden, was Sie heute verkaufen.</p>
  </div>

  <div class="engagement-step">
    <div class="engagement-step__number">2</div>
    <h3 class="engagement-step__title">Platform Readiness Assessment</h3>
    <p class="engagement-step__body">Festpreis, 14 oder 28 Tage. Zielarchitektur, Netzwerk- und Storage-Design, GPU-Produktmodi, Risikoregister.</p>
  </div>

  <div class="engagement-step">
    <div class="engagement-step__number">3</div>
    <h3 class="engagement-step__title">Installation</h3>
    <p class="engagement-step__body">Produktisierter Installer: live innerhalb weniger Wochen, sobald die Hardware bereitsteht. Multi-Region-Programme beginnen mit einem Pilot von 3–6 Monaten.</p>
  </div>

  <div class="engagement-step">
    <div class="engagement-step__number">4</div>
    <h3 class="engagement-step__title">Erste Tenants</h3>
    <p class="engagement-step__body">Portal-Branding, Servicekatalog, Anbindung an die Abrechnung, danach Onboarding.</p>
  </div>

  <div class="engagement-step">
    <div class="engagement-step__number">5</div>
    <h3 class="engagement-step__title">Betreiben und wachsen</h3>
    <p class="engagement-step__body">Support mit SLA. Multi-Region-Programme erreichen den vollen Umfang 9–18 Monate nach dem Pilot.</p>
  </div>

</div>

Das Design der Netzwerk-Fabric für Training über mehrere Nodes (InfiniBand, RoCE) wird im Assessment für Ihre Hardware ausgearbeitet und nicht als fertiges Paket verkauft.

---

## Wo läuft das bereits?

Diese Projekte sind vollständig dokumentiert, die Kunden anonymisiert, wie es ihre Verträge verlangen:

- **[Eine souveräne Public Cloud auf Bare Metal](/de/case-studies/sovereign-public-cloud/)**: Ein Schweizer Anbieter verkauft VMs, Kubernetes und GPUs aus drei Rechenzentren und rechnet aus seinem eigenen System ab.
- **[8×H100-Inferenz auf eigenem Bare Metal](/de/case-studies/bare-metal-gpu-inference/)**: alle acht GPUs per Passthrough an eine isolierte Tenant-VM, rund zwei Monate bis zum Produktivbetrieb.
- **[Cozystack als universeller Installer](/de/case-studies/ai-universal-installer/)**: Ein Telekommunikationsbetreiber und Integrator betreibt GPU-Passthrough in VMs und Cluster, NVIDIA Dynamo und geografisch verteilte GPUs.
- **[Von der Public Cloud auf Bare Metal, Bursting bei Bedarf](/de/case-studies/multicloud-academic-gpu/)**: anteiliges GPU-Sharing und GPU-Kosten rund fünfmal niedriger als im vorherigen Hyperscaler-Setup.

Das größte hier dokumentierte GPU-Projekt ist ein einzelner 8×H100-Node. Für einen größeren Bestand planen wir einen Proof of Concept auf Ihrer eigenen Hardware.

---

## Preise

Ænix verkauft ein Abonnement (Support, kommerzielle Module und Services), keine Lizenz. Für die Public Cloud Platform gelten die veröffentlichten Support-Stufen, bepreist pro 10 physische Nodes und Monat; Support für GPU-Sharing ist ab der Stufe Standard enthalten, Plus und Enterprise ergänzen Support rund um die Uhr und ein vollständiges Proof-of-Concept-Paket. KI-Dienste wie Model Serving sowie Multi-Region-Programme von Betreibern werden per RFP angeboten. Leistungen außerhalb des vereinbarten Umfangs berechnen wir mit 150 USD pro Stunde. Alle Details zu den Stufen finden Sie auf der **[Preisseite](/de/preise/)**.

---

## Beginnen Sie mit einem Gespräch

Bringen Sie Anzahl und Modelle Ihrer GPUs mit, Ihren aktuellen Stack und das, was Sie heute verkaufen. Ein Ænix-Engineer sagt Ihnen, welche GPU-Modi zu Ihrem Produkt passen und was ein Start erfordern würde.

<div class="cta-row">
  <a class="cta-primary" href="/de/kontakt/">Gespräch vereinbaren</a>
  <a class="cta-secondary" href="/webinars/build-your-gpu-cloud/">Webinar: Eigene GPU-Cloud aufbauen (Englisch) →</a>
</div>

---

*Ænix hat [Cozystack](https://cozystack.io) entwickelt und pflegt es gemeinsam mit Maintainern anderer Unternehmen. Cozystack ist ein CNCF-Sandbox-Projekt unter Apache 2.0; der Antrag auf CNCF Incubation befindet sich in der Due-Diligence-Prüfung. Ænix liefert es als drei Plattformen auf einer Engine (Public Cloud, Private Cloud und AI), die sich kombinieren lassen, statt einander auszuschließen.*
