---
title: "Virtuozzo-Migration — drei Produkte, drei verschiedene Ausstiege"
description: "Weg von Virtuozzo: Application Management (ex-Jelastic) heißt Re-Platforming, Infrastructure ist echtes OpenStack, die Container-Linie endet ohne Nachfolger."
date: 2026-09-03
lastmod: 2026-09-03
language: "de"
hreflang_en: /migration/virtuozzo/
quick_facts_style: "rows"
faq_style: "rows"
primary_keyword: "virtuozzo migration"
secondary_keywords: ["jelastic migration", "virtuozzo application platform alternative", "virtuozzo hybrid server end of life", "openvz container migrieren", "ploop nach qcow2"]
related_pages:
  - /tco-calculator/vs-virtuozzo/
  - /de/produkte/public-cloud-platform/
  - /de/produkte/private-cloud-platform/
  - /de/produkte/cozystack
  - /de/dienstleistungen/platform-readiness-assessment
  - /de/migration/openstack/
direct_answer: |
  **Der Weg weg von Virtuozzo beginnt damit, das richtige Produkt zu benennen, denn die drei steigen völlig unterschiedlich aus. Virtuozzo Server, früher Hybrid Server, ist der aus OpenVZ hervorgegangene Host mit System-Containern und KVM-Gästen; die Wartung endete im Juli 2024, und Virtuozzo Server 9 ist ein anderes Produkt, das System-Container gar nicht mehr implementiert — die Container-Linie hat also keinen Nachfolger. Virtuozzo Infrastructure, früher Hybrid Infrastructure, ist das IaaS und darunter eine echte OpenStack-Installation; das ist der einzige Pfad, auf dem Standardwerkzeuge greifen. Virtuozzo Application Management, früher Application Platform und ursprünglich Jelastic, ist eine PaaS, deren Umgebungs-Export eine Topologie-JSON ist, die sich nur in eine andere Virtuozzo-Installation importieren lässt; ein Lift-and-Shift gibt es nicht, der ehrliche Weg ist ein Re-Platforming auf Kubernetes. Aenix führt alle drei auf Cozystack, ein Apache-2.0-lizenziertes CNCF-Projekt.**
quick_facts:
  - label: "2026 umbenannt"
    value: "Aus Hybrid Infrastructure wurde Virtuozzo Infrastructure, aus Application Platform wurde Virtuozzo Application Management, aus Hybrid Server wurde Virtuozzo Server. Unter beiden Namen suchen."
  - label: "Die Container-Linie hat keinen Nachfolger"
    value: "Virtuozzo Server 7 verließ im Juli 2024 die Wartung. Virtuozzo Server 9 stammt von OnApp ab, implementiert laut Release Notes keine System-Container einschließlich vzctl und vzpkg und bietet kein In-Place-Upgrade von 7.x."
  - label: "Virtuozzo Infrastructure"
    value: "Eine echte OpenStack-Installation — Kolla-Ansible, Keystone v3 auf Port 5000, Nova, Cinder, Neutron, Glance, Octavia, Magnum — mit KVM-Compute und Virtuozzo Storage darunter."
  - label: "Application Management"
    value: "Eine PaaS auf System-Containern, mit darin geschachteltem Docker. Der Umgebungs-Export ist eine Topologie-JSON, die nur in eine andere Virtuozzo-Installation gleicher oder höherer Version importiert."
  - label: "ploop hat keinen Konverter"
    value: "prl_disk_tool kann ausschließlich compact, merge und resize. Daten aus einer Container-Disk zu holen heißt: ploop mounten und das Dateisystem herauskopieren."
  - label: "Forklift-Abdeckung"
    value: "Es gibt keinen Virtuozzo-Quellprovider. Auf Virtuozzo Infrastructure ist der OpenStack-Provider der Kandidat und muss getestet werden; der garantierte Rückfallweg ist qcow2-Export nach KubeVirt CDI."
  - label: "Kostenreferenz"
    value: "Virtuozzo-Infrastructure-Lizenzierung im Fünf-Jahres-TCO-Vergleich mit 100 $/Core/Jahr Liste und rund 75 $/Core/Jahr typisch verhandelt."
quick_facts_source: "[Virtuozzo Product Lifecycle Policy](https://www.virtuozzo.com/server-docs/product-lifecycle-policy/), [Virtuozzo Infrastructure Dokumentation](https://www.virtuozzo.com/infrastructure-docs/), [Virtuozzo Application Management Dokumentation](https://www.virtuozzo.com/application-management-docs/)"
faq:
  - q: "Welches Virtuozzo-Produkt migrieren wir eigentlich?"
    a: "Fragen Sie, was die Nutzer sehen. Virtuelle Maschinen und Volumes aus einem Self-Service-Portal, dazu S3 und ein Kubernetes-Dienst, bedeutet Virtuozzo Infrastructure, das IaaS, früher Hybrid Infrastructure. Anwendungsumgebungen aus einem Topologie-Assistenten mit Applikationsserver-, Datenbank- und Load-Balancer-Schichten bedeutet Virtuozzo Application Management, die PaaS, früher Application Platform und ursprünglich Jelastic. Melden sich nur Administratoren an Hosts an und betreiben dort System-Container und KVM-Gäste nebeneinander, ist es Virtuozzo Server, früher Hybrid Server. Die drei haben zur Migrationszeit fast nichts gemeinsam, und wer das falsche schätzt, bekommt einen Plan, der den ersten Kontakt nicht überlebt. Virtuozzo hat 2026 alle drei umbenannt, Suchergebnisse mischen also alte und neue Namen."
  - q: "Gibt es eine Frist bei Virtuozzo Server?"
    a: "Die veröffentlichte Lifecycle-Tabelle nennt für Virtuozzo Server 7 die allgemeine Verfügbarkeit im Juli 2016 und das Wartungsende im Juli 2024 — das ist vorbei, diese Bestände erhalten nur noch Sicherheitsupdates. Das End-of-Life-Datum trägt eine Fußnote: Es sei änderbar und werde frühestens ein Jahr nach einem Release von Virtuozzo Infrastructure gesetzt, das einen direkten Upgrade-Pfad von Virtuozzo Server 7 einführt. Dieser Upgrade-Pfad ist nicht erschienen. Unabhängig davon ist Virtuozzo Server 9 eine andere Linie: Die Release Notes halten fest, dass System-Container nicht implementiert sind, einschließlich vzctl und vzpkg, und dass ein In-Place-Upgrade von 7.x nicht unterstützt wird. Das Fehlen eines Vorwärtspfads ist das stärkere Planungssignal, nicht das Datum in der Tabelle."
  - q: "Wie migriert Virtuozzo Infrastructure?"
    a: "Wie eine OpenStack-Cloud, denn es ist eine. Virtuozzo beschreibt das Produkt als OpenStack-Orchestrierung mit KVM-Virtualisierung, Administratoren konfigurieren es über nova.conf, cinder.conf und neutron.conf unter /etc/kolla/config mit anschließendem kolla-ansible, und die eigene Dokumentation steuert es mit dem Standard-Client openstack gegen Keystone v3 auf Port 5000. Damit ist der OpenStack-Quellprovider von Konveyor Forklift der Kandidat — ausschließlich Kaltmigration — und er muss gegen Ihre konkrete Version getestet werden, denn Forklift dokumentiert OpenStack ab 16.1 in RHOSP-Zählung, und Virtuozzo veröffentlicht nicht, welchem Upstream-Release es folgt. Der immer funktionierende Rückfallweg ist der Volume-Export nach qcow2 über vinfra service compute image save und der Import als KubeVirt-DataVolume."
  - q: "Können wir aus Virtuozzo Application Management per Lift-and-Shift heraus?"
    a: "Nein. Der Umgebungs-Export erzeugt eine JSON-Datei, und die Anweisung des Herstellers lautet, sie in eine Plattforminstallation gleicher oder höherer Version zu migrieren — also in eine andere Virtuozzo-Installation, nicht nach Kubernetes. Zudem braucht der Export Port 7979 auf der Quelle, und er exportiert ausdrücklich keine Daten aus Elastic VPS, Maven, Docker oder Windows-basierten Containern; die kommen als leere Hüllen an. Virtuozzos eigene Seiten widersprechen sich, ob private Daten überhaupt enthalten sind, die konservative Planungsannahme ist deshalb: nur Topologie. Behandeln Sie den Export als Inventar, nicht als Migration — echte Daten kommen über SSH und rsync, FTP wo der Knotentyp es erlaubt, und native Datenbank-Dumps heraus."
  - q: "Wie aufwendig ist das Re-Platforming von Application Management wirklich?"
    a: "Der Anwendungscode ist meist unproblematisch; die Arbeit steckt im Plattformverhalten. Was Sie der Plattform heute übergeben, ist bereits ein Artefakt — WAR oder JAR, PHP-Quellcode, eine Node-Anwendung, ein Docker-Image — und genau das verarbeitet ein Container-Build; der Aufwand ist Paketierung und Verdrahtung, kein Umschreiben. Drei Dinge haben keine Entsprechung und müssen entworfen werden: die automatische vertikale Skalierung eines laufenden Containers, die Kubernetes nicht kennt und die pro Anwendung zur Sizing-Aufgabe wird; das Cloudlet als Abrechnungseinheit mit 128 MiB RAM und 400 MHz CPU, abgerechnet über den größeren Wert aus Spitzen-RAM oder Durchschnitts-CPU, womit die Migration auch eine Neubepreisung ist; und der Topologie-Assistent, mit dem Ihr Support arbeitet und der zu einem Servicekatalog samt Schulungsaufwand wird."
  - q: "Was passiert mit unseren OpenVZ-System-Containern?"
    a: "Es sind System-Container mit vollständigem Init-System, keine OCI-Images, und einen Konverter gibt es nicht. Zwei Wege sind legitim. Jeden als KubeVirt-VM zu kapseln erhält den Mehrprozess-Gast exakt und ist begrenzte, vorhersagbare Arbeit, bezahlt in Dichte. Den Workload als Container-Image neu zu bauen ist dichter und im Betrieb günstiger, aber Aufwand pro Workload und braucht jemanden, der den Workload kennt. Virtuozzos eigene Dokumentation räumt den Bruch ein: Anwendungen könnten beim Wechsel auf Application Container Probleme bekommen, weil Zustandslosigkeit und Einzelprozess-Erwartungen fehlen, und das sei besonders bei Orchestrierern wie Kubernetes relevant. Der Datenpfad ist in beiden Fällen derselbe: ploop-Image mounten und das Dateisystem herauskopieren, denn prl_disk_tool kann keine Formatkonvertierung."
  - q: "Unterstützt Forklift Virtuozzo?"
    a: "Nein. Die Quellprovider von Forklift sind VMware vSphere, oVirt/RHV, OpenStack, von vSphere erzeugte OVA-Dateien und entfernte KubeVirt-Cluster, dazu Hyper-V und AWS EC2 als Technology Preview. Einen Virtuozzo-Provider gibt es nicht, und der OVA-Weg ist doppelt versperrt — Forklift akzeptiert nur von vSphere erzeugte OVAs, und Virtuozzo hat keinen OVA-Export. Auf Virtuozzo Infrastructure ist der OpenStack-Provider der Hebel, weil die API tatsächlich OpenStack ist. Für Virtuozzo Server und Application Management baut Ænix Engineering den Export- und Konvertierungspfad im Projekt."
service:
  type: "Virtuozzo Migration"
  areaServed: ["EU", "DACH", "Zentralasien"]
  audience: "Hosting-Anbieter, MSPs, Service-Provider mit Virtuozzo-Bestand"
---

**„Weg von Virtuozzo“ sind drei verschiedene Projekte unter einem Namen. Klären Sie das Produkt, bevor irgendjemand schätzt — und beachten Sie, dass Virtuozzo 2026 alle drei umbenannt hat, Ihre eigene Dokumentation und jedes Suchergebnis also alte und neue Namen mischen.**

> **Passt zu:** **[Ænix Public Cloud Platform](/de/produkte/public-cloud-platform/)**, wenn Sie Virtuozzo-Kapazität an Kunden weiterverkaufen — der Mehrheitsfall, denn das Produkt wird überwiegend über regionale Hosting-Anbieter vertrieben, die es unter eigener Marke anbieten; **[Ænix Private Cloud Platform](/de/produkte/private-cloud-platform/)**, wenn dort interne Workloads laufen. Rechnen Sie zuerst mit dem **[Fünf-Jahres-TCO-Vergleich Virtuozzo vs Cozystack](/tco-calculator/vs-virtuozzo/)**.

<div class="cta-row">
  <a class="cta-primary" href="/de/kontakt/">Discovery-Call buchen</a>
  <a class="cta-secondary" href="/de/dienstleistungen/platform-readiness-assessment/">Platform Readiness Assessment →</a>
</div>

---

## Welches Produkt haben Sie?

| Heutiger Name | Früher | Was es ist | Charakter des Ausstiegs |
|---|---|---|---|
| **Virtuozzo Infrastructure** | Virtuozzo Hybrid Infrastructure | IaaS: VMs, Volumes, S3, Kubernetes-Dienst, Self-Service-Portal | OpenStack-förmig. Standardwerkzeuge greifen. |
| **Virtuozzo Application Management** | Virtuozzo Application Platform, ursprünglich Jelastic | PaaS: Anwendungsumgebungen aus dem Topologie-Assistenten, automatische Skalierung | Re-Platforming. Einen Ausstieg auf Disk-Ebene gibt es nicht. |
| **Virtuozzo Server** | Virtuozzo Hybrid Server | Bare-Metal-Host mit System-Containern und KVM-Gästen nebeneinander | Zweigeteilt. KVM-Gäste ziehen mechanisch um, Container nicht. |
| **Virtuozzo Cloud Management** | — | Mandantenfähige Abrechnungs- und Provisionierungsschicht über den beiden anderen | Umhängen, wie jede Abrechnungsanbindung. |

Viele Anbieter betreiben zwei davon gleichzeitig — Application Management auf Hosts, die selbst Virtuozzo Server sind, oder auf einem Virtuozzo-Infrastructure-Cluster. Kalkulieren Sie jedes getrennt. Eine einzige gemischte Schätzung über PaaS und IaaS hinweg ist der Grund, warum solche Projekte am Ende doppelt so groß werden.

Eine Abhängigkeit gehört früh auf den Tisch: Die Hardware-Hosts von Application Management müssen die System-Container-Laufzeit bereitstellen, also Virtuozzo 7, CentOS 7 oder RHEL 7 darunter. Ein PaaS-Bestand erbt damit das unten beschriebene Virtuozzo-Server-Problem, auch wenn sich dort niemand als Virtuozzo-Server-Betreiber sieht.

---

## Die eigentliche Frist ist der fehlende Upgrade-Pfad

Die veröffentlichte Lifecycle-Tabelle von Virtuozzo nennt für **Virtuozzo Server 7 die allgemeine Verfügbarkeit im Juli 2016 und das Wartungsende im Juli 2024** — bereits vorbei. Das End-of-Life-Datum in derselben Tabelle trägt eine Fußnote: Es sei änderbar und werde frühestens ein Jahr nach einem Release von Virtuozzo Infrastructure gesetzt, das einen direkten Upgrade-Pfad von Virtuozzo Server 7 einführt.

Diese Fußnote sagt zwei Dinge gleichzeitig: Das vom Hersteller gedachte Ziel für das Container-Produkt ist sein eigenes IaaS — und **dieser Upgrade-Pfad existiert noch nicht**.

Das zweite Signal wiegt schwerer. Virtuozzo Server 9 ist nicht der Nachfolger von Virtuozzo Server 7, sondern eine andere Linie, hervorgegangen aus der OnApp-Cloud-Management-Plattform; der dokumentierte Upgrade-Pfad führt von Virtuozzo OnApp 7. Die Release Notes halten fest, dass **System-Container in diesem Release nicht implementiert sind, einschließlich der Werkzeuge `vzctl` und `vzpkg`**, und dass ein **In-Place-Upgrade von Virtuozzo Server 7.x nicht unterstützt wird**.

Wer heute auf Virtuozzo Server 7 läuft, ist also außerhalb der Wartung, auf einem Produkt, dessen Container-Fähigkeit keinen angekündigten Nachfolger hat, ohne herstellerseitigen Vorwärtspfad. Das ist ein stärkerer Planungsinput als jedes Datum und der Grund, warum Virtuozzo-Migrationen meist als Pflicht und nicht als Optimierung ankommen.

Der Vollständigkeit halber: Die Lifecycle-Policy nennt **überhaupt keine End-of-Life-Daten** für Virtuozzo Infrastructure oder Application Management, und Virtuozzo Infrastructure wird aktiv weiterentwickelt. Keines dieser beiden Produkte wird eingestellt. Dieser Abschnitt betrifft ausschließlich die Container-Linie.

---

## Pfad 1 — Virtuozzo Infrastructure

Der handhabbarste der drei Fälle, denn das hier ist keine OpenStack-Nachbildung. Es ist OpenStack.

Der Beleg ist betrieblich, nicht werblich: Administratoren konfigurieren `nova.conf`, `cinder.conf` und `neutron.conf` unter `/etc/kolla/config` und lassen anschließend Kolla-Ansible laufen; dokumentiert sind unter anderem Nova, Cinder, Neutron, Glance, Keystone, Octavia und Magnum; und Virtuozzos eigene Dokumentation weist an, den Standard-Client `openstack` gegen Keystone v3 auf Port 5000 zu richten. Compute läuft auf einem QEMU/KVM-Hypervisor, Storage auf Virtuozzos eigener Software-defined-Schicht mit Metadaten- und Chunk-Diensten.

Daraus folgt:

- **Compute und Images.** Beide Seiten sind KVM, Gast-Disks importieren also ohne Neuaufbau nach KubeVirt. [Konveyor Forklift](https://github.com/kubev2v/forklift), in der Ænix-Plattform enthalten, hat einen OpenStack-Quellprovider — und der ist der Kandidat, **im Assessment getestet, nicht angenommen**. Zwei Gründe zu testen statt zu versprechen: Forklift dokumentiert OpenStack ab Version 16.1 in der Zählung der Red Hat OpenStack Platform, und Virtuozzo veröffentlicht nicht, welchem Upstream-Release es folgt; außerdem arbeitet der OpenStack-Pfad von Forklift über einen Snapshot des angehängten Images, wofür sich Glance und Cinder auf dem Virtuozzo-Storage-Backend konventionell verhalten müssen. Zudem gilt: **von OpenStack aus führt Forklift ausschließlich Kaltmigrationen durch** — jede Instanz braucht ein echtes Abschaltfenster.
- **Der Rückfallweg, der immer funktioniert.** Virtuozzo dokumentiert einen Volume-zu-Image-Export: Volume snapshotten, als Image registrieren, dann `vinfra service compute image save --file <name>.qcow2 <id>`. Das Ergebnis ist eine gewöhnliche qcow2-Datei, die KubeVirt CDI als DataVolume aus HTTP, S3, einer Registry oder einem PVC importiert. Orchestrierungsaufwendiger als ein Forklift-Plan, dafür ohne Unbekannte. Ein belastbarer Programmplan führt beide Wege und entscheidet nach dem Piloten.
- **Storage.** Virtuozzo Storage kommt nicht mit. Ersetzt wird es durch LINSTOR/DRBD oder Ceph, wenn Sie einen verteilten Cluster bevorzugen. Das ist ein Datenumzug und bestimmt die Programmgröße stärker als der Compute-Teil.
- **Netzwerk und Mandanten.** Derselbe Neuentwurf wie bei jedem OpenStack-Ausstieg: Mandantennetze, Floating-Adressen und Security Groups werden zu Cilium-Policy, LB-IPAM und BGP- oder L2-Announcements; das Projektmodell wird zum Tenant-CRD. Der **[OpenStack-Migrations-Hub](/de/migration/openstack/)** beschreibt das Dienst für Dienst und gilt hier unverändert.
- **S3.** Object-Endpunkte sind kundensichtbar und langlebig. Planen Sie sie als eigenen Arbeitsstrang mit eigenem Cutover.

---

## Pfad 2 — Virtuozzo Server

Ein Host, zwei Arten von Workload — und sie verhalten sich nicht im Geringsten gleich.

**KVM-Gäste** ziehen um wie jeder andere KVM-Gast, sobald die Disk in einem portablen Format vorliegt.

**System-Container** sind das Problem. Ein aus OpenVZ hervorgegangener Container betreibt ein vollständiges Init-System und mehrere Prozesse, teilt den Host-Kernel und wird wie eine Maschine verwaltet. Er ist kein OCI-Image, und keine Konvertierung erzeugt eines. Virtuozzos eigene Dokumentation räumt den Bruch ein: Anwendungen könnten beim Wechsel auf Application Container Probleme bekommen, weil Zustandslosigkeit und Einzelprozess-Erwartungen fehlen — und das sei *besonders* bei Orchestrierern wie Kubernetes relevant.

Zwei ehrliche Optionen, entschieden pro Workload statt pro Bestand:

- **Als VM kapseln.** Das Dateisystem des Containers wird zum Disk-Image und läuft als KubeVirt-VM. Der Mehrprozess-Gast bleibt exakt erhalten, der Aufwand ist begrenzt und vorhersagbar, bezahlt wird in Dichte — eine vollständige virtuelle Maschine dort, wo vorher ein Container lief. Für undokumentierte Workloads, Anwendungen ohne Owner und alles, wo identisches Verhalten vertraglich zugesichert ist, ist das die richtige Antwort und kein Scheitern.
- **Als Container-Image neu bauen.** Die Anwendung herausnehmen und ein Image darum bauen. Sauberer, dichter, im Betrieb günstiger — aber Aufwand pro Workload. Was bei einem naiven `tar` plus `docker import` bricht: systemd als PID 1, Mehrprozess-Annahmen, `/etc/fstab`, venet-Networking und alles, was auf dem geteilten Kernel aufsetzt.

Die meisten Bestände teilen sich auf: Ein langer Schwanz nahezu identischer Container wird aus einem gemeinsamen Basis-Image neu gebaut, die wenigen ungewöhnlichen werden VMs. Das Assessment zieht diese Linie an Ihrem realen Inventar.

**Die Lage auf Disk-Ebene, plus eine Werkzeugkorrektur.** Container- und VM-Disks nutzen das ploop-`.hdd`-Layout — ein Verzeichnis mit `DiskDescriptor.xml` und den Bilddaten, keine einzelne Datei. Eine **unterstützte Formatkonvertierung gibt es nicht**: `prl_disk_tool` bietet compact, merge und resize, sonst nichts. Der gangbare Weg ist, das Image schreibgeschützt zu mounten (`ploop mount -m /mnt/x -r .../DiskDescriptor.xml`) und das Dateisystem herauszukopieren. Zwei kursierende Werkzeugnamen sind falsch und kosten einen Tag: `vzdump` gehört zu Proxmox VE, nicht zu Virtuozzo, und `vzmigrate` ist nicht der aktuelle Befehl — das ist `prlctl migrate`, und der verschiebt Gäste zwischen Virtuozzo-Hosts, nicht aus Virtuozzo heraus. Native Backups liegen in einem proprietären Format unter `/vz/vmprivate/backups`, das Drittwerkzeuge nicht öffnen.

---

## Pfad 3 — Virtuozzo Application Management (früher Jelastic)

Die wichtigste Tatsache zuerst, weil sie jede Schätzung verändert: **Der Umgebungs-Export erzeugt eine JSON-Datei, und die Anweisung des Herstellers lautet, sie in eine Plattforminstallation gleicher oder höherer Version zu migrieren.** Es ist ein Portabilitätsfeature innerhalb der Produktfamilie, kein Weg heraus. Einen Ausstieg auf Disk-Ebene gibt es nicht, und kein Werkzeug erzeugt einen.

Drei konkrete Grenzen, die man einplant statt entdeckt:

1. Der Export braucht **Port 7979** auf der Quellplattform, und Virtuozzo nennt Partnerinstallationen, aus denen sich überhaupt nicht in andere Plattformen importieren lässt.
2. Der Export **enthält keine Daten aus Elastic VPS, Maven, Docker und Windows-basierten Containern**. Diese Schichten kommen als leere Hüllen an: Topologie erhalten, Inhalt nicht.
3. Virtuozzos eigene Seiten **widersprechen sich**, ob private Daten überhaupt exportiert werden — die Export-Seite bietet eine entsprechende Option, die Migrationsübersicht schreibt, es werde nur die Topologie exportiert und die Zielumgebung von Grund auf neu erstellt. Konservative Planungsannahme: nur Topologie.

Damit taugt der Export als **Inventar**, nicht als Migration. Echte Daten kommen über die gewöhnlichen Kanäle heraus: SSH und rsync über das SSH-Gate der Plattform, FTP wo der Knotentyp es unterstützt, und native Datenbank-Dumps. Es gibt eine REST-API und ein Platform-CLI für den Umgebungs-Lebenszyklus — damit automatisiert man die Extraktion.

Die Architektur gehört klar benannt, weil sie die Einschränkung erklärt. Die Workloads laufen in **System-Containern** — der Virtuozzo-Implementierung, derselben Linie wie Virtuozzo Server. Docker ist **darin geschachtelt**: Das Dateisystem eines eigenen Images wird in die System-Container-Laufzeit entpackt, statt als OCI-Container zu laufen, und nur eine Positivliste von Basis-Betriebssystemen wird unterstützt. „Wir nutzen hier schon Docker“ macht den Neubau also einfacher, weil ein Image als Ausgangspunkt existiert — es bedeutet aber nicht, dass der Workload bereits portabel ist.

Die Zuordnung nach Kubernetes:

| Application Management | Ziel |
|---|---|
| Umgebung | Namespace beziehungsweise Mandant, Topologie als Helm-Release |
| Applikationsserver-Schicht (Java, PHP, Node.js, Python, Ruby, .NET, Go) | Deployment plus Service, gebaut aus demselben Artefakt wie heute |
| Datenbank-Schicht (MySQL, PostgreSQL, MongoDB) | Managed-Datenbank-Instanz im Mandantenkatalog; Daten per Dump oder Replikat |
| Load-Balancer-Schicht (NGINX, HAProxy, Varnish) | Ingress oder ein Service vom Typ LoadBalancer |
| Shared-Storage-Knoten (NFSv4) | ReadWriteMany-Volume |
| Eigene Docker-Images, Docker-Engine-Schicht, eingebauter Kubernetes-Cluster | Images sind vorhanden. Einfachste Kohorte und der natürliche Pilot. |
| Cloudlet-Ressourcenmodell | Requests und Limits, dazu der horizontale Autoscaler |
| Vertikale Auto-Skalierung eines laufenden Containers | Keine Entsprechung. Horizontale Skalierung plus ehrliches Sizing — siehe unten. |

**Was es günstiger macht, als es klingt.** Was Sie der Plattform übergeben, ist bereits ein Artefakt — WAR oder JAR, PHP-Quellcode, eine Node-Anwendung, ein Docker-Image. Genau das verarbeitet ein Container-Build. Die Arbeit ist Paketierung und Verdrahtung, kein Umschreiben von Anwendungscode.

**Was es trotzdem nicht trivial macht.** Drei Plattformverhalten müssen entworfen statt portiert werden:

1. **Automatische vertikale Skalierung.** Die Plattform vergrößert CPU und Speicher eines laufenden Containers im Betrieb. Kubernetes skaliert nach außen, nicht nach oben. Für gleichmäßige Web-Schichten ist das eine Verbesserung; für einen einzelnen großen zustandsbehafteten Prozess ist es echte Sizing-Arbeit pro Anwendung.
2. **Das Cloudlet als Abrechnungseinheit.** Ein Cloudlet sind 128 MiB RAM und 400 MHz CPU, abgerechnet über den größeren Wert aus Spitzen-RAM oder Durchschnitts-CPU statt über die Summe. Wer weiterverkauft, hat eine komplette Preisliste in einer Einheit, die es am Ziel nicht gibt. Die Migration ist damit auch eine Neubepreisung mit eigenem kommerziellem Zeitplan.
3. **Der Topologie-Assistent.** Der Support legt Umgebungen per Klick an. Das durch einen Servicekatalog zu ersetzen, ist eine Produktentscheidung und eine Schulungskosten-Position — ab Woche eins im Plan.

---

## Werkzeuglage, klar gesagt

[Konveyor Forklift](https://github.com/kubev2v/forklift) ist Bestandteil der Ænix-Plattform und übernimmt den VM-Transfer bei den Quellen, die es unterstützt: VMware vSphere, oVirt/RHV, OpenStack, von vSphere erzeugte OVA-Dateien und entfernte KubeVirt-Cluster, dazu Hyper-V und AWS EC2 als Technology Preview. **Einen Virtuozzo-Quellprovider gibt es nicht**, und der OVA-Weg ist doppelt versperrt — Forklift akzeptiert nur von vSphere erzeugte OVAs, und Virtuozzo hat keinen OVA-Export.

- Auf **Virtuozzo Infrastructure** ist der OpenStack-Provider der Hebel, getestet statt angenommen, mit qcow2-Export nach CDI als garantiertem Rückfallweg.
- Auf **Virtuozzo Server** und **Application Management** baut Ænix Engineering den Export- und Konvertierungspfad im Projekt. Das sagen wir lieber, als zu suggerieren, ein generisches Werkzeug decke einen Fall ab, den es nicht abdeckt.

---

## Wie Ænix arbeitet

<div class="arch-section__fig">
<div class="diagram">
<div class="diagram__node"><b>Virtuozzo-Bestand</b><div class="diagram__chips"><span>Server: Container + KVM</span><span>Infrastructure: IaaS</span><span>Application Management: PaaS</span></div></div>
<div class="diagram__conn">nach Produkt getrennt, dann</div>
<div class="diagram__node"><b>Migration je Pfad</b><div class="diagram__chips"><span>OpenStack-Import oder qcow2-Export</span><span>Container kapseln oder neu bauen</span><span>PaaS-Re-Platforming</span></div></div>
<div class="diagram__conn">landet auf</div>
<div class="diagram__node diagram__node--brand"><b>Cozystack</b><div class="diagram__chips"><span>KubeVirt</span><span>Cilium eBPF</span><span>LINSTOR</span></div></div>
</div>
</div>

1. **[Platform Readiness Assessment](/de/dienstleistungen/platform-readiness-assessment/)** — Inventar getrennt nach Produkt; Triage Container für Container in „kapseln oder neu bauen“; der OpenStack-Provider von Forklift gegen Ihre tatsächliche Virtuozzo-Infrastructure-Version getestet und der qcow2-Rückfallweg daneben nachgewiesen; Mandanten- und Adressentwurf; bei Application Management ein Preismodell neben dem technischen Plan.
2. **Pilot-Kohorte** — der einfachste echte Workload zuerst. Bei Application-Management-Beständen sind das die Docker- und Kubernetes-Umgebungen, wo bereits Images existieren.
3. **Rollende Migration** — Kohorte für Kohorte mit Parallel-Run-Validierung, Virtuozzo-Hosts wandern in den Zielcluster, sobald sie frei werden.
4. **Betrieb** — Ihr Team mit **[Cozystack Enterprise Support](/de/produkte/cozystack-enterprise-support/)** im Rücken, oder Betrieb durch Ænix.

Rechnen Sie die Kostenseite vorher durch: Der **[Fünf-Jahres-TCO-Vergleich Virtuozzo vs Cozystack](/tco-calculator/vs-virtuozzo/)** vergleicht bei 50, 200 und 1.000 VMs, mit Virtuozzo-Lizenzierung zu 100 $ pro Core und Jahr Liste und rund 75 $ typisch verhandelt.

<div class="cta-row">
  <a class="cta-primary" href="/de/kontakt/">Discovery-Call buchen</a>
</div>

---

*Ænix ist das Team hinter Cozystack (CNCF-Projekt, Apache 2.0).*
