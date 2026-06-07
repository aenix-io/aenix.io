---
title: "Private Cloud — Open Source, Kubernetes-nativ, mandantenfähig"
description: "Cozystack ist die Open-Source-Private-Cloud-Plattform für Service Provider, regulierte Unternehmen und souveräne Cloud-Builder. KubeVirt-basierte..."
related_pages: ["/de/alternativen/vmware-alternative", "/de/loesungen/data-sovereignty", "/de/loesungen/dora-compliance", "/products/cozystack"]
language: "de"
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
---

**Cozystack ist die Open-Source-Private-Cloud-Plattform für Service Provider, regulierte Unternehmen und souveräne Cloud-Builder. KubeVirt-basierte Virtualisierung, Cilium-Networking, LINSTOR-Storage, mandantenfähige Steuerungsebene, verwaltete Datenbanken, S3, GPU-as-a-Service — auf Ihrer eigenen Hardware. CNCF Project-Projekt, Apache-2.0-Lizenz, Kubernetes Certified Distribution.**

Die Cozystack-Plattform ersetzt den gesamten VMware-Cloud-Foundation-Stack durch ein Kubernetes-natives Äquivalent, das Sie unter Ihrer eigenen Governance betreiben.

> **Passt zu:** **[Ænix Platform Enterprise Edition](/de/produkte/aenix-platform/enterprise-edition/)** für regulierte Unternehmen, die private/hybride souveräne Cloud aufbauen; **[Public Cloud Edition](/de/produkte/aenix-platform/public-cloud-edition/)** für große Betreiber mit Public-Cloud-class-Plattform.

<div class="cta-row">
  <a class="cta-primary" href="/contact/?type=architecture-review">Architektur-Review buchen</a>
  <a class="cta-secondary" href="https://cozystack.io">cozystack.io →</a>
</div>

---

## Was die Plattform bietet

- **VMs und Container** auf einer Plattform (KubeVirt + Kubernetes)
- **Repliziertes Block- und Object-Storage** (LINSTOR + S3-kompatibel)
- **Cilium-Networking** (eBPF-nativ)
- **Mandantenfähige Steuerungsebene** (Tenant CRD)
- **Verwaltete Services** — PostgreSQL, MySQL, Redis, RabbitMQ, Kafka, ClickHouse
- **GPU as a Service** — NVIDIA vGPU + MIG, validiert auf A100/H100/H200/L40S/Blackwell
- **Observability** — VictoriaMetrics + VictoriaLogs
- **Backup und DR** — Velero + S3 + per-DB PITR
- **Self-Service-Portal** — cozyportal + WHMCS-Integration

---

## Wie sich Cozystack unterscheidet

| | VMware (VCF) | OpenStack | Cozystack |
|---|---|---|---|
| **Lizenz** | Subscription | Apache 2.0 | **Apache 2.0** |
| **Compute** | vSphere | Nova + KVM | **KubeVirt** |
| **Mandantenfähigkeit** | vCloud Director | Keystone | **Tenant CRD (Kubernetes-nativ)** |
| **Operativer Aufwand** | Hoch (VCF) | Hoch | **Niedrig** |
| **Vendor-Beziehung** | Closed source US-Anbieter | Foundation | **Open source, kein Vendor-Lock-in** |

---

## Wer betreibt Cozystack in der DACH-Region

{{< placeholder-logos >}}

Produktive Bereitstellungen in EU, DACH und Zentralasien. Kunden:
- Service Provider mit Multi-Tenant-Cloud-Produkten
- Banken und Versicherungen unter DORA/NIS2-Regulierung
- Telekommunikationsbetreiber
- KI/GPU-Betreiber
- Öffentlicher Sektor und quasi-öffentliche Organisationen

---

## Preisgestaltung

Die Cozystack-Plattform ist **Open Source unter Apache 2.0** und kostenlos einsetzbar.

Aenix bietet kommerzielle Support-Tiers:
- **Community** — kostenlos, GitHub Issues, Slack
- **Standard** — Geschäftszeiten-Support, Runbooks
- **Enterprise** — 24×7 SLA, dediziertes TAM

Professionelle Dienstleistungen: **[Platform Readiness Assessment](/services/platform-readiness-assessment/)**.

---

/contact/

- **[cozystack.io](https://cozystack.io)** — Installation und Dokumentation
- **[Private-Cloud-Anbieter-Vergleich](/de/blog/2026/05/private-cloud-anbieter-vergleich/)**

---

*Aenix ist das Team hinter Cozystack — CNCF Project-Projekt.*

<!-- SEO: title "Private Cloud — Open Source, Kubernetes-nativ | Aenix"
Keyword: private cloud DE 4200/KD 0 — biggest single DE opportunity.
Word count: ~600. -->
