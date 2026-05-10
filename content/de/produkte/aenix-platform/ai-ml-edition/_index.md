---
title: "Ænix Platform AI/ML Edition"
description: "Ænix Platform AI/ML Edition — turnkey KI-Infrastruktur für KI-lastige Organisationen. Standard-KI-Workloads, Service-APIs, fertige Blueprints, Datenbanken, Modelle. Multi-Tenant-GPU-Scheduling. Souveränitätskontrollen. Von der Idee zu laufenden Jobs schneller."
type: "page"
language: "de"
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
