---
title: "Cozystack v0.34: Wahl der Kubernetes-Version, PVC-Snapshots in Tenants, Windows und RouterOS auf VMs"
seo_title: "Cozystack v0.34: Kubernetes-Versionen und Snapshots"
description: "Cozystack v0.34: Tenants wählen ihre Kubernetes-Version und erstellen PVC-Snapshots, VMs laufen mit Windows und RouterOS, VPA skaliert sich jetzt selbst."
slug: "cozystack-v0-34-kubernetes-versionen-pvc-snapshots-windows-routeros"
date: "2025-08-04"
cover_image: "/img/blog/covers/de/cozystack-v0-34-kubernetes-versionen-pvc-snapshots-windows-routeros.jpg"
author: "Timur Tukaev"
type: "announcement"
topics: ["Kubernetes", "Cozystack", "KubeVirt", "Cilium", "Talos", "LINSTOR"]
language: "de"
hreflang_en: "/blog/2025/08/cozystack-v0-34/"
companion_landing: "/de/produkte/cozystack-enterprise-support/"
companion_label: "Enterprise-Support für Cozystack ansehen →"
---



Unsere Maintainer und Mitwirkenden stehen nie still, und schon können wir das nächste stabile Release vorstellen: Cozystack v0.34. In diesem Release haben wir den Funktionsumfang des Vertical Pod Autoscaler weiter ausgebaut, die Tenant-Cluster verbessert, das Backup-System weiterentwickelt und die Zerlegung der Plattform in einzelne Komponenten vorangetrieben.

Im Folgenden stellen wir die wichtigsten Änderungen vor; die vollständige Liste der Fixes finden Sie über die Links am Ende der Ankündigung.

![Release Cozystack v0.34](/img/blog/medium/cozystack-v0-34/cover.png)

> Was ist Cozystack? Cozystack ist ein freies PaaS und Framework zum Aufbau von Clouds, das VMs, Container und GPU-Workloads unter Kubernetes vereint. Unternehmen können damit Hardware in eine Cloud verwandeln und ihren Nutzern oder Kunden Managed K8s, VMs, Managed Databases, Anwendungen und GPU-Services anbieten. Dank KubeVirt-Integration, Multi-Tenancy und der Einfachheit von Bare Metal lassen sich AI, Datenbanken oder Edge-Anwendungen ohne Vendor Lock-in betreiben. Cozystack ist ein CNCF-Sandbox-Projekt.

## Die wichtigsten Funktionen und Verbesserungen

- Nutzer können in Tenant-Clustern die [Kubernetes-Version](https://github.com/cozystack/cozystack/pull/1202) wählen. Unterstützt werden die Versionen 1.28 bis 1.33, jeweils auf dem neuesten Patch-Stand.
- [PVC-Snapshots](https://github.com/cozystack/cozystack/pull/1203) in Tenant-Kubernetes-Clustern aktiviert.
- [Autoscaling für den Vertical Pod Autoscaler](https://github.com/cozystack/cozystack/pull/1198) selbst umgesetzt: VPA erhält damit ausreichend Ressourcen, und Plattform-Administratoren müssen weniger Konfigurationsparameter pflegen.
- [Windows und MikroTik RouterOS](https://github.com/cozystack/cozystack/pull/1168) laufen jetzt in Cozystack-VMs. Dazu kommt die Option bus, und bootOrder wird für alle Disks immer angegeben.
- Beschrieben, wie sich PostgreSQL mit Velero-Backups [sichern und wiederherstellen](https://github.com/cozystack/cozystack/pull/1141) lässt.
- [Konfiguration über mehrere Zonen](https://github.com/cozystack/cozystack/pull/1194) für S3-Speicher unterstützt.
- Der [YAML-Editor steht jetzt an erster Stelle](https://github.com/cozystack/cozystack/pull/1227), wenn Anwendungen ausgerollt oder aktualisiert werden, als die leistungsfähigere Option. Die Verarbeitung mehrzeiliger Strings wurde korrigiert.
- Zahlreiche Verbesserungen an der API und Fortschritte auf dem Weg zur neuen Oberfläche: [OpenAPI-Schema für Apps](https://github.com/cozystack/cozystack/pull/1174), Refactoring des [OpenAPI-Schemas](https://github.com/cozystack/cozystack/pull/1173), [Ressourcennamen im Singular](https://github.com/cozystack/cozystack/pull/1169) in der Cozystack-API.

![Verbesserungen an API und Oberfläche in Cozystack v0.34](/img/blog/medium/cozystack-v0-34/02.png)

## Sicherheit

- Die JWT-Signaturschlüssel in der Sicherheitskonfiguration von SeaweedFS [bleiben jetzt über Helm-Upgrades hinweg konsistent](https://github.com/cozystack/cozystack/pull/1193). Damit ist ein [Upstream-Problem](https://github.com/seaweedfs/seaweedfs/pull/6967) behoben.

## Neue Komponentenversionen

- FerretDB v2.4.0 (Breaking Change! Sichern Sie vor dem Upgrade von FerretDB-Instanzen die Daten und stellen Sie sie gemäß dem [Migrationsleitfaden](https://docs.ferretdb.io/migration/migrating-from-v1/) wieder her).
- Talos Linux v1.10.5.
- LINSTOR v1.31.2.
- KubeVirt v1.5.2.
- CDI v1.62.0.
- Flux Operator 0.24.0.
- Kamaji auf edge-25.7.1.
- Kube-OVN auf v1.13.14.
- Cilium auf v1.17.5.
- MariaDB Operator auf v0.38.1.
- SeaweedFS auf v3.94.

## Neue Dokumentation

- [Aktualisierte Roadmap und Backlog von Cozystack für 2024–2026](https://cozystack.io/docs/roadmap/).
- [Windows-VMs betreiben](https://cozystack.io/docs/operations/virtualization/windows/).
- [VMs mit MikroTik RouterOS betreiben](https://cozystack.io/docs/operations/virtualization/mikrotik/).
- [Kubernetes-Deployment im öffentlichen Netz](https://cozystack.io/docs/operations/faq/#public-network-kubernetes-deployment).
- [Platz auf der Systemdisk für Nutzerspeicher reservieren](https://cozystack.io/docs/operations/faq/#how-to-allocate-space-on-system-disk-for-user-storage).
- [Ressourcenverwaltung in Cozystack](https://cozystack.io/docs/guides/resource-management/).
- [Grundbegriffe von Cozystack](https://cozystack.io/docs/guides/concepts/).
- [Architektur und Plattform-Stack von Cozystack](https://cozystack.io/docs/guides/platform-stack/).

## Entwicklung, Tests und CI/CD

- [Ablauf für Mitwirkende](https://github.com/cozystack/cozystack/pull/1226) verbessert, die PRs aus Forks einreichen. Für PRs außerhalb von Releases wird die Oracle Cloud Infrastructure Registry verwendet; damit entfällt die Einschränkung, dass mit dem Standard-Token von GitHub nicht nach ghcr.io gepusht werden kann.

Alle Änderungen: [v0.34.3](https://github.com/cozystack/cozystack/releases/tag/v0.34.3), [v0.34.2](https://github.com/cozystack/cozystack/releases/tag/v0.34.2), [v0.34.1](https://github.com/cozystack/cozystack/releases/tag/v0.34.1), [v0.34.0](https://github.com/cozystack/cozystack/releases/tag/v0.34.0)

## Werden Sie Teil der Community

- [Telegram-Gruppe](http://t.me/cozystack)
- [Slack](https://kubernetes.slack.com/archives/C06L3CPRVN1)-Gruppe (Einladung über [https://slack.kubernetes.io](https://slack.kubernetes.io))

Von [Timur Tukaev](https://medium.com/@tym83) am [4. August 2025](https://medium.com/p/d66557a0deeb).

[Kanonischer Link](https://medium.com/@tym83/cozystack-v0-34-d66557a0deeb)

Exportiert von [Medium](https://medium.com) am 11. Mai 2026.
