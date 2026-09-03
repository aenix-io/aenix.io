---
title: "GPU-Cloud-Bursting und Multi-Cloud-GPU-as-a-Service"
description: "Cloud Bursting für GPU-Workloads: von eigener Bare-Metal-Basis in Public- und Souveräne Clouds bursten, unter einer Cluster API, mit fraktionalem GPU-Sharing."
date: 2026-07-01
lastmod: 2026-07-01
page_type: "solution-landing"
language: "de"
quick_facts_style: "rows"
faq_style: "rows"
primary_keyword: "cloud bursting"
secondary_keywords: ["gpu as a service", "multi cloud kubernetes"]
hreflang_de: "/de/loesungen/gpu-cloud-bursting/"
hreflang_en: "/solutions/gpu-cloud-bursting/"
related_pages:
  - /de/loesungen/sovereign-ai/
  - /de/loesungen/hybrid-cloud/
  - /de/produkte/ai-platform/
  - /de/dienstleistungen/ai-platform-build/
  - /de/branchen/universitaeten/
  - /de/roi-rechner/
  - /de/case-studies/multicloud-academic-gpu/
service:
  type: "GPU Cloud Bursting"
  areaServed: ["EU", "DACH"]
  audience: "AI/ML and research organizations"
direct_answer: |
  **Cloud Bursting bedeutet, stetige Workloads auf eigener Kapazität zu betreiben und Lastspitzen nur bei Bedarf in externe Clouds auszulagern. Für GPU-Arbeit heißt das: eigene Bare-Metal-Kapazität als Basis nutzen und Inferenz- oder Training-Jobs bei Spitzen in Public-Hyperscaler oder eine souveräne Cloud bursten — und die Zusatzkapazität danach wieder abbauen. Aenix liefert das als GPU-as-a-Service auf Ihrer eigenen Plattform: eine einzige Cluster API spannt Bare Metal, Hyperscaler und souveräne Cloud zusammen, mit fraktionalem GPU-Sharing, Autoscaling und einem WireGuard-Mesh. Es passt für AI/ML-Teams, Forschungseinrichtungen und Plattform-Betreiber, die elastische GPU ohne Hyperscaler-Lock-in brauchen — und senkte in einem realen akademischen Fall die GPU-Kosten in der souveränen Cloud um rund das Fünffache.**
quick_facts:
  - label: "Was es ist"
    value: "Basis-GPU-Workloads auf eigener Kapazität betreiben und Spitzen bei Bedarf in externe Clouds bursten"
  - label: "Control Plane"
    value: "Eine Cluster API über Bare Metal, Public-Hyperscaler und souveräne Cloud"
  - label: "GPU-Effizienz"
    value: "Fraktionales GPU-Sharing (HAMi) — mehrere Jobs teilen sich eine physische Karte"
  - label: "Ökonomie"
    value: "~5x günstigere GPU in einer souveränen Cloud gegenüber dem vorherigen Hyperscaler-Setup (akademischer Multi-Cloud-Fall)"
  - label: "Plattform"
    value: "Cozystack — CNCF-Projekt, Apache 2.0 (keine Lizenz pro GPU oder pro CPU)"
  - label: "Konnektivität"
    value: "WireGuard-Mesh verbindet Standorte und Clouds zu einem Pod- und Service-Netzwerk"
  - label: "Isolation"
    value: "Pro-Tenant Hosted Control Planes (Kamaji) für sichere Multi-Tenancy"
quick_facts_source: "[Cluster API Doku](https://cluster-api.sigs.k8s.io/), [Cozystack](https://cozystack.io), [akademische Multi-Cloud-GPU-Case-Study](/de/case-studies/multicloud-academic-gpu/)"
faq:
  - q: "Was ist Cloud Bursting?"
    a: "Cloud Bursting ist ein hybrides Muster, bei dem eine Anwendung auf privater oder eigener Infrastruktur als Basis läuft und dann in eine externe Cloud burstet, sobald die Nachfrage die lokale Kapazität übersteigt. Bei GPU-Workloads besitzen Sie so die Grundlast-Kosten und zahlen zusätzliche GPU nur während der Spitzen, die danach wieder freigegeben werden."
  - q: "Wie funktioniert GPU-Bursting auf Kubernetes?"
    a: "Der Kubernetes Cluster Autoscaler erkennt nicht planbare GPU-Pods und fügt Nodes dort hinzu, wo sie gebraucht werden — Bare Metal, Hyperscaler oder souveräne Cloud — alle hinter einer Cluster API. Eine CNI plus WireGuard-Mesh verbindet die neuen Nodes zu einem Netzwerk, der GPU-Operator macht ihre GPUs planbar, und die Zusatz-Nodes werden nach der Spitze wieder abgebaut."
  - q: "Kann ich in eine souveräne Cloud bursten?"
    a: "Ja. Eine souveräne oder regionale Cloud kann wie jedes andere Ziel als Burst-Target dienen — wichtig, wenn ein Regulator GPU-Verarbeitung an eine Jurisdiktion bindet oder wenn souveräne GPU-Kapazität schlicht günstiger ist. In unserem akademischen Multi-Cloud-Fall haben wir eine souveräne OpenStack-Cloud als Burst-Target ergänzt und Tenant-Cluster dort aus einem einzigen Manifest betrieben."
  - q: "Wieso ist das günstiger als ein Hyperscaler?"
    a: "Sie besitzen die Grundlast, statt sie rund um die Uhr zu mieten, teilen physische GPUs per fraktionalem Scheduling über Jobs hinweg und bursten in die günstigste Kapazität — inklusive souveräner Clouds. Im akademischen Fall war die GPU in der souveränen Cloud rund 5x günstiger als das vorherige Hyperscaler-Setup. Rechnen Sie Ihre eigenen Zahlen mit den ROI- und TCO-Rechnern durch."
  - q: "Was bedeutet GPU-as-a-Service in diesem Kontext?"
    a: "GPU-as-a-Service heißt hier, dass Ihre eigene Plattform GPUs für Teams als elastische Self-Service-Ressource bereitstellt — einen Bruchteil einer Karte oder einen ganzen Node anfordern, geplant bekommen, nach Gebrauch freigeben — statt einen Managed-GPU-Service bei einem Hyperscaler zu kaufen. Control Plane, Ökonomie und Datenresidenz bleiben bei Ihnen."
  - q: "Muss ich meine bestehende Hardware oder Cloud aufgeben?"
    a: "Nein. Cloud Bursting ist additiv. Eigenes Bare Metal bleibt die Basis, bestehender Storage (etwa externes Ceph) bleibt an Ort und Stelle, und Public- oder souveräne Clouds werden als Burst-Targets angebunden. Nichts erzwingt eine vollständige Migration — Sie erweitern Kapazität dort und dann, wo Sie sie brauchen."
---

# GPU-Cloud-Bursting: Multi-Cloud-GPU-as-a-Service auf Ihrer eigenen Plattform

**Die Basis besitzen, nur die Spitzen mieten. Cloud Bursting lässt Sie stetige GPU-Workloads auf selbst kontrollierter Hardware betreiben und Inferenz- oder Training-Spitzen bei Bedarf in Public- oder souveräne Clouds auslagern — und die Zusatzkapazität danach wieder abbauen. Aenix baut das als GPU-as-a-Service auf einer einzigen Kubernetes-Plattform, damit Ihre Teams elastische GPU erhalten — ohne Hyperscaler-Lock-in, ohne intransparente Abrechnung, ohne komplette Migration.**

> **Passt zu:** **[Ænix AI Platform](/de/produkte/ai-platform/)** — Multi-Tenant-GPU-Scheduling, fraktionales Sharing und fertige Blueprints für Inferenz und Fine-Tuning. Für die elastische Self-Service-Cloud darunter: kombinieren mit **[Public Cloud Platform](/de/produkte/public-cloud-platform/)**. Rechnen Sie die Zahlen mit den **[ROI- & TCO-Rechnern](/de/roi-rechner/)** durch.

<div class="cta-row">
  <a class="cta-primary" href="/de/kontakt/">Discovery-Call buchen</a>
  <a class="cta-secondary" href="/de/case-studies/multicloud-academic-gpu/">Case Study ansehen →</a>
</div>


---

<div class="band-fullbleed band-fullbleed--tint">
<div class="band-fullbleed__inner">

## Was Sie bekommen

GPU-Cloud-Bursting auf der Aenix-Plattform ist ein elastischer GPU-Pool, verteilt über die Infrastruktur, die Sie bereits haben, und die Clouds, die Sie erreichen wollen.

- **Bursten in Public- und souveräne Clouds.** Basis-Workloads laufen auf eigenem Bare Metal. Bei Lastspitzen wird Kapazität in einem Public-Hyperscaler, einer souveränen Cloud oder beiden ergänzt — und danach freigegeben. Eine souveräne Cloud kann ein vollwertiges Burst-Target sein, wenn ein Regulator GPU-Verarbeitung an eine Jurisdiktion bindet oder ihre GPUs schlicht günstiger sind.
- **Fraktionales GPU-Sharing.** Mit HAMi über dem NVIDIA-GPU-Operator teilen sich mehrere Jobs eine physische Karte. Ein Notebook, ein kleiner Inferenz-Endpoint und ein Batch-Job koexistieren auf einer GPU, statt jeweils ein ganzes Gerät zu belegen.
- **Eine Cluster API.** Bare Metal, Hyperscaler und souveräne Cloud liegen hinter einer einzigen Cluster API. Teams fordern GPU überall gleich an; die Plattform entscheidet, wo sie landet.
- **GPU-bewusstes Autoscaling.** Der Cluster Autoscaler fügt GPU-Nodes hinzu, wenn Pods nicht planbar sind, und entfernt sie nach der Spitze — Sie zahlen Spitzenkapazität nur, solange die Spitze dauert.
- **Ein verschlüsseltes Mesh über Standorte.** Ein WireGuard-Mesh verbindet jeden Standort und jede Cloud zu einem Pod- und Service-Netzwerk, wobei neue Nodes sich beim Hochfahren selbst registrieren.
- **Pro-Tenant-Isolation.** Jeder Tenant erhält eine eigene Hosted Control Plane, sodass beliebiger User-Code und Multi-Tenant-GPU-Sharing die Plattform nicht kompromittieren.

### Für wen ist das?

AI/ML-Teams mit sprunghaftem Training- und Inferenz-Bedarf, Forschungseinrichtungen und Universitäten mit geteilten GPU für Kurse und Experimente sowie Plattform-Betreiber, die GPU-as-a-Service anbieten wollen, ohne einen Hyperscaler weiterzuverkaufen. Ist Ihr GPU-Bedarf flach und planbar, brauchen Sie womöglich kein Bursting — kaufen Sie für die Grundlast und gut. Springt er, liegt in Bursting die Ökonomie.

</div>
</div>

---

## Wie es funktioniert

Das Muster besteht aus Standard-Kubernetes-Primitiven, zusammengesetzt und durchgängig betrieben.

<div class="arch-section__fig">
<div class="diagram">
<div class="diagram__node diagram__node--brand"><b>Eine Cluster API</b><div class="diagram__chips"><span>Cozystack</span><span>Autoscaling</span><span>WireGuard-Mesh</span></div></div>
<div class="diagram__conn">betreibt die Basis auf</div>
<div class="diagram__node"><b>Eigenes Bare Metal</b><div class="diagram__chips"><span>Grundlast</span><span>Basis-Workloads</span></div></div>
<div class="diagram__conn">burstet Spitzen in</div>
<div class="diagram__node"><b>Public- & souveräne Cloud</b><div class="diagram__chips"><span>Burst-Target</span></div></div>
</div>
</div>

- **Cluster Autoscaler** erkennt GPU-Pods, die nicht geplant werden können, und provisioniert Nodes auf dem richtigen Ziel — Bare Metal, Hyperscaler oder souveräne Cloud — über die [Cluster API](https://cluster-api.sigs.k8s.io/), Kubernetes' deklarativen Standard für den Lebenszyklus von Clustern und Maschinen. Leert sich die Queue, werden die Nodes entfernt.
- **Cilium plus WireGuard-Mesh (Kilo)** liefern die CNI und ein verschlüsseltes Overlay über Clouds hinweg. Frisch autoskalierte Nodes melden sich ins Mesh und erreichen geteilten Storage ohne manuelle Schritte — das [Kubernetes-Netzwerkmodell](https://kubernetes.io/docs/concepts/services-networking/) behandelt sie, als wären sie lokal.
- **NVIDIA-GPU-Operator** übernimmt Treiber-Installation, Device-Discovery und Passthrough auf jedem Node, und HAMi ergänzt fraktionales Sharing, sodass eine Karte mehrere Pods bedient.
- **Talos Linux und Kamaji** bilden die Basis: ein immutables, API-verwaltetes OS für die Nodes und Hosted Control Planes für Tenant-Cluster, sodass jeder Tenant von Grund auf isoliert ist.

Das ist dieselbe Klasse offener, [CNCF](https://www.cncf.io/)-naher Bausteine, auf die sich das Cloud-Native-Ökosystem stützt — keine proprietäre Orchestrierungsschicht, keine Control-Plane-Abgabe pro GPU.

---

## Die Ökonomie

GPU ist die knappe, teure Ressource, und ihr Preis steht unter Druck: GPU-Preise sind volatil und sind in kurzen Zeiträumen stark gestiegen. Die Basis zu besitzen und die Spitzen zu bursten — statt GPU rund um die Uhr in einem Hyperscaler zu mieten — ist genau der Punkt, an dem dieser Druck aufgefangen wird.

In der **[akademischen Multi-Cloud-Case-Study](/de/case-studies/multicloud-academic-gpu/)** verlagerte ein europäischer akademischer Computing-SaaS sein Backend und die User-Workloads von einem Public-Hyperscaler auf eigenes Bare Metal auf Cozystack, behielt eine einzige Cluster API über Bare Metal, einen Hyperscaler und eine souveräne Schweizer OpenStack-Cloud und burstete GPU bei Bedarf. GPU in der souveränen Cloud war rund **5x günstiger** als das vorherige Hyperscaler-Setup — bei intaktem fraktionalem Sharing und Pro-Tenant-Isolation und ohne Ausfallzeit für Tausende aktiver Nutzer.

Ihr Mix aus Grundlast, Spitze und Burst-Target entscheidet über die Ersparnis. Modellieren Sie ihn mit den **[ROI- & TCO-Rechnern](/de/roi-rechner/)**, bevor Sie sich auf Hardware oder einen Burst-Target-Vertrag festlegen.


---

*Aenix ist das Team hinter [Cozystack](https://cozystack.io) — einem CNCF-Projekt (heute Sandbox; Incubating erwartet für Spätsommer 2026), Apache 2.0. Aenix kommerzialisiert es als Ænix Platform, als drei Plattformen auf einer Engine: Public Cloud, Private Cloud und AI — kombinierbar statt sich gegenseitig ausschließend. Wir bauen Multi-Cloud-GPU-Plattformen für AI/ML-, Forschungs- und Plattform-Betreiber-Organisationen in der EU und DACH.*
