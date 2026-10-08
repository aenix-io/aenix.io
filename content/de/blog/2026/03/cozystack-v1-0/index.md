---
title: "Cozystack v1.0"
description: "Cozystack v1.0 und v1.1: paketbasierte Architektur, Cozystack Operator, Backups mit Velero, MongoDB und OpenBAO sowie neue Installationsoptionen."
slug: "cozystack-v1-0"
date: "2026-03-16"
cover_image: "/img/blog/covers/de/cozystack-v1-0.jpg"
author: "Timur Tukaev"
type: "announcement"
topics: ["Kubernetes", "Cozystack", "KubeVirt", "Cilium", "GPU", "Hosting"]
language: "de"
hreflang_en: "/blog/2026/03/cozystack-v1-0/"
---

---

### Cozystack v1.0 und v1.1: paketbasierte Architektur, Cozystack Operator, Velero Strategy Controller, Unterstützung für MongoDB und OpenBAO

Das letzte Release der Plattform war 0.41. Umso überraschender war es, als sich das nächste Release, 0.42, als Antwort auf die ultimative Frage nach dem Leben, dem Universum und dem ganzen Rest entpuppte. Es hatten sich schlicht zu viele grundlegende Änderungen angesammelt, so viele, dass 0.42 in 1.0 umbenannt werden musste.

Mit dem Release v1.0.0 vollzieht Cozystack einen grundlegenden Architekturwechsel. Wir haben ein Paketsystem auf Basis von FluxCD und OCI-Artefakten gebaut, vergleichbar mit apt für Debian/Ubuntu, nur eben für Kubernetes (siehe „Paketbasiertes Deployment“ weiter unten). Damit konnten wir einen ganz neuen Ansatz einführen: **Build Your Own Platform** (BYOP).

![image](/img/blog/medium/cozystack-v1-0/cover.jpg)

> **Was ist Cozystack**

> Cozystack ist eine umfassende Open-Source-Plattform zum Aufbau von Bare-Metal-Clouds, mit der sich Managed Kubernetes, Database-as-a-Service (DBaaS), Application-as-a-Service (AaaS) und virtuelle Maschinen auf Basis von KubeVirt schnell bereitstellen lassen. Kafka, MongoDB, PostgreSQL, Cilium, Grafana, VictoriaMetrics und weitere Services lassen sich damit per Mausklick ausrollen. Auch GPU-Workloads in virtuellen Maschinen und K8s-Clustern werden unterstützt. Cozystack ist ein CNCF-Sandbox-Projekt und steht unter der Lizenz Apache 2.0.

Endlich haben wir die alten Bash-Skripte abgelöst, die bisher die Logik der Plattform abbildeten, und durch einen vollwertigen Operator ersetzt. Dieser Operator installiert nun sämtliche Systemkomponenten der Plattform.

Die gesamte Plattformlogik dreht sich jetzt [um zwei CRDs](https://cozystack.io/docs/v1.0/guides/concepts/#packagesource-and-package): Package und PackageSource.

- **PackageSource** definiert die Quelle eines Pakets, indem es direkt auf ein Git- oder OCI-Repository verweist.
- **Package** drückt den Wunsch des Benutzers aus, ein bestimmtes Paket zu installieren.

Beide Ressourcen sind cluster-weit gültig (also an keinen bestimmten Namespace gebunden) und lassen sich direkt über cozypkg, kubectl oder das Helm-Chart der Plattform verwalten.

Der neue Ansatz macht Installation, Anpassung und Verwaltung der Plattformkomponenten zuverlässiger, während die Systemlogik einfach und konsistent bleibt.

![image](/img/blog/medium/cozystack-v1-0/02.png)

Sie haben jetzt [zwei Möglichkeiten](https://cozystack.io/docs/v1.0/install/cozystack/):

1. Sie nutzen Cozystack als **fertige Plattform** mit allem vorinstalliert (wie bisher). In diesem Fall installiert das Plattform-Chart alle benötigten Packages automatisch.
2. Sie **bauen Ihr eigenes Cozystack**. In diesem Fall installiert das Plattform-Chart nur die PackageSources für die aktuellen Komponentenversionen, und Sie wählen mit cozypkg die Packages aus, die Sie tatsächlich brauchen, und installieren sie.

Die Installation beginnt immer mit dem **cozystack-operator**. Sobald er läuft, kann der Benutzer das Kernpaket **cozystack-platform** installieren. Danach stehen mehrere Plattformvarianten zur Wahl:

![image](/img/blog/medium/cozystack-v1-0/03.png)

Die Varianten *isp-full*, *isp-full-generic* und *isp-hosted* liefern vollwertige Cozystack-Setups, die auf bestimmte Anwendungsfälle zugeschnitten sind. Bei der Variante *default* werden nur PackageSources installiert, nicht die eigentlichen Packages. Der Benutzer kann dann die verfügbaren Pakete mit cozypkg erkunden, die benötigten auswählen und samt aller Abhängigkeiten installieren. Anders als bei Debian/Ubuntu gibt es Cozystack-Pakete in verschiedenen Ausprägungen. Das Paket `cozystack.networking` beispielsweise, von dem die meisten anderen abhängen, gibt es wahlweise mit kubeovn-cilium, cilium, cilium-kilo oder noop. Noop tut nichts, hilft aber, Abhängigkeiten zu erfüllen, was bei bestehenden Kubernetes-Clustern praktisch ist.

Sie können auch ein eigenes Repository anlegen, es an Cozystack anbinden und Pakete direkt daraus installieren.

Das Paketsystem nutzt jetzt den neuen Source-Watcher-Mechanismus von Flux. Cozystack gehört damit zu den frühen Anwendern der neuen FluxCD-API: Benutzer können eigene Repositories definieren und hosten, ohne eigene Charts bauen zu müssen. Außerdem haben wir das klassische [Henne-Ei-Problem](https://cozystack.io/blog/2025/12/flux-aio-kubernetes-mtls-and-the-chicken-and-egg-problem/) beseitigt (Cozystack installiert alles über Flux, einschließlich CNI und kube-proxy, während Flux selbst ein funktionierendes Netzwerk braucht, um Charts abzurufen). Cozystack stützt sich jetzt auf source-watcher (Teil des eigenständigen Tools flux-aio), der Chart-Quellen automatisch aus Git- oder OCI-Repositories holt, daraus installationsfertige Artefakte baut und diese dann ausrollt.

Damit kommen wir dem, was Cozystack immer sein wollte, einen Schritt näher: ein *gemütlicher*, *flexibler* Tech-Stack, den Sie sich *ganz zu eigen machen* können (weitere Details finden Sie in der [Dokumentation](https://cozystack.io/docs/v1.0/install/)).

Neben diesem grundlegenden Wandel bringt die Version erstmals ein umfassendes Backup-System mit, darunter eine hochgradig erweiterbare API und eine Backup-Implementierung für virtuelle Maschinen [auf Basis von Velero](https://cozystack.io/docs/v1.0/operations/services/velero-backup-configuration/), sowie **Flux-Sharding** für eine bessere Verteilung der Tenant-Ressourcen. Außerdem gibt es erweiterte Monitoring-Funktionen sowie verschiedene Verbesserungen bei Performance und Abläufen für virtuelle Maschinen, Tenant-Verwaltung und Build-Prozesse. Obendrein können Sie jetzt eine vollwertige MongoDB-Datenbank mit Autoscaling, Backups und Fehlertoleranz direkt ab Werk ausrollen.

### Breaking Changes

#### FerretDB entfällt

Wir haben diese Komponente vollständig aus der Plattform entfernt. Eine automatische Migration gibt es nicht. **Sichern Sie Ihre Daten daher vor dem Upgrade, falls Sie FerretDB noch nutzen!**

#### Aus MySQL wird MariaDB

Das Paket „MySQL“ heißt jetzt „MariaDB“; tatsächlich haben wir schon die ganze Zeit den mariadb-operator verwendet.

#### VirtualMachine (simple) ersetzt

Diese Ressource wurde durch zwei separate Ressourcen ersetzt, VMDisk und VMInstance. Damit erhalten Sie eine Kubernetes-nativere und feinere Kontrolle über virtuelle Maschinen.

#### API-Umbenennung: CozystackResourceDefinition → ApplicationDefinition

Für mehr Klarheit und Konsistenz im gesamten Ökosystem wurde die CRD `CozystackResourceDefinition` in `ApplicationDefinition` umbenannt.

Um das Upgrade für bestehende Benutzer zu vereinfachen, liefern wir automatisierte Migrationsskripte mit, die Ihre vorhandenen Ressourcen in das neue Format überführen.

#### Paketbasiertes Deployment

Dieses Release markiert einen deutlichen Wandel darin, wie die Plattform Deployments verwaltet. Wir haben uns von klassischen HelmRelease-Bündeln verabschiedet und setzen stattdessen auf Package-Ressourcen, die nun direkt vom **cozystack-operator** orchestriert werden.

Folgende Änderungen wurden umgesetzt:

- Die Datei *values.yaml* wurde komplett neu strukturiert und bietet nun umfassende Konfigurationsmöglichkeiten. Sie unterstützt vollständig Networking, Publishing, Authentifizierung, Scheduling, Branding und Ressourcenverwaltung.
- Mit *values-isp-full.yaml* und *values-isp-hosted.yaml* gibt es spezialisierte Konfigurationen für unterschiedliche Deployment-Szenarien.
- Standardmäßige `Package`-Ressourcen haben in der gesamten Plattform die `HelmRelease`-Templates ersetzt.
- Die gesamte Konfiguration von Cozystack als Plattform erfolgt jetzt über die Parameter der Package-Ressource für cozystack-platform statt über eine ConfigMap

Für bestehende Installationen stellen wir ein Migrationsskript unter `hack/migrate-to-version-1.0.sh` bereit. Damit können Sie Ihre alten ConfigMaps in das neue Package-Format überführen.

### Wichtige Funktionen und Verbesserungen

#### Cozystack Operator

Dieses Release enthält den **cozystack-operator**, eine eigene Komponente für robustes, deklaratives Paketmanagement der gesamten Plattform. Als Grundlage dieser neuen Architektur haben wir die CRDs `Package` und `PackageSource` eingeführt. Die zentrale Reconciliation-Logik des Operators und die zugehörigen Controller sind vollständig implementiert und übernehmen das komplette Lifecycle-Management dieser Ressourcen.

Ebenfalls enthalten sind die nötigen Kubernetes-Deployment-Manifeste, um den cozystack-operator im Cluster zu betreiben, sowie integrierte PackageSource-Definitionen. Ergänzend zu dieser serverseitigen Logik haben wir **cozypkg** veröffentlicht, ein neues Kommandozeilenwerkzeug, das speziell die manuelle Verwaltung von Package- und PackageSource-Ressourcen vereinfacht.

#### Backup-System

Cozystack v1.0 führt ein umfassendes Backup-Ökosystem mit nativer Velero-Integration für ein robustes Management von Anwendungsdaten ein.

Fundament dieses Systems ist der neue **Plan Controller**, der Backup-Zeitpläne und die Rotation orchestriert. Für einen modularen Ansatz haben wir eine eigene **API-Gruppe für Backup-Strategien** hinzugefügt, die eine Plugin-Architektur für verschiedene Backup-Implementierungen ermöglicht. Darüber hinaus haben wir die Ressourcenverwaltung optimiert, indem wir zentrale Backup-Ressourcen mit Indizes versehen haben, was die Abfrageleistung deutlich verbessert.

Ein **Velero Strategy Controller** wurde integriert und bietet Backup-Funktionen auf Enterprise-Niveau. Zusätzlich gibt es eine Basisimplementierung für eine Job-basierte Backup-Strategie.

Der Backup-Controller befindet sich derzeit im Produktionstest; die vollständige Deployment-Infrastruktur, Container-Image-Builds und Kubernetes-Manifeste sind im Release enthalten. Zur einfacheren Bedienung gibt es außerdem eine Dashboard-Oberfläche für Benutzer, über die sich Backups und Backup-Jobs verwalten lassen und die den Status von Backups und die Job-Historie vollständig sichtbar macht.

![image](/img/blog/medium/cozystack-v1-0/04.png)

#### KI/ML und komplexe Workloads

Tenant-Kubernetes-Cluster unterstützen jetzt Volumes vom Typ ReadWriteMany (RWX). Damit können Benutzer gemeinsam genutzten Storage mit Snapshots und Klonen anlegen, genau das, was KI/ML-Workloads brauchen, bei denen GPUs und gemeinsame Datensätze Standard sind. Auch GPU-Passthrough wird [vollständig unterstützt](https://cozystack.io/blog/2025/04/cozystack-now-offers-gpu-passthrough-for-ai-ml-virtual-machines/).

#### Mehrere Distributionen und flexible Installationsoptionen

Talos Linux bleibt unsere empfohlene Distribution, doch Cozystack unterstützt jetzt offiziell verschiedene Kubernetes-Distributionen wie **K3s**, **Kubeadm** und **RKE**. Außerdem haben wir die Einrichtung mit einem vollständigen Satz an [Ansible-Playbooks](https://cozystack.io/docs/v1.0/install/ansible/) vereinfacht. Werkzeuge wie **boot-to-talos**, **cozyhr** und **talm** haben umfangreiche Updates erhalten. Boot-to-talos und talm unterstützen jetzt Bonding, VLANs, Auto-Discovery und automatische Konfiguration. Boot-to-talos arbeitet reibungslos mit den aktuellen Ubuntu-Releases und neueren Kerneln und kann ein bestehendes System mit vorkonfiguriertem Netzwerk automatisch auf Talos umstellen.

Alle unsere Werkzeuge, also cozypkg, boot-to-talos und talm, lassen sich mit einem einzigen Befehl aus [dem Brew-Repository](https://github.com/cozystack/homebrew-tap) installieren.

#### Networking

Der BYOP-Modus unterstützt jetzt **Kilo**: Verbinden Sie Ihre K8s-Nodes zu einem sicheren WireGuard-Mesh, selbst wenn sie über verschiedene Regionen verteilt sind. Außerdem ist local-ccm hinzugekommen, ein Werkzeug, das ExternalIPs vergibt und den Lebenszyklus von Nodes verwaltet, ohne auf einen bestimmten Cloud-Anbieter angewiesen zu sein. Darüber hinaus funktioniert der cluster-autoscaler jetzt mit Azure und Hetzner. Zusammen machen es diese Verbesserungen einfach, Nodes und Cluster über verschiedene Rechenzentren hinweg zu einem nahtlosen Netzwerk zu verbinden und neue Nodes dynamisch bereitzustellen, ideal für Hybrid-Cloud-Setups.

#### Virtuelle Maschinen

Alle virtuellen Maschinen werden jetzt über einen Headless Service bereitgestellt. So erhält jede VM einen dauerhaften DNS-Namen innerhalb des Clusters und ist von anderen Pods im Cluster aus problemlos erreichbar, auch wenn ihr keine öffentliche IP-Adresse zugewiesen ist.

#### Windows und eigene Betriebssysteme

Cozystack unterstützt weiterhin vollständig die Installation von Windows und anderen Betriebssystemen, auch über ISO-Images.

#### Harbor-Integration

Ein neues Paket ermöglicht das Deployment der Container-Image-Registry Harbor.

#### OpenBAO als verwalteter Secret-Speicher

Cozystack enthält jetzt OpenBAO, einen Open-Source-Fork von HashiCorp Vault, um Secrets sicher zu speichern und zu verwalten. Zwei Modi stehen zur Verfügung: ein einfaches Setup mit einem Replikat oder ein hochverfügbares Setup auf Basis des Raft-Konsensverfahrens. Welcher Modus genutzt wird, ergibt sich automatisch aus dem Feld `replicas`.

Jede OpenBAO-Instanz läuft mit aktiviertem TLS (verwendet werden selbstsignierte Zertifikate von cert-manager), wobei alle Service-Endpunkte und Pod-IP-Adressen über DNS-SANs abgedeckt sind. Beachten Sie, dass Sie OpenBAO nach der Installation manuell initialisieren und entsiegeln (unseal) müssen.

#### SeaweedFS: gestufte Storage-Pools

Operatoren können jetzt über die Felder `volume.pools` oder `volume.zones[name].pools` Pools für bestimmte Disk-Typen (SSD, HDD, NVMe) einrichten. Für jeden Pool wird ein zusätzlicher Satz Volume-Server angelegt, zusammen mit der passenden `BucketClass` und `BucketAccessClass`.

In MultiZone-Setups erhält jede Kombination aus Zone und Pool einen eigenen Satz Volume-Server (z. B. `us-east-ssd`, `us-west-hdd`), und die Nodes werden über das Label `topology.kubernetes.io/zone` zugeordnet. Bestehende Deployments ohne definierte Pools erzeugen exakt dieselbe Ausgabe wie in früheren Versionen; eine Migration ist nicht nötig.

#### WORM-Unterstützung

Mit SeaweedFS und dem COSI-Treiber lassen sich jetzt Buckets mit aktivierter Versionierung und Lock-Unterstützung bereitstellen.

#### Neues Benutzermodell mit S3-Login

Statt einer einzigen impliziten `BucketAccess`-Ressource definieren Operatoren jetzt eine `users`-Map. Für jeden Eintrag wird ein eigener `BucketAccess` mit eigenem Secret für die Zugangsdaten und einem optionalen `readonly`-Flag angelegt. Die Oberfläche des S3 Manager wurde überarbeitet und bietet jetzt einen Login-Bildschirm, auf dem sich Benutzer mit ihrem `access_key` und `secret_key` anmelden können.

Zwei neue Bucket-Parameter stehen zur Verfügung:

- `locking` für die BucketClass `-lock` (COMPLIANCE-Modus, 365 Tage Aufbewahrung) für Write-once-read-many-Szenarien;
- `storagePool` wählt die BucketClass, die zu einem bestimmten Pool gehört.

Der COSI-Treiber wurde auf v0.3.0 aktualisiert und unterstützt nun den neuen Parameter `diskType`.

**Breaking Change:** *Die implizite Standard-Ressource BucketAccess wird nicht mehr angelegt. Nach dem Upgrade müssen alle bestehenden Buckets, die auf den implizit automatisch erzeugten BucketAccess angewiesen waren, ihre Benutzer explizit in der Map `users` definieren.*

#### Auswahl der RabbitMQ-Version

Sie können jetzt festlegen, welche RabbitMQ-Version laufen soll: v4.2 (Standard), v4.1, v4.0 oder v3.13. Das Helm-Chart wählt beim Deployment anhand dieses Parameters automatisch das passende Runtime-Image. So können Operatoren steuern, welchen RabbitMQ-Release-Kanal jede Instanz nutzt. Eine automatische Migration trägt in allen bestehenden RabbitMQ-Ressourcen nachträglich die Version v4.2 ein.

#### Dokumentation

Die Dokumentation auf der Website wurde aktualisiert: Es gibt jetzt einen [umfassenden Leitfaden](https://cozystack.io/docs/v1.0/virtualization/cloneable-vms/) zum Klonen und Verwalten virtueller Maschinen, und die Einrichtung des NFS-Treibers ist [deutlich leichter nachvollziehbar](https://cozystack.io/docs/v1.0/storage/nfs/#enable-nfs-driver). Außerdem haben wir die Installationsanleitungen für Talos Linux bei [Hetzner](https://cozystack.io/docs/v1.0/install/providers/hetzner/) und [Servers.com](https://cozystack.io/docs/v1.0/install/providers/servers-com/) überarbeitet und einen [Abschnitt](https://cozystack.io/docs/v1.0/install/providers/hetzner/#32-create-a-load-balancer-with-robotlb) zur Konfiguration öffentlicher IPs mit Hetzner RobotLB ergänzt.

Neben den großen Architekturänderungen bringen die Versionen 1.0.0 und 1.1.0 zahlreiche kleinere Verbesserungen an Monitoring, Tenant-Verwaltung und zentralen Systemkomponenten, schlankere Entwicklungs- und Build-Prozesse sowie diverse Stabilitätsfixes.

### Migrationsleitfaden

Ein [ausführlicher Leitfaden](https://cozystack.io/docs/v1.0/operations/upgrades/) für die Migration von v0.41 auf v1.0 steht bereit. Bitte beachten Sie die **[Pflichtschritte](https://cozystack.io/docs/v1.0/operations/upgrades/#step-1-protect-critical-resources)**. Ein großes Dankeschön an alle, die zu diesem Ergebnis beigetragen haben.

### Werden Sie Teil unserer Community

- [Telegram-Gruppe](http://t.me/cozystack)
- [Slack](https://kubernetes.slack.com/archives/C06L3CPRVN1)-Gruppe (Einladung über [https://slack.kubernetes.io](https://slack.kubernetes.io/))

Von [Timur Tukaev](https://medium.com/@tym83) am [16. März 2026](https://medium.com/p/b3f70879b250).

[Kanonischer Link](https://medium.com/@tym83/cozystack-v1-0-b3f70879b250)

Exportiert von [Medium](https://medium.com) am 11. Mai 2026.
