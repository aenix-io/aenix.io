---
title: "Nutanix Migration: HCI-Lock-in zu einer K8s-Plattform verlassen"
description: "Nutanix Migration auf eine Kubernetes-native Plattform: HCI-Lock-in und Lizenzen pro Node verlassen für KubeVirt-VMs, Container und LINSTOR-Storage in Eigenbesitz."
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
  - /de/migration/vmware/
  - /de/produkte/aenix-platform/
  - /de/dienstleistungen/platform-readiness-assessment/
  - /de/roi-rechner/
service:
  type: "Nutanix Migration"
  areaServed: ["EU", "DACH"]
  audience: "Enterprise, Hosting Providers, Public Sector"
direct_answer: |
  **Eine Nutanix Migration verschiebt virtuelle Maschinen und Workloads von Nutanix HCI — der AOS-Storage-Schicht und dem AHV-Hypervisor — auf eine andere Plattform, meist weil Lizenz- und Renewal-Kosten oder hyperkonvergenter Lock-in das Bleiben nicht mehr rechtfertigen. Das Kubernetes-native Ziel ist Cozystack (ein CNCF-Projekt, Apache 2.0): Es betreibt VMs auf KubeVirt neben Containern auf demselben Cluster, mit LINSTOR für replizierten Block-Storage und ohne Hypervisor-Lizenz pro Node. Aenix führt diese Migrationen durchgängig durch — Inventarisierung, Zielarchitektur, kohortenbasiertes Cutover und Decommission — mit denselben Ingenieuren, die die Zielplattform bauen und betreiben. Es passt für Unternehmen, Hosting-Anbieter und den öffentlichen Sektor, die ihren Virtualisierungs-Stack besitzen statt ihn unter einem stetig steigenden Renewal zu mieten.**
quick_facts:
  - label: "Was es ist"
    value: "VMs und Workloads von Nutanix AOS/AHV auf eine Kubernetes-native Plattform verschieben, die Sie besitzen."
  - label: "Ziel"
    value: "Cozystack — KubeVirt-VMs plus Container auf einem Cluster, LINSTOR-replizierter Storage, Cilium-Networking."
  - label: "Lizenzierung"
    value: "Keine Hypervisor-Lizenz pro Node; Cozystack ist Apache-2.0-Open-Source."
  - label: "Migrationsmethode"
    value: "Kohortenbasiertes Cutover mit Parallel-Run; Image-Konvertierung per KubeVirt CDI; Sequenzierung an Renewal-Termine ausgerichtet."
  - label: "Warum Teams wechseln"
    value: "Renewal- und Lizenzdruck, HCI-Lock-in und der Wunsch, VMs und Container auf einer Plattform zu vereinen."
  - label: "Unterschied zur Alternative-Seite"
    value: "Dieser Hub ist das Wie des Umzugs; die Nutanix-Alternative-Seite ist das Warum und Wohin."
  - label: "Engagement-Dauer"
    value: "Assessment in 14-28 Tagen; vollständige Migration typischerweise 9-18 Monate je nach Umfang."
quick_facts_source: "[Cozystack Doku](https://cozystack.io), [Nutanix-Alternative-Vergleich](/de/alternativen/nutanix-alternative/), [ROI- & TCO-Rechner](/de/roi-rechner/)"
faq:
  - q: "Warum verlassen Organisationen Nutanix?"
    a: "Häufige Auslöser sind Renewal- und Lizenzdruck nach Portfolio- und Preisänderungen, hyperkonvergenter Lock-in, der Storage und Compute an den Stack eines Anbieters bindet, und der strategische Wunsch, VMs und Container auf einer einzigen, selbst besessenen Plattform zu betreiben. Treffen zwei oder mehr zu, zahlt sich eine strukturierte Migration meist aus; ist ein Renewal komfortabel und drängt sonst nichts, kann Bleiben die ehrliche Antwort sein."
  - q: "Wohin migriert man einen Nutanix-Bestand?"
    a: "Auf eine Kubernetes-native Plattform: Cozystack betreibt VMs auf KubeVirt neben Containern auf demselben Cluster, nutzt LINSTOR für replizierten Block-Storage anstelle der verteilten AOS-Storage-Fabric und Cilium für Networking. Es gibt keine Hypervisor-Lizenz pro Node, und die Plattform ist Apache-2.0-Open-Source, sodass der Bestand, auf den Sie migrieren, einer ist, den Sie kontrollieren."
  - q: "Wie wird eine AHV-VM migriert?"
    a: "Nutanix-AHV-VMs werden exportiert und für den Betrieb auf KubeVirt konvertiert, das dieselbe zugrunde liegende KVM-Technologie nutzt, sodass Gast-Betriebssysteme und Disks übernommen werden. Der KubeVirt Containerized Data Importer (CDI) übernimmt die Disk-Image-Konvertierung in die neue Storage-Schicht, und die Migration läuft Kohorte für Kohorte mit einem Parallel-Run zur Validierung vor jedem Cutover."
  - q: "Was ist der Unterschied zwischen dieser Seite und der Nutanix-Alternative-Seite?"
    a: "Dieser Migrations-Hub behandelt das Wie des Umzugs — Inventarisierung, Sequenzierung, Cutover und Decommission. Die Nutanix-Alternative-Seite behandelt das Warum und Wohin: den plattformweiten Vergleich Cozystack gegen Nutanix HCI. Lesen Sie die Alternative-Seite, um das Ziel zu entscheiden; lesen Sie diesen Hub, um den Umzug zu planen."
  - q: "Wie lange dauert eine Nutanix Migration?"
    a: "Sie beginnt mit einem Platform Readiness Assessment in 14-28 Tagen, das einen schriftlichen Plan und eine Zielarchitektur erzeugt. Die Ausführung läuft dann Kohorte für Kohorte, sequenziert gegen Ihre Nutanix-Renewal-Termine, typischerweise 9-18 Monate für einen vollständigen Bestand, je nach VM-Anzahl, Anwendungskomplexität und dem Umfang der Container-Re-Plattformierung."
  - q: "Können wir die Kosten vor der Entscheidung modellieren?"
    a: "Ja. Nutzen Sie den ROI- und TCO-Rechner, um das Delta zwischen dem aktuellen Nutanix-Renewal-Pfad und einer selbst besessenen Cozystack-Plattform zu modellieren — inklusive Hardware, Kapazität des Plattform-Teams und operativer Lernkurve — bevor Sie sich auf Hardware oder einen Migrationsplan festlegen."
---

# Nutanix Migration: HCI-Lock-in zu Ihren eigenen Bedingungen verlassen

**Nutanix zu verlassen ist ein geplantes Projekt, kein Notfall — und gut umgesetzt entsteht eine Virtualisierungsplattform, die Sie besitzen, statt einer, die Sie unter einem stetig steigenden Renewal mieten. Aenix migriert Nutanix-AOS/AHV-Bestände auf eine Kubernetes-native Plattform, auf der VMs und Container einen Cluster teilen, Storage mit LINSTOR repliziert wird und es keine Hypervisor-Lizenz pro Node gibt. Das Ziel ist [Cozystack](/de/produkte/cozystack/), gebaut und betrieben von denselben Ingenieuren, die Ihre Migration durchführen.**

> **Passt zu:** der **[Ænix Platform](/de/produkte/aenix-platform/)**-Edition, die zu Ihrem Bestand passt — Enterprise für regulierte Workloads, ISP für Hosting-Anbieter, Public Cloud für große Betreiber. Entscheiden Sie das Ziel über den **[Nutanix-Alternative](/de/alternativen/nutanix-alternative/)**-Vergleich und modellieren Sie dann die Zahlen mit dem **[ROI- & TCO-Rechner](/de/roi-rechner/)**.

<div class="cta-row">
  <a class="cta-primary" href="/de/kontakt/">Discovery-Call buchen</a>
  <a class="cta-secondary" href="/de/alternativen/nutanix-alternative/">Warum Cozystack statt Nutanix →</a>
</div>


---

## Warum verlassen Organisationen Nutanix?

Die Auslöser gruppieren sich zu dreien, und sie verstärken sich gegenseitig.

- **Renewal- und Lizenzdruck.** Portfolio-Konsolidierung und Subscription-Neupreise haben viele Nutanix-Kunden dazu gebracht, die Gesamtkosten des Bleibens neu zu prüfen, besonders dort, wo die Lizenzierung pro Node mit einem wachsenden Cluster skaliert.
- **Hyperkonvergenter Lock-in.** HCI bindet die Storage-Fabric, den Hypervisor und die Management-Ebene an den Stack eines Anbieters. Das ist bequem, bis Sie eine Schicht ändern, einen von der Plattform nicht bevorzugten Workload-Typ ergänzen oder auf Hardware betreiben wollen, die der Anbieter nicht freigibt.
- **Eine Plattform für VMs und Container.** Viele Teams betreiben bereits Kubernetes neben ihren Nutanix-VMs. Beides auf eine einzige Kubernetes-native Plattform zu konsolidieren, entfernt einen parallelen Stack, ein paralleles Betriebsmodell und eine parallele Rechnung.

Treffen zwei oder mehr davon zu, verstärkt sich eine strukturierte Migration meist zu Ihren Gunsten. Ist Ihr Renewal komfortabel und drängt sonst nichts, ist „bleiben und optimieren" die ehrliche Empfehlung — wir sagen Ihnen das.

---

<div class="band-fullbleed band-fullbleed--tint">
<div class="band-fullbleed__inner">

## Wohin Sie migrieren

Das Ziel ist eine einzige Kubernetes-native Plattform, zusammengesetzt aus offenen, [CNCF](https://www.cncf.io/)-nahen Komponenten statt eines zweiten proprietären HCI-Stacks.

- **VMs auf KubeVirt.** [KubeVirt](https://kubevirt.io/) betreibt vollständige virtuelle Maschinen auf Kubernetes mit derselben KVM-Technologie, die AHV zugrunde liegt, sodass Gast-Betriebssysteme, einschließlich Windows, übernommen werden. VMs und Container werden auf demselben Cluster geplant.
- **LINSTOR-replizierter Storage.** LINSTOR/DRBD liefert replizierten Block-Storage anstelle der verteilten AOS-Storage-Fabric, mit verschlüsselten, replizierten Volumes über Nodes und — wo die Topologie es verlangt — über Rechenzentren.
- **Cilium-Networking.** Eine eBPF-basierte CNI ersetzt die HCI-Netzwerkebene, mit Network Policy, Load Balancing und Multi-Tenant-Isolation als erstklassigen Kubernetes-Primitiven.
- **Keine Hypervisor-Abgabe pro Node.** Cozystack ist Apache-2.0-Open-Source; die Plattform, auf die Sie migrieren, hat keine Hypervisor-Lizenz pro Node, sodass Cluster-Wachstum keine Lizenzrechnung aufsummiert.

Für den plattformweiten Vergleich — Feature für Feature, Cozystack gegen Nutanix HCI — lesen Sie die **[Nutanix-Alternative](/de/alternativen/nutanix-alternative/)**-Seite. Dieser Hub setzt voraus, dass Sie das Ziel gewählt haben, und konzentriert sich auf den Umzug.

</div>
</div>

---

## Wie eine AHV-Migration tatsächlich abläuft

Migration ist kohortenbasiert, nicht Big-Bang. Ein „alles an einem Wochenende"-Umzug übersteht selten den Kontakt mit einem Unternehmensbestand.

1. **Inventarisierung und Klassifizierung.** Vollständiges AOS/AHV-Inventar — VM-Anzahl, OS-Mix, Storage-Abhängigkeiten, Netzwerk-Integrationen, Multi-Site-Topologie — dann jeden Workload als migrate-now, migrate-later, stay oder re-platform-to-containers klassifizieren.
2. **Zielarchitektur.** Das Cozystack-Ziel auf Ihrer Hardware dimensionieren und designen: Kapazitätsmodell, Storage-Klassen, Networking, Tenancy und Betriebsdesign.
3. **Kohorten-Cutover.** AHV-VMs werden exportiert und mit dem KubeVirt Containerized Data Importer (CDI) konvertiert; jede Kohorte läuft parallel zu Nutanix, bis sie validiert ist, und die Cutover-Sequenzierung ist an Ihre Renewal-Termine ausgerichtet, sodass Sie nie doppelt für bereits verschobene Kapazität zahlen.
4. **Decommission.** Nutanix-Nodes werden außer Betrieb genommen, sobald Kohorten abgeschlossen sind, und Hardware wird wo möglich weiterverwendet, sodass das finale Renewal schlicht vermieden wird.

Das ist dieselbe disziplinierte Sequenzierung, die wir für die **[VMware Migration](/de/migration/vmware/)** nutzen — die Mechanik unterscheidet sich, aber das Kohorten-und-Parallel-Run-Muster ist es, das eine Migration davor bewahrt, zum Notfall des nächsten Jahres zu werden.

<div class="arch-section__fig">
<div class="diagram">
<div class="diagram__node"><b>Nutanix AOS / AHV</b><div class="diagram__chips"><span>AOS-Storage-Fabric</span><span>Lizenzierung pro Node</span></div></div>
<div class="diagram__conn">exportiert über</div>
<div class="diagram__node"><b>Kohorten-Cutover</b><div class="diagram__chips"><span>KubeVirt-CDI-Konvertierung</span><span>Parallel-Run mit Nutanix</span></div></div>
<div class="diagram__conn">migriert auf</div>
<div class="diagram__node diagram__node--brand"><b>Cozystack</b><div class="diagram__chips"><span>KubeVirt-VMs + Container</span><span>LINSTOR</span><span>Cilium</span></div></div>
<div class="diagram__conn">abgeschlossen mit</div>
<div class="diagram__node"><b>Nutanix-Nodes außer Betrieb</b><div class="diagram__chips"><span>Hardware weiterverwendet</span><span>Finales Renewal vermieden</span></div></div>
</div>
</div>

---

## Was übernommen wird und was sich wirklich ändert

Ehrlich über das Delta zu sein, hält eine Migration im Zeitplan. Manches portiert reibungsarm; anderes ist ein bewusstes Redesign, und das Gegenteil zu behaupten, ist der Weg, auf dem Projekte stocken.

- **Wird übernommen.** Gast-Betriebssysteme und ihre Disks (KubeVirt nutzt dieselbe KVM-Technologie wie AHV), VM-zentrierte Betriebsgewohnheiten und die meisten Anwendungsarchitekturen — eine VM, die auf Nutanix lief, läuft als VM auf KubeVirt.
- **Bewusst neu gestaltet.** Storage wandert von der AOS-Fabric zu LINSTOR-Storage-Klassen; Networking wandert von der HCI-Ebene zu Cilium-Policy; und Tenancy, Quotas und Self-Service werden als Kubernetes-native Konstrukte statt als Prism-Kategorien modelliert. Dieses Redesign zu überspringen, ist die häufigste einzelne Ursache für Fragilität nach der Migration.
- **Eine neue Fähigkeit, kein bloßer Tausch.** Weil Container auf demselben Cluster erstklassig sind, ist die Migration auch der Moment, in dem Teams einen separaten Kubernetes-Bestand zu konsolidieren beginnen können — aus einem Like-for-Like-VM-Umzug wird eine Plattform-Konsolidierung.

Das Assessment benennt jeden dieser Punkte explizit für Ihren Bestand, sodass der Plan realen Aufwand statt einer optimistischen Like-for-Like-Annahme widerspiegelt.

---

## Kosten modellieren, bevor Sie sich festlegen

Migrationsökonomie sieht in der Theorie attraktiv aus und entscheidet sich in der Praxis an den Details: Hardware-Refresh, Kapazität des Plattform-Teams und die operative Lernkurve gehören alle ins Modell. Bevor Sie sich auf Hardware oder einen Zeitplan festlegen, führen Sie Ihre Bestandsgröße und Ihr aktuelles Nutanix-Renewal durch den **[ROI- & TCO-Rechner](/de/roi-rechner/)**, um das Jahresdelta, das Mehrjahres-Netto nach Migration und die Amortisation zu sehen. Ein ehrliches TCO vorab trennt eine Migration, die sich auszahlt, von einer, die stockt.

---

## Wie Aenix bei der Nutanix Migration arbeitet

Das Engagement spiegelt unser **[Platform Readiness Assessment](/de/dienstleistungen/platform-readiness-assessment/)** mit Nutanix-Schwerpunkt: AOS/AHV-Inventar, Zielarchitektur, Workload-Klassifizierung, Cutover-Sequenzierung gegen Renewal-Termine und eine Phase-2-Roadmap — geliefert in 14-28 Tagen. Phase 2 ist die Implementierung, mit Aenix-Ingenieuren, die für die Migrationskohorten in Ihr Team integriert sind, und Wissenstransfer durchgängig; eine optionale Phase 3 deckt den Managed-Cozystack-Betrieb ab, nachdem der Bestand umgezogen ist. Weil wir die Zielplattform bauen, sind die Aufwandsschätzungen an gelieferter Arbeit kalibriert, nicht geraten.


---

*Aenix ist das Team hinter [Cozystack](https://cozystack.io) — einem CNCF-Projekt (heute Sandbox; Incubating erwartet für Spätsommer 2026), Apache 2.0. Aenix kommerzialisiert es als Ænix Platform, verfügbar in fünf Editionen: Public Cloud, ISP, Enterprise, IDP, AI/ML. Wir führen Nutanix- und VMware-Migrationen für Unternehmen, Hosting-Anbieter und den öffentlichen Sektor in der EU und DACH durch.*
