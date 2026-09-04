---
title: "Was mich Dutzende KI-Agenten gelehrt haben: Wie ich das Speichersystem Blockstor als Experiment geschrieben habe"
description: "Andrei Kvapil über Blockstor: ein Clean-Room-Orchestrator für Blockspeicher, gebaut mit bis zu 60 KI-Agenten, testgetriebener Entwicklung und harten Exit Gates."
date: "2026-08-10"
author: "Andrei Kvapil"
type: "article"
topics: ["Kubernetes", "LINSTOR", "Storage", "AI/ML", "Cozystack", "Open Source"]
language: "de"
cover_image: "https://cdn-images-1.medium.com/max/1200/1*ep6GUdvlFLIwsXN-U0ovnQ.png"
source_url: "https://blog.aenix.io/what-dozens-of-ai-agents-taught-me-how-i-wrote-the-blockstor-storage-system-as-an-experiment-921f7d3a1137"
hreflang_en: /blog/2026/08/what-dozens-of-ai-agents-taught-me-how-i-wrote-the-blockstor-storage-system-as-an-experiment/
---

---

Vor ein paar Monaten habe ich mich zu einem Experiment entschlossen: eine Clean-Room-Implementierung von LINSTOR von Grund auf zu bauen, ausschließlich anhand der Referenzen und der öffentlichen API-Typen. Angefangen hat es als Freitagsscherz. Ich wollte so wenig Zeit wie möglich hineinstecken, das Ganze im Hintergrund laufen lassen und schauen, wohin es führt. Die Frage war, wie weit ein modernes Modell allein kommt, ganz ohne Menschen in der Schleife.

![image](https://cdn-images-1.medium.com/max/800/1*ep6GUdvlFLIwsXN-U0ovnQ.png)

Spoiler: Aus der vollen Autonomie wurde nichts, und ich habe mich mit dem Projekt ziemlich herumgeschlagen. Aber der Prozess hat mich völlig gepackt, und das Ergebnis hat alle meine Erwartungen übertroffen.

> Aus der Community kam immer wieder die Frage, wie das eigentlich gelaufen ist. Eine berechtigte Frage — bei diesem Projekt habe ich sehr viel darüber gelernt, wie man Modelle wirksam führt, und dabei sind etliche Methoden und Muster herausgekommen, die mich seither auch in der täglichen Arbeit deutlich produktiver machen.

### Was Blockstor ist

Ich habe das Projekt Blockstor genannt. Es ist ein Orchestrator für Blockgeräte. Grob gesagt: Sie fordern ein repliziertes Volume in der gewünschten Größe an, und dieses Volume wird auf mehreren Knoten in ZFS oder LVM angelegt und per DRBD für die Replikation eingerichtet — eine intelligente, netzwerkbewusste Variante von RAID 1. Das System beherrscht Snapshots, das Umverteilen von Repliken, Resize, automatisches Failover und einiges mehr.

Blockstor ist kein Speichersystem, das auf einem leeren Blatt entworfen und geschrieben wurde. Ich habe das Experiment auf LINSTOR aufgebaut — einem ausgereiften Manager für verteilten Blockspeicher, den ich selbst seit Jahren im Produktivbetrieb fahre.

LINSTOR kam für mich einem idealen Speichersystem sehr nahe, weil seine API-Typen Kubernetes-ähnlich sind. Die Backend-Logik ist allerdings recht eigenwillig organisiert. Das Hauptproblem ist aus meiner Sicht das anfragegetriebene Modell: Für die meisten API-Aufrufe geht LINSTOR in Echtzeit zu den Knoten und fragt deren aktuellen Zustand ab, um eine Antwort zusammenzubauen. Für ein verteiltes System halte ich dieses Muster für nicht akzeptabel, weil es bei Skalierung nicht trägt. Das Fehlen eines Reconciliation-Loops macht außerdem die automatische Wiederherstellung schwierig. Ich will die Entscheidungen der Entwickler nicht im Nachhinein bewerten — sie hatten sicher ihre Gründe. Aber weil ich Kubernetes-Mustern so verbunden bin, habe ich mich gefragt: Wie würde ich — als erfahrener Architekt und Entwickler — ein solches System in Kubernetes-nativer Logik schreiben?

Umschreibungen von einer Sprache in eine andere sind übrigens keine Seltenheit. So ist zum Beispiel das Projekt rusternetes entstanden: Kubernetes, neu geschrieben von Go nach Rust. Aber wie soll das überhaupt gehen? Kubernetes hat eine gewaltige Codebasis mit einer gewaltigen Zahl an Personenstunden darin. Wie überzeugt man sich davon, dass der dabei entstehende „KI-Schrott“ korrekt funktioniert? Und kann man sich überhaupt darauf verlassen, geschweige denn ihn produktiv betreiben?

### TDD

Die Antwort liegt darin, wie Kubernetes selbst offen entwickelt wird. Freie, community-getriebene Projekte haben einen festen Bestand an etablierter Praxis, und die Beitragenden halten sich nach Kräften daran.

An solchen Projekten arbeiten die unterschiedlichsten Leute mit, auf jedem Erfahrungsniveau. Genau deshalb sind Tests entscheidend: Tests verhindern, dass eine einmal beigesteuerte Funktionalität später wieder kaputtgeht. Angenommen, Sie bringen ein neues Feature ein, es besteht alle Tests und landet im Projekt. Später bringt jemand anderes ein weiteres Feature ein. Fällt beim Prüfen dieses Beitrags ein Test für Ihr Feature durch, dann hat die neue Funktionalität ein Problem, das Ihres beschädigt — und das System lässt die Änderung automatisch nicht durch. Tests haben in öffentlichen Projekten mit der Zeit einen so hohen Stellenwert bekommen, dass sie heute höher bewertet werden als der Code selbst. Genau solche Tests sind es, die ein „X in Y neu schreiben“ überhaupt möglich machen.

Das Projekt rusternetes gibt an:

> *Actively conformance-tested against the official Kubernetes e2e test suite — currently passing 94% of conformance tests (415/441) across 160 rounds of testing.*

Ob ein Projekt als Kubernetes-Ersatz durchgeht, misst sich also in erster Linie daran, ob es die Tests besteht.

> *Wenn ich einen Vogel sehe, der wie eine Ente läuft, wie eine Ente schwimmt und wie eine Ente schnattert, dann nenne ich diesen Vogel eine Ente.*
>
> *— Der berühmte [Ententest](https://de.wikipedia.org/wiki/Ententest)*

### Hooks und Setup

Aus demselben Grund war mein erster Schritt, das Modell auf testgetriebene Entwicklung (TDD) festzulegen, bei der die Tests vor der Implementierung entstehen. Über Tests lassen sich die Konformitätsanforderungen festzurren, die man braucht. Und sie geben mir die Sicherheit, dass neue Funktionalität, die während der Entwicklung dazukommt, das Bestehende nicht beschädigt.

Auf Rat eines Kollegen habe ich sofort golangci-lint eingebunden und es für das Modell verbindlich gemacht, jeden Code dort durchlaufen zu lassen. [@lexfrei](https://github.com/lexfrei) — der besagte Kollege — argumentiert, dass dieser Schritt eine erhebliche Menge Tokens spart.

### Das Exit Gate und ein deterministisches Ergebnis

Das ist wohl die erste und wichtigste Lektion: Man kann einem Modell sagen „schreib weiter, bis die Tests grün sind“, und das ist eine gute Bedingung an das Artefakt, das dabei herauskommt. Genau nach dieser Methode habe ich dieses Projekt gebaut. Mit einem Haken: Ich hatte keine Tests, denn LINSTOR veröffentlicht keine Test-Suite für die eigene Funktionalität.

Zur Verfügung standen mir nur Jahre im Betrieb von LINSTOR, Dutzende eigener Vorträge und Artikel sowie der Apache-2.0-Code von Projekten aus dem LINSTOR-Ökosystem — golinstor, der Treiber für das Container Storage Interface (CSI), der Piraeus-Operator und deren API-Verträge. LINSTOR selbst steht unter der GPL, womit ausgeschlossen ist, seinen Code als Grundlage für ein Apache-2.0-Projekt zu verwenden. Das war die zentrale Schwierigkeit, und genau deshalb bin ich den Clean-Room-Weg gegangen.

Meine Hauptaufgabe bestand damit darin, diese Exit Gates zu definieren. Sitzen sie richtig, muss ich nicht die gesamte entstehende Codebasis kontrollieren: Erfüllt der Code die Bedingungen, die ich mir selbst gesetzt habe, ist das der Nachweis, dass die Arbeit erledigt ist.

### Die API als Vertrag

Mir gefallen die Typdefinitionen, die LINSTOR in seiner API verwendet. Hinzu kommt, dass sowohl der offizielle CSI-Treiber als auch der Piraeus-Operator mit diesen Typen arbeiten, und ich hatte keine Lust, eines von beiden neu zu schreiben.

Aus Erfahrung ist der Entwurf von APIs eine der schmerzhaftesten Aufgaben in diesem Beruf. Backend-Logik können Sie jederzeit ändern. Ein einziger Breaking Change an der API, und auf der Client-Seite fällt alles auseinander. Eine API sollte sich also selten und nur in Ausnahmefällen ändern — und das Risiko, sie gleich zu Beginn falsch zu schneiden, ist hoch. Deshalb habe ich mich entschieden, exakt die Typen des Originalprojekts zu verwenden und sie auf Kubernetes-first-Typen in Form von CustomResourceDefinitions (CRDs) abzubilden.

Beim Aufbau von Cozystack und im Vertrieb von Lösungen darauf ist uns dieselbe Frage von Interessenten schon mehrfach begegnet: Wie steht es um eure API? Was passiert, wenn wir euch produktiv einsetzen, eine Lösung darum herum bauen — und sich dann eure API ändert und wir unsere Hälfte des Projekts neu schreiben müssen?

Zur Erinnerung: Der Code von LINSTOR ist unter GPLv3 veröffentlicht, und ich hatte vor, Blockstor unter Apache 2.0 zu veröffentlichen. Den Originalcode wiederzuverwenden schied damit aus. Die erste Aufgabe war also, im Kubernetes-Werkzeugumfeld kompatible Verträge zu finden: die Bibliothek [golinstor](https://github.com/LINBIT/golinstor), linstor-csi und den Piraeus-Operator, allesamt unter Apache 2.0, sowie die offizielle LINSTOR-Dokumentation unter CC BY-SA.

Damit hatte ich meinen ersten Vertrag: Die API muss mit der LINSTOR-Go-Bibliothek, mit linstor-csi und mit dem Piraeus-Operator kompatibel sein.

### Die Testumgebung

Das Modell brauchte einen Ort zum Arbeiten und einen Ort, um das Erzeugte zu testen. Als Testumgebung habe ich einen kräftigen Bare-Metal-Knoten gewählt, dazu eine generierte Test-Suite, die in virtuellen Maschinen (VMs) einen Kubernetes-Cluster auf Talos hochzieht und Blockstor darin ausrollt. Diese Wahl war bewusst: Blockstor braucht das DRBD-Modul, und DRBD neigt bei falscher Konfiguration dazu, sich aufzuhängen — ich brauchte also einen schnellen Weg, eine kaputte Umgebung neu aufzusetzen. Da Blockstor seine Konfiguration architekturbedingt als Kubernetes-CRDs ablegt, war mit Talos zugleich die Frage des Kubernetes-Bootstraps erledigt.

### Das erste Ergebnis

Als der erste Proof of Concept (PoC) fertig war, hatte mir das Modell einen funktionierenden Prototyp gebaut — allein anhand der genannten Quellen und seines eigenen Datenbestands. Für das Interaktionsmodell hatte es allerdings genau dasselbe anfragegetriebene Modell implementiert wie das Original-LINSTOR, vermutlich aus dessen Dokumentation übernommen. Und es funktionierte bereits! Ich konnte über das offizielle CLI mit der API sprechen, wenn auch mit Hunderten von Fehlern und Lücken.

Um das zu korrigieren, habe ich das Modell gebeten, die API-Verträge als Tests einzufrieren und die Logik auf controller-runtime umzuschreiben, so wie ich es brauchte. Mit einem klaren, deterministischen Ziel begann die zurückgelieferte Architektur dem zu ähneln, was ich tatsächlich wollte: vollständig asynchron, mit dem API-Übersetzer als separatem, austauschbarem Modul.

Später habe ich das Modell eine Reihe von End-to-End-Tests (e2e) implementieren lassen, die Volumes über das offizielle CSI-Plug-in und das Framework kubernetes-csi/csi-test anfordern. Anders gesagt: Das Modell arbeitete so lange weiter, bis Blockstor Volumes und Snapshots über die üblichen Kubernetes-Abstraktionen bereitstellte. Nach einer Weile hatte ich einen funktionierenden Prototyp. Von Stabilität war das System allerdings weit entfernt, was mich vor die Frage stellte: Wie erreicht man die nötige Stabilität, wenn es zu Beginn gar keine Tests gibt?

An dieser Stelle floss mein gesamtes Material ein — meine Artikel zum Debugging von LINSTOR, meine Vorträge, meine Claude-Code-Debugging-Skills, unsere in Cozystack integrierten Plunger-Skripte und auf GitHub gemeldete Fehler. Ich habe das Modell all das studieren und daraus eine Sammlung von Punkten zusammenstellen lassen, die getestet werden mussten und die unser System erfüllen sollte. Heraus kam eine riesige Markdown-Datei. Ich habe sie durchgesehen und das Modell losgeschickt, jedes darin erfasste Problem auf dem Teststand zu prüfen und zu beheben. Es gab viele solcher Iterationen, und jede kostete gewaltig viel Zeit. Meist zog das Modell die Umgebung hoch, ließ Tests laufen, behob Fehler, setzte die Umgebung neu auf — und all das dauerte.

Irgendwann habe ich angefangen zu fragen, wie sich der Prozess beschleunigen ließe.

### Die Entwicklung beschleunigen

Daraus entstand die Idee, Agenten zu parallelisieren. Manche Probleme ließen sich auf Ebene der Unit-Tests abschließen. Andere waren nur an einer echten Umgebung zu verifizieren. Nachdem ich denselben Satz Fehler immer wieder durchgespielt hatte, kam ich zu dieser Methode:

1. Ich bitte einen Agenten, die Referenzen zusammenzutragen und so etwas wie einen Plan für die Fehler aufzustellen.
2. Sobald ich das riesige Dokument habe, bitte ich das Modell, einen Schwung Agenten loszuschicken, von denen jeder an einem bestimmten Fehler arbeitet.
3. Im Code bekommt jeder Agent seine eigene isolierte Umgebung und seinen eigenen Worktree, in dem er seine Korrekturen einreicht.
4. Aufgabe jedes Agenten ist es, das Problem zu untersuchen, eine Umgebung hochzuziehen, eine Korrektur samt Tests vorzubereiten und alles an den Hauptagenten zurückzugeben.
5. Der Hauptagent zieht die Arbeit aller Agenten in den Hauptbaum — und das wiederholt sich über mehrere Iterationen.
6. Am Ende liefen bis zu 60 Agenten gleichzeitig: 30 auf Ebene der Unit-Tests, 30 auf e2e in einer konkreten Umgebung.

Nach einer Weile fing das Projekt an, nach etwas auszusehen, das man tatsächlich benutzen kann. Vieles war noch nicht stabil.

### Der Marathon geht weiter

Während ich diesen ganzen Zoo betreute, habe ich parallel selbst Integrationstests gefahren und die Ergebnisse von Hand geprüft. Ich ließ mir von Claude Zugang zu einer Umgebung geben, bediente das linstor-CLI manuell und versuchte, die Fehler zu reproduzieren — von denen es noch reichlich gab.

An diesem Punkt musste ich aufhören, große Blöcke zu bauen, und stattdessen sehr viel akribischer die User Journey testen. Der Großteil der Probleme verschwand, als ich die Agenten Tests über das offizielle CLI implementieren ließ und die User Journey für den Day-2-Betrieb aus der offiziellen LINSTOR-Dokumentation vorgab. An manchen Stellen drehte sich das Modell allerdings im Kreis: Über die ganze Zeit brachte es nie alle Tests zuverlässig auf Grün, und ich musste persönlich eingreifen. Gestützt auf mein eigenes Wissen ließ ich mir jedes Problem erklären und stellte dem Modell dann eine Reihe gezielter Fragen zur Architektur.

### Die Feinschliff-Phase

Viele meiner Fragen liefen auf die asynchrone Natur der Controller hinaus. DRBD ist von Haus aus heikel, was den Zeitpunkt, die Art und die Reihenfolge der Konfigurationsanwendung angeht. Entscheidend war deshalb eine stabile Zustandsmaschine — eine, die den Reconciliation-Loop erst dann zu einer bestimmten Aktion durchlässt, wenn die Bedingungen erfüllt sind.

Das größte Problem war dabei die Snapshot-Logik. Um einen Snapshot anzulegen, friert LINSTOR zunächst die I/O auf DRBD-Ebene ein und schickt den Befehl dann gleichzeitig an die mehreren Knoten, die das darunterliegende Gerät in ZFS halten. Nach erfolgreicher Operation taut LINSTOR DRBD wieder auf. Das alles muss augenblicklich geschehen, und im Fehlerfall muss der Zustand automatisch zurückgerollt werden, damit der Container oder die VM bei der Arbeit mit ihren Daten nie blockiert.

Das zweite Problem war, wie sich der initiale Sync einer neuen Replik überspringen lässt. Das beobachtbare Verhalten kannte ich aus Jahren im Betrieb von LINSTOR: Die erste Replik hält ihren aktuellen Generation Identifier fest, spätere Repliken übernehmen diesen als Startwert und synchronisieren von dort aus.

Zuerst habe ich versucht, die exakte Befehlsfolge allein aus dem beobachteten Verhalten zu rekonstruieren, indem ich Operationen gegen einen laufenden Controller ausführte und die Befehle mitschnitt. Die Mechanik ist aber nicht öffentlich dokumentiert, und Beobachtung allein ergab kein stimmiges Bild. Also bin ich auf das Clean-Room-Verfahren zurückgefallen. Ein Agent — der „schmutzige Raum“ — rekonstruierte aus den Originalquellen eine funktionale Spezifikation: welche Befehle ausgeführt werden und unter welchen Bedingungen. Er hielt ausschließlich diese funktionalen Fakten fest und übernahm weder Code noch dessen Ausdrucksform. Der zweite Agent — der „saubere Raum“ — hatte von vornherein keinen Zugriff auf fremde Quellen und implementierte den Ansatz von Grund auf, streng nach der Spezifikation.

Ein weiteres Problem war die konsistente Vergabe von Node-IDs — jede DRBD-Replik braucht im Cluster eine eindeutige Nummer von 1 bis 8 — sowie die Vergabe der TCP-Ports für die Replikation, die in der aktuellen Implementierung nicht mehr an DRBD gebunden ist, sondern aus einem Pool je Knoten erfolgt. Genau hier hat sich die oben beschriebene Zustandsmaschine ausgezahlt.

### Der Aufbau des CI-Systems

Inzwischen war klar, dass das Experiment in seine Endphase ging, und ich begann, über die Zukunft des Projekts nachzudenken. Um es fertigzustellen und produktionsreif zu machen, brauchten wir ein ernsthaftes System für Continuous Integration (CI), das garantiert, dass kein ungetesteter Code in der Codebasis landet. Angesichts der Testmenge durfte ein Lauf nicht über mehrere Stunden gehen, die Tests mussten also ebenso parallelisiert werden.

Und wir haben eines gebaut: Für jeden Pull Request lief ein großer Stapel Tests parallel über sechs bis sieben Runner und lieferte am Ende „ok“ oder „nicht ok“.

In diesem Modus habe ich noch etliche Runden gearbeitet, bis die CI wirklich grün und stabil war. Danach sind wir von lokalen Worktrees auf Pull Requests bei GitHub umgestiegen.

### Die Endphase

Datenverlust ist nicht akzeptabel. Bevor ich das Projekt für fertig erklären konnte, musste ich also gründlich prüfen, ob Blockstor sich in dieser Hinsicht korrekt und verlässlich verhält. Den gesamten generierten Code zu lesen und zu prüfen, überstieg sowohl meine Energie als auch meine Kapazität. Andererseits ist Blockstor — wie LINSTOR — im Kern ein Orchestrator. Die Daten selbst liegen in ZFS und DRBD, und an deren Zuverlässigkeit hatte ich keine Zweifel. Wichtig war der Nachweis, dass der Controller die Ressourcen tatsächlich korrekt konfiguriert und Ausfälle übersteht.

Aber wie stellt man fest, ob man dem aktuellen Code den Produktivbetrieb anvertrauen kann? Das ist eine unscharfe und schwierige Frage. Und wie kommt man zu einer deterministischen Antwort darauf? Hier habe ich ein weiteres Muster genutzt, das ich mir im Lauf des Projekts erarbeitet habe.

Mein Kollege @lexfrei hatte früher einmal erwähnt, dass Modelle es fürchten, wenn man ihnen sagt, ihr Handeln könne zu schweren finanziellen Verlusten führen. Ich habe beschlossen, genau das als Exit Gate zu nutzen. Ich habe einen Agenten gestartet, der für die Freigabe des Codes in die Produktion zuständig war, und ihn unter Bedingungen arbeiten lassen, in denen sein Leben und sein finanzielles Wohlergehen vom Endergebnis „abhingen“. Er stellte einen Abnahmeplan mit einer langen Liste von Punkten auf, darunter ein 24-stündiger Dauerlauf auf echter Infrastruktur. Ein zweiter Agent versuchte, diese Anforderungen zu erfüllen. Das ging noch mehrere Tage und mehrere Releases so weiter, bis der für die Auslieferung zuständige Agent schließlich seinen Segen gab.

Ein System, das niemand nutzt, kann man allerdings nicht stabil nennen. Der nächste Schritt war deshalb die Integration von Blockstor mit Cozystack. Unsere Test-Suite deckt viele Funktionen gleichzeitig ab: das Anfordern von Volumes mit und ohne DRBD, RWX, Snapshots und weitere Details. Aufgabe des neuen Agenten war es, einen Draft-Pull-Request vorzubereiten, die Tests auf Grün zu bringen und die Endphase abzuschließen.

Stand 15. Juli 2026 ist dieser Pull Request noch nicht gemergt — aber die Chancen stehen gut, dass Sie bald ein neues, Kubernetes-natives Storage-Backend in Cozystack haben. Bleiben Sie dran.

> **Anmerkung der Redaktion (September 2026):** Blockstor ist weiterhin ein eigenständiges, experimentelles Projekt — [github.com/cozystack/blockstor](https://github.com/cozystack/blockstor), Apache 2.0 — und nicht Bestandteil von Cozystack. LINSTOR/DRBD über Piraeus bleibt der Speicher, den Cozystack ausliefert, und ist dort das Standard-Backend. Blockstor steht auf der Roadmap als optional zuschaltbares Backend für 2027.

### Die wichtigste Erkenntnis

Blockstor hat nach wie vor experimentellen Status. Die Erfahrung hat mir aber erlaubt, die Arbeit an anderen Projekten erheblich zu beschleunigen und zu automatisieren, und ich wende sie inzwischen täglich an.

Viele halten KI immer noch für ein Autovervollständigungswerkzeug. Für mich hat das schon lange aufgehört zu stimmen. AI-first-Entwicklung heißt nicht, ein Modell gelegentlich eine Funktion schreiben zu lassen. Sie heißt, den gesamten Engineering-Prozess um Agenten, Kontext, Tests, Skills, Pläne, Review und Automatisierung herum neu zu bauen.

Auf diese Weise kann man Aufgaben angehen, die für ein kleines Team früher zu groß aussahen — zum Beispiel mit einer Kubernetes-nativen Implementierung eines Speichersystems der LINSTOR-Klasse zu experimentieren. Das funktioniert allerdings nur unter einer Bedingung: Man braucht Disziplin. Ohne Plan erzeugt KI Chaos sehr viel schneller, als ein Mensch es könnte. Mit Plan, Tests, Agenten und ordentlichem Review wird KI zum Kraftverstärker für das Engineering.

Und so, glaube ich, sieht der Bau komplexer Infrastruktur von hier an aus: nicht ein Ingenieur gegen eine gewaltige Codebasis, sondern ein Ingenieur als Architekt eines Prozesses, um den herum ein Schwarm spezialisierter Agenten arbeitet. Die Aufgabe des Ingenieurs ist es nicht, jeden Agenten zu beaufsichtigen. Sie ist es, ein System zu bauen, in dem die Agenten sich selbst beaufsichtigen und nur mit dem zum Menschen kommen, was wirklich einen Menschen braucht.

### Community

- [Blockstor auf GitHub](https://github.com/cozystack/blockstor)
- [Cozystack auf GitHub](https://github.com/cozystack/cozystack)
- Telegram-[Gruppe](https://t.me/cozystack)
- Slack-[Gruppe](https://kubernetes.slack.com/archives/C06L3CPRVN1) (Einladung unter [https://slack.kubernetes.io](https://slack.kubernetes.io/))
- [Kalender der Community-Meetings](https://calendar.google.com/calendar?cid=ZTQzZDIxZTVjOWI0NWE5NWYyOGM1ZDY0OWMyY2IxZTFmNDMzZTJlNjUzYjU2ZGJiZGE3NGNhMzA2ZjBkMGY2OEBncm91cC5jYWxlbmRhci5nb29nbGUuY29t)

---

Dieser Beitrag ist eine deutsche Fassung des Artikels [What dozens of AI agents taught me: how I wrote the Blockstor storage system as an experiment](https://blog.aenix.io/what-dozens-of-ai-agents-taught-me-how-i-wrote-the-blockstor-storage-system-as-an-experiment-921f7d3a1137), zuerst erschienen bei [Ænix](https://blog.aenix.io) auf Medium.
