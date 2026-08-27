# Editing your site

**You only ever edit one file: `content.js`.**

Everything on the site — your name, bio, resume, links, videos, photos — is generated
from that file. You never touch HTML, CSS, or JavaScript.

---

## The 60-second workflow (GitHub web editor)

You do not need to install anything. Do this from any browser, including your phone.

1. Go to your repository on **github.com**.
2. Click **`content.js`** in the file list.
3. Click the **pencil icon** (top right of the file) — "Edit this file".
4. Make your change (see the copy-paste blocks below).
5. Scroll to the bottom, type a short note like `add new reel`, click **Commit changes**.
6. Wait about **60 seconds**, then reload your site. Done.

> **If the site goes blank after an edit**, you made a typo in `content.js` —
> almost always a missing comma or a missing quote.
> Fix: go to the repo → **Commits** → find your last commit → click **`...`** →
> **Revert**. The site comes back. Then try the edit again.

---

## Add a video

Find the `videos: [` array in `content.js`. Paste this block right after the `[`,
then change the values:

```js
    {
      title:       "My New Project",
      embedUrl:    "https://vimeo.com/123456789",
      orientation: "widescreen",
      section:     "directing",
      category:    "Brand Campaign",
      description: "One line about what this is.",
      thumbnail:   ""
    },
```

**`section`** — which of the two showcases the video appears in:

| Value | Section on the page |
|---|---|
| `"directing"` | **Directing & Producing** |
| `"editing"` | **Editing & VFX** |

Both sections read from the same `videos` array — this field is the only thing
that decides where a video lands. To rename a section or add a third one, edit
`settings.videoSections` at the bottom of `content.js`.

**`embedUrl`** — just paste the normal share link. All of these work as-is:

| You copy this | Works? |
|---|---|
| `https://vimeo.com/123456789` | yes |
| `https://vimeo.com/123456789/a1b2c3d4e5` (private link) | yes |
| `https://youtu.be/dQw4w9WgXcQ` | yes |
| `https://www.youtube.com/watch?v=dQw4w9WgXcQ` | yes |
| `https://www.youtube.com/shorts/dQw4w9WgXcQ` | yes |

**`orientation`** — the one field you must get right:

- Shot horizontally (normal video) → `"widescreen"`
- Shot vertically (Reel / TikTok / Short) → `"portrait"`

Portrait videos get a tall 9:16 tile in the grid and a tall 9:16 player in the
lightbox. They are never letterboxed, cropped, or stretched.

**`category`** — type anything. The filter buttons above the grid build themselves
from whatever categories exist. Add a video with `category: "Weddings"` and a
**Weddings** filter button appears automatically. Remove the last video in a
category and that button disappears.

**`thumbnail`** — leave it as `""` and the site pulls the poster frame from
YouTube or Vimeo automatically. Only fill it in if you want a custom frame:
`thumbnail: "assets/img/my-thumb.jpg"`.

---

## Add a photo

> **The photo section is currently switched off.** To show it, open
> `content.js`, scroll to `settings` at the very bottom, and change
> `photos: false` to `photos: true` in the `show:` line. The entries are
> all still there waiting.

Two steps: upload the file, then add the entry.

**Step 1 — upload the image**

1. In your repo, click into the **`assets`** folder, then **`img`**.
2. Click **Add file** → **Upload files**.
3. Drag your photo in, then **Commit changes**.

Name files lowercase with dashes, no spaces: `bts-downtown-shoot.jpg` ✅,
`BTS Downtown Shoot.JPG` ❌.
Resize to about **2000px on the long edge** before uploading — full-size camera
files will make your site slow.

**Step 2 — add the entry**

Find the `photos: [` array in `content.js` and paste this in:

```js
    { src: "assets/img/bts-downtown-shoot.jpg", alt: "Crew setting up a dolly shot downtown", category: "Behind the Scenes", caption: "Downtown shoot, spring 2026." },
```

`alt` is what screen readers and Google see — write a real description.
`category` and `caption` are optional. Any aspect ratio works; the grid packs
them automatically.

---

## Add a link

Find the `links: [` array and paste:

```js
    { label: "My New Profile", url: "https://example.com/joehood", category: "Professional", icon: "globe" },
```

`category` groups the buttons under a heading. Use an existing category name to
add to that group, or a new name to create a new group.

`icon` is optional — if you leave it out, the site guesses from the URL.
Available icons:

```
link  mail  phone  vimeo  youtube  instagram  linkedin
imdb  behance  tiktok  facebook  x  github  globe  play  download
```

---

## Update your resume

### The text on the page

In `content.js`, find `resume:` and edit `summary`, `experience`, `skills`, and
`education`. A new job is one block:

```js
      {
        title:   "Director of Photography",
        company: "Some Client",
        start:   "Mar 2025",
        end:     "Present",
        location: "Los Angeles, CA",
        bullets: [
          "What you did and the result.",
          "Another accomplishment."
        ]
      },
```

### Selected credits

The credits table under the resume comes from `resume.credits`. One line each:

```js
      { client: "CLIENT NAME", project: "\"Project Title\"", role: "Director, Editor", year: "2025", group: "Branded Campaigns" },
```

For music videos, add a `label`:

```js
      { client: "ARTIST NAME", project: "\"Song Title\"", label: "Record Label", role: "VFX", year: "2025", group: "Music Videos" },
```

`group` creates the heading — reuse an existing one or type a new one to start
a new block. To hide the whole credits table, set `showCredits: false` just
above the array.

### The downloadable PDF

Replace `assets/resume/joe-hood-resume.pdf` with your real file, keeping the
**same filename**, and the download button keeps working with no code change.

To do it on GitHub: `assets` → `resume` → **Add file** → **Upload files** →
drop in a PDF named `joe-hood-resume.pdf` → Commit. It overwrites the old one.

If you'd rather use a different filename, upload it and then change this line in
`content.js`:

```js
    resumeUrl: "assets/resume/your-new-filename.pdf",
```

---

## Change headings, buttons, or hide a section

At the bottom of `content.js`, the `settings` block controls wording:

```js
    heroCtaPrimary:   "View Work",
    sectionTitles: { videos: "Video", photos: "Photography", ... },
    contactBlurb: "...",
```

To hide a whole section without deleting its content, flip it to `false`:

```js
    show: { videos: true, photos: false, resume: true, links: true }
```

---

## The four rules that prevent every breakage

1. **Every entry ends with a comma.** `{ ... },`
2. **Text goes in double quotes.** `"like this"`
3. **Apostrophes are fine** inside double quotes (`"Joe's reel"`). A double quote
   inside text must be written `\"`.
4. **Never delete a `[`, `]`, `{`, or `}`** that wasn't part of the block you pasted.

If you're nervous, edit on a branch: in the GitHub editor, choose
"Create a new branch for this commit" instead of committing to `main`. You can
preview and merge later. But honestly — commit to `main` and revert if it breaks.
It takes ten seconds.
