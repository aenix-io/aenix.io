---
title: "DORA-Nachweise aus der Ænix-Plattformschicht"
description: "Plattformseitige DORA-Nachweise: Resilienz, Backup und Wiederherstellung, Vorfallsaufzeichnungen und IKT-Drittparteienrisiko bei selbst betriebener Open Source."
page_type: "solution-landing"
language: "de"
quick_facts_style: "rows"
faq_style: "rows"
primary_keyword: "dora ikt-drittparteienrisiko plattform"
secondary_keywords: ["dora artikel 12 backup wiederherstellung", "dora exit-strategie kubernetes", "dora informationsregister open source", "dora resilienztests tenant"]
hreflang_en: /compliance/dora/
related_pages:
  - /de/loesungen/dora-compliance/
  - /de/compliance/cis-benchmark/
  - /de/compliance/dsgvo/
  - /de/branchen/finanzdienstleistungen/
  - /de/produkte/private-cloud-platform/
direct_answer: |
  **Diese Seite ist die plattformseitige Hälfte einer DORA-Diskussion: was die Ænix-Plattformen gegenüber der Verordnung (EU) 2022/2554 tatsächlich leisten und was keine Infrastruktur für Sie halten kann. Für das Kapitel, das die meisten Plattformgespräche entscheidet — die Abhängigkeit von einem einzelnen IKT-Anbieter — fällt die Antwort ungewöhnlich stark aus. Die Engine ist quelloffene Software unter Apache 2.0, sie läuft auf Ihrer eigenen Hardware, und ein Wechsel bedeutet, standardisierte Kubernetes-Objekte und virtuelle Maschinen zu bewegen, statt ein proprietäres Format aufzulösen; die Exit-Strategie nach Art. 28 Abs. 8 lässt sich also proben statt vertraglich zusichern. Auf der Resilienzseite bringt die Plattform replizierten Speicher, Live-Migration, kontinuierlich abgeglichenen deklarierten Zustand, standortübergreifende Topologien und verschlüsselte Backups mit. DORA selbst bindet Finanzunternehmen, nicht Plattformen; Aenix behauptet weder DORA-Konformität noch eine DORA-Zertifizierung. Für das Prüfprogramm siehe das DORA-Compliance-Engagement.**
quick_facts:
  - label: "Was diese Seite ist"
    value: "Plattformseitiger Kontroll-Nachweis. Das aufsichtsgerichtete Engagement liegt auf der DORA-Compliance-Lösungsseite."
  - label: "Regulierung"
    value: "Verordnung (EU) 2022/2554, anwendbar seit 17. Januar 2025 auf die in Art. 2 genannten Finanzunternehmen."
  - label: "Drittparteienrisiko"
    value: "Apache-2.0-Engine auf eigener Hardware: keine Anbieter-Control-Plane, kein dauerhafter Anbieterzugriff, kein proprietäres Format aufzulösen."
  - label: "Gelieferte Resilienz"
    value: "LINSTOR-replizierter Speicher, wo die StorageClass es verlangt, Live-Migration, abgeglichener deklarierter Zustand, standortübergreifend gestreckte Cluster."
  - label: "Nicht geliefert"
    value: "Automatisches VM-Failover nach ungeplantem Knotenausfall. Knoten-Health-Handling und Restart-Policies existieren; sie zu einem Failover-Verfahren zu kombinieren ist Konfigurations- und Probearbeit."
  - label: "Backups"
    value: "Velero mit Verschlüsselung ab Werk — der Standard-Bucket liegt jedoch im Cluster, das er schützt, und erfüllt damit weder Art. 12 Abs. 2 noch Abs. 3."
  - label: "Zertifizierung"
    value: "Existiert nicht. DORA definiert Pflichten für Finanzunternehmen; ein DORA-Zertifikat für eine Plattform gibt es nicht, und Aenix behauptet keines."
faq:
  - q: "Ist die Aenix-Plattform DORA-konform?"
    a: "Die Frage passt nicht auf eine Plattform. DORA bindet Finanzunternehmen; Plattformen sind Teil des IKT-Bestands, den diese Unternehmen verwalten. Was die Aenix-Plattformen beitragen, sind Replikation, Live-Migration, Backup und Wiederherstellung, Beobachtbarkeit, Audit-Logging und eine Architektur ohne aufzulösende Anbieterabhängigkeit. Ein DORA-Zertifizierungszeichen, das man halten könnte, gibt es nicht — weder für uns noch für andere."
  - q: "Entfällt das IKT-Drittparteienrisiko, wenn wir auf eigener Hardware betreiben?"
    a: "Der Eigenbetrieb nimmt den Plattformanbieter aus dem kritischen Pfad — oft der größte Einzelposten dieses Risikos. Hardwarelieferanten, Rechenzentrumsbetreiber und jeder beauftragte Integrator bleiben Dritte und gehören ins Informationsregister. Wenn Sie Support, Hosting oder Betrieb bei Aenix einkaufen, ist Aenix einer davon."
  - q: "Gehört die Plattform in unser Informationsregister?"
    a: "Das Register nach Art. 28 Abs. 3 erfasst vertragliche Vereinbarungen über die Nutzung von IKT-Dienstleistungen. Apache-2.0-Software herunterzuladen und selbst zu betreiben begründet keine vertragliche Vereinbarung — es gibt keine Gegenpartei zu benennen und nichts am Open-Source-Projekt selbst zu registrieren. Sobald Sie Support, Hosting oder Integration darum herum einkaufen, ist dieser Lieferant ein IKT-Drittdienstleister nach Art. 3 Nr. 19 und gehört ins Register, mit der gestützten Funktion und der Angabe, ob diese kritisch oder wichtig ist. Klären Sie die Behandlung mit Ihrer zuständigen Aufsichtsbehörde — die Aufsichtspraxis zu Open-Source-Komponenten ist nicht einheitlich."
  - q: "Was ist mit dem Auditrecht?"
    a: "Art. 30 Abs. 3 lit. e ist ein vertragliches Zugangs-, Inspektions- und Prüfrecht für Sie und Ihre zuständige Behörde, ausgeübt gegenüber einem Anbieter. Ist kein Anbieter im Pfad, gibt es keinen Vertrag, der es trägt; die Plattform zu inspizieren heißt, öffentlichen Quellcode zu lesen und Prüfungen gegen das eigene Cluster laufen zu lassen. Wo Sie einen Betreiber beauftragen, gehören diese Zugangs- und Prüfrechte — und die Ausstiegs- und Übergangsregelungen nach Art. 30 Abs. 3 lit. f — in diesen Vertrag und nicht in eine Aussage über die Software."
  - q: "Worin unterscheidet sich das von der DORA-Compliance-Lösungsseite?"
    a: "Zwei verschiedene Fragen. Die Lösungsseite beschreibt ein Readiness-Engagement zum Festpreis: eine Kontroll-Landkarte dessen, was Ihre Organisation heute nachweisen kann, Konzentrationsrisiko bis zur zweiten Lieferantenstufe, Exit-Machbarkeit und einen Remediationsplan. Diese Seite beschreibt, was die Infrastruktur selbst leistet und wie das beobachtet wurde. Die Lösungsseite für das Programm, diese für die Artefakte, auf die es zugreift."
  - q: "Können wir Ausfallszenarien gefahrlos testen?"
    a: "Ja. Führen Sie sie in einem eigenen Tenant aus, per Netzwerk-Policy von allem anderen isoliert, und stellen Sie die Umgebung zwischen den Läufen aus Manifesten neu her. Beachten Sie die Grenze: Bedrohungsgeleitete Penetrationstests nach Art. 26 laufen gegen produktive Systeme, die kritische oder wichtige Funktionen stützen — eine Tenant-Kopie ersetzt das nicht, und beteiligte IKT-Drittdienstleister müssen vorab eingebunden werden."
---

**Für das Kapitel von DORA, das die meisten Plattformgespräche entscheidet — die Abhängigkeit von einem einzelnen IKT-Anbieter — sind die Ænix-Plattformen ungefähr so gut, wie Infrastruktur es sein kann.** Die Engine ist quelloffene Software unter Apache 2.0, sie läuft auf Ihrer eigenen Hardware, und ein Wechsel bedeutet, standardisierte Kubernetes-Objekte und virtuelle Maschinen zu bewegen, statt ein proprietäres Format aufzulösen. Eine Exit-Strategie, die man proben kann, schlägt eine Klausel, die Kooperation verspricht.

<div class="cta-row">
  <a class="cta-primary" href="/de/loesungen/dora-compliance/">DORA-Readiness-Engagement</a>
  <a class="cta-secondary" href="/de/compliance/">Alle Compliance-Nachweise →</a>
</div>

---

## Was diese Seite ist — und was nicht

Dies ist die **plattformseitige** Hälfte. Sie beschreibt, was die Infrastruktur gegenüber DORA leistet und wie das beobachtet wurde. Die organisatorische Hälfte — Gap-Analyse, Kontroll-Landkarte dessen, was Ihr Unternehmen heute nachweisen kann, Konzentrationsrisiko bis zur zweiten Lieferantenstufe, Exit-Machbarkeit mit Zeitschätzungen, Remediationsplan — ist ein Engagement zum Festpreis und steht auf der Seite **[DORA-Compliance](/de/loesungen/dora-compliance/)**. Beginnen Sie dort, wenn Sie das Programm brauchen; bleiben Sie hier, wenn Sie den Nachweis darunter brauchen.

**Zur Herkunft.** Die Beobachtungen unten stammen von **Cozystack v1.6** auf einem Referenzcluster. Cozystack ist die quelloffene, Apache-2.0-lizenzierte, bei der CNCF gehostete Engine, die Ænix entwickelt und pflegt; die Ænix Public Cloud Platform, die Private Cloud Platform und die AI Platform sind Distributionen davon. Einen separaten geschlossenen Build gibt es nicht. Das zählt hier doppelt: Es ist der Grund, warum der Nachweis trägt, und es ist die Substanz des Kapitel-V-Arguments weiter unten.

**Und was die Plattform nicht kann, ist die Pflicht halten.** DORA — Verordnung (EU) 2022/2554 — gilt seit dem 17. Januar 2025 und bindet die in Art. 2 aufgezählten Kategorien von Finanzunternehmen: Banken, Versicherer, Wertpapierfirmen, Zahlungs- und E-Geld-Institute, Anbieter von Krypto-Dienstleistungen und weitere. IKT-Drittdienstleister fallen nicht unmittelbar in den Anwendungsbereich; einige wenige werden von den Europäischen Aufsichtsbehörden nach Art. 31 als kritisch eingestuft und einem EU-Überwachungsrahmen mit einem federführenden Überwacher unterstellt — ein anderes Regime als die Aufsicht durch die zuständige Behörde, der Finanzunternehmen unterliegen.

---

<div class="band-fullbleed band-fullbleed--tint">
<div class="band-fullbleed__inner">

## IKT-Drittparteienrisiko: der Teil, der von der Plattform abhängt

DORA widmet dem IKT-Drittparteienrisiko ein ganzes Kapitel: Informationsregister, vertragliche Anforderungen, Konzentrationsrisiko, Exit-Strategien und das Auditrecht. Aufsichtsbehörden interessiert das, weil ein Finanzunternehmen, das einen Anbieter nicht verlassen kann, seine eigene Resilienz nicht wirklich kontrolliert.

Drei Eigenschaften zählen hier. Keine ist ein Feature, das man aktiviert; jede folgt daraus, wie die Plattform gebaut und lizenziert ist.

**Der Quellcode ist offen, unter Apache 2.0.** Die vertragliche Kontinuität hängt nicht am Fortbestand eines Anbieters, und der Code kann von Ihnen oder einem Dritten geprüft werden, ohne dass jemand um Erlaubnis gefragt werden müsste.

**Sie läuft auf Ihrer eigenen Hardware.** Keine Control Plane in fremdem Account, kein Anbieter mit dauerhaftem Zugriff als Funktionsvoraussetzung, keine Abhängigkeit davon, dass ein externer Dienst erreichbar ist. Was Sie hosten, kontrollieren Sie.

**Der Ausstieg ist praktisch möglich, nicht nur auf dem Papier.** Workloads sind Kubernetes-Objekte und virtuelle Maschinen in Standardformaten; es gibt keine proprietäre Kapselung aufzulösen. Ein Exit-Plan, den man proben kann, ist einer Aufsichtsbehörde mehr wert als eine Klausel, die Kooperation verspricht.

Nichts davon befreit Sie davon, das Informationsregister nach Art. 28 Abs. 3 zu führen, eine Exit-Strategie nach Art. 28 Abs. 8 vorzuhalten oder Verträge mit den Kernbestimmungen des Art. 30 DORA zu schließen — ein anderer Art. 30 als der der DSGVO. Es macht diese Dokumente leichter wahrheitsgemäß zu schreiben.

**Ein ehrlicher Vorbehalt.** Wenn Sie Support, Hosting oder Betrieb bei Ænix einkaufen, wird Ænix zum IKT-Drittdienstleister nach Art. 3 Nr. 19 und gehört mit der gestützten Funktion in Ihr Register. Die quelloffene Engine begründet keine vertragliche Vereinbarung; eine kommerzielle Beziehung darum herum schon.

</div>
</div>

---

## Resilienz: was die Plattform liefert

DORA erwartet, dass IKT-Systeme Störungen standhalten und sich davon erholen — und dass das getestet und nicht angenommen wird.

**Replizierter Speicher, wo die StorageClass es verlangt.** LINSTOR platziert Volumes mit DRBD-Replikation über Knoten hinweg; ein repliziertes Volume überlebt also den Ausfall eines Knotens, der eine seiner Kopien hält. Replikation ist eine Eigenschaft der StorageClass und nicht der Plattform — lokale, nicht replizierte Klassen existieren und sind für manche Workloads die richtige Wahl —, prüfen Sie also, welche Klasse jede kritische oder wichtige Funktion tatsächlich nutzt. Ein separates Storage-Array ist in keinem Fall nötig.

**Live-Migration.** Virtuelle Maschinen wechseln ohne Abschaltung den Knoten, womit geplante Wartung von einem Ausfall zu einer Operation wird.

**Deklarierter Zustand, kontinuierlich abgeglichen.** Maschinen und Dienste werden als Manifeste beschrieben, und die Plattform arbeitet daran, die Realität mit der Beschreibung in Deckung zu halten. Beenden Sie einen Workload direkt, kommt er zurück, weil die Beschreibung sich nicht geändert hat.

**Standortübergreifend gestreckte Cluster.** Multi-Rechenzentrums-Topologien sind eine normale Betriebsform und keine Exotik — relevant, wenn Ihre Resilienzanforderungen geografische Trennung benennen.

Seien Sie präzise darin, was **nicht** geliefert wird. Es gibt kein automatisches Failover virtueller Maschinen nach ungeplantem Knotenausfall, wie es ein dediziertes HA-Produkt bietet. Knoten-Health-Handling und Restart-Policies existieren und lassen sich zu einem Failover-Verfahren kombinieren, aber das ist Konfigurations- und Probearbeit, kein Schalter. Wie das üblicherweise ausgebaut wird, steht unter [Disaster Recovery](/de/loesungen/disaster-recovery/).

---

## Backup, Wiederherstellung und der Nachweis, dass beides funktioniert

Velero wird für geplante Backups, Volume-Snapshots, VM-Backups und Clusterzustand mitgeliefert, und Backup-Daten sind im Objektspeicher über den kopia-Uploader standardmäßig verschlüsselt.

**Wo diese Backups landen, braucht eine Entscheidung vor der Prüfung, nicht danach.** Plattformverwaltete Backups landen standardmäßig in einem geteilten Bucket `cozy-backups` in `tenant-root`, getrennt nach Objektpfad. Art. 12 Abs. 2 erwartet, dass die Wiederherstellung auf Systemen läuft, die physisch und logisch vom Ursprung getrennt sind, und Art. 12 Abs. 3 erwartet, dass Backup-Systeme nicht direkt mit dem primären verbunden sind — ein Bucket innerhalb des geschützten Clusters erfüllt beides nicht. Richten Sie die BackupClass auf Speicher außerhalb des Clusters, mit eigenen Credentials und eigenem Schlüssel, und halten Sie das in der Backup-Richtlinie fest, die Art. 12 Abs. 1 von Ihnen verlangt.

Der Schwerpunkt der Verordnung liegt nicht darauf, Backups zu haben, sondern darauf, wiederherstellen zu können. Proben Sie die Wiederherstellung gegen ein definiertes Wiederanlaufziel und einen definierten Datenverlustpunkt, halten Sie fest, was Sie tatsächlich erreicht haben, und bewahren Sie diese Aufzeichnung auf. Eine gemessene Wiederherstellungszeit ist ein Nachweis; eine Schätzung nicht.

---

## Erkennung, Protokollierung und Vorfallsnachweise

DORA verlangt, dass Vorfälle erkannt, klassifiziert und — bei schwerwiegenden — der zuständigen Behörde binnen kurzer Frist gemeldet werden. Das funktioniert nur, wenn die zugrunde liegende Aufzeichnung existiert.

Die Plattform bringt Metrikerfassung, Log-Aggregation, Alerting und Dashboards mit, und der Kubernetes-API-Server schreibt ein Audit-Log nach einer Policy, die Sie liefern. Zwei Dinge bewusst setzen:

**Aufbewahrung.** Der Default auf dem untersuchten Cluster beträgt dreißig Tage — kürzer, als eine Finanzaufsicht es für Aufzeichnungen zu kritischen oder wichtigen Funktionen erwartet.

**Die Audit-Policy, Ressource für Ressource.** Heben Sie nicht alles auf vollständige Request-/Response-Erfassung: Das schreibt Secrets und personenbezogene Daten ins Log und erkauft ein DSGVO-Problem, um ein DORA-Problem zu lösen. Warum, steht auf der [DSGVO-Seite](/de/compliance/dsgvo/); die praktikable Aufteilung auf der [CIS-Benchmark-Seite](/de/compliance/cis-benchmark/).

Security-Advisories zur Engine werden offen veröffentlicht, einschließlich Bewertungen von Schwachstellen, die sie am Ende nicht betreffen. Dieser öffentliche Nachweis ist in den Bereichen Threat Intelligence und Schwachstellenmanagement eines IKT-Risikorahmens direkt verwendbar.

---

## Resilienz testen, ohne die Produktion anzufassen

DORA erwartet ein Programm für Tests der digitalen operationalen Resilienz nach Kapitel IV und bedrohungsgeleitete Penetrationstests nach Art. 26 für diejenigen Unternehmen, die ihre zuständige Behörde dafür benennt — eine Einstufung nach Risikoprofil und systemischer Bedeutung, keine Kategorie, die Sie aus der eigenen Bilanz ablesen können.

Zwei Eigenschaften der Plattform helfen dem allgemeinen Programm. Ein Tenant gibt Ihnen einen isolierten Ort, um destruktive Tests gegen eine realistische Kopie zu fahren. Und weil Umgebungen als Manifeste beschrieben sind, lässt sich die getestete Umgebung exakt wiederherstellen — was ein Testergebnis beim zweiten Mal überhaupt erst aussagekräftig macht.

TLPT ist eine andere Übung, und die Unterscheidung zählt: Tests nach Art. 26 laufen gegen produktive Systeme, die kritische oder wichtige Funktionen stützen; eine Tenant-Kopie ersetzt sie nicht. Wo die Plattform für Sie betrieben wird oder eine kritische oder wichtige Funktion stützt, geraten die beteiligten IKT-Drittdienstleister in den Umfang dieses Tests und müssen vorab eingebunden werden.

Die [CIS-Benchmark-Seite](/de/compliance/cis-benchmark/) zeigt einen solchen Test gegen ein laufendes Cluster, samt der Argumentation, die aus einem Rohbericht etwas macht, das ein Prüfer verwenden kann.

---

## Was bei Ihnen bleibt

Die Governance liegt beim Leitungsorgan und lässt sich nicht an einen Lieferanten delegieren: der IKT-Risikorahmen, das Informationsregister, die Klassifizierung und Meldung von Vorfällen innerhalb der Fristen der Verordnung, das Testprogramm zur digitalen operationalen Resilienz, die vertraglichen Vereinbarungen mit Anbietern und die Exit-Strategie selbst.

Eine Plattform kann jedes davon billiger erfüllbar machen. Halten kann sie es nicht. Wenn Sie Unterstützung bei der Erstellung möchten: dafür gibt es das [DORA-Readiness-Engagement](/de/loesungen/dora-compliance/), und die kostenlose [DORA-Compliance-Checkliste](/de/ressourcen/dora-compliance-checkliste/) ist die Kurzfassung dessen, was dabei betrachtet wird.

<div class="cta-row">
  <a class="cta-primary" href="/de/loesungen/dora-compliance/">DORA-Readiness-Engagement</a>
  <a class="cta-secondary" href="/de/kontakt/">Mit einem Engineer sprechen</a>
</div>

---

## Hinweise

Diese Seite beschreibt Cozystack v1.6 — die Engine, aus der die Ænix-Plattformen gebaut sind —, beobachtet auf einem Referenzcluster im August 2026, und ist informatorisch. Sie ist keine Rechtsberatung, kein Assessment und keine Aussage darüber, dass irgendeine Konfiguration eine zuständige Behörde zufriedenstellt. Die Verordnung (EU) 2022/2554 gilt für definierte Kategorien von Finanzunternehmen und deren kritische IKT-Anbieter; ob und in welcher Eigenschaft sie für Sie gilt, ist eine Frage an Ihre eigene Rechtsberatung.
