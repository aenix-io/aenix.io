---
title: "Internal Developer Platform — gebaut für Adoption, nicht nur Architektur"
description: "Die meisten Internal Developer Platforms scheitern nicht, weil die Architektur falsch ist, sondern weil Produkt-Teams sie nicht nutzen. Die Plattform mit..."
related_pages:
  - /de/dienstleistungen/platform-engineering
  - /products/cozystack
language: "de"
direct_answer: |
  **Eine Internal Developer Platform (IDP) ist eine intern bereitgestellte, opinionated Self-Service-Schicht, über die Produkt-Teams Umgebungen, Datenbanken und Deployments selbst bereitstellen, ohne für jede Anfrage ein Ticket beim Plattform- oder DevOps-Team zu öffnen. Sie richtet sich an Organisationen mit drei oder mehr Produkt-Teams, langer Time-to-Environment und inkonsistenten Infrastruktur-Mustern. Aenix baut IDPs, die tatsächlich adoptiert werden: Golden-Path-Templates, GitLab-Automation und Argo-CD-Workflows auf einer mandantenfähigen Cozystack-Foundation (KubeVirt für VMs und Container über eine Kubernetes-API, Cilium-Networking, LINSTOR-Storage, Tenant-CRD-Isolation). Cozystack ist Apache-2.0-lizenziert; Aenix liefert mit der Ænix Platform IDP Edition die produktisierte Variante plus operatives Handover, das Ihr Plattform-Team aufrechterhalten kann.**

quick_facts:
  - label: "Was es ist"
    value: "Eine intern bereitgestellte Self-Service-Plattform mit Golden Paths, über die Produkt-Teams Umgebungen und Deployments ohne Tickets selbst bereitstellen"
  - label: "Für wen"
    value: "Organisationen mit 3+ Produkt-Teams, langer Time-to-Environment und mit Tickets überlasteter Plattform-/DevOps-Funktion"
  - label: "Foundation"
    value: "Cozystack — KubeVirt (VMs und Container über eine Kubernetes-API), Cilium (eBPF) Networking, LINSTOR/DRBD Storage, Tenant-CRD-Mandantenfähigkeit"
  - label: "Lizenz"
    value: "Apache 2.0 (keine CPU-/Core-basierte Lizenzierung)"
  - label: "Status"
    value: "Cozystack ist ein CNCF-Projekt (Sandbox seit 28.02.2025; Incubating erwartet Spätsommer 2026)"
  - label: "Engagement"
    value: "Ænix Platform IDP Edition plus Services; Preisstufen Basic 1.250 $/Mon. (10 Nodes), Standard 3.000 $, Plus 5.500 $, Enterprise Custom"
  - label: "Kostenloser Einstieg"
    value: "Platform Engineering Maturity Assessment vor dem Aufbau"

faq:
  - q: "Was ist eine Internal Developer Platform (IDP)?"
    a: "Eine IDP ist eine intern bereitgestellte Self-Service-Schicht, über die Produkt-Teams Umgebungen, Datenbanken und Deployments eigenständig bereitstellen, statt für jede Anfrage ein Ticket zu öffnen. Eine gute IDP bietet Golden Paths: vordefinierte, abgesicherte Wege, die das Richtige zum Standardweg machen."
  - q: "Warum scheitern die meisten IDPs?"
    a: "Nicht an der Architektur, sondern an der Adoption. Die elegantesten Plattformen haben oft den niedrigsten internen NPS, weil Produkt-Teams sie nicht nutzen. Aenix baut opinionated Plattformen mit Golden Paths und operativem Handover, sodass die IDP tatsächlich adoptiert und vom Plattform-Team aufrechterhalten wird."
  - q: "Brauche ich Backstage für eine IDP?"
    a: "Nein. Backstage als Tapete über chaotischer Infrastruktur löst das Adoptionsproblem nicht. Aenix setzt auf eine opinionated Plattform mit Golden Paths, GitLab-Automation und Argo-CD-Workflows auf einer mandantenfähigen Cozystack-Foundation statt auf einen reinen Service-Katalog."
  - q: "Wer braucht eine Internal Developer Platform?"
    a: "Organisationen mit drei oder mehr Produkt-Teams mit überlappenden Bedürfnissen, einer Time-to-Environment im Wochenbereich, mehreren inkonsistenten Infrastruktur-Mustern und einer bestehenden Plattform- oder DevOps-Funktion, die mit Tickets überlastet ist."
  - q: "Worauf baut die Aenix-IDP technisch auf?"
    a: "Auf Cozystack: KubeVirt führt VMs und Container über eine einzige Kubernetes-API aus, Cilium (eBPF) übernimmt das Networking, LINSTOR/DRBD den Storage, und Tenant-CRDs sorgen für mandantenfähige Isolation. Darüber liegen IDP-Schichten wie GitLab-Automation, Argo-CD-Workflows und Golden-Path-Templates."
  - q: "Was kostet das Engagement?"
    a: "Cozystack selbst ist Apache-2.0-lizenziert und kostenlos, ohne CPU- oder Core-basierte Lizenzierung. Aenix liefert die produktisierte Ænix Platform IDP Edition plus Services in Stufen: Basic 1.250 $/Monat (10 Nodes), Standard 3.000 $, Plus 5.500 $ und Enterprise nach Vereinbarung."
---

**Die meisten Internal Developer Platforms scheitern nicht, weil die Architektur falsch ist, sondern weil Produkt-Teams sie nicht nutzen. Die Plattform mit der höchsten Engineering-Eleganz hat oft den niedrigsten internen NPS.**

Aenix baut Internal Developer Platforms (IDPs) die adoptiert werden. Nicht Backstage als Tapete über Chaos; eine opinionated Plattform mit Golden Paths, mandantenfähiger Grundlage und operativem Handover, das Ihr Plattform-Team aufrechterhalten kann.

> **Passt zu:** **[Ænix Platform IDP Edition](/de/produkte/aenix-platform/idp-edition/)** — Internal Developer Platform Layer (GitLab-Automation, Argo CD Workflows, APIs, Golden-Path-Templates, Engineering-Productivity-Dashboards) auf der Cozystack-Cloud-Foundation. Kostenloses [Platform Engineering Maturity Assessment →](/de/ressourcen/platform-engineering-maturity-assessment/).

<div class="cta-row">
  <a class="cta-primary" href="/contact/">Discovery-Call buchen</a>
  <a class="cta-secondary" href="/de/blog/2026/05/internal-developer-platform-beispiele-ohne-backstage/">IDP-Beispiele →</a>
</div>

---

## Wer braucht eine IDP

- 3+ Produkt-Teams mit überlappenden Bedürfnissen
- Time-to-Environment in Wochen
- Mehrere inkonsistente Infrastruktur-Muster
- Bestehende Plattform/DevOps-Funktion mit Tickets überlastet

---

/contact/

---

*Aenix ist das Team hinter Cozystack.*

<!-- Keyword: internal developer platform DE 250/KD 11. Word count: ~300. -->
