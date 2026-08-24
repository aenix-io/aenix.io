// Служба экзамена: обычный HTTP-сервер на Node, без внешних зависимостей.
// Разворачивается на Cozystack как рядовое приложение; хранилище — Postgres из
// каталога, а для запуска без него есть режим в памяти (см. STORE ниже).
import http from "node:http";
import fs from "node:fs";
import { buildForm, present, grade } from "./bank.js";
import { buildPayload, sign, certUrl, serial, expiryFrom, PROGRAM } from "./cert.js";

const PASS_RATIO = 0.75;      // 45 из 60; на страницах не публикуется
const EXAM_MINUTES = 90;
const MAX_ATTEMPTS = 2;
const COOLDOWN_DAYS = 7;
const PORT = Number(process.env.PORT || 8080);

const BANK = JSON.parse(fs.readFileSync(process.env.BANK_PATH || "/bank/bank.json", "utf8"));
const SIGNING_KEY = Uint8Array.from(Buffer.from(process.env.SIGNING_KEY || "", "base64"));
const KID = process.env.SIGNING_KID || "ccf-2026a";
const PLATFORM = process.env.PLATFORM_VERSION || "v1.6";
const SITE = process.env.SITE_BASE || "https://aenix.io";
const ADMIN = process.env.ADMIN_TOKEN || "";

// Хранилище. Одна точка подмены: в бою — Postgres, в проверке — память.
const STORE = { accounts: new Map(), invites: new Map(), sessions: new Map(),
                answers: new Map(), certs: new Map() };
const now = () => Math.floor(Date.now() / 1000);

function send(res, code, obj) {
  const body = JSON.stringify(obj);
  res.writeHead(code, { "content-type": "application/json; charset=utf-8",
                        "content-length": Buffer.byteLength(body) });
  res.end(body);
}
const readJson = (req) => new Promise((ok) => {
  let b = ""; req.on("data", (c) => (b += c)); req.on("end", () => { try { ok(JSON.parse(b || "{}")); } catch { ok({}); } });
});

const routes = {
  // Выдача приглашения. Имя латиницей фиксируется здесь и кандидату не редактируется:
  // иначе один общий аккаунт выписывал бы сертификаты на весь отдел.
  "POST /admin/invite": async (req, res) => {
    if (req.headers.authorization !== `Bearer ${ADMIN}`) return send(res, 403, { error: "нет доступа" });
    const { name, email } = await readJson(req);
    if (!name || !/^[A-Za-z .'-]{3,60}$/.test(name))
      return send(res, 400, { error: "имя нужно латиницей, как в загранпаспорте" });
    const account = crypto.randomUUID();
    STORE.accounts.set(account, { id: account, name, email: email || null,
      attempts_used: 0, last_attempt_at: 0, seen_ids: [] });
    const token = [...crypto.getRandomValues(new Uint8Array(20))]
      .map((b) => "0123456789abcdefghjkmnpqrstvwxyz"[b % 32]).join("");
    STORE.invites.set(token, { account, name, expires_at: now() + 72 * 3600, used: false });
    send(res, 200, { account, name, invite_url: `/enroll?t=${token}`, expires_in_hours: 72 });
  },

  // Пароля нет вовсе: ссылка живёт 72 часа и обменивается на аккаунт.
  "POST /enroll": async (req, res) => {
    const { token } = await readJson(req);
    const inv = STORE.invites.get(token);
    if (!inv || inv.used || inv.expires_at < now())
      return send(res, 403, { error: "ссылка недействительна или уже использована" });
    inv.used = true;
    send(res, 200, { account: inv.account, name: inv.name });
  },

  "POST /exam/start": async (req, res) => {
    const { account } = await readJson(req);
    const acc = STORE.accounts.get(account);
    if (!acc) return send(res, 403, { error: "аккаунт не найден" });
    // Открытая сессия не убивается: вход со второго устройства подхватывает её.
    for (const [sid, s] of STORE.sessions)
      if (s.account === account && s.status === "open")
        return send(res, 200, { resumed: true, session: sid, deadline: s.deadline_at });
    if (acc.attempts_used >= MAX_ATTEMPTS)
      return send(res, 429, { error: "попытки исчерпаны, следующая выдача через 90 дней" });
    if (acc.last_attempt_at && now() - acc.last_attempt_at < COOLDOWN_DAYS * 86400)
      return send(res, 429, { error: "между попытками должна пройти неделя" });
    // Выдача без повторов: сначала вопросы, которых кандидат ещё не видел.
    const form = buildForm(BANK, acc.seen_ids, now());
    const sid = crypto.randomUUID();
    STORE.sessions.set(sid, { account, ids: form.map((q) => q.id), started_at: now(),
      deadline_at: now() + EXAM_MINUTES * 60, status: "open" });
    acc.attempts_used++; acc.last_attempt_at = now();
    acc.seen_ids = [...new Set([...acc.seen_ids, ...form.map((q) => q.id)])];
    send(res, 200, { session: sid, deadline: now() + EXAM_MINUTES * 60, total: form.length });
  },

  "GET /exam/question": async (req, res, url) => {
    const s = STORE.sessions.get(url.searchParams.get("s"));
    if (!s || s.status !== "open") return send(res, 404, { error: "сессия не найдена" });
    const idx = Number(url.searchParams.get("idx") || 0);
    if (idx < 0 || idx >= s.ids.length) return send(res, 400, { error: "нет такого вопроса" });
    const q = BANK.find((x) => x.id === s.ids[idx]);
    const seed = [...url.searchParams.get("s")].reduce((a, c) => a + c.charCodeAt(0), 0) + idx;
    const { view } = present(q, seed);     // правильный ответ наружу не уходит никогда
    send(res, 200, { idx, total: s.ids.length, question: view,
                     deadline: s.deadline_at, server_now: now() });
  },

  // Ответ фиксируется в момент отправки, а не в конце: обрыв связи и закрытая
  // вкладка не стоят кандидату ничего.
  "POST /exam/answer": async (req, res) => {
    const { session, idx, choice } = await readJson(req);
    const s = STORE.sessions.get(session);
    if (!s || s.status !== "open") return send(res, 404, { error: "сессия не найдена" });
    if (now() > s.deadline_at + 30) return send(res, 409, { error: "время вышло" });
    STORE.answers.set(`${session}:${idx}`, choice);
    send(res, 200, { ok: true });
  },

  "GET /exam/state": async (req, res, url) => {
    const sid = url.searchParams.get("s"); const s = STORE.sessions.get(sid);
    if (!s) return send(res, 404, { error: "сессия не найдена" });
    const answers = [...STORE.answers.entries()]
      .filter(([k]) => k.startsWith(sid + ":"))
      .map(([k, v]) => ({ idx: Number(k.split(":")[1]), choice: v }));
    send(res, 200, { deadline: s.deadline_at, server_now: now(), total: s.ids.length, answers });
  },

  "POST /exam/submit": async (req, res) => {
    const { session } = await readJson(req);
    const s = STORE.sessions.get(session);
    if (!s || s.status !== "open") return send(res, 404, { error: "сессия не найдена" });
    let right = 0; const byDomain = {};
    s.ids.forEach((qid, idx) => {
      const q = BANK.find((x) => x.id === qid);
      const seed = [...session].reduce((a, c) => a + c.charCodeAt(0), 0) + idx;
      const { map } = present(q, seed);
      const ok = grade(q, map, STORE.answers.get(`${session}:${idx}`));
      if (ok) right++;
      const d = byDomain[q.domain] = byDomain[q.domain] || { ok: 0, all: 0 };
      d.all++; if (ok) d.ok++;
    });
    const passed = right / s.ids.length >= PASS_RATIO;
    s.status = "done"; s.score = right; s.passed = passed;
    // По темам — полоса, а не баллы: разбивку программа не публикует, но человек
    // должен знать, что перечитать за неделю ожидания.
    const topics = Object.fromEntries(Object.entries(byDomain).map(([d, v]) => {
      const r = v.ok / v.all;
      return [d, r >= 0.8 ? "выше ожидаемого" : r >= 0.6 ? "на уровне" : "ниже ожидаемого"];
    }));
    if (!passed) return send(res, 200, { passed: false, score: right, total: s.ids.length, topics });
    const acc = STORE.accounts.get(s.account);
    const issued = new Date().toISOString().slice(0, 10);
    const sn = serial();
    const token = await sign(buildPayload({ kid: KID, exam: PROGRAM, level: "Fundamentals (CCF)",
      platform: PLATFORM, serial: sn, name: acc.name, issued,
      expires: expiryFrom(issued), beta: true }), SIGNING_KEY);
    STORE.certs.set(sn, { account: s.account, name: acc.name, issued, kid: KID, status: "valid" });
    send(res, 200, { passed: true, score: right, total: s.ids.length, topics,
                     serial: sn, url: certUrl(SITE, token) });
  },

  "GET /healthz": async (req, res) => send(res, 200, { ok: true, bank: BANK.length }),
};

http.createServer(async (req, res) => {
  const url = new URL(req.url, "http://x");
  const fn = routes[`${req.method} ${url.pathname}`];
  if (!fn) return send(res, 404, { error: "not found" });
  try { await fn(req, res, url); }
  catch (e) { send(res, 500, { error: String(e && e.message || e) }); }
}).listen(PORT, () => console.log(`служба экзамена слушает :${PORT}, вопросов в банке: ${BANK.length}`));
