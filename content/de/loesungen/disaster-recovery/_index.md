---
title: "Disaster Recovery as a Service auf souveräner Plattform"
description: "Disaster Recovery auf selbst betriebener Plattform: synchrone Replikation zwischen Rechenzentren, Backups außerhalb des Clusters, geprobte RTO/RPO."
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
  **Disaster Recovery as a Service (DRaaS) ist eine Fähigkeit, die Ihre Workloads und Daten an einen zweiten Standort repliziert, damit Sie nach einem Ausfall, einem Ransomware-Vorfall oder dem Verlust eines Rechenzentrums wiederherstellen können. Auf einer souveränen Plattform bedeutet das: Recovery-Infrastruktur, die Sie selbst betreiben und prüfen, statt eines undurchsichtigen Hyperscaler-Dienstes. Ænix entwirft und baut DR auf Cozystack (ein CNCF-Sandbox-Projekt, Apache 2.0) als Engineering-Leistung: synchrone Replikation über Rechenzentren mit LINSTOR/DRBD, geo-verteiltes etcd und Velero-Backups in Object Storage außerhalb des Clusters, mit Object Lock auf diesem Speicher. Cozystack hat kein automatisches standortübergreifendes VM-Failover; die VM-Wiederherstellung folgt einem dokumentierten, geprobten Runbook. Recovery-Time- und Recovery-Point-Objectives werden in Übungen getestet und belegt, statt nur im Vertrag behauptet. Das passt für Organisationen im Geltungsbereich von DORA oder NIS2, die Geschäftskontinuität nachweisen müssen, nicht nur behaupten.**
quick_facts:
  - label: "Was es ist"
    value: "Eine Recovery-Fähigkeit, die Workloads und Daten an einen zweiten Standort repliziert, damit der Betrieb nach einem Ausfall oder Datenverlust wiederhergestellt werden kann."
  - label: "RTO / RPO"
    value: "Ziele werden architektonisch festgelegt, in Übungen getestet und belegt; synchrone Replikation zielt für die geschützte Stufe auf ein RPO nahe null."
  - label: "Replikation"
    value: "Synchrone Volume-Replikation über Rechenzentren (LINSTOR/DRBD) plus geo-verteiltes etcd über drei Standorte."
  - label: "Backups"
    value: "Velero-Backups in Object Storage außerhalb des Clusters, den sie schützen, mit S3 Object Lock und Versionierung auf diesem externen Speicher."
  - label: "Failover"
    value: "Kein automatisches standortübergreifendes VM-Failover. Replizierter Storage hält an jedem Standort eine Kopie; Workloads nach dem Verlust eines Standorts zurückzuholen, folgt einem geprobten Runbook."
  - label: "Cozystack-Lizenz"
    value: "Cozystack ist Open Source unter Apache 2.0 — keine Lizenzkosten pro CPU, vollständige Prüfbarkeit der Control Plane."
  - label: "Regulatorische Passung"
    value: "Darauf ausgelegt, die Arbeit an der operationalen Resilienz nach DORA (einschließlich Art. 12: Backup und Wiederherstellung auf getrennten Systemen) und die Maßnahmen zur Aufrechterhaltung des Betriebs nach NIS2 (Art. 21) mit eigenen Nachweisen zu unterstützen."
quick_facts_source: "[DORA-Verordnung (EU) 2022/2554, EUR-Lex](https://eur-lex.europa.eu/eli/reg/2022/2554/oj), [Fallstudie souveräne Public Cloud](/de/case-studies/sovereign-public-cloud/)"
faq:
  - q: "Was ist Disaster Recovery as a Service (DRaaS)?"
    a: "DRaaS ist eine Disaster-Recovery-Fähigkeit, die Ihre Workloads und Daten laufend an einen zweiten Standort repliziert, damit Sie den Betrieb nach einem Ausfall, einem Ransomware-Angriff oder dem Verlust eines Rechenzentrums wiederherstellen können. Auf einer souveränen Plattform betreiben und prüfen Sie die Recovery-Infrastruktur selbst, statt einem undurchsichtigen Hyperscaler-Dienst zu vertrauen, den Sie nicht einsehen können."
  - q: "Was ist der Unterschied zwischen RTO und RPO?"
    a: "Das Recovery-Time-Objective (RTO) gibt an, wie lange die Wiederherstellung nach einem Vorfall dauern darf; das Recovery-Point-Objective (RPO), wie viele Daten Sie verlieren dürfen, gemessen in Zeit. Synchrone Replikation über Rechenzentren zielt für die geschützte Stufe auf ein RPO nahe null, während unveränderliche Backups und erprobte Runbooks das RTO auf eine belastbare Zahl senken."
  - q: "Wie schützt eine souveräne Plattform vor Ransomware?"
    a: "Backups werden in Object Storage außerhalb des Clusters geschrieben, den sie schützen, mit S3 Object Lock und Versionierung auf diesem Speicher. Ein Angreifer, der die Primärumgebung kompromittiert, kann die Recovery-Kopien innerhalb der Aufbewahrungsfrist weder ändern noch löschen. Standardmäßig liegt der Backup-Bucket im Cluster; ihn auszulagern, gehört zum Aufbau."
  - q: "Hilft DRaaS bei DORA und NIS2?"
    a: "Es unterstützt diese Arbeit. DORA (Verordnung (EU) 2022/2554) verlangt von Finanzunternehmen, Wiederherstellungsziele festzulegen, zu testen und zu belegen (Art. 11–12, einschließlich der Wiederherstellung auf getrennten Systemen nach Art. 12 Abs. 3), und Art. 21 NIS2 nennt die Aufrechterhaltung des Betriebs unter den Risikomanagement-Maßnahmen für wesentliche und wichtige Einrichtungen. Eine selbst betriebene DR-Plattform erzeugt Übungsprotokolle, Post-Mortems und Residenz-Nachweise, die Ihnen gehören. Was die Plattform standardmäßig nicht leistet, steht auf der Seite mit den DORA-Nachweisen."
  - q: "Wie belegen Sie, dass das Recovery-Ziel tatsächlich funktioniert?"
    a: "Durch echte Übungen statt Papierpläne. In der Fallstudie des Anbieters mit drei Rechenzentren schaltet das Team regelmäßig Nodes ab, um die Resilienz zu testen, und ein 20-stündiger Storage-Vorfall während eines Upgrades wurde ohne Datenverlust behoben. Recovery-Abläufe werden auf Staging geprobt und dann auf der Produktion wiederholt, mit einem Runbook für jedes Szenario."
  - q: "Wie sieht ein DR-Projekt mit Ænix aus?"
    a: "Einstieg ist ein Platform Readiness Assessment zu aktueller RTO/RPO-Lage, Replikationstopologie, Unveränderlichkeit der Backups und Übungsprozess — in 14 oder 28 Tagen zum Festpreis. Es liefert einen schriftlichen Bericht und eine Umsetzungs-Roadmap; der Aufbau dauert je nach Umfang typischerweise 3–12 Monate."
---

**Geschäftskontinuität ist keine Zeile in einem Anbietervertrag — sie ist ein Ergebnis, das Sie belegen können müssen. Disaster Recovery as a Service (DRaaS) auf einer souveränen, selbst betriebenen Plattform bietet synchrone Replikation über Rechenzentren, Backups, die von der Primärumgebung isoliert sind, und eine Wiederherstellung, die geprobt statt angenommen ist. Ænix baut und betreibt diese Plattformen auf [Cozystack](/de/produkte/cozystack/), sodass Ihre Recovery-Time- und Recovery-Point-Objectives eine Architektur sind, die Ihnen gehört, und Nachweise, die Sie einem Regulator vorlegen können.**

> **Passt zu:** **[Ænix Private Cloud Platform](/de/produkte/private-cloud-platform/)** als regulierte Cloud-Basis, auf der DR aufsetzt; **[DORA-Compliance](/de/loesungen/dora-compliance/)** für die Pflichten zur operationalen Resilienz, die DR erfüllen hilft. Beginnen Sie mit einem **[Platform Readiness Assessment →](/de/dienstleistungen/platform-readiness-assessment/)**. Für Infrastrukturverantwortliche: siehe den [Leitfaden für Leiter Infrastruktur](/de/fuer/leiter-infrastruktur/).

<div class="cta-row">
  <a class="cta-primary" href="/de/kontakt/">Gespräch vereinbaren</a>
  <a class="cta-secondary" href="/de/case-studies/sovereign-public-cloud/">Fallstudie ansehen →</a>
</div>


---

## Was muss DRaaS wirklich garantieren?

Jedes Gespräch über Disaster Recovery läuft auf zwei Zahlen hinaus, und die meisten Anbieterpräsentationen umgehen sie stillschweigend.

- **Recovery-Time-Objective (RTO)** — wie lange Sie ausfallen dürfen. Das hängt davon ab, wie schnell Sie den zweiten Standort in Betrieb nehmen, nicht davon, wie groß Ihr Backup ist.
- **Recovery-Point-Objective (RPO)** — wie viele Daten Sie verlieren dürfen, ausgedrückt in Zeit. Nächtliche Backups bedeuten ein RPO von bis zu 24 Stunden; synchrone Replikation zielt für die geschützte Stufe auf ein RPO nahe null.

Eine glaubwürdige DR-Fähigkeit legt sich für jede Workload-Stufe auf beide Zahlen fest und *demonstriert* sie dann in einer Übung. Auf einer souveränen Plattform liegen Replikationstopologie, Unveränderlichkeit der Backups und Übungsprotokolle in Ihrer Hand und lassen sich prüfen — Sie verlassen sich nicht auf das undurchsichtige SLA eines Hyperscalers, um einen Fehlerfall zu beschreiben, dessen Dokumentation Sie nie zu sehen bekommen.

---

## Wie synchrone Replikation über Rechenzentren funktioniert

Die geschützte Stufe einer souveränen DR-Plattform beruht auf synchroner Block-Replikation: Ein bestätigter Schreibvorgang existiert in mehr als einem Rechenzentrum, bevor die Anwendung den Erfolg gemeldet bekommt.

In der Referenzarchitektur betreibt Cozystack einen Compute-Cluster, der über drei Rechenzentren verteilt ist. Volumes werden synchron mit **LINSTOR/DRBD** bei Replikationsfaktor drei repliziert — eine Replik pro Standort —, und **etcd**, der Zustandsspeicher des Kubernetes-Clusters, ist über dieselben drei Standorte verteilt. Da sowohl die persistenten Daten als auch der Zustand der Control Plane an jedem Standort eine Kopie haben, gehen beim Verlust eines Rechenzentrums keine bestätigten Daten verloren. Betroffene VMs und Services an den verbleibenden Standorten wieder in Betrieb zu nehmen, geschieht nicht automatisch, sondern folgt einem dokumentierten, geprobten Runbook. Dieses Multi-Site-Design ist eine Engineering-Leistung im Rahmen des Aufbaus; es ist kein Standard einer Cozystack-Installation an einem Standort.

<div class="arch-section__fig">
<div class="diagram">
<div class="diagram__node"><b>Primäres Rechenzentrum</b><div class="diagram__chips"><span>Bestätigte Schreibvorgänge</span></div></div>
<div class="diagram__conn">synchron repliziert durch</div>
<div class="diagram__node diagram__node--brand"><b>Cozystack / Ænix</b><div class="diagram__chips"><span>LINSTOR/DRBD</span><span>Geo-verteiltes etcd</span></div></div>
<div class="diagram__conn">über drei Rechenzentren nach</div>
<div class="diagram__node"><b>Sekundäres Rechenzentrum</b><div class="diagram__chips"><span>Eine Replik pro Standort</span></div></div>
<div class="diagram__conn">wiederhergestellt per</div>
<div class="diagram__node"><b>Geprobtes Runbook</b><div class="diagram__chips"><span>Bestätigte Daten bleiben erhalten</span></div></div>
</div>
</div>

Das ist offene, an der [CNCF](https://www.cncf.io/) ausgerichtete Kubernetes-Infrastruktur statt proprietärer DR-Appliances. Das [Storage-Modell von Kubernetes](https://kubernetes.io/docs/concepts/storage/) behandelt die replizierten Volumes als gewöhnliche Persistent Volumes, sodass Anwendungen keine eigene DR-Integration brauchen, um von der standortübergreifenden Dauerhaftigkeit zu profitieren.

---

## Warum unveränderliche Backups wichtiger sind denn je

Synchrone Replikation schützt vor Hardware- und Standortausfällen, repliziert aber eine Ransomware-Verschlüsselung genauso zuverlässig. Deshalb sind DR und Backup getrennte Schichten.

**Velero**-Backups auf Plattform- und Tenant-Ebene erfassen Kubernetes-Objekte und Volume-Snapshots. In einem DR-Aufbau werden sie in Object Storage **außerhalb des Clusters geschrieben, den sie schützen**, mit **S3 Object Lock und Versionierung** auf diesem Speicher — ein Angreifer, der die Primärumgebung kompromittiert hat, kann sie innerhalb der Aufbewahrungsfrist weder ändern noch löschen. (Standardmäßig liegt der Backup-Bucket im Cluster; ihn auszulagern, gehört zum Aufbau.) Volume-Verschlüsselung mit LUKS lässt sich pro Storage Class optional aktivieren.

Für Regulatoren zählt diese Unterscheidung: Rahmenwerke zur operationalen Resilienz erwarten zunehmend einen Wiederherstellungsweg, der nachweislich außerhalb der Auswirkungen des primären Vorfalls liegt.

---

## Geprobte statt theoretische Wiederherstellung

Ein DR-Plan, der nie geübt wurde, ist eine Hypothese. Die Plattformen, die Ænix baut, werden tatsächlich geprobt.

In der Fallstudie des Anbieters mit drei Rechenzentren schaltet der Kunde regelmäßig gezielt Nodes ab, um die Resilienz zu testen — so kommen die nicht offensichtlichen Kaskaden ans Licht, die eine reine Planspielübung nie findet. Upgrades werden dokumentiert auf Staging geprobt und dann auf der Produktion wiederholt; nicht deklarative Befehle werden zugunsten von GitOps aufgegeben; und für jedes Szenario gibt es ein fertiges Runbook — DRBD-Recovery, Cluster-Upgrade, Storage-Failover. So wird aus einem RTO eine Zahl, die Sie verteidigen können, statt einer Marketingangabe.

---

## Beleg: 20 Stunden Vorfall, kein Datenverlust

Der klarste Beleg für eine DR-Aufstellung ist ihr Verhalten am schlimmsten Tag. In unserer anonymisierten **[Fallstudie zur souveränen Public Cloud](/de/case-studies/sovereign-public-cloud/)** traf einen mandantenfähigen Anbieter während eines großen Upgrades ein kaskadierender Storage-Ausfall — eine DRBD-Race-Condition, verlorene Patches in einem Zwischenschritt und ein Breaking Change in der Netzwerkschicht. Das Team arbeitete rund **20 Stunden an dem Vorfall und stellte die Cloud ohne Datenverlust wieder her**; die zugrunde liegenden Bugs gingen anschließend upstream an LINSTOR und dessen CSI-Treiber. Dasselbe Muster aus Replikation über drei Rechenzentren und geo-verteiltem etcd trug eine echte Produktions-Cloud durch einen echten Vorfall.

Für Einrichtungen im Geltungsbereich von DORA ist das genau die Art von Nachweis, die [DORA (Verordnung (EU) 2022/2554)](https://eur-lex.europa.eu/eli/reg/2022/2554/oj) in Art. 11–12 verlangt: getestete Wiederherstellung, dokumentierte Abläufe und Ziele, die Sie zeigen statt behaupten. Was die Plattform standardmäßig nicht leistet, ist auf der [Seite mit den DORA-Nachweisen](/de/compliance/dora/) aufgeführt.

---

<div class="band-fullbleed band-fullbleed--tint">
<div class="band-fullbleed__inner">

## Nicht jeder Workload braucht dieselbe Recovery-Stufe

Wer jedes System als geschäftskritisch behandelt, lässt DR-Budgets explodieren und macht Übungen unbeherrschbar. Eine funktionierende DR-Aufstellung stuft die Landschaft zuerst ein.

- **Stufe 0 — synchron.** Systeme, bei denen ein RPO über nahezu null inakzeptabel ist — Kernbanken-Hauptbücher, Orderbücher, Patientenakten. Sie liegen auf synchroner Replikation über Rechenzentren und sind der Grund, warum es die Topologie mit drei Rechenzentren gibt.
- **Stufe 1 — asynchron plus häufige Backups.** Wichtig, aber tolerant gegenüber einigen Minuten Datenverlust. Häufige Backups in gesperrten externen Speicher und asynchrone Replikation halten die Kosten im Verhältnis zum Risiko.
- **Stufe 2 — Backup und Neuaufbau.** Zustandslose oder leicht rekonstruierbare Services, wiederhergestellt aus Backups und Infrastructure as Code, mit einem RTO in Stunden statt Sekunden.

Die Einstufung ist das erste Ergebnis des Assessments, weil sie entscheidet, wohin die teure synchrone Kapazität geht und wo ein günstigerer Wiederherstellungsweg ehrlich ausreicht.

</div>
</div>

---

## Wie Ænix bei Disaster Recovery arbeitet

Das Projekt läuft als **[Platform Readiness Assessment](/de/dienstleistungen/platform-readiness-assessment/)** mit DR-Schwerpunkt in den Arbeitssträngen: aktuelle RTO/RPO-Lage je Workload-Stufe, Entwurf der Replikations- und Standorttopologie, Unveränderlichkeit der Backups und Isolation gegen Ransomware sowie Reife des Übungsprozesses. Ergebnis ist ein schriftlicher Bericht plus eine Umsetzungs-Roadmap für Phase 2. Wo die DR-Plattform zugleich die Produktionsplattform ist — der Regelfall —, passt sie natürlich zu **[Datensouveränität](/de/loesungen/data-sovereignty/)** und der Ausrichtung an DORA, sodass Kontinuität, Residenz und Compliance gemeinsam entworfen statt nachträglich angeflanscht werden.


---

*Ænix hat [Cozystack](https://cozystack.io) initiiert — ein CNCF-Sandbox-Projekt (der Antrag auf CNCF Incubation befindet sich in der Due-Diligence-Prüfung) unter Apache 2.0 — und pflegt es gemeinsam mit Maintainern anderer Unternehmen. Ænix bietet auf dieser Grundlage drei Plattformen an — Public Cloud, Private Cloud und AI. Wir entwerfen Architekturen für Disaster Recovery und Geschäftskontinuität für regulierte Organisationen.*
