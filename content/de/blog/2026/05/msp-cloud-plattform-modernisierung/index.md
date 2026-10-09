---
title: "MSP-Cloud-Plattform-Modernisierung — gebrandetes Cloud-Angebot"
seo_title: "MSP-Cloud-Plattform: Cloud-Angebot unter eigener Marke"
description: "Wie ein MSP von der Betreuung einzelner Kundenumgebungen zu einer gebrandeten Multi-Tenant-Cloud als Managed Service wechselt: Architektur, Migration, Grenzen."
date: "2026-05-01"
lastmod: "2026-10-09"
cover_image: "/img/blog/covers/de/msp-cloud-plattform-modernisierung.jpg"
author: "Timur Tukaev"
type: "article"
topics: ["Cozystack", "Multi-tenancy", "Hosting"]
language: "de"
companion_landing: "/de/branchen/msp/"
quiz:
  title: "Wissens-Check: MSP-Cloud-Modernisierung"
  questions:
    - q: "Welche Veränderung der Arbeitseinheit eines MSP nennt der Artikel als die wichtigste?"
      options:
        - { text: "Von vielen einzelnen Kundenumgebungen zu einer Plattform, auf der jeder Kunde ein Tenant ist", correct: true }
        - { text: "Von Managed Microsoft 365 zum Weiterverkauf eines Hyperscalers über eine Partnerstufe", correct: false }
        - { text: "Von einem gemeinsamen Cluster zu einem eigenen Kubernetes-Cluster je Kunde", correct: false }
      explanation: "Der Abschnitt über die Veränderungen erklärt, dass der Aufwand eines MSP heute mit der Zahl der Kundenumgebungen wächst — jede mit eigenem Hypervisor, eigenen Backups und eigenen Patch-Fenstern. Auf einer Multi-Tenant-Plattform betreibt der MSP einen Upgrade-Zyklus, einen Monitoring-Stack und eine Storage-Schicht, und jeder Kunde wird zu einem Tenant."
    - q: "Wie wird die Umgebung eines Kunden auf der Plattform abgebildet?"
      options:
        - { text: "Als Namespace, den sich alle Kunden teilen und der über Labels getrennt wird", correct: false }
        - { text: "Als Tenant unterhalb des MSP-Tenants, mit eigenen Quotas, RBAC, Netzwerkisolation und Observability", correct: true }
        - { text: "Als separater VMware-Cluster, den die Plattform nur überwacht", correct: false }
      explanation: "Cozystack-Tenants lassen sich verschachteln: Der MSP-Tenant enthält je Kunde einen Tenant, und ein Kunde kann eigene Sub-Tenants wie Produktion und Test haben. Jeder Tenant hat eigene Quotas, Zugriffsrechte, Netzwerkisolation und einen eigenen Observability-Bereich."
    - q: "Was empfiehlt der Artikel für Kunden, die noch VMware-Umgebungen betreiben?"
      options:
        - { text: "Eine einzige Umstellung aller Kunden an einem Wochenende", correct: false }
        - { text: "Zuerst jede Workload von Grund auf als Container neu aufbauen", correct: false }
        - { text: "Migration in Wellen, während die Control Plane parallel zu VMware läuft; etwa 8–12 Monate für eine Umgebung mit ~100 VMs", correct: true }
      explanation: "Der Migrationsabschnitt beschreibt die Umstellung in Wellen, wobei die Plattform während der Migration neben der bestehenden VMware-Umgebung läuft. Die VMware-Migrationsseite veranschlagt für eine Umgebung mit ~100 VMs etwa 8–12 Monate und für ~1.000 VMs 18–24 Monate, jeweils inklusive Planung."
    - q: "Welcher Teil des Stacks ist ein proprietäres Ænix-Modul und nicht Teil des Open-Source-Cozystack?"
      options:
        - { text: "White-Labeling des Cozystack Dashboard", correct: false }
        - { text: "Die WHMCS-Integration für die Abrechnung", correct: true }
        - { text: "Verschachtelte Tenants mit Quotas je Tenant", correct: false }
        - { text: "Der Katalog der Managed Services", correct: false }
      explanation: "White-Labeling, Mandantenfähigkeit und der Katalog der Managed Services sind Open-Source-Funktionen von Cozystack. Die WHMCS-Integration (und das Ænix-Abrechnungssystem) sind proprietäre Ænix-Module, die in jeder Subscription-Stufe der Ænix Public Cloud Platform enthalten sind."
    - q: "Was bestimmt laut Artikel das Tempo, sobald die Plattform läuft?"
      options:
        - { text: "Das eigene Vertriebs- und Migrationstempo des MSP", correct: true }
        - { text: "Ein fester Plattformaufbau von 6–12 Monaten, der zuerst abgeschlossen sein muss", correct: false }
        - { text: "Die Lizenzfreigabe je CPU-Sockel durch den Hersteller", correct: false }
      explanation: "Die Plattform ist über den produktisierten Installer wenige Wochen nach Bereitstellung der Hardware live. Wie schnell die Kunden darauf umziehen, hängt vom Vertrieb und den Migrationswellen des MSP ab, nicht vom Plattformaufbau."
faq:
  - q: "Was bedeutet die Modernisierung der Plattform eines MSP konkret?"
    a: "Den Wechsel von der Betreuung getrennter Infrastrukturen je Kunde zum Betrieb einer Multi-Tenant-Cloud unter der Marke des MSP, in der jeder Kunde ein Tenant ist und der MSP Managed Services aus einem Katalog verkauft. Ænix baut dies als Ænix Public Cloud Platform auf Cozystack auf, dem Open-Source-Projekt im CNCF Sandbox, das Ænix entwickelt hat und mitbetreut."
  - q: "Müssen bestehende Kundenumgebungen zuerst ersetzt werden?"
    a: "Nein. Neue Services können sofort auf der Plattform starten, und VMware-Umgebungen ziehen in Wellen um, während die Plattform parallel läuft. Die VMware-Migrationsseite veranschlagt für ~100 VMs etwa 8–12 Monate und für ~1.000 VMs 18–24 Monate, jeweils inklusive Planung."
  - q: "Wie lange dauert es, bis die Plattform selbst läuft?"
    a: "Nach einem kostenlosen 30-minütigen Erstgespräch und einem Platform Readiness Assessment zum Festpreis über 14 oder 28 Tage ist die Plattform über den produktisierten Installer wenige Wochen nach Bereitstellung der Hardware live. Wie schnell die Kunden folgen, bestimmen Vertrieb und Migrationstempo des MSP."
  - q: "Was zahlt der MSP an Ænix?"
    a: "Eine Subscription je 10 Nodes und Monat, keine Lizenz pro CPU: Basic 1.250 $, Standard 3.000 $, Plus 5.500 $ bei jährlicher Abrechnung, Enterprise auf individuelle Anfrage. Für ein gebrandetes Produkt sollten Sie mit Standard oder höher planen; diese Stufe umfasst Support für die White-Label-Konfiguration und die Plattforminstallation. Partner erhalten bis zu 40 % Marge auf weiterverkaufte Subscriptions und Support."
  - q: "Wann ist dieser Schritt für einen MSP der falsche?"
    a: "Wenn der Wert des MSP in der Arbeit vor Ort im Rechenzentrum jedes Kunden liegt, wenn er nur eine Handvoll Kunden mit kleinen Umgebungen betreut oder wenn seine Kunden fest auf einen Hyperscaler gesetzt haben. Ebenso, wenn weder Personal noch eine Support-Stufe für die Rufbereitschaft einer gemeinsamen Plattform vorhanden ist."
hreflang_en: /blog/2026/05/msp-cloud-platform-modernization/
---

Die meisten Managed Service Provider wollten nie eine Cloud betreiben. Sie sind gewachsen, indem sie die Infrastruktur anderer betreut haben: hier ein VMware-Cluster, dort eine Backup-Appliance, ein Microsoft-365-Tenant, eine Firewall, ein Patch-Fenster an jedem zweiten Dienstag. Dieses Modell trägt sich nach wie vor. Doch Kunden verlangen von ihrem MSP inzwischen Dinge, die sich mit einem Bündel getrennt betreuter Umgebungen nicht liefern lassen — eine Datenbank in zehn Minuten, einen Kubernetes-Cluster für ein neues Projekt, eine GPU für einen Pilot, Self-Service statt Ticket.

Zwei Antworten liegen nahe, und beide überzeugen nicht. Der MSP kann einen Hyperscaler weiterverkaufen. Dann behält er die Rechnung und gibt alles andere ab: Konsole, Quotas und Supportweg des Kunden liegen an einem Ort, den der MSP nicht kontrolliert, und die Marge ist das, was die Partnerstufe zulässt. Oder er betreut weiter Umgebungen und lehnt die neuen Anfragen ab — das funktioniert, bis ein Wettbewerber zusagt.

Dieser Beitrag behandelt die dritte Antwort: die eigene Plattform des MSP so zu modernisieren, dass er eine gebrandete Multi-Tenant-Cloud betreibt und sie als Managed Service verkauft. Die kommerzielle Seite des White-Labelings — Branding, Reseller-Stufen und Marge — hat einen eigenen Beitrag, das [White-Label-Cloud-Playbook für MSPs und Reseller](/de/blog/2026/05/white-label-cloud-playbook-msp-reseller/). Hier geht es darum, was sich im MSP selbst ändert, wenn er nicht mehr Kunde für Kunde Infrastruktur betreut, sondern eine Cloud betreibt.

## Was sich ändert, wenn ein MSP zum Cloud-Betreiber wird

Als Erstes ändert sich die Arbeitseinheit. Heute wächst der Aufwand eines MSP mit der Zahl der Kundenumgebungen. Jede hat ihre eigene Hypervisor-Version, ihren eigenen Storage, ihren eigenen Backup-Plan und ihr eigenes Upgrade-Fenster, und die Engineers, die die Eigenheiten eines bestimmten Kunden kennen, sind knapp. Zehn neue Kunden bedeuten zehn weitere Systeme, die am Leben gehalten werden müssen.

Auf einer Multi-Tenant-Plattform betreibt der MSP einen Upgrade-Zyklus, eine Storage-Schicht, einen Monitoring-Stack und einen Satz Runbooks, und jeder Kunde wird zu einem Tenant darauf. Die Arbeit verschwindet nicht, aber sie vervielfacht sich nicht mehr. Wer einen Fehler behebt, behebt ihn für alle Kunden zugleich, und ein Upgrade wird einmal auf Staging geprobt und dann ausgerollt, statt mit jedem Kunden einzeln verhandelt zu werden.

Als Zweites ändert sich, wie Kunden zu ihren Ressourcen kommen. Im Umgebungsmodell wird fast jede Anfrage zum Ticket: eine VM bereitstellen, einen Port öffnen, eine Disk vergrößern. Auf einer Plattform werden daraus Self-Service-Aktionen im Portal, begrenzt durch Quotas. Die Engineers des MSP führen keine Anfragen mehr aus, sondern entscheiden, was angeboten wird, und halten es stabil. Eine der neun anonymisierten Fallstudien, eine [Finanzgruppe, die ein Self-Service-Portal über drei Infrastrukturen gelegt hat](/de/case-studies/unified-cloud-portal-financial-group/), zeigt den Effekt deutlich: Dem Team fehlte es nicht an Personal, sondern an automatisierter Bereitstellung — und genau deren Behebung hat die Arbeitslast verändert.

Als Drittes ändert sich, was der MSP verkauft. Statt „wir kümmern uns um Ihre Server“ wird das Angebot zu einem Katalog: virtuelle Maschinen, Managed Kubernetes, Managed PostgreSQL und andere Datenbanken, S3-kompatibler Storage und GPU-Kapazität, jeweils mit dem Betrieb des MSP dahinter. Daraus entsteht in einer Cloud die Marge eines Managed Service — nicht aus dem Weiterverkauf roher Kapazität.

## Die Zielarchitektur in Kürze

Die Plattform, die Ænix dafür aufbaut, ist die [Ænix Public Cloud Platform](/de/produkte/public-cloud-platform/) auf [Cozystack](https://cozystack.io), dem Open-Source-Projekt im CNCF Sandbox, das Ænix entwickelt hat und mitbetreut. Für einen MSP sind einige Eigenschaften besonders wichtig.

Virtuelle Maschinen und Container laufen über eine Kubernetes-API. VMs laufen über KubeVirt, sodass die bestehenden Windows- oder Linux-Server eines Kunden als VMs ankommen, während neue Workloads direkt auf Managed Kubernetes gehen können. Der MSP betreibt keine zwei Plattformen, um Altes und Neues zu bedienen.

Tenants lassen sich verschachteln. Der MSP hat einen eigenen Tenant, darin liegt je Kunde ein Tenant, und ein Kunde kann eigene Sub-Tenants haben — Produktion, Entwicklung, Test. Jeder Tenant erhält eigene Quotas, Zugriffsrechte, Netzwerkisolation und einen eigenen Observability-Bereich. Diese Hierarchie erlaubt es einem MSP, Wettbewerber nebeneinander zu hosten und trotzdem jedem nur seine eigenen Ressourcen zu zeigen.

Der Katalog der Managed Services wird kuratiert. Der MSP entscheidet, was er anbietet. Kann er PostgreSQL mit echter Betriebserfahrung absichern, Kafka aber nicht, bietet er PostgreSQL an und blendet Kafka aus. Der Katalog sollte dem entsprechen, was der MSP um drei Uhr nachts unterstützen kann, nicht allem, was die Plattform technisch ausführen könnte.

Das kundenseitige Portal ist das Cozystack Dashboard in den Farben, mit dem Logo und unter der Domain des MSP. White-Labeling ist eine Open-Source-Funktion von Cozystack. Die Abrechnung läuft über die [WHMCS-Integration](/de/produkte/whmcs-integration/), ein proprietäres Ænix-Modul, das in der Subscription enthalten ist — entweder mit WHMCS als kundenseitigem Frontend oder mit dem Dashboard als Frontend und WHMCS als Abrechnungs-Backend. Säumige Konten lassen sich direkt aus der Plattform sperren, ohne Ticket an das Engineering.

## Bestehende Kundenumgebungen überführen

Kein MSP zieht seinen gesamten Kundenstamm auf einmal um, und er sollte es auch nicht versuchen. In der Praxis teilen sich die Kunden in drei Gruppen.

Die erste Gruppe möchte etwas Neues: einen Kubernetes-Cluster für ein Produktteam, eine Managed-Datenbank, eine GPU für einen KI-Pilot. Diese Kunden können starten, sobald die Plattform läuft, und sie sind die beste erste Kohorte, weil nichts migriert werden muss.

Die zweite Gruppe läuft auf VMware oder einem anderen Hypervisor, den der MSP heute betreut. Sie zieht in Wellen um. Während der Migration läuft die Plattform parallel zu bestehender VMware-, OpenStack- oder OpenNebula-Infrastruktur, und Ænix stellt Migrationswerkzeuge und Runbooks bereit. Maßgeblich für die Zeitplanung ist der [VMware-Migrationsleitfaden](/de/migration/vmware/): Inklusive Planung und Wellen dauert eine Umgebung mit ~100 VMs typischerweise etwa 8–12 Monate, eine mit ~1.000 VMs 18–24 Monate. Planen Sie Kundenverträge und Kündigungsfristen an diesen Spannen aus, nicht am Go-live-Datum der Plattform.

Die dritte Gruppe braucht Hardware im eigenen Gebäude, aus Gründen der Latenz, der Regulierung oder der Gewohnheit. Für sie betreut der MSP weiterhin die Infrastruktur vor Ort, und die Plattform kommt schlicht nicht zum Einsatz. Wer diese Gruppe früh offen benennt, vermeidet eine Migration, von der niemand profitiert.

Die [Fallstudie zur souveränen Public Cloud](/de/case-studies/sovereign-public-cloud/) zeigt den Zielzustand aus Sicht eines Providers: Er hat seinen Hypervisor-Stack abgelöst, ein Betreibermodell mit Tenants und Sub-Tenants für Produktion, Entwicklung und Test jedes Kunden eingerichtet und verkauft heute VMs, Kubernetes und GPUs von eigener Hardware in drei Rechenzentren.

## Wie der Managed Service danach aussieht

Der Betrieb einer gemeinsamen Plattform verändert das Supportmodell. Der MSP behält die Kundenbeziehung und den First-Level-Support. Dahinter deckt eine Ænix-Support-Subscription die Plattform selbst ab. [Ab Standard](/de/preise/) umfasst sie die Plattforminstallation, Support für die White-Label-Konfiguration, begleitete Upgrades und Fernzugriff auf die Cluster mit Zustimmung des MSP; Plus ergänzt 24×7-Support. Optional betreibt Ænix die Control Plane unter SLA, während sich der MSP auf seine Kunden konzentriert.

Einige Betriebsgewohnheiten müssen gezielt aufgebaut werden. Backups braucht es sowohl auf Plattform- als auch auf Tenant-Ebene. Upgrades sollten auf Staging geprobt und dann in Produktion wiederholt werden, wie es der Provider der souveränen Cloud gelernt hat. Die Aufbewahrungsdauer der Audit-Logs ist konfigurierbar, und die Logs lassen sich in den eigenen Langzeitspeicher eines Kunden ausleiten, wenn ein regulierter Kunde das verlangt. Die Volume-Verschlüsselung ist optional zuschaltbar, mit einer Passphrase in der Hand des Betreibers. Nichts davon ist exotisch, aber es unterscheidet sich vom Umgebungsmodell, in dem jede Kundenumgebung ihre eigenen Regeln hatte.

## Die Reihenfolge der Umstellung

Bewährt hat sich ein Ablauf, der am Anfang kurz ist und danach vom Geschäft getaktet wird. Er beginnt mit einem kostenlosen 30-minütigen Erstgespräch und einem [Platform Readiness Assessment](/de/dienstleistungen/platform-readiness-assessment/) zum Festpreis über 14 Tage (fokussiert) oder 28 Tage (vollständig), das die bestehenden Kundenumgebungen, die Zielarchitektur und die ersten anzubietenden Services abdeckt.

Bei Provider-Größe ist die Plattform anschließend über den produktisierten Installer wenige Wochen nach Bereitstellung der Hardware live. Der MSP betreibt zunächst seine eigenen internen Workloads darauf, holt dann die erste Kohorte von Kunden mit neuen Anforderungen dazu und startet danach die Migrationswellen. Branding, Kuratierung des Katalogs und Abrechnungsintegration können im eigenen Tempo folgen. Nach dem Installer gibt es keine feste Aufbauphase mehr; wie schnell sich die Plattform füllt, bestimmen der Vertrieb des MSP und die Migrationswellen.

## Die Wirtschaftlichkeit in einem Absatz

Es gibt keine Lizenz pro CPU oder pro Core: Cozystack steht unter Apache 2.0, und Ænix verkauft eine Subscription je 10 Nodes und Monat — Basic 1.250 $, Standard 3.000 $, Plus 5.500 $ bei jährlicher Abrechnung, Enterprise auf individuelle Anfrage. Für ein gebrandetes Kundenprodukt sollten Sie mit Standard oder höher planen. MSPs, die zusätzlich Ænix-Subscriptions und Support weiterverkaufen, können dem [Partnerprogramm](/de/partner/) beitreten und bis zu 40 % Marge erzielen. Den Rest modelliert der [Rechner für die Unit Economics von Hosting-Anbietern](/isp-calculator/), und das [White-Label-Playbook](/de/blog/2026/05/white-label-cloud-playbook-msp-reseller/) geht auf die Reseller-Preisgestaltung ein.

## Wann das nicht passt

Für manche MSPs ist der Umstieg auf eine gemeinsame Cloud der falsche Schritt, und das sollte man besser vor einem Assessment sagen als danach.

Liegt der Großteil des Werts eines MSP in der Arbeit vor Ort in den Rechenzentren seiner Kunden, kommt mit einer zentralen Cloud ein zweites Geschäft hinzu, statt das erste zu ersetzen. Betreut der MSP nur eine Handvoll Kunden mit kleinen Umgebungen, kann der Aufwand für den Plattformbetrieb größer sein als die Einsparung; dann ist es günstiger, bei den bisherigen Werkzeugen zu bleiben. Und wenn seine Kunden fest auf einen Hyperscaler gesetzt haben, wird eine regionale Cloud sie nicht umstimmen.

Auch das Personal zählt. Eine gemeinsame Plattform bedeutet einen gemeinsamen Ausfall, also muss jemand die Rufbereitschaft abdecken. Ein MSP ohne Engineers dafür braucht die 24×7-Abdeckung der Plus-Stufe oder den Managed-Betrieb durch Ænix und sollte dies von Anfang an einplanen.

Schließlich zwei Erwartungen, die früh korrigiert werden sollten. Die Plattform ist darauf ausgelegt, die DORA- und NIS2-Pflichten der Kunden zu unterstützen, nimmt diese Pflichten aber weder dem MSP noch seinen Kunden ab. Und auch wenn es standortübergreifende Stretched-Designs gibt, besteht Disaster Recovery zwischen Standorten aus Backup, Wiederherstellung und geprobten Runbooks, nicht aus automatischem Failover.

Wenn die Passung stimmt, beschreiben die [Branchenseite für MSPs](/de/branchen/msp/) und der [White-Label-Cloud-Service](/de/dienstleistungen/white-label-cloud/) das Vorgehen, und ein Erstgespräch ist der schnellste Weg, beides an Ihrem eigenen Kundenstamm zu prüfen.
