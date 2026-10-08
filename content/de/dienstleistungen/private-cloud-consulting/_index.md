---
title: "Private Cloud Consulting — Engineers, die sie entwerfen, aufbauen und in Produktion betreiben"
seo_title: "Private Cloud Consulting: Design, Aufbau, Betrieb"
description: "Private Cloud Consulting für VMware-Ausstieg, Souveränitätsvorgaben und Repatriierung: Assessment über 14 oder 28 Tage, dann 3–12 Monate Aufbau."
related_pages:
  - /de/loesungen/data-sovereignty/
  - /de/loesungen/cloud-repatriation/
  - /de/dienstleistungen/platform-engineering/
  - /de/dienstleistungen/platform-readiness-assessment/
  - /de/produkte/private-cloud-platform/
  - /de/produkte/public-cloud-platform/
  - /de/produkte/cozystack/
language: "de"
quick_facts_style: "rows"
faq_style: "rows"
hreflang_en: /services/private-cloud-consulting/
direct_answer: |
  **Private Cloud Consulting ist eine Beratungs- und Umsetzungsleistung, bei der erfahrene Platform Engineers eine Private Cloud auf vom Kunden kontrollierter Infrastruktur entwerfen, aufbauen, dorthin migrieren und sie betreiben. Ænix erbringt sie als das Unternehmen, das Cozystack entwickelt hat und mitpflegt, ein Open-Source-CNCF-Projekt, das virtuelle Maschinen (über KubeVirt) und Container auf einer Kubernetes-API betreibt — mit Cilium-eBPF-Networking, LINSTOR/DRBD-Storage und Multi-Tenancy über das Tenant-CRD. Die Leistung passt zu Organisationen, die VMware nach den Änderungen durch Broadcom verlassen, Souveränitätsvorgaben erfüllen müssen, Workloads von Hyperscalern zurückholen oder private Infrastruktur für KI-Workloads dimensionieren. Ænix deckt Architekturdesign, Multi-Tenancy und Betriebsmodell, Migration und Übergabe in den Betrieb ab und empfiehlt Plattformen nach technischer Eignung statt nach Partnerprovisionen — ohne Lizenzkosten pro CPU und ohne Bindung an die Roadmap eines Herstellers.**

quick_facts:
  - label: "Was es ist"
    value: "Beratungs- und Umsetzungsleistung, bei der Ænix-Engineers eine vom Kunden kontrollierte Private Cloud entwerfen, aufbauen, dorthin migrieren und betreiben."
  - label: "Lizenz"
    value: "Apache 2.0 (keine Lizenzkosten pro CPU oder Core)"
  - label: "Status"
    value: "Cozystack ist ein CNCF-Projekt (Sandbox seit 28.02.2025; Antrag auf Incubation in der Due-Diligence-Prüfung)"
  - label: "Für wen"
    value: "Organisationen, die VMware nach Broadcom verlassen, Souveränitätsvorgaben unterliegen, Workloads von Hyperscalern zurückholen, eine Service-Provider-Cloud aufbauen oder private KI-Infrastruktur dimensionieren."
  - label: "Form der Zusammenarbeit"
    value: "Platform Readiness Assessment (14 oder 28 Tage), Umsetzung (3–12 Monate) oder Managed Private Cloud; vorab ein kostenloses 30-minütiges Discovery-Gespräch."
  - label: "Plattformgrundlage"
    value: "Cozystack: KubeVirt-VMs und Container auf einer Kubernetes-API, Cilium-eBPF-Networking, LINSTOR/DRBD-Storage, Multi-Tenancy über das Tenant-CRD."
  - label: "Herstellerposition"
    value: "Keine Bindung an Hyperscaler; OpenStack, OpenShift und Herstellerplattformen werden unterstützt, wenn sie besser passen als Cozystack."

faq:
  - q: "Müssen wir Cozystack für die Private Cloud einsetzen?"
    a: "Nein. Cozystack ist das Open-Source-Fundament, das Ænix für Multi-Tenant- und Souveränitätsszenarien empfiehlt, aber die Projekte erweitern auch OpenStack, OpenShift und Herstellerplattformen, wenn diese technisch besser passen. Die Empfehlungen folgen der technischen Eignung, nicht Partnerprovisionen."
  - q: "Worin unterscheidet sich Private Cloud Consulting von einer Beratung zur VMware-Migration?"
    a: "Die VMware-Migration ist ein möglicher Weg in die Private Cloud, wenn das Ziel privat ist. Ein Private-Cloud-Projekt deckt alle Wege zu einer vom Kunden kontrollierten Plattform ab: VMware-Ausstieg, Neuaufbau einer OpenStack-Umgebung, Repatriierung von Hyperscalern und Greenfield-Aufbau."
  - q: "Was umfasst ein Projekt?"
    a: "Vier Bereiche: Architekturdesign (Compute über KubeVirt, Storage mit LINSTOR (DRBD), Cilium-Networking, Identity, Observability, Backup/DR); Multi-Tenancy und Betriebsmodell mit Tenant-CRD, Quotas, RBAC und Audit; Migration und Integration; sowie die Übergabe in den Betrieb mit Runbooks und Wissenstransfer an Ihr Platform-Team."
  - q: "Wie lange dauert es und wie ist es aufgebaut?"
    a: "Am Anfang steht ein kostenloses 30-minütiges Discovery-Gespräch, danach ein Platform Readiness Assessment zum Festpreis über 14 oder 28 Tage, das eine Zielarchitektur und ein Kapazitätsmodell liefert. Optional folgt ein Umsetzungsprojekt über 3–12 Monate, in dem Ænix-Engineers in Ihrem Team arbeiten, und danach optional der Managed-Betrieb."
  - q: "Ist die Private-Cloud-Plattform an einen Hersteller gebunden oder pro CPU lizenziert?"
    a: "Nein. Das empfohlene Fundament, Cozystack, ist Open Source unter Apache 2.0 ohne Lizenzkosten pro CPU oder Core; die Plattform gehört also Ihnen, ohne Bindung an die Roadmap eines Herstellers. Ænix baut darauf drei kommerzielle Plattformen und verkauft Dienstleistungen, das zugrunde liegende Projekt bleibt aber offen."
  - q: "Private Cloud oder Hybrid Cloud — was sollten wir wählen?"
    a: "Die meisten modernen Installationen werden hybrid: ausgewählte Workloads laufen auf privater Infrastruktur, andere bleiben in der Public Cloud. Eine reine Private Cloud ist eine bewusste Entscheidung aus Souveränitäts- oder Kostengründen. Im Projekt prüfen wir, welches Modell zu Ihren Workloads, Vorgaben und Ihrem Budget passt."
---

<!-- BLOCK 1 -->


**Die Private Cloud ist zurück — getrieben durch den VMware-Ausstieg nach der Übernahme durch Broadcom, Souveränitätsvorgaben, die Wirtschaftlichkeit von KI-Workloads und FinOps-Druck auf Hyperscaler-Rechnungen. Laut dem Broadcom Private Cloud Outlook 2025 priorisieren 53 % der Organisationen inzwischen die Private Cloud für neue Workloads, und 69 % prüfen eine Repatriierung. Die Architekturentscheidungen reichen weiter als die Wahl eines Herstellers — sie prägen den Betrieb für das nächste Jahrzehnt.**

Ænix ist das Team hinter [Cozystack](/de/produkte/cozystack/), einem Open-Source-CNCF-Projekt — einer Kubernetes-nativen Private-Cloud-Plattform, die wir mit Service Providern, Banken und regulierten Unternehmen in Produktion betreiben. In unseren Private-Cloud-Consulting-Projekten arbeiten dieselben Engineers für Sie.

> **Passt zu:** **[Ænix Private Cloud Platform](/de/produkte/private-cloud-platform/)** für regulierte Unternehmen, die eine private oder hybride souveräne Cloud aufbauen; **[Public Cloud Platform](/de/produkte/public-cloud-platform/)** für große Betreiber, die eine eigene Plattform auf Public-Cloud-Niveau betreiben.

<div class="cta-row">
  <a class="cta-primary" href="/de/kontakt/">Gespräch vereinbaren</a>
  <a class="cta-secondary" href="/de/blog/2026/05/private-cloud-architektur-2026/">Leitfaden lesen →</a>
</div>

<div class="trust-badges">
Erfahrung mit Private Clouds in Produktion · Open-Source-Fundament · Keine Bindung an Hyperscaler · EU + Zentralasien</div>

<!-- /BLOCK 1 -->

---

<!-- BLOCK 2: WHO -->

## Wer Private Cloud Consulting braucht

Das Projekt passt, wenn:

- **Broadcom einen VMware-Ausstieg ausgelöst hat** — Neuaufbau auf einem neuen Fundament statt einer VCF-Subscription
- **Souveränitäts- oder Aufsichtsdruck besteht** — Daten müssen auf vom Kunden kontrollierter Infrastruktur liegen
- **die Kosten aus dem Ruder laufen** — die Public-Cloud-Rechnung ist nicht mehr planbar
- **die Wirtschaftlichkeit von KI-Workloads zählt** — dauerhafte Inferenz oder dauerhaftes Training, für das die Preismodelle der Hyperscaler nicht passen
- **ein Service-Provider-Modell geplant ist** — Aufbau eines Private-Cloud-Produkts für Kunden
- **Greenfield ansteht** — neue Infrastruktur mit Private Cloud als Architektur

Treffen zwei oder mehr Punkte zu, zahlt sich strukturiertes Private Cloud Consulting aus. Gibt es nur einen Anlass und einen kleinen Bestand, kann eine schlankere Leistung (nur ein Architektur-Review) ausreichen.

<!-- /BLOCK 2 -->

---

<!-- BLOCK 3: WHAT WE COVER -->

<div class="band-fullbleed band-fullbleed--tint">
<div class="band-fullbleed__inner">

## Was wir in einem Private-Cloud-Projekt abdecken

<div class="grid-2x2">

**1. Architekturdesign**
Compute-Schicht (Virtualisierung auf Basis von KubeVirt, Container-Orchestrierung), Storage (LINSTOR/DRBD über Piraeus), Networking (Cilium als Entsprechung zu NSX), Identity, Observability, Backup/DR. Entscheidungen werden mit benannten Trade-offs dokumentiert.

**2. Multi-Tenancy und Betriebsmodell**
Tenant-CRD, Quotas pro Tenant, RBAC, Audit. Im Service-Provider-Modell zusätzlich Kundenportal und Anbindung an die Abrechnung.

**3. Migration und Integration**
Von VMware, OpenStack, einem Hyperscaler oder einer Hybridumgebung — Migrationsplan, Reihenfolge der Umstellung, Integration mit den verbleibenden Cloud-Workloads.

**4. Übergabe in den Betrieb**
Runbooks, Rufbereitschaft, Kapazitätsplanung, Sicherheits- und Compliance-Aufstellung. Wissenstransfer an Ihr Platform-Team.

</div>

</div>
</div>

<!-- /BLOCK 3 -->

---

<!-- BLOCK 4: COMMON FAILURES -->

## Woran Private-Cloud-Projekte häufig scheitern

<div class="gap-cards-2">

**„Private Cloud aus der Box“ vom Hersteller**
Der Hersteller verkauft eine schlüsselfertige Private-Cloud-Appliance. Die Bindung ist strukturell; die Roadmap des Herstellers wird zu Ihrer Roadmap. Das Schlechteste aus beiden Welten: Kosten für den Hardwaretausch plus Herstellerlizenzen.

**Eigenbau auf Standardhardware**
Das Team baut die Private Cloud aus Open-Source-Komponenten, ohne die Betriebsdisziplin, die Hyperscaler über ein Jahrzehnt entwickelt haben. Self-Service funktioniert nicht; technische Schulden im Betrieb wachsen.

**Architektur auf einen einzigen Anlass optimiert**
Für den VMware-Ausstieg gebaut, aber die KI-Workloads des nächsten Jahres nicht bedacht. Für Souveränität gebaut, aber die Kosten nicht berücksichtigt. Für Kosten gebaut, aber die Souveränität außer Acht gelassen. Ein späterer Umbau ist teuer.

**Zu wenig Kapazität im Platform-Team**
Die Private Cloud steht; das Platform-Team ist aber so groß wie das Team, das früher VMware betrieben hat. Die Betriebsschulden wachsen, das Team brennt aus, und die Private Cloud wird zum nächsten Notfall.

</div>

<!-- /BLOCK 4 -->

---

<!-- BLOCK 5: HOW WE ENGAGE -->

## So arbeitet Ænix

<div class="arch-section__fig">
<div class="diagram">
<div class="diagram__node"><b>Discovery-Gespräch</b><div class="diagram__chips"><span>Kostenlos</span><span>30 Min.</span></div></div>
<div class="diagram__conn">definiert</div>
<div class="diagram__node"><b>Readiness Assessment (14 oder 28 Tage)</b><div class="diagram__chips"><span>Zielarchitektur</span><span>Kapazitätsmodell</span></div></div>
<div class="diagram__conn">steuert</div>
<div class="diagram__node"><b>Umsetzung (3–12 Monate)</b><div class="diagram__chips"><span>Gemeinsamer Aufbau</span><span>Multi-Tenancy</span><span>Übergabe</span></div></div>
<div class="diagram__conn">liefert</div>
<div class="diagram__node diagram__node--brand"><b>Private Cloud auf Cozystack</b><div class="diagram__chips"><span>KubeVirt-VMs</span><span>Container</span><span>Eine Kubernetes-API</span></div></div>
</div>
</div>

- **[Platform Readiness Assessment](/de/dienstleistungen/platform-readiness-assessment/) (14 oder 28 Tage)** — Festpreis, Zielarchitektur, Kapazitätsmodell.
- **Umsetzungsprojekt (3–12 Monate)** — Ænix-Engineers arbeiten in Ihrem Team und bauen Fundament, Multi-Tenancy und Betriebsmodell auf. Wissenstransfer von Anfang an.
- **Managed Private Cloud** — für Organisationen, die die Plattform brauchen, aber keine Betriebskapazität haben.

Für eine breitere Bewertung siehe **[Platform Readiness Assessment](/de/dienstleistungen/platform-readiness-assessment/)**.

<!-- /BLOCK 5 -->

---

<!-- BLOCK 6: WHY AENIX -->

## Warum gerade Ænix

- **Keine Hyperscaler-Partnerschaft.** Bei einer Entscheidung für oder gegen die Private Cloud ist das der entscheidende Punkt: An unserer Marge ändert sich nichts, wenn die Antwort „bleiben Sie damit in der Public Cloud“ lautet — deshalb können wir sie auch geben.
- **Wir betreiben das Ziel selbst.** [Cozystack](/de/produkte/cozystack/) läuft in Produktion bei Service Providern und regulierten Unternehmen; das Kapazitätsmodell und der Personalbedarf für den Betrieb in unseren Empfehlungen stammen aus Rechnungen, die wir selbst bezahlt haben.

<!-- /BLOCK 6 -->

---

<!-- BLOCK 7: TIMELINE -->

| Wann | Was | Ergebnis |
|---|---|---|
| **Tag 0** | 30-minütiges Discovery-Gespräch (kostenlos) | Passung klären |
| **Phase 1: Platform Readiness Assessment (14 oder 28 Tage)** | Fokussiertes Projekt | Zielarchitektur, Kapazitätsmodell |
| **Phase 2: Umsetzung (3–12 Monate)** | Gemeinsamer Aufbau | Produktive Private Cloud, Runbooks, Wissenstransfer |
| **Phase 3: Betrieb (optional)** | Managed Services oder Eigenbetrieb | Dauerhaft tragfähige Private Cloud |

<!-- /BLOCK 7 -->

---

<!-- BLOCK 8: PROOF -->

{{< clients >}}

{{< quote-carousel >}}
Die Logos oben stehen für produktive Installationen der Ænix Public Cloud Platform. Namentliche Referenzen aus Projekten unter NDA nennen wir im Discovery-Gespräch.
<!-- /BLOCK 8 -->

---

<!-- BLOCK 10: FAQ -->

---

<!-- BLOCK 11: CTA -->

<a id="discovery"></a>
<div class="cta-row">
  <a class="cta-primary" href="/de/kontakt/">Gespräch vereinbaren</a>
</div>

- **[Private-Cloud-Architektur 2026](/de/blog/2026/05/private-cloud-architektur-2026/)** — vollständiger Leitfaden
- **[Cloud-Repatriierung](/de/loesungen/cloud-repatriation/)** — wenn Sie die Public Cloud verlassen
- **[Datensouveränität](/de/loesungen/data-sovereignty/)** — Anlass Souveränität
- **[Cozystack](/de/produkte/cozystack/)** — Open-Source-Fundament der Plattform

<!-- /BLOCK 11 -->

---

<!-- BLOCK 12: FOOTER -->

*Ænix hat Cozystack entwickelt und pflegt es mit — CNCF-Projekt, CNCF Certified Kubernetes Distribution, OpenSSF Best Practices.*

<!-- /BLOCK 12 -->
