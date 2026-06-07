---
title: "CloudStack zu Cozystack Migration"
description: "Apache CloudStack bleibt etabliert in einigen Service-Provider-Märkten. Für Organisationen, die zu einer Kubernetes-nativen Foundation modernisieren, führt..."
related_pages:
  - /de/produkte/aenix-platform/isp-edition/
  - /de/produkte/aenix-platform/public-cloud-edition/
  - /de/produkte/cozystack
  - /de/dienstleistungen/platform-readiness-assessment
  - /de/alternativen/vmware-alternative
language: "de"
direct_answer: |
  **Die CloudStack-zu-Cozystack-Migration ist ein von Aenix durchgeführter Modernisierungspfad von Apache CloudStack hin zu einer Kubernetes-nativen Foundation auf Basis von Cozystack. Sie richtet sich an Hosting-Anbieter, Service-Provider und regionale Clouds, die ihre etablierten CloudStack-Estates auf eine offene, standardisierte Plattform überführen wollen. Aenix migriert VM-Images von KVM/XenServer zu KubeVirt, überführt CloudStack-Accounts und -Projects in das Tenant-CRD-Modell und re-architektiert Storage und Networking auf Kubernetes. Cozystack ist Apache-2.0-lizenziert (kein Core-basiertes Lizenzmodell) und ein CNCF-Projekt. Aenix bietet hierfür die Ænix Platform ISP Edition sowie Migrations-Services an.**

quick_facts:
  - label: "Was es ist"
    value: "Von Aenix durchgeführte Migration von Apache CloudStack zu einer Kubernetes-nativen Cozystack-Foundation"
  - label: "Lizenz"
    value: "Apache 2.0 (keine CPU-/Core-basierte Lizenzierung)"
  - label: "Status"
    value: "Cozystack ist ein CNCF-Projekt (Sandbox seit 28.02.2025; Incubating erwartet Spätsommer 2026)"
  - label: "Zielgruppe"
    value: "Hosting-Anbieter, Service-Provider und regionale Clouds mit bestehenden CloudStack-Estates"
  - label: "Migrationspfad"
    value: "VM-Images KVM/XenServer zu KubeVirt; CloudStack-Accounts/Projects zu Tenant CRD; Storage und Network re-architected"
  - label: "Typische Dauer"
    value: "9-15 Monate für mittelgroße Estates (Architektur-Review, Parallel-Deployment, Workload-Migration, Decommission)"
  - label: "Passende Edition"
    value: "Ænix Platform ISP Edition (Hosting/regionale Clouds); Public Cloud Edition (große Betreiber)"

faq:
  - q: "Was passiert bei einer Migration von CloudStack zu Cozystack?"
    a: "Aenix migriert VM-Images von KVM/XenServer zu KubeVirt, überführt CloudStack-Accounts und -Projects in das Tenant-CRD-Modell und re-architektiert Storage und Networking auf eine Kubernetes-native Foundation. Der typische Ablauf umfasst Architektur-Review, Parallel-Deployment, Workload-Migration und das anschließende Decommission von CloudStack."
  - q: "Wie lange dauert eine CloudStack-zu-Cozystack-Migration?"
    a: "Für mittelgroße Estates rechnet Aenix mit 9-15 Monaten. Die Dauer ergibt sich aus den vier Phasen: Architektur-Review, Parallel-Deployment, schrittweise Workload-Migration und das Decommission der bestehenden CloudStack-Umgebung."
  - q: "Welche Lizenz hat Cozystack?"
    a: "Cozystack ist unter Apache 2.0 lizenziert. Es gibt kein CPU- oder Core-basiertes Lizenzmodell. Cozystack ist zudem ein CNCF-Projekt (Sandbox seit Februar 2025), was Vendor-Neutralität und offene Governance sicherstellt."
  - q: "Für wen eignet sich die Migration zu Cozystack?"
    a: "Die Migration richtet sich an Hosting-Anbieter, Service-Provider und regionale Clouds mit bestehenden CloudStack-Estates. Für Hosting-Anbieter und regionale Clouds passt die Ænix Platform ISP Edition, für große Betreiber die Public Cloud Edition."
  - q: "Wie wird das Tenant-Modell von CloudStack übernommen?"
    a: "CloudStack-Accounts und -Projects werden in das Tenant-CRD-Modell von Cozystack überführt. Die Mandantenfähigkeit basiert dabei auf Kubernetes-CRDs, sodass die bestehende Mandantenstruktur auf eine Kubernetes-native Foundation abgebildet wird."
  - q: "Bleibt CloudStack während der Migration in Betrieb?"
    a: "Ja. Der Ansatz sieht ein Parallel-Deployment vor: Die neue Cozystack-Umgebung wird neben der bestehenden CloudStack-Installation aufgebaut, Workloads werden schrittweise migriert, und CloudStack wird erst nach abgeschlossener Migration decommissioned."
---

**Apache CloudStack bleibt etabliert in einigen Service-Provider-Märkten. Für Organisationen, die zu einer Kubernetes-nativen Foundation modernisieren, führt Aenix CloudStack-zu-Cozystack-Migrationen durch.**

> **Passt zu:** **[Ænix Platform ISP Edition](/de/produkte/aenix-platform/isp-edition/)** für Hosting-Anbieter und regionale Clouds; **[Public Cloud Edition](/de/produkte/aenix-platform/public-cloud-edition/)** für große Betreiber.

<div class="cta-row">
  <a class="cta-primary" href="/contact/">Discovery-Call buchen</a>
</div>

---

## Migrations-Ansatz

VM-Image-Migration: KVM/XenServer → KubeVirt. Tenant-Modell: CloudStack-Accounts/Projects → Tenant CRD. Storage und Network re-architected auf Kubernetes-nativer Foundation.

**Typischer Ablauf:** Architektur-Review → Parallel-Deployment → Workload-Migration → CloudStack-Decommission. 9-15 Monate für mittelgroße Estates.

---

*Aenix ist das Open-Core-Unternehmen hinter [Cozystack](https://cozystack.io) (CNCF-Projekt). Hersteller von Ænix Platform — turnkey kommerzielle Cloud-in-a-Box in fünf Editions.*
