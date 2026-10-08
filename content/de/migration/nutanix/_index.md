---
title: "Nutanix-Migration: Raus aus dem HCI-Lock-in, hin zu einer K8s-Plattform"
seo_title: "Nutanix-Migration auf eine Kubernetes-Plattform"
description: "Nutanix-Migration auf eine Kubernetes-native Plattform: weg von HCI-Lock-in und Lizenzen pro Node, hin zu KubeVirt-VMs, Containern und eigenem LINSTOR-Storage."
date: 2026-07-01
lastmod: 2026-07-01
page_type: "migration-hub"
language: "de"
quick_facts_style: "rows"
faq_style: "rows"
primary_keyword: "nutanix migration"
secondary_keywords: ["nutanix alternative", "nutanix verlassen", "nutanix ahv migration"]
hreflang_de: "/de/migration/nutanix/"
hreflang_en: "/migration/nutanix/"
related_pages:
  - /de/alternativen/nutanix-alternative/
  - /tco-calculator/vs-nutanix/
  - /de/migration/vmware/
  - /de/produkte/
  - /de/dienstleistungen/platform-readiness-assessment/
  - /de/roi-rechner/
service:
  type: "Nutanix Migration"
  areaServed: ["EU", "DACH"]
  audience: "Unternehmen, Hosting-Anbieter, öffentlicher Sektor"
direct_answer: |
  **Bei einer Nutanix-Migration ziehen virtuelle Maschinen und Workloads von Nutanix HCI — der AOS-Storage-Schicht und dem AHV-Hypervisor — auf eine andere Plattform um, meist weil Lizenz- und Verlängerungskosten oder der hyperkonvergente Lock-in das Bleiben nicht mehr rechtfertigen. Das Kubernetes-native Ziel ist Cozystack (ein CNCF-Sandbox-Projekt, Apache 2.0): Es betreibt VMs auf KubeVirt neben Containern im selben Cluster, mit LINSTOR für replizierten Block-Storage und ohne Hypervisor-Lizenz pro Node. Ænix führt diese Migrationen von Anfang bis Ende durch — Inventur, Zielarchitektur, Cutover in Kohorten und Stilllegung — mit den Engineers, die die Zielplattform initiiert haben und gemeinsam mit Maintainern anderer Unternehmen pflegen. Das passt für Unternehmen, Hosting-Anbieter und den öffentlichen Sektor, die ihren Virtualisierungs-Stack selbst besitzen wollen, statt ihn zu Verlängerungskonditionen zu mieten, die immer weiter steigen.**
quick_facts:
  - label: "Was es ist"
    value: "Umzug von VMs und Workloads von Nutanix AOS/AHV auf eine Kubernetes-native Plattform, die Ihnen gehört."
  - label: "Zielplattform"
    value: "Cozystack — KubeVirt-VMs und Container in einem Cluster, replizierter Storage mit LINSTOR, Netzwerk mit Cilium."
  - label: "Lizenzierung"
    value: "Keine Hypervisor-Lizenz pro Node; Cozystack ist Open Source unter Apache 2.0."
  - label: "Migrationsmethode"
    value: "Cutover in Kohorten mit Parallelbetrieb; Image-Konvertierung mit KubeVirt CDI; Reihenfolge an den Verlängerungsterminen ausgerichtet."
  - label: "Warum Teams wechseln"
    value: "Druck bei Verlängerung und Lizenzen, HCI-Lock-in und der Wunsch, VMs und Container auf einer Plattform zusammenzuführen."
  - label: "Unterschied zur Seite Nutanix-Alternative"
    value: "Dieser Hub beschreibt, wie der Umzug abläuft; die Seite Nutanix-Alternative, warum und wohin."
  - label: "Projektdauer"
    value: "Assessment in 14 oder 28 Tagen; Migration des gesamten Bestands typischerweise 9–18 Monate je nach Umfang."
quick_facts_source: "[Cozystack-Dokumentation](https://cozystack.io), [Vergleich Nutanix-Alternative](/de/alternativen/nutanix-alternative/), [ROI- und TCO-Rechner](/de/roi-rechner/)"
faq:
  - q: "Warum verlassen Organisationen Nutanix?"
    a: "Typische Auslöser sind Druck bei Verlängerung und Lizenzen nach Änderungen an Portfolio und Preisen, der hyperkonvergente Lock-in, der Storage und Compute an den Stack eines einzigen Herstellers bindet, und der strategische Wunsch, VMs und Container auf einer einzigen, eigenen Plattform zu betreiben. Treffen zwei oder mehr dieser Punkte zu, rechnet sich eine strukturierte Migration meist; sind die Verlängerungskonditionen tragbar und drängt sonst nichts, kann Bleiben die ehrliche Antwort sein."
  - q: "Wohin migriert man einen Nutanix-Bestand?"
    a: "Auf eine Kubernetes-native Plattform: Cozystack betreibt VMs auf KubeVirt neben Containern im selben Cluster, nutzt LINSTOR für replizierten Block-Storage anstelle der verteilten AOS-Storage-Fabric und Cilium für das Netzwerk. Es gibt keine Hypervisor-Lizenz pro Node, und die Plattform ist Open Source unter Apache 2.0 — der Bestand, auf den Sie migrieren, bleibt unter Ihrer Kontrolle."
  - q: "Wie wird eine AHV-VM migriert?"
    a: "Nutanix-AHV-VMs werden exportiert und für den Betrieb auf KubeVirt konvertiert, das auf derselben KVM-Technologie aufsetzt; Gastbetriebssysteme und Disks werden daher übernommen. Der Containerized Data Importer (CDI) von KubeVirt konvertiert die Disk-Images in die neue Storage-Schicht, und die Migration läuft Kohorte für Kohorte, mit einem Parallelbetrieb zur Validierung vor jedem Cutover."
  - q: "Was unterscheidet diese Seite von der Seite Nutanix-Alternative?"
    a: "Dieser Migrations-Hub behandelt, wie der Umzug abläuft — Inventur, Reihenfolge, Cutover und Stilllegung. Die Seite Nutanix-Alternative behandelt das Warum und Wohin: den Vergleich von Cozystack und Nutanix HCI auf Plattformebene. Lesen Sie die Alternative-Seite, um das Ziel festzulegen, und diesen Hub, um den Umzug zu planen."
  - q: "Wie lange dauert eine Nutanix-Migration?"
    a: "Am Anfang steht ein Platform Readiness Assessment von 14 oder 28 Tagen, das einen schriftlichen Plan und eine Zielarchitektur liefert. Die Umsetzung läuft dann Kohorte für Kohorte, abgestimmt auf Ihre Nutanix-Verlängerungstermine — typischerweise 9–18 Monate für den gesamten Bestand, je nach Zahl der VMs, Komplexität der Anwendungen und dem Anteil an Workloads, die Sie dabei gleich auf Container umstellen."
  - q: "Können wir die Kosten vor der Entscheidung modellieren?"
    a: "Ja. Mit dem ROI- und TCO-Rechner modellieren Sie die Differenz zwischen dem bisherigen Nutanix-Verlängerungspfad und einer eigenen Cozystack-Plattform — einschließlich Hardware, Kapazität des Plattform-Teams und Lernkurve im Betrieb —, bevor Sie sich auf Hardware oder einen Migrationszeitplan festlegen."
---

**Der Abschied von Nutanix ist ein geplantes Projekt, kein Notfall — und gut umgesetzt steht am Ende eine Virtualisierungsplattform, die Ihnen gehört, statt einer, die Sie zu immer weiter steigenden Verlängerungskonditionen mieten. Ænix migriert Nutanix-AOS/AHV-Bestände auf eine Kubernetes-native Plattform, auf der VMs und Container einen Cluster teilen, Storage mit LINSTOR repliziert wird und keine Hypervisor-Lizenz pro Node anfällt. Das Ziel ist [Cozystack](/de/produkte/cozystack/), initiiert und mitgepflegt von den Engineers, die Ihre Migration durchführen.**

> **Passt zu:** der Ænix-Plattform, die zu Ihrem Bestand passt — **[Private Cloud Platform](/de/produkte/private-cloud-platform/)** für regulierte Organisationen, die Cloud für sich selbst betreiben, **[Public Cloud Platform](/de/produkte/public-cloud-platform/)**, wenn Sie Cloud an Kunden verkaufen. Legen Sie das Ziel anhand des Vergleichs **[Nutanix-Alternative](/de/alternativen/nutanix-alternative/)** fest und modellieren Sie dann die Zahlen mit dem **[ROI- und TCO-Rechner](/de/roi-rechner/)**.

<div class="cta-row">
  <a class="cta-primary" href="/de/kontakt/">Gespräch vereinbaren</a>
  <a class="cta-secondary" href="/de/alternativen/nutanix-alternative/">Warum Cozystack statt Nutanix →</a>
</div>


---

## Warum verlassen Organisationen Nutanix?

Die Auslöser lassen sich drei Gruppen zuordnen, und sie verstärken sich gegenseitig.

- **Druck bei Verlängerung und Lizenzen.** Die Konsolidierung des Portfolios und neue Subscription-Preise haben viele Nutanix-Kunden veranlasst, die Gesamtkosten des Bleibens neu zu prüfen — vor allem dort, wo die Lizenzierung pro Node mit einem wachsenden Cluster mitwächst.
- **Hyperkonvergenter Lock-in.** HCI bindet Storage-Fabric, Hypervisor und Management-Ebene an den Stack eines einzigen Herstellers. Das ist bequem — bis Sie eine Schicht austauschen, einen Workload-Typ ergänzen wollen, den die Plattform nicht bevorzugt, oder Hardware einsetzen möchten, die der Hersteller nicht freigibt.
- **Eine Plattform für VMs und Container.** Viele Teams betreiben Kubernetes bereits neben ihren Nutanix-VMs. Wer beides auf einer einzigen Kubernetes-nativen Plattform zusammenführt, spart sich einen parallelen Stack, ein paralleles Betriebsmodell und eine parallele Rechnung.

Treffen zwei oder mehr dieser Punkte zu, zahlt sich eine strukturierte Migration meist mehrfach aus. Sind Ihre Verlängerungskonditionen tragbar und drängt sonst nichts, lautet die ehrliche Empfehlung „bleiben und optimieren“ — das sagen wir Ihnen auch, und hier häufiger als bei VMware. Nutanix bietet von allen Plattformen, von denen wir wegmigrieren, das beste Day-2-Betriebserlebnis: Upgrades per Klick über LCM, Storage-Effizienz, um die Sie sich nie kümmern müssen, und ein einziger Hersteller, der für den gesamten Stack verantwortlich ist. Darauf verzichten Sie. Die Seite **[Nutanix-Alternative](/de/alternativen/nutanix-alternative/)** stellt beide Seiten dar, bevor Sie sich festlegen.

---

<div class="band-fullbleed band-fullbleed--tint">
<div class="band-fullbleed__inner">

## Wohin Sie migrieren

Das Ziel ist eine einzige Kubernetes-native Plattform aus offenen, an der [CNCF](https://www.cncf.io/) orientierten Komponenten statt eines zweiten proprietären HCI-Stacks.

- **VMs auf KubeVirt.** [KubeVirt](https://kubevirt.io/) betreibt vollwertige virtuelle Maschinen auf Kubernetes mit derselben KVM-Technologie, auf der auch AHV aufsetzt; Gastbetriebssysteme einschließlich Windows werden daher übernommen. VMs und Container laufen im selben Cluster.
- **Replizierter Storage mit LINSTOR.** LINSTOR/DRBD liefert replizierten Block-Storage anstelle der verteilten AOS-Storage-Fabric, mit replizierten Volumes über Nodes hinweg — und, wo die Topologie es erfordert, über Rechenzentren hinweg. Die Volume-Verschlüsselung (LUKS auf LINSTOR) lässt sich pro Storage Class optional aktivieren.
- **Netzwerk mit Cilium.** Ein eBPF-basiertes CNI ersetzt die HCI-Netzwerkebene; Network Policies, Load Balancing und die Isolation von Mandanten sind native Kubernetes-Bausteine.
- **Keine Hypervisor-Abgabe pro Node.** Cozystack ist Open Source unter Apache 2.0; die Zielplattform kennt keine Hypervisor-Lizenz pro Node, sodass mit dem Cluster nicht auch die Lizenzrechnung wächst.

Den Vergleich auf Plattformebene — Funktion für Funktion, Cozystack und Nutanix HCI — finden Sie auf der Seite **[Nutanix-Alternative](/de/alternativen/nutanix-alternative/)**. Dieser Hub setzt voraus, dass das Ziel feststeht, und konzentriert sich auf den Umzug.

</div>
</div>

---

## Wie eine AHV-Migration tatsächlich abläuft

Die Migration läuft in Kohorten, nicht als Big Bang. „Alles an einem Wochenende umziehen“ übersteht die Begegnung mit einem gewachsenen Unternehmensbestand selten.

1. **Inventur und Klassifizierung.** Vollständige Inventur von AOS/AHV — Zahl der VMs, Betriebssystem-Mix, Storage-Abhängigkeiten, Netzwerkanbindungen, Multi-Site-Topologie —, danach wird jeder Workload eingeordnet: jetzt migrieren, später migrieren, bleiben oder auf Container umstellen.
2. **Zielarchitektur.** Die Cozystack-Zielumgebung wird auf Ihrer Hardware dimensioniert und entworfen: Kapazitätsmodell, Storage Classes, Netzwerk, Mandantenmodell und Betriebskonzept.
3. **Cutover in Kohorten.** AHV-VMs werden exportiert und mit dem Containerized Data Importer (CDI) von KubeVirt konvertiert; jede Kohorte läuft parallel zu Nutanix, bis sie validiert ist, und die Reihenfolge der Cutovers richtet sich nach Ihren Verlängerungsterminen — so zahlen Sie nie doppelt für Kapazität, die bereits umgezogen ist.
4. **Stilllegung.** Nutanix-Nodes werden außer Betrieb genommen, sobald die Kohorten abgeschlossen sind, und die Hardware wird weiterverwendet, wo sie passt — die letzte Verlängerung entfällt damit einfach.

Das ist dieselbe disziplinierte Abfolge, die wir bei der **[VMware-Migration](/de/migration/vmware/)** einsetzen — die Mechanik ist eine andere, aber erst das Muster aus Kohorten und Parallelbetrieb verhindert, dass eine Migration zum Notfall des nächsten Jahres wird.

<div class="arch-section__fig">
<div class="diagram">
<div class="diagram__node"><b>Nutanix AOS / AHV</b><div class="diagram__chips"><span>AOS-Storage-Fabric</span><span>Lizenzierung pro Node</span></div></div>
<div class="diagram__conn">exportiert über</div>
<div class="diagram__node"><b>Cutover in Kohorten</b><div class="diagram__chips"><span>Konvertierung mit KubeVirt CDI</span><span>Parallelbetrieb mit Nutanix</span></div></div>
<div class="diagram__conn">landet auf</div>
<div class="diagram__node diagram__node--brand"><b>Cozystack</b><div class="diagram__chips"><span>KubeVirt-VMs + Container</span><span>LINSTOR</span><span>Cilium</span></div></div>
<div class="diagram__conn">endet mit</div>
<div class="diagram__node"><b>Nutanix-Nodes außer Betrieb</b><div class="diagram__chips"><span>Hardware weiterverwendet</span><span>Letzte Verlängerung entfällt</span></div></div>
</div>
</div>

---

## Was übernommen wird und was sich wirklich ändert

Wer die Unterschiede ehrlich benennt, hält die Migration im Zeitplan. Manches lässt sich mit wenig Reibung übertragen; anderes wird bewusst neu entworfen — und wer etwas anderes behauptet, bringt Projekte ins Stocken.

- **Wird übernommen.** Gastbetriebssysteme und ihre Disks (KubeVirt nutzt dieselbe KVM-Technologie wie AHV), die gewohnten Abläufe im VM-Betrieb und die meisten Anwendungsarchitekturen — eine VM, die auf Nutanix lief, läuft als VM auf KubeVirt weiter.
- **Wird bewusst neu entworfen.** Storage wechselt von der AOS-Fabric zu Storage Classes auf LINSTOR, das Netzwerk von der HCI-Ebene zu Cilium-Policies, und Mandanten, Quotas und Self-Service werden als Kubernetes-native Konstrukte statt als Prism-Kategorien abgebildet. Wer diesen Neuentwurf überspringt, schafft die häufigste Ursache für Instabilität nach der Migration.
- **Eine neue Fähigkeit, nicht nur ein Austausch.** Weil Container im selben Cluster gleichberechtigt laufen, ist die Migration auch der Zeitpunkt, an dem Teams einen separaten Kubernetes-Bestand einbinden können — aus einem reinen VM-Umzug wird eine Konsolidierung der Plattformen.

Das Assessment benennt jeden dieser Punkte ausdrücklich für Ihren Bestand, damit der Plan den realen Aufwand abbildet statt der optimistischen Annahme, alles lasse sich eins zu eins übertragen.

---

## Kosten modellieren, bevor Sie sich festlegen

Die Wirtschaftlichkeit einer Migration sieht in der Theorie attraktiv aus und entscheidet sich in der Praxis an Details: Hardware-Erneuerung, Kapazität des Plattform-Teams und die Lernkurve im Betrieb gehören ins Modell. Bevor Sie sich auf Hardware oder einen Zeitplan festlegen, rechnen Sie Ihre Bestandsgröße und Ihre aktuelle Nutanix-Verlängerung mit dem **[TCO-Rechner Nutanix vs. Cozystack](/tco-calculator/vs-nutanix/)** (Englisch) oder den **[ROI- und TCO-Rechnern](/de/roi-rechner/)** durch — so sehen Sie die jährliche Differenz, das Mehrjahresergebnis nach der Migration und die Amortisationszeit. Eine ehrliche TCO-Rechnung vorab unterscheidet eine Migration, die sich rechnet, von einer, die ins Stocken gerät.

---

## Wie Ænix eine Nutanix-Migration begleitet

Das Projekt folgt unserem **[Platform Readiness Assessment](/de/dienstleistungen/platform-readiness-assessment/)** mit Schwerpunkt Nutanix: Inventur von AOS/AHV, Zielarchitektur, Klassifizierung der Workloads, Cutover-Reihenfolge entlang der Verlängerungstermine und eine Roadmap für Phase 2 — geliefert in 14 oder 28 Tagen zum Festpreis. Phase 2 ist die Umsetzung: Engineers von Ænix arbeiten für die Migrationskohorten in Ihrem Team mit und geben ihr Wissen laufend weiter. Eine optionale Phase 3 umfasst den Betrieb von Cozystack als Managed Service, nachdem der Bestand umgezogen ist. Weil wir die Zielplattform initiiert haben und mitpflegen, beruhen die Aufwandsschätzungen auf tatsächlich geleisteter Arbeit, nicht auf Vermutungen.


---

Möchten Sie zuerst die Zielplattformen vergleichen? Siehe die Seite **[Nutanix-Alternative](/de/alternativen/nutanix-alternative/)**.

---

*Ænix hat [Cozystack](https://cozystack.io) initiiert — ein CNCF-Sandbox-Projekt (der Antrag auf CNCF Incubation befindet sich in der Due-Diligence-Prüfung) unter Apache 2.0 — und pflegt es gemeinsam mit Maintainern anderer Unternehmen. Darauf aufbauend bietet Ænix drei Plattformen an — Public Cloud, Private Cloud und AI —, die sich kombinieren lassen, statt einander auszuschließen.*
