---
title: "Cozystack vs Proxmox VE — Head-to-Head für SMB- und Multi-Tenant-Scale"
description: "Unterschiedliche Skalen. Unterschiedliche Designziele. Beide Open Source."
related_pages:
  - /de/alternativen/proxmox-alternative
  - /de/produkte/aenix-platform/isp-edition/
  - /de/produkte/cozystack
language: "de"
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
