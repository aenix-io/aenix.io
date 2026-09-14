// Проверка сертификата. Никаких обращений наружу, кроме списка отозванных.
(function () {
  var KEYS = window.__CERT_KEYS__ || [];
  var REVOKED_URL = '/certification/revoked.json';
  var out = document.getElementById('verify');
  if (!out) return;

  function b64uToBytes(s) {
    s = s.replace(/-/g, '+').replace(/_/g, '/');
    while (s.length % 4) s += '=';
    var bin = atob(s), a = new Uint8Array(bin.length);
    for (var i = 0; i < bin.length; i++) a[i] = bin.charCodeAt(i);
    return a;
  }
  function say(cls, title, rows, note) {
    out.innerHTML = '<div class="q"><h2 style="margin-top:0">' + title + '</h2>' +
      (rows ? '<table class="cert__facts">' + rows + '</table>' : '') +
      (note ? '<p class="q__why">' + note + '</p>' : '') + '</div>';
    out.className = cls;
  }
  function esc(s) {
    return String(s).replace(/[<>&"]/g, function (c) {
      return { '<': '&lt;', '>': '&gt;', '&': '&amp;', '"': '&quot;' }[c];
    });
  }

  // Ed25519 в браузере появился поздно: Safari 17, Firefox 130, Chrome 137.
  // Если его нет, мы честно говорим «проверить не удалось» и отличаем это от
  // «подпись неверна» — иначе старый браузер объявлял бы честный сертификат поддельным.
  function ed25519Supported() {
    return !!(crypto && crypto.subtle && crypto.subtle.importKey);
  }
  async function verifySig(pubRaw, msgBytes, sigBytes) {
    var k = await crypto.subtle.importKey('raw', pubRaw, { name: 'Ed25519' }, false, ['verify']);
    return await crypto.subtle.verify({ name: 'Ed25519' }, k, sigBytes, msgBytes);
  }

  function rowsPreview(c) {
    return '<tr><td>Имя в сертификате</td><td>' + esc(c.name) + '</td></tr>' +
           '<tr><td>Номер</td><td>' + esc(c.serial) + '</td></tr>';
  }

  // Рисуем именной сертификат на canvas и отдаём PNG. Всё локально: под CSP
  // (script-src 'self', img-src 'self' data:) внешних ресурсов и шрифтов нет.
  function certCanvas(c) {
    var W = 1600, H = 1131, S = 2;
    var cv = document.createElement('canvas'); cv.width = W * S; cv.height = H * S;
    var x = cv.getContext('2d'); x.scale(S, S);
    x.fillStyle = '#ffffff'; x.fillRect(0, 0, W, H);
    x.strokeStyle = '#2f6fed'; x.lineWidth = 6; x.strokeRect(46, 46, W - 92, H - 92);
    x.strokeStyle = '#c9d6f0'; x.lineWidth = 2; x.strokeRect(64, 64, W - 128, H - 128);
    function t(str, y, font, color, align) {
      x.font = font; x.fillStyle = color; x.textAlign = align || 'center';
      x.fillText(str, align === 'left' ? 150 : (align === 'right' ? W - 150 : W / 2), y);
    }
    t('Ænix', 150, '700 44px Georgia, "Times New Roman", serif', '#0f172a');
    t('Certification for Cozystack', 190, '400 20px Arial, sans-serif', '#64748b');
    t('CERTIFICATE OF ACHIEVEMENT', 330, '700 46px Georgia, serif', '#0f172a');
    t('This certifies that', 405, '400 22px Arial, sans-serif', '#64748b');
    t(c.name, 480, '700 60px Georgia, serif', '#2f6fed');
    t('has successfully completed', 552, '400 22px Arial, sans-serif', '#64748b');
    t(c.exam + ' — ' + c.level, 608, '600 28px Arial, sans-serif', '#0f172a');
    t('Platform version ' + c.platform, 648, '400 20px Arial, sans-serif', '#64748b');
    // факты
    x.strokeStyle = '#e2e8f0'; x.lineWidth = 1;
    x.beginPath(); x.moveTo(150, 760); x.lineTo(W - 150, 760); x.stroke();
    t('Certificate No.', 815, '400 18px Arial', '#94a3b8', 'left');
    t(c.serial, 845, '600 24px Arial', '#0f172a', 'left');
    t('Issued', 815, '400 18px Arial', '#94a3b8', 'center');
    t(c.issued + (c.beta ? '  (beta)' : ''), 845, '600 24px Arial', '#0f172a', 'center');
    t('Valid until', 815, '400 18px Arial', '#94a3b8', 'right');
    t(c.expires, 845, '600 24px Arial', '#0f172a', 'right');
    t('Issued by ' + c.issuer, 960, '400 22px Arial', '#334155');
    t('Verify at aenix.io/certification/verify  ·  ' + c.serial, 1010, '400 17px Arial', '#94a3b8');
    return cv;
  }
  function downloadCert(c) {
    var cv = certCanvas(c);
    var name = 'Aenix-' + c.serial + '.png';
    cv.toBlob(function (b) {
      if (!b) { var u0 = cv.toDataURL('image/png'); var a0 = document.createElement('a'); a0.href = u0; a0.download = name; a0.click(); return; }
      var u = URL.createObjectURL(b), a = document.createElement('a');
      a.href = u; a.download = name; document.body.appendChild(a); a.click(); a.remove();
      setTimeout(function () { URL.revokeObjectURL(u); }, 1500);
    }, 'image/png');
  }
  function addDownload(c) {
    var b = document.createElement('button');
    b.textContent = 'Скачать сертификат (PNG)';
    b.style.cssText = 'margin-top:18px;padding:12px 20px;font-weight:600;color:#fff;background:#2f6fed;border:0;border-radius:9px;cursor:pointer;font-size:15px';
    b.addEventListener('click', function () { downloadCert(c); });
    var q = out.querySelector('.q') || out; q.appendChild(b);
  }

  // Поиск по номеру: резолвим serial -> token в exam-службе (CORS разрешён для aenix.io,
  // exam-хост добавлен в connect-src), затем показываем как обычную проверку по токену.
  function setupSerial() {
    var EXAM = "https://exam.cert.workshop.aenix.io";
    var inp = document.getElementById('serial-in'), btn = document.getElementById('serial-go'), serr = document.getElementById('serial-err');
    if (!btn || !inp) return;
    async function go() {
      serr.textContent = '';
      var s = (inp.value || '').trim().toUpperCase();
      if (!s) { serr.textContent = 'Введите номер сертификата.'; return; }
      btn.disabled = true;
      try {
        var r = await fetch(EXAM + '/cert?serial=' + encodeURIComponent(s));
        var d = await r.json().catch(function () { return {}; });
        if (!r.ok || !d.token) { serr.textContent = (d && d.error) || 'Сертификат с таким номером не найден.'; btn.disabled = false; return; }
        location.hash = d.token; location.reload();
      } catch (e) { serr.textContent = 'Служба проверки недоступна. Попробуйте позже.'; btn.disabled = false; }
    }
    btn.addEventListener('click', go);
    inp.addEventListener('keydown', function (e) { if (e.key === 'Enter') go(); });
  }

  async function run() {
    var frag = location.hash.slice(1);            // берём как есть, без раскодирования
    if (!frag) {
      return say('', 'Ссылка неполная',
        '', 'Откройте ссылку целиком — ту, что выдана вместе с сертификатом. ' +
        'В ней после знака # идут данные и подпись, без них проверять нечего.');
    }
    // Токен есть — это проверка конкретного сертификата, а не посадочная.
    // Прячем общий подзаголовок и блок «поиск по номеру», чтобы не мозолили глаза.
    var _lead = document.querySelector('.lead'); if (_lead) _lead.style.display = 'none';
    var dot = frag.lastIndexOf('.');
    if (dot < 1 || !/^[A-Za-z0-9_.\-]+$/.test(frag)) {
      return say('', 'Ссылка испорчена', '', 'Похоже, при копировании часть ссылки потерялась.');
    }
    var payloadB64 = frag.slice(0, dot), sigB64 = frag.slice(dot + 1);
    var msg = new TextEncoder().encode(payloadB64);   // подписаны байты строки как она пришла
    var sig; try { sig = b64uToBytes(sigB64); } catch (e) { sig = null; }
    if (!sig || sig.length !== 64) {
      return say('', 'Подпись не читается', '', 'Ссылка повреждена или это не наш сертификат.');
    }

    var data; try { data = JSON.parse(new TextDecoder().decode(b64uToBytes(payloadB64))); }
    catch (e) { return say('', 'Данные не читаются', '', 'Ссылка повреждена.'); }
    if (!Array.isArray(data) || data.length < 10) {
      return say('', 'Неизвестный формат', '', 'Эта ссылка выдана не нашей системой.');
    }
    var c = { ver: data[0], kid: data[1], issuer: data[2], exam: data[3], level: data[4],
              platform: data[5], serial: data[6], name: data[7], issued: data[8],
              expires: data[9], beta: !!data[10] };

    var key = KEYS.filter(function (k) { return k.kid === c.kid; })[0];
    if (!key) return say('', 'Ключ неизвестен', '', 'Сертификат подписан ключом, которого нет в нашем реестре.');
    // Срок ключа сверяем с датой ВЫДАЧИ, а не с сегодняшним днём: иначе в день
    // истечения ключа разом стали бы недействительны все выданные им сертификаты.
    if (c.issued < key.not_before || c.issued > key.not_after) {
      return say('', 'Сертификат не подтверждён', '', 'Дата выдачи не попадает в срок действия ключа.');
    }

    var ok = false;
    try { ok = await verifySig(b64uToBytes(key.pub), msg, sig); }
    catch (e) {
      return say('', 'Проверить не удалось', rowsPreview(c),
        'Ваш браузер не умеет проверять подпись такого типа. Это не значит, что сертификат ' +
        'плохой — откройте ссылку в свежем Chrome, Safari или Firefox.');
    }
    if (!ok) return say('', 'Подпись неверна', '', 'Данные не соответствуют подписи. Сертификат недействителен.');

    var rows =
      '<tr><td>Имя</td><td><strong>' + esc(c.name) + '</strong></td></tr>' +
      '<tr><td>Экзамен</td><td>' + esc(c.exam) + ' — ' + esc(c.level) + '</td></tr>' +
      '<tr><td>Версия платформы</td><td>' + esc(c.platform) + '</td></tr>' +
      '<tr><td>Номер</td><td>' + esc(c.serial) + '</td></tr>' +
      '<tr><td>Выдан</td><td>' + esc(c.issued) + (c.beta ? ' (бета-волна)' : '') + '</td></tr>' +
      '<tr><td>Действует до</td><td>' + esc(c.expires) + '</td></tr>' +
      '<tr><td>Кто выдал</td><td>' + esc(c.issuer) + '</td></tr>' +
      '<tr><td>Проверено ключом</td><td>' + esc(key.kid) + ' · ' + esc(key.fp) + '</td></tr>';

    var today = new Date().toISOString().slice(0, 10);
    if (c.expires < today) {
      return say('', 'Срок действия истёк', rows,
        'Подпись верна, но сертификат просрочен. Он продлевается сдачей следующей ступени.');
    }

    // Список отозванных. Недоступен или устарел — говорим об этом прямо,
    // а не выдаём зелёную галочку по умолчанию.
    var rev = null, revAge = null;
    try {
      var r = await fetch(REVOKED_URL, { cache: 'no-cache' });
      if (r.ok) {
        var j = await r.json();
        if (Array.isArray(j.revoked) && j.generated_at) {
          rev = j.revoked;
          revAge = (Date.now() - Date.parse(j.generated_at)) / 86400000;
        }
      }
    } catch (e) { /* оставляем rev = null */ }

    if (rev && rev.indexOf(c.serial) !== -1) {
      return say('', 'Сертификат отозван', rows, 'Этот номер внесён в список отозванных.');
    }
    if (rev === null || revAge > 60) {
      say('', 'Подпись верна, список отзывов недоступен', rows,
        'Сама подпись в порядке. Но проверить, не отозван ли сертификат, сейчас не получилось — ' +
        'список не загрузился или давно не обновлялся.');
      addDownload(c); return;
    }
    say('', 'Сертификат действителен', rows, 'Подпись верна, в списке отозванных не значится.');
    addDownload(c);
  }
  run();
  setupSerial();
})();
