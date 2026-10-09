---
title: "Managed Kubernetes in der Open-Source-Plattform Cozystack: Warum wir das machen"
seo_title: "Managed Kubernetes in Cozystack: Warum wir es bauen"
description: "Warum Cozystack einen Managed-Kubernetes-Service mitbringt: eine Kubernetes-API in Ihrer eigenen Cloud, über die Nutzer Services und Ressourcen abrufen."
slug: "managed-kubernetes-cozystack-warum"
date: "2024-08-23"
cover_image: "/img/blog/covers/de/managed-kubernetes-cozystack-warum.jpg"
author: "Timur Tukaev"
type: "article"
topics: ["Kubernetes", "Cozystack", "Multi-tenancy", "Observability", "Terraform"]
language: "de"
hreflang_en: "/blog/2024/08/managed-kubernetes-in-open-source-platform-cozystack-why-were-doing-this/"
quiz:
  title: "Testen Sie Ihr Wissen: Managed Kubernetes in Cozystack"
  questions:
    - q: "Warum braucht im Managed-Kubernetes-Modell jeder Nutzer einen eigenen Cluster?"
      options:
        - { text: "Kubernetes ist auf Single-Tenancy ausgelegt", correct: true }
        - { text: "Abrechnungsprozesse sind mit einem Cluster pro Nutzer einfacher", correct: false }
        - { text: "Helm-Releases geraten in Konflikt, wenn Tenants sie teilen", correct: false }
      explanation: "Managed Kubernetes stellt Ihren Nutzern eine Kubernetes-API in Ihrer Cloud bereit. Kubernetes arbeitet als Single-Tenant-System, daher ist pro Nutzer ein eigener Cluster nötig. Das ist die architektonische Grundannahme."
    - q: "Welche Services erwarten Nutzer laut Artikel heute von jeder modernen Cloud?"
      options:
        - { text: "Nur VMs und Block Storage zur Selbstverwaltung", correct: false }
        - { text: "Ausschließlich KI-Inferenz-Endpunkte mit tokenbasierter Abrechnung", correct: false }
        - { text: "Kubernetes, Object Storage, Monitoring, Managed-Datenbanken", correct: true }
      explanation: "Die führenden Cloud-Anbieter haben die Erwartungen verändert: Nutzer erwarten Kubernetes, Simple Storage Services, Monitoring, Managed-Datenbanken und mehr. Nur VMs zu verkaufen reicht nicht mehr, denn Nutzer bauen ihre Infrastruktur aus diesen Services wie aus Bausteinen."
    - q: "Welchen typischen Fehler nennt der Artikel, wenn Teams Managed Kubernetes selbst bauen?"
      options:
        - { text: "Cilium statt Calico als CNI des Clusters zu wählen", correct: false }
        - { text: "Daten liegen in VMs, und das Cluster-Autoscaling funktioniert nicht", correct: true }
        - { text: "Kleinen Inferenz-Jobs zu viele GPUs zuzuteilen", correct: false }
      explanation: "Typische Fehler entstehen aus einem falschen Verständnis der Kubernetes-Konzepte und der Bedürfnisse der Endnutzer: Daten werden in VMs gespeichert (was die Flexibilität von K8s zunichtemacht), und das Cluster-Autoscaling funktioniert nicht richtig. Deshalb sind die meisten Kubernetes-Installationen als Managed Service nicht voll funktionsfähig."
    - q: "Warum ist Know-how für den Betrieb von Managed Kubernetes as a Service so selten?"
      options:
        - { text: "Hyperscaler halten Patente auf das Operator-Pattern", correct: false }
        - { text: "Die Zertifizierung setzt mehr als 10 Jahre Praxis auf CKA-Niveau voraus", correct: false }
        - { text: "Nur wenige wissen, wie man einen vollständigen Managed-K8s-Service baut", correct: true }
      explanation: "Viele wissen, wie man Kubernetes NUTZT; weniger wissen, wie man es on premises ADMINISTRIERT; und kaum jemand weiß, wie man einen vollwertigen Managed-Kubernetes-Service BAUT. Diese Lücke ist strukturell, und deshalb erreichen die meisten Versuche die Ergebnisse der Hyperscaler nur teilweise."
    - q: "Welche Veränderung im Marktverhalten beobachtet der Artikel?"
      options:
        - { text: "Der klassische VM-Verkauf geht zugunsten intelligenterer Services zurück", correct: true }
        - { text: "Nutzer kaufen pro Workload mehr virtuelle Maschinen als früher", correct: false }
        - { text: "Eine Rückkehr zu physischen Servern und reinen Bare-Metal-Deployments", correct: false }
      explanation: "Der Artikel beginnt mit der Frage: Haben Sie bemerkt, dass der Verkauf klassischer virtueller Maschinen zurückgeht? Nutzer wollen intelligentere Services, um Anwendungen bereitzustellen, ihre Infrastruktur mit Tools wie Terraform als Code zu verwalten und Managed Services als Bausteine zu nutzen, statt VMs und Datenbanken manuell zu konfigurieren."
---



![Managed Kubernetes in Cozystack](/img/blog/medium/managed-kubernetes-in-open-source-platform-cozystack-why-were-doing-this/cover.png)

**Ein Managed Kubernetes Service** ist eine Kubernetes-API in Ihrer Cloud, über die Ihre Nutzer Services anfordern und Ressourcen Ihrer Cloud nutzen können. Kubernetes ist auf Single-Tenancy ausgelegt, daher braucht jeder Nutzer einen eigenen Cluster.

Kubernetes ist heute der De-facto-Standard für das Deployment von Server-Workloads. Nahezu jede moderne Anwendung wird mit der Annahme entwickelt, dass sie in Kubernetes laufen wird. Dieser Wandel hat neue Standards für die Bereitstellung von Infrastruktur gesetzt.

Haben Sie bemerkt, dass der Verkauf klassischer virtueller Maschinen zurückgeht? Nutzer suchen heute nach intelligenteren Services, um ihre Anwendungen bereitzustellen. Sie wollen ihre Infrastruktur mit modernen Tools wie Terraform als Code verwalten. Virtuelle Maschinen und Datenbanken müssen sie nicht mehr von Hand konfigurieren: Sie kaufen einfach Managed Services und müssen sich um nichts weiter kümmern. Aus solchen Services bauen sie ihre Infrastruktur zusammen, als wären es Bausteine.

Die führenden Cloud-Anbieter haben die Art, wie Infrastruktur bereitgestellt wird, so verändert, dass die Branche nie wieder dieselbe sein wird. Heute erwarten Nutzer von jeder modernen Cloud ein bestimmtes Set an Services: Kubernetes, Simple Storage Services, Monitoring, Managed-Datenbanken und so weiter.

![Services, die Nutzer von einem Cloud-Anbieter erwarten, bereitgestellt über Kubernetes](/img/blog/medium/managed-kubernetes-in-open-source-platform-cozystack-why-were-doing-this/02.png)

Kubernetes spielt dabei eine Schlüsselrolle, weil es einen bequemen und einheitlichen Weg bietet, Cloud-Ressourcen zu nutzen und Workloads in jeder beliebigen Cloud zu betreiben. Für den Nutzer ist Kubernetes überall gleich, für den Administrator jedoch nicht. Da Kubernetes bei Cloud-Anbietern ein beliebter Service ist, wissen viele, wie man damit arbeitet. Weniger wissen, wie man es on premises administriert, und kaum jemand weiß, wie man einen vollwertigen Managed-Kubernetes-Service aufbaut.

Viele versuchen, den Erfolg der führenden Cloud-Anbieter nachzubilden, doch die meisten Kubernetes-Installationen sind nicht voll funktionsfähig. Bei solchen Integrationen passieren viele Fehler: Die Daten liegen zum Beispiel meist in virtuellen Maschinen, was die Flexibilität zunichtemacht, und das Cluster-Autoscaling funktioniert nicht richtig. Die Ursache ist jedes Mal fehlendes Verständnis der Kubernetes-Konzepte und der Bedürfnisse der Endnutzer.

Wir setzen Kubernetes seit vielen Jahren in Produktionsumgebungen ein und betreiben es. Wir wissen, was Ihre Nutzer wirklich wollen und wie ein echtes Managed Kubernetes aussehen sollte. Zu unserem Portfolio gehören Projekte, in denen wir die automatische Bereitstellung von Kubernetes auf Bare-Metal-Servern ebenso wie in virtuellen Maschinen aufgebaut haben. Wir haben umfangreiche Erfahrung mit privaten und öffentlichen Clouds für Kubernetes und wissen, wie man es richtig macht. Vertrauen Sie uns den Aufbau Ihres eigenen Managed-Kubernetes-Service für Ihre Nutzer an und werden Sie noch heute zu einem zuverlässigen Kubernetes-Anbieter.

Von [Timur Tukaev](https://medium.com/@tym83) am [23. August 2024](https://medium.com/p/94d42c7c48da).

[Kanonischer Link](https://medium.com/@tym83/managed-kubernetes-in-open-source-platform-cozystack-why-were-doing-this-94d42c7c48da)

Exportiert von [Medium](https://medium.com) am 11. Mai 2026.
