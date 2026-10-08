---
title: "Internal Developer Portal vs. Internal Developer Platform — und der Platz von Backstage im Jahr 2026"
seo_title: "Developer Portal oder Plattform – und Backstage"
description: "Portal und Plattform sind nicht dasselbe. Wo Backstage wirklich passt, welche Alternativen es gibt und wie Sie klären, ob Sie überhaupt ein Portal brauchen."
slug: "internal-developer-portal-vs-plattform"
date: "2026-05-14"
cover_image: "/img/blog/covers/de/internal-developer-portal-vs-plattform.jpg"
author: "Aenix Team"
type: "article"
topics: ["Backstage", "Kubernetes", "Platform Engineering", "Compliance", "Observability"]
language: "de"
hreflang_en: "/blog/2026/05/internal-developer-portal-vs-platform/"
companion_landing: "/de/alternativen/backstage-alternative/"
quiz:
  title: "Wissens-Check: Portal vs. Plattform (und Backstage)"
  questions:
    - q: "Ab welcher Mindestgröße lohnt es sich laut Artikel, Backstage in Betracht zu ziehen?"
      options:
        - { text: "Bei jeder Größe, selbst bei einem einzigen Team von zehn Personen", correct: false }
        - { text: "Ab etwa 200 Engineers und 100 Services", correct: true }
        - { text: "Ab etwa 50 Engineers, bevor die Services ausufern", correct: false }
      explanation: "Backstage funktioniert gut bei: 200+ Engineers, 100+ Services, einem Plattformteam mit 5+ Engineers, die Zeit für die Pflege aufbringen können, einem Plugin-Ökosystem, das zu Ihrem Tooling passt, und wenn Anpassbarkeit eine Priorität ist. Darunter übersteigen die Betriebskosten den Nutzen."
    - q: "Wann wird ein Portal laut Artikel wertvoll, unabhängig von der Produktwahl?"
      options:
        - { text: "Immer — jedes Produktteam braucht vom ersten Tag an eines", correct: false }
        - { text: "Nur wenn das Budget ein eigenes Portal-Team erlaubt", correct: false }
        - { text: "Wenn die Zahl der Services ~50 überschreitet oder ein Audit einen Katalog verlangt", correct: true }
      explanation: "Ein Portal wird wertvoll, wenn die Zahl der Services (50+) das übersteigt, was Engineers im Kopf behalten können, wenn das Team groß ist und viele Engineers sich auf der Plattform noch nicht sicher bewegen, wenn teamübergreifende Service-Discovery real ist oder wenn Compliance und Audit einen Servicekatalog verlangen."
    - q: "Was hält der Artikel für Organisationen, die überhaupt kein Portal brauchen, für ausreichend?"
      options:
        - { text: "Eine maßgeschneiderte, selbst gebaute UI", correct: false }
        - { text: "IaC-Repository plus Markdown-Dokumentation plus GitOps-Schnittstelle", correct: true }
        - { text: "Eine gemeinsame Tabelle mit Services und Verantwortlichen", correct: false }
      explanation: "Für Organisationen unter ~100 Engineers (wenige Services, ein routiniertes Plattformteam) gilt: kein Portal, sondern IaC-Repository plus Markdown-Dokumentation plus GitOps-Schnittstelle. Stärke: keine Betriebskosten über Git hinaus. Schwäche: Die Auffindbarkeit skaliert ab 30–50 Services schlecht."
    - q: "Wie positioniert der Artikel Port (port.io)?"
      options:
        - { text: "Als selbst gehostete Open-Source-Alternative zu Backstage", correct: false }
        - { text: "Als CI/CD-Pipeline-Runner mit nachträglich angebauten Katalogfunktionen", correct: false }
        - { text: "Als SaaS-Internal-Developer-Portal mit klaren Vorgaben, schnell ausgerollt", correct: true }
      explanation: "Port ist SaaS — kein Selbstbetrieb; schneller ausgerollt als Backstage; mit klaren Vorgaben. Abwägungen: Abhängigkeit von SaaS (mit Folgen für die Souveränität); weniger anpassbar als Backstage. Am besten für mittelgroße Organisationen, die SaaS nutzen wollen."
    - q: "Welche prägnante Kurzformel nutzt der Artikel für die Trennung von Plattform und Portal?"
      options:
        - { text: "Eine Plattform allein funktioniert; ein Portal allein ist Tapete", correct: true }
        - { text: "Das Portal ist der Inhalt, die Plattform die Form", correct: false }
        - { text: "Beide Ebenen sind gleichwertig und austauschbar", correct: false }
      explanation: "Die einprägsame Formel des Artikels: „Eine Plattform ohne Portal funktioniert trotzdem. Ein Portal ohne Plattform ist Tapete.“ Capability-Stack gegenüber UI-/Katalogebene — wer beides verwechselt, erklärt, warum so viele Backstage-first-Projekte stocken."
---


Das Kürzel „IDP“ ist mehrfach belegt. Es steht für beides:

- **Internal Developer Platform** — den zugrunde liegenden Capability-Stack (Kubernetes, IaC, Observability, Golden Paths).
- **Internal Developer Portal** — die UI-/Katalogebene (Backstage, Port, Eigenbau).

Die meisten Diskussionen werfen beides durcheinander. Die eigentliche Frage — „Brauchen wir Backstage?“ — hat unterschiedliche Antworten, je nachdem, von welcher IDP die Rede ist.

## Plattform vs. Portal

Eine Plattform ohne Portal funktioniert trotzdem. Ein Portal ohne Plattform ist Tapete.

Die **Plattform** beantwortet: „Welche Fähigkeiten können Produktteams per Self-Service nutzen?“
- Bereitstellung von Umgebungen
- Anwendungs-Deployment
- Bereitstellung von Datenbanken, Queues und Caches
- Onboarding in die Observability
- Secrets, Identity, Netzwerkzugang

Das **Portal** beantwortet: „Wie finden Produktteams diese Fähigkeiten und wie greifen sie darauf zu?“
- Servicekatalog
- Einstiegspunkt in die Dokumentation
- Self-Service-Formulare und -Aktionen
- Kosten- und SLO-Dashboards pro Service

Ohne Plattform funktioniert Self-Service nicht. Das Portal wird für die Auffindbarkeit gebraucht, sobald die Zahl der Services über das hinauswächst, was Teams im Kopf behalten können.

## Wann Sie ein Portal brauchen

Ein Portal wird wertvoll, wenn:

- **die Zahl der Services groß ist** — 50+ Services, bei denen Engineers den Überblick verlieren.
- **das Team groß ist** — viele Engineers, von denen sich viele auf der Plattform noch nicht sicher bewegen.
- **teamübergreifende Service-Discovery real ist** — Engineers aus Team A nutzen Services von Team B.
- **Compliance oder Audit einen Servicekatalog verlangen** — ein Serviceinventar, das der Aufsicht standhält.

Trifft nichts davon zu (kleine Organisation, wenige Services, routiniertes Plattformteam), verursacht ein Portal Wartungsaufwand ohne nennenswerten Nutzen.

## Portal-Optionen im Vergleich

### Backstage (CNCF Incubating)

**Was:** Open-Source-Servicekatalog plus Plugin-Ökosystem. Ursprünglich von Spotify entwickelt, heute bei der CNCF.

**Stärken:** Ausgereift, breites Plugin-Ökosystem, anpassbar, starke Community.

**Schwächen:** Die Betriebskosten sind real — Backstage zu betreiben heißt, Plugins zu pflegen, interne Tools anzubinden und mit dem Release-Rhythmus von Backstage Schritt zu halten. Viele Anwender unterschätzen das.

**Am besten für:** Mittlere bis große Engineering-Organisationen (200+ Engineers) mit genug Kapazität im Plattformteam, um Backstage als Produkt zu pflegen.

### Port (port.io)

**Was:** SaaS-Internal-Developer-Portal.

**Stärken:** Kein Selbstbetrieb; schneller ausgerollt als Backstage; mit klaren Vorgaben.

**Schwächen:** Abhängigkeit von SaaS (mit Folgen für die Souveränität); weniger anpassbar als Backstage.

**Am besten für:** Mittelgroße Organisationen, die SaaS nutzen wollen und sich die Betriebskosten von Backstage sparen möchten.

### Cortex / Compass / Eigenbauvarianten

Verwandte Optionen mit anderen Abwägungen. Cortex konzentriert sich auf Engineering-Effektivität; Compass ist Atlassian-nativ; Eigenbau heißt „selbst bauen“.

### Kein Portal

**Was:** IaC-Repository plus Markdown-Dokumentation plus GitOps-Schnittstelle.

**Stärken:** Keine Betriebskosten über Git hinaus. Kein portalspezifischer Wartungsaufwand.

**Schwächen:** Die Auffindbarkeit skaliert ab 30–50 Services schlecht.

**Am besten für:** Kleinere Organisationen (unter ~100 Engineers), in denen die Kosten eines Portals seinen Nutzen übersteigen würden.

## Wo Backstage tatsächlich am besten passt

Backstage funktioniert gut, wenn:

- es 200+ Engineers und 100+ Services gibt
- das Plattformteam 5+ Engineers hat, die Zeit für die Pflege aufbringen können
- das Plugin-Ökosystem zu Ihrem Tooling passt
- Anpassbarkeit eine Priorität ist (Sie werden Plugins schreiben oder erweitern)

Trifft das nicht zu, übersteigen die Betriebskosten den Nutzen, und eine leichtgewichtigere Option passt besser.

## CNOE — die Open-Source-Referenz für Platform Engineering

Die Brancheninitiative CNOE (Cloud Native Operational Excellence) verdient Erwähnung. Es ist eine Referenzarchitektur mit klaren Vorgaben, die Backstage, Argo CD, Crossplane, External Secrets und weitere CNCF-Tools zu einem stimmigen Plattformmuster verbindet. Für Organisationen, die eine „Plattform aus der Box“ aus CNCF-Projekten wollen, ist CNOE der strukturierte Ausgangspunkt.

CNOE ergänzt Cozystack: CNOE konzentriert sich auf das Developer Portal und die Tooling-Ebene; Cozystack auf die darunterliegende mandantenfähige, Kubernetes-native Plattform mit Virtualisierung. Beide können nebeneinander bestehen.

## Wie Sie entscheiden

Ein praktischer Entscheidungsbaum:

1. **Haben Sie darunter eine funktionierende Plattform?** Wenn nein, bauen Sie zuerst diese. Die Adoption eines Portals setzt voraus, dass es eine Plattform gibt.
2. **Mehr als 50 Services? Mehr als 100 Engineers?** Wenn ja, hilft ein Portal. Wenn nein, ist ein Portal Over-Engineering.
3. **Sind die Betriebskosten von Backstage realistisch tragbar?** Wenn ja (großes Team, Plugin-freundliche Kultur), Backstage. Wenn nein, Port oder Cortex.
4. **Ist SaaS akzeptabel?** Wenn ja, Port oder Cortex. Wenn nein, Backstage oder Eigenbau.
5. **Werden Sie tatsächlich anpassen?** Wenn ja, Backstage. Wenn nein, Port.

Die Entscheidung ist kleiner, als Hersteller sie darstellen. Die größere Architekturentscheidung ist die Plattform darunter.
