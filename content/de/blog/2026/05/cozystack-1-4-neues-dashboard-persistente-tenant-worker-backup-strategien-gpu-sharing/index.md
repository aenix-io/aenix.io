---
title: "Cozystack 1.4: Neues Dashboard, persistente Tenant-Worker, Backup-Strategien und anteiliges GPU-Sharing"
description: "Cozystack v1.4.0 ist verfügbar. Das Release erschien am 19. Mai 2026 und bündelt alle Fixes aus der Patch-Reihe v1.3.1 bis v1.3.3."
date: "2026-05-28"
author: "Timur Tukaev"
type: "announcement"
topics: ["Cozystack", "Kubernetes", "KubeVirt", "GPU", "Multi-tenancy", "Talos"]
language: "de"
cover_image: "https://cdn-images-1.medium.com/max/1200/0*iP1z9ZdvJiK8HrYN.jpg"
source_url: "https://blog.aenix.io/cozystack-1-4-0c5e399a7308"
hreflang_en: /blog/2026/05/cozystack-1-4-new-dashboard-ui-persistent-tenant-workers-backup-strategies-and-fractional-gpu-sharing/
---

---

### Cozystack 1.4: Neues Dashboard, persistente Tenant-Worker, Backup-Strategien und anteiliges GPU-Sharing

> **Anmerkung der Redaktion (September 2026):** Diese Release-Ankündigung ist so erhalten, wie sie am 28. Mai 2026 veröffentlicht wurde. Cozystack ist seither weitergegangen — das aktuelle Release ist v1.6.2. Für Neueres siehe die [Cozystack-Releases](https://github.com/cozystack/cozystack/releases) und die [aktuelle Dokumentation](https://cozystack.io/docs/). Die Dokumentationslinks unten verweisen bewusst auf die v1.4-Dokumentation, die das Release im Auslieferungszustand beschreibt.

Cozystack v1.4.0 ist verfügbar. Das Release wurde am 19. Mai 2026 veröffentlicht und bündelt alle Fixes aus der Patch-Reihe v1.3.1 bis v1.3.3.

Dieser Zyklus konzentriert sich auf den Betrieb von Cozystack als Produktivplattform: eine schnellere Dashboard-Architektur, langlebigere Worker für Tenant-Kubernetes, klarere Ressourcen-Dimensionierung, Backup-Abläufe für Managed Applications, bessere GPU-Auslastung, sichereres Veröffentlichen über Ingress und weniger Race Conditions bei Erstinstallation und Upgrade.

![image](https://cdn-images-1.medium.com/max/800/0*iP1z9ZdvJiK8HrYN.jpg)

### Die wichtigsten Neuerungen

#### Neues, schemagetriebenes Dashboard

Cozystack 1.4 liefert ein neu geschriebenes Dashboard aus dem Projekt `cozystack/cozystack-ui` aus. Der bisherige Stack aus `openapi-ui` plus BFF ist durch ein Frontend auf Basis von React 19 und TypeScript ersetzt, das direkt mit der Kubernetes-API spricht.

![Das neue Cozystack-Dashboard](https://cdn-images-1.medium.com/max/800/1*f-TvLhA7npWzcpBj-tDVtg.png)

Die neue Architektur entfernt einen zusätzlichen Prozess und eine Proxy-Schicht, während das Dashboard schemagetrieben bleibt. Außerdem verbessert sie mehrere alltägliche Abläufe:

- Der VNC-Zugriff auf virtuelle Maschinen verwendet jetzt dynamische WebSocket-URLs statt deployment-spezifischer Annahmen über `localhost`.
- Das Dashboard kann `ApplicationDefinition`-Ressourcen für Anwendungskatalog und Marketplace auslesen.
- Betreiber können Branding zur Laufzeit über eine ConfigMap einspielen — Logos, Namen und Markenfarben —, ohne das Image neu zu bauen.
- Bestehende Lesezeichen auf `/openapi-ui/*` werden auf die neue Konsole umgeleitet.
- Das Paket heißt durchgängig `cozy-dashboard`.

Das neue Dashboard zeigt den IaaS-Marketplace, der von ApplicationDefinition-Ressourcen gespeist wird.

![Der IaaS-Marketplace im neuen Cozystack-Dashboard](https://cdn-images-1.medium.com/max/800/1*U2vqZnOabjKec3r7mBm__w.png)

Der PaaS-Katalog umfasst Managed Databases, Messaging, Objektspeicher, Secrets, Suche und Inference-Dienste.

Das Ausrollen eines Managed-Kubernetes-Clusters läuft über dasselbe schemagetriebene Formular, wobei Cluster-Addons deklarativ zur Verfügung stehen.

Ein Managed-HTTP-Cache-Deployment, bei dem PVC-Größe, Storage-Klasse, Endpunkte und Ressourcenparameter vollständig aus dem Anwendungsschema erzeugt werden.

Dokumentation:

- [Anwendungen über das neue Dashboard ausrollen](https://cozystack.io/docs/v1.4/getting-started/deploy-app/)
- [ApplicationDefinition-Referenz](https://cozystack.io/docs/v1.4/cozystack-api/application-definitions/)
- [White-Labeling und Branding zur Laufzeit](https://cozystack.io/docs/v1.4/operations/configuration/white-labeling/)

#### Persistenter Worker-Speicher für Tenant-Kubernetes

Die Worker-VMs von Tenant-Kubernetes nutzen jetzt PVC-gestützte persistente Disks über die KubeVirt-`dataVolumeTemplates`. Bisher lief der Worker auf flüchtigem `emptyDisk`-Speicher, wodurch Kubelet-Zertifikate, kubeconfig und der containerd-Zustand nach einem VM-Neustart verloren gingen. Ein neu gestarteter Worker konnte damit seine Identität verlieren und musste von Hand wiederhergestellt werden.

In v1.4 übersteht der Worker-Zustand VM-Neustarts. Das NodeGroup-Feld `ephemeralStorage` heißt jetzt `diskSize`, und eine neue Option `storageClass` je NodeGroup lässt Betreiber steuern, wo die Worker-Disks bereitgestellt werden. Migration 39 schreibt Altwerte beim Upgrade automatisch um.

Bestehende Tenant-Cluster rollen ihre Worker-Nodes einmalig neu aus, weil sich das KubeVirt-Machine-Template ändert. Betreiber sollten Kapazität für diesen Rollout einplanen und die Storage-Klasse bewusst wählen. Für viele Worker-Disk-Szenarien empfiehlt sich die StorageClass `local`, weil Worker-Disks Neustarts nun überstehen und keine DRBD-Replikationssemantik brauchen.

Dokumentation: [Konfiguration von Tenant-Kubernetes](https://cozystack.io/docs/v1.4/kubernetes/).

#### Ressourcen-Presets als Instance Types

Ressourcen-Presets folgen jetzt einer Cloud-üblichen Systematik `<series>.<size>`. Das neue Modell deckt fünf Serien mit unterschiedlichem CPU-zu-Speicher-Verhältnis ab:

- `t1` für sehr kleine und speicherarme Workloads.
- `c1` für rechenlastig ausgewogene Workloads.
- `s1` für Standarddienste wie Proxies und Caches.
- `u1` für universelle Workloads wie Datenbanken und Messaging.
- `m1` für speicherhungrige Workloads wie Suche und Analytik.

Jede Serie umfasst acht Größen von `nano` bis `4xlarge`, womit Betreibern und Tenants insgesamt 40 Presets zur Verfügung stehen.

Die bisherigen flachen Namen wie `small`, `medium` und `large` werden weiterhin als veraltete Aliase akzeptiert. Bestehende Deployments behalten dieselben CPU- und Speicherwerte, während Migration 39 die gespeicherten Werte auf die neuen Namen umschreibt. Die Cozystack-API gibt jetzt Deprecation-Warnungen aus, wenn App-CRs noch die alten Preset-Namen verwenden.

Dokumentation: [Ressourcen-Presets](https://cozystack.io/docs/v1.4/guides/resource-management/).

#### Deklarative Backup-Strategien für Managed Applications

Der Backup-Strategy-Controller unterstützt jetzt PostgreSQL, MariaDB, ClickHouse und FoundationDB. Tenants definieren eine Strategie zusammen mit den Ressourcen `BackupClass`, `Plan`, `BackupJob` und `RestoreJob`, während der Controller die backend-spezifischen Objekte für den jeweiligen Managed Service zusammensetzt.

Die neuen Strategien unterstützen geplante Backups, Ad-hoc-Snapshots, In-place-Restores und Restore-to-copy-Abläufe gegen S3-kompatiblen Objektspeicher. Zugangsdaten werden über Kubernetes-Secrets referenziert statt inline hinterlegt, und die RBAC des Controllers ist so eingeschränkt, dass er ausschließlich auf explizit referenzierte Secrets zugreifen kann.

Das erweitert die bestehenden Backup-Abläufe für VMInstance und VMDisk und bringt Cozystack der vollständigen Backup-Abdeckung über den gesamten Katalog der Managed Applications näher.

Dokumentation:

- [Backup-Konfiguration für Managed Apps](https://cozystack.io/docs/v1.4/operations/services/managed-app-backup-configuration/)
- [Backup und Wiederherstellung von Anwendungen](https://cozystack.io/docs/v1.4/applications/backup-and-recovery/)

#### Anteiliges GPU-Sharing mit HAMi

Cozystack 1.4 ergänzt `hami` als optionales Systempaket. HAMi v2.8.1, ein CNCF-Sandbox-Projekt, ermöglicht anteiliges GPU-Sharing für Tenant-Kubernetes-Cluster.

Mit aktiviertem HAMi können Tenant-Workloads Ressourcen wie `nvidia.com/gpu`, `nvidia.com/gpumem` und `nvidia.com/gpucores` anfordern. Damit teilen sich mehrere Pods eine physische NVIDIA-GPU bei expliziter Aufteilung von Speicher und Rechenleistung. Die Integration umfasst Device-Plugin, Scheduler-Extender, Mutating Webhook und RuntimeClass. Sie wird über den Schalter `hami.enabled` zugeschaltet und setzt den NVIDIA GPU Operator voraus.

Ein Kompatibilitätshinweis ist dabei wichtig: Die Compute-Isolation von HAMi setzt Container-Images mit einer glibc älter als 2.34 voraus. Die Speicherbegrenzung funktioniert breit, Alpine- und musl-basierte Images werden für die HAMi-core-Compute-Isolation jedoch nicht unterstützt.

Dokumentation: [GPU-Sharing mit HAMi](https://cozystack.io/docs/v1.4/kubernetes/gpu-sharing/).

#### Ein Schalter für PROXY-Protokoll und Hairpin-NAT

Die neue Option `publishing.proxyProtocol: true` aktiviert das PROXY-Protokoll am Host-ingress-nginx und rollt Ouroboros aus, um das damit verbundene Hairpin-NAT-Problem zu lösen.

Ist das PROXY-Protokoll aktiv, kann clusterinterner Verkehr an die eigenen öffentlichen Hostnamen des Clusters andernfalls ohne den erforderlichen PROXY-Header bei ingress-nginx ankommen. Ouroboros korrigiert diesen Pfad über CoreDNS-Rewrite-Snippets. Cozystack stellt es sowohl als Systempaket auf Host-Ebene als auch als Addon je Tenant über `addons.ouroboros.enabled` bereit.

Das Standardverhalten bleibt unverändert. Cluster, die das PROXY-Protokoll nicht aktivieren, erhalten keine neuen Ressourcen.

Dokumentation: [PROXY-Protokoll und Hairpin-NAT](https://cozystack.io/docs/v1.4/networking/hairpin-proxy-protocol/).

#### Besseres HelmRelease-Verhalten und zuverlässigerer Tenant-Bootstrap

Der Cozystack-Operator stellt die Stellschrauben für die HelmRelease-Erzeugung jetzt als Operator-Flags und Chart-Werte bereit, darunter Interval, Retry-Interval, Install-Timeout, Upgrade-Timeout und Max History.

Die Retry-Strategie nutzt jetzt `RetryOnFailure` und vermeidet damit Deinstallations- und Neuinstallationsschleifen, wenn eine Erstinstallation langsam läuft. Anwendungen können zudem je Application ein eigenes Install- und Upgrade-Timeout über die Annotation `release.cozystack.io/helm-install-timeout` setzen. Tenant-Kubernetes nutzt das, um Kamaji beim Kaltstart genug Zeit zu geben, und behebt damit den wiederkehrenden Fehlerfall `wait hr/tenant-kubernetes timeout`.

Dokumentation:

- [Betrieb von Tenant-Kubernetes](https://cozystack.io/docs/v1.4/kubernetes/)
- [Fehlersuche in Flux CD](https://cozystack.io/docs/v1.4/operations/troubleshooting/flux-cd/)

#### Kubelet-Reservierungen für Worker-Nodes

Worker-Nodes in Tenant-Kubernetes erhalten jetzt automatisch berechnete Kubelet-Reservierungen für CPU und Arbeitsspeicher. Das schützt das Kubelet selbst davor, unter Speicherdruck abgeräumt zu werden, und macht die Entscheidungen von Scheduler und Autoscaler genauer.

Die Annotationen des Cluster-Autoscalers melden jetzt die zuteilbaren (allocatable) CPU- und Speicherwerte statt der Rohwerte, sodass Autoscaling-Entscheidungen dem entsprechen, was Kubernetes tatsächlich schedulen kann.

Dokumentation: [Betrieb von Tenant-Kubernetes](https://cozystack.io/docs/v1.4/kubernetes/).

### Außerdem in v1.4.0

- PostgreSQL-Parameter sind jetzt typisiert und durch eine Denylist gegen gefährliche Werte wie `archive_command`, `restore_command`, `ssl_passphrase_command`, `dynamic_library_path` und `*_preload_libraries` abgesichert.
- Keycloak erhält Unterstützung für `extraEnv` und die Anpassung des Nutzerprofils.
- Die etcd-Anwendung stellt über den aktualisierten etcd-operator S3-Backup-Zeitpläne bereit.
- Die `upgradeCRDs`-Policy ist jetzt je Paket konfigurierbar.
- `cozyreport` sammelt jetzt Flux, cert-manager, Host-Kontext, Anwendungsressourcen und eine übergeordnete `summary.txt`.
- Der SeaweedFS-Tenant-Ingress begrenzt einzelne PUT-Requests auf 5 GB.
- Für Grafana und VictoriaMetrics kamen GPU-Observability-Dashboards und Recording Rules hinzu.
- Die Portfilterung für VMInstance ist im neuen cozy-proxy-v0.3.0-Modus korrigiert.
- LINSTOR CSI ist aktualisiert, mit Fixes für Dual-Attach- und transiente Demotion-Fehler.

Dokumentation:

- [PostgreSQL-Konfiguration](https://cozystack.io/docs/v1.4/applications/postgres/)
- [Keycloak und OIDC](https://cozystack.io/docs/v1.4/operations/oidc/)
- [Konfiguration des etcd-Dienstes](https://cozystack.io/docs/v1.4/operations/services/etcd/)
- [Konfiguration des SeaweedFS-Dienstes](https://cozystack.io/docs/v1.4/operations/services/seaweedfs/)
- [Monitoring-Dashboards](https://cozystack.io/docs/v1.4/operations/services/monitoring/dashboards/)
- [Fehlersuche und Diagnose](https://cozystack.io/docs/v1.4/operations/troubleshooting/)

### Plattformkomponenten

Cozystack 1.4 aktualisiert die Plattformbasis und mehrere Kernpakete:

- Talos: v1.12.7 auf v1.13.0
- cert-manager: v1.19.3 auf v1.20.2
- Cilium: v1.19.1 auf v1.19.3
- NVIDIA GPU Operator: v25.3.0 auf v26.3.1
- etcd-operator: v0.4.2 auf v0.4.3
- KubeVirt: v1.6.3 auf v1.8.2
- cozy-proxy: v0.2.0 auf v0.3.0
- linstor-csi: v1.10.6
- HAMi: v2.8.1
- Ouroboros: v0.7.2

Dokumentation:

- [Überblick über den Plattform-Stack](https://cozystack.io/docs/v1.4/guides/platform-stack/)
- [Upgrade-Leitfaden](https://cozystack.io/docs/v1.4/operations/cluster/upgrade/)

### Hinweise zum Upgrade

Die meisten Betreiber können ohne manuelle Konfigurationsänderungen auf v1.4.0 aktualisieren. Cozystack behält für bestehende Workloads dieselbe API-Oberfläche, und die plattforminternen Migrationen erledigen die wesentlichen Wertumschreibungen.

Einige betriebliche Details sollten Sie einplanen:

- Die Worker von Tenant-Kubernetes rollen einmalig durch. Die Migration von `ephemeralStorage` auf `diskSize` läuft automatisch, bestehende Worker-VMs werden aber nacheinander ersetzt, weil sich das KubeVirt-Machine-Template ändert.
- KubeVirt-VMs, die schon vor dem Plattform-Upgrade liefen, brauchen danach einen Kaltstart. Der KubeVirt-Sprung von v1.6.3 auf v1.8.2 überquert eine Upstream-Änderung an QEMU, und die Live-Migration von VMs aus der Zeit vor dem Upgrade kann fehlschlagen. Nach dem Upgrade angelegte VMs sind nicht betroffen.
- Die alten Preset-Namen funktionieren weiterhin als veraltete Aliase, neue Deployments sollten jedoch die Namen im Schema `<series>.<size>` verwenden.
- PostgreSQL-Deployments, die Parameter der Denylist verwenden, lassen sich nicht mehr rendern, solange diese Parameter nicht entfernt sind.
- cert-manager v1.20 ändert die Standard-UID/GID im Container auf 65532. Betreiber mit eigener PodSecurityPolicy, mit imagePullSecrets oder mit Zertifikaten, die über das Dateisystem eingebunden und auf die bisherige UID festgelegt sind, sollten ihre Konfiguration prüfen.

Dokumentation:

- [Upgrade-Leitfaden](https://cozystack.io/docs/v1.4/operations/cluster/upgrade/)
- [Betrieb von Tenant-Kubernetes](https://cozystack.io/docs/v1.4/kubernetes/)
- [Betrieb der Virtualisierung](https://cozystack.io/docs/v1.4/virtualization/)
- [Ressourcenverwaltung](https://cozystack.io/docs/v1.4/guides/resource-management/)
- [PostgreSQL-Konfiguration](https://cozystack.io/docs/v1.4/applications/postgres/)

### Dokumentation, die Sie kennen sollten

- [Neues Dashboard und Anwendungskatalog](https://cozystack.io/docs/v1.4/getting-started/deploy-app/)
- [ApplicationDefinition-Referenz](https://cozystack.io/docs/v1.4/cozystack-api/application-definitions/)
- [White-Labeling und Branding zur Laufzeit](https://cozystack.io/docs/v1.4/operations/configuration/white-labeling/)
- [Konfiguration von Tenant-Kubernetes](https://cozystack.io/docs/v1.4/kubernetes/)
- [Ressourcen-Presets](https://cozystack.io/docs/v1.4/guides/resource-management/)
- [Backup-Konfiguration für Managed Apps](https://cozystack.io/docs/v1.4/operations/services/managed-app-backup-configuration/)
- [Backup und Wiederherstellung von Anwendungen](https://cozystack.io/docs/v1.4/applications/backup-and-recovery/)
- [GPU-Sharing mit HAMi](https://cozystack.io/docs/v1.4/kubernetes/gpu-sharing/)
- [PROXY-Protokoll und Hairpin-NAT](https://cozystack.io/docs/v1.4/networking/hairpin-proxy-protocol/)
- [Upgrade-Leitfaden](https://cozystack.io/docs/v1.4/operations/cluster/upgrade/)
- [Cozystack-v1.4-Dokumentation](https://cozystack.io/docs/v1.4/)

### Dank an alle Mitwirkenden

Dieses Release ist geprägt von der Arbeit von [@androndo](https://github.com/androndo), [@Arsolitt](https://github.com/Arsolitt), [@dislogical](https://github.com/dislogical), [@dvc](https://github.com/dvc), [@IvanHunters](https://github.com/IvanHunters), [@kvaps](https://github.com/kvaps), [@lexfrei](https://github.com/lexfrei), [@matthieu-robin](https://github.com/matthieu-robin), [@mattia-eleuteri](https://github.com/mattia-eleuteri), [@myasnikovdaniil](https://github.com/myasnikovdaniil), [@sircthulhu](https://github.com/sircthulhu) und [@tym83](https://github.com/tym83).

Ein besonderes Willkommen an die erstmaligen Mitwirkenden [@dvc](https://github.com/dvc) und [@dislogical](https://github.com/dislogical). Vielen Dank an alle.

### Release-Links

- [Cozystack v1.4.0 auf GitHub](https://github.com/cozystack/cozystack/releases/tag/v1.4.0)
- [Vollständiges Changelog v1.3.0 bis v1.4.0](https://github.com/cozystack/cozystack/compare/v1.3.0...v1.4.0)
- [Cozystack UI](https://github.com/cozystack/cozystack-ui)
- [HAMi](https://github.com/Project-HAMi/HAMi)
- [Ouroboros](https://github.com/lexfrei/ouroboros)

### Community

- GitHub: [cozystack/cozystack](https://github.com/cozystack/cozystack)
- Telegram: [@cozystack](https://t.me/cozystack)
- Slack: [#cozystack](https://kubernetes.slack.com/archives/C06L3CPRVN1) im Kubernetes-Workspace ([Einladung](https://slack.kubernetes.io/))
- [Kalender der Community-Meetings abonnieren](https://zoom-lfx.platform.linuxfoundation.org/meetings/cozystack)
- [Meetings dem eigenen Kalender hinzufügen](https://webcal.prod.itx.linuxfoundation.org/lfx/lfsixxnFWxbvsyEuC2)

---

Dieser Beitrag ist eine deutsche Fassung des Artikels [Cozystack 1.4: New Dashboard UI, Persistent Tenant Workers, Backup Strategies, and Fractional GPU Sharing](https://blog.aenix.io/cozystack-1-4-0c5e399a7308), zuerst erschienen bei [Ænix](https://blog.aenix.io) auf Medium.
