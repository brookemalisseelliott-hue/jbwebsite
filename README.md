# JB Contracting ATX — Website

Family-owned Austin contractor website. Static HTML / CSS / JS — no build step, no dependencies. Drop into any static host and ship.

## Files

```
.
├── index.html                              # Home page (hero + designer + reviews + gallery + about)
├── blog.html                               # Resources / blog index
├── blog-deck-cost-austin.html              # SEO post #1
├── blog-storm-damage-roof-austin.html      # SEO post #2
├── blog-best-privacy-fence-austin.html     # SEO post #3
├── blog.css                                # Shared styles for all blog pages
├── images/                                 # All photos, logo, and badges
└── .nojekyll                               # Tells GitHub Pages to skip Jekyll
```

## Deploy to GitHub Pages

1. Create a new GitHub repo (e.g. `jb-contracting-website`).
2. Upload every file in this folder, keeping the same structure (the `images/` folder must come along).
3. Go to **Settings → Pages**, set Source to `Deploy from branch`, branch `main`, folder `/ (root)`.
4. Save. GitHub gives you a URL like `https://<username>.github.io/jb-contracting-website/`.
5. To use a custom domain (e.g. `jbcontractingatx.com`), follow the GitHub Pages custom domain instructions and add a `CNAME` file with the domain in this folder.

## Editing tips

- **Photos**: drop new images into `images/`, then update the `src=` references in `index.html` or any `blog-*.html`.
- **Designer email**: leads land at `jbconstructionatx@gmail.com`. To change, search `submitDream` in `index.html` and edit the `mailto:` address.
- **Phone number**: search `(512) 587-3914` across all files and replace.
- **Social links**: search `social-row` in `index.html` to update Facebook / Nextdoor / Google / Instagram URLs.
- **Blog posts**: each post is a self-contained HTML file. Add another by copying one of the `blog-*.html` files, changing the slug, updating the body, and adding a card to `blog.html`.

## What's in the Designer

- Picks service, lifestyle (for outdoor projects), size, materials, finishes, and add-ons.
- Live SVG preview updates as the user designs.
- Saves designs to a local mood board (browser memory).
- On submit, opens the user's email client with a pre-filled message to John, including all selections, timing, and budget.

## What's in the Resources section

Three SEO + conversion focused posts for high-intent Austin keywords:

- **Deck cost in Austin (2026 pricing)**
- **When your Austin roof needs replacing (storm damage)**
- **Best privacy fence for Austin backyards (cedar vs. PT)**

Each post links back into the Designer and to the phone number.
