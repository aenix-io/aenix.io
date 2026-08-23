// Работа с банком вопросов. Банк живёт ТОЛЬКО здесь и наружу не отдаётся:
// браузер получает формулировку и варианты, но никогда — правильный ответ.
export const WEIGHTS = { D1: 15, D2: 12, D3: 9, D4: 6, D5: 6, D6: 6, D7: 6 }; // 60 вопросов
export const DIFFICULTY = { E: 16, M: 33, H: 11 };  // квоты по сложности внутри формы
export const MULTI_SELECT = 8;                       // вопросов с несколькими ответами

function rng(seed) {                    // повторяемая случайность: одна форма — один seed
  let s = seed >>> 0;
  return () => ((s = (s * 1664525 + 1013904223) >>> 0) / 4294967296);
}
function shuffle(arr, rnd) {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(rnd() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

/**
 * Собирает форму из 60 вопросов.
 * Ключевое свойство — выдача БЕЗ ПОВТОРОВ: сначала берутся вопросы, которых кандидат
 * ещё не видел. Без этого банк из 150 при форме в 60 сдаётся с третьего захода простым
 * заучиванием: две попытки показывают 64% банка, и третья даёт ожидаемые 73%.
 * С выдачей без повторов третья попытка даёт 62,5% — ниже любого разумного порога.
 */
export function buildForm(bank, seenIds, seed) {
  const rnd = rng(seed);
  const seen = new Set(seenIds || []);
  const form = [];

  for (const [domain, need] of Object.entries(WEIGHTS)) {
    const pool = bank.filter((q) => q.domain === domain && !q.retired_at);
    const fresh = shuffle(pool.filter((q) => !seen.has(q.id)), rnd);
    const old = shuffle(pool.filter((q) => seen.has(q.id)), rnd);
    form.push(...fresh.slice(0, need));
    if (form.filter((q) => q.domain === domain).length < need) {
      const short = need - form.filter((q) => q.domain === domain).length;
      form.push(...old.slice(0, short));   // свежих не хватило — добираем повторами
    }
  }
  return shuffle(form, rnd);
}

/**
 * Готовит вопрос к показу. Варианты перемешиваются для каждого кандидата и каждой
 * попытки; служба помнит соответствие показанной позиции настоящему варианту,
 * поэтому засчитывает верно. Правильный ответ в выдачу не попадает.
 */
export function present(question, seed) {
  const rnd = rng(seed);
  const order = shuffle(question.options.map((o, i) => i), rnd);
  return {
    view: {
      id: question.id,
      stem: question.stem,
      multi: (question.answer || "").length > 1,
      options: order.map((i, pos) => ({ pos, text: question.options[i].text })),
    },
    map: order,   // pos -> исходный индекс, хранится в сессии
  };
}

export function grade(question, map, chosenPositions) {
  const chosenKeys = (chosenPositions || [])
    .map((pos) => question.options[map[pos]].key)
    .sort()
    .join("");
  // Несколько верных ответов засчитываются только целиком: отметил не всё — не засчитан.
  return chosenKeys === (question.answer || "").split("").sort().join("");
}
