---
title: "Enterprise Platform Engineering — interne Plattformen für große Organisationen"
seo_title: "Enterprise Platform Engineering für große Organisationen"
description: "Interne Plattformen im Enterprise-Maßstab, bei denen Mandantenfähigkeit, Trennung von Geschäftsbereichen, Governance und Multi-Region-Betrieb Pflicht sind."
related_pages:
  - /de/dienstleistungen/platform-engineering/
  - /de/dienstleistungen/internal-developer-platform/
  - /de/produkte/private-cloud-platform/
  - /de/produkte/cozystack/
language: "de"
hreflang_en: /services/enterprise-platform-engineering/
quick_facts_style: "rows"
faq_style: "rows"
direct_answer: |
  **Enterprise Platform Engineering ist die Disziplin, interne Plattformen für große Organisationen aufzubauen und zu betreiben, in denen viele Produktteams über mehrere Geschäftsbereiche, Regionen und Rechtsräume hinweg arbeiten. In diesem Maßstab sind Mandantenfähigkeit, Governance, Auditfähigkeit und Betrieb im großen Stil Pflicht, nicht optional. Zielgruppe sind Engineering-Organisationen mit rund 500 und mehr Mitarbeitenden, in denen sich fünf oder mehr Teams eine Plattform teilen und mehrere Cluster in mehreren Regionen betrieben werden. Ænix setzt das auf Cozystack um, einem CNCF-Sandbox-Projekt unter Apache 2.0, das VMs und Container über KubeVirt auf einer Kubernetes-API betreibt, mit Cilium-Networking (eBPF), LINSTOR/DRBD-Storage und struktureller Mandantenfähigkeit über das Tenant-CRD. Ænix kombiniert ein Platform Readiness Assessment, eine Ænix-Plattform und praktisches Engineering zu einer Plattform, die als Produkt geführt wird — mit Flottenmanagement und an die Identitätsverwaltung angebundenem RBAC.**
quick_facts:
  - label: "Was es ist"
    value: "Die Disziplin, interne Developer-Plattformen für große Organisationen mit vielen Teams und mehreren Geschäftsbereichen dauerhaft im großen Maßstab aufzubauen und zu betreiben."
  - label: "Für wen"
    value: "Engineering-Organisationen mit rund 500+ Mitarbeitenden, in denen sich 5+ Produktteams eine Plattform teilen, Geschäftsbereiche getrennt werden müssen und mehrere Cluster bzw. Regionen betrieben werden."
  - label: "Wie Ænix liefert"
    value: "Ein Platform Readiness Assessment über 14 oder 28 Tage, danach 3–12 Monate Aufbau auf Cozystack je nach Umfang; Programme über mehrere Regionen: 3–6 Monate Pilot, danach 9–18 Monate."
  - label: "Mandantenfähigkeit"
    value: "Strukturell über das Tenant-CRD von Cozystack; gleichwertige Abstraktionen, wo andere Stacks im Einsatz sind (z. B. das Project-CRD von OpenShift)."
  - label: "Lizenz"
    value: "Apache 2.0 (keine Lizenzkosten pro CPU oder Core)"
  - label: "Status"
    value: "Cozystack ist ein CNCF-Projekt (Sandbox seit 28.02.2025; Antrag auf Incubation in der Due-Diligence-Prüfung)"
faq:
  - q: "Worin unterscheidet sich Enterprise Platform Engineering von Platform Engineering für ein einzelnes Team?"
    a: "Im Umfang. Platform Engineering für ein Team optimiert für eines oder wenige Teams. Im Enterprise-Maßstab kommen unverzichtbare Mandantenfähigkeit, Trennung zwischen Geschäftsbereichen, Governance, Auditfähigkeit und Multi-Cluster-Betrieb über Regionen und Rechtsräume hinzu. Für 1–3 Teams bietet Ænix stattdessen seine regulären Platform Engineering Services an."
  - q: "Wann braucht eine Organisation tatsächlich den Enterprise-Umfang?"
    a: "Typischerweise, wenn sich fünf oder mehr Produktteams eine Plattform teilen, mehrere Geschäftsbereiche getrennt werden müssen, Souveränitätsvorgaben aus verschiedenen Rechtsräumen gelten, die Engineering-Organisation 500 Personen oder mehr umfasst oder der Betrieb mehrere Cluster und Regionen umspannt. Darunter passt das reguläre Platform-Engineering-Projekt besser."
  - q: "Mit welcher Technologie baut Ænix Enterprise-Plattformen?"
    a: "Mit Cozystack, einem CNCF-Sandbox-Projekt unter Apache 2.0. Es betreibt VMs und Container über KubeVirt auf einer Kubernetes-API, nutzt Cilium (eBPF) für das Networking, LINSTOR/DRBD für Storage und das Tenant-CRD für strukturelle Mandantenfähigkeit. Ænix ergänzt darauf seine kommerziellen Plattformen, Support und Engineering-Leistungen."
  - q: "Wie lange dauert ein Enterprise-Plattformprojekt?"
    a: "Es beginnt mit einem Platform Readiness Assessment, das den Umfang klärt. Der Aufbau dauert je nach Umfang typischerweise 3–12 Monate; Programme über mehrere Regionen laufen mit 3–6 Monaten Pilot und danach 9–18 Monaten, weil Flottenmanagement, Governance und Konsistenz über Regionen hinweg zusätzlichen Aufwand bedeuten."
  - q: "Wie funktionieren Governance und Identitäten im Enterprise-Maßstab?"
    a: "RBAC wird an die Identitätsverwaltung des Unternehmens angebunden, und die Plattform ist auf Auditfähigkeit ausgelegt, um Compliance-Anforderungen zu unterstützen. Die Mandantenfähigkeit ist strukturell statt konventionsbasiert: Geschäftsbereiche und Teams sind auf Plattformebene isoliert, statt sich auf manuelle Prozesse zu verlassen."
  - q: "Gibt es Lizenzkosten pro Core oder CPU?"
    a: "Nein. Cozystack steht unter Apache 2.0 ohne Lizenzkosten pro CPU oder Core. Ænix verkauft darauf Abonnements (Support-Stufen und kommerzielle Module) sowie Dienstleistungen, keine Lizenzen mit Kosten pro Core."
---

**Enterprise Platform Engineering ist die Disziplin, interne Plattformen für Organisationen mit mehreren Produktteams, getrennten Geschäftsbereichen und dauerhaft großem Maßstab aufzubauen und zu betreiben. Das ist ein anderer Umfang als „Platform Engineering für ein einzelnes Team“ — Mandantenfähigkeit, Governance und Betrieb im großen Stil sind nicht verhandelbar.**

> **Passt zu:** **[Ænix Private Cloud Platform](/de/produkte/private-cloud-platform/)** — regulierter Betrieb über mehrere Rechenzentren plus die Developer-Self-Service-Schicht, die eine Enterprise-IDP braucht.

<div class="cta-row">
  <a class="cta-primary" href="/de/kontakt/">Gespräch vereinbaren</a>
  <a class="cta-secondary" href="/de/dienstleistungen/platform-engineering/">Platform Engineering →</a>
</div>

---

## Wann der Enterprise-Umfang zählt

- 5+ Produktteams teilen sich eine Plattform
- Trennung mehrerer Geschäftsbereiche erforderlich
- Souveränitätsvorgaben aus mehreren Rechtsräumen
- Engineering-Organisation mit 500+ Mitarbeitenden
- Betrieb über mehrere Cluster und Regionen

Für einen kleineren Umfang (ein Team oder 1–3 Teams) siehe die **[Platform Engineering Services](/de/dienstleistungen/platform-engineering/)** im regulären Umfang.

---

<div class="band-fullbleed band-fullbleed--tint">
<div class="band-fullbleed__inner">

## Was im Enterprise-Maßstab anders ist

- **Strukturelle Mandantenfähigkeit** — Tenant-CRD auf Cozystack; Project-CRD bei OpenShift; gleichwertige Abstraktionen.
- **Eingebundene Governance** — RBAC an die Identitätsverwaltung des Unternehmens angebunden; Auditfähigkeit für Compliance.
- **Multi-Cluster-Betrieb** — Flottenmanagement, Föderation, Konsistenz über Regionen.
- **Plattform als Produkt** — interne Produktmanagement-Disziplin.
- **Kapazitätsplanung** — vierteljährliches Review auf Organisationsebene.

</div>
</div>

---

## Ablauf des Projekts

<div class="arch-section__fig">
<div class="diagram">
<div class="diagram__node"><b>Platform Readiness Assessment</b><div class="diagram__chips"><span>Arbeitspakete für den Enterprise-Maßstab</span></div></div>
<div class="diagram__conn">klärt den Umfang für</div>
<div class="diagram__node"><b>Umsetzung in Phase 2</b><div class="diagram__chips"><span>3–12 Monate</span></div></div>
<div class="diagram__conn">baut</div>
<div class="diagram__node diagram__node--brand"><b>Ænix-Plattform auf Cozystack</b><div class="diagram__chips"><span>Mandantenfähigkeit über das Tenant-CRD</span><span>Cilium (eBPF)</span><span>LINSTOR/DRBD</span></div></div>
<div class="diagram__conn">liefert</div>
<div class="diagram__node"><b>Enterprise-Plattform als Produkt</b><div class="diagram__chips"><span>Flottenmanagement</span><span>RBAC mit Identitätsanbindung</span><span>Auditfähigkeit</span></div></div>
</div>
</div>

Reguläres **[Platform Readiness Assessment](/de/dienstleistungen/platform-readiness-assessment/)** mit Schwerpunkt auf Arbeitspaketen für den Enterprise-Maßstab. Der Aufbau dauert je nach Umfang typischerweise 3–12 Monate; Programme über mehrere Regionen länger.

<div class="cta-row">
  <a class="cta-primary" href="/de/kontakt/">Gespräch vereinbaren</a>
</div>

---

*Ænix hat [Cozystack](https://cozystack.io) initiiert und pflegt es gemeinsam mit Maintainern anderer Unternehmen.*
