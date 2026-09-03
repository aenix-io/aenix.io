---
title: "VMware Migration — VCF verlassen, ohne die Anwendung zu zerbrechen"
description: "VMware-Migration End-to-End: Forklift für kalte und warme Transfers, VDDK- und virt-v2v-Realitäten, Kohorten-Cutover mit Parallel-Run, VCF-Decommission."
related_pages: ["/de/alternativen/vmware-alternative", "/de/loesungen/cloud-repatriation", "/de/produkte/cozystack", "/de/produkte/public-cloud-platform/", "/de/produkte/private-cloud-platform/", "/de/dienstleistungen/platform-readiness-assessment/"]
language: "de"
quick_facts_style: "rows"
faq_style: "rows"
hreflang_en: /migration/vmware/
direct_answer: |
  **Eine VMware-Migration nach Broadcom ist ein geplantes Projekt, kein Notfall: Inventarisierung des vSphere/VCF/vCD-Bestands, Zielarchitektur, Migration in Kohorten mit Parallel-Run und VMware-Decommission. Aenix führt diese End-to-End-Migration durch und empfiehlt als Standard Cozystack, eine offene CNCF-Plattform (Apache 2.0), die VMs und Container über eine Kubernetes-API mit KubeVirt betreibt. Den Transfer selbst erledigt Konveyor Forklift, das Kubernetes-Migrationstoolkit für Virtualisierung, das in der Aenix-Plattform enthalten ist: kalte oder warme Migration von vSphere, Netzwerk- und Storage-Zuordnung als Kubernetes-Objekte und virt-v2v-Gastkonvertierung mit VirtIO-Injektion und Entfernung der VMware Tools. Sie richtet sich an Hosting-Anbieter, die VMware Cloud Director verlassen, sowie an regulierte Unternehmen, die VCF ablösen. Gut umgesetzt liefert sie eine selbst kontrollierte Plattform und 30-60% Kostenreduktion bei migrierten Workloads ohne CPU- oder Core-basierte Lizenzierung.**
quick_facts:
  - label: "Was es ist"
    value: "End-to-End-VMware-Migration (vSphere/VCF/vCD) auf Cozystack — Bewertung, Sequenzierung, Implementierung, Decommission"
  - label: "Lizenz"
    value: "Apache 2.0 (keine CPU-/Core-basierte Lizenzierung)"
  - label: "Status"
    value: "Cozystack ist ein CNCF-Projekt (Sandbox seit 28.02.2025; Incubating erwartet Spätsommer 2026)"
  - label: "Zielgruppe"
    value: "Hosting-Anbieter, die VMware Cloud Director verlassen, und regulierte Unternehmen, die VCF ablösen"
  - label: "Technologie"
    value: "KubeVirt für VMs und Container auf einer Kubernetes-API, Cilium (eBPF) Networking, LINSTOR/DRBD Storage, Tenant-CRD-Mandantenfähigkeit"
  - label: "Migrationswerkzeug"
    value: "Konveyor Forklift ist Bestandteil der Aenix-Plattform. Warme Migration nutzt VMware Changed Block Tracking und verkürzt die Auszeit auf das letzte Delta; sie ist keine Live-Migration, ein Neustart bleibt."
  - label: "Was Sie beistellen müssen"
    value: "Ein VDDK-Image aus Ihrem eigenen Broadcom-Download. Es darf nicht weitergegeben werden, ist für vSAN-gestützte VMs zwingend, und ohne es ist der Transfer deutlich langsamer."
  - label: "Erwartetes Ergebnis"
    value: "30-60% Kostenreduktion bei migrierten Workloads und eine selbst kontrollierte Plattform"
  - label: "Engagement"
    value: "Aenix Public Cloud Platform oder Aenix Private Cloud Platform plus Migrationsservices; Preisstufen ab Basic 1.250 $/Mon. (10 Nodes)"
faq:
  - q: "Ist die VMware-Migration ein Notfall nach der Broadcom-Übernahme?"
    a: "Nein. Eine VMware-Migration sollte als geplantes Projekt behandelt werden, nicht als Notfall. Schlecht umgesetzt produziert sie operative Altlasten und eine stockende Migration. Aenix sequenziert die Migration in Kohorten mit Parallel-Run, sodass Anwendungen während des Übergangs verfügbar bleiben."
  - q: "Worauf migriert Aenix VMware-Workloads?"
    a: "Standard-Empfehlung ist Cozystack, eine offene CNCF-Plattform unter Apache 2.0. Sie betreibt virtuelle Maschinen und Container über eine gemeinsame Kubernetes-API mit KubeVirt, nutzt Cilium (eBPF) für Networking und LINSTOR/DRBD für Storage. So laufen bestehende VMs weiter, während neue Workloads cloud-nativ entstehen."
  - q: "Wie viel kann eine VMware-Migration einsparen?"
    a: "Bei migrierten Workloads sind 30-60% Kostenreduktion realistisch. Ein wesentlicher Faktor ist die Apache-2.0-Lizenzierung ohne CPU- oder Core-basierte Gebühren. Das genaue Delta lässt sich vorab mit dem VMware-Kostenrechner modellieren — inklusive Jahresersparnis, 3-Jahres-Netto und Amortisation."
  - q: "Welche Aenix Plattform passt zu meiner Migration?"
    a: "Die Public Cloud Platform passt zu allen, die Cloud an externe Kunden verkaufen — Hoster, die VMware Cloud Director verlassen, MSPs, Telcos, nationale Betreiber. Die Private Cloud Platform adressiert regulierte Unternehmen, die VCF für den Eigenbedarf ablösen; ihre Self-Service-Schicht ersetzt dabei die interne PaaS."
  - q: "Welches Migrationswerkzeug ist in der Plattform enthalten?"
    a: "Konveyor Forklift, das Kubernetes-Migrationstoolkit für Virtualisierung. Konfiguriert wird über Kubernetes-Objekte: ein Provider für die vCenter- oder ESXi-Verbindung, eine NetworkMap von Quell-Portgruppen auf Zielnetze, eine StorageMap von Datastores auf StorageClasses und ein Plan, den eine Migration ausführt. Als Quellen kommen außerdem oVirt/RHV, OpenStack, OVA-Dateien und entfernte KubeVirt-Cluster in Frage."
  - q: "Was ist der Unterschied zwischen warmer und kalter Migration?"
    a: "Bei der Kaltmigration wird die VM ausgeschaltet, konvertiert und dann übertragen — weil die Konvertierung zuerst läuft, scheitert eine nicht konvertierbare VM sofort statt nach Stunden des Kopierens. Bei der Warmmigration läuft die VM weiter, während die Disks inkrementell über VMware Changed Block Tracking kopiert werden, sodass im Cutover-Fenster nur das letzte Delta bewegt wird. Warm ist keine Live-Migration: Der RAM-Zustand wandert nicht mit, die VM startet neu. Voraussetzung ist Changed Block Tracking auf jeder Quell-VM und jeder Disk."
  - q: "Brauchen wir ein VDDK-Image, und können Sie eines stellen?"
    a: "Sie brauchen eines, und wir können es nicht stellen. Das VMware Virtual Disk Development Kit ist proprietär und darf weder von Aenix noch vom Forklift-Projekt weitergegeben werden. Sie laden es unter Ihrer eigenen Broadcom-Berechtigung herunter und bauen daraus ein Container-Image in Ihrer eigenen Registry. Für VMs auf vSAN ist es zwingend, und ohne es fällt der Disk-Transfer auf einen deutlich langsameren Pfad zurück. Das gehört auf die Pre-Flight-Checkliste, nicht mitten in die Migration."
  - q: "Funktionieren Windows-VMs?"
    a: "Ja. KubeVirt betreibt Windows-VMs, und virt-v2v injiziert vor dem ersten Start VirtIO-Treiber, entfernt die VMware Tools und erhält statische IP-Adressen sowie Laufwerksbuchstaben. Zwei Ausnahmen gehören in die Planung: Windows-VMs mit Measured Boot lassen sich nicht konvertieren und werden auf der Zielseite neu aufgebaut, und Windows Server 2012 sowie 2012 R2 booten nach der Konvertierung nicht, weil virtio-win keine Treiber dafür enthält."
  - q: "Was umfasst der Migrationsprozess konkret?"
    a: "Vier Schritte: Inventarisierung und Bewertung des vSphere/VCF/vCD-Bestands, Definition der Zielarchitektur (Cozystack als Standard), Migrations-Ausführung in Kohorten mit Parallel-Run und abschließendes VMware-Decommission."
  - q: "Bleibt die Plattform nach der Migration in meiner Kontrolle?"
    a: "Ja. Cozystack ist Open Source unter Apache 2.0 und ein CNCF-Projekt — kein Vendor-Lock-in, keine Core-basierte Lizenzierung. Aenix bietet die produktisierte Ænix Platform plus Services an, der zugrunde liegende Stack bleibt jedoch offen und selbst betreibbar."
---

<!-- BLOCK 1: HERO -->

**Post-Broadcom-VMware-Migration ist ein geplantes Projekt, kein Notfall. Gut umgesetzt liefert sie eine Plattform, die Sie kontrollieren, und eine Kostenreduktion von 30-60% bei den migrierten Workloads. Schlecht umgesetzt produziert sie operative Altlasten und eine stockende Migration, die zum Notfall des nächsten Jahres wird. Der Unterschied liegt in strukturiertem Assessment, ehrlicher TCO-Modellierung und Engineers, die das bereits produktiv geliefert haben.**

Ænix führt End-to-End-VMware-Migrationen für Organisationen durch, die VCF verlassen. Dieselben Engineers, die [Cozystack](/de/produkte/cozystack/) gebaut haben und betreiben — die Zielplattform, die wir typischerweise empfehlen — arbeiten für Assessment, Sequenzierung und Implementierung mit Ihrem Team zusammen.

> **Passt zu:** **[Ænix Public Cloud Platform](/de/produkte/public-cloud-platform/)** für alle, die Cloud verkaufen — Hoster, die VMware Cloud Director verlassen (häufigstes Muster 2026), MSPs, Telcos, nationale Betreiber; **[Ænix Private Cloud Platform](/de/produkte/private-cloud-platform/)** für regulierte Unternehmen, die VCF für den Eigenbedarf ablösen. Kostenlose [VMware-Migrations-Checkliste →](/de/ressourcen/vmware-migrations-checkliste/).

<div class="cta-row">
  <a class="cta-primary" href="/de/kontakt/">Discovery-Call buchen</a>
  <a class="cta-secondary" href="/de/blog/2026/05/vmware-migration-tools-strategie/">Zum Migrations-Playbook →</a>
</div>

<!-- /BLOCK 1 -->

---

<!-- BLOCK 2: WHO -->

## Wer führt 2026 eine VMware-Migration durch

Organisationen mit folgenden Auslösern:

- **Broadcom-Subscription-Verlängerung** — beobachtete Preiserhöhungen um das 2-5-Fache; Bruch von ELAs; verpflichtendes VCF-Bundling
- **Souveränitätsdruck** — DORA, NIS2 und sektorale Regeln zwingen kritische Workloads auf kundenkontrollierte Infrastruktur
- **KI-/GPU-Ökonomie** — dauerhaft ausgelastete Workloads, bei denen das VMware-GPU-Modell Lizenzkomplexität hinzufügt
- **Repatriierungs-Strategie** — VMware-on-Cloud-Workloads, die auf private Infrastruktur wandern
- **Modernisierung** — alter VCF-Bestand, bei dem der Upgrade-Pfad zugleich der Ausstiegspfad ist

Wenn zwei oder mehr davon zutreffen, verstärkt eine strukturierte Migration den Nutzen. Wenn die Verlängerung komfortabel ist und kein weiterer Auslöser besteht, ist „bleiben und optimieren“ die ehrliche Empfehlung.

<!-- /BLOCK 2 -->

---

<!-- BLOCK 3: WHAT'S COVERED -->

## Was eine VMware-Migration von Ænix abdeckt

<div class="grid-2x2">

**1. Inventarisierung und Assessment**
vSphere-/VCF-/vCD-Inventar: Workload-Anzahl, OS-Mix, vSAN-Abhängigkeiten, NSX-Integrationen, Custom-Services, Multi-Site-Topologie. Workload-Klassifizierung: jetzt migrieren / später migrieren / bleiben / die Plattform neu aufzusetzen.

**2. Zielarchitektur**
Zielplattform auf Kunden-Hardware. Cozystack als Standard (KubeVirt + Cilium + LINSTOR + Tenant CRD); andere Optionen, wo sinnvoll. Sizing, Kapazitätsmodell, Betriebsdesign.

**3. Migrations-Ausführung**
Kohorten-basierte Migration. KubeVirt CDI für die Image-Konvertierung. Automatisierte Windows-VM-Bereinigung. Network- und Storage-Cutover. Parallelbetrieb mit VMware bis zur Validierung. Cutover-Sequenzierung ausgerichtet an den VCF-Subscription-Abläufen.

**4. Decommission**
VMware-Decommission, sobald Kohorten abgeschlossen sind. Hardware wird wo möglich weiterverwendet. Letzte Verlängerung vermieden.

</div>

<div class="arch-section__fig">
<div class="diagram">
<div class="diagram__node"><b>VMware VCF / vSphere / vCD</b><div class="diagram__chips"><span>vSAN</span><span>NSX</span><span>Windows-VMs</span></div></div>
<div class="diagram__conn">wandert durch</div>
<div class="diagram__node"><b>Kohorten-basierter Cutover</b><div class="diagram__chips"><span>KubeVirt-CDI-Konvertierung</span><span>Parallelbetrieb-Validierung</span></div></div>
<div class="diagram__conn">landet auf</div>
<div class="diagram__node diagram__node--brand"><b>Cozystack</b><div class="diagram__chips"><span>KubeVirt</span><span>Cilium</span><span>LINSTOR</span></div></div>
<div class="diagram__conn">abgeschlossen mit</div>
<div class="diagram__node"><b>VMware-Decommission</b><div class="diagram__chips"><span>Letzte Verlängerung vermieden</span><span>30-60% Kostenreduktion</span></div></div>
</div>
</div>

<!-- /BLOCK 3 -->

---

<!-- BLOCK 3b: FORKLIFT -->

## Forklift: die VM-Transfer-Engine in der Plattform

Ænix liefert [Konveyor Forklift](https://github.com/kubev2v/forklift) — das Kubernetes-Migrationstoolkit für Virtualisierung — als Bestandteil der Plattform aus. Eine Kohorte von vSphere zu holen braucht damit kein separates Werkzeug, keine separate Lizenz und kein separates Projekt. Forklift ist dieselbe Open-Source-Engine, die Red Hat als Migration Toolkit for Virtualization vertreibt; darunter arbeiten `virt-v2v` und KubeVirt CDI, und konfiguriert wird über Kubernetes-Objekte statt über eine reine GUI.

**Wie es konfiguriert wird.** Vier Objekttypen decken eine Migration ab:

- `Provider` — die Verbindung zu vCenter (oder direkt zu ESXi) und zum Zielcluster.
- `NetworkMap` — jede Quell-Portgruppe wird auf ein Zielnetz abgebildet: das Pod-Netz, ein bestimmter Multus-Anschluss oder `ignored`. Der `networkIPMode` pro Netz entscheidet, ob eine statische Adresse erhalten bleibt, durch DHCP ersetzt oder unverändert gelassen wird.
- `StorageMap` — jeder Quell-Datastore wird auf eine StorageClass abgebildet, mit Volume Mode (`Block` oder `Filesystem`) und Access Mode je Zuordnung.
- `Plan` und `Migration` — ein Plan ist eine Menge von VMs mit gleichen Parametern und Zuordnungen, eine Migration führt ihn aus. Pro Plan läuft jeweils eine Migration, und der Power-State jeder Quell-VM bleibt über den Umzug hinweg erhalten.

**Kalt und warm.** Beides wird von vSphere aus unterstützt, und der Unterschied ist planungsrelevant:

- **Kalt** — die Quell-VM wird ausgeschaltet, konvertiert und dann übertragen. Weil die Konvertierung vor dem Datentransfer läuft, scheitert eine nicht konvertierbare VM sofort statt nach Stunden des Kopierens. Das ist der Standard und die richtige Wahl für alles mit Wartungsfenster.
- **Warm** — die VM läuft weiter, während ihre Disks inkrementell über VMware Changed Block Tracking (CBT) kopiert werden, standardmäßig mit stündlichen Snapshots. Beim Cutover wird die VM heruntergefahren und nur das verbleibende Delta übertragen. **Warme Migration ist keine Live-Migration**: Der RAM-Zustand wird nicht mitgenommen, es gibt also weiterhin einen Neustart. Sie verkürzt die Auszeit von „Dauer einer vollständigen Disk-Kopie“ auf „Dauer des letzten Deltas“ — worauf es bei einer großen Datenbank-VM ankommt.
- Warm setzt **CBT auf jeder Quell-VM und jeder ihrer Disks** vor Beginn voraus, und eine VM verträgt maximal 28 CBT-Snapshots. Windows-Gäste brauchen zusätzlich installierte VMware Tools mit Volume Shadow Copy Service und dem VMware Snapshot Provider auf Manuell oder Automatisch, sonst scheitert der Snapshot-Schritt.

**Was virt-v2v am Gastsystem macht.** VirtIO-Treiber werden injiziert, VMware Tools und VMware-spezifische NIC-Konfiguration werden entfernt, die Boot-Konfiguration wird angepasst, und der QEMU Guest Agent wird installiert. Statische IP-Adressen aus vSphere bleiben erhalten, Windows-Laufwerksbuchstaben ebenfalls. Das ist die automatisierte Fassung jener manuellen Nacharbeit, die handgestrickte VMware-Migrationen mühsam macht.

**VDDK — und das Lizenzproblem, das Sie erben.** Das VMware Virtual Disk Development Kit ist der schnelle Lesepfad für Disks und praktisch nicht optional:

- Ohne VDDK fällt der Transfer auf einen deutlich langsameren Pfad zurück.
- Bei VMs auf **vSAN ist VDDK zwingend** — solche Migrationen funktionieren ohne es nicht.
- Das VDDK darf nicht weitergegeben werden. Weder Ænix noch das Forklift-Projekt dürfen es ausliefern. Sie laden es unter Ihrer eigenen Broadcom-Berechtigung herunter, bauen daraus ein Container-Image und legen dieses in Ihrer eigenen Registry ab. Es in einer öffentlichen Registry zu speichern, kann die VMware-Lizenzbedingungen verletzen. Die Plattform nimmt die Image-Referenz als Konfiguration entgegen; das Bereitstellen ist Ihr Schritt und steht genau deshalb auf der Pre-Flight-Checkliste.

**Andere Quellen als vSphere.** Dieselbe Engine deckt oVirt/RHV, OpenStack, OVA-Dateien und entfernte KubeVirt-Cluster als Kaltmigration ab; warme Migration gibt es nur von vSphere und RHV. Unterstützt wird vSphere ab Version 6.5.

**Was Forklift nicht leistet.** Diese Punkte sind real und gehören ins Assessment, nicht in den Cutover:

- Windows-VMs mit **Measured Boot** lassen sich nicht migrieren — sie werden auf der Zielseite neu aufgebaut. Bei Secure-Boot-VMs muss Secure Boot auf der Zielseite unter Umständen deaktiviert werden.
- **Windows Server 2012 und 2012 R2** booten nach der Konvertierung nicht; `virtio-win` enthält keine Treiber dafür und es gibt derzeit keinen Workaround. Planen Sie diese als Neuaufbau oder lassen Sie sie stehen, bis das Gast-Betriebssystem aktualisiert ist.
- VMs im Ruhezustand werden nicht unterstützt; der Ruhezustand wird zuvor auf der Quelle deaktiviert.
- ISOs und CD-ROMs müssen ausgehängt sein, jede NIC braucht eine Adresse, und VM-Namen müssen DNS-konform und eindeutig sein.
- Hersteller-Appliances, die als OVA ausgeliefert werden, fallen nach der Konvertierung womöglich aus den Supportbedingungen des Herstellers. Das klärt man vorher, nicht hinterher.
- Gast-Betriebssysteme, die `virt-v2v` nicht unterstützt, lassen sich im Raw-Copy-Modus bewegen — sie landen dann aber auf emulierten Geräten statt VirtIO und booten oder laufen möglicherweise schlechter. Das ist ein Rückfallweg, kein Plan.

Forklift deckt die Disk- und Gast-Ebene ab. Es entscheidet nicht über Ihr Mandantenmodell, Ihren Adressplan oder Ihre Cutover-Reihenfolge — dafür sind Assessment und Kohortenfolge da.

**Zum Upstream-Stand, klar gesagt:** Forklift ist heute Bestandteil der Ænix-Plattform. Die Arbeit, es im Open-Source-Cozystack als Self-Service-VM-Import für Mandanten verfügbar zu machen, befindet sich im Review und steckt noch in keiner veröffentlichten Cozystack-Version. Wer Cozystack selbst betreibt statt der Ænix-Plattform, stellt Forklift derzeit daneben bereit.

<!-- /BLOCK 3b -->

---

<!-- BLOCK 4: COMMON MIGRATION FAILURES -->

<div class="band-fullbleed band-fullbleed--tint">
<div class="band-fullbleed__inner">

## Wo VMware-Migrationen häufig scheitern

<div class="gap-cards-2">

**Keine ehrliche TCO vor der Migration**
Die Migrations-Ökonomie sieht in der Theorie attraktiv aus; in der Praxis werden Hardware-Refresh, Kapazität des Plattform-Teams und die operative Lernkurve nicht eingerechnet. Das Projekt stockt, wenn sich die Ökonomie anders als angenommen entwickelt.

**Versuchter Big-Bang-Cutover**
Ein einzelnes Wochenende nach dem Motto „wir verschieben alles“ funktioniert im Enterprise-Maßstab selten. Kohorten-basierte Migration mit validiertem Parallelbetrieb ist das funktionierende Muster.

**Unzureichende Zielarchitektur**
Workloads landen auf einer Private Cloud, die nicht für die Produktion konstruiert wurde. Operative Altlasten häufen sich; das Team gibt der Migration die Schuld, obwohl das Problem die Reife der Zielplattform ist.

**Übersprungenes Network- und Storage-Redesign**
Networking und Storage auf Cozystack (oder einer Alternative) unterscheiden sich von NSX/vSAN. Das Redesign zu überspringen produziert operative Fragilität.

</div>

</div>
</div>

<!-- /BLOCK 4 -->

---

<!-- BLOCK 4b: COST CALCULATOR -->

## Die Kostendifferenz abschätzen

Modellieren Sie das Delta, bevor Sie sich festlegen. Geben Sie Ihre Bestandsgröße und den aktuellen VMware-Preis ein; der Rechner zeigt die jährliche Ersparnis, das Drei-Jahres-Netto nach der Migration und wie schnell sich die Migration amortisiert. Für das eigenständige Tool und die Methodik siehe den **[VMware-Kostenrechner](/de/ressourcen/vmware-kostenrechner/)**.

{{< vmware-calculator lang="de" currency="€" >}}

<!-- /BLOCK 4b -->

---

<!-- BLOCK 5: HOW WE ENGAGE -->

## Wie Ænix bei einer VMware-Migration vorgeht

Die Engagement-Struktur spiegelt unser **[Platform Readiness Assessment](/de/dienstleistungen/platform-readiness-assessment/)** mit VMware-Migrations-Schwerpunkt wider:

- **Assessment (14-28 Tage)** — VMware-Bestandsinventar, Zielarchitektur, Workload-Klassifizierung, Cutover-Sequenzierung, Phase-2-Roadmap.
- **Phase-2-Implementierung (6-18 Monate)** — Ænix-Engineers integriert mit Ihrem Team für die Migrations-Kohorten. Parallelbetrieb-Validierung. Wissenstransfer durchgängig.
- **Phase 3 (optional)** — verwalteter Cozystack-Betrieb nach Abschluss der Migration.

Für VMware-spezifische Zielführung siehe **[VMware Alternative](/de/alternativen/vmware-alternative/)** (Singular, herstellerfokussiert) oder die **[VMware-Alternativen-Liste](/de/alternativen/vmware-alternativen/)** (Plural, Marktüberblick).

<!-- /BLOCK 5 -->

---

<!-- BLOCK 6: WHY AENIX -->

## Warum Ænix speziell für die VMware-Migration

- **Cozystack-native Erfahrung.** Wir haben die Zielplattform gebaut, auf der viele Migrationen landen. Aufwandsschätzungen für die Implementierung sind an ausgelieferter Arbeit kalibriert.
- **Keine Hyperscaler-Voreingenommenheit.** Empfehlungen spiegeln technische Eignung wider, nicht Partner-Ökonomie. Wir sagen „in der Cloud bleiben“, wenn es richtig ist.
- **Teams in der EU + Zentralasien.** Zeitzonenfreundlich; ausgerichtet an DACH-/EU-Regulierungsrahmen.
- **Open-Source-Ziel.** Cozystack ist Apache 2.0; die Plattform, auf die Sie migrieren, gehört Ihnen.

<!-- /BLOCK 6 -->

---

<!-- BLOCK 7: TIMELINE -->

## Typischer Migrations-Zeitplan

| Wann | Was |
|---|---|
| Tag 0 | Discovery-Call (kostenlos) — Eignung bestätigen |
| Tage 1-13 (oder 1-27) | Platform Readiness Assessment mit VMware-Schwerpunkt |
| Tag 14 (oder 28) | Executive-Readout — schriftlicher Plan |
| Monate 1-3 | Fundament der Zielplattform |
| Monate 3-12 | Workload-Kohorten migrieren (Kadenz ausgerichtet an VCF-Abläufen) |
| Monate 12-24 | VMware-Decommission abgeschlossen |

Ein Bestand von 100 VMs wird typischerweise in 8-12 Monaten abgeschlossen. Ein Bestand von 1.000 VMs in 18-24 Monaten.

<!-- /BLOCK 7 -->

---

<!-- BLOCK 8: PROOF -->

## VMware-Migrationen, die wir begleitet haben

{{< clients >}}

{{< quote-carousel >}}

<!-- /BLOCK 8 -->

---

<!-- BLOCK 9: PRICING -->

<div class="pricing-cards-2">

### Assessment
**Auf Anfrage**

### Implementierung
nach Aufwand oder zum Festpreis.
**Auf Anfrage**

</div>

Wenn Phase 2 auf das Assessment folgt, wird die Assessment-Gebühr je nach Scope angerechnet.

<!-- /BLOCK 9 -->

---

<!-- BLOCK 10: FAQ -->


**Weitere Fragen?** Siehe den **[Artikel zum VMware-Migrations-Playbook](/de/blog/2026/05/vmware-migration-tools-strategie/)** oder **[sprechen Sie mit uns](#discovery)**.

<!-- /BLOCK 10 -->

---

<!-- BLOCK 11: CTA -->

<a id="discovery"></a>
<div class="cta-row">
  <a class="cta-primary" href="/de/kontakt/">Discovery-Call buchen</a>
</div>

- **[VMware-Migrations-Tools und -Strategie](/de/blog/2026/05/vmware-migration-tools-strategie/)**
- **[VMware Alternative](/de/alternativen/vmware-alternative/)** — Zielfokus
- **[VMware-Alternativen-Liste](/de/alternativen/vmware-alternativen/)** — Marktüberblick
- **[Platform Readiness Assessment](/de/dienstleistungen/platform-readiness-assessment/)**
- **[Cozystack](/de/produkte/cozystack/)**

<!-- /BLOCK 11 -->

---

*Ænix ist das Team hinter Cozystack (CNCF-Projekt), und wir bieten Ænix Platform an — unser kommerzielles produktisiertes Angebot auf Basis von Cozystack.*
