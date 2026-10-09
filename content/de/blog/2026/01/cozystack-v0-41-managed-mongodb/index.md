---
title: "Cozystack v0.41.0: Managed MongoDB"
description: "Cozystack v0.41.0 bringt MongoDB als Managed-Anwendung neben PostgreSQL, MySQL und Redis sowie Verbesserungen, Fehlerbehebungen und neue Abhängigkeiten."
slug: "cozystack-v0-41-managed-mongodb"
date: "2026-01-23"
cover_image: "/img/blog/covers/de/cozystack-v0-41-managed-mongodb.jpg"
author: "Timur Tukaev"
type: "announcement"
topics: ["Kubernetes", "Cozystack", "Talos", "LINSTOR", "Observability", "etcd"]
language: "de"
hreflang_en: "/blog/2026/01/cozystack-v0-41-0-managed-mongodb/"
companion_landing: "/de/produkte/cozystack-enterprise-support/"
companion_label: "Enterprise-Support für Cozystack mit SLA ansehen →"
---



Diese Version bringt MongoDB als neue Managed-Anwendung und erweitert das Datenbankangebot neben den bestehenden Services PostgreSQL, MySQL und Redis deutlich. Außerdem enthält das Release wichtige Stabilitätsverbesserungen für zentrale Kubernetes-Komponenten, Verbesserungen am Storage-System und aktualisierte Dokumentation.

![Managed MongoDB in Cozystack v0.41](/img/blog/medium/cozystack-v0-41-0-managed-mongodb/cover.jpg)

## Im Fokus: MongoDB als Managed-Anwendung

Cozystack bietet MongoDB jetzt als robusten, vollständig verwalteten Datenbank-Service an. Nutzer können produktionsreife MongoDB-Instanzen direkt über den Anwendungskatalog bereitstellen. Der Service bietet Funktionen auf Enterprise-Niveau: automatische ReplicaSet-Konfiguration für Hochverfügbarkeit, nahtlose Integration mit den Storage-Backends von Cozystack für persistente Daten, volle Kontrolle über die Ressourcenzuteilung (CPU, Arbeitsspeicher und Storage sind konfigurierbar) und eine native Monitoring-Integration.

MongoDB lässt sich über das Cozystack-Dashboard oder über den üblichen Workflow für Anwendungs-Deployments bereitstellen.

## Verbesserungen

**[linstor] piraeus-server-Patches mit kritischen Fixes aktualisiert:** Kritische Patches wurden in piraeus-server zurückportiert. Sie beheben Stabilitätsprobleme im Storage und verbessern den Umgang mit DRBD-Ressourcen. Die Patches korrigieren Randfälle in der Geräteverwaltung und machen Storage-Operationen zuverlässiger ([@kvaps](https://github.com/kvaps) in [#1850](https://github.com/cozystack/cozystack/pull/1850), [#1852](https://github.com/cozystack/cozystack/pull/1852)).

**[linstor] Refactoring der RWX-Validierung auf Node-Ebene:** Die Logik zur Validierung von ReadWriteMany (RWX) auf Node-Ebene in LINSTOR CSI wurde überarbeitet. Die Validierung liegt jetzt auf Ebene des CSI-Treibers, mit einem eigens gebauten linstor-csi-Image. Das macht den Umgang mit RWX-Volumes zuverlässiger und liefert klarere Fehlermeldungen, wenn RWX-Anforderungen nicht erfüllt werden können ([@kvaps](https://github.com/kvaps) in [#1856](https://github.com/cozystack/cozystack/pull/1856), [#1857](https://github.com/cozystack/cozystack/pull/1857)).

**[kubernetes] Standard-resourcesPreset des apiServer auf large erhöht:** Das standardmäßige Ressourcen-Preset für kube-apiserver steht jetzt auf large. So läuft der API-Server auch unter höherer Last zuverlässig, und Ressourcenengpässe werden vermieden ([@kvaps](https://github.com/kvaps) in [#1875](https://github.com/cozystack/cozystack/pull/1875), [#1882](https://github.com/cozystack/cozystack/pull/1882)).

**[kubernetes] Schwellenwert der Startup-Probe für kube-apiserver erhöht:** Der API-Server hat jetzt mehr Zeit, betriebsbereit zu werden, vor allem bei langsamem Storage oder hoher Last ([@kvaps](https://github.com/kvaps) in [#1876](https://github.com/cozystack/cozystack/pull/1876), [#1883](https://github.com/cozystack/cozystack/pull/1883)).

**[etcd] Probe-Schwellenwerte für bessere Wiederherstellung erhöht:** Höhere Schwellenwerte der etcd-Probes lassen mehr Zeit für Wiederherstellungsvorgänge und machen den Cluster bei Netzwerkproblemen oder vorübergehenden Verlangsamungen widerstandsfähiger ([@kvaps](https://github.com/kvaps) in [#1874](https://github.com/cozystack/cozystack/pull/1874), [#1878](https://github.com/cozystack/cozystack/pull/1878)).

## Fehlerbehebungen

Dieses Release verhindert, dass eine fehlerhafte ReadWriteMany-Validierung (RWX) Probleme bei der Volume-Bereitstellung verursacht. Außerdem behebt es Fehler bei resourceVersion und Bookmarks in der Watch-API, damit API-Clients korrekt synchronisieren, und korrigiert die Anzeige der IP-Adressen von Load Balancern in der Service-Ansicht des Dashboards.

## Abhängigkeiten

Cilium CNI wurde auf v1.18.6 aktualisiert und bringt damit die neuesten Sicherheits- und Performance-Verbesserungen mit. Talos Linux wurde auf v1.11.6 mit den aktuellen Sicherheitspatches aktualisiert.

## Dokumentation

Auch die Dokumentation ist aktualisiert und verständlicher geworden. Neu ist eine [ausführliche Anleitung](https://cozystack.io/docs/v0/virtualization/cloneable-vms/) zum Klonen und Verwalten virtueller Maschinen. Die Einrichtung des NFS-Treibers ist einfacher beschrieben, die Installationsschritte für [Hetzner](https://cozystack.io/docs/v0/install/providers/hetzner/#11-install-boot-to-talos-in-rescue-mode) und [Servers.com](https://cozystack.io/docs/v0/install/providers/servers-com/) wurden aktualisiert, und es gibt jetzt [Details](https://cozystack.io/docs/v0/install/providers/hetzner/#32-create-a-load-balancer-with-robotlb) zur Einrichtung öffentlicher IP-Adressen mit Hetzner RobotLB.

**Alle Änderungen und Verbesserungen:** [0.41.0](https://github.com/cozystack/cozystack/releases/tag/v0.41.0), [0.41.1](https://github.com/cozystack/cozystack/releases/tag/v0.41.1), [0.41.2](https://github.com/cozystack/cozystack/releases/tag/v0.41.2)

Vielen Dank an alle, die zur Linie 0.41 beigetragen haben: [@IvanHunters](https://github.com/IvanHunters), [@kvaps](https://github.com/kvaps), [@sircthulhu](https://github.com/sircthulhu), [@matthieu-robin](https://github.com/matthieu-robin)

### Werden Sie Teil der Community

- [Telegram-Gruppe](http://t.me/cozystack)
- [Slack](https://kubernetes.slack.com/archives/C06L3CPRVN1)-Gruppe (Einladung über [https://slack.kubernetes.io](https://slack.kubernetes.io/))

Von [Timur Tukaev](https://medium.com/@tym83) am [23. Januar 2026](https://medium.com/p/d93ce116eb88).

[Kanonischer Link](https://medium.com/@tym83/cozystack-v0-41-0-managed-mongodb-d93ce116eb88)

Exportiert von [Medium](https://medium.com) am 11. Mai 2026.
