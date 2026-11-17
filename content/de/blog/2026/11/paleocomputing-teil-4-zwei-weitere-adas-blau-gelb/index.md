---
title: "Paleocomputing, Teil 4: Zwei weitere Adas — die blaue und die gelbe Sprache, die das Pentagon 1978 verwarf, nachgebaut"
description: "BLUE und YELLOW, 1978 ausgeschiedene Entwürfe der Pentagon-Sprachausschreibung, nachgebaut: selbstübersetzende Compiler, Dijkstras THE und Kubernetes."
seo_title: "Zwei weitere Adas: BLUE und YELLOW von 1978 nachgebaut"
slug: "paleocomputing-teil-4-zwei-weitere-adas-blau-gelb"
date: "2026-11-17"
cover_image: "/img/blog/covers/de/paleocomputing-teil-4-zwei-weitere-adas-blau-gelb.jpg"
lastmod: "2026-11-17"
series: "Paleocomputing"
author: "Timur Tukaev"
type: "article"
topics: ["Kubernetes", "Cozystack", "Open Source", "Retrocomputing", "Distributed Systems", "Programming Languages"]
language: "de"
hreflang_en: "/blog/2026/11/two-more-adas-blue-and-yellow/"
related_posts: ["/de/blog/2026/10/paleocomputing-teil-3-zwei-adas-pentagon-programmiersprachen/", "/de/blog/2026/10/paleocomputing-teil-2-kubernetes-oberon-wirth-funk/", "/de/blog/2026/09/paleocomputing-teil-1-wirth-oberon-qemu-kubevirt/"]
direct_answer: "**BLUE (SofTech) und YELLOW (SRI International) waren zwei der vier vorläufigen Entwürfe, die im Februar 1978 beim Sprachwettbewerb des US-Verteidigungsministeriums eingereicht wurden, aus dem Ada hervorging; im April 1978 empfahl das Pittsburgher Gremium, Blau zu verwerfen, und in die zweite Runde kamen Grün und Rot.** Aus dem 4.575 Seiten starken DTIC-Band ADB950587, gesichert in der Wayback Machine, wurden beide Sprachen nachgebaut: je ein Compiler in der Sprache selbst, der sich Byte für Byte reproduziert, die 1978 abgedruckten Programme, Dijkstras THE und Kubernetes darauf. Der parallele Block der blauen Sprache meldet einen gescheiterten Zweig an den, der ihn gestartet hat, und ihr REGION-Semaphor wird automatisch freigegeben, wenn der Zweig, der ihn hält, abnormal endet; die gelbe Sprache ist Pascal mit Hoare-Monitoren und einem SIMULATED_TIME-Block mit künstlicher Zeit. Alles läuft in einem Browser-Tab, auf jedem Rechner mit C-Compiler und in Cozystack."
quick_facts:
  - label: "Sprachen"
    value: "BLUE (SofTech, Leitung John Goodenough) und YELLOW (SRI International, Leitung Jay Spitzen), Entwürfe der ersten Runde vom Februar 1978"
  - label: "Quelle"
    value: "DTIC-Band ADB950587, „DoD Common High Order Language, Phase 1\", 4.575 Seiten, gesichert in der Wayback Machine"
  - label: "Compiler"
    value: "Rund 16.000 Zeilen BLUE und 10.000 Zeilen YELLOW; beide übersetzen nach C und erreichten den Fixpunkt im ersten Anlauf"
  - label: "Programme von 1978"
    value: "Blau: 17 Programme, darunter eine Ein-/Ausgabebibliothek aus Anhang C mit 1.300 Zeilen; Gelb: 15 Lehrbuchprogramme, 4 lassen sich unverändert übersetzen"
  - label: "Systeme"
    value: "Dijkstras THE, Kubernetes auf THE und eine eigenständige Kubernetes-Control-Plane in beiden Sprachen"
  - label: "Wo es läuft"
    value: "Browser (WebAssembly), jeder Rechner mit C-Compiler und make, Cozystack (Image ada-colors-run)"
quick_facts_source: "impl/ada-colors auf github.com/tym83/paleocomputing"
faq:
  - q: "Was waren die Sprachen BLUE und YELLOW?"
    a: "Zwei der vier vorläufigen Entwürfe, die am 15. Februar 1978 beim Sprachwettbewerb des US-Verteidigungsministeriums eingereicht wurden. Blau stammte von SofTech und war um Typen herum gebaut; Gelb stammte von SRI International und passte Pascal an die Ironman-Anforderungen an. Beide schieden nach der ersten Runde aus, während Grün zu Ada wurde."
  - q: "Warum verwarf das Pittsburgher Gremium Blau?"
    a: "Sein Bericht vom 4. April 1978 nannte den Entwurf sorgfältig und vollständig, aber von einer alles durchdringenden Komplexität überladen, ohne erkennbares einfaches Grundmodell. Gelb unterlag Rot nur knapp: Das Gremium schrieb, die Wahl sei nicht eindeutig, auch wenn die Mehrheit Rot bevorzugte."
  - q: "Was konnte die blaue Sprache von 1978, was Ada 83 nicht konnte?"
    a: "Ein paralleler Block in Blau wartet auf alle seine Pfade und löst die Ausnahme eines gescheiterten Pfads selbst aus, sodass der Fehler den erreicht, der den Block gestartet hat. Seine REGION-Semaphore gibt das System frei, wenn der Pfad, der sie hält, abnormal endet, SYNCH-Signalsemaphore dagegen nicht. In Ada 83 endet eine Task mit unbehandelter Ausnahme einfach, und niemand erfährt davon."
  - q: "Was ist SIMULATED_TIME in der gelben Sprache?"
    a: "Eine Markierung für einen BEGIN ... END-Block, die die Prozesse darin abwechselnd laufen lässt, mit künstlicher Zeit: Jede Anweisung dauert null Zeit außer DELAY(n), und die Uhr rückt nur vor, wenn alle Prozesse im Block warten."
  - q: "Was bekam Ada später, was Blau und Gelb schon 1978 hatten?"
    a: "Geschützte Objekte in Ada 95, deren Rationale Monitore unter ihren Vorfahren nennt; Overriding-Indikatoren in Ada 2005, ähnlich im Geist wie EXTENDS und REPLACES in Gelb; den Aspekt Global in Ada 2022, nah an den IMPORTS-Listen von Blau; und parallele Blöcke in Ada 2022, allerdings nur für Berechnungen, nicht für Tasks."
  - q: "Wie kann ich BLUE und YELLOW ausprobieren?"
    a: "Öffnen Sie tym83.github.io/paleocomputing/red/ im Browser, wo Übersetzer und clang als WebAssembly laufen, oder klonen Sie github.com/tym83/paleocomputing und führen Sie make in impl/ada-colors mit einem beliebigen C-Compiler aus. Fünfzehn Labs, sieben in Blau und acht in Gelb, prüfen sich mit labs/check.sh selbst."
primary_keyword: "Ada-Sprachwettbewerb BLUE und YELLOW"
keywords: ["Ada", "BLUE-Sprache", "YELLOW-Sprache", "SofTech", "SRI International", "John Goodenough", "Ironman", "DoD-Sprachwettbewerb", "Paleocomputing", "selbstübersetzender Compiler", "Hoare-Monitore", "Semaphore", "Structured Concurrency", "deterministische Simulation", "THE-Mehrprogrammsystem", "Dijkstra", "Kubernetes Control Plane", "WebAssembly", "Cozystack", "Retrocomputing"]
quiz:
  title: "Testen Sie sich: die blaue und die gelbe Ada"
  questions:
    - q: "Was passiert in Blau mit einem REGION-Semaphor, wenn der Pfad, der ihn hält, abnormal endet?"
      options:
        - { text: "Er bleibt bis zum Programmende belegt", correct: false }
        - { text: "Das System gibt ihn automatisch frei", correct: true }
        - { text: "Er geht an den übergeordneten Block über", correct: false }
      explanation: "REGION-Semaphore haben einen Besitzer und werden frei, wenn der besitzende Pfad abnormal endet. SYNCH-Signalsemaphore nicht, damit Wartende keine Signale über Ereignisse bekommen, die nie stattfanden."
    - q: "Warum weist Gelb `a - b - c` zurück?"
      options:
        - { text: "Subtraktion ist für INTEGER nicht definiert", correct: false }
        - { text: "Ironman-Anforderung 4G verlangte Klammern um verkettete nicht assoziative Operatoren", correct: true }
        - { text: "Gelb liest Ausdrücke von rechts nach links", correct: false }
      explanation: "SRI erfüllte die Anforderung wörtlich; SofTech plädierte für ihre Streichung, und die nächste Fassung schwächte sie zur Empfehlung ab."
    - q: "Was empfiehlt der Bericht des Pittsburgher Gremiums vom 4. April 1978 für Blau?"
      options:
        - { text: "Blau neben Grün fortführen", correct: false }
        - { text: "Blau mit Gelb zusammenlegen", correct: false }
        - { text: "Blau verwerfen", correct: true }
      explanation: "Das Gremium hielt Blau für sorgfältig und vollständig, aber von Komplexität überladen, und empfahl, Grün und mindestens einen von Rot und Gelb fortzuführen."
    - q: "Wie lange dauert eine gewöhnliche Anweisung in einem `SIMULATED_TIME`-Block?"
      options:
        - { text: "Null Zeiteinheiten", correct: true }
        - { text: "Einen Takt der Uhr", correct: false }
        - { text: "So lange wie auf echter Hardware", correct: false }
      explanation: "Nur DELAY(n) kostet Zeit, genau n Einheiten, und die Uhr rückt nur vor, wenn alle Prozesse im Block warten."
---

Im Februar 1978 reichten vier Teams beim US-Verteidigungsministerium ihre vorläufigen Entwürfe für eine Sprache ein, die ein Jahr später den Namen Ada bekommen sollte. Die Entwürfe wurden anonymisiert, und statt Firmennamen trugen sie Farben. Grün stammte vom französisch-amerikanischen Team um Jean Ichbiah, Rot von Intermetrics aus Boston, Blau von SofTech und Gelb von SRI International, einem Forschungsinstitut in Kalifornien. Im Frühjahr kamen Grün und Rot in die zweite Runde, Blau und Gelb wanderten ins Archiv, und ein Jahr später gewann Grün und wurde zu Ada.

{{< figure src="01-en-diagram-contest.png" alt="Wie Ada ausgewählt wurde" caption="Wie Ada ausgewählt wurde: vier Entwürfe im Februar 1978, zwei in der zweiten Runde, ein Sieger im Mai 1979" >}}

Im [Artikel über die Finalisten](/de/blog/2026/10/paleocomputing-teil-3-zwei-adas-pentagon-programmiersprachen/) habe ich Rot und Grün aus ihren Dokumenten von 1979 nachgebaut. Für jede der beiden Sprachen habe ich einen Compiler in der Sprache selbst geschrieben und darauf ein Betriebssystem und Kubernetes aufgesetzt. Blau und Gelb schienen damals unerreichbar. Ihre Beschreibungen steckten in einem Band von 4.500 Seiten, den das Archiv des Verteidigungsministeriums gerade nicht mehr herausgab. Dann tauchte eine Kopie in einem Webarchiv auf, und ich habe mit diesen beiden Sprachen dasselbe gemacht.

Dieser Beitrag handelt von den zwei Entwürfen, die gegen Grün und Rot verloren haben. Blau ist so konsequent um Typen herum gebaut, dass selbst die Zuweisung als Operation eines Typs definiert ist. Gelb ist ein Pascal, das an die Anforderungen des Militärs angepasst wurde. Seine Tasks verständigen sich nicht über Rendezvous wie in Grün und in Ada, wo eine Task an einem vereinbarten Eingang auf die andere wartet, bis sich beide treffen. Stattdessen kommunizieren sie über Hoares Monitore: Module mit gemeinsamen Daten, in denen sich zu jedem Zeitpunkt nur ein Prozess aufhalten darf. Für beide Sprachen habe ich Compiler in der jeweiligen Sprache selbst geschrieben, und diese Compiler haben zum ersten Mal überhaupt Programme ausgeführt, die die Sprachautoren 1978 in ihren Berichten abgedruckt hatten und die seitdem niemand laufen gesehen hat. Außerdem laufen auf beiden Sprachen jetzt THE, das Mehrprogrammsystem, das Dijkstras Gruppe in den 1960er-Jahren gebaut hat, und Kubernetes darauf.

Das Spannendste sind aber nicht die Sprachen selbst. Spannend ist, dass sich jetzt alle vier Entwürfe nebeneinanderlegen und anhand von laufendem Code vergleichen lassen statt anhand von Gutachten. Dasselbe Beispiel verhält sich in jeder der vier Sprachen anders, und die Unterschiede sind deutlich interessanter, als ich erwartet hatte. Wenn in der blauen Sprache von 1978 einer von mehreren parallelen Zweigen mit einem Fehler endet, erfährt das derjenige, der die Zweige gestartet hat, und das haben die gängigen Sprachen erst in den letzten Jahren gelernt. Ihr Mutex wird automatisch freigegeben, wenn der Zweig, der ihn hält, abnormal endet. Und in die gelbe Sprache ist eine künstliche Zeit eingebaut: Die Uhr läuft nur dann weiter, wenn das Programm es will.

Der Beitrag ist lang, deshalb vorab ein Überblick. Zuerst erzähle ich von dem Buch von 1978, aus dem die Texte stammen, und von den Menschen, die die Sprachen entworfen haben. Danach gehen wir Blau und Gelb nacheinander durch. Anschließend lassen wir dieselben Beispiele in allen vier Sprachen laufen und fassen die Unterschiede in einer Tabelle zusammen, sehen uns die Compiler und die Programme von 1978 an, dann THE und Kubernetes, und versuchen zu verstehen, warum diese Entwürfe verloren haben. Am Ende geht es darum, was davon später in Ada auftauchte und wie sich die Programmierung hätte entwickeln können, wenn Blau oder Gelb gewonnen hätte.

Dies ist ein weiterer Teil meiner Serie über Paleocomputing. Mich interessieren die Ideen, die in Technologien steckten, die sich nicht durchgesetzt haben oder eine Sache für Enthusiasten und Theoretiker geblieben sind: was wir mit ihnen verloren haben und was davon später in anderen Technologien zurückkam. Den Artikel über die Finalisten müssen Sie nicht vorher lesen. Wo es nötig ist, erkläre ich kurz, wie Rot und Grün funktionieren.

Alle Quellen, Notizen und Anleitungen liegen im Repository [github.com/tym83/paleocomputing](https://github.com/tym83/paleocomputing) im Verzeichnis [`impl/ada-colors`](https://github.com/tym83/paleocomputing/blob/main/impl/ada-colors/README.md), unter der Apache-2.0-Lizenz.

## Ein Buch für Mikrofiche

Fangen wir damit an, woher die Texte stammen. 2023 erschien auf der Mailingliste systemsafety, auf der es um die Zuverlässigkeit von Software für sicherheitskritische Systeme geht, eine interessante [Nachricht](https://lists.techfak.uni-bielefeld.de/pipermail/systemsafety/2023-September/005936.html). Auf Bitte eines Enthusiasten hatte DTIC, das Archiv für technische Dokumentation des Verteidigungsministeriums, einen 4.575 Seiten starken Band mit dem Titel „DoD Common High Order Language, Phase 1" eingescannt. Im Katalog des Archivs trägt er die Nummer ADB950587, und er enthält alle vier Entwürfe der ersten Runde. Während ich mit Rot und Grün beschäftigt war, ging die DTIC-Website zuerst in Wartung und lehnte danach jede Anfrage ab. Die Rettung war die Wayback Machine: Im September 2023 hatte dort jemand das komplette PDF gesichert. Der Band trägt denselben Vermerk wie das Handbuch der roten Sprache: „zur Veröffentlichung freigegeben, Verbreitung unbeschränkt".

{{< figure src="02-scan-preface.png" alt="Das Vorwort des Bandes ADB950587" caption="Das Vorwort des Bandes ADB950587" >}}

{{< figure src="03-scan-colours.png" alt="Der Farbschlüssel auf der nächsten Seite" caption="Der Farbschlüssel auf der nächsten Seite: Grün ist CII-Honeywell Bull, Rot ist Intermetrics, Gelb ist SRI International, Blau ist SofTech" >}}

Schon das Vorwort ist ein historisches Dokument. Die Herausgeber erklären, dass das Buch für Mikrofiche gemacht wurde, also für Filmkarten mit verkleinerten Seiten, die man durch ein Lesegerät betrachtete, und dass es nie eine gebundene Ausgabe gab: Alle zweihundert gedruckten Exemplare gingen direkt an die Gutachter, sodass die Mikrofiche der einzige Satz sind, der sich überhaupt verbreiten lässt. Das Vorwort verrät auch alle Farben und wer hinter welcher steht. Und es endet mit einem Satz, den ich mehrmals gelesen habe. Die unterlegenen Entwürfe werden nicht fortgeführt, sie sind allenfalls für Forscher von Interesse, das Ziel des Programms ist eine einzige Sprache, und Alternativen zu fördern hält das Verteidigungsministerium für unangebracht.

Darin stehen die vier Entwürfe genau so, wie sie am 15. Februar 1978 eingereicht wurden. Rot liegt in seiner ersten Fassung vor: Das ist jenes REDL mit Monitoren, das das rote Team später verwarf und praktisch neu schrieb. Nach den Entwürfen folgen die Analysen von achtzig Teams, von Universitäten bis zu Rüstungsunternehmen, und der Bericht des Pittsburgher Gremiums. Seine Mitglieder werteten diese Analysen aus, befragten die Sprachautoren und verdichteten alles zu den Tabellen, nach denen im April 1978 entschieden wurde, wer ins Finale kommt.

Der OCR-Text ist stellenweise furchtbar: eine Null statt des Buchstabens O, ein Dollarzeichen statt S, ein kleines l statt des Prozentzeichens. Deshalb habe ich jedes Programm mit dem Seitenbild abgeglichen, und die Programme in der blauen Sprache, voller Backslashes und Rautenzeichen, habe ich gleich ganz von den Bildern abgetippt.

### Wer die blaue und die gelbe Sprache entworfen hat

Den blauen Entwurf leitete John Goodenough von SofTech, und sein Name ist in der Geschichte von Ada alles andere als eine Randnotiz. 1975 veröffentlichte er in den Communications of the ACM eine der ersten großen Arbeiten zur Ausnahmebehandlung, und nach dem Wettbewerb erhielt SofTech unter seiner Leitung den Auftrag für die Testsuite, mit der Ada-Compiler gegen den Standard geprüft wurden. Später leitete Goodenough die Gruppe, die den Standard auslegte, und schrieb Anforderungen für Ada 95. Das blaue Team hat also zwar verloren, arbeitete aber noch zwei Jahrzehnte lang an Ada.

Den gelben Entwurf leitete Jay Spitzen von SRI International, wo man damals SIFT baute, einen fehlertoleranten Bordrechner für Flugzeuge. Dazu kommen wir noch. Ein populäres Time-Life-Buch von 1986 und Bertrand Meyer schreiben übereinstimmend, dass Hoare und Wirth das gelbe Team beraten haben. Im Dokument selbst werden die Berater nicht namentlich genannt, aber ihre Ideen sind auf jeder Seite zu sehen. Die Sprachbeschreibung ist aufgebaut wie Wirths Beschreibung von Pascal, die Module stammen aus seinem Modula, die Monitore aus Hoares Aufsatz von 1974, und im Literaturverzeichnis stehen die Einträge „Hoare, private communication" und „Wirth, private communication".

### Was Dijkstra von ihnen hielt

Dijkstra verbrachte den gesamten März 1978 damit, die vier Entwürfe zu lesen, und [schrieb zu jedem ein Gutachten](https://www.cs.utexas.edu/~EWD/index06xx.html). Blau bekam sein Fett weg für das Kapitel über Typen und Operationen, das nach seinen Worten „auf 160 (!) Seiten angewachsen" war. Gelb nannte er ein hoffnungsloses Durcheinander und fügte hinzu, die Berater täten ihm leid, denen es nicht gelungen sei, das zu verhindern. Wenn man bedenkt, wer als Berater des gelben Teams gilt, ist das ein ziemlich bissiger Satz.

Von Rot und Grün war er auch nicht begeistert, sodass man nach seinen Gutachten die unterlegenen Entwürfe nicht von den siegreichen unterscheiden könnte. Am Ende entschieden die Gutachter und das Expertengremium, und auf ihre Schlüsse komme ich zurück, sobald ich beide Sprachen in Aktion gezeigt habe.

## BLUE: eine Sprache, die um Typen herum gebaut ist

Von den vier Sprachen wirkt Blau am fremdesten, deshalb beginne ich mit einem kurzen Programm aus einem [Lab](https://github.com/tym83/paleocomputing/blob/main/impl/ada-colors/labs/blue/b2-generic.blu). Darin vertauscht ein und dieselbe Prozedur zwei ganze Zahlen, zwei Strings und zwei Farben:

```
TYPE COLOR = ENUM (\RED, \GREEN, \BLUE);
VAR I, J: INTEGER;
VAR A, B: ASCII_STR (4);
VAR K, M: COLOR;
...
SWAP (# I, J);
SWAP (# A, B);
SWAP (# K, M);

PROCEDURE SWAP (# X, Y: ?T) WHERE T NEEDS (STORE_ (T ## T));
   VAR TMP: T;
   TMP := X;
   X := Y;
   Y := TMP;
END PROCEDURE SWAP;

FUNCTION FRAME (S: ASCII_STR (?L)) RETURNS (ASCII_STR (L + 2));
   RETURN '[' !! S !! ']';
END FUNCTION FRAME;
```

Fast jedes Zeichen hat hier eine Bedeutung, gehen wir sie also der Reihe nach durch.

{{< figure src="04-scan-blue-code.png" alt="So sah die blaue Sprache in der Spezifikation selbst aus" caption="So sah die blaue Sprache in der Spezifikation selbst aus: ein generischer Stack, bei dem `?T` den Elementtyp ableitet, `#` die Parametergruppen trennt, `SIGNALS` die Ausnahmen aufzählt und `WHERE T NEEDS` festlegt, was vom Typ verlangt wird" >}}

Aufzählungsliterale werden mit einem Backslash geschrieben: `\RED`, `\GREEN`. Das ist keine Laune. Ein Literal gehört in Blau zu keinem einzelnen Typ, `\GREEN` kann also zugleich eine Ampelfarbe und eine Regenbogenfarbe sein und in jedem dieser Typen an seiner eigenen Position stehen. Welcher gemeint ist, entscheidet der Kontext, und reicht der Kontext nicht aus, nennt man den Typ ausdrücklich: `[COLOR]$$(\GREEN)`. Es gibt auch ungeordnete Aufzählungen, `UNORDERED`, für die nichts außer Gleichheit definiert ist. Eine Spielkartenfarbe ist nie größer oder kleiner als eine andere, und die Sprache lässt nicht zu, dass man so tut, als wäre es anders.

Die Parameter einer Prozedur zerfallen in drei Gruppen, Eingabe-, Änderungs- und Ausgabeparameter, und Rautenzeichen trennen die Gruppen. In `SWAP (# X, Y)` gibt es keine Eingaben, und beide Parameter werden geändert. In `STORE_ (T ## T)` gibt es eine Eingabe vom Typ `T`, keine Änderungsparameter und eine Ausgabe desselben Typs: Die Zuweisung nimmt einen Wert und liefert den neuen Wert der Variablen. Die Gruppen sieht man auch an der Aufrufstelle, sodass `SWAP (# I, J)` dem Leser sofort sagt, dass sich `I` und `J` ändern werden.

`?T` ist ein generischer Typ, der aus dem Argument abgeleitet wird. Für jeden Typ entsteht die Instanz der Prozedur automatisch, direkt am Aufruf, und niemand muss sie benennen oder deklarieren. In Rot war es genauso, während man sie in Grün und in Ada explizit erzeugen muss. Und ableiten lassen sich nicht nur Typen. `ASCII_STR (?L)` übernimmt die Länge des Strings aus dem Argument, und die Funktion `FRAME` verspricht, einen String der Länge `L + 2` zurückzugeben, weil die Länge hier Teil des Typs ist und der Compiler sie kennt.

Und `WHERE T NEEDS (STORE_ (T ## T))` legt die Liste dessen fest, was der Prozedurrumpf vom Typ `T` braucht, und hier braucht er nur die Zuweisung. Diese Operationen werden dort genommen, wo die Prozedur aufgerufen wurde. Hat der Typ keine Zuweisung, lässt sich der Aufruf nicht übersetzen, und der Compiler meldet einen verständlichen Fehler direkt an der Aufrufstelle statt irgendwo tief in der Instanz. Heute nennt man das Concepts in C++ und Trait Bounds in Rust.

### Auch die Zuweisung ist eine Funktion

`STORE_` im vorigen Beispiel ist kein Tippfehler. In Blau wird jede Operation, ob Zuweisung, Vergleich oder Teilstring, als Aufruf einer Funktion mit festem Namen geschrieben: `ADD_`, `EQUAL_`, `LESS_THAN_`, `SUBSTRING_`, `STORE_`. Ein abstrakter Typ, den ein Modul exportiert, definiert seine Addition und seine Zuweisung deshalb auf dieselbe Weise, als gewöhnliche Unterprogramme. Ada hat bis heute keine benutzerdefinierte Zuweisung: Mit den kontrollierten Typen von Ada 95 lässt sich festlegen, was nach einer Kopie und vor der Zerstörung passiert, aber nicht die Zuweisung selbst. In C with Classes, dem Vorläufer von C++, konnte man die Zuweisung schon 1980 neu definieren.

Einer der Gutachter von 1978 schrieb, Blau sei am nächsten daran herangekommen, den Typ zu dem zu machen, was die ganze Sprache zusammenhält, und das sieht man an vielen Details.

Nehmen wir Zahlen. Rechner der 1970er-Jahre hatten oft keine Gleitkommaarithmetik, also speicherte man gebrochene Größen als ganze Zahlen mit gedachtem Komma, etwa eine Geschwindigkeit in Hundertstelmetern pro Sekunde. Das ist Festkomma, und meist musste der Programmierer sich selbst merken, wo bei welcher Variablen das Komma steht. In Blau merkt es sich der Typ. `FIXED (scale, radix, precision)` sagt, um wie viele Stellen das Komma verschoben ist, in welchem Zahlensystem und mit welcher Genauigkeit, und der Compiler richtet die Kommas selbst aus, wenn er solche Zahlen addiert oder vergleicht. Selbst `INTEGER` ist hier als Festkomma angelegt, bei dem das Komma ganz am Ende steht. Kein anderer Entwurf beschreibt Festkomma so ausführlich.

Bei Strings ist es genauso. Der Zeichensatz gehört zum Typ eines Strings: In `CHAR_STR (L, C)` ist `L` die Länge und `C` der Zeichensatz, ASCII oder etwa einer der vielen Sechs-Bit-BCD-Codes, die die Rechner jener Zeit benutzten. Man kann also eine einzige Funktion für Strings in jeder Kodierung schreiben, und der Compiler lässt nicht zu, dass man einen ASCII-String mit einem BCD-String verkettet.

Sogar der Umgang mit Hardware wird in Blau über Typen beschrieben. Die Codes, mit denen ein Gerät seinen Zustand meldet, wählte nicht der Programmierer, sondern der Ingenieur, der die Platine entworfen hat. In Blau wird ein solcher Zustand mit einer gewöhnlichen Aufzählung beschrieben, und jedem Wert wird der Code zugeordnet, den die Hardware vorgibt:

```
TYPE STATUS = UNORDERED (\IDLE, \BUSY, \DONE, \FAULT)
   REP ENUM_VAL_REP (4, VALUES (\IDLE AS BIN '0000', \BUSY AS BIN '0001',
                                \DONE AS BIN '1000', \FAULT AS BIN '1111'));
...
SELECT OBJECT_MACHINE FROM
   PDP_11 -->
      S := [STATUS]$$(REGISTER);
   END;
END SELECT;
```

Zwei Details sind hier bemerkenswert. Eigene Codes darf nur ein ungeordneter Typ bekommen, weil Hardware-Codes in beliebiger Reihenfolge kommen können und man an ihnen dann nicht mehr ablesen kann, welcher Wert größer ist. Ada kam von der anderen Seite her zum selben Ergebnis: Dort kann man jeder Aufzählung Codes zuweisen, aber sie müssen aufsteigend sein. Und einen Code aus einem Geräteregister als Wert des Typs lesen darf man nur im maschinenabhängigen Teil des Programms, innerhalb von `SELECT OBJECT_MACHINE`, wo das Programm ausdrücklich angibt, auf welcher Hardware es das tut.

### Geschlossene Gültigkeitsbereiche und deklarierte Ausnahmen

Wie in Rot ist eine Prozedur in Blau ein geschlossener Gültigkeitsbereich: Äußere Variablen sieht sie erst, wenn sie sie importiert. Blau ist hier aber strenger als Rot. Eine Prozedur, die eine andere aufruft, muss entweder diese Prozedur oder jede Variable importieren, mit der sie arbeitet, sodass man am Kopf jeder Prozedur ablesen kann, an welche Daten sie über die gesamte Aufrufkette herankommt. Das Rautenzeichen in einer Importliste funktioniert wie bei den Parametern. In `IMPORTS (DATA: (# MUTEX, BALANCE))` steht alles hinter der Raute, beide Variablen sind also zum Ändern importiert, während alles, was die Prozedur nur liest, vor der Raute steht. Ein Programm in Blau besteht selbst aus Segmenten, also Übersetzungseinheiten, die in einer `USES`-Klausel aufführen, was sie voneinander übernehmen.

Ausnahmen werden in Blau im Kopf des Unterprogramms deklariert, etwa `SIGNALS (OVERFLOW, INVALID_FORMAT)`, und ein Unterprogramm kann keine Ausnahme nach außen lassen, die nicht auf dieser Liste steht. Die Rationale von SofTech begründet das genauso wie die Importlisten: Die Schnittstelle einer Prozedur soll vollständig beschrieben sein, und welche Ausnahmen sie auslösen kann, gehört genauso dazu wie das, was sie verändern kann. 1978 machte das kaum jemand außer Barbara Liskov in CLU, und Checked Exceptions, also solche, die der Compiler zu deklarieren oder zu behandeln zwingt, kamen erst mit Java in die gängigen Sprachen. Ada hatte sie nie.

Ein Exception-Handler hängt in Blau an einer Anweisung, nicht an einem Block, und `EXCEPT` kann hinter jeder Anweisung stehen. Das wirkt wie eine Kleinigkeit, bis man `BLOCK ... EXCEPT ... END BLOCK` schreibt und feststellt, dass der Handler nur die letzte Anweisung des Blocks abdeckt und nicht den ganzen Block. Ich bin darauf hereingefallen, und es ist jetzt ein eigener Punkt in den [Compiler-Notizen](https://github.com/tym83/paleocomputing/blob/main/impl/ada-colors/blue/notes/blue-digest.md).

### Der parallele Block

Bei der Nebenläufigkeit ist Blau die strengste der vier Sprachen. Tasks im üblichen Sinn gibt es nicht. Stattdessen gibt es einen parallelen Block, `PAR_BLOCK`, mit parallelen Pfaden, `PATH`, darin, und der Block endet erst, wenn alle seine Pfade geendet haben. Der Block an sich ist nicht neu, es ist Dijkstras `parbegin ... parend` von 1965. Neu ist Folgendes: Löst ein Pfad eine Ausnahme aus, die er nicht behandelt, aber auslösen darf, wartet der Block auf die übrigen Pfade und löst diese Ausnahme dann selbst aus. Der Fehler eines Pfads wird so zum Fehler des Blocks und lässt sich außerhalb behandeln.

Ein Beispiel. Der Block hat zwei gleiche Pfade, `WORKER` 1 und `WORKER` 2, und jeder addiert 10 zu einem gemeinsamen Kontostand, der bei 100 beginnt. Damit sich die Pfade nicht in die Quere kommen, ist der Kontostand durch den Semaphor `MUTEX` geschützt: Ein Pfad belegt ihn mit `REQUEST`, ändert den Kontostand und gibt ihn mit `RELEASE` frei. Auf Semaphore komme ich gleich zurück. Der erste Pfad scheitert absichtlich mit `FAILED`, während er den Semaphor hält. Achten Sie vorerst auf `SIGNALS (FAILED)` im Kopf des Pfads und auf das `EXCEPT` nach dem Block:

```
VAR MUTEX: SEMAPHORE (REGION) := NEW (1);
VAR BALANCE: INTEGER := 100;
PAR_BLOCK
   PATH WORKER FOR ID IN [1:2] SIGNALS (FAILED) IMPORTS (DATA: (# MUTEX, BALANCE));
      PAUSE (ID);          % PAUSE and LOG are my procedures: a wait in milliseconds
      REQUEST (# MUTEX);   % and a timestamped log line
      PAUSE (5);
      IF ID = 1 THEN
         SIGNAL FAILED;
      END IF;
      BALANCE := BALANCE + 10;
      RELEASE (# MUTEX);
   END PATH WORKER;
END PAR_BLOCK;
EXCEPT
   FAILED --> LOG ('the block signals FAILED: worker 1 ended abnormally'); END;
END EXCEPT;
```

{{< figure src="05-en-blue-parblock.gif" alt="Dasselbe Beispiel im Browser" caption="Dasselbe Beispiel im Browser: Der erste Pfad endet abnormal, ohne den Semaphor freizugeben, der zweite bekommt ihn sofort, und der Block löst `FAILED` aus. Die Ausgabe ist verlangsamt, auf der virtuellen Uhr ist das Programm in Sekundenbruchteilen durch." >}}

Heute nennt man diesen Ansatz Structured Concurrency. Parallele Zweige sind in einen Block des Programms eingebettet wie gewöhnliche Anweisungen: Der Block endet erst, wenn sie enden, und scheitert einer von ihnen, erfährt es derjenige, der den Block gestartet hat. Vor etwa acht Jahren tauchte diese Idee überall wieder auf: in der Bibliothek Trio für Python, in den Task Groups von Swift, in `StructuredTaskScope` in Java. Blau ist einfacher gestrickt. Scheitert ein Pfad, laufen die anderen weiter, und man muss sie selbst mit `TERMINATE` stoppen; scheitern zwei Pfade, kommt nur eine der beiden Ausnahmen nach außen. Und `TERMINATE` reißt einen Pfad nicht mitten im Satz ab. Der Pfad bekommt die Ausnahme `TERMINATED`, sobald er das nächste Mal an der Reihe ist, und kann sie abfangen, etwa um hinter sich aufzuräumen. Pfade haben außerdem Prioritäten: Sind zwei lauffähig, bekommt derjenige mit der höheren Priorität den Prozessor.

In Ada 83 wartet ein Block ebenfalls auf seine Tasks, aber wenn eine Ausnahme in einer Task nicht behandelt wird, endet die Task einfach. Die Ausnahme wird nirgendwohin weitergegeben, und wer die Task gestartet hat, erfährt nie, dass sie gescheitert ist. Das ist eine der bekanntesten Fallen von Ada, und die blaue Sprache von 1978 hat sie nicht.

Diese Strenge hat ihren Preis. Ein paralleler Block darf nicht in einem Unterprogramm stehen, man kann also aus einer Prozedur heraus keine paar Pfade starten, und das wird uns beim Kubernetes in der blauen Sprache noch einholen.

### Zwei Arten von Semaphoren

Blau hat weder Mailboxen, also die Nachrichtenwarteschlangen zwischen Tasks, die es in Rot gibt, noch die Rendezvous von Grün. Pfade stimmen sich über Semaphore ab. Dijkstras Semaphor ist ein Zähler mit zwei Operationen: P wartet, bis der Zähler größer als null ist, und verringert ihn, und V erhöht den Zähler und weckt einen der Wartenden. In Blau gibt es Semaphore in zwei Arten, und der Unterschied ist subtil. `SYNCH` ist ein klassischer Semaphor ohne Besitzer: Ein Pfad wartet auf ein Ereignis, ein anderer meldet, dass es eingetreten ist. `REGION` dagegen dient als Sperre für gemeinsame Daten und hat einen Besitzer; heute würde man so etwas einen Mutex nennen. Endet der Pfad, der einen solchen Semaphor belegt hat, abnormal, gibt das System ihn selbst frei.

{{< figure src="06-scan-blue-semaphores.png" alt="Abschnitt 3.11 der Spezifikation von SofTech" caption="Abschnitt 3.11 der Spezifikation von SofTech: `SYNCH`- und `REGION`-Semaphore. `REGION`-Semaphore, die ein Pfad belegt und nicht freigegeben hat, werden bei seinem abnormalen Ende automatisch freigegeben" >}}

Zurück zum Beispiel oben. Der erste Pfad endet abnormal, ohne den Semaphor je freizugeben, aber es ist ein `REGION`-Semaphor, also gibt das System ihn selbst frei. Der zweite Pfad bekommt ihn sofort und addiert seine 10, und das Programm läuft mit einem Kontostand von 110 bis zum Ende durch, statt für immer an einem Semaphor zu hängen, den niemand mehr freigeben kann. Wichtig ist, dass das System den Semaphor nur dann freigibt, wenn der Pfad abnormal geendet hat, also wenn niemand die Ausnahme behandelt hat. Hat der Pfad die Ausnahme selbst behandelt und weitergearbeitet, bleiben seine Semaphore bei ihm. [Eines der Labs](https://github.com/tym83/paleocomputing/blob/main/impl/ada-colors/labs/blue/b5-region.blu) baut genau darauf auf.

Warum dann nicht alle Semaphore freigeben, wenn ein Pfad abnormal endet? Auch darauf hat die Rationale von SofTech eine Antwort. Dass ein Pfad einen Semaphor hält, lässt sich nur innerhalb der Belegungsoperation selbst festhalten. Schreibt man es mit einer eigenen Anweisung direkt nach der Belegung auf, kann der Pfad dazwischen enden, wenn der Semaphor schon belegt ist, die Notiz darüber, wer ihn belegt hat, aber noch fehlt. Also muss das System die Semaphore eines abnormal beendeten Pfads freigeben und nicht ein Exception-Handler im Programm. Würde das System aber alle Semaphore wahllos freigeben, gäbe es auch die signalisierenden frei, und wer darauf wartet, bekäme Signale über Ereignisse, die nie stattgefunden haben. Deshalb gibt es zwei Arten, und automatisch freigegeben werden nur die Sperren.

Dieser Entwurf hat eine offensichtliche Schwäche, und SofTech verschweigt sie nicht. Ein Pfad kann mitten in einem Schreibvorgang abbrechen, und dann bekommt der nächste Pfad den Semaphor samt halb aktualisierter Daten. SofTech nahm das in Kauf, mit der Begründung, dass es für die Rechner in Flugzeugen, Schiffen und Raketen, für die die Sprache gedacht war, keine Katastrophe sei: Ihre Daten kommen meist von Sensoren und werden einen Moment später ohnehin von frischen Messwerten überschrieben. Rund dreißig Jahre später standen die Autoren von POSIX, dem Standard, an dem sich Unix-Systeme orientieren, vor demselben Problem und entschieden sich dafür, den nächsten Besitzer zu warnen. Endet der Thread, dem ein sogenannter robuster Mutex gehört, abnormal, bekommt der nächste, der den Mutex belegt, den Code `EOWNERDEAD`: Der vorige Besitzer ist geendet, ohne den Mutex freizugeben, und die Daten könnten beschädigt sein. Der neue Besitzer muss die Daten prüfen und für konsistent erklären, sonst ist der Mutex nicht mehr benutzbar. Blau kennt keine solche Warnung, der Semaphor geht stillschweigend an den nächsten Pfad über.

Auch die Zeit ist in Blau etwas ungewöhnlich. `WAIT (30)` legt einen Pfad für dreißig Sekunden schlafen, aber Sekunden werden hier als binärer Festkommabruch gespeichert, sodass sich genau eine Millisekunde nicht darstellen lässt, so wie sich ein Drittel nicht exakt als Dezimalbruch schreiben lässt. Und `CLOCK` zeigt, soweit ich die Spezifikation verstehe, nicht die Uhrzeit, sondern wie lange der Pfad selbst schon läuft. Deshalb nehmen meine Programme die Zeitstempel fürs Log von der Uhr der simulierten Maschine.

## YELLOW: Pascal nach den Vorgaben von Ironman

Begann Blau bei den Typen, so begann Gelb bei Pascal. Das Verteidigungsministerium schrieb seine Sprachanforderungen in Etappen, und die Fassungen hießen Strawman, Woodenman, Tinman, Ironman und Steelman, vom Mann aus Stroh bis zum Mann aus Stahl, jede ausführlicher als die vorige. Die Entwürfe der ersten Runde stützten sich auf den Ironman von 1977, und SRI schreibt in seinem Bericht offen, das Ziel sei gewesen, eine Sprache zu entwerfen, indem man Pascal an diese Anforderungen anpasst. Die Beschreibung der gelben Sprache ist in Abschnitte gegliedert, die genau wie in Wirths Pascal-Beschreibung nummeriert sind, und ein Abschnitt bleibt sogar leer, nur damit die Nummern übereinstimmen. Ein Programm darin liest sich wie Pascal mit langen Schlusswörtern:

```
MODULE Enumerations
  IMPORT TextIO, StandardImplementationPrelude;
  REPRESENTATION
    Phase = ORDERED (Pending, Running, Succeeded);
    Fruit = UNORDERED (Lemon, Lime, Orange);
  VAR p: Phase := Pending;

  PROCEDURE WritePhase (CONST p: Phase)
    SELECT p
      CASE Pending => Write("Pending")
      CASE Running => Write("Running")
      CASE Succeeded => Write("Succeeded")
    ENDSELECT;
    RETURN
  ENDPROCEDURE WritePhase;

  FOR q: Phase DO WritePhase(q); Write(" ") ENDFOR;
  ...
ENDMODULE Enumerations
```

SRI ergänzte Pascal um Module aus Modula, Monitore und Signale, Modulvorlagen, Ausnahmen und Überladung. Groß- und Kleinschreibung wird unterschieden: Reservierte Wörter schreibt man groß, Namen nach Belieben. ASCII hatte kein Ungleichheitszeichen, also schreibt man es wie in Modula mit einer Raute.

### Typ und Darstellung

Die wichtigste eigene Erfindung von SRI ist die Trennung von Typ und Darstellung. Eine Darstellung ist hier kein Speicherlayout wie `REP` in Blau, sondern eine Einschränkung der Werte. `INTEGER` gilt als Typ, also als Menge von Werten samt den Operationen darauf, und `INTEGER [1..10]` ist eine seiner Darstellungen, nämlich die ganzen Zahlen von eins bis zehn. Bei Gleitkommazahlen legt eine Darstellung zusätzlich die Genauigkeit fest, bei Festkommazahlen die Schrittweite. Eine Variable lässt sich nur mit einer Darstellung deklarieren, ein bloßes `INTEGER` genügt nicht. Dafür sind verschiedene Darstellungen desselben Typs miteinander verträglich: `INTEGER [1..5]` und `INTEGER [0..9]` bleiben derselbe Typ, und bei der Zuweisung wird nur geprüft, ob der Wert im Bereich liegt. Auch Aufzählungen werden als Darstellungen deklariert, in einem Abschnitt `REPRESENTATION`, wie im Beispiel oben.

{{< figure src="07-scan-yellow-types.png" alt="Kapitel VI der Spezifikation der gelben Sprache" caption="Kapitel VI der Spezifikation der gelben Sprache: Ein Typ ist eine Menge von Werten, eine Darstellung ist eine Teilmenge davon oder eine Art, sie zu speichern. Der Typ `INTEGER` und die Darstellung `INT`" >}}

In Ada heißt dasselbe Subtyp: `subtype SMALL is INTEGER range 1 .. 10` schafft keinen neuen Typ, sondern schränkt den alten ein. Der Unterschied ist, dass ein Subtyp in Ada eine optionale Zugabe ist, während man in Gelb ohne Darstellung nicht auskommt. Für einen wirklich neuen Typ braucht man eine eigene Deklaration, `TYPE T = INTEGER`, und Zahlen dieses Typs schreibt man zusammen mit seinem Namen: `T 50`.

Aufzählungen können wie in Blau geordnet oder ungeordnet sein, und `BOOLEAN` ist hier ungeordnet: Wahr ist nicht größer als falsch. Namen lassen sich nur explizit überladen. Hat eine neue Funktion denselben Namen wie eine bestehende, kennzeichnet man sie mit `EXTENDS`, wenn sie die alten ergänzt, oder mit `REPLACES`, wenn sie sie ersetzt, und ohne Kennzeichnung verdeckt die neue Deklaration alle alten. Aus Versehen lässt sich in Gelb also nichts überladen, und der Leser sieht sofort, wo ein Name eine neue Bedeutung bekommen hat.

### Subtraktion ohne Klammern und der Vorrang von Vergleichen

Subtraktionen lassen sich in Gelb nicht verketten. Addition und Multiplikation sind assoziativ, also braucht `a + b + c` keine Klammern, aber `a - b - c` ist ein Syntaxfehler, ebenso `a * b DIV c`, und die Reihenfolge muss man mit Klammern ausschreiben: `(a - b) - c`. Pascal und fast alle anderen Sprachen lesen einen solchen Ausdruck schlicht von links nach rechts. Das war keine Laune von SRI, sondern eine Vorgabe von Ironman: Nach Anforderung 4G sind Klammern Pflicht, wenn Operatoren gleichen Vorrangs aufeinanderfolgen und der linke nicht assoziativ ist. SRI erfüllte die Anforderung wörtlich, während SofTech in der Rationale der blauen Sprache schrieb, man solle sie streichen, und in der nächsten Fassung wurde sie zur Empfehlung abgeschwächt.

Die zweite Regel ist tückischer, und sie stammt aus Pascal. In Gelb haben Vergleiche wie in Pascal den niedrigsten Vorrang, niedriger als `AND` und `OR`. Deshalb wird `x > 0 AND b` als `x > (0 AND b)` gelesen und lässt sich nicht übersetzen. Schlimmer ist es, wenn die Typen zufällig passen: Dann gibt es gar keinen Fehler, und für boolesche `f` und `g` bedeutet `f = f AND g` stillschweigend `f = (f AND g)`. Etwas später zeige ich, wie die Autoren der Sprache selbst darauf hereingefallen sind.

### Reine Funktionen und Prozeduren mit Rückgabewert

Funktionen sind in Gelb rein: Sie dürfen ihre Parameter nicht ändern und nur ihren eigenen lokalen Variablen etwas zuweisen. Mit denselben Argumenten liefert eine Funktion daher immer dasselbe Ergebnis, egal wo man sie aufruft. Ironman verlangte das nicht, hier ging SRI über die Anforderungen hinaus. Für alles, was Zustand verändern muss, etwa „gib mir die nächste Nummer", gibt es Prozeduren, die einen Wert zurückgeben:

```
FUNCTION Square RETURNS INTEGER64 (CONST x: INTEGER64)
  RETURN x * x
ENDFUNCTION Square;

PROCEDURE NextTicket RETURNS INTEGER64 ()
  ticket := ticket + 1;
  RETURN ticket
ENDPROCEDURE NextTicket;
```

Die grüne Sprache von 1979 löste diese Frage fast genauso, und in Ada 83 gab man die Unterscheidung auf.

### Modulvorlagen

Generische Module sind in Gelb einfacher als in den anderen drei Sprachen. Eine Modulvorlage, `TEMPLATE`, ist einfach Text mit Parametern. Die Anweisung `INSTANCE` schreibt diesen Text um, setzt anstelle der Parameter das ein, was sie bekommen hat, und übersetzt erst dann das entstandene Modul. Jede Instanz wird zu einem eigenen Modul mit eigenem Zustand, und ein Fehler im Rumpf der Vorlage fällt erst beim Erzeugen einer Instanz auf, wie bei C++-Templates mit ihren Fehlermeldungen über drei Bildschirmseiten. In Blau ist es umgekehrt: Die Anforderungen an den Typ stehen in der Liste `NEEDS` und werden dort geprüft, wo die generische Prozedur aufgerufen wird.

{{< figure src="08-scan-yellow-template.png" alt="Abschnitte X.C–D der Spezifikation der gelben Sprache" caption="Abschnitte X.C–D der Spezifikation der gelben Sprache: Eine Instanz bedeutet dasselbe wie das Modul, neu ausgeschrieben mit eingesetzten Parametern" >}}

### Hoares Monitore

Die Nebenläufigkeit dagegen ist der gelungenste Teil von Gelb. Prozesse kommunizieren hier ausschließlich über Monitore. Ein Monitor, wie ihn Hoare und Per Brinch Hansen erfunden haben, ist ein Modul, dessen Prozeduren strikt nacheinander ausgeführt werden, und darin gibt es Signale, also Warteschlangen, in denen ein Prozess bis zum benötigten Ereignis schlafen kann. In Java und POSIX heißen solche Warteschlangen Condition Variables. Hier eine Lösung des klassischen Leser-Schreiber-Problems, der Monitor aus Hoares Aufsatz von 1974, übertragen in die gelbe Sprache:

```
MONITOR ReadersAndWriters
  IMPORT INTEGER64;
  EXPORT StartRead, EndRead, StartWrite, EndWrite;
  VAR readers: INTEGER64 := 0;
      busy: BOOLEAN := FALSE;
      okToRead, okToWrite: SIGNAL;

  PROCEDURE StartRead ()
    IF busy OR AWAITED(okToWrite) THEN WAIT(okToRead) ENDIF;
    readers := readers + 1;
    SEND(okToRead);
    RETURN
  ENDPROCEDURE StartRead;

  PROCEDURE EndRead ()
    readers := readers - 1;
    IF readers = 0 THEN SEND(okToWrite) ENDIF;
    RETURN
  ENDPROCEDURE EndRead;
  ...
ENDMONITOR ReadersAndWriters;
```

Signale funktionieren in Gelb genau so, wie Hoare sie beschrieben hat. `SEND` übergibt den Monitor direkt an den Prozess, den das Signal geweckt hat, und der Prozess, der das Signal geschickt hat, wartet, bis der geweckte Prozess den Monitor verlässt oder wieder einschläft. Deshalb kann der geweckte Prozess seine Bedingung mit `IF` statt mit `WHILE` prüfen: Zwischen Signal und Aufwachen kann sich niemand dazwischendrängen und alles wieder verderben. 1980 wählte Xerox für die Sprache Mesa eine andere Variante, bei der ein Signal nur ein Hinweis ist und der geweckte Prozess die Bedingung in einer Schleife erneut prüfen muss. Durchgesetzt hat sich diese zweite Variante: So funktionieren `wait` und `notify` in Java und die Condition Variables in POSIX. Jeder, der Java geschrieben hat, kennt das `while` um `wait`, und in Gelb braucht man diese Schleife nicht. Der Preis ist Disziplin: Ein Signal darf man nur schicken, wenn die Bedingung tatsächlich erfüllt ist. Und wer einen Wachprozess einbaut, der einen Wartenden bei einem Timeout weckt, obwohl die Bedingung noch nicht erfüllt ist, muss die Bedingung auch in Gelb nach dem Aufwachen erneut prüfen.

Das Warten hat außerdem einen Rang: `WAIT(s, rank)` reiht den Prozess nach einer Nummer ein, und `SEND` weckt den Prozess mit dem niedrigsten Rang. `AWAITED(s)` fragt, ob jemand auf dieses Signal wartet. Und ein Signal lässt sich an eine Interrupt-Adresse binden, dann schickt es die Hardware selbst.

{{< figure src="09-scan-yellow-monitor.png" alt="Ein Beispiel aus dem Lehrbuch der gelben Sprache" caption="Ein Beispiel aus dem Lehrbuch der gelben Sprache: ein Echtzeituhr-Monitor, übertragen aus Wirths Modula. Der Uhrprozess wartet auf ein Signal vom Timer und weckt alle, die auf den nächsten Takt warten" >}}

Wem ein Monitor zu schwergewichtig ist, für den gibt es binäre Semaphore mit `CLAIM` und `RELEASE`. Aber wie wir später sehen werden, lässt man die besser in Ruhe.

### Künstliche Zeit

Zum Schluss das, was mich an Gelb am meisten überrascht hat. Jeder Block `BEGIN ... END` lässt sich mit `SIMULATED_TIME` markieren, und dann laufen die Prozesse darin nicht gleichzeitig, sondern abwechselnd, wie Teile eines gewöhnlichen Programms. Jeder läuft, bis er auf etwas zu warten beginnt, und erst dann geht der Prozessor zum nächsten. Im Block gilt eine eigene, künstliche Zeit. Jede Anweisung dauert null Zeiteinheiten, außer `DELAY(n)`, das genau `n` dauert, und die Uhr rückt nur dann vor, wenn alle Prozesse im Block auf etwas warten.

{{< figure src="10-scan-yellow-simtime.png" alt="Abschnitt IX.B.3 der Spezifikation der gelben Sprache" caption="Abschnitt IX.B.3 der Spezifikation der gelben Sprache: `SIMULATED_TIME` vor `BEGIN`, und jede Anweisung dauert null Zeiteinheiten außer `DELAY(n)`" >}}

Mit anderen Worten: In eine Sprache von 1978 ist Simulation mit kontrollierter Zeit eingebaut. Ironman verlangte tatsächlich eine „Uhr für Simulationen", und die Autoren des blauen Entwurfs antworteten darauf mit dem Versprechen, ein Simulationsmodul wie in Simula zu schreiben, der norwegischen Simulationssprache, aus der die objektorientierte Programmierung hervorging. Gelb machte daraus dagegen ein Sprachkonstrukt, das man um jedes Stück eines echten Programms legen kann. Heute baut man für denselben Zweck eigene Systeme. Die Entwickler der Datenbank FoundationDB haben ihr gesamtes Testen auf solche Simulation gestützt: Das Programm läuft nach einer künstlichen Uhr, Netzwerk und Festplatten sind durch Modelle ersetzt, und jeder Lauf lässt sich Schritt für Schritt wiederholen. Später ging daraus eine eigene Firma hervor, die eine solche Umgebung für fremde Programme verkauft. Davon ist Gelb weit entfernt: Die Spezifikation legt die Reihenfolge der Prozesse nicht fest, und Hardwarefehler modelliert die Sprache nicht. Aber eine Uhr, die nur läuft, wenn das Programm es will, ist schon da.

Mein Projekt beruht übrigens auf demselben Kniff. Programme in allen vier Sprachen laufen nach einer virtuellen Uhr, und der Scheduler wählt Prozesse immer in derselben Reihenfolge, sodass sich jeder Fehler auf die Millisekunde genau reproduzieren lässt. Da meine Uhren ohnehin überall virtuell sind, macht `SIMULATED_TIME` in [meinem Compiler](https://github.com/tym83/paleocomputing/blob/main/impl/ada-colors/yellow/notes/yellow-digest.md) das, was die Spezifikation darüber hinaus verlangt: Innerhalb eines solchen Blocks verdrängen sich Prozesse nicht gegenseitig, wenn ihre Zeitscheibe abläuft, sondern wechseln nur, wenn einer von ihnen zu warten beginnt.

## Dieselben Aufgaben in vier Sprachen

Nach den Erinnerungen des roten Teams teilten die Gutachter von 1978 die vier Entwürfe in zwei Paare: die konservativen Blau und Rot und die ambitionierten, „akademischen" Gelb und Grün. Aus jedem Paar kam eine Sprache in die zweite Runde. Jetzt, da alle vier laufen, lässt sich prüfen, ob diese Einteilung Zufall war, und am einfachsten geht das mit ein und demselben Beispiel.

{{< figure src="11-en-diagram-pairs.png" alt="Die beiden Paare von 1978" caption="Die beiden Paare von 1978: die konservativen Blau und Rot, die ambitionierten Gelb und Grün, jede mit ihrer eigenen Art der Synchronisation" >}}

Es ist dasselbe Beispiel wie im Abschnitt über Blau. Zwei Prozesse addieren abwechselnd 10 zu einem gemeinsamen Kontostand und belegen dafür eine Sperre, damit sie sich nicht in die Quere kommen. Der erste belegt die Sperre und endet abnormal, bevor er sie freigeben kann. Bekommt der zweite die Sperre? Das ist alles andere als eine akademische Frage: In jedem System mit Sperren, vom Betriebssystemkern bis zur Datenbank, fragt man als Erstes, was mit einer Sperre passiert, wenn der Prozess, der sie hält, abnormal endet. Im Kubernetes-Abschnitt kommt das wieder.

In Rot dient `REGION` als Sperre, und sie wird freigegeben, egal wie der Block endet:

```
REGION d DO
   DELAY(5);
   IF id = 1 THEN
      RAISE X_RANGE;
   END IF;
   balance := balance + 10;
END REGION;
```

In Grün von 1979 und in Ada 83 ist eine Sperre eine eigene Server-Task mit zwei Eingängen, `SEIZE` und `RELEASE`. Der Server wartet einfach auf einen Aufruf von `RELEASE` und weiß sonst nichts:

```
task body LOCK is
begin
   loop
      accept SEIZE;
      accept RELEASE;
   end loop;
end LOCK;
...
LOCK.SEIZE;
begin
   delay 0.005 * SECONDS;
   if ID = 1 then
      raise RANGE_ERROR;
   end if;
   BALANCE := BALANCE + 10;
   LOCK.RELEASE;
exception
   when RANGE_ERROR => LOG("worker 1 failed while holding the lock");
end;
```

In Blau wird, wie wir gesehen haben, ein `REGION`-Semaphor freigegeben, wenn der Pfad abnormal endet; das vollständige Programm steht im Abschnitt über Blau. Gelb hat zwei Antworten, und sie sind gegensätzlich. Ein Monitor wird frei, wenn in seiner Prozedur eine Ausnahme auftritt und den Prozess aus dem Monitor herausführt, ein binärer Semaphor mit `CLAIM` und `RELEASE` dagegen wird nie freigegeben:

```
MONITOR Account
  ...
  PROCEDURE Update (CONST id: INTEGER64)
    DELAY(5);
    IF id = 1 THEN PROPAGATE_EXCEPTION OUT_OF_RANGE ENDIF;
    balance := balance + 10;
    RETURN
  ENDPROCEDURE Update;
  ...
ENDMONITOR Account;
```

Hier die Ausgabe [dieser Programme](https://github.com/tym83/paleocomputing/tree/main/impl/ada-colors/os/contrast). Hat der zweite Prozess die Sperre nach hundert Millisekunden immer noch nicht, gibt das Programm auf und zieht Bilanz. Das Programm in der roten Sprache:

```
[1 ms] worker 1 holds the lock
[6 ms] worker 1 failed inside the region
[6 ms] worker 2 holds the lock
[11 ms] both workers are through, balance 110: the region released the lock for the failed one
```

In der grünen Sprache:

```
[1 ms] worker 1 holds the lock
[6 ms] worker 1 failed while holding the lock
[100 ms] 1 of 2 workers through, balance 100: worker 2 still waits on SEIZE, nothing released the lock
```

In der blauen Sprache:

```
[1 ms] worker 1 holds the semaphore
[6 ms] worker 1 fails holding it
[6 ms] worker 2 holds the semaphore
[11 ms] the block signals FAILED: worker 1 ended abnormally
[11 ms] both workers are through, balance 110: the path's end released its REGION semaphore
```

In der gelben Sprache:

```
[1 ms] worker 1 holds the monitor
[6 ms] worker 1 failed inside the monitor
[6 ms] worker 2 holds the monitor
[11 ms] both workers are through, balance 110: leaving the monitor by an exception gave it up
[11 ms] worker 3 claimed the semaphore
[16 ms] worker 3 failed between CLAIM and RELEASE
[112 ms] worker 4 asked 100 times: no exception gives a semaphore back
```

Der Fairness halber: Im Programm in der grünen Sprache könnte der Prozess `RELEASE` selbst in seinem Exception-Handler aufrufen, und im Programm in der gelben Sprache ließe sich mit dem Semaphor genauso verfahren. Aber das ist Handarbeit, und die vergisst man leicht. Vor allem hilft sie nicht, wenn der Prozess nicht wegen einer Ausnahme endet, sondern von außen abgebrochen wird: In Grün und in Ada führt eine abgebrochene Task keine Handler aus, und die Sperre bleibt für immer belegt. Der ganze Unterschied läuft also darauf hinaus, wer für die Freigabe der Sperre zuständig ist, der Programmierer oder die Sprache.

Drei der vier Sprachen nehmen diese Aufgabe selbst in die Hand, jede auf ihre Weise. Rot bindet die Freigabe an den Programmtext: Sobald die Ausführung `REGION` verlassen hat, ist die Sperre frei. Blau bindet sie an das Schicksal des Pfads: Endet der Pfad abnormal, werden seine Sperren frei, seine Signalsemaphore aber nicht. Gelb bindet sie an die Modulgrenze: Führt eine Ausnahme einen Prozess aus dem Monitor heraus, ist der Monitor frei. Nur in Grün, der Sprache, die schließlich gewann, gibt die Sprache die Sperre nicht selbst frei, weil sie keinen eigenen Mechanismus für gemeinsame Daten hat. Eine Sperre ist dort eine Task wie jede andere und weiß nicht, dass ihr Client abnormal geendet hat. Einen solchen Mechanismus, das geschützte Objekt, bekam Ada erst 1995.

Ein weiteres Detail zeigt nur das Programm in der blauen Sprache: Der Block hat erfahren, dass der erste Pfad abnormal geendet hat, und das gemeldet. In den anderen Sprachen hat der Prozess, in dem die Ausnahme auftrat, sie selbst behandelt, und hätte er es nicht getan, wäre die Task einfach beendet worden, ohne dass es jemand erfährt.

### Das Leser-Schreiber-Problem

Das zweite Beispiel ist das klassische Leser-Schreiber-Problem. Drei Leser kommen in den Millisekunden 0, 1 und 3, der Schreiber in Millisekunde 2, und Lesen wie Schreiben dauern je zehn Millisekunden. In einer guten Lösung lesen die Leser gleichzeitig, aber ein Leser, der nach dem Schreiber kommt, darf ihn nicht überholen, sonst käme der Schreiber bei einem stetigen Strom von Lesern nie an die Reihe.

| Lösung im Repository | Leser lesen gleichzeitig | Ein später Leser überholt den wartenden Schreiber | Alles fertig nach |
|---|---|---|---|
| RED, exklusives `REGION` | nein | nein, alle stehen in einer Warteschlange | 40 ms |
| GREEN, der Server verteilt Kopien der Daten | ja, auf Kopien | der dritte Leser bekommt eine veraltete Kopie | 13 ms |
| BLUE, Semaphore P und V | ja | ja | 23 ms |
| YELLOW, Hoare-Monitor | ja | nein | 31 ms |

Diese Zahlen zeigen nicht die Grenzen der Sprachen, sondern nur die Lösungen, die ich gewählt habe. Auch mit Semaphoren kann man dem Schreiber den Vortritt lassen, eine Variante, die Courtois, Heymans und Parnas schon 1971 beschrieben haben, aber sie ist länger. Mit einem Hoare-Monitor passt dasselbe in etwa dreißig Zeilen, weil Monitore genau für solche Aufgaben erfunden wurden. Die faire Reihenfolge kostet allerdings Zeit: Der dritte Leser wartet auf den Schreiber und ist erst in Millisekunde 31 fertig statt in 23.

### Warten mit Timeout

Im dritten Beispiel soll auf eine Antwort gewartet werden, aber nicht länger als eine vorgegebene Zeit. Hier tun die Unterschiede am meisten weh.

Die Tasks der roten Sprache kommunizieren über Mailboxen, typisierte Nachrichtenwarteschlangen begrenzter Größe, und zum Warten gibt es ein einziges Konstrukt, `WAIT`. Es wartet darauf, welches von mehreren Ereignissen zuerst eintritt, und eines davon kann ein Timer sein. In Grün von 1979 ist ein Warten mit Timeout nur einem Server möglich, über `select` mit einer `delay`-Alternative; ein Client kann die Wartezeit nicht begrenzen, ein solcher Aufruf kam erst mit Ada. In Blau und Gelb kann kein Prozess auf zwei Ereignisse zugleich warten, etwa auf ein Element in einer Warteschlange oder auf den Ablauf eines Timers, je nachdem, was zuerst passiert. In der blauen Sprache umgeht man das mit einem Wettlauf zweier Pfade, in der gelben mit einem Wachprozess, der den Wartenden weckt, oder durch Abfragen eines Semaphors mit `CONDITIONAL_CLAIM`. Genauer gehe ich darauf im Kubernetes-Abschnitt ein, denn dort gibt es Timeouts an jeder Ecke, und der Preis dieser Behelfe zeigte sich sofort.

### Übersichtstabelle

So unterscheiden sich die vier Entwürfe voneinander und von Ada 83. Rot und Grün sind in der Fassung von 1979 berücksichtigt, Blau und Gelb in der von 1978.

| | RED | GREEN | BLUE | YELLOW | Ada 83 |
|---|---|---|---|---|---|
| Grundlage | Pascal, neu geschrieben | Pascal | Pascal, um Typen herum neu gebaut | Pascal und Modula | GREEN nach vier Jahren Überarbeitung |
| Module | Kapseln | Packages | Module und Segmente | Modula-Module | Packages |
| Äußere Variablen in einer Prozedur | nur importierte | sichtbar | nur importierte, über die ganze Aufrufkette | sichtbar innerhalb des Moduls | sichtbar |
| Generics | Instanzen entstehen automatisch | explizite Instanzen | Instanzen entstehen automatisch, Typanforderungen in `NEEDS` | Modulvorlagen schreiben den Text um | explizite Instanzen |
| Operationen | Überladung | Überladung | alles, auch die Zuweisung, sind Funktionen mit festen Namen | nur explizite Überladung, über `EXTENDS` und `REPLACES` | Überladung, keine eigene Zuweisung |
| Funktionen | ohne Seiteneffekte, außer markiert | ohne Seiteneffekte, dazu Prozeduren mit Rückgabewert | nur Eingabeparameter | ohne Seiteneffekte, dazu Prozeduren mit Rückgabewert | nur Eingabeparameter, Seiteneffekte erlaubt |
| Ausnahmen | als Namen deklariert | als Namen deklariert, 15 vordefiniert | im Kopf des Unterprogramms aufgeführt | nicht deklariert | als Namen deklariert, 5 vordefiniert |
| Nebenläufigkeit | Tasks und Mailboxen | Tasks und Rendezvous | `PATH`-Zweige in einem parallelen Block | Prozesse und Monitore | Tasks und Rendezvous |
| Sperre für gemeinsame Daten | `REGION` | Server-Task | `REGION`-Semaphor | Monitor | Server-Task |
| Warten mit Timeout | `WAIT` mit Timer | nur beim Server | Wettlauf zweier Pfade | Wachprozess oder Abfragen | bei Server und Client |
| Unbehandelte Ausnahme in einer Task | die Task endet, niemand erfährt es | die Task endet, niemand erfährt es | der Block löst die Ausnahme aus | die Task endet, niemand erfährt es | die Task endet, niemand erfährt es |

Liest man die Tabelle Zeile für Zeile, springen die Paare ins Auge. Die blaue und die rote Sprache verlangen den Import von Variablen, erzeugen generische Instanzen selbst und bieten eine eigene Sperre für Daten. Die gelbe und die grüne Sprache setzen dagegen auf Funktionen ohne Seiteneffekte und kommen mit einem einzigen eleganten Nebenläufigkeitsmechanismus aus, nur haben die Autoren der gelben Sprache dafür den Monitor gewählt und die der grünen das Rendezvous. Und die letzte Zeile zeigt, dass von den fünf Sprachen nur die blaue eine unbehandelte Ausnahme in einem parallelen Zweig nach außen meldet.

## Die Compiler und der erste Lauf der Programme von 1978

Das Ziel war dasselbe wie bei den Finalisten im vorigen Artikel: Jede Sprache braucht einen Compiler, der in ihr selbst geschrieben ist. Wer in einer Sprache einige tausend Zeilen Parser, Symboltabellen und Typprüfung schreibt, merkt sehr schnell, ob sie für echte Arbeit taugt.

Auch der Weg war derselbe. Zuerst entsteht ein kleiner Übersetzer in Python, der eine Teilmenge der Sprache versteht. In dieser Teilmenge wird die erste Version des Compilers geschrieben, und der Python-Übersetzer baut sie. Dann baut sich der Compiler selbst, und das Ergebnis wird mit dem vorigen verglichen. Stimmt die zweite Generation Byte für Byte mit der dritten überein, ist der Fixpunkt erreicht: Der selbst gebaute Compiler erzeugt exakt sich selbst und hängt nicht mehr vom Python-Übersetzer ab. Von da an liegt im Repository der C-Code, den der Compiler aus seinem eigenen Quelltext erzeugt hat, und der Compiler lässt sich daraus ganz ohne Python bauen. Danach entwickelt sich die Sprache mit diesem Compiler weiter, und jede neue Version wird von der vorigen gebaut. Beide Compiler übersetzen Programme nach C und bauen sie mit derselben gemeinsamen Laufzeitumgebung wie Rot und Grün, mit ihrer virtuellen Uhr und dem deterministischen Scheduler.

Beide Compiler erreichten den Fixpunkt im ersten Anlauf: Die dritte Generation stimmte bei beiden sofort Byte für Byte mit der zweiten überein. Der [Compiler der blauen Sprache](https://github.com/tym83/paleocomputing/blob/main/impl/ada-colors/blue/README.md) wuchs auf etwa sechzehntausend Zeilen, mehr als jeder der vier und anderthalbmal so viel wie der Compiler der roten Sprache. Für mich ist das das beste Maß für die Komplexität von Blau: Alles, was dort an Typen hängt, muss der Compiler ableiten und prüfen. Der [Compiler der gelben Sprache](https://github.com/tym83/paleocomputing/blob/main/impl/ada-colors/yellow/README.md) umfasst etwa zehntausend Zeilen. Gelb hat keine Strings als Werte, nicht einmal Verkettung, also liegt jeder String, mit dem sein Compiler arbeitet, in einem großen Zeichenarray, und ein String wird durch einen Index darin dargestellt. So ungefähr waren auch die Pascal-Compiler in den 1970er-Jahren aufgebaut.

### Die Programme aus den Dokumenten von 1978

Die Programme in diesen beiden Sprachen liefern eine bessere Geschichte als die der Finalisten. In der ersten Runde hatte niemand eine Implementierung, also war kein einziges Programm aus den Beschreibungen der blauen und der gelben Sprache je übersetzt worden, und meine Compiler waren die ersten.

In der Beschreibung der blauen Sprache sind siebzehn Programme abgedruckt. Ergänzt man, was im Original durch Auslassungspunkte ersetzt ist, lassen sich sieben davon übersetzen und laufen. Drei weitere lassen sich übersetzen, liefern aber falsche Ergebnisse: Im Matrixprodukt nimmt der erste Summand jedes Elements wegen eines einzigen falschen Buchstabens seinen zweiten Faktor aus der ersten Matrix statt aus der zweiten, und zwei Beispiele lösen eine Ausnahme aus, weil sie ihre eigenen Wertebereiche verlassen. Die übrigen sieben kommen nicht durch den Compiler, wegen Fehlern wie `BUFF` statt `BUF` oder Argumenten in falscher Reihenfolge.

Das größte Programm ist die Standard-Ein-/Ausgabebibliothek aus Anhang C: mehr als dreizehnhundert Zeilen mit Fernschreibertreibern, die an PDP-11-Interrupts hängen. Um sie zu übersetzen, musste ich die Prozedur `IN` umbenennen, weil das Wort reserviert ist, und eine Konstante, die zwei Module exportieren, in ein Segment verschieben, obwohl ein Modul nach den Regeln nur Typen und Unterprogramme exportiert. Zusammen mit den Tippfehlern kamen etwa zwanzig Korrekturen zusammen, sieben davon beheben Verstöße gegen die Regeln der Sprache, und danach lief die Bibliothek auf einer simulierten PDP-11 mit zwei LT33-Fernschreibern, wie DEC den Teletype Model 33 nannte. Für dreizehnhundert Zeilen, die nie jemand übersetzt hatte, ist das ein gutes Ergebnis, und es sagt mehr über das blaue Team als jedes Gutachten.

{{< figure src="12-en-blue-appendix-c.gif" alt="Anhang C der blauen Sprache im Browser" caption="Anhang C der blauen Sprache im Browser: Die Ein-/Ausgabebibliothek von 1978 druckt auf zwei simulierten LT33-Fernschreibern. Die Ausgabe ist verlangsamt, auf der virtuellen Uhr ist das Programm in Sekundenbruchteilen durch." >}}

Im Lehrbuch der gelben Sprache gibt es fünfzehn Programme, und vier davon lassen sich so übersetzen, wie sie gedruckt sind. Die übrigen enthalten die Art von Fehlern, die sich in jedem Text ansammeln, der nie durch einen Übersetzer gelaufen ist: `ConvexHullFinder` wird als `ComplexHullFinder` geschlossen, und das Sortierbeispiel schreibt `IMPORTS` und `EXPORTS`, als stammten sie aus einer anderen Sprache. Häufiger aber vergaßen die Autoren die Regeln ihrer eigenen Sprache, allen voran die Vergleichsregel, die ich oben beschrieben habe. Das Lehrbuch enthält einen Task-Scheduler für SIFT, jenen Bordrechner, und die Bedingung `ept > 0 AND enabled[pri]` darin wird als `ept > (0 AND enabled[pri])` gelesen und bedeutet etwas ganz anderes als gemeint.

Drei Programme laufen auch nach den Korrekturen falsch. Im Austauschsortieren hält der Stringvergleich einen String nur dann für größer als einen anderen, wenn jeder seiner Buchstaben größer ist als der entsprechende Buchstabe des anderen, sodass diese Sortierung gewöhnliche Namen nie umordnet. Und die konvexe Hülle von acht Punkten markiert nur zwei davon als Ecken. Zuerst nahm ich an, mein Übersetzer liege falsch, und schrieb denselben Algorithmus in Python nach, aber Python markierte dieselben zwei Punkte. Der Fehler steckte im Algorithmus von 1978 selbst, und achtundvierzig Jahre lang hat ihn niemand bemerkt, weil es nichts gab, worauf man ihn hätte laufen lassen können.

Alle Korrekturen liegen im Repository in eigenen Dateien, [für die blaue Sprache](https://github.com/tym83/paleocomputing/blob/main/impl/ada-colors/blue/corpus/CHANGES.md) und [für die gelbe Sprache](https://github.com/tym83/paleocomputing/blob/main/impl/ada-colors/yellow/corpus/CHANGES.md), und die Quellen sind genau so aufbewahrt, wie sie gedruckt wurden, jede Korrektur mit Erklärung und der Regel, gegen die verstoßen wurde.

## THE und Kubernetes ohne Nachrichten

Ein Compiler prüft eine Sprache an sequenziellem Code. Um auch die Nebenläufigkeit zu prüfen, habe ich im Artikel über die Finalisten einige Systeme in Rot und Grün geschrieben und sie jetzt in Blau und Gelb wiederholt.

Das erste ist THE, das Mehrprogrammsystem, das Dijkstras Gruppe 1965 bis 1968 in Eindhoven gebaut hat. Dijkstra selbst beschrieb es als eine Menge sequenzieller Prozesse, die in Schichten angeordnet sind. Schicht null enthält die Semaphore und teilt den Prozessor zu. In Schicht eins läuft der Segment-Controller, der Segmente zwischen Kernspeicher und Magnettrommel hin- und herschiebt, dem langsamen externen Speicher jener Zeit. Schicht zwei hat die einzige Operatorkonsole, Schicht drei die Ein-/Ausgabepuffer und Schicht vier die Anwenderprogramme. Jeder Prozess ruft nur Schichten unterhalb seiner eigenen auf.

Für alle, die noch nicht mit Kubernetes gearbeitet haben, eine kurze Einführung. Man schreibt den gewünschten Zustand in einen Speicher, etwa ein Deployment mit drei Replikas, und eine Reihe von Controllern vergleicht ihn fortlaufend mit dem tatsächlichen Zustand und schließt die Lücke: Sie erzeugen Pods, also Instanzen der Anwendung, weisen sie Nodes zu und verlegen sie von Nodes, die nicht mehr erreichbar sind. All das zusammen nennt man die Control Plane.

Das zweite System ist Kubernetes auf THE. Seine Controller laufen als Anwenderprogramme der Schicht vier, der Objektspeicher liegt in Segmenten auf der Trommel, und jeder Node hat ein Kubelet, das Programm, das darauf Pods ausführt.

Das dritte ist eine Kubernetes-Control-Plane ohne THE. Sie hat einen API-Server, der jede Objektänderung an seine Abonnenten schickt (in Kubernetes heißt das Watch), Controller mit eigenen Kopien des Zustands und Leases, also Einträge, die ein Node regelmäßig erneuern muss, um als lebendig zu gelten.

Sofort wurde klar, was Blau und Gelb gemeinsam haben und worin sie sich von den Finalisten unterscheiden. In keiner der beiden tauschen Prozesse Nachrichten aus, und wie gesagt kann in keiner ein Prozess auf zwei Ereignisse zugleich warten.

### THE in der blauen Sprache

[THE in der blauen Sprache](https://github.com/tym83/paleocomputing/blob/main/impl/ada-colors/os/the.blu) ließ sich ganz natürlich schreiben. Die Semaphore der blauen Sprache sind Dijkstras P und V, und die Ausgabe stimmt Zeichen für Zeichen mit der der Version in der roten Sprache überein. Jede Schicht des Systems wurde zu einem Modul, sodass in der Importliste jedes Prozesses ausdrücklich steht, welche Schichten er aufruft.

{{< figure src="13-en-blue-the.gif" alt="THE in der blauen Sprache im Browser" caption="THE in der blauen Sprache im Browser: Der Segment-Controller schiebt Seiten zwischen Kernspeicher und Trommel hin und her, und der Drucker wartet, bis der Operator Papier einlegt. Die Ausgabe ist verlangsamt, auf der virtuellen Uhr ist das Programm in Sekundenbruchteilen durch." >}}

Und dann kam der Moment, für den sich der Nachbau der ganzen blauen Sprache gelohnt hat. [Kubernetes auf THE](https://github.com/tym83/paleocomputing/blob/main/impl/ada-colors/os/the_kube_blue.blu) hat ein Stromausfall-Szenario: Ein Node verliert den Strom, sein Kubelet wird abgebrochen, und die Control Plane muss bemerken, dass der Node fehlt, und seine Pods auf andere Nodes verlegen. In THE ist der Speicher, wie alles im System, durch einen Semaphor geschützt. In der Version in der roten Sprache ist das ein gewöhnlicher Dijkstra-Semaphor mit P und V und kein `REGION`, denn `REGION` ist an einen Abschnitt des Programmtexts gebunden: Die Sperre wird beim Betreten belegt und beim Verlassen freigegeben. In THE führt aber oft ein Prozess P aus und ein anderer V, sodass Belegen und Freigeben an verschiedenen Stellen im Programm stehen. Wurde ein Kubelet mitten im Schreiben in den Speicher abgebrochen, blieb der Semaphor deshalb belegt, und die ganze Control Plane stand still. Genau daran bin ich im Artikel über die Finalisten gescheitert, und in Rot und Grün musste ich den Stromausfall in die Lücke zwischen zwei Durchläufen des Kubelets verlegen, wenn es nichts hält.

In der blauen Sprache ist der Semaphor des Speichers als `REGION` deklariert. Er ist weiterhin ein gewöhnlicher Semaphor mit P und V, nur eben mit Besitzer: Man kann ihn in einer Prozedur belegen und in einer anderen freigeben, und endet der Pfad abnormal, gibt das System ihn selbst frei. Jetzt kann ein Node jederzeit den Strom verlieren, auch während das Kubelet in den Speicher schreibt. Der Pfad des Kubelets bekommt `TERMINATED`, sobald er wieder an der Reihe ist, und endet abnormal, das System gibt seinen Semaphor frei, und die Control Plane arbeitet weiter. Eine Feinheit gibt es dabei. Das Kubelet fängt `TERMINATED` ab, um ins Log zu schreiben, dass der Strom ausgefallen ist, und muss die Ausnahme danach erneut auslösen. Tut es das nicht, endet der Pfad normal, und bei einem normalen Ende werden belegte Semaphore nicht freigegeben. Die Daten, die der Semaphor geschützt hat, können dabei halb geschrieben zurückbleiben, und darauf antwortete die Rationale von SofTech, frische Sensorwerte würden sie bald überschreiben. In Kubernetes übernimmt diese Rolle der nächste Durchlauf des Controllers, der Soll- und Ist-Zustand erneut vergleicht. Die rote Sprache gab eine Sperre nur beim Verlassen eines `REGION`-Blocks selbst frei, die blaue macht dasselbe für einen gewöhnlichen Semaphor mit Besitzer, also für genau das, worauf THE aufgebaut ist.

{{< figure src="14-en-blue-kube.gif" alt="Kubernetes auf THE in der blauen Sprache" caption="Kubernetes auf THE in der blauen Sprache: Das Kubelet von Node 2 wird abgebrochen, während es den Semaphor des Speichers hält, das System gibt den Semaphor frei, und die Control Plane verlegt die Pods. Die Ausgabe ist verlangsamt, auf der virtuellen Uhr ist das Programm in Sekundenbruchteilen durch." >}}

### Timeouts in der blauen Sprache

Timeouts sind schwieriger. Das Belegen eines Semaphors lässt sich nicht zeitlich begrenzen, man kann in Blau also nicht sagen „warte auf ein Element, aber höchstens dreißig Millisekunden". Die Antwort fand sich im selben Buch, bei den Gutachtern. Eines der Teams hat ein Beispiel für Eingabe mit Timeout in allen vier Sprachen gelöst, und hier ist seine Fassung für Blau:

{{< figure src="15-scan-fuel-flow.png" alt="Die Analyse von Team 126-02, Beispiel A 2.8 „Eingabe mit Timeout\", die Lösung in der blauen Sprache. Unten auf der Seite warnen die Gutachter, dass sie Annahmen darüber treffen, wie Ausnahmen in der blauen Sprache funktionieren" caption="Die Analyse von Team 126-02, Beispiel A 2.8 „Eingabe mit Timeout\", die Lösung in der blauen Sprache. Unten auf der Seite warnen die Gutachter, dass sie Annahmen darüber treffen, wie Ausnahmen in der blauen Sprache funktionieren" >}}

```
REQUEST (# TTY);
WRITES ('FUEL FLOW?' \CR \LF);
PAR_BLOCK
   PATH PATH1
      INPUT (## RATE);
      TERMINATE (PATH2);
   END PATH PATH1;
   PATH PATH2
      WAIT (30);
      TERMINATE (PATH1);
      WRITES ('5 GALLS/SEC ASSUMED' \CR \LF);
      RATE := 5;
   END PATH PATH2;
END PAR_BLOCK;
RELEASE (# TTY);
```

Zwei Pfade laufen um die Wette, und wer zuerst fertig ist, stoppt den anderen. Hat der Operator nach dreißig Sekunden nicht geantwortet, wird ein Treibstoffdurchfluss von fünf Gallonen pro Sekunde angenommen. Ich mag, wie dieses Beispiel eine ganze Epoche einfängt: eine militärische Konsole, ein Fernschreiber und ein vernünftiger Standardwert für den Fall, dass niemand antwortet. Und die Schwachstelle des Kniffs ist schon zu sehen: Löst der Timer zwischen der Eingabe und `TERMINATE (PATH2)` aus, wird der eingetippte Wert mit einer Fünf überschrieben.

In [Kubernetes in der blauen Sprache](https://github.com/tym83/paleocomputing/blob/main/impl/ada-colors/kube/kube_blue.blu) ist jedes Warten so gebaut, und was das kostet, zeigt sich sofort. Ein paralleler Block darf nicht in einem Unterprogramm stehen, also lässt sich die Warteschleife nicht in einer Prozedur verstecken, und ich musste sie zweimal schreiben: einmal für die Controller und einmal für die Kubelets. Der Wettlauf ist nur sicher, wenn der wartende Pfad eine höhere Priorität hat als der Timer. Sonst kann der Timer ihn genau dann stoppen, wenn der Semaphor ihm schon ein Element zugeteilt hat, er es aber noch nicht abgeholt hat, und das Element bleibt in der Warteschlange, ohne dass es noch jemand abholen kann. Darauf baut [ein weiteres Lab](https://github.com/tym83/paleocomputing/blob/main/impl/ada-colors/labs/blue/b7-race.blu) auf. Die Priorität rettet die Lage hier nur, weil es einen einzigen Prozessor gibt und der Pfad mit der höheren Priorität immer zuerst läuft. Eigentlich müsste ein Abbruch das zurückgeben, was der Pfad schon erhalten hat, oder der Schritt „Element nehmen und vermerken, dass man es genommen hat" müsste ununterbrechbar sein. So macht es Ada: Eine Task kann nicht mitten in einem Rendezvous oder einer geschützten Operation abgebrochen werden, und der Abbruch wird bis zu deren Ende aufgeschoben.

Es gibt noch ein zweites Problem: Ein gestoppter Pfad kann nicht unterscheiden, wer ihn gestoppt hat, der andere Pfad im Wettlauf oder ein Benutzer, der den Node abgeschaltet hat. Deshalb erfährt das Kubelet im Kubernetes in der blauen Sprache von einem Stromausfall durch eine Notiz, die der Benutzer ihm hinterlässt, bevor er den Strom abschaltet.

### THE und Kubernetes in der gelben Sprache

[THE in der gelben Sprache](https://github.com/tym83/paleocomputing/blob/main/impl/ada-colors/os/the_yellow.yel) ist auf Monitoren aufgebaut. Die Sprache hat nur binäre Semaphore mit den Werten 0 und 1, also mussten Dijkstras zählende Semaphore zu Monitoren aus einem Zähler und zwei Signalen werden, und heraus kam derselbe beschränkte Puffer wie in Hoares Aufsatz über Monitore. Auch der Segment-Controller wurde zum Monitor, und er fiel sogar einfacher aus als bei Dijkstra: Ein Prozess, der ein Segment braucht, erledigt die ganze Arbeit selbst innerhalb des Monitors, und die Warteschlange vor dem Monitor dient zugleich als Auftragswarteschlange.

{{< figure src="16-en-yellow-kube.gif" alt="Kubernetes auf THE in der gelben Sprache im Browser. Node 2 verliert den Strom, seine Pods ziehen auf andere Nodes um, und der Operator skaliert das Deployment auf fünf Replikas. Die Ausgabe ist verlangsamt." caption="Kubernetes auf THE in der gelben Sprache im Browser. Node 2 verliert den Strom, seine Pods ziehen auf andere Nodes um, und der Operator skaliert das Deployment auf fünf Replikas. Die Ausgabe ist verlangsamt." >}}

[Kubernetes auf THE in der gelben Sprache](https://github.com/tym83/paleocomputing/blob/main/impl/ada-colors/os/the_kube_yellow.yel) gibt Byte für Byte dasselbe aus wie die Version in der roten Sprache. Sein Speicher ist wie dort durch einen binären Semaphor geschützt, damit P und V aus THE erhalten bleiben, und ein binärer Semaphor wird nicht freigegeben, wenn sein Prozess abnormal endet. Also kann auch hier der Strom nur zwischen den Durchläufen des Kubelets ausfallen. Ein Monitor hätte dieses Problem nicht: Führt eine Ausnahme einen Prozess aus dem Monitor heraus, wird der Monitor frei, genau wie `REGION` in der roten Sprache.

Was einer Sprache fehlt, sieht man an ihren Behelfen, und für Timeouts habe ich mehrere ausprobiert. Im kleinen Vergleichsprogramm ist ein Timeout ein Wachprozess, der den wartenden Prozess weckt, ohne ihm etwas unterzuschieben: Beim Aufwachen sieht der Prozess, dass seine Bedingung immer noch nicht erfüllt ist, und beschließt selbst, nicht länger zu warten. In Kubernetes auf THE weckt der Watch-Prozess alle zehn Millisekunden sämtliche Controller. Und im [eigenständigen Kubernetes](https://github.com/tym83/paleocomputing/blob/main/impl/ada-colors/kube/kube_yellow.yel) habe ich es mir einfacher gemacht und einen einzigen Watch-Prozess eingerichtet, der alle zwanzig Millisekunden ein leeres Tick-Ereignis in jeden ruhigen Ereignisstrom legt. Im Grunde ist das dasselbe falsche Element, das der Wachprozess in THE auf Semaphoren unterschiebt.

Ein Array von Monitoren gibt es nicht, weil ein Monitor ein Modul ist und kein Wert. Die acht Ereignisströme des eigenständigen Kubernetes, einer pro Abonnent, sind deshalb acht benannte Instanzen einer Vorlage, und die richtige wird per Nummer in einer `SELECT`-Anweisung gewählt. Wenn ein Programm einen Prozess startet, bekommt es weder einen Namen noch eine Nummer zurück, also schreibt das Kubelet seine eigene Kennung an eine Stelle, an der der Benutzer sie findet, damit dieser Node 2 abschalten kann. Und ein Programm kann nicht enden, solange seine Prozesse noch laufen, also muss man Controller, die endlos kreisen, von Hand anhalten: ein Stopp-Flag setzen und noch ein Signal schicken, damit die Controller, die im Monitor schlafen, aufwachen, das Flag sehen und sich beenden.

### Was diese Systeme gezeigt haben

Beide Systeme laufen, und ihre Ausgabe stimmt mit der derselben Systeme in der roten und der grünen Sprache überein, stellenweise Byte für Byte. Blau erwies sich als die angenehmste Sprache für THE und als die unbequemste für Kubernetes mit seinen Timeouts auf Schritt und Tritt. Bei Gelb war es umgekehrt: Kubernetes auf Monitoren fiel sehr natürlich aus, aber alles, was mit Zeit und Prozessnamen zu tun hat, musste von Hand gebaut werden. Die gemeinsame Lehre für beide lautet: Eine Sprache mit einem einzigen Synchronisationsmechanismus kommt ans Ziel, muss aber jeden fehlenden Mechanismus durch einen eigenen Prozess ersetzen. Grün ersetzte im Artikel über die Finalisten genauso die Mailbox durch eine Puffer-Task.

## Warum sie verloren haben

Dem Pittsburgher Gremium, das die Analysen zusammenführte, gehörten David Fisher, David Gries, Brian Kernighan, John Reynolds, Philip Wetherall und William Wulf an. Sein Bericht trägt das Datum 4. April 1978. Das Gremium stellt eingangs fest, dass alle vier Entwürfe unvollständig und in Eile entstanden sind, und sein Schluss war einfach: Die Gutachter hielten Grün für den besten Entwurf und Blau für den schwächsten und sahen zwischen Rot und Gelb kaum einen Unterschied. Liest man aber die Analysen der Teams selbst, gehen die Urteile darin viel weiter auseinander. Manche Teams setzten Gelb auf Platz eins, andere auf den letzten. Ein Team schrieb, Gelb sei am schlechtesten entworfen und solle nicht fortgeführt werden; ein anderes hielt es für eine sichere Wahl für Systemprogrammierer und offenbar für am billigsten umzusetzen. Und ein weiteres beendete seine Analyse mit meinem Lieblingsrat: Das Beste, was das Verteidigungsministerium tun könne, sei, das rote Team zu bitten, die gelbe Sprache zu implementieren. Nun, die gelbe Sprache ist jetzt implementiert.

{{< figure src="17-scan-pittsburgh.png" alt="Zusammenfassung der Empfehlungen des Gremiums vom 4. April 1978" caption="Zusammenfassung der Empfehlungen des Gremiums vom 4. April 1978: Grün fortführen, Blau verwerfen, mindestens einen von Rot und Gelb fortführen" >}}

Über Blau fasste sich das Gremium am kürzesten und empfahl, den Entwurf zu verwerfen. Er sei sorgfältig und vollständig ausgearbeitet, aber mit einer alles durchdringenden Komplexität überladen, und das einfache, klare Modell, das die Autoren versprochen hatten, sei nicht zu erkennen. Ein Team räumte ein, dass Blau schon die Art der Darstellung geschadet habe und dass dies seine Bewertung sicher beeinflusst habe, und in der Übersichtstabelle dieses Teams bekamen der blaue und der gelbe Entwurf die schlechteste Note dafür, wie leicht ein Tippfehler den Sinn eines Programms verändert. Der Nachbau hat beide Hälften dieses Urteils bestätigt. Die Ein-/Ausgabebibliothek mit ihren Treibern lief, nachdem ein Dutzend Tippfehler und sieben Regelverstöße behoben waren, und die zwei Arten von Semaphoren erwiesen sich als präziser als alles, was die Finalisten hatten. Aber auch die Komplexität ist echt: Der Übersetzer der blauen Sprache wurde der größte der vier, und die Backslashes, Rautenzeichen und doppelten Ausrufezeichen lesen sich schlechter als bei jeder anderen.

Gelb unterlag nur knapp. Das Gremium schrieb, die Wahl zwischen Rot und Gelb sei nicht eindeutig, auch wenn die Mehrheit seiner Mitglieder Rot bevorzugte. Im Abschnitt über Gelb selbst fiel es aber ziemlich hart aus: Typ und Darstellung seien vermengt, es gebe keinen brauchbaren Weg, einen bestimmten Prozess zu benennen, Monitore seien in ernsthaften Systemen noch nicht eingesetzt worden, und überhaupt sei der Versuch gescheitert, eine Sprache auf Pascal und seinem Verwandten Modula aufzubauen. Das deckt sich etwa zur Hälfte mit meiner Erfahrung. Bei den Prozessen hat das Gremium recht, ich bin an genau derselben Stelle gestolpert. Aber Monitore erwiesen sich als der bequemste Teil von Gelb, für THE wie für Kubernetes, und schon 1978 hatte Brinch Hansen Solo beschrieben, ein Betriebssystem, das mit den Monitoren von Concurrent Pascal geschrieben war. Die Ironie geht noch weiter: Den roten Entwurf, der Gelb nur knapp schlug, verwarf das rote Team bald darauf selbst und schrieb die Sprache für die zweite Runde neu.

Legt man die vier Sprachen nebeneinander, sieht man vier Antworten auf dieselbe Frage: Wie viele Synchronisationsmechanismen braucht eine Sprache? Die Autoren der grünen Sprache wählten das Rendezvous, die der blauen Semaphore, die der gelben Monitore, und nur die rote Sprache hatte mehrere Mechanismen zugleich. In drei der vier Entwürfe setzte man auf einen einzigen Hauptmechanismus, und in keinem dieser drei kann ein Prozess sagen, dass er höchstens so und so viele Millisekunden warten wird: In Grün hat nur der Server einen Timeout, in Blau bleibt der Wettlauf zweier Pfade, in Gelb ein Wachprozess oder Abfragen. Und im Ada-Abschnitt werden Sie sehen, dass die Autoren von Ada später selbst zum Monitor zurückkehrten und ihn geschütztes Objekt nannten.

## Was davon später in Ada auftauchte

Ada 83 war die grüne Sprache nach vier Jahren Überarbeitung, und ein direktes Erbe des blauen und des gelben Entwurfs gibt es darin nicht. Legt man aber die Entwürfe von 1978 neben die gesamte Geschichte von Ada bis Ada 2022, ergibt sich dasselbe Bild wie bei der roten Sprache. Vieles von dem, was die Autoren der unterlegenen Entwürfe gleich vorgeschlagen hatten, wurde über Jahrzehnte in Ada nachgerüstet, unter eigenen Namen und in der Regel ohne zu ahnen, dass man jemanden von 1978 wiederholte. Hier das Wichtigste.

{{< figure src="18-en-diagram-ada.png" alt="Ideen des blauen und des gelben Entwurfs in der Geschichte von Ada" caption="Ideen des blauen und des gelben Entwurfs in der Geschichte von Ada: was von Anfang an übereinstimmte und was Jahrzehnte später kam" >}}

### Was mit Ada 83 übereinstimmte

Die erste Übereinstimmung sind Subtypen. Die Darstellungen der gelben Sprache entsprechen Adas Subtypen, aber in Ada kamen die Subtypen aus der grünen Sprache, es handelt sich also um eine Ähnlichkeit, nicht um eine Übernahme.

Auch die Speicherung von Werten in der Maschine stimmte überein. In Blau ließ sich mit `REP` Aufzählungswerten ein Code zuordnen, den die Hardware versteht, und Ada tut dasselbe in Kapitel 13 des Standards. Die blaue Sprache erlaubte das nur für ungeordnete Typen, Ada erlaubt es für jeden Typ, verlangt aber aufsteigende Codes. Beide Teams wussten, dass die Reihenfolge der Werte von der Reihenfolge der Codes abweichen kann, und haben das Problem von entgegengesetzten Seiten umgangen.

Ebenso die Idee, Klammern dort zu verlangen, wo sich der Leser irren könnte. Ironman verlangte Klammern um nicht assoziative Operationen, die Autoren der gelben Sprache erfüllten das wörtlich, die der blauen lehnten es ab, und in Steelman wurde es zur Empfehlung abgeschwächt. In Ada ist von der Idee nicht viel übrig, aber etwas schon: `and` und `or` lassen sich nicht ohne Klammern mischen, und auch `a ** b ** c` ist ein Fehler.

### Was Ada später bekam

Als Erstes kam der Monitor zurück. Ada 95 führte geschützte Objekte ein, und die Rationale von Ada 95 nennt Monitore ausdrücklich unter ihren Vorfahren. Ein geschütztes Objekt ist ein Monitor, bei dem statt Signalen Barrieren an den Eingängen stehen, also Bedingungen, und wenn eine Bedingung wahr wird, werden die Wartenden vor neuen Aufrufen bedient. Zum Monitor kehrte man in Ada siebzehn Jahre nachdem das Gremium die gelbe Sprache verworfen hatte zurück.

Dann kam die explizite Überladung. Mit `EXTENDS` und `REPLACES` musste man in der gelben Sprache kennzeichnen, ob eine neue Definition einem Namen eine weitere Bedeutung hinzufügt oder die alte ersetzt. Eine ähnliche Idee kam mit Ada 2005 in Form der Indikatoren `overriding` und `not overriding`, allerdings für Methoden und nicht für beliebige Namen; sie sollen verhindern, dass ein Tippfehler im Namen aus dem Überschreiben einer Methode eine ganz neue Methode macht. C++11 bekam `override` und Java die Annotation `@Override`, und überall kam man darauf erst nach Fehlern, die in Gelb schon syntaktisch unmöglich waren.

Am längsten brauchte Ada bis zu Funktionen ohne Seiteneffekte und zu Importlisten. Die gelbe Sprache verlangte, dass eine Funktion nichts außer ihren eigenen lokalen Variablen anrührt, und die blaue verlangte, dass jeder Prozedurkopf jede äußere Variable aufführt, die die Prozedur liest oder ändert, samt Zugriffsart. Ada 83 hatte weder das eine noch das andere. Beides kam über SPARK, die strenge Teilmenge von Ada für Programme, deren Korrektheit sich beweisen lässt, und wurde in Ada 2022 Teil der Sprache selbst: Der Aspekt `Global` führt die äußeren Objekte eines Unterprogramms samt Zugriffsart auf. Das ist fast wörtlich die `IMPORTS`-Liste der blauen Sprache aus dem Kontostand-Beispiel.

Auch einen Fehler in einem parallelen Zweig an denjenigen zu melden, der ihn gestartet hat, lernte Ada, aber nur für Berechnungen, nicht für Tasks. Ada 2005 brachte einen Handler für das Ende einer Task: Mit ihm lässt sich feststellen, dass eine Task an einer unbehandelten Ausnahme gescheitert ist, aber an den, der sie gestartet hat, wird die Ausnahme trotzdem nicht weitergegeben. Ada 2022 brachte parallele Blöcke, `parallel do ... and ... end do`. Ein solcher Block wartet auf alle seine Zweige, der Fehler eines Zweigs bricht die anderen ab, und die Ausnahme gelangt nach außen. Das ist Structured Concurrency im heutigen Sinn, sogar strenger als der parallele Block der blauen Sprache, aber gedacht ist sie für parallele Berechnungen, während Adas Tasks mit ihren Rendezvous bei einer unbehandelten Ausnahme nach wie vor genauso stumm enden wie 1983.

### Drei Teams von vier

Nach der Ausschreibung leitete John Goodenough, der Leiter des blauen Entwurfs, die Entwicklung der Testsuite, mit der Ada-Compiler gegen den Standard geprüft wurden, und später die Gruppe, die die strittigen Punkte des Standards selbst klärte. Ada 95 wurde, wie ich im Artikel über die Finalisten erzählt habe, vom Team von Intermetrics entworfen, den Autoren der roten Sprache. Von den vier Teams von 1978 waren also drei auf die eine oder andere Weise für Ada verantwortlich, und nur das gelbe Team blieb außen vor.

## Wenn Blau oder Gelb gewonnen hätte

Im Artikel über die Finalisten habe ich versucht, mir eine Welt vorzustellen, in der im Mai 1979 Rot gewann. Kurz gesagt: Ada hätte vom ersten Tag an Nachrichten und gemeinsame Daten getrennt, generische Instanzen wären ohne Deklarationen entstanden, und PL/SQL wäre in jeder Oracle-Datenbank in einer Sprache mit Mailboxen geschrieben. In unserer Welt hat Ada sogar C++ beeinflusst: Stroustrup verglich beim Entwurf seine parametrisierten Typen und Ausnahmen mit denen von Ada. Hier liegt die Weggabelung früher, im April 1978, als Grün und Rot für die zweite Runde ausgewählt wurden. Stellen wir uns vor, das Gremium hätte anders entschieden.

Zuerst, was sich nicht geändert hätte, egal welche Sprache gewinnt. Wie im Artikel über die Finalisten gehe ich davon aus, dass die Pflicht, Software für das Verteidigungsministerium ausschließlich in Ada zu schreiben, die von 1987 bis 1997 galt, aus wirtschaftlichen Gründen fiel: Kommerzielle Entwickler wechselten zu C und C++, und ein anderer Sieger von 1978 hätte daran nichts geändert. Jede siegreiche Sprache wäre also zur Sprache von Luftfahrt, Eisenbahn und Raumfahrt geworden und fast sicher nicht zur Sprache für alles andere. Im Folgenden geht es darum, wie sich die Software für diese Branchen verändert hätte und was früher in die gängigen Sprachen gelangt wäre.

### Eine Welt, in der die blaue Sprache gewann

Vor allem wäre eine Ada, die aus der blauen Sprache hervorgegangen wäre, später erschienen als unsere. Ada-Compiler waren schon in unserer Welt spät dran: Der erste, der die Konformitätstests bestand, erschien erst 1983. Und die blaue Sprache war von allen vieren am schwersten umzusetzen. Generische Instanzen aus Argumenten ableiten, Importe über die ganze Aufrufkette prüfen, die Skalierung von Festkommazahlen verfolgen: All das hätte Jahre gekostet, und die Versuchung, die Sprache auf Teilmengen zurechtzustutzen, die das Verteidigungsministerium verbot, wäre viel größer gewesen.

Zweitens hätte sich eine Kultur strenger Spezifikation gefestigt. Goodenough baute auch in unserer Welt die Testsuite für Ada-Compiler, aber hätte die blaue Sprache gewonnen, wäre dieselbe Strenge in der Sprache selbst sichtbar gewesen: Jede Prozedur in jedem Projekt des Verteidigungsministeriums würde deklarieren, welche Daten sie benutzt und welche Ausnahmen sie auslösen kann, und der Compiler würde es selbst prüfen.

Drittens hätte sich die generische Programmierung anders entwickelt. Alexander Stepanov, der mit Scheme begonnen hatte, baute Ende der 1980er-Jahre zusammen mit David Musser eine Bibliothek generischer Algorithmen für Ada und ging erst danach zu C++, wo ihm Einschränkungen für Template-Parameter fehlten. Für Concepts warb er viele Jahre, bis sie in C++20 kamen. Die blaue Sprache hatte Typeinschränkungen von Anfang an, in `WHERE T NEEDS`, und ihre Instanzen entstanden automatisch, sodass generische Algorithmen mit Typeinschränkungen bei ihrem Sieg schon Mitte der 1980er-Jahre in einer Militärsprache hätten auftauchen können.

Viertens hätte die Nebenläufigkeit anders ausgesehen. In der blauen Sprache werden parallele Zweige innerhalb eines Blocks gestartet, der Block endet erst, wenn alle Zweige geendet haben, und eine Ausnahme, die in einem Zweig auftritt und dort nicht behandelt wird, wird an den weitergegeben, der den Block gestartet hat. Dieses Schema wäre in Bordsoftware rund vierzig Jahre früher üblich geworden, als Trio und Swift es einführten. Mit der Sprache wären auch Sperren in die Lehrbücher gekommen, die das System selbst freigibt, wenn der Zweig, dem sie gehörten, abnormal endet. Nachrichtenaustausch zwischen Prozessen kannte die blaue Sprache nicht, aber auch in unserer Welt baute Militärsoftware in Ada nicht auf Nachrichten, sondern auf gemeinsamen Daten und Tasks, und Sprachen, in denen Prozesse nur über Nachrichten kommunizieren, etwa Erlang und Go, sind unabhängig von Ada entstanden. In dieser Hinsicht hätte ein Sieg der blauen Sprache also nichts geändert.

Und fünftens hätte sich etwas im ganz gewöhnlichen Arbeitsalltag von Programmierern verändert. PL/SQL in Oracle beruht zu großen Teilen auf Ada, weil Ada die Sprache des Verteidigungsministeriums war. Hätte die blaue Sprache gewonnen, begännen Prozeduren in jeder Oracle-Datenbank mit `PROCEDURE P (# X, Y: ?T)`, und Aufzählungswerte würden mit einem Backslash geschrieben. Die Datenbankadministratoren wären vermutlich begeistert gewesen.

### Eine Welt, in der die gelbe Sprache gewann

Mit der gelben Sprache wäre die Geschichte ganz anders verlaufen, weil sie im Kern ein umgebautes Pascal war. 1979 wurde Pascal schon überall unterrichtet, Wirth stellte gerade Modula-2 fertig, und wenige Jahre später machte Turbo Pascal Pascal zur Sprache der Personal Computer. Mein Compiler für die gelbe Sprache ist der kleinste der vier, und ein echter hätte auf der vorhandenen Basis von Pascal-Compilern aufbauen können, sodass eine Ada, die aus der gelben Sprache hervorgegangen wäre, wohl früher erschienen wäre als unsere. Dazu käme das Gütesiegel des Verteidigungsministeriums, und die Sprache der Lehrbücher, die Sprache der PCs und die Sprache der Militärsysteme wären eine Familie gewesen. Die Schule von Wirth und Hoare, die in unserer Welt gegen C verlor, hätte einen industriellen Verbündeten mit riesigem Budget bekommen. Hätte sie C geschlagen? Wohl kaum, C hatte Unix. Aber in den 1980er-Jahren hätten die Familien von C und Pascal auf Augenhöhe konkurriert, statt dass Pascal wie in unserer Welt Jahr für Jahr gegenüber C an Boden verlor.

Hoares Monitore wären schon 1980 Standard geworden, und zwar in Hoares Variante, in der ein durch ein Signal geweckter Prozess den Monitor direkt übergeben bekommt. In unserer Welt kamen Monitore über Mesa und Java in die Breite, mit der obligatorischen Schleife um `wait`. Die Entwickler von Mesa wählten ihre Semantik aus praktischen Gründen, und gut möglich, dass die Schöpfer von Java auch in diesem Fall dieselbe Wahl getroffen hätten. Aber eine Generation von Programmierern, die an militärischen Monitoren ausgebildet worden wäre, hätte beide Varianten und den Preis jeder gekannt. Und Ada 95 hätte keine geschützten Objekte gebraucht, weil die Sprache schon Monitore gehabt hätte. Stattdessen hätte man in eine Ada, die aus der gelben Sprache hervorgegangen wäre, das einbauen müssen, was mir gefehlt hat: einen Timeout beim Warten, Prozessnamen und Arrays von Monitoren. Das Gremium schrieb schon 1978, dass es in Gelb keinen Weg gibt, einen bestimmten Prozess zu benennen, und die zweite Runde hätte das sicher behoben.

Ohne Fallstricke wäre es allerdings nicht gegangen. Vergleiche mit niedrigerem Vorrang als `AND`, an denen die Autoren der Sprache selbst im SIFT-Scheduler gestolpert sind, wären in Flugzeugsoftware geblieben, bis die zweite Runde sie behoben hätte oder statische Analysewerkzeuge solche Fehler zu finden gelernt hätten.

Am interessantesten wäre in diesem Fall aber das Schicksal von `SIMULATED_TIME` gewesen. Jedes Stück eines Bordsystems hätte man in einen Block mit künstlicher Zeit legen und so laufen lassen können, dass jeder Lauf den vorigen exakt wiederholt. Alle Probleme hätte das nicht gelöst: Verschiedene Prozessreihenfolgen müsste man weiterhin selbst durchprobieren, wie es heutige Systeme für deterministische Simulation tun, und Hardwareausfälle modelliert die Sprache nicht. Aber zeitabhängige Fehler hätte man schon ab 1980 im eigenen Labor reproduzieren können, statt sie jahrelang beim Kunden zu jagen. In unserer Welt kam man erst in den 2010er-Jahren dorthin.

Und Hoares Vortrag wäre ein anderer gewesen. 1980 erhielt er den Turing Award und erzählte in seinem Vortrag [„The Emperor's Old Clothes"](https://noncombatant.org/hoare-emperors-old-clothes-turing-award/), dass er die Entwickler von Ada seit 1975 beraten habe, und warnte, die Sprache sei zu komplex geraten, um darin Programme zu schreiben, von denen Menschenleben abhängen. Hätte die gelbe Sprache gewonnen, wäre Ada aus einem Entwurf hervorgegangen, dessen Autoren, wenn man den Berichten glaubt, Hoare selbst beraten hatte.

### Vier Varianten der Geschichte

Fasst man alle vier Szenarien zusammen, ergibt sich Folgendes.

| Sieger | Wie Militärsoftware geworden wäre | Was früher in die gängigen Sprachen gekommen wäre |
|---|---|---|
| GREEN, unsere Welt | Rendezvous, explizite generische Instanzen, später geschützte Objekte | Ausnahmen und Generics, die C++ beeinflusst haben |
| RED | Mailboxen, `REGION`-Sperren, eigene Scheduler | Trennung von Nachrichten und gemeinsamen Daten, generische Instanzen ohne Deklaration |
| BLUE | strenge Typen, zwei Arten von Semaphoren, der parallele Block | Structured Concurrency, Einschränkungen für generische Parameter, Sperren mit Besitzer |
| YELLOW | Pascal mit Monitoren und künstlicher Zeit | Simulation mit kontrollierter Zeit, Hoares Monitore, Funktionen ohne Seiteneffekte |

Das Merkwürdigste an dieser Tabelle ist, dass fast alles, was darin für die rote, die blaue und die gelbe Sprache steht, später ohnehin in anderen Sprachen auftauchte, nur später, schrittweise und zu verschiedenen Zeiten. Kaum eine Idee der unterlegenen Entwürfe ist verloren gegangen. Sie kamen unter anderen Namen zurück: geschützte Objekte, Concepts, Structured Concurrency, deterministische Simulation. Als das Gremium 1978 zwischen den Entwürfen wählte, entschied es nicht darüber, welche Ideen gut und welche schlecht sind, sondern darüber, welche schon in den 1980er-Jahren in die Praxis kommen und welche bis in die 2020er-Jahre warten müssen.

## Labs und das Ausführen der Programme

Wie in den vorigen Teilen wollte ich, dass man über eine Sprache nicht nur lesen, sondern auch mit ihr üben kann: ein Programm ändern, es absichtlich kaputt machen und sehen, wie die Sprache reagiert. Zu den zwölf Übungen in der roten Sprache kommen jetzt [fünfzehn neue](https://github.com/tym83/paleocomputing/blob/main/impl/ada-colors/labs/README.md) hinzu: sieben in der blauen und acht in der gelben Sprache, und jede behandelt eine Eigenschaft, die weder die rote noch die grüne Sprache hat. Jedes Lab ist gleich aufgebaut: ein kleines Programm mit mehreren Aufgaben auf verschiedenen Stufen. Auf der Stufe `look` startet man das Programm und liest seine Ausgabe. Bei `change` nimmt man eine bestimmte Änderung vor und bringt das Programm dazu, das erwartete Ergebnis auszugeben. Bei `break` baut man absichtlich einen Fehler ein und sieht, wie der Compiler reagiert oder wie sich das Programm zur Laufzeit verhält. Und bei `build` schreibt man ein eigenes Stück Code. Das Skript `check.sh` prüft all das: Man übergibt ihm die Nummer des Labs und die Stufe, und es übersetzt Ihre Version des Programms, führt sie aus und meldet, ob die Aufgabe gelöst ist. Die Zeit in den Programmen ist virtuell und der Scheduler deterministisch, sodass ein Programm auf jeder Maschine und bei jedem Lauf exakt dieselbe Ausgabe liefert, Zeichen für Zeichen, und sich leicht mit der Referenzausgabe vergleichen lässt.

Das behandeln die Labs zur blauen Sprache.

- In `b1` gehört das Literal `\GREEN` zu zwei Aufzählungen zugleich, Ampelsignalen und Farben, und steht in jeder an seiner eigenen Position. Vergleicht man zwei Spielkartenfarben mit `<`, verweigert der Compiler das, weil ein ungeordneter Typ nur Gleichheit kennt.
- In `b2` vertauscht eine einzige Prozedur `SWAP` ganze Zahlen, Strings und Farben, obwohl niemand auch nur eine Instanz davon deklariert hat. Außerdem sollen Sie eine eigene generische Funktion schreiben, die den größeren von zwei Werten zurückgibt und von ihrem Typ eine Vergleichsoperation verlangt.
- In `b3` entfernen Sie eine Prozedur aus einer Importliste und sehen sich den Fehler an: Eine Prozedur, die sie aufruft, muss entweder diese Prozedur importieren oder jede Variable, mit der sie arbeitet.
- In `b4` sind die Statuscodes eines Geräts als ungeordneter Typ beschrieben, und der Wert wird direkt aus einem Register gelesen. Verschiebt man dieses Lesen aus dem maschinenabhängigen Teil des Programms heraus, akzeptiert der Compiler es nicht.
- In `b5` endet der erste Pfad abnormal, ohne einen `REGION`-Semaphor freizugeben, und der zweite Pfad kommt trotzdem ans Ziel, weil das System den Semaphor freigibt. Deklariert man den Semaphor als signalisierenden, bleibt das Programm hängen. Und behandelt man die Ausnahme im Pfad, ohne den Semaphor von Hand freizugeben, endet der Pfad normal, behält den Semaphor, und das Programm bleibt ebenfalls hängen.
- In `b6` läuft das System THE. Schaltet man Meldungen an den Operator über jede auf die Trommel ausgelagerte Seite ein, ruft die untere Schicht des Systems die obere auf, und das System gerät in eine Verklemmung. Man hätte es kommen sehen können, denn dieser Aufruf stand von Anfang an in der Importliste.
- In `b7` ist ein Timeout als Wettlauf zweier Pfade gebaut: Einer wartet auf ein Element in einer Warteschlange, der andere zählt die Zeit herunter. Nimmt man dem wartenden Pfad die höhere Priorität, kann der Timer ihn stoppen, nachdem ihm das Element schon zugeteilt wurde, er es aber noch nicht abgeholt hat, und das Element bleibt für immer in der Warteschlange.

{{< figure src="19-en-blue-lab.png" alt="Lab b7" caption="Lab b7: der Timeout aus der Analyse von 1978, ein Wettlauf der Pfade `GET` und `TIMER`. Zwei Elemente sind angekommen, und dreißig Millisekunden lang kein drittes" >}}

Und das behandeln die Labs zur gelben Sprache.

- In `y1` weist der Compiler `a - b - c` ohne Klammern zurück und verlangt, dass man angibt, welche Subtraktion zuerst kommt.
- In `y2` geht es um die Parameter `CONST`, `VAR` und `OUT`. Eine Prozedur weist einem Ausgabeparameter einen Wert zu und endet dann mit einer Ausnahme, und es zeigt sich, dass der Wert beim Aufrufer nie ankommt, weil ein Ausgabeparameter nur bei einer normalen Rückkehr zurückgegeben wird.
- `y3` vergleicht geordnete und ungeordnete Aufzählungen: `SUCC`, `LAST` und `FOR`-Schleifen funktionieren bei den ersten, die zweiten lassen sich nicht mit `<` vergleichen.
- In `y4` entstehen aus einer Stack-Vorlage zwei Module mit jeweils eigenem Zustand. Und erzeugt man eine Instanz der Vorlage für einen Typ ohne Ordnung, zeigt sich der Fehler erst beim Erzeugen der Instanz, obwohl er im Rumpf der Vorlage steckt.
- In `y5` warten zwei Prozesse in einem Monitor mit unterschiedlichem Rang auf ein Signal, und der mit dem niedrigeren Rang wacht zuerst auf. Entfernt man `SEND`, verklemmt sich das Programm: Ein Signal wird nirgends gespeichert, und ohne es weckt niemand die wartenden Prozesse.
- In `y6` versucht eine Funktion, eine globale Variable zu ändern, und der Compiler lässt das nicht zu, während eine Prozedur mit Rückgabewert dasselbe tun darf.
- In `y7` exportiert ein Modul eine Variable nur zum Lesen und einen Typ, dessen Aufbau von außen verborgen ist, und beide Versuche, diese Einschränkungen zu umgehen, enden mit einem Übersetzungsfehler.
- In `y8` läuft THE auf Monitoren, und es geht auf dieselbe Weise kaputt wie in `b6`: Die untere Schicht ruft die obere auf.

{{< figure src="20-en-yellow-readers.gif" alt="Das Leser-Schreiber-Problem, gelöst mit einem Hoare-Monitor, im Browser" caption="Das Leser-Schreiber-Problem, gelöst mit einem Hoare-Monitor, im Browser: Die ersten beiden Leser lesen gleichzeitig, der dritte, der nach dem Schreiber kam, wartet, bis der Schreiber fertig ist. Die Ausgabe ist verlangsamt." >}}

Um das alles auszuführen, brauchen Sie nur einen C-Compiler und make:

```sh
git clone https://github.com/tym83/paleocomputing
cd paleocomputing/impl/ada-colors
make                         # builds redc, needed for THE and Kubernetes in Red
make -C blue fixpoint        # builds bluec from the ready-made C file and checks the fixed point
make -C yellow fixpoint      # the same for yellowc
os/run.sh                    # THE and every Kubernetes variant in all four languages
labs/check.sh b5 look        # the REGION semaphore lab
labs/check.sh y1 break       # check your change in the minus-sign lab
```

Wenn Sie Cozystack zur Hand haben, die Open-Source-Plattform für den Aufbau einer Cloud auf Kubernetes, müssen Sie nichts installieren. Der [Anwendungskatalog](https://github.com/tym83/paleocomputing/blob/main/marketplace/README.md), den ich für diese Serie zusammengestellt habe, enthält eine [Sprachumgebung](https://github.com/tym83/paleocomputing/blob/main/marketplace/repos/languages/packages/apps/langpack/README.md), und alle vier Sprachen stecken darin in einem einzigen Container-Image. Sie geben das Image `ada-colors-run` an, legen eine Quelldatei hinein, und das Programm läuft als einmaliger Kubernetes-Job, dessen Ausgabe zum Log des Jobs wird. Beim Bauen des Images werden alle vier Compiler aus den gespeicherten C-Dateien neu gebaut und prüfen dabei, dass sie sich weiterhin Byte für Byte selbst reproduzieren.

Am einfachsten ist es, die [Seite im Browser](https://tym83.github.io/paleocomputing/red/) zu öffnen, wo alles direkt auf der Seite passiert, ganz ohne Server. Alle vier Übersetzer, aus denselben C-Dateien nach WebAssembly übersetzt, machen aus dem Quelltext C, dieses C übersetzt clang, ebenfalls als WebAssembly, und jede Task des Programms läuft in ihrem eigenen Thread. Die Laufzeitumgebung ist dort aus derselben Datei gebaut wie unter Linux und nutzt dieselbe virtuelle Uhr, sodass Programme im Browser dieselbe Ausgabe liefern wie auf einem gewöhnlichen Rechner, Byte für Byte. Das wird automatisch geprüft: Bei jeder Änderung laufen alle Beispiele in Headless Chrome, und ihre Ausgabe wird mit einer Referenz verglichen. Beim ersten Start lädt die Seite den C-Compiler herunter, etwa zwanzig Megabyte, danach behält der Browser ihn.

{{< figure src="21-en-blue-failure.png" alt="Eine Spezifikation von 1978, ein Lauf von 2026" caption="Eine Spezifikation von 1978, ein Lauf von 2026: Der erste Pfad endete abnormal, ohne den `REGION`-Semaphor freizugeben, und der zweite bekam ihn sofort" >}}

## Was ich mitnehme

Am Ende jedes Teils der Serie frage ich mich, was von meinen Funden es wert ist, in die heutige Infrastruktur übernommen zu werden.

Erstens: Eine Sperre sollte wissen, dass ihr Besitzer abnormal geendet hat. Genau deshalb haben die Autoren der blauen Sprache 1978 zwei Arten von Semaphoren unterschieden, und die Rationale von SofTech erklärt in zwei Absätzen, was man bei verteilten Systemen aus Ausfällen lernt: Die Sperre eines abnormal beendeten Besitzers muss das System freigeben, nicht der Exception-Handler des Besitzers, und freigegeben werden dürfen nur Sperren, keine Signalsemaphore. Lehrreich ist auch der Unterschied zu heute. Innerhalb einer Maschine sieht das System, dass ein Pfad geendet hat, im Netz dagegen sieht man das nicht: Ein Node antwortet einfach nicht mehr, und man kann nicht sagen, ob er angehalten ist oder die Verbindung weg ist. Deshalb sind Sperren in Kubernetes als Leases gebaut: Ein Node oder ein Leader erneuert regelmäßig einen Eintrag, und hört er damit auf, gilt seine Sperre als frei. Der frühere Besitzer kann dabei weiterarbeiten, ohne zu wissen, dass die Sperre schon jemand anderem gehört, deshalb bekommt sie eine Nummer, die mit jedem neuen Besitzer wächst, und wer Schreibvorgänge annimmt, lehnt die mit einer alten Nummer ab. Die Autoren der blauen Sprache haben diese Aufgabe für eine einzelne Maschine gelöst, auf der ein abnormales Ende sichtbar ist. Im Netz ist sie schwieriger, aber der erste Schritt ist derselbe.

Zweitens: Nebenläufige Arbeit braucht einen Besitzer. Wenn ein Controller eine Goroutine startet, auf deren Ende niemand wartet und deren Fehler niemand liest, ist das genau das, wovor der parallele Block der blauen Sprache schon 1978 schützte.

Drittens: Erst die Zeit kontrollierbar machen, dann Fehler suchen. Diese ganze Serie beruht auf virtuellen Uhren, und die gelbe Sprache bot, wie sich herausstellte, dasselbe in ihrer Syntax an.

Viertens: Jeden fehlenden Mechanismus muss man durch einen eigenen Prozess ersetzen. Die blaue Sprache, der Timeouts fehlen, behilft sich mit einem Wettlauf von Pfaden, die gelbe mit einem Wachprozess und die grüne, der Mailboxen fehlen, mit einer Puffer-Task. Fehlt einer Plattform ein Primitiv, baut es trotzdem jemand, nur jeder auf seine Weise und mit eigenen Fehlern, und das ist ein gutes Argument dafür, an Primitiven nicht zu sparen.

Und fünftens: Die unterlegenen Entwürfe zu studieren lohnt sich, weil man so im Voraus weiß, welche Ideen zurückkommen, und nicht zweimal dafür bezahlt.

Wie geht es weiter? Alle vier Wettbewerbsentwürfe laufen jetzt, aber von der ersten Runde ist noch etwas übrig: REDL, die erste Fassung der roten Sprache mit Monitoren und Ereignissen, die das rote Team verworfen hat. Und die Gutachten zum Finale von 1979, in dem zwischen Rot und Grün entschieden wurde, existieren bis heute nur auf Mikrofiche. Wenn Sie Zugang dazu haben, melden Sie sich gern.

Quellen, Tests, Labs und alle Notizen liegen im Repository [github.com/tym83/paleocomputing](https://github.com/tym83/paleocomputing) im Verzeichnis [`impl/ada-colors`](https://github.com/tym83/paleocomputing/blob/main/impl/ada-colors/README.md). Wenn Sie eine Stelle finden, an der ich die Spezifikationen von 1978 falsch verstanden habe, schreiben Sie mir. Das interessiert mich wirklich.

Frühere Teile der Paleocomputing-Serie:

- [Teil 1. Wirths Prozessor, Project Oberon, eine neue Architektur in QEMU und KubeVirt, laufend in Cozystack und Kubernetes](/de/blog/2026/09/paleocomputing-teil-1-wirth-oberon-qemu-kubevirt/)
- [Teil 2. Kubernetes auf Oberon, Wirths Funk statt eines Netzwerks und ein Cluster im Browser](/de/blog/2026/10/paleocomputing-teil-2-kubernetes-oberon-wirth-funk/)
- [Teil 3. Zwei Adas: RED und GREEN, die Finalisten des Wettbewerbs von 1979](/de/blog/2026/10/paleocomputing-teil-3-zwei-adas-pentagon-programmiersprachen/)

