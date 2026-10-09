---
title: "Cloud-Plattform für Universitäten — Research Computing, KI/ML-Labore und Cloud-native Lehre"
seo_title: "Cloud-Plattform für Universitäten und Research Computing"
description: "Eine Plattform für Research Computing, reproduzierbare Forschung und Lehre: geteilte GPUs, Tenants pro Labor, Air-Gap für sensible Daten, Slurm bleibt."
related_pages:
  - /de/loesungen/sovereign-ai/
  - /de/loesungen/data-sovereignty/
  - /de/dienstleistungen/platform-readiness-assessment/
  - /de/produkte/private-cloud-platform/
  - /de/produkte/ai-platform/
  - /de/produkte/cozystack/
language: "de"
quick_facts_style: "rows"
faq_style: "rows"
hreflang_en: /industries/universities/
direct_answer: |
  **Cozystack ist eine Open-Source-Cloud-Plattform, mit der Universitäten und Forschungseinrichtungen drei sich überschneidende Aufgaben auf einem Fundament bedienen: Research Computing (einschließlich GPU-Clustern für KI/ML), reproduzierbare Forschungsumgebungen für Publikationen und die Lehre in Cloud-native-Kursen. Die Plattform ist über eine Tenant-CRD mandantenfähig, sodass Fakultäten, Labore und Studierendenkohorten isolierte Quotas, RBAC und Audit-Trails erhalten; sie betreibt VMs und Container über KubeVirt nebeneinander auf einer Kubernetes-API; und sie unterstützt Air-Gap-Deployments, wo die Souveränität von Forschungsdaten zählt. Ænix hat Cozystack entwickelt und pflegt es gemeinsam mit Maintainern anderer Unternehmen; wir bauen und betreuen solche Plattformen für Universitäten, Forschungsinstitute und F&E-Organisationen in der EU, im DACH-Raum und in Zentralasien, in Phasen, die sich an Förderzyklen orientieren.**
quick_facts:
  - label: "Was es ist"
    value: "Eine mandantenfähige Open-Source-Cloud-Plattform auf Cozystack für universitäres Research Computing, reproduzierbare Forschung und Cloud-native Lehre, aufgebaut und betreut von Ænix."
  - label: "Lizenz"
    value: "Apache 2.0 (keine Lizenzkosten pro CPU oder Core)"
  - label: "Status"
    value: "Cozystack ist ein CNCF-Projekt (Sandbox seit 28.02.2025; Antrag auf Incubation in der Due-Diligence-Prüfung)"
  - label: "Für wen"
    value: "Universitäten, Forschungsinstitute und F&E-Organisationen in der EU, im DACH-Raum und in Zentralasien."
  - label: "Kernfunktion"
    value: "GPU-as-a-Service für NVIDIA-GPUs für Rechenzentren über den NVIDIA GPU Operator (Passthrough an VMs, NVIDIA vGPU für VMs mit Ihrer NVIDIA-vGPU-Lizenz, anteilige Nutzung für Pods über HAMi), Isolation pro Labor und pro Kohorte über Tenant-CRDs, KubeVirt-VMs und Container sowie Air-Gap-Unterstützung. Cozystack ist seit September 2026 in das Programm CNCF Kubernetes AI Conformance aufgenommen."
  - label: "Standards und Föderation"
    value: "Unterstützt reproduzierbare Forschung (Plan S, FAIR, Horizon Europe) durch deklarative, versionierte Umgebungen; über Standard-Kubernetes-APIs lässt sich die Plattform als projektspezifische Integration an Forschungsinfrastrukturen wie EOSC anbinden."
  - label: "Vorgehen"
    value: "Phasenweise Zusammenarbeit entlang der Förderzyklen, beginnend mit einem Platform Readiness Assessment zum Festpreis (14 oder 28 Tage), und ausdrücklicher Kompetenztransfer an die Hochschul-IT."
faq:
  - q: "Kann Cozystack GPU-Zugang für KI/ML-Forschungslabore bereitstellen?"
    a: "Ja. GPUs werden über den NVIDIA GPU Operator bereitgestellt; HAMi ermöglicht die anteilige Nutzung, sodass sich mehrere Labore eine Karte teilen, statt auf eine ganze zu warten. Ganze GPUs lassen sich auch per Passthrough an VMs durchreichen, und NVIDIA vGPU steht für VMs zur Verfügung (erfordert Ihre NVIDIA-vGPU-Lizenz). Auf MIG-fähigen Karten kann der GPU Operator eine Karte außerdem in hardwareseitig getrennte MIG-Partitionen für den Cluster eines Labors aufteilen. Labore stellen GPU-Umgebungen im Self-Service innerhalb ihrer Quotas pro Labor über die Tenant-CRD bereit — ohne Ticket-Warteschlangen."
  - q: "Wie isoliert Cozystack Fakultäten, Labore und Studierendenkohorten?"
    a: "Über das Mandantenmodell der Tenant-CRD. Jede Fakultät, jedes Labor und jede Studierendenkohorte erhält einen eigenen Tenant mit Quotas, RBAC und Audit-Trails. Sandboxes für Kohorten unterstützen Quotas pro Studierendem und automatisches Aufräumen, sodass Lehre und Forschung auf gemeinsamer Hardware isoliert bleiben."
  - q: "Unterstützt Cozystack sensible Forschungsdaten?"
    a: "Ja. Cozystack unterstützt Air-Gap-Installationen für medizinische Forschung oder Forschung mit Industriepartnern unter NDA und hält die Daten unter Kontrolle der Einrichtung. Das passt zu Souveränitätsanforderungen, bei denen Forschungsdaten die Einrichtung nicht verlassen dürfen."
  - q: "Kann die Plattform sowohl ältere VM-Workloads als auch moderne Container betreiben?"
    a: "Ja. Cozystack betreibt VMs und Container über KubeVirt nebeneinander auf einer einzigen Kubernetes-API. So laufen gewachsene Forschungs-Workflows neben modernen containerisierten Pipelines, ohne dass ein separater Virtualisierungs-Stack nötig ist."
  - q: "Eignet sich Cozystack für die Lehre in Cloud-native-Kursen?"
    a: "Ja. Informatik- und Ingenieursfakultäten nutzen es, um Kubernetes, KubeVirt, GitOps und Observability zu lehren. Da es Open Source (Apache 2.0) und ein CNCF-Projekt ist, können Studierende es auf eigener Hardware betreiben und lernen das CNCF-Ökosystem so kennen, wie es in der Praxis eingesetzt wird."
  - q: "Wie gestaltet Ænix Projekte mit Universitäten?"
    a: "Ænix arbeitet in Phasen, die sich an den Zyklen der Forschungsförderung orientieren, und mit ausdrücklichem Kompetenztransfer, damit die Hochschul-IT die Plattform nach dem Aufbau selbst betreibt. Projekte können über EU-TED und nationale Vergabeportale laufen und Konsortien mehrerer Einrichtungen bedienen."
---

**Universitäten und Forschungseinrichtungen brauchen 2026 Cloud-native Infrastruktur für drei sich überschneidende Aufgaben: ernsthaftes Research Computing (vor allem KI/ML), reproduzierbare Forschungsumgebungen für Publikationen und die Lehre in Cloud-native-Kursen. Cozystack bietet ein einziges Open-Source-Fundament für alle drei — mandantenfähig für Fakultäten, Labore und Studierendenkohorten; KubeVirt für ältere und moderne Workloads; GPU-as-a-Service für KI-Forschung; Air-Gap-Unterstützung, wo die Souveränität von Forschungsdaten zählt.**

Ænix baut Plattformen auf Basis von Cozystack für Universitäten, Forschungsinstitute und F&E-Organisationen in der EU, im DACH-Raum und in Zentralasien.

> **Passt zu:** **[Ænix Private Cloud Platform](/de/produkte/private-cloud-platform/)** für souveräne Studierendendaten und die mandantenfähige Isolation von Forschungsgruppen; **[AI Platform](/de/produkte/ai-platform/)** für KI/ML-Forschungslabore mit GPU-Pools.

<div class="cta-row">
  <a class="cta-primary" href="/de/kontakt/">Gespräch vereinbaren</a>
  <a class="cta-secondary" href="/de/blog/2026/05/cloud-native-forschung-lehre-infrastruktur-hochschulen/">Cloud-native Forschungsinfrastruktur →</a>
</div>

---

## Drei Aufgaben der Universität, die Cozystack bedient

### 1. Infrastruktur für Research Computing

Moderne Forschung verlangt zunehmend GPU-Cluster, Datenverarbeitung in großem Maßstab und HPC-nahe Workloads. KI/ML-Forschung, Computational Biology, Klimamodellierung, Materialwissenschaften — sie alle brauchen Infrastruktur zwischen klassischem HPC und modernem Cloud-native.

<div class="arch-section__fig">
<div class="diagram">
<div class="diagram__node"><b>Fakultäten, Labore, Kohorten</b><div class="diagram__chips"><span>Quotas</span><span>RBAC</span><span>Audit-Trails</span></div></div>
<div class="diagram__conn">isoliert durch</div>
<div class="diagram__node diagram__node--brand"><b>Cozystack Tenant-CRD</b><div class="diagram__chips"><span>Mandantenfähig</span><span>Self-Service</span></div></div>
<div class="diagram__conn">stellt bereit</div>
<div class="diagram__node"><b>GPU-as-a-Service</b><div class="diagram__chips"><span>NVIDIA GPU Operator</span><span>Anteilige Nutzung mit HAMi</span></div></div>
<div class="diagram__conn">neben</div>
<div class="diagram__node"><b>VMs + Container</b><div class="diagram__chips"><span>KubeVirt</span><span>Eine Kubernetes-API</span></div></div>
</div>
</div>

Cozystack liefert:
- **GPU-Cluster** für NVIDIA-GPUs für Rechenzentren über den NVIDIA GPU Operator: Passthrough ganzer GPUs an VMs, NVIDIA vGPU für VMs (erfordert Ihre NVIDIA-vGPU-Lizenz) und anteilige Nutzung über HAMi, sodass sich mehrere Labore eine Karte teilen, statt auf eine ganze zu warten; Tenant-Cluster auf MIG-fähigen Karten können zusätzlich MIG-Partitionen nutzen
- **Mandantenfähige Isolation pro Labor** — Tenant-CRD-Modell mit Quotas, RBAC und Audit-Trails pro Labor
- **VMs und Container nebeneinander** — gewachsene Forschungs-Workflows laufen neben modernen containerisierten Pipelines
- **Self-Service für Projektleitungen** — Labore stellen ihre Umgebungen selbst bereit, ohne Ticket-Warteschlangen
- **Reproduzierbare Umgebungen** — deklaratives IaC bedeutet, dass sich Experimente auch Jahre später reproduzieren lassen

### 2. Reproduzierbare Forschung und Publikation

Open Science und Vorgaben zur Reproduzierbarkeit von Publikationen (Plan S, FAIR-Prinzipien, Anforderungen von Horizon Europe) verlangen zunehmend, dass Forschungsartefakte reproduzierbare Rechenumgebungen enthalten — nicht nur Datensätze und Code, sondern auch die Laufzeitumgebung, in der sie ausgeführt wurden.

Cozystack liefert:
- **Containerisierte Forschungsartefakte** — Forschungsumgebungen als Kubernetes-Manifeste und Container-Images
- **Air-Gap-Unterstützung** — für sensible Forschungsdaten (medizinisch, mit Industriepartnern)
- **Langzeitarchivierung** — Umgebungen werden zusammen mit den Daten aufbewahrt, für Reproduzierbarkeit über Jahrzehnte
- **Forschungsdatenmanagement** — Umgebungen lassen sich aus Ihren RDM- und DOI-Workflows referenzieren; die Anbindung ist projektspezifische Integrationsarbeit
- **Föderationen** — die Anbindung einer Plattform an EOSC oder eine nationale Forschungs-Cloud ist über Standard-Kubernetes-APIs möglich und wird pro Projekt festgelegt

### 3. Cloud-native Lehre und angewandte F&E

Informatik- und Ingenieursfakultäten lehren zunehmend Kubernetes, KubeVirt, GitOps und Observability — den modernen Cloud-native-Stack. Industriepartner, die Cozystack produktiv betreiben, profitieren von Absolventinnen und Absolventen, die die Plattform bereits kennen.

Cozystack liefert:
- **Sandboxes für Studierende und Kohorten** — eine Tenant-CRD pro Kohorte, Quotas pro Studierendem, automatisches Aufräumen
- **Bereit für das Curriculum** — Installations- und Upgrade-Abläufe, die für Hochschul-IT-Teams funktionieren
- **Open Source zuerst** — Studierende können die Plattform auf eigener Hardware betreiben, so wie sie in Produktion läuft
- **Bezug zur CNCF** — Cozystack ist ein CNCF-Sandbox-Projekt; Studierende lernen das CNCF-Ökosystem kennen
- **Praxisrelevant** — Absolventinnen und Absolventen kennen die Plattform, die Hosting-Anbieter produktiv betreiben

---

<div class="band-fullbleed band-fullbleed--tint">
<div class="band-fullbleed__inner">

## Warum gerade Universitäten von Cozystack profitieren

Über die drei Aufgaben hinaus gibt es mehrere hochschulspezifische Gründe:

### Open Source wird bevorzugt
Akademisches Selbstverständnis, Transparenz und knappe Budgets sprechen für Open-Source-Infrastruktur. Die Apache-2.0-Lizenz passt zu akademischen Präferenzen und zur Realität der Beschaffung.

### Souveränität für sensible Forschung
Medizinische Forschungsdaten und Forschung mit Industriepartnern unter NDA profitieren von souveräner Infrastruktur, die Daten unter Kontrolle der Einrichtung hält. Die Air-Gap-Unterstützung deckt die sensibelsten Fälle ab.

### Föderation mit nationaler und europäischer Forschungsinfrastruktur
EuroHPC, EOSC, GÉANT, nationale Forschungsnetze — da Cozystack Standard-Kubernetes-APIs bereitstellt, lässt sich eine Plattform als projektspezifische Integrationsarbeit an diese Dienste anbinden; eine eingebaute Funktion ist das nicht.

### Governance mit vielen Beteiligten
Universitäten haben viele Beteiligte: Projektleitungen, IT-Abteilungen, Forschungsförderer, Industriepartner, Studierende. Das Mandantenmodell von Cozystack bildet das ab, ohne eine Gruppe zu bevorzugen.

### Langfristige Planung
Universitäten erneuern ihre Infrastruktur nicht im Takt kommerzieller Anbieter. Eine Open-Source-Plattform mit Community-Governance passt zu Planungshorizonten über Jahrzehnte.

### Neben EuroHPC und nationalen HPC-Zentren
Viele Universitäten haben Zugang zu EuroHPC oder nationalem HPC; Cozystack arbeitet daneben für den Teil der Workloads, der keine volle HPC-Größenordnung braucht.

### Slurm ist nicht der Gegner, und wir ersetzen es nicht
Jedes Gespräch über Research Computing kommt an diesen Punkt, deshalb gehört er hierher und nicht in eine Fußnote. Slurm ist der richtige Scheduler für eng gekoppelte Batch-Jobs auf einem homogenen Cluster — MPI-Jobs, eine Fair-Share-Queue, monatelange Accounting-Historie und Nutzer, die `sbatch` bereits kennen. Eine Kubernetes-Plattform plant diese Art von Arbeit nicht besser, und eine Migration, die sie wegnimmt, erzeugt nur Unmut.

Die Plattform ist für alles da, worin der Batch-Cluster schlecht ist: lang laufende interaktive Notebooks, JupyterHub pro Gruppe, öffentlich erreichbare Forschungsdienste und Portale, die Datenbanken hinter diesen Diensten, Lehrumgebungen, die für ein Semester entstehen und wieder verschwinden, VMs für Software, die eine Forschungsgruppe nicht containerisieren kann, und geteilte GPUs für Inferenz statt für Training in der Warteschlange.

Zwei Muster funktionieren in der Praxis, und beide sind unspektakulär:

- **Nebeneinander.** Slurm behält die Batch-Partition; die Plattform übernimmt Dienste und interaktive Arbeit, und auf beiden Seiten ist derselbe Storage eingebunden, sodass ein Datensatz nicht kopiert werden muss, um von beiden Seiten genutzt zu werden.
- **Slurm in einem Tenant.** Ein Slurm-Cluster läuft als Workload auf der Plattform — Controller und Nodes als VMs oder Container in einem Tenant —, sodass eine Gruppe ihre eigene Queue bekommt, ohne zweiten physischen Cluster und ohne dass die zentrale IT ihn von Hand betreibt.

Erst die Mandantenfähigkeit macht beides belastbar: Quotas pro Gruppe für CPU, Arbeitsspeicher, Storage und GPU, isolierte Netze und eine Nutzung, die sich einem Förderprojekt zuordnen lässt — genau die Zahl, nach der die Leitung des Research Computing tatsächlich gefragt wird.

</div>
</div>

---

## Unternehmen, die Plattformen mit Ænix betreiben

{{< clients >}}

Hosting-Anbieter, die die Ænix Public Cloud Platform produktiv betreiben. Kunden aus der Wissenschaft werden nicht namentlich genannt, die Architektur ist aber öffentlich: [Eine Plattform für akademisches Computing ist von einem Hyperscaler auf eigenes Bare Metal umgezogen, hat eine Cluster API über mehrere Clouds beibehalten und die GPU-Kosten etwa um den Faktor fünf gesenkt](/de/case-studies/multicloud-academic-gpu/). Verantwortliche für KI und ML starten am besten mit dem [Leitfaden für Leiter AI/ML](/de/fuer/leiter-ai-ml/). Cozystack steht unter Apache 2.0 und lässt sich ohne uns installieren — so evaluieren die meisten Research-Computing-Gruppen es, bevor sie mit uns zusammenarbeiten.

{{< quote-carousel >}}

---

## Wie Projekte aufgebaut sind

Projekte mit Universitäten haben oft besondere Merkmale:

- **Beschaffung über öffentliche Vergabeportale** — EU-TED, nationale Portale, in Kasachstan goszakup.gov.kz, wo zutreffend
- **Konsortien mehrerer Einrichtungen** — ein Projekt kann mehrere Universitäten gleichzeitig bedienen
- **Kompetenztransfer an die interne IT** — die Hochschul-IT betreibt die Plattform nach dem Aufbau; die Wissensübergabe ist ein Kernbestandteil
- **Ausrichtung an der Forschungsförderung** — der Zeitplan orientiert sich oft an Förderzyklen
- **Zusammenarbeit mit Industriepartnern** — Universitäten kooperieren zunehmend mit der Industrie; die Plattform unterstützt den Zugriff vieler Beteiligter

Zur Methodik siehe **[Platform Readiness Assessment](/de/dienstleistungen/platform-readiness-assessment/)**.

---

## Preise

Die Cozystack-Plattform ist Open Source (Apache 2.0). Die Ænix Private Cloud Platform und die Ænix AI Platform werden per RFP angeboten; Support-Stufen für selbst betriebenes Cozystack beginnen bei 1.250 USD pro 10 Nodes und Monat (siehe [Preise](/de/preise/)). Aufbau der Zusammenarbeit:

- **Phasenweise Zusammenarbeit** entlang der Förderzyklen
- **Fokus auf Kompetenztransfer** — das Projekt investiert ausdrücklich in langfristige Fähigkeiten der Einrichtung
- **Status als CNCF-Projekt** — Cozystack ist ein CNCF-Sandbox-Projekt; manche Universitäten können Rahmenregelungen für die Beschaffung von Open Source anwenden

Konkrete Konditionen klären wir im Discovery-Gespräch.

---

## So starten Sie

<div class="cta-row">
  <a class="cta-primary" href="/de/kontakt/">Gespräch vereinbaren</a>
</div>

Weiterlesen:
- **[Artikel: Cloud-native Infrastruktur für Forschung und Lehre](/de/blog/2026/05/cloud-native-forschung-lehre-infrastruktur-hochschulen/)** — ausführlich
- **[Souveräne KI](/de/loesungen/sovereign-ai/)** — KI/ML-Forschung mit sensiblen Daten
- **[Datensouveränität](/de/loesungen/data-sovereignty/)** — Souveränität von Forschungsdaten
- **[Platform Readiness Assessment](/de/dienstleistungen/platform-readiness-assessment/)** — unsere Methodik
- **[Cozystack](/de/produkte/cozystack/)** — die Plattform
- **[Leitfaden für Leiter AI/ML](/de/fuer/leiter-ai-ml/)** — für Verantwortliche von Research Computing und KI
- **[cozystack.io](https://cozystack.io)** — das Open-Source-Projekt: Installation, Dokumentation, Community

---

*Ænix hat Cozystack (CNCF-Sandbox-Projekt, CNCF Certified Kubernetes Distribution, CNCF Kubernetes AI Conformance, OpenSSF Best Practices) entwickelt und pflegt es gemeinsam mit Maintainern anderer Unternehmen. Darauf aufbauend bieten wir drei Plattformen an — Public Cloud, Private Cloud und AI — für Universitäten, Forschungsinstitute und F&E-Organisationen in der EU, im DACH-Raum und in Zentralasien.*
