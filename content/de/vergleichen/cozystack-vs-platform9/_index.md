---
title: "Cozystack vs Platform9 Private Cloud Director — zwei Wege aus VMware"
seo_title: "Cozystack vs Platform9: zwei Wege aus VMware"
primary_keyword: "cozystack vs platform9"
secondary_keywords:
  - "platform9 alternative"
  - "platform9 private cloud director alternative"
  - "platform9 vs kubevirt"
description: "Cozystack vs Platform9 Private Cloud Director: Management Plane, Mandanten, Managed Services, GPU, VMware-Migration, Preise und wo Platform9 stärker ist."
related_pages:
  - /de/alternativen/vmware-alternative/
  - /de/alternativen/vmware-cloud-director-alternative/
  - /de/migration/vmware/
  - /de/produkte/public-cloud-platform/
  - /de/produkte/private-cloud-platform/
  - /de/produkte/cozystack/
  - /de/preise/
language: "de"
hreflang_en: /compare/cozystack-vs-platform9/
quick_facts_style: "rows"
faq_style: "rows"
direct_answer: |
  **Platform9 Private Cloud Director und Cozystack betreiben beide virtuelle Maschinen mit KVM auf Hardware, die Sie bereits besitzen, und beide treten als VMware-Ersatz an — gebaut sind sie aber unterschiedlich. Private Cloud Director ist eine kommerzielle, virtualisierungszentrierte Plattform, deren Compute-, Block-Storage-, Netzwerk- und Identity-Services OpenStack-APIs bereitstellen; die Management Plane betreibt Platform9 entweder als SaaS, oder Sie betreiben sie selbst. Mitgeliefert werden VM-HA, Dynamic Resource Rebalancing und das Migrationswerkzeug vJailbreak. Cozystack ist ein Open-Source-Projekt der CNCF unter Apache 2.0, das VMs über KubeVirt auf Kubernetes betreibt und einen Katalog von Managed Services — Datenbanken, S3, Kubernetes, GPU — hinter verschachtelten Tenants bereitstellt. Platform9 passt zu Teams, die schnell eine vSphere-ähnliche Administration wollen; Cozystack zu Anbietern, die mehr als VMs verkaufen. Ænix hat Cozystack entwickelt, pflegt es mit und bietet darauf Support und die Ænix Public Cloud Platform an.**
quick_facts:
  - label: "Was es ist"
    value: "Ein direkter Vergleich von Platform9 Private Cloud Director und Cozystack für Unternehmen und Service-Provider, die VMware verlassen."
  - label: "Hypervisor"
    value: "Beide nutzen KVM. Private Cloud Director verwaltet KVM-Hosts über einen Host-Agenten; Cozystack betreibt VMs über KubeVirt als Kubernetes-Workloads."
  - label: "Management Plane"
    value: "Platform9: als SaaS von Platform9 betrieben oder selbst gehostet (Air-Gap-Installation dokumentiert). Cozystack: immer auf Ihrer eigenen Hardware; eine vom Hersteller gehostete Variante gibt es nicht."
  - label: "Lizenz"
    value: "Cozystack: Apache 2.0, CNCF-Projekt (Sandbox seit 28.02.2025; Antrag auf Incubation in der Due-Diligence-Prüfung). Private Cloud Director: kommerziell, mit kostenloser Community Edition für Labor und Evaluierung."
  - label: "Preisbasis"
    value: "Service-Provider-Programm von Platform9: 10,40 USD pro Core und Monat nach einer 90-tägigen Aktion zu 1.000 USD pro Monat. Subscription der Ænix Public Cloud Platform: ab 1.250 USD pro 10 Nodes und Monat bei jährlicher Abrechnung."
  - label: "Für wen"
    value: "Hosting-Anbieter, ehemalige Partner des VMware Cloud Service Provider Program und Unternehmen, die eine Plattform nach VMware auswählen."
quick_facts_source: "[Platform9 Private Cloud Director Docs](https://docs.platform9.com/private-cloud-director/introduction/architecture-overview), [Platform9 für Service-Provider](https://platform9.com/service-providers/), [Ænix Preise](/de/preise/)"
faq:
  - q: "Basiert Platform9 Private Cloud Director auf OpenStack?"
    a: "Platform9 dokumentiert, dass die Compute-, Block-Storage-, Netzwerk- und Identity-Services von Private Cloud Director OpenStack-APIs bereitstellen, dass sich diese mit der OpenStack CLI verwalten lassen und dass der Identity Service das Open-Source-Projekt Keystone erweitert. Die tägliche Administration läuft über die eigene Oberfläche von Platform9, die sich an den Abläufen von Virtualisierungsadministratoren orientiert. Cozystack verwendet keine OpenStack-Komponenten: VMs, Tenants und Services sind Kubernetes-Ressourcen."
  - q: "Lässt sich Platform9 ohne vom Hersteller gehostete Control Plane betreiben?"
    a: "Ja. Neben dem SaaS-Modell bietet Platform9 eine selbst gehostete Management Plane, die mit dem Werkzeug airctl installiert und aktualisiert wird, einschließlich einer Air-Gap-Installation, sowie eine kostenlose Community Edition, die laut Platform9 nicht für den Produktivbetrieb gedacht ist. Die Seite zum Service-Provider-Programm beschreibt allerdings die von Platform9 betriebene Control Plane. Cozystack kennt nur ein Modell: Die gesamte Plattform läuft auf Ihrer Hardware."
  - q: "Welche Plattform bietet die bessere VM-Hochverfügbarkeit?"
    a: "Heute Platform9. Private Cloud Director liefert VM-HA, das VMs nach einem Host-Ausfall auf gesunden Hosts neu startet, Dynamic Resource Rebalancing, das VMs zur Lastverteilung live migriert, und Stretched Cluster über zwei Standorte. Cozystack bietet Live-Migration und replizierten Storage, doch nach einem ungeplanten Node-Ausfall starten VMs nicht von selbst neu: Cozystack liefert kein Fencing mit, also markiert zuerst ein Operator den ausgefallenen Node als außer Betrieb (oder ein externer Fencing-Mechanismus übernimmt das), und erst dann startet KubeVirt die VMs auf gesunden Nodes neu."
  - q: "Was kann ein Anbieter auf der jeweiligen Plattform außer VMs verkaufen?"
    a: "Platform9 dokumentiert Kubernetes-Cluster, Load Balancer as a Service und DNS as a Service sowie Integrationen mit vorhandenen Firewall- und VPN-Komponenten. Der Katalog von Cozystack ergänzt Managed PostgreSQL, MariaDB, Valkey, ClickHouse, Kafka, RabbitMQ, NATS und weitere Services, S3-kompatiblen Object Storage und GPU-Workloads, jeweils pro Tenant bereitgestellt. Die Ænix Public Cloud Platform bringt Billing und WHMCS-Integration dazu."
  - q: "Wie unterscheiden sich die GPU-Funktionen?"
    a: "Für VMs liegen beide nah beieinander: Platform9 dokumentiert GPU-Passthrough und NVIDIA vGPU mit herstellerdefinierten Profilen, Cozystack bietet Passthrough oder NVIDIA vGPU mit Ihrer NVIDIA-vGPU-Lizenz. In Tenant-Kubernetes-Clustern stellt Cozystack zusätzlich MIG-Partitionen auf MIG-fähigen Karten über den NVIDIA GPU Operator und Time-Slicing über HAMi bereit. Platform9 weist darauf hin, dass VM-HA für GPU-Cluster nicht unterstützt wird."
  - q: "Wie läuft die VMware-Migration jeweils ab?"
    a: "Platform9 bietet vJailbreak, ein kostenloses Werkzeug, das sich mit vCenter verbindet und VMs in jede OpenStack-kompatible Cloud überführt, einschließlich einer rollierenden In-place-Umwandlung von vSphere-Clustern. Migrationen nach Cozystack laufen mit Forklift nach KubeVirt, mit Runbooks und Umsetzung durch Ænix; Dauer und Vorgehen beschreibt der VMware-Migrations-Hub."
---

**Beide betreiben KVM auf den Servern, die Sie schon besitzen. Die eine gibt einem Virtualisierungsteam schnell eine vertraute Konsole, die andere gibt einem Anbieter einen Katalog von Services zum Verkaufen.**

> **Passt zu:** **[Ænix Public Cloud Platform](/de/produkte/public-cloud-platform/)** für Hosting-Anbieter und ehemalige Partner des VMware Cloud Service Provider Program — Kundenportal, Billing, WHMCS-Integration und ein Servicekatalog über VMs hinaus — sowie **[Ænix Private Cloud Platform](/de/produkte/private-cloud-platform/)** für Unternehmen, die vSphere intern ablösen.

## Was Platform9 Private Cloud Director ist

Private Cloud Director ist die Enterprise-Private-Cloud-Plattform von Platform9 für virtualisierte und Kubernetes-Infrastruktur auf vorhandener Server- und Storage-Hardware. Sie basiert auf dem Open-Source-Hypervisor KVM; ihre Compute-, Block-Storage-, Netzwerk- und Identity-Services stellen OpenStack-APIs bereit, sodass die OpenStack CLI neben Platform9s eigenem `pcdctl` und der Oberfläche funktioniert. <!-- source: https://docs.platform9.com/private-cloud-director/introduction/readme ; https://docs.platform9.com/private-cloud-director/automation-and-cli/openstack-cli -->

Die Architektur trennt eine **Management Plane** (APIs, Datenbanken, Scheduling, Oberfläche) von einer **Data Plane** aus physischen Hosts, die Sie bereitstellen; verbunden sind beide über einen Platform9-Host-Agenten auf jedem Host. Die Workloads laufen immer in Ihrem Rechenzentrum. Die Management Plane gibt es in zwei kommerziellen Modellen — **SaaS**, betrieben und gepatcht von Platform9, oder **selbst gehostet**, von Ihnen mit dem Werkzeug `airctl` installiert und aktualisiert, einschließlich einer dokumentierten Air-Gap-Installation — sowie als kostenlose **Community Edition** mit einer Management Plane auf einem einzelnen Host, die laut Platform9 für Labor und Evaluierung gedacht ist, nicht für den Produktivbetrieb. <!-- source: https://docs.platform9.com/private-cloud-director/introduction/architecture-overview ; https://docs.platform9.com/private-cloud-director/getting-started/self-hosted/self-hosted-airgap-install ; https://docs.platform9.com/private-cloud-director/getting-started/getting-started-with-community-edition -->

Platform9 richtet das Produkt klar auf den Ausstieg aus VMware aus, für Unternehmen wie für Service-Provider. Das im Juni 2026 angekündigte Cloud Solution Provider Program zielt auf Partner des VMware Cloud Service Provider Program vor dessen Ende. <!-- source: https://platform9.com/press/platform9-launches-cloud-solution-provider-program-to-give-abandoned-vmware-partners-a-stable-landing/ ; https://platform9.com/service-providers-guide-to-exiting-vmware/ -->

## Was Cozystack ist

Cozystack ist eine Open-Source-Plattform zum Aufbau von Clouds, ein CNCF-Sandbox-Projekt unter Apache 2.0, dessen Antrag auf Incubation sich in der Due-Diligence-Prüfung befindet. Es betreibt virtuelle Maschinen über KubeVirt und Container über dieselbe Kubernetes-API, vernetzt sie mit Cilium, speichert sie auf LINSTOR/DRBD und trennt Kunden über eine Tenant-Ressource, die sich verschachteln lässt. Darauf stellt es Managed-Datenbanken, Message Broker, S3-kompatiblen Object Storage, Tenant-Kubernetes-Cluster und GPU-Workloads aus einem Katalog bereit. Die Nodes laufen mit Talos Linux, einem unveränderlichen Betriebssystem ohne SSH. Die gesamte Plattform einschließlich Management läuft auf Ihrer Hardware.

Ænix hat Cozystack entwickelt und pflegt es gemeinsam mit Maintainern anderer Unternehmen. Ænix bietet Support und Services sowie die Ænix Public Cloud Platform mit proprietären Modulen für Billing und WHMCS.

## Der direkte Vergleich

<div class="compare-elevated compare-elevated--col3">

| | Platform9 Private Cloud Director | Cozystack |
|---|---|---|
| **Lizenz** | Kommerziell; kostenlose Community Edition (nicht für Produktion) | Apache 2.0, CNCF-Projekt |
| **Hypervisor** | KVM über Host-Agent | KVM über KubeVirt auf Kubernetes |
| **APIs** | OpenStack-kompatible APIs, `pcdctl`, Terraform-Provider | Kubernetes-API und CRDs |
| **Management Plane** | SaaS (von Platform9 betrieben) oder selbst gehostet, Air-Gap dokumentiert | Nur selbst gehostet |
| **Mandantenfähigkeit** | Domains, Regionen, Tenants, Benutzer und Gruppen; Quotas; Identity auf Keystone-Basis | Verschachtelte Tenant-Ressourcen mit Quotas, RBAC, Netzwerkisolation |
| **VM-Verfügbarkeit** | VM-HA, Dynamic Resource Rebalancing, Stretched Cluster über zwei Standorte | Live-Migration, replizierter Storage; VMs starten nach einem Node-Ausfall erst nach dem Fencing des Nodes neu |
| **Kubernetes** | Cluster mit Control Planes in der Management Plane | Tenant-Kubernetes-Cluster mit verwalteter Control Plane pro Tenant |
| **Managed Services** | LBaaS, DNSaaS; Firewall und VPN über vorhandene Komponenten | PostgreSQL, MariaDB, Valkey, ClickHouse, Kafka, RabbitMQ, NATS und weitere; S3 |
| **GPU** | Passthrough und NVIDIA vGPU für VMs | Passthrough oder NVIDIA vGPU für VMs; MIG-Partitionen und HAMi-Sharing in Tenant-Kubernetes-Clustern |
| **VMware-Migration** | vJailbreak (kostenlos), rollierende In-place-Umwandlung | Forklift nach KubeVirt, Ænix-Runbooks |
| **Billing für Anbieter** | Im Produkt nicht dokumentiert | Ænix Billing und WHMCS-Integration (proprietäre Ænix-Module) |

</div>

<!-- sources for the Platform9 column: https://docs.platform9.com/private-cloud-director/introduction/architecture-overview ; https://docs.platform9.com/private-cloud-director/identity-and-multi-tenancy/identity-and-multi-tenancy-overview ; https://docs.platform9.com/private-cloud-director/virtualized-clusters/stretched-clusters ; https://docs.platform9.com/private-cloud-director/gpu/gpu-support-pcd/gpu-faqs ; https://docs.platform9.com/private-cloud-director/automation-and-cli/terraform-provider ; https://github.com/platform9/vjailbreak -->

## Die Management Plane: wer sie betreibt und wo

Für souveränitätsbewusste und regulierte Käufer ist das die entscheidende Linie, deshalb hier genau.

Im SaaS-Modell von Platform9 bleiben Ihre Workloads in Ihrem Rechenzentrum, die Management Plane — Identity, Scheduling, die Kubernetes-Control-Planes Ihrer Cluster — läuft jedoch in der Cloud von Platform9 und erreicht Ihre Hosts über das Management-Netz. Platform9 patcht und aktualisiert sie für Sie, und das ist eine echte Entlastung im Betrieb. Die Seite zum Service-Provider-Programm beschreibt genau dieses Modell: „Platform9 runs the control plane in our cloud.“ <!-- source: https://platform9.com/service-providers/ --> Für Organisationen, bei denen Compliance-, Souveränitäts- oder Air-Gap-Anforderungen das ausschließen, dokumentiert Platform9 eine selbst gehostete Management Plane, die Sie dann selbst aktualisieren und sichern. <!-- source: https://docs.platform9.com/private-cloud-director/introduction/architecture-overview -->

Cozystack kennt überhaupt keine gehostete Variante. Management und Data Plane laufen vom ersten Tag an auf Ihrer Hardware, unter Apache-2.0-Lizenz. Die Upgrades — per GitOps verwaltete Plattform-Releases — führen Sie selbst durch oder beziehen sie als Support von Ænix. Es gibt kein Herstellerkonto im Pfad, nach dem eine Aufsicht fragen könnte.

## Mandantenfähigkeit für Anbieter

Platform9 baut Mandantenfähigkeit auf Domains, Regionen, Tenants, Benutzern und Gruppen auf, mit Quotas, tenantbezogenem Networking und Single Sign-on pro Tenant; die Service-Provider-Seite beschreibt „domain-level tenancy, network isolation, RBAC, and quotas“ pro Kunde. <!-- source: https://docs.platform9.com/private-cloud-director/identity-and-multi-tenancy/identity-and-multi-tenancy-overview ; https://platform9.com/service-providers/ -->

Der Tenant in Cozystack ist eine Kubernetes-Ressource. Wird einer angelegt, entstehen Netzwerk-Policies, die Verkehr aus anderen Tenants standardmäßig blockieren, dazu abgegrenzte RBAC und Quotas; ein Tenant kann Unter-Tenants enthalten — nützlich für Reseller und für Kunden mit eigenen Unterorganisationen. Jeder Service, den ein Tenant bestellt, liegt innerhalb dieser Grenze.

## Was Sie verkaufen können

Hier gehen die Plattformen auseinander. Private Cloud Director ist virtualisierungszentriert: VMs, Kubernetes-Cluster, Load Balancer as a Service und DNS as a Service, dazu Firewall und VPN as a Service über kompatible vorhandene Komponenten. <!-- source: https://docs.platform9.com/private-cloud-director/introduction/architecture-overview --> Einen Managed-Datenbank- oder Object-Storage-Service haben wir in der Dokumentation nicht gefunden.

Der Katalog von Cozystack beginnt dort, wo dieser endet: Managed PostgreSQL, MariaDB, Valkey, ClickHouse, Kafka, RabbitMQ, NATS, MongoDB, OpenSearch und Qdrant, S3-kompatibler Object Storage, HTTP-Cache und VPN, Tenant-Kubernetes und GPU-Workloads. Für einen Hosting-Anbieter liegt genau dort die Marge: Managed Services mit Preis pro Service statt VMs mit Preis pro vCPU. Die Ænix Public Cloud Platform ergänzt die kommerziellen Oberflächen — Billing, ein Kundenportal unter Ihrer Marke, WHMCS-Integration, Sperren und Suspendieren von Tenants.

## GPU

Für virtuelle Maschinen liegen beide nah beieinander. Platform9 dokumentiert GPU-Passthrough und NVIDIA vGPU mit von NVIDIA definierten Profilen, konfiguriert pro Host, und weist darauf hin, dass VM-HA für GPU-Cluster nicht unterstützt wird. <!-- source: https://docs.platform9.com/private-cloud-director/gpu/gpu-support-pcd/gpu-faqs -->

Cozystack gibt VMs ganze GPUs per PCI-Passthrough oder NVIDIA vGPU mit Ihrer NVIDIA-vGPU-Lizenz. In Tenant-Kubernetes-Clustern stellt der NVIDIA GPU Operator MIG-Partitionen auf MIG-fähigen Karten bereit, und HAMi ergänzt Time-Slicing und Überbuchung, sodass sich Container-Workloads wie Inferenz eine Karte teilen können. Die GPU-Nutzung wird pro Tenant für Ihr Billing-System gemessen.

## VMware-Migration

vJailbreak von Platform9 verbindet sich mit vCenter, erkennt VMs, konvertiert Disks und überführt sie in jede OpenStack-kompatible Cloud, im laufenden oder ausgeschalteten Zustand, und kann vSphere-Cluster rollierend an Ort und Stelle umwandeln. Das Werkzeug ist kostenlos. <!-- source: https://github.com/platform9/vjailbreak ; https://docs.platform9.com/private-cloud-director/introduction/readme --> Die In-place-Umwandlung derselben Hosts ist ein echter Vorteil, wenn keine Reservehardware vorhanden ist.

Migrationen nach Cozystack überführen VMs mit Forklift in Wellen nach KubeVirt, mit Runbooks und Umsetzung durch Ænix. Der [VMware-Migrations-Hub](/de/migration/vmware/) nennt realistische Laufzeiten — etwa 8–12 Monate für rund 100 VMs einschließlich Planung — und das Vorgehen.

## Preismodelle

Für Private Cloud Director veröffentlicht Platform9 keine Preisliste; der Preis-Link führt auf ein Kontaktformular. <!-- source: https://platform9.com/pricing/ --> Das Service-Provider-Programm ist öffentlich: 1.000 USD Plattformgebühr pro Monat mit unbegrenzten Cores in den ersten 90 Tagen, danach 10,40 USD pro Core und Monat oder ein individuelles Paket. <!-- source: https://platform9.com/service-providers/ -->

Ænix verkauft eine Subscription, keine Lizenz: Support plus die proprietären kommerziellen Module, berechnet pro 10 physische Nodes und Monat — ab 1.250 USD (Basic, jährliche Abrechnung), mit den Stufen Standard, Plus und Enterprise auf der [Preisseite](/de/preise/). Programme mit der Private Cloud Platform werden pro Ausschreibung angeboten. Preise pro Core und pro Node skalieren mit der Core-Dichte unterschiedlich; vergleichen Sie sie also auf Ihrer eigenen Hardware. Endet die Subscription, läuft die Open-Source-Plattform Cozystack weiter.

## Wo Platform9 tatsächlich besser ist

- **Eine vertraute Konsole für vSphere-Administratoren.** VM-HA, Dynamic Resource Rebalancing, Klonen, Snapshots und Affinitätsregeln, so dargestellt, wie ein Virtualisierungsteam es erwartet. Cozystack verlangt von diesem Team, Kubernetes zu lernen.
- **Automatischer VM-Failover.** VM-HA startet VMs nach einem Host-Ausfall auf gesunden Hosts neu, und Stretched Cluster stellen VMs am Partnerstandort wieder her. Cozystack hat dafür nichts Vergleichbares eingebaut. Es liefert kein Fencing mit; nach einem ungeplanten Node-Ausfall bleiben seine VMs daher aus, bis ein Operator den Node als außer Betrieb markiert oder entfernt oder ein externer Fencing-Mechanismus das erledigt. Danach startet KubeVirt sie auf gesunden Nodes neu, und VMs auf repliziertem LINSTOR/DRBD-Storage kommen mit ihren Daten zurück. Worker-Nodes von Tenant-Kubernetes-Clustern werden dagegen automatisch ersetzt. Einen automatischen VM-Failover an einen anderen Standort gibt es nicht.
- **Eine gehostete Management Plane, wenn Sie eine wollen.** Platform9 betreibt und aktualisiert sie für Sie. Bei Cozystack bleibt diese Arbeit immer bei Ihnen oder Ihrem Supportvertrag.
- **In-place-Umwandlung von vSphere-Clustern.** vJailbreak wandelt Hosts rollierend um, ohne zweiten Serversatz.
- **Weiternutzung von Enterprise-Storage als Designprinzip.** Private Cloud Director ist darauf ausgelegt, Ihre vorhandenen Storage-Arrays und Server weiterzunutzen. <!-- source: https://docs.platform9.com/private-cloud-director/introduction/readme --> Standard bei Cozystack ist replizierter LINSTOR-Storage auf den eigenen Disks der Nodes; andere Storage-Klassen sind eine Integrationsaufgabe.

## Wann Cozystack passt

Cozystack passt, wenn das Geschäft darin besteht, Cloud zu verkaufen, nicht VMs zu betreiben: ein Hosting-Anbieter oder ehemaliger Partner des VMware Cloud Service Provider Program, der Managed-Datenbanken, S3, Kubernetes und GPU neben VMs braucht, verschachtelte Tenants für Reseller, Abrechnung pro Tenant und eine Management Plane, die das eigene Rechenzentrum nie verlässt — unter einer Open-Source-Lizenz. Für Anbieter, die von VMware Cloud Director kommen, siehe die **[VMware-Cloud-Director-Alternative](/de/alternativen/vmware-cloud-director-alternative/)**; für den breiteren Markt die **[VMware-Alternative](/de/alternativen/vmware-alternative/)**. Die Engine selbst beschreibt die Seite **[Cozystack](/de/produkte/cozystack/)**.

<div class="cta-row">
  <a class="cta-primary" href="/de/kontakt/">Gespräch vereinbaren</a>
  <a class="cta-secondary" href="/de/preise/">Preise ansehen →</a>
</div>

## Quellen

Die Angaben zu Platform9 auf dieser Seite wurden im Oktober 2026 mit der Dokumentation und Website von Platform9 abgeglichen:

- [Private Cloud Director — Overview](https://docs.platform9.com/private-cloud-director/introduction/readme)
- [Private Cloud Director — Architecture Overview](https://docs.platform9.com/private-cloud-director/introduction/architecture-overview)
- [Community Edition](https://docs.platform9.com/private-cloud-director/getting-started/getting-started-with-community-edition)
- [Air Gapped Installation](https://docs.platform9.com/private-cloud-director/getting-started/self-hosted/self-hosted-airgap-install)
- [Identity and multi-tenancy overview](https://docs.platform9.com/private-cloud-director/identity-and-multi-tenancy/identity-and-multi-tenancy-overview)
- [OpenStack CLI](https://docs.platform9.com/private-cloud-director/automation-and-cli/openstack-cli)
- [Stretched Clusters](https://docs.platform9.com/private-cloud-director/virtualized-clusters/stretched-clusters)
- [GPU FAQs](https://docs.platform9.com/private-cloud-director/gpu/gpu-support-pcd/gpu-faqs)
- [vJailbreak auf GitHub](https://github.com/platform9/vjailbreak)
- [Platform9 für Service-Provider](https://platform9.com/service-providers/)
- [Ankündigung des Platform9 Cloud Solution Provider Program](https://platform9.com/press/platform9-launches-cloud-solution-provider-program-to-give-abandoned-vmware-partners-a-stable-landing/)

Produktnamen sind Marken ihrer jeweiligen Inhaber. Ist etwas hier veraltet, sagen Sie es uns, und wir korrigieren es.

---

*Ænix hat Cozystack entwickelt (CNCF-Sandbox-Projekt) und pflegt es gemeinsam mit Maintainern anderer Unternehmen. Darauf aufbauend bieten wir die Ænix Public Cloud Platform, die Ænix Private Cloud Platform und die Ænix AI Platform an.*
