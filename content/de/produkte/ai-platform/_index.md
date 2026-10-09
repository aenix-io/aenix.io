---
title: "Ænix AI Platform — souveräne KI- und GPU-Infrastruktur"
description: "Ænix AI Platform: selbst gehostete KI-Infrastruktur auf eigenen NVIDIA-GPUs — mandantenfähiges GPU-Scheduling, HAMi-Sharing, Model Serving, Vektordatenbanken."
type: "page"
language: "de"
hreflang_en: /products/ai-platform/
primary_keyword: "souveräne ki infrastruktur"
secondary_keywords: ["private gpu cloud", "llm selbst hosten", "multi-tenant gpu scheduling", "on-premise ki plattform", "kubernetes ai conformance"]
images: ["img/og/ai-platform.jpg"]
related_pages: ["/de/produkte/private-cloud-platform/", "/de/produkte/public-cloud-platform/", "/de/loesungen/sovereign-ai/", "/de/loesungen/private-llm/", "/de/case-studies/bare-metal-gpu-inference/"]
quick_facts_style: "rows"
faq_style: "rows"
direct_answer_image: "/images/cozystack-screenshot.png"
direct_answer_image_alt: "Service-Katalog im Cozystack Dashboard"
direct_answer: |
  **Die Ænix AI Platform ist selbst gehostete KI-Infrastruktur für Organisationen, die Inferenz, Fine-Tuning und RAG auf eigenen GPUs betreiben statt über KI-APIs der Hyperscaler. Sie ist die dritte Ænix-Plattform neben Public Cloud und Private Cloud und läuft auf derselben Engine Cozystack (Apache 2.0, ein CNCF-Projekt, seit September 2026 im Programm CNCF Kubernetes AI Conformance). NVIDIA-GPUs für Rechenzentren werden über den NVIDIA GPU Operator unterstützt: Passthrough ganzer GPUs oder NVIDIA vGPU (erfordert Ihre NVIDIA-vGPU-Lizenz) für VMs, in Tenant-Kubernetes-Clustern MIG-Partitionen oder Time-Slicing über HAMi. Dazu kommen GPU-Quotas pro Mandant, Model Serving (vLLM-kompatibel), Vektordatenbanken, Object Storage und Air-Gap-Deployment. Ænix liefert die Plattform als Projekt per RFP — 14 oder 28 Tage Assessment, danach 3–12 Monate Aufbau je nach Umfang — mit optionalem Managed-Retainer.**
quick_facts:
  - label: "Was es ist"
    value: "Selbst gehostete, mandantenfähige KI-Infrastruktur für Inferenz, Fine-Tuning und RAG auf GPUs unter Ihrer Kontrolle. Die dritte Ænix-Plattform, auf derselben Engine wie Public Cloud und Private Cloud."
  - label: "GPUs"
    value: "NVIDIA-GPUs für Rechenzentren über den NVIDIA GPU Operator: Passthrough oder NVIDIA vGPU (erfordert Ihre NVIDIA-vGPU-Lizenz) für VMs; MIG-Partitionen und Time-Slicing über HAMi in Tenant-Kubernetes-Clustern. Andere Beschleuniger: nur PCI-Passthrough an VMs."
  - label: "CNCF-Programme und NVIDIA"
    value: "Cozystack ist seit September 2026 im Programm CNCF Kubernetes AI Conformance; CNCF Certified Kubernetes Distribution. Die Partner-Validierung des GPU-Operator-Stacks bei NVIDIA wurde im Oktober 2026 eingereicht und steht noch aus."
  - label: "Lizenz"
    value: "Engine unter der Apache-2.0-Lizenz (keine Lizenzkosten pro CPU, Core oder GPU)"
  - label: "GPU-Nutzung und Abrechnung"
    value: "Die GPU-Nutzung wird pro Tenant erfasst; abgerechnet wird in Ihrem Billing-System (WHMCS oder ein eigenes)."
  - label: "Vorgehen"
    value: "Angebot per RFP: Discovery-Gespräch, 14 oder 28 Tage Assessment, danach 3–12 Monate Aufbau je nach Umfang; optionaler Managed-Retainer."
  - label: "Nachweise"
    value: "Vier anonymisierte GPU-Fallstudien, darunter Inferenz auf 8×H100 auf eigenem Bare Metal in rund zwei Monaten."
faq:
  - q: "Was unterscheidet die AI Platform vom Eigenbetrieb des Open-Source-Cozystack mit eigenem KI-Stack?"
    a: "Cozystack liefert das mandantenfähige Kubernetes- und GPU-Fundament: Der NVIDIA GPU Operator, GPU-Passthrough an VMs und das Sharing mit HAMi sind Open Source. Die AI Platform ergänzt die Umsetzung darum herum — Architektur und GPU-Sizing für Ihre Workloads, Muster für Inferenz, Fine-Tuning und RAG, dafür eingerichtete Vektordatenbanken und Object Storage, Quotas pro Mandant, Observability und eine Enterprise-Support-Stufe —, sodass Ihr Team den Plattformaufbau nicht selbst stemmen muss."
  - q: "Welche GPUs werden unterstützt?"
    a: "NVIDIA-GPUs für Rechenzentren, über den NVIDIA GPU Operator: eine ganze GPU per Passthrough an eine virtuelle Maschine, NVIDIA vGPU für VMs (erfordert Ihre NVIDIA-vGPU-Lizenz) oder eine GPU, die sich Container über HAMi teilen. Zu unseren veröffentlichten Deployments gehört ein Inferenz-Server mit 8×H100. Eine Liste validierter Modelle veröffentlichen wir nicht; die Partner-Validierung des GPU-Operator-Stacks bei NVIDIA wurde im Oktober 2026 eingereicht und steht noch aus. Andere Beschleuniger lassen sich als PCI-Geräte an VMs durchreichen, ohne Automatisierung über einen Operator."
  - q: "Unterstützen Sie MIG oder Time-Slicing?"
    a: "Ja, beides, in Tenant-Kubernetes-Clustern. Der NVIDIA GPU Operator stellt MIG-Partitionen MIG-fähiger Karten wie A100 und H100 als einplanbare Ressourcen bereit, und HAMi teilt eine Karte per Time-Slicing, mit Grenzen für Speicher und Rechenleistung pro Workload und mit Überbuchung. Virtuelle Maschinen erhalten ganze GPUs per Passthrough oder NVIDIA vGPU mit Ihrer NVIDIA-vGPU-Lizenz. Wählen Sie nach der Isolation, die ein Workload braucht: MIG-Partitionen sind in Hardware getrennt, HAMi-Anteile nicht."
  - q: "Was ist CNCF Kubernetes AI Conformance?"
    a: "Ein CNCF-Programm, das prüft, ob eine Kubernetes-Plattform die Fähigkeiten unterstützt, auf die KI-Workloads angewiesen sind. Cozystack wurde im September 2026 aufgenommen und steht damit in derselben Liste wie andere Kubernetes-Plattformen mit AI Conformance, die KI-Teams vergleichen."
  - q: "Wie wird die GPU-Nutzung abgerechnet?"
    a: "Die GPU-Nutzung wird pro Tenant erfasst. Abgerechnet wird in dem Billing-System, das Sie bereits betreiben — WHMCS über die Ænix-Integration oder ein eigenes. In Kombination mit der Public Cloud Platform verkauft ein Anbieter GPU-Kapazität über dieselbe Abrechnung wie seine VMs und Datenbanken."
  - q: "Können wir das air-gapped betreiben?"
    a: "Ja. Die Air-Gap-Installation ist ein dokumentierter Workflow von Cozystack; Open-Weight-Modelle und eine eigenständige Registry werden in den abgeschotteten Bereich gespiegelt. Der Betriebsaufwand ist höher, und Support von Ænix für Air-Gap-Installationen ist ab der Stufe Plus enthalten."
  - q: "Ist souveräne Inferenz günstiger als KI-APIs der Hyperscaler?"
    a: "Bei dauerhafter Inferenz — gleichmäßiger Produktionslast — kosten eigene oder gemietete GPUs pro Token typischerweise weniger als eine API-Abrechnung pro Token. Ein Kunde hat seine GPU-Kosten nach dem Wechsel weg von einem öffentlichen Hyperscaler etwa auf ein Fünftel gesenkt. Wo die Gewinnschwelle liegt, hängt von Ihrem Lastprofil ab; das modelliert das Assessment."
aliases:
  - /de/produkte/aenix-platform/ai-ml-edition/
---

> **Eine Engine, drei Plattformen.** Die AI Platform ist die dritte Ænix-Plattform. Sie läuft auf demselben Fundament wie die [Public Cloud Platform](/de/produkte/public-cloud-platform/) und die [Private Cloud Platform](/de/produkte/private-cloud-platform/) und lässt sich mit beiden kombinieren: Ein Anbieter verkauft GPU-Kapazität über die Abrechnung, die er bereits hat, und ein reguliertes Unternehmen betreibt seine eigene Inferenz innerhalb der Tenant-Grenze, die sein Prüfer bereits begutachtet hat.

**Infrastruktur für Inferenz, Fine-Tuning und RAG auf eigenen GPUs: mandantenfähiges GPU-Scheduling, Model Serving, Vektordatenbanken, Object Storage und Air-Gap-Deployment, aufgebaut auf einer Plattform mit CNCF Kubernetes AI Conformance. Für KI-intensive Organisationen und regulierte KI-Deployments.**

<div class="cta-row">
  <a class="cta-primary" href="/de/kontakt/">Gespräch vereinbaren</a>
  <a class="cta-secondary" href="/de/produkte/">Plattformen vergleichen →</a>
</div>

---

## Was enthalten ist

### GPU-Zuteilung

NVIDIA-GPUs für Rechenzentren über den NVIDIA GPU Operator:

| Modus | Funktionsweise | Status |
|---|---|---|
| Ganze GPU für eine virtuelle Maschine | PCI-Passthrough in eine KubeVirt-VM | Verfügbar |
| Ganze GPU für einen Container | Device Plugin des NVIDIA GPU Operator | Verfügbar |
| NVIDIA vGPU für eine virtuelle Maschine | NVIDIA vGPU in einer KubeVirt-VM; erfordert Ihre NVIDIA-vGPU-Lizenz | Verfügbar (seit Cozystack 1.5) |
| MIG-Partitionen (Tenant-Kubernetes, GPU Operator) | Hardware-Partitionen einer MIG-fähigen Karte als einplanbare Ressourcen | Verfügbar (Add-on) |
| Time-Slicing (Tenant-Kubernetes, HAMi) | Container teilen sich eine Karte, mit Grenzen für Speicher und Rechenleistung pro Workload und Überbuchung | Verfügbar (Add-on) |

GPU-Quotas, RBAC und Observability pro Mandant. Die GPU-Nutzung wird pro Tenant erfasst; abgerechnet wird in Ihrem Billing-System.

### Blueprints

Muster für gängige KI-Workloads, die im Projekt an Ihre Umgebung angepasst werden:
- **Inferenz-Cluster für einen Mandanten** — ein Team, eine Workload-Klasse
- **Mandantenfähige Inferenz-Flotte** — gemeinsamer GPU-Pool mit Isolation der Mandanten
- **Inferenz, Fine-Tuning und RAG** — Full-Stack-Muster mit heterogenen GPU-Pools
- **Air-Gap-Deployment** — für isolierte Industrie, Kunden souveräner Clouds und regulierte Kunden

(Details zu den Blueprints finden Sie im [Sovereign-AI-Architektur-Leitfaden](/de/ressourcen/sovereign-ai-architektur-leitfaden/).)

### Modelle, Datenbanken und Storage

Open-Weight-Modelle (Familien Llama, Mistral, Qwen, DeepSeek, Phi, Gemma), bereitgestellt für Ihre Workloads. Vektordatenbanken (pgvector über den PostgreSQL-Operator oder Qdrant). Managed Databases (PostgreSQL, MariaDB, Valkey, ClickHouse) und Message Broker (Kafka, RabbitMQ). S3-kompatibler Object Storage für Trainingsdaten und Modell-Checkpoints.

### Serving und Fine-Tuning

Inferenz standardmäßig mit vLLM-kompatiblem Serving (Triton wird unterstützt), Fine-Tuning-Jobs, Erzeugung von Embeddings und RAG-Retrieval — eingerichtet als mandantenfähige Plattformdienste statt als Einzelanfertigung pro Workload.

### Souveränitätskontrollen

Hardware und Daten in Ihrer Jurisdiktion. Air-Gap-Deployment wird unterstützt. Verschlüsselung und Schlüsselhandhabung legen wir beim Aufbau gemeinsam mit Ihnen fest. Ænix-Engineers arbeiten nur mit Ihrer Freigabe in Ihrer Umgebung.

### GPU-Sizing

Sizing für gängige Workload-Profile (Modelle mit 7 bis 405 Milliarden Parametern, Konfigurationen mit einer Karte, mehreren Karten und mehreren Nodes) und Kapazitätsplanung für dauerhafte Lasten als Teil des Projekts.

### Observability für KI-Workloads

Inferenz-Latenz und -Durchsatz, GPU-Auslastung pro Mandant und SLOs für das Model Serving in VictoriaMetrics und VictoriaLogs, exportierbar in eine bestehende Umgebung mit Prometheus, Datadog oder Splunk.

### Abschied von KI-APIs der Hyperscaler

Migrationsplanung von AWS Bedrock, Azure OpenAI Service oder GCP Vertex AI zu selbst gehosteter Inferenz, für Organisationen, deren dauerhafte Inferenzlast nicht mehr zur Abrechnung pro Token passt.

---

## Dokumentierte Deployments

| Fallstudie | Was passiert ist |
|---|---|
| [8×H100-Inferenz auf eigenem Bare Metal](/de/case-studies/bare-metal-gpu-inference/) | Eine mobile Foto- und Video-App hat ihre GPU-Inferenz aus einer gemieteten GPU-Cloud auf einen eigenen Server mit 8×H100 verlagert: rund zwei Monate bis zur Produktion, Passthrough über KubeVirt |
| [Von der Public Cloud auf Bare Metal](/de/case-studies/multicloud-academic-gpu/) | Ein europäischer SaaS-Anbieter für akademisches Rechnen ist auf eigenes Bare Metal umgezogen und hat seine GPU-Kosten etwa auf ein Fünftel gesenkt |
| [Cozystack als universeller Installer](/de/case-studies/ai-universal-installer/) | Ein Telekommunikations-Integrator hat eine KI-Plattform für Unternehmen mit RAG auf Qdrant und Inferenz mit NVIDIA Dynamo gebaut und sie anschließend in die Umgebung seines Endkunden ausgeliefert |
| [Eine interne Daten- und KI-Plattform](/de/case-studies/internal-data-and-ai-platform/) | GPU-Pools mit Quotas pro Mandant und Nutzungsmetriken, die in die Abrechnung einfließen; der Rollout läuft |

---

## Wer die AI Platform kauft

| Käufer | Typisches Projekt |
|---|---|
| KI-native Unternehmen mit großem Volumen | Selbst gehostete Inferenz-Flotte statt Ausgaben für Hyperscaler-APIs |
| Regulierte KI-Deployments (Bank, öffentlicher Sektor, Gesundheitswesen) | KI-Infrastruktur innerhalb des regulierten Perimeters |
| GPU-intensive Produktunternehmen | Mandantenfähige GPU-Plattform mit strenger Kostendisziplin |
| Telcos und Großunternehmen mit KI | Interne KI-Plattform, die sich mehrere Geschäftsbereiche teilen |
| Rechenzentren oder GPU-Clouds, die Kapazität verkaufen | GPU-Mandanten kombiniert mit Billing und Kundenportal der Public Cloud Platform |

---

## Warum die AI Platform statt der Alternativen

| Im Vergleich zu | Warum die AI Platform |
|---|---|
| **KI-APIs der Hyperscaler** (Bedrock, Azure OpenAI, Vertex) | Sie kontrollieren Modellgewichte, Daten und Betrieb. Bei dauerhafter Auslastung schlägt die Wirtschaftlichkeit typischerweise die Abrechnung pro Token. Feinabgestimmte Modelle gehören Ihnen. |
| **Eigenbau auf Kubernetes und GPU-Treibern** | GPU-Scheduling, Mandantenfähigkeit, Storage, Observability und Blueprints kommen zusammen, statt als langes Platform-Engineering-Projekt. |
| **Proprietäre MLOps-Plattformen** | Open-Source-Fundament (Cozystack, Apache 2.0) — keine Lizenzkosten pro Engineer oder pro Modell, und das Fundament bleibt Ihres, wenn der Vertrag endet. |
| **Run:ai (NVIDIA)** | Run:ai ist eine Scheduling- und Quota-Schicht für GPUs, die eine bestehende Kubernetes-Plattform darunter voraussetzt — Cluster-Lebenszyklus, Storage, Netzwerk, Mandantenfähigkeit und der VM-Bestand bleiben Ihre Aufgabe. Die AI Platform bringt die Plattform selbst mit: anteiliges GPU-Sharing, KubeVirt für Workloads, die nie containerisiert wurden, Storage mit LINSTOR/DRBD, Isolation der Mandanten. Außerdem steht sie unter Apache 2.0, ohne Subscription pro GPU. Wenn Sie bereits eine ausgereifte Kubernetes-Plattform betreiben und nur Scheduling brauchen, ist Run:ai ein engerer und vernünftiger Kauf. |
| **Kubeflow** | Kubeflow ist eine ML-Toolchain — Pipelines, Notebooks, Training-Operatoren, Serving —, keine Infrastrukturplattform. Die AI Platform liefert, was Kubeflow voraussetzt: mandantenfähiges GPU-Scheduling, Managed Databases und Vektorspeicher, Object Storage, Observability, Isolation pro Team. Teams betreiben Kubeflow, Dynamo oder reines vLLM als Mandanten-Workloads darauf. |

---

## Preise

Projekt plus optionaler Managed-Retainer, per RFP nach einem Discovery-Gespräch angeboten. GPU-Nodes werden nicht nach der veröffentlichten Support-Preisliste bepreist; diese gilt für die Public Cloud Platform und für selbst betriebenes Cozystack.

[AI Platform besprechen →](/de/kontakt/?platform=ai)

---

## Ablauf eines Projekts

- **Discovery-Gespräch** (30 Minuten, kostenlos)
- **Platform Readiness Assessment** (14 oder 28 Tage, Festpreis) — Workload-Profil, GPU-Sizing, Architektur und Roadmap, auf Basis des Rahmens aus dem [Sovereign-AI-Architektur-Leitfaden](/de/ressourcen/sovereign-ai-architektur-leitfaden/)
- **Aufbau** (3–12 Monate, je nach Umfang) — oft beginnend mit einem klar abgegrenzten Ausschnitt: eine Workload-Klasse, ein Mandant, eine Modellfamilie
- **Managed-Retainer** (optional, laufend) — Ænix betreibt die KI-Plattform unter SLA

<div class="cta-row">
  <a class="cta-secondary" href="/de/dienstleistungen/ai-platform-build/">Service: AI Platform Build →</a>
  <a class="cta-secondary" href="/de/ressourcen/sovereign-ai-architektur-leitfaden/">Leitfaden Sovereign AI (gratis) →</a>
</div>

---

## Mit den anderen Plattformen kombinieren

Die drei Ænix-Plattformen sind eine Engine mit unterschiedlich zugeschalteten Oberflächen. Die AI Platform ist keine separate Installation — sie besteht aus GPU-Mandanten, Model Serving und den Datendiensten darum herum, auf demselben Fundament wie alles andere, was Sie betreiben.

- **[Private Cloud Platform](/de/produkte/private-cloud-platform/)** — die übliche Kombination für regulierte Käufer. Die an DORA und NIS2 ausgerichtete Architektur, die Verschlüsselung und das Audit-Logging, die für die Private Cloud ausgelegt wurden, gelten auch für die KI-Umgebung, und GPU-Workloads liegen innerhalb der Tenant-Grenze, die der Prüfer bereits begutachtet hat.
- **[Public Cloud Platform](/de/produkte/public-cloud-platform/)** — für Anbieter, die GPU-Kapazität verkaufen. Billing, die WHMCS-Integration und das Kundenportal kommen von dieser Seite; GPU-Scheduling und HAMi-Sharing kommen von hier, wobei die GPU-Nutzung pro Tenant erfasst wird. Anbieter beginnen meist mit VMs und Datenbanken und schalten GPUs zu, sobald Nachfrage entsteht. Wie ein Rechenzentrum oder eine GPU-Cloud diese Kapazität verkauft, beschreibt die Seite [GPU-as-a-Service-Plattform](/de/loesungen/gpu-as-a-service/).

## So starten Sie

Vereinbaren Sie ein Discovery-Gespräch. Bringen Sie Ihr KI-Workload-Profil mit (dauerhafte Inferenz, Training, Fine-Tuning, RAG oder eine Mischung), dazu Ihren regulatorischen Rahmen und das angestrebte Deployment-Modell.

<div class="cta-row">
  <a class="cta-primary" href="/de/kontakt/">Gespräch vereinbaren</a>
</div>

---

*Die Ænix AI Platform basiert auf [Cozystack](https://cozystack.io) — einem CNCF-Projekt, das Ænix entwickelt hat und gemeinsam mit Maintainern anderer Unternehmen pflegt (derzeit CNCF Sandbox; der Antrag auf CNCF Incubation befindet sich in der Due-Diligence-Prüfung). Apache 2.0.*
