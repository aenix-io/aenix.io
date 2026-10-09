---
title: "Talos Linux einfach installieren: auf jeder Maschine, bei jedem Anbieter"
seo_title: "Talos Linux auf jeder Maschine installieren"
description: "Talos Linux per kexec aus jedem laufenden Linux starten, das Netzwerk über die Kernel-cmdline übergeben und mit talosctl oder Talm dauerhaft auf Disk bringen."
slug: "talos-linux-installieren-beliebige-maschine-beliebiger-anbieter"
date: "2025-04-28"
cover_image: "/img/blog/covers/de/talos-linux-installieren-beliebige-maschine-beliebiger-anbieter.jpg"
author: "Andrei Kvapil"
type: "tutorial"
topics: ["Cloud", "Kubernetes", "Open Source", "Platform Engineering"]
language: "de"
hreflang_en: "/blog/2025/04/a-simple-way-to-install-talos-linux-on-any-machine-with-any-provider/"
---

Talos Linux ist ein spezialisiertes Betriebssystem für den Betrieb von Kubernetes. Meiner Meinung nach erledigt es diese Aufgabe besser als andere. Vor allem übernimmt es das komplette Lifecycle-Management der Control-Plane-Komponenten von Kubernetes.

Gleichzeitig legt Talos Linux den Schwerpunkt auf Sicherheit und schränkt die Möglichkeiten des Benutzers, auf das System einzuwirken, auf ein Minimum ein. Ein Markenzeichen dieses Betriebssystems ist das nahezu vollständige Fehlen ausführbarer Dateien: Es gibt keine Shell, und eine Anmeldung per SSH ist nicht möglich. Die gesamte Konfiguration von Talos Linux erfolgt über eine Kubernetes-ähnliche API.

![Talos Linux auf jeder Maschine installieren](/img/blog/medium/a-simple-way-to-install-talos-linux-on-any-machine-with-any-provider/cover.png)

Üblicherweise wird Talos Linux als Satz vorgefertigter Images für verschiedene Umgebungen bereitgestellt.

Die Standardinstallation sieht vor, dass Sie ein für Ihren Cloud-Anbieter oder Hypervisor vorbereitetes Image nehmen und daraus eine virtuelle Maschine erstellen. Bei physischen Servern kommt zum Beispiel infrage, das Talos-Linux-Image per ISO oder PXE zu booten.

Leider funktioniert das nicht bei Anbietern, die einen vorkonfigurierten Server oder eine virtuelle Maschine bereitstellen, ohne dass Sie ein eigenes Image hochladen oder auch nur ein ISO über KVM für die Installation nutzen können. In diesem Fall sind Sie auf die Distributionen beschränkt, die der Cloud-Anbieter anbietet.

Bei der Installation von Talos Linux sind in der Regel zwei Fragen zu klären: (1) Wie wird das Talos-Linux-Image geladen und gebootet, und (2) wie wird die machine-config (die zentrale Konfigurationsdatei von Talos Linux) vorbereitet und auf das gebootete Image angewendet? Sehen wir uns beide Schritte an.

## Talos Linux booten

Eine der universellsten Methoden ist ein Mechanismus des Linux-Kernels namens [*kexec*](https://en.wikipedia.org/wiki/Kexec).

*kexec* ist sowohl ein Werkzeug als auch ein gleichnamiger Systemaufruf. Damit können Sie aus dem laufenden System heraus einen neuen Kernel booten, ohne die Maschine physisch neu zu starten. Sie laden also die benötigten Dateien *vmlinuz* und *initramfs* von Talos Linux herunter, geben die gewünschte Kernel-*cmdline* an und wechseln sofort in das neue System. Es ist, als würde der Kernel beim Start vom regulären Bootloader geladen, nur dass in diesem Fall Ihr vorhandenes Betriebssystem die Rolle des Bootloaders übernimmt.

Im Grunde brauchen Sie lediglich irgendeine Linux-Distribution. Das kann ein physischer Server im Rescue-Modus sein oder auch eine virtuelle Maschine mit vorinstalliertem Betriebssystem. Sehen wir uns ein Beispiel mit Ubuntu an; es kann aber buchstäblich jede andere Linux-Distribution sein.

Melden Sie sich per SSH an und installieren Sie das Paket *kexec-tools*. Es enthält das Werkzeug *kexec*, das Sie später brauchen:

```
apt install kexec-tools -y
```

Als Nächstes laden Sie Talos Linux herunter, also *Kernel* und *initramfs*. Beides gibt es im offiziellen Repository:

```
wget -O /tmp/vmlinuz https://github.com/siderolabs/talos/releases/latest/download/vmlinuz-amd64
wget -O /tmp/initramfs.xz https://github.com/siderolabs/talos/releases/latest/download/initramfs-amd64.xz
```

Wenn Sie einen physischen statt eines virtuellen Servers haben, müssen Sie mit dem Dienst [Talos Factory](https://factory.talos.dev) ein eigenes Image mit der gesamten benötigten Firmware bauen. Alternativ können Sie die vorgefertigten Images des Projekts Cozystack verwenden (einer Lösung zum Aufbau von Clouds, die wir bei Ænix entwickelt und an die CNCF Sandbox übergeben haben). Diese Images enthalten bereits alle erforderlichen Module und die nötige Firmware:

```
wget -O /tmp/vmlinuz https://github.com/cozystack/cozystack/releases/latest/download/kernel-amd64
wget -O /tmp/initramfs.xz https://github.com/cozystack/cozystack/releases/latest/download/initramfs-metal-amd64.xz
```

Jetzt brauchen Sie die Netzwerkinformationen, die Talos Linux beim Booten übergeben werden. Das folgende kleine Skript sammelt alles Nötige und setzt entsprechende Umgebungsvariablen:

```
IP=$(ip -o -4 route get 8.8.8.8 | awk -F"src " '{sub(" .*", "", $2); print $2}')
GATEWAY=$(ip -o -4 route get 8.8.8.8 | awk -F"via " '{sub(" .*", "", $2); print $2}')
ETH=$(ip -o -4 route get 8.8.8.8 | awk -F"dev " '{sub(" .*", "", $2); print $2}')
CIDR=$(ip -o -4 addr show "$ETH" | awk -F"inet $IP/" '{sub(" .*", "", $2); print $2; exit}')
NETMASK=$(echo "$CIDR" | awk '{p=$1;for(i=1;i<=4;i++){if(p>=8){o=255;p-=8}else{o=256-2^(8-p);p=0}printf(i<4?o".":o"\n")}}')
DEV=$(udevadm info -q property "/sys/class/net/$ETH" | awk -F= '$1~/ID_NET_NAME_ONBOARD/{print $2; exit} $1~/ID_NET_NAME_PATH/{v=$2} END{if(v) print v}')
```

Diese Parameter können Sie über die `kernel cmdline` übergeben. Mit dem Parameter `ip=` konfigurieren Sie das Netzwerk über den Mechanismus der [IP-Konfiguration auf Kernel-Ebene](https://cateee.net/lkddb/web-lkddb/IP_PNP.html). Dabei richtet der Kernel beim Booten automatisch die Interfaces ein und vergibt IP-Adressen, und zwar anhand der Informationen, die über die `kernel cmdline` übergeben werden. Es handelt sich um eine eingebaute Kernel-Funktion, die über die Option `CONFIG_IP_PNP` aktiviert wird. In Talos Linux ist sie standardmäßig aktiv. Sie müssen lediglich korrekt formatierte Netzwerkeinstellungen in der `kernel cmdline` angeben.

- Die korrekte Syntax für diese Option finden Sie in der [Dokumentation von Talos Linux](https://www.talos.dev/).
- Ausführlichere Beispiele bietet außerdem die [offizielle Dokumentation des Linux-Kernels](https://www.kernel.org/doc/Documentation/filesystems/nfs/nfsroot.txt).

Setzen Sie die Variable `CMDLINE` mit der Option `ip`, die die Einstellungen des aktuellen Systems enthält, und geben Sie sie anschließend aus:

```
CMDLINE="init_on_alloc=1 slab_nomerge pti=on console=tty0 console=ttyS0 printk.devkmsg=on talos.platform=metal ip=${IP}::${GATEWAY}:${NETMASK}::${DEV}:::::"
echo $CMDLINE
```

Die Ausgabe sollte etwa so aussehen:

```
init_on_alloc=1 slab_nomerge pti=on console=tty0 console=ttyS0 printk.devkmsg=on talos.platform=metal ip=10.0.0.131::10.0.0.1:255.255.255.0::eno2np0:::::
```

Prüfen Sie, ob alles korrekt aussieht, und laden Sie dann den neuen Kernel:

```
kexec -l /tmp/vmlinuz --initrd=/tmp/initramfs.xz --command-line="$CMDLINE"
kexec -e
```

Der erste Befehl lädt den Talos-Kernel in den Arbeitsspeicher, der zweite schaltet das laufende System auf diesen neuen Kernel um.

Im Ergebnis haben Sie eine laufende Talos-Linux-Instanz mit konfiguriertem Netzwerk. Sie läuft derzeit allerdings vollständig im RAM: Wird der Server neu gestartet, kehrt das System in seinen ursprünglichen Zustand zurück (und bootet das Betriebssystem von der Festplatte, z. B. Ubuntu).

## machine-config anwenden und Talos Linux auf die Disk installieren

Um Talos Linux dauerhaft auf die Disk zu installieren und das aktuelle Betriebssystem zu ersetzen, müssen Sie eine machine-config anwenden, die die Ziel-Disk für die Installation angibt. Für die Konfiguration der Maschine können Sie entweder das offizielle Werkzeug [*talosctl*](https://www.talos.dev/) verwenden oder [*Talm*](https://github.com/cozystack/talm), ein Werkzeug, das vom Projekt Cozystack gepflegt wird (Talm funktioniert auch mit Vanilla-Talos-Linux).

Betrachten wir zuerst die Konfiguration mit *talosctl*. Stellen Sie vor dem Anwenden der Konfiguration sicher, dass sie die Netzwerkeinstellungen Ihres Nodes enthält; andernfalls konfiguriert der Node nach dem Neustart kein Netzwerk. Bei der Installation wird der Bootloader auf die Disk geschrieben, und dieser enthält die Option `ip` für die Autokonfiguration durch den Kernel nicht.

Hier ein Beispiel für einen Config-Patch mit den nötigen Werten:

```
# node1.yaml
machine:
  install:
    disk: /dev/sda
  network:
    hostname: node1
    nameservers:
    - 1.1.1.1
    - 8.8.8.8
    interfaces:
    - interface: eno2np0
      addresses:
      - 10.0.0.131/24
      routes:
      - network: 0.0.0.0/0
        gateway: 10.0.0.1
```

Damit können Sie eine vollständige machine-config erzeugen:

```
talosctl gen secrets
talosctl gen config --with-secrets=secrets.yaml --config-patch-control-plane=@node1.yaml <cluster-name> <cluster-endpoint>
```

Prüfen Sie die erzeugte Konfiguration und wenden Sie sie auf den Node an:

```
talosctl apply -f controlplane.yaml -e 10.0.0.131 -n 10.0.0.131 -i
```

Sobald Sie `controlplane.yaml` angewendet haben, installiert der Node Talos auf die Disk `/dev/sda`, überschreibt dabei das vorhandene Betriebssystem und startet neu.

Jetzt müssen Sie nur noch den Befehl `bootstrap` ausführen, um den etcd-Cluster zu initialisieren:

```
talosctl --talosconfig=talosconfig bootstrap -e 10.0.0.131 -n 10.0.0.131
```

Den Status des Nodes können Sie jederzeit mit dem Befehl `dashboard` einsehen:

```
talosctl --talosconfig=talosconfig dashboard -e 10.0.0.131 -n 10.0.0.131
```

Sobald alle Services den Zustand `Ready` erreicht haben, holen Sie sich die kubeconfig und können Ihr frisch installiertes Kubernetes nutzen:

```
talosctl --talosconfig=talosconfig kubeconfig kubeconfig
export KUBECONFIG=${PWD}/kubeconfig
```

## Konfigurationsmanagement mit Talm

Bei vielen Konfigurationen wünscht man sich eine bequeme Möglichkeit, sie zu verwalten. Das gilt besonders für Bare-Metal-Nodes, bei denen jeder Node andere Disks, Interfaces und spezifische Netzwerkeinstellungen haben kann. Unter Umständen müssen Sie dann für jeden Node einen eigenen Patch pflegen.

Um dieses Problem zu lösen, haben wir [Talm](https://github.com/cozystack/talm) entwickelt, einen Konfigurationsmanager für Talos Linux, der ähnlich wie Helm funktioniert.

Das Konzept ist einfach: Sie haben ein gemeinsames Konfigurations-Template mit Lookup-Funktionen. Wenn Sie die Konfiguration für einen bestimmten Node erzeugen, fragt Talm dynamisch die Talos-API ab und setzt die Werte in die finale Konfiguration ein.

Talm bietet nahezu alle Funktionen von *talosctl* und ein paar zusätzliche. Es kann Konfigurationen aus Helm-ähnlichen Templates erzeugen und sich die Node- und Endpoint-Parameter jedes Nodes in der resultierenden Datei merken, sodass Sie diese Parameter nicht jedes Mal angeben müssen, wenn Sie mit einem Node arbeiten.

**So führen Sie die gleichen Schritte zur Installation von Talos Linux mit Talm durch:**

Initialisieren Sie zunächst eine Konfiguration für einen neuen Cluster:

```
mkdir talos
cd talos
talm init
```

Passen Sie die Werte für Ihren Cluster in `values.yaml` an:

```
endpoint: "https://10.0.0.131:6443"
podSubnets:
- 10.244.0.0/16
serviceSubnets:
- 10.96.0.0/16
advertisedSubnets:
- 10.0.0.0/24
```

Erzeugen Sie eine Konfiguration für Ihren Node:

```
talm template -t templates/controlplane.yaml -e 10.0.0.131 -n 10.0.0.131 > nodes/node1.yaml
```

Das Ergebnis sieht etwa so aus:

```
# talm: nodes=["10.0.0.131"], endpoints=["10.0.0.131"], templates=["templates/controlplane.yaml"]
# THIS FILE IS AUTOGENERATED. PREFER TEMPLATE EDITS OVER MANUAL ONES.
machine:
  type: controlplane
  kubelet:
    nodeIP:
      validSubnets:
        - 10.0.0.0/24
  network:
    hostname: node1
    # -- Discovered interfaces:
    # eno2np0:
    #   hardwareAddr:a0:36:bc:cb:eb:98
    #   busPath: 0000:05:00.0
    #   driver: igc
    #   vendor: Intel Corporation
    #   product: Ethernet Controller I225-LM)
    interfaces:
      - interface: eno2np0
        addresses:
          - 10.0.0.131/24
        routes:
          - network: 0.0.0.0/0
            gateway: 10.0.0.1
    nameservers:
      - 1.1.1.1
      - 8.8.8.8
  install:
    # -- Discovered disks:
    # /dev/sda:
    #    model: SAMSUNG MZQL21T9HCJR-00A07
    #    serial: S64GNG0X444695
    #    wwid: eui.36344730584446950025384700000001
    #    size: 1.9 TB
    disk: /dev/sda
cluster:
  controlPlane:
    endpoint: https://10.0.0.131:6443
  clusterName: talos
  network:
    serviceSubnets:
      - 10.96.0.0/16
  etcd:
    advertisedSubnets:
      - 10.0.0.0/24
```

Jetzt müssen Sie die Konfiguration nur noch auf Ihren Node anwenden:

```
talm apply -f nodes/node1.yaml -i
```

Talm ermittelt Node-Adresse und Endpoint automatisch aus der „Modeline“ (einem speziellen Kommentar am Anfang der Datei) und wendet die Konfiguration an.

Auf dieselbe Weise können Sie auch andere Befehle ausführen, ohne die Optionen für Node-Adresse und Endpoint anzugeben. Einige Beispiele:

Den Status des Nodes über den eingebauten Dashboard-Befehl anzeigen:

```
talm dashboard -f nodes/node1.yaml
```

Den etcd-Cluster auf `node1` bootstrappen:

```
talm bootstrap -f nodes/node1.yaml
```

Die kubeconfig im aktuellen Verzeichnis speichern:

```
talm kubeconfig kubeconfig -f nodes/node1.yaml
```

Anders als beim offiziellen Werkzeug *talosctl* enthalten die erzeugten Konfigurationen keine Secrets und lassen sich daher ohne zusätzliche Verschlüsselung in Git ablegen. Die Secrets liegen im Wurzelverzeichnis Ihres Projekts, und zwar ausschließlich in diesen Dateien: `secrets.yaml`, `talosconfig` und `kubeconfig`.

## Zusammenfassung

Das ist unser vollständiges Vorgehen, um Talos Linux in nahezu jeder Situation zu installieren. Hier noch einmal kurz zusammengefasst:

1. Starten Sie Talos Linux mit *kexec* auf einem beliebigen vorhandenen System.
2. Sorgen Sie dafür, dass der neue Kernel die korrekten Netzwerkeinstellungen erhält: Lesen Sie sie aus dem aktuellen System aus und übergeben Sie sie über den Parameter `ip` in der *cmdline*. So können Sie sich über die API mit dem frisch gebooteten System verbinden.
3. Wird der Kernel per *kexec* gebootet, läuft Talos Linux vollständig im RAM. Um Talos auf die Disk zu installieren, wenden Sie Ihre Konfiguration mit *talosctl* oder Talm an.
4. Vergessen Sie beim Anwenden der Konfiguration nicht, die Netzwerkeinstellungen für Ihren Node anzugeben, denn die Bootloader-Konfiguration auf der Disk enthält sie nicht automatisch.
5. Freuen Sie sich über Ihr frisch installiertes, voll funktionsfähiges Talos Linux.

## Weiterführende Materialien

- [How we built a dynamic Kubernetes API Server for the API Aggregation Layer in Cozystack](https://kubernetes.io/blog/2024/11/21/dynamic-kubernetes-api-server-for-cozystack/)
- [DIY: Create Your Own Cloud with Kubernetes](https://kubernetes.io/blog/2024/04/05/diy-create-your-own-cloud-with-kubernetes-part-1/)
- [Cozystack Becomes a CNCF Sandbox Project](/de/blog/2025/03/cozystack-wird-cncf-sandbox-projekt/)
- [Journey to Stable Infrastructures with Talos Linux & Cozystack | Andrei Kvapil | SREday London 2024](https://www.youtube.com/watch?v=uhXujtTzG44)
- [Talos Linux: You don’t need an operating system, you only need Kubernetes / Andrei Kvapil](https://www.youtube.com/watch?v=9CIMTum9bTA)
- [Comparing GitOps: Argo CD vs Flux CD, with Andrei Kvapil | KubeFM](https://www.youtube.com/watch?v=4RVe32xRITo)
- [Cozystack on Talos Linux](https://www.youtube.com/watch?v=s79VqXu-eG4)

Von [Andrei Kvapil](https://medium.com/@kvaps) am [28. April 2025](https://medium.com/p/c652b35b902e).

[Kanonischer Link](https://medium.com/p/c652b35b902e)

Exportiert von [Medium](https://medium.com) am 5. Oktober 2026.
