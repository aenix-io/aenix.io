---
title: "Migrations-Hubs"
description: "Migrationsleitfäden für den Wechsel von VMware, OpenStack, CloudStack, Proxmox, Nutanix, Virtuozzo und IBM Power auf eine offene Kubernetes-Plattform."
hero_subtitle: "Strategie, Architektur und Werkzeuge für die Migration von Altvirtualisierung"
language: "de"
page_type: "flag-page"
cascade:
  page_type: "migration-hub"
hreflang_en: /migration/
---

**Migrationsleitfäden für den Wechsel auf die Ænix Plattformen aus einem bestehenden Virtualisierungs- oder Cloud-Stack. Jeder Hub beantwortet dieselben drei Fragen: Was zieht mechanisch um, was muss neu entworfen werden, und wann ist Bleiben die richtige Entscheidung. Kohortenbasiert, im Parallel-Run validiert, mit [Konveyor Forklift](https://github.com/kubev2v/forklift) als VM-Transfer-Engine in der Plattform.**

<div class="cta-row">
  <a class="cta-primary" href="/de/kontakt/">Discovery-Call buchen</a>
  <a class="cta-secondary" href="/de/dienstleistungen/platform-readiness-assessment/">Platform Readiness Assessment →</a>
</div>

---

<div class="arch-section__fig">
<div class="diagram">
<div class="diagram__node"><b>Quell-Plattformen</b><div class="diagram__chips"><span>VMware</span><span>OpenStack</span><span>CloudStack</span><span>Proxmox</span><span>Nutanix</span><span>Virtuozzo</span><span>IBM Power</span></div></div>
<div class="diagram__conn">bewerten</div>
<div class="diagram__node"><b>Migrations-Pfad</b><div class="diagram__chips"><span>Readiness Assessment</span><span>Pilot-Kohorte</span><span>Rollende Migration</span></div></div>
<div class="diagram__conn">Cutover auf</div>
<div class="diagram__node diagram__node--brand"><b>Cozystack</b><div class="diagram__chips"><span>KubeVirt</span><span>LINSTOR</span><span>Cilium</span></div></div>
<div class="diagram__conn">liefert</div>
<div class="diagram__node"><b>Ergebnis</b><div class="diagram__chips"><span>Eine Steuerebene</span><span>Kleineres Betriebsteam</span></div></div>
</div>
</div>

## Migrations-Hubs im Überblick

### VMware

Der größte einzelne Migrationsauslöser 2026 — Broadcom-Subscription-Druck und Unsicherheit beim Lizenzmodell. Forklift führt kalte und warme Transfers von vSphere durch; die Seite beschreibt, was das konkret voraussetzt, einschließlich des VDDK-Lizenzproblems, das Sie erben, und der Gäste, die sich nicht konvertieren lassen.

- **[VMware-Migration](/de/migration/vmware/)** — Forklift-Mechanik, Kohorten-Sequenzierung, VCF-Decommission
- Kostenlose **[VMware-Migrations-Checkliste](/de/ressourcen/vmware-migrations-checkliste/)** — 25-Punkte-Readiness-Checkliste

**Typischer Ablauf:** Assessment (14-28 Tage) → Zielplattform aufbauen → Kohorten-Migration entlang der Subscription-Laufzeiten → Decommission. Eine Umgebung mit 100 VMs ist typisch in 8 bis 12 Monaten fertig.

### OpenStack

Ein betrieblicher Fall, kein technischer Überlegenheitsfall. Nova und Glance ziehen mechanisch um, weil beide Seiten KVM sind; Neutron ist ein echter Neuentwurf; Heat und Horizon werden neu gebaut; für Ironic gibt es keine Entsprechung.

- **[OpenStack-Migration](/de/migration/openstack/)** — Zuordnung Dienst für Dienst und die Teile, die nicht mitkommen

**Typischer Ablauf:** Architektur-Review → Parallel-Deployment → Kohorten-Migration nach Mandant → Decommission mit nachwandernder Hardware. 4 bis 12 Monate bei mittlerer Größe.

### CloudStack

CloudStack wird aktiv gepflegt — der Grund für den Wechsel ist die Breite des Servicekatalogs, nicht Verfall. Die Arbeit steckt im Neuentwurf des Virtual Routers, in der Neumodellierung der Mandanten und in der Abrechnungsanbindung.

- **[CloudStack-Migration](/de/migration/cloudstack/)** — Offerings, Virtual Router, Accounts, WHMCS

**Typischer Ablauf:** Architektur-Review → Parallel-Deployment → Abrechnung zuerst umhängen → Kohorten-Migration nach Kunde → Decommission und Katalog-Erweiterung.

### Virtuozzo

Drei 2026 umbenannte Produkte, die auf drei Arten aussteigen. Virtuozzo Infrastructure (ex-Hybrid Infrastructure) ist eine echte OpenStack-Installation und der einzige Pfad, auf dem Standardwerkzeuge greifen. Virtuozzo Application Management (ex-Application Platform, ex-Jelastic) ist eine PaaS, deren Export nur in eine andere Virtuozzo-Installation importiert — Re-Platforming, kein Lift-and-Shift. Virtuozzo Server (ex-Hybrid Server) ist außerhalb der Wartung, und seine System-Container-Linie hat keinen angekündigten Nachfolger.

- **[Virtuozzo-Migration](/de/migration/virtuozzo/)** — die drei Pfade getrennt, mit den Grenzen von ploop und Export benannt
- **[Virtuozzo vs Cozystack TCO](/tco-calculator/vs-virtuozzo/)** — Fünf-Jahres-Modell bei 50 / 200 / 1.000 VMs

### Proxmox

Für Proxmox-Installationen, die dem Ein-Organisations-Modell entwachsen sind — Mandantenfähigkeit, Servicekatalog über VMs hinaus, Abrechnung.

- **[Proxmox-Migration](/de/migration/proxmox/)** — Migrations-Patterns

**Typischer Ablauf:** produktisierter Installer → Workload-Migration über Standard-VM-Export/-Import → Entwurf des Mandantenmodells → Cutover. Unter 50 Hosts und einmandantig lautet die ehrliche Empfehlung: auf Proxmox bleiben.

### Nutanix

Lizenz- und Renewal-Druck bei HCI, dazu der Wunsch, VMs und Container auf einer Plattform statt auf zweien zu betreiben.

- **[Nutanix-Migration](/de/migration/nutanix/)** — Ausstieg aus AOS/AHV auf eine Kubernetes-native Plattform

### IBM AIX / Power

Die Migration mit dem längsten Horizont auf dieser Liste: ein Architekturwechsel von POWER auf Standard-x86, nicht bloß ein Hypervisor-Wechsel.

- **[IBM AIX / Power-Migration](/de/migration/ibm/)** — Power zu x86, Ausstieg aus Cloud Pak und OpenShift

### Cloud-Migrationsstrategie

Wenn der Auslöser kein einzelner Hersteller ist, beginnen Sie bei der Platzierung statt beim Ziel.

- **[Cloud-Migrationsservices](/de/migration/cloud/)** — Repatriation, Workload-Platzierung, Greenfield-Private-Cloud

---

<div class="band-fullbleed band-fullbleed--tint">
<div class="band-fullbleed__inner">

## Migrationswerkzeuge in der Plattform

Die Ænix Plattformen liefern [Konveyor Forklift](https://github.com/kubev2v/forklift) mit, das Kubernetes-Migrationstoolkit für Virtualisierung, als VM-Transfer-Engine. Konfiguriert wird über Kubernetes-Objekte — ein `Provider` für die Quellverbindung, `NetworkMap` und `StorageMap` für die Zuordnungen, ein `Plan`, den eine `Migration` ausführt. `virt-v2v` übernimmt die Gastkonvertierung: VirtIO-Treiber injizieren, VMware Tools entfernen, statische IPs und Laufwerksbuchstaben erhalten.

| Quelle | Forklift-Unterstützung | Hinweise |
|---|---|---|
| VMware vSphere (ab 6.5) | kalt und warm | Warm nutzt Changed Block Tracking. VDDK-Image für vSAN zwingend, sonst dringend empfohlen — und von Ihnen beizustellen, da es nicht weitergegeben werden darf. |
| oVirt / RHV | kalt und warm | Warm mit demselben Precopy- und Cutover-Modell. |
| OpenStack | nur kalt | Jede Instanz braucht ein echtes Abschaltfenster. |
| OVA-Dateien | nur kalt | Brauchbar für alles, was eine OVA exportieren kann. Hersteller-Appliances fallen nach der Konvertierung womöglich aus dem Support. |
| Entfernte KubeVirt-/OpenShift-Cluster | kalt | Cluster zu Cluster. |

Warme Migration ist keine Live-Migration: Der RAM-Zustand wandert nicht mit, ein Neustart bleibt. Was sie bringt, ist eine Auszeit in der Größe des letzten Deltas statt in der Größe einer vollständigen Disk-Kopie.

Forklift deckt ausschließlich die Disk- und Gast-Ebene ab. Mandantenmodell, Adressierung, Abrechnungsanbindung und Cutover-Reihenfolge sind Ingenieursarbeit — dafür gibt es Assessment und Kohortenplan. Für Quellen, die Forklift nicht abdeckt — Virtuozzo gehört dazu —, baut Ænix Engineering den Export- und Konvertierungspfad im Rahmen des Projekts.

**Zum Upstream-Stand:** Forklift ist heute Bestandteil der Ænix-Plattform. Die Arbeit, es im Open-Source-Cozystack als Self-Service-VM-Import für Mandanten verfügbar zu machen, befindet sich im Review und steckt noch in keiner veröffentlichten Cozystack-Version.

</div>
</div>

---

## Migrationsökonomie

Modellieren Sie die Fünf-Jahres-Kosten gegen Ihre aktuelle Plattform mit dem **[ROI- und TCO-Rechner](/de/roi-rechner/)**, oder rechnen Sie Migrationskosten gegen laufende Einsparungen und kumulierten Netto-Cashflow mit dem **[Cloud-Repatriation-TCO-Worksheet](/de/ressourcen/cloud-repatriation-tco-worksheet/)**. Die meisten Repatriation-Fälle erreichen bei dauerhaften Workloads nach 18 bis 36 Monaten den Break-even.

---

## Wie wir Migrationen begleiten

1. **Discovery-Call** — Passung, Umfang und Zeitrahmen klären
2. **Platform Readiness Assessment** (5-10 Tage, Festpreis vorab vereinbart) — Bestandsaufnahme, Zielarchitektur, Kohortenplan, Risikoregister. Auch der Punkt, an dem ein Nein noch günstig ist.
3. **Pilot-Kohorte** (3-6 Monate) — erste Kohorte mit Ænix-Ingenieuren im Team migriert; daraus entstehen die Runbooks für den Rest
4. **Rollende Migration** — Kohorte für Kohorte mit Parallel-Run-Validierung, Quell-Hardware wandert nach, sobald sie frei wird
5. **Decommission** — Abschaltung der Quellplattform nach Final-Validierung

---

*Siehe auch: [Alternativen →](/de/alternativen/) für den Vergleich Hersteller für Hersteller; [Lösungen →](/de/loesungen/cloud-repatriation/) für die Repatriation-Strategie; [Ressourcen →](/de/ressourcen/) für kostenlose Assessment-Tools.*
