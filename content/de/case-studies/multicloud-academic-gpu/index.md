---
title: "Von der Public Cloud zu Bare Metal — Rechenleistung nach Bedarf"
description: "Ein europäischer SaaS für akademisches Rechnen migrierte von einem Hyperscaler auf eigenes Bare Metal mit Cozystack, behielt eine einheitliche Cluster API und senkte die GPU-Kosten um etwa das Fünffache."
date: 2026-06-15
lastmod: 2026-06-15
page_type: "case-study"
language: "de"
hreflang_en: "/case-studies/multicloud-academic-gpu/"
images: ["img/og/og-case-multicloud-academic-gpu.png"]
related_pages:
  - /de/loesungen/gpu-cloud-bursting/
  - /de/branchen/universitaeten/
  - /de/loesungen/cloud-repatriation/
  - /de/produkte/aenix-platform/ai-ml-edition/
---

<div class="cs-tags">
  <span class="cs-tag">GPU-Bursting</span>
  <span class="cs-tag">Multi-Cloud</span>
  <span class="cs-tag">Souveräne Cloud</span>
  <span class="cs-tag">Mandantenfähigkeit</span>
</div>

**Eine europäische SaaS-Plattform für akademisches Rechnen verlagerte ihr Backend und ihre Nutzer-Workloads von einem öffentlichen Hyperscaler auf eigenes Bare Metal mit Cozystack — ohne Ausfallzeit für Tausende aktive Nutzer — und behielt eine einheitliche Cluster API, die Bare Metal, einen öffentlichen Hyperscaler und eine souveräne Schweizer OpenStack-Cloud umspannt. GPUs auf der souveränen Cloud waren am Ende rund fünfmal günstiger als im vorherigen Setup.**

<div class="cs-stats">
  <div class="cs-stat"><div class="cs-stat__num">~11.000</div><div class="cs-stat__label">aktive Nutzer; Kurse mit 100+ Studierenden</div></div>
  <div class="cs-stat"><div class="cs-stat__num">≈5×</div><div class="cs-stat__label">günstigere GPU auf der souveränen Cloud gegenüber dem vorherigen Setup</div></div>
  <div class="cs-stat"><div class="cs-stat__num">3 → 1</div><div class="cs-stat__label">Infrastrukturtypen unter einer einzigen Cluster API</div></div>
</div>

## Über das Projekt

Der Kunde ist eine europäische SaaS-Plattform für Universitäten und Business Schools, genutzt für Lehre und Forschung. Im Browser startet ein Nutzer praktisch jede Linux-Anwendung in seinem eigenen Pod — Python, JupyterLab, MATLAB, Julia und rund hundert Legacy-Anwendungen — und arbeitet mit gemeinsam genutzten Dateien und Datensätzen. Ein Teil der Last läuft auf GPUs.

Ursprünglich lief die gesamte Plattform im Managed Kubernetes eines öffentlichen Hyperscalers. Es funktionierte, schmerzte aber an zwei Fronten zugleich: teuer (besonders die GPUs) und intransparent bei den Kosten — das Fehlen einer granularen Ressourcenabrechnung machte es schwer, Investoren eine saubere Unit Economics zu zeigen.

## Ziele und Anforderungen

Das vorrangige Ziel war wirtschaftlich: die Infrastrukturkosten radikal senken und ein transparentes Kostenmodell gewinnen — ohne Ausfallzeit für Tausende aktive Nutzer.

- Backend und Nutzer-Workloads von der Public Cloud auf eigene Bare-Metal-Hardware verlagern.
- Den bestehenden externen Storage (Ceph, betrieben von einem Dienstleister) unverändert beibehalten.
- Prod und Staging strikt trennen: getrennte Control Planes und Hardware, kein Single Point of Failure.
- Rechenleistung nach Bedarf zuschalten: GPU und CPU in Public Clouds für Spitzen und schwere Jobs, mit anschließendem Abbau.
- Ausweitung auf eine souveräne Schweizer Cloud (OpenStack) — für regulierte Branchen und deutlich günstigere GPUs.
- Sichere Mandantenfähigkeit: jeder Kunde isoliert, obwohl in den Pods beliebiger Nutzercode läuft.

## Vorgeschlagene Lösung

Im Kern — Cozystack auf Talos Linux auf eigener Hardware. Ein Management-Cluster trägt die Plattform, während die Mandanten-Cluster als Hosted Control Planes (Kamaji) laufen — die Grundlage der sicheren Mandantenfähigkeit.

- **Networking.** Cilium als CNI plus ein WireGuard-Mesh (Kilo), das Standorte und Clouds zu einem einzigen Pod- und Service-Netzwerk verbindet.
- **Rechenleistung nach Bedarf.** Der Cluster Autoscaler fügt Knoten dort hinzu, wo sie gerade gebraucht werden: Bare Metal, öffentlicher Hyperscaler, souveräne OpenStack-Cloud — alle hinter einer einzigen Cluster API.
- **GPU.** NVIDIA GPU-Operator auf Talos für Erkennung und Passthrough, darüber HAMi für Fractional Sharing (mehrere Jobs teilen sich eine physische Karte).
- **Storage.** Externes Ceph (CephFS RWX) bleibt das Speichersystem; lokal — LINSTOR/DRBD mit Volume-Verschlüsselung.
- **Zugriff & Observability.** Keycloak (OIDC) anstelle des Cloud-IdP; das integrierte Monitoring von Cozystack (VictoriaMetrics/VictoriaLogs) neben dem eigenen Logging-Stack des Kunden.

{{< placeholder-image width="1200" height="640" label="Multi-Cloud-Architektur: ein einziger Management-Cluster (Cozystack · Talos · Kamaji) orchestriert Bare Metal, einen öffentlichen Hyperscaler und eine souveräne OpenStack-Cloud über eine einzige Cluster API; Standorte und externes Ceph über ein WireGuard-Mesh verbunden" >}}

## Umsetzung: neue Anforderungen und wie wir sie gelöst haben

- **Die Public Cloud drosselte den Mesh-Verkehr.** Der Hyperscaler ließ Knoten-zu-Knoten-Verkehr nicht ohne explizites Routing durch. Wir implementierten IP-in-IP-Kapselung in Kilo und steuerten die Änderung upstream bei — danach funktionierte alles ohne zusätzliche Konfiguration.
- **Der souveränen Cloud fehlte ein Autoscaler.** Es ist reines OpenStack ohne Magnum. Wir schrieben einen eigenen Autoscaler — ein funktionierender Prototyp in etwa einer Woche — und bauten ein separates Cozystack-Paket für Managed Kubernetes auf OpenStack (Cluster API + Talos + Kamaji).
- **Die Umgebung ist von Natur aus feindlich.** Ein Nutzer kann Konsolenzugriff auf seine VM erlangen und versuchen, ein Join-Token zu stehlen. Die Antwort — eine separate Control Plane pro Mandant: die Kompromittierung eines Mandanten erreicht den Hauptcluster nicht.
- **Nutzerdateien in Ceph über ein verschlüsseltes Mesh.** Frisch autoskalierte Knoten kündigen ihre Adressen automatisch in das WireGuard-Netzwerk in Richtung der Ceph-Monitore an und erhalten Zugriff auf die gemeinsam genutzten Dateien ohne manuelle Schritte. Kein Single Point of Failure.
- **Dringende Fixes vor einer wichtigen Demo.** In der Nacht vor einer wichtigen Demo traten zwei Networking-Bugs auf (ein Knoten griff nach einem Kubelet-Neustart die WireGuard-Adresse ab, und CephFS ließ sich auf frisch hinzugefügten Knoten nicht mounten). Beide wurden rasch diagnostiziert und behoben.

## Wirtschaftlichkeit

GPUs auf der souveränen Cloud kosten rund **fünfmal weniger** als im vorherigen Hyperscaler-Setup (unter Berücksichtigung der Marge des früheren Modells). Da GPU-Preise volatil sind und in kurzen Zeiträumen stark gestiegen sind, zahlen sich hier Bursting und Spot-Kapazitäten genau aus.

## Ergebnisse und aktueller Stand

- Die Produktion ist auf Bare Metal (Talos + Cozystack) umgezogen, echte Nutzer arbeiten; GPU/CPU-Bursting in die Public Cloud funktioniert, Knoten werden über mehrere Regionen hochgefahren, Fractional GPU Sharing steht zur Verfügung.
- Mandanten-Cluster laufen live in der souveränen Cloud: aus einem einzigen Manifest ausgerollt, Control Plane im Management-Cluster, Worker auf OpenStack; Mandanten-Autoscaling und Service-Veröffentlichung bestätigt, Zugriff auf gemeinsam genutzte Dateien nach dem Mesh-Umbau bestätigt.
- Eine Demo lief auf der souveränen Infrastruktur — die erste Anwendung des Kunden, gestartet aus seiner eigenen Oberfläche.

## Roadmap

- Öffnung der souveränen Cloud für eine breite Menge an Organisationen (in der Größenordnung von hundert) — jede bezahlt ihre eigenen Ressourcen direkt.
- Bring-your-own-Cloud: GPU-Workloads im eigenen Abonnement des Kunden bei einem beliebigen Anbieter.
- GPU-Job-Checkpointing, um auf Spot-Preisen zu laufen, mit Migration bei Kapazitätsrückforderung.
- Vollständiger Ausstieg aus den verbleibenden Hyperscaler-Abhängigkeiten.

## Warum dieser Fall wichtig ist

<div class="cs-why card-grid">
  <div class="card"><div class="card-body"><h3 class="card-title">Echtes Multi-Cloud</h3><p class="card-description">Ein einziges Cozystack orchestriert Bare Metal, einen öffentlichen Hyperscaler und eine souveräne OpenStack-Cloud über eine einzige Cluster API.</p></div></div>
  <div class="card"><div class="card-body"><h3 class="card-title">Sichere Mandantenfähigkeit für eine feindliche Umgebung</h3><p class="card-description">Control Plane und Storage-Schlüssel pro Mandant, Network Policies, Isolation von Nutzercode.</p></div></div>
  <div class="card"><div class="card-body"><h3 class="card-title">Ein selbstheilendes Mesh</h3><p class="card-description">Ein WireGuard-Mesh mit automatischer Registrierung der Knoten und ohne Single Point of Failure.</p></div></div>
  <div class="card"><div class="card-body"><h3 class="card-title">Support auf Co-Development-Niveau</h3><p class="card-description">Fixes fließen upstream (IP-in-IP in Kilo, ein Issue in Talos eingereicht), ein funktionierender Autoscaler in einer Woche gebaut, kritische Bugs schnell geschlossen.</p></div></div>
</div>

---

*Diese Fallstudie wird in anonymisierter Form veröffentlicht (Tier-3-Evidenz): die Plattform wird über ihr Profil beschrieben, nicht namentlich. Für ein Referenzgespräch unter NDA zu einer aktiven Opportunity [sprechen Sie mit dem Aenix-Vertrieb](/de/kontakt/).*

*Aenix ist das Team hinter [Cozystack](https://cozystack.io) — einem CNCF-Projekt (heute Sandbox; Incubating erwartet für Spätsommer 2026), Apache 2.0. Aenix kommerzialisiert es als Ænix Platform, verfügbar in fünf Editionen: Public Cloud, ISP, Enterprise, IDP, AI/ML.*
