---
title: "Disaster Recovery as a Service auf souveräner Plattform"
description: "Disaster Recovery as a Service auf souveräner, selbst betriebener Plattform: DC-übergreifende synchrone Replikation, unveränderliche Backups, belegbare RTO/RPO."
date: 2026-07-01
lastmod: 2026-07-01
page_type: "solution-landing"
language: "de"
quick_facts_style: "rows"
faq_style: "rows"
primary_keyword: "disaster recovery as a service"
secondary_keywords: ["cloud disaster recovery", "disaster recovery loesungen", "business continuity"]
hreflang_de: "/de/loesungen/disaster-recovery/"
hreflang_en: "/solutions/disaster-recovery/"
related_pages:
  - /de/loesungen/data-sovereignty/
  - /de/loesungen/dora-compliance/
  - /de/produkte/private-cloud-platform/
  - /de/dienstleistungen/platform-readiness-assessment/
  - /de/case-studies/sovereign-public-cloud/
service:
  type: "Disaster Recovery as a Service"
  areaServed: ["EU", "DACH"]
  audience: "Financial Services, Healthcare, Regulated Enterprise"
direct_answer: |
  **Disaster Recovery as a Service (DRaaS) ist eine verwaltete Fähigkeit, die Ihre Workloads und Daten an einen zweiten Standort repliziert, damit Sie nach einem Ausfall, einem Ransomware-Vorfall oder dem Verlust eines Rechenzentrums schnell umschalten können. Auf einer souveränen Plattform bedeutet das: Recovery-Infrastruktur, die Sie selbst betreiben und auditieren, statt eines undurchsichtigen Hyperscaler-Dienstes. Aenix baut DRaaS auf Cozystack (ein CNCF-Projekt, Apache 2.0): synchrone rechenzentrumsübergreifende Replikation mit LINSTOR/DRBD, geo-verteiltes etcd und unveränderliche Backups per Velero mit Object Lock. Recovery-Time- und Recovery-Point-Objectives werden getestet, belegt und sind gegenüber einem Regulator verteidigbar, statt nur im Vertrag behauptet. Es passt für Banken, Versicherer, das Gesundheitswesen und jede DORA- oder NIS2-regulierte Organisation, die Geschäftskontinuität beweisen muss, nicht nur behaupten.**
quick_facts:
  - label: "Was es ist"
    value: "Eine Recovery-Fähigkeit, die Workloads und Daten an einen zweiten Standort repliziert, für schnelles Umschalten nach Ausfall oder Datenverlust."
  - label: "RTO / RPO"
    value: "Ziele werden architektonisch festgelegt, in echten Notfallübungen getestet und belegt; synchrone Replikation zielt auf nahezu null RPO für die geschützte Stufe."
  - label: "Replikation"
    value: "Synchrone rechenzentrumsübergreifende Volume-Replikation (LINSTOR/DRBD) plus geo-verteiltes etcd über drei Standorte."
  - label: "Backups"
    value: "Unveränderliche Backups mit Velero und S3 Object Lock plus Versionierung; Deletion-Protection-Webhook schützt kritische Objekte."
  - label: "Resilienz-Ziel"
    value: "Architektur ausgelegt, den Verlust eines ganzen Rechenzentrums ohne Datenverlust zu überstehen."
  - label: "Plattform-Lizenz"
    value: "Cozystack ist Open Source unter Apache 2.0 — keine Lizenz pro CPU, vollständiges Audit der Control Plane."
  - label: "Regulatorische Passung"
    value: "Unterstützt DORA-Betriebsresilienz und NIS2-Geschäftskontinuität mit selbst gehaltenen Nachweisen."
quick_facts_source: "[DORA-Verordnung (EU) 2022/2554, EUR-Lex](https://eur-lex.europa.eu/eli/reg/2022/2554/oj), [Sovereign-Public-Cloud-Case-Study](/de/case-studies/sovereign-public-cloud/)"
faq:
  - q: "Was ist Disaster Recovery as a Service (DRaaS)?"
    a: "DRaaS ist eine verwaltete Disaster-Recovery-Fähigkeit, die Ihre Workloads und Daten laufend an einen zweiten Standort repliziert, damit Sie nach einem Ausfall, einem Ransomware-Angriff oder dem Verlust eines Rechenzentrums schnell umschalten können. Auf einer souveränen Plattform ist die Recovery-Infrastruktur eine, die Sie selbst betreiben und auditieren, statt eines undurchsichtigen Hyperscaler-Dienstes, den Sie nicht einsehen können."
  - q: "Was ist der Unterschied zwischen RTO und RPO?"
    a: "Das Recovery-Time-Objective (RTO) ist, wie lange die Wiederherstellung nach einem Vorfall dauern darf; das Recovery-Point-Objective (RPO) ist, wie viel Daten Sie verlieren dürfen, gemessen in Zeit. Synchrone DC-übergreifende Replikation zielt auf ein nahezu null RPO für die geschützte Stufe, während unveränderliche Backups und getestete Runbooks das RTO auf eine verteidigbare Zahl senken."
  - q: "Wie schützt eine souveräne Plattform vor Ransomware?"
    a: "Backups werden in unveränderlichen Object Storage mit S3 Object Lock und Versionierung geschrieben, sodass ein Angreifer, der die Primärumgebung kompromittiert, die Recovery-Kopien nicht verändern oder löschen kann. Ein Deletion-Protection-Webhook verhindert zusätzlich, dass kritische Objekte — Volumes, Namespaces, Load Balancer — versehentlich oder böswillig entfernt werden."
  - q: "Hilft DRaaS bei DORA- und NIS2-Compliance?"
    a: "Ja. DORA (Verordnung (EU) 2022/2554) verlangt von Finanzunternehmen, IKT-Betriebsresilienz-Ziele festzulegen, zu testen und zu belegen, und NIS2 legt wesentlichen und wichtigen Einrichtungen Geschäftskontinuitätspflichten auf. Eine selbst betriebene DR-Plattform erzeugt eigene Übungsprotokolle, Incident-Post-Mortems und Residenz-Nachweise, die ein Regulator direkt einsehen kann."
  - q: "Wie beweisen Sie, dass das Recovery-Ziel wirklich funktioniert?"
    a: "Durch echte Notfallübungen statt durch Papierpläne. Im Referenzprojekt schaltet das Team regelmäßig Nodes ab, um Resilienz real zu testen, und ein schwerer 20-stündiger Storage-Vorfall während eines Upgrades wurde mit null Datenverlust wiederhergestellt. Failover wird auf Staging nachweislich geprobt und dann auf Produktion wiederholt, mit fertigen Runbooks für jedes Szenario."
  - q: "Wie sieht ein DR-Engagement mit Aenix aus?"
    a: "Einstieg ist ein Platform Readiness Assessment zu aktueller RTO/RPO-Lage, Replikationstopologie, Backup-Unveränderlichkeit und Übungsprozess, geliefert in 14-28 Tagen. Es erzeugt einen schriftlichen Bericht und eine Phase-2-Roadmap. Vollständiger DR-Aufbau und Migration dauern typischerweise 9-18 Monate, je nach Umfang."
---

# Disaster Recovery as a Service auf einer Plattform, die Sie kontrollieren

**Geschäftskontinuität ist keine Zeile in einem Anbietervertrag — sie ist ein Ergebnis, das Sie beweisen können müssen. Disaster Recovery as a Service (DRaaS) auf einer souveränen, selbst betriebenen Plattform liefert Ihnen DC-übergreifende synchrone Replikation, unveränderliche Backups und Failover, das getestet statt angenommen ist. Ænix baut und betreibt diese Plattformen auf [Cozystack](/de/produkte/cozystack/), sodass Ihre Recovery-Time- und Recovery-Point-Objectives eine Architektur sind, die Sie besitzen, und Nachweise, die Sie einem Regulator übergeben können.**

> **Passt zu:** **[Ænix Private Cloud Platform](/de/produkte/private-cloud-platform/)** als regulierte Cloud-Basis, auf der DR aufsetzt; **[DORA-Compliance](/de/loesungen/dora-compliance/)** für die Betriebsresilienz-Pflichten, die DR erfüllen hilft. Starten Sie mit einem **[Platform Readiness Assessment →](/de/dienstleistungen/platform-readiness-assessment/)**.

<div class="cta-row">
  <a class="cta-primary" href="/de/kontakt/">Discovery-Call buchen</a>
  <a class="cta-secondary" href="/de/case-studies/sovereign-public-cloud/">Case Study ansehen →</a>
</div>


---

## Was muss DRaaS wirklich garantieren?

Jedes Disaster-Recovery-Gespräch reduziert sich auf zwei Zahlen, und die meisten Anbieter-Pitches umgehen sie stillschweigend.

- **Recovery-Time-Objective (RTO)** — wie lange Sie ausfallen dürfen. Das hängt davon ab, wie schnell Sie den zweiten Standort in Betrieb nehmen, nicht davon, wie groß Ihr Backup ist.
- **Recovery-Point-Objective (RPO)** — wie viel Daten Sie verlieren dürfen, ausgedrückt in Zeit. Nächtliche Backups bedeuten ein RPO von bis zu 24 Stunden; synchrone Replikation zielt auf ein RPO nahe null für die geschützte Stufe.

Eine glaubwürdige DR-Fähigkeit verpflichtet sich auf beide Zahlen je Workload-Stufe und *demonstriert* sie dann in einer echten Notfallübung. Auf einer souveränen Plattform sind Replikationstopologie, Backup-Unveränderlichkeit und Drill-Protokolle Dinge, die Sie halten und einsehen können — Sie vertrauen nicht dem undurchsichtigen SLA eines Hyperscalers, um einen Fehlerfall zu beschreiben, den Sie nie dokumentiert sehen werden.

---

## Wie funktioniert synchrone DC-übergreifende Replikation?

<div class="arch-section__fig">
<div class="diagram">
<div class="diagram__node diagram__node--brand"><b>Cozystack Compute-Cluster</b><div class="diagram__chips"><span>geo-verteilt über drei Rechenzentren</span></div></div>
<div class="diagram__conn">repliziert Volumes synchron mit</div>
<div class="diagram__node"><b>LINSTOR/DRBD</b><div class="diagram__chips"><span>Replikationsfaktor drei — eine Replik pro Standort</span></div></div>
<div class="diagram__conn">übersteht</div>
<div class="diagram__node"><b>Verlust eines ganzen Rechenzentrums ohne Datenverlust</b></div>
</div>
</div>

Die geschützte Stufe einer souveränen DR-Plattform basiert auf synchroner Block-Replikation, sodass ein committeter Write in mehr als einem Rechenzentrum existiert, bevor der Anwendung der Erfolg gemeldet wird.

In der Referenzarchitektur betreibt Cozystack einen Compute-Cluster, geo-verteilt über drei Rechenzentren. Volumes werden synchron mit **LINSTOR/DRBD** bei Replikationsfaktor drei repliziert — eine Replik pro Standort — und **etcd**, der Zustandsspeicher des Kubernetes-Clusters, ist über dieselben drei Standorte geo-verteilt. Das Ergebnis ist eine Architektur, die ausgelegt ist, den Verlust eines ganzen Rechenzentrums ohne Datenverlust zu überstehen, weil sowohl die persistenten Daten als auch der Control-Plane-Zustand bereits anderswo liegen.

Das ist offene, [CNCF](https://www.cncf.io/)-nahe Kubernetes-Infrastruktur statt proprietärer DR-Appliances. Das [Kubernetes-Storage-Modell](https://kubernetes.io/docs/concepts/storage/) behandelt die replizierten Volumes als gewöhnliche Persistent Volumes, sodass Anwendungen keine spezielle DR-Integration brauchen, um von standortübergreifender Dauerhaftigkeit zu profitieren.

---

## Warum unveränderliche Backups heute wichtiger sind denn je

Synchrone Replikation schützt vor Hardware- und Standortausfall, repliziert aber ein Ransomware-Verschlüsselungsereignis genauso getreu. Deshalb sind DR und Backup getrennte Schichten.

Backups auf der Plattform werden in Object Storage mit **S3 Object Lock und Versionierung** geschrieben, was unveränderliche Kopien erzeugt, die ein Angreifer, der die Primärumgebung kompromittiert hat, innerhalb der Aufbewahrungsfrist nicht verändern oder löschen kann. **Velero**-Backups auf Plattform- und Tenant-Ebene erfassen Kubernetes-Objekte und Volume-Snapshots, und ein **Deletion-Protection-Webhook** schützt kritische Objekte — Volumes, Namespaces, Load Balancer — vor versehentlicher oder böswilliger Entfernung. LUKS-Verschlüsselung im Ruhezustand und verschlüsselte Inter-DC-Replikation halten die Recovery-Kopien vertraulich und dauerhaft zugleich.

Diese Unterscheidung zählt für Regulatoren: Betriebsresilienz-Rahmenwerke erwarten zunehmend einen Recovery-Pfad, der nachweislich vom Wirkungsradius des Primärvorfalls isoliert ist.

---

## Getestetes Failover, kein Papier-Failover

Ein DR-Plan, der nie geübt wurde, ist eine Hypothese. Die Plattformen, die Ænix betreibt, werden unter realen Ausfallbedingungen geprobt.

Im Referenzprojekt schaltet der Kunde regelmäßig Nodes ab, um Resilienz bewusst zu testen, was die nicht offensichtlichen Kaskaden aufdeckt, die eine Tabletop-Übung nie findet. Upgrades werden auf Staging nachweislich geprobt und dann auf Produktion wiederholt; nicht-deklarative Kommandos werden zugunsten von GitOps fallen gelassen; und jedes Szenario hat ein fertiges Runbook — DRBD-Recovery, Cluster-Upgrade, Storage-Failover. Das verwandelt ein RTO von einer Marketing-Zahl in eine Zahl, die Sie verteidigen können.

---

## Beleg: ein 20-Stunden-Vorfall, null Datenverlust

Der klarste Beweis einer DR-Aufstellung ist ihr Verhalten am schlimmsten Tag. In unserer anonymisierten **[Sovereign-Public-Cloud-Case-Study](/de/case-studies/sovereign-public-cloud/)** traf einen Multi-Tenant-Anbieter ein kaskadierender Storage-Ausfall während eines großen Upgrades — ein DRBD-Race, verlorene Patches an einem Zwischenschritt und ein Breaking Change in der Netzwerkschicht. Das Team arbeitete den Vorfall rund **20 Stunden lang ab und stellte die Cloud mit null Datenverlust wieder her**, dann wanderten die zugrunde liegenden Bugs upstream in LINSTOR und dessen CSI-Treiber. Dasselbe Drei-DC-Replikations-, geo-verteilte-etcd- und Immutable-Backup-Muster, das eine Bank oder ein Versicherer einsetzen würde, trug eine echte Produktions-Cloud durch eine echte Katastrophe.

Für DORA-regulierte Einrichtungen ist genau das die Form von Nachweis, die [DORA (Verordnung (EU) 2022/2554)](https://eur-lex.europa.eu/eli/reg/2022/2554/oj) erwartet: getestete Resilienz, dokumentierte Wiederherstellung und Ziele, die Sie zeigen statt behaupten.

---

<div class="band-fullbleed band-fullbleed--tint">
<div class="band-fullbleed__inner">

## Nicht jeder Workload braucht dieselbe Recovery-Stufe

Jedes System als geschäftskritisch zu behandeln, ist der Weg, auf dem DR-Budgets explodieren und Notfallübungen unbeherrschbar werden. Eine funktionierende DR-Aufstellung stuft den Bestand zuerst.

- **Stufe 0 — synchron.** Systeme, bei denen ein RPO über nahezu null inakzeptabel ist — Kern-Banking-Ledger, Orderbücher, Patientenakten. Diese liegen auf synchroner DC-übergreifender Replikation und sind der Grund, warum die Drei-DC-Topologie existiert.
- **Stufe 1 — asynchron plus häufige Backups.** Wichtig, aber tolerant gegenüber Minuten von Datenverlust. Häufige unveränderliche Backups und asynchrone Replikation halten die Kosten im Verhältnis zum Risiko.
- **Stufe 2 — Backup und Rebuild.** Zustandslose oder leicht rekonstruierbare Dienste, wiederhergestellt aus unveränderlichen Backups und Infrastructure-as-Code, mit einem RTO in Stunden statt Sekunden.

Die Einstufung ist das erste Ergebnis des Assessments, weil sie entscheidet, wohin die teure synchrone Kapazität geht und wo ein günstigerer Recovery-Pfad ehrlich ausreicht.

</div>
</div>

---

## Wie Ænix bei Disaster Recovery arbeitet

Das Engagement läuft als **[Platform Readiness Assessment](/de/dienstleistungen/platform-readiness-assessment/)** mit DR-gewichteten Workstreams: aktuelle RTO/RPO-Lage je Workload-Stufe, Replikations- und Geo-Topologie-Design, Backup-Unveränderlichkeit und Ransomware-Isolation sowie Reife des Drill-Prozesses. Ergebnis ist ein schriftlicher Bericht plus eine Phase-2-Roadmap. Wo die DR-Plattform zugleich die Produktionsplattform ist — der Regelfall — passt sie natürlich zu **[Data Sovereignty](/de/loesungen/data-sovereignty/)** und DORA-Arbeit, sodass Kontinuität, Residenz und Compliance gemeinsam konstruiert statt nachträglich aufgesetzt werden.


---

*Ænix ist das Team hinter [Cozystack](https://cozystack.io) — einem CNCF-Projekt (heute Sandbox; Incubating erwartet für Spätsommer 2026), Apache 2.0. Ænix kommerzialisiert es als Ænix Platform — drei Plattformen auf einer Engine: Public Cloud, Private Cloud und AI — kombinierbar statt sich gegenseitig ausschließend. Wir bauen souveräne Disaster-Recovery- und Business-Continuity-Plattformen für regulierte Organisationen in der EU und DACH.*
