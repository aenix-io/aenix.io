---
title: "Cozystack — Open-Source-Cloud-Plattform auf Kubernetes"
description: "Cozystack ist die von Aenix gebaute Open-Source-Cloud-Plattform und CNCF-Projekt. Sie betreibt virtuelle Maschinen, Container, verwaltete..."
related_pages:
  - /de/produkte/private-cloud-platform/
  - /de/dienstleistungen/platform-engineering
language: "de"
quick_facts_style: "rows"
faq_style: "rows"
hreflang_en: /products/cozystack/
direct_answer: |
  **Cozystack ist die von Aenix entwickelte Open-Source-Cloud-Plattform und ein CNCF-Projekt, mit der Unternehmen auf eigener Hardware eine private Cloud betreiben. Auf einer Kubernetes-nativen Steuerungsebene laufen virtuelle Maschinen (KubeVirt), Container, verwaltete Datenbanken, S3-kompatibler Object-Storage und GPU-Workloads — mit echter Mandantenfähigkeit über das Tenant-CRD. Cozystack steht unter Apache-2.0-Lizenz, ist eine CNCF-zertifizierte Kubernetes-Distribution und folgt den OpenSSF Best Practices. Die Plattform richtet sich an Hosting-Provider, ISPs und Unternehmen, die VMware ablösen oder Cloud-Repatriierung umsetzen. Aenix selbst verkauft keine Lizenzen, sondern die produktisierte Ænix Platform plus Engineering- und Support-Engagement.**

quick_facts:
  - label: "Was es ist"
    value: "Open-Source-Cloud-Plattform auf Kubernetes für VMs, Container, verwaltete Datenbanken, Object-Storage und GPU-Workloads auf eigener Hardware"
  - label: "Lizenz"
    value: "Apache 2.0 (keine CPU-/Core-basierte Lizenzierung)"
  - label: "Status"
    value: "Cozystack ist ein CNCF-Projekt (Sandbox seit 28.02.2025; Incubating erwartet Spätsommer 2026)"
  - label: "Zielgruppe"
    value: "Hosting-Provider, ISPs und Unternehmen, die VMware ablösen oder eine souveräne private Cloud betreiben wollen"
  - label: "Kernfunktionen"
    value: "KubeVirt-VMs + Container, Tenant-CRD-Mandantenfähigkeit, Cilium-Networking (eBPF), LINSTOR/DRBD-Storage, S3, GPU-as-a-Service"
  - label: "Hersteller"
    value: "Aenix — Open-Core-Unternehmen hinter Cozystack; verkauft die Ænix Platform plus Services, keine Lizenzen"
  - label: "Engagement"
    value: "Vier Support-Tiers: Basic (Geschäftszeiten), Standard, Plus (rund um die Uhr) und Enterprise (nach Vereinbarung). Die Community-Kanäle bleiben kostenlos."

faq:
  - q: "Ist Cozystack wirklich kostenlos?"
    a: "Ja. Die Cozystack-Plattform ist Open Source unter Apache-2.0-Lizenz und kann frei deployt, angepasst und geforkt werden. Es gibt keine CPU- oder Core-basierte Lizenzierung. Kosten entstehen nur, wenn Sie bei Aenix kommerziellen Support oder Engineering-Engagement beauftragen."
  - q: "Worin unterscheiden sich Cozystack und Aenix?"
    a: "Cozystack ist das gemeinschaftlich verwaltete CNCF-Open-Source-Projekt unter Apache 2.0. Aenix ist das kommerzielle Unternehmen, das Cozystack entwickelt und unterstützt. Aenix verkauft die produktisierte Ænix Platform plus Engineering- und Support-Engagement — keine Lizenzen für Cozystack."
  - q: "Kann Cozystack virtuelle Maschinen und Container gemeinsam betreiben?"
    a: "Ja. Über KubeVirt laufen virtuelle Maschinen und Kubernetes-Container nebeneinander auf einer einzigen Kubernetes-API. Das erlaubt es, klassische VM-Workloads (etwa nach einem VMware-Ausstieg) und Cloud-native Anwendungen auf derselben Plattform zu konsolidieren."
  - q: "Wie funktioniert die Mandantenfähigkeit?"
    a: "Cozystack nutzt ein Tenant-CRD, um Mandanten auf der Kubernetes-Steuerungsebene zu isolieren. Hosting-Provider und Unternehmen können so getrennte, isolierte Umgebungen pro Kunde oder Team bereitstellen — eine Voraussetzung für Multi-Tenant-Public-Clouds und interne Plattformen."
  - q: "Welche Technologien stecken unter der Haube?"
    a: "Cozystack baut auf KubeVirt für VMs, Cilium (eBPF) für Networking, LINSTOR/DRBD für replizierten Block-Storage sowie VictoriaMetrics und VictoriaLogs für Observability. Verwaltete Datenbanken umfassen PostgreSQL, MariaDB, Redis, RabbitMQ, Kafka und ClickHouse."
  - q: "Was kostet kommerzieller Support bei Aenix?"
    a: "Aenix bietet gestaffelten Support: Community ist kostenlos, Standard deckt Support zu Geschäftszeiten ab und Enterprise bietet 24×7-SLA. Für die produktisierte Ænix Platform gibt es Preisstufen ab Basic (1.250 $/Monat für 10 Nodes) über Standard und Plus bis Enterprise nach Vereinbarung."
---

<!-- BLOCK 1: HERO -->

**Cozystack ist die von Ænix erstellte und gepflegte Open-Source-Cloud-Plattform und ein CNCF-Projekt. Sie betreibt virtuelle Maschinen, Container, verwaltete Datenbanken, S3-Object-Storage und GPU-Workloads auf Bare Metal, das Ihnen gehört — unter einer Kubernetes-nativen Steuerungsebene mit Multi-Mandanten-Isolation. Apache-2.0-Lizenz, derzeit CNCF Sandbox (CNCF Incubating erwartet Spätsommer 2026), CNCF-zertifizierte Kubernetes-Distribution, OpenSSF-Best-Practices-Badge.**

Diese Seite beschreibt Cozystack als Ænix' Open-Source-Produkt. Das Open-Source-Projekt selbst liegt unter **[cozystack.io](https://cozystack.io)** mit Dokumentation, Installationsanleitungen und der Community. Für die turnkey kommerzielle Cloud-in-a-Box auf Basis von Cozystack siehe **[Ænix Platform](/de/produkte/)** mit ihren drei Plattformen.

<div class="cta-row">
  <a class="cta-primary" href="/de/kontakt/?type=architecture-review">Architektur-Review buchen</a>
  <a class="cta-secondary" href="https://cozystack.io">cozystack.io →</a>
</div>


<div class="trust-badges">
CNCF-Projekt · CNCF-zertifizierte Kubernetes-Distribution · OpenSSF Best Practices · Apache 2.0
</div>

<!-- /BLOCK 1 -->

---

<!-- BLOCK 2: WHAT'S IN COZYSTACK -->

<div class="band-fullbleed band-fullbleed--tint">
<div class="band-fullbleed__inner">

## Was in Cozystack steckt

<div class="capability-grid-3x3">

**KubeVirt VMs**
KVM-basierte VMs mit Live-Migration, Snapshots, Templates. Seite an Seite mit Containern auf derselben Kubernetes-Plattform.

**Mandantenfähige Steuerungsebene**
Tenant CRD, verschachtelte Tenants, Per-Tenant-Quotas, RBAC, Audit. Gebaut für das Service-Provider-Modell.

**Verwaltete Datenbanken**
PostgreSQL, MariaDB, Redis, RabbitMQ, Kafka, ClickHouse, OpenSearch, MongoDB.

**S3-Object-Storage**
SeaweedFS-basierter S3-kompatibler Storage für Backups, Anwendungen, KI-Trainingsdaten.

**GPU as a Service**
NVIDIA vGPU für VMs; für Container der NVIDIA GPU Operator mit HAMi für fraktionales GPU-Sharing sowie PCI-Passthrough. A100, H100, H200, L40S, Blackwell validiert.

**Cilium-Networking**
eBPF-nativ, Network Policies, MetalLB, BGP. Ersetzt NSX-äquivalente Funktionalität.

**LINSTOR-Storage**
Replizierter Blockspeicher, der auch in großen Umgebungen trägt. SeaweedFS wird ebenfalls unterstützt.

**Observability**
VictoriaMetrics + VictoriaLogs enthalten.

**Self-Service-Portal & WHMCS**
Cozystack Dashboard für Self-Service. Produktionsreife WHMCS-Billing-Integration mit zwei Modi.

</div>

<div class="arch-section__fig">
<div class="diagram">
<div class="diagram__node diagram__node--brand"><b>Cozystack</b><div class="diagram__chips"><span>Tenant-CRD-Mandantenfähigkeit</span><span>Cozystack Dashboard</span><span>WHMCS-Billing</span></div></div>
<div class="diagram__conn">eine Kubernetes-API</div>
<div class="diagram__node"><b>Workloads</b><div class="diagram__chips"><span>KubeVirt VMs</span><span>Container</span><span>Verwaltete Datenbanken</span><span>S3-Object-Storage</span><span>GPU</span></div></div>
<div class="diagram__conn">Networking, Storage, Observability</div>
<div class="diagram__node"><b>Plattform-Dienste</b><div class="diagram__chips"><span>Cilium (eBPF)</span><span>LINSTOR/DRBD</span><span>SeaweedFS</span><span>VictoriaMetrics + VictoriaLogs</span></div></div>
<div class="diagram__conn">auf</div>
<div class="diagram__node"><b>Bare Metal, das Ihnen gehört</b><div class="diagram__chips"><span>eigene Hardware</span></div></div>
</div>
</div>

![Cozystack Dashboard — Self-Service-Katalog der Managed Services](/images/uploads/2026/04/cozystack-managed-services.png)

</div>
</div>


<!-- /BLOCK 2 -->

---

<!-- BLOCK 3: PROJECT VS PRODUCT -->

## Cozystack, das Projekt — Ænix, das Unternehmen — Ænix Platform, das Produkt

- **Cozystack** — Open-Source-Plattform. CNCF-Projekt (derzeit Sandbox; CNCF Incubating erwartet Spätsommer 2026). Apache 2.0. Community-verwaltet. Jeder kann deployen, beitragen, forken.
- **Ænix** — das Open-Core-Unternehmen, das Cozystack erstellt und pflegt. Der größte einzelne Beitragende des Projekts. Hersteller von Ænix Platform.
- **Ænix Platform** — Ænix' turnkey kommerzielle Cloud-in-a-Box auf Basis von Cozystack. Drei Plattformen (Public Cloud / Private Cloud / AI), abgestimmt auf das Käuferprofil. Ergänzt Hosting-Panel, Billing, Portale, Payments, Support, produktisierten Installer, Enterprise-SLA. **[Ænix Platform erkunden →](/de/produkte/)**.
- **cozystack.io** — offizielle Projektseite. Dokumentation, Installation, Releases, Community. Hersteller-neutral, CNCF-ausgerichtet.
- **aenix.io** (diese Seite) — Ænix' kommerzielles Angebot und Produktoberfläche.

Sie können Cozystack Open Source ohne Ænix nutzen; Ænix' kommerzielles Angebot (Ænix Platform + Engagement-Services) ist optional. Viele Kunden wählen Ænix Platform für das turnkey Paket — Billing, Portale, Payments, Support — ohne diese Schichten selbst zu bauen.

<!-- /BLOCK 3 -->

---

<!-- BLOCK 4: WHO USES COZYSTACK -->

## Wer Cozystack in der Produktion betreibt

{{< clients >}}

Produktive Deployments in der EU, DACH und Zentralasien. Der Kundenstamm umfasst:

- Service Provider, die mandantenfähige Cloud-Produkte betreiben (öffentlich: GoHost.kz, HDReady, Beby Cloud, HiKube, UseTech, Cloupard, Cloudsy auf der Ænix Public Cloud Platform)
- Banken und Versicherer unter DORA / sektoraler Regulierung (NDA bis Mitte 2027)
- Telekommunikationsbetreiber mit Souveräne-Cloud-Produktstarts (NDA)
- KI-/GPU-Betreiber mit dauerhaft ausgelasteten Inferenz-Workloads (NDA)
- Organisationen des öffentlichen und quasi-öffentlichen Sektors (NDA)
- Enterprise-Plattform-Teams, die interne Developer-Plattformen bauen

Cozystack ist außerdem in der [CNCF Landscape](https://landscape.cncf.io) gelistet — Community-Produktionsnutzer über Ænix' Kundenstamm hinaus.

{{< quote-carousel >}}

<!-- /BLOCK 4 -->

---

<!-- BLOCK 5: HOW TO USE COZYSTACK -->

## Wie man Cozystack nutzt

### Pfad 1: Selbst deployen

Cozystack ist Open Source. Installation, Dokumentation und Community unter **[cozystack.io](https://cozystack.io)**. CNCF Slack und Telegram für Community-Support.

Geeignet, wenn:
- Ihr Team über Kubernetes-Expertise für den Betrieb verfügt
- keine Anforderung an kommerziellen Support besteht
- anfangs geringere Einsätze / nicht-produktiv

### Pfad 2: Ænix-unterstütztes Deployment

Ænix führt das Engagement end-to-end durch:
- **[Platform Readiness Assessment](/de/dienstleistungen/platform-readiness-assessment/)** — 14-28 Tage, schriftliches Assessment
- **Build-Engagement** — 3-12 Monate, integriertes Team, Wissenstransfer
- **Managed-Engagement** — Ænix betreibt die Plattform vertraglich

Geeignet, wenn:
- produktionstaugliche SLA ab Tag 1
- regulator-ausgerichtetes Deployment mit Audit-Readiness
- beschleunigter Wissenstransfer gewünscht

Für konkrete Use Cases siehe:
- **[Private Cloud Consulting](/de/dienstleistungen/private-cloud-consulting/)** — breiter Scope
- **[VMware Alternative](/de/alternativen/vmware-alternative/)** — VMware-Exit
- **[Sovereign AI](/de/loesungen/sovereign-ai/)** — KI-Workload-Fokus
- **[DORA-Compliance](/de/loesungen/dora-compliance/)** — Financial Services

<!-- /BLOCK 5 -->

---

<!-- BLOCK 6: PRICING -->

## Preisgestaltung

Cozystack als Plattform ist **kostenlos** (Apache 2.0). Jeder kann es betreiben.

Für kommerziellen Ænix-Support und die turnkey Cloud-in-a-Box auf Basis von Cozystack siehe **[Ænix Platform](/de/produkte/)** — drei Plattformen, abgestimmt auf das Käuferprofil, mit vier Support-Tiers (Basic ab 1.250 $/Monat pro 10 Nodes; Standard 3.000 $; Plus 5.500 $; Enterprise Custom).

Einstiegs-Tier — **Enterprise-Support für Cozystack** — für Produkt-Teams, die Cozystack auf eigenen / gemieteten Servern (Hetzner, OVH, regionales Bare-Metal) ohne die kommerzielle Portal-/Billing-Schicht betreiben.

[Preisdetails →](/de/preise/) | [Alle Plattformen →](/de/produkte/)

<!-- /BLOCK 6 -->

---

<!-- BLOCK 7: FAQ -->


**Weitere Fragen?** Die Dokumentation finden Sie auf **[cozystack.io](https://cozystack.io)**, oder **[sprechen Sie mit uns](#discovery)**.

<!-- /BLOCK 7 -->

---

<!-- BLOCK 8: BOTTOM CTA -->

<a id="discovery"></a>
<div class="cta-row">
  <a class="cta-primary" href="/de/kontakt/">Discovery-Call buchen</a>
</div>

- **[cozystack.io](https://cozystack.io)** — Installation, Dokumentation, Community
- **[Cozystack-Architektur-Artikel](/de/blog/2026/05/cozystack-einfuehrung-architektur/)**
- **[Ænix Platform](/de/produkte/)** — turnkey kommerzielle Cloud-in-a-Box auf Basis von Cozystack
  - [Public Cloud Platform](/de/produkte/public-cloud-platform/) — für Hosting-Anbieter und große Betreiber
  - [Private Cloud Platform](/de/produkte/private-cloud-platform/) — für regulierte Unternehmen
  - [Developer-Self-Service-Schicht der Private Cloud Platform](/de/produkte/private-cloud-platform/) — für Produkt-Engineering-Teams
  - [AI Platform](/de/produkte/ai-platform/) — für KI-lastige Organisationen
- **[Platform Readiness Assessment](/de/dienstleistungen/platform-readiness-assessment/)** — Engagement-Methodik

<!-- /BLOCK 8 -->

---

*Cozystack ist ein CNCF-Projekt (derzeit CNCF Sandbox; CNCF Incubating erwartet Spätsommer 2026), Apache 2.0. Ænix ist das Open-Core-Unternehmen, das es erstellt und pflegt, und der Hersteller von Ænix Platform — der turnkey kommerziellen Cloud-in-a-Box.*
