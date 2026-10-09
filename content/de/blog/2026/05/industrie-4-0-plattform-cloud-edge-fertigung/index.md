---
title: "Industrie-4.0-Plattform — Cloud- und Edge-Architektur für die Fertigung 2026"
seo_title: "Industrie 4.0: Cloud- und Edge-Architektur"
description: "Industrie-4.0-Cloud und Edge 2026: wer sie aufbaut und betreibt, ihr Platz im Purdue-Modell, GPU-Inspektion, Schutz von Industrie-IP und NIS2 für Hersteller."
slug: "industrie-4-0-plattform-cloud-edge-fertigung"
date: "2026-05-17"
lastmod: "2026-10-09"
cover_image: "/img/blog/covers/de/industrie-4-0-plattform-cloud-edge-fertigung.jpg"
author: "Timur Tukaev"
type: "article"
topics: ["NIS2", "Cozystack", "Sovereignty", "AI and ML", "Compliance"]
language: "de"
hreflang_en: "/blog/2026/05/manufacturing-cloud-industry-40-edge/"
companion_landing: "/de/branchen/fertigung/"
faq:
  - q: "Wer baut und betreibt typischerweise eine Fertigungs-Cloud?"
    a: "Drei Arten von Betreibern: die Konzern-IT eines Herstellers mit mehreren Werken, die eine Private Cloud für die eigenen Standorte betreibt, ein regionaler Cloud- oder Hosting-Anbieter, der Kapazität an den industriellen Mittelstand verkauft, und ein Systemintegrator, der Werks-IT für viele Hersteller liefert. Alle drei nutzen dieselbe Cozystack-Engine; der Unterschied liegt darin, ob die kommerzielle Schicht (Abrechnung, gebrandetes Portal) eingeschaltet ist."
  - q: "Übernimmt die Plattform die Echtzeitsteuerung der Maschinen?"
    a: "Nein. Die Plattform sitzt auf den Purdue-Ebenen 3 und 3.5 — Standortbetrieb und industrielle DMZ. SPS, SCADA und Sicherheitssysteme bleiben in ihrem eigenen Netz unter ihrem eigenen Change-Management. Auf der Plattform läuft die Schicht darüber: MES, Historians, OPC-UA-Collector, Inferenz für die Qualitätsprüfung und die Datenpipeline zur Zentrale."
  - q: "Was passiert in einem Werk, wenn die WAN-Verbindung zur Zentrale ausfällt?"
    a: "Der Standort-Cluster läuft weiter. Seine Workloads arbeiten aus lokalem Storage, der innerhalb des Standorts repliziert wird, und die Steuerung hing ohnehin nie von der Plattform ab. Replikation nach oben, zentrale Dashboards und standortübergreifende Aggregation pausieren; gepufferte Daten fließen ab, sobald die Verbindung zurück ist."
  - q: "Wie werden GPUs für die visuelle Qualitätsprüfung genutzt?"
    a: "NVIDIA-Rechenzentrums-GPUs werden über den NVIDIA GPU Operator unterstützt. In Tenant-Kubernetes-Clustern teilen sich mehrere Prüfmodelle eine Karte über MIG-Partitionen auf MIG-fähigen Karten oder über Time-Slicing mit HAMi. Virtuelle Maschinen erhalten ganze GPUs per Passthrough oder NVIDIA vGPU mit Ihrer eigenen NVIDIA-vGPU-Lizenz."
  - q: "Macht die Plattform einen Hersteller NIS2-konform?"
    a: "Das leistet keine Plattform allein. Die Herstellung kritischer Produkte steht in Anhang II der NIS2-Richtlinie, und die Pflichten bleiben beim Hersteller. Die Plattform ist darauf ausgelegt, die Maßnahmen nach Artikel 21 zu unterstützen: Tenant-Isolation, Netzwerksegmentierung, optionale Volume-Verschlüsselung, Audit-Logs mit konfigurierbarer Aufbewahrung und Air-Gap-Installation."
quiz:
  title: "Wissens-Check: Architektur einer Industrie-4.0-Plattform"
  questions:
    - q: "Welche drei Arten von Betreibern bauen und betreiben laut Artikel tatsächlich Fertigungs-Clouds?"
      options:
        - { text: "Hyperscaler, SPS-Hersteller und Maschinenbauer", correct: false }
        - { text: "Konzern-IT, regionale Cloud- oder Hosting-Anbieter und Systemintegratoren", correct: true }
        - { text: "Ausschließlich die IT-Abteilung jedes einzelnen Werks", correct: false }
        - { text: "Telcos, nationale Aufsichtsbehörden und Zertifizierungsstellen", correct: false }
      explanation: "Der Artikel nennt die Konzern-IT eines Herstellers mit mehreren Werken, regionale Cloud- und Hosting-Anbieter, die an den industriellen Mittelstand verkaufen, und Systemintegratoren, die Werks-IT für viele Hersteller liefern. Die Engine ist dieselbe; die kommerzielle Schicht wird nur dort eingeschaltet, wo Kapazität verkauft wird."
    - q: "Wo im Purdue-Modell sitzt die Plattform?"
      options:
        - { text: "Auf den Ebenen 0 bis 2, direkt neben SPS und Sensoren", correct: false }
        - { text: "Nur auf Ebene 5, im zentralen Rechenzentrum", correct: false }
        - { text: "Auf den Ebenen 3 und 3.5 — Standortbetrieb und industrielle DMZ", correct: true }
      explanation: "Die Plattform liegt auf den Ebenen 3 und 3.5 und reicht nicht in die Ebenen 0 bis 2 hinein. Controller, SPS, SCADA und Sicherheitssysteme bleiben in ihrem eigenen Netz; auf der Plattform laufen MES, Historians, OPC-UA-Collector, Prüf-Inferenz und die Pipeline nach oben."
    - q: "Was tut ein Standort-Cluster, wenn die Verbindung zur Zentrale ausfällt?"
      options:
        - { text: "Er läuft aus lokalem Storage weiter; Replikation nach oben und zentrale Dashboards pausieren", correct: true }
        - { text: "Er schwenkt automatisch auf ein anderes Rechenzentrum um", correct: false }
        - { text: "Er steht still, bis die Control Plane in der Zentrale wieder erreichbar ist", correct: false }
      explanation: "Die Workloads des Standorts arbeiten weiter aus Storage, der innerhalb des Standorts repliziert wird. Es pausieren Replikation nach oben, zentrale Dashboards und standortübergreifende Aggregation; gepufferte Daten fließen ab, sobald die Verbindung zurück ist. Die Produktion wartet nicht auf eine WAN-Leitung."
    - q: "Welche GPU-Modi beschreibt der Artikel für Workloads der Qualitätsprüfung?"
      options:
        - { text: "MIG-Slices, die standardmäßig virtuellen Maschinen zugewiesen werden", correct: false }
        - { text: "MIG oder HAMi-Time-Slicing in Tenant-Kubernetes; Passthrough oder vGPU für VMs", correct: true }
        - { text: "Nur Passthrough ganzer GPUs; Sharing ist nicht möglich", correct: false }
        - { text: "AMD- und Intel-Beschleuniger mit voller Operator-Automatisierung", correct: false }
      explanation: "In Tenant-Kubernetes-Clustern stellt der NVIDIA GPU Operator MIG-Partitionen bereit, HAMi liefert Time-Slicing. Virtuelle Maschinen erhalten ganze GPUs per Passthrough oder NVIDIA vGPU mit der eigenen NVIDIA-vGPU-Lizenz des Kunden."
    - q: "Wie beschreibt der Artikel die Rolle der Plattform bei NIS2 für Hersteller kritischer Produkte?"
      options:
        - { text: "Die Plattform zertifiziert den Hersteller als NIS2-konform", correct: false }
        - { text: "NIS2 gilt für die Fertigung überhaupt nicht", correct: false }
        - { text: "Darauf ausgelegt, die Maßnahmen nach Artikel 21 zu unterstützen; die Pflichten bleiben beim Hersteller", correct: true }
      explanation: "Die Herstellung kritischer Produkte steht in Anhang II (wichtige Einrichtungen). Die Plattform liefert architektonische Kontrollen — Isolation, Segmentierung, optionale Verschlüsselung, Audit-Logs mit konfigurierbarer Aufbewahrung, Air-Gap —, Pflichten und Nachweise bleiben aber beim Hersteller."
---

Die meisten Industrie-4.0-Diagramme beginnen bei der Cloud und enden am Sensor. Diese Reihenfolge verdeckt die beiden Fragen, an denen sich entscheidet, ob eine Fertigungsplattform funktioniert: Wer betreibt sie in den nächsten zehn Jahren, und was macht das Werk, wenn die Verbindung zur Zentrale abreißt? Dieser Artikel beginnt genau dort.

## Was Industrie 4.0 für die Infrastruktur bedeutet

Nimmt man dem Begriff das Marketing, bleibt eine Reihe von Workloads mit sehr unterschiedlichen Anforderungen. Sensoren und Maschinen liefern einen stetigen Datenstrom, der nah an der Linie erfasst werden muss. Die Qualitätsprüfung läuft auf Kameras und Modellen, die eine GPU direkt am Band brauchen. Predictive Maintenance und digitale Zwillinge benötigen Monate an Historie und viel Rechenleistung, aber keine Eile. Dazwischen liegen MES, Historians und Planungssysteme, von denen viele vom Hersteller nur als virtuelle Maschine auf genau einem Betriebssystem unterstützt werden.

Die Infrastruktur muss also alte VMs und neue Container nebeneinander betreiben, latenzkritische Arbeit am Standort halten und Daten dorthin weiterreichen, wo Analytics und Training stattfinden. Genau das bedeutet OT/IT-Konvergenz für diejenigen, die sie bauen — kein zusammengelegtes Netz, sondern eine Plattform, die beide Arten von Workloads trägt.

## Wer eine Fertigungs-Cloud tatsächlich aufbaut und betreibt

Ein einzelnes Werk baut selten eine Cloud. In der Praxis tun das drei Arten von Betreibern, und die Architektur sollte zu dem passen, der Sie sind.

**Die Konzern-IT eines Herstellers mit mehreren Werken.** Ein zentrales Team betreibt eine Private Cloud für die eigenen Werke, regionalen Standorte und die Zentrale. Ihr Problem ist Konsistenz: Zwanzig Standorte, die auseinanderdriften, werden zu zwanzig Plattformen. Das ist der Fall für die [Ænix Private Cloud Platform](/de/produkte/private-cloud-platform/) — mehrere Standorte, Air-Gap-fähig, mit Developer Self-Service für die Teams, die Prüfmodelle und Datenpipelines entwickeln.

**Ein regionaler Cloud- oder Hosting-Anbieter.** Viele Unternehmen aus dem industriellen Mittelstand wollen gar keine Infrastruktur betreiben, ihre Konstruktionsdaten aber auch nicht in einer Hyperscaler-Region ablegen. Ein regionaler Anbieter kann ihnen eine souveräne Cloud mit VMs, Kubernetes und Managed Databases verkaufen und einen Edge-Cluster im Werk des Kunden aufstellen. Das ist der Fall für die [Ænix Public Cloud Platform](/de/produkte/public-cloud-platform/): dieselbe Engine plus Abrechnung, gebrandetes Kundenportal und WHMCS-Integration.

**Ein Systemintegrator.** Integratoren, die bereits MES und Werks-IT für viele Hersteller liefern, können daraus eine Managed-Plattform unter eigener Marke machen. Verschachtelte Tenants geben jedem Kunden einen eigenen isolierten Bereich, und White-Labeling — eine Open-Source-Funktion von Cozystack — bringt die Identität des Integrators ins Portal. Wie das eingerichtet wird, beschreibt die Leistung [White-Label-Cloud](/de/dienstleistungen/white-label-cloud/).

Alle drei teilen sich eine Engine, weil das technische Problem dasselbe ist. Unterschiedlich ist nur, ob die kommerzielle Schicht eingeschaltet ist und wer die Rufbereitschaft trägt.

## Die dreistufige Architektur

```
HQ cloud (Cozystack)
   ├── Analytics and data warehouse
   ├── ML training
   └── Enterprise integration (ERP, PLM, supply chain)
        ↓ (data flow)
Regional sites (Cozystack)
   ├── Regional aggregation
   ├── Production planning
   └── Quality systems
        ↓
Production-floor edge (Cozystack)
   ├── IoT and OPC-UA data ingestion
   ├── Local AI inference for inspection
   ├── MES functions and historians
   └── OT/IT interface (industrial DMZ)
```

Jede Ebene ist ein eigener Cluster, der auf dieselbe Weise installiert und geändert wird. Genau darum geht es, wenn Cozystack auf allen drei Ebenen läuft: ein Satz Runbooks, ein Upgrade-Verfahren, eine Art, einen Tenant zu beschreiben — statt drei unabhängiger Stacks.

### Wo die Plattform im Purdue-Modell sitzt

Die Plattform liegt auf den Ebenen 3 und 3.5 — Standortbetrieb und industrielle DMZ. In die Ebenen 0 bis 2 reicht sie nicht hinein. Controller, SPS, SCADA und Sicherheitssysteme bleiben, wo sie sind: in ihrem eigenen Netz und unter ihrem eigenen Change-Management. Auf der Plattform läuft die Schicht darüber: MES und Historians, OPC-UA-Collector und Unified-Namespace-Broker, Inferenz für die Qualitätsprüfung und die Pipeline, die Daten auf die Unternehmensebene trägt.

Aus dieser Einordnung ergibt sich auch die Sicht nach IEC 62443. Die Plattform bildet eine oder mehrere Zonen mit definierten Conduits ins OT-Netz, Segmentierung wird damit zur Eigenschaft des Designs statt zu einer Liste von Firewall-Ausnahmen. Cilium Network Policies definieren die Conduits; Tenant-Grenzen trennen eine Linie, einen Standort oder einen Joint-Venture-Partner. Die Zertifizierung industrieller Geräte auf Komponentenebene bleibt Pflicht der Gerätehersteller — keine Infrastrukturplattform kann sie erteilen.

### Was die Fertigung tut, wenn der Uplink ausfällt

Diese Frage entscheidet über die Architektur, also sollte die Antwort klar sein: Der Standort-Cluster läuft weiter. Die Steuerung hing nie von der Plattform ab, weil sie darunter liegt. Historian, Prüf-Inferenz und die MES-Funktionen am Standort arbeiten weiter aus lokalem LINSTOR-Storage, ihr Zustand wird innerhalb des Standorts repliziert und nicht zur Zentrale. Es stoppt, was stoppen soll — Replikation nach oben, zentrale Dashboards, standortübergreifende Aggregation. Kommt die Verbindung zurück, fließen gepufferte Daten ab und der Standort synchronisiert sich neu.

Deshalb passt ein Edge-Dienst eines Hyperscalers schlecht in eine Fabrik. Hängt die Edge an einer Control Plane in einem anderen Land, hängt die Fähigkeit des Werks, irgendetwas zu ändern, an einer WAN-Leitung.

## Die Plattformfunktionen, die in der Fertigung zählen

**VMs und Container über eine API.** KubeVirt betreibt das vom Hersteller unterstützte MES oder den Historian als gewöhnliche virtuelle Maschine neben containerisierten Collectoren und Inferenzdiensten. Niemand muss eine Anwendung neu paketieren, die der Hersteller nur auf einem Betriebssystem unterstützt.

**Verschachtelte Tenants.** Ein Tenant kann Tenants enthalten: der Konzern, darunter ein Standort, darunter eine Linie oder ein Projektteam, jeweils mit eigenen Quotas, Zugriffsrechten und Netzwerkgrenzen. Für einen Anbieter oder Integrator trennt dieselbe Hierarchie einen Hersteller vom anderen und die Werke eines Herstellers voneinander.

**Managed Services aus einem Katalog.** PostgreSQL, Kafka, ClickHouse, S3-kompatibler Object Storage und Tenant-Kubernetes-Cluster werden auf jeder Ebene aus demselben Katalog bestellt. Eine Datenpipeline, die in einem Werk entsteht, wird im nächsten durch dieselbe Deklaration aufgebaut, nicht durch eine neue Runde manueller Installationen.

**GitOps über alle Standorte.** Cozystack selbst wird aus Git abgeglichen, und Tenants können darüber ihr eigenes GitOps betreiben. Eine Änderung an der Standard-Standortkonfiguration ist ein Pull Request, den jeder Standort übernimmt — der einzige realistische Weg, zwanzig Werke vor dem Auseinanderdriften zu bewahren.

**Observability pro Tenant.** Metriken und Logs werden pro Tenant erfasst, sodass Werksteams ihre eigenen Workloads sehen und das zentrale Team den gesamten Bestand. Die Aufbewahrungsdauer der Audit-Logs ist konfigurierbar, und die Logs lassen sich in einen eigenen unveränderlichen Speicher des Kunden ausleiten.

**Air-Gap-Installation.** Für Werke, deren Sicherheitskonzept keinen Internetzugang erlaubt, hat Cozystack einen dokumentierten Installationsweg ohne Internetverbindung, bei dem die Images in den Perimeter gespiegelt werden. Er ist Teil des Open-Source-Cozystack; Support von Ænix für Air-Gap-Installationen beginnt laut [Preisseite](/de/preise/) mit der Stufe Plus.

## GPUs für die Qualitätsprüfung

Visuelle Prüfung hat ein typisches Profil: viele kleine Modelle, die jeweils eine Station überwachen und ununterbrochen laufen. Jedem davon eine ganze GPU zu geben, verschwendet den Großteil der Karte.

NVIDIA-Rechenzentrums-GPUs werden über den NVIDIA GPU Operator unterstützt. In Tenant-Kubernetes-Clustern stellt der Operator MIG-Partitionen auf MIG-fähigen Karten als planbare Ressourcen bereit, die Workloads in Hardware trennen; HAMi liefert Time-Slicing mit Speicher- und Rechenlimits pro Workload. Virtuelle Maschinen erhalten ganze GPUs per Passthrough oder NVIDIA vGPU mit Ihrer eigenen NVIDIA-vGPU-Lizenz. Das Training dieser Modelle gehört meist in die Zentrale, wo sich GPUs bündeln lassen; diese Seite deckt die [Ænix AI Platform](/de/produkte/ai-platform/) ab. Die Fallstudie [interne Daten- und KI-Plattform](/de/case-studies/internal-data-and-ai-platform/) zeigt GPU-Pools mit Quotas pro Tenant und einen gemeinsamen Scheduler für Pods und VMs — nicht in der Fertigung, aber nach demselben Muster.

## Souveränität für Industrie-IP

Konstruktionsdaten, Rezepturen und Prozessspezifikationen sind das, womit ein Hersteller im Wettbewerb besteht. Ein Abfluss ist ein Wettbewerbsschaden, nicht nur ein Compliance-Befund — deshalb gelten für Industrie-IP meist strengere Anforderungen als für gewöhnliche Unternehmensdaten.

Die architektonische Antwort hat drei Teile. Die Plattform läuft auf Hardware und in einer Rechtsordnung Ihrer Wahl, auf Wunsch vollständig ohne Internetverbindung. Volume-Verschlüsselung at rest (LINSTOR und LUKS) ist optional pro Storage-Klasse, mit einer Passphrase, die der Hersteller hält; den Prozess für das Schlüsselmanagement legen wir beim Aufbau gemeinsam mit Ihnen fest. Und weil Cozystack Open Source unter Apache 2.0 ist, läuft die Plattform auch ohne Ænix weiter — es gibt keine proprietäre Control Plane, die erreichbar bleiben muss. Ænix-Engineers arbeiten in Ihrer Umgebung nur mit Ihrer Freigabe.

## NIS2 für Hersteller kritischer Produkte

NIS2 führt die Herstellung kritischer Produkte — Medizinprodukte, Computer, elektronische Geräte, Maschinen, Kraftfahrzeuge — in Anhang II unter den wichtigen Einrichtungen. Die Risikomanagementmaßnahmen nach Artikel 21 und die Meldefristen nach Artikel 23 erreichen damit viele Werke, die sich nie als kritische Infrastruktur verstanden haben.

Die Plattform ist darauf ausgelegt, diese Maßnahmen zu unterstützen: Tenant-Isolation, Netzwerksegmentierung, optionale Verschlüsselung, Audit-Logs und Betrieb ohne Internetverbindung. Pflichten, Risikoregister und Incident-Prozess bleiben beim Hersteller. Die [NIS2-Nachweisseite](/de/compliance/nis2/) ordnet jeden Bereich von Artikel 21 dem zu, was die Plattform liefert und was nicht, und die [NIS2-Checkliste für Cloud-Infrastruktur](/de/blog/2026/05/nis2-checkliste-cloud-architektur/) geht die Architekturarbeit Schritt für Schritt durch.

## Wie die Nachweise heute aussehen

Auf dieser Website wird kein Fertigungskunde namentlich genannt. Die nächstliegende veröffentlichte Umsetzung mit demselben strukturellen Muster — mehrere Standorte, Tenant-Isolation, vom Kunden betrieben — ist die Fallstudie [souveräne Public Cloud](/de/case-studies/sovereign-public-cloud/): ein Anbieter, der einen Compute-Cluster über drei Rechenzentren mit synchroner Replikation betreibt, mit Tenants und Sub-Tenants sowie Volume-Verschlüsselung. Eine ähnliche IT/OT-Trennung hat die Energiewirtschaft, beschrieben in [Smart-Grid-Plattformarchitektur](/de/blog/2026/05/smart-grid-plattform-architektur-it-ot/).

## Wann das nicht passt

**Ein Werk, eine Handvoll VMs.** Besteht der gesamte Bestand aus ein paar virtuellen Maschinen in einem Serverraum, ist eine mehrstufige Plattform mehr, als Sie brauchen. Ein einfacher Virtualisierungs-Stack reicht, bis ein zweiter Standort oder ein GPU-Workload hinzukommt.

**Harte Echtzeitsteuerung.** Die Plattform führt keine SPS-Logik und keine Sicherheitsfunktionen aus und soll das auch nicht. Geht es im Projekt eigentlich um die Ebenen 0 bis 2, brauchen Sie Anbieter industrieller Steuerungstechnik, keine Cloud-Plattform.

**Eine Hyperscaler-first-Strategie.** Ist das Zielbild das Edge-Produkt eines Hyperscalers und akzeptieren Sie dessen Control Plane, löst eine herstellerneutrale souveräne Plattform ein Problem, das Sie bewusst nicht haben wollen.

**Niemand, der sie betreibt.** Eine Plattform an zwanzig Standorten braucht ein Betriebsteam. Kann die Konzern-IT keines besetzen, bleiben Managed Operations durch Ænix oder ein regionaler Anbieter bzw. Integrator, der den Betrieb übernimmt — genau deshalb gibt es diese Betreiber in diesem Markt.

## Wie Sie anfangen

Für die Konzern-IT führt der Weg über ein kostenloses 30-minütiges Erstgespräch, dann das [Platform Readiness Assessment](/de/dienstleistungen/platform-readiness-assessment/) zum Festpreis über 14 oder 28 Tage, dann einen Aufbau von 3–12 Monaten je nach Umfang — oft beginnend mit einem Standort oder einer Workload-Klasse. Die Private Cloud Platform wird per RFP angeboten.

Für Anbieter und Integratoren ist die Public Cloud Platform ein produktisierter Installer, der wenige Wochen nach Bereitstellung der Hardware live geht. Subscriptions beginnen bei $1,250 pro 10 Nodes und Monat in der Stufe Basic bei jährlicher Abrechnung; die vollständige Übersicht steht auf der [Preisseite](/de/preise/). Die Dokumentation des Open-Source-Projekts finden Sie auf [cozystack.io](https://cozystack.io).
