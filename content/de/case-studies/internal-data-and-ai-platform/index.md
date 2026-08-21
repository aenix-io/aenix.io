---
title: "Eine interne Daten- und KI-Plattform, GPUs inklusive"
description: "Eine interne Plattform für Daten und KI/ML: GPU-Pools mit Time-Slicing und Quotas je Tenant, ein Scheduler für Pods und VMs, Verbrauchsmetriken fürs Billing."
hero_subtitle: "GPU-Pools, Quotas und ein Scheduler für Pods und VMs"
date: 2026-08-21
lastmod: 2026-08-21
page_type: "case-study"
language: "de"
hreflang_en: "/case-studies/internal-data-and-ai-platform/"
images: ["img/og/og-case-internal-data-and-ai-platform.png"]
primary_keyword: "interne KI-Plattform GPU"
secondary_keywords:
  - "mandantenfähiges GPU-Scheduling"
  - "GPU-Quotas Kubernetes"
  - "selbst gehostete KI-Plattform"
  - "GPU-Lifecycle-Management"
  - "Datenplattform und KI-Infrastruktur"
related_pages:
  - /de/produkte/aenix-platform/ai-ml-edition/
  - /de/loesungen/sovereign-ai/
  - /de/loesungen/private-llm/
  - /de/produkte/aenix-platform/idp-edition/
faq:
  - q: "Warum eine Plattform für Daten und KI zugleich?"
    a: "Weil es zweimal dasselbe Infrastrukturproblem ist. Analytik, Data Lakes und Marts, Modelltraining und Model Serving brauchen alle Objektspeicher, Datenbanken, Scheduling, Quotas und Pipelines. Sie zu trennen bedeutet zwei Betriebsmodelle, zwei Kapazitätsplanungen und eine Kopie jedes Datensatzes dazwischen."
  - q: "Wie werden GPUs zwischen Teams geteilt?"
    a: "GPUs liegen in Ressourcen-Pools mit Time-Slicing, Quotas gelten je Tenant und je Projekt. Frei werdende Kapazität wird dynamisch umverteilt, statt hinter demjenigen brachzuliegen, der sie gebucht hat. Jedes Team sieht einen isolierten Bereich, und die Plattform führt ein Inventar über jede Karte, ihren Ort und ihren Zustand."
  - q: "Konkurrieren virtuelle Maschinen und Container um dieselben GPUs?"
    a: "Sie teilen sich einen Scheduler. Pods und VMs werden vom selben Planer platziert, mit denselben Verbrauchsmetriken dahinter — und genau das macht Leistungsverrechnung und belastbare Auslastungsanalyse erst möglich. Was zwei getrennte Scheduler jeweils für ihr Eigentum halten, lässt sich weder abrechnen noch auswerten."
  - q: "Gilt das nur für NVIDIA?"
    a: "Die vollständige Automatisierung — Provisioning, Treiberverwaltung, Lifecycle — steht für NVIDIA. Karten anderer Hersteller werden heute über GPU-Passthrough unterstützt; ihre Automatisierung steht auf der Roadmap."
  - q: "In welchem Stand ist das Projekt?"
    a: "In der Einführung. Die GPU-Unterstützung ist fertig: automatisiertes Provisioning, Passthrough, Monitoring und Verbrauchserfassung. Das MVP der KI-Services steht bei rund siebzig Prozent einer zweimonatigen Phase. Erweiterte Services, bessere Orchestrierung und MIG-Unterstützung folgen in einer dreimonatigen Phase danach."
---

<div class="cs-tags">
  <span class="cs-tag">KI-/ML-Plattform</span>
  <span class="cs-tag">GPU-Pools · Quotas</span>
  <span class="cs-tag">Pods + VMs, ein Scheduler</span>
  <span class="cs-tag">Data Lakes · GitOps</span>
  <span class="cs-tag">In Einführung</span>
</div>

**Eine interne Plattform für zwei Dinge, die große Organisationen sonst zweimal bauen: Daten — Analytik, Lakes und Marts, Modelltraining — und KI/ML-Services von der Entwicklung über das Training bis zum Serving. Darunter liegt KI-taugliche Infrastruktur: GPU-Ressourcenpools mit Time-Slicing und Quotas je Tenant, ein einziger Scheduler, der Pods und virtuelle Maschinen platziert, und Verbrauchsmetriken, die fein genug sind, um Teams zu verrechnen und zu sehen, wohin Kapazität tatsächlich geht. Das Projekt ist in Einführung: GPU-Unterstützung läuft, das MVP der KI-Services ist weitgehend fertig.**

<div class="cs-stats">
  <div class="cs-stat"><div class="cs-stat__num">Ein Scheduler</div><div class="cs-stat__label">für Pods und virtuelle Maschinen, mit Metriken hinter Billing und Analyse</div></div>
  <div class="cs-stat"><div class="cs-stat__num">Je Tenant</div><div class="cs-stat__label">GPU-Pools, Time-Slicing und Quotas je Team und je Projekt</div></div>
  <div class="cs-stat"><div class="cs-stat__num">Phase 2 · 70%</div><div class="cs-stat__label">MVP der KI-Services in einer zweimonatigen Phase; GPU-Support bereits fertig</div></div>
</div>

## Über das Projekt

Der Kunde baut eine interne Plattform, die Datenmanagement und KI/ML-Arbeit für die gesamte Organisation abdeckt, statt jede Funktion ihren eigenen Stack ansammeln zu lassen. Auf der Datenseite: Analytik, Data Lakes und Data Marts, Modelltraining. Auf der KI/ML-Seite: Modelle betreiben, entwickeln und trainieren, als Service für andere Teams.

Beides wird üblicherweise als getrennte Programme geführt — und verbringt danach Jahre damit, sich Datensätze zuzukopieren. Hier teilen sie sich von Anfang an Infrastruktur, Mandantenfähigkeit und Quotas.

## Ziele

- Eine interne Plattform für Datenmanagement und KI/ML-Services statt zweier Betriebsmodelle über einem Bestand.
- GPU-Kapazität, die zwischen Teams geteilt werden kann, ohne jemanden auszuhungern und ohne Karten brachliegen zu lassen.
- Verbrauch genau genug messen, um intern zu verrechnen und Kapazitätsentscheidungen auf Belege zu stützen.
- Mandantenfähigkeit stark genug, dass Teams auf gemeinsamer Hardware isoliert arbeiten.
- Automatisierung des GPU-Lifecycles von der Bereitstellung bis zur Außerbetriebnahme.

## Lösung

**KI-taugliche Infrastruktur: GPUs für Kubernetes und für VMs.**

- **GPU-Infrastrukturschicht** — GPU-Ressourcenpools, Time-Slicing, Quotas je Tenant und je Projekt.
- **Ein Scheduler** — ein Planer für Pods und virtuelle Maschinen, mit Auslastungsmetriken, die Leistungsverrechnung und tiefe Analyse speisen.
- **Daten und Pipelines** — S3-kompatibler Speicher, Datenbanken und Modell-Artefakte, Pipelines GitOps-artig automatisiert.

**Vollständiges GPU-Lifecycle-Management.** Automatisiertes GPU-Provisioning, Passthrough in VMs und in Kubernetes sowie Treiberverwaltung — zusammengeführt statt pro Fall geskriptet:

- Voller Autopilot für NVIDIA-Karten; GPU-Passthrough für andere Hersteller.
- Automatische Treiberinstallation und GPU-Ressourcenverwaltung in Kubernetes.
- Lifecycle- und Ressourcenmanagement, Autoscaling und Provisioning auf Abruf.
- Sicherheit und Mandantenfähigkeit, Außerbetriebnahme und Rolling Upgrades.

{{< placeholder-image width="1200" height="640" label="Interne Daten- und KI-Plattform: GPU-Pools mit Time-Slicing und Quotas je Tenant speisen einen Scheduler, der Pods und VMs platziert; darüber Datendienste (S3-Objektspeicher, Datenbanken, Modell-Artefakte) und GitOps-Pipelines; die GPU-Lifecycle-Schicht übernimmt automatisiertes Provisioning, Passthrough zu VM und Kubernetes, Treiberverwaltung, Autoscaling, Außerbetriebnahme und Rolling Upgrades; Verbrauchsmetriken fließen in Billing, Quotas und Inventar" >}}

## Was die Plattform heute kann

- **Monitoring** — Auslastung, Last und die ungenutzte Kapazität, die vorher niemand erfasst hat.
- **Provisioning** — schnelle Zuteilung von GPU oder vGPU an ein ML-Projekt.
- **Mandantenfähigkeit** — isolierte Arbeitsbereiche je Team.
- **Billing und Quotas** — Limits, Tarife, Verbrauchserfassung.
- **Dynamische Zuteilung** — GPUs gehen bei Freigabe zurück in den Pool, statt reserviert zu bleiben.
- **Inventar** — jede Karte, ihr Standort und ihr Zustand in einem Register.

## Roadmap

- **Phase 1 — fertig. GPU-Unterstützung.** Autopilot für NVIDIA, Passthrough für andere Hersteller, Monitoring und Ressourcenerfassung. Das ist die Infrastrukturschicht.
- **Phase 2 — zwei Monate, rund 70% erledigt. Erstes MVP der KI-Services.** KI-Services im Plattform-Dashboard, Unterstützung für GPUs anderer Hersteller, verbreitete selbst gehostete Modelle.
- **Phase 3 — drei Monate. Erweiterte Services.** Bessere Orchestrierung der KI-Services, Enterprise-Werkzeugsatz für GPUs, MIG-Unterstützung.
- **Phase 4 — Ausbau.** Feinabstimmung der KI-Plattform und Automatisierung für Nicht-NVIDIA-GPUs.

## Warum dieser Fall zählt

<div class="cs-why card-grid">
  <div class="card"><div class="card-body"><h3 class="card-title">Daten und KI auf einer Plattform</h3><p class="card-description">Gleicher Speicher, gleiche Mandantenfähigkeit, gleiche Quotas. Kein zweites Betriebsmodell und keine Kopie jedes Datensatzes zwischen zwei Stacks.</p></div></div>
  <div class="card"><div class="card-body"><h3 class="card-title">Pods und VMs, ein Scheduler</h3><p class="card-description">Erst das macht Leistungsverrechnung möglich: Zwei Scheduler, die beide die Karten für ihr Eigentum halten, liefern keine Zahl, die jemand unterschreibt.</p></div></div>
  <div class="card"><div class="card-body"><h3 class="card-title">Brachliegende GPUs sind eine messbare Größe</h3><p class="card-description">Auslastung, Last und ungenutzte Kapazität je Tenant — und frei werdende Karten gehen zurück in den Pool statt gebucht zu bleiben.</p></div></div>
  <div class="card"><div class="card-body"><h3 class="card-title">Eine Roadmap mit einer fertigen Phase</h3><p class="card-description">GPU-Unterstützung läuft; die KI-Service-Schicht entsteht darauf. Veröffentlicht während der Umsetzung, nicht im Rückblick.</p></div></div>
</div>

---

*Diese Case Study beschreibt ein laufendes Projekt und erscheint anonymisiert (Tier-3-Evidenz): Der Kunde wird über sein Profil beschrieben, nicht über seinen Namen. Eine Kundenreferenz ist unter NDA auf Anfrage möglich — [sprechen Sie mit dem Aenix-Vertrieb](/de/kontakt/).*

*Aenix ist das Team hinter [Cozystack](https://cozystack.io) — einem CNCF-Projekt (heute Sandbox, Incubating erwartet im Spätsommer 2026), Apache 2.0. Aenix kommerzialisiert es als Ænix Platform in zwei Editions — Provider und Enterprise — mit den Modulen AI & GPU und Developer Self-Service.*
