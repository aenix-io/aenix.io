---
title: "Betrugserkennung selbst gebaut mit Cozystack: ein Legacy-Kartenswitch, GitOps, ein LLM und Managed Services"
seo_title: "Cozystack-Workshop: Betrugserkennung für Kartenzahlungen"
description: "Ein zweistündiger Cozystack-Workshop: Betrugserkennung in Echtzeit rund um einen Legacy-Switch mit Kafka, Redis, PostgreSQL, Flux, ClickHouse und lokalem LLM."
slug: "cozystack-workshop-betrugserkennung-kartenzahlungen"
date: "2026-11-26"
cover_image: "/img/blog/covers/de/cozystack-workshop-betrugserkennung-kartenzahlungen.jpg"
author: "Timur Tukaev"
type: "tutorial"
topics: ["Cozystack", "Kubernetes", "Financial Services", "KubeVirt", "Platform Engineering", "AI/ML"]
language: "de"
hreflang_en: "/blog/2026/11/cozystack-fraud-detection-workshop/"
primary_keyword: "Cozystack Workshop"
keywords: ["Cozystack Workshop", "Betrugserkennung in Echtzeit", "Kartenbetrug erkennen Kubernetes", "Stand-in-Processing", "Kafka auf Kubernetes", "PostgreSQL Failover", "KubeVirt Live-Migration", "Flux GitOps", "ClickHouse Kafka-Engine", "lokales LLM llama.cpp", "HorizontalPodAutoscaler Kafka-Partitionen"]
direct_answer: "**In diesem zweistündigen Hands-on-Workshop entsteht auf Cozystack eine Echtzeit-Betrugserkennung für Kartenzahlungen rund um einen Legacy-Zahlungsswitch.** Der Switch läuft unverändert in einer virtuellen KubeVirt-Maschine und schickt jede Zahlung an Kafka; ein Scoring-Service in einem Managed-Kubernetes-Cluster prüft sie gegen die jüngste Kartenhistorie in Redis und antwortet innerhalb von 400 ms, sonst entscheidet der Switch selbst (Stand-in-Processing). Ein Journal läuft über Kafka nach PostgreSQL und in ein Dashboard, und ein kleines Sprachmodell im selben Cluster erklärt jede Ablehnung. Alle Managed Services werden per Git und Flux aus dem Cozystack-Katalog bestellt, Analysten bekommen ClickHouse und einen S3-Bucket, und im letzten Teil übersteht das System zehnfachen Traffic, den Ausfall des PostgreSQL-Primary und eine Live-Migration der Switch-VM."
quick_facts:
  - label: "Format"
    value: "Hands-on-Workshop in Textform, etwa zwei Stunden plus eine halbe Stunde Vorbereitung, komplett im Terminal"
  - label: "Voraussetzungen"
    value: "Cozystack 1.7 oder neuer mit Plattform-Admin-Rechten; kubectl, virtctl, git und curl auf dem eigenen Rechner"
  - label: "Genutzte Managed Services"
    value: "Kubernetes, Kafka (KRaft), Redis, PostgreSQL (CloudNativePG), ClickHouse, S3-Bucket, eine KubeVirt-VM"
  - label: "Sprachmodell"
    value: "Qwen2.5 0.5B Instruct auf llama.cpp, nur CPU, im eigenen Cluster des Tenants"
  - label: "Ressourcen unter Spitzenlast"
    value: "Etwa 10 GiB RAM und rund 20 vCPU für das gesamte System"
  - label: "Materialien"
    value: "github.com/aenix-org/cozystack-workshop, Ordner fraud/, auf Englisch und Russisch"
faq:
  - q: "Was brauche ich, um den Workshop selbst durchzuführen?"
    a: "Eine Cozystack-Installation ab Version 1.7, auf der Sie Plattform-Admin-Rechte haben, die StorageClass replicated und das VM-Image ubuntu-24.04 (beides gehört zur Standardinstallation) sowie kubectl, virtctl, git und curl auf Ihrem Rechner. Die Vorbereitung dauert etwa eine halbe Stunde, der Workshop selbst rund zwei Stunden."
  - q: "Was ist Stand-in-Processing?"
    a: "So bleibt die Kartenverarbeitung in Betrieb, wenn die Betrugsprüfung zu langsam antwortet. Antwortet der Scoring-Service nicht innerhalb von 400 ms, entscheidet der Switch selbst nach seiner fest eingebauten Regel. Zahlungen laufen weiter, doch in dieser Zeit können betrügerische Zahlungen ungeprüft durchgehen."
  - q: "Verlassen Kartendaten den Cluster, wenn das Sprachmodell eine Ablehnung erklärt?"
    a: "Nein. Der Explainer ist Qwen2.5 0.5B Instruct auf llama.cpp, läuft auf einer gewöhnlichen CPU im eigenen Kubernetes-Cluster des Tenants neben den anderen Services und ruft keine externe API auf."
  - q: "Warum skaliert der Scorer nicht über acht Replikas hinaus?"
    a: "Das Topic auth.requests hat acht Partitionen, und innerhalb einer Kafka-Consumer-Group liest jede Partition zu jedem Zeitpunkt genau ein Consumer. Jede Replika ab der neunten geht leer aus und bleibt untätig. Die Grenze wurde beim Anlegen des Topics festgelegt."
  - q: "Was passiert mit den Zahlungen, wenn der PostgreSQL-Primary ausfällt?"
    a: "CloudNativePG befördert die Hot-Replica innerhalb von Sekunden. Der Switch spricht nie direkt mit der Datenbank; sein Journal wartet in Kafka, und der Service cases schreibt den Rückstand, sobald die Datenbank wieder erreichbar ist. Die Abgleichzeile im Dashboard steht innerhalb einer Minute wieder auf missing: 0."
  - q: "Unterbricht eine Live-Migration der Switch-VM den Zahlungsverkehr?"
    a: "Nein. Der Arbeitsspeicher wird auf den neuen Knoten kopiert, während die VM weiterläuft, die Disk bleibt auf repliziertem Speicher, den beide Knoten erreichen, und die IP-Adresse ändert sich nicht. Für ein paar Sekunden bleiben einige Autorisierungen unbeantwortet, die Terminals senden sie mit derselben Transaktions-ID erneut; Terminalfehler bleiben bei null."
quiz:
  title: "Testen Sie sich: Betrugserkennung auf Cozystack"
  questions:
    - q: "Wie lange wartet der Switch auf den Scoring-Service, bevor er selbst entscheidet?"
      options:
        - { text: "100 ms", correct: false }
        - { text: "400 ms", correct: true }
        - { text: "2 Sekunden", correct: false }
      explanation: "Antwortet der Scorer nicht innerhalb von 400 Millisekunden, greift der Switch auf seine fest eingebaute Regel zurück. Banken nennen das Stand-in-Processing."
    - q: "Was geschah, nachdem Redis von Hand gelöscht wurde, während sein Manifest noch in Git lag?"
      options:
        - { text: "Nichts, es blieb gelöscht, bis es jemand bemerkte", correct: false }
        - { text: "Flux hat es nach etwa einer Minute neu angelegt", correct: true }
        - { text: "Cozystack hat es in der nächsten Nacht aus einem Backup wiederhergestellt", correct: false }
      explanation: "Flux vergleicht einmal pro Minute Git mit der Plattform und legt alles Fehlende neu an, deshalb halten manuelle Änderungen gegen das Repository nicht lange."
    - q: "Warum leisteten zwölf Scorer-Replikas nicht mehr als acht?"
      options:
        - { text: "Die CPU-Quota des Tenants hat die zusätzlichen Pods gebremst", correct: false }
        - { text: "Der HorizontalPodAutoscaler hat die zusätzlichen Replikas ignoriert", correct: false }
        - { text: "Das Topic auth.requests hat acht Partitionen", correct: true }
      explanation: "Innerhalb einer Consumer-Group liest jede Partition genau ein Consumer, eine neunte Replika hat also keine Partition zum Lesen."
    - q: "Warum ging beim Ausfall des PostgreSQL-Primary kein Journaleintrag verloren?"
      options:
        - { text: "Das Journal in Kafka ist die maßgebliche Quelle, die Datenbank holt nur auf", correct: true }
        - { text: "Der Switch hat die Einträge im eigenen Speicher gepuffert", correct: false }
        - { text: "Das Dashboard hat die fehlenden Einträge selbst geschrieben", correct: false }
      explanation: "Der Service cases hielt die Nachrichten in Kafka zurück, solange die Datenbank weg war, und schrieb sie alle, sobald der neue Primary bereit war."
    - q: "Warum ist ClickHouse Keeper im Analytics-Manifest abgeschaltet?"
      options:
        - { text: "Keeper ist im Cozystack-Katalog nicht verfügbar", correct: false }
        - { text: "Es gibt nur eine Replika, und Keeper braucht man erst, wenn sich mehrere Replikas abstimmen müssen", correct: true }
        - { text: "Er verträgt sich nicht mit der Kafka-Table-Engine", correct: false }
      explanation: "Keeper sorgt dafür, dass sich mehrere ClickHouse-Replikas einigen. Bei einer einzigen Replika verschwendet er nur Ressourcen, wie die ClickHouse-Dokumentation von Cozystack erklärt."
---

Dies ist keine Fallstudie, sondern ein Workshop in Form eines Blogposts. Sie können ihn auf Ihrer eigenen Cozystack-Installation nachvollziehen, um zu sehen, wie die Plattform funktioniert und wo sie in Ihre eigenen Projekte passen könnte. In rund zwei Stunden, ohne das Terminal zu verlassen, bauen wir ein System, das Kartenbetrug in Echtzeit erkennt, und bescheren ihm anschließend einen richtig schlechten Tag: zehnfacher Traffic, ein ausgefallener primärer Datenbankserver und die Live-Migration einer virtuellen Maschine, durch die gerade Zahlungen laufen.

Alles läuft auf [Cozystack](https://cozystack.io), einer Open-Source-Plattform zum Aufbau von Clouds und einem CNCF-Incubating-Projekt. Cozystack macht aus Ihren Servern eine fertige Cloud mit Managed Kubernetes, Datenbanken, Message Brokern, GPU as a Service und mehr.

Eine Vorbemerkung: Die Betrugserkennung hier ist ein Lehrbeispiel, kein Produkt. Sie liefert der Geschichte den roten Faden; eigentlich geht es darum, die Plattform aus der Nähe kennenzulernen und zu prüfen, wie sie zu Ihren eigenen Aufgaben passt.

## Was wir bauen

Wenn Sie im Geschäft mit Karte zahlen, fragt das Terminal bei der Bank, die die Karte ausgegeben hat, ob die Zahlung durchgehen darf. Das Programm, das antwortet, heißt Switch. In vielen Banken ist das eine Legacy-Anwendung, die seit Jahren auf derselben virtuellen Maschine läuft und die niemand anfassen möchte (never touch a running system). Unserer ist da keine Ausnahme. Er genehmigt jede Zahlung unter 5.000 Dollar und macht Betrügern damit das Leben leicht.

Den Switch schreiben wir natürlich nicht neu. Stattdessen bauen wir eine Zahlungsprüfung um ihn herum. So sieht das ungefähr aus:

{{< figure src="fraud-scheme.png" alt="Architektur: Kartenterminals schicken Zahlungen an eine Legacy-Switch-VM, der Switch veröffentlicht sie in Kafka, ein Scorer in Kubernetes prüft die Kartenhistorie in Redis und antwortet über Kafka innerhalb von 400 ms; ein Journal läuft über Kafka zum Service cases, nach PostgreSQL und ins Dashboard, und ein kleines Sprachmodell erklärt Ablehnungen" caption="Der Switch bleibt, wie er ist; alles andere wird um ihn herum gebaut" >}}

Der Switch schickt jede Zahlung an Kafka. Der Scoring-Service (im Code `scorer`) prüft sie gegen die jüngste Zahlungshistorie der Karte, die in Redis liegt, und schreibt seine Entscheidung zurück nach Kafka. Jede Entscheidung, egal wer sie getroffen hat, trägt der Switch in ein Journal ein, und der Service `cases` überträgt jeden Eintrag nach PostgreSQL, von wo er im Dashboard des Betrugsteams erscheint. Außerdem erklärt ein Sprachmodell in verständlichen Worten, warum eine Zahlung abgelehnt wurde. Der First-Level-Support braucht das, denn Kunden rufen bei der Bank an und wollen wissen, warum ihre Karte nicht funktioniert hat, und jemand muss ihnen antworten können.

Auf drei Eigenschaften dieses Aufbaus kommt es an.

Erstens wartet der Switch nie länger, als er es sich leisten kann. Hat der Scorer nach 400 Millisekunden nicht geantwortet, entscheidet der Switch selbst nach der fest eingebauten Logik. Banken nennen das Stand-in-Processing, und genau das unterscheidet eine langsame Betrugsprüfung von einem Ausfall der Verarbeitung. Ist die Prüfung zu langsam, rutschen in Spitzenzeiten betrügerische Zahlungen durch. Steht die Verarbeitung, geht gar nichts mehr durch, auch nicht der Wocheneinkauf ehrlicher Kunden.

Zweitens wird das Journal unabhängig davon geschrieben, wer entschieden hat. So lässt sich jederzeit vergleichen, was der Switch den Terminals geantwortet hat und was in der Datenbank gelandet ist. Beides muss übereinstimmen.

Drittens bleiben die Kartendaten in unserem Cluster. Selbst das Sprachmodell, das die Erklärungen für den Support schreibt, läuft im Cluster neben den anderen Services und geht nie ins Internet.

## Materialien und Dokumentation

Die vollständige Anleitung mit allen Befehlen und Dateien liegt im öffentlichen Repository [aenix-org/cozystack-workshop](https://github.com/aenix-org/cozystack-workshop) im Ordner [`fraud/`](https://github.com/aenix-org/cozystack-workshop/tree/master/fraud). Es gibt sie [auf Englisch](https://github.com/aenix-org/cozystack-workshop/blob/master/fraud/README.md) und [auf Russisch](https://github.com/aenix-org/cozystack-workshop/blob/master/fraud/README.ru.md). Im selben Repository finden Sie Material aus unseren anderen Workshops und Labs:

- [`en/laptop/`](https://github.com/aenix-org/cozystack-workshop/tree/master/en/laptop) ist ein Workshop zur Migration einer virtuellen Maschine von VMware nach Cozystack;
- [`en/laptop/labs/`](https://github.com/aenix-org/cozystack-workshop/tree/master/en/laptop/labs) enthält sechzehn kurze Labs, vom eigenen Kubernetes-Cluster aus dem Katalog bis zu OpenBao, ClickHouse, MongoDB und der Live-Migration virtueller Maschinen;
- [`fraud/app/`](https://github.com/aenix-org/cozystack-workshop/tree/master/fraud/app) enthält den Quellcode aller Teile des Betrugssystems, darunter die [Scoring-Regeln](https://github.com/aenix-org/cozystack-workshop/blob/master/fraud/app/internal/scoring/rules.go), mit denen sich am schönsten experimentieren lässt.

Unterwegs stützen wir uns auf die [Cozystack-Dokumentation](https://cozystack.io/docs/v1.7/).

Alle Befehle in diesem Beitrag laufen im Ordner `fraud/` des geklonten Repositorys. In den Terminalaufnahmen sehen Sie stattdessen `~/workshop`: So hieß der Ordner in der Umgebung, in der ich alles aufgezeichnet habe.

## Die Umgebung vorbereiten

Dieser Beitrag ist aus einem Workshop entstanden, den wir bereits in mehreren Städten durchgeführt haben, und dort hatte unser Team alles vorbereitet. Jeder Teilnehmer bekam einen fertigen Tenant mit laufender Legacy-Switch-VM, einen Kubernetes-Cluster, einen GitLab-Account und einen Zugang zu einer Bastion-VM mit allen nötigen Werkzeugen (virtctl, kubectl und so weiter). Hier übernehmen Sie diese Vorbereitung selbst, auf Ihrem eigenen Cozystack-Cluster und Ihrem eigenen Laptop. Das dauert etwa eine halbe Stunde.

Sie brauchen Cozystack 1.7 oder neuer und Plattform-Admin-Rechte, denn wir legen einen Tenant an. Wenn Sie noch kein Cozystack haben, beginnen Sie mit der [Installationsanleitung](https://cozystack.io/docs/v1.7/getting-started/). Im Cluster müssen die StorageClass `replicated` und das Image `ubuntu-24.04` im VM-Image-Katalog vorhanden sein; eine Standardinstallation von Cozystack bringt beides mit. Auf Ihrem Rechner brauchen Sie `kubectl`, `virtctl`, `git` und `curl`. Ich habe dem Tenant eine großzügige Quota von 160 vCPU und 96 GiB Arbeitsspeicher gegeben. Das gesamte System braucht selbst unter Spitzenlast etwa 10 GiB RAM und rund 20 vCPU.

### Der Tenant und eine Arbeitskopie der Manifeste

Alle YAML-Manifeste für die Vorbereitung liegen in [`fraud/instructor/`](https://github.com/aenix-org/cozystack-workshop/tree/master/fraud/instructor). Statt eines Tenant-Namens enthalten sie den Platzhalter `dallasXX`. Wählen Sie also zuerst einen Namen und erzeugen Sie eine Kopie der Manifeste, in der der Platzhalter ersetzt ist. In den Beispielen heißt der Tenant `fraud1`, sein Namespace nach Cozystack-Konvention `tenant-fraud1`:

```bash
git clone https://github.com/aenix-org/cozystack-workshop.git
cd cozystack-workshop/fraud
export NAME=fraud1 T=tenant-fraud1
mkdir -p ~/fraud-env
for f in instructor/*.yaml; do
  sed "s/tenant-dallasXX/$T/g; s/dallasXX/$NAME/g" "$f" > ~/fraud-env/$(basename "$f")
done
```

Der Tenant wird im Root-Tenant `tenant-root` angelegt. Ein eigenes Monitoring braucht er in dieser Anleitung nicht, also schalten wir es ab und sparen Arbeitsspeicher. Das geht im Cozystack-Dashboard oder mit einem einzigen Befehl als Admin:

```bash
kubectl apply -f - <<EOF
apiVersion: apps.cozystack.io/v1alpha1
kind: Tenant
metadata: {name: $NAME, namespace: tenant-root}
spec:
  monitoring: false
  resourceQuotas: {cpu: "160", memory: 96Gi}
EOF
kubectl -n tenant-root get tenants.apps.cozystack.io $NAME -w
```

Sobald der Tenant `READY True` zeigt, legen wir für ihn einen eigenen kubectl-Kontext an. Alle Befehle in diesem Beitrag, die mit der Plattform sprechen, laufen über den Kontext `tenant`. Am einfachsten kopiert man dafür den Admin-Kontext und setzt den Namespace des Tenants als Standard:

```bash
kubectl config set-context tenant \
  --cluster=$(kubectl config view --minify -o jsonpath='{.contexts[0].context.cluster}') \
  --user=$(kubectl config view --minify -o jsonpath='{.contexts[0].context.user}') \
  --namespace=$T
```

### Der Switch und ein eigener Cluster

Jetzt legen wir die Switch-VM und den Cluster an. `switch-vm.yaml` beschreibt die virtuelle Maschine des Switches. Ihre Disk entsteht aus dem Image `ubuntu-24.04`, und beim ersten Start lädt cloud-init den Service `auth-switch` herunter, installiert und startet ihn. Am Ende derselben Datei steht der Service `switch`, über den die Terminals die Maschine erreichen. `cluster.yaml` bestellt aus dem Cozystack-Katalog einen Managed-Kubernetes-Cluster namens `fraud`. Seit Version 1.7 beschreibt eine eigene Anwendung `KubernetesNodes` die Worker-Knoten eines Clusters, und unsere Datei fordert einen Knoten an, zu dem das Autoscaling unter Last einen zweiten hinzufügen darf:

```bash
kubectl --context tenant apply -f ~/fraud-env/switch-vm.yaml -f ~/fraud-env/cluster.yaml
kubectl --context tenant get vminstances,kubernetes -w
```

Die VM startet in ein paar Minuten, der Cluster braucht etwas länger. Sobald er `READY True` zeigt, holen wir seine kubeconfig aus dem Secret, das Cozystack anlegt, und nennen den Kontext `fraud`:

```bash
kubectl --context tenant get secret kubernetes-fraud-admin-kubeconfig \
  -o jsonpath='{.data.admin\.conf}' | base64 -d > ~/fraud-env/fraud.kubeconfig
KUBECONFIG=~/fraud-env/fraud.kubeconfig kubectl config rename-context \
  "$(KUBECONFIG=~/fraud-env/fraud.kubeconfig kubectl config current-context)" fraud
export KUBECONFIG=~/.kube/config:~/fraud-env/fraud.kubeconfig
kubectl --context fraud get nodes
```

Dieselbe Datei können Sie auch in der Cozystack-Konsole auf der Seite des Clusters unter Secrets herunterladen. Sie verweist auf die Cluster-API unter einer externen Adresse wie `https://kubernetes-fraud.<Domain des Tenants>` und funktioniert deshalb auch von Ihrem eigenen Rechner aus.

### Traffic und Modell

In den verschachtelten Cluster kommen noch zwei Dateien. `terminals.yaml` legt den Namespace `fraud` an und darin die ConfigMap `endpoints` mit den Adressen von Kafka, Redis, PostgreSQL und dem Switch in Ihrem Tenant; wegen dieser Adressen haben wir vorhin den Tenant-Namen eingesetzt. Dazu kommen die ConfigMap `traffic` mit zwanzig Zahlungen pro Sekunde und der Pod `terminals`, der die Kassen der Geschäfte simuliert. `prepull.yaml` startet einen einmaligen Job, der das llama.cpp-Image vorab auf den Knoten lädt, damit Sie in Teil zwei nicht darauf warten müssen.

```bash
kubectl --context fraud apply -f ~/fraud-env/terminals.yaml -f ~/fraud-env/prepull.yaml
```

Unsere simulierten Terminals schicken sofort die ersten Zahlungen los, denn der Switch läuft ja schon und genehmigt vorerst alles.

### Ein Git-Repository und Flux

In Teil eins holt sich die Plattform die Beschreibungen unserer Services aus Git, deshalb legen wir das Repository am besten jetzt an. Geeignet ist jeder Git-Host, den der Cluster über HTTPS erreicht: GitLab, GitHub oder Gitea. Das Repository braucht einen Ordner `platform/`, und dort legen wir gleich die beiden Dateien ab, die wir eben von Hand angewendet haben. So findet Flux schon beim ersten Lauf in Git eine Beschreibung dessen, was bereits läuft, und löscht nichts, um den Cluster an das Repository anzugleichen.

```bash
git clone https://<your-git>/<you>/fraud-infra.git ~/fraud-infra
mkdir -p ~/fraud-infra/platform
cp ~/fraud-env/cluster.yaml ~/fraud-infra/platform/kubernetes.yaml
cp ~/fraud-env/switch-vm.yaml ~/fraud-infra/platform/switch-vm.yaml
cd ~/fraud-infra && git add platform && git commit -m "Initial infrastructure" && git push
```

Damit die Plattform das Repository lesen kann, legen Sie auf Ihrem Git-Host ein Token mit reinen Leserechten an. In GitLab genügt ein Deploy Token oder ein Project Access Token mit dem Scope `read_repository`. Dann legen Sie im Namespace des Tenants drei Flux-Objekte an: ein Secret mit dem Token, eine Quelle `GitRepository` und eine `Kustomization`, die den Ordner `platform/` anwendet. Flux selbst läuft bereits in der Plattform. Das Feld `serviceAccountName` verweist auf den Service Account, den Cozystack für jeden Tenant anlegt. Dadurch wendet Flux die Dateien mit den Rechten des Tenants an, nicht mit denen des Plattform-Admins, und kann nichts tun, was dem Tenant selbst nicht erlaubt ist.

```bash
kubectl --context tenant create secret generic git-flux --from-literal=username=<login> --from-literal=password=<token>
kubectl --context tenant apply -f - <<EOF
apiVersion: source.toolkit.fluxcd.io/v1
kind: GitRepository
metadata: {name: infra}
spec:
  interval: 1m
  url: https://<your-git>/<you>/fraud-infra.git
  ref: {branch: main}
  secretRef: {name: git-flux}
---
apiVersion: kustomize.toolkit.fluxcd.io/v1
kind: Kustomization
metadata: {name: platform}
spec:
  interval: 1m
  sourceRef: {kind: GitRepository, name: infra}
  path: ./platform
  prune: false
  targetNamespace: $T
  serviceAccountName: $T
EOF
kubectl --context tenant get kustomization platform
```

Zeigt `platform` den Status `READY True`, ist alles verbunden: Einmal pro Minute holt Flux den aktuellen Stand von `main` und wendet den Ordner `platform/` an.

### Das Dashboard des Betrugsteams

Das Betrugs-Dashboard ist eine Webseite, die wir in Teil zwei ausrollen. Am einfachsten öffnen Sie es über eine Portweiterleitung: Starten Sie `kubectl --context fraud -n fraud port-forward svc/dashboard 8080` und rufen Sie im Browser `http://localhost:8080` auf. Wenn Sie eine feste Adresse möchten, wie wir sie im Workshop hatten, tragen Sie Ihre Domain in `~/fraud-env/dashboard-ingress.yaml` ein und wenden die Datei über den Kontext `tenant` an: Sie veröffentlicht das Dashboard über den Ingress der Plattform mit einem Let's-Encrypt-Zertifikat. In diesem Beitrag verwende ich die Adresse meiner eigenen Umgebung, `https://fraud.austin03.workshop.aenix.io`; bei Ihnen ist es `localhost:8080` oder Ihre eigene Domain.

## Teil 0. Umschauen: ein Switch, der alles genehmigt

Nach der Vorbereitung haben wir zwei kubectl-Kontexte:

```
$ kubectl config get-contexts
CURRENT   NAME     CLUSTER    AUTHINFO      NAMESPACE
          fraud    fraud      fraud-admin   fraud
*         tenant   platform   austin03      tenant-austin03
```

Über den Kontext `tenant` sprechen wir mit der Cozystack-Plattform und bestellen virtuelle Maschinen, Datenbanken und den Cluster selbst. Über den Kontext `fraud` arbeiten wir mit dem verschachtelten Kubernetes-Cluster, in dem die Betrugsservices laufen werden. Sehen wir nach, was schon läuft:

```
$ kubectl --context tenant get vminstances,kubernetes
NAME     READY   AGE   VERSION
switch   True    26m   f379a04795e8

NAME    READY   AGE   VERSION
fraud   True    26m   7c18a8ec4e4d

$ kubectl --context tenant get resourcequota
NAME           REQUEST                                                         LIMIT                                                 AGE
tenant-quota   requests.cpu: 4525m/16, ...                                     limits.cpu: 30258m/160, limits.memory: 42104Mi/96Gi    29m

$ kubectl --context fraud -n fraud get pods
NAME                        READY   STATUS      RESTARTS   AGE
prepull-explainer-2s24n     0/1     Completed   0          23m
terminals-7cf5b9b59-6hfzv   1/1     Running     0          23m
```

Switch und Cluster sind da, ein Teil der Quota ist schon belegt, und im Namespace `fraud` läuft der Pod `terminals`. Er simuliert Geschäfte im ganzen Land und schickt dem Switch zwanzig Zahlungen pro Sekunde. Der Pod `prepull-explainer` im Status `Completed` stammt aus der Vorbereitung: Das ist der Job, der das llama.cpp-Image vorab auf den Knoten geladen hat.

Werfen wir jetzt einen Blick in die Switch-VM. Die Konsole öffnen Sie mit `virtctl --context tenant console vm-instance-switch` oder über die Schaltfläche auf der Seite der VM (Tab VNC) im Cozystack-Dashboard. Benutzername und Passwort, `ubuntu`/`ubuntu`, setzt cloud-init aus `switch-vm.yaml`; bleibt der Bildschirm leer, drücken Sie Enter. Sehen wir uns das Log des Switches an:

```
$ journalctl -u auth-switch --no-pager -n 3
Nov 23 03:28:34 switch auth-switch[650]: 5s: 100 authorizations, 0 declined, stand-in 0.0%, p99 0 ms
Nov 23 03:28:39 switch auth-switch[650]: 5s: 100 authorizations, 0 declined, stand-in 0.0%, p99 0 ms
```

In fünf Sekunden hat der Switch hundert Autorisierungen bearbeitet, keine abgelehnt und für jede null Millisekunden gebraucht. Er fragt niemanden und genehmigt alles bis 5.000 Dollar.

{{< figure src="ch0-lookaround.gif" alt="Terminalaufnahme: zwei kubectl-Kontexte, Switch-VM und Cluster fraud sind bereit, die Quota des Tenants, Terminals senden bereits Zahlungen" caption="Umschauen: beide Kontexte, Switch und Cluster sind da, und Zahlungen laufen bereits" >}}

Prüfen wir nun, ob betrügerische Zahlungen einen solchen Switch tatsächlich passieren. Im Ordner `fraud/manifests/` liegt ein Angriffsmanifest, das drei Maschen auf einmal fährt. Die erste ist Card Testing: Betrüger prüfen gestohlene Karten mit winzigen Zahlungen. Bei der zweiten bezahlt eine Karte, die eben noch in Lagos benutzt wurde, zwei Minuten später in Chicago, obwohl kein Mensch diese Strecke so schnell zurücklegen kann; das nennt man Impossible Travel. Bei der dritten probieren Betrüger nacheinander sechzig Kartennummern einer Bank durch und gehen dabei ihren BIN-Bereich ab.

```
$ kubectl --context fraud apply -f manifests/04-attack.yaml
job.batch/attack created

$ kubectl --context fraud -n fraud logs job/attack --tail=4
attack: impossible travel on card …4653 from Charlotte
attack: impossible travel on card …5504 from Chicago
5s: sent 30, approved 30, declined 0, errors 0, timeouts 0, p99 10.1 ms
5s: sent 21, approved 21, declined 0, errors 0, timeouts 0, p99 10.1 ms
```

Der Switch hat alle dreißig betrügerischen Zahlungen genehmigt, weil keine über 5.000 Dollar lag. Das ist unser Ausgangspunkt: Formal funktioniert das System, geschützt ist aber niemand.

Achten Sie in der Aufnahme des Angriffs auf die Spalte `approved`: Jede Zahlung wird genehmigt.

{{< figure src="ch0b-attack.gif" alt="Terminalaufnahme: Angriff auf den Switch ohne Betrugsprüfung, alle Zahlungen genehmigt" caption="Ein Angriff auf einen Switch ohne Prüfung: Jede Zahlung geht durch" >}}

## Teil 1. Infrastruktur in einem Git-Repository

Alles, was wir bei der Plattform bestellen, beschreiben wir in Dateien in Git. Repository und Flux haben wir bei der Vorbereitung verbunden, und sobald eine Änderung in `main` landet, wendet Flux sie etwa eine Minute später als Service Account des Tenants an. Der bestellte Service entsteht dann von selbst.

Ab jetzt arbeiten wir im Klon des Repositorys, `~/fraud-infra`, und bestellen drei Managed Services aus dem Cozystack-Katalog. Redis merkt sich die jüngste Aktivität jeder Karte: wie oft, wo und über welche Beträge mit ihr bezahlt wurde. Kafka transportiert die Anfragen des Switches, die Entscheidungen des Scorers und das Zahlungsjournal. PostgreSQL mit zwei Instanzen, einem Primary und einer Replika, speichert jede Transaktion und einen Eintrag zu jeder Prüfung.

Redis legen wir zuerst im Cozystack-Dashboard an. Dann übertragen wir dieselbe Deklaration nach Git, und von da an ist das Repository die maßgebliche Quelle. Das Formular im Dashboard fragt nach dem Namen `features`, einer Replika, einer Disk von `1Gi` auf Speicher vom Typ `replicated` und abgeschalteter Authentifizierung. In Git sieht das so aus:

```yaml
# platform/redis.yaml
apiVersion: apps.cozystack.io/v1alpha1
kind: Redis
metadata:
  name: features
spec:
  replicas: 1
  size: 1Gi
  storageClass: replicated
  authEnabled: false
```

Kafka und PostgreSQL schreiben wir direkt in YAML und halten uns an die Dokumentation ([Kafka](https://cozystack.io/docs/v1.7/applications/kafka/), [PostgreSQL](https://cozystack.io/docs/v1.7/applications/postgres/)). In Cozystack 1.7 läuft Kafka im KRaft-Modus ohne ZooKeeper, deshalb enthält die Deklaration nur den Broker und die Topics:

```yaml
# platform/kafka.yaml
apiVersion: apps.cozystack.io/v1alpha1
kind: Kafka
metadata:
  name: kafka
spec:
  kafka:
    replicas: 1
    size: 5Gi
    storageClass: replicated
    resourcesPreset: c1.small
  topics:
    - {name: auth.requests, partitions: 8, replicas: 1, config: {}}
    - {name: auth.decisions, partitions: 8, replicas: 1, config: {}}
    - {name: auth.journal, partitions: 8, replicas: 1, config: {}}
```

Beachten Sie, dass das Topic `auth.requests` acht Partitionen hat. Warum das wichtig ist, wird in Teil vier klar.

In der PostgreSQL-Deklaration fordern wir zwei Instanzen an, einen Benutzer `fraud` und eine Datenbank `fraud`, die ihm gehört. Ein Passwort müssen wir nicht setzen: Cozystack erzeugt es selbst und legt es im Secret `postgres-cases-credentials` ab, aus dem wir es in Teil zwei an die Services weitergeben.

```yaml
# platform/postgres.yaml
apiVersion: apps.cozystack.io/v1alpha1
kind: Postgres
metadata:
  name: cases
spec:
  replicas: 2
  size: 2Gi
  storageClass: replicated
  resourcesPreset: t1.micro
  users:
    fraud: {}
  databases:
    fraud:
      roles:
        admin: [fraud]
```

Wir fügen die Dateien dem Repository hinzu, pushen sie nach `main` und sehen zu, was auf der Plattform passiert:

```
$ kubectl --context tenant get kafka,redis,postgres
NAME    READY     AGE   VERSION
kafka   Unknown   42s   744a68a3a447

NAME       READY   AGE   VERSION
features   True    42s   a0db0b4ba6d4

NAME    READY     AGE   VERSION
cases   Unknown   42s   ebc4944b1a9e
```

{{< figure src="ch1a-order.gif" alt="Terminalaufnahme: Manifeste werden committet und nach Git gepusht, eine Minute später starten Kafka, Redis und PostgreSQL" caption="Services über Git bestellen: Push, und eine Minute später fahren die Ressourcen hoch" >}}

Redis war fast sofort da, PostgreSQL baut noch seinen Cluster auf, und Kafka kann deutlich länger brauchen als der Rest. Während sie starten, sehen wir uns an, was die Plattform aus unseren Deklarationen gemacht hat. Aus jeder wurde ein Helm-Release, und jedes Release hat wiederum Ressourcen für den Operator angelegt, der den jeweiligen Service betreibt. PostgreSQL betreibt der Operator CloudNativePG, der selbst entscheidet, welcher Pod Primary und welcher Replika ist:

```
$ kubectl --context tenant get hr
NAME                 AGE   READY   STATUS
kafka-kafka          6m    True    ...
kubernetes-fraud     ...
postgres-cases       ...

$ kubectl --context tenant get pods -l cnpg.io/cluster=postgres-cases -L role
NAME                            READY   STATUS      RESTARTS   AGE     ROLE
postgres-cases-1                1/1     Running     0          119s    primary
postgres-cases-1-initdb-kx66m   0/1     Completed   0          2m24s
postgres-cases-2-join-lkqts     1/1     Running     0          98s
```

Jetzt das anschaulichste GitOps-Experiment: Was passiert, wenn jemand von Hand etwas ändert, das in Git beschrieben ist? Wir löschen Redis und lassen seine Deklaration im Repository:

```
$ kubectl --context tenant delete redis features
redis.apps.cozystack.io "features" deleted

$ kubectl --context tenant get redis -w
NAME       READY     AGE    VERSION
           Unknown   292y   <unknown>     <-- das Objekt ist gelöscht
features   Unknown   0s     <unknown>     <-- ...und sofort neu angelegt
features   True      56s    a0db0b4ba6d4
```

Nach etwa einer Minute war Redis wieder da. Flux vergleicht einmal pro Minute den Stand in Git mit dem auf der Plattform und legt alles Fehlende neu an, deshalb halten manuelle Änderungen, die dem Repository widersprechen, nicht lange.

{{< figure src="ch1b-watch.gif" alt="Terminalaufnahme: von Hand gelöschtes Redis wird von Flux nach etwa einer Minute neu angelegt" caption="Von Hand gelöschtes Redis ist nach etwa einer Minute zurück" >}}

## Teil 2. Der Switch fragt nach, bevor er genehmigt

Die Datendienste stehen. Jetzt rollen wir drei Anwendungen in unserem eigenen Cluster aus: den Scorer selbst, den Service `cases`, der das Journal in die Datenbank schreibt, und das Betrugs-Dashboard. Alle drei sind bewusst einfach gehalten und ergeben zusammen ein abgespecktes Modell eines echten Betrugssystems.

Zuerst geben wir den Services das Datenbankpasswort. Cozystack hat es beim Anlegen von PostgreSQL erzeugt und auf der Plattform abgelegt, gebraucht wird es aber vom Service `cases` und vom Dashboard. Dieser Befehl kopiert das Passwort des Benutzers `fraud` aus dem Plattform-Secret in ein Secret `cases-db` im verschachtelten Cluster:

```bash
kubectl --context fraud -n fraud create secret generic cases-db \
  --from-literal=password="$(kubectl --context tenant get secret postgres-cases-credentials -o jsonpath='{.data.fraud}' | base64 -d)"
```

Jetzt können wir die Anwendungen ausrollen:

```
$ kubectl --context fraud apply -f manifests/02-scoring.yaml
deployment.apps/scorer created
deployment.apps/cases created
deployment.apps/dashboard created
service/dashboard created
```

Der Scorer weiß bereits, wo er Kafka, Redis und PostgreSQL findet: Ihre Adressen stehen in der ConfigMap `endpoints`, die wir bei der Vorbereitung angelegt haben. Die Services des Tenants sind aus dem verschachtelten Cluster unter ihren üblichen Namen erreichbar, weil der Cluster `fraud` im selben Netz läuft. Der Switch in der VM weiß dagegen noch nichts vom Scorer. Also öffnen wir wieder die VM-Konsole mit virtctl, geben dem Switch die Kafka-Adresse und starten ihn neu:

```bash
sudo sed -i 's#^KAFKA_BOOTSTRAP=.*#KAFKA_BOOTSTRAP=kafka-kafka-kafka-bootstrap:9092#' /etc/auth-switch/env
sudo systemctl restart auth-switch
journalctl -u auth-switch --no-pager -n 3
```

Der kurze Name des Brokers genügt, weil die Domain des Tenants in der DNS-Suchliste der VM steht und `kafka-kafka-kafka-bootstrap` deshalb zur richtigen Adresse aufgelöst wird.

```
switch started in SCORING mode
HTTP listening on :8080
5s: 111 authorizations, 0 declined, stand-in 0.0%, p99 272 ms
```

`SCORING mode` bedeutet, dass der Switch jetzt jede Zahlung an Kafka schickt und auf die Entscheidung des Scorers wartet; kommt nach 400 Millisekunden keine Antwort, entscheidet er selbst nach seiner alten Regel. In den ersten Sekunden ist die Latenz spürbar, weil die Verbindungen zu Kafka erst aufgebaut werden. Nach einer halben Minute hat sich alles eingependelt, wie die Metriken des Dashboards zeigen. Ich lese sie unter der Adresse meiner Umgebung; bei Ihnen ist es `http://localhost:8080/metrics` über die Portweiterleitung oder Ihre eigene Domain.

```
$ curl -s https://fraud.austin03.workshop.aenix.io/metrics | grep "^fraud_" | head -12
fraud_authorizations_per_second 9.7        # steigt noch auf ~20
fraud_declines_per_second 0.3
fraud_stand_in_ratio 0
fraud_decision_latency_p50_seconds 0.0117  # ~12 Millisekunden pro Entscheidung
fraud_transactions_stored 582
fraud_alerts_total 18
fraud_scorer_lag_messages 8
fraud_cases_lag_messages 6
fraud_journal_entries 588
fraud_journal_missing 6
```

Die Aufnahme zeigt die ganze Umstellung: Die Anwendungen werden ausgerollt, der Switch wechselt zu Kafka und arbeitet im Modus `SCORING`, die ersten Metriken erscheinen.

{{< figure src="ch2a-scoring.gif" alt="Terminalaufnahme: Der Switch wechselt zu Kafka, Entscheidungen dauern etwa 12 ms" caption="Die Prüfung einschalten: Der Switch wechselt zu Kafka, Entscheidungen dauern etwa 12 ms" >}}

Jetzt läuft jede Zahlung über Kafka zum Scorer und zurück, und das Terminal bekommt nach etwa zwölf Millisekunden eine Antwort. Das Journal hält fast mit dem Zahlungsstrom Schritt: Die sechs Einträge, die noch nicht in der Datenbank sind, verschwinden innerhalb einer Minute aus dem Zähler `fraud_journal_missing`.

Bleibt noch, dem System beizubringen, seine Ablehnungen zu erklären. Ein Support-Mitarbeiter braucht einen Grund, den er einem Kunden vorlesen kann, der anruft und wissen will, warum seine Kartenzahlung fehlgeschlagen ist. Diesen Grund schreibt ein kleines Sprachmodell, Qwen2.5 0.5B Instruct, ausgeführt von llama.cpp. Das Modell läuft auf einer gewöhnlichen CPU in unserem Cluster und ruft keine externen Services auf; beim Start lädt der Pod einmalig seine Gewichte herunter, etwa 400 MB. Das llama.cpp-Image liegt dank des Vorbereitungsjobs schon auf dem Knoten, also warten wir nur auf die Gewichte:

```
$ kubectl --context fraud apply -f manifests/03-explainer.yaml
$ kubectl --context fraud -n fraud rollout status deploy/explainer --timeout=5m
deployment "explainer" successfully rolled out
```

Die Adresse des Explainers war in `cases` von Anfang an eingetragen, und `cases` hat darauf gewartet, dass er auftaucht. Bei normalem Traffic gibt es nur eine Handvoll Ablehnungen, richtig zu tun bekommt das Modell also erst bei einem Angriff. Starten wir ihn noch einmal:

```
$ kubectl --context fraud apply -f manifests/04-attack.yaml
job.batch/attack created

$ kubectl --context fraud -n fraud logs job/attack -f
attack: card testing on card …1176: 36 probes of $0.50–$3.00
attack: impossible travel on card …4653 from Charlotte
...
5s: sent 30, approved 24, declined 6, errors 0, timeouts 0, p99 125.0 ms
5s: sent 21, approved 6, declined 6, errors 0, timeouts 0, p99 125.0 ms
5s: sent 12, approved 0, declined 6, errors 0, timeouts 0, p99 125.0 ms
```

Die ersten Testzahlungen gehen durch, denn eine einzelne winzige Zahlung sieht aus wie jede andere, und das Muster zeigt sich erst nach mehreren Versuchen. Ab der Mitte des Angriffs lehnt der Scorer jedoch jede betrügerische Zahlung ab: Card Testing erkennt er etwa bei der sechsten Zahlung, das Abgehen des BIN-Bereichs etwa bei der achten Karte. Der Zähler `fraud_alerts_total` ist auf 23 gestiegen, und für 19 davon hat das Modell bereits eine Erklärung geschrieben, die ein Mensch versteht.

Die Regeln des Scorers stehen in einer kurzen Go-Datei, [`rules.go`](https://github.com/aenix-org/cozystack-workshop/blob/master/fraud/app/internal/scoring/rules.go). Wenn Sie die Schwellenwerte ändern wollen, fangen Sie dort an, nicht im YAML.

Derselbe Angriff, der in Teil null ungehindert durchging, wird jetzt nach den ersten Versuchen abgelehnt:

{{< figure src="ch2b-explainer-attack.gif" alt="Terminalaufnahme: der wiederholte Angriff, erste Versuche genehmigt, dann betrügerische Zahlungen abgelehnt" caption="Der wiederholte Angriff: Die ersten Versuche gehen durch, dann werden betrügerische Zahlungen abgelehnt" >}}

## Teil 3. Die Analysten wollen ClickHouse und einen S3-Bucket

Die Betrugsprüfung funktioniert, und dann kommen, wie immer, die Analysten. Sie wollen beliebige Abfragen auf das Zahlungsjournal stellen, ohne das System zu belasten, über das die Zahlungen laufen. In einer Public Cloud würden wir die Konsole öffnen, ein Managed ClickHouse finden und es mit ein paar Klicks bestellen. Hier tun wir dasselbe mit einer Datei im selben Repository:

```yaml
# platform/clickhouse.yaml
apiVersion: apps.cozystack.io/v1alpha1
kind: ClickHouse
metadata:
  name: analytics
spec:
  replicas: 1
  shards: 1
  resourcesPreset: t1.medium
  size: 5Gi
  storageClass: replicated
  clickhouseKeeper:
    enabled: false
  users:
    fraud:
      password: Fraud2026
```

ClickHouse Keeper sorgt dafür, dass sich mehrere ClickHouse-Replikas untereinander abstimmen; wir haben aber nur eine Replika und schalten ihn deshalb ab. So steht es in der ClickHouse-Dokumentation von Cozystack, und genau solche Details unterscheiden jemanden, der die Dokumentation gelesen hat, von jemandem, der das erstbeste Manifest kopiert hat. Pushen Sie die Datei, warten Sie ein paar Minuten und verbinden Sie sich mit ClickHouse über seinen eigenen Client, `clickhouse-client`, der im Pod bereits installiert ist:

```
$ kubectl --context tenant exec -it chi-clickhouse-analytics-clickhouse-0-0-0 -c clickhouse -- \
    clickhouse-client --user fraud --password Fraud2026
```

Der Operator benennt ClickHouse-Pods nach dem Muster `chi-<Name>-clickhouse-<Shard>-<Replika>`. Heißt Ihr Pod anders, finden Sie ihn mit `kubectl --context tenant get pods | grep chi-`.

ClickHouse liest Kafka selbst, ohne zusätzlichen Code. Die SQL-Datei `manifests/05-analytics.sql` legt drei Objekte an. Das erste, eine Tabelle auf der Kafka-Engine, liest das Topic `auth.journal`. Das zweite, die Tabelle `payments` auf der MergeTree-Engine, speichert die Zahlungen. Das dritte, eine Materialized View, überträgt jede neue Zeile aus der ersten Tabelle in die zweite:

```sql
CREATE TABLE journal_stream (raw String) ENGINE = Kafka
SETTINGS kafka_broker_list = 'kafka-kafka-kafka-bootstrap:9092',
         kafka_topic_list = 'auth.journal', kafka_group_name = 'clickhouse-analytics',
         kafka_format = 'JSONAsString', kafka_max_block_size = 1000, kafka_poll_max_batch_size = 1000;

CREATE TABLE payments (...) ENGINE = MergeTree ...;

CREATE MATERIALIZED VIEW payments_stream_mv TO payments
AS SELECT ... FROM journal_stream;
```

Am einfachsten laden Sie die Datei mit demselben Client über die Standardeingabe:

```bash
kubectl --context tenant exec -i chi-clickhouse-analytics-clickhouse-0-0-0 -c clickhouse -- \
  clickhouse-client --user fraud --password Fraud2026 --multiquery < manifests/05-analytics.sql
```

Ein paar Minuten später beantwortet die Tabelle `payments` Abfragen und enthält alles, was der Switch seit dem Einschalten der Prüfung gesehen hat:

```
$ clickhouse-client ... -q "SELECT count(*) AS stored_payments FROM payments"
329860   -- das Journal wächst seit dem Einschalten der Prüfung, Ihre Zahl wird anders sein

$ clickhouse-client ... -q "SELECT merchant, count(*) AS declines FROM payments
    WHERE decision = 'DECLINE' GROUP BY merchant ORDER BY declines DESC LIMIT 10"
```

{{< figure src="ch5a-clickhouse.gif" alt="Terminalaufnahme: ClickHouse liest Kafka direkt, Anzahl gespeicherter Zahlungen und Händler mit den meisten Ablehnungen" caption="ClickHouse liest Kafka direkt: gespeicherte Zahlungen und Händler mit den meisten Ablehnungen" >}}

Die Datei enthält drei weitere Beispielabfragen: Händler mit den meisten Ablehnungen, Ablehnungen pro Minute und der Anteil der Zahlungen, die der Switch ohne Prüfung genehmigt hat, ebenfalls pro Minute. Alle arbeiten mit denselben Daten, auf deren Grundlage der Scorer entscheidet. ClickHouse, das Dashboard und `cases` lesen das Journal jeweils in einer eigenen Kafka-Consumer-Group und kommen sich daher nicht in die Quere.

Der letzte Schritt dieses Teils ist ein S3-Bucket für Berichte. Auch ihn bestellen wir per Deklaration in Git: `platform/bucket.yaml` beschreibt einen Bucket `reports` mit einem Benutzer `analytics`.

```yaml
# platform/bucket.yaml
apiVersion: apps.cozystack.io/v1alpha1
kind: Bucket
metadata:
  name: reports
spec:
  users:
    analytics: {}
```

Ein Bucket-Benutzer ist hier keine Person, sondern ein eigenes Paar S3-Zugangsschlüssel, das nur diesen Bucket öffnet. Cozystack erzeugt die Schlüssel und legt sie im Secret `bucket-reports-analytics-credentials` ab. Am bequemsten lesen Sie sie im Cozystack-Dashboard auf der Seite des Buckets `reports` unter Secrets. Für die Abfrage brauchen Sie `accessKey`, `secretKey` und `bucketName` sowie die Adresse des Object Storage Ihrer Plattform; in meiner Umgebung ist das `s3.workshop.aenix.io`. In der Abfrage unten stehen statt der Schlüssel Platzhalter:

```sql
INSERT INTO FUNCTION s3('https://s3.workshop.aenix.io/<bucket>/daily-report.csv',
                        '<accessKey>', '<secretKey>', 'CSVWithNames')
SETTINGS s3_truncate_on_insert=1
SELECT merchant, count(*) AS declines FROM payments
WHERE decision = 'DECLINE' GROUP BY merchant ORDER BY declines DESC LIMIT 10;
```

```
$ clickhouse-client ... -q "SELECT count(*) FROM s3('...daily-report.csv', ...)"
10
```

Die Aufnahme zeigt den Export des Berichts in den Bucket und die Kontrolle, dass er angekommen ist:

{{< figure src="ch5b2-bucket-export.gif" alt="Terminalaufnahme: ein Bericht wird mit einem INSERT aus ClickHouse in einen S3-Bucket exportiert und zurückgelesen" caption="Ein Bericht aus ClickHouse nach S3 mit einem einzigen INSERT, danach die Kontrolle" >}}

Den Bericht können Sie auch im Browser öffnen, in der Oberfläche des Object Storage, die denselben Login wie das Cozystack-Dashboard verwendet. Vom Zahlungsstrom in Kafka bis zur fertigen CSV-Datei hat es eine SQL-Datei gebraucht und keinen einzigen eigenen Service.

## Teil 4. Ein richtig schlechter Tag: Black Friday, Ausfall des Datenbankservers und eine VM-Migration

Im letzten Teil setzen wir das System dem aus, was einer Bank an ihrem schlimmsten Tag widerfahren kann: drei Prüfungen, fast ohne Pause hintereinander.

### 4.1. Black Friday und Autoscaling

Zuerst beschreiben wir das Autoscaling. Es ist ein gewöhnlicher `HorizontalPodAutoscaler`, der im Schnitt 250 Millicores CPU pro Pod anpeilt und den Scorer zwischen einer und acht Replikas skaliert:

```yaml
apiVersion: autoscaling/v2
kind: HorizontalPodAutoscaler
metadata:
  name: scorer
  namespace: fraud
spec:
  scaleTargetRef: {apiVersion: apps/v1, kind: Deployment, name: scorer}
  minReplicas: 1
  maxReplicas: 8
  metrics:
    - type: Resource
      resource:
        name: cpu
        target: {type: AverageValue, averageValue: 250m}
```

Dieses Objekt gehört zu unserem eigenen Cluster, nicht zur Plattform, also speichern wir es als `hpa.yaml` und wenden es über den Kontext `fraud` an. Die Terminals lesen ihre Traffic-Rate aus einer ConfigMap, und Sie können sie ohne Neustart erhöhen: Kubernetes reicht den neuen Wert innerhalb einer Minute an den Pod weiter.

```
$ kubectl --context fraud -n fraud patch configmap traffic -p '{"data":{"rate":"200"}}'
configmap/traffic patched
```

Behalten Sie in den nächsten Minuten sowohl den Autoscaler als auch das Dashboard im Blick:

```
$ kubectl --context fraud -n fraud get hpa scorer -w
scorer   Deployment/scorer   cpu: 182m/250m   1   8   1   15s
scorer   Deployment/scorer   cpu: 476m/250m   1   8   1   105s
scorer   Deployment/scorer   cpu: 491m/250m   1   8   2   2m
scorer   Deployment/scorer   cpu: 468m/250m   1   8   4   2m30s
```

Eine einzelne Scorer-Replika kommt mit zehnfachem Traffic nicht zurecht. Ihre CPU-Last liegt weit über dem Ziel von 250 Millicores, die Antworten passen nicht mehr in 400 Millisekunden, und der Switch fängt an, selbst zu entscheiden. In diesem Moment zeigt das Dashboard 148 Autorisierungen pro Sekunde, 95 % davon hat der Switch im Stand-in-Modus erledigt. Die Entscheidungslatenz stößt an dieselben 400 Millisekunden, und die Warteschlange des Scorers wächst auf fünfzehnhundert Nachrichten. In einer echten Bank sind das die Minuten, in denen betrügerische Zahlungen ungeprüft durchgehen.

Dann greift der Autoscaler ein. Nach anderthalb Minuten laufen zwei Scorer-Replikas, nach zweieinhalb Minuten vier, und die Warteschlange ist verschwunden, bevor man verstanden hat, was eigentlich los ist. Erzwingen Sie 12 Replikas (dazu setzen Sie `minReplicas` und `maxReplicas` beide auf 12), sehen Sie, dass nur acht Replikas tatsächlich arbeiten und die übrigen vier `scored 0` melden. Der Grund: Das Topic `auth.requests` hat acht Partitionen, und innerhalb einer Kafka-Consumer-Group liest jede Partition zu jedem Zeitpunkt nur ein Consumer. Die Skalierungsgrenze wurde beim Anlegen des Topics festgelegt, und mit zusätzlichen Pods kommt man nicht an ihr vorbei. Wie im Supermarkt mit acht Kassen: Eine neunte Kassiererin macht die Schlange nicht kürzer, denn für sie gibt es keine freie Kasse.

Setzen wir die Rate wieder auf normal, `rate: 20`, skaliert der Autoscaler den Scorer nach etwa fünf Minuten von selbst auf eine Replika zurück.

{{< figure src="ch6a-hpa.gif" alt="Terminalaufnahme: Die CPU-Last steigt über 250m, der Scorer wächst von einer Replika auf zwei und dann auf vier" caption="Black Friday: Die CPU-Last steigt über 250m, der Scorer wächst von einer Replika auf zwei, dann auf vier" >}}

### 4.2. Der primäre Datenbankserver fällt aus

Die zweite Prüfung ist ein Ausfall, für den man vorgesorgt haben sollte: Der Server, auf dem der PostgreSQL-Primary läuft, fällt aus. CloudNativePG hält für uns eine Hot-Replika bereit. Wir suchen den Primary und löschen seinen Pod, als wäre der Server plötzlich ohne Strom. Das Flag `--grace-period=5` verkürzt die Zeit für ein sauberes Herunterfahren auf fünf Sekunden:

```
$ kubectl --context tenant get pods -l cnpg.io/cluster=postgres-cases -L role
postgres-cases-1   1/1   Running   0   5h   primary
postgres-cases-2   1/1   Running   0   5h   replica

$ kubectl --context tenant delete pod postgres-cases-1 --grace-period=5
pod "postgres-cases-1" deleted

$ kubectl --context tenant get pods -l cnpg.io/cluster=postgres-cases -L role -w
postgres-cases-2   1/1   Running      0   5h   primary        <-- ein paar Sekunden später
postgres-cases-1   0/1   Init:0/1     0   1s
postgres-cases-1   1/1   Running      0   27s   replica       <-- als Replika zurück
```

Die Umschaltung hat ein paar Sekunden gedauert. Der Operator hat die Replika zum Primary befördert, und der gelöschte Pod kam als Replika des neuen Primary zurück. Sehen wir uns an, wie sich das auf die Zahlungen ausgewirkt hat. Ein paar Sekunden lang zeigte das Dashboard die Datenbank als nicht erreichbar, und die Warteschlange der Einträge für die Datenbank wuchs ein wenig, aber das war alles. Der Switch spricht nie direkt mit der Datenbank, und sein Journal hat die ganze Zeit in aller Ruhe in Kafka gewartet. Im Log von `cases` sieht das so aus:

```
database unavailable, holding 140 messages, retrying
```

Sobald die Datenbank wieder erreichbar war, hat `cases` alle aufgelaufenen Nachrichten hineingeschrieben. Die Abgleichzeile im Dashboard vergleicht die Zahl der Einträge, die der Switch geschrieben hat, mit der Zahl der Zeilen in der Datenbank, und innerhalb einer Minute stand sie wieder auf `missing: 0`. Kein einziger Eintrag ging verloren, denn unsere maßgebliche Quelle ist das Journal in Kafka, die Datenbank zieht lediglich nach.

{{< figure src="ch6b-failover-migrate.gif" alt="Terminalaufnahme: Der PostgreSQL-Primary fällt aus, die Replika wird in Sekunden befördert, aufgelaufene Einträge landen in der Datenbank" caption="Ausfall des PostgreSQL-Primary: Die Replika übernimmt in Sekunden, aufgelaufene Einträge werden nachgeschrieben" >}}

### 4.3. Der Switch zieht ohne Unterbrechung auf einen anderen Server um

Die letzte Prüfung erledigen Banken meist nachts im Wartungsfenster. Der Server, auf dem der Switch läuft, muss gewartet werden, also bitten wir die Plattform, die laufende virtuelle Maschine auf einen anderen Knoten zu verschieben:

```
$ kubectl --context tenant get vmi vm-instance-switch -o wide
vm-instance-switch   Running   10.244.44.136   ws3   ...

$ virtctl migrate vm-instance-switch
VM vm-instance-switch was scheduled to migrate

$ kubectl --context tenant get vmim -w
kubevirt-migrate-vm-bz5dk   Scheduling
kubevirt-migrate-vm-bz5dk   Scheduled
kubevirt-migrate-vm-bz5dk   PreparingTarget
kubevirt-migrate-vm-bz5dk   TargetReady
kubevirt-migrate-vm-bz5dk   Running
kubevirt-migrate-vm-bz5dk   Succeeded          <-- in weniger als einer Minute

$ kubectl --context tenant get vmi vm-instance-switch -o wide
vm-instance-switch   Running   10.244.44.136   ws1   ...
```

Während die Maschine weiterläuft, wird ihr Arbeitsspeicher auf den neuen Server kopiert. Die Disk muss nicht umziehen, weil sie auf repliziertem Speicher liegt, den beide Server erreichen. Die Adresse der VM bleibt gleich, der Switch startet nicht neu, und die Terminals senden vor, während und nach dem Umzug weiter Zahlungen. Der Preis dafür sind ein paar Sekunden, in denen das Netz der VM auf dem neuen Server eingerichtet wird. In diesen Sekunden bleiben einige Autorisierungen unbeantwortet, und die Terminals senden sie mit derselben Transaktions-ID erneut, so wie es echte Terminals im Handel tun. Das Dashboard zeigt diese Zahlungen unter Repeated by the terminal, und Terminal errors bleibt die ganze Zeit bei null.

## Wie es weitergeht

Von hier aus gibt es zwei Wege. Sie können Schwellenwerte und Gewichte in [`rules.go`](https://github.com/aenix-org/cozystack-workshop/blob/master/fraud/app/internal/scoring/rules.go) ändern, das Image neu bauen und sehen, wie das System mit demselben Angriff umgeht. Oder Sie arbeiten den Rest des Repositorys [cozystack-workshop](https://github.com/aenix-org/cozystack-workshop) durch: [sechzehn Labs](https://github.com/aenix-org/cozystack-workshop/tree/master/en/laptop/labs), vom eigenen Cluster aus dem Katalog bis zu OpenBao und der Live-Migration virtueller Maschinen, und den [Workshop zur VMware-Migration](https://github.com/aenix-org/cozystack-workshop/tree/master/en/laptop), der nach demselben Prinzip aufgebaut ist.
