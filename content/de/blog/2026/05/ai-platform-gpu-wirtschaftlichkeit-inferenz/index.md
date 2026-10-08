---
title: "AI Platform — wann sich Dauer-Inferenz auf eigenen GPUs gegenüber Hyperscalern rechnet"
seo_title: "Eigene GPUs für Dauer-Inferenz: wann es sich rechnet"
description: "GPU-Wirtschaftlichkeit für Dauer-Inferenz, mandantenfähiges GPU-Scheduling und ab wann sich eine eigene KI-Infrastruktur gegenüber Hyperscalern auszahlt."
slug: "ai-platform-gpu-wirtschaftlichkeit-inferenz"
date: "2026-05-01"
cover_image: "/img/blog/covers/de/ai-platform-gpu-wirtschaftlichkeit-inferenz.jpg"
author: "Aenix Team"
type: "article"
topics: ["AI and ML", "GPU", "Cozystack", "Sovereignty", "Multi-tenancy", "KubeVirt"]
language: "de"
hreflang_en: "/blog/2026/05/ai-ml-edition-sustained-gpu-economics/"
companion_landing: "/de/produkte/ai-platform/"
companion_label: "Zu den Produktdetails der AI Platform →"
quiz:
  title: "Wissens-Check: Wirtschaftlichkeit von GPUs im Dauerbetrieb"
  questions:
    - q: "Ab welcher H100-Auslastung schlagen eigene GPUs laut Artikel typischerweise die Preise der Hyperscaler?"
      options:
        - { text: "Ab etwa 30 % dauerhafter Auslastung", correct: true }
        - { text: "Schon ab etwa 5–10 % Auslastung, eigene GPUs sind fast immer günstiger", correct: false }
        - { text: "Erst ab über 80 % dauerhafter Auslastung rund um die Uhr", correct: false }
      explanation: "Laut der Break-even-Analyse liegt der Schwellenwert für H100 im Dauerbetrieb bei etwa 30 % Auslastung: Eine H100 beim Hyperscaler kostet rund 3–4 €/Std., eine abgeschriebene eigene H100 kommt bei 30 % Auslastung auf etwa 0,9–1,3 €/Std."
    - q: "Welcher Serving-Stack ist laut Artikel 2026 der Standard für die Inferenz von Transformer-Modellen?"
      options:
        - { text: "TGI als universeller Standard für alle Transformer-Workloads", correct: false }
        - { text: "Nur Triton, vLLM gilt für den Produktivbetrieb als überholt", correct: false }
        - { text: "vLLM, mit PagedAttention für Serving mit hohem Durchsatz", correct: true }
      explanation: "Unter Ebene 3 (Serving-Stack) heißt es: „vLLM ist 2026 der Standard für die Inferenz von Transformer-Modellen (PagedAttention liefert hohen Durchsatz)“; Triton passt zu gemischten Workloads."
    - q: "Welchen Fehler bei der anfänglichen GPU-Dimensionierung nennt der Artikel als den häufigsten?"
      options:
        - { text: "H100 zu wählen, obwohl L40S die Inferenzlast bewältigen würde", correct: false }
        - { text: "Den Speicherbedarf des KV-Cache bei der Batch-Größe im Betrieb nicht einzurechnen", correct: true }
        - { text: "Bei Modellparallelität über mehrere GPUs auf NVLink zu verzichten", correct: false }
      explanation: "Fallstrick 3 nennt als häufigsten Fehler bei der Erstdimensionierung, den Speicher für den KV-Cache nicht einzurechnen — ein Modell, das nach Parameterzahl „passt“, passt bei der Batch-Größe im Betrieb womöglich nicht."
    - q: "Um wie viel günstiger sind eigene GPUs laut Artikel bei kundenseitiger Inferenz rund um die Uhr ab dem zweiten Jahr?"
      options:
        - { text: "Etwa gleichauf mit Hyperscalern, der Break-even kommt erst im fünften Jahr", correct: false }
        - { text: "Sofort 10-mal günstiger, profitabel ab dem ersten Betriebsmonat", correct: false }
        - { text: "30–60 % günstiger ab dem zweiten Jahr, Hardware-Erneuerung eingerechnet", correct: true }
      explanation: "Der Abschnitt zum Break-even kommt zu dem Schluss, dass eigene GPUs bei kundenseitiger Inferenz rund um die Uhr (Millionen Tokens pro Tag) ab dem zweiten Jahr typischerweise 30–60 % günstiger sind."
    - q: "Warum gilt das Muster „SaaS-Endpunkt, vermarktet als private LLM“ als Fallstrick?"
      options:
        - { text: "Die Daten verlassen weiterhin den Perimeter des Kunden, was regulierte Workloads nicht erfüllt", correct: true }
        - { text: "Die Endpunkte drosseln aggressiv und brechen bei Lastspitzen ein", correct: false }
        - { text: "SaaS-Endpunkten fehlen OpenAI-kompatible APIs für einen nahtlosen Wechsel", correct: false }
      explanation: "Fallstrick 2 (Modell-API als private LLM) besagt, dass die Daten den Perimeter des Kunden auch bei starker Datenschutzklausel verlassen; für Workloads mit regulierten Daten verfehlt das die eigentliche Anforderung."
---


Die Frage „Sollten wir unsere eigene KI-Infrastruktur betreiben?“ stellt
sich 2026 anders. Für gelegentliches Experimentieren bleiben GPUs auf
Abruf beim Hyperscaler die richtige Wahl. Für Inferenz rund um die Uhr
hat sich die Rechnung deutlich verschoben.

## Der Break-even-Punkt — Inferenz im Dauerbetrieb

Die wirtschaftliche Frage hinter den meisten AI-Platform-Projekten:
*Ab welcher Auslastung schlägt unsere eigene GPU-Infrastruktur die GPUs
der Hyperscaler?*

Bei dedizierten GPU-Instanzen hängt der Break-even von der GPU-Klasse ab:

- **H100 im Dauerbetrieb:** Break-even bei etwa 30 % Auslastung. Eine
  H100-Instanz beim Hyperscaler kostet 2026 rund 3–4 €/Std.; eine
  abgeschriebene eigene H100 (25–30 Tsd. € Anschaffung + Erneuerung
  nach 4 Jahren + Strom + Colocation) kommt bei 30 % Auslastung auf
  etwa 0,9–1,3 €/Std., bei 60 % und mehr auf rund 0,5–0,7 €/Std.
- **L40S:** Break-even bei etwa 40 % Auslastung. Niedrigere Stundenpreise
  beim Hyperscaler (~1,5 €/Std.), aber auch niedrigere Anschaffungskosten
  im eigenen Rechenzentrum (12–15 Tsd. €). Bei mandantenfähigen
  Inferenz-Flotten, in denen sich Workloads per HAMi eine GPU teilen,
  liegt typischerweise die L40S vorn.
- **A100 (Gebrauchtmarkt):** Break-even bei etwa 25 % Auslastung. Das
  geringere Anfangskapital senkt die Gewinnschwelle; die A100 bleibt
  für Inferenz-Workloads bis 2026 kosteneffizient.
- **Blackwell B100/B200:** Hängt von Verfügbarkeit und Preisen während
  der Markteinführung der Generation ab. Early Adopters mit dauerhafter
  Inferenz großer Modelle profitieren; für die Inferenz kleinerer Modelle
  passen H100/L40S weiterhin.
- **AMD MI300/MI325:** Eine ernstzunehmende Alternative, wenn das
  Ökosystem passt. Das ROCm-Tooling ist ausgereifter geworden; manche
  Workloads profitieren davon. Hyperscaler bieten für AMD-GPUs weniger
  Optionen, daher ist der Fall für den Eigenbetrieb oft stärker.

Bei kundenseitiger Inferenz rund um die Uhr (Millionen Tokens pro Tag,
gleichmäßiges Lastprofil) sind eigene GPUs ab dem zweiten Jahr
typischerweise **30–60 % günstiger**, Hardware-Erneuerung und
Betriebsaufwand eingerechnet.

Für gelegentliches Experimentieren gewinnt weiterhin der Hyperscaler —
und das sagen wir auch, wenn die Eignungsprüfung ein solches
Workload-Profil ergibt.

## Was zu einer echten KI-Plattform gehört

Die GPU ist der sichtbare Kostenposten. Die echte Plattform hat sechs
Ebenen, die AI Platform jeweils standardisiert:

### Ebene 1 — Hardware

Eine typische mandantenfähige Inferenz-Flotte besteht aus einem Mix:
- **8–32 H100 / H200** für Inferenz großer Modelle mit hohem Durchsatz
  und für Fine-Tuning-Workloads
- **16–64 L40S** für die Inferenz mittelgroßer Modelle für Tenants,
  wobei HAMi jede Karte auf mehrere kleinere Workloads aufteilt
- **Reine CPU-Nodes** für RAG-Retrieval, das Erzeugen von Embeddings und
  Preprocessing-Pipelines, die keine GPU brauchen

Unterstützt werden NVIDIA-Rechenzentrums-GPUs über den NVIDIA GPU Operator
(Passthrough an VMs, Sharing über HAMi); MIG-Partitionierung steht auf der
Roadmap. NVLink für
Training über mehrere GPUs, wo sinnvoll; 25–100 Gbit/s Ethernet reichen
für die meisten Inferenz-Muster.

### Ebene 2 — Plattform

Hier bringt AI Platform gegenüber dem Eigenbau den größten Mehrwert.
Cozystack liefert:

- **KubeVirt** für KI-Workloads, die an VMs gebunden sind (ältere
  Notebook-Umgebungen, Data-Science-Teams, die vollständige VMs
  brauchen).
- **Container-basierte GPUs** über den NVIDIA GPU Operator für die
  Zuteilung ganzer GPUs, dazu HAMi für die anteilige Zuteilung nach
  GPU-Speicher und Rechenkernen in Tenant-Kubernetes-Clustern.
- **Mandantenfähiges Tenant CRD** mit GPU-Quotas pro Tenant und
  Scheduling, das GPU-Klassen berücksichtigt (z. B. L40S für
  Inferenz-Tenants, H100 für Fine-Tuning-Tenants).
- **Identity, Storage und Observability** integriert.

Das auf nacktem Kubernetes zu bauen, ist machbar, aber teuer: 12–24
Monate MLOps-Engineering, bevor mandantenfähiges GPU-Scheduling
produktionsreif funktioniert.

### Ebene 3 — Serving-Stack

vLLM ist 2026 der Standard für die Inferenz von Transformer-Modellen
(PagedAttention liefert hohen Durchsatz). NVIDIA Triton passt zu
gemischten Workloads (LLM + Vision + klassisches ML). TGI hat
Nischen-Features. AI Platform enthält sowohl vLLM als auch Triton,
vorintegriert mit Autoscaling und Observability der Plattform.

### Ebene 4 — Modellebene

Modellfamilien mit offenen Gewichten im Produktivbetrieb 2026:
- **Llama 3 / 3.1 / 3.2 / 3.3** (Meta) — 1B bis 405B+, Lizenz erlaubt
  kommerzielle Nutzung mit Einschränkungen
- **Mistral / Mixtral** — kommerzielle Lizenz für neuere, Apache 2.0
  für ältere Modelle
- **Qwen 2 / 3** (Alibaba) — stark mehrsprachig, einschließlich der
  Sprachen im DACH-Raum und in Osteuropa, Apache 2.0
- **DeepSeek V3** — starkes Reasoning, Lizenz unterschiedlich
- **Phi** (Microsoft) — kleine Modelle mit überraschenden Fähigkeiten, MIT
- **Gemma** (Google) — klein/mittel, kommerzielle Nutzung erlaubt

Für die meisten Installationen in regulierten Branchen: ein Hauptmodell
im Bereich 7B–70B für den allgemeinen Einsatz, kleinere Modelle (Phi,
Gemma) für kostensensible Pfade, dazu ein Embedding-Modell für RAG.
Fine-Tuning kommt zum Einsatz, wenn domänenspezifische Genauigkeit
gefragt ist.

AI Platform stellt kuratierte Modelle mit offenen Gewichten vorab in der
Registry des Clusters bereit. Der Kunde kann weitere hinzufügen; die
Kompatibilitätstests sind Teil des Ænix-Engagements.

### Ebene 5 — Anwendungsebene

- **LLM-Gateway** (LiteLLM, Portkey, Eigenentwicklung) — Request-Routing,
  Rate Limiting, Audit-Logging, Kostenverfolgung
- **RAG-Infrastruktur** — pgvector (PostgreSQL-Operator), Qdrant,
  Weaviate, Milvus
- **Embedding-Pipelines** — Dokumentindexierung, Orchestrierung des
  Retrievals

Auf der Anwendungsebene konzentrieren sich die Kosten eines Wechsels des
Modellanbieters. Ein gut gebautes LLM-Gateway macht das Modell
austauschbar; ein schlecht gebautes bindet die Anwendung an einen
bestimmten API-Vertrag.

### Ebene 6 — Betrieb

Im Regelbetrieb nach der Einführung bleiben die meisten privaten
KI-Projekte hinter den Erwartungen zurück. Zum Betrieb gehören:

- **GPU-Auslastung pro Tenant** — unterausgelastete GPUs sind
  verschwendetes Budget, überausgelastete GPUs erzeugen Warteschlangen
- **Lebenszyklusmanagement der Modelle** — Wann von Llama 3.x auf 4.x
  aktualisieren? Wann neu fine-tunen? Wem gehört die
  Regressionstest-Suite?
- **Kostenverfolgung pro Tenant / Team / Workload** — ohne Verfolgung
  pro Tenant wird die Kostenzuordnung in mandantenfähigen KI-Plattformen
  unbeherrschbar
- **Audit-Trail** — für den Dialog mit der Aufsicht muss jede
  Inferenzanfrage nachvollziehbar sein: Modell + Version, Gewichte,
  Eingabe, Ausgabe, anfragender Nutzer, Zeitstempel
- **Rufbereitschaft** — GPU-Ausfälle, OOM-Ereignisse, Rückstau in
  Warteschlangen
- **Kapazitätsplanung** — Wann mehr GPUs kaufen? Wann ältere ausmustern?

AI Platform liefert VictoriaMetrics + VictoriaLogs mit KI-spezifischen
Metriken von Haus aus (Tokens/Sek. pro Tenant, Latenz-Perzentile pro
Modellversion, Kosten pro Token pro Tenant) sowie ein Dashboard für die
Kapazitätsplanung, das an die GPU-Dimensionierungstabellen gekoppelt ist.

## Typische Einsatzmuster

**Muster 1 — Inferenz-Cluster für einen Tenant.** Die kleinste sinnvolle
Installation. Eine Workload, ein Team, eine Modellfamilie. 4–16
H100/H200 oder 8–32 L40S. Am besten für: regulierte Workloads mit einem
Anwendungsverantwortlichen, PoCs, die wachsen werden.

**Muster 2 — mandantenfähige Inferenz-Flotte.** Installation für mehrere
Teams oder Anwendungen. 16–128 GPUs verschiedener Klassen. Tenant CRD
mit Quotas pro Tenant. Am besten für: Plattform-Teams in Unternehmen,
die mehrere Data-Science-Teams unterstützen.

**Muster 3 — kompletter Stack aus Inferenz, Fine-Tuning und RAG.**
32–512 GPUs in verschiedenen Rollen. Vektordatenbank, Embedding-Modell,
LLM-Gateway. Am besten für: Finanzdienstleister, Gesundheitswesen und
öffentlichen Sektor mit einem dauerhaften KI-Programm. Das ist die
typische Flaggschiff-Installation von AI Platform.

**Muster 4 — souveräne Air-Gapped-Installation.** Kein ausgehender
Internetverkehr; Updates über kontrollierte Kanäle. Vom Kunden
gestellte Hardware, vom Kunden kontrollierte Schlüssel,
SIEM für Audits auf Kundenseite. Am besten für: Verschlusssachen,
Gesundheitswesen mit strengen Vorgaben zur
Datenresidenz.

## Häufige Fallstricke

### Fallstrick 1 — die Plattformebene überspringen

Teams installieren vLLM auf Bare-Metal-Servern und nennen das eine
private KI-Installation. Für einen PoC funktioniert das. Es bricht
zusammen, sobald der GPU-Bedarf die verfügbare Kapazität übersteigt,
die Isolation zwischen Mandanten wichtig wird oder die Aufsicht nach
einem Audit-Trail fragt.

### Fallstrick 2 — Modell-API als private LLM

Manche Anbieter vermarkten einen SaaS-Endpunkt mit Datenschutzkontrollen
als „private LLM“. Die Daten verlassen trotzdem den Perimeter des Kunden,
auch wenn die Datenschutzklausel stark ist. Für Workloads mit regulierten
Daten verfehlt das die eigentliche Anforderung.

### Fallstrick 3 — Speicher zu knapp bemessen

Der häufigste Fehler bei der Erstdimensionierung: den Speicher für den
KV-Cache nicht einzurechnen, der mit Kontextlänge und Batch-Größe wächst.
Ein Modell, das nach Parameterzahl „passt“, passt bei der Batch-Größe
im Betrieb womöglich nicht. Die richtige Dimensionierung erfordert echte
Benchmarks mit realistischen Kontextlängen und Batch-Profilen.

### Fallstrick 4 — zu wenig Personal für den Betrieb

GPU-Cluster brauchen laufende Betreuung. Ein Team, das den Aufbau
souverän meistert, beim Betrieb aber zu knapp besetzt ist, landet bei
einem Stack, der zwar „funktioniert“, aber weder audit- noch
Business-Continuity-tauglich ist. Planen Sie die Größe des
Betriebsteams für die Dauerlast, nicht für den PoC.

## Wann AI Platform die richtige Antwort ist

Gute Eignung:

- Inferenz-Workloads im Dauerbetrieb (rund Millionen Tokens pro Tag oder
  gleichmäßige Produktionslast), bei denen die Wirtschaftlichkeit hoher
  Dauerauslastung für eigene GPUs spricht.
- Regulierte Datenklassen, die nicht an Modell-APIs von Hyperscalern
  gehen dürfen (Banken, Gesundheitswesen, Verschlusssachen,
  branchenspezifische Vorgaben).
- Anforderungen an die Nachvollziehbarkeit — jede Inferenzanfrage muss
  auf Modell + Version + Eingabe + Ausgabe + Nutzer + Zeitstempel
  zurückführbar sein.
- Vorhandene Kapazität im Platform Engineering oder die Bereitschaft,
  darin zu investieren (5–10 Engineers).

Bedingte Eignung:

- KI-Experimente, für die gelegentliche GPU-Nutzung ausreicht. Bei
  niedriger Auslastung gewinnt der Hyperscaler auf Abruf.
- Installationen mit einer einzigen Workload unter 50 Tokens/Sek. im
  Dauerbetrieb. Solche kleineren Installationen laufen oft
  kostengünstiger auf verwalteten KI-Diensten der Hyperscaler.

Schlechte Eignung:

- Keine regulierten Daten, keine Dauerlast, kein Plattform-Team. Nutzen
  Sie die KI-APIs der Hyperscaler oder kleinere Open-Source-Installationen.

## Ablauf der Zusammenarbeit

- **Discovery Call** (30 Min., kostenlos)
- **Platform Readiness Assessment** (14 oder 28 Tage, Festpreis) —
  auf Basis des Frameworks aus dem [Sovereign-AI-Architektur-Leitfaden](/de/ressourcen/sovereign-ai-architektur-leitfaden/) und der Erfahrung von Ænix
- **Pilotprojekt** (3–6 Monate) — klar abgegrenzter Ausschnitt: eine
  Workload-Klasse, ein Tenant, eine Modellfamilie
- **Vollständiger Aufbau der AI Platform** — produktive
  KI-Infrastruktur mit allen vorgesehenen Workload-Typen; Umfang und
  Dauer werden im Assessment festgelegt
- **Support-Subskription** (laufend) — Plus- oder Enterprise-Stufe für
  24×7 (siehe [/de/preise/](/de/preise/)) oder separat angebotener
  Managed-Betrieb

Umfang: Projekt plus Support-Subskription, Angebot je Ausschreibung.

## Weiterführende Informationen

- **[AI Platform](/de/produkte/ai-platform/)** —
  Funktionsübersicht, GPU-Dimensionierungstabellen, produktspezifische FAQ
- **[Souveräne KI-Infrastruktur](/de/loesungen/sovereign-ai/)** —
  Einstiegsseite für Entscheider zum Thema Sovereign AI
- **[AI Platform Build](/de/dienstleistungen/ai-platform-build/)** —
  Details zur Zusammenarbeit
- **[Private LLM Deployment — praktischer Leitfaden](/de/blog/2026/05/private-llm-deployment-leitfaden/)** —
  Durchgang durch den Stack mit sechs Ebenen samt Hardware-Tabellen
- **[Entscheidungen für eine Sovereign-AI-Architektur](/de/blog/2026/05/sovereign-ai-architektur-entscheidungen/)** —
  die sieben Entscheidungen, die eine souveräne KI-Architektur prägen
- **[Sovereign-AI-Architektur-Leitfaden](/de/ressourcen/sovereign-ai-architektur-leitfaden/)** —
  Entscheidungs-Framework als PDF zum Herunterladen
