---
title: "Private Cloud — Open Source, Kubernetes-nativ, mandantenfähig"
description: "Cozystack ist die Open-Source-Private-Cloud-Plattform für Service Provider, regulierte Unternehmen und souveräne Cloud-Builder. KubeVirt-basierte..."
related_pages: ["/de/alternativen/vmware-alternative", "/de/loesungen/data-sovereignty", "/de/loesungen/dora-compliance", "/products/cozystack"]
language: "de"
quick_facts_style: "rows"
faq_style: "rows"
hreflang_en: /solutions/private-cloud-platform/
direct_answer: |
  **Eine Private Cloud auf Basis von Cozystack ist eine Kubernetes-native Plattform, die VMs und Container über eine einzige API auf eigener Hardware betreibt — gedacht für Service Provider, regulierte Unternehmen und souveräne Cloud-Builder im DACH-Raum. Cozystack bündelt KubeVirt-Virtualisierung, Cilium-Networking (eBPF), LINSTOR/DRBD-Storage, eine mandantenfähige Steuerungsebene über das Tenant-CRD sowie verwaltete Datenbanken, S3 und GPU-as-a-Service. Es ist ein CNCF-Sandbox-Projekt unter Apache-2.0-Lizenz und ersetzt den VMware-Cloud-Foundation-Stack ohne CPU- oder Core-basierte Lizenzierung und ohne Vendor-Lock-in. Aenix, das Team hinter Cozystack, liefert die produktisierte Ænix Platform plus Support und professionelle Dienstleistungen.**
quick_facts:
  - label: "Was es ist"
    value: "Kubernetes-native Open-Source-Private-Cloud-Plattform für VMs und Container auf eigener Hardware"
  - label: "Lizenz"
    value: "Apache 2.0 (keine CPU-/Core-basierte Lizenzierung)"
  - label: "Status"
    value: "Cozystack ist ein CNCF-Projekt (Sandbox seit 28.02.2025; Incubating erwartet Spätsommer 2026)"
  - label: "Zielgruppe"
    value: "Service Provider, Banken/Versicherungen unter DORA/NIS2, Telekommunikationsbetreiber, KI/GPU-Betreiber, öffentlicher Sektor"
  - label: "Kernkomponenten"
    value: "KubeVirt (Compute), Cilium/eBPF (Networking), LINSTOR/DRBD (Storage), Tenant-CRD (Mandantenfähigkeit)"
  - label: "VMware-Ersatz"
    value: "Kubernetes-natives Äquivalent zum VMware-Cloud-Foundation-Stack unter eigener Governance"
  - label: "Kommerzielles Angebot"
    value: "Aenix liefert die produktisierte Ænix Platform plus Support-Tiers und professionelle Dienstleistungen"
faq:
  - q: "Was ist eine Private Cloud mit Cozystack?"
    a: "Eine Kubernetes-native Plattform, die VMs und Container über eine einzige API auf Ihrer eigenen Hardware betreibt. Sie bündelt KubeVirt-Virtualisierung, Cilium-Networking, LINSTOR-Storage und eine mandantenfähige Steuerungsebene und ersetzt damit den VMware-Cloud-Foundation-Stack unter Ihrer eigenen Governance."
  - q: "Ist Cozystack wirklich Open Source und kostenlos?"
    a: "Ja. Cozystack steht unter der Apache-2.0-Lizenz, ist frei einsetzbar und kennt keine CPU- oder Core-basierte Lizenzierung. Aenix bietet zusätzlich kommerzielle Support-Tiers (Community, Standard, Enterprise) und professionelle Dienstleistungen wie das Platform Readiness Assessment an."
  - q: "Wie unterscheidet sich Cozystack von VMware und OpenStack?"
    a: "Cozystack ist Apache-2.0-lizenziert, nutzt KubeVirt statt vSphere oder Nova/KVM und setzt auf Kubernetes-native Mandantenfähigkeit über das Tenant-CRD statt vCloud Director oder Keystone. Im Vergleich zu VMware (VCF) und OpenStack ist der operative Aufwand niedriger und es entsteht kein Vendor-Lock-in."
  - q: "Eignet sich die Plattform für DORA- und NIS2-regulierte Unternehmen?"
    a: "Ja. Banken, Versicherungen und der öffentliche Sektor betreiben Cozystack auf eigener Hardware unter eigener Governance, was Datensouveränität sowie DORA- und NIS2-Anforderungen unterstützt. Backup und DR erfolgen über Velero, S3 und per-DB PITR."
  - q: "Unterstützt Cozystack GPU-Workloads für KI?"
    a: "Ja. Cozystack bietet GPU as a Service mit NVIDIA vGPU und MIG, validiert auf A100, H100, H200, L40S und Blackwell. Damit lassen sich KI- und GPU-Workloads auf derselben mandantenfähigen Plattform wie VMs und Container betreiben."
  - q: "Was bietet Aenix kommerziell zusätzlich zu Cozystack?"
    a: "Aenix ist das Team hinter Cozystack und liefert die produktisierte Ænix Platform sowie Support-Tiers (Community kostenlos, Standard mit Geschäftszeiten-Support, Enterprise mit 24×7-SLA und dediziertem TAM) und professionelle Dienstleistungen für Architektur und Plattformeinführung."
aliases:
  - /de/produkte/private-cloud/
---

<!-- BLOCK 1: HERO -->

**Cozystack ist die Open-Source-Private-Cloud-Plattform für Service Provider, regulierte Unternehmen und souveräne Cloud-Builder. KubeVirt-basierte Virtualisierung, Cilium-Networking, LINSTOR-Storage, mandantenfähige Steuerungsebene, verwaltete Datenbanken, S3, GPU as a Service — auf Bare Metal, das Ihnen gehört. CNCF-Projekt, Apache-2.0-Lizenz, Kubernetes Certified Distribution.**

Die Cozystack-Plattform ersetzt den gesamten VMware-Cloud-Foundation-Stack durch ein Kubernetes-natives Äquivalent, das Sie unter Ihrer eigenen Governance betreiben. Ænix ist das Unternehmen hinter Cozystack — wir bauen es, liefern es produktiv bei Banken, Telekommunikationsbetreibern und KI-/GPU-Betreibern in der EU und Zentralasien aus und stützen es mit Engineering-Services.

<div class="cta-row">
  <a class="cta-primary" href="/de/kontakt/?type=architecture-review">30-minütigen Architektur-Review buchen</a>
  <a class="cta-secondary" href="https://cozystack.io">cozystack.io →</a>
</div>


<div class="trust-badges">
CNCF-Projekt · Kubernetes Certified Distribution · OpenSSF Best Practices · Apache 2.0
</div>

<!-- /BLOCK 1 -->

---

<!-- BLOCK 2: WHO -->

## Wer Cozystack als Private-Cloud-Plattform betreibt

- **Service Provider** — betreiben mandantenfähige Cloud-Produkte für Enterprise-Kunden
- **Banken und Versicherer** — regulierte Workloads unter DORA / sektoraler Compliance
- **Telekommunikationsbetreiber** — Souveräne-Cloud-Produktstarts
- **KI-/GPU-Betreiber** — GPU-Workloads mit nachhaltiger Auslastung, bei denen die Hyperscaler-Ökonomie nicht passt
- **Öffentlicher und quasi-öffentlicher Sektor** — souveränitäts-mandatierte Infrastruktur unter Beschaffungsregeln
- **Enterprise-Plattform-Teams** — interne Developer-Plattformen mit Multi-BU-Isolation

<!-- /BLOCK 2 -->

---

<!-- BLOCK 3: WHAT'S IN THE PLATFORM -->

<div class="band-fullbleed band-fullbleed--tint">
<div class="band-fullbleed__inner">

## Was Cozystack als Private-Cloud-Plattform bietet

<div class="grid-2x2">

**1. Compute — VMs und Container auf einer Plattform**
KubeVirt für VMs (KVM-basiert mit Live-Migration, Snapshots, Templates) plus Kubernetes-Container, Seite an Seite. Keine separate VM-Plattform; keine separate Container-Plattform.

**2. Storage — repliziertes Block- + S3-Object-Storage**
LINSTOR (DRBD) für repliziertes Block-Storage im Maßstab. SeaweedFS-Integration für Object/File. S3-kompatibel (SeaweedFS) für Anwendungs- + Backup-Storage.

**3. Networking — eBPF-nativ**
Cilium als CNI: L4/L7-Policies, Observability, MetalLB-Integration, BGP-Fabric-Support. NSX-äquivalente Funktionalität ohne NSX-Lizenzierung.

**4. Mandantenfähige Steuerungsebene**
Tenant-CRD-Modell mit verschachtelten Tenants, Per-Tenant-Quotas, RBAC, Audit. Geeignet für das Service-Provider-Modell (Multi-Customer) oder Enterprise-Multi-BU.

**5. Verwaltete Services**
PostgreSQL, MariaDB, Redis, RabbitMQ, Kafka, ClickHouse, OpenSearch, MongoDB — erstklassige Managed-Service-Angebote.

**6. GPU as a Service**
NVIDIA vGPU für VMs, MIG / Time-Slicing / Passthrough für Container. Validiert auf A100, H100, H200, L40S, Blackwell.

**7. Observability**
VictoriaMetrics + VictoriaLogs enthalten — geringer Overhead, souveränitätsfreundlich. Optional Grafana obenauf.

**8. Backup und DR**
Velero + S3 + Per-Database-PITR für verwaltete Services.

**9. Self-Service-Portal & WHMCS-Billing**
Cozystack Dashboard für Service-Provisioning. Produktionsreife WHMCS-Integration mit zwei Modi (native UI + Frontend Cozystack).

</div>

<div class="arch-section__fig">
<div class="diagram">
<div class="diagram__node diagram__node--brand"><b>Cozystack</b><div class="diagram__chips"><span>Tenant-CRD (Mandantenfähigkeit)</span><span>Cozystack Dashboard</span><span>WHMCS-Integration</span></div></div>
<div class="diagram__conn">betreibt</div>
<div class="diagram__node"><b>VMs und Container</b><div class="diagram__chips"><span>KubeVirt (Compute)</span><span>Verwaltete Services</span><span>S3</span><span>GPU as a Service</span></div></div>
<div class="diagram__conn">laufen auf</div>
<div class="diagram__node"><b>Kernkomponenten</b><div class="diagram__chips"><span>Cilium/eBPF (Networking)</span><span>LINSTOR/DRBD (Storage)</span></div></div>
<div class="diagram__conn">auf</div>
<div class="diagram__node"><b>Bare Metal, das Ihnen gehört</b><div class="diagram__chips"><span>eigene Hardware</span></div></div>
</div>
</div>

</div>
</div>

<!-- /BLOCK 3 -->

---

<!-- BLOCK 4: HOW IT'S DIFFERENT -->

## Wie sich Cozystack von anderen Private-Cloud-Plattformen unterscheidet

| | VMware (VCF) | OpenStack | OpenShift Virtualization | **Cozystack** |
|---|---|---|---|---|
| **Lizenz** | Nur Subscription | Apache 2.0 | Red Hat kommerziell | **Apache 2.0** |
| **Compute** | vSphere + ESXi | Nova + KVM | KubeVirt | **KubeVirt** |
| **Mandantenfähigkeit** | vCloud Director | Keystone-Projekte | Namespaces | **Tenant CRD (Kubernetes-nativ)** |
| **Verwaltete Datenbanken** | Begrenzt | DBaaS optional | Verfügbar | **Erstklassig** |
| **Self-Service-Portal** | vCD | Horizon | Console | **Cozystack Dashboard** |
| **Operativer Footprint** | Schwer (VCF) | Schwer (OpenStack) | Mittel (OpenShift) | **Leicht (Kubernetes-nativ, eine Plattform)** |
| **Vendor-Beziehung** | Closed-Source-US-Anbieter | Foundation, Vendor-Distros | Red Hat | **Open Source, kein Vendor-Lock-in** |
| **Am besten für** | Bestehendes VMware | Große Telco / OpenStack-versierte Teams | Bestehende Red-Hat-Kunden | **Service Provider, regulierte Mandantenfähigkeit, souveräne Cloud** |

<!-- /BLOCK 4 -->

---

<!-- BLOCK 5: HOW TO START -->

## Wie man mit Cozystack startet

Zwei Pfade:

- **Selbst deployen** — Cozystack ist Open Source. Architektur-, Installations- und Betriebsdokumentation: **[cozystack.io](https://cozystack.io)**. CNCF-Community-Slack und -Telegram für Support.
- **Ænix-unterstütztes Deployment** — Assessment + Phase-2-Implementierung durch Ænix-Engineers. Siehe **[Private Cloud Consulting](/de/dienstleistungen/private-cloud-consulting/)** für Engagement-Details.

Für Souveränitäts-/DORA-/Repatriierungs-/KI-spezifische Motivationen die relevanten Lösungsseiten:

- **[Data Sovereignty](/de/loesungen/data-sovereignty/)**
- **[DORA-Compliance](/de/loesungen/dora-compliance/)**
- **[Cloud Repatriation](/de/loesungen/cloud-repatriation/)**
- **[Sovereign AI](/de/loesungen/sovereign-ai/)**
- **[VMware Alternative](/de/alternativen/vmware-alternative/)**

<!-- /BLOCK 5 -->

---

<!-- BLOCK 6: PROOF -->

## Was auf Cozystack in der Produktion läuft

{{< clients >}}

Produktive Deployments in der EU, DACH und Zentralasien. Der Kundenstamm umfasst Service Provider, regulierte Unternehmen, Telcos und KI-/GPU-Betreiber.

{{< quote-carousel >}}

<!-- /BLOCK 6 -->

---

<!-- BLOCK 7: PRICING -->

## Preisgestaltung

Die Cozystack-Plattform ist **Open Source unter Apache 2.0** und kostenlos einsetzbar.

Ænix bietet kommerzielle Support- und Engagement-Tiers:

<div class="pricing-cards-3">

### Community
GitHub Issues, öffentlicher Slack, keine SLA.
**Kostenlos**

### Standard-Support
Reaktion zu Geschäftszeiten, Runbooks, Advisory.
**Auf Anfrage**

### Enterprise / 24×7
Produktions-SLA, dediziertes TAM, GitOps-PR-Review, Incident-Response.
**Auf Anfrage**

</div>

**Professionelle Dienstleistungen** (engagement-basiert): Platform Readiness Assessment, Build-Engagement, Managed-Engagement. Siehe **[platform-readiness-assessment](/de/dienstleistungen/platform-readiness-assessment/)**.

Kein Per-CPU-, Per-VM- oder Per-Core-Meter. Hardware + gewählter Ænix-Tier.

<!-- /BLOCK 7 -->

---

<!-- BLOCK 8: FAQ -->


**Weitere Fragen?** Siehe den **[Private-Cloud-Anbieter-Vergleich](/de/blog/2026/05/private-cloud-anbieter-vergleich/)** oder besuchen Sie **[cozystack.io](https://cozystack.io)**.

<!-- /BLOCK 8 -->

---

<!-- BLOCK 9: BOTTOM CTA -->

<a id="discovery"></a>
## Loslegen

<div class="cta-row">
  <a class="cta-primary" href="/de/kontakt/">Discovery-Call buchen</a>
</div>

Oder:
- **[cozystack.io](https://cozystack.io)** — Installation und Dokumentation
- **[Private Cloud Consulting](/de/dienstleistungen/private-cloud-consulting/)** — Engineering-Services
- **[Platform Readiness Assessment](/de/dienstleistungen/platform-readiness-assessment/)** — Assessment-Methodik
- **[Private-Cloud-Anbieter-Vergleich](/de/blog/2026/05/private-cloud-anbieter-vergleich/)** — vollständiger Leitfaden

<!-- /BLOCK 9 -->

---

*Ænix ist das Team hinter Cozystack (CNCF-Projekt), und wir bieten Ænix Platform an — unser kommerzielles produktisiertes Angebot auf Basis von Cozystack, Kubernetes Certified Distribution, OpenSSF Best Practices.*
