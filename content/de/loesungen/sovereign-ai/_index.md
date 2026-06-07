---
title: "Souveräne KI-Infrastruktur — GenAI auf Daten, die das Unternehmen nicht verlassen dürfen"
description: "Für regulierte Workloads ist KI nicht mehr nur ein Hyperscaler-Thema. Sensible Datenklassen, sektorale Vorgaben und die Ökonomie von Inferenz im großen..."
type: "page"
related_pages: ["/de/loesungen/data-sovereignty", "/de/loesungen/dora-compliance", "/products/cozystack"]
language: "de"
direct_answer: |
  **Souveräne KI-Infrastruktur bedeutet, dass GenAI, Inferenz, Fine-Tuning und Analytics auf kundeneigener Hardware in der gewählten Jurisdiktion und unter kundenkontrollierten Verschlüsselungsschlüsseln laufen — Trainingsdaten, Prompts, Completions und Embeddings verlassen den Perimeter nie. Sie richtet sich an Finanzdienstleister, Gesundheitswesen, öffentlichen Sektor und KI-Plattform-Betreiber, deren Datenklasse, Regulator (DORA, NIS2, sektorale Vorgaben) oder Inferenz-Ökonomie Hyperscaler-KI-Services nicht praktikabel macht. Aenix baut und betreibt diese Infrastruktur auf Cozystack, einem CNCF-Sandbox-Projekt unter Apache 2.0: eine Kubernetes-native KI-Plattform mit Multi-Tenant-GPU-Scheduling für A100, H100, H200, L40S und Blackwell, lokal betriebenen Open-Weight-Modellen (Llama, Mistral, Qwen, DeepSeek, Phi) und voller Kundengovernance.**
quick_facts:
  - label: "Was es ist"
    value: "KI-Infrastruktur, auf der GenAI, Inferenz und Fine-Tuning auf kundeneigener Hardware in der gewählten Jurisdiktion unter kundenkontrollierten Schlüsseln laufen — Daten verlassen den Perimeter nie."
  - label: "Lizenz"
    value: "Apache 2.0 (keine CPU-/Core-basierte Lizenzierung)"
  - label: "Status"
    value: "Cozystack ist ein CNCF-Projekt (Sandbox seit 28.02.2025; Incubating erwartet Spätsommer 2026)"
  - label: "Zielgruppe"
    value: "Finanzdienstleister, Gesundheitswesen, öffentlicher Sektor und KI-Plattform-Betreiber mit sensibler Datenklasse oder Air-gap-/Restricted-egress-Anforderung"
  - label: "Schlüsselfunktion"
    value: "Multi-Tenant-GPU-Scheduling für A100, H100, H200, L40S und Blackwell; lokal betriebene Open-Weight-Modelle (Llama, Mistral, Qwen, DeepSeek, Phi)"
  - label: "Regulatorik"
    value: "Unterstützt DORA, NIS2, sektorale Vorgaben und souveräne Cloud-Mandate durch Jurisdiktions- und Schlüsselkontrolle"
  - label: "Engagement"
    value: "Ænix Platform AI/ML Edition (produktisiert) plus Aenix-Aufbau und -Betrieb; für breitere souveräne Cloud kombinierbar mit Enterprise Edition"
faq:
  - q: "Was unterscheidet souveräne KI von Hyperscaler-KI-Services?"
    a: "Bei souveräner KI läuft das Modell auf Ihrer Hardware in Ihrer Jurisdiktion, die Modellgewichte stehen unter Ihrer Kontrolle und Daten — Prompts, Completions, Embeddings, Trainingsdaten — verlassen Ihren Perimeter nie. Hyperscaler-Services verarbeiten Daten in fremder Infrastruktur und Jurisdiktion, was bei regulierten Datenklassen oder Air-gap-Anforderungen nicht praktikabel ist."
  - q: "Welche GPUs und Modelle werden unterstützt?"
    a: "Die Plattform bietet Multi-Tenant-GPU-Scheduling für A100, H100, H200, L40S und Blackwell. Betrieben werden Open-Weight-Modelle wie Llama, Mistral, Qwen, DeepSeek und Phi — lokal, mit Modellgewichten unter Ihrer Kontrolle."
  - q: "Hilft souveräne KI bei DORA- und NIS2-Compliance?"
    a: "Ja. Indem KI-Verarbeitung an die gewählte Jurisdiktion gebunden, unter kundenkontrollierten Schlüsseln betrieben und reproduzierbar sowie auditbereit gehalten wird, unterstützt souveräne KI-Infrastruktur DORA, NIS2, sektorale Vorgaben und souveräne Cloud-Mandate. Kombinierbar mit der Datensouveränitäts- und DORA-Compliance-Lösung."
  - q: "Auf welcher Technologie basiert die Plattform?"
    a: "Auf Cozystack, einem CNCF-Sandbox-Projekt unter Apache 2.0. Es nutzt KubeVirt für VMs und Container über eine Kubernetes-API, Cilium (eBPF) für Networking, LINSTOR/DRBD für Storage und Tenant-CRD-basierte Mandantenfähigkeit. Vector DB und Object Storage sind in der AI/ML Edition inkludiert."
  - q: "Was kostet die Ænix Platform?"
    a: "Die Preisstufen sind Basic 1.250 $/Monat (10 Nodes), Standard 3.000 $, Plus 5.500 $ und Enterprise (Custom). Aenix bietet die produktisierte Ænix Platform AI/ML Edition plus Aufbau- und Betriebs-Services."
  - q: "Ist Air-gap- oder Restricted-egress-Betrieb möglich?"
    a: "Ja. Souveräne KI ist explizit für Air-gap- und Restricted-egress-Anforderungen ausgelegt: Inferenz läuft auf eigenen GPUs, Modelle und Daten bleiben innerhalb der kundenkontrollierten Umgebung, und das Modellverhalten lässt sich reproduzierbar und auditbereit halten."
---

**Für regulierte Workloads ist KI nicht mehr nur ein Hyperscaler-Thema. Sensible Datenklassen, sektorale Vorgaben und die Ökonomie von Inferenz im großen Maßstab drängen Finanzdienstleister, Gesundheitswesen, öffentlichen Sektor und KI-Plattform-Betreiber zu souveräner KI-Infrastruktur — GenAI, Inferenz und Analytics auf Kunden-eigener Hardware in der gewählten Jurisdiktion unter kundenkontrollierten Verschlüsselungsschlüsseln.**

Aenix baut und betreibt souveräne KI-Infrastruktur für Organisationen, deren Datenklasse, Regulator oder Wirtschaftlichkeit Hyperscaler-KI-Services nicht praktikabel macht.

> **Passt zu:** **[Ænix Platform AI/ML Edition](/de/produkte/aenix-platform/ai-ml-edition/)** — KI-Plattform-Automatisierung out-of-the-box (Multi-Tenant-GPU-Scheduling für H100/H200/L40S/A100/Blackwell, fertige Blueprints für Inferenz + Fine-Tuning + RAG, Vector DB + Object Storage inkludiert, Souveränitätskontrollen). Für regulierte KI-Workloads in einer breiteren souveränen Cloud: kombinieren mit **[Enterprise Edition](/de/produkte/aenix-platform/enterprise-edition/)**. Kostenloser [Sovereign-AI-Architektur-Leitfaden →](/de/ressourcen/sovereign-ai-architektur-leitfaden/).

<div class="cta-row">
  <a class="cta-primary" href="/contact/">Discovery-Call buchen</a>
  <a class="cta-secondary" href="/de/blog/2026/05/private-llm-deployment-leitfaden/">Private-LLM-Leitfaden →</a>
</div>

---

## Wer braucht souveräne KI

- Datenklasse ist sensibel (regulierte personenbezogene Daten, Finanzdaten, Gesundheitsdaten, klassifizierte Informationen)
- Regulator bindet KI-Verarbeitung an Jurisdiktion (DORA, NIS2, sektorale Regeln, souveräne Cloud-Mandate)
- Inferenz at scale ist in Hyperscaler-Ökonomie unwirtschaftlich
- Modellverhalten muss reproduzierbar und auditbereit sein
- Air-gap- oder Restricted-egress-Anforderung

---

## Was souveräne KI tatsächlich bedeutet

1. **Modell läuft auf Ihrer Hardware** — Inferenz auf eigenen GPUs (A100, H100, H200, L40S, Blackwell)
2. **Daten verlassen den Perimeter nie** — Trainingsdaten, Prompts, Completions, Embeddings bleiben innerhalb der kundenkontrollierten Umgebung
3. **Modellgewichte unter Ihrer Kontrolle** — Open-Weight-Modelle (Llama, Mistral, Qwen, DeepSeek, Phi) lokal
4. **Plattform unter Ihrer Governance** — Kubernetes-native KI-Plattform mit klarer Verantwortlichkeit

---

/contact/

- **[Private-LLM-Leitfaden](/de/blog/2026/05/private-llm-deployment-leitfaden/)**
- **[Datensouveränität](/de/loesungen/data-sovereignty)**
- **[DORA-Compliance](/de/loesungen/dora-compliance)**

---

*Aenix ist das Team hinter Cozystack — CNCF Project-Projekt.*

<!-- Keyword: sovereign ai DE 300. Word count: ~400. -->
