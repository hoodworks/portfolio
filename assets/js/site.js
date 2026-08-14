/* ==========================================================================
   site.js — renders the entire page from content.js
   You should not need to edit this file. All content lives in content.js.
   Vanilla JS, no dependencies, no build step.
   ========================================================================== */
(function () {
  "use strict";

  /* ---------------------------------------------------------------- guard */
  if (typeof CONTENT === "undefined") {
    document.body.innerHTML =
      '<pre style="color:#ED1C24;font:14px/1.6 monospace;padding:40px">' +
      "content.js did not load.\n\n" +
      "Most likely cause: a syntax error in content.js (a missing comma or quote).\n" +
      "Open the browser console for the exact line, or undo your last commit on GitHub." +
      "</pre>";
    return;
  }

  var C = CONTENT;
  var P = C.profile || {};
  var S = C.settings || {};
  var T = (S.sectionTitles) || {};
  var SHOW = (S.show) || {};
  var $ = function (s, r) { return (r || document).querySelector(s); };
  var $$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };

  function el(tag, cls, txt) {
    var n = document.createElement(tag);
    if (cls) n.className = cls;
    if (txt != null) n.textContent = txt;
    return n;
  }
  function esc(s) { return String(s == null ? "" : s); }

  /* ---------------------------------------------------------------- icons */
  var ICONS = {
    link:      '<path d="M10 13a5 5 0 007.54.54l3-3a5 5 0 00-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 00-7.54-.54l-3 3a5 5 0 007.07 7.07l1.71-1.71"/>',
    globe:     '<circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 010 20a15.3 15.3 0 010-20"/>',
    mail:      '<rect x="2" y="4" width="20" height="16" rx="2"/><path d="M22 6l-10 7L2 6"/>',
    phone:     '<path d="M22 16.9v3a2 2 0 01-2.2 2 19.8 19.8 0 01-8.6-3.1 19.5 19.5 0 01-6-6A19.8 19.8 0 012 4.2 2 2 0 014 2h3a2 2 0 012 1.7c.1 1 .4 1.9.7 2.8a2 2 0 01-.4 2.1L8.1 9.9a16 16 0 006 6l1.3-1.2a2 2 0 012.1-.5c.9.3 1.8.6 2.8.7A2 2 0 0122 16.9z"/>',
    download:  '<path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/><path d="M7 10l5 5 5-5M12 15V3"/>',
    play:      '<path d="M5 3l14 9-14 9V3z"/>',
    vimeo:     '<path d="M22 7.4c-.1 2.1-1.6 5-4.4 8.7-2.9 3.9-5.4 5.8-7.4 5.8-1.2 0-2.3-1.2-3.2-3.5L5.3 12c-.6-2.3-1.3-3.5-2-3.5-.2 0-.7.3-1.5.9L1 8.2c.9-.8 1.8-1.6 2.7-2.5C4.9 4.6 5.8 4.1 6.4 4c1.5-.2 2.4.9 2.8 3.1.4 2.4.7 3.9.8 4.5.5 2 1 3 1.6 3 .4 0 1.1-.7 2-2.1.9-1.4 1.3-2.5 1.4-3.2.1-1-.3-1.6-1.4-1.6-.5 0-1 .1-1.6.4C13.1 4.6 15.1 3 18 3.1c2.1.1 3.1 1.5 3 4.3z"/>',
    youtube:   '<path d="M22.5 6.9a2.8 2.8 0 00-2-2C18.8 4.5 12 4.5 12 4.5s-6.8 0-8.5.4a2.8 2.8 0 00-2 2A29 29 0 001 12a29 29 0 00.5 5.1 2.8 2.8 0 002 2c1.7.4 8.5.4 8.5.4s6.8 0 8.5-.4a2.8 2.8 0 002-2A29 29 0 0023 12a29 29 0 00-.5-5.1z"/><path d="M9.8 15.3l5.7-3.3-5.7-3.3v6.6z" fill="#0A0A0B" stroke="none"/>',
    instagram: '<rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor"/>',
    linkedin:  '<path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-4 0v7h-4v-13h4v1.5A6 6 0 0116 8z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>',
    imdb:      '<rect x="2" y="5" width="20" height="14" rx="2"/><path d="M6 9v6M9.5 9v6l1.2-4 1.3 4V9M15 9v6h1.2a1.8 1.8 0 001.8-1.8v-2.4A1.8 1.8 0 0016.2 9H15z"/>',
    behance:   '<path d="M2 6h6a3 3 0 010 6H2V6zM2 12h6.5a3 3 0 010 6H2v-6zM14 14h8a4 4 0 10-8 0zM15 17.5a3.6 3.6 0 006 .5M15 6h6"/>',
    tiktok:    '<path d="M16 3a5 5 0 005 5v3a8 8 0 01-5-1.8V15a6 6 0 11-6-6c.3 0 .7 0 1 .1v3.2a2.8 2.8 0 102 2.7V3h3z"/>',
    facebook:  '<path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3V2z"/>',
    x:         '<path d="M3 3l7.5 9.5L3.3 21h2.2l6-6.8L16.6 21H21l-7.9-10L20.6 3h-2.2l-5.6 6.4L8 3H3z"/>',
    github:    '<path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.9a3.4 3.4 0 00-.9-2.6c3-.3 6.2-1.5 6.2-6.7A5.2 5.2 0 0019.9 5 4.9 4.9 0 0019.8.7S18.6.4 16 2.2a13.4 13.4 0 00-7 0C6.4.4 5.2.7 5.2.7A4.9 4.9 0 005.1 5a5.2 5.2 0 00-1.4 3.6c0 5.2 3.2 6.4 6.2 6.7a3.4 3.4 0 00-.9 2.6V22"/>'
  };
  function icon(name, cls) {
    var d = ICONS[name] || ICONS.link;
    var fillOnly = (name === "play" || name === "vimeo" || name === "youtube" ||
                    name === "tiktok" || name === "facebook" || name === "x");
    return '<svg class="' + (cls || "") + '" viewBox="0 0 24 24" aria-hidden="true" ' +
           'fill="' + (fillOnly ? "currentColor" : "none") + '" ' +
           'stroke="' + (fillOnly ? "none" : "currentColor") + '" ' +
           'stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round">' + d + "</svg>";
  }
  function guessIcon(url, label) {
    var u = (url || "").toLowerCase(), l = (label || "").toLowerCase();
    var map = ["vimeo", "youtube", "instagram", "linkedin", "imdb", "behance", "tiktok", "facebook", "github"];
    for (var i = 0; i < map.length; i++) if (u.indexOf(map[i]) > -1 || l.indexOf(map[i]) > -1) return map[i];
    if (u.indexOf(".pdf") > -1) return "download";
    if (u.indexOf("mailto:") === 0) return "mail";
    if (u.indexOf("tel:") === 0) return "phone";
    if (u.indexOf("twitter.com") > -1 || u.indexOf("x.com") > -1) return "x";
    return "globe";
  }

  /* ------------------------------------------------- video URL utilities */
  // Accepts watch URLs, short URLs, shorts URLs, or already-built embed URLs.
  function parseVideo(raw) {
    var url = String(raw || "").trim();
    var m;
    // YouTube
    m = url.match(/(?:youtube\.com\/(?:watch\?(?:.*&)?v=|embed\/|shorts\/|live\/)|youtu\.be\/)([A-Za-z0-9_-]{6,})/);
    if (m) return { kind: "youtube", id: m[1] };
    // Vimeo (handles private hash: vimeo.com/123456789/abcdef123)
    m = url.match(/vimeo\.com\/(?:video\/|channels\/[^\/]+\/|groups\/[^\/]+\/videos\/)?(\d+)(?:[\/?#]([A-Za-z0-9]+))?/);
    if (m) return { kind: "vimeo", id: m[1], hash: m[2] || "" };
    return { kind: "other", id: "", src: url };
  }
  function embedSrc(v) {
    var p = parseVideo(v.embedUrl);
    if (p.kind === "youtube") {
      return "https://www.youtube-nocookie.com/embed/" + p.id +
             "?autoplay=1&rel=0&modestbranding=1&playsinline=1";
    }
    if (p.kind === "vimeo") {
      return "https://player.vimeo.com/video/" + p.id +
             (p.hash ? "?h=" + p.hash + "&" : "?") + "autoplay=1&title=0&byline=0&portrait=0&dnt=1";
    }
    return p.src;
  }
  // Returns a thumbnail URL immediately when possible; Vimeo resolves async.
  function thumbFor(v, imgEl) {
    if (v.thumbnail) return v.thumbnail;
    var p = parseVideo(v.embedUrl);
    if (p.kind === "youtube") return "https://i.ytimg.com/vi/" + p.id + "/hqdefault.jpg";
    if (p.kind === "vimeo" && imgEl) {
      // oEmbed is a public JSON endpoint — no key needed. Fails silently offline.
      fetch("https://vimeo.com/api/oembed.json?url=https%3A//vimeo.com/" + p.id)
        .then(function (r) { return r.ok ? r.json() : null; })
        .then(function (j) {
          if (j && j.thumbnail_url) {
            imgEl.src = j.thumbnail_url.replace(/-d_\d+x\d+$/, "-d_960");
          }
        })
        .catch(function () { /* keep the gradient fallback */ });
    }
    return "";
  }
  // Sub-label under a link. Absolute links show their domain; relative links
  // (a PDF in this repo, say) show the filename — never the host we're served
  // from, which would read as "localhost" or "username.github.io".
  function hostOf(url) {
    var u = String(url || "");
    if (/^mailto:/i.test(u)) return u.replace(/^mailto:/i, "");
    if (/^tel:/i.test(u))    return u.replace(/^tel:/i, "");
    if (!/^https?:\/\//i.test(u)) return u.split("/").pop() || "";
    try { return new URL(u).hostname.replace(/^www\./, ""); }
    catch (e) { return u; }
  }

  /* ------------------------------------------------------------- masonry */
  // Sets each tile's grid-row span from its measured height so 16:9 and 9:16
  // cards pack tightly with no stretching and no dead space.
  var ROW = 8, GAP = 20;
  function layoutGrid(grid) {
    if (!grid) return;
    var cs = getComputedStyle(grid);
    var gap = parseFloat(cs.columnGap) || GAP;
    $$(".tile", grid).forEach(function (t) {
      if (t.hidden) return;
      var h = t.firstElementChild ? t.firstElementChild.getBoundingClientRect().height : 0;
      if (!h) return;
      t.style.gridRowEnd = "span " + Math.ceil((h + gap) / ROW);
    });
  }
  var layoutAll = debounce(function () {
    layoutGrid($("#videoGrid"));
    layoutGrid($("#photoGrid"));
  }, 60);

  function debounce(fn, ms) {
    var t; return function () { clearTimeout(t); t = setTimeout(fn, ms); };
  }

  /* ------------------------------------------------------------ 1. HEAD */
  function renderMeta() {
    var full = [P.name, P.business].filter(Boolean).join(" — ");
    document.title = full || "Portfolio";
    var d = P.tagline || P.bio || "";
    setMeta('meta[name="description"]', d);
    setMeta('meta[property="og:title"]', full, "content");
    setMeta('meta[property="og:description"]', d, "content");
  }
  function setMeta(sel, val) {
    var n = $(sel); if (n && val) n.setAttribute("content", val);
  }

  /* ------------------------------------------------------------- 2. NAV */
  function renderNav() {
    var mark = (P.business || P.name || "HMG").split(/\s+/).map(function (w) { return w[0]; })
      .join("").slice(0, 3).toUpperCase();
    $('[data-bind="brandMark"]').textContent = mark;
    $('[data-bind="brandName"]').textContent = P.name || "";

    var items = [];
    if (SHOW.videos !== false && (C.videos || []).length) items.push(["videos", T.videos || "Video"]);
    if (SHOW.photos !== false && (C.photos || []).length) items.push(["photos", T.photos || "Photography"]);
    if (SHOW.resume !== false && C.resume) items.push(["resume", T.resume || "Resume"]);
    if (SHOW.links !== false && (C.links || []).length) items.push(["links", T.links || "Links"]);
    items.push(["contact", T.contact || "Contact"]);

    var nav = $("#navLinks");
    items.forEach(function (it) {
      var a = el("a", null, it[1]);
      a.href = "#" + it[0];
      a.dataset.section = it[0];
      nav.appendChild(a);
    });

    var toggle = $("#navToggle");
    toggle.addEventListener("click", function () {
      var open = nav.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", String(open));
      toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
    });
    nav.addEventListener("click", function (e) {
      if (e.target.tagName === "A") {
        nav.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
      }
    });

    var header = $("#nav");
    var onScroll = function () { header.classList.toggle("is-stuck", window.scrollY > 40); };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
  }

  /* ------------------------------------------------------------ 3. HERO */
  function renderHero() {
    $('[data-bind="business"]').textContent = P.business || "";
    $('[data-bind="name"]').textContent = P.name || "";
    $('[data-bind="title"]').textContent = P.title || "";
    $('[data-bind="tagline"]').textContent = P.tagline || P.bio || "";
    $('[data-bind="location"]').textContent = P.location || "";

    if (P.heroImage) {
      var bg = $("#heroBg");
      bg.classList.add("has-image");
      bg.style.backgroundImage = "url('" + P.heroImage + "')";
    }

    var cta = $("#heroCta");
    var first = (C.videos || []).length ? "#videos" : ((C.photos || []).length ? "#photos" : "#contact");
    add(cta, S.heroCtaPrimary || "View Work", first, "btn btn--primary", "play");
    if (P.resumeUrl) add(cta, S.heroCtaSecondary || "Resume", P.resumeUrl, "btn btn--outline", "download", true);
    if (P.email) add(cta, S.heroCtaTertiary || "Contact", "#contact", "btn btn--outline", "mail");

    function add(parent, label, href, cls, ico, isFile) {
      var a = el("a", cls);
      a.href = href;
      if (isFile) { a.target = "_blank"; a.rel = "noopener"; }
      a.innerHTML = '<span class="btn__ico">' + icon(ico) + "</span>" + esc(label);
      parent.appendChild(a);
    }
  }

  /* ---------------------------------------------------------- 4. VIDEOS */
  var videoOrder = []; // indices currently visible, for lightbox prev/next

  function renderVideos() {
    var list = C.videos || [];
    if (SHOW.videos === false || !list.length) return;
    $("#videos").hidden = false;
    $('[data-bind="videosTitle"]').textContent = T.videos || "Video";

    var grid = $("#videoGrid");
    list.forEach(function (v, i) {
      var portrait = String(v.orientation || "").toLowerCase() === "portrait";

      var tile = el("div", "tile");
      tile.dataset.cat = v.category || "";

      var card = el("button", "vcard");
      card.type = "button";
      card.setAttribute("aria-label", "Play " + (v.title || "video"));
      card.dataset.index = String(i);

      var media = el("div", "vcard__media vcard__media--" + (portrait ? "portrait" : "widescreen"));
      media.appendChild(el("div", "vcard__fallback"));

      var img = new Image();
      img.className = "vcard__img";
      img.loading = "lazy";
      img.decoding = "async";
      img.alt = "";
      img.addEventListener("load", function () { img.classList.add("is-loaded"); layoutAll(); });
      img.addEventListener("error", function () { img.remove(); });
      var src = thumbFor(v, img);
      if (src) img.src = src;
      media.appendChild(img);

      media.appendChild(el("div", "vcard__scrim"));

      var play = el("div", "vcard__play");
      play.innerHTML = icon("play");
      media.appendChild(play);

      if (v.category) media.appendChild(el("span", "vcard__badge", v.category));
      media.appendChild(el("span", "vcard__ratio", portrait ? "9:16" : "16:9"));

      card.appendChild(media);

      var body = el("div", "vcard__body");
      body.appendChild(el("h3", "vcard__title", v.title || "Untitled"));
      if (v.description) body.appendChild(el("p", "vcard__desc", v.description));
      card.appendChild(body);

      card.addEventListener("click", function () { openVideo(i); });

      tile.appendChild(card);
      grid.appendChild(tile);
    });

    buildFilters($("#videoFilters"), list, grid, $("#videoEmpty"), function () {
      videoOrder = $$(".tile", grid).filter(function (t) { return !t.hidden; })
        .map(function (t) { return Number($(".vcard", t).dataset.index); });
    });
  }

  /* ---------------------------------------------------------- 5. PHOTOS */
  var photoOrder = [];

  function renderPhotos() {
    var list = C.photos || [];
    if (SHOW.photos === false || !list.length) return;
    $("#photos").hidden = false;
    $('[data-bind="photosTitle"]').textContent = T.photos || "Photography";

    var grid = $("#photoGrid");
    list.forEach(function (p, i) {
      var tile = el("div", "tile");
      tile.dataset.cat = p.category || "";

      var card = el("button", "pcard");
      card.type = "button";
      card.dataset.index = String(i);
      card.setAttribute("aria-label", "Open " + (p.alt || "photo"));

      var img = new Image();
      img.src = p.src;
      img.alt = p.alt || "";
      img.loading = "lazy";
      img.decoding = "async";
      img.addEventListener("load", function () { img.classList.add("is-loaded"); layoutAll(); });
      card.appendChild(img);

      if (p.caption) card.appendChild(el("span", "pcard__cap", p.caption));
      card.addEventListener("click", function () { openPhoto(i); });

      tile.appendChild(card);
      grid.appendChild(tile);
    });

    buildFilters($("#photoFilters"), list, grid, $("#photoEmpty"), function () {
      photoOrder = $$(".tile", grid).filter(function (t) { return !t.hidden; })
        .map(function (t) { return Number($("button", t).dataset.index); });
    });
  }

  /* --------------------------------------------------------- 6. FILTERS */
  function buildFilters(host, list, grid, emptyEl, onChange) {
    var cats = [];
    list.forEach(function (x) {
      var c = (x.category || "").trim();
      if (c && cats.indexOf(c) === -1) cats.push(c);
    });
    var apply = function (cat) {
      var visible = 0;
      $$(".tile", grid).forEach(function (t) {
        var show = (cat === "*" || t.dataset.cat === cat);
        t.hidden = !show;
        if (show) visible++;
      });
      if (emptyEl) emptyEl.hidden = visible > 0;
      onChange();
      layoutAll();
    };

    if (cats.length < 2) { apply("*"); return; } // one category = no filter bar

    var all = [["*", "All"]].concat(cats.map(function (c) { return [c, c]; }));
    all.forEach(function (pair, i) {
      var b = el("button", i === 0 ? "is-active" : null, pair[1]);
      b.type = "button";
      b.setAttribute("aria-pressed", i === 0 ? "true" : "false");
      b.addEventListener("click", function () {
        $$("button", host).forEach(function (o) {
          o.classList.remove("is-active"); o.setAttribute("aria-pressed", "false");
        });
        b.classList.add("is-active"); b.setAttribute("aria-pressed", "true");
        apply(pair[0]);
      });
      host.appendChild(b);
    });
    apply("*");
  }

  /* ---------------------------------------------------------- 7. RESUME */
  function renderResume() {
    var R = C.resume;
    if (SHOW.resume === false || !R) return;
    $("#resume").hidden = false;
    $('[data-bind="resumeTitle"]').textContent = T.resume || "Resume";
    $('[data-bind="resumeSummary"]').textContent = R.summary || P.bio || "";

    var dl = $("#resumeDownload");
    if (P.resumeUrl) {
      dl.href = P.resumeUrl;
      dl.innerHTML = '<span class="btn__ico">' + icon("download") + "</span>Download PDF";
    } else { dl.remove(); }

    var ex = $("#resumeExperience");
    (R.experience || []).forEach(function (j) {
      var d = el("div", "job");
      d.appendChild(el("h4", "job__title", j.title || ""));
      var meta = el("p", "job__meta");
      var parts = [];
      if (j.company) parts.push('<span class="job__company">' + esc(j.company) + "</span>");
      var range = [j.start, j.end].filter(Boolean).join(" – ");
      if (range) parts.push(esc(range));
      if (j.location) parts.push(esc(j.location));
      meta.innerHTML = parts.join(" &nbsp;·&nbsp; ");
      d.appendChild(meta);
      if ((j.bullets || []).length) {
        var ul = el("ul", "job__bullets");
        j.bullets.forEach(function (b) { ul.appendChild(el("li", null, b)); });
        d.appendChild(ul);
      }
      ex.appendChild(d);
    });

    var sk = $("#resumeSkills");
    (R.skills || []).forEach(function (g) {
      var w = el("div", "skillgroup");
      w.appendChild(el("p", "skillgroup__name", g.group || ""));
      var chips = el("div", "chips");
      (g.items || []).forEach(function (it) { chips.appendChild(el("span", "chip", it)); });
      w.appendChild(chips);
      sk.appendChild(w);
    });

    var ed = $("#resumeEducation");
    var edu = R.education || [];
    if (!edu.length) { $("#eduHead").remove(); ed.remove(); }
    edu.forEach(function (e) {
      var w = el("div", "edu");
      w.appendChild(el("p", "edu__cred", e.credential || ""));
      w.appendChild(el("p", "edu__meta", [e.school, e.year].filter(Boolean).join(" · ")));
      ed.appendChild(w);
    });
  }

  /* ----------------------------------------------------------- 8. LINKS */
  function renderLinks() {
    var list = C.links || [];
    if (SHOW.links === false || !list.length) return;
    $("#links").hidden = false;
    $('[data-bind="linksTitle"]').textContent = T.links || "Links";

    var groups = {}, order = [];
    list.forEach(function (l) {
      var g = (l.category || "Links").trim();
      if (!groups[g]) { groups[g] = []; order.push(g); }
      groups[g].push(l);
    });

    var host = $("#linkGroups");
    order.forEach(function (g) {
      var wrap = el("div", "linkgroup");
      wrap.appendChild(el("h3", "linkgroup__name", g));
      var grid = el("div", "linkgrid");
      groups[g].forEach(function (l) {
        var a = el("a", "linkcard");
        a.href = l.url || "#";
        var external = /^https?:/i.test(l.url || "");
        if (external) { a.target = "_blank"; a.rel = "noopener noreferrer"; }
        a.innerHTML =
          '<span class="linkcard__ico">' + icon(l.icon || guessIcon(l.url, l.label)) + "</span>" +
          '<span class="linkcard__label">' + esc(l.label || l.url) +
            '<span class="linkcard__host">' + esc(hostOf(l.url)) + "</span></span>" +
          '<span class="linkcard__arrow">&#8594;</span>';
        grid.appendChild(a);
      });
      wrap.appendChild(grid);
      host.appendChild(wrap);
    });
  }

  /* --------------------------------------------------------- 9. CONTACT */
  function renderContact() {
    $('[data-bind="contactTitle"]').textContent = T.contact || "Get In Touch";
    $('[data-bind="contactBlurb"]').textContent = S.contactBlurb || "";
    var host = $("#contactActions");
    if (P.email) push(P.email, "mailto:" + P.email, "btn btn--primary", "mail");
    if (P.phone) push(P.phone, "tel:" + P.phone.replace(/[^\d+]/g, ""), "btn btn--outline", "phone");
    if (P.resumeUrl) push("Resume", P.resumeUrl, "btn btn--outline", "download");
    function push(label, href, cls, ico) {
      var a = el("a", cls); a.href = href;
      a.innerHTML = '<span class="btn__ico">' + icon(ico) + "</span>" + esc(label);
      host.appendChild(a);
    }
    $('[data-bind="footerName"]').textContent =
      "© " + new Date().getFullYear() + " " + (P.name || "") + (P.business ? " · " + P.business : "");
    $('[data-bind="footerNote"]').textContent = S.footerNote || "";
  }

  /* ------------------------------------------------------- 10. LIGHTBOX */
  var lb = $("#lightbox"), lbStage = $("#lbStage"), lbCap = $("#lbCaption");
  var lbMode = null, lbPos = 0, lastFocus = null;

  function openVideo(index) { lbMode = "video"; lbPos = Math.max(0, videoOrder.indexOf(index)); showLb(); }
  function openPhoto(index) { lbMode = "photo"; lbPos = Math.max(0, photoOrder.indexOf(index)); showLb(); }

  function showLb() {
    lastFocus = document.activeElement;
    lb.hidden = false;
    lb.setAttribute("aria-hidden", "false");
    document.body.classList.add("is-locked");
    requestAnimationFrame(function () { lb.classList.add("is-open"); });
    paintLb();
    $("#lbClose").focus();
  }

  function paintLb() {
    lbStage.innerHTML = "";
    lbCap.innerHTML = "";
    var order = lbMode === "video" ? videoOrder : photoOrder;
    var multi = order.length > 1;
    $("#lbPrev").hidden = !multi;
    $("#lbNext").hidden = !multi;
    if (!order.length) return;

    if (lbMode === "video") {
      var v = C.videos[order[lbPos]];
      var portrait = String(v.orientation || "").toLowerCase() === "portrait";
      var frame = el("div", "lb__frame lb__frame--" + (portrait ? "portrait" : "widescreen"));
      var f = document.createElement("iframe");
      f.src = embedSrc(v);
      f.title = v.title || "Video";
      f.allow = "autoplay; fullscreen; picture-in-picture; encrypted-media";
      f.setAttribute("allowfullscreen", "");
      f.referrerPolicy = "strict-origin-when-cross-origin";
      frame.appendChild(f);
      lbStage.appendChild(frame);
      lbCap.innerHTML = "<strong>" + esc(v.title || "") + "</strong>" + esc(v.description || "");
    } else {
      var p = C.photos[order[lbPos]];
      var img = new Image();
      img.className = "lb__img";
      img.src = p.src;
      img.alt = p.alt || "";
      lbStage.appendChild(img);
      if (p.caption || p.alt) lbCap.textContent = p.caption || p.alt;
    }
  }

  function closeLb() {
    lb.classList.remove("is-open");
    setTimeout(function () {
      lb.hidden = true;
      lb.setAttribute("aria-hidden", "true");
      lbStage.innerHTML = "";       // kills the iframe → stops playback
      document.body.classList.remove("is-locked");
      if (lastFocus && lastFocus.focus) lastFocus.focus();
    }, 240);
  }
  function step(d) {
    var order = lbMode === "video" ? videoOrder : photoOrder;
    if (!order.length) return;
    lbPos = (lbPos + d + order.length) % order.length;
    paintLb();
  }

  $("#lbClose").addEventListener("click", closeLb);
  $("#lbPrev").addEventListener("click", function () { step(-1); });
  $("#lbNext").addEventListener("click", function () { step(1); });
  lb.addEventListener("click", function (e) { if (e.target === lb || e.target === lbStage) closeLb(); });
  document.addEventListener("keydown", function (e) {
    if (lb.hidden) return;
    if (e.key === "Escape") closeLb();
    else if (e.key === "ArrowLeft") step(-1);
    else if (e.key === "ArrowRight") step(1);
    else if (e.key === "Tab") {
      // simple focus containment
      var f = $$("button, iframe, a[href]", lb).filter(function (n) { return !n.hidden; });
      if (!f.length) return;
      var i = f.indexOf(document.activeElement);
      e.preventDefault();
      f[(i + (e.shiftKey ? -1 : 1) + f.length) % f.length].focus();
    }
  });

  /* ------------------------------------------------- 11. SCROLL EFFECTS */
  function initReveal() {
    if (!("IntersectionObserver" in window)) return;
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) { en.target.classList.add("is-in"); io.unobserve(en.target); }
      });
    }, { rootMargin: "0px 0px -8% 0px", threshold: .06 });
    // Deliberately NOT applied to .tile — filtered-out tiles would never
    // intersect, and would stay invisible when filtered back in.
    $$(".section .wrap > *").forEach(function (n) {
      n.classList.add("reveal"); io.observe(n);
    });
  }
  function initSpy() {
    if (!("IntersectionObserver" in window)) return;
    var links = $$("#navLinks a");
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (!en.isIntersecting) return;
        links.forEach(function (a) { a.classList.toggle("is-active", a.dataset.section === en.target.id); });
      });
    }, { rootMargin: "-45% 0px -50% 0px" });
    ["videos", "photos", "resume", "links", "contact"].forEach(function (id) {
      var s = document.getElementById(id);
      if (s && !s.hidden) io.observe(s);
    });
  }

  /* --------------------------------------------------------------- BOOT */
  renderMeta();
  renderNav();
  renderHero();
  renderVideos();
  renderPhotos();
  renderResume();
  renderLinks();
  renderContact();

  layoutAll();
  window.addEventListener("resize", layoutAll);
  window.addEventListener("load", layoutAll);
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(layoutAll);
  setTimeout(layoutAll, 400);
  setTimeout(layoutAll, 1500);

  initReveal();
  initSpy();
})();
