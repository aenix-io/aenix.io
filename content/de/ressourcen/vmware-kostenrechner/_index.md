---
title: "VMware-Kostenrechner — Einsparungen nach Broadcom berechnen"
seo_title: "VMware-Kostenrechner: Ersparnis nach Broadcom"
description: "Kostenloser VMware-Kostenrechner: Kerne und Verlängerungspreis eingeben, Jahresersparnis, Nettoeffekt über 3 Jahre und Amortisation der Migration sehen."
type: "page"
language: "de"
quick_facts_style: "rows"
faq_style: "rows"
images: ["img/og/og-vmware-kostenrechner-de.jpg"]
hreflang_en: /resources/vmware-cost-calculator/
primary_keyword: "vmware kostenrechner"
secondary_keywords: ["vmware lizenzkosten", "vmware tco rechner", "vmware ausstieg ersparnis"]
related_pages:
  - /de/alternativen/vmware-alternative/
  - /de/migration/vmware/
  - /de/loesungen/cloud-repatriation/
  - /de/ressourcen/cloud-repatriation-tco-worksheet/
  - /de/produkte/cozystack/
direct_answer: |
  **Der VMware-Kostenrechner auf aenix.io ist ein kostenloses interaktives Werkzeug, das abschätzt, wie viel eine Organisation spart, wenn sie VMware/VCF-Workloads nach den Lizenzänderungen von Broadcom auf eine offene Plattform unter der Apache-2.0-Lizenz verlagert. Entwickelt hat ihn Ænix, das Unternehmen, das das CNCF-Sandbox-Projekt Cozystack entwickelt hat und mitpflegt. Der Rechner nimmt fünf Eingaben entgegen — lizenzierte CPU-Kerne, aktuelle VMware-Kosten pro Kern und Jahr, die Zahl der physischen Server, eine Ænix-Support-Stufe (pro 10 Nodes) und die Zahl der zu migrierenden VMs — und liefert die jährlichen VMware-Ausgaben, die Netto-Ersparnis pro Jahr, den Nettoeffekt über drei Jahre nach der Migration und die Amortisationsdauer. Er richtet sich an Infrastruktur-, Finanz- und Einkaufsteams, die einen Ausstieg aus VMware planen. Die Zielplattform Cozystack hat keine Lizenzkosten pro Core oder Socket; der wiederkehrende Lizenzposten von VMware entfällt, und es bleiben nur Support und eine einmalige Migration.**
quick_facts:
  - label: "Was es ist"
    value: "Kostenloser interaktiver Rechner, der VMware/VCF-Kosten einer offenen Alternative gegenüberstellt und Jahresersparnis, Nettoeffekt über drei Jahre und Amortisation der Migration zeigt."
  - label: "Zielgruppe"
    value: "Infrastruktur-, Finanz- und Einkaufsteams, die nach Broadcom einen Ausstieg aus VMware planen."
  - label: "Eingaben"
    value: "Lizenzierte CPU-Kerne und VMware-Kosten pro Kern/Jahr; physische Server (Nodes) und eine Ænix-Support-Stufe aus der Preisliste; Zahl der zu migrierenden VMs. Die Standardwerte sind illustrativ."
  - label: "Zielplattform"
    value: "Cozystack — KubeVirt-VMs und Container auf einer Kubernetes-API, Cilium-Networking (eBPF), LINSTOR/DRBD-Storage, Mandantenfähigkeit über die Tenant-CRD."
  - label: "Format"
    value: "Interaktiv direkt auf der Seite; kein Download und keine E-Mail erforderlich"
  - label: "Listenpreise von Ænix"
    value: "Ænix berechnet Support pro 10 physische Nodes, nicht pro Core; der Rechner rundet Ihre Server auf volle 10er-Blöcke auf und nutzt die Stufenpreise der Preisliste"
faq:
  - q: "Ist das ein offizieller Rechner von VMware oder Broadcom?"
    a: "Nein. Es ist ein einfacher Schätzer von Ænix — einem Anbieter mit eigenem Interesse am Ergebnis —, der VMware/VCF-Ausgaben mit einer offenen Plattform unter der Apache-2.0-Lizenz vergleicht. Geben Sie Ihre eigenen Verlängerungszahlen ein, um ein Ergebnis zu erhalten, das Sie nachprüfen können."
  - q: "Welche Kosten pro Kern soll ich eingeben?"
    a: "Nehmen Sie Ihre aktuellen Kosten für die VMware/VCF-Subskription und teilen Sie sie durch die Zahl der lizenzierten Kerne. Wenn Sie nur die Gesamtsumme der Verlängerung kennen, teilen Sie diese durch die Kernzahl."
  - q: "Hat die Zielplattform wirklich keine Lizenzkosten?"
    a: "Cozystack steht unter der Apache-2.0-Lizenz, ohne Lizenzkosten pro Core oder Socket. Sie zahlen nur Support und/oder das Aufbauprojekt. Im Rechner wählen Sie die Support-Stufe; ein Aufbauprojekt ist nicht enthalten."
  - q: "Muss ich jeden Workload migrieren, um zu sparen?"
    a: "Nein. Die Ersparnis gilt nur für die Workloads, die umziehen; manche Workloads bleiben besser, wo sie sind. Die Seite zur VMware-Migration beschreibt die Reihenfolge und was in der Cloud bleiben sollte."
  - q: "Was berechnet Ænix?"
    a: "Cozystack ist unter der Apache-2.0-Lizenz kostenlos. Ænix berechnet Support pro 10 physische Nodes, nicht pro Core: Support-Stufen für selbst betriebenes Cozystack und die Ænix Public Cloud Platform beginnen bei 1.250 USD pro 10 Nodes und Monat (Basic, jährliche Abrechnung), danach folgen Standard, Plus und Enterprise (individuell); die Ænix Private Cloud Platform wird per RFP angeboten. Der Rechner nimmt dafür Ihre Zahl physischer Server und die gewählte Stufe. Die Migrationskosten sind ein Richtwert aus dem Rechner (8.000 $ + 140 $ pro VM); das verbindliche Angebot folgt nach dem Scoping."
  - q: "Kann Ænix die Ergebnisse des Rechners prüfen?"
    a: "Ja. Ein 30-minütiges Discovery-Gespräch ergibt eine ehrliche TCO auf Workload-Ebene, die Migrationskosten, Support und die Workloads berücksichtigt, die in der Cloud bleiben sollten."
---

<!-- BLOCK 1: HERO -->

**Ein VMware-Kostenrechner macht aus der Verlängerung bei Broadcom eine Zahl, mit der Sie arbeiten können. Geben Sie die lizenzierten CPU-Kerne Ihres Bestands, Ihre heutigen Kosten pro Kern, die Zahl Ihrer physischen Server, eine Support-Stufe und die Zahl der VMs ein, und Sie sehen die jährlichen Kosten, die Netto-Ersparnis beim Wechsel auf eine offene Plattform unter der Apache-2.0-Lizenz, den Nettoeffekt über drei Jahre nach der Migration und wie schnell sich die Migration amortisiert. Entwickelt von Ænix, das Cozystack entwickelt hat und mitpflegt.**

<div class="cta-row">
  <a class="cta-primary" href="/de/kontakt/">Gespräch vereinbaren</a>
  <a class="cta-secondary" href="/de/migration/vmware/">VMware-Migration →</a>
</div>

<!-- /BLOCK 1 -->

---

## Ihre Ersparnis beim VMware-Ausstieg berechnen

{{< vmware-calculator lang="de" >}}

Der Lizenzposten, den Sie an VMware/Broadcom zahlen, entfällt auf einer offenen Plattform (Apache 2.0, keine Gebühr pro Core). Es bleiben Support und die einmalige Migration — beides ist oben modelliert. Die Migrationskosten sind ein Richtwert aus dem Rechner (8.000 $ + 140 $ pro VM); das verbindliche Angebot folgt nach dem Scoping. Für ein Fünf-Jahres-Modell gegenüber VMware mit Hardware, Personal und belegten Listenpreisen nutzen Sie den **[TCO-Rechner VMware vs. Cozystack](/tco-calculator/vs-vmware/)** (Englisch); für ein Modell auf Workload-Ebene das **[Cloud-Repatriation-TCO-Worksheet](/de/ressourcen/cloud-repatriation-tco-worksheet/)**.

---

## So wird gerechnet

- **VMware-Kosten pro Jahr** = Kerne × VMware-Kosten pro Kern/Jahr.
- **Ænix-Support pro Jahr** = Zahl der 10er-Blöcke physischer Nodes (aufgerundet) × Monatspreis der gewählten Stufe bei jährlicher Abrechnung × 12 (die Plattform selbst steht unter Apache 2.0) — siehe [Preise](/de/preise/).
- **Einmalige Migration** = 8.000 $ + 140 $ pro VM, ein Richtwert aus der TCO-Methodik; das verbindliche Angebot folgt nach dem Scoping.
- **Netto-Ersparnis pro Jahr** = VMware-Kosten pro Jahr − Ænix-Support pro Jahr.
- **Netto-Ersparnis über 3 Jahre** = Netto-Ersparnis pro Jahr × 3 − einmalige Migrationskosten.
- **Amortisation** = Migrationskosten ÷ monatliche Netto-Ersparnis.

<div class="arch-section__fig">
<div class="diagram">
<div class="diagram__node"><b>VMware-Kosten pro Jahr</b><div class="diagram__chips"><span>Kerne × Kosten pro Kern/Jahr</span></div></div>
<div class="diagram__conn">verglichen mit</div>
<div class="diagram__node diagram__node--brand"><b>Ænix-Support pro Jahr</b><div class="diagram__chips"><span>Nodes ÷ 10 × Stufenpreis</span><span>Keine Gebühr pro Core</span></div></div>
<div class="diagram__conn">ergibt</div>
<div class="diagram__node"><b>Netto-Ersparnis</b><div class="diagram__chips"><span>Nettoeffekt über 3 Jahre</span><span>Amortisationsdauer</span></div></div>
</div>
</div>

Die Eingaben sind bewusst einfach gehalten, damit das Ergebnis belastbar bleibt. Eine vollständige TCO umfasst Strom, Hardware-Erneuerung, Personal und die Workloads, die in der Cloud bleiben — das modellieren wir im Gespräch mit Ihnen.

---

## Aus der Zahl einen Plan machen

<div class="cta-row">
  <a class="cta-primary" href="/de/kontakt/">Gespräch vereinbaren</a>
  <a class="cta-secondary" href="/de/alternativen/vmware-alternative/">VMware-Alternative →</a>
</div>

---

*Ænix hat Cozystack (ein CNCF-Sandbox-Projekt) entwickelt und pflegt es gemeinsam mit Maintainern anderer Unternehmen. Darauf aufbauend bietet Ænix drei Plattformen an: Public Cloud, Private Cloud und AI.*

<!--
SEO/GEO: canonical https://aenix.io/de/ressourcen/vmware-kostenrechner/ ; hreflang de self, en → /resources/vmware-cost-calculator/.
JSON-LD: BreadcrumbList; WebApplication; FAQPage.
-->
