#!/usr/bin/env python3
"""Fold data/linkpatches/*.yaml into data/links.yaml and delete them.

This is housekeeping, not publishing. Hugo applies the patches itself at build
time, so a link is live the moment its pull request merges — compaction only
stops the patch directory growing without bound and keeps the registry readable
as a single file. Running it late, or not at all, changes nothing about what the
site serves.

    python3 scripts/compact-links.py            # fold and delete
    python3 scripts/compact-links.py --check    # report only, write nothing
"""

import sys
import pathlib
import yaml

ROOT = pathlib.Path(__file__).resolve().parent.parent
BASE = ROOT / "data" / "links.yaml"
PATCHES = ROOT / "data" / "linkpatches"
CHECK = "--check" in sys.argv
AS_JSON = "--json" in sys.argv

FIELDS = ("slug", "target_url", "status", "created_at", "created_by", "note")


def load_base():
    if not BASE.exists():
        return []
    doc = yaml.safe_load(BASE.read_text()) or {}
    return list(doc.get("links") or [])


def quote(value):
    return '"' + str(value).replace("\\", "\\\\").replace('"', '\\"') + '"'


def dump(links):
    out = [
        "# Short-link registry. Patches in data/linkpatches/ are applied on top of",
        "# this at build time; the daily compaction job folds them back in here.",
        "links:",
    ]
    for link in links:
        out.append("  - slug: %s" % quote(link["slug"]))
        out.append("    target_url: %s" % quote(link.get("target_url", "")))
        out.append("    status: %s" % quote(link.get("status") or "active"))
        for field in ("created_at", "created_by", "note"):
            if link.get(field):
                out.append("    %s: %s" % (field, quote(link[field])))
    return "\n".join(out) + "\n"


def main():
    patches = sorted(PATCHES.glob("*.yaml")) if PATCHES.is_dir() else []
    if not patches and not AS_JSON:
        print("No patches to compact.")
        return 0

    # Order matters and must match what Hugo does: file-name order, later wins.
    links = {l["slug"]: dict(l) for l in load_base() if l.get("slug")}
    order = [l["slug"] for l in load_base() if l.get("slug")]
    applied = 0

    for path in patches:
        doc = yaml.safe_load(path.read_text()) or {}
        for change in doc.get("changes") or []:
            slug = str(change.get("slug") or "").strip()
            if not slug:
                continue
            applied += 1
            if change.get("op") == "delete":
                links.pop(slug, None)
                if slug in order:
                    order.remove(slug)
                continue
            was = links.get(slug, {})
            merged = {"slug": slug}
            for field in FIELDS[1:]:
                merged[field] = change.get(field) or was.get(field) or ""
            merged["status"] = merged["status"] or "active"
            if slug not in links:
                order.append(slug)
            links[slug] = merged

    result = [links[s] for s in order if s in links]

    # --json is how CI hands the merged registry to the rule checker: this script
    # resolves patches, the rules live in one place and stay in JavaScript.
    if AS_JSON:
        import json
        print(json.dumps(result))
        return 0

    print("%d patch file(s), %d change(s) -> %d link(s)" % (len(patches), applied, len(result)))
    for path in patches:
        print("  - %s" % path.relative_to(ROOT))

    if CHECK:
        print("[check] nothing written")
        return 0

    BASE.write_text(dump(result))
    for path in patches:
        path.unlink()
    print("Compacted into data/links.yaml")
    return 0


if __name__ == "__main__":
    sys.exit(main())
