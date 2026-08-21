---
title: "Case Studies"
description: "Fünf Aenix-Deployments mit Zahlen: GPU-Repatriation, Proxmox-Konsolidierung, souveräne Public Cloud, GPU-Bursting, KI-Plattform als Installer."
hero_subtitle: "Echte Ænix-Platform-Deployments aus Hosting, KI und Forschung"
language: "de"
---

**Fünf Deployments, unten ausführlich dokumentiert: wie das Estate vorher aussah, was gebaut wurde, was schiefging und welche Zahlen am Ende standen. Die Kunden sind anonymisiert, weil die Verträge es verlangen — Architektur, Fehlerbilder und Zahlen sind es nicht. Daneben gibt es öffentliche Referenzen bei regionalen Hosting-Anbietern mit der ISP Edition, Plattform-R&D für Ecosystem-Vendors und Tier-1-Bank-Engagements, die bis Mitte 2027 unter NDA stehen.**

---

## Die fünf ausführlichen Cases

### [8xH100-Inferenz auf eigenem Bare Metal](/de/case-studies/bare-metal-gpu-inference/)

Ein Anbieter einer Foto- und Video-App für den Massenmarkt holte die KI-Inferenz aus einer stundenweise gemieteten GPU-Cloud auf einen eigenen 8xH100-Server mit KubeVirt-GPU-Passthrough. Zwei- bis dreifache GPU-Effizienz bei gleichem Workload, rund zwei Monate bis Produktion.

### [Bare-Metal-Kubernetes für ein Messaging-API-SaaS](/de/case-studies/bare-metal-kubernetes-messaging-saas/)

Dreizehn Proxmox-Hypervisor-Hosts konsolidiert auf einen deklarativen Cluster mit 25.000 Workload-Instanzen inklusive Managed Databases — betrieben von einer Person über GitOps.

### [Eine souveräne Public Cloud auf Bare Metal](/de/case-studies/sovereign-public-cloud/)

Ein Schweizer Anbieter ersetzte seinen Hypervisor-Stack durch eine vollwertige kommerzielle Public Cloud über drei Rechenzentren — synchrone DC-übergreifende Replikation, Verschlüsselung at rest, GPU in Produktion und ein 20-Stunden-Incident ohne Datenverlust.

### [Von der Public Cloud auf Bare Metal — mit Bursting bei Bedarf](/de/case-studies/multicloud-academic-gpu/)

Ein europäisches SaaS für akademisches Rechnen verließ einen Hyperscaler ohne Downtime für Tausende aktive Nutzer, behielt eine Cluster-API über Bare Metal, Hyperscaler und eine souveräne OpenStack-Cloud und senkte die GPU-Kosten um etwa das Fünffache.

### [Cozystack als universeller Installer](/de/case-studies/ai-universal-installer/)

Ein Telekom-Betreiber und Systemintegrator baute eine Unternehmens-KI-Plattform — GPU-Scheduling, RAG auf Qdrant, NVIDIA-Dynamo-Inferenz, geo-verteilte GPU — und lieferte dieselbe Distribution in die Umgebung eines staatlichen Endkunden aus.

<div class="cta-row">
  <a class="cta-primary" href="/de/kontakt/">Ihren Fall besprechen</a>
  <a class="cta-secondary" href="/tco-calculator/">TCO modellieren →</a>
</div>

---

## Quick facts

- **Öffentliche Produktivkunden:** GoHost.kz, HDReady, Beby Cloud, HiKube, UseTech, Cloupard, Cloudsy (Ænix Platform ISP Edition)
- **Plattform-R&D-Engagements:** CSI-Driver-Entwicklung, Block-Storage-Forschung, Virtualisierungs-Plattform-Prototypen
- **Ausführlich dokumentierte Deployments:** fünf, vertraglich anonymisiert, mit vollständiger Architektur und Zahlen (oben)
- **Tier-1-europäische-Banken:** Mehr-Millionen-Euro Ænix Platform Enterprise Edition Engagements (NDA-geschützt; Namensnennung ab Mitte 2027)
- **Engagement-Größen:** 1.250 USD/Monat (ISP Edition Support-Tier) bis zu mehrjährigen Programmen nach RFP

---

## Case-Kategorien

### Regionale Hosting-Anbieter (Ænix Platform ISP Edition)

Produktive Deployments mit unserer hosting-spezifischen Edition. WHMCS-integriertes Billing, gebrandetes Kunden-Portal, Multi-Tier-Reseller-Modell, erweiterter Service-Katalog, Tenant Lock/Suspension.

**Öffentliche Kunden** (derzeit auf aenix.io gelistet):
- GoHost.kz
- HDReady
- Beby Cloud
- HiKube
- UseTech
- Cloupard
- Cloudsy

[Ænix Platform ISP Edition →](/de/produkte/aenix-platform/isp-edition/)

### Tier-1-europäische-Banken-Engagements (NDA bis Mitte 2027)

Mehr-Millionen-Euro Ænix Platform Enterprise Edition Deployments mit DORA-konformen souveränen Cloud-Workloads.

**Status:** Mehrere Engagements aktiv. **Erste namentlich genannte Case-Studies erwartet Mitte 2027** mit NDA-Ablauf.

[DORA-Compliance mit Ænix Platform →](/de/loesungen/dora-compliance/)

### Plattform-R&D für Ecosystem-Vendors

CSI-Driver-Entwicklung für Shared-SAN-Umgebungen, Backup-System mit bis zu 75% Storage-Kostenreduktion, Kubernetes-in-Kubernetes + PXE bootable Server-Farm, Lightweight VDI, Public Cloud / VPS-Hosting-Plattform, Virtualisierungs-Plattform-Forschung.

---

## Was wir öffentlich teilen können

| Kundentyp | Was wir sagen können |
|---|---|
| Regionale Hosting-Anbieter | Namentlich (derzeit auf aenix.io gelistet); Deployment-Scope; Ænix Platform ISP Edition Nutzung |
| Plattform-R&D für Ecosystem-Vendors | Projektname und -outcomes |
| Tier-1-europäische-Banken | Anonymisiert nur ("Tier-1-europäische-Bank unter DORA-Scope") bis Mitte 2027 NDA-Abläufe |
| Souveräne Cloud-Initiativen | Anonymisiert nur |
| AI/ML-Deployments | Anonymisiert nur; unter NDA |

---

## Häufige Fragen

### Wann werden namentlich genannte Bank-Case-Studies verfügbar?

Erste NDA-Abläufe erwartet Mitte 2027. Sobald sie landen, werden namentliche Case-Studies hier veröffentlicht. Bis dahin werden Bank-Engagements nur anonymisiert beschrieben.

---

## Wie starten

<div class="cta-row">
  <a class="cta-primary" href="/de/kontakt/">Discovery-Call buchen</a>
</div>

---

*Aenix ist das Open-Core-Unternehmen hinter [Cozystack](https://cozystack.io) (CNCF-Projekt) und Hersteller von Ænix Platform — turnkey kommerzielle Cloud-in-a-Box in fünf Editions.*
