# Short-link creator — Apps Script deployment

`Code.gs` is the write path of the link shortener. It is a web app bound to the link-registry spreadsheet: `/go/` opens it in a new tab with the target URL as a query parameter, Google checks the visitor is signed in to an `aenix.io` account, the script validates the request and appends one row to the sheet.

There is no token in the browser and no CORS to configure — that is the whole reason the button opens a tab instead of calling `fetch`. Apps Script does not return CORS headers for authenticated cross-origin requests, so a `fetch` from `aenix.io` cannot work; a top-level navigation sidesteps the problem entirely.

## 1. Paste the script

1. Open the registry spreadsheet → **Extensions → Apps Script**.
2. Delete whatever is in `Code.gs` and paste the contents of this directory's `Code.gs`.
3. **Save**.

If the spreadsheet's tab is not called `Sheet1`, change `SHEET_NAME` at the top of the script.

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

## Keeping the rules in sync

The validation in `Code.gs` is a hand-maintained mirror of `scripts/lib/link-validate.mjs` — same host allow-list, same slug rules, same reserved words, same secret-stripping. `scripts/test-apps-script.mjs` loads `Code.gs` into a sandbox and asserts both implementations reach the same verdict on the same inputs. Run it after touching either file:

```sh
node scripts/test-apps-script.mjs
```
