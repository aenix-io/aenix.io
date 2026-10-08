---
title: "Die Evolution von Virtualisierungsplattformen: der Aufstieg der Managed Services und der Vorsprung lokaler Anbieter gegenüber Hyperscalern"
description: "Andrei Kvapil zeichnet den Weg von physischen Servern über VMs und Container zu Managed Services nach und zeigt, wie lokale Anbieter gegen Hyperscaler bestehen."
slug: "evolution-virtualisierungsplattformen-managed-services-lokale-anbieter"
date: "2025-06-04"
cover_image: "/img/blog/covers/de/evolution-virtualisierungsplattformen-managed-services-lokale-anbieter.jpg"
author: "Andrei Kvapil"
type: "article"
topics: ["Platform Engineering", "Kubernetes", "KubeVirt"]
language: "de"
hreflang_en: "/blog/2025/06/the-evolution-of-virtualization-platforms-the-rise-of-managed-services-and-local-providers-edge/"
---

Hallo zusammen! Ich bin Andrey Kvapil, CEO von Ænix und Entwickler von Cozystack, einer Open-Source-Plattform und einem Framework für den Aufbau von Cloud-Infrastruktur. In diesem Artikel möchte ich meine Sicht darauf teilen, wie moderne Cloud-Muster die Herangehensweise an Infrastruktur verändert haben, welche Rolle Service-Provider und Public Clouds in dieser Landschaft heute spielen und, vor allem, wie sich der Zweck der Virtualisierung im heutigen Infrastruktur-Stack grundlegend gewandelt hat.

![image](/img/blog/medium/the-evolution-of-virtualization-platforms-the-rise-of-managed-services-and-local-providers-edge/cover.jpg)

## Die zentrale Herausforderung für lokale Service-Provider

Moderne Anwendungen stützen sich auf einen stetig wachsenden Technologie-Stack: Datenbanken, Caches, Queues, S3-Storage und mehr. Diese Komplexität erhöht die technische und kognitive Last für Infrastrukturteams im Betrieb. Qualifizierte Engineers verlangen deshalb Spitzengehälter, und die Pflege der Infrastruktur wird deutlich teurer als die Entwicklung der Anwendungen selbst.

Mit wachsender Größe potenzieren sich die Risiken. Mehr Komponenten bedeuten mehr potenzielle Fehlerquellen, und ein einziger kritischer Designfehler kann das Wachstum bremsen oder ganze Systeme gefährden. Jede Minute Ausfallzeit bedeutet entgangenen Umsatz oder direkten finanziellen Schaden.

In der heutigen, von der Cloud geprägten Welt liegt die Verantwortung für die Infrastruktur zunehmend bei Service-Providern. Unternehmen bevorzugen inzwischen schlüsselfertige Lösungen und verlagern ihren Fokus vom Low-Level-Betrieb auf ihre eigentlichen Prioritäten. Das treibt die Migration von IaaS (bei dem Kunden Betriebssystem, Middleware und Runtime selbst verwalten) zu PaaS, bei dem Anbieter nicht nur die Infrastruktur pflegen, sondern Managed Services (Datenbanken, Message Broker usw.) so selbstverständlich bereitstellen wie das Starten einer VM.

![image](/img/blog/medium/the-evolution-of-virtualization-platforms-the-rise-of-managed-services-and-local-providers-edge/01.png)

Diese Verschiebungen haben den Zweck der Virtualisierung drastisch verändert. Virtuelle Maschinen verlieren gegenüber Managed Services an Boden: Kubernetes, Datenbanken, Caches, Queues und mehr. Das verschafft Cloud-Plattformen wie AWS, GCP und Azure einen strukturellen Vorteil gegenüber traditionellen Anbietern (vor allem lokalen, die keine vergleichbare Infrastruktur haben). Hyperscaler mit ihren riesigen F&E-Budgets und ganzen Heerscharen von Engineers haben längst ausgereifte PaaS-Angebote im Markt, während lokale Anbieter mit begrenzten Ressourcen oft bei einfachem IaaS festhängen und ständig hinterherlaufen.

Wie sind wir hierhin gekommen? Verfolgen wir den Aufstieg der „as-a-Service“-Ökosysteme und sehen wir uns konkrete Strategien an, mit denen lokale Anbieter gegen die etablierten Tech-Giganten antreten können.

## Am Anfang: Server als Haustiere

Damals liefen alle Server-Workloads ausschließlich vor Ort. Das Internet war langsam und unzuverlässig, öffentliche Dienste gab es nur bei Universitäten und großen Organisationen. Die Hardware stand im eigenen Haus, versteckt in den Serverräumen der Unternehmen, und wurde von Systemadministratoren sorgfältig gepflegt. Virtuelle Maschinen gab es noch nicht.

Jeder Server wurde von Hand so konfiguriert, dass er mehrere Anwendungen gleichzeitig stemmte, denn Prozessisolation war schlicht nicht üblich. Technisch hätte man zwar einen ganzen Server einer einzigen Anwendung widmen können, doch die ungenutzte Hardware wäre eine solche Verschwendung gewesen, dass sich das nur große Konzerne leisten konnten. Skalierung war eine noch größere Herausforderung.

Jedes Mal, wenn etwas Neues ausgerollt werden sollte, lief derselbe Prozess ab:

- Einen physischen Server kaufen, der die Anforderungen erfüllt.
- Das Betriebssystem installieren.
- Das Netzwerk einrichten.
- Die Anwendung oder Anwendungen installieren und konfigurieren.

Und lief der Server erst einmal, ging die Pflege weiter: Updates einspielen, Probleme beheben und den Server wie ein „Haustier“ behandeln. Man kümmerte sich um ihn, reparierte ihn, wenn er kaputtging, und tat alles, um ihn am Leben zu halten. Solange man nur wenige Server hatte, funktionierte das gut. Mit wachsender Anzahl wurde es jedoch zur mühsamen täglichen Routine.

## Der Siegeszug der Virtualisierung

Die Virtualisierung revolutionierte das Infrastrukturmanagement und vereinfachte unzählige Aufgaben. Sie erlaubte einen deutlich flexibleren Umgang mit Servern. Vorbei waren die Zeiten, in denen man für jedes Server-Setup neue Hardware kaufen musste: Nun konnte man einfach Ressourcen aus dem Hypervisor zuweisen und eine VM starten. Hardwareausfälle verloren an Schrecken, weil VMs auf andere Server migriert werden konnten. Die Möglichkeit, Snapshots und Backups ganzer VMs anzulegen, brachte einen nie dagewesenen Komfort.

So entstanden spezialisierte Virtualisierungsplattformen wie VMware, Hyper-V, Xen und Proxmox. Sie boten Werkzeuge, um Deployment, Networking und VM-Templates zu automatisieren. Trotz dieser Fortschritte blieb der grundlegende Umgang mit VMs aber unverändert. Sie trugen weiterhin die volle Verantwortung für den Lebenszyklus jeder einzelnen VM. Das Betriebssystem wurde meist noch über virtuelle CD-ROMs installiert, gefolgt von manueller Konfiguration oder Configuration-Management-Tools.

Selbst wenn man den Prozess durch das Klonen vorkonfigurierter Images beschleunigte, blieben diese virtuellen Server Haustiere. Fiel eine VM aus, starb die darin laufende Anwendung mit ihr. Auch dieses Haustier-Modell erforderte erheblichen Pflegeaufwand.

Diese Lösungen gibt es bis heute, inzwischen mit erweiterten Funktionen und besseren Werkzeugen für die Haustierpflege, doch sie blieben im Kern auf Haustiere ausgerichtet. Die Branche brauchte ganz offensichtlich den nächsten Entwicklungsschritt.

## Der Wandel von der Virtualisierung zur Cloud

Hosting-Unternehmen und Cloud-Anbieter spielten eine Schlüsselrolle beim Übergang zum Cloud Computing. Als virtuelle Maschinen in der Cloud verfügbar wurden, stellten viele Unternehmen fest, dass dieses Modell weit vorteilhafter war, als eigene Hardware und eigene Support-Teams zu unterhalten.

Als die Kunden mit ihrem Geldbeutel abstimmten, expandierten die Anbieter rasch und bauten zuverlässige Rechenzentren mit ausfallsicheren Storage-Systemen und Netzwerken. Eine neue Klasse von Virtualisierungsplattformen entstand, die Infrastruktur als Service (IaaS) lieferte. Lösungen wie OpenStack, OpenNebula und CloudStack revolutionierten den Betrieb, indem sie VM-Flotten über Templates, Golden Images, Ressourcenpools, Flavors und Instanztypen verwalteten.

Diese Plattformen der nächsten Generation verabschiedeten sich vollständig von der „Haustier“-Mentalität. Stattdessen boten sie Benutzern Self-Service-Oberflächen, um Cloud-Ressourcen zu beziehen. VMs waren keine virtuellen Abbilder physischer Server mehr, sondern lediglich Scheiben der darunterliegenden Hardware. Ihr Ausfall war nicht mehr kritisch, denn Cloud-native Anwendungen liefen nun verteilt über mehrere VMs mit eingebauter Fehlertoleranz.

Das Paradigma verschob sich hin zu vollständiger Automatisierung, bei der Benutzer jede beliebige VM auf Abruf bereitstellen konnten. Daten wanderten von den Systemplatten auf Persistent Volumes und externen Storage, und VMs wurden zu austauschbaren Recheneinheiten, die CPU und RAM liefern.

Eine Herausforderung blieb jedoch: Unternehmen verlangten reproduzierbare Infrastruktur, und das befeuerte das explosive Wachstum von Infrastructure-as-Code-Praktiken.

## Infrastructure as Code

Weboberflächen eignen sich gut zur Visualisierung, doch Engineers arbeiten durchweg lieber mit APIs, wie sie alle großen Cloud-Plattformen wie AWS und GCP bereitstellen.

Tools wie Terraform ermöglichen die Verwaltung von Infrastruktur als Code: Sie definieren die Anforderungen Ihrer Anwendung und stellen in Sekunden identische Entwicklungs-, Staging- oder Produktionsumgebungen bereit. Das erleichtert dynamisches Testen von Features und verhindert Überraschungen in der Produktion. Ansible und andere Configuration-Management-Systeme übernehmen die Konfiguration des Betriebssystems und das Deployment von Software innerhalb virtueller Maschinen, ein Muster, das trotz der zunehmenden Verbreitung von Containertechnologien in Unternehmen weiterhin beliebt ist.

Die Herausforderungen der Infrastrukturautomatisierung waren damit weitgehend gelöst, doch die Branche wandte sich einem neuen Problem zu: Die Erstellung der Infrastruktur hatten wir im Griff, die Komponenten darin wurden aber weiterhin manuell verwaltet. Neben den deklarativen Infrastrukturdefinitionen blieb viel imperative Logik bestehen (Konfiguration des Betriebssystems, Installation von Paketen und Auslieferung der Anwendungen), die man in der Regel mit Ansible abdeckte. Jeder Deployment-Schritt barg jedoch potenzielle Fehlerquellen, während Unternehmen immer stärker verlässlich reproduzierbare Workload-Deployments forderten.

Hinzu kamen erhebliche Unterschiede zwischen den APIs der Anbieter. Sie standen einer Standardisierung im Weg und führten unweigerlich zu Vendor-Lock-in.

## Docker und der Aufstieg der Containerisierung

In vielerlei Hinsicht hat Docker erfolgreiche Cloud-Muster übernommen und auf Ebene des Betriebssystems angewendet. Statt Pakete zu installieren, konnte man einfach ein fertiges Container-Image nehmen und es unverändert mit den nötigen Parametern starten. Das Image wurde aus einer Docker Registry geladen und als Container instanziiert, ähnlich wie man eine Cloud-VM aus einem Golden Image startet, nur eben auf Betriebssystemebene.

Dieser Ansatz erwies sich als so wirkungsvoll, dass er die Auslieferung und Ausführung von Software revolutionierte. Unzählige Anwendungen wurden containerisiert. Docker standardisierte zugleich das Logging und die Firewall-Konfiguration und brachte uns bei, Daten außerhalb von Containern abzulegen (um Datenverlust zu vermeiden). Außerdem etablierte es die Praxis, separate Prozesse in unterschiedlichen Containern laufen zu lassen, getreu der Docker-Philosophie, dass ein Container nur als Sandbox für einen einzigen Prozess dienen soll.

Docker hat allerdings seine Grenzen. Auf lokalen Systemen glänzt es, bei geclusterten Workloads und der Verwaltung großer Mengen von Containern stößt es jedoch an seine Grenzen. Die Reproduzierbarkeit von Workloads war damit gelöst, doch eine neue Herausforderung zeichnete sich ab: intelligente Orchestrierung im großen Maßstab, einschließlich automatischem Failover und Lastverteilung. An dieser Stelle betrat Kubernetes die Bühne und etablierte sich als neuer Standard für das Deployment von Server-Workloads.

## Kubernetes als Standard der Containerisierung

Kubernetes entstand bei Google und erhielt schnell Rückendeckung von großen Anbietern, was es zum Branchenstandard machte. Interessanterweise wird seine Entwicklung vor allem von genau diesen großen Cloud-Anbietern vorangetrieben, die ein Werkzeug brauchten, mit dem ihre Kunden Cloud-Services effizienter nutzen können.

Von Anfang an war Kubernetes eng mit den APIs der Cloud-Anbieter verzahnt und lieferte Funktionen wie die automatische Bereitstellung von Instanzen (Autoscaling), Load Balancer und Persistent Volumes.

![Quelle: Kubernetes Project Journey Report](/img/blog/medium/the-evolution-of-virtualization-platforms-the-rise-of-managed-services-and-local-providers-edge/02.png)

*Quelle: Kubernetes Project Journey Report*

Natürlich versuchten viele Enthusiasten, den Erfolg der großen Cloud-Anbieter nachzuahmen und Kubernetes auf eigener Hardware zu betreiben. Das Ergebnis waren jedoch meist statische Cluster ohne die zahlreichen Integrationen, die das Potenzial von Kubernetes erst wirklich erschließen.

Das hielt Kubernetes nicht davon ab, eine riesige Community aufzubauen und neue Ansätze für das Anwendungsdesign erfolgreich zu verbreiten. Letztlich bietet Kubernetes Unternehmen einheitliche Abstraktionen für die Arbeit in jeder Cloud, die Managed Kubernetes anbietet, und macht Anwendungen damit noch unabhängiger von der jeweiligen Cloud.

Im Laufe seiner Entwicklung führte Kubernetes Erweiterungsmechanismen ein und baute die Unterstützung für zustandsbehaftete Workloads über Operatoren und CRDs aus. Damit wurde der Betrieb komplexer Datenbanken und anderer Lösungen vereinheitlicht, und das Expertenwissen der Entwickler steckt nun in diesen Operatoren. Benutzer arbeiten mit High-Level-Abstraktionen wie Postgres-Clustern, Redis oder RabbitMQ, während spezialisierte Operatoren die zugrunde liegende Logik übernehmen.

Diese Operatoren setzen jedoch eine voll ausgestattete Kubernetes-Umgebung mit Ingress-Load-Balancing, Persistent Volumes und Autoscaling voraus, also Funktionen, die Benutzer eng an Public Clouds binden. Diese Funktionalität auf privater Infrastruktur nachzubauen, ist bis heute schwierig. Die Cloud-Anbieter kennen diesen Vorteil und bewerben ihre Managed Services aktiv als schlüsselfertige Lösungen.

## Plattformen und die Zukunft lokaler Anbieter

Der Cloud-native Ansatz hat grundlegend verändert, wie wir moderne Anwendungen und die Systeme darunter bauen. Statt alles auf eine Karte zu setzen, trennen wir Zuständigkeiten heute konsequent. Cloud-Plattformen übernehmen immer mehr Routineaufgaben, sodass sich Entwickler auf das konzentrieren können, was wirklich zählt: die Geschäftslogik der Anwendung.

Cloud-Plattformen bieten inzwischen Abstraktionen für nahezu alles. Neben virtuellen Maschinen stellen sie Managed Services wie Kubernetes-Cluster, Datenbanken, Caches, Message Queues und S3-Storage bereit, die heute allesamt als unverzichtbare Infrastrukturkomponenten gelten.

Die Wahl des Cloud-Anbieters hängt zunehmend davon ab, wie breit sein Angebot an Managed Services ist. Die entscheidende Erkenntnis: Endbenutzer wollen Infrastruktur nutzen, nicht betreiben.

Die Hyperscaler haben diesen Übergang angeführt, Kubernetes rasch in ihre Plattformen integriert und den Bedarf der Unternehmen über Managed Kubernetes und weitere Services monetarisiert. Lokale Anbieter liefen einmal mehr hinterher: Der Aufbau einer Kubernetes-basierten Cloud-Plattform erfordert nicht nur erhebliche Investitionen, sondern auch tiefes technisches Know-how.

Bis vor Kurzem gab es keinen Open-Source-Standard, um Managed Services im großen Maßstab bereitzustellen. Genau dieser Herausforderung stellen wir uns bei Ænix mit Cozystack, einer freien Plattform, die wir an die CNCF übergeben haben, damit sie dauerhaft als Open Source verfügbar bleibt.

Cozystack fungiert als Hypervisor und Cloud-Plattform der nächsten Generation und ermöglicht es lokalen Anbietern, auf ihrer eigenen Hardware nicht nur VMs, sondern vollwertige Managed Services per Mausklick anzubieten. Die Plattform basiert vollständig auf Kubernetes und auf Lösungen unter dem Dach der CNCF und erfüllt mit praxiserprobten Cloud-native-Komponenten den Bedarf moderner Anbieter an echten Managed Services.

Als offenes CNCF-Projekt (die CNCF ist auch die Heimat von Kubernetes, Cilium, Flux usw.) hilft Cozystack Anbietern, digitale Souveränität zu verwirklichen, ihre Margen zu verbessern und Vendor-Lock-in zu beseitigen. Zugleich verkürzt es die Time-to-Market für profitable Cloud-Services, einschließlich GPU-gestützter KI-Workloads.

![image](/img/blog/medium/the-evolution-of-virtualization-platforms-the-rise-of-managed-services-and-local-providers-edge/03.jpg)

## Fazit

Die Welt der Cloud-Technologien entwickelt sich in atemberaubendem Tempo, und in dieser neuen Ära werden diejenigen erfolgreich sein, die sich schnell anpassen. Die Hyperscaler haben schon vor langer Zeit auf Automatisierung und Abstraktionen gesetzt, die Unternehmen von Infrastruktursorgen befreien. Jetzt haben lokale Anbieter dieselbe Chance.

Cozystack ist unsere Antwort auf diesen entscheidenden Moment. Es ist mehr als eine technische Plattform: Es gleicht die Kräfteverhältnisse aus und ermöglicht Service-Providern, mit den globalen Marktführern zu konkurrieren. Wir sind überzeugt, dass die Zukunft offenen, transparenten Lösungen gehört, die auf bewährten Cloud-native-Prinzipien aufbauen. Und wir laden Sie ein, diese Zukunft mitzugestalten.

Werden Sie Teil unserer Community, entwickeln Sie Ihre eigenen Managed Services, und lassen Sie uns gemeinsam Cloud-Technologie zugänglich, souverän und fair machen, für alle.

## Weiterführende Materialien

**Artikel**

- [DIY: Create Your Own Cloud with Kubernetes](https://kubernetes.io/blog/2024/04/05/diy-create-your-own-cloud-with-kubernetes-part-1/)
- [How we built a dynamic Kubernetes API Server for the API Aggregation Layer in Cozystack](https://kubernetes.io/blog/2024/11/21/dynamic-kubernetes-api-server-for-cozystack/)
- [Cozystack Becomes a CNCF Sandbox Project](/blog/2025/03/cozystack-becomes-a-cncf-sandbox-project/)
- [Cozystack Recognized in CNCF’s CNAI Landscape](/blog/2025/05/cozystack-recognized-in-cncfs-cnai-landscape/)

**Videos**

- [Journey to Stable Infrastructures with Talos Linux & Cozystack | Andrei Kvapil | SREday London 2024](https://www.youtube.com/watch?v=uhXujtTzG44)
- [Talos Linux: You don’t need an operating system, you only need Kubernetes / Andrei Kvapil](https://www.youtube.com/watch?v=9CIMTum9bTA)
- [Comparing GitOps: Argo CD vs Flux CD, with Andrei Kvapil | KubeFM](https://www.youtube.com/watch?v=4RVe32xRITo)
- [Cozystack on Talos Linux](https://www.youtube.com/watch?v=s79VqXu-eG4)
- [GPU-Powered AI on VMs, Kubernetes & Bare Metal with Cozystack](https://www.youtube.com/watch?v=slQxsj6Oj4M)
- [Kubernetes is the new Skynet or the rise of Kubernetes automation: CNCF webinar](https://www.youtube.com/watch?v=9LSwnr31t7Y)

## Werden Sie Teil der Cozystack-Community

- [Telegram](https://t.me/cozystack)
- [Slack](https://kubernetes.slack.com/archives/C06L3CPRVN1) (im [Kubernetes-Slack-Workspace](https://communityinviter.com/apps/kubernetes/community))
- [Kalender der Community Meetings](https://calendar.google.com/calendar?cid=ZTQzZDIxZTVjOWI0NWE5NWYyOGM1ZDY0OWMyY2IxZTFmNDMzZTJlNjUzYjU2ZGJiZGE3NGNhMzA2ZjBkMGY2OEBncm91cC5jYWxlbmRhci5nb29nbGUuY29t)

Von [Andrei Kvapil](https://medium.com/@kvaps) am [4. Juni 2025](https://medium.com/p/0cb5db21a330).

[Kanonischer Link](https://medium.com/p/0cb5db21a330)

Exportiert von [Medium](https://medium.com) am 5. Oktober 2026.
