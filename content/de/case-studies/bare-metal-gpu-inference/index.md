---
title: "GPU-Inferenz auf eigenem Bare Metal"
description: "Eine Foto/Video-App verlagerte KI-Inferenz on-premise auf eigene GPU-Infrastruktur: 8xH100 auf Cozystack, 2-3x GPU-Effizienz, in ~2 Monaten produktiv."
hero_subtitle: "8xH100-Inferenz von der Miet-GPU-Cloud auf eigenes Bare Metal"
date: 2026-06-20
lastmod: 2026-06-20
page_type: "case-study"
language: "de"
hreflang_en: "/case-studies/bare-metal-gpu-inference/"
images: ["img/og/og-case-bare-metal-gpu-inference.png"]
primary_keyword: "KI-Inferenz on-premise"
secondary_keywords:
  - "eigene GPU-Infrastruktur"
  - "souveräne KI-Infrastruktur"
  - "GPU-Inferenz"
  - "KubeVirt GPU-Passthrough"
  - "GPU-Cloud-Kosten senken"
related_pages:
  - /de/produkte/aenix-platform/ai-ml-edition/
  - /de/loesungen/sovereign-ai/
  - /de/loesungen/gpu-cloud-bursting/
  - /de/loesungen/cloud-repatriation/
faq:
  - q: "Läuft Cozystack auch auf generischem k3s und nicht nur auf Talos?"
    a: "Ja. Die Referenzinstallation von Cozystack läuft auf dem immutable Talos Linux, doch die Plattform ist nicht daran gebunden. Als der Hosting-Anbieter nur SSH-Zugang ohne Konsole oder IPMI bereitstellte — womit eine Talos-Installation unmöglich ist — haben wir ein generisches Cozystack auf k3s über Ubuntu ausgerollt. An Verwaltbarkeit ging nichts verloren: LINSTOR, Cilium, KubeVirt, GPU-Passthrough und Monitoring funktionieren identisch."
  - q: "Wie werden die GPUs pro Mandant isoliert?"
    a: "Alle acht H100 des Knotens werden per KubeVirt-PCI-Passthrough (vfio-pci) an eine einzige isolierte Mandanten-VM durchgereicht. Der Mandant erhält ein eigenes etcd, eigene Secrets, eine eigene Registry und eigenes Monitoring und betreibt in der VM ein verschachteltes Kubernetes mit dem NVIDIA GPU Operator. Die ML-Workloads des Kunden teilen sich niemals einen Kernel oder eine Control Plane mit fremden Workloads."
  - q: "Vermeidet dieser Ansatz Vendor-Lock-in?"
    a: "Das war eine ausdrückliche Anforderung. Der Stack ist vollständig Open Source und CNCF-orientiert — Cozystack, Kubernetes, KubeVirt, LINSTOR, Cilium/Kube-OVN, KEDA, VictoriaMetrics. Es gibt keine proprietäre Control Plane und keine Managed-Cloud-API, hinter der man gefangen wäre. Der Kunde kann dieselben Manifeste jederzeit auf andere Hardware oder zu einem anderen Anbieter verschieben."
  - q: "Wie funktioniert das Autoscaling für Inferenz-Traffic?"
    a: "Zwei Pipelines laufen parallel. Asynchrone Jobs gelangen über ein API-Gateway in eine RabbitMQ-Queue, werden von GPU-ML-Workern verarbeitet und kehren per Webhook zurück. Synchrone HTTP-Inferenz wird mit KEDA autoskaliert, gesteuert über die Request-Rate (RPS) des nginx-ingress, die in VictoriaMetrics erfasst wird — so skalieren die Worker-Pods mit dem Live-Traffic hoch und runter."
  - q: "GPU-Inferenz auf eigenem Bare Metal statt gemieteter GPU-Cloud — wann lohnt es sich?"
    a: "Sobald die Inferenzlast stabil und vorhersehbar ist, liefert eigene Hardware typischerweise die 2-3-fache GPU-Effizienz gegenüber stündlicher Abrechnung in einer öffentlichen GPU-Cloud, weil man keine ungenutzte Reserve und keine Marge mehr mitbezahlt. Zugleich bleiben Modellgewichte und Nutzerdaten auf einer Infrastruktur, die man selbst kontrolliert. Gemietete Kapazität lohnt sich weiterhin für kurzlebige Spitzen und Experimente; beide Modelle ergänzen sich."
---

<div class="cs-tags">
  <span class="cs-tag">Souveräne KI</span>
  <span class="cs-tag">8xH100 · KubeVirt</span>
  <span class="cs-tag">GPU-Repatriierung</span>
  <span class="cs-tag">Inferenz im Maßstab</span>
  <span class="cs-tag">Kein Lock-in</span>
</div>

**Ein schnell wachsender Anbieter einer Mobile-App für die Foto- und Video-Bearbeitung im Massenmarkt verlagerte seine KI-Inferenz von einer stundenweise gemieteten GPU-Cloud auf einen eigenen Bare-Metal-Server mit 8xH100 — und behielt dabei die gewohnte Cloud-UX (API, Queues, Autoscaling, Modell-Storage, Monitoring), nun aber auf selbst kontrollierter Hardware. Auf Cozystack, betrieben auf generischem Linux/k3s, erreichte die Plattform in rund zwei Monaten den Produktivbetrieb und liefert die 2-3-fache GPU-Effizienz gegenüber der bisherigen Miete.**

<div class="cs-stats">
  <div class="cs-stat"><div class="cs-stat__num">~2 Monate</div><div class="cs-stat__label">vom Kickoff bis zum Produktiv-Traffic auf eigener Hardware des Kunden</div></div>
  <div class="cs-stat"><div class="cs-stat__num">8x H100</div><div class="cs-stat__label">80-GB-GPUs auf einem Knoten, durchgereicht an eine isolierte Mandanten-VM (KubeVirt)</div></div>
  <div class="cs-stat"><div class="cs-stat__num">2-3x</div><div class="cs-stat__label">GPU-Effizienzgewinn beim Wechsel von der Stundenmiete auf eigenes Bare Metal</div></div>
</div>

## Über das Projekt

Der Kunde ist ein schnell wachsender Anbieter einer Massenmarkt-Mobile-App für die kreative Foto- und Video-Bearbeitung. Mehrere seiner zentralen Funktionen — Hintergrund entfernen und ersetzen, Beautification, visuelle Effekte — laufen über die eigenen KI-Modelle des Unternehmens statt über Drittanbieter-APIs.

Diese Modelle liefen in einer gemieteten öffentlichen GPU-Cloud, stundenweise abgerechnet. Mit wachsender Nutzung wurde die Miete teuer und kapazitätsbegrenzt: Die Kosten skalierten linear mit der Last, und der Spitzendurchsatz war durch das begrenzt, was der Anbieter bereitstellte. Der Kunde entschied sich, die Inferenz auf einen eigenen Bare-Metal-GPU-Server zu verlagern — bei gleichzeitigem Erhalt der gewohnten „Cloud"-Developer-Experience seines Teams: einer API, Task-Queues, Autoscaling, Modell-Storage und Monitoring.

## Ziele und Anforderungen

- KI-Inferenz von einer stundenweise gemieteten GPU-Cloud auf einen eigenen Bare-Metal-Server mit 8xH100 zurückholen, um Kosten zu senken und die Kapazitätsgrenze anzuheben.
- Die cloud-native UX erhalten: API-Gateway, Task-Queues, Autoscaling, Storage für Modellgewichte, vollständiges Monitoring.
- Verantwortlichkeiten sauber trennen: Der Kunde schreibt und besitzt die ML-Geschäftslogik; Aenix verantwortet Architektur, DevOps und 24x7-Support der GPU-Infrastruktur, Kubernetes und Monitoring.
- Modellgewichte und Nutzerdaten auf einer vom Kunden kontrollierten Infrastruktur halten (Data Locality).
- Kein Technologie-Lock-in — eine ausdrückliche, nicht verhandelbare Anforderung: ein vollständig quelloffener, CNCF-orientierter Stack ohne proprietäre Control Plane.

## Vorgeschlagene Lösung

Ein einzelner Server mit 8xH100, von oben nach unten geschichtet, verwandelt eigenes Bare Metal in eine private GPU-Cloud mit einer isolierten Mandantengrenze:

- **ML-Worker des Kunden** — die Inferenzmodelle des Kunden, Queue-Consumer sowie synchrone/asynchrone Handler, betrieben als Pods innerhalb des Mandanten.
- **Verschachteltes Kubernetes („main")** — die GPUs werden an die Mandanten-VM durchgereicht; der NVIDIA GPU Operator läuft innerhalb der VM für Treiber- und Geräteverwaltung, mit Ingress davor.
- **Isolierter Mandant** — ein eigenes etcd, eigene Secrets, eine eigene Container-Registry und eigenes Monitoring, sodass sich der Workload niemals eine Control Plane mit fremden Workloads teilt.
- **Cozystack auf k3s / generischem Linux** — LINSTOR für Storage, Cilium + Kube-OVN für Networking, KubeVirt für Virtualisierung, GPU-Passthrough über vfio-pci, MetalLB für die Service-Veröffentlichung.
- **Bare Metal** — 8x NVIDIA H100 80GB mit NVLink und 2 TB RAM.

Die Inferenz läuft als zwei sich ergänzende Pipelines. Asynchron: API-Gateway → RabbitMQ-Queue → GPU-ML-Worker → Webhook-Callback. Synchron: HTTP-Inferenz-Endpunkte, autoskaliert mit KEDA über die Request-Rate (RPS) des nginx-ingress, mit VictoriaMetrics als Metrik-Quelle.

{{< placeholder-image width="1200" height="640" label="Einzelner Bare-Metal-Knoten mit 8xH100, geschichtet: ML-Worker des Kunden (Inferenzmodelle, RabbitMQ-Queues, sync/async) auf einem verschachtelten Mandanten-Kubernetes mit durchgereichten GPUs und dem NVIDIA GPU Operator darin; isolierter Mandant (eigenes etcd, Secrets, Registry, Monitoring) auf Cozystack über k3s/generisches Linux (LINSTOR, Cilium+Kube-OVN, KubeVirt, vfio-pci-Passthrough, MetalLB); Bare Metal: 8x NVIDIA H100 80GB, NVLink, 2 TB RAM" >}}

## Umsetzung: neue Anforderungen und wie wir sie gelöst haben

- **Von Talos zu k3s, ohne Verwaltbarkeit einzubüßen.** Der Anbieter stellte nur SSH-Zugang bereit — keine Konsole, kein IPMI — womit eine Installation des immutable Talos Linux unmöglich ist. Stattdessen bauten wir ein generisches Cozystack auf k3s über Ubuntu. Die vollständige Plattform (LINSTOR, Cilium/Kube-OVN, KubeVirt, GPU-Passthrough, Monitoring) funktioniert identisch; nichts wurde aufgegeben.
- **GPU-Passthrough aller acht H100.** Jede H100 wird über vfio-pci an die KubeVirt-Mandanten-VM durchgereicht. Das klassische Wettrennen „nvidia-Treiber vs. vfio-pci" beim Booten — bei dem der Host-Treiber eine Karte belegt, bevor vfio zugreifen kann — lösten wir mit einem initramfs-`driver_override`, sodass die Geräte deterministisch in der VM landen.
- **RWX-Storage für gemeinsame Modellgewichte.** Viele Worker-Pods benötigen dieselben Modellgewichte gleichzeitig. Wir stellten geteilten Read-Write-Many-Storage über einen CSI-Wrapper plus NFS-Ganesha bereit; der Fix wurde upstream zu Cozystack beigesteuert.
- **Traffic-basiertes Autoscaling.** Synchrone Inferenz-Worker skalieren mit der Live-Nachfrage über KEDA, gesteuert durch nginx-ingress-RPS-Metriken aus VictoriaMetrics. Der Metrics-Path-Fix, der dies zuverlässig machte, ging ebenfalls upstream.
- **GPU-Dichte.** Um mehr Inferenz auf jede Karte zu packen, aktivierten wir GPU-Sharing über HAMi / MIG / Time-Slicing, sodass sich mehrere Jobs eine physische H100 teilen können.

## Ergebnisse und aktueller Stand

- In rund zwei Monaten ging die Plattform live: Die End-to-End-QA war bestanden und der gesamte produktive Inferenz-Traffic zog auf den eigenen Cluster des Kunden um, wo er seither stabil läuft.
- Beide Pipelines sind in Produktion — asynchrone RabbitMQ-Jobs mit Webhook-Callbacks und synchrone HTTP-Inferenz, autoskaliert nach Traffic.
- Grafana und VictoriaMetrics liefern das Monitoring, mit zentralisiertem Logging über die gesamte Plattform.
- Der Kunde betreibt seine ML-Geschäftslogik auf einer selbst kontrollierten Infrastruktur, mit der 2-3-fachen GPU-Effizienz gegenüber der bisherigen Stundenmiete und ohne proprietäres Lock-in.

## Wie es weitergeht

- Ausbau der GPU-Server-Flotte über den ersten Knoten hinaus.
- GPU-Partitionierung (HAMi / MIG) für höhere Inferenzdichte pro Karte.
- Eine dedizierte Harbor-Registry für schwere (~100 GB) Modell-Images.
- Ausbau des Self-Service auf Basis des Mandantenfähigkeits-Modells.

## Warum dieser Fall wichtig ist

<div class="cs-why card-grid">
  <div class="card"><div class="card-body"><h3 class="card-title">Cozystack läuft auf generischem k3s</h3><p class="card-description">Nicht nur Talos — ein SSH-only-Host ohne IPMI wurde zur vollwertigen privaten GPU-Cloud auf k3s über Ubuntu, ohne Einbußen.</p></div></div>
  <div class="card"><div class="card-body"><h3 class="card-title">8xH100 NVLink, virtualisiert und isoliert</h3><p class="card-description">Alle acht Karten in einen isolierten Mandanten durchgereicht über KubeVirt — eigenes etcd, Secrets, Registry und Monitoring pro Workload.</p></div></div>
  <div class="card"><div class="card-body"><h3 class="card-title">Echte KI-Inferenz, zwei Pipelines</h3><p class="card-description">Asynchrone RabbitMQ-Queues plus synchrone HTTP-Inferenz, autoskaliert nach Live-Traffic mit KEDA und VictoriaMetrics.</p></div></div>
  <div class="card"><div class="card-body"><h3 class="card-title">Engineering-Tiefe mit Zinseszinseffekt</h3><p class="card-description">RWX-Storage- und Metrics-Fixes gingen upstream zu Cozystack — die Plattform selbst wurde im Projektverlauf besser.</p></div></div>
</div>

---

*Diese Fallstudie ist anonymisiert veröffentlicht (Tier-3-Evidenz): Der Kunde wird über sein Profil beschrieben, nicht namentlich. Eine Kundenreferenz unter NDA ist auf Anfrage verfügbar — [sprechen Sie mit dem Aenix-Vertrieb](/de/kontakt/).*

*Aenix ist das Team hinter [Cozystack](https://cozystack.io) — einem CNCF-Projekt (heute Sandbox; Incubating erwartet für Spätsommer 2026), Apache 2.0. Aenix kommerzialisiert es als Ænix Platform, verfügbar in fünf Editionen: Public Cloud, ISP, Enterprise, IDP, AI/ML.*
