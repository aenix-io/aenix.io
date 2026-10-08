---
title: "VMware-Migrations-Checkliste — kostenlos herunterladen"
description: "Kostenlose Checkliste mit 25 Punkten für den VMware-Ausstieg: Inventar, Abhängigkeiten, Netzwerk und Storage, Mandantenfähigkeit, GPU, Souveränität, Kosten."
type: "page"
related_pages:
  - /de/migration/vmware/
  - /de/alternativen/vmware-alternative/
  - /de/dienstleistungen/platform-readiness-assessment/
  - /de/produkte/public-cloud-platform/
  - /de/produkte/private-cloud-platform/
hreflang_en: /resources/vmware-migration-checklist/
language: "de"
quick_facts_style: "rows"
faq_style: "rows"
direct_answer: |
  **Die VMware-Migrations-Checkliste ist ein strukturiertes Discovery-Framework mit 25 Punkten für Organisationen, die einen Ausstieg aus VMware prüfen. Sie umfasst Workload-Inventar, Abhängigkeiten (vSAN, NSX, vCloud Director, vRealize), die Neugestaltung von Netzwerk und Storage, das Mandantenmodell, KI/GPU-Workloads, Souveränität und Compliance (DORA, NIS2), Betriebsbereitschaft und Kostenentwicklung. Sie richtet sich an Infrastruktur-Leads, Platform Engineers, CIO-Büros und Einkaufsteams in der frühen Bewertungsphase. Ænix nutzt dieselbe Checkliste im Platform Readiness Assessment (14 oder 28 Tage) und stellt sie kostenlos als PDF bereit. Als Ziel empfohlen wird Cozystack, das CNCF-Sandbox-Projekt unter der Apache-2.0-Lizenz, das Ænix initiiert hat und mitpflegt. Es betreibt VMs über KubeVirt und Container auf einer Kubernetes-API, mit Cilium-Networking und LINSTOR/DRBD-Storage.**
quick_facts:
  - label: "Was es ist"
    value: "Kostenlose Checkliste mit 25 Punkten zur Bewertung eines VMware-Ausstiegs: Inventar, Abhängigkeiten, Networking, Storage, Mandantenfähigkeit, KI/GPU, Souveränität und Kosten."
  - label: "Format"
    value: "Kostenloses PDF, 25 Punkte in acht Bereichen, Zustellung per E-Mail; typischerweise 1–3 Stunden zum Durcharbeiten"
  - label: "Zielgruppe"
    value: "Infrastruktur-Leads, Platform Engineers, CIO-Büros und Einkaufsteams in der frühen Bewertung eines VMware-Ausstiegs."
  - label: "Wie Ænix sie nutzt"
    value: "Sie bildet die strukturierte Discovery ab, die Ænix im Platform Readiness Assessment durchführt (Festpreis, 14 oder 28 Tage)."
  - label: "Zielplattform"
    value: "Cozystack — VMs über KubeVirt und Container auf einer Kubernetes-API, Cilium-Networking (eBPF), LINSTOR/DRBD-Storage, Mandantenfähigkeit über die Tenant-CRD."
  - label: "Compliance"
    value: "Die Punkte der Checkliste ordnen Entscheidungen zum VMware-Ausstieg der Ausrichtung an DORA und NIS2 sowie dem Schlüsselmanagement zu."
faq:
  - q: "Was deckt die VMware-Migrations-Checkliste ab?"
    a: "Acht Bereiche: Workload-Inventar und Kritikalitätsstufen, Abhängigkeiten (vSAN, NSX, vCloud Director, vRealize), Neugestaltung von Netzwerk und Storage, Mandantenmodell, KI/GPU-Workloads, Souveränität und Compliance, Betriebsbereitschaft und Kostenentwicklung."
  - q: "Was kostet die Checkliste?"
    a: "Nichts. Für den Download geben Sie eine E-Mail-Adresse an; Kosten oder Verpflichtungen entstehen nicht."
  - q: "Auf welche Plattform empfiehlt die Checkliste zu migrieren?"
    a: "Auf Cozystack, das CNCF-Sandbox-Projekt unter der Apache-2.0-Lizenz, das Ænix initiiert hat und gemeinsam mit Maintainern anderer Unternehmen pflegt. Es betreibt VMs über KubeVirt und Container auf einer Kubernetes-API, mit Cilium-Networking und LINSTOR/DRBD-Storage. Organisationen aus vCloud Director werden auf die Tenant-CRD von Cozystack abgebildet."
  - q: "Wie bildet die Checkliste die Mandantenfähigkeit von vCloud Director ab?"
    a: "Sie überträgt Organisationen aus vCloud Director auf die Tenant-CRD von Cozystack, das native Mittel für Mandantenfähigkeit. So können Hosting-Anbieter ihre bestehenden Mandantengrenzen auf der neuen Plattform abbilden."
  - q: "Gibt es eine tiefere Bewertung als die Checkliste?"
    a: "Ja. Die Checkliste unterstützt die interne Discovery; für TCO-Modellierung und Architekturdesign führt Ænix ein Platform Readiness Assessment zum Festpreis durch, 14 oder 28 Tage. Der anschließende Aufbau wird nach dem Assessment angeboten; Support-Stufen für selbst betriebenes Cozystack beginnen bei 1.250 USD pro 10 Nodes und Monat."
  - q: "Berücksichtigt die Checkliste KI- und GPU-Workloads?"
    a: "Ja. Sie stellt VMware vGPU und KubeVirt vGPU gegenüber, damit Teams mit GPU-gestützten KI/ML-Workloads planen können, wie diese nach dem VMware-Ausstieg auf eine Kubernetes-basierte Plattform übergehen."
---

**Eine Checkliste mit 25 Punkten für Organisationen, die einen Ausstieg aus VMware prüfen. Sie deckt Inventar, Abhängigkeiten, Networking, Storage, Mandantenfähigkeit, KI/GPU, Souveränität und Betriebsbereitschaft ab. Ænix setzt sie im Platform Readiness Assessment (14 oder 28 Tage) ein und stellt sie Teams in der frühen Bewertung kostenlos bereit.**

> **Passt zu:** **[Ænix Public Cloud Platform](/de/produkte/public-cloud-platform/)** für Hosting-Anbieter, die VMware Cloud Director verlassen; **[Private Cloud Platform](/de/produkte/private-cloud-platform/)** für regulierte Unternehmen, die VCF verlassen.

<div class="lead-magnet-form">
{{< pipedrive-form type="lead-magnet" resource="vmware-migration-checklist" >}}
<p class="lead-magnet-form__note">Checkliste herunterladen (PDF)</p>
</div>

---

## Was die Checkliste enthält

- **Inventar** — Anzahl der Workloads, Betriebssystem-Mix, Kritikalitätsstufen
- **Abhängigkeiten** — vSAN, NSX, vCD, vRealize, eigene Integrationen
- **Neugestaltung von Netzwerk und Storage** — was sich direkt übertragen lässt, was eine neue Architektur braucht
- **Mandantenmodell** — vCD-Organisationen auf die Tenant-CRD von Cozystack
- **KI/GPU-Workloads** — VMware vGPU vs. KubeVirt vGPU
- **Souveränität und Compliance** — Ausrichtung an DORA/NIS2, Schlüsselverwahrung
- **Betriebsbereitschaft** — Runbooks, Rufbereitschaft, Wissenstransfer
- **Kostenentwicklung** — TCO-Eingangsgrößen, auslaufende Commitments, Kandidaten für die Repatriation

<div class="arch-section__fig">
<div class="diagram">
<div class="diagram__node"><b>Checkliste mit 25 Punkten</b><div class="diagram__chips"><span>8 Bereiche</span><span>Kostenloses PDF</span></div></div>
<div class="diagram__conn">fließt ein in</div>
<div class="diagram__node diagram__node--brand"><b>Platform Readiness Assessment (14 oder 28 Tage)</b><div class="diagram__chips"><span>TCO-Modellierung</span><span>Architekturdesign</span></div></div>
<div class="diagram__conn">zielt auf</div>
<div class="diagram__node"><b>Zielplattform Cozystack</b><div class="diagram__chips"><span>VMs + Container auf einer Kubernetes-API</span></div></div>
</div>
</div>

---

## Wer sie nutzt

- Infrastruktur-Leads in der frühen Bewertungsphase
- Platform Engineers, die sich auf ein Assessment vorbereiten
- CIO-Büros, die eine Empfehlung für die Geschäftsleitung vorbereiten
- Einkaufsteams, die eine Ausschreibung (RFP) abstecken

---

## Nach dem Download

Die Checkliste gibt Ihnen die strukturierte Discovery an die Hand, die Ihre Organisation intern durchführen kann. Für eine tiefere Bewertung mit TCO-Modellierung und Architekturdesign siehe **[Platform Readiness Assessment](/de/dienstleistungen/platform-readiness-assessment/)** oder den **[VMware-Migrations-Hub](/de/migration/vmware/)**.

---

## Verwandte Ressourcen

- **[VMware-Migration](/de/migration/vmware/)** — wie die Migration selbst abläuft
- **[VMware-Alternative](/de/alternativen/vmware-alternative/)** — unsere Empfehlung
- **[Cozystack vs. VMware](/de/vergleichen/cozystack-vs-vmware/)** — der direkte Vergleich
- **[Die besten VMware-Alternativen 2026](/de/alternativen/vmware-alternativen/)** — Marktvergleich
- **[Cloud Repatriation](/de/loesungen/cloud-repatriation/)** — wenn der VMware-Ausstieg mit dem Ausstieg aus dem Hyperscaler zusammenfällt

---

*Ænix hat Cozystack (ein CNCF-Sandbox-Projekt) initiiert und pflegt es gemeinsam mit Maintainern anderer Unternehmen. Darauf aufbauend bietet Ænix drei Plattformen an: Public Cloud, Private Cloud und AI.*
