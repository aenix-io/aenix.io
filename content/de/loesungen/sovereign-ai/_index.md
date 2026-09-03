---
title: "Souveräne KI-Infrastruktur — GenAI auf Daten, die das Unternehmen nicht verlassen dürfen"
description: "Für regulierte Workloads ist KI nicht mehr nur ein Hyperscaler-Thema. Sensible Datenklassen, sektorale Vorgaben und die Ökonomie von Inferenz im großen..."
type: "page"
related_pages: ["/de/loesungen/data-sovereignty", "/de/loesungen/dora-compliance", "/products/cozystack"]
language: "de"
quick_facts_style: "rows"
faq_style: "rows"
hreflang_en: /solutions/sovereign-ai/
direct_answer: |
  **Souveräne KI-Infrastruktur bedeutet, dass GenAI, Inferenz, Fine-Tuning und Analytics auf kundeneigener Hardware in der gewählten Jurisdiktion und unter kundenkontrollierten Verschlüsselungsschlüsseln laufen — Trainingsdaten, Prompts, Completions und Embeddings verlassen den Perimeter nie. Sie richtet sich an Finanzdienstleister, Gesundheitswesen, öffentlichen Sektor und KI-Plattform-Betreiber, deren Datenklasse, Regulator (DORA, NIS2, sektorale Vorgaben) oder Inferenz-Ökonomie Hyperscaler-KI-Services nicht praktikabel macht. Aenix baut und betreibt diese Infrastruktur auf Cozystack, einem CNCF-Sandbox-Projekt unter Apache 2.0: eine Kubernetes-native KI-Plattform mit Multi-Tenant-GPU-Scheduling für A100, H100, H200, L40S und Blackwell, lokal betriebenen Open-Weight-Modellen (Llama, Mistral, Qwen, DeepSeek, Phi) und voller Kundengovernance.**
quick_facts:
  - label: "Was es ist"
    value: "KI-Infrastruktur, auf der GenAI, Inferenz und Fine-Tuning auf kundeneigener Hardware in der gewählten Jurisdiktion unter kundenkontrollierten Schlüsseln laufen — Daten verlassen den Perimeter nie."
  - label: "Lizenz"
    value: "Apache 2.0 (keine CPU-/Core-basierte Lizenzierung)"
  - label: "Status"
    value: "Cozystack ist ein CNCF-Projekt (Sandbox seit 28.02.2025; Incubating erwartet Spätsommer 2026)"
  - label: "Zielgruppe"
    value: "Finanzdienstleister, Gesundheitswesen, öffentlicher Sektor und KI-Plattform-Betreiber mit sensibler Datenklasse oder Air-gap-/Restricted-egress-Anforderung"
  - label: "Schlüsselfunktion"
    value: "Multi-Tenant-GPU-Scheduling für A100, H100, H200, L40S und Blackwell; lokal betriebene Open-Weight-Modelle (Llama, Mistral, Qwen, DeepSeek, Phi)"
  - label: "Regulatorik"
    value: "Unterstützt DORA, NIS2, sektorale Vorgaben und souveräne Cloud-Mandate durch Jurisdiktions- und Schlüsselkontrolle"
  - label: "Engagement"
    value: "Ænix AI Platform (produktisiert) plus Aenix-Aufbau und -Betrieb; für breitere souveräne Cloud kombinierbar mit Private Cloud Platform"
faq:
  - q: "Was unterscheidet souveräne KI von Hyperscaler-KI-Services?"
    a: "Bei souveräner KI läuft das Modell auf Ihrer Hardware in Ihrer Jurisdiktion, die Modellgewichte stehen unter Ihrer Kontrolle und Daten — Prompts, Completions, Embeddings, Trainingsdaten — verlassen Ihren Perimeter nie. Hyperscaler-Services verarbeiten Daten in fremder Infrastruktur und Jurisdiktion, was bei regulierten Datenklassen oder Air-gap-Anforderungen nicht praktikabel ist."
  - q: "Welche GPUs und Modelle werden unterstützt?"
    a: "Die Plattform bietet Multi-Tenant-GPU-Scheduling für A100, H100, H200, L40S und Blackwell. Betrieben werden Open-Weight-Modelle wie Llama, Mistral, Qwen, DeepSeek und Phi — lokal, mit Modellgewichten unter Ihrer Kontrolle."
  - q: "Hilft souveräne KI bei DORA- und NIS2-Compliance?"
    a: "Ja. Indem KI-Verarbeitung an die gewählte Jurisdiktion gebunden, unter kundenkontrollierten Schlüsseln betrieben und reproduzierbar sowie auditbereit gehalten wird, unterstützt souveräne KI-Infrastruktur DORA, NIS2, sektorale Vorgaben und souveräne Cloud-Mandate. Kombinierbar mit der Datensouveränitäts- und DORA-Compliance-Lösung."
  - q: "Auf welcher Technologie basiert die Plattform?"
    a: "Auf Cozystack, einem CNCF-Sandbox-Projekt unter Apache 2.0. Es nutzt KubeVirt für VMs und Container über eine Kubernetes-API, Cilium (eBPF) für Networking, LINSTOR/DRBD für Storage und Tenant-CRD-basierte Mandantenfähigkeit. Vector DB und Object Storage sind in der AI Platform inkludiert."
  - q: "Was kostet die Ænix Platform?"
    a: "Die Preisstufen sind Basic 1.250 $/Monat (10 Nodes), Standard 3.000 $, Plus 5.500 $ und Enterprise (Custom). Aenix bietet die produktisierte Ænix AI Platform plus Aufbau- und Betriebs-Services."
  - q: "Ist Air-gap- oder Restricted-egress-Betrieb möglich?"
    a: "Ja. Souveräne KI ist explizit für Air-gap- und Restricted-egress-Anforderungen ausgelegt: Inferenz läuft auf eigenen GPUs, Modelle und Daten bleiben innerhalb der kundenkontrollierten Umgebung, und das Modellverhalten lässt sich reproduzierbar und auditbereit halten."
---

<!-- BLOCK 1: HERO -->

**Für regulierte Workloads ist KI kein reines Hyperscaler-Thema mehr. Sensible Datenklassen, sektorale Vorgaben und die Ökonomie von Inferenz im großen Maßstab drängen Finanzdienstleister, Gesundheitswesen, öffentlichen Sektor und KI-Plattform-Betreiber zu souveräner KI-Infrastruktur — GenAI, Inferenz und Analytics auf der eigenen Hardware des Kunden, in der vom Kunden gewählten Jurisdiktion, unter den Verschlüsselungsschlüsseln des Kunden.**

Aenix baut und betreibt souveräne KI-Infrastruktur für Organisationen, deren Datenklasse, Regulator oder Wirtschaftlichkeit Hyperscaler-KI-Services unpraktikabel machen. Ergebnis: eine Architektur, ein Deployment und ein Betriebsmodell, das Ihr Team tatsächlich selbst betreiben kann.

> **Passt zu:** **[Ænix AI Platform](/de/produkte/ai-platform/)** — KI-Plattform-Automatisierung out-of-the-box (Multi-Tenant-GPU-Scheduling für H100/H200/L40S/A100/Blackwell, fertige Blueprints für Inferenz + Fine-Tuning + RAG, Vector DB + Object Storage inkludiert, Souveränitätskontrollen). Für regulierte KI-Workloads auf einer breiteren souveränen Cloud: kombinieren mit [Private Cloud Platform](/de/produkte/private-cloud-platform/). Kostenloser [Sovereign-AI-Architektur-Leitfaden →](/de/ressourcen/sovereign-ai-architektur-leitfaden/).

<div class="cta-row">
  <a class="cta-primary" href="/de/kontakt/">Discovery-Call buchen</a>
  <a class="cta-secondary" href="/de/blog/2026/05/private-llm-deployment-leitfaden/">Private-LLM-Leitfaden lesen →</a>
</div>

<div class="trust-badges">
NVIDIA-validierter GPU-Stack · Apache-2.0-Plattform · EU-Ingenieure · Air-gapped-Deployment unterstützt
</div>


<!-- /BLOCK 1 -->

---

<!-- BLOCK 2: WHO THIS IS FOR -->

## Wer souveräne KI braucht

Souveräne KI ist nicht für jeden Workload sinnvoll. Sie ist die richtige Antwort, wenn mindestens drei der folgenden Punkte zutreffen:

- **Die Datenklasse ist sensibel** — regulierte personenbezogene Daten, Finanzdatensätze, Gesundheitsakten, klassifizierte Informationen, internes geistiges Eigentum, das Modellanbietern nicht offengelegt werden darf.
- **Der Regulator bindet die KI-Verarbeitung an eine Jurisdiktion** — DORA, NIS2, sektorale Regeln, Souveräne-Cloud-Mandate (EU-Mitgliedstaaten, Kasachstan, mehrere APAC-Länder).
- **Inferenz im Maßstab ist beim Hyperscaler wirtschaftlich schmerzhaft** — GPU-Preise, Egress-Kosten und unvorhersehbare Ausgaben machen dedizierte Infrastruktur für 24/7-Inferenz-Workloads besser geeignet.
- **Das Modellverhalten muss reproduzierbar und auditierbar sein** — der Dialog mit dem Regulator verlangt "genau welches Modell diese Ausgabe erzeugt hat, mit welchen Gewichten, mit welchen Eingabedaten."
- **Air-gap oder eingeschränkter Egress ist erforderlich** — klassifizierte Workloads des öffentlichen Sektors, verteidigungsnahe oder kritische Infrastruktur.

Trifft keiner dieser Punkte zu, ist souveräne KI Over-Engineering. Treffen drei oder mehr zu, lautet die Frage nicht ob — sondern wie, bis wann und zu welchen Kosten.

<!-- /BLOCK 2 -->

---

<!-- BLOCK 3: WHAT SOVEREIGN AI ACTUALLY MEANS -->

## Was souveräne KI tatsächlich bedeutet

<div class="arch-section__fig">
<div class="diagram">
<div class="diagram__node"><b>GenAI, Inferenz, Fine-Tuning</b><div class="diagram__chips"><span>Open-Weight-Modelle</span><span>Llama, Mistral, Qwen</span></div></div>
<div class="diagram__conn">laufen auf</div>
<div class="diagram__node diagram__node--brand"><b>Cozystack auf kundeneigener Hardware</b><div class="diagram__chips"><span>AI Platform</span><span>A100 / H100 / H200 / L40S / Blackwell</span><span>kundenkontrollierte Schlüssel</span></div></div>
<div class="diagram__conn">halten</div>
<div class="diagram__node"><b>Daten im eigenen Perimeter</b><div class="diagram__chips"><span>verlassen den Perimeter nie</span><span>gewählte Jurisdiktion</span></div></div>
</div>
</div>

<div class="grid-2x2">

**1. Das Modell läuft auf Ihrer Hardware**
Inferenz (und, wo zutreffend, Training) auf GPUs, die Sie besitzen oder betreiben, nicht auf GPU-Instanzen oder Modell-APIs eines Hyperscalers. NVIDIA H100 / H200 / L40S / Blackwell, AMD MI-series oder passende Alternativen.

**2. Die Daten verlassen den Perimeter nie**
Trainingsdaten, Prompts, Completions, Embeddings und alle abgeleiteten Artefakte bleiben innerhalb der kundenkontrollierten Umgebung. Kein Traffic zu Modellanbieter-Endpunkten; keine Observability-Daten an SaaS-Anbieter, die außerhalb des Perimeters verarbeiten.

**3. Die Modellgewichte liegen unter Ihrer Kontrolle**
Open-Weight-Modelle (Llama, Mistral, Qwen, DeepSeek, Phi usw.), die lokal laufen; oder feinabgestimmte Varianten, deren Gewichte Ihnen gehören. Keine Modell-API mit Prompt-Routing in ein Modell eines Dritten.

**4. Die Plattform wird von Ihnen betrieben, unter Ihrer Governance**
Kubernetes-native KI-Plattform mit klarer Verantwortlichkeit für GPU-Scheduling, Autoscaling, Modellverwaltung und Audit-Trails. Keine Black-Box-Appliance mit anbieterkontrolliertem Betrieb.

</div>

Das ist keine "private KI" als Marketing-Tapete für einen SaaS-Endpunkt mit einer Datenschutzklausel. Es ist ein architektonisch souveräner Stack mit benannten Komponenten und nachweisbaren Kontrollen.

<!-- /BLOCK 3 -->

---

<!-- BLOCK 4: WHERE COMMON APPROACHES FAIL -->

<div class="band-fullbleed band-fullbleed--tint">
<div class="band-fullbleed__inner">

## Wo gängige KI-Plattform-Ansätze am Souveränitätstest scheitern

<div class="gap-cards-2">

**"Private Bereitstellung" einer SaaS-Modell-API**
Der Modellanbieter führt die Inferenz aus; die Daten fließen zum Endpunkt des Anbieters. Datenschutzklausel hin oder her — die Daten haben den Perimeter verlassen. Souveränität gescheitert.

**Hyperscaler-verwaltete GPU mit proprietären Diensten**
Die GPU steht in der richtigen Region, aber Modell-Orchestrierung, Observability und Storage-Anbindung binden den Workload an proprietäre Dienste. Die Exit-Kosten steigen; das Konzentrationsrisiko steigt.

**Single-Tenant-SaaS in einer "souveränen" Hyperscaler-Region**
Die Region ist souverän, aber die Service-Ebene wird vom Hyperscaler betrieben. Verschlüsselungsschlüssel, Control-Plane-Zugriff und Software-Update-Kanäle verbleiben bei einem nicht-souveränen Anbieter.

**Selbst gehostetes LLM ohne Plattform darunter**
Ein Team betreibt vLLM oder llama.cpp auf ein paar Bare-Metal-Servern und nennt das private KI. Funktioniert für einen PoC. Scheitert an Multi-Tenancy, GPU-Autoscaling, Audit-Bereitschaft oder betrieblicher Verfügbarkeit für die Produktion.

</div>

Die ehrliche Antwort ist meist eine Kubernetes-native KI-Plattform auf kundenkontrollierter Hardware mit einem definierten Betriebsmodell. Dieses Muster haben wir für KI/GPU-Betreiber und regulierte Unternehmen in Produktion ausgeliefert.

</div>
</div>

<!-- /BLOCK 4 -->

---

<!-- BLOCK 5: HOW AENIX HELPS -->

## Wie Aenix hilft

Das Sovereign-AI-Engagement läuft als Teil unseres **[Platform Readiness Assessment](/de/dienstleistungen/platform-readiness-assessment/)** mit Schwerpunkt auf den Workstreams Souveränität und KI-Plattform. Führt das Engagement zur Implementierung, liefert Aenix die Plattform End-to-End.

Die Assessment-Phase liefert:

- **Architekturoptionen** — konkrete Plattform-Designs für Inferenz / Training / Fine-Tuning in Ihrem Maßstab, inklusive Hardware-Sizing.
- **Souveränitätskontrollen** — Design für Datenresidenz, Schlüsselverwahrung und Audit-Trail, spezifisch für KI-Workloads.
- **GPU-Strategie** — Sizing für NVIDIA / AMD / Alternativen, Modell-zu-Hardware-Eignung, Skalierungsannahmen.
- **Betriebsmodell** — wer die Plattform betreibt, welche Self-Service-Oberfläche Produkt- / Data-Science-Teams erhalten, wie das On-Call-Modell aussieht.
- **Phase-2-Implementierungs-Roadmap** — von Aenix gelieferter Aufbau, mit Zeitplan, Aufwandsschätzungen und Erfolgskriterien.

Die Implementierungsphase liefert:

- **Cozystack-basierte KI-Plattform** mit KubeVirt für VMs, Kubernetes für Inferenz-Workloads, NVIDIA vGPU für VM-basierte GPU-Workloads, MIG / Time-Slicing / Passthrough für container-basierte GPU-Workloads.
- **Validiertes Model Serving** — vLLM, Triton oder Alternativen, passend zur Modellarchitektur.
- **Self-Service für Data-Science-Teams** — Provisionierungspfade, Observability, Audit-Trails.
- **Air-gapped-Deployment**, wo der Regulator es verlangt.

Zu den validierten GPU-Modellen zählen NVIDIA A100, H100, H200, L40S und Blackwell. Die konkrete Modelleignung wird im Assessment ermittelt.

<!-- /BLOCK 5 -->

---

<!-- BLOCK 6: WHY AENIX SPECIFICALLY -->

## Warum gerade Aenix

- **KI-Infrastruktur ist unser Tagesgeschäft.** Cozystack ist bei KI/GPU-Betreibern in der EU und Zentralasien in Produktion. Wir haben GPU-Plattformen ausgeliefert, die Inferenz- und Fine-Tuning-Workloads End-to-End tragen.
- **Keine Modellanbieter-Voreingenommenheit.** Wir haben keine kommerzielle Beziehung zu einem bestimmten LLM-Anbieter. Die Architektur empfiehlt das Open-Weight-Modell, das zu Ihrer Datenklasse, Ihrem Regulator und Ihrer Ökonomie passt — Llama, Mistral, Qwen, DeepSeek, Phi oder feinabgestimmte Varianten — und den dazu passenden Serving-Stack.
- **Open-Source-Plattform als Fundament.** [Cozystack](/de/produkte/cozystack/) ist ein CNCF-Projekt, das auf der vom Kunden gewählten Hardware in der gewählten Jurisdiktion läuft. Der Cluster-Level-Zugriff bleibt beim Kunden; wir arbeiten unter Ihrer Governance, nicht gegen sie.

<!-- /BLOCK 6 -->

---

<!-- BLOCK 7: TIMELINE -->

## Wie das Engagement abläuft

| Wann | Was | Ergebnis |
|---|---|---|
| **Tag 0** | 30-minütiger Discovery-Call (kostenlos) | Eignung bestätigen, KI-Workload-Scope eingrenzen, Sponsor + Data-Science-Lead identifizieren |
| **Tage 1-13 (oder 1-27)** | Vier parallele Workstreams; Schwerpunkt Souveränität + KI-Plattform | Architekturoptionen, GPU-Strategie, Souveränitätskontrollen, tägliche asynchrone Updates |
| **Tag 14 (oder 28)** | Executive-Readout (60-90 Min.) | Schriftlicher Bericht: Architektur, Souveränitätskontrollen, GPU-Strategie, Betriebsmodell, Phase-2-Roadmap |
| **Phase 2 (3-9 Monate)** | Implementierung — Aenix baut und übergibt | Produktive souveräne KI-Plattform |

Zur vollständigen Assessment-Methodik siehe **[Platform Readiness Assessment](/de/dienstleistungen/platform-readiness-assessment/)**.

<!-- /BLOCK 7 -->

---

<!-- BLOCK 8: PROOF -->

## Souveräne KI-Plattformen, die wir gebaut haben

{{< clients >}}

Wir haben KI-Plattformen für KI/GPU-Betreiber, Finanzdienstleister und Initiativen des öffentlichen Sektors in der EU und Zentralasien gebaut und betrieben. Zu den Workload-Mustern zählen Inferenz im Maßstab (24/7), Fine-Tuning, RAG-Pipelines und Multi-Tenant-Model-Serving.

{{< quote-carousel >}}
> *— {{NAME_1}}, {{TITLE_1}}*

Benannte Fallstudien sind auf dem Discovery-Call verfügbar, sofern die Kundengenehmigungen es zulassen.

<!-- /BLOCK 8 -->

---

<!-- BLOCK 9: PRICING -->

## Preise und Engagement-Umfang

Das Sovereign-AI-Engagement läuft in zwei Phasen.

<div class="pricing-cards-2">

### Assessment (14- oder 28-tägig)
Architekturoptionen, GPU-Strategie, Souveränitätskontrollen, Betriebsmodell, Phase-2-Roadmap. Festpreis.
**Auf Anfrage**

### Phase-2-Implementierung
Von Aenix gelieferter Aufbau der souveränen KI-Plattform. Fester Umfang oder Time-and-Materials, je nach Anzahl und Komplexität der Workloads. Typischerweise 3-9 Monate Laufzeit.
**Auf Anfrage**

</div>

Folgt Phase 2 auf das Assessment, werden die Assessment-Kosten je nach Umfang auf das Implementierungs-Engagement angerechnet.

Wir akzeptieren RFI / RFP über die üblichen Beschaffungskanäle in EU-Mitgliedstaaten und Kasachstan.

<!-- /BLOCK 9 -->

---

<!-- BLOCK 10: FAQ -->


<!-- /BLOCK 10 -->

---

<!-- BLOCK 11: BOTTOM CTA -->

<a id="discovery"></a>
## Beginnen Sie mit einem 30-minütigen Discovery-Call

Kostenlos. Keine Vorbereitung nötig. Wir bestätigen die Eignung, grenzen den KI-Workload-Scope auf Ihre Datenklasse und Ihren Regulator ein und sagen Ihnen, ob das 14-tägige oder das 28-tägige Assessment zu Ihrer Situation passt.

<div class="cta-row">
  <a class="cta-primary" href="/de/kontakt/">Discovery-Call buchen</a>
</div>

Oder lesen Sie weiter:
- **[Private-LLM-Deployment-Leitfaden](/de/blog/2026/05/private-llm-deployment-leitfaden/)** — praktische Architektur
- **[Datensouveränität](/de/loesungen/data-sovereignty/)** — angrenzender regulatorischer Auslöser
- **[DORA-Compliance](/de/loesungen/dora-compliance/)** — regulatorischer Auslöser im Finanzsektor
- **[Platform Readiness Assessment](/de/dienstleistungen/platform-readiness-assessment/)** — Assessment-Methodik
- **[Cozystack](/de/produkte/cozystack/)** — die Plattform, auf der wir KI-Workloads betreiben

<!-- /BLOCK 11 -->

---

<!-- BLOCK 12: FOOTER TRUST STRIP -->

*Aenix ist das Unternehmen hinter Cozystack — einem CNCF-Projekt, einer Kubernetes Certified Distribution mit OpenSSF Best Practices. Wir bauen souveräne KI-Plattformen für KI/GPU-Betreiber, Finanzdienstleister und Organisationen des öffentlichen Sektors in der EU, DACH-Region und Zentralasien.*

<!-- /BLOCK 12 -->
