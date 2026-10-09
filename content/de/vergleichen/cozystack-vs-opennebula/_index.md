---
title: "Cozystack vs OpenNebula — VM-Cloud oder Kubernetes-native Cloud-Plattform"
seo_title: "Cozystack vs OpenNebula: der direkte Vergleich"
primary_keyword: "cozystack vs opennebula"
secondary_keywords:
  - "opennebula alternative"
  - "opennebula vs kubevirt"
  - "opennebula vs kubernetes"
description: "Cozystack vs OpenNebula: zwei Cloud-Plattformen unter Apache 2.0. Architektur, Mandanten, Managed Services, GPU, Subscriptions und wo OpenNebula vorn liegt."
related_pages:
  - /tco-calculator/vs-opennebula/
  - /de/produkte/public-cloud-platform/
  - /de/produkte/cozystack/
  - /de/migration/
  - /de/case-studies/unified-cloud-portal-financial-group/
language: "de"
hreflang_en: /compare/cozystack-vs-opennebula/
quick_facts_style: "rows"
faq_style: "rows"
direct_answer: |
  **Cozystack und OpenNebula sind beide Open-Source-Cloud-Plattformen unter Apache 2.0, kommen aber von unterschiedlichen Ausgangspunkten. OpenNebula ist eine Cloud-Management-Plattform rund um virtuelle KVM-Maschinen (mit LXC-Containern), gegliedert in Benutzer, Gruppen und Virtual Data Centers; Kubernetes wird als Service auf diesen VMs angeboten. Cozystack läuft auf Kubernetes selbst: Virtuelle Maschinen laufen über KubeVirt, Tenants sind eine Kubernetes-Ressource mit verschachtelter Isolation, und Managed-Datenbanken, Message Broker, S3-Object-Storage und Tenant-Kubernetes-Cluster gehören zum selben Katalog. OpenNebula passt zu Teams, die eine ausgereifte VM-Cloud wollen; Cozystack passt zu Hosting-Anbietern und Plattform-Teams, deren Produkt ein Katalog von Managed Services ist. Ænix hat Cozystack entwickelt, pflegt es mit und bietet Anbietern die Ænix Public Cloud Platform an — Cozystack plus Billing, WHMCS-Integration und gebrandetes Portal.**
quick_facts:
  - label: "Was es ist"
    value: "Ein direkter Vergleich von OpenNebula und Cozystack als Open-Source-Plattformen für private und öffentliche Clouds."
  - label: "Lizenz"
    value: "Beide Apache 2.0. Pakete der OpenNebula Enterprise Edition gehen unter kommerziellen Bedingungen an Subscription-Kunden; Cozystack hat eine einzige Open-Source-Edition."
  - label: "Basis"
    value: "OpenNebula: KVM-VMs und LXC-Container, verwaltet vom OpenNebula-Frontend. Cozystack: KubeVirt-VMs und Container über eine Kubernetes-API."
  - label: "Mandantenfähigkeit"
    value: "OpenNebula: Benutzer, Gruppen, ACLs, Quotas und Virtual Data Centers. Cozystack: eine Tenant-Ressource mit verschachtelten Tenants, Quotas, Netzwerkisolation und Observability pro Tenant."
  - label: "Managed Services"
    value: "OpenNebula: Marketplace-Appliances und OneKS Managed Kubernetes. Cozystack: integriertes PostgreSQL, MariaDB, Valkey, Kafka, ClickHouse, RabbitMQ, NATS, S3 und Kubernetes."
  - label: "Status"
    value: "Cozystack ist ein CNCF-Projekt (Sandbox seit 28.02.2025; Antrag auf Incubation in der Due-Diligence-Prüfung). OpenNebula wird von OpenNebula Systems entwickelt."
  - label: "Für wen"
    value: "Hosting-Anbieter, regionale Clouds und Plattform-Teams, die zwischen einem VM-zentrierten Cloud-Manager und einer Kubernetes-nativen Plattform wählen."
quick_facts_source: "[OpenNebula-Dokumentation](https://docs.opennebula.io/7.4/), [OpenNebula auf GitHub](https://github.com/OpenNebula/one), [Cozystack](https://cozystack.io)"
faq:
  - q: "Ist OpenNebula Open Source?"
    a: "Ja. OpenNebula steht unter der Apache License 2.0, derselben Lizenz wie Cozystack. Der Unterschied liegt in der Distribution: OpenNebula Systems liefert die Pakete der Enterprise Edition mit Maintenance-Releases und LTS-Versionen unter kommerziellen Bedingungen an Kunden mit aktiver Subscription, während die Community Edition Patch-Releases mit kritischen Korrekturen erhält. Cozystack hat eine einzige Open-Source-Edition; Ænix verkauft darauf Support und proprietäre kommerzielle Module."
  - q: "Worin liegt der wesentliche Architekturunterschied?"
    a: "OpenNebula ist ein VM-Cloud-Manager: Sein Frontend orchestriert KVM-Hosts (und LXC), Kubernetes-Cluster laufen als Service in VMs. Cozystack geht von Kubernetes aus: VMs laufen als KubeVirt-Workloads neben Containern, und die Objekte der Plattform selbst, einschließlich Tenants und Managed Services, sind Kubernetes-Ressourcen, die per GitOps gesteuert werden."
  - q: "Unterstützt OpenNebula Kubernetes?"
    a: "Ja. OpenNebula 7.4 enthält OneKS, ein Kubernetes-as-a-Service auf Basis von RKE2 und dem Cluster-API-Provider für OpenNebula, als Funktion der Community Edition. Cozystack bietet Tenant-Kubernetes-Cluster mit einer verwalteten Control Plane pro Tenant als einen Eintrag seines Service-Katalogs, neben Datenbanken, Brokern und S3."
  - q: "Wie schneiden beide bei GPUs ab?"
    a: "Beide unterstützen NVIDIA-Rechenzentrums-GPUs. OpenNebula dokumentiert PCI-Passthrough und NVIDIA vGPU für VMs, einschließlich vGPU-Profilen auf Basis von MIG-Instanzen auf Karten wie der H100. Cozystack gibt VMs ganze GPUs per PCI-Passthrough oder NVIDIA vGPU (mit Ihrer NVIDIA-vGPU-Lizenz); in Tenant-Kubernetes-Clustern stellt der NVIDIA GPU Operator MIG-Partitionen auf MIG-fähigen Karten bereit, und HAMi ermöglicht zeitlich geteilte Nutzung. MIG-Slices für VMs bietet Cozystack nicht."
  - q: "Können OpenNebula und Cozystack parallel laufen?"
    a: "Ja. Die Ænix Public Cloud Platform kann während der Migration neben einer bestehenden OpenNebula-Umgebung laufen. Eine anonymisierte Fallstudie beschreibt eine Finanzgruppe, die ein gemeinsames Self-Service-Portal über OpenNebula, VMware und Kubernetes gelegt hat, statt alles auf einmal abzulösen."
  - q: "Was bietet Ænix zusätzlich zu Cozystack?"
    a: "Ænix hat Cozystack entwickelt und pflegt es gemeinsam mit Maintainern anderer Unternehmen. Ænix verkauft Subscriptions — Support plus die proprietären kommerziellen Ænix-Module (Billing-System und WHMCS-Integration) — für die Ænix Public Cloud Platform, ab 1.250 USD pro 10 Nodes und Monat in der Stufe Basic bei jährlicher Abrechnung. Private Cloud Platform und AI Platform werden per Ausschreibung angeboten."
---

**Gleiche Lizenz, anderer Einsatzschwerpunkt. OpenNebula verwaltet eine VM-Cloud; Cozystack macht aus Kubernetes eine.**

> **Passt zu:** **[Ænix Public Cloud Platform](/de/produkte/public-cloud-platform/)** — Cozystack plus Billing, WHMCS-Integration, gebrandetes Kundenportal sowie Sperren und Suspendieren von Tenants, für Hosting-Anbieter und regionale Clouds. Support-Stufen ab 1.250 USD pro 10 Nodes und Monat.

OpenNebula baut Clouds seit lange vor Kubernetes, und das merkt man im guten Sinne: ein stabiles VM-Modell, eine Web-Oberfläche für den gesamten Lebenszyklus, Föderation über Zonen hinweg und ein kommerzielles Unternehmen dahinter. Cozystack kommt aus der anderen Richtung. Es setzt Kubernetes als Control Plane voraus und behandelt virtuelle Maschinen, Datenbanken und Tenant-Cluster als Workloads darauf. Beide stehen unter Apache 2.0. Die Frage ist, welche Form zu dem passt, was Sie verkaufen oder betreiben.

<div class="compare-elevated compare-elevated--col3">

| | OpenNebula | Cozystack |
|---|---|---|
| **Lizenz** | Apache 2.0; Enterprise-Edition-Pakete für Subscription-Kunden | Apache 2.0, eine Edition |
| **Basis** | KVM (und LXC), verwaltet vom OpenNebula-Frontend | KubeVirt und Container auf Kubernetes, Nodes mit Talos Linux |
| **Mandantenfähigkeit** | Benutzer, Gruppen, ACLs, Quotas, Virtual Data Centers | Tenant-Ressource mit verschachtelten Tenants, Quotas, Netzwerkisolation |
| **Kubernetes für Tenants** | OneKS (RKE2 + Cluster API), Cluster auf VMs | Tenant-Cluster mit verwalteter Control Plane pro Tenant |
| **Managed-Datenbanken und Broker** | Marketplace-Appliances und Templates | Integriert: PostgreSQL, MariaDB, Valkey, Kafka, ClickHouse, RabbitMQ, NATS und weitere |
| **S3-Object-Storage** | In den dokumentierten Kernfunktionen nicht als Tenant-Service aufgeführt | Integriert (SeaweedFS) |
| **Storage** | NFS/NAS, Ceph, SAN/LVM, NetApp | LINSTOR mit DRBD-Replikation |
| **GPU** | PCI-Passthrough, NVIDIA vGPU, vGPU auf MIG für VMs | Passthrough oder NVIDIA vGPU für VMs; MIG und HAMi-Sharing in Tenant-Kubernetes |
| **Nutzungsdaten** | Accounting und Showback | Nutzung pro Tenant; Abrechnung über Ænix-Module oder Ihr eigenes System |
| **Am besten für** | VM-zentrierte Private- und Edge-Clouds | Anbieter, die Managed Services verkaufen; Kubernetes-native Plattformen |

</div>

<!-- source: https://github.com/OpenNebula/one (licence) -->
<!-- source: https://docs.opennebula.io/7.0/getting_started/understand_opennebula/opennebula_concepts/key_features/ -->
<!-- source: https://docs.opennebula.io/7.4/platform_services/oneks/ -->

## Architektur: Wer ist die Control Plane?

Laut OpenNebula-Dokumentation basiert die Virtualisierung „hauptsächlich auf dem Open-Source-Hypervisor KVM, mit Unterstützung für LXC“. <!-- source: https://docs.opennebula.io/7.4/getting_started/understand_opennebula/opennebula_concepts/opennebula_overview/ --> Ein OpenNebula-Frontend verteilt VMs auf Hosts, bindet Images aus Datastores an und verdrahtet Netzwerke über Linux-Bridges, VLANs, VXLAN oder Open vSwitch. Kubernetes ist dort, wo Sie es brauchen, ein Workload: OneKS erstellt RKE2-Cluster auf OpenNebula-VMs über den Cluster-API-Provider für OpenNebula. <!-- source: https://opennebula.io/blog/product/introducing-oneks/ -->

Cozystack kehrt das um. Der Management-Cluster ist Kubernetes auf Talos Linux, einem unveränderlichen Betriebssystem ohne SSH. Virtuelle Maschinen sind KubeVirt-Objekte, Storage kommt von LINSTOR mit DRBD-Replikation, Networking von Cilium, und jeder Service im Katalog wird als Manifest deklariert und laufend abgeglichen. Praktisch heißt das: eine API und ein GitOps-Workflow für VMs, Datenbanken und Cluster — um den Preis, dass Sie Kubernetes verstehen müssen, um die Plattform zu betreiben.

## Mandantenfähigkeit

OpenNebula bietet Mandantenfähigkeit „by design“: Benutzer und Gruppen, feingranulare ACLs, Quotas, Authentifizierung über LDAP und SAML sowie Virtual Data Centers, die Gruppen einen Ausschnitt aus Clustern, Hosts, Datastores und Netzwerken zuweisen. <!-- source: https://docs.opennebula.io/7.0/product/cloud_system_administration/multitenancy/manage_vdcs/ --> Das ist ein bewährtes Modell für eine Organisation, die ihre Cloud zwischen Abteilungen oder Kunden aufteilt.

Bei Cozystack ist die Einheit der Tenant, eine Kubernetes-Ressource. Beim Anlegen erhält er einen eigenen Namespace, Netzwerkrichtlinien, die Verkehr aus anderen Tenants standardmäßig unterbinden, Quotas sowie eigenes Monitoring und Logging. Tenants lassen sich verschachteln, sodass ein Reseller seine eigenen Kunden unter sich führen kann. Genau diese Verschachtelung braucht ein Anbieter mit Resellern oder eine Holding mit Tochtergesellschaften früher oder später.

## Katalog der Managed Services

Hier liegt der größte praktische Unterschied. Der Katalog von OpenNebula baut auf VM-Templates und Appliances aus öffentlichen und privaten Marketplaces auf, dazu OneKS für Kubernetes. <!-- source: https://docs.opennebula.io/7.0/product/apps-marketplace/ -->

Cozystack liefert Managed Services als vollwertige Plattformobjekte: PostgreSQL (CloudNativePG), MariaDB, Valkey, Kafka, ClickHouse, RabbitMQ, NATS, MongoDB, OpenSearch und Qdrant, S3-kompatiblen Object Storage auf SeaweedFS, HTTP-Cache, VPN, Tenant-Kubernetes und virtuelle Maschinen. Jeder Service wird auf dieselbe Weise bestellt, über Dashboard oder API, mit Replikation, Backups und Monitoring bereits verdrahtet. Für einen Hosting-Anbieter ist dieser Katalog das Produkt: So wächst der Umsatz pro Node über den reinen VM-Verkauf hinaus.

## GPU

OpenNebula dokumentiert NVIDIA-GPU-Passthrough und NVIDIA vGPU für VMs, einschließlich vGPU-Profilen, die auf unterstützten Karten wie der H100 MIG-Instanzen abbilden. <!-- source: https://docs.opennebula.io/7.0/product/cluster_configuration/hosts_and_clusters/vgpu/ --> <!-- source: https://docs.opennebula.io/7.0/product/cluster_configuration/hosts_and_clusters/nvidia_gpu_passthrough/ --> Die Subscription von Version 7.4 ergänzt eine Integration mit NVIDIAs Infrastructure Controller für die Bereitstellung von Bare-Metal-Hardware. <!-- source: https://docs.opennebula.io/7.4/software/release_information/release_notes/whats_new/ -->

Cozystack betreibt NVIDIA-Rechenzentrums-GPUs über den NVIDIA GPU Operator. Virtuelle Maschinen, einschließlich der VM-Worker-Nodes von Tenant-Clustern, erhalten ganze GPUs per PCI-Passthrough oder NVIDIA vGPU mit Ihrer NVIDIA-vGPU-Lizenz. In Tenant-Kubernetes-Clustern stellt der GPU Operator MIG-Partitionen auf MIG-fähigen Karten als planbare Ressourcen bereit, und HAMi ermöglicht zeitlich geteilte Nutzung und Überbuchung. Die GPU-Nutzung wird pro Tenant gemessen; abgerechnet wird in Ihrem Billing-System. Wenn MIG-basierte vGPU in VMs eine harte Anforderung ist: OpenNebula dokumentiert sie, Cozystack bietet sie nicht.

## Lizenz und kommerzielles Modell

Beide Projekte stehen unter Apache 2.0. OpenNebula Systems liefert die Pakete der Enterprise Edition — mit Maintenance-Releases, LTS-Versionen und zusätzlichen Korrekturen — unter kommerziellen Bedingungen an Subscription-Kunden; die Community Edition erhält Patch-Releases mit kritischen Korrekturen. <!-- source: https://docs.opennebula.io/6.8/intro_release_notes/release_notes_enterprise/what_is.html --> Subscriptions gibt es als Standard (9×5) und Premium (24×7), Preise auf Anfrage. <!-- source: https://opennebula.io/subscriptions/ -->

Cozystack hat eine einzige Edition; nichts ist Subscription-Kunden vorbehalten. Ænix verkauft eine Subscription — Support plus die proprietären kommerziellen Ænix-Module (Billing-System und WHMCS-Integration) — pro 10 physische Nodes und Monat, veröffentlicht auf der [Preisseite](/de/preise/): Basic 1.250 USD, Standard 3.000 USD, Plus 5.500 USD bei jährlicher Abrechnung, Enterprise individuell. Private Cloud Platform und AI Platform werden per Ausschreibung angeboten. Endet die Subscription, läuft Cozystack auf Ihrer Hardware weiter.

Für die Kostenfrage über fünf Jahre modelliert der **[TCO-Rechner OpenNebula vs Cozystack](/tco-calculator/vs-opennebula/)** (englisch) beide Seiten mit belegten Preisen und zeigt offen, wo OpenNebula bei den Standardannahmen günstiger ist.

## Migrationsweg

OpenNebula-VMs sind KVM-Gäste mit qcow2- oder Raw-Disks — das Format, das KubeVirt über seinen Containerized Data Importer einliest. Eine VM umzuziehen heißt also: Disk kopieren und neu deklarieren, nicht konvertieren. Die eigentliche Arbeit steckt in Netzwerken, Templates und den Services rund um die VMs. Ein Big-Bang-Umzug ist nicht nötig: Die Ænix Public Cloud Platform kann neben OpenNebula laufen, während die Workloads in Wellen umziehen. Eine anonymisierte Fallstudie zeigt eine Finanzgruppe, die [ein Self-Service-Portal über OpenNebula, VMware und Kubernetes](/de/case-studies/unified-cloud-portal-financial-group/) gelegt und alle drei weiterbetrieben hat. Runbooks für andere Plattformen finden Sie in den **[Migrations-Hubs](/de/migration/)**.

## Wo OpenNebula tatsächlich besser ist

- **Eine VM-Cloud ohne Kubernetes.** Wenn Ihr Team KVM und Linux-Networking beherrscht und Kubernetes nicht im kritischen Pfad haben will, bekommen Sie mit OpenNebula eine vollständige Cloud ohne Kubernetes. Cozystack verlangt, dass Sie zuerst Kubernetes lernen.
- **Wahl beim Storage.** NFS/NAS, Ceph, SAN/LVM und NetApp sind unterstützte Backends. Cozystack setzt auf LINSTOR; ein vorhandenes SAN einzubinden ist eine Designaufgabe.
- **MIG-basierte vGPU für VMs.** Für unterstützte NVIDIA-Karten von OpenNebula dokumentiert; bei Cozystack nicht verfügbar.
- **Föderation und Größenordnung.** Zonen-Föderation für geografisch verteilte Clouds und die dokumentierte Verwaltung von mehr als 2.500 Hypervisor-Nodes.
- **Edge- und Hybrid-Einsatz.** Die OpenNebula-Dokumentation deckt On-Premises-, Cloud-, Edge-, Hybrid- und Multi-Cloud-Installationen unter einer Plattform ab.
- **Integriertes Backup.** Change Block Tracking mit vollständigen, inkrementellen und differenziellen Backups gehört zur Plattform, dazu die Veeam-Integration in der Subscription.

## Wann Cozystack passt

Cozystack zahlt sich aus, wenn Ihre Cloud ein Katalog ist und kein VM-Pool: Managed-Datenbanken, Kubernetes, S3 und GPU, pro Tenant verkauft oder per Self-Service bezogen, mit verschachtelten Tenants für Reseller und Nutzungsdaten pro Tenant für das Billing. Es passt auch zu Teams, die ohnehin auf Kubernetes standardisieren und VMs lieber als weiteren Workload betreiben, statt eine zweite Control Plane zu pflegen. Für Anbieter ergänzt die [Ænix Public Cloud Platform](/de/produkte/public-cloud-platform/) die kommerzielle Schicht; die Open-Source-Engine allein beschreibt die Seite **[Cozystack](/de/produkte/cozystack/)**.

<div class="cta-row">
  <a class="cta-primary" href="/de/kontakt/">Gespräch vereinbaren</a>
  <a class="cta-secondary" href="/tco-calculator/vs-opennebula/">Fünfjahreskosten vergleichen →</a>
</div>

---

## Quellen

Die Angaben zu OpenNebula auf dieser Seite stammen aus der Dokumentation und Website des Herstellers, geprüft im Oktober 2026:

- [OpenNebula-Repository und Lizenz](https://github.com/OpenNebula/one)
- [OpenNebula-Überblick (7.4)](https://docs.opennebula.io/7.4/getting_started/understand_opennebula/opennebula_concepts/opennebula_overview/)
- [Kernfunktionen von OpenNebula (7.0)](https://docs.opennebula.io/7.0/getting_started/understand_opennebula/opennebula_concepts/key_features/)
- [Was ist die OpenNebula Enterprise Edition](https://docs.opennebula.io/6.8/intro_release_notes/release_notes_enterprise/what_is.html)
- [OpenNebula-Subscription-Pläne](https://opennebula.io/subscriptions/)
- [OneKS — Kubernetes as a Service (7.4)](https://docs.opennebula.io/7.4/platform_services/oneks/) und [Ankündigung](https://opennebula.io/blog/product/introducing-oneks/)
- [NVIDIA vGPU und MIG](https://docs.opennebula.io/7.0/product/cluster_configuration/hosts_and_clusters/vgpu/) sowie [NVIDIA-GPU-Passthrough](https://docs.opennebula.io/7.0/product/cluster_configuration/hosts_and_clusters/nvidia_gpu_passthrough/)
- [Virtual Data Centers verwalten](https://docs.opennebula.io/7.0/product/cloud_system_administration/multitenancy/manage_vdcs/)
- [Release Notes OpenNebula 7.4](https://docs.opennebula.io/7.4/software/release_information/release_notes/whats_new/)

---

*Ænix hat Cozystack (CNCF-Sandbox-Projekt) entwickelt und pflegt es gemeinsam mit Maintainern anderer Unternehmen. Darauf aufbauend bieten wir die Ænix Public Cloud Platform, die Ænix Private Cloud Platform und die Ænix AI Platform an. OpenNebula ist eine Marke von OpenNebula Systems; dieser Vergleich beruht auf der öffentlichen Dokumentation.*
