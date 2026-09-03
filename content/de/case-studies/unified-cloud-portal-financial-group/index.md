---
title: "Ein Portal über OpenNebula, VMware und Kubernetes"
description: "Eine Finanzgruppe in Asien legte ein Self-Service-Portal über OpenNebula, VMware und Kubernetes-as-a-Service — vier Monate bis Produktion, Support-Last automatisiert."
hero_subtitle: "Ein Katalog über drei Infrastrukturen, vier Monate bis Produktion"
date: 2026-08-21
lastmod: 2026-08-21
page_type: "case-study"
language: "de"
hreflang_en: "/case-studies/unified-cloud-portal-financial-group/"
images: ["img/og/og-case-unified-cloud-portal-financial-group.png"]
primary_keyword: "Self-Service-Cloud-Portal"
secondary_keywords:
  - "einheitliches Cloud-Portal"
  - "OpenNebula VMware Integration"
  - "Kubernetes as a Service Portal"
  - "Cloud-Servicekatalog"
  - "Private-Cloud-Billing-Portal"
related_pages:
  - /de/produkte/public-cloud-platform/
  - /de/produkte/public-cloud-platform/
  - /de/branchen/finanzdienstleistungen/
  - /de/dienstleistungen/public-cloud-builder/
faq:
  - q: "Mussten die bestehenden OpenNebula- und VMware-Bestände abgelöst werden?"
    a: "Nein, und genau das ist der Punkt. Beide bleiben, wo sie sind, und tragen ihre Workloads weiter. Das Portal liegt darüber — als Katalog und als Bestellweg — und spricht mit jedem der Systeme über ein eigenes Backend-Modul. Einen Hypervisor-Bestand abzulösen ist ein mehrjähriges Programm; eine einheitliche Bestelloberfläche darüberzulegen dauert Monate und ist meist das, wonach das Geschäft tatsächlich gefragt hat."
  - q: "Warum wurde das Portal auf der Kubernetes-API gebaut und nicht auf einem klassischen Applikations-Stack?"
    a: "Weil damit eine komplette Klempner-Ebene entfällt. Der Kubernetes-API-Server ist die Aggregationsebene und der Datenbus zwischen Frontends und Backend-Controllern: Jede Operation läuft über eine konsistente API, RBAC und Audit kommen von der Plattform statt aus Anwendungscode, die Watch-API liefert den Frontends Echtzeit-Updates ohne Polling, und horizontale Skalierung ist der Normalfall statt eines Projekts."
  - q: "Wie ist das Portal intern aufgebaut?"
    a: "Als unabhängige Module. Im Frontend: ein Accounting-Portal für Billing, Nutzer und Verbrauch; ein Console-Portal für VMs, Netze und IP-Adressen; ein Support-Portal für Tickets und Wissensdatenbank. Im Backend: getrennte Microservices für Accounting, Files und Objektspeicher, Apps (die Adapter für OpenNebula und VMware), Usage-Reporting und Tarife, Support, Notification und Logging. Jedes Modul hat eigene Geschäftslogik und skaliert für sich."
  - q: "Lassen sich später weitere Infrastruktur-Anbieter anbinden?"
    a: "Ja. Ein Anbieter ist ein Backend-Modul hinter derselben API — dasselbe Muster wie bei OpenNebula und VMware. Eine weitere Plattform oder ein externer Service-Provider ändert weder Frontend noch Katalogmodell."
  - q: "Was hat das Team des Kunden außer der Software bekommen?"
    a: "Schulung und Begleitung über den gesamten Aufbau, L3-Support im ersten Jahr und einen bewussten Kompetenztransfer — die Gruppe betreibt das Portal selbst und hängt nicht daran, dass wir es am Leben halten."
---

<div class="cs-tags">
  <span class="cs-tag">Self-Service-Portal</span>
  <span class="cs-tag">OpenNebula · VMware</span>
  <span class="cs-tag">Kubernetes-as-a-Service</span>
  <span class="cs-tag">Billing · SSO</span>
  <span class="cs-tag">Finanzgruppe</span>
</div>

**Eine Finanzgruppe in Asien betrieb drei Infrastrukturen parallel — OpenNebula, VMware und Kubernetes-as-a-Service — jede mit eigenem Zugang, und jede Service-Anfrage landete als Handarbeit beim Support. Wir haben ein Self-Service-Portal über alle drei gelegt: ein Katalog, ein Login, automatisiertes Provisioning, Ticketing und Billing an derselben Stelle. Nach vier Monaten produktiv, etwa doppelt so schnell wie vergleichbare Projekte — und kein Bestand musste dafür ersetzt werden.**

<div class="cs-stats">
  <div class="cs-stat"><div class="cs-stat__num">4 Monate</div><div class="cs-stat__label">von Projektstart bis Produktion, rund doppelt so schnell wie vergleichbare Builds</div></div>
  <div class="cs-stat"><div class="cs-stat__num">3 Systeme</div><div class="cs-stat__label">OpenNebula, VMware und Kubernetes-as-a-Service hinter einem Katalog</div></div>
  <div class="cs-stat"><div class="cs-stat__num">1 Einstieg</div><div class="cs-stat__label">für Nutzer statt mehrerer getrennter Systeme mit je einem Ticket</div></div>
</div>

## Über das Projekt

Der Kunde ist eine Finanzgruppe, die eigene Infrastruktur für interne Teams und für Kunden betreibt. Über die Jahre hatte sich die übliche Schichtung angesammelt: ein OpenNebula-Bestand, ein VMware-Bestand und ein neueres Kubernetes-as-a-Service-Angebot. Jedes für sich kompetent betrieben. Keines mit einer gemeinsamen Eingangstür.

Für Nutzer hieß eine Bestellung: wissen, in welchem System die Sache lebt, den richtigen Zugang finden und jemanden fragen. Für den Support war jede Anfrage Handarbeit — Provisioning, Zugriffe, Quotas, Rückfragen. Dieser Aufwand wuchs mit dem Bestand, und dagegen anzustellen war keine Strategie.

## Ziele

- Ein Katalog und ein Login über Services aus allen drei Systemen statt mehrerer getrennter Einstiege.
- Automatisieren, was der Support von Hand provisionierte, damit seine Last nicht mit dem Bestand mitwächst.
- OpenNebula und VMware bleiben im Betrieb — das Portal integriert sie, statt sie zu verdrängen.
- Billing, Verbrauchs-Reporting, Ticketing und Audit als Teil derselben Oberfläche, nicht als später angeflanschte Werkzeuge.
- Die Gruppe soll die Plattform selbst betreiben und erweitern können.

## Lösung

Ein Portal auf der Kubernetes-API statt daneben. Der API-Server ist Aggregationsebene und einziger Datenbus: Frontends sprechen mit ihm, Backend-Controller und -Services liegen dahinter, externe Datenbanken und Systeme hängen daran.

Diese Entscheidung leistet mehr, als sie zunächst aussieht:

- **Einheitlichkeit** — jede Operation, vom Bestellen einer VM bis zur Rechnung, läuft über dieselbe Standard-API.
- **Sicherheit** — RBAC und Audit sind Eigenschaften der Plattform, nicht etwas, das jeder Service neu implementiert.
- **Skalierbarkeit** — horizontale Skalierung ab Werk.
- **Echtzeit** — die Watch-API schiebt Änderungen sofort an die Frontends; die Konsole zeigt den Ist-Zustand, nicht den letzten Poll.

{{< placeholder-image width="1200" height="640" label="Portal-Architektur: Frontend-Portale (Accounting, Console, Support) sprechen mit dem Kubernetes-API-Server als Aggregationsebene und einheitlichem Datenbus; dahinter Backend-API-Services und Backend-Controller mit Anbindung an externe Datenbanken, OpenNebula, VMware und Kubernetes-as-a-Service" >}}

**Portal-Komponenten.** Registrierung und SSO; persönliches Dashboard; Servicekatalog mit virtuellen Maschinen und Kubernetes-as-a-Service über OpenNebula; Ticket-Center; Wissensdatenbank und Dokumentation; Logging und Audit; Billing und Rechnungsstellung; Administrator-Oberfläche der Plattform.

**Modulare Architektur.** Jedes Modul löst eine Geschäftsaufgabe, ist ein eigenständiger Service, integriert sich über die Kubernetes-API und skaliert für sich:

- **Frontend** — Accounting Portal (Billing, Nutzer, Verbrauch), Console Portal (VMs, Netze, IP-Adressen), Support Portal (Tickets, Wissensdatenbank).
- **Backend** — Accounting; Files (S3); Apps, die Adapter für OpenNebula und VMware; Usage für Berichte und Tarife; Support; Notification; Logging.

## Ergebnisse

- Vier Monate von Arbeitsbeginn bis Produktion — etwa doppelt so schnell wie die Vergleichsprojekte, an denen sich die Gruppe orientiert hatte.
- Eine Self-Service-Oberfläche als Steuerpult für die gesamte Infrastruktur, unabhängig davon, in welchem System ein Service physisch läuft.
- Integration mit den Werkzeugen, die das Team kannte — VMware und OpenNebula — nach einem Muster, das für jeden weiteren Anbieter genauso funktioniert.
- Provisioning, das früher Handarbeit war, läuft als Automatisierung. Daher kommt die geringere Support-Last.
- Schulung und Begleitung des Kundenteams, L3-Support im ersten Jahr, bewusster Kompetenztransfer.

## Warum dieser Fall zählt

<div class="cs-why card-grid">
  <div class="card"><div class="card-body"><h3 class="card-title">Der Bestand muss nicht zuerst weg</h3><p class="card-description">OpenNebula und VMware blieben unangetastet. Das Portal kam darüber — und das Geschäft bekam sein Ergebnis in Monaten statt Jahren.</p></div></div>
  <div class="card"><div class="card-body"><h3 class="card-title">Die Kubernetes-API als Datenbus</h3><p class="card-description">Eine API für alles heißt: RBAC, Audit, Echtzeit und horizontale Skalierung kommen von der Plattform, statt pro Service geschrieben zu werden.</p></div></div>
  <div class="card"><div class="card-body"><h3 class="card-title">Billing gehört ins Portal</h3><p class="card-description">Verbrauch, Tarife und Rechnungen in derselben Oberfläche wie Bestellung und Support — genau das, was Self-Service-Projekte sonst vertagen.</p></div></div>
  <div class="card"><div class="card-body"><h3 class="card-title">Support-Last ist ein Automatisierungsproblem</h3><p class="card-description">Dem Team fehlten keine Leute, sondern automatisiertes Provisioning. Das zu ändern hat die Last verändert.</p></div></div>
</div>

---

*Diese Case Study erscheint anonymisiert (Tier-3-Evidenz): Der Kunde wird über sein Profil beschrieben, nicht über seinen Namen. Eine Kundenreferenz ist unter NDA auf Anfrage möglich — [sprechen Sie mit dem Ænix-Vertrieb](/de/kontakt/).*

*Ænix ist das Team hinter [Cozystack](https://cozystack.io) — einem CNCF-Projekt (heute Sandbox, Incubating erwartet im Spätsommer 2026), Apache 2.0. Ænix kommerzialisiert es als Ænix Platform in zwei Plattforms — Provider und Enterprise — mit den Modulen AI Platform und Developer Self-Service.*
