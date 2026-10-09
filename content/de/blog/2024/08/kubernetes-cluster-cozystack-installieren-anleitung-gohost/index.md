---
title: "Einen von Cozystack verwalteten Kubernetes-Cluster installieren: eine ausführliche Anleitung von GoHost und Ænix"
seo_title: "Cozystack-Cluster installieren: eine Anleitung von GoHost.kz"
description: "Schritt-für-Schritt-Anleitung von GoHost.kz: Cluster-Topologie, Booten von Talos Linux, talos-bootstrap, Installation von Cozystack und Einrichtung des Storage."
slug: "kubernetes-cluster-cozystack-installieren-anleitung-gohost"
date: "2024-08-16"
cover_image: "/img/blog/covers/de/kubernetes-cluster-cozystack-installieren-anleitung-gohost.jpg"
author: "Timur Tukaev"
type: "tutorial"
topics: ["Proxmox", "Kubernetes", "Cozystack", "Talos", "Hosting", "etcd"]
language: "de"
hreflang_en: "/blog/2024/08/installing-a-kubernetes-cluster-managed-by-cozystack-a-detailed-guide-by-gohost-and-/"
quiz:
  title: "Wissens-Check: Installation von Cozystack und Talos"
  questions:
    - q: "Wie viele Server braucht der Cluster in der beschriebenen Topologie mindestens, um ausfallsicher zu sein?"
      options:
        - { text: "1", correct: false }
        - { text: "3", correct: true }
        - { text: "2", correct: false }
        - { text: "5", correct: false }
      explanation: "Der Artikel nennt 3 Server als Minimum für Ausfallsicherheit, mit NVMe-Laufwerken für Container und SSD für das Betriebssystem."
    - q: "Welche Rolle spielt der Management-Host in diesem Cozystack-Setup?"
      options:
        - { text: "Er wird nur für die Ersteinrichtung des Clusters gebraucht", correct: true }
        - { text: "Er führt nach der Installation die produktiven Workloads aus", correct: false }
        - { text: "Er hostet dauerhaft die Control Plane von Cozystack", correct: false }
        - { text: "Er betreibt das LINSTOR-Storage-Backend des Clusters", correct: false }
      explanation: "Der Management-Host wird nur für die Ersteinrichtung des Clusters gebraucht; nach dem Deployment kann ein anderes Gateway ihn ersetzen. SRV1/SRV2/SRV3 nutzen ihn während des Bootstraps als Standard-Gateway."
    - q: "Welches Betriebssystem nutzt Cozystack in dieser Anleitung als Host-OS?"
      options:
        - { text: "Ubuntu Server", correct: false }
        - { text: "Rocky Linux", correct: false }
        - { text: "Talos Linux", correct: true }
        - { text: "Debian", correct: false }
      explanation: "Cozystack läuft auf Talos Linux, dessen hohes Sicherheitsniveau die Anleitung hervorhebt. Ubuntu 22.04 dient nur als Management-Host, von dem aus der Cluster aufgesetzt wird."
    - q: "Auf welchen Wert wird das Netzwerk-Plugin (cluster.network.cni) im gezeigten Talos-Patch gesetzt?"
      options:
        - { text: "none", correct: true }
        - { text: "flannel", correct: false }
        - { text: "calico", correct: false }
        - { text: "cilium", correct: false }
      explanation: "cluster.network.cni.name steht im Patch auf `none` — Cozystack bringt sein eigenes CNI (Cilium) mit, deshalb muss der Talos-Standard abgeschaltet werden."
    - q: "Welche Architektureigenschaft von Cozystack hebt der Autor als besonders attraktiv für Hosting-Anbieter hervor?"
      options:
        - { text: "Verpflichtende Air-Gap-Installation für sicherheitskritische Umgebungen", correct: false }
        - { text: "Tenant-Kubernetes-Cluster laufen als VMs im Host-Cluster", correct: true }
        - { text: "Eingebaute Föderation mit Microsoft Active Directory", correct: false }
        - { text: "Kostenlose kommerzielle Lizenz für Reseller und Hosting-Partner", correct: false }
      explanation: "Der Autor betont, dass Cozystack die Control Planes der Tenant-Kubernetes-Cluster im Host-Kubernetes betreibt — ohne Virtualisierung für die Control Plane —, während die Worker als VMs laufen. Das nutzt die Ressourcen optimal, ohne die Isolation der Tenants zu opfern."
---

> **Historische Anleitung — geschrieben für Cozystack v0.7.0 (August 2024). Die Installationsbefehle unten gelten nicht mehr.**
> Mit Cozystack v1.0 wurden das Manifest `cozystack-installer.yaml` und die ConfigMap `cozystack` durch einen per Helm installierten Operator mit einer Custom Resource `Package` ersetzt, und an die Stelle der Bundles (`paas-full`, `distro-full`) traten Varianten (`isp-full`, `isp-full-generic`, `isp-hosted`, `default`). Das aktuelle Vorgehen beschreibt der [Getting-Started-Leitfaden von Cozystack](https://cozystack.io/docs/v1.6/getting-started/). Das Design von Hardware, Netzwerk und Talos-Topologie unten ist weiterhin repräsentativ.

Diesen Artikel hat Vladislav Karabasov vom kasachischen Hosting-Unternehmen [gohost](https://gohost.kz) geschrieben, daher ist er in der Ich-Form verfasst.

![Titelbild: Installation eines von Cozystack verwalteten Kubernetes-Clusters, eine Anleitung von GoHost.kz und Ænix](/img/blog/medium/installing-a-kubernetes-cluster-managed-by-cozystack-a-detailed-guide-by-gohost-and-/cover.jpg)

Als ich zu gohost.kz kam, war das Unternehmen bereits seit 15 Jahren auf dem kasachischen Markt tätig und bot seinen Kunden das übliche Spektrum an Leistungen: VPS/VDC, IaaS, Webhosting usw. Die Kunden hatten jedoch neue Anforderungen, und so bekam ich die Aufgabe, den Bereich Kubernetes as a Service aufzubauen.

So begann meine „zweite Bekanntschaft“ mit *nix-Systemen (diesmal mit [Talos Linux](https://www.talos.dev)) und mit der Welt der Container (über Kubernetes). Bei der Arbeit am Start und Ausbau dieses neuen Bereichs stieß ich auf die Open-Source-Plattform [Cozystack](https://cozystack.io/) und lernte ihre Entwickler kennen, Andrey Kvapil und Georg Gaal. Nach unseren Gesprächen beschloss ich, einen von Cozystack verwalteten Kubernetes-Cluster aufzusetzen, der auf Talos Linux basiert.

Das hat mich an Cozystack interessiert:

- Die Plattform kann Kubernetes-Cluster innerhalb eines bestehenden Clusters bereitstellen, ohne für die Control Plane von Kubernetes Virtualisierung zu nutzen; die Worker laufen dabei als VMs im bestehenden Kubernetes-Cluster. Das ermöglicht eine optimale Ressourcennutzung, ohne die Sicherheit zu beeinträchtigen.
- Talos Linux, auf dem die Plattform basiert, bietet ein sehr hohes Sicherheitsniveau.
- Zudem sind die Macher der Plattform aktive Mitglieder der Kubernetes-Community und leisten bedeutende Beiträge zu Open Source, darunter der Aufbau einer Community für die Entwicklung eines eigenen [etcd-operator](https://github.com/aenix-io/etcd-operator).

Wie sich herausstellte, ist gohost vom ersten Tag an an diesem Open-Source-Projekt beteiligt. Derzeit testen wir die Plattform intensiv und bereiten den Produktivbetrieb vor, also das Angebot von Services auf Basis von Cozystack für unsere Hosting-Kunden.

Für diesen Artikel hatte ich mehrere Gründe: Ich wollte mein erworbenes Wissen ordnen, meine Erfahrung mit der Installation von Cozystack auf Talos Linux mit der Community teilen und von meiner Arbeit mit verschiedenen Werkzeugen aus dem Kubernetes-Ökosystem berichten. Außerdem gibt es sicher Leserinnen und Leser, denen dieses Material bei der Arbeit hilft — kurz gesagt ist das mein bescheidener Versuch, der Community etwas zurückzugeben. Also, los geht's.

## Cluster-Topologie

Cozystack lässt sich zwar in wenigen Minuten auf Bare Metal ausrollen, die Plattform läuft aber auch in jeder virtuellen Umgebung. Ich habe zum Beispiel zunächst Cluster in [Proxmox](https://en.wikipedia.org/wiki/Proxmox_Virtual_Environment) und [KVM](https://en.wikipedia.org/wiki/Kernel-based_Virtual_Machine) aufgesetzt.

In diesem Artikel geht es jedoch um meine Erfahrung mit der Installation auf echter Hardware. Beginnen wir mit dem Aufbau — diese Ausstattung hatte ich zur Verfügung:

1. VPS 2G/2CPU (ein gewöhnlicher Heim-PC würde auch genügen) — 1 Stück.
2. Switches — 2 Stück (im Aggregationsmodus, der höhere Ausfallsicherheit, mehr Bandbreite und Lastverteilung bietet, Abb. 1) oder 1 Stück (ohne Aggregation, Abb. 2).
3. Server mit lokalem Speicher auf NVMe-Laufwerken (für Container) und SSDs (für das Betriebssystem). Für Ausfallsicherheit braucht der Cluster mindestens 3 Server.

Sie können auch netzwerkgebundenen Speicher (NAS) verwenden, etwa mit einer Kombination aus [DRBD](https://en.wikipedia.org/wiki/DRBD) und [Linstor](https://linbit.com/linstor/). Wir setzen solche NAS in unserer Produktivumgebung für VPS ein, aber ihre Konfiguration wäre Stoff für einen eigenen, umfangreichen Artikel; daher beschränken wir uns hier auf Server.

Hier ist das Schema der Hardware, mit der ich Cozystack ausgerollt habe (Abb. 1). Die Switch-Konfiguration lasse ich an dieser Stelle außen vor.

![Abb. 1: Cluster-Topologie mit Port-Aggregation](/img/blog/medium/installing-a-kubernetes-cluster-managed-by-cozystack-a-detailed-guide-by-gohost-and-/02.png)

Abb. 1. Topologie mit Port-Aggregation

![Abb. 2: Cluster-Topologie ohne Port-Aggregation](/img/blog/medium/installing-a-kubernetes-cluster-managed-by-cozystack-a-detailed-guide-by-gohost-and-/03.png)

Abb. 2. Topologie ohne Port-Aggregation

Bei der Planung der Cluster-Topologie müssen Sie den Internetzugang sicherstellen (SRV1, SRV2, SRV3). In meinem Fall läuft der Zugang über einen Management-Host: SRV1, SRV2 und SRV3 nutzen ihn als Standard-Gateway. Zusätzlich ist auf dem Management-Host Routing mit passenden iptables-Regeln aktiviert. Sie können aber auch ein anderes Gateway verwenden — der Management-Host wird nur für die Ersteinrichtung des Clusters gebraucht.

## Den Management-Host vorbereiten

Zuerst richten wir den Management-Host ein, von dem aus der von Cozystack verwaltete Kubernetes-Cluster ausgerollt wird. Ich gehe davon aus, dass Sie wissen, wie man einen Host mit Betriebssystem aufsetzt, und überspringe die Details — ich habe Ubuntu 22.04 verwendet.

Nun zum Aufsetzen des Management-Hosts. Dafür schlage ich mein Bash-Skript vor: Es erspart das mühsame Suchen und Installieren von Paketen und automatisiert die Host-Konfiguration. Zum Zeitpunkt des Schreibens wurden folgende Paketversionen verwendet: talosctl v1.7.1 und kubectl v1.30.1.

```
#!/bin/bash

RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

apt update
apt upgrade -y
apt -y install ntp bind9 curl jq nload

service ntp restart
#service ntp status
sed -i -r 's/listen-on-v6/listen-on/g'  /etc/bind/named.conf.options
sed -i '/listen-on/a \\tallow-query { any; };'  /etc/bind/named.conf.options
apt -y  install apt-transport-https ca-certificates curl software-properties-common
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /usr/share/keyrings/docker-archive-keyring.gpg

echo "deb [arch=$(dpkg --print-architecture) signed-by=/usr/share/keyrings/docker-archive-keyring.gpg] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null

apt update
apt install  -y docker-ce snapd make dialog nmap
#systemctl status docker
#curl -sL https://talos.dev/install | sh

releases=$(curl -s https://api.github.com/repos/siderolabs/talos/releases | jq -r '.[].tag_name' | head -n 10)
echo -e "${YELLOW}Select version to download:${NC}"
select version in $releases; do
    if [[ -n "$version" ]]; then
        echo "You have selected a version $version"
        break
    else
        echo -e "${RED}Incorrect selection. Please try again. ${NC}"
    fi
done
url="https://github.com/siderolabs/talos/releases/download/$version/talosctl-linux-amd64"
wget $url -O talosctl
chmod +x talosctl
sudo mv talosctl /usr/local/bin/
#kubectl
releases=$(curl -s https://api.github.com/repos/kubernetes/kubernetes/releases | jq -r '.[].tag_name' | grep -E '^v[0-9]+\.[0-9]+\.[0-9]+$' | head -n 10)
echo -e "${YELLOW}Select kubectl version to download:${NC}"
select version in $releases; do
    if [[ -n "$version" ]]; then
        echo  "You have selected a version $version"
        break
    else
        echo -e "${RED}Incorrect selection. Please try again. ${NC}"
    fi
done
url="https://storage.googleapis.com/kubernetes-release/release/$version/bin/linux/amd64/kubectl"
wget $url -O kubectl
chmod +x kubectl
sudo mv kubectl /usr/local/bin/

curl -fsSL -o get_helm.sh https://raw.githubusercontent.com/helm/helm/main/scripts/get-helm-3
chmod 700 get_helm.sh
./get_helm.sh

curl -LO https://github.com/kvaps/kubectl-node-shell/raw/master/kubectl-node_shell
chmod +x ./kubectl-node_shell
sudo mv ./kubectl-node_shell /usr/local/bin/kubectl-node_shell

curl -LO https://github.com/aenix-io/talm/releases/download/v0.5.7/talm-linux-amd64
chmod +x ./talm-linux-amd64
sudo mv ./talm-linux-amd64 /usr/local/bin/talm

echo "Specify the directory name for the configuration files,"
echo -e "the directory will be located in the catalog ${GREEN}/opt/${NC}. By default: ${GREEN}/opt/cozystack${NC}"
echo -e "${YELLOW}"
read -p "Enter the directory name: " cozystack
echo -e "${NC}"
if [ -z "$cozystack" ]; then
  cozystack="cozystack"
fi
mkdir -p /opt/$cozystack
curl -LO https://github.com/aenix-io/talos-bootstrap/raw/master/talos-bootstrap
mv talos-bootstrap /opt/$cozystack
chmod +x /opt/$cozystack/talos-bootstrap
snap install  yq
echo -e "${YELLOW}Specify IP network for etcd and kubelet${NC}"
echo -e "Default: ${GREEN} 192.168.100.0/24 ${NC}"
read -p "IP network (network/mask): " IPEK
if [ -z "$IPEK" ]; then
  IPEK="192.168.100.0/24"
fi
#ADD FORWARD (RELATED,ESTABLISHED)
rule1="-d $IPEK -m state --state RELATED,ESTABLISHED -m comment --comment $cozystack -j ACCEPT"
if ! iptables-save | grep -q -- "-A FORWARD $rule1"; then
    iptables -I FORWARD -d $IPEK -m state --state RELATED,ESTABLISHED -m comment --comment $cozystack -j ACCEPT
fi
# ADD FORWARD
rule2="-s $IPEK -m comment --comment $cozystack -j ACCEPT"
if ! iptables-save | grep -q -- "-A FORWARD $rule2"; then
    iptables -I FORWARD -s $IPEK -m comment --comment $cozystack -j ACCEPT
fi
# ADD NAT
rule3="-s $IPEK -m comment --comment $cozystack -j MASQUERADE"
if ! iptables-save | grep -q -- "-A POSTROUTING $rule3"; then
    iptables -t nat -I POSTROUTING -s $IPEK -m comment --comment $cozystack -j MASQUERADE
fi
#sysctl -w net.ipv4.ip_forward=1
if ! grep -qF "$REQUIRED_SETTING" "$FILE"; then
  echo "net.ipv4.ip_forward = 1" | sudo tee -a "/etc/sysctl.conf" > /dev/null
fi
sysctl -p
apt -y install iptables-persistent

cat > /opt/$cozystack/patch.yaml <<EOT
machine:
  kubelet:
    nodeIP:
      validSubnets:
      - $IPEK
    extraConfig:
      maxPods: 512
  kernel:
    modules:
    - name: openvswitch
    - name: drbd
      parameters:
        - usermode_helper=disabled
    - name: zfs
    - name: spl
  install:
    image: ghcr.io/aenix-io/cozystack/talos:v1.7.1
  files:
  - content: |
      [plugins]
        [plugins."io.containerd.grpc.v1.cri"]
          device_ownership_from_security_context = true
    path: /etc/cri/conf.d/20-customization.part
    op: create
cluster:
  network:
    cni:
      name: none
    dnsDomain: cozy.local
    podSubnets:
    - 10.244.0.0/16
    serviceSubnets:
    - 10.96.0.0/16
EOT

cat > /opt/$cozystack/patch-controlplane.yaml <<EOT
cluster:
  allowSchedulingOnControlPlanes: true
  controllerManager:
    extraArgs:
      bind-address: 0.0.0.0
  scheduler:
    extraArgs:
      bind-address: 0.0.0.0
  apiServer:
    certSANs:
    - 127.0.0.1
  proxy:
    disabled: true
  discovery:
    enabled: false
  etcd:
    advertisedSubnets:
    - $IPEK
EOT

echo -e "${YELLOW}========== Installed binary ===========${NC}"
echo "helm       in folder" $(which helm)
echo "yq         in folder" $(which yq)
echo "kubectl    in folder" $(which kubectl)
echo "docker     in folder" $(which  docker)
echo "talosctl   in folder" $(which  talosctl)
echo "dialog     in folder" $(which  dialog)
echo "nmap       in folder" $(which  nmap)
echo "talm       in folder" $(which  talm)
echo "node_shell       in folder" $(which  kubectl-node_shell)
echo -e "${YELLOW}========== services runing ===========${NC}"
echo "DNS Bind9"; systemctl is-active bind9
echo "NTP"; systemctl is-active ntp
echo -e "${YELLOW}========== ADD Iptables Rule ===========${NC}"
iptables -S | grep $cozystack
iptables -t nat -S | grep $cozystack
echo -e "${RED}!!!  Please change the catalog to work with talos-bootstrap !!!${NC}"
echo -e "${GREEN}cd  /opt/$cozystack ${NC}"
```

So funktioniert das Skript: Es lädt verschiedene Werkzeuge herunter und installiert sie, darunter helm, yq, kubectl, docker, talosctl, dialog, nmap, make, kubectl-node-shell und talm (ein weiteres praktisches Open-Source-Werkzeug der Cozystack-Entwickler zur Konfiguration von Talos Linux — eine Art Helm für Talos). Anschließend legt es sie in den passenden Verzeichnissen ab. Der gesamte Ablauf ist automatisiert und führt mit verständlichen Dialogen durch die Schritte. Außerdem richtet das Skript den Zeitdienst NTP und den DNS-Dienst bind9 ein und legt Regeln an, über die der Cluster via Management-Host ins Internet gelangt.

Nach dem Lauf des Skripts liegt das Skript talos-bootstrap für das Cluster-Deployment im Verzeichnis `/opt/your_name` (standardmäßig `/opt/cozystack`), und die nötigen Konfigurationsdateien wie `patch-controlplane.yaml` und `patch.yaml` sind angelegt. Diese Dateien legen fest, welche Kernel-Module geladen werden und von welchem Image installiert wird.

Am Ende sollte der Verzeichnisinhalt so aussehen:

![Abb. 3: Inhalt des Verzeichnisses /opt/cozystack](/img/blog/medium/installing-a-kubernetes-cluster-managed-by-cozystack-a-detailed-guide-by-gohost-and-/04.png)

Abb. 3. Verzeichnis /opt/cozystack

Der Management-Host ist bereit für die weiteren Schritte.

## Vom Systemimage von Talos Linux booten

Das Betriebssystem, auf dem Cozystack basiert, ist Talos Linux. Es gibt mehrere Wege, Cozystack zu installieren:

- **PXE** — Installation mit temporären DHCP- und PXE-Servern, die in Docker-Containern laufen.
- **ISO** — Installation mit ISO-Images.
- **Hetzner** — Installation auf Servern bei Hetzner.

Wir verwenden für die Installation die [ISO-Datei](https://github.com/aenix-io/cozystack/releases). Die Cozystack-Entwickler erzeugen und testen fertige Plattform-Images mit der gesamten nötigen Software. Diese Software wird außerdem auf Kompatibilität mit der Plattform und der Distribution Talos Linux getestet.

## Erste Systemkonfiguration

Nach dem Booten vom Image sieht der Bildschirm so aus. Jetzt müssen wir das Netzwerk konfigurieren — drücken Sie dazu F3 (bei der Installation per PXE wird die Adressierung der Nodes automatisch eingerichtet).

![Abb. 4: Konsole von Talos Linux nach dem Booten vom Image](/img/blog/medium/installing-a-kubernetes-cluster-managed-by-cozystack-a-detailed-guide-by-gohost-and-/05.jpg)

Abb. 4. Bildschirm von Talos Linux nach dem Laden

Wir tragen die Netzwerkadressen ein — mehrere DNS- und Zeitserver sind möglich (getrennt durch Leerzeichen oder Kommas). Klicken Sie auf „Save“.

![Abb. 5: Netzwerkeinrichtung in Talos Linux](/img/blog/medium/installing-a-kubernetes-cluster-managed-by-cozystack-a-detailed-guide-by-gohost-and-/06.png)

Abb. 5. Einrichtungsbildschirm von Talos Linux

Die übrigen Nodes konfigurieren Sie genauso. Ich habe meine eigene Adressierung verwendet, deshalb sind einige IP-Adressen in den Screenshots unkenntlich gemacht.

## Die Installation mit talos-bootstrap starten

Führen Sie `./talos-bootstrap` ohne Parameter aus, um die Hilfe anzuzeigen.

![Abb. 6: Hilfeausgabe von talos-bootstrap beim ersten Start](/img/blog/medium/installing-a-kubernetes-cluster-managed-by-cozystack-a-detailed-guide-by-gohost-and-/07.png)

Abb. 6. talos-bootstrap (erster Start)

Führen Sie danach `./talos-bootstrap install` aus. Im ersten Dialogfenster schlägt das Skript den Standardnamen für den Cluster vor — er entspricht dem Verzeichnis, in dem das Skript liegt (standardmäßig `cozystack`, sofern Sie keinen eigenen Namen angegeben haben).

![Abb. 7: Dialog von talos-bootstrap für den Cluster-Namen](/img/blog/medium/installing-a-kubernetes-cluster-managed-by-cozystack-a-detailed-guide-by-gohost-and-/08.png)

Abb. 7. talos-bootstrap (Cluster benennen)

Geben Sie das Netzwerk an, in dem nach Nodes gesucht werden soll.

![Abb. 8: talos-bootstrap sucht Nodes im angegebenen Netzwerk](/img/blog/medium/installing-a-kubernetes-cluster-managed-by-cozystack-a-detailed-guide-by-gohost-and-/09.png)

Abb. 8. talos-bootstrap (Suche nach Nodes im angegebenen Netzwerk)

Das Skript findet die Nodes automatisch und zeigt sie an — wie man sieht, wurden alle drei Nodes gefunden. Auf einem Management-Host mit AlmaLinux funktionierte die Node-Erkennung irgendwann nicht mehr; ich habe das nicht weiter untersucht und bin einfach auf Ubuntu umgestiegen.

Sie können Nodes auch manuell suchen, mit dem Befehl `nmap -Pn -n -p 50000 your_ip_network -vv | awk ‘/Discovered open port/ {print $NF}’` (er gibt eine Liste von IP-Adressen aus).

![Abb. 9: Auswahl des zu installierenden Nodes in talos-bootstrap](/img/blog/medium/installing-a-kubernetes-cluster-managed-by-cozystack-a-detailed-guide-by-gohost-and-/10.png)

Abb. 9. talos-bootstrap (Node für die Installation auswählen)

Wählen Sie in diesem Schritt die Option „ControlPlane“ und klicken Sie auf OK (alle 3 Nodes im Cluster werden als Control Plane eingerichtet).

![Abb. 10: Auswahl der Node-Rolle (ControlPlane) in talos-bootstrap](/img/blog/medium/installing-a-kubernetes-cluster-managed-by-cozystack-a-detailed-guide-by-gohost-and-/11.png)

Abb. 10. talos-bootstrap (Rolle des Nodes auswählen)

Anschließend übernimmt das Skript alle Einstellungen von den Nodes (die wir bei der Netzwerkkonfiguration in Talos Linux festgelegt haben, Abb. 5) und gibt sie in der Konsole aus. Wir müssen nur bestätigen, dass alles stimmt.

![Abb. 11: Dialog von talos-bootstrap für den Hostnamen](/img/blog/medium/installing-a-kubernetes-cluster-managed-by-cozystack-a-detailed-guide-by-gohost-and-/12.png)

Abb. 11. talos-bootstrap (Hostnamen angeben)

Wählen Sie die Festplatte, auf der das System installiert wird — bei mir ist das `sda`.

![Abb. 12: Auswahl der Installationsfestplatte in talos-bootstrap](/img/blog/medium/installing-a-kubernetes-cluster-managed-by-cozystack-a-detailed-guide-by-gohost-and-/13.png)

Abb. 12. talos-bootstrap (Festplatte für die Installation auswählen)

Danach erscheint unser Interface mit der vorkonfigurierten IP-Adresse (bei mir `eno4`). Bestätigen Sie mit „OK“.

![Abb. 13: Auswahl des Netzwerk-Interfaces in talos-bootstrap](/img/blog/medium/installing-a-kubernetes-cluster-managed-by-cozystack-a-detailed-guide-by-gohost-and-/14.png)

Abb. 13. talos-bootstrap (Netzwerk-Interface auswählen)

Wählen Sie unser Gateway und bestätigen Sie.

![Abb. 14: Auswahl des Gateways in talos-bootstrap](/img/blog/medium/installing-a-kubernetes-cluster-managed-by-cozystack-a-detailed-guide-by-gohost-and-/15.png)

Abb. 14. talos-bootstrap (das Gateway wird für den Internetzugang verwendet)

Es öffnet sich ein Fenster für die Adressen der DNS-Server; mehrere Adressen trennen Sie durch Leerzeichen. Klicken Sie danach auf „OK“.

![Abb. 15: Dialog von talos-bootstrap für die DNS-Server](/img/blog/medium/installing-a-kubernetes-cluster-managed-by-cozystack-a-detailed-guide-by-gohost-and-/16.png)

Abb. 15. talos-bootstrap (DNS-Server angeben oder die vorgeschlagenen übernehmen)

Im nächsten Fenster geben Sie die Floating IP ein. Dieser Mechanismus in Talos ähnelt stark VRRP, prüft den Zustand aber nicht über ein Low-Level-Netzwerkprotokoll, sondern über einen etcd-Cluster auf den Control-Plane-Nodes. Die Floating IP sorgt für die Hochverfügbarkeit des Clusters im Netzwerk: Sie „wandert“ zwischen den Nodes, sodass die IP-Adresse umziehen kann, ohne dass sich die Konfiguration ändert. Tragen Sie hier eine beliebige freie IP aus dem Adressraum unseres Netzwerks ein (zum Beispiel dieselbe wie im Topologieschema, `192.168.100.10`) — das wird die IP des Clusters.

![Abb. 16: Dialog von talos-bootstrap für die Floating IP](/img/blog/medium/installing-a-kubernetes-cluster-managed-by-cozystack-a-detailed-guide-by-gohost-and-/17.png)

Abb. 16. talos-bootstrap (Floating IP eingeben)

Danach sollte ein Fenster mit unserer IP erscheinen. Bestätigen Sie erneut.

![Abb. 17: API-Adresse für das Kubelet in talos-bootstrap](/img/blog/medium/installing-a-kubernetes-cluster-managed-by-cozystack-a-detailed-guide-by-gohost-and-/18.png)

Abb. 17. talos-bootstrap (API für das Kubelet)

Als Nächstes zeigt das Skript die Einstellungen an, die auf den Master-Node angewendet werden.

![Abb. 18: Endgültige Konfiguration in talos-bootstrap vor der Installation](/img/blog/medium/installing-a-kubernetes-cluster-managed-by-cozystack-a-detailed-guide-by-gohost-and-/19.png)

Abb. 18. talos-bootstrap (endgültige Konfiguration für den Start der Installation)

Klicken Sie auf „OK“ und warten Sie, bis die Installation abgeschlossen ist. Währenddessen erscheinen auf dem Node Zeilen wie diese:

![Abb. 19: Konsole von Talos Linux während der Installation](/img/blog/medium/installing-a-kubernetes-cluster-managed-by-cozystack-a-detailed-guide-by-gohost-and-/20.png)

Abb. 19. talos-bootstrap (Bildschirm von Talos Linux)

Auf dem Management-Host können Sie in einer zweiten Konsole beobachten, wie der Datenverkehr ansteigt (mit dem Werkzeug nload) — das Image wird also aus dem Netz geladen.

![Abb. 20: Netzwerkmonitor nload zeigt den Download des Images](/img/blog/medium/installing-a-kubernetes-cluster-managed-by-cozystack-a-detailed-guide-by-gohost-and-/21.png)

Abb. 20. nload (Monitor für die Netzwerklast)

Nach der Installation startet der Node neu, und der Fortschrittsbalken zeigt zuerst 20 %, dann 50 %, dann 70 %. Bei 70 % startet der Node neu. Warten Sie erneut — wie lange, hängt von der Geschwindigkeit der Internetverbindung ab: Je schneller die Leitung, desto schneller der Download.

![Abb. 21: Installationsfortschritt in talos-bootstrap](/img/blog/medium/installing-a-kubernetes-cluster-managed-by-cozystack-a-detailed-guide-by-gohost-and-/22.png)

Abb. 21. talos-bootstrap (Installationsvorgang)

Nach der Installation des ersten Cluster-Nodes werden wir aufgefordert, etcd zu installieren. Klicken Sie auf „Yes“.

![Abb. 22: Abfrage von talos-bootstrap zur Installation von etcd](/img/blog/medium/installing-a-kubernetes-cluster-managed-by-cozystack-a-detailed-guide-by-gohost-and-/23.png)

Abb. 22. talos-bootstrap (Installation von etcd)

Die übrigen Nodes werden genauso installiert, bis auf den vorletzten Schritt. Fahren wir also mit der Installation der restlichen Nodes fort.

![Abb. 23: Installation in talos-bootstrap abgeschlossen](/img/blog/medium/installing-a-kubernetes-cluster-managed-by-cozystack-a-detailed-guide-by-gohost-and-/24.png)

Abb. 23. talos-bootstrap (Installation abgeschlossen)

Damit haben wir den ersten Node unseres künftigen Clusters.

Nach der Installation erscheinen im Verzeichnis `/opt/your_name` neue Dateien — der Befehl `ls` sollte Folgendes ausgeben:

![Abb. 24: Neue Dateien im Cluster-Verzeichnis nach der Installation](/img/blog/medium/installing-a-kubernetes-cluster-managed-by-cozystack-a-detailed-guide-by-gohost-and-/25.png)

Abb. 24. Neue Dateien im Verzeichnis

In diesem Verzeichnis führen Sie eine Reihe von Befehlen aus — sie legen im Home-Verzeichnis des Benutzers Verzeichnisse mit Konfigurationsdateien an, die kubectl und talosctl zum Arbeiten brauchen.

```
mkdir $HOME/.kube/
mkdir $HOME/.talos/
cp -i kubeconfig $HOME/.kube/config
cp -i talosconfig $HOME/.talos/config
```

Wenn Sie das nicht tun, müssen Sie die Konfigurationsdateien manuell angeben: für talosctl mit `talosctl --talosconfig=config_file`, und für kubectl entweder mit `KUBECONFIG=config_file` in der Konsole des Benutzers (das gilt nur für die aktuelle Sitzung) oder, indem Sie die Konfigurationsdatei jedes Mal mit `kubectl --kubeconfig=config_file` angeben.

Führen Sie anschließend diesen Befehl aus:

```
kubectl get node
```

Sie erhalten folgende Ausgabe:

![Abb. 25: Ausgabe von kubectl mit den Nodes des Clusters](/img/blog/medium/installing-a-kubernetes-cluster-managed-by-cozystack-a-detailed-guide-by-gohost-and-/26.png)

Abb. 25. Nodes in unserem Cluster

Nachdem die übrigen Nodes installiert sind, ist die Ersteinrichtung des Clusters abgeschlossen. Er enthält derzeit nur einige Systemkomponenten, und die Nodes stehen auf `NotReady`, weil wir die Installation von CNI und kube-proxy in der Talos-Konfiguration abgeschaltet haben. Diese Komponenten stellt und verwaltet Cozystack.

## Cozystack installieren

> **Ab Cozystack v1.0 überholt.** Der aktuelle Schritt lautet `helm upgrade --install cozystack oci://ghcr.io/cozystack/cozystack/cozy-installer --version X.Y.Z --namespace cozy-system --create-namespace`, gefolgt von einer Ressource `cozystack.io/v1alpha1` `Package` mit dem Namen `cozystack.cozystack-platform`, die `spec.variant` sowie die Werte für `publishing` und `networking` enthält. Siehe [Install Cozystack](https://cozystack.io/docs/v1.6/getting-started/install-cozystack/). Der Ablauf für v0.7.0 unten bleibt als historische Dokumentation erhalten.

Legen Sie ein Verzeichnis `manifests` an und darin eine Datei `cozystack-config.yaml`:

```
apiVersion: v1
kind: ConfigMap
metadata:
 name: cozystack
 namespace: cozy-system
data:
 bundle-name: "paas-full"
 ipv4-pod-cidr: "10.244.0.0/16"
 ipv4-pod-gateway: "10.244.0.1"
 ipv4-svc-cidr: "10.96.0.0/16"
 ipv4-join-cidr: "100.64.0.0/16"
```

Führen Sie nacheinander die folgenden Befehle aus:

1. `kubectl create ns cozy-system` legt in Kubernetes einen neuen Namespace `cozy-system` an. Namespaces dienen dazu, Ressourcen innerhalb eines Kubernetes-Clusters zu ordnen.
2. `kubectl apply -f cozystack-config.yaml` wendet die Konfiguration aus der angegebenen Datei an, also die Konfigurationsdaten namens `cozystack` im Namespace `cozy-system`. Die Datei legt die Netzwerke fest, die im Cluster verwendet werden.
3. `kubectl apply -f https://github.com/aenix-io/cozystack/raw/v0.7.0/manifests/cozystack-installer.yaml` wendet die Konfiguration von der angegebenen URL an. Die URL verweist hier auf eine Manifestdatei auf GitHub, mit der Cozystack installiert wird.

```
kubectl create ns cozy-system
kubectl apply -f cozystack-config.yaml
kubectl apply -f https://github.com/aenix-io/cozystack/raw/v0.7.0/manifests/cozystack-installer.yaml
```

Führen Sie Folgendes aus:

```
whatch -n1 kubectl get hr -A
```

Warten Sie nun, bis der Status `READY` in allen `NAMESPACE`s auf `True` steht.

![Abb. 26: Installation der Cozystack-Komponenten im Cluster](/img/blog/medium/installing-a-kubernetes-cluster-managed-by-cozystack-a-detailed-guide-by-gohost-and-/27.jpg)

Abb. 26. Installation der Komponenten im Cluster

Sobald das der Fall ist, geht es weiter.

## Storage konfigurieren

Führen Sie die folgenden Befehle aus:

```
alias linstor=’kubectl exec -n cozy-linstor deploy/linstor-controller — linstor’
linstor node list
```

Wir sollten folgende Ausgabe erhalten:

```
+-------------------------------------------------------+

| Node | NodeType  | Addresses                 | State  |

|=======================================================|

| srv1 | SATELLITE | 192.168.100.11:3367 (SSL) | Online |

| srv2 | SATELLITE | 192.168.100.12:3367 (SSL) | Online |

| srv3 | SATELLITE | 192.168.100.13:3367 (SSL) | Online |

+-------------------------------------------------------+
linstor physical-storage list
+--------------------------------------------+

| Size         | Rotational | Nodes          |

|============================================|

| 107374182400 | True       | srv3[/dev/nvme1n1,/dev/nvme0n1 ] |

|              |            | srv1[/dev/nvme1n1,/dev/nvme0n1] |

|              |            | srv2[/dev/nvme1n1,/dev/nvme0n1] |

+--------------------------------------------+
```

Legen Sie einen Storage-Pool an. Bei mir sind das die Laufwerke `/dev/nvme1n1` und `/dev/nvme0n1`, bei Ihnen können es andere sein:

```
linstor ps cdp zfs srv1 /dev/nvme1n1 /dev/nvme0n1 — pool-name data — storage-pool data
linstor ps cdp zfs srv2 /dev/nvme1n1 /dev/nvme0n1 - pool-name data - storage-pool data
linstor ps cdp zfs srv3 /dev/nvme1n1 /dev/nvme0n1 - pool-name data - storage-pool data
```

Geben Sie den Befehl ein:

```
linstor sp l
```

Sehen wir uns das Ergebnis an:

![Abb. 27: Liste der LINSTOR-Storage-Pools](/img/blog/medium/installing-a-kubernetes-cluster-managed-by-cozystack-a-detailed-guide-by-gohost-and-/28.png)

Abb. 27. Liste der Storage-Pools

Jetzt legen wir Storage Classes für persistenten Speicher an: Der darunterliegende Speicher ist bereits eingerichtet, aber Kubernetes muss noch erfahren, dass es darin Volumes anlegen darf. Dafür gibt es die Ressource StorageClass. Wir legen zwei Klassen an:

- `local` — für lokalen Speicher.
- `replicated` — für Daten, die repliziert werden müssen.

```
kubectl create -f- <

---
apiVersion: storage.k8s.io/v1
kind: StorageClass
metadata:
 name: local
 annotations:
   storageclass.kubernetes.io/is-default-class: "true"
provisioner: linstor.csi.linbit.com
parameters:
 linstor.csi.linbit.com/storagePool: "data"
 linstor.csi.linbit.com/layerList: "storage"
 linstor.csi.linbit.com/allowRemoteVolumeAccess: "false"
volumeBindingMode: WaitForFirstConsumer
allowVolumeExpansion: true
---
apiVersion: storage.k8s.io/v1
kind: StorageClass
metadata:
 name: replicated
provisioner: linstor.csi.linbit.com
parameters:
 linstor.csi.linbit.com/storagePool: "data"
 linstor.csi.linbit.com/autoPlace: "3"
 linstor.csi.linbit.com/layerList: "drbd storage"
 linstor.csi.linbit.com/allowRemoteVolumeAccess: "true"
 property.linstor.csi.linbit.com/DrbdOptions/auto-quorum: suspend-io
 property.linstor.csi.linbit.com/DrbdOptions/Resource/on-no-data-accessible: suspend-io
 property.linstor.csi.linbit.com/DrbdOptions/Resource/on-suspended-primary-outdated: force-secondary
 property.linstor.csi.linbit.com/DrbdOptions/Net/rr-conflict: retry-connect
volumeBindingMode: WaitForFirstConsumer
allowVolumeExpansion: true
EOT
```

Geben Sie den Befehl ein:

```
kubectl get storageclasses
```

Sehen wir uns das Ergebnis an:

![Abb. 28: Liste der Storage Classes](/img/blog/medium/installing-a-kubernetes-cluster-managed-by-cozystack-a-detailed-guide-by-gohost-and-/29.png)

Abb. 28. Liste der Storage Classes

## Netzwerkkonfiguration

Legen Sie einen Pool an, aus dem IP-Adressen aus dem zuvor angegebenen Subnetz vergeben werden (siehe Abb. 1). Hinweis: Wenn Sie einen anderen Adressraum haben (z. B. `192.168.100.200/192.168.100.250`), müssen Sie die Konfiguration anpassen, denn die Einstellungen werden hier direkt angewendet, ohne dass eine Datei entsteht. Sie können die Konfiguration aber auch in einer Datei speichern und das Manifest mit `kubectl apply -f path_to_file` anwenden.

```
kubectl create -f- <
---
apiVersion: metallb.io/v1beta1
kind: L2Advertisement
metadata:
 name: cozystack
 namespace: cozy-metallb
spec:
 ipAddressPools:
 - cozystack
---
apiVersion: metallb.io/v1beta1
kind: IPAddressPool
metadata:
 name: cozystack
 namespace: cozy-metallb
spec:
 addresses:
 - 192.168.100.200-192.168.100.250
 autoAssign: true
 avoidBuggyIPs: false
EOT
```

## Zugriff auf die Weboberfläche des Clusters einrichten

Holen Sie das Token:

```
kubectl get secret -n tenant-root tenant-root -o go-template=’{{ printf “%s\n” (index .data “token” | base64decode) }}’
```

Hinweis: Wenn Sie diesen Befehl auf dem Management-Host ausführen, erhalten Sie ein Token, mit dem Sie von genau diesem Management-Host aus auf die Weboberfläche von Cozystack zugreifen. Führen Sie dazu auf dem Management-Host folgenden Befehl aus:

```
kubectl port-forward -n cozy-dashboard svc/dashboard 8000:80
```

Öffnen Sie nun `http://localhost:8000` und geben Sie das zuvor erzeugte Token ein.

![Abb. 29: Anmeldefenster des Cozystack-Dashboards](/img/blog/medium/installing-a-kubernetes-cluster-managed-by-cozystack-a-detailed-guide-by-gohost-and-/30.png)

Abb. 29. Anmeldefenster

Klicken Sie auf „tenant-root“:

![Abb. 30: Auswahl von tenant-root im Cozystack-Dashboard](/img/blog/medium/installing-a-kubernetes-cluster-managed-by-cozystack-a-detailed-guide-by-gohost-and-/31.png)

Abb. 30. tenant-root auswählen

Klicken Sie auf „Upgrade“, um die Anwendung mit den gewünschten Parametern neu auszurollen:

![Abb. 31: Schaltfläche Upgrade für tenant-root](/img/blog/medium/installing-a-kubernetes-cluster-managed-by-cozystack-a-detailed-guide-by-gohost-and-/32.png)

Abb. 31. Aktualisierung von tenant-root starten

Wenn die Seite nicht sofort neu lädt, drücken Sie F5.

![Abb. 32: Einstellungsformular für tenant-root](/img/blog/medium/installing-a-kubernetes-cluster-managed-by-cozystack-a-detailed-guide-by-gohost-and-/33.png)

Abb. 32. Fenster zum Ändern von tenant-root

Tragen Sie Ihre Werte ein; wir geben im Feld host `kuber.gohost.kz` ein, stellen die Schieberegler von `false` auf `true` und klicken auf „DEPLOY“.

![Abb. 33: Komponenten aktivieren und Host für tenant-root setzen](/img/blog/medium/installing-a-kubernetes-cluster-managed-by-cozystack-a-detailed-guide-by-gohost-and-/34.png)

Abb. 33. Komponenten hinzufügen und tenant-root aktualisieren

Sie werden auf eine Seite mit den konfigurierten Werten weitergeleitet:

![Abb. 34: tenant-root nach der Aktualisierung](/img/blog/medium/installing-a-kubernetes-cluster-managed-by-cozystack-a-detailed-guide-by-gohost-and-/35.png)

Abb. 34. tenant-root ist aktualisiert

Geben Sie nun in der Konsole folgenden Befehl ein, um alle PersistentVolumeClaims (PVCs) im Namespace `tenant-root` des Clusters aufzulisten:

```
kubectl get pvc -n tenant-root
```

Sieht Ihre Ausgabe ähnlich aus wie meine, ist alles in Ordnung:

![Abb. 35: Liste der Persistent Volume Claims](/img/blog/medium/installing-a-kubernetes-cluster-managed-by-cozystack-a-detailed-guide-by-gohost-and-/36.png)

Abb. 35. Liste der PVCs

Zurück auf der Startseite der Weboberfläche sollten Sie etwa Folgendes sehen:

![Abb. 36: Startseite des Cozystack-Dashboards](/img/blog/medium/installing-a-kubernetes-cluster-managed-by-cozystack-a-detailed-guide-by-gohost-and-/37.png)

Abb. 36. Startseite von Cozystack

## Die Pods prüfen

Um die Pods zu prüfen, führen Sie den üblichen Befehl aus:

```
kubectl get pod -n tenant-root
```

Die Ausgabe sollte etwa so aussehen:

![Abb. 37: Pods im Namespace tenant-root](/img/blog/medium/installing-a-kubernetes-cluster-managed-by-cozystack-a-detailed-guide-by-gohost-and-/38.png)

Abb. 37. Alle Pods im Namespace `tenant-root`

Führen Sie nun folgenden Befehl aus:

```
kubectl get svc -n tenant-root root-ingress-controller
```

In der Ausgabe sollte die öffentliche IP-Adresse des Ingress Controllers erscheinen:

```
NAME                      TYPE           CLUSTER-IP     EXTERNAL-IP       PORT(S)                   AGE
root-ingress-controller   LoadBalancer   10.96.58.227   192.168.100.200   80:30149/TCP,443:32152/TCP   7d8h
```

## Monitoring

Nach der Installation der Plattform Cozystack steht ein vorkonfiguriertes Monitoring auf Basis von Grafana bereit. Eingerichtet haben wir es beim Upgrade von tenant-root (Abbildungen 27–31). Prüfen wir nun die Einstellungen des Monitorings.

Wählen Sie zunächst auf der Startseite die Kachel „monitoring“:

![Abb. 38: Kachel monitoring auf der Startseite des Cozystack-Dashboards](/img/blog/medium/installing-a-kubernetes-cluster-managed-by-cozystack-a-detailed-guide-by-gohost-and-/39.png)

Abb. 38. Zugang zum Monitoring

Klicken Sie auf die Schaltfläche „Upgrade“. Prüfen Sie im Feld host Ihre Werte (zum Beispiel `grafana.kuber.gohost.kz`). Die Zugangsdaten erhalten Sie, indem Sie `password` und `user` anzeigen lassen oder kopieren.

![Abb. 38: Zugangsdaten für Grafana abrufen](/img/blog/medium/installing-a-kubernetes-cluster-managed-by-cozystack-a-detailed-guide-by-gohost-and-/40.png)

Abb. 38. Anmeldedaten abrufen

Um auf die Weboberfläche zuzugreifen, ergänzen Sie auf dem Management-Host die Datei `/etc/hosts` um folgenden Eintrag.

```
192.168.100.200 gafana.kuber.gohost.kz
```

Öffnen Sie auf diesem Host einen Webbrowser und rufen Sie `grafana.kuber.gohost.kz` auf. Daraufhin öffnet sich die Oberfläche von Grafana.

![Abb. 39: Anmeldefenster von Grafana](/img/blog/medium/installing-a-kubernetes-cluster-managed-by-cozystack-a-detailed-guide-by-gohost-and-/41.png)

Abb. 39. Anmeldefenster des Monitoring-Systems

Mit diesen Schritten haben wir Folgendes erreicht:

1. Einen Cluster aus drei Nodes auf Basis von Talos Linux.
2. Storage mit LINSTOR, unter der Haube ZFS und DRBD.
3. Eine benutzerfreundliche Oberfläche.
4. Ein vorkonfiguriertes Monitoring.

Im nächsten Artikel dieser Reihe sehen wir uns Kubernetes in Kubernetes an, klären, wie Kubernetes as a Service in Cozystack funktioniert, und werfen einen Blick auf den Anwendungskatalog, aus dem sich Anwendungen mit wenigen Klicks ausrollen lassen. Wir weisen dem Cluster echte IP-Adressen zu und machen ihn aus dem öffentlichen Netz erreichbar.

Das war's — wir haben den Cozystack-Cluster erfolgreich installiert! Fortsetzung folgt …

## Weiterführende Links

- [Cozystack on Talos Linux, Andrei Kvapil, Talos Linux Install Fest’24](https://www.youtube.com/watch?v=s79VqXu-eG4)
- [DIY: Create Your Own Cloud with Kubernetes (Part 1)](https://blog.aenix.io/diy-create-your-own-cloud-with-kubernetes-part-1-7a692c37f0a8)
- [DIY: Create Your Own Cloud with Kubernetes (Part 2)](https://blog.aenix.io/diy-create-your-own-cloud-with-kubernetes-part-2-576a2894b187)
- [DIY: Create Your Own Cloud with Kubernetes (Part 3)](https://blog.aenix.io/diy-create-your-own-cloud-with-kubernetes-part-3-e1a43b56b52f)
- [Cozystack-Community](https://blog.aenix.io/diy-create-your-own-cloud-with-kubernetes-part-3-e1a43b56b52f)
- [Community-Meetings von Cozystack](https://calendar.google.com/calendar?cid=ZTQzZDIxZTVjOWI0NWE5NWYyOGM1ZDY0OWMyY2IxZTFmNDMzZTJlNjUzYjU2ZGJiZGE3NGNhMzA2ZjBkMGY2OEBncm91cC5jYWxlbmRhci5nb29nbGUuY29t) (Kalender)
- [Cozystack-Dokumentation](https://cozystack.io/docs/)

Von [Timur Tukaev](https://medium.com/@tym83) am [16. August 2024](https://medium.com/p/2b2d2e0ddbdb).

[Kanonischer Link](https://medium.com/@tym83/installing-a-kubernetes-cluster-managed-by-cozystack-a-detailed-guide-by-gohost-and-%C3%A6nix-2b2d2e0ddbdb)

Exportiert von [Medium](https://medium.com) am 11. Mai 2026.
