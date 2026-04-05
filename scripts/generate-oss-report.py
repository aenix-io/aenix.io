#!/usr/bin/env python3
"""
Generates the OSS Contribution report page for aenix.io.

Fetches contribution data from GitHub API for Aenix engineers and updates
the oss-contribution/index.html page with current statistics.

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


def api_get(url, params=None):
    """Make a GitHub API request with rate limit handling."""
    for attempt in range(3):
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
            return None  # Search API restriction (e.g., BROngineer)
        print(f"  API error {resp.status_code}: {resp.text[:200]}", file=sys.stderr)
        return None
    return None


def search_count(query):
    """Get total_count from GitHub Search API."""
    result = api_get("https://api.github.com/search/issues", {"q": query, "per_page": 1})
    if result is None:
        return None
    return result.get("total_count", 0)


def get_merged_prs(author, org=None, repo=None):
    """Count merged PRs for an author in an org or specific repo."""
    date_end = datetime.now(timezone.utc).strftime("%Y-%m-%d")
    if repo:
        q = f"author:{author} type:pr is:merged repo:{repo} created:{DATE_START}..{date_end}"
    elif org:
        q = f"author:{author} type:pr is:merged org:{org} created:{DATE_START}..{date_end}"
    else:
        q = f"author:{author} type:pr is:merged is:public created:{DATE_START}..{date_end}"
    return search_count(q)


def get_contribution_stats(login):
    """Get non-PR contribution stats for an engineer."""
    date_end = datetime.now(timezone.utc).strftime("%Y-%m-%d")
    date_range = f"created:{DATE_START}..{date_end}"

    stats = {}

    # Issues opened
    count = search_count(f"author:{login} type:issue is:public {date_range}")
    stats["issues_total"] = count

    # Issues in cozystack org
    count = search_count(f"author:{login} type:issue org:cozystack {date_range}")
    stats["issues_cozy"] = count

    # PR reviews
    count = search_count(f"reviewed-by:{login} type:pr is:public {date_range}")
    stats["reviews_total"] = count

    count = search_count(f"reviewed-by:{login} type:pr org:cozystack {date_range}")
    stats["reviews_cozy"] = count

    # Issue comments
    count = search_count(f"commenter:{login} type:issue is:public {date_range}")
    stats["issue_comments_total"] = count

    count = search_count(f"commenter:{login} type:issue org:cozystack {date_range}")
    stats["issue_comments_cozy"] = count

    # PR comments
    count = search_count(f"commenter:{login} type:pr is:public {date_range}")
    stats["pr_comments_total"] = count

    count = search_count(f"commenter:{login} type:pr org:cozystack {date_range}")
    stats["pr_comments_cozy"] = count

    return stats


def collect_data():
    """Collect all contribution data."""
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

        # Cozystack PRs
        cozy_prs = get_merged_prs(login, org="cozystack")
        info["cozy_prs"] = cozy_prs if cozy_prs is not None else 0

        # External PRs (each project)
        ext_total = 0
        for repo in EXTERNAL_PROJECTS:
            count = get_merged_prs(login, repo=repo)
            if count:
                ext_total += count
        info["external_prs"] = ext_total

        # Personal PRs (lexfrei only)
        personal_prs = 0
        if login == "lexfrei":
            for repo in LEXFREI_PERSONAL_REPOS:
                count = get_merged_prs(login, repo=repo)
                if count:
                    personal_prs += count
        info["personal_prs"] = personal_prs

        # Non-PR contributions
        stats = get_contribution_stats(login)
        if stats.get("issues_total") is None:
            info["api_restricted"] = True
            info["issues"] = 0
            info["reviews"] = 0
            info["comments"] = 0
        else:
            info["api_restricted"] = False
            info["issues"] = stats.get("issues_total", 0)
            info["reviews"] = stats.get("reviews_total", 0)
            comments = (stats.get("issue_comments_total", 0) or 0) + (
                stats.get("pr_comments_total", 0) or 0
            )
            info["comments"] = comments

            info["issues_cozy"] = stats.get("issues_cozy", 0) or 0
            info["reviews_cozy"] = stats.get("reviews_cozy", 0) or 0
            comments_cozy = (stats.get("issue_comments_cozy", 0) or 0) + (
                stats.get("pr_comments_cozy", 0) or 0
            )
            info["comments_cozy"] = comments_cozy

        info["total_prs"] = info["cozy_prs"] + info["external_prs"] + info["personal_prs"]

        data["engineers"].append(info)
        time.sleep(0.5)  # Be nice to the API

    # Sort by total PRs descending
    data["engineers"].sort(key=lambda e: e["total_prs"], reverse=True)

    # Compute totals
    data["total_cozy_prs"] = sum(e["cozy_prs"] for e in data["engineers"])
    data["total_external_prs"] = sum(e["external_prs"] for e in data["engineers"])
    data["total_personal_prs"] = sum(e["personal_prs"] for e in data["engineers"])
    data["total_prs"] = data["total_cozy_prs"] + data["total_external_prs"] + data["total_personal_prs"]
    data["total_issues"] = sum(e["issues"] for e in data["engineers"] if not e.get("api_restricted"))
    data["total_reviews"] = sum(e["reviews"] for e in data["engineers"] if not e.get("api_restricted"))
    data["total_comments"] = sum(e["comments"] for e in data["engineers"] if not e.get("api_restricted"))
    data["num_engineers"] = sum(1 for e in data["engineers"] if e["total_prs"] > 0)

    # Cost estimates
    hourly_rate = 53.57
    cozy_hrs = data["total_cozy_prs"] * 4
    ext_hrs = data["total_external_prs"] * 8.5
    personal_hrs = data["total_personal_prs"] * 5
    data["total_hours"] = cozy_hrs + ext_hrs + personal_hrs
    data["total_value"] = int(data["total_hours"] * hourly_rate)
    data["cozy_hours"] = cozy_hrs
    data["cozy_value"] = int(cozy_hrs * hourly_rate)
    data["ext_hours"] = ext_hrs
    data["ext_value"] = int(ext_hrs * hourly_rate)
    data["personal_hours"] = personal_hrs
    data["personal_value"] = int(personal_hrs * hourly_rate)

    return data


def update_html(data):
    """Update the oss-contribution/index.html with new data."""
    html_path = os.path.join(os.path.dirname(os.path.dirname(__file__)), "oss-contribution", "index.html")

    if not os.path.exists(html_path):
        print(f"Error: {html_path} not found", file=sys.stderr)
        sys.exit(1)

    with open(html_path, "r", encoding="utf-8") as f:
        html = f.read()

    def fmt(n):
        """Format number with spaces as thousands separator."""
        return f"{n:,}".replace(",", " ")

    # Update hero stats
    replacements = [
        # Total PRs
        (r'(<div class="stat-v c">)[^<]+(</div><div class="stat-l">Total OSS PRs)',
         rf'\g<1>{fmt(data["total_prs"])}\g<2>'),
        # Cozystack PRs
        (r'(<div class="stat-v">)[^<]+(</div><div class="stat-l">Cozystack org)',
         rf'\g<1>{fmt(data["total_cozy_prs"])}\g<2>'),
        # External PRs
        (r'(<div class="stat-v g">)[^<]+(</div><div class="stat-l">External upstream)',
         rf'\g<1>{fmt(data["total_external_prs"])}\g<2>'),
        # Personal PRs
        (r'(<div class="stat-v">)[^<]+(</div><div class="stat-l">Personal OSS)',
         rf'\g<1>{fmt(data["total_personal_prs"])}\g<2>'),
        # Engineers count
        (r'(<div class="stat-v">)[^<]+(</div><div class="stat-l">Engineers)',
         rf'\g<1>{data["num_engineers"]}\g<2>'),
    ]

    for pattern, replacement in replacements:
        html = re.sub(pattern, replacement, html)

    # Update category cards
    html = re.sub(r'(<div class="cat-n">)[^<]+(</div>\s*<div class="cat-sub">PRs across cozystack)',
                  rf'\g<1>{fmt(data["total_cozy_prs"])}\g<2>', html)
    html = re.sub(r'(<div class="cat-n"[^>]*>)[^<]+(</div>\s*<div class="cat-sub">PRs to third-party)',
                  rf'\g<1>{fmt(data["total_external_prs"])}\g<2>', html)

    # Update cost section
    html = re.sub(r'(<div class="cost-v">)[^<]*(1[, ]?\d{3}|[\d,]+)\s*(</div><div class="cost-s">all three)',
                  rf'\g<1>{fmt(data["total_prs"])}\g<3>', html)
    html = re.sub(r'(<div class="cost-lbl">Total hours</div><div class="cost-v">)[\d, ]+',
                  rf'\g<1>{fmt(int(data["total_hours"]))} ', html)
    html = re.sub(r'(<div class="cost-lbl">Total value</div><div class="cost-v">)\$[\d, ]+',
                  rf'\g<1>${fmt(int(data["total_value"] / 1000))} ', html)

    # Update CNCF totals
    html = re.sub(r'(Issues opened</div>\s*<div class="cat-n"[^>]*>)[\d+, ]+',
                  rf'\g<1>{fmt(data["total_issues"])}+', html)
    html = re.sub(r'(PR reviews</div>\s*<div class="cat-n"[^>]*>)[\d+, ]+',
                  rf'\g<1>{fmt(data["total_reviews"])}+', html)
    html = re.sub(r'(Comments</div>\s*<div class="cat-n"[^>]*>)[\d+, ]+',
                  rf'\g<1>{fmt(data["total_comments"])}+', html)

    # Update report generation date
    html = re.sub(r'(Open Source Contribution Report · Jan 2025 – )[^<]+',
                  rf'\g<1>{data["date"]}', html)

    with open(html_path, "w", encoding="utf-8") as f:
        f.write(html)

    print(f"Updated {html_path}", file=sys.stderr)
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

    # Save raw data for debugging
    data_path = os.path.join(os.path.dirname(__file__), "oss-data.json")
    with open(data_path, "w") as f:
        json.dump(data, f, indent=2)
    print(f"Saved raw data to {data_path}", file=sys.stderr)

    update_html(data)


if __name__ == "__main__":
    main()
