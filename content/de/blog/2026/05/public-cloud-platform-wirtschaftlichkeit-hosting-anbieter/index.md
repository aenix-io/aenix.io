---
title: "Wirtschaftlichkeit der Public Cloud Platform — wann sich eine schlüsselfertige Cloud aus der Box für Hosting-Anbieter rechnet"
seo_title: "Public Cloud Platform: Wirtschaftlichkeit für Hoster"
description: "Unit Economics der Aenix Public Cloud Platform für Hosting-Anbieter: ARPU, Infrastrukturkosten pro Tenant, Kapazität des Plattformteams, Amortisation, Grenzen."
slug: "public-cloud-platform-wirtschaftlichkeit-hosting-anbieter"
date: "2026-05-15"
cover_image: "/img/blog/covers/de/public-cloud-platform-wirtschaftlichkeit-hosting-anbieter.jpg"
author: "Aenix Team"
type: "article"
topics: ["Hosting", "Cozystack", "Multi-tenancy", "Platform Engineering", "Cloud"]
language: "de"
hreflang_en: "/blog/2026/05/isp-edition-economics-hosting-providers/"
companion_landing: "/de/produkte/public-cloud-platform/"
companion_label: "Details zur Public Cloud Platform ansehen →"
quiz:
  title: "Wissens-Check: Unit Economics der Public Cloud Platform"
  questions:
    - q: "Wie lautet der veröffentlichte Einstiegspreis für den Basic-Support-Tier der Public Cloud Platform?"
      options:
        - { text: "Ab 1.250 $ pro Monat für 10 Nodes", correct: true }
        - { text: "500 € pro Monat für unbegrenzt viele Nodes und Tenants", correct: false }
        - { text: "Preis pro VM, ab etwa 5 € pro VM und Monat", correct: false }
      explanation: "Der Abschnitt zum Preismodell nennt ausdrücklich „ab 1.250 $/Monat für den Basic-Support-Tier mit 10 Nodes“ — Aenix rechnet nicht pro VM, pro CPU oder pro GB ab."
    - q: "Welche Gesamtkosten pro typischem Tenant nennt der Artikel für einen mittelgroßen Provider mit 500 Tenants?"
      options:
        - { text: "Etwa 5 bis 10 € pro Tenant und Monat", correct: false }
        - { text: "Etwa 80 bis 100 € pro Tenant und Monat", correct: false }
        - { text: "Etwa 20 bis 40 € pro Tenant und Monat", correct: true }
      explanation: "Der Abschnitt zu den Unit Economics rechnet mit 15–30 €/Monat direkten Infrastrukturkosten plus 5–10 € anteiligen Kosten des Plattformteams bei 500 Tenants und kommt so auf 20–40 €/Monat Gesamtkosten pro typischem Tenant am unteren Ende des Ressourcenverbrauchs."
    - q: "Welche Break-even-Zahl errechnet der Artikel für einen Provider mit eigenem Plattformteam von 3–5 Personen und 50 Nodes?"
      options:
        - { text: "Etwa 100 bis 200 zahlende Tenants", correct: false }
        - { text: "Etwa 1.200 bis 4.000 zahlende Tenants", correct: true }
        - { text: "Etwa 10.000 oder mehr zahlende Tenants", correct: false }
      explanation: "Die Break-even-Rechnung addiert Support der Standard-Stufe für 50 Nodes (15.000 $ pro Monat zum Listenpreis) zu 44–85 Tsd. € für Team, Hardware, Colocation, Support und Vertrieb. Bei 25–50 €/Monat Marge pro Tenant liegt der Break-even bei etwa 1.200–4.000 zahlenden Tenants. Ein kleinerer Start auf 10 Nodes mit vorhandenem Personal ändert dieses Bild."
    - q: "Welches Fehlermuster wird als das größte einzelne Fehlermuster bei Providern der Public Cloud Platform in der Pipeline genannt?"
      options:
        - { text: "Zu geringe Investitionen in das Kundenportal", correct: false }
        - { text: "Ein Betriebsteam, das für das Volumen in 18 Monaten zu klein ist", correct: true }
        - { text: "Ein Servicekatalog mit Diensten, die der Betrieb nicht beherrscht", correct: false }
      explanation: "Der Artikel nennt die Unterbesetzung im Betrieb „das größte einzelne Fehlermuster in unserer Pipeline“: Betriebsteams mit 4 Personen, die bei 50 Kunden funktioniert haben, skalieren bei 200+ nicht, SLA-Verletzungen häufen sich, die Abwanderung steigt."
    - q: "Warum ist ein vollständiges Programm mit eigenem Plattformteam laut Artikel unter ~300 Kunden oft verfrüht?"
      options:
        - { text: "Cozystack kann technisch nicht auf so wenige Tenants herunterskalieren", correct: false }
        - { text: "EU-Aufsichtsbehörden verbieten kommerzielle Clouds mit weniger als 300 Tenants", correct: false }
        - { text: "Die Fixkosten eines eigenen Teams erdrücken in dieser Größe den Deckungsbeitrag", correct: true }
      explanation: "Unter ~300 Kunden kostet ein vollständiges Programm mit eigenem Plattformteam von 3–5 Personen meist mehr, als es an Marge einbringt. Der Artikel empfiehlt stattdessen einen kleineren Start: 10 Nodes in der Basic-Stufe, ein schmaler Katalog und vorhandenes Personal."
---


Die meisten Diskussionen bei Hosting-Anbietern zur Frage „Sollen wir
ein eigenes Cloud-Produkt bauen?“ enden bei der Technologie. Die
schwierigere Frage sind die Unit Economics: Was kostet ein Tenant, was
ist ein realistischer ARPU, wie viele Tenants braucht es bis zum
Break-even, und wo versagt das Modell?

Dieser Artikel ist die Arbeitsfassung dieser Diskussion. Er setzt
voraus, dass die Technologieentscheidung gefallen ist (die
Cozystack-basierte Ænix Public Cloud Platform), und konzentriert sich
darauf, ob die Wirtschaftlichkeit zu *Ihrem* Hosting-Geschäft passt —
nicht zu einem abstrakten.

## Was die Public Cloud Platform tatsächlich liefert

Vor der Wirtschaftlichkeit der Umfang. Die Public Cloud Platform ist die
schlüsselfertige Cloud aus der Box, die Ænix an Hosting-Anbieter, MSPs,
regionale Clouds sowie kleine und mittlere Rechenzentren verkauft. Sie
umfasst:

- **Eine mandantenfähige Cozystack-Plattform** auf Bare Metal unter
  Kontrolle des Kunden (KubeVirt + Cilium + Kube-OVN + LINSTOR +
  Tenant CRD).
- **Cozystack Dashboard** — ein Self-Service-Portal für Ihre Kunden, das
  sich an Ihre Hosting-Marke anpassen lässt.
- **WHMCS-Integration** — die Abrechnung läuft über das
  Kundenverwaltungssystem, das die meisten Hosting-Anbieter ohnehin
  betreiben.
- **Servicekatalog** — VMs, Tenant-Kubernetes-Cluster,
  Managed-Datenbanken (PostgreSQL, MariaDB, MongoDB, Redis, Valkey,
  Kafka, ClickHouse usw.), S3-kompatibler Object Storage, GPU-Dienste.
  Pro Provider kuratierbar.
- **Sperren / Suspendieren von Tenants** — betriebliche Hooks für
  Zahlungsausfälle und die Durchsetzung von Richtlinien.
- **Migrations-Tooling** — produktisierte Muster für die Quellen VMware,
  OpenStack, Virtuozzo und Proxmox.

Was sie *nicht* ist: ein Hyperscaler. Sie ist ein souveränes,
mandantenfähiges Cloud-Produkt für Hosting-Anbieter, die über regionale
Präsenz, Souveränität und Preisflexibilität konkurrieren wollen — nicht
über die Katalogtiefe eines Hyperscalers.

## Preismodell

Subskriptionen der Public Cloud Platform nutzen die veröffentlichten
Support-Stufen, berechnet pro 10 physische Nodes und Monat bei
jährlicher Abrechnung: **Basic 1.250 $**, **Standard 3.000 $**,
**Plus 5.500 $**; Enterprise wird individuell angeboten. Höhere Stufen
bringen kürzere Reaktionszeiten, unbegrenzte Incidents, Support rund um
die Uhr (Plus und Enterprise) und einen breiteren Supportumfang — die
vollständige Übersicht steht auf der [Preisseite](/de/preise/). Ænix rechnet nicht pro VM, pro CPU oder pro GB
ab — die Cozystack-Plattform selbst ist unter Apache 2.0 kostenlos;
bezahlt werden Projektarbeit, Support und betriebliche Absicherung.

Für einen typischen mittelgroßen Hosting-Anbieter mit 30–100 Nodes im
Kundenbetrieb sind das zum Listenpreis 3.750–12.500 $/Monat in der
Basic-Stufe oder 9.000–30.000 $/Monat in der Standard-Stufe. Vergleichen
Sie das mit den wiederkehrenden Lizenz- und Subskriptionskosten, die Sie
heute an VMware oder an einen Anbieter von OpenStack-Distributionen zahlen.

## Unit Economics — die Sicht pro Tenant

Die Frage, die jeder CFO eines Hosting-Anbieters stellt: *Was kostet es
uns, einen Tenant zu bedienen, und was können wir realistisch dafür
verlangen?*

### Kosten pro Tenant

Die Infrastrukturkosten pro Tenant werden von Compute, Storage und
Bandbreite darunter bestimmt, nicht von Cozystack selbst. Der Overhead
von Cozystack liegt bei ~5–10 % der Node-Kapazität (typischer Overhead
einer Kubernetes-Plattform, für die Produktion gut vertretbar). Für einen
Tenant mit ungefähr folgendem Verbrauch:

- 2 vCPU
- 4 GB RAM
- 50 GB Blockspeicher (3-fach repliziert)
- 100 GB Egress pro Monat

liegen die direkten Infrastrukturkosten (abgeschriebene Hardware +
Colocation + Bandbreite) nach europäischem Preisniveau 2026 typischerweise
bei 15–30 €/Monat. Die anteiligen Kosten der Cozystack-Plattform (das
Gehalt des Plattformteams, verteilt auf alle Tenants) kommen bei einem
mittelgroßen Provider mit 500 Tenants mit weiteren 5–10 € hinzu.

Damit liegen die **Gesamtkosten pro typischem Tenant bei 20–40 €/Monat**
am unteren Ende des Ressourcenverbrauchs.

### Was Sie verlangen können

Der ARPU von Hosting-Anbietern für ein vergleichbares Ressourcenprofil
liegt 2026 in EU-Märkten typischerweise bei 40–80 €/Monat. Höher in der
DACH-Region und in Westeuropa, niedriger in Mittel- und Osteuropa sowie
in Zentralasien. Mit Managed Services (Managed PostgreSQL, Managed S3,
GPU-Zugang) steigt der ARPU auf 80–200+ €/Monat pro Tenant.

Damit liegt die Marge am unteren Ende bei etwa **dem 2- bis 3-Fachen der
Kosten**, bei Tenants mit vielen Managed Services bei **dem 4- bis
6-Fachen**. Keine Hyperscaler-Margen, aber auch keine Margen eines
VMware-Resellers. Eher klassische Hosting-Margen in der Realität von
2026 nach Broadcom.

## Break-even-Rechnung

Die andere Frage des CFO: *Wie viele Kunden brauchen wir, bis wir Geld
verdienen?*

Die Fixkosten eines mittelgroßen Hosting-Anbieters auf der Public Cloud
Platform:

| Posten | Monatlich | Jährlich |
|---|---|---|
| Ænix-Support (Standard-Stufe, 50 Nodes = 5 × 3.000 $) | 15 Tsd. $ | 180 Tsd. $ |
| Platform-Engineering-Team (3–5 VZÄ) | 20–35 Tsd. € | 240–420 Tsd. € |
| Abschreibung der Hardware (50 Nodes) | 5–8 Tsd. € | 60–100 Tsd. € |
| Colocation / Strom / Bandbreite | 4–7 Tsd. € | 50–85 Tsd. € |
| Kundensupport-Team (2–4 VZÄ für die Cloud) | 10–20 Tsd. € | 120–240 Tsd. € |
| Marketing / Vertrieb | 5–15 Tsd. € | 60–180 Tsd. € |

**Fixkosten gesamt pro Monat: 44–85 Tsd. € plus 15 Tsd. $ für den Ænix-Support.**

Bei 25–50 €/Monat Marge pro Tenant (40–80 € ARPU nach 15–30 € direkten
Infrastrukturkosten) liegt der Break-even je nach ARPU-Mix und Gehaltsniveau
bei **etwa 1.200–4.000 zahlenden Tenants**. Das ist der Fall eines
vollständigen Programms mit eigenem Team; ein Start mit 10 Nodes in der
Basic-Stufe und vorhandenem Personal erreicht den Break-even deutlich
früher — rechnen Sie Ihre eigenen Zahlen im [ISP-Rechner](/isp-calculator/) durch.

Für Provider, die heute ~500 Kunden auf Legacy-Infrastruktur betreiben
und den Wechsel prüfen, ist das entscheidend: Sie brauchen einen
glaubwürdigen Weg, die Zahl der Tenants innerhalb von 18–24 Monaten
mindestens zu verdoppeln, damit die Rechnung tatsächlich aufgeht. Ohne Wachstum ist
die Public Cloud Platform eine (moderate) Kostensenkung, aber keine
Transformation.

Für Provider mit weniger als ~300 Kunden ist ein vollständiges Programm
mit eigenem Plattformteam von 3–5 Personen oft *verfrüht* — diese
Fixkosten erdrücken den Deckungsbeitrag. Ein kleinerer Start (10 Nodes in
der Basic-Stufe, ein schmaler Katalog, vorhandenes Personal) ist meist der
bessere erste Schritt. Das sagen wir im Discovery Call offen, statt ein
größeres Projekt voranzutreiben.

## Wo das Modell versagt

Drei Fehlermuster wiederholen sich:

### 1. Zu geringe Investitionen in das Kundenportal

Hosting-Anbieter konkurrieren traditionell über Preis und
Zuverlässigkeit. Das Cozystack Dashboard ist ab Werk funktional, aber
generisch; Differenzierung entsteht durch Feinschliff (UX-Abläufe, die
dazu passen, wie *Ihre* Kunden bestellen, konfigurieren und bezahlen).
Provider, die das Portal als „gut genug“ behandeln, verlieren Conversion
an Provider, die darin investieren.

Das Ænix-Projekt umfasst die Anpassung des Cozystack Dashboards an Ihre
Marke; tiefere UX-Arbeit ist in der Regel eine separate Phase 2.

### 2. Servicekatalog passt nicht zum Kundenstamm

Cozystack bietet 20+ Managed Services; nicht alle passen zum
Kundenstamm jedes Providers. Wer alle anbietet, ohne sie betrieblich
abzusichern, erlebt Kunden, die Kafka oder ClickHouse bestellen und
feststellen, dass der Provider sie nicht wirklich unterstützen kann.
Kuratieren Sie den Katalog auf das, was Sie mit dem versprochenen SLA
tatsächlich betreiben können. Die Einführung der Dienste in Kohorten ist
das Standardvorgehen.

### 3. Ein Betriebsteam, das für das Wachstum unterbesetzt ist

Das größte einzelne Fehlermuster in unserer Pipeline: Die Public Cloud
Platform ist ausgerollt, startet erfolgreich, gewinnt im ersten Quartal
200 Kunden — und dann skaliert das Betriebsteam mit 4 Personen, das bei
50 Kunden funktioniert hat, nicht mehr. Die Reaktionszeiten im
Kundensupport verschlechtern sich, SLA-Verletzungen häufen sich, die
Abwanderung steigt.

Planen Sie die Größe des Betriebsteams für die Kundenzahl in 18 Monaten,
nicht für die heutige. Stellen Sie vorausschauend ein.

## Die Public Cloud Platform im Vergleich zu den Alternativen für Hosting-Anbieter

**Im Vergleich zu VMware Cloud Director (vCD):**

vCD ist der historisch etablierte Platzhirsch bei Hosting-Anbietern.
Nach Broadcom hat die Abo-Preisgestaltung die Rechnung verändert —
Steigerungen um das 2- bis 5-Fache bei der Verlängerung, verpflichtende
VCF-Bündelung, Ende der Dauerlizenzen. Für die meisten Provider, die
heute vCD betreiben, ist der Verlängerungszyklus der Auslöser. Die Ænix
Public Cloud Platform ist wenige Wochen nach Bereitstellung der Hardware
live; der Umzug eines bestehenden vCD-Bestands ist ein eigenes
Migrationsprojekt, dessen Umfang das Assessment je nach Bestand festlegt.

**Im Vergleich zu OpenStack:**

OpenStack bleibt eine valide Option für Provider mit tiefer
OpenStack-Expertise und großen Deployments (>500 Nodes), bei denen sich
die betriebliche Komplexität amortisiert. Für mittelgroße Provider
übersteigt der betriebliche Footprint von OpenStack (50+ Dienste, eigene
Upgrade-Lebenszyklen pro Komponente), was das Team stemmen kann. Die
Public Cloud Platform hat eine deutlich kleinere Betriebsfläche.

**Im Vergleich zum Eigenbau auf Vanilla Kubernetes + KubeVirt + Helm:**

Das ist die glaubwürdige Alternative für Provider mit starker
Platform-Engineering-Kapazität. Der Preis: 12–24 Monate Bauzeit plus
laufende Wartung gegenüber einem schlüsselfertigen Deployment. Wir haben
beides funktionieren sehen; der Eigenbau ist die richtige Wahl, wenn Sie
ein Plattformteam mit 10+ Engineers haben und die Komponenten Ihren
konkreten betrieblichen Vorlieben entsprechen. Für den typischen
mittelgroßen Provider mit einem Plattformteam von 3–5 Engineers gewinnt
die Public Cloud Platform bei Time-to-Market und betrieblicher
Planbarkeit.

**Im Vergleich zu einem hyperscaler-verwalteten Cloud-Produkt (White Label):**

Hyperscaler (AWS, Azure, GCP) bieten Hosting-Partnern mitunter
White-Label- oder Co-Branding-Modelle für Cloud-Angebote an. Der Preis:
geringere betriebliche Komplexität für den Provider, aber in der Regel
eine niedrigere Marge pro Kunde und eine schwächere
Souveränitätspositionierung (der Provider bleibt vom Hyperscaler
abhängig, was europäische Kunden zunehmend als strukturelles Risiko
sehen).

## Wann die Public Cloud Platform die richtige Antwort ist

Sie passt, wenn mindestens drei der folgenden Punkte zutreffen:

1. **Sie betreiben heute Bare Metal oder einen kommerziellen Hypervisor
   mit wiederkehrendem Lizenzdruck** — VMware, OpenStack, Virtuozzo oder
   eine kommerzielle KVM-Distribution.
2. **Sie haben direkte Kundenbeziehungen, die Sie monetarisieren
   können** — Sie sind nicht nur Wiederverkäufer der Cloud eines anderen.
3. **Sie haben ein Plattformteam von 3–5 Engineers oder können es
   aufbauen** — Cozystack braucht klare betriebliche Verantwortung.
4. **Sie zielen auf regionale, regulierte oder souveränitätssensible
   Kunden** — bei denen eine europäische, EU-basierte Positionierung
   zählt.
5. **Sie haben heute 300+ Kunden oder einen glaubwürdigen Wachstumspfad
   zu 1.000+** — damit sich die Fixkosten amortisieren.
6. **Sie sind bereit, in den Feinschliff des Kundenportals zu
   investieren** — statt das Cozystack Dashboard als „gut genug“ zu
   behandeln.

Weniger als drei: Meist ist eine andere Antwort besser — auf der
bestehenden Infrastruktur bleiben und die Kosten optimieren, als Kanal
mit einem größeren souveränen Provider zusammenarbeiten oder als Weg
mit geringerer Marge ein hyperscaler-verwaltetes Cloud-Produkt wählen.

## Ablauf der Zusammenarbeit

Für Provider, zu denen die Public Cloud Platform passt:

- **Discovery Call** (30 Min., kostenlos)
- **[Platform Readiness Assessment](/de/dienstleistungen/platform-readiness-assessment/)**
  (Festpreis, 14 Tage fokussiert oder 28 Tage vollständig) — Inventar des
  aktuellen Bestands, Zielarchitektur, Migrationsplan
- **Plattform live und Pilotkohorte** — die Plattform ist mit dem
  produktisierten Installer in wenigen Wochen auf Ihrer Hardware live;
  Migration von 5–10 wohlgesonnenen Kunden, Validierung der Abrechnung
- **Limited GA** (2–4 Monate) — 50–100 Kunden, stabilisierte
  Betriebsabläufe
- **General Availability** — Start am offenen Markt
- **Support-Subskription** (fortlaufend) — eine der [veröffentlichten
  Stufen](/de/preise/); Plus oder Enterprise für Abdeckung rund um die Uhr

Wie lange der kommerzielle Start nach dem Go-live der Plattform dauert,
hängt vom Migrationsumfang und der Bereitschaft des Teams ab. Programme
im nationalen oder Betreibermaßstab mit mehreren Regionen rechnen mit
3–6 Monaten Pilot und danach 9–18 Monaten bis zum vollen
Multi-Region-Betrieb.

## Weiterführende Inhalte

- **[Landingpage Public Cloud Platform](/de/produkte/public-cloud-platform/)** —
  Funktionsübersicht, Preisblock, FAQ
- **[Branchenseite Hosting-Anbieter](/de/branchen/hosting-anbieter/)** —
  Positionierung speziell für Hosting-Anbieter
- **[White-Label-Cloud-Leistungen](/de/dienstleistungen/white-label-cloud/)** —
  für Erweiterungen des Modells durch MSPs und Channel-Partner
