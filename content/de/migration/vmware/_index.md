---
title: "VMware Migration — VCF verlassen, ohne die Anwendung zu zerbrechen"
description: "Post-Broadcom-VMware-Migration ist ein geplantes Projekt, kein Notfall. Gut umgesetzt produziert es eine Plattform, die Sie kontrollieren, und 30-60%..."
related_pages: ["/de/alternativen/vmware-alternative", "/de/loesungen/cloud-repatriation", "/products/cozystack"]
language: "de"
direct_answer: |
  **Eine VMware-Migration nach Broadcom ist ein geplantes Projekt, kein Notfall: Inventarisierung des vSphere/VCF/vCD-Bestands, Zielarchitektur, Migration in Kohorten mit Parallel-Run und VMware-Decommission. Aenix führt diese End-to-End-Migration durch und empfiehlt als Standard Cozystack, eine offene CNCF-Plattform (Apache 2.0), die VMs und Container über eine Kubernetes-API mit KubeVirt betreibt. Sie richtet sich an Hosting-Anbieter, die VMware Cloud Director verlassen, sowie an regulierte Unternehmen, die VCF ablösen. Gut umgesetzt liefert sie eine selbst kontrollierte Plattform und 30-60% Kostenreduktion bei migrierten Workloads ohne CPU- oder Core-basierte Lizenzierung.**
quick_facts:
  - label: "Was es ist"
    value: "End-to-End-VMware-Migration (vSphere/VCF/vCD) auf Cozystack — Bewertung, Sequenzierung, Implementierung, Decommission"
  - label: "Lizenz"
    value: "Apache 2.0 (keine CPU-/Core-basierte Lizenzierung)"
  - label: "Status"
    value: "Cozystack ist ein CNCF-Projekt (Sandbox seit 28.02.2025; Incubating erwartet Spätsommer 2026)"
  - label: "Zielgruppe"
    value: "Hosting-Anbieter, die VMware Cloud Director verlassen, und regulierte Unternehmen, die VCF ablösen"
  - label: "Technologie"
    value: "KubeVirt für VMs und Container auf einer Kubernetes-API, Cilium (eBPF) Networking, LINSTOR/DRBD Storage, Tenant-CRD-Mandantenfähigkeit"
  - label: "Erwartetes Ergebnis"
    value: "30-60% Kostenreduktion bei migrierten Workloads und eine selbst kontrollierte Plattform"
  - label: "Engagement"
    value: "Aenix Platform Editionen (ISP / Enterprise / Public Cloud) plus Migrationsservices; Preisstufen ab Basic 1.250 $/Mon. (10 Nodes)"
faq:
  - q: "Ist die VMware-Migration ein Notfall nach der Broadcom-Übernahme?"
    a: "Nein. Eine VMware-Migration sollte als geplantes Projekt behandelt werden, nicht als Notfall. Schlecht umgesetzt produziert sie operative Schulden und eine stockende Migration. Aenix sequenziert die Migration in Kohorten mit Parallel-Run, sodass Anwendungen während des Übergangs verfügbar bleiben."
  - q: "Worauf migriert Aenix VMware-Workloads?"
    a: "Standard-Empfehlung ist Cozystack, eine offene CNCF-Plattform unter Apache 2.0. Sie betreibt virtuelle Maschinen und Container über eine gemeinsame Kubernetes-API mit KubeVirt, nutzt Cilium (eBPF) für Networking und LINSTOR/DRBD für Storage. So laufen bestehende VMs weiter, während neue Workloads cloud-nativ entstehen."
  - q: "Wie viel kann eine VMware-Migration einsparen?"
    a: "Bei migrierten Workloads sind 30-60% Kostenreduktion realistisch. Ein wesentlicher Faktor ist die Apache-2.0-Lizenzierung ohne CPU- oder Core-basierte Gebühren. Das genaue Delta lässt sich vorab mit dem VMware-Kostenrechner modellieren — inklusive Jahresersparnis, 3-Jahres-Netto und Amortisation."
  - q: "Welche Aenix Platform Edition passt zu meiner Migration?"
    a: "Die ISP Edition passt zu Hosting-Anbietern, die VMware Cloud Director verlassen (häufigster 2026-Pattern). Die Enterprise Edition adressiert regulierte Unternehmen, die VCF ablösen. Die Public Cloud Edition richtet sich an große Betreiber."
  - q: "Was umfasst der Migrationsprozess konkret?"
    a: "Vier Schritte: Inventarisierung und Bewertung des vSphere/VCF/vCD-Bestands, Definition der Zielarchitektur (Cozystack als Standard), Migrations-Ausführung in Kohorten mit Parallel-Run und abschließendes VMware-Decommission."
  - q: "Bleibt die Plattform nach der Migration in meiner Kontrolle?"
    a: "Ja. Cozystack ist Open Source unter Apache 2.0 und ein CNCF-Projekt — kein Vendor-Lock-in, keine Core-basierte Lizenzierung. Aenix bietet die produktisierte Ænix Platform plus Services an, der zugrunde liegende Stack bleibt jedoch offen und selbst betreibbar."
---

**Post-Broadcom-VMware-Migration ist ein geplantes Projekt, kein Notfall. Gut umgesetzt produziert es eine Plattform, die Sie kontrollieren, und 30-60% Kostenreduktion bei migrierten Workloads. Schlecht umgesetzt produziert es operative Schulden und eine stockende Migration.**

Aenix führt End-to-End-VMware-Migrationen durch — Bewertung, Sequenzierung, Implementierung, Decommission.

> **Passt zu:** **[Ænix Platform ISP Edition](/de/produkte/aenix-platform/isp-edition/)** für Hosting-Anbieter, die VMware Cloud Director verlassen (häufigster 2026-Pattern); **[Enterprise Edition](/de/produkte/aenix-platform/enterprise-edition/)** für regulierte Unternehmen, die VCF verlassen; **[Public Cloud Edition](/de/produkte/aenix-platform/public-cloud-edition/)** für große Betreiber. Kostenlose [VMware-Migrations-Checkliste →](/de/ressourcen/vmware-migrations-checkliste/).

<div class="cta-row">
  <a class="cta-primary" href="/contact/">Discovery-Call buchen</a>
  <a class="cta-secondary" href="/de/blog/2026/05/vmware-migration-tools-strategie/">Migration-Tools-Leitfaden →</a>
</div>

---

## Was abgedeckt wird

1. Inventarisierung und Bewertung des vSphere/VCF/vCD-Bestands
2. Zielarchitektur (Cozystack als Standard-Empfehlung)
3. Migrations-Ausführung in Kohorten mit Parallel-Run
4. VMware-Decommission

---

## Kostendifferenz abschätzen

Modellieren Sie das Delta vor der Entscheidung: Bestandsgröße und aktuellen VMware-Preis eingeben — der Rechner zeigt Jahresersparnis, 3-Jahres-Netto nach Migration und die Amortisation. Vollständiges Tool und Methodik: **[VMware-Kostenrechner](/de/ressourcen/vmware-kostenrechner/)**.

{{< vmware-calculator lang="de" currency="€" >}}

---

/contact/

- **[VMware Alternative](/de/alternativen/vmware-alternative/)**
- **[Cloud Repatriation](/de/loesungen/cloud-repatriation/)**

---

*Aenix ist das Team hinter Cozystack.*

<!-- Keyword: vmware migration DE 150. Word count: ~250. -->
