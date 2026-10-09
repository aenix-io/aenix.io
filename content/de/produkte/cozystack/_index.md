---
title: "Cozystack — Open-Source-Cloud-Plattform auf Kubernetes"
description: "Cozystack ist eine Open-Source-Cloud-Plattform (CNCF) auf Kubernetes für VMs, Container, Datenbanken, S3 und GPUs. Von Ænix entwickelt; Support ab 1.250 USD."
related_pages:
  - /de/produkte/cozystack-enterprise-support/
  - /de/preise/
  - /de/produkte/
  - /de/produkte/public-cloud-platform/
  - /de/alternativen/vmware-alternative/
language: "de"
quick_facts_style: "rows"
faq_style: "rows"
hreflang_en: /products/cozystack/
direct_answer_image: "/images/cozystack-screenshot.png"
direct_answer_image_alt: "Cozystack-Konsole — Self-Service-Katalog"
direct_answer: |
  **Cozystack ist eine Open-Source-Cloud-Plattform auf Kubernetes, die virtuelle Maschinen, Container, Managed Databases, S3-Object-Storage und GPU-Workloads auf Ihrem eigenen Bare Metal betreibt — unter einer Kubernetes-nativen Control Plane mit Mandantenisolation. Sie steht unter der Apache-2.0-Lizenz ohne Gebühren pro CPU oder Core und ist ein CNCF-Projekt (Sandbox seit Februar 2025; der Antrag auf CNCF Incubation befindet sich in der Due-Diligence-Prüfung). Ænix hat Cozystack entwickelt und pflegt es gemeinsam mit Maintainern anderer Unternehmen. Cozystack eignet sich für Service Provider, regulierte Unternehmen, Telekommunikationsbetreiber und Plattform-Teams, die eine selbst betriebene Alternative zu proprietärer Virtualisierung und Public Cloud suchen. Ænix verkauft Enterprise-Support für selbst betriebenes Cozystack (ab 1.250 USD pro 10 Nodes und Monat), drei darauf aufbauende kommerzielle Plattformen sowie Projektleistungen.**
quick_facts:
  - label: "Was es ist"
    value: "Eine Open-Source-Cloud-Plattform, Kubernetes-nativ, die VMs, Container, Managed Databases, S3 und GPU-Workloads auf Bare Metal unter einer mandantenfähigen Control Plane betreibt."
  - label: "Lizenz"
    value: "Apache 2.0 (keine Lizenzkosten pro CPU oder Core)"
  - label: "Status"
    value: "CNCF-Projekt (Sandbox seit 28.02.2025; Incubation-Antrag in der Due-Diligence-Prüfung). CNCF Certified Kubernetes Distribution; aufgenommen in das Programm CNCF Kubernetes AI Conformance (September 2026); OpenSSF-Best-Practices-Badge."
  - label: "Kerntechnologie"
    value: "KubeVirt für VMs und Container auf einer Kubernetes-API, Cilium-Networking (eBPF), LINSTOR/DRBD- und SeaweedFS-Storage, Mandantenfähigkeit über das Tenant-CRD, Observability mit VictoriaMetrics + VictoriaLogs."
  - label: "Für wen"
    value: "Service Provider, regulierte Unternehmen (DORA/NIS2), Telekommunikationsbetreiber, AI-/GPU-Betreiber und Enterprise-Plattform-Teams, die eine selbst betriebene Private Cloud aufbauen."
  - label: "Kommerzielles Angebot"
    value: "Ænix verkauft Enterprise-Support für selbst betriebenes Cozystack als dasselbe Abonnement wie die Ænix Public Cloud Platform (kommerzielle Module inklusive, Nutzung optional) — Basic 1.250 USD, Standard 3.000 USD, Plus 5.500 USD pro 10 Nodes und Monat, Enterprise individuell. Private Cloud und AI Platform werden per RFP angeboten."
faq:
  - q: "Ist Cozystack kostenlos nutzbar?"
    a: "Ja. Cozystack ist Open Source unter Apache 2.0, ohne Lizenzkosten pro CPU oder Core; jeder kann es auf eigenen oder gemieteten Servern betreiben. Die kommerziellen Plattformen, der Support und die Services von Ænix sind optional."
  - q: "Worin unterscheiden sich Cozystack und die Ænix-Plattformen?"
    a: "Cozystack ist das Open-Source-Projekt der CNCF, das von der Community gesteuert wird. Die drei Ænix-Plattformen (Public Cloud, Private Cloud und AI) sind kommerzielle Angebote, die darauf aufbauen: Sie ergänzen proprietäre Module wie das Billing-System und die WHMCS-Integration, einen produktisierten Installer, Projektleistungen und ein Enterprise-SLA."
  - q: "Wie betreibt Cozystack virtuelle Maschinen und Container gemeinsam?"
    a: "Cozystack nutzt KubeVirt, um KVM-basierte virtuelle Maschinen neben Containern auf derselben Kubernetes-API zu betreiben. VMs unterstützen Live-Migration, Snapshots und Templates; klassische VM-Workloads und Cloud-native Container teilen sich so eine Control Plane."
  - q: "Lässt sich Cozystack air-gapped installieren?"
    a: "Ja. Cozystack hat einen dokumentierten Installationsablauf für air-gapped Umgebungen. Das passt zu regulierten und isolierten Umgebungen, in denen die Plattform ohne Internetzugang laufen muss."
  - q: "Welche Hardware unterstützt Cozystack?"
    a: "Cozystack läuft auf handelsüblichen x86-Servern. Bare Metal wird bevorzugt, der Betrieb auf VMs ist aber möglich. Als Storage stehen LINSTOR (DRBD), SeaweedFS und SAN-Systeme von Herstellern zur Verfügung."
  - q: "Wir betreiben Cozystack bereits. Können wir Support kaufen?"
    a: "Ja. Enterprise-Support für selbst betriebenes Cozystack wird nach den veröffentlichten Stufen verkauft: Basic 1.250 USD, Standard 3.000 USD und Plus 5.500 USD pro 10 physische Nodes und Monat bei jährlicher Abrechnung sowie eine individuelle Enterprise-Stufe. Es ist dasselbe Abonnement wie bei der Ænix Public Cloud Platform: Jede Stufe enthält die proprietären kommerziellen Ænix-Module (Billing-System und WHMCS-Integration), die ein Team mit selbst betriebenem Cozystack einfach ungenutzt lässt. Basic und Standard decken die Geschäftszeiten ab, Plus und Enterprise rund um die Uhr (24×7)."
---

**Cozystack ist eine Open-Source-Cloud-Plattform und ein CNCF-Projekt, das Ænix entwickelt hat und gemeinsam mit Maintainern anderer Unternehmen pflegt. Es betreibt virtuelle Maschinen, Container, Managed Databases, S3-Object-Storage und GPU-Workloads auf Ihrem eigenen Bare Metal — unter einer Kubernetes-nativen Control Plane mit Mandantenisolation. Apache-2.0-Lizenz, derzeit CNCF Sandbox (der Antrag auf CNCF Incubation befindet sich in der Due-Diligence-Prüfung), CNCF Certified Kubernetes Distribution, CNCF Kubernetes AI Conformance, OpenSSF-Best-Practices-Badge.**

Diese Seite erklärt Cozystack aus Sicht von Ænix: was das Projekt ist und wie Ænix es kommerziell unterstützt. Das Projekt selbst finden Sie unter **[cozystack.io](https://cozystack.io)** mit Dokumentation, Installationsanleitungen und Community. Die kommerziellen Plattformen auf Basis von Cozystack finden Sie unter **[die Ænix-Plattformen](/de/produkte/)**.

<div class="cta-row">
  <a class="cta-primary" href="/de/produkte/cozystack-enterprise-support/">Enterprise-Support anfragen</a>
  <a class="cta-secondary" href="https://cozystack.io">cozystack.io →</a>
</div>

<div class="trust-badges">
CNCF-Projekt · CNCF Certified Kubernetes Distribution · CNCF Kubernetes AI Conformance · OpenSSF Best Practices · Apache 2.0
</div>

---

<div class="band-fullbleed band-fullbleed--tint">
<div class="band-fullbleed__inner">

## Was in Cozystack steckt

<div class="capability-grid-3x3">

**KubeVirt-VMs**
KVM-basierte VMs mit Live-Migration, Snapshots und Templates. Neben Containern auf derselben Kubernetes-Plattform.

**Mandantenfähige Control Plane**
Tenant-CRD, verschachtelte Tenants, Quotas pro Tenant, RBAC, Audit. Gebaut für das Service-Provider-Modell.

**Managed Databases**
PostgreSQL (CloudNativePG), MariaDB, MongoDB, ClickHouse, Valkey, OpenSearch, Kafka, NATS, RabbitMQ, Qdrant, FoundationDB.

**S3-Object-Storage**
S3-kompatibler Storage auf Basis von SeaweedFS für Backups, Anwendungen und AI-Trainingsdaten.

**GPU as a Service**
NVIDIA-GPUs für Rechenzentren über den NVIDIA GPU Operator: Passthrough ganzer GPUs an VMs, NVIDIA vGPU für VMs (erfordert Ihre NVIDIA-vGPU-Lizenz). In Tenant-Kubernetes-Clustern stellt der GPU Operator MIG-Partitionen MIG-fähiger Karten als einplanbare Ressourcen bereit, und HAMi teilt Karten per Time-Slicing mit Überbuchung.

**Cilium-Networking**
eBPF-nativ, Network Policies, MetalLB, BGP. Ersetzt Funktionen, die bei VMware NSX bereitstellt.

**LINSTOR-Storage**
Replizierter Block-Storage über LINSTOR/DRBD (Piraeus-Operator). SeaweedFS für S3.

**Observability**
VictoriaMetrics + VictoriaLogs inklusive.

**Self-Service-Portal**
Cozystack Dashboard für Self-Service, mit Branding zur Laufzeit für White-Labeling.

</div>

<div class="arch-section__fig">
<div class="diagram">
<div class="diagram__node diagram__node--brand"><b>Cozystack</b><div class="diagram__chips"><span>Mandantenfähigkeit über Tenant-CRD</span><span>Cozystack Dashboard</span></div></div>
<div class="diagram__conn">eine Kubernetes-API</div>
<div class="diagram__node"><b>Workloads</b><div class="diagram__chips"><span>KubeVirt-VMs</span><span>Container</span><span>Managed Databases</span><span>S3-Object-Storage</span><span>GPU</span></div></div>
<div class="diagram__conn">Networking, Storage, Observability</div>
<div class="diagram__node"><b>Plattformdienste</b><div class="diagram__chips"><span>Cilium eBPF</span><span>LINSTOR / DRBD</span><span>SeaweedFS</span><span>VictoriaMetrics + VictoriaLogs</span></div></div>
<div class="diagram__conn">auf</div>
<div class="diagram__node"><b>Ihr eigenes Bare Metal</b><div class="diagram__chips"><span>Handelsübliche x86-Server</span></div></div>
</div>
</div>

</div>
</div>

---

## Cozystack, das Projekt — Ænix, das Unternehmen

<div class="advantage-panel">

- **Cozystack** — Open-Source-Cloud-Plattform. CNCF-Projekt (derzeit Sandbox; der Antrag auf CNCF Incubation befindet sich in der Due-Diligence-Prüfung). Apache 2.0. Von der Community gesteuert, mit Maintainern aus mehreren Unternehmen. Jeder kann es einsetzen, dazu beitragen oder forken.
- **Ænix** — das Unternehmen, das Cozystack entwickelt hat und mitpflegt. Verkauft Support für Cozystack, drei darauf aufbauende kommerzielle Plattformen und Projektleistungen.
- **Die Ænix-Plattformen** — [Public Cloud](/de/produkte/public-cloud-platform/), [Private Cloud](/de/produkte/private-cloud-platform/) und [AI Platform](/de/produkte/ai-platform/): Cozystack plus proprietäre Ænix-Module, ein produktisierter Installer, Projektleistungen und ein Enterprise-SLA. **[Plattformen vergleichen →](/de/produkte/)**
- **cozystack.io** — offizielle Projektseite. Dokumentation, Installation, Releases, Community. Herstellerneutral.
- **aenix.io** (diese Website) — das kommerzielle Angebot von Ænix.

</div>

### Was Ænix ergänzt

Nicht Teil des Open-Source-Projekts Cozystack, sondern von Ænix verkauft:

- **[WHMCS-Integration](/de/produkte/whmcs-integration/)** — ein proprietäres Ænix-Modul, das Cozystack-Dienste aus WHMCS heraus verkauft und dort abrechnet. Teil des Abonnements der Ænix Public Cloud Platform.
- **Ænix-Billing-System** — proprietär, Teil des Abonnements der Ænix Public Cloud Platform.
- **[Enterprise-Support](/de/produkte/cozystack-enterprise-support/)**, Projektleistungen und Managed Operations.

Sie können Cozystack ohne Ænix nutzen. Alles, was Ænix darüber hinaus verkauft, ist optional.

---

## Wer Cozystack produktiv betreibt

{{< clients >}}

Produktive Installationen in der EU, im DACH-Raum und in Zentralasien, darunter:

- Service Provider, die mandantenfähige Cloud-Produkte betreiben (öffentlich: GoHost.kz, HDReady, Beby Cloud, HiKube, UseTech, Cloupard, Cloudsy auf der Ænix Public Cloud Platform)
- Banken und Finanzgruppen, die interne Private Clouds betreiben (anonymisierte [Fallstudien](/de/case-studies/))
- Telekommunikations-Integratoren sowie AI-/GPU-Betreiber, die Inferenz- und AI-Plattformen betreiben
- Enterprise-Plattform-Teams, die interne Developer-Plattformen aufbauen

Cozystack ist in der [CNCF Landscape](https://landscape.cncf.io) gelistet.

{{< quote-carousel >}}

---

## Wie Sie Cozystack nutzen

### Bevor Sie starten: was ein Test wirklich kostet

Es gibt keine Demo mit `kind` oder als einzelnes Binary, und wer etwas anderes behauptet, kostet Sie einen Abend. Talos Linux ist das empfohlene Betriebssystem; Cozystack lässt sich aber auch auf generischen Kubernetes-Distributionen wie k3s, kubeadm oder RKE2 installieren. In beiden Fällen braucht es ein echtes Disk-Layout, denn die Storage- und Netzwerkschichten, die Cozystack verwaltet, werden nicht simuliert.

Das kleinste ehrliche Labor besteht aus **drei Nodes** — physischen Hosts oder virtuellen Maschinen mit Host-CPU-Passthrough, was die meisten nutzen. Pro Node: 8 Cores, 24 GB RAM, eine 50-GB-Systemplatte und eine unformatierte 256-GB-Zweitplatte für den Datenpool. Das reicht für einige Tenants, ein paar Tenant-Kubernetes-Cluster und einige VMs oder Datenbanken.

Das [Getting-Started-Tutorial](https://cozystack.io/docs/getting-started/) führt durch den gesamten Weg: Talos-Installation, Cluster-Bootstrap, Cozystack-Installation, erster Tenant, dann eine VM und eine Managed Database. Rechnen Sie beim ersten Mal mit einem Nachmittag.

### Weg 1: Selbst installieren

Cozystack ist Open Source. Installation, Dokumentation und Community unter **[cozystack.io](https://cozystack.io)**. Community-Support im Kanal #cozystack im [Kubernetes Slack](https://kubernetes.slack.com/archives/C06L3CPRVN1) und in Telegram.

Geeignet, wenn Ihr Team die Kubernetes-Expertise für den Betrieb mitbringt und keine zugesagten Reaktionszeiten braucht.

### Weg 2: Cozystack läuft schon? Enterprise-Support dazunehmen

Wenn Cozystack bereits produktiv läuft, stellt Ihnen der Enterprise-Support von Ænix die Maintainer für Ihre Cluster in Bereitschaft. Die Preise folgen der veröffentlichten Liste — Basic 1.250 USD, Standard 3.000 USD, Plus 5.500 USD pro 10 physische Nodes und Monat bei jährlicher Abrechnung, Enterprise individuell. Es ist dasselbe Abonnement wie bei der Ænix Public Cloud Platform: Jede Stufe enthält die proprietären kommerziellen Ænix-Module (Billing-System und WHMCS-Integration), die ein Team mit selbst betriebenem Cozystack einfach ungenutzt lässt. Die Stufen umfassen Reaktionszeiten (SLA) für Incidents, CVE-Fixes, begleitete Upgrades ab Standard und 24×7-Abdeckung ab Plus.

<div class="cta-row">
  <a class="cta-primary" href="/de/produkte/cozystack-enterprise-support/">Enterprise-Support für Cozystack →</a>
  <a class="cta-secondary" href="/de/preise/#support">Support-Stufen und Preise →</a>
</div>

### Weg 3: Plattform von Ænix aufbauen lassen

Ænix übernimmt das Projekt von Anfang bis Ende:
- **[Platform Readiness Assessment](/de/dienstleistungen/platform-readiness-assessment/)** — 14 oder 28 Tage, Festpreis, schriftlicher Bericht
- **Aufbau** — für die Ænix Public Cloud Platform bei Provider-Größe innerhalb weniger Wochen live; für die Ænix Private Cloud Platform ein Aufbau von 3–12 Monaten, je nach Umfang
- **Managed Operations** — Ænix betreibt die Plattform vertraglich

Für konkrete Anwendungsfälle siehe:
- **[Private Cloud Consulting](/de/dienstleistungen/private-cloud-consulting/)** — breiter Umfang
- **[VMware-Alternative](/de/alternativen/vmware-alternative/)** — Ausstieg aus VMware
- **[Sovereign AI](/de/loesungen/sovereign-ai/)** — Fokus auf AI-Workloads
- **[DORA-Compliance](/de/loesungen/dora-compliance/)** — Finanzdienstleister

---

## Preise

Cozystack ist **kostenlos** (Apache 2.0). Jeder kann es betreiben.

Enterprise-Support für selbst betriebenes Cozystack ist dasselbe Abonnement wie die Ænix Public Cloud Platform, mit vier Stufen: Basic 1.250 USD, Standard 3.000 USD und Plus 5.500 USD pro 10 physische Nodes und Monat bei jährlicher Abrechnung sowie eine individuelle Enterprise-Stufe. Jede Stufe enthält die proprietären kommerziellen Ænix-Module (Billing-System und WHMCS-Integration); wer Cozystack selbst betreibt, lässt sie einfach ungenutzt. Die Ænix Private Cloud Platform und die Ænix AI Platform werden per RFP angeboten.

<div class="cta-row">
  <a class="cta-secondary" href="/de/preise/">Preisdetails →</a>
  <a class="cta-secondary" href="/de/produkte/">Plattformen vergleichen →</a>
</div>

---

<a id="discovery"></a>
<div class="cta-row">
  <a class="cta-primary" href="/de/kontakt/">Gespräch vereinbaren</a>
</div>

- **[cozystack.io](https://cozystack.io)** — Installation, Dokumentation, Community
- **[Artikel zur Cozystack-Architektur](/de/blog/2026/05/cozystack-einfuehrung-architektur/)**
- **[Enterprise-Support für Cozystack](/de/produkte/cozystack-enterprise-support/)** — für Teams, die es bereits betreiben
- **[Die Ænix-Plattformen](/de/produkte/)** — kommerzielle Plattformen auf Basis von Cozystack
  - [Public Cloud Platform](/de/produkte/public-cloud-platform/) — für Organisationen, die Cloud verkaufen, vom regionalen Hoster bis zum nationalen Betreiber
  - [Private Cloud Platform](/de/produkte/private-cloud-platform/) — für regulierte Organisationen, die Cloud für sich selbst betreiben, inklusive Developer Self-Service
  - [AI Platform](/de/produkte/ai-platform/) — für Inferenz, Fine-Tuning und RAG auf Ihren eigenen GPUs

---

*Cozystack ist ein CNCF-Projekt (derzeit CNCF Sandbox; der Antrag auf CNCF Incubation befindet sich in der Due-Diligence-Prüfung), Apache 2.0. Ænix hat Cozystack entwickelt und pflegt es gemeinsam mit Maintainern anderer Unternehmen.*
