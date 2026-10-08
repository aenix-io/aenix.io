#!/usr/bin/env python
"""Render the Aenix lead-magnet PDFs with WeasyPrint.

Usage: build.py [source.html ...]   (no arguments builds every document)
"""
import pathlib
import sys

from weasyprint import HTML, CSS

BUILD = pathlib.Path(__file__).resolve().parent
OUT = BUILD.parent.parent / "static" / "downloads"

CSS_TEXT = (BUILD / "checklist.css").read_text(encoding="utf-8")

DOCS = {
    "dora-en.html": ("aenix-dora-compliance-checklist.pdf", "en",
                     "DORA Compliance Cloud Architecture Checklist — Ænix"),
    "dora-de.html": ("aenix-dora-compliance-checklist-de.pdf", "de",
                     "DORA-Compliance Cloud-Architektur-Checkliste — Ænix"),
    "nis2-en.html": ("aenix-nis2-compliance-checklist.pdf", "en",
                     "NIS2 Compliance Readiness Checklist — Ænix"),
    "nis2-de.html": ("aenix-nis2-compliance-checklist-de.pdf", "de",
                     "NIS2-Compliance-Readiness-Checkliste — Ænix"),
    "vmware-en.html": ("aenix-vmware-migration-checklist.pdf", "en",
                       "VMware Migration Assessment Checklist — Ænix"),
    "vmware-de.html": ("aenix-vmware-migration-checklist-de.pdf", "de",
                       "VMware-Migrations-Checkliste — Ænix"),
    "sovereign-ai-en.html": ("aenix-sovereign-ai-decision-guide.pdf", "en",
                             "Sovereign AI Decision Guide — Ænix"),
    "sovereign-ai-de.html": ("aenix-sovereign-ai-decision-guide-de.pdf", "de",
                             "Sovereign-AI-Entscheidungsleitfaden — Ænix"),
    "platform-maturity-en.html": ("aenix-platform-engineering-maturity-assessment.pdf", "en",
                                  "Platform Engineering Maturity Assessment — Ænix"),
    "platform-maturity-de.html": ("aenix-platform-engineering-maturity-assessment-de.pdf", "de",
                                  "Platform Engineering Maturity Assessment — Ænix"),
    "tco-worksheet-en.html": ("aenix-cloud-repatriation-tco-worksheet.pdf", "en",
                              "Cloud Repatriation TCO Worksheet — Ænix"),
    "tco-worksheet-de.html": ("aenix-cloud-repatriation-tco-worksheet-de.pdf", "de",
                              "Cloud-Repatriation-TCO-Arbeitsblatt — Ænix"),
}

SHELL = """<!DOCTYPE html>
<html lang="{lang}">
<head>
<meta charset="utf-8">
<title>{title}</title>
<style>{css}</style>
</head>
<body>
{body}
</body>
</html>
"""

selected = sys.argv[1:] or list(DOCS)
unknown = [name for name in selected if name not in DOCS]
if unknown:
    sys.exit(f"unknown source(s): {', '.join(unknown)}")

for src in selected:
    pdf_name, lang, title = DOCS[src]
    body = (BUILD / src).read_text(encoding="utf-8")
    html = SHELL.format(lang=lang, title=title, css=CSS_TEXT, body=body)
    (BUILD / (src + ".full")).write_text(html, encoding="utf-8")
    target = OUT / pdf_name
    HTML(string=html, base_url=str(BUILD)).write_pdf(target)
    print(f"wrote {target}")
