---
title: "Cloud-native Infrastruktur für Forschung und Lehre — was Hochschulen 2026 wirklich brauchen"
description: "Architekturmuster für Forschungs- und Lehrinfrastruktur an Hochschulen: die drei Aufgaben, GPU-Scheduling für Labore und die wiederkehrenden Fallstricke."
slug: "cloud-native-forschung-lehre-infrastruktur-hochschulen"
date: "2026-05-04"
cover_image: "/img/blog/covers/de/cloud-native-forschung-lehre-infrastruktur-hochschulen.jpg"
author: "Aenix Team"
type: "article"
topics: ["Kubernetes", "AI and ML", "GPU", "Multi-tenancy"]
language: "de"
hreflang_en: "/blog/2026/05/cloud-native-research-and-teaching-infrastructure/"
companion_landing: "/de/branchen/universitaeten/"
quiz:
  title: "Wissens-Check: Cloud-native Infrastruktur für Hochschulen"
  questions:
    - q: "Um welche drei Aufgaben von Hochschulen gliedert der Artikel seine Analyse?"
      options:
        - { text: "Marketing, Studierendengewinnung und Alumni-Arbeit", correct: false }
        - { text: "Compliance, Akkreditierung und Ranking-Kennzahlen", correct: false }
        - { text: "KI-Forschung, Reproduzierbarkeit und Cloud-native Lehre", correct: true }
      explanation: "Aufgabe 1 — Research Computing im KI-Zeitalter; Aufgabe 2 — Infrastruktur für reproduzierbare Forschung (Plan S, FAIR, Horizon Europe); Aufgabe 3 — Cloud-native Lehre (Kubernetes/GitOps/Observability praktisch vermitteln)."
    - q: "Warum sieht der Artikel „Institutscluster“ als einziges Modell für Research Computing skeptisch?"
      options:
        - { text: "Sie zersplittern das Know-how auf jedes einzelne Labor", correct: true }
        - { text: "Sie sind zu günstig, um die zentrale IT einzubinden", correct: false }
        - { text: "Die Beschaffungsregeln von EuroHPC verbieten sie ausdrücklich", correct: false }
      explanation: "Institutscluster zersplittern das Know-how — am Ende betreibt jedes Labor seinen eigenen. Der Artikel plädiert für einen gemeinsamen GPU-Pool mit starker Isolation, Self-Service für PIs, Verwaltung per IaC für Reproduzierbarkeit und Integration in nationale und europäische Forschungsinfrastruktur."
    - q: "Welche europäische Dachinitiative verbindet laut Artikel die Infrastruktur für reproduzierbare Forschung über Hochschulen hinweg?"
      options:
        - { text: "Das föderierte Cloud-Framework GAIA-X", correct: false }
        - { text: "EOSC — European Open Science Cloud", correct: true }
        - { text: "Die Cloud-Sicherheitszertifizierung EUCS", correct: false }
        - { text: "Das Forschungsprogramm Horizon 2030", correct: false }
      explanation: "Die EOSC verbindet die Infrastruktur für reproduzierbare Forschung an europäischen Hochschulen. Cozystack-Plattformen können sich über Standard-Kubernetes-APIs an EOSC-Föderationen beteiligen."
    - q: "Welches Cozystack-Feature sorgt in der Lehre direkt dafür, dass eine kaputte Studierendenumgebung benachbarte Studierende nicht beeinträchtigt?"
      options:
        - { text: "Live-Migration von VMs mit KubeVirt", correct: false }
        - { text: "Ein Tenant CRD pro Jahrgang", correct: true }
        - { text: "Die Self-Service-Oberfläche des Cozystack Dashboards", correct: false }
        - { text: "Backup und Wiederherstellung mit Velero", correct: false }
      explanation: "Ein Tenant CRD pro Jahrgang isoliert die Studierenden; Quotas und RBAC begrenzen Fehlkonfigurationen; über das Cozystack Dashboard legen Lehrende Studierendenumgebungen ohne IT-Ticket selbst an und löschen sie wieder."
    - q: "Warum passt eine Subscription mit Preisen pro CPU laut Artikel schlecht zur Hochschulfinanzierung?"
      options:
        - { text: "Preise pro CPU sind nach EU-Vergaberecht unzulässig", correct: false }
        - { text: "Die meisten Hochschulen betreiben nur ARM-basierte Cluster", correct: false }
        - { text: "Hochschulbudgets wachsen nicht mit dem Rechenbedarf", correct: true }
      explanation: "Die IT-Budgets von Hochschulen wachsen nicht mit dem Rechenbedarf. Open-Source-Plattformen mit optionalem kommerziellem Support sind wirtschaftlich tragfähig; die bei kommerziellen Alternativen üblichen Subscriptions pro CPU passen nicht zur Hochschulfinanzierung."
---


Die IT von Hochschulen und Forschungsinstituten steht 2026 an einem schwierigen Schnittpunkt: steigender Bedarf an Research Computing (vor allem KI/ML), Vorgaben zur Reproduzierbarkeit (Plan S, FAIR, Horizon Europe), Lehrbedarf für Cloud-native Technologien, Governance mit vielen Beteiligten und Budgets, die nicht im Tempo des Rechenbedarfs wachsen. Cloud-native Plattformen — Open Source, Kubernetes-nativ, mandantenfähig — beantworten zunehmend all das zugleich, wo Infrastruktur aus der Zeit vor der Cloud für jeden Anwendungsfall eigens spezialisiert werden musste.

## Die drei Aufgaben im Detail

Auf der [Branchenseite](/de/branchen/universitaeten/) haben wir drei Aufgaben von Hochschulen beschrieben. Hier gehen wir auf jede tiefer ein.

### Aufgabe 1 — Research Computing im KI-Zeitalter

Der Bedarf an Research Computing hat sich in den letzten 5 Jahren erheblich verschoben. KI/ML-Workloads sind von einer „Spezialtätigkeit einzelner Labore“ zu einer „allgemeinen Forschungsmethode“ quer durch die Disziplinen geworden. Computational Biology, Materialwissenschaften, Klimamodellierung, NLP in den Geisteswissenschaften — alle setzen zunehmend auf Deep-Learning-Ansätze, die GPUs brauchen.

Die Infrastruktur-Antwort darauf bestand bisher aus:
- **EuroHPC / nationalem HPC** — für die größten Workloads
- **Institutsclustern** — für mittlere Workloads, von den Laboren selbst verwaltet
- **Cloud-GPU-Guthaben** — für gelegentliche und experimentelle Workloads
- **Persönlichen Workstations** — für leichte Workloads

Jede Variante hat Grenzen:
- HPC hat Zugangshürden und Wartezeiten und eignet sich nur bedingt für iterative KI/ML-Entwicklung
- Institutscluster zersplittern das Know-how; jedes Labor pflegt seinen eigenen
- Cloud-GPU-Guthaben sind im großen Maßstab nicht tragfähig; dazu kommen Souveränitätsbedenken bei sensiblen Daten
- Persönliche Workstations stoßen bei kleinen Modellen an ihre Grenzen

Was modernes Research Computing zunehmend will: **einen gemeinsamen GPU-Pool mit starker Isolation, Self-Service für PIs, Verwaltung per IaC für Reproduzierbarkeit und, wo sinnvoll, Integration in nationale und europäische Forschungsinfrastruktur.**

Eine Kubernetes-native Plattform wie Cozystack liefert genau das. KubeVirt bedient ältere, VM-basierte Forschungs-Workflows; native Container bedienen moderne ML-Pipelines. Der NVIDIA GPU Operator übergibt ganze GPUs an Workloads, und HAMi teilt eine einzelne GPU nach Speicher und Rechenkernen zwischen Laboren auf; VMs erhalten VFIO-Passthrough oder NVIDIA vGPU. Das Tenant CRD sorgt für Isolation pro Labor. Das Cozystack Dashboard gibt PIs Self-Service. Dieselbe Infrastruktur lässt sich für die größten Workloads mit EuroHPC verbinden (viele Hochschulen haben hybride Vereinbarungen).

### Aufgabe 2 — Infrastruktur für reproduzierbare Forschung

Reproduzierbarkeit ist in vielen Förderkontexten vom Anspruch zur Pflicht geworden. Plan S, die FAIR-Prinzipien für Daten, die Anforderungen von Horizon Europe und fachspezifische Replikationskrisen (Psychologie, Sozialwissenschaften, Biomedizin) drängen alle zu reproduzierbaren Artefakten.

Für rechnergestützte Forschung erfordert Reproduzierbarkeit heute typischerweise:
- die Daten (mit persistenten Identifikatoren, DOIs)
- den Code (mit Versionierung)
- **die Laufzeitumgebung** (Container-Images, IaC-Manifeste, Abhängigkeitsspezifikationen)

Beim dritten Punkt kommt es auf die Infrastrukturebene an. Ein Forschungsartefakt mit der Angabe „wir haben Python 3.10 mit PyTorch 2.1 auf Ubuntu 22.04 verwendet“ ist nach 5 Jahren nicht reproduzierbar — die Pakete haben sich weiterentwickelt. Ein Forschungsartefakt mit Dockerfile (oder KubeVirt-VM-Image) IST reproduzierbar — die Laufzeitumgebung bleibt bitgenau erhalten.

Cozystack unterstützt dieses Muster nativ:
- **Containerisierte Umgebungen** als Kubernetes-Manifeste + Image-Registry
- **Langzeitarchivierung** — Registries mit Aufbewahrungsrichtlinien
- **Air-Gap-Installation** — für sensible Forschung, die nicht von externen Registries abhängen darf
- **Föderierte Muster** — Forschungskonsortien mehrerer Einrichtungen können Container-Images über eine gemeinsame Registry teilen

Die European Open Science Cloud (EOSC) ist die Dachinitiative, die die Infrastruktur für reproduzierbare Forschung an europäischen Hochschulen verbindet; Cozystack-Plattformen können sich an EOSC-Föderationen beteiligen.

### Aufgabe 3 — Cloud-native Lehre

Informatik- und Ingenieurfakultäten lehren zunehmend Kubernetes, Container-Orchestrierung, GitOps, Observability und verwandte Themen. Die Herausforderung: Studierende brauchen echte Infrastruktur, an der sie praktisch lernen, und diese Infrastruktur muss:
- der Produktionsrealität entsprechen (damit Absolventen sofort einsetzbar sind)
- gefahrloses Experimentieren erlauben (eine kaputte Umgebung darf benachbarte Studierende nicht beeinträchtigen)
- sich zwischen Jahrgängen sauber zurücksetzen lassen
- mit den Kapazitäten der Hochschul-IT laufen (ohne Betrieb auf kommerziellem Niveau zu erfordern)

Cozystack deckt jeden Punkt ab:
- **Echte Plattform in Produktionsqualität** — Studierende lernen, was die Industrie einsetzt (Cozystack läuft produktiv bei Hosting-Providern, Banken usw.)
- **Tenant CRD pro Jahrgang** — kaputte Studierendenumgebungen beeinträchtigen benachbarte Studierende nicht
- **Durchgesetzte Quotas und RBAC** — Fehlkonfigurationen von Studierenden bleiben eingegrenzt
- **Self-Service für Lehrende** — Lehrende legen Studierendenumgebungen ohne IT-Ticket an und löschen sie wieder
- **Status als CNCF-Projekt** — Studierende lernen das CNCF-Ökosystem kennen, was nach dem Abschluss wertvoll ist

Erwähnenswert ist auch die Brancheninitiative CNOE (Cloud Native Operational Excellence) — es liefert Referenzmuster für Cloud-native Umgebungen, die sich für die akademische Lehre eignen.

## Architekturmuster, die sich bewährt haben

Speziell an Hochschulen und Forschungsinstituten haben sich mehrere Architekturmuster als tragfähig erwiesen:

### Muster A — zentraler Research-Computing-Dienst
Eine Cozystack-Installation, betrieben von einem zentralen Research-Computing-Team, das mehrere Fakultäten bzw. Labore als Tenants bedient. Am besten für mittlere bis große Hochschulen (10.000+ Studierende, mehrere forschungsstarke Fakultäten).

### Muster B — föderierte Institutscluster
Mehrere Cozystack-Installationen, eine pro großer Fakultät, mit gemeinsamer Identity und Föderation für fakultätsübergreifende Projekte. Am besten für sehr große Hochschulen oder Systeme mit mehreren Standorten.

### Muster C — Plattform für Forschungskonsortien
Forschungskonsortien mehrerer Einrichtungen betreiben eine gemeinsame Cozystack-Plattform unter gemeinsamer Governance. Am besten für kooperative Forschung mit erheblichem Rechenbedarf.

### Muster D — Plattform für F&E-Institute
Forschungsinstitute (IT, Ingenieurwesen, Biotech) betreiben Cozystack als zentrale Forschungsinfrastruktur. Oft kombiniert mit Zugängen für Industriepartner über das Tenant-CRD-Modell.

## Besonderheiten von Hochschulen

### Open-Source-Ethos
Die akademische Kultur bevorzugt klar Open-Source-Infrastruktur. Apache 2.0, transparente Governance, die Möglichkeit, Code einzusehen und zu verändern — all das entspricht akademischen Werten. Der Status von Cozystack als CNCF-Projekt und die Lizenz Apache 2.0 passen dazu.

### Realistische Budgets
Die IT-Budgets von Hochschulen wachsen nicht mit dem Rechenbedarf. Eine Open-Source-Plattform mit optionalem kommerziellem Support ist ein wirtschaftlich tragfähiges Modell. Subscriptions mit Preisen pro CPU (typisch für kommerzielle Alternativen) passen nicht zur Hochschulfinanzierung.

### Planung über Jahrzehnte
Hochschulen planen in Jahrzehnten, nicht in Quartalen. Herstellergetriebene Plattformen, deren Roadmap und Preise sich mit Konzernentscheidungen ändern, sind für eine Planung über Jahrzehnte riskant. Von der Community gesteuerte Open-Source-Projekte sind in dieser Hinsicht berechenbarer.

### Souveränität für manche Forschung
Medizinische Forschungsdaten, Verschlusssachen, Forschung mit Industriepartnern unter NDA — all das profitiert von Infrastruktur, die Daten unter der Kontrolle der Einrichtung hält. Die Air-Gap-Unterstützung von Cozystack, vom Kunden kontrollierte Schlüssel und der Betrieb On-Premises erfüllen diese Anforderungen.

### Föderation mit nationaler und europäischer Infrastruktur
EuroHPC für die größten Workloads. EOSC für die Föderation von Open Science. GÉANT für das europäische Forschungsnetz. Nationale Forschungsnetze. Cozystack-Plattformen lassen sich über Standard-Kubernetes-APIs mit all diesen verbinden.

### Industriepartnerschaften
Hochschulen arbeiten bei geförderter Forschung zunehmend mit der Industrie zusammen. Die Plattform muss Zugriffsmuster für viele Beteiligte unterstützen — Forschende der Hochschule und der Industriepartner, mit angemessener Isolation und Schutz des geistigen Eigentums. Das Tenant CRD mit verschachtelten Tenants leistet das.

## Häufige Fallstricke

### Fallstrick 1: reines HPC-Denken
Wer Research Computing als „kleines HPC“ behandelt, übersieht, dass der iterative Entwicklungsablauf bei KI/ML nicht zum Warteschlangenmodell von HPC passt. Moderne Research-Computing-Plattformen müssen sowohl interaktive (Notebook-artige) als auch Batch-Workloads abdecken.

### Fallstrick 2: Zersplitterung durch Cluster pro Labor
Baut jedes Labor seinen eigenen Cluster, zersplittert das Know-how, die Wartung verdoppelt sich, und Ressourcen lassen sich bei Lastspitzen nicht teilen. Eine zentrale oder föderierte Plattform steigert den Nutzen immer weiter.

### Fallstrick 3: zu wenig in den Betrieb investiert
Research Computing, das Doktoranden oder Postdocs nebenbei betreiben, ist nicht von Dauer. Ein eigenes Research-Computing-Team (auch ein kleines) ist notwendig.

### Fallstrick 4: Lehrinfrastruktur, die nicht zur Praxis passt
Kubernetes auf einem Single-Tenant-minikube zu lehren heißt, an einem Spielzeug zu lehren. Wer auf einer mandantenfähigen Plattform nach Produktionsmustern lehrt, bringt Absolventen hervor, die mit den Plattformen arbeiten können, die die Industrie tatsächlich betreibt.

### Fallstrick 5: Reproduzierbarkeit als Nachgedanke
Wer Forschungsinfrastruktur ohne Muster für Reproduzierbarkeit ab dem ersten Tag aufbaut, muss später teuer nachrüsten. Containerisierung und IaC-Disziplin sollten der Standard sein.

## Was Ænix für Hochschulen konkret bietet

Ænix hat Cozystack-basierte Plattformen für Hochschulen und Forschungsinstitute in der EU und in Zentralasien gebaut. Die Besonderheiten der Zusammenarbeit:

- **Vertraut mit öffentlicher Beschaffung** — RFI / RFP über die üblichen Kanäle in EU-Mitgliedstaaten und in Kasachstan
- **Kapazitätstransfer als Kernbestandteil** — die Wissensübergabe an die hochschuleigene IT ist ein ausdrückliches Ergebnis
- **Schrittweise Zusammenarbeit**, wo sinnvoll abgestimmt auf Förderzyklen
- **Konsortien mehrerer Einrichtungen** werden unterstützt
- **Support-Stufen für die Wissenschaft** — vergünstigter kommerzieller Support für akademische Installationen

Details finden Sie auf der **[Branchenseite für Hochschulen](/de/branchen/universitaeten/)**.
