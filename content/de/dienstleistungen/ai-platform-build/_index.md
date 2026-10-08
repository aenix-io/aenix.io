---
title: "AI Platform Build — KI-Infrastruktur nach Maß für Startups und Unternehmen"
seo_title: "AI Platform Build: dedizierte GPU-Infrastruktur"
description: "Dedizierte GPU-Infrastruktur für dauerhafte Inferenz, Fine-Tuning und Training auf NVIDIA-GPUs für Rechenzentren, mit vLLM oder Triton, gebaut auf Cozystack."
related_pages:
  - /de/loesungen/sovereign-ai/
  - /de/produkte/ai-platform/
  - /de/produkte/cozystack/
  - /de/case-studies/bare-metal-gpu-inference/
language: "de"
hreflang_en: /services/ai-platform-build/
quick_facts_style: "rows"
faq_style: "rows"
direct_answer: |
  **Ein AI Platform Build ist ein End-to-End-Projekt, in dem Ænix dedizierte GPU-Infrastruktur für Organisationen mit dauerhaften KI-Workloads entwirft und betreibt — 24/7-Inferenz, Fine-Tuning und Training —, bei denen gemietete Hyperscaler-GPU-Kapazität auf Dauer zu teuer wird. Er richtet sich an KI-Startups, GPU-Betreiber, forschungsintensive Organisationen, Telcos und Unternehmen mit regulierten Daten, die nicht an externe Modellanbieter gehen dürfen. Ænix liefert die Plattform auf Cozystack, einem CNCF-Projekt unter Apache 2.0, das in das CNCF-Programm Kubernetes AI Conformance aufgenommen wurde und VM- und Container-GPU-Workloads über KubeVirt auf einer Kubernetes-API betreibt. NVIDIA-GPUs für Rechenzentren werden über den NVIDIA GPU Operator unterstützt, mit Passthrough an VMs und anteiliger Nutzung über HAMi; das Serving läuft über vLLM oder Triton.**
quick_facts:
  - label: "Was es ist"
    value: "Ein End-to-End-Projekt, um dedizierte GPU-Infrastruktur für dauerhafte KI-Inferenz, Fine-Tuning und Training zu entwerfen, aufzubauen und optional zu betreiben."
  - label: "Für wen"
    value: "KI-Startups, GPU- und Inferenz-Betreiber, Forschungsorganisationen, Telcos und Edge-Anbieter sowie Unternehmen mit regulierten Daten."
  - label: "Plattformbasis"
    value: "Cozystack — VM- und Container-GPU-Workloads über KubeVirt auf einer Kubernetes-API, Cilium-Networking (eBPF), LINSTOR/DRBD-Storage, Mandantenfähigkeit über das Tenant-CRD."
  - label: "GPUs"
    value: "NVIDIA-GPUs für Rechenzentren über den NVIDIA GPU Operator: Passthrough an VMs, anteilige Nutzung über HAMi; MIG und Time-Slicing stehen auf der Roadmap. Serving über vLLM und Triton."
  - label: "Zeitplan"
    value: "Discovery-Gespräch, Assessment über 14 oder 28 Tage mit Workload-Eignung und GPU-Sizing, danach 3–12 Monate Aufbau je nach Umfang; optional Managed Operations."
  - label: "Lizenz"
    value: "Apache 2.0 (keine Lizenzkosten pro CPU oder Core)"
  - label: "Status"
    value: "Cozystack ist ein CNCF-Projekt (Sandbox seit 28.02.2025; Antrag auf Incubation in der Due-Diligence-Prüfung)"
faq:
  - q: "Wann lohnt sich eine dedizierte KI-Plattform gegenüber gemieteter Hyperscaler-GPU?"
    a: "Für dauerhafte Workloads wie 24/7-Inferenz, Fine-Tuning und Training ist dedizierte Infrastruktur in der Regel nach rund einem Jahr Betrieb im Vorteil. Kurzlebige oder stark schwankende Experimente bleiben auf gemieteter Kapazität oft günstiger. Ænix rechnet im Assessment für den konkreten Workload aus, ab wann sich die eigene Infrastruktur rechnet."
  - q: "Welche GPUs und Inferenz-Stacks unterstützt Ænix?"
    a: "NVIDIA-GPUs für Rechenzentren über den NVIDIA GPU Operator, ganz an VMs durchgereicht oder mit HAMi zwischen Containern geteilt; zu unseren veröffentlichten Deployments gehört ein Inferenz-Server mit 8×H100. Eine Liste validierter Modelle veröffentlichen wir nicht, und die Partner-Validierung des Stacks bei NVIDIA steht noch aus. Das Inferenz-Serving wird passend zur Modellarchitektur gewählt — vLLM, Triton oder eigene Serving-Stacks —, und die Plattform unterstützt mandantenfähiges Model Serving für KI-Produkte, die Sie Ihren Kunden anbieten."
  - q: "Kann eine dedizierte KI-Plattform regulierte Daten im eigenen Haus halten?"
    a: "Ja. Die Plattform ist für Unternehmen mit regulierten Datenklassen gebaut, die nicht an externe Modellanbieter gehen dürfen. Souveränitätskontrollen werden auf die betroffenen Datenklassen angewendet, und das Tenant-CRD von Cozystack sorgt für die Isolation der Mandanten. Projekte mit Schwerpunkt Souveränität behandeln wir unter Sovereign AI."
  - q: "Wie läuft der Aufbau ab und wie lange dauert er?"
    a: "Nach einem kostenlosen Discovery-Gespräch klärt ein Platform Readiness Assessment zum Festpreis über 14 oder 28 Tage die Workload-Eignung und das GPU-Sizing. Der Aufbau dauert danach je nach Umfang 3–12 Monate; ein Kunde war mit einem 8×H100-Server nach rund zwei Monaten produktiv. Anschließend kann Ænix die Plattform als Managed Service betreiben."
  - q: "Auf welcher Software läuft die Plattform?"
    a: "Die Plattform basiert auf Cozystack, einem CNCF-Sandbox-Projekt unter Apache 2.0. Es betreibt VM- und Container-GPU-Workloads über KubeVirt auf einer einzigen Kubernetes-API, mit Cilium-Networking (eBPF) und LINSTOR/DRBD-Storage. Lizenzkosten pro CPU oder Core gibt es nicht."
  - q: "Was unterscheidet diesen Service von der Ænix AI Platform?"
    a: "Die AI Platform ist die dritte Ænix-Plattform: mandantenfähiges GPU-Scheduling und Blueprints für Inferenz, Fine-Tuning und RAG auf Basis von Cozystack. Der AI Platform Build ist das Dienstleistungsprojekt, das eine individuelle Plattform von Anfang bis Ende entwirft und liefert, meist auf Grundlage dieses Produkts."
---

**KI-Startups und KI-intensive Unternehmen stehen 2026 vor derselben Architekturentscheidung: Inferenz zu Hyperscaler-Preisen mieten oder dedizierte Infrastruktur aufbauen, die sich bei entsprechendem Volumen auszahlt. Für dauerhafte Workloads (24/7-Inferenz, Fine-Tuning, Training) ist dedizierte Infrastruktur in der Regel nach einem Jahr Betrieb im Vorteil. Ænix baut diese Plattformen von Anfang bis Ende.**

> **Passt zu:** **[Ænix AI Platform](/de/produkte/ai-platform/)** — KI-Infrastruktur mit mandantenfähigem GPU-Scheduling auf NVIDIA-GPUs für Rechenzentren, Blueprints für Inferenz, Fine-Tuning und RAG, Souveränitätskontrollen für regulierte KI-Workloads. Kostenloser [Sovereign-AI-Architektur-Leitfaden →](/de/ressourcen/sovereign-ai-architektur-leitfaden/).

<div class="cta-row">
  <a class="cta-primary" href="/de/kontakt/">Gespräch vereinbaren</a>
  <a class="cta-secondary" href="/de/blog/2026/05/ai-platform-gpu-wirtschaftlichkeit-inferenz/">Playbook lesen →</a>
</div>

---

## Wer dedizierte KI-Plattformen baut

- **KI-Startups** mit dauerhaften Inferenz-Workloads, für die Hyperscaler-GPUs zu teuer sind
- **KI- und GPU-Betreiber**, die Inferenz als Produkt für ihre Kunden anbieten
- **Unternehmen mit regulierten Daten**, die nicht an Modellanbieter gehen dürfen
- **Forschungsintensive Organisationen** mit dauerhaften Trainings-Workloads
- **Telcos und Edge-Anbieter** mit KI-Angeboten am Edge

---

<div class="band-fullbleed band-fullbleed--tint">
<div class="band-fullbleed__inner">

## Was wir liefern

<div class="arch-section__fig">
<div class="diagram">
<div class="diagram__node"><b>AI Platform Build</b><div class="diagram__chips"><span>Assessment</span><span>Aufbau</span><span>Managed Operations</span></div></div>
<div class="diagram__conn">liefert</div>
<div class="diagram__node diagram__node--brand"><b>Cozystack-GPU-Plattform</b><div class="diagram__chips"><span>KubeVirt</span><span>VM- und Container-GPU-Workloads</span><span>Eine Kubernetes-API</span></div></div>
<div class="diagram__conn">betreibt</div>
<div class="diagram__node"><b>KI-Workloads</b><div class="diagram__chips"><span>Inferenz</span><span>Fine-Tuning</span><span>Training</span></div></div>
</div>
</div>

- **KI-Plattform auf Basis von Cozystack** — KubeVirt und Kubernetes für VM- und Container-GPU-Workloads
- **NVIDIA-GPUs** — über den NVIDIA GPU Operator: Passthrough an VMs, anteilige Nutzung für Container über HAMi
- **Inferenz-Serving** — vLLM, Triton oder eigene Stacks, passend zur Modellarchitektur
- **Mandantenfähiges Model Serving** — für KI-Produkte, die Sie Ihren Kunden anbieten
- **Souveränitätskontrollen** für regulierte Datenklassen
- **Betriebsmodell** für GPU-Cluster im 24×7-Betrieb

</div>
</div>

---

## Ablauf des Projekts

- **Discovery-Gespräch** (30 Minuten, kostenlos)
- **[Platform Readiness Assessment](/de/dienstleistungen/platform-readiness-assessment/)** (14 oder 28 Tage, Festpreis) — Workload-Eignung, GPU-Sizing, Architektur
- **Aufbau** (3–12 Monate, je nach Umfang)
- **Managed AI Platform** (optional)

Dokumentiert: [GPU-Inferenz mit 8×H100 auf eigenem Bare Metal](/de/case-studies/bare-metal-gpu-inference/) und [GPU-Kosten eines akademischen SaaS-Anbieters auf rund ein Fünftel gesenkt](/de/case-studies/multicloud-academic-gpu/).

Für Workloads mit Schwerpunkt Souveränität siehe **[Sovereign AI](/de/loesungen/sovereign-ai/)**.

---

<div class="cta-row">
  <a class="cta-primary" href="/de/kontakt/">Gespräch vereinbaren</a>
</div>

- **[Playbook für KI-Plattform-Startups](/de/blog/2026/05/ai-platform-gpu-wirtschaftlichkeit-inferenz/)**
- **[Sovereign AI](/de/loesungen/sovereign-ai/)** — KI-Infrastruktur mit Schwerpunkt Souveränität
- **[Cozystack](/de/produkte/cozystack/)** — Open-Source-Basis der Plattform

---

*Ænix hat [Cozystack](https://cozystack.io), ein CNCF-Projekt, initiiert und pflegt es gemeinsam mit Maintainern anderer Unternehmen.*
