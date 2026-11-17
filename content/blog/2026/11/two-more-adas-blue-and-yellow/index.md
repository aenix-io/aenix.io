---
title: "Paleocomputing, part 4: Two more Adas — rebuilding the blue and yellow languages the Pentagon rejected in 1978"
description: "BLUE and YELLOW, the designs dropped from the 1978 Pentagon language tender, rebuilt: self-hosting compilers, Dijkstra's THE and Kubernetes."
seo_title: "Two more Adas: rebuilding BLUE and YELLOW from 1978"
date: "2026-11-17"
cover_image: "/img/blog/covers/two-more-adas-blue-and-yellow.jpg"
lastmod: "2026-11-17"
series: "Paleocomputing"
author: "Timur Tukaev"
type: "article"
topics: ["Kubernetes", "Cozystack", "Open Source", "Retrocomputing", "Distributed Systems", "Programming Languages"]
language: "en"
hreflang_de: "/de/blog/2026/11/paleocomputing-teil-4-zwei-weitere-adas-blau-gelb/"
related_posts: ["/blog/2026/10/two-adas-red-and-green/", "/blog/2026/10/kubernetes-over-wirths-radio/", "/blog/2026/09/nine-days-of-paleocomputing/"]
direct_answer: "**BLUE (SofTech) and YELLOW (SRI International) were two of the four preliminary designs submitted in February 1978 to the US Department of Defense competition that produced Ada; in April 1978 the Pittsburgh panel recommended rejecting Blue, and the second round went to Green and Red.** From the 4,575-page DTIC volume ADB950587, saved in the Wayback Machine, both languages were rebuilt: a compiler written in each language that reproduces itself byte for byte, the programs printed in the 1978 documents, Dijkstra's THE and Kubernetes on top of it. Blue's parallel block reports a failed branch to whoever started it, and its REGION semaphore is released automatically when the branch holding it ends abnormally; Yellow is Pascal with Hoare monitors and a SIMULATED_TIME block with artificial time. Everything runs in a browser tab, on any machine with a C compiler, and in Cozystack."
quick_facts:
  - label: "Languages"
    value: "BLUE (SofTech, led by John Goodenough) and YELLOW (SRI International, led by Jay Spitzen), first-round designs of February 1978"
  - label: "Source"
    value: "DTIC volume ADB950587, \"DoD Common High Order Language, Phase 1\", 4,575 pages, saved in the Wayback Machine"
  - label: "Compilers"
    value: "About 16,000 lines of BLUE and 10,000 of YELLOW; both translate to C and reached the fixed point on the first try"
  - label: "Programs of 1978"
    value: "Blue: 17 programs, including a 1,300-line I/O library from Appendix C; Yellow: 15 tutorial programs, 4 compile as printed"
  - label: "Systems"
    value: "Dijkstra's THE, Kubernetes on top of THE, and a standalone Kubernetes control plane in both languages"
  - label: "Where it runs"
    value: "Browser (WebAssembly), any machine with a C compiler and make, Cozystack (ada-colors-run image)"
quick_facts_source: "impl/ada-colors in github.com/tym83/paleocomputing"
faq:
  - q: "What were the BLUE and YELLOW languages?"
    a: "Two of the four preliminary designs submitted on February 15, 1978 to the US Department of Defense language competition. Blue came from SofTech and was built around types; Yellow came from SRI International and reworked Pascal to meet the Ironman requirements. Both were dropped after the first round, while Green went on to become Ada."
  - q: "Why did the Pittsburgh panel reject Blue?"
    a: "Its report of April 4, 1978 called the design careful and complete but overwhelmed by a pervasive complexity, with no evident simple underlying model. Yellow lost to Red only narrowly: the panel wrote that the choice was not clear cut, though most members preferred Red."
  - q: "What did the 1978 blue language do that Ada 83 did not?"
    a: "A parallel block in Blue waits for all its paths and raises an exception from a failed path itself, so the failure reaches whoever started the block. Its REGION semaphores are released by the system when the path holding them ends abnormally, while SYNCH signalling semaphores are not. In Ada 83 a task with an unhandled exception simply terminates and nobody is told."
  - q: "What is SIMULATED_TIME in the yellow language?"
    a: "A mark on a BEGIN ... END block that makes the processes inside it take turns, with artificial time: every statement takes zero time except DELAY(n), and the clock advances only when every process in the block is waiting."
  - q: "What did Ada later gain that Blue and Yellow had in 1978?"
    a: "Protected objects in Ada 95, whose rationale names monitors among their ancestors; overriding indicators in Ada 2005, similar in spirit to Yellow's EXTENDS and REPLACES; the Global aspect in Ada 2022, close to Blue's IMPORTS lists; and parallel blocks in Ada 2022, though only for computations, not for tasks."
  - q: "How can I try BLUE and YELLOW?"
    a: "Open tym83.github.io/paleocomputing/red/ in a browser, where the translators and clang run as WebAssembly, or clone github.com/tym83/paleocomputing and run make in impl/ada-colors with any C compiler. Fifteen labs, seven in Blue and eight in Yellow, check themselves with labs/check.sh."
primary_keyword: "Ada language competition BLUE and YELLOW"
keywords: ["Ada", "BLUE language", "YELLOW language", "SofTech", "SRI International", "John Goodenough", "Ironman", "DoD language competition", "paleocomputing", "self-hosting compiler", "Hoare monitors", "semaphores", "structured concurrency", "deterministic simulation", "THE multiprogramming system", "Dijkstra", "Kubernetes control plane", "WebAssembly", "Cozystack", "retrocomputing"]
quiz:
  title: "Test yourself: the blue and yellow Adas"
  questions:
    - q: "What happens to a REGION semaphore in Blue when the path holding it ends abnormally?"
      options:
        - { text: "It stays held until the program ends", correct: false }
        - { text: "The system releases it automatically", correct: true }
        - { text: "It is passed to the parent block", correct: false }
      explanation: "REGION semaphores have an owner and are released when the owning path ends abnormally. SYNCH signalling semaphores are not, so waiters never get signals about events that didn't happen."
    - q: "Why does Yellow reject `a - b - c`?"
      options:
        - { text: "Subtraction is not defined for INTEGER", correct: false }
        - { text: "Ironman requirement 4G demanded parentheses around chained non-associative operators", correct: true }
        - { text: "Yellow reads expressions right to left", correct: false }
      explanation: "SRI met the requirement to the letter; SofTech argued it should be dropped, and the next edition softened it to a recommendation."
    - q: "What does the Pittsburgh panel's report of April 4, 1978 recommend for Blue?"
      options:
        - { text: "Continue Blue alongside Green", correct: false }
        - { text: "Merge Blue with Yellow", correct: false }
        - { text: "Reject Blue", correct: true }
      explanation: "The panel found Blue careful and complete but overwhelmed by a pervasive complexity, and recommended continuing Green and at least one of Red and Yellow."
    - q: "In a `SIMULATED_TIME` block, how long does an ordinary statement take?"
      options:
        - { text: "Zero units of time", correct: true }
        - { text: "One tick of the clock", correct: false }
        - { text: "As long as on real hardware", correct: false }
      explanation: "Only DELAY(n) takes time, exactly n units, and the clock moves only when every process inside the block is waiting."
---

In February 1978, four teams handed the US Department of Defense their preliminary designs for the language that, a year later, would be named Ada. The designs were anonymized, and instead of company names they carried colours. Green came from Jean Ichbiah's French-American team, Red from Intermetrics in Boston, Blue from SofTech, and Yellow from SRI International, a research institute in California. That spring, Green and Red went through to the second round, Blue and Yellow went into the archive, and a year after that Green won and became Ada.

{{< figure src="01-en-diagram-contest.png" alt="How Ada was chosen" caption="How Ada was chosen: four designs in February 1978, two in the second round, one winner in May 1979" >}}

In the [article about the finalists](https://aenix.io/blog/2026/10/two-adas-red-and-green/), I rebuilt Red and Green from their 1979 documents. I wrote a compiler for each one in the language itself, and then built an operating system and Kubernetes on top of both. At the time, Blue and Yellow looked out of reach. Their descriptions sat in a 4,500-page volume that the Defense Department's archive had just stopped serving. Then a copy turned up in a web archive, and I did the same thing with these two languages.

This post is about the two designs that lost to Green and Red. Blue is built around types so consistently that even assignment is defined as an operation of a type. Yellow is Pascal reworked to meet the military's requirements. Its tasks don't talk through rendezvous, the way they do in Green and in Ada, where one task waits for another at an agreed entry until the two meet. Instead they talk through Hoare's monitors: modules with shared data that only one process can be inside at any moment. For both languages I wrote compilers in the languages themselves, and those compilers ran, for the first time ever, programs that the language designers printed in their 1978 reports and that nobody had seen working since. On top of that, both languages now run THE, the multitasking operating system that Dijkstra's group built in the 1960s, and Kubernetes on top of it.

But the most interesting part isn't the languages themselves. It's that all four designs can now be put side by side and compared by running code rather than by reviews. The same example behaves differently in each of the four, and the differences turned out to be far more interesting than I expected. In the 1978 blue language, when one of several parallel branches fails with an error, whoever started those branches finds out about it, something mainstream languages only learned to do in the last few years. Its mutex is released automatically if the branch holding it ends abnormally. And the yellow language has artificial time built in: the clock moves only when the program wants it to.

It's a long post, so here's the map. First I'll tell you about the 1978 book these texts come from and about the people who designed the languages, and then we'll walk through Blue and Yellow one at a time. After that we'll run the same examples in all four languages and collect the differences in a table, look at the compilers and the 1978 programs, at THE and Kubernetes, and try to understand why these designs lost. At the end I'll look at what Ada later inherited from them and at what the industry might have looked like if Blue or Yellow had won.

This is the latest part of my series on paleocomputing. I'm curious about the ideas that lived in technologies that never took off or stayed the province of enthusiasts and theorists, about what we lost along with them, and about which of those lost ideas later came back in other technologies. You don't need to read the article about the finalists first: wherever it matters, I'll briefly recap how Red and Green work.

All the sources, notes and instructions are in the [github.com/tym83/paleocomputing](https://github.com/tym83/paleocomputing) repository, in the [`impl/ada-colors`](https://github.com/tym83/paleocomputing/blob/main/impl/ada-colors/README.md) directory, under the Apache 2.0 license.

## A book made for microfiche

Let's start with where the texts came from. In 2023, an interesting [message](https://lists.techfak.uni-bielefeld.de/pipermail/systemsafety/2023-September/005936.html) appeared on the systemsafety mailing list, where people discuss the reliability of software for critical systems. At the request of one enthusiast, DTIC, the Defense Department's archive of technical documentation, had scanned a 4,575-page volume called "DoD Common High Order Language, Phase 1". It's listed in the archive's catalogue as ADB950587, and it contains all four designs from the first round. While I was busy with Red and Green, the DTIC site first went down for maintenance and then started refusing every request. The Wayback Machine came to the rescue: in September 2023, someone had saved the whole PDF there. The volume carries the same marking as the Red manual: "approved for public release, distribution unlimited".

{{< figure src="02-scan-preface.png" alt="The preface of volume ADB950587" caption="The preface of volume ADB950587" >}}

{{< figure src="03-scan-colours.png" alt="The colour key on the next page" caption="The colour key on the next page: Green is CII-Honeywell Bull, Red is Intermetrics, Yellow is SRI International, Blue is SofTech" >}}

The book's preface is a historical document in its own right. The compilers explain that the book was made for microfiche, sheets of film with shrunken pages that you read through a magnifier, and that there was never a bound version: all two hundred printed copies went straight to the reviewers, so the microfiche set is the only one that can be distributed at all. The preface also reveals all the colours and who was behind each one. And it ends with a sentence I read several times over. The losing designs will not be continued, they are of interest perhaps only to researchers, the goal of the program is to arrive at a single language, and the Department of Defense considers it inappropriate to encourage alternatives.

Inside are the four designs exactly as they were submitted on February 15, 1978. Red appears in its first edition: this is the REDL with monitors that the red team later threw out and essentially rewrote from scratch. After the designs come the analyses sent in by eighty teams, from universities to defense contractors, and the report of the Pittsburgh panel. The panel members studied those analyses, questioned the language designers and boiled everything down to the tables that were used in April 1978 to decide who would make the final.

The OCR text is awful in places: a zero instead of the letter O, a dollar sign instead of S, the letter l instead of a percent sign. So I checked every program against the page image, and the blue programs, full of backslashes and hash signs, I simply retyped from the pictures.

### Who made the blue and yellow languages

The blue design was led by John Goodenough of SofTech, and his name is far from a footnote in Ada's history. In 1975 he published one of the first major papers on exception handling in Communications of the ACM, and after the competition SofTech, under his leadership, won the contract for the test suite used to check Ada compilers against the standard. Goodenough later headed the group that interpreted the standard and wrote requirements for Ada 95. So although the blue team lost, it went on working on Ada for another two decades.

The yellow design was led by Jay Spitzen of SRI International, where in those years people were building SIFT, a fault-tolerant flight computer for aircraft. We'll come back to it. A popular Time-Life book from 1986 and Bertrand Meyer both say that Hoare and Wirth consulted for the yellow team. The document itself doesn't name its consultants, but their ideas are on every page. The language description is structured like Wirth's description of Pascal, the modules come from his Modula, the monitors from Hoare's 1974 paper, and the bibliography includes the entries "Hoare, private communication" and "Wirth, private communication".

### What Dijkstra thought of them

Dijkstra spent all of March 1978 reading the four designs and [wrote a review](https://www.cs.utexas.edu/~EWD/index06xx.html) of each one. Blue got it for its chapter on types and operations, which, in his words, had "grown to 160 (!) pages". He called Yellow a hopeless mess and added that he felt sorry for the consultants who had failed to prevent it. Once you remember who the yellow team's consultants are said to have been, that line lands with real bite.

He wasn't thrilled with Red and Green either, so going by his reviews you couldn't tell the losing designs from the winning ones. In the end the decision came down to the reviewers and the panel of experts, and I'll return to their conclusions once I've shown both languages at work.

## BLUE: a language in which everything rests on types

Of the four languages, Blue is the least familiar, so I'll start with a short program from a [lab](https://github.com/tym83/paleocomputing/blob/main/impl/ada-colors/labs/blue/b2-generic.blu). In it, one and the same procedure swaps two integers, two strings and two colours:

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

Almost every symbol here means something, so let's take them one at a time.

{{< figure src="04-scan-blue-code.png" alt="This is how the blue language looked in the specification itself" caption="This is how the blue language looked in the specification itself: a generic stack where `?T` infers the element type, `#` separates the groups of parameters, `SIGNALS` lists the exceptions, and `WHERE T NEEDS` says what is required of the type" >}}

Enumeration literals are written with a backslash: `\RED`, `\GREEN`. That's not a whim. A literal in Blue doesn't belong to any single type, so `\GREEN` can be both a traffic-light colour and a rainbow colour at once, sitting at its own position in each of those types. Context decides which one is meant, and when there isn't enough context, you name the type explicitly: `[COLOR]$$(\GREEN)`. There are also unordered enumerations, `UNORDERED`, which define nothing but equality. A card suit is never greater or less than another suit, and the language won't let you pretend otherwise.

A procedure's parameters fall into three groups, inputs, updated parameters and outputs, and hash signs separate the groups. In `SWAP (# X, Y)` there are no inputs, and both parameters are updated. In `STORE_ (T ## T)` there's one input of type `T`, no updated parameters, and one output of the same type: assignment takes a value and produces the variable's new value. The groups are visible at the call site too, so `SWAP (# I, J)` tells the reader right away that `I` and `J` will change.

`?T` is a generic type inferred from the argument. An instance of the procedure for each type is created automatically, right at the call, and nobody has to name or declare it. Red worked the same way, while in Green and in Ada you have to create the instance explicitly. And it's not just types that can be inferred. `ASCII_STR (?L)` takes the string's length from the argument, and the `FRAME` function promises to return a string of length `L + 2`, because length is part of the type here and the compiler knows it.

Finally, `WHERE T NEEDS (STORE_ (T ## T))` is the list of what the procedure body needs from type `T`, and here all it needs is assignment. These operations are taken from wherever the procedure was called. If the type has no assignment, the call won't compile, and the compiler reports a clear error right at the call site instead of somewhere deep inside the instance. Today we call this concepts in C++ and trait bounds in Rust.

### Assignment is a function too

`STORE_` in the previous example isn't a typo. In Blue, every operation, whether it's assignment, comparison or taking a substring, is a call to a function with a fixed name: `ADD_`, `EQUAL_`, `LESS_THAN_`, `SUBSTRING_`, `STORE_`. That means an abstract type exported from a module defines its own addition and its own assignment the same way, as ordinary subprograms. Ada still has no user-defined assignment: Ada 95's controlled types let you say what happens after a copy and before destruction, but not the assignment itself. C with Classes, the predecessor of C++, already let you redefine assignment in 1980.

One of the 1978 reviewers wrote that Blue came closest of all to making the type the thing that holds the whole language together, and you can see it in every detail.

Take numbers. Computers of the 1970s often had no floating point, so fractional quantities were stored as integers with an implied decimal point, for example speed in hundredths of a metre per second. That's fixed point, and usually the programmer had to remember where the point sat in each variable. In Blue, the type remembers. `FIXED (scale, radix, precision)` says how many places the point is shifted, in which radix and with what precision, and the compiler lines the points up itself when it adds or compares such numbers. Even `INTEGER` here is just fixed point with the point at the very end. No other design describes fixed point in such detail.

Strings work the same way. The character set is part of a string's type: in `CHAR_STR (L, C)`, `L` is the length and `C` is the character set, ASCII or, say, one of the many six-bit BCD codes that machines of the day used. So you can write one function for strings in any encoding, and the compiler won't let you concatenate an ASCII string with a BCD one.

Even talking to hardware rests on types. The codes a device uses to report its state were chosen not by the programmer but by the engineer who designed the board. In Blue such a state is described with an ordinary enumeration, and each value is assigned the code the hardware picked:

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

Two details are worth noticing here. Only an unordered type may be given its own codes, because hardware codes can come in any order, and then you can no longer tell from them which value is greater. Ada arrived at the same place from the other side: it lets you assign codes to any enumeration, but they must be increasing. And reading a code from a device register as a value of the type is allowed only in the machine-dependent part of the program, inside `SELECT OBJECT_MACHINE`, where the program says outright which hardware it's doing this on.

### Closed scopes and declared exceptions

As in Red, a procedure in Blue is a closed scope: it can't see outside variables until it imports them. But Blue is stricter than Red here. A procedure that calls another procedure must import either that procedure or every variable it touches, so the header of any procedure shows which data it can reach through the whole chain of calls. The hash sign in an import list works the same way as in parameters. In `IMPORTS (DATA: (# MUTEX, BALANCE))` everything comes after the hash, meaning both variables are imported for updating, while anything the procedure only reads goes before it. A blue program itself consists of segments, units of translation that list in a `USES` clause what they take from one another.

Exceptions in Blue are declared in the subprogram header, for example `SIGNALS (OVERFLOW, INVALID_FORMAT)`, and a subprogram can't let an exception escape unless it's on that list. SofTech's rationale justifies this the same way it justifies import lists: a procedure's interface should be described completely, and what it can raise is as much a part of it as what it can change. In 1978 hardly anyone did this outside Barbara Liskov's CLU, and checked exceptions, the kind the compiler makes you declare or handle, reached mainstream languages only with Java. Ada has never had them.

An exception handler in Blue is attached to a statement, not to a block, and `EXCEPT` can follow any statement. That sounds like a detail until you write `BLOCK ... EXCEPT ... END BLOCK` and discover that the handler covers only the last statement of the block, not the whole block. I fell for it, and it's now a separate entry in the [compiler notes](https://github.com/tym83/paleocomputing/blob/main/impl/ada-colors/blue/notes/blue-digest.md).

### The parallel block

When it comes to concurrency, Blue is the strictest of the four. It has no tasks in the usual sense. Instead there's a parallel block, `PAR_BLOCK`, with parallel paths, `PATH`, inside it, and the block doesn't end until all of its paths have ended. The block itself isn't new; it's Dijkstra's `parbegin ... parend` from 1965. What's new is this: if a path raises an exception it doesn't handle but is allowed to raise, the block waits for the remaining paths and then raises that exception itself, so a failure in a path becomes a failure of the block that can be handled outside it.

Here's an example. The block has two identical paths, `WORKER` 1 and `WORKER` 2, and each adds 10 to a shared balance that starts at 100. To keep the paths from getting in each other's way, the balance is guarded by the `MUTEX` semaphore: a path acquires it with `REQUEST`, changes the balance and lets go with `RELEASE`. I'll come back to semaphores in a moment. The first path deliberately fails with `FAILED` while it's holding the semaphore. For now, keep an eye on `SIGNALS (FAILED)` in the path header and on the `EXCEPT` after the block:

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

{{< figure src="05-en-blue-parblock.gif" alt="The same example in the browser" caption="The same example in the browser: the first path fails holding the semaphore, the second gets it right away, and the block raises `FAILED`. The output is slowed down; on the virtual clock the program finishes in a fraction of a second." >}}

Today this approach is called structured concurrency. Parallel branches are nested in the program's block just like ordinary statements: the block doesn't end until they do, and if one of them fails, whoever started the block finds out. About eight years ago this idea started showing up again everywhere: in the Trio library for Python, in Swift's task groups, in Java's `StructuredTaskScope`. Blue is simpler. If one path fails, its siblings keep running, and you have to stop them yourself with `TERMINATE`; if two paths fail, only one of the two exceptions makes it out. And `TERMINATE` doesn't cut a path off mid-sentence. The path receives a `TERMINATED` exception the next time it gets its turn to run, and it can catch it, for instance to clean up after itself. Paths also have priorities: when two of them are ready to run, the processor goes to the one with the higher priority. 

In Ada 83, a block also waits for its tasks, but if an exception in a task goes unhandled, the task simply terminates. The exception isn't passed on anywhere, and whoever started the task never learns that it failed. It's one of Ada's best-known traps, and the 1978 blue language doesn't have it.

That strictness has its price. A parallel block can't be placed inside a subprogram, so you can't start a couple of paths from a procedure, and that will come back to bite us in the blue Kubernetes.

### Two kinds of semaphores

Blue has neither mailboxes, the message queues between tasks that Red has, nor Green's rendezvous. Paths coordinate through semaphores. Dijkstra's semaphore is a counter with two operations: P waits until the counter is greater than zero and decrements it, and V increments the counter and wakes one of the waiters. In Blue, semaphores come in two kinds, and the difference between them is subtle. `SYNCH` is a classic semaphore with no owner: one path waits for an event, another announces that it happened. `REGION` is a lock around shared data, and it does have an owner; today we'd call it a mutex. If the path holding such a lock ends abnormally, the lock releases itself.

{{< figure src="06-scan-blue-semaphores.png" alt="Section 3.11 of the SofTech specification" caption="Section 3.11 of the SofTech specification: `SYNCH` and `REGION` semaphores. `REGION` semaphores that a path has acquired and not released are released automatically when it ends abnormally" >}}

Back to the example above. The first path fails without ever releasing the semaphore, but it's a `REGION` semaphore, so the system releases it on its own. The second path gets it immediately and adds its 10, and the program runs to the end with a balance of 110 instead of hanging forever on a semaphore that no one is left to release. Importantly, the system releases the lock only if the path died, that is, if nobody caught the exception. If the path caught the exception itself and kept going, its locks stay with it. [One of the labs](https://github.com/tym83/paleocomputing/blob/main/impl/ada-colors/labs/blue/b5-region.blu) is built around this.

So why not release every semaphore when a path dies? SofTech's rationale has an answer for that too. The fact that a path holds a lock can be recorded only inside the acquire operation itself. If you record it with a separate instruction right after acquiring, the path can die in between, when the lock is already taken but the note saying who took it hasn't been written yet. So it has to be the system that releases a dead path's lock, not an exception handler in the program. But if the system released every semaphore indiscriminately, it would release the signalling ones as well, and whoever was waiting on them would receive signals about events that never happened. That's why there are two kinds, and only locks release themselves.

This design has an obvious weakness, and SofTech doesn't hide it. A path may die halfway through a write, and then the next path gets the lock together with half-updated data. SofTech accepted that, reasoning that for the computers inside aircraft, ships and missiles, the very machines the language was meant for, it's not a disaster: their data usually comes from sensors and will be overwritten with fresh readings a moment later. About thirty years later the authors of POSIX, the standard that Unix systems are built around, faced the same problem and decided to warn the next owner. When the owner of a so-called robust mutex dies, whoever acquires the mutex next gets the `EOWNERDEAD` code, which means the previous owner died and the data may be corrupted. The new owner has to check the data and declare it consistent, or the mutex becomes unusable. Blue has no such warning, and the lock passes to the next owner in silence.

Time in Blue is also a little unusual. `WAIT (30)` puts a path to sleep for thirty seconds, but seconds here are stored as a binary fixed-point fraction, so you can't write exactly one millisecond, just as you can't write exactly one third as a decimal fraction. And `CLOCK`, as far as I can tell from the specification, shows not the time of day but how long the path itself has been running. That's why my programs take log timestamps from the simulated machine's clock.

## YELLOW: Pascal told to satisfy Ironman

If Blue started from types, Yellow started from Pascal. The Department of Defense wrote its language requirements in stages, and the editions were called Strawman, Woodenman, Tinman, Ironman and Steelman, from a man of straw to a man of steel, each more detailed than the last. The first-round designs were based on the 1977 Ironman, and SRI says plainly in its report that its goal was to design a language by reworking Pascal to meet those requirements. The yellow language description is divided into sections numbered exactly like Wirth's description of Pascal, and one section is even left empty just so the numbers line up. A program in it reads like Pascal with long closing keywords:

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

To Pascal, SRI added modules from Modula, monitors and signals, module templates, exceptions and overloading. Case matters: reserved words are written in capitals, and names however you like. ASCII had no "not equal" sign, so, as in Modula, it's written with a hash.

### Type and representation

The main thing SRI invented itself is the split between type and representation. A representation here isn't a memory layout, like `REP` in Blue, but a constraint on values. `INTEGER` is a type, a set of values together with the operations on them, and `INTEGER [1..10]` is one of its representations, the integers from one to ten. For floating-point numbers a representation also sets the precision, and for fixed-point numbers the step. A variable can be declared only with a representation; plain `INTEGER` isn't enough. In return, different representations of the same type are compatible: `INTEGER [1..5]` and `INTEGER [0..9]` are still the same type, and assignment only checks that the value falls in range. Enumerations are also declared as representations, in a `REPRESENTATION` section, as in the example above.

{{< figure src="07-scan-yellow-types.png" alt="Chapter VI of the yellow specification" caption="Chapter VI of the yellow specification: a type is a set of values, a representation is a subset of it or a way to store it. The type `INTEGER` and the representation `INT`" >}}

In Ada, the same thing is called a subtype: `subtype SMALL is INTEGER range 1 .. 10` doesn't create a new type, it just narrows the old one. The difference is that in Ada a subtype is an optional extra, whereas in Yellow you can't do without a representation. To create a genuinely new type you need a separate declaration, `TYPE T = INTEGER`, and numbers of that type are written together with its name: `T 50`.

Enumerations can be ordered or unordered, as in Blue, and `BOOLEAN` here is unordered: true isn't greater than false. Names can be overloaded only explicitly. If a new function has the same name as an existing one, you mark it `EXTENDS` when it adds to the old ones or `REPLACES` when it replaces them, and without a mark the new declaration hides all the old ones. So you can't overload anything in Yellow by accident, and a reader can see at once where a name has taken on a new meaning.

### Two rules you trip over on day one

You can't chain subtraction in Yellow. Addition and multiplication are associative, so `a + b + c` needs no parentheses, but `a - b - c` is a syntax error, and so is `a * b DIV c`; you have to spell out the order with parentheses: `(a - b) - c`. Pascal and nearly every other language simply read such an expression left to right. This wasn't SRI's whim. Ironman demanded it: under requirement 4G, parentheses are mandatory when operators of the same precedence follow one another and the left one is non-associative. SRI met the requirement to the letter, while SofTech wrote plainly in Blue's rationale that the requirement should be dropped, and in the next edition it was softened to a recommendation.

The second rule is sneakier, and it comes from Pascal. In Yellow, as in Pascal, comparisons have the lowest precedence, lower than `AND` and `OR`. So `x > 0 AND b` is read as `x > (0 AND b)` and doesn't compile. It's worse when the types happen to match: then there's no error at all, and for Boolean `f` and `g`, `f = f AND g` quietly means `f = (f AND g)`. A little later I'll show you how the language's own authors fell for this rule.

### Pure functions and value-returning procedures

Functions in Yellow are pure: they can't change their parameters, and they can assign only to their own local variables. So given the same arguments, a function always returns the same result, wherever you call it. Ironman didn't require this; SRI went further on its own. For anything that has to change state, like "give me the next ticket number", there are procedures that return a value:

```
FUNCTION Square RETURNS INTEGER64 (CONST x: INTEGER64)
  RETURN x * x
ENDFUNCTION Square;

PROCEDURE NextTicket RETURNS INTEGER64 ()
  ticket := ticket + 1;
  RETURN ticket
ENDPROCEDURE NextTicket;
```

Green, in 1979, settled this question in almost the same way, and Ada 83 dropped the distinction.

### Templates that rewrite the text

Generic modules in Yellow are simpler than in the other three languages. A module template, `TEMPLATE`, is just text with parameters. The `INSTANCE` statement literally rewrites that text, substituting whatever it was given for the parameters, and only then translates the resulting module. Each instance becomes a separate module with its own state, and an error in the template body shows up only when an instance is created, just like C++ templates with their three-screen error messages. Blue is the opposite: requirements on the type are written in the `NEEDS` list and checked where the generic procedure is called.

{{< figure src="08-scan-yellow-template.png" alt="Sections X.C–D of the yellow specification" caption="Sections X.C–D of the yellow specification: an instance means exactly what the module would mean if it were written out again with the actual parameters substituted" >}}

### Hoare's monitors

Concurrency, on the other hand, turned out to be the best part of Yellow. Processes in it communicate only through monitors. A monitor, invented by Hoare and Per Brinch Hansen, is a module whose procedures run strictly one at a time, and inside it there are signals: queues in which a process can sleep until the event it needs. In Java and POSIX these queues are called condition variables. Here's a solution to the classic readers and writers problem, the monitor from Hoare's 1974 paper, rewritten in Yellow:

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

Signals in Yellow work exactly the way Hoare described them. `SEND` hands the monitor directly to the process it wakes, and the sender waits until that process leaves the monitor or goes back to sleep. That's why the woken process can check its condition with `IF` rather than `WHILE`: between the signal and the wake-up, nobody can sneak in and spoil things again. In 1980, Xerox chose a different variant for its Mesa language, where a signal is only a hint and the woken process must recheck the condition in a loop. That variant is the one that caught on: it's how `wait` and `notify` work in Java and how POSIX condition variables work. Everyone who has written Java knows about the `while` around `wait`, and in Yellow that loop isn't needed. The price is discipline: you may send a signal only when the condition really holds. And if you add a watchdog that wakes a waiter on a timeout while the condition is still false, then even in Yellow you'll have to recheck the condition after waking up.

Waiting also has a rank: `WAIT(s, rank)` queues the process by number, and `SEND` wakes the process with the lowest rank. `AWAITED(s)` asks whether anyone is waiting for that signal. And a signal can be bound to an interrupt address, in which case the hardware itself sends it.

{{< figure src="09-scan-yellow-monitor.png" alt="An example from the yellow language's tutorial" caption="An example from the yellow language's tutorial: a real-time clock monitor rewritten from Wirth's Modula. The clock process waits for a signal from the timer and wakes everyone waiting for the next tick" >}}

For anyone who finds a monitor too heavy, there are also binary semaphores with `CLAIM` and `RELEASE`. But, as you'll see later, they're best left alone.

### Time you can stop

Last of all, here's the thing in Yellow that genuinely surprised me. Any `BEGIN ... END` block can be marked `SIMULATED_TIME`, and then the processes inside it don't run simultaneously but take turns, like parts of one ordinary program. Each runs until it starts waiting for something, and only then does the processor move on to the next one. Inside the block there's its own artificial time. Every statement takes zero units of that time except `DELAY(n)`, which takes exactly `n`, and the clock moves forward only when every process inside the block is waiting for something.

{{< figure src="10-scan-yellow-simtime.png" alt="Section IX.B.3 of the yellow specification" caption="Section IX.B.3 of the yellow specification: `SIMULATED_TIME` before `BEGIN`, and every statement takes zero units of time except `DELAY(n)`" >}}

In other words, a 1978 language has simulation with controlled time built in. Ironman did ask for a "clock for simulation", and the blue design answered with a promise to write a simulation module like the one in Simula, the Norwegian simulation language that object-oriented programming grew out of. Yellow, instead, made it a language construct you can wrap around any piece of a real program. Today people build entire separate systems for the same purpose. The developers of the FoundationDB database built all of their testing on this kind of simulation: the program runs on an artificial clock, the network and disks are replaced by models, and any run can be replayed step by step. A separate company later grew out of that work, selling such an environment for other people's programs. Yellow is, of course, nowhere near that: the specification doesn't fix the order in which processes run, and the language doesn't model hardware faults at all. But a clock that moves only when the program wants it to is already there.

My own project, by the way, rests on the same trick. Programs in all four languages run on a virtual clock, and the scheduler always picks processes in the same order, so any failure reproduces to the millisecond. Since my clocks are virtual everywhere anyway, `SIMULATED_TIME` in [my compiler](https://github.com/tym83/paleocomputing/blob/main/impl/ada-colors/yellow/notes/yellow-digest.md) does what the specification asks for on top of that: inside such a block, processes don't preempt each other when their time slice runs out and switch only when one of them starts waiting.

## The same problems in four languages

According to the red team's recollections, the 1978 reviewers split the four designs into two pairs: the conservative Blue and Red, and the ambitious, "academic" Yellow and Green. One language from each pair went on to the second round. Now that all four work, we can check that the split wasn't arbitrary, and the easiest way to do that is with a single example.

{{< figure src="11-en-diagram-pairs.png" alt="The two pairs of 1978" caption="The two pairs of 1978: the conservative Blue and Red, the ambitious Yellow and Green, each with its own way to synchronize" >}}

It's the same example as in the Blue section. Two processes take turns adding 10 to a shared balance and take a lock so they don't get in each other's way. The first grabs the lock and fails before it can let go. Will the second one get the lock? This is anything but an academic question: in any system with locks, from an operating system kernel to a database, the first thing people ask is what happens to a lock when its owner dies. It'll come up again in the Kubernetes section.

In Red, the lock is a `REGION`, and it's released however the block ends:

```
REGION d DO
   DELAY(5);
   IF id = 1 THEN
      RAISE X_RANGE;
   END IF;
   balance := balance + 10;
END REGION;
```

In Green, as of 1979, and in Ada 83, a lock is a separate server task with two entries, `SEIZE` and `RELEASE`. The server simply waits for a `RELEASE` call and knows nothing else:

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

In Blue, as we've already seen, the lock is released when a path ends abnormally, as long as it's a `REGION` semaphore; the full program is in the Blue section. Yellow gives two answers, and they're opposites. A monitor is freed if a monitor procedure ends with an exception, while a binary semaphore with `CLAIM` and `RELEASE` is never freed at all:

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

Here's what [these programs](https://github.com/tym83/paleocomputing/tree/main/impl/ada-colors/os/contrast) print. If the second process still hasn't got the lock after a hundred milliseconds, the program gives up and sums up. Red:

```
[1 ms] worker 1 holds the lock
[6 ms] worker 1 failed inside the region
[6 ms] worker 2 holds the lock
[11 ms] both workers are through, balance 110: the region released the lock for the failed one
```

Green:

```
[1 ms] worker 1 holds the lock
[6 ms] worker 1 failed while holding the lock
[100 ms] 1 of 2 workers through, balance 100: worker 2 still waits on SEIZE, nothing released the lock
```

Blue:

```
[1 ms] worker 1 holds the semaphore
[6 ms] worker 1 fails holding it
[6 ms] worker 2 holds the semaphore
[11 ms] the block signals FAILED: worker 1 ended abnormally
[11 ms] both workers are through, balance 110: the path's end released its REGION semaphore
```

Yellow:

```
[1 ms] worker 1 holds the monitor
[6 ms] worker 1 failed inside the monitor
[6 ms] worker 2 holds the monitor
[11 ms] both workers are through, balance 110: leaving the monitor by an exception gave it up
[11 ms] worker 3 claimed the semaphore
[16 ms] worker 3 failed between CLAIM and RELEASE
[112 ms] worker 4 asked 100 times: no exception gives a semaphore back
```

To be fair, in the green program the process could call `RELEASE` itself in its exception handler, and in the yellow one you could do the same with the semaphore. But that's manual work, and it's easy to forget. More importantly, it doesn't help when the process doesn't fail with an exception but is killed from the outside: in Green and in Ada an aborted task runs no handlers, and the lock is lost for good. So the whole difference comes down to who is responsible for releasing the lock, the programmer or the language.

Three of the four languages take that job on themselves, each in its own way. Red ties the release to the program text: leave the `REGION`, and the lock is free. Blue ties it to the life of a path: the path dies, and its locks are free, though its signals aren't. Yellow ties it to the module boundary: if an exception carries a process out of a monitor, the monitor is free. Only in Green, the language that went on to win, does the language not release the lock by itself, because it has no separate mechanism for shared data. A lock there is a task like any other, and it knows nothing about its client's death. Ada got such a mechanism, the protected object, only in 1995.

There's one more detail that only the blue program shows: the block learned that the first path had died and said so. In the other languages the failing process caught the error itself, and if it hadn't, the task would simply have terminated quietly and nobody would ever have known.

### The readers and writers problem

The second example is the classic readers and writers problem. Three readers arrive at milliseconds 0, 1 and 3, the writer at millisecond 2, and reading and writing each take ten milliseconds. In a good solution the readers read at the same time, but a reader who arrives after the writer can't overtake it; otherwise, with a steady stream of readers, the writer would never get its turn.

| Solution in the repository | Readers read concurrently | A late reader overtakes the waiting writer | Everything done by |
|---|---|---|---|
| RED, exclusive `REGION` | no | no, everyone is in one queue | 40 ms |
| GREEN, the server hands out copies of the data | yes, on copies | the third reader gets a stale copy | 13 ms |
| BLUE, P and V semaphores | yes | yes | 23 ms |
| YELLOW, Hoare monitor | yes | no | 31 ms |

This isn't the limit of what the languages can do, just the solutions I picked. With semaphores you can also let the writer go first, a variant described by Courtois, Heymans and Parnas back in 1971, but it's noticeably longer. On a Hoare monitor the same thing fits in about thirty lines, because monitors were invented for exactly this kind of problem. But that fairness has a price: the third reader waits for the writer and finishes at millisecond 31 instead of 23.

### Waiting with a timeout

The third example is waiting for a reply, but no longer than a set time. This is where the differences hurt the most.

Red's tasks communicate through mailboxes, typed message queues of bounded size, and for waiting there's a single construct, `WAIT`. It waits to see which of several events happens first, and one of those events can be a timer. In Green, as of 1979, a timed wait is available only to a server, through `select` with a `delay` alternative; a client can't limit how long it waits, and that kind of call appeared only in Ada. In Blue and Yellow, no process can wait for two events at once, say, an item in a queue or a timer going off, whichever comes first. Blue gets around this with a race between two paths, Yellow with a watchdog that wakes the waiter, or by polling a semaphore with `CONDITIONAL_CLAIM`. I'll go into more detail in the Kubernetes section, because timeouts are everywhere there, and the cost of these workarounds showed up immediately.

### Summary table

Here's how the four designs differ from one another and from Ada 83. Red and Green are taken in their 1979 editions, Blue and Yellow in their 1978 ones.

| | RED | GREEN | BLUE | YELLOW | Ada 83 |
|---|---|---|---|---|---|
| Basis | Pascal, rewritten | Pascal | Pascal, rebuilt around types | Pascal and Modula | GREEN after four years of revisions |
| Modules | capsules | packages | modules and segments | Modula modules | packages |
| Outside variables in a procedure | imported only | visible | imported only, along the whole call chain | visible inside the module | visible |
| Generics | instances created automatically | explicit instances | instances created automatically, type requirements in `NEEDS` | module templates rewrite the text | explicit instances |
| Operations | overloading | overloading | everything, assignment included, is a function with a fixed name | explicit overloading only, via `EXTENDS` and `REPLACES` | overloading, no user-defined assignment |
| Functions | no side effects unless marked | no side effects, plus value-returning procedures | input parameters only | no side effects, plus value-returning procedures | input parameters only, side effects allowed |
| Exceptions | declared as names | declared as names, 15 predefined | listed in the subprogram header | not declared | declared as names, 5 predefined |
| Concurrency | tasks and mailboxes | tasks and rendezvous | `PATH` branches in a parallel block | processes and monitors | tasks and rendezvous |
| Lock for shared data | `REGION` | server task | `REGION` semaphore | monitor | server task |
| Timed wait | `WAIT` with a timer | server only | race between two paths | watchdog or polling | both server and client |
| Unhandled exception in a task | the task ends, nobody is told | the task ends, nobody is told | the block raises the exception | the task ends, nobody is told | the task ends, nobody is told |

Read the table row by row and the pairs jump out. Blue and Red require importing variables, create generic instances on their own and provide a separate lock for data. Yellow and Green reach for side-effect-free functions and for a single elegant concurrency mechanism, except that Yellow chose the monitor and Green the rendezvous. And the last row shows that, of the five languages, only Blue reports an unhandled exception in a parallel branch to the outside.

## The compilers and the first run of the 1978 programs

The goal was the same as with the finalists in the previous article: every language needs a compiler written in itself. When you write several thousand lines of parsing, symbol tables and type checking in a language, you find out very quickly whether it's fit for real work.

The route was the same too. First comes a small Python translator that understands a subset of the language. The first version of the compiler is written in that subset, and the Python translator builds it. Then the compiler builds itself, and the result is compared with the previous one. If the second generation matches the third byte for byte, you've reached a fixed point: the self-built compiler produces exactly itself and no longer depends on the Python translator. From then on the repository keeps the C code the compiler generated from its own source, and the compiler can be built from it with no Python at all. After that the language evolves using this compiler, and each new version is built by the previous one. Both compilers translate programs into C and build them with the same shared runtime as Red and Green, with its virtual clock and deterministic scheduler.

Both compilers reached the fixed point on the first try: the third generation of each matched the second byte for byte straight away. The [Blue compiler](https://github.com/tym83/paleocomputing/blob/main/impl/ada-colors/blue/README.md) grew to about sixteen thousand lines, more than any of the four and one and a half times the size of Red's. To me, that's the best measure of Blue's complexity: everything in it that hinges on types, the compiler has to honestly infer and check. The [Yellow compiler](https://github.com/tym83/paleocomputing/blob/main/impl/ada-colors/yellow/README.md) is about ten thousand lines. Yellow has no strings as values, not even concatenation, so every string its compiler works with is stored in one big character array, and a string is just an index into it. That's roughly how Pascal compilers lived in the same 1970s.

### The programs from the 1978 documents

The programs in these two languages make a better story than the finalists' did. Nobody had an implementation in the first round, so not a single program from the blue and yellow documents had ever been compiled, and my compilers were the first to do it.

The blue document has seventeen programs. If you fill in what the original replaced with ellipses, seven of them translate and run. Three more translate but produce wrong results: in the matrix product, a single wrong letter makes the first term of every element take its second factor from the first matrix instead of the second, and two examples raise an exception because they step outside their own ranges. The remaining seven don't get past the compiler, because of errors like `BUFF` instead of `BUF` or arguments in the wrong order.

The biggest program is the standard I/O library from Appendix C: more than thirteen hundred lines with teletype drivers tied to PDP-11 interrupts. To translate it, I had to rename the procedure `IN`, because that word is reserved, and move into a segment a constant exported by two modules, even though by the rules a module exports only types and subprograms. Together with the typos that came to about twenty fixes, seven of which correct violations of the language's rules, and after them the library ran on a simulated PDP-11 with two LT33 teletypes, as DEC called the Teletype Model 33. For thirteen hundred lines that nobody had ever compiled, that's a very good result, and it says more about the blue team than any review.

{{< figure src="12-en-blue-appendix-c.gif" alt="Blue's Appendix C in the browser" caption="Blue's Appendix C in the browser: the 1978 I/O library prints on two simulated LT33 teletypes. The output is slowed down; on the virtual clock the program finishes in a fraction of a second." >}}

The yellow tutorial has fifteen programs, and four of them compile exactly as printed. The rest contain the kind of errors that pile up in any text that has never been through a translator: `ConvexHullFinder` is closed as `ComplexHullFinder`, and the sorting example writes `IMPORTS` and `EXPORTS` as if borrowed from some other language. More often, though, the authors forgot the rules of their own language, above all the comparison rule I described earlier. The tutorial includes a task scheduler for SIFT, that same flight computer, and the condition `ept > 0 AND enabled[pri]` in it is read as `ept > (0 AND enabled[pri])` and means something entirely different from what was intended.

Three programs still misbehave after the fixes. In the exchange sort, string comparison considers one string greater than another only if every one of its letters is greater than the corresponding letter of the other, so this sort never reorders ordinary names. And the convex hull of eight points marks only two of them as vertices. Naturally, I first assumed my translator was wrong and rewrote the same algorithm in Python, but Python marked the same two points. The bug was in the 1978 algorithm itself, and in forty-eight years nobody noticed, because there was nothing to run it on.

All the fixes are in the repository as separate files, [for Blue](https://github.com/tym83/paleocomputing/blob/main/impl/ada-colors/blue/corpus/CHANGES.md) and [for Yellow](https://github.com/tym83/paleocomputing/blob/main/impl/ada-colors/yellow/corpus/CHANGES.md), and the sources are kept exactly as printed, with every fix explained along with the rule it broke.

## THE and Kubernetes without messages

A compiler tests a language on sequential code. To test concurrency as well, in the article about the finalists I wrote several systems in Red and Green, and now I've repeated them in Blue and Yellow.

The first is THE, the multiprogramming system that Dijkstra's group built in Eindhoven in 1965–1968. Dijkstra himself described it as a set of sequential processes arranged in layers. Level zero holds the semaphores and allocates the processor. Level one runs the segment controller, which moves segments between core memory and the magnetic drum, the slow external memory of the day. Level two has the single operator console, level three the I/O buffers, and level four the user programs. Each process calls only the levels below its own.

For anyone who hasn't worked with Kubernetes, here's a quick primer. You write the desired state into a store, for example a deployment with three replicas, and a set of controllers keeps comparing it with the actual state and closing the gap: they create pods, that is, application instances, assign them to nodes and move them off nodes that have become unreachable. All of this together is called the control plane.

The second system is Kubernetes on top of THE. Its controllers run as level-four user programs, the object store lives in segments on the drum, and each node has a kubelet, the program that runs pods on it.

The third is a Kubernetes control plane without THE. It has an API server that pushes every object change to its subscribers (in Kubernetes this is called a watch), controllers with their own copies of the state, and leases, records that a node has to renew regularly to count as alive.

Right away it became clear what Blue and Yellow have in common and how they differ from the finalists. Neither has messages, and, as I said, neither can wait for two events at once.

### Blue: THE feels at home

[THE in Blue](https://github.com/tym83/paleocomputing/blob/main/impl/ada-colors/os/the.blu) felt almost native. Blue's semaphores are Dijkstra's P and V, and the program prints exactly what the Red version prints, character for character. Each level of the system became a module, so the import list of every process states outright which levels it calls.

{{< figure src="13-en-blue-the.gif" alt="THE in Blue, in the browser" caption="THE in Blue, in the browser: the segment controller moves pages between core and drum, and the printer waits for the operator to load paper. The output is slowed down; on the virtual clock the program finishes in a fraction of a second." >}}

And then came the moment that made rebuilding the whole blue language worth it. [Kubernetes on THE](https://github.com/tym83/paleocomputing/blob/main/impl/ada-colors/os/the_kube_blue.blu) has a power-failure scenario: a node loses power, its kubelet dies, and the control plane has to notice the node is gone and move its pods to other nodes. In THE the store, like everything else in the system, is guarded by a semaphore. In the Red version that's an ordinary Dijkstra semaphore with P and V, not a `REGION`, because a `REGION` is tied to a stretch of program text: the lock is taken on the way in and released on the way out. In THE, though, P is often done by one process and V by another, so acquire and release end up in different places in the program. That's why a kubelet that died in the middle of writing to the store took the semaphore with it, and the whole control plane froze. That's exactly what tripped me up in the article about the finalists, and in Red and Green I had to move the power failure into the gap between kubelet passes, when it holds nothing.

In Blue, the store's semaphore is declared as a `REGION`. It's still an ordinary semaphore with P and V, just one with an owner: it can be acquired in one procedure and released in another, and if the path dies, the system releases it on its own. Now a node can lose power at any moment, even while the kubelet is writing to the store. The kubelet's path receives `TERMINATED` as soon as its turn comes round again and dies, the system releases its semaphore, and the control plane carries on. There's one subtlety. The kubelet catches `TERMINATED` to log that the power went out, and after that it must re-raise the exception. If it doesn't, the path ends normally, and a path that ends normally doesn't give up its locks. The data under the lock may be left half-written, and SofTech's rationale answered that it would soon be overwritten by fresh sensor readings. In Kubernetes the next controller pass plays the same role, comparing desired and actual state all over again. Red released a lock by itself only on leaving a `REGION` block, while Blue does the same for an ordinary semaphore with an owner, which is exactly what THE is built on.

{{< figure src="14-en-blue-kube.gif" alt="Kubernetes on top of THE in Blue" caption="Kubernetes on top of THE in Blue: node 2's kubelet dies holding the store's semaphore, the semaphore releases itself, and the control plane moves the pods. The output is slowed down; on the virtual clock the program finishes in a fraction of a second." >}}

### Blue: a timeout as a race

Timeouts are harder. Acquiring a semaphore can't be time-limited, so in Blue you can't say "wait for an item, but no longer than thirty milliseconds". The answer turned up in the same book, among the reviewers. One of the teams solved an input-with-timeout example in all four languages, and here's its blue version:

{{< figure src="15-scan-fuel-flow.png" alt="The analysis by team 126-02, example A 2.8 \"input with timeout\", the solution in Blue. At the bottom of the page the reviewers warn that they are making assumptions about how Blue implements exceptions" caption="The analysis by team 126-02, example A 2.8 \"input with timeout\", the solution in Blue. At the bottom of the page the reviewers warn that they are making assumptions about how Blue implements exceptions" >}}

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

Two paths race each other, and whichever finishes first kills the other. If the operator hasn't answered within thirty seconds, the fuel flow is assumed to be five gallons per second. I love how this example captures a whole era: a military console, a teletype and a sensible default in case nobody answers. And the weak spot of the trick is already visible: if the timer fires between the input and `TERMINATE (PATH2)`, the value that was typed in gets overwritten with a five.

In [Kubernetes in Blue](https://github.com/tym83/paleocomputing/blob/main/impl/ada-colors/kube/kube_blue.blu) every wait is built this way, and the cost shows immediately. A parallel block can't go inside a subprogram, so you can't hide the wait loop in a procedure, and I had to write it twice: once for the family of controllers and once for the kubelets. The race is safe only if the waiting path has a higher priority than the timer. Otherwise the timer can kill it right when the semaphore has already handed it an item but it hasn't picked it up yet, and the item stays in the queue with nobody left to take it. [Another lab](https://github.com/tym83/paleocomputing/blob/main/impl/ada-colors/labs/blue/b7-race.blu) is built around this. Priority saves the day here only because there's a single processor and the higher-priority path always runs first. Properly, cancellation should hand back whatever the path had already received, or the "take an item and record that you took it" step should be uninterruptible. That's how Ada does it: a task can't be aborted in the middle of a rendezvous or a protected operation, and the abort is deferred until they finish.

There's a second problem: a killed path can't tell who killed it, its own race or a user who switched the node off. So the kubelet in the blue Kubernetes learns about a power failure from a note the user leaves it before cutting the power.

### Yellow: everything on monitors

[THE in Yellow](https://github.com/tym83/paleocomputing/blob/main/impl/ada-colors/os/the_yellow.yel) is built on monitors. The language has only binary semaphores, with values 0 and 1, so Dijkstra's counting semaphores had to become monitors made of a counter and two signals, which is essentially the bounded buffer from Hoare's monitor paper. The segment controller became a monitor too, and it came out even simpler than Dijkstra's: a process that needs a segment does all the work itself inside the monitor, and the queue to enter the monitor doubles as the request queue.

{{< figure src="16-en-yellow-kube.gif" alt="Kubernetes on top of THE in Yellow, in the browser. Node 2 loses power, its pods move to other nodes, and the operator scales the deployment to five replicas. The output is slowed down." caption="Kubernetes on top of THE in Yellow, in the browser. Node 2 loses power, its pods move to other nodes, and the operator scales the deployment to five replicas. The output is slowed down." >}}

[Kubernetes on top of THE in Yellow](https://github.com/tym83/paleocomputing/blob/main/impl/ada-colors/os/the_kube_yellow.yel) prints exactly what the Red version prints, byte for byte. Its store, as in the Red version, is guarded by a binary semaphore so that THE's P and V stay intact, and a binary semaphore isn't released when its process dies. So here too the power can only go out between kubelet passes. A monitor wouldn't have had this problem: if a process leaves a monitor through an exception, the monitor is freed, just like a `REGION` in Red.

You can see what a language is missing from its workarounds, and for timeouts I tried several. In the small comparison program, a timeout is a watchdog that wakes the waiter without slipping it anything: the woken process sees that its condition is still false and decides on its own to stop waiting. In Kubernetes on top of THE, the watch process wakes every controller every ten milliseconds. And in the [standalone Kubernetes](https://github.com/tym83/paleocomputing/blob/main/impl/ada-colors/kube/kube_yellow.yel) I took a simpler route and set up a single watch process that, every twenty milliseconds, drops an empty tick event into each quiet event stream. It's essentially the same fake item that the watchdog slips in in THE on semaphores.

You can't have an array of monitors, because a monitor is a module, not a value. So the eight event streams of the standalone Kubernetes, one per subscriber, are eight named instances of one template, and the right one is picked by number in a `SELECT` statement. When a program starts a process, it gets back neither a name nor a number, so to let the user power off node 2, the kubelet writes its own identifier somewhere the user can find it. And a program can't finish while its processes are still running, so controllers that loop forever have to be stopped by hand: set a stop flag and send one more signal, so that the controllers sleeping in the monitor wake up, see the flag and exit.

### What came of it

Both systems work and print the same output as their Red and Green twins, in places byte for byte. Blue turned out to be the most comfortable language for THE and the least comfortable for Kubernetes, with its timeouts at every step. Yellow was the other way round: monitors fit Kubernetes very naturally, but everything to do with time and process names had to be built by hand. The common lesson for both is this: a language with a single synchronization mechanism gets the job done, but it pays for every missing mechanism with an extra process. Green paid the same way in the article about the finalists, with a buffer task instead of a mailbox.

## Why they lost

The Pittsburgh panel that pulled the analyses together consisted of David Fisher, David Gries, Brian Kernighan, John Reynolds, Philip Wetherall and William Wulf. Its report is dated April 4, 1978. The panel opens by saying that all four designs are incomplete and were done in a hurry, and its conclusion was simple: the reviewers considered Green the best and Blue the worst, and saw almost no difference between Red and Yellow. Read the analyses themselves, though, and the picture is far more varied. Some teams ranked Yellow first, others last. One team wrote that Yellow was the worst designed and shouldn't be continued; another considered it a safe choice for a systems programmer and, apparently, the cheapest to implement. And yet another ended its analysis with my favourite piece of advice: the best thing the Department of Defense could do would be to ask the red team to implement the yellow language. Well, the yellow language has now been implemented.

{{< figure src="17-scan-pittsburgh.png" alt="Summary of the panel's recommendations of April 4, 1978" caption="Summary of the panel's recommendations of April 4, 1978: continue Green, reject Blue, continue at least one of Red and Yellow" >}}

The panel was briefest about Blue: reject. In its view the design was careful and complete, but drowning in a complexity that pervaded all of it, and the simple, clear model its authors promised was nowhere to be seen. One team admitted that Blue was hurt by its very style of presentation and that this had surely affected its rating, and in that team's summary table Blue and Yellow got the worst score for how easily a typo changes a program's meaning. The rebuild confirmed both halves of the verdict. The I/O library with its drivers worked after a dozen typos and seven rule violations were fixed, and the two kinds of semaphores turned out to be more precise than anything the finalists had. But the complexity is real too: the Blue translator came out the biggest of the four, and the backslashes, hash signs and double exclamation marks read worse than in any of its neighbours.

Yellow lost by a whisker. The panel wrote that the choice between Red and Yellow was not obvious, although most of its members preferred Red. But in the section on Yellow itself it was fairly harsh: type and representation are muddled, there's no workable way to refer to a particular process, monitors had not yet been used in serious systems, and on the whole the attempt to build a language on Pascal and its relative Modula had failed. That matches my experience about halfway. The panel is right about processes; I tripped over exactly the same thing. But monitors turned out to be the most convenient part of Yellow for both THE and Kubernetes, and by 1978 Brinch Hansen had already described Solo, an operating system written with Concurrent Pascal's monitors. The irony goes further: the red design, which edged out Yellow only narrowly, was soon thrown out by the red team itself, which wrote the language anew for the second round.

Put the four languages side by side and you see four answers to the same question: how many synchronization mechanisms does a language need? Green chose the rendezvous, Blue semaphores, Yellow monitors, and only Red offered several mechanisms at once. Three of the four designs bet on a single main mechanism, and in none of those three can a process simply say it will wait no more than so many milliseconds: in Green only the server has a timeout, in Blue you're left with a race between paths, in Yellow with a watchdog or polling. And in the Ada section you'll see that Ada's designers eventually brought the monitor back themselves, under the name of the protected object.

## What Ada inherited from them

Ada 83 is Green after four years of revisions, and it has no direct inheritance from Blue or Yellow. But lay the 1978 designs next to the whole history of Ada up to Ada 2022, and you get the same picture as with Red. Much of what the losers proposed right away, Ada picked up over decades, under its own names and, as a rule, without realizing it was repeating someone from 1978. Let me go through the main points.

{{< figure src="18-en-diagram-ada.png" alt="Ideas of the blue and yellow designs in the history of Ada" caption="Ideas of the blue and yellow designs in the history of Ada: what matched from the start, what came decades later, and what never came" >}}

### What matched Ada 83

The first match is subtypes. Yellow's representations correspond to Ada's subtypes, but subtypes came into Ada from Green, so this is a resemblance, not a borrowing.

How values are stored in the machine matched as well. Blue let you use `REP` to give enumeration values codes the hardware understands, and Ada does the same in chapter 13 of the standard. Blue allowed this only for unordered types; Ada allows it for any type but requires the codes to be increasing. Both teams understood that the order of the values could diverge from the order of the codes, and simply worked around that from opposite sides.

So did the idea of parentheses wherever the reader might go wrong. Ironman required parentheses around non-associative operations, Yellow met the requirement to the letter, Blue rejected it, and Steelman softened it to a recommendation. Not much of the idea survived in Ada, but some did: you can't mix `and` and `or` without parentheses, and `a ** b ** c` is also an error.

### What came later

The monitor came back first. Ada 95 introduced protected objects, and the Ada 95 Rationale names monitors outright among their ancestors. A protected object is a monitor with barriers, conditions on its entries, instead of signals, and when a condition becomes true, those who were waiting on it are served before new calls. Ada returned to the monitor seventeen years after the panel rejected Yellow.

Then came explicit overloading. Yellow's `EXTENDS` and `REPLACES` made you mark whether a new definition adds another meaning to a name or replaces the old one. A similar idea arrived in Ada 2005 as the `overriding` and `not overriding` indicators, though for methods rather than for any name, and their purpose is to keep a typo in a name from turning a method override into a brand-new method. C++11 got `override`, and Java the `@Override` annotation. The industry got there through bugs that Yellow ruled out in its syntax.

Ada took the longest to reach side-effect-free functions and import lists. Yellow required that a function touch nothing but its own local variables, and Blue required every procedure header to list each outside variable it reads or changes, along with the access mode. Ada 83 had neither. They came in through SPARK, the strict subset of Ada for programs whose correctness can be proved, and in Ada 2022 became part of the language itself: the `Global` aspect lists a subprogram's outside objects together with their access mode. That's almost word for word Blue's `IMPORTS` list from the balance example.

Ada also learned to report a failure in a parallel branch to whoever started it, but only for computations, not for tasks. Ada 2005 added a task termination handler: with it you can find out that a task died with an unhandled exception, but the exception still doesn't propagate to whoever started the task. Ada 2022 added parallel blocks, `parallel do ... and ... end do`. Such a block waits for all of its branches, a failure in one branch cancels the others, and the exception comes out. That's structured concurrency in the modern sense, even stricter than Blue's block, but it's meant for computation, while Ada's tasks with their rendezvous still end silently on an unhandled exception, just as they did in 1983.

### Three teams out of four

After the tender, John Goodenough, who led the blue design, ran the development of the test suite used to check Ada compilers against the standard, and later headed the group that worked through the disputed points of the standard itself. Ada 95, as I described in the article about the finalists, was designed by the Intermetrics team, the authors of Red. So of the four teams from 1978, three ended up responsible for Ada in one way or another, and only the yellow team was left out.

## If Blue or Yellow had won

In the article about the finalists I tried to imagine a world where Red won in May 1979. In short, Ada would have separated messages from shared data from day one, generics would have been instantiated without declarations, and PL/SQL in every Oracle database would have been written in a language with mailboxes. In our world Ada even managed to influence C++: when Stroustrup was designing it, he compared his parameterized types and exceptions with Ada's. Here the fork comes earlier, in April 1978, when Green and Red were picked for the second round. Let's imagine the panel had decided differently.

First, what wouldn't have changed in any of these worlds. As in the article about the finalists, I assume that the requirement to write Defense software only in Ada, in force from 1987 to 1997, was dropped for economic reasons: commercial developers moved to C and C++, and a different winner in 1978 wouldn't have changed that. So any winning language would have become the language of avionics, railways and space, and almost certainly not the language of everything else. What follows is about how software for those industries would have changed and what would have reached mainstream languages sooner.

### A world where Blue won

First of all, a blue Ada would have shipped later than ours. Ada compilers were late in our world too: the first one to pass the conformance tests appeared only in 1983. And Blue is the hardest of the four to implement. Inferring generic instances from arguments, checking imports along the whole call chain, tracking the scales of fixed-point numbers: all of that would have taken years of work, and the temptation to cut the language down to the subsets the Defense Department prohibited would have been much stronger.

Second, a culture of rigorous specification. Goodenough built the Ada compiler test suite in our world too, but in the blue world the same rigour would have been visible in the language itself: every procedure in every Defense project would declare what it touches and what it can raise, and the compiler would check it.

Third, generic programming. Alexander Stepanov, who started out with Scheme, built a library of generic algorithms for Ada with David Musser in the late 1980s and only then moved to C++, where he missed constraints on template parameters. He championed concepts for many years until they made it into C++20. Blue had constraints on types from the start, in `WHERE T NEEDS`, and its instances were created automatically, so in the blue world generic algorithms with type constraints could have appeared in a military language as early as the mid-1980s.

Fourth, concurrency. A parallel block that reports its branches' failures to whoever started it would have become the norm for flight software forty years before Trio and Swift, and locks that release themselves when their owner dies would have entered the textbooks along with the language. The blue world has no messages, but in ours, too, military software lived on shared memory and Ada tasks rather than messages. Message-based languages, from Erlang to Go, would have arrived by their own route anyway, so here the blue world is neither better nor worse than ours.

And fifth, something very down to earth. PL/SQL in Oracle is largely built on Ada precisely because Ada was the Defense Department's language. In the blue world, procedures in every Oracle database would start with `PROCEDURE P (# X, Y: ?T)`, and enumeration values would be written with a backslash. I'm not sure database administrators would have survived it.

### A world where Yellow won

The yellow world is a different place altogether, because the yellow language is Pascal. In 1979 Pascal was already taught everywhere, Wirth was finishing Modula-2, and within a few years Turbo Pascal would make Pascal the language of personal computers. My Yellow compiler is the smallest of the four, and a real one would have been built on the existing base of Pascal compilers, so a yellow Ada would most likely have arrived earlier than ours. Add the Defense Department's seal of approval, and the language of textbooks, the language of PCs and the language of military systems would all have been one family. The Wirth and Hoare school, which lost to C in our world, would have gained an industrial ally with a huge budget. Would it have beaten C? Probably not; C had Unix. But the 1980s would have played out as a contest between two equal families rather than as Pascal's slow retreat.

Hoare's monitors would have become standard as early as 1980, and in Hoare's own variant, where the woken process receives the monitor directly. In our world monitors went mainstream through Mesa and Java, with the mandatory loop around `wait`. Mesa chose its semantics for practical reasons, and Java might well have made the same choice in the yellow world. But a generation of programmers trained on military monitors would have known both variants and the price of each. And Ada 95 wouldn't have needed protected objects, because the language would already have had monitors. Instead, the yellow Ada would have had to add what I found missing: a timeout on waiting, process names and arrays of monitors. Back in 1978 the panel wrote outright that Yellow had no way to refer to a process, and the second round would certainly have fixed that.

The yellow world would have had its own traps too. Comparisons with lower precedence than `AND`, the very ones that tripped up the authors themselves in the SIFT scheduler, would have lived on in aircraft software until the second round fixed them or static analyzers started catching them.

The most interesting difference in the yellow world is `SIMULATED_TIME`. Any piece of a flight system could be wrapped in a block with artificial time and run so that every run repeats the previous one exactly. That wouldn't have solved every problem: you'd still have to explore different process orderings yourself, the way today's deterministic simulation systems do, and the language doesn't model hardware failures. But timing bugs could have been reproduced in your own lab from 1980 on, instead of being chased for years at the customer's site. In our world we got there only in the 2010s.

And Hoare's lecture would have been different. In 1980 he received the Turing Award, and in his lecture ["The Emperor's Old Clothes"](https://noncombatant.org/hoare-emperors-old-clothes-turing-award/) he said he had been advising Ada's designers since 1975, and warned that the language had turned out too complex to be used for programs that human lives depend on. Had Yellow won, Ada would have grown out of a design whose authors, if the stories are true, Hoare himself had advised.

### Four worlds

Put all four scenarios together and here's what you get.

| Winner | What military software would have become | What would have reached mainstream languages sooner |
|---|---|---|
| GREEN, our world | rendezvous, explicit generic instances, later protected objects | exceptions and generics that influenced C++ |
| RED | mailboxes, `REGION` locks, user-defined schedulers | separation of messages and shared data, generic instances without declarations |
| BLUE | strict types, two kinds of semaphores, the parallel block | structured concurrency, constraints on generic parameters, locks with owners |
| YELLOW | Pascal with monitors and artificial time | simulation with controlled time, Hoare's monitors, side-effect-free functions |

The strangest thing about this table is that every row except the first describes something the industry got to anyway, just later and piece by piece. Almost none of the losers' ideas were lost. They came back under other names: protected objects, concepts, structured concurrency, deterministic simulation. When the panel chose between the designs in 1978, it wasn't really deciding which ideas were good and which were bad, but which of them would reach practice in the 1980s and which would have to wait until the 2020s.

## Labs and running the programs

As in the previous parts, I wanted readers to be able not just to read about a language but to practise with it: change a program, break it on purpose and see how the language responds. The twelve Red exercises are now joined by [fifteen new ones](https://github.com/tym83/paleocomputing/blob/main/impl/ada-colors/labs/README.md), seven in Blue and eight in Yellow, and each one explores a feature that neither Red nor Green has. Every lab works the same way: it's a small program with several tasks of different levels. At the `look` level you run the program and read what it outputs. At `change` you make a specific edit and get the program to produce the expected result. At `break` you deliberately introduce an error and see how the compiler responds or how the program behaves at run time. And at `build` you write a piece of code of your own. The `check.sh` script checks all of this: you give it the lab number and the level, and it compiles your version of the program, runs it and tells you whether the task is done. Time in the programs is virtual and the scheduler is deterministic, so a program produces exactly the same output on any machine and on every run, character for character, and it's easy to check against the reference output.

Here's what the Blue labs cover.

- In `b1`, the literal `\GREEN` belongs to two enumerations at once, traffic-light signals and colours, and sits at its own position in each. Try comparing two card suits with `<` and the compiler refuses, because an unordered type only has equality.
- In `b2`, a single `SWAP` procedure swaps integers, strings and colours, even though nobody declared a single instance of it. You're also asked to write your own generic function that returns the larger of two values and requires a comparison operation from its type.
- In `b3`, you remove one procedure from an import list and look at the error: a procedure that calls it must import either that procedure or every variable it works with.
- In `b4`, device status codes are described as an unordered type, and the value is read straight from a register. Move that read out of the machine-dependent part of the program and the compiler won't accept it.
- In `b5`, the first path ends abnormally without releasing a `REGION` semaphore, and the second path still finishes, because the system releases the semaphore. Declare the semaphore as a signalling one and the program hangs. And if you handle the exception inside the path without releasing the semaphore by hand, the path ends normally, keeps the semaphore, and the program hangs too.
- In `b6`, the THE system is running. Turn on reports to the operator about every page written out to the drum, and the lower level of the system starts calling the upper one, so the system deadlocks. You could have seen it coming, because that call was in the import list from the start.
- In `b7`, a timeout is built as a race between two paths, one waiting for an item in a queue and the other counting down. Take away the waiting path's higher priority, and the timer can stop it after it has already been granted the item but before it has taken it, so the item stays in the queue for good.

{{< figure src="19-en-blue-lab.png" alt="Lab b7" caption="Lab b7: the timeout from the 1978 analysis, a race between the `GET` and `TIMER` paths. Two items received, and no third one for thirty milliseconds" >}}

And here's what the Yellow labs cover.

- In `y1`, the compiler rejects `a - b - c` without parentheses and asks you to say which subtraction comes first.
- `y2` is about `CONST`, `VAR` and `OUT` parameters. A procedure assigns a value to an output parameter and then ends with an exception, and it turns out the value never reaches the caller, because an output parameter is passed back only on a normal return.
- `y3` compares ordered and unordered enumerations: `SUCC`, `LAST` and `FOR` loops work on the former, while the latter can't be compared with `<`.
- In `y4`, two modules are created from one stack template, each with its own state. And if you instantiate the template for a type with no order, the error shows up only when the instance is created, even though it sits in the template body.
- In `y5`, two processes wait for a signal in a monitor with different ranks, and the one with the lower rank wakes first. Remove `SEND` and the program deadlocks: a signal isn't remembered anywhere, and without it nobody wakes the waiting processes.
- In `y6`, a function tries to change a global variable and the compiler won't allow it, while a value-returning procedure is allowed to do the same thing.
- In `y7`, a module exports a variable read-only and a type whose structure is hidden from the outside, and both attempts to get around these restrictions end in a compile error.
- In `y8`, THE runs on monitors, and it breaks the same way as in `b6`: the lower level starts calling the upper one.

{{< figure src="20-en-yellow-readers.gif" alt="The readers and writers problem solved with a Hoare monitor, in the browser" caption="The readers and writers problem solved with a Hoare monitor, in the browser: the first two readers read at the same time, while the third, who arrived after the writer, waits for the writer to finish. The output is slowed down." >}}

To run all of this, all you need is a C compiler and make:

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

If you have Cozystack at hand, the open-source platform for building a cloud on Kubernetes, you don't need to install anything. The [application catalogue](https://github.com/tym83/paleocomputing/blob/main/marketplace/README.md) I put together for this series has a [language environment](https://github.com/tym83/paleocomputing/blob/main/marketplace/repos/languages/packages/apps/langpack/README.md), and all four languages are in it, in a single container image. You point it at the `ada-colors-run` image, drop in a source file, and the program runs as a one-off Kubernetes Job, with its output becoming the Job's log. When the image is built, all four compilers are rebuilt from the saved C files and check along the way that they still reproduce themselves byte for byte.

The easiest way of all is to open the [page in your browser](https://tym83.github.io/paleocomputing/red/), where everything happens right on the page, with no server at all. All four translators, compiled to WebAssembly from the same C files, translate the source into C, that C is compiled by clang, also compiled to WebAssembly, and each task of the program runs in its own thread. The runtime there is built from the same file as on Linux and uses the same virtual clock, so programs in the browser print exactly what they print on an ordinary machine, byte for byte. This is checked automatically: on every change, all the examples run in headless Chrome and their output is compared against a reference. The first run downloads the C compiler, about twenty megabytes, and after that the browser keeps it.

{{< figure src="21-en-blue-failure.png" alt="A 1978 specification, a 2026 run" caption="A 1978 specification, a 2026 run: the first path died holding a `REGION` semaphore, and the second got it right away" >}}

## What I'm taking with me

At the end of every part of the series, I ask myself what from my findings is worth bringing into today's infrastructure.

The first thing I'm taking: a lock should know that its owner has died. Blue separated two kinds of semaphores in 1978 for exactly this reason, and in two paragraphs SofTech's rationale explains what distributed systems people learn from outages: it's the system that should release a dead owner's lock, not the owner's handler, and it should release only the lock, never the signal. The contrast with today is instructive too. Inside one machine, the system can see that a path has died, but on a network you can't see death, only silence. That's why locks in Kubernetes are leases: a node or a leader keeps renewing a record, and if it stops renewing, its lock counts as free. The old owner may still be alive and unaware that the lock is no longer its own, so the lock gets a number that grows with every new owner, and whoever accepts writes rejects the ones with an old number. Blue solved this problem for a world where death is visible. We inherited a harder version of it, but the first step is the same.

Second: concurrent work needs an owner. If a controller starts a goroutine that nobody waits for and whose errors nobody reads, that's exactly what Blue's parallel block guarded against back in 1978.

Third: make time controllable first, then hunt for bugs. This whole series runs on a virtual clock, and Yellow, as it turns out, offered the same thing right in its syntax.

Fourth: every missing mechanism is paid for with an extra process. Blue, without timeouts, paid with a race between paths; Yellow with a watchdog process; Green, without mailboxes, with a buffer task. When a platform lacks a primitive, somebody builds it anyway, only everyone does it their own way and with their own bugs, and that's a good argument for not skimping on primitives.

And fifth: studying the losers is useful because it tells you in advance which ideas will come back, so you don't pay for them twice.

What's next? All four competition designs now run, but the first round left something else behind: REDL, the first edition of Red, with monitors and events, which the red team threw away. And the reviewers' reports from the 1979 final, which decided between Red and Green, still exist only on microfiche. If you have access to them, please get in touch.

The sources, tests, labs and all the notes are in the [github.com/tym83/paleocomputing](https://github.com/tym83/paleocomputing) repository, in the [`impl/ada-colors`](https://github.com/tym83/paleocomputing/blob/main/impl/ada-colors/README.md) directory. If you find a place where I've misunderstood the 1978 specifications, let me know. I'd genuinely love to hear about it.

Earlier parts of the paleocomputing series:

- [Part 1. Wirth's processor, Project Oberon, a new architecture in QEMU and KubeVirt, running in Cozystack and Kubernetes](https://aenix.io/blog/2026/09/nine-days-of-paleocomputing/)
- [Part 2. Kubernetes on Oberon, Wirth's radio instead of a network, and a cluster in the browser](https://aenix.io/blog/2026/10/kubernetes-over-wirths-radio/)
- [Part 3. Two Adas: RED and GREEN, the finalists of the 1979 competition](https://aenix.io/blog/2026/10/two-adas-red-and-green/)
