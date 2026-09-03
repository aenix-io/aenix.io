---
title: "Souveräne Cloud Gesundheitswesen — Datenresidenz & NIS2"
description: "Souveräne Cloud fürs Gesundheitswesen: NIS2-fähig, GDPR-Datenresidenz, BYOK-Verschlüsselung und souveräne KI auf Patientendaten in der EU und DACH."
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
  **Eine souveräne Cloud fürs Gesundheitswesen ist eine Cloud-Plattform, auf der Patientendaten physisch innerhalb einer definierten Rechtsordnung verbleiben, die Verschlüsselungsschlüssel beim Leistungserbringer liegen (BYOK) und der Software-Stack auditierbare Open Source statt ein undurchsichtiger Hyperscaler-Dienst ist. Das ist entscheidend, weil Gesundheitsdaten nach GDPR Artikel 9 zu den besonderen Kategorien personenbezogener Daten zählen und Krankenhäuser, Kliniken und Krankenversicherer als wesentliche Einrichtungen unter NIS2 fallen. Aenix baut diese Plattformen auf Cozystack (ein CNCF-Projekt, Apache 2.0) auf eigener Hardware des Leistungserbringers, sodass Datenresidenz, Schlüsselhoheit und Audit-Trails strukturell verankert statt bloße vertragliche Zusagen sind. Sie eignet sich für Klinikverbünde, Krankenversicherer, Diagnostiklabore und Medizin-KI-Teams in der EU und DACH.**
quick_facts:
  - label: "Was es ist"
    value: "Eine Gesundheits-Cloud, in der Patientendaten, Verschlüsselungsschlüssel und Audit-Trails unter der Kontrolle und Rechtsordnung des Leistungserbringers bleiben."
  - label: "NIS2-Geltungsbereich"
    value: "Der Gesundheitssektor ist als wesentliche Einrichtung in NIS2 (Richtlinie (EU) 2022/2555, Anhang I) gelistet."
  - label: "Datenklassifizierung"
    value: "Gesundheitsdaten sind besondere Kategorien personenbezogener Daten nach GDPR Artikel 9 — die Verarbeitung erfordert eine spezifische Rechtsgrundlage und verschärfte Schutzmaßnahmen."
  - label: "Datenresidenz"
    value: "Workloads an benannte EU-/DACH-Regionen auf eigener oder vertraglich gebundener Hardware gebunden; keine standardmäßige grenzüberschreitende Replikation."
  - label: "Verschlüsselung / Schlüsselhoheit"
    value: "Verschlüsselung im Ruhezustand und bei der Übertragung mit kundeneigenen Schlüsseln (BYOK); der Betreiber hat keinen stehenden Zugriff auf Klartext-Patientendaten."
  - label: "Plattform-Lizenz"
    value: "Cozystack ist Open Source unter Apache 2.0 — keine Lizenzierung pro CPU, vollständige Auditierbarkeit der Control Plane."
  - label: "Projekt-Zeitrahmen"
    value: "Platform Readiness Assessment in 14-28 Tagen; vollständige Migration des Bestands typischerweise 9-18 Monate."
quick_facts_source: "[NIS2-Richtlinie (EU) 2022/2555, EUR-Lex](https://eur-lex.europa.eu/eli/dir/2022/2555/oj), [ENISA](https://www.enisa.europa.eu/topics/cybersecurity-policy/nis-directive-new)"
faq:
  - q: "Was ist eine souveräne Cloud fürs Gesundheitswesen?"
    a: "Es ist eine Cloud-Plattform, auf der Patienten- und klinische Daten physisch innerhalb einer definierten Rechtsordnung verbleiben, die Verschlüsselungsschlüssel bei der Gesundheitseinrichtung liegen und der Software-Stack auditierbare Open Source ist. Sie gibt Krankenhäusern, Versicherern und Laboren nachweisbare Kontrolle über Gesundheitsdaten statt vertraglicher Zusicherungen eines Hyperscalers."
  - q: "Fallen Gesundheitseinrichtungen unter NIS2?"
    a: "Ja. NIS2 (Richtlinie (EU) 2022/2555) führt den Gesundheitssektor — einschließlich Krankenhäusern sowie bestimmten Medizinprodukt- und Pharmaakteuren — in Anhang I unter den wesentlichen Einrichtungen. Betroffene Organisationen tragen verbindliche Pflichten zum Risikomanagement und zur Meldung von Vorfällen, mit Verantwortlichkeit auf Leitungsebene."
  - q: "Wie geht eine souveräne Cloud mit GDPR-Gesundheitsdaten der Sonderkategorie um?"
    a: "Gesundheitsdaten sind besondere Kategorien nach GDPR Artikel 9 und benötigen daher eine spezifische Rechtsgrundlage und stärkere Schutzmaßnahmen. Eine souveräne Plattform bindet die Speicherung an eine benannte EU-Region, verschlüsselt Daten mit kundeneigenen Schlüsseln und erzeugt Audit-Logs im Besitz des Leistungserbringers — Residenz und Zugriffskontrollen sind so gegenüber einer Aufsichts- oder Datenschutzbehörde nachweisbar."
  - q: "Können wir Medizin-KI auf Patientendaten betreiben, ohne sie an einen Hyperscaler zu senden?"
    a: "Ja. Die AI & GPU führt GPU-Inferenz und -Training innerhalb desselben souveränen Perimeters wie die Daten aus, sodass Bildgebungsmodelle, klinisches NLP und Entscheidungsunterstützung Patientendaten verarbeiten, ohne dass diese die Rechtsordnung oder Kontrolle des Leistungserbringers verlassen."
  - q: "Nennen Sie Referenzkunden aus dem Gesundheitswesen?"
    a: "Namentliche Gesundheitsreferenzen sind noch nicht öffentlich — Gesundheitsprojekte sind durch NDA geschützt. Wir teilen eine anonymisierte souveräne Public-Cloud-Fallstudie als architektonisches Nachweismuster; Gesundheits-Logos werden ergänzt, sobald die Freigaben vorliegen."
  - q: "Wie läuft ein Projekt ab und wie lange dauert es?"
    a: "Der Einstieg ist ein Platform Readiness Assessment zu Souveränität, NIS2-Lage, Kosten und Platform Engineering, geliefert in 14-28 Tagen. Es erzeugt einen schriftlichen Bericht und eine Umsetzungs-Roadmap für Phase 2. Die vollständige Migration des Bestands dauert je nach Umfang typischerweise 9-18 Monate."
---

<!-- BLOCK 1: HERO -->

# Souveräne Cloud fürs Gesundheitswesen

**Krankenhäuser, Krankenversicherer, Diagnostiklabore und Medizin-KI-Teams verarbeiten die sensibelsten personenbezogenen Daten der Wirtschaft unter zwei harten Vorgaben: den GDPR-Pflichten für besondere Datenkategorien und den NIS2-Pflichten für wesentliche Einrichtungen. Die architektonische Antwort ist nicht "ein Gesundheits-SaaS in fremder Cloud" — sondern eine souveräne Plattform, in der Datenresidenz, Schlüsselhoheit und Audit-Trails strukturell verankert sind. Aenix baut und betreibt diese Plattformen auf [Cozystack](/de/produkte/cozystack/) und lässt produktive Gesundheits-Workloads auf eigener Hardware des Leistungserbringers laufen.**

> **Passt zu:** **[Ænix Platform Enterprise Edition](/de/produkte/private-cloud-platform/)** für das regulierte Cloud-Fundament; **[AI & GPU](/de/produkte/ai-platform/)** für medizinische Bildgebung, klinisches NLP und Entscheidungsunterstützung auf Patientendaten. Kostenlose [NIS2-Compliance-Checkliste →](/de/ressourcen/nis2-compliance-checkliste/).

<div class="cta-row">
  <a class="cta-primary" href="/de/kontakt/">Buchen Sie ein 30-minütiges Erstgespräch</a>
  <a class="cta-secondary" href="/de/loesungen/data-sovereignty/">Datensouveränität →</a>
</div>

---


---

## Womit Gesundheitsteams zu uns kommen

Die vier häufigsten Einstiegspunkte:

- **Datensouveränität im Gesundheitswesen** — Patientenakten, Bildarchive und genomische Daten, die mit Schlüsseln des Leistungserbringers in der Rechtsordnung verbleiben müssen. Siehe **[Datensouveränität](/de/loesungen/data-sovereignty/)**.
- **NIS2-Bereitschaft für den Gesundheitssektor** — Risikomanagement für wesentliche Einrichtungen, Meldung von Vorfällen und Lieferketten-Kontrollen. Siehe **[NIS2-Compliance](/de/loesungen/nis2-compliance/)**.
- **Souveräne KI auf klinischen Daten** — Bildgebungsmodelle, klinisches NLP und Entscheidungsunterstützung, die keine Patientendaten an einen Hyperscaler senden dürfen. Siehe **[Sovereign AI](/de/loesungen/sovereign-ai/)**.
- **Abgleich mit regulierter öffentlicher Infrastruktur** — gemeinsame Muster mit öffentlichen Gesundheitsträgern und dem breiteren öffentlichen Sektor. Siehe **[Öffentlicher Sektor](/de/branchen/oeffentlicher-sektor/)**.

Die meisten Projekte verbinden zwei oder mehr dieser Auslöser.

---

## Warum das Gesundheitswesen eine souveräne Architektur braucht, kein Compliance-Häkchen

Gesundheitsdaten sind die reibungsintensivste Datenklasse im europäischen Recht, und zwei Regelwerke treffen hier aufeinander.

<div class="arch-section__fig">
<div class="diagram">
<div class="diagram__node"><b>Patientendaten</b><div class="diagram__chips"><span>GDPR Artikel 9 Sonderkategorie</span><span>Patientenakten, Bildarchive, genomische Daten</span></div></div>
<div class="diagram__conn">gebunden an</div>
<div class="diagram__node diagram__node--brand"><b>Souveräne Plattform auf Cozystack</b><div class="diagram__chips"><span>Benannte EU-/DACH-Regionen</span><span>Eigene Hardware des Leistungserbringers</span><span>Kundeneigene Schlüssel (BYOK)</span><span>Apache 2.0</span></div></div>
<div class="diagram__conn">erzeugt</div>
<div class="diagram__node"><b>Audit-Trails im Besitz des Leistungserbringers</b><div class="diagram__chips"><span>Nachweisbar gegenüber Aufsichtsbehörden</span><span>NIS2-Nachweis für wesentliche Einrichtungen</span></div></div>
</div>
</div>

**GDPR-Daten der Sonderkategorie.** Nach [Artikel 9 der GDPR](https://eur-lex.europa.eu/eli/reg/2016/679/oj) sind Gesundheitsdaten besondere Kategorien personenbezogener Daten. Die Verarbeitung ist untersagt, sofern keine spezifische Bedingung greift, und selbst dann müssen Leistungserbringer verschärfte technische und organisatorische Schutzmaßnahmen nachweisen — Verschlüsselung, Zugriffskontrolle und dokumentierte Residenz. Ein generischer Hyperscaler-Vertrag behauptet diese Kontrollen; eine souveräne Plattform lässt Sie sie beweisen, weil die Schlüssel und Audit-Logs nie Ihre Hoheit verlassen.

**NIS2-Pflichten für wesentliche Einrichtungen.** Der Gesundheitssektor ist eine wesentliche Einrichtung nach [NIS2 (Richtlinie (EU) 2022/2555)](https://eur-lex.europa.eu/eli/dir/2022/2555/oj), Anhang I. Betroffene Krankenhäuser und Gesundheitsorganisationen tragen verbindliche Pflichten zu Risikomanagement, Lieferkettensicherheit und Vorfallmeldung, mit Verantwortlichkeit auf Leitungsebene. [ENISA](https://www.enisa.europa.eu/topics/cybersecurity-policy/nis-directive-new) liefert die Referenzleitlinien, auf denen die nationalen Behörden aufbauen. Eine Plattform, deren Control Plane auditierbare Open Source ist, verkürzt den Weg von "wir arbeiten sicher" zu "hier ist der Nachweis".

**Datenresidenz und Schlüsselhoheit.** Auf einer souveränen Plattform sind Workloads an benannte EU- oder DACH-Regionen auf Hardware gebunden, die der Leistungserbringer besitzt oder direkt vertraglich bindet — es gibt keine standardmäßige grenzüberschreitende Replikation zu einem US-eigenen Mutterkonzern. Die Verschlüsselung nutzt kundeneigene Schlüssel (BYOK), sodass der Betreiber keinen stehenden Zugang zu Klartext-Patientendaten hat.

**Souveräne KI auf Patientendaten.** Medizinische KI ist der Punkt, an dem Souveränität und Ökonomie kollidieren: Bildgebungs- und klinische Sprachmodelle wollen GPUs, doch die Daten dürfen den Perimeter nicht verlassen. GPU-Inferenz und -Training auf derselben Plattform wie die Daten auszuführen — statt Akten an eine externe KI-API zu schicken — hält Sonderkategorie-Daten in der Rechtsordnung und liefert dennoch moderne Modellleistung.

---

<div class="band-fullbleed band-fullbleed--tint">
<div class="band-fullbleed__inner">

## Wie Aenix mit Gesundheitsorganisationen arbeitet

Das Standardprojekt läuft als **[Platform Readiness Assessment](/de/dienstleistungen/platform-readiness-assessment/)** mit für den Gesundheitskontext gewichteten Arbeitssträngen:

- **Souveränität + NIS2** — Kartierung der Datenresidenz, GDPR-Artikel-9-Schutzmaßnahmen, Verschlüsselungs- und Schlüsselhoheit-Lage, Bereitschaft zur Vorfallmeldung, Prüfung der Lieferkettensicherheit.
- **Platform Engineering** — ein mandantenfähiges, Kubernetes-natives Fundament mit Isolation zwischen klinischen, administrativen und Forschungs-Workloads sowie Golden Paths für interne Teams.
- **KI-Infrastruktur** (sofern zutreffend) — souveräne GPU-Architektur für Bildgebung, klinisches NLP und Entscheidungsunterstützung, die Patientendaten im Perimeter verarbeiten muss.
- **Kosten** — ein ehrliches TCO-Modell und Repatriation-Kandidaten für dauerhafte Workloads, bei denen sich die Public-Cloud-Ökonomie nicht mehr rechnet.

Ergebnis ist ein schriftlicher Bericht, ausgerichtet auf den Dialog mit Aufsichtsbehörden, sowie eine Umsetzungs-Roadmap für Phase 2.

</div>
</div>

---

## Nachweismuster

Wir veröffentlichen keine namentlichen Gesundheitskunden — Gesundheitsprojekte sind bis zur Freigabe durch NDA geschützt. Als architektonisches Nachweismuster siehe unsere anonymisierte **[souveräne Public-Cloud-Fallstudie](/de/case-studies/sovereign-public-cloud/)**: eine mandantenfähige Plattform, die regulierte Workloads mit vollständiger Datenresidenz und Schlüsseln im Besitz des Leistungserbringers betreibt — dasselbe strukturelle Muster, das ein Klinikverbund oder Krankenversicherer einsetzen würde.

{{< clients >}}

---


---

*Aenix ist das Team hinter [Cozystack](https://cozystack.io) — einem CNCF-Projekt (heute Sandbox; Incubating erwartet im Spätsommer 2026), Apache 2.0. Aenix kommerzialisiert Cozystack als Ænix Platform, verfügbar in fünf Editionen: Public Cloud, ISP, Enterprise, IDP und AI/ML.*
