---
title: "Internal Developer Platform — gebaut, damit sie genutzt wird, nicht nur für die Architektur"
seo_title: "Internal Developer Platform, die genutzt wird"
description: "IDP-Projekte, gemessen an der Nutzung statt an der Architektur: 5–10 Golden Paths auf mandantenfähigem Kubernetes, mit Übergabe. Backstage nur, wo es passt."
related_pages:
  - /de/dienstleistungen/platform-engineering/
  - /de/dienstleistungen/kubernetes-consulting/
  - /de/dienstleistungen/platform-readiness-assessment/
  - /de/produkte/private-cloud-platform/
  - /de/produkte/cozystack/
language: "de"
quick_facts_style: "rows"
faq_style: "rows"
hreflang_en: /services/internal-developer-platform/
direct_answer: |
  **Eine Internal Developer Platform (IDP) ist eine Self-Service-Schicht, über die Produktentwickler Umgebungen bereitstellen, Anwendungen deployen und auf Observability, Secrets und Netzwerk zugreifen — über klar vorgegebene Golden Paths statt über Infrastruktur-Tickets. Ænix baut IDPs, die tatsächlich genutzt werden, nicht nur gut entworfen sind: 5–10 dokumentierte Golden Paths auf einer mandantenfähigen Kubernetes-Basis, mit Betriebs-Runbooks und Wissenstransfer, sodass das Plattform-Team des Kunden das Ergebnis selbst verantwortet. Die Basis ist in der Regel Cozystack, ein CNCF-Projekt unter Apache 2.0, das KubeVirt-VMs und Container, Cilium-Networking (eBPF), LINSTOR-Storage und Mandantenfähigkeit über das Tenant-CRD vereint. Die Projekte laufen in drei Phasen — Readiness Assessment, Aufbau und optionaler Managed-Betrieb — und setzen Developer-Portale wie Backstage nur dort ein, wo sie passen, nie als Selbstzweck.**
quick_facts:
  - label: "Was es ist"
    value: "Eine Self-Service-Plattform, die Produktteams Golden Paths für Bereitstellung, Deployment und Betrieb auf einer mandantenfähigen Kubernetes-Basis gibt"
  - label: "Lizenz"
    value: "Apache 2.0 (keine Lizenzkosten pro CPU oder Core)"
  - label: "Status"
    value: "Cozystack ist ein CNCF-Projekt (Sandbox seit 28.02.2025; Antrag auf Incubation in der Due-Diligence-Prüfung)"
  - label: "Für wen"
    value: "Organisationen mit 3+ Produktteams, wochenlangen Wartezeiten auf Umgebungen und uneinheitlichen Infrastrukturmustern je Team"
  - label: "Zeitplan"
    value: "Phase 1 Assessment 14 oder 28 Tage; Phase 2 Aufbau 3–9 Monate; optional Phase 3 Managed-Betrieb"
  - label: "Basis"
    value: "Cozystack-Muster — KubeVirt-VMs und Container auf einer Kubernetes-API, Cilium-Networking (eBPF), LINSTOR/DRBD-Storage, Mandantenfähigkeit über das Tenant-CRD"
  - label: "Developer-Portal"
    value: "Backstage, Port oder Cortex nur dort, wo die Katalogdisziplin reif ist; das Portal liegt auf der Plattform, es ersetzt sie nicht"
faq:
  - q: "Internal Developer Platform oder Internal Developer Portal — was brauchen wir?"
    a: "Ein Portal (Backstage, Port, Cortex) ist die Oberfläche und der Katalog; eine Plattform ist der darunterliegende Stack an Fähigkeiten. Die meisten Organisationen brauchen zuerst die Plattform. Für Teams unter rund 200 Engineers reicht meist eine gut dokumentierte Plattform mit einfachen IaC-Einstiegspunkten; der Nutzen eines Portals zeigt sich erst bei größerem Umfang."
  - q: "Müssen wir auf Cozystack aufbauen?"
    a: "Nein. Cozystack ist die Basis, die Ænix empfiehlt, wenn sie passt — und bei mandantenfähigen oder souveränen Anwendungsfällen passt sie meist. Für Organisationen, die stark auf OpenShift, Vanilla Kubernetes oder andere Distributionen setzen, erweitert Ænix stattdessen die bestehende Plattform."
  - q: "Wie lange dauert ein typisches IDP-Projekt?"
    a: "Das Assessment in Phase 1 dauert 14 oder 28 Tage. Der Aufbau in Phase 2 dauert je nach Umfang 3–9 Monate: zuerst die Basis (1–2 Monate), darauf die Golden Paths (1–3 Monate), mit durchgehendem Wissenstransfer."
  - q: "Was passiert, wenn unser Team die IDP nach der Übergabe nicht betreiben kann?"
    a: "Es gibt zwei Wege: ein optionales Managed-Services-Projekt, in dem Ænix die Plattform vertraglich betreibt, oder eine Verlängerung des Aufbauprojekts, um die Kapazität des internen Plattform-Teams auszubauen. Die Entscheidung wird im Assessment ausdrücklich getroffen."
  - q: "Warum verkauft Ænix nicht einfach Backstage?"
    a: "Backstage ist ein Werkzeug, kein Ziel. Ænix setzt es ein, wo es zur betrieblichen Reife des Kunden passt, und empfiehlt Alternativen (Port, Cortex, Eigenentwicklung) oder ganz ohne Portal, wenn das besser passt. Die Entscheidung richtet sich nach dem Bedarf des Teams, nicht nach Herstelleranreizen."
  - q: "Ist die Plattform Open Source, und gehört sie uns?"
    a: "Ja. Die Basis ist Cozystack, ein CNCF-Projekt unter Apache 2.0 ohne Lizenzkosten pro Core. Die IDP, die Ænix baut, gehört dem Kunden und wird von ihm betrieben, ohne Bindung an die Roadmap eines Herstellers. Ænix verkauft darauf Support-Abonnements, drei kommerzielle Plattformen und Dienstleistungen."
---

<!-- BLOCK 1: HERO -->


**Die meisten Internal Developer Platforms scheitern nicht an einer falschen Architektur, sondern daran, dass Produktteams sie nicht nutzen. Die Plattform mit der elegantesten Technik hat oft den niedrigsten internen NPS. Die Plattform, die tatsächlich genutzt wird, hat weniger Funktionen, einfachere Abstraktionen und ein Team, das Produktentwickler als Kunden behandelt.**

Ænix baut Internal Developer Platforms (IDPs), die genutzt werden. Nicht Backstage als Tapete über dem Chaos, sondern eine Plattform mit klaren Vorgaben, Golden Paths, mandantenfähiger Basis und einer Betriebsübergabe, die Ihr Plattform-Team dauerhaft tragen kann.

> **Passt zu:** **[Developer Self-Service](/de/produkte/private-cloud-platform/)** — die IDP-Schicht (GitLab-Automatisierung, Argo-CD-Workflows, APIs, Golden Paths, Produktivitäts-Dashboards) auf der Cloud-Basis von Cozystack. Kostenloses [Platform Engineering Maturity Assessment →](/de/ressourcen/platform-engineering-maturity-assessment/).

<div class="cta-row">
  <a class="cta-primary" href="/de/kontakt/">Gespräch vereinbaren</a>
  <a class="cta-secondary" href="/de/blog/2026/05/internal-developer-platform-beispiele-ohne-backstage/">IDP-Beispiele →</a>
</div>

<div class="trust-badges">
Produktionsreif · An der Nutzung ausgerichtet · Open-Source-Basis · Ergebnis gehört Ihrem Team
</div>

<!-- /BLOCK 1 -->

---

<!-- BLOCK 2: WHO THIS IS FOR -->

## Wer eine Internal Developer Platform braucht

Eine Investition in eine Internal Developer Platform passt, wenn:

- **3+ Produktteams** überlappende Anforderungen an Infrastruktur und Bereitstellung haben
- **Umgebungen Wochen brauchen**, obwohl es Stunden sein sollten
- **Mehrere uneinheitliche Infrastrukturmuster** je Team gewachsen sind
- **Die bestehende Plattform- oder DevOps-Funktion in Tickets erstickt** — ohne Kapazität für Self-Service-Arbeit
- **Konkreter Druck** (Aufsicht, Kosten, Souveränität, Wachstum) eine strukturierte Plattforminvestition jetzt sinnvoll macht

Treffen drei dieser Punkte zu, bringt strukturierte IDP-Arbeit innerhalb weniger Monate Nutzung und Tempo. Haben Sie ein einziges Produktteam und eine kleine Infrastruktur, sind einfachere gemeinsame Werkzeuge im Verhältnis von Kosten und Nutzen besser.

<!-- /BLOCK 2 -->

---

<!-- BLOCK 3: WHAT YOU GET -->

## Was ein IDP-Projekt mit Ænix liefert

<div class="arch-section__fig">
<div class="diagram">
<div class="diagram__node"><b>Produktteams</b><div class="diagram__chips"><span>Umgebungen</span><span>Deployments</span><span>Observability</span></div></div>
<div class="diagram__conn">im Self-Service über</div>
<div class="diagram__node diagram__node--brand"><b>Self-Service-IDP auf Cozystack</b><div class="diagram__chips"><span>Golden Paths</span><span>APIs</span><span>Mandantenfähiges Kubernetes</span></div></div>
<div class="diagram__conn">liefert</div>
<div class="diagram__node"><b>Nutzung und Tempo</b><div class="diagram__chips"><span>Zeit bis zur Umgebung</span><span>Nutzung der Golden Paths</span><span>Interner NPS</span></div></div>
</div>
</div>

<div class="grid-2x2">

**1. Golden Paths mit klaren Vorgaben**
5–10 Self-Service-Pfade für die häufigsten Anforderungen von Produktteams: Bereitstellung von Umgebungen, Deployment von Anwendungen, Anbindung an Observability, Secrets, Identity, Netzwerkanbindung. Dokumentiert, unterstützt, auditiert.

**2. Mandantenfähige Kubernetes-Basis**
Aufgebaut auf KubeVirt + Cilium + LINSTOR (Cozystack-Muster) oder als Erweiterung Ihrer bestehenden Kubernetes-Plattform. Tenant-CRD, Quotas je Mandant, RBAC, Audit. Geeignet für Unternehmen mit mehreren Geschäftsbereichen ebenso wie für Service-Provider mit vielen Kunden.

**3. Developer-Portal, wo es sinnvoll ist**
Backstage (CNCF Incubating), wenn die Katalogdisziplin reif ist; Alternativen (Port, Cortex, Eigenentwicklung), wenn sie besser passen. Das Portal ist der sichtbare Teil; die Plattform liegt darunter.

**4. Betriebsmodell und Runbooks**
Dokumentierte Verantwortlichkeiten des Plattform-Teams, Muster für die Rufbereitschaft, Kapazitätsplanung. Wissenstransfer über die gesamte Laufzeit. Ihr Team betreibt die Plattform, wenn wir das Projekt abgeschlossen haben.

</div>

Gemessen wird das Ergebnis an der Nutzung — Zeit bis zur bereitgestellten Umgebung, Nutzungsrate der Golden Paths, interner NPS — nicht an der Zahl der Funktionen.

<!-- /BLOCK 3 -->

---

<!-- BLOCK 4: COMMON IDP FAILURES -->

<div class="band-fullbleed band-fullbleed--tint">
<div class="band-fullbleed__inner">

## Woran IDP-Programme häufig scheitern

<div class="gap-cards-2">

**Backstage als Plattform**
Wer Backstage ohne eine darunterliegende Plattform mit klaren Vorgaben kauft, bekommt einen schönen Katalog über demselben Betriebschaos. Self-Service dauert weiterhin Wochen; der Katalog ist nur ein komfortableres Wartezimmer.

**Für Engineers gebaut, nicht für Produktteams**
Die Kunden des Plattform-Teams sind Produktentwickler. Eine auf technische Eleganz optimierte Architektur ergibt oft eine Plattform, die niemand so nutzen will, wie sie gedacht war.

**Lock-in durch die „Komplett-IDP“ eines Herstellers**
Mehrere Hersteller verkaufen fertig geschnürte IDPs. Sie funktionieren für enge Kundenprofile, schaffen aber einen neuen Lock-in bei einem anderen Hersteller. Dessen Roadmap wird zu Ihrer Roadmap.

**Plattform-Team geht in Tickets unter**
Ohne eigene Stellen und geschützte Zeit für Golden Paths wird das Plattform-Team zum Ticket-Support. Die Self-Service-Arbeit kommt zum Stillstand.

</div>


</div>
</div>

<!-- /BLOCK 4 -->

---

<!-- BLOCK 5: HOW AENIX HELPS -->

## Wie Ænix arbeitet

Das IDP-Projekt läuft in drei Phasen:

- **Phase 1: Platform Readiness Assessment (14 oder 28 Tage)** — aktuelle Plattformreife, Ziel-Architektur der IDP, Prioritäten der Golden Paths, RACI für das Plattform-Team. Siehe **[Platform Readiness Assessment](/de/dienstleistungen/platform-readiness-assessment/)**.
- **Phase 2: Aufbauprojekt (3–9 Monate)** — Ænix-Engineers arbeiten in Ihrem Plattform-Team mit und bauen Basis, Golden Paths und Runbooks auf. Wissenstransfer ist ein vollwertiger Liefergegenstand, kein Nachgedanke.
- **Phase 3 (optional): Managed-Betrieb** — für Organisationen, die die IDP brauchen, aber keine interne Kapazität für ein Plattform-Team aufbauen können.

Die Projekte beginnen typischerweise mit Phase 1; die Reihenfolge in Phase 2 ergibt sich aus dem Assessment.

<!-- /BLOCK 5 -->

---

<!-- BLOCK 6: WHY AENIX SPECIFICALLY -->

## Warum gerade Ænix

- **Backstage ist ein Werkzeug, kein Ziel.** Wir verkaufen es nicht und können Ihnen deshalb sagen, wenn ein Katalog der falsche erste Schritt ist und ein dokumentierter Golden Path der richtige.
- **Mandantenfähigkeit ist der schwierige Teil, und genau den betreiben wir.** [Cozystack](/de/produkte/cozystack/) läuft produktiv bei Service-Providern und regulierten Unternehmen, die mandantenfähige Clouds betreiben; das Mandantenmodell, das wir vorschlagen, betreiben wir selbst.

<!-- /BLOCK 6 -->

---

<!-- BLOCK 7: TIMELINE -->

## Ablauf des Projekts

| Wann | Was | Ergebnis |
|---|---|---|
| **Tag 0** | 30-minütiges Discovery-Gespräch (kostenlos) | Eignung klären, Umfang und IDP-Reifestufe bestimmen |
| **Phase 1: Assessment (14 oder 28 Tage)** | Platform Readiness Assessment | Ziel-Architektur der IDP, Prioritäten der Golden Paths, RACI |
| **Phase 2: Aufbau (3–9 Monate)** | Basis + Golden Paths + Runbooks + Wissenstransfer | Produktive IDP, betrieben von Ihrem Team |
| **Phase 3: Betrieb (optional, laufend)** | Managed Services oder vollständig intern | Dauerhaft betriebene IDP |

Zur Methodik siehe **[Platform Readiness Assessment](/de/dienstleistungen/platform-readiness-assessment/)**.

<!-- /BLOCK 7 -->

---

<!-- BLOCK 8: PROOF -->

## Unternehmen, die Plattformen mit Ænix betreiben

{{< clients >}}

Wir haben Internal Developer Platforms für Service-Provider mit mandantenfähigen Clouds, regulierte Unternehmen mit hohen Souveränitätsanforderungen, KI- und GPU-Betreiber mit Zugang für mehrere Data-Science-Teams sowie Telekommunikationsanbieter gebaut, die mehrere Altumgebungen zusammenführen.

{{< quote-carousel >}}
Die Logos oben stehen für produktive Deployments der Ænix Public Cloud Platform. Namentliche Referenzen zu Projekten unter NDA nennen wir im Discovery-Gespräch.
<!-- /BLOCK 8 -->

---

<!-- BLOCK 9: PRICING -->

## Preise

Das Assessment hat einen Festpreis, der vor dem Start feststeht, und liefert eine schriftliche Ziel-Architektur der IDP sowie eine Roadmap für Phase 2. Der Aufbau wird nach Aufwand oder zum Festpreis abgerechnet. Folgt Phase 2, werden die Kosten des Assessments je nach Umfang darauf angerechnet.

<!-- /BLOCK 9 -->

---

<!-- BLOCK 10: FAQ -->

---

<!-- BLOCK 11: BOTTOM CTA -->

<a id="discovery"></a>
## Starten Sie mit einem 30-minütigen Discovery-Gespräch

<div class="cta-row">
  <a class="cta-primary" href="/de/kontakt/">Gespräch vereinbaren</a>
</div>

Oder lesen Sie weiter:
- **[IDP-Beispiele ohne Backstage-Lock-in](/de/blog/2026/05/internal-developer-platform-beispiele-ohne-backstage/)** — praktische Muster
- **[Platform Engineering Services](/de/dienstleistungen/platform-engineering/)** — breiterer Umfang
- **[Platform Readiness Assessment](/de/dienstleistungen/platform-readiness-assessment/)** — Methodik des Assessments
- **[Cozystack](/de/produkte/cozystack/)** — die Basis, auf der wir in der Regel aufbauen

<!-- /BLOCK 11 -->

---

<!-- BLOCK 12: FOOTER TRUST STRIP -->

*Ænix ist das Platform-Engineering-Team, das Cozystack initiiert hat — ein CNCF-Projekt, eine zertifizierte Kubernetes-Distribution (CNCF Certified Kubernetes) mit OpenSSF Best Practices Badge.*

<!-- /BLOCK 12 -->
