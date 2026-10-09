---
title: "Private LLM: Self-Hosted und On-Prem GenAI auf Ihren GPUs"
description: "Private LLM auf eigenen GPUs: selbst gehostete Open-Weight-Modelle, RAG mit Qdrant, Fine-Tuning — Weights, Daten und Audit-Trail bleiben unter Ihrer Kontrolle."
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
  **Ein Private LLM ist ein großes Sprachmodell, das Sie auf Ihren eigenen GPUs und in Ihrem eigenen Netzwerk betreiben — Prompts, Embeddings, Modell-Weights und der Audit-Trail verlassen nie Ihre Kontrolle. Typischerweise kommen Open-Weight-Modelle wie Llama, Mistral oder Qwen zum Einsatz, die für Inferenz bereitgestellt, per Retrieval (RAG) mit Ihren eigenen Dokumenten verknüpft und bei Bedarf mit Ihren Daten feinjustiert werden. Ænix baut diese Plattformen auf Cozystack (ein CNCF-Sandbox-Projekt unter Apache 2.0, aufgenommen in das Programm CNCF Kubernetes AI Conformance): GPU-Scheduling, eine Vektordatenbank für RAG und effiziente Inferenz, alles auf Infrastruktur, die Ihnen gehört. Das passt zu Banken, dem Gesundheitswesen, dem öffentlichen Sektor und jedem Unternehmen, das sensible Texte nicht an die KI-API eines Drittanbieters schicken darf. Anders als bei einem gehosteten Assistenten bleiben Weights, Daten und Logs auf Ihrer Seite der Grenze.**
quick_facts:
  - label: "Was es ist"
    value: "Ein großes Sprachmodell auf eigenen GPUs und im eigenen Netzwerk; Weights, Daten und Logs bleiben unter Ihrer Kontrolle."
  - label: "Modelle"
    value: "Open-Weight-Modelle — Llama, Mistral, Qwen und ähnliche — für Inferenz; keine Abhängigkeit von der KI-API eines Drittanbieters."
  - label: "RAG"
    value: "Retrieval-Augmented Generation über Ihre eigenen Dokumente mit einer Qdrant-Vektordatenbank direkt neben den GPU-Workloads."
  - label: "Effiziente Inferenz"
    value: "NVIDIA Dynamo für disaggregiertes Serving und KV-Cache-bewusstes Routing — höhere GPU-Auslastung ohne zusätzliche Herstellerlizenzen."
  - label: "Datengrenze"
    value: "Prompts, Embeddings und Fine-Tuning-Daten bleiben innerhalb Ihrer Rechtsordnung und Infrastruktur."
  - label: "Lizenz von Cozystack"
    value: "Cozystack ist Open Source unter Apache 2.0 — keine Lizenzkosten pro GPU oder CPU."
  - label: "Abgrenzung zu Sovereign AI"
    value: "Private LLM ist der Workload; Sovereign AI ist die übergeordnete Strategie für Rechtsordnung und Kontrolle, in die er sich einfügt."
quick_facts_source: "[Fallstudie AI Universal Installer](/de/case-studies/ai-universal-installer/)"
faq:
  - q: "Was ist ein Private LLM?"
    a: "Ein Private LLM ist ein großes Sprachmodell, das Sie auf Ihren eigenen GPUs und in Ihrem Netzwerk hosten, statt die KI-API eines Drittanbieters aufzurufen. Prompts, abgerufene Dokumente, Embeddings, Modell-Weights und der Audit-Trail bleiben in Ihrer Infrastruktur und Rechtsordnung, sodass sensible Texte nie Ihre Kontrolle verlassen. Die meisten Private-LLM-Installationen nutzen Open-Weight-Modelle wie Llama, Mistral oder Qwen."
  - q: "Warum ein selbst gehostetes LLM statt einer Cloud-KI-API?"
    a: "Regulierte Organisationen dürfen Prompts und Dokumente mit personenbezogenen oder finanziellen Daten oft nicht an eine externe API schicken, deren Datenverarbeitung sie nicht prüfen können. Ein selbst gehostetes LLM hält die Daten innerhalb der Grenze, beseitigt Preise pro Token bei Workloads mit hohem Volumen und erlaubt es, die Modellversion festzuschreiben, damit sich das Verhalten nicht unbemerkt ändert."
  - q: "Wie funktioniert RAG auf einer Private-LLM-Plattform?"
    a: "Retrieval-Augmented Generation indexiert Ihre eigenen Dokumente in einer Vektordatenbank — auf dieser Plattform Qdrant — und ruft zum Zeitpunkt der Anfrage die relevantesten Passagen ab, auf die sich die Antwort des Modells stützt. Das läuft neben den GPU-Inferenz-Workloads innerhalb derselben Grenze, sodass Quelldokumente und generierte Antworten privat bleiben."
  - q: "Kann ich Modelle mit meinen eigenen Daten feinjustieren?"
    a: "Ja. Weil GPUs und Daten auf derselben Plattform liegen, können Sie Open-Weight-Modelle mit proprietären Daten feinjustieren oder anpassen, ohne dass diese Daten Ihre Infrastruktur verlassen. Die AI Platform bietet GPU-Scheduling, Passthrough ganzer GPUs an VMs, NVIDIA vGPU für VMs (erfordert Ihre NVIDIA-vGPU-Lizenz) sowie MIG-Partitionen und Time-Slicing über HAMi in Tenant-Kubernetes-Clustern, für Inferenz- wie für Fine-Tuning-Workloads."
  - q: "Wie unterscheidet sich ein Private LLM von Sovereign AI?"
    a: "Beides ist verwandt, aber nicht dasselbe. Private LLM bezeichnet den konkreten Workload — ein selbst gehostetes Modell auf Ihren GPUs. Sovereign AI ist die übergeordnete Strategie, KI-Rechenleistung, Daten und Governance innerhalb einer Rechtsordnung zu halten, die Sie kontrollieren. Ein Private LLM ist meist ein Baustein eines Sovereign-AI-Programms; das Gesamtbild zeigt die Seite zu Sovereign AI."
  - q: "Was umfasst ein Private-LLM-Projekt mit Ænix?"
    a: "Es läuft als AI Platform Build: GPU-Architektur, ein Inferenz-Stack, eine Qdrant-Vektordatenbank für RAG, Isolation zwischen Tenants und Single Sign-on, bereitgestellt auf Ihrer eigenen Hardware. In einem veröffentlichten Projekt hat dieselbe Plattform NVIDIA-Dynamo-Inferenz und einen Qdrant-RAG-Stack paketiert und in die Umgebung eines Endkunden ausgeliefert; die Daten blieben dabei innerhalb dieser Grenze."
---

**Betreiben Sie Ihr eigenes großes Sprachmodell auf Hardware, die Sie kontrollieren — Open-Weight-Modelle wie Llama, Mistral und Qwen, bereitgestellt für Inferenz, per RAG auf Ihre Dokumente gestützt und bei Bedarf mit Ihren Daten feinjustiert. Ein Private LLM hält Prompts, Embeddings, Weights und den Audit-Trail auf Ihrer Seite der Grenze: Sie nutzen moderne GenAI, ohne sensible Texte an die API eines Drittanbieters zu schicken. Ænix baut diese Plattformen auf [Cozystack](/de/produkte/cozystack/), auf Ihren eigenen GPUs.**

> **Passt zu:** **[Ænix AI Platform](/de/produkte/ai-platform/)** — GPU-Scheduling und anteiliges Sharing für Inferenz und Fine-Tuning, Angebot per RFP. Für die elastische GPU-Kapazität darunter kombinieren Sie sie mit **[GPU-Cloud-Bursting](/de/loesungen/gpu-cloud-bursting/)**. Die übergeordnete Strategie beschreibt **[Sovereign AI](/de/loesungen/sovereign-ai/)**. Für Verantwortliche von ML-Plattformen: der [Leitfaden für Leiter AI/ML](/de/fuer/leiter-ai-ml/).

<div class="cta-row">
  <a class="cta-primary" href="/de/kontakt/">Gespräch vereinbaren</a>
  <a class="cta-secondary" href="/de/case-studies/ai-universal-installer/">Zur Fallstudie →</a>
</div>


---

## Warum ein Private LLM statt einer Cloud-KI-API?

Für viele Organisationen scheitert GenAI nicht am Modell, sondern am Datenpfad. Ein gehosteter Assistent bedeutet, Prompts — und oft die Dokumente dahinter — an eine externe API zu schicken, die Sie nicht prüfen können.

- **Daten dürfen die Grenze nicht verlassen.** Banken, Gesundheitsdienstleister und öffentliche Stellen verarbeiten personenbezogene, finanzielle oder anderweitig sensible Texte, die die Datenverarbeitungsbedingungen einer Drittanbieter-API nicht ausreichend abdecken. Ein selbst gehostetes LLM hält diese Texte schon konstruktionsbedingt in der eigenen Rechtsordnung und Infrastruktur.
- **Planbare Kosten bei hohem Volumen.** Preise pro Token sind für einen Pilot in Ordnung, im großen Maßstab aber teuer. Eigene GPUs verwandeln eine variable API-Rechnung in Kapazität, die Sie selbst steuern — dieselbe Logik wie beim **[GPU-Cloud-Bursting](/de/loesungen/gpu-cloud-bursting/)**.
- **Stabile Versionen.** Ein festgeschriebenes Open-Weight-Modell ändert sein Verhalten nicht unbemerkt, nur weil ein Anbieter ein neues Release ausliefert. Das zählt, wenn Ihre Workflows und Evaluierungen auf konsistente Ergebnisse angewiesen sind.

Genau das ist das Thema „Private LLM / selbst gehostetes LLM / On-Prem GenAI“. Es ist Teil der übergeordneten **[Sovereign-AI](/de/loesungen/sovereign-ai/)**-Strategie, aber enger gefasst: Diese umfasst KI-Rechenleistung, Daten und Governance für eine ganze Rechtsordnung.

---

## Woraus eine Private-LLM-Plattform besteht

Eine On-Prem-GenAI-Plattform ist mehr als eine Modelldatei. Ænix setzt den gesamten Stack aus offenen, an der [CNCF](https://www.cncf.io/) ausgerichteten Bausteinen zusammen, sodass Sie nichts zurück zu einem proprietären KI-Dienst zwingt.

<div class="arch-section__fig">
<div class="diagram">
<div class="diagram__node"><b>Ihre Daten + Open-Weight-Modell</b><div class="diagram__chips"><span>Prompts</span><span>Dokumente</span><span>Llama / Mistral / Qwen</span></div></div>
<div class="diagram__conn">für Inferenz bereitgestellt auf</div>
<div class="diagram__node diagram__node--brand"><b>Cozystack-GPUs</b><div class="diagram__chips"><span>NVIDIA Dynamo</span><span>Qdrant-RAG</span><span>Daten verlassen nie die Grenze</span></div></div>
<div class="diagram__conn">ergibt</div>
<div class="diagram__node"><b>Private Inferenz</b><div class="diagram__chips"><span>Antworten bleiben innerhalb der Grenze</span><span>Weights und Logs bei Ihnen</span></div></div>
</div>
</div>

- **Bereitstellung von Open-Weight-Modellen.** Modelle wie Llama, Mistral und Qwen laufen für Inferenz auf Ihren GPUs und stehen Teams als gewöhnliche Kubernetes-Services zur Verfügung statt als externer Endpoint.
- **RAG über Ihre Dokumente.** Eine **Qdrant**-Vektordatenbank indexiert Ihre eigenen Inhalte und ruft zum Zeitpunkt der Anfrage die relevanten Passagen ab, sodass sich Antworten auf Ihre Daten stützen. Quelldokumente und generierte Antworten bleiben innerhalb der Grenze.
- **Effiziente Inferenz.** **NVIDIA Dynamo** liefert disaggregiertes Serving und KV-Cache-bewusstes Routing über die gesamte GPU-Flotte und erhöht so die Auslastung teurer Karten ohne zusätzliche Herstellerlizenzen.
- **GPU-Scheduling und Isolation.** Der [Kubernetes](https://kubernetes.io/docs/concepts/scheduling-eviction/)-Scheduler und der NVIDIA GPU Operator machen GPUs zu einer vollwertigen, einplanbaren Ressource (ganze GPUs für Pods oder per Passthrough an VMs, NVIDIA vGPU für VMs mit Ihrer NVIDIA-vGPU-Lizenz, anteiliges Sharing über HAMi); Hosted Control Planes pro Tenant halten Teams auf gemeinsamer Hardware voneinander getrennt.
- **Fine-Tuning vor Ort.** Weil GPUs und Daten auf derselben Plattform liegen, können Sie Open-Weight-Modelle mit proprietären Daten anpassen, ohne dass diese Daten Ihre Infrastruktur verlassen.

---

## Weights, Daten und Audit-Trail auf Ihrer Seite halten

Das entscheidende Merkmal eines Private LLM ist die Verfügungsgewalt. Auf dieser Plattform liegen die Modell-Weights auf Storage, der Ihnen gehört; Single Sign-on läuft über Ihr eigenes **Keycloak**; und jede Anfrage erzeugt Logs, die bei Ihnen liegen — nicht die Telemetrie eines Anbieters. Für eine Aufsichtsbehörde oder ein internes Risikoteam wird aus „die KI ist sicher“ so eine überprüfbare Aussage: Sie können zeigen, wohin die Daten gegangen sind, wer das Modell aufgerufen hat und dass nichts die Grenze überschritten hat. Volume-Verschlüsselung lässt sich pro Storage Class optional aktivieren, und ein verschlüsseltes WireGuard-Mesh verbindet die Standorte, wenn die Plattform mehr als ein Rechenzentrum umfasst.

---

## Beleg: eine RAG- und Inferenz-Plattform, ausgeliefert in die Umgebung eines Kunden

Das Muster läuft bereits produktiv. In unserer anonymisierten **[Fallstudie AI Universal Installer](/de/case-studies/ai-universal-installer/)** hat ein Telekommunikations-Integrator eine unternehmensweite KI-Plattform auf Cozystack gebaut — LLM-Assistenten für das Unternehmen, RAG-Suche über regulatorische Dokumentation und Computer Vision — und mit derselben Distribution diese Dienste *in die Umgebung eines Endkunden ausgeliefert, wobei die Daten innerhalb der Grenze des Kunden blieben*.

Konkret hat das Team **Qdrant** als Plattform-App für RAG neben den GPU-Workloads paketiert, **NVIDIA Dynamo** als vollständigen Inferenz-Stack zur besseren GPU-Auslastung paketiert und einen **geografisch verteilten GPU**-Cluster betrieben, der über ein verschlüsseltes WireGuard-Mesh mit dem Hauptcluster verbunden war — die Modelle waren für jeden Tenant als gewöhnliche Services erreichbar. Das ist eine Private-LLM-Plattform im echten Einsatz: alle verwalteten Plattformkomponenten bereitgestellt und funktionsfähig, Single Sign-on, Mandantenfähigkeit, und kein Prompt verlässt die Rechtsordnung des Kunden.

---

<div class="band-fullbleed band-fullbleed--tint">
<div class="band-fullbleed__inner">

## Welche Modelle, welche Workloads?

„Private LLM“ ist nicht ein einzelner Workload, sondern eine kleine Familie — und jeder davon stellt andere Anforderungen an die Infrastruktur.

- **Inferenz und Assistenten.** Ein Open-Weight-Chat- oder Instruct-Modell hinter einer internen API für Copiloten, Support-Triage oder Fragen an Dokumente. Das ist der häufigste Einstieg und am empfindlichsten gegenüber GPU-Latenz.
- **RAG-Suche.** Antworten über eine Vektordatenbank auf Ihren eigenen Bestand stützen, damit das Modell Ihre Dokumente zitiert, statt zu halluzinieren. Oft mit einem Assistenten kombiniert, aber auch allein wertvoll für die interne Wissenssuche.
- **Fine-Tuning und Anpassung.** Ein Open-Weight-Basismodell mit proprietären Daten an Ihre Domäne, Terminologie oder Aufgabe anpassen — innerhalb der Grenze, sodass der Trainingsdatensatz sie nie verlässt.
- **Batch und Klassifizierung.** Latenztolerante Jobs mit hohem Durchsatz — Zusammenfassung, Extraktion, Verschlagwortung in großen Mengen —, bei denen anteiliges GPU-Sharing und Scheduling außerhalb der Spitzenzeiten die Auslastung hoch halten.

Die GPU-Flotte passend zu diesem Mix zu dimensionieren, ist genau das, was ein Assessment klärt, bevor Hardware bestellt wird.

</div>
</div>

---

## Wie Ænix Private-LLM-Projekte umsetzt

Das Projekt läuft als **[AI Platform Build](/de/dienstleistungen/ai-platform-build/)**: GPU-Architektur und Dimensionierung, der Inferenz-Stack, eine Qdrant-Vektordatenbank für RAG, Isolation zwischen Tenants und SSO sowie — wo sinnvoll — eine Fine-Tuning-Pipeline, alles auf Ihrer eigenen Hardware. Schwankt der GPU-Bedarf stark, kombinieren wir es mit **[GPU-Cloud-Bursting](/de/loesungen/gpu-cloud-bursting/)**: Sie besitzen die Grundlast und bursten die Spitzen. Geht es eher um Rechtsordnung und Governance als um einen einzelnen Workload, wird es Teil eines **[Sovereign-AI](/de/loesungen/sovereign-ai/)**-Programms auf der **[AI Platform](/de/produkte/ai-platform/)**.


---

*Ænix hat [Cozystack](https://cozystack.io) entwickelt und pflegt es gemeinsam mit Maintainern anderer Unternehmen — ein CNCF-Sandbox-Projekt (der Antrag auf CNCF Incubation befindet sich in der Due-Diligence-Prüfung) unter Apache 2.0. Ænix verkauft auf dieser Engine drei Plattformen: Public Cloud, Private Cloud und AI. Wir bauen Private-LLM- und On-Prem-GenAI-Plattformen für Unternehmen und Organisationen des öffentlichen Sektors.*
