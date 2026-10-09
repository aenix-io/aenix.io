# Canonical facts — aenix.io

The facts and wording every page (EN and DE, landing pages, blog posts, quizzes, `static/llms*.txt`, JSON-LD) must agree with. Where a page says something else, the page changes — or, if this file is wrong, this file changes first, in its own PR.

Rule of thumb: when unsure, claim less. Never invent a fact, price, customer, date or capability. Removing an unprovable claim is always allowed; adding a claim is allowed only if it is already stated on the site's evidence pages (`/compliance/*`, case studies) or here.

Parts of this file are enforced by `scripts/check-content-rules.py` (marked **[CI]**).

---

## Company

- **AENIX s.r.o.** — registered office U Trojice 2661/1e, České Budějovice 3, 370 04 České Budějovice, Czech Republic; IČO 21493871; DIČ CZ21493871; registered 22 April 2024 (Czech business register ARES). The old Buštěhrad address ("Sladkovského …") must not appear anywhere. **[CI]**
- **AENIX INC** — Delaware, USA. Write "Delaware, USA", never "(DE, USA)". **[CI]**
- CEO Andrei Kvapil; COO Timur Tukaev. Founders: Andrei Kvapil and Timur Tukaev (JSON-LD `founder` lists both).
- Team: "about 20 people, in the EU and Central Asia" (not "EU-based engineers only").
- Currency: contracts with AENIX s.r.o. are in EUR; list prices on the site are shown in USD. Say exactly that; no conversion rates.
- The company's legal data in templates comes from `params.company` in `hugo.yaml`.

## Cozystack and vendor neutrality

- Cozystack is a CNCF Sandbox project; its CNCF Incubation application is in due diligence.
- Ænix **created and co-maintains** Cozystack, with maintainers from other companies. Never "Ænix's product", "the company/team behind Cozystack" or "our code". **[CI]**
- Avoid hard-coding the "current version" of Cozystack; if a version must be named, check the latest release.
- Community chat: **Kubernetes Slack #cozystack** (not "CNCF Slack") and Telegram. **[CI]**
- Open source in Cozystack (free): white-labelling/branding, air-gapped installs, GPU support (see below), multi-tenancy, the managed services catalogue. Paid tiers decide the *support scope* for these; they do not "unlock" them.
- Proprietary Ænix modules: the WHMCS integration and the Ænix billing/portal components where the site already says so. WHMCS is not "in Cozystack".
- Ænix sells a **subscription** (support + commercial modules + services), not a licence: no "licence fee", no "Ænix Platform licence". **[CI]**

## Products

- Three platforms: **Ænix Public Cloud Platform**, **Ænix Private Cloud Platform** (includes developer self-service), **Ænix AI Platform**. The AI Platform is the third platform, not an add-on module.

## Certifications and conformance

- **ISO/IEC 27001:2022** held by AENIX s.r.o. (certificate № SIC.MS.008.ISO/IEC27001.5719, valid through 26 Feb 2027) — `/compliance/iso-27001/`. Mention it as one line + link on about, contact and the compliance hub. Do not call it IAF-accredited.
- No SOC 2. Platforms are not "certified".
- DORA / NIS2 / GDPR: "built to support" / "aligned with", never "compliant" / "konform"; never "pre-validated against ISO 27001 / SOC 2" ("vorvalidiert"). **[CI]**
- Cozystack is a **CNCF Certified Kubernetes distribution** (use this one form).
- **CNCF Kubernetes AI Conformance**: accepted September 2026. List it wherever certifications are listed (AI Platform, AI solutions, compliance hub, trust strips).
- **NVIDIA**: partner validation of the GPU Operator stack was submitted in October 2026 and is pending. No "NVIDIA-validated" badge or claim. **[CI]**

## GPUs

Source: Cozystack's CNCF AI Conformance submission (`cncf/k8s-ai-conformance`, `v1.35/cozystack/PRODUCT.yaml`) and cozystack.io/compliance/ai-conformance/.

- NVIDIA data-centre GPUs, supported through the **NVIDIA GPU Operator**.
- **Tenant Kubernetes clusters:** the GPU Operator exposes **MIG** partitions as schedulable resources on MIG-capable cards; **HAMi** provides time-sliced sharing and oversubscription. Both are available now — not roadmap. **[CI]** (MIG next to "roadmap"/"planned"/"geplant")
- **Virtual machines** (and VM worker nodes of tenant clusters): whole GPUs via **PCI passthrough**, or **NVIDIA vGPU** (ships since Cozystack 1.5) with the customer's NVIDIA vGPU licence.
- Do not claim MIG slices assigned to VMs (MIG-backed vGPU). Do not call anything "roadmap" unless a page names a concrete roadmap item backed by a source.
- No list of "validated" GPU models. No AMD/Intel accelerator claims beyond PCI passthrough to VMs.
- GPU billing: usage is measured per tenant; charging happens in the provider's billing system (WHMCS or its own). No promise beyond that.

## Security and disaster recovery

Align product pages with the compliance evidence pages.

- Volume encryption is opt-in, with a passphrase the customer holds. No "customer keys at every layer", no "keys under your control", no HSM claim unless the compliance page states it.
- Audit log retention is configurable (default 30 days). No "immutable 5-year logs"; say logs "can be shipped to your own immutable store".
- No automated cross-site VM failover. Stretched / multi-site designs exist (Hikube case). No "replaces SRM", no "survives the loss of a data centre automatically"; describe backup/restore and runbooks.
- No "used in defence" claims anywhere.

## Commercial terms

**Single source: `data/pricing.yaml` and `/pricing/`.** Pages link there instead of restating numbers.

- Support tiers are priced per 10 nodes per month as in `data/pricing.yaml`. Every tier includes the commercial modules it lists (billing, WHMCS integration). The price list is the Ænix Public Cloud Platform subscription; a team running self-run Cozystack buys the same subscription and may simply not use the commercial modules. Never say self-run support "comes without" the commercial layer.
- Private Cloud Platform and AI Platform are quoted per RFP; their pages must not quote the Public Cloud list price as their price.
- Annual billing: price equals 10 months of monthly ("2 months free"); never "−20%". **[CI]**
- Out-of-scope work: hourly rate as in `data/pricing.yaml`. No "pay-per-incident". **[CI]**
- Features and support hours per tier: only what `data/pricing.yaml` says. If it is internally inconsistent, fix the wording there, not the numbers.
- Remote access: "remote access to your clusters with your approval" — never "SSH" (Talos has no SSH).
- Migration price: the calculators' figure is indicative; service pages say "indicative from the calculator; final quote after scoping".

## Timelines

- **Platform Readiness Assessment:** fixed price, 14 days (focused) or 28 days (full).
- **Architecture reviews** of 5–10 days on consulting pages are separate, smaller services: call them "architecture review", never "assessment", and link the Platform Readiness Assessment.
- **Public Cloud Platform** at provider scale: productized installer, live in weeks once hardware is ready. Multi-region national/operator programmes: 3–6 month pilot, then 9–18 months to full multi-region.
- **Private Cloud Platform:** free 30-minute discovery, 14–28 day assessment, then a 3–12 month build depending on scope.
- **VMware migration:** `/migration/vmware/` is the source — about 8–12 months for ~100 VMs, 18–24 months for ~1,000 VMs, including planning and waves. OpenStack / Proxmox / Nutanix: the respective `/migration/*` page is the source.
- Blog posts and quizzes follow these pages.

## Customers and evidence

- Customer names: only those already approved on the site (logos in `data/`, named case studies). See CLAUDE.md Rule 1.
- Case studies: use the real count on `/case-studies/` or avoid a count.
- Testimonials and logos from hosting providers do not appear on financial-services, insurance, DORA or public-sector pages, nor under headings that imply bank/regulated references.

## Site decisions

- Language switcher EN↔DE shows only where an hreflang pair exists.
- Every commercial landing page (products, solutions, industries, alternatives, compare, migration, services, calculators) has a primary CTA in the first screen (Book a call → `/contact/` or the discovery form; secondary: live demo).
- Events (`/workshops/`, `/webinars/`, `/tour-2026/`) and `/certification/` are reachable from navigation or footer.
- Buyer-facing copy contains no internal jargon (BOFU/MOFU, listicle, evidence tiers, "verify before publication", spec section references) and no designer/editor notes.
- `/quiz/modern-cloud/` keeps its email gate. `/styleguide/` is not rendered in production.

## Wording

- British "licence" for the noun; US "license" only inside proper names (Apache License 2.0).
- "Ænix" in copy; "AENIX s.r.o." / "AENIX INC" for the legal entities.
- No emoji in headings or body text (CLAUDE.md Rule 6).
- Blog authors: see "Content rules" in CLAUDE.md; never "Aenix Team". **[CI]**
