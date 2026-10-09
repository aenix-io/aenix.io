#!/usr/bin/env python3
"""check-content-rules.py: CI gate for the aenix.io content rules.

Enforces the rules from CLAUDE.md "Content rules (enforced by CI)" and
docs/CANONICAL_FACTS.md. Standard library only; runs in about a second.

ERRORS (exit 1):
  locale-parity   every English page/post has a German counterpart via
                  `hreflang_de`, and the pair points at each other
                  (`hreflang_en` back to the same URL). Exceptions live in
                  data/locale-parity-exceptions.yaml.
  author          blog posts name an author from data/authors.yaml (never
                  "Aenix Team"); EN and DE counterparts share the author.
  banned-phrase   wording that docs/CANONICAL_FACTS.md rules out.
  quiz            every quiz question has exactly one `correct: true`.

WARNINGS (printed, never fail) on files changed against the base branch:
  locale-drift    EN changed but its DE counterpart did not (or vice versa).
  title-length    title (seo_title wins) outside 30-65 characters.
  description-length  description outside 70-160 characters.

Usage:
  python3 scripts/check-content-rules.py            # base = origin/main
  python3 scripts/check-content-rules.py --base origin/some-branch
  python3 scripts/check-content-rules.py --print-legacy-baseline

Allowing a legitimate use of a banned phrase (for example a quiz answer that is
wrong on purpose, or a negation such as "not DORA compliant"):
  * Markdown body:  append  <!-- content-rules: allow <rule-id> -->  to the line
                    (or put it alone on the line above).
  * Front matter:   append  # content-rules: allow <rule-id>  to the YAML line.
  * Whole file:     front matter  content_rules_allow: ["<rule-id>", ...]
"""

from __future__ import annotations

import argparse
import fnmatch
import os
import re
import subprocess
import sys
from dataclasses import dataclass, field
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
CONTENT = ROOT / "content"
EXCEPTIONS_FILE = ROOT / "data" / "locale-parity-exceptions.yaml"
AUTHORS_FILE = ROOT / "data" / "authors.yaml"

# Files scanned for banned phrases, relative to the repo root.
PHRASE_SCAN_GLOBS = [
    "content/**/*.md",
    "data/*.yaml",
    "layouts/**/*.html",
    "themes/aenix/layouts/**/*.html",
    "static/llms.txt",
    "static/llms-full.txt",
    "hugo.yaml",
]
# Locales the phrase rules apply to: everything except these trees.
PHRASE_SKIP_PREFIXES = ("content/ru/", "content/fr/")

NON_EN_LOCALE_DIRS = ("de", "ru", "fr")

TITLE_MIN, TITLE_MAX = 30, 65
DESC_MIN, DESC_MAX = 70, 160

NEGATION = re.compile(
    r"\b(not|never|no|nor|isn't|aren't|without|nicht|nie|niemals|kein\w*|weder)\b",
    re.I,
)


@dataclass
class Phrase:
    rule_id: str
    pattern: re.Pattern
    fix: str
    negation_ok: bool = False  # skip when a negation word precedes the match


PHRASES = [
    Phrase("nvidia-validated",
           re.compile(r"nvidia[\s-]+validated|nvidia[\s-]+validiert", re.I),
           'NVIDIA partner validation is submitted and pending: say "submitted for NVIDIA partner validation", never "NVIDIA-validated".'),
    Phrase("team-behind-cozystack",
           re.compile(r"\b(team|company|people)\s+behind\s+cozystack|\b(team|unternehmen|firma)\s+hinter\s+cozystack", re.I),
           'Write "Ænix created and co-maintains Cozystack" ("hat Cozystack entwickelt und pflegt es mit").'),
    Phrase("our-code",
           re.compile(r"cozystack\s+is\s+our\s+code|cozystack\s+ist\s+unser\s+code", re.I),
           "Cozystack is a CNCF project with maintainers from several companies; it is not \"our code\"."),
    Phrase("annual-minus-20",
           re.compile(r"[-−–]\s?20\s?%(?=.{0,80}(annual|year|jährlich|jahr))|(annual|year|jährlich|jahr).{0,80}[-−–]\s?20\s?%", re.I),
           'Annual billing is "2 months free" (12 months for the price of 10), never "-20%". Source: data/pricing.yaml.'),
    Phrase("pay-per-incident",
           re.compile(r"pay[\s-]per[\s-]incident", re.I),
           "Out-of-scope work is billed hourly as data/pricing.yaml states; there is no pay-per-incident offer."),
    Phrase("old-address",
           re.compile(r"sladkovsk", re.I),
           "The registered office is U Trojice 2661/1e, České Budějovice (see docs/CANONICAL_FACTS.md)."),
    Phrase("de-usa",
           re.compile(r"\(DE,\s*USA\)", re.I),
           'Write "Delaware, USA".'),
    Phrase("cncf-slack",
           re.compile(r"cncf\s+slack", re.I),
           'The community chat is "Kubernetes Slack #cozystack".'),
    Phrase("platform-licence",
           re.compile(r"(ænix|aenix)\s+platform\s+licen", re.I),
           "Ænix sells a subscription (support + commercial modules + services), not a licence."),
    Phrase("compliant-claim",
           re.compile(r"\b(dora|nis2)[\s-]+(konform|compliant)", re.I),
           'Platforms are "built to support" / "aligned with" DORA and NIS2; never "compliant" / "konform".',
           negation_ok=True),
    Phrase("pre-validated",
           re.compile(r"vorvalidiert|pre-validated against", re.I),
           'Never "pre-validated against ISO 27001 / SOC 2" ("vorvalidiert").'),
    Phrase("mig-roadmap",
           re.compile(r"\bMIG\b.{0,60}\b(?i:roadmap|planned|geplant)\b|\b(?i:roadmap|planned|geplant)\b.{0,60}\bMIG\b"),
           "MIG partitions are available now in tenant Kubernetes clusters via the NVIDIA GPU Operator; it is not roadmap."),
]

ALLOW_INLINE = re.compile(r"content-rules:\s*allow\s+([\w-]+(?:\s*,\s*[\w-]+)*)")


# --------------------------------------------------------------------------
# Reporting
# --------------------------------------------------------------------------

IN_GHA = os.environ.get("GITHUB_ACTIONS") == "true"


@dataclass
class Report:
    errors: list = field(default_factory=list)
    warnings: list = field(default_factory=list)

    def _emit(self, level: str, path: str, line: int, rule: str, msg: str, fix: str):
        text = f"[{rule}] {msg}" + (f" Fix: {fix}" if fix else "")
        loc = f"{path}:{line}" if line else path
        if IN_GHA:
            props = f"file={path}" + (f",line={line}" if line else "") + f",title={rule}"
            # GitHub annotation messages are single-line; escape per the spec.
            safe = text.replace("%", "%25").replace("\r", "%0D").replace("\n", "%0A")
            print(f"::{level} {props}::{safe}")
        else:
            print(f"{level.upper()}: {loc}: {text}")

    def error(self, path, line, rule, msg, fix=""):
        self.errors.append((path, line, rule))
        self._emit("error", path, line, rule, msg, fix)

    def warning(self, path, line, rule, msg, fix=""):
        self.warnings.append((path, line, rule))
        self._emit("warning", path, line, rule, msg, fix)


# --------------------------------------------------------------------------
# Front matter (minimal YAML: what this site's pages actually use)
# --------------------------------------------------------------------------

@dataclass
class Page:
    path: str            # repo-relative, e.g. content/blog/2026/05/x/index.md
    lines: list          # all lines of the file
    fm_end: int          # index of the closing '---' (0 if no front matter)
    fields: dict         # top-level scalar fields -> str
    field_lines: dict    # top-level key -> 1-based line number
    allow_all: set       # rule ids allowed for the whole file
    url: str = ""

    @property
    def rel(self) -> str:
        return self.path[len("content/"):]

    @property
    def locale(self) -> str:
        first = self.rel.split("/", 1)[0]
        return first if first in NON_EN_LOCALE_DIRS else "en"

    @property
    def is_blog_post(self) -> bool:
        r = self.rel
        if r.startswith("de/"):
            r = r[3:]
        return r.startswith("blog/") and not r.endswith("_index.md")


def unquote(v: str) -> str:
    v = v.strip()
    if len(v) >= 2 and v[0] == v[-1] and v[0] in "\"'":
        v = v[1:-1]
    return v


def strip_yaml_comment(v: str) -> str:
    """Drop a trailing ' # comment' that is not inside quotes."""
    q = None
    for i, ch in enumerate(v):
        if q:
            if ch == q:
                q = None
        elif ch in "\"'":
            q = ch
        elif ch == "#" and (i == 0 or v[i - 1] in " \t"):
            return v[:i].rstrip()
    return v


def parse_list(value: str, following: list) -> list:
    value = value.strip()
    if value.startswith("["):
        return [unquote(x) for x in value.strip("[]").split(",") if x.strip()]
    items = []
    for ln in following:
        m = re.match(r"^\s+-\s+(.*)$", ln)
        if not m:
            break
        items.append(unquote(strip_yaml_comment(m.group(1))))
    return items


def load_page(path: Path) -> Page:
    rel = path.relative_to(ROOT).as_posix()
    lines = path.read_text(encoding="utf-8").splitlines()
    fields, field_lines, allow_all = {}, {}, set()
    fm_end = 0
    if lines and lines[0].strip() == "---":
        for i in range(1, len(lines)):
            if lines[i].strip() == "---":
                fm_end = i
                break
        for i in range(1, fm_end):
            m = re.match(r"^([A-Za-z_][\w-]*):(.*)$", lines[i])
            if not m:
                continue
            key, val = m.group(1), strip_yaml_comment(m.group(2))
            fields[key] = unquote(val)
            field_lines[key] = i + 1
            if key == "content_rules_allow":
                allow_all.update(parse_list(val, lines[i + 1:fm_end]))
    return Page(rel, lines, fm_end, fields, field_lines, allow_all)


def norm_url(u: str) -> str:
    u = u.strip()
    u = re.sub(r"^https?://(www\.)?aenix\.io", "", u)
    u = u.split("#", 1)[0].split("?", 1)[0]
    if not u.startswith("/"):
        u = "/" + u
    if not u.endswith("/") and not re.search(r"\.\w+$", u):
        u += "/"
    return u.lower()


def page_url(p: Page) -> str:
    """Mirror Hugo's URL for this site (permalinks: blog -> /blog/:year/:month/:contentbasename/)."""
    if p.fields.get("url"):
        return norm_url(p.fields["url"])
    rel = p.rel[:-3]  # drop .md
    parts = rel.split("/")
    leaf = parts[-1]
    if leaf in ("_index", "index"):
        parts = parts[:-1]
    if parts and parts[0] == "blog" and leaf != "_index" and len(parts) > 1:
        date = p.fields.get("date", "")
        m = re.match(r"(\d{4})-(\d{2})", date)
        if m:
            return norm_url(f"/blog/{m.group(1)}/{m.group(2)}/{parts[-1]}/")
    if p.fields.get("slug") and parts:
        parts[-1] = p.fields["slug"]
    return norm_url("/" + "/".join(parts) + "/") if parts else "/"


# --------------------------------------------------------------------------
# Locale-parity exceptions file (a list of {path|page_type|robots, reason})
# --------------------------------------------------------------------------

@dataclass
class Exception_:
    kind: str     # path | page_type | robots
    value: str
    reason: str
    line: int


def load_exceptions() -> list:
    if not EXCEPTIONS_FILE.exists():
        return []
    out, cur = [], None
    for n, raw in enumerate(EXCEPTIONS_FILE.read_text(encoding="utf-8").splitlines(), 1):
        line = strip_yaml_comment(raw).rstrip()
        if not line.strip():
            continue
        m = re.match(r"^\s*(-\s+)?(path|page_type|robots|reason):\s*(.*)$", line)
        if not m:
            continue
        key, val = m.group(2), unquote(m.group(3))
        if m.group(1):  # new entry
            cur = {"line": n}
            out.append(cur)
        if cur is not None:
            cur[key] = val
    result = []
    for e in out:
        kind = next((k for k in ("path", "page_type", "robots") if k in e), None)
        if kind and e.get("reason"):
            result.append(Exception_(kind, e[kind], e["reason"], e["line"]))
        else:
            print(f"ERROR: {EXCEPTIONS_FILE.relative_to(ROOT)}:{e['line']}: entry needs one of "
                  "path/page_type/robots and a non-empty reason", file=sys.stderr)
            sys.exit(2)
    return result


def glob_match(path: str, pattern: str) -> bool:
    if fnmatch.fnmatchcase(path, pattern):
        return True
    # 'dir/**' also matches files directly inside dir.
    if pattern.endswith("/**") and path.startswith(pattern[:-2]):
        return True
    return False


def exception_for(p: Page, exceptions: list):
    for e in exceptions:
        if e.kind == "path" and glob_match(p.path, e.value):
            return e
        if e.kind == "page_type" and effective_page_type(p) == e.value:
            return e
        if e.kind == "robots" and e.value.lower() in p.fields.get("robots", "").lower():
            return e
    return None


def effective_page_type(p: Page) -> str:
    if p.fields.get("page_type"):
        return p.fields["page_type"]
    r = p.rel[3:] if p.rel.startswith("de/") else p.rel
    if re.match(r"(for|fuer)/.+", r):
        return "flag-page"
    return ""


# --------------------------------------------------------------------------
# Rules
# --------------------------------------------------------------------------

def check_locale_parity(pages: list, by_url: dict, exceptions: list, rep: Report):
    used = set()
    for p in pages:
        if p.locale == "en":
            target_key, back_key, other = "hreflang_de", "hreflang_en", "de"
        elif p.locale == "de":
            target_key, back_key, other = "hreflang_en", "hreflang_de", "en"
        else:
            continue
        ref = p.fields.get(target_key, "")
        line = p.field_lines.get(target_key, 2)
        if ref:
            stale = next((e for e in exceptions if e.kind == "path" and e.value == p.path), None)
            if stale:
                rep.error(EXCEPTIONS_FILE.relative_to(ROOT).as_posix(), stale.line, "locale-parity",
                          f"{p.path} now has `{target_key}`, so its exception is stale.",
                          "Delete the entry.")
            target = by_url.get(norm_url(ref))
            if target is None:
                rep.error(p.path, line, "locale-parity",
                          f"`{target_key}: {ref}` points to a URL no page in content/ has.",
                          f"Fix the path or create the {other.upper()} page at {ref}.")
                continue
            if target.locale != other:
                rep.error(p.path, line, "locale-parity",
                          f"`{target_key}: {ref}` resolves to {target.path}, which is not a {other.upper()} page.")
                continue
            back = target.fields.get(back_key, "")
            if not back:
                rep.error(target.path, 2, "locale-parity",
                          f"{p.path} links here via `{target_key}`, but this page has no `{back_key}`.",
                          f'Add `{back_key}: "{p.url}"` to its front matter.')
            elif norm_url(back) != p.url:
                rep.error(target.path, target.field_lines.get(back_key, 2), "locale-parity",
                          f"`{back_key}: {back}` should point back to {p.url} ({p.path}), which links here.",
                          f'Set `{back_key}: "{p.url}"`.')
            continue
        exc = exception_for(p, exceptions)
        if exc:
            used.add(id(exc))
            continue
        if p.locale == "en":
            rep.error(p.path, 2, "locale-parity",
                      "English page without a German counterpart (`hreflang_de` missing).",
                      "Ship the German page in the same PR (see docs/GERMAN_TRANSLATION.md) and set "
                      "`hreflang_de` here and `hreflang_en` there. If this page must stay English-only, "
                      "add it to data/locale-parity-exceptions.yaml with a reason.")
        else:
            rep.error(p.path, 2, "locale-parity",
                      "German page without `hreflang_en` pointing to its English original.",
                      "Add `hreflang_en`, or list the page in data/locale-parity-exceptions.yaml with a reason.")
    rel_exc = EXCEPTIONS_FILE.relative_to(ROOT).as_posix()
    for e in exceptions:
        if e.kind == "path" and id(e) not in used and "*" not in e.value:
            if not (ROOT / e.value).exists():
                rep.error(rel_exc, e.line, "locale-parity",
                          f"Exception for {e.value}, which does not exist any more.",
                          "Remove the entry.")


def load_authors() -> set:
    names = set()
    for line in AUTHORS_FILE.read_text(encoding="utf-8").splitlines():
        m = re.match(r'^"?([^"#\s][^":]*)"?:\s*$', line)
        if m:
            names.add(m.group(1).strip())
    return names


def check_authors(pages: list, by_url: dict, authors: set, rep: Report):
    for p in pages:
        if p.locale not in ("en", "de") or not p.is_blog_post:
            continue
        a = p.fields.get("author", "")
        line = p.field_lines.get("author", 2)
        if not a:
            rep.error(p.path, 2, "author", "Blog post without `author:`.",
                      "Set the author per the rule in CLAUDE.md (Timur Tukaev or Andrei Kvapil).")
        elif a.lower() in ("aenix team", "ænix team"):
            rep.error(p.path, line, "author", f'"{a}" is not an allowed author.',
                      "Use a person from data/authors.yaml (see the author rule in CLAUDE.md).")
        elif a not in authors:
            rep.error(p.path, line, "author", f'Author "{a}" is not in data/authors.yaml.',
                      "Use a listed author or add the person to data/authors.yaml.")
        if p.locale == "en" and p.fields.get("hreflang_de"):
            de = by_url.get(norm_url(p.fields["hreflang_de"]))
            if de and de.fields.get("author", "") != a:
                rep.error(de.path, de.field_lines.get("author", 2), "author",
                          f'Author "{de.fields.get("author", "")}" differs from the English original '
                          f'{p.path} ("{a}").', "EN and DE counterparts must have the same author.")


def check_quiz(p: Page, rep: Report):
    start = None
    for i in range(1, p.fm_end):
        if re.match(r"^quiz:\s*$", p.lines[i]):
            start = i
            break
    if start is None:
        return
    end = p.fm_end
    for i in range(start + 1, p.fm_end):
        if re.match(r"^[A-Za-z_]", p.lines[i]):
            end = i
            break
    questions = []  # (line, correct_count)
    for i in range(start + 1, end):
        ln = p.lines[i]
        if re.match(r"^\s*-\s+q:", ln):
            questions.append([i + 1, 0])
        elif questions:
            questions[-1][1] += len(re.findall(r"\bcorrect:\s*true\b", ln))
    for n, (line, count) in enumerate(questions, 1):
        if count != 1:
            rep.error(p.path, line, "quiz",
                      f"Quiz question {n} has {count} options marked `correct: true`.",
                      "Mark exactly one option `correct: true`; the rest `correct: false`.")


def line_allows(lines: list, idx: int, rule_id: str) -> bool:
    for j in (idx, idx - 1):
        if j < 0:
            continue
        m = ALLOW_INLINE.search(lines[j])
        if m and (j == idx or lines[j].strip().startswith(("<!--", "#", "{{/*"))):
            ids = {x.strip() for x in re.split(r"[,\s]+", m.group(1)) if x.strip()}
            if rule_id in ids or "all" in ids:
                return True
    return False


def check_phrases_in(path: str, lines: list, allow_all: set, rep: Report):
    for idx, line in enumerate(lines):
        for ph in PHRASES:
            if ph.rule_id in allow_all:
                continue
            m = ph.pattern.search(line)
            if not m:
                continue
            if ph.negation_ok and NEGATION.search(line[max(0, m.start() - 60):m.start()]):
                continue
            if line_allows(lines, idx, ph.rule_id):
                continue
            rep.error(path, idx + 1, "banned-phrase",
                      f'"{m.group(0).strip()}" ({ph.rule_id}).',
                      ph.fix + f" If this use is legitimate (e.g. a deliberately wrong quiz answer), "
                      f"add `content-rules: allow {ph.rule_id}` on the line (see the script header).")


def check_author_line_phrase(p: Page, rep: Report):
    # "Aenix Team" as author anywhere (also non-blog pages).
    a = p.fields.get("author", "")
    if not p.is_blog_post and a.lower() in ("aenix team", "ænix team"):
        rep.error(p.path, p.field_lines.get("author", 2), "author",
                  f'"{a}" is not an allowed author.', "Name a person from data/authors.yaml.")


# --------------------------------------------------------------------------
# PR-scoped warnings
# --------------------------------------------------------------------------

def git(*args) -> str:
    r = subprocess.run(["git", *args], cwd=ROOT, capture_output=True, text=True)
    if r.returncode != 0:
        raise RuntimeError(r.stderr.strip())
    return r.stdout


def changed_files(base: str):
    try:
        mb = git("merge-base", base, "HEAD").strip()
        files = set(git("diff", "--name-only", "--diff-filter=ACMR", mb).split())
        files |= set(git("ls-files", "--others", "--exclude-standard").split())
        return files
    except (RuntimeError, FileNotFoundError) as e:
        print(f"note: PR-scoped warnings skipped, cannot diff against {base}: {e}")
        return None


def check_changed(pages_by_path: dict, by_url: dict, changed: set, rep: Report):
    for path in sorted(changed):
        p = pages_by_path.get(path)
        if p is None or p.locale not in ("en", "de"):
            continue
        key = "hreflang_de" if p.locale == "en" else "hreflang_en"
        if p.fields.get(key):
            other = by_url.get(norm_url(p.fields[key]))
            if other and other.path not in changed:
                a, b = ("EN", "DE") if p.locale == "en" else ("DE", "EN")
                rep.warning(p.path, 1, "locale-drift",
                            f"{a} changed, {b} not ({other.path}) — sync?",
                            f"Apply the same change to the {b} page, or ignore if it does not affect meaning.")
        title = p.fields.get("seo_title") or p.fields.get("title", "")
        tkey = "seo_title" if p.fields.get("seo_title") else "title"
        if title and not (TITLE_MIN <= len(title) <= TITLE_MAX):
            rep.warning(p.path, p.field_lines.get(tkey, 1), "title-length",
                        f"{tkey} is {len(title)} characters (aim for {TITLE_MIN}-{TITLE_MAX}).",
                        "Shorten/lengthen it, or set `seo_title` for the search snippet.")
        desc = p.fields.get("description", "")
        if desc and not (DESC_MIN <= len(desc) <= DESC_MAX):
            rep.warning(p.path, p.field_lines.get("description", 1), "description-length",
                        f"description is {len(desc)} characters (aim for {DESC_MIN}-{DESC_MAX}).")


# --------------------------------------------------------------------------

def main() -> int:
    ap = argparse.ArgumentParser(description=__doc__.split("\n\n")[0])
    ap.add_argument("--base", help="git ref to diff against for PR warnings "
                    "(default: origin/$GITHUB_BASE_REF in CI, else origin/main)")
    ap.add_argument("--no-diff", action="store_true", help="skip PR-scoped warnings")
    ap.add_argument("--print-legacy-baseline", action="store_true",
                    help="print exception entries for pages that currently fail locale parity")
    args = ap.parse_args()

    pages = [load_page(f) for f in sorted(CONTENT.rglob("*.md"))]
    pages = [p for p in pages if p.fm_end and p.fields.get("draft", "").lower() != "true"]
    for p in pages:
        p.url = page_url(p)
    by_url, by_path = {}, {}
    for p in pages:
        by_url.setdefault(p.url, p)
        by_path[p.path] = p

    exceptions = load_exceptions()
    rep = Report()

    if args.print_legacy_baseline:
        tmp = Report()
        global IN_GHA
        IN_GHA = False
        import io
        import contextlib
        with contextlib.redirect_stdout(io.StringIO()):
            check_locale_parity(pages, by_url, exceptions, tmp)
        for path, _, rule in tmp.errors:
            p = by_path.get(path)
            if p and not p.fields.get("hreflang_de" if p.locale == "en" else "hreflang_en"):
                print(f'- path: "{path}"\n  reason: "legacy — translate when touched"')
        return 0

    check_locale_parity(pages, by_url, exceptions, rep)
    authors = load_authors()
    check_authors(pages, by_url, authors, rep)
    for p in pages:
        check_quiz(p, rep)
        check_author_line_phrase(p, rep)

    scanned = set()
    for g in PHRASE_SCAN_GLOBS:
        for f in sorted(ROOT.glob(g)):
            rel = f.relative_to(ROOT).as_posix()
            if rel in scanned or rel.startswith(PHRASE_SKIP_PREFIXES) or not f.is_file():
                continue
            scanned.add(rel)
            p = by_path.get(rel)
            if p:
                check_phrases_in(rel, p.lines, p.allow_all, rep)
            else:
                check_phrases_in(rel, f.read_text(encoding="utf-8", errors="replace").splitlines(),
                                 set(), rep)

    if not args.no_diff:
        base = args.base or (f"origin/{os.environ['GITHUB_BASE_REF']}"
                             if os.environ.get("GITHUB_BASE_REF") else "origin/main")
        changed = changed_files(base)
        if changed is not None:
            check_changed(by_path, by_url, changed, rep)

    print(f"\ncheck-content-rules: {len(pages)} pages, {len(scanned)} files scanned for wording; "
          f"{len(rep.errors)} errors, {len(rep.warnings)} warnings.")
    if rep.errors:
        print("Rules and fixes: CLAUDE.md -> 'Content rules (enforced by CI)', docs/CANONICAL_FACTS.md.")
        return 1
    return 0


if __name__ == "__main__":
    sys.exit(main())
