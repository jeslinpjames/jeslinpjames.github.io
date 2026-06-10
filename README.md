# Jeslin P James — Portfolio ("Signal")

A zero-build, fully static portfolio. No npm, no framework, no compile step.
Upload the folder anywhere that serves static files and it works.

## Structure

```
portfolio/
├── index.html          ← page skeleton (rarely needs editing)
├── css/
│   └── styles.css      ← all design tokens & styling
└── js/
    ├── portfolioData.js  ← ★ EDIT THIS to change ANY content
    └── main.js           ← rendering logic & animations (don't edit for content)
```

## How to update content

Open `js/portfolioData.js`. Every section of the site (hero, about, experience,
projects, skills, achievements, education, contact) is a plain JavaScript
object there. Edit the text, save, refresh — done.

Rules of thumb:
- Set any link to `""` (empty string) to hide that button/icon.
- Add or remove items from any array; the UI adapts automatically.
- `featured: false` on a project hides it behind the "Show more projects" button.
- To add your résumé PDF: drop it in an `assets/` folder and set
  `resumeUrl: "assets/Jeslin_Resume.pdf"`.

## Run locally

Just open `index.html` in a browser, or for a proper local server:

```bash
# Python
python3 -m http.server 8000
# then visit http://localhost:8000
```

## Deploy

Any of these work with zero configuration:

1. **Your own hosting (cPanel / FTP):** upload the contents of this folder
   into `public_html/` (or the web root of your domain).
2. **Netlify:** drag-and-drop the folder at app.netlify.com, then point your
   custom domain at it.
3. **GitHub Pages:** push to a repo, enable Pages on the main branch.
4. **Vercel / Cloudflare Pages:** import the repo, framework preset "Other".
