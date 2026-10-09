---
title: "Hosting-Anbieter-Plattform-Modernisierung — von VPS zum Cloud-Produkt"
seo_title: "Hosting-Anbieter: vom VPS zum Cloud-Produkt"
description: "Wie Hosting-Anbieter vom VPS-Geschäft zum Cloud-Produkt kommen: Plattform, Servicekatalog, Abrechnung, Betrieb und die richtige Reihenfolge der Umstellung."
date: "2026-05-01"
lastmod: "2026-10-09"
cover_image: "/img/blog/covers/de/hosting-anbieter-plattform-modernisierung.jpg"
author: "Timur Tukaev"
type: "article"
topics: ["Kubernetes", "Cozystack", "GPU", "Multi-tenancy", "Hosting", "Migration"]
language: "de"
companion_landing: "/de/branchen/hosting-anbieter/"
faq:
  - q: "Was ändert sich tatsächlich, wenn ein Hosting-Anbieter vom VPS zum Cloud-Produkt wechselt?"
    a: "Vier Dinge gleichzeitig: Die Geschäftseinheit ist nicht mehr ein Account mit VMs, sondern ein Tenant; die Bereitstellung wandert vom Ticket in Self-Service-Assistenten; die Abrechnung wechselt vom Festpreis pro VM zur gemessenen Nutzung pro Service; und der Betrieb pflegt statt Panel und Hypervisor eine einzige, per GitOps verwaltete Plattformversion."
  - q: "Müssen wir alle bestehenden VPS-Kunden migrieren, bevor wir starten?"
    a: "Nein. Die Plattform läuft parallel zum Bestand, und VMs ziehen in Kohorten um — mit den integrierten Migrationswerkzeugen für VMware, OpenStack, Virtuozzo und OpenNebula. Neue Produkte lassen sich auf der neuen Plattform verkaufen, während bestehende VPS-Kunden bleiben, wo sie sind, bis ihre Kohorte an der Reihe ist."
  - q: "Können wir WHMCS behalten?"
    a: "Ja. Die proprietäre Ænix-WHMCS-Integration ist in jeder Subskriptionsstufe enthalten und arbeitet in zwei Modi: WHMCS als Storefront für die Kunden oder das Cozystack Dashboard als Storefront mit WHMCS als Billing-Backend. Anbieter ohne WHMCS nutzen das plattformeigene Billing-Frontend oder speisen die UsageReport-API in ihr bestehendes Abrechnungssystem ein."
  - q: "Wie groß muss das Betriebsteam für die Plattform sein?"
    a: "Das Standardmodell des Hosting-Anbieter-Rechners kommt auf etwa 1,3 Vollzeit-Engineers bei 10 Nodes und etwa 2,6 bei 40. Eine Rufbereitschaft rund um die Uhr braucht mehr Personal oder die 24×7-Abdeckung der Stufe Plus. Der Kundensupport ist eigenes Personal."
  - q: "Wann ist dieser Schritt der falsche?"
    a: "Wenn der VPS-Wiederverkauf Ihr gesamtes Geschäft ist und Sie mit seiner Marge zufrieden sind, ist ein VPS-Panel mit angebauter Abrechnung günstiger und einfacher. Die Plattform rechnet sich, wenn Sie Managed-Datenbanken, Kubernetes, Object Storage und GPU auf derselben Hardware verkaufen wollen, ohne jeden Service selbst zu bauen."
quiz:
  title: "Wissens-Check: Hosting-Anbieter-Modernisierung"
  questions:
    - q: "Welchen strukturellen Vorteil haben Hosting-Anbieter laut Artikel, den Hyperscaler nicht leicht kopieren können?"
      options:
        - { text: "Kundenbeziehungen, regionale Präsenz und Souveränitätsprofil", correct: true }
        - { text: "Günstigere Hardwarebeschaffung bei den Herstellern", correct: false }
        - { text: "Niedrigere Latenz zu den großen LLM-Endpunkten", correct: false }
      explanation: "Der Einstieg nennt direkte Kundenbeziehungen, regionale Präsenz, Preisflexibilität und ein glaubwürdiges Souveränitätsprofil. Was den meisten Anbietern fehlt, ist das Cloud-Produkt, das sie darauf verkaufen können."
    - q: "Wie schnell ist die Plattform für einen einzelnen Hosting-Anbieter live, sobald die Hardware bereitsteht?"
      options:
        - { text: "In wenigen Wochen, über den produktisierten Installer", correct: true }
        - { text: "Erst nach einem Pilot von 3–6 Monaten", correct: false }
        - { text: "Nach mindestens zwei Jahren eigener Plattformentwicklung", correct: false }
      explanation: "Im Maßstab eines Anbieters ist die Plattform über den produktisierten Installer wenige Wochen nach Bereitstellung der Hardware live. Ein Pilot von 3–6 Monaten und danach 9–18 Monate bis zum vollen Multi-Region-Betrieb gelten für nationale oder Betreiberprogramme, nicht für einen einzelnen Anbieter."
    - q: "Wie setzt das Standardmodell des Hosting-Anbieter-Rechners den Personalbedarf für den Plattformbetrieb an?"
      options:
        - { text: "Gar keine Engineers — die Plattform betreibt sich selbst", correct: false }
        - { text: "Etwa 1,3 Vollzeit-Engineers bei 10 Nodes, etwa 2,6 bei 40", correct: true }
        - { text: "Mehr als 10 Engineers schon vor dem ersten Kunden", correct: false }
      explanation: "Der Abschnitt zum Betrieb zitiert den Hosting-Anbieter-Rechner: etwa 1,3 Vollzeit-Engineers bei 10 Nodes und etwa 2,6 bei 40. Eine Rufbereitschaft rund um die Uhr braucht mehr Personal oder die 24×7-Abdeckung der Stufe Plus; der Kundensupport ist eigenes Personal."
    - q: "Welche zwei Modi unterstützt die Ænix-WHMCS-Integration?"
      options:
        - { text: "WHMCS als Storefront oder Cozystack Dashboard als Storefront mit WHMCS als Billing-Backend", correct: true }
        - { text: "WHMCS nur für VMs und ein separates Abrechnungssystem für Managed Services", correct: false }
        - { text: "WHMCS nur für Rechnungen, die Bereitstellung läuft über Tickets", correct: false }
        - { text: "WHMCS als reiner Lesespiegel der plattformeigenen Abrechnung", correct: false }
      explanation: "Der Abschnitt zur Abrechnung beschreibt beide Modi: Kunden bestellen Cozystack-Services als WHMCS-Produkte, oder sie arbeiten im gebrandeten Cozystack Dashboard, während WHMCS die Rechnungsstellung übernimmt."
    - q: "Wie beschreibt der Artikel GPU-Angebote für virtuelle Maschinen?"
      options:
        - { text: "Ganze GPUs per PCI-Passthrough oder NVIDIA vGPU mit der eigenen NVIDIA-vGPU-Lizenz des Anbieters", correct: true }
        - { text: "MIG-Slices, die direkt einzelnen VMs zugewiesen werden", correct: false }
        - { text: "HAMi-Time-Slicing im Hypervisor der VM", correct: false }
      explanation: "VMs erhalten ganze GPUs per Passthrough oder NVIDIA vGPU mit Ihrer NVIDIA-Lizenz. MIG-Partitionen und HAMi-Time-Slicing gelten für Tenant-Kubernetes-Cluster, nicht für VMs."
hreflang_en: /blog/2026/05/hosting-provider-platform-modernization/
---

## Die Chance der Hosting-Anbieter

Die meisten Hosting-Anbieter besitzen bereits das, was in einem Cloud-Geschäft am schwersten aufzubauen ist: direkte Kundenbeziehungen, regionale Präsenz, Preisflexibilität und eine Souveränitätsgeschichte, die ein Kunde überprüfen kann, indem er zum Rechenzentrum fährt. Hyperscaler können das nicht ohne Weiteres kopieren. Was dem Anbieter meist fehlt, ist das Produkt, das er darauf verkaufen kann.

Wer VPS verkauft, konkurriert über den Preis pro vCPU, und dieser Wettlauf kennt nur eine Richtung. Wer ein Managed PostgreSQL, einen Kubernetes-Cluster oder einen S3-Bucket verkauft, berechnet einen Service — und genau dorthin verschiebt sich die Marge eines Hosting-Geschäfts. Der Weg dahin ist weniger eine Frage neuer Software als die Aufgabe, vier Dinge im Unternehmen gleichzeitig zu ändern: die Plattform, den Katalog, die Abrechnung und den Betrieb.

Dieser Beitrag geht diese vier Veränderungen durch und zeigt, in welcher Reihenfolge sie sinnvoll sind. Zwei benachbarte Beiträge decken den Rest der Entscheidung ab: [Wann sich die Public Cloud Platform für Hosting-Anbieter rechnet](/de/blog/2026/05/public-cloud-platform-wirtschaftlichkeit-hosting-anbieter/) behandelt die Unit Economics, das [Playbook für den Start eines Cloud-Produkts](/de/blog/2026/05/cloud-produkt-starten-playbook-hosting-anbieter/) den Go-to-Market.

## Was sich ändert, wenn aus VPS ein Cloud-Produkt wird

Ein typischer Hosting-Stack besteht heute aus einem Hypervisor (kommerziell, Vanilla-KVM, Proxmox oder Virtuozzo), einem VPS-Panel wie Virtualizor oder SolusVM oder einer Eigenentwicklung und einer Abrechnung in WHMCS oder einem selbst gebauten System. Das Panel erledigt eine Aufgabe gut: VPS verkaufen und bereitstellen. Alles andere — eine Datenbank für einen Kunden, ein Kubernetes-Cluster, ein Bucket — wird zum Ticket und zur Handarbeit.

Ein Cloud-Produkt verändert die Einheit des Geschäfts. Der Kunde ist nicht mehr ein Account, dem einige VMs gehören, sondern ein Tenant mit Quotas, eigener Zugriffssteuerung, eigener Netzwerkisolation und eigenem Monitoring, in dem er alles anlegen kann, was der Katalog anbietet. Die Bereitstellung wandert vom Ticket in einen Assistenten. Die Preisbildung wechselt vom Festpreis pro VM zur gemessenen Nutzung pro Service. Und der Betrieb aktualisiert nicht mehr Panel und Hypervisor getrennt, sondern pflegt eine einzige Plattformversion.

Keine dieser vier Veränderungen funktioniert ohne die anderen. Ein Katalog ohne Metering lässt sich nicht abrechnen; Metering ohne Tenants lässt sich niemandem zuordnen; Tenants ohne eine einheitlich aktualisierbare Plattform werden zur Supportlast. Deshalb ist die Modernisierung eine Plattformentscheidung und keine Funktion, die man an das bestehende Panel anbaut.

## Die Plattform: eine API für VMs und alles andere

Die [Ænix Public Cloud Platform](/de/produkte/public-cloud-platform/) basiert auf [Cozystack](https://cozystack.io), dem Open-Source-Projekt in der CNCF Sandbox, das Ænix geschaffen hat und mitbetreut. Die Designentscheidung, die für einen Hosting-Anbieter am meisten zählt: Virtuelle Maschinen und alles andere leben auf derselben Kubernetes-API. VMs laufen über KubeVirt, sodass das bestehende VPS-Geschäft keine zweite Plattform neben den neuen Services braucht. Eine Windows-VM, eine Managed-Datenbank und ein Tenant-Kubernetes-Cluster sind Objekte im selben Tenant, die auf dieselbe Weise angelegt und abgerechnet werden.

Tenants lassen sich verschachteln. Ein Anbieter gibt einem Kunden einen Tenant, und der Kunde teilt ihn in Sub-Tenants für Produktion, Entwicklung und Test auf — oder ein Reseller betreibt darunter seine eigenen Kunden. Diese Hierarchie erlaubt es, mit derselben Plattform Direktkunden, MSP-Partner und [White-Label-Reseller](/de/dienstleistungen/white-label-cloud/) zu bedienen, ohne separate Installationen.

Als Storage dient replizierter Block-Storage auf LINSTOR und DRBD, mit optionaler Volume-Verschlüsselung, die der Kunde mit einer Passphrase aktiviert, die er selbst verwahrt. Object Storage ist S3-kompatibel auf SeaweedFS. Multi-Region ist ein Schalter und kein Plattformwechsel: Ein Anbieter, der von einem Standort auf mehrere wächst, behält sein Portal, seine Abrechnung und seine Tenants.

Der Bestand muss nicht am ersten Tag verschwinden. Die Plattform läuft während der Migration parallel zu VMware, OpenStack, OpenNebula und OpenShift, und die integrierten Werkzeuge verlagern VMs aus VMware, OpenStack, Virtuozzo und OpenNebula in Kohorten. Wer Virtuozzo betreibt, sollte zuerst den [Leitfaden zur Virtuozzo-Migration](/de/migration/virtuozzo/) lesen: Die drei Produkte haben drei sehr unterschiedliche Ausstiegswege.

## Der Katalog: schmal anfangen, nach Bedarf wachsen

Cozystack bringt einen breiten Katalog mit: Managed PostgreSQL, MariaDB, Valkey, Kafka, ClickHouse, RabbitMQ, NATS, MongoDB, OpenSearch und Qdrant, Tenant-Kubernetes-Cluster mit verwalteter Control Plane pro Tenant, S3-Buckets, VMs, einen HTTP-Cache und einen VPN-Service. Kunden bestellen jeden davon über einen Assistenten; niemand schreibt YAML.

Die Versuchung ist groß, zum Start alles freizuschalten. Widerstehen Sie ihr. Jeder Service im Angebot ist ein Service, zu dem Ihr Support um drei Uhr nachts Fragen beantworten muss, und ein Kunde, der Kafka bestellt und feststellt, dass bei Ihnen niemand Kafka versteht, kommt nicht wieder. Ein vernünftiger erster Katalog besteht aus VMs, Managed PostgreSQL und S3, denn genau das bauen bestehende VPS-Kunden heute von Hand. Kubernetes und weitere Datenbanken folgen, sobald das Team die ersten Services unter echter Last betrieben hat.

GPU ist die Erweiterung, nach der die meisten Anbieter fragen, und die Details bestimmen, was Sie versprechen können. In Tenant-Kubernetes-Clustern stellt der NVIDIA GPU Operator MIG-Partitionen auf MIG-fähigen Karten bereit, und HAMi ermöglicht Time-Slicing. Virtuelle Maschinen erhalten ganze GPUs per PCI-Passthrough oder NVIDIA vGPU mit Ihrer eigenen NVIDIA-vGPU-Lizenz. Die GPU-Nutzung wird pro Tenant gemessen und in Ihrem Abrechnungssystem berechnet. Zur kommerziellen Seite des GPU-Verkaufs siehe [GPU as a Service](/de/loesungen/gpu-as-a-service/).

## Abrechnung: korrekt ab der ersten Rechnung

An der Abrechnung verlieren Modernisierungsprojekte am häufigsten das Vertrauen ihrer ersten Kunden. Ein VPS hat einen festen Monatspreis; eine Managed-Datenbank mit Replikas, Persistent Volumes auf zwei Storage-Klassen und einem Bucket, der im Laufe des Monats wächst, hat das nicht. Sind die ersten Rechnungen falsch, erinnert sich der Kunde an die Rechnung, nicht an das Produkt.

Die Nutzungsdaten liefert Ænix Billing über eine `UsageReport`-API mit Positionen pro Workload: CPU- und Speicherstunden, persistenter Storage pro Storage-Klasse, IP-Adressen, S3-Storage und Laufzeit. Die Preise sind eine Richtlinie, die auf diesen Report angewendet wird — Replikas können weniger kosten als Primaries und NVMe mehr als HDD, ohne dass etwas umgeschrieben werden muss. Details stehen in der [Ankündigung von Ænix Billing](/de/blog/2026/05/aenix-billing-pay-per-minute-managed-services-cozystack/).

Die Rechnungen entstehen dann an einer von drei Stellen. WHMCS kann die Storefront sein, über die Kunden Cozystack-Services als WHMCS-Produkte bestellen. Das gebrandete Cozystack Dashboard kann die Storefront sein, mit WHMCS als Billing-Backend. Oder das plattformeigene Billing-Frontend übernimmt Prepaid-Guthaben, Postpaid-Rechnungen und Zahlungsanbieter. Ænix Billing und die [WHMCS-Integration](/de/produkte/whmcs-integration/) sind proprietäre Ænix-Module, die in jeder Subskriptionsstufe enthalten sind; der Rest der Plattform ist Open-Source-Cozystack. Die Seite zur [Abrechnung von Managed Services](/de/loesungen/managed-services-abrechnung/) zeigt, welcher Teil welcher ist.

Das letzte Stück sind Sperrung und Suspendierung von Tenants. Überfällige Konten werden automatisch suspendiert, Ressourcen lassen sich blockieren oder für eine Sicherheitsprüfung sperren. Einen nicht zahlenden Kunden abzuschalten ist damit ein Abrechnungsereignis und kein Engineering-Ticket.

## Betrieb: ein anders geschnittenes Team

Der Betrieb verändert sich stärker, als die meisten Anbieter erwarten. Ein VPS-Team patcht Hypervisoren und beantwortet Tickets. Ein Plattformteam betreibt eine einzige, per GitOps verwaltete Plattformversion, probt Upgrades auf Staging, bevor sie in Produktion gehen, und beobachtet Metriken und Logs pro Tenant statt einzelner Hosts. Audit-Logs haben eine konfigurierbare Aufbewahrungsdauer und lassen sich in den eigenen unveränderlichen Speicher des Kunden ausleiten, wenn ein regulierter Tenant das verlangt.

Der [Hosting-Anbieter-Rechner](/de/hosting-anbieter-rechner/) modelliert den Plattformbetrieb in Engineer-Tagen pro Node. Sein Standardmodell kommt auf etwa 1,3 Vollzeit-Engineers bei 10 Nodes und etwa 2,6 bei 40. Eine Rufbereitschaft rund um die Uhr braucht mehr Personal, als diese Rechnung ergibt — oder die 24×7-Abdeckung der Supportstufe Plus. Der Kundensupport für Cloud-Kunden ist eigenes Personal und wächst mit der Zahl der Kunden, nicht mit der Zahl der Nodes.

Die ausführlich beschriebene [Fallstudie zur souveränen Public Cloud](/de/case-studies/sovereign-public-cloud/) zeigt, wie diese Reife in der Praxis aussieht: Ein Anbieter betreibt eine kommerzielle Public Cloud über drei Rechenzentren und hat seinen Prozess darauf aufgebaut, Kunden vor Änderungen zu informieren, Upgrades auf Staging zu proben und fertige Runbooks für die Storage-Wiederherstellung und Plattform-Upgrades bereitzuhalten.

## Die Reihenfolge der Umstellung

Die Reihenfolge zählt mehr als das Tempo.

1. **Assessment.** Das [Platform Readiness Assessment](/de/dienstleistungen/platform-readiness-assessment/) hat einen Festpreis und dauert 14 Tage (fokussiert) oder 28 Tage (vollständig): aktuelle Plattform, Kundenprofil, Lücken im Katalog und Migrationsplan.
2. **Plattform live.** Mit dem produktisierten Installer ist die Plattform wenige Wochen nach Bereitstellung der Hardware live, parallel zum Bestand aufgebaut und intern validiert.
3. **Beta-Kohorte.** Eine Handvoll befreundeter Kunden auf der neuen Plattform, mit echter Abrechnung. Hier werden die Kanten geglättet, nicht in der Öffentlichkeit.
4. **Eingeschränkte Verfügbarkeit.** Eine größere Gruppe, bei der Abrechnungsmuster und Supportlast vor dem offenen Start überprüft werden.
5. **Allgemeine Verfügbarkeit**, danach die **Spezialisierung** — GPU, KI-Services, regionale Souveränitätspositionierung.

Wie schnell die Schritte drei bis fünf folgen, hängt von Ihrem Vertriebstempo und Ihrem Team ab, nicht vom Plattformaufbau. Nationale oder Betreiberprogramme über mehrere Regionen sind eine andere Größenordnung: Planen Sie einen Pilot von 3–6 Monaten und danach 9–18 Monate bis zum vollen Multi-Region-Betrieb.

## Wo Modernisierungen scheitern

Vier Fehler wiederholen sich. Der erste: das Kundenportal als „gut genug“ zu behandeln. Anbieter, die über Zuverlässigkeit und Preis konkurrieren, investieren oft zu wenig in den Bestellablauf, der jetzt den Verkauf trägt. Der zweite: eine Abrechnung auszuliefern, die nur ungefähr stimmt — das beschädigt Vertrauen schneller als jeder Ausfall. Der dritte: das Team für die heutigen Kunden zu dimensionieren; ein Start, der im ersten Quartal weit mehr Kunden gewinnt als geplant, überfordert ein Team, das auf die alte Zahl ausgelegt war. Der vierte: ein generischer Katalog, der anbietet, was jeder andere Anbieter auch anbietet, statt dessen, was Ihre Region und Ihre Kunden tatsächlich brauchen.

## Wann das nicht passt

Wenn der VPS-Wiederverkauf Ihr gesamtes Geschäft ist und Sie mit seiner Marge zufrieden sind, ist ein VPS-Panel mit angebauter Abrechnung günstiger und einfacher. Behalten Sie es. Dasselbe gilt, wenn im Unternehmen niemand eine Kubernetes-basierte Plattform verantworten kann und Sie diese Verantwortung auch nicht als Support-Subskription einkaufen wollen: Die Plattform braucht einen operativen Eigentümer, intern oder vertraglich. Und wenn Sie keine direkten Kundenbeziehungen haben, die sich monetarisieren lassen — wenn Sie vor allem die Cloud eines anderen weiterverkaufen —, zeigt die Wirtschaftlichkeit meist in eine andere Richtung. Der [Beitrag zur Wirtschaftlichkeit](/de/blog/2026/05/public-cloud-platform-wirtschaftlichkeit-hosting-anbieter/) geht die Schwellen im Detail durch.

## Wie es weitergeht

Beginnen Sie mit der Seite für [Hosting-Anbieter](/de/branchen/hosting-anbieter/) und der [Live-Demo](/demo/), die das Kundenportal und das Back-Office des Betreibers mit Demodaten zeigt. Rechnen Sie Ihre Zahlen im [Hosting-Anbieter-Rechner](/de/hosting-anbieter-rechner/) durch, prüfen Sie die Subskriptionsstufen unter [Preise](/de/preise/), und wenn Sie Unterstützung beim Aufbau selbst wünschen, sehen Sie sich den Service [Public Cloud Builder](/de/dienstleistungen/public-cloud-builder/) an.

*Ænix hat Cozystack geschaffen (ein CNCF-Sandbox-Projekt; der Antrag auf Incubation befindet sich in der Due Diligence) und betreut es gemeinsam mit Maintainern anderer Unternehmen.*
