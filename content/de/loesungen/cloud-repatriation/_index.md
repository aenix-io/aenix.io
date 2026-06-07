---
title: "Cloud Repatriation — Public Cloud verlassen, ohne die Anwendung zu zerbrechen"
description: "Der Broadcom Private Cloud Outlook 2025 fand heraus, dass 69% der Organisationen Cloud Repatriation evaluieren und 53% Private Cloud für neue Workloads..."
type: "page"
related_pages: ["/de/loesungen/cloud-kostenoptimierung", "/de/produkte/private-cloud"]
language: "de"
direct_answer: |
  **Cloud Repatriation bezeichnet die geplante Rückführung von Workloads aus Public Clouds (AWS, Azure, GCP) in eine eigene Private-Cloud- oder On-Premises-Umgebung. Sie richtet sich an Organisationen, die Kostenexplosion, Regulatordruck, KI-Datenresidenz oder vorhersagbare Performance adressieren müssen — laut Broadcom Private Cloud Outlook 2025 evaluieren 69% der Organisationen Repatriation. Aenix führt das technische Engagement durch, das eine Vorstandsaussage in einen umsetzbaren Plan mit benannten Workloads, modellierten Kosten und einer Zielarchitektur verwandelt. Die Zielplattform ist Cozystack, das offene (Apache 2.0), CNCF-basierte Fundament, das KubeVirt-VMs und Container über eine einzige Kubernetes-API betreibt.**

quick_facts:
  - label: "Was es ist"
    value: "Geplante Rückführung von Workloads aus Public Clouds in eine eigene Private-Cloud- oder On-Premises-Umgebung, mit benannten Workloads, modellierten Kosten und Zielarchitektur"
  - label: "Lizenz"
    value: "Apache 2.0 (keine CPU-/Core-basierte Lizenzierung)"
  - label: "Status"
    value: "Cozystack ist ein CNCF-Projekt (Sandbox seit 28.02.2025; Incubating erwartet Spätsommer 2026)"
  - label: "Zielgruppe"
    value: "Organisationen mit hohen Public-Cloud-Rechnungen, vorhersagbaren Steady-State-Workloads, Souveränitäts-Anforderungen oder KI/ML-Egress- und Inferenz-Kostenproblemen"
  - label: "Zielplattform"
    value: "Cozystack betreibt KubeVirt-VMs und Container über eine Kubernetes-API; Cilium (eBPF) Networking, LINSTOR/DRBD Storage, Tenant-CRD-Mandantenfähigkeit"
  - label: "Marktkontext"
    value: "Broadcom Private Cloud Outlook 2025: 69% evaluieren Repatriation, 53% priorisieren Private Cloud für neue Workloads"
  - label: "Engagement"
    value: "Ænix Platform (produktisiert) plus Services; Preisstufen Basic 1.250 $/Mon. (10 Nodes), Standard 3.000 $, Plus 5.500 $, Enterprise Custom"

faq:
  - q: "Was ist Cloud Repatriation?"
    a: "Cloud Repatriation ist die geplante Rückführung von Workloads aus Public Clouds wie AWS, Azure oder GCP zurück in eine eigene Private-Cloud- oder On-Premises-Umgebung. Treiber sind typischerweise Kostenexplosion, Regulatordruck, KI-Datenresidenz und der Bedarf an vorhersagbarer Performance bei Steady-State-Workloads."
  - q: "Welche Workloads eignen sich für Repatriation?"
    a: "Am besten eignen sich vorhersagbare Steady-State-Workloads, Systeme mit hohen Public-Cloud-Rechnungen, sensible Daten mit Souveränitäts-Anforderungen sowie KI/ML-Workloads, die unter Egress- und Inferenz-Kosten leiden. Bursty oder selten genutzte Workloads bleiben oft besser in der Public Cloud."
  - q: "Auf welche Plattform migriert Aenix die Workloads?"
    a: "Aenix migriert auf Cozystack, ein CNCF-Sandbox-Projekt unter Apache-2.0-Lizenz. Cozystack betreibt VMs (via KubeVirt) und Container über eine einzige Kubernetes-API, mit Cilium (eBPF) für Networking, LINSTOR/DRBD für Storage und Tenant-CRD-basierter Mandantenfähigkeit. Die produktisierte Variante ist die Ænix Platform."
  - q: "Wie läuft ein Repatriation-Engagement mit Aenix ab?"
    a: "Aenix übersetzt die strategische Entscheidung in einen umsetzbaren Plan: Inventarisierung und Auswahl der zu migrierenden Workloads, Kostenmodellierung gegenüber dem aktuellen Public-Cloud-Setup und Entwurf der Zielarchitektur. Ein kostenloses Cloud-Repatriation-TCO-Worksheet steht für die erste Einschätzung bereit."
  - q: "Welche Edition der Ænix Platform passt zu Repatriation?"
    a: "Jede Ænix Platform Edition unterstützt Repatriation; die Wahl folgt dem Buyer-Profil. Hosting-Anbieter und regionale Clouds wählen die ISP Edition, regulierte Unternehmen die Enterprise Edition, große Betreiber die Public Cloud Edition, Produkt-Engineering-Teams die IDP Edition und KI-lastige Umgebungen die AI/ML Edition."
  - q: "Was kostet die Ænix Platform?"
    a: "Die Ænix Platform kombiniert Produkt und Services in vier Stufen: Basic ab 1.250 $/Monat (bis 10 Nodes), Standard 3.000 $/Monat, Plus 5.500 $/Monat und Enterprise mit individueller Preisgestaltung. Cozystack selbst ist Open Source unter Apache 2.0 ohne CPU- oder Core-basierte Lizenzierung."
---

**Der Broadcom Private Cloud Outlook 2025 fand heraus, dass 69% der Organisationen Cloud Repatriation evaluieren und 53% Private Cloud für neue Workloads priorisieren. Die Gründe variieren — Kostenexplosion, Regulatordruck, KI-Datenresidenz, vorhersagbare Performance — aber die architektonische Arbeit ist die gleiche.**

Aenix führt die technische Engagement durch, die "wir müssen AWS / Azure / GCP verlassen" von einer Vorstandsaussage in einen funktionierenden Plan mit benannten Workloads, modellierten Kosten und Zielarchitektur verwandelt.

> **Passt zu:** jeder **[Ænix Platform Edition](/de/produkte/aenix-platform/)** — die richtige Edition folgt Ihrem Buyer-Profil. Hosting-Anbieter / regionale Clouds: [ISP Edition](/de/produkte/aenix-platform/isp-edition/). Regulierte Unternehmen: [Enterprise Edition](/de/produkte/aenix-platform/enterprise-edition/). Große Betreiber: [Public Cloud Edition](/de/produkte/aenix-platform/public-cloud-edition/). Produkt-Engineering-Teams: [IDP Edition](/de/produkte/aenix-platform/idp-edition/). KI-lastig: [AI/ML Edition](/de/produkte/aenix-platform/ai-ml-edition/). Kostenloses [Cloud-Repatriation-TCO-Worksheet →](/de/ressourcen/cloud-repatriation-tco-worksheet/).

<div class="cta-row">
  <a class="cta-primary" href="/contact/">Discovery-Call buchen</a>
  <a class="cta-secondary" href="/de/blog/2026/05/reverse-cloud-migration-leitfaden/">Repatriation-Leitfaden →</a>
</div>

---

## Wer profitiert von Repatriation

- Hohe Public-Cloud-Rechnungen
- Vorhersagbare Steady-State-Workloads
- Sensible Daten mit Souveränitäts-Anforderungen
- KI/ML-Workloads mit Egress- und Inferenz-Kostenproblem
- Interne Plattform-Engineering-Funktion

---

/contact/

---

*Aenix ist das Team hinter Cozystack.*

<!-- Keyword: cloud repatriation DE 150. Word count: ~250. -->
