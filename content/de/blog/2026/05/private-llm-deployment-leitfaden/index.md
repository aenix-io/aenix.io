---
title: "Private LLM Deployment — Praktischer Leitfaden für On-Premise-KI-Infrastruktur 2026"
description: "Begleitung zur Souveränen KI-Page."
date: "2026-05-01"
author: "Aenix Team"
type: "article"
topics: ["Kubernetes", "Cozystack", "KubeVirt", "Cilium", "LINSTOR", "Sovereignty"]
language: "de"
companion_landing: "/de/loesungen/sovereign-ai/"
quiz:
  title: "Wissens-Check: Private-LLM-Deployment"
  questions:
    - q: "Wie viele Trigger-Profile begründen ein Private-LLM-Deployment?"
      options:
        - { text: "Drei: regulierte Datenklasse, Inferenz-Wirtschaftlichkeit (sustained Workloads), Auditbereitschaft", correct: true }
        - { text: "Fünf", correct: false }
        - { text: "Acht", correct: false }
      explanation: "Drei Trigger: (1) regulierte Datenklasse — Daten unterliegen Jurisdiktions-Bindung, (2) Inferenz-Wirtschaftlichkeit — sustained 24/7-Workloads bei stetiger Auslastung, (3) Auditbereitschaft + Reproduzierbarkeit für Aufsichtsdialoge."
    - q: "Wie viele Schichten hat ein Private-LLM-Stack?"
      options:
        - { text: "Drei", correct: false }
        - { text: "Sechs — Hardware, Plattform, Serving, Modell, Anwendung, Operations", correct: true }
        - { text: "Neun", correct: false }
      explanation: "Sechs Schichten: (1) Hardware (GPUs, CPU, Netzwerk, Storage), (2) Plattform (Kubernetes + KubeVirt + Cilium + LINSTOR), (3) Serving (vLLM, Triton), (4) Modell (Llama, Mistral, Qwen, DeepSeek, Phi, Gemma), (5) Anwendung (RAG, Agent-Frameworks, LLM-Gateway), (6) Operations."
    - q: "Welche Open-Weight-Modellfamilien werden genannt?"
      options:
        - { text: "Nur Llama", correct: false }
        - { text: "Llama, Mistral, Qwen, DeepSeek, Phi, Gemma", correct: true }
        - { text: "Nur GPT-4-Derivate", correct: false }
      explanation: "Open-Weight-Modelle für 2026 Production: Llama, Mistral, Qwen, DeepSeek, Phi, Gemma. Auswahl hängt von Spracherfordernis, Workload-Typ, Lizenzbedingungen, Capability-Ziel ab."
    - q: "Welches architektonische Muster eignet sich für klassifizierte / defence-adjacent Workloads?"
      options:
        - { text: "Single-Tenant-Cluster", correct: false }
        - { text: "Air-gapped souveräne Bereitstellung", correct: true }
        - { text: "Multi-Tenant in der Public Cloud", correct: false }
      explanation: "Vier Muster: Single-Tenant-Inferenz-Cluster (klein), Multi-Tenant-Inferenz-Flotte (Enterprise), Inferenz + Fine-Tuning + RAG (vollständige KI-Plattform), Air-gapped souveräne Bereitstellung (klassifiziert/defence-adjacent/Healthcare-mit-strikter-Residenz)."
    - q: "Welcher Serving-Stack ist Standardwahl für Inferenz?"
      options:
        - { text: "TGI", correct: false }
        - { text: "vLLM (mit Triton als Alternative für gemischte Workloads)", correct: true }
        - { text: "llama.cpp/Ollama", correct: false }
      explanation: "vLLM ist Standardwahl für die meisten Inferenz-Workloads (PagedAttention für hohen Durchsatz). Triton ist gut für gemischte Workloads (LLM + Vision + klassisches ML); TGI hat Nischenfeatures; llama.cpp/Ollama für kleinere Modelle oder PoCs."
---

Begleitung zur **[Souveränen KI-Page](/de/loesungen/sovereign-ai)**.

## Drei Trigger-Profile für Private LLM

1. **Regulierte Datenklasse** — Daten unterliegen Jurisdiktions-Bindung
2. **Inferenz-Wirtschaftlichkeit** — sustained Workloads bei stetiger Auslastung
3. **Auditbereitschaft und Reproduzierbarkeit** — Aufsichtsdialoge erfordern dies

## Sechs Schichten eines Private-LLM-Stacks

1. Hardware (GPUs, CPU, Netzwerk, Storage)
2. Plattform (Kubernetes + KubeVirt + Cilium + LINSTOR)
3. Serving (vLLM, Triton)
4. Modellschicht (Llama, Mistral, Qwen, DeepSeek, Phi, Gemma)
5. Anwendungsschicht (RAG, Agent-Frameworks, LLM-Gateway)
6. Operations (Observability, Audit, Cost Management)

## Architektonische Muster

- Single-Tenant-Inferenz-Cluster
- Multi-Tenant-Inferenz-Flotte
- Inferenz + Fine-Tuning + RAG (vollständige KI-Plattform)
- Air-gapped souveräne Bereitstellung

## Wie geht es weiter?

Strukturierte Bewertung → **[Platform Readiness Assessment](/services/platform-readiness-assessment/)**.

---

*Aenix ist das Team hinter Cozystack.*

<!-- Word count: ~300. -->
