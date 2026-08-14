# Deploying to GitHub Pages

> **Status: Steps 1 and 2 are already done.**
> The repo exists at `github.com/hoodworks/portfolio` and is cloned to
> `~/Documents/GitHub/portfolio` via GitHub Desktop.
>
> **Your next move:** open GitHub Desktop, you'll see ~21 changed files.
> Write a summary like `initial site`, click **Commit to main**, then
> **Push origin**. Then jump to **Step 3** below to switch Pages on.
>
> Your site will be live at **https://hoodworks.github.io/portfolio/**
>
> Steps 1 and 2 are kept below for reference only.


This is a static site: plain HTML, CSS, and JavaScript. No build step, no server,
no dependencies. GitHub Pages serves these files exactly as they are.

Total time: about five minutes.

---

## What's in the repo

```
/
├── index.html                  ← the page shell (no content in it)
├── content.js                  ← THE ONLY FILE YOU EDIT
├── .nojekyll                   ← tells GitHub Pages not to preprocess anything
├── DEPLOY.md                   ← this file
├── EDITING.md                  ← how to add videos, photos, links
├── README.md
└── assets/
    ├── css/style.css
    ├── js/site.js
    ├── img/                    ← photos, thumbnails, favicon, og-image
    └── resume/joe-hood-resume.pdf
```

`index.html` **must** stay at the top level of the repo. Do not put these files
inside a `docs/` or `site/` subfolder unless you also change the Pages source
setting to match.

---

## Step 1 — Create the repository

1. Go to **github.com** → **+** (top right) → **New repository**.
2. **Repository name:** `portfolio` (or whatever you like — remember it,
   it becomes part of your URL).
3. **Visibility:** Public. *(Private repos need a paid plan for Pages.)*
4. Do **not** check "Add a README" — you already have one.
5. Click **Create repository**.

---

## Step 2 — Upload the files

### Option A — Drag and drop (no command line)

1. On the empty repo page, click **uploading an existing file**.
2. Open the site folder on your computer. Select **everything inside it** —
   `index.html`, `content.js`, `DEPLOY.md`, `EDITING.md`, `README.md`, and the
   `assets` folder — and drag it all into the browser window.
3. Wait for the upload to finish (the images take a moment).
4. Commit message: `initial site`. Click **Commit changes**.

> **Important:** upload the *contents* of the folder, not the folder itself.
> If GitHub shows `portfolio/index.html` instead of `index.html`, you
> dragged the wrong thing — delete and re-upload the inner files.

> **`.nojekyll` is a hidden file.** Mac Finder won't show it by default. Press
> `Cmd + Shift + .` in Finder to reveal hidden files before dragging, or create
> it directly on GitHub afterwards: **Add file → Create new file**, name it
> `.nojekyll`, leave it empty, commit. Without it, GitHub ignores any folder
> whose name starts with an underscore. You don't have any right now, so this is
> insurance, not an emergency.

### Option B — Command line

```bash
cd path/to/portfolio
git init
git add .
git commit -m "initial site"
git branch -M main
git remote add origin https://github.com/hoodworks/portfolio.git
git push -u origin main
```

---

## Step 3 — Turn on GitHub Pages

1. In your repo, click **Settings** (top bar).
2. In the left sidebar, click **Pages**.
3. Under **Build and deployment → Source**, choose **Deploy from a branch**.
4. Under **Branch**, set:
   - branch: **`main`**
   - folder: **`/ (root)`**
5. Click **Save**.

Wait 1–2 minutes, then reload the Settings → Pages screen. A green banner appears
with your live URL:

```
https://hoodworks.github.io/portfolio/
```

> **First deploy sometimes 404s for a minute or two.** That's normal. Reload.
> If it's still 404 after five minutes, check the **Actions** tab for a failed
> "pages build and deployment" run, and confirm `index.html` is at the repo root.

Every future commit to `main` republishes automatically in about 60 seconds.

---

## Step 4 — Point your own domain at it (optional)

Do this whenever you're ready to serve the site at `hoodworksvideo.com` or
`portfolio.hoodworksvideo.com`.

### 4a. Decide which address you want

- **Subdomain** — `portfolio.hoodworksvideo.com` or `www.hoodworksvideo.com`.
  Simpler, safer, and it does not disturb your existing site at the root domain.
- **Root/apex** — `hoodworksvideo.com` with no prefix. This takes over your main
  domain. Only do this if nothing else is currently served there.

### 4b. Add DNS records at your domain registrar

Log in wherever you bought `hoodworksvideo.com` (GoDaddy, Namecheap, Google
Domains/Squarespace, Cloudflare, Wix, etc.) and open the **DNS** settings.

**For a subdomain** — add one record:

| Type | Name / Host | Value / Points to | TTL |
|---|---|---|---|
| `CNAME` | `portfolio` | `hoodworks.github.io` | default |

(Use `www` in the Name field if you want `www.hoodworksvideo.com`.)

**For the root domain** — add four A records and four AAAA records:

| Type | Name / Host | Value |
|---|---|---|
| `A` | `@` | `185.199.108.153` |
| `A` | `@` | `185.199.109.153` |
| `A` | `@` | `185.199.110.153` |
| `A` | `@` | `185.199.111.153` |
| `AAAA` | `@` | `2606:50c0:8000::153` |
| `AAAA` | `@` | `2606:50c0:8001::153` |
| `AAAA` | `@` | `2606:50c0:8002::153` |
| `AAAA` | `@` | `2606:50c0:8003::153` |

> These are GitHub's published Pages IPs. They change very rarely, but if the
> domain won't verify, confirm the current list at
> `docs.github.com/pages` → "Managing a custom domain for your GitHub Pages site".

If you use Cloudflare, set the record's proxy status to **DNS only** (grey cloud)
until GitHub has issued the certificate, then you can turn the proxy back on.

### 4c. Tell GitHub about the domain

1. Repo → **Settings** → **Pages** → **Custom domain**.
2. Type `portfolio.hoodworksvideo.com` (or `hoodworksvideo.com`) → **Save**.

This automatically creates a file called `CNAME` in your repo containing that one
line. **Don't delete it** — if it disappears, the custom domain stops working.
(A `CNAME.example` file is included in this repo for reference; rename it to
`CNAME` only if you'd rather set the domain by committing the file yourself.)

### 4d. Force HTTPS

DNS takes anywhere from 10 minutes to 24 hours to propagate. Once GitHub shows
"DNS check successful", the **Enforce HTTPS** checkbox on that same Pages screen
becomes available. Check it. Certificate issuance takes a few more minutes.

---

## Paths: the one thing that will bite you

A GitHub Pages project site is served from a subfolder:
`https://username.github.io/repo-name/`.

That means **every path in this site is relative on purpose**:

```html
<link rel="stylesheet" href="assets/css/style.css">   ✅ works
<link rel="stylesheet" href="/assets/css/style.css">  ❌ 404s on a project site
```

If you ever add an image, a PDF, or a link to a file in this repo, write the path
**without a leading slash**:

- ✅ `assets/img/photo-07.jpg`
- ❌ `/assets/img/photo-07.jpg`

This is also why you can open `index.html` by double-clicking it on your computer
and it still works.

---

## Testing locally before you push

Double-clicking `index.html` works for most things. If you want it fully accurate
(the Vimeo thumbnail fetch needs a real server), run:

```bash
cd path/to/portfolio
python3 -m http.server 8000
```

Then open `http://localhost:8000` in your browser. `Ctrl+C` to stop.

---

## Troubleshooting

| Symptom | Cause | Fix |
|---|---|---|
| Page is blank, black background only | Syntax error in `content.js` | Open the browser console (`Cmd+Opt+J`) for the line number, or revert the last commit |
| 404 on the whole site | `index.html` isn't at the repo root, or Pages source is set to the wrong folder | Settings → Pages → Branch `main`, folder `/ (root)` |
| Site loads but unstyled | `assets/css/style.css` didn't upload, or a leading `/` crept into the path | Check the `assets/css` folder exists in the repo |
| Video tile shows a red gradient instead of a thumbnail | Thumbnail couldn't be fetched (private Vimeo video, or offline) | Set `thumbnail: "assets/img/your-frame.jpg"` on that entry |
| Video won't play in the lightbox | Vimeo privacy setting blocks embedding on other domains | Vimeo → video → Settings → Privacy → "Where can this be embedded?" → allow your domain |
| Changes don't appear | Browser cache, or the deploy is still running | Hard-reload (`Cmd+Shift+R`), and check the **Actions** tab |
| Custom domain says "not properly configured" | DNS hasn't propagated yet | Wait, then re-save the custom domain field |
