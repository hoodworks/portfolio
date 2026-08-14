/* ==========================================================================
   content.js  —  THE ONLY FILE YOU EVER NEED TO EDIT
   --------------------------------------------------------------------------
   Everything on the website is generated from the data below.
   Add a video, a photo, or a link by adding ONE object to the right array.
   Delete one by deleting its object. Nothing else, anywhere, has to change.

   RULES THAT WILL SAVE YOU:
     1. Every object ends with a comma  ,   except (optionally) the last one.
     2. Text goes inside "double quotes".
     3. An apostrophe inside text is fine: "Joe's reel". A double quote is not
        — write it as \" if you really need one.
     4. If the site goes blank after an edit, you broke rule 1 or 2. Undo the
        commit on GitHub and try again. Nothing is ever permanently lost.

   See EDITING.md for the click-by-click GitHub workflow.
   ========================================================================== */

const CONTENT = {

  /* ========================================================================
     1. PROFILE  —  hero section, page title, contact block
     ======================================================================== */
  profile: {
    name:      "Joe Hood",
    business:  "Hoodworks Media Group",
    title:     "Video Producer / Editor / Motion Designer",
    tagline:   "Story-first video for brands, artists, and businesses.",

    // 1–3 sentences. Shown under the hero and above the resume.
    bio: "I produce, shoot, and cut video end to end — brand films, social campaigns, motion graphics, and web design that ties it all together. Based in Los Angeles, working with clients nationwide through Hoodworks Media Group.",

    email:    "joe@hoodworks.media",
    phone:    "",                        // leave "" to hide it
    location: "Los Angeles, CA",

    // Relative path. Drop your PDF in assets/resume/ and point to it here.
    resumeUrl: "assets/resume/joe-hood-resume.pdf",

    // Optional hero background image (relative path). "" = clean gradient only.
    heroImage: ""
  },


  /* ========================================================================
     2. RESUME  —  the structured resume section
     ------------------------------------------------------------------------
     Same rules: add or remove one object per job / school / skill group.
     ======================================================================== */
  resume: {

    summary: "Multi-disciplinary video professional with experience across the full production pipeline — concept, production, post, motion graphics, and delivery. Comfortable owning a project solo or running a crew.",

    /* ---- WORK EXPERIENCE -------------------------------------------------
       PASTE-READY EXAMPLE — copy from { to }, and paste it as a new entry:

       {
         title:   "Job Title",
         company: "Company Name",
         start:   "Jan 2024",
         end:     "Present",
         location: "Los Angeles, CA",
         bullets: [
           "What you did and the result.",
           "Another accomplishment, with a number if you have one."
         ]
       },
    ---------------------------------------------------------------------- */
    experience: [
      {
        title:   "Owner / Executive Producer",
        company: "Hoodworks Media Group",
        start:   "2019",
        end:     "Present",
        location: "Los Angeles, CA",
        bullets: [
          "PLACEHOLDER — replace with your real role. Founded and run a full-service video production company serving brand, music, and small-business clients.",
          "Own every stage: pitch, budget, pre-production, direction, edit, color, motion graphics, and delivery.",
          "Built and maintain client-facing web presence and campaign assets."
        ]
      },
      {
        title:   "Video Editor / Motion Designer",
        company: "Client Name",
        start:   "2016",
        end:     "2019",
        location: "Los Angeles, CA",
        bullets: [
          "PLACEHOLDER — replace with a real past role.",
          "Cut long-form and short-form content for social, web, and broadcast delivery.",
          "Designed lower thirds, title packages, and animated brand elements."
        ]
      }
    ],

    /* ---- SKILLS ----------------------------------------------------------
       Grouped into columns. Add a group or add items to a group.

       { group: "Group Name", items: ["Thing", "Thing", "Thing"] },
    ---------------------------------------------------------------------- */
    skills: [
      { group: "Production", items: ["Directing", "Cinematography", "Lighting", "Audio Capture", "Producing"] },
      { group: "Post", items: ["Premiere Pro", "DaVinci Resolve", "Color Grading", "Sound Mixing"] },
      { group: "Motion & Design", items: ["After Effects", "Photoshop", "Illustrator", "Title Design"] },
      { group: "Web", items: ["HTML / CSS", "Web Design", "Wix", "WordPress", "SEO Basics"] }
    ],

    /* ---- EDUCATION / CERTIFICATIONS --------------------------------------
       { school: "School", credential: "Degree or Cert", year: "2015" },
    ---------------------------------------------------------------------- */
    education: [
      { school: "PLACEHOLDER University", credential: "B.A., Film & Media Production", year: "2015" }
    ]
  },


  /* ========================================================================
     3. LINKS  —  rendered grouped by `category`
     ------------------------------------------------------------------------
     PASTE-READY EXAMPLE — copy this whole block into the array below:

       {
         label:    "Name shown on the button",
         url:      "https://example.com",
         category: "Professional",       // any text; groups are auto-created
         icon:     "link"                // optional, see icon list below
       },

     ICON OPTIONS (anything else falls back to a generic link icon):
       link  mail  phone  vimeo  youtube  instagram  linkedin
       imdb  behance  tiktok  facebook  x  github  globe  play  download
     ======================================================================== */
  links: [
    { label: "LinkedIn",            url: "https://www.linkedin.com/in/REPLACE-ME",     category: "Professional", icon: "linkedin" },
    { label: "IMDb",                url: "https://www.imdb.com/name/REPLACE-ME",       category: "Professional", icon: "imdb" },
    { label: "Resume (PDF)",        url: "assets/resume/joe-hood-resume.pdf",          category: "Professional", icon: "download" },

    { label: "Vimeo Portfolio",     url: "https://vimeo.com/REPLACE-ME",               category: "Reels & Work", icon: "vimeo" },
    { label: "YouTube Channel",     url: "https://www.youtube.com/@REPLACE-ME",        category: "Reels & Work", icon: "youtube" },
    { label: "Behance",             url: "https://www.behance.net/REPLACE-ME",         category: "Reels & Work", icon: "behance" },

    { label: "Hoodworks Media Group", url: "https://hoodworks.media",                   category: "Client Sites", icon: "globe" },
    { label: "Client Project Site", url: "https://example.com",                        category: "Client Sites", icon: "globe" },

    { label: "Instagram",           url: "https://www.instagram.com/REPLACE-ME",       category: "Social",       icon: "instagram" },
    { label: "TikTok",              url: "https://www.tiktok.com/@REPLACE-ME",         category: "Social",       icon: "tiktok" }
  ],


  /* ========================================================================
     4. VIDEOS  —  filterable showcase, click to play in a lightbox
     ------------------------------------------------------------------------
     PASTE-READY EXAMPLE — copy this whole block into the array below:

       {
         title:       "Project Name",
         embedUrl:    "https://vimeo.com/123456789",
         orientation: "widescreen",        // "widescreen" (16:9) or "portrait" (9:16)
         category:    "Motion Graphics",   // any text; filter buttons are auto-created
         description: "One line about the project.",
         thumbnail:   ""                   // optional — see note below
       },

     embedUrl — paste ANY of these forms, the site converts them for you:
       https://vimeo.com/123456789
       https://player.vimeo.com/video/123456789
       https://youtu.be/dQw4w9WgXcQ
       https://www.youtube.com/watch?v=dQw4w9WgXcQ
       https://www.youtube.com/shorts/dQw4w9WgXcQ

     thumbnail — leave as "" and the site fetches the thumbnail automatically
     from YouTube or Vimeo. Only set it if you want a custom poster frame:
       thumbnail: "assets/img/my-custom-thumb.jpg"

     orientation — this is the one field you must get right.
       Shot horizontally (normal video)   -> "widescreen"
       Shot vertically (Reels / TikTok)   -> "portrait"
     ======================================================================== */
  videos: [
    {
      title:       "Brand Film — Placeholder",
      embedUrl:    "https://vimeo.com/76979871",
      orientation: "widescreen",
      category:    "Brand Film",
      description: "PLACEHOLDER ENTRY. Swap embedUrl for one of your own projects.",
      thumbnail:   "assets/img/thumb-widescreen.jpg"
    },
    {
      title:       "Title Package — Placeholder",
      embedUrl:    "https://www.youtube.com/watch?v=aqz-KE-bpKQ",
      orientation: "widescreen",
      category:    "Motion Graphics",
      description: "PLACEHOLDER ENTRY. Auto-pulls its thumbnail from YouTube.",
      thumbnail:   ""
    },
    {
      title:       "Vertical Social Cut — Placeholder",
      embedUrl:    "https://vimeo.com/76979871",
      orientation: "portrait",
      category:    "Social / Vertical",
      description: "PLACEHOLDER ENTRY. Shows how 9:16 sits in the grid without letterboxing.",
      thumbnail:   "assets/img/thumb-portrait.jpg"
    },
    {
      title:       "Web Design Walkthrough — Placeholder",
      embedUrl:    "https://www.youtube.com/watch?v=aqz-KE-bpKQ",
      orientation: "widescreen",
      category:    "Web Design",
      description: "PLACEHOLDER ENTRY.",
      thumbnail:   ""
    },
    {
      title:       "Reel Teaser — Placeholder",
      embedUrl:    "https://www.youtube.com/shorts/aqz-KE-bpKQ",
      orientation: "portrait",
      category:    "Social / Vertical",
      description: "PLACEHOLDER ENTRY. A second vertical, to show the grid handles a mix.",
      thumbnail:   "assets/img/thumb-portrait.jpg"
    }
  ],


  /* ========================================================================
     5. PHOTOS  —  masonry grid, click to open full size
     ------------------------------------------------------------------------
     PASTE-READY EXAMPLE — copy this whole block into the array below:

       {
         src:      "assets/img/my-photo.jpg",
         alt:      "Short description for screen readers and SEO",
         category: "On Set",              // optional; adds filter buttons
         caption:  "Caption shown in the lightbox."
       },

     HOW TO ADD A PHOTO FILE:
       On GitHub: open the assets/img folder -> "Add file" -> "Upload files"
       -> drag your image in -> Commit. Then add an entry here pointing to
       "assets/img/your-filename.jpg".
       Keep filenames lowercase with dashes, no spaces.
       Resize to ~2000px on the long edge before uploading — big files are slow.
     ======================================================================== */
  photos: [
    { src: "assets/img/photo-01.jpg", alt: "Placeholder still, horizontal", category: "Stills",  caption: "PLACEHOLDER — replace with your own image." },
    { src: "assets/img/photo-02.jpg", alt: "Placeholder still, vertical",   category: "Stills",  caption: "PLACEHOLDER — vertical images flow into the masonry grid." },
    { src: "assets/img/photo-03.jpg", alt: "Placeholder still, square",     category: "On Set",  caption: "PLACEHOLDER — any aspect ratio works." },
    { src: "assets/img/photo-04.jpg", alt: "Placeholder still, wide",       category: "On Set",  caption: "PLACEHOLDER." },
    { src: "assets/img/photo-05.jpg", alt: "Placeholder still, tall",       category: "Behind the Scenes", caption: "PLACEHOLDER." },
    { src: "assets/img/photo-06.jpg", alt: "Placeholder still, horizontal", category: "Behind the Scenes", caption: "PLACEHOLDER." }
  ],


  /* ========================================================================
     6. SITE SETTINGS  —  wording and toggles. Rarely needs changing.
     ======================================================================== */
  settings: {
    heroCtaPrimary:   "View Work",
    heroCtaSecondary: "Resume",
    heroCtaTertiary:  "Contact",

    sectionTitles: {
      work:    "Work",
      videos:  "Video",
      photos:  "Photography",
      resume:  "Resume",
      links:   "Links",
      contact: "Get In Touch"
    },

    contactBlurb: "Available for production, post, and motion work. Fastest way to reach me is email.",
    footerNote:   "Built and maintained by Hoodworks Media Group.",

    // Set to false to hide a whole section without deleting its data.
    show: { videos: true, photos: true, resume: true, links: true }
  }
};
