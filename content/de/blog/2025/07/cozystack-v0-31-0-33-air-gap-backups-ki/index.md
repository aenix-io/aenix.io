---
title: "Cozystack v0.31–0.33: Air Gap, Backup-System, KI-Workloads in Kubernetes und mehr"
seo_title: "Cozystack v0.31–0.33: Air Gap, Backups und KI"
description: "Cozystack v0.31 bis v0.33: Air-Gap-Installationen, neues Backup-System, KI-Workloads in Kubernetes, ARM-Support, NFS und cozypkg als Ersatz für Helm."
slug: "cozystack-v0-31-0-33-air-gap-backups-ki"
date: "2025-07-09"
cover_image: "/img/blog/covers/de/cozystack-v0-31-0-33-air-gap-backups-ki.jpg"
author: "Timur Tukaev"
type: "announcement"
topics: ["Kubernetes", "Cozystack", "KubeVirt", "AI and ML", "GPU", "Multi-tenancy"]
language: "de"
hreflang_en: "/blog/2025/07/cozystack-v0-31-0-33/"
companion_landing: "/de/produkte/cozystack-enterprise-support/"
companion_label: "Enterprise-Support für Cozystack mit SLA ansehen →"
---



Unser letzter Überblick über die Neuerungen in Cozystack liegt schon eine Weile zurück, Zeit also, das nachzuholen. In dieser Zusammenfassung stellen wir eine ganze Reihe neuer Funktionen und wichtiger Verbesserungen vor. Der Kürze halber beschränken wir uns auf die wichtigsten Änderungen; sämtliche Fixes und Erweiterungen finden Sie in den Release Notes, die im Artikel jeweils verlinkt sind.

![Cozystack-Releases v0.31 bis v0.33](/img/blog/medium/cozystack-v0-31-0-33/cover.jpg)

> **Was ist Cozystack.** Cozystack ist ein kostenloses PaaS und Framework für den Aufbau von Clouds, das VMs, Container und GPU-Workloads unter Kubernetes vereint. Unternehmen können damit Hardware in eine Cloud verwandeln und ihren Nutzern oder Kunden Managed K8s, VMs, Managed-Datenbanken, Anwendungen und GPU-Services anbieten. Dank KubeVirt-Integration, Multi-Tenancy und der Einfachheit von Bare Metal lassen sich KI, Datenbanken oder Edge-Anwendungen ohne Vendor-Lock-in betreiben. Cozystack ist ein CNCF-Sandbox-Projekt.

## v0.33.0: verbessertes Ressourcenmanagement, neues Backup-System, NFS-Support

Cozystack 0.33.0 führt ein einheitliches Ressourcenmanagement ein: Globale Allocation Ratios für CPU und Arbeitsspeicher gelten jetzt für VMs, Anwendungen und Quotas gleichermaßen. Das Update bringt PVC-Backups auf Basis von Velero, Unterstützung für NFS-Storage und CPU-Pinning für Multi-Socket-Systeme. Gleichzeitig werden Ressourcendefinitionen einfacher, und alte Konfigurationen werden automatisch migriert.

**Einheitliches Management der CPU- und Speicherzuteilung.** Seit Version 0.31.0 gibt es in Cozystack mit cpu-allocation-ratio eine zentrale Konfigurationsvariable als Single Source of Truth, die CPU-Requests und -Limits für die von KubeVirt verwalteten virtuellen Maschinen vereinheitlicht. Release 0.33.0 ergänzt memory-allocation-ratio und wendet beide Variablen auf alle Managed-Anwendungen und die Ressourcen-Quotas der Tenants an.

Auch Resource Presets berücksichtigen die Allocation Ratios und verhalten sich genauso wie explizite Ressourcendefinitionen. Das neue Format für Ressourcendefinitionen ist für Plattformnutzer knapp und einfach.

```
# resourcePrese
# resource definition in the configuration
resources:
  cpu:  cpu value>
  memory:  memory value>
```

Daraus ergeben sich Kubernetes-Requests und -Limits, die auf den definierten Werten und den universellen Allocation Ratios beruhen:

```
# actual requests and limits, provided to the application
resources:
  limits:
    cpu:  cpu value>
    memory:  memory value>
  requests:
    cpu:  cpu value / cpu-allocation-ratio>
    memory:  memory value / memory-allocation-ratio>
```

Beim Update von älteren Cozystack-Versionen wird die Ressourcenkonfiguration der Managed-Anwendungen automatisch in das neue Format migriert.

**Sichern und Wiederherstellen von Daten in Tenant-Kubernetes-Clustern.** Eine der wichtigsten Neuerungen dieses Releases ist die Möglichkeit, PVCs in Tenant-Kubernetes-Clustern zu sichern. Plattform- und Tenant-Administratoren können damit Daten, die von Services in den Tenant-Clustern genutzt werden, sichern und wiederherstellen. Die neue Funktion basiert auf [Velero](https://velero.io/) und benötigt einen externen S3-kompatiblen Storage.

**Unterstützung für NFS-Storage.** Cozystack kann jetzt über ein neues optionales Systemmodul NFS als Shared Storage nutzen. [Siehe Dokumentation](https://cozystack.io/docs/operations/storage/nfs).

Weitere Funktionen und Verbesserungen

- PVC-Backups in Tenant-Kubernetes-Clustern auf Basis von [Velero](https://velero.io/).
- NFS-Support über das neue optionale Systemmodul nfs-driver.
- Die für VMs verfügbaren CPU-Sockets lassen sich über den Konfigurationswert `resources.cpu.sockets` festlegen. Damit sind individuelle Ressourcenzuteilungen für VMs jenseits der vordefinierten Instance Types möglich, einschließlich NUMA-bewusstem CPU-Pinning für Multi-Socket-Systeme, sodass sich Sockets virtuellen Maschinen gezielt zuweisen lassen.
- Unterstützung für vorab importierte „Golden Image“-Disks für virtuelle Maschinen: Statt Images per HTTP herunterzuladen, wird auf vorhandene Images verwiesen, was die Bereitstellung beschleunigt.
- Option, den Ingress-NGINX-Controller im Tenant-Kubernetes-Cluster über einen LoadBalancer bereitzustellen. Der neue Konfigurationswert exposeMethod bietet die Wahl zwischen Proxied und LoadBalancer.
- `cpu-allocation-ratio` wird jetzt in den `resourceQuotas` der Tenants berücksichtigt. Ressourcenangaben verwenden in Konfiguration und Ressourcen-Logs dieselben Einheiten und Umrechnungen.
- Bessere Unterstützung für Java-Anwendungen: Heap-Parameter werden aus Memory-Requests und -Limits berechnet. Dafür gibt es eine neue Hilfsfunktion.

Alle Änderungen: [v0.33.0](https://github.com/cozystack/cozystack/releases/tag/v0.33.0).

Vielen Dank an alle Mitwirkenden.

## v0.32.0: cozypkg, PostgreSQL-Backups, cozy.local nicht mehr fest kodiert

Das Release verändert die Plattformverwaltung grundlegend: Als Standard-Paketmanager löst cozypkg jetzt Helm ab. Außerdem lässt sich die CPU-Zuteilung granular in vCPUs angeben, und Registry Mirrors werden auf Tenant-Ebene unterstützt. Das Update enthält zahlreiche Fixes, modernisiert Kernkomponenten wie Flux und Cilium und bringt neue Dokumentation zur Installation über OCI.

## Wichtige Funktionen und Verbesserungen

**cozypkg.** Ein komfortabler Wrapper um Helm und Flux CD für die lokale Entwicklung. [Artikel](/de/blog/2025/06/cozypkg-lokale-entwicklung-helm-flux/) über das neue Tool.

```
Usage:
 cozypkg [command]

Available Commands:
 apply       Upgrade or install the HelmRelease and sync status
 completion  Generate shell‑autocomplete script
 delete      Uninstall the release
 diff        Show live vs desired manifests
 get         Get one or many HelmReleases
 list        List HelmReleases
 reconcile   Trigger Flux reconciliation
 resume      Resume a suspended release
 show        Render manifests (helm template)
 suspend     Suspend a release (Flux stops reconciling)
 version     Print version
```

**HelmRelease-Reconciler für Systemkomponenten.** Wichtige Konfigurationsänderungen werden automatisch überwacht, sodass Systemanwendungen sofort aktualisiert werden, wenn sich relevante Einstellungen ändern.

**Container Registry Mirrors für Tenant-Kubernetes-Cluster.** *containerd* lässt sich für Tenant-Kubernetes-Cluster konfigurieren.

Weitere Funktionen und Verbesserungen

- Nutzer können CPU-Requests in vCPUs angeben.
- Alle untergeordneten Objekte von Anwendungen erhalten einheitliche Labels, damit `WorkloadMonitors` sie verfolgen können. Das ermöglicht ein genaueres Tracking und Monitoring der Ressourcennutzung.
- Neue Option cluster-domain; `cozy.local` ist nicht mehr fest kodiert. Bisher nutzten Management-Cluster unsere eigene, vom Standard abweichende Domain, während das Kubernetes-DNS standardmäßig `cluster.local` verwendete. Für Anwendungen, die die Standard-Domain erwarten, waren deshalb ständig Workarounds nötig. Diese Kompatibilitätsprobleme sind damit beseitigt.
- RBAC-Regeln für Port-Forwarding in KubeVirt, um per *virtctl* SSH zu nutzen.
- Erfassung von Events und Audit-Logs ist jetzt implementiert.
- Neue Funktionen für [Backup](https://cozystack.io/docs/) und [Restore](https://cozystack.io/docs/) in PostgreSQL.
- Refactoring der Ressourcen in Managed-Anwendungen.
- `extraArgs` von VMAgent lassen sich anpassen.
- Neues Tool *cozyreport*, das in der CI Reports sammelt. Alle Diagnoseinformationen bleiben jetzt als Build-Artefakte erhalten.

## Komponenten-Updates

- cozykpg eingeführt, Update auf v1.1.0.
- flux-operator auf 0.23.0, Flux auf 2.6.x aktualisiert.
- Talos Linux auf v1.10.3 aktualisiert.
- Cilium auf v1.17.4 aktualisiert.
- MetalLB auf v0.15.2 aktualisiert.
- Kube-OVN auf v1.13.13 aktualisiert.
- cozy-proxy auf v0.2.0 aktualisiert.
- Kafka Operator auf 0.45.1-rc1 aktualisiert.

## Neue Dokumentationsseiten

- [Installationsanleitung für Oracle Cloud Infrastructure](https://cozystack.io/docs/operations/talos/installation/oracle-cloud/).
- [Cluster-Konfiguration mit talosctl](https://cozystack.io/docs/operations/talos/configuration/talosctl/).
- [Container Registry Mirrors für Tenant-Kubernetes-Cluster konfigurieren](https://cozystack.io/docs/operations/talos/configuration/air-gapped/#5-configure-container-registry-mirrors-for-tenant-kubernetes).
- [Strategien für das Anwendungsmanagement und verfügbare Versionen der Managed-Anwendungen](https://cozystack.io/docs/guides/applications/).
- [etcd-Zustand bereinigen](https://cozystack.io/docs/operations/faq/#how-to-clean-up-etcd-state).

Alle Änderungen: [v0.32.0](https://github.com/cozystack/cozystack/releases/tag/v0.32.0), [v0.32.1](https://github.com/cozystack/cozystack/releases/tag/v0.32.1), v0.32.2

Vielen Dank an alle Mitwirkenden, besonders an die neuen:

- [@kevin880202](https://github.com/kevin880202) mit dem ersten Beitrag in [#948](https://github.com/cozystack/cozystack/pull/948)
- [@mattia-eleuteri](https://github.com/mattia-eleuteri) mit dem ersten Beitrag in [#1027](https://github.com/cozystack/cozystack/pull/1027)

## v0.31: KI-Workloads in Kubernetes, ARM-Support, Air Gap und intelligenteres Autoscaling

v0.31 gibt KI/ML-Workloads mit nativer NVIDIA-GPU-Unterstützung in Kubernetes deutlichen Auftrieb: Nutzer können GPU-beschleunigte Anwendungen wie Stable Diffusion bereitstellen. Außerdem bringt das Update ARM64-Support als Beta, intelligenteres Autoscaling per VerticalPodAutoscaler und eine bessere VM-Verwaltung mit exportierbaren KubeVirt-Maschinen, alles gestützt durch einen robusteren Release-Zyklus.

## Wichtige Funktionen und Verbesserungen

**Talos in Air-Gapped-Umgebungen installieren.** Wir haben eine neue [Anleitung](https://cozystack.io/docs/operations/talos/configuration/air-gapped/) für die Konfiguration und das Bootstrapping von Talos-Linux-Clustern in Air-Gapped-Umgebungen geschrieben.

**GPU-Support für Tenant-Kubernetes-Cluster.** Cozystack integriert jetzt den NVIDIA GPU Operator für Tenant-Kubernetes-Cluster. Plattformnutzer können damit GPU-gestützte KI/ML-Workloads in VMs und Kubernetes-Clustern ausführen.

So nutzen Sie die Funktion:

- [Dokumentation](https://cozystack.io/docs/operations/virtualization/gpu/) für VMs.
- [CNCF-Webinar on demand](https://www.youtube.com/watch?v=S__h_QaoYEk), das den GPU-Support am Beispiel von Stable Diffusion in Cozystack zeigt.

**ARM-Support als Beta (Cross-Architecture-Builds).** Das Build-System von Cozystack wurde so umgebaut, dass es Binaries und Container-Images für mehrere Architekturen erzeugt. Damit ist der Weg frei für den Betrieb von Cozystack auf ARM64-Servern. Zu den Änderungen gehören Verbesserungen am Makefile und Multi-Arch-Builds der Docker-Images.

**Ausbau des VerticalPodAutoscaler (VPA).** Der VerticalPodAutoscaler ist jetzt für weitere Cozystack-Komponenten aktiviert, um die Ressourcenabstimmung zu automatisieren. Konkret kam VPA für die Control Planes der Tenant-Kubernetes-Cluster, das Cozystack-Dashboard und den Cozystack-etcd-operator hinzu. Alle Cozystack-Komponenten mit aktiviertem VPA passen ihre CPU- und Memory-Requests automatisch an die tatsächliche Nutzung an, was die Stabilität von Plattform und Anwendungen verbessert.

Weitere Funktionen und Verbesserungen

- Die Gateway-API-Unterstützung in Cilium ist jetzt aktiviert und ermöglicht erweitertes L4/L7-Routing über die Kubernetes Gateway API.
- Cozystack erlaubt jetzt eigene, vom Nutzer vorgegebene Parameter in der Cilium-Konfiguration des Tenant-Clusters.
- Tenant HelmRelease Reconcile Controller. Dieser Controller überträgt Konfigurationsänderungen auf die Tenant-Workloads und sorgt dafür, dass jedes in einem Tenant definierte HelmRelease mit den Plattform-Updates synchron bleibt. Das macht die Bereitstellung von Managed-Anwendungen in Cozystack zuverlässiger.
- Konfigurierbares CPU-Overcommit in KubeVirt. Das CPU-Allocation-Ratio in KubeVirt (also wie stark virtuelle CPUs gegenüber physischen überbucht werden) lässt sich jetzt über den Wert `cpu-allocation-ratio` in der Cozystack-ConfigMap einstellen. Cozystack-Administratoren können das CPU-Overcommit für VMs damit so abstimmen, dass Performance und Dichte im Gleichgewicht bleiben.
- Export von KubeVirt-VMs. Cozystack erlaubt jetzt den Export virtueller KubeVirt-Maschinen. Die Funktion basiert auf der VirtualMachineExport-Fähigkeit von KubeVirt und ermöglicht Snapshots oder Backups von VM-Images.
- Unterstützung verschiedener Storage Classes für virtuelle Maschinen. Die Anwendung virtual-machine (ab Version 0.9.2) erlaubt es, für die Systemdisk einer VM eine beliebige `StorageClass` zu wählen, statt sich auf ein fest kodiertes PVC zu verlassen. Siehe die Werte `systemDisk.storage` und `systemDisk.storageClass` in der [Konfiguration der Anwendung](https://cozystack.io/docs/).

## Neue Dokumentationsseiten

- [Talos in einer Air-Gapped-Umgebung installieren](https://cozystack.io/docs/operations/talos/configuration/air-gapped/): neue Anleitung für die Konfiguration und das Bootstrapping von Talos-Linux-Clustern in Air-Gapped-Umgebungen.
- [Cozystack Bundles](https://cozystack.io/docs/guides/bundles/): neue Seite im Lernbereich, die erklärt, wie Cozystack-Bundles funktionieren und wie man das passende Bundle auswählt.
- [Referenz der Managed-Anwendungen](https://cozystack.io/docs/): eine Reihe neuer Seiten in der Dokumentation, die die Anwendungsdokumentation aus dem Cozystack-Dashboard spiegeln.
- LINSTOR-Netzwerk: Anleitungen zum [Einrichten eines dedizierten Netzwerks für LINSTOR](https://cozystack.io/docs/operations/storage/dedicated-network/) und zur [Netzwerkkonfiguration für verteilten Storage in Multi-Datacenter-Setups](https://cozystack.io/docs/operations/stretched/linstor-dedicated-network/).

## Neuer Release-Lebenszyklus

Die Cozystack-Community hat eine neue Release-Policy für die Plattform eingeführt. Der neue Lebenszyklus soll Kunden, die Cozystack in geschäftskritischen Umgebungen betreiben, mehr Stabilität und Planbarkeit bieten.

- Schrittweise Releases mit Alpha, Beta und Release Candidates: Cozystack veröffentlicht vor einem stabilen Release künftig Vorabversionen (Alpha, Beta, Release Candidates). Für v0.31.0 hat das Team vor dem eigentlichen Release drei Release Candidates herausgebracht. So bleibt mehr Zeit für Tests und Feedback, bevor ein Release als stabil gilt.
- Längerer Support über Patch-Versionen: Nach dem ersten Release vX.Y.0 wird ein langlebiger Branch release-X.Y angelegt, in den Fixes zurückportiert werden. Mit dem Release von 0.31.0 verfolgt beispielsweise der Branch release-0.31 die Patch-Fixes (0.31.x). So erhalten Cozystack-Nutzer zeitnah Patch-Releases und Updates bei minimalem Risiko.

Für diese Änderungen haben wir unsere CI/CD-Workflows neu aufgebaut und Automatisierung eingeführt, die Backports automatisch erstellt. Mehr zur Umsetzung lesen Sie im Abschnitt [Development](https://github.com/cozystack/cozystack/blob/main/docs/release.md).

Alle Änderungen: [v0.31.2](https://github.com/cozystack/cozystack/releases/tag/v0.31.2), [v0.31.1](https://github.com/cozystack/cozystack/releases/tag/v0.31.1), [v0.31.0](https://github.com/cozystack/cozystack/tree/v0.31.0)

Vielen Dank an alle Mitwirkenden, besonders an die neuen:

- [@etoshutka](https://github.com/etoshutka) mit dem ersten Beitrag in [#872](https://github.com/cozystack/cozystack/pull/872)
- [@dtrdnk](https://github.com/dtrdnk) mit dem ersten Beitrag in [#896](https://github.com/cozystack/cozystack/pull/896)
- [@zdenekjanda](https://github.com/zdenekjanda) mit dem ersten Beitrag in [#924](https://github.com/cozystack/cozystack/pull/924)
- [@gwynbleidd2106](https://github.com/gwynbleidd2106) mit dem ersten Beitrag in [#962](https://github.com/cozystack/cozystack/pull/962)

Von [Timur Tukaev](https://medium.com/@tym83) am [9. Juli 2025](https://medium.com/p/ae241c739b23).

[Kanonischer Link](https://medium.com/@tym83/cozystack-v0-31-0-33-ae241c739b23)

Exportiert von [Medium](https://medium.com) am 11. Mai 2026.
