---
title: "Case Studies"
seo_title: "Case Studies: Cozystack-Plattformen in Produktion"
description: "Neun anonymisierte Ænix-Deployments mit Zahlen: GPU-Inferenz, Proxmox-Konsolidierung, souveräne Public Cloud, Private Cloud einer Bank, KI-Plattform."
hero_subtitle: "Anonymisierte Deployments aus Hosting, regulierter Finanzbranche, Telekommunikation, KI und Forschung"
hide_child_cards: true
language: "de"
hreflang_en: /case-studies/
---

**Neun Deployments, unten ausführlich dokumentiert: wie der Bestand vorher aussah, was gebaut wurde, was schiefging und welche Zahlen am Ende standen. Die Kunden sind anonymisiert, weil die Verträge es verlangen — Architektur, Fehlerbilder und Zahlen sind es nicht. Darüber hinaus betreiben die unten genannten Hosting-Anbieter die Ænix Public Cloud Platform produktiv, und Referenzgespräche zu weiteren Projekten lassen sich unter NDA vereinbaren.**

---

## Die ausführlichen Fallstudien

### [8xH100-Inferenz auf eigenem Bare Metal](/de/case-studies/bare-metal-gpu-inference/)

Ein Anbieter einer Foto- und Video-App für den Massenmarkt holte die KI-Inferenz aus einer stundenweise gemieteten GPU-Cloud auf einen eigenen 8xH100-Server mit KubeVirt-GPU-Passthrough. Zwei- bis dreifache GPU-Effizienz bei gleichem Workload, rund zwei Monate bis zur Produktion.

### [Bare-Metal-Kubernetes für ein Messaging-API-SaaS](/de/case-studies/bare-metal-kubernetes-messaging-saas/)

Dreizehn Proxmox-Hypervisor-Hosts, konsolidiert auf einen einzigen deklarativen Cluster mit 25.000 Workload-Instanzen inklusive Managed Databases — betrieben von einem Engineer über GitOps.

### [Eine souveräne Public Cloud auf Bare Metal](/de/case-studies/sovereign-public-cloud/)

Ein Schweizer Anbieter ersetzte seinen Hypervisor-Stack durch eine vollwertige kommerzielle Public Cloud über drei Rechenzentren — synchrone Replikation zwischen den Rechenzentren, Verschlüsselung at rest, GPU in Produktion und ein 20-stündiger Incident, abgeschlossen ohne Datenverlust.

### [Von der Public Cloud auf Bare Metal — mit Bursting bei Bedarf](/de/case-studies/multicloud-academic-gpu/)

Ein europäisches SaaS für akademisches Rechnen verließ einen Hyperscaler ohne Downtime für Tausende aktive Nutzer, behielt eine Cluster API über Bare Metal, Hyperscaler und eine souveräne OpenStack-Cloud und senkte die GPU-Kosten etwa um das Fünffache.

### [Ein Portal über OpenNebula, VMware und Kubernetes](/de/case-studies/unified-cloud-portal-financial-group/)

Eine Finanzgruppe in Asien legte einen Self-Service-Katalog über drei Infrastrukturen, die darunter weiterlaufen — OpenNebula, VMware und Kubernetes-as-a-Service. Vier Monate bis zur Produktion, und aus Provisioning-Tickets wurde Automatisierung.

### [Eine Private Cloud in einer Bank](/de/case-studies/private-cloud-in-a-bank/)

Interne Teams bekommen Umgebungen und Managed Services auf Abruf, im Haus, mit RBAC je Tenant, selbst verwalteten Firewall- und Load-Balancer-Regeln, Backup-Policy und Schwellwert-Alarmen. Drei Monate ab Integrationsbeginn, auf dem eigenen Keycloak und Ceph der Bank.

### [Eine interne Daten- und KI-Plattform, GPUs inklusive](/de/case-studies/internal-data-and-ai-platform/)

Eine Plattform für Analytik, Data Lakes und Modelltraining ebenso wie für KI/ML-Services: GPU-Pools mit Quotas je Tenant, ein Scheduler für Pods und VMs und Verbrauchsmetriken, die fein genug für eine interne Verrechnung sind. In Einführung, die GPU-Schicht ist bereits fertig.

### [Wenn das Antwortpaket die falsche Tür nimmt](/de/case-studies/metallb-evpn-address-mobility/)

Beim Hosting-Anbieter hingen öffentliche Adressen an einem Rack, und die Hälfte des Verkehrs ging still verloren. Ein Controller machte aus sechs Handkommandos pro Subnetz und Node deklarierten Zustand und jeden Node zum VTEP in der EVPN-Fabric des Anbieters — die Adresse folgt dem Workload.

### [Cozystack als universeller Installer](/de/case-studies/ai-universal-installer/)

Ein Telekommunikationsbetreiber und Systemintegrator baute eine unternehmensweite KI-Plattform — GPU-Scheduling, RAG auf Qdrant, NVIDIA-Dynamo-Inferenz, geografisch verteilte GPUs — und lieferte dieselbe Distribution anschließend in die eigene Umgebung eines staatlichen Endkunden aus.

<div class="cta-row">
  <a class="cta-primary" href="/de/kontakt/">Ihren Fall besprechen</a>
  <a class="cta-secondary" href="/tco-calculator/">TCO modellieren →</a>
</div>

---

## Kurzüberblick

- **Plattform-R&D-Projekte:** CSI-Driver-Entwicklung, Block-Storage-Forschung, Prototypen von Virtualisierungsplattformen — für Anbieter aus dem Ökosystem
- **Ausführlich dokumentierte Deployments:** neun, vertraglich anonymisiert, Architektur und Zahlen vollständig veröffentlicht (oben)
- **Banken:** Projekte mit der Ænix Private Cloud Platform unter NDA; eines davon ist oben anonymisiert beschrieben ([eine Private Cloud in einer Bank](/de/case-studies/private-cloud-in-a-bank/))
- **Projektgrößen:** von Abonnements der Ænix Public Cloud Platform auf den veröffentlichten [Support-Stufen](/de/preise/) bis zu Private-Cloud-Platform-Programmen, die per RFP angeboten werden

---

## Kategorien

### Regionale Hosting-Anbieter (Ænix Public Cloud Platform)

Produktive Deployments der Ænix Public Cloud Platform: WHMCS-integriertes Billing, gebrandetes Kundenportal, mehrstufiges Reseller-Modell, erweiterter Servicekatalog (Managed Databases, S3, GPU), Sperren und Stilllegen von Tenants.

**Mit ihrer Zustimmung genannte Kunden:**
- GoHost.kz
- HDReady
- Beby Cloud
- HiKube
- UseTech
- Cloupard
- Cloudsy

Diese Kunden liefern mit der Ænix Public Cloud Platform mandantenfähige Cloud-Produkte an ihre eigenen Endkunden.

[Ænix Public Cloud Platform →](/de/produkte/public-cloud-platform/)

### Banken und regulierte Finanzbranche (unter NDA)

Projekte mit der Ænix Private Cloud Platform für Banken und Finanzgruppen, auf kundeneigener Hardware, mit Tenant-Isolation, Audit-Logging, das der Kunde selbst ausleitet und aufbewahrt, sowie Backups und Verschlüsselung, die beim Aufbau konfiguriert werden. Die DORA-Pflichten bleiben bei der Bank; die Plattform liefert Kontrollen, die sich nachweisen lassen — siehe die [DORA-Nachweisseite](/de/compliance/dora/). Zwei dieser Projekte sind anonymisiert beschrieben: [eine Private Cloud in einer Bank](/de/case-studies/private-cloud-in-a-bank/) und [ein Portal für eine Finanzgruppe](/de/case-studies/unified-cloud-portal-financial-group/). Namentliche Fallstudien setzen die Zustimmung der Kunden voraus.

[DORA-Readiness-Projekt →](/de/loesungen/dora-compliance/)

### Frühere Plattform-R&D (ohne Fallstudien)

Vor den heutigen Plattformen hat das Team Entwicklungs- und Forschungsarbeit an Plattformkomponenten für etablierte Plattformanbieter geleistet. Zu diesen Projekten gibt es keine veröffentlichten Fallstudien; sie sind wegen des technischen Hintergrunds aufgeführt, für den sie stehen.

#### CSI-Driver für Shared-SAN-Umgebungen
Entwicklung eines eigenen Container-Storage-Interface-Drivers für eine Shared-SAN-Architektur, integriert in die Distribution eines Plattformanbieters.

#### Backup-System mit bis zu 75 % geringeren Storage-Kosten
Optimierung der Storage-Kosten durch Deduplizierung und Tiering — ein produktives Deployment spart dem Kunden rund 75 % der Ausgaben für Backup-Storage.

#### Kubernetes-in-Kubernetes und per PXE bootende Serverfarm
Verschachtelte Kubernetes-Architektur mit PXE-basiertem Provisioning für die Verwaltung großer Serverflotten.

#### Leichtgewichtige VDI
Virtual Desktop Infrastructure auf einer Kubernetes-nativen Architektur — eine Alternative zu klassischen VDI-Stacks.

#### Public-Cloud- und VPS-Hosting-Plattform
Forschung und Prototyp einer Cloud-Plattform zur Modernisierung von Hosting-Anbietern.

#### Forschung zu Virtualisierungsplattformen für Kubernetes
Grundlagenforschung zu KubeVirt-basierter Virtualisierung im Produktionsmaßstab.

---

## Was wir öffentlich teilen können

| Kundentyp | Was wir sagen können |
|---|---|
| Regionale Hosting-Anbieter | Namentlich mit ihrer Zustimmung; Deployment-Umfang; Nutzung der Ænix Public Cloud Platform |
| Plattform-R&D für Anbieter aus dem Ökosystem | Projektname und Ergebnisse; anbieterspezifische Details variieren |
| Banken und Finanzgruppen | Nur anonymisiert, unter NDA |
| Souveräne Cloud-Initiativen | Nur anonymisiert; namentliche Fälle abhängig von Vergabe- und Veröffentlichungsfristen |
| KI/ML-Deployments | Nur anonymisiert; unter NDA |

---

## Häufige Fragen

### Wie erfahre ich mehr über einen bestimmten Fall?

Vereinbaren Sie ein [Discovery-Gespräch](/de/kontakt/), und wir gehen die Fälle durch, die Ihrer Situation am nächsten kommen. Für die genannten Hosting-Anbieter und für einige Projekte unter NDA können wir ein Referenzgespräch unter NDA vermitteln, wenn Sie ein konkretes Vorhaben evaluieren.

### Sind das alles Ænix-Kunden?

Die Plattform-R&D-Projekte sind frühere Arbeiten desselben Engineering-Teams.

Die Hosting-Anbieter sind aktuelle Kunden der Ænix Public Cloud Platform.

Die Bankprojekte sind aktuelle Kunden der Ænix Private Cloud Platform unter NDA.

### Werden namentliche Fallstudien von Banken veröffentlicht?

Nur, wenn die Kunden zustimmen. Bis dahin werden Bankprojekte anonymisiert beschrieben, und Referenzgespräche lassen sich unter NDA vereinbaren.

### Kann ich Cozystack-Produktivinstallationen separat sehen?

Cozystack ist Open Source, und viele Organisationen betreiben es ohne kommerzielle Zusammenarbeit mit Ænix. Diese Nutzer sind nicht unbedingt Ænix-Kunden und werden hier nicht aufgeführt; das Projekt selbst ist auf [cozystack.io](https://cozystack.io) beschrieben.

---

## So starten Sie

Vereinbaren Sie ein Discovery-Gespräch. Wir gleichen Ihre Situation mit passenden Fallmustern ab und besprechen die nächsten Schritte.

<div class="cta-row">
  <a class="cta-primary" href="/de/kontakt/">Gespräch vereinbaren</a>
</div>

---

*Ænix hat [Cozystack](https://cozystack.io), ein CNCF-Sandbox-Projekt, initiiert und pflegt es gemeinsam mit Maintainern anderer Unternehmen. Darauf baut Ænix drei kommerzielle Plattformen: Ænix Public Cloud Platform, Ænix Private Cloud Platform und Ænix AI Platform.*
