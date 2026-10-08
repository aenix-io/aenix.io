---
title: "Souveräne Cloud fürs Gesundheitswesen — Datenresidenz & NIS2"
seo_title: "Souveräne Cloud Gesundheitswesen: Datenresidenz und NIS2"
description: "Souveräne Cloud fürs Gesundheitswesen: ausgelegt auf NIS2, DSGVO-Datenresidenz für Gesundheitsdaten, optionale Verschlüsselung und souveräne KI in der EU."
date: 2026-07-01
lastmod: 2026-07-01
page_type: "industry-landing"
language: "de"
quick_facts_style: "rows"
faq_style: "rows"
primary_keyword: "souveräne cloud gesundheitswesen"
secondary_keywords: ["gesundheitswesen cloud", "datensouveränität gesundheitswesen"]
related_pages:
  - /de/loesungen/data-sovereignty/
  - /de/loesungen/nis2-compliance/
  - /de/loesungen/sovereign-ai/
  - /de/branchen/oeffentlicher-sektor/
  - /de/produkte/private-cloud-platform/
  - /de/produkte/ai-platform/
  - /de/dienstleistungen/platform-readiness-assessment/
  - /de/ressourcen/nis2-compliance-checkliste/
  - /de/case-studies/sovereign-public-cloud/
hreflang_en: /industries/healthcare/
service:
  type: "Sovereign Cloud for Healthcare"
  areaServed: ["EU", "DACH"]
  audience: "Healthcare"
direct_answer: |
  **Eine souveräne Cloud fürs Gesundheitswesen ist eine Cloud-Plattform, auf der Patientendaten physisch innerhalb eines festgelegten Rechtsraums bleiben, auf Hardware laufen, die die Gesundheitseinrichtung besitzt oder direkt anmietet, und deren Betriebs-Stack auditierbare Open Source ist statt eines undurchsichtigen Hyperscaler-Dienstes. Das ist wichtig, weil Gesundheitsdaten nach DSGVO Artikel 9 zu den besonderen Kategorien personenbezogener Daten gehören und Gesundheitsdienstleister nach NIS2 (Anhang I) ein Sektor wesentlicher Einrichtungen sind. Ænix baut diese Plattformen auf Cozystack (CNCF-Sandbox-Projekt, Apache 2.0) auf der eigenen Hardware des Betreibers, sodass Datenresidenz und Audit-Trails Eigenschaften der Architektur sind und keine vertraglichen Zusagen. Sie eignet sich für Klinikverbünde, Krankenversicherer, Diagnostiklabore und Teams für medizinische KI in der EU und im DACH-Raum.**
quick_facts:
  - label: "Was es ist"
    value: "Eine Gesundheits-Cloud, in der Patientendaten und Audit-Trails unter der eigenen Kontrolle und im Rechtsraum der Einrichtung bleiben."
  - label: "NIS2-Anwendungsbereich"
    value: "Gesundheitsdienstleister sind in NIS2 (Richtlinie (EU) 2022/2555, Anhang I) als Sektor wesentlicher Einrichtungen aufgeführt."
  - label: "Datenklassifizierung"
    value: "Gesundheitsdaten sind besondere Kategorien personenbezogener Daten nach DSGVO Artikel 9 — ihre Verarbeitung erfordert eine spezifische Rechtsgrundlage und erhöhte Schutzmaßnahmen."
  - label: "Datenresidenz"
    value: "Workloads sind an benannte EU- bzw. DACH-Regionen auf eigener oder direkt angemieteter Hardware gebunden; keine standardmäßige grenzüberschreitende Replikation."
  - label: "Verschlüsselung / Schlüsselverwaltung"
    value: "Volume-Verschlüsselung (LUKS auf LINSTOR) lässt sich pro Storage Class optional aktivieren; das Schlüsselmanagement legen wir beim Aufbau gemeinsam mit Ihnen fest."
  - label: "Cozystack-Lizenz"
    value: "Cozystack ist Open Source unter Apache 2.0 — keine Lizenzkosten pro CPU, vollständige Auditierbarkeit der Control Plane."
  - label: "Projektablauf"
    value: "Platform Readiness Assessment zum Festpreis (14 oder 28 Tage), danach 3–12 Monate Aufbau je nach Umfang."
quick_facts_source: "[NIS2-Richtlinie (EU) 2022/2555, EUR-Lex](https://eur-lex.europa.eu/eli/dir/2022/2555/oj), [ENISA](https://www.enisa.europa.eu/topics/cybersecurity-policy/nis-directive)"
faq:
  - q: "Was ist eine souveräne Cloud fürs Gesundheitswesen?"
    a: "Eine Cloud-Plattform, auf der Patienten- und klinische Daten physisch innerhalb eines festgelegten Rechtsraums bleiben, die Infrastruktur der Gesundheitseinrichtung gehört oder direkt von ihr angemietet ist und der Software-Stack auditierbare Open Source ist. Krankenhäuser, Kliniken und Labore erhalten so nachweisbare Kontrolle über Gesundheitsdaten statt vertraglicher Zusicherungen eines Hyperscalers."
  - q: "Fallen Gesundheitsdienstleister unter NIS2?"
    a: "Ja. NIS2 (Richtlinie (EU) 2022/2555) führt den Gesundheitssektor — darunter Krankenhäuser sowie bestimmte Akteure aus Medizinprodukten und Pharma — in Anhang I unter den Sektoren wesentlicher Einrichtungen. Betroffene Organisationen unterliegen verbindlichen Pflichten zu Risikomanagement und Meldung von Sicherheitsvorfällen, mit Verantwortung auf Leitungsebene."
  - q: "Wie geht eine souveräne Cloud mit Gesundheitsdaten der besonderen Kategorien nach DSGVO um?"
    a: "Gesundheitsdaten sind besondere Kategorien personenbezogener Daten nach DSGVO Artikel 9 und brauchen daher eine spezifische Rechtsgrundlage und stärkere Schutzmaßnahmen. Eine souveräne Plattform bindet die Speicherung an eine benannte EU-Region, kann Volumes verschlüsseln (pro Storage Class optional aktivierbar) und erzeugt Audit-Logs, die die Einrichtung in ihren eigenen Speicher ausleiten kann. Residenz und Zugriffskontrollen lassen sich so gegenüber einer Aufsichts- oder Datenschutzbehörde belegen."
  - q: "Können wir medizinische KI auf Patientendaten betreiben, ohne sie an einen Hyperscaler zu senden?"
    a: "Ja. Die AI Platform führt GPU-Inferenz und -Training innerhalb desselben souveränen Perimeters aus, in dem die Daten liegen. Bildgebungsmodelle, klinisches NLP und Entscheidungsunterstützung verarbeiten Patientendaten so, ohne dass diese den Rechtsraum oder die Kontrolle der Einrichtung verlassen."
  - q: "Nennen Sie Referenzkunden aus dem Gesundheitswesen?"
    a: "Nein. Wir veröffentlichen keine Namen von Kunden aus dem Gesundheitswesen. Als architektonisches Nachweismuster teilen wir eine anonymisierte Fallstudie zu einer souveränen Public Cloud; Referenzen besprechen wir im Erstgespräch, soweit Kunden es erlauben."
  - q: "Wie läuft ein Projekt ab, und wie lange dauert es?"
    a: "Der Einstieg ist ein Platform Readiness Assessment zum Festpreis zu Souveränität, NIS2-Status, Kosten und Platform Engineering, geliefert in 14 oder 28 Tagen. Es liefert einen schriftlichen Bericht und eine Roadmap für die Umsetzung in Phase 2. Der Aufbau dauert danach typischerweise 3–12 Monate je nach Umfang."
---

<!-- BLOCK 1: HERO -->

**Krankenhäuser, Diagnostiklabore, Krankenversicherer und Teams für medizinische KI verarbeiten die sensibelsten personenbezogenen Daten der Wirtschaft unter den DSGVO-Pflichten für besondere Datenkategorien — und Gesundheitsdienstleister tragen zusätzlich die NIS2-Pflichten wesentlicher Einrichtungen. Die architektonische Antwort ist nicht „ein Gesundheits-SaaS in einer fremden Cloud“ — sondern eine souveräne Plattform, in der Datenresidenz und Audit-Trails Eigenschaften der Architektur sind. Ænix baut und betreibt diese Plattformen auf [Cozystack](/de/produkte/cozystack/), auf der eigenen Hardware der Einrichtung.**

Die AENIX s.r.o. ist für ihr eigenes ISMS nach ISO/IEC 27001:2022 zertifiziert ([Zertifikat](/de/compliance/iso-27001/)). Sicherheitsverantwortliche beginnen am besten mit dem [Leitfaden für CISOs](/de/fuer/ciso/).

> **Passende Plattformen:** **[Ænix Private Cloud Platform](/de/produkte/private-cloud-platform/)** als regulierte Cloud-Grundlage; **[AI Platform](/de/produkte/ai-platform/)** für KI in der medizinischen Bildgebung, klinisches NLP und Entscheidungsunterstützung auf Patientendaten. Kostenlose [NIS2-Compliance-Checkliste →](/de/ressourcen/nis2-compliance-checkliste/).

<div class="cta-row">
  <a class="cta-primary" href="/de/kontakt/">Gespräch vereinbaren</a>
  <a class="cta-secondary" href="/de/loesungen/data-sovereignty/">Datensouveränität →</a>
</div>

---

## Weshalb Gesundheitsteams zu uns kommen

Die vier häufigsten Einstiege:

- **Datensouveränität im Gesundheitswesen** — Patientenakten, Bildarchive und genomische Daten, die im Rechtsraum bleiben müssen. Siehe **[Datensouveränität](/de/loesungen/data-sovereignty/)**.
- **NIS2-Bereitschaft für den Gesundheitssektor** — Risikomanagement wesentlicher Einrichtungen, Meldung von Sicherheitsvorfällen und Kontrollen in der Lieferkette. Siehe **[NIS2-Compliance](/de/loesungen/nis2-compliance/)**.
- **Souveräne KI auf klinischen Daten** — Bildgebungsmodelle, klinisches NLP und Entscheidungsunterstützung, die keine Patientendaten an einen Hyperscaler senden dürfen. Siehe **[Souveräne KI](/de/loesungen/sovereign-ai/)**.
- **Abstimmung mit öffentlicher und regulierter Infrastruktur** — gemeinsame Muster mit öffentlichen Gesundheitsträgern und dem übrigen öffentlichen Sektor. Siehe **[Öffentlicher Sektor](/de/branchen/oeffentlicher-sektor/)**.

Die meisten Projekte verbinden zwei oder mehr dieser Auslöser.

---

## Warum das Gesundheitswesen eine souveräne Architektur braucht, kein Compliance-Häkchen

Gesundheitsdaten sind die am stärksten regulierte Datenklasse im europäischen Recht, und zwei Regelwerke treffen hier aufeinander.

<div class="arch-section__fig">
<div class="diagram">
<div class="diagram__node"><b>Patientendaten</b><div class="diagram__chips"><span>Besondere Kategorie nach DSGVO Artikel 9</span><span>Akten, Bildgebung, genomische Daten</span></div></div>
<div class="diagram__conn">gebunden an</div>
<div class="diagram__node diagram__node--brand"><b>Souveräne Plattform auf Cozystack</b><div class="diagram__chips"><span>Benannte EU-/DACH-Regionen</span><span>Eigene Hardware der Einrichtung</span><span>Optionale Volume-Verschlüsselung</span><span>Apache 2.0</span></div></div>
<div class="diagram__conn">erzeugt</div>
<div class="diagram__node"><b>Audit-Trails im Besitz der Einrichtung</b><div class="diagram__chips"><span>Gegenüber der Aufsicht belegbar</span><span>NIS2-Nachweise für wesentliche Einrichtungen</span></div></div>
</div>
</div>

**Daten besonderer Kategorien nach DSGVO.** Nach [Artikel 9 DSGVO](https://eur-lex.europa.eu/eli/reg/2016/679/oj) sind Gesundheitsdaten besondere Kategorien personenbezogener Daten. Ihre Verarbeitung ist untersagt, sofern nicht eine bestimmte Ausnahme greift, und selbst dann müssen Einrichtungen erhöhte technische und organisatorische Schutzmaßnahmen nachweisen — Verschlüsselung, Zugriffskontrolle und dokumentierte Residenz. Ein gewöhnlicher Hyperscaler-Vertrag behauptet diese Kontrollen; eine souveräne Plattform lässt Sie sie belegen, weil Infrastruktur und Audit-Logs in Ihrer Obhut bleiben.

**NIS2-Pflichten wesentlicher Einrichtungen.** Der Gesundheitssektor ist nach [NIS2 (Richtlinie (EU) 2022/2555)](https://eur-lex.europa.eu/eli/dir/2022/2555/oj), Anhang I, ein Sektor wesentlicher Einrichtungen. Betroffene Krankenhäuser und Gesundheitsorganisationen tragen verbindliche Pflichten zu Risikomanagement, Lieferkettensicherheit und Meldung von Sicherheitsvorfällen, mit Verantwortung auf Leitungsebene. Die [ENISA](https://www.enisa.europa.eu/topics/cybersecurity-policy/nis-directive) stellt die Referenzleitlinien bereit, auf denen die nationalen Behörden aufbauen. Eine Plattform, deren Control Plane auditierbare Open Source ist, verkürzt den Weg von „wir arbeiten sicher“ zu „hier ist der Nachweis“.

**Datenresidenz und Schlüsselverwaltung.** Auf einer souveränen Plattform sind Workloads an benannte EU- oder DACH-Regionen auf Hardware gebunden, die die Einrichtung besitzt oder direkt anmietet — es gibt keine standardmäßige grenzüberschreitende Replikation zu einer Muttergesellschaft in US-Besitz. Volume-Verschlüsselung (LUKS auf LINSTOR) lässt sich pro Storage Class optional aktivieren; das Schlüsselmanagement legen wir beim Aufbau gemeinsam mit Ihnen fest — was standardmäßig enthalten ist und was nicht, zeigen die [DSGVO-Nachweise](/de/compliance/dsgvo/).

**Souveräne KI auf Patientendaten.** Bei medizinischer KI prallen Souveränität und Wirtschaftlichkeit aufeinander: Bildgebungs- und klinische Sprachmodelle brauchen GPUs, aber die Daten dürfen den Perimeter nicht verlassen. Wer GPU-Inferenz und -Training auf derselben Plattform wie die Daten betreibt — statt Akten an eine externe KI-API zu schicken —, hält Daten besonderer Kategorien im Rechtsraum und erreicht trotzdem die Leistung moderner Modelle.

### Was das für die Systeme bedeutet, die Sie tatsächlich betreiben

Gesundheits-IT ist keine beliebige Infrastruktur, und die Plattform muss den Bestand dort abholen, wo er steht.

- **PACS und Bildarchiv.** Ein PACS ist ein Speicherproblem im klinischen Gewand: große unveränderliche Objekte, eine lange gesetzliche Aufbewahrungsfrist, Latenzen, die Radiologen bemerken, und eine DICOM-Schnittstelle, die alles spricht. Cozystack stellt dafür S3-kompatiblen Object Storage für die Archivebene und LINSTOR/DRBD-Block-Storage für die Online-Ebene bereit, beide im selben Cluster und innerhalb derselben Verschlüsselungsgrenze wie der übrige Bestand — die Bildgebung wird so kein separates Silo mit eigenem Backup-Konzept. Die Aufbewahrung wird pro Bucket festgelegt; der Object Storage wird nicht mit einem Public-Cloud-Mandanten geteilt, den Sie nicht benennen können.
- **Der DICOM- und HL7/FHIR-Pfad.** Modalitäten-Gateways, DICOM-Router, Integrationsengines und FHIR-Server sind meist langlebige, zustandsbehaftete Dienste, oft vom Hersteller als Appliance oder VM-Image geliefert, mit einer Support-Matrix, die ein bestimmtes Betriebssystem nennt. Sie laufen als KubeVirt-VMs auf derselben Plattform wie die containerisierten Dienste, im selben Netz, mit derselben Backup-Klasse — ohne einen zweiten Virtualisierungs-Stack, der neben Kubernetes lizenziert und betrieben werden muss.
- **Herstellergebundene klinische Anwendungen.** Jedes Krankenhaus hat eine Handvoll Anwendungen, die der Hersteller nur auf einem bestimmten Betriebssystem und einer bestimmten Hypervisor-Generation unterstützt. Genau diese Workloads blockieren eine reine Container-Plattform. Sie bleiben dauerhaft VMs und sind nicht länger der Grund, warum eine Modernisierung stockt.
- **Bildgebungs-KI direkt neben den Bilddaten.** Weil die Inferenz als Tenant-Workload im selben Cluster wie das Archiv läuft, liest ein Segmentierungs- oder Triage-Modell aus dem lokalen Object Storage statt aus einer anderswo hin verschickten Kopie — die GPU steht innerhalb des Perimeters, den die DSFA bereits abdeckt.

---

<div class="band-fullbleed band-fullbleed--tint">
<div class="band-fullbleed__inner">

## Wie Ænix mit Einrichtungen im Gesundheitswesen arbeitet

Das Standardprojekt läuft als **[Platform Readiness Assessment](/de/dienstleistungen/platform-readiness-assessment/)**, mit Arbeitspaketen, die auf das Gesundheitswesen zugeschnitten sind:

- **Arbeitspaket Souveränität und NIS2** — Erfassung der Datenresidenz, Schutzmaßnahmen nach DSGVO Artikel 9, Status von Verschlüsselung und Schlüsselverwaltung, Bereitschaft zur Meldung von Sicherheitsvorfällen, Prüfung der Lieferkettensicherheit.
- **Arbeitspaket Platform Engineering** — ein mandantenfähiges, Kubernetes-natives Fundament mit Isolation zwischen klinischen, administrativen und Forschungs-Workloads sowie Golden Paths für interne Entwicklungsteams.
- **Arbeitspaket KI-Infrastruktur** (wo relevant) — souveräne GPU-Architektur für Bildgebung, klinisches NLP und Modelle zur Entscheidungsunterstützung, die Patientendaten innerhalb des Perimeters verarbeiten müssen.
- **Arbeitspaket Kosten** — ein ehrliches TCO-Modell und Kandidaten für die Rückverlagerung dauerhaft laufender Workloads, bei denen sich die Public Cloud wirtschaftlich nicht mehr rechnet.

Ergebnis ist ein schriftlicher Bericht, ausgerichtet auf den Dialog mit der Aufsicht, sowie eine Roadmap für die Umsetzung in Phase 2.

</div>
</div>

---

## Nachweismuster

Wir veröffentlichen keine Namen von Kunden aus dem Gesundheitswesen. Als architektonisches Nachweismuster dient unsere anonymisierte **[Fallstudie zur souveränen Public Cloud](/de/case-studies/sovereign-public-cloud/)**: eine mandantenfähige Plattform über drei Rechenzentren mit vollständiger Datenresidenz — dasselbe strukturelle Muster, das ein Klinikverbund einsetzen würde. [Alle Fallstudien →](/de/case-studies/)

<div class="cta-row">
  <a class="cta-primary" href="/de/kontakt/">Gespräch vereinbaren</a>
</div>

---

*Ænix hat [Cozystack](https://cozystack.io) initiiert — ein CNCF-Sandbox-Projekt (Antrag auf Incubation in der Due-Diligence-Prüfung) unter Apache 2.0 — und pflegt es gemeinsam mit Maintainern anderer Unternehmen. Darauf aufbauend bietet Ænix drei Plattformen auf einer Engine an — Public Cloud, Private Cloud und AI —, die sich kombinieren lassen, statt einander auszuschließen.*
