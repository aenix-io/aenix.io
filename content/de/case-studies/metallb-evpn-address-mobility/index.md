---
title: "Wenn das Antwortpaket die falsche Tür nimmt"
description: "Beim Hoster hingen öffentliche IPs am Rack, die Hälfte des Verkehrs starb still. vlan-router macht MetalLB-L2-Routing deklarativ — und die Adresse folgt dem Workload."
hero_subtitle: "MetalLB-L2-Routing automatisiert, und die Adresse übersteht den Umzug"
date: 2026-08-21
lastmod: 2026-08-21
page_type: "case-study"
language: "de"
hreflang_en: "/case-studies/metallb-evpn-address-mobility/"
images: ["img/og/og-case-metallb-evpn-address-mobility.png"]
primary_keyword: "MetalLB L2 asymmetrisches Routing"
secondary_keywords:
  - "MetalLB EVPN VXLAN"
  - "Kubernetes Bare Metal öffentliche IP"
  - "Policy Routing Kubernetes Node"
  - "EVPN Type-2 Route Kubernetes"
  - "LoadBalancer IP-Mobilität"
related_pages:
  - /de/produkte/public-cloud-platform/
  - /de/branchen/hosting-anbieter/
  - /de/produkte/cozystack/
  - /de/dienstleistungen/kubernetes-consulting/
faq:
  - q: "Was genau bricht bei MetalLB im L2-Modus?"
    a: "Einem Node eine externe Adresse zuzuweisen entspricht faktisch `ip addr add 1.2.3.4/32 dev lo`. Der Kernel behandelt das als Host-Route und beantwortet ARP dafür, unabhängig davon, zu welchem Interface die Adresse konzeptionell gehört. Eingehender Verkehr kommt über das Gateway des öffentlichen Subnetzes, die Antwort verlässt den Node über dessen Default-Gateway, weil dem Kernel niemand etwas anderes gesagt hat. ARP antwortet sofort, TCP kommt nie zustande — und alles sieht korrekt konfiguriert aus."
  - q: "Gibt es für den Routing-Teil nicht eine bekannte Lösung?"
    a: "Doch, wir haben sie 2020 veröffentlicht: dem öffentlichen Subnetz eine eigene Routing-Tabelle geben, dort eine Default-Route über das richtige Gateway setzen und eine Policy-Regel ergänzen, damit Verkehr aus diesem Subnetz diese Tabelle konsultiert — plus die Ausnahmeregel, die Verkehr Richtung Pod-Netz des Clusters zurück in die Haupttabelle schickt. Das Rezept stimmt. Es sind aber sechs Kommandos pro Subnetz pro Node, von Hand angewandt, bei jeder Neuinstallation verloren und auf jedem später hinzugefügten Node stillschweigend abwesend."
  - q: "Warum musste die Adresse aufhören, zu einem VLAN zu gehören?"
    a: "Weil ein VLAN eine L2-Broadcast-Domäne ist, praktisch also ein Rack. Die Fabric jenseits des Racks konnte eine Adresse längst überall dorthin bewegen, wo sie einen VTEP hat; ausgerechnet die Nodes konnten es nicht. Eine migrierende Tenant-VM, ein neu startender ankündigender Node, eine GPU-Maschine auf neuer Hardware — jedes davon zieht die Adresse unter dem laufenden Verkehr weg. Für einen Anbieter, dessen Kunde „eine VM mit dieser IP“ gekauft hat, ist das kein Detail, sondern ein Ticket."
  - q: "Wie folgt die Adresse dem Workload?"
    a: "Für VXLAN-Netze bettet der Controller einen BGP-Speaker ein — eine Instanz pro Netz — und kündigt die auf seinem Node lebenden Adressen als EVPN-Type-2-Routen an, dazu Type-3 für BUM-Verkehr. Er verarbeitet, was seine Peers ankündigen, und programmiert die Forwarding-Datenbank des Nodes. Zieht ein Workload um, kündigt der neue Node die Adresse an, der alte zieht sie zurück, und die Fabric konvergiert von selbst. Erreichbarkeit wird von einem Routing-Protokoll getragen statt von einem Kabel impliziert."
  - q: "Läuft das neben Segmenten, die noch nicht umziehen können?"
    a: "Das war Voraussetzung — kein Anbieter migriert alle Kundensubnetze in einer Nacht. Drei Modi teilen sich ein Konfigurationsformat: VXLAN mit EVPN für den Regelfall, VXLAN ohne BGP, wo MAC-Learning genügt, und einfaches VLAN für Segmente, die so bleiben. Alle drei laufen nebeneinander auf denselben Nodes."
---

<div class="cs-tags">
  <span class="cs-tag">Networking</span>
  <span class="cs-tag">MetalLB L2</span>
  <span class="cs-tag">EVPN · VXLAN</span>
  <span class="cs-tag">Policy Routing</span>
  <span class="cs-tag">Hosting-Anbieter</span>
</div>

**Ein Hosting-Anbieter betreibt Cozystack auf Bare Metal: Tenant-VMs, GPU-Maschinen, Managed-Kubernetes-Cluster und LoadBalancer-Services — alle brauchen routbare öffentliche Adressen aus mehreren Subnetzen des Anbieters. Zwei Probleme lagen übereinander: Antwortverkehr verließ den Node über das falsche Gateway, und eine öffentliche Adresse hing am Rack. Wir haben vlan-router gebaut — einen Controller, der das manuelle Routing-Rezept in deklarierten Zustand überführt und jeden Node zum Teilnehmer der EVPN-Fabric des Anbieters macht, sodass eine Adresse ihrem Workload folgt.**

<div class="cs-stats">
  <div class="cs-stat"><div class="cs-stat__num">6 Kommandos</div><div class="cs-stat__label">pro Subnetz pro Node von Hand — ersetzt durch wenige Zeilen YAML an einer Stelle</div></div>
  <div class="cs-stat"><div class="cs-stat__num">EVPN Type-2</div><div class="cs-stat__label">Routen je Node, damit die Adresse mit dem Workload umzieht</div></div>
  <div class="cs-stat"><div class="cs-stat__num">3 Modi</div><div class="cs-stat__label">VXLAN+EVPN, VXLAN ohne BGP, reines VLAN — nebeneinander während der Migration</div></div>
</div>

## Das Problem des Kunden

Das Netz des Anbieters ist eine EVPN-Fabric, und das war eine Randbedingung, keine Wahl. Öffentliche Adressen erreichen die Racks über VXLAN, Erreichbarkeit innerhalb der Fabric trägt BGP: Die MAC einer Adresse wird als EVPN-Route angekündigt, und die Fabric leitet an denjenigen VTEP weiter, der sie beansprucht. Eine öffentliche Adresse nach außen anzukündigen heißt, daran teilzunehmen — und genau das tat ein Kubernetes-Node nicht. Die Aufgabe war nicht, ein Adressmodell zu entwerfen, sondern die Nodes das sprechen zu lassen, was die Fabric ohnehin verlangte.

**Asymmetrisches Routing, älter als Kubernetes.** Weist MetalLB im L2-Modus einem Node eine externe Adresse zu, entspricht das faktisch `ip addr add 1.2.3.4/32 dev lo`. Der Kernel nimmt es als Host-Route und beantwortet ARP dafür, egal zu welchem Interface die Adresse konzeptionell gehört. Eingehender Verkehr kommt über das Gateway des öffentlichen Subnetzes, die Antwort geht über das Default-Gateway des Nodes hinaus. Die Verbindung stirbt still in einer Richtung.

> arping antwortet sofort, und TCP kommt nie zustande. Alles sieht konfiguriert aus; nichts funktioniert.

**Eine Adresse, an ein Segment gebunden.** Adressen wurden den Nodes auf VLANs gegeben, und ein VLAN ist eine L2-Broadcast-Domäne — praktisch ein Rack. Die Fabric jenseits des Racks konnte eine Adresse längst überall hin bewegen, wo sie einen VTEP hatte; die Nodes waren der Teil des Pfades, der es nicht konnte. Eine migrierende Tenant-VM, ein LoadBalancer, dessen ankündigender Node neu startet, eine GPU-Maschine auf neuerer Hardware: Jedes davon zieht die Adresse unter dem Verkehr weg. Für einen Anbieter, dessen Kunde „eine VM mit dieser IP“ gekauft hat, ist das ein Ticket.

## Warum die bekannte Lösung nicht reichte

Für die Routing-Hälfte gibt es eine bekannte Antwort, die wir 2020 veröffentlicht haben. Dem öffentlichen Subnetz eine eigene Routing-Tabelle geben, dort eine Default-Route auf das richtige Gateway setzen und eine Policy-Regel ergänzen, damit Verkehr aus diesem Subnetz diese Tabelle konsultiert:

```bash
ip link add link eth0 name eth0.100 type vlan id 100
ip route add 1.2.3.0/24 dev eth0.100 table 100
ip route add default via 1.2.3.1 table 100
ip rule add from 1.2.3.0/24 lookup 100
ip rule add from 1.2.3.0/24 to 10.112.0.0/12 lookup main
```

Die letzte Regel wiegt schwerer, als sie aussieht: Ohne sie fängt das Policy-Routing auch den Verkehr von der öffentlichen Adresse ins Pod-Netz des Clusters ab, und Pods hören auf, miteinander zu reden — aus Gründen, die niemand vermutet.

Das Rezept stimmt. Es sind aber sechs Kommandos pro Subnetz pro Node, von Hand angewandt, bei Neuinstallation verloren und auf jedem später hinzugefügten Node stillschweigend abwesend. Und es löst nur die Routing-Hälfte: Die Adresse hängt weiter am VLAN und kann dem Workload immer noch nicht folgen.

## Was gebaut wurde

**vlan-router** — ein Controller, der als DaemonSet auf jedem Node läuft, das manuelle Rezept in deklarierten Zustand überführt und es so erweitert, dass die Adresse aufhört, zu einem Segment zu gehören.

- **Legt die Interfaces an.** Ein VLAN-Sub-Interface auf einem Parent-Bond oder ein VXLAN-Interface mit gegebener VNI, MTU und Port. Was deklariert ist, wird hochgefahren und oben gehalten.
- **Ermittelt die eigene Identität.** Statt seine Adresse pro Node vorgesetzt zu bekommen, findet ein Node seine VXLAN-Quelladresse selbst, indem er seine Interfaces gegen das deklarierte Node-Netz abgleicht. Eine Konfiguration gilt damit unverändert für alle Nodes, und ein neu installierter Node kommt von allein mit der richtigen Identität zurück.
- **Baut die Routing-Tabelle.** Je Netz: eine Connected-Route für das Subnetz und eine Default-Route über dessen Gateway, beide in einer eigenen Tabelle — nummeriert aus VNI oder VLAN-ID, damit Tabellennummer und Segment eine Tatsache sind statt zweier, die synchron gehalten werden müssen.
- **Setzt die Policy-Regeln inklusive Ausnahme.** Verkehr aus dem öffentlichen Subnetz konsultiert die Tabelle dieses Netzes; Verkehr aus diesem Subnetz Richtung deklarierter Pod- und Service-Netze geht mit höherer Priorität zurück in die Haupttabelle. Die Regel aus dem Artikel — automatisch, für jedes Netz, auf jedem Node.
- **Macht den Node zum VTEP in der Fabric des Anbieters.** Für VXLAN-Netze bettet der Controller einen BGP-Speaker ein — eine Instanz pro Netz, in-process — und kündigt die Adressen seines Nodes als EVPN-Type-2-Routen an, dazu Type-3 für BUM-Verkehr. Er verarbeitet die Ankündigungen seiner Peers und programmiert die Forwarding-Datenbank entsprechend. Nichts davon erfindet einen Mechanismus: Es ist dasselbe EVPN, das die Fabric ohnehin sprach, nun auch vom Node gesprochen. Zieht ein Workload um, kündigt der Zielnode die Adresse an, der vorherige zieht sie zurück, die Fabric konvergiert von selbst.
- **Kündigt bei Bedarf zum Upstream-Gateway.** Der Router gehört dem Anbieter, nicht uns, und manche Gateways leiten nicht an eine Adresse weiter, von der sie länger nichts gehört haben. Der Controller beobachtet MetalLBs `ServiceL2Status`, um zu erfahren, welcher Node gerade welche LoadBalancer-Adresse besitzt, und schickt — wo aktiviert — periodisch ARP für sie von diesem Node. MetalLB entscheidet weiterhin über den Besitz; dies bringt den Rest des Netzes dazu, zuzustimmen.
- **Trägt die Migration mit, nicht nur das Ziel.** Drei Modi teilen sich ein Konfigurationsformat: VXLAN mit EVPN, VXLAN ohne BGP, wo MAC-Learning genügt, und reines VLAN für Segmente, die bleiben müssen.
- **Räumt hinter sich auf.** Interfaces, Routen und Regeln einer früheren Konfigurationsgeneration werden verfolgt und bei Änderung entfernt, statt sich als Rückstand anzusammeln.

Ein eigener BGP-Prozess je Netz ist das, was mehrere unabhängige EVPN-Fabrics auf einem Node erlaubt, ohne dass sich ihre Routing-Tabellen begegnen. Jeder lauscht auf einem lokalen Port, der sich aus seiner VNI ableitet — mit dem nützlichen Nebeneffekt, dass das gewöhnliche `gobgp`-CLI im Container funktioniert und ein Operator eine laufende Session mit dem Werkzeug inspiziert, das er kennt.

```yaml
podNetworks: [10.244.0.0/16, 10.96.0.0/16]

networks:
  - type: vxlan
    vxlan:
      vni: 228
      nodeNet: 10.0.7.0/24
      bgp:
        myAsn: 65001
        peerAsn: 65001
        peers: [10.0.7.19, 10.0.7.20]
    routing:
      cidr: 203.0.113.0/24
      gateway: 203.0.113.1
      arpAnnouncer: true

  - type: vlan
    vlan:
      parent: bond0
      id: 220
    routing:
      cidr: 198.51.100.0/24
      gateway: 198.51.100.1
```

## Was man über die Migration wissen sollte

Die Fabric sprach bereits EVPN, hatte aber nie an eine Adresse weiterleiten müssen, die umzieht. Nodes Adressen beanspruchen zu lassen ändert, was die Upstream-Geräte annehmen dürfen — und dort sitzen die Überraschungen.

Während der Einführung kam Verkehr zu einer Tenant-Adresse nicht mehr an, während ARP für dieselbe Adresse einwandfrei antwortete — dieselbe vertraute Signatur, eine Ebene höher. Jede Prüfung auf unserer Seite war grün: Die EVPN-Route war da, der entfernte VTEP bekannt, der Forwarding-Eintrag vorhanden. Das Gateway kannte die MAC und leitete trotzdem nicht weiter. Die Ursache lag upstream: Die Adresse war mit einer MAC-Bindung konfiguriert worden, in einer Welt, in der eine Adresse hinter genau einem Port lebte — und diese Annahme galt nicht mehr, sobald der Workload hinter jedem Node auftauchen konnte. Die Bindung zu entfernen löste es.

Der größte Teil solcher Migrationen besteht darin, Annahmen wie diese zu finden: vernünftig getroffen, Jahre früher, von jemandem, der keinen Grund hatte zu erwarten, dass die Adresse jemals umzieht.

## Ergebnis

- Öffentliche Adressen hängen nicht mehr an einem Segment. Tenant-VMs, auch GPU-Maschinen, die beim Hardwaretausch das Chassis wechseln müssen, behalten ihre Adressen über Nodes hinweg.
- Antwortverkehr verlässt den Node über das Gateway, das ihn empfangen hat.
- Das nur aus Kompatibilitätsgründen gehaltene Alt-VLAN konnte stillgelegt werden.
- Mehrere öffentliche Netze laufen auf denselben Nodes mit unabhängigen Routing-Tabellen, ohne den clusterinternen Verkehr zu stören.
- Aus sechs Kommandos pro Subnetz pro Node wurden wenige Zeilen YAML an einer Stelle — überall identisch angewandt, nach einer Neuinstallation automatisch wieder da und auch auf einem Node korrekt, den sechs Monate später jemand hinzufügt, der den Artikel nie gelesen hat.

## Warum dieser Fall zählt

<div class="cs-why card-grid">
  <div class="card"><div class="card-body"><h3 class="card-title">Die Fabric war Randbedingung, nicht Wahl</h3><p class="card-description">Das EVPN-Netz des Anbieters funktionierte. Die Aufgabe war, Kubernetes-Nodes dazu zu bringen, es zu sprechen — nicht, ein Netz vorzuschlagen, das der Kunde neu bauen müsste.</p></div></div>
  <div class="card"><div class="card-body"><h3 class="card-title">Ein Runbook ist keine Lösung</h3><p class="card-description">Das manuelle Rezept war korrekt und seit Jahren veröffentlicht. Es ging trotzdem bei jeder Neuinstallation verloren und fehlte auf jedem später hinzugefügten Node.</p></div></div>
  <div class="card"><div class="card-body"><h3 class="card-title">Migration läuft in beiden Modellen zugleich</h3><p class="card-description">VXLAN mit EVPN, VXLAN ohne BGP und reines VLAN nebeneinander auf denselben Nodes — weil niemand alle Kundensubnetze in einer Nacht umzieht.</p></div></div>
  <div class="card"><div class="card-body"><h3 class="card-title">Das Schwierige sind Upstream-Annahmen</h3><p class="card-description">Eine jahrealte MAC-Bindung, getroffen als eine Adresse nur hinter einem Port leben konnte, war der Fehler. Solche Annahmen zu finden ist der größte Teil der Arbeit.</p></div></div>
</div>

---

*Diese Case Study erscheint anonymisiert (Tier-3-Evidenz): Der Kunde wird über sein Profil beschrieben, nicht über seinen Namen. Eine Kundenreferenz ist unter NDA auf Anfrage möglich — [sprechen Sie mit dem Ænix-Vertrieb](/de/kontakt/).*

*Ænix ist das Team hinter [Cozystack](https://cozystack.io) — einem CNCF-Projekt (heute Sandbox, Incubating erwartet im Spätsommer 2026), Apache 2.0. Ænix kommerzialisiert es als Ænix Platform in drei Plattformen — Provider und Enterprise — mit den Modulen AI Platform und Developer Self-Service.*
