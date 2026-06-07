---
title: "Cozystack vs OpenShift Virtualization — Head-to-Head für KubeVirt-Plattform-Entscheidungen"
description: "Beide KubeVirt-basiert. Unterschiedliche kommerzielle Modelle, unterschiedliche operative Footprints."
related_pages:
  - /de/alternativen/openshift-alternative
  - /de/produkte/aenix-platform/enterprise-edition/
  - /de/produkte/aenix-platform/idp-edition/
  - /de/produkte/cozystack
language: "de"
direct_answer: |
  **Cozystack vs OpenShift Virtualization vergleicht zwei KubeVirt-basierte Plattformen für virtuelle Maschinen und Container auf einer Kubernetes-API. Beide nutzen KubeVirt als Fundament, unterscheiden sich aber im kommerziellen Modell: OpenShift Virtualization erfordert eine Red-Hat-Subscription und bindet an den US-Vendor-Stack von Red Hat/IBM, während Cozystack unter Apache 2.0 quelloffen ist, ohne CPU- oder Core-basierte Lizenzierung. Der Vergleich richtet sich an Plattform- und Infrastruktur-Teams, die eine OpenShift-Alternative evaluieren. Aenix produktisiert Cozystack als Ænix Platform und liefert kommerziellen Support, sodass regulierte Unternehmen Souveränität, Kostendisziplin und kundenkontrollierte Hardware sowie Schlüssel ohne Vendor-Lock-in erreichen.**

quick_facts:
  - label: "Was es ist"
    value: "Head-to-Head-Vergleich von Cozystack und OpenShift Virtualization — zwei KubeVirt-basierte Plattformen für VMs und Container auf einer Kubernetes-API"
  - label: "Lizenz"
    value: "Apache 2.0 (keine CPU-/Core-basierte Lizenzierung); OpenShift erfordert eine Red-Hat-Subscription"
  - label: "Status"
    value: "Cozystack ist ein CNCF-Projekt (Sandbox seit 28.02.2025; Incubating erwartet Spätsommer 2026)"
  - label: "Gemeinsames Fundament"
    value: "Beide basieren auf Kubernetes + KubeVirt für virtuelle Maschinen und Container"
  - label: "Technischer Stack (Cozystack)"
    value: "Cilium (eBPF) Networking, LINSTOR/DRBD oder Rook-Ceph Storage, Tenant-CRD-Mandantenfähigkeit"
  - label: "Zielgruppe"
    value: "Plattform- und Infrastruktur-Teams in regulierten Unternehmen, die eine OpenShift-Alternative ohne US-Vendor-Abhängigkeit evaluieren"
  - label: "Kommerzielles Angebot"
    value: "Ænix Platform (produktisiertes Cozystack) plus Support; Stufen Basic 1.250 $/Mon. (10 Nodes), Standard 3.000 $, Plus 5.500 $, Enterprise individuell"

faq:
  - q: "Worin unterscheiden sich Cozystack und OpenShift Virtualization?"
    a: "Beide bauen auf Kubernetes und KubeVirt auf. OpenShift Virtualization läuft über eine Red-Hat-Subscription und den Stack von Red Hat/IBM. Cozystack ist unter Apache 2.0 quelloffen, ohne CPU- oder Core-basierte Lizenzierung, mit Cilium-Networking, LINSTOR-Storage und Tenant-CRD-Mandantenfähigkeit — kundenkontrolliert und ohne US-Vendor-Lock-in."
  - q: "Ist Cozystack eine geeignete OpenShift-Alternative?"
    a: "Cozystack passt, wenn eine Open-Source-First-Anforderung besteht, Kostendisziplin ohne Subscription-Skalierung wichtig ist oder Souveränität mit kundenkontrollierter Hardware und Schlüsseln gefordert wird. OpenShift bleibt sinnvoll bei tiefer bestehender Red-Hat-Investition oder wenn spezifische OpenShift-Operatoren erforderlich sind."
  - q: "Welche Lizenz nutzt Cozystack im Vergleich zu OpenShift?"
    a: "Cozystack ist vollständig unter Apache 2.0 lizenziert, ohne CPU- oder Core-basierte Gebühren. OpenShift Virtualization erfordert eine kostenpflichtige Red-Hat-Subscription, deren Kosten mit der Anzahl der Cores oder Sockets skalieren."
  - q: "Behebt Cozystack die US-Vendor-Abhängigkeit von OpenShift?"
    a: "Ja. OpenShift bindet an Red Hat/IBM als US-Vendor. Cozystack ist quelloffen und kundenkontrolliert: Hardware und Schlüssel bleiben beim Kunden. Für regulierte Unternehmen in der DACH-Region, für die eine US-Vendor-Abhängigkeit inakzeptabel ist, ist das ein zentraler Unterschied."
  - q: "Bietet Aenix kommerziellen Support für Cozystack an?"
    a: "Ja. Aenix ist das Open-Core-Unternehmen hinter Cozystack und liefert die produktisierte Ænix Platform plus Support. Preisstufen: Basic 1.250 $/Mon. (10 Nodes), Standard 3.000 $, Plus 5.500 $, Enterprise individuell. So gibt es kommerziellen Support ohne Subscription-basierte Lizenzierung."
  - q: "Nutzen Cozystack und OpenShift dieselbe Virtualisierungstechnologie?"
    a: "Beide verwenden KubeVirt, um virtuelle Maschinen und Container über eine einheitliche Kubernetes-API zu betreiben. Der Unterschied liegt im umgebenden Stack: OpenShift nutzt OVN-Kubernetes und OpenShift Data Foundation, Cozystack nutzt Cilium-Networking und LINSTOR/DRBD oder Rook-Ceph-Storage."
---

**Beide KubeVirt-basiert. Unterschiedliche kommerzielle Modelle, unterschiedliche operative Footprints.**

> **Passt zu:** **[Ænix Platform Enterprise Edition](/de/produkte/aenix-platform/enterprise-edition/)** für regulierte Unternehmen, die OpenShift-Alternative evaluieren; **[IDP Edition](/de/produkte/aenix-platform/idp-edition/)** für Produkt-Engineering-Teams.

| | OpenShift Virtualization | Cozystack |
|---|---|---|
| **Lizenz** | Red-Hat-Subscription | Apache 2.0 (Open Source) |
| **Vendor-Stack** | Red Hat / IBM | Open Source / Aenix optional |
| **Foundation** | Kubernetes + KubeVirt | Kubernetes + KubeVirt |
| **Multi-Tenancy** | Project-basiert | Tenant CRD |
| **Storage** | OpenShift Data Foundation | LINSTOR / Rook-Ceph |
| **Networking** | OpenShift SDN / OVN-Kubernetes | Cilium |
| **Service-Katalog** | Operator Hub | Cozystack-Operatoren |
| **Souveränität** | US-Vendor-Abhängigkeit | Customer-controlled, Open Source |

---

## Wann Cozystack vs OpenShift

**Cozystack passt wenn:**
- Open-Source-First-Anforderung
- Kosten-Disziplin (keine Subscription-Skalierung)
- Souveränität / kundenkontrollierte Hardware + Schlüssel
- US-Vendor-Abhängigkeit inakzeptabel

**OpenShift passt wenn:**
- Tiefe Red-Hat-Investition + Skill-Set
- Enterprise-Support-Wahrnehmung (Marken-Wert)
- Spezifische OpenShift-Operatoren / Marketplace-Integrations erforderlich

---

*Aenix ist das Open-Core-Unternehmen hinter [Cozystack](https://cozystack.io) (CNCF-Projekt). Hersteller von Ænix Platform — turnkey kommerzielle Cloud-in-a-Box in fünf Editions.*
