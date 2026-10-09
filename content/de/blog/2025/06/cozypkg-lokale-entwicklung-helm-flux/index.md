---
title: "Cozypkg: Wie wir die lokale Entwicklung mit Helm und Flux vereinfacht haben"
seo_title: "Cozypkg: lokale Entwicklung mit Helm und Flux"
description: "Andrei Kvapil zeigt, wie Cozystack Anwendungen mit Helm und Flux ausliefert, warum GitOps lokal hakt und wie das Werkzeug cozyhr diese Probleme löst."
slug: "cozypkg-lokale-entwicklung-helm-flux"
date: "2025-06-18"
cover_image: "/img/blog/covers/de/cozypkg-lokale-entwicklung-helm-flux.jpg"
author: "Andrei Kvapil"
type: "article"
topics: ["Open Source", "Platform Engineering"]
language: "de"
hreflang_en: "/blog/2025/06/cozypkg-how-we-simplified-local-development-with-helm-and-flux/"
---

Hallo! Ich bin Andrei Kvapil, CEO von Ænix und Entwickler von Cozystack, einer Open-Source-Plattform und einem Framework für den Aufbau von Cloud-Infrastruktur. In diesem Artikel zeige ich, wie wir Anwendungen nach Kubernetes ausliefern, erkläre, warum klassisches GitOps in der lokalen Entwicklung umständlich sein kann, und stelle vor, wie das neue Werkzeug [cozyhr](https://github.com/cozystack/cozyhr) (veröffentlicht als cozypkg und im Dezember 2025 in cozyhr umbenannt) diese Schwachstellen behebt. Der Artikel richtet sich an Engineers, die Helm und Flux bereits kennen.

![Bild](/img/blog/medium/cozypkg-how-we-simplified-local-development-with-helm-and-flux/cover.jpg)

Zunächst stelle ich Cozystack kurz vor, denn das ist für den Kontext wichtig. Cozystack ist eine Cloud-Plattform, mit der Sie Managed Services betreiben und anbieten können — Datenbanken, VMs, Kubernetes-Cluster und mehr. Cozystack kümmert sich um den gesamten Lebenszyklus jedes Dienstes.

Cozystack stellt zahlreiche Infrastrukturdienste bereit, dazu eine Schnittstelle, über die man sie per Kubernetes-API anfordert. Jeder Dienst startet mit fertigen Konfigurationen, integriertem Monitoring und Alerts. Manche Dienste sind IaaS (etwa Managed Kubernetes und VMs), andere PaaS (DBaaS, Queues, S3-Buckets und so weiter).

![Bild](/img/blog/medium/cozypkg-how-we-simplified-local-development-with-helm-and-flux/01.png)

Die Plattform selbst baut auf Kubernetes auf und nutzt dazu eine ganze Reihe freier bzw. quelloffener Cloud-nativer Komponenten. Dazu gehören Kubernetes-Operatoren, ein Storage-System, eine Netzwerk-Fabric und ein eigenes Image für Talos Linux mit festgelegter Kernel-Version und vorab geladenen Modulen, das den stabilen Betrieb aller Komponenten garantiert.

![Bild](/img/blog/medium/cozypkg-how-we-simplified-local-development-with-helm-and-flux/02.png)

Für die Auslieferung dieser Komponenten sorgt Flux. In der Praxis nutzt die Plattform nur den Helm Controller von Flux, der Helm-Charts über Custom Resources vom Typ `HelmRelease` installiert.

Zwar hat jeder Dienst einen eigenen CRD-Kind, doch unter der Haube ist jeder davon nur ein isoliertes Helm-Chart, das die Benutzerschnittstelle (UI wie API) zum Anlegen von Ressourcen definiert.

Unsere Charts teilen wir in drei Kategorien ein:

- [Core-Charts](https://github.com/cozystack/cozystack/tree/main/packages/core) sind die grundlegenden Bausteine der Plattform, die ihre Logik festlegen.
Mit ihnen werden alle anderen Charts installiert, getestet und konfiguriert.
Das zentrale Chart `platform` enthält die Flux-Einstellungen und wird jede Minute abgeglichen, sodass es sich an Änderungen im Cluster anpasst.
- [System-Charts](https://github.com/cozystack/cozystack/tree/main/packages/system) sind Komponenten, die nur einmal pro Cluster installiert werden: CSI, CNI, KubeVirt, verschiedene Operatoren, Cluster API und so weiter.
- [Apps-Charts](https://github.com/cozystack/cozystack/tree/main/packages/apps) sind Charts auf Tenant-Ebene, die Endnutzer in ihren eigenen Namespaces installieren. Sie geben in `values.yaml` nur die unbedingt nötigen Parameter frei und nutzen die [Cozystack API](/de/blog/2024/11/cozystack-v0-18-oeffentlicher-api-server-metriken-logs-tenant-cluster/), um höherstufige Kubernetes-Ressourcen anzulegen. Diese erzeugen ihrerseits niedrigstufige Custom Resources (CRs) für Kubernetes-Operatoren, die schließlich die eigentlichen Anwendungen starten und verwalten.

Mit diesem Schema haben wir einen einfachen und einheitlichen Weg, nahezu jede Anwendung zu beschreiben. Er eignet sich sowohl für die Cluster-Konfiguration als auch für den Bau unserer eigenen Kubernetes-Distribution.

## Cozy Flow: Wie die Entwicklung von Cozystack organisiert ist

In Cozystack liegen alle Komponenten in einem einzigen Repository, das ihre gemeinsame Konfiguration und ihr Templating enthält.
Damit die Pflege schmerzfrei bleibt, folgen wir einigen Prinzipien. Das wichtigste lautet: Jede Komponente ist ein Helm-Chart.

Für Systemkomponenten verwenden wir das Muster des *Umbrella-Charts*: Das Chart jeder Komponente hat genau eine Abhängigkeit, nämlich das Upstream-Chart des Projekts. Dieses Upstream-Chart nehmen wir direkt in das Cozystack-Repository auf, statt auf ein externes Repository zu verweisen. So können wir es bei Bedarf im laufenden Betrieb patchen und Konfigurationswerte auf einer höheren Ebene überschreiben.

Eine typische Komponente ist so aufgebaut:

```
.
├── Chart.yaml           # Chart definition and parameter docs
├── Makefile             # Common targets for local dev
├── charts               # Vendored upstream charts
├── images               # Dockerfiles / image build context
├── patches              # Optional patches for upstream
├── templates            # Extra manifests layered on top
├── values.yaml          # Our default overrides
└── values.schema.json   # JSON Schema for validation + UI hints
```

Dockerfiles können direkt im Chart-Verzeichnis liegen. Nach dem Bau eines Images werden Image-Pfad und Digest automatisch in die `values.yaml` der Komponente eingetragen.

Außerdem gibt es ein `Makefile` mit Standard-Targets, die die Arbeitsabläufe der Entwickler beschleunigen:

```
make update  # Pull the latest upstream chart & versions
make image   # Build Docker images used by the package
make show    # helm template (render manifests)
make diff    # Diff rendered output vs live cluster objects
make apply   # Install/upgrade the HelmRelease into the cluster
```

Ein Entwickler kann also in wenigen Sekunden ein Chart aktualisieren, sein Image bauen, den Diff prüfen und für Integrationstests in einen Cluster ausrollen.

> *Das Muster show / diff / apply tauchte zuerst in* [*Ksonnet*](https://github.com/ksonnet/ksonnet/blob/master/docs/concepts.md) *auf und lebt in Jsonnet-Werkzeugen wie Qbec und Grafana Tanka weiter. Wir haben die besten Teile übernommen, aber bei Helm bleiben, das in der Kubernetes-Welt deutlich verbreiteter ist.*

Nach dem Test wird die Änderung committet, und der Reviewer kann die gerenderten Manifeste im PR begutachten.
Für ein Release packen wir alle Helm-Charts in ein Container-Image und lassen die Tests laufen. Sind sie grün, wird eine Distribution veröffentlicht, die sich auf anderen Clustern installieren lässt.

## Technische Umsetzung

Intern sind all diese Makefiles recht einfach. Ursprünglich war jedes `make`-Target ein dünnes Shell-Skript: Es las Daten aus den Flux-CRs im Cluster, machte daraus eine `values.yaml` und rief dann Helm auf.

Wir nutzten das Plugin [helm-diff](https://github.com/databus23/helm-diff), das übersichtlich anzeigt, was sich im Cluster ändern würde. Ein weiteres Skript, [fluxcd-kustomize.sh](https://github.com/cozystack/cozystack/blob/release-0.31/scripts/fluxcd-kustomize.sh), bearbeitete die Ausgabe nach und fügte Flux-Annotationen hinzu, damit `helm diff` nur echte Änderungen anzeigte.

Irgendwann wollten wir ein einziges Werkzeug, das all das erledigt.
Hier kommt `cozyhr` ins Spiel — ein winziges Go-Binary (5-mal kleiner als `kubectl`!), das die Funktionen mehrerer Werkzeuge bündelt: Helm, `helm-diff`, die `flux`-CLI, `kubectl` und unseren eigenen Flux-Postprozessor.

![Bild](/img/blog/medium/cozypkg-how-we-simplified-local-development-with-helm-and-flux/03.png)

`cozyhr` ist auf die *lokale* Chart-Entwicklung ausgerichtet und eng mit Flux integriert.
Standardmäßig wird angenommen, dass Sie es im Chart-Verzeichnis aufrufen.

Hier die Liste aller verfügbaren `cozyhr`-Befehle:

```
$ cozyhr --help
Cozy wrapper around Helm and Flux CD for local development
```

```
Usage:
  cozyhr [command]
Available Commands:
  apply       Upgrade or install the HelmRelease and sync status
  completion  Generate shell‑autocomplete script
  delete      Uninstall the release
  diff        Show live vs desired manifests
  get         Get one or many HelmReleases
  list        List HelmReleases
  reconcile   Trigger Flux reconciliation
  resume      Resume a suspended release
  show        Render manifests (helm template)
  suspend     Suspend a release (Flux stops reconciling)
  version     Print version
```

Wenn Sie lokale Änderungen ausrollen, setzt `cozyhr` automatisch `suspend: true` im `HelmRelease`, um ein Wettrennen mit Flux zu vermeiden. Um Flux wieder zu aktivieren, führen Sie `cozyhr resume` aus.

Wir wollten auch die Verarbeitung der Charts verbessern. Deshalb kann `cozyhr` korrekte `conditions` in den Status von `HelmRelease`-Ressourcen schreiben, sodass abhängige Releases nicht mehr auf Flux warten müssen und sofort den richtigen Status erhalten.

> *Solche zusammengesetzten Charts nutzen wir, um Ressourcen in Tenant-Cluster auszurollen. Ein einzelnes* `HelmRelease` *kann zum Beispiel eine ganze Reihe untergeordneter Releases erzeugen, die Komponenten im Cluster des Nutzers installieren.*

## Ausblick

Vielleicht fragen Sie sich: „Warum heißt das Werkzeug nicht `cozyctl`?“

Die Antwort: Cozystack versteht sich als Plattform, die höherstufige Ressourcen bereitstellt, etwa `kind: Kubernetes`, `kind: Postgres` und `kind: VirtualMachine`. Endnutzer arbeiten mit der höherstufigen API und müssen Helm nie anfassen. Deshalb haben wir `cozyctl` für ein künftiges Werkzeug reserviert, das sich an genau diese Ressourcen richtet. `cozyhr` bleibt dagegen bewusst auf niedriger Ebene und ist vor allem für Entwickler gedacht, die Helm und Flux in ihren eigenen Projekten einsetzen.

Derzeit modularisieren wir Cozystack intensiv und wollen das Framework so erweitern, dass Sie Ihr eigenes Repository einbinden und auf Basis von Cozystack Managed Services anbieten können.
`cozyhr` ist einer der Schritte hin zu einem Beispiel-Repository und einem fertigen Entwicklungsablauf für Cozystack-Plugins.

## Fazit

Mit `cozyhr` bündeln wir unsere Erfahrung bei der Beschleunigung der Entwicklung in einem einzigen Werkzeug und teilen unseren Ansatz mit der Community.

Feedback und Pull Requests sind willkommen: [https://github.com/cozystack/cozyhr](https://github.com/cozystack/cozyhr)

*Viel Spaß beim Coden — und bleiben Sie cozy!*

## Werden Sie Teil der Cozystack-Community

- [Telegram](https://t.me/cozystack)
- [Slack](https://kubernetes.slack.com/archives/C06L3CPRVN1) (im [Kubernetes Slack](https://slack.kubernetes.io/))
- [Kalender der Community-Meetings](https://calendar.google.com/calendar?cid=ZTQzZDIxZTVjOWI0NWE5NWYyOGM1ZDY0OWMyY2IxZTFmNDMzZTJlNjUzYjU2ZGJiZGE3NGNhMzA2ZjBkMGY2OEBncm91cC5jYWxlbmRhci5nb29nbGUuY29t)

## Siehe auch

- [How Cozystack Was Born: The Philosophy Behind Its Architecture](https://t.me/aenix_io/219)
- [Wie wir in Cozystack einen dynamischen Kubernetes-API-Server für den API Aggregation Layer gebaut haben](/de/blog/2024/12/dynamischer-kubernetes-api-server-api-aggregation-layer-cozystack/)
- [DIY: Create Your Own Cloud with Kubernetes (3-part series)](https://blog.aenix.io/diy-create-your-own-cloud-with-kubernetes-part-1-7a692c37f0a8)
- [Cozystack joins the CNCF Sandbox](https://t.me/aenix_io/192)
- [Cozystack Recognized in CNCF’s CNAI Landscape!](/de/blog/2025/05/cozystack-cncf-cloud-native-ai-landscape/)
- [Talos Linux einfach installieren: auf jeder Maschine, bei jedem Anbieter](/de/blog/2025/04/talos-linux-installieren-beliebige-maschine-beliebiger-anbieter/)
- [Die Evolution von Virtualisierungsplattformen: der Aufstieg der Managed Services und der Vorsprung lokaler Anbieter gegenüber Hyperscalern](/de/blog/2025/06/evolution-virtualisierungsplattformen-managed-services-lokale-anbieter/)

## Vorträge von Andrei Kvapil

- [GPU-Powered AI on VMs, Kubernetes & Bare Metal with Cozystack](https://www.youtube.com/watch?v=slQxsj6Oj4M)
- [Journey to Stable Infrastructures with Talos Linux & Cozystack | Andrei Kvapil | SREday London 2024](https://www.youtube.com/watch?v=uhXujtTzG44)
- [Talos Linux: You don’t need an operating system, you only need Kubernetes / Andrei Kvapil](https://www.youtube.com/watch?v=9CIMTum9bTA)
- [Comparing GitOps: Argo CD vs Flux CD, with Andrei Kvapil | KubeFM](https://www.youtube.com/watch?v=4RVe32xRITo)
- [Cozystack on Talos Linux](https://www.youtube.com/watch?v=s79VqXu-eG4)
- [Kubernetes is the new Skynet or the rise of Kubernetes automation: CNCF webinar](https://www.youtube.com/watch?v=9LSwnr31t7Y)

Von [Andrei Kvapil](https://medium.com/@kvaps) am [18. Juni 2025](https://medium.com/p/003c8ed839ca).

[Kanonischer Link](https://medium.com/p/003c8ed839ca)

Exportiert von [Medium](https://medium.com) am 5. Oktober 2026.
