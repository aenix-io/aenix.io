---
title: "Sieben Entscheidungen beim Entwurf einer Sovereign-AI-Architektur"
slug: "sovereign-ai-architektur-entscheidungen"
description: "Sieben Architekturentscheidungen hinter einem souveränen AI-Stack, wie sie ineinandergreifen und welche Kombinationen in realen Deployments immer wiederkehren."
date: "2026-05-27"
cover_image: "/img/blog/covers/de/sovereign-ai-architektur-entscheidungen.jpg"
author: "Aenix Team"
type: "article"
topics: ["DORA", "NIS2", "Sovereignty", "AI/ML", "Multi-tenancy", "Financial Services"]
language: "de"
hreflang_en: "/blog/2026/05/sovereign-ai-architecture-decisions/"
companion_landing: "/de/loesungen/sovereign-ai/"
quiz:
  title: "Wissens-Check: sieben Entscheidungen für Sovereign AI"
  questions:
    - q: "Wie viele Entscheidungen definieren laut Artikel eine Sovereign-AI-Architektur?"
      options:
        - { text: "Sieben ineinandergreifende Entscheidungen", correct: true }
        - { text: "Drei Kernentscheidungen", correct: false }
        - { text: "Zwölf Entscheidungspunkte", correct: false }
      explanation: "Sieben Entscheidungen: Auslöserprofil, regulatorischer Rahmen, Modellauswahl, Hardware-Dimensionierung, Mandantenmodell, Souveränitätskontrollen, Betriebsmodell. Sie sind nicht unabhängig — frühere Entscheidungen prägen spätere."
    - q: "Welche Modellklasse schlägt der Artikel für das Muster „regulierte Finanzbranche + dauerhafte Inference + mandantenfähig“ vor?"
      options:
        - { text: "Proprietäres Closed-Weight-Modell über Hersteller-API", correct: false }
        - { text: "Eigenes, von Grund auf trainiertes Foundation Model", correct: false }
        - { text: "Open-Weight der 70B-Klasse auf eigenen H100/L40S", correct: true }
      explanation: "Beispiel für Muster 1 in der regulierten Finanzbranche: DORA + Kontrollen nach Artikel 28 + mandantenfähiges Tenant CRD + kundenkontrollierte Schlüssel + von Aenix verwalteter Betrieb + Open-Weight-Modell der Klasse Llama 70B auf einer H100/L40S-Flotte."
    - q: "Welche Open-Weight-Modellfamilien nennt der Artikel als gängige Wahl 2026?"
      options:
        - { text: "Nur Varianten auf Basis von GPT-4", correct: false }
        - { text: "Llama, Mistral, Qwen, DeepSeek, Phi, Gemma", correct: true }
        - { text: "Nur die Modellfamilie Llama 3", correct: false }
      explanation: "Gängige Open-Weight-Familien 2026: Llama, Mistral, Qwen, DeepSeek, Phi, Gemma. Die Auswahl hängt von Sprachanforderung, Workload-Typ, Lizenzbedingungen und angestrebter Leistungsfähigkeit ab."
    - q: "Was umfassen die „Souveränitätskontrollen“ unter den sieben Entscheidungen konkret?"
      options:
        - { text: "Kundenkontrollierte Schlüssel, Audit, optionaler Air-Gap", correct: true }
        - { text: "Nur Schlüsselverwaltung mit HSM-Hardware", correct: false }
        - { text: "Nur Air-Gap für die sensibelste Zone", correct: false }
      explanation: "Souveränitätskontrollen = kundenkontrollierte Schlüssel (HSM), Transparenz der Lieferkette bis zur zweiten Stufe, vollständige Audit-Trails in Formaten, die die Aufsicht auswerten kann, und eine Air-Gap-Option für die sensibelsten Workloads."
    - q: "Wie hängen die sieben Entscheidungen laut Artikel zusammen?"
      options:
        - { text: "Sie sind jeweils völlig unabhängig", correct: false }
        - { text: "Sie widersprechen sich häufig", correct: false }
        - { text: "Sie greifen ineinander — frühere prägen spätere", correct: true }
      explanation: "Die sieben sind nicht unabhängig. Das Auslöserprofil prägt den regulatorischen Rahmen; der regulatorische Rahmen prägt die Souveränitätskontrollen; die Souveränitätskontrollen prägen das Betriebsmodell; das Betriebsmodell beeinflusst, welche Modellauswahl machbar ist. Der Entscheidungsleitfaden geht sie in dieser Reihenfolge durch."
---


## Die sieben Entscheidungen

### 1. Auslöserprofil
Was treibt Sie in Richtung Souveränität? (Regulierte Datenklasse / Wirtschaftlichkeit der Inference / Prüfbarkeit / Air-Gap-Anforderung)

### 2. Regulatorischer Rahmen
Welche Aufsicht bindet Sie? (DORA, NIS2, sektorale Vorgaben, Vorgabe einer souveränen Cloud, grenzüberschreitende Übermittlung nach DSGVO)

### 3. Modellauswahl
Open-Weight oder proprietär. Gängige Open-Weight-Modelle 2026: Llama, Mistral, Qwen, DeepSeek, Phi, Gemma. Die Wahl hängt ab von:
- Sprachanforderung (mehrsprachig oder Englisch)
- Workload-Typ (Chat / RAG / Code / Vision / Embedding)
- Lizenz (kommerzielle Nutzung, Namensnennung, Weitergabe)
- Angestrebter Leistungsfähigkeit

### 4. Hardware-Dimensionierung
- NVIDIA H100/H200 — das Arbeitspferd für Fine-Tuning und Inference mit hohem Durchsatz
- NVIDIA Blackwell — neuer, höchste Speicherbandbreite
- NVIDIA L40S — 48 GB, mandantenfähige Inference-Flotte
- NVIDIA A100 — kosteneffizient, Gebrauchtmarkt
- AMD MI300/MI325 — Alternative, wenn das Ökosystem passt

### 5. Mandantenmodell
- Single-Tenant: Labor / einzelnes Team / PoC
- Mandantenfähig über das Tenant CRD: Unternehmensplattform / kundenseitiges Angebot
- Ein Cluster je Tenant: höchste Isolation, im Betrieb teuer

### 6. Souveränitätskontrollen
- Kundenkontrollierte Verschlüsselungsschlüssel (HSM)
- Transparenz der Lieferkette bis zur zweiten Stufe
- Vollständige Audit-Trails in Formaten, die die Aufsicht auswerten kann
- Air-Gap-Option für die sensibelsten Workloads

### 7. Betriebsmodell
- Betrieb durch den Kunden (Sie betreiben die Plattform)
- Betrieb durch den Anbieter (Ænix oder ein vergleichbarer Anbieter betreibt sie)
- Hybrid (Sie betreiben; der Anbieter übernimmt den Second-Level-Support)

## Wie die Entscheidungen ineinandergreifen

Die sieben Entscheidungen sind nicht unabhängig voneinander. Das Auslöserprofil prägt den regulatorischen Rahmen; der regulatorische Rahmen prägt die Souveränitätskontrollen; die Souveränitätskontrollen prägen das Betriebsmodell; das Betriebsmodell beeinflusst, welche Modellauswahl überhaupt machbar ist.

## Häufige Kombinationen

**Muster 1: Regulierte Finanzbranche + dauerhafte Inference + mandantenfähig**
DORA + Kontrollen nach Artikel 28 + mandantenfähiges Tenant CRD + kundenkontrollierte Schlüssel + von Ænix verwalteter Betrieb + Open-Weight-Modell (Klasse Llama 70B) auf einer H100/L40S-Flotte.

**Muster 2: Öffentlicher Sektor + Air-Gap + eingestufte Daten**
Vorgabe einer souveränen Cloud + Air-Gap + Betrieb durch den Kunden + Open-Weight-Modell (Llama / Phi) auf Hardware des Kunden.

**Muster 3: AI-Startup + dauerhafte Inference rund um die Uhr + kundenseitiges Angebot**
Keine spezifische Aufsicht + Kostenwirtschaftlichkeit als Auslöser + mandantenfähig + Betrieb durch den Kunden + Open-Weight-Modell + GPU-Mix passend zum Workload.

## So nutzen Sie den Entscheidungsleitfaden

Gehen Sie das Flussdiagramm Schritt für Schritt durch. Notieren Sie Ihre Antworten. Die Architekturoptionen grenzen sich dabei von selbst ein.

Zur konkreten Zusammenarbeit siehe **[Sovereign AI](/de/loesungen/sovereign-ai/)**.
