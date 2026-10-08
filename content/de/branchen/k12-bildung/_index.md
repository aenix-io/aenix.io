---
title: "Cloud-Plattform für die Schulbildung (K-12) — wann souveräne Infrastruktur zu Schulträgern passt"
seo_title: "Souveräne Cloud für Schulträger (K-12): wann sie passt"
description: "Die meisten Schulträger sind mit Managed Services gut bedient. Ausnahmen: Souveränitätsvorgaben, Trägerverbünde und KI auf Schülerdaten. Hier steht, wann."
related_pages:
  - /de/branchen/universitaeten/
  - /de/produkte/private-cloud-platform/
  - /de/produkte/cozystack/
language: "de"
quick_facts_style: "rows"
faq_style: "rows"
hreflang_en: /industries/education-k12/
direct_answer: |
  **Cozystack ist eine Open-Source-Cloud-Plattform (Apache 2.0), die zu einem eng umrissenen Kreis von Fällen in der Schulbildung passt: große Schulträger und regionale Verbünde mit Souveränitätsvorgaben für Schülerdaten, EdTech-Teams, die ihr eigenes LMS, SIS oder Analytics aufbauen, sowie KI- oder Analytics-Workloads auf Schülerdaten, die nicht über Hyperscaler-Endpunkte laufen dürfen. Sie betreibt virtuelle Maschinen und Container über KubeVirt auf einer Kubernetes-API, mit Cilium-(eBPF-)Networking, LINSTOR/DRBD-Storage und Mandantenfähigkeit über die Tenant-CRD, die sich sauber auf Trägerzentrale, einzelne Schulen und einzelne Klassen abbilden lässt. Ænix hat Cozystack entwickelt und pflegt es gemeinsam mit Maintainern anderer Unternehmen; darauf liefert Ænix die Ænix Private Cloud Platform (Angebot per RFP) und Support. Für die meisten Schulträger bleiben Managed Services der Hyperscaler und gängige EdTech-Werkzeuge die bessere Wahl — und Ænix sagt das offen.**
quick_facts:
  - label: "Was es ist"
    value: "Souveräne, mandantenfähige Cloud-Infrastruktur für die Minderheit der Schulträger und Verbünde, die für Schülerdaten keine Managed Services von Hyperscalern nutzen können"
  - label: "Lizenz"
    value: "Apache 2.0 (keine Lizenzkosten pro CPU oder Core)"
  - label: "Status"
    value: "Cozystack ist ein CNCF-Projekt (Sandbox seit 28.02.2025; Antrag auf Incubation in der Due-Diligence-Prüfung)"
  - label: "Zielgruppe"
    value: "Große Schulträger, regionale Verbünde, Bildungsministerien und EdTech-Plattformteams unter Souveränitäts- oder Datenresidenzdruck"
  - label: "Compliance-Bezug"
    value: "Architektur, ausgerichtet an FERPA (USA) sowie DSGVO und nationalen Vorgaben (EU): optional aktivierbare Volume-Verschlüsselung, Audit-Logging, Residenz der Schülerdaten auf Infrastruktur unter Ihrer Kontrolle"
  - label: "Kernfunktion"
    value: "VMs und Container auf einer Kubernetes-API (KubeVirt), Cilium-eBPF-Networking, LINSTOR/DRBD-Storage, Mandantenfähigkeit über die Tenant-CRD zur Isolation von Träger, Schule und Klasse"
  - label: "Kommerzielles Angebot"
    value: "Ænix Private Cloud Platform plus Services, Angebot per RFP; Support für selbst betriebenes Cozystack ab 1.250 USD pro 10 Nodes und Monat"
faq:
  - q: "Braucht jeder Schulträger eine souveräne Cloud-Plattform wie Cozystack?"
    a: "Nein. Die meisten Schulträger sind mit Managed Services von Hyperscalern und gängigen EdTech-Werkzeugen gut bedient. Cozystack passt zu den Ausnahmen: große Träger oder Verbünde mit Souveränitätsvorgaben, EdTech-Teams, die eigene Plattformen bauen, oder KI und Analytics auf Schülerdaten, die keine Hyperscaler-Endpunkte nutzen dürfen."
  - q: "Wie hilft Cozystack bei FERPA und DSGVO für Schülerdaten?"
    a: "Cozystack unterstützt eine an FERPA und DSGVO ausgerichtete Architektur mit optional aktivierbarer Volume-Verschlüsselung, Audit-Logging und Residenz der Schülerdaten. Die Daten bleiben auf Infrastruktur, die der Schulträger oder das Ministerium kontrolliert — das adressiert Residenz- und Datenschutzanforderungen, die Hyperscaler-Endpunkte womöglich nicht erfüllen."
  - q: "Kann eine Plattform einen Schulträger, seine Schulen und einzelne Klassen voneinander isolieren?"
    a: "Ja. Die Tenant-CRD von Cozystack bietet hierarchische Mandantenfähigkeit: Ein Schulträger kann den zentralen Betrieb mit Isolation pro Schule und, wo nötig, Trennung auf Klassenebene auf gemeinsamer Infrastruktur fahren, statt für jede Schule einen eigenen Cluster bereitzustellen."
  - q: "Was kostet das, und wie wirkt sich die Lizenzierung auf lange Haushaltszyklen aus?"
    a: "Cozystack selbst steht unter Apache 2.0, ohne Lizenzkosten pro CPU oder Core, was zu mehrjährigen Haushalten von Schulträgern passt. Die Ænix Private Cloud Platform wird per RFP angeboten. Support-Stufen für selbst betriebenes Cozystack beginnen bei 1.250 USD pro 10 Nodes und Monat (Basic, jährliche Abrechnung) — siehe die Preisseite."
  - q: "Kann Cozystack KI und Analytics auf Schülerdaten vor Ort betreiben?"
    a: "Ja. Cozystack stellt GPU-Infrastruktur (NVIDIA GPU Operator) für Analytics und Modelle zu Lernmustern bereit, die auf lokalen, vom Schulträger kontrollierten Daten laufen — die relevante Option, wenn KI-Endpunkte von Hyperscalern für Schülerdaten nicht akzeptabel sind."
  - q: "Worin unterscheidet sich die Schulbildung von Universitäten?"
    a: "Schulträger verarbeiten Schülerdaten unter FERPA bzw. DSGVO und nationalen Vorgaben, versorgen Zehntausende Schülerinnen und Schüler an vielen Schulen und planen in langen Haushaltszyklen. Das mandantenfähige Modell aus Träger und Schule sowie die Residenzanforderungen unterscheiden sich daher vom Forschungs- und Fakultätsbetrieb einer Universität."
---

**Die Schulbildung hat andere Infrastrukturanforderungen als Universitäten. Schulträger verarbeiten Schülerdaten unter strengen Residenz- und Datenschutzvorgaben (FERPA in den USA, DSGVO und nationale Regeln in der EU), versorgen oft 10.000 bis über 100.000 Schülerinnen und Schüler an vielen Schulen und planen in langen Haushaltszyklen. Die meisten Schulträger sind mit Managed Services von Hyperscalern gut bedient. Die Ausnahmen — große Träger mit Souveränitätsvorgaben, KI- und EdTech-Plattformen, die Schülerdaten vor Ort verarbeiten, Trägerverbünde mit gemeinsamer Infrastruktur — sind die Fälle, in denen Cozystack passen kann.**

> **Passende Plattform:** **[Ænix Private Cloud Platform](/de/produkte/private-cloud-platform/)** für die Verarbeitung von Schülerdaten unter Souveränitätsvorgaben im Maßstab großer Schulträger oder Bildungsministerien.

<div class="cta-row">
  <a class="cta-primary" href="/de/kontakt/">Gespräch vereinbaren</a>
  <a class="cta-secondary" href="/de/blog/2026/05/k12-schultraeger-cloud-infrastruktur/">Cloud-Architektur für Schulträger →</a>
</div>

---

<div class="band-fullbleed band-fullbleed--tint">
<div class="band-fullbleed__inner">

## Wann Cozystack zur Schulbildung passt

- **Großer Schulträger oder regionaler Verbund** mit Souveränitätsdruck bei Schülerdaten
- **Mandantenfähiges Modell** — Trägerzentrale, Schulebene und Klassenebene voneinander isoliert
- **Entwicklung eigener EdTech-Plattformen** — Schulträger bauen ihr eigenes LMS, SIS oder Analytics
- **KI und Analytics auf Schülerdaten** — wo Hyperscaler-Endpunkte nicht akzeptabel sind
- **Souveränität als Vergabevorgabe** — in einigen EU-Mitgliedstaaten und Rechtsräumen außerhalb der EU

Für die meisten Schulträger sind Managed Services von Hyperscalern und gängige EdTech-Werkzeuge die bessere Wahl. Wenn das so ist, sagen wir es offen.

</div>
</div>

---

## Was wir in passenden Fällen abdecken

<div class="arch-section__fig">
<div class="diagram">
<div class="diagram__node"><b>Workloads des Schulträgers</b><div class="diagram__chips"><span>LMS / SIS / Analytics</span><span>KI / Analytics auf Schülerdaten</span></div></div>
<div class="diagram__conn">laufen auf</div>
<div class="diagram__node diagram__node--brand"><b>Cozystack</b><div class="diagram__chips"><span>Eine Kubernetes-API (KubeVirt)</span><span>Tenant-CRD-Mandantenfähigkeit</span><span>Residenz der Schülerdaten</span></div></div>
<div class="diagram__conn">isoliert</div>
<div class="diagram__node"><b>Träger / Schule / Klasse</b><div class="diagram__chips"><span>Zentraler Betrieb</span><span>Isolation pro Schule</span><span>Trennung auf Klassenebene</span></div></div>
</div>
</div>

- **Mandantenfähige Plattform für Schulträger** — zentraler Betrieb und Isolation pro Schule
- **An FERPA und DSGVO ausgerichtete Architektur** — optionale Verschlüsselung, Audit und Residenz
- **KI-Infrastruktur** für Analytics und Lernmuster-KI auf lokalen Daten
- **Residenz der Schülerdaten** auf Infrastruktur, die der Schulträger oder das Ministerium kontrolliert
- **Planung für lange Haushaltszyklen** — eine Apache-2.0-Plattform passt zu den Haushaltszyklen von Schulträgern

---

## So starten Sie

<div class="cta-row">
  <a class="cta-primary" href="/de/kontakt/">Gespräch vereinbaren</a>
</div>

- **[Artikel zur Cloud-Infrastruktur für Schulträger](/de/blog/2026/05/k12-schultraeger-cloud-infrastruktur/)**
- **[Branchenseite Universitäten](/de/branchen/universitaeten/)** — angrenzend
- **[Datensouveränität](/de/loesungen/data-sovereignty/)** — Datenschutz für Schülerdaten

---

*Ænix hat Cozystack entwickelt (CNCF-Sandbox-Projekt) und pflegt es gemeinsam mit Maintainern anderer Unternehmen.*
