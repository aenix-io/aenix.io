---
title: "Ænix Platform AI/ML Edition"
description: "Schlüsselfertige, souveräne KI-Infrastruktur auf Cozystack: Multi-Tenant-GPU-Scheduling, Service-APIs und Blueprints für Inferenz, Fine-Tuning und RAG."
type: "page"
language: "de"
direct_answer: |
  **Die Ænix Platform AI/ML Edition ist eine schlüsselfertige, souveräne KI-Infrastruktur auf Basis des Open-Source-Projekts Cozystack (CNCF, Apache 2.0). Sie richtet sich an KI-native Organisationen at scale, regulierte KI-Deployments und GPU-lastige Produkt-Unternehmen, die Inferenz-, Fine-Tuning- und RAG-Workloads selbst betreiben statt über Hyperscaler-APIs. Aenix liefert vor-integriertes Multi-Tenant-GPU-Scheduling (Tenant-CRD), Service-APIs für Model-Serving und Fine-Tuning, fertige Blueprints, Vector-Datenbanken, Object Storage und Souveränitätskontrollen mit kundenkontrollierten Verschlüsselungsschlüsseln. So kommen KI-Teams schneller von der Idee zu laufenden Jobs, behalten die Datenhoheit und gewinnen Kostenkontrolle bei nachhaltigen Inferenz-Lasten.**
quick_facts:
  - label: "Was es ist"
    value: "Schlüsselfertige, souveräne KI-Infrastruktur auf Basis von Cozystack mit Multi-Tenant-GPU-Scheduling, Service-APIs und fertigen Blueprints für Inferenz, Fine-Tuning und RAG"
  - label: "Lizenz"
    value: "Apache 2.0 (keine CPU-/Core-basierte Lizenzierung)"
  - label: "Status"
    value: "Cozystack ist ein CNCF-Projekt (Sandbox seit 28.02.2025; Incubating erwartet Spätsommer 2026)"
  - label: "Für wen"
    value: "KI-native Startups at scale, regulierte KI-Deployments (Bank / öffentlicher Sektor / Gesundheitswesen), GPU-lastige Produkt-Unternehmen, Telcos und Großunternehmen mit interner KI-Plattform"
  - label: "GPU-Support"
    value: "H100, H200, L40S, A100, B100/B200 (Blackwell); CPU-only und alternative Beschleuniger (AMD MI Series, Intel Gaudi) unterstützt; MIG auf fähigen Karten"
  - label: "Architektur"
    value: "Kubernetes-nativ; KubeVirt für VM-gebundene Workloads; Per-Tenant-GPU-Pools mit Tenant-CRD; Vector DB (pgvector / Qdrant) und S3-kompatibler Object Storage inklusive"
  - label: "Souveränität"
    value: "Kundenkontrollierte Verschlüsselungsschlüssel für Modell-Gewichte, Trainingsdaten und Vector-Indexe; Air-Gap-Deployment unterstützt; Anbieter-Personal-Zugang protokolliert und zeitlich begrenzt"
  - label: "Engagement"
    value: "€500k - €3M+ Projekt; 3-6 Monate für typische Inferenz-Fleet, 6-12 Monate für Full-Stack; optionaler Managed-Retainer post-Deployment"
faq:
  - q: "Worauf basiert die Ænix Platform AI/ML Edition?"
    a: "Sie basiert auf Cozystack, einem Open-Source-CNCF-Projekt unter Apache 2.0, das Aenix erstellt hat und pflegt. Cozystack nutzt KubeVirt für VMs und Container auf einer Kubernetes-API, Cilium (eBPF) für Networking und LINSTOR/DRBD für Storage. Die AI/ML Edition ergänzt dies um Multi-Tenant-GPU-Scheduling, Service-APIs und KI-Blueprints."
  - q: "Für wen ist die AI/ML Edition gedacht?"
    a: "Für KI-native Startups at scale, regulierte KI-Deployments in Banken, öffentlichem Sektor und Gesundheitswesen, GPU-lastige Produkt-Unternehmen sowie Telcos und Großunternehmen, die eine interne KI-Plattform über mehrere Business Units teilen. Typisch sind Organisationen mit nachhaltigen Inferenz-Workloads, bei denen Hyperscaler-API-Pricing wirtschaftlich nicht mehr passt."
  - q: "Wie funktioniert Multi-Tenant-GPU-Scheduling?"
    a: "Über das Tenant-CRD erhält jeder Tenant eigene GPU-Pools mit GPU-Class-aware-Scheduling (zum Beispiel L40S für Inferenz, H100 für Fine-Tuning) und MIG-Support auf fähigen Karten. Quotas, RBAC und Observability werden pro Tenant durchgesetzt, sodass ein gemeinsamer GPU-Pool mit logischer Isolation geteilt werden kann."
  - q: "Welche Souveränitätskontrollen bietet die Edition?"
    a: "Kundenkontrollierte Verschlüsselungsschlüssel für Modell-Gewichte at rest, Trainingsdaten und Vector-Indexe; ein audit-isoliertes Environment; protokollierter und zeitlich begrenzter Zugang für Anbieter-Personal; Lieferantentransparenz zur zweiten Stufe sowie unterstütztes Air-Gap-Deployment für Verteidigung, isolierte Industrie und souveräne-Cloud-Kunden."
  - q: "Welche GPUs und Modelle werden unterstützt?"
    a: "Unterstützt werden H100, H200, L40S, A100 und B100/B200 (Blackwell) sowie CPU-only und alternative Beschleuniger wie AMD MI Series und Intel Gaudi. Vor-deployte Open-Weight-Modelle umfassen die Familien Llama, Mistral, Qwen, DeepSeek, Phi und Gemma; Sizing-Referenzen reichen von 7B bis 405B in Single-Card-, Multi-Card- und Multi-Node-Konfigurationen."
  - q: "Was kostet die AI/ML Edition und wie läuft ein Engagement ab?"
    a: "Das Engagement liegt typischerweise bei €500k - €3M+ pro Projekt mit optionalem Managed-Retainer nach dem Deployment. Es startet mit einem kostenlosen 30-Minuten-Discovery-Call, gefolgt von einem Architektur-Review, einem Pilot-Engagement (3-6 Monate) und dem vollständigen Build (6-12 Monate je nach Workload-Umfang)."
---

**KI-Plattform-Automatisierung out-of-the-Box. Standard-KI-Workloads, Service-APIs und fertige Blueprints, Datenbanken, Apps und Modelle — damit Ihr KI-Team von der Idee zu laufenden Jobs schneller kommt. Multi-Tenant-GPU-Scheduling, Vector-DBs, Souveränitätskontrollen inklusive. Gebaut für KI-native Organisationen und regulierte KI-Deployments at scale.**

<div class="cta-row">
  <a class="cta-primary" href="/contact/">Discovery-Call buchen</a>
  <a class="cta-secondary" href="/de/produkte/aenix-platform/">Alle Editions →</a>
</div>

---

## Quick facts

- **Für:** KI-lastige Organisationen, regulierte KI-Deployments, GPU-lastige Produkt-Unternehmen, KI-native Startups at scale
- **Foundation:** Open-Source Cozystack (CNCF-Projekt, Apache 2.0)
- **Engagement-Größe:** €500k - €3M+ Projekt; Managed-Retainer post-Deployment
- **Time-to-Production:** 3-6 Monate für typische Inferenz-Fleet; 6-12 Monate für vollständige Inferenz + Fine-Tuning + RAG-Architektur
- **GPU-Support:** H100, H200, L40S, A100, B100/B200 (Blackwell); CPU-only und alternative Beschleuniger (AMD MI Series, Intel Gaudi) unterstützt
- **Architektur:** Kubernetes-nativ, Multi-Tenant-GPU-Scheduling (Tenant CRD), KubeVirt für VM-gebundene Workloads, Vector DB + Object Storage inklusive

---

## Was in der AI/ML Edition enthalten ist

### KI-Plattform-Automatisierung out-of-the-Box

Vor-integrierter Stack für Inferenz-, Fine-Tuning- und RAG-Workloads. Service-APIs zum Hochfahren von Model-Serving-Endpoints, Fine-Tuning-Jobs, Vector-Indexen, Evaluation-Harnesses — ohne maßgeschneidertes MLOps-Engineering für jedes.

### Fertige Blueprints

Vorvalidierte Patterns für gängige KI-Workload-Typen:
- **Single-Tenant Inferenz-Cluster** — für einen Kunden, eine Workload-Klasse
- **Multi-Tenant Inferenz-Fleet** — Shared GPU-Pool mit logischer Tenant-Isolation
- **Inferenz + Fine-Tuning + RAG** — Full-Stack-Pattern mit heterogenen GPU-Pools
- **Air-Gapped souveränes Deployment** — für Verteidigung, isolierte Industrie, souveräne-Cloud-Kunden

(Siehe [Sovereign AI Decision Guide](/de/ressourcen/sovereign-ai-architektur-leitfaden/) für Blueprint-Details.)

### Multi-Tenant-GPU-Scheduling

Per-Tenant-GPU-Pools, GPU-Class-aware-Scheduling (z.B. L40S für Inferenz, H100 für Fine-Tuning), MIG-Support auf fähigen Karten. Quotas + RBAC + Observability per Tenant für KI-Workloads.

### Modelle, Datenbanken, Apps inklusive

Vor-deployte Open-Weight-Modelle (Llama, Mistral, Qwen, DeepSeek, Phi, Gemma Familien). Vector DB (pgvector via PostgreSQL-Operator, oder Qdrant). Managed Databases (PostgreSQL, MySQL, Redis, Kafka, ClickHouse, RabbitMQ). Object Storage (S3-kompatibel) für Trainingsdaten + Modell-Checkpoints.

### Service-APIs

Inferenz-API (vLLM-kompatibel by Default; Triton unterstützt). Fine-Tuning-Job-API. Embedding-Generations-API. RAG-Retrieval-API. Alle Multi-Tenant-aware.

### Souveränitätskontrollen

Kundenkontrollierte Verschlüsselungsschlüssel für Modell-Gewichte at rest, Trainingsdaten, Vector-Indexe. Lieferantentransparenz zur zweiten Stufe. Audit-isoliertes Environment. Anbieter-Personal-Zugang protokolliert + zeitlich begrenzt. Air-Gap-Deployment unterstützt.

### GPU-Sizing-Referenz

Praktische Sizing-Tabellen für gängige Workload-Profile (Llama 7B / 13B / 70B / 405B, Mistral, Qwen, DeepSeek, Phi, Gemma — Single-Card / Multi-Card / Multi-Node-Konfigurationen). Aenix-Engagement inkludiert Capacity-Planning für nachhaltige Workloads.

### Hosting-Panel + Admin-Interface

Gebrandetes Admin-Dashboard für den KI-Plattform-Betreiber. Service-Erstellungs-Wizards für Endnutzer (ML-Engineers, Data Scientists, App-Teams).

### Observability für KI-Workloads

Inferenz-Latenz / Throughput-Metriken. GPU-Auslastung per Tenant. Model-Serving SLOs. Cost-per-Token-Tracking. Anomaly-Detection für Inferenz-Qualitäts-Drift.

### Migrations-Tooling und -Expertise

Produktisierte Patterns für Migration von Hyperscaler-KI (AWS Bedrock, Azure OpenAI Service, GCP Vertex AI) zu souveräner KI-Infrastruktur. Besonders für Organisationen mit nachhaltigen Inferenz-Workloads, wo die Ökonomie nicht mehr zu Hyperscaler-API-Pricing passt.

---

## Wer kauft AI/ML Edition

| Buyer | Typisches Engagement |
|---|---|
| KI-natives Startup at scale | Souveräne Inferenz-Fleet, ersetzt Hyperscaler-API-Spend |
| Reguliertes KI-Deployment (Bank / öffentlicher Sektor / Gesundheitswesen) | Souveränitätspflichtige KI-Infrastruktur mit kundenkontrollierten Schlüsseln |
| GPU-lastiges Produkt-Unternehmen | Multi-Tenant-GPU-Plattform mit strikter Kosten-Disziplin |
| Telco / großes Unternehmen mit KI | Interne KI-Plattform geteilt über BUs |

---

## Pricing

Pricing auf Anfrage — €500k - €3M+ Projekt; Managed-Retainer post-Deployment.

[AI/ML Edition diskutieren →](/de/kontakt/?edition=ai-ml)

---

## Engagement-Struktur

- **Discovery-Call** (30 min, kostenlos)
- **Sovereign AI Architektur-Review** (1-2 Wochen, Festpreis) — unter Verwendung des [Sovereign AI Decision Guide](/de/ressourcen/sovereign-ai-architektur-leitfaden/) Frameworks + Aenix-Expertise
- **Pilot-Engagement** (3-6 Monate) — definierter Slice (eine Workload-Klasse, ein Tenant, eine Modell-Familie)
- **Vollständiger AI/ML Edition Build** (6-12 Monate) — produktive KI-Infrastruktur mit allen Ziel-Workload-Typen
- **Managed-Retainer** (optional, laufend) — Aenix betreibt die KI-Plattform unter SLA

[AI Platform Build Service →](/de/dienstleistungen/ai-platform-build/) | [Kostenloser Sovereign AI Decision Guide →](/de/ressourcen/sovereign-ai-architektur-leitfaden/)

---

## Kunden-Evidenz

AI/ML Edition Kunden sind NDA-geschützt. KI-native Organisationen und regulierte KI-Deployments sind in Produktion. Anonymisierte Phrasierung: "Souveräne KI-Infrastruktur für regulierte Organisation at scale".

---

## Wie starten

Buchen Sie einen 30-Minuten-Discovery-Call. Bringen Sie Ihr KI-Workload-Profil (steady Inferenz / Training / Fine-Tuning / RAG / Mix), regulatorischen Scope und Ziel-Deployment-Modell mit.

<div class="cta-row">
  <a class="cta-primary" href="/contact/">Discovery-Call buchen</a>
</div>

---

*Ænix Platform AI/ML Edition basiert auf [Cozystack](https://cozystack.io) — einem CNCF-Projekt, das wir erstellt haben und pflegen (derzeit CNCF Sandbox; CNCF Incubating erwartet Spätsommer 2026). Apache 2.0. Aenix ist das Open-Core-Unternehmen.*
