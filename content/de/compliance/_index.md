---
title: "Compliance-Nachweise für die Ænix-Plattformen"
description: "Welche Kontrollen die Aenix-Plattformen liefern, welche Sie aktivieren und welche bei Ihnen bleiben — PCI DSS, DSGVO, DORA, CIS und Kubernetes-Konformität."
hero_subtitle: "Was die Plattform leistet, was Sie einschalten und was bei Ihnen bleibt"
language: "de"
quick_facts_style: "rows"
faq_style: "rows"
primary_keyword: "kubernetes compliance nachweise"
secondary_keywords: ["cis kubernetes benchmark ergebnisse", "pci dss kubernetes", "dsgvo kubernetes plattform", "dora ikt-drittparteienrisiko plattform", "kubernetes konformität cozystack"]
hreflang_en: /compliance/
related_pages:
  - /de/loesungen/dora-compliance/
  - /de/loesungen/nis2-compliance/
  - /de/loesungen/data-sovereignty/
  - /de/produkte/private-cloud-platform/
  - /de/produkte/cozystack-enterprise-support/
direct_answer: |
  **Dieser Bereich veröffentlicht die Kontroll-Nachweise hinter der Ænix Public Cloud Platform, der Ænix Private Cloud Platform und der Ænix AI Platform: welche technischen Kontrollen bei einer frischen Installation aktiv sind, welche mitgeliefert werden, aber erst nach Aktivierung greifen, und welche kein Infrastrukturprodukt für Sie übernehmen kann. Abgedeckt sind PCI DSS v4.0.1, Art. 32 DSGVO, DORA, der CIS Kubernetes Benchmark und die CNCF-Kubernetes-Konformität. Jedes gemessene Ergebnis auf diesen Seiten stammt aus einem Lauf gegen Cozystack — die quelloffene, Apache-2.0-lizenzierte CNCF-Engine, aus der die Ænix-Plattformen gebaut sind — und nicht gegen ein separates, geschlossenes Produkt, denn ein solches existiert nicht. Prüfer zertifizieren keine Plattform, sondern die Umgebung, die Sie darauf betreiben. Diese Seiten sagen Ihnen, welche Hälfte welche ist.**
quick_facts:
  - label: "Was dieser Bereich ist"
    value: "Kontroll-Mapping je Rahmenwerk plus die Rohläufe dahinter — auf Ihrem eigenen Cluster reproduzierbar."
  - label: "Abgedeckte Rahmenwerke"
    value: "PCI DSS v4.0.1, DSGVO (Art. 32 und Löschung), DORA, CIS Kubernetes Benchmark v1.12, CNCF-Kubernetes-Konformität."
  - label: "Was geprüft wurde"
    value: "Cozystack v1.6 bzw. v1.6.1 auf Talos Linux — dieselbe Engine, die alle drei Ænix-Plattformen ausliefern."
  - label: "Zertifikate"
    value: "Keine behauptet. Aenix hält weder ISO 27001 noch SOC 2, und keine Plattform kann eine PCI-DSS- oder DSGVO-Zertifizierung halten."
  - label: "Konformität"
    value: "Tenant-Kubernetes-Cluster bestehen die CNCF-Konformitätssuite vollständig auf Kubernetes v1.31 bis v1.35."
  - label: "CIS-Benchmark"
    value: "54 bestanden, 24 fehlgeschlagen, 53 Warnungen auf dem Management-Cluster — jeder Fehlschlag eingeordnet als echte Abweichung, anders erfüllte Kontrolle oder nicht anwendbar."
  - label: "Lizenz der Engine"
    value: "Apache 2.0. Quellcode, Security-Advisories und Test-Manifeste sind öffentlich — nichts davon müssen Sie uns glauben."
faq:
  - q: "Sind das Benchmark-Ergebnisse für Cozystack oder für die Aenix-Plattformen?"
    a: "Für Cozystack — und genau das ist die ehrliche und zugleich brauchbare Antwort. Die Aenix Public Cloud Platform, die Private Cloud Platform und die AI Platform sind Distributionen von Cozystack, dem Apache-2.0-lizenzierten CNCF-Projekt, das Aenix entwickelt und pflegt. Es gibt keine separate, geschlossene Engine, die man testen könnte. Eine Kontrolle, die auf Cozystack besteht, besteht auch auf der darauf gebauten Plattform; eine Abweichung dort ist eine Abweichung hier. Wo ein Ergebnis von der Talos-Maschinenkonfiguration oder der Referenzarchitektur abhängt, die Aenix um die Engine herum liefert, sagt die jeweilige Seite das ausdrücklich."
  - q: "Ist die Aenix-Plattform zertifiziert — ISO 27001, SOC 2, PCI DSS?"
    a: "Nein. Aenix hält weder ein ISO-27001- noch ein SOC-2-Zertifikat und behauptet das auch nicht. Eine PCI-DSS-Zertifizierung bezieht sich auf eine abgegrenzte Karteninhaberdaten-Umgebung und wird von einem Qualified Security Assessor testiert, nicht an ein Produkt vergeben. Der CIS-Benchmark vergibt überhaupt kein Urteil — er ist eine Liste von Kontrollen. Was die Plattformen leisten: Sie stellen die technischen Kontrollen bereit, auf die solche Programme aufbauen, weisen sie nach und unterstützen Ihre Zertifizierungsarbeit. Das ist eine engere Aussage — und es ist die, die wir treffen."
  - q: "Können wir diese Ergebnisse auf unserem eigenen Cluster reproduzieren?"
    a: "Ja, und Sie sollten es vor einer Prüfung tun. Die CIS-Benchmark-Seite veröffentlicht das exakte kube-bench-Job-Manifest, die gepinnte Image-Version und die verwendete Benchmark-Revision. Die Konformitätsseite veröffentlicht den Sonobuoy-Aufruf. Die PCI-DSS- und DSGVO-Seiten enthalten kubectl-Kommandos, die Tenant-Isolierung und RBAC-Grenzen direkt nachweisen. Ihre Installation kann andere Zahlen liefern, insbesondere wenn die Talos-Maschinenkonfiguration abweicht."
  - q: "Wie verhält sich dieser Bereich zu den DORA- und NIS2-Lösungsseiten?"
    a: "Zwei verschiedene Fragen. Die DORA- und NIS2-Lösungsseiten beschreiben das Engagement: ein Readiness-Assessment zum Festpreis, das Ihre Architektur gegen die Regulierung abbildet und einen Remediationsplan erzeugt. Dieser Bereich ist der plattformseitige Nachweis, auf den ein solches Assessment zugreift: welche Kontrollen existieren, wie sie gemessen wurden und was die Messung nicht abdeckt. Die Lösungsseite für das Programm, diese Seiten für die Artefakte."
  - q: "Überträgt sich die Kubernetes-Zertifizierung einer gehosteten Plattform auf unsere Installation?"
    a: "Nein. Ein CNCF-Eintrag beschreibt ein benanntes Produkt in einer benannten Version, eingereicht von einer bestimmten Einrichtung. Wenn Sie dieselbe quelloffene Plattform selbst betreiben, deckt die Zertifizierung eines anderen das nicht ab. Genau deshalb werden die selbst betriebenen Konformitätsläufe separat und mit eigenen Artefakten veröffentlicht."
---

**Prüfer zertifizieren keine Plattform. Sie zertifizieren die Umgebung, die Sie darauf betreiben — Ihre Systeme, Ihre Prozesse, Ihre Nachweise. Die brauchbare Frage lautet deshalb nie „ist die Plattform compliant“, sondern: welche Kontrollen bekomme ich, welche muss ich einschalten, und welche bleiben meine.**

Diese Seiten beantworten das Rahmenwerk für Rahmenwerk — für die drei Ænix-Plattformen und für Cozystack darunter. Jede trennt sauber, was bei einer frischen Installation greift, was mitgeliefert, aber deaktiviert ist, und was kein Infrastrukturprodukt für Sie erledigen kann.

<div class="cta-row">
  <a class="cta-primary" href="/de/kontakt/">Mit einem Engineer sprechen</a>
  <a class="cta-secondary" href="/de/dienstleistungen/platform-readiness-assessment/">Platform-Readiness-Assessment →</a>
</div>

---

## Woher diese Zahlen stammen

Jedes gemessene Ergebnis in diesem Bereich — der kube-bench-Lauf, die Konformitätsläufe, die Verifikationskommandos — wurde gegen **Cozystack** erhoben, die quelloffene Engine, auf einem Referenzcluster. Nicht gegen einen separaten, proprietären Ænix-Build.

Das ist Absicht, und es ist der Grund, warum die Ergebnisse übertragbar sind:

- **Es gibt keine separate Engine.** Die Ænix Public Cloud Platform, die Ænix Private Cloud Platform und die Ænix AI Platform sind Distributionen von Cozystack. Ænix entwickelt und pflegt Cozystack — ein CNCF-Projekt unter Apache 2.0 — und die Plattformen liefern dieselben Releases aus. Nichts wird abgezweigt und hinter einer Lizenz neu vermessen.
- **Die Zuordnung ist deshalb eins zu eins.** Eine Kontrolle, die auf Cozystack besteht, besteht auf der darauf gebauten Plattform. Eine Abweichung dort ist eine Abweichung hier. Es bleibt keine Lücke, in der sich eine Marketingaussage verstecken könnte.
- **Was Ænix hinzufügt, liegt um die Engine herum, nicht darin.** Die zum Installationszeitpunkt angewendete Talos-Maschinenkonfiguration, die Referenzarchitektur, die Runbooks und die Unterstützung während der Prüfung. Mehrere der hier besprochenen Einstellungen — `--encryption-provider-config`, die Audit-Policy, die Autorisierungskonfiguration, die Zeitquelle — stammen aus dieser Maschinenkonfiguration und nicht aus Cozystack selbst. Wo das der Fall ist, sagt die Seite es und zeigt, wie Sie es auf Ihrem Cluster prüfen.
- **Und genau deshalb können Ihre Zahlen abweichen.** Derselbe Benchmark auf Ihrer Installation ist ein anderer Lauf. Behandeln Sie die veröffentlichten Zahlen als Referenzpunkt und als Methode, nicht als Zertifikat für Ihre Umgebung.

Die Alternative — dieselben Zahlen als Ergebnisse eines proprietären Produkts auszuweisen — wäre eine Aussage, die wir nicht belegen und ein Prüfer nicht nachvollziehen könnte. Der Quellcode ist öffentlich, die Manifeste stehen auf den Seiten.

---

<div class="band-fullbleed band-fullbleed--tint">
<div class="band-fullbleed__inner">

## Rahmenwerke

- **[PCI DSS](/de/compliance/pci-dss/)** — alle zwölf Anforderungen von PCI DSS v4.0.1, Anforderung für Anforderung: was ab Werk aktiv ist, was eine Einstellung entfernt ist, was bei Ihnen bleibt — mit Kommandos zur Prüfung auf dem eigenen Cluster.
- **[DSGVO](/de/compliance/dsgvo/)** — die technischen Maßnahmen nach Art. 32, wo personenbezogene Daten physisch liegen, und die Teile des Löschanspruchs, die Infrastruktur nicht klären kann.
- **[CIS Kubernetes Benchmark](/de/compliance/cis-benchmark/)** — der vollständige kube-bench-Lauf: 54 bestanden, 24 fehlgeschlagen, 53 Warnungen, mit jedem Fehlschlag eingeordnet als echte Abweichung, anders erfüllte Kontrolle oder nicht anwendbare Prüfung.
- **[DORA](/de/compliance/dora/)** — der plattformseitige Nachweis zu Resilienz, Backup und Wiederherstellung, Vorfallsaufzeichnungen und dem Kapitel zum IKT-Drittparteienrisiko, wo selbst betriebene Open Source die Antwort verändert.
- **[Kubernetes-Konformität](/de/compliance/kubernetes-conformance/)** — CNCF-Konformitätsergebnisse für beide Betriebsformen: selbst betriebene Tenant-Cluster, die über fünf Kubernetes-Releases vollständig bestehen, und eine gehostete Plattform im CNCF-Register.

</div>
</div>

---

## Was wir nicht behaupten

Präzision ist hier mehr wert als Beruhigung, weil ein Prüfer jeden Satz nachfasst.

| Aussage, die wir **nicht** treffen | Was stattdessen zutrifft |
|---|---|
| „Ænix ist ISO-27001-zertifiziert“ | Aenix hält kein ISO-27001-Zertifikat. Die Plattformen sind so gebaut, dass sie ein ISMS tragen — Audit-Logging, Zugriffskontrolle, Änderungskontrolle über deklarative Konfiguration — und Ænix unterstützt die Zertifizierungsarbeit von Kunden. Das ist eine andere Aussage. |
| „Ænix ist SOC-2-testiert“ | Es gibt keinen SOC-2-Bericht. Wo ein Kunde einen für seinen eigenen, auf der Plattform betriebenen Dienst braucht, liefert die Plattform Kontroll-Nachweise; der Bericht bleibt seiner. |
| „Die Plattform ist PCI-DSS-zertifiziert“ | Keine Plattform ist das. Ein Qualified Security Assessor zertifiziert eine abgegrenzte Karteninhaberdaten-Umgebung. Die Plattform liefert die technischen Kontrollen, auf die die Prüfung aufsetzt. |
| „Die Plattform ist DSGVO-konform“ | Compliance liegt beim Verantwortlichen. Die Plattform liefert Maßnahmen nach Art. 32 und macht sie nachweisbar. |
| „Die Plattform ist CIS-zertifiziert“ | Der CIS-Benchmark vergibt kein Urteil. Er ist eine Liste von Kontrollen; Compliance ist eine Beurteilung eines konkreten Clusters. |
| „Die Plattform ist DORA-konform“ | DORA bindet Finanzunternehmen, nicht Plattformen. Die Plattform ist Teil des IKT-Bestands, den diese Unternehmen verwalten. |

---

## Die regulatorischen Engagements

Die Seiten oben sind Nachweise. Wenn Sie das Programm darum herum brauchen — Gap-Analyse, eine Kontroll-Landkarte dessen, was Sie heute nachweisen können, einen Remediationsplan —, liegt das unter Lösungen:

- **[DORA-Compliance](/de/loesungen/dora-compliance/)** — Readiness-Engagement zum Festpreis für Finanzunternehmen und die sie beliefernden IKT-Drittanbieter: IKT-Drittparteienrisiko, Konzentrationsrisiko, Exit-Bereitschaft, Resilienztests. Kostenlose [DORA-Compliance-Checkliste](/de/ressourcen/dora-compliance-checkliste/).
- **[NIS2-Compliance](/de/loesungen/nis2-compliance/)** — das Gegenstück für wesentliche und wichtige Einrichtungen unter NIS2. Kostenlose [NIS2-Compliance-Checkliste](/de/ressourcen/nis2-compliance-checkliste/).
- **[Datensouveränität](/de/loesungen/data-sovereignty/)** — kundenkontrollierte Schlüssel, kundenkontrollierte Hardware, jurisdiktionsgebundene Datenhaltung.

Die Trennung ist gewollt: Die Lösungsseiten beantworten „was verlangt die Regulierung von uns und wo stehen wir kurz“, diese Seiten beantworten „was tut die Infrastruktur tatsächlich, und wie wurde das gemessen“.

---

## Erst reproduzieren, dann zitieren

Nichts in diesem Bereich verlangt Vertrauen. Cozystack steht unter Apache 2.0; Quellcode, Security-Advisories und Release-Changelogs sind öffentlich unter [cozystack.io](https://cozystack.io/). Das kube-bench-Job-Manifest, der Sonobuoy-Aufruf und die Isolationstests stehen auf den Seiten, die sie verwenden — mit gepinnten Werkzeugversionen, denn ein ungepinntes Werkzeug ist kein Nachweis.

Wenn Sie das Kontroll-Mapping vor einer Prüfung gegen Ihren eigenen Geltungsbereich gespiegelt haben möchten: dafür gibt es [Enterprise-Support](/de/produkte/cozystack-enterprise-support/) und das [Platform-Readiness-Assessment](/de/dienstleistungen/platform-readiness-assessment/).

---

## Hinweise

Dieser Bereich beschreibt Cozystack v1.6 und v1.6.1, beobachtet auf Referenzclustern im August 2026, sowie die daraus gebauten Ænix-Plattformen. Er ist informatorisch: keine Rechtsberatung, kein Assessment, keine Zertifizierung und keine Zusicherung, dass irgendeine Konfiguration einen Prüfer oder eine Aufsichtsbehörde zufriedenstellt. Ihre Installation kann abweichen, insbesondere in der Talos-Maschinenkonfiguration.
