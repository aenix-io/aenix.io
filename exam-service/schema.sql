CREATE TABLE accounts (
  id TEXT PRIMARY KEY, name TEXT NOT NULL, email TEXT,
  exam_version TEXT NOT NULL,          -- пиннится при выдаче: релиз не меняется под кандидатом
  attempts_used INTEGER DEFAULT 0, last_attempt_at INTEGER,
  seen_ids TEXT DEFAULT '[]',          -- выдача без повторов опирается на это поле
  created_at INTEGER);
CREATE TABLE invites (
  token TEXT PRIMARY KEY, account_id TEXT, name TEXT,
  expires_at INTEGER, used_at INTEGER);
CREATE TABLE sessions (
  id TEXT PRIMARY KEY, account_id TEXT, question_ids TEXT, seed INTEGER,
  started_at INTEGER, deadline_at INTEGER, status TEXT, score INTEGER, passed INTEGER);
CREATE TABLE answers (
  session_id TEXT, idx INTEGER, choice TEXT, answered_at INTEGER,
  PRIMARY KEY (session_id, idx));
CREATE TABLE certificates (
  serial TEXT PRIMARY KEY, account_id TEXT, name TEXT, kid TEXT,
  issued_at TEXT, expires_at TEXT, status TEXT, revoked_at INTEGER, revoke_reason TEXT);
CREATE INDEX idx_sessions_account ON sessions(account_id, status);
