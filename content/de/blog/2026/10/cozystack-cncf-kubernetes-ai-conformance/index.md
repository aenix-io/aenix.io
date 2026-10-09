---
title: "Cozystack ist Teil des CNCF-Programms Kubernetes AI Conformance"
seo_title: "Cozystack im CNCF-Programm Kubernetes AI Conformance"
description: "Cozystack v1.6.1 wurde für Kubernetes v1.35 in das CNCF-Programm Kubernetes AI Conformance aufgenommen, alle 12 Anforderungen erfüllt. Was geprüft wurde."
slug: "cozystack-cncf-kubernetes-ai-conformance"
date: "2026-10-09"
cover_image: "/img/blog/covers/de/cozystack-cncf-kubernetes-ai-conformance.jpg"
author: "Timur Tukaev"
type: "announcement"
topics: ["Cozystack", "CNCF", "AI and ML", "GPU", "Kubernetes"]
language: "de"
hreflang_en: "/blog/2026/10/cozystack-cncf-kubernetes-ai-conformance/"
companion_landing: "/de/produkte/ai-platform/"
companion_label: "Zur Ænix AI Platform →"
direct_answer: "**Cozystack wurde am 14. September 2026 in das CNCF-Programm Kubernetes AI Conformance aufgenommen: Version 1.6.1 auf Kubernetes v1.35, mit allen 12 Anforderungen des Programms umgesetzt.** Cozystack steht damit neben GKE, EKS, AKS, OpenShift, RKE2 und weiteren Plattformen auf der Liste. Das Programm prüft, ob eine Kubernetes-Plattform das bereitstellt, worauf KI- und ML-Workloads angewiesen sind — Zugriff auf Beschleuniger, Steuerung des Inferenz-Traffics, Gang Scheduling, Operatoren für Trainings-Frameworks und Observability. Die Nachweise für Cozystack, einschließlich zweier Einschränkungen, sind auf cozystack.io veröffentlicht."
quick_facts:
  - label: "Programm"
    value: "CNCF Kubernetes AI Conformance, Kubernetes v1.35"
  - label: "Version"
    value: "Cozystack v1.6.1"
  - label: "Aufgenommen"
    value: "14. September 2026"
  - label: "Anforderungen"
    value: "12 von 12 umgesetzt"
  - label: "Nachweise"
    value: "cozystack.io/compliance/ai-conformance/"
faq:
  - q: "Ist das dasselbe wie eine Certified-Kubernetes-Distribution?"
    a: "Nein, es baut darauf auf. Certified Kubernetes prüft, ob sich die API wie Kubernetes verhält; AI Conformance prüft, ob die Plattform darüber hinaus die Fähigkeiten bietet, die KI- und ML-Workloads brauchen. Cozystack hat beides."
  - q: "Heißt das, dass jede GPU und jedes KI-Framework unterstützt wird?"
    a: "Nein. Bestätigt wird ein bestimmter Satz von Plattformfähigkeiten. Die GPU-Unterstützung der Ænix AI Platform ist auf ihrer Produktseite beschrieben: Passthrough an VMs, NVIDIA vGPU mit Ihrer NVIDIA-Lizenz und Sharing über HAMi; MIG und Time-Slicing stehen auf der Roadmap."
  - q: "Wer hat die Einreichung vorgenommen?"
    a: "Ænix-Ingenieure haben die Einreichung für das Projekt Cozystack vorbereitet, das Ænix ins Leben gerufen hat und gemeinsam mit Maintainern aus anderen Unternehmen betreut."
---

Wenn eine GPU-Cloud oder ein ML-Team in einem Unternehmen Plattformen in die engere Wahl nimmt, ist einer der ersten Filter inzwischen eine Liste der CNCF: Welche Kubernetes-Plattformen haben nachgewiesen, dass sie bereitstellen, worauf KI-Workloads tatsächlich angewiesen sind? Wer auf dieser Liste fehlt, gilt als „nicht verifiziert“, ganz gleich, was die Plattform kann. **Seit dem 14. September 2026 steht Cozystack darauf: Version 1.6.1 wurde für Kubernetes v1.35 in das CNCF-Programm Kubernetes AI Conformance aufgenommen, mit allen 12 Anforderungen umgesetzt.**

Auf der Liste für v1.35 stehen unter anderem GKE, EKS, AKS, OpenShift, RKE2, Rafay und k0rdent — die Plattformen, mit denen uns unsere Kunden vergleichen.

## Was das Programm prüft

Die normale Kubernetes-Konformität beantwortet die Frage, ob sich ein Cluster wie Kubernetes verhält. AI Conformance stellt eine engere, praktischere Frage: Lassen sich Training und Inferenz darauf betreiben, ohne dass Sie die fehlenden Teile selbst zusammensetzen müssen? Die zwölf Anforderungen decken den Zugriff auf Beschleuniger ab, das Routing von Inferenz-Traffic, die Frage, ob ein verteilter Job ganz oder gar nicht eingeplant werden kann, ob Operatoren für Frameworks wie Ray mit ihren Webhooks und Custom Resources funktionieren und ob die Metriken der Beschleuniger im Monitoring-Stack ankommen.

Neun der Anforderungen erfüllt Cozystack bereits durch seine Standardkonfiguration. Die übrigen drei haben wir nachgewiesen, indem wir sie auf einem Tenant-Cluster mit Kubernetes v1.35.6 ausgeführt haben:

- **Inferenz-Traffic.** Über die Gateway API mit Cilium schickte eine gewichtete 80/20-Aufteilung zwischen zwei Modellversionen 26 von 30 Anfragen an die erste und 4 an die zweite; header-basiertes Routing leitete Anfragen an die im Header genannte Version.
- **Gang Scheduling.** Mit Kueue wurde ein Job, der zwei Pods brauchte, vollständig zugelassen; ein Job, der vier brauchte, blieb auf einem Cluster ohne Platz für vier bei null Pods, statt zur Hälfte zu starten und die GPUs zu blockieren.
- **Operatoren.** Der Controller und die Webhooks von Kueue sowie KubeRay brachten einen Ray-Cluster in den Zustand „ready“.

## Was wir als Einschränkungen festgehalten haben

Einreichungen für die Konformität sind öffentlich, und wir haben unsere ehrlich gehalten. Zwei Punkte sind darin so festgehalten, wie sie sind. Die Standardinstallation von KubeRay bringt keine eigenen Webhooks mit; der Webhook-Teil der Operator-Anforderung stützt sich daher auf Kueue, dessen Mutating Webhook Batch-Jobs anhält, bis sie zugelassen sind. Und Dynamic Resource Allocation wird von der API bereitgestellt, es ist aber kein DRA-Treiber installiert, sodass Device Classes und Resource Slices leer sind; der GPU-Teil von NVIDIAs eigenem DRA-Treiber ist selbst noch als nicht unterstützt gekennzeichnet und standardmäßig deaktiviert.

Die vollständigen Nachweise, Anforderung für Anforderung, finden Sie auf [cozystack.io](https://cozystack.io/compliance/ai-conformance/), unseren Überblick über die Konformitätsergebnisse von Cozystack auf der [Seite zur Kubernetes-Konformität](/de/compliance/kubernetes-conformance/).

## Was das für Ænix-Kunden bedeutet

Jeder Tenant-Cluster auf der [Ænix AI Platform](/de/produkte/ai-platform/) und den übrigen Ænix-Plattformen wird von derselben Cozystack-Engine erzeugt, die das Programm bestanden hat. Die hier geprüften Fähigkeiten sind also genau die, die Sie bekommen. Für eine GPU-Cloud, die Kapazität an eigene Kunden verkauft, ist das der Nachweis, den Ausschreibungen zunehmend verlangen; wie eine solche Cloud auf Cozystack aufgebaut wird, beschreibt die [Seite zu GPU as a Service](/de/loesungen/gpu-as-a-service/).

Die Einreichung haben Ænix-Ingenieure für das Projekt Cozystack vorbereitet, das Ænix ins Leben gerufen hat und gemeinsam mit Maintainern aus anderen Unternehmen betreut.
