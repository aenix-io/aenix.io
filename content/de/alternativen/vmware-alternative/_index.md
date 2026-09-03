---
title: "VMware Alternative — Open Source, souverän, Kubernetes-nativ"
description: "Cozystack ersetzt vSphere, vCenter, vSAN, NSX und den VCF-Stack auf eigener Hardware: Open Source, Kubernetes-nativ, ohne CPU-Lizenzierung. Aenix migriert."
primary_keyword: "vmware alternative"
secondary_keywords: ["vmware ersatz", "vmware ablösen", "open source alternative zu vmware", "vsphere alternative", "vcloud director alternative"]
related_pages:
  - /de/migration/vmware
  - /de/alternativen/vmware-alternativen
  - /de/vergleichen/cozystack-vs-vmware
  - /de/produkte/public-cloud-platform/
  - /de/produkte/private-cloud-platform/
  - /de/preise
language: "de"
hreflang_en: /alternatives/vmware-alternative/
quick_facts_style: "rows"
faq_style: "rows"
direct_answer: |
  **Cozystack ist die Open-Source-Alternative zu VMware für Organisationen, die einen produktionsreifen Ersatz für den VCF-Stack auf eigener Hardware benötigen — nicht ein Downgrade auf Community-Tooling. Eine Kubernetes-native Plattform betreibt virtuelle Maschinen (über KubeVirt), Container, verwaltete Datenbanken, S3-Object-Storage und GPU-Workloads unter einer einzigen Steuerungsebene und ersetzt vSphere/ESXi, vCenter, vSAN, NSX und vCloud Director. Cozystack ist ein CNCF-Projekt unter Apache-2.0-Lizenz ohne CPU- oder Core-basierte Lizenzierung. Aenix ist das Unternehmen dahinter und liefert die produktisierte Ænix Platform sowie Migrations-, Support- und Betriebsdienste für einen sicheren VMware-Ausstieg in der DACH-Region.**
quick_facts:
  - label: "Was es ist"
    value: "Kubernetes-native Open-Source-Plattform, die den VMware-VCF-Stack (vSphere, vCenter, vSAN, NSX, vCloud Director) auf eigener Hardware ersetzt"
  - label: "Lizenz"
    value: "Apache 2.0 (keine CPU-/Core-basierte Lizenzierung)"
  - label: "Status"
    value: "Cozystack ist ein CNCF-Projekt (Sandbox seit 28.02.2025; Incubating erwartet Spätsommer 2026)"
  - label: "Technologie-Stack"
    value: "KubeVirt für VMs und Container, Cilium (eBPF) und Kube-OVN im Netzwerk, LINSTOR/DRBD für Block- und SeaweedFS für Object-Storage, Tenant-CRD-Mandantenfähigkeit"
  - label: "Zielgruppe"
    value: "Hosting-Anbieter (vCloud-Director-Ausstieg), regulierte Unternehmen und Banken (VCF-Ausstieg), große Cloud-Betreiber"
  - label: "Migration"
    value: "Sechs Schritte: Bestandsaufnahme, Parallelaufbau, VM-Transfer mit Konveyor Forklift, Netz- und Storage-Umschaltung, DR-Prüfung, VMware-Abbau"
  - label: "Regulatorik"
    value: "Unterstützt nachweisbare Kontrolle über IKT-Dritte gemäß DORA und NIS2 — souveräne Alternative zum US-Hypervisor-Stack"
  - label: "Engagement"
    value: "Ænix Platform ab Basic 1.250 $/Monat (10 Nodes), Standard 3.000 $, Plus 5.500 $, Enterprise individuell; deutschsprachiges Vertriebs- und Support-Team"
faq:
  - q: "Ist Cozystack ein vollwertiger Ersatz für VMware oder nur für einfache Workloads?"
    a: "Cozystack ist als produktionsreifer Ersatz konzipiert, nicht als Downgrade. Es betreibt vollständige KVM-basierte VMs über KubeVirt mit Live-Migration, Block-Storage und Snapshots, dazu Container, verwaltete Datenbanken, S3-Object-Storage und GPU-Workloads unter einer Kubernetes-nativen Steuerungsebene."
  - q: "Wo ist VMware weiterhin die bessere Wahl?"
    a: "Bei der Betriebstiefe. DRS und Storage DRS, Fault Tolerance, Storage vMotion zwischen Arrays und vVols haben in KubeVirt kein Gegenstück. Dazu kommen die zertifizierte Hardware-Kompatibilitätsliste, das über VADP angebundene Backup-Ökosystem aus Veeam, Commvault, Rubrik, Zerto und Site Recovery Manager sowie ISV-Zertifizierungen, die ausschließlich gegen ESXi ausgesprochen werden. Wenn Ihre Verlängerung finanziell tragbar ist und keine Souveränitäts- oder Mandantenfähigkeitsanforderung drückt, ist Bleiben die richtige Entscheidung."
  - q: "Was ersetzt die einzelnen VMware-Komponenten in Cozystack?"
    a: "vSphere/ESXi wird zu KubeVirt auf Talos, vCenter zur Kubernetes-API mit Cozystack Dashboard, vSAN zu LINSTOR/DRBD für Block- und SeaweedFS für Object-Storage, NSX zu Cilium (eBPF), vCloud Director zu Tenant CRD plus Cozystack Dashboard, und Site Recovery Manager zu Velero, S3 und PostgreSQL PITR. Zwei Ebenen werden dabei neu entworfen statt eins zu eins abgebildet: das Netzwerk und das Mandantenmodell."
  - q: "Wie lange dauert eine Migration von VMware?"
    a: "Die erste Produktionskohorte läuft 6 bis 12 Wochen nach Projektstart. Der gesamte Bestand braucht 7 bis 10 Monate bei unter 100 VMs, 10 bis 16 Monate bei 100 bis 500 VMs und 16 bis 25 Monate bei 500 bis 2.000 VMs. Vorgeschaltet ist ein Platform Readiness Assessment über 14 oder 28 Tage, das Bestand, Zielarchitektur und Kohortenfolge festlegt."
  - q: "Wie funktioniert die Lizenzierung im Vergleich zu Broadcom/VMware?"
    a: "Cozystack steht unter Apache 2.0 ohne CPU- oder Core-basierte Lizenzierung und ohne verpflichtende VCF-Bündelung. Es gibt keine Subscription-only-Falle und keine 2-5× Verlängerungssprünge. Aenix bietet kommerzielle Support- und Betriebsstufen für die produktisierte Ænix Platform an."
  - q: "Hilft Cozystack bei DORA- und NIS2-Anforderungen?"
    a: "Ja. DORA (seit Januar 2025) und NIS2 erfordern nachweisbare Kontrolle über kritische IKT-Dritte. Eine selbst betriebene Open-Source-Plattform auf eigener Hardware reduziert die Abhängigkeit von einem US-Hypervisor-Stack und unterstützt Souveränitäts- und Auditanforderungen europäischer Banken, Telcos und staatlicher Workloads. Aenix selbst hält weder eine ISO-27001- noch eine SOC-2-Zertifizierung; die Plattform ist an diesen Rahmenwerken ausgerichtet und unterstützt Ihre eigene Zertifizierungsarbeit."
  - q: "Unterstützt Cozystack GPUs für KI- und VDI-Workloads?"
    a: "Ja, mit klar benannter Grenze. NVIDIA vGPU steht für VMs zur Verfügung, sofern Sie die NVIDIA-Lizenz halten; Container-Workloads werden über den NVIDIA GPU Operator mit HAMi eingeplant und teilen sich eine Karte. Harte mandantenübergreifende Partitionierung über MIG steht auf der Roadmap und ist nicht ausgeliefert — ein GPU-Produkt für nicht vertrauenswürdige Mandanten sollte heute noch nicht darauf geplant werden."
  - q: "Wer betreibt die Migration von VMware zu Cozystack?"
    a: "Aenix ist das Unternehmen hinter Cozystack und betreibt Produktionsbereitstellungen für Service Provider, Banken und Telekommunikationsbetreiber. Das Team stellt das Migrations-, Support- und Betriebsmodell für den VMware-Ausstieg bereit und ist in der gesamten DACH-Region mit deutschsprachigem Vertrieb und Support verfügbar."
  - q: "Was kostet die Ænix Platform?"
    a: "Die Preisstufen beginnen bei Basic mit 1.250 $/Monat für 10 Nodes, Standard bei 3.000 $, Plus bei 5.500 $ und Enterprise nach RFP, jeweils bei Jahresvertrag. Pakete gelten je 10 physische Nodes und werden aufgerundet — ein Bestand von 44 Nodes entspricht fünf Paketen. Cozystack selbst ist quelloffen unter Apache 2.0; die kostenpflichtigen Stufen umfassen Produktisierung, Support und Betrieb."
---

<!-- BLOCK 1: HERO -->

**Cozystack ist die moderne Open-Source-Alternative zu VMware im Jahr 2026 — eine einzige Plattform, die vSphere, ESXi, vCenter, vSAN, NSX, vCloud Director und den restlichen VCF-Stack auf Ihrer eigenen Hardware ersetzt.**

Nach der Broadcom-Übernahme ist die VMware-Rechnung für viele Kunden unkalkulierbar geworden. Subscription-only-Lizenzierung, verpflichtende VCF-Bündelung, Preiserhöhungen von 2-5× bei Verlängerung und das Ende der ewigen Lizenzen haben die Kalkulation für jedes Infrastruktur-Team verändert.

Cozystack ist die Open-Source-Alternative für Organisationen, die einen echten Produktionsersatz brauchen — nicht ein Downgrade auf Community-Tooling. Es betreibt virtuelle Maschinen, Container, verwaltete Datenbanken, Object Storage und GPU-Workloads auf Ihrer eigenen Hardware unter einer Kubernetes-nativen Steuerungsebene.

<div class="arch-section__fig">
<div class="diagram">
<div class="diagram__node"><b>VMware VCF-Stack</b><div class="diagram__chips"><span>Broadcom-Übernahme</span><span>Subscription-only</span><span>2-5× Verlängerung</span></div></div>
<div class="diagram__conn">Migration</div>
<div class="diagram__node diagram__node--brand"><b>Ænix Public Cloud Platform</b><div class="diagram__chips"><span>Cozystack</span><span>KubeVirt</span><span>Cilium</span><span>Apache 2.0</span></div></div>
<div class="diagram__conn">ermöglicht</div>
<div class="diagram__node"><b>sicherer VMware-Ausstieg</b><div class="diagram__chips"><span>eigene Hardware</span><span>DORA</span><span>NIS2</span></div></div>
</div>
</div>

> **Passt zu:** **[Ænix Public Cloud Platform](/de/produkte/public-cloud-platform/)** für Hosting-Anbieter und große Betreiber (häufigster Auslöser 2026 — der Ausstieg aus VMware Cloud Director); **[Ænix Private Cloud Platform](/de/produkte/private-cloud-platform/)** für regulierte Unternehmen (VCF-Ausstieg). Kostenlose [VMware-Migrations-Checkliste →](/de/ressourcen/vmware-migrations-checkliste/).

Ænix ist das Unternehmen hinter Cozystack. Wir bauen die Plattform, betreiben Produktionsbereitstellungen für Service Provider, Banken und Telekommunikationsbetreiber und stellen das Migrations-, Support- und Betriebsmodell bereit, das einen sicheren VMware-Ausstieg ermöglicht.

Verfügbar in der gesamten DACH-Region. Deutschsprachiges Vertriebs- und Support-Team.

<div class="cta-row">
  <a class="cta-primary" href="/de/kontakt/?type=architecture-review">30-minütiges Architektur-Review buchen</a>
  <a class="cta-secondary" href="/de/migration/vmware/">VMware-Migration →</a>
</div>

<div class="trust-badges">
CNCF-Projekt · Kubernetes Certified Distribution · OpenSSF Best Practices · Apache 2.0
</div>

<!-- /BLOCK 1 -->

---

<!-- BLOCK 2: VENDOR LANDSCAPE -->

## Wo Cozystack im Markt der VMware-Alternativen steht

Der Markt ist nicht leer, und nicht jede Alternative löst dasselbe Problem. Die folgende Einordnung sagt, für welchen Bestand welches Modell gedacht ist:

| Anbieter | Modell des Stacks | Passt am besten zu |
|---|---|---|
| **Cozystack** | Open Source, Kubernetes-nativ, mandantenfähig | Hosting-Anbieter, regulierte Unternehmen, souveräne Clouds |
| Nutanix AHV | Proprietäre HCI auf zertifizierten Knoten | VM-zentrierte Unternehmensbestände, die alles von einem Hersteller wollen |
| Proxmox VE | Open Source, KVM und LXC | Mittelstand, Labore, kleine Bestände |
| Scale Computing HC3 | Appliance-HCI | Außenstellen und Edge-Standorte |
| OpenShift Virtualization | KubeVirt unter OpenShift-Lizenzierung | Häuser, die bereits Red-Hat-Kunde sind |
| OpenStack | Ausgereiftes Open-Source-IaaS | Teams mit eigenem Plattform-Engineering |
| Azure Local (früher Azure Stack HCI) | Hyper-V unter Microsoft-Lizenz, über Arc verwaltet | Microsoft-orientierte Organisationen |

Der direkte Vergleich aller Kandidaten steht in **[VMware-Alternativen 2026](/de/alternativen/vmware-alternativen/)**.

<!-- /BLOCK 2 -->

---

<!-- BLOCK 3: WHY -->

## Warum Teams im Jahr 2026 von VMware migrieren

<div class="grid-2x2">

**1. Unkalkulierbare Subscription-Ökonomie nach Broadcom**
VCF-Subscription-Pricing ersetzt ewige Lizenzierung. Verlängerungsangebote kommen mit 2× bis 5× früheren Ausgaben zurück.

**2. Vendor-Lock-in über den gesamten Stack**
vSphere, vSAN, NSX, vRealize, Horizon, vCD setzen einander voraus. Diese Integration ist nun die Lock-in-Oberfläche.

**3. Souveränität, Regulatorik und US-Vendor-Risiko**
DORA (seit Januar 2025) und NIS2 erfordern nachweisbare Kontrolle über kritische IKT-Dritte. Für europäische Banken, Telcos und staatliche Workloads ist die Abhängigkeit von einem US-Hypervisor-Stack ein dokumentiertes operatives Risiko.

**4. Roadmap-Geschwindigkeit**
KubeVirt, Cilium, LINSTOR und Flux entwickeln sich als Community-Projekte schneller weiter, als Broadcom es offen nachziehen kann.

</div>

{{< factoid number="2–5×" label="Preissteigerung bei der Verlängerung von VMware-VCF-Bündeln, beobachtet in Ænix-Migrationsprojekten seit der Broadcom-Übernahme" source="Verlängerungsangebote von Ænix-Kunden, 2024–2026; kein veröffentlichter Branchen-Benchmark" >}}

<!-- /BLOCK 3 -->

---

<!-- BLOCK 4: WHAT YOU GET -->

<div class="band-fullbleed band-fullbleed--tint">
<div class="band-fullbleed__inner">

## Was Cozystack stattdessen liefert

<div class="capability-grid">

- **Virtuelle Maschinen** — KubeVirt mit CDI, KVM-basiert, Live-Migration und Snapshots
- **Tenant-Kubernetes** — jeder Mandant bekommt einen eigenen, echten Cluster (Kamaji und Cluster API)
- **Verwaltete Datenbanken und Message-Systeme** — PostgreSQL, MariaDB, MongoDB, ClickHouse, Valkey, OpenSearch, Kafka, NATS, RabbitMQ, Qdrant, FoundationDB
- **S3-kompatibler Object-Storage** — SeaweedFS, für Backups, Trainingsdaten und Anwendungen
- **GPU as a Service** — NVIDIA vGPU für VMs, NVIDIA GPU Operator mit HAMi für fraktionales Sharing in Containern. Validiert auf A100, H100, H200, L40S, Blackwell
- **Mandantenfähige Steuerungsebene** — Tenant CRD, verschachtelte Mandanten, Quotas je Mandant
- **Observability ohne Zusatzlizenz** — VictoriaMetrics und VictoriaLogs
- **Backup und DR** — Velero, S3 und datenbankspezifisches PITR
- **Self-Service-Portal und WHMCS-Abrechnung** — produktionsreif, zwei Integrationsmodi

</div>

Läuft auf Ihrer eigenen Hardware, ohne Abhängigkeit von einer Public Cloud.

</div>
</div>

<!-- /BLOCK 4 -->

---

<!-- BLOCK 4b: WHERE VMWARE STILL WINS -->

## Wo VMware weiterhin die bessere Wahl ist

Ein Vergleich, der nur die eigenen Stärken aufzählt, ist keine Bewertung, sondern eine Battlecard. Die folgenden Punkte sind die, an denen VMware tatsächlich vorn liegt — und genau die, die Ihre Architekten im Review ansprechen werden.

**Betriebstiefe aus zwanzig Jahren.** DRS und Storage DRS verteilen Rechenlast und Kapazität automatisch neu, Fault Tolerance hält eine synchrone Schatteninstanz vor, Storage vMotion verschiebt Disks im laufenden Betrieb zwischen Arrays, vVols geben dem Storage-Array Objektgranularität je VM, EVC hält gemischte CPU-Generationen in einem Cluster kompatibel. KubeVirt migriert VMs live und platziert sie solide über den Kubernetes-Scheduler. An zwei Jahrzehnte ausgereifter Platzierungs- und Rebalancing-Logik reicht das nicht heran, und es ist unredlich, so zu tun als ob.

**Die zertifizierte Hardware-Kompatibilitätsliste.** VMware qualifiziert Server, HBAs, Netzwerkkarten und Firmware-Stände und leistet Support für eine gelistete Konfiguration. Cozystack läuft auf Standardhardware — was heißt, dass diese Qualifizierung zu Ihrer Aufgabe wird. Wer heute eine HCL-Zeile vorlegen kann, wenn ein Treiber unter Last Fehler wirft, gibt mit dem Wechsel etwas Reales auf.

**Das Backup- und DR-Ökosystem.** Veeam, Commvault, Rubrik, Zerto und der Site Recovery Manager sprechen VADP nativ. Jobs, Aufbewahrungsfristen, Wiederherstellungstests und Auditnachweise sind über Jahre auf dieser Schnittstelle aufgebaut worden. Velero mit S3 und datenbankspezifischem PITR erreicht dieselben Wiederherstellungsziele, aber mit anderen Werkzeugen: Jedes Runbook, jede Aufbewahrungsrichtlinie und jeder Prüfnachweis, der am VMware-Ökosystem hängt, wird dabei neu geschrieben. Das ist Projektaufwand mit eigenem Budget und eigener Abnahme, kein Nebeneffekt der Migration.

**ISV-Zertifizierung.** Manche Anwendungshersteller zertifizieren ausschließlich gegen ESXi. Ein Supportfall zur selben Anwendung auf KubeVirt wird dann abgelehnt — unabhängig davon, wie sauber die Plattform technisch läuft. Das betrifft typischerweise ERP-, Kernbanken- und klinische Systeme und hält im Zweifel eine ganze Kohorte auf VMware, bis der Hersteller nachzieht.

**Windows-Gäste mit harten Kanten.** VMs mit Measured Boot lassen sich nicht konvertieren, und Windows Server 2012 sowie 2012 R2 booten nach der Konvertierung nicht, weil `virtio-win` keine Treiber dafür mitbringt. Das sind Neuaufbauten, keine Migrationen — die Details stehen im **[VMware-Migrationspfad](/de/migration/vmware/)**.

**Der Umzug selbst kostet Auszeit.** Die warme Migration mit Konveyor Forklift kopiert Disks über VMware Changed Block Tracking im laufenden Betrieb, aber sie ist keine Live-Migration: Der RAM-Zustand wandert nicht mit, jede VM startet einmal neu. Für brauchbaren Durchsatz brauchen Sie außerdem ein VDDK-Image aus Ihrer eigenen Broadcom-Berechtigung — weder Ænix noch das Forklift-Projekt dürfen es weitergeben, die Lizenzfrage bleibt bei Ihnen.

Wenn Ihre Verlängerung finanziell tragbar ist, Ihr Team tief in vSphere steckt und weder Souveränitäts- noch Mandantenfähigkeitsanforderungen drücken, ist Bleiben die richtige Entscheidung. Das sagen wir Ihnen im Review auch so.

<!-- /BLOCK 4b -->

---

<!-- BLOCK 5: ARCHITECTURE MAPPING -->

<div class="band-fullbleed band-fullbleed--tint">
<div class="band-fullbleed__inner">

## VMware → Cozystack Architektur-Mapping

| VMware-Komponente | Cozystack-Äquivalent |
|---|---|
| vSphere / ESXi | KubeVirt auf Talos |
| vCenter | Kubernetes-API + Cozystack Dashboard |
| vSAN | LINSTOR/DRBD (Block), SeaweedFS (Objekt) |
| NSX | Cilium (eBPF) mit Kube-OVN |
| vCloud Director | Tenant CRD + Cozystack Dashboard |
| vRealize / Aria Operations | VictoriaMetrics + VictoriaLogs + Grafana |
| Site Recovery Manager | Velero + S3 + PostgreSQL PITR |
| Tanzu Kubernetes Grid | Tenant-Kubernetes (nativ, über Kamaji) |
| vRealize Automation | ApplicationDefinition + Portal-Katalog |
| VMware Cloud Foundation | Cozystack |

Zwei Ebenen werden dabei neu entworfen statt eins zu eins abgebildet: das **Netzwerk** (Cilium ist kein NSX) und das **Mandantenmodell** (das Tenant CRD ist keine vCD-Organisation). Beides gehört ins Architektur-Review, nicht in den Cutover.

</div>
</div>

<!-- /BLOCK 5 -->

---

<!-- BLOCK 6: MIGRATION -->

## Der Migrationspfad in sechs Schritten

<div class="engagement-steps">

  <div class="engagement-step">
    <div class="engagement-step__number">1</div>
    <h3 class="engagement-step__title">Bestand aufnehmen</h3>
    <p class="engagement-step__body">vSphere-, VCF- und vCD-Inventar, Abhängigkeiten, Zuschnitt der Workloads in Kohorten.</p>
  </div>

  <div class="engagement-step">
    <div class="engagement-step__number">2</div>
    <h3 class="engagement-step__title">Parallel aufbauen</h3>
    <p class="engagement-step__body">Cozystack auf neuer oder umgewidmeter Hardware, neben dem laufenden VMware-Bestand.</p>
  </div>

  <div class="engagement-step">
    <div class="engagement-step__number">3</div>
    <h3 class="engagement-step__title">VMs übertragen</h3>
    <p class="engagement-step__body">Konveyor Forklift steuert virt-v2v und KubeVirt CDI; VirtIO-Injektion und das Entfernen der VMware Tools laufen automatisch.</p>
  </div>

  <div class="engagement-step">
    <div class="engagement-step__number">4</div>
    <h3 class="engagement-step__title">Netz und Storage umschalten</h3>
    <p class="engagement-step__body">Cilium-Policies auf Parität bringen, LINSTOR/DRBD-Volumes übernehmen.</p>
  </div>

  <div class="engagement-step">
    <div class="engagement-step__number">5</div>
    <h3 class="engagement-step__title">DR prüfen und umstellen</h3>
    <p class="engagement-step__body">Das Velero-Runbook tritt an die Stelle des Site Recovery Manager, mit dokumentiertem Wiederherstellungstest.</p>
  </div>

  <div class="engagement-step">
    <div class="engagement-step__number">6</div>
    <h3 class="engagement-step__title">VMware abbauen</h3>
    <p class="engagement-step__body">Hardware umwidmen, sobald die Lizenzen auslaufen.</p>
  </div>

</div>

**Zeitlicher Rahmen.** Vorgeschaltet ist ein Platform Readiness Assessment über 14 oder 28 Tage. Die erste Produktionskohorte läuft 6 bis 12 Wochen nach Projektstart. Für den gesamten Bestand planen wir 7 bis 10 Monate bei unter 100 VMs, 10 bis 16 Monate bei 100 bis 500 VMs und 16 bis 25 Monate bei 500 bis 2.000 VMs. Der Takt richtet sich nach dem Ablauf Ihrer VCF-Verträge, nicht nach einem Wunschtermin.

Migrationen von OpenStack, CloudStack und Proxmox folgen demselben Ablauf, mit anderem Image-Import und anderer Netzzuordnung.

<!-- /BLOCK 6 -->

---

<!-- BLOCK 7: MULTI-TENANCY / SOVEREIGNTY -->

## Mandantenfähigkeit und Souveränität

- **Tenant CRD** — jeder Mandant ist eine Kubernetes-native Isolationsgrenze mit eigenen Quotas, eigener RBAC sowie eigenem Abrechnungs- und Observability-Scope
- **Verschachtelte Mandanten** — für Reseller und die Trennung von Geschäftsbereichen
- **Air-Gap-Installation** — unterstützt, dokumentiert, ohne Zusatzlizenz
- **Keine Phone-Home-Telemetrie** — Telemetrie ist Opt-in und standardmäßig abgeschaltet
- **Belege für DORA und NIS2** — Betriebsstabilität und Transparenz über IKT-Drittparteien. Ænix hält weder ISO 27001 noch SOC 2; die Plattform ist an diesen Rahmenwerken ausgerichtet und liefert die Nachweise, die Ihre eigene Zertifizierung braucht
- **Supportmodell ohne kubectl-Zugriff** — Ænix berät und prüft GitOps-Pull-Requests. Zugriff auf Ihre Produktionsumgebung brauchen wir dafür nicht

<!-- /BLOCK 7 -->

---

<!-- BLOCK 8: COMPARISON TABLE -->

## Cozystack und VMware im direkten Vergleich

| | VMware (VCF nach Broadcom) | Cozystack mit Ænix |
|---|---|---|
| **Lizenzmodell** | Nur Subscription, in VCF-Bündeln | Apache 2.0, optionale Ænix-Support-Stufe |
| **Verlängerungsrisiko** | 2- bis 5-fache Steigerungen in Ænix-Projekten beobachtet | Planbar; der Open-Source-Code bleibt unabhängig vom Vertrag nutzbar |
| **Compute** | vSphere / ESXi | KubeVirt (KVM-basiert) |
| **Storage** | vSAN | LINSTOR/DRBD (Block), SeaweedFS (Objekt) |
| **Netzwerk** | NSX | Cilium (eBPF, CNCF Graduated) mit Kube-OVN |
| **Mandantenfähigkeit** | vCloud Director | Tenant CRD (Kubernetes-nativ) |
| **Automatisierte Platzierung** | DRS, Storage DRS, Fault Tolerance | Kubernetes-Scheduler und Live-Migration; kein DRS-Äquivalent |
| **Hardware-Support** | Zertifizierte Kompatibilitätsliste | Standardhardware; die Qualifizierung liegt bei Ihnen |
| **Backup und DR** | Site Recovery Manager, VADP-Ökosystem | Velero + S3 + PostgreSQL PITR; Runbooks werden neu geschrieben |
| **Observability** | vRealize / Aria (separate Lizenz) | VictoriaMetrics + VictoriaLogs (enthalten) |
| **GPU für VMs** | NVIDIA vGPU auf vSphere | NVIDIA vGPU mit KubeVirt |
| **Souveränität** | Closed Source, US-Hersteller | Open Source, eigene Hardware, europäisches Support-Team |
| **Air-Gap-Installation** | Unterstützt (Zusatzlizenz) | Unterstützt (ohne Aufpreis) |
| **Preistransparenz** | Angebotsbasiert, nicht öffentlich | Preisliste auf aenix.io; Cozystack selbst ist kostenlos |

<!-- /BLOCK 8 -->

---

<!-- BLOCK 9: CUSTOMER PROOF -->

## Wer setzt Cozystack in der DACH-Region produktiv ein

Regionale Hosting-Anbieter, Rechenzentren und regulierte Unternehmen betreiben Cozystack heute in Produktion. Ein Teil davon ist öffentlich, der andere durch NDA geschützt; benannte Referenzen und Referenzgespräche stellen wir im Discovery-Call bereit, soweit die jeweilige Freigabe es zulässt.

{{< clients >}}

{{< quote-carousel >}}

Öffentlich gelistete Anbieter, die die Ænix Platform produktiv betreiben, sind GoHost.kz, HDReady, Beby Cloud, HiKube, UseTech, Cloupard und Cloudsy.

<!-- /BLOCK 9 -->

---

<!-- BLOCK 10: PRICING -->

## Preise

Cozystack selbst ist quelloffen und kostenlos zu betreiben. Die Ænix-Support-Stufen sind je 10 physische Nodes und Monat veröffentlicht: **Basic 1.250 $**, **Standard 3.000 $**, **Plus 5.500 $**, **Enterprise** nach RFP, jeweils bei Jahresvertrag. Die Pakete vervielfachen sich mit der Bestandsgröße und werden aufgerundet — 44 Nodes sind fünf Pakete.

Ænix Private Cloud Platform, Ænix AI Platform und Betreiber-Builds über mehrere Regionen werden nach RFP kalkuliert; Professional Services für Assessment, Aufbau und Schulung werden separat kalkuliert. Die vollständige Aufschlüsselung steht auf der **[Preisseite](/de/preise/)**.

Keine Abrechnung nach CPU, VM oder Core. Ihre Ausgaben bestehen aus Hardware plus einem Ænix-Engagement.

<!-- /BLOCK 10 -->

---

<!-- BLOCK 11: BOTTOM CTA -->

## Drei Wege, um zu starten

<div class="cta-cards">

**Architektur-Review (60 Minuten)**
Kostenfrei. Ihr Stack gegen das Cozystack-Mapping, danach eine schriftliche Einschätzung mit Workload-Kohorten und markierten Risiken.

**Platform Readiness Assessment (kostenpflichtig)**
14 oder 28 Tage. Tiefe Bestandsaufnahme, Zielarchitektur und Migrationsplan mit Zeitachse, Budget und Abnahmekriterien.

**Produktionspilot**
Eine Workload-Kohorte auf Cozystack-Hardware, die wir bereitstellen — parallel zu Ihrem VMware-Bestand und abgenommen von Ihren Anwendungsverantwortlichen.

</div>

<div class="cta-row">
  <a class="cta-primary" href="/de/kontakt/?type=architecture-review">Architektur-Review buchen</a>
  <a class="cta-secondary" href="/de/ressourcen/vmware-migrations-checkliste/">VMware-Migrations-Checkliste →</a>
</div>

- **[Vollständiger VMware-Ablösungs-Leitfaden](/de/blog/2026/05/vmware-ablosung-nach-broadcom/)**
- **[VMware-Migrationspfad](/de/migration/vmware/)**
- **[Cozystack und VMware im Detail](/de/vergleichen/cozystack-vs-vmware/)**
- **[VMware-Alternativen 2026](/de/alternativen/vmware-alternativen/)**

<!-- /BLOCK 11 -->

---

<!-- BLOCK 12: FOOTER TRUST STRIP -->

*Cozystack ist ein CNCF-Projekt (Sandbox seit Februar 2025). Kubernetes Certified Distribution. OpenSSF Best Practices. Ænix ist das Unternehmen dahinter.*

<!-- /BLOCK 12 -->
