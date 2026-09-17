# DESIGN.md — Elya Jewellry

This file is the source of truth for the visual language of this site.
Any design command must read it first and must not override the rules in
"Hard bans" below, even when a change would look more conventional.

---

## 1. Positioning

Elya Jewellry is a small independent jewellery studio working in steel —
polished, brushed, sandblasted, cold-folded — with occasional brass-gold
accents. Pieces are geometric and architectural rather than ornamental.

The site must read as an **editorial object**: closer to a printed gallery
catalogue than to an e-commerce storefront. Quiet, confident, slightly
severe. It should feel like it was art-directed, not assembled.

Tone of voice: short declarative sentences. No superlatives, no marketing
enthusiasm, no exclamation marks.

---

## 2. Colour tokens

Warm neutrals only. There is no second accent colour and none may be added.

```
--paper        #F4F3F1   page background, warm off-white
--surface      #E8E8E6   product image plates, inset blocks
--ink          #1A1A18   primary text, near-black, never pure #000
--ink-muted    #6B6862   secondary text, materials, captions
--rule         #D8D6D2   hairline rules and dividers
--brass        #B4813C   single accent: line art, hover, emphasis
```

Rules:
- `--brass` is an accent, not a theme. It may occupy roughly 5% of any
  viewport and no more. It is never used as a background fill.
- No gradients anywhere, including subtle ones.
- No coloured shadows. No shadows at all except where §6 allows.
- Dark mode is out of scope. Do not add a theme toggle.

---

## 3. Typography

Two families, no third.

- **Display / headings / product names** — a high-contrast transitional
  serif (Cormorant Garamond, EB Garamond, or equivalent). Regular weight
  only for large sizes; never bold a display serif.
- **Labels, metadata, navigation, prices** — a neutral grotesque at small
  sizes, letterspaced, often uppercase.

Scale (desktop):

```
display   clamp(2.75rem, 5vw, 4.25rem)   serif, 400, line-height 1.05
h2        2rem                            serif, 400
product   1.375rem                        serif, 400
body      1rem                            sans, 400, line-height 1.6
meta      0.8125rem                       sans, 400, --ink-muted
label     0.6875rem                       sans, uppercase, 0.14em tracking
```

Rules:
- Headings are set left, never centred, except on the contact page.
- Measure caps at 62 characters for running text.
- Tracking is tightened slightly on display serif (-0.01em), opened on
  small uppercase labels (0.14em). Never the reverse.
- Do not introduce Inter, Poppins, Montserrat, or any geometric sans as a
  display face.

---

## 4. Layout

- Generous whitespace is the primary compositional device. When a section
  feels empty, that is the intent; do not fill it.
- Asymmetry is preferred over centring. Text blocks sit on the left rail
  with the right column left open.
- Hairline rules (1px, `--rule`) separate sections and delimit the
  collection grid. They carry the structure — borders and cards do not.
- The collection reads as a **single horizontal line** of numbered pieces
  (01, 02, 03…), scrolled sideways on desktop. That horizontality is a
  signature of the site and must be preserved.
- Section spacing: 7rem desktop, 4rem mobile. Consistent, not decorative.
- Mobile is a genuine redesign of the horizontal rail into a vertical
  sequence, not a squashed version of it.

---

## 5. Product imagery

Each piece sits on a `--surface` plate at a fixed 4:3 landscape ratio.

Current placeholders are thin-line SVG drawings: single-weight strokes in
`--ink` with one `--brass` stroke per drawing, no fills, no shading.

These will later be replaced by photographs on the same warm grey ground.
Therefore:
- Every product visual is an isolated component with the same ratio and
  the same plate.
- Swapping an SVG for an `<img>` must require no layout change.
- Never substitute stock photography or a grey rectangle placeholder.

---

## 6. Motion

Restraint. Motion confirms an action; it does not announce itself.

- Duration: 150–250ms for hover and state changes. Nothing above 300ms.
- Easing: custom cubic-bezier only. Never the CSS keyword defaults, never
  `ease-in` on an entrance.
- Transforms and opacity only. Do not animate layout properties.
- Scale animations start from a visible value (0.96–0.98), never from 0.
- Hover on a product: the brass stroke gains weight, or the price rule
  extends. Nothing lifts, nothing scales up, nothing gains a shadow.
- Scroll-triggered reveals: at most one per page, and only where the
  content genuinely benefits. Do not apply a fade-up to every block.
- Respect `prefers-reduced-motion` and disable non-essential motion.

---

## 7. Hard bans

Never introduce, under any justification:

- Centred hero with headline, subheadline, and two pill buttons
- Rounded corners above 2px; pill-shaped buttons
- Cards with borders, elevation, or nested cards
- Drop shadows, glows, glassmorphism, blur backdrops
- Gradients of any kind
- Icon grids, feature triplets, "Why choose us", "Our values" sections
- Emoji anywhere in the interface
- Badges, ribbons, "New", "Best seller", countdown timers
- Testimonial carousels, logo walls, trust seals
- Full-width coloured section bands
- Lorem ipsum or placeholder marketing copy
- Any second accent colour

---

## 8. Judgement note

Design commands in this repo tend toward a clean product-SaaS aesthetic.
That default is wrong here. When a rule in this file conflicts with a
generic best practice, this file wins. Flag the tension, propose the
change, but do not apply it silently.
