---
title: "NIS2-Nachweise aus der Ænix-Plattformschicht"
seo_title: "NIS2 Art. 21: Nachweise für die Kubernetes-Plattform"
description: "NIS2 Art. 21 Abs. 2 Buchst. a–j: was die Ænix-Plattformen liefern und was bei Ihnen bleibt, dazu Meldepflichten nach Art. 23 und Lieferkettensicherheit."
page_type: "solution-landing"
language: "de"
quick_facts_style: "rows"
faq_style: "rows"
primary_keyword: "nis2 kubernetes plattform"
secondary_keywords: ["nis2 artikel 21 technische maßnahmen", "nis2 meldepflicht artikel 23 nachweis", "nis2 lieferkettensicherheit open source", "nis2 durchführungsverordnung 2024/2690 cloud"]
hreflang_en: /compliance/nis2/
related_pages:
  - /de/loesungen/nis2-compliance/
  - /de/ressourcen/nis2-compliance-checkliste/
  - /de/compliance/dora/
  - /de/compliance/cis-benchmark/
  - /de/compliance/iso-27001/
  - /de/produkte/private-cloud-platform/
direct_answer: |
  **Diese Seite ist die plattformseitige Hälfte einer NIS2-Diskussion: Für jede der zehn Maßnahmen aus Art. 21 Abs. 2 der Richtlinie (EU) 2022/2555 zeigt sie, was die Ænix-Plattformen liefern, was mitgeliefert, aber erst nach Aktivierung wirksam wird, und was Aufgabe der Einrichtung bleibt. Die Plattform unterstützt Bewältigung von Sicherheitsvorfällen, Betriebskontinuität, Zugriffskontrolle, Verschlüsselung und Schwachstellenmanagement mit konkreten Mechanismen: Netzwerkisolation zwischen Tenants, ein unveränderliches Knoten-Betriebssystem, replizierter Speicher, verschlüsselte Backups, Keycloak-Single-Sign-on mit Multi-Faktor-Authentifizierung, Audit-Logs und Alerting. Sie liefert außerdem die Aufzeichnungen, auf die Frühwarnung und Abschlussbericht nach Art. 23 zurückgreifen. Die Pflicht selbst kann sie nicht übernehmen: NIS2 verpflichtet wesentliche und wichtige Einrichtungen und deren Leitungsorgane (Art. 20), nicht Software. Die Plattformen sind darauf ausgelegt, Architekturen zu unterstützen, die auf NIS2 ausgerichtet sind; Ænix behauptet nicht, eine Plattform sei „NIS2-konform“.**
quick_facts:
  - label: "Was diese Seite ist"
    value: "Plattformseitiger Kontroll-Nachweis. Das Assessment-Engagement liegt auf der Lösungsseite NIS2-Compliance."
  - label: "Rechtsgrundlage"
    value: "Richtlinie (EU) 2022/2555. Die Mitgliedstaaten mussten sie bis 17. Oktober 2024 umsetzen und ab 18. Oktober 2024 anwenden (Art. 41)."
  - label: "Abgebildete Maßnahmen"
    value: "Art. 21 Abs. 2 Buchst. a bis j, jeweils aufgeteilt in plattformseitig geliefert, optional aktivierbar und Verantwortung der Einrichtung."
  - label: "Meldepflichten"
    value: "Art. 23 Abs. 4: Frühwarnung binnen 24 Stunden, Meldung binnen 72 Stunden, Abschlussbericht einen Monat nach der Meldung. Die Plattform liefert Logs, Metriken und Alerts; einstufen und melden muss die Einrichtung."
  - label: "Cloud- und Hosting-Anbieter"
    value: "Anbieter von Cloud-Computing-Diensten, Rechenzentrumsdiensten und verwaltete Dienste stehen in Anhang I; die Durchführungsverordnung (EU) 2024/2690 legt ihre technischen Anforderungen zu Art. 21 Abs. 2 fest."
  - label: "Zertifizierung des Lieferanten"
    value: "Die AENIX s.r.o. ist für ihr ISMS nach ISO/IEC 27001:2022 zertifiziert (Zertifikat Nr. SIC.MS.008.ISO/IEC27001.5719, gültig bis 26. Februar 2027). Die Plattformen selbst sind nicht zertifiziert."
  - label: "Nicht geliefert"
    value: "Governance, Risikoanalyse, Einstufung und Meldung von Vorfällen, Schulung und Personalsicherheit sowie automatisches standortübergreifendes VM-Failover."
faq:
  - q: "Ist die Ænix-Plattform NIS2-konform?"
    a: "Die Frage passt nicht auf eine Plattform. NIS2 verpflichtet wesentliche und wichtige Einrichtungen und macht deren Leitungsorgane nach Art. 20 verantwortlich. Eine Plattform ist Teil der Netz- und Informationssysteme, die diese Einrichtungen absichern. Die Ænix-Plattformen liefern technische Maßnahmen zu mehreren Buchstaben von Art. 21 Abs. 2 und machen sie nachweisbar. Ein NIS2-Zertifikat für Plattformen gibt es nicht, und Ænix beansprucht keines."
  - q: "Welche Maßnahmen aus Art. 21 Abs. 2 deckt die Plattform tatsächlich ab?"
    a: "Am meisten trägt sie zu b) Bewältigung von Sicherheitsvorfällen, c) Aufrechterhaltung des Betriebs, e) Sicherheit bei Wartung und Umgang mit Schwachstellen, h) Kryptografie, i) Zugriffskontrolle und j) Multi-Faktor-Authentifizierung bei. Zu a) Risikoanalyse und f) Bewertung der Wirksamkeit liefert sie Nachweise, aber nicht die Substanz. Die Buchstaben d) Lieferkette und g) Cyberhygiene und Schulungen sind überwiegend organisatorisch. Die Tabelle auf dieser Seite zeigt die Aufteilung Punkt für Punkt."
  - q: "Meldet die Plattform Vorfälle für uns an das CSIRT?"
    a: "Nein. Ob ein Vorfall nach Art. 23 Abs. 3 erheblich ist, und die Meldung an das CSIRT oder die zuständige Behörde entscheidet und verantwortet die Einrichtung. Die Plattform verkürzt den Weg zu dieser Entscheidung: Metriken, Logs, Alerts und das Audit-Log der Kubernetes-API liefern Zeitleiste, Umfang und Indikatoren, die Frühwarnung und Abschlussbericht brauchen — sofern die Aufbewahrung lang genug eingestellt ist, bevor der Vorfall eintritt."
  - q: "Wir sind Hosting- oder Cloud-Anbieter. Gilt NIS2 für uns?"
    a: "Wahrscheinlich, wenn Sie in der EU tätig sind und die Größenschwellen erreichen: Anbieter von Cloud-Computing-Diensten, Rechenzentrumsdiensten und Anbieter verwalteter Dienste stehen in Anhang I. Für sie legt die Durchführungsverordnung (EU) 2024/2690 der Kommission die technischen und methodischen Anforderungen an die Maßnahmen nach Art. 21 Abs. 2 sowie weitere Kriterien für erhebliche Vorfälle fest. Die Einzelheiten bestimmt das nationale Umsetzungsgesetz; klären Sie Ihre Einstufung mit Ihrer Rechtsberatung."
  - q: "Wie gehört Ænix in unsere Lieferkettenbewertung nach Art. 21 Abs. 2 Buchst. d?"
    a: "Wer Cozystack unter Apache 2.0 herunterlädt und betreibt, begründet keine Lieferantenbeziehung. Wer ein Ænix-Abonnement, Support oder Dienstleistungen kauft, schon — dann ist Ænix ein direkter Lieferant, den Sie nach Art. 21 Abs. 3 bewerten. Hilfreiche Angaben: Die AENIX s.r.o. ist für ihr ISMS nach ISO/IEC 27001:2022 zertifiziert, Quellcode und Sicherheitshinweise der Engine sind öffentlich, und Fernzugriff auf Ihre Cluster erfolgt nur mit Ihrer Freigabe."
  - q: "Worin unterscheidet sich diese Seite von der Lösungsseite NIS2-Compliance?"
    a: "Sie beantworten verschiedene Fragen. Die Lösungsseite beschreibt ein Readiness-Engagement zum Festpreis, das Ihre Organisation und Architektur gegen NIS2 abbildet und einen Maßnahmenplan erstellt. Diese Seite beschreibt, was die Infrastruktur selbst leistet und wo ihre Grenzen liegen. Die Lösungsseite für das Programm, diese Seite für die Nachweise, auf die es zurückgreift."
---

**NIS2 verlangt von wesentlichen und wichtigen Einrichtungen „geeignete und verhältnismäßige technische, operative und organisatorische Maßnahmen“. Einen guten Teil der technischen kann Infrastruktur tragen. Die operativen und organisatorischen kann sie nicht tragen, und kein Plattformanbieter sollte Ihnen etwas anderes erzählen.** Diese Seite zeigt die Aufteilung, Maßnahme für Maßnahme.

---

## Was diese Seite ist und was nicht

Dies ist die **plattformseitige** Hälfte. Die organisatorische Hälfte ist ein Engagement zum Festpreis, beschrieben auf der Seite **[NIS2-Compliance](/de/loesungen/nis2-compliance/)**: Einstufung Ihrer Einrichtung, Bestandsaufnahme Ihrer Kontrollen, Gap-Analyse und Maßnahmenplan. Die kostenlose **[NIS2-Compliance-Checkliste](/de/ressourcen/nis2-compliance-checkliste/)** ist die Kurzfassung.

**Zur Herkunft.** Die folgenden Mechanismen sind die von **Cozystack v1.6**, der Open-Source-Engine unter Apache 2.0 bei der CNCF, die Ænix entwickelt hat und gemeinsam mit Maintainern anderer Unternehmen pflegt. Auf ihr bauen die Ænix Public Cloud Platform, die Private Cloud Platform und die AI Platform auf. Es sind dieselben Mechanismen, die auf den Seiten [PCI DSS](/de/compliance/pci-dss/), [DSGVO](/de/compliance/dsgvo/), [DORA](/de/compliance/dora/) und [CIS Benchmark](/de/compliance/cis-benchmark/) gemessen wurden; dort stehen auch die Prüfkommandos und Testläufe. Die proprietären Ænix-Module (WHMCS-Integration, Abrechnungs- und Portalkomponenten) laufen oberhalb der Engine und ändern an diesen Kontrollen nichts.

**Und wer die Pflicht trägt.** Die Richtlinie (EU) 2022/2555 musste bis 17. Oktober 2024 in nationales Recht umgesetzt werden (Art. 41). Sie verpflichtet wesentliche und wichtige Einrichtungen in den Sektoren der Anhänge I und II. Anbieter von Cloud-Computing-Diensten, Rechenzentrumsdiensten und Anbieter verwalteter Dienste gehören dazu, in Anhang I. Für sie legt die Durchführungsverordnung (EU) 2024/2690 der Kommission die technischen und methodischen Anforderungen jeder Maßnahme nach Art. 21 Abs. 2 fest. Software fällt nicht in den Anwendungsbereich. Die Einrichtungen, die sie betreiben, schon.

---

<div class="band-fullbleed band-fullbleed--tint">
<div class="band-fullbleed__inner">

## Art. 21 Abs. 2, Punkt für Punkt

Art. 21 Abs. 2 nennt zehn Maßnahmen, die die Maßnahmen nach Abs. 1 „zumindest“ umfassen müssen. Hier stehen sie in der Reihenfolge der Richtlinie. **Geliefert** heißt: auf einer Standardinstallation aktiv. **Optional** heißt: wird mitgeliefert, Sie schalten es ein. **Ihre Aufgabe** heißt: keine Infrastruktur kann das für Sie erledigen.

| Art. 21 Abs. 2 | Maßnahme (Wortlaut gekürzt) | Was die Plattform liefert | Was bei Ihnen bleibt |
|---|---|---|---|
| a) | Konzepte für Risikoanalyse und Sicherheit für Informationssysteme | **Nachweise, keine Konzepte.** Deklarierter Zustand als Manifeste: ein genaues, versioniertes Inventar von Tenants, Services und ihrer Konfiguration. | Die Risikoanalyse, das Sicherheitskonzept und seine Billigung durch das Leitungsorgan. |
| b) | Bewältigung von Sicherheitsvorfällen | **Geliefert:** Metriken, Log-Aggregation, Alerting und Dashboards; Audit-Log der Kubernetes-API nach einer von Ihnen vorgegebenen Policy. | Erkennungsregeln für Ihre Bedrohungen, Bereitschaft, Triage, Einstufung und das Reaktions-Playbook. |
| c) | Aufrechterhaltung des Betriebs, Backup-Management, Wiederherstellung nach einem Notfall, Krisenmanagement | **Geliefert:** LINSTOR/DRBD-replizierter Speicher, wo die StorageClass es verlangt, Live-Migration, standardmäßig verschlüsselte Velero-Backups, standortübergreifend gestreckte Cluster. **Nicht geliefert:** automatisches standortübergreifendes VM-Failover. | Backup-Ziel außerhalb des geschützten Clusters, Wiederherstellungsübungen gegen RTO/RPO, Notfall- und Krisenplan. |
| d) | Sicherheit der Lieferkette | **Geliefert:** offener Quellcode unter Apache 2.0, öffentliche Sicherheitshinweise, Komponenten auf unveränderliche Image-Digests festgelegt. | Lieferanteninventar und -bewertung nach Abs. 3, einschließlich Ænix, wenn Sie bei Ænix kaufen, sowie Ihrer Hardware- und Rechenzentrumslieferanten. |
| e) | Sicherheit bei Erwerb, Entwicklung und Wartung, einschließlich Umgang mit und Offenlegung von Schwachstellen | **Geliefert:** unveränderliche Talos-Linux-Knoten ohne SSH und ohne Shell; Releases mit Changelogs, die jede aktualisierte Komponente nennen; offen veröffentlichte Sicherheitshinweise. | Ihr Update-Rhythmus, Schwachstellenmanagement für eigene Workloads und Images, Ihr Offenlegungsprozess. |
| f) | Konzepte und Verfahren zur Bewertung der Wirksamkeit | **Nachweise:** reproduzierbare Testläufe, etwa der veröffentlichte kube-bench-Lauf und die Konformitätsläufe, wiederholbar auf Ihrem eigenen Cluster. | Das Bewertungsprogramm, interne Audits und deren Zeitplan. |
| g) | Grundlegende Cyberhygiene und Schulungen | **Teilweise geliefert:** privilegierte Workloads werden bei der Zulassung abgewiesen, Tenants sind standardmäßig isoliert. | Hygienepraktiken und Schulungsprogramm, einschließlich der Schulung des Leitungsorgans nach Art. 20 Abs. 2. |
| h) | Kryptografie und gegebenenfalls Verschlüsselung | **Geliefert:** TLS für veröffentlichte Services über cert-manager, verschlüsselte Backups, Kubernetes-Secrets verschlüsselt in etcd, wenn der API-Server mit einem Encryption Provider läuft. **Optional:** LUKS-Volume-Verschlüsselung, transparente Cilium-Verschlüsselung (WireGuard oder IPsec) für Ost-West-Verkehr. | Das Kryptografiekonzept, die Schlüsselverwahrung und die Entscheidung, welche Datenklassen Volume-Verschlüsselung brauchen. |
| i) | Sicherheit des Personals, Konzepte für die Zugriffskontrolle, Management von Anlagen | **Geliefert:** Tenant-bezogenes RBAC; Cilium-Netzwerkrichtlinien, die Tenants bei der Anlage isolieren. **Optional:** Keycloak-SSO, angebunden an Ihren Verzeichnisdienst. | Eintritts-, Wechsel- und Austrittsprozess, Berechtigungsreviews, das Anlageninventar über die Plattform hinaus. |
| j) | Multi-Faktor- oder kontinuierliche Authentifizierung; gesicherte Kommunikation | **Optional:** MFA über Keycloak, sobald die OIDC-Integration bei der Installation aktiviert ist; eine Standardinstallation authentifiziert mit einem Cluster-Credential. | MFA für jeden Administrator durchsetzen, gesicherte Sprach-, Video- und Notfallkommunikation. |

</div>
</div>

Zwei Punkte der Tabelle brauchen mehr als eine Zelle.

**Buchstabe c und Failover.** Die Plattform hält Daten durch Replikation verfügbar und verschiebt Workloads bei Wartung ohne Ausfallzeit. Sie übernimmt nach einem ungeplanten Ausfall kein automatisches Failover virtueller Maschinen zwischen Standorten. Knoten-Health-Handling und Restart-Policies existieren und lassen sich zu einem Failover-Verfahren kombinieren, aber das ist Konfigurations- und Übungsarbeit. Siehe [Disaster Recovery](/de/loesungen/disaster-recovery/). Die zweite Lücke ist der Ablageort der Backups. Plattformverwaltete Backups landen standardmäßig in einem gemeinsamen Bucket innerhalb des Clusters, den sie schützen. Richten Sie die BackupClass auf Speicher außerhalb des Clusters mit eigenen Zugangsdaten und halten Sie das im Backup-Konzept fest.

**Buchstabe j und die Standardinstallation.** Single Sign-on und MFA sind verfügbar, aber nicht standardmäßig aktiv. Aktivieren Sie die Keycloak-OIDC-Integration, bevor die Plattform produktive Workloads trägt; MFA und Passwortrichtlinie sind dann Keycloak-Einstellungen. Die [PCI-DSS-Seite](/de/compliance/pci-dss/) enthält die Kommandos zur Prüfung.

---

## Art. 23: was die Plattform zu den Meldungen beiträgt

Art. 23 Abs. 4 setzt die Fristen ab dem Moment, in dem Sie von einem erheblichen Sicherheitsvorfall Kenntnis erlangen:

- **Frühwarnung** unverzüglich, in jedem Fall **innerhalb von 24 Stunden**, mit der Angabe, ob ein rechtswidriges oder böswilliges Handeln vermutet wird oder grenzüberschreitende Auswirkungen möglich sind.
- **Meldung des Sicherheitsvorfalls** innerhalb von **72 Stunden**, mit einer ersten Bewertung von Schweregrad und Auswirkungen und, soweit verfügbar, den Kompromittierungsindikatoren.
- **Abschlussbericht** spätestens **einen Monat** nach der Meldung, mit ausführlicher Beschreibung, der wahrscheinlichen Ursache, den getroffenen und laufenden Abhilfemaßnahmen und gegebenenfalls den grenzüberschreitenden Auswirkungen.

Ob ein Vorfall erheblich ist, wie er eingestuft wird und die Meldung selbst liegen bei der Einrichtung. Nach Art. 23 Abs. 3 ist ein Vorfall erheblich, wenn er schwerwiegende Betriebsstörungen oder finanzielle Verluste verursacht hat oder verursachen kann oder anderen erheblichen Schaden zufügt. Für Cloud-, Rechenzentrums- und Managed-Service-Anbieter ergänzt die Durchführungsverordnung (EU) 2024/2690 konkrete Schwellenwerte.

Was die Plattform beiträgt, sind die Aufzeichnungen. Jede Frist verlangt Fakten, und melden können Sie nur, was Sie vorher aufgezeichnet haben:

**Alerting und Metriken** liefern den Zeitpunkt der Erkennung und den Wirkungsbereich. Mit der Kenntnisnahme beginnt die 24-Stunden-Frist, daher zählt, wie schnell ein Alert einen Menschen erreicht.

**Zentralisierte Logs** liefern die Abfolge der Ereignisse über Tenants und Services hinweg für die Bewertung nach 72 Stunden.

**Das Audit-Log der Kubernetes-API** zeichnet nach einer von Ihnen vorgegebenen Policy auf, wer was an der Control Plane geändert hat. Zwei Einstellungen entscheiden, ob es für einen Abschlussbericht taugt. **Aufbewahrung**: Der Standard auf dem Referenzcluster sind dreißig Tage. Das reicht für eine Meldung nach 72 Stunden. Für eine Untersuchung, die erst Wochen später beginnt, kann es zu kurz sein. Erhöhen Sie den Wert oder leiten Sie das Log in einen Speicher unter Ihrer Kontrolle, unveränderlich, wenn Ihr Konzept das verlangt. **Die Policy**: Setzen Sie nicht alles auf vollständige Erfassung von Request und Response. Dann landen Secrets und personenbezogene Daten im Log. Die Seiten [DSGVO](/de/compliance/dsgvo/) und [CIS Benchmark](/de/compliance/cis-benchmark/) zeigen eine praktikable Aufteilung.

**Isolation pro Tenant** begrenzt den Umfang, über den Sie berichten müssen. Wenn Tenants durch Netzwerkrichtlinien und RBAC getrennt sind, lässt sich ein Vorfall in einem Tenant leichter als eingegrenzt belegen. Das hilft bei der Pflicht aus Art. 23 Abs. 1, betroffene Empfänger Ihrer Dienste zu unterrichten, und bei der Bewertung grenzüberschreitender Auswirkungen.

---

<div class="band-fullbleed band-fullbleed--tint">
<div class="band-fullbleed__inner">

## Lieferkettensicherheit, einschließlich Ænix als Lieferant

Art. 21 Abs. 2 Buchst. d und Abs. 3 verlangen, dass Sie „die spezifischen Schwachstellen der einzelnen unmittelbaren Anbieter und Diensteanbieter“ sowie die Qualität ihrer Produkte und ihrer sicheren Entwicklungsverfahren berücksichtigen. Diese Fakten gehören in diese Bewertung.

**Die Engine ist Open Source.** Cozystack steht unter Apache 2.0 und wird von der CNCF getragen. Sie können den Code lesen, prüfen und bauen, ohne jemanden zu fragen. Die Kontinuität hängt nicht an einem Unternehmen. Endet ein Ænix-Abonnement, läuft die Open-Source-Plattform auf Ihrer Hardware weiter. Nur die proprietären Module und der Ænix-Support entfallen.

**Sie läuft auf Ihrer Hardware.** Es gibt keine Control Plane des Anbieters in einem fremden Konto und keinen dauerhaften Zugriff des Anbieters. Wenn Ænix Sie unterstützt, erfolgt Fernzugriff auf Ihre Cluster nur mit Ihrer Freigabe.

**Änderungen sind nachvollziehbar.** Komponenten-Images sind auf unveränderliche Digests festgelegt, ein Release ist also reproduzierbar. Changelogs nennen jede aktualisierte Komponente. Sicherheitshinweise werden offen veröffentlicht, einschließlich der Bewertungen von CVEs, die die Plattform nicht betreffen. Diese Aufzeichnungen können Sie direkt im Schwachstellenmanagement nach Buchstabe e verwenden.

**Ænix als unmittelbarer Lieferant.** Wenn Sie ein Abonnement, Support oder Dienstleistungen kaufen, ist Ænix ein Lieferant, den Sie bewerten. Die AENIX s.r.o. ist für ihr Informationssicherheits-Managementsystem nach **ISO/IEC 27001:2022** zertifiziert ([Details zum Zertifikat](/de/compliance/iso-27001/)). Das zertifiziert, wie das Unternehmen arbeitet, nicht ein Produkt. Einen SOC-2-Bericht hat Ænix nicht.

**Vorgelagerte Komponenten.** Die Plattform setzt CNCF- und andere Open-Source-Projekte zusammen: Kubernetes, KubeVirt, Cilium, LINSTOR/DRBD, Talos Linux, Keycloak und weitere. Deren Maintainer sind nicht Ihre Vertragspartner. Ihre Sicherheitshistorie gehört trotzdem in Ihre Risikoanalyse, und die koordinierten EU-Risikobewertungen kritischer Lieferketten nach Art. 22 können einige davon erfassen.

</div>
</div>

---

## Art. 20: Governance bleibt beim Leitungsorgan

Art. 20 Abs. 1 verlangt, dass die Leitungsorgane wesentlicher und wichtiger Einrichtungen die Risikomanagementmaßnahmen im Bereich der Cybersicherheit **billigen**, ihre Umsetzung **überwachen** und für Verstöße **verantwortlich** gemacht werden können. Nach Art. 20 Abs. 2 müssen ihre Mitglieder an Schulungen teilnehmen.

Keine Plattformfunktion übernimmt diese Rolle. Eine Plattform kann die Maßnahmen günstiger umsetzbar und leichter nachweisbar machen. Billigen, überwachen und dafür einstehen muss Ihre Geschäftsleitung. Wenn Sie Unterstützung bei den Unterlagen wünschen, die ein Leitungsorgan billigt, ist das Teil des [NIS2-Readiness-Engagements](/de/loesungen/nis2-compliance/).

<div class="cta-row">
  <a class="cta-primary" href="/de/loesungen/nis2-compliance/">NIS2-Readiness-Engagement</a>
  <a class="cta-secondary" href="/de/compliance/">Alle Compliance-Nachweise →</a>
</div>

---

## Quellen

- [Richtlinie (EU) 2022/2555 (NIS2), EUR-Lex](https://eur-lex.europa.eu/eli/dir/2022/2555/oj?locale=de): Art. 20, 21, 22, 23, 41 und Anhang I.
- [Durchführungsverordnung (EU) 2024/2690 der Kommission, EUR-Lex](https://eur-lex.europa.eu/eli/reg_impl/2024/2690/oj?locale=de): technische und methodische Anforderungen und Kriterien für erhebliche Sicherheitsvorfälle, unter anderem für Cloud-, Rechenzentrums- und Managed-Service-Anbieter.
- Plattformmechanismen und ihre Prüfung: [PCI DSS](/de/compliance/pci-dss/), [DSGVO](/de/compliance/dsgvo/), [DORA](/de/compliance/dora/), [CIS Benchmark](/de/compliance/cis-benchmark/), [ISO/IEC 27001](/de/compliance/iso-27001/).

## Hinweise

Diese Seite beschreibt Cozystack v1.6, die Engine, auf der die Ænix-Plattformen aufbauen, und dient der Information. Sie ist keine Rechtsberatung, kein Assessment und keine Aussage darüber, dass eine Konfiguration die Anforderungen einer zuständigen Behörde erfüllt. NIS2 ist eine Richtlinie: Verbindlich sind für Sie die Vorschriften des Umsetzungsgesetzes Ihres Mitgliedstaats, die über die Richtlinie hinausgehen können. Ob NIS2 für Sie gilt und ob als wesentliche oder wichtige Einrichtung, klären Sie mit Ihrer Rechtsberatung.
