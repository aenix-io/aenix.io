---
title: "Экзамен CCF"
description: "Ænix Certification for Cozystack — Fundamentals — 60 вопросов, 90 минут. Нужен доступ."
eyebrow: "Ænix Certification for Cozystack — Fundamentals · бета"
layout: "cert-page"
language: "ru"
url: "/certification/exam/"
---

Экзамен — 60 вопросов, 90 минут. Вход по логину и паролю: их выдаём лично, один человек — один аккаунт.

<div class="cert-note" style="background:#fff7ed;border:1px solid #fed7aa;color:#9a3412;border-radius:10px;padding:14px 16px;margin:18px 0">
  <strong>Сначала получите логин и пароль.</strong> Их выдаёт Тимур лично — напишите
  <a href="https://t.me/tym83" target="_blank" rel="noopener"><strong>@tym83 в Telegram</strong></a> или
  <a href="https://www.linkedin.com/in/timur-tukaev/" target="_blank" rel="noopener"><strong>Timur Tukaev в LinkedIn</strong></a>.
  Понадобится имя латиницей — оно попадёт в сертификат и потом не меняется.
</div>

<button id="exam-open" style="width:100%;max-width:420px;display:block;padding:16px 20px;font-size:18px;font-weight:700;color:#fff;background:#2f6fed;border:0;border-radius:12px;cursor:pointer">Начать экзамен →</button>

<div id="exam-modal" style="display:none;position:fixed;inset:0;background:rgba(15,23,42,.55);z-index:1000;align-items:center;justify-content:center;padding:16px">
  <div style="background:#fff;max-width:460px;width:100%;border-radius:16px;padding:24px;box-shadow:0 20px 60px rgba(0,0,0,.25)">
    <div style="display:flex;align-items:center;margin-bottom:6px">
      <h3 style="margin:0;font-size:19px">Вход на экзамен</h3>
      <button id="exam-close" style="margin-left:auto;background:#fff;border:0;font-size:22px;color:#64748b;cursor:pointer;padding:0 4px">×</button>
    </div>
    <div style="background:#fff7ed;border:1px solid #fed7aa;color:#9a3412;border-radius:10px;padding:12px 14px;font-size:14px;margin:10px 0 16px">
      <strong>Нет логина и пароля?</strong> Напишите
      <a href="https://t.me/tym83" target="_blank" rel="noopener"><strong>@tym83 (Telegram)</strong></a> или
      <a href="https://www.linkedin.com/in/timur-tukaev/" target="_blank" rel="noopener"><strong>Timur Tukaev (LinkedIn)</strong></a> — выдаём лично.
    </div>
    <label style="display:block;font-weight:600;font-size:14px;margin-bottom:6px">Логин</label>
    <input id="exam-login" type="text" autocomplete="username" placeholder="напр. ccf-ab12cd" style="width:100%;padding:11px 12px;border:1px solid #e2e8f0;border-radius:9px;font-size:16px;box-sizing:border-box">
    <label style="display:block;font-weight:600;font-size:14px;margin:14px 0 6px">Пароль</label>
    <input id="exam-pass" type="password" autocomplete="current-password" style="width:100%;padding:11px 12px;border:1px solid #e2e8f0;border-radius:9px;font-size:16px;box-sizing:border-box">
    <div id="exam-err" style="color:#dc2626;font-size:14px;min-height:20px;margin-top:10px"></div>
    <button id="exam-go" style="width:100%;padding:13px;font-size:16px;font-weight:700;color:#fff;background:#2f6fed;border:0;border-radius:10px;cursor:pointer">Войти и начать</button>
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
    if (!login || !password) { $("exam-err").textContent = "Введите логин и пароль."; return; }
    $("exam-go").disabled = true;
    try {
      var r = await fetch(EXAM + "/login", { method: "POST", headers: { "content-type": "application/json" },
        body: JSON.stringify({ login: login, password: password }) });
      var d = await r.json().catch(function () { return {}; });
      if (!r.ok) { $("exam-err").textContent = d.error || "Неверный логин или пароль."; $("exam-go").disabled = false; return; }
      // Пароль на службу больше не нужен: уводим в экзамен с аккаунтом во фрагменте.
      var frag = "#a=" + encodeURIComponent(d.account) + (d.name ? "&n=" + encodeURIComponent(d.name) : "");
      window.location.href = EXAM + "/" + frag;
    } catch (e) {
      $("exam-err").textContent = "Служба недоступна. Попробуйте позже или напишите @tym83.";
      $("exam-go").disabled = false;
    }
  }
  $("exam-go").addEventListener("click", go);
  $("exam-pass").addEventListener("keydown", function (e) { if (e.key === "Enter") go(); });
})();
</script>

## Перед тем как начать

**Проверьте, что у вас есть полтора часа подряд.** Часы идут на сервере и не
останавливаются, пока вас нет. Обрыв связи не страшен — ответы записываются сразу, и вы
вернётесь на тот же вопрос, — но время при этом продолжает идти.

**Экзамен на английском.** Если он вам не родной, попросите дополнительные 30 минут заранее,
а не в процессе.

**Сдавать лучше с компьютера.** С телефона технически можно, но полтора часа читать
формулировки с маленького экрана — сомнительное удовольствие.

## Как это выглядит

Шестьдесят вопросов по одному. Видно, какой по счёту и сколько осталось времени. Можно
пропустить и вернуться.

Варианты ответов перемешиваются: в исходном наборе правильный часто стоит под одной и той
же буквой, и мы эту подсказку убираем.

Сами вопросы тоже у каждого свои — выбираются из общего набора так, чтобы веса тем
совпадали. Два человека, сдающие рядом, увидят разные формы.

## После последнего вопроса

Результат появится сразу: сдал или нет, с общим баллом и с оценкой по каждой теме — не в
баллах, а словами «ниже ожидаемого», «на уровне», «выше». Этого достаточно, чтобы понять,
что перечитать, если попытка не вышла.

Если сдали — тут же ссылка на сертификат. Её стоит сохранить: она и есть сертификат.
Потеряете — восстановим, но проще не терять.

## Что засчитывается, а что нет

Проходной балл не публикуется. Это не увёртка: опубликованное число становится обещанием,
которое нельзя сдвинуть, когда появятся данные реальных попыток, — а сдвинуть придётся.
Порог выставит коллегия инженеров по статистике беты.

Готовьтесь знать материал. Все [правила](/certification/rules/) — на отдельной странице.
