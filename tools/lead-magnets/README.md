# Lead-magnet PDF sources

The four downloadable compliance checklists are generated from here, not
hand-edited as PDFs. Before this existed the only artefact was the compiled
PDF, so correcting a wrong regulatory citation meant extracting the text and
rebuilding the document from scratch.

Build:

```bash
python3 -m venv venv && ./venv/bin/pip install weasyprint
./venv/bin/python build.py
```

Output goes to `static/downloads/`. Fonts: Lato, subset and embedded — never
Calibri. The version stamp appears on the cover and in the running footer;
bump it in the source when the content changes.

Regulatory citations are the point of these documents. DORA is Regulation
(EU) 2022/2554, NIS2 is Directive (EU) 2022/2555, and their article numbers
are easy to confuse — Articles 21 and 23 are NIS2, and pasting them onto DORA
is the mistake v1.0 shipped with. Check any citation you change against the
consolidated text on EUR-Lex.
