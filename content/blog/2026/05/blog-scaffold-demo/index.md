---
title: "Blog scaffold demo — what each new component does"
description: "Walk-through of every blog component shipped with the new scaffold: factoid, pull-quote, spoiler, entity-var, code blocks, share bar, related posts, and the end-of-article quiz."
date: 2026-05-11
author: "Aenix Team"
type: "tutorial"
topics: ["cozystack", "kubernetes"]
language: "en"
companion_landing: /products/aenix-platform/
companion_label: "See Ænix Platform — turnkey cloud-in-a-box →"
quiz:
  title: "Did the scaffold sink in?"
  questions:
    - q: "Which shortcode renders a pulled-out number with a brand accent border?"
      options:
        - { text: "{{< quote >}}", correct: false }
        - { text: "{{< factoid >}}", correct: true }
        - { text: "{{< spoiler >}}", correct: false }
      explanation: "factoid is the brand-accented stat block. quote is for pull-quotes; spoiler is a collapsible details block."
    - q: "How are inline entity names highlighted with a colored chip?"
      options:
        - { text: "{{% var \"Tenant\" kind=\"crd\" %}}", correct: true }
        - { text: "Markdown backticks `Tenant`", correct: false }
        - { text: "{{< spoiler title=\"Tenant\" >}}", correct: false }
      explanation: "{{% var %}} (note the percent form, used inline) emits an .entity-var with kind-specific colour. Backticks just render plain inline code."
    - q: "What URL pattern do all blog posts use?"
      options:
        - { text: "/posts/<slug>/", correct: false }
        - { text: "/blog/<slug>/", correct: false }
        - { text: "/blog/YYYY/MM/<slug>/", correct: true }
      explanation: "The permalink is set in hugo.yaml: blog: /blog/:year/:month/:slug/."
    - q: "How is the related-posts list picked when no `related_posts:` is set?"
      options:
        - { text: "Newest 3 posts overall", correct: false }
        - { text: "3 posts with the highest topic-overlap score", correct: true }
        - { text: "Random 3", correct: false }
      explanation: "The related partial scores candidates by shared topic count. Newest 3 is only the final fallback when the post has no topics."
    - q: "What happens to the share bar on screens narrower than 800px?"
      options:
        - { text: "It disappears", correct: false }
        - { text: "It becomes a horizontal row above the content", correct: true }
        - { text: "It collapses into a 'Share' dropdown", correct: false }
      explanation: "@media (max-width: 800px) flips .blog-post-layout to a single column and turns .blog-share into flex-direction: row."
---

This is a demo post that exercises every shortcode and partial in the
new blog scaffold so we can eyeball each one in preview before
running the bulk content import. Use it as a recipe / cheat-sheet
when authoring real posts.

## Factoid — pulled-out numbers

Use a factoid when you have a single number that anchors the article.
It's louder than a sentence in body text but cheaper than a full chart.

{{< factoid number="92%" label="of EU financial entities had not completed DORA gap analysis as of January 2025" source="Aenix engagement notes, Q1 2026" >}}

{{< factoid number="3.5×" label="multi-tenant GPU utilisation gain after switching to per-tenant scheduling on Cozystack" >}}

## Pull-quote — distinct from blockquote

The `quote` shortcode renders a styled pull-quote with optional
attribution. Distinct from the markdown `>` blockquote (which we keep
for inline quoting inside paragraphs).

{{< quote author="Andrei Kvapil" role="Founder, Aenix" >}}
Cozystack is what we wish OpenStack had become — a cloud-in-a-box you
can actually operate at scale, with Kubernetes-native ops and a
fraction of the operational surface.
{{< /quote >}}

## Spoiler — definitions, optional context, code-heavy explanations

Use `spoiler` for term definitions or extended context the casual
reader can skip.

{{< spoiler title="What is a Tenant CRD in Cozystack?" >}}
The `Tenant` CRD carves a multi-tenant cloud into isolated
buyer-namespaces with their own quotas, RBAC, and storage. Each
tenant gets a Kubernetes namespace plus a budgeted slice of the
underlying GPU / CPU / storage pool. Provider-side, the operator
reconciles the spec into HelmReleases and policies.
{{< /spoiler >}}

{{< spoiler title="Why Talos Linux as the host OS?" kind="term" >}}
Talos is an immutable, minimal Linux designed only to run Kubernetes.
There's no SSH, no shell, and no package manager — the whole node is
configured declaratively over the Talos API. That removes whole
classes of incident (drift, manual hotfixes, snowflake nodes) and
makes patching boring.
{{< /spoiler >}}

## Inline entity highlighting

Use markdown backticks for plain inline code: `kubectl get pods -A`.

For named system entities (CRDs, APIs, components, env vars, paths),
use `{{%/* var */%}}` so the colour signals what kind of thing it
is. The {{% var "Tenant" kind="crd" %}} CRD is reconciled by the
{{% var "cozystack-controller" kind="component" %}} component, which
reads {{% var "kubevirt.io/v1" kind="api" %}} and watches manifests
under {{% var "/etc/cozystack/" kind="path" %}}, switching mode
based on {{% var "COZY_ENV" kind="env" %}}.

## Code blocks

Fenced code blocks get Chroma syntax highlighting (github-dark theme):

```yaml
apiVersion: apps.cozystack.io/v1alpha1
kind: Tenant
metadata:
  name: tenant-acme
spec:
  quota:
    cpu: "32"
    memory: "128Gi"
    storage: "2Ti"
  rbac:
    admins:
      - alice@acme.example
```

```bash
# create the tenant
kubectl apply -f tenant-acme.yaml

# confirm
kubectl get tenant tenant-acme -o yaml
```

```go
func reconcileTenant(ctx context.Context, t *v1alpha1.Tenant) error {
    if t.Spec.Quota.CPU == "" {
        return errors.New("quota.cpu is required")
    }
    return nil
}
```

## What you get for free

Every blog post automatically renders:

- **Share bar** on the left (LinkedIn / X / Telegram / Copy link).
  On mobile it flips to a row above the content.
- **Quiz** at the end if `quiz:` is present in frontmatter.
- **Companion landing back-link** if `companion_landing:` is set
  (you'll see it just below this paragraph).
- **Related posts** — automatic by `topics:` overlap, or explicit via
  `related_posts:` frontmatter.
- **JSON-LD Article schema** + Open Graph + Twitter card meta.
- **Permalink** at `/blog/YYYY/MM/<slug>/`.
- **Auto-listing** in `/blog/` with filter chips by type and topic.
