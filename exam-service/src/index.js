// Служба экзамена CCF. Cloudflare Worker + D1.
//
// Здесь живёт всё, чего не может статическая страница: банк вопросов, учётные записи,
// сессии, журнал и ключ подписи. Браузер получает по одному вопросу и никогда —
// правильный ответ.
import { buildForm, present, grade } from "./bank.js";
import { buildPayload, sign, certUrl, serial, expiryFrom } from "./cert.js";

const PASS_RATIO = 0.75;      // 45 из 60. Внутренний параметр: на страницах он не публикуется.
const EXAM_MINUTES = 90;
const MAX_ATTEMPTS = 2;       // на одну выдачу доступа; дальше пауза 90 дней
const COOLDOWN_DAYS = 7;

const json = (o, s = 200) => new Response(JSON.stringify(o), {
  status: s, headers: { "content-type": "application/json; charset=utf-8" } });
const now = () => Math.floor(Date.now() / 1000);

async function session(env, req) {
  const sid = (req.headers.get("cookie") || "").match(/ccf=([A-Za-z0-9_-]+)/)?.[1];
  if (!sid) return null;
  return await env.DB.prepare(
    "SELECT * FROM sessions WHERE id=? AND status='open'").bind(sid).first();
}

export default {
  async fetch(req, env) {
    const url = new URL(req.url);
    const p = url.pathname;

    // --- выдача приглашения (для того, кто выдаёт доступ) ----------------------
    // Здесь же фиксируется имя латиницей: оно попадёт в сертификат и кандидату
    // не редактируется. Если бы имя вводил он сам, один общий аккаунт выписывал бы
    // сертификаты на весь отдел.
    if (p === "/admin/invite" && req.method === "POST") {
      if (req.headers.get("authorization") !== `Bearer ${env.ADMIN_TOKEN}`)
        return json({ error: "нет доступа" }, 403);
      const { name, email, company } = await req.json();
      if (!name || !/^[A-Za-z .'-]{3,60}$/.test(name))
        return json({ error: "имя нужно латиницей, как в загранпаспорте" }, 400);

      const account = crypto.randomUUID();
      await env.DB.prepare(
        `INSERT INTO accounts (id,name,email,exam_version,attempts_used,seen_ids,created_at)
         VALUES (?,?,?,?,0,'[]',?)`)
        .bind(account, name, email || null, env.PLATFORM_VERSION, now()).run();

      // Талон живёт 72 часа. Пароль не выдаём вовсе: в переписке он остаётся навсегда,
      // а вместе с ним приходят хранение, сброс и повторная отправка.
      const token = [...crypto.getRandomValues(new Uint8Array(20))]
        .map((b) => "0123456789abcdefghjkmnpqrstvwxyz"[b % 32]).join("");
      await env.DB.prepare(
        "INSERT INTO invites (token,account_id,name,expires_at) VALUES (?,?,?,?)")
        .bind(token, account, name, now() + 72 * 3600).run();

      return json({
        account, name, company: company || null,
        invite_url: `${env.SERVICE_BASE}/enroll?t=${token}`,
        expires_in_hours: 72,
      });
    }

    // --- вход по пригласительной ссылке ---------------------------------------
    // Паролей не рассылаем: ссылка живёт 72 часа и обменивается на аккаунт. Это
    // снимает и хранение паролей, и пересылку их в переписке, и процедуру сброса.
    if (p === "/enroll" && req.method === "POST") {
      const { token } = await req.json();
      const inv = await env.DB.prepare(
        "SELECT * FROM invites WHERE token=? AND used_at IS NULL AND expires_at>?")
        .bind(token, now()).first();
      if (!inv) return json({ error: "ссылка недействительна или уже использована" }, 403);
      await env.DB.prepare("UPDATE invites SET used_at=? WHERE token=?").bind(now(), token).run();
      return json({ account: inv.account_id, name: inv.name });
    }

    // --- начало экзамена ------------------------------------------------------
    if (p === "/exam/start" && req.method === "POST") {
      const { account } = await req.json();
      const acc = await env.DB.prepare("SELECT * FROM accounts WHERE id=?").bind(account).first();
      if (!acc) return json({ error: "аккаунт не найден" }, 403);

      // Уже открытая сессия НЕ убивается: вход со второго устройства подхватывает её.
      // Иначе человек, открывший экзамен на телефоне, терял бы попытку.
      const open = await env.DB.prepare(
        "SELECT id FROM sessions WHERE account_id=? AND status='open'").bind(account).first();
      if (open) return json({ resumed: true, session: open.id });

      if (acc.attempts_used >= MAX_ATTEMPTS)
        return json({ error: "попытки исчерпаны, следующая выдача через 90 дней" }, 429);
      if (acc.last_attempt_at && now() - acc.last_attempt_at < COOLDOWN_DAYS * 86400)
        return json({ error: "между попытками должна пройти неделя" }, 429);

      const seen = JSON.parse(acc.seen_ids || "[]");
      const bank = JSON.parse(await env.BANK.get("ccf"));
      const form = buildForm(bank, seen, now());
      const sid = crypto.randomUUID();
      await env.DB.prepare(
        `INSERT INTO sessions (id,account_id,question_ids,seed,started_at,deadline_at,status)
         VALUES (?,?,?,?,?,?,'open')`)
        .bind(sid, account, JSON.stringify(form.map(q => q.id)), now(),
              now(), now() + EXAM_MINUTES * 60).run();
      await env.DB.prepare(
        "UPDATE accounts SET attempts_used=attempts_used+1, last_attempt_at=?, seen_ids=? WHERE id=?")
        .bind(now(), JSON.stringify([...new Set([...seen, ...form.map(q => q.id)])]), account).run();
      return json({ session: sid, deadline: now() + EXAM_MINUTES * 60 });
    }

    // --- текущее состояние: единственная ручка восстановления после обрыва ------
    if (p === "/exam/state") {
      const s = await session(env, req);
      if (!s) return json({ error: "сессия не найдена" }, 404);
      const answered = await env.DB.prepare(
        "SELECT idx, choice FROM answers WHERE session_id=?").bind(s.id).all();
      return json({ deadline: s.deadline_at, server_now: now(),
                    total: JSON.parse(s.question_ids).length, answers: answered.results });
    }

    // --- выдача вопроса -------------------------------------------------------
    if (p === "/exam/question") {
      const s = await session(env, req);
      if (!s) return json({ error: "сессия не найдена" }, 404);
      const idx = Number(url.searchParams.get("idx") || 0);
      const ids = JSON.parse(s.question_ids);
      if (idx < 0 || idx >= ids.length) return json({ error: "нет такого вопроса" }, 400);
      const bank = JSON.parse(await env.BANK.get("ccf"));
      const q = bank.find(x => x.id === ids[idx]);
      // Варианты перемешиваются от идентификатора сессии и номера вопроса: порядок
      // повторяем при возврате, но угадать его снаружи нельзя.
      const seed = [...s.id].reduce((a, c) => a + c.charCodeAt(0), 0) + idx;
      const { view } = present(q, seed);
      return json({ idx, total: ids.length, question: view, deadline: s.deadline_at,
                    server_now: now() });
    }

    // --- приём ответа ---------------------------------------------------------
    // Ответ фиксируется на сервере в момент отправки, а не в конце. Обрыв связи,
    // закрытая вкладка и перезагрузка страницы не стоят кандидату ничего.
    if (p === "/exam/answer" && req.method === "POST") {
      const s = await session(env, req);
      if (!s) return json({ error: "сессия не найдена" }, 404);
      if (now() > s.deadline_at + 30) return json({ error: "время вышло" }, 409);
      const { idx, choice } = await req.json();
      await env.DB.prepare(
        "INSERT INTO answers (session_id,idx,choice,answered_at) VALUES (?,?,?,?) " +
        "ON CONFLICT(session_id,idx) DO UPDATE SET choice=excluded.choice")
        .bind(s.id, idx, JSON.stringify(choice), now()).run();
      return json({ ok: true });
    }

    // --- подведение итога и выдача сертификата ---------------------------------
    if (p === "/exam/submit" && req.method === "POST") {
      const s = await session(env, req);
      if (!s) return json({ error: "сессия не найдена" }, 404);
      const ids = JSON.parse(s.question_ids);
      const bank = JSON.parse(await env.BANK.get("ccf"));
      const rows = await env.DB.prepare(
        "SELECT idx, choice FROM answers WHERE session_id=?").bind(s.id).all();
      const given = Object.fromEntries(rows.results.map(r => [r.idx, JSON.parse(r.choice)]));

      let right = 0; const byDomain = {};
      ids.forEach((qid, idx) => {
        const q = bank.find(x => x.id === qid);
        const seed = [...s.id].reduce((a, c) => a + c.charCodeAt(0), 0) + idx;
        const { map } = present(q, seed);
        const ok = grade(q, map, given[idx]);
        if (ok) right++;
        const d = byDomain[q.domain] = byDomain[q.domain] || { ok: 0, all: 0 };
        d.all++; if (ok) d.ok++;
      });

      const passed = right / ids.length >= PASS_RATIO;
      await env.DB.prepare(
        "UPDATE sessions SET status='done', score=?, passed=? WHERE id=?")
        .bind(right, passed ? 1 : 0, s.id).run();

      // По темам — качественная полоса, не баллы: разбивку по доменам программа
      // не публикует, но человек должен знать, что перечитать за неделю ожидания.
      const topics = Object.fromEntries(Object.entries(byDomain).map(([d, v]) => {
        const r = v.ok / v.all;
        return [d, r >= 0.8 ? "выше ожидаемого" : r >= 0.6 ? "на уровне" : "ниже ожидаемого"];
      }));

      if (!passed) return json({ passed: false, score: right, total: ids.length, topics });

      const acc = await env.DB.prepare("SELECT * FROM accounts WHERE id=?")
        .bind(s.account_id).first();
      const issued = new Date().toISOString().slice(0, 10);
      const sn = serial();
      const payload = buildPayload({
        kid: env.SIGNING_KID, exam: "CCF", level: "Fundamentals",
        platform: env.PLATFORM_VERSION, serial: sn,
        name: acc.name,                       // имя из записи аккаунта, не из ввода кандидата
        issued, expires: expiryFrom(issued), beta: true,
      });
      const token = await sign(payload, Uint8Array.from(atob(env.SIGNING_KEY), c => c.charCodeAt(0)));
      // Журнал выдачи. Проверяющему база не нужна — нам нужна: без неё нет ни отзыва,
      // ни ответа на запрос об удалении данных, ни восстановления потерянной ссылки.
      await env.DB.prepare(
        `INSERT INTO certificates (serial,account_id,name,kid,issued_at,expires_at,status)
         VALUES (?,?,?,?,?,?,'valid')`)
        .bind(sn, s.account_id, acc.name, env.SIGNING_KID, issued, expiryFrom(issued)).run();
      return json({ passed: true, score: right, total: ids.length, topics,
                    serial: sn, url: certUrl(env.SITE_BASE, token) });
    }

    return json({ error: "not found" }, 404);
  },
};
