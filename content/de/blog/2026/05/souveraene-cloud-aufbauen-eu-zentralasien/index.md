---
title: "Wie man eine souveräne Cloud aufbaut — Playbook für die EU und Zentralasien 2026"
seo_title: "Souveräne Cloud aufbauen: EU und Zentralasien"
description: "Was Souveränität in der Praxis bedeutet, welche Regelwerke sie definieren und welche Architekturmuster eine souveräne Cloud in EU und Zentralasien trägt."
slug: "souveraene-cloud-aufbauen-eu-zentralasien"
date: "2026-05-03"
cover_image: "/img/blog/covers/de/souveraene-cloud-aufbauen-eu-zentralasien.jpg"
author: "Aenix Team"
type: "tutorial"
topics: ["DORA", "NIS2", "Sovereignty", "Financial Services", "Backup and DR", "Observability"]
language: "de"
hreflang_en: "/blog/2026/05/build-sovereign-cloud-eu-and-central-asia/"
companion_landing: "/de/dienstleistungen/sovereign-cloud-builder/"
quiz:
  title: "Wissens-Check: eine souveräne Cloud aufbauen"
  questions:
    - q: "Wie viele Anforderungen definieren laut Artikel „echte“ Souveränität?"
      options:
        - { text: "Acht Kriterien von Datenresidenz über Schlüssel bis zur Lieferkette", correct: true }
        - { text: "Zwei Kriterien: Datenresidenz und Verschlüsselung", correct: false }
        - { text: "Drei Kriterien: Datenresidenz, Schlüssel, Audit", correct: false }
      explanation: "Acht Anforderungen: Datenresidenz, vom Kunden kontrollierte Schlüssel, Open-Source-Fundament, transparente Lieferkette, Air-Gap-Option, vollständiger Audit-Trail, kein Phone-Home und betriebliche Unabhängigkeit unter souveräner Rechtsordnung. Ein Produkt, das nicht alle acht erfüllt, scheitert beim Audit der Aufsicht."
    - q: "Welche französische Zertifizierung für souveräne Clouds wird genannt?"
      options:
        - { text: "BSI C5 (deutscher Kriterienkatalog für Cloud-Sicherheit)", correct: false }
        - { text: "DORA (EU-Verordnung für den Finanzsektor)", correct: false }
        - { text: "SecNumCloud (Zertifizierung der ANSSI)", correct: true }
      explanation: "SecNumCloud ist die strenge französische Souveränitätsanforderung. BSI C5 ist der deutsche Kriterienkatalog für Cloud-Sicherheit. EUCS ist das entstehende EU-weite Regelwerk."
    - q: "Wie lange dauert der Aufbau eines souveränen Cloud-Produkts typischerweise bis zur allgemeinen Verfügbarkeit für den ersten Kunden?"
      options:
        - { text: "Drei bis sechs Wochen konzentrierter Arbeit", correct: false }
        - { text: "Zwölf bis dreißig Monate ab Projektstart", correct: true }
        - { text: "Fünf bis zehn Jahre schrittweiser Ausbau", correct: false }
      explanation: "Discovery und Assessment 4–8 Wochen; Architektur und Beschaffungsreife 2–4 Monate; Plattformaufbau in Phase 2 8–24 Monate einschließlich Zertifizierungsarbeit; Onboarding der Kunden fortlaufend. Insgesamt: 12–30 Monate."
    - q: "Welche Eigenschaft wird NICHT als Unterstützung für Betreiber souveräner Clouds genannt?"
      options:
        - { text: "Verpflichtende Phone-Home-Telemetrie", correct: true }
        - { text: "Mandantenfähigkeit über das Tenant CRD", correct: false }
        - { text: "Integration der WHMCS-Abrechnung", correct: false }
        - { text: "Unterstützung für Air-Gap-Installationen", correct: false }
      explanation: "Cozystack hat standardmäßig kein Phone-Home — Telemetrie ist Opt-in. Der Artikel nennt das ausdrücklich als souveränitätsfreundliche Eigenschaft. Tenant CRD, Cozystack Dashboard, WHMCS-Abrechnung, Air-Gap, VictoriaMetrics + VictoriaLogs und Cilium sind die genannten souveränitätsfreundlichen Features."
    - q: "Worin besteht bei Muster 2 (verwaltete souveräne Cloud) der Kompromiss?"
      options:
        - { text: "Maximale Souveränität bei maximalem Betriebsaufwand", correct: false }
        - { text: "Vereinfachter Betrieb bei substanzieller Souveränität", correct: true }
        - { text: "Keine echten Souveränitätsgarantien, nur Marketing", correct: false }
      explanation: "Muster 2: Hardware des Cloud-Providers + souveräne Rechtsordnung + vom Kunden kontrollierte Schlüssel + transparente Lieferkette. Vereinfachter Betrieb bei substanzieller Souveränität. Richtig für die meisten regulierten Unternehmens-Workloads. Muster 1 (vollständig On-Premises) ist für die sensibelsten Workloads gedacht."
---


Die souveräne Cloud ist kein Nischenthema mehr. Vorgaben der EU-Mitgliedstaaten, Souveränitätsklauseln auf dem Beschaffungsportal Kasachstans und mehrere Initiativen im asiatisch-pazifischen Raum haben Souveränität zu einer eigenen Marktkategorie gemacht. Die „souveränen“ Regionen der Hyperscaler versuchen, darauf zu antworten, stoßen aber an strukturelle Grenzen (Bindung an US-Anbieter, Abhängigkeiten in der Control Plane).

Die Chance für eigens gebaute souveräne Cloud-Produkte ist real — doch der Aufwand für Engineering, Zertifizierung und Betrieb ist erheblich.

## Was Souveränität wirklich bedeutet

Souveränität ist mehr als Datenresidenz. Die vollständigen Anforderungen:

1. **Datenresidenz auf jeder Ebene** — Produktion, Backup, Observability, CI/CD, Telemetrie
2. **Verschlüsselung mit vom Kunden kontrollierten Schlüsseln** — HSM, dokumentierte Rotation, Verfahren für den Notfallzugriff
3. **Open-Source-Fundament der Plattform** — Transparenz und Ausstiegsfähigkeit
4. **Transparente Lieferkette** — mindestens bis zur zweiten Stufe
5. **Air-Gap-Option** für die sensibelsten Workloads
6. **Vollständiger Audit-Trail** in Formaten, die die Aufsicht verarbeiten kann
7. **Keine Phone-Home-Telemetrie** — nur Opt-in
8. **Betriebliche Unabhängigkeit** — das Team der souveränen Cloud untersteht einer souveränen Rechtsordnung

Ein „souveränes Cloud“-Produkt, das nicht alle diese Punkte substanziell erfüllt, scheitert beim Audit der Aufsicht.

## Konkrete Regelwerke zur Souveränität

Jede Rechtsordnung hat ihr eigenes Regelwerk:

### EU
- **EUCS (EU Cybersecurity Certification Scheme for Cloud Services)** — entstehendes EU-weites Regelwerk
- **SecNumCloud** (Frankreich) — strenge französische Souveränitätsanforderung
- **BSI C5** (Deutschland) — deutscher Kriterienkatalog für Cloud-Sicherheit
- **DORA** — speziell für Finanzdienstleistungen, gilt für Cloud-Provider, die Banken bedienen
- **NIS2** — breitere Cybersicherheit, gilt für Cloud-Provider als wesentliche Einrichtungen

### Zentralasien
- **Kasachstan** — durch die Beschaffung vorgeschriebene Souveränität für Workloads des öffentlichen Sektors. Aktiver Markt für souveräne Clouds, darunter Markteinführungen souveräner Cloud-Produkte regionaler Telcos.
- **Weitere GUS-Staaten** — verschiedene nationale Regelwerke im Entstehen

### Andere Regionen
- **Französisches SecNumCloud** außerhalb Frankreichs: wird zunehmend als Referenz herangezogen
- **Asien-Pazifik** — Singapur IM8, Indien MeitY, Australien IRAP usw.

## Architekturmuster für die souveräne Cloud

### Muster 1: vollständig On-Premises betriebene souveräne Cloud
Hardware des Kunden, vom Kunden betrieben, auf jeder Ebene vom Kunden kontrolliert. Maximale Souveränität bei maximalem Betriebsaufwand. Richtig für die sensibelsten Workloads (Verschlusssachen, Verteidigung, Kernbankensysteme).

### Muster 2: verwaltete souveräne Cloud
Hardware des Cloud-Providers + souveräne Rechtsordnung + vom Kunden kontrollierte Schlüssel + transparente Lieferkette. Vereinfachter Betrieb bei substanzieller Souveränität. Richtig für die meisten regulierten Unternehmens-Workloads.

### Muster 3: Hybrid aus souveräner und nicht souveräner Cloud
Workloads mit kritischen Funktionen auf der souveränen Cloud, unkritische beim Hyperscaler. Ein verbreitetes Muster bei Finanzdienstleistern.

### Muster 4: souveräne Edge-Cloud
Die souveräne Cloud wird auf Edge-Standorte innerhalb der Rechtsordnung verteilt. Richtig für Workloads, die sowohl Souveränität als auch Nähe zum Edge brauchen (IoT, Telco).

## Cozystack als Fundament der souveränen Cloud

Cozystack ist Open Source (Apache 2.0), wird als CNCF-Projekt gesteuert (die Roadmap bestimmt die Community), unterstützt Air-Gap-Installationen, vom Kunden kontrollierte Schlüssel und einen vollständigen Audit-Trail.

Speziell für Betreiber souveräner Clouds:
- Mandantenmodell mit dem Tenant CRD — für ein souveränes Cloud-Produkt für Endkunden
- Cozystack Dashboard — Self-Service-Oberfläche für Kunden
- Integration der WHMCS-Abrechnung — für ein Abonnement-Angebot an Endkunden (ein Ænix-Produkt auf Basis von Cozystack, keine Upstream-Komponente)
- Air-Gap-Installation unterstützt und dokumentiert
- VictoriaMetrics + VictoriaLogs — selbst gehostete Observability (keine SaaS-Abhängigkeit)
- Cilium-Netzwerk — souveränitätsfreundlich, keine Abhängigkeit von einer proprietären Netzwerkplattform

## Zeitplan der Umsetzung

Ein souveränes Cloud-Produkt aufzubauen dauert länger als eine nicht souveräne Cloud:

- **Discovery + Assessment:** 4–8 Wochen
- **Architektur und Beschaffungsreife:** 2–4 Monate
- **Plattformaufbau in Phase 2:** 8–24 Monate einschließlich Zertifizierungsarbeit
- **Onboarding der Kunden:** fortlaufend

Insgesamt: 12–30 Monate vom Projektstart bis zur allgemeinen Verfügbarkeit für den ersten Kunden, je nach Umfang der Zertifizierung.

## Zusammenarbeit mit Ænix

Ænix baut souveräne Cloud-Produkte von Anfang bis Ende. Teams in der EU und in Zentralasien. Open-Source-Fundament. Dokumentation, die für die Beschaffung bereit ist.

Details finden Sie auf der **[Seite zum Sovereign Cloud Builder](/de/dienstleistungen/sovereign-cloud-builder/)**.
