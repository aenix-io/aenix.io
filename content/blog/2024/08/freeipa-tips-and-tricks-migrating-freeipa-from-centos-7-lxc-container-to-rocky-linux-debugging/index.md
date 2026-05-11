---
title: "FreeIPA tips and tricks: migrating FreeIPA from CentOS 7 LXC container to Rocky Linux, debugging…"
description: "Recently, I had the task of updating an outdated FreeIPA in a large enterprise. This FreeIPA instance was installed in an LXC container…"
date: "2024-08-01"
author: "Timur Tukaev"
type: "article"
topics: ["Proxmox", "Cozystack", "Migration", "Backup & DR", "FreeIPA"]
language: "en"
source_url: "https://medium.com/@tym83/freeipa-tips-and-tricks-migrating-freeipa-from-centos-7-lxc-container-to-rocky-linux-debugging-b8b923499b96"
quiz:
  title: "Test yourself: FreeIPA recovery + migration"
  questions:
    - q: "What was the underlying reason the original LXC container would not start on the modern Proxmox host?"
      options:
        - { text: "Wrong CPU architecture", correct: false }
        - { text: "Outdated systemd inside the container only supported Cgroups v1, while modern Proxmox uses Cgroups v2", correct: true }
        - { text: "A corrupted root filesystem", correct: false }
        - { text: "Missing kernel module", correct: false }
      explanation: "The new Proxmox runs on Cgroups v2; the outdated container systemd only supports Cgroups v1. systemd inside wouldn't start, but a bash shell could still be entered."
    - q: "Why did the author have to set the system date back before running ipactl restart?"
      options:
        - { text: "To fool a license check", correct: false }
        - { text: "Because most certificates had expired and FreeIPA services need valid certs to start, but you cannot renew them while services are down", correct: true }
        - { text: "To pin Kerberos tickets", correct: false }
        - { text: "To match the LXC host clock", correct: false }
      explanation: "A circular failure: services need valid certs to start, but cert renewal needs the services to be running. Setting the date back before expiry breaks the loop. NTP is disabled first so it doesn't resync to real time."
    - q: "Which CentOS-7 mirror configuration trick does the article use after EOL?"
      options:
        - { text: "Switching baseurl from mirror.centos.org to vault.centos.org and disabling mirrorlist", correct: true }
        - { text: "Re-signing every package locally", correct: false }
        - { text: "Skipping yum updates entirely", correct: false }
      explanation: "The sed pair comments out mirrorlist and rewrites baseurl from mirror.centos.org to vault.centos.org so post-EOL CentOS 7 still installs packages from the archive."
    - q: "What command is used to enter the Proxmox LXC container space from the host?"
      options:
        - { text: "pct enter <id>", correct: true }
        - { text: "lxc-attach -n <name>", correct: false }
        - { text: "docker exec -it <id> bash", correct: false }
        - { text: "nsenter -t <pid>", correct: false }
      explanation: "`pct enter 112` — the Proxmox-native command for jumping into an LXC container. It works even when systemd inside is broken because it just spawns bash."
    - q: "Which command did the author use to surface the per-cert expiry status during diagnosis?"
      options:
        - { text: "openssl x509 -in *.pem -noout -dates", correct: false }
        - { text: "getcert list | grep -E \"Request ID|status|certificate|expires\"", correct: true }
        - { text: "ipa cert-show all", correct: false }
        - { text: "kinit admin && klist", correct: false }
      explanation: "`getcert list` (from certmonger) gives the canonical view of FreeIPA-tracked certs. Grep narrows to the ID/status/path/expiry lines. ipa-getcert resubmit -i <ID> then drives the renewal."
---

---

### FreeIPA tips and tricks: migrating FreeIPA from CentOS 7 LXC container to Rocky Linux, debugging and expired certificates

Hi! I’m Andrei, [Ænix](http://aenix.io) founder and main developer of the [Cozystack](http://cozystack.io) platform. Recently, I had the task of updating an outdated FreeIPA in a large enterprise. This FreeIPA instance was installed in an LXC container on CentOS 7 and had been non-functional for several months. I was handed a backup of the LXC container for Proxmox, and so the work began.

![image](https://cdn-images-1.medium.com/max/800/1*pdEMbfyOrXygULAqwcZogw.png)

Initial Plan:

1. Restore system functionality.
2. Update certificates.
3. Create a backup.
4. Migrate the backup to a modern system: Fedora or Rocky Linux — since CentOS support has ended.

But as usual in such tasks something went wrong:)

### The challenge of running an LXC container with outdated systemd on a fresh Proxmox

Since the image was in the form of an archived LXC container, upon restoration, it became evident that my Proxmox version was too fresh and didn’t support the container’s version of systemd. The problem was that the new Proxmox works with Cgroups v2, while the outdated container systemd only supports Cgroups v1.

Thus, the first issue I encountered was starting the LXC container. Luckily, only systemd (the init system that launches everything else) wasn’t running in the container, but it was still accessible by launching a standard bash shell.

Well, we now had access to the container, meaning we could attempt to upgrade its operating system. This can be approached similarly to how we often handle chroot environments.

To enter the LXC container space in Proxmox, simply execute the following command:

```
pct enter 112
```

However, unlike a regular chroot, the network namespace in an LXC container is isolated — fortunately, Proxmox had already created all the necessary interfaces, and we just needed to configure them.

Configuring the network:

```
ip addr add 192.168.20.109/16 dev eth0
ip link set eth0 up
ip route add default via 192.168.20.1
```

Since CentOS has reached its EOL, official repositories are no longer available at the usual addresses. We’ll replace them with archive addresses:

```
sed -i 's/mirrorlist/#mirrorlist/g' /etc/yum.repos.d/CentOS-*
sed -i 's|#baseurl=http://mirror.centos.org|baseurl=http://vault.centos.org|g' /etc/yum.repos.d/CentOS-*
```

Now we install a new systemd from backports:

```
curl https://copr.fedorainfracloud.org/coprs/jsynacek/systemd-backports-for-centos-7/repo/epel-7/jsynacek-systemd-backports-for-centos-7-epel-7.repo -o /etc/yum.repos.d/jsynacek-systemd-centos-7.repo
yum update systemd
```

As a result, we have a functioning system with a fresh systemd that works on the new Proxmox. However, we’ve only just managed to launch the container; we still need to tackle the original problem that the client asked us to solve.

### The issue with expired certificates

When diagnosing FreeIPA, the first thing you should check is the status of the system certificates. To do this, simply run the following command:

```
# getcert list | grep -E "Request ID|status|certificate|expires"
```

In the console, the following output was generated:

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

Upon examining the console output, we can see that most of the certificates are expired, which is the primary reason why many FreeIPA services are failing to start. The main issue here is that we need to renew the certificates, but in order to do so, the FreeIPA services need to be running. However, these services can’t start because the certificates have expired, leading to communication failures between them.

Solving this problem is relatively straightforward — we need to change the system time. Given that the LXC container inherits the time from the host, we’ll do this directly on the hypervisor. Additionally, we need to disable the NTP (Network Time Protocol) service to prevent it from automatically synchronizing the time from the internet and reverting it to the correct time.

First, disable NTP. Then, change the date to a time before the certificates expired so that the system believes they are still valid:

```
timedatectl set-ntp 0
date -s '2024–05–03'
```

Next, restart the services:

```
ipactl restart
```

While the services should now start, the output of getcert list likely won’t show updated certificates immediately. You can force the certificate renewal with the command `ipa-getcert resubmit -i`, using the Request ID from the `getcert list` output as the argument. Afterward, run it again to check the status:

```
ipa-getcert resubmit -i 20240227134251
```

Ensure that all certificates transition to the `MONITORING` state. If we don’t complete the certificate renewal before reverting the system time, many services will remain non-functional.

Once you’ve confirmed that all certificates are in the `MONITORING` state, set the system time back to the current time by re-enabling NTP:

```
timedatectl set-ntp 1
```

Great! We’ve now successfully progressed another step and have a fully operational FreeIPA, though an older version.

### Preparing for migration to a new OS and updating the nssdb format

Most FreeIPA certificates are stored in isolated nssdb databases (NSS Shared DB). Starting with CentOS 7, nssdb has changed its database format from the older cert8 format to a new SQL-based cert9 format. While CentOS 7 still supported the old format, this support has been removed in newer systems, so the old database format cannot be used.

In my case, some of the services were still using the old storage format. Given this, you might encounter a similar issue. Below is the solution.

First, locate all these databases (both old and new formats) in the system:

```
find / -name cert8.db
find / -name cert9.db
```

- Files with the following patterns in their names indicate the old format: `cert8.db`, `key3.db`, `secmod.db`.
- Files with these patterns indicate the new SQL format: `cert9.db`, `key4.db`, `pkcs11.txt`.

Then check certificates in the catabase (replace `EXAMPLE-ORG` with your domain).

Old Format:

```
/usr/bin/certutil -d /etc/dirsrv/slapd-EXAMPLE-ORG -L -f /etc/dirsrv/slapd-EXAMPLE-ORG/pwdfile.txt
```

New Format:

```
/usr/bin/certutil -d sql:/etc/dirsrv/slapd-EXAMPLE-ORG -L -f /etc/dirsrv/slapd-EXAMPLE-ORG/pwdfile.txt
```

If the new database format returns an empty list, you’ll need to convert the database to the new format. This can be done with the following command:

```
certutil -W -d sql:/etc/pki/pki-tomcat/alias -f /etc/pki/pki-tomcat/alias/pwdfile.txt -@ /etc/pki/pki-tomcat/alias/pwdfile.txt
```

Important Note: At this stage, not all services may support the new format. However, on a new machine with a newer OS, the components are likely to be updated and will probably use the new format by default.

Now before starting the migration process, ensure that all certificates from the old-format database have been added to the database in the new format. Failure to do this will likely result in errors on the new system, such as:

NSS is built without support of the legacy database(DBM) directory `‘/etc/ipa/nssdb’`.

### Migration to a new OS

Before you start the migration, ensure the system and all packages are updated to the latest versions:

```
yum update
```

It seems we are now ready for the migration to Rocky Linux 8.

Create a backup on the old CentOS 7 system:

```
ipa-backup
```

Copy the backup to the Rocky Linux system. Double-check that the correct FQDN and IP address are recorded in `/etc/hosts`.

Then start the data restoration process from our backup:

```
ipa-restore -v /var/lib/ipa/backup/ipa-full-2024–07–03–23–24–04/
```

Due to differences in formats across the OS versions, we encounter a problem with a missing file `/var/lib/ipa/auth_backup/authselect.backup`. You can generate it by running this command during the process (it saves the settings of the current authselect profile to a file):

```
authselect current — raw > /var/lib/ipa/auth_backup/authselect.backup
```

After that the restoration process crashes during the FreeIPA upgrade phase after running:

```
ipa-server-upgrade
```

After checking the logs, you might find that `pki-tomcatd@pki-tomcat.service.d`, which starts the CA listener for FreeIPA responsible for issuing certificates, is not starting.

Check logs with:

```
journalctl -u pki-tomcatd@pki-tomcat.service.d
```

In some cases, it can be very useful to study the debug log of CA:

```
tail -f /var/log/pki/pki-tomcat/ca/debug
```

By studying the logs in detail, you may find file access errors in `/etc/sysconfig/pki-tomcat`. It seems the backup restoration logic did not work correctly, so let’s fix it manually:

```
sudo chown pkiuser:pkiuser /etc/sysconfig/pki-tomcat
sudo chown -R pkiuser:pkiuser /etc/pki/pki-tomcat/alias/
```

It is also advisable to disable SELinux temporarily during the restoration process.

Another problem is Rocky Linux 8 has a newer Tomcat version than CentOS 7, and the config format has significantly changed. The old `/etc/pki/pki-tomcat/server.xml` restored from backup is incompatible with the updated Tomcat.

You can get a new, correctly formatted file by initializing FreeIPA with the same parameters using this command:

```
ipa-server-install
```

Do this on a separate VM, then copy the generated `server.xml` to the VM where you’re restoring the backup.

Once the manual adjustments are done, restart the upgrade process:

```
ipa-server-upgrade -v
```

Done, FreeIPA has been successfully restored and updated to the latest version.

### Checking certificates on the new server

Verify the certificates by running the command once again on the new machine:

```
getcert list | grep -E “Request ID|status|certificate|expires”
```

We see that some of them are stuck in the state `NEWLY_ADDED_NEED_KEYINFO_READ_PIN`. This means the certificates were just added and require a PIN — strange behavior, in my opinion, but okay, we’ll chalk it up to the imperfections of the backup restoration script.

You can specify the necessary PIN with the following command:

```
ipa-getcert start-tracking -i 20240703234954 -P “$(cat /etc/pki/pki-tomcat/alias/pwdfile.txt)”
```

`20240703234954` is the Request ID obtained from the output of the getcert list command we ran earlier. Pay close attention to the certificate location and specify the correct password file from the same store.

You need to ensure that all certificates transition to the `MONITORING` state. If you see statuses such as `CA_UNREACHABLE`, you need to investigate why the CA listener is not working. To do this, examine the logs:

```
journalctl -u pki-tomcatd@pki-tomcat.service.d
tail -f /var/log/pki/pki-tomcat/ca/debug
```

### Let’s Summarize

If you encounter issues with certificates, finding a solution is almost always related to the steps described in this article.

General action plan:

- Check Tomcat and the CA service it starts.
- Check the status of certificate requests using getcert list.
- Reorder certificates using ipa-getcert resubmit or start-tracking.

### Additional Recommendations

The operation of FreeIPA depends on the certificates listed in getcert list. Under normal circumstances, this command should return all certificates in the MONITORING state. If something goes wrong, consult the tips in this article. Most often, the problem lies with the CA service that signs these certificates.

Some of my unformatted notes can be found [in this gist](https://gist.github.com/kvaps/d16fe862da99909d78030443916a0a4a).

And one more important point: it is highly advisable to set up monitoring that checks the output of this command.

By [Timur Tukaev](https://medium.com/@tym83) on [August 1, 2024](https://medium.com/p/b8b923499b96).

[Canonical link](https://medium.com/@tym83/freeipa-tips-and-tricks-migrating-freeipa-from-centos-7-lxc-container-to-rocky-linux-debugging-b8b923499b96)

Exported from [Medium](https://medium.com) on May 11, 2026.
