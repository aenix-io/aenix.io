---
title: "Cozystack v0.36: Serverseitige Verschlüsselung für S3, Health Monitor für Kube-OVN und Dokumentation der REST-API"
seo_title: "Cozystack v0.36: S3-Verschlüsselung und Kube-OVN-Health"
description: "Die neue Version von Cozystack konzentriert sich auf Stabilität, Observability und eine flexible Konfiguration der Managed Applications auf der Plattform."
slug: "cozystack-v0-36-s3-verschluesselung-kube-ovn"
date: "2025-10-01"
cover_image: "/img/blog/covers/de/cozystack-v0-36-s3-verschluesselung-kube-ovn.jpg"
author: "Timur Tukaev"
type: "announcement"
topics: ["Cozystack", "Talos", "Multi-tenancy", "Observability", "Storage"]
language: "de"
hreflang_en: "/blog/2025/10/cozystack-v0-36/"
companion_landing: "/de/produkte/cozystack-enterprise-support/"
companion_label: "Enterprise-Support für Cozystack ansehen →"
---

Die neue Version von Cozystack konzentriert sich auf Stabilität, Observability und die flexible Konfiguration von Managed Applications.

![Release Cozystack v0.36](/img/blog/medium/cozystack-v0-36/02.jpg)

## Wichtige Funktionen und Verbesserungen

### Ressourcenlimits pro Namespace für Tenants

Das Ressourcenmanagement für Tenants in Cozystack hat einen letzten Patch erhalten und gilt jetzt als stabile Funktion. Plattformadministratoren können über die Tenant-Spezifikation für den Namespace jedes Tenants explizite Limits für CPU, Arbeitsspeicher und Storage festlegen. So kann kein einzelner Tenant mehr als seinen Anteil an den Cluster-Ressourcen belegen. Das sichert die Stabilität des Clusters und ein garantiertes Service-Level für jeden Tenant.

### Health Monitor für den Kube-OVN-Cluster

Eine neue Komponente, der Kube-OVN Plunger, überwacht laufend den Zustand des zentralen Steuerungsclusters des Kube-OVN-Netzwerks. Dieser externe Agent sammelt den Status des OVN-Clusters und Informationen zum Konsens, stellt Prometheus-Metriken bereit und liefert einen Live-Event-Stream über SSE. Dadurch wird die virtuelle Netzwerkschicht deutlich besser sichtbar, und das Netzwerk in Cozystack bleibt zuverlässig und beobachtbar. Die Änderung ebnet zudem den Weg für automatisierte Operationen an der Kube-OVN-Datenbank und für die Wiederherstellung in bestimmten Grenzfällen.

### Konfigurierbares CoreDNS-Addon für Kubernetes

Cozystack führt ein eigenes CoreDNS-Addon ein, mit dem sich das Cluster-DNS flexibler verwalten lässt. CoreDNS wird jetzt über ein Helm-Chart ausgerollt und kann über eigene Werte in der Cluster-Spezifikation angepasst werden, etwa Autoscaling, Anzahl der Replicas und Service-IP. CoreDNS lässt sich jetzt im Dashboard und über die Cozystack-API konfigurieren.

### Feingranulare Konfiguration des SeaweedFS-Service

Der S3-Storage-Service SeaweedFS in Cozystack lässt sich jetzt auf Komponentenebene deutlich genauer konfigurieren. Das Helm-Chart von SeaweedFS enthält eine unabhängige Konfiguration für jede Komponente und ihre Ressourcen: Master-Nodes, Volume-Server mit Unterstützung für mehrere Zonen, Filer, die zugrunde liegende Datenbank und das S3-Gateway. Administratoren können pro Komponente Parameter wie die Anzahl der Replicas, verfügbare CPU, Arbeitsspeicher und Storage-Größe festlegen.

### Serverseitige Verschlüsselung für S3

Cozystack v0.36.0 enthält SeaweedFS 3.97 und damit Unterstützung für die serverseitige Verschlüsselung von S3-Buckets (SSE-C, SSE-KMS und SSE-S3).
Breaking Change: Beim Update von Cozystack wird SeaweedFS auf eine neuere Version aktualisiert, und die Spezifikation der Services wird in das neue Format überführt.

### Eigene Ressourcenprofile für den Ingress Controller

Der NGINX Controller lässt sich jetzt pro Replica konfigurieren. Konfigurierbar sind CPU- und Speicher-Requests und -Limits der Ingress-Controller-Pods, entweder mit direkten Werten oder über eines der verfügbaren Presets.

### Integrierte Nachbarerkennung per LLDP in Talos

Cozystack enthält in seinem Talos-OS-Image jetzt die Erweiterung LLDPD und aktiviert damit das Link Layer Discovery Protocol (LLDP) direkt ab Werk. Jeder Node kann seine Netzwerknachbarn und die Topologie so ohne manuelle Einrichtung automatisch erkennen und bekannt geben.

### Externe IP für ausgehenden Traffic von VMs

Ist einer virtuellen Maschine eine externe IP zugewiesen, nutzt sie diese jetzt immer für ausgehenden Traffic, unabhängig von der verwendeten externen Methode.

![Neue Funktionen in Cozystack v0.36](/img/blog/medium/cozystack-v0-36/cover.png)

## Neue Komponentenversionen

- Update von LINSTOR auf v1.31.3
- Update von SeaweedFS auf v3.97
- Update von Kube-OVN auf 1.14.5
- Bitnami-Images in allen Charts durch Alternativen ersetzt

## Neue Dokumentation

- [REST API Reference](https://cozystack.io/docs/cozystack-api/rest/)
- [How to add a node to a Cozystack cluster](https://cozystack.io/docs/operations/cluster/scaling/)
- [Troubleshooting LINSTOR controller crash loops](https://cozystack.io/docs/operations/troubleshooting/linstor-controller/)
- [Troubleshooting LINSTOR CrashLoopBackOff related to a broken database](https://cozystack.io/docs/operations/troubleshooting/linstor-database/)
- [Troubleshooting Piraeus custom resources](https://cozystack.io/docs/operations/troubleshooting/piraeus-custom-resources/)

Alle Änderungen: [v0.36.0](https://github.com/cozystack/cozystack/releases/tag/v0.36.0), [v0.36.1](https://github.com/cozystack/cozystack/releases/tag/v0.36.1), [v0.36.2](https://github.com/cozystack/cozystack/releases/tag/v0.36.2)

## Treten Sie der Community bei

- [Telegram](http://t.me/cozystack)-Gruppe
- [Slack](https://kubernetes.slack.com/archives/C06L3CPRVN1)-Kanal (Einladung unter [https://slack.kubernetes.io](https://slack.kubernetes.io))

Von [Timur Tukaev](https://medium.com/@tym83) am [1. Oktober 2025](https://medium.com/p/dfa5a10bd86a).

[Kanonischer Link](https://medium.com/@tym83/cozystack-v0-36-dfa5a10bd86a)

Exportiert von [Medium](https://medium.com) am 11. Mai 2026.
