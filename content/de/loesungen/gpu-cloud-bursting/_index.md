---
title: "GPU-Cloud-Bursting über Bare Metal, Public und souveräne Clouds"
seo_title: "GPU Cloud Bursting auf Kubernetes"
description: "Cloud Bursting für GPU-Workloads: von eigenem Bare Metal in Public- und souveräne Clouds bursten, unter einer Cluster API und mit anteiligem GPU-Sharing."
date: 2026-07-01
lastmod: 2026-07-01
page_type: "solution-landing"
language: "de"
quick_facts_style: "rows"
faq_style: "rows"
primary_keyword: "cloud bursting"
secondary_keywords: ["gpu cloud bursting", "multi cloud kubernetes", "multi cloud gpu"]
hreflang_de: "/de/loesungen/gpu-cloud-bursting/"
hreflang_en: "/solutions/gpu-cloud-bursting/"
related_pages:
  - /de/loesungen/private-llm/
  - /de/loesungen/sovereign-ai/
  - /de/loesungen/hybrid-cloud/
  - /de/produkte/ai-platform/
  - /de/dienstleistungen/ai-platform-build/
  - /de/branchen/universitaeten/
  - /de/case-studies/bare-metal-gpu-inference/
  - /de/roi-rechner/
  - /de/case-studies/multicloud-academic-gpu/
service:
  type: "GPU Cloud Bursting"
  areaServed: ["EU", "DACH"]
  audience: "AI/ML and research organizations"
direct_answer: |
  **Cloud Bursting bedeutet, stetige Workloads auf eigener Kapazität zu betreiben und Lastspitzen nur bei Bedarf in externe Clouds auszulagern. Für GPU-Arbeit heißt das: Eigenes Bare Metal bildet die Grundlast, und Inferenz- oder Training-Jobs bursten bei Spitzen in Public-Hyperscaler oder eine souveräne Cloud — danach wird die Zusatzkapazität wieder abgebaut. Ænix liefert das als Engineering-Projekt auf Cozystack und Cluster API, nicht als Funktion auf Knopfdruck: Eine einzige Cluster API umfasst Bare Metal, Hyperscaler und souveräne Cloud, mit anteiligem GPU-Sharing (HAMi), Autoscaling und einem WireGuard-Mesh. Das passt zu AI/ML-Teams, Forschungseinrichtungen und Plattformbetreibern, die elastische GPU-Kapazität ohne Hyperscaler-Lock-in brauchen — und hat in einem realen akademischen Projekt die GPU-Kosten in der souveränen Cloud um rund das Fünffache gesenkt.**
quick_facts:
  - label: "Was es ist"
    value: "Grundlast-GPU-Workloads auf eigener Kapazität betreiben und Spitzen bei Bedarf in externe Clouds bursten"
  - label: "Control Plane"
    value: "Eine Cluster API über Bare Metal, Public-Hyperscaler und souveräne Cloud"
  - label: "GPU-Effizienz"
    value: "Anteiliges GPU-Sharing (HAMi) — mehrere Jobs teilen sich eine physische Karte"
  - label: "Wirtschaftlichkeit"
    value: "Rund 5x günstigere GPU in einer souveränen Cloud gegenüber dem vorherigen Hyperscaler-Setup (akademischer Multi-Cloud-Fall)"
  - label: "Plattform"
    value: "Cozystack — CNCF-Sandbox-Projekt, Apache 2.0 (keine Lizenzkosten pro GPU oder CPU); geliefert als Projekt, nicht als Funktion auf Knopfdruck"
  - label: "Konnektivität"
    value: "WireGuard-Mesh verbindet Standorte und Clouds zu einem Pod- und Service-Netzwerk"
  - label: "Isolation"
    value: "Hosted Control Planes pro Tenant (Kamaji) für sichere Mandantenfähigkeit"
quick_facts_source: "[Cluster-API-Dokumentation](https://cluster-api.sigs.k8s.io/), [Cozystack](https://cozystack.io), [Fallstudie akademische Multi-Cloud-GPU](/de/case-studies/multicloud-academic-gpu/)"
faq:
  - q: "Was ist Cloud Bursting?"
    a: "Cloud Bursting ist ein hybrides Muster: Eine Anwendung läuft als Grundlast auf privater oder eigener Infrastruktur und weicht in eine externe Cloud aus, sobald die Nachfrage die lokale Kapazität übersteigt. Bei GPU-Workloads tragen Sie so die Kosten der Grundlast selbst und bezahlen zusätzliche GPUs nur während der Spitzen; danach wird die Kapazität wieder freigegeben."
  - q: "Wie funktioniert GPU-Bursting auf Kubernetes?"
    a: "Der Kubernetes Cluster Autoscaler erkennt GPU-Pods, die sich nicht einplanen lassen, und fügt Nodes dort hinzu, wo sie gebraucht werden — auf Bare Metal, beim Hyperscaler oder in der souveränen Cloud, alles hinter einer Cluster API. Ein CNI und ein WireGuard-Mesh binden die neuen Nodes in ein gemeinsames Netzwerk ein, der GPU Operator macht ihre GPUs einplanbar, und nach der Spitze werden die zusätzlichen Nodes wieder abgebaut."
  - q: "Kann ich in eine souveräne Cloud bursten?"
    a: "Ja. Eine souveräne oder regionale Cloud kann wie jedes andere Ziel als Burst-Target dienen. Das ist wichtig, wenn eine Aufsichtsbehörde die GPU-Verarbeitung an eine Rechtsordnung bindet oder wenn souveräne GPU-Kapazität schlicht günstiger ist. In unserem akademischen Multi-Cloud-Projekt haben wir eine souveräne OpenStack-Cloud als Burst-Target ergänzt und dort Tenant-Cluster aus einem einzigen Manifest betrieben."
  - q: "Warum ist das günstiger als ein Hyperscaler?"
    a: "Sie besitzen die Grundlast, statt sie rund um die Uhr zu mieten, teilen physische GPUs per anteiligem Scheduling zwischen Jobs und bursten in die jeweils günstigste Kapazität — auch in souveräne Clouds. Im akademischen Projekt war GPU-Kapazität in der souveränen Cloud rund 5x günstiger als im vorherigen Hyperscaler-Setup. Rechnen Sie Ihre eigenen Zahlen mit den ROI- und TCO-Rechnern durch."
  - q: "Was bedeutet GPU-as-a-Service in diesem Zusammenhang?"
    a: "GPU-as-a-Service heißt hier: Ihre eigene Plattform stellt Teams GPUs als elastische Self-Service-Ressource bereit — einen Bruchteil einer Karte oder einen ganzen Node anfordern, eingeplant bekommen, nach Gebrauch freigeben —, statt einen Managed-GPU-Service bei einem Hyperscaler einzukaufen. Control Plane, Wirtschaftlichkeit und Datenresidenz bleiben bei Ihnen."
  - q: "Muss ich meine bestehende Hardware oder Cloud aufgeben?"
    a: "Nein. Cloud Bursting ergänzt, was vorhanden ist. Eigenes Bare Metal bleibt die Grundlast, bestehender Storage (etwa ein externes Ceph) bleibt, wo er ist, und Public- oder souveräne Clouds werden als Burst-Targets angebunden. Nichts erzwingt eine vollständige Migration — Sie erweitern Kapazität dort und dann, wo Sie sie brauchen."
---

**Die Grundlast besitzen, nur die Spitzen mieten. Mit Cloud Bursting betreiben Sie stetige GPU-Workloads auf Hardware, die Sie selbst kontrollieren, und lagern Inferenz- oder Training-Spitzen bei Bedarf in Public- oder souveräne Clouds aus — danach wird die Zusatzkapazität wieder abgebaut. Ænix baut das auf einer einzigen Kubernetes-Plattform, damit Ihre Teams elastische GPU-Kapazität erhalten: ohne Hyperscaler-Lock-in, ohne intransparente Abrechnung und ohne vollständige Migration.**

Bursting liefern wir als Projekt auf Cozystack und Cluster API, zugeschnitten auf Ihre Burst-Targets; es ist keine Funktion, die Sie in einem Proof of Concept einfach einschalten.

> **Passt zu:** **[Ænix AI Platform](/de/produkte/ai-platform/)** — mandantenfähiges GPU-Scheduling und anteiliges Sharing (HAMi) für Inferenz und Fine-Tuning; Angebot per RFP. Für die elastische Self-Service-Cloud darunter kombinieren Sie sie mit der **[Public Cloud Platform](/de/produkte/public-cloud-platform/)**. Rechnen Sie die Zahlen mit den **[ROI- und TCO-Rechnern](/de/roi-rechner/)** durch oder sehen Sie sich das [Webinar zum Aufbau einer eigenen GPU-Cloud](/webinars/build-your-gpu-cloud/) an (Englisch). Für Verantwortliche von ML-Plattformen: der [Leitfaden für Leiter AI/ML](/de/fuer/leiter-ai-ml/).

<div class="cta-row">
  <a class="cta-primary" href="/de/kontakt/">Gespräch vereinbaren</a>
  <a class="cta-secondary" href="/de/case-studies/multicloud-academic-gpu/">Zur Fallstudie →</a>
</div>


---

<div class="band-fullbleed band-fullbleed--tint">
<div class="band-fullbleed__inner">

## Was Sie bekommen

GPU-Cloud-Bursting auf Cozystack ist ein elastischer GPU-Pool, verteilt über die Infrastruktur, die Sie bereits haben, und die Clouds, die Sie erreichen wollen.

- **Bursting in Public- und souveräne Clouds.** Grundlast-Workloads laufen auf eigenem Bare Metal. Bei Lastspitzen kommt Kapazität bei einem Public-Hyperscaler, in einer souveränen Cloud oder in beiden hinzu — und wird danach wieder freigegeben. Eine souveräne Cloud kann ein vollwertiges Burst-Target sein, wenn eine Aufsichtsbehörde die GPU-Verarbeitung an eine Rechtsordnung bindet oder wenn ihre GPUs schlicht günstiger sind.
- **Anteiliges GPU-Sharing.** Mit HAMi auf dem NVIDIA GPU Operator teilen sich mehrere Jobs eine physische Karte. Ein Notebook, ein kleiner Inferenz-Endpoint und ein Batch-Job laufen gemeinsam auf einer GPU, statt jeweils ein ganzes Gerät zu belegen.
- **Eine Cluster API.** Bare Metal, Hyperscaler und souveräne Cloud liegen hinter einer einzigen Cluster API. Teams fordern GPUs überall auf dieselbe Weise an; die Plattform entscheidet, wo sie landen.
- **Autoscaling, das GPUs berücksichtigt.** Der Cluster Autoscaler fügt GPU-Nodes hinzu, wenn sich Pods nicht einplanen lassen, und entfernt sie, sobald die Spitze vorbei ist — Sie zahlen für Spitzenkapazität nur, solange die Spitze dauert.
- **Ein verschlüsseltes Mesh über alle Standorte.** Ein WireGuard-Mesh verbindet jeden Standort und jede Cloud zu einem Pod- und Service-Netzwerk; neue Nodes registrieren sich beim Hochfahren selbst.
- **Isolation pro Tenant.** Jeder Tenant erhält eine eigene Hosted Control Plane, sodass beliebiger Nutzercode und mandantenübergreifendes GPU-Sharing die Plattform nicht gefährden.

### Für wen ist das gedacht?

Für AI/ML-Teams mit stark schwankendem Trainings- und Inferenzbedarf, für Forschungseinrichtungen und Universitäten mit gemeinsam genutzten GPUs für Lehre und Experimente sowie für Plattformbetreiber, die GPU-as-a-Service anbieten wollen, ohne einen Hyperscaler weiterzuverkaufen. Ist Ihr GPU-Bedarf gleichmäßig und planbar, brauchen Sie womöglich kein Bursting — dann dimensionieren Sie für die Grundlast und belassen es dabei. Schwankt er stark, liegt im Bursting der wirtschaftliche Hebel.

</div>
</div>

---

## So funktioniert es

Das Muster setzt sich aus Standardbausteinen von Kubernetes zusammen, die wir durchgängig aufbauen und betreiben.

<div class="arch-section__fig">
<div class="diagram">
<div class="diagram__node"><b>Eigene Bare-Metal-GPUs</b><div class="diagram__chips"><span>Grundlast</span><span>Anteiliges Sharing (HAMi)</span></div></div>
<div class="diagram__conn">vereint durch</div>
<div class="diagram__node diagram__node--brand"><b>Cozystack / Ænix</b><div class="diagram__chips"><span>Eine Cluster API</span><span>Cluster Autoscaler</span></div></div>
<div class="diagram__conn">burstet Spitzen in</div>
<div class="diagram__node"><b>Public und souveräne Cloud</b><div class="diagram__chips"><span>Elastische GPUs, kein Lock-in</span></div></div>
</div>
</div>

- **Cluster Autoscaler** erkennt GPU-Pods, die sich nicht einplanen lassen, und stellt Nodes auf dem passenden Ziel bereit — Bare Metal, Hyperscaler oder souveräne Cloud — über die [Cluster API](https://cluster-api.sigs.k8s.io/), den deklarativen Kubernetes-Standard für den Lebenszyklus von Clustern und Maschinen. Ist die Warteschlange abgearbeitet, werden die Nodes wieder entfernt.
- **Cilium und ein WireGuard-Mesh (Kilo)** liefern das CNI und ein verschlüsseltes Overlay über Clouds hinweg. Frisch autoskalierte Nodes melden sich selbst im Mesh an und erreichen gemeinsamen Storage ohne manuelle Schritte — das [Kubernetes-Netzwerkmodell](https://kubernetes.io/docs/concepts/services-networking/) behandelt sie, als wären sie lokal.
- **NVIDIA GPU Operator** übernimmt Treiberinstallation und Geräteerkennung auf jedem Node, und HAMi ergänzt Time-Slicing, sodass eine Karte mehrere Pods bedient; auf MIG-fähigen Karten stellt der Operator zudem MIG-Partitionen als einplanbare Ressourcen bereit.
- **Talos Linux und Kamaji** bilden die Basis: ein unveränderliches, per API verwaltetes Betriebssystem für die Nodes und Hosted Control Planes für Tenant-Cluster, sodass jeder Tenant von vornherein isoliert ist.

Es sind dieselben offenen, an der [CNCF](https://www.cncf.io/) ausgerichteten Bausteine, auf die sich das Cloud-Native-Ökosystem verständigt hat — keine proprietäre Orchestrierungsschicht, kein Control-Plane-Aufschlag pro GPU.

---

## Die Wirtschaftlichkeit

GPUs sind die knappe, teure Ressource, und ihre Preise stehen unter Druck: Sie schwanken stark und sind in kurzen Zeiträumen deutlich gestiegen. Die Grundlast zu besitzen und nur die Spitzen zu bursten — statt GPUs rund um die Uhr bei einem Hyperscaler zu mieten — ist genau der Punkt, an dem sich dieser Druck auffangen lässt.

In der **[Fallstudie zur akademischen Multi-Cloud](/de/case-studies/multicloud-academic-gpu/)** hat ein europäischer SaaS-Anbieter für akademisches Computing sein Backend und die Nutzer-Workloads von einem Public-Hyperscaler auf eigenes Bare Metal mit Cozystack verlagert, eine einzige Cluster API über Bare Metal, einen Hyperscaler und eine souveräne OpenStack-Cloud beibehalten und GPU-Kapazität bei Bedarf per Bursting hinzugenommen. GPUs in der souveränen Cloud waren rund **5x günstiger** als im vorherigen Hyperscaler-Setup — bei intaktem anteiligem Sharing und intakter Isolation pro Tenant und ohne Ausfallzeit für Tausende aktive Nutzer.

Wie viel Sie sparen, hängt von Ihrem Mix aus Grundlast, Spitzen und Burst-Target ab. Modellieren Sie ihn mit den **[ROI- und TCO-Rechnern](/de/roi-rechner/)**, bevor Sie sich auf Hardware oder einen Vertrag für ein Burst-Target festlegen.


---

*Ænix hat [Cozystack](https://cozystack.io) entwickelt und pflegt es gemeinsam mit Maintainern anderer Unternehmen — ein CNCF-Sandbox-Projekt (der Antrag auf CNCF Incubation befindet sich in der Due-Diligence-Prüfung) unter Apache 2.0, seit September 2026 im Programm CNCF Kubernetes AI Conformance. Ænix verkauft auf dieser Engine drei Plattformen: Public Cloud, Private Cloud und AI.*
