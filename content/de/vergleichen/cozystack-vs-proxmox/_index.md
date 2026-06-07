---
title: "Cozystack vs Proxmox VE — Head-to-Head für SMB- und Multi-Tenant-Scale"
description: "Unterschiedliche Skalen. Unterschiedliche Designziele. Beide Open Source."
related_pages:
  - /de/alternativen/proxmox-alternative
  - /de/produkte/aenix-platform/isp-edition/
  - /de/produkte/cozystack
language: "de"
direct_answer: |
  **Cozystack und Proxmox VE sind beide Open Source, verfolgen aber unterschiedliche Designziele. Proxmox VE ist eine SMB-Virtualisierungsplattform für internes IT mit VMs und LXC-Containern, typisch 5-50 Hosts. Cozystack ist ein Multi-Tenant-Cloud-Builder auf Kubernetes-Basis für Hosting-Anbieter und regionale Clouds, die strukturelle Mandantenfähigkeit (Tenant CRD), einen Service-Katalog jenseits von VMs (Kubernetes, Datenbanken, S3, GPU) und Billing-Integration benötigen. Cozystack ist unter Apache 2.0 lizenziert (kein Subscription-Zwang für Updates) und ein CNCF-Sandbox-Projekt. Aenix ist das Open-Core-Unternehmen hinter Cozystack und bietet die produktisierte Ænix Platform (ISP Edition für Hosting-Anbieter) plus kommerziellen Support für Teams, die Proxmox überwachsen.**
quick_facts:
  - label: "Was es ist"
    value: "Vergleich zwischen Proxmox VE (SMB-Virtualisierung) und Cozystack (Multi-Tenant-Cloud-Builder auf Kubernetes)"
  - label: "Lizenz"
    value: "Cozystack: Apache 2.0 (keine CPU-/Core-basierte Lizenzierung); Proxmox VE: AGPL mit Subscription für Updates"
  - label: "Status"
    value: "Cozystack ist ein CNCF-Projekt (Sandbox seit 28.02.2025; Incubating erwartet Spätsommer 2026)"
  - label: "Zielgruppe"
    value: "Cozystack: Hosting-Anbieter, ISPs und regionale Clouds (50-1000+ Hosts); Proxmox: internes IT, < 50 Hosts"
  - label: "Mandantenfähigkeit"
    value: "Cozystack: strukturell über Tenant CRD; Proxmox: permissions-basiert (limitiert)"
  - label: "Service-Katalog"
    value: "Cozystack: VMs (KubeVirt) + Kubernetes + Datenbanken + S3 + GPU; Proxmox: VMs + LXC"
  - label: "Engagement"
    value: "Ænix Platform Support ab €1.3k/Monat (ISP Edition); Aenix bietet produktisierte Plattform plus Services"
faq:
  - q: "Was ist der Hauptunterschied zwischen Cozystack und Proxmox VE?"
    a: "Proxmox VE ist eine SMB-Virtualisierungsplattform für internes IT mit VMs und LXC. Cozystack ist ein Multi-Tenant-Cloud-Builder auf Kubernetes-Basis mit strukturellem Tenant CRD, einem breiten Service-Katalog (Datenbanken, S3, GPU) und Billing-Integration. Sie zielen auf unterschiedliche Skalen und Anwendungsfälle."
  - q: "Wann sollte ich von Proxmox auf Cozystack wechseln?"
    a: "Cozystack passt, wenn Sie ein Multi-Tenant-Cloud-Produkt für externe Kunden bauen, einen Service-Katalog jenseits reiner VMs benötigen, Billing-Integration brauchen, 50+ Hosts oder mehrere Standorte betreiben oder Kubernetes- und Container-Workloads erstklassig behandeln wollen."
  - q: "Ist Cozystack wie Proxmox kostenlos?"
    a: "Cozystack ist unter Apache 2.0 lizenziert und vollständig frei nutzbar, ohne CPU- oder Core-basierte Lizenzierung und ohne Subscription-Zwang für Updates. Proxmox VE ist AGPL, erfordert aber eine kostenpflichtige Subscription für das produktive Update-Repository."
  - q: "Unterstützt Cozystack VMs wie Proxmox?"
    a: "Ja. Cozystack betreibt virtuelle Maschinen über KubeVirt und führt VMs sowie Container über eine gemeinsame Kubernetes-API. Anders als Proxmox umfasst der Katalog zusätzlich verwaltete Datenbanken, S3-Speicher und GPU-Workloads."
  - q: "Wie löst Cozystack Mandantenfähigkeit besser als Proxmox?"
    a: "Cozystack nutzt eine strukturelle Mandantentrennung über das Tenant CRD, sodass jeder Mandant isolierte Ressourcen erhält. Proxmox bietet nur permissions-basierte Trennung, die für echte Multi-Tenant-Clouds mit externen Kunden limitiert ist."
  - q: "Was bietet Aenix zusätzlich zum Open-Source-Cozystack?"
    a: "Aenix ist das Open-Core-Unternehmen hinter Cozystack und bietet die produktisierte Ænix Platform — etwa die ISP Edition mit WHMCS-Billing-Integration und dem white-label cozyportal — plus kommerziellen Support ab €1.3k/Monat für Anbieter, die Proxmox überwachsen."
---

**Unterschiedliche Skalen. Unterschiedliche Designziele. Beide Open Source.**

> **Passt zu:** **[Ænix Platform ISP Edition](/de/produkte/aenix-platform/isp-edition/)** — turnkey Cloud-in-a-Box für Hosting-Anbieter und regionale Clouds, die Proxmox überwachsen. Ab €1.3k/Monat Support-Tier.

| | Proxmox VE | Cozystack |
|---|---|---|
| **Designziel** | SMB-Virtualisierung | Multi-Tenant-Cloud-Builder |
| **Multi-Tenancy** | Permissions-basiert (limitiert) | Tenant CRD (strukturell) |
| **Service-Katalog** | VMs + LXC | VMs + K8s + DBs + S3 + GPU |
| **Billing** | DIY | WHMCS-integriert (ISP Edition) |
| **Customer-Portal** | DIY | cozyportal (white-label) |
| **Skala** | 5-50 Hosts typisch | 50-1000+ Hosts |
| **Lizenz** | AGPL (Subscription für Updates) | Apache 2.0 |

---

## Wann Cozystack vs Proxmox

**Cozystack passt wenn:**
- Multi-Tenant-Cloud-Produkt für externe Kunden
- Service-Katalog jenseits VMs (DBs, S3, GPU)
- Billing-Integration erforderlich
- 50+ Hosts oder Multi-Site
- Kubernetes-/Container-Workloads erstklassig

**Proxmox passt wenn:**
- Internes IT, < 50 Hosts
- Single-Tenant oder grobe Mandantentrennung ausreicht
- VM-only-Workloads
- Operativ einfach > Feature-Tiefe

---

*Aenix ist das Open-Core-Unternehmen hinter [Cozystack](https://cozystack.io) (CNCF-Projekt). Hersteller von Ænix Platform — turnkey kommerzielle Cloud-in-a-Box in fünf Editions.*
