---
title: "Cozystack 0.24–0.29: PXE-Provisionierung von Maschinen, RTT-Monitoring zwischen Rechenzentren und dedizierte IP-Adressen für VMs"
seo_title: "Cozystack 0.24–0.29: PXE-Provisionierung und VM-IPs"
description: "Sechs Cozystack-Releases in sechs Wochen: PXE-Provisionierung von Maschinen, RTT-Monitoring zwischen Rechenzentren, dedizierte IP-Adressen für VMs und mehr."
slug: "cozystack-0-24-0-29-pxe-provisionierung-rtt-monitoring-ip-adressen-vms"
date: "2025-04-10"
cover_image: "/img/blog/covers/de/cozystack-0-24-0-29-pxe-provisionierung-rtt-monitoring-ip-adressen-vms.jpg"
author: "Timur Tukaev"
type: "announcement"
topics: ["Kubernetes", "Cozystack", "KubeVirt", "Cilium", "Talos", "LINSTOR"]
language: "de"
hreflang_en: "/blog/2025/04/updates-to-the-open-source-platform-cozystack-0-24-0-29/"
companion_landing: "/de/produkte/cozystack-enterprise-support/"
companion_label: "Enterprise-Support für Cozystack ansehen →"
---



Über neue Funktionen in Cozystack haben wir zuletzt wenig berichtet, obwohl in den vergangenen anderthalb Monaten sechs neue Versionen erschienen sind: 0.24, 0.25, 0.26, 0.27, 0.28 und 0.29. Werfen wir einen genaueren Blick auf die Änderungen, beginnend mit dem neuesten Release und zurück bis Version 0.24.

> Was ist Cozystack?

> Cozystack ist eine Open-Source-Plattform zum Aufbau einer Bare-Metal-Cloud, mit der sich Managed Kubernetes, Database-as-a-Service, Applications-as-a-Service und virtuelle Maschinen auf Basis von KubeVirt schnell bereitstellen lassen. Mit einem einzigen Klick rollen Nutzer Services wie Kafka, FerretDB, PostgreSQL, Cilium, Grafana, VictoriaMetrics und weitere aus.

## Die wichtigsten Änderungen

- Stabilisierung der Plattform für Konfigurationen über mehrere Rechenzentren: deutliche Verbesserungen an etcd, Cilium, Kube-OVN, Linstor und weiteren Komponenten.
- Ausgebauter Observability-Stack: neue Dashboards für mehrere Komponenten und optimierte Grafana-Einstellungen für bessere Performance.
- Veröffentlichung des Werkzeugs cozy-proxy: Damit lassen sich VMs in Kubernetes dedizierte IP-Adressen zuweisen, statt nur einzelne Ports freizugeben.
- Einführung des Vertical Pod Autoscaler (VPA): VPA setzt Ressourcenlimits für Anwendungen automatisch anhand historischer Metriken.
- Überarbeitung und Erweiterung der Dokumentation: neue Abschnitte für mehr Klarheit und bessere Nutzbarkeit.
- Umzug der Repositories: Die Plattform und ihre Werkzeuge sind von der Organisation [aenix-io](https://github.com/aenix-io) nach [cozystack](https://github.com/cozystack) umgezogen, nachdem das Projekt in die CNCF Sandbox aufgenommen wurde.

## Cozystack v0.29

In v0.29.0 hat sich das Entwicklungsteam auf Stabilität und Zuverlässigkeit der Plattform konzentriert, einschließlich des Patches für [CVE-2025–1974](https://github.com/advisories/GHSA-mgvx-rpfc-9mpv) in ingress-nginx. Zu den neuen Funktionen gehören:

- Ein Satz von Presets, um den Ressourcenverbrauch von Anwendungen zu begrenzen.
- Automatische Erneuerung von Zertifikaten.
- Erweiterte VPA-Integration für weitere Plattformkomponenten.

Weitere Änderungen:

- Cilium Host Firewall hinzugefügt, für mehr Sicherheit des Clusters ab Werk.
- Ein Ablauf für e2e-Tests in GitHub CI eingeführt.
- Die [erste Fassung](https://github.com/cozystack/cozystack/blob/main/GOVERNANCE.md) der Governance-Struktur des Projekts im Rahmen des Übergangs in die CNCF Sandbox veröffentlicht.
- Flux Operator auf v0.18.0 und Talos Linux auf v1.9.5 aktualisiert.

Details: [v0.29.0](https://github.com/cozystack/cozystack/releases/tag/v0.29.0), [v0.29.1](https://github.com/cozystack/cozystack/releases/tag/v0.29.1).

## Cozystack v0.28

Höhepunkt dieses Releases war die Einführung des Vertical Pod Autoscaler (VPA), der Ressourcenlimits für Anwendungen automatisch setzt. Außerdem ist das Repository von aenix-io in die GitHub-Organisation cozystack umgezogen.

**Weitere Änderungen:**

- Die Tenant-Isolation ist jetzt standardmäßig aktiviert.
- Die Validierung der Source-IP liegt nicht mehr bei Cilium, sondern bei Kube-OVN.
- Kleinere Bugfixes in LINSTOR, Kube-OVN und KubeVirt.
- Cilium auf v1.17.1 und Kube-OVN auf v1.13.3 aktualisiert.

Details: [v0.28.0](https://github.com/cozystack/cozystack/releases/tag/v0.28.0), [v0.28.2](https://github.com/cozystack/cozystack/releases/tag/v0.28.2).

## Cozystack v0.27

Dieses Release stand im Zeichen der Stabilisierung und brachte linstor-plunger-Skripte, die Probleme in LINSTOR automatisch beheben (etwa verlorene DRBD-Verbindungen oder hängende Loop-Devices). Außerdem lassen sich PostgreSQL-Repliken jetzt auf verschiedene Nodes verteilen.

![Cozystack-Releases 0.24 bis 0.29](/img/blog/medium/updates-to-the-open-source-platform-cozystack-0-24-0-29/cover.png)

**Weitere Änderungen:**

- [Praktische Dashboards](https://github.com/cozystack/cozystack/pull/661) für das Monitoring von ClickHouse und Piraeus hinzugefügt.
- etcd-operator auf v0.4.1 aktualisiert.
- maxLabelsTimeseries von 30 auf 60 erhöht.
- Das Goldfinger-Dashboard zur Messung der Netzwerklatenz in Clustern über mehrere Rechenzentren repariert.

**Details:** [v0.27.0](https://github.com/cozystack/cozystack/releases/tag/v0.27.0).

## Cozystack v0.26

Dieses Release verbesserte die Stabilität in Konfigurationen über mehrere Rechenzentren und brachte ein Monitoring der Netzwerkverbindungen. Mit diesen Metriken lassen sich die Plattformkomponenten feiner abstimmen.

**Weitere Änderungen:**

- Ressourcenlimits für einzelne Tenants innerhalb eines Clusters hinzugefügt.
- Goldpinger integriert, um die Latenz zwischen Rechenzentren zu überwachen; die Daten erscheinen in Grafana.
- Live-Migration von VMs ist jetzt standardmäßig aktiviert.
- Volume-Snapshots für LINSTOR eingeführt (ein Schritt hin zu einem vollständigen Backup-System).
- TLS-Handling im etcd-Helm-Chart korrigiert, um Probleme mit abgelaufenen Root-Zertifikaten zu vermeiden (bisher 90 Tage gültig).

**Details:** [v0.26.0](https://github.com/cozystack/cozystack/releases/tag/v0.26.0), [v0.26.1](https://github.com/cozystack/cozystack/releases/tag/v0.26.1).

## Cozystack v0.25

Dieses Release brachte cozy-proxy, ein eigenständiges Werkzeug, das VMs dedizierte IP-Adressen statt nur Ports zuweist. Das ist entscheidend für Service Provider, die VM-basierte Anwendungen mit eigenen IP-Adressen betreiben.

**Weitere Änderungen:**

- Ausgebautes Monitoring für etcd, Flux und Kafka mit neuen Dashboards.
- Talos Linux auf v1.9.3 aktualisiert.
- Tenant-spezifische Nutzer können jetzt eine kubeconfig herunterladen.

**Details:** [v0.25.0](https://github.com/cozystack/cozystack/releases/tag/v0.25.0), [v0.25.1](https://github.com/cozystack/cozystack/releases/tag/v0.25.1), [v0.25.2](https://github.com/cozystack/cozystack/releases/tag/v0.25.2), [v0.25.3](https://github.com/cozystack/cozystack/releases/tag/v0.25.3).

![Illustration zu den Funktionen von Cozystack v0.25](/img/blog/medium/updates-to-the-open-source-platform-cozystack-0-24-0-29/02.png)

## Cozystack v0.24

Dieses Release brachte PXE-Provisionierung für Nodes, um Talos Linux automatisch auszurollen. Dafür wurde [smee](https://github.com/tinkerbell/smee) (DHCP-/PXE-Server) aus [Tinkerbell](https://tinkerbell.org/) integriert.

**Weitere Änderungen:**

- cert-manager auf v16 aktualisiert.
- darkhttp durch den eigenen cozystack-assets-server ersetzt.
- Grafana-Plugins vorinstalliert, damit Grafana schneller startet.

**Details:** [v0.24.0](https://github.com/cozystack/cozystack/releases/tag/v0.24.0), [v0.24.1](https://github.com/cozystack/cozystack/releases/tag/v0.24.1).

![Illustration zu den Funktionen von Cozystack v0.24](/img/blog/medium/updates-to-the-open-source-platform-cozystack-0-24-0-29/03.png)

## Wie es weitergeht

Wir stellen gerade die GPU-Unterstützung für VMs fertig, damit sich AI/ML-Workloads auf der Plattform betreiben lassen.

## Werden Sie Teil unserer Community

- [Telegram](https://t.me/cozystack)
- [Slack](https://kubernetes.slack.com/archives/C06L3CPRVN1) (im [Kubernetes-Slack-Workspace](https://slack.kubernetes.io/))
- [Kalender der Community-Meetings](https://calendar.google.com/calendar?cid=ZTQzZDIxZTVjOWI0NWE5NWYyOGM1ZDY0OWMyY2IxZTFmNDMzZTJlNjUzYjU2ZGJiZGE3NGNhMzA2ZjBkMGY2OEBncm91cC5jYWxlbmRhci5nb29nbGUuY29t)

Von [Timur Tukaev](https://medium.com/@tym83) am [10. April 2025](https://medium.com/p/d47788ab7ebe).

[Kanonischer Link](https://medium.com/@tym83/updates-to-the-open-source-platform-cozystack-0-24-0-29-d47788ab7ebe)

Exportiert von [Medium](https://medium.com) am 11. Mai 2026.
