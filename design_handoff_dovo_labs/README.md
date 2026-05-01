# Handoff: Dovo Labs — Personal Site

## Overview

Dovo Labs is the personal website for **Ethan Lippman** — a Go-To-Market Strategist, Competitive Intelligence Expert, and AI builder. The site is a single-page personal brand site whose primary job is to drive visitors to **book time** with Ethan via You've Got Meetings (`https://youvegotmeetings.com/book/ethan`).

The aesthetic is "Saved by the Bell / 90s memphis" — bright pinks, cyans, yellows, hard-offset black shadows, tilted cards, confetti, marquee, Bungee + Monoton + VT323 type. **The loud, playful tone is intentional** — match it.

## About the Design Files

The files in this bundle are **design references created in HTML** — a working prototype (vanilla HTML + JSX-via-Babel + CSS) that demonstrates the intended look, feel, content, and behavior. They are **not** production code to ship as-is.

**Your task:** recreate this design in the target codebase's environment using its established patterns and libraries. If no codebase exists yet, the recommended target is **Next.js (App Router) + React + plain CSS modules** — the design is mostly static content, has no auth, no DB, and benefits from SSR for SEO. Tailwind would also work but isn't necessary; the existing `colors_and_type.css` token file is already a clean design-token layer.

The design is **high-fidelity** — colors, type, spacing, and decoration are final. Recreate pixel-faithfully.

## Fidelity

**High-fidelity (hifi).** Treat colors, fonts, sizes, shadows, borders, and tilt angles as final. The decoration (confetti, starbursts, zig-zags, marquee) is a load-bearing part of the brand — do not strip it in the name of "cleaning up."

## Site Shape

Single long scrolling page with anchor navigation:

1. **Top Nav** (sticky)
2. **Hero** (with top-of-fold booking CTA)
3. **Marquee** (animated tagline strip)
4. **About** (`#about`)
5. **Experience** (`#experience`) — timeline of 5 roles
6. **Projects** (`#projects`) — 3 cards
7. **Consulting** (`#consulting`) — 4 anonymized engagement cards
8. **Book** (`#book`) — large CTA section with calendar mockup
9. **Footer**

There is also a **Tweaks panel** (toggleable from the host's toolbar in the design tool) that lets you flip the hero accent color and confetti density. **In production, drop the tweaks panel** — it's a design-tool-only construct, not a user-facing feature.

## Design Tokens

All tokens are defined in `styles/colors_and_type.css`. Reproduce these exactly.

### Colors

```
--cream:       #fef6e4   /* page background */
--cream-deep:  #fbe9c4   /* muted bg / inset cards */
--paper:       #fffaf0   /* card/panel bg */
--ink:         #0d0d0d   /* primary text + borders */
--ink-soft:    #2a2a2a   /* secondary text */

--pink:        #ff5b9e
--pink-deep:   #e83e84
--cyan:        #3dd9eb
--cyan-deep:   #1cb5c7
--yellow:      #ffd23f
--purple:      #5b2a86
--purple-deep: #3b1660
--orange:      #ff8c42
--green:       #7ed957
```

### Borders & Shadows (signature)

```
--border:        3px solid var(--ink);
--border-thin:   2px solid var(--ink);
--border-thick:  5px solid var(--ink);

--shadow-hard-xs: 2px 2px 0 var(--ink);
--shadow-hard-sm: 4px 4px 0 var(--ink);
--shadow-hard:    6px 6px 0 var(--ink);
--shadow-hard-lg: 10px 10px 0 var(--ink);
--shadow-hard-xl: 12px 12px 0 var(--ink);
```

Hard offset shadows (no blur, pure offset) are the signature element. Use them on cards, buttons, and the avatar. Some cards use a colored shadow instead of black (e.g. `12px 12px 0 var(--pink)`).

Border-radius is **0** by default — squared corners are part of the look.

### Typography

Loaded from Google Fonts:
```
Bungee, Bungee Inline, Monoton, Space Grotesk (400/500/700), VT323, Caveat Brush
```

```
--font-display:     "Bungee", system-ui, sans-serif;        /* headings, buttons, eyebrows */
--font-display-alt: "Monoton", "Bungee", system-ui;          /* mega hero text + giant numbers */
--font-body:        "Space Grotesk", system-ui, sans-serif;  /* body copy */
--font-mono:        "VT323", "Courier New", monospace;       /* tags, labels, marquee */
--font-script:      "Caveat Brush", cursive;                 /* unused — available */
```

Type scale:
```
--fs-mega:    110px   (hero — drops to 72px <760, 52px <600)
--fs-h1:      56px
--fs-h2:      40px
--fs-h3:      28px
--fs-h4:      22px
--fs-body-lg: 18px
--fs-body:    15px
--fs-small:   13px
--fs-mono:    16px
--fs-eyebrow: 11px
```

The hero uses Monoton with a triple-stacked text-shadow:
```
text-shadow: 6px 6px 0 var(--yellow), 12px 12px 0 var(--ink);
```

### Spacing (4px base)

`--sp-1` through `--sp-10` (4, 8, 12, 16, 20, 24, 32, 40, 56, 80px). Most section vertical padding is `100px`; tight at small breakpoints.

### Motion

```
--ease-snap: cubic-bezier(.2,.8,.2,1);
--dur-fast: 80ms;
--dur-base: 200ms;
--dur-slow: 600ms;
```

Buttons use a "press" animation: hover `translate(-2px,-2px)` with shadow growing to 6px; active `translate(2px,2px)` with shadow collapsing to 0.

## Sections — Detailed Spec

### 1. Top Nav (`src/sections/Nav.jsx`)

- Sticky to top, `z-index: 50`
- Background `var(--ink)`, bottom border `5px solid var(--ink)`
- Left: `<BrandMark />` (the YGM calendar PNG, rotated -4°) + text "DOVO LABS" in Bungee, color `var(--yellow)`
- Right: anchor links (About, Experience, Projects, Consulting, Book Time) in Bungee 12px, plus a pink "Book me →" button linking to `https://youvegotmeetings.com/book/ethan`
- Smooth-scrolls to anchors on click
- **<600px:** anchor links hide; only brand + Book Me button remain

### 2. Hero (`src/sections/Hero.jsx`)

- Cream background, 5px ink bottom border
- Confetti background (random shapes — dots, triangles, squares, lines — tiled across)
- Decorative starburst top-right ("HOWDY!"), zig-zag bottom-left, single triangle top-left
- Two-column grid (1.4fr / 1fr), collapses to single column under 1000px

**Left column, in order:**
1. Pink "★ Book 30 min with me → ethan" pill button, rotated -2°, hard ink shadow — primary CTA, links to YGM
2. `<h1>` "ETHAN" / "LIPPMAN." — Monoton 132px (110px on smaller, 72px <760, 52px <600), purple, with stacked yellow + ink text-shadows. The last name accent color is tweakable (pink default, cyan alt).
3. Tagline paragraph in `var(--paper)` card with 3px ink border + 6px hard shadow, rotated -0.6°
4. Black inline call-out box ("THE FASTEST WAY TO GET VALUE OUT OF THIS PAGE: put time on my calendar") with cyan offset shadow
5. Row of secondary CTAs: pink "Book a meeting →", ghost "See what I built", and a "♥ 15+ years GTM & product" stat label

**Right column:**
- Avatar card: paper bg, 4px ink border, 12px pink offset shadow, rotated 2.2°
- Inside: posterized portrait of Ethan (`assets/ethan-avatar.png`) with 3px ink border
- Stickers on the card: cyan "★ ETHAN.JPG" tag rotated 4° (top-right, overflowing), yellow "RevOps · AI · GTM" tag rotated -4° (bottom-left, overflowing)

### 3. Marquee (`src/sections/Marquee.jsx`)

Black bar, top + bottom 5px ink borders, yellow Bungee 22px text. Items scroll left infinitely (30s linear loop, duplicated track for seamless wrap):
> ★ GTM ENGINEERING ● COMPETITIVE INTEL ▲ REVOPS ★ AI TOOLING ● PIPELINE DISCIPLINE ▲ FORECASTING THAT WORKS ★ MAX RAD SCHEDULING

The leading symbol of each item is colored pink (`.marquee-star`).

### 4. About (`src/sections/About.jsx`)

Pink eyebrow "★ ABOUT.TXT ★", section title "The short story.", section sub paragraph.

Single full-width content card (max 920px), paper bg, 3px ink border, 8px ink shadow:
- Lede paragraph in Bungee 22px ("I'm the person companies call when…")
- 4 body paragraphs (see source for exact copy — companies are anonymized by category, never named)
- Trait pill row: RevOps (pink), GTM Engineering (cyan), Competitive Intel (yellow), AI Tooling (purple), Product Strategy (ink), Sales Enablement (ink)

### 5. Experience (`src/sections/Experience.jsx`)

Background `var(--cream-deep)`, top + bottom 5px ink borders.
Cyan eyebrow "★ TRACK.RECORD ★", title "Where I've put in the reps."

5 timeline cards, alternating tilt (`-0.4°` / `0.5°`). Each card is a 220px / 1fr grid:

**Left rail (`.exp-when`):** dashed-right divider. Year in Monoton 48px purple, range in VT323 14px, company line in Bungee 14px (with optional ink-bg / green-text "ticker" badge in VT323 13px).

**Right body:** role in Bungee 22px, tag pills (cream-deep bg, 2px ink border, VT323 13px), bullets prefixed by ★ in alternating colors (pink / cyan / orange).

**All companies are anonymized by category** — never use the real names (Alkami, ON24, Workfront, Adobe, Hearst, Bridgeline). The current categories used are documented in the source.

Below 1000px, the left rail moves above the body (border becomes bottom-dashed instead of right-dashed).

### 6. Projects (`src/sections/Projects.jsx`)

3-column grid, collapses to 1 column under 1000px. Each card is 4px ink border, 8px ink shadow, alternating tilt.

1. **Pink card "You've Got Meetings"** — flagship. Yellow "LIVE" starburst overlapping top-right corner. Links to `https://youvegotmeetings.com`.
2. **Cyan card "Dovo"** — retired competitive-intelligence Slackbot. Tag reads "ARCHIVE", subline "★ Retired — RIP". Link "Case study soon →" is a no-op.
3. **Striped placeholder card** — diagonal repeating stripes (cream-deep + paper at 14px), 4px dashed border. "???" in Monoton 56px purple, "MORE TO COME" / "★ COOKING IN THE LAB ★".

### 7. Consulting (`src/sections/Consulting.jsx`)

Purple background, cream text, top + bottom 5px ink borders. Yellow eyebrow "★ CONSULTING.LOG ★".

2-column grid, collapses to 1 column under 1000px. 4 cards, each: paper bg with colored offset shadow (pink/yellow/pink/green), alternating tilt.

Each card has a 64×64 colored icon block (♥ pink, ▲ cyan, ★ yellow, ● green), title (Bungee 18px), 1-paragraph body, and 3 mono tag chips.

The 4 anonymized engagements are: Healthcare SaaS, Robotics / Industrial AI, Work Management Platform, B2B SaaS — Multiple. Copy is in the source.

Below the grid: an ink-bg call-to-action strip linking to YGM.

### 8. Book (`src/sections/Book.jsx`)

Cyan background, 5px ink bottom border, confetti background, yellow "BOOK!" starburst top-left.

Centered "book card" (max 1100px): paper bg, **5px** ink border, **14px** ink offset shadow, padding 56px. Two-column grid:

**Left:** ink/yellow eyebrow, "Let's get on a call." in Bungee 56px, supporting paragraph, large pink "Grab a slot → ethan" button, then a cream-deep "perms" box with three lines:
- ▶ 30-MIN INTRO · NO SLIDES · NO PITCH
- ▶ AGENDA DRAFTED BEFORE WE MEET
- ▶ WE'LL FIGURE OUT IF I CAN HELP — CHILL

**Right:** styled calendar mockup in cream bg with 4px ink border, rotated -1.5°, pink offset shadow. Mock day rows TUE/WED/THU/FRI with VT323 day labels (yellow chip with ink border), one row pink-highlighted ("WED 2:00 PM"), and a black "Looks good — book it ★" CTA bar at the bottom linking to YGM.

### 9. Footer (`src/sections/Footer.jsx`)

Ink bg, cream text, centered. Yellow Bungee 28px "★ DOVO LABS ★", VT323 18px tagline "Ethan Lippman · GTM × AI × Competitive Intel". Three cream-bordered link buttons: LinkedIn, You've Got Meetings, Book Time. Mono copyright line at bottom.

## Decorative Components (`src/shared.jsx`)

These are reusable building blocks. Recreate them as React components (or your framework's equivalent) — they're used across multiple sections.

- **`<Squiggle width color>`** — inline SVG of a wavy line.
- **`<Starburst size color rotate>{children}</Starburst>`** — 24-pointed star polygon with text inside; ink stroke 3, rounded join. Used for "NEW!", "LIVE", "WOW", "BOOK!", "HOWDY!" etc.
- **`<Triangle size color rotate>`** — equilateral triangle, ink-stroked.
- **`<Dot size color>`** — circle with ink border.
- **`<ZigZag width color>`** — repeating polyline zig-zag.
- **`<ConfettiBg density opacity>`** — absolutely-positioned random-shape confetti scatter (40 × density items, mix of dots/triangles/squares/lines, 6 brand colors).
- **`<BrandMark size>`** — the YGM calendar PNG, rotated -4°.

## Buttons & Tags (`styles/dovo.css`)

```css
.btn        — yellow bg, ink text, ink border, 4px ink shadow.
              Hover: translate(-2px,-2px), shadow grows.
              Active: translate(2px,2px), shadow vanishes.
.btn-pink   — pink bg, white text
.btn-cyan   — cyan bg, ink text
.btn-purple — purple bg, white text
.btn-ghost  — paper bg, ink text

.tag        — VT323 16px, ink bg, yellow text, 2px border, uppercase.
```

All buttons should be `<a>` or `<button>` with the `.btn` class plus a color modifier.

## Interactions & Behavior

- **Smooth-scroll** on nav anchor clicks (offset by ~70px to clear sticky nav)
- **Marquee:** infinite CSS animation (`scroll-left`, 30s linear)
- **Buttons:** transform-on-press hover/active states
- **Hover on `.btn`:** shadow grows from 4px to 6px and element shifts -2,-2
- **No client-side JS routing required** — single page, anchor links only
- **No forms, no auth, no state beyond decorative tweaks**
- **Booking flow:** every booking CTA on the page is just a link (`target="_blank"`) to `https://youvegotmeetings.com/book/ethan`. The calendar mockup in the Book section is illustrative only — clicking it goes to the same external link.

## Responsive Behavior

Three breakpoints in `styles/site.css`:

- **≥1000px:** full desktop layout (2-col hero, 3-col projects, 2-col consulting, 220px experience rail)
- **<1000px:** all multi-column layouts collapse to 1 column; experience rail moves above body
- **<760px:** nav links shrink, hero mega text 72px, avatar centers
- **<600px:** hero mega 52px (with smaller text-shadow offsets), section titles 36px, section padding 56/18, nav anchor links hide (only brand + Book Me visible), card paddings tighten

`.hero-grid > div { min-width: 0; }` is essential — without it, the giant Monoton headline forces grid-track overflow on mobile.

## Assets

- `assets/ethan-avatar.png` — posterized 4-tone (cream / yellow / pink / ink) portrait of Ethan, with a 12px ink border baked in. Generated from Ethan's headshot in the design tool. **Replace with a higher-quality stylized illustration when one is available** — the current asset is a procedurally posterized photo and is intentionally rough.
- `assets/ygm-logo.png` — the You've Got Meetings calendar logo, used as `<BrandMark>` in the nav.

Both should be dropped into the new project's public assets folder.

## External Dependencies

- **Google Fonts:** Bungee, Bungee Inline, Monoton, Space Grotesk, VT323, Caveat Brush
- **External link:** `https://youvegotmeetings.com/book/ethan` — the booking flow. **Critical** — every CTA points here.
- **External link:** `https://www.linkedin.com/in/ethanlippman/` — footer.

## Copy

All copy is final and lives in the JSX files. **Do not paraphrase** — Ethan reviewed every line. Notable rules:

- **Never name companies Ethan worked at.** Refer to them by category only ("publicly-traded digital experience platform," "national media & publishing group," etc.). The Experience section data is structured exactly this way — preserve it.
- "Dovo Labs" is the site name. "You've Got Meetings" (full spelling, with apostrophe) is the booking product.
- The codename "Elixir" (Ethan's internal AI revenue layer) is fine to keep — it's an internal codename, not a company.

## Tweaks Panel

The host design tool surfaces a "Tweaks" panel via postMessage protocol. **Strip this entirely from production.** Specifically:
- Delete `src/tweaks-panel.jsx`
- Remove the `<TweaksPanel>` block and `useTweaks` hook from `src/app.jsx`
- The `heroAccent` and `confettiDensity` defaults can be hard-coded (current defaults: `pink`, `0.8`)

## Files in this bundle

```
design_handoff_dovo_labs/
├── README.md                    ← you are here
├── index.html                   ← entry HTML, loads React + Babel + section scripts
├── styles/
│   ├── colors_and_type.css      ← design tokens (colors, type, spacing, motion)
│   ├── dovo.css                 ← shared utilities (buttons, tags, marquee, patterns)
│   └── site.css                 ← site-specific layout + responsive rules
├── src/
│   ├── app.jsx                  ← root <App>, mounts sections + Tweaks panel
│   ├── shared.jsx               ← decorative SVG components + BrandMark + TopNav (unused here, see Nav.jsx)
│   ├── tweaks-panel.jsx         ← STRIP IN PRODUCTION
│   └── sections/
│       ├── Nav.jsx
│       ├── Hero.jsx
│       ├── Marquee.jsx
│       ├── About.jsx
│       ├── Experience.jsx       ← anonymized job history data
│       ├── Projects.jsx
│       ├── Consulting.jsx       ← anonymized engagements data
│       ├── Book.jsx
│       └── Footer.jsx
└── assets/
    ├── ethan-avatar.png
    └── ygm-logo.png
```

## Recommended Implementation Path

1. Spin up Next.js (App Router) or Vite + React.
2. Drop `assets/` into `public/`.
3. Port `colors_and_type.css` and `dovo.css` into a global stylesheet (e.g. `app/globals.css`). Keep CSS variables — they're already a clean token layer.
4. Port `site.css` similarly.
5. Build the decorative components from `src/shared.jsx` into a `components/decoration/` folder (Squiggle, Starburst, Triangle, Dot, ZigZag, ConfettiBg, BrandMark).
6. Build each section as its own component, copying JSX from the corresponding `src/sections/*.jsx` file. Replace inline `style={{}}` with className or styled components per your codebase's convention.
7. Compose them in the page route.
8. Delete the Tweaks panel.
9. Hook up Google Fonts via `next/font` or equivalent.
10. Verify mobile (375px) — `hero-grid > div { min-width: 0 }` and the `<600px` font reductions are essential.

Done.
