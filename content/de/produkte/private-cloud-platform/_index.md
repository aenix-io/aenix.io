---
title: "Ænix Private Cloud Platform"
description: "Ænix Private Cloud Platform: souveräne Cloud für regulierte Unternehmen. DORA-/NIS2-konform, Multi-DC, eine Control Plane über VMware und OpenShift."
type: "page"
language: "de"
hreflang_en: /products/private-cloud-platform/
direct_answer: |
  **Die Ænix Private Cloud Platform ist eine private und hybride souveräne Cloud für regulierte Unternehmen — Banken, Versicherungen, öffentliche Verwaltung, Telco und Gesundheitswesen. Sie basiert auf dem Open-Source-Projekt Cozystack (CNCF, Apache 2.0) und bringt VMware, OpenNebula und OpenShift unter eine einzige Kubernetes-native Control Plane, statt sie zu ersetzen. Aenix liefert DORA- und NIS2-Architekturkontrollen, kundenkontrollierte Verschlüsselungsschlüssel auf jeder Datenschicht, audit-bereites Logging via VictoriaLogs, Multi-DC-Failover sowie Air-Gap-Betrieb. Engagements umfassen Discovery, Readiness Assessment, Pilot und vollständigen Multi-DC-Build samt Enterprise-SLA, 24/7-Support und Engineering-Training.**
quick_facts:
  - label: "Was es ist"
    value: "Private und hybride souveräne Cloud für regulierte Unternehmen auf Basis von Cozystack — Multi-DC, DORA-/NIS2-konform, eine Control Plane über VMware, OpenNebula und OpenShift"
  - label: "Lizenz"
    value: "Apache 2.0 (keine CPU-/Core-basierte Lizenzierung)"
  - label: "Status"
    value: "Cozystack ist ein CNCF-Projekt (Sandbox seit 28.02.2025; Incubating erwartet Spätsommer 2026)"
  - label: "Für wen"
    value: "Banken, Versicherungen, öffentliche Verwaltung, Telco, Gesundheitswesen, regulierte Industrie / Energieversorger"
  - label: "Compliance"
    value: "DORA / NIS2 by Design; ISO 27001 / SOC 2 Alignment; kundenverwaltete Schlüssel (BYOK / HYOK) mit HSM-Integration"
  - label: "Architektur"
    value: "Kubernetes-nativ mit KubeVirt (VMs + Container), Cilium-Networking (eBPF), LINSTOR/DRBD-Storage, Tenant-CRD-Mandantenfähigkeit; Multi-DC und Air-Gap-fähig"
  - label: "Engagement"
    value: "Mehrjährige Plattform-Builds, Angebot nach RFP; Time-to-Production 9-18 Monate Full Bestand, 3-6 Monate Pilot"
faq:
  - q: "Wie unterscheidet sich die Private Cloud Platform vom Selbstbetrieb von Open-Source-Cozystack?"
    a: "Cozystack liefert die Kubernetes-native Multi-Tenant-Foundation. Die Private Cloud Platform ergänzt DORA-/NIS2-Architektur-Bundles, Multi-DC-Operations-Runbooks, kundenverwaltete Verschlüsselung auf jeder Schicht inklusive Backups und Observability, audit-bereites Logging, Hybrid-Integration mit VMware / OpenNebula / OpenShift, ISO 27001 / SOC 2 Alignment-Support, Enterprise-SLA mit 24/7-Support sowie inkludiertes Engineering-Training."
  - q: "Kann die Private Cloud Platform mit bestehendem VMware, OpenStack oder OpenShift koexistieren?"
    a: "Ja. Sie ist auf Koexistenz statt auf einen Komplettaustausch ausgelegt. Die Control Plane integriert bestehende VMware Cloud Foundation, OpenStack, OpenNebula und OpenShift Bestände; die Konsolidierung erfolgt graduell im Workload-Tempo. Viele Deployments laufen über Jahre hybrid."
  - q: "Wie unterstützt die Private Cloud Platform DORA- und NIS2-Compliance?"
    a: "Über Architekturkontrollen, die auf die jeweilige Norm zugeschnitten sind: kundenkontrollierte Verschlüsselungsschlüssel (DORA Art. 9), Tenant-CRD-Segmentierung entlang der IKT-Asset- und Risikoklassifizierung mit Cilium-NetworkPolicy (DORA Art. 8), unveränderbares Audit-Logging via VictoriaLogs, dimensioniert für Klassifizierung und Meldung schwerwiegender Vorfälle (DORA Art. 17-19), getestete Exit-Mechanik (DORA Art. 28(8), vertraglich Art. 30(3)(f)) und Lieferantentransparenz für das Informationsregister (Art. 28(3)). NIS2 deckt die Risikomanagement-Maßnahmen (Art. 21) und die Meldepflichten (Art. 23) ab."
  - q: "Wird Air-Gap-Betrieb unterstützt?"
    a: "Ja. Die Private Cloud Platform läuft in vollständig air-gapped Umgebungen ohne Internet-Egress, mit Offline-Updates über signierte Bundles. Genutzt in Verteidigung, souveräner Cloud und isolierten Industrie-Umgebungen."
  - q: "Wer kontrolliert die Verschlüsselungsschlüssel?"
    a: "Der Kunde. Schlüssel liegen auf jeder Schicht beim Kunden — Primary Store, Replikate, Backups, Observability-Daten und Modellgewichte im Ruhezustand. BYOK / HYOK mit HSM-Integration wird unterstützt; reine Vendor-managed-Schlüssel werden explizit vermieden."
  - q: "Was kostet die Private Cloud Platform?"
    a: "Angebot nach RFP für mehrjährige Plattform-Builds. Ein Platform Readiness Assessment** (14 oder 28 Tage, Festpreis vorab vereinbart) liefert DORA-/NIS2-Gap-Analyse und Architektur-Roadmap. Scope wird im Discovery-Call definiert."
aliases:
  - /de/produkte/aenix-platform/enterprise-edition/
  - /de/produkte/aenix-platform/idp-edition/
---

**Private und hybride souveräne Cloud für regulierte Unternehmen. Sicher, automatisiert und einfach erweiterbar. Gebaut für Multi-DC-Setups, DORA / NIS2-Compliance und Enterprise-Integrationen. Eine Control Plane, die VMware, OpenNebula, OpenShift und mehr verbindet — turnkey Cloud-in-a-Box auf kundenkontrollierter Hardware. Schulungen für Ihr Team inklusive.**

<div class="cta-row">
  <a class="cta-primary" href="/de/kontakt/">Discovery-Call buchen</a>
  <a class="cta-secondary" href="/de/produkte/">Alle Plattformen →</a>
</div>

---

## Was in der Private Cloud Platform enthalten ist

### Multi-DC private und hybride souveräne Cloud

Ausgelegt auf Deployments über zwei oder mehr Rechenzentren mit Active-Warm- oder Active-Active-Failover. Getestete DR + Backup-Restore-Kadenz für Prüfung durch die Aufsicht. Hybrid-Pattern (On-Prem + Cloud) unterstützt mit einer Control Plane.

### Eine Control Plane verbindet VMware / OpenNebula / OpenShift

Die Private Cloud Platform ist auf **Koexistenz** ausgelegt, nicht auf einen Komplettaustausch. Existierende VMware Cloud Foundation, OpenStack, OpenNebula, OpenShift Bestände können unter eine Cozystack-basierte Control Plane gebracht werden, während graduelle Konsolidierung im Workload-Tempo geschieht.

### DORA-Architekturkontrollen

- Kundenkontrollierte Verschlüsselungsschlüssel auf jeder Datenschicht (Artikel 9)
- auditfähige Protokollierung via VictoriaLogs mit unveränderbarem Backend, dimensioniert für Klassifizierung und Meldung schwerwiegender Vorfälle (Artikel 17–19)
- Mandantenfähiges Tenant-CRD entlang der IKT-Asset- und Risikoklassifizierung (Artikel 8)
- Getestete Exit-Mechanik (Artikel 28(8); vertragliche Ausgestaltung Artikel 30(3)(f))
- Lieferantentransparenz zur zweiten Stufe für das Informationsregister (Artikel 28(3))

[DORA-Compliance-Services →](/de/loesungen/dora-compliance/) | [Kostenlose DORA-Checkliste →](/de/ressourcen/dora-compliance-checkliste/)

### NIS2-Architekturkontrollen

- Artikel 21 Cybersicherheits-Risikomanagement-Maßnahmen in zehn Kontrollbereichen
- Vorfallbearbeitung nach Artikel 23 samt Meldevorlagen, abgestimmt auf die Fristen von 24 Stunden, 72 Stunden und einem Monat
- auf die koordinierte Offenlegung von Schwachstellen nach Artikel 12 abgestimmt
- Tenant CRD mit NetworkPolicy / Cilium für Segmentierung

[NIS2-Compliance-Services →](/de/loesungen/nis2-compliance/) | [Kostenlose NIS2-Checkliste →](/de/ressourcen/nis2-compliance-checkliste/)

### Souveränes Deployment

Kundenkontrollierte Hardware in kundenkontrollierter Jurisdiktion. Air-Gap-Operations unterstützt (kein Internet-Egress erforderlich). Kundenverwaltete Verschlüsselungsschlüssel (BYOK / HYOK) mit HSM-Integration. Zugriffe durch Anbieterpersonal werden protokolliert und sind zeitlich befristet.

### Kundenverwaltete Verschlüsselung (Data-at-Rest + In-Transit)

Verschlüsselungsschlüssel beim Kunden auf jeder Schicht — Primary Store, Replikate, Backups, Observability-Daten, Modellgewichte im Ruhezustand. Vendor-managed-only-Schlüssel werden explizit vermieden.

### Auditfähiger Logging-Stack auf VictoriaLogs-Basis

Unveränderbarer, exportierbarer, regulator-kompatibler Audit-Trail. Integration mit Customer-SIEM. Die Long-Tail-Aufbewahrung erfüllt die längste einschlägige regulatorische Frist (oft 5+ Jahre).

### Multi-Tenant CRD

Tenant CRD mit Quotas / RBAC / Observability je Workload. Tenant-Grenze erzwungen auf Network-, Identity-, Storage-, Observability-Schichten — nicht nur Namespace.

### Souveräne KI-Infrastruktur

Unterstützt werden die GPU-Klassen H100, H200, L40S, A100 und Blackwell (B100/B200). Multi-Tenant-GPU-Scheduling. Kundenkontrollierte Schlüssel für KI-Workloads. Siehe [Souveräne KI](/de/loesungen/sovereign-ai/) und [AI Platform](/de/produkte/ai-platform/) für KI-spezifisches Feature-Bundle.

### Bildung und Training inklusive

Engineering-Team-Training als Teil des Engagements. der Kubernetes-Deep-Dive-Kurs von Ænix, der den Cozystack-Stack abdeckt (Talos, LINSTOR, Cilium, KubeVirt, Cluster API, Flux), inklusive für Kunden-Engineers in Private Cloud Platform Deployments.

### Enterprise-SLA + 24/7 Support + Named TAM

Gestaffeltes SLA, abgestimmt auf die Erwartungen der Aufsicht. Fest benannter Technical Account Manager. Definierte Eskalationswege.

### Compliance-Zertifizierungs-Support

Vorvalidiert gegen ISO 27001 / SOC 2. Ænix unterstützt Zertifizierungs-Dokumentation und Arbeit an der Auditfähigkeit.

---

## Wer kauft Private Cloud Platform

| Käuferprofil | Typisches Engagement |
|---|---|
| Tier-1 / Tier-2 europäische Bank | DORA-konforme Multi-DC-souveräne Cloud — mehrjähriges Programm nach RFP |
| Versicherer | DORA-Scope + DSGVO + sektoral; Souveränität für regulierte Workloads |
| Große öffentliche Verwaltung | Souveräne Cloud, abgestimmt auf nationale Beschaffungsvorgaben |
| Telco-Operator | NIS2 Compliance als wesentliche Einrichtung, dazu die Option auf ein Cloud-Produkt für Endkunden |
| Gesundheits-Operator | Sektorale Datengesetze + KI-Workloads auf regulierten Daten |
| Regulierte Industrie / Energie | NIS2 wesentliche Einrichtung + KI-Optimierung + Edge |

---

## Preise

Mehrjähriger Plattform-Build, Angebot nach RFP. Discovery-Call zur Scope-Definition.

[Private Cloud Platform diskutieren →](/de/kontakt/?platform=private-cloud)

---

## Engagement-Struktur

- **Discovery-Call** (30 min, kostenlos)
- **Platform Readiness Assessment** (14 oder 28 Tage, Festpreis vorab vereinbart) — DORA / NIS2 Gap-Analyse + Architektur-Roadmap
- **Pilot-Engagement** (3-6 Monate) — definierter Slice (eine Workload-Klasse, ein BU, ein Standort)
- **Vollständiger Aufbau der Private Cloud Platform** (9-18 Monate) — Multi-DC-Produktions-Deployment, Compliance-Zertifizierungs-Support, Operations-Team-Training
- **Managed Operations** (optional, laufend) — Ænix betreibt die Plattform unter SLA

[Platform Readiness Assessment →](/de/dienstleistungen/platform-readiness-assessment/)

---

## Referenzen

Engagements mit europäischen Banken der Tier-1- und Tier-2-Klasse laufen in Produktion und sind NDA-geschützt; namentlich nennen dürfen wir sie ab Mitte 2027, wenn die NDAs auslaufen. [Fünf Deployments sind vollständig dokumentiert](/de/case-studies/) — vertraglich anonymisiert, aber mit unveränderter Architektur und unveränderten Zahlen. Für eine konkrete Opportunity lassen sich Referenzgespräche mit Bestandskunden unter NDA arrangieren.

---

## Architektur-Review buchen

Schildern Sie uns Ihren regulatorischen Kontext (DORA / NIS2 / sektoral), Ihrer aktuellen Architektur und Ihren Souveränitäts-Anforderungen — wir richten ein fokussiertes Architektur-Review mit einem Ænix-Engineer ein und bestätigen den Private Cloud Platform Fit.

{{< pipedrive-form type="demo" >}}

Lieber ein kürzerer erster Schritt? [30-Minuten-Discovery-Call buchen](/de/kontakt/) stattdessen.

---

*Ænix Private Cloud Platform basiert auf [Cozystack](https://cozystack.io) — einem CNCF-Projekt, das wir erstellt haben und pflegen (derzeit CNCF Sandbox; CNCF Incubating erwartet Spätsommer 2026). Apache 2.0. Ænix ist das Open-Core-Unternehmen.*
