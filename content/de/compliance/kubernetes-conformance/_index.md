---
title: "Kubernetes-Konformitätsergebnisse für die Ænix-Plattformen"
seo_title: "Kubernetes-Konformität der Ænix-Plattformen"
description: "CNCF-Konformität hinter den Ænix-Plattformen: Tenant-Cluster bestehen auf fünf Kubernetes-Releases vollständig, dazu Einträge im CNCF-Register."
page_type: "solution-landing"
language: "de"
quick_facts_style: "rows"
faq_style: "rows"
primary_keyword: "kubernetes konformität cozystack"
secondary_keywords: ["cncf certified kubernetes ergebnisse", "sonobuoy certified-conformance talos", "echtes kubernetes ohne hersteller-dialekt", "kubernetes konformität gehostete plattform"]
hreflang_en: /compliance/kubernetes-conformance/
related_pages:
  - /de/compliance/cis-benchmark/
  - /de/compliance/pci-dss/
  - /de/produkte/public-cloud-platform/
  - /de/produkte/private-cloud-platform/
  - /de/alternativen/openshift-alternative/
direct_answer: |
  **Kubernetes-Cluster, die auf den Ænix-Plattformen erzeugt werden, bestehen die CNCF-Konformitätssuite vollständig. Die Suite beantwortet eine eng gefasste Frage — und es ist die Frage, mit der jede Evaluierung beginnt: Ist das echtes Kubernetes oder etwas Kubernetes-Förmiges? Ein konformer Cluster betreibt Standard-Manifeste, Helm-Charts und Operatoren ohne Hersteller-Dialekt. Die veröffentlichten Läufe wurden gegen Cozystack v1.6.1 ausgeführt — die quelloffene, Apache-2.0-lizenzierte CNCF-Engine, aus der die Ænix-Plattformen gebaut sind —, ein Lauf je Kubernetes-Version gegen einen eigenen Tenant-Cluster, mit Sonobuoy im Modus certified-conformance: 441 von 441 auf v1.35.6 und keine Fehlschläge auf v1.34, v1.33, v1.32 und v1.31. Cozystack v1.6.1 ist im CNCF-Konformitäts-Repository als CNCF Certified Kubernetes Distribution für v1.34 und v1.35 gelistet, eingereicht von Ænix, und eine auf derselben Engine gebaute gehostete Plattform, Hikube, ist für v1.33, v1.34 und v1.35 von Hidora gelistet. Ein Eintrag zertifiziert ein benanntes Produkt in einer benannten Version — nicht Ihre Installation; ein Konformitätslauf sagt Ihnen, dass die Software sich so verhält, wie Kubernetes es soll.**
quick_facts:
  - label: "Suite"
    value: "CNCF-Kubernetes-Konformität, Sonobuoy v0.57.5 im Modus certified-conformance mit dem e2e-Plugin."
  - label: "Prüfgegenstand"
    value: "Tenant-Kubernetes-Cluster aus dem Katalog auf einer Cozystack-v1.6.1-Installation, 19. August 2026."
  - label: "Ergebnis"
    value: "0 Fehlschläge in jedem Lauf: 441 bestanden auf v1.35.6, 424 auf v1.34.9, 419 auf v1.33.13, 411 auf v1.32.13, 404 auf v1.31.14."
  - label: "CNCF-Register"
    value: "Hikube, eine auf derselben Engine gebaute gehostete Plattform, ist für v1.33, v1.34 und v1.35 mit vollständigen Testprotokollen gelistet."
  - label: "CNCF-Eintrag für die Engine"
    value: "Cozystack v1.6.1 ist als CNCF Certified Kubernetes Distribution für v1.34 und v1.35 gelistet, eingereicht von Ænix; das Programm akzeptiert nur das aktuelle Release und die beiden davor, deshalb werden die älteren Läufe stattdessen hier veröffentlicht."
  - label: "AI Conformance"
    value: "Cozystack wurde im September 2026 in das CNCF-Programm Kubernetes AI Conformance aufgenommen, für Kubernetes v1.35 und mit allen 12 Anforderungen umgesetzt."
  - label: "Was der Eintrag abdeckt"
    value: "Ein benanntes Produkt in einer benannten Version. Er ist keine Zertifizierung Ihrer Installation und sagt nichts über Sicherheit oder Betrieb."
  - label: "Was es nicht belegt"
    value: "Nichts zu Sicherheit, Performance, Ingress, CSI-Treibern, LoadBalancer-Provisionierung, NetworkPolicy-Durchsetzung, virtuellen Maschinen oder verwalteten Datenbanken."
faq:
  - q: "Ist das zertifiziertes Kubernetes?"
    a: "Für die Engine in den Versionen, die das Programm akzeptiert, ja — und das steht im Register der CNCF selbst: Cozystack v1.6.1 ist als CNCF Certified Kubernetes Distribution für v1.34 und v1.35 gelistet, eingereicht von Ænix, und Hikube — eine auf derselben Engine gebaute gehostete Plattform — ist für v1.33, v1.34 und v1.35 von Hidora gelistet. Lesen Sie den Geltungsbereich genau. Ein Eintrag zertifiziert ein benanntes Produkt in einer benannten Version; er deckt also Cozystack v1.6.1 in diesen Kubernetes-Releases ab und nicht Ihre eigene Installation, die ein separater Cluster ist und die Sie mit den Kommandos unten selbst testen können. Die Läufe für v1.33, v1.32 und v1.31 werden hier veröffentlicht statt eingereicht, weil das Programm nur das aktuelle Release und die beiden davor akzeptiert."
  - q: "Liefen diese Tests gegen Cozystack oder gegen die Ænix-Plattform?"
    a: "Gegen Cozystack v1.6.1, die Apache-2.0-lizenzierte CNCF-Engine, die Ænix entwickelt hat und mitpflegt und auf der alle drei Ænix-Plattformen basieren. Das Kubernetes darunter ist dasselbe; ein auf einer Ænix-Plattform erzeugter Tenant-Cluster ist also dieselbe Ressource, die getestet wurde — aus dem Katalog erzeugt mit kind Kubernetes, zwei Worker-Knoten, kein Sonderbau und kein Laboraufbau."
  - q: "Welche Kubernetes-Versionen können wir betreiben?"
    a: "Tenant-Cluster lassen sich auf v1.31 bis v1.35 erzeugen. Jede Version ist ein eigener Konformitätslauf gegen einen eigenen Cluster; die Ergebnisse stehen in der Tabelle oben. Nur die drei jüngsten Kubernetes-Releases können bei der CNCF eingereicht werden — das Programm akzeptiert das aktuelle Release und die beiden davor —, mit v1.36 als aktuellem Release sind also v1.35 und v1.34 eingereicht und der Rest hier veröffentlicht. Beachten Sie: v1.33 und älter erhalten keine Upstream-Patches mehr; behandeln Sie sie als Migrationspfad, nicht als Ziel."
  - q: "Ist Cozystack Teil des CNCF-Programms Kubernetes AI Conformance?"
    a: "Ja. Cozystack wurde im September 2026 in das CNCF-Programm Kubernetes AI Conformance aufgenommen, für Kubernetes v1.35 und mit allen 12 Anforderungen des Programms umgesetzt. Das Programm prüft, ob eine Plattform die Fähigkeiten bietet, die AI- und ML-Workloads von Kubernetes erwarten, etwa den Zugriff auf Beschleuniger und das Scheduling von Batch- und verteilten Jobs. Wie die Kubernetes-Konformität deckt es das benannte Produkt in der benannten Version ab, nicht Ihre Installation, und es ist keine Aussage über Sicherheit oder über ein bestimmtes GPU-Modell."
  - q: "Überträgt sich die Zertifizierung einer gehosteten Plattform auf unsere Installation?"
    a: "Nein. Ein Eintrag beschreibt ein Produkt in einer Version. Wenn Sie dieselbe quelloffene Plattform selbst betreiben, deckt die Zertifizierung eines anderen das nicht ab — genau deshalb werden die selbst betriebenen Läufe separat und mit eigenen Artefakten veröffentlicht."
  - q: "Können wir die Rohergebnisse sehen?"
    a: "Ja. Eine Konformitätseinreichung besteht aus e2e.log und junit_01.xml des Laufs, und beide sind im CNCF-Repository dauerhaft hinterlegt — unter den Cozystack-Einträgen für v1.34 und v1.35 und unter den Hikube-Einträgen für v1.33, v1.34 und v1.35. Artefakte der älteren selbst betriebenen Läufe, die außerhalb des Einreichungsfensters liegen, stellen wir auf Anfrage bereit."
  - q: "Was sagt Konformität nicht aus?"
    a: "Sie prüft portables Verhalten dort, wo dieses allgemein verfügbar ist: Kern-APIs, Scheduling, Service-Routing, Namespace-Isolierung. Alpha- und Beta-APIs liegen außerhalb des Profils, ebenso die meisten Erweiterungspunkte, auf die ein realer Workload angewiesen ist — Ingress-Controller, CSI-Treiber und Storage-Klassen, LoadBalancer-Provisionierung, NetworkPolicy-Durchsetzung, Performance und Härtung. Sie sagt nichts darüber, ob ein Cluster sicher, schnell oder gut betrieben ist, und nichts über virtuelle Maschinen oder verwaltete Datenbanken, die als Custom Resources darüber liegen."
---

**Kubernetes-Cluster, die auf den Ænix-Plattformen erzeugt werden, bestehen die CNCF-Konformitätssuite vollständig.** Die Suite beantwortet eine eng gefasste Frage, und es ist die Frage, mit der jede Evaluierung beginnt: Ist das echtes Kubernetes oder etwas Kubernetes-Förmiges? Ein konformer Cluster betreibt Standard-Manifeste, Helm-Charts und Operatoren ohne Hersteller-Dialekt.

Unten stehen zwei unabhängige Ergebnismengen — aus den beiden Formen, in denen die Plattform betrieben wird: ein Cluster, den Sie selbst betreiben, und eine darauf gebaute gehostete Plattform.

<div class="cta-row">
  <a class="cta-primary" href="/de/kontakt/">Mit einem Engineer sprechen</a>
  <a class="cta-secondary" href="/de/compliance/">Alle Compliance-Nachweise →</a>
</div>

---

## Was getestet wurde

Jeder Lauf unten ist ein **aus dem Katalog erzeugter Tenant-Kubernetes-Cluster** auf einer **Cozystack-v1.6.1**-Installation, getestet mit Sonobuoy im Modus `certified-conformance` gegen das exakt versionsgleiche Konformitäts-Image. Alle Läufe fanden am 19. August 2026 statt.

Cozystack ist die quelloffene, Apache-2.0-lizenzierte, bei der CNCF gehostete Engine, die Ænix entwickelt hat und gemeinsam mit Maintainern anderer Unternehmen pflegt; die Ænix Public Cloud Platform, die Ænix Private Cloud Platform und die Ænix AI Platform basieren darauf. Unter den Plattformen liegt kein anderes Kubernetes — deshalb sind diese Läufe der Nachweis für die Plattformen: Der getestete Cluster ist dieselbe Ressource, die ein Tenant sich auf jeder von ihnen selbst erzeugt.

### Selbst betrieben

| Kubernetes | Bestanden | Fehlgeschlagen | Specs in der Suite |
|---|---|---|---|
| v1.35.6 | **441** | 0 | 7355 |
| v1.34.9 | **424** | 0 | 7144 |
| v1.33.13 | **419** | 0 | 6741 |
| v1.32.13 | **411** | 0 | 6624 |
| v1.31.14 | **404** | 0 | 6607 |

Die Läufe für v1.35 und v1.34 stehen im CNCF-Konformitäts-Repository als Certified-Kubernetes-Einträge für Cozystack v1.6.1, eingereicht von Ænix, mit ihren vollständigen Artefakten: [`v1.35/cozystack`](https://github.com/cncf/k8s-conformance/tree/master/v1.35/cozystack) und [`v1.34/cozystack`](https://github.com/cncf/k8s-conformance/tree/master/v1.34/cozystack). Das Programm akzeptiert das aktuelle Kubernetes-Release und die beiden davor; mit v1.36 als aktuellem Release sind das die neuesten Releases, die die Plattform anbietet — deshalb werden die Läufe für v1.33, v1.32 und v1.31 hier veröffentlicht statt eingereicht.

### Hikube, eine auf derselben Engine gebaute gehostete Plattform

| Kubernetes | Ergebnis | Fundstelle |
|---|---|---|
| v1.35 | Bestanden | [`v1.35/hikube`](https://github.com/cncf/k8s-conformance/tree/master/v1.35/hikube) |
| v1.34 | Bestanden | [`v1.34/hikube`](https://github.com/cncf/k8s-conformance/tree/master/v1.34/hikube) |
| v1.33 | Bestanden | [`v1.33/hikube`](https://github.com/cncf/k8s-conformance/tree/master/v1.33/hikube) |

Die Hikube-Einträge sind formale CNCF-Einreichungen, von Hidora als `hosted`-Plattform eingereicht und dauerhaft im Repository der CNCF samt vollständiger Testprotokolle hinterlegt. Die beiden Mengen decken bewusst verschiedene Formen ab: eine Distribution, die Sie installieren und betreiben, und einen verwalteten Dienst, den jemand anderes für Sie betreibt.

**Die Unterscheidung zwischen Eintrag und Lauf lohnt sich.** Ein CNCF-Eintrag zertifiziert ein benanntes Produkt in einer benannten Version, und das Zeichen Certified Kubernetes gehört demjenigen, der es eingereicht hat. Ein Konformitätslauf sagt Ihnen, dass die Software sich so verhält, wie Kubernetes es soll — und genau das müssen die meisten Evaluierungen tatsächlich wissen.

Beachten Sie die älteren Releases. Die Konformität hält auf v1.31 ebenso wie auf v1.35 — relevant, wenn Sie von einer bestehenden Plattform migrieren: Sie können auf der Kubernetes-Version umziehen, die Sie heute betreiben, und danach nach eigenem Zeitplan aktualisieren, statt beides gleichzeitig zu tun. Allerdings erhalten v1.33 und älter keine Upstream-Patches mehr — nur die drei jüngsten Minor-Releases —, behandeln Sie sie also als Migrationspfad, nicht als Ziel.

---

<div class="band-fullbleed band-fullbleed--tint">
<div class="band-fullbleed__inner">

## Der selbst betriebene Lauf

Am Beispiel des jüngsten Releases:

```
Ran 441 of 7355 Specs in 7202.504 seconds
SUCCESS! -- 441 Passed | 0 Failed | 0 Pending | 6914 Skipped

API server:  v1.35.6
Node health: 2/2
Pods health: 17/17
```

Ein Tenant-Kubernetes-Cluster, aus dem Katalog mit `kind: Kubernetes` und zwei Worker-Knoten provisioniert, getestet mit Sonobuoy im Modus `certified-conformance` gegen das exakt versionsgleiche Konformitäts-Image. Kein Sonderbau und kein Laboraufbau. Die anderen vier Läufe folgten demselben Rezept gegen jeweils eigene Cluster.

Zwei Eigenschaften des Clusters waren entscheidend, und beide plant man besser ein, als sie zu entdecken:

**Ein dediziertes etcd.** Standardmäßig teilen sich die Tenant-Cluster einer Installation ein etcd, jedes unter eigenem Key-Präfix. Die Kompaktierung in etcd wirkt global statt je Präfix, weshalb der API-Server mit `--etcd-compaction-interval=0` läuft — eine Kompaktierung für einen Tenant würde die Historie seiner Nachbarn abschneiden. Ein Konformitätstest wartet deshalb auf eine Kompaktierung, die nie kommt, und läuft in einen Timeout. Ein eigenes etcd für den Tenant hebt diese Einschränkung auf.

**Kompaktierung eingeschaltet.** Mit einem dedizierten etcd setzen Sie das Intervall explizit über die Application-Spec statt durch Patchen des Deployments:

```yaml
spec:
  controlPlane:
    apiServer:
      extraArgs:
        - --etcd-compaction-interval=5m
```

Entscheiden Sie beides zum Erzeugungszeitpunkt. Einen laufenden Cluster auf ein anderes etcd umzuziehen ist keine unterstützte Migration und lässt die bestehenden Knoten ohne neue Pods zurück.

</div>
</div>

---

## Die Suite selbst ausführen

Jede Installation lässt sich testen, und während einer Evaluierung ist das eine angemessene Forderung.

```bash
sonobuoy version    # notieren — die Werkzeugversion gehört zum Nachweis
kubectl version     # das Konformitäts-Image muss zur Minor-Version des Clusters passen

sonobuoy run \
  --mode=certified-conformance \
  --plugin e2e \
  --kube-conformance-image registry.k8s.io/conformance:v1.35.6 \
  --wait
outfile=$(sonobuoy retrieve)
sonobuoy results "$outfile"
sonobuoy delete --wait
```

**Nutzen Sie `--mode=certified-conformance` und wissen Sie, was das wieder einschaltet.** Der Standardmodus überspringt als `[Disruptive]` markierte Tests; der Certified-Modus führt sie aus, denn ein Lauf mit übersprungenen Tests ist kein gültiger Zertifizierungslauf. Diese Tests setzen Knoten absichtlich unter Taints, verdrängen Pods und starten Komponenten neu — und sie laufen seriell, weshalb ein Certified-Lauf Stunden statt Minuten braucht.

**Übergeben Sie `--plugin e2e` auf Talos-basierten Clustern.** Sonobuoys Standard-Plugin-Satz enthält `systemd-logs`, das jeden Knoten nach Journal-Ausgaben absucht. Talos Linux hat kein systemd, das Plugin hängt also, und der Aggregator meldet den Lauf nie als abgeschlossen. Es auszuschließen kostet für eine Einreichung nichts: Beide erforderlichen Artefakte stammen aus dem `e2e`-Plugin.

**Trauen Sie dem Fortschrittszähler nicht.** `sonobuoy status` kann einen ganzen Lauf lang bei `Passed: 0` mit voller Restzahl stehen, während die Tests normal durchlaufen. Folgen Sie stattdessen dem Log des e2e-Pods — und denken Sie daran, dass ein ruhiges Log ein gutes Zeichen ist: Ausgaben erzeugen vor allem Fehlschläge.

Rechnen Sie mit zwei bis drei Stunden, mehreren hundert kurzlebigen Pods und Namespaces und mindestens zwei planbaren Worker-Knoten. Richten Sie Ihre kubeconfig auf den Tenant-Cluster statt auf den Management-Cluster: Konformität beschreibt den Cluster, auf dem Ihre Workloads landen.

---

## CNCF Kubernetes AI Conformance

Im September 2026 wurde Cozystack in das [CNCF-Programm Kubernetes AI Conformance](https://github.com/cncf/k8s-ai-conformance) für Kubernetes v1.35 aufgenommen, mit allen 12 Anforderungen des Programms umgesetzt. Das Programm setzt auf der gewöhnlichen Kubernetes-Konformität auf: Es prüft, ob eine Plattform portabel bereitstellt, was AI- und ML-Workloads von Kubernetes erwarten, etwa den Zugriff auf Beschleuniger und das Scheduling von Batch- und verteilten Jobs.

Es gelten dieselben Grenzen wie beim Konformitätseintrag oben. Es deckt ein benanntes Produkt in einer benannten Version ab, zertifiziert nicht Ihre Installation und sagt nichts über Sicherheit, Performance oder darüber, auf welchen GPU-Modellen ein bestimmtes Deployment betrieben wurde. Die GPU-Unterstützung der Ænix-Plattformen läuft über den NVIDIA GPU Operator; welche Zuteilungsmodi heute ausgeliefert werden, steht bei der [Ænix AI Platform](/de/produkte/ai-platform/).

---

## Was Konformität belegt — und was nicht

Die Suite prüft portables Verhalten, und zwar nur dort, wo dieses allgemein verfügbar ist. Verhalten sich die Kern-APIs wie spezifiziert, funktioniert das Scheduling, routen Services, isolieren Namespaces.

Alpha- und Beta-APIs liegen außerhalb des Profils, ebenso die meisten Erweiterungspunkte, auf die ein realer Workload angewiesen ist: Ingress-Controller, CSI-Treiber und ihre Storage-Klassen, LoadBalancer-Provisionierung, NetworkPolicy-Durchsetzung, Performance und Härtung. Konformität sagt, dass Code gegen die stabile Kubernetes-API sich hier so verhält, wie die Spezifikation es vorsieht. Sie sagt nichts darüber, ob ein Cluster sicher, schnell oder gut betrieben ist — dafür siehe [CIS-Benchmark](/de/compliance/cis-benchmark/) und [PCI DSS](/de/compliance/pci-dss/).

Sie sagt auch nichts über virtuelle Maschinen, verwaltete Datenbanken oder den übrigen Katalog. Das sind Erweiterungen auf Basis von Custom Resources; die Suite testet das Kubernetes darunter.

<div class="cta-row">
  <a class="cta-primary" href="/de/kontakt/">Rohartefakte anfordern</a>
  <a class="cta-secondary" href="/de/produkte/public-cloud-platform/">Ænix Public Cloud Platform →</a>
</div>

---

## Hinweise

Die selbst betriebenen Läufe wurden am 19. August 2026 gegen eine Cozystack-v1.6.1-Installation ausgeführt — die Engine, aus der die Ænix-Plattformen gebaut sind — mit Sonobuoy v0.57.5 im Modus `certified-conformance` und dem `e2e`-Plugin, ein Lauf je Kubernetes-Version gegen einen eigenen Tenant-Cluster. Die Zahlen für bestanden und fehlgeschlagen stammen aus der Ginkgo-Zusammenfassung in `e2e.log`.

Die Läufe für v1.35 und v1.34 sind im CNCF-Konformitäts-Repository als Certified-Kubernetes-Einträge für Cozystack v1.6.1 veröffentlicht, eingereicht von Ænix. Die Läufe für v1.33, v1.32 und v1.31 werden nur hier berichtet: Das Programm akzeptiert das aktuelle Kubernetes-Release und die beiden davor, sie waren also nie einreichungsfähig, und nichts auf dieser Seite stellt sie als zertifiziert dar.

„Certified Kubernetes“ und das Certified-Kubernetes-Logo sind Marken der Linux Foundation, lizenziert an den Anbieter eines konformen Produkts für das Produkt und die Version, die er zertifiziert hat. Die hier genannten Einträge decken Cozystack v1.6.1 auf Kubernetes v1.34 und v1.35 ab sowie Hikube auf v1.33 bis v1.35 im Rahmen der eigenen Einreichung von Hidora. Keiner davon zertifiziert Ihre Installation, und nichts auf dieser Seite behauptet, ein Kubernetes-Konformitätseintrag sage etwas über Sicherheit, Performance oder Betrieb eines Clusters aus.
