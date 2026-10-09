---
title: "Cozystack vs Harvester — zwei KubeVirt-Plattformen mit unterschiedlichem Anspruch"
seo_title: "Cozystack vs Harvester (SUSE Virtualization)"
primary_keyword: "cozystack vs harvester"
secondary_keywords:
  - "harvester alternative"
  - "suse virtualization alternative"
  - "harvester hci vs kubevirt"
description: "Cozystack vs Harvester (SUSE Virtualization): beide nutzen KubeVirt. Umfang, Mandanten, Managed Services, GPU, Storage — und wo Harvester besser ist."
related_pages:
  - /de/produkte/public-cloud-platform/
  - /de/produkte/private-cloud-platform/
  - /de/produkte/cozystack/
  - /tco-calculator/vs-harvester/
  - /de/migration/vmware/
language: "de"
hreflang_en: /compare/cozystack-vs-harvester/
quick_facts_style: "rows"
faq_style: "rows"
direct_answer: |
  **Cozystack und Harvester betreiben virtuelle Maschinen beide mit KubeVirt auf Kubernetes, und beide stehen unter Apache 2.0. Der Unterschied liegt im Umfang. Harvester, von SUSE als SUSE Virtualization vertrieben, ist eine hyperkonvergente Infrastruktur: eine installierbare Appliance mit KVM über KubeVirt, Longhorn-Block-Storage und VM-Verwaltung; Mandantenfähigkeit und Gast-Kubernetes-Cluster kommen über Rancher. Cozystack ist eine Plattform für den Aufbau einer mandantenfähigen Cloud: ein Tenant-Modell mit verschachtelten Tenants und Quotas, Managed Kubernetes pro Tenant und ein Katalog aus Managed-Datenbanken, Message Brokern und S3-Storage neben den VMs. Harvester passt, wenn ein Hypervisor in einer Rancher-Umgebung ersetzt werden soll; Cozystack passt, wenn Sie Cloud-Services für viele Tenants anbieten oder verkaufen. Ænix hat Cozystack entwickelt, pflegt es mit und bietet darauf Support, Services und die Ænix Public Cloud Platform an.**
quick_facts:
  - label: "Was es ist"
    value: "Ein direkter Vergleich von Harvester (SUSE Virtualization) und Cozystack, zwei KubeVirt-basierten Plattformen mit unterschiedlichem Einsatzschwerpunkt."
  - label: "Lizenz"
    value: "Beide Apache 2.0. Harvester wird von SUSE als SUSE Virtualization im Rahmen von SUSE Rancher Prime kommerziell unterstützt; Support und Module für Cozystack kommen von Ænix und anderen Anbietern."
  - label: "Gemeinsame Basis"
    value: "In beiden KubeVirt (KVM) auf Kubernetes. Harvester ergänzt Longhorn-Storage auf SUSE Linux Enterprise Micro; Cozystack nutzt LINSTOR/DRBD-Storage und Cilium-Networking auf Talos Linux."
  - label: "Mandantenfähigkeit"
    value: "Harvester liefert Mandantenfähigkeit über Rancher-Authentifizierung und projektbezogenes RBAC; Cozystack hat eine eigene Tenant-Ressource mit verschachtelten Tenants, Quotas und Netzwerkisolation."
  - label: "Servicekatalog"
    value: "Harvester: VMs, Storage, Networking und von Rancher bereitgestellte Gast-Cluster. Cozystack ergänzt Managed PostgreSQL, MariaDB, Valkey, ClickHouse, Kafka, RabbitMQ, NATS und S3-Storage."
  - label: "Für wen"
    value: "Harvester: Wechsel von VMware zu HCI innerhalb einer Rancher-Umgebung. Cozystack: Hosting-Anbieter, regionale Clouds und Unternehmen mit mandantenfähiger Cloud."
quick_facts_source: "[Harvester-Dokumentation](https://docs.harvesterhci.io/), [SUSE Virtualization](https://www.suse.com/products/rancher/virtualization/), [Cozystack](https://cozystack.io/)"
faq:
  - q: "Basieren Harvester und Cozystack auf derselben Technologie?"
    a: "Teilweise. Beide betreiben VMs mit KubeVirt und KVM auf Kubernetes, eine VM-Definition sieht daher in beiden ähnlich aus. Darunter unterscheiden sie sich: Harvester nutzt Longhorn für verteilten Block-Storage auf SUSE Linux Enterprise Micro, Cozystack nutzt LINSTOR mit DRBD-Replikation, Cilium-Networking und Talos Linux. Darüber unterscheiden sie sich noch stärker: Cozystack ergänzt ein Tenant-Modell und einen Katalog an Managed Services."
  - q: "Ist Harvester dasselbe wie SUSE Virtualization?"
    a: "Ja. Die SUSE-Dokumentation verwendet für das Produkt inzwischen den Namen SUSE Virtualization, während das Open-Source-Projekt und seine Dokumentation unter docs.harvesterhci.io weiter Harvester heißen. SUSE vertreibt es als Teil von SUSE Rancher Prime mit eigenen Support-Angeboten."
  - q: "Wann sollte ich Harvester statt Cozystack wählen?"
    a: "Wenn Sie bereits Rancher betreiben, einen Hypervisor durch hyperkonvergente Infrastruktur ersetzen wollen und Ihre Tenants interne Teams sind. Harvester wird per ISO auf Bare Metal installiert, verlangt für die tägliche VM-Arbeit kein Kubernetes-Wissen und fügt sich in das Virtualization Management von Rancher ein; für Enterprise-Support steht SUSE dahinter."
  - q: "Wann passt Cozystack besser?"
    a: "Wenn Sie Cloud-Services für viele Tenants betreiben oder verkaufen, die einander nicht sehen dürfen: Hosting-Anbieter, regionale Clouds, MSPs oder ein Plattform-Team im Unternehmen, das Self-Service anbietet. Tenant-Modell, Managed Kubernetes pro Tenant sowie der Katalog aus Datenbanken, Messaging und S3 sind eingebaut, statt aus einzelnen Produkten zusammengesetzt zu werden."
  - q: "Wie schneiden die beiden bei GPUs ab?"
    a: "Bei VMs liegt Harvester vorn: Neben PCI-Passthrough teilt es SR-IOV-fähige NVIDIA-GPUs als vGPUs, seit v1.7 auch MIG-basierte vGPUs auf Karten wie A100 und H100. Cozystack gibt VMs ganze GPUs per PCI-Passthrough oder NVIDIA vGPU mit Ihrer NVIDIA-vGPU-Lizenz. In Tenant-Kubernetes-Clustern stellt der NVIDIA GPU Operator von Cozystack MIG-Partitionen bereit, und HAMi ermöglicht Time-Slicing und Überbuchung."
  - q: "Was bietet Ænix zusätzlich zu Cozystack?"
    a: "Ænix hat Cozystack entwickelt und pflegt es mit. Ænix bietet Support und Services sowie die Ænix Public Cloud Platform für Hosting-Anbieter und regionale Clouds an, mit Billing, WHMCS-Integration und Kundenportal unter eigener Marke. Subscriptions beginnen bei 1.250 USD pro 10 Nodes und Monat (Basic, jährliche Abrechnung); Private Cloud Platform und AI Platform werden pro Ausschreibung angeboten."
---

**Dieselbe Hypervisor-Schicht. Verschiedene Produkte darauf.**

> **Passt zu:** **[Ænix Public Cloud Platform](/de/produkte/public-cloud-platform/)** für Anbieter, die Cloud-Services verkaufen, und **[Ænix Private Cloud Platform](/de/produkte/private-cloud-platform/)** für Unternehmen mit einer mandantenfähigen internen Cloud. Darunter läuft in beiden Fällen das Open-Source-Projekt **[Cozystack](/de/produkte/cozystack/)**.

Vergleiche zwischen Cozystack und Harvester beginnen oft mit der falschen Frage. Beide betreiben virtuelle Maschinen mit [KubeVirt](https://kubevirt.io/) und KVM auf Kubernetes, die Hypervisor-Schicht ist also nahezu gleich. Beide stehen unter Apache 2.0. Keine der beiden berechnet Software-Lizenzen pro CPU. Die Entscheidung hängt davon ab, was das jeweilige Produkt sein will.

Harvester beschreibt sich als „modern, open, interoperable, hyperconverged infrastructure (HCI) solution built on Kubernetes“. <!-- source: https://docs.harvesterhci.io/v1.8/ --> Es ersetzt Hypervisor und Storage-Array durch eine Appliance und stützt sich für alles, was mehrere Cluster oder Benutzer betrifft, auf Rancher. Cozystack ist eine Plattform für den Aufbau einer Cloud: Tenants, Managed Kubernetes, Managed-Datenbanken und Object Storage, mit VMs als einem Service unter mehreren.

<div class="compare-elevated compare-elevated--col3">

| | Harvester (SUSE Virtualization) | Cozystack |
|---|---|---|
| **Lizenz** | Apache 2.0 | Apache 2.0 |
| **Einsatzschwerpunkt** | Hyperkonvergente Infrastruktur für VMs | Mandantenfähige Cloud-Plattform |
| **Virtualisierung** | KubeVirt (KVM) | KubeVirt (KVM) |
| **Host-Betriebssystem** | SUSE Linux Enterprise Micro (Elemental) | Talos Linux |
| **Storage** | Longhorn, verteilter Block-Storage | LINSTOR mit DRBD-Replikation; S3 über SeaweedFS |
| **Mandantenfähigkeit** | Über Rancher: Authentifizierung, projektbezogenes RBAC | Tenant-Ressource: verschachtelte Tenants, Quotas, Netzwerkisolation |
| **Kubernetes für Nutzer** | Gast-Cluster mit RKE2 / K3s, von Rancher bereitgestellt | Managed Kubernetes pro Tenant, eingebaut |
| **Managed Services** | Nicht im Umfang | PostgreSQL, MariaDB, Valkey, ClickHouse, Kafka, RabbitMQ, NATS, S3 und mehr |
| **GPU für VMs** | PCI-Passthrough; vGPU auf SR-IOV-fähigen NVIDIA-GPUs, seit v1.7 auch MIG-basiert | PCI-Passthrough; NVIDIA vGPU mit Ihrer NVIDIA-Lizenz |
| **GPU in Kubernetes** | Über den Gast-Cluster, den Sie aufbauen | GPU Operator mit MIG-Partitionen; HAMi für Time-Slicing und Überbuchung |
| **Kommerzieller Support** | SUSE, als Teil von SUSE Rancher Prime | Ænix (und andere Anbieter) |
| **Am besten für** | Wechsel von VMware zu HCI in einer Rancher-Umgebung | Anbieter und Plattform-Teams mit vielen Tenants |

</div>

## Architektur: Appliance oder Plattform

**Harvester** wird per ISO auf Bare Metal installiert (dokumentiert sind auch Installationen per USB und PXE) und bringt sein eigenes Betriebssystem mit, Elemental für SUSE Linux Enterprise Micro. <!-- source: https://docs.harvesterhci.io/v1.8/install/requirements --> Darunter liegt ein RKE2-Cluster: Die Dokumentation verweist Administratoren auf die RKE2-kubeconfig auf den Management-Nodes. <!-- source: https://docs.harvesterhci.io/v1.8/rancher/cloud-provider --> KubeVirt verwaltet die VMs, Longhorn liefert verteilten Block-Storage mit Tiering, Prometheus und Grafana übernehmen das Monitoring. <!-- source: https://docs.harvesterhci.io/v1.8/ --> Für Hochverfügbarkeit ist ein Cluster aus drei Nodes nötig; Installationen mit einem Node funktionieren ohne HA. <!-- source: https://docs.harvesterhci.io/v1.8/install/requirements -->

**Cozystack** läuft auf Talos Linux, einem unveränderlichen Betriebssystem ohne SSH, und fasst Kubernetes, KubeVirt, Cilium-Networking, LINSTOR/DRBD-Storage, einen Monitoring-Stack und einen Katalog von Operatoren zu einer deklarativ verwalteten Plattform zusammen. Dieselbe API, die eine VM anlegt, legt auch einen PostgreSQL-Cluster oder einen Kubernetes-Cluster für einen Tenant an.

In der Praxis heißt das: Harvester ist ein Produkt, das Sie installieren und dann nutzen. Cozystack ist eine Plattform, die Sie installieren und dann anderen anbieten.

## Mandantenfähigkeit: von Rancher geliehen oder eingebaut

Die Harvester-Dokumentation sagt ausdrücklich, dass Harvester „Rancher's existing capabilities, such as authentication and RBAC control“ nutzt, um Mandantenfähigkeit bereitzustellen, mit globalen, Cluster- und Projektrollen; für den Benutzerzugriff empfiehlt sie projektbezogenes RBAC. <!-- source: https://docs.harvesterhci.io/v1.8/rancher/virtualization-management --> Das funktioniert gut, wenn die Tenants Abteilungen einer Organisation sind und Rancher ohnehin der zentrale Steuerungspunkt ist.

Bei Cozystack ist die Mandantenfähigkeit Teil der Plattform selbst. Ein Tenant erhält einen eigenen Namespace, Quotas, eine durch Cilium-Policies erzwungene Netzwerkisolation, eigene Services und bei Bedarf verschachtelte Sub-Tenants. Genau diese Form braucht ein Hosting-Anbieter oder eine regionale Cloud, wenn die Tenants zahlende Kunden sind, die einander nicht sehen dürfen. Nutzungsdaten pro Tenant fließen in die Abrechnung; mit der Ænix Public Cloud Platform gehören Billing, WHMCS-Integration und ein Kundenportal unter eigener Marke zum Produkt.

## Was Tenants bestellen können

Der dokumentierte Umfang von Harvester umfasst VMs, Storage, Networking und Backups sowie Gast-Kubernetes-Cluster, die Rancher über den Harvester Node Driver auf Harvester-VMs bereitstellt. Ein Cloud Provider liefert Load Balancer, ein CSI-Treiber reicht Harvester-Storage an den Gast-Cluster durch. <!-- source: https://docs.harvesterhci.io/v1.8/rancher/node/node-driver --> Managed-Datenbanken oder Object Storage gehören nicht dazu; diese müssten Sie selbst darauf betreiben.

Cozystack liefert sie als Services: Managed Kubernetes mit eigener Control Plane pro Tenant, PostgreSQL, MariaDB, Valkey, ClickHouse, Kafka, RabbitMQ, NATS, S3-kompatiblen Object Storage auf SeaweedFS und mehr. Für einen Anbieter liegt in diesem Katalog die Marge; für ein Plattform-Team im Unternehmen ist er das, was Tickets überflüssig macht.

## Storage und Backup

Longhorn ist in die Harvester-Oberfläche integriert und unterstützt Backups von VM-Volumes auf NFS oder ein S3-kompatibles Ziel, einschließlich Wiederherstellung in einem anderen Cluster. Laut Dokumentation sind Backups auf Longhorn-Volumes beschränkt. <!-- source: https://docs.harvesterhci.io/v1.8/vm/backup-restore -->

Cozystack legt Volumes auf LINSTOR mit DRBD-Replikation ab, wo die StorageClass es verlangt, und nutzt Velero für geplante Backups von VMs und Cluster-Zustand, verschlüsselt im Object Store. Managed-Datenbanken bringen zusätzlich ihre eigene Point-in-Time-Recovery mit.

## GPU

Hier lohnt Genauigkeit, denn beide sind an unterschiedlichen Stellen stark.

**Harvester** reicht PCI-Geräte einschließlich GPUs mit dem Add-on `pcidevices-controller` an VMs durch und teilt SR-IOV-fähige NVIDIA-GPUs als vGPUs, sobald das Add-on `nvidia-driver-toolkit` aktiviert ist. Seit v1.7 teilt es außerdem MIG-basierte vGPUs zwischen VMs auf Karten wie A100, H100 und H200. <!-- source: https://docs.harvesterhci.io/v1.8/advanced/vgpusupport -->

**Cozystack** gibt VMs ganze GPUs per PCI-Passthrough oder NVIDIA vGPU, sofern Sie eine NVIDIA-vGPU-Lizenz besitzen; MIG-Slices werden VMs nicht zugewiesen. In Tenant-Kubernetes-Clustern stellt der NVIDIA GPU Operator auf MIG-fähigen Karten MIG-Partitionen als planbare Ressourcen bereit, und HAMi ermöglicht Time-Slicing und Überbuchung. Cozystack wurde im September 2026 in das CNCF-Programm Kubernetes AI Conformance aufgenommen.

Wenn Ihr GPU-Produkt aus MIG-Slices für VMs besteht, deckt Harvester das heute ab. Wenn es um GPU-Kapazität für Container und Kubernetes-Cluster geht, die pro Tenant verkauft wird, passt Cozystack besser.

## Wo Harvester tatsächlich besser ist

- **Die naheliegende Wahl in einer Rancher-Umgebung.** Harvester-Cluster werden in das Virtualization Management von Rancher importiert, VMs und Kubernetes-Cluster werden dort nebeneinander mit derselben Authentifizierung und demselben RBAC verwaltet. <!-- source: https://documentation.suse.com/cloudnative/rancher-manager/v2.13/en/integrations/harvester/harvester.html -->
- **Leichter einzuführen für ein Virtualisierungsteam.** Laut SUSE verlangt Harvester für den Alltag „no knowledge of Kubernetes concepts“. Cozystack setzt voraus, dass Ihr Plattform-Team Kubernetes versteht.
- **Eine ISO-Appliance.** „Simply install it directly onto your bare metal server to get started.“ <!-- source: https://harvesterhci.io/ -->
- **Eingebauter VM-Import.** Das Add-on `vm-import-controller` importiert VMs aus VMware, OpenStack und OVA-Paketen. <!-- source: https://docs.harvesterhci.io/v1.8/advanced/addons/vmimport -->
- **MIG-basierte vGPUs für VMs**, wie oben beschrieben.
- **SUSE als Anbieter dahinter.** SUSE bietet Support-Stufen wie Premium Support, Sovereign Premium Support und Long Term Service Pack Support an. <!-- source: https://www.suse.com/products/rancher/virtualization/ -->

Wenn Sie vSphere für interne VMs ablösen wollen und ohnehin auf Rancher standardisiert sind, ist Harvester der kürzere Weg, und ein Wechsel zu Cozystack würde mehr kosten, als er bringt.

## Wann Cozystack passt

Cozystack zahlt sich aus, sobald eine dieser Anforderungen dazukommt:

- Die Tenants sind **externe Kunden**, die jeweils Isolation, Quotas und eigene Nutzungsdaten brauchen.
- Sie wollen **Managed-Datenbanken, Message Broker, S3 und Kubernetes** anbieten oder verkaufen, nicht nur VMs.
- Sie brauchen **Billing**, ein **Kundenportal** oder eine **WHMCS-Integration** rund um die Plattform; genau das ergänzt die [Ænix Public Cloud Platform](/de/produkte/public-cloud-platform/).
- Sie wollen **GPU-Kapazität für Kubernetes-Workloads** mit MIG und HAMi zwischen Tenants teilen.

## Kosten

Als Open Source sind beide Plattformen kostenlos nutzbar; bezahlt werden Support und die Menschen, die sie betreiben. Der [TCO-Rechner Harvester vs Cozystack](/tco-calculator/vs-harvester/) (auf Englisch) enthält ein Fünfjahres-Kostenmodell mit belegten Annahmen und zeigt offen, ab welcher Größe Harvester günstiger ist. Ænix-Subscriptions beginnen bei 1.250 USD pro 10 Nodes und Monat bei jährlicher Abrechnung; siehe [Preise](/de/preise/). Für den Umzug von Workloads aus VMware oder anderen Plattformen siehe die [Migrations-Hubs](/de/migration/).

<div class="cta-row">
  <a class="cta-primary" href="/de/kontakt/">Gespräch vereinbaren</a>
  <a class="cta-secondary" href="/tco-calculator/vs-harvester/">TCO Harvester vs Cozystack →</a>
</div>

## Quellen

Die Angaben zu Harvester auf dieser Seite wurden im Oktober 2026 anhand der Dokumentation des Herstellers geprüft:

- [Harvester-Dokumentation, Überblick](https://docs.harvesterhci.io/v1.8/)
- [Harvester: Hardware- und Netzwerkanforderungen](https://docs.harvesterhci.io/v1.8/install/requirements)
- [Harvester: Mandantenfähigkeit über Rancher](https://docs.harvesterhci.io/v1.8/rancher/virtualization-management)
- [Harvester Node Driver für Gast-Cluster](https://docs.harvesterhci.io/v1.8/rancher/node/node-driver)
- [Harvester Cloud Provider](https://docs.harvesterhci.io/v1.8/rancher/cloud-provider)
- [Harvester: vGPU-Unterstützung](https://docs.harvesterhci.io/v1.8/advanced/vgpusupport)
- [Harvester: VM-Backup, Snapshot und Wiederherstellung](https://docs.harvesterhci.io/v1.8/vm/backup-restore)
- [Harvester: Add-on für den VM-Import](https://docs.harvesterhci.io/v1.8/advanced/addons/vmimport)
- [Harvester auf GitHub (Apache 2.0)](https://github.com/harvester/harvester)
- [SUSE Virtualization, Produktseite](https://www.suse.com/products/rancher/virtualization/)
- [SUSE Rancher Manager: Integration von SUSE Virtualization](https://documentation.suse.com/cloudnative/rancher-manager/v2.13/en/integrations/harvester/harvester.html)

---

*Ænix hat Cozystack (CNCF-Sandbox-Projekt) entwickelt und pflegt es gemeinsam mit Maintainern anderer Unternehmen. Darauf aufbauend bieten wir die Ænix Public Cloud Platform, die Ænix Private Cloud Platform und die Ænix AI Platform an. Harvester, SUSE und Rancher sind Marken ihrer jeweiligen Inhaber.*
