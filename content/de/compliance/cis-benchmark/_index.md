---
title: "CIS-Kubernetes-Benchmark-Ergebnisse für die Ænix-Plattformen"
description: "kube-bench-Lauf hinter den Aenix-Plattformen: CIS v1.12 gegen Cozystack v1.6 auf Talos — 54 bestanden, 24 fehlgeschlagen, nur vier echte Abweichungen."
page_type: "solution-landing"
language: "de"
quick_facts_style: "rows"
faq_style: "rows"
primary_keyword: "cis kubernetes benchmark ergebnisse"
secondary_keywords: ["kube-bench talos linux", "cis benchmark kubernetes 1.12", "kubernetes härtung nachweis", "cis kubernetes benchmark fehlschläge erklärt"]
hreflang_en: /compliance/cis-benchmark/
related_pages:
  - /de/compliance/pci-dss/
  - /de/compliance/kubernetes-conformance/
  - /de/loesungen/dora-compliance/
  - /de/produkte/private-cloud-platform/
  - /de/produkte/cozystack-enterprise-support/
direct_answer: |
  **Die Ænix-Plattformen starten aus einer gehärteten Ausgangslage, und der veröffentlichte CIS-Kubernetes-Benchmark-Lauf belegt das: 54 Kontrollen bestehen auf einem Management-Cluster, den niemand für den Test getrimmt hat. Der Lauf ist CIS Kubernetes Benchmark v1.12, ausgeführt mit kube-bench v0.12.0 gegen Cozystack v1.6 auf Kubernetes v1.34.3 — Cozystack ist die quelloffene Engine, aus der die Ænix Public Cloud, Private Cloud und AI Platform gebaut sind, weshalb das Ergebnis unmittelbar trägt. Gesamt: 54 bestanden, 24 fehlgeschlagen, 53 Warnungen. Die meisten Fehlschläge sind architektonisch und keine Sicherheitslücken: rund fünfzehn sind Dateirechte-Prüfungen ohne Gegenstand auf einem unveränderlichen Talos-Knoten, drei prüfen ein `--authorization-mode`-Flag, das die strukturierte Autorisierung abgelöst hat, eine erwartet eine kubelet-Unit-Datei, die Talos nicht verwendet, und eine einen kube-proxy, den Cilium ersetzt hat. Vier Abweichungen sind tatsächlich offen — 1.2.5, 1.3.7, 1.4.2 und 1.2.30 — und jede wird unten behandelt.**
quick_facts:
  - label: "Benchmark"
    value: "CIS Kubernetes Benchmark v1.12, ausgeführt mit kube-bench v0.12.0 am 18. August 2026."
  - label: "Prüfgegenstand"
    value: "Cozystack v1.6 auf Kubernetes v1.34.3 — dieselbe Engine, die die Ænix-Plattformen ausliefern."
  - label: "Geltungsbereich"
    value: "Nur der Management-Cluster: die Talos-Knoten und die Kubernetes-Control-Plane, auf der die Plattform selbst läuft."
  - label: "Ergebnis"
    value: "54 bestanden, 24 fehlgeschlagen, 53 Warnungen (manuelle Prüfungen)."
  - label: "Echte offene Abweichungen"
    value: "Vier: 1.2.5, 1.3.7, 1.4.2 und 1.2.30. Drei davon sind bewusste Architekturentscheidungen, eine ist ein nie geänderter Default."
  - label: "etcd-Abschnitt"
    value: "Abschnitt 2 besteht vollständig — 7 von 7, inklusive Client- und Peer-Zertifikaten, --client-cert-auth und kein --auto-tls."
  - label: "Vergebenes Urteil"
    value: "Keines. Der CIS-Benchmark vergibt kein Bestanden/Nicht-bestanden; Compliance ist eine Beurteilung eines konkreten Clusters."
faq:
  - q: "Ist das ein CIS-Benchmark-Lauf von Cozystack oder von der Aenix-Plattform?"
    a: "Von Cozystack, und zwar bewusst. Die Aenix-Plattformen sind Distributionen von Cozystack — dem Apache-2.0-lizenzierten CNCF-Projekt, das Aenix entwickelt und pflegt —, es gibt also keine separate geschlossene Engine zum Benchmarken. Eine Kontrolle, die auf Cozystack besteht, besteht auch auf der darauf gebauten Plattform, und eine Abweichung dort ist eine Abweichung hier. Wichtiger ist die Einschränkung beim Geltungsbereich: Dieser Lauf umfasst den Management-Cluster, und mehrere der gemessenen Einstellungen stammen aus der zum Installationszeitpunkt angewendeten Talos-Maschinenkonfiguration und nicht aus der Software — ein Lauf auf Ihrer Installation darf also legitim abweichen."
  - q: "Ist die Plattform CIS-Kubernetes-Benchmark-zertifiziert?"
    a: "Nein, und nichts ist es. Der Benchmark vergibt kein Bestanden/Nicht-bestanden — er ist eine Liste von Kontrollen, und Compliance ist eine Beurteilung eines konkreten Clusters durch denjenigen, der ihn prüft. Im hier veröffentlichten Lauf bestehen 54 Kontrollen, und vier Abweichungen sind es wert, geschlossen zu werden. Von den übrigen zwanzig prüfen rund fünfzehn Dateirechte auf einem unveränderlichen Knoten, drei ein Flag, das die strukturierte Autorisierung abgelöst hat, eine erwartet eine kubelet-Unit-Datei, für die Talos keine Verwendung hat, und eine einen kube-proxy, den Cilium ersetzt hat."
  - q: "Warum schlagen so viele CIS-Prüfungen auf Talos Linux fehl?"
    a: "Weil der Großteil von Abschnitt 1.1 Dateirechte und Eigentümer unter /etc/kubernetes prüft und Talos solche Dateien nicht führt. Diese Kontrollen setzen ein kubeadm-Cluster voraus, in dem ein Administrator Manifeste auf der Platte bearbeitet. Talos rendert die Control-Plane-Pods aus seiner eigenen Konfiguration und gibt Credentials über seine API aus; admin.conf, scheduler.conf und controller-manager.conf existieren schlicht nicht. Das Risiko, das die Kontrollen adressieren — ein Angreifer oder ein Fehler verändert Control-Plane-Konfiguration auf der Platte —, wird durch Unveränderlichkeit statt durch Dateirechte behandelt."
  - q: "Können wir kube-bench selbst ausführen?"
    a: "Ja, und Sie sollten es vor einer Prüfung tun. Das Job-Manifest, mit dem diese Seite erstellt wurde, ist unten veröffentlicht — mit gepinnter Image-Version und explizit übergebener Benchmark-Revision, denn kube-bench wählt sonst eine Revision anhand der erkannten Kubernetes-Version, und eine andere Wahl erzeugt andere Summen. Führen Sie den Job in einem Namespace aus, den nur Cluster-Administratoren erreichen, niemals in einem Tenant, und entfernen Sie den Namespace danach."
  - q: "Reicht ein CIS-Bericht einem Prüfer?"
    a: "Für sich genommen nicht. Ein unkommentierter kube-bench-Bericht ist schlechter als keiner: Der Prüfer sieht rote Zeilen, und aus dem Termin wird ein Architekturvortrag statt einer Sicherheitsprüfung. Was funktioniert, ist der Bericht plus eine Einordnung — für jeden Fehlschlag, ob er eine echte Abweichung, eine anders erfüllte Kontrolle oder eine nicht anwendbare Prüfung ist. Genau diese Einordnung ist diese Seite."
  - q: "Sind Tenant-Kubernetes-Cluster von diesen Zahlen abgedeckt?"
    a: "Nein. Dies ist der Management-Cluster. Tenant-Kubernetes-Cluster betreiben ihre Control Planes als Kamaji-Deployments mit eigenen API-Server-Flags und eigenem etcd, weshalb die Abschnitte 1, 2 und 3 für sie separat bewertet werden müssen. Wenn Tenant-Cluster in Ihren Prüfungsumfang fallen, fordern Sie diesen Lauf zusätzlich an."
---

**54 CIS-Kontrollen bestehen auf einem Cluster, den niemand für den Test getrimmt hat.** Das Knoten-Betriebssystem ist unveränderlich und hat keine Shell, privilegierte Workloads werden von der Admission abgelehnt, jede etcd-Kontrolle besteht, und Tenants werden mit bereits angewendeter Netzwerkisolierung erzeugt.

Diese Seite veröffentlicht den vollständigen Lauf, nicht nur den schmeichelhaften Teil. Ein roher kube-bench-Bericht listet auch zwei Dutzend Fehlschläge, und die eigentliche Arbeit besteht darin, sie auseinanderzuhalten: Die meisten sind der Benchmark, der nach Dateien sucht, die ein unveränderlicher Knoten nicht führt, oder ein Flag prüft, das neuere Kubernetes-Releases ersetzt haben. Vier verdienen Ihre Aufmerksamkeit, und jede wird unten mit ihrer Begründung behandelt.

<div class="cta-row">
  <a class="cta-primary" href="/de/kontakt/">Mit einem Engineer sprechen</a>
  <a class="cta-secondary" href="/de/compliance/">Alle Compliance-Nachweise →</a>
</div>

---

## Was gemessen wurde, und woran

CIS Kubernetes Benchmark v1.12, ausgeführt von [kube-bench](https://github.com/aquasec/kube-bench) v0.12.0 gegen **Cozystack v1.6 auf Kubernetes v1.34.3**, am 18. August 2026. Control-Plane-Prüfungen liefen auf einem Control-Plane-Knoten, Worker-Prüfungen auf einem Worker.

**Lesen Sie den Prüfgegenstand genau, denn darum geht es.** Der Lauf richtet sich gegen Cozystack — die quelloffene, Apache-2.0-lizenzierte, bei der CNCF gehostete Engine, die Ænix entwickelt und pflegt — und nicht gegen ein separates proprietäres Produkt. Ein solches gibt es nicht: Die Ænix Public Cloud Platform, die Ænix Private Cloud Platform und die Ænix AI Platform sind Distributionen genau dieser Engine. Eine Kontrolle, die hier besteht, besteht auf der Plattform; eine Abweichung hier ist eine Abweichung dort. Was Ænix um die Engine herum liefert — die zum Installationszeitpunkt angewendete Talos-Maschinenkonfiguration, die Referenzarchitektur, die Runbooks — ist genau der Ort, aus dem mehrere der folgenden Einstellungen stammen. Deshalb ist derselbe Benchmark auf Ihrer Installation ein anderer Lauf und kann andere Summen liefern.

**Geltungsbereich: der Management-Cluster** — die Talos-Knoten und die Kubernetes-Control-Plane, auf der die Plattform selbst läuft. Tenant-Kubernetes-Cluster sind von diesen Zahlen nicht abgedeckt. Ihre Control Planes sind Kamaji-Deployments mit eigenen API-Server-Flags und eigenem etcd; die Abschnitte 1, 2 und 3 müssen für sie separat bewertet werden.

| Abschnitt | Bestanden | Fehlgeschlagen | Warnung |
|---|---|---|---|
| 1 — Sicherheitskonfiguration der Control Plane | 29 | 22 | 9 |
| 2 — etcd-Knotenkonfiguration | 7 | 0 | 0 |
| 3 — Control-Plane-Konfiguration | 1 | 0 | 4 |
| 4 — Sicherheitskonfiguration der Worker-Knoten | 17 | 2 | 6 |
| 5 — Kubernetes-Policies | 0 | 0 | 34 |
| **Gesamt** | **54** | **24** | **53** |

Abschnitt 2 verdient einen Moment: Jede etcd-Flag-Prüfung besteht — Client- und Peer-Zertifikate, `--client-cert-auth`, kein `--auto-tls`. Der eine etcd-bezogene Fehlschlag liegt in Abschnitt 1 und betrifft den Eigentümer des Datenverzeichnisses; dazu unten mehr.

---

<div class="band-fullbleed band-fullbleed--tint">
<div class="band-fullbleed__inner">

## Warum die meisten Fehlschläge keine Feststellungen sind

### Der Benchmark sucht nach kubeadm

Fünfzehn der vierundzwanzig Fehlschläge sind Dateiprüfungen — Rechte und Eigentümer der Pod-Manifeste von API-Server, Controller Manager, Scheduler und etcd sowie von `admin.conf`, `scheduler.conf` und `controller-manager.conf`.

Jede einzelne meldet einen leeren Wert. Ein Blick auf den Knoten zeigt, warum:

```
# /etc/kubernetes auf einem Talos-Control-Plane-Knoten
bootstrap-kubeconfig
kubeconfig-kubelet
kubelet.yaml
manifests/     <- leer
pki/
```

Das Verzeichnis `manifests` existiert und enthält nichts: Talos rendert die Control-Plane-Pods aus seiner eigenen Konfiguration unter `/system`, nicht aus Dateien, die ein Administrator bearbeitet; `/etc/kubernetes/manifests` bleibt für statische Pods reserviert, die *Sie* hinzufügen. Die Administrator-Kubeconfigs, nach denen der Benchmark sucht, fehlen vollständig, weil Credentials über die Talos-API ausgegeben und nicht auf der Platte abgelegt werden.

Prüfen Sie es auf Ihrem eigenen Knoten, statt es zu glauben:

```bash
talosctl -n <control-plane-ip> list -l /etc/kubernetes /etc/kubernetes/manifests
```

Die ehrliche Lesart lautet nicht „fünfzehn Kontrollen sind fehlgeschlagen", sondern „fünfzehn Kontrollen sind nicht anwendbar, und das Risiko, das sie steuern sollen, wird durch Unveränderlichkeit statt durch Dateirechte behandelt".

Eine Prüfung derselben Gruppe, 1.1.12, schlägt aus einem anderen Grund fehl. Das etcd-Datenverzeichnis existiert und ist lesbar — Prüfung 1.1.11 bestätigt Modus 0700 —, aber etcd läuft als root, auf einem Talos-Knoten gibt es kein System-Konto `etcd`, und der scannende Container kann den numerischen Eigentümer keinem Namen zuordnen. Die Absicht der Kontrolle, den Lesezugriff auf das etcd-Datenverzeichnis einzuschränken, ist erfüllt; die wörtlich geforderte Eigentümerschaft `etcd:etcd` kann auf einem System ohne Benutzerkonten nicht existieren.

### Drei Prüfungen sind älter als die strukturierte Autorisierung

Die Prüfungen 1.2.6, 1.2.7 und 1.2.8 verlangen, dass das Flag `--authorization-mode` `AlwaysAllow` ausschließt und `Node` sowie `RBAC` enthält. Kubernetes 1.30 hat eine strukturierte Autorisierungs-Konfigurationsdatei eingeführt, Talos nutzt sie, das Flag fehlt also und die Prüfungen schlagen fehl.

Die Konfiguration selbst ist genau das, was der Benchmark will:

```yaml
apiVersion: apiserver.config.k8s.io/v1beta1
kind: AuthorizationConfiguration
authorizers:
- name: node
  type: Node
- name: rbac
  type: RBAC
```

Beide Authorizer sind aktiv, `AlwaysAllow` kommt nirgends vor. Das ist kein Fall von veraltetem Benchmark: CIS v1.12 ist die aktuelle Revision und deckt Kubernetes 1.32 bis 1.34 ab, während die strukturierte Autorisierung in 1.32 allgemein verfügbar wurde. Die Kontrolle prüft schlicht weiterhin auf ein Flag, auf das ein konformes modernes Cluster verzichten darf. Rechnen Sie mit weiteren False Positives dieser Bauart. Sie zu widerlegen heißt, die Konfiguration zu lesen, nicht das Werkzeug erneut laufen zu lassen.

### Beide Worker-Fehlschläge sind architektonisch

Prüfung 4.1.1 erwartet eine kubelet-Service-Datei, die Talos nicht verwendet. Prüfung 4.3.1 erwartet, dass der kube-proxy-Metrics-Endpunkt auf localhost gebunden ist — und es gibt keinen kube-proxy zu binden: Die Plattform betreibt Cilium mit aktiviertem `kube-proxy-replacement`, die geprüfte Komponente ist also gar nicht installiert.

Die Exposition, um die es der Kontrolle ging, ist damit aber nicht verschwunden. Sie ist auf die Metrics- und Health-Ports des Cilium-Agents auf jedem Knoten gewandert, die der Benchmark überhaupt nicht betrachtet. Binden Sie diese an die interne Adresse des Knotens und schirmen Sie sie so ab, wie Sie es mit kube-proxy getan hätten.

</div>
</div>

---

## Was tatsächlich Aufmerksamkeit braucht

Vier Fehlschläge überstehen die Sortierung. Keiner ist exotisch, und alle vier sind Einstellungen in der Talos-Maschinenkonfiguration, keine Plattformänderungen. Drei der vier sind bewusste Entscheidungen der Maintainer und keine Versäumnisse — die Begründung zu kennen ist nützlicher als die Punktzahl.

| Prüfung | Bedeutung | Behandlung |
|---|---|---|
| **1.2.5** — `--kubelet-certificate-authority` nicht gesetzt | Der API-Server weist dem kubelet ein Client-Zertifikat vor, prüft dessen Server-Zertifikat aber nicht gegen eine CA | Bewusst: Auf Bare Metal gibt es keinen Metadatendienst, der kubelet-Server-Zertifikate ausstellt und verteilt. Schließen heißt, diesen Mechanismus zu bauen |
| **1.3.7** — Controller Manager `--bind-address=0.0.0.0` | Der sichere Port (10257) lauscht auf allen Interfaces statt nur auf Loopback und exponiert ausschließlich Metriken. Metriken erfordern Authentifizierung und Autorisierung; `/healthz`, `/readyz` und `/livez` nicht | Bewusst: So werden die Metriken heute eingesammelt. Sauberer wäre Loopback plus ein autorisierender Proxy davor |
| **1.4.2** — Scheduler `--bind-address=0.0.0.0` | Dasselbe, auf Port 10259 | Wie oben |
| **1.2.30** — `--service-account-extend-token-expiration` nicht `false` | Die verlängerte Lebensdauer von Service-Account-Tokens bleibt aktiv, ein Kompatibilitäts-Default für ältere Clients | Keine bewusste Entscheidung — der Default wurde schlicht nie geändert |

Behandelt Ihr Prüfer eine davon als Feststellung, ist die Antwort eine kompensierende Kontrolle plus ein Plan, keine Verneinung. Die ersten drei sind jeweils ein bis zwei Tage Engineering, die vierte ist ein Flag.

**Eine Warnung vor 1.2.5.** Das Flag allein ist nicht die Lösung und macht für sich genommen Dinge kaputt. Standardmäßig liefert das kubelet ein selbstsigniertes Zertifikat aus; ein API-Server, der es gegen eine CA prüfen soll, kann anschließend weder `kubectl logs` noch `exec`, `port-forward` oder metrics-server bedienen. Diese Kontrolle zu schließen ist eine dreiteilige Änderung — `serverTLSBootstrap` am kubelet aktivieren, einen Signer betreiben, der kubelet-Server-CSRs genehmigt, und erst dann `--kubelet-certificate-authority` setzen. Machen Sie das auf einem Testcluster und prüfen Sie `kubectl logs` gegen jeden Knoten, bevor Sie es als erledigt betrachten.

**Zu 1.3.7 und 1.4.2** lautet die Benchmark-Empfehlung `--bind-address=127.0.0.1`, und die wörtliche Umsetzung hat einen Preis: Prometheus scrapt Controller Manager und Scheduler über Knoten hinweg, und reine Loopback-Endpunkte sind nicht mehr scrapebar. Verhältnismäßig ist, die Bind-Adresse zu belassen, die Ports 10257 und 10259 mit der Talos-Ingress-Firewall für alles außer dem Monitoring-Pfad zu schließen und das als kompensierende Kontrolle zu dokumentieren statt als bestandene Prüfung.

**Zu 1.2.30**: Beobachten Sie `serviceaccount_stale_tokens_total` am API-Server, bevor Sie die verlängerte Token-Lebensdauer abschalten. Solange der Wert über null liegt, hängt noch etwas am Kompatibilitätsverhalten.

### Wo diese Einstellungen liegen

Alle vier stehen in der zum Installationszeitpunkt angewendeten Talos-Maschinenkonfiguration. Diese Konfiguration gehört zu dem, was Ænix um die Engine herum liefert und betreibt — und ist ebenfalls der Grund, warum derselbe Lauf auf Ihrem Cluster abweichen kann. Prüfen Sie, was Ihrer tatsächlich fährt, bevor Sie etwas ändern:

```bash
talosctl -n <control-plane-ip> get authorizationconfig -o yaml
```

---

## Die Audit-Policy: die Prüfung, die kube-bench Ihnen überlässt

Prüfung 3.2.2 — „sicherstellen, dass die Audit-Policy zentrale Sicherheitsbelange abdeckt" — ist eine manuelle Prüfung; kube-bench meldet eine Warnung und geht weiter. Sie lohnt sich von Hand.

Auf dem hier untersuchten Cluster steht die Audit-Policy auf `level: Metadata`. Das hält fest, wer wann was aufgerufen hat, aber nicht die Request- oder Response-Bodies. Für den laufenden Betrieb ein vernünftiger Default; für ein Regime, das die Rekonstruktion tatsächlicher Änderungen erwartet — PCI DSS Anforderung 10.2.1 etwa — für sich genommen zu wenig.

Widerstehen Sie der naheliegenden Korrektur. Alles auf `RequestResponse` zu heben schreibt die Bodies jedes Requests ins Audit-Log, und diese Bodies enthalten Secret-Werte, Tokens und alle personenbezogenen Daten, die Ihre Nutzer in Annotationen ablegen. Das Log hört auf, eine Zugriffsaufzeichnung zu sein, und wird zur zweiten Kopie der Daten, die es schützen sollte — in einer Datei mit anderer Aufbewahrung, anderer Zugriffskontrolle und womöglich anderem Prüfungsumfang. Die Referenz-Policy von Kubernetes hält Secrets und ConfigMaps aus genau diesem Grund auf `Metadata`.

Praktikabel ist eine Aufteilung je Ressource. Rollenbindungen, Webhook-Konfigurationen und Admission-Policies auf `RequestResponse`, weil dort die Änderung selbst der Punkt ist; Secrets auf `Metadata`, weil der Lesezugriff nützlich zu wissen ist und der Inhalt eine Haftung. Entscheiden Sie die Aufteilung bewusst und schreiben Sie auf, warum — ein Prüfer akzeptiert eine begründete Policy deutlich bereitwilliger als eine maximale. Wie Audit-Logging in ein Compliance-Programm passt, steht auf der [PCI-DSS-Seite](/de/compliance/pci-dss/); warum eine maximale Policy ein zweites Problem erzeugt, auf der [DSGVO-Seite](/de/compliance/dsgvo/).

---

## Welche der 53 manuellen Prüfungen die Plattform bereits beantwortet

Warnungen sind manuelle Prüfungen: Der Benchmark kann sie nicht entscheiden, also muss es ein Mensch. Vierunddreißig davon entfallen auf Abschnitt 5 (RBAC, Pod Security, Netzwerk-Policies), und mehrere beantwortet die Art, wie ein Tenant gebaut wird, bereits:

- **Pod-Security-Admission erzwingt `baseline` und warnt bei `restricted`.** Das beantwortet die Prüfungen aus 5.2 zu privilegierten Containern, Host-Namespaces und hostPath — nicht aber die zu root-Ausführung, abgeworfenen Capabilities und seccomp-Profilen, die `restricted` verlangen, ein Namespace-Label entfernt.
- **Jeder Tenant wird mit Cilium-Netzwerk-Policies erzeugt**, die Verkehr aus anderen Tenants abweisen — nachweisbar mit einem Cross-Tenant-Test; die Kommandos stehen auf der [PCI-DSS-Seite](/de/compliance/pci-dss/).
- **Die Tenant-Rolle trägt kein `get secrets`.** Lesen Sie das als Least Privilege an der API-Oberfläche, nicht als Vertraulichkeitsgrenze: Wer in einem Namespace Workloads planen darf, kann die Secrets dieses Namespaces in einen Pod mounten.

Die übrigen Warnungen — insbesondere Client-Zertifikate und Service-Account-Tokens als Benutzer-Credentials — hängen davon ab, wie Sie das Cluster betreiben, nicht davon, wie es ausgeliefert wird.

---

## kube-bench auf dem eigenen Cluster ausführen

Zwei Dinge müssen vorher stimmen. Übergeben Sie `--benchmark` explizit — sonst wählt kube-bench eine Revision anhand der erkannten Kubernetes-Version, und eine andere Wahl erzeugt einen anderen Prüfsatz und andere Summen. Und pinnen Sie das Image: `latest` ist kein Nachweis, und ein Prüfer darf fragen, welche Version welches Werkzeugs den Bericht erzeugt hat.

```bash
kubectl create namespace kube-bench
kubectl label namespace kube-bench pod-security.kubernetes.io/enforce=privileged
```

```yaml
apiVersion: batch/v1
kind: Job
metadata:
  name: kube-bench-master
  namespace: kube-bench
spec:
  backoffLimit: 1
  template:
    spec:
      hostPID: true
      nodeName: <ihr-control-plane-knoten>
      restartPolicy: Never
      automountServiceAccountToken: false
      containers:
        - name: kube-bench
          image: docker.io/aquasec/kube-bench:v0.12.0   # Version oder Digest pinnen
          command: ["kube-bench"]
          args:
            - "run"
            - "--benchmark"
            - "cis-1.12"
            - "--targets"
            - "master,controlplane,etcd,policies"
            - "--json"
          volumeMounts:
            - { name: var-lib-etcd,    mountPath: /var/lib/etcd,    readOnly: true }
            - { name: var-lib-kubelet, mountPath: /var/lib/kubelet, readOnly: true }
            - { name: etc-kubernetes,  mountPath: /etc/kubernetes,  readOnly: true }
            - { name: usr-bin,         mountPath: /usr/local/mount-from-host/bin, readOnly: true }
      volumes:
        - { name: var-lib-etcd,    hostPath: { path: /var/lib/etcd } }
        - { name: var-lib-kubelet, hostPath: { path: /var/lib/kubelet } }
        - { name: etc-kubernetes,  hostPath: { path: /etc/kubernetes } }
        - { name: usr-bin,         hostPath: { path: /usr/bin } }
```

Für Worker-Prüfungen denselben Job auf einem Worker mit `--targets node` ausführen und den etcd-Mount weglassen.

Behandeln Sie diesen Job als das, was er ist: eine privilegierte, kurzlebige Diagnose. Er läuft mit `hostPID`, in einem Namespace mit abgeschalteter Pod-Security-Durchsetzung, und mountet `/var/lib/kubelet` — dort liegen der kubelet-Client-Schlüssel des Knotens und die projizierten Service-Account-Tokens jedes Pods auf diesem Knoten. Wer sich in den Pod exec-en kann, erbt die Identität des Knotens. Führen Sie ihn in einem Namespace aus, den nur Cluster-Administratoren erreichen, niemals in einem Tenant, sichern Sie das JSON und entfernen Sie den Namespace, sobald Sie es haben:

```bash
kubectl delete namespace kube-bench
```

Die Ausnahme, die dieser Job von der Admission braucht, ist bewusst und temporär — an der Durchsetzung in den Namespaces, in denen Workloads tatsächlich laufen, ändert sie nichts.

---

## Wo das hingehört

Ein CIS-Lauf ist ein Test eines Clusters zu einem Zeitpunkt. Er sagt nichts darüber, ob das Cluster sich wie Kubernetes verhält — das ist die [Kubernetes-Konformität](/de/compliance/kubernetes-conformance/) — und nichts über die organisatorische Hälfte eines Compliance-Programms, wo [DORA](/de/compliance/dora/) und das [DORA-Readiness-Engagement](/de/loesungen/dora-compliance/) ansetzen. Für Finanzunternehmen sowie für wesentliche und wichtige Einrichtungen unter NIS2 liegt die aufsichtsgerichtete Arbeit auf den Seiten [DORA](/de/loesungen/dora-compliance/) und [NIS2](/de/loesungen/nis2-compliance/); diese Seite ist eines der Artefakte, die solche Engagements erzeugen.

<div class="cta-row">
  <a class="cta-primary" href="/de/kontakt/">Rohbericht anfordern</a>
  <a class="cta-secondary" href="/de/dienstleistungen/platform-readiness-assessment/">Platform-Readiness-Assessment →</a>
</div>

---

## Hinweise

Diese Seite beschreibt Cozystack v1.6 auf Kubernetes v1.34.3, beobachtet auf einem einzelnen Referenzcluster — ausschließlich dem Management-Cluster —, gemessen mit CIS Kubernetes Benchmark v1.12 über kube-bench v0.12.0 am 18. August 2026. Die Ænix-Plattformen sind Distributionen dieser Engine, weshalb das Ergebnis hier steht; die Einschränkung ist, dass Ihre Installation abweichen kann, insbesondere in der Talos-Maschinenkonfiguration, aus der mehrere der oben besprochenen Einstellungen stammen. Diese Seite ist informatorisch, kein Assessment und keine Zertifizierung.
