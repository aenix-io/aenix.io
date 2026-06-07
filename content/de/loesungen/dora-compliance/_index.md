---
title: "DORA Compliance für Cloud-Infrastruktur — auditbereite Architektur"
description: "Die Digital Operational Resilience Act (DORA) ist seit dem 17. Januar 2025 in Kraft. Für die Finanzbranche der EU — Banken, Versicherer, Investmentfirmen,..."
type: "page"
related_pages:
  - /de/loesungen/data-sovereignty
  - /de/loesungen/nis2-compliance
  - /de/dienstleistungen/platform-readiness-assessment
  - /de/produkte/aenix-platform/enterprise-edition/
language: "de"
direct_answer: |
  **DORA-Compliance für Cloud-Infrastruktur bedeutet, die Cloud- und Plattform-Architektur eines Finanzunternehmens auditbereit an die Digital Operational Resilience Act (seit 17. Januar 2025 in Kraft) anzupassen. Betroffen sind Banken, Versicherer, Investmentfirmen, Zahlungsinstitute, Krypto-Asset-Anbieter und ihre kritischen ICT-Drittanbieter. Aenix — das Team hinter Cozystack (CNCF-Projekt) — führt DORA-fokussierte Plattform-Readiness-Assessments durch und liefert mit der Ænix Platform Enterprise Edition eine DORA-konforme Architektur: kundenkontrollierte Schlüssel, audit-bereites Logging via VictoriaLogs, Mandantenfähigkeit über das Tenant CRD nach ICT-Risikoklassifizierung, getestete Exit-Mechanik und Transparenz über ICT-Drittparteien-Risiken.**

quick_facts:
  - label: "Was es ist"
    value: "Auditbereite Cloud- und Plattform-Architektur, die die Anforderungen der EU-Verordnung DORA (digitale operationale Resilienz) erfüllt"
  - label: "Lizenz"
    value: "Apache 2.0 (keine CPU-/Core-basierte Lizenzierung)"
  - label: "Status"
    value: "Cozystack ist ein CNCF-Projekt (Sandbox seit 28.02.2025; Incubating erwartet Spätsommer 2026)"
  - label: "Zielgruppe"
    value: "Finanzunternehmen der EU (Banken, Versicherer, Investmentfirmen, Zahlungsinstitute, Krypto-Asset-Anbieter) und ihre kritischen ICT-Drittanbieter"
  - label: "Regulatorik"
    value: "DORA gilt seit dem 17. Januar 2025; deckt ICT-Drittparteien-Risiko (Art. 28-30), Exit-Bereitschaft (Art. 28(8)) und operative Resilienz-Tests (Titel IV) ab"
  - label: "Schlüsselfunktionen"
    value: "Kundenkontrollierte Schlüssel, audit-bereites Logging via VictoriaLogs, Multi-Tenant-Isolierung über Tenant CRD, getestete Exit-Mechanik, Lieferantentransparenz"
  - label: "Engagement"
    value: "14-Tage-Engagement (fokussierte DORA-Bewertung) oder 28-Tage-Engagement (DORA + NIS2 + GDPR-Mapping)"

faq:
  - q: "Was ist DORA und seit wann gilt sie?"
    a: "DORA (Digital Operational Resilience Act) ist eine EU-Verordnung zur digitalen operationalen Resilienz der Finanzbranche. Sie ist seit dem 17. Januar 2025 in Kraft und ersetzt das zuvor fragmentierte Aufsichtsregime durch eine einheitliche Verordnung für die gesamte EU."
  - q: "Wer ist von DORA betroffen?"
    a: "Banken und Kreditinstitute, Versicherer und Rückversicherer, Investmentfirmen, Zahlungsinstitute und Krypto-Asset-Service-Anbieter. Zusätzlich gilt DORA für ICT-Drittanbieter, die kritische Funktionen für diese Finanzunternehmen erbringen."
  - q: "Was fordert DORA von meiner Cloud-Architektur?"
    a: "Vier Kernbereiche: Transparenz über ICT-Drittparteien-Risiken (Art. 28-30), nachweisbare Exit-Bereitschaft für kritische Funktionen (Art. 28(8)), operative Resilienz-Tests (Titel IV) sowie Souveränität und Aufsichtszugang zu Ihrer Plattform."
  - q: "Wie hilft die Ænix Platform bei der DORA-Compliance?"
    a: "Die Enterprise Edition ist DORA-konform by design: kundenkontrollierte Schlüssel, audit-bereites Logging via VictoriaLogs, Multi-Tenant-Isolierung über das Tenant CRD nach ICT-Risikoklassifizierung, getestete Exit-Mechanik und Lieferantentransparenz. Sie basiert auf Cozystack (Apache 2.0, KubeVirt für VMs und Container auf einer Kubernetes-API, Cilium-Networking, LINSTOR-Storage)."
  - q: "Reduziert Open Source das Lock-in- und Exit-Risiko unter DORA?"
    a: "Ja. Cozystack steht unter Apache 2.0 ohne CPU- oder Core-basierte Lizenzierung. Da die Plattform auf der Kubernetes-API und CNCF-Komponenten (KubeVirt, Cilium, LINSTOR) aufbaut, lässt sich die für Art. 28(8) geforderte Exit-Mechanik real testen, statt nur vertraglich zugesichert zu werden."
  - q: "Wie läuft ein DORA-Assessment bei Aenix ab?"
    a: "Aenix bietet zwei Engagements an: ein 14-Tage-Engagement als fokussierte DORA-Bewertung und ein 28-Tage-Engagement, das DORA, NIS2 und GDPR gemeinsam abbildet. Beide folgen der Methodik des Platform Readiness Assessments."
---

**Die Digital Operational Resilience Act (DORA) ist seit dem 17. Januar 2025 in Kraft. Für die Finanzbranche der EU — Banken, Versicherer, Investmentfirmen, Zahlungsinstitute, Krypto-Asset-Anbieter und ICT-Drittanbieter — hat DORA das fragmentierte Aufsichtsregime durch eine einheitliche Verordnung ersetzt.**

Aenix führt DORA-konforme Plattform-Readiness-Assessments für betroffene Unternehmen und ihre ICT-Drittanbieter durch.

> **Passt zu:** **[Ænix Platform Enterprise Edition](/de/produkte/aenix-platform/enterprise-edition/)** — DORA-konform by design (kundenkontrollierte Schlüssel, audit-bereites Logging via VictoriaLogs, Multi-Tenant Tenant CRD nach ICT-Risikoklassifizierung, getestete Exit-Mechanik, Lieferantentransparenz). Kostenlose [DORA-Checkliste →](/de/ressourcen/dora-compliance-checkliste/).

<div class="cta-row">
  <a class="cta-primary" href="/contact/">Discovery-Call buchen</a>
  <a class="cta-secondary" href="/de/blog/2026/05/dora-checkliste-cloud-architektur/">DORA-Checkliste →</a>
</div>

---

## Wer ist von DORA betroffen

- **Banken und Kreditinstitute**
- **Versicherer und Rückversicherer**
- **Investmentfirmen, Zahlungsinstitute, Krypto-Asset-Service-Anbieter**
- **ICT-Drittanbieter**, die kritische Funktionen für betroffene Unternehmen erbringen

---

## Was DORA von Ihrer Cloud-Architektur fordert

1. **ICT-Drittparteien-Risiko-Transparenz** (Artikel 28-30)
2. **Exit-Bereitschaft** für kritische Funktionen (Artikel 28(8))
3. **Operative Resilienz-Tests** (Titel IV)
4. **Souveränität und Aufsichtszugang**

Detaillierte Checkliste: **[DORA-Compliance-Artikel](/de/blog/2026/05/dora-checkliste-cloud-architektur/)**.

---

## Aenix-Engagement-Struktur

- **14-Tage-Engagement** — fokussierte DORA-Bewertung
- **28-Tage-Engagement** — DORA + NIS2 + GDPR-Mapping

Methodik: **[Platform Readiness Assessment](/services/platform-readiness-assessment/)**.

/contact/

---

*Aenix ist das Team hinter Cozystack — CNCF Project-Projekt.*

<!-- Keyword: dora compliance DE 350/KD 0/TP 1000. Word count: ~400. -->
