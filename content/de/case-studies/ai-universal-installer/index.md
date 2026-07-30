---
title: "Cozystack als universeller Installer: eine KI-Plattform im Kundenumfeld"
description: "Ein Telco-Integrator baute auf Cozystack eine Unternehmens-KI-Plattform — GPU, RAG auf Qdrant, NVIDIA-Dynamo-Inferenz, Geo-GPU — und lieferte dieselbe Distribution beim staatlichen Endkunden aus."
hero_subtitle: "Unternehmens-KI-Plattform, ausgeliefert direkt im Kundenumfeld"
date: 2026-06-15
lastmod: 2026-06-15
page_type: "case-study"
language: "de"
hreflang_en: "/case-studies/ai-universal-installer/"
images: ["img/og/og-case-ai-universal-installer.png"]
related_pages:
  - /de/loesungen/sovereign-ai/
  - /de/produkte/aenix-platform/ai-ml-edition/
  - /de/dienstleistungen/ai-platform-build/
  - /de/branchen/telco/
---

<div class="cs-tags">
  <span class="cs-tag">KI / ML auf GPU</span>
  <span class="cs-tag">NVIDIA Dynamo</span>
  <span class="cs-tag">RAG · Qdrant</span>
  <span class="cs-tag">Mandantenfähigkeit</span>
  <span class="cs-tag">Geo-GPU</span>
</div>

**Ein großer Telekommunikationsanbieter und Systemintegrator baute auf Cozystack eine Unternehmens-KI-Plattform und nutzte dieselbe Distribution als universellen Installer — er lieferte seine eigenen KI-Dienste in das Umfeld eines staatlichen Endkunden aus, wobei die Daten innerhalb der Kundengrenze verblieben. Das Projekt führte den Integrator von einem CapEx-Modell aus „Hardware und Lizenzen" zu einem langfristigen OpEx-Servicevertrag.**

<div class="cs-stats">
  <div class="cs-stat"><div class="cs-stat__num">141 / 141</div><div class="cs-stat__label">Managed Releases im Zustand „Ready" auf dem Produktionscluster</div></div>
  <div class="cs-stat"><div class="cs-stat__num">12–20 ms</div><div class="cs-stat__label">zwischen den Rechenzentren — Geo-GPU über ein verschlüsseltes Mesh verbunden</div></div>
  <div class="cs-stat"><div class="cs-stat__num">1 → 2</div><div class="cs-stat__label">eine Distribution, zwei Auslieferungsmodelle (SaaS + innerhalb der Kundengrenze)</div></div>
</div>

## Über das Projekt

Der Kunde ist ein großer Telekommunikationsanbieter und Systemintegrator, der für einen Endkunden — ein großes staatliches Unternehmen aus dem Transportsektor — eine Unternehmens-KI-Plattform aufbaut. Das kommerzielle Ziel war der Wechsel vom Kauf von Hardware und Lizenzen (CapEx) hin zu einem Servicemodell (OpEx) im Rahmen eines langfristigen Vertrags.

Der Ausgangsschmerz ist typisch für einen großen Integrator: heterogene Legacy-Hardware und Virtualisierung mit Vendor-Lock-in, ein langsamer Weg zur Bereitstellung neuer Dienste sowie Investitionsausgaben statt planbarer Abonnements. Der Kunde brauchte eine einzige Schicht, um seine eigenen KI-Dienste schnell zusammenzustellen und zu verkaufen — und sie ebenso schnell in das Umfeld des Endkunden auszuliefern.

Der Kunde entwickelt die KI-Dienste selbst — Unternehmens-LLM-Assistenten, RAG-Suche über regulatorische Dokumentation, klassisches ML und Computer Vision — und nutzt Cozystack als universelles Substrat und Installer: dieselbe Plattform, auf der seine Anwendungen laufen, sowohl im eigenen Haus als auch im Umfeld des Endkunden bereitstellbar.

## Ziele und Anforderungen

- Ein einziger Orchestrator über heterogene Hardware (Bare Metal, Virtualisierung, Drittanbieter-Clouds) — Ausbruch aus dem Lock-in, mit einheitlichem Monitoring, Billing und Sicherheit.
- Self-Service-Mandantenfähigkeit: jedes Team oder jeder Kunde ist ein isolierter Mandant, der Dienste aus dem Katalog bezieht (Postgres, Redis, Kafka, S3, Vektordatenbank, Kubernetes, GPU-VMs).
- GPU als Ressource: Passthrough in VMs und Cluster, LLM-Inferenz mit nutzungsbasierter Abrechnung.
- Auslieferung derselben Plattform-Distribution samt der Dienste des Kunden in die Infrastruktur des Endkunden — mit Datensouveränität (die Speicherung bleibt innerhalb dessen Grenze).

## Vorgeschlagene Lösung

Cozystack ist hier keine „Box", sondern ein Framework, das bereits Storage, Networking, Virtualisierung, Monitoring und GPU sowie einen Katalog an Managed Services mitbringt. Der Kunde baut seine Produkte darauf auf. Die Architektur ist geschichtet:

1. **Hardware** — Bare Metal und die bestehende Virtualisierung des Kunden.
2. **Cozystack-Framework** — IaaS (LINSTOR, Cilium/Kube-OVN, KubeVirt, GPU-Passthrough) und ein PaaS-Servicekatalog.
3. **Mandantenfähigkeit** — eine Hierarchie `root → Umbrella-Mandant → dev/staging/prod`, Single Sign-on über Keycloak, RBAC, Namespace-Isolation, Quotas, einheitliches Monitoring.
4. **Produkte des Kunden** — LLM-Assistenten und interne Dienste, als Code in die Mandanten ausgerollt, die GPU und die Vektordatenbank nutzen.

Wir schlugen einen phasenweisen Rollout vor: zuerst die Basisinfrastruktur und den Katalog, dann verteiltes Training und Model Serving, anschließend vollständige MLOps und einen Data Lake.

{{< placeholder-image width="1200" height="640" label="Architektur: eine Distribution, Plattformschichten und Geo-GPU — Hardware → Cozystack-Framework → Mandantenfähigkeit → Produkte des Kunden, mit einem geografisch verteilten GPU-Cluster, verbunden über ein verschlüsseltes Mesh" >}}

## Umsetzung: neue Anforderungen und wie wir sie gelöst haben

- **Vektordatenbank für RAG.** Der Kunde wünschte eine Vektordatenbank für die Dokumentensuche — wir verpackten Qdrant als Cozystack-App und stellten es direkt neben den GPU-Workloads bereit; die Integration dauerte etwa eine Woche.
- **NVIDIA Dynamo — eine Neuentwicklung für den Kunden.** Um die teuren Karten effizienter zu nutzen, verpackten wir Dynamo als vollwertiges Plattformpaket (eine eigene Ressource in der Cozystack-API, die der Controller in einen fertigen Inferenz-Stack umsetzt). Dynamo steigert die GPU-Auslastung durch disaggregiertes Inference-Serving und KV-Cache-bewusstes Routing über die gesamte Flotte — ohne zusätzliche Herstellerlizenzen.
- **Geografisch verteilte GPU.** Ein leistungsstarker GPU-Knoten steht in einem Rechenzentrum, der Hauptcluster in einem anderen, 12–20 ms voneinander entfernt. Wir verbanden die Cluster über einen verschlüsselten Tunnel (WireGuard/Kilo): der GPU-Knoten verbindet sich mit der API des Hauptclusters, baut den Tunnel auf und setzt das Routing.
- **Einheitlicher Zugriff auf die Modelle aus allen Mandanten.** Wir bauten einen Multi-Cluster-Service-Proxy: ein geplanter Job synchronisiert die Dienste des entfernten GPU-Clusters und veröffentlicht sie hinter einer gemeinsamen Adresse. Die Mandanten erreichen die Modelle als gewöhnliche Kubernetes-Services.
- **Self-Service für Zugriff und Networking.** Wir fügten der Mandantenhierarchie eine Zwischenebene hinzu (dev → staging → prod über GitLab), erweiterten den Adresspool, wechselten zu MetalLB und skalierten die Ressourcen für schwere analytische Abfragen — alles auf Anfrage.

Bemerkenswert ist die technische Tiefe des Supports: einige der benötigten Fixes (Propagierung der Bucket-Readiness, eine Reihe von TLS-Fixes für Managed Services) flossen direkt upstream in die Plattform.

## Ergebnisse und aktueller Stand

- Ein funktionierender Cluster auf Cozystack/Talos: **141 von 141 Managed Releases im Zustand „Ready"**, alle Diensttypen des Katalogs verfügbar.
- Die Mandantenhierarchie ist per GitOps umgesetzt: `root → Umbrella-Mandant → drei Umgebungen`; jede mit Guest-Kubernetes-Clustern und Managed-Datenbanken; gemeinsam genutzte Dienste (Secrets, Image-Registry, Backup-Buckets) auf der Umbrella-Ebene.
- Ein geografisch verteilter GPU-Cluster läuft mit einem KI/ML-Dienstset (der NVIDIA-Dynamo-Inferenz-Stack, LLM-Gateway, Qdrant-Vektordatenbank, Spracherkennung und weitere Dienste des RAG-Stacks), über den Multi-Cluster-Proxy mit dem Hauptcluster verbunden, der alle 5 Minuten synchronisiert.
- Eine Demo für das Top-Management wurde vorbereitet und gezeigt: Dienstbereitstellung und GPU-Passthrough über die Web-UI, Single Sign-on, Mandantenfähigkeit — ohne YAML oder direkten Clusterzugriff.
- Der Übergang in die Produktion auf der Infrastruktur des Kunden hat begonnen — genau das „eine Distribution → deployt beim Endkunden".

## Roadmap

- Skalierung für ein großes KI-Factory-Projekt (Zehntausende GPUs), tokenbasiertes Billing, ein Frontend und Metering auf der Plattform.
- Nächste Phasen: verteiltes Training und Serving (Ray/KServe), danach MLOps und ein Data Lake.
- Self-Service auf Mandantenebene für Zugriff, Katalogerweiterung um Drittanbieter-Dienste, eine dev→staging→prod-Pipeline.
- Ein langfristiger Servicevertrag und die Auslieferung der Distribution samt der Dienste des Kunden innerhalb der Grenze des Endkunden.

## Warum dieser Fall wichtig ist

<div class="cs-why card-grid">
  <div class="card"><div class="card-body"><h3 class="card-title">Cozystack als universeller Installer</h3><p class="card-description">Der Kunde baut das Produkt; die Plattform liefert eine Distribution — für internes SaaS und für die isolierte Grenze des Endkunden.</p></div></div>
  <div class="card"><div class="card-body"><h3 class="card-title">Echte KI/ML-GPU-Workloads</h3><p class="card-description">Ein RAG-Stack und LLM-Inferenz mit einer über NVIDIA Dynamo gesteigerten GPU-Auslastung, für den Kunden in die Plattform verpackt.</p></div></div>
  <div class="card"><div class="card-body"><h3 class="card-title">Geo-Verteilung</h3><p class="card-description">Zwei Cluster in verschiedenen Rechenzentren über ein verschlüsseltes Mesh verbunden; die Modelle stehen allen Mandanten als gewöhnliche Services zur Verfügung.</p></div></div>
  <div class="card"><div class="card-body"><h3 class="card-title">Geschwindigkeit und Anpassung</h3><p class="card-description">Nicht standardisierte Anforderungen „in einem Tag bis einer Woche" gelöst, wobei einige Verbesserungen upstream in Cozystack einflossen.</p></div></div>
</div>

---

*Diese Fallstudie wird in anonymisierter Form veröffentlicht (Tier-3-Evidenz): der Integrator und der Endkunde werden über ihr Profil beschrieben, nicht namentlich. Für ein Referenzgespräch unter NDA zu einer aktiven Opportunity [sprechen Sie mit dem Aenix-Vertrieb](/de/kontakt/).*

*Aenix ist das Team hinter [Cozystack](https://cozystack.io) — einem CNCF-Projekt (heute Sandbox; Incubating erwartet für Spätsommer 2026), Apache 2.0. Aenix kommerzialisiert es als Ænix Platform, verfügbar in fünf Editionen: Public Cloud, ISP, Enterprise, IDP, AI/ML.*
