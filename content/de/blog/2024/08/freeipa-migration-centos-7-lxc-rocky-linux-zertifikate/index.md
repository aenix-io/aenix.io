---
title: "FreeIPA in der Praxis: Migration aus einem CentOS-7-LXC-Container nach Rocky Linux, Debugging und abgelaufene Zertifikate"
seo_title: "FreeIPA von CentOS 7 LXC nach Rocky Linux migrieren"
description: "Wie wir ein defektes FreeIPA im CentOS-7-LXC-Container auf Proxmox wiederbelebt haben: systemd-Debugging, abgelaufene Zertifikate, Umzug auf Rocky Linux."
slug: "freeipa-migration-centos-7-lxc-rocky-linux-zertifikate"
date: "2024-08-01"
cover_image: "/img/blog/covers/de/freeipa-migration-centos-7-lxc-rocky-linux-zertifikate.jpg"
author: "Timur Tukaev"
type: "article"
topics: ["Proxmox", "Cozystack", "Migration", "Backup and DR", "FreeIPA"]
language: "de"
hreflang_en: "/blog/2024/08/freeipa-tips-and-tricks-migrating-freeipa-from-centos-7-lxc-container-to-rocky-linux-debugging/"
quiz:
  title: "Testen Sie Ihr Wissen: FreeIPA wiederherstellen und migrieren"
  questions:
    - q: "Warum startete der ursprüngliche LXC-Container nicht auf dem aktuellen Proxmox-Host?"
      options:
        - { text: "Unterschiedliche Cgroups-Versionen: Das alte systemd braucht v1, das aktuelle Proxmox nutzt v2", correct: true }
        - { text: "Falsche CPU-Architektur für das Container-Image", correct: false }
        - { text: "Ein beschädigtes Root-Dateisystem im Container", correct: false }
        - { text: "Ein fehlendes Kernel-Modul auf dem Proxmox-Host", correct: false }
      explanation: "Das neue Proxmox arbeitet mit Cgroups v2, das veraltete systemd im Container unterstützt nur Cgroups v1. systemd startete im Container nicht, eine Bash-Shell ließ sich aber trotzdem öffnen."
    - q: "Warum musste der Autor das Systemdatum zurückstellen, bevor er ipactl restart ausführte?"
      options:
        - { text: "Um eine Prüfung der Lizenzgültigkeit in FreeIPA zurückzusetzen", correct: false }
        - { text: "Um bestehende Kerberos-Tickets an eine bekannte TGT-Laufzeit zu binden", correct: false }
        - { text: "Die meisten Zertifikate waren abgelaufen, und die Dienste brauchen gültige Zertifikate zum Start", correct: true }
        - { text: "Um die Uhr an den LXC-Host anzugleichen und Zeitabweichungen zu vermeiden", correct: false }
      explanation: "Ein Teufelskreis: Die Dienste brauchen gültige Zertifikate zum Start, die Erneuerung der Zertifikate setzt aber laufende Dienste voraus. Ein Datum vor dem Ablauf durchbricht diesen Kreis. Vorher wird NTP deaktiviert, damit die Uhr nicht wieder auf die echte Zeit synchronisiert wird."
    - q: "Welchen Trick für die Mirror-Konfiguration von CentOS 7 nach dem EOL nutzt der Artikel?"
      options:
        - { text: "Alle Pakete lokal mit einem privaten GPG-Schlüssel neu signieren", correct: false }
        - { text: "Auf yum-Updates ganz verzichten und den bestehenden Stand einfrieren", correct: false }
        - { text: "baseurl auf vault.centos.org umstellen und mirrorlist deaktivieren", correct: true }
      explanation: "Die beiden sed-Befehle kommentieren mirrorlist aus und ändern baseurl von mirror.centos.org auf vault.centos.org. So installiert CentOS 7 auch nach dem EOL noch Pakete aus dem Archiv."
    - q: "Mit welchem Befehl gelangt man vom Host aus in einen Proxmox-LXC-Container?"
      options:
        - { text: "pct enter <id>", correct: true }
        - { text: "lxc-attach -n <name>", correct: false }
        - { text: "docker exec -it <id> bash", correct: false }
        - { text: "nsenter -t <pid>", correct: false }
      explanation: "`pct enter 112` ist der Proxmox-eigene Befehl, um in einen LXC-Container zu wechseln. Er funktioniert auch dann, wenn systemd im Container defekt ist, weil er lediglich eine Bash startet."
    - q: "Mit welchem Befehl hat der Autor bei der Diagnose den Ablaufstatus der einzelnen Zertifikate angezeigt?"
      options:
        - { text: "openssl x509 -in *.pem -noout -dates", correct: false }
        - { text: "getcert list | grep -E 'status|expires'", correct: true }
        - { text: "ipa cert-show --all --raw", correct: false }
        - { text: "kinit admin && klist -e -f", correct: false }
      explanation: "`getcert list` (aus certmonger) liefert die maßgebliche Sicht auf die von FreeIPA überwachten Zertifikate. grep filtert auf die Zeilen mit ID, Status, Pfad und Ablaufdatum. Mit ipa-getcert resubmit -i <ID> wird anschließend die Erneuerung angestoßen."
---

Hallo! Ich bin Andrei, Gründer von [Ænix](https://aenix.io/) und Hauptentwickler der Plattform [Cozystack](https://cozystack.io/). Vor Kurzem hatte ich die Aufgabe, ein veraltetes FreeIPA in einem großen Unternehmen zu aktualisieren. Diese FreeIPA-Instanz war in einem LXC-Container auf CentOS 7 installiert und funktionierte seit mehreren Monaten nicht mehr. Ich bekam ein Backup des LXC-Containers für Proxmox, und so begann die Arbeit.

![FreeIPA-Migration aus einem CentOS-7-LXC-Container nach Rocky Linux](/img/blog/medium/freeipa-tips-and-tricks-migrating-freeipa-from-centos-7-lxc-container-to-rocky-linux-debugging/01.jpg)

Der ursprüngliche Plan:

1. Das System wieder lauffähig machen.
2. Die Zertifikate erneuern.
3. Ein Backup erstellen.
4. Das Backup auf ein modernes System migrieren, Fedora oder Rocky Linux, da der Support für CentOS ausgelaufen ist.

Doch wie so oft bei solchen Aufgaben lief etwas schief :)

## Ein LXC-Container mit veraltetem systemd auf einem aktuellen Proxmox

Da das Image als archivierter LXC-Container vorlag, zeigte sich bei der Wiederherstellung, dass meine Proxmox-Version zu neu war und die systemd-Version des Containers nicht unterstützte. Das Problem: Das neue Proxmox arbeitet mit Cgroups v2, das veraltete systemd im Container unterstützt nur Cgroups v1.

Die erste Hürde war also bereits der Start des LXC-Containers. Zum Glück lief im Container nur systemd nicht (das Init-System, das alles andere startet); über eine gewöhnliche Bash-Shell war er trotzdem erreichbar.

Damit hatten wir Zugriff auf den Container und konnten versuchen, sein Betriebssystem zu aktualisieren. Dabei lässt sich ähnlich vorgehen, wie man es oft mit chroot-Umgebungen tut.

Um in Proxmox in den LXC-Container zu wechseln, genügt folgender Befehl:

```
pct enter 112
```

Anders als bei einem normalen chroot ist der Network Namespace in einem LXC-Container jedoch isoliert. Zum Glück hatte Proxmox bereits alle nötigen Interfaces angelegt, und wir mussten sie nur noch konfigurieren.

Netzwerk konfigurieren:

```
ip addr add 192.168.20.109/16 dev eth0
ip link set eth0 up
ip route add default via 192.168.20.1
```

Da CentOS sein EOL erreicht hat, sind die offiziellen Repositories unter den gewohnten Adressen nicht mehr verfügbar. Wir ersetzen sie durch die Archivadressen:

```
sed -i 's/mirrorlist/#mirrorlist/g' /etc/yum.repos.d/CentOS-*
sed -i 's|#baseurl=http://mirror.centos.org|baseurl=http://vault.centos.org|g' /etc/yum.repos.d/CentOS-*
```

Jetzt installieren wir ein neues systemd aus den Backports:

```
curl https://copr.fedorainfracloud.org/coprs/jsynacek/systemd-backports-for-centos-7/repo/epel-7/jsynacek-systemd-backports-for-centos-7-epel-7.repo -o /etc/yum.repos.d/jsynacek-systemd-centos-7.repo
yum update systemd
```

Im Ergebnis haben wir ein funktionierendes System mit einem aktuellen systemd, das auf dem neuen Proxmox läuft. Allerdings haben wir damit nur den Container gestartet; das eigentliche Problem, mit dem uns der Kunde beauftragt hatte, ist noch ungelöst.

## Das Problem mit abgelaufenen Zertifikaten

Bei der Diagnose von FreeIPA sollten Sie als Erstes den Status der Systemzertifikate prüfen. Dazu genügt folgender Befehl:

```
# getcert list | grep -E "Request ID|status|certificate|expires"
```

In der Konsole erschien folgende Ausgabe:

```
Number of certificates and requests being tracked: 7.
Request ID '20180730085204':
     status: CA_UNREACHABLE
     certificate: type=FILE,location='/var/lib/ipa/ra-agent.pem'
     expires: 2024-05-04 13:35:31 UTC
Request ID '20180730085237':
     status: CA_UNREACHABLE
     certificate: type=NSSDB,location='/etc/pki/pki-tomcat/alias',nickname='auditSigningCert cert-pki-ca',token='NSS Certificate DB'
     expires: 2024-05-04 13:36:01 UTC
Request ID '20180730085238':
     status: CA_UNREACHABLE
     certificate: type=NSSDB,location='/etc/pki/pki-tomcat/alias',nickname='ocspSigningCert cert-pki-ca',token='NSS Certificate DB'
     expires: 2024-05-04 13:37:01 UTC
Request ID '20180730085239':
     status: CA_UNREACHABLE
     certificate: type=NSSDB,location='/etc/pki/pki-tomcat/alias',nickname='subsystemCert cert-pki-ca',token='NSS Certificate DB'
     expires: 2024-05-04 13:35:51 UTC
Request ID '20180730085240':
     status: CA_UNREACHABLE
     certificate: type=NSSDB,location='/etc/pki/pki-tomcat/alias',nickname='caSigningCert cert-pki-ca',token='NSS Certificate DB'
     expires: 2038-07-30 08:51:36 UTC
Request ID '20180730085241':
     status: CA_UNREACHABLE
     certificate: type=NSSDB,location='/etc/pki/pki-tomcat/alias',nickname='Server-Cert cert-pki-ca',token='NSS Certificate DB'
     expires: 2024-05-04 13:36:31 UTC
Request ID '20180730085358':
     status: CA_UNREACHABLE
     certificate: type=FILE,location='/va
```

Die Ausgabe zeigt, dass die meisten Zertifikate abgelaufen sind. Das ist der Hauptgrund, warum viele FreeIPA-Dienste nicht starten. Der Knackpunkt: Wir müssen die Zertifikate erneuern, dafür aber müssen die FreeIPA-Dienste laufen. Diese Dienste starten jedoch nicht, weil die Zertifikate abgelaufen sind und die Kommunikation zwischen ihnen deshalb scheitert.

Die Lösung ist vergleichsweise einfach: Wir ändern die Systemzeit. Da der LXC-Container die Zeit vom Host übernimmt, tun wir das direkt auf dem Hypervisor. Zusätzlich müssen wir den NTP-Dienst (Network Time Protocol) deaktivieren, damit er die Zeit nicht automatisch aus dem Internet synchronisiert und wieder auf die korrekte Zeit zurückstellt.

Deaktivieren Sie zuerst NTP. Stellen Sie dann das Datum auf einen Zeitpunkt vor dem Ablauf der Zertifikate, damit das System sie für noch gültig hält:

```
timedatectl set-ntp 0
date -s '2024–05–03'
```

Starten Sie anschließend die Dienste neu:

```
ipactl restart
```

Die Dienste sollten jetzt zwar starten, doch die Ausgabe von getcert list zeigt die erneuerten Zertifikate vermutlich nicht sofort an. Mit dem Befehl `ipa-getcert resubmit -i` und der Request ID aus der Ausgabe von `getcert list` als Argument können Sie die Erneuerung erzwingen. Prüfen Sie danach den Status erneut:

```
ipa-getcert resubmit -i 20240227134251
```

Achten Sie darauf, dass alle Zertifikate in den Zustand `MONITORING` wechseln. Ist die Erneuerung nicht abgeschlossen, bevor wir die Systemzeit zurückstellen, bleiben viele Dienste funktionsunfähig.

Sobald alle Zertifikate im Zustand `MONITORING` sind, stellen Sie die Systemzeit wieder auf die aktuelle Zeit, indem Sie NTP erneut aktivieren:

```
timedatectl set-ntp 1
```

Sehr gut! Damit sind wir einen weiteren Schritt vorangekommen und haben ein voll funktionsfähiges FreeIPA, wenn auch in einer älteren Version.

## Vorbereitung der Migration auf ein neues Betriebssystem und Umstellung des nssdb-Formats

Die meisten FreeIPA-Zertifikate liegen in isolierten nssdb-Datenbanken (NSS Shared DB). Seit CentOS 7 hat nssdb das Datenbankformat vom älteren Format cert8 auf das neue, SQL-basierte Format cert9 umgestellt. CentOS 7 unterstützte das alte Format noch, in neueren Systemen ist diese Unterstützung jedoch entfallen, sodass das alte Datenbankformat dort nicht mehr nutzbar ist.

In meinem Fall nutzten einige Dienste noch das alte Speicherformat. Es ist also gut möglich, dass Sie auf dasselbe Problem stoßen. Hier die Lösung.

Suchen Sie zunächst alle diese Datenbanken (im alten und im neuen Format) im System:

```
find / -name cert8.db
find / -name cert9.db
```

- Dateien mit folgenden Namensmustern stehen für das alte Format: `cert8.db`, `key3.db`, `secmod.db`.
- Dateien mit diesen Mustern stehen für das neue SQL-Format: `cert9.db`, `key4.db`, `pkcs11.txt`.

Prüfen Sie dann die Zertifikate in der Datenbank (ersetzen Sie `EXAMPLE-ORG` durch Ihre Domain).

Altes Format:

```
/usr/bin/certutil -d /etc/dirsrv/slapd-EXAMPLE-ORG -L -f /etc/dirsrv/slapd-EXAMPLE-ORG/pwdfile.txt
```

Neues Format:

```
/usr/bin/certutil -d sql:/etc/dirsrv/slapd-EXAMPLE-ORG -L -f /etc/dirsrv/slapd-EXAMPLE-ORG/pwdfile.txt
```

Liefert die Datenbank im neuen Format eine leere Liste, müssen Sie die Datenbank in das neue Format konvertieren. Das geht mit folgendem Befehl:

```
certutil -W -d sql:/etc/pki/pki-tomcat/alias -f /etc/pki/pki-tomcat/alias/pwdfile.txt -@ /etc/pki/pki-tomcat/alias/pwdfile.txt
```

Wichtiger Hinweis: In diesem Stadium unterstützen möglicherweise noch nicht alle Dienste das neue Format. Auf einer neuen Maschine mit einem neueren Betriebssystem sind die Komponenten aber voraussichtlich aktualisiert und verwenden das neue Format standardmäßig.

Stellen Sie vor Beginn der Migration sicher, dass alle Zertifikate aus der Datenbank im alten Format in die Datenbank im neuen Format übernommen wurden. Andernfalls kommt es auf dem neuen System wahrscheinlich zu Fehlern wie diesem:

NSS is built without support of the legacy database(DBM) directory `‘/etc/ipa/nssdb’`.

## Migration auf ein neues Betriebssystem

Bringen Sie vor der Migration das System und alle Pakete auf den neuesten Stand:

```
yum update
```

Damit sind wir offenbar bereit für die Migration nach Rocky Linux 8.

Erstellen Sie auf dem alten CentOS-7-System ein Backup:

```
ipa-backup
```

Kopieren Sie das Backup auf das Rocky-Linux-System. Prüfen Sie dort, ob in `/etc/hosts` der richtige FQDN und die richtige IP-Adresse eingetragen sind.

Starten Sie dann die Wiederherstellung der Daten aus dem Backup:

```
ipa-restore -v /var/lib/ipa/backup/ipa-full-2024–07–03–23–24–04/
```

Wegen der unterschiedlichen Formate in den Betriebssystemversionen stoßen wir auf eine fehlende Datei `/var/lib/ipa/auth_backup/authselect.backup`. Sie lässt sich erzeugen, indem Sie während des Vorgangs folgenden Befehl ausführen (er speichert die Einstellungen des aktuellen authselect-Profils in einer Datei):

```
authselect current — raw > /var/lib/ipa/auth_backup/authselect.backup
```

Danach bricht die Wiederherstellung in der Upgrade-Phase von FreeIPA ab, nachdem folgender Befehl ausgeführt wurde:

```
ipa-server-upgrade
```

In den Logs stellen Sie dann womöglich fest, dass `pki-tomcatd@pki-tomcat.service.d` nicht startet, also der Dienst, der den CA-Listener von FreeIPA startet, der für die Ausstellung von Zertifikaten zuständig ist.

Die Logs prüfen Sie mit:

```
journalctl -u pki-tomcatd@pki-tomcat.service.d
```

In manchen Fällen lohnt sich ein Blick in das Debug-Log der CA:

```
tail -f /var/log/pki/pki-tomcat/ca/debug
```

Bei genauer Durchsicht der Logs finden Sie möglicherweise Fehler beim Dateizugriff in `/etc/sysconfig/pki-tomcat`. Offenbar hat die Logik der Backup-Wiederherstellung hier nicht korrekt gearbeitet, also korrigieren wir das von Hand:

```
sudo chown pkiuser:pkiuser /etc/sysconfig/pki-tomcat
sudo chown -R pkiuser:pkiuser /etc/pki/pki-tomcat/alias/
```

Außerdem empfiehlt es sich, SELinux während der Wiederherstellung vorübergehend zu deaktivieren.

Ein weiteres Problem: Rocky Linux 8 bringt eine neuere Tomcat-Version mit als CentOS 7, und das Konfigurationsformat hat sich erheblich geändert. Die aus dem Backup wiederhergestellte alte Datei `/etc/pki/pki-tomcat/server.xml` ist mit dem aktualisierten Tomcat nicht kompatibel.

Eine neue, korrekt formatierte Datei erhalten Sie, indem Sie FreeIPA mit denselben Parametern initialisieren:

```
ipa-server-install
```

Tun Sie das auf einer separaten VM und kopieren Sie die erzeugte `server.xml` anschließend auf die VM, auf der Sie das Backup wiederherstellen.

Sind die manuellen Anpassungen erledigt, starten Sie das Upgrade erneut:

```
ipa-server-upgrade -v
```

Geschafft: FreeIPA ist erfolgreich wiederhergestellt und auf die neueste Version aktualisiert.

## Zertifikate auf dem neuen Server prüfen

Prüfen Sie die Zertifikate, indem Sie den Befehl auf der neuen Maschine noch einmal ausführen:

```
getcert list | grep -E “Request ID|status|certificate|expires”
```

Einige davon hängen im Zustand `NEWLY_ADDED_NEED_KEYINFO_READ_PIN` fest. Das bedeutet, dass die Zertifikate gerade erst hinzugefügt wurden und eine PIN benötigen. Ein seltsames Verhalten, wie ich finde, aber gut: Wir verbuchen es unter den Unzulänglichkeiten des Wiederherstellungsskripts.

Die benötigte PIN können Sie mit folgendem Befehl angeben:

```
ipa-getcert start-tracking -i 20240703234954 -P “$(cat /etc/pki/pki-tomcat/alias/pwdfile.txt)”
```

`20240703234954` ist die Request ID aus der Ausgabe des zuvor ausgeführten Befehls getcert list. Achten Sie genau auf den Speicherort des Zertifikats und geben Sie die richtige Passwortdatei aus demselben Speicher an.

Stellen Sie sicher, dass alle Zertifikate in den Zustand `MONITORING` wechseln. Sehen Sie Status wie `CA_UNREACHABLE`, müssen Sie herausfinden, warum der CA-Listener nicht funktioniert. Prüfen Sie dazu die Logs:

```
journalctl -u pki-tomcatd@pki-tomcat.service.d
tail -f /var/log/pki/pki-tomcat/ca/debug
```

## Fazit

Wenn Sie Probleme mit Zertifikaten haben, führt der Weg zur Lösung fast immer über die in diesem Artikel beschriebenen Schritte.

Allgemeiner Handlungsplan:

- Prüfen Sie Tomcat und den CA-Dienst, den Tomcat startet.
- Prüfen Sie den Status der Zertifikatsanfragen mit getcert list.
- Fordern Sie die Zertifikate mit ipa-getcert resubmit oder start-tracking neu an.

## Weitere Empfehlungen

Der Betrieb von FreeIPA hängt von den Zertifikaten ab, die getcert list aufführt. Im Normalfall sollte dieser Befehl alle Zertifikate im Zustand MONITORING zurückgeben. Wenn etwas schiefgeht, helfen die Tipps aus diesem Artikel. Meistens liegt das Problem beim CA-Dienst, der diese Zertifikate signiert.

Einige meiner unformatierten Notizen finden Sie [in diesem Gist](https://gist.github.com/kvaps/d16fe862da99909d78030443916a0a4a).

Und noch ein wichtiger Punkt: Richten Sie unbedingt ein Monitoring ein, das die Ausgabe dieses Befehls überwacht.

Von [Timur Tukaev](https://medium.com/@tym83) am [1. August 2024](https://medium.com/p/b8b923499b96).

[Kanonischer Link](https://medium.com/@tym83/freeipa-tips-and-tricks-migrating-freeipa-from-centos-7-lxc-container-to-rocky-linux-debugging-b8b923499b96)

Exportiert von [Medium](https://medium.com) am 11. Mai 2026.
