---
title: "VMware Migration — VCF verlassen, ohne die Anwendung zu zerbrechen"
description: "Post-Broadcom-VMware-Migration ist ein geplantes Projekt, kein Notfall. Gut umgesetzt produziert es eine Plattform, die Sie kontrollieren, und 30-60%..."
related_pages: ["/de/alternativen/vmware-alternative", "/de/loesungen/cloud-repatriation", "/products/cozystack"]
language: "de"
hreflang_en: /migration/vmware/
direct_answer: |
  **Eine VMware-Migration nach Broadcom ist ein geplantes Projekt, kein Notfall: Inventarisierung des vSphere/VCF/vCD-Bestands, Zielarchitektur, Migration in Kohorten mit Parallel-Run und VMware-Decommission. Aenix führt diese End-to-End-Migration durch und empfiehlt als Standard Cozystack, eine offene CNCF-Plattform (Apache 2.0), die VMs und Container über eine Kubernetes-API mit KubeVirt betreibt. Sie richtet sich an Hosting-Anbieter, die VMware Cloud Director verlassen, sowie an regulierte Unternehmen, die VCF ablösen. Gut umgesetzt liefert sie eine selbst kontrollierte Plattform und 30-60% Kostenreduktion bei migrierten Workloads ohne CPU- oder Core-basierte Lizenzierung.**
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
  - label: "Erwartetes Ergebnis"
    value: "30-60% Kostenreduktion bei migrierten Workloads und eine selbst kontrollierte Plattform"
  - label: "Engagement"
    value: "Aenix Platform Editionen (ISP / Enterprise / Public Cloud) plus Migrationsservices; Preisstufen ab Basic 1.250 $/Mon. (10 Nodes)"
faq:
  - q: "Ist die VMware-Migration ein Notfall nach der Broadcom-Übernahme?"
    a: "Nein. Eine VMware-Migration sollte als geplantes Projekt behandelt werden, nicht als Notfall. Schlecht umgesetzt produziert sie operative Schulden und eine stockende Migration. Aenix sequenziert die Migration in Kohorten mit Parallel-Run, sodass Anwendungen während des Übergangs verfügbar bleiben."
  - q: "Worauf migriert Aenix VMware-Workloads?"
    a: "Standard-Empfehlung ist Cozystack, eine offene CNCF-Plattform unter Apache 2.0. Sie betreibt virtuelle Maschinen und Container über eine gemeinsame Kubernetes-API mit KubeVirt, nutzt Cilium (eBPF) für Networking und LINSTOR/DRBD für Storage. So laufen bestehende VMs weiter, während neue Workloads cloud-nativ entstehen."
  - q: "Wie viel kann eine VMware-Migration einsparen?"
    a: "Bei migrierten Workloads sind 30-60% Kostenreduktion realistisch. Ein wesentlicher Faktor ist die Apache-2.0-Lizenzierung ohne CPU- oder Core-basierte Gebühren. Das genaue Delta lässt sich vorab mit dem VMware-Kostenrechner modellieren — inklusive Jahresersparnis, 3-Jahres-Netto und Amortisation."
  - q: "Welche Aenix Platform Edition passt zu meiner Migration?"
    a: "Die ISP Edition passt zu Hosting-Anbietern, die VMware Cloud Director verlassen (häufigster 2026-Pattern). Die Enterprise Edition adressiert regulierte Unternehmen, die VCF ablösen. Die Public Cloud Edition richtet sich an große Betreiber."
  - q: "Was umfasst der Migrationsprozess konkret?"
    a: "Vier Schritte: Inventarisierung und Bewertung des vSphere/VCF/vCD-Bestands, Definition der Zielarchitektur (Cozystack als Standard), Migrations-Ausführung in Kohorten mit Parallel-Run und abschließendes VMware-Decommission."
  - q: "Bleibt die Plattform nach der Migration in meiner Kontrolle?"
    a: "Ja. Cozystack ist Open Source unter Apache 2.0 und ein CNCF-Projekt — kein Vendor-Lock-in, keine Core-basierte Lizenzierung. Aenix bietet die produktisierte Ænix Platform plus Services an, der zugrunde liegende Stack bleibt jedoch offen und selbst betreibbar."
---

<!-- BLOCK 1: HERO -->

**Post-Broadcom-VMware-Migration ist ein geplantes Projekt, kein Notfall. Gut umgesetzt liefert sie eine Plattform, die Sie kontrollieren, und eine Kostenreduktion von 30-60% bei den migrierten Workloads. Schlecht umgesetzt produziert sie operative Schulden und eine stockende Migration, die zum Notfall des nächsten Jahres wird. Der Unterschied liegt in strukturiertem Assessment, ehrlicher TCO-Modellierung und Engineers, die das bereits produktiv geliefert haben.**

Aenix führt End-to-End-VMware-Migrationen für Organisationen durch, die VCF verlassen. Dieselben Engineers, die [Cozystack](/products/cozystack/) gebaut haben und betreiben — die Zielplattform, die wir typischerweise empfehlen — arbeiten für Assessment, Sequenzierung und Implementierung mit Ihrem Team zusammen.

> **Passt zu:** **[Ænix Platform ISP Edition](/de/produkte/aenix-platform/isp-edition/)** für Hosting-Anbieter, die VMware Cloud Director verlassen (häufigstes Muster 2026); **[Enterprise Edition](/de/produkte/aenix-platform/enterprise-edition/)** für regulierte Unternehmen, die VCF verlassen; **[Public Cloud Edition](/de/produkte/aenix-platform/public-cloud-edition/)** für große Betreiber. Kostenlose [VMware-Migrations-Checkliste →](/de/ressourcen/vmware-migrations-checkliste/).

<div class="cta-row">
  <a class="cta-primary" href="/de/kontakt/">Discovery-Call buchen</a>
  <a class="cta-secondary" href="/de/blog/2026/05/vmware-migration-tools-strategie/">Zum Migrations-Playbook →</a>
</div>

<!-- /BLOCK 1 -->

---


---

<!-- BLOCK 2: WHO -->

## Wer führt 2026 eine VMware-Migration durch

Organisationen mit folgenden Auslösern:

- **Broadcom-Subscription-Verlängerung** — beobachtete Preiserhöhungen um das 2-5-Fache; Bruch von ELAs; verpflichtendes VCF-Bundling
- **Souveränitätsdruck** — DORA, NIS2 und sektorale Regeln zwingen kritische Workloads auf kundenkontrollierte Infrastruktur
- **KI-/GPU-Ökonomie** — nachhaltige Workloads, bei denen das VMware-GPU-Modell Lizenzkomplexität hinzufügt
- **Repatriierungs-Strategie** — VMware-on-Cloud-Workloads, die auf private Infrastruktur wandern
- **Modernisierung** — alter VCF-Bestand, bei dem der Upgrade-Pfad zugleich der Ausstiegspfad ist

Wenn zwei oder mehr davon zutreffen, verstärkt eine strukturierte Migration den Nutzen. Wenn die Verlängerung komfortabel ist und kein weiterer Auslöser besteht, ist "bleiben und optimieren" die ehrliche Empfehlung.

<!-- /BLOCK 2 -->

---

<!-- BLOCK 3: WHAT'S COVERED -->

## Was eine VMware-Migration von Aenix abdeckt

<div class="grid-2x2">

**1. Inventarisierung und Assessment**
vSphere-/VCF-/vCD-Inventar: Workload-Anzahl, OS-Mix, vSAN-Abhängigkeiten, NSX-Integrationen, Custom-Services, Multi-Site-Topologie. Workload-Klassifizierung: jetzt migrieren / später migrieren / bleiben / re-platformen.

**2. Zielarchitektur**
Zielplattform auf Kunden-Hardware. Cozystack als Standard (KubeVirt + Cilium + LINSTOR + Tenant CRD); andere Optionen, wo sinnvoll. Sizing, Kapazitätsmodell, Betriebsdesign.

**3. Migrations-Ausführung**
Kohorten-basierte Migration. KubeVirt CDI für die Image-Konvertierung. Automatisierte Windows-VM-Bereinigung. Network- und Storage-Cutover. Parallelbetrieb mit VMware bis zur Validierung. Cutover-Sequenzierung ausgerichtet an den VCF-Subscription-Abläufen.

**4. Decommission**
VMware-Decommission, sobald Kohorten abgeschlossen sind. Hardware wird wo möglich weiterverwendet. Letzte Verlängerung vermieden.

</div>

<!-- /BLOCK 3 -->

---

<!-- BLOCK 4: COMMON MIGRATION FAILURES -->

## Wo VMware-Migrationen häufig scheitern

<div class="gap-cards-2">

**Keine ehrliche TCO vor der Migration**
Die Migrations-Ökonomie sieht in der Theorie attraktiv aus; in der Praxis werden Hardware-Refresh, Kapazität des Plattform-Teams und die operative Lernkurve nicht eingerechnet. Das Projekt stockt, wenn sich die Ökonomie anders als angenommen entwickelt.

**Versuchter Big-Bang-Cutover**
Ein einzelnes Wochenende nach dem Motto "wir verschieben alles" funktioniert im Enterprise-Maßstab selten. Kohorten-basierte Migration mit validiertem Parallelbetrieb ist das funktionierende Muster.

**Unzureichende Zielarchitektur**
Workloads landen auf einer Private Cloud, die nicht für die Produktion konstruiert wurde. Operative Schulden häufen sich; das Team gibt der Migration die Schuld, obwohl das Problem die Reife der Zielplattform ist.

**Übersprungenes Network- und Storage-Redesign**
Networking und Storage auf Cozystack (oder einer Alternative) unterscheiden sich von NSX/vSAN. Das Redesign zu überspringen produziert operative Fragilität.

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

## Wie Aenix bei einer VMware-Migration vorgeht

Die Engagement-Struktur spiegelt unser **[Platform Readiness Assessment](/de/dienstleistungen/platform-readiness-assessment/)** mit VMware-Migrations-Schwerpunkt wider:

- **Assessment (14-28 Tage)** — VMware-Bestandsinventar, Zielarchitektur, Workload-Klassifizierung, Cutover-Sequenzierung, Phase-2-Roadmap.
- **Phase-2-Implementierung (6-18 Monate)** — Aenix-Engineers integriert mit Ihrem Team für die Migrations-Kohorten. Parallelbetrieb-Validierung. Wissenstransfer durchgängig.
- **Phase 3 (optional)** — verwalteter Cozystack-Betrieb nach Abschluss der Migration.

Für VMware-spezifische Zielführung siehe **[VMware Alternative](/de/alternativen/vmware-alternative/)** (Singular, herstellerfokussiert) oder die **[VMware-Alternativen-Liste](/de/alternativen/vmware-alternativen/)** (Plural, Marktüberblick).

<!-- /BLOCK 5 -->

---

<!-- BLOCK 6: WHY AENIX -->

## Warum Aenix speziell für die VMware-Migration

- **Cozystack-native Erfahrung.** Wir haben die Zielplattform gebaut, auf der viele Migrationen landen. Aufwandsschätzungen für die Implementierung sind an ausgelieferter Arbeit kalibriert.
- **Keine Hyperscaler-Voreingenommenheit.** Empfehlungen spiegeln technische Eignung wider, nicht Partner-Ökonomie. Wir sagen "in der Cloud bleiben", wenn es richtig ist.
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

{{< placeholder-logos >}}

> {{< placeholder-quote >}}

<!-- /BLOCK 8 -->

---

<!-- BLOCK 9: PRICING -->

<div class="pricing-cards-2">

### Assessment
****

### Implementierung
Time-and-Materials oder Fixed-Scope.
****

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

*Aenix ist das Team hinter Cozystack (CNCF-Projekt), und wir bieten Ænix Platform an — unser kommerzielles produktisiertes Angebot auf Basis von Cozystack.*
