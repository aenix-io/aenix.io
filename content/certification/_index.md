---
title: "Ænix Certification for Cozystack"
description: "A program for engineers who work with the platform: a course, labs, a first-level exam and a certificate you can show an employer."
eyebrow: "Certification program · first level"
layout: "cert-page"
language: "en"
url: "/certification/"
hreflang_ru: "/ru/certification/"
page_type: "flag-page"
---

Certification confirms that a person understands how Cozystack is built and how to work
in it. The first level is called **CCF — Fundamentals**, the first level of the **Ænix Certification for Cozystack** program: it
tests knowledge of the platform, not the ability to fix it at three in the morning. It is the entry point to the program,
and more serious levels come after it.

{{< cert-cards >}}

## What to expect

We'll lay it all out upfront, so you decide with your eyes open rather than find out halfway through.

<table class="cert__facts">
<tr><td>Preparation</td><td>seven lessons and a cheat sheet, about an hour and a half of reading — one evening. New to Kubernetes: about ten hours on its basics first. Labs are separate, roughly six or seven evenings</td></tr>
<tr><td>Exam</td><td>60 multiple-choice questions, 90 minutes</td></tr>
<tr><td>Exam language</td><td>English. If it is not your native language, ask for an extra 30 minutes — this is a standard request, not a favor</td></tr>
<tr><td>Price</td><td>free</td></tr>
<tr><td>Proctoring</td><td>none. This is an entry level, and it is honestly built as one</td></tr>
<tr><td>Result</td><td>“pass” or “fail” with an overall score. For each topic, how ready you are for it, so you know what to reread</td></tr>
<tr><td>Attempts</td><td>two, a week apart. If neither works out, a three-month pause, then two more</td></tr>
<tr><td>Certificate</td><td>valid for 24 months, renewed by passing the next level</td></tr>
</table>

**The program is currently in beta.** The question bank is still growing, and the passing score will be refined
based on data from real attempts. This does not affect how long your certificate is valid: one issued during
the beta is valid for the same 24 months.

## The labs are not part of the exam

The fifteen labs on migrating from VMware are a separate thing. The exam does not
require them, and the reverse is also true: completed labs do not replace the exam.

They earn a **badge**, and it says exactly what it says: the person did the work
hands-on. You assemble the results file on your own machine, and we cannot verify that —
so the badge is not a certificate and does not pretend to be one.

The labs are worth doing before the exam: half the questions will become obvious, because you have already
done these things.

## I'm a VMware administrator and barely know Kubernetes

That's a normal way into the program, and your route looks like this.

1. **Kubernetes fundamentals.** About ten hours with the official Kubernetes documentation. Without it the
   rest will be hard going; the last lesson then recaps the terms the exam asks about.
2. **Lessons one through seven, then the cheat sheet.** Architecture, tenants, the managed applications catalog,
   virtual machines, networking, observability and backups, how it all works. The virtual machines lesson is
   your bridge from vSphere: where the analogy holds and where it misleads.
3. **Labs.** This is where everything you've read becomes hands-on for the first time.
4. **The exam.**

## If you don't pass

The second attempt comes a week later. It is not a punishment and it costs nothing.

Between attempts you will see which topics you fell short on — not as scores, but in words: “below
expected”, “at expected”, “above”. That is enough to work out which two lessons
to reread.

If the exam broke off through our fault — connectivity, a service error, anything on our side —
the retake is free and does not use up an attempt. You don't need to argue it out over email;
the procedure is described in the rules.

## What you need on your laptop

For the exam, just a browser.

For the labs: `kubectl`, `kubelogin`, `git`, and for some labs also `docker` and `flux`.
On Windows you need WSL: without it you can still do the labs, but the automated check will not run and the
results file will not be assembled.

The cluster for the labs is your own. If you don't have one, write to us: we have a training environment, but
it is limited, and tenants on it are handed out in turn.
