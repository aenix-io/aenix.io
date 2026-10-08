---
title: "Souveräne KI-Infrastruktur — GenAI und Inferenz auf Daten, die den Perimeter nicht verlassen dürfen"
seo_title: "Sovereign AI: GenAI auf eigener Infrastruktur"
primary_keyword: "sovereign ai"
description: "Sovereign AI für regulierte Organisationen: Inferenz, Fine-Tuning und RAG auf eigenen GPUs in Ihrer Rechtsordnung — die Daten verlassen nie den Perimeter."
type: "page"
related_pages:
  - /de/loesungen/data-sovereignty/
  - /de/loesungen/dora-compliance/
  - /de/dienstleistungen/platform-readiness-assessment/
  - /de/dienstleistungen/ai-platform-build/
  - /de/produkte/ai-platform/
  - /de/produkte/cozystack/
language: "de"
quick_facts_style: "rows"
faq_style: "rows"
hreflang_en: /solutions/sovereign-ai/
direct_answer: |
  **Souveräne KI-Infrastruktur betreibt GenAI, Inferenz, Fine-Tuning und RAG auf Hardware, die dem Kunden gehört oder von ihm kontrolliert wird, in der Rechtsordnung seiner Wahl und unter seiner Governance — Modell-Weights, Prompts, Antworten und Embeddings verlassen nie den Perimeter. Sie ist für regulierte Organisationen (Finanzdienstleister, Gesundheitswesen, öffentlicher Sektor) und KI-/GPU-Betreiber gedacht, bei denen Datenklasse, Aufsicht oder die Wirtschaftlichkeit der Inferenz KI-Dienste von Hyperscalern ausschließen. Ænix konzipiert, baut und betreibt diese Plattformen auf Cozystack, einem CNCF-Sandbox-Projekt unter Apache 2.0, das im September 2026 in das Programm CNCF Kubernetes AI Conformance aufgenommen wurde. Cozystack vereint KubeVirt-VMs und Kubernetes-Inferenz-Workloads unter einer API. NVIDIA-GPUs für Rechenzentren werden über den NVIDIA GPU Operator unterstützt: Passthrough ganzer GPUs an VMs, NVIDIA vGPU für VMs (erfordert eine NVIDIA-vGPU-Lizenz), ganze GPUs für Pods über das Device Plugin und anteilige Nutzung für Pods über HAMi. MIG und Time-Slicing stehen auf der Roadmap. Ænix ist an keinen Modellanbieter gebunden und empfiehlt das Open-Weight-Modell — Llama, Mistral, Qwen, DeepSeek, Phi —, das zu Datenklasse und Wirtschaftlichkeit passt.**
quick_facts:
  - label: "Was es ist"
    value: "KI-Inferenz, Fine-Tuning und RAG auf kundenkontrollierter Hardware, in der Rechtsordnung des Kunden und unter seiner Governance; die Daten verlassen nie den Perimeter"
  - label: "Für wen"
    value: "Regulierte Finanzdienstleister, Gesundheitswesen, öffentlicher Sektor sowie KI-/GPU-Betreiber, bei denen Datenklasse, Aufsicht oder Inferenzkosten KI-Dienste von Hyperscalern ausschließen"
  - label: "Lizenz"
    value: "Apache 2.0 (keine Lizenzkosten pro CPU oder Core)"
  - label: "Status"
    value: "Cozystack ist ein CNCF-Projekt (Sandbox seit 28.02.2025; der Antrag auf CNCF Incubation befindet sich in der Due-Diligence-Prüfung)"
  - label: "Plattform"
    value: "Cozystack — KubeVirt für VMs und Kubernetes für Inferenz unter einer API; CNCF Kubernetes AI Conformance (seit September 2026)"
  - label: "GPUs"
    value: "NVIDIA-GPUs für Rechenzentren über den NVIDIA GPU Operator: Passthrough ganzer GPUs an VMs, NVIDIA vGPU für VMs (erfordert eine NVIDIA-vGPU-Lizenz), ganze GPUs für Pods über das Device Plugin und anteilige Nutzung für Pods über HAMi. MIG und Time-Slicing stehen auf der Roadmap. Welches Modell zu welcher Hardware passt, klärt das Assessment."
  - label: "Projektablauf"
    value: "Platform Readiness Assessment zum Festpreis über 14 oder 28 Tage, danach Aufbau durch Ænix (typischerweise 3–12 Monate je nach Umfang); Angebot per RFP; Air-Gap-Installation wird unterstützt"
faq:
  - q: "Ist Sovereign AI dasselbe wie Private AI?"
    a: "Nein. „Private AI“ wird sowohl für SaaS-Endpunkte mit Datenschutzklausel als auch für echte On-Prem-Installationen verwendet. Sovereign AI setzt dagegen voraus, dass das Modell auf Kundenhardware läuft, die Daten im Perimeter des Kunden bleiben und die Plattform unter der Governance des Kunden betrieben wird."
  - q: "Welche Open-Weight-LLMs unterstützt Ænix?"
    a: "Zu den aktuell produktionsreifen Modellen gehören Llama, Mistral, Qwen, DeepSeek, Phi und Gemma sowie spezialisierte Modelle für Code, Bildverarbeitung und Embeddings. Die konkrete Auswahl erfolgt im Assessment, abhängig von Datenklasse, Sprachanforderungen und Inferenzkosten."
  - q: "Umfasst Sovereign AI auch Training oder nur Inferenz?"
    a: "Beides. Inferenz ist der häufigere Einstieg; die meisten regulierten Organisationen beginnen damit und ergänzen später das Fine-Tuning von Open-Weight-Modellen. Vollständiges Pre-Training von Frontier-Modellen ist in diesem Segment selten."
  - q: "Welche GPUs unterstützt die Plattform?"
    a: "NVIDIA-GPUs für Rechenzentren werden über den NVIDIA GPU Operator unterstützt: Passthrough ganzer GPUs an VMs, NVIDIA vGPU für VMs (erfordert eine NVIDIA-vGPU-Lizenz), ganze GPUs für Pods über das Device Plugin und anteilige Nutzung für Pods über HAMi. MIG und Time-Slicing stehen auf der Roadmap. Andere Beschleuniger (AMD, Intel) lassen sich als PCI-Geräte an VMs durchreichen; die Automatisierung über einen Operator gibt es derzeit nur für NVIDIA. Eine veröffentlichte Liste validierter GPU-Modelle gibt es nicht; welches Modell zu welcher Hardware passt, klärt das Assessment."
  - q: "Kann die Plattform air-gapped betrieben werden?"
    a: "Ja. Für Cozystack gibt es einen dokumentierten Ablauf für Air-Gap-Installationen. Er kommt zum Einsatz, wo eine Aufsichtsbehörde oder eine Sicherheitsrichtlinie ausgehende Verbindungen verbietet — etwa im öffentlichen Sektor und in kritischer Infrastruktur."
  - q: "Ist Ænix an einen Modellanbieter gebunden?"
    a: "Nein. Ænix hat keine Geschäftsbeziehung zu einem LLM-Anbieter. Die Architektur empfiehlt das Open-Weight-Modell und den Serving-Stack — vLLM, Triton oder Alternativen —, die zu Datenklasse, Aufsicht und Inferenzkosten des Kunden passen."
---

<!-- BLOCK 1: HERO -->

**Für regulierte Workloads ist KI kein reines Hyperscaler-Thema mehr. Sensible Datenklassen, branchenspezifische Vorgaben und die Kosten von Inferenz im großen Maßstab treiben Finanzdienstleister, Gesundheitswesen, öffentlichen Sektor und Betreiber von KI-Plattformen hin zu souveräner KI-Infrastruktur — GenAI, Inferenz und Analytics auf eigener Hardware des Kunden, in der Rechtsordnung seiner Wahl und unter seiner Governance.**

Ænix baut und betreibt diese Plattformen von Anfang bis Ende: eine Architektur, eine Installation und ein Betriebsmodell, mit dem Ihr Team tatsächlich arbeiten kann.

> **Passt zu:** **[Ænix AI Platform](/de/produkte/ai-platform/)** — mandantenfähiges GPU-Scheduling, Inferenz, Fine-Tuning und RAG auf einer Plattform, mit Vektordatenbank und Object Storage; ergänzen Sie die [Private Cloud Platform](/de/produkte/private-cloud-platform/) für eine umfassendere souveräne Cloud, oder lesen Sie den kostenlosen [Sovereign-AI-Entscheidungsleitfaden →](/de/ressourcen/sovereign-ai-architektur-leitfaden/).

<div class="cta-row">
  <a class="cta-primary" href="/de/kontakt/">Gespräch vereinbaren</a>
  <a class="cta-secondary" href="/de/blog/2026/05/private-llm-deployment-leitfaden/">Leitfaden lesen →</a>
</div>

<div class="trust-badges">
CNCF Kubernetes AI Conformance · Stack auf Basis des NVIDIA GPU Operator · Plattform unter Apache 2.0 · Air-Gap-Installation unterstützt
</div>


<!-- /BLOCK 1 -->

---

<!-- BLOCK 2: WHO THIS IS FOR -->

## Wer Sovereign AI braucht

Sovereign AI ist nicht für jeden Workload das Richtige. Es ist die richtige Antwort, wenn mindestens drei der folgenden Punkte zutreffen:

- **Die Datenklasse ist sensibel** — regulierte personenbezogene Daten, Finanzdaten, Gesundheitsdaten, internes geistiges Eigentum, das Modellanbietern nicht zugänglich werden darf.
- **Die Aufsicht bindet KI-Verarbeitung an eine Rechtsordnung** — DORA, NIS2, branchenspezifische Vorgaben, Auflagen für souveräne Clouds (EU-Mitgliedstaaten, Kasachstan, mehrere Länder im asiatisch-pazifischen Raum).
- **Inferenz im großen Maßstab ist beim Hyperscaler wirtschaftlich schmerzhaft** — GPU-Preise, Egress-Kosten und unvorhersehbare Ausgaben machen dedizierte Infrastruktur für Inferenz rund um die Uhr attraktiver.
- **Das Modellverhalten muss reproduzierbar und prüfbar sein** — im Dialog mit der Aufsicht muss feststehen, welches Modell mit welchen Weights und welchen Eingabedaten ein Ergebnis erzeugt hat.
- **Air-Gap oder eingeschränkter Egress ist vorgeschrieben** — Workloads im öffentlichen Sektor oder in kritischer Infrastruktur, bei denen ausgehende Verbindungen nicht erlaubt sind.

Trifft keiner dieser Punkte zu, ist Sovereign AI Over-Engineering.

> **Sie leiten ein ML-Plattform-Team?** Der [Leitfaden für Leiter AI/ML](/de/fuer/leiter-ai-ml/) behandelt GPU-Zuteilung, Model Serving und das Betriebsmodell. Treffen drei oder mehr Punkte zu, stellt sich nicht mehr die Frage, ob — sondern wie, bis wann und zu welchen Kosten.

{{< factoid number="14 oder 28 Tage" label="vom Platform Readiness Assessment zu schriftlicher Architektur, GPU-Strategie und Souveränitätskontrollen für Ihre Datenklasse" >}}

<!-- /BLOCK 2 -->

---

<!-- BLOCK 3: WHAT SOVEREIGN AI ACTUALLY MEANS -->

<div class="band-fullbleed band-fullbleed--tint">
<div class="band-fullbleed__inner">

## Was Sovereign AI tatsächlich bedeutet

<div class="grid-2x2">

**1. Das Modell läuft auf Ihrer Hardware**
Inferenz (und, wo nötig, Training) auf GPUs, die Sie besitzen oder betreiben — nicht auf GPU-Instanzen oder der Modell-API eines Hyperscalers. NVIDIA-GPUs für Rechenzentren sind der übliche Weg, automatisiert über den NVIDIA GPU Operator; andere Beschleuniger lassen sich als PCI-Geräte an VMs durchreichen.

**2. Die Daten verlassen nie den Perimeter**
Trainingsdaten, Prompts, Antworten, Embeddings und alle daraus abgeleiteten Artefakte bleiben in der kundenkontrollierten Umgebung. Kein Datenverkehr zu Endpunkten von Modellanbietern, keine Observability-Daten an SaaS-Anbieter, die außerhalb des Perimeters verarbeiten.

**3. Die Modell-Weights liegen unter Ihrer Kontrolle**
Open-Weight-Modelle (Llama, Mistral, Qwen, DeepSeek, Phi usw.) laufen lokal, oder feinjustierte Varianten, deren Weights Ihnen gehören. Keine Modell-API, die Prompts an das Modell eines Dritten weiterleitet.

**4. Sie betreiben die Plattform, unter Ihrer Governance**
Eine Kubernetes-native KI-Plattform mit klarer Verantwortung für GPU-Scheduling, Autoscaling, Modellverwaltung und Audit-Trails. Keine Blackbox-Appliance, deren Betrieb der Hersteller kontrolliert.

</div>

Das ist nicht „Private AI“ als Etikett für einen SaaS-Endpunkt mit Datenschutzklausel, sondern ein architektonisch souveräner Stack mit benannten Komponenten und nachweisbaren Kontrollen.

</div>
</div>

<!-- /BLOCK 3 -->

---

<!-- BLOCK 4: WHERE COMMON APPROACHES FAIL -->

## Woran gängige KI-Plattform-Ansätze beim Souveränitätstest scheitern

<div class="gap-cards-2">

**„Private Bereitstellung“ einer SaaS-Modell-API**
Der Modellanbieter betreibt die Inferenz; die Daten fließen zu seinem Endpunkt. Trotz Datenschutzklausel haben die Daten den Perimeter verlassen. Souveränität verfehlt.

**Hyperscaler-GPU mit proprietären Diensten**
Die GPU steht in der richtigen Region, aber Modell-Orchestrierung, Observability und Storage-Anbindungen binden den Workload an proprietäre Dienste. Die Ausstiegskosten wachsen, das Konzentrationsrisiko ebenso.

**Single-Tenant-SaaS in einer „souveränen“ Hyperscaler-Region**
Die Region ist souverän, aber die Service-Ebene betreibt der Hyperscaler. Verschlüsselungsschlüssel, Zugriff auf die Control Plane und Update-Kanäle bleiben bei einem nicht souveränen Anbieter.

**Selbst gehostetes LLM ohne Plattform darunter**
Ein Team betreibt vLLM oder llama.cpp auf ein paar Bare-Metal-Servern und nennt das Private AI. Für einen PoC reicht das. Im Produktivbetrieb scheitert es an Mandantenfähigkeit, GPU-Autoscaling, Auditfähigkeit oder betrieblicher Verfügbarkeit.

</div>

Die ehrliche Antwort ist meist eine Kubernetes-native KI-Plattform auf kundenkontrollierter Hardware mit einem klar definierten Betriebsmodell.

<!-- /BLOCK 4 -->

---

<!-- BLOCK 5: HOW AENIX HELPS -->

## Wie Ænix hilft

<div class="arch-section__fig">
<div class="diagram">
<div class="diagram__node"><b>KI-Workloads</b><div class="diagram__chips"><span>Inferenz</span><span>Fine-Tuning</span><span>RAG</span></div></div>
<div class="diagram__conn">eingeplant auf</div>
<div class="diagram__node diagram__node--brand"><b>Cozystack / Ænix</b><div class="diagram__chips"><span>KubeVirt-VMs + Kubernetes</span><span>GPU Operator: Passthrough, vGPU, HAMi</span><span>Hardware und Rechtsordnung des Kunden</span></div></div>
<div class="diagram__conn">ergibt</div>
<div class="diagram__node"><b>Sovereign AI</b><div class="diagram__chips"><span>Daten verlassen nie den Perimeter</span><span>Keine Endpunkte von Modellanbietern</span></div></div>
</div>
</div>

Das Sovereign-AI-Projekt läuft als Teil unseres **[Platform Readiness Assessment](/de/dienstleistungen/platform-readiness-assessment/)**, mit Schwerpunkt auf den Arbeitssträngen Souveränität und KI-Plattform. Führt das Projekt zur Umsetzung, liefert Ænix die Plattform von Anfang bis Ende.

Die Assessment-Phase liefert:

- **Architekturoptionen** — konkrete Plattformdesigns für Inferenz, Training und Fine-Tuning in Ihrer Größenordnung, mit Hardware-Dimensionierung.
- **Souveränitätskontrollen** — Datenresidenz, Schlüsselverwahrung und Audit-Trail, speziell für KI-Workloads ausgelegt.
- **GPU-Strategie** — GPU-Dimensionierung, Zuteilungsart pro Workload (dediziert, vGPU oder anteilig), Passung von Modell und Hardware, Annahmen zur Skalierung.
- **Betriebsmodell** — wer die Plattform betreibt, welche Self-Service-Oberfläche Produkt- und Data-Science-Teams bekommen, wie die Rufbereitschaft aussieht.
- **Umsetzungs-Roadmap für Phase 2** — Aufbau durch Ænix, mit Zeitplan, Aufwandsschätzung und Erfolgskriterien.

Die Umsetzungsphase liefert:

- **KI-Plattform auf Basis von Cozystack** mit KubeVirt für VMs und Kubernetes für Inferenz-Workloads. GPU-Zuteilung: Passthrough ganzer GPUs oder NVIDIA vGPU für VMs, ganze GPUs oder anteiliges Sharing über HAMi für Pods. MIG und Time-Slicing stehen auf der Roadmap.
- **Model Serving** — vLLM, Triton oder Alternativen, passend zur Modellarchitektur.
- **GPU-Nutzung pro Tenant erfasst** — Abrechnung oder interne Verrechnung erfolgt in Ihrem Billing-System.
- **Self-Service für Data-Science-Teams** — Bereitstellungswege, Observability, Audit-Trails.
- **Air-Gap-Installation**, wo die Aufsicht sie verlangt.

{{< factoid number="3–12 Monate" label="typische Aufbauzeit bis zu einer produktiven Sovereign-AI-Plattform auf eigener Hardware, je nach Umfang" >}}

<!-- /BLOCK 5 -->

---

<!-- BLOCK 6: WHY AENIX SPECIFICALLY -->

## Warum gerade Ænix

- **KI-Infrastruktur ist unser Alltag.** Vier GPU-Projekte sind als Fallstudien dokumentiert (siehe unten) — zu Inferenz, Multi-Cloud-GPU-Kapazität und internen KI-Plattformen. Cozystack wurde in das Programm CNCF Kubernetes AI Conformance aufgenommen (September 2026).
- **Keine Bindung an einen Modellanbieter.** Wir haben keine Geschäftsbeziehung zu einem bestimmten LLM-Anbieter. Die Architektur empfiehlt das Open-Weight-Modell, das zu Datenklasse, Aufsicht und Wirtschaftlichkeit passt — Llama, Mistral, Qwen, DeepSeek, Phi oder feinjustierte Varianten — und den passenden Serving-Stack.
- **Open-Source-Plattform als Fundament.** [Cozystack](/de/produkte/cozystack/), das Ænix initiiert hat und gemeinsam mit Maintainern anderer Unternehmen pflegt, ist ein CNCF-Sandbox-Projekt und läuft auf der vom Kunden gewählten Hardware in der gewählten Rechtsordnung. Der Zugriff auf Cluster-Ebene bleibt beim Kunden; wir arbeiten unter Ihrer Governance, nicht an ihr vorbei.

<!-- /BLOCK 6 -->

---

<!-- BLOCK 7: TIMELINE -->

## So läuft das Projekt ab

Tag 0 ist ein kostenloses 30-minütiges Discovery-Gespräch, in dem der Umfang festgelegt wird. An den Tagen 1–13 (oder 1–27) laufen vier parallele Arbeitsstränge mit Schwerpunkt auf Souveränität und KI-Plattform. An Tag 14 (oder 28) folgt eine 60- bis 90-minütige Ergebnispräsentation für die Geschäftsleitung auf Basis des schriftlichen Berichts — Architekturoptionen, Souveränitätskontrollen, GPU-Strategie, Betriebsmodell und Roadmap für Phase 2. Phase 2 ist der Aufbau durch Ænix, typischerweise 3–12 Monate bis zur produktiven Plattform und Übergabe, je nach Umfang. Das vollständige Vorgehen Tag für Tag: **[Platform Readiness Assessment](/de/dienstleistungen/platform-readiness-assessment/)**.

<!-- /BLOCK 7 -->

---

<!-- BLOCK 8: PROOF -->

## Fallstudien zu GPU und KI

Vier GPU-Projekte sind in anonymisierter Form dokumentiert:

- **[GPU-Inferenz auf Bare Metal](/de/case-studies/bare-metal-gpu-inference/)** — eine Inferenz-Plattform mit 8×H100 auf eigener Hardware.
- **[Multi-Cloud-GPU für eine akademische Plattform](/de/case-studies/multicloud-academic-gpu/)** — eigene GPUs plus Burst-Kapazität.
- **[Universeller KI-Installer](/de/case-studies/ai-universal-installer/)** — ein wiederholbar installierbarer KI-Stack für einen Telekommunikationsbetreiber und Integrator.
- **[Interne Daten- und KI-Plattform](/de/case-studies/internal-data-and-ai-platform/)** — gemeinsame GPU-Pools mit interner Verrechnung pro Team.

{{< quote-carousel >}}

<!-- /BLOCK 8 -->

---

<!-- BLOCK 9: PRICING -->

## Preise und Projektumfang

Das Sovereign-AI-Projekt läuft in zwei Phasen.

<div class="pricing-cards-2">

### Assessment (14 oder 28 Tage)
Architekturoptionen, GPU-Strategie, Souveränitätskontrollen, Betriebsmodell, Roadmap für Phase 2. Festpreis.
**Auf Anfrage**

### Umsetzung in Phase 2
Aufbau der Sovereign-AI-Plattform durch Ænix. Fester Leistungsumfang oder nach Aufwand, je nach Anzahl und Komplexität der Workloads. Typischerweise 3–12 Monate.
**Angebot per RFP**

</div>

Folgt Phase 2 auf das Assessment, werden die Kosten des Assessments je nach Umfang auf das Umsetzungsprojekt angerechnet.

Die Ænix AI Platform wird per RFP angeboten. RFIs und RFPs nehmen wir über die üblichen Beschaffungskanäle entgegen; EU-Verträge laufen über die AENIX s.r.o. (Tschechien).

<!-- /BLOCK 9 -->

---

<!-- BLOCK 10: FAQ -->


<!-- /BLOCK 10 -->

---

<!-- BLOCK 11: BOTTOM CTA -->

<a id="discovery"></a>
## Starten Sie mit einem 30-minütigen Discovery-Gespräch

Wir prüfen die Passung, grenzen den Umfang auf Ihre Datenklasse und Ihre Aufsicht ein und legen fest, ob die 14- oder die 28-tägige Variante passt.

<div class="cta-row">
  <a class="cta-primary" href="/de/kontakt/">Gespräch vereinbaren</a>
</div>

Oder lesen Sie weiter:
- **[Leitfaden für den Betrieb privater LLMs](/de/blog/2026/05/private-llm-deployment-leitfaden/)** — praxisnahe Architektur
- **[Datensouveränität](/de/loesungen/data-sovereignty/)** — verwandter regulatorischer Auslöser
- **[DORA-Compliance](/de/loesungen/dora-compliance/)** — regulatorischer Auslöser im Finanzsektor
- **[Platform Readiness Assessment](/de/dienstleistungen/platform-readiness-assessment/)** — Vorgehen beim Assessment
- **[Cozystack](/de/produkte/cozystack/)** — die Plattform, auf der wir KI-Workloads betreiben

<!-- /BLOCK 11 -->

---

<!-- BLOCK 12: FOOTER TRUST STRIP -->

*Ænix hat Cozystack initiiert — ein CNCF-Sandbox-Projekt, eine CNCF Certified Kubernetes Distribution mit CNCF Kubernetes AI Conformance und OpenSSF Best Practices — und pflegt es gemeinsam mit Maintainern anderer Unternehmen. Wir bauen Sovereign-AI-Plattformen für GPU-Betreiber und regulierte Organisationen.*

<!-- /BLOCK 12 -->
