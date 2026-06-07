---
title: "Ænix Platform Enterprise Edition"
description: "Ænix Platform Enterprise Edition: souveräne Cloud für regulierte Unternehmen. DORA-/NIS2-konform, Multi-DC, eine Control Plane über VMware und OpenShift."
type: "page"
language: "de"
direct_answer: |
  **Die Ænix Platform Enterprise Edition ist eine private und hybride souveräne Cloud für regulierte Unternehmen — Banken, Versicherungen, öffentliche Verwaltung, Telco und Gesundheitswesen. Sie basiert auf dem Open-Source-Projekt Cozystack (CNCF, Apache 2.0) und bringt VMware, OpenNebula und OpenShift unter eine einzige Kubernetes-native Control Plane, statt sie zu ersetzen. Aenix liefert vorvalidierte DORA- und NIS2-Architekturkontrollen, kundenkontrollierte Verschlüsselungsschlüssel auf jeder Datenschicht, audit-bereites Logging via VictoriaLogs, Multi-DC-Failover sowie Air-Gap-Betrieb. Engagements umfassen Discovery, Readiness Assessment, Pilot und vollständigen Multi-DC-Build samt Enterprise-SLA, 24/7-Support und Engineering-Training.**
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
    value: "Mehrjährige Plattform-Builds (€500k - €5M+); Time-to-Production 9-18 Monate Full Estate, 3-6 Monate Pilot"
faq:
  - q: "Wie unterscheidet sich die Enterprise Edition vom Selbstbetrieb von Open-Source-Cozystack?"
    a: "Cozystack liefert die Kubernetes-native Multi-Tenant-Foundation. Die Enterprise Edition ergänzt vorvalidierte DORA-/NIS2-Architektur-Bundles, Multi-DC-Operations-Runbooks, kundenverwaltete Verschlüsselung auf jeder Schicht inklusive Backups und Observability, audit-bereites Logging, Hybrid-Integration mit VMware / OpenNebula / OpenShift, ISO 27001 / SOC 2 Alignment-Support, Enterprise-SLA mit 24/7-Support sowie inkludiertes Engineering-Training."
  - q: "Kann die Enterprise Edition mit bestehendem VMware, OpenStack oder OpenShift koexistieren?"
    a: "Ja. Sie ist für Koexistenz statt Rip-and-Replace ausgelegt. Die Control Plane integriert bestehende VMware Cloud Foundation, OpenStack, OpenNebula und OpenShift Estates; die Konsolidierung erfolgt graduell im Workload-Tempo. Viele Deployments laufen über Jahre hybrid."
  - q: "Wie unterstützt die Enterprise Edition DORA- und NIS2-Compliance?"
    a: "Über vorvalidierte Architekturkontrollen: kundenkontrollierte Schlüssel (DORA Art. 21(2)(h)), unveränderbares Audit-Logging via VictoriaLogs (Art. 21(2)(i), Art. 23), Tenant-CRD-Segmentierung nach ICT-Risikoklasse mit Cilium-NetworkPolicy, getestete Exit-Mechanik (Art. 28(7)(c)) und Lieferantentransparenz. NIS2 deckt Risikomanagement-Maßnahmen (Art. 21) und Reporting-Templates (Art. 23) ab."
  - q: "Wird Air-Gap-Betrieb unterstützt?"
    a: "Ja. Die Enterprise Edition läuft in vollständig air-gapped Umgebungen ohne Internet-Egress, mit Offline-Updates über signierte Bundles. Genutzt in Verteidigung, souveräner Cloud und isolierten Industrie-Umgebungen."
  - q: "Wer kontrolliert die Verschlüsselungsschlüssel?"
    a: "Der Kunde. Schlüssel liegen auf jeder Schicht beim Kunden — Primary Store, Replikate, Backups, Observability-Daten und Modell-Gewichte at rest. BYOK / HYOK mit HSM-Integration wird unterstützt; reine Vendor-managed-Schlüssel werden explizit vermieden."
  - q: "Was kostet die Enterprise Edition?"
    a: "Pricing auf Anfrage — typischerweise €500k - €5M+ für mehrjährige Plattform-Builds. Ein Platform Readiness Assessment (5-10 Tage, Festpreis €20-50k) liefert DORA-/NIS2-Gap-Analyse und Architektur-Roadmap. Scope wird im Discovery-Call definiert."
---

**Private und hybride souveräne Cloud für regulierte Unternehmen. Sicher, automatisiert und einfach erweiterbar. Gebaut für Multi-DC-Setups, DORA / NIS2-Compliance und Enterprise-Integrationen. Eine Control Plane, die VMware, OpenNebula, OpenShift und mehr verbindet — turnkey Cloud-in-a-Box auf kundenkontrollierter Hardware. Inklusive Bildung und Training.**

<div class="cta-row">
  <a class="cta-primary" href="/contact/">Discovery-Call buchen</a>
  <a class="cta-secondary" href="/de/produkte/aenix-platform/">Alle Editions →</a>
</div>

---

## Quick facts

- **Für:** Regulierte Unternehmen — Banken, Versicherungen, öffentliche Verwaltung, Telco, Gesundheitswesen, regulierte Industrie / Energieversorger
- **Foundation:** Open-Source Cozystack (CNCF-Projekt, Apache 2.0)
- **Engagement-Größe:** €500k - €5M+ mehrjährige Plattform-Builds
- **Time-to-Production:** 9-18 Monate Full Estate; 3-6 Monate Pilot-Phase
- **Architektur:** Kubernetes-nativ, Multi-DC, integriert mit existierendem VMware / OpenNebula / OpenShift, kundenkontrollierte Schlüssel, audit-bereites Logging
- **Compliance-Posture:** DORA / NIS2-konform by Design; ISO 27001 / SOC 2 Alignment; Souveräne-Deployment-Optionen

---

## Was in der Enterprise Edition enthalten ist

### Multi-DC private und hybride souveräne Cloud

Designed für Zwei-oder-mehr-Rechenzentrum-Deployments mit Active-Warm- oder Active-Active-Failover. Getestete DR + Backup-Restore-Kadenz für Regulator-Review. Hybrid-Pattern (On-Prem + Cloud) unterstützt mit einer Control Plane.

### Eine Control Plane verbindet VMware / OpenNebula / OpenShift

Enterprise Edition ist gebaut für **Koexistenz**, nicht Rip-and-Replace. Existierende VMware Cloud Foundation, OpenStack, OpenNebula, OpenShift Estates können unter eine Cozystack-basierte Control Plane gebracht werden, während graduelle Konsolidierung im Workload-Tempo geschieht.

### DORA-Architekturkontrollen

- Kundenkontrollierte Verschlüsselungsschlüssel (Artikel 21(2)(h)) auf jeder Datenschicht
- Audit-bereites Logging via VictoriaLogs mit unveränderbarem Backend (Artikel 21(2)(i) + Artikel 23)
- Multi-Tenant Tenant CRD nach ICT-Risikoklassifizierung (Artikel 21(2)(a))
- Getestete Exit-Mechanik (Artikel 28(7)(c))
- Lieferantentransparenz zur zweiten Stufe (Artikel 28(3))

[DORA-Compliance-Services →](/de/loesungen/dora-compliance/) | [Kostenlose DORA-Checkliste →](/de/ressourcen/dora-compliance-checkliste/)

### NIS2-Architekturkontrollen

- Artikel 21 Cybersicherheits-Risikomanagement-Maßnahmen über 10 Kontrollbereiche
- Artikel 23 Vorfallhandhabung + Reporting-Templates aligniert mit 24h / 72h / 1-Monat-Timelines
- Artikel 30 Coordinated Vulnerability Disclosure aligniert
- Tenant CRD mit NetworkPolicy / Cilium für Segmentierung

[NIS2-Compliance-Services →](/de/loesungen/nis2-compliance/) | [Kostenlose NIS2-Checkliste →](/de/ressourcen/nis2-compliance-checkliste/)

### Souveränes Deployment

Kundenkontrollierte Hardware in kundenkontrollierter Jurisdiktion. Air-Gap-Operations unterstützt (kein Internet-Egress erforderlich). Kundenverwaltete Verschlüsselungsschlüssel (BYOK / HYOK) mit HSM-Integration. Anbieter-Personal-Zugang protokolliert und zeitlich begrenzt.

### Kundenverwaltete Verschlüsselung (Data-at-Rest + In-Transit)

Verschlüsselungsschlüssel beim Kunden auf jeder Schicht — Primary Store, Replikate, Backups, Observability-Daten, Modell-Gewichte at rest. Vendor-managed-only-Schlüssel werden explizit vermieden.

### VictoriaLogs audit-bereiter Logging-Stack

Unveränderbarer, exportierbarer, regulator-kompatibler Audit-Trail. Integration mit Customer-SIEM. Long-Tail-Retention erfüllt längste anwendbare regulatorische Anforderung (oft 5+ Jahre).

### Multi-Tenant Tenant CRD

Tenant CRD mit Quotas / RBAC / Observability per Workload. Tenant-Grenze erzwungen auf Network-, Identity-, Storage-, Observability-Schichten — nicht nur Namespace.

### Souveräne KI-Infrastruktur

H100, H200, L40S, A100, Blackwell (B100/B200) GPU-Klassen unterstützt. Multi-Tenant-GPU-Scheduling. Kundenkontrollierte Schlüssel für KI-Workloads. Siehe [Souveräne KI](/de/loesungen/sovereign-ai/) und [AI/ML Edition](/de/produkte/aenix-platform/ai-ml-edition/) für KI-spezifisches Feature-Bundle.

### Bildung und Training inklusive

Engineering-Team-Training als Teil des Engagements. Aenix's Kubernetes Deep Dive Kurs, der den Cozystack-Stack abdeckt (Talos, LINSTOR, Cilium, KubeVirt, Cluster API, Flux), inklusive für Kunden-Engineers in Enterprise Edition Deployments.

### Enterprise-SLA + 24/7 Support + Named TAM

Tiered SLA aligniert mit Regulator-Erwartungen. Named Technical Account Manager. Eskalations-Prozeduren.

### Compliance-Zertifizierungs-Support

Vorvalidiert gegen ISO 27001 / SOC 2. Aenix unterstützt Zertifizierungs-Dokumentation und Audit-Readiness-Arbeit.

---

## Wer kauft Enterprise Edition

| Buyer | Typisches Engagement |
|---|---|
| Tier-1 / Tier-2 europäische Bank | DORA-konforme Multi-DC-souveräne Cloud — Mehr-Millionen-Euro mehrjährig |
| Versicherer | DORA-Scope + GDPR + sektoral; Souveränität für regulierte Workloads |
| Große öffentliche Verwaltung | Souveräne Cloud aligniert mit nationalen Beschaffungs-Mandaten |
| Telco-Operator | NIS2 wesentliche-Entität-Compliance + Kunden-Cloud-Produkt-Möglichkeit |
| Gesundheits-Operator | Sektorale Datengesetze + KI-Workloads auf regulierten Daten |
| Regulierte Industrie / Energie | NIS2 wesentliche Entität + KI-Optimierung + Edge |

---

## Pricing

Pricing auf Anfrage — €500k - €5M+ mehrjährige Plattform-Builds. Discovery-Call zur Scope-Definition.

[Enterprise Edition diskutieren →](/de/kontakt/?edition=enterprise)

---

## Engagement-Struktur

- **Discovery-Call** (30 min, kostenlos)
- **Platform Readiness Assessment** (5-10 Tage, Festpreis €20-50k) — DORA / NIS2 Gap-Analyse + Architektur-Roadmap
- **Pilot-Engagement** (3-6 Monate) — definierter Slice (eine Workload-Klasse, ein BU, ein Standort)
- **Vollständiger Enterprise Edition Build** (9-18 Monate) — Multi-DC-Produktions-Deployment, Compliance-Zertifizierungs-Support, Operations-Team-Training
- **Managed Operations** (optional, laufend) — Aenix betreibt die Plattform unter SLA

[Platform Readiness Assessment →](/de/dienstleistungen/platform-readiness-assessment/)

---

## Kunden-Evidenz

Tier-1- / Tier-2-europäische-Banken-Engagements sind in Produktion. **Alle derzeit NDA-geschützt; erste namentlich genannte Bank-Case-Studies erwartet Mitte 2027** mit NDA-Ablauf.

Anonymisierte Phrasierung: "Tier-1-europäische-Bank-Engagement unter DORA-Scope" / "Mehr-Millionen-Euro Ænix Platform Enterprise Edition Deployment mit reguliertem Finanzinstitut".

---

## Häufige Fragen

### Wie unterscheidet sich Enterprise Edition vom Selbstbetrieb von Open-Source-Cozystack?

Cozystack liefert die Kubernetes-native Multi-Tenant-Cloud-Plattform-Foundation. Enterprise Edition ergänzt: vorvalidierte DORA / NIS2-Architektur-Bundles, Multi-DC-Operations-Runbook, kundenverwaltete Verschlüsselung auf jeder Schicht (inkl. Backups + Observability), audit-bereiter Logging-Stack, Hybrid-Integrations-Patterns mit VMware / OpenNebula / OpenShift, ISO 27001 / SOC 2 Alignment-Support, Enterprise-SLA + 24/7 Support, Engineering-Training inklusive.

### Wie unterscheidet sich Enterprise Edition von Public Cloud Edition?

Enterprise Edition ist für regulierte Unternehmen, die Cloud intern konsumieren (single-organization use, oft Hybrid-Integration mit existierendem VMware / OpenNebula / OpenShift). Public Cloud Edition ist für Betreiber, die Cloud als Produkt verkaufen (Public Cloud, große Bank-interne Cloud at scale, große Telco). Gleiche Cozystack-Foundation; unterschiedliches Feature-Bundle.

### Kann Enterprise Edition mit existierendem VMware / OpenStack / OpenShift koexistieren?

Ja. Designed für Koexistenz — Enterprise Edition Control Plane integriert mit existierenden VMware Cloud Foundation, OpenStack, OpenNebula, OpenShift Estates. Graduelle Konsolidierung im Workload-Tempo. Viele Bank-Deployments laufen jahrelang hybrid.

### Wird Air-Gap unterstützt?

Ja. Enterprise Edition unterstützt Air-Gapped Deployments mit Offline-Updates über signierte Bundles. Genutzt in Verteidigung, souveräner Cloud, isolierten Industrie-Umgebungen.

---

## Wie starten

Buchen Sie einen 30-Minuten-Discovery-Call. Wir besprechen Ihren regulatorischen Kontext (DORA / NIS2 / sektoral), aktuelle Architektur, Souveränitäts-Anforderungen und Enterprise Edition Fit.

<div class="cta-row">
  <a class="cta-primary" href="/contact/">Discovery-Call buchen</a>
</div>

---

*Ænix Platform Enterprise Edition basiert auf [Cozystack](https://cozystack.io) — einem CNCF-Projekt, das wir erstellt haben und pflegen (derzeit CNCF Sandbox; CNCF Incubating erwartet Spätsommer 2026). Apache 2.0. Aenix ist das Open-Core-Unternehmen.*
