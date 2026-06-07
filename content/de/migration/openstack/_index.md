---
title: "OpenStack zu Cozystack Migration — Modernisierung des operativen Footprints"
description: "OpenStack bleibt valide, wo tiefe Expertise lebt. Wo Engineer-Verfügbarkeit und operativer Footprint Modernisierung erzwingen, ist Cozystack die..."
related_pages:
  - /de/alternativen/openstack-alternative
  - /de/produkte/aenix-platform/isp-edition/
  - /de/produkte/aenix-platform/public-cloud-edition/
  - /de/produkte/cozystack
  - /de/dienstleistungen/platform-readiness-assessment
language: "de"
direct_answer: |
  **Die OpenStack-zu-Cozystack-Migration ist der Wechsel von einer OpenStack-Cloud zu Cozystack, um den operativen Footprint und den Bedarf an seltenem OpenStack-Engineering zu reduzieren. Sie richtet sich an Hosting-Anbieter, regionale Clouds und große Betreiber, die OpenStack at scale konsolidieren. Cozystack bündelt VMs und Container über eine Kubernetes-API (KubeVirt), Cilium-eBPF-Networking und LINSTOR/DRBD-Storage und ist Apache-2.0-lizenziert ohne Core-basierte Lizenzkosten. Aenix führt die Migration in vier Phasen durch: Architektur-Review, Parallel-Deployment neben OpenStack, Workload-Migration nach Klasse und OpenStack-Decommission nach Final-Validation. Eine Total-Migration dauert für mittelgroße Estates typisch 12 bis 18 Monate.**

quick_facts:
  - label: "Was es ist"
    value: "Migration von einer OpenStack-Cloud zu Cozystack zur Reduzierung von operativem Footprint und OpenStack-Engineering-Bedarf"
  - label: "Lizenz"
    value: "Apache 2.0 (keine CPU-/Core-basierte Lizenzierung)"
  - label: "Status"
    value: "Cozystack ist ein CNCF-Projekt (Sandbox seit 28.02.2025; Incubating erwartet Spätsommer 2026)"
  - label: "Für wen"
    value: "Hosting-Anbieter und regionale Clouds (ISP Edition); große Betreiber, die OpenStack at scale konsolidieren (Public Cloud Edition)"
  - label: "Migrationsablauf"
    value: "Architektur-Review → Parallel-Deployment → Workload-Migration nach Klasse → Decommission"
  - label: "Dauer"
    value: "Total-Migration typisch 12-18 Monate für mittelgroße Estates"
  - label: "Technologie-Basis"
    value: "KubeVirt (VMs + Container über eine Kubernetes-API), Cilium (eBPF-Networking), LINSTOR/DRBD (Storage)"

faq:
  - q: "Wann lohnt sich ein Wechsel von OpenStack zu Cozystack?"
    a: "OpenStack bleibt valide, wo tiefe Expertise im Team lebt. Der Wechsel lohnt sich dort, wo Engineer-Verfügbarkeit knapp ist und der operative Footprint Modernisierung erzwingt. Cozystack reduziert die Komponentenzahl, indem es VMs und Container über eine einzige Kubernetes-API betreibt."
  - q: "Wie läuft die OpenStack-zu-Cozystack-Migration ab?"
    a: "In vier Phasen: Architektur-Review des aktuellen OpenStack-Footprints mit Workload-Mapping, Parallel-Deployment von Cozystack neben OpenStack, Workload-Migration nach Klasse (Compute, Storage, Network in Kohorten) und OpenStack-Decommission nach Final-Validation."
  - q: "Wie lange dauert eine vollständige Migration?"
    a: "Für mittelgroße Estates dauert eine Total-Migration typisch 12 bis 18 Monate. Da Cozystack parallel zu OpenStack deployt wird, laufen beide Plattformen während der Migration nebeneinander und Workloads werden in Kohorten verschoben."
  - q: "Muss OpenStack während der Migration abgeschaltet werden?"
    a: "Nein. Cozystack wird neben dem bestehenden OpenStack-Footprint deployt. Beide Plattformen laufen parallel, bis alle Workloads migriert und final validiert sind. Erst danach erfolgt das OpenStack-Decommission."
  - q: "Welche Cozystack-Technologie ersetzt die OpenStack-Komponenten?"
    a: "Cozystack nutzt KubeVirt für VMs und Container über eine gemeinsame Kubernetes-API, Cilium (eBPF) für Networking und LINSTOR/DRBD für Storage. Mandantenfähigkeit erfolgt über das Tenant-CRD. Das ersetzt den vielteiligen OpenStack-Komponentenstack durch eine Kubernetes-native Plattform."
  - q: "Was kostet Cozystack im Vergleich zur OpenStack-Lizenzierung?"
    a: "Cozystack ist Apache-2.0-lizenziert, ohne CPU- oder Core-basierte Lizenzkosten. Aenix bietet die produktisierte Ænix Platform plus Services in Stufen an: Basic 1.250 $/Monat (10 Nodes), Standard 3.000 $, Plus 5.500 $ und Enterprise nach Vereinbarung."
---

**OpenStack bleibt valide, wo tiefe Expertise lebt. Wo Engineer-Verfügbarkeit und operativer Footprint Modernisierung erzwingen, ist Cozystack die realistische nächste Plattform. Aenix führt OpenStack-zu-Cozystack-Migrationen durch.**

> **Passt zu:** **[Ænix Platform ISP Edition](/de/produkte/aenix-platform/isp-edition/)** für Hosting-Anbieter und regionale Clouds; **[Public Cloud Edition](/de/produkte/aenix-platform/public-cloud-edition/)** für große Betreiber, die OpenStack at scale konsolidieren.

<div class="cta-row">
  <a class="cta-primary" href="/contact/">Discovery-Call buchen</a>
  <a class="cta-secondary" href="/de/alternativen/openstack-alternative">OpenStack-Alternative →</a>
</div>

---

## Migrations-Ansatz

- **Architektur-Review** — aktueller OpenStack-Footprint, Workload-Mapping
- **Parallel-Deployment** — Cozystack neben OpenStack
- **Workload-Migration nach Klasse** — Compute / Storage / Network in Kohorten
- **OpenStack-Decommission** — nach Final-Validation

**Typischer Ablauf:** Architektur-Review → Parallel-Deployment → Workload-Migration → Decommission. Total-Migration typisch 12-18 Monate für mittelgroße Estates.

---

*Aenix ist das Open-Core-Unternehmen hinter [Cozystack](https://cozystack.io) (CNCF-Projekt). Hersteller von Ænix Platform — turnkey kommerzielle Cloud-in-a-Box in fünf Editions.*
