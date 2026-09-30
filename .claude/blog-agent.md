# JB Contracting weekly blog agent: playbook

You publish ONE new blog post per run to www.jbcontractingatx.com, a static
HTML site on GitHub Pages (repo brookemalisseelliott-hue/jbwebsite). The site
deploys from the `main` branch. There is no build step.

Owner: John Bernard (JB Contracting ATX, Austin TX). Site run by his wife,
Brooke Bernard. Brooke approved this weekly agent on 28 Sep 2026.

---

## 1. Pick the topic

Take the FIRST topic in the queue whose file does not already exist in the
repo. Never write a second page on a topic that already has one. Before
writing, grep the repo for the main keyword and read any page that already
covers it, so the new post adds something and links to it rather than
competing with it.

| # | File | Target search | Why |
|---|------|---------------|-----|
| 1 | blog-trex-vs-timbertech-vs-fiberon.html | trex vs timbertech, fiberon vs trex, best composite decking texas | Comparison format ranks for competitors; "fiberon" 5.4K/mo |
| 2 | blog-deck-repair-cost-austin.html | deck repair cost, deck repair austin | Repair guides rank fast here (siding repair hit 5.5 in week one) |
| 3 | blog-hardie-vs-lp-smartside.html | hardie vs lp smartside, fiber cement vs engineered wood siding | Comparison format; complements the Hardie cost guide |
| 4 | blog-impact-resistant-shingles-texas.html | class 4 shingles texas, impact resistant roof insurance discount | Storm/hail cluster already ranks 12 to 20 |
| 5 | blog-metal-vs-shingle-roof-austin.html | metal roof vs shingles texas | Pairs with the roof replacement cost guide |
| 6 | blog-when-to-stain-deck-fence-austin.html | when to stain a fence, when to stain a new deck texas | Maintenance searches; fences are the volume business |
| 7 | blog-adding-roof-to-pergola.html | pergola roof cost, adding a roof to a pergola | GSC shows this cluster at 12 to 18 on the pergola guide |
| 8 | blog-deck-boards-texas-heat.html | best decking for texas heat, composite vs wood deck hot | Heat is the recurring Austin objection |
| 9 | blog-deck-permit-austin.html | do i need a permit for a deck in austin | Only use the rules already on the site; see section 3 |

If every file exists, choose a new topic that fits JB's services and does
not duplicate an existing page, and say clearly in your final summary that
the queue needs refilling.

---

## 2. Canonical prices (the ONLY numbers you may use)

Every price must match these. If a post needs a number not listed, give a
range consistent with these or leave the number out. Never invent a price.

- Decks, per sq ft installed: pressure-treated $30 to $45, cedar $50 to $75,
  composite/PVC $60 to $100. Typical 300 sq ft: PT $9,000 to $13,500, cedar
  $15,000 to $22,500, composite $18,000 to $30,000.
- Deck repair and board/rail replacement: $1,800 to $7,000.
- Fences, per linear ft installed: cedar side-by-side $32 to $48,
  board-on-board $38 to $55, shadowbox $40 to $58, horizontal $48 to $72,
  split-rail $22 to $38, pressure-treated pine $28 to $40. Steel posts add
  $12 to $20 per post.
- Fence repair: pickets $150 to $400, one post $250 to $450, steel post
  $300 to $500, leaning section $300 to $900, 8 ft section $400 to $900,
  gate fix $150 to $450, gate rebuild $600 to $1,400, re-stain $3 to $7 per
  ft per side.
- Pergolas, 12x12 to 12x16 / 14x20 and up: freestanding cedar $8,500 to
  $13,000 / $13,500 to $22,000; attached open-top $10,500 to $16,000 /
  $16,500 to $26,000; solid-roof cover shingle $14,500 to $22,000 / $22,500
  to $38,000; solid-roof metal $17,500 to $26,000 / $26,500 to $44,000;
  freestanding pavilion $16,500 to $25,000 / $25,500 to $42,000.
  Tongue-and-groove ceiling add $2,700 to $5,600 / $4,000 to $8,500. Fans
  and lights add $900 to $2,400 / $1,500 to $4,000.
- Roofing, 2,000 sq ft home: 3-tab $9,000 to $13,000, architectural
  $11,000 to $18,000, luxury shingle $17,000 to $28,000, standing-seam metal
  $25,000 to $45,000, synthetic slate/shake $22,000 to $36,000. Local storm
  repair $800 to $3,500.
- Siding: Hardie installed $10 to $16 per sq ft; single elevation $6,000 to
  $14,000; siding repair $450 to $2,800 typical.
- Concrete per sq ft: broom $8 to $15, stained $13 to $20, stamped $15 to
  $25, stamped and stained $18 to $30, exposed aggregate $12 to $20.
- Retaining walls: $45 to $95 per face foot (segmental block $45 to $75).
- Screened porch: screening an existing cover $12,000 to $22,000; new
  structure and screen $22,000 to $38,000.

---

## 3. Facts and claims

ALLOWED (true):
- Family-owned. Licensed and insured. 5.0 on Google.
- John Bernard, owner, has been building across Central Texas for over a
  decade and founded JB in 2023 (say it exactly that way if at all).
- John walks every estimate himself. Free on-site estimates. Line-itemed
  quotes. We handle permits and HOA architectural review.
- Service area: Austin, South Austin, Cedar Park, Round Rock, Brushy Creek,
  Buda, Kyle, Leander, Lakeway, Dripping Springs, Manchaca (Travis, Hays,
  Williamson counties).
- Texas law makes it illegal for a contractor to pay, waive or rebate an
  insurance deductible.
- Decks over 30 inches above grade need code guardrail.

NEVER write:
- Financing, payment plans, or rates. None are offered yet.
- Manufacturer certifications, BBB, awards, warranty terms or years in
  business beyond the line above.
- A review count. It changes; the site states it elsewhere.
- That John trains people with no experience, or anything that reads as
  hiring beginners.
- Specific building-code numbers, permit fees or square-foot thresholds
  that are not already on the site. Say "we check which rules apply to your
  address" instead.
- Anything about competitors by name.

VOICE: plain, honest, practical, first person plural ("we"), bylined to
John Bernard. Tell people when the cheaper option is the right one. Short
paragraphs. No hype words, no "in today's world", no listicle filler.

**Never use em dashes (the long dash) anywhere. Not in copy, titles, alt
text, schema or commit messages.** Use commas, colons, full stops or "to".

---

## 4. Build the page

Copy the structure of `blog-siding-repair-cost-austin.html` exactly:
everything before `<title>`, the `<link href="https://fonts.googleapis.com`
line through `</head>`, the nav from `<body>` to `<section class="blog-hero">`,
the quote form `<div class="quote-form-wrap" id="quote">` up to
`<section class="related-row">`, and the related-row tail to the end.

Before writing the file, ASSERT all of these, and stop if any fail:
- `googletagmanager.com/gtag/js?id=G-QEZESKC3B6` and `analytics.js` are in the
  head. (A template without them shipped three untracked pages once.)
- The file ends with `</html>`.

The page needs:
- `<title>` 45 to 60 characters, the main search phrase near the front. For
  cost topics, put a real number from section 2 in the title.
- Meta description 120 to 160 characters, leading with a concrete answer.
- keywords meta, og:title, og:description, og:image, og:url, og:type
  article, twitter:card, canonical to the https://www. URL.
- JSON-LD Article (author John Bernard, Owner; publisher JB Contracting ATX
  with logo https://www.jbcontractingatx.com/jb-logo.png; datePublished and
  dateModified = today) and a FAQPage whose questions and answers match the
  visible FAQ exactly.
- Hero: `blog-hero` section with back link to blog.html, eyebrow, H1, lede,
  meta row "By John Bernard / Updated <Month D, YYYY> / N min read".
- Feature image: `<img fetchpriority="high" loading="eager" ...>` using an
  EXISTING photo in the repo relevant to the topic, with width and height
  equal to the file's real pixel size (read it with PIL), and a descriptive
  alt. Never lazy-load the hero.
- Body: 1,700 to 2,400 words. At least one `<table class="cost-table">`, a
  `<div class="pull-cta">` with a button to `#quote`, 8 FAQs as
  `<details class="faq-item"><summary>..</summary><div class="faq-answer"><p>..</p></div></details>`
  inside `<div class="faq-list">`, and 4 or more links to relevant existing
  pages (service page for the topic, related cost guide, city pages).

## 5. Wire it in

- `blog.html`: add a card as the FIRST `<a class="blog-card">` in the grid,
  same markup as the others, lazy image with correct width and height.
- `sitemap.xml`: add a `<url>` with changefreq monthly, priority 0.75,
  lastmod today.
- Add one contextual sentence linking to the new post from 3 to 5 existing
  relevant pages (just before `</article>` is fine). Use descriptive anchor
  text, not "click here".
- Change nothing else on the site.

## 6. Validate (all must pass, or do not publish)

- Every JSON-LD block parses. HTML tags balance on every changed file.
- No broken internal `href="*.html"` links anywhere.
- No duplicate `<title>` across the site.
- Render every page with Playwright (Python) using Chromium at
  `/opt/pw-browsers/chromium`: no horizontal overflow at 390 px wide, no
  console errors.
- On the new page, route `https://api.web3forms.com/**` to a fake
  `{"success":true}` response (never submit a real form), fill name, phone
  and zip, submit, and confirm `generate_lead` reaches `window.dataLayer`.
- Grep the new page for the em dash character and fail if found.
- Every price on the new page appears in section 2.

## 7. Publish

1. Commit on your working branch with a clear message explaining the topic
   choice and what the post covers. End the message with the attribution
   lines your session instructions give you.
2. Fast-forward `main` to your commit and push `main` (the site only goes
   live from main). If `main` has moved on and a fast-forward is not
   possible, merge `origin/main` in first, re-run validation, then push.
   Never force-push `main`.
3. Wait about a minute, then confirm the new URL returns HTTP 200 with curl.
   If you open the LIVE site in a browser for any check, add `?notrack` to the
   URL so the visit is not counted in Google Analytics.
4. Append a line to the log below and commit/push that too.

## 8. Final summary (your last message)

Plain English for Brooke, no jargon, no em dashes:
- The live URL and the title.
- One or two sentences on why this topic.
- A reminder to request indexing for that URL in Search Console
  (URL Inspection, paste, Request Indexing).
- Anything that failed or needs her attention, stated plainly.

---

## Published log

| Date | File | Title |
|------|------|-------|
| 2026-09-24 | blog-siding-repair-cost-austin.html | Siding Repair Cost in Austin (2026) |
| 2026-09-24 | blog-retaining-wall-cost-austin.html | Retaining Wall Cost in Austin (2026) |
| 2026-09-28 | blog-fence-repair-cost-austin.html | Fence Repair Cost in Austin (2026) |
| 2026-09-28 | blog-gazebo-vs-pavilion-vs-pergola.html | Gazebo vs Pavilion vs Pergola |
