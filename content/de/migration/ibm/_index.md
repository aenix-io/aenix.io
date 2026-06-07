---
title: "IBM AIX / Power Migration — von Power zur offenen Cloud"
description: "Von IBM AIX/Power und Cloud Pak/OpenShift auf Commodity-x86 mit offener, Kubernetes-nativer Plattform migrieren. Ehrliche TCO, Oracle-sichere Architektur."
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
images: ["img/og/og-ibm-migration-de.png"]
language: "de"
hreflang_en: /migration/ibm/
related_pages:
  - /de/alternativen/openshift-alternative
  - /de/vergleichen/cozystack-vs-openshift
  - /de/vergleichen/cozystack-vs-openstack
  - /de/produkte/aenix-platform/enterprise-edition/
  - /de/branchen/finanzdienstleistungen/
  - /de/loesungen/data-sovereignty/
  - /de/dienstleistungen/platform-readiness-assessment
  - /de/produkte/cozystack
  - /de/preise/
service:
  type: "Platform Migration"
  areaServed: ["EU", "DACH", "MENA", "Zentralasien"]
  audience: "Financial Services"
direct_answer: |
  **Ein IBM-AIX/Power-Ausstieg verlagert Workloads von teurer POWER-Hardware, AIX/PowerVM-Lizenzen und IBM-SWMA/HWMA-Verträgen auf Commodity-x86 mit einer offenen, Kubernetes-nativen Plattform. Cozystack — Apache 2.0, CNCF-Projekt — betreibt VMs und Container über eine API (KubeVirt + Cilium + LINSTOR), sodass ein bestehendes Kubernetes-Team die Plattform ohne knappe AIX/Power-Spezialisten betreiben kann. Aenix führt den Ausstieg End-to-End durch: Bestandsaufnahme, Zielarchitektur, Oracle-sichere Auslegung, kohortenweiser Cutover, Decommissioning. Der entscheidende Hebel für Entscheider außerhalb der IT sind die Kosten: ein Modell für eine mittelgroße Bank zeigt rund 40% TCO-Reduktion über drei Jahre — durch x86 statt POWER, null Plattform-Lizenzkosten und das Verkleinern des teuren Oracle-auf-Power-Footprints.**
quick_facts:
  - label: "Was es ist"
    value: "End-to-End-Migration von IBM AIX/Power (und Cloud Pak/OpenShift) auf Commodity-x86 mit Cozystack"
  - label: "Lizenz"
    value: "Apache 2.0 — keine Lizenzierung pro Socket / pro Core / pro vCPU"
  - label: "Virtualisierung"
    value: "KubeVirt ersetzt PowerVM; VMs und Container auf einem Kubernetes-Scheduler"
  - label: "Typische TCO-Reduktion"
    value: "~40% über drei Jahre (illustratives Modell mittelgroße Bank; auf realen Daten neu berechnet)"
  - label: "Oracle"
    value: "Bleibt auf dedizierter Bare-Metal-Hardware und wird als externe App angebunden — lizenzsicher (Oracle wertet KubeVirt als Soft Partitioning)"
  - label: "Skalierungsreferenz"
    value: "Cozystack-Architektur in Produktion bis 800 Nodes / ~3,2 PB validiert"
  - label: "Engagement"
    value: "Assessment (5-10 Tage) → 4-wöchiger Pilot → Migration (Enterprise-Tier: vollständig von Aenix gemanagt)"
quick_facts_source: "[Cozystack-Doku](https://cozystack.io), [CNCF Landscape](https://landscape.cncf.io), [Oracle Partitioning Policy](https://www.oracle.com/assets/partitioning-070609.pdf)"
faq:
  - q: "Können wir AIX-Binaries per Lift-and-Shift auf x86 übernehmen?"
    a: "Nein. AIX läuft auf Big-Endian-POWER, x86 ist Little-Endian. AIX-Binaries laufen nicht unverändert auf x86 — Anwendungen müssen neu gebaut oder re-plattformiert werden. Moderne Microservices und die meisten Datenbank-/Middleware-Workloads ziehen sauber um; ältere Monolithen brauchen einen Re-Architecture-Schritt. Eine ehrliche Migration trennt diese beiden Klassen vorab."
  - q: "Verlieren wir die PowerVM-Live-Migration?"
    a: "Keine vergleichbare Fähigkeit geht verloren. KubeVirt bietet Live-Migration laufender VMs zwischen x86-Nodes, und die Plattform beherrscht geo-gestreckte Migration über Rechenzentren — dabei wird die Replikation nur für die migrierende VM auf synchron umgeschaltet, um die clusterweite Latenz nicht zu erhöhen."
  - q: "Wir sind von Oracle Database abhängig. Bricht Kubernetes die Oracle-Lizenzierung?"
    a: "Nur wenn Sie Oracle im Cluster betreiben. Oracle wertet Kubernetes und KubeVirt als Soft Partitioning und akzeptiert sie nicht zur Begrenzung des Lizenzumfangs — Oracle in einer Cluster-VM kann die Lizenzierung aller physischen Cores erzwingen, auf denen es landen könnte. Der empfohlene Weg hält produktives Oracle auf dedizierter, separat lizenzierter Bare-Metal-Hardware und bindet es als externe Anwendung über ein privates Netz an. Lizenzsicher — und so betreiben die meisten Banken Oracle ohnehin."
  - q: "Ist IBM Cloud Pak / OpenShift dieselbe Produktklasse?"
    a: "Nicht ganz. Cloud Pak ist ein proprietäres Daten-/AI-Software-Bundle auf Red Hat OpenShift, lizenziert pro Cluster nach vCPU-per-Pod mit eingeschränktem OpenShift-Anspruch — eine andere Klasse als eine VM-Cloud. Für einen OpenShift-spezifischen Vergleich siehe die [OpenShift-Alternative](/de/alternativen/openshift-alternative/) und [Cozystack vs OpenShift](/de/vergleichen/cozystack-vs-openshift/)."
  - q: "Kann unser bestehendes Team die Plattform betreiben, obwohl uns AIX-Spezialisten fehlen?"
    a: "Genau das ist der Sinn des Ziels. Die Plattform wird mit Kubernetes-/DevOps-Kompetenzen betrieben — dem Talentpool, den man tatsächlich einstellen kann — statt mit knappen AIX/PowerVM-Spezialisten. Aenix bietet Schulungen (Kubernetes Deep Dive) und im Enterprise-Tier vollständig gemanagte Migration und 24×7-Betrieb."
  - q: "Was kostet die Migration und wie läuft sie ab?"
    a: "Sie beginnt mit einem festpreisbasierten Platform Readiness Assessment (5-10 Tage) und einem optionalen 4-wöchigen Piloten, der auf das erste Support-Jahr angerechnet wird. Der Migrations-Support skaliert nach Tier: Dokumentation (Basic), begleitet (Plus) oder vollständig von Aenix gemanagt (Enterprise) — der Tier, den Banken üblicherweise wählen. Siehe die [Preisseite](/de/preise/)."
  - q: "Läuft das air-gapped für einen regulierten Bankbetrieb?"
    a: "Ja. Air-Gap-Installation, White-Labeling, das Billing-/Chargeback-Modul, Backup und GPU-Sharing sind Teil des Enterprise-Angebots. Die Plattform ist on-prem-first und für souveräne, kundenkontrollierte Infrastruktur gebaut — siehe [Datensouveränität](/de/loesungen/data-sovereignty/) und [Finanzdienstleistungen](/de/branchen/finanzdienstleistungen/)."
---

<!-- BLOCK 1: HERO -->

**IBM-POWER-Hardware ist kapitalintensiv, AIX/PowerVM wird pro Socket lizenziert, und IBM-SWMA/HWMA-Verlängerungen summieren sich Jahr für Jahr — während AIX-Spezialisten immer schwerer zu finden sind. Ein IBM-Ausstieg verlagert diese Workloads auf Commodity-x86 mit einer offenen, Kubernetes-nativen Plattform, die Ihr bestehendes Team betreiben kann.**

Aenix führt IBM-AIX/Power-Migrationen End-to-End durch. Dieselben Ingenieure, die [Cozystack](/de/produkte/cozystack/) gebaut haben und betreiben — die Open-Source-Zielplattform, Apache 2.0, CNCF-Projekt — arbeiten mit Ihrem Team an Assessment, Sequenzierung und Umsetzung.

> **Passt zu:** **[Ænix Platform Enterprise Edition](/de/produkte/aenix-platform/enterprise-edition/)** für regulierte Banken und Unternehmen (Air-Gap, Billing, gemanagte Migration). Sie ersetzen speziell IBM Cloud Pak / OpenShift? Siehe die **[OpenShift-Alternative](/de/alternativen/openshift-alternative/)**.

<div class="cta-row">
  <a class="cta-primary" href="/contact/">30-minütiges Discovery-Gespräch buchen</a>
  <a class="cta-secondary" href="/de/preise/">Preise & Tiers ansehen →</a>
</div>

<!-- /BLOCK 1 -->

---

<!-- BLOCK 2: WER -->

## Wer 2026 einen IBM-Ausstieg durchführt

Ausgelöst durch:

- **IBM Power Systems (AIX) am End-of-Life** — ein Refresh bedeutet erneut einen kapitalintensiven POWER-Kauf oder den Ausstieg. Das AIX-End-of-Life-Fenster ist der natürliche Auslöser.
- **Steigende IBM-Kosten** — teure POWER-CapEx, AIX- + PowerVM-Lizenzierung pro Socket und IBM-SWMA/HWMA-Supportverträge Jahr für Jahr.
- **Oracle-auf-Power-Steuer** — Oracle hat auf POWER einen Core-Factor von 1,0 (Maximum). Jeder Nicht-Oracle-Workload auf POWER bläht die lizenzierbare Core-Zahl auf.
- **Knappe Spezialisten** — AIX/PowerVM-Expertise ist ein schrumpfender, teurer Talentpool; Kubernetes/DevOps nicht.
- **Souveränität und Sanktionsrisiko** — ein proprietärer Single-Vendor-Stack hat ein anderes Risikoprofil als eine offene, CNCF-geführte Plattform für staatliche und regulierte Institute.
- **Modernisierung** — ein Legacy-Bestand, bei dem der Upgrade-Pfad zugleich der Ausstiegspfad ist, oft begleitet vom Umstieg auf Microservices.

Treffen zwei oder mehr zu, verstärkt ein strukturierter Ausstieg den Nutzen. Ist ein POWER-Refresh bereits budgetiert und nichts anderes drückt, ist "bleiben und optimieren" die ehrliche Antwort.

<!-- /BLOCK 2 -->

---

<!-- BLOCK 3: UMFANG -->

## Was eine Aenix-IBM-Migration abdeckt

<div class="grid-2x2">

**1. Bestandsaufnahme und Assessment**
AIX/Power-Bestand: LPARs, Sockets und Cores, Firmware, PowerVM-Abhängigkeiten, Oracle-Footprint, Cloud-Pak/OpenShift-Nutzung. Workload-Klassifizierung: jetzt-neu-bauen / später-re-plattformieren / auf-Bare-Metal-belassen (Oracle) / abschalten.

**2. Zielarchitektur**
Zielplattform auf Commodity-x86. Cozystack als Standard — KubeVirt für VMs, Cilium (eBPF) für Networking, LINSTOR/DRBD auf ZFS für Storage, Tenant-CRD für Mandantenfähigkeit. Kapazitätsmodell, HA- und Geo-Design.

**3. Migrationsdurchführung**
Kohortenweise. Microservices und Container-Workloads zuerst; VMs via KubeVirt; Datenbanken re-plattformiert oder extern angebunden. Parallelbetrieb gegen den IBM-Bestand bis zur Validierung. Live-Migration und Geo-Stretch übernimmt die Plattform.

**4. Decommissioning**
POWER-Frames werden außer Betrieb genommen, sobald Kohorten abgeschlossen sind; AIX/PowerVM- und IBM-Supportverträge werden zurückgefahren. Oracle-Footprint auf dedizierte Hosts verdichtet.

</div>

**Ehrlicher Scoping-Hinweis — Endianness.** AIX ist Big-Endian auf POWER; x86 ist Little-Endian. Es gibt kein Binary-Lift-and-Shift. Moderne Microservices und Standard-Datenbank-/Middleware ziehen sauber um; Legacy-Monolithen brauchen einen Re-Architecture-Schritt. Wir trennen beide Klassen im Assessment, statt es mitten im Cutover zu entdecken.

<!-- /BLOCK 3 -->

---

<!-- BLOCK 4: ÖKONOMIE -->

## Die Ökonomie: Cozystack vs IBM

Für Entscheider außerhalb der IT zählt die Sprache der Kosten. Das folgende Modell ist ein illustratives List-Price-Szenario für eine mittelgroße Bank (~500 Mitarbeitende), die den Teil der Workloads verlagert, der POWER verlassen kann (Microservices, VMs, Nicht-Oracle-Datenbanken), über einen Drei-Jahres-Horizont. Die Zahlen sind Größenordnungen und werden im Assessment auf realen Bestandsdaten neu berechnet.

| Position (3 Jahre) | IBM / AIX / Power | Cozystack (x86) |
|---|---|---|
| Hardware (CapEx) | 200.000 $ — Refresh 2 POWER-Server | 90.000 $ — 6 Commodity-x86-Nodes |
| OS-/Plattform-Lizenzen | 40.000 $ — AIX + PowerVM | 0 $ — Apache 2.0 |
| Support (3 Jahre) | 180.000 $ — IBM SWMA/HWMA | 198.000 $ — Ænix Plus (24×7, Enterprise-Module, Schulung, Migrationsbegleitung) |
| Oracle (Lizenz + Support) | 300.000 $ — auf geteiltem POWER (Core-Factor 1,0) | 120.000 $ — auf minimalen dedizierten Footprint isoliert |
| Installation + Migration + Schulung | — | 0 $ — Installation bei Subscription inklusive; Migration & Schulung im Tier enthalten |
| **Gesamt (3 Jahre)** | **720.000 $** | **408.000 $** |

{{< factoid number="~40%" label="illustrative TCO-Reduktion über drei Jahre — durch Commodity-x86 statt POWER, null Plattform-Lizenzkosten und Verkleinern des Oracle-auf-Power-Footprints" source="Aenix-TCO-Modell, Szenario mittelgroße Bank, List-Price-Größenordnung" >}}

Die Ænix-Subscription ist vergleichbar mit der reinen IBM-Maintenance, enthält aber bereits 24×7-Support, Enterprise-Module, Installation, Schulung und Migration — ohne separate Einmalgebühren. Rechnen Sie Ihre eigenen Zahlen mit dem **[ROI-Rechner](/de/preise/)** oder in einem **[Discovery-Gespräch](/contact/)**.

<!-- /BLOCK 4 -->

---

<!-- BLOCK 5: ORACLE -->

## Oracle: die Lizenzfalle, die es zu vermeiden gilt

Der teuerste Fehler bei einem Power-zu-Kubernetes-Umzug ist, produktives Oracle im Cluster zu betreiben.

- **Oracle wertet Kubernetes und KubeVirt als Soft Partitioning.** CPU-Limits und Pinning verengen den Lizenzumfang nicht — "die Prozessoren aller Cluster-Nodes unterliegen der Oracle-Lizenzierung".
- **Lizenziert wird der Node, nicht der Pod.** Ein ganzer Worker-Node zählt, selbst wenn Oracle nur einen Bruchteil seiner Cores nutzt; eine KubeVirt-VM gilt nicht als von Oracle anerkanntes Hard Partitioning.
- **Der saubere Weg:** produktives Oracle auf dedizierter, separat lizenzierter Bare-Metal-Hardware halten und als **externe Anwendung** (Helm-Chart / Operator mit Verbindungspunkten und Credentials via External Secret Reference) über ein privates Netz anbinden. Tenant-Workloads erreichen es wie jeden Managed-Endpoint; die Datenbank wird nie in den Cluster gezogen.

Das entspricht der Praxis der meisten Banken und verdichtet den lizenzierbaren Footprint, sobald Nicht-Oracle-Workloads POWER verlassen. (Oracles Partitioning Policy ist "educational, not contractual" — das endgültige Modell mit Oracle und Ihrer Rechtsabteilung abstimmen.)

<!-- /BLOCK 5 -->

---

<!-- BLOCK 6: PLATTFORM-PROFIL -->

## Cozystack vs OpenStack vs IBM Cloud Pak

| Kriterium | Cozystack | OpenStack | IBM Cloud Pak / OpenShift |
|---|---|---|---|
| Was es ist | Offenes PaaS-Framework auf Kubernetes zum Cloud-Bau | IaaS — modulare Infrastruktur-Services | Proprietäres Daten-/AI-Software-Bundle auf Red Hat OpenShift |
| VM + Container | Eine API (KubeVirt + Container, ein Scheduler) | Getrennt: VMs via Nova, Container via Zun/Magnum | Container-zentriert; kein natives einheitliches VM+Container-Provisioning |
| Lizenz & Kosten | Apache 2.0; Software frei. Ænix-Support ab 1.250 $/Mon. (10 Nodes) | Apache 2.0; bezahlt wird Distro/Support | Proprietäre Subscription pro Cluster, vCPU-per-Pod-Metrik; eingeschränkter OpenShift-Anspruch |
| Vendor-Lock-in | Gering — API-first, CNCF-geführt (Lizenz kann nicht wechseln) | Mittel — auf Distro-Ebene | Hoch — proprietärer Stack + eingeschränktes OpenShift |
| Mandantenfähigkeit | Nativ (Tenant-Modell, eBPF-Isolation, Billing-Integration) | Nativ (Keystone, Projekte, Quotas) | Unterstützt (OpenShift-Namespaces + Zen) |
| On-Prem / Air-Gap | Ja | Ja | Ja (Operator-Catalog-Mirroring) |

Cozystack ist ein [CNCF-Sandbox-Projekt](https://landscape.cncf.io) — seine Lizenz bleibt garantiert Apache 2.0 und entfernt das Risiko "Vendor ändert die Lizenz", das bei proprietären und quasi-offenen Produkten besteht. Für eine staatliche Bank unter einem Digitale-Souveränität-Mandat ist das ein grundlegend anderes Risikoprofil.

<!-- /BLOCK 6 -->

---

<!-- BLOCK 7: SKALIERUNG & STORAGE -->

## Storage und Skalierung auf x86

Die Zielarchitektur ist für lineares horizontales Wachstum ausgelegt — jeder x86-Node liefert sowohl Compute als auch einen Anteil verteilten Storage, ohne Re-Architecture:

- **Storage im Kernel.** LINSTOR orchestriert DRBD-Geräte pro Volume auf ZFS; DRBD läuft im Linux-Kernel — minimaler Overhead, schneller als Userspace-Lösungen wie Longhorn. Nach Rückkehr eines Nodes resynct DRBD per Bitmap nur die geänderten Chunks, nicht die ganze Platte — entscheidend bei großen Volumes.
- **Kein Engpass bei Skalierung.** Jede PVC ist ein eigenständiges DRBD-Gerät über den Cluster verteilt — 100 Volumes bedeuten 100 unabhängige Geräte, kein fettes geteiltes Gerät.
- **Netzwerk.** Cilium eBPF ersetzt kube-proxy durch O(1)-In-Kernel-Service-Lookup; die Latenz degradiert nicht mit wachsender Service-Zahl.
- **Geo-Stretch.** Cluster können sich über bis zu drei Rechenzentren erstrecken; die Replikation wird nur für eine migrierende VM synchron, gesteuert durch ein hartes RTT-Budget (~15 ms).
- **Bewährte Skalierung.** Die Architektur lief in Produktion bis **800 Nodes / ~3,2 PB** — reichlich Reserve gegenüber einem typischen Bankbestand.

<!-- /BLOCK 7 -->

---

<!-- BLOCK 8: ENGAGEMENT -->

## So arbeitet Aenix

- **Assessment (5-10 Tage)** — [Platform Readiness Assessment](/de/dienstleistungen/platform-readiness-assessment/): AIX/Power-Bestand, Zielarchitektur, Workload-Klassifizierung, Oracle-Plan, Cutover-Sequenzierung, Risiko-Register.
- **Pilot (4 Wochen)** — Cozystack als funktionierendes Framework gegen Ihre realen Anforderungen aufgesetzt; Erfolgskriterien vorab vereinbart. Der Pilot wird auf das erste Support-Jahr angerechnet.
- **Migration** — Kohorten-Durchführung mit Parallelbetrieb-Validierung. Im **Enterprise-Tier** wird die Migration vollständig von Aenix gemanagt; Legal/Procurement läuft über Ihre Vorlagen (Ausschreibungen, Formulare).
- **Betrieb (optional)** — gemanagter Cozystack-Betrieb, 24×7, nach dem Cutover.

Eine wiederkehrende Praxis-Idee: die Plattform auf den am End-of-Life freiwerdenden POWER-Servern aufsetzen (POWER unterstützt Linux) — als Live-Demonstration vor dem Commitment des breiteren Bestands.

<!-- /BLOCK 8 -->

---

<!-- BLOCK 9: WARUM AENIX -->

## Warum gerade Aenix

- **Wir haben das Ziel gebaut.** Aufwandsschätzungen sind an ausgelieferter Arbeit kalibriert, nicht an Theorie.
- **Ehrlich bei den schweren Teilen.** Endianness, Oracle-Lizenzierung und Legacy-Re-Architecture werden im Assessment offengelegt — nicht mitten im Cutover entdeckt.
- **Von Ihrem Team betreibbar.** Die Plattform läuft auf Kubernetes-Kompetenzen, die Sie einstellen können — Schluss mit der Abhängigkeit von knappen AIX/PowerVM-Spezialisten.
- **Offenes Ziel.** Cozystack ist Apache 2.0 und CNCF-geführt — die Plattform, auf die Sie migrieren, gehört Ihnen, ohne Lizenz, die sich unter Ihnen ändern kann.
- **Teams in EU + Zentralasien.** Zeitzonenfreundlich für MENA- und GUS-Bestände; ausgerichtet an EU-Regulatorik.

<!-- /BLOCK 9 -->

---

<!-- BLOCK 10: ZEITPLAN -->

## Typischer Migrationszeitplan

| Wann | Was |
|---|---|
| Tag 0 | Discovery-Gespräch (kostenlos) — Eignung bestätigen |
| Tage 1-10 | Platform Readiness Assessment |
| Woche 2 | Executive-Readout — schriftlicher Plan + TCO auf realen Daten |
| Wochen 3-6 | 4-wöchiger Pilot gegen reale Workloads |
| Monate 2-6 | Workload-Kohorten migrieren; POWER-Frames werden außer Betrieb genommen |
| Monate 6-12 | IBM/AIX-Decommissioning; Oracle auf dedizierte Hosts verdichtet |

Bestandsgröße und der Legacy-/Microservice-Mix bestimmen den tatsächlichen Zeitplan; die Sequenzierung wird im Assessment festgelegt.

<!-- /BLOCK 10 -->

---

<!-- BLOCK 11: PROOF -->

## IBM-Migrationen, die wir begleitet haben

{{< placeholder-logos >}}

> {{< placeholder-quote >}}

<!-- /BLOCK 11 -->

---

<!-- BLOCK 12: FAQ — automatisch aus `faq:` Frontmatter gerendert -->

---

<!-- BLOCK 13: CTA -->

<a id="discovery"></a>

<div class="cta-row">
  <a class="cta-primary" href="/contact/">30-minütiges Discovery-Gespräch buchen</a>
  <a class="cta-secondary" href="/de/dienstleistungen/platform-readiness-assessment/">Mit einem Assessment starten →</a>
</div>

- **[OpenShift-Alternative](/de/alternativen/openshift-alternative/)** — Cloud Pak / OpenShift ersetzen
- **[Cozystack vs OpenShift](/de/vergleichen/cozystack-vs-openshift/)** — direkter Vergleich
- **[Enterprise Edition](/de/produkte/aenix-platform/enterprise-edition/)** — schlüsselfertig für regulierte Banken
- **[Finanzdienstleistungen](/de/branchen/finanzdienstleistungen/)** — Branchenkontext
- **[Datensouveränität](/de/loesungen/data-sovereignty/)** — offene, kundenkontrollierte Infrastruktur
- **[Cozystack](/de/produkte/cozystack/)** — die Open-Source-Zielplattform

<!-- /BLOCK 13 -->

---

*Aenix ist das Team hinter Cozystack (CNCF-Projekt) und bietet die Ænix Platform — unser kommerzielles, produktisiertes Angebot auf Basis von Cozystack.*
