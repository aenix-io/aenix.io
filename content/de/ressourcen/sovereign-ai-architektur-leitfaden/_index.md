---
title: "Sovereign-AI-Architektur-Leitfaden — Entscheidungsbaum und Referenzarchitekturen (kostenloses PDF)"
seo_title: "Sovereign-AI-Architektur-Leitfaden (kostenloses PDF)"
description: "Kostenloser elfseitiger Leitfaden für souveräne KI-Infrastruktur: sieben Entscheidungen, vier Referenzarchitekturen, Tabellen zur GPU-Dimensionierung."
type: "page"
related_pages:
  - /de/loesungen/sovereign-ai/
  - /de/dienstleistungen/ai-platform-build/
  - /de/produkte/ai-platform/
hreflang_en: /resources/sovereign-ai-decision-guide/
language: "de"
quick_facts_style: "rows"
faq_style: "rows"
direct_answer: |
  **Der Sovereign-AI-Architektur-Leitfaden ist ein kostenloses elfseitiges PDF für Organisationen, die souveräne KI-Infrastruktur prüfen — also KI-Workloads auf Infrastruktur, die sie selbst kontrollieren, statt über die API eines Hyperscalers. Er richtet sich an Verantwortliche für KI-Infrastruktur, CTOs und Platform-Engineering-Teams. Ein Flussdiagramm führt durch sieben Entscheidungen: Auslöser, regulatorischer Rahmen (DORA, NIS2, Vorgaben für souveräne Clouds), Auswahl von Open-Weight-Modellen, Dimensionierung der GPU-Hardware, Mandantenmodell, Souveränitätskontrollen und Betriebsmodell; die Antworten führen zu einem von vier Architekturmustern. Ænix nutzt dieses Framework, um Projekte für souveräne KI abzustecken. Das Ergebnis lässt sich direkt auf die Ænix AI Platform übertragen, die auf Cozystack, einem CNCF-Sandbox-Projekt, basiert und mandantenfähiges GPU-Scheduling mit Blueprints für Inferenz, Fine-Tuning und RAG bietet.**
quick_facts:
  - label: "Was es ist"
    value: "Kostenloser elfseitiger Leitfaden mit einem zentralen Entscheidungsbaum für den Entwurf souveräner KI-Infrastruktur — dasselbe Framework, mit dem Ænix Projekte für souveräne KI absteckt"
  - label: "Zielgruppe"
    value: "Verantwortliche für KI-Infrastruktur, CTOs, Architekten und Platform-Engineering-Teams, die souveräne KI gegen KI beim Hyperscaler abwägen"
  - label: "Inhalt"
    value: "Sieben Entscheidungen und vier Architekturmuster: Single-Tenant-Inferenz, mandantenfähige Inferenzflotte, Inferenz + Fine-Tuning + RAG sowie souveränes Air-Gap-Deployment"
  - label: "Passt zu"
    value: "Ænix AI Platform — mandantenfähiges GPU-Scheduling mit Blueprints für Inferenz, Fine-Tuning und RAG"
  - label: "Format"
    value: "Kostenloses elfseitiges PDF, Zustellung per E-Mail; typischerweise 1–3 Stunden Durcharbeiten mit Ihrem Team"
faq:
  - q: "Was ist souveräne KI-Infrastruktur?"
    a: "Souveräne KI-Infrastruktur betreibt KI-Workloads (Inferenz, Fine-Tuning, RAG) auf Infrastruktur, die eine Organisation selbst kontrolliert — on-premises oder in einer gewählten Rechtsordnung — statt über die KI-API eines Hyperscalers. Daten, Modelle und Schlüssel bleiben unter der Kontrolle des Betreibers, um Anforderungen an Regulierung, Datenresidenz und Auditierbarkeit zu erfüllen."
  - q: "Für wen ist der Sovereign-AI-Leitfaden gedacht?"
    a: "Für Verantwortliche für KI-Infrastruktur und CTOs in Organisationen mit hohem KI-Anteil, für Architekten, die souveräne KI mit KI beim Hyperscaler vergleichen, für Platform-Engineering-Leads, die KI-Infrastruktur planen, und für CTOs von KI-Start-ups, die eigene Infrastruktur planen. Der Leitfaden gibt ihnen einen strukturierten Rahmen für die wichtigsten Architekturentscheidungen, bevor sie sich auf einen Aufbau festlegen."
  - q: "Welche KI-Modelle und GPUs behandelt der Leitfaden?"
    a: "Er behandelt die Auswahl von Open-Weight-Modellen aus Familien wie Llama, Mistral, Qwen, DeepSeek, Phi und Gemma und wägt Open-Weight gegen proprietäre Modelle ab. Für die Hardware-Dimensionierung dienen NVIDIA-GPU-Generationen für Rechenzentren (A100, H100, H200, L40S, Blackwell) als Eingangsgrößen, mit praktischen Tabellen für gängige Workload-Profile. Es handelt sich um Planungswerte, nicht um eine Liste getesteter Hardware."
  - q: "Wie hängt der Leitfaden mit der Ænix AI Platform zusammen?"
    a: "Der Leitfaden liefert ein Architekturmuster, das sich direkt auf den Umfang eines Deployments der Ænix AI Platform übertragen lässt — schlüsselfertige KI-Infrastruktur mit mandantenfähigem GPU-Scheduling und Blueprints für Inferenz, Fine-Tuning und RAG, aufgebaut auf Cozystack mit Souveränitätskontrollen."
  - q: "Wie ermöglicht Cozystack mandantenfähige souveräne KI?"
    a: "Cozystack betreibt VMs über KubeVirt und Container auf einer Kubernetes-API, nutzt Cilium (eBPF) für das Networking und LINSTOR/DRBD für Storage und trennt Teams über die Tenant-CRD. Damit lassen sich Namespace pro Team, Cluster pro Tenant und mandantenfähiges GPU-Scheduling umsetzen, unter der Apache-2.0-Lizenz und ohne Lizenzkosten pro Core. GPUs werden über den NVIDIA GPU Operator bereitgestellt: Passthrough ganzer GPUs an VMs und anteilige Nutzung für Pods über HAMi; MIG und Time-Slicing stehen auf der Roadmap."
  - q: "Was kostet der Leitfaden?"
    a: "Der Leitfaden ist ein kostenloser PDF-Download. Die Ænix AI Platform, auf die er abzielt, wird nach einem Assessment per RFP angeboten, weil GPU-Bestand, Modelle und Betriebsmodell stark variieren."
---

**Ein elfseitiger Leitfaden für Organisationen, die souveräne KI-Infrastruktur prüfen. Ein zentraler Entscheidungsbaum führt durch sieben Schlüsselentscheidungen: Auslöser, regulatorischer Rahmen, Modellauswahl, Hardware-Dimensionierung, Mandantenmodell, Souveränitätskontrollen, Betriebsmodell. Ænix setzt ihn ein, um Projekte für souveräne KI abzustecken.**

> **Passt zu:** **[Ænix AI Platform](/de/produkte/ai-platform/)** — schlüsselfertige KI-Infrastruktur mit mandantenfähigem GPU-Scheduling, fertigen Blueprints für Inferenz, Fine-Tuning und RAG sowie Souveränitätskontrollen. Der Leitfaden liefert ein Architekturmuster, das sich direkt auf den Umfang eines AI-Platform-Deployments übertragen lässt.

<div class="lead-magnet-form">
{{< pipedrive-form type="lead-magnet" resource="sovereign-ai-decision-guide" >}}
<p class="lead-magnet-form__note">Sovereign-AI-Leitfaden herunterladen (PDF)</p>
</div>

---

## Was der Leitfaden enthält

### Entscheidungsbaum
Ein Flussdiagramm, das Sie durch folgende Schritte führt:

1. **Auslöser** — regulierte Daten, Wirtschaftlichkeit der Inferenz, Auditierbarkeit, Air-Gap
2. **Regulatorischer Rahmen** — DORA, NIS2, branchenspezifische Vorgaben, Vorgaben für souveräne Clouds
3. **Modellauswahl** — Llama, Mistral, Qwen, DeepSeek, Phi, Gemma; Open-Weight vs. proprietär
4. **Hardware-Dimensionierung** — NVIDIA-GPU-Generationen für Rechenzentren als Eingangsgrößen; CPU, Arbeitsspeicher, Netzwerk
5. **Mandantenmodell** — Tenant-CRD, Namespace pro Team, Cluster pro Tenant
6. **Souveränitätskontrollen** — Verschlüsselung und Schlüsselverwaltung, Transparenz über Lieferanten, Auditfähigkeit
7. **Betriebsmodell** — vom Kunden betrieben, vom Anbieter betrieben, hybrid

### Fragen und Antworten
Zu jeder Entscheidung ausführliche Fragen und Antworten mit den jeweiligen Abwägungen.

### Architekturmuster
Vier gängige Muster mit kommentierten Diagrammen:
- Single-Tenant-Inferenzcluster
- Mandantenfähige Inferenzflotte
- Inferenz + Fine-Tuning + RAG
- Souveränes Air-Gap-Deployment

### Referenz zur Dimensionierung
Praktische Tabellen zur Dimensionierung für gängige Workload-Profile.

<div class="arch-section__fig">
<div class="diagram">
<div class="diagram__node"><b>7 Schlüsselentscheidungen</b><div class="diagram__chips"><span>Auslöser</span><span>Regulatorischer Rahmen</span><span>Modell + Hardware-Dimensionierung</span></div></div>
<div class="diagram__conn">führt zu</div>
<div class="diagram__node"><b>Architekturmuster</b><div class="diagram__chips"><span>Eines von vier Mustern</span></div></div>
<div class="diagram__conn">umgesetzt als</div>
<div class="diagram__node diagram__node--brand"><b>Ænix AI Platform</b><div class="diagram__chips"><span>Mandantenfähiges GPU-Scheduling</span><span>Inferenz + Fine-Tuning + RAG</span></div></div>
</div>
</div>

---

## Wer ihn nutzt

- Verantwortliche für KI-Infrastruktur / CTOs in Organisationen mit hohem KI-Anteil
- Architekten, die souveräne KI gegen KI beim Hyperscaler abwägen
- Platform-Engineering-Leads, die KI-Infrastruktur planen
- CTOs von KI-Start-ups, die eigene Infrastruktur planen

---

## Nach dem Download

Der Leitfaden liefert den architektonischen Rahmen für Ihre Entscheidungen. Für ein konkretes Projekt siehe **[Sovereign AI](/de/loesungen/sovereign-ai/)** oder **[AI Platform Build](/de/dienstleistungen/ai-platform-build/)**.

---

## Verwandte Ressourcen

- **[Sovereign AI](/de/loesungen/sovereign-ai/)** — Details zum Vorgehen
- **[AI Platform Build](/de/dienstleistungen/ai-platform-build/)** — breiterer Umfang
- **[Data Sovereignty](/de/loesungen/data-sovereignty/)** — Anlass aus Sicht der Regulierung

---

*Ænix hat Cozystack (ein CNCF-Sandbox-Projekt) initiiert und pflegt es gemeinsam mit Maintainern anderer Unternehmen. Darauf aufbauend bietet Ænix drei Plattformen an: Public Cloud, Private Cloud und AI.*
