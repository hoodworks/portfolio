# Joe Hood — Portfolio Portal

Static resume + portfolio site for Joe Hood / Hoodworks Media Group.
Plain HTML, CSS, and vanilla JavaScript. No build step, no framework, no backend.

**Live site:** https://hoodworks.github.io/portfolio/

---

## The one thing to know

All content lives in **`content.js`**. Nothing is hardcoded in the HTML.
Adding a video, a photo, or a link means adding one object to one array in that
one file — nothing else, anywhere, changes.

- **[EDITING.md](EDITING.md)** — how to add content from the GitHub web editor,
  with copy-paste-ready blocks.
- **[DEPLOY.md](DEPLOY.md)** — how to put it on GitHub Pages and point a custom
  domain at it.

---

## Structure

```
index.html            page shell — contains zero content
content.js            all content: profile, resume, links, videos, photos
assets/css/style.css  dark cinematic theme
assets/js/site.js     renders everything from content.js
assets/img/           photos, video thumbnails, favicon, social preview image
assets/resume/        the downloadable resume PDF
.nojekyll             disables GitHub's Jekyll preprocessing
```

## What it does

- Filterable video showcase that handles 16:9 and 9:16 in the same grid — portrait
  videos get true 9:16 tiles and a 9:16 lightbox player, never letterboxed or
  stretched
- Vimeo and YouTube embeds accepted as ordinary share links; thumbnails fetched
  automatically when not supplied
- Masonry photo grid with lightbox, keyboard navigation, and lazy loading
- Structured resume section with a PDF download
- Links grouped by category with auto-detected icons
- Fully responsive, keyboard accessible, reduced-motion aware
- Every path relative, so it works from a GitHub Pages project subfolder and from
  a local `file://` open

## Local preview

```bash
python3 -m http.server 8000
# open http://localhost:8000
```
