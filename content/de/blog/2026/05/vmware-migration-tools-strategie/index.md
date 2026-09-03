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
    - q: "Wie viele VMware-Migrationspfade unterscheidet der Artikel?"
      options:
        - { text: "Drei", correct: true }
        - { text: "Fünf", correct: false }
        - { text: "Acht", correct: false }
      explanation: "Drei Pfade: (1) die von VMware selbst begleitete Migration mit Herstellerwerkzeugen wie HCX, MTV und Nutanix Move, (2) die KubeVirt-basierte Migration auf offene Ziele wie Cozystack oder OpenShift Virtualization, (3) Lift-and-Shift auf VMware-on-Cloud, was die architektonische Frage lediglich vertagt."
    - q: "Welche Werkzeuge nennt der Artikel für die KubeVirt-basierte Migration?"
      options:
        - { text: "Ausschließlich VMware HCX", correct: false }
        - { text: "virt-v2v, Forklift beziehungsweise MTV und KubeVirt CDI", correct: true }
        - { text: "Ausschließlich Carbonite", correct: false }
      explanation: "Für die KubeVirt-basierte Migration: virt-v2v als tiefliegendes Konvertierungswerkzeug von Red Hat, Forklift beziehungsweise das Migration Toolkit for Virtualization für die Migration in großer Zahl, KubeVirt CDI für den Import der Festplatten-Images sowie Cozystack-spezifische Skripte für die Platzierung der Mandanten und die Abbildung des Cilium-Netzwerks."
    - q: "Woran scheitern VMware-Migrationen am häufigsten?"
      options:
        - { text: "An einer Zielplattform, die als PoC und nicht produktionsreif gebaut wurde", correct: true }
        - { text: "An einer zu schnell durchgezogenen Migration der ersten Kohorte", correct: false }
        - { text: "An einer zu vorsichtig und zu lange angelegten Bewertungsphase", correct: false }
      explanation: "Häufige Fehlermuster: die Zielplattform ist nicht produktionsreif, es wird ein Big-Bang-Cutover versucht, die Datenschwerkraft wird ignoriert, das notwendige Networking-Redesign wird übersprungen und die Kapazität nach der Migration wird zu niedrig angesetzt."
    - q: "Warum ist Lift-and-Shift in die Public Cloud 2026 selten die richtige Antwort?"
      options:
        - { text: "Weil es technisch nicht mehr unterstützt wird", correct: false }
        - { text: "Weil es weder den Preisdruck noch die Souveränitätsfrage adressiert", correct: true }
        - { text: "Weil die Migration selbst zu lange dauert", correct: false }
      explanation: "Lift-and-Shift auf VMware-on-Cloud vertagt die architektonische Frage. Den Preisdruck durch Broadcom adressiert es nicht — oft verschärft es ihn sogar — und die Souveränitätsfrage bleibt offen. Als Übergangslösung kann es taugen, als Strategie selten."
    - q: "Welche Migrationssequenz empfiehlt der Artikel?"
      options:
        - { text: "Discovery, produktionsreife Zielplattform, Kohorten, Abschaltung", correct: true }
        - { text: "Ein Big-Bang-Cutover an einem einzigen Wochenende", correct: false }
        - { text: "Eine zufällige Reihenfolge nach verfügbarer Teamkapazität", correct: false }
      explanation: "Empfohlene Sequenz: (1) Discovery und Bewertung, (2) die Zielplattform produktionsreif bereitstellen, ausdrücklich nicht als PoC, (3) Migration in Kohorten von 10 bis 50 Workloads, (4) die Sequenzierung an den Ablaufdaten der VCF-Verträge ausrichten, (5) Abschaltung der Altumgebung."
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

*Ænix ist das Team hinter Cozystack.*

