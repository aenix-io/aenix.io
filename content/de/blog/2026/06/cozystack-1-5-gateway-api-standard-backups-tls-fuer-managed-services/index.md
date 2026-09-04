---
title: "Cozystack 1.5: Gateway API, Standard-Backups, Flux-Sharding und TLS für Managed Services"
description: "Cozystack v1.5.0 bringt optionale Gateway API über Cilium, eine Standard-BackupClass, Flux v2.8 mit Sharding, TLS für Managed-Datenbanken und GPU-Passthrough."
slug: "cozystack-1-5-gateway-api-standard-backups-tls-fuer-managed-services"
date: "2026-06-22"
author: "Timur Tukaev"
type: "announcement"
topics: ["Cozystack", "Kubernetes", "Cilium", "KubeVirt", "GPU", "Platform Engineering"]
language: "de"
hreflang_en: "/blog/2026/06/cozystack-1-5-gateway-api-default-backups-and-tls-for-managed-services/"
companion_landing: "/de/produkte/cozystack-enterprise-support/"
companion_label: "Enterprise-Support für Cozystack ansehen →"
cover_image: ""
---

{{< placeholder-image width="1200" height="630" label="Cozystack v1.5.0 — Titelbild (1200×630)" >}}

Cozystack v1.5.0 ist am 22. Juni 2026 erschienen. Das Release enthält sämtliche Fixes der Patch-Linie v1.4.1 bis v1.4.4 und entwickelt die Plattform in fünf Richtungen weiter: ein zweiter Ingress-Pfad über die Gateway API, Backups ohne S3-Konfiguration pro Anwendung, strengere und shardbare Flux-Reconciliation, TLS für extern veröffentlichte Managed Services und GPU-Passthrough ohne manuelles `kubectl patch`.

Das Release hat allerdings eine reale Upgrade-Oberfläche. Lesen Sie den nächsten Abschnitt, bevor Sie das Wartungsfenster planen.

## Vor dem Upgrade lesen

**Installieren Sie heute weder v1.5.0 noch v1.5.1 oder v1.5.2. Gehen Sie direkt auf v1.5.4.** Der SeaweedFS-Chart-Sprung in v1.5.0 (4.05 auf 4.31) hat die SeaweedFS-Workloads von chart-basierten auf release-basierte Namen umbenannt. StatefulSet-Namen sind unveränderlich, Helm konnte also nicht in place umbenennen — stattdessen wurde ein zweiter, doppelter Satz neben dem laufenden gestartet. Auf einem Cluster mit mehr Nodes als Master-Repliken lässt sich das leere Duplikat erfolgreich schedulen, beide Generationen tragen identische Pod-Labels, und der Service `seaweedfs-s3` verteilt Last auf zwei Filer, die in denselben Metadaten-Store schreiben. Das ist kein kosmetisches Duplikat, sondern ein Datenintegritätsvorfall. Ein verwandter Defekt in Migration 43 konnte zusätzlich den CNPG-Cluster `seaweedfs-db` — den Index für jedes Objekt im S3 eines Tenants — für jede Instanz löschen, die nicht wörtlich `seaweedfs` heißt.

Beides ist in v1.5.4 (19. August 2026) behoben: Das Release pinnt `fullnameOverride: seaweedfs`, adoptiert die laufenden Workloads in place und liefert ein Audit-Skript, das bei Fehlern hart abbricht statt „sauber“ zu melden. v1.5.4 ist das letzte Release der 1.5-Linie und das einzige, das produktiv sinnvoll ist.

Fünf weitere Punkte betreffen jedes 1.5-Upgrade:

- **Kubernetes 1.33 oder neuer ist auf dem Management-Cluster Pflicht** — und auf jedem Tenant-Cluster, der das Flux-Addon aktiviert. Der helm-controller v1.5 aus Flux v2.8 verlangt es. Kubernetes also zuerst anheben.
- **`upgrade.force: true` ist entfallen.** Änderungen an unveränderlichen Feldern heilen sich nicht mehr selbst. Ändert ein Chart-Upgrade etwa `volumeClaimTemplates` oder `serviceName` eines StatefulSets, schlägt das Apply fehl; das Objekt muss von Hand neu erzeugt werden (`kubectl delete sts <name> --cascade=orphan`), danach übernimmt Flux wieder.
- **Bei GPU-VMs müssen eigene Host-Devices vorher umgezogen werden.** Ist `cozystack.gpu-operator` aktiv, gehört `KubeVirt.spec.configuration.permittedHostDevices` jetzt dem Bundle und wird beim ersten Reconcile überschrieben. Handgepflegte Einträge vorher nach `.gpu.permittedHostDevices` verschieben und prüfen, dass jeder `resourceName` zu dem passt, was die Nodes tatsächlich anbieten.
- **MetalLB wechselt auf das FRR-K8s-BGP-Backend und auf reine HTTPS-Metriken.** Mit dem Sprung v0.15.2 auf v0.16.1 übernimmt MetalLB das Upstream-Standard-Backend FRR-K8s; der klassische FRR-Modus ist deprecated. `kube-rbac-proxy` weicht nativem TLS plus RBAC — jede Scrape-Konfiguration, die noch auf die alten Klartext-HTTP-Endpunkte zeigt, muss angepasst werden. Die Portsperrliste im Host-Netzwerk wurde entsprechend rotiert, inklusive des neuen Probe-Ports 17472 für `/healthz` und `/readyz`.
- **Extern veröffentlichte Datenbanken und Messaging-Dienste erhalten automatisch TLS.** Instanzen mit `external: true` schalten nach dem Upgrade auf TLS um. Der Trust Anchor ist eine selbstsignierte CA, externe Clients müssen sie also abholen und pinnen. Cluster-interne Instanzen bleiben unberührt.

Und ein Punkt für alle, die später auf 1.6 wollen: v1.5.4 ist das erste 1.5.x-Release mit Migrations-`targetVersion: 46`. Der Pin, den es auf die CAPI-Objekte `KubeadmConfigTemplate` setzt, verhindert später, dass ein 1.6-Upgrade diese Templates unter einem noch laufenden, mitten im Rollover befindlichen MachineSet weglöscht. Der schmerzhafte Weg nach 1.6 führt über jede ältere Version der 1.5-Linie.

## Gateway API über Cilium

Cozystack-native Dienste lassen sich jetzt über die Gateway API mit Cilium als Datenebene veröffentlichen — optional und parallel zu den bestehenden ingress-nginx-Controllern pro Tenant. Umgesetzt wird das über eine neue CRD `gateway.cozystack.io/v1alpha1 TenantGateway`, die der `cozystack-controller` reconciled.

Aktiviert wird der Pfad plattformweit mit `publishing.gateway.enabled=true`. Ein Tenant bekommt danach entweder mit `tenant.spec.gateway=true` sein eigenes Gateway samt LoadBalancer-IP und Zertifikat, oder er erbt das Gateway des nächsten übergeordneten Tenants über dasselbe label-basierte Selektormodell, das bereits die Ingress-Vererbung steuert. Zwei Zertifikatsmodi stehen bereit: HTTP-01 als Standard (ein Zertifikat pro Anwendung, ohne Plattformkonfiguration für neue Apps) und optional DNS-01 (ein Wildcard-Zertifikat für eine Apex-Domain, mit Cloudflare, Route 53, DigitalOcean und RFC 2136).

Die Standardeinstellung bleibt ingress-nginx, bestehende Cluster ändern ihr Verhalten also nicht. Zwei Nebenwirkungen treffen jedoch alle:

- Cilium Envoy und die Gateway-API-Unterstützung sind ab sofort immer aktiv. Das bedeutet ein zusätzliches DaemonSet `cilium-envoy` mit rund 100 MB RAM pro Node im Leerlauf. Auf dicht belegten Nodes einplanen.
- `cozystack-api` ruft Admission (`createValidation` / `deleteValidation`) nun bei Create **und** Delete für `apps.cozystack.io/*` auf. Eigene ValidatingAdmissionPolicies oder Webhooks auf diesen Kinds feuern damit bei allen drei Verben.

Referenz: [Gateway-API-Leitfaden](https://cozystack.io/docs/v1.5/networking/gateway-api/).

## Backups, die ohne Vorarbeit funktionieren

Frühere Releases haben die Backup-Maschinerie installiert. v1.5 schließt die Lücke zwischen „installiert“ und „funktioniert ohne S3-Konfiguration pro Anwendung“.

Neu ist eine plattformverwaltete Standard-`BackupClass` namens `cozy-default`, hinterlegt mit dem System-Bucket `cozy-backups`. Anwendungen aktivieren sie über `useSystemBucket`; die Plattform projiziert daraufhin gemeinsam genutzte Backup-Credentials mit RBAC-Isolation und Projektionsmetriken in den Tenant-Namespace und verzichtet vollständig auf Credential-Secrets pro Release. Für jede backupfähige Anwendung gibt es jetzt eine Standardstrategie — Velero für VMDisk und VMInstance, CNPG für PostgreSQL, Altinity für ClickHouse, dazu MariaDB, FoundationDB und etcd — und eine Velero-`BackupStorageLocation` ist auf den System-Bucket verdrahtet. Die alten S3-Felder pro Tenant bei Postgres und ClickHouse sind zugunsten dieses Wegs deprecated.

**Velero ist jetzt ein Standard-Systempaket**, kein optionales mehr. Das behebt einen deterministischen Fehler: Der Standard-`backupstrategy-controller` hängt hart von Velero ab, weshalb er auf Clustern ohne Velero in `DependenciesNotReady` verharrte und die Plattform-HelmRelease nie Ready wurde. Bestehende Cluster erhalten Velero beim Upgrade im Namespace `cozy-velero`. Wer keine VMs sichert, deaktiviert es über `bundles.disabledPackages`.

Zwei neue Strategien kommen hinzu. Eine **etcd**-Strategie (clusterweite CRD `strategy.backups.cozystack.io Etcd`, nur S3) mit Snapshot-BackupJob und einem destruktiven In-place-RestoreJob. Und eine generische, anwendungsunabhängige **Job**-Strategie: Der Betreiber liefert ein Kubernetes-Job-Template, Cozystack rendert und startet es als einmaliges Backup und rendert es für die Wiederherstellung erneut mit `.Mode == "restore"`. Namespace-übergreifende Restores unterstützt die Job-Strategie nicht.

Referenzen: [Backup und Recovery für Anwendungen](https://cozystack.io/docs/v1.5/applications/backup-and-recovery/), [Backup-Konfiguration für Managed Apps](https://cozystack.io/docs/v1.5/operations/services/managed-app-backup-configuration/).

## Flux v2.8 und helm-controller-Sharding

Flux springt von v2.7.3 auf v2.8.0 — sowohl das eingebettete Flux des Management-Clusters als auch das optionale Flux-Addon für Tenants; die Charts flux-operator und flux-instance gehen von v0.33.0 auf v0.50.0.

Der helm-controller v1.5 bringt standardmäßig Server-Side Apply mit `--force-conflicts` und kstatus-basierte Health-Checks. Zwei praktische Konsequenzen: Falsch platzierte Chart-Felder, die v2.7 stillschweigend verworfen hat, sind jetzt harte Fehler (in diesem Release korrigiert für foundationdb, kafka, kubevirt-instancetypes, vm-instance und das Plattform-Chart), und übergeordnete HelmReleases warten, bis jede untergeordnete Ressource Ready ist, bevor sie selbst Ready melden. Die Korrektheit steigt, die Erstinstallation dauert länger und ist strenger — deshalb haben mehrere Pakete im selben Release explizite `spec.timeout`- und `dependsOn`-Einträge bekommen.

Parallel dazu verteilt ein neuer **flux-shard-operator** die HelmReleases der Tenants über mehrere helm-controller-Shards. Ein lauter Tenant — klassisch eine HelmRelease in endloser Remediation — kann die Reconciliation für alle anderen damit nicht mehr ausbremsen. Die Zuordnung erfolgt pro Tenant: Alle HelmReleases eines Tenants landen im selben Shard, zugewiesen greedy nach geringster Last, wobei ein Mutating Webhook das Shard-Label beim CREATE setzt. Voreinstellung ist `shardCount: auto` — die Shard-Zahl ergibt sich aus der Anzahl der Tenant-HelmReleases, kleine Cluster bleiben bei einem Shard, große Flotten sharden automatisch; ein Integer fixiert den Wert. Das handgebaute Deployment `flux-tenants` wird von Migration 44 geleert und stillgelegt.

## TLS für Managed-Datenbanken und Messaging

Vier Managed-App-Charts erhalten TLS über einen einzigen Wert `tls.enabled` mit einheitlicher Drei-Zustands-Semantik. Nicht gesetzt, erbt er von `external`: TLS ist an, wenn der Dienst extern veröffentlicht wird, und aus, wenn er cluster-intern bleibt. Ein explizites `true` oder `false` gewinnt immer. Der Trust Anchor ist in allen Fällen eine chart- oder operatorverwaltete selbstsignierte CA, die Clients abholen und pinnen — eine öffentlich vertrauenswürdige CA gibt es auf diesem Pfad nicht.

- **Kafka** liefert TLS auf dem externen LoadBalancer-Listener (Port 9094) aus, die Zertifikate verwaltet der Strimzi-Operator durchgängig. Clients vertrauen über die vom Operator veröffentlichten Secrets `<release>-cluster-ca-cert` und `<release>-clients-ca-cert`. Der externe Listener hängt jetzt nur noch an `external: true` und ist von `tls.enabled` entkoppelt.
- **NATS** und **Qdrant** nutzen eine eigenständige cert-manager-Kette (selbstsignierter Issuer, CA, Leaf) im Tenant-Namespace. NATS deckt Client-Verbindungen und Cluster-Routen ab, Qdrant REST und gRPC. Clients vertrauen dem Secret `<release>-ca`.
- **PostgreSQL** liefert über CNPG ohnehin immer TLS aus. Hier trägt `tls.enabled` bei `external: true` den externen Hostnamen in die SANs des operatorverwalteten Serverzertifikats ein — genau das lässt `sslmode=verify-full` gegen den externen Endpunkt funktionieren. Clients lesen `ca.crt` aus dem Secret `<release>-credentials`.

Die TLS-Arbeit dieses Releases endet bei diesen vier Charts. Die übrigen Managed Services — MariaDB, Valkey, ClickHouse, OpenSearch, RabbitMQ, MongoDB — bleiben unverändert.

## GPU-Passthrough ohne manuelles Patchen

Die GPU-Aktivierung ist jetzt auf allen drei Wegen verdrahtet, auf denen eine GPU einen Workload erreichen kann — jeder davon brauchte bisher manuelle Nacharbeit.

Für **Tenant-Kubernetes** bekommen Node-Gruppen, die `gpus` deklarieren, automatisch das Kubelet-Label `gpu=on`, sodass das Device-Plugin von HAMi schedulen und `nvidia.com/gpu` anbieten kann. Der GPU-Operator im Tenant lädt den Treiber mit `NVreg_NvLinkDisable=1` — das behebt den Passthrough einer einzelnen SXM-GPU, der zuvor bei „Fabric State: In Progress“ hängen blieb, während CUDA „system not yet initialized“ meldete. Beide Vorgaben lassen sich über `addons.gpuOperator.valuesOverride` überschreiben.

Für **KubeVirt-VMs** befüllt ein aktivierter `cozystack.gpu-operator` die KubeVirt-CR selbst: Er injiziert das Feature Gate `HostDevices` und füllt `permittedHostDevices` (sowie `mediatedDevicesConfiguration` für vGPU) aus mitgelieferten NVIDIA-Standardtabellen. GPU-VMs lassen sich damit ohne manuelles Patchen schedulen — zum Preis des Ownership-Wechsels aus den Upgrade-Hinweisen oben.

Zusätzlich gibt es eine dritte **`container`-Variante** des GPU-Operators für Hosts, auf denen NVIDIA-Treiber und Container-Toolkit bereits vom Betriebssystem installiert sind; sie stellt GPUs ausschließlich über das Device-Plugin an gewöhnliche Container-Pods bereit.

GPU-Sharing bleibt in Cozystack die Kombination aus NVIDIA GPU Operator und HAMi. Referenz: [GPU-Sharing und Operator-Varianten](https://cozystack.io/docs/v1.5/kubernetes/gpu-sharing/).

## Ebenfalls in v1.5.0

- **Löschschutz.** Objekte mit dem Label `platform.cozystack.io/no-delete=true` lassen sich nicht mehr direkt löschen. Die Prüfung läuft prozessintern im kube-apiserver über eine ValidatingAdmissionPolicy — ohne Webhook, DaemonSet, TLS oder zusätzliches Image. Geschützt sind in diesem Release die Namespaces `cozy-system` und `tenant-root`, die HelmRelease `tenant-root`, die ConfigMap `cozystack-version`, die OCIRepository `cozystack-packages`, die cert-manager-ClusterIssuer, der LinstorCluster und die Packages-CRDs. Zum Löschen zuerst das Label entfernen: `kubectl label <kind> <name> platform.cozystack.io/no-delete-`. Voraussetzung ist Kubernetes 1.30+.
- **Dropdowns im Dashboard mit Laufzeitdaten.** Eine neue, namespace-gebundene und nur lesbare Ressource `Option` (`core.cozystack.io/v1alpha1`), berechnet beim Lesen durch eine privilegierte In-Process-Provider-Registry, plus das Schema-Schlüsselwort `x-cozystack-options`, das Charts deklarieren. GPU-Geräte, KubeVirt-Instancetypes und -Preferences, Multus-Netze, VM-Images, Storage-Pools, StorageClasses, BackupClasses und Backup-Pläne werden damit im Cozystack Dashboard zu echten Dropdowns statt Freitext oder veralteter statischer Enums. Tenants erhalten lesenden Zugriff auf die Optionen im eigenen Namespace.
- **Tenants dürfen ihre VMs starten, stoppen und neu starten.** Das fehlende `update` auf den KubeVirt-Subressourcen `virtualmachines/start`, `/stop` und `/restart` ist jetzt auf Ebene `cozy:tenant:use:base` erteilt; die Power-Buttons im Dashboard lieferten zuvor für jede Tenant-Rolle 403.
- **Grafana-Dashboard „Tenant Overview“** für Plattform-Admins, ausgerollt nur in das Root-Grafana in `cozy-monitoring` und nie in die Grafanas einzelner Tenants, sowie eine neue Admin-Seite **Cluster Usage** mit eigener ClusterRole `cozystack-dashboard-cluster-usage` (clusterweite und Node-bezogene Auslastung inklusive GPUs). Ohne das Binding ist der Sidebar-Eintrag fail-closed.
- **`storageClass` ist bei 16 Stateful-Apps als unveränderlich markiert** — ein Wechsel migriert nie Daten, weil PVCs `storageClassName` bei der Erstellung festschreiben. Die Durchsetzung ist in v1.5.0 rein UI-seitig: Der aggregierte Apiserver wertet die CEL-Regel bei Update noch nicht aus, ein direktes `kubectl patch` wird also weiterhin akzeptiert.
- Erwähnenswerte Fixes: `cozystack-api` veröffentlicht das freie `.spec` jetzt als `x-kubernetes-preserve-unknown-fields` statt `additionalProperties: true` — Letzteres brachte den kube-controller-manager clusterweit mit einem Nil-Pointer-Panic im VAP-Typechecker zum Absturz. Tenant-Kubeconfigs verwenden für den Keycloak-OIDC-Issuer den Root-Host, sodass `kubectl oidc-login` bei Nicht-Root-Tenants nicht mehr an der TLS-Prüfung scheitert. `config_path` für Registry-Konfiguration funktioniert auf containerd-2.x-Tenant-Nodes. RWX-Block-Volumes laufen über den Upstream-Hotplug-Detach statt über den NFS-Cleanup-Zweig. OpenSearch wird endlich vom PaaS-Bundle referenziert.

## Plattformkomponenten

| Komponente | Änderung |
|---|---|
| Flux | v2.7.3 → v2.8.0 (Charts flux-operator/flux-instance v0.33.0 → v0.50.0) |
| MetalLB | v0.15.2 → v0.16.1, FRR-K8s als Standard-Backend, Metriken nur noch über HTTPS |
| SeaweedFS | 4.05 → 4.31 (siehe Upgrade-Warnung oben) |
| etcd-operator | v0.4.3 → v0.4.5 (v0.4.5 repariert einen Restore-Datadir-Pfad, der Restores unbrauchbar machte) |
| ouroboros | v0.7.2 → v0.8.0 |
| seaweedfs-cosi-driver | v0.3.1, mit Selbstheilung bei verwaisten Sockets |
| kuberture | neues optionales Systempaket v0.1.1 |
| Go-Toolchain | 1.26.4, `golang.org/x/net` v0.55.0 |

`kuberture` ist standardmäßig aus. Es schließt eine Lücke von external-dns — external-dns kann keine EndpointSlices lesen — indem es die EndpointSlice `default/kubernetes` des API-Servers beobachtet und annotierte Headless Services erzeugt, die external-dns konsumiert, um den Kubernetes-API-Endpunkt im DNS zu veröffentlichen. Aktivierung über `bundles.enabledPackages` mit mindestens einem Eintrag unter `config.outputs`.

## Die Patch-Linie 1.5

- **v1.5.1** (23. Juni 2026) behebt eine Regression aus v1.5.0: Für die KubeVirt-Preferences `windows.11`, `windows.2k22` und `windows.2k25` war der persistente EFI/TPM-Zustand wieder aktiviert worden. KubeVirt legt dafür ein ReadWriteOnce-PVC `persistent-state-for-<vm>` auf der StorageClass `replicated` an — das bindet die VM an ihren Node und blockiert Live-Migration und Node-Drains. Auf Clustern mit `evictionStrategy: LiveMigrate` kann das ein Cluster-Upgrade vollständig anhalten. Secure Boot und vTPM funktionieren weiterhin; nur der Zustand überlebt keinen Reboot.
- **v1.5.2** (3. Juli 2026) bringt zehn Fixes, darunter ein Kamaji-DataStore-Deadlock beim Löschen, der Tenant-Namespaces festfahren konnte, eine victoria-metrics-operator-Abhängigkeit, die bei `certManager.enabled: false` nie auflösbar war, und MariaDB-Instanzen mit einer Replik, die der Operator-Webhook ablehnte.
- **v1.5.3** wurde getaggt, das GitHub-Release blieb aber ein Entwurf und wurde nie veröffentlicht. Kein Betreiber hat es erhalten.
- **v1.5.4** (19. August 2026) ist das letzte Release der 1.5-Linie und die Version, die ausgerollt gehört.

## Upgrade

```bash
kubectl annotate namespace cozy-system helm.sh/resource-policy=keep --overwrite
kubectl annotate configmap -n cozy-system cozystack-version helm.sh/resource-policy=keep --overwrite

helm upgrade cozystack oci://ghcr.io/cozystack/cozystack/cozy-installer \
  --version 1.5.4 \
  --namespace cozy-system
```

Die Annotationen sind Pflicht, keine Empfehlung: Ohne sie kann das Entfernen oder Aktualisieren des Installer-Releases den Namespace `cozy-system` samt Inhalt löschen. Bestehende Values wiederverwenden. Vollständiger Ablauf und Prüfschritte danach: [Upgrade-Leitfaden](https://cozystack.io/docs/v1.5/operations/cluster/upgrade/).

## Wo Ænix ins Spiel kommt

Cozystack ist ein CNCF-Sandbox-Projekt unter Apache 2.0, und die beschriebenen Upgrade-Pfade gelten für alle gleichermaßen. Ænix pflegt das Projekt und bietet [Enterprise-Support für Cozystack](/de/produkte/cozystack-enterprise-support/) — inklusive Upgrade-Planung für die scharfen Kanten dieses Releases — für Teams, die die Plattform nicht allein tragen wollen.

## Release-Links

- [Cozystack v1.5.0 auf GitHub](https://github.com/cozystack/cozystack/releases/tag/v1.5.0)
- [Cozystack v1.5.4 auf GitHub](https://github.com/cozystack/cozystack/releases/tag/v1.5.4)
- [Cozystack-v1.5-Dokumentation](https://cozystack.io/docs/v1.5/)
- [Telegram](https://t.me/cozystack) und [Slack](https://kubernetes.slack.com/archives/C06L3CPRVN1) (Einladung über [slack.kubernetes.io](https://slack.kubernetes.io/))
