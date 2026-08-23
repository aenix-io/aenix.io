// Пробные вопросы. Весь пул открытый, поэтому он лежит прямо в странице —
// прятать нечего. Экзаменационный банк здесь не участвует.
(function () {
  var pool = window.__CCF_POOL__ || [];
  var root = document.getElementById('practice');
  if (!root) return;

  // Веса тем: форма повторяет структуру экзамена, чтобы тренировка учила не только
  // материалу, но и тому, из чего экзамен состоит.
  var QUOTA = { D1: 5, D2: 4, D3: 3, D4: 2, D5: 2, D6: 2, D7: 2 };

  function shuffle(a) {                    // Фишер — Йейтс на crypto-случайности
    var out = a.slice();
    for (var i = out.length - 1; i > 0; i--) {
      var r = new Uint32Array(1); crypto.getRandomValues(r);
      var j = r[0] % (i + 1); var t = out[i]; out[i] = out[j]; out[j] = t;
    }
    return out;
  }

  function buildForm() {
    var byDomain = {};
    pool.forEach(function (q) { (byDomain[q.domain] = byDomain[q.domain] || []).push(q); });
    var form = [];
    Object.keys(QUOTA).forEach(function (d) {
      form = form.concat(shuffle(byDomain[d] || []).slice(0, QUOTA[d]));
    });
    return shuffle(form).map(function (q) {
      // Варианты перемешиваются для каждого запуска: в исходном банке правильный
      // ответ часто стоит под одной и той же буквой, и это подсказка.
      return { q: q, opts: shuffle(q.options) };
    });
  }

  var form = buildForm(), idx = 0, right = 0, perDomain = {};

  function render() {
    if (idx >= form.length) return renderResult();
    var item = form[idx], q = item.q;
    root.innerHTML = '';
    var card = document.createElement('div'); card.className = 'q';
    var bar = document.createElement('div'); bar.className = 'q__bar';
    bar.innerHTML = '<span>Вопрос ' + (idx + 1) + ' из ' + form.length + '</span>' +
                    '<span>' + q.domain_name + '</span>';
    card.appendChild(bar);
    var stem = document.createElement('p'); stem.className = 'q__stem'; stem.textContent = q.stem;
    card.appendChild(stem);

    item.opts.forEach(function (o) {
      var lab = document.createElement('label');
      lab.className = 'q__opt'; lab.tabIndex = 0;
      lab.innerHTML = '<input type="radio" name="opt">';
      lab.appendChild(document.createTextNode(o.text));
      function pick() { answer(item, o, card); }
      lab.addEventListener('click', pick);
      lab.addEventListener('keydown', function (e) {
        if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); pick(); }
      });
      card.appendChild(lab);
    });
    root.appendChild(card);
    var first = card.querySelector('.q__opt'); if (first) first.focus();
  }

  function answer(item, chosen, card) {
    var q = item.q, ok = chosen.key === q.answer;
    if (ok) right++;
    var d = perDomain[q.domain] = perDomain[q.domain] || { ok: 0, all: 0 };
    d.all++; if (ok) d.ok++;

    var labels = card.querySelectorAll('.q__opt');
    item.opts.forEach(function (o, i) {
      var el = labels[i]; el.style.cursor = 'default';
      var clone = el.cloneNode(true); el.parentNode.replaceChild(clone, el); // снимаем обработчики
      if (o.key === q.answer) clone.className = 'q__opt q__opt--ok';
      else if (o === chosen) clone.className = 'q__opt q__opt--no';
    });
    if (q.rationale) {
      var why = document.createElement('p'); why.className = 'q__why';
      why.textContent = (ok ? 'Верно. ' : 'Неверно. ') + q.rationale;
      card.appendChild(why);
    }
    var next = document.createElement('button');
    next.className = 'cert__btn'; next.style.marginTop = '16px';
    next.textContent = idx + 1 < form.length ? 'Следующий вопрос' : 'Посмотреть итог';
    next.addEventListener('click', function () { idx++; render(); });
    card.appendChild(next); next.focus();
  }

  function renderResult() {
    // Ни процентов, ни сравнения с порогом: этот набор ничего не предсказывает.
    var rows = Object.keys(perDomain).map(function (d) {
      var v = perDomain[d];
      var name = (pool.find(function (q) { return q.domain === d; }) || {}).domain_name || d;
      return '<tr><td>' + name + '</td><td>' + v.ok + ' из ' + v.all + '</td></tr>';
    }).join('');
    root.innerHTML =
      '<div class="q"><h2 style="margin-top:0">Правильно ' + right + ' из ' + form.length + '</h2>' +
      '<table class="cert__facts">' + rows + '</table>' +
      '<p class="q__why">Это вопросы из модулей курса — вы уже видели их вместе с ответами. ' +
      'Они проверяют, что материал прочитан, и не предсказывают результат экзамена: там есть ' +
      'вопросы по ситуациям и вопросы с несколькими верными ответами, которых в этом наборе нет.</p>' +
      '<button class="cert__btn" id="again">Пройти ещё раз</button></div>';
    document.getElementById('again').addEventListener('click', function () {
      form = buildForm(); idx = 0; right = 0; perDomain = {}; render();
    });
  }

  render();
})();
