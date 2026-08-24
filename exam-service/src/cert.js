// Выпуск и подпись сертификата.
const B64U = (bytes) => btoa(String.fromCharCode(...new Uint8Array(bytes)))
  .replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");

// Название программы и эмитент — в одном месте, чтобы смена была правкой одной строки.
export const ISSUER = "AENIX s.r.o.";
export const PROGRAM = "Aenix Certification for Cozystack";

/**
 * Запись пишется ПОЗИЦИОННЫМ списком, а не парами «ключ-значение»: так ссылка выходит
 * около 325 символов и помещается и в поле LinkedIn, и в QR-код. Порядок полей задан
 * первым элементом — версией формата.
 */
export function buildPayload({ kid, exam, level, platform, serial, name, issued, expires, beta }) {
  return [1, kid, ISSUER, exam, level, platform, serial, name, issued, expires, beta ? 1 : 0];
}

export async function sign(payload, privateKeyPkcs8) {
  const json = JSON.stringify(payload);
  const b64 = B64U(new TextEncoder().encode(json));
  const key = await crypto.subtle.importKey(
    "pkcs8", privateKeyPkcs8, { name: "Ed25519" }, false, ["sign"]);
  // Подписываются байты УЖЕ ЗАКОДИРОВАННОЙ строки — той самой, что уедет в ссылку.
  // Если подписывать разобранный объект, подпись обходится другой сериализацией.
  const sig = await crypto.subtle.sign({ name: "Ed25519" }, key, new TextEncoder().encode(b64));
  return `${b64}.${B64U(sig)}`;
}

export function certUrl(base, token) {
  return `${base}/certification/verify/#${token}`;
}

// Серийный номер: год + случайность. Человекочитаемый и не выдаёт числа выданных.
export function serial() {
  const r = new Uint8Array(5);
  crypto.getRandomValues(r);
  const s = Array.from(r).map((b) => "0123456789ABCDEFGHJKMNPQRSTVWXYZ"[b % 32]).join("");
  return `CCF-${new Date().getUTCFullYear()}-${s}`;
}

export function expiryFrom(issuedISO, months = 24) {
  const d = new Date(issuedISO);
  d.setUTCMonth(d.getUTCMonth() + months);
  return d.toISOString().slice(0, 10);
}
