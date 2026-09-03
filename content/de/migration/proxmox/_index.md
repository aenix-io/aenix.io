---
title: "Proxmox zu Cozystack Migration — wenn SMB-Virtualisierung nicht mehr passt"
description: "Proxmox VE ist exzellent at SMB-Skala. Wenn Deployments zu Multi-Tenant-Cloud-Buildern oder Service-Provider-Modellen wachsen, strapaziert das operative..."
related_pages:
  - /de/alternativen/proxmox-alternative
  - /de/produkte/public-cloud-platform/
  - /de/produkte/cozystack
  - /de/dienstleistungen/platform-readiness-assessment
language: "de"
quick_facts_style: "rows"
faq_style: "rows"
direct_answer: |
  **Eine Proxmox-zu-Cozystack-Migration verlagert Workloads von Proxmox VE auf Cozystack, eine offene Cloud-Plattform auf Kubernetes-Basis. Sie richtet sich an Hosting-Anbieter, Service-Provider und regionale Clouds, die das operative Modell von Proxmox bei 50+ Hosts, Multi-Tenancy für externe Kunden oder einem Service-Katalog jenseits reiner VMs überwachsen haben. VM-Images werden von KVM auf KubeVirt übertragen, Storage von ZFS oder Ceph auf LINSTOR, und Proxmox-Berechtigungen auf das Tenant-CRD-Modell. Aenix, das Open-Core-Unternehmen hinter Cozystack, führt diese Migrationen end-to-end durch: produktisierter Installer für die Public Cloud Platform in Wochen, Workload-Migration in Kohorten über 3 bis 6 Monate.**

quick_facts:
  - label: "Was es ist"
    value: "End-to-end-Migration von Proxmox VE auf Cozystack — KVM zu KubeVirt, ZFS/Ceph zu LINSTOR, Proxmox-Permissions zu Tenant CRD"
  - label: "Lizenz"
    value: "Apache 2.0 (keine CPU-/Core-basierte Lizenzierung)"
  - label: "Status"
    value: "Cozystack ist ein CNCF-Projekt (Sandbox seit 28.02.2025; Incubating erwartet Spätsommer 2026)"
  - label: "Zielgruppe"
    value: "Hosting-Anbieter, Service-Provider und regionale Clouds, die Proxmox bei 50+ Hosts oder Multi-Tenant-Anforderungen überwachsen"
  - label: "Technologie-Stack"
    value: "KubeVirt für VMs und Container auf einer Kubernetes-API, Cilium (eBPF) Networking, LINSTOR/DRBD Storage, Tenant-CRD-Mandantenfähigkeit"
  - label: "Migrations-Zeitrahmen"
    value: "Public Cloud Platform über produktisierten Installer in Wochen live; Workload-Migration in Kohorten über 3 bis 6 Monate für mittelgroße Estates"
  - label: "Engagement"
    value: "Ænix Public Cloud Platform ab 1.250 USD/Monat Support-Tier, mit WHMCS-integriertem Billing und White-Label-Customer-Portal"

faq:
  - q: "Wann lohnt sich eine Migration von Proxmox zu Cozystack?"
    a: "Wenn das Proxmox-Deployment auf 50+ Hosts wächst und Skalierungs-Schmerz entsteht, Multi-Tenancy für externe Kunden gefordert ist, der Service-Katalog über VMs hinausgeht (DBs, S3, GPU), Billing-Integration nötig wird, ein White-Label-Customer-Portal gebraucht wird oder der Anteil an Kubernetes-Workloads steigt."
  - q: "Wie werden bestehende Proxmox-VMs nach Cozystack migriert?"
    a: "VM-Images werden von KVM unter Proxmox auf KubeVirt unter Cozystack übertragen. Storage wandert von ZFS oder Ceph auf LINSTOR/DRBD. Das Berechtigungsmodell von Proxmox wird auf das Tenant-CRD-Modell von Cozystack abgebildet. VMs und Container laufen anschließend auf einer gemeinsamen Kubernetes-API."
  - q: "Wie lange dauert eine Proxmox-zu-Cozystack-Migration?"
    a: "Der produktisierte Installer bringt die Public Cloud Platform innerhalb von Wochen live. Die eigentliche Workload-Migration erfolgt in Kohorten über 3 bis 6 Monate für mittelgroße Estates, um Risiko und Ausfallzeiten zu begrenzen."
  - q: "Welche Cozystack-Edition passt für Hosting-Anbieter, die Proxmox ablösen?"
    a: "Die Ænix Public Cloud Platform — eine turnkey Cloud-in-a-Box für Hosting-Anbieter und regionale Clouds. Sie bietet WHMCS-integriertes Billing, ist Multi-Tenant by design und kommt mit produktisiertem Installer. Support ab 1.250 USD/Monat."
  - q: "Wie wird Cozystack lizenziert und welche Folgekosten gibt es?"
    a: "Cozystack steht unter Apache 2.0 ohne CPU- oder Core-basierte Lizenzierung. Es gibt keine pro-Socket- oder pro-Core-Gebühren wie bei proprietären Virtualisierungs-Stacks. Aenix verkauft die produktisierte Ænix Platform plus Services in vier Tiers: Basic 1.250 $/Mon. (10 Nodes), Standard 3.000 $, Plus 5.500 $ und Enterprise Custom."
  - q: "Bringt Cozystack neben VMs auch weitere Cloud-Dienste mit?"
    a: "Ja. Über reine Virtualisierung hinaus bietet Cozystack Managed Databases, S3-kompatiblen Object Storage und GPU-Workloads auf derselben Kubernetes-API. Genau dieser Service-Katalog jenseits von VMs ist häufig der Auslöser für einen Wechsel von Proxmox."
---

**Proxmox VE ist exzellent at SMB-Skala. Wenn Deployments zu Multi-Tenant-Cloud-Buildern oder Service-Provider-Modellen wachsen, strapaziert das operative Modell. Aenix führt Proxmox-zu-Cozystack-Migrationen end-to-end durch.**

> **Passt zu:** **[Ænix Public Cloud Platform](/de/produkte/public-cloud-platform/)** — turnkey Cloud-in-a-Box für Hosting-Anbieter und regionale Clouds, die Proxmox überwachsen. WHMCS-integriertes Billing, Multi-Tenant by design, produktisierter Installer. Ab 1.250 USD/Monat Support-Tier.

<div class="cta-row">
  <a class="cta-primary" href="/de/kontakt/">Discovery-Call buchen</a>
  <a class="cta-secondary" href="/de/alternativen/proxmox-alternative">Proxmox-Alternative →</a>
</div>

---

## Wann Migration Sinn macht

- 50+ Hosts, Skalierungs-Schmerz
- Multi-Tenant-Anforderungen für externe Kunden
- Service-Katalog jenseits VMs (DBs, S3, GPU)
- Billing-Integration erforderlich
- White-Label-Customer-Portal-Bedarf
- Kubernetes-Workload-Mix wachsend

---

## Migrations-Pattern

VM-Image-Migration: KVM (Proxmox) → KubeVirt (Cozystack). Storage: ZFS / Ceph → LINSTOR. Tenant-Modell: Proxmox-Permissions → Tenant CRD. Produktisierter Installer bringt Public Cloud Platform in Wochen live; Workload-Migration in Kohorten über 3-6 Monate für mittelgroße Estates.

<div class="arch-section__fig">
<div class="diagram">
<div class="diagram__node"><b>Proxmox VE</b><div class="diagram__chips"><span>KVM</span><span>ZFS / Ceph</span></div></div>
<div class="diagram__conn">verlagert via</div>
<div class="diagram__node"><b>VM-Image-Migration</b><div class="diagram__chips"><span>KVM zu KubeVirt</span><span>Permissions zu Tenant CRD</span></div></div>
<div class="diagram__conn">läuft auf</div>
<div class="diagram__node diagram__node--brand"><b>Cozystack</b><div class="diagram__chips"><span>KubeVirt</span><span>Cilium</span><span>LINSTOR/DRBD</span></div></div>
</div>
</div>

---

*Aenix ist das Open-Core-Unternehmen hinter [Cozystack](https://cozystack.io) (CNCF-Projekt). Hersteller von Ænix Platform — turnkey kommerzielle Cloud-in-a-Box in zwei Editions.*
