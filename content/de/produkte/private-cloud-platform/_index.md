---
title: "Ænix Private Cloud Platform für regulierte Unternehmen"
description: "Ænix Private Cloud Platform: private und hybride souveräne Cloud für Banken, Versicherer, Behörden, Telco und Gesundheitswesen. An DORA und NIS2 ausgerichtet."
type: "page"
language: "de"
hreflang_en: /products/private-cloud-platform/
quick_facts_style: "rows"
faq_style: "rows"
primary_keyword: "private cloud plattform für regulierte unternehmen"
secondary_keywords: ["souveräne cloud plattform", "dora cloud", "nis2 cloud plattform", "internal developer platform", "vmware alternative enterprise"]
direct_answer_image: "/images/cozystack-screenshot.png"
direct_answer_image_alt: "Konsole des Cozystack Dashboard"
images: ["img/og/private-cloud-platform.jpg"]
related_pages: ["/de/produkte/public-cloud-platform/", "/de/produkte/ai-platform/", "/de/loesungen/dora-compliance/", "/de/loesungen/nis2-compliance/", "/de/migration/vmware/"]
direct_answer: |
  **Die Ænix Private Cloud Platform ist eine private und hybride souveräne Cloud für regulierte Organisationen, die Cloud für sich selbst betreiben, statt sie zu verkaufen — Banken, Versicherer, öffentliche Verwaltung, Telcos und Betreiber im Gesundheitswesen. Sie läuft auf Cozystack, dem CNCF-Projekt, das Ænix entwickelt hat und gemeinsam mit Maintainern anderer Unternehmen pflegt, und arbeitet neben bestehenden VMware-, OpenNebula- und OpenShift-Beständen, während die Workloads umziehen — ohne Komplettaustausch. Ænix legt sie auf Ihre Aufsicht hin aus: an DORA und NIS2 ausgerichtete Architektur, Volume-Verschlüsselung dort, wo Sie sie brauchen, Aufbewahrung und Archivierung der Audit-Logs nach Ihren Vorgaben, Multi-Site-Designs und Kontrollnachweise für Ihre eigene ISO-27001-Arbeit. Eine Developer-Self-Service-Schicht mit Golden Paths für GitLab CI/CD und Argo CD gehört zur Plattform. Angeboten wird per RFP: 14 oder 28 Tage Assessment, danach 3–12 Monate Aufbau je nach Umfang; die Support-Stufe wird beim Scoping festgelegt. Keine Lizenzkosten pro CPU oder Core.**
quick_facts:
  - label: "Was es ist"
    value: "Private und hybride souveräne Cloud für regulierte Unternehmen auf Basis von Cozystack, die neben VMware, OpenNebula und OpenShift läuft, während Sie migrieren."
  - label: "Lizenz"
    value: "Kern unter der Apache-2.0-Lizenz (keine Lizenzkosten pro CPU oder Core)"
  - label: "Status"
    value: "Cozystack ist ein CNCF-Projekt (Sandbox seit 28.02.2025; der Antrag auf CNCF Incubation befindet sich in der Due-Diligence-Prüfung)"
  - label: "Für wen"
    value: "Regulierte Unternehmen — Banken, Versicherer, öffentliche Verwaltung, Telco, Gesundheitswesen, regulierte Industrie- und Energiebetreiber"
  - label: "Enthalten"
    value: "An DORA und NIS2 ausgerichtete Architektur, optional aktivierbare Volume-Verschlüsselung, konfigurierbare Aufbewahrung der Audit-Logs, Multi-Site-Designs, Air-Gap-Deployment, Kontrollnachweise für Ihre ISO-27001-Arbeit und die Developer-Self-Service-Schicht"
  - label: "Vorgehen"
    value: "Kostenloses 30-minütiges Discovery-Gespräch, 14 oder 28 Tage Platform Readiness Assessment, danach 3–12 Monate Aufbau je nach Umfang. Angebot per RFP."
  - label: "Architektur"
    value: "Kubernetes-nativ, Multi-DC, KubeVirt-VMs und Container über eine API, Cilium-Networking (eBPF), replizierter Block-Storage mit LINSTOR/DRBD, Mandantenfähigkeit über die Tenant-CRD"
faq:
  - q: "Was unterscheidet das vom Eigenbetrieb des Open-Source-Cozystack?"
    a: "Cozystack liefert das Kubernetes-native, mandantenfähige Fundament. Die Private Cloud Platform ergänzt die Design- und Umsetzungsarbeit, die eine Aufsicht erwartet: an DORA und NIS2 ausgerichtete Architektur, Verschlüsselung, Log-Aufbewahrung und Backup-Ziele nach Ihren Vorgaben, Runbooks für den Multi-Site-Betrieb, Koexistenz mit VMware, OpenNebula und OpenShift während der Migration, Kontrollnachweise für Ihre Audits, eine Enterprise-Support-Stufe und Schulungen für Ihre Engineers. Die Engine ist dieselbe und bleibt Apache 2.0; Sie kaufen die Schicht für den regulierten Betrieb und die Leute, die das schon einmal gemacht haben."
  - q: "Worin unterscheidet sie sich von der Ænix Public Cloud Platform?"
    a: "Darin, wer die Kapazität verbraucht. Die Private Cloud Platform ist für Organisationen, die Cloud für die eigenen Fachbereiche betreiben; sie bringt deshalb Compliance-Architektur, Verschlüsselung und Audit-Logging mit, ausgelegt auf die jeweilige Aufsicht. Die Public Cloud Platform ist für Betreiber, die Cloud an externe Kunden verkaufen; sie bringt stattdessen Billing, Zahlungsabwicklung und Kundenportale mit. Fundament und APIs sind dieselben — und ein Telco oder eine Bank, die beides tut, betreibt beides auf einer Plattform statt auf zweien."
  - q: "Kann sie neben unserem bestehenden VMware-Bestand laufen?"
    a: "Ja, so laufen diese Programme in der Regel. Die Plattform läuft neben bestehenden Umgebungen mit VMware Cloud Foundation, OpenStack, OpenNebula und OpenShift, während die Konsolidierung im Tempo der Workloads voranschreitet. VMs ziehen mit den integrierten Migrationswerkzeugen um, eine Gruppe nach der anderen."
  - q: "Kommt die Developer-Self-Service-Schicht separat?"
    a: "Nein. Die Schicht der Internal Developer Platform — Golden Paths, Muster für GitLab CI/CD, GitOps mit Argo CD, Self-Service-APIs für Umgebungen, Datenbanken und Cluster — gehört zu dieser Plattform und ist kein eigenes Produkt. Wer nur die regulierte Cloud möchte, lässt sie ausgeschaltet; wer Self-Service für die eigenen Engineers möchte, schaltet sie ohne zweite Beschaffung zu."
  - q: "Können wir GPU- und KI-Workloads ergänzen?"
    a: "Ja. Die Ænix AI Platform läuft auf demselben Fundament: GPU-Mandanten nutzen dieselbe Tenant-Grenze wie der übrige Bestand, und die für die Cloud getroffenen Entscheidungen zu Storage und Logging gelten auch für die KI-Workloads. Regulierte Organisationen ergänzen sie typischerweise, sobald das Cloud-Fundament produktiv läuft, ohne die Plattform darunter zu ändern."
  - q: "Was bedeutet Air-Gap-Betrieb hier konkret?"
    a: "Für Betrieb und Updates der Plattform ist kein Internetzugang nötig: Images und Plattform-Releases werden in den abgeschotteten Bereich gespiegelt, und die Control Plane hängt von keinem vom Hersteller gehosteten Dienst ab. Die Air-Gap-Installation ist ein Open-Source-Workflow von Cozystack; Support von Ænix dafür ist ab der Stufe Plus enthalten. Ænix-Engineers arbeiten nur mit Ihrer Freigabe in Ihrer Umgebung."
  - q: "Wo sitzen die Engineers von Ænix?"
    a: "Ænix hat rund 20 Mitarbeitende in der EU und in Zentralasien. Verträge mit Kunden in der EU werden mit der AENIX s.r.o. in Tschechien geschlossen. Wer auf welche Umgebung von wo aus zugreifen darf, wird im Vertrag festgelegt."
aliases:
  - /de/produkte/aenix-platform/enterprise-edition/
  - /de/produkte/aenix-platform/idp-edition/
---

**Private und hybride souveräne Cloud für regulierte Organisationen, die Cloud für sich selbst betreiben. Multi-Site-Designs, an DORA und NIS2 ausgerichtete Architektur und Koexistenz mit VMware, OpenNebula und OpenShift während der Migration — auf Hardware, die Sie kontrollieren. Developer Self-Service und Schulungen für Ihre Engineers gehören zur Plattform und sind kein zweiter Kauf.**

<div class="cta-row">
  <a class="cta-primary" href="/de/kontakt/">Gespräch vereinbaren</a>
  <a class="cta-secondary" href="/de/produkte/">Plattformen vergleichen →</a>
</div>

## Was enthalten ist

### Private und hybride souveräne Cloud über mehrere Standorte

Stretched- und Multi-Site-Designs über zwei oder mehr Rechenzentren, mit synchroner Replikation dort, wo das Design sie vorsieht — ein Schweizer Anbieter betreibt ein solches Design über [drei Rechenzentren](/de/case-studies/sovereign-public-cloud/). Ein automatisches standortübergreifendes VM-Failover gibt es nicht: Der Standortwechsel folgt einem Runbook, das wir mit Ihnen entwerfen und proben, und Backups landen auf Speicher außerhalb des Clusters, den sie schützen. Was die Plattform leistet und was nicht, steht auf der [DORA-Nachweisseite](/de/compliance/dora/).

### Koexistenz mit VMware, OpenNebula und OpenShift

Die Plattform ist auf **Koexistenz** ausgelegt, nicht auf einen Komplettaustausch. Sie läuft neben bestehenden Umgebungen mit VMware Cloud Foundation, OpenStack, OpenNebula und OpenShift, während die Workloads in ihrem eigenen Tempo umziehen; eine Finanzgruppe in Asien betreibt [ein Self-Service-Portal über OpenNebula, VMware und Kubernetes](/de/case-studies/unified-cloud-portal-financial-group/).

### DORA-Architekturkontrollen

- Volume-Verschlüsselung im Ruhezustand (LINSTOR und LUKS, optional aktivierbar) für die Storage Classes, die sie brauchen (Artikel 9)
- Audit-Logging mit Aufbewahrung nach Ihren Vorgaben — standardmäßig 30 Tage — und Ausleitung in einen unveränderlichen Speicher unter Ihrer Kontrolle (Artikel 17–19)
- Tenant-Grenzen entlang der Klassifizierung von IKT-Assets und -Risiken (Artikel 8)
- Ein Open-Source-Ausstiegspfad: Die Plattform läuft ohne Ænix weiter (Artikel 28 Abs. 8)
- Lieferantentransparenz für das Informationsregister (Artikel 28 Abs. 3)

Die [DORA-Nachweisseite](/de/compliance/dora/) ordnet jedem Artikel zu, was Cozystack liefert, was Sie konfigurieren und was nicht abgedeckt ist.

<div class="cta-row">
  <a class="cta-secondary" href="/de/loesungen/dora-compliance/">Leistungen zu DORA →</a>
  <a class="cta-secondary" href="/de/ressourcen/dora-compliance-checkliste/">Kostenlose DORA-Checkliste →</a>
</div>

### NIS2-Architekturkontrollen

- Risikomanagementmaßnahmen im Bereich der Cybersicherheit nach Artikel 21 in zehn Kontrollbereichen
- Vorfallbearbeitung und Meldevorlagen nach Artikel 23, abgestimmt auf die Fristen von 24 Stunden, 72 Stunden und einem Monat
- Tenant-Grenzen mit NetworkPolicy und Cilium für die Segmentierung

<div class="cta-row">
  <a class="cta-secondary" href="/de/loesungen/nis2-compliance/">Leistungen zu NIS2 →</a>
  <a class="cta-secondary" href="/de/ressourcen/nis2-compliance-checkliste/">Kostenlose NIS2-Checkliste →</a>
</div>

### Souveränes Deployment

Hardware unter Ihrer Kontrolle in einer Jurisdiktion Ihrer Wahl. Air-Gap-Betrieb wird unterstützt (kein Internetzugang erforderlich). Ænix-Engineers arbeiten nur mit Ihrer Freigabe in Ihrer Umgebung.

### Verschlüsselung

Volume-Verschlüsselung im Ruhezustand lässt sich pro Storage Class optional aktivieren, und Backups können verschlüsselt auf Speicher unter Ihrer Kontrolle abgelegt werden. Das Schlüsselmanagement — wer die Schlüssel hält, Rotation, Vier-Augen-Prinzip — legen wir beim Aufbau gemeinsam mit Ihnen fest. Die [DSGVO-Nachweisseite](/de/compliance/dsgvo/) beschreibt die aktuelle Umsetzung und ihre Grenzen.

### Audit-Logging

Audit-Logs in VictoriaLogs mit konfigurierbarer Aufbewahrung (standardmäßig 30 Tage), die sich in Ihr SIEM und in ein unveränderliches Archiv unter Ihrer Kontrolle exportieren lassen — für die Aufbewahrungsdauer, die Ihre Aufsicht erwartet.

### Mandantenfähigkeit mit der Tenant-CRD

Die Tenant-CRD bringt Quotas, RBAC und Observability pro Workload mit. Die Tenant-Grenze wird auf Netzwerk-, Identitäts-, Storage- und Observability-Ebene durchgesetzt — nicht nur über Namespaces.

### Schulung und Training

Schulungen für Ihr Engineering-Team gehören zum Projekt, dazu monatliche Trainingsstunden in jeder Support-Stufe. In den Stufen Plus und Enterprise ist pro Jahr ein vollständiger [Kubernetes-Deep-Dive-Kurs](/de/kubernetes-deep-dive/) enthalten, der den Cozystack-Stack abdeckt (Talos, LINSTOR, Cilium, KubeVirt, Cluster API, Flux).

### Enterprise-SLA und Audit-Unterstützung

Die Support-Stufe wird beim Scoping festgelegt, aus denselben [Stufen](/de/preise/#support) wie in der Preisliste: Reaktionszeiten bis hinunter zu einer Stunde bei Enterprise, Support rund um die Uhr ab Plus, Unterstützung bei Compliance-Audits ab Plus. Die Plattform liefert Kontrollnachweise für Ihre eigene ISO-27001- oder SOC-2-Arbeit; Ænix zertifiziert nicht Ihre Organisation. Die AENIX s.r.o. ist für ihr eigenes ISMS nach ISO/IEC 27001:2022 zertifiziert ([Zertifikat](/de/compliance/iso-27001/)). Engineering-Teams in der EU und in Zentralasien; EU-Verträge über die AENIX s.r.o. (Tschechien).

---

### Developer Self-Service (Internal Developer Platform)

Teil der Plattform und kein zweites Produkt — und für Organisationen, die sie nicht wollen, ausgeschaltet. Sie macht aus dem mandantenfähigen Fundament etwas, mit dem Ihre Engineers direkt arbeiten:

- **Golden Paths und Assistenten zum Anlegen von Services** — Engineers beschreiben das Ergebnis (Workload, SLO, Mandant), und die Plattform setzt es um. Anpassbar an die Muster Ihrer Organisation.
- **Integration mit GitLab CI/CD** — fertige Muster für Umgebungen, Secrets und die Promotion von Deployments, mit Vorlagen für Webservices, Worker, Batch-Jobs und ML-Pipelines. GitHub und Bitbucket werden als Alternativen unterstützt.
- **GitOps mit Argo CD** — App-of-Apps-Setup über mehrere Cluster und Umgebungen, Änderungen an Anwendungen und Infrastruktur per Pull Request, Erkennung und Behebung von Drift.
- **Self-Service-APIs** — Umgebungen, Managed Databases (PostgreSQL, MariaDB, Valkey, Kafka, ClickHouse), Object Storage, Kubernetes-Cluster, Observability-Bereiche und Identitätszuordnungen, ohne Ticket-Warteschlangen.
- **Dashboards zur Engineering-Produktivität** — Zeit bis zur Umgebung, Deployment-Frequenz, Lead Time, Drift-Ereignisse.

Die Tenant-CRD, die die Compliance-Grenze trägt, ist dasselbe Objekt, das auch das Team- oder Squad-Modell abbildet. Eine Self-Service-Umgebung ist also durch die Kontrolle isoliert, die der Prüfer bereits akzeptiert hat. Im Vergleich zu einem Aufbau auf Backstage: Backstage ist ein UI-Framework, und die Cloud darunter müssen Sie weiterhin selbst stellen — hier kommen das Fundament und die Schicht darüber zusammen.

## Mit den anderen Plattformen kombinieren

Die drei Ænix-Plattformen sind dieselbe Engine mit unterschiedlich zugeschalteten Oberflächen; sie ergänzen sich, statt zu konkurrieren. Nichts davon ist eine separate Installation oder eine zweite Beschaffung.

- **[AI Platform](/de/produkte/ai-platform/)** — GPU-Mandanten auf NVIDIA-GPUs für Rechenzentren, Model Serving und Vektordatenbanken, innerhalb derselben Tenant-Grenze, die die Aufsicht bereits geprüft hat.
- **[Public Cloud Platform](/de/produkte/public-cloud-platform/)** — Billing, Zahlungsabwicklung und Kundenportale für den Fall, dass dieselbe Organisation Kapazität auch extern verkauft. Ein Telco mit regulierter interner Umgebung und einem kommerziellen souveränen Cloud-Produkt betreibt beides auf einer Plattform mit einem Betriebsteam.

Die praktische Folge: Wer sich jetzt für die Private Cloud Platform entscheidet, verbaut sich später nichts. GPU-Mandanten oder eine kommerzielle Schicht für Kunden zu ergänzen, ist eine Konfigurationsentscheidung auf der Plattform, die Sie bereits betreiben.

## Einordnung gegenüber den etablierten Anbietern

| Im Vergleich zu | Die Abwägung |
|---|---|
| **Nutanix** | Nutanix verkauft ein Erlebnis auf Appliance-Niveau: HCI mit Prism, ein Hersteller für Hardware und Software und ein Betriebsmodell, das tatsächlich sofort funktioniert. Der Preis dafür sind Lizenzkosten pro Core, die Hardware-Kompatibilitätsliste und ein Ausstieg, der mit jeder Verlängerung schwieriger wird — und die Angebote schwanken stark, sodass derselbe Bestand in einer breiten Spanne landen kann. Die Ænix Private Cloud Platform läuft auf Standard-Hardware ohne Lizenzkosten pro Core, und Kubernetes ist die API statt eines nachträglich angebauten Zusatzes. [Fünf-Jahres-TCO mit Angebotssensitivität](/tco-calculator/vs-nutanix/) (englisch). |
| **Azure Stack HCI / Azure Local** | Die richtige Wahl, wenn Ihr Zielbild Azure ist und dies eine Landing Zone für Workloads sein soll, die das Gebäude noch nicht verlassen können: Azure Control Plane, Azure-Abrechnung, Azure-Identitäten, ein Betriebsmodell. Zugleich ist es das Gegenteil von Souveränität — die Control Plane gehört Microsoft, der Zähler läuft zu Microsoft, und die Frage nach der Jurisdiktion der Control Plane hat genau eine Antwort. Die Private Cloud Platform holt die Control Plane in Ihren Perimeter, auf Wunsch vollständig air-gapped, mit optionaler Volume-Verschlüsselung im Ruhezustand (LINSTOR und LUKS) und einer Passphrase, die Sie verwalten. |
| **VMware / VCF unter Broadcom** | Die Migration, die derzeit alle durchrechnen. Siehe [Cozystack vs. VMware](/de/vergleichen/cozystack-vs-vmware/) und die [Fünf-Jahres-TCO](/tco-calculator/vs-vmware/) (englisch). |
| **OpenShift** | Ein echter Ökosystem-Vorteil bei zertifizierten Operatoren und Images, dem eine Subscription pro Core und eine schwergewichtigere Plattform gegenüberstehen. [Der ehrliche Vergleich](/de/vergleichen/cozystack-vs-openshift/). |

---

## Wer sie kauft

| Käufer | Typisches Projekt |
|---|---|
| Bank oder Finanzgruppe | An DORA ausgerichtete Private Cloud mit Developer Self-Service ([Fallstudie Bank](/de/case-studies/private-cloud-in-a-bank/), [Fallstudie Finanzgruppe](/de/case-studies/unified-cloud-portal-financial-group/)) |
| Versicherer | DORA-Umfang, DSGVO und sektorale Vorgaben; Souveränität für regulierte Workloads |
| Große öffentliche Verwaltung | Souveräne Cloud im Einklang mit nationalen Beschaffungsvorgaben |
| Telekommunikationsbetreiber | NIS2-Pflichten als wesentliche Einrichtung, dazu die Option auf ein Cloud-Produkt für Kunden |
| Betreiber im Gesundheitswesen | Sektorale Datenschutzgesetze und KI-Workloads auf regulierten Daten |
| Regulierte Industrie / Energie | NIS2-Pflichten als wesentliche Einrichtung, KI-Optimierung und Edge |

---

## Preise

Die Ænix Private Cloud Platform wird nach einem Discovery-Gespräch und einem Platform Readiness Assessment per RFP angeboten. Die [veröffentlichten Support-Stufen](/de/preise/#support) gelten für die Public Cloud Platform und für selbst betriebenes Cozystack; ein Private-Cloud-Programm enthält die beim Scoping gewählte Stufe.

[Private Cloud Platform besprechen →](/de/kontakt/?platform=private-cloud)

---

## Ablauf eines Projekts

- **Discovery-Gespräch** (30 Minuten, kostenlos)
- **Platform Readiness Assessment** (14 oder 28 Tage, Festpreis, vorab vereinbart) — Gap-Analyse zu DORA und NIS2 sowie Architektur-Roadmap
- **Aufbau** (3–12 Monate, je nach Umfang) — Produktiv-Deployment, oft beginnend mit einem klar abgegrenzten Ausschnitt (eine Workload-Klasse, ein Geschäftsbereich, ein Standort), dazu Audit-Unterstützung und Schulung des Betriebsteams
- **Managed Operations** (optional, laufend) — Ænix betreibt die Plattform unter SLA

[Platform Readiness Assessment →](/de/dienstleistungen/platform-readiness-assessment/)

---

## Referenzen

[Neun veröffentlichte Fallstudien](/de/case-studies/) beschreiben unsere Projekte ausführlich — vertraglich anonymisiert, aber mit unveränderter Architektur und unveränderten Zahlen, darunter [eine Private Cloud in einer Bank](/de/case-studies/private-cloud-in-a-bank/) und [ein Portal über OpenNebula, VMware und Kubernetes für eine Finanzgruppe](/de/case-studies/unified-cloud-portal-financial-group/). Für ein konkretes Vorhaben lassen sich Referenzgespräche mit Bestandskunden unter NDA vereinbaren.

---

## Architektur-Review anfragen

Schildern Sie uns Ihren regulatorischen Rahmen (DORA, NIS2, sektorale Vorgaben), Ihre aktuelle Architektur und Ihre Anforderungen an Souveränität. Wir antworten per E-Mail und richten ein fokussiertes Architektur-Review mit einem Ænix-Engineer ein, um zu klären, ob die Plattform zu Ihnen passt. Lieber zuerst sprechen? [Buchen Sie ein 30-minütiges Gespräch im Kalender](https://zcal.co/i/s5C4-cO1).

{{< pipedrive-form type="demo" >}}

Lieber mit einem kürzeren Schritt beginnen? [Vereinbaren Sie ein Discovery-Gespräch](/de/kontakt/).

---

*Die Ænix Private Cloud Platform basiert auf [Cozystack](https://cozystack.io) — einem CNCF-Projekt, das Ænix entwickelt hat und gemeinsam mit Maintainern anderer Unternehmen pflegt (derzeit CNCF Sandbox; der Antrag auf CNCF Incubation befindet sich in der Due-Diligence-Prüfung). Apache 2.0.*
