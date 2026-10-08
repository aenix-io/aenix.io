---
title: "VMware-Migration — VCF verlassen, ohne die Anwendung zu zerbrechen"
seo_title: "VMware-Migration zu Cozystack — VCF sicher verlassen"
primary_keyword: "VMware Migration"
secondary_keywords:
  - "VMware zu KubeVirt Migration"
  - "VMware zu Cozystack Migration"
  - "Forklift VMware Migration"
  - "VCF Ausstieg"
description: "VMware-Migration durchgängig: Forklift für kalte und warme Transfers, VDDK- und virt-v2v-Realitäten, Kohorten-Cutover mit Parallelbetrieb, VCF-Rückbau."
related_pages: ["/de/alternativen/vmware-alternative/", "/de/vergleichen/cozystack-vs-vmware/", "/de/alternativen/vmware-alternativen/", "/de/loesungen/cloud-repatriation/", "/de/dienstleistungen/platform-readiness-assessment/", "/de/produkte/", "/de/produkte/cozystack/", "/de/ressourcen/vmware-kostenrechner/", "/de/partner/vmware-exit/", "/de/fuer/leiter-infrastruktur/"]
language: "de"
quick_facts_style: "rows"
faq_style: "rows"
hreflang_en: /migration/vmware/
direct_answer: |
  **Eine VMware-Migration nach der Broadcom-Übernahme ist ein geplantes Projekt, um Workloads von VMware Cloud Foundation (VCF), vSphere und vCloud Director auf Infrastruktur zu verlagern, die die Organisation selbst kontrolliert. Sie eignet sich für Unternehmen, Hosting-Anbieter und regulierte Betreiber, die mit steigenden Broadcom-Abonnementpreisen, Souveränitätsvorgaben (DORA, NIS2) oder Repatriierungszielen konfrontiert sind. Ænix führt diese Migrationen durchgängig durch: Inventarisierung und Workload-Klassifizierung, Zielarchitektur, Cutover in Kohorten mit Validierung im Parallelbetrieb und Rückbau von VMware. Konveyor Forklift, das Kubernetes-Migrationswerkzeug für Virtualisierung, ist in den Ænix-Plattformen enthalten und übernimmt den Transfer: kalte oder warme Migration von vSphere, Netzwerk- und Storage-Zuordnung als Kubernetes-Objekte und Gastkonvertierung mit virt-v2v, die VirtIO-Treiber injiziert und die VMware Tools entfernt. Als Ziel empfiehlt Ænix in der Regel Cozystack, ein CNCF-Sandbox-Projekt unter Apache 2.0, das VMs und Container über KubeVirt auf einer Kubernetes-API betreibt, mit Cilium-Networking und LINSTOR-Storage. Gut umgesetzt liefert eine strukturierte Migration eine Plattform, die dem Kunden gehört, und in den von Ænix modellierten Projekten eine Kostenreduktion von 30–60 % bei den migrierten Workloads, vor allem durch den Wegfall der VMware-Lizenzierung pro Core. Diese Spanne beruht auf Modellrechnungen aus Ænix-Projekten, nicht auf einem veröffentlichten Benchmark, und wird im Assessment anhand der realen Bestandsdaten neu berechnet.**
quick_facts:
  - label: "Was es ist"
    value: "Ein durchgängiges Projekt, um Workloads von VMware VCF / vSphere / vCloud Director auf kundenkontrollierte Infrastruktur zu verlagern, typischerweise Cozystack."
  - label: "Lizenz"
    value: "Apache 2.0 (keine Lizenzkosten pro CPU oder Core)"
  - label: "Status"
    value: "Cozystack ist ein CNCF-Projekt (Sandbox seit 28.02.2025; der Antrag auf Incubation befindet sich in der Due-Diligence-Prüfung)"
  - label: "Für wen"
    value: "Unternehmen, die VCF verlassen, Hosting-Anbieter, die VMware Cloud Director ablösen, und Betreiber, die von Broadcom-Preisen, Souveränitätsvorgaben aus DORA / NIS2 oder Cloud-Repatriierung getrieben sind."
  - label: "Zeitplan"
    value: "Platform Readiness Assessment in 14 oder 28 Tagen (Festpreis); ein Bestand mit 100 VMs ist typischerweise in 8–12 Monaten migriert, einer mit 1.000 VMs in 18–24 Monaten, je nach Abhängigkeiten."
  - label: "Migrationsmethode"
    value: "Cutover in Kohorten, VMware läuft bis zur Validierung parallel weiter; Konveyor Forklift übernimmt den kalten oder warmen Transfer, virt-v2v injiziert VirtIO-Treiber und entfernt die VMware Tools."
  - label: "Migrationswerkzeug"
    value: "Forklift ist in den Ænix-Plattformen enthalten. Warme Migration nutzt VMware Changed Block Tracking und verkürzt die Auszeit auf das letzte Delta; sie ist keine Live-Migration, ein Neustart bleibt."
  - label: "Was Sie beistellen"
    value: "Ein VDDK-Image aus Ihrem eigenen Broadcom-Download. Es darf nicht weitergegeben werden, ist für VMs auf vSAN zwingend, und ohne es ist der Transfer deutlich langsamer."
  - label: "Zielplattform"
    value: "Standardmäßig Cozystack — KubeVirt für VMs und Container auf einer Kubernetes-API, Cilium-Networking (eBPF), LINSTOR/DRBD-Storage, Mandantenfähigkeit über das Tenant-CRD."
faq:
  - q: "Kann VMware während der Migration weiterlaufen?"
    a: "Ja, das ist das Standardmuster. VMware und die Zielplattform laufen parallel, und die Workloads ziehen Kohorte für Kohorte um, mit Validierung vor jedem Cutover. Einen Big-Bang-Umzug an einem Wochenende gibt es nicht."
  - q: "Was, wenn uns VCF-Verträge auf Jahre binden?"
    a: "Die Reihenfolge der Kohorten richtet sich nach den Laufzeiten der Abonnements, Workloads ziehen also um, sobald Verpflichtungen auslaufen. Der Plan respektiert, was vertraglich bezahlt ist, und vermeidet die letzte Verlängerung."
  - q: "Unterstützen Sie Windows-VMs?"
    a: "Ja. KubeVirt betreibt Windows-VMs, und virt-v2v in Forklift injiziert vor dem ersten Start VirtIO-Treiber, entfernt die VMware Tools und erhält statische IP-Adressen sowie Laufwerksbuchstaben. Zwei Ausnahmen gehören in die Planung: Windows-VMs mit Measured Boot lassen sich nicht konvertieren und werden auf der Zielseite neu aufgebaut, und Windows Server 2012 sowie 2012 R2 booten nach der Konvertierung nicht, weil virtio-win keine Treiber dafür enthält."
  - q: "Welches Migrationswerkzeug ist in der Plattform enthalten?"
    a: "Konveyor Forklift, das Kubernetes-Migrationswerkzeug für Virtualisierung. Konfiguriert wird über Kubernetes-Objekte: ein Provider für die Verbindung zu vCenter oder ESXi, eine NetworkMap von Quell-Portgruppen auf Zielnetze, eine StorageMap von Datastores auf StorageClasses und ein Plan, den eine Migration ausführt. Als Quellen deckt es außerdem oVirt/RHV, OpenStack, OVA-Dateien und entfernte KubeVirt-Cluster ab."
  - q: "Was ist der Unterschied zwischen warmer und kalter Migration?"
    a: "Bei der kalten Migration wird die VM ausgeschaltet, konvertiert und dann übertragen. Weil die Konvertierung zuerst läuft, scheitert eine nicht konvertierbare VM sofort statt nach Stunden des Kopierens. Bei der warmen Migration läuft die VM weiter, während die Disks inkrementell über VMware Changed Block Tracking kopiert werden; im Cutover-Fenster wird nur das letzte Delta übertragen. Warm ist keine Live-Migration: Der RAM-Zustand wird nicht mitgenommen, die VM startet neu. Voraussetzung ist, dass Changed Block Tracking vorab auf jeder Quell-VM und jeder Disk aktiviert ist."
  - q: "Brauchen wir ein VDDK-Image, und können Sie eines stellen?"
    a: "Sie brauchen eines, und wir können es nicht stellen. Das VMware Virtual Disk Development Kit ist proprietär und darf weder von Ænix noch vom Forklift-Projekt weitergegeben werden. Sie laden es unter Ihrer eigenen Broadcom-Berechtigung herunter und bauen daraus ein Container-Image in Ihrer eigenen Registry. Für VMs auf vSAN ist es zwingend, und ohne es fällt der Disk-Transfer auf einen deutlich langsameren Pfad zurück. Das gehört auf die Pre-Flight-Checkliste, nicht als Überraschung mitten in die Migration."
  - q: "Auf welche Plattform migrieren Sie?"
    a: "Standardmäßig auf Cozystack — ein CNCF-Sandbox-Projekt unter Apache 2.0, das VMs und Container über KubeVirt auf einer Kubernetes-API betreibt, mit Cilium-Networking, LINSTOR-Storage und Mandantenfähigkeit über das Tenant-CRD. Andere Ziele setzen wir ein, wo sie technisch passen."
  - q: "Wie viel kann eine VMware-Migration einsparen?"
    a: "In den von Ænix modellierten Projekten führt eine strukturierte Migration zu einer Kostenreduktion von 30–60 % bei den migrierten Workloads, vor allem durch den Wegfall der VMware-Lizenzierung pro Core. Das sind unsere eigenen Projektdaten, kein veröffentlichter Branchen-Benchmark. Da VCF-Preise individuell angeboten und nicht veröffentlicht werden, rechnen wir die Zahl mit dem VMware-Kostenrechner auf Ihrem Bestand neu, bevor irgendetwas zugesagt wird."
  - q: "Wie arbeitet Ænix bei einer VMware-Migration?"
    a: "Am Anfang steht ein Platform Readiness Assessment zum Festpreis über 14 oder 28 Tage (Bestandsinventar, Zielarchitektur, Workload-Klassifizierung, Cutover-Reihenfolge). Danach folgt die Umsetzungsphase, in der Ænix-Engineers in Ihr Team eingebunden sind — ein Bestand mit 100 VMs ist typischerweise in 8–12 Monaten migriert, einer mit 1.000 VMs in 18–24 Monaten —, und optional anschließend der verwaltete Betrieb von Cozystack. Die Umsetzung wird nach dem Assessment angeboten."
---

<!-- BLOCK 1: HERO -->


**Eine VMware-Migration nach Broadcom ist ein geplantes Projekt, kein Notfall. Gut umgesetzt liefert sie eine Plattform, die Sie kontrollieren, und in den von uns modellierten Projekten eine Kostenreduktion von 30–60 % bei den migrierten Workloads. Schlecht umgesetzt produziert sie operative Altlasten und eine stockende Migration, die zum Notfall des nächsten Jahres wird. Den Unterschied machen ein strukturiertes Assessment, eine ehrliche TCO-Modellierung und Engineers, die das bereits produktiv umgesetzt haben.**

Ænix führt VMware-Migrationen für Organisationen, die VCF verlassen, durchgängig durch. Die Engineers, die [Cozystack](/de/produkte/cozystack/) entwickelt haben und mitpflegen — die Zielplattform, die wir typischerweise empfehlen —, arbeiten bei Assessment, Reihenfolgeplanung und Umsetzung mit Ihrem Team zusammen.

> **Passt zu:** **[Ænix Public Cloud Platform](/de/produkte/public-cloud-platform/)** für alle, die Cloud verkaufen — Hoster, die VMware Cloud Director verlassen (das häufigste Muster 2026), MSPs, Telcos, nationale Betreiber; **[Ænix Private Cloud Platform](/de/produkte/private-cloud-platform/)** für regulierte Unternehmen, die VCF für den Eigenbedarf ablösen. Kostenlose [VMware-Migrations-Checkliste →](/de/ressourcen/vmware-migrations-checkliste/).

<div class="cta-row">
  <a class="cta-primary" href="/de/kontakt/">Gespräch vereinbaren</a>
  <a class="cta-secondary" href="/de/blog/2026/05/vmware-migration-tools-strategie/">Zum Migrations-Playbook →</a>
</div>

<!-- /BLOCK 1 -->

---

<!-- BLOCK 2: WHO -->

## Wer 2026 eine VMware-Migration durchführt

Organisationen mit folgenden Auslösern:

- **Verlängerung des Broadcom-Abonnements** — in den Projekten, die wir begleiten, liegen Verlängerungsangebote beim 2- bis 5-Fachen des bisherigen Vertrags; ELAs fallen weg; VCF-Bundling wird Pflicht. VCF-Preise sind nicht veröffentlicht, der Faktor ist also unsere Beobachtung, keine Branchenzahl
- **Souveränitätsdruck** — DORA, NIS2 und sektorale Regeln zwingen kritische Workloads auf kundenkontrollierte Infrastruktur
- **KI-/GPU-Ökonomie** — dauerhaft ausgelastete Workloads, bei denen das GPU-Modell von VMware zusätzliche Lizenzkomplexität bringt
- **Repatriierungsstrategie** — VMware-Workloads in der Public Cloud, die auf private Infrastruktur zurückziehen
- **Modernisierung** — ein alter VCF-Bestand, bei dem der Upgrade-Pfad zugleich der Ausstiegspfad ist

Treffen zwei oder mehr davon zu, verstärkt eine strukturierte Migration den Nutzen. Ist die Verlängerung tragbar und gibt es keinen weiteren Auslöser, lautet die ehrliche Empfehlung „bleiben und optimieren“.

<!-- /BLOCK 2 -->

---

<!-- BLOCK 3: WHAT'S COVERED -->

## Was eine VMware-Migration mit Ænix umfasst

<div class="grid-2x2">

**1. Inventarisierung und Assessment**
Inventar von vSphere / VCF / vCD: Anzahl der Workloads, OS-Mix, vSAN-Abhängigkeiten, NSX-Integrationen, eigene Dienste, Multi-Site-Topologie. Workload-Klassifizierung: jetzt migrieren / später migrieren / bleiben / neu aufsetzen.

**2. Zielarchitektur**
Zielplattform auf Kunden-Hardware. Standardmäßig Cozystack (KubeVirt + Cilium + LINSTOR + Tenant-CRD); andere Optionen, wo sinnvoll. Sizing, Kapazitätsmodell, Betriebskonzept.

**3. Migrationsdurchführung**
Migration in Kohorten. Konveyor Forklift steuert virt-v2v und KubeVirt CDI; die Bereinigung der Windows-Gäste ist automatisiert. Netzwerk- und Storage-Cutover. Parallelbetrieb mit VMware bis zur Validierung. Cutover-Reihenfolge ausgerichtet an den Laufzeiten der VCF-Abonnements.

**4. Rückbau**
Rückbau von VMware, sobald Kohorten abgeschlossen sind. Hardware wird, wo möglich, weiterverwendet. Die letzte Verlängerung entfällt.

</div>

<div class="arch-section__fig">
<div class="diagram">
<div class="diagram__node"><b>VMware VCF / vSphere / vCD</b><div class="diagram__chips"><span>vSAN</span><span>NSX</span><span>Windows-VMs</span></div></div>
<div class="diagram__conn">wandert über</div>
<div class="diagram__node"><b>Cutover in Kohorten</b><div class="diagram__chips"><span>Forklift: virt-v2v + CDI</span><span>Validierung im Parallelbetrieb</span></div></div>
<div class="diagram__conn">landet auf</div>
<div class="diagram__node diagram__node--brand"><b>Cozystack</b><div class="diagram__chips"><span>KubeVirt</span><span>Cilium</span><span>LINSTOR</span></div></div>
<div class="diagram__conn">abgeschlossen mit</div>
<div class="diagram__node"><b>Rückbau von VMware</b><div class="diagram__chips"><span>Letzte Verlängerung entfällt</span><span>Lizenzierung pro Core entfällt</span></div></div>
</div>
</div>

<!-- /BLOCK 3 -->

---

<!-- BLOCK 3b: FORKLIFT -->

## Forklift: die VM-Transfer-Engine in der Plattform

Ænix liefert [Konveyor Forklift](https://github.com/kubev2v/forklift) — das Kubernetes-Migrationswerkzeug für Virtualisierung — als Bestandteil seiner Plattformen aus. Eine Kohorte von vSphere zu holen braucht damit kein separates Werkzeug, keine separate Lizenz und kein separates Projekt. Forklift ist dieselbe Open-Source-Engine, die Red Hat als Migration Toolkit for Virtualization vertreibt; darunter arbeiten `virt-v2v` und KubeVirt CDI, und konfiguriert wird über Kubernetes-Objekte statt über einen reinen GUI-Workflow.

**Wie es konfiguriert wird.** Vier Objekttypen decken eine Migration ab:

- `Provider` — die Verbindung zu vCenter (oder direkt zu ESXi) und zum Zielcluster.
- `NetworkMap` — jede Quell-Portgruppe wird auf ein Zielnetz abgebildet: das Pod-Netz, ein bestimmtes Multus-Attachment oder `ignored`. Der `networkIPMode` pro Netz entscheidet, ob eine statische Adresse erhalten bleibt, durch DHCP ersetzt oder unverändert gelassen wird.
- `StorageMap` — jeder Quell-Datastore wird auf eine Ziel-StorageClass abgebildet, mit Volume Mode (`Block` oder `Filesystem`) und Access Mode je Zuordnung.
- `Plan` und `Migration` — ein Plan ist eine Gruppe von VMs mit gemeinsamen Parametern und Zuordnungen, eine Migration führt ihn aus. Pro Plan läuft jeweils eine Migration, und der Power-State jeder Quell-VM bleibt über den Umzug hinweg erhalten.

**Kalt und warm.** Beides wird von vSphere aus unterstützt, und der Unterschied ist planungsrelevant:

- **Kalt** — die Quell-VM wird ausgeschaltet, konvertiert und dann übertragen. Weil die Konvertierung vor dem Datentransfer läuft, scheitert eine nicht konvertierbare VM sofort statt nach Stunden des Kopierens. Das ist der Standard und die richtige Wahl für alles mit Wartungsfenster.
- **Warm** — die VM läuft weiter, während ihre Disks inkrementell über VMware Changed Block Tracking (CBT) kopiert werden, standardmäßig mit einem Snapshot pro Stunde. Beim Cutover wird die VM heruntergefahren und nur das verbleibende Delta übertragen. **Warme Migration ist keine Live-Migration**: Der RAM-Zustand wird nicht mitgenommen, es gibt also weiterhin einen Neustart. Sie verkürzt die Auszeit von „Dauer einer vollständigen Disk-Kopie“ auf „Dauer des letzten Deltas“ — und genau darauf kommt es bei einer großen Datenbank-VM an.
- Warm setzt voraus, dass **CBT auf jeder Quell-VM und jeder ihrer Disks** vor Beginn der Migration aktiviert ist, und eine VM verträgt maximal 28 CBT-Snapshots. Windows-Gäste brauchen zusätzlich installierte VMware Tools, bei denen Volume Shadow Copy Service und VMware Snapshot Provider auf „Manuell“ oder „Automatisch“ stehen, sonst scheitert der Snapshot-Schritt.

**Was virt-v2v am Gastsystem ändert.** VirtIO-Treiber werden injiziert, VMware Tools und VMware-spezifische NIC-Konfiguration entfernt, die Boot-Konfiguration angepasst und der QEMU Guest Agent installiert. Statische IP-Adressen aus vSphere bleiben erhalten, Windows-Laufwerksbuchstaben ebenfalls. Das ist die automatisierte Fassung jener manuellen Nacharbeit, die selbst gebaute VMware-Migrationen so mühsam macht.

**VDDK — und das Lizenzproblem, das Sie erben.** Das VMware Virtual Disk Development Kit ist der schnelle Lesepfad für Disks und in der Praxis nicht optional:

- Ohne VDDK fällt der Transfer auf einen deutlich langsameren Pfad zurück.
- Bei VMs auf **vSAN ist VDDK zwingend** — solche Migrationen funktionieren ohne es nicht.
- Das VDDK darf nicht weitergegeben werden. Weder Ænix noch das Forklift-Projekt dürfen es ausliefern. Sie laden es unter Ihrer eigenen Broadcom-Berechtigung herunter, bauen daraus ein Container-Image und legen dieses in Ihrer eigenen Registry ab. Es in einer öffentlichen Registry abzulegen, kann gegen die VMware-Lizenzbedingungen verstoßen. Die Plattform nimmt die Image-Referenz als Konfiguration entgegen; das Image bereitzustellen ist Ihr Schritt, und genau deshalb steht es auf der Pre-Flight-Checkliste.

**Andere Quellen als vSphere.** Dieselbe Engine deckt oVirt/RHV, OpenStack, OVA-Dateien und entfernte KubeVirt-Cluster als kalte Migration ab; warme Migration gibt es nur von vSphere und RHV. Unterstützt wird vSphere ab Version 6.5.

**Was Forklift nicht leistet.** Diese Punkte sind real und sollten im Assessment auffallen, nicht erst beim Cutover:

- Windows-VMs mit **Measured Boot** lassen sich nicht migrieren — sie werden auf der Zielseite neu aufgebaut. Bei Secure-Boot-VMs muss Secure Boot auf der Zielseite unter Umständen deaktiviert werden.
- **Windows Server 2012 und 2012 R2** booten nach der Konvertierung nicht; `virtio-win` enthält keine Treiber dafür, und derzeit gibt es keinen Workaround. Planen Sie diese als Neuaufbau, oder lassen Sie sie stehen, bis das Gast-Betriebssystem aktualisiert ist.
- VMs im Ruhezustand (Hibernation) werden nicht unterstützt; der Ruhezustand wird vorher auf der Quelle deaktiviert.
- ISOs und CD-ROMs müssen ausgehängt sein, jede NIC braucht eine Adresse, und VM-Namen müssen DNS-konform und eindeutig sein.
- Hersteller-Appliances, die als OVA ausgeliefert werden, fallen nach der Konvertierung womöglich aus den Supportbedingungen des Herstellers. Klären Sie das, bevor Sie eine migrieren, nicht danach.
- Gast-Betriebssysteme, die `virt-v2v` nicht unterstützt, lassen sich im Raw-Copy-Modus bewegen. Sie landen dann aber auf emulierten Geräten statt auf VirtIO und booten oder laufen möglicherweise schlechter. Das ist ein Rückfallweg, kein Plan.

Forklift deckt die Disk- und Gast-Ebene ab. Es entscheidet nicht über Ihr Mandantenmodell, Ihren Adressplan oder Ihre Cutover-Reihenfolge — dafür sind Assessment und Kohortenfolge da.

**Zum Upstream-Stand, klar gesagt:** Forklift ist heute in den Ænix-Plattformen enthalten. Die Arbeit, es im Open-Source-Cozystack als Self-Service-VM-Import für Tenants verfügbar zu machen, befindet sich im Review und ist noch in keiner veröffentlichten Cozystack-Version enthalten. Wer Cozystack selbst betreibt statt einer Ænix-Plattform, stellt Forklift vorerst daneben bereit.

<!-- /BLOCK 3b -->

---

<!-- BLOCK 4: COMMON MIGRATION FAILURES -->

<div class="band-fullbleed band-fullbleed--tint">
<div class="band-fullbleed__inner">

## Woran VMware-Migrationen häufig scheitern

<div class="gap-cards-2">

**Keine ehrliche TCO vor der Migration**
In der Theorie sieht die Wirtschaftlichkeit der Migration attraktiv aus; in der Praxis werden Hardware-Erneuerung, Kapazität des Plattform-Teams und die operative Lernkurve nicht eingerechnet. Das Projekt stockt, wenn die Zahlen anders ausfallen als angenommen.

**Versuchter Big-Bang-Cutover**
Ein einzelnes Wochenende nach dem Motto „wir ziehen alles um“ funktioniert im Enterprise-Maßstab selten. Migration in Kohorten mit validiertem Parallelbetrieb ist das Muster, das funktioniert.

**Unzureichende Zielarchitektur**
Workloads landen auf einer Private Cloud, die nicht für den Produktivbetrieb ausgelegt wurde. Operative Altlasten häufen sich; das Team gibt der Migration die Schuld, obwohl das Problem die Reife der Zielplattform ist.

**Netzwerk- und Storage-Neuentwurf übersprungen**
Networking und Storage auf Cozystack (oder einer Alternative) funktionieren anders als NSX und vSAN. Wer den Neuentwurf überspringt, erzeugt einen fragilen Betrieb.

</div>

</div>
</div>

<!-- /BLOCK 4 -->

---

<!-- BLOCK 4b: COST CALCULATOR -->

## Die Kostendifferenz abschätzen

Modellieren Sie das Delta, bevor Sie sich festlegen. Geben Sie Ihre Bestandsgröße und den aktuellen VMware-Preis ein; der Rechner zeigt die jährliche Ersparnis, das Drei-Jahres-Netto nach der Migration und wie schnell sich die Migration amortisiert. Das eigenständige Werkzeug und die Methodik finden Sie im **[VMware-Kostenrechner](/de/ressourcen/vmware-kostenrechner/)**.

{{< vmware-calculator lang="de" >}}

<!-- /BLOCK 4b -->

---

<!-- BLOCK 5: HOW WE ENGAGE -->

## Wie Ænix bei einer VMware-Migration vorgeht

Der Ablauf folgt unserem **[Platform Readiness Assessment](/de/dienstleistungen/platform-readiness-assessment/)**, mit Schwerpunkt auf der VMware-Migration:

- **Assessment (14 oder 28 Tage, Festpreis)** — Inventar des VMware-Bestands, Zielarchitektur, Workload-Klassifizierung, Cutover-Reihenfolge, Roadmap für Phase 2.
- **Phase 2: Umsetzung** — Ænix-Engineers arbeiten für die Migrationskohorten in Ihrem Team mit. Validierung im Parallelbetrieb. Wissenstransfer durchgängig. Ein Bestand mit 100 VMs ist typischerweise in 8–12 Monaten migriert, einer mit 1.000 VMs in 18–24 Monaten.
- **Phase 3 (optional)** — verwalteter Betrieb von Cozystack nach Abschluss der Migration.

Zur Wahl des Ziels siehe **[VMware-Alternative](/de/alternativen/vmware-alternative/)** (unsere Empfehlung), **[Cozystack vs. VMware](/de/vergleichen/cozystack-vs-vmware/)** (direkter Vergleich) oder **[VMware-Alternativen 2026](/de/alternativen/vmware-alternativen/)** (Marktvergleich). Sie treffen die Entscheidung für die Infrastruktur? Siehe den **[Leitfaden für Infrastrukturleiter](/de/fuer/leiter-infrastruktur/)**.

<!-- /BLOCK 5 -->

---

<!-- BLOCK 6: WHY AENIX -->

## Warum Ænix für die VMware-Migration

- **Erfahrung direkt aus Cozystack.** Wir haben die Zielplattform, auf der viele Migrationen landen, entwickelt und pflegen sie mit. Unsere Aufwandsschätzungen für die Umsetzung beruhen auf Projekten, die wir abgeschlossen haben.
- **Keine Hyperscaler-Voreingenommenheit.** Unsere Empfehlungen folgen der technischen Eignung, nicht Partner-Provisionen. Wenn es richtig ist, sagen wir „bleiben Sie in der Cloud“.
- **Teams in der EU und in Zentralasien.** Engineering-Teams in der EU und in Zentralasien; EU-Verträge über die AENIX s.r.o. (Tschechien).
- **Open-Source-Ziel.** Cozystack steht unter Apache 2.0; Sie betreiben die Plattform, auf die Sie migrieren, ohne Lizenzkosten für die Plattform.

<!-- /BLOCK 6 -->

---

<!-- BLOCK 7: TIMELINE -->

## Typischer Zeitplan einer Migration

| Wann | Was |
|---|---|
| Tag 0 | Discovery-Gespräch (kostenlos) — Eignung prüfen |
| Tage 1–13 (oder 1–27) | Platform Readiness Assessment mit VMware-Schwerpunkt |
| Tag 14 (oder 28) | Abschlusspräsentation für die Geschäftsführung — schriftlicher Plan |
| Monate 1–3 | Fundament der Zielplattform |
| Monate 3–12 | Workload-Kohorten ziehen um (Takt ausgerichtet an den VCF-Laufzeiten) |
| Monate 12–24 | Bei größeren Beständen (~1.000 VMs): Rückbau von VMware abgeschlossen |

Ein Bestand mit 100 VMs ist typischerweise in 8–12 Monaten migriert, einer mit 1.000 VMs in 18–24 Monaten.

<!-- /BLOCK 7 -->

---

<!-- BLOCK 8: PROOF -->

## Unternehmen, die Plattformen mit Ænix betreiben

{{< clients >}}

Hosting-Anbieter, die die Ænix Public Cloud Platform produktiv betreiben.

{{< quote-carousel >}}

<!-- /BLOCK 8 -->

---

<!-- BLOCK 9: PRICING -->

## Preise

Das Platform Readiness Assessment hat einen Festpreis (14 oder 28 Tage). Die Umsetzung wird nach dem Assessment angeboten, nach Aufwand oder mit festem Umfang. Folgt die Umsetzung auf das Assessment, wird die Assessment-Gebühr je nach Umfang angerechnet. Die Support-Stufen für die resultierende Cozystack-Plattform finden Sie auf der [Preisseite](/de/preise/).

<!-- /BLOCK 9 -->

---

<!-- BLOCK 10: FAQ -->

---

<!-- BLOCK 11: CTA -->

<a id="discovery"></a>
<div class="cta-row">
  <a class="cta-primary" href="/de/kontakt/">Gespräch vereinbaren</a>
</div>

- **[VMware-Migration: Tools und Strategie](/de/blog/2026/05/vmware-migration-tools-strategie/)**
- **[VMware-Alternative](/de/alternativen/vmware-alternative/)** — unsere Empfehlung
- **[Cozystack vs. VMware](/de/vergleichen/cozystack-vs-vmware/)** — direkter Vergleich
- **[VMware-Alternativen 2026](/de/alternativen/vmware-alternativen/)** — Marktvergleich
- **[Platform Readiness Assessment](/de/dienstleistungen/platform-readiness-assessment/)**
- **[Cozystack](/de/produkte/cozystack/)**

<!-- /BLOCK 11 -->

---

*Ænix hat Cozystack entwickelt (ein CNCF-Sandbox-Projekt) und pflegt es gemeinsam mit Maintainern anderer Unternehmen. Darauf aufbauend bietet Ænix drei Plattformen an — Public Cloud, Private Cloud und AI.*
