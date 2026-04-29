# JB Contracting ATX — Website

Static HTML / CSS / JS — no build step, no dependencies. Drop into any static host and ship.

---

## ⭐ One thing to set up: the Designer email

The Design Builder collects all the visitor's selections, contact info, **and any photos they upload**, then emails everything (with attachments) to John. To make that work, you need a free Web3Forms access key. It takes about 60 seconds.

### Setup

1. Go to **https://web3forms.com/**
2. Enter John's email: `jbconstructionatx@gmail.com`
3. Click **Create Access Key**. Web3Forms will email John a link to confirm the address. Click it.
4. Copy the access key (looks like `a1b2c3d4-e5f6-7890-abcd-1234567890ef`).
5. Open `index.html` in any text editor. Search for `WEB3FORMS_ACCESS_KEY` (it's near the top of the `<script>`). Paste the key between the quotes:

   ```js
   const WEB3FORMS_ACCESS_KEY = 'a1b2c3d4-e5f6-7890-abcd-1234567890ef';
   ```

6. Save and re-upload `index.html` to your repo. Done.

That's it — every Design Builder submission now arrives in John's Gmail with all design selections, contact details, timing, budget, and resized photo attachments. No backend to host, no monthly bill, no spam.

### What if you skip this step?

The form still works. It falls back to opening the visitor's email client with the design summary pre-filled. Photos can't ride along through `mailto:`, so the visitor is asked to text them to (512) 587-3914. The Web3Forms path is way smoother for everyone.

---

## ⚠️ Upload to GitHub correctly

The number-one reason images and blog pages "don't show up" is uploading the **wrong folder**.

### ✅ Right way — drop these items at the repo root

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

### ❌ Wrong way — uploading the wrapper folder

If you drag the `jb-contracting-website` folder itself into the repo, your URL becomes
`https://you.github.io/repo/jb-contracting-website/...` and image references break. Either drop the contents directly, or rename your repo to `jb-contracting-website` and let it live at the root.

### If you've already uploaded the photos to the root (no `images/` folder)

Use the **flat-path** version of the site instead:

- Folder: `Downloads/jb-contracting-website-flat/`
- Zip: `Downloads/jb-contracting-website-flat.zip`

Every reference in those files points directly at the filename (no `images/` prefix), matching the layout where everything sits at the repo root.

---

## Step-by-step deploy (GitHub Pages)

1. Create a new GitHub repo (e.g. `jb-contracting-website`).
2. **Add file → Upload files**.
3. In Finder, open `Downloads/jb-contracting-website/`. Press **Cmd+A** to select all items, including the `images` folder. Drag the selection onto the GitHub upload area.
4. Commit.
5. Settings → Pages → Source: **Deploy from a branch**, branch `main`, folder `/ (root)`. Save.
6. Wait 1–3 minutes. URL is `https://<username>.github.io/<repo-name>/`.

### Custom domain (e.g. `jbcontractingatx.com`)

1. Create a `CNAME` file at the repo root with one line: `jbcontractingatx.com`.
2. In your domain registrar's DNS settings, add four A records pointing to GitHub's Pages IPs:
   `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`.
   Plus a `CNAME` for `www` → `<username>.github.io`.
3. Settings → Pages → set the custom domain. Tick "Enforce HTTPS".

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
├── images/                                 # 39 photos + JB logo + Nextdoor 2025 badge
└── .nojekyll                               # Tells GitHub Pages to skip Jekyll
```

## Editing tips

- **Photos** — drop new files into `images/`, then update the `src=` references in any HTML page.
- **Phone number** — search `(512) 587-3914` across all files and replace.
- **Lead email** — search `jbconstructionatx@gmail.com` in `index.html`. Both the Web3Forms config and the mailto fallback use it.
- **Social links** — search `social-row` in `index.html` to update Facebook / Nextdoor / Google / Instagram URLs.
- **Add a new blog post** — copy any `blog-*.html` file, change the slug, edit the body, and add a card to `blog.html`.

## What's in the Designer

- 7-step flow: project → lifestyle (for outdoor projects) → size → 3 question steps → contact + photos
- Live SVG preview that looks like an architectural rendering (wood grain, shadows, hill country, lighting)
- "Mood Board" for saving designs locally and submitting them all at once
- Photos are resized client-side (max 1600px, JPEG ~85% quality) before uploading, so big iPhone photos don't blow past attachment limits
- On submit, the form POSTs to Web3Forms with all the design fields plus attached photos. John gets a clean email in his Gmail with everything tied together

## What's in the Resources section

Three SEO + conversion-focused posts targeting high-intent Austin keywords:

- **Deck cost in Austin (2026 pricing)**
- **When your Austin roof needs replacing (storm damage)**
- **Best privacy fence for Austin backyards (cedar vs. PT)**

Each post has internal CTAs that link straight back to the Designer.
