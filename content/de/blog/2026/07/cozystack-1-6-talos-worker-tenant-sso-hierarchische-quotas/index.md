---
title: "Cozystack 1.6: Talos-Worker, Tenant-SSO, SecurityGroups und hierarchische Quotas"
description: "Cozystack v1.6.0 stellt Tenant-Worker auf Talos um und bringt Tenant-OIDC, eine SecurityGroup-Firewall-API, hierarchische Quotas und etcd v1alpha2."
slug: "cozystack-1-6-talos-worker-tenant-sso-hierarchische-quotas"
date: "2026-07-22"
author: "Timur Tukaev"
type: "announcement"
topics: ["Cozystack", "Kubernetes", "Talos", "Multi-tenancy", "KubeVirt", "Platform Engineering"]
language: "de"
hreflang_en: "/blog/2026/07/cozystack-1-6-talos-workers-tenant-sso-and-hierarchical-quotas/"
companion_landing: "/de/produkte/cozystack-enterprise-support/"
companion_label: "Enterprise-Support für Cozystack ansehen →"
cover_image: ""
---

{{< placeholder-image width="1200" height="630" label="Cozystack v1.6.0 — Titelbild (1200×630)" >}}

Cozystack v1.6.0 ist am 22. Juli 2026 erschienen. Das Release ersetzt den Ubuntu-und-kubeadm-Bootstrap der Tenant-Kubernetes-Worker durch Talos Linux über Cluster API, schließt die Migration auf `etcd-operator v1alpha2` mit In-place-Adoption laufender Cluster ab, bringt OIDC-Single-Sign-on für Tenant-kube-apiserver und einzelne Grafana-Instanzen, führt die tenantseitige Firewall-API `SecurityGroup` ein und macht Ressourcenquotas hierarchisch. Alle Fixes aus v1.5.1 und v1.5.2 sind enthalten.

Es bringt außerdem die größte Upgrade-Oberfläche seit v1.0 mit. Die Migrations-`targetVersion` springt von 45 auf 54, es laufen also die Migrationen 45 bis 53 als Pre-Upgrade-Hooks — und drei davon können das Upgrade blockieren oder den Cluster festfahren, wenn ihre Voraussetzungen nicht erfüllt sind. Planen Sie ein Wartungsfenster und arbeiten Sie die Prüfungen unten ab.

## Vor dem Upgrade lesen

**Steigen Sie auf v1.6.2 um, nicht auf v1.6.0.** Drei der Fixes nach v1.6.0 gehören zur Sorte, die still versagt:

- v1.6.0 lieferte eine **fail-open**-Fassung von `hack/seaweedfs-naming-audit.sh` aus — ausgerechnet des Skripts, dessen Ausgabe einen Runbook-Schritt freigibt, der PVCs löscht. Jeder `kubectl`-Aufruf darin war mit `2>/dev/null` stummgeschaltet, ein Timeout oder eine RBAC-Ablehnung erzeugte also eine leere „alles sauber“-Tabelle, die byte-identisch zu der einer tatsächlich sauberen Flotte war. Behoben in v1.6.1. Führen Sie das Audit aus einem Checkout ab v1.6.1 aus und lesen Sie den **Exit-Code**, nicht die Tabelle. Ein sauberes Ergebnis aus der v1.6.0-Fassung beweist nichts.
- v1.6.2 behebt, dass Velero-CRDs auf der zuerst installierten Version einfrieren, weil Helm das Verzeichnis `crds/` eines Charts beim Upgrade nie anfasst. Sobald das Velero-Image auf eine Version mit neuen Backup-Phasen wechselte, wies der Apiserver die Phasenübergänge gegen die veralteten CRDs ab — **die Backups liefen nicht mehr, während die HelmRelease grün blieb**.
- Ebenfalls in v1.6.2: Die Standard-`Strategy`-CRs und die Velero-`BackupStorageLocation` hingen an einem Helm-`lookup`, der ausgeführt wurde, während das referenzierte Objekt noch entstand. Lieferte der Lookup nichts, wurden die Objekte dauerhaft übersprungen — der helm-controller rendert eine Release mit unveränderten Charts und Values nicht erneut.

Wer von der 1.5-Linie kommt, geht **zuerst über v1.5.4**. v1.5.4 ist das erste 1.5.x-Release mit `targetVersion: 46`, und dessen Slot 45 setzt `helm.sh/resource-policy: keep` auf die CAPI-Objekte `KubeadmConfigTemplate`. 1.6 entfernt `KubeadmConfigTemplate` vollständig aus dem Tenant-Chart `kubernetes` — die Worker wechseln auf `TalosConfigTemplate` —, sodass Helm das Template ohne diesen Pin löscht, während das kubeadm-basierte MachineSet noch mitten im Rollover ist und seine `bootstrap.configRef` darauf zeigt. Vorher prüfen:

```bash
kubectl get kubeadmconfigtemplates.bootstrap.cluster.x-k8s.io -A \
  -o custom-columns='NS:.metadata.namespace,NAME:.metadata.name,KEEP:.metadata.annotations.helm\.sh/resource-policy'
```

Eine Zeile mit `<none>` bedeutet, dass der Pin nicht gesetzt wurde. Das gehört vor dem 1.6-Upgrade korrigiert.

### Prüfungen vor dem Upgrade

Diese Kommandos gegen den Management-Cluster ausführen, bevor das v1.6-Plattformpaket angewendet wird.

**1. Die etcd-Adoption braucht ein erreichbares Backup-Ziel.** Migration 50 adoptiert jeden Legacy-Cluster `etcd.aenix.io/v1alpha1` auf den neuen Operator und legt vorher zwingend einen Snapshot an. Lässt sich das Snapshot-Ziel nicht auflösen, beendet sich die Migration mit Exit 1 und stoppt das Upgrade.

```bash
kubectl get etcdclusters.etcd.aenix.io -A
kubectl get etcds.strategy.backups.cozystack.io cozy-default-etcd
kubectl get secret cozy-backups-creds -n cozy-velero
kubectl get buckets.apps.cozystack.io cozy-backups -n tenant-root
```

Gibt das erste Kommando nichts aus, ist Migration 50 wirkungslos.

**2. SeaweedFS-Namens-Audit.** v1.6.0 pinnt `fullnameOverride: seaweedfs` und adoptiert den laufenden Workload-Satz in place. Zwei Zustände lassen sich nicht automatisch adoptieren, und das Chart bricht das Rendering ab, statt zu raten: Klasse `S` (frisch auf 1.5.x installiert, Daten auf PVCs `data1-seaweedfs-system-volume-*`) und Klasse `MIXED` (beide Namensgenerationen vorhanden). Beide müssen vor dem Upgrade nach dem Runbook `seaweedfs-431-rename-recovery` bereinigt werden. Klasse `L` erfordert nichts. Ein Cluster, der von 1.4.x direkt auf 1.6 geht, hat nie umbenannt und ist nicht betroffen.

**3. Tenant-Cluster noch auf Kubernetes v1.30.** v1.30 fällt aus der Talos-zu-Kubernetes-Supportmatrix, und das Chart verweigert das Rendering. Migration 46 patcht lebende CRs auf v1.31, aber eine über GitOps verwaltete CR wird beim nächsten Source-Reconcile wieder überschrieben — `spec.version` also in Git anheben.

```bash
kubectl get kuberneteses.apps.cozystack.io -A \
  -o custom-columns='NS:.metadata.namespace,NAME:.metadata.name,VERSION:.spec.version'
```

**4. Handgebaute StorageClasses im Tenant, die kollidieren.** Remote zugreifbare LINSTOR-StorageClasses werden jetzt unter demselben Namen innerhalb jedes Tenant-Clusters angelegt. Eine manuell erstellte Tenant-StorageClass mit kollidierendem Namen — typischerweise `replicated` — blockiert die propagierte Klasse und legt die Tenant-CSI-Release lahm. Jede solche, nicht von Helm verwaltete Klasse vorher löschen. Infrastrukturklassen, die node-lokal bleiben müssen, brauchen explizit `linstor.csi.linbit.com/allowRemoteVolumeAccess: "false"`; eine fehlende Annotation gilt als remote zugreifbar.

**5. Veraltete Backup-Values im etcd-Modul.** Der Block `backup.*` am Tenant-Modul `etcd` entfällt in diesem Release. Vorher auf eine `BackupClass` mit der `Etcd`-Strategie umstellen.

**6. Aufstieg von v1.4.x?** Die Anforderung aus v1.5.0 gilt weiterhin: Kubernetes 1.33 oder neuer auf dem Management-Cluster und auf jedem Tenant-Cluster mit Flux-Addon.

## Talos Linux für Tenant-Kubernetes-Worker

Tenant-Worker booten nicht länger Ubuntu und bootstrappen nicht mehr über kubeadm. Phase 1 des Kubernetes-App-Splits ersetzt diesen Pfad durch Talos Linux, gesteuert vom `cluster-api-bootstrap-provider-talos` (CABPT v0.6.12), der als zweiter Bootstrap-Provider neben kubeadm registriert ist, plus einem Sidecar `clastix/talos-csr-signer` im Kamaji-Control-Plane-Pod.

Die Talos-PKI — eine Ed25519-CA plus trustd-TLS — wird über cert-manager mit stabilen, wiederverwendeten Talos-Secrets erzeugt. Der Kamaji-Control-Plane-Provider trägt einen Upstream-gebundenen Patch, der `KamajiControlPlane.spec.network.additionalServicePorts` freilegt, damit trustd (50001/TCP) am Apiserver-Service veröffentlicht werden kann. Die Worker booten das Talos-OpenStack-Raw-Image über ein CDI-`DataVolume` aus der Image Factory, wobei die Systemplatte als virtio-blk mit `blockSize.custom: logical=512, physical=4096` bereitgestellt wird — damit 4Ki-native Backends wie LINSTOR/DRBD unter den `O_DIRECT`-Schreibvorgängen von QEMU korrekt arbeiten und SeaBIOS trotzdem bootet.

Das separate PVC `disk-kubelet` entfällt. Talos legt `EPHEMERAL` selbst auf der einen Systemplatte an, die `nodeGroups[*].diskSize` jetzt dimensioniert.

Betrieblich bedeutet das:

- **Bestehende Tenants rollen automatisch um.** Alte Maschinen werden ohne manuellen Eingriff durch Talos-Worker ersetzt, und Migration 45 pinnt die auslaufenden `KubeadmConfigTemplate`-Objekte mit `helm.sh/resource-policy: keep`, damit Helm sie nicht mitten im Rollover entfernt. Planen Sie trotzdem einen vollständigen Worker-Pool-Austausch pro Tenant-Cluster ein: Worker-Platten werden neu bereitgestellt, Container-Images neu gezogen.
- **Die MachineHealthCheck-Remediation der Worker ist jetzt standardmäßig aktiv.** `maxUnhealthy` wechselt von fest verdrahteten `0` auf `nodeHealthCheck.maxUnhealthy` mit Vorgabe `"50%"`. CAPI löscht und ersetzt jetzt also ungesunde Worker-Machines. Mit `nodeHealthCheck.maxUnhealthy: "0%"` behalten Sie das alte Verhalten, bis die Flotte auf Talos stabil ist. Zusätzlich gibt es Overrides pro Node-Gruppe für `maxUnhealthy` und `nodeStartupTimeout`, sodass eine Stateful-Gruppe auf `0%` bleiben kann, während eine zustandslose `50%` toleriert.
- **Die Standard-Node-Gruppe `md0` wird nicht mehr in jeden Cluster gemischt.** `nodeGroups` ist jetzt `{}` als Vorgabe, und `md0` greift nur noch, wenn gar keine Node-Gruppen konfiguriert sind. Migration 47 pinnt `md0` explizit auf bestehende CRs, um die laufende Topologie zu erhalten; sie ist fail-closed und bricht das Upgrade ab, statt Helm ein lebendes `md0`-MachineDeployment prunen zu lassen.
- **Neue Cluster mit `nodeGroups: {}` starten ohne Worker.** Das Chart verwaltet `MachineDeployment.spec.replicas` nicht mehr — der Cluster-Autoscaler besitzt das Feld allein, initialisiert aus `minReplicas: 0`. Entweder eine Node-Gruppe mit `roles: [ingress-nginx]` und `minReplicas >= 1` mitgeben, oder den Autoscaler `md0` hochfahren lassen, sobald ingress-nginx-Pods `Pending` werden. Der Vorteil für bestehende Cluster: `helm upgrade` drainiert Worker nicht mehr bei jedem Plattform-Bump auf fest verdrahtete `replicas: 2`.
- **Air-Gapped-Installationen verlieren den `registries.mirrors`-Durchgriff** auf Tenant-Worker — das per Helm gerenderte Secret `*-patch-containerd` hat in der Talos-Machineconfig keinen Konsumenten mehr und wurde entfernt. Talos-OS-Image und Installer bleiben über `talos.imageFactoryURL` und `talos.installerRepository` überschreibbar, Registry-Spiegelung im Gast ist aber ein Follow-up für Phase 2.
- **Worker-Platten nutzen jetzt standardmäßig die anwendungsseitige StorageClass `replicated`.** Eine Node-Gruppe ohne gesetztes `storageClass` griff früher auf die Default-StorageClass des Management-Clusters zurück; jetzt fällt sie auf die Anwendungs-`storageClass` zurück, weil linstor-csi v1.11.2 ReadWriteMany-Volumes auf einer Nicht-DRBD-Klasse ablehnt und Worker-VMs RWX für die Live-Migration brauchen. Das gerenderte Worker-Template ändert sich dadurch, jedes Worker-MachineDeployment rollt also einmal.

Die Tenant-HelmRelease `kubernetes` meldet jetzt Ready, sobald Helm fertig ist (`DisableWait`), und wartet nicht mehr auf Worker- oder Addon-Bereitschaft; die Gesundheit des Worker-Rollouts verfolgt stattdessen der `WorkloadMonitor`.

## etcd-operator v1alpha2 mit In-place-Adoption

Der etcd-Stack wechselt auf die gespendete API `etcd-operator.cozystack.io/v1alpha2` — ein Membership-API-Lebenszyklus anstelle des StatefulSet-Modells —, ausgeliefert über ein von Cozystack gepflegtes Chart mit appVersion v0.5.2. Die CRDs liegen jetzt im eigenen Paket `etcd-operator-crds` und lassen sich damit vor dem Controller installieren.

Interessant ist das Upgrade. Migration 50 läuft als Pre-Upgrade-Hook, solange noch der alte Operator aktiv ist, und schreibt mit dem Werkzeug `etcd-migrate` aus dem Migrations-Image Ownership, Labels und CRs so um, dass der neue Operator beim ersten Reconcile die laufende Datenebene übernimmt — ohne Datenumzug, ohne Pod-Neustart. Vorher legt sie zwingend einen Snapshot jedes adoptierten Clusters im Bucket `cozy-backups` an, unter einem System-Key-Präfix mit für Tenants unsichtbaren Credentials, und bricht laut ab, statt ohne Snapshot zu adoptieren. Außerdem stellt sie Server- und Peer-Zertifikate mit dem nativen Member-Wildcard-SAN des neuen Operators neu aus: Im TLS-Modus `secretRef` erzeugt der Operator selbst keine Zertifikate, ein adoptierter Cluster ohne die native Domain im Zertifikat würde also beim ersten Memberwechsel still an TLS scheitern — und dabei weiterhin `Available=True` melden.

Bleibt Migration 50 auf einem Cluster stehen, der bewusst keinen Backup-Speicher hat, gibt es einen dokumentierten Notausgang:

```bash
kubectl edit package.cozystack.io cozystack.cozystack-platform
```

```yaml
spec:
  components:
    platform:
      values:
        migrations:
          etcdAdoptSkipBackup: true
```

Flux rendert das Plattform-Chart neu, der Hook läuft erneut und adoptiert jedes Legacy-etcd ohne Snapshot. **Eine misslungene Adoption eines etcd unter einer Tenant-Control-Plane ist ohne Snapshot nicht wiederherstellbar.** Setzen Sie das Flag danach zurück auf `false`, sonst überspringt auch die nächste etcd-Migration ihren Snapshot.

## SecurityGroup: Netzwerkrichtlinien in Tenant-Hand

Die neue, tenantseitige und namespace-gebundene Firewall-Ressource `sdn.cozystack.io/v1alpha1 SecurityGroup` erlaubt es Tenants, die Netzwerkrichtlinien ihrer Anwendungen zu verwalten, ohne jeden Zugriff auf die API-Gruppe `cilium.io`.

Eine `SecurityGroup` ist eine Mitgliedschaftsgruppe. Sie besitzt ein Mitgliedschafts-Label (`securitygroup.sdn.cozystack.io/<name>`), das ein neuer `securitygroup-controller` auf die Pods jeder in `spec.attachments` gelisteten Managed Application setzt und beim Entfernen eines Attachments wieder abzieht. Die Gruppe bildet 1:1 auf eine `CiliumNetworkPolicy` im selben Namespace ab, deren `endpointSelector` genau dieses Label ist — eine `SecurityGroup` kann damit mehrere Anwendungen gleichzeitig abdecken, und `fromSG`/`toSG`-Peers lösen Gruppe-zu-Gruppe-Referenzen live in der Cilium-Datenebene auf. Ein Finalizer schützt die zugrunde liegende Policy, damit Member-Labels immer vor ihrem Entfernen abgezogen werden; die REST-Storage der aggregierten API setzt sie bei jedem Schreibvorgang neu, sodass ein vollständig ersetzendes `PUT` sie nicht verwaisen lassen kann.

Die wichtige Einschränkung: Ingress- und Egress-Regeln **erlauben** ausschließlich zusätzlichen Verkehr. Eine leere Regelliste isoliert die Member-Pods nicht, denn die effektive Konnektivität bleibt die Vereinigung aller Policies, die einen Pod selektieren — einschließlich der pauschal erlaubenden Baseline der Plattform. Default-Deny ist separat als künftige Arbeit vorgemerkt. Behandeln Sie eine `SecurityGroup` in diesem Release also nicht als Segmentierungsgrenze.

## Hierarchische Ressourcenquotas

`tenant.spec.resourceQuotas` wurde bisher zu einer schlichten `ResourceQuota` pro Namespace, die den Tenant-Baum vollständig ignorierte: Ein Super-Admin innerhalb eines quotierten Tenants konnte einen Sub-Tenant mit größerer oder ganz ohne Quota anlegen und mehr verbrauchen als zugeteilt. Die deklarierte Quota eines Tenants ist jetzt das Budget für seinen gesamten Teilbaum.

Durchgesetzt wird das in zwei zusammenwirkenden Schichten, analog zur ClusterResourceQuota-Aufteilung in OpenShift. Ein Gate zum Deklarationszeitpunkt im aggregierten Apiserver lehnt deterministisch jeden Sub-Tenant ab, dessen deklarierte Quota das verbleibende Budget des Elterntenants übersteigt. Ein Laufzeit-Enforcer im `cozystack-controller` pflegt pro Namespace eine `ResourceQuota` namens `tenant-quota-allocated`, die jedes Poolmitglied auf seinen Anteil begrenzt und die Nutzung über den Teilbaum aggregiert. Kubernetes setzt in einem Namespace stets die restriktivste ResourceQuota durch — das greift also, ohne mit Flux um die vom Chart gerenderte `tenant-quota` zu ringen.

Prüfen Sie die Sub-Tenant-Quotas vor dem Upgrade. Ein Elternbudget unterhalb der Summe seiner Kinder erzeugt ein Event `QuotaOvercommitted`, und `--tenant-quota-buffer-percent` am `cozystack-controller` bläst Poolbudgets während des Rollouts temporär auf, damit Workloads oberhalb einer frisch greifenden Quota weiterlaufen. Es gibt weder neue API-Typen noch Änderungen am Tenant-Chart — das Feature arbeitet mit dem bestehenden Feld.

## OIDC-Single-Sign-on für Tenant-Kubernetes und Grafana

Zwei symmetrische Phase-1-Funktionen erlauben es einem Tenant, einen einzelnen Workload über einen flachen Selektor an den Keycloak-Realm `cozy` der Plattform anzubinden — ohne Konfiguration auf Plattformebene.

**Tenant-kube-apiserver.** Jede `Kubernetes`-CR erhält `spec.oidc.mode: System | CustomConfig | None`, Vorgabe `None`. `System` vertraut dem Realm `cozy` über einen Public Client pro Cluster mit Audience-Bindung; `CustomConfig` akzeptiert eine vom Tenant gelieferte strukturierte `AuthenticationConfiguration`. `spec.oidc.users[]` erzeugt pro Nutzer ein ClusterRoleBinding im Tenant-Cluster (`admin` auf `cluster-admin`, `view` auf `view`). Im Modus `System` wird ein Secret `<release>-oidc-kubeconfig` mit fertigem `kubectl oidc-login`-Exec-Block über das Cozystack Dashboard bereitgestellt — ein Tenant-Nutzer kommt damit ohne Zutun des Betreibers von „Cluster existiert“ zu „kubectl läuft mit meiner SSO-Identität“. Der zugrunde liegende Durchgriff auf `controlPlane.apiServer.extraArgs`, `extraVolumes` und `extraVolumeMounts` der `KamajiControlPlane` ist zusätzlich direkt zugänglich.

**Grafana.** Jede `Monitoring`-CR bekommt denselben Selektor. `System` verdrahtet pro Instanz einen vertraulichen Keycloak-Client mit Audience-Bindung; die Autorisierung erfolgt anwendungsseitig: `spec.oidc.users: [{email, role: Admin|Editor|Viewer}]` wird von einem chart-eigenen Post-Install- und Post-Upgrade-Job in Grafanas Main Org abgeglichen — Nutzer werden angelegt, der Organisation hinzugefügt, ihre Rolle gepatcht und verwaiste Mitglieder entfernt. `CustomConfig` akzeptiert eine vom Tenant gelieferte `[auth.generic_oauth]`-Konfiguration, entweder inline als Map oder als Secret mit Schlüssel `auth.ini`; im Secret-Fall ist `spec.oidc.users` nicht unterstützt, und das Chart bricht das Rendering bei dieser Kombination ab, statt sie still zu ignorieren. Das Secret mit `admin_user`/`admin_password` bleibt in allen Modi der dokumentierte Break-Glass-Zugang.

Referenz: [OIDC aktivieren](https://cozystack.io/docs/v1.6/operations/oidc/enable_oidc/).

## Löschen einer Anwendung gibt jetzt ihren Speicher frei

Das Löschen einer Managed Application ließ bisher Volumes und vom Operator erzeugte Secrets zurück. Ein Zug über zehn Pull Requests im gesamten Katalog schließt das mit Post-Delete-Hooks und PVC-Retention-Policies: ClickHouse-Keeper-, Daten- und Log-PVCs; das Daten-PVC von Qdrant; das Daten-PVC von OpenBAO; Speicher und TLS-Secrets von VictoriaMetrics und VictoriaLogs im Tenant-Monitoring-Modul; Volume-PVCs des Tenant-Moduls seaweedfs; die PVCs `data-etcd-*` des Tenant-etcd-Moduls; Harbors jobservice- und trivy-PVCs; die vom MariaDB-Operator erzeugten Passwort-Secrets; ACME-Ressourcen von Bucket und Gateway.

**Damit ist Löschen unwiderruflich.** Das ist der Sinn der Änderung, aber es ist ein echter Verhaltenswechsel gegenüber „Löschen leakt das Volume, und man konnte es zurückholen“. Harbors PVCs werden erzwungen gelöscht und überstimmen `persistence.resourcePolicy=keep`; Harbors CNPG-Datenbank-PVCs bleiben unangetastet. Die Migrationen 48 und 51 tragen das Release-Label auf bereits existierenden ClickHouse-Keeper- und Monitoring-PVCs nach; beide sind bewusst Best-Effort, im schlechtesten Fall bleibt es beim bisherigen Leak.

Vor dem Löschen sichern. Und den Tenants sagen, dass das jetzt gilt.

## Ebenfalls in v1.6.0

- **Wildcard-Zertifikate durchgängig.** `publishing.certificates.wildcardSecretName` aus v1.5 galt nur für den Root-Tenant. Der Plattform-Controller repliziert das Zertifikat jetzt in jeden Tenant-Namespace, in dem TLS terminiert wird — Ingress-Controller und Gateways pro Tenant liefern es automatisch aus, ohne namespace-übergreifenden Secret-Zugriff. Neu und optional ist außerdem `publishing.certificates.wildcard` (Vorgabe `false`): Die Plattform stellt darüber ein einziges Zertifikat `*.<root-host>` per DNS-01 auf dem Standard-ingress-nginx-Pfad aus — der praktische Ausweg aus den Rate Limits von Let's Encrypt bei größeren Installationen.
- **Keycloak** erhält vier unabhängige Opt-ins: einen KMS-verschlüsselnden Datenbank-Proxy für spaltenweise PII-Verschlüsselung im Ruhezustand, wahlweise mit statischem KEK oder Vault Transit (inklusive Vault-Auth über Kubernetes und AppRole); ein `ingress.adminHost`, das Admin-Konsole und Administration-REST-API über einen eigenen Hostnamen und eine eigene Route ausliefert, per `publishing.ingressNameAdmin` an ein privates Gateway oder eine eigene ingressClass anbindbar; Barman-basierte S3-Backups der CNPG-Datenbank; und ein wählbares Login-Theme über die `branding`-Values der Plattform. Alles standardmäßig aus.
- **Unveränderliche Tags und RC-zu-Stable-Promotion.** Ein stabiles Release ist jetzt die byte-identische Beförderung des getesteten Release Candidate: Kein Tag wird je zwangsverschoben, Stable wird nie neu gebaut, Images werden per Digest umgetaggt. Der cron-getriebene Workflow `auto-release.yaml` für Patch-Tags ist ersatzlos entfallen.
- **Kamaji läuft standardmäßig mit zwei Repliken** und weicher Pod-Anti-Affinität; Telemetrie-Handler und -Webhook sind entfernt, was die Admission-p99 des Apiservers für `TenantControlPlane`-Webhooks auf Multi-Tenant-Clustern um rund 70 % senkt.
- **Remote zugreifbare LINSTOR-StorageClasses werden in Tenant-Cluster propagiert**, unter demselben Namen; die über `storageClass` benannte Klasse (Vorgabe `replicated`) wird zur Tenant-Default-Klasse, die alte Klasse `kubevirt` bleibt als Alias erhalten.
- Das **Cozystack Dashboard** zeigt die externe LoadBalancer-IP jetzt direkt im Services-Tab der Anwendung und rendert explizite Fehler- und Unbekannt-Zustände statt eines endlosen Spinners. Die Konsolen-SPA wird jetzt aus dem Monorepo gebaut; Image und Digest bleiben unverändert.
- Nach dem Upgrade **Scrape-Targets auf Port 10250 prüfen** — der cert-manager-Webhook, der external-secrets-Webhook und der metrics-server-Listener sind alle von diesem Port weggezogen.

## Plattformkomponenten

| Komponente | Änderung |
|---|---|
| Talos Linux | v1.13.0 → v1.13.6, Kernel 6.18.29 → 6.18.38; schließt die KVM-Ausbrüche CVE-2026-53359 und CVE-2026-46113 |
| etcd-operator | v0.4.5 → v0.5.2, neue API `v1alpha2` |
| Cilium | 1.19.3 → 1.19.5 |
| KubeVirt | v1.8.4 (behebt auf Kubernetes 1.36 in `Scheduled` hängende VMIs; schließt CVE-2026-35469) |
| Velero | 1.17.0 → 1.18.1, parallele Backup-Verarbeitung, Cache-Volumes für Data Mover |
| Vertical Pod Autoscaler | 1.3.0 → 1.5.0, In-place-Resizing von Pods jetzt Beta |
| Harbor | 2.14.2 → 2.15.1 |
| Keycloak | 26.5.2 → 26.6.3 |
| LINSTOR | 1.33.2 → 1.33.3, linstor-csi v1.11.2 |
| FoundationDB-Operator | v2.13.0 → v2.30.0 |
| HAMi | 2.8.1 → 2.9.0 |
| Percona-MongoDB-Operator | 1.21.1 → 1.22.0 |
| OpenBAO | v2.5.0 → v2.5.1 |
| csi-driver-nfs | 4.11.0 → 4.13.3 |
| CoreDNS-Chart | 1.43.2 → 1.46.0 |
| OpenCost | 1.111.0 → 1.120.3 |

Die Talos-Systemerweiterungen sind auf den Stand 20260622 aktualisiert, darunter DRBD 9.3.2 und ZFS 2.4.3. Schon das allein rollt jeden Tenant-Worker-Pool einmal durch, weil das Worker-Template für das neue Image umbenannt wird. Die Patch-Versionen für Managed Kubernetes gehen auf v1.32.13, v1.33.13, v1.34.9 und v1.35.6; v1.30 fällt aus der Supportmatrix für Tenants.

Zwei API-Gruppen sind vor allem als Nicht-Ereignis erwähnenswert. Bei `SecurityGroup` wurde `spec.targetRef` noch vor dem Release durch das Mitgliedschaftsmodell `spec.attachments[]` ersetzt — Objekte umschreiben muss also nur, wer zwischen dem 30. Juni und dem 16. Juli 2026 `main` verfolgt hat. Die Gruppe `network.cozystack.io` (`ExposureClass` / `ServiceExposure`) wurde innerhalb desselben Zyklus eingeführt und wieder entfernt und ist **nicht** Teil von v1.6.0 — nativer `Service` mit `type: LoadBalancer` und `loadBalancerClass` deckt dasselbe ab, freigelegt als `publishing.loadBalancerClass`.

## Die Patch-Linie 1.6

- **v1.6.1** (5. August 2026): CNPG-Operator und CRDs gemeinsam auf 1.28.2 gehoben, was einen PVC-Resize-Deadlock behebt, der einen PostgreSQL-Cluster mit einer einzigen Instanz ohne jede Instanz zurücklassen konnte; der Job `talos-reconcile` wird jetzt auch für die implizite Gruppe `md0` gerendert, sodass die erste vom Autoscaler getriebene Skalierung nicht mehr Machines ohne passendes `TalosConfigTemplate` dauerhaft blockiert; der Pre-Delete-Job `keycloak-configure` patcht die HelmRelease im richtigen Namespace und macht Deinstallation und Neuinstallation von Keycloak wieder möglich; das SeaweedFS-Namens-Audit bricht bei Fehlern hart ab; etcd-operator auf v0.5.4.
- **v1.6.2** (19. August 2026): das Lookup-Gate der Backup-Strategien, das Velero-CRD-Upgrade und das Nachladen des kube-ovn-Webhook-Zertifikats. Letzteres wiegt schwer: `kube-ovn-webhook` lud sein Serverzertifikat nur beim Start und las es nie neu ein, sodass nach einer cert-manager-Erneuerung unter `failurePolicy: Fail` jede Pod-Erstellung in Tenant-Namespaces abgelehnt wurde — inklusive `virt-launcher`-Pods, was den VMI-Start blockierte. Außerdem: barman-cloud fordert S3-Prüfsummen nur noch, wenn nötig, sodass Backups nach Ceph RGW und manchen MinIO- und R2-Builds nicht mehr komplett scheitern; geshardete helm-controller crashloopen hinter einem HTTP-Proxy nicht mehr; `kubectl apply --validate` funktioniert wieder gegen die API-Gruppen `core` und `sdn`.

## Upgrade

```bash
kubectl annotate namespace cozy-system helm.sh/resource-policy=keep --overwrite
kubectl annotate configmap -n cozy-system cozystack-version helm.sh/resource-policy=keep --overwrite

helm upgrade cozystack oci://ghcr.io/cozystack/cozystack/cozy-installer \
  --version 1.6.2 \
  --namespace cozy-system
```

Die Annotationen sind Pflicht — ohne sie kann das Entfernen oder Aktualisieren des Installer-Releases den Namespace `cozy-system` samt Inhalt löschen. Bestehende Values wiederverwenden, die Migrations-Hooks beobachten und mit den oben genannten Rollouts rechnen: Tenant-Worker-Pools, die Gatekeeper von Dashboard und linstor-gui, der VPA-Admission-Controller und das Admission-Deployment des linstor-schedulers. Vollständiger Ablauf: [Upgrade-Leitfaden](https://cozystack.io/docs/v1.6/operations/cluster/upgrade/).

## Wo Ænix ins Spiel kommt

Cozystack ist ein CNCF-Sandbox-Projekt unter Apache 2.0. v1.6 ist ein gutes Release und ein anspruchsvolles Upgrade — der Talos-Worker-Rollover, die etcd-Adoption und die geänderte Löschsemantik verdienen jeweils eine Generalprobe auf einem Nicht-Produktivcluster. Ænix pflegt das Projekt und bietet [Enterprise-Support für Cozystack](/de/produkte/cozystack-enterprise-support/), einschließlich Upgrade-Planung und begleiteter Migration für Teams im Produktivbetrieb.

## Release-Links

- [Cozystack v1.6.0 auf GitHub](https://github.com/cozystack/cozystack/releases/tag/v1.6.0)
- [Cozystack v1.6.2 auf GitHub](https://github.com/cozystack/cozystack/releases/tag/v1.6.2)
- [Cozystack-v1.6-Dokumentation](https://cozystack.io/docs/v1.6/)
- [Telegram](https://t.me/cozystack) und [Slack](https://kubernetes.slack.com/archives/C06L3CPRVN1) (Einladung über [slack.kubernetes.io](https://slack.kubernetes.io/))
