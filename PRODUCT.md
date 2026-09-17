# Product

<!-- impeccable:product-schema 1 -->

Élya Jewellry — a brand site for an independent jewellery studio working in
steel. Pre-launch. This file records product truth only; the visual language
lives in DESIGN.md and must not be restated here.

## Platform

web

## Stack

Static HTML, CSS and vanilla JavaScript. No framework, no build step, no
package.json. Deployed on Vercel from the `master` branch of this repository.

This constraint is **confirmed to hold even as online sale arrives** — which
pushes commerce toward a hosted solution or an outbound link rather than a
back end on this site. It is not permanent by decree: reopen it explicitly
with the user on the day it genuinely blocks the work, and do not quietly
route around it before then.

Five pages, shared header and footer, relative links:

| File | Role |
| --- | --- |
| `index.html` | home |
| `collection.html` | the eight pieces, with category filters |
| `piece.html` | one piece, selected by `?id=` |
| `atelier.html` | the studio, the maker, the process |
| `contact.html` | contact details and a mockup form |

`styles.css` and `main.js` are shared by all five. Fonts are self-hosted in
`fonts/`; product artwork is in `images/`.

## Users

People who buy one considered piece rather than several cheap ones. They
arrive from Instagram or word of mouth, **mostly on mobile**, and want to
judge whether the work is serious before contacting the studio.

Their job on this site is appraisal, not purchase: they are deciding whether
this maker is worth writing to or visiting.

## Product Purpose

Present the work well enough that a stranger can tell it is serious, and make
contacting the studio the natural next step.

Success is a message to the workshop or a booked visit — not a session length
or a page count.

## Positioning

One material, worked in the open. Steel — polished, brushed, sandblasted,
cold-folded — with occasional brass-gold accents. Pieces are geometric and
architectural rather than ornamental, made in short runs and finished by hand,
piece by piece. The price reflects the work, not the metal.

A neighbouring brand could copy the look; it could not truthfully copy "one
material, one bench, forty square metres, repaired rather than replaced."

## Operating Context

The studio is at 2 allée Simone de Beauvoir, 77420 Champs-sur-Marne,
Seine-et-Marne — about thirty minutes east of Paris on the RER A. Pieces are
designed and assembled by hand on site. Visits are by appointment only: it is
a workshop before it is a shop.

## Capabilities and Constraints

**The collection.** Eight pieces, steel-based, some with brass-gold accents:
rings, cuffs, earrings, necklaces, hoops, bangles, piercings. Prices from €95
to €240. Names are evocative and French — Bague Faille, Manchette Palissade,
Boucles Contre-jour, Collier Ligne de Fuite, Bague Serrure, Créoles Écho,
Bracelet Étau, Piercing Rivet. **Never rename a piece to something generic.**

**The cart is a mockup today, and online sale is planned.** All five pages
carry a cart drawer — header count, quantity steppers, line totals, a
"Passer commande" button — that processes nothing and says so. It is not a
leftover to delete: it prefigures a real shop.

**How that shop will work is an open decision.** Payment, stock, orders and
accounts are all undecided. Do not presuppose a mechanism, do not build
toward one, and do not describe the site as an e-commerce store until this
is settled.

**Open question, to settle before the site goes live:** a cart that fills up
and never leads anywhere can frustrate. This is a journey question, not a
design one — either the cart resolves into something (a message to the
workshop, a hosted checkout), or it should say plainly where it stops.

**Bilingual FR/EN, French authoritative.** The header carries an FR/EN
toggle and every string exists in both languages, product descriptions and
spec labels included. English is kept but **secondary**: French is the
reference, English follows where practical. A missing or late English string
is not a defect. The mechanism is a `data-en` attribute per node, swapped in
`main.js`; language and cart both persist in `localStorage`.

**Still out of scope:** user accounts, newsletter popups, live chat widgets,
cookie banners beyond what is legally required, blog, wishlist.

## Brand Commitments

Voice: short declarative sentences. No superlatives, no marketing enthusiasm,
no exclamation marks. The French copy is written, not generated — treat it as
authored material and ask before rewriting factual claims.

## Evidence on Hand

**Real:** the studio address and its transport context. The eight pieces,
their materials, dimensions, finishes and prices. The French and English copy
currently on the site.

**Placeholder — must be replaced before launch, never cited as real:**
`atelier@elya.fr` and `+33 1 60 95 00 00`. The opening hours shown on the
site (Thu–Sat, 10:00–18:00) were not confirmed either; verify before relying
on them.

**No photographs exist yet.** Product visuals are line-drawn SVG placeholders
that belong to the art direction and will be replaced by photography later.
They are not missing assets and must not be swapped for stock imagery or grey
rectangles.

**Do not fabricate:** testimonials, press coverage, customer counts, stock
levels, delivery promises beyond the stated 5–12 working days, or any
certification.

## Product Principles

1. **Appraisal before transaction.** The visitor is judging whether the work
   is serious. Everything on the site serves that judgement; nothing rushes
   them toward a purchase that does not yet exist.
2. **The material is the argument.** Steel that shows the tool, the fold and
   the direction of the polish. Describe the making, not the lifestyle.
3. **Mobile is the real scene.** Most visitors arrive from Instagram on a
   phone. A layout that only resolves on a wide desktop has failed.
4. **Say what is true, including what is a mockup.** The cart admits it
   processes nothing; the form admits it sends nothing. Keep that honesty
   rather than dressing placeholders as functionality.
5. **Restraint is a commitment, not a default.** When a section looks empty
   or a claim looks thin, the answer is rarely to add more.
