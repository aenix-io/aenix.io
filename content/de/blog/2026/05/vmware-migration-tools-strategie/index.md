---
title: "VMware-Migration-Tools und -Strategie 2026 — was funktioniert"
description: "Begleitung zur VMware-Migration-Page."
date: "2026-05-01"
author: "Aenix Team"
type: "article"
topics: ["VMware", "Cozystack", "KubeVirt", "Migration"]
language: "de"
quiz:
  title: "Wissens-Check: VMware-Migrationstools"
  questions:
    - q: "Wie viele VMware-Migrationspfade werden identifiziert?"
      options:
        - { text: "Drei: VMware-managed, KubeVirt-basiert, Lift-and-Shift in Public Cloud", correct: true }
        - { text: "Fünf", correct: false }
        - { text: "Acht", correct: false }
      explanation: "Drei Pfade: (1) VMware-managed Migration mit Vendor-Tools (HCX, MTV, Nutanix Move), (2) KubeVirt-basierte Migration zu Open-Source-Destinationen (Cozystack, OpenShift Virt), (3) Lift-and-Shift in VMware-on-Cloud (verschiebt die architektonische Frage)."
    - q: "Welche Tools werden für KubeVirt-basierte Migration genannt?"
      options:
        - { text: "virtv2v, Forklift (Red Hat MTV), KubeVirt CDI, Cozystack-spezifische Skripte", correct: true }
        - { text: "Nur VMware HCX", correct: false }
        - { text: "Nur Carbonite", correct: false }
      explanation: "KubeVirt-basierte Migration: virtv2v (Red Hat, low-level Konvertierungstool), Forklift / Migration Toolkit for Virtualization (Red Hat, bulk Migration), KubeVirt CDI (community, Disk-Image-Import), plus Cozystack-spezifische Skripte für Multi-Tenant-Placement und Cilium-Network-Mapping."
    - q: "Wo scheitern VMware-Migrationen am häufigsten?"
      options:
        - { text: "Zielplattform nicht bereit (engineered als PoC, nicht als Production-Plattform)", correct: true }
        - { text: "Zu schnelle Migration", correct: false }
        - { text: "Zu vorsichtige Bewertung", correct: false }
      explanation: "Häufige Versagensmodi: Zielplattform nicht produktionsreif, Big-Bang-Cutover-Versuch, Datenschwerkraft ignoriert, Networking-Redesign übersprungen, Post-Migration-Kapazität unterschätzt."
    - q: "Warum ist Lift-and-Shift in Public Cloud in 2026 selten die richtige Antwort?"
      options:
        - { text: "Es ist immer die richtige Antwort", correct: false }
        - { text: "Adressiert Broadcom-Pricing-Druck nicht (oft macht es ihn schlimmer); adressiert Souveränität nicht; meist ein Stop-Gap statt einer Strategie", correct: true }
        - { text: "Zu langsam", correct: false }
      explanation: "Lift-and-Shift zu VMware-on-Cloud verschiebt die architektonische Frage; adressiert Broadcom-Druck nicht (oft schlimmer); adressiert Souveränität nicht. Selten die richtige Antwort 2026 außer als Stop-Gap."
    - q: "Welche Migrations-Sequenz wird empfohlen?"
      options:
        - { text: "Discovery + Bewertung → Zielplattform produktionsreif → Kohorten-basierte Migration → VCF-Verfallszeit-aligned Sequenzierung → Decommission", correct: true }
        - { text: "Big-Bang-Cutover an einem Wochenende", correct: false }
        - { text: "Zufällige Reihenfolge", correct: false }
      explanation: "Empfohlene Strategie: (1) Discovery und Bewertung, (2) Zielplattform produktionsreif bereitgestellt (NICHT als PoC), (3) Kohorten-basierte Migration (10-50 Workloads pro Kohorte), (4) VCF-Verfallszeit-aligned Sequenzierung, (5) Decommission."
---

Begleitung zur **[VMware-Migration-Page](/de/migration/vmware)**.

## Drei Migrations-Pfade

1. **VMware-managed Migration** — VMware HCX, Red Hat MTV
2. **KubeVirt-basierte Migration** — virtv2v, Forklift, KubeVirt CDI, Cozystack-spezifische Skripte
3. **Lift-and-Shift in Public Cloud** — VMware-on-Cloud (selten die richtige Antwort 2026)

## Strategie

1. Discovery und Bewertung
2. Zielplattform produktionsreif bereitgestellt
3. Kohorten-basierte Migration
4. VCF-Verfallszeit-aligned Sequenzierung
5. Decommission

## Wo Migrationen scheitern

- Zielplattform nicht bereit
- Big-Bang-Cutover-Versuch
- Datenschwerkraft ignoriert
- Networking-Redesign übersprungen
- Post-Migration-Kapazität unterschätzt

---

*Aenix ist das Team hinter Cozystack.*

<!-- Word count: ~250. -->
