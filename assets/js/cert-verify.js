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

  async function run() {
    var frag = location.hash.slice(1);            // берём как есть, без раскодирования
    if (!frag) {
      return say('', 'Ссылка неполная',
        '', 'Откройте ссылку целиком — ту, что выдана вместе с сертификатом. ' +
        'В ней после знака # идут данные и подпись, без них проверять нечего.');
    }
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
    if (rev === null || revAge > 7) {
      return say('', 'Подпись верна, список отзывов недоступен', rows,
        'Сама подпись в порядке. Но проверить, не отозван ли сертификат, сейчас не получилось — ' +
        'список не загрузился или давно не обновлялся.');
    }
    say('', 'Сертификат действителен', rows, 'Подпись верна, в списке отозванных не значится.');
  }
  run();
})();
