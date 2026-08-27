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

    // Company name. Currently BLANK on purpose — it hides the line above your
    // name in the hero and the wordmark in the top nav.
    // To bring it back, just put the name in the quotes:
    //   business: "Hoodworks Media Group",
    business:  "",

    title:     "Content Producer  |  Post-Production & Motion Design",
    tagline:   "10+ years producing social and broadcast content for industry-leading brands and agencies.",

    // 1–3 sentences. Shown under the hero and above the resume.
    bio: "End-to-end content production — writing, directing, post supervision, 2D/3D motion graphics, and multi-platform delivery. I lead cross-functional teams and ship campaigns for brands like Intel, Condé Nast, Netflix, PBS, TikTok, and the WNBA.",

    email:    "joe@hoodworks.media",
    phone:    "",                        // leave "" to hide it
    location: "Los Angeles, CA",

    // Relative path. Drop your PDF in assets/resume/ and point to it here.
    resumeUrl: "assets/resume/joe-hood-resume.pdf",

    /* ---- HERO BACKGROUND VIDEO -------------------------------------------
       Paste any YouTube or Vimeo link. It plays muted, on loop, with no
       controls and no sound, cropped to fill the screen behind your name.
       Set to "" to switch it off and fall back to heroImage / the gradient.

       Use a clean, slow-moving clip. Fast cuts behind text read as noise.
    ---------------------------------------------------------------------- */
    heroVideo: "https://www.youtube.com/watch?v=kjH5QcNz8fs",

    // Play the hero video on phones too? true looks better; false saves the
    // visitor a few MB of cellular data and shows heroImage instead.
    heroVideoMobile: true,

    // How much the video is darkened so the text stays readable.
    // 0 = raw video (text may be unreadable), 1 = almost black. 0.75 is tuned
    // so the left side stays readable and the right side stays watchable.
    heroOverlay: 0.75,

    // Still image behind the video (shows instantly while the video loads,
    // and is what phones see if heroVideoMobile is false).
    // Leave "" and the site pulls the video's own thumbnail automatically.
    // Or point it at your own frame: "assets/img/hero-still.jpg"
    heroImage: ""
  },


  /* ========================================================================
     2. RESUME  —  the structured resume section
     ------------------------------------------------------------------------
     Same rules: add or remove one object per job / school / skill group.
     ======================================================================== */
  resume: {

    summary: "Results-driven creative professional with 10+ years of experience producing high-quality social and broadcast content for industry-leading brands and agencies. Specializes in end-to-end production, including writing, workflow development, 2D/3D motion graphics, and multi-platform delivery. Proven ability to lead teams, manage complex projects, and deliver impactful campaigns for clients like Intel, Condé Nast, Netflix, and PBS.",

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
        title:   "Founder & Creative Director",
        company: "Hoodworks Media Group (HMG)",
        start:   "2017",
        end:     "Present",
        location: "CA & IL",
        bullets: [
          "Directed and produced high-profile branded campaigns for clients including TikTok, Atlantic Records, and the WNBA.",
          "Assembled and led cross-functional remote and in-person teams to execute complex video productions."
        ]
      },
      {
        title:   "Creative Director & Motion Graphics Artist",
        company: "Intel (Contract)",
        start:   "Jan 2024",
        end:     "Jun 2024",
        location: "Remote",
        bullets: [
          "Designed and created motion graphics for the broadcast campaigns of Intel's Xeon, Flex, and Tiber Cloud products.",
          "Originated motion graphics designs and templates, enhancing the quality and efficiency of future projects."
        ]
      },
      {
        title:   "Post-Production Supervisor",
        company: "Arbor (Contract)",
        start:   "Apr 2023",
        end:     "Nov 2023",
        location: "Remote",
        bullets: [
          "Managed end-to-end post-production for Arbor's remote video production team.",
          "Designed and implemented standardized workflows for remote editing that improved team productivity."
        ]
      },
      {
        title:   "Editor & Motion Graphics Artist",
        company: "Wonderbox Studios",
        start:   "2022",
        end:     "Present",
        location: "LA & Remote",
        bullets: [
          "Designed and edited internal and public-facing campaigns for clients like Universal Music Group and Jazz Cruises.",
          "Advised stakeholders on the latest trends in post-production and motion graphics."
        ]
      },
      {
        title:   "Editor & Motion Graphics Artist",
        company: "Weather Channel / TheGrio (Contract)",
        start:   "2022",
        end:     "2023",
        location: "Remote",
        bullets: [
          "Edited daily news segments and graphics for \"TheGrio with Marc Lamont Hill\" via Riverside for timely broadcast delivery.",
          "Updated motion graphics designs and templates, enhancing the quality and efficiency of future projects."
        ]
      },
      {
        title:   "Digital Imaging Technician",
        company: "Magical Lemonade",
        start:   "2022",
        end:     "2023",
        location: "Los Angeles, CA",
        bullets: [
          "Supervised media management for high-profile shoots and events, such as the iHeartRadio Awards and the Trumpet Awards."
        ]
      },
      {
        title:   "Editor & Motion Graphics Artist",
        company: "Cashmere Agency (Contract)",
        start:   "2021",
        end:     "",
        location: "Los Angeles, CA",
        bullets: [
          "Collaborated with a remote team to edit visually impactful social media campaigns for \"Big Brother\" on CBS."
        ]
      },
      {
        title:   "Writer, Director & Producer",
        company: "National Health Foundation (Contract)",
        start:   "2020",
        end:     "",
        location: "Los Angeles, CA",
        bullets: [
          "Pitched and produced creative concepts for National Health Foundation campaigns, aligning with their mission and goals."
        ]
      },
      {
        title:   "Editor & Motion Graphics Artist",
        company: "Yahoo! Inc.",
        start:   "2017",
        end:     "2018",
        location: "Los Angeles, CA",
        bullets: [
          "Edited recurring shows and interviews for Yahoo! Entertainment's website and social media.",
          "Updated motion graphics templates to meet evolving client needs and industry trends."
        ]
      },
      {
        title:   "Editor & Motion Graphics Artist",
        company: "Spotify (Contract)",
        start:   "2017",
        end:     "",
        location: "Los Angeles, CA",
        bullets: [
          "Created original branded and motion graphics for broadcast and digital platforms, including Spotify's Rap Caviar.",
          "Established creative standards for motion graphics and editing, ensuring brand consistency."
        ]
      },
      {
        title:   "Video Producer & Editor",
        company: "BuzzFeed",
        start:   "2015",
        end:     "2017",
        location: "Los Angeles, CA",
        bullets: [
          "Created viral original content for BuzzFeed's YouTube channels, garnering over 100 million views.",
          "Produced and edited high-quality campaigns for clients like Friskies, Honey Nut Cheerios, and Google Search."
        ]
      },
      {
        title:   "Video Union Logger",
        company: "IATSE Local 700",
        start:   "2015",
        end:     "",
        location: "Los Angeles, CA",
        bullets: [
          "Organized media assets and data for union Editors on CBS's \"Big Brother\" Season 17 and FOX's \"Utopia\" Season 1."
        ]
      },
      {
        title:   "Video Editor",
        company: "Snap Inc. (formerly Snapchat) (Contract)",
        start:   "2014",
        end:     "",
        location: "Venice, CA",
        bullets: [
          "Made significant contributions to Snapchat Discover's content strategy and style as one of its original editors."
        ]
      }
    ],

    /* ---- SKILLS ----------------------------------------------------------
       Grouped into columns. Add a group or add items to a group.

       { group: "Group Name", items: ["Thing", "Thing", "Thing"] },
    ---------------------------------------------------------------------- */
    skills: [
      { group: "Production", items: ["Writing", "Directing", "Producing", "Post Supervision", "Remote Workflow Design"] },
      { group: "Editing", items: ["Premiere Pro", "DaVinci Resolve", "Final Cut Pro X", "Avid"] },
      { group: "Motion & 3D", items: ["After Effects", "Cinema 4D", "Blender", "Octane Render", "Arnold", "Redshift"] },
      { group: "Design", items: ["Photoshop", "Illustrator", "InDesign", "Figma"] },
      { group: "Project Management", items: ["Trello", "Asana", "Jira", "Monday.com"] }
    ],

    /* ---- EDUCATION / CERTIFICATIONS --------------------------------------
       { school: "School", credential: "Degree or Cert", year: "2015" },
    ---------------------------------------------------------------------- */
    education: [
      {
        school: "New York University, Tisch School of the Arts",
        credential: "BFA, Film & Television Production — Dual Minors: Producing, Entertainment Business",
        year: "2013"
      }
    ],

    /* ---- SELECTED CREDITS ------------------------------------------------
       Rendered as a compact table under the resume, grouped by `group`.
       Set showCredits to false below to hide the whole block.

       PASTE-READY EXAMPLE — copy this whole line into the array:

       { client: "CLIENT NAME", project: "\"Project Title\"", label: "Studio / Label", role: "Director, Editor", year: "2025", group: "Branded Campaigns" },

       `label` is optional — leave it out for branded work.
    ---------------------------------------------------------------------- */
    showCredits: true,

    credits: [
      { client: "Urbana Free Library",     project: "\"You Are Welcome Here\"",                     role: "Director, Producer, Editor",     year: "2024", group: "Branded Campaigns" },
      { client: "PBS",                     project: "\"Yes, it's PBS\" BIPOC Campaign",             role: "Producer, Editor",               year: "2024", group: "Branded Campaigns" },
      { client: "WNBA",                    project: "\"More Than…\" Playoffs Campaigns",            role: "Editor, Motion Graphics Artist", year: "2022", group: "Branded Campaigns" },
      { client: "Netflix",                 project: "\"The Standups\" Times Square Billboard",      role: "Motion Graphics Artist",         year: "2022", group: "Branded Campaigns" },
      { client: "Netflix",                 project: "\"Ali Wong: Don Wong\" Times Square Billboard",role: "Motion Graphics Artist",         year: "2022", group: "Branded Campaigns" },
      { client: "Netflix",                 project: "\"Tiger King 2\" Sunset Blvd. Billboard",      role: "Motion Graphics Artist",         year: "2022", group: "Branded Campaigns" },
      { client: "YouTube",                 project: "\"VAX Live\" Social Media Promos",             role: "Editor, Motion Graphics Artist", year: "2021", group: "Branded Campaigns" },
      { client: "Pokémon TCG",             project: "\"What's Your Type?\"",                        role: "Editor, Motion Graphics Artist", year: "2021", group: "Branded Campaigns" },
      { client: "Pokémon TCG",             project: "\"What's Your Journey?\"",                     role: "Editor, Motion Graphics Artist", year: "2021", group: "Branded Campaigns" },
      { client: "Brud.fyi",                project: "\"Lil Miquela Rewind\"",                       role: "Editor, Motion Graphics Artist", year: "2021", group: "Branded Campaigns" },
      { client: "Irvine Pacific Real Estate", project: "Irvine Spectrum Property Videos",           role: "Producer, Director, Editor",     year: "2019", group: "Branded Campaigns" },
      { client: "TikTok",                  project: "Black Creators Showcase",                      role: "Producer, Editor",               year: "2019", group: "Branded Campaigns" },
      { client: "Beyond Meat",             project: "\"The Future of Protein\"",                    role: "Editor, Motion Graphics Artist", year: "2019", group: "Branded Campaigns" },
      { client: "Briogeo",                 project: "\"Scalp Revival\" & \"Super Foods\" Campaigns",role: "Producer, Editor",               year: "2019", group: "Branded Campaigns" },
      { client: "L'Oréal Paris",           project: "\"Festival Ready\" & \"Beach Waves\"",         role: "Editor, Motion Graphics Artist", year: "2019", group: "Branded Campaigns" },
      { client: "Maybelline",              project: "\"Lash Sensational\" Social Campaign",         role: "Editor, Motion Graphics Artist", year: "2019", group: "Branded Campaigns" },
      { client: "Maybelline",              project: "\"Instant Age Eraser\" ft. Kaushal & CC Clarke", role: "Editor, Motion Graphics Artist", year: "2019", group: "Branded Campaigns" },
      { client: "Condé Nast x PBS",        project: "Steven Raichlen \"Project Smoke\" Recipe Videos", role: "Director, Producer, Editor",  year: "2018", group: "Branded Campaigns" },
      { client: "Caliente Sports MX",      project: "\"Feeling High\"",                             role: "Director, Producer, Editor",     year: "2018", group: "Branded Campaigns" },
      { client: "Touch of Modern",         project: "Product Videos",                               role: "Director, Producer, Editor",     year: "2018", group: "Branded Campaigns" },
      { client: "Nat Geo",                 project: "\"The Catnapper\" (Short)",                    role: "Writer, Director, Producer",     year: "2018", group: "Branded Campaigns" },
      { client: "Condé Nast x SELF",       project: "Recipe Videos",                                role: "Director, Producer, Editor",     year: "2018", group: "Branded Campaigns" },
      { client: "IGN x League of Legends", project: "Snapchat Discover Campaign",                   role: "Editor, Motion Graphics Artist", year: "2017", group: "Branded Campaigns" },
      { client: "LEGO",                    project: "\"LEGO Easter Baskets\" Campaign",             role: "Editor, Colorist",               year: "2017", group: "Branded Campaigns" },

      { client: "Willie Jones",            project: "\"Silverado\"",              label: "Gravel Road",      role: "VFX",                        year: "2025", group: "Music Videos" },
      { client: "Eric Bellinger ft. Konshens", project: "\"Special\"",            label: "FTS",              role: "VFX",                        year: "2024", group: "Music Videos" },
      { client: "Kap G",                   project: "\"Jorge\"",                  label: "Create Music",     role: "Director, Producer, Editor", year: "2023", group: "Music Videos" },
      { client: "Fooly Faime ft. Trippie Redd", project: "\"Still Crucial\"",     label: "DigiU",            role: "Director, Producer, Editor", year: "2023", group: "Music Videos" },
      { client: "Alicia Keys, Khalid, Lucky Daye", project: "\"Come for Me (Unlocked)\"", label: "RCA Records", role: "Online Editor",         year: "2022", group: "Music Videos" },
      { client: "Alicia Keys",             project: "\"City of Gods (Part II)\"", label: "RCA Records",      role: "Online Editor",              year: "2022", group: "Music Videos" },
      { client: "Wiz Khalifa ft. A Boogie",project: "\"Millions\"",               label: "Atlantic Records", role: "Editor, Assistant VFX",      year: "2020", group: "Music Videos" },
      { client: "Baby Plug ft. Lil Keed, Lil Gotit", project: "\"No Fifties (Remix)\"", label: "Epic Records", role: "Producer",               year: "2020", group: "Music Videos" },
      { client: "Lil Keed ft. Gunna",      project: "\"Fox 5\"",                  label: "YSL / 300",        role: "Producer",                   year: "2020", group: "Music Videos" },
      { client: "Lil Keed",                project: "\"Wavy\"",                   label: "YSL / 300",        role: "Producer",                   year: "2020", group: "Music Videos" },
      { client: "Kap G",                   project: "\"ICE Baby\"",               label: "Atlantic Records", role: "Director, Producer, Editor", year: "2020", group: "Music Videos" },
      { client: "Moneybagg Yo",            project: "\"Pistol by Da Bed\"",       label: "Interscope",       role: "Producer, Editor",           year: "2020", group: "Music Videos" },
      { client: "Zaytoven ft. Lil Gotit",  project: "\"Drip Jacker\"",            label: "Opposition",       role: "VFX",                        year: "2020", group: "Music Videos" },
      { client: "Pretty Ricky",            project: "\"Body\"",                   label: "Atlantic Records", role: "Editor",                     year: "2020", group: "Music Videos" },
      { client: "Yak Yola ft. King Von",   project: "\"Slide\"",                  label: "Alamo Records",    role: "Producer",                   year: "2020", group: "Music Videos" },
      { client: "Lil Durk",                project: "\"Weirdo Hoes\"",            label: "Alamo Records",    role: "Producer",                   year: "2019", group: "Music Videos" },
      { client: "Reekado Banks",           project: "\"Rora\"",                   label: "Mad Solutions",    role: "Assistant Director",         year: "2019", group: "Music Videos" },
      { client: "Yung Mal ft. Gunna",      project: "\"War\"",                    label: "Alamo Records",    role: "Producer",                   year: "2019", group: "Music Videos" },
      { client: "Eric Bellinger",          project: "\"Tapped In\"",              label: "YFS / Empire",     role: "Producer",                   year: "2019", group: "Music Videos" },
      { client: "Eric Bellinger",          project: "\"Ball\"",                   label: "YFS / Empire",     role: "Producer",                   year: "2019", group: "Music Videos" },
      { client: "Eric Bellinger",          project: "\"King\"",                   label: "YFS / Empire",     role: "Producer",                   year: "2019", group: "Music Videos" },
      { client: "Eric Bellinger",          project: "\"Apple Berry Nana\"",       label: "YFS / Empire",     role: "Producer",                   year: "2019", group: "Music Videos" }
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

    { label: "Hoodworks Media Group", url: "https://hoodworks.media",                  category: "Client Sites", icon: "globe" },

    { label: "Instagram",           url: "https://www.instagram.com/REPLACE-ME",       category: "Social",       icon: "instagram" },
    { label: "TikTok",              url: "https://www.tiktok.com/@REPLACE-ME",         category: "Social",       icon: "tiktok" }
  ],


  /* ========================================================================
     4. VIDEOS  —  ONE array feeds BOTH showcase sections
     ------------------------------------------------------------------------
     Which section a video appears in is set by its `section` field:
        section: "directing"  ->  "Directing & Producing"
        section: "editing"    ->  "Editing & VFX"
     (Those two sections and their titles are defined in `settings` at the
      bottom of this file. Add a third one there if you ever want it.)

     PASTE-READY EXAMPLE — copy this whole block into the array below:

       {
         title:       "Project Name",
         embedUrl:    "https://vimeo.com/123456789",
         orientation: "widescreen",        // "widescreen" (16:9) or "portrait" (9:16)
         section:     "directing",         // "directing" or "editing"
         category:    "Brand Film",        // any text; filter buttons are auto-created
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
      section:     "directing",
      category:    "Brand Campaign",
      description: "PLACEHOLDER ENTRY. Swap embedUrl for one of your own projects.",
      thumbnail:   "assets/img/thumb-widescreen.jpg"
    },
    {
      title:       "Music Video — Placeholder",
      embedUrl:    "https://www.youtube.com/watch?v=aqz-KE-bpKQ",
      orientation: "widescreen",
      section:     "directing",
      category:    "Music Video",
      description: "PLACEHOLDER ENTRY. Auto-pulls its thumbnail from YouTube.",
      thumbnail:   ""
    },
    {
      title:       "Vertical Campaign Cut — Placeholder",
      embedUrl:    "https://vimeo.com/76979871",
      orientation: "portrait",
      section:     "directing",
      category:    "Social / Vertical",
      description: "PLACEHOLDER ENTRY. Vertical tiles sit at half width so they don't tower over the 16:9 cards.",
      thumbnail:   "assets/img/thumb-portrait.jpg"
    },
    {
      title:       "Title Package — Placeholder",
      embedUrl:    "https://www.youtube.com/watch?v=aqz-KE-bpKQ",
      orientation: "widescreen",
      section:     "editing",
      category:    "Motion Graphics",
      description: "PLACEHOLDER ENTRY.",
      thumbnail:   ""
    },
    {
      title:       "VFX Breakdown — Placeholder",
      embedUrl:    "https://vimeo.com/76979871",
      orientation: "widescreen",
      section:     "editing",
      category:    "VFX",
      description: "PLACEHOLDER ENTRY.",
      thumbnail:   "assets/img/thumb-widescreen.jpg"
    },
    {
      title:       "Reel Teaser — Placeholder",
      embedUrl:    "https://www.youtube.com/shorts/aqz-KE-bpKQ",
      orientation: "portrait",
      section:     "editing",
      category:    "Social / Vertical",
      description: "PLACEHOLDER ENTRY.",
      thumbnail:   "assets/img/thumb-portrait.jpg"
    }
  ],


  /* ========================================================================
     5. PHOTOS  —  masonry grid, click to open full size
     ------------------------------------------------------------------------
     CURRENTLY HIDDEN. The photo section is switched off in `settings.show`
     at the bottom of this file. The entries below are kept so you can turn
     it back on any time by setting  photos: true  down there.

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
     6. SITE SETTINGS  —  section names, wording, and on/off switches
     ======================================================================== */
  settings: {

    /* ---- THE VIDEO SHOWCASE SECTIONS -------------------------------------
       Each entry becomes its own section on the page, in this order, with
       its own filter buttons. `id` is what you put in a video's `section`
       field; `title` is the heading and the nav label.

       To add a third section, add a line here and start tagging videos with
       that id:
         { id: "docs", title: "Documentary" },
    ---------------------------------------------------------------------- */
    videoSections: [
      { id: "directing", title: "Directing & Producing" },
      { id: "editing",   title: "Editing & VFX" }
    ],

    heroCtaPrimary:   "View Work",
    heroCtaSecondary: "Resume",
    heroCtaTertiary:  "Contact",

    sectionTitles: {
      photos:  "Photography",
      resume:  "Resume",
      credits: "Selected Credits",
      links:   "Links",
      contact: "Get In Touch"
    },

    contactBlurb: "Available for production, post, and motion work. Fastest way to reach me is email.",
    footerNote:   "",

    // Set to false to hide a whole section without deleting its data.
    show: { videos: true, photos: false, resume: true, links: true }
  }
};
