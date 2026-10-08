---
title: "Die unausweichliche Zukunft von Kubernetes: Warum der Orchestrator dem Weg des Linux-Kernels folgen sollte"
seo_title: "Kubernetes sollte dem Linux-Kernel folgen"
description: "Tim Hockin fordert ein Komplexitätsbudget für Kubernetes. Timur Tukaev meint: Kubernetes sollte wie der Linux-Kernel werden, Plattformen wie Distributionen."
slug: "zukunft-kubernetes-linux-kernel"
date: "2024-12-27"
cover_image: "/img/blog/covers/de/zukunft-kubernetes-linux-kernel.jpg"
author: "Timur Tukaev"
type: "article"
topics: ["Kubernetes", "Talos"]
language: "de"
hreflang_en: "/blog/2024/12/the-inevitable-future-of-kubernetes-why-the-orchestrator-should-follow-the-path-of-the-linux/"
quiz:
  title: "Wissens-Check: Kubernetes als Linux-Kernel"
  questions:
    - q: "Auf wessen KubeCon-Vortrag reagiert der Artikel als Ausgangspunkt?"
      options:
        - { text: "Liz Rice über eBPF-Performance in produktiven Clustern", correct: false }
        - { text: "Tim Hockin mit dem Vorschlag eines Komplexitätsbudgets für Kubernetes", correct: true }
        - { text: "Kelsey Hightower mit einem Rückblick auf Kubernetes the Hard Way", correct: false }
      explanation: "Tim Hockin, einer der frühen Kubernetes-Entwickler, schlug in seinem Vortrag auf der KubeCon in Chicago (9. November) ein „Komplexitätsbudget“ vor — jedes neue Feature verbraucht einen Teil eines festen Kontingents. Der Artikel führt das Argument weiter, statt es zu verwerfen."
    - q: "Was ist die zentrale Analogie des Beitrags von Timur?"
      options:
        - { text: "Kubernetes sollte in eine Architektur aus Mikrokernel und Modulen zerfallen", correct: false }
        - { text: "Kubernetes sollte dem modularen Servermodell von Apache HTTPd folgen", correct: false }
        - { text: "Kubernetes sollte sich wie der Linux-Kernel entwickeln, mit Plattformen als Distributionen", correct: true }
      explanation: "Ein Systemadministrator umgeht keine Distribution, um sich Linux von Grund auf selbst zusammenzubauen. Mit Kubernetes sollte man genauso umgehen: Das Kernel-Äquivalent betreuen Spezialisten, meinungsstarke Plattformen (Open Source oder proprietär) sind die „Distributionen“."
    - q: "Welche der Komponenten einer Linux-Distribution nennt der Artikel zuerst?"
      options:
        - { text: "Einen Paketmanager", correct: true }
        - { text: "Einen grafischen Installer", correct: false }
        - { text: "Einen Bootloader", correct: false }
      explanation: "Der Artikel nennt den Paketmanager als erste Schlüsselkomponente, gefolgt von Kernel plus GNU-Werkzeugen, eigenen Repositories, festgelegten Release-Zyklen, Kernel-Optimierungen, CLI/GUI-Werkzeugen und einer Community, die das System pflegt."
    - q: "Welche CNCF-Gremien werden als mögliche Initiatoren der strategischen Diskussion über Kubernetes als Kernel-Äquivalent genannt?"
      options:
        - { text: "Ausschließlich das CNCF Foundation Board im Alleingang", correct: false }
        - { text: "Die Maintainer-Gruppe von Cloud Native Buildpacks", correct: false }
        - { text: "TAG App Delivery, das TOC, Maintainer und große Sponsoren", correct: true }
      explanation: "Der Artikel nennt TAG App Delivery, das Technical Oversight Committee, Maintainer und große Kubernetes-Sponsoren als diejenigen, die die Diskussion anstoßen sollten. Danach folgen die Ansprache des Marktes und Leitlinien für die Plattformentwicklung."
    - q: "Was sieht der Artikel als Engpass, solange Kubernetes als eigenständige Software gilt?"
      options:
        - { text: "Die CPU-Leistungsgrenze auf Standard-Nodes", correct: false }
        - { text: "Die Abhängigkeit von Engineers, die sich auf Kubernetes selbst spezialisieren müssen", correct: true }
        - { text: "Die Speicherkosten für replizierten Cluster-Zustand", correct: false }
      explanation: "Solange Kubernetes als eigenständige Software gilt, hängt die Infrastruktur von Engineers ab, die Kubernetes vollständig verstehen — eine knappe Spezialisierung. Nur wenige verstehen den Linux-Kernel im Detail, doch die Branche erwartet das auch nicht, weil Distributionen diese Ebene abstrahieren. Denselben Wandel braucht Kubernetes."
---



Auf der KubeCon + CloudNativeCon in Chicago hat Tim Hockin, einer der frühen Entwickler von Kubernetes, am 9. November [einen Vortrag gehalten](https://www.youtube.com/watch?v=WqeShpaztZY) (hier eine [Zusammenfassung](https://thenewstack.io/tim-hockin-kubernetes-needs-a-complexity-budget/)), der eine der großen Herausforderungen des Orchestrators beleuchtet: die unaufhaltsam wachsende Komplexität. Seine Kernaussage war einfach: Kubernetes wird für ein immer breiteres Spektrum spezialisierter Anwendungsfälle eingesetzt, etwa für Machine Learning.

Dadurch steigen die Anforderungen der Nutzer an K8s stetig, die Entwickler versuchen Schritt zu halten, und Kubernetes wird so komplex, dass zwei ernste Probleme entstehen:

1. Die Kubernetes-Entwickler selbst finden sich in den wachsenden Features und Funktionen des Projekts immer schwerer zurecht. Die Codebasis wird selbst für diejenigen zu verschachtelt, die sie bauen.
2. Engineers, die Kubernetes in Unternehmen einführen und betreiben, fällt es zunehmend schwer, alle Optionen und Konfigurationen zu beherrschen.

Als Gegenmittel schlug Tim ein „Komplexitätsbudget“ vor. Dabei würde für die Komplexität des Projekts ein festes „Budget“ vergeben, und jedes neue Feature in einem Release würde einen Teil davon verbrauchen. Seiner Ansicht nach ließe sich die Komplexität des Projekts so unter Kontrolle halten.

![Bild](/img/blog/medium/the-inevitable-future-of-kubernetes-why-the-orchestrator-should-follow-the-path-of-the-linux/cover.jpg)

Die Idee ist vernünftig. Ich glaube aber, dass das gesamte Ökosystem — die Kubernetes-Entwickler, die Unternehmen, die darauf setzen, und die Engineers, die es ausrollen — seine Erwartungen an einen Orchestrator in den kommenden Jahren grundsätzlich überdenken muss.

Heute gilt Kubernetes meist als eigenständige und (grob gesagt) in sich geschlossene Software. Ja, für den produktiven Einsatz muss man verschiedene Cloud-native Werkzeuge wie CNI, Service Meshes und anderes integrieren. Trotzdem wird Kubernetes gemeinhin als Anwendung wahrgenommen — manche nennen es sogar das „Betriebssystem der Cloud“.

Meiner Meinung nach führt dieses Verständnis von Kubernetes die Branche in eine Sackgasse. Es ist klar, dass die Komplexität des Orchestrators weiter wachsen wird, und ebenso klar, dass Kubernetes in immer mehr Bereichen eingesetzt wird, die alle erheblich davon profitieren können. Will Kubernetes ein erfolgreiches Produkt bleiben und seine Führungsrolle behalten, muss es sich an die Anforderungen dieser Bereiche anpassen.

Der Markt muss Kubernetes als etwas Ähnliches wie den Linux-Kernel betrachten. Was meine ich damit? Ein Systemadministrator in einem kleinen oder mittelständischen Unternehmen käme kaum auf die Idee, eine Linux-Distribution zu umgehen und sich aus dem Linux-Kernel eine eigene von Grund auf zusammenzubauen — das ist schlicht nicht üblich. Jeder versteht den Wert einer fertigen Distribution, die auf die eigenen Anforderungen zugeschnitten ist.

Es gibt Allzweck-Distributionen, die in unterschiedlichsten Szenarien ordentlich funktionieren, aber auch eine riesige Auswahl spezialisierter Distributionen wie Talos Linux, Kali Linux, VyOS, DSL oder SLAX, die jeweils für bestimmte Aufgaben optimiert sind.

Außerdem bringen Distributionen komfortable Paketmanager mit, über die sich benötigte Software leicht hinzufügen lässt.

Kubernetes braucht einen ähnlichen Paradigmenwechsel: Statt als einzelnes Produkt betrachtet zu werden, sollte es zur Grundlage eines vielfältigen Ökosystems maßgeschneiderter Distributionen werden, von denen jede gezielt bestimmte Workloads und Branchen effizient bedient.

Grob gesagt besteht eine Linux-Distribution aus mehreren Schlüsselkomponenten:

- Einem Paketmanager.
- Einem Kernel, gebündelt mit den GNU-Werkzeugen.
- Eigenen Repositories mit geprüfter und getesteter Software.
- Festgelegten Release-Zyklen.
- Kernel-Optimierungen für bestimmte Anwendungsfälle.
- Einer Mischung aus Kommandozeilen- und grafischen Oberflächen, Konfigurationsmanagern und weiteren Werkzeugen.
- Einer Community und/oder einem Entwicklungsteam, die das System laufend aktualisieren und pflegen.

Aus meiner Sicht sollten die CNCF und der Markt insgesamt dieses Modell übernehmen. Um den vielfältigen Anforderungen moderner technologischer Bereiche voll gerecht zu werden, muss sich Kubernetes weiterentwickeln. Es sollte nicht länger als eigenständige Software wahrgenommen werden, sondern zum Äquivalent des Linux-Kernels werden: zu einem komplexen Fundament, das nur eine begrenzte Zahl von Spezialisten kennt und direkt betreut.

In diesem Paradigma übernehmen Plattformen — Open Source wie proprietär — die Rolle der „Linux-Distributionen“ von Kubernetes. Sie liefern Kubernetes zusammen mit einer Reihe von Erweiterungen aus, sowohl mit Cloud-nativen Werkzeugen, die die Kernfunktionalität ergänzen, als auch mit zusätzlichen Diensten wie Datenbanken oder Kafka. So lässt sich die Plattform direkt nutzen, um Umgebungen für konkrete Aufgaben aufzubauen.

Wer zum Beispiel ML/AI-Workloads betreiben will, könnte unter einem Dutzend „Distributionen“ wählen, die genau dafür vorkonfiguriert sind. Sie kämen mit Kubernetes und zugehörigen Komponenten, optimiert mit sinnvollen Standardeinstellungen und Optionen, die der Nutzer an seine Bedürfnisse anpassen kann. Alternativ könnte man sich für eine Allzweck-Distribution entscheiden, die ein breiteres Spektrum an Workloads angemessen abdeckt.

In einem solchen Modell müssten SREs und andere technische Spezialisten nicht tief in die Interna von Kubernetes einsteigen oder die Infrastruktur über den gesamten Stack selbst konfigurieren. Sie könnten sich stattdessen auf geschäftskritische, produktbezogene Aufgaben konzentrieren — und die grundlegenden Infrastrukturfragen der Plattform überlassen.

Heute sind wir von dieser Vision weit entfernt. Es gibt zwar zahlreiche Cloud-Plattformen, doch sie werden oft als Alternativen zu Vanilla-Kubernetes gesehen. Man vergleicht sie nicht nur miteinander, sondern auch mit Kubernetes selbst oder mit einer Infrastruktur, die von Hand aus „Quellkomponenten“ gebaut wurde. Engineers lehnen fertige Plattformen häufig ab, weil sie schlecht konzipiert seien, und sind überzeugt, selbst etwas Besseres von Grund auf bauen zu können.

Oft hört man auch Bedenken wie: „Hier weiß ich, wie alles funktioniert, dort ist es eine Black Box — oder schlimmer noch, eine offene Box mit unverständlichem Code.“ Diese Haltung zeigt, wie schwer es derzeit fällt, Kubernetes nicht mehr als eigenständiges Werkzeug zu sehen, sondern als Kernel eines neuen Ökosystems.

Ein Wechsel hin zu einem Ansatz „Kubernetes als Linux-Kernel“ könnte mehr Effizienz, Skalierbarkeit und Spezialisierung ermöglichen und Kubernetes-Plattformen für viele Branchen zugänglicher und wirkungsvoller machen.

Obwohl viele Engineers wissen, dass sie alles auch manuell konfigurieren könnten, entscheiden sie sich dennoch für meinungsstarke Distributionen, weil diese einen klar umrissenen Bereich von Routineaufgaben effizient erledigen. Das gibt Engineers den Freiraum, sich auf geschäftskritische Aufgaben zu konzentrieren statt auf Infrastrukturdetails. Auch Führungskräfte und Eigentümer schätzen solche vorkonfigurierten Distributionen, weil sie Abläufe vereinfachen und Mehrwert schaffen.

Ich glaube jedoch, dass die heutige Sicht auf Kubernetes sowohl die Weiterentwicklung des Orchestrators als auch das Wachstum des Cloud-native-Ökosystems insgesamt bremst. Die Abhängigkeit von Engineers und ihren Fähigkeiten wird zum Engpass beim Aufbau und Betrieb von Infrastruktur.

Wie viele Engineers verstehen die Feinheiten des Linux-Kernels oder die konkreten Optimierungen einer bestimmten Linux-Distribution wirklich vollständig? Die Branche erwartet dieses Wissen nicht, weil der Markt Linux-Distributionen als Standardeinheiten geschäftlichen Werts akzeptiert hat. Diese Abstraktion bis auf den Kernel oder seine einzelnen Komponenten aufzubrechen, hat keinen praktischen Nutzen.

Natürlich bauen große Konzerne manchmal eigene Distributionen — Microsoft etwa hat Azure Linux entwickelt. Für die allermeisten Unternehmen ist das aber weder nötig noch machbar.

Kubernetes nicht mehr als eigenständige Lösung, sondern als zentrale Komponente größerer Plattformen zu begreifen, erfordert mehrere grundlegende Schritte:

1. CNCF-Gremien wie TAG App Delivery, das Technical Oversight Committee, Maintainer und große Kubernetes-Sponsoren könnten eine Diskussion über die Zukunft von Kubernetes anstoßen. Sie sollte Chancen und Risiken abwägen und am Ende eine strategische Roadmap hervorbringen. Der Übergang von Kubernetes als eigenständiger Software zu einer Komponente umfassenderer Plattformen würde tiefgreifende Anpassungen erfordern.
2. Die CNCF-Gremien sollten aktiv auf den Markt zugehen und sich für ein vielfältiges Ökosystem von Plattformen einsetzen. Dazu gehört, Wettbewerb zu bestehenden Anbietern zu fördern und Leitlinien oder Standards zu schaffen (womöglich in einer neuen Working Group), die die Plattformentwicklung vereinfachen. Die Zukunft von Kubernetes als zentrale Komponente hängt davon ab, dass andere Entwickler effizient Plattformen darum herum bauen können.
3. Talentierte Engineers und Unternehmen, die heute interne Plattformen bauen, könnten sich der Entwicklung öffentlicher Plattformen zuwenden, ob Open Source oder proprietär. Diese Diversifizierung würde den Markt vergrößern und Innovation fördern.
4. Große Akteure verschiedener Branchen könnten gemeinsam Plattformen für ihre spezifischen Anforderungen entwickeln oder neue schaffen, die auf ihre Märkte zugeschnitten sind.
5. Die CNCF und andere Open-Source-Organisationen sollten solche Projekte aufnehmen und fördern, ihr Wachstum unterstützen und auf Flaggschiff-Veranstaltungen wie der KubeCon Raum schaffen, um diesen Ansatz bekannt zu machen.

Das Ergebnis wäre ein starkes Ökosystem fertiger Plattformen, das die Anforderungen von Unternehmen umfassend abdeckt, die öffentliche Clouds aufbauen (Service- und Hosting-Provider), ebenso wie von Anwenderunternehmen mit privaten Clouds, Bare-Metal-Installationen und Air-Gapped-Umgebungen.

Ich freue mich über Feedback, Präzisierungen, Vorschläge und alle Gedanken, die Sie dazu haben. Dies ist kein ausgereiftes, am Markt erprobtes Konzept — es ist der Auftakt eines öffentlichen Dialogs über ein entscheidendes Problem. Lassen Sie uns diese Ideen gemeinsam diskutieren und weiterentwickeln: timur.tukaev@aenix.io.

Von [Timur Tukaev](https://medium.com/@tym83) am [27. Dezember 2024](https://medium.com/p/367f49916712).

[Kanonischer Link](https://medium.com/@tym83/the-inevitable-future-of-kubernetes-why-the-orchestrator-should-follow-the-path-of-the-linux-367f49916712)

Exportiert von [Medium](https://medium.com) am 11. Mai 2026.
