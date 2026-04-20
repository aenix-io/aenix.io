#!/usr/bin/env python3
"""
Generates the OSS Contribution report page for aenix.io.

Fetches contribution data from GitHub API for Aenix engineers and updates
the content/oss-contribution.md page with current statistics. Only
aggregate numbers are regenerated — hand-curated narrative (upstream
project bullets, per-repo breakdown list) is preserved.

Requires: GITHUB_TOKEN environment variable for API access.
"""

import json
import os
import re
import sys
import time
from datetime import datetime, timezone

import requests

GITHUB_TOKEN = os.environ.get("GITHUB_TOKEN", "")
HEADERS = {
    "Accept": "application/vnd.github.v3+json",
    "Authorization": f"Bearer {GITHUB_TOKEN}",
}

# Engineers and their start dates (first regular commit to aenix-io/aenix-org)
ENGINEERS = [
    {"login": "kvaps", "since": "2025-01-21", "status": "active"},
    {"login": "lllamnyp", "since": "2025-01-31", "status": "active"},
    {"login": "klinch0", "since": "2025-01-01", "status": "left", "left": "Nov 2025"},
    {"login": "IvanHunters", "since": "2025-07-23", "status": "active"},
    {"login": "sircthulhu", "since": "2026-01-20", "status": "active"},
    {"login": "lexfrei", "since": "2026-01-19", "status": "active"},
    {"login": "nbykov0", "since": "2025-01-01", "status": "left", "left": "Feb 2026"},
    {"login": "tym83", "since": "2026-01-15", "status": "active"},
    {"login": "myasnikovdaniil", "since": "2026-02-18", "status": "active"},
    {"login": "androndo", "since": "2026-01-05", "status": "active"},
    {"login": "kitsunoff", "since": "2026-03-27", "status": "active"},
    {"login": "BROngineer", "since": "2026-03-09", "status": "active"},
]

# External projects to track PRs for
EXTERNAL_PROJECTS = [
    "seaweedfs/seaweedfs",
    "seaweedfs/seaweedfs-cosi-driver",
    "aenix-io/etcd-operator",
    "squat/kilo",
    "piraeusdatastore/helm-charts",
    "piraeusdatastore/linstor-csi",
    "clastix/kamaji",
    "kubernetes-sigs/container-object-storage-interface",
    "kubernetes-sigs/container-object-storage-interface-api",
    "kubernetes-sigs/external-dns",
    "VictoriaMetrics/operator",
    "kubevirt/csi-driver",
    "kubeovn/kube-ovn",
    "epam/edp-keycloak-operator",
    "grafana/grafana-operator",
    "meshtastic/python",
    "gethomepage/homepage",
    "cncf/landscape",
    "cncf/foundation",
    "cncf/gitdm",
    "Homebrew/homebrew-core",
    "NixOS/nixpkgs",
]

LEXFREI_PERSONAL_REPOS = [
    "lexfrei/charts",
    "lexfrei/cloudflare-tunnel-gateway-controller",
    "lexfrei/extractedprism",
    "lexfrei/minecraft-operator",
    "lexfrei/k8s",
    "lexfrei/kuberture",
    "lexfrei/terraform-provider-namedotcom",
    "lexfrei/claudeline",
    "lexfrei/mcp-tg",
]

DATE_START = "2025-01-01"
HOURLY_RATE = 53.57
HOURS_PER_COZY_PR = 4
HOURS_PER_EXTERNAL_PR = 8.5
HOURS_PER_PERSONAL_PR = 5


def api_get(url, params=None):
    """Make a GitHub API request with rate limit handling."""
    for _ in range(3):
        resp = requests.get(url, headers=HEADERS, params=params)
        if resp.status_code == 200:
            return resp.json()
        if resp.status_code == 403 and "rate limit" in resp.text.lower():
            reset = int(resp.headers.get("X-RateLimit-Reset", time.time() + 60))
            wait = max(reset - int(time.time()), 5)
            print(f"  Rate limited, waiting {wait}s...", file=sys.stderr)
            time.sleep(wait)
            continue
        if resp.status_code == 422:
            return None
        print(f"  API error {resp.status_code}: {resp.text[:200]}", file=sys.stderr)
        return None
    return None


def search_count(query):
    result = api_get("https://api.github.com/search/issues", {"q": query, "per_page": 1})
    if result is None:
        return None
    return result.get("total_count", 0)


def get_merged_prs(author, org=None, repo=None):
    date_end = datetime.now(timezone.utc).strftime("%Y-%m-%d")
    if repo:
        q = f"author:{author} type:pr is:merged repo:{repo} created:{DATE_START}..{date_end}"
    elif org:
        q = f"author:{author} type:pr is:merged org:{org} created:{DATE_START}..{date_end}"
    else:
        q = f"author:{author} type:pr is:merged is:public created:{DATE_START}..{date_end}"
    return search_count(q)


def get_contribution_stats(login):
    date_end = datetime.now(timezone.utc).strftime("%Y-%m-%d")
    date_range = f"created:{DATE_START}..{date_end}"
    stats = {}
    for key, query in [
        ("issues_total", f"author:{login} type:issue is:public {date_range}"),
        ("issues_cozy", f"author:{login} type:issue org:cozystack {date_range}"),
        ("reviews_total", f"reviewed-by:{login} type:pr is:public {date_range}"),
        ("reviews_cozy", f"reviewed-by:{login} type:pr org:cozystack {date_range}"),
        ("issue_comments_total", f"commenter:{login} type:issue is:public {date_range}"),
        ("issue_comments_cozy", f"commenter:{login} type:issue org:cozystack {date_range}"),
        ("pr_comments_total", f"commenter:{login} type:pr is:public {date_range}"),
        ("pr_comments_cozy", f"commenter:{login} type:pr org:cozystack {date_range}"),
    ]:
        stats[key] = search_count(query)
    return stats


def collect_data():
    print("Collecting contribution data...", file=sys.stderr)
    data = {"engineers": [], "date": datetime.now(timezone.utc).strftime("%B %d, %Y")}

    for eng in ENGINEERS:
        login = eng["login"]
        print(f"  Processing {login}...", file=sys.stderr)

        info = {
            "login": login,
            "since": eng["since"],
            "status": eng["status"],
            "left": eng.get("left", ""),
        }

        cozy_prs = get_merged_prs(login, org="cozystack")
        info["cozy_prs"] = cozy_prs if cozy_prs is not None else 0

        ext_total = 0
        for repo in EXTERNAL_PROJECTS:
            count = get_merged_prs(login, repo=repo)
            if count:
                ext_total += count
        info["external_prs"] = ext_total

        personal_prs = 0
        if login == "lexfrei":
            for repo in LEXFREI_PERSONAL_REPOS:
                count = get_merged_prs(login, repo=repo)
                if count:
                    personal_prs += count
        info["personal_prs"] = personal_prs

        stats = get_contribution_stats(login)
        if stats.get("issues_total") is None:
            info["api_restricted"] = True
            info["issues"] = 0
            info["reviews"] = 0
            info["comments"] = 0
        else:
            info["api_restricted"] = False
            info["issues"] = stats.get("issues_total", 0) or 0
            info["reviews"] = stats.get("reviews_total", 0) or 0
            info["comments"] = (stats.get("issue_comments_total", 0) or 0) + (
                stats.get("pr_comments_total", 0) or 0
            )

        info["total_prs"] = info["cozy_prs"] + info["external_prs"] + info["personal_prs"]
        data["engineers"].append(info)
        time.sleep(0.5)

    data["engineers"].sort(key=lambda e: e["total_prs"], reverse=True)

    data["total_cozy_prs"] = sum(e["cozy_prs"] for e in data["engineers"])
    data["total_external_prs"] = sum(e["external_prs"] for e in data["engineers"])
    data["total_personal_prs"] = sum(e["personal_prs"] for e in data["engineers"])
    data["total_prs"] = (
        data["total_cozy_prs"] + data["total_external_prs"] + data["total_personal_prs"]
    )
    data["total_issues"] = sum(
        e["issues"] for e in data["engineers"] if not e.get("api_restricted")
    )
    data["total_reviews"] = sum(
        e["reviews"] for e in data["engineers"] if not e.get("api_restricted")
    )
    data["total_comments"] = sum(
        e["comments"] for e in data["engineers"] if not e.get("api_restricted")
    )
    data["non_pr_total"] = data["total_issues"] + data["total_reviews"] + data["total_comments"]
    data["num_engineers"] = sum(1 for e in data["engineers"] if e["total_prs"] > 0)

    cozy_hrs = data["total_cozy_prs"] * HOURS_PER_COZY_PR
    ext_hrs = data["total_external_prs"] * HOURS_PER_EXTERNAL_PR
    personal_hrs = data["total_personal_prs"] * HOURS_PER_PERSONAL_PR
    data["cozy_hours"] = cozy_hrs
    data["ext_hours"] = ext_hrs
    data["personal_hours"] = personal_hrs
    data["cozy_value"] = int(cozy_hrs * HOURLY_RATE)
    data["ext_value"] = int(ext_hrs * HOURLY_RATE)
    data["personal_value"] = int(personal_hrs * HOURLY_RATE)
    data["total_hours"] = cozy_hrs + ext_hrs + personal_hrs
    data["total_value"] = int(data["total_hours"] * HOURLY_RATE)
    data["eng_months"] = round(data["total_hours"] / 168, 1)
    data["cost_per_pr"] = int(data["total_value"] / data["total_prs"]) if data["total_prs"] else 0

    return data


def update_markdown(data):
    """Regenerate aggregate numbers in content/oss-contribution.md.

    Preserves hand-curated narrative — only swaps numeric values in the
    Overview table, CNCF totals list, and Investment & Value block.
    Also writes last_updated into frontmatter.
    """
    md_path = os.path.join(
        os.path.dirname(os.path.dirname(os.path.abspath(__file__))),
        "content",
        "oss-contribution.md",
    )
    if not os.path.exists(md_path):
        print(f"Error: {md_path} not found", file=sys.stderr)
        sys.exit(1)

    with open(md_path, "r", encoding="utf-8") as f:
        md = f.read()

    def usd(n):
        return f"${int(n):,}"

    def num(n):
        return f"{int(n):,}"

    iso_date = datetime.now(timezone.utc).strftime("%Y-%m-%d")

    if re.search(r"^last_updated:", md, flags=re.MULTILINE):
        md = re.sub(
            r"^last_updated:.*$",
            f'last_updated: "{iso_date}"',
            md,
            count=1,
            flags=re.MULTILINE,
        )
    else:
        md = re.sub(
            r"(^---\n(?:.*\n)*?)(---\n)",
            rf'\1last_updated: "{iso_date}"\n\2',
            md,
            count=1,
        )

    md = re.sub(
        r"(\| Cozystack ecosystem \| )[^|]+(\| )[^|]+(\| )[^|]+(\|)",
        rf"\g<1>{num(data['total_cozy_prs'])} \g<2>~{num(data['cozy_hours'])} h \g<3>{usd(data['cozy_value'])} \g<4>",
        md,
    )
    md = re.sub(
        r"(\| External OSS upstream \| )[^|]+(\| )[^|]+(\| )[^|]+(\|)",
        rf"\g<1>{num(data['total_external_prs'])} \g<2>~{num(int(data['ext_hours']))} h \g<3>{usd(data['ext_value'])} \g<4>",
        md,
    )
    md = re.sub(
        r"(\| Personal OSS \(lexfrei\) \| )[^|]+(\| )[^|]+(\| )[^|]+(\|)",
        rf"\g<1>{num(data['total_personal_prs'])} \g<2>~{num(data['personal_hours'])} h \g<3>{usd(data['personal_value'])} \g<4>",
        md,
    )

    md = re.sub(
        r"(## All Contributions — CNCF Definition \(Jan 2025 – )[^)]+(\))",
        rf"\g<1>{data['date']}\g<2>",
        md,
    )

    md = re.sub(r"(- Issues opened: )[\d,+ ]+", rf"\g<1>{num(data['total_issues'])}+", md)
    md = re.sub(r"(- PR reviews: )[\d,+ ]+", rf"\g<1>{num(data['total_reviews'])}+", md)
    md = re.sub(r"(- Comments: )[\d,+ ]+", rf"\g<1>{num(data['total_comments'])}+", md)
    md = re.sub(r"(- Non-PR total: )[\d,+ ]+", rf"\g<1>{num(data['non_pr_total'])}+", md)

    md = re.sub(
        r"(\| External OSS projects \| )[\d,]+( \|)",
        rf"\g<1>{num(data['total_external_prs'])}\g<2>",
        md,
    )
    md = re.sub(
        r"(\| Personal OSS \(lexfrei\) \| )[\d,]+( \|)",
        rf"\g<1>{num(data['total_personal_prs'])}\g<2>",
        md,
    )

    md = re.sub(
        r"(\*\*Total PRs:\*\* )[\d,]+",
        rf"\g<1>{num(data['total_prs'])}",
        md,
    )
    md = re.sub(
        r"(\*\*Total hours:\*\* )[\d,]+ h \([\d.]+ engineer-months\)",
        rf"\g<1>{num(int(data['total_hours']))} h ({data['eng_months']} engineer-months)",
        md,
    )
    md = re.sub(
        r"(\*\*Total value:\*\* )\$[\d,]+ equivalent",
        rf"\g<1>{usd(data['total_value'])} equivalent",
        md,
    )
    md = re.sub(
        r"(\*\*Cost per PR:\*\* )\$[\d,]+ avg",
        rf"\g<1>{usd(data['cost_per_pr'])} avg",
        md,
    )

    with open(md_path, "w", encoding="utf-8") as f:
        f.write(md)

    print(f"Updated {md_path}", file=sys.stderr)
    print(f"  Total PRs: {data['total_prs']}", file=sys.stderr)
    print(f"  Total issues: {data['total_issues']}+", file=sys.stderr)
    print(f"  Total reviews: {data['total_reviews']}+", file=sys.stderr)
    print(f"  Total comments: {data['total_comments']}+", file=sys.stderr)
    print(f"  Estimated value: ${data['total_value']:,}", file=sys.stderr)


def main():
    if not GITHUB_TOKEN:
        print("Error: GITHUB_TOKEN environment variable required", file=sys.stderr)
        sys.exit(1)

    data = collect_data()

    data_path = os.path.join(os.path.dirname(os.path.abspath(__file__)), "oss-data.json")
    with open(data_path, "w") as f:
        json.dump(data, f, indent=2)
    print(f"Saved raw data to {data_path}", file=sys.stderr)

    update_markdown(data)


if __name__ == "__main__":
    main()
