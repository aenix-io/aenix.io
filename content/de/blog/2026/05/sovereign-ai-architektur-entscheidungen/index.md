---
title: "Sieben Entscheidungen beim Entwurf einer Sovereign-AI-Architektur"
seo_title: "Sovereign AI: sieben Architekturentscheidungen"
slug: "sovereign-ai-architektur-entscheidungen"
description: "Sieben Architekturentscheidungen hinter einem souveränen AI-Stack, wie sie ineinandergreifen und welche Kombinationen in realen Deployments immer wiederkehren."
date: "2026-05-27"
lastmod: "2026-10-09"
cover_image: "/img/blog/covers/de/sovereign-ai-architektur-entscheidungen.jpg"
author: "Timur Tukaev"
type: "article"
topics: ["DORA", "NIS2", "Sovereignty", "AI and ML", "Multi-tenancy", "Financial Services"]
language: "de"
hreflang_en: "/blog/2026/05/sovereign-ai-architecture-decisions/"
companion_landing: "/de/loesungen/sovereign-ai/"
faq:
  - q: "Welche sieben Entscheidungen stehen hinter einer Sovereign-AI-Architektur?"
    a: "Auslöserprofil, regulatorischer Rahmen, Modellauswahl, Hardware-Dimensionierung und GPU-Zuteilung, Mandantenmodell, Souveränitätskontrollen und Betriebsmodell. Sie greifen ineinander: Der Auslöser bestimmt den regulatorischen Rahmen, der Rahmen die Kontrollen, die Kontrollen, wer die Plattform betreiben darf, und das Betriebsmodell begrenzt, welche Modelle realistisch sind."
  - q: "Wie lässt sich eine GPU auf der Plattform zwischen Workloads teilen?"
    a: "In Tenant-Kubernetes-Clustern stellt der NVIDIA GPU Operator MIG-Partitionen MIG-fähiger Karten als planbare Ressourcen bereit, und HAMi ermöglicht Time-Slicing mit Oversubscription. Beides ist heute verfügbar. Virtuelle Maschinen erhalten ganze GPUs per PCI-Passthrough oder NVIDIA vGPU mit Ihrer eigenen NVIDIA-vGPU-Lizenz."
  - q: "Worin unterscheiden sich MIG und HAMi?"
    a: "MIG-Partitionen sind in der Hardware getrennt; ein Workload sieht weder Speicher noch Rechenanteil eines anderen. HAMi-Anteile werden in Software mit Speicher- und Rechenlimits pro Workload durchgesetzt und erlauben Oversubscription. MIG eignet sich, wenn sich Tenants nicht gegenseitig beeinflussen dürfen, HAMi, wenn die Auslastung wichtiger ist als strikte Isolation."
  - q: "Wie werden Daten auf einer Sovereign-AI-Plattform mit Cozystack verschlüsselt?"
    a: "Die Volume-Verschlüsselung ist pro Storage Class optional zuschaltbar, mit einer Passphrase, die Sie selbst verwahren; den Umgang mit Schlüsseln legen wir während des Aufbaus gemeinsam mit Ihnen fest. Audit-Logs haben eine konfigurierbare Aufbewahrungsdauer (standardmäßig 30 Tage) und lassen sich in einen Log-Speicher unter Ihrer Kontrolle übertragen."
  - q: "Ist eine souveräne AI-Plattform immer die richtige Antwort?"
    a: "Nein. Wenn keine Aufsicht Ihre AI-Verarbeitung bindet, Ihre Datenklasse eine Modell-API zulässt und Ihre Inference-Last eher schwankt als dauerhaft anliegt, ist eine gehostete API meist einfacher und günstiger. Souveräne Infrastruktur lohnt sich, wenn mehrere dieser Bedingungen in die andere Richtung zeigen."
quiz:
  title: "Wissens-Check: sieben Entscheidungen für Sovereign AI"
  questions:
    - q: "Wie hängen die sieben Entscheidungen laut Artikel zusammen?"
      options:
        - { text: "Sie sind jeweils völlig unabhängig", correct: false }
        - { text: "Sie widersprechen sich häufig", correct: false }
        - { text: "Sie greifen ineinander — frühere prägen spätere", correct: true }
      explanation: "Das Auslöserprofil prägt den regulatorischen Rahmen, der Rahmen die Souveränitätskontrollen, die Kontrollen das Betriebsmodell, und das Betriebsmodell begrenzt, welche Modelle realistisch sind. Deshalb behandelt der Artikel sie in dieser Reihenfolge."
    - q: "Welche Open-Weight-Modellfamilien nennt der Artikel als gängige Wahl?"
      options:
        - { text: "Nur Varianten auf Basis von GPT-4", correct: false }
        - { text: "Llama, Mistral, Qwen, DeepSeek, Phi, Gemma", correct: true }
        - { text: "Nur die Modellfamilie Llama 3", correct: false }
      explanation: "Der Abschnitt zur Modellauswahl nennt Llama, Mistral, Qwen, DeepSeek, Phi und Gemma und macht die Wahl von Sprache, Workload-Typ, Lizenzbedingungen und angestrebter Leistungsfähigkeit abhängig."
    - q: "Wie erhalten virtuelle Maschinen auf der Plattform GPUs?"
      options:
        - { text: "MIG-Partitionen direkt pro VM zugewiesen", correct: false }
        - { text: "Ganze GPU per Passthrough oder NVIDIA vGPU mit Ihrer Lizenz", correct: true }
        - { text: "HAMi-Time-Slicing im Hypervisor", correct: false }
        - { text: "Nur über die API einer gehosteten GPU-Cloud", correct: false }
      explanation: "Abschnitt zur Hardware: VMs erhalten ganze GPUs per PCI-Passthrough oder NVIDIA vGPU mit der eigenen NVIDIA-vGPU-Lizenz des Kunden. MIG-Partitionen und HAMi-Time-Slicing gelten für Pods in Tenant-Kubernetes-Clustern, nicht für VMs."
    - q: "Welcher GPU-Sharing-Modus trennt Workloads in der Hardware?"
      options:
        - { text: "Time-Slicing mit HAMi", correct: false }
        - { text: "MIG-Partitionen auf MIG-fähigen Karten", correct: true }
        - { text: "Oversubscription einer Karte", correct: false }
      explanation: "MIG-Partitionen sind in der Hardware getrennt; HAMi-Anteile werden in Software durchgesetzt und erlauben Oversubscription. Der Artikel empfiehlt, nach der Isolation zu wählen, die ein Workload braucht."
    - q: "Wie beschreibt der Artikel die Volume-Verschlüsselung auf der Plattform?"
      options:
        - { text: "Immer aktiv, Schlüssel liegen beim Anbieter", correct: false }
        - { text: "Vom Anbieter verwahrte Schlüssel in einem Hardwaremodul", correct: false }
        - { text: "Pro Storage Class zuschaltbar, mit Ihrer eigenen Passphrase", correct: true }
      explanation: "Abschnitt zu den Souveränitätskontrollen: Die Volume-Verschlüsselung ist pro Storage Class optional, die Passphrase verwahrt der Kunde, und der Umgang mit Schlüsseln wird während des Aufbaus gemeinsam festgelegt."
---

Die meisten Sovereign-AI-Projekte, die wir sehen, beginnen an der falschen Stelle. Jemand wählt ein Modell, jemand anderes bestellt GPUs, und erst später fragt das Compliance-Team, wo die Prompts protokolliert werden und wer sie lesen kann. Zu diesem Zeitpunkt steht die Hardware bereits im Rack, und die Architektur hat die Hälfte der Antworten unbeabsichtigt vorweggenommen.

Besser ist es, eine souveräne AI-Plattform als Kette von sieben Entscheidungen zu behandeln, von denen jede die nächste eingrenzt. Dieser Artikel geht sie in dieser Reihenfolge durch, zeigt, wo sie sich gegenseitig unter Spannung setzen, und beschreibt die Kombinationen, die in der Praxis immer wieder auftauchen. Er ist die ausführliche Ergänzung zu unserer Seite [Sovereign AI](/de/loesungen/sovereign-ai/) und zum kostenlosen [Sovereign-AI-Architektur-Leitfaden](/de/ressourcen/sovereign-ai-architektur-leitfaden/), der dieselben sieben Schritte mit Dimensionierungstabellen behandelt.

## 1. Auslöserprofil — was Sie tatsächlich antreibt

Bevor es technisch wird, sollten Sie aufschreiben, warum eine gehostete Modell-API nicht ausreicht. Die Antwort ist fast immer einer von vier Gründen: eine Datenklasse, die Ihren Perimeter nicht verlassen darf, eine Inference-Wirtschaftlichkeit, die im großen Maßstab nicht mehr aufgeht, die Pflicht, nachzuweisen, welches Modell genau eine Ausgabe erzeugt hat, oder eine Vorgabe, die ausgehende Verbindungen ganz verbietet.

Das ist wichtig, weil jeder Auslöser zu einer anderen Plattform führt. Ein Team, das aus Kostengründen kommt, will eine dichte GPU-Auslastung und günstiges Kapazitätswachstum. Ein Team, das wegen der Datenklasse kommt, will harte Isolation und Kontrollen, die es einem Prüfer zeigen kann. Ein Team, das einen Air-Gap braucht, muss jeden Modell-Download, jedes Update und jeden Supportkontakt um einen geschlossenen Perimeter herum planen. Wenn mehrere Auslöser zutreffen, bringen Sie sie in eine Rangfolge; der wichtigste entscheidet bei jedem späteren Zielkonflikt.

## 2. Regulatorischer Rahmen — wer Ihre Nachweise lesen wird

Als Nächstes benennen Sie die Aufsicht. Für eine europäische Bank bedeutet das in der Regel DORA, wobei Artikel 28 zum IKT-Drittparteienrisiko bestimmt, wie Sie sich von einem Anbieter abhängig machen dürfen — auch von uns. Betreiber wesentlicher Dienste schauen auf NIS2. Wer personenbezogene Daten verarbeitet, schaut auf die DSGVO und ihre Regeln zu grenzüberschreitenden Übermittlungen, und manche Rechtsordnungen fügen Vorgaben für eine souveräne Cloud hinzu.

Keine Plattform erfüllt diese Pflichten an Ihrer Stelle. Eine Plattform kann aber so gebaut sein, dass sie die Pflichten unterstützt: Sie läuft in Ihrer Rechtsordnung, auf Hardware unter Ihrer Kontrolle, mit einem Ausstiegspfad, den Sie proben können, statt einer Klausel, die Kooperation verspricht. Unsere Seiten zu [DORA](/de/loesungen/dora-compliance/) und [Datensouveränität](/de/loesungen/data-sovereignty/) beschreiben, wie diese Unterstützung aussieht und wo die Verantwortung der Plattform endet.

## 3. Modellauswahl — Open Weights, und welche

Eine souveräne Plattform bedeutet fast immer Open-Weight-Modelle, denn ein Modell, das Sie nur über die API eines Dritten erreichen, steht nicht unter Ihrer Kontrolle. Die Familien, die die meisten Teams heute evaluieren, sind Llama, Mistral, Qwen, DeepSeek, Phi und Gemma, dazu spezialisierte Modelle für Code, Vision und Embeddings.

Die Wahl zwischen ihnen hängt weniger von Bestenlisten ab als von vier praktischen Fragen. Beherrscht das Modell die Sprachen, in denen Ihre Nutzer schreiben? Passt es zum Workload — Chat, Retrieval-Augmented Generation, Code, Vision oder Embeddings? Erlauben die Lizenzbedingungen Ihre kommerzielle Nutzung und eine etwaige Weitergabe feinabgestimmter Gewichte? Und welche Leistungsfähigkeit brauchen Sie wirklich, wenn ein kleineres Modell, das sich günstig betreiben lässt, oft besser ist als ein größeres, das Sie sich rund um die Uhr nicht leisten können? Ænix hat keine Geschäftsbeziehung zu einem Modellanbieter; die Empfehlung folgt also Ihren Daten und Ihrer Wirtschaftlichkeit, nicht einer Partnerschaft.

## 4. Hardware-Dimensionierung und GPU-Zuteilung

Die Modellwahl bestimmt den Speicherbedarf, und der Speicherbedarf bestimmt die Karten. Ein Modell, das auf eine Karte passt, ergibt eine ganz andere Plattform als eines, das mehrere Karten oder mehrere Nodes braucht, und Multi-Node-Training bringt ein Netzwerk-Fabric-Design mit sich, das für Ihre Hardware geplant werden muss. Wir dimensionieren das im Assessment, nicht aus einem Katalog; eine Liste „validierter“ GPU-Modelle gibt es nicht.

Was die Plattform heute leistet, ist klar umrissen. NVIDIA-Rechenzentrums-GPUs werden über den NVIDIA GPU Operator unterstützt. Virtuelle Maschinen erhalten ganze GPUs per PCI-Passthrough oder NVIDIA vGPU, sofern Sie eine NVIDIA-vGPU-Lizenz besitzen. In Tenant-Kubernetes-Clustern gibt es zwei Wege, eine Karte zwischen Pods zu teilen: Der GPU Operator stellt MIG-Partitionen MIG-fähiger Karten als planbare Ressourcen bereit, und HAMi ermöglicht Time-Slicing mit Speicher- und Rechenlimits pro Workload sowie Oversubscription. Die Worker-VMs eines Tenant-Clusters erhalten ihre Karten per Passthrough oder vGPU; Partitionierung und Time-Slicing finden dann innerhalb dieses Clusters statt.

Wählen Sie zwischen MIG und HAMi nach der Isolation, nicht aus Gewohnheit. MIG-Partitionen sind in der Hardware getrennt und passen zu Tenants, die sich gegenseitig nicht beeinflussen dürfen. HAMi-Anteile werden in Software durchgesetzt und bringen mehr Workloads auf eine Karte, was Teams entgegenkommt, denen die Auslastung wichtiger ist. Andere Beschleuniger lassen sich als PCI-Geräte an VMs durchreichen, ohne Automatisierung durch den Operator. Cozystack, das CNCF-Projekt, auf dem die Plattform läuft, wurde im September 2026 in das Programm CNCF Kubernetes AI Conformance aufgenommen; die NVIDIA-Partnervalidierung des GPU-Operator-Stacks wurde im Oktober 2026 eingereicht und steht noch aus.

## 5. Mandantenmodell

Wer teilt sich die Hardware? Ein Labor oder ein einzelnes Produktteam kann mit einem Tenant arbeiten und die Dinge einfach halten. Eine Unternehmensplattform für viele Teams oder ein Anbieter, der Kapazität verkauft, braucht Tenants mit eigenen Quotas, Zugriffsregeln, Network Policies und eigenem Monitoring. Cozystack bildet das mit verschachtelbaren Tenants ab, und jeder Tenant kann auf gemeinsamer Hardware ein eigenes Kubernetes-Cluster mit eigener Control Plane betreiben.

Am äußersten Ende erhält ein Tenant dedizierte Nodes. In unserer Case Study zur [Bare-Metal-GPU-Inference](/de/case-studies/bare-metal-gpu-inference/) wurden alle acht H100-Karten eines Servers an eine einzige isolierte Tenant-VM durchgereicht, und der NVIDIA GPU Operator lief im Kubernetes des Tenants selbst. Das ist die am stärksten isolierte Variante und zugleich die unflexibelste: Ungenutzte Kapazität bleibt ungenutzt. Die [interne Daten- und AI-Plattform](/de/case-studies/internal-data-and-ai-platform/) geht den umgekehrten Weg, mit gemeinsamen GPU-Pools und Quotas pro Tenant, sodass die Karten zu dem Team wandern, das sie gerade braucht.

## 6. Souveränitätskontrollen

Die Datenresidenz ist der einfache Teil. Schwieriger sind die Fragen, wer die Schlüssel hält, welche Lieferanten Zugriff auf die Plattform haben und welche Nachweise Sie einem Prüfer vorlegen können.

Auf der Plattform ist die Volume-Verschlüsselung pro Storage Class optional zuschaltbar, mit einer Passphrase, die Sie selbst verwahren; den Umgang mit Schlüsseln legen wir während des Aufbaus gemeinsam mit Ihnen fest. Der Kubernetes API Server schreibt ein Audit-Log nach einer Policy, die Sie vorgeben; die Aufbewahrung ist konfigurierbar und liegt standardmäßig bei 30 Tagen, was kürzer ist, als die meisten Aufsichtsbehörden erwarten — planen Sie daher ein, die Logs in einen Langzeitspeicher unter Ihrer Kontrolle zu übertragen. Transparenz der Lieferkette heißt, jede Komponente und jede Partei mit Zugriff bis zur zweiten Stufe nachzuverfolgen; Ænix-Engineers arbeiten in Ihrer Umgebung nur mit Ihrer Freigabe. Für die sensibelsten Workloads bietet Cozystack einen dokumentierten Workflow für Air-Gapped-Installationen, bei dem Modelle und eine eigenständige Registry in den Perimeter gespiegelt werden.

## 7. Betriebsmodell

Zuletzt entscheiden Sie, wer die Plattform betreibt. Manche Organisationen betreiben sie selbst und schließen ein Support-Abonnement ab; die veröffentlichten Stufen auf unserer [Preisseite](/de/preise/) decken das ab, und Support für Air-Gapped-Installationen beginnt mit der Stufe Plus. Andere lassen die Plattform lieber über einen Managed Retainer von Ænix betreiben. Viele landen bei einem hybriden Modell: Ihr Team betreibt die Plattform im Alltag, Ænix übernimmt den Second-Level-Support.

Diese Entscheidung wirkt auf die Modellauswahl zurück. Ein kleines Team, das die Plattform allein betreibt, sollte weniger Modellfamilien und einen einzigen Serving-Stack bevorzugen, denn jede zusätzliche Runtime muss es nachts patchen und überwachen.

## Wie die Entscheidungen ineinandergreifen

Die sieben Punkte sind keine Checkliste, die sich in beliebiger Reihenfolge abarbeiten lässt. Das Auslöserprofil entscheidet, welche Aufsicht zählt; die Aufsicht entscheidet, welche Souveränitätskontrollen Sie brauchen; die Kontrollen entscheiden, wer die Plattform betreiben darf; und das Betriebsmodell begrenzt, welche und wie viele Modelle Sie realistisch betreiben können. Wenn eine Entscheidung am Ende der Kette unlösbar wirkt, liegt die Ursache meist in einer früheren, die vage geblieben ist.

## Kombinationen, die immer wiederkehren

Drei Kombinationen kommen häufig genug vor, um sie zu beschreiben.

**Regulierte Finanzbranche, dauerhafte Inference, viele interne Teams.** DORA setzt den Rahmen, daher sind Ausstiegspfad und Lieferantenkarte ebenso wichtig wie die GPUs. Die Plattform ist mandantenfähig, und der Tenant bildet die Kontrollgrenze — dasselbe Modell wie in unserer [Private Cloud in einer Bank](/de/case-studies/private-cloud-in-a-bank/), bei der der eigene Identity Provider und der eigene Storage der Bank maßgeblich blieben. Dazu kommen optionale Volume-Verschlüsselung mit einer Passphrase, die die Bank verwahrt, Audit-Logs im eigenen Speicher der Bank, Open-Weight-Modelle der 70B-Klasse und entweder ein hybrider oder ein von Ænix verwalteter Betrieb.

**Öffentlicher Sektor mit Air-Gap.** Eine Vorgabe für eine souveräne Cloud und ein geschlossener Perimeter führen zu Plattformen, die der Kunde selbst auf eigener Hardware betreibt, zu kleineren Open-Weight-Modellen wie Llama oder Phi, die sich leichter spiegeln und aktualisieren lassen, und zu einem bewussten Prozess für die Übernahme neuer Modellversionen.

**Ein AI-Produktunternehmen mit dauerhafter Inference rund um die Uhr.** Keine spezifische Aufsicht; der Auslöser sind die Kosten. Die oben genannte Bare-Metal-Case-Study folgt genau diesem Muster: Die Inference wechselte von einer gemieteten GPU-Cloud auf einen eigenen 8×H100-Server, ging nach etwa zwei Monaten in Produktion und erreichte eine 2- bis 3-fach bessere GPU-Effizienz. Die Wirtschaftlichkeit hinter einem solchen Schritt behandelt der Beitrag zur [GPU-Wirtschaftlichkeit bei dauerhafter Inference](/de/blog/2026/05/ai-platform-gpu-wirtschaftlichkeit-inferenz/).

## Wann eine souveräne AI-Plattform die falsche Antwort ist

Wenn keine Aufsicht Ihre AI-Verarbeitung bindet, Ihre Datenklasse eine Modell-API zulässt und Ihre Last eher schwankt als dauerhaft anliegt, ist eine gehostete API einfacher und vermutlich günstiger. Dasselbe gilt, wenn Sie kein Team haben, das GPU-Infrastruktur verantworten will, und kein Budget, damit jemand anderes das übernimmt. Eine souveräne Plattform rechnet sich, wenn mehrere Auslöser zusammenkommen; trifft keiner zu, ist sie Over-Engineering.

## Wo Sie anfangen

Beantworten Sie die sieben Fragen der Reihe nach und halten Sie die Antworten schriftlich fest; die Architekturoptionen grenzen sich schnell ein. Das [Platform Readiness Assessment](/de/dienstleistungen/platform-readiness-assessment/) erledigt das gemeinsam mit Ihnen in 14 oder 28 Tagen zum Festpreis und endet mit einer schriftlichen Architektur, einer GPU-Strategie und den Souveränitätskontrollen. Die Umsetzung erfolgt anschließend als [AI Platform Build](/de/dienstleistungen/ai-platform-build/) auf der [Ænix AI Platform](/de/produkte/ai-platform/), typischerweise in 3 bis 12 Monaten je nach Umfang und mit einem Angebot pro RFP. Mehr zur Serving-Seite finden Sie im [Leitfaden für Private-LLM-Deployments](/de/blog/2026/05/private-llm-deployment-leitfaden/); zum Open-Source-Projekt selbst siehe die [Cozystack-Dokumentation](https://cozystack.io/docs/).
