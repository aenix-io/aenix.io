---
title: "Private LLM: Self-Hosted und On-Prem GenAI auf Ihren GPUs"
description: "Ein Private LLM auf eigenen GPUs: self-hosted Open-Weight-Modelle, RAG auf Qdrant, Fine-Tuning — mit Weights, Keys und Audit-Trail unter Ihrer Kontrolle."
date: 2026-07-01
lastmod: 2026-07-01
page_type: "solution-landing"
language: "de"
quick_facts_style: "rows"
faq_style: "rows"
primary_keyword: "private llm"
secondary_keywords: ["self-hosted llm", "on-premise llm", "on-prem genai"]
hreflang_de: "/de/loesungen/private-llm/"
hreflang_en: "/solutions/private-llm/"
related_pages:
  - /de/loesungen/sovereign-ai/
  - /de/loesungen/gpu-cloud-bursting/
  - /de/produkte/ai-platform/
  - /de/dienstleistungen/ai-platform-build/
  - /de/case-studies/ai-universal-installer/
service:
  type: "Private LLM Platform"
  areaServed: ["EU", "DACH"]
  audience: "AI/ML, Enterprise, Public Sector"
direct_answer: |
  **Ein Private LLM ist ein großes Sprachmodell, das Sie auf Ihren eigenen GPUs und in Ihrem eigenen Netzwerk betreiben, sodass Prompts, Embeddings, Modell-Weights und der Audit-Trail nie Ihre Kontrolle verlassen. Es nutzt typischerweise Open-Weight-Modelle — Llama, Mistral, Qwen und ähnliche — für Inferenz, angereichert mit Retrieval (RAG) über Ihre eigenen Dokumente und bei Bedarf fine-getunt auf Ihren Daten. Aenix baut diese Plattformen auf Cozystack (ein CNCF-Projekt, Apache 2.0): GPU-Scheduling, eine Vektordatenbank für RAG und effiziente Inferenz, alles auf Infrastruktur, die Sie besitzen. Es passt für Banken, das Gesundheitswesen, den öffentlichen Sektor und jedes Unternehmen, das sensiblen Text nicht an eine Drittanbieter-KI-API senden kann. Anders als ein gehosteter Assistent hält ein Private LLM die Weights, die Keys und die Logs auf Ihrer Seite der Grenze.**
quick_facts:
  - label: "Was es ist"
    value: "Ein großes Sprachmodell, betrieben auf eigenen GPUs und im eigenen Netzwerk, mit Weights, Keys und Logs unter Ihrer Kontrolle."
  - label: "Modelle"
    value: "Open-Weight-Modelle — Llama, Mistral, Qwen und ähnliche — für Inferenz; keine Abhängigkeit von einer Drittanbieter-KI-API."
  - label: "RAG"
    value: "Retrieval-augmented Generation über Ihre eigenen Dokumente mit einer Qdrant-Vektordatenbank neben den GPU-Workloads."
  - label: "Inferenz-Effizienz"
    value: "NVIDIA Dynamo für disaggregiertes Serving und KV-Cache-bewusstes Routing — höhere GPU-Auslastung, keine zusätzlichen Anbieter-Lizenzen."
  - label: "Datengrenze"
    value: "Prompts, Embeddings und Fine-Tuning-Daten bleiben innerhalb Ihrer Jurisdiktion und Infrastruktur."
  - label: "Plattform-Lizenz"
    value: "Cozystack ist Open Source unter Apache 2.0 — keine Lizenz pro GPU oder pro CPU."
  - label: "Abgrenzung zu Sovereign AI"
    value: "Private LLM ist der Workload; Sovereign AI ist die umfassendere Jurisdiktions- und Kontrollstrategie, in die es sich einfügt."
quick_facts_source: "[CNCF Landscape](https://landscape.cncf.io), [AI-Universal-Installer-Case-Study](/de/case-studies/ai-universal-installer/)"
faq:
  - q: "Was ist ein Private LLM?"
    a: "Ein Private LLM ist ein großes Sprachmodell, das Sie auf Ihren eigenen GPUs und in Ihrem Netzwerk hosten, statt eine Drittanbieter-KI-API aufzurufen. Prompts, abgerufene Dokumente, Embeddings, Modell-Weights und der Audit-Trail bleiben alle innerhalb Ihrer Infrastruktur und Jurisdiktion, sodass sensibler Text nie Ihre Kontrolle verlässt. Die meisten Private-LLM-Deployments nutzen Open-Weight-Modelle wie Llama, Mistral oder Qwen."
  - q: "Warum ein Self-Hosted LLM statt einer Cloud-KI-API?"
    a: "Regulierte Organisationen können Prompts und Dokumente mit personenbezogenen, finanziellen oder klassifizierten Daten oft nicht an eine externe API senden, deren Datenverarbeitung sie nicht auditieren können. Ein Self-Hosted LLM hält die Daten in der Grenze, entfernt Pro-Token-Anbieterpreise bei hochvolumigen Workloads und lässt Sie die Modellversion fixieren, sodass sich das Verhalten nicht unter Ihnen verändert."
  - q: "Wie funktioniert RAG auf einer Private-LLM-Plattform?"
    a: "Retrieval-augmented Generation indexiert Ihre eigenen Dokumente in eine Vektordatenbank — Qdrant auf dieser Plattform — und ruft zur Anfragezeit die relevantesten Passagen ab, um die Antwort des Modells zu erden. Es läuft neben den GPU-Inferenz-Workloads innerhalb derselben Grenze, sodass sowohl die Quelldokumente als auch die generierten Antworten privat bleiben."
  - q: "Kann ich Modelle auf meinen eigenen Daten fine-tunen?"
    a: "Ja. Weil GPUs und Daten in derselben Plattform liegen, können Sie Open-Weight-Modelle auf proprietären Daten fine-tunen oder anpassen, ohne dass diese Daten Ihre Infrastruktur verlassen. Die AI Platform liefert GPU-Scheduling, fraktionales Sharing und Blueprints für Inferenz- und Fine-Tuning-Workloads."
  - q: "Wie unterscheidet sich ein Private LLM von Sovereign AI?"
    a: "Sie sind verwandt, aber nicht derselbe Head-Term. Private LLM benennt den konkreten Workload — ein Self-Hosted-Modell auf Ihren GPUs. Sovereign AI ist die umfassendere Strategie, KI-Compute, Daten und Governance innerhalb einer von Ihnen kontrollierten Jurisdiktion zu halten. Ein Private LLM ist meist eine Komponente eines Sovereign-AI-Programms; die Sovereign-AI-Seite zeigt das größere Bild."
  - q: "Was umfasst ein Aenix Private-LLM-Engagement?"
    a: "Es läuft als AI Platform Build: GPU-Architektur, ein Inferenz-Stack, eine Qdrant-Vektordatenbank für RAG, Multi-Tenant-Isolation und Single Sign-on, bereitgestellt auf Ihrer eigenen Hardware. In einem realen Engagement paketierte dieselbe Plattform NVIDIA-Dynamo-Inferenz und einen Qdrant-RAG-Stack und wurde in die Grenze eines staatlichen Kunden ausgeliefert."
---

# Private LLM: Self-Hosted GenAI auf Ihren eigenen GPUs

**Betreiben Sie Ihr eigenes großes Sprachmodell auf selbst kontrollierter Hardware — Open-Weight-Modelle wie Llama, Mistral und Qwen, für Inferenz bereitgestellt, mit RAG in Ihren Dokumenten geerdet und bei Bedarf auf Ihren Daten fine-getunt. Ein Private LLM hält Prompts, Embeddings, Weights, Keys und den Audit-Trail auf Ihrer Seite der Grenze, sodass Sie moderne GenAI erhalten, ohne sensiblen Text an eine Drittanbieter-API zu senden. Aenix baut diese Plattformen auf [Cozystack](/de/produkte/cozystack/), auf Ihren eigenen GPUs.**

> **Passt zu:** **[Ænix AI Platform](/de/produkte/ai-platform/)** — GPU-Scheduling, fraktionales Sharing und Blueprints für Inferenz und Fine-Tuning. Für die elastische GPU-Kapazität darunter: kombinieren mit **[GPU-Cloud-Bursting](/de/loesungen/gpu-cloud-bursting/)**. Für die umfassendere Strategie: **[Sovereign AI](/de/loesungen/sovereign-ai/)**.

<div class="cta-row">
  <a class="cta-primary" href="/de/kontakt/">Discovery-Call buchen</a>
  <a class="cta-secondary" href="/de/case-studies/ai-universal-installer/">Case Study ansehen →</a>
</div>


---

## Warum ein Private LLM statt einer Cloud-KI-API?

Für viele Organisationen ist der Blocker für GenAI nicht das Modell — es ist der Datenpfad. Ein gehosteter Assistent bedeutet, Prompts und oft die Dokumente dahinter an eine externe API zu senden, die Sie nicht auditieren können.

- **Daten dürfen die Grenze nicht verlassen.** Banken, Gesundheitsversorger und öffentliche Stellen verarbeiten personenbezogenen, finanziellen oder klassifizierten Text, den die Datenverarbeitungsbedingungen einer Drittanbieter-API nicht ausreichend abdecken. Ein Self-Hosted LLM hält diesen Text von Grund auf in der Jurisdiktion und in der Infrastruktur.
- **Planbare Ökonomie im Volumen.** Pro-Token-Preise sind für einen Pilot in Ordnung und bei Skalierung teuer. Die GPUs zu besitzen, verwandelt eine variable API-Rechnung in eine Kapazität, die Sie kontrollieren — dieselbe Logik hinter **[GPU-Cloud-Bursting](/de/loesungen/gpu-cloud-bursting/)**.
- **Versionsstabilität.** Ein fixiertes Open-Weight-Modell ändert sein Verhalten nicht unter Ihnen, wenn ein Anbieter ein neues Release ausliefert — wichtig, wenn Ihre Workflows und Evaluationen von konsistenter Ausgabe abhängen.

Das ist speziell das Problem „Private LLM / Self-Hosted LLM / On-Prem GenAI". Es sitzt innerhalb — ist aber enger als — die umfassendere **[Sovereign-AI](/de/loesungen/sovereign-ai/)**-Strategie, die KI-Compute, Daten und Governance über eine ganze Jurisdiktion abdeckt.

---

## Woraus eine Private-LLM-Plattform besteht

Eine On-Prem-GenAI-Plattform ist mehr als eine Modelldatei. Aenix setzt den gesamten Stack aus offenen, [CNCF](https://www.cncf.io/)-nahen Bausteinen zusammen, sodass nichts Sie zurück zu einem proprietären KI-Dienst zwingt.

<div class="arch-section__fig">
<div class="diagram">
<div class="diagram__node"><b>Ihre Daten + Open-Weight-Modell</b><div class="diagram__chips"><span>Prompts</span><span>Dokumente</span><span>Llama / Mistral / Qwen</span></div></div>
<div class="diagram__conn">für Inferenz bereitgestellt auf</div>
<div class="diagram__node diagram__node--brand"><b>Cozystack-GPUs</b><div class="diagram__chips"><span>NVIDIA Dynamo</span><span>Qdrant-RAG</span><span>Daten bleiben in der Grenze</span></div></div>
<div class="diagram__conn">erzeugt</div>
<div class="diagram__node"><b>Private Inferenz</b><div class="diagram__chips"><span>Antworten bleiben in der Grenze</span><span>Weights, Keys, Logs bei Ihnen</span></div></div>
</div>
</div>

- **Open-Weight-Modell-Serving.** Modelle wie Llama, Mistral und Qwen für Inferenz auf Ihren GPUs, den Teams als gewöhnliche Kubernetes-Services statt als externer Endpoint bereitgestellt.
- **RAG über Ihre Dokumente.** Eine **Qdrant**-Vektordatenbank indexiert Ihre eigenen Inhalte und ruft zur Anfragezeit die relevanten Passagen ab, um Antworten in Ihren Daten zu erden. Sowohl die Quelldokumente als auch die generierten Antworten bleiben innerhalb der Grenze.
- **Effiziente Inferenz.** **NVIDIA Dynamo** liefert disaggregiertes Serving und KV-Cache-bewusstes Routing über die GPU-Flotte, was die Auslastung teurer Karten ohne zusätzliche Anbieter-Lizenzen erhöht.
- **GPU-Scheduling und Isolation.** Der [Kubernetes](https://kubernetes.io/docs/concepts/scheduling-eviction/)-Scheduler plus der NVIDIA-GPU-Operator machen GPUs zu einer erstklassigen, planbaren Ressource; Pro-Tenant Hosted Control Planes halten Teams auf geteilter Hardware isoliert.
- **Fine-Tuning vor Ort.** Weil GPUs und Daten in derselben Plattform liegen, können Sie Open-Weight-Modelle auf proprietären Daten anpassen, ohne dass diese Daten Ihre Infrastruktur verlassen.

---

## Weights, Keys und Audit-Trail auf Ihrer Seite halten

Die definierende Eigenschaft eines Private LLM ist Custody. Auf dieser Plattform liegen die Modell-Weights auf Storage, den Sie besitzen; Single Sign-on läuft über Ihr eigenes **Keycloak**; und jede Anfrage erzeugt Logs, die Sie halten, nicht die Telemetrie eines Anbieters. Für einen Regulator oder ein internes Risk-Team verwandelt das „die KI ist sicher" in eine prüfbare Aussage: Sie können zeigen, wohin die Daten gingen, wer das Modell aufrief und dass nichts die Grenze überquerte. Verschlüsselung im Ruhezustand und ein verschlüsseltes Mesh zwischen Standorten halten dieselben Garantien, wenn die Plattform mehr als ein Rechenzentrum umspannt.

---

## Beleg: eine RAG-und-Inferenz-Plattform, ausgeliefert in die Grenze eines Kunden

Das Muster ist bereits in Produktion. In unserer anonymisierten **[AI-Universal-Installer-Case-Study](/de/case-studies/ai-universal-installer/)** baute ein Telekom-Integrator eine unternehmensweite KI-Plattform auf Cozystack — unternehmensweite LLM-Assistenten, RAG-Suche über regulatorische Dokumentation und Computer Vision — und nutzte dieselbe Distribution, um diese Dienste *in die Umgebung eines staatlichen Endkunden auszuliefern, wobei die Daten innerhalb der Grenze des Kunden blieben*.

Konkret paketierte das Team **Qdrant** als Plattform-App für RAG neben den GPU-Workloads, paketierte **NVIDIA Dynamo** als vollständigen Inferenz-Stack zur Steigerung der GPU-Auslastung und betrieb einen **geo-verteilten GPU**-Cluster, der über ein verschlüsseltes WireGuard-Mesh mit dem Hauptcluster verbunden war — Modelle für jeden Tenant als gewöhnliche Services erreichbar. Das ist eine Private-LLM-Plattform bei echter Arbeit: 141 von 141 Managed Releases gesund, Single Sign-on, Multi-Tenancy und keine Prompts, die die Jurisdiktion des Kunden verlassen.

---

<div class="band-fullbleed band-fullbleed--tint">
<div class="band-fullbleed__inner">

## Welche Modelle und welche Workloads?

„Private LLM" ist nicht ein Workload — es ist eine kleine Familie, und jede hat eine andere Infrastruktur-Form.

- **Inferenz / Assistenten.** Ein Open-Weight-Chat- oder Instruct-Modell hinter einer internen API für Copilots, Support-Triage oder Dokument-Q&A. Das ist der häufigste Einstieg und am GPU-latenzsensitivsten.
- **RAG-Suche.** Antworten über eine Vektordatenbank in Ihrem eigenen Korpus erden, sodass das Modell Ihre Dokumente zitiert statt zu halluzinieren. Oft mit einem Assistenten kombiniert, aber allein wertvoll für internes Wissens-Retrieval.
- **Fine-Tuning und Anpassung.** Ein Open-Weight-Basismodell auf Ihre Domäne, Terminologie oder Aufgabe auf proprietären Daten anpassen — in der Grenze ausgeführt, sodass der Trainingsdatensatz nie sie verlässt.
- **Batch und Klassifizierung.** Hochdurchsatz-, latenztolerante Jobs — Massen-Summarisierung, Extraktion, Tagging — bei denen fraktionales GPU-Sharing und Off-Peak-Scheduling die Auslastung hoch halten.

Die GPU-Flotte gegen diesen Mix richtig zu dimensionieren, ist genau das, was ein Assessment klärt, bevor Hardware festgelegt wird.

</div>
</div>

---

## Wie Aenix bei Private LLM arbeitet

Das Engagement läuft als **[AI Platform Build](/de/dienstleistungen/ai-platform-build/)**: GPU-Architektur und Sizing, der Inferenz-Stack, eine Qdrant-Vektordatenbank für RAG, Multi-Tenant-Isolation und SSO und — wo relevant — eine Fine-Tuning-Pipeline, alles auf Ihrer eigenen Hardware bereitgestellt. Wo GPU-Bedarf sprunghaft ist, kombiniert es mit **[GPU-Cloud-Bursting](/de/loesungen/gpu-cloud-bursting/)**, sodass Sie die Grundlast besitzen und Spitzen bursten; wo der Treiber Jurisdiktion und Governance statt eines einzelnen Workloads ist, rollt es in ein **[Sovereign-AI](/de/loesungen/sovereign-ai/)**-Programm auf der **[AI Platform](/de/produkte/ai-platform/)** ein.


---

*Aenix ist das Team hinter [Cozystack](https://cozystack.io) — einem CNCF-Projekt (heute Sandbox; Incubating erwartet für Spätsommer 2026), Apache 2.0. Aenix kommerzialisiert es als Ænix Platform, als drei Plattformen auf einer Engine: Public Cloud, Private Cloud und AI — kombinierbar statt sich gegenseitig ausschließend. Wir bauen Private-LLM- und On-Prem-GenAI-Plattformen für Unternehmen und öffentliche Organisationen in der EU und DACH.*
