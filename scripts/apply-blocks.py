#!/usr/bin/env python3
"""apply-blocks.py — batch semantic-block transformations for content pages.

Applies a declarative plan of wrapper/insert operations to many markdown
pages at once, enforcing the redesign ground rule: existing text stays
byte-identical — operations may only ADD lines (wrappers, images,
shortcode swaps must be explicitly line-for-line).

Plan file (JSON):
{
  "jobs": [
    {
      "pages": ["solutions/*/_index.md", "de/loesungen/*/_index.md"],
      "ops": [
        {"op": "wrap_section", "heading": "## How the engagement runs",
         "class": "band band--content"},
        {"op": "wrap_blocks_after_heading", "heading": "## Three outcomes",
         "count": 3, "class": "gap-cards-2"},
        {"op": "insert_after_heading", "heading": "## Who runs it",
         "markdown": "{{< clients >}}"},
        {"op": "replace_line", "find": "{{< placeholder-logos >}}",
         "replace": "{{< clients >}}"}
      ]
    }
  ]
}

Usage:
  python3 scripts/apply-blocks.py plan.json           # dry run (default)
  python3 scripts/apply-blocks.py plan.json --apply   # write changes
  git diff --numstat content/                         # verify insert-only

Dry run prints, per file, each operation and the exact lines it would
add. A job aborts for a file (with a report) when a heading is missing
or ambiguous — no partial writes.
"""
import json
import re
import sys
from glob import glob
from pathlib import Path

CONTENT = Path(__file__).resolve().parent.parent / "content"


def split_blocks(body: str):
    """Split markdown body into blank-line-delimited blocks, preserving joins."""
    return re.split(r"(\n\s*\n)", body)


def find_heading_index(parts, heading):
    hits = [i for i, p in enumerate(parts) if p.strip() == heading.strip()]
    if len(hits) != 1:
        raise ValueError(f"heading {heading!r} found {len(hits)} times (need exactly 1)")
    return hits[0]


def op_wrap_section(body, heading, cls):
    """Wrap from the heading (inclusive) until the next same-level heading."""
    level = heading.split(" ")[0]  # '##'
    parts = split_blocks(body)
    i = find_heading_index(parts, heading)
    j = i + 1
    while j < len(parts):
        s = parts[j].strip()
        if s.startswith(level + " ") or s.startswith("<!-- /BLOCK") or s == "---":
            break
        j += 2  # skip separator + block
    added_open = f'<div class="{cls}">'
    parts.insert(i, "\n\n")
    parts.insert(i, added_open)
    parts.insert(j + 2, "</div>")
    parts.insert(j + 2, "\n\n")
    return "".join(parts), [added_open, "</div>"]


def op_wrap_blocks_after_heading(body, heading, count, cls):
    """Wrap the N blocks immediately after the heading."""
    parts = split_blocks(body)
    i = find_heading_index(parts, heading)
    start = i + 2
    end = start + 2 * count - 1
    if end > len(parts):
        raise ValueError(f"not enough blocks after {heading!r}")
    added_open = f'<div class="{cls}">'
    parts.insert(start, "\n\n")
    parts.insert(start, added_open)
    parts.insert(end + 3, "</div>")
    parts.insert(end + 3, "\n\n")
    return "".join(parts), [added_open, "</div>"]


def op_insert_after_heading(body, heading, markdown):
    """Insert a markdown block right after the heading's first block."""
    parts = split_blocks(body)
    i = find_heading_index(parts, heading)
    insert_at = min(i + 4, len(parts))  # after heading + its first block
    parts.insert(insert_at, markdown)
    parts.insert(insert_at, "\n\n")
    return "".join(parts), [markdown]


def op_replace_line(body, find, replace):
    """Swap an exact full line (shortcode/marker swaps only)."""
    lines = body.split("\n")
    hits = [k for k, l in enumerate(lines) if l.strip() == find.strip()]
    if not hits:
        raise ValueError(f"line {find!r} not found")
    for k in hits:
        lines[k] = lines[k].replace(find.strip(), replace.strip())
    return "\n".join(lines), [f"{find}  ->  {replace} (x{len(hits)})"]


OPS = {
    "wrap_section": lambda b, o: op_wrap_section(b, o["heading"], o["class"]),
    "wrap_blocks_after_heading": lambda b, o: op_wrap_blocks_after_heading(
        b, o["heading"], int(o.get("count", 1)), o["class"]),
    "insert_after_heading": lambda b, o: op_insert_after_heading(
        b, o["heading"], o["markdown"]),
    "replace_line": lambda b, o: op_replace_line(b, o["find"], o["replace"]),
}


def main():
    if len(sys.argv) < 2:
        sys.exit(__doc__)
    plan = json.loads(Path(sys.argv[1]).read_text())
    apply_mode = "--apply" in sys.argv
    total_ok = total_skip = 0

    for job in plan["jobs"]:
        files = []
        for pat in job["pages"]:
            files += sorted(glob(str(CONTENT / pat)))
        if not files:
            print(f"!! no files match {job['pages']}")
            continue
        for f in files:
            path = Path(f)
            src = path.read_text()
            if "\n---\n" not in src:
                print(f"SKIP {path} (no frontmatter)")
                total_skip += 1
                continue
            head, body = src.split("\n---\n", 1)
            log = []
            try:
                for o in job["ops"]:
                    body, added = OPS[o["op"]](body, o)
                    log.append((o["op"], added))
            except ValueError as e:
                print(f"SKIP {path.relative_to(CONTENT)}: {e}")
                total_skip += 1
                continue
            rel = path.relative_to(CONTENT)
            if apply_mode:
                path.write_text(head + "\n---\n" + body)
                print(f"APPLIED {rel}")
            else:
                print(f"WOULD APPLY {rel}")
            for name, added in log:
                for a in added:
                    print(f"    [{name}] + {a}")
            total_ok += 1

    mode = "applied" if apply_mode else "dry-run"
    print(f"\n{mode}: {total_ok} files ok, {total_skip} skipped")
    if apply_mode:
        print("verify: git diff --numstat content/  (deletions must be 0 for wrap/insert jobs)")


if __name__ == "__main__":
    main()
