---
title: "PCI DSS auf den Ænix-Plattformen"
description: "Welche PCI-DSS-4.0.1-Anforderungen die Aenix-Plattformen ab Werk abdecken, welche eine Einstellung entfernt sind und welche bei Ihnen bleiben — mit Prüfkommandos."
page_type: "solution-landing"
language: "de"
quick_facts_style: "rows"
faq_style: "rows"
primary_keyword: "pci dss kubernetes plattform"
secondary_keywords: ["pci dss 4.0.1 anforderungen kubernetes", "karteninhaberdaten umgebung segmentierung kubernetes", "pci dss vmware ablösung", "pci dss prüfungsumfang container plattform"]
hreflang_en: /compliance/pci-dss/
related_pages:
  - /de/compliance/cis-benchmark/
  - /de/compliance/dsgvo/
  - /de/branchen/finanzdienstleistungen/
  - /de/produkte/private-cloud-platform/
  - /de/alternativen/vmware-alternative/
direct_answer: |
  **Die Ænix-Plattformen liefern die meisten technischen Kontrollen, auf die eine PCI-DSS-v4.0.1-Prüfung aufsetzt, und mehrere davon sind bei einer frischen Installation aktiv: Tenant-Netzwerkisolierung über Cilium-Policies, von der Admission abgelehnte privilegierte Workloads, automatisches TLS für veröffentlichte Dienste und verschlüsselte Backups. Andere werden mitgeliefert, bleiben aber deaktiviert — Single Sign-on mit MFA, Volume-Verschlüsselung, eingeschränkter ausgehender Verkehr, verschlüsselter Ost-West-Verkehr, längere Audit-Aufbewahrung —, und jede davon ist eine Konfigurationsoption, kein Entwicklungsprojekt. Keine Plattform besteht eine PCI-DSS-Prüfung: Ein Qualified Security Assessor testiert eine abgegrenzte Karteninhaberdaten-Umgebung, kein Produkt, und Aenix behauptet keine PCI-DSS-Zertifizierung. Die Kontrollen unten wurden gegen Cozystack v1.6 verifiziert — die quelloffene Engine, aus der die Ænix-Plattformen gebaut sind — mit Kommandos, die Sie auf Ihrem eigenen Cluster ausführen können.**
quick_facts:
  - label: "Standard"
    value: "PCI DSS v4.0.1, alle zwölf Anforderungen abgebildet."
  - label: "Ab Werk aktiv"
    value: "Tenant-Segmentierung, unveränderliches OS ohne SSH, Ablehnung privilegierter Workloads, automatisches TLS, verschlüsselte Backups, tenant-begrenztes RBAC."
  - label: "Eine Einstellung entfernt"
    value: "Keycloak-SSO mit MFA, LUKS-Volume-Verschlüsselung, Egress-Allow-Listen, transparente Cilium-Verschlüsselung, zwölf Monate Audit-Aufbewahrung, restricted Pod Security, interne Zeitquelle."
  - label: "Bleibt bei Ihnen"
    value: "Anforderung 5 (Malware), 11.5 (Intrusion- und Change-Detection), 12 (organisatorische Richtlinien) sowie Scan- und Pentest-Kadenz."
  - label: "Zertifizierung"
    value: "Keine. Eine PCI-DSS-Zertifizierung gilt einer Karteninhaberdaten-Umgebung und wird von einem QSA testiert — keine Plattform hält eine."
  - label: "Herkunft der Nachweise"
    value: "Cozystack v1.6 auf einem Referenzcluster — dieselbe Engine, die die Ænix-Plattformen ausliefern, prüfbar mit den Kommandos auf dieser Seite."
  - label: "Typischer Ausgangspunkt"
    value: "Teams, die VMware vSphere ablösen und deren CDE bisher über Cluster, VLANs und vCenter-Rollen abgegrenzt war."
faq:
  - q: "Ist die Aenix-Plattform PCI-DSS-zertifiziert?"
    a: "Nein, und keine Infrastrukturplattform ist es. Eine PCI-DSS-Zertifizierung gilt einer Karteninhaberdaten-Umgebung, wird von der Entität abgegrenzt, die sie betreibt, und von einem Qualified Security Assessor testiert. Ein Anbieter, der mit einer PCI-DSS-zertifizierten Plattform wirbt, beschreibt etwas, das es nicht gibt. Aenix sagt etwas Engeres und Nachprüfbares: Die Infrastruktur-Kontrollen, auf die eine Prüfung aufsetzt — Segmentierung, gehärtete Konfiguration, Verschlüsselung, zentrale Identität, Audit-Logging —, sind vorhanden, die meisten sind aktiv, bevor Sie irgendetwas anfassen, und jede lässt sich mit den Kommandos auf dieser Seite gegen Ihr eigenes Cluster prüfen."
  - q: "Wurden diese Kontrollen auf der Aenix-Plattform oder auf Cozystack getestet?"
    a: "Auf Cozystack, der Apache-2.0-lizenzierten CNCF-Engine, die Aenix entwickelt und pflegt und von der alle drei Aenix-Plattformen Distributionen sind. Es gibt keinen separaten geschlossenen Build zum Testen. Entscheidend ist eher die Konfiguration: Einstellungen wie --encryption-provider-config, die Audit-Policy und die Zeitquelle stammen aus der zum Installationszeitpunkt angewendeten Talos-Maschinenkonfiguration, die Teil dessen ist, was Aenix liefert und betreibt — prüfen Sie sie also auf Ihrem eigenen Cluster, statt sie vorauszusetzen."
  - q: "Wie wirkt sich die Plattform auf den PCI-DSS-Prüfungsumfang aus?"
    a: "Dafür ist die Segmentierung da, und hier ist die Isolierung erzwungen statt erklärt: Beim Anlegen eines Tenants entstehen Cilium-Netzwerk-Policies, die Verkehr aus anderen Tenants standardmäßig abweisen. Die Karteninhaberdaten-Umgebung in einen eigenen Tenant zu legen nimmt aber nicht automatisch den Rest des Clusters aus dem Umfang: Control Plane, Cilium, LINSTOR, Keycloak und die Knoten sind geteilte Dienste, die die CDE stützen, und Prüfer behandeln sie üblicherweise als in-scope. Segmentierung begrenzt, welche Workloads im Umfang sind, nicht welche Plattformkomponenten. Stimmen Sie die Grenze früh mit Ihrem Prüfer ab und nutzen Sie die Verifikationskommandos als Nachweis."
  - q: "Sind Karteninhaberdaten standardmäßig ruhend verschlüsselt?"
    a: "Für Kubernetes-Secrets ja, sofern der API-Server mit --encryption-provider-config läuft. Für Volumes — die Platten hinter Datenbanken und virtuellen Maschinen, wo Karteninhaberdaten tatsächlich liegen — nein. LINSTOR unterstützt Verschlüsselung im Ruhezustand mit LUKS als StorageClass-Option, und die Entscheidung gehört ins Design: Ein befülltes Volume nachträglich umzustellen bedeutet, die Daten zu migrieren. Backups sind über den kopia-Uploader standardmäßig verschlüsselt."
  - q: "Können wir unsere eigene CA und unseren eigenen Identity Provider nutzen?"
    a: "Ja. cert-manager arbeitet mit einer internen Zertifizierungsstelle ebenso wie mit Let's Encrypt, und Keycloak föderiert mit Unternehmensverzeichnissen und externen Identity Providern. OIDC zu aktivieren ist ein Schritt zur Installationszeit und gehört vor den Moment, in dem die Umgebung Karteninhaberdaten trägt — ein frisches Cluster authentifiziert sich mit einem statischen Cluster-Credential, also einem geteilten Konto, was Anforderung 8.2.2 nicht zulässt."
  - q: "Kann die Plattform für den PCI-DSS-Umfang auf unserer eigenen Hardware laufen?"
    a: "Ja. Die Plattformen installieren auf Bare Metal in Ihrem eigenen Rechenzentrum, womit Datenhaltung und physische Sicherheit unter Ihrer Kontrolle bleiben — beides wird ein Prüfer ansprechen. Anforderung 9 bleibt ohnehin Ihre, aber sie bleibt Ihre in einem Gebäude, das Sie bereits kontrollieren, statt in einer Shared-Responsibility-Matrix."
---

**Die meisten technischen Kontrollen, auf die eine PCI-DSS-v4.0.1-Prüfung aufsetzt, sind auf den Ænix-Plattformen vorhanden, und mehrere sind bei einer frischen Installation aktiv: Tenant-Netzwerkisolierung, Privilegienbeschränkung für Workloads, automatisches TLS für veröffentlichte Dienste, verschlüsselte Backups.**

Andere werden mitgeliefert, sind aber nicht eingeschaltet, weil die meisten Cluster sie nicht brauchen: Single Sign-on, Volume-Verschlüsselung, eingeschränkter Egress, verschlüsselter Ost-West-Verkehr, längere Audit-Aufbewahrung. Jede davon ist eine Konfigurationsoption, kein Entwicklungsprojekt. Diese Seite sagt Anforderung für Anforderung, was was ist — und was die Prüfung Ihnen überlässt.

<div class="cta-row">
  <a class="cta-primary" href="/de/kontakt/">Mit einem Engineer sprechen</a>
  <a class="cta-secondary" href="/de/compliance/">Alle Compliance-Nachweise →</a>
</div>

---

## „Besteht das unsere Prüfung?"

Die Frage kommt im ersten Termin, jedes Mal, wenn eine Karteninhaberdaten-Umgebung auf eine neue Plattform zieht. **Keine Plattform besteht eine Prüfung.** Ein Qualified Security Assessor testiert eine abgegrenzte Umgebung — Ihre Systeme, Ihre Prozesse, Ihre Nachweise. Was eine Plattform leisten kann: die technischen Kontrollen bereitstellen, auf die die Prüfung aufsetzt, und ihren Nachweis einfach machen.

Während einer Prüfung festzustellen, dass eine Kontrolle nie eingeschaltet wurde, ist teuer — deshalb ist unten jede Opt-in-Position als solche markiert.

### Woher die Nachweise stammen

Die Kontrollen auf dieser Seite wurden gegen **Cozystack v1.6** auf einem Referenzcluster verifiziert, und die Verifikationskommandos sind dieselben, die Sie selbst ausführen würden. Cozystack ist die quelloffene, Apache-2.0-lizenzierte, bei der CNCF gehostete Engine, die Ænix entwickelt und pflegt; die Ænix Public Cloud Platform, die Private Cloud Platform und die AI Platform sind Distributionen davon. Es gibt keinen separaten geschlossenen Build mit abweichendem Verhalten — deshalb trägt die Zuordnung ohne Vorbehalt.

Der Vorbehalt, der gilt, betrifft die Konfiguration. Mehrere Einstellungen, nach denen ein Prüfer fragt — `--encryption-provider-config`, `--anonymous-auth=false`, `--profiling=false`, die Audit-Policy, die Zeitquelle —, stammen aus der zum Installationszeitpunkt angewendeten Talos-Maschinenkonfiguration und nicht aus der Software. Diese Konfiguration gehört zu dem, was Ænix liefert und betreibt. Prüfen Sie sie auf Ihrem eigenen Cluster, statt eine veröffentlichte Zahl dafür zu nehmen.

---

<div class="band-fullbleed band-fullbleed--tint">
<div class="band-fullbleed__inner">

## Die zwölf Anforderungen, abgebildet

„Standard" heißt: Die Kontrolle ist bei einer frischen Installation aktiv. „Eingebaut, standardmäßig aus" heißt: Die Plattform liefert sie mit, Sie schalten sie ein — Konfiguration, keine Entwicklung.

| Anforderung PCI DSS v4.0.1 | Abdeckung | Anmerkung |
|---|---|---|
| 1 — Netzwerksicherheitskontrollen | **Standard** | Tenants sind durch Cilium-Policies isoliert, die mit dem Tenant entstehen |
| 2 — Sichere Konfiguration | **Standard** | Unveränderliches OS ohne SSH; privilegierte Container von der Admission abgelehnt |
| 3 — Schutz gespeicherter Daten | **Standard + eine Option** | Secrets in etcd verschlüsselt, Backups über Velero verschlüsselt; Volume-Verschlüsselung ist eine StorageClass entfernt |
| 4 — Verschlüsselung bei der Übertragung | **Standard + eine Option** | cert-manager stellt TLS für veröffentlichte Dienste aus und erneuert es; Cilium ergänzt transparente Ost-West-Verschlüsselung nach Aktivierung |
| 5 — Schutz vor Schadsoftware | **Ihre** | Malware-Kontrollen gehören zu den Workloads, nicht zur Plattform |
| 6 — Sichere Systeme und Software | **Geteilt** | Komponenten auf unveränderliche Digests gepinnt; die Patch-Kadenz ist Ihre |
| 7 — Zugriff nach Kenntnisbedarf | **Standard** | Tenant-begrenztes RBAC; ein Tenant-Nutzer kann Cluster-Secrets nicht lesen |
| 8 — Identifizierung und Authentifizierung | **Eingebaut, standardmäßig aus** | Anonymer API-Zugriff ist deaktiviert; SSO erfordert die Keycloak-OIDC-Integration — eine Standardinstallation authentifiziert sich mit einem Cluster-Token |
| 9 — Physische Zugangsbeschränkung | **Ihre** | Die Plattform installiert auf Ihrer eigenen Hardware, in Ihrem eigenen Rechenzentrum |
| 10 — Protokollierung und Überwachung | **Standard, Aufbewahrung ist eine Einstellung** | API-Audit-Log und zentrale Log-Ablage werden mitgeliefert |
| 11 — Regelmäßige Sicherheitstests | **Geteilt** | Scans und Penetrationstests sind nicht eingeschränkt; Planung und Umfang sind Ihre |
| 11.5 — Intrusion- und Change-Detection | **Ihre** | Weder IDS noch Dateiintegritätsüberwachung werden mitgeliefert; dem Betrieb einer eigenen Lösung steht nichts entgegen |
| 12 — Organisatorische Richtlinien | **Ihre** | Kein Infrastrukturprodukt kann das liefern |

</div>
</div>

---

## Was Sie für eine Karteninhaberdaten-Umgebung einschalten

Nichts in dieser Liste braucht Eigenentwicklung oder einen Supportvertrag. Jeder Punkt ist eine Einstellung, und jeder gehört ins Design — nicht in die Zeit, in der die Umgebung bereits Kartendaten trägt.

| Kontrolle | Aktivierung |
|---|---|
| Single Sign-on mit MFA | Keycloak-OIDC-Integration zur Installationszeit aktivieren; MFA und Passwort-Policy sind Keycloak-Einstellungen |
| Volume-Verschlüsselung im Ruhezustand | StorageClass mit LUKS-Layer anlegen, nachdem eine LINSTOR-Passphrase gesetzt wurde |
| Eingeschränkter ausgehender Verkehr | `SecurityGroup` oder `CiliumNetworkPolicy` mit Egress-Allow-Liste am Tenant |
| Verschlüsselter Ost-West-Verkehr | Transparente Cilium-Verschlüsselung aktivieren — WireGuard oder IPsec |
| Zwölf Monate Audit-Aufbewahrung | Audit-Log-Aufbewahrung erhöhen und das Archiv auf von Ihnen kontrollierten Speicher richten |
| `restricted` Pod Security | Tenant-Namespace labeln; das Admission-Plugin läuft bereits |
| Interne Zeitquelle | `machine.time` in der Talos-Maschinenkonfiguration setzen |
| Spaltenverschlüsselung für Identitätsdaten | Keycloak-Datenbank-Verschlüsselungsproxy aktivieren, mit statischem Schlüssel oder Vault Transit |

---

## Einen PCI-DSS-Umfang von VMware migrieren

Teams, die VMware vSphere ablösen, haben ihre Karteninhaberdaten-Umgebung meist bereits über Cluster, VLANs und vCenter-Rollen abgegrenzt — und die erste Frage lautet, wie die äquivalente Grenze danach aussieht.

Die virtuellen Maschinen laufen weiter — KubeVirt betreibt sie als Kubernetes-Workloads — und die Abgrenzung wird der Tenant. Segmentierung wandert von VLANs und Distributed-Firewall-Regeln zu Cilium-Netzwerk-Policies, die mit dem Tenant entstehen; vCenter-Rollen und -Berechtigungen wandern zu Keycloak-Gruppen, die auf tenant-begrenztes RBAC abgebildet werden. Die Anforderungen unten sind dieselben, die Ihr Prüfer gegen vSphere bewertet hat. Zur Migrationsmechanik siehe [VMware-Alternative](/de/alternativen/vmware-alternative/).

---

## Anforderung 1: Segmentierung und Prüfungsumfang

Segmentierung steht am Anfang der meisten Plattformbewertungen, weil sie die Größe Ihres Prüfungsumfangs bestimmt. Die CDE in einen eigenen Tenant zu legen liefert eine belastbare Segmentierungsgrenze, nimmt aber nicht automatisch den Rest des Clusters aus dem Umfang: Control Plane, Cilium, LINSTOR, Keycloak und die Knoten sind geteilte Dienste, die die CDE stützen, und Prüfer behandeln sie üblicherweise als in-scope. **Segmentierung begrenzt, welche Workloads im Umfang sind, nicht welche Plattformkomponenten.**

Ein Tenant ist keine Namenskonvention. Beim Anlegen entstehen zugleich Cilium-Netzwerk-Policies, die Verkehr aus anderen Tenants standardmäßig abweisen. Nichts von Hand zu schreiben, nichts zu vergessen.

Prüfen Sie es in etwa einer Minute selbst. Starten Sie einen Pod in einem Tenant und versuchen Sie, ihn aus einem anderen zu erreichen:

```bash
kubectl -n tenant-a run target --image=nginx:alpine --restart=Never
kubectl -n tenant-a wait --for=condition=Ready pod/target --timeout=60s
TARGET_IP=$(kubectl -n tenant-a get pod target -o jsonpath='{.status.podIP}')

# Positivkontrolle: aus demselben Tenant erreichbar
kubectl -n tenant-a run probe --rm -i --restart=Never --image=curlimages/curl:8.11.1 -- \
  curl -s -m 5 -o /dev/null -w '%{http_code}\n' "http://${TARGET_IP}/"

# der eigentliche Test: aus einem anderen Tenant blockiert
kubectl -n tenant-b run probe --rm -i --restart=Never --image=curlimages/curl:8.11.1 -- \
  curl -s -m 5 -o /dev/null -w '%{http_code}\n' "http://${TARGET_IP}/"
```

Der Cross-Tenant-Test liefert `000`. Führen Sie denselben Test aus `tenant-a` als Positivkontrolle aus: Er muss `200` liefern — das beweist, dass das Ziel ausliefert und die `000` von der Policy kam und nicht von einem Pod, der nie bereit war.

Beachten Sie, was die Standard-Policies **nicht** tun. Ausgehender Verkehr eines Tenants ins Internet ist nicht eingeschränkt, während Anforderung 1.3.2 erwartet, dass ausgehender Verkehr aus der CDE auf das Notwendige begrenzt wird. Eine Karteninhaberdaten-Umgebung braucht deshalb explizite Egress-Regeln — eine `SecurityGroup` oder eine `CiliumNetworkPolicy` mit Allow-Liste — zusätzlich zu den Tenant-Defaults. Cozystack v1.6 ergänzt eine tenant-seitige `SecurityGroup`-API für Teams, die feinere Regeln im eigenen Tenant brauchen, ohne einen Plattformadministrator zu bemühen.

---

## Anforderung 2: sichere Konfiguration, keine Hersteller-Defaults

Die Knoten laufen unter [Talos Linux](https://www.talos.dev/), einem unveränderlichen Betriebssystem ohne Shell, ohne SSH-Daemon und ohne Paketmanager. Konfiguration kommt über eine API und wird deklariert, nicht getippt. Eine ganze Familie von Feststellungen — verwaiste lokale Konten, abgedriftete Konfiguration, jemandes vergessene Debugging-Änderung — wird damit erheblich schwerer zu produzieren. Zugriff auf Knotenebene existiert weiterhin über die Talos-API und verdient dieselbe Behandlung wie jede andere administrative Schnittstelle.

Die containerspezifische Anforderung hier lautet, dass Workloads keine Privilegien eskalieren können. Die Pod-Security-Admission *erzwingt* `baseline` und *warnt* lediglich bei `restricted`. Baseline weist die offensichtlichen Ausbrüche ab — privilegierte Container, Host-Namespaces, hostPath —, erlaubt aber weiterhin die Ausführung als root und verlangt kein seccomp-Profil. Härtungs-Benchmarks, die ein Prüfer zitieren dürfte, erwarten `restricted`; labeln Sie die Namespaces der Karteninhaberdaten-Umgebung entsprechend:

```bash
kubectl label namespace tenant-cde \
  pod-security.kubernetes.io/enforce=restricted --overwrite
```

Auf der Standardstufe `baseline` wird ein Workload, der Privilegien anfordert, direkt an der Tür abgewiesen:

```
Error from server (Forbidden): violates PodSecurity "baseline:latest":
host namespaces (hostNetwork=true, hostPID=true), privileged
```

Anonymer API-Zugriff ist deaktiviert, der Profiling-Endpunkt ist aus. Beides stammt aus der Maschinenkonfiguration — prüfen statt voraussetzen. Die [CIS-Benchmark-Seite](/de/compliance/cis-benchmark/) behandelt die Härtung vollständig, inklusive der vier gefundenen Abweichungen.

---

## Anforderung 3: gespeicherte Daten verschlüsseln — Secrets ja, Volumes nicht standardmäßig

Zwei Ebenen zählen hier, und sie verhalten sich unterschiedlich.

**Kubernetes-Secrets** sind in etcd verschlüsselt, wenn der API-Server mit `--encryption-provider-config` läuft. Dieses Flag stammt aus der zum Installationszeitpunkt gelieferten Talos-Maschinenkonfiguration und nicht aus der Plattformenoftware — prüfen Sie es also auf Ihrem eigenen Cluster. Beachten Sie auch die Grenzen der Kontrolle: Sie schützt etcd-Daten auf der Platte und in etcd-Backups, hilft nichts gegen ein Prinzipal, das das Secret über die API lesen darf, und bringt wenig, wenn der Schlüssel auf demselben Control-Plane-Knoten liegt wie etcd.

**Volumes** — die Platten hinter virtuellen Maschinen und Datenbanken — sind nicht verschlüsselt, solange Sie es nicht verlangen. LINSTOR unterstützt Verschlüsselung im Ruhezustand mit LUKS: Passphrase setzen, dann eine StorageClass mit LUKS-Layer anlegen:

```yaml
# lokal (nicht repliziert)
parameters:
  linstor.csi.linbit.com/layerList: "luks storage"
  linstor.csi.linbit.com/encryption: "true"

# repliziert — der DRBD-Layer kommt zuerst
parameters:
  linstor.csi.linbit.com/layerList: "drbd luks storage"
  linstor.csi.linbit.com/encryption: "true"
```

Zwei betriebliche Folgen sind einzuplanen. Die Passphrase muss nach jedem Neustart des LINSTOR-Controllers von Hand eingegeben werden (`linstor encryption enter-passphrase`); verschlüsselte Volumes kommen nicht von selbst zurück, was einen unbeaufsichtigten Neustart zu einem Verfügbarkeitsereignis macht. Und der Mechanismus ist eine einzige geteilte Passphrase ohne Rotationsverfahren, ohne geteiltes Wissen und ohne Vier-Augen-Prinzip — die Anforderungen 3.6 und 3.7 müssen also über den Schlüsselverwaltungsprozess erfüllt werden, den Sie darum herum bauen.

Entscheiden Sie das, bevor die Umgebung gebaut wird: Ein befülltes Volume nachträglich umzustellen bedeutet, die Daten zu migrieren.

### Backups

Velero ist die Backup-Schicht der Plattform und nutzt den kopia-Uploader; Backup-Daten liegen im Objektspeicher unter einem Repository-Schlüssel verschlüsselt, der im Cluster gehalten wird. Das deckt die Kopien ab, beantwortet aber nicht, wo sie liegen: Plattformverwaltete Backups landen in einem geteilten Bucket `cozy-backups` in `tenant-root`, getrennt nach Objektpfad. Wenn Karteninhaberdaten gesichert werden, klären Sie mit Ihrem Prüfer, ob dieser Bucket in Ihren Umfang fällt, und erwägen Sie, die BackupClass auf Speicher mit eigener Schlüsselverwaltung zu richten.

Für personenbezogene Daten der Identitätsschicht führte v1.6 einen Verschlüsselungsproxy vor der Keycloak-Datenbank ein, wahlweise mit statischem Schlüssel oder Vault Transit. Er ist aus, bis Sie ihn aktivieren.

---

## Anforderung 4: Verschlüsselung bei der Übertragung

cert-manager ist Teil der Plattform, mit Issuern für Let's Encrypt oder Ihre eigene Zertifizierungsstelle. Zertifikate werden automatisch angefordert und erneuert, was die häufigste Ursache einer Transportverschlüsselungs-Feststellung beseitigt: ein abgelaufenes Zertifikat, für das sich niemand zuständig fühlte. Ab v1.6 propagiert ein vom Betreiber bereitgestelltes Wildcard-Zertifikat an jeden Tenant-Terminierungspunkt, sodass Tenants gültiges TLS erben, statt es selbst zu organisieren.

Anforderung 4 zielt auf offene öffentliche Netze, doch Prüfer fragen auch nach dem internen Pfad — und zwei Flüsse sind unverschlüsselt, bis Sie handeln: Pod-zu-Pod-Verkehr im Cluster, für den Cilium transparente WireGuard- oder IPsec-Verschlüsselung anbietet, die standardmäßig aus ist, und die DRBD-Replikation zwischen Storage-Knoten. Wenn das tragende Netz nicht vollständig unter Ihrer Kontrolle steht, aktivieren Sie die transparente Verschlüsselung und legen Sie die Replikation auf ein eigenes isoliertes Netz.

---

## Anforderungen 7 und 8: Tenant-RBAC und Single Sign-on

Authentifizierung lässt sich in Keycloak zentralisieren, und das ist nicht der Default. Ein frisches Cluster authentifiziert sich mit einem statischen Cluster-Credential — einem geteilten Konto, das Anforderung 8.2.2 nicht zulässt. OIDC zu aktivieren ist ein Schritt zur Installationszeit und gehört vor den Moment, in dem die Umgebung Karteninhaberdaten trägt. Mehrfaktor-Authentifizierung, Passwort-Policy und Idle-Session-Timeout sind danach Keycloak-Konfiguration statt Entwicklungsarbeit. Nach Aktivierung akzeptiert der API-Server OIDC-Tokens und liest die Gruppenzugehörigkeit aus dem Token — Eintritte und Austritte werden an einer Stelle behandelt, und das Verzeichnis, das Sie ohnehin betreiben, bleibt führend.

Die Autorisierung ist tenant-begrenzt, und zwar strenger, als Teams erwarten. Ein Tenant-Nutzer kann über die Plattform-API Datenbanken und virtuelle Maschinen anlegen, doch die Tenant-Rolle trägt kein `get secrets`. Prüfen statt glauben — als Tenant-Nutzer, gegen den Tenant-Namespace:

```bash
kubectl auth can-i --list -n tenant-a
kubectl auth can-i get secrets -n tenant-a
```

Das zweite Kommando antwortet `no`. Behandeln Sie das als Least Privilege an der API-Oberfläche, nicht als Vertraulichkeitsgrenze: Wer in einem Namespace Workloads planen darf, kann dessen Secrets in einen Pod mounten. Wo es darauf ankommt, beschränken Sie zusätzlich das Anlegen von Workloads.

Quoten sind hierarchisch, ein Sub-Tenant kann das Budget seines Elterntenants also nicht überschreiten — nützlich, wenn eine CDE nicht nur isoliert, sondern auch gedeckelt sein muss.

---

## Anforderung 10: Audit-Logging und Aufbewahrung

Der API-Server schreibt ein Audit-Log in eine Datei auf dem Control-Plane-Knoten, gesteuert von einer Policy, die Sie liefern, und rotiert es nach Alter. Zentrale Log-Sammlung und Metrik-Ablage werden für Workloads mitgeliefert — das API-Audit-Log dorthin zu leiten ist jedoch nicht vorkonfiguriert, während Anforderung 10.3.3 erwartet, dass Audit-Logs zeitnah auf einem separaten, zentral verwalteten Server ankommen.

Zwei weitere Punkte prüfen statt voraussetzen:

**Der Inhalt der Audit-Policy.** Eine Policy auf `Metadata`-Ebene erzeugt nicht die Ereignistiefe, die Anforderung 10.2.1 erwartet — aber alles auf `RequestResponse` zu heben ist die falsche Korrektur, weil Request-Bodies Secret-Werte und personenbezogene Daten tragen und das Audit-Log damit zum weiteren Speicher der Daten wird, die Sie schützen. Teilen Sie nach Ressource auf: `RequestResponse` für Rollenbindungen und Admission-Konfiguration, `Metadata` für Secrets. Die [DSGVO-Seite](/de/compliance/dsgvo/) erklärt, warum die maximale Policy eine Feststellung gegen eine andere eintauscht.

**Schutz der Spur selbst.** Die Anforderungen 10.3.2 bis 10.3.4 verlangen, dass das Log unveränderbar ist und von einem Change-Detection-Mechanismus überwacht wird — beides liefert die Plattform nicht.

Eine Zahl braucht Ihre Aufmerksamkeit. Anforderung 10.5.1 erwartet zwölf Monate Audit-Historie, davon drei sofort verfügbar. Die Standard-Audit-Aufbewahrung auf dem untersuchten Cluster beträgt dreißig Tage. Erhöhen Sie sie im Design und richten Sie das Archiv auf von Ihnen kontrollierten Speicher.

### Zeitsynchronisation

Anforderung 10.6 wird leicht übersehen und ist billig zu erfüllen. Talos synchronisiert die Knotenzeit über `machine.time`, der Default ist ein öffentlicher NTP-Pool. Für eine Karteninhaberdaten-Umgebung richten Sie jeden Knoten auf dieselbe benannte interne Quelle, die ihrerseits mit einer anerkannten externen Referenz synchronisiert, halten die Einstellung unter Konfigurationsverwaltung, damit sie niemand auf einem laufenden Knoten ändert, und stellen sicher, dass Änderungen daran in der Audit-Spur landen.

---

## Anforderungen 6 und 11: Patchen und Sicherheitstests

Plattform-Komponenten-Images sind auf unveränderliche Digests gepinnt; ein Release ist reproduzierbar, und was Sie getestet haben, ist, was Sie betreiben. Releases erscheinen häufig, und Changelogs benennen jede angehobene Komponente — Sie können einem Prüfer also genau zeigen, was wann geändert wurde. Security-Advisories werden ebenso öffentlich publiziert, inklusive Expositionsbewertungen für CVEs, die die Plattform am Ende nicht betreffen — ein öffentlicher Nachweis, der im Schwachstellenmanagement direkt verwendbar ist.

Der Rest ist Ihrer: Scan-Pläne, Penetrationstests und die Review-Kadenz, die Ihr Prüfer erwartet. Eine Container-Registry mit eingebautem Scanning ist über den Katalog verfügbar. Die [CIS-Benchmark-Seite](/de/compliance/cis-benchmark/) ist ein durchgearbeitetes Beispiel eines Sicherheitstests gegen ein laufendes Cluster, bei dem aus dem Rohbericht etwas wird, das ein Prüfer verwenden kann.

---

## Unterstützung bei einer Prüfung

Cozystack steht unter Apache 2.0, der Quellcode ist öffentlich — nichts oben muss geglaubt werden. Wenn Sie sich auf eine Prüfung vorbereiten und das Kontroll-Mapping gegen Ihren Geltungsbereich gespiegelt haben möchten: dafür gibt es [Enterprise-Support](/de/produkte/cozystack-enterprise-support/) und das [Platform-Readiness-Assessment](/de/dienstleistungen/platform-readiness-assessment/). Für Finanzunternehmen, die zusätzlich unter DORA fallen, bildet das [DORA-Readiness-Engagement](/de/loesungen/dora-compliance/) dieselbe Architektur gegen diese Regulierung ab, statt die Arbeit zu wiederholen.

<div class="cta-row">
  <a class="cta-primary" href="/de/kontakt/">Mit einem Engineer sprechen</a>
  <a class="cta-secondary" href="/de/produkte/private-cloud-platform/">Ænix Private Cloud Platform →</a>
</div>

---

## Hinweise

Diese Seite ist informatorisch. Sie ist keine Rechtsberatung, kein Assessment, keine Zertifizierung und keine Zusicherung, dass irgendeine Konfiguration einen Qualified Security Assessor zufriedenstellt. Die Aussagen beschreiben Cozystack v1.6 — die Engine, aus der die Ænix-Plattformen gebaut sind —, beobachtet auf einem Referenzcluster im August 2026; Ihre Installation kann abweichen, insbesondere in der Talos-Maschinenkonfiguration.
