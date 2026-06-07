---
title: "Sovereign-AI-Architektur-Leitfaden — visueller Flowchart + Q&A (kostenloses PDF)"
description: "Ein 12-seitiger Decision-Guide für Organisationen, die souveräne KI-Infrastruktur evaluieren. Visueller Flowchart führt durch 7 Schlüssel-Entscheidungen:..."
type: "page"
related_pages:
  - /de/loesungen/sovereign-ai
  - /de/dienstleistungen/ai-platform-build
  - /de/produkte/aenix-platform/ai-ml-edition/
language: "de"
direct_answer: |
  **Der Sovereign-AI-Architektur-Leitfaden ist ein kostenloser 12-seitiger Decision-Guide für IT- und Compliance-Verantwortliche, die souveräne KI-Infrastruktur evaluieren. Ein visueller Flowchart führt durch sieben Schlüssel-Entscheidungen: Trigger-Profil, regulatorischer Scope (DORA, NIS2, souveränes-Cloud-Mandat), Modell-Auswahl (Open-Weight wie Llama, Mistral, Qwen), Hardware-Sizing, Multi-Tenancy-Modell, Souveränitätskontrollen und operatives Modell. Der Guide liefert vier annotierte Architektur-Patterns und Sizing-Referenztabellen. Das Ergebnis mappt direkt auf die Ænix Platform AI/ML Edition — eine turnkey, selbst-gehostete KI-Plattform auf Cozystack (CNCF-Projekt, Apache 2.0) mit Multi-Tenant-GPU-Scheduling und Souveränitätskontrollen.**
quick_facts:
  - label: "Was es ist"
    value: "Kostenloser 12-seitiger Decision-Guide (PDF) mit visuellem Flowchart zur Planung souveräner KI-Infrastruktur"
  - label: "Zielgruppe"
    value: "IT-Leiter, Architekten und Compliance-Teams in regulierten Branchen, die selbst-gehostete KI evaluieren"
  - label: "Lizenz"
    value: "Apache 2.0 (keine CPU-/Core-basierte Lizenzierung)"
  - label: "Status"
    value: "Cozystack ist ein CNCF-Projekt (Sandbox seit 28.02.2025; Incubating erwartet Spätsommer 2026)"
  - label: "Inhalt"
    value: "7-stufiger Decision-Tree, vier Architektur-Patterns (Single-Tenant bis Air-Gapped) und Hardware-Sizing-Tabellen"
  - label: "Regulatorik"
    value: "Deckt DORA, NIS2 und souveräne-Cloud-Mandate als regulatorische Trigger ab"
  - label: "Verwandtes Produkt"
    value: "Ænix Platform AI/ML Edition — turnkey KI-Infrastruktur mit Multi-Tenant-GPU-Scheduling auf Cozystack"
faq:
  - q: "Was ist souveräne KI-Infrastruktur?"
    a: "Souveräne KI-Infrastruktur bedeutet, KI-Modelle und -Daten auf eigener oder selbst-kontrollierter Infrastruktur zu betreiben, statt auf einer Public-Cloud-API. So bleiben Daten, Verschlüsselungsschlüssel und Audit-Trails unter eigener Kontrolle — eine Voraussetzung für Organisationen unter DORA, NIS2 oder einem souveränen-Cloud-Mandat."
  - q: "Für wen ist der Sovereign-AI-Architektur-Leitfaden gedacht?"
    a: "Für IT-Leiter, Plattform-Architekten und Compliance-Teams in regulierten Branchen, die selbst-gehostete oder air-gapped KI evaluieren. Der visuelle Flowchart hilft, in sieben Schritten von Trigger-Profil und regulatorischem Scope bis zum operativen Modell eine passende Architektur zu bestimmen."
  - q: "Welche Architektur-Patterns deckt der Leitfaden ab?"
    a: "Vier gängige Patterns mit annotierten Diagrammen: Single-Tenant Inferenz-Cluster, Multi-Tenant Inferenz-Fleet, kombiniertes Inferenz + Fine-Tuning + RAG sowie Air-Gapped souveränes Deployment. Jedes Pattern mappt auf einen Deployment-Scope der Ænix Platform AI/ML Edition."
  - q: "Wie hängt der Leitfaden mit Cozystack und der Ænix Platform zusammen?"
    a: "Das Decision-Ergebnis mappt direkt auf die Ænix Platform AI/ML Edition — eine turnkey KI-Plattform auf Cozystack (CNCF-Projekt, Apache 2.0). Cozystack nutzt KubeVirt für VMs und Container auf einer Kubernetes-API, Cilium (eBPF) für Networking, LINSTOR/DRBD für Storage und das Tenant-CRD für Mandantenfähigkeit."
  - q: "Welche KI-Modelle und GPU-Hardware werden behandelt?"
    a: "Bei der Modell-Auswahl werden Open-Weight-Modelle wie Llama, Mistral, Qwen, DeepSeek, Phi und Gemma gegen proprietäre abgewogen. Beim Hardware-Sizing werden NVIDIA A100, H100, H200, L40S und Blackwell sowie CPU-, Memory- und Network-Anforderungen pro Workload-Profil behandelt."
  - q: "Was kostet die Ænix Platform für KI-Workloads?"
    a: "Die Ænix Platform wird in vier Stufen angeboten: Basic 1.250 $/Monat (10 Nodes), Standard 3.000 $, Plus 5.500 $ und Enterprise nach Aufwand. Cozystack selbst ist Open Source unter Apache 2.0 ohne CPU- oder Core-basierte Lizenzierung."
---

**Ein 12-seitiger Decision-Guide für Organisationen, die souveräne KI-Infrastruktur evaluieren. Visueller Flowchart führt durch 7 Schlüssel-Entscheidungen: Trigger-Profil, regulatorischer Scope, Modell-Auswahl, Hardware-Sizing, Multi-Tenancy-Modell, Souveränitätskontrollen, operatives Modell.**

> **Passt zu:** **[Ænix Platform AI/ML Edition](/de/produkte/aenix-platform/ai-ml-edition/)** — turnkey KI-Infrastruktur mit Multi-Tenant-GPU-Scheduling, fertigen Blueprints für Inferenz + Fine-Tuning + RAG, Souveränitätskontrollen. Der Decision-Guide outputs eine Architektur-Pattern, die direkt auf AI/ML Edition Deployment-Scope mappt.

<div class="lead-magnet-form">
{{< pipedrive-form type="lead-magnet" >}}
[Sovereign-AI-Decision-Guide herunterladen (PDF)]
</div>

---

## Was im Leitfaden enthalten ist

### Decision-Tree
Visueller Flowchart, der Sie durchführt:

1. **Trigger-Profil** — regulierte Daten, Inferenz-Ökonomie, Auditierbarkeit, Air-Gap
2. **Regulatorischer Scope** — DORA, NIS2, sektoral, souveränes-Cloud-Mandat
3. **Modell-Auswahl** — Llama, Mistral, Qwen, DeepSeek, Phi, Gemma; Open-Weight vs proprietär
4. **Hardware-Sizing** — A100, H100, H200, L40S, Blackwell; CPU/Memory/Network
5. **Multi-Tenancy-Modell** — Tenant CRD, Namespace-per-Team, Cluster-per-Tenant
6. **Souveränitätskontrollen** — Verschlüsselungsschlüssel, Lieferanten-Transparenz, Audit-Bereitschaft
7. **Operatives Modell** — kunden-betrieben, vendor-betrieben, hybrid

### Architektur-Patterns
Vier gängige Patterns mit annotierten Diagrammen:
- Single-Tenant Inferenz-Cluster
- Multi-Tenant Inferenz-Fleet
- Inferenz + Fine-Tuning + RAG
- Air-Gapped souveränes Deployment

### Sizing-Referenz
Praktische Sizing-Tabellen für gängige Workload-Profile.

---

*Aenix ist das Open-Core-Unternehmen hinter [Cozystack](https://cozystack.io) (CNCF-Projekt). Hersteller von Ænix Platform — turnkey kommerzielle Cloud-in-a-Box in fünf Editions.*
