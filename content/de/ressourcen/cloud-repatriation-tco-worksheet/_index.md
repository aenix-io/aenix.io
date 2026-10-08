---
title: "Cloud-Repatriation-TCO-Worksheet — Ihren Ausstieg durchrechnen (kostenloses PDF + CSV)"
seo_title: "Cloud-Repatriation-TCO-Worksheet (kostenlos, PDF + CSV)"
description: "Kostenloses Worksheet, das Ihre tatsächlichen Public-Cloud-Kosten in einen ehrlichen Fünf-Jahres-TCO-Vergleich mit Private Cloud überführt. PDF plus CSV."
type: "page"
related_pages: ["/de/loesungen/cloud-repatriation/", "/de/loesungen/cloud-kostenoptimierung/", "/de/cloud-rechner/", "/de/produkte/"]
hreflang_en: /resources/cloud-repatriation-tco-worksheet/
language: "de"
quick_facts_style: "rows"
faq_style: "rows"
direct_answer: |
  **Das Cloud-Repatriation-TCO-Worksheet ist ein kostenloses zehnseitiges Arbeitsblatt, geliefert als PDF plus editierbare CSV-Datei für Excel oder Google Sheets. Es vergleicht die tatsächlichen Gesamtkosten (TCO) eines Verbleibs in der Public Cloud mit denen einer Verlagerung von Workloads in eine Private Cloud. Es richtet sich an CFOs, FinOps-Teams, Platform-Engineering-Leads und CIOs, die eine Empfehlung für die Geschäftsleitung vorbereiten. Das Worksheet erfasst die oft übersehenen Kosten auf beiden Seiten: Egress beim Hyperscaler, ungenutzte und überdimensionierte Ressourcen, nicht ausgelastete Reserved Instances und Aufpreise für Managed Services auf der einen Seite; Hardware, Colocation, Storage, Backup, DR und Kapazität des Plattform-Teams auf der anderen. Ænix setzt es im Kosten-Arbeitspaket des Platform Readiness Assessment ein. Das Worksheet ist anbieterneutral; als Ziel empfiehlt Ænix in der Regel die Ænix Private Cloud Platform auf Basis von Cozystack, einem Open-Source-Projekt der CNCF (Sandbox) unter der Apache-2.0-Lizenz.**

quick_facts:
  - label: "Was es ist"
    value: "Kostenloses zehnseitiges TCO-Worksheet (PDF plus editierbare CSV), das Public-Cloud-Kosten mit einer Rückverlagerung in die Private Cloud vergleicht, einschließlich versteckter Kosten auf beiden Seiten."
  - label: "Format"
    value: "Kostenloses zehnseitiges PDF plus editierbare CSV für Excel oder Google Sheets, Zustellung per E-Mail"
  - label: "Zielgruppe"
    value: "CFOs und Finance Business Partner, FinOps-Teams, Platform-Engineering-Leads und CIOs, die einen Business Case für die Repatriation aufstellen."
  - label: "Was es modelliert"
    value: "Ist-Zustand der Public Cloud, Kosten der Zielarchitektur, Klassifizierung je Workload, Kostenverlauf über fünf Jahre und ein Entscheidungsrahmen: bleiben, teilweise oder vollständig zurückholen."
  - label: "Wie Ænix es nutzt"
    value: "Grundlage des Kosten-Arbeitspakets im Platform Readiness Assessment; vollständige TCO-Modellierung und Architekturdesign folgen als bezahltes Projekt."
  - label: "Zielplattform"
    value: "Ænix Private Cloud Platform (oder Ænix Public Cloud Platform, wenn Sie Cloud verkaufen) auf Basis von Cozystack: KubeVirt-VMs und Container auf einer Kubernetes-API, Cilium-Networking (eBPF), LINSTOR/DRBD-Storage, Mandantenfähigkeit über die Tenant-CRD. Das Worksheet selbst ist anbieterneutral und funktioniert für jedes Ziel."

faq:
  - q: "Was ist Cloud-Repatriation-TCO, und warum braucht es dafür ein eigenes Worksheet?"
    a: "Cloud-Repatriation-TCO ist der vollständige Kostenvergleich zwischen dem Verbleib von Workloads in der Public Cloud und ihrem Betrieb auf eigener Infrastruktur. Ein Worksheet ist nötig, weil beide Seiten Kosten verbergen: Cloud-Rechnungen unterschätzen Egress und ungenutzte Commitments, naive Private-Cloud-Schätzungen lassen Rechenzentrum, DR und Kapazität des Plattform-Teams weg. Die Vorlage legt beides offen."
  - q: "Ist das Worksheet wirklich kostenlos, und in welchem Format kommt es?"
    a: "Ja. Sie erhalten ein zehnseitiges PDF-Arbeitsblatt zum Ausdrucken und Ausfüllen sowie eine CSV-Datei mit denselben Positionen, die sich direkt in Excel oder Google Sheets öffnen lässt, damit Finance im gewohnten Werkzeug rechnen kann. Wo ein Wert aus anderen berechnet wird, nennt das Worksheet die Formel, sodass Sie ihn nachvollziehen können."
  - q: "Welche versteckten Kosten erfasst das Worksheet?"
    a: "Auf der Cloud-Seite: Egress, ungenutzte und überdimensionierte Ressourcen, nicht ausgelastete Reserved Instances und Savings Plans sowie Aufpreise für Managed Services der Hyperscaler. Auf der Zielseite: Hardware-Beschaffung und Erneuerung nach fünf Jahren, Colocation, Netzwerkbandbreite, Storage-Wachstum, Backup und DR, Werkzeuge für Identity und Observability sowie Kapazität für Platform Engineering."
  - q: "Muss ich jeden Workload zurückholen, damit es sich lohnt?"
    a: "Nein. Abschnitt 3 ordnet jeden Workload ein: jetzt zurückholen, später, bleiben oder neu bewerten, sortiert nach dem Netto-ROI der Rückverlagerung. Die größten Workloads tragen meist den Großteil des Kostenarguments, daher ist eine teilweise Repatriation ein legitimes und häufiges Ergebnis."
  - q: "Welches Ziel für die Repatriation empfiehlt Ænix?"
    a: "Eine Plattform auf Basis von Cozystack, einem CNCF-Sandbox-Projekt unter der Apache-2.0-Lizenz. Sie betreibt virtuelle Maschinen über KubeVirt und Container auf einer einzigen Kubernetes-API, mit Cilium-Networking (eBPF), LINSTOR/DRBD-Storage und Mandantenfähigkeit über die Tenant-CRD. Welche Plattform passt, hängt vom Käuferprofil ab: die Ænix Public Cloud Platform, wenn Sie Cloud an Kunden verkaufen, die Ænix Private Cloud Platform, wenn Sie sie für die eigene Organisation betreiben, und für GPU-lastige Umgebungen zusätzlich die Ænix AI Platform."
  - q: "Was passiert, nachdem ich das Worksheet heruntergeladen und ausgefüllt habe?"
    a: "Das Worksheet liefert die analytische Grundlage. Für vollständige TCO-Modellierung und Architekturdesign bietet Ænix Leistungen zur Cloud Repatriation und ein Platform Readiness Assessment an, in dessen Kosten-Arbeitspaket das Worksheet einfließt."
---

**Ein zehnseitiges Arbeitsblatt — PDF plus editierbare CSV für Excel oder Google Sheets —, das Ihre tatsächlichen Public-Cloud-Kosten in einen ehrlichen Fünf-Jahres-TCO-Vergleich mit einer Private Cloud überführt. Es modelliert versteckte Kosten (Egress, ungenutzte Ressourcen, nicht ausgelastete Commitments, Aufpreise für Managed Services der Hyperscaler) und realistische Kosten der Zielumgebung (Hardware, Rechenzentrum, Kapazität des Plattform-Teams, Betrieb). Ænix setzt es im Kosten-Arbeitspaket des Platform Readiness Assessment ein.**

> **Passt zu:** jeder **[Ænix-Plattform](/de/produkte/)** — das Ziel der Repatriation hängt vom Käuferprofil ab. Wenn Sie Cloud an Kunden verkaufen → [Public Cloud Platform](/de/produkte/public-cloud-platform/). Wenn Sie sie für die eigene Organisation betreiben → [Private Cloud Platform](/de/produkte/private-cloud-platform/). GPU-lastig in beiden Fällen → zusätzlich die [AI Platform](/de/produkte/ai-platform/).

<div class="lead-magnet-form">
{{< pipedrive-form type="lead-magnet" resource="cloud-repatriation-tco-worksheet" >}}
<p class="lead-magnet-form__note">TCO-Worksheet herunterladen (PDF + editierbare CSV)</p>
</div>

---

## Was im Worksheet enthalten ist

### Abschnitt 1: Ist-Zustand der Public Cloud
- Monatsrechnung aufgeschlüsselt nach Account, Service und Team
- Auslastung von Reserved Instances und Savings Plans
- Egress-Kosten (oft übersehen)
- Ungenutzte und überdimensionierte Ressourcen
- Analyse der Aufpreise für Managed Services der Hyperscaler
- Auslaufplan der Commitments

### Abschnitt 2: Zielarchitektur
- Hardware-Beschaffung und Erneuerung nach fünf Jahren
- Rechenzentrum / Colocation
- Netzwerkbandbreite und Egress zwischen Standorten
- Storage-Tiering und Wachstum
- Backup- und DR-Infrastruktur
- Werkzeuge für Identity, Observability und Plattform
- Benötigte Kapazität für Platform Engineering
- Softwarelizenzen, sofern zutreffend

### Abschnitt 3: Klassifizierung der Workloads
- Je Workload: jetzt zurückholen / später / bleiben / neu bewerten
- Sortiert nach Netto-ROI der Rückverlagerung
- Die größten Workloads tragen meist den Großteil des Kostenarguments

### Abschnitt 4: Kostenverlauf
- Jahr 0 bis Jahr 5, mit Break-even-Punkt
- Sensitivitätsanalyse für die Auslastungsannahmen
- Zusammenfassung auf CFO-Niveau

### Abschnitt 5: Entscheidungsrahmen
- Bleiben / teilweise zurückholen / vollständig zurückholen
- Risikofaktoren und Abhängigkeiten

<div class="arch-section__fig">
<div class="diagram">
<div class="diagram__node"><b>TCO-Worksheet</b><div class="diagram__chips"><span>PDF + editierbare CSV</span><span>5 Abschnitte</span></div></div>
<div class="diagram__conn">fließt ein in</div>
<div class="diagram__node diagram__node--brand"><b>Platform Readiness Assessment</b><div class="diagram__chips"><span>Kosten-Arbeitspaket</span></div></div>
<div class="diagram__conn">ergibt</div>
<div class="diagram__node"><b>Empfehlung für die Geschäftsleitung</b><div class="diagram__chips"><span>Bleiben / teilweise / vollständig zurückholen</span></div></div>
</div>
</div>

---

## Wer es nutzt

- CFOs und Finance Business Partner, die Cloud-Kosten bewerten
- Platform-Engineering-Leads, die den Umfang einer Repatriation abstecken
- CIOs, die eine Empfehlung für die Geschäftsleitung vorbereiten
- FinOps-Teams

---

## Nach dem Download

Das Worksheet liefert die analytische Grundlage. Für vollständige TCO-Modellierung und Architekturdesign siehe **[Cloud Repatriation](/de/loesungen/cloud-repatriation/)** oder das **[Platform Readiness Assessment](/de/dienstleistungen/platform-readiness-assessment/)**.

---

## Verwandte Ressourcen

- **[Cloud Repatriation](/de/loesungen/cloud-repatriation/)** — Details zum Vorgehen
- **[Cloud-Kostenoptimierung](/de/loesungen/cloud-kostenoptimierung/)** — ohne Architekturänderung
- **[VMware-Migrations-Checkliste](/de/ressourcen/vmware-migrations-checkliste/)** — verwandter Migrationsanlass

---

*Ænix hat Cozystack (ein CNCF-Sandbox-Projekt) entwickelt und pflegt es gemeinsam mit Maintainern anderer Unternehmen. Darauf aufbauend bietet Ænix drei Plattformen an: Public Cloud, Private Cloud und AI.*
