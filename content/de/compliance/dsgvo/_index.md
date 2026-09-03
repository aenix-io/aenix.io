---
title: "DSGVO und die Ænix-Plattformen"
description: "Welche Maßnahmen nach Art. 32 DSGVO die Aenix-Plattformen liefern — Datenhaltung, Verschlüsselung, Zugriffskontrolle, Trennung — und welche bei Ihnen bleiben."
page_type: "solution-landing"
language: "de"
quick_facts_style: "rows"
faq_style: "rows"
primary_keyword: "dsgvo kubernetes plattform"
secondary_keywords: ["artikel 32 technische maßnahmen kubernetes", "dsgvo datenhaltung self-hosted cloud", "recht auf löschung backups kubernetes", "drittlandtransfer kapitel v cloud"]
hreflang_en: /compliance/gdpr/
related_pages:
  - /de/compliance/pci-dss/
  - /de/compliance/dora/
  - /de/loesungen/data-sovereignty/
  - /de/produkte/private-cloud-platform/
  - /de/branchen/gesundheitswesen/
direct_answer: |
  **Personenbezogene Daten auf einer Ænix-Plattform bleiben dort, wo Sie sie hinlegen. Die Plattformen laufen auf Ihrer eigenen Hardware in einem Rechenzentrum Ihrer Wahl: keine Control Plane in fremder Cloud, kein Anbieterkonto, kein Telemetriekanal, der für den Betrieb erforderlich wäre. Darüber hinaus liefern sie die Maßnahmen, nach denen Art. 32 DSGVO fragt — Verschlüsselung bei der Übertragung und für Backups, zentrale Identität über Keycloak, Tenant-Isolierung durch Cilium-Netzwerk-Policies, Audit-Logging, Backup und Wiederherstellung. Einige Maßnahmen sind verfügbar, aber deaktiviert, allen voran die Volume-Verschlüsselung im Ruhezustand; diese Seite markiert jede davon. Compliance selbst liegt bei der Organisation, die die Daten hält: warum sie sie hält, auf welcher Rechtsgrundlage, wie lange. Eine Plattform liefert Maßnahmen und macht sie nachweisbar — Aenix behauptet nicht, dass irgendeine Konfiguration eine Aufsichtsbehörde zufriedenstellt.**
quick_facts:
  - label: "Datenhaltung"
    value: "Ihre Hardware, Ihr Rechenzentrum. Keine Anbieter-Control-Plane, kein dauerhafter Anbieterzugriff, keine Telemetrie als Betriebsvoraussetzung."
  - label: "Standardmäßig verschlüsselt"
    value: "Backups (Velero mit kopia-Uploader); Kubernetes-Secrets in etcd, sofern der API-Server mit --encryption-provider-config läuft."
  - label: "Opt-in-Verschlüsselung"
    value: "Volume-Verschlüsselung im Ruhezustand über LINSTOR und LUKS — eine StorageClass-Entscheidung, die ins Design gehört."
  - label: "Zugriffskontrolle"
    value: "Keycloak-OIDC-Single-Sign-on (nicht der Default), tenant-begrenztes RBAC, kein `get secrets` in der Tenant-Rolle."
  - label: "Trennung"
    value: "Cilium-Netzwerk-Policies weisen Cross-Tenant-Verkehr ab dem Anlegen ab — in einer Minute prüfbar und nicht dasselbe wie Trennung der Verarbeitung."
  - label: "Größte Lücke"
    value: "Integritätsüberwachung. Weder IDS noch Dateiintegritäts- oder Änderungserkennung werden mitgeliefert."
  - label: "Zertifizierung"
    value: "Keine. Eine DSGVO-Zertifizierung für eine Plattform existiert nicht, und Aenix hält weder ISO 27001 noch SOC 2."
faq:
  - q: "Ist die Aenix-Plattform DSGVO-konform?"
    a: "Die Frage passt nicht auf Infrastruktur. Eine Organisation ist konform; eine Plattform liefert Maßnahmen. Die Aenix-Plattformen liefern Verschlüsselung, Zugriffskontrolle, Tenant-Trennung, Audit-Logging, Backup und Wiederherstellung sowie vollständige Kontrolle darüber, wo Daten physisch liegen. Rechtsgrundlage, Verzeichnis von Verarbeitungstätigkeiten, Datenschutz-Folgenabschätzungen und Meldungen von Datenschutzverletzungen bleiben bei demjenigen, der über Zwecke und Mittel der Verarbeitung entscheidet."
  - q: "Beschreiben diese Maßnahmen Cozystack oder die Aenix-Plattformen?"
    a: "Beides, denn es ist dieselbe Software. Die Aenix Public Cloud Platform, die Private Cloud Platform und die AI Platform sind Distributionen von Cozystack, dem Apache-2.0-lizenzierten CNCF-Projekt, das Aenix entwickelt und pflegt; die Beobachtungen auf dieser Seite stammen von einem Cozystack-v1.6-Referenzcluster. Mehrere Einstellungen — insbesondere der etcd-Verschlüsselungsprovider — stammen aus der zum Installationszeitpunkt angewendeten Talos-Maschinenkonfiguration und nicht aus der Software; prüfen Sie sie auf Ihrem eigenen Cluster."
  - q: "Vermeidet der Eigenbetrieb Probleme mit Drittlandtransfers?"
    a: "Er nimmt die Plattform selbst aus der Kapitel-V-Prüfung: Die Software läuft auf Ihrer Hardware und braucht keinen Anbieterzugriff. Die Frage ist damit nicht geschlossen. Nach Lesart des EDSA ist Fernzugriff aus einem Drittland selbst eine Übermittlung — Support-Engineers, Personal eines Integrators, Administratoren außerhalb der Geschäftszeiten und alles, was Sie zur Beobachtbarkeit anbinden, zählen weiterhin. Ob Ihre eigenen Anwendungen und Integrationen Daten verlagern, ist eine separate Prüfung."
  - q: "Sind personenbezogene Daten standardmäßig ruhend verschlüsselt?"
    a: "Für den Speicher, in dem personenbezogene Daten tatsächlich liegen — die Volumes hinter Datenbanken und virtuellen Maschinen — nein. Volume-Verschlüsselung ist pro StorageClass optional und gehört ins Design, nicht in eine spätere Änderung. Backups sind standardmäßig verschlüsselt. Kubernetes-Secrets sind in etcd verschlüsselt, wenn der API-Server mit --encryption-provider-config läuft; das stammt aus der Talos-Maschinenkonfiguration, und Secrets enthalten Zugangsdaten, nicht die personenbezogenen Daten, die Ihr Verarbeitungsverzeichnis beschreibt."
  - q: "Entsteht durch den Eigenbetrieb ein Auftragsverarbeiter?"
    a: "Quelloffene Software auf eigener Hardware zu betreiben fügt der Verarbeitung keinen Dritten hinzu: Es gibt keinen Dienst, kein Konto und keine Daten, die Ihre Infrastruktur verlassen — also niemanden, der nach Art. 28 zu bestellen wäre. Ihre eigene Rolle bleibt unverändert: Verantwortlicher für Daten, über deren Zwecke und Mittel Sie entscheiden, Auftragsverarbeiter nur dort, wo Sie für einen anderen Verantwortlichen hosten. Beauftragen Sie Aenix oder einen Integrator mit dem Betrieb, ist das ein Auftragsverarbeitungs- oder Unterauftragsverhältnis und braucht einen Vertrag nach Art. 28."
  - q: "Wie behandeln wir Löschung, wenn die Daten auch in Backups liegen?"
    a: "Backups existieren gerade dafür, Löschungen rückgängig machen zu können; Löschung daraus ist also kein technischer Schalter. Die gängige Position — von mehreren Aufsichtsbehörden als gangbar beschrieben, ohne EWR-weit abschließend geklärt zu sein — ist dokumentierte Aufbewahrung: festlegen, wie lange Backups leben, die Daten zwischenzeitlich außer Gebrauch setzen, sicherstellen, dass gelöschte Daten innerhalb dieses Fensters ausaltern, und sie bei einer Wiederherstellung nicht selektiv wieder einspielen. Die Plattform erlaubt, die Backup-Aufbewahrung bewusst zu setzen und Backups auf von Ihnen kontrollierten Speicher zu richten; Begründung und Position bleiben Ihre."
---

**Personenbezogene Daten auf einer Ænix-Plattform bleiben dort, wo Sie sie hinlegen.** Die Plattformen basieren auf Kubernetes, KubeVirt und Talos Linux und laufen auf Ihrer eigenen Hardware: keine Control Plane in fremder Cloud, kein Anbieterkonto, kein Dienst, für den man sich registriert. Darüber hinaus bringen sie die Maßnahmen mit, nach denen Art. 32 fragt — Verschlüsselung bei der Übertragung und für Backups, zentrale Identität, durch Netzwerk-Policies erzwungene Tenant-Isolierung, Audit-Logging, Backup und Wiederherstellung.

Das ist eine starke Ausgangslage, und diese Seite geht sie Maßnahme für Maßnahme durch. Sie markiert außerdem die Stellen, an denen eine Kontrolle zwar verfügbar, aber deaktiviert ist, und die zwei bis drei Fragen, die ein Datenschutzbeauftragter stellen wird und die keine Infrastruktur beantworten kann. Besser hier als im Termin.

<div class="cta-row">
  <a class="cta-primary" href="/de/kontakt/">Mit einem Engineer sprechen</a>
  <a class="cta-secondary" href="/de/compliance/">Alle Compliance-Nachweise →</a>
</div>

---

## Eine Einordnung vorweg

Compliance liegt bei der Organisation, die die Daten hält — warum sie sie hält, auf welcher Rechtsgrundlage, wie lange. Eine Plattform liefert Maßnahmen und macht sie nachweisbar. Die brauchbare Antwort auf „ist diese Plattform DSGVO-konform" ist das, was unten steht, und kein Ja, das der ersten Nachfrage nicht standhält.

**Und eine Anmerkung zur Herkunft.** Die Beobachtungen hier stammen von **Cozystack v1.6**, der quelloffenen, Apache-2.0-lizenzierten, bei der CNCF gehosteten Engine, die Ænix entwickelt und pflegt und von der alle drei Ænix-Plattformen Distributionen sind. Es gibt keinen separaten geschlossenen Build mit abweichendem Verhalten — deshalb übertragen sich die Maßnahmen unmittelbar. Was Ænix um die Engine herum ergänzt — die Talos-Maschinenkonfiguration, die Referenzarchitektur, den Betrieb —, ist der Ort, aus dem mehrere der folgenden Einstellungen tatsächlich stammen; jede davon ist gekennzeichnet.

---

## Datenhaltung: wo die Daten physisch liegen

Die Datenhaltung ist meist die erste Frage und die am leichtesten gut zu beantwortende.

Die Plattform installiert auf Ihrer eigenen Hardware, in einem Rechenzentrum Ihrer Wahl. Es gibt keine Control Plane in fremder Cloud, keinen Anbieter, der dauerhaften Zugriff braucht, damit die Plattform funktioniert, und keinen Telemetriekanal zu einem Anbieter als Betriebsvoraussetzung. Für Kapitel V — Übermittlungen personenbezogener Daten an Drittländer — entfällt damit das größte Einzelelement der Prüfung.

Geschlossen ist sie damit nicht. Nach Lesart des EDSA ist Fernzugriff aus einem Drittland selbst eine Übermittlung; Support-Engineers, Personal eines Integrators, Administratoren außerhalb der Geschäftszeiten und alles, was Sie zur Beobachtbarkeit anbinden, zählen also weiterhin. Die ausgehenden Pfade, die das Cluster tatsächlich nutzt — Container-Registries, Zertifizierungsstellen, Zeitquellen und Update-Kanäle —, lohnt es sich einmal aufzulisten, denn sie sagen, wohin die Umgebung reicht, auch wenn die personenbezogenen Daten es nicht tun. Wenn Sie in mehreren Jurisdiktionen arbeiten, erlauben Tenants und Knotenplatzierung, die Verarbeitung in einer davon zu halten, statt sie über alle zu verteilen.

Die architektonische Fassung dieser Diskussion — kundenkontrollierte Schlüssel, jurisdiktionsgebundene Datenhaltung, Aufsichtszugang — steht unter [Datensouveränität](/de/loesungen/data-sovereignty/).

---

<div class="band-fullbleed band-fullbleed--tint">
<div class="band-fullbleed__inner">

## Welche Maßnahmen nach Art. 32 die Plattform abdeckt

### Verschlüsselung personenbezogener Daten

Drei Ebenen, die sich unterschiedlich verhalten.

**Kubernetes-Secrets** sind in etcd verschlüsselt, sofern der API-Server mit `--encryption-provider-config` läuft. Diese Einstellung stammt aus der zum Installationszeitpunkt gelieferten Talos-Maschinenkonfiguration — bestätigen Sie sie auf Ihrem eigenen Cluster.

**Volumes** — die Platten hinter Datenbanken und virtuellen Maschinen, wo personenbezogene Daten tatsächlich liegen — sind nicht verschlüsselt, solange Sie es nicht verlangen. LINSTOR unterstützt Verschlüsselung im Ruhezustand mit LUKS, aktiviert über eine gesetzte Passphrase und eine StorageClass mit LUKS-Layer. Entscheiden Sie es im Design: Ein befülltes Volume nachträglich umzustellen bedeutet, die Daten zu migrieren.

Zwei Konsequenzen gehören in dieselbe Entscheidung, weil sie gegen Art. 32 Abs. 1 lit. b und c sprechen und nicht dafür. Die Passphrase ist ein einzelnes geteiltes Geheimnis ohne Rotationsverfahren, ohne geteiltes Wissen und ohne Vier-Augen-Prinzip — Schlüsselverwaltung ist also ein Prozess, den Sie darum herum bauen. Und sie muss nach jedem Neustart des LINSTOR-Controllers von Hand eingegeben werden; verschlüsselte Volumes kommen nicht von selbst zurück, was einen unbeaufsichtigten Neustart zu einem Verfügbarkeitsereignis macht.

**Backups** sind standardmäßig verschlüsselt. Velero nutzt den kopia-Uploader; Backup-Daten werden unter einem im Cluster gehaltenen Repository-Schlüssel in den Objektspeicher geschrieben.

Für personenbezogene Daten der Identitätsschicht ergänzte v1.6 einen optionalen Verschlüsselungsproxy vor der Keycloak-Datenbank, der Spaltenverschlüsselung mit statischem Schlüssel oder Vault Transit bietet. Er ist aus, bis Sie ihn aktivieren.

### Vertraulichkeit und Zugriffskontrolle

Die Authentifizierung lässt sich über OIDC in Keycloak zentralisieren, womit Eintritte, Austritte, Mehrfaktor-Authentifizierung und Passwort-Policy an einer Stelle liegen statt über kubeconfig-Dateien verstreut. Das ist nicht der Default — ein frisches Cluster authentifiziert sich mit einem Cluster-Credential, einem geteilten Konto, ungeeignet für alles, was personenbezogene Daten trägt. Aktivieren Sie OIDC, bevor die Umgebung echte Daten trägt.

Die Autorisierung ist tenant-begrenzt, und strenger, als Teams erwarten: Ein Tenant-Nutzer kann über die Plattform-API Datenbanken und virtuelle Maschinen anlegen, aber keine rohen Kubernetes-Secrets lesen. Prüfen statt glauben — als Tenant-Nutzer, gegen den Tenant-Namespace:

```bash
kubectl auth can-i --list -n tenant-a
kubectl auth can-i get secrets -n tenant-a
```

Das zweite Kommando antwortet `no`. Lesen Sie das als Least Privilege an der API-Oberfläche, nicht als Vertraulichkeitsgrenze — wer in einem Namespace Workloads planen darf, kann dessen Secrets in einen Pod mounten; die Grenze hält also nur so weit, wie Sie auch das Anlegen von Workloads beschränken.

### Trennung der Verarbeitung

Tenants sind auf Netzwerkebene durch Cilium-Policies voneinander isoliert, die mit dem Tenant entstehen, und diese Isolierung ist erzwungen, nicht erklärt. Sie können sie in einer Minute prüfen — einen Pod in einem Tenant starten und ihn aus einem anderen zu erreichen versuchen, mit einem Test aus demselben Tenant als Positivkontrolle: Der Cross-Tenant-Test liefert `000`, der aus demselben Tenant `200`. Die Kommandos stehen auf der [PCI-DSS-Seite](/de/compliance/pci-dss/).

Lesen Sie es als das, was es ist. Netzwerktrennung ist nicht Trennung der Verarbeitung in dem Sinn, den ein Datenschutzbeauftragter meint. Control Plane, etcd, LINSTOR und die Identitätsschicht sind geteilte Dienste, Plattformadministratoren sehen über alle Tenants hinweg, und plattformverwaltete Backups landen in einem einzigen Bucket `cozy-backups` in `tenant-root`, getrennt nach Objektpfad statt nach Credentials oder Schlüssel. Der ausgehende Verkehr eines Tenants ins Internet ist ebenfalls nicht standardmäßig beschränkt, ein Exfiltrationspfad bleibt also offen, bis Sie eine `SecurityGroup` oder eine Egress-Allow-Liste ergänzen.

Wenn Sie personenbezogene Daten für mehrere Verantwortliche verarbeiten, behandeln Sie den Tenant als starke erste Grenze und dokumentieren Sie die geteilten Komponenten und die Administratoren, die sie überschreiten — genau danach wird ein Datenschutzbeauftragter fragen.

### Integrität der Verarbeitungssysteme

Art. 32 Abs. 1 lit. b nennt die Integrität neben Vertraulichkeit, Verfügbarkeit und Belastbarkeit — und hier ist die Lücke am größten. Unveränderliche Knoten-Images und auf Digests gepinnte Plattformkomponenten erschweren unbemerkte Drift, und das Audit-Log hält fest, wer über die API was geändert hat. Aber weder Intrusion Detection noch Dateiintegritätsüberwachung noch ein Änderungserkennungsmechanismus werden mitgeliefert. Dem Betrieb einer eigenen Lösung steht nichts entgegen; verlangt Ihre Risikoanalyse das, ist es eine Ergänzung, die Sie vornehmen, keine Kontrolle, die Sie erben.

### Fähigkeit zur Wiederherstellung nach einem Vorfall

Art. 32 Abs. 1 lit. c fragt nach der Fähigkeit, den Zugang zu personenbezogenen Daten rasch wiederherzustellen. Velero wird für geplante Backups, Volume-Snapshots und Clusterzustand mitgeliefert, und Wiederherstellungen sollte man proben statt annehmen — ein Backup, das nie zurückgespielt wurde, ist eine Hoffnung, keine Maßnahme. Die [DORA-Seite](/de/compliance/dora/) behandelt, wo Backups liegen sollten und warum der Standardort für eine regulierte Umgebung nicht die richtige Antwort ist.

### Regelmäßige Überprüfung der Maßnahmen

Art. 32 Abs. 1 lit. d verlangt ein Verfahren zur Überprüfung und Bewertung der Wirksamkeit. Die [CIS-Benchmark-Seite](/de/compliance/cis-benchmark/) zeigt einen solchen Test gegen ein laufendes Cluster, mit den Fehlschlägen sortiert in echte Abweichungen und Artefakte der Architektur. Nichts hindert Sie daran, ihn nach eigenem Plan auszuführen; das Manifest ist dort veröffentlicht.

</div>
</div>

---

## Das Recht auf Löschung, und wo es unangenehm wird

Beim Löschanspruch treffen Infrastruktur und Recht unbequem aufeinander — hier lohnt Konkretheit mehr als Beruhigung.

Eine Datenbankzeile zu löschen ist einfach. Sie aus **Backups** zu löschen nicht: Backups existieren gerade dafür, Löschungen rückgängig machen zu können. Die gängige Position — von mehreren Aufsichtsbehörden als gangbar beschrieben, ohne EWR-weit abschließend geklärt zu sein — ist dokumentierte Aufbewahrung: festlegen, wie lange Backups leben, die Daten zwischenzeitlich außer Gebrauch setzen, sicherstellen, dass gelöschte Daten innerhalb dieses Fensters ausaltern, und sie bei einer Wiederherstellung nicht selektiv wieder einspielen. Halten Sie die Begründung fest, sagen Sie der betroffenen Person, wann die Löschung abgeschlossen sein wird, und gleichen Sie die Position mit der Orientierungshilfe Ihrer eigenen Aufsichtsbehörde ab, nicht mit dieser Seite. Die Plattform löst das nicht für Sie — aber sie erlaubt, die Backup-Aufbewahrung bewusst zu setzen und Backups auf von Ihnen kontrollierten Speicher zu richten.

**Audit-Logs** erzeugen eine zweite Variante desselben Problems. Beginnen Sie bei der Tatsache, dass das Audit-Log bereits ein Speicher personenbezogener Daten ist: Auf der Standardstufe `level: Metadata` hält es Benutzernamen, Gruppen und Quell-IP-Adressen fest — personenbezogene Daten über Ihre Administratoren, unabhängig davon, was die Requests enthielten. Es braucht einen Eintrag in Ihrem Verzeichnis nach Art. 30, eine Aufbewahrungsfrist und eine eigene Zugriffsregel; die Standardaufbewahrung auf dem untersuchten Cluster beträgt dreißig Tage.

Die Falle liegt eine Ebene höher. Die Policy auf `RequestResponse` zu heben, um ein anderes Rahmenwerk zu bedienen, schreibt Request-Bodies — Secret-Werte und alle personenbezogenen Daten, die Ihre Nutzer in Annotationen ablegen — in dieselbe Datei. Teilen Sie die Policy stattdessen nach Ressource auf: `RequestResponse` dort, wo die Änderung selbst der Punkt ist, `Metadata` für Secrets und alles, was personenbezogene Daten trägt.

---

## Was bei Ihnen bleibt

Kein Infrastrukturprodukt liefert irgendetwas davon: die Rechtsgrundlage der Verarbeitung, das Verzeichnis von Verarbeitungstätigkeiten nach Art. 30, Datenschutz-Folgenabschätzungen, wo Art. 35 sie verlangt, die Meldung einer Verletzung des Schutzes personenbezogener Daten an die Aufsichtsbehörde binnen 72 Stunden nach Art. 33, die Beantwortung von Betroffenenanfragen, die Benennung eines Datenschutzbeauftragten, wo Art. 37 sie verlangt, und den Vertrag nach Art. 28 mit jedem, der in Ihrem Auftrag verarbeitet.

Die Plattform ist ein Werkzeug. Die Pflichten liegen bei demjenigen, der über Zwecke und Mittel der Verarbeitung entscheidet.

---

## Wo das neben den anderen Rahmenwerken steht

Finanzunternehmen lesen dies parallel zu [DORA](/de/compliance/dora/); wer Kartendaten verarbeitet, parallel zu [PCI DSS](/de/compliance/pci-dss/), wo dieselbe Audit-Policy-Entscheidung unter umgekehrtem Druck auftaucht. Wesentliche und wichtige Einrichtungen unter NIS2 finden das aufsichtsgerichtete Programm auf der [NIS2-Lösungsseite](/de/loesungen/nis2-compliance/). Die Überschneidung ist real und gewollt: eine Architektur, mehrere Regime, die sie unterschiedlich lesen.

<div class="cta-row">
  <a class="cta-primary" href="/de/kontakt/">Mit einem Engineer sprechen</a>
  <a class="cta-secondary" href="/de/loesungen/data-sovereignty/">Datensouveränität →</a>
</div>

---

## Hinweise

Diese Seite beschreibt Cozystack v1.6 — die Engine, aus der die Ænix-Plattformen gebaut sind —, beobachtet auf einem Referenzcluster im August 2026, und ist informatorisch. Sie ist keine Rechtsberatung, kein Assessment und keine Zusicherung, dass irgendeine Konfiguration eine Aufsichtsbehörde zufriedenstellt. Ihre Installation kann abweichen, insbesondere in der Talos-Maschinenkonfiguration, aus der mehrere der oben genannten Einstellungen stammen.
