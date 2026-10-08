---
title: "Proxmox-zu-Cozystack-Migration — wenn SMB-Virtualisierung nicht mehr passt"
seo_title: "Proxmox-Migration zu Cozystack für Service-Provider"
description: "Proxmox VE ist im SMB-Umfeld hervorragend. Muss es viele Tenants mit Servicekatalog und Billing bedienen, migriert Ænix es durchgängig auf Cozystack."
primary_keyword: "Proxmox Migration"
secondary_keywords:
  - "Proxmox zu Cozystack Migration"
  - "Proxmox zu KubeVirt"
  - "von Proxmox migrieren"
related_pages: ["/de/alternativen/proxmox-alternative/", "/de/vergleichen/cozystack-vs-proxmox/", "/de/produkte/public-cloud-platform/", "/de/produkte/cozystack/", "/de/dienstleistungen/platform-readiness-assessment/"]
language: "de"
hreflang_en: /migration/proxmox/
quick_facts_style: "rows"
faq_style: "rows"
direct_answer: |
  **Eine Proxmox-zu-Cozystack-Migration verlagert Virtualisierungs-Workloads von Proxmox VE auf Cozystack, die Open-Source-Cloud-Plattform auf Kubernetes-Basis. Sie richtet sich an Hosting-Anbieter, ISPs und Service-Provider-Clouds, die dem Einzelorganisationsmodell von Proxmox entwachsen sind und ein Tenant-Modell, einen Servicekatalog über reine VMs hinaus (Managed Databases, S3, Kubernetes-Mandanten, GPU) sowie produktionsreife Multi-Cluster-Föderation brauchen. Ænix hat Cozystack initiiert, pflegt es mit und führt diese Migrationen durchgängig durch: VM-Images werden per CDI von qcow2 nach KubeVirt konvertiert, das Mandantenmodell wird während der Migration mit dem Tenant-CRD entworfen, Storage und Netzwerk werden auf LINSTOR/DRBD und Cilium neu aufgebaut. Cozystack steht unter Apache 2.0, ohne Gebühren pro CPU oder Core. Für Single-Tenant-Umgebungen unter 50 Hosts empfehlen wir, bei Proxmox zu bleiben.**

quick_facts:
  - label: "Was es ist"
    value: "Durchgängige Migration von Proxmox VE auf Cozystack für Multi-Tenant-Clouds und Service-Provider-Umgebungen"
  - label: "Lizenz"
    value: "Apache 2.0 (keine Lizenzkosten pro CPU oder Core)"
  - label: "Status"
    value: "Cozystack ist ein CNCF-Projekt (Sandbox seit 28.02.2025; der Antrag auf Incubation befindet sich in der Due-Diligence-Prüfung)"
  - label: "Für wen"
    value: "Hosting-Anbieter, ISPs und regionale Clouds, die an die Grenzen von Proxmox bei Mandantenfähigkeit und Servicekatalog stoßen"
  - label: "Zeitplan"
    value: "Platform Readiness Assessment (14 oder 28 Tage, Festpreis); die Plattform ist innerhalb weniger Wochen live, sobald die Hardware bereitsteht; der Umzug von Workloads und Kunden dauert typischerweise 3–9 Monate"
  - label: "Migrationspfad"
    value: "VM-Images werden per CDI von qcow2 nach KubeVirt konvertiert; die Mandantenfähigkeit wird während der Migration mit dem Tenant-CRD entworfen; Storage und Netzwerk werden auf LINSTOR/DRBD und Cilium neu aufgebaut"
  - label: "Wann bei Proxmox bleiben"
    value: "Single-Tenant-Umgebungen unter etwa 50 Hosts, bei denen sich der Migrationsaufwand nicht rechnet"

faq:
  - q: "Wann lohnt sich eine Migration von Proxmox zu Cozystack?"
    a: "Sie lohnt sich in der Größenordnung eines Service-Providers: wenn Sie Mandantenfähigkeit über die Pools und ACLs von Proxmox hinaus brauchen, einen Servicekatalog jenseits von VMs (Managed Databases, S3, Kubernetes-Mandanten, GPU), produktionsreife Multi-Cluster-Föderation oder eine regulierte Mandantentrennung. Single-Tenant-Umgebungen unter etwa 50 Hosts sollten bei Proxmox bleiben."
  - q: "Wie werden Proxmox-VMs nach Cozystack migriert?"
    a: "Die Migration der VM-Images ist unkompliziert: qcow2-Disks werden mit dem Containerized Data Importer (CDI) nach KubeVirt konvertiert. Das Tenant-Modell (Quotas, Netze und Dienste pro Mandant) wird während der Migration entworfen, weil sich Pools und ACLs von Proxmox nicht eins zu eins darauf abbilden lassen. Storage und Netzwerk werden auf den Cozystack-Grundlagen LINSTOR/DRBD und Cilium neu aufgebaut."
  - q: "Wie lange dauert eine Proxmox-zu-Cozystack-Migration?"
    a: "Ein typisches Projekt beginnt mit einem Platform Readiness Assessment zum Festpreis über 14 oder 28 Tage. Mit dem Installer der Ænix Public Cloud Platform ist die Plattform innerhalb weniger Wochen live, sobald die Hardware bereitsteht; der Umzug von Workloads und Kunden dauert typischerweise 3–9 Monate. Die genaue Dauer hängt von der Zahl der Workloads, den Anforderungen an die Mandantenfähigkeit und dem Umfang des Storage- und Netzwerk-Umbaus ab."
  - q: "Braucht Cozystack wie kommerzielle Hypervisoren eine Lizenz pro CPU oder Core?"
    a: "Nein. Cozystack ist Open Source unter Apache 2.0, ohne Lizenzkosten pro CPU oder Core. Ænix verkauft ein Abonnement (Support, kommerzielle Module wie Billing und WHMCS-Integration sowie Services), keine Lizenz. Die Support-Stufen für die Ænix Public Cloud Platform und selbst betriebenes Cozystack beginnen bei 1.250 USD pro 10 Nodes und Monat (Basic, jährliche Abrechnung)."
  - q: "Was bietet Cozystack, das Proxmox nicht bietet?"
    a: "Cozystack vereint VMs und Container über KubeVirt auf einer einzigen Kubernetes-API und ergänzt native Mandantenfähigkeit über das Tenant-CRD, eBPF-Networking mit Cilium und replizierten Storage mit LINSTOR/DRBD, dazu einen Servicekatalog mit Managed Databases, S3, Kubernetes-Mandanten und GPU-Unterstützung."
  - q: "Wer führt die Migration durch?"
    a: "Ænix, das Unternehmen, das Cozystack initiiert hat und gemeinsam mit anderen Maintainern pflegt, führt die Migration durchgängig durch, vom Assessment bis zur Umsetzung. Cozystack ist ein CNCF-Sandbox-Projekt (der Antrag auf Incubation befindet sich in der Due-Diligence-Prüfung); die zugrunde liegende Plattform ist also Open Source und nicht an einen einzelnen Anbieter gebunden."
---

**Proxmox VE ist im SMB-Umfeld hervorragend. Wachsen Umgebungen zu Multi-Tenant-Clouds oder Service-Provider-Modellen heran, kommt das Betriebsmodell an seine Grenzen. Ænix führt Proxmox-zu-Cozystack-Migrationen durchgängig durch.**

> **Passt zu:** **[Ænix Public Cloud Platform](/de/produkte/public-cloud-platform/)** — ein komplettes Public-Cloud-Produkt für Hosting-Anbieter und regionale Clouds, die Proxmox entwachsen: Hosting-Panel, Billing, Kundenportal und Zahlungen. Billing mit WHMCS-Integration, Mandantenfähigkeit über das Tenant-CRD, produktisierter Installer. Support-Stufen ab 1.250 USD pro 10 Nodes und Monat.

<div class="cta-row">
  <a class="cta-primary" href="/de/kontakt/">Gespräch vereinbaren</a>
  <a class="cta-secondary" href="/de/alternativen/proxmox-alternative/">Proxmox-Alternative →</a>
</div>

---

## Wann sich eine Migration lohnt

- Proxmox stößt in der Größenordnung eines Service-Providers (Cloud für viele Kunden) an Grenzen
- Mandantenfähigkeit über Pools und ACLs von Proxmox hinaus (Quotas, Netze und Self-Service pro Mandant)
- Servicekatalog jenseits von VMs (Managed Databases, S3, Kubernetes-Mandanten, GPU)
- Produktionsreife Multi-Cluster-Föderation
- Regulierte Anforderungen an die Mandantentrennung

Ist Ihre Umgebung Single-Tenant und kleiner als 50 Hosts, **bleiben Sie bei Proxmox**. Der Migrationsaufwand rechnet sich dann nicht.

---

## Vorgehen bei der Migration

Die Migration der VM-Images ist unkompliziert (qcow2 → KubeVirt-CDI). Das Tenant-Modell wird während der Migration entworfen, weil sich Pools und ACLs von Proxmox nicht eins zu eins auf Cozystack-Tenants abbilden lassen. Storage und Netzwerk werden neu aufgebaut.

<div class="arch-section__fig">
<div class="diagram">
<div class="diagram__node"><b>Proxmox VE</b><div class="diagram__chips"><span>qcow2-VM-Disks</span><span>Einzelorganisationsmodell</span></div></div>
<div class="diagram__conn">konvertiert über</div>
<div class="diagram__node"><b>Migrationspfad</b><div class="diagram__chips"><span>KubeVirt-CDI-Import</span><span>Mandantenentwurf mit Tenant-CRD</span></div></div>
<div class="diagram__conn">landet auf</div>
<div class="diagram__node diagram__node--brand"><b>Cozystack</b><div class="diagram__chips"><span>LINSTOR/DRBD-Storage</span><span>Cilium-Networking</span></div></div>
</div>
</div>

Typischer Ablauf: ein Assessment über 14 oder 28 Tage, die Plattform innerhalb weniger Wochen live, sobald die Hardware bereitsteht, danach 3–9 Monate für den Umzug von Workloads und Kunden.

Sie wählen noch das Ziel? Siehe **[Proxmox-Alternative](/de/alternativen/proxmox-alternative/)** und **[Cozystack vs. Proxmox](/de/vergleichen/cozystack-vs-proxmox/)** oder den ausführlichen Beitrag **[Proxmox vs. VMware vs. Cozystack](/de/blog/2026/05/proxmox-vs-vmware-vs-cozystack/)**.

<div class="cta-row">
  <a class="cta-primary" href="/de/kontakt/">Gespräch vereinbaren</a>
</div>

---

*Ænix hat Cozystack initiiert (ein CNCF-Sandbox-Projekt) und pflegt es gemeinsam mit Maintainern anderer Unternehmen.*
