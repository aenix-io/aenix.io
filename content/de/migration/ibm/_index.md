---
title: "IBM AIX / Power Migration — von Power in eine offene Cloud"
seo_title: "IBM-AIX/Power-Migration auf Cozystack mit x86"
description: "Von IBM AIX/Power und Cloud Pak/OpenShift auf eine offene, Kubernetes-native Plattform auf Standard-x86 migrieren. Ehrliche TCO, Oracle-sichere Architektur."
date: 2026-06-07
lastmod: 2026-06-07
primary_keyword: "IBM AIX Migration"
secondary_keywords:
  - "von AIX zu Linux migrieren"
  - "IBM Power zu x86 Migration"
  - "IBM Power Systems"
  - "AIX End of Life"
  - "IBM PowerVM Alternative"
  - "IBM Cloud Pak Alternative"
  - "Oracle Kubernetes Lizenzierung"
  - "Private Cloud für Banken"
images: ["img/og/og-ibm-migration-de.jpg"]
language: "de"
quick_facts_style: "rows"
faq_style: "rows"
hreflang_en: /migration/ibm/
related_pages:
  - /de/alternativen/openshift-alternative/
  - /de/vergleichen/cozystack-vs-openshift/
  - /de/vergleichen/cozystack-vs-openstack/
  - /de/produkte/private-cloud-platform/
  - /de/branchen/finanzdienstleistungen/
  - /de/loesungen/data-sovereignty/
  - /de/dienstleistungen/platform-readiness-assessment/
  - /de/produkte/cozystack/
  - /de/preise/
service:
  type: "Platform Migration"
  areaServed: ["EU", "DACH", "MENA", "Zentralasien"]
  audience: "Finanzdienstleister"
direct_answer: |
  **Ein Ausstieg aus IBM AIX/Power verlagert Workloads von teurer POWER-Hardware, AIX/PowerVM-Lizenzen und IBM-SWMA/HWMA-Verträgen auf Standard-x86 mit einer offenen, Kubernetes-nativen Plattform. Cozystack — Apache 2.0, ein CNCF-Sandbox-Projekt — betreibt VMs und Container über eine gemeinsame API (KubeVirt + Cilium + LINSTOR), sodass ein vorhandenes Kubernetes-Team die Plattform ohne knappe AIX/Power-Spezialisten betreiben kann. Ænix begleitet den Ausstieg von Anfang bis Ende: Bestandsaufnahme, Zielarchitektur, Oracle-sichere Auslegung, Cutover in Kohorten, Stilllegung. Der entscheidende Hebel für Entscheider außerhalb der IT sind die Kosten: Ein Modell für eine mittelgroße Bank zeigt rund 40 % weniger TCO über drei Jahre — durch x86 statt POWER, keine Lizenzkosten für die Plattform und einen kleineren, teuren Oracle-Footprint auf Power.**
quick_facts:
  - label: "Was es ist"
    value: "Migration von IBM AIX/Power (und Cloud Pak/OpenShift) auf Standard-x86 mit Cozystack, von Anfang bis Ende begleitet"
  - label: "Lizenz der Zielplattform"
    value: "Apache 2.0 — keine Lizenzkosten für die Plattform pro Socket, Core oder vCPU"
  - label: "Virtualisierung"
    value: "KubeVirt ersetzt PowerVM; VMs und Container auf einem Kubernetes-Scheduler"
  - label: "Typische TCO-Reduktion"
    value: "~40 % über drei Jahre (illustratives Modell einer mittelgroßen Bank; wird auf realen Bestandsdaten neu berechnet)"
  - label: "Oracle"
    value: "Bleibt auf dediziertem Bare Metal und wird als externe Anwendung angebunden — lizenzrechtlich sauber (Oracle wertet KubeVirt als Soft Partitioning)"
  - label: "Vorgehen"
    value: "Platform Readiness Assessment (14 oder 28 Tage, Festpreis) → Pilot → Migration in Kohorten; Migrationsleistungen werden nach dem Assessment angeboten"
  - label: "Kommerzielles Modell"
    value: "Die Ænix Private Cloud Platform wird per RFP angeboten; Support-Stufen für selbst betriebenes Cozystack beginnen bei 1.250 USD pro 10 Nodes und Monat"
quick_facts_source: "[Cozystack-Dokumentation](https://cozystack.io), [Oracle Partitioning Policy](https://www.oracle.com/assets/partitioning-070609.pdf)"
faq:
  - q: "Können wir AIX-Binaries per Lift-and-Shift auf x86 übernehmen?"
    a: "Nein. AIX läuft auf Big-Endian-POWER, x86 ist Little-Endian. AIX-Binaries laufen auf x86 nicht unverändert — Anwendungen müssen neu gebaut oder auf eine neue Plattform portiert werden. Moderne Microservices und die meisten Datenbank- und Middleware-Workloads ziehen sauber um; ältere Monolithen brauchen einen Schritt der Neuarchitektur. Eine ehrliche Migration trennt diese beiden Klassen von Anfang an, statt ein binäres Lift-and-Shift zu versprechen."
  - q: "Müssen wir auf die Live-Migration von PowerVM verzichten?"
    a: "Nein. KubeVirt bietet Live-Migration laufender VMs zwischen x86-Nodes. In Stretched-Cluster-Designs über mehrere Rechenzentren wird die Replikation nur für die gerade migrierende VM auf synchron umgeschaltet, sodass die Latenz im gesamten Cluster nicht steigt. Stretched-Designs liefern wir als Engineering-Leistung beim Aufbau; ein automatisches standortübergreifendes VM-Failover gibt es nicht."
  - q: "Wir sind auf Oracle Database angewiesen. Bricht Kubernetes die Oracle-Lizenzierung?"
    a: "Das würde passieren, wenn Sie Oracle im Cluster betreiben. Oracle wertet Kubernetes und KubeVirt als Soft Partitioning und akzeptiert sie nicht als Mittel, den lizenzpflichtigen Umfang zu begrenzen — Oracle in einer Cluster-VM kann die Lizenzierung aller physischen Cores erfordern, auf denen es landen könnte. Das empfohlene Muster hält produktives Oracle auf dediziertem, separat lizenziertem Bare Metal und bindet es über ein privates Netz als externe Anwendung an die Plattform an. Lizenzrechtlich sauber — und so betreiben die meisten Banken Oracle ohnehin."
  - q: "Ist IBM Cloud Pak / OpenShift dieselbe Art von Produkt?"
    a: "Nicht ganz. Cloud Pak ist ein proprietäres Daten- und KI-Softwarepaket auf Red Hat OpenShift, lizenziert pro Cluster nach einer vCPU-pro-Pod-Metrik mit eingeschränktem OpenShift-Nutzungsrecht — eine andere Produktklasse als eine VM-Cloud. Einen OpenShift-spezifischen Vergleich finden Sie unter [OpenShift-Alternative](/de/alternativen/openshift-alternative/) und [Cozystack vs. OpenShift](/de/vergleichen/cozystack-vs-openshift/)."
  - q: "Kann unser bestehendes Team die Plattform betreiben, obwohl uns AIX-Spezialisten fehlen?"
    a: "Genau darum geht es bei dieser Zielplattform. Sie wird mit Kubernetes- und DevOps-Kompetenzen betrieben — einem Talentpool, aus dem Sie tatsächlich einstellen können — statt mit knappen AIX/PowerVM-Spezialisten. Ænix bietet Schulungen an (Kubernetes Deep Dive); eine begleitete Migration und ein 24×7-Betrieb als Managed Service sind als separat angebotene Leistungen verfügbar."
  - q: "Was kostet die Migration, und wie läuft die Zusammenarbeit?"
    a: "Am Anfang steht ein Platform Readiness Assessment zum Festpreis (14 oder 28 Tage). Programme mit der Ænix Private Cloud Platform werden für Banken nach dem Assessment per RFP angeboten; Migrationsleistungen, ein Pilot und der Betrieb als Managed Service werden separat geplant und angeboten. Support-Stufen für selbst betriebenes Cozystack beginnen bei 1.250 USD pro 10 Nodes und Monat. Siehe die [Preisseite](/de/preise/)."
  - q: "Läuft das air-gapped für einen regulierten Bankbetrieb?"
    a: "Ja. Air-Gap-Installation, White-Labeling, Backup und GPU-Sharing sind Open-Source-Funktionen von Cozystack; die Support-Stufen von Ænix legen fest, wie viel Unterstützung Sie dabei erhalten, und die Billing-/Chargeback-Komponenten sind Module von Ænix. Die Plattform ist On-Prem-first und für souveräne, kundenkontrollierte Infrastruktur ausgelegt — siehe [Datensouveränität](/de/loesungen/data-sovereignty/) und [Finanzdienstleistungen](/de/branchen/finanzdienstleistungen/)."
---

<!-- BLOCK 1: HERO -->

**IBM-POWER-Hardware ist kapitalintensiv, AIX/PowerVM wird pro Socket lizenziert, und die SWMA/HWMA-Verlängerungen summieren sich Jahr für Jahr — während AIX-Spezialisten immer schwerer zu finden sind. Ein IBM-Ausstieg verlagert diese Workloads auf Standard-x86 mit einer offenen, Kubernetes-nativen Plattform, die Ihr bestehendes Team betreiben kann.**

Ænix begleitet IBM-AIX/Power-Migrationen von Anfang bis Ende. Die Engineers, die [Cozystack](/de/produkte/cozystack/) — die Open-Source-Zielplattform — initiiert haben und gemeinsam mit Maintainern anderer Unternehmen pflegen, arbeiten bei Assessment, Reihenfolge und Umsetzung Seite an Seite mit Ihrem Team.

> **Passt zu:** **[Ænix Private Cloud Platform](/de/produkte/private-cloud-platform/)** für regulierte Banken (Air-Gap-Installation, Chargeback, Migration als angebotene Leistung) oder zur **[OpenShift-Alternative](/de/alternativen/openshift-alternative/)**, wenn Sie gezielt IBM Cloud Pak / OpenShift ablösen.

<div class="cta-row">
  <a class="cta-primary" href="/de/kontakt/">Gespräch vereinbaren</a>
  <a class="cta-secondary" href="/de/preise/">Preise ansehen →</a>
</div>

<!-- /BLOCK 1 -->

---

<!-- BLOCK 2: WER -->

## Wer 2026 aus IBM aussteigt

Typische Auslöser:

- **IBM Power Systems (AIX) am Ende des Lebenszyklus** — ein Refresh bedeutet erneut einen kapitalintensiven POWER-Kauf, oder eben den Ausstieg.
- **Steigende IBM-Kosten** — teure POWER-Investitionen, AIX- und PowerVM-Lizenzen pro Socket und SWMA/HWMA-Verlängerungen, Jahr für Jahr.
- **Oracle-Aufschlag auf Power** — Oracle setzt auf POWER einen Core-Faktor von 1,0 an (das Maximum). Jeder Nicht-Oracle-Workload, der noch auf POWER läuft, treibt die Zahl der lizenzpflichtigen Cores nach oben.
- **Knappe Spezialisten** — AIX/PowerVM-Know-how ist ein schrumpfender, teurer Talentpool; Kubernetes/DevOps nicht.
- **Souveränitäts- und Sanktionsrisiken** — für staatliche und regulierte Institute hat ein proprietärer Stack eines einzigen Herstellers ein anderes Risikoprofil als eine offene, unter dem Dach der CNCF entwickelte Plattform.
- **Modernisierung** — ein Altbestand, bei dem der Upgrade-Pfad zugleich der Ausstiegspfad ist, oft verbunden mit dem Umstieg auf Microservices.

Treffen zwei oder mehr Punkte zu, verstärkt ein strukturierter Ausstieg den Nutzen. Ist ein POWER-Refresh bereits bequem budgetiert und drückt sonst nichts, lautet die ehrliche Antwort „bleiben und optimieren“.

<!-- /BLOCK 2 -->

---

<!-- BLOCK 3: UMFANG -->

## Was eine IBM-Migration mit Ænix umfasst

<div class="grid-2x2">

**1. Bestandsaufnahme und Assessment**
AIX/Power-Bestand: LPARs, Sockets und Cores, Firmware, PowerVM-Abhängigkeiten, Oracle-Footprint, Nutzung von Cloud Pak/OpenShift. Klassifizierung der Workloads: jetzt neu bauen / später portieren / auf Bare Metal belassen (Oracle) / abschalten.

**2. Zielarchitektur**
Zielplattform auf Standard-x86. Cozystack als Standard — KubeVirt für VMs, Cilium (eBPF) für das Netzwerk, LINSTOR/DRBD auf ZFS für Storage, Tenant-CRD für Mandantenfähigkeit. Kapazitätsmodell, Hochverfügbarkeit und standortübergreifendes Design.

**3. Durchführung der Migration**
In Kohorten. Microservices und Container-Workloads zuerst; VMs über KubeVirt; Datenbanken werden portiert oder extern angebunden. Parallelbetrieb neben dem IBM-Bestand bis zur Validierung. Live-Migration und Geo-Stretch übernimmt die Plattform.

**4. Stilllegung**
POWER-Systeme werden außer Betrieb genommen, sobald die Kohorten abgeschlossen sind; AIX/PowerVM- und IBM-Supportverträge laufen aus. Der Oracle-Footprint schrumpft auf dedizierte Hosts.

</div>

**Ehrlicher Hinweis zum Umfang — Endianness.** AIX ist auf POWER Big-Endian, x86 Little-Endian: Ein binäres Lift-and-Shift gibt es nicht. Moderne Microservices und Standard-Datenbanken und -Middleware ziehen sauber um; ältere Monolithen brauchen eine Neuarchitektur. Wir trennen beide Klassen im Assessment, nicht erst mitten im Cutover.

<div class="arch-section__fig">
<div class="diagram">
<div class="diagram__node"><b>IBM AIX / PowerVM auf POWER</b><div class="diagram__chips"><span>LPARs</span><span>Lizenzierung pro Socket</span><span>SWMA/HWMA</span></div></div>
<div class="diagram__conn">durchläuft</div>
<div class="diagram__node"><b>Cutover in Kohorten</b><div class="diagram__chips"><span>Microservices zuerst</span><span>VMs über KubeVirt</span><span>Validierung im Parallelbetrieb</span></div></div>
<div class="diagram__conn">landet auf</div>
<div class="diagram__node diagram__node--brand"><b>Cozystack auf Standard-x86</b><div class="diagram__chips"><span>KubeVirt</span><span>Cilium</span><span>LINSTOR</span></div></div>
<div class="diagram__conn">endet mit</div>
<div class="diagram__node"><b>POWER-Systeme außer Betrieb</b><div class="diagram__chips"><span>~40 % weniger TCO über drei Jahre</span><span>Oracle auf dediziertem Bare Metal</span></div></div>
</div>
</div>

<!-- /BLOCK 3 -->

---

<!-- BLOCK 4: KOSTEN -->

## Die Wirtschaftlichkeit: Cozystack vs. IBM

Das folgende Modell ist ein illustratives Szenario auf Basis von Listenpreisen für eine mittelgroße Bank (~500 Mitarbeitende), die über drei Jahre den Teil ihrer Workloads verlagert, der POWER verlassen kann (Microservices, VMs, Nicht-Oracle-Datenbanken). Die Zahlen zeigen Größenordnungen und werden im Assessment auf realen Bestandsdaten neu berechnet.

| Position (3 Jahre) | IBM / AIX / Power | Cozystack (x86) |
|---|---|---|
| Hardware (Investition) | 200.000 USD — Refresh von 2 POWER-Servern | 90.000 USD — 6 Standard-x86-Nodes |
| Betriebssystem-/Plattform-Lizenzen | 40.000 USD — AIX + PowerVM | 0 USD — Apache 2.0 |
| Support (3 Jahre) | 180.000 USD — IBM SWMA/HWMA | 198.000 USD — Listenpreis der Support-Stufe Plus für 10 Nodes (24×7, begleitete Migration, 3 Std. Schulung pro Monat) |
| Oracle (Lizenz + Support) | 300.000 USD — auf geteiltem POWER (Core-Faktor 1,0) | 120.000 USD — auf einen minimalen dedizierten Footprint begrenzt |
| Migrationsleistungen | — | Angebot nach dem Assessment (oben nicht enthalten) |
| **Gesamt (3 Jahre)** | **720.000 USD** | **408.000 USD + Migrationsleistungen** |

{{< factoid number="~40 %" label="illustrative TCO-Reduktion über drei Jahre — durch Standard-x86 statt POWER, keine Lizenzkosten für die Plattform und einen kleineren Oracle-Footprint auf Power" source="TCO-Modell von Ænix, Szenario mittelgroße Bank, Größenordnung auf Basis von Listenpreisen" >}}

Die Support-Zeile nutzt die veröffentlichte Stufe Plus zur Veranschaulichung; ein Programm mit der Ænix Private Cloud Platform wird für eine Bank per RFP angeboten, und Migrationsleistungen werden nach dem Assessment separat angeboten. Rechnen Sie Ihre eigenen Zahlen mit dem **[TCO-Rechner](/tco-calculator/)** (Englisch) durch oder in einem **[Discovery-Gespräch](/de/kontakt/)**.

<!-- /BLOCK 4 -->

---

<!-- BLOCK 5: ORACLE -->

<div class="band-fullbleed band-fullbleed--tint">
<div class="band-fullbleed__inner">

## Oracle: die Lizenzfalle, die Sie vermeiden sollten

Der teuerste Einzelfehler beim Umzug von Power auf Kubernetes ist, produktives Oracle im Cluster zu betreiben.

- **Oracle wertet Kubernetes und KubeVirt als Soft Partitioning.** CPU-Limits und Pinning verkleinern den lizenzpflichtigen Umfang nicht — „the processors of all nodes in the cluster are subject to Oracle licensing“.
- **Lizenziert wird der Node, nicht der Pod.** Ein ganzer Worker-Node zählt, auch wenn Oracle nur einen Bruchteil seiner Cores nutzt; eine KubeVirt-VM gilt nicht als von Oracle anerkanntes Hard Partitioning.
- **Der saubere Weg:** produktives Oracle auf dediziertem, separat lizenziertem Bare Metal belassen und es über ein privates Netz als **externe Anwendung** an die Plattform anbinden (Helm-Chart bzw. Operator, der Verbindungsendpunkte und Zugangsdaten über eine External-Secret-Referenz kapselt). Tenant-Workloads erreichen die Datenbank wie jeden anderen Managed Endpoint; sie wird nie in den Cluster gezogen.

So schrumpft der lizenzpflichtige Footprint, während Nicht-Oracle-Workloads POWER verlassen. (Die Partitioning Policy von Oracle ist „educational, not contractual“ — stimmen Sie das endgültige Modell mit Oracle und Ihrer Rechtsabteilung ab.)

</div>
</div>

<!-- /BLOCK 5 -->

---

<!-- BLOCK 6: PLATTFORM-PROFIL -->

## Cozystack vs. OpenStack vs. IBM Cloud Pak

| Kriterium | Cozystack | OpenStack | IBM Cloud Pak / OpenShift |
|---|---|---|---|
| Was es ist | Offenes PaaS-Framework auf Kubernetes für den Aufbau einer Cloud | IaaS — modulare Infrastrukturdienste | Proprietäres Daten- und KI-Softwarepaket auf Red Hat OpenShift |
| VMs + Container | Eine API (KubeVirt + Container, ein Scheduler) | Getrennt: VMs über Nova, Container über Zun/Magnum | Container-zentriert; keine native, einheitliche Bereitstellung von VMs und Containern |
| Lizenz und Kosten | Apache 2.0; Software kostenlos. Support-Stufen von Ænix ab 1.250 USD pro Monat und 10 Nodes | Apache 2.0; bezahlt werden Distribution/Support | Proprietäre Subscription pro Cluster, vCPU-pro-Pod-Metrik; eingeschränktes OpenShift-Nutzungsrecht |
| Herstellerbindung | Gering — API-first, unter dem Dach der CNCF entwickelt | Mittel — auf Ebene der Distribution | Hoch — proprietärer Stack + eingeschränkt mitgeliefertes OpenShift |
| Mandantenfähigkeit | Nativ (Tenant-Modell, eBPF-Isolation, Billing-Anbindung) | Nativ (Keystone, Projekte, Quotas) | Unterstützt (OpenShift-Namespaces + Zen) |
| On-Prem / Air-Gap | Ja | Ja | Ja (Spiegelung des Operator-Katalogs) |

Cozystack ist ein CNCF-Sandbox-Projekt (der Antrag auf CNCF Incubation befindet sich in der Due-Diligence-Prüfung), steht unter Apache 2.0 und wird offen gesteuert statt von einem einzelnen Hersteller. Das beseitigt den größten Teil des Risikos „der Hersteller ändert die Lizenz“, das bei proprietären und nur scheinbar offenen Produkten besteht: ein anderes Risikoprofil für eine staatliche Bank mit einem Mandat zur digitalen Souveränität.

<!-- /BLOCK 6 -->

---

<!-- BLOCK 7: SKALIERUNG & STORAGE -->

## Storage und Skalierung auf x86

Die Zielarchitektur ist auf lineares horizontales Wachstum ausgelegt — jeder x86-Node bringt Rechenleistung und einen Anteil am verteilten Storage mit, ohne Neuarchitektur:

- **Storage im Kernel.** LINSTOR orchestriert pro Volume eigene DRBD-Devices auf ZFS; DRBD repliziert im Linux-Kernel statt in einem Userspace-Daemon, sodass der Schreibpfad nicht bei jedem I/O in den User Space wechselt. Kehrt ein Node zurück, synchronisiert DRBD per Bitmap nur die geänderten Blöcke statt der ganzen Disk — entscheidend bei großen Volumes.
- **Kein Engpass bei wachsender Größe.** Jede PVC ist ein eigenständiges, über den Cluster verteiltes DRBD-Device — 100 Volumes sind 100 unabhängige Devices, nicht ein großes geteiltes.
- **Netzwerk.** Cilium eBPF ersetzt kube-proxy durch einen Service-Lookup im Kernel mit O(1); die Latenz verschlechtert sich nicht, wenn die Zahl der Services wächst.
- **Geo-Stretch.** Stretched-Cluster-Designs können bis zu drei Rechenzentren umfassen; die Replikation wird nur für eine migrierende VM synchron, begrenzt durch ein festes RTT-Budget (~15 ms). Diese Designs liefern wir als Engineering-Leistung; ein automatisches standortübergreifendes VM-Failover gibt es nicht.

<!-- /BLOCK 7 -->

---

<!-- BLOCK 8: VORGEHEN -->

## Wie Ænix vorgeht

- **Assessment (14 oder 28 Tage)** — [Platform Readiness Assessment](/de/dienstleistungen/platform-readiness-assessment/): AIX/Power-Bestand, Zielarchitektur, Klassifizierung der Workloads, Oracle-Plan, Cutover-Reihenfolge, Risikoregister.
- **Pilot** — Cozystack wird als funktionierendes Framework anhand Ihrer realen Anforderungen aufgebaut; die Erfolgskriterien werden vorab vereinbart. Umfang und Preis werden im Assessment festgelegt.
- **Migration** — Umsetzung in Kohorten mit Validierung im Parallelbetrieb, angeboten nach dem Assessment; Recht und Einkauf können mit Ihren Vorlagen arbeiten (Ausschreibungen, Formulare).
- **Betrieb (optional)** — Cozystack-Betrieb als Managed Service, 24×7, nach dem Cutover, separat angeboten.

Eine Idee, die in der Praxis immer wieder aufkommt: die Plattform auf den POWER-Servern aufsetzen, die am Ende ihres Lebenszyklus frei werden (POWER unterstützt Linux) — als Live-Demonstration, bevor der übrige Bestand folgt.

<!-- /BLOCK 8 -->

---

<!-- BLOCK 9: WARUM AENIX -->

## Warum gerade Ænix

- **Wir haben die Zielplattform initiiert.** Aufwandsschätzungen beruhen auf tatsächlich geleisteter Arbeit, nicht auf Theorie.
- **Ehrlich bei den schwierigen Punkten.** Endianness, Oracle-Lizenzierung und die Neuarchitektur von Altanwendungen kommen im Assessment auf den Tisch, nicht mitten im Cutover.
- **Von Ihrem Team betreibbar.** Kubernetes-Kompetenzen, die Sie einstellen können, statt knapper AIX/PowerVM-Spezialisten.
- **Offenes Ziel.** Apache 2.0 und unter dem Dach der CNCF entwickelt — Sie betreiben die Plattform, auf die Sie migrieren, ohne Lizenzkosten für die Plattform.
- **Teams in der EU und in Zentralasien.** Engineering-Teams in der EU und in Zentralasien; EU-Verträge über die AENIX s.r.o. (Tschechien).

<!-- /BLOCK 9 -->

---

<!-- BLOCK 10: ZEITPLAN -->

## Typischer Migrationszeitplan

| Wann | Was |
|---|---|
| Tag 0 | Discovery-Gespräch (kostenlos) — Eignung klären |
| Tag 1–14 (bzw. 1–28) | Platform Readiness Assessment zum Festpreis |
| Tag 14 (bzw. 28) | Ergebnispräsentation für die Geschäftsleitung — schriftlicher Plan + TCO auf realen Daten |
| Nach der Ergebnispräsentation | Pilot mit realen Workloads |
| Aufbauphase | Workload-Kohorten ziehen um; POWER-Systeme werden außer Betrieb genommen, sobald Kohorten abgeschlossen sind |
| Ende des Programms | Stilllegung von IBM/AIX; Oracle auf dedizierte Hosts reduziert |

Bestandsgröße und das Verhältnis von Altanwendungen zu Microservices bestimmen den tatsächlichen Zeitplan; der Aufbau einer Private Cloud dauert je nach Umfang typischerweise 3–12 Monate, und die Reihenfolge wird im Assessment festgelegt.

<!-- /BLOCK 10 -->

---

<!-- BLOCK 11: PROOF -->

## Unternehmen, die Plattformen mit Ænix betreiben

{{< clients >}}

Hosting-Anbieter, die die Ænix Public Cloud Platform produktiv betreiben. Für den regulierten Finanzsektor siehe die anonymisierten Fallstudien einer [Bank](/de/case-studies/private-cloud-in-a-bank/) und einer [Finanzgruppe](/de/case-studies/unified-cloud-portal-financial-group/).

{{< quote-carousel >}}

<!-- /BLOCK 11 -->

---

<!-- BLOCK 12: FAQ — wird vom Template aus dem `faq:`-Frontmatter eingefügt -->

---

<!-- BLOCK 13: CTA -->

<a id="discovery"></a>

<div class="cta-row">
  <a class="cta-primary" href="/de/kontakt/">Gespräch vereinbaren</a>
  <a class="cta-secondary" href="/de/dienstleistungen/platform-readiness-assessment/">Assessment anfragen →</a>
</div>

- **[OpenShift-Alternative](/de/alternativen/openshift-alternative/)** — Cloud Pak / OpenShift ablösen
- **[Cozystack vs. OpenShift](/de/vergleichen/cozystack-vs-openshift/)** — direkter Vergleich
- **[Private Cloud Platform](/de/produkte/private-cloud-platform/)** — schlüsselfertig für regulierte Banken
- **[Finanzdienstleistungen](/de/branchen/finanzdienstleistungen/)** — Branchenkontext
- **[Datensouveränität](/de/loesungen/data-sovereignty/)** — offene, kundenkontrollierte Infrastruktur
- **[Cozystack](/de/produkte/cozystack/)** — die Open-Source-Zielplattform
- **[OpenStack-Alternative](/de/alternativen/openstack-alternative/)** und **[Cozystack vs. OpenStack](/de/vergleichen/cozystack-vs-openstack/)** — falls OpenStack auf Ihrer Shortlist steht

<!-- /BLOCK 13 -->

---

*Ænix hat Cozystack (ein CNCF-Sandbox-Projekt) initiiert und pflegt es gemeinsam mit Maintainern anderer Unternehmen. Darauf aufbauend bietet Ænix drei Plattformen an — Public Cloud, Private Cloud und AI.*
