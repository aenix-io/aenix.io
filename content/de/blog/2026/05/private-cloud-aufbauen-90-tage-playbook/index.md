---
title: "Die eigene Private Cloud aufbauen — ein 90-Tage-Playbook für den Ansatz unter Führung des Plattform-Teams"
seo_title: "Private Cloud aufbauen: ein 90-Tage-Playbook"
description: "Ein Plan von Tag 0 bis Tag 90 für den Aufbau einer Private Cloud: was jeden Monat entsteht, was Sie bewusst weglassen und wo Teams regelmäßig straucheln."
slug: "private-cloud-aufbauen-90-tage-playbook"
date: "2026-05-02"
cover_image: "/img/blog/covers/de/private-cloud-aufbauen-90-tage-playbook.jpg"
author: "Andrei Kvapil"
type: "article"
topics: ["DORA", "NIS2", "VMware", "Cozystack", "Cilium", "Talos"]
language: "de"
hreflang_en: "/blog/2026/05/build-private-cloud-90-day-playbook/"
companion_landing: "/de/dienstleistungen/build-private-cloud/"
quiz:
  title: "Wissens-Check: 90-Tage-Playbook für die Private Cloud"
  questions:
    - q: "Wie lange dauert die Discovery-Phase im Playbook?"
      options:
        - { text: "Eine Woche", correct: true }
        - { text: "Einen Sprint von zwei Wochen", correct: false }
        - { text: "Einen Monat mit Workshops", correct: false }
      explanation: "Die Discovery an Tag 0 dauert eine Woche. Ergebnis: ein einseitiges Architektur-Briefing zu Auslöser, Workload-Portfolio, Kapazität, Hardware-Rahmenbedingungen und Compliance-Umfang. Noch kein Code."
    - q: "Was ist das wichtigste Ergebnis am Ende von Tag 30?"
      options:
        - { text: "Alle Kunden-Workloads sind in die mandantenfähige Produktion migriert", correct: false }
        - { text: "Die Hardware ist eingebaut, verkabelt und eingeschaltet", correct: false }
        - { text: "Ein funktionierender Single-Tenant-Cluster mit grundlegender Observability", correct: true }
      explanation: "Ende von Tag 30: eine funktionierende Plattform — Single-Tenant, ein Cluster, grundlegende Observability. Für Kunden noch NICHT produktionsreif. Mandantenfähigkeit und Betrieb folgen an den Tagen 31–60."
    - q: "Was wird im 90-Tage-Umfang ausdrücklich weggelassen?"
      options:
        - { text: "Betrieb über mehrere Regionen und Optimierung von GPU-Workloads", correct: true }
        - { text: "Backup und Disaster Recovery mit Velero", correct: false }
        - { text: "Identity-Integration über Keycloak oder den gewählten IdP", correct: false }
      explanation: "Ehrlich benannt, was 90 Tage NICHT abdecken: ein ausgefeiltes Kundenportal, Betrieb über mehrere Regionen/Rechenzentren, Optimierung für GPU-/KI-Workloads, eine umfassende Compliance-Zertifizierung (die Architektur ist darauf ausgerichtet, das Audit ist aber ein eigenes Vorhaben) und die Stilllegung der Altsysteme (Monate 4–12 in Kohorten)."
    - q: "Wie lange dauert die Fundament-Phase typischerweise?"
      options:
        - { text: "Tag 31 bis 60 des Playbooks", correct: false }
        - { text: "Tag 1 bis 30 des Playbooks", correct: true }
        - { text: "Tag 61 bis 90 des Playbooks", correct: false }
      explanation: "Fundament-Phase = Tag 1–30: Woche 1 Hardware, Woche 2 Betriebssystem und Plattform, Woche 3 Storage und Netzwerk, Woche 4 Identity und Observability. Mandantenfähigkeit und Betrieb kommen an den Tagen 31–60, Workload-Onboarding und Golden Paths an den Tagen 61–90."
    - q: "Welche Infrastruktur wird in Woche 4 eingerichtet?"
      options:
        - { text: "KubeVirt-VM-Vorlagen und Snapshot-Richtlinien", correct: false }
        - { text: "Mandantenfähigkeit über das Tenant CRD mit RBAC pro Tenant", correct: false }
        - { text: "Integration des Identity-Providers und der Observability-Stack", correct: true }
      explanation: "Woche 4 schließt das Fundament ab: Keycloak (oder der gewählte IdP) integriert; VictoriaMetrics + VictoriaLogs ausgerollt; erste Dashboards und Alerts; Audit-Logging konfiguriert. Mandantenfähigkeit folgt erst in Woche 5–6."
---


„Die eigene Cloud bauen“ war 2018 noch ein Nischenthema. 2026 ist es Mainstream — die Preisänderungen von Broadcom, der Druck in Richtung Souveränität und die Wirtschaftlichkeit von KI-Workloads haben Tausende Organisationen von „Wir mieten einfach Cloud“ zu „Wir brauchen eine Plattform, die wir selbst kontrollieren“ gebracht.

Was früher 18 Monate dauerte, schafft man heute für das Fundament in rund 90 Tagen; die folgenden Quartale bringen dann Reife. Der Grund: Der Open-Source-Plattform-Stack ist ausgereift.

## Tag 0: Discovery (1 Woche)

Bevor Sie bauen, verständigen Sie sich auf:

- **Auslöser** — was treibt Sie zum Aufbau? (VMware-Ausstieg, Souveränität, Kosten, KI.) Der Auslöser prägt die Architektur.
- **Workload-Portfolio** — was läuft heute, was kommt hinzu. Daraus folgt die Dimensionierung.
- **Kapazität** — die Kapazität des internen Teams, die Plattform nach dem Aufbau zu betreiben.
- **Hardware-Rahmenbedingungen** — Rechenzentrums- oder Colocation-Vereinbarungen, Erneuerungszyklen, Netzwerkanbindung.
- **Compliance-Umfang** — DORA, NIS2, DSGVO, branchenspezifische Vorgaben.

Ergebnis: ein einseitiges Architektur-Briefing. Noch kein Code.

## Tag 1–30: Fundament

### Woche 1: Hardware einrichten
- Compute-Server beschafft bzw. umgewidmet
- Storage-Tier bereitgestellt
- Netzwerk-Fabric konfiguriert (BGP, Leaf-Spine)
- Out-of-Band-Management

### Woche 2: Betriebssystem und Plattform
- Talos Linux installiert (Standard für Cozystack) oder die gewählte Betriebssystemschicht
- Cozystack-Plattform ausgerollt
- Erster Cluster in Betrieb
- Zugriff für Operatoren und Admins geprüft

### Woche 3: Storage und Netzwerk
- LINSTOR (DRBD) ausgerollt und validiert
- Cilium mit Network Policies konfiguriert
- MetalLB / Ingress eingerichtet
- Replikation über Nodes hinweg getestet

### Woche 4: Identity und Observability
- Keycloak (oder der gewählte IdP) integriert
- VictoriaMetrics + VictoriaLogs ausgerollt
- Erste Dashboards und Alerts
- Audit-Logging konfiguriert

Ende von Tag 30: eine funktionierende Plattform. Single-Tenant, ein Cluster, grundlegende Observability. Für Kunden noch nicht produktionsreif.

## Tag 31–60: Mandantenfähigkeit und Betrieb

### Woche 5–6: Mandantenfähigkeit
- Tenant CRD konfiguriert
- RBAC und Quotas pro Tenant
- Playbook für das Onboarding von Tenants
- Erste Test-Tenants bereitgestellt

### Woche 7–8: Betrieb
- Runbooks für typische Szenarien (Ausfall eines Pods, Ausfall eines Nodes, Wiederherstellung der Control Plane, Zertifikatsrotation)
- Rufbereitschaft eingerichtet
- Backup und DR mit Velero
- Prozess für die Incident Response dokumentiert

Ende von Tag 60: Die Plattform trägt mehrere Tenants mit dokumentiertem Betrieb. Bereit für das Onboarding der ersten echten Workload.

## Tag 61–90: Workload-Onboarding und Golden Paths

### Woche 9–10: Migration der ersten Workload
- Pilot-Workload (geringes Risiko) aus der bestehenden Infrastruktur migriert
- Performance und Stabilität validiert
- Backup und Wiederherstellung getestet
- Feedback der (internen) Kunden eingeholt

### Woche 11–12: Golden Paths
- Self-Service-Pfade für die 5–10 häufigsten Bedürfnisse der Produktteams
- Service-Vorlagen dokumentiert
- Automatisches Onboarding in die Observability
- CI/CD auf Anwendungsebene integriert

Ende von Tag 90: Die Plattform trägt produktive Workloads mit Self-Service. Von hier an wächst die Reife immer weiter.

## Was Sie in 90 Tagen weglassen

Ehrlich benannt:

- **Ausgefeiltes Kundenportal** — das Cozystack Dashboard funktioniert, der Feinschliff der Oberfläche erfolgt aber schrittweise.
- **Betrieb über mehrere Regionen / Rechenzentren** — zuerst eine Region; mehrere Regionen in den Monaten 4–6.
- **Optimierung für GPU-/KI-Workloads** — generische GPU-Unterstützung ja; KI-spezifische Optimierungen später.
- **Umfassende Compliance-Zertifizierung** — die Architektur ist auf DORA/NIS2/DSGVO ausgerichtet; das Zertifizierungsaudit ist ein eigenes Vorhaben.
- **Stilllegung der Altinfrastruktur** — meist in den Monaten 4–12 in Kohorten.

## Wo Teams regelmäßig straucheln

### Stolperstein 1: unterbesetztes Plattform-Team
Ein Plattform-Team aus 5 Personen, das eine Private Cloud baut und nebenbei die bestehende Infrastruktur betreibt, bleibt in Woche 4 stecken. Realistische Teamgröße: 5–10 dedizierte Engineers für die Aufbauphase; für den Regelbetrieb kann es auf 3–5 schrumpfen.

### Stolperstein 2: an der Observability sparen
Die Observability wird zusammengestrichen, weil sie in den Demos an Tag 0 nicht auftaucht. In der Produktion rächt sich das. Bauen Sie die Observability in Woche 4 zusammen mit der Kernplattform auf.

### Stolperstein 3: herstellergetriebene „Private-Cloud-Appliance“
Wer eine „komplette Private Cloud in der Box“ kauft, baut den Lock-in wieder auf. Auch der Aufbau geht langsamer voran, weil die Appliance im Weg steht.

### Stolperstein 4: keine Produktorientierung im Plattform-Team
Exzellentes Engineering ohne Produktorientierung bringt eine Plattform hervor, die interne Kunden nicht so annehmen, wie sie gedacht war.

### Stolperstein 5: die Compliance-Ebene überspringen
Eine Architektur, die Compliance auf später verschiebt, muss nachgerüstet werden. Bauen Sie Souveränität, Audit und Observability von Tag 0 an mit Blick auf die Compliance.

## Was 90 Tage nicht umfassen

Das 90-Tage-Playbook liefert ein Fundament. Die Reife wächst weiter:

- **Monate 4–6:** Migrationskohorten für Workloads, Ausbau der Golden Paths, regionaler Standort / DR-Standort
- **Monate 7–12:** GPU-/KI-Subsysteme, fortgeschrittene Muster für Mandantenfähigkeit, FinOps-Integration
- **Jahr 2:** Reife, Optimierung, Skalierung

Eine Private Cloud im zweiten Jahr ist eine andere Plattform als eine Private Cloud an Tag 90.
