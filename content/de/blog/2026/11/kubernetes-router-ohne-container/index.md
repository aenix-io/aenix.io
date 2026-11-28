---
title: "Kubernetes als Linux-Kernel, Teil 3: ein Router auf Kubernetes ohne einen einzigen Container"
seo_title: "Ein Kubernetes-Router ohne Container im Praxistest"
description: "kuberoot router steuert Routing, NAT, Firewall, DHCP und BGP über die Kubernetes-API, ohne Container. Wir haben ihn mit VyOS, OpenWrt und Debian verglichen."
slug: "kubernetes-router-ohne-container"
date: "2026-11-28"
cover_image: "/img/blog/covers/de/kubernetes-router-ohne-container.jpg"
author: "Timur Tukaev"
type: "article"
topics: ["Kubernetes", "Open Source", "Networking", "Edge", "Platform Engineering"]
language: "de"
hreflang_en: "/blog/2026/11/kubernetes-router-without-containers/"
related_posts: ["/de/blog/2026/10/kubernetes-als-linux-kernel-distributionen-paketmanager/", "/de/blog/2026/10/kubepkg-paketmanager-kubernetes-debian/"]
direct_answer: "**kuberoot router ist eine Kubernetes-Distribution, die eine Maschine zum Netzwerk-Router macht, ohne einen einzigen Container auszuführen.** Auf dem Node laufen fünf Dienste: kine auf SQLite, der Kubernetes API Server, ein abgespeckter Controller Manager, die Node-API und kuberoot-router. Letzterer setzt neun Custom Resources (Interfaces, Routen, NAT, Firewall-Zonen und -Regeln, DHCP, BGP und einen Commit-Confirm-Schutz) über netlink, nftables, dnsmasq und BIRD direkt im Linux-Kernel um. Wir haben ihn in dreizehn Fehlerszenarien mit VyOS, OpenWrt und einem von Hand konfigurierten Debian-Router verglichen. Die Tests haben dreizehn Fehler in kuberoot router aufgedeckt, die alle behoben und erneut gemessen wurden. Er eignet sich für entfernte Router, deren Besuch vor Ort teuer ist, und für BGP-Edges mit großen Firewalls auf kleiner Hardware."
quick_facts:
  - label: "Projekt"
    value: "kuberoot, Apache 2.0, github.com/kuberoot-dev/kuberoot"
  - label: "Auf dem Node"
    value: "kine, kube-apiserver, ein abgespeckter Controller Manager, die Node-API und kuberoot-router; kein kubelet, kein containerd, kein Scheduler"
  - label: "Konfiguration"
    value: "Neun Ressourcen in router.kuberoot.dev: Interface, Route, NATRule, FirewallZone, FirewallRule, DHCPServer, BGPRouter, BGPPeer, Safeguard"
  - label: "Schutz vor Aussperrung"
    value: "Eine Änderung, die den Management-Zugang kappt, nimmt sich bei einer Bestätigungsfrist von 60 Sekunden nach etwa 63 Sekunden selbst zurück, ohne Neustart"
  - label: "Verglichen mit"
    value: "VyOS, OpenWrt 24.10 und Debian 12 mit FRR, nftables und dnsmasq auf demselben QEMU-Testaufbau"
  - label: "Gefundene und behobene Fehler"
    value: "Dreizehn, jeder mit dem Szenario erneut gemessen, das ihn aufgedeckt hat"
---

Im [ersten Teil dieser Serie](/de/blog/2026/10/kubernetes-als-linux-kernel-distributionen-paketmanager/) habe ich die Router-Distribution von kuberoot den deutlichsten Beweis dafür genannt, dass die Kubernetes-API einfach ein bequemes Bedienfeld für eine Maschine sein kann, und versprochen, über jede Distribution einzeln zu schreiben. Der Router bietet sich als Anfang auch aus einem anderen Grund an: Von allen Distributionen hat er sich am weitesten von dem Kubernetes entfernt, das wir kennen. Er führt keine Container aus, hat weder Scheduler noch kubelet und ist trotzdem ein vollwertiger Kubernetes API Server, mit RBAC, Audit, Watch und allem, was kubectl und GitOps-Werkzeuge damit anfangen können. In diesem Beitrag erkläre ich, wie er aufgebaut ist und was er kann, wie wir ihn mit Szenarien getestet haben, die aus Post-Mortems echter Ausfälle stammen, wie er im Vergleich zu VyOS, OpenWrt und einem schlichten Linux mit FRR und nftables abschneidet und wo ein solcher Router nach diesen Tests sinnvoll ist und wo Sie mit etwas anderem besser fahren.

{{< figure src="01-nothing-inside.gif" alt="Auf einem Router-Node laufen fünf Dienste und keine Container" caption="Auf einem Router-Node laufen fünf Dienste und kein einziger Container" >}}

## Wozu ein Router die Kubernetes-API braucht

Die Konfiguration eines gewöhnlichen Routers lebt in einer eigenen Welt. Jeder Hersteller hat seine eigene Befehlssprache, sein eigenes Format für Konfigurationsdateien und seinen eigenen Weg, sie zu ändern, und meistens besteht dieser Weg aus einem Menschen, der sich per SSH anmeldet und Befehle von Hand eintippt. Sobald es viele Geräte gibt, baut man Automatisierung um diese Welt herum: Skripte, die Befehlsausgaben parsen, Ansible, Konfigurationsvorlagen und bei den großen Herstellern NETCONF und gNMI mit YANG-Datenmodellen, einer Kandidatenkonfiguration und einem Commit, der sich selbst zurücknimmt, wenn er nicht bestätigt wird. In gut zwanzig Jahren haben Netzwerkingenieure Stück für Stück fast alles zusammengetragen, was man braucht, um den Zustand einer großen Geräteflotte zu verwalten: ein typisiertes Konfigurationsmodell, Validierung, bevor eine Änderung angewendet wird, Zugriffskontrolle, ein Änderungsprotokoll, Abonnements auf den Betriebszustand, Konfigurationssperren gegen gleichzeitige Änderungen durch zwei Personen und Rollback.

Lesen Sie diese Liste noch einmal: Der Kubernetes API Server gibt fast all das jeder Ressource mit, kostenlos und in derselben Form. Jede Ressource hat ein Schema, und der Server weist ungültige Werte zurück, bevor sie irgendwo ankommen. Berechtigungen lassen sich pro Ressourcentyp und pro Verb vergeben, sodass etwa der Bereitschaftsdienst Routen lesen, aber nicht ändern darf. Jede Änderung läuft durch das Audit-Log. Jede Ressource lässt sich beobachten, und von einer Änderung erfährt man in dem Moment, in dem sie geschieht. Zwei gleichzeitige Änderungen desselben Objekts überschreiben einander nicht stillschweigend, denn jedes Objekt trägt eine resourceVersion, und der Server weist ein Update zurück, das auf einer veralteten beruht. Und kubectl diff, Server-Side Apply, Argo CD und Flux arbeiten mit diesen Ressourcen genau so wie mit einem Deployment, weil es für sie gewöhnliche Ressourcen sind.

Das ist schon die ganze Idee. Man nimmt den Teil von Kubernetes, der den Soll-Zustand speichert, validiert und verteilt, also den API Server und seinen Datenspeicher, und wirft alles weg, was mit Containern zu tun hat. Die Router-Konfiguration wird zu einer Menge von Kubernetes-Ressourcen, und ein Programm auf dem Node bringt den Netzwerkstack des Kernels mit ihnen in Einklang.

## Was auf dem Node läuft

Ein Router-Node bootet aus demselben Image und über dasselbe kinit wie jede andere kuberoot-Distribution, aber sein Profil startet nur fünf Dienste: kine, das dem API Server die etcd-API bereitstellt und die Daten in SQLite ablegt; den Kubernetes API Server; den Controller Manager; die Node-API; und kuberoot-router, das Programm, das den Node zum Router macht. Der Controller Manager ist auf die sechs Controller reduziert, die jeder API Server braucht: den Garbage Collector, den Namespace-Controller, zwei Controller für Service Accounts und ihre Tokens, den Root CA Publisher, der das Root-CA-Zertifikat des Clusters in jedem Namespace als ConfigMap ablegt, und den Controller für die Aggregation von ClusterRoles. In diesem Profil laufen weder kubelet noch containerd, kube-proxy oder der Scheduler. Die Binärdateien liegen zwar weiterhin im Image, weil das Root-Dateisystem jeder Distribution vom selben Skript gebaut wird, aber auf einem Router-Node startet sie nichts, und in der Liste der Dienste tauchen sie nicht auf.

{{< figure src="t-R-B1-kuberoot-status.gif" alt="Dienste und Speicherverbrauch des Nodes nach dem Booten" caption="Dienste und Speicherverbrauch des Nodes nach dem Booten" >}}

Zum gemeinsamen Image fügt das Profil zwei Alpine-Pakete hinzu: dnsmasq, das Adressen per DHCP vergibt und DNS zwischenspeichert, und bird2, das Routen über BGP austauscht. kuberoot-router startet beide Programme selbst und schreibt auch ihre Konfiguration selbst. Stürzt eines davon immer wieder ab, startet kuberoot-router es mit wachsendem Abstand neu und meldet im Status der zugehörigen Ressource, dass das Programm in einer Absturzschleife steckt.

kuberoot-router beobachtet neun Arten von Ressourcen und setzt sie direkt im Kernel um. Netzwerkschnittstellen, ihre Adressen, MTU, VLANs und Routen konfiguriert es über netlink, dieselbe Kernel-Schnittstelle, die auch das Werkzeug `ip` nutzt. Die Routen, die es anlegt, kennzeichnet es mit einer eigenen Routing-Protokoll-ID, 107 (das Feld `proto` in der Ausgabe von `ip route`), und entfernt nur Routen mit dieser ID, sodass es nie eine Route anfasst, die ein anderes Programm angelegt oder der DHCP-Client auf dem Uplink installiert hat. Firewall und Adressumsetzung hält es in einer einzigen nftables-Tabelle und ersetzt diese Tabelle als Ganzes in einer einzigen atomaren nftables-Transaktion. Der Kernel übernimmt den gesamten Batch auf einmal; einen Zwischenzustand, in dem die alten Regeln schon weg und die neuen noch nicht da sind, gibt es also nie. Eine Änderung wendet es an, sobald sein Watch sie meldet, und gleicht den Kernel zusätzlich alle zehn Sekunden ab, falls jemand an ihm vorbei etwas verändert hat.

## Neun Ressourcen

Die gesamte Router-Konfiguration wird durch Ressourcen der Gruppe `router.kuberoot.dev` beschrieben.

| Ressource | Was sie konfiguriert |
|---|---|
| Interface | Adressen und MTU einer Schnittstelle oder ein VLAN auf einer übergeordneten Schnittstelle |
| Route | eine statische Route |
| NATRule | Source-NAT (Masquerading) auf einer ausgehenden Schnittstelle oder Port-Weiterleitung (DNAT) an einen Host hinter dem Router |
| FirewallZone | eine Firewall-Zone: welche Schnittstellen zu ihr gehören, was sie auf dem Router selbst erreichen darf und in welche Zonen sie weiterleiten darf |
| FirewallRule | eine Regel, die Datenverkehr vor den Zonenrichtlinien annimmt oder verwirft |
| DHCPServer | Adressvergabe auf einer Schnittstelle und ein DNS-Cache für dieses Netz |
| BGPRouter | die AS-Nummer des Routers und die Präfixe, die er selbst ankündigt |
| BGPPeer | eine BGP-Sitzung mit einem Nachbarn |
| Safeguard | Commit-Confirm: ein Bestätigungsfenster für Änderungen, siehe unten |

Ein Heim-Gateway mit dem Uplink an `eth0` und dem Heimnetz an `eth1` kommt mit fünf Ressourcen aus.

```yaml
apiVersion: router.kuberoot.dev/v1alpha1
kind: Interface
metadata: {name: lan}
spec: {link: eth1, addresses: [192.168.10.1/24]}
---
apiVersion: router.kuberoot.dev/v1alpha1
kind: NATRule
metadata: {name: out}
spec: {masquerade: {outLink: eth0, sources: [192.168.10.0/24]}}
---
apiVersion: router.kuberoot.dev/v1alpha1
kind: DHCPServer
metadata: {name: lan}
spec: {link: eth1, rangeStart: 192.168.10.100, rangeEnd: 192.168.10.199}
---
apiVersion: router.kuberoot.dev/v1alpha1
kind: FirewallZone
metadata: {name: wan}
spec: {links: [eth0], input: Drop, management: true}
---
apiVersion: router.kuberoot.dev/v1alpha1
kind: FirewallZone
metadata: {name: lan}
spec: {links: [eth1], input: Accept, forwardTo: [wan]}
```

Für `eth0` braucht es hier keine eigene Ressource: Hat eine Netzwerkschnittstelle keine Interface-Ressource, lässt der Router sie in Ruhe, und der DHCP-Client des Nodes behält die Adresse, die er vom Provider bekommen hat.

{{< figure src="02-home-gateway.gif" alt="kubectl apply mit fünf Ressourcen: Der Client erhält per DHCP eine Adresse und gelangt über NAT nach außen" caption="kubectl apply mit fünf Ressourcen: Der Client erhält per DHCP eine Adresse und gelangt über NAT ins Internet" >}}

Jede Ressource meldet in ihrem Status, ob der Node sie angewendet hat, und wenn nicht, warum. Schnittstellen zeigen ihren Zustand und ihre MAC-Adresse, ein DHCP-Server die vergebenen Adressen, ein BGP-Peer den Zustand der Sitzung und die Zahl der empfangenen Routen. Widersprechen sich zwei Ressourcen, beanspruchen etwa zwei Interface-Objekte dieselbe Schnittstelle, gewinnt dasjenige, das in der Sortierung nach Namen zuerst kommt, und der Status des anderen erklärt, warum es nicht angewendet wurde. Der Rest der Konfiguration arbeitet weiter: Ein einzelner Fehler legt nicht den ganzen Router lahm.

{{< figure src="03-status.gif" alt="Eine Ressource, die der Node nicht anwenden kann, erklärt in ihrem Status, warum" caption="Eine Ressource, die der Node nicht anwenden kann, erklärt in ihrem Status, warum" >}}

## Schutz vor den eigenen Fehlern

Der unangenehmste Fehler, den der Administrator eines entfernten Routers machen kann, ist eine Änderung, nach der der Router nicht mehr erreichbar ist. Die Geschichte der Netzwerke ist voll davon. Der bekannteste Fall ereignete sich im Oktober 2021 bei Facebook, als eine Änderung an der Backbone-Konfiguration nicht nur die Nutzer abschnitt, sondern auch [die Werkzeuge, die die Ingenieure zur Reparatur des Netzes brauchten](https://engineering.fb.com/2021/10/05/networking-traffic/outage-details/). kuberoot router hat zwei Schutzmechanismen gegen diese Art von Fehler.

Der erste ist einfach. In einer Firewall-Zone mit `management: true` sind die Ports des API Servers und der Node-API, 6443 und 50000, auf den Schnittstellen der Zone vor jeder Benutzerregel freigegeben, ganz gleich, was diese Regeln besagen. Auch eine Port-Weiterleitung auf diesen Schnittstellen kann die beiden Ports nicht an sich ziehen: Die DNAT-Stufe nimmt sie aus, bevor irgendeine Weiterleitungsregel ausgewertet wird.

Der zweite Mechanismus geht weiter. Er heißt Safeguard, und die Idee dahinter ist alt und bewährt: Juniper-Router kennen sie seit Langem als [commit confirmed](https://www.juniper.net/documentation/us/en/software/junos/cli-reference/topics/ref/command/commit.html), und auch VyOS, Cisco und Cumulus haben sie. Eine Konfigurationsänderung gilt zunächst nur auf Probe. Der Router wendet sie an und wartet auf eine Bestätigung, und trifft innerhalb der vorgesehenen Frist, standardmäßig zwei Minuten, keine ein, kehrt er von selbst zur letzten bestätigten Konfiguration zurück. Eine Änderung, die den Administrator aussperrt, lässt sich nicht bestätigen und macht sich deshalb selbst rückgängig.

Unsere Umsetzung unterscheidet sich in zwei Punkten. Erstens wird die zu bestätigende Revision über die gesamte Router-Konfiguration auf einmal berechnet, über alle acht Arten von Konfigurationsressourcen hinweg: Sie besteht aus den ersten zwölf Zeichen eines SHA-256-Hashes ihrer Specs. Auf Probe gestellt wird also nicht ein einzelner Befehl oder eine einzelne Ressource, sondern der gesamte Zustand des Routers: Schnittstellen zusammen mit Routen, Adressumsetzung, Firewall, DHCP und BGP. Eine Revision wird namentlich bestätigt, indem man ihren Hash in `spec.confirm` schreibt, sodass die Bestätigung einer Revision nicht versehentlich die nächste mitbestätigen kann. Zweitens liegt die letzte bestätigte Konfiguration auf der Festplatte des Nodes, sodass ein Rollback sowohl einen Neustart des Controllers als auch einen Reboot übersteht.

{{< figure src="05-safeguard.gif" alt="Eine Änderung kappt den Zugang, die Bestätigung bleibt aus, und eine Minute später stellt der Router die bestätigte Konfiguration wieder her" caption="Eine Änderung kappt den Zugang, die Bestätigung bleibt aus, und eine Minute später stellt der Router die bestätigte Konfiguration wieder her" >}}

## Wie wir getestet haben

Funktionstabellen sagen über einen Router wenig aus: Fast jeder Router hakt die meisten Punkte ab, und bei fast jedem versagt irgendeine Funktion, sobald sich das Netz nicht mehr so verhält, wie die Dokumentation es erwartet. Deshalb haben wir die Testszenarien stattdessen aus Post-Mortems echter Ausfälle abgeleitet: eine Änderung, nach der das Gerät nicht mehr erreichbar ist; ein Upgrade, das mitten im Schreiben durch einen Stromausfall unterbrochen wird; ein zweiter Administrator, der gleichzeitig mit dem ersten dieselbe Konfiguration bearbeitet; ein BGP-Nachbar, der stillschweigend keinen Verkehr mehr weiterleitet, die Sitzung aber nicht schließt; eine überlaufende NAT-Verbindungstabelle; eine Festplatte, die vollläuft oder Fehler zurückgibt. So kamen dreizehn Szenarien zusammen, und jedes davon haben wir auf vier Systemen durchgespielt: router, VyOS, OpenWrt und Debian 12 mit FRR, nftables und dnsmasq, von Hand so konfiguriert, wie es ein sorgfältiger Administrator tun würde.

Alle vier Systeme liefen unter identischen Bedingungen, in einem Testaufbau, der in einem einzigen Kubernetes-Pod mit Zugriff auf KVM lebt. Jeder Router läuft in QEMU mit zwei Kernen und zwei Gigabyte Arbeitsspeicher, die Netzsegmente zwischen den virtuellen Maschinen sind QEMU-Sockets, und hinter dem Router sitzt eine eigene Gateway-VM, die auf Befehl Verzögerung, Verlust oder eine Bandbreitenbegrenzung einfügt oder den gesamten Verkehr stillschweigend verwirft. Client, Router, Gateway und Empfänger sind für alle vier Systeme gleich verkabelt, und der Management-Zugang zum Router läuft über eine separate Out-of-Band-Schnittstelle und kreuzt nie den gemessenen Pfad.

{{< figure src="t-R-B1-fabric-netem.gif" alt="Das Gateway fügt auf dem Rückweg 50 ms Verzögerung ein: durchschnittliche RTT 0,9, dann 51,0, dann 1,0 ms" caption="Das Gateway fügt auf dem Rückweg 50 ms Verzögerung ein: durchschnittliche RTT 0,9 → 51,0 → 1,0 ms" >}}

Ein solcher Testaufbau hat eine Einschränkung, die man vorab nennen sollte: Ein Netz aus QEMU-Sockets läuft im User Space, daher zeigt der Durchsatz darauf keine Leitungsrate, sondern nur, wie sich die Router unter identischen Bedingungen zueinander verhalten. Alles andere, von den Rollback-Zeiten bis zur Zahl verlorener Einträge, ist sauber gemessen, weil es von den Systemen selbst abhängt und nicht vom Netz um sie herum.

Wir haben uns an drei Regeln gehalten. Ein Ergebnis ist eine aufgezeichnete Messung, deren Rohdaten daneben abgelegt sind; ein Skript, das bloß existiert, beweist nichts. Durchläufe, die der Testaufbau oder ein Fehler in einem Skript verdorben hat, werden nie gelöscht; sie bleiben gekennzeichnet in den Aufzeichnungen und werden nicht gewertet. Und jedes Versagen von kuberoot router ist ein Befund, der im Code behoben und erneut gemessen wird, nicht wegerklärt.

| Szenario | Was es prüft |
|---|---|
| R-B1, R-B2 | Booten, Speicherverbrauch, Schreibzugriffe im Leerlauf, Durchsatz |
| R1 | eine Änderung, die den Administrator aussperrt |
| R2 | ein Upgrade, das sich nicht vollständig herunterladen lässt, nicht bootet, abstürzt oder keinen Verkehr mehr weiterleitet, und ein Stromausfall mitten im Upgrade |
| R3 | veraltete Konfiguration, zwei gleichzeitig arbeitende Administratoren und manuelle Kernel-Änderungen am System vorbei |
| R4 | DHCP unter Last, ob vergebene Adressen einen Neustart überstehen, Isolation des Gäste-VLANs |
| R5 | NAT mit Hunderttausenden Verbindungen und ein SYN-Flood |
| R6 | eine Firewall mit 100 bis 20.000 Regeln |
| R7 | eine vollständige BGP-Tabelle bei wenig Arbeitsspeicher |
| R8 | BGP-Exportrichtlinie und Max-Prefix-Limits |
| R9 | stille Ausfälle von BGP-Nachbarn, Verbindungsabbrüche und ein Neustart des BGP-Programms |
| R10 | die Management-API unter Last, RBAC und gefährliche Änderungen |
| R11 | Schreibzugriffe auf die Festplatte; eine langsame, volle und fehlerhafte Festplatte |

## Grundwerte

Ein Router-Node im Leerlauf belegt etwa 800 MB Arbeitsspeicher, den größten Teil davon hält der Kubernetes API Server. Das ist deutlich mehr als bei OpenWrt, das mit etwa hundert Megabyte auskommt, und mehr als bei Debian, das nach dem Booten etwa 250 MB belegt; kuberoot router liegt ungefähr gleichauf mit VyOS. Ein Upgrade-Image ist 360 MB groß, gegenüber 649 MB für das VyOS-ISO und 126 MB für das OpenWrt-Image.

{{< figure src="t-R-B1-kuberoot-memory.gif" alt="Speicherverbrauch und Dienste eines Router-Nodes im Leerlauf" caption="Speicherverbrauch und Dienste eines Router-Nodes im Leerlauf" >}}

Wie die anderen drei Systeme überlässt kuberoot router die Paketweiterleitung dem Linux-Kernel, daher ist ihr Durchsatz nahezu gleich: Bei Routing und NAT erreichen router, VyOS und Debian höchstens etwa 300–340 Mbit/s, OpenWrt 270. Der direkte Pfad vom Client zum Empfänger ohne Router liefert auf demselben Testaufbau etwa ein Gigabit, die Obergrenze von rund 300 Mbit/s ist also die Grenze der Router-VM mit ihren zwei Kernen, nicht des Testnetzes.

{{< figure src="chart-R-B2-products.png" alt="Relativer Durchsatz im selben QEMU-Netz" caption="Relativer Durchsatz im selben QEMU-Netz" >}}

## Eine Änderung, die den Administrator aussperrt

Für einen entfernten Router ist das das wichtigste Szenario. Wir haben vier Arten ausprobiert, sich selbst auszusperren: die Adresse der Management-Schnittstelle ändern, die Rückroute löschen, die Schnittstelle in ein anderes VLAN verschieben und den Zugang mit einer Firewall-Regel blockieren. Die Bestätigungsfrist betrug 60 Sekunden, niemand schickte eine Bestätigung, und wir haben gemessen, wie lange es dauerte, bis das Management wieder erreichbar war.

{{< figure src="chart-R1-lockout-recovery.png" alt="Wie lange das Management nach einer unbestätigten Änderung nicht erreichbar war" caption="Wie lange das Management nach einer unbestätigten Änderung nicht erreichbar war" >}}

In allen vier Fällen stellte kuberoot router den Zugang nach 62,8–65,1 Sekunden wieder her, drei bis fünf Sekunden nach Ablauf der Frist, und ohne Reboot. Dann haben wir es erschwert: den Node mitten im Bestätigungsfenster neu gestartet und den Router-Controller beendet. Der Rollback kam trotzdem pünktlich, denn die Frist wird aus dem auf der Festplatte gespeicherten Zeitstempel der Änderung berechnet, nicht aus dem Startzeitpunkt des Prozesses, und ein Reboot verschafft einer unbestätigten Änderung keine zweite Chance.

{{< figure src="t-R1-kuberoot-vlan-tagged-reboot.gif" alt="Die Management-Schnittstelle wird in ein anderes VLAN verschoben, mitten im Bestätigungsfenster folgt ein Reboot" caption="Die Management-Schnittstelle wird in ein anderes VLAN verschoben, mitten im Bestätigungsfenster folgt ein Reboot" >}}

Auch VyOS kann unbestätigte Änderungen zurücknehmen, mit `commit-confirm`, tut das aber per Reboot: Der Zugang kam nach 122–128 Sekunden zurück, und während der ganzen Zeit leitete der Router keinen Verkehr weiter. OpenWrt nimmt Änderungen über rpcd ohne Reboot zurück, allerdings verschieden schnell: Eine Route und eine Firewall-Regel waren nach 67 Sekunden wieder da, eine Adresse und ein VLAN nach 175–181. Debian hat keinen solchen Mechanismus, und nach jeder der vier Änderungen mussten wir den Zugang von Hand über die Konsole wiederherstellen.

{{< figure src="t-R1-vyos-lockouts.gif" alt="VyOS: Rollback per Reboot" caption="VyOS: Rollback per Reboot" >}}

Außerdem haben wir eine veraltete Bestätigung geprüft. Der Administrator bestätigte Revision N, wendete dann N+1 an, und dieselbe Automatisierung schickte die Bestätigung für N noch einmal. kuberoot router hat sie nicht als Bestätigung der neuen Revision gewertet und N+1 zurückgenommen, wie es sein soll.

{{< figure src="t-R1-kuberoot-stale-confirm-v2.gif" alt="Die Bestätigung einer alten Revision bestätigt nicht die neue" caption="Die Bestätigung einer alten Revision bestätigt nicht die neue" >}}

## Ein fehlgeschlagenes Upgrade

Upgrades funktionieren in der Router-Distribution genauso wie in jeder anderen kuberoot-Distribution: Es gibt zwei Systemslots, die neue Version wird in den inaktiven Slot geschrieben, per Probestart gebootet und erst dann zum Standard-Slot, wenn sie innerhalb der Probezeit ihre Health Checks besteht. Wir haben geprüft, was passiert, wenn das Upgrade nicht vollständig heruntergeladen wird, abgeschnitten ankommt, beim Start abstürzt, zwar bootet, aber keinen Verkehr mehr weiterleitet, oder wenn mitten im Schreiben der Strom ausfällt.

Ein unvollständiges oder abgeschnittenes Upgrade-Paket wurde mit einem Fehler abgewiesen, und der laufende Slot blieb unberührt. Eine Version, die beim Start abstürzte, wurde nach fünf Abstürzen als fehlerhaft eingestuft, und der Node kehrte nach 210 Sekunden von selbst zum vorherigen Slot zurück. Dreißig Stromausfälle, während der neue Slot geschrieben wurde und während der Bootloader umschaltete, endeten in dreißig Wiederherstellungen, ohne manuellen Eingriff und ohne Verlust bestätigter Konfiguration: Die API war im Median nach 17,4 Sekunden wieder da, die Weiterleitung im Median nach 67,5 Sekunden (im ungünstigsten Fall nach 103 Sekunden).

{{< figure src="chart-R2-powercut-recovery.png" alt="Wiederherstellungszeit nach 30 Stromausfällen mitten im Upgrade" caption="Wiederherstellungszeit nach 30 Stromausfällen mitten im Upgrade" >}}

Die Version, die bootete, aber keinen Verkehr mehr weiterleitete, brachte dagegen den ersten ernsten Fehler in kuberoot router ans Licht. Während der Probezeit prüfte der Node nur seinen eigenen Zustand: Der API Server antwortet, die Dienste laufen. Nach 86 Sekunden erklärte er diese Version für gut, während ein externer Client jedes einzelne Paket verlor.

{{< figure src="t-R2-kuberoot-before-forwarding-fix.gif" alt="Vor der Korrektur: Eine Version, die nicht weiterleitet, wird für gut erklärt, während der Client 100 % Verlust sieht" caption="Vor der Korrektur: Eine Version, die nicht weiterleitet, wird für gut erklärt, während der Client 100 % Verlust sieht" >}}

Die Korrektur ergänzte die Prüfungen der Probezeit um externe Weiterleitungstests: In Safeguard lassen sich Adressen angeben, die über den Router erreichbar sein müssen. Dieselbe fehlerhafte Version wurde auf dem korrigierten Image abgelehnt, und der Node blieb auf der vorherigen.

{{< figure src="t-R2-kuberoot-after-forwarding-fix.gif" alt="Nach der Korrektur: Eine Version, die nicht weiterleitet, wird abgelehnt" caption="Nach der Korrektur: Eine Version, die nicht weiterleitet, wird abgelehnt" >}}

Die anderen Systeme schnitten in diesem Szenario schlechter ab. VyOS wies das unvollständige und das abgeschnittene Image zurück, doch ein einziger Stromausfall beim Schreiben des neuen Images machte das halb geschriebene Image zum Standard-Booteintrag, und der nächste Boot endete in einer initramfs-Shell. Wir mussten das von Hand über die serielle Konsole reparieren. OpenWrt prüft ein Image mit `sysupgrade -T`, und diese Prüfung ließ sowohl das unvollständige als auch das abgeschnittene Image durch. Ein Stromausfall während des Flashens setzte den Router auf Werkseinstellungen zurück, sodass er ganz ohne Management-Zugang dastand.

{{< figure src="t-R2-openwrt-cut-during-write4.gif" alt="OpenWrt: Nach einem Stromausfall während des Flashens kehrte der Router zu den Werkseinstellungen zurück" caption="OpenWrt: Nach einem Stromausfall während des Flashens kehrte der Router zu den Werkseinstellungen zurück" >}}

## Konkurrierende Änderungen und Eingriffe am System vorbei

Wenn zwei Personen eine Konfiguration bearbeiten, braucht es Schutz davor, dass die zweite die Arbeit der ersten stillschweigend überschreibt. In kuberoot router liefert diesen Schutz Kubernetes selbst: Der Server weist ein Update mit veralteter resourceVersion mit 409 Conflict zurück. Wendet ein GitOps-Werkzeug immer wieder eine Revision an, die Safeguard bereits zurückgenommen hat, stellt router sie nicht erneut auf Probe und sperrt den Administrator nicht alle neunzig Sekunden aus. Und eine Firewall-Regel, die jemand an kuberoot-router vorbei aus dem Kernel gelöscht hatte, war in unserem Durchlauf nach 1,4 Sekunden wieder da; der Controller prüft den Kernel alle zehn Sekunden erneut.

{{< figure src="t-R3-kuberoot-rule-drift.gif" alt="Eine aus dem Kernel gelöschte Regel ist nach 1,4 Sekunden wieder da" caption="Eine aus dem Kernel gelöschte Regel ist nach 1,4 Sekunden wieder da" >}}

Die anderen Systeme schneiden hier schlechter ab. VyOS stellte eine aus dem Kernel gelöschte Regel innerhalb des Beobachtungsfensters von 40 Sekunden nicht wieder her. Von zwei gleichzeitigen Konfigurationssitzungen meldet die unterlegene "locked", endet aber mit Exit-Code 0, sodass ein Skript nie erfährt, dass seine Änderung nicht angewendet wurde. Und wenn eine Automatisierung immer wieder eine Änderung anwendet, die den Zugang kappt, wendet VyOS sie jedes Mal an, wartet und startet neu, in einer Endlosschleife. Bearbeiten zwei Personen die Konfiguration gleichzeitig, behält OpenWrt die zuletzt geschriebene Änderung und sagt dem ersten Administrator nichts; eine wiederholte Aussperrung nimmt es alle 66–70 Sekunden zurück, ebenfalls in einer Endlosschleife. Debian bemerkt Änderungen am System vorbei überhaupt nicht.

{{< figure src="t-R3-vyos-run2.gif" alt="VyOS: Wird eine Änderung wiederholt, die den Zugang kappt, startet der Router wieder und wieder neu" caption="VyOS: Wird eine Änderung wiederholt, die den Zugang kappt, startet der Router wieder und wieder neu" >}}

## DHCP

Für dieses Szenario haben wir ein Büro mit zwei internen Netzen hinter einem Router nachgebildet: ein Arbeitsnetz für die Mitarbeitenden und ein Gästenetz für Besucher, getrennt durch ein VLAN-Tag. Gäste sollen ins Internet kommen, die Arbeitsrechner aber nie zu sehen bekommen.

kuberoot router vergibt Adressen über dnsmasq, und bei einer Last von 100 Anfragen pro Sekunde erhielten 99 % der Clients innerhalb von 10 Millisekunden eine Adresse. VyOS war mit 2 Millisekunden noch schneller, während OpenWrt und Debian mit 18 und 23 Sekunden weit zurücklagen. Nach einem Reboot kannte kuberoot router noch alle 100 Leases, und jeder Client erhielt seine vorherige Adresse; OpenWrt hält seine Lease-Datenbank im RAM und verlor nach einem Reboot sämtliche Leases. Das Gästenetz war isoliert: Keines von 20 Paketen aus dem Gästenetz erreichte das Arbeitsnetz, und kein einziger ungetaggter Gäste-Frame tauchte im Arbeitsnetz auf.

{{< figure src="t-R4-kuberoot-guest-vlan.gif" alt="DHCP unter Last und Isolation des Gäste-VLANs" caption="DHCP unter Last und Isolation des Gäste-VLANs" >}}

Eine Schwachstelle zeigte sich, als Clients ihre Leases freigaben (DHCP Release) und sofort wieder Adressen anforderten, wie es passiert, wenn ein Raum voller Laptops gleichzeitig neu startet. Zwanzig solche Clients bekamen ihre Adressen erst nach 19,9 Sekunden, bei einer Schwelle von 10 Sekunden, und erhielten unterwegs 22 Ablehnungen. Schuld war die Konflikterkennung von dnsmasq: Bevor es eine Adresse anbietet, pingt es sie an, um sicherzugehen, dass niemand sie bereits nutzt. Wir fanden noch einen zweiten Fehler: Zwei Clients mit unterschiedlichen MAC-Adressen, aber derselben DHCP-Client-Kennung erhielten von dnsmasq dieselbe Adresse. kuberoot router startet dnsmasq jetzt mit abgeschalteter Ping-Prüfung und unterscheidet Clients anhand der MAC-Adresse, ohne die Client-Kennung zu beachten. Dieselben zwanzig Clients bekamen ihre Adressen nun in 0,076 Sekunden ohne eine einzige Ablehnung, und die beiden Clients mit gemeinsamer Kennung erhielten unterschiedliche Adressen. Der Preis dafür: Ein Client, der seine MAC-Adresse ändert, bekommt eine neue Adresse statt seiner alten.

{{< figure src="t-R4-kuberoot-release-field20.gif" alt="Zwanzig Clients geben ihre Adressen zurück und erhalten sie sofort wieder; zwei Clients mit gemeinsamer Kennung erhalten unterschiedliche Adressen" caption="Zwanzig Clients geben ihre Adressen zurück und erhalten sie sofort wieder; zwei Clients mit gemeinsamer Kennung erhalten unterschiedliche Adressen" >}}

Am Ende dieser Aufzeichnung meldet das Skript 88 Gästepakete im Arbeitsnetz. Das ist kein Leck: Beide Netze teilen sich einen Trunk-Link, und das Skript hat Gäste-Frames mit dem Tag von VLAN 20 gezählt, die die ungetaggten Arbeitsrechner verwerfen; neuere libpcap-Versionen wenden den Mitschnittfilter auch auf VLAN-getaggte Frames an. Ungetaggte Gästepakete gab es im Arbeitsnetz kein einziges, und weder ein Ping noch eine TCP-Verbindung aus dem Gästenetz erreichte die Arbeitsrechner.

## NAT und eine überlaufende Verbindungstabelle

Im ersten Durchlauf hat kuberoot router diese Runde verloren. Die Conntrack-Tabelle des Kernels ist standardmäßig auf 65.536 Einträge begrenzt, und von 100.000 gleichzeitigen Verbindungen kamen nur 58,9 % zustande. Schlimmer noch: Bei voller Tabelle litt das Management, das 99. Perzentil der API-Antwortzeit stieg auf 10 Sekunden, und 6 von 116 Anfragen schlugen fehl. VyOS verfolgte mit einem Conntrack-Limit von 262.144 Einträgen alle 100.000, während OpenWrt und Debian mit demselben Limit wie router bei 60 % stehen blieben.

Wir haben beide Probleme behoben. kuberoot router bemisst die Tabelle jetzt nach dem Arbeitsspeicher, einen Eintrag pro 8 KB, auf eine Zweierpotenz gerundet, was bei 2 GB dieselben 262.144 ergibt wie bei VyOS. Hat der Administrator die Größe über `OSConfig` festgelegt, lässt der Router sie in Ruhe. Und Verbindungen zur eigenen Kubernetes-API und Node-API des Routers sind jetzt vom Connection Tracking ausgenommen, sodass das Management nicht davon abhängt, wie voll die Tabelle ist. Im erneuten Durchlauf kamen alle 100.000 Verbindungen zustande, bei einem 99. Perzentil der API-Antwortzeit von 74 Millisekunden.

{{< figure src="t-R5-kuberoot-flows-field20.gif" alt="100.000 Verbindungen durch den Router nach der Korrektur" caption="100.000 Verbindungen durch den Router nach der Korrektur" >}}

Um die zweite Korrektur zu prüfen, haben wir die Tabelle über `OSConfig` absichtlich wieder auf 65.536 Einträge gesetzt und erneut gefüllt. Wie zuvor kamen 59,7 % der Verbindungen durch den Router zustande, während die API bei voller Tabelle 280 Anfragen ohne einen einzigen Fehler beantwortete, mit einem 99. Perzentil von 64 Millisekunden.

{{< figure src="t-R5-kuberoot-full-table-field20.gif" alt="Volle Verbindungstabelle und gleichzeitig Management-Zugriffe" caption="Volle Verbindungstabelle und gleichzeitig Management-Zugriffe" >}}

## Tausende Firewall-Regeln

{{< figure src="chart-R6-rules-apply-edit.png" alt="Ersetzen des gesamten Regelsatzes und Ändern einer einzelnen Regel bei 100 bis 20.000 Regeln" caption="Ersetzen des gesamten Regelsatzes und Ändern einer einzelnen Regel bei 100 bis 20.000 Regeln" >}}

Dieses Szenario hat zwei Fehler in kuberoot router aufgedeckt, und beide haben wir noch während der Tests behoben. Erstens: Bei jedem Reconcile-Durchlauf schrieb der Controller den Status jeder Ressource, und bei Tausenden Regeln stauten sich diese Statusschreibvorgänge vor den eigentlichen Änderungen. Bei 10.000 Regeln brauchte die Änderung einer einzigen Regel 187 Sekunden bis in den Kernel, nach einem Reboot Dutzende Minuten. Zweitens: Beim Booten begann der Kernel mit der Weiterleitung, bevor der Controller die Regeln geladen hatte, und in diesen Sekunden kamen Pakete durch den Router, die die Regeln verbieten, in zwei Durchläufen 22 und 45 Stück.

Nach den Korrekturen erreicht die Änderung einer einzelnen Regel den Kernel bei 1.000 Regeln in 1,1 Sekunden und bei 10.000 in 1,9 Sekunden. Von 12.966 Testpaketen an verbotene Ports, auch während des Bootens, kam kein einziges durch. VyOS wendet dieselbe Änderung in 35,6 und 363,6 Sekunden an. OpenWrt bewältigt hundert Regeln in einer halben Sekunde, aber bei 1.000 Regeln gehen fw4 die Dateideskriptoren aus, es endet mit Exit-Code 0 und wendet den neuen Satz nicht an. Debian hält die Regeln nach dem Booten zuverlässig, doch beim Herunterfahren leert der nftables-Dienst den Regelsatz, bevor die Schnittstellen heruntergefahren werden, und in diesen Sekunden kommen Hunderte verbotener Pakete durch.

{{< figure src="t-R6-kuberoot-scale-field6.gif" alt="10.000 Regeln: Änderung einer Regel in zwei Sekunden" caption="10.000 Regeln: Änderung einer Regel in zwei Sekunden" >}}

Eine Einschränkung bleibt. `kubectl apply` lädt einen Satz von 10.000 Regelobjekten in 62–85 Sekunden in die API, und dieses Laden ist nicht atomar: Wird es unterbrochen, enthält die API nur einen Teil des Satzes, bis das Apply wiederholt wird. Wer Regeln in ganzen Sätzen ändert, sollte das im Blick behalten.

## Eine vollständige BGP-Tabelle in 2 GB Arbeitsspeicher

Wir haben einen Router mit 2 GB Arbeitsspeicher an zwei Provider angeschlossen, und jeder schickte ihm per BGP die vollständige Internet-Tabelle: 800.000 IPv4-Routen und 200.000 IPv6-Routen. kuberoot router, der intern BIRD nutzt, installierte die gesamte Tabelle in 62,9 Sekunden im Kernel, und eine Stichprobe von tausend Routen ergab keinen einzigen Fehler. Debian mit FRR kam mit denselben 2 GB nicht zurecht: Der OOM-Killer beendete bgpd. Mit 4 GB installieren sowohl Debian als auch VyOS die Tabelle schneller, in etwa 31 Sekunden, doch mit 2 GB war kuberoot router das einzige der drei Systeme, das die vollständige Tabelle bewältigte.

{{< figure src="t-R7-kuberoot-full-2GiB.gif" alt="Eine vollständige BGP-Tabelle auf 2 GB Arbeitsspeicher" caption="Eine vollständige BGP-Tabelle auf 2 GB Arbeitsspeicher" >}}

## BGP-Richtlinien und stille Ausfälle

kuberoot router setzt die Exportrichtlinie und ein Max-Prefix-Limit für die Routen eines Nachbarn genauso durch wie die anderen: Erlaubt die Exportrichtlinie ein Präfix nicht mehr, erhält der Nachbar den Withdraw innerhalb einer Sekunde, und überschreitet ein Nachbar sein Max-Prefix-Limit, wird seine Sitzung innerhalb einer halben Sekunde beendet. Vor Beginn der Tests gab es nichts davon. Die erste Version von `BGPPeer` konnte keine Routen filtern, und ein Router, der von einem Kunden mehr angenommen hätte, als er sollte, hätte es an seinen Upstream-Provider weiter angekündigt: ein klassisches Route Leak. Filter für exakte Präfixe und ein Max-Prefix-Limit hat kuberoot router erst wegen dieses Szenarios bekommen.

{{< figure src="t-R8-kuberoot-policy-v2.gif" alt="Exportrichtlinie und ein Max-Prefix-Limit" caption="Exportrichtlinie und ein Max-Prefix-Limit" >}}

Bei stillen Ausfällen liegt kuberoot router hinter der Konkurrenz. Hat ein Nachbar aufgehört, Verkehr weiterzuleiten, die Sitzung aber nicht geschlossen, erfährt der Router davon erst, wenn der BGP-Hold-Timer abläuft: In unserem Test dauerte das 10,25 Sekunden bei einer Hold Time von 9 Sekunden, die der Upstream-Peer vorgegeben hatte; mit dem BIRD-Standardwert von 240 Sekunden wären es vier Minuten. VyOS und OpenWrt unterstützen BFD und erkennen einen solchen Ausfall in 1,3–1,4 Sekunden. Ist eine Verbindung wieder da, braucht kuberoot router mehr als eine Minute, um die Sitzung neu aufzubauen, weil BIRD standardmäßig so lange wartet, bevor es sich erneut verbindet, während VyOS das in 6,6 Sekunden erledigt. Ein Neustart des Router-Controllers entfernt die per BGP gelernten Routen aus der Routing-Tabelle des Kernels, und die Weiterleitung steht für 4,7 Sekunden still. Timer, BFD und Graceful Restart lassen sich in `BGPPeer` noch nicht konfigurieren.

{{< figure src="t-R9-kuberoot-flaps.gif" alt="Abbrüche der BGP-Sitzung und ein verschwundener Nachbar" caption="Abbrüche der BGP-Sitzung und ein verschwundener Nachbar" >}}

## Die Management-API unter Last

Der API Server des Routers hielt eine Minute lang 100 Anfragen pro Sekunde stand, 6.000 Antworten auf 6.000 Anfragen, mit einem 99. Perzentil von 4,9 Millisekunden, und die Weiterleitung litt in dieser Zeit nicht. Eine Port-Weiterleitung, die in einer Management-Zone auf den API-Port zielte, hat kuberoot router abgelehnt, sodass sich ein Administrator auf diesem Weg nicht aussperren kann.

{{< figure src="t-R10-kuberoot-exposure-load.gif" alt="Hundert Anfragen pro Sekunde an die API und gleichzeitig Weiterleitung" caption="Hundert Anfragen pro Sekunde an die API und gleichzeitig Weiterleitung" >}}

Das Szenario mit einer gelöschten Zone hat einen weiteren Fehler aufgedeckt. Hatte eine Schnittstelle keine Firewall-Zone und erhielt sie ihre Adresse über die Kernel-Kommandozeile, antworteten beim Booten, bevor der Controller die Regeln geladen hatte, die Kubernetes-API und die Node-API ein, zwei Sekunden lang jedem auf dieser Schnittstelle. Jetzt lädt der Node die Regeln der letzten bestätigten Konfiguration, bevor irgendeine Schnittstelle eine Adresse erhält, und auf dem korrigierten Build wurde in diesen Sekunden keine einzige von 245 Testanfragen beantwortet.

{{< figure src="t-R10-kuberoot-zone-reboot-field8.gif" alt="Nach der Korrektur: keine einzige Antwort auf einer Schnittstelle ohne Zone während des Bootens" caption="Nach der Korrektur: keine einzige Antwort auf einer Schnittstelle ohne Zone während des Bootens" >}}

## Die Festplatte

kuberoot router speichert seine Konfiguration in SQLite, und im ersten Durchlauf schrieb es deutlich mehr auf die Festplatte als die Konkurrenz. Im Leerlauf schrieb der Node 231 MB pro Stunde, gegenüber 102 MB bei Debian und 6,4 bei VyOS, und bei der höchsten Änderungsrate, 5,75 Änderungen pro Sekunde, summierte sich das auf 233 GB am Tag, etwa 470 KB pro Änderung. Für einen Router mit billigem Flash-Speicher ist das viel zu viel, also haben wir verfolgt, woher jedes Megabyte kam.

Den größten Anteil hatte der Mount-Modus: Die State-Partition war mit `data=journal` eingehängt, sodass ext4 jeden Datenblock zweimal schrieb. Danach kamen zwei Lease-Objekte zur Koordination, die nur dann eine Rolle spielen, wenn mehrere API Server nebeneinander laufen; trotzdem wurden sie auf einem Router mit einem einzigen API Server alle zehn Sekunden erneuert. Dann folgte die bestätigte Konfiguration, die ganze Objekte samt Metadaten speicherte. Der Rest stammte aus Logs: Der API Server protokollierte immer wieder Fehler beim Abruf der OpenAPI-Spezifikation der Node-API, und kube-controller-manager beschwerte sich alle paar Sekunden, dass die Node-API kein WatchList-Streaming unterstütze. Nach allen Korrekturen schreibt ein Node im Leerlauf 6,6 MB pro Stunde, gleichauf mit VyOS und fünfzehnmal weniger als Debian. Eine Änderung kostet 115 KB: zwei per fsync abgesicherte Schreibvorgänge in den Datenspeicher, einer für die Spec und einer für den Status. Diese haben wir bewusst beibehalten, denn sie garantieren, dass bei einem Stromausfall keine bestätigte Änderung verloren geht.

{{< figure src="chart-R11-writes-per-day.png" alt="Schreibzugriffe auf die Festplatte pro Tag bei der höchsten Änderungsrate" caption="Schreibzugriffe auf die Festplatte pro Tag bei der höchsten Änderungsrate" >}}

Im ersten Durchlauf war eine volle State-Partition der schlimmste Fall für kuberoot router: Nach einem Reboot kam der Node überhaupt nicht hoch, und kein Verkehr lief durch ihn. Jetzt hält kinit auf der Partition eine Reserve vor, fünf Prozent ihres Platzes, höchstens aber 64 MB, und bootet es mit voller Partition, gibt es die Reserve frei, damit Datenspeicher und API starten können. Mit der Reserve war die API nach 6,6 Sekunden oben und nahm alle 60 Änderungen an. Wir haben auch den ungünstigsten Fall ganz ohne Reserve getestet: Die API kommt dann nicht hoch, aber die Weiterleitung funktioniert trotzdem, und die erste Antwort durch den Router trifft 3,1 Sekunden nach dem Start der VM ein. Das liegt daran, dass kuberoot-router nicht mehr auf die API wartet und die letzte bestätigte Konfiguration von der Festplatte anwendet, sobald es startet.

{{< figure src="t-R11-kuberoot-full-none-field24.gif" alt="Volle State-Partition ohne Reserve: Die API kommt nicht hoch, aber der Verkehr fließt" caption="Volle State-Partition ohne Reserve: Die API kommt nicht hoch, aber der Verkehr fließt" >}}

Bei I/O-Fehlern zeigte der erneute Durchlauf, dass die erste Korrektur nicht weit genug ging. Der Node bemerkte den Ausfall: Der Partitionsstatus in `OSConfig` wechselte innerhalb von zehn Sekunden auf Failing, und die Logs der Dienste endeten mit einem ausdrücklichen Fehler. Änderungen hingen aber trotzdem fünfzehn Sekunden und liefen dann ohne Erklärung in einen Timeout, weil der API Server lebte und Lesezugriffe beantwortete, während Schreibvorgänge im Datenspeicher stecken blieben. Seit Linux 6.10 nimmt ext4 nach einem Fehler keine Schreibvorgänge mehr an, während die Mount-Tabelle die Partition weiterhin als beschreibbar (rw) führt, sodass eine Prüfung anhand der Mount-Tabelle nichts sah. Jetzt stellt die Node-API einen Validating Admission Webhook bereit, der jede Änderung prüft, bevor sie den Datenspeicher erreicht: Solange die Partition ReadOnly oder Failing ist, werden Änderungen an Router-Ressourcen sofort abgelehnt, in 0,19 Sekunden, mit Angabe des Grundes. Die Weiterleitung läuft die ganze Zeit weiter, und nach einem Reboot auf eine intakte Festplatte gehen alle Änderungen wieder durch.

{{< figure src="t-R11-kuberoot-eio-field24.gif" alt="Ein Festplattenausfall: Die Änderung wird mit Begründung abgelehnt, und der Verkehr fließt" caption="Ein Festplattenausfall: Die Änderung wird mit Begründung abgelehnt, und der Verkehr fließt" >}}

OpenWrt schnitt in denselben Tests schlechter ab: Als der Platz ausging, wurde seine Netzwerk-Konfigurationsdatei geleert, während der Speicherbefehl Erfolg meldete.

## Was kuberoot router fehlt

Dem Router fehlt vieles von dem, was VyOS und OpenWrt bieten: VRRP und die Synchronisierung des Verbindungszustands für ein Router-Paar, WireGuard und IPsec, PPPoE, DHCPv6 mit Prefix Delegation und Router Advertisements für IPv6. Der Linux-Kernel unterstützt all das, sein Ressourcenschema jedoch nicht, und der API Server weist solche Felder als unbekannt zurück (kubectl validiert Felder standardmäßig strikt). Für einen Heimrouter mit PPPoE vom Provider und einem VPN ins Büro eignet er sich daher noch nicht.

## Was wir gefunden und behoben haben

Die Tests haben kuberoot router dreizehn Korrekturen eingebracht, und jede haben wir überprüft, indem wir das Szenario, das den Fehler aufgedeckt hatte, erneut durchliefen.

| Vorher | Nachher |
|---|---|
| eine Version, die nicht weiterleitete, wurde bei einem Upgrade für gut erklärt | externe Weiterleitungstests während der Probezeit |
| `BGPPeer` filterte keine Routen und begrenzte die Präfixzahl nicht | Filter für exakte Präfixe und ein Max-Prefix-Limit |
| bei 10.000 Regeln brauchte die Änderung einer Regel 187 Sekunden bis in den Kernel | 1,9 Sekunden |
| beim Booten begann die Weiterleitung, bevor die Regeln geladen waren | die Weiterleitung wird erst nach dem Laden der Regeln eingeschaltet |
| BIRD und dnsmasq liefen nach einem Absturz des Controllers unbeaufsichtigt weiter | sie stoppen zusammen mit ihm |
| die API antwortete in den ersten Sekunden des Bootens auf einer Schnittstelle ohne Zone | die Regeln der bestätigten Konfiguration werden geladen, bevor das Netz hochfährt |
| die Adressen eines gelöschten Interface-Objekts blieben auf der Schnittstelle | sie werden zusammen mit der Ressource entfernt |
| das Audit der Node-API zeichnete keine Änderungen auf | es zeichnet sie auf |
| zwanzig Clients, die ihre DHCP-Adressen zurückgegeben hatten, bekamen sie erst nach 19,9 Sekunden wieder | nach 0,076 Sekunden, ohne Ablehnungen |
| von 100.000 NAT-Verbindungen kamen nur 58,9 % zustande, und die API brauchte bei voller Tabelle bis zu 10 Sekunden für eine Antwort | 100 %, und die API antwortet selbst bei voller Tabelle in Dutzenden Millisekunden |
| ein Node im Leerlauf schrieb 231 MB pro Stunde auf die Festplatte, und eine Änderung kostete 469 KB | 6,6 MB pro Stunde und 115 KB |
| bei voller State-Partition kam der Node nicht hoch und leitete keinen Verkehr weiter | dank der Reserve kommt er hoch, und ohne Reserve leitet er trotzdem Verkehr weiter |
| bei Festplattenfehlern hingen Änderungen ohne Erklärung | sie werden sofort abgelehnt, mit Angabe des Grundes |

Die Konkurrenten zeigten in denselben Tests eigene Fehler, einige davon schwerwiegender: das halb geschriebene VyOS-Image, das bootfähig wurde, die Meldung "locked" von VyOS mit Exit-Code 0, das Zurückfallen von OpenWrt auf Werkseinstellungen, `sysupgrade -T`, das ein abgeschnittenes Image durchließ, und fw4, das tausend Regeln stillschweigend nicht anwendete.

## Wofür sich router eignet

Nach diesen Tests eignet sich kuberoot router am besten dort, wo ein Einsatz vor Ort teuer ist: in Zweigstellen, an entfernten Standorten, als Edge-Router im Rack eines Providers. Eine Änderung, die den Administrator ausgesperrt hat, macht sich innerhalb einer Minute selbst rückgängig, ohne Reboot. Ein Upgrade, das nicht bootete, abstürzte oder keinen Verkehr mehr weiterleitete, nimmt sich selbst zurück. Ein Stromausfall mitten im Upgrade macht nichts kaputt. Und die gesamte Konfiguration lebt in der Kubernetes-API, mit RBAC, Audit, Schutz vor gleichzeitigen Änderungen und GitOps, sodass sich eine Flotte solcher Router genauso verwalten lässt wie Anwendungen in einem Cluster.

Der zweite Bereich, in dem kuberoot router den anderen überlegen ist, ist ein BGP-Netzwerkrand mit großer Firewall auf bescheidener Hardware: eine vollständige Tabelle auf zwei Gigabyte Arbeitsspeicher und die Änderung einer Regel in Sekunden bei Zehntausenden Regeln.

Nicht geeignet ist er dort, wo Sie ein VPN, PPPoE, IPv6 mit Prefix Delegation oder ein Router-Paar mit VRRP brauchen oder wo der stille Ausfall eines BGP-Nachbarn in einer Sekunde statt in zehn erkannt werden muss.

## Wo es den Code gibt und was Sie lesen können

kuberoot ist ein Open-Source-Projekt unter der Lizenz Apache 2.0. Der Code, die Release-Images und eine Beschreibung jeder Router-Ressource liegen auf GitHub:

- das Repository: [github.com/kuberoot-dev/kuberoot](https://github.com/kuberoot-dev/kuberoot)
- wie man einen Node installiert und aktualisiert: [Installing and upgrading](https://github.com/kuberoot-dev/kuberoot#installing-and-upgrading)
- wie die Router-Distribution funktioniert und wie man sie konfiguriert: [The router distribution](https://github.com/kuberoot-dev/kuberoot#the-router-distribution)
- Release-Images: [die Release-Seite](https://github.com/kuberoot-dev/kuberoot/releases)
- die Testszenarien aus diesem Beitrag, damit Sie sie selbst wiederholen können: [test/field/router](https://github.com/kuberoot-dev/kuberoot/tree/main/test/field/router)

Bisherige Beiträge dieser Serie:

- [Kubernetes als Linux-Kernel: ein Baukasten für eigene Kubernetes-Distributionen und ein Paketmanager für jeden Cluster](/de/blog/2026/10/kubernetes-als-linux-kernel-distributionen-paketmanager/)
- [Kubernetes als Linux-Kernel, Teil 2: kubepkg, ein Paketmanager nach Debian-Vorbild für jeden Cluster](/de/blog/2026/10/kubepkg-paketmanager-kubernetes-debian/)
