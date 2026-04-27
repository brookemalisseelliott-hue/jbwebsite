# JB Contracting ATX — Website

Static HTML / CSS / JS — no build step, no dependencies. Drop into any static host and ship.

## ⚠️ Important: how to upload to GitHub correctly

The number-one reason images and blog pages "don't show up" is uploading the **wrong folder**.

### ✅ Right way — upload the CONTENTS of this folder

When you drag files into your GitHub repo, drop these items in **directly at the repo root**:

```
index.html
blog.html
blog-deck-cost-austin.html
blog-storm-damage-roof-austin.html
blog-best-privacy-fence-austin.html
blog.css
.nojekyll
README.md
images/             ← the WHOLE folder, with all 39 photos inside
```

So your repo's home page should look like this:

```
https://github.com/<you>/<repo>
├── index.html
├── blog.html
├── ...
└── images/
    ├── jb-logo.png
    ├── hero-pergola-hill-country.jpg
    └── ...
```

### ❌ Wrong way — uploading the wrapper folder

If you drag the `jb-contracting-website/` folder itself into your repo, your URL becomes:

```
https://you.github.io/repo/jb-contracting-website/index.html   ← extra path piece
```

…and `images/...` references will look in the wrong place. Either upload the contents directly, **or** rename your repo to `jb-contracting-website` and let it live at the root.

---

## Step-by-step deploy (GitHub Pages)

1. Create a new GitHub repo (e.g. `jb-contracting-website`).
2. On the repo page, click **Add file → Upload files**.
3. **Drag every item shown above directly onto the page.** Make sure to drag the `images` folder as well so it carries all 39 photos with it.
4. Scroll down, click **Commit changes**.
5. Go to **Settings → Pages**.
6. Under "Build and deployment", set **Source** to **Deploy from a branch**, branch `main`, folder `/ (root)`. Save.
7. Wait 1–3 minutes. GitHub will give you a URL like:
   `https://<your-username>.github.io/jb-contracting-website/`
8. Open it. You should see the hero, the JB logo, the Nextdoor badge, the gallery, and clickable links to the three blog posts.

### Custom domain (e.g. `jbcontractingatx.com`)

1. Add a file named `CNAME` (no extension) at the repo root containing only the domain, e.g. `jbcontractingatx.com`.
2. In your domain registrar's DNS settings, point `A` records to GitHub's Pages IPs and add a `CNAME` record for `www` → `<your-username>.github.io`.
3. In GitHub → Settings → Pages, set the custom domain and check "Enforce HTTPS".

---

## File map

```
.
├── index.html                              # Home (hero + designer + reviews + gallery + about)
├── blog.html                               # Resources / blog index
├── blog-deck-cost-austin.html              # SEO post: Austin deck pricing
├── blog-storm-damage-roof-austin.html      # SEO post: storm-damage roof guide
├── blog-best-privacy-fence-austin.html     # SEO post: privacy fence guide
├── blog.css                                # Shared styles for all blog pages
├── images/                                 # 39 photos + logo + Nextdoor badge
└── .nojekyll                               # Tells GitHub Pages to skip Jekyll
```

## Editing tips

- **Photos** — drop new files into `images/`, then update the `src=` references in any HTML page.
- **Designer email destination** — leads land at `jbconstructionatx@gmail.com`. To change, search `submitDream` in `index.html` and edit the `mailto:` address.
- **Phone number** — search `(512) 587-3914` across all files and replace.
- **Social links** — search `social-row` in `index.html` to update Facebook / Nextdoor / Google / Instagram URLs.

## What's in the Designer

- 7-step flow: project → lifestyle → size → 3 question steps → contact + photos
- Live SVG preview that updates as the user designs
- "Mood Board" lets users save designs locally and submit them all together
- On submit, opens the user's email client with a pre-filled message to John, with all design selections, timing, and budget

## What's in the Resources section

Three SEO + conversion-focused posts targeting high-intent Austin keywords:

- **Deck cost in Austin (2026 pricing)**
- **When your Austin roof needs replacing (storm damage)**
- **Best privacy fence for Austin backyards (cedar vs. PT)**

Each post links straight back to the Designer and the phone number.
