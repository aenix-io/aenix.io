---
title: "Cozystack v0.22: Telemetrie, gepatchtes Talos v1.9.1 sowie die neuen Entitäten Workload und WorkloadMonitor"
seo_title: "Cozystack v0.22: Telemetrie und WorkloadMonitor"
description: "Cozystack v0.22 bringt Workload und WorkloadMonitor für den Service-Status im Dashboard, abschaltbare Telemetrie, ein gepatchtes Talos v1.9.1 und Updates."
slug: "cozystack-v0-22-telemetrie-talos-workloadmonitor"
date: "2025-01-17"
cover_image: "/img/blog/covers/de/cozystack-v0-22-telemetrie-talos-workloadmonitor.jpg"
author: "Timur Tukaev"
type: "announcement"
topics: ["Kubernetes", "Cozystack", "Talos", "Observability", "Storage", "etcd"]
language: "de"
hreflang_en: "/blog/2025/01/cozystack-v0-22-release-telemetry-patched-talos-v1-9-1-new-entities-workload-/"
companion_landing: "/de/produkte/cozystack-enterprise-support/"
companion_label: "Enterprise-Support für Cozystack mit SLA ansehen →"
---



## Die wichtigsten Änderungen

Das aktuelle Release bringt den cozystack-controller und zwei neue Entitäten mit: Workload und WorkloadMonitor. Damit lässt sich der Zustand von Pods überwachen, die von Operatoren verwaltet werden, und das Service-Level anhand vordefinierter Regeln bewerten.

Da die verschiedenen Anwendungen in Cozystack von unterschiedlichen Operatoren verwaltet werden, haben wir uns für ein einheitliches Format entschieden, in dem der Status jedes Service angezeigt wird.

### So funktioniert es:

Beim Deployment einer Anwendung wird zusammen mit ihr ein WorkloadMonitor bereitgestellt, der den Zustand der Pods per Selektor überwacht. Sobald der Selektor einen Pod findet, wird dafür eine neue Entität angelegt: ein Workload, der die Rolle und den Status des jeweiligen Pods anzeigt.

Im Status des WorkloadMonitor sehen Sie die Anzahl der vorhandenen Replikas und die Mindestanzahl, die für den Betrieb der Anwendung nötig ist. Sobald die Zahl der Workloads unter den Wert minReplicas des WorkloadMonitor fällt, wird der Service als nicht betriebsbereit markiert.

Für Anwendungen ohne feste Replikazahl, etwa Kubernetes-Worker, die dynamisch skalieren, muss im WorkloadMonitor überhaupt keine Replikazahl angegeben werden. In diesem Fall zählt er einfach die Gesamtzahl der laufenden Instanzen.

Dieser Mechanismus funktioniert mit beliebigen Operatoren und Verfahren zur Pod-Verwaltung in Kubernetes. Weil er eine einheitliche Schnittstelle für den aktuellen Service-Status bietet, lässt sich die Plattform leicht erweitern.

Für die Kubernetes-Anwendungen Postgres, Monitoring, VirtualMachine, VMInstance, Redis, Etcd und SeaweedFS wurde ein WorkloadMonitor ergänzt, der Informationen über Replikas und deren Betriebsbereitschaft sammelt.

Das Cozystack-Dashboard zeigt jetzt für jede Workload-Gruppe die Zahl der Anwendungsreplikas und das Service-Level an.

![Cozystack-Dashboard mit Replikas und Service-Level pro Workload](/img/blog/medium/cozystack-v0-22-release-telemetry-patched-talos-v1-9-1-new-entities-workload-/02.png)

## Telemetrie

Client- und Server-Telemetrie wurden implementiert und unter der Apache License 2.0 [veröffentlicht](https://github.com/aenix-io/cozystack-telemetry-server). Die Erfassung der Metriken folgt der [LF Telemetry Data Collection and Usage Policy](https://www.linuxfoundation.org/legal/telemetry-data-policy) und lässt sich in Cozystack mit einer einzigen Konfigurationsoption, `telemetry-enabled:false`, abschalten. Für künftige Releases ist ein öffentliches Dashboard mit den gesammelten Informationen geplant. Weitere Details finden Sie in der [Dokumentation](https://cozystack.io/docs/telemetry/).

## Weitere Änderungen

- Die Komponente cluster-autoscaler für Kubernetes und ihre Konfiguration wurden aktualisiert, sodass Cluster effizienter hoch- und herunterskaliert werden.
- Die Datei [MAINTAINERS](https://github.com/aenix-io/cozystack/blob/main/MAINTAINERS.md), die die Mitwirkenden des Projekts und ihre Zuständigkeiten auflistet, wurde aktualisiert.
- Die neue Service-Anwendung builder ermöglicht es, die Plattform direkt in Kubernetes zu bauen.
- Für VictoriaMetrics wurden die standardmäßigen Resource Requests und Limits erhöht; außerdem lassen sich jetzt eigene Parameter angeben.
- Metriken aus Datenbanken werden jetzt für Grafana und Alerta erfasst.
- Alerts für den Zustand virtueller Maschinen wurden hinzugefügt.
- Alerts für den Zustand von Postgres-Clustern wurden hinzugefügt.
- Für KubeVirt wurde die Metrikerfassung eingerichtet und ein Grafana-Dashboard ergänzt.
- In der Cozystack-Konfiguration gibt es die neue Option extra-keycloak-redirect-uri-for-dashboard, mit der sich zusätzliche Redirect-URLs für Keycloak festlegen lassen.
- Ein Fehler in VMInstance wurde behoben, der das Anbinden von VMdisks an virtuelle Maschinen verhinderte.

![Grafana-Dashboard für KubeVirt](/img/blog/medium/cozystack-v0-22-release-telemetry-patched-talos-v1-9-1-new-entities-workload-/cover.png)

Grafana-Dashboard für KubeVirt

## Komponenten-Updates

- Flux Operator von v0.10.0 auf v0.12.0 aktualisiert.
- Chart Flux Instance von v0.9.0 auf v0.12.0 aktualisiert.
- Cilium auf Version v1.16.5 aktualisiert.
- Kube-OVN auf Version v1.13.2 aktualisiert.
- CNPG PostgreSQL Operator auf Version v1.25.0 aktualisiert.
- Talos Linux wurde aktualisiert. Wegen mehrerer Fehler im Upstream wird die Plattform derzeit mit einem gepatchten Image v1.9.1 ausgeliefert.

*Weitere Details finden Sie im Projekt auf* *[GitHub](https://github.com/aenix-io/cozystack/releases/tag/v0.22.0)*.

## Werden Sie Teil unserer Community

- [Telegram](https://t.me/cozystack)
- [Slack](https://kubernetes.slack.com/archives/C06L3CPRVN1)
- [Kalender der Community-Meetings](https://calendar.google.com/calendar?cid=ZTQzZDIxZTVjOWI0NWE5NWYyOGM1ZDY0OWMyY2IxZTFmNDMzZTJlNjUzYjU2ZGJiZGE3NGNhMzA2ZjBkMGY2OEBncm91cC5jYWxlbmRhci5nb29nbGUuY29t)

Von [Timur Tukaev](https://medium.com/@tym83) am [17. Januar 2025](https://medium.com/p/ff22e6d20b17).

[Kanonischer Link](https://medium.com/@tym83/cozystack-v0-22-release-telemetry-patched-talos-v1-9-1-new-entities-workload-%D0%B8-workloadmonitor-ff22e6d20b17)

Exportiert von [Medium](https://medium.com) am 11. Mai 2026.
