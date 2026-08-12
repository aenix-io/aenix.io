# Short-link creator — Apps Script deployment

`Code.gs` is the write path of the link shortener. It is a web app bound to the link-registry spreadsheet: `/go/` opens it in a new tab with the target URL as a query parameter, Google checks the visitor is signed in to an `aenix.io` account, the script validates the request and appends one row to the sheet.

There is no token in the browser and no CORS to configure — that is the whole reason the button opens a tab instead of calling `fetch`. Apps Script does not return CORS headers for authenticated cross-origin requests, so a `fetch` from `aenix.io` cannot work; a top-level navigation sidesteps the problem entirely.

## 1. Paste the script

1. Open the registry spreadsheet → **Extensions → Apps Script**.
2. Delete whatever is in `Code.gs` and paste the contents of this directory's `Code.gs`.
3. Click **Untitled project** at the top left and give it a real name — `aenix short links`.
4. **Project Settings (⚙)** → tick **Show "appsscript.json" manifest file in editor**. Open the `appsscript.json` that appears in the file list and replace it with this directory's copy.
5. **Save**.

Step 4 is not optional. Without an explicit `oauthScopes` list, Apps Script infers the permissions it asks for, and the inference is not stable across redeployments or a change of Cloud project — the failure looks like:

```
You do not have permission to call SpreadsheetApp.getActiveSpreadsheet.
Required permissions: (…/auth/spreadsheets.currentonly || …/auth/spreadsheets)
```

The manifest also records the deployment settings (`executeAs`, `access`), so the intended configuration lives in the repository rather than only in a dialog someone clicked once.

If the spreadsheet's tab is not called `Sheet1`, change `SHEET_NAME` at the top of the script.

Do not skip the rename. The deployment runs as the accessing user, so every colleague hits Google's authorization screen the first time they create a link, and that screen shows the project name. `Untitled project (Unverified) needs your permission to access your data on Google` is indistinguishable from a phishing prompt, and people are right to cancel it.

## 1a. Optional — drop the "Unverified" warning

`(Unverified)` appears because the script's OAuth app has not been through Google's review. That is expected for an internal tool, and the way past it is **Advanced → Go to … (unsafe)**. To remove the warning instead, attach the script to a real Cloud project whose consent screen is internal to the domain:

1. **Project Settings (⚙) → Google Cloud Platform (GCP) Project → Change project**, and enter project number `733264768547` (`aenix-cloud` — the same project that holds the Workload Identity pool).
2. In the Cloud console: **APIs & Services → OAuth consent screen** → user type **Internal**.

Internal apps are restricted to `aenix.io` accounts, which is the policy this tool wanted anyway, and Google does not require verification for them.

Changing the Cloud project **revokes every authorization already granted** — everyone re-authorizes. Cheap while you are the only user, much less so after the team is onboarded, so decide this before rolling out.

## 2. Deploy as a web app

**Deploy → New deployment → ⚙ → Web app**, then:

| Setting | Value |
| --- | --- |
| Description | `short-link creator` |
| Execute as | **User accessing the web app** |
| Who has access | **Anyone within aenix.io** |

Both settings matter:

- *Execute as: user accessing* means the row is written by the person who submitted it, so `created_by` is an identity Google vouched for rather than a self-reported string.
- *Anyone within aenix.io* is the access check. Google refuses to run the script for anyone outside the Workspace domain, which is why the page itself needs no secret.

**Consequence of "execute as user accessing": everyone who creates links needs Editor access to the spreadsheet**, because the write happens under their own account. Share the sheet with the team as editors. If you would rather keep the sheet restricted, switch *Execute as* to **Me** — the script then writes on your behalf and `Session.getActiveUser()` still resolves within the same Workspace domain — but at that point the script's own permissions, not the sheet's, are what gate writing.

Authorize the script when prompted. Copy the deployment URL; it looks like:

```
https://script.google.com/a/macros/aenix.io/s/AKfycb…/exec
```

## 3. Wire the URL into the site

Put that URL into `hugo.yaml`:

```yaml
params:
  linkShortener:
    appsScriptUrl: "https://script.google.com/a/macros/aenix.io/s/AKfycb…/exec"
```

Until this is filled in, the **Create short link** button on `/go/` is disabled and says so.

## 4. Optional — make links appear in minutes instead of hours

Without this step the sync job still runs on its schedule, so a new row reaches the site at the next scheduled run. Adding a token lets the script tell GitHub to sync immediately.

1. Create a **fine-grained personal access token** scoped to `aenix-io/aenix.io` only, with **Contents: Read and write** (that is the permission `repository_dispatch` requires — there is no narrower one).
2. In the Apps Script editor: **Project Settings → Script properties → Add script property**
   - name `GITHUB_TOKEN`
   - value the token
3. Redeploy is not needed; script properties are read at run time.

Note what this token can do: anything with `Contents: write` on that repository. It is readable by anyone who can open the Apps Script project, so keep the project's sharing tight. If that trade is not worth it, skip this step — the schedule covers the same ground, just slower.

## Redeploying after an edit

Apps Script keeps serving the deployed version, not the saved one. After editing `Code.gs`: **Deploy → Manage deployments → ✏️ → Version: New version → Deploy**. The URL stays the same.

Take the ✏️ path, not **New deployment**. A new deployment mints a **new URL** and leaves the old one live, so the site keeps sending people to the previous version of the script while you assume you have updated it. If you do end up with a new URL, put it into `params.linkShortener.appsScriptUrl` in `hugo.yaml` and let the site rebuild.

## When authorization breaks

Changing the Cloud project, or redeploying after the script started calling a new service, invalidates the permissions already granted. Symptoms are always a `You do not have permission to call …` error naming the missing scope.

Fix in this order:

1. Confirm `appsscript.json` in the editor matches this directory's copy, and **Save**.
2. **Deploy → Manage deployments → ✏️ → Version: New version → Deploy.** The running deployment keeps serving the old code until you do.
3. Open the web app URL again and grant access. If the consent screen does not reappear, revoke the old grant first at <https://myaccount.google.com/permissions> and retry.

### Why the broad `spreadsheets` scope

The narrower `spreadsheets.currentonly` covers "the spreadsheet this application is installed in", and it is the obvious choice for a container-bound script — but it only applies when the code runs **in the document's context**: a custom menu, a sidebar, an `onOpen` trigger. A web app opened by URL runs outside any document, so there is no current spreadsheet to grant access to, and `getActiveSpreadsheet()` fails on permissions no matter how the script is bound.

So the script opens the registry by id (`SHEET_ID` at the top of `Code.gs`) and asks for the full `spreadsheets` scope. That is a genuinely wider grant — it covers every spreadsheet the authorizing user can reach — and it is the price of the write path being a web app. Worth remembering when reviewing what the team is asked to approve.

## Keeping the rules in sync

The validation in `Code.gs` is a hand-maintained mirror of `scripts/lib/link-validate.mjs` — same host allow-list, same slug rules, same reserved words, same secret-stripping. `scripts/test-apps-script.mjs` loads `Code.gs` into a sandbox and asserts both implementations reach the same verdict on the same inputs. Run it after touching either file:

```sh
node scripts/test-apps-script.mjs
```
