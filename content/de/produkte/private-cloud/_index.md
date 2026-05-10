---
title: "Private Cloud — Open Source, Kubernetes-nativ, mandantenfähig"
description: "Cozystack ist die Open-Source-Private-Cloud-Plattform für Service Provider, regulierte Unternehmen und souveräne Cloud-Builder. KubeVirt-basierte..."
related_pages: ["/de/alternativen/vmware-alternative", "/de/loesungen/data-sovereignty", "/de/loesungen/dora-compliance", "/products/cozystack"]
language: "de"
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
