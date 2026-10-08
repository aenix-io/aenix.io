---
title: "CloudStack-Migration zu Cozystack — der Modernisierungspfad für etablierte Service Provider"
seo_title: "CloudStack-Migration zu Cozystack für Service Provider"
description: "Wie Service Provider Apache CloudStack auf Cozystack als Kubernetes-natives Ziel modernisieren: Architektur-Mapping, Migrationsphasen und Abwägungen."
slug: "cloudstack-migration-cozystack-modernisierung"
date: "2026-05-06"
cover_image: "/img/blog/covers/de/cloudstack-migration-cozystack-modernisierung.jpg"
author: "Aenix Team"
type: "tutorial"
topics: ["CloudStack", "Cozystack", "Migration", "Hosting", "Multi-tenancy"]
language: "de"
hreflang_en: "/blog/2026/05/cloudstack-migration-cozystack-path/"
companion_landing: "/de/migration/cloudstack/"
companion_label: "Zum CloudStack-Migrations-Hub →"
quiz:
  title: "Wissens-Check: Migration von CloudStack zu Cozystack"
  questions:
    - q: "Welche drei Druckfaktoren nennt der Artikel als Haupttreiber der CloudStack-Modernisierung 2026?"
      options:
        - { text: "Fachkräftemangel, Grenzen des Servicekatalogs, Nachfrage nach Kubernetes-nativen Diensten", correct: true }
        - { text: "Lizenzkosten, Vendor-Lock-in, Druck der Aufsicht", correct: false }
        - { text: "Performance-Probleme, Sicherheits-CVEs, End-of-Life der Hardware", correct: false }
      explanation: "Die drei dominierenden Druckfaktoren sind der Fachkräftemangel (der Pool an CloudStack-Expertise schrumpft), die Grenze des Servicekatalogs (der Fokus auf VMs, Netzwerke und Storage kann Managed-Datenbanken, S3 oder GPU nicht nativ aufnehmen) und die Nachfrage der Kunden nach Kubernetes-nativen Diensten."
    - q: "Welche zwei CloudStack-Bereiche brauchen ein grundlegendes Redesign statt einer 1:1-Abbildung auf Cozystack?"
      options:
        - { text: "Hypervisor-Schicht und Storage-Subsystem", correct: false }
        - { text: "Accounts-/Domains-Modell und Management Server", correct: false }
        - { text: "Netzwerkmodell und Servicekatalog", correct: true }
      explanation: "Das Networking braucht ein Redesign, weil das eBPF-basierte L4/L7-Modell von Cilium grundlegend anders ist als der L2/L3-verankerte Virtual Router von CloudStack. Der Servicekatalog wird von den CloudStack Service Offerings auf Cozystack-Paketdefinitionen plus ApplicationDefinition umgestellt."
    - q: "Wie lange dauert eine Migration von CloudStack zu Cozystack realistischerweise insgesamt?"
      options:
        - { text: "Zwölf bis vierundzwanzig Monate insgesamt", correct: true }
        - { text: "Drei bis sechs Monate insgesamt", correct: false }
        - { text: "Sechs bis neun Monate insgesamt", correct: false }
      explanation: "Die Gesamtdauer beträgt 12 bis 24 Monate vom Projektstart bis zur vollständigen Abschaltung von CloudStack, verteilt auf Assessment (3–6 Wochen), Fundament (2–4 Monate), Servicekatalog (2–4 Monate), VM-Migration in Kohorten (3–9 Monate) und Rückbau (2–6 Monate)."
    - q: "Wo passt eine CloudStack-Modernisierung laut Artikel schlecht?"
      options:
        - { text: "Bei Betreibern mit wachsender Nachfrage nach Managed-Datenbanken", correct: false }
        - { text: "Bei sehr kleinen Betreibern mit weniger als etwa 200 Kunden", correct: true }
        - { text: "Bei Betreibern, die heute KVM-basiertes CloudStack betreiben", correct: false }
      explanation: "Die Fixkostenökonomie der Cozystack Public Cloud Platform amortisiert sich für sehr kleine Betreiber (<200 Kunden) nicht, und Betreiber mit sinkender Kundenzahl können die Modernisierungskosten nicht rechtfertigen. Wachsende Nachfrage nach Managed Services und KVM-basiertes CloudStack sind dagegen Signale für eine gute Passung."
    - q: "Wie sollte man laut Artikel mit Kunden umgehen, die eigenes Tooling gegen die CloudStack-API gebaut haben?"
      options:
        - { text: "Alle Kunden zwingen, beim Cutover neu zu schreiben", correct: false }
        - { text: "Diese Kunden aus dem Migrationsumfang herausnehmen", correct: false }
        - { text: "Einen Kompatibilitäts-Shim oder eine geplante API-Migration anbieten", correct: true }
      explanation: "Der Artikel nennt die Abweichung der Self-Service-API für Kunden als Stolperstein und empfiehlt entweder einen CloudStack-API-kompatiblen Shim (für einen Teil der Operationen) oder eine geplante Migration der kundenseitigen API auf Cozystack-native Muster."
---


Apache CloudStack ist bei Service Providern in mehreren Märkten in der
EU, im MENA-Raum und in APAC fest etabliert. Es bringt ein ausgereiftes
Mandantenmodell, breite Unterstützung durch die Community und gut
verstandene Betriebsmuster mit. Warum also prüfen Betreiber 2026 eine
Modernisierung?

Drei Druckfaktoren stechen heraus:

1. **Fachkräftemangel** — der Pool an CloudStack-Expertise ist kleiner
   als früher, und neue Engineers werden auf Kubernetes ausgebildet,
   nicht auf das Komponentenmodell von CloudStack.
2. **Grenzen des Servicekatalogs** — der Kern von CloudStack sind VMs,
   Netzwerke und Storage. Managed-Datenbanken, S3-kompatibler Object
   Storage, Container-native Workloads und GPU-as-a-Service werden
   entweder umständlich angeflanscht oder laufen komplett außerhalb der
   Plattform.
3. **Nachfrage der Kunden nach Kubernetes-nativen Diensten** — Kunden
   wollen zunehmend Tenant-Kubernetes-Cluster, Container-Workloads und
   Kubernetes-natives Networking. CloudStack löst das über
   Integrationen, Cozystack nativ.

## Wo CloudStack weiterhin die bessere Wahl ist

Bevor wir über Modernisierung sprechen, sollten wir ehrlich benennen,
wo CloudStack nach wie vor die richtige Antwort ist:

- **Etablierte Expertise und stabiler Kundenstamm** — Betreiber mit
  tiefer CloudStack-Betriebserfahrung und stabiler Kundenzahl, bei
  denen die Migrationskosten den Nutzen der Modernisierung übersteigen
  könnten
- **VMware-on-CloudStack-Deployments** — wo CloudStack als
  Orchestrierungsschicht über einem bestehenden VMware-Bestand läuft,
  lautet die Modernisierungsfrage zuerst „Verlassen wir VMware?“ und
  erst danach „Wechseln wir den Orchestrator?“
- **Spezifische CloudStack-Funktionen ohne direktes
  Kubernetes-Äquivalent** — tiefgehende Netzwerkkonfigurationsmuster,
  bestimmte Load-Balancer-Integrationen, an regionale Beschaffung
  gebundene Funktionen

Die Modernisierung passt woanders: bei Providern mit wachsender
Kundennachfrage nach Kubernetes-nativen Diensten, bei Providern, deren
Betriebskomplexität mit jeder Fluktuation im Team weiter zunimmt, und
bei Providern, die Managed-Datenbanken, S3 oder GPU-Dienste einführen,
die nicht nativ in CloudStack passen.

## Architektur-Mapping: CloudStack → Cozystack

| CloudStack-Komponente | Cozystack-Äquivalent | Anmerkungen |
|---|---|---|
| **Management Server** | Cozystack Control Plane (Kubernetes-API + cozystack-controller) | Anderes Betriebsmodell — deklaratives GitOps statt imperativer CloudStack-API |
| **System-VMs (SSVM, CPVM, VR)** | In die Cozystack-Plattform integriert — keine System-VMs pro Tenant nötig | Deutliche betriebliche Vereinfachung |
| **Hypervisor (KVM, XenServer, VMware)** | KubeVirt auf Talos | Der reine KVM-Pfad ist am häufigsten; VMware-on-CloudStack wird in der Regel zuerst zu einer Migration von VMware zu Cozystack |
| **Primary Storage** | LINSTOR (DRBD) | Anderes Replikationsmodell; Kapazitätsplanung muss neu gerechnet werden |
| **Secondary Storage** | SeaweedFS (S3-kompatibel) | Besser für Snapshots, Backups und ISOs; native S3-API, die Kunden direkt nutzen können |
| **Networking (Advanced / Basic / Isolated)** | Cilium (eBPF) | Architektonisches Umdenken — Cilium arbeitet auf L4/L7 mit eBPF; das CloudStack-Netzwerkmodell ist auf L2/L3 verankert |
| **Virtual Router (VR)** | Cilium + MetalLB oder BGP | Anderes Konzept; das Routing findet auf Cilium-Ebene statt |
| **Accounts und Domains (Mandantenfähigkeit)** | Tenant CRD mit verschachtelten Tenants | Konzeptionell näher an CloudStack als andere Kubernetes-Plattformen |
| **API und UI** | Kubernetes-API + Cozystack Dashboard | Die Oberfläche für Kunden unterscheidet sich |
| **Volumes, Snapshots, Templates** | KubeVirt CDI + DataVolume + VirtualMachineImage | Image-Migration per Image-Konvertierung |
| **Service Offering / Disk Offering** | Cozystack-Paketdefinitionen | Anderes Modell; das Produktteam kuratiert den Katalog |
| **Network Offering** | Cilium NetworkPolicy + Ingress | Andere Abstraktion |
| **VPC** | Cilium ClusterPool + Tenant-bezogene NetworkPolicy | Konzeptionell ähnlich |

Zwei Bereiche brauchen ein grundlegendes Redesign statt einer
1:1-Abbildung: das **Networking** (das eBPF-Modell von Cilium ist
grundlegend anders als der L2/L3-Virtual-Router von CloudStack) und der
**Servicekatalog** (CloudStack Service Offerings gegenüber
Cozystack-Paket plus ApplicationDefinition).

## Migrationsphasen

### Phase 0 — Assessment (3–6 Wochen)

Workload-Inventar: Anzahl der VMs, Betriebssystem-Mix,
vCPU-/RAM-/Disk-Profile, Kritikalitätsstufe. Netzwerk-Inventar: Anzahl
der VPCs, Vergabe öffentlicher IPs, Load-Balancer-Konfigurationen,
Security-Group-Regeln. Storage-Inventar: Kapazität von Primary und
Secondary Storage, Aufbewahrung von Snapshots, Volume-Typen.
Mandanten-Inventar: Anzahl der Accounts, Domain-Hierarchie,
Projektstruktur.

Kundenbezogenes Inventar: ARPU pro Kunde, Servicenutzung, vertragliche
Verpflichtungen, SLA-Stufen, Berührungspunkte mit der
Billing-Integration.

Ergebnis: ein Migrationsplan mit Workload-Gruppen (jetzt migrieren /
später migrieren / bleibt / neu architektieren), Risikomarkierungen
und Zeitplan.

### Phase 1 — Cozystack-Fundament (2–4 Monate)

Hardwarebeschaffung (oder Weiterverwendung vorhandener Hardware). Die
Cozystack-Plattform wird auf neuer Infrastruktur parallel zum
bestehenden CloudStack-Bestand aufgebaut. Cilium-Networking wird
validiert, LINSTOR-Storage in den Betrieb überführt. Anbindung an das
Identity-Management (Keycloak oder den IdP, den der Provider
betreibt).

Das Tenant-CRD-Modell wird so entworfen, dass es sich sauber aus der
Account-/Domain-Hierarchie von CloudStack ableiten lässt — in der Regel
wird jeder CloudStack-Account der obersten Ebene zu einem
Cozystack-Tenant, verschachtelte CloudStack-Domains werden zu
verschachtelten Tenants.

Endzustand: eine funktionierende Cozystack-Plattform, interne
Validierung abgeschlossen, noch nicht für Kunden freigegeben.

### Phase 2 — Servicekatalog und Kundenportal (2–4 Monate)

Anpassung des Cozystack Dashboards an die Marke des Providers.
WHMCS-Integration, falls der Provider WHMCS nutzt (das tun die meisten
CloudStack-Provider mit WHMCS). Rollout des Servicekatalogs — zuerst
die Basisdienste (VMs, Volumes, S3-Buckets, grundlegendes Networking),
danach schrittweise Managed Services, die es in der CloudStack-Ära
nicht gab.

### Phase 3 — VM-Migration (3–9 Monate)

Die Workloads ziehen in Kohorten von jeweils 50 bis 200 Kunden um. Pro
Kohorte:

1. **Image-Konvertierung** — CloudStack-Templates und Kunden-Images
   werden in ein KubeVirt-kompatibles Format konvertiert. Die meisten
   CloudStack-KVM-Images lassen sich mit qemu-img plus kleinen
   Metadaten-Anpassungen konvertieren. In Windows-VMs der Kunden werden
   virtio-Treiber injiziert (Standardvorgehen).
2. **Netzwerk-Mapping** — Übersetzung von VLANs in Cilium-Policies,
   von Security-Group-Regeln in NetworkPolicies und vom VPC-Routing in
   ClusterPool plus Cilium L3.
3. **Storage-Migration** — die Volume-Daten werden vom
   CloudStack-Primary-Storage nach LINSTOR migriert. Die
   Snapshot-Historie wird je nach Aufbewahrungsrichtlinie übernommen
   oder bereinigt.
4. **Cutover** — der Workload läuft für ein Validierungsfenster
   (typischerweise 7–14 Tage) parallel auf Cozystack. Der Kunde wird
   über den Cutover informiert; der endgültige Cutover erfolgt in einem
   geplanten Wartungsfenster.

### Phase 4 — Rückbau von CloudStack (2–6 Monate)

Mit jeder abgeschlossenen Migrationskohorte wird Hardware in den
Cozystack-Cluster übernommen. Der CloudStack Management Server wird
abgeschaltet. Das Betriebstooling (Monitoring, Ticketing-Integrationen)
wird auf den Cozystack-Stack konsolidiert.

## Wo Migrationen von CloudStack zu Cozystack ins Stocken geraten

### 1. Übersetzung des Netzwerkmodells

Das Netzwerkmodell von CloudStack war historisch konfigurierbarer als
das der meisten Cloud-Orchestrierungsplattformen — Advanced
Networking, Basic Networking, Isolated Networks, VPC, öffentliche IPs,
Hairpin-Routing, aufwendige Security-Group-Konfigurationen. All das in
Cilium, MetalLB und Standard-Kubernetes-NetworkPolicies zu übersetzen,
erfordert sorgfältige Architekturarbeit. Wer das in Phase 0–1
überspringt, produziert in Phase 3 Produktionsvorfälle.

### 2. Billing-Integration für Kunden

Die Billing-Hooks von CloudStack unterscheiden sich von denen von
Cozystack. Provider mit WHMCS-integriertem CloudStack-Billing brauchen
in der Regel Integrationsarbeit für WHMCS auf der Cozystack-Seite —
Ænix liefert das als Teil des Projekts, es ist aber für jeden Provider
spezifisch.

### 3. Abweichende Self-Service-API für Kunden

CloudStack bietet eine umfassende API für Kunden (cmdkit / SDK).
Kunden, die eigenes Tooling gegen die CloudStack-API gebaut haben,
brauchen einen Migrationspfad: entweder einen CloudStack-API-kompatiblen
Shim auf Cozystack (für einen Teil der Operationen möglich) oder eine
Migration der kundenseitigen API auf Cozystack-native Muster. Planen
Sie das ein.

## Wann die Migration von CloudStack zu Cozystack die richtige Antwort ist

Gute Passung:

- Service Provider mit KVM-basiertem CloudStack und wachsender
  Kundennachfrage nach Managed-Datenbanken, S3, Container-nativen
  Diensten oder GPU-Diensten
- Der Fachkräftemangel beginnt, die Betriebsqualität zu beeinträchtigen
- Der Kundenstamm wächst oder ist stabil, schrumpft aber nicht
- Der Betreiber hat Budget für ein Modernisierungsprogramm von 9 bis 24
  Monaten

Bedingte Passung:

- VMware-on-CloudStack-Provider — zuerst die VMware-Migration lösen
- Stabile, langsam wachsende Betreiber mit tiefer
  CloudStack-Expertise, die den betrieblichen Schmerz nicht spüren —
  die Modernisierung ist ein aufschiebbares Investitionsprojekt

Schlechte Passung:

- Betreiber mit sinkender Kundenzahl — die Modernisierungskosten sind
  schwer zu rechtfertigen
- Sehr kleine Betreiber (<200 Kunden) — die Fixkosten der Cozystack
  Public Cloud Platform übersteigen die Einsparungen

## Ablauf der Zusammenarbeit

- **Discovery Call** (30 Min., kostenlos)
- **Migrations-Assessment** (3–6 Wochen, Festpreis) — Inventar,
  Workload-Gruppen, Zeitplan
- **Pilot-Deployment** (3–6 Monate) — Aufbau der Cozystack-Plattform,
  Migration von 5–10 wohlgesonnenen Kunden, Validierung der
  Billing-Workflows
- **Migration der Kundenkohorten** (6–18 Monate) — Workload-Migration
  in Kohorten, parallel dazu Rückbau von CloudStack
- **Managed Retainer** (optional, fortlaufend) — Ænix Tier-3-SLA

Gesamtdauer: 12–24 Monate vom Projektstart bis zur vollständigen
Abschaltung von CloudStack.

## Weiterführende Inhalte

- **[CloudStack-Migrations-Hub](/de/migration/cloudstack/)** — der
  Einstiegspunkt zur Migration im Überblick
- **[Produktseite Public Cloud Platform](/de/produkte/public-cloud-platform/)** —
  das häufigste Zielprodukt bei CloudStack-Migrationen
- **[Branchenseite Hosting-Anbieter](/de/branchen/hosting-anbieter/)** —
  Positionierung speziell für Hosting-Anbieter
- **[Plattformmodernisierung für Hosting-Anbieter](/de/blog/2026/05/hosting-anbieter-plattform-modernisierung/)** —
  Artikel zu einem verwandten Modernisierungsmuster
