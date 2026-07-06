---
title: "Cozystack — Open-Source-Cloud-Plattform auf Kubernetes"
description: "Cozystack ist die von Aenix gebaute Open-Source-Cloud-Plattform und CNCF Project-Projekt. Sie betreibt virtuelle Maschinen, Container, verwaltete..."
related_pages:
  - /de/produkte/private-cloud
  - /de/dienstleistungen/platform-engineering
language: "de"
hreflang_en: /products/cozystack/
direct_answer: |
  **Cozystack ist die von Aenix entwickelte Open-Source-Cloud-Plattform und ein CNCF-Projekt, mit der Unternehmen auf eigener Hardware eine private Cloud betreiben. Auf einer Kubernetes-nativen Steuerungsebene laufen virtuelle Maschinen (KubeVirt), Container, verwaltete Datenbanken, S3-kompatibler Object-Storage und GPU-Workloads — mit echter Mandantenfähigkeit über das Tenant-CRD. Cozystack steht unter Apache-2.0-Lizenz, ist eine Kubernetes Certified Distribution und folgt den OpenSSF Best Practices. Die Plattform richtet sich an Hosting-Provider, ISPs und Unternehmen, die VMware ablösen oder Cloud-Repatriierung umsetzen. Aenix selbst verkauft keine Lizenzen, sondern die produktisierte Ænix Platform plus Engineering- und Support-Engagement.**

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
    value: "Support-Tiers Community (kostenlos), Standard (Geschäftszeiten) und Enterprise (24×7 SLA)"

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
    a: "Cozystack baut auf KubeVirt für VMs, Cilium (eBPF) für Networking, LINSTOR/DRBD für replizierten Block-Storage sowie VictoriaMetrics und VictoriaLogs für Observability. Verwaltete Datenbanken umfassen PostgreSQL, MySQL, Redis, RabbitMQ, Kafka und ClickHouse."
  - q: "Was kostet kommerzieller Support bei Aenix?"
    a: "Aenix bietet gestaffelten Support: Community ist kostenlos, Standard deckt Support zu Geschäftszeiten ab und Enterprise bietet 24×7-SLA. Für die produktisierte Ænix Platform gibt es Preisstufen ab Basic (1.250 $/Monat für 10 Nodes) über Standard und Plus bis Enterprise nach Vereinbarung."
---

<!-- BLOCK 1: HERO -->

**Cozystack ist die von Aenix erstellte und gepflegte Open-Source-Cloud-Plattform und ein CNCF-Projekt. Sie betreibt virtuelle Maschinen, Container, verwaltete Datenbanken, S3-Object-Storage und GPU-Workloads auf Bare Metal, das Ihnen gehört — unter einer Kubernetes-nativen Steuerungsebene mit Multi-Mandanten-Isolation. Apache-2.0-Lizenz, derzeit CNCF Sandbox (CNCF Incubating erwartet Spätsommer 2026), CNCF-zertifizierte Kubernetes-Distribution, OpenSSF-Best-Practices-Badge.**

Diese Seite beschreibt Cozystack als Aenix' Open-Source-Produkt. Das Open-Source-Projekt selbst liegt unter **[cozystack.io](https://cozystack.io)** mit Dokumentation, Installationsanleitungen und der Community. Für die turnkey kommerzielle Cloud-in-a-Box auf Basis von Cozystack siehe **[Ænix Platform](/de/produkte/aenix-platform/)** mit ihren fünf Editions.

<div class="cta-row">
  <a class="cta-primary" href="/contact/?type=architecture-review">Architektur-Review buchen</a>
  <a class="cta-secondary" href="https://cozystack.io">cozystack.io →</a>
</div>


<div class="trust-badges">
CNCF-Projekt · CNCF-zertifizierte Kubernetes-Distribution · OpenSSF Best Practices · Apache 2.0
</div>

<!-- /BLOCK 1 -->

---

<!-- BLOCK 2: WHAT'S IN COZYSTACK -->

## Was in Cozystack steckt

<div class="capability-grid-3x3">

**KubeVirt VMs**
KVM-basierte VMs mit Live-Migration, Snapshots, Templates. Seite an Seite mit Containern auf derselben Kubernetes-Plattform.

**Mandantenfähige Steuerungsebene**
Tenant CRD, verschachtelte Tenants, Per-Tenant-Quotas, RBAC, Audit. Gebaut für das Service-Provider-Modell.

**Verwaltete Datenbanken**
PostgreSQL, MySQL, Redis, RabbitMQ, Kafka, ClickHouse, OpenSearch, MongoDB.

**S3-Object-Storage**
SeaweedFS-basierter S3-kompatibler Storage für Backups, Anwendungen, KI-Trainingsdaten.

**GPU as a Service**
NVIDIA vGPU für VMs, MIG / Time-Slicing / Passthrough für Container. A100, H100, H200, L40S, Blackwell validiert.

**Cilium-Networking**
eBPF-nativ, Network Policies, MetalLB, BGP. Ersetzt NSX-äquivalente Funktionalität.

**LINSTOR-Storage**
Repliziertes Block-Storage im Maßstab. Rook-Ceph wird ebenfalls unterstützt.

**Observability**
VictoriaMetrics + VictoriaLogs enthalten.

**Self-Service-Portal & WHMCS**
cozyportal für Self-Service. Produktionsreife WHMCS-Billing-Integration mit zwei Modi.

</div>

<!-- /BLOCK 2 -->

---

<!-- BLOCK 3: PROJECT VS PRODUCT -->

## Cozystack das Projekt vs Aenix das Unternehmen vs Ænix Platform das Produkt

- **Cozystack** — Open-Source-Plattform. CNCF-Projekt (derzeit Sandbox; CNCF Incubating erwartet Spätsommer 2026). Apache 2.0. Community-verwaltet. Jeder kann deployen, beitragen, forken.
- **Aenix** — das Open-Core-Unternehmen, das Cozystack erstellt und pflegt. Größter Einzel-Contributor. Hersteller von Ænix Platform.
- **Ænix Platform** — Aenix' turnkey kommerzielle Cloud-in-a-Box auf Basis von Cozystack. Fünf Editions (Public Cloud / ISP / Enterprise / IDP / AI/ML), abgestimmt auf das Buyer-Profil. Ergänzt Hosting-Panel, Billing, Portale, Payments, Support, produktisierten Installer, Enterprise-SLA. **[Ænix Platform erkunden →](/de/produkte/aenix-platform/)**.
- **cozystack.io** — offizielle Projektseite. Dokumentation, Installation, Releases, Community. Hersteller-neutral, CNCF-ausgerichtet.
- **aenix.io** (diese Seite) — Aenix' kommerzielles Angebot und Produktoberfläche.

Sie können Cozystack Open Source ohne Aenix nutzen; Aenix' kommerzielles Angebot (Ænix Platform + Engagement-Services) ist optional. Viele Kunden wählen Ænix Platform für das turnkey Paket — Billing, Portale, Payments, Support — ohne diese Schichten selbst zu bauen.

<!-- /BLOCK 3 -->

---

<!-- BLOCK 4: WHO USES COZYSTACK -->

## Wer Cozystack in der Produktion betreibt

{{< placeholder-logos >}}

Produktive Deployments in der EU, DACH und Zentralasien. Der Kundenstamm umfasst:

- Service Provider, die mandantenfähige Cloud-Produkte betreiben (öffentlich: GoHost.kz, HDReady, Beby Cloud, HiKube, UseTech, Cloupard, Cloudsy auf der Ænix Platform ISP Edition)
- Banken und Versicherer unter DORA / sektoraler Regulierung (NDA bis Mitte 2027)
- Telekommunikationsbetreiber mit Souveräne-Cloud-Produktstarts (NDA)
- KI-/GPU-Betreiber mit nachhaltigen Inferenz-Workloads (NDA)
- Organisationen des öffentlichen und quasi-öffentlichen Sektors (NDA)
- Enterprise-Plattform-Teams, die interne Developer-Plattformen bauen

Cozystack ist außerdem in der [CNCF Landscape](https://landscape.cncf.io) gelistet — Community-Produktionsnutzer über Aenix' Kundenstamm hinaus.

> {{QUOTE_1 — pending permission}}

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

### Pfad 2: Aenix-unterstütztes Deployment

Aenix führt das Engagement end-to-end durch:
- **[Platform Readiness Assessment](/de/dienstleistungen/platform-readiness-assessment/)** — 14-28 Tage, schriftliches Assessment
- **Build-Engagement** — 3-12 Monate, integriertes Team, Wissenstransfer
- **Managed-Engagement** — Aenix betreibt die Plattform vertraglich

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

Für kommerziellen Aenix-Support und die turnkey Cloud-in-a-Box auf Basis von Cozystack siehe **[Ænix Platform](/de/produkte/aenix-platform/)** — fünf Editions, abgestimmt auf das Buyer-Profil, mit vier Support-Tiers (Basic ab 1.250 $/Monat pro 10 Nodes; Standard 3.000 $; Plus 5.500 $; Enterprise Custom).

Einstiegs-Tier — **Pure Cozystack mit Ænix Support** — für Produkt-Teams, die Cozystack auf eigenen / gemieteten Servern (Hetzner, OVH, regionales Bare-Metal) ohne die kommerzielle Portal-/Billing-Schicht betreiben.

[Preisdetails →](/de/preise/) | [Alle Editions →](/de/produkte/aenix-platform/)

<!-- /BLOCK 6 -->

---

<!-- BLOCK 7: FAQ -->


**Weitere Fragen?** Siehe **[cozystack.io](https://cozystack.io)** für Dokumentation oder **[sprechen Sie mit uns](#discovery)**.

<!-- /BLOCK 7 -->

---

<!-- BLOCK 8: BOTTOM CTA -->

<a id="discovery"></a>
<div class="cta-row">
  <a class="cta-primary" href="/de/kontakt/">Discovery-Call buchen</a>
</div>

- **[cozystack.io](https://cozystack.io)** — Installation, Dokumentation, Community
- **[Cozystack-Architektur-Artikel](/blog/2026/05/cozystack-introduction-architecture/)**
- **[Ænix Platform](/de/produkte/aenix-platform/)** — turnkey kommerzielle Cloud-in-a-Box auf Basis von Cozystack
  - [ISP Edition](/de/produkte/aenix-platform/isp-edition/) — für Hosting-Anbieter
  - [Enterprise Edition](/de/produkte/aenix-platform/enterprise-edition/) — für regulierte Unternehmen
  - [Public Cloud Edition](/de/produkte/aenix-platform/public-cloud-edition/) — für große Betreiber
  - [IDP Edition](/de/produkte/aenix-platform/idp-edition/) — für Produkt-Engineering-Teams
  - [AI/ML Edition](/de/produkte/aenix-platform/ai-ml-edition/) — für KI-lastige Organisationen
- **[Platform Readiness Assessment](/de/dienstleistungen/platform-readiness-assessment/)** — Engagement-Methodik

<!-- /BLOCK 8 -->

---

*Cozystack ist ein CNCF-Projekt (derzeit CNCF Sandbox; CNCF Incubating erwartet Spätsommer 2026), Apache 2.0. Aenix ist das Open-Core-Unternehmen, das es erstellt und pflegt, und der Hersteller von Ænix Platform — der turnkey kommerziellen Cloud-in-a-Box.*
