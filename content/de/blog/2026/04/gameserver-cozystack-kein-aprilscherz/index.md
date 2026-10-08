---
title: "Gameserver auf Cozystack: Kein Aprilscherz"
description: "Warum das Cozystack-Team Gameserver ins Visier nimmt: Bare Metal statt Noisy Neighbors, External Apps als Paketmechanismus und Minecraft mit cozylex."
slug: "gameserver-cozystack-kein-aprilscherz"
date: "2026-04-01"
cover_image: "/img/blog/covers/de/gameserver-cozystack-kein-aprilscherz.jpg"
author: "Timur Tukaev"
type: "article"
topics: ["Open Source", "Kubernetes", "CNCF", "Cloud", "Game Servers", "Cozystack"]
language: "de"
hreflang_en: "/blog/2026/04/game-servers-on-cozystack-no-april-fools-joke/"
quiz:
  title: "Wissens-Check: Cozystack für Gameserver"
  questions:
    - q: "Wie viele Managed Services bringt Cozystack laut Artikel von Haus aus mit?"
      options:
        - { text: "Mehr als 20", correct: true }
        - { text: "Etwa 5 zentrale Managed Services", correct: false }
        - { text: "Hunderte, einschließlich Community-Add-ons", correct: false }
      explanation: "Über 20 Managed Services: Datenbanken (PostgreSQL, MariaDB, MongoDB), Message Queues (Kafka, RabbitMQ), Caching (Redis), S3-Storage, virtuelle Maschinen, Kubernetes-Cluster, Netzwerk, Load Balancer. Alles läuft auf der Hardware ohne zusätzliche Virtualisierungsschichten."
    - q: "Warum sind Gameserver laut Artikel eine besonders anspruchsvolle Workload?"
      options:
        - { text: "Sie brauchen auf jedem Node ständig GPU-Beschleunigung", correct: false }
        - { text: "Niedrige Latenz, unvorhersehbare Last und starke Isolation sind gleichzeitig gefordert", correct: true }
        - { text: "Sie hängen von proprietären Kernel-Patches und Tuning ab", correct: false }
      explanation: "Die Latenz muss minimal sein, die Last schwankt unvorhersehbar, und die Server müssen zuverlässig voneinander isoliert sein. Der „Noisy Neighbor“-Overhead der Virtualisierung, der bei Business-Anwendungen unsichtbar bleibt, fällt in Spielen sofort auf."
    - q: "Welcher Mechanismus steckt seit dem Release von Cozystack v1.0 hinter der Anbindung externer Anwendungen?"
      options:
        - { text: "Handgeschriebene Bash-Skripte, die von einem Bastion-Host laufen", correct: false }
        - { text: "Ein direkter OCI-Registry-Mirror, den Flux CD nutzt", correct: false }
        - { text: "Die Ressourcen Package und PackageSource, im Stil von apt für K8s", correct: true }
      explanation: "Seit v1.0 nutzt die Plattform eine paketbasierte Architektur mit den Ressourcen Package und PackageSource, die der cozystack-operator verwaltet. Das funktioniert wie apt unter Debian, nur für Kubernetes — Anwendungen werden als Helm-Charts paketiert, als OCI-Artefakte veröffentlicht und über ApplicationDefinition-CRDs beschrieben."
    - q: "Was ist „cozylex“?"
      options:
        - { text: "Ein eBPF-basiertes Netzwerk-Plugin für Spiele-Traffic", correct: false }
        - { text: "Ein Repository, das Managed Minecraft für Cozystack umsetzt", correct: true }
        - { text: "Ein Storage-Backend, optimiert für schreibintensive Spielstände", correct: false }
      explanation: "cozylex ist das erste External-Apps-Repository (gebaut von Aleksei Sviridkin / @lexfrei) und stellt Managed Minecraft auf Cozystack bereit. Das MinecraftServer-CRD liefert PaperMC-Server mit automatischen Updates, Backups und Limits; das MinecraftPlugin-CRD installiert Plugins aus Hangar mit automatischen Updates."
    - q: "Zu welcher geplanten Produktlinie soll sich die Arbeit an Gameservern entwickeln?"
      options:
        - { text: "Cozystack Lite, eine abgespeckte Edition für kleine Studios", correct: false }
        - { text: "PlayPack, ein kuratiertes Bündel freier Gameserver-Charts", correct: false }
        - { text: "Game Server Edition, mit Counter-Strike, Rust, FiveM usw.", correct: true }
      explanation: "Das Team will den Ansatz zur Game Server Edition ausbauen, Minecraft als offizielles Beispiel einer einbindbaren Anwendung übernehmen und Counter-Strike, Rust, FiveM, Factorio und weitere ergänzen."
---

Hallo, Welt! Wir haben [Cozystack](https://cozystack.io) entwickelt und pflegen es mit, eine Open-Source-Plattform für den Aufbau von Clouds auf eigener Hardware. Wir möchten erklären, warum wir uns entschieden haben, Gameserver ins Visier zu nehmen, und was daraus geworden ist.

![Bild](/img/blog/medium/game-servers-on-cozystack-no-april-fools-joke/cover.png)

## Was ist Cozystack

Cozystack ist eine Plattform, die gewöhnliche Server in eine vollwertige Cloud verwandelt. Das Projekt gehört zur CNCF Sandbox, steht unter der offenen Lizenz Apache 2.0 und wird auf Bare-Metal-Servern installiert.

Von Haus aus bringt die Plattform mehr als 20 Managed Services mit: Datenbanken (PostgreSQL, MariaDB, MongoDB usw.), Message Queues (Kafka, RabbitMQ), Caching (Redis), S3-Storage, virtuelle Maschinen, Kubernetes-Cluster, Netzwerk und Load Balancer. Alles läuft direkt auf der Hardware, ohne zusätzliche Virtualisierungsschichten.

## Warum Gameserver

Wir haben recherchiert und eine stabile Nachfrage gesehen: Hosting-Provider und Gaming-Communities suchen nach Alternativen mit vorhersehbarer Performance, ohne Bindung an einen bestimmten Anbieter und ohne komplizierte Lizenzierung.

Gameserver gehören zu den anspruchsvollsten Workloads überhaupt: Die Latenz muss minimal sein, die Last schwankt unvorhersehbar, und die Server müssen zuverlässig voneinander isoliert sein. Genau für dieses Szenario ist Cozystack gut geeignet.

Wer schon einmal Gameserver in der Cloud betrieben hat, kennt das Problem: Noisy Neighbors, unvorhersehbarer Jitter und Latenzspitzen. Virtualisierung fügt eine Schicht hinzu, die bei Business-Anwendungen unsichtbar bleibt, in Spielen aber sofort auffällt. Cozystack läuft auf Bare Metal: Ein Server erhält dedizierte Ressourcen, Netzwerkpakete werden so nah wie möglich an der Hardware verarbeitet, und die Daten werden über Nodes hinweg repliziert, sodass der Ausfall eines Servers nicht den Verlust der Spielwelt bedeutet.

Wir haben uns angesehen, was die Plattform bereits mitbringt, und festgestellt, dass der Großteil der Infrastruktur fertig war. S3 für Karten und Assets. Datenbanken für Spielerdaten und Statistiken. Redis für Sessions. Message Queues für die Kommunikation zwischen Servern. Load Balancer, VPN, geplante Backups. Es fehlten nur noch die Spiele selbst.

## Wie es funktioniert

Cozystack hat einen **External-Apps**-Mechanismus, um externe Anwendungs-Repositories anzubinden. Nach dem [Release von v1.0](https://cozystack.io/blog/2026/03/cozystack-1-0-release/) wurde er grundlegend überarbeitet: Die Plattform ist auf eine paketbasierte Architektur mit den Ressourcen **Package** und **PackageSource** umgestiegen, die der cozystack-operator verwaltet. Im Grunde funktioniert das wie apt unter Debian, nur für Kubernetes:

- Anwendungen werden als Helm-Charts paketiert und als OCI-Artefakte veröffentlicht
- Jede Anwendung wird über eine **ApplicationDefinition** beschrieben — ein CRD, das automatisch im Dashboard erscheint
- Der Nutzer stellt einen Server über UI oder API bereit, genau wie jeden anderen Managed Service
- Die Plattform verwaltet den Lebenszyklus: Updates, Backups, Monitoring

Jeder kann einen eigenen Anwendungskatalog zusammenstellen und an Cozystack anbinden, ohne den Kern anzufassen.

## Cozylex: Die erste Umsetzung

Den ersten Schritt machte das Repository [cozylex](https://github.com/lexfrei/cozylex), vorbereitet von unserem Entwickler [Aleksei Sviridkin](https://github.com/lexfrei), das einen Managed-Minecraft-Server umsetzt:

- **MinecraftServer** — ein CRD für PaperMC-Server mit automatischen Updates, Backups und Ressourcenlimits
- **MinecraftPlugin** — ein CRD zur Installation von Plugins aus Hangar mit automatischen Updates
- Plugins werden deklarativ über Label-Selektoren an Server gebunden

Die Anbindung an einen Cluster dauert ein paar Minuten, danach erscheint Minecraft im Marketplace neben PostgreSQL und Redis.

## Wie es weitergeht

Wir wollen diesen Ansatz ausbauen und daraus eine eigene Linie machen — die **Game Server Edition**. Kurzfristig planen wir, den Minecraft-Server als offizielles Beispiel einer einbindbaren Anwendung zu übernehmen und die Dokumentation zu aktualisieren. Danach folgen Counter-Strike, Rust, FiveM, Factorio und weitere.

## Zusammengefasst

Gameserver sind ein guter Belastungstest für eine Plattform. Wer eine Workload mit strengen Anforderungen an Latenz und I/O zuverlässig stemmt, stemmt alles.

Die Architektur von Cozystack erlaubt es, neue Diensttypen hinzuzufügen, ohne die Infrastruktur neu zu erfinden. Alles, was für den Betrieb nötig ist — Backups, Monitoring, Netzwerk, Storage —, ist von Haus aus vorhanden.

Wir freuen uns über Mitwirkende. Mit dem External-Apps-Mechanismus lassen sich Anwendungen hinzufügen, ohne den Kern der Plattform zu verstehen — Kenntnisse in Helm und Kubernetes genügen.

**Links:**

- [Cozystack](https://cozystack.io)
- [GitHub](https://github.com/cozystack/cozystack)
- [Cozylex](https://github.com/lexfrei/cozylex)
- [Dokumentation](https://cozystack.io/docs/)

---

Dieser Beitrag ist eine deutsche Fassung des Artikels [Game Servers on Cozystack: No April Fools’ Joke](https://blog.aenix.io/game-servers-on-cozystack-no-april-fools-joke-798704b32998), zuerst erschienen bei [Ænix](https://blog.aenix.io) auf Medium.
