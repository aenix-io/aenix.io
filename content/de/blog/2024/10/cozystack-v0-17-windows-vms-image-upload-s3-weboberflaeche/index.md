---
title: "Neu in Cozystack v0.17: Windows auf VMs, Upload von VM-Images und eine Weboberfläche für S3-Buckets"
seo_title: "Cozystack v0.17: Windows-VMs und Upload von VM-Images"
description: "Cozystack v0.17 baut vor allem die Virtualisierung aus: Windows auf VMs, Upload von VM-Images, eine Weboberfläche für S3-Buckets und weitere Verbesserungen."
slug: "cozystack-v0-17-windows-vms-image-upload-s3-weboberflaeche"
date: "2024-10-24"
cover_image: "/img/blog/covers/de/cozystack-v0-17-windows-vms-image-upload-s3-weboberflaeche.jpg"
author: "Timur Tukaev"
type: "announcement"
topics: ["Kubernetes", "Cozystack", "KubeVirt", "Cilium", "Talos", "LINSTOR"]
language: "de"
hreflang_en: "/blog/2024/10/whats-new-in-cozystack-v0-17/"
---



Dieses Update konzentriert sich vor allem auf den Ausbau der Virtualisierungsfunktionen der Plattform, bringt aber auch eine Reihe weiterer Verbesserungen mit.

> Heute erscheint eine neue Version des freien PaaS-Systems Cozystack. Cozystack basiert auf Kubernetes, setzt sich aus zahlreichen offenen Technologien zusammen und bietet alle wesentlichen Werkzeuge, um Managed Services auf eigener Hardware zu betreiben. Die Plattform steht unter der Lizenz Apache 2.0.

> Cozystack nutzt **Talos Linux** als Fundament, **LINSTOR** für Speicher, **KubeVirt** für Virtualisierung und **Cilium + KubeOVN** für das Networking.

![Release Cozystack v0.17](/img/blog/medium/whats-new-in-cozystack-v0-17/cover.png)

## Verbesserungen bei der Virtualisierung

Die bisherige App Virtual Machine wurde in zwei getrennte Apps aufgeteilt: `vm-disk` und `vm-instance`.

- **vm-disk (Virtual Machine Disk)** ist jetzt von der Anwendung für virtuelle Maschinen getrennt und unterstützt den Upload von Images per HTTP oder aus lokalen Quellen. Beim Anlegen einer Disk geben Sie die Quelle und den Typ des Images an: CD-ROM oder klassisch.
- **vm-instance (Virtual Machine Instance)** startet eine virtuelle Maschine aus angelegten Disks.

Mit dieser neuen Struktur lassen sich virtuelle Maschinen mit mehreren Disks anlegen, Installationen von CD-ROM durchführen und Disks zwischen verschiedenen VMs umhängen. Disks und virtuelle Maschinen lassen sich damit deutlich flexibler konfigurieren.

Die bisherige App **Virtual Machine** bleibt aus Kompatibilitätsgründen erhalten und als einfacherer Weg, virtuelle Maschinen in Cozystack zu starten.

Neben den Verbesserungen bei der Virtualisierung bringt das aktuelle Release noch einige weitere wichtige Funktionen.

### Optionen InstanceType und InstanceProfile

Neu sind die Optionen `instanceType` und `instanceProfile`, zusammen mit einem Standardsatz an Instanzen und Profilen für Ubuntu, RHEL, Alpine und Windows. Virtuelle Maschinen lassen sich damit je nach Betriebssystem mit optimalen Parametern konfigurieren (zum Beispiel TPM aktivieren, virtio-Geräte oder einen Tablet-Pointer verwenden). Statt die Ressourcen einer VM von Hand festzulegen, können Sie standardisierte Instanzen nutzen, die für bestimmte Workloads ausgelegt sind.

Diese Instance Types gelten auch für **Kubernetes**, sodass sich Ihre Node-Gruppen besser planen lassen.

### CDI Upload Proxy

Im Ingress lässt sich jetzt ein Proxy für den Upload von Images von lokalen Rechnern aktivieren, und der CDI (Containerized Data Importer) wurde für eine bessere Kompatibilität mit Block-Devices aktualisiert. Bisher war der Upload von Images für LINSTOR mit dem Werkzeug `virtctl` nicht möglich; wir haben das Problem behoben und einen Patch upstream an LINSTOR beigesteuert.

### Unterstützung für Windows-VMs

Mit den neuen Funktionen `vm-disk` und `vm-instance` haben wir die Installation von Windows 10 und Windows Server 2025 aus einer ISO getestet, mit anschließendem Wechsel auf VirtIO-Treiber. Alles funktioniert reibungslos.

### Weboberfläche für S3-Buckets

Wer S3-Buckets bestellt, bekommt jetzt automatisch eine Weboberfläche für den Zugriff darauf. Dort lassen sich Dateien hochladen und löschen sowie temporäre Links für den öffentlichen Zugriff erzeugen.

Die Oberfläche basiert auf [s3manager](https://github.com/cloudlena/s3manager) (Apache 2.0).

![Weboberfläche für S3-Buckets auf Basis von s3manager](/img/blog/medium/whats-new-in-cozystack-v0-17/02.png)

### Verbesserungen am Alerting

Neue Alerts für FluxCD liefern den Status von Releases in Echtzeit. Die Alerts sind jetzt klarer strukturiert und in Kategorien eingeteilt, was die Navigation und das Erkennen von Problemen erleichtert. Zusätzlich zeigt das Feld **Resource** nun die konkrete betroffene Ressource an, sodass sich Fehler schneller finden und beheben lassen.

![FluxCD-Alerts im Alerting von Cozystack](/img/blog/medium/whats-new-in-cozystack-v0-17/03.png)

### Alerts in Telegram

Eine neue Funktion stellt Alerts direkt in Telegram zu, mit Deduplizierung gegen Alert-Spam. Die Alerts enthalten jetzt Aktionsschaltflächen, mit denen Sie den Lebenszyklus jedes Alerts (etwa bestätigen oder auflösen) direkt in Telegram steuern.

![Alert von Cozystack in Telegram mit Aktionsschaltflächen](/img/blog/medium/whats-new-in-cozystack-v0-17/04.png)

### MachineHealthChecks-Controller für Kubernetes

Der Controller `MachineHealthChecks` ist jetzt in Cluster API integriert und überwacht den Zustand der Nodes in Kubernetes-Clustern. Bei Problemen werden die betroffenen Nodes automatisch neu provisioniert.

### Neue Komponente External-DNS

Die Komponente external-dns konfiguriert DNS-Einträge in Cloudflare jetzt automatisch. Zusätzlich lassen sich über die API Zertifikate per DNS-Challenge mit Cloudflare bestellen.

### External-Secrets-Operator

Neu ist die Synchronisierung von Secrets mit externen Systemen über den external-secrets-operator.

### Optionale Komponenten

Einige Komponenten in den Bundles sind jetzt standardmäßig deaktiviert. Sie lassen sich über die Option bundle-enable in der Cozystack-Konfiguration aktivieren.

### Verbesserte Initialisierungs-Jobs für Postgres und FerretDB

Die Initialisierungs-Jobs warten jetzt, bis die Datenbank vollständig bereit ist, bevor sie Konfigurationsänderungen vornehmen.

### Stabileres Kube-OVN

Die Kommunikation mit NetworkManager ist deaktiviert. Damit ist ein Problem behoben, bei dem auf manchen Systemen der Start der OVN-Controller blockiert wurde.

### Log-Konfiguration für Clickhouse

Logs lassen sich jetzt auf ein separates Volume verschieben, und die Log-Rotation ist konfigurierbar.

### Aktualisierte Komponenten:

- LINSTOR auf v1.29.1 aktualisiert
- Talos Linux auf v1.8.1 aktualisiert
- Cilium auf v1.16.3 aktualisiert

## Danksagung

Wir danken den Mitwirkenden aus der Community, die PRs für dieses Release eingereicht haben: [kingdonb](https://github.com/kingdonb), [mrkhachaturov](https://github.com/mrkhachaturov), [klinch0](https://github.com/klinch0).

Werden Sie Teil der Entwickler-Community der Plattform im [Telegram-Chat](https://t.me/cozystack).

Außerdem treffen wir uns jeden Donnerstag zu wöchentlichen Community-Meetings, in denen wir die Weiterentwicklung der Plattform offen besprechen. Den Kalender der Termine können Sie über [diesen Link](https://calendar.google.com/calendar?cid=ZTQzZDIxZTVjOWI0NWE5NWYyOGM1ZDY0OWMyY2IxZTFmNDMzZTJlNjUzYjU2ZGJiZGE3NGNhMzA2ZjBkMGY2OEBncm91cC5jYWxlbmRhci5nb29nbGUuY29t) abonnieren.

Von [Timur Tukaev](https://medium.com/@tym83) am [24. Oktober 2024](https://medium.com/p/4f1373ddf831).

[Kanonischer Link](https://medium.com/@tym83/whats-new-in-cozystack-v0-17-4f1373ddf831)

Exportiert von [Medium](https://medium.com) am 11. Mai 2026.
