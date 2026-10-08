---
title: "Souveräne Cloud-Plattform für den öffentlichen Sektor — von der Beschaffung bis zur Produktion"
seo_title: "Souveräne Cloud-Plattform für den öffentlichen Sektor"
description: "Souveräne Cloud für Behörden und öffentliche Einrichtungen: Air-Gap-Installation, NIS2-Lückenanalyse und RFI/RFP über Vergabeportale in EU und Kasachstan."
related_pages:
  - /de/loesungen/data-sovereignty/
  - /de/loesungen/dora-compliance/
  - /de/loesungen/nis2-compliance/
  - /de/dienstleistungen/platform-readiness-assessment/
  - /de/produkte/private-cloud-platform/
  - /de/produkte/public-cloud-platform/
  - /de/produkte/cozystack/
language: "de"
quick_facts_style: "rows"
faq_style: "rows"
hreflang_en: /industries/public-sector/
direct_answer: |
  **Eine souveräne Cloud-Plattform für den öffentlichen Sektor ist Infrastruktur, die Behörden, öffentliche Verwaltung und öffentliche Einrichtungen vollständig selbst besitzen und kontrollieren, sodass regulierte und sensible Daten in der Jurisdiktion bleiben, die Vergaberecht und Gesetz vorschreiben. Ænix baut solche Plattformen für EU-Mitgliedstaaten und Zentralasien auf Cozystack auf, dem Open-Source-Projekt der CNCF (Sandbox, Apache 2.0), das Ænix initiiert hat und gemeinsam mit anderen pflegt; es betreibt virtuelle Maschinen und Container auf einer Kubernetes-API. Projekte beginnen in der Regel mit einem Platform Readiness Assessment zu Souveränität, Lücken gegenüber NIS2 und sektoralen Aufsichtsanforderungen, Vergabereife und Kompetenztransfer und gehen dann in die Umsetzung von der Hardware über die Plattform bis zum Betrieb über. Air-Gap-Deployments, optional aktivierbare Volume-Verschlüsselung und die Wissensübergabe an interne Teams sind feste Bestandteile, und Ænix beantwortet RFI und RFP über die üblichen Vergabekanäle der öffentlichen Hand.**
quick_facts:
  - label: "Was es ist"
    value: "Eine auditfähige, souveräne Cloud-Plattform im Eigentum des Kunden für öffentliche Verwaltung und öffentliche Einrichtungen, gebaut auf dem Open-Source-Fundament Cozystack."
  - label: "Lizenz"
    value: "Apache 2.0 (keine Lizenzkosten pro CPU oder Core)"
  - label: "Status"
    value: "Cozystack ist ein CNCF-Projekt (Sandbox seit 28.02.2025; Antrag auf Incubation in der Due-Diligence-Prüfung)"
  - label: "Für wen"
    value: "IT-Dienstleister der öffentlichen Hand, öffentliche Verwaltung und Betreiber öffentlicher Infrastruktur (Verkehr, Energie, Wasser) in der EU und in Zentralasien, einschließlich wesentlicher Einrichtungen nach NIS2."
  - label: "Standards und Regulierung"
    value: "NIS2 (Geltungsbereich wesentlicher Einrichtungen), Datenlokalisierung und vergaberechtlich geforderte Souveränität; Cozystack ist eine CNCF Certified Kubernetes Distribution mit dem OpenSSF-Best-Practices-Badge; die AENIX s.r.o. ist für ihr eigenes ISMS nach ISO/IEC 27001:2022 zertifiziert."
  - label: "Kernfunktion"
    value: "Air-Gap-Deployments und optional aktivierbare Volume-Verschlüsselung; KubeVirt-VMs und Container, Cilium-Networking (eBPF), LINSTOR/DRBD-Storage, Mandantenfähigkeit über Tenant-CRDs."
  - label: "Vorgehen"
    value: "Zuerst ein Platform Readiness Assessment zum Festpreis (14 oder 28 Tage), dann die durchgängige Umsetzung von der Hardware über die Plattform bis zum Betrieb, mit Runbooks und Kompetenztransfer an interne Teams."
faq:
  - q: "Beantwortet Ænix RFI und RFP der öffentlichen Hand über offizielle Vergabeportale?"
    a: "Ja. Ænix nimmt RFI und RFP über die üblichen Kanäle der öffentlichen Hand entgegen, darunter goszakup.gov.kz, mitwork.kz, zakup.sk.kz und die Unified Procurement Platform in Kasachstan sowie TED und nationale E-Vergabe-Portale in den EU-Mitgliedstaaten. Die Antworten umfassen Unternehmensprofil, Referenzen (soweit freigegeben), technische Erfüllung der Anforderungen und Preise."
  - q: "Kann die Plattform für sensible Daten vollständig air-gapped laufen?"
    a: "Ja. Cozystack unterstützt Air-Gap-Installationen, und Volume-Verschlüsselung (LUKS auf LINSTOR) lässt sich pro Storage Class optional aktivieren; das Schlüsselmanagement legen wir beim Aufbau gemeinsam mit Ihnen fest. Datenklassen, die den Perimeter nicht verlassen dürfen, bleiben auf Infrastruktur in Ihrem Eigentum."
  - q: "Wie hilft das bei NIS2?"
    a: "Öffentliche Verwaltung und Betreiber öffentlicher Infrastruktur in Verkehr, Energie und Wasser fallen häufig als wesentliche Einrichtungen unter NIS2. Ænix-Projekte enthalten einen Arbeitsstrang zur Lückenanalyse gegenüber NIS2 und sektoralen Anforderungen, und die Plattform ist darauf ausgelegt, die Risikomanagementmaßnahmen (Artikel 21) und die Meldepflichten (Artikel 23) von NIS2 zu unterstützen. Die Pflichten bleiben bei der Einrichtung."
  - q: "Gibt es einen proprietären Lock-in?"
    a: "Nein. Das Fundament ist Cozystack, ein CNCF-Projekt unter Apache 2.0 ohne Lizenzkosten pro CPU oder Core. Der Code ist Open Source (Apache 2.0) und vollständig einsehbar — das vermeidet den proprietären Lock-in, der Anbieter in öffentlichen Ausschreibungen oft ausschließt."
  - q: "Kann unser internes Team die Plattform nach dem Aufbau selbst betreiben?"
    a: "Ja. Der Kompetenztransfer ist ein zentrales Ergebnis. Die Umsetzung in Phase 2 reicht von der Hardware über die Plattform bis zum Betrieb und enthält einen dokumentierten Ausstiegspfad mit Wissensübergabe und Runbooks, sodass das Team des Kunden die Plattform eigenständig betreibt."
  - q: "Was verkauft Ænix zusätzlich zum Open-Source-Projekt?"
    a: "Ænix verkauft Plattform-Abonnements (Support, kommerzielle Module und Services) auf Basis von Cozystack — keine Lizenz — sowie Leistungen wie das Platform Readiness Assessment und die Umsetzung. Die Ænix Private Cloud Platform wird nach dem Assessment per RFP angeboten."
---

**Öffentliche Verwaltung und öffentliche Einrichtungen stehen 2026 vor einer besonderen Kombination von Vorgaben: vergaberechtlich geforderte Souveränität (EU-Mitgliedstaaten, Kasachstan, mehrere Länder im APAC-Raum), NIS2 (Einstufung als wesentliche Einrichtung), Regeln zur Datenlokalisierung und wachsender Druck, KI-Workloads auf Datenklassen zu betreiben, die den Perimeter nicht verlassen dürfen. Die architektonische Antwort ist strukturell souverän, vom Kunden kontrolliert und auditfähig — gebaut auf Infrastruktur, die die Organisation tatsächlich besitzt.**

Ænix baut Plattformen für öffentliche Verwaltung und öffentliche Einrichtungen in der EU und in Zentralasien. Open-Source-Fundament ([Cozystack](/de/produkte/cozystack/)), bereit für Vergabeportale, an den Vorgaben der Aufsicht ausgerichtet. Die AENIX s.r.o. ist für ihr eigenes ISMS nach ISO/IEC 27001:2022 zertifiziert ([Zertifikat](/de/compliance/iso-27001/)); Sicherheitsverantwortliche starten am besten mit dem [Leitfaden für CISOs](/de/fuer/ciso/).

> **Passt zu:** **[Ænix Private Cloud Platform](/de/produkte/private-cloud-platform/)** für eine souveräne Cloud mit optional aktivierbarer Verschlüsselung und Air-Gap-Option; **[Public Cloud Platform](/de/produkte/public-cloud-platform/)** für den Start großer Cloud-Angebote der öffentlichen Hand in hyperscalernahem Maßstab.

<div class="cta-row">
  <a class="cta-primary" href="/de/kontakt/">Gespräch vereinbaren</a>
  <a class="cta-secondary" href="/de/loesungen/data-sovereignty/">Lösungen für Datensouveränität →</a>
</div>

---

## Womit öffentliche Einrichtungen zu uns kommen

- **Aufbau souveräner Cloud-Plattformen** — vergaberechtlich geforderte Souveränität nach Vorgaben von EU-Mitgliedstaaten, Kasachstan oder Ländern im APAC-Raum. Siehe **[Datensouveränität](/de/loesungen/data-sovereignty/)**.
- **NIS2 für wesentliche Einrichtungen** — die öffentliche Verwaltung fällt in den Geltungsbereich. Siehe **[NIS2-Compliance](/de/loesungen/nis2-compliance/)**.
- **Souveräne KI-Infrastruktur** — für Behörden, die sensible Bürgerdaten in KI-Anwendungen verarbeiten. Siehe **[Souveräne KI](/de/loesungen/sovereign-ai/)**.
- **Plattform für Datenlokalisierung** — wenn eine Datenklasse auf jeder Ebene in der Jurisdiktion bleiben muss.

Die meisten Projekte laufen über formale Vergabeverfahren; Ænix nimmt RFI und RFP über die üblichen Kanäle in EU-Mitgliedstaaten und in Kasachstan entgegen.

---

<div class="band-fullbleed band-fullbleed--tint">
<div class="band-fullbleed__inner">

## Warum der öffentliche Sektor anders ist

- **Vergabeverfahren sind formal** — RFI-, RFP- und Ausschreibungszyklen laufen über bestimmte Portale (goszakup.gov.kz, mitwork.kz, zakup.sk.kz in Kasachstan; eTendering und nationale Portale in der EU; vergleichbare Verfahren anderswo).
- **Souveränität ist nicht verhandelbar** — nicht „bevorzugt“ oder „mit Einschränkungen“. Entweder liegen die Daten dort, wo es die Vergabeklausel verlangt, oder der Vertrag scheitert.
- **Auditfähigkeit bestimmt die Architektur** — Prüfungen durch die Aufsicht gehören fast sicher zum Betrieb.
- **Kompetenztransfer an interne Teams** — viele Projekte der öffentlichen Hand verlangen eine Wissensübergabe, damit das eigene Team nach dem Aufbau selbstständig arbeitet.
- **Open Source wird bevorzugt** — proprietärer Lock-in führt in der Bewertung oft zum Ausschluss.

</div>
</div>

---

## Wie Ænix mit öffentlichen Einrichtungen zusammenarbeitet

<div class="arch-section__fig">
<div class="diagram">
<div class="diagram__node diagram__node--brand"><b>Platform Readiness Assessment</b><div class="diagram__chips"><span>Souveränität</span><span>Lückenanalyse Aufsicht (NIS2 / sektoral)</span><span>Vergabereife</span></div></div>
<div class="diagram__conn">führt zu</div>
<div class="diagram__node"><b>Umsetzung in Phase 2</b><div class="diagram__chips"><span>Von der Hardware über die Plattform bis zum Betrieb</span></div></div>
<div class="diagram__conn">übergibt an</div>
<div class="diagram__node"><b>Betrieb durch das interne Team</b><div class="diagram__chips"><span>Wissenstransfer</span><span>Runbooks</span></div></div>
</div>
</div>

Der Standardeinstieg: das **[Platform Readiness Assessment](/de/dienstleistungen/platform-readiness-assessment/)** mit Arbeitssträngen, die für den öffentlichen Sektor gewichtet sind — Souveränität, Lückenanalyse gegenüber der Aufsicht (NIS2 / sektoral), Vergabereife und Kompetenztransfer an interne Teams.

Die Umsetzung in Phase 2 läuft durchgängig von der Hardware über die Plattform bis zum Betrieb, mit dokumentiertem Ausstiegspfad (Wissenstransfer und Runbooks), damit das Team des Kunden selbstständig arbeitet.

---

## Referenzen

Kunden aus dem öffentlichen Sektor werden nicht namentlich genannt. Referenzen besprechen wir im Discovery-Gespräch, soweit der Kunde es erlaubt, und [neun Projekte sind ausführlich beschrieben](/de/case-studies/) — anonymisiert, mit Architektur und Zahlen.

{{< quote-carousel >}}

---

## Vergabereife

Wir nehmen RFI und RFP über die üblichen Vergabekanäle der öffentlichen Hand entgegen, darunter:

- **Kasachstan** — goszakup.gov.kz, mitwork.kz, zakup.sk.kz, Unified Procurement Platform
- **EU-Mitgliedstaaten** — TED (Tenders Electronic Daily), nationale E-Vergabe-Portale
- **Andere Länder** — Klärung im Discovery-Gespräch

Unsere Antwort enthält: Unternehmensprofil, bisherige Referenzen aus dem öffentlichen Sektor (soweit freigegeben), die technische Erfüllung der Anforderungen an Souveränität, NIS2 und sektorale Vorgaben sowie Preise.

---

## Warum Ænix für den öffentlichen Sektor

- **Open-Source-Plattform** — Cozystack steht unter Apache 2.0 und ist ein CNCF-Sandbox-Projekt. Kein proprietärer Lock-in; der vollständige Quellcode liegt zur Prüfung offen.
- **Teams in der EU und in Zentralasien.** Engineering-Teams in der EU und in Zentralasien; EU-Verträge über die AENIX s.r.o. (Tschechien); Erfahrung mit Vergabeverfahren in Kasachstan.
- **Kompetenztransfer als Kernleistung** — die Wissensübergabe ist ein zentrales Ergebnis, keine Option.
- **Cozystack unterstützt Air-Gap-Deployments** für die sensibelsten Workloads.

---

## So starten Sie

<div class="cta-row">
  <a class="cta-primary" href="/de/kontakt/">Gespräch vereinbaren</a>
</div>

Weiterlesen:
- **[Datensouveränität](/de/loesungen/data-sovereignty/)** — Projekte mit Fokus auf Souveränität
- **[NIS2-Compliance](/de/loesungen/nis2-compliance/)** — Regulierung für wesentliche Einrichtungen
- **[Souveräne KI](/de/loesungen/sovereign-ai/)** — KI auf sensiblen Daten
- **[Platform Readiness Assessment](/de/dienstleistungen/platform-readiness-assessment/)** — unsere Methodik
- **[Cozystack](/de/produkte/cozystack/)** — das Open-Source-Fundament
- **[Leitfaden für CISOs](/de/fuer/ciso/)** — was Sicherheitsverantwortliche prüfen sollten

---

*Ænix hat Cozystack (CNCF-Sandbox-Projekt, CNCF Certified Kubernetes Distribution, OpenSSF Best Practices) initiiert und pflegt es gemeinsam mit Maintainern anderer Unternehmen. Darauf aufbauend bieten wir drei Plattformen an — Public Cloud, Private Cloud und AI.*
