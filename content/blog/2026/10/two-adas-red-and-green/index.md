---
title: "Paleocomputing, part 3: Two Adas — building programming languages that never existed, from the specifications of a Pentagon tender"
description: "RED and GREEN, the finalists of the 1979 Pentagon language tender, rebuilt from their manuals: self-hosting compilers, a Tandem-style OS and Kubernetes."
seo_title: "Two Adas: rebuilding RED and GREEN from 1979"
date: "2026-10-31"
cover_image: "/img/blog/covers/two-adas-red-and-green.jpg"
lastmod: "2026-10-31"
series: "Paleocomputing"
author: "Timur Tukaev"
hreflang_de: "/de/blog/2026/10/paleocomputing-teil-3-zwei-adas-pentagon-programmiersprachen/"
type: "article"
topics: ["Kubernetes", "Cozystack", "Open Source", "Retrocomputing", "Distributed Systems", "Programming Languages"]
language: "en"
related_posts: ["/blog/2026/09/nine-days-of-paleocomputing/", "/blog/2026/10/kubernetes-over-wirths-radio/"]
direct_answer: "**RED and GREEN were the two finalists of the US Department of Defense language competition: on May 2, 1979, GREEN was chosen and became Ada, while RED, designed at Intermetrics, was all but forgotten.** From the surviving 1979 manuals, rationales and contract-problem solutions, both languages were rebuilt: a self-compiling compiler in each, all twenty contract-problem solutions of the competition, a Tandem-style operating system with process pairs, Dijkstra's THE, and a Kubernetes control plane whose API server runs as a process pair with no etcd quorum. Much of what RED had in 1979, from a separate lock construct and typed bounded mailboxes to assertions and user-defined language forms, Ada won back only between 1995 and 2022. Everything runs in a browser tab, on any machine with a C compiler, and in Cozystack."
quick_facts:
  - label: "Languages"
    value: "RED (Intermetrics) and GREEN (CII-Honeywell-Bull), the finalists of the 1977–1979 DoD competition"
  - label: "Sources"
    value: "The RED manual and Rationale (DTIC AD-A219453, iment.com); the Preliminary Ada Reference Manual and the Green Rationale (DTIC scans)"
  - label: "Compilers"
    value: "About 11,000 lines of RED and 14,000 of GREEN; both translate to C and reproduce themselves byte for byte"
  - label: "Programs of 1979"
    value: "All 20 contract-problem solutions run; not one translated as printed"
  - label: "Systems"
    value: "PAIRS (Tandem process pairs), THE, Kubernetes on mailboxes and an API server as a process pair"
  - label: "Where it runs"
    value: "Browser (WebAssembly), any machine with a C compiler and make, Cozystack (ada-colors-run image)"
quick_facts_source: "impl/ada-colors in github.com/tym83/paleocomputing"
faq:
  - q: "What were RED and GREEN?"
    a: "The two finalists of the High Order Language Working Group competition run by the US Department of Defense from 1977 to 1979. GREEN came from Jean Ichbiah's team at CII-Honeywell-Bull and became Ada; RED came from Intermetrics in Boston and lost on May 2, 1979."
  - q: "What is left of RED today?"
    a: "The complete manual of March 8, 1979, retyped by its co-author Mary Van Deusen and archived at DTIC as AD-A219453, the Rationale, and the solutions to ten contract problems. The 1979 RED translator itself never turned up."
  - q: "Why did GREEN win?"
    a: "The reviewers' reports on the final are not online. Participants recall that GREEN reached stability and completeness earlier, that Ichbiah presented it very well, and that in the final RED grew bolder while GREEN grew more conservative."
  - q: "What did Ada later win back from RED?"
    a: "Assertions came back in Ada 2005, a lightweight construct for shared data (protected objects) in Ada 95, bounded synchronized queues in Ada 2012, and user-defined assignment, finalization, indexing, iterators and literals between 1995 and 2022. The Ada 95 Rationale does not cite RED, so this is convergence rather than borrowing."
  - q: "Can a Kubernetes control plane work without an etcd quorum?"
    a: "In the RED model, an API server run as a Tandem-style process pair survived the primary's death in the middle of a rollout, because controllers compare states rather than react to events: lost writes became one more discrepancy for the next reconciliation."
  - q: "How can I try RED and GREEN?"
    a: "Open tym83.github.io/paleocomputing/red/ in a browser, where the translators and clang run as WebAssembly, or clone github.com/tym83/paleocomputing and run make in impl/ada-colors with any C compiler. Twelve labs check themselves with labs/check.sh."
primary_keyword: "Ada language competition RED and GREEN"
keywords: ["Ada", "RED language", "GREEN language", "Intermetrics", "Jean Ichbiah", "Steelman", "HOLWG", "DoD language competition", "paleocomputing", "self-hosting compiler", "bootstrapping", "Tandem NonStop", "process pairs", "THE multiprogramming system", "Dijkstra", "Kubernetes control plane", "Ada 95 protected objects", "WebAssembly", "Cozystack", "retrocomputing"]
quiz:
  title: "Test yourself: the two Adas"
  questions:
    - q: "On what date did the High Order Language Working Group choose GREEN?"
      options:
        - { text: "March 15, 1979", correct: false }
        - { text: "May 2, 1979", correct: true }
        - { text: "February 1983", correct: false }
      explanation: "March 15 was the deadline for the final materials, and the ANSI/MIL-STD-1815A standard came in February 1983. The vote was on May 2, 1979, and that same day Whitaker sent out postcards reading \"Green is Ada!\""
    - q: "How does RED protect shared data?"
      options:
        - { text: "Only through rendezvous with a server task", correct: false }
        - { text: "With REGION, a critical section that releases its lock however the body ends", correct: true }
        - { text: "With a private section in the package specification", correct: false }
      explanation: "RED has mailboxes for messages and REGION over a DATA_LOCK for shared data. In Ada 83 a lock is a task with two entries, and an exception between them leaves it held."
    - q: "What happens in RED when FREE is called on a dynamic variable that other pointers still reference?"
      options:
        - { text: "It is freed, and the pointers dangle", correct: false }
        - { text: "Nothing, the call is ignored", correct: false }
        - { text: "It raises the X_FREE exception", correct: true }
      explanation: "A dangling pointer is impossible by construction; the check can be switched off with PRAG(SUPPRESS(X_FREE))."
    - q: "In PAIRS, what breaks if the primary replies to the client before sending the checkpoint and its processor dies in between?"
      options:
        - { text: "The client is told a transfer went through that the books never record", correct: true }
        - { text: "The total amount of money in the bank changes", correct: false }
        - { text: "The backup never takes over the name $BANK", correct: false }
      explanation: "The total stays 400, so it looks fine, but the audit finds two accounts that disagree with what the clients were told."
    - q: "What was the first fix needed when the API server pair caused all nodes to be evicted after a failover?"
      options:
        - { text: "Adding a third API server for a quorum", correct: false }
        - { text: "Stopping evictions when every node goes quiet at once, as Kubernetes does in FullDisruption", correct: true }
        - { text: "Making the kubelets retry every write", correct: false }
      explanation: "If all nodes go quiet at once, it was the control plane that was missing. The second fix measured lease freshness by the time the controller saw the change and drained the mailbox before deciding."
---

On May 2, 1979, a small working group at the US Department of Defense voted for a language that was named Ada that same evening. The tender itself had run for four years and drawn some fifteen proposals, but only two made it to the final, and right up until the winner was announced they went by code names: Green and Red. Green won; its specification came from Jean Ichbiah's French-American team, and it is GREEN that became known as Ada. Red, the work of the Boston company Intermetrics, lost and was all but forgotten. And yet Red already had a working translator, which, as its authors remember, was ready on time. Under the terms of the contract it was not taken into account in the selection, and apart from its authors nobody has ever laid eyes on it.

Of course, a series on paleocomputing could not walk past this tender. I wanted to dig up the specifications submitted to it and finally build the programming languages that never existed, write a self-compiling compiler in each, and see what these languages can do. In RED I even wrote a small OS and something like a Kubernetes control plane. I modelled the OS on Tandem NonStop, the computers that banks and stock exchanges bought from 1976 on because they never stopped. One variant of my control plane works like their process pairs: a primary and a backup process, with no etcd and no quorum, and it survives the death of the API server in the middle of an application rollout. But the most instructive find wasn't in the code: the Ada that won then spent decades, slowly and expensively, trying to implement what the losing RED had from the very beginning.

This is the third part of my series on paleocomputing. In [the first](https://aenix.io/blog/2026/09/nine-days-of-paleocomputing/) I ran Niklaus Wirth's processor in a browser, in QEMU and in Kubernetes; in [the second](https://aenix.io/blog/2026/10/kubernetes-over-wirths-radio/) I built Kubernetes on Oberon machines that exchange signals over radio. You don't need to read them first; this story stands entirely on its own.

I'm interested in the ideas that lived inside technologies that lost: what we lost along with them, and which of the lost things came back later in other technologies. Ada turned out to be an especially good example. Its requirements were written over years, in public, by the whole world; dozens of review teams picked the finalists apart; and the whole story is very well documented.

The article, of course, came out long. First we'll briefly look at how that tender came about and why the Greens won, then see what is actually left of the losing languages. After that we'll talk about both languages and their compilers, and about how a 1979 program ran for the first time. Then come the operating systems, Kubernetes, a comparison of RED with classic Ada, and a bit of tinfoil-hat speculation: what our industry might have become if in May 1979 the experts had picked a different winner. And at the end there will be labs. The two other contenders, blue and yellow, are well documented too, but they dropped out back in 1978, so they will get a separate piece.

All the sources, notes and instructions are in the repository [github.com/tym83/paleocomputing](https://github.com/tym83/paleocomputing), under [`impl/ada-colors`](https://github.com/tym83/paleocomputing/blob/main/impl/ada-colors/README.md), available under the Apache 2.0 license.

## How the Pentagon chose a language

In the mid-seventies the US Department of Defense had a problem that today we'd call a technology zoo. Embedded software for aircraft, ships and command systems was written in hundreds of languages and dialects, every contractor brought its own, and maintaining the whole menagerie cost billions. In January 1975 the High Order Language Working Group, HOLWG, was formed, and its chairman, Air Force Lieutenant Colonel William Whitaker, proposed something strange for a military agency: first agree, in public, on the requirements for the language, and only then go looking for the language.

The requirements took several years to write, and you can see from the names of the revisions how they grew ever more precise, even hardened: Strawman in April 1975, then a wooden Woodenman, a tin Tinman, an iron Ironman and finally [Steelman](https://dwheeler.com/steelman/steelman.htm) in June 1978. Tinman went out to a thousand people in industry and academia, and even earlier, for Strawman, Dijkstra, Hoare and Wirth sent in comments. Twenty-three existing languages were checked against the requirements, and none of them fit. The new language, it was decided, should be built on one of the three that came closest: Pascal, PL/I or Algol 68. One amusing detail from [Whitaker's recollections](http://archive.adaic.com/pol-hist/history/holwg-93/holwg-93.htm): C was invited to the evaluation too, but Bell Labs, where it was created, themselves asked that C be left off the list, and the group honored the request.

In the spring of 1977 the competition was announced. Fourteen proposals came in, and in August four teams were funded. So that reviewers would judge on substance rather than brand names, the designs were anonymized by color: Green went to CII-Honeywell-Bull, Red to Intermetrics, Blue to SofTech and Yellow to SRI International. According to Whitaker, the colors had no hidden meaning.

In February 1978 the four preliminary designs went out for evaluation, and some eighty teams from military and civilian organizations pored over them. Dijkstra spent a whole month on them and wrote [a review of each](https://www.cs.utexas.edu/~EWD/index06xx.html). He called Yellow a hopeless mess, faulted Blue for a 160-page chapter on types, ended his review of Green with a phrase about "technical incompetence, probably enhanced by dishonesty," and confessed to being baffled by Red: the design was at once advanced and backward, and he couldn't see how the two went together. He advised Whitaker not to choose any of the four. The advice wasn't taken: in April 1978 Green and Red went through to the second round.

The second round lasted a year. And here is what matters most for this story. The Red team threw out its first design entirely. The chief designer, John Nestor, rewrote the language from scratch, so there are actually two red languages. The first, REDL, was built on Hoare's monitors, modules with shared data that only one process can enter at a time, and on events. The second, RED, the one that reached the final, rested on mailboxes and critical sections, which the tour of RED covers in detail. The Red project was managed by Ben Brosgol, and the language was designed by Nestor. Red's consultants included Barbara Liskov, William Wulf, Paul Abrahams and Robert Dewar, the future head of the GNAT project, the free Ada compiler. On March 15, 1979, both teams handed in a complete specification, a rationale for the design, solutions to the same ten contract problems, small exercises set by the DoD for every team, from a ring buffer to a scheduler, and a test translator.

Red's translator worked. It was built by Mark Davis's group, and in the recollections of Mary Van Deusen, co-author of the RED manual, it comes across as a small feat: a compiler for a language that kept changing under it, ready on time. But the second-round contract stated that the translator would not be considered in the selection. Whitaker, for his part, explains it differently: both translators turned out to be too incomplete, and possibly too slow, to influence the evaluation.

On May 2, 1979, the group chose GREEN. That same day Whitaker sent out three thousand green postcards reading "Green is Ada!" The vote was unanimous, like every vote this group ever took: Whitaker admits he only put a question to a vote once everyone already agreed. Van Deusen tells a story from the losing side about a young Air Force representative who had been ordered to vote for Green, discuss nothing and not change his mind. I found no confirmation of this, so let it remain just a historical anecdote (though it does look a lot like the way decisions get made in cases like this).

Why Green won is written, in the documents available, mostly between the lines. The reviewers' reports on the final have not survived online. The analyses of the first round, however, as it turned out, did survive, and they will get the next article. Tucker Taft, who joined Intermetrics in 1980 and later led the design of Ada 95, [says](https://cse.sc.edu/~mgv/csce330f24/pres/az.pdf) Green reached stability and completeness earlier than the others, and that Ichbiah was remarkably good at presenting it to the reviewers. Van Deusen recalls that the Green team had a very fine sense of politics from day one, and that its first design decision was the length of the description. And a popular Time-Life book on programming languages from 1986 has what I think is the most accurate line of all, put in the mouth of one of the competitors: in the final, both languages changed, with Red growing bolder and Green more conservative.

Then came a long polishing period. The Preliminary Ada Reference Manual was published in June 1979 in SIGPLAN Notices; it was picked apart and reworked, and only in February 1983 did the ANSI/MIL-STD-1815A standard appear, the one we now call Ada 83. The standard's number comes from the year Ada Lovelace was born. Intermetrics buried the red language quickly and, according to Van Deusen, completely. But this story has a sequel that I'll come back to.

## What was left of the losers

When I first took up this story, I was sure almost nothing of the red language had survived. The opposite was true, and that's a common story in paleocomputing: "nothing survived" is almost never the case. What survived is simply lying somewhere other than where people look.

The RED manual of March 8, 1979, was [retyped in full as HTML](https://iment.com/maida/computer/redref/) by Mary Van Deusen, its co-author, for the competition's thirtieth anniversary. Next to it sits the complete Rationale, with its discussion of rejected alternatives, solutions to the ten contract problems and an example of a library capsule, as RED calls a module. Van Deusen writes that after the competition these documents were unavailable to the public. That's true for 1979–1990, but in March 1990 the manual went into the Defense Technical Information Center archive, DTIC, marked "approved for public release," and it's still there under the number [AD-A219453](https://apps.dtic.mil/sti/pdfs/ADA219453.pdf).

The syntax of RED is given in the manual not as text but as diagrams, and every one of them is an image. The eighty-three language diagrams and twelve lexical ones had to be redrawn (not by me but by my Claude, of course) to get a [conventional grammar](https://github.com/tym83/paleocomputing/blob/main/impl/ada-colors/notes/red-grammar.md), and along the way 105 code examples, also images, had to be transcribed. In the process, inconsistencies turned up within the manual itself. For example, the diagram puts a semicolon after a goto label, while the table of special characters and the examples use a colon.

{{< figure src="scan-red-statement.png" alt="Diagram 36 from the RED manual: a statement with a goto label" caption="Diagram 36 from the RED manual (Intermetrics, 1979), as reprinted at iment.com: a statement with a goto label. The diagram puts a semicolon after the label's identifier, while the table of special symbols and the examples call for a colon" >}}

With the green language I expected the opposite: since Ada (that very GREEN) won, its documentation should be easy to get. Yet Ada 83 is everywhere, while the green language as it stood in the spring of 1979, before all the rework, was harder to find. The DTIC mirror on the Internet Archive came to the rescue. It had the "Informal Introduction to the Green Language," its formal definition, solutions to the same contract problems and, most valuable of all, two documents: the "Preliminary Ada Reference Manual" of May 1979, with a letter attached from the Deputy Secretary of Defense dated May 14 announcing the choice of language, and the complete Rationale of the Green design dated March 15, 1979, the day the final materials were due. All of it is scans with poor text recognition, in places nightmarish, but readable.

{{< figure src="scan-green-letter.png" alt="The letter of Deputy Secretary of Defense Charles Duncan of May 14, 1979" caption="The letter of Deputy Secretary of Defense Charles Duncan of May 14, 1979, which opens the Preliminary Ada Reference Manual (DTIC AD-A071761, scanned at the Internet Archive). Comments on the language are invited until November 30, and the last paragraph explains whom the language is named after" >}}

The contract problems deserve a word of their own. These are ten problems the DoD handed to every team: polling keyboards through a shared ring buffer, an interrupt system with four priority levels, a file package, dynamic graphics with joysticks, protecting a database from concurrent access, process control, adaptive routing, a real-time scheduler, distributed broadcast, and unpacking bit-level message headers. Both teams solved the same problems, which gives us a unique chance to compare their approaches once more. Once again [all twenty solutions](https://github.com/tym83/paleocomputing/tree/main/impl/ada-colors/problems/original) had to be recognized to get source code. The Red team got by in 815 lines of code without comments, the Green team needed 1660, twice as many, and I'll show why once I get to the solutions themselves.

The Blue and Yellow designs, judging by a 2023 [thread on the systemsafety mailing list](https://lists.techfak.uni-bielefeld.de/pipermail/systemsafety/2023-September/005936.html), are inside a huge 4575-page volume of first-round reports in the same DTIC (and so it turned out; we'll cover them in the next article). What I couldn't find is Red's translator. All that remains of it is a bibliographic reference in a 1981 article by Van Deusen ("M. Davis and D. Levine, RED Translator, Intermetrics, Inc., March 1979"), a couple of paragraphs in the Rationale about what input/output it supported and how the syntax of the contract problems was run through it, and Van Deusen's own recollections. No source code is available. So we won't see the compiler that was built in 1979, but we can write a new one, and it's probably the first publicly available RED compiler in the language's entire history.

## A tour of RED

At first glance RED looks like Pascal that has spent a long time at the gym. Here's a piece of a matrix arithmetic package from the appendix to the Rationale, whose examples were written by Paul Abrahams, Bruce Knobe, David Levine and others. I've substituted the constants and removed the comments. Look first of all at the types and at the function header:

```
CAPSULE matrix_vector_package EXPORTS ALL;
CONST maxdim := 100;
ABBREV mvfloat : FLOAT(6, -1.0E99 .. 1.0E99);
ABBREV dim : INT(2 .. maxdim);
TYPE matrix(m : dim, n : dim) : ARRAY INT(1 .. m), INT(1 .. n) OF mvfloat;
TYPE vector(n : dim) : ARRAY INT(1 .. n) OF mvfloat;

FUNC *(READONLY b : matrix, READONLY c : vector) => vector(b.m);
    ASSERT b.n = c.n;
    VAR a : vector(b.m);
    FOR i : INT(1 .. b.m) REPEAT
        a(i) := 0.0;
        FOR j : INT(1 .. b.n) REPEAT
            a(i) := a(i) + b(i,j) * c(j);
        END REPEAT;
    END REPEAT;
    RETURN a;
END FUNC *;
```

Look closer, though, and these fifteen-odd lines already contain a lot of things the mainstream would only get much later. `ABBREV` here is just a short name for a subtype, and `FLOAT(6, …)` is a floating-point type with precision 6 and the given range. Dimensions live in the type: `vector(n)` is a type with a parameter, and `b.m` and `c.n` read like ordinary attributes of a value. That's why the result type is computed from the arguments, and the function promises up front to return `vector(b.m)`. The `*` operator is overloaded on operand types, so a single sign multiplies scalar times vector, matrix times scalar, matrix times vector, matrix times matrix. And further on in the package the cross product is declared as `*` for `vector(3)`: the constraint on the dimension is written right into the parameter type, and a call with a vector of a different length raises a subtype exception. In Rust you'd express that constraint with const generics, `Vector<3>`. And there's `ASSERT` right in the function body, as part of the language.

Below I'll go through what struck me as most interesting in RED. Almost none of this is a summary of the Reference Manual; it's the stuff I personally tripped over while writing (not with my own hands, admittedly) a compiler, an operating system and Kubernetes in RED.

### Capsules and abstract types without the word private

A module in RED is called a capsule. A capsule exports exactly what is listed after `EXPORTS`, and whoever uses it explicitly opens up what they need with `EXPOSE`:

```
CAPSULE stackcap EXPORTS stack, init, push, pop;
   TYPE stack : RECORD[top : INT(0 .. 100), elem : ARRAY INT(1 .. 100) OF INT];
   ...
END CAPSULE stackcap;

EXPOSE stack, push, pop FROM stackcap;
```

In Ada an abstract type is made with a `private` section in the package specification. RED has no such section, but it does have a rule that I skipped at first and later got caught by myself: when a capsule exports a type, it exports neither selection of its components nor assignment. From outside you can declare a variable of type `stack` and pass it to `push`, but you can't write `s.top := 0`. If you want to expose the insides, the simplest way is to export everything with `EXPORTS ALL`. In other words, whether a type is abstract is determined not by how it's declared but by what the capsule lets out. When you think about it, that's a very honest model: the type itself hides nothing; the module boundary does the hiding.

### Closed scopes and IMPORTS

This rule turned out to be the one I felt most in day-to-day work. A procedure in RED is a closed scope: it can see constants, types and other procedures from outside, but not variables, unless it imports them explicitly:

```
VAR hits : INT := 0;
VAR limit : INT := 3;
PROC hit IMPORTS hits, READONLY limit;
   IF hits < limit THEN
      hits := hits + 1;
   END IF;
END PROC hit;
```

A variable can also be imported read-only, like `limit` in the example. Essentially it's the same thing as a lambda capture list in C++, except mandatory and for every procedure. For a language meant for maintaining enormous programs over decades, that's sensible: the procedure header tells you at a glance what state it can mess up.

Next to it is the distinction between normal and abnormal functions. A normal function depends only on its arguments, and the translator is allowed to drop a repeated call with the same arguments. If a function's result depends on more than its arguments, say it reads outside variables, you have to put `ABNORMAL` in front of it. A normal function is allowed side effects only on its own capsule's variables, such as a call counter or a memo table. The word looks funny, but the idea is close to what we now call pure functions.

Parameters are passed in four ways: `CONST` copies, `READONLY` passes by reference without the right to modify, `VAR` passes by reference with modification, and `OUT` is a local variable whose value goes to the actual parameter only if the procedure completes normally. If the procedure ends with an exception, the caller's variable stays as it was. Why reading by copy and reading by reference must be distinguished, the Red team explains separately. Leaving the choice to the translator won't do, because then the program's behavior depends on the implementation, and always copying is too expensive for large objects.

### Exiting a loop by name

A small thing I really liked. `EXIT` in RED must name the statement it exits from:

```
outer WHILE p /= NIL REPEAT
   ...
   IF found THEN
      EXIT outer;
   END IF;
END REPEAT outer;
```

The rationale is simple: if `EXIT` left the nearest loop, then wrapping a new loop around it would silently change the meaning of the program. And I've seen that bug in production more times than I'd like.

{{< figure src="scan-red-exit.png" alt="Diagram 45 from the RED manual: the EXIT statement" caption="Diagram 45 from the RED manual (Intermetrics, 1979), as reprinted at iment.com. `EXIT` is followed by an identifier, and the diagram has no way around it" >}}

### Mailboxes, WAIT and REGION

The main difference between RED and the future Ada is concurrency, and here a short digression is in order for those who haven't written Ada (which is almost everyone). In both languages a task is what today we'd call a thread: a piece of the program that runs at the same time as the rest. The question is how tasks come to terms with each other. In Ada, and in the green language before it, the only way is the rendezvous. A server task has entries that look like procedures. The client calls an entry and waits; the server reaches an `accept` statement for that entry in its own code and waits too; and when both are there, the body of the `accept` runs, after which each goes its own way. It's a meeting, hence the name. RED works differently: tasks exchange messages through mailboxes, that is, message queues between tasks inside the program, and protect shared data with critical sections:

```
VAR m : MAILBOX[msg](3);         % a mailbox for three messages
VAR d : DATA_LOCK;

TASK consumer IMPORTS m;
   VAR data : msg;
   WHILE TRUE REPEAT
      RECEIVE(m, data);
      ...
   END REPEAT;
END TASK consumer;

VAR c : ACT;
CREATE consumer NAMED c;
SEND(m, x);

REGION d DO
   shared := shared + 1;          % the lock is released however the body ends
END REGION;
```

A mailbox is typed and bounded. A mailbox of size zero is a rendezvous: the sender can't get ahead of the receiver. The `WAIT` statement waits for the first of several events: a receive from any mailbox, a send, or a timeout:

```
WAIT
   WHEN RECEIVE(ports(me), m) => handle(m);
   WHEN DELAY(35) => take_over;
END WAIT;
```

And here's a detail that shows how carefully the language was thought through. A `SEND` to a zero-size mailbox inside `WAIT` is forbidden: the attempt raises the `X_EMPTY_MAILBOX` exception. Why? Because otherwise tasks waiting on each other to send to zero-size mailboxes could end up in a circular wait, and the only way to prevent it would be global scheduling.

`REGION` acquires a data lock and is guaranteed to release it no matter how the body ends: normally, by an exception, by exiting a loop, or by returning from a procedure. Ada 83 has nothing like it; there a lock is built as a separate task with two entries, and if an exception strikes between acquire and release, the lock simply stays held. More on that in the chapter on Ada 83.

{{< figure src="en-scheme-comm.png" alt="Mailboxes and REGION in RED next to the rendezvous of the green language" caption="On the left, RED: tasks pass messages through a mailbox, and `REGION` guards the shared data. On the right, the green language: a client calls an entry of the server task and waits in its queue until the server reaches its `accept`" >}}

Tasks are started explicitly, `CREATE task NAMED variable`, and every activation, that is, every running instance of a task, has a name, a variable of type `ACT`. You can ask it whether the task is alive, change its priority, wait for it to finish, or kill it with `EXTERMINATE`. The built-in scheduler is priority-based: higher priority goes first, and among equals whoever has waited longest goes first.

### Your own scheduler

At the language's lowest level, in chapter fourteen of the Reference Manual, a systems programmer can describe their own scheduler and their own synchronization mechanisms. The language hands them the operations of the scheduler itself: suspend an activation, wait for a signal, make a stretch of code critical so that it is neither preempted nor killed halfway. The built-in mailboxes, locks and `WAIT` are described in the same chapter as special cases built from these operations. The manual shows it with examples: a round-robin scheduler, Hoare's monitors on top of data locks, and even `MAILBOX` itself, defined in the language. [All of these examples run](https://github.com/tym83/paleocomputing/blob/main/impl/ada-colors/red/manual/README.md) in my compiler. The very fact that a 1979 language invited the user to write schedulers, not just use the one provided, says a lot to me.

### Generics that instantiate themselves

A generic procedure in RED looks like this:

```
GENERIC t : TYPE NEEDS :=(t, t)
   PROC swap(VAR a, b : t);
      CONST c := a;
      a := b;
      b := c;
   END PROC swap;

swap(i, j);       % i and j are integers
swap(s, r);       % s and r are strings
```

Notice what isn't there. In Ada you first have to create an instance explicitly, `procedure SWAP_INT is new SWAP(INTEGER)`, and only then call it. RED has no instantiation statement at all: each call tells the translator which types it needs, and the translator creates an instance or reuses one it already has. C++ templates would later work the same way, but RED did it eleven years earlier. And the `NEEDS` list spells out which operations the type parameter must have, assignment in this case. C++ got the same thing only in 2020, under the name of concepts. My compiler checks this list at every call: if the operation isn't there or has the wrong header, the call doesn't translate. Generic parameters can be types, values, procedures and even tasks. In its solution to the scheduler contract problem, the Red team passes a task as a parameter to a generic wrapper task that launches it on schedule.

### Strings that remember their length

The string type in RED is `STRING[ASCII](n)`, and the length is fixed for each object. You can't assign a string of a different length; that's a subtype error. For variable-length text you need a pointer type with a parameter, and the Reference Manual has exactly such an example, a symbol table:

```
TYPE sym : PTR (len : INT) STRING[ASCII](len);
ALLOC s.syms(s.top) PTR (val.LEN) := val;
```

`ALLOC` creates a dynamic string of exactly the length of `val` and puts a pointer to it into the table. The RED compiler written in RED stores all its names and chunks of generated code exactly this way. ASCII characters in RED are named enumeration values, so a lowercase a is written `'L_A`, an apostrophe `'APOS`, a double quote `'QUOTE`. You can't put a double quote inside a string literal at all; you can only concatenate the string with the character. In the source of a compiler that generates C, this looks rather funny: `"rt_str(" & q & "TRUE" & q & ", 4)"`, where `q` is a function that returns a double quote.

### A FREE that refuses to free

One last thing in the Reference Manual impressed me. A dynamic variable in RED lives as long as there are references to it, which means that by default the language assumes garbage collection. But for those who can't afford it, there's a `FREE` procedure. If other pointers to the variable being freed still exist, `FREE` doesn't free it; it raises the `X_FREE` exception. A dangling pointer becomes impossible by construction, and the check itself can be switched off if it is too expensive, with a pragma, a directive to the translator written in the program itself: `PRAG(SUPPRESS(X_FREE))`. All of this in 1979. In my compiler, `FREE` walks all reachable memory before it frees anything: the globals, the frames of every task's running subprograms, the dynamic variables and the mailbox buffers. A program that doesn't use `FREE` pays nothing for this.

## GREEN in the spring of 1979

It's easy to take the green language for early Ada, and that's a mistake. The preliminary manual of May 1979 describes a language that looks like Ada 83 in its syntax and yet in places is something else entirely. I built [a compiler for the green language](https://github.com/tym83/paleocomputing/tree/main/impl/ada-colors/green) in the green language itself alongside the red one, and along the way the language showed as much character as RED did.

### What a program looks like

Here's one of the programs from the "Informal Introduction," a change counter:

```
restricted (TEXT_IO)
procedure COUNT_YOUR_CHANGE is
   use TEXT_IO;
   ...
begin
   ...
      PUT("CHANGE IS $");
      PUT(NUM_DOLLARS);
      PUT(".");
      PUT(NUM_CENTS);
   end if;
end;
```

Several differences from Ada 83 are visible right away. Instead of `with TEXT_IO`, the procedure is preceded by `restricted(TEXT_IO)`: in the green language every compilation unit is by default restricted to an empty visibility list, and libraries have to be named explicitly. What's more, `restricted` can go in front of any nested module, not just a compilation unit, narrowing its visibility inside the program. There's no `PUT_LINE` procedure: a line break is the string constant `NEWLINE`, printed with `PUT(NEWLINE)`. This program, by the way, doesn't print one at all. And under the 1979 I/O rules, every number printed anywhere other than the start of a line gets a space in front of it. So this program from the introduction literally prints `CHANGE IS $ 2. 53`, and apparently nobody noticed at the time.

Plenty of small things give away a different language. A character literal in the green language is simply a string of length one, `"A"`; there's no apostrophe for characters, it's only for attributes. Enumeration positions count from one, so `CHARACTER'ORD("A")` is 66 rather than the familiar 65. The `mod` operation takes the sign of the left operand, which means it behaves like `rem` in Ada 83. There's no `abs` operator, only an `ABS` function, and the branches of a `case` come after `of`, not `is`. In named association the parameter mode is written right at the call site: `F := x` passes a value in, `F =: v` takes the result out, and `F :=: v` does both. The language also had an `assert` statement, which would not make it into Ada 83. A detailed table of differences from Ada 83 is in the [project notes](https://github.com/tym83/paleocomputing/blob/main/impl/ada-colors/notes/green-digest.md#5-green--preliminary-ada-1979-vs-ada-83).

### Rules the compiler had to be built around

The main thing I tripped over was the function purity rules in section 6.5 of the manual. A function in the green language may not assign to anything nonlocal, modify objects through pointers, allocate memory, or, since input/output and external procedures can have side effects, call them. For generators like "give me the next unique number" there are value-returning procedures: `procedure NEXT return INTEGER`. They're allowed to change global variables, but they may be called only in an assignment, an initialization or a procedure call, and only where those global variables are out of scope.

That sounds like a formality until you start writing a parser. An ordinary recursive descent parser works like this: there's a pointer to the current token, and an `EXPR` function parses an expression, advancing the pointer and returning a tree. In the green language you can't do that. A function can't advance the pointer, and a value-returning procedure can't be called where the pointer is visible, and inside a parser it's visible everywhere. So the entire parser of the green-language compiler is written as procedures with out parameters: `EXPR(X)` instead of `X := EXPR`. The compiler checks these rules for other people's programs too, and its own source passes them.

Interestingly, the red language settled the same question the opposite way. In RED a function is normal by default: its result depends only on its arguments, and the only things it may change are the hidden variables of its own capsule. If it needs more, it's marked `ABNORMAL`, and then anything goes. The green language forbids; the red language makes you label it. For military code the green approach is probably safer. For someone writing a compiler, the red one is more convenient, and I suspect places like this are exactly what got softened in 1980–1983.

### Tasks without task types

Multitasking in the green language is built on the rendezvous, as in Ada, but it looks different. There are no task types. You declare a task and it exists, but it starts only with an `initiate` statement. If the task is already running, a second `initiate` raises the `INITIATE_ERROR` exception, while a task that has finished can be started again, with fresh variables. To get many identical tasks there are families: `task KUBELET(INTEGER range 1 .. 3)` (that's what the node agents of my Kubernetes are called; we'll get to them), and inside its body a task learns its number through `KUBELET'INDEX`. There are entry families too.

A `select` has guards, delays and `else`, but no `terminate` alternative, and if all the alternatives are closed and there's no `else`, `SELECT_ERROR` is raised. The calling side can't choose between waits at all: no timed call, no conditional call. An exception raised in the body of an `accept` reaches both sides of the rendezvous. And the only exception you can raise in another task is called `FAILURE`: `raise T.FAILURE`. Another task, on the other hand, can be killed with an `abort` statement. There are fifteen predefined exceptions, and each names its trouble outright: `RANGE_ERROR`, `INDEX_ERROR`, `ACCESS_ERROR`, `DIVIDE_ERROR`, `NO_VALUE_ERROR` for reading an uninitialized variable or for a function that ended without `return`, and so on. Ada 83 replaced them with five more general ones: of the green names only `TASKING_ERROR` survived, and the rest merged into `CONSTRAINT_ERROR`, `NUMERIC_ERROR`, `PROGRAM_ERROR` and `STORAGE_ERROR`.

## A compiler that compiles itself

The goal I set myself was this: each language should have a compiler written in that language. That's not just a nice tradition. A compiler is an honest test of a language: if you can write several thousand lines of parsing, symbol tables, type checking and code generation in it, the language is fit for real work, and all its awkward spots will surface on their own.

### A shared runtime and predictable time

Both compilers translate a program into C and build it against a shared runtime, also written in C. It's about eight and a half thousand lines, and it holds everything the languages need at run time: strings, exceptions, checked arithmetic, I/O, RED's mailboxes and locks, the green language's rendezvous, and the task scheduler.

With the scheduler I did one thing that paid for itself many times over. Every task in the runtime is an operating system thread, but the threads pass a baton to one another, and at any moment exactly one of them is running. Thanks to that, RED's scheduling rules hold to the letter: the task with the highest priority runs, among equals the one that has waited longest goes first, and a task that becomes ready with a higher priority preempts the current one.

[Time is virtual](https://github.com/tym83/paleocomputing/blob/main/impl/ada-colors/notes/red-implementation.md#time-the-virtual-clock-and-activation-clocks): when every task is waiting for something, the clock jumps straight to the nearest wake-up. And if there's nobody left to wake, the runtime doesn't hang; it prints that all tasks are blocked. The upshot is that any program prints exactly the same thing on every run, even with a dozen tasks, timeouts and tasks being killed, and the expected output can sit next to the test. For an operating system and for Kubernetes, where the whole point is what happens when something fails at a bad moment, this is priceless: the bad moment is reproducible down to the millisecond.

### Bootstrapping

You can't build a compiler written in language X until you have a compiler for language X. The classic way out is bootstrapping. First I made a small seed translator in Python, around two and a quarter thousand lines including the parser, that understands only the subset of RED the real compiler would be written in. Then I wrote the real compiler, [`redc`](https://github.com/tym83/paleocomputing/tree/main/impl/ada-colors/red), in that subset and ran it through the Python seed. The resulting compiler translated its own source, that result translated itself once more, and the two C files matched byte for byte. That's the fixed point: the compiler reproduces itself, and the seed is no longer needed.

This is where it gets interesting. From then on, all you need to build it is the C file that the latest compiler produced from its own source, and the language grows inside the compiler itself. Every new feature is added to `redc` in such a way that `redc` itself doesn't use it yet; then the compiler is built with the previous version, the fixed point is checked, and only after that may the new feature be used in its own source. That's how capsules, exports and nested procedures with static links, that is, pointers to the frame of the enclosing procedure, arrived first, then multitasking, then overloading with parameterized types, two-dimensional arrays and sets, and finally generics. Today the compiler is about eleven thousand lines of RED and translates itself in a couple of tenths of a second. On every change, CI rebuilds it twice from that C file and compares the results, and a separate build target repeats the very first step, from the Python seed, so the chain can be verified from scratch.

{{< figure src="en-scheme-boot.png" alt="The bootstrap and growth of the RED compiler" caption="The bootstrap and growth of the RED compiler. The Python seed is needed only for the first step; after that each version of `redc` is built by the previous one from the stored C file" >}}

### What RED did to me

Eleven thousand lines in a 1979 language are a good test not only of the language but of your patience. Here are the places where headstrong RED argued with me, and almost every time, on reflection, it was right.

The very first thing the compiler did was refuse to translate its own lexer. The `upper` function turned a lowercase letter into an uppercase one via `POS(c)`, and the compiler insisted that `POS` wasn't a function. It turned out I had a global variable `pos`, the position in the token stream, and names in RED are case-insensitive, and built-in names like `POS` aren't reserved. By every rule, my variable had hidden the built-in function. Later the same thing happened with a record field `len`, which collided with the `.LEN` attribute, and later still with a task parameter `me` that hid the built-in function `ME`, which returns the current activation. Each time the compiler did what the scoping rules told it to, and each time it took me about five minutes to believe it.

RED has more than fifty reserved words, and some of them are unexpected: `TO`, `CAPSULE`, `EXPOSE`, `IMPORTS`, `READONLY`, `SUBTYPE`. The parser function `subtype` had to be renamed, and the variable `to` in the operating system's client became `dest`.

RED has no null statement. An empty body is written as empty space, so `WHEN DELAY(20) => ;` is a syntax error. Later I found the same construct, `DELAY_UNTIL (next) => ;`, in the solution to the eighth contract problem, even though, according to the Red team, their translator had checked the syntax of all the solutions. Apparently the 1979 translator was more forgiving about this than the diagrams.

Fixed-length strings annoyed me at first, but turned out not to be scary at all: anything that lives longer than a single expression the compiler keeps in pointer strings, and the expressions themselves concatenate strings to their heart's content.

But the most valuable rule is `IMPORTS`. While the compiler didn't check it, I naturally wrote any old way. Once the check appeared, I had to go through the compiler's source once from top to bottom and declare in every subprogram what it imports. For the small functions of the lexer and the tables these are real lists, but for the parser and the code generator, which touch almost all of the global state, I wrote `IMPORTS ALL`, and those subprograms turned out to be four fifths of the code. And that's honest too: the header tells you at a glance that the procedure touches everything. And in the smaller programs, the operating system and Kubernetes, where the lists are short and real, the same check caught my mistakes twice. For the first time I understood why the authors of the language requirements insisted so hard on explicit interfaces.

### And the same for Green

[The green-language compiler](https://github.com/tym83/paleocomputing/tree/main/impl/ada-colors/green), written in the green language itself, is about fourteen thousand lines, and it was bootstrapped exactly the same way: a Python seed, a first version, a fixed point, and then growth, each version built by the previous one. It has packages with private types and overloading that tells apart parameter types, their modes, their names and the result type, and operators can be declared as function names. It has all fifteen exceptions, tasks with `initiate`, rendezvous and `select`, task and entry families, and generics with explicit instantiation via `is new`. The programs from the 1979 introduction [work](https://github.com/tym83/paleocomputing/blob/main/impl/ada-colors/notes/green-findings.md), and in two of them the compiler found errors it can't let through: a comparison of the real `NET_RISE` with an integer literal, and the octal number `8#8060`, which contains the digit 8.

What the compilers found in other people's code deserves a chapter of its own.

## A 1979 program runs for the first time

The most touching moment of the whole project came when the compiler learned overloading and parameterized types. I took the matrix arithmetic package from the RED Rationale, the same one I quoted at the start of the chapter on the language, added a small main program, and tried to translate it.

It didn't work. The compiler stopped at the line `ASSERT b.n : c.m`, a colon instead of an equals sign. The package had four such assertions. Next it turned out that the capsule opens under the name `matrix_vector_package` and closes under the name `vector_matrix_package`. Then, that the transpose function uses variables `m` and `n` that aren't declared anywhere in it, and two more procedures inside the matrix inversion refer to the same undeclared `m`. Then `a(p.r)`, `x(k.p)` and `x(i.p)` showed up, with a period instead of a comma. And the type `integer`, which RED doesn't have. On top of that came noise from the HTML retyping itself: stray backquotes, non-breaking spaces, a digit one instead of a letter in `1NT`, `SUBT_1OOP` and `realmultip1y`.

Every one of these errors is something any RED translator would reject on the spot. So the example in the Rationale was never compiled; it was simply typed up and sent to the printer (back then you didn't even need Claude to make silly mistakes, which is funny). That's not surprising: the Red team's translator was ready by the same deadline as the documents, and there apparently wasn't time to run the appendix examples through it (it was clear they took the competition seriously). I recorded every fix in a [separate file](https://github.com/tym83/paleocomputing/blob/main/impl/ada-colors/problems/run/C1-matrix-vector.sed), one line with an explanation per fix, so you can see that I corrected only what the translator wouldn't accept.

After those fixes the package translated and ran. The package multiplied a matrix by a vector, computed the cross and dot products, the determinant and the inverse matrix by raising to the power of minus one, and every number matched my hand calculations:

```
005.000 004.000 006.000
000.000 009.000 -006.000
dot = 031.000
det = 008.000
001.000 002.000 003.000
```

{{< figure src="en-red-matrix.png" alt="The 1979 matrix arithmetic package running in the browser" caption="The matrix arithmetic package from the RED Rationale, with the fixes the translator insists on, pasted into the page's editor. The editor shows the main program, and on the right is what the package printed on its first run" >}}

The logic errors that the translator lets through I left as they are, because by now they're part of the history. In the matrix inversion, rows are swapped under the condition `IF i = j`, when it should be `IF i /= j`, so pivot selection never actually kicks in. The determinant ignores the sign change on row swaps and multiplies the diagonal inside the elimination loop rather than after it. And the helper exponentiation function runs its loop up to an outside variable `k` instead of its own parameter. None of these errors show up on my test matrix, and most likely they wouldn't have shown up in 1979 either.

The manual's own examples tell the same story. In chapter fourteen, where a round-robin scheduler, Hoare's monitors and `MAILBOX` itself are defined in the language, the scheduler's variable is called `new`, a reserved word, and a record field in the monitor is called `external`, reserved too. The mailbox definition has `SYNCH_SIGNAL` for `SYNC_SIGNAL`, and one condition is copied from the neighbouring procedure, an error no translator would catch.

Next on the plan were the contract problems. The first to work was number six, "process control": task `a` reads punched cards into a double buffer, task `b` processes them, task `c` prints the result, and procedure `d` talks to the operator and, on the operator's `DONE` command, cleanly stops `a` and `b` without losing data. Once again the translator found things in the original that it can't let through, a whole scattering of little ones. A new type with no parameters has a subrange taken from it, `mes('b0..'b1)`, while in RED such a type has exactly one subtype. The buffer array is declared as a type but used as a variable that doesn't exist. The activations are declared under the names `aa`, `ba` and `ca`, while the tasks are created under the names `cc` and `bb`. Task `b` sends its results to mailbox `mc` but, for some reason, imports `mr`. And the loop name at the end is spelled with one t instead of two. The input device and the processing, which the problem statement "assumes to be present," I filled in with stubs, and the operator issues commands on eighty-column punched cards, as befits 1979.

{{< figure src="scan-red-process-control.png" alt="The operator procedure d from the solution to problem six in the RED Rationale" caption="The operator procedure `d` from the solution to problem six in the RED Rationale (Intermetrics, 1979, reprinted at iment.com). The activations are declared as `aa`, `ba` and `ca`, but the tasks are created under the names `cc` and `bb`" >}}

The most interesting part began after everything translated. The operator issues `DONE`, and task `a` keeps reading cards forever. It waits in a `WAIT` on two events at once: a returned buffer and a stop command. A buffer always comes back, and my runtime picked the first ready alternative in textual order. The stop command simply never got a chance. The RED manual says that the choice among ready alternatives is unspecified, so the 1979 solution is correct only if the implementation chooses fairly. I switched to round-robin selection, and `DONE` started working. And in the process my own RED Kubernetes broke, but more on that in a separate chapter. One more property of the 1979 solution surfaced on its own: if task `a` dies, the operator's console hangs forever on a send to a zero-size mailbox that nobody is left to read.

The remaining problems touch interrupts at specific addresses, buffers in memory and the bit layout of a word, so they needed hardware. I replaced it with device tasks on the virtual clock: keyboards send characters, joysticks report velocities, buttons are pressed at given milliseconds, and interrupt entries and mailboxes at fixed addresses became ordinary entries and mailboxes. The remaining nineteen programs are ported too, and now all twenty solutions of the competition run, ten red and ten green, plus the matrix package.

Not one of them translated as printed. What's interesting is which errors each team made. Red's are mostly carelessness: undeclared names, an `OCTAL` function the language doesn't have, a parameter named `rep` although `REP` is a reserved word. But there are design errors too, ones a translator would let through. In the moving-objects problem, positions are kept as pointers, and the collision test compares pointers that are never equal: the objects on the screen simply cannot collide. In the database protection problem, every procedure finds a record, changes a copy of it and returns, so no reservation ever reaches the database.

Green has fewer typos but breaks the rules of its own language more often. Four solutions start tasks, leave a loop or return from a procedure right inside the body of an `accept`, which the 1979 manual forbids. There are design errors too. In the file problem, a record is written one byte further on than it is later read from, so every record comes back shifted. In the packet-unpacking problem the length field gets eight bits, but a length can be as large as 256, which needs nine. In database protection, a release is accepted only after a new reservation, so a call to the `FREE` entry hangs forever, and a task waiting for exclusive access can deadlock with another. In the scheduler, a request whose deadline is earlier than the head of the list is simply lost, and the operator's requests are the first to disappear.

In 1979 dozens of reviewer teams read these texts. They read them by eye: the Red team, by its own account, ran only the syntax through its translator. [The fixes to them](https://github.com/tym83/paleocomputing/tree/main/impl/ada-colors/problems/run) also sit next to the solutions, so the whole difference between what was printed and what runs is in plain view.

The texts also show the main difference between the two languages. The red solutions are half as long, and three quarters of the difference comes from three problems: the file package, database protection and the scheduler. Where Red has a built-in lock, a mailbox or a wait until a given moment, Green has to write a separate server task that owns the data and serves requests in turn. In the real-time scheduler problem, the Red team doesn't write a scheduler at all: they have `DELAY_UNTIL` and a generic wrapper task whose parameter is another task, 44 lines in total. The Green team builds a full-blown scheduler task, woken by the clock interrupt, with a list of pending launches and a family of entries, 234 lines. In the database protection problem, the Red team puts in a critical section and retries in a loop, while the Green team lines users up in queues at the entries of a server task. Where Red has a lock, Green has a server. That is the whole 1979 dispute, and it's where we're headed next.

{{< figure src="scan-red-scheduler.png" alt="The real-time scheduler of the Red team" caption="The real-time scheduler of the Red team (the RED Rationale, Intermetrics, 1979, reprinted at iment.com). The generic task `execute` takes a task as a parameter and waits with `DELAY_UNTIL`. Note the empty branch `DELAY_UNTIL (next) => ;`, which the language's diagrams do not allow" >}}

{{< figure src="scan-green-scheduler.png" alt="The real-time scheduler of the Green team" caption="The same problem from the Green team (DTIC ADA070752, April 1979, scanned at the Internet Archive): the body of the scheduler task. Every clock tick arrives as an `accept TICK` rendezvous, after which the task walks the list of pending starts and releases the ones that are due through `accept WAIT(I)`" >}}

## An operating system in the spirit of Tandem

While I was reading RED's chapter on multitasking, I remembered the Tandem NonStop (to be clear, these are my Claude's memories, not mine: I had never heard of the machine before). Its operating system, Guardian, appeared in 1976 and was built in a strikingly similar way. Processes don't share memory and talk only through messages, and every important service runs as a pair of processes on different processors: the primary serves requests and, before every reply, sends the backup a checkpoint, a description of what has changed. If the primary's processor dies, the backup learns about it from the system that watches the processors' heartbeats, and carries on from where the last checkpoint left off. Joel Bartlett described this kernel in 1981 at the Symposium on Operating Systems Principles, SOSP, and in 1985 Jim Gray wrote his famous paper on why computers stop and what can be done about it.

RED has everything you need to reproduce this: mailboxes are very nearly Guardian's message system, `WAIT` with a timeout is a missing-heartbeat detector, and `EXTERMINATE` does a fine impression of a processor losing power. That's how a small operating system called [PAIRS](https://github.com/tym83/paleocomputing/blob/main/impl/ada-colors/os/pairs.red) came about, only around three hundred lines long.

It has three processors; process ports are mailboxes; and a name table says which port the `$BANK` service currently lives on. The bank runs as a process pair: the primary on processor 0, the backup on processor 1. Two clients each make six transfers between accounts. Every request is numbered, and if no reply arrives within 50 milliseconds, the client asks the name table again and repeats the request with the same number.

{{< figure src="en-scheme-pair.png" alt="The process pair in PAIRS" caption="The process pair in PAIRS. The primary first sends the backup a checkpoint and only then replies to the client. When CPU 0 goes dark, the backup takes the name `$BANK` after 35 milliseconds of silence and recognises the client's retry by its number" >}}

I staged the failure at the worst possible moment. The primary processed the second client's third request and sent the backup a checkpoint, but didn't get to reply to the client, because at that moment its processor lost power. Here's what happens next:

```
[0 ms] $BANK primary on CPU 0 (port 3), backup on CPU 1 (port 4)
[6 ms] $BANK primary checkpointed request 3 of client 2 and has not replied yet
[6 ms] CPU 0 loses power
[41 ms] $BANK backup on CPU 1 hears no heartbeat: takes over as primary
[41 ms] $BANK backup started on CPU 2, port 5
[56 ms] client 2: no reply to request 3, retrying
[56 ms] client 1: no reply to request 3, retrying
[56 ms] $BANK: request 3 of client 2 is a retry, answered from the checkpoint
...
[68 ms] audit: every confirmed transfer is in the books exactly once
```

For 35 milliseconds the backup hears no heartbeat; then it takes the name `$BANK`, starts a new backup for itself on a free processor, and ships it the entire state. The clients get no replies and retry. The first client's request burned up in the dead process's mailbox, so the new primary executes it for the first time. The second client's request, though, the new primary recognizes by its number: the checkpoint got through, so the transfer has already been made, and the client simply gets the saved reply back. At the end the clients hand in a log of everything that was confirmed to them, and it's reconciled against the bank's books. Every confirmed transfer is accounted for exactly once.

{{< figure src="en-red-pairs.png" alt="PAIRS in the browser" caption="PAIRS in the browser. On the left, the primary: the checkpoint goes out before the reply. On the right, CPU 0 dies between the two, the backup takes `$BANK`, and the audit at the end agrees with what the clients were told" >}}

Now for the most instructive part. If you swap two lines in the primary, so that the reply to the client goes out first and the checkpoint after it, and the processor dies in between, here's what you get:

```
[68 ms] account 2: 40   clients were told: 10
[68 ms] account 4: 160   clients were told: 190
[68 ms] total 400
[68 ms] audit: 2 accounts disagree with what the clients were told
```

The client was told a transfer of thirty units went through, and the books have no record of it. And note: the total amount of money is still 400, so if that's all you look at, you see no error at all. That's exactly what the "checkpoint before reply" rule is for, and it's very easy to break with the best of intentions, for the sake of speed. This exercise became the basis of [one of the labs](https://github.com/tym83/paleocomputing/blob/main/impl/ada-colors/labs/README.md).

## Dijkstra's THE

Tandem isn't the only system of those years that asked to be written in RED. Ten years before Guardian, in 1965–1968, Dijkstra's group in Eindhoven built the THE multiprogramming system, and the paper about it became one of the most cited in the history of operating systems. Its central idea is hierarchy. The system is a society of sequential processes laid out on levels 0 to 5: processor allocation and semaphores on level 0, the segment controller that moves information between core and the magnetic drum, the slow backing store of those years, on level 1, the message interpreter that owns the only console on level 2, buffering of input and output on level 3, user programs on level 4 and the operator on level 5. Dijkstra's semaphore is a counter with two operations: P waits until the counter is greater than zero and decrements it, V increments the counter and wakes one waiter. A process calls only on levels below it, and Dijkstra claimed that this is what lets the system's correctness be proved in advance and its testing be exhaustive.

{{< figure src="en-scheme-the.png" alt="The levels of THE in the RED build" caption="The levels of THE in my RED build. A process calls only the levels below it; the red upward arrow is what lab 12 does" >}}

I [built THE in RED](https://github.com/tym83/paleocomputing/blob/main/impl/ada-colors/os/the.red), about four hundred lines. The semaphores turned out to be mailboxes of tokens: P takes a token, V puts one back. `REGION` won't do here, because in THE one process does the V and another does the P, while RED's critical section only brackets code inside one process. Eight segments live in three core pages, and the controller dumps the surplus to the free drum page with the least latency, exactly as the paper says. Three paper tape readers fill buffers, three programs compute sums of squares, the printer asks the operator for paper on its third line, and a hundred and forty milliseconds later the operator loads it.

The most interesting thing in the paper is one passage that's easy to miss. Dijkstra explains why the message interpreter sits above the segment controller rather than beside it: the console's vocabulary is stored in segments, so to print a sentence the interpreter needs the controller. I checked what happens if the order is broken. In [lab 12](https://github.com/tym83/paleocomputing/blob/main/impl/ada-colors/labs/red/12-the.red) the segment controller reports every dump to the operator, so a level-1 process waits for a level-2 one. The system freezes at the very first dump:

```
[20 ms] CONSOLE  reader 1: tape loaded, reading
[30 ms]   segment controller: segment 1 dumped from core page 1 to drum page 6
[40 ms] CONSOLE  reader 2: tape loaded, reading
*** deadlock: every task is waiting (t=400)
```

The controller waits for the console, and the console waits for the controller to read its vocabulary. One arrow pointing up, and Dijkstra's proof no longer holds.

{{< figure src="en-red-the-lab.png" alt="Lab 12 in the browser: THE freezes at the first dump" caption="Lab 12 in the browser: `report_dumps` is switched to `TRUE` in the editor, and the segment controller waits for the console after its very first dump. At 400 milliseconds the runtime reports that every task is waiting" >}}

For comparison I wrote [THE's core in GREEN](https://github.com/tym83/paleocomputing/blob/main/impl/ada-colors/os/the_green.grn) too. It has neither semaphores nor mailboxes, so each semaphore becomes a server task that accepts P only while its count is positive. It works, but nine lines printed by three programs through a shared buffer cost 54 rendezvous, six for every printed line. Where RED simply takes a token from a mailbox, GREEN calls a server task and waits for a rendezvous with it on every P and V.

Now that THE runs, Kubernetes can run on it too. But first, how Kubernetes works on mailboxes.

## Kubernetes on mailboxes

A word for those who haven't worked with Kubernetes. In Kubernetes you don't command "start three copies of the service"; you write the desired state into a store, a deployment with three replicas, and a set of independent controllers compares desired with actual over and over and closes the gap: they create pods, that is, instances of the application, assign them to nodes, evict pods from nodes that have stopped responding, and during a version upgrade roll out new pods in place of the old ones. All of them read and write through a single API server.

In the previous part of the series I built Kubernetes on Oberon, and the main discovery there was that a Kubernetes controller maps naturally onto a background task of the operating system. In RED the picture is even more fun, because many parts of Kubernetes are already there and simply go by other names.

Here is how the parts of Kubernetes map onto RED:

| Kubernetes | RED |
|---|---|
| API server and object store | a task that alone owns the store |
| watch, a subscription to changes | a mailbox: the API server sends every change to the mailboxes of the controllers subscribed to objects of that kind |
| informer cache | each controller's own copy of the objects |
| reconcile loop | `WAIT`: either an event has arrived, or the timeout has expired and it's time for a full resync |
| optimistic locking | a write carries the version number it's based on; a stale write is rejected |
| expectations | a count of the pods the replica controller asked to create but hasn't seen yet; without it, it would create extra pods |
| kubelet, the node agent, and its lease | a task that renews its lease regularly; a node that stops renewing is declared not ready, and its pods move elsewhere |

The tasks share nothing among themselves except mailboxes. Of this table, what matters most below is expectations and leases.

In the [main run](https://github.com/tym83/paleocomputing/blob/main/impl/ada-colors/kube/kube.red), a deployment with three replicas is created and scaled to five, a second client tries to write a stale copy and gets rejected, then node 2 loses power, its pods move to live nodes, and at the end a second version is rolled out. All of that fits into about five hundred lines of RED.

### The control plane as a process pair

And then comes the crazy part, the whole reason it was worth joining Tandem and Kubernetes. In Kubernetes, the reliability of the control plane comes from etcd: several replicas of the store agree with one another via the Raft protocol, and as long as a quorum is alive, the cluster can be managed. What if we did it the Tandem way? [The API server runs as a pair](https://github.com/tym83/paleocomputing/blob/main/impl/ada-colors/kube/kube_ha.red): after every change, before sending out any events, the primary sends the backup a checkpoint, and the backup watches the heartbeat and takes over the name when it disappears. No consensus, no quorum, just a pair of processes.

The problem is that, unlike with the bank, nobody here retries requests. A controller sends a write to the API server and moves on; it doesn't wait for a reply. If the primary dies, everything sitting in its mailbox vanishes, and nobody will ever know. I was almost sure it wouldn't work, and I made the failure as nasty as I could: the primary API server loses power in the middle of rolling out a new version, right after storing the first pod of that version. `replicaset 10` in the log is the replica set of the second version, run by the replica controller. Look at the lines at 60 and 95 ms: the scheduler binds the same pod 11 twice, because the first binding sank with the dead server's mailbox.

```
[60 ms] replicaset 10: 0 of 4 pods, creating 4
[60 ms] api server primary loses power right after storing pod 11; the writes still in its mailbox are gone
[60 ms] scheduler: pod 11 -> node 1
[80 ms] replicaset 10: 1 of 4 pods, creating 3
[95 ms] api server backup: no heartbeat, taking over the name API
[95 ms] scheduler: pod 11 -> node 1
[95 ms] kubelet 1: pod 11 (version 2) running
[115 ms] replicaset 10: 1 of 4 pods, creating 3
[115 ms] scheduler: pod 12 -> node 2
...
```

Three pod creation requests and one binding of a pod to a node vanished along with the dead server's mailbox. At 80 milliseconds the replica controller's expectations expire, and it asks for the pods again, but again into the void, because the name still belongs to the dead server (and what is dead may never die). Fifteen milliseconds later the backup takes the name and sends every controller the full list of objects. The scheduler sees that pod 11 isn't actually bound to any node and binds it, and twenty milliseconds after that, at 115 milliseconds, the replica controller creates whatever is still missing. The cluster gets where it's supposed to be, with no consensus and no human involved. It works because Kubernetes controllers compare states rather than react to events: a lost write is just one more discrepancy for the next reconciliation to catch.

{{< figure src="en-red-kube-ha.png" alt="Kubernetes with an API server pair in the browser" caption="Kubernetes with an API server pair in the browser. On the left, the backup server: after 35 milliseconds without a heartbeat it takes the name API and sends out every object. On the right, the primary dies in the middle of rolling out version 2, and by 210 milliseconds all four of its pods are running" >}}

### Two real Kubernetes failures, found by accident

What was really interesting wasn't what ended up working but how it broke along the way. In the first run of the pair, after the API server failover, the node controller declared all three nodes not ready at once and evicted every single pod. While the backup spent 35 milliseconds waiting out the silence, the kubelets were renewing their leases with the dead primary, and after the failover every node's lease looked stale. This is a well-known Kubernetes problem, and its fix is well known too: if all the nodes go quiet at once, it was the control plane that was missing, not the nodes, and nobody should be evicted. In Kubernetes, a zone where every node has gone quiet enters a state of full disruption, FullDisruption, and if that happens to every zone, the eviction controller stops. I added the same check.

In the second run the nodes were evicted one at a time. Node 3 managed to renew its lease first after the failover, the "everyone is silent" condition stopped holding, and nodes 1 and 2 got evicted. There were two causes, and both, once again, matched how real Kubernetes does it. You can't measure a lease's freshness by the time written in the lease itself; you have to measure it by the time the controller itself saw the change. And decisions should be made not on every event but on the full picture: first drain everything that has already piled up in the mailbox. The real node lifecycle controller works much like this: every few seconds it walks all the nodes in its cache, and when it leaves full disruption it also resets every node's freshness clock, so that the first node to renew its lease doesn't throw the others under the bus. After these two fixes an API server failover costs the cluster exactly zero evictions.

Incidentally, my first attempt at draining the backlog used a `WAIT` with a receive and a zero delay, on the assumption that the receive would win. Once the runtime started choosing among ready alternatives fairly, the zero delay sometimes won, and nodes were evicted again. The right way in RED is to ask the mailbox for `FULL_SLOTS`, how many messages it holds, and keep taking them while there are any.

I love that the pair variant, about six hundred lines in a 1979 language, all by itself and with no hints, stepped on the same rakes Kubernetes kept stepping on for years, and that the way out was the same. It's a good sign that the rakes aren't random: they grow out of the very idea of managing things by reconciling state.

### The same thing in the green language

For a fair comparison I wrote [the same control loop](https://github.com/tym83/paleocomputing/blob/main/impl/ada-colors/kube/kube_green.grn) in the green language. The structure is the same: an API server, controller caches, optimistic writes, node leases. In size the two versions are nearly equal, 522 lines of RED and 517 of GREEN, but they're built differently, and the difference is exactly the one people argued about in 1979.

The green language has no mailboxes, only the rendezvous. That means the event stream for each controller becomes a buffer task, a family `INBOX(1 .. 8)` with entries `PUT_EVENT` and `GET_EVENT`, and about forty lines go into what in RED was a single variable declaration. It gets worse. A controller needs to wait for either an event or a timeout for its periodic resync, and the 1979 green language has no timed entry call. I had to move the timeout inside the mailbox: if nothing arrives for 20 milliseconds, the mailbox itself puts an empty tick event in the queue, and when the controller gets it, it knows it is time for a full resync.

{{< figure src="en-green-kube.png" alt="Kubernetes in the green language in the browser" caption="Kubernetes in the green language in the browser. On the left, the `INBOX` task family that stands in for mailboxes, with a 20-millisecond delay for the tick. On the right, node 2 loses power and its pods move to the live nodes" >}}

And there's a trap that I predicted in advance and then verified. The API server sends out events by calling `INBOX(P).PUT_EVENT`, and if the mailbox is full, the server waits. But the mailbox's owner may at that very moment be waiting for the server, having called `API.WRITE`. The server waits for the controller, the controller waits for the server. With mailboxes of 256 events this doesn't happen, but with mailboxes of four the cluster locks up solid. What's more, the runtime can't even call it a deadlock, because the other mailboxes' timers keep ticking and virtual time runs forward forever. The same trap is possible in RED, but in the green world it's built into the very shape of the solution: where RED has a mailbox, GREEN has a server task, and two server tasks calling each other are a classic way to hang.

The green version, by the way, found a bug in my shared runtime. When a node loses power, its kubelet is terminated with `abort`, and at that moment it's standing in the queue at an entry of its mailbox. The runtime made the aborted task ready but forgot to remove its record from the entry queue, and a moment later the mailbox "accepted" a call from a task that had already finished and woke the dead. Section 9.10 of the 1979 manual says plainly that an aborted caller is removed from the queue, so this was my bug, not the language's.

### Kubernetes on THE

One thing remained: running the same control loop not on mailboxes but [on THE](https://github.com/tym83/paleocomputing/blob/main/impl/ada-colors/os/the_kube.red) from the previous chapter. I set a strict rule. The controllers live on level 4, as THE user programs, and use only what THE gives programs: P and V, segments, the console and the clock. Mailboxes and `WAIT` stay inside the lower levels, since THE itself is built from them.

Kubernetes changes more than I expected. In this model there's no API server at all: the store is segments that the segment controller moves between core and drum, guarded by one semaphore. A watch turns into a wake-up semaphore per controller, and whoever writes something wakes everyone. The semaphore saturates at one, so a wake-up only says "look again", never "here's what changed", and the controllers come out level-triggered simply by construction. P has no timeout, and a process can't wait on two semaphores at once, so resync, node heartbeats and lease checks all come from a clock process on level 0 that wakes everyone every ten milliseconds. Even the operator's "scale to five" reaches the deployment controller through the same wake-up semaphore, with the command itself left in a segment.

The first version gave me the most useful information. I made a node fail the way I had in PAIRS: `EXTERMINATE` on the kubelet task in the middle of its work. At that moment the kubelet held the store's semaphore. The V never came, and the whole control plane got stuck solid: neither the scheduler nor the node controller, which was supposed to notice the loss, could get into the store again. Kubernetes on RED never had this problem, because there one process owns the store and the kubelet only exchanges messages with it. In THE the data is shared, and a process that dies inside a critical section takes everyone with it. Dijkstra wrote frankly that his group's first major mistake was designing for "a perfect installation" and thinking about failures too late. I repeated their mistake within the first five minutes :) Now a node goes dark between two passes of its loop, and the cluster moves its pods to the live nodes. [In GREEN](https://github.com/tym83/paleocomputing/blob/main/impl/ada-colors/os/the_kube_green.grn) the same design works, but the semaphores are server tasks again, and one run costs 1168 rendezvous.

## Ada 83, and what came back later

The winning Ada didn't become the Ada everyone knows right away. Four years of revisions separate the green language of spring 1979 from the 1983 standard, and I compare both of them with the red language.

To keep the comparison from being just talk, I took three examples from the RED labs and [wrote them in Ada 83](https://github.com/tym83/paleocomputing/tree/main/impl/ada-colors/ada83), and the project's CI builds these programs with the GNAT compiler in Ada 83 mode and checks their output.

The first example is a bounded buffer between a producer and a consumer. In RED it's one line, `VAR m : MAILBOX[INT](3)`, plus calls to `SEND` and `RECEIVE`. Ada 83 has no mailboxes, so the buffer is a server task with two entries that, in a loop, picks which entry it can accept right now: `PUT` while there's room, and `GET` while there's something to hand out. It comes to about thirty lines, which anyone who has written Ada has written hundreds of times.

The second is waiting for a reply with a timeout on the caller's side. In RED it's a `WAIT` with two branches. Ada 83 has a timed entry call for this, `select ... or delay ... end select`. But the green language of 1979 didn't have one at all, neither the timed call nor the conditional call. The Green Rationale explains this as a matter of principle: a task can be in only one queue at a time, so a caller doesn't choose among several waits. Four years later Ada partly abandoned that principle.

The third is a critical section. In RED it's `REGION`, which releases the lock however the body ends. In Ada 83 a lock is a task with entries `SEIZE` and `RELEASE`, and if an exception occurs between them, nobody will ever release the lock. You have to remember to do it in the handler, and the line `LOCK.RELEASE; -- forget this line and the next SEIZE waits forever` in my program is about exactly that.

Next to them there are [three more small examples](https://github.com/tym83/paleocomputing/tree/main/impl/ada-colors/os/contrast), each written three times: in RED, in GREEN of 1979 and on THE's semaphores alone.

The first example is about a timeout: the producer goes silent, and the consumer has to notice. In RED the consumer itself waits for an item, but no longer than thirty milliseconds. GREEN in 1979 has no timed entry call, so it's not the consumer that gives up but the buffer server: its `select` with a `delay` alternative tells the waiting caller that there is nothing. And in THE, P has no timeout at all, so a watchdog on the clock slips a fake item into the buffer to wake the consumer.

The second example is about failure under a lock. A RED `REGION` releases its lock on an exception, while a GREEN lock task and a THE semaphore stay taken, and the second worker waits forever.

The third is readers and a writer. In RED an exclusive `REGION` lines everyone up, and the work takes forty milliseconds. In GREEN the server owns the data and hands out copies, and the reading overlaps, finishing in thirteen milliseconds. On THE's semaphores, following Courtois, Heymans and Parnas in 1971, readers read together, but a late reader gets in ahead of a writer that is already waiting.

That makes three mechanisms, and each has its own answer to who owns the data, who decides that the wait is over, and what happens when one of them dies.

### What Ada won back later

And now the part that I think made the whole article worth writing. Put RED from 1979 next to the history of Ada up to the present day, and you get a strange picture: much of what the losing RED had at once, Ada spent years winning back bit by bit.

Both finalists had assertions; Steelman required them. Ada 83 dropped the `assert` statement; the word "assert" doesn't appear anywhere in the 1983 standard. The `Assert` pragma came back only in Ada 2005, twenty-six years later.

The rendezvous proved too heavy for protecting shared data. The [Ada 95 Rationale](https://www.adaic.org/resources/add_content/standards/95rat/rat95html/rat95-p2-9.html) says so in as many words: the very generality of the rendezvous means relatively high overhead, so protected objects are introduced, a lightweight, data-oriented synchronization mechanism. In essence that's the very same separate primitive construct for shared data that RED proposed. An important caveat: the Ada 95 Rationale names Hoare's conditional critical regions, monitors and the Orca language as the ancestors of protected objects, and doesn't mention RED once. So this isn't borrowing but convergence. Telling convergence, though.

I checked how heavy the rendezvous was where it was cheapest of all: on the Rational R1000, a machine built for Ada, whose tasks lived right in its microcode. The Danish computer museum brought one back to life and wrote an emulator that runs the real microcode cycle by cycle. I [booted the Rational Environment in it](https://github.com/tym83/paleocomputing/blob/main/impl/ada-colors/r1000/README.md) from the museum's disks, compiled a small Ada 83 test through the operator console and counted cycles. A procedure call cost the machine 2.75 microseconds, a rendezvous 55, about twenty calls. The same text built by GNAT on today's server calls a procedure in a little over a nanosecond and completes a rendezvous in 13.5 microseconds: ten thousand calls. Over those years a call became two thousand times cheaper, a rendezvous four times. Ada 95's protected objects arrived in a world where tasks no longer lived in microcode but in operating-system threads.

It goes further. The Ravenscar profile for high-integrity systems bans task entries outright, `Max_Task_Entries => 0`, which means the most safety-critical Ada simply has no rendezvous. Ada 2012 added bounded synchronized queues to the standard library, which functionally are a typed, bounded mailbox.

Another line is even more striking. Chapter thirteen of the RED manual describes user definitions for the language's special forms: your own assignment, automatic initialization and finalization, your own component selection and indexing operations, your own loop over a user-defined type, and your own literals. User-defined assignment and finalization came to Ada in 1995, user-defined indexing and iterators in 2012, user-defined literals in 2022. All that's missing is a user-defined `case`.

And one last thing that genuinely surprised me. The revision of Ada began in 1988, and around 1990 the design competition was won by an Intermetrics team, beating even the team of Ichbiah himself, who had led the GREEN project. The technical lead was Tucker Taft, and among the consultants was Ben Brosgol, who had led the Red project in 1979. Ichbiah took part as a reviewer and eventually left the project, disagreeing with the object model. So Ada 95 was designed by people from the company that lost in 1979. Taft himself joined Intermetrics in September 1980 and was never on the Red team, so there's no direct line of descent here. But the company, the culture and some of the people were the same.

## What if... the vote had gone the other way

Alternative history is a genre where it's easy to dream up anything at all, so I wore the tinfoil hat carefully and held on both to forks in the road that really existed and to mechanisms that can actually be traced. That gives two scenarios: the red language wins in May 1979, and the green language is frozen in the form it was handed in that March, without four years of polishing.

### A world where RED won

Let's start with what certainly wouldn't have changed. The DoD's Ada mandate lasted from 1987 to 1997, first as a directive and later even as a line in a law, and it was dropped not because of rendezvous or mailboxes but because the commercial market had moved toward C and C++, and requiring Ada had begun to cost more than the benefit it brought. Those economics didn't depend on the color of the language. So a red Ada would most likely have become the language of avionics, railways and space in exactly the same way, and in exactly the same way failed to become the language of everything else.

Inside that niche, though, a lot would have changed.

First and foremost, concurrency. In the red world there are two distinct mechanisms from day one: messages for tasks to talk to each other and critical sections for shared data. Ada spent sixteen years arriving at the same split, and another ten to drop the rendezvous entirely in its most high-integrity version. In the red world, the 1987 book by Burns, Lister and Wellings, "A Review of Ada Tasking," would have been about something else entirely. A different trouble would have taken its place, one that Per Brinch Hansen, who invented monitors together with Hoare, had already warned about. A critical section can be put anywhere, and in a large program they spread all over the code: every procedure takes the lock around shared data on its own, and you can no longer see who touches that data and when. A monitor cures this by gathering every operation on the shared data in one place. My guess is that by the mid-eighties red Ada would have gotten its own version of protected objects, only arriving from the other side, as a way of gathering scattered regions into a module.

Second, generics. Implicit instantiation at the call site, as in RED, was very convenient when I was writing a compiler in it. But it has a well-known price, which the world learned through C++ templates: errors that surface deep inside an instance, and code bloat. In the red world these problems would have shown up a decade earlier, in military projects with their certification requirements, and it may well have been there that someone first came up with what later became concepts. Especially since the `NEEDS` list was already a ready-made draft of concepts.

Third, the language industry itself. In [his history of C++](https://www.stroustrup.com/hopl2.pdf), Stroustrup writes plainly that after 1985 C++ was influenced by ideas from Ada, CLU (Barbara Liskov's language from MIT in the mid-seventies, where abstract data types, generics and exceptions first appeared) and ML, that he compared parameterized types and exceptions with Ada's, and that part of the inspiration for I/O streams came from the last page and a half of the 1979 Ada Rationale, which argued that type-safe and concise I/O was impossible. That was the Rationale of the Green design, printed in SIGPLAN Notices. In the red world, the RED Rationale would have been sitting there instead, and C++ templates would have been compared with a language where instances create themselves. C++ templates might even have turned out simpler, with no need to argue against Ada's explicit `new`.

Fourth, Oracle. Oracle's documentation still says outright that PL/SQL is based on Ada and stores programs in the database as DIANA trees, Ada's intermediate representation. DIANA was devised in January 1981 at a meeting whose participants included Nestor and Brosgol from the Red team. In the red world PL/SQL would have been built on RED, and every Oracle database today would hold procedures with capsules and `EXPOSE`. Maybe even with `DATA_LOCK` for row locking, who knows.

Fifth, VHDL. The Air Force commissioned the hardware description language in 1983 from a consortium of Intermetrics, TI and IBM, and Intermetrics was the language expert there. VHDL ended up looking a lot like Ada. The irony is that the losers' company built a hardware language modeled on the winning Green one. In the red world they would have been copying their own language, and VHDL processes might have communicated through mailboxes rather than signals.

And sixth, the one I least expected. Erlang. In the mid-eighties Ericsson compared languages for telephone exchanges, and Ada was on the list. Joe Armstrong [writes](https://www.labouseur.com/courses/erlang/history-of-erlang-armstrong.pdf) that he tried pipes first, threw them out and built mailboxes. It's tempting to say that in the red world Erlang would never have been needed. But that's not true: Erlang rests on process isolation, asynchronous copying message passing and failure handling, whereas RED has shared variables, and its mailboxes are bounded and blocking. So I'll put it more modestly: a red Ada would have been closer to Erlang than the green one, and might have shown the military and the railway people sooner that message-based systems outlive shared-memory systems. My three-hundred-line PAIRS operating system is about exactly that.

### A world where the green language was frozen in 1979

The second scenario is more modest, but more interesting than it looks. Imagine there had been no four years of polishing after the selection, and Ada 83 were simply Preliminary Ada from the spring of 1979.

Then Ada would have had an `assert` statement from the start, and the habit of checking your assumptions right in the code would have reached military software a quarter of a century earlier. There would have been fifteen specific exceptions instead of five, and programs would tell a range violation from an array bounds violation rather than catching everything with a single `CONSTRAINT_ERROR`. And there would have been the strict function purity rules, the very ones that forced the green compiler's parser to be written as procedures with out parameters.

There would have been no task types. You couldn't make an array of tasks or put a task inside a record, only task families and generic tasks. There'd be no timed entry call. There'd be no `terminate` alternative, so server tasks would have to be stopped explicitly. I think that's the first thing users would have demanded be fixed, and rightly so.

### What seems to me the main point

Setting the details aside, the difference between the red and green languages is the difference between two answers to the question of how many mechanisms a language needs. The Green team chose one universal mechanism, the rendezvous, and explained at length, and beautifully, why it was enough for everything. The Red team chose several specialized ones: messages, locks, user-defined schedulers, user-defined language forms. The green answer was easier to demonstrate and easier to learn. The red one proved closer to where the industry ended up later.

And this, I think, is a lesson not about 1979 but about any technological fork in the road, including today's. The winner isn't the design that holds up better under real load; it's the one that becomes understandable and stable first. And what lost doesn't go anywhere: fifteen to forty years later it comes back under a different name, and this time it's the winner who pays.

## Labs

As in the earlier parts, I wanted readers to be able not just to read about the language but to break something with their own hands. The [`impl/ada-colors/labs`](https://github.com/tym83/paleocomputing/blob/main/impl/ada-colors/labs/README.md) directory holds twelve RED exercises and a `check.sh` script that translates your version of a program, runs it and tells you whether you've completed the exercise. Each lab has a number and several levels: `look`, `change`, `break` and `build`. The number and the level are the arguments of `check.sh`, for example `labs/check.sh 03 look`. And since time in the programs is virtual and the scheduler is deterministic, you can compare your output with someone else's character for character.

Here's what's there:

- `01`: a capsule with a stack: add an exported function `peek`, then try to reach into the `top` field from outside and watch the compiler explain that the type is exported but its components aren't;
- `02`: a closed scope: remove a variable from `IMPORTS` and get rejected, then try assigning to a variable imported read-only;
- `03`: a mailbox: set its size to zero and see that the sender can no longer run ahead; that's a rendezvous;
- `04`: `WAIT`: lose a race to a timeout, then try waiting on a send to a zero-size mailbox and find out why RED forbids it;
- `05`: `REGION`: remove the exception handler and see how the runtime reports that all tasks are blocked;
- `06`: priorities: give tasks equal priorities and see first-come, first-served ordering;
- `07`: generics: write your own `max` for numbers and strings without instantiating anything by hand;
- `08`: a process pair: move the primary's death to a different request, then swap the reply and the checkpoint and catch the missing transfer with the audit;
- `09`: Kubernetes with a process-pair control plane: remove the queue draining in the node controller and get healthy nodes evicted after a failover;
- `10`: the compiler itself: add a built-in `MAX` function to `redc`, rebuild it and make sure the fixed point still holds;
- `11`: the 1979 program: drop one fix from the list and see which error in the original stops the translator;
- `12`: Dijkstra's THE: let the segment controller report every dump to the drum to the operator, and watch the whole system freeze, because the console needs the very controller that is waiting for it.

To run all of this, you only need a C compiler and make:

```sh
git clone https://github.com/tym83/paleocomputing
cd paleocomputing/impl/ada-colors
make                     # builds redc from the ready-made C file and checks the fixed point
red/tests/run.sh         # language tests
os/run.sh                # the operating systems and every Kubernetes variant in every language
labs/check.sh 03 look    # the mailbox lab
```

You can also translate and run a RED program without the labs:

```sh
build/redc < program.red > program.c
cc -std=gnu11 -Irt program.c rt/paleo.c -lpthread -lm -o program
./program
```

If you have Cozystack at hand, an open platform for building a cloud on Kubernetes, you don't need to install anything. The [application catalog](https://github.com/tym83/paleocomputing/blob/main/marketplace/README.md#the-unit-of-installation-is-a-repository) I put together for this series has an [environment for languages](https://github.com/tym83/paleocomputing/blob/main/marketplace/repos/languages/packages/apps/langpack/README.md#red-green-blue-and-yellow), and the languages arrived there as a separate container image: you specify the `ada-colors-run` image, put in a source file, and the program runs as a one-off Kubernetes Job whose output becomes its log. When the image is built, the compilers go the whole way again from the saved C file and check that they reproduce themselves.

The easiest way, though, is to open [the page in your browser](https://tym83.github.io/paleocomputing/red/). Everything happens right there, with no server. The translators, built to WebAssembly from the same C files, translate the source to C. Then clang, also built to WebAssembly, compiles that C, and the program runs so that every task gets its own thread and all the threads share one memory. The runtime is the same file as on Linux, with the same virtual clock, so the labs, the PAIRS kernel, Kubernetes in RED and in GREEN, the process-pair control plane and the [examples of chapter fourteen of the manual](https://github.com/tym83/paleocomputing/blob/main/impl/ada-colors/red/manual/README.md) print in the browser exactly what they print on an ordinary machine, byte for byte. CI checks it: it runs every example in headless Chrome and compares the output. The first run downloads the C compiler, about twenty megabytes, and after that the browser keeps it.

## What I'm taking with me

At the end of each part of the series I ask myself what's worth carrying over from what I found into today's infrastructure. This time there turned out to be a surprising number of such things.

First, keeping mechanisms separate. Messages serve communication, locks serve shared data, and neither mechanism pretends to be the other. Ada spent sixteen years arriving at the same place, and in the Kubernetes world we constantly see people trying to cover everything with one mechanism: a queue used as a database, or a database used as a queue. The Red team understood perfectly well in 1979 why that won't do.

Second, explicit interfaces to state. `IMPORTS` in RED annoyed me at first and then started helping me read and check my own code, even though in the compiler itself the simplest thing was to write `IMPORTS ALL` in most procedures. In infrastructure code, where controllers, operators and hooks all touch the same store, a list like that would be priceless, and in places it's effectively already being introduced through access rights and field-level restrictions.

Third, process pairs. This is probably the result I least expected. A Kubernetes control plane built as a Tandem-style pair, with no consensus, survived the death of the API server in the middle of a rollout, because the controllers compare states rather than react to events. For a single site, where there's often simply nowhere to get a three-node etcd quorum from, this is a serious alternative, and I want to test it not on a model but on a real cluster.

Fourth, deterministic time. Almost everything interesting in this article was found because any failure is reproducible down to the millisecond. That's how the unfair choice in `WAIT`, the bug with the aborted entry call and both traps in the node controller turned up. With real threads and real clocks I'd have spent weeks hunting for half of these, and the other half I'd never have found at all. For testing distributed infrastructure, I think this is the main lesson: first make time controllable, then go looking for bugs.

And fifth, not technical at all. Studying the losers is useful not out of nostalgia but so that you know in advance which ideas will come back, and don't pay for them a second time.

What's next. The reviewers' reports on the 1979 final, which decided between Red and Green, apparently still exist only on microfiche, cards of photographic film carrying reduced pages that you read through a magnifier, and Red's translator never turned up. If you have access to either, let me know.

The sources, tests, labs and all the notes are in the repository [github.com/tym83/paleocomputing](https://github.com/tym83/paleocomputing), under [`impl/ada-colors`](https://github.com/tym83/paleocomputing/blob/main/impl/ada-colors/README.md). If you find a mistake in my reading of the 1979 manuals, let me know; I'm genuinely curious.

Earlier parts of the paleocomputing series:

- [Part 1. Wirth's processor, Project Oberon, a new architecture in QEMU and KubeVirt, and running it in Cozystack and Kubernetes](https://aenix.io/blog/2026/09/nine-days-of-paleocomputing/)
- [Part 2. Kubernetes in Oberon, Wirth's radio instead of a network, and a cluster in your browser](https://aenix.io/blog/2026/10/kubernetes-over-wirths-radio/)
