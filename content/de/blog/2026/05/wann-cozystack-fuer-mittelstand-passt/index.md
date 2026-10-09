---
title: "Wann Cozystack für KMU und Mittelstand passt — und wann nicht"
seo_title: "Wann Cozystack für den Mittelstand passt"
description: "Die meisten kleinen Firmen brauchen Cozystack nicht. Ein ehrlicher Test, wann es passt, was sonst passt und wann ein regionaler Anbieter die bessere Wahl ist."
date: "2026-05-01"
lastmod: "2026-10-09"
cover_image: "/img/blog/covers/de/wann-cozystack-fuer-mittelstand-passt.jpg"
author: "Timur Tukaev"
type: "article"
topics: ["DORA", "Proxmox", "Cozystack", "GPU", "Multi-tenancy"]
language: "de"
companion_landing: "/de/branchen/mittelstand/"
quiz:
  title: "Wissens-Check: Cozystack für KMU/Mittelstand"
  questions:
    - q: "Wie viele der sechs Kriterien sollten laut Artikel zutreffen, bevor sich der Eigenbetrieb von Cozystack lohnt?"
      options:
        - { text: "Mindestens eines der sechs", correct: false }
        - { text: "Mindestens drei der sechs", correct: true }
        - { text: "Alle sechs", correct: false }
        - { text: "Genau zwei der sechs", correct: false }
      explanation: "Der ehrliche Test: null oder ein Kriterium bedeutet Over-Engineering, zwei sind grenzwertig, ab drei passt Cozystack. Die Kriterien sind regulierte Daten, ein Multi-Tenant-Modell, dauerhaft ausgelastete Workloads, ein internes Plattform-Team, KI- und GPU-Workloads im großen Maßstab sowie ein konkreter Ausstiegsauslöser."
    - q: "Was empfiehlt der Artikel einem kleinen Unternehmen ohne regulierte Daten mit einigen Dutzend VMs im eigenen Haus?"
      options:
        - { text: "Trotzdem Cozystack, der Einheitlichkeit wegen", correct: false }
        - { text: "Proxmox VE oder Managed Services eines Hyperscalers oder eines Anbieters wie Hetzner oder OVHcloud", correct: true }
        - { text: "Eine selbst gebaute Virtualisierungsplattform", correct: false }
      explanation: "Für KMU ohne regulierte Daten verweist der Artikel auf Proxmox VE für die Virtualisierung im eigenen Haus und auf Managed Services von AWS, Azure oder GCP beziehungsweise von Anbietern wie Hetzner, OVHcloud oder DigitalOcean. Cozystack wäre dort Over-Engineering."
    - q: "Ein kleines Unternehmen muss seine Daten im Land halten, hat aber niemanden, der eine Plattform betreiben kann. Was schlägt der Artikel vor?"
      options:
        - { text: "Einen Cozystack-Cluster mit drei Nodes im Büro aufbauen", correct: false }
        - { text: "Cloud-Services bei einem regionalen Anbieter beziehen, der die Ænix Public Cloud Platform betreibt", correct: true }
        - { text: "Alles in eine Region eines globalen Hyperscalers verlagern", correct: false }
        - { text: "Warten, bis das Unternehmen ein Plattform-Team hat", correct: false }
      explanation: "Der Abschnitt zum Mittelweg: Ein regionaler Hosting-Anbieter oder MSP, der die Ænix Public Cloud Platform betreibt, verkauft VMs, Managed Kubernetes und Datenbanken als Produkt. Das Unternehmen erhält Infrastruktur im eigenen Land, ohne die Plattform zu betreiben; Betrieb und Abonnement trägt der Anbieter."
    - q: "Welches Beispiel nennt der Artikel für einen Mittelständler, der mandantenfähig wird?"
      options:
        - { text: "Eine Entwicklungsumgebung für ein einzelnes Team", correct: false }
        - { text: "Ein SaaS-Unternehmen mit über 100 Kunden, die harte Isolation brauchen", correct: true }
        - { text: "Ein internes Intranet mit einer Datenbank", correct: false }
      explanation: "Der Weg zur Mandantenfähigkeit ist einer der passenden Fälle: ein SaaS-Unternehmen mit über 100 Kunden, die harte Isolation brauchen — veranschaulicht durch die Case Study zum Messaging-API-SaaS, das 13 Proxmox-Hosts auf einen Cozystack-Cluster konsolidiert hat."
    - q: "Welchen ersten Schritt beschreibt der Artikel, und was kostet er?"
      options:
        - { text: "Einen zweiwöchigen, kostenpflichtigen Proof of Concept", correct: false }
        - { text: "Ein kostenloses 30-minütiges Discovery-Gespräch", correct: true }
        - { text: "Ein kostenpflichtiges 28-Tage-Assessment noch vor jedem Gespräch", correct: false }
      explanation: "Die Zusammenarbeit beginnt mit einem kostenlosen 30-minütigen Discovery-Gespräch. Nur wenn es passen könnte, folgt optional ein Platform Readiness Assessment zum Festpreis über 14 oder 28 Tage, und eine Umsetzung erst dann, wenn das Assessment den Fit bestätigt."
faq:
  - q: "Passt Cozystack für ein kleines Unternehmen?"
    a: "Meist nicht. Ein Unternehmen mit einem einzelnen Tenant, einigen Dutzend VMs, ohne regulierte Daten und ohne Plattform-Team ist mit Proxmox VE, Managed Services der Hyperscaler oder Anbietern wie Hetzner und OVHcloud besser bedient. Cozystack lohnt sich, wenn mindestens drei von sechs Kriterien zutreffen: regulierte Daten, ein Multi-Tenant-Modell, dauerhaft ausgelastete Workloads, ein Plattform-Team, KI/GPU im großen Maßstab oder ein konkreter Ausstiegsauslöser."
  - q: "Kann ein kleines Unternehmen die Vorteile von Cozystack nutzen, ohne es selbst zu betreiben?"
    a: "Ja. Regionale Hosting-Anbieter und MSPs betreiben die Ænix Public Cloud Platform und verkaufen VMs, Managed Kubernetes, Datenbanken und Object Storage als Produkt. Das kleine Unternehmen bezieht den Service; der Anbieter betreibt die Plattform und hält das Abonnement."
  - q: "Was kostet der Eigenbetrieb von Cozystack tatsächlich?"
    a: "Die Software ist Open Source unter Apache 2.0, aber eine Plattform braucht Personal und Hardware. Der Hosting-Anbieter-Rechner von Ænix geht in seinem Standardmodell von etwa 1,3 Vollzeit-Engineers für eine Plattform mit 10 Nodes aus. Optionaler Support von Ænix beginnt bei 1.250 USD pro 10 physische Nodes und Monat bei jährlicher Abrechnung (Basic-Stufe)."
  - q: "Wann lohnt sich Cozystack für ein mittelständisches Unternehmen?"
    a: "Wenn es regulierte Daten mit Residenzanforderungen verarbeitet, viele Kunden bedient, die harte Isolation brauchen, dauerhaft ausgelastete Workloads betreibt, bei denen eigene Hardware günstiger ist als Hyperscaler-Preise, ein Plattform-Team hat oder aufbaut, oder vor einem konkreten Auslöser steht, etwa einer VMware-Verlängerung oder einer Repatriierungsentscheidung."
  - q: "Wie klärt Ænix, ob Cozystack passt?"
    a: "In einem kostenlosen 30-minütigen Discovery-Gespräch. Lautet die Antwort nein, sagt Ænix das und nennt eine einfachere Option. Könnte es passen, folgt optional ein Platform Readiness Assessment zum Festpreis über 14 oder 28 Tage, bevor etwas umgesetzt wird."
hreflang_en: /blog/2026/05/when-cozystack-fits-smb-and-mid-market/
---

Ein guter Teil der Menschen, die sich bei uns melden, leitet kleine Unternehmen. Manche haben von den neuen VMware-Preisen gelesen, manche wollen ihre Daten aus einer US-Cloud holen, und manche finden einfach die Idee einer Open-Source-Plattform attraktiv, die VMs, Kubernetes und Datenbanken an einem Ort vereint. Die meisten von ihnen brauchen Cozystack nicht, und das sagen wir ihnen schon im ersten Gespräch.

Dieser Artikel legt offen, wie wir zu dieser Antwort kommen, damit Sie denselben Test machen können, bevor Sie mit irgendjemandem sprechen. Er behandelt außerdem die Option, die kleine Unternehmen gern übersehen: die Vorteile einer Cloud auf Basis von Cozystack zu nutzen, ohne sie selbst zu betreiben.

## Wofür Cozystack gebaut ist

Cozystack ist eine Open-Source-Cloud-Plattform, ein CNCF-Sandbox-Projekt, dessen Antrag auf Incubation sich in der Due-Diligence-Prüfung befindet. Ænix hat Cozystack entwickelt und pflegt es gemeinsam mit Engineers anderer Unternehmen. Es macht aus Bare-Metal-Servern eine Cloud: KubeVirt-VMs und Container auf einer Kubernetes-API, Tenant-Kubernetes-Cluster, ein Katalog an Managed Services (PostgreSQL, MariaDB, Kafka, ClickHouse, S3-kompatibler Storage und mehr), replizierter LINSTOR-Storage und Multi-Tenancy mit verschachtelten Tenants, sodass eine Organisation isolierte Teile der Plattform an Kunden, Geschäftsbereiche oder Teams übergeben kann.

Jede dieser Funktionen beantwortet ein Problem, das erst ab einer gewissen Größe auftritt. Verschachtelte Tenants zählen, wenn viele Kunden einander nicht sehen dürfen. Ein Service-Katalog zählt, wenn Entwickler ständig Datenbanken anfragen und tagelang darauf warten. Über Nodes replizierter Storage zählt, wenn ein Ausfall echtes Geld kostet. Ein Unternehmen mit einem Team, einem Produkt und zwanzig VMs hat keines dieser Probleme — die Technik, die sie löst, muss aber trotzdem installiert, aktualisiert und verstanden werden.

## Was der Eigenbetrieb wirklich kostet

Die Software ist unter Apache 2.0 kostenlos, deshalb liegt man bei der Kostenfrage leicht daneben. Die tatsächlichen Kosten einer selbst betriebenen Plattform sind Personal und Hardware.

Beim Personal geht der Hosting-Anbieter-Rechner von Ænix in seinem Standardmodell von etwa 1,3 Vollzeit-Engineers für eine Plattform mit 10 Nodes aus. Das ist eine Schätzung, kein Naturgesetz, aber sie zeigt die Größenordnung: Eine produktive Cloud ist jemandes Job und nichts, was ein IT-Allrounder freitagnachmittags nebenbei erledigt. Eine Rufbereitschaft rund um die Uhr braucht mehr Leute, als diese Rechnung nahelegt.

Beim Support gilt: Wenn Sie Ænix im Rücken haben wollen, wird das veröffentlichte Abonnement pro Block von 10 physischen Nodes berechnet. Basic kostet 1.250 USD im Monat bei jährlicher Abrechnung, Standard 3.000 USD, Plus 5.500 USD (die vollständige Übersicht finden Sie unter [Preise](/de/preise/)). Für eine Plattform, die ein Geschäft trägt, ist das ein angemessener Betrag. Für ein Unternehmen, das dieselben Workloads auf vier Proxmox-Hosts betreiben könnte, ist es viel Geld.

Keiner dieser Posten ist ein Grund, Cozystack zu meiden. Beide sind ein Grund zu prüfen, ob die Probleme, die es löst, tatsächlich Ihre sind.

## Der ehrliche Test

Wir achten auf sechs Punkte. Cozystack passt, wenn mindestens drei davon zutreffen.

1. **Regulierte Daten.** Daten aus Banken, Versicherungen, Gesundheitswesen oder öffentlichem Sektor mit Souveränitäts- oder Residenzanforderungen, die einen ausländischen Hyperscaler ausschließen.
2. **Ein Multi-Tenant-Modell.** Sie bedienen Kunden, Geschäftsbereiche oder Partner, die harte Isolation voneinander brauchen, nicht nur getrennte Ordner.
3. **Dauerhaft ausgelastete Workloads.** Die Auslastung ist rund um die Uhr gleichmäßig, sodass eigene oder gemietete Hardware günstiger ist als Pay-as-you-go. Sprunghafte, meist ungenutzte Workloads sprechen für den Hyperscaler.
4. **Ein internes Plattform-Team** oder die Entscheidung, eines aufzubauen. Irgendjemand muss Upgrades, Kapazität und Incidents verantworten.
5. **KI- und GPU-Workloads im großen Maßstab.** Dauerhafte Inferenz oder dauerhaftes Training, bei dem die GPU-Mietrechnung schneller wächst als das Geschäft.
6. **Ein konkreter Ausstiegsauslöser.** Eine VMware-Verlängerung, eine Repatriierungsentscheidung, ein Vertrag, der zu einem bekannten Datum endet.

Bei null oder einem Punkt ist Cozystack Over-Engineering. Bei zwei ist es grenzwertig, und die Antwort hängt meist davon ab, wie schnell das Unternehmen wächst. Ab drei passt es, und das Gespräch dreht sich nicht mehr um das Ob, sondern um das Wie.

## Wenn es nicht passt — was stattdessen

### Kleine Unternehmen ohne regulierte Daten

Wenn Sie einige Dutzend VMs für Ihr eigenes Geschäft betreiben, keine Kunden haben, die Isolation brauchen, und keine Aufsicht wissen will, wo Ihre Daten liegen, wählen Sie das Einfachste, was funktioniert. [Proxmox VE](/de/blog/2026/05/proxmox-vs-vmware-vs-cozystack/) ist eine ausgereifte, leicht zu installierende Virtualisierungsplattform und für die meisten kleinen IT-Abteilungen mit eigenen Servern die richtige Antwort. Wenn Sie lieber gar keine Hardware besitzen wollen, halten Managed Services von AWS, Azure oder GCP beziehungsweise von Anbietern wie Hetzner, OVHcloud oder DigitalOcean den Betriebsaufwand nahe null.

### Mittelständler mit einfachen Anforderungen

Wenn Ihre Workloads ausschließlich Container sind, ist ein schlankes Upstream-Kubernetes — auf eigenen Servern oder als Managed Service — leichter als eine vollständige Plattform mit eingebauter Virtualisierung. Wenn Ihre bisherige Managed Cloud funktioniert und die Rechnung planbar ist, bleiben Sie dabei: Was nicht kaputt ist, muss man nicht reparieren. Und wenn das Infrastruktur-Team aus zwei Personen besteht, sind ein paar Cloud-Server und VPS bei einem regionalen Hoster oft die ehrlichste Architektur.

### Der Mittelweg: bei einem regionalen Anbieter beziehen, der Cozystack betreibt

Zwischen „beim Hyperscaler bleiben“ und „Cozystack selbst betreiben“ liegt ein Fall, der für mehr kleine Unternehmen die richtige Antwort ist als beide Extreme. Sie brauchen Infrastruktur im eigenen Land, vielleicht eine Managed-Datenbank oder einen kleinen Kubernetes-Cluster, haben aber niemanden, der eine Plattform betreiben kann.

Genau das lösen regionale Hosting-Anbieter und MSPs. Mehrere von ihnen betreiben die [Ænix Public Cloud Platform](/de/produkte/public-cloud-platform/) — die produktisierte Cozystack-Distribution mit Billing, einem markenfähigen Kundenportal und Service-Assistenten — und verkaufen VMs, Managed Kubernetes, Datenbanken und S3-Storage unter eigener Marke an ihre Kunden. Sie kaufen einen Service zu einem Monatspreis; Plattform-Team, Hardware und Abonnement trägt der Anbieter. Die [Case Study zur souveränen Public Cloud](/de/case-studies/sovereign-public-cloud/) beschreibt einen solchen Anbieter: einen Schweizer Cloud-Provider, dessen Markt öffentlichen Sektor und Finanzbranche umfasst und der VMs, Managed Kubernetes, Datenbanken und GPUs über drei Rechenzentren im Land betreibt.

Für ein kleines Unternehmen ist das meist der bessere Tausch. Sie erhalten Datenresidenz und einen Ausstiegspfad, der nicht von einem einzigen Hyperscaler abhängt, ohne Infrastruktur zu einer eigenen Abteilung zu machen. Wachsen Sie später in drei der sechs Kriterien hinein, ist der Weg zur eigenen Plattform kürzer, weil die Workloads bereits auf derselben Open-Source-Grundlage laufen. Ænix arbeitet mit solchen Anbietern über sein [Partnerprogramm](/de/partner/) zusammen; in einem Discovery-Gespräch lässt sich schnell klären, ob es einen in Ihrer Region gibt.

## Wenn es passt — Beispiele

### Mittelstand mit regulierten Daten

Eine Regionalbank mit Geschäft in mehreren Rechtsräumen unter DORA, ein mittelgroßer Versicherer, der KI für die Schadenbearbeitung auf regulierten Daten betreibt, eine öffentliche oder öffentlichkeitsnahe Einrichtung, deren Vergaberegeln Souveränität verlangen. Hier entscheidet faktisch die Aufsicht über die Architektur, und die Plattform muss so gebaut sein, dass sie Audits unterstützt, statt sie Tabellenkalkulationen zu überlassen.

### Mittelstand auf dem Weg zur Mandantenfähigkeit

Ein SaaS-Unternehmen mit 100 oder mehr Kunden, die harte Isolation brauchen, eine B2B-Plattform für regulierte Branchen, ein spezialisiertes Cloud-Produkt für einen vertikalen Markt. Die [Case Study zum Messaging-API-SaaS](/de/case-studies/bare-metal-kubernetes-messaging-saas/) zeigt gut, wie klein ein solches Team sein kann: Das Unternehmen hat 13 Proxmox-Hosts auf einen Cozystack-Cluster auf Bare Metal konsolidiert, rund 25.000 isolierte Instanzen pro Kunde ohne Umbau der Anwendung auf KubeVirt-VMs verlagert und betreibt die Plattform mit einem Infrastruktur-Team, das faktisch aus einer Person besteht, mit L3-Support von Ænix im Rücken. Über dieses Projekt hat nicht die Unternehmensgröße entschieden, sondern die Zahl der Tenants und das Tempo beim Onboarding.

### Mittelstand mit starkem Plattform-Team

Unternehmen, die gezielt in Platform Engineering investiert haben, oder schnell wachsende Technologiefirmen, die dem einfachen Hyperscaler-Modell entwachsen sind und Developer-Self-Service zu eigenen Bedingungen wollen. Die Leute haben sie bereits; Cozystack gibt ihnen eine Plattform, die sie nicht aus Einzelteilen zusammensetzen müssen.

## Woran Sie merken, dass Sie die Grenze überschreiten

Die meisten Unternehmen springen nicht auf einen Schlag von null auf drei Kriterien. Sie bewegen sich allmählich dorthin. Die Signale, die wir am häufigsten sehen: Die Zahl der Kunden steigt, und Isolation beruht auf Konventionen statt auf der Plattform; Kunden fragen nach Datenbanken oder Kubernetes, nicht mehr nur nach VMs; eine Verlängerungsmitteilung kommt mit einer Zahl, die das Budget verändert; ein großer Kunde schickt einen Sicherheitsfragebogen, der wissen will, wo die Daten liegen und wer darauf zugreifen kann. Unser Artikel darüber, [wann Proxmox an seine Grenzen kommt](/de/blog/2026/05/proxmox-migration-cozystack-single-tenant-grenzen/), geht diese Signale für Teams, die von Proxmox kommen, im Detail durch.

Treffen zwei davon zu, lohnt sich ein Gespräch, keine Migration.

## Wie die Zusammenarbeit abläuft

Die ersten Schritte halten wir bewusst günstig, denn für die meisten kleinen Unternehmen ist das richtige Ergebnis, dass nichts gebaut wird.

- **Ein [30-minütiges Discovery-Gespräch](/de/kontakt/)** — kostenlos und ohne Vertriebsdruck. Wir sagen Ihnen, ob Cozystack passt, und wenn nicht, was wir an Ihrer Stelle einsetzen würden.
- **Ein [Platform Readiness Assessment](/de/dienstleistungen/platform-readiness-assessment/)** — optional, zum Festpreis, 14 Tage fokussiert oder 28 Tage vollständig, für Organisationen, die eine schriftliche, strukturierte Antwort wollen, bevor sie Budget binden. Der Bericht nennt den empfohlenen Stack und sagt es offen, wenn das nicht Cozystack ist.
- **Umsetzung** — nur, wenn das Assessment den Fit bestätigt. Im Mittelstand reicht oft selbst betriebenes Cozystack mit [Enterprise-Support von Ænix](/de/produkte/cozystack-enterprise-support/); dasselbe Abonnement deckt die [Public Cloud Platform](/de/produkte/public-cloud-platform/) ab, wenn Sie ein Produkt für Kunden aufbauen.

Das Open-Source-Projekt und seine Dokumentation finden Sie auf [cozystack.io](https://cozystack.io/), falls Sie es zuerst im Labor ausprobieren möchten.

## Die ehrliche Antwort

Ænix verkauft Abonnements und Services, keine Lizenzen. Einem Unternehmen eine Plattform zu bauen, die es nicht braucht, würde dieses Unternehmen Geld und uns sein Vertrauen kosten. Deshalb lautet die ehrliche Antwort auf die meisten Anfragen aus dem KMU-Segment: Bleiben Sie, wo Sie sind — auf Proxmox, in Ihrer Managed Cloud oder bei einem regionalen Anbieter, der die Plattform für Sie betreibt. Das sagen wir lieber in der ersten halben Stunde, als es im dritten Monat festzustellen.
