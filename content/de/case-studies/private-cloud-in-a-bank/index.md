---
title: "Eine Private Cloud in einer Bank"
description: "Eine Bank gab ihren internen Teams eine Self-Service-Private-Cloud auf Cozystack: drei Monate bis Produktion, eigenes Keycloak und Ceph, RBAC und Backups."
hero_subtitle: "Self-Service-Umgebungen für interne Teams, drei Monate bis Produktion"
date: 2026-08-21
lastmod: 2026-08-21
page_type: "case-study"
language: "de"
hreflang_en: "/case-studies/private-cloud-in-a-bank/"
images: ["img/og/og-case-private-cloud-in-a-bank.jpg"]
primary_keyword: "Private Cloud für Banken"
secondary_keywords:
  - "Private-Cloud-Plattform Bank"
  - "Self-Service-Umgebungen Unternehmen"
  - "Keycloak RBAC Mandantenfähigkeit"
  - "internes Cloud-Portal Bank"
  - "On-Premise-Cloud Finanzdienstleistungen"
related_pages:
  - /de/produkte/private-cloud-platform/
  - /de/branchen/finanzdienstleistungen/
  - /de/loesungen/dora-compliance/
faq:
  - q: "Musste die Bank ein neues Identity-System einführen?"
    a: "Nein. Das bestehende Keycloak der Bank blieb die maßgebliche Quelle, die Plattform integriert sich damit und bildet Gruppen und Rollen der Bank auf Plattformrollen ab. Niemand bekam einen zweiten Satz Zugangsdaten, und die Joiner-Mover-Leaver-Prozesse funktionieren weiter so, wie die Revision sie bereits kennt."
  - q: "Wer verwaltet die Netzwerkzugriffe innerhalb eines Tenants?"
    a: "Die Teams selbst. Firewall-Regeln, Load Balancer und ACLs liegen innerhalb der Grenzen des eigenen Tenants in ihrer Hand. Das war eine ausdrückliche Anforderung: Self-Service, für den man für eine Firewall-Regel ein Ticket braucht, ist kein Self-Service — und das zentrale Netzwerk-Engineering wollte in dieser Warteschlange nicht stehen."
  - q: "Wie steht es um Backups und Monitoring?"
    a: "Beides ist Teil der Plattform, nicht ein Werkzeug daneben. Backup- und Restore-Regeln werden als Policy verwaltet. Monitoring ist global und je Tenant konfigurierbar, mit schwellwertbasierten Benachrichtigungen über Telegram und SMTP — ein Team beobachtet seine eigenen Services, ohne auf eine Änderung am zentralen Dashboard zu warten."
  - q: "Wurde bestehender Speicher weiterverwendet?"
    a: "Ja — die Plattform ist an das externe Ceph-Cluster der Bank angebunden. Speicher, den die Organisation bereits besitzt, betreibt und kapazitätsseitig plant, muss nicht neu gebaut werden, nur um eine Cloud darauf zu stellen."
  - q: "Wie lange hat es gedauert?"
    a: "Drei Monate vom Beginn der Integration bis zur Produktion. Der kurze Weg kommt daher, dass die Plattform ein Produkt ist und kein Individualbau: Die Arbeit war die Integration mit Identity, Storage und Prozessen der Bank — nicht der Bau einer Cloud aus Einzelteilen."
---

<div class="cs-tags">
  <span class="cs-tag">Private Cloud</span>
  <span class="cs-tag">Bank · reguliert</span>
  <span class="cs-tag">Keycloak · RBAC</span>
  <span class="cs-tag">Externes Ceph</span>
  <span class="cs-tag">Self-Service</span>
</div>

**Eine Bank in Osteuropa wollte, dass ihre internen Teams Umgebungen und Managed Services so bekommen wie aus einer Public Cloud — per Knopfdruck statt per Ticket — ohne dass etwas das Haus verlässt. Geliefert wurde eine vollwertige Self-Service-Private-Cloud, integriert mit dem eigenen Keycloak und dem vorhandenen Ceph-Speicher, mit RBAC je Tenant, selbst verwalteten Netzwerkzugriffen, Backup-Policy und schwellwertbasierten Alarmen. Drei Monate vom Integrationsbeginn bis zur Produktion.**

<div class="cs-stats">
  <div class="cs-stat"><div class="cs-stat__num">3 Monate</div><div class="cs-stat__label">vom Beginn der Integration bis zur Produktion</div></div>
  <div class="cs-stat"><div class="cs-stat__num">Bestehendes Keycloak</div><div class="cs-stat__label">bleibt Identity-Quelle, mit Mapping von Gruppen und Rollen auf Plattformrollen</div></div>
  <div class="cs-stat"><div class="cs-stat__num">Je Tenant</div><div class="cs-stat__label">RBAC, Netzregeln, Backup-Policy, Monitoring-Schwellen und Verbrauchsberichte</div></div>
</div>

<div class="cta-row">
  <a class="cta-primary" href="/de/kontakt/">Gespräch vereinbaren</a>
  <a class="cta-secondary" href="/de/case-studies/">Alle Fallstudien →</a>
</div>

## Über das Projekt

Der Kunde ist eine Bank, die eigene Infrastruktur für ihre Engineering-, Daten- und Produktteams betreibt. Der Druck kam von innen, nicht vom Markt: Teams wollten Umgebungen, Datenbanken und Services auf Abruf — und alles, was sie wollten, musste beantragt, genehmigt und von Hand bereitgestellt werden. Die Lieferung stockte an der Infrastruktur-Warteschlange, und das Infrastrukturteam verbrachte seine Zeit mit wiederkehrendem Provisioning statt mit der Plattform.

Nichts durfte das Haus verlassen, und nichts durfte an den bestehenden Kontrollen vorbeiführen: Identity, Storage, Audit und Backup waren bereits geregelt und geprüft. Eine Cloud, die sie ignoriert, wäre eine zweite Kontrollebene, die man vor einer Aufsicht verteidigen muss — schlimmer als das Problem, das sie löst.

## Ziele

- Internen Teams eine vollwertige Cloud-Erfahrung geben: Managed Services und fertige Umgebungen auf Abruf.
- Bestellen so einfach machen, dass es kein Runbook braucht, und Berichte so einfach, dass Ressourcenverbrauch je Service und je Nutzer ein Klick ist.
- Teams ihre Netzwerkzugriffe — Firewall, Load Balancer, ACLs — innerhalb ihrer Tenant-Grenze selbst verwalten lassen.
- Backup und Restore unter verwaltete Policy stellen statt unter Erfahrungswissen.
- Monitoring global und je Tenant, mit Schwellwert-Alarmen über Telegram und SMTP.
- Integration mit dem, was die Bank bereits betreibt: Keycloak für Identity, RBAC global und je Tenant, externes Ceph für Storage.

## Lösung

Eine Self-Service-Cloud-Plattform, als Produkt geliefert und in die bestehenden Kontrollen der Bank integriert statt daneben gestellt.

**Plattform-Komponenten.** Managed Services per Knopfdruck; Monitoring plus Audit-Trail der Nutzeraktionen; eine öffentliche API für die programmatische Nutzung; eine Weboberfläche für alle anderen; und eine Billing-Oberfläche, die Verbrauchsberichte je Service und je Nutzer erzeugt — interne Leistungsverrechnung statt Rechnungsstellung, aber dieselbe Mechanik.

**Mandantenfähigkeit als Kontrollgrenze.** Jedes Team bekommt einen Tenant mit eigenen Quotas, eigenem RBAC, eigener Netz-Policy und eigenen Monitoring-Schwellen. Was ein Team innerhalb seines Tenants tut, tut es ohne zu fragen; was die Grenze überschreitet, bleibt beim zentralen Engineering. Diese Linie macht Self-Service in einer regulierten Organisation überhaupt vertretbar.

**Integration statt Ersatz.**

- **Keycloak** — die eigene Instanz der Bank bleibt maßgeblich; die Plattform bildet vorhandene Gruppen und Rollen auf Plattformrollen ab.
- **Ceph** — das bestehende externe Cluster dient als Storage, mit seiner Kapazitätsplanung und Betriebshistorie.
- **RBAC** — global und innerhalb jedes Tenants durchgesetzt, konsistent mit der bestehenden Zugriffsprüfung.

{{< case-diagram src="/img/case-studies/private-cloud-in-a-bank-de.webp" alt="Private Cloud in einer Bank: interne Teams steigen über Webkonsole oder öffentliche API ein; die Plattform setzt RBAC, Quotas, Netz-Policy (Firewall, Load Balancer, ACL), Backup-Policy und Schwellwert-Monitoring je Tenant durch; Identity kommt aus dem bestehenden Keycloak der Bank mit Gruppen- und Rollen-Mapping, Storage aus dem externen Ceph-Cluster; Verbrauchsberichte speisen die interne Leistungsverrechnung" >}}

## Ergebnisse

- Eine funktionierende Plattform zur Verwaltung von Cloud-Services, drei Monate nach Integrationsbeginn produktiv.
- Das bestehende Keycloak integriert, mit Mapping von Gruppen und Rollen auf Plattformrollen — eine Identität, ein Prüfprozess.
- Das bestehende externe Ceph als Plattform-Storage angebunden.
- Teams verwalten Netzzugriffe, Backups und Monitoring-Schwellen in ihren eigenen Tenants; das zentrale Engineering verantwortet die Grenzen.
- Schulung und Begleitung des Bankteams, mit L3-Support im Rücken.

## Warum dieser Fall zählt

<div class="cs-why card-grid">
  <div class="card"><div class="card-body"><h3 class="card-title">Self-Service, mit dem eine Aufsicht leben kann</h3><p class="card-description">Freiheit im Tenant, Kontrolle an der Grenze. Teams stehen nicht mehr für Firewall-Regeln an, ohne dass jemand den Audit-Trail verliert.</p></div></div>
  <div class="card"><div class="card-body"><h3 class="card-title">Identity und Storage bleiben</h3><p class="card-description">Keycloak und Ceph waren bereits geregelt, geprüft und kapazitätsgeplant. Die Plattform hat sie integriert, statt Konkurrenten daneben zu stellen.</p></div></div>
  <div class="card"><div class="card-body"><h3 class="card-title">Drei Monate, weil es ein Produkt ist</h3><p class="card-description">Die Arbeit war Integration mit den Prozessen der Bank, nicht der Bau einer Cloud aus Teilen. Genau darin liegt der Unterschied im Zeitplan.</p></div></div>
  <div class="card"><div class="card-body"><h3 class="card-title">Verbrauchsberichte ab dem ersten Tag</h3><p class="card-description">Verbrauch je Service und je Nutzer auf einen Klick — die Zahl, nach der eine interne Plattform gefragt wird, sobald sie beliebt ist.</p></div></div>
</div>

## Ein ähnliches Projekt besprechen

Ein 30-minütiges Discovery-Gespräch reicht, um zu klären, ob diese Architektur zu Ihrer Umgebung passt und was der erste Schritt wäre.

<div class="cta-row">
  <a class="cta-primary" href="/de/kontakt/">Gespräch vereinbaren</a>
  <a class="cta-secondary" href="/demo/">Live-Demo öffnen</a>
</div>

---

*Diese Case Study erscheint anonymisiert: Der Kunde wird über sein Profil beschrieben, nicht über seinen Namen. Eine Kundenreferenz ist unter NDA auf Anfrage möglich — [sprechen Sie mit dem Ænix-Vertrieb](/de/kontakt/).*

*Ænix hat [Cozystack](https://cozystack.io), ein CNCF-Sandbox-Projekt (Antrag auf CNCF Incubation in der Due-Diligence-Prüfung) unter der Apache-2.0-Lizenz, entwickelt und pflegt es gemeinsam mit Maintainern anderer Unternehmen. Darauf baut Ænix drei Plattformen, die sich kombinieren statt ausschließen lassen: Ænix Public Cloud Platform, Ænix Private Cloud Platform und Ænix AI Platform.*
