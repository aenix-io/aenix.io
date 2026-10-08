---
title: "CCF exam"
description: "Ænix Certification for Cozystack — Fundamentals — 60 questions, 90 minutes. Access required."
eyebrow: "Ænix Certification for Cozystack — Fundamentals · beta"
layout: "cert-page"
language: "en"
url: "/certification/exam/"
hreflang_ru: "/ru/certification/exam/"
page_type: "flag-page"
---

The exam is 60 questions, 90 minutes. You sign in with a login and password: we issue them personally, one person — one account.

<div class="cert-note" style="background:#fff7ed;border:1px solid #fed7aa;color:#9a3412;border-radius:10px;padding:14px 16px;margin:18px 0">
  <strong>Get your login and password first.</strong> Timur issues them personally — message
  <a href="https://t.me/tym83" target="_blank" rel="noopener"><strong>@tym83 on Telegram</strong></a> or
  <a href="https://www.linkedin.com/in/timur-tukaev/" target="_blank" rel="noopener"><strong>Timur Tukaev on LinkedIn</strong></a>.
  You will need your name in Latin script — it goes on the certificate and cannot be changed afterwards.
</div>

Managers enrolling a team can also [contact us](/contact/) with the number of engineers and their names in Latin script.

<button id="exam-open" style="width:100%;max-width:420px;display:block;padding:16px 20px;font-size:18px;font-weight:700;color:#fff;background:#2f6fed;border:0;border-radius:12px;cursor:pointer">Start the exam →</button>

<div id="exam-modal" style="display:none;position:fixed;inset:0;background:rgba(15,23,42,.55);z-index:1000;align-items:center;justify-content:center;padding:16px">
  <div style="background:#fff;max-width:460px;width:100%;border-radius:16px;padding:24px;box-shadow:0 20px 60px rgba(0,0,0,.25)">
    <div style="display:flex;align-items:center;margin-bottom:6px">
      <h3 style="margin:0;font-size:19px">Sign in to the exam</h3>
      <button id="exam-close" style="margin-left:auto;background:#fff;border:0;font-size:22px;color:#64748b;cursor:pointer;padding:0 4px">×</button>
    </div>
    <div style="background:#fff7ed;border:1px solid #fed7aa;color:#9a3412;border-radius:10px;padding:12px 14px;font-size:14px;margin:10px 0 16px">
      <strong>No login and password?</strong> Message
      <a href="https://t.me/tym83" target="_blank" rel="noopener"><strong>@tym83 (Telegram)</strong></a> or
      <a href="https://www.linkedin.com/in/timur-tukaev/" target="_blank" rel="noopener"><strong>Timur Tukaev (LinkedIn)</strong></a> — we issue them personally.
    </div>
    <label style="display:block;font-weight:600;font-size:14px;margin-bottom:6px">Login</label>
    <input id="exam-login" type="text" autocomplete="username" placeholder="e.g. ccf-ab12cd" style="width:100%;padding:11px 12px;border:1px solid #e2e8f0;border-radius:9px;font-size:16px;box-sizing:border-box">
    <label style="display:block;font-weight:600;font-size:14px;margin:14px 0 6px">Password</label>
    <input id="exam-pass" type="password" autocomplete="current-password" style="width:100%;padding:11px 12px;border:1px solid #e2e8f0;border-radius:9px;font-size:16px;box-sizing:border-box">
    <div id="exam-err" style="color:#dc2626;font-size:14px;min-height:20px;margin-top:10px"></div>
    <button id="exam-go" style="width:100%;padding:13px;font-size:16px;font-weight:700;color:#fff;background:#2f6fed;border:0;border-radius:10px;cursor:pointer">Sign in and start</button>
  </div>
</div>

<script>
(function () {
  var EXAM = "https://exam.cert.workshop.aenix.io";
  var $ = function (id) { return document.getElementById(id); };
  var modal = $("exam-modal");
  var openM = function () { modal.style.display = "flex"; setTimeout(function () { $("exam-login").focus(); }, 50); };
  var closeM = function () { modal.style.display = "none"; $("exam-err").textContent = ""; };
  $("exam-open").addEventListener("click", openM);
  $("exam-close").addEventListener("click", closeM);
  modal.addEventListener("click", function (e) { if (e.target === modal) closeM(); });
  async function go() {
    $("exam-err").textContent = "";
    var login = $("exam-login").value.trim(), password = $("exam-pass").value;
    if (!login || !password) { $("exam-err").textContent = "Enter your login and password."; return; }
    $("exam-go").disabled = true;
    try {
      var r = await fetch(EXAM + "/login", { method: "POST", headers: { "content-type": "application/json" },
        body: JSON.stringify({ login: login, password: password }) });
      var d = await r.json().catch(function () { return {}; });
      if (!r.ok) { $("exam-err").textContent = d.error || "Incorrect login or password."; $("exam-go").disabled = false; return; }
      // The service no longer needs the password: send the user to the exam with the account in the fragment.
      var frag = "#a=" + encodeURIComponent(d.account) + (d.name ? "&n=" + encodeURIComponent(d.name) : "");
      window.location.href = EXAM + "/" + frag;
    } catch (e) {
      $("exam-err").textContent = "The service is unavailable. Try again later or message @tym83.";
      $("exam-go").disabled = false;
    }
  }
  $("exam-go").addEventListener("click", go);
  $("exam-pass").addEventListener("keydown", function (e) { if (e.key === "Enter") go(); });
})();
</script>

## Before you start

**Make sure you have an hour and a half in one sitting.** The clock runs on the server and does not
stop while you are away. A dropped connection is not a problem — answers are saved immediately, and you
will return to the same question — but the time keeps running meanwhile.

**The exam is in English.** If it is not your native language, ask for an extra 30 minutes in advance,
not during the exam.

**It is better to take it on a computer.** A phone technically works, but reading the
wording on a small screen for an hour and a half is a dubious pleasure.

## What it looks like

Sixty questions, one at a time. You can see which question you are on and how much time is left. You can
skip a question and come back to it.

Answer options are shuffled: in the source set the correct answer often sits under the same
letter, and we remove that hint.

The questions themselves are also different for each person — they are drawn from a shared pool so that the topic weights
match. Two people sitting side by side will see different forms.

## After the last question

The result appears immediately: pass or fail, with an overall score and an assessment for each topic — not as
scores, but in words: “below expected”, “at expected”, “above”. That is enough to work out
what to reread if the attempt did not work out.

If you passed, the certificate link is right there. Save it: the link is the certificate.
If you lose it, we will restore it, but it is easier not to lose it.

## What counts and what doesn't

The passing score is not published. This is not an evasion: a published number becomes a promise
that cannot be moved once data from real attempts comes in — and it will have to be moved.
The threshold will be set by a panel of engineers based on the beta statistics.

Prepare to know the material. All the [rules](/certification/rules/) are on a separate page.
