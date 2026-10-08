---
title: "Private Cloud aufbauen — mit Engineers, die das in Produktion umgesetzt haben"
seo_title: "Private Cloud aufbauen mit den Engineers von Ænix"
description: "Private Cloud von Anfang bis Ende auf Hardware unter Ihrer Kontrolle: Sizing, Plattform, Storage, Netzwerk, Mandantenfähigkeit und Übergabe an Ihr eigenes Team."
related_pages:
  - /de/dienstleistungen/private-cloud-consulting/
  - /de/loesungen/cloud-repatriation/
  - /de/produkte/private-cloud-platform/
  - /de/produkte/public-cloud-platform/
  - /de/produkte/cozystack/
language: "de"
quick_facts_style: "rows"
faq_style: "rows"
hreflang_en: /services/build-private-cloud/
direct_answer: |
  **Eine Private Cloud aufzubauen heißt, Infrastruktur im Cloud-Stil auf Hardware unter Ihrer Kontrolle zu entwerfen, bereitzustellen und zu betreiben — Plattform, Storage, Netzwerk, Mandantenfähigkeit, Observability und Compliance als ein zusammenhängendes System statt als einmaliges Projekt. Das passt zu Organisationen mit einer Platform-Engineering-Funktion und einem klaren Anlass wie dem VMware-Ausstieg, einer Souveränitätsvorgabe, KI-/GPU-Workloads oder aus dem Ruder laufenden Public-Cloud-Kosten. Ænix baut Private Clouds von Anfang bis Ende auf Cozystack, einem Open-Source-CNCF-Projekt, das wir mit Service-Providern, Banken, Telcos und KI-Betreibern produktiv betreiben. Der Stack nutzt KubeVirt für VMs und Container auf einer Kubernetes-API, Cilium-Networking (eBPF) und LINSTOR/DRBD-Storage; nach der Übergabe betreibt das Team des Kunden die Plattform selbst.**

quick_facts:
  - label: "Was es ist"
    value: "Ein End-to-End-Projekt, um eine produktive Private Cloud auf Hardware unter Kontrolle des Kunden zu entwerfen, aufzubauen und zu übergeben, gebaut auf Cozystack."
  - label: "Lizenz"
    value: "Apache 2.0 (keine Lizenzkosten pro CPU oder Core)"
  - label: "Status"
    value: "Cozystack ist ein CNCF-Projekt (Sandbox seit 28.02.2025; Antrag auf Incubation in der Due-Diligence-Prüfung)"
  - label: "Für wen"
    value: "Organisationen, die eine Platform-Engineering-Funktion haben (oder aufbauen) und einen konkreten Anlass: VMware-Ausstieg, Souveränitätsvorgabe, KI-/GPU-Workloads oder sprunghaft steigende Public-Cloud-Kosten."
  - label: "Zeitplan"
    value: "Kostenloses 30-minütiges Discovery-Gespräch, Assessment über 14 oder 28 Tage, danach 3–12 Monate Aufbau, optional laufende Managed Operations."
  - label: "Technologie-Stack"
    value: "Standardmäßig Cozystack auf Talos; KubeVirt für VMs und Container auf einer Kubernetes-API; Cilium-Networking (eBPF); LINSTOR/DRBD-Storage (Piraeus); Mandantenfähigkeit über das Tenant-CRD."
  - label: "Eigentum"
    value: "Die Plattform basiert auf Open Source und wird nach dem Wissenstransfer vom eigenen Team des Kunden betrieben — die Cloud gehört dem Kunden, nicht Ænix."

faq:
  - q: "Was umfasst ein Projekt zum Aufbau einer Private Cloud konkret?"
    a: "Hardware-Sizing und Herstellerauswahl, die Plattformschicht (Cozystack auf Talos oder als Erweiterung eines bestehenden Kubernetes), Storage- und Backup-Architektur, Netzwerk, Mandantenfähigkeit über das Tenant-CRD, Observability und Betriebsprozesse, Self-Service-Golden-Paths, Compliance-Arbeit sowie Wissenstransfer, damit Ihr Team die Plattform selbst betreibt."
  - q: "Wie lange dauert der Aufbau einer Private Cloud mit Ænix?"
    a: "Ein kostenloses 30-minütiges Discovery-Gespräch klärt die Eignung, ein Assessment über 14 oder 28 Tage liefert Architektur, Sizing und Aufbauplan, und der Aufbau selbst dauert je nach Umfang 3–12 Monate. Wer die Plattform nicht selbst betreiben möchte, kann danach laufende Managed Operations beauftragen."
  - q: "Ist die Private Cloud an Ænix gebunden?"
    a: "Nein. Sie basiert auf Cozystack, einem Open-Source-CNCF-Projekt unter Apache 2.0 ohne Lizenzkosten pro CPU oder Core. Nach dem Wissenstransfer betreibt Ihr eigenes Plattform-Team die Cloud. Bei Ænix prägen keine Partnerschaftsinteressen mit Hyperscalern die Architektur."
  - q: "Mit welcher Technologie baut Ænix eine Private Cloud?"
    a: "Standardmäßig mit Cozystack auf Talos: KubeVirt betreibt virtuelle Maschinen und Container auf einer Kubernetes-API, Cilium (eBPF) übernimmt das Networking, LINSTOR/DRBD über Piraeus den Storage. Mandantenfähigkeit, RBAC, Quotas und Audit laufen über das Tenant-CRD."
  - q: "Wann lohnt sich eine eigene Private Cloud statt der Public Cloud?"
    a: "Wenn Sie eine Platform-Engineering-Funktion haben oder aufbauen, einen konkreten Anlass wie den VMware-Ausstieg oder eine Souveränitätsvorgabe haben, dauerhafte Workloads oder KI/GPU in einem Umfang betreiben, bei dem sich dedizierte Infrastruktur rechnet, und ein Team haben, das die Plattform nach der Übergabe betreiben kann. Das Assessment klärt die Eignung, bevor der Aufbau beginnt."
---

**„Eine Private Cloud aufbauen“ klingt, als müsste das 2026 eine einfache Sache sein. In Wirklichkeit ist es ein Architekturproblem, eine Frage der Betriebsdisziplin und eine Frage der Teamkapazität zugleich. Gut gemacht, entsteht eine Plattform, deren Wert über Jahre wächst. Schlecht gemacht, entstehen operative Altlasten und der nächste Notfall.**

Ænix baut Private Clouds von Anfang bis Ende auf Basis von [Cozystack](/de/produkte/cozystack/), einem Open-Source-CNCF-Projekt, das wir mit Service-Providern, Banken, Telcos und KI-Betreibern produktiv betreiben.

> **Passt zu:** **[Ænix Private Cloud Platform](/de/produkte/private-cloud-platform/)** für regulierte Unternehmen, die eine private oder hybride souveräne Cloud aufbauen; **[Public Cloud Platform](/de/produkte/public-cloud-platform/)** für große Betreiber, die eine Multi-Region-Plattform auf dem Niveau einer Public Cloud brauchen.

<div class="cta-row">
  <a class="cta-primary" href="/de/kontakt/">Gespräch vereinbaren</a>
  <a class="cta-secondary" href="/de/blog/2026/05/private-cloud-aufbauen-90-tage-playbook/">Playbook lesen →</a>
</div>

---

<div class="band-fullbleed band-fullbleed--tint">
<div class="band-fullbleed__inner">

## Wer eine Private Cloud erfolgreich aufbaut

Das Vorhaben passt, wenn:

- Sie eine Platform-Engineering-Funktion haben oder aufbauen (das ist eine dauerhafte Betriebsverpflichtung, kein einmaliges Projekt).
- Sie einen konkreten Anlass haben — VMware-Ausstieg, Souveränitätsvorgabe, KI-Workloads, sprunghaft steigende Cloud-Kosten.
- Sich dedizierte Infrastruktur wirtschaftlich trägt (dauerhafte Workloads, regulierte Daten oder KI/GPU in größerem Umfang).
- Ihr Team den Betrieb fortführen kann, wenn Ænix das Projekt abschließt (oder Sie sich für Managed Services entschieden haben).

Wenn Sie sich bei einem dieser Punkte nicht sicher sind, klärt das Assessment die Frage, bevor der Aufbau beginnt.

</div>
</div>

---

## Was ein Projekt „Private Cloud aufbauen“ tatsächlich umfasst

<div class="arch-section__fig">
<div class="diagram">
<div class="diagram__node"><b>Discovery</b><div class="diagram__chips"><span>30 Min.</span><span>Kostenlos</span></div></div>
<div class="diagram__conn">klärt die Eignung</div>
<div class="diagram__node diagram__node--brand"><b>Aufbauprojekt</b><div class="diagram__chips"><span>Entwerfen</span><span>Aufbauen</span><span>Übergeben</span></div></div>
<div class="diagram__conn">liefert</div>
<div class="diagram__node"><b>Private Cloud auf Cozystack</b><div class="diagram__chips"><span>VMs</span><span>Container</span><span>Eine Kubernetes-API</span></div></div>
<div class="diagram__conn">auf</div>
<div class="diagram__node"><b>Hardware unter Ihrer Kontrolle</b><div class="diagram__chips"><span>In Ihrem Besitz und Betrieb</span></div></div>
</div>
</div>

- **Hardware** — Sizing, Herstellerauswahl, Vereinbarungen mit Rechenzentrum oder Colocation.
- **Plattformschicht** — Cozystack auf Talos (Standard) oder Erweiterung eines bestehenden Kubernetes.
- **Storage** — LINSTOR/DRBD über Piraeus; Kapazitätsplanung; Backup-Architektur.
- **Netzwerk** — Cilium, BGP-Fabric, MetalLB, Ingress.
- **Mandantenfähigkeit** — Tenant-CRD, RBAC, Quotas, Audit.
- **Betrieb** — Observability-Stack, Runbooks, Rufbereitschaft, Incident Response.
- **Self-Service** — Golden Paths für Produktteams.
- **Compliance** — Souveränität, Auditfähigkeit gegenüber der jeweils zuständigen Aufsicht.
- **Wissenstransfer** — Ihr Plattform-Team betreibt die Cloud nach der Übergabe.

---

## Ablauf des Projekts

| Phase | Dauer | Ergebnis |
|---|---|---|
| Discovery | 30 Min., kostenlos | Eignung klären |
| Assessment | 14 oder 28 Tage | Architektur, Sizing, Plan für Phase 2 |
| Aufbau | 3–12 Monate | Produktive Private Cloud |
| Betrieb (optional) | Laufend | Managed Service oder Eigenbetrieb |

Zur Methodik siehe **[Platform Readiness Assessment](/de/dienstleistungen/platform-readiness-assessment/)**.

---

## Warum Ænix

- **Die Cloud gehört Ihnen, nicht uns.** Die Basis steht unter Apache 2.0 ohne Lizenzkosten pro Core, und die Übergabe ist ein Liefergegenstand mit benannten internen Verantwortlichen, keine bloße Hoffnung.
- **Wir haben die Basis gebaut.** Cozystack ist unser Code und läuft produktiv bei Service-Providern, Banken, Telcos und KI-Betreibern.

---

## So starten Sie

<div class="cta-row">
  <a class="cta-primary" href="/de/kontakt/">Gespräch vereinbaren</a>
</div>

- **[Private Cloud aufbauen — 90-Tage-Playbook](/de/blog/2026/05/private-cloud-aufbauen-90-tage-playbook/)**
- **[Private Cloud Consulting](/de/dienstleistungen/private-cloud-consulting/)** — breiterer Umfang
- **[Cloud-Repatriation](/de/loesungen/cloud-repatriation/)** — wenn Sie die Public Cloud verlassen
- **[Cozystack](/de/produkte/cozystack/)**

---

*Ænix hat [Cozystack](https://cozystack.io), ein CNCF-Projekt und eine von der CNCF zertifizierte Kubernetes-Distribution, initiiert und pflegt es gemeinsam mit Maintainern anderer Unternehmen. Ænix vertreibt drei darauf aufbauende Plattformen — Public Cloud, Private Cloud und AI — sowie Support und Dienstleistungen.*
