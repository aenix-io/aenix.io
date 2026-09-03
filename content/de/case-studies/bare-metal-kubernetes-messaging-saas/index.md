---
title: "Bare-Metal-Kubernetes für ein Messaging-API-SaaS"
description: "Ein Messaging-API-SaaS vollzog eine Proxmox-Migration zu Kubernetes mit Cozystack — 25.000 Instanzen von 13 Hosts auf einen GitOps-Cluster, betrieben von einem Ein-Personen-Team."
hero_subtitle: "25.000 Workloads von 13 Proxmox-Hosts auf einen GitOps-Cluster"
date: 2026-06-20
lastmod: 2026-06-20
page_type: "case-study"
language: "de"
hreflang_en: "/case-studies/bare-metal-kubernetes-messaging-saas/"
images: ["img/og/og-case-bare-metal-kubernetes-messaging-saas.png"]
primary_keyword: "Proxmox Migration"
secondary_keywords:
  - "Proxmox zu Kubernetes"
  - "bare metal kubernetes"
  - "Multi-Tenant Kubernetes"
  - "verwaltete Datenbanken Kubernetes"
  - "Proxmox Alternative"
related_pages:
  - /de/alternativen/proxmox-alternative/
  - /de/produkte/public-cloud-platform/
  - /de/loesungen/data-sovereignty/
  - /de/dienstleistungen/build-private-cloud/
faq:
  - q: "Wie migriert man rund 25.000 Workloads von Proxmox mit vernachlässigbarer Ausfallzeit?"
    a: "Die Migration lief Host für Host, nicht als Big-Bang. Jede kundenspezifische Instanz hält ihren Authentifizierungszustand als kleine Datei in S3, sodass ein Container auf einem Proxmox-Host geleert und auf der Cozystack-Plattform neu erstellt wird — mit nur wenigen Sekunden Unterbrechung reattacht er sich an denselben Zustand. Sobald die Instanzen verschoben waren, wurde jeder Hypervisor-Host der Reihe nach geleert und außer Betrieb genommen, sodass die Flotte schrittweise schrumpfte, ganz ohne Wartungsfenster."
  - q: "Kann man Kubernetes betreiben, ohne die Anwendung neu zu schreiben?"
    a: "Ja. Die bestehenden kundenspezifischen Container laufen unverändert in KubeVirt-VMs auf Kubernetes, sodass das Container-in-VM-Modell, auf das sich das SaaS bereits stützte, erhalten bleibt. Ein Golden-Image-Cloning-Workflow macht aus „eine VM bereitstellen“ eine einzige Zeile in Git. Der Anwendungscode wurde nie angefasst; verändert wurde ausschließlich die Plattform darunter."
  - q: "Wie performen verwaltetes MongoDB, PostgreSQL und RabbitMQ auf Bare Metal?"
    a: "Alle drei laufen als verwaltete Cozystack-Dienste direkt auf Bare-Metal-Knoten mit Dual-NVMe und DRBD-repliziertem Block-Storage und liefern nahezu native Performance — ohne externes DBaaS und ohne Public Cloud. MongoDB läuft unter dem Percona-Operator, PostgreSQL als Primary/Replica-Paar unter seinem Operator und RabbitMQ als HA-Cluster per Ein-Klick-Bereitstellung. Zwischen den Datenbanken und den Disks liegt kein Hypervisor-Overhead."
  - q: "Gibt es bei dieser Plattform einen Vendor-Lock-in?"
    a: "Nein. Cozystack ist Apache-2.0-Open-Source unter dem Dach der CNCF, und das Engagement lief ohne privaten Fork. Zwei Arbeitspakete aus diesem Projekt — eine erstklassige MongoDB-App und der RabbitMQ-v4-Chart — sind upstream in das öffentliche Projekt eingeflossen. Die Souveränität des Kunden fußt auf Code, den er einsehen und selbst betreiben kann, nicht auf einem proprietären Vertrag."
  - q: "Proxmox oder Bare-Metal-Kubernetes — wann sollte ein SaaS wechseln?"
    a: "Wenn manuelle Hypervisor-Operationen das Wachstum zu deckeln beginnen. Einen Proxmox-Host hinzuzufügen war hier eine manuelle, cluster-gefährdende Fleißarbeit, und eine Flotte von 13 Hosts war zum Engpass für einen Dienst geworden, der täglich Hunderte Kunden onboardet. Bare-Metal-Kubernetes mit GitOps macht aus einem Knoten oder einer VM eine deklarative Git-Änderung — deshalb kann ein Ein-Personen-Infrastrukturteam heute rund 25.000 Instanzen betreiben. Proxmox bleibt für kleine, statische Flotten in Ordnung; der Wechsel zahlt sich aus, sobald das Provisioning ohne zusätzliche Operatoren skalieren muss."
---

<div class="cs-tags">
  <span class="cs-tag">Proxmox → Kubernetes</span>
  <span class="cs-tag">13 → 1 Host</span>
  <span class="cs-tag">KubeVirt</span>
  <span class="cs-tag">Verwaltete Datenbanken</span>
  <span class="cs-tag">GitOps</span>
</div>

**Ein schnell wachsendes Messaging-API-SaaS konsolidierte eine Flotte von 13 Proxmox-Hypervisor-Hosts auf einen einzigen deklarativen Cozystack-Cluster auf Bare Metal — und verschob rund 25.000 isolierte kundenspezifische Instanzen ohne Anwendungsumbau und mit vernachlässigbarer Ausfallzeit auf KubeVirt-VMs. Verwaltetes MongoDB, PostgreSQL und RabbitMQ laufen jetzt mit nahezu nativer Performance auf eigener Hardware, und die gesamte Plattform wird im Tagesbetrieb von einem faktisch Ein-Personen-Infrastrukturteam betrieben.**

<div class="cs-stats">
  <div class="cs-stat"><div class="cs-stat__num">25.000+</div><div class="cs-stat__label">isolierte kundenspezifische Instanzen; täglich Hunderte onboarden</div></div>
  <div class="cs-stat"><div class="cs-stat__num">13 → 1</div><div class="cs-stat__label">Legacy-Proxmox-Hosts konsolidiert auf einen deklarativen Cozystack-Cluster</div></div>
  <div class="cs-stat"><div class="cs-stat__num">~1 Woche</div><div class="cs-stat__label">von Bare Metal bis zu den ersten Produktions-Workloads; eine VM ist jetzt eine Zeile in Git</div></div>
</div>

## Über das Projekt

Der Kunde ist ein schnell wachsendes Messaging-API-SaaS — ein WhatsApp- und Telegram-Business-Gateway. Jeder Kunde erhält eine isolierte Messenger-„Instanz" (einen leichtgewichtigen Container) plus eine HTTP-API, CRM-Integrationen und KI-Assistenten obendrauf. Der Dienst war auf rund 25.000 kundenspezifische Instanzen angewachsen und kam täglich um Hunderte hinzu — alles betrieben von einem faktisch Ein-Personen-Infrastrukturteam.

Vor dem Projekt lief er auf einer Flotte von rund 13 Proxmox-Hypervisor-Hosts — etwa 200 VMs und rund 100 Container-Host-Knoten, jeder mit 200–300 Containern bestückt. Ein regulatorisches Netzwerksperr-Ereignis hatte bereits eine überstürzte Rückführung von einem ausländischen Hosting-Anbieter erzwungen, weshalb eine Präsenz im eigenen Land und Datenresidenz von Anfang an nicht verhandelbar waren. Einen Hypervisor-Host hinzuzufügen war eine manuelle, cluster-gefährdende Fleißarbeit, und ein früherer Versuch mit selbstverwaltetem Kubernetes war an abgelaufenen Zertifikaten gescheitert. Der Kunde wollte die Hebelwirkung von Kubernetes **ohne die Anwendung neu zu schreiben** — plus ein Experten-Sicherheitsnetz dahinter.

## Ziele und Anforderungen

- Den gesamten Dienst mit Cozystack auf Kubernetes auf Bare Metal überführen und die Proxmox-Flotte außer Betrieb nehmen.
- Das Provisioning automatisieren, sodass das tägliche Onboarding Hunderter Kunden keine manuelle Hypervisor-Arbeit mehr bedeutet.
- Verwaltetes MongoDB, PostgreSQL und RabbitMQ mit nahezu nativer Performance auf eigener Hardware betreiben — ohne externes DBaaS, ohne Public Cloud.
- Das bestehende Container-in-VM-Modell per KubeVirt intakt lassen, sodass die Anwendung unverändert ausgeliefert wird.
- Die Plattform stabil, beobachtbar und GitOps-verwaltet machen — Knoten, VMs und Dienste als deklarative Git-Änderungen.
- In drei Phasen mit Wissenstransfer ausliefern, sodass der einzelne Ingenieur des Kunden sie betreiben kann, abgesichert durch L3-Support.

## Vorgeschlagene Lösung

- **Compute** — Cozystack auf Talos Linux (unveränderliches OS), deklarativ mit Talm provisioniert; Knoten-Konfigurationen und SOPS-verschlüsselte Secrets liegen in Git. Ein 8-Knoten-Bare-Metal-Cluster: 3 Control-Plane-Knoten (HA-etcd) plus 5 Worker, durchgängig mit Dual-NVMe. KubeVirt-VMs hosten die bestehenden kundenspezifischen Container unverändert; ein Golden-Image-Cloning-Workflow (CDI DataVolume → VM-Disk → VM) macht aus „eine VM bereitstellen“ eine Zeile in Git.
- **Verwaltete Daten** — MongoDB unter dem Percona-Operator, PostgreSQL mit nahezu nativer Performance und RabbitMQ per Ein-Klick. Ænix ergänzte Cozystack um MongoDB als erstklassige App und hob den RabbitMQ-Chart auf v4; **beides floss upstream in das CNCF-Projekt ein.**
- **Storage** — LINSTOR/DRBD-replizierter Block-Storage auf ZFS für zustandsbehaftete Workloads, plus SeaweedFS S3 für Medien und Backups.
- **Networking** — Kube-OVN + Cilium + Multus + MetalLB; die VMs beziehen Adressen im lokalen Subnetz.
- **Delivery-Pipeline** — ein verschachteltes verwaltetes Kubernetes („kube-in-kube") für die API-Dienste, angetrieben von ArgoCD und einer GitLab-Image-Pipeline; Cozystack-Ingress plus cert-manager lösen das handgebaute nginx und die manuellen Zertifikatserneuerungen ab.
- **Observability** — VictoriaMetrics + VictoriaLogs + Grafana von Tag eins an.

{{< placeholder-image width="1200" height="640" label="Konsolidierungsarchitektur: 13 Proxmox-Hosts kollabieren auf einen 8-Knoten-Cozystack-Cluster auf Talos (3 Control-Plane HA-etcd + 5 Dual-NVMe-Worker); ~25.000 kundenspezifische Container laufen unverändert in KubeVirt-VMs im lokalen Subnetz; verwaltetes MongoDB / PostgreSQL / RabbitMQ auf LINSTOR/DRBD über ZFS; API-Dienste in einem verschachtelten Kubernetes, angetrieben von ArgoCD; SeaweedFS S3 für Medien und Backups" >}}

## Umsetzung: drei Phasen

- **Phase 1 — Aufbau der Plattform.** Der erste Server wurde vom Hypervisor auf Talos als Cozystack-Management-Cluster umgestellt. Die VMs bezogen IPs aus dem lokalen Subnetz; ein Golden-Ubuntu-VM-Template plus die eigenen Ansible-Rollen des Kunden reproduzierten das Setup zuverlässig. Das erste verwaltete MongoDB ging live, die ersten Produktionscontainer zogen auf KubeVirt-VMs um, und die MongoDB-App wurde upstream beigetragen.
- **Phase 2 — API-Dienste ins Kubernetes.** Ein separater Workload-Kubernetes-Cluster wurde aufgesetzt, sodass nutzergetriebene Änderungen nie den System-Cluster berühren. Die Go-API-Dienste laufen hinter einem LoadBalancer und Ingress; ArgoCD plus eine GitLab-Pipeline liefern Push-to-Deploy; cert-manager ersetzte das manuelle nginx und die Zertifikatserneuerung.
- **Phase 3 — Container-Migration und Konsolidierung.** Die rund 25.000 kundenspezifischen Container wurden Host für Host von der Hypervisor-Flotte migriert. Da der Auth-Zustand jeder Instanz eine kleine Datei in S3 ist, wird ein Container auf einem Host geleert und mit vernachlässigbarer Ausfallzeit auf der Plattform neu erstellt — das machte jeden Hypervisor-Host frei zur Außerbetriebnahme. PostgreSQL zog unter seinen Operator (Primary/Replica), MongoDB erhielt HA-Replikas, und SeaweedFS ersetzte den externen Objektspeicher.

**Engineering auf dem Weg.** Eine Knoten-Umbenennung während einer Knoten-Hinzufügung räumte einmal Pods ab; das Team stellte den Dienst mit **null Datenverlust** wieder her und lieferte ein schriftliches Post-Mortem, das Schutz-Webhooks, Velero-Backups und ein Runbook zur Knoten-Außerbetriebnahme antrieb. MTU-Mismatches, Cross-Subnetz-Routing, LINSTOR-Clone-Throttling, MongoDB-OOM-Verhalten und Talos-NTP-Drift wurden jeweils diagnostiziert und in Runbooks überführt.

## Ergebnisse und aktueller Stand

- Ein Bare-Metal-Cozystack-Cluster trägt jetzt den gesamten Dienst: rund 25.000 Instanzen auf KubeVirt-VMs, verwaltetes MongoDB / PostgreSQL / RabbitMQ und die API-Dienste in einem verschachtelten Kubernetes. Die Proxmox-Hypervisor-Flotte ist außer Betrieb.
- Die Plattform ist durchgängig deklarativ — eine VM oder ein Knoten ist eine Git-Änderung — und hochverfügbar (3 Control-Plane-Knoten, DRBD-replizierter Storage).
- Der eigene einzelne Ingenieur des Kunden betreibt sie im Tagesgeschäft, abgesichert durch unbegrenzten L3-Support.
- Zwei Upstream-Beiträge — die MongoDB-App und der RabbitMQ-v4-Chart — flossen in das CNCF-Projekt ein. Kein privater Fork, kein Lock-in.

## Roadmap

- Den kundenspezifischen Workload von ~25.000 einzelnen Containern auf ein Supervisor/Controller-Modell neu strukturieren — eine WhatsAppClient-artige CRD, die Clients über eine begrenzte Pod-Menge shardet.
- Die interne Developer-Plattform fertigstellen: ArgoCD-Self-Service, standardisiertes GitLab CI, zentrales Alerting und SLOs.
- Die SeaweedFS-S3-Ebene ausbauen.
- Monatliche Architektur- und Betriebskosten-Reviews.

## Warum dieser Fall wichtig ist

<div class="cs-why card-grid">
  <div class="card"><div class="card-body"><h3 class="card-title">Kubernetes ohne Neuschreiben</h3><p class="card-description">KubeVirt verschob eine Container-in-VM-Anwendung unverändert, Host für Host migriert mit vernachlässigbarer Ausfallzeit — kein Re-Platforming der App.</p></div></div>
  <div class="card"><div class="card-body"><h3 class="card-title">Verwaltete Daten auf Bare Metal</h3><p class="card-description">MongoDB, PostgreSQL und RabbitMQ laufen nahezu nativ auf DRBD-repliziertem Storage — ohne externes DBaaS, ohne Public Cloud.</p></div></div>
  <div class="card"><div class="card-body"><h3 class="card-title">GitOps von Tag eins an</h3><p class="card-description">Talos + Talm + ArgoCD + SOPS machen aus Knoten, VMs und Diensten deklarative Git-Änderungen — ein Ingenieur betreibt die Flotte.</p></div></div>
  <div class="card"><div class="card-body"><h3 class="card-title">Open Source upstream beigetragen</h3><p class="card-description">MongoDB und der RabbitMQ-v4-Chart flossen in CNCF-Cozystack ein — Souveränität auf Code gestützt, nicht auf Vertrag.</p></div></div>
</div>

---

*Diese Fallstudie ist anonymisiert veröffentlicht; eine Kundenreferenz unter NDA ist auf Anfrage verfügbar. Der Anbieter wird über sein Profil beschrieben, nicht namentlich. Für ein Referenzgespräch zu einer aktiven Opportunity [sprechen Sie mit dem Ænix-Vertrieb](/de/kontakt/).*

*Ænix ist das Team hinter [Cozystack](https://cozystack.io) — einem CNCF-Projekt (heute Sandbox; Incubating erwartet für Spätsommer 2026), Apache 2.0. Ænix kommerzialisiert es als Ænix Platform, als drei Plattformen auf einer Engine: Public Cloud, Private Cloud und AI — kombinierbar statt sich gegenseitig ausschließend.*
