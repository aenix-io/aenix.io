---
title: "Cozystack 1.3: Storage-Aware Scheduling, LINSTOR GUI und Standard-Images für VMs"
seo_title: "Cozystack 1.3: Storage-Aware Scheduling, LINSTOR GUI"
description: "Cozystack v1.3.0 ist verfügbar: Storage-Aware Scheduling, eine LINSTOR GUI, Standard-Images für VMs und alle Fixes aus der Patch-Reihe v1.2.1 bis v1.2.4."
slug: "cozystack-1-3-storage-aware-scheduling-linstor-gui-vm-standard-images"
date: "2026-04-27"
cover_image: "/img/blog/covers/de/cozystack-1-3-storage-aware-scheduling-linstor-gui-vm-standard-images.jpg"
author: "Timur Tukaev"
type: "announcement"
topics: ["Kubernetes", "Cozystack", "KubeVirt", "Cilium", "LINSTOR", "GPU"]
language: "de"
hreflang_en: "/blog/2026/04/cozystack-1-3-storage-aware-scheduling-linstor-gui-and-vm-default-images/"
companion_landing: "/de/produkte/cozystack-enterprise-support/"
companion_label: "Enterprise-Support für Cozystack ansehen →"
---



![Release Cozystack 1.3](/img/blog/medium/cozystack-1-3-storage-aware-scheduling-linstor-gui-and-vm-default-images/cover.jpg)

Cozystack v1.3.0 ist verfügbar. Das Release enthält außerdem sämtliche Fixes aus der Patch-Reihe v1.2.1 bis v1.2.4.

Dieser Zyklus bringt die Plattform in fünf klaren Richtungen voran: intelligentere Platzierung mit Blick auf den Speicher, eine verwaltete Oberfläche für LINSTOR, ein eingebauter Katalog mit Basis-Images für VMs, tiefere Observability auf Anwendungsebene und ein vollständiger Ablauf für Backup und Restore von VMs über Namespace-Grenzen hinweg.

> ***Was ist Cozystack***

> *Cozystack ist eine umfassende Open-Source-Plattform zum Aufbau von Bare-Metal-Clouds, mit der sich Managed Kubernetes, Database-as-a-Service (DBaaS), Application-as-a-Service (AaaS) und virtuelle Maschinen auf Basis von KubeVirt schnell bereitstellen lassen. Kafka, MongoDB, PostgreSQL, Cilium, Grafana, VictoriaMetrics und weitere Services lassen sich damit per Mausklick ausrollen. Auch GPU-Workloads in virtuellen Maschinen und K8s-Clustern werden unterstützt. Cozystack ist ein CNCF-Sandbox-Projekt und steht unter der Lizenz Apache 2.0.*

## Die wichtigsten Neuerungen

### Storage-Aware Scheduling über den LINSTOR-Extender

Der cozystack-scheduler fragt jetzt einen LINSTOR-Scheduler-Extender ab, wenn er Pods platziert, die sowohl eine SchedulingClass als auch PVCs auf LINSTOR-Basis deklarieren. Solche Pods landen bevorzugt auf den Nodes, auf denen ihre Volume-Repliken bereits liegen. Das reduziert den Replikationsverkehr zwischen Nodes und senkt die I/O-Latenz für speicherlastige Workloads wie Datenbanken, Objektspeicher und VMs.

Die Funktion baut auf dem in v1.2 eingeführten SchedulingClass-System auf und erfordert keinerlei Konfiguration auf Tenant-Seite. Betreiber können Speicherlokalität weiterhin mit den bestehenden Vorgaben der SchedulingClass zu Rechenzentrum und Hardware-Generation kombinieren.

### LINSTOR GUI: verwaltete Web-Konsole für die Speicheradministration

Das neue, optionale Paket linstor-gui stellt LINBITs linstor-gui neben dem LINSTOR-Controller bereit, mit mTLS-Client-Authentifizierung und einem Security Context ohne Root-Rechte. Ist OIDC konfiguriert, macht ein optionaler, per Keycloak geschützter Ingress (über oauth2-proxy) die Oberfläche erreichbar. Zugriff haben nur Mitglieder der Gruppe cozystack-cluster-admin, im Einklang mit dem Admin-RBAC des Host-Clusters. Der CLI-Workflow bleibt unverändert, die GUI kommt ausschließlich hinzu.

### VM Default Images: VM-Bereitstellung ohne Vorarbeit

Das neue Paket vm-default-images liefert einen kuratierten Satz clusterweiter VM-Images (Ubuntu, Debian, CentOS Stream und weitere) als vorab befüllte DataVolumes. Tenants können VMs aus bekannten Basis-Images erstellen, ohne diese zuerst hochladen zu müssen. Das Paket wird optional über das iaas-Bundle aktiviert und verwendet standardmäßig replizierten Speicher. Zusätzlich erhält das vm-disk-Chart einen neuen Quelltyp „disk“, um bestehende vm-disks im selben Namespace zu klonen.

### Observability auf Anwendungsebene: WorkloadsReady, Events und S3-Metering

Anwendungen weisen jetzt in ihrem Status eine Condition WorkloadsReady aus, die ihre zugrunde liegenden WorkloadMonitor-Ressourcen zusammenfasst. Betreiber erhalten damit ein einziges Readiness-Signal für Deployments, StatefulSets, DaemonSets und PVCs. Das Dashboard bekommt einen neuen Tab „Events“, der die Kubernetes-Events des jeweiligen Namespace pro Anwendung anzeigt.

Der WorkloadMonitor-Reconciler verfolgt nun auch COSI-BucketClaim-Objekte als vollwertige Workloads, und der Bucket-Controller fragt die Bucket-Größen von SeaweedFS aus VictoriaMetrics ab. Damit lassen sich S3-Abrechnungs-Pipelines genauso aufbauen wie für Pods und PVCs.

### Restore von VM-Backups über Namespaces hinweg und RestoreJob im Dashboard

Das Backup-System kann VMInstance-Backups jetzt in einen anderen Namespace wiederherstellen, wobei IP- und MAC-Adressen erhalten bleiben und Umbenennungen sicher ablaufen. Backup und Restore in place für VMDisk und VMInstance wurden durchgängig verbessert, und Fehlermeldungen von Velero erscheinen nun im Status der Anwendung. Das Dashboard bietet eine vollständige RestoreJob-Oberfläche: Listenansicht, Detailseite, Formular zum Anlegen und einen Eintrag in der Seitenleiste.

## Außerdem in v1.3.0

- Strengere Validierung von Tenant-Namen: auf API-Ebene nur noch alphanumerisch, dazu eine Prüfung, ob der aus der Kette der übergeordneten Tenants berechnete Namespace in das Kubernetes-Limit von 63 Zeichen passt.
- Die Subnets von VMInstance heißen jetzt Networks und lassen sich im Dashboard über ein Dropdown auswählen; das alte Feld wird über Migration 36 weiter unterstützt.
- Eigene Keycloak-Themes lassen sich über initContainers einbinden; Keycloak-Configure ergänzt E-Mail-Verifizierung und SMTP-Einstellungen für die Selbstregistrierung.
- Ein Preflight-Check der Host-Runtime (make preflight) warnt, wenn neben der eingebetteten k3s-Runtime ein eigenständiges containerd oder Docker läuft.
- Das System-PostgreSQL für Grafana, Alerta, Harbor, Keycloak und SeaweedFS ist auf 17.7-standard-trixie festgelegt, damit es nicht unbemerkt auf PostgreSQL 18 wechselt.
- kube-ovn wurde auf v1.15.10 aktualisiert, inklusive eines Fixes für eine Regression bei Port-Groups, der die LSP-Zugehörigkeit von VMs bei Live-Migration erhält.
- Alle Bugfixes aus v1.2.1 bis v1.2.4 sind in v1.3.0 enthalten.

## Lesenswerte Dokumentation

Zu diesem Release gehört ein umfangreiches Dokumentations-Update. Neue und überarbeitete Leitfäden, die direkt zu den Funktionen von v1.3 passen:

- [Eigene Keycloak-Themes / White-Labeling](https://cozystack.io/docs/v1.3/operations/configuration/white-labeling/) — Image-Vertrag, Konfiguration, imagePullSecrets und Aktivierung des Themes.
- [Konfiguration von Network Bonding (LACP)](https://cozystack.io/docs/v1.3/install/how-to/bonding/) — LACP für Cozystack-Installationen einrichten.
- [Backup und Restore für VMInstance und VMDisk](https://cozystack.io/docs/v1.3/virtualization/backup-and-recovery/) — aktualisiert für die Restore-Abläufe über Namespaces hinweg in v1.3.
- [Externe Anwendungen über die ApplicationDefinition-API](https://cozystack.io/docs/v1.3/applications/external/) — komplett neu geschriebener Leitfaden mit Beispielen für einen Minecraft-Server.
- [Go-Typen für Managed Applications von Cozystack](https://cozystack.io/docs/v1.3/cozystack-api/go-types/) — das generierte Go-Modul in eigenen Controllern verwenden.
- [Namenskonvention für ApplicationDefinition](https://cozystack.io/docs/v1.3/cozystack-api/application-definitions/) — wie cozystack-api Kinds den zugehörigen Definitionen zuordnet.
- [Namespace-Layout von Tenants und Ableitung von Parent / Child](https://cozystack.io/docs/v1.3/guides/tenants/) — wie die Namespaces verschachtelter Tenants berechnet werden.
- [Kompatibilitätsmatrix für Talos, talosctl und Cozystack](https://cozystack.io/docs/v1.3/install/kubernetes/talm/) — die maßgebliche Referenz zur Versionskompatibilität.
- [Registry-Mirrors für Tenant-Kubernetes in Air-Gap-Umgebungen](https://cozystack.io/docs/v1.3/install/kubernetes/air-gapped/) — verbesserte Hinweise für Offline-Installationen.

## Governance

In diesem Zyklus haben wir außerdem zwei neue Maintainer begrüßt: Mattia Eleuteri (@mattia-eleuteri) für CSI, Storage, Networking und Security sowie Matthieu Robin (@matthieu-robin) für Managed Applications, Plattformqualität und Benchmarking.

## Release-Link

- Cozystack v1.3.0 auf GitHub: [https://github.com/cozystack/cozystack/releases/tag/v1.3.0](https://github.com/cozystack/cozystack/releases/tag/v1.3.0)

## Werden Sie Teil der Community

- [Telegram-Gruppe](https://t.me/cozystack)
- [Slack](https://kubernetes.slack.com/archives/C06L3CPRVN1)-Gruppe (Einladung über [https://slack.kubernetes.io](https://slack.kubernetes.io/))
- [Kalender der Community-Meetings](https://calendar.google.com/calendar?cid=ZTQzZDIxZTVjOWI0NWE5NWYyOGM1ZDY0OWMyY2IxZTFmNDMzZTJlNjUzYjU2ZGJiZGE3NGNhMzA2ZjBkMGY2OEBncm91cC5jYWxlbmRhci5nb29nbGUuY29t)
- [Cozysummit Virtual 2026](https://community.cncf.io/events/details/cncf-virtual-project-events-hosted-by-cncf-presents-cozysummit-virtual-2026/)

Von [Timur Tukaev](https://medium.com/@tym83) am [27. April 2026](https://medium.com/p/3ad9b04a39de).

[Kanonischer Link](https://medium.com/@tym83/cozystack-1-3-storage-aware-scheduling-linstor-gui-and-vm-default-images-3ad9b04a39de)

Exportiert von [Medium](https://medium.com) am 11. Mai 2026.
