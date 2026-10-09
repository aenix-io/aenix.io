---
title: "Wie man eine souveräne Cloud aufbaut — Playbook für die EU und Zentralasien 2026"
seo_title: "Souveräne Cloud aufbauen: EU und Zentralasien"
description: "Was Souveränität in der Praxis bedeutet, welche Regelwerke sie definieren und welche Architekturmuster eine souveräne Cloud in EU und Zentralasien trägt."
slug: "souveraene-cloud-aufbauen-eu-zentralasien"
date: "2026-05-03"
cover_image: "/img/blog/covers/de/souveraene-cloud-aufbauen-eu-zentralasien.jpg"
author: "Timur Tukaev"
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
      explanation: "SecNumCloud ist die strenge französische Souveränitätsanforderung. BSI C5 ist der deutsche Kriterienkatalog für Cloud-Sicherheit. EUCS ist das vorgeschlagene EU-weite Schema, dessen Annahme noch aussteht."
    - q: "Welchen Zeitrahmen hat ein nationales souveränes Cloud-Programm mit mehreren Regionen typischerweise?"
      options:
        - { text: "Eine Installation an einem einzigen Wochenende", correct: false }
        - { text: "3–6 Monate Pilot, dann 9–18 Monate bis zum vollen Multi-Region-Betrieb, Zertifizierung parallel", correct: true }
        - { text: "Fünf bis zehn Jahre schrittweiser Ausbau", correct: false }
      explanation: "Nach einem Assessment von 14 oder 28 Tagen läuft ein nationales oder Betreiberprogramm mit 3–6 Monaten Pilot und danach 9–18 Monaten bis zum vollen Multi-Region-Betrieb. Die Zertifizierung läuft parallel und kann den Termin des ersten zertifizierten Dienstes verschieben. Ein einzelner Anbieter im Providermaßstab ist deutlich schneller live."
    - q: "Welche Eigenschaft wird NICHT als Unterstützung für Betreiber souveräner Clouds genannt?"
      options:
        - { text: "Verpflichtende Phone-Home-Telemetrie", correct: true }
        - { text: "Mandantenfähigkeit über das Tenant CRD", correct: false }
        - { text: "Selbst betriebene Observability", correct: false }
        - { text: "Unterstützung für Air-Gap-Installationen", correct: false }
      explanation: "Cozystack hat standardmäßig kein Phone-Home — Telemetrie ist Opt-in. Der Artikel nennt das ausdrücklich als souveränitätsfreundliche Eigenschaft. Tenant CRD, Cozystack Dashboard, Air-Gap, VictoriaMetrics + VictoriaLogs und Cilium sind die genannten souveränitätsfreundlichen Cozystack-Funktionen; die WHMCS-Abrechnung ist ein Ænix-Modul darüber."
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
- **EUCS (EU Cybersecurity Certification Scheme for Cloud Services)** — vorgeschlagenes EU-weites Schema (Annahme ausstehend)
- **SecNumCloud** (Frankreich) — strenge französische Souveränitätsanforderung
- **BSI C5** (Deutschland) — deutscher Kriterienkatalog für Cloud-Sicherheit
- **DORA** — speziell für Finanzdienstleistungen, gilt für Cloud-Provider, die Banken bedienen
- **NIS2** — breitere Cybersicherheit; Cloud-Anbieter gehören zu einem Sektor nach Anhang I (wesentliche oder wichtige Einrichtungen, je nach Größe)

### Zentralasien
- **Kasachstan** — durch die Beschaffung vorgeschriebene Souveränität für Workloads des öffentlichen Sektors.
- **Weitere GUS-Staaten** — verschiedene nationale Regelwerke im Entstehen

### Andere Regionen
- **Französisches SecNumCloud** außerhalb Frankreichs: wird zunehmend als Referenz herangezogen
- **Asien-Pazifik** — Singapur IM8, Indien MeitY, Australien IRAP usw.

## Architekturmuster für die souveräne Cloud

### Muster 1: vollständig On-Premises betriebene souveräne Cloud
Hardware des Kunden, vom Kunden betrieben, auf jeder Ebene vom Kunden kontrolliert. Maximale Souveränität bei maximalem Betriebsaufwand. Richtig für die sensibelsten Workloads (Verschlusssachen, Kernbankensysteme).

### Muster 2: verwaltete souveräne Cloud
Hardware des Cloud-Providers + souveräne Rechtsordnung + vom Kunden kontrollierte Schlüssel + transparente Lieferkette. Vereinfachter Betrieb bei substanzieller Souveränität. Richtig für die meisten regulierten Unternehmens-Workloads.

### Muster 3: Hybrid aus souveräner und nicht souveräner Cloud
Workloads mit kritischen Funktionen auf der souveränen Cloud, unkritische beim Hyperscaler. Ein verbreitetes Muster bei Finanzdienstleistern.

### Muster 4: souveräne Edge-Cloud
Die souveräne Cloud wird auf Edge-Standorte innerhalb der Rechtsordnung verteilt. Richtig für Workloads, die sowohl Souveränität als auch Nähe zum Edge brauchen (IoT, Telco).

## Cozystack als Fundament der souveränen Cloud

Cozystack ist Open Source (Apache 2.0), wird als CNCF-Projekt gesteuert (die Roadmap bestimmt die Community), unterstützt Air-Gap-Installationen, Volume-Verschlüsselung mit Schlüsseln beim Kunden (Opt-in) und Audit-Logs, die sich in Systeme des Kunden ausleiten lassen.

Speziell für Betreiber souveräner Clouds:
- Mandantenmodell mit dem Tenant CRD — für ein souveränes Cloud-Produkt für Endkunden
- Cozystack Dashboard — Self-Service-Oberfläche für Kunden
- Integration der WHMCS-Abrechnung — für ein Abonnement-Angebot an Endkunden (ein Ænix-Produkt auf Basis von Cozystack, keine Upstream-Komponente)
- Air-Gap-Installation unterstützt und dokumentiert
- VictoriaMetrics + VictoriaLogs — selbst gehostete Observability (keine SaaS-Abhängigkeit)
- Cilium-Netzwerk — souveränitätsfreundlich, keine Abhängigkeit von einer proprietären Netzwerkplattform

## Zeitplan der Umsetzung

Ein souveränes Cloud-Produkt aufzubauen dauert länger als eine nicht souveräne Cloud:

- **Discovery + Assessment:** kostenloses 30-minütiges Discovery-Gespräch, danach ein [Platform Readiness Assessment](/de/dienstleistungen/platform-readiness-assessment/) zum Festpreis (14 oder 28 Tage)
- **Einzelner Anbieter im Providermaßstab:** Plattform mit dem produktisierten Installer wenige Wochen nach Bereitstellung der Hardware live
- **Nationales oder Betreiberprogramm:** 3–6 Monate Pilot, danach 9–18 Monate bis zum vollen Multi-Region-Betrieb
- **Zertifizierung:** läuft parallel zum Aufbau; ihr Umfang kann den Termin des ersten zertifizierten Dienstes verschieben
- **Onboarding der Kunden:** fortlaufend

## Zusammenarbeit mit Ænix

Ænix baut souveräne Cloud-Produkte von Anfang bis Ende, mit einem Team von rund 20 Personen in der EU und in Zentralasien. Open-Source-Fundament. Dokumentation, die für die Beschaffung bereit ist.

Details finden Sie auf der **[Seite zum Sovereign Cloud Builder](/de/dienstleistungen/sovereign-cloud-builder/)** und bei der **[Ænix Public Cloud Platform](/de/produkte/public-cloud-platform/)**.
