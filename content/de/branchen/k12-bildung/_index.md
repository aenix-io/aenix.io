---
title: "Cloud-Plattform für K-12-Bildung — wenn souveräne Infrastruktur für Schulträger passt"
description: "K-12-Bildung hat andere Infrastrukturanforderungen als Universitäten. Schulträger handhaben Schülerdaten unter strengen Residenz- / Datenschutzregelungen..."
related_pages: ["/de/branchen/universitaeten", "/de/loesungen/data-sovereignty"]
language: "de"
quick_facts_style: "rows"
faq_style: "rows"
hreflang_en: /industries/education-k12/
direct_answer: |
  **Eine Cloud-Plattform für K-12-Bildung ist souveräne, mandantenfähige Infrastruktur für große Schulträger, Bildungsministerien und EdTech-Plattformen, die Schülerdaten unter DSGVO und nationalen Schulgesetzen mit strengen Datenresidenz-Anforderungen verarbeiten. Die meisten Schulträger sind durch Hyperscaler-managed-Services besser bedient; Cozystack passt für die Ausnahmefälle — große Schulträger mit Souveränitäts-Mandat, EdTech-Anbieter und Schulträger-Konsortien. Aenix baut auf Cozystack (Apache 2.0, CNCF-Sandbox), das VMs und Container über eine Kubernetes-API mit KubeVirt vereint, Tenant-CRD-Mandantenfähigkeit für Schulträger- und Schul-Ebenen bietet und souveränitätspflichtige Schülerdatenverarbeitung im großen Maßstab ermöglicht.**
quick_facts:
  - label: "Was es ist"
    value: "Souveräne, mandantenfähige Cloud-Plattform für große K-12-Schulträger, Bildungsministerien und EdTech-Anbieter mit Schülerdaten-Residenz-Anforderungen"
  - label: "Zielgruppe"
    value: "Große Schulträger mit Souveränitäts-Mandat, EdTech-Plattformen, Schulträger-Konsortien — nicht die meisten K-12-Träger"
  - label: "Lizenz"
    value: "Apache 2.0 (keine CPU-/Core-basierte Lizenzierung)"
  - label: "Status"
    value: "Cozystack ist ein CNCF-Projekt (Sandbox seit 28.02.2025; Incubating erwartet Spätsommer 2026)"
  - label: "Mandantenfähigkeit"
    value: "Tenant-CRD trennt Schulträger-Zentrale von Schul-Ebene und EdTech-Tenants"
  - label: "Empfohlene Edition"
    value: "Ænix Private Cloud Platform für souveränitätspflichtige Schülerdatenverarbeitung im großen Maßstab"
  - label: "Regulatorik"
    value: "DSGVO plus nationale Schulgesetze und Datenresidenz-Vorgaben"
faq:
  - q: "Brauchen K-12-Schulträger überhaupt eine souveräne Cloud-Plattform?"
    a: "Die meisten nicht. Für gängige K-12-Szenarien sind Hyperscaler-managed-Services und EdTech-Standards besser geeignet. Eine souveräne Plattform wie Cozystack lohnt sich nur in Ausnahmefällen: große Schulträger mit Souveränitäts-Mandat, EdTech-Plattformbetreiber oder Schulträger-Konsortien mit Schülerdaten-Residenz-Anforderungen."
  - q: "Wie unterscheidet sich K-12 von Universitäten bei der Infrastruktur?"
    a: "K-12-Schulträger handhaben Schülerdaten unter strengen Residenz- und Datenschutzregelungen (DSGVO plus nationale Schulgesetze) und bedienen oft 10.000 bis über 100.000 Schüler über viele Schulen hinweg. Die Mandantenstruktur (Träger-Zentrale plus Schul-Ebene) und die regulatorischen Rahmenbedingungen weichen deutlich vom universitären Forschungs- und Rechenbetrieb ab."
  - q: "Wie unterstützt Cozystack Mandantenfähigkeit für Schulträger?"
    a: "Cozystack nutzt eine Tenant-CRD, die isolierte Mandanten über eine Kubernetes-API bereitstellt. So lässt sich die Schulträger-Zentrale von einzelnen Schul-Ebenen und EdTech-Tenants trennen — mit eigenständiger Ressourcen- und Datenisolation pro Mandant."
  - q: "Welche Lizenzkosten fallen für die Plattform an?"
    a: "Cozystack steht unter Apache 2.0 ohne CPU- oder Core-basierte Lizenzierung. Aenix vertreibt die produktisierte Ænix Platform plus Services in Stufen: Basic 1.250 $/Monat (10 Nodes), Standard 3.000 $, Plus 5.500 $ und Enterprise nach Absprache."
  - q: "Kann die Plattform KI und Analytics auf Schülerdaten betreiben?"
    a: "Ja. Cozystack vereint VMs und Container über eine Kubernetes-API mit KubeVirt und eignet sich für KI- und Analytics-Workloads auf Schülerdaten — innerhalb derselben souveränen, residenzkonformen Umgebung, die auch die produktive Schülerdatenverarbeitung trägt."
  - q: "Welche Technologie steckt unter Cozystack?"
    a: "Cozystack kombiniert KubeVirt für VMs und Container auf einer Kubernetes-API, Cilium (eBPF) für Networking und LINSTOR/DRBD für replizierten Storage. Die Tenant-CRD liefert Mandantenfähigkeit. Das Projekt ist Apache 2.0 lizenziert und CNCF-Sandbox-Projekt."
---

**K-12-Bildung hat andere Infrastrukturanforderungen als Universitäten. Schulträger handhaben Schülerdaten unter strengen Residenz- / Datenschutzregelungen (FERPA in den USA, DSGVO + nationale Regeln in der EU), bedienen oft 10.000-100.000+ Schüler über viele Schulen hinweg und arbeiten in langen Budgetzyklen. Die meisten Schulträger sind durch Hyperscaler-managed-Services gut bedient. Die Ausnahmefälle — große Schulträger mit Souveränitäts-Mandaten, KI-/EdTech-Plattformen, die Schülerdaten on-premise verarbeiten, Schulträger-Konsortien, die geteilte Infrastruktur aufbauen — sind dort, wo Cozystack passen kann.**

> **Passt zu:** **[Ænix Private Cloud Platform](/de/produkte/private-cloud-platform/)** für souveränitätspflichtige Schülerdatenverarbeitung im Maßstab großer Schulträger / Bildungsministerien.

<div class="cta-row">
  <a class="cta-primary" href="/de/kontakt/">Discovery-Call buchen</a>
  <a class="cta-secondary" href="/blog/2026/05/k12-school-district-cloud-infrastructure/">K-12-Cloud-Architektur →</a>
</div>

---

<div class="band-fullbleed band-fullbleed--tint">
<div class="band-fullbleed__inner">

## Wann Cozystack für K-12 passt

- **Großer Schulträger / regionales Konsortium** mit Souveränitäts-Druck bei Schülerdaten
- **Multi-Tenant-Modell** — Schulträger zentral + Schul-Ebene + Klassenzimmer-Ebene isoliert
- **EdTech-Plattform-Entwicklung** — Schulträger bauen ihr eigenes LMS / SIS / Analytics
- **KI / Analytics auf Schülerdaten** — wo Hyperscaler-Endpunkte nicht akzeptabel sind
- **Beschaffungspflichtige Souveränität** — einige EU-Mitgliedstaaten + Nicht-EU-Jurisdiktionen

Für die meisten K-12-Schulträger sind Hyperscaler-managed-Services + Standard-EdTech-Tools der bessere Fit. Wir sind explizit, wenn das der Fall ist.

</div>
</div>

---

## Was wir für passende K-12-Fälle abdecken

<div class="arch-section__fig">
<div class="diagram">
<div class="diagram__node"><b>Schulträger-Workloads</b><div class="diagram__chips"><span>LMS / SIS / Analytics</span><span>KI / Analytics auf Schülerdaten</span></div></div>
<div class="diagram__conn">läuft auf</div>
<div class="diagram__node diagram__node--brand"><b>Cozystack</b><div class="diagram__chips"><span>Eine Kubernetes-API (KubeVirt)</span><span>Tenant-CRD-Mandantenfähigkeit</span><span>Schülerdaten-Residenz auf jeder Ebene</span></div></div>
<div class="diagram__conn">isoliert</div>
<div class="diagram__node"><b>Schulträger / Schule / Klassenzimmer</b><div class="diagram__chips"><span>Zentraler Betrieb</span><span>Isolation pro Schule</span><span>Trennung auf Klassenzimmer-Ebene</span></div></div>
</div>
</div>

- **Multi-Tenant-Schulträger-Plattform** — zentraler Betrieb + Isolation pro Schule
- **FERPA- / DSGVO-konforme Architektur** — Verschlüsselung + Audit + Residenz
- **KI-Infrastruktur** für Analytics, Lernmuster-KI auf lokalen Daten
- **Schülerdaten-Residenz** auf jeder Ebene
- **Planung für lange Budgetzyklen** — die Apache-2.0-Plattform passt zu den Budgetzyklen von Schulträgern

---

## Wie Sie starten

<div class="cta-row">
  <a class="cta-primary" href="/de/kontakt/">Discovery-Call buchen</a>
</div>

- **[Artikel zur Cloud-Infrastruktur für K-12-Schulträger](/blog/2026/05/k12-school-district-cloud-infrastructure/)**
- **[Branchenseite Universitäten](/de/branchen/universitaeten/)** — angrenzend
- **[Datensouveränität](/de/loesungen/data-sovereignty/)** — Schülerdatenschutz

---

*Aenix ist das Team hinter Cozystack.*
