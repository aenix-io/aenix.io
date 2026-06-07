---
title: "VMware-Kostenrechner — Einsparungen nach Broadcom berechnen"
description: "Kostenloser VMware-Kostenrechner: Kerne und Verlängerungspreis eingeben, Jahresersparnis, 3-Jahres-Netto und Migrations-Amortisation berechnen."
type: "page"
language: "de"
images: ["img/og/og-vmware-kostenrechner-de.png"]
hreflang_en: /resources/vmware-cost-calculator/
primary_keyword: "vmware kostenrechner"
secondary_keywords: ["vmware lizenzkosten", "vmware tco rechner", "vmware ausstieg ersparnis"]
related_pages:
  - /de/alternativen/
  - /de/migration/
  - /de/loesungen/cloud-repatriation/
  - /de/ressourcen/
direct_answer: |
  **Der VMware-Kostenrechner von Aenix ist ein kostenloses, interaktives Werkzeug, das Broadcoms VMware/VCF-Verlängerung in eine konkrete Zahl übersetzt: Sie geben Ihre CPU-Kerne, den Preis pro Kern und Jahr sowie die einmaligen Migrationskosten ein und sehen sofort Jahreskosten, Netto-Jahresersparnis, das Drei-Jahres-Netto und die Amortisationszeit. Er richtet sich an Infrastruktur-, Finanz- und Einkaufsteams, die einen VMware-Ausstieg planen. Die modellierte Zielplattform ist Cozystack (Apache 2.0, keine Pro-Core-Lizenz) — gebaut vom Team hinter Cozystack. Auf migrierten Workloads sind typischerweise 30–60% Kostensenkung möglich; Ihre Zahlen können abweichen.**
quick_facts:
  - label: "Was es ist"
    value: "Interaktiver Rechner, der VMware/VCF-Kosten gegen eine offene Apache-2.0-Alternative stellt und Jahresersparnis, 3-Jahres-Netto und Amortisation ausgibt."
  - label: "Für wen"
    value: "Infrastruktur-, Finanz- und Einkaufsteams, die einen VMware-Ausstieg nach der Broadcom-Verlängerung planen."
  - label: "Eingaben"
    value: "CPU-Kerne, VMware-Kosten pro Kern/Jahr, Aenix-Support pro Kern/Jahr, einmalige Migrationskosten."
  - label: "Typisches Ergebnis"
    value: "30–60% Kostensenkung bei migrierten Workloads (eigene Zahlen können abweichen)."
  - label: "Lizenz"
    value: "Apache 2.0 (keine CPU-/Core-basierte Lizenzierung)"
  - label: "Zielplattform"
    value: "Cozystack — KubeVirt für VMs und Container auf einer Kubernetes-API, Cilium (eBPF) Networking, LINSTOR/DRBD Storage."
  - label: "Status"
    value: "Cozystack ist ein CNCF-Projekt (Sandbox seit 28.02.2025; Incubating erwartet Spätsommer 2026)"
faq:
  - q: "Ist das ein offizieller VMware/Broadcom-Rechner?"
    a: "Nein. Es ist ein unabhängiger Schätzer von Aenix, der VMware/VCF-Ausgaben mit einer offenen Apache-2.0-Alternative vergleicht. Geben Sie Ihre eigenen Zahlen ein, um ein belastbares Ergebnis für Ihren Bestand zu erhalten."
  - q: "Welchen Preis pro Kern soll ich eingeben?"
    a: "Nehmen Sie Ihre aktuelle VMware/VCF-Subskription und teilen Sie sie durch die Zahl der lizenzierten Kerne. Liegt nur eine Gesamtsumme vor, teilen Sie diese durch die Kernzahl, um den Preis pro Kern und Jahr zu erhalten."
  - q: "Hat die Zielplattform wirklich keine Lizenzkosten?"
    a: "Die Plattform ist Cozystack, lizenziert unter Apache 2.0 — es gibt keine Pro-Core- oder Pro-Socket-Lizenz. Sie zahlen nur Support und/oder das einmalige Aufbauprojekt; beide Posten sind im Rechner editierbar."
  - q: "Muss ich meinen gesamten Bestand migrieren?"
    a: "Nein. Die Ersparnis gilt für die migrierten Workloads; manche Workloads bleiben besser, wo sie sind. Der Rechner liefert ein Lizenz- und Support-Delta, keine erzwungene Komplettmigration."
  - q: "Was deckt der Rechner nicht ab?"
    a: "Bewusst einfache Eingaben für ein belegbares Ergebnis. Eine volle TCO umfasst Strom, Hardware-Refresh, Personal und Workloads, die in der Cloud bleiben — das modellieren wir im Erstgespräch Workload-genau mit Ihnen."
  - q: "Können Sie meine Zahlen validieren?"
    a: "Ja. Ein 30-minütiges Erstgespräch liefert eine ehrliche, Workload-genaue TCO-Einschätzung mit dem Team hinter Cozystack."
---

<!-- BLOCK 1: HERO -->

**Ein VMware-Kostenrechner macht aus Broadcoms Verlängerung eine Zahl, mit der Sie handeln können. Geben Sie die CPU-Kerne Ihres Bestands und Ihren Preis pro Kern ein — und sehen Sie Jahreskosten, die Netto-Ersparnis beim Wechsel auf eine offene Apache-2.0-Plattform, das Drei-Jahres-Delta nach Migration und die Amortisation. Gebaut von Aenix — dem Team hinter Cozystack.**

<div class="cta-row">
  <a class="cta-primary" href="/de/kontakt/">30-minütiges Erstgespräch buchen</a>
  <a class="cta-secondary" href="/de/migration/">VMware-Migrationsweg ansehen →</a>
</div>

<!-- /BLOCK 1 -->

---

## Ihre VMware-Ausstiegsersparnis berechnen

{{< vmware-calculator lang="de" currency="€" >}}

Die Lizenzkosten, die Sie an VMware/Broadcom zahlen, entfallen auf einer offenen Plattform (Apache 2.0, keine Pro-Core-Gebühr). Es bleiben Support und die einmalige Migration — beides oben modelliert. Für ein tieferes, Workload-genaues Modell nutzen Sie die **[Cloud-Repatriation-Lösung](/de/loesungen/cloud-repatriation/)**.

---

## Auf einen Blick

- **Was es ist:** interaktiver Rechner für VMware/VCF-Kosten gegenüber einer offenen Alternative.
- **Für wen:** Infrastruktur-, Finanz- und Einkaufsteams, die einen VMware-Ausstieg planen.
- **Eingaben:** CPU-Kerne, VMware-Kosten pro Kern/Jahr, Aenix-Support pro Kern/Jahr, einmalige Migrationskosten.
- **Typisches Ergebnis:** 30–60% Kostensenkung bei migrierten Workloads (Ihre Zahlen können abweichen).
- **Lizenz:** Zielplattform ist [Cozystack](https://cozystack.io), Apache 2.0 — keine Pro-Core-Lizenz.
- **Häufiger Fehler:** nur Lizenz-zu-Lizenz vergleichen und Migrationskosten sowie Workloads, die bleiben sollten, ignorieren.

[Quelle: [Cozystack-Doku](https://cozystack.io); modellieren Sie Ihre Zahlen oben]

---

## Wie gerechnet wird

- **VMware-Kosten pro Jahr** = Kerne × VMware-Kosten pro Kern/Jahr.
- **Aenix-Support pro Jahr** = Kerne × Aenix-Support pro Kern/Jahr (die Plattform selbst ist Apache 2.0).
- **Netto-Ersparnis pro Jahr** = VMware-Jahr − Aenix-Jahr.
- **3-Jahres-Netto** = Netto-Jahr × 3 − einmalige Migrationskosten.
- **Amortisation** = Migrationskosten ÷ monatliche Netto-Ersparnis.

Bewusst einfache Eingaben für ein belegbares Ergebnis. Eine volle TCO umfasst Strom, Hardware-Refresh, Personal und die Workloads, die in der Cloud bleiben — das modellieren wir mit Ihnen im Gespräch.

---

## FAQ

**Ist das ein offizieller VMware/Broadcom-Rechner?**
Nein. Ein unabhängiger Schätzer von Aenix, der VMware/VCF-Ausgaben mit einer offenen Alternative vergleicht. Nutzen Sie Ihre eigenen Zahlen.

**Welchen Preis pro Kern eingeben?**
Ihre aktuelle VMware/VCF-Subskription geteilt durch lizenzierte Kerne. Liegt nur eine Gesamtsumme vor, durch die Kernzahl teilen.

**Hat die Plattform wirklich keine Lizenzkosten?**
Die Plattform ist Cozystack, Apache 2.0 — keine Pro-Core-/Pro-Socket-Lizenz. Sie zahlen Support und/oder das Aufbauprojekt, beides oben editierbar.

**Muss ich alles migrieren?**
Nein. Die Ersparnis gilt für migrierte Workloads; manche bleiben besser, wo sie sind. Siehe [VMware-Migration](/de/migration/).

**Können Sie meine Zahlen validieren?**
Ja — ein Erstgespräch liefert eine ehrliche, Workload-genaue TCO.

---

## Aus der Zahl einen Plan machen

<div class="cta-row">
  <a class="cta-primary" href="/de/kontakt/">30-minütiges Erstgespräch buchen</a>
  <a class="cta-secondary" href="/de/alternativen/">VMware-Alternative →</a>
</div>

---

*Aenix ist das Team hinter [Cozystack](https://cozystack.io) — einem CNCF-Projekt (heute Sandbox; Incubating erwartet Spätsommer 2026), Apache 2.0. Aenix kommerzialisiert es als Ænix Platform in fünf Editionen: Public Cloud, ISP, Enterprise, IDP, AI/ML.*

<!--
SEO/GEO: canonical https://aenix.io/de/ressourcen/vmware-kostenrechner/ ; hreflang de self, en → /resources/vmware-cost-calculator/.
JSON-LD: BreadcrumbList; WebApplication; FAQPage.
-->
