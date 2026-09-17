# Élya Jewellry — site vitrine

Maquette d'avant-projet. Direction artistique « Manifeste » sur le design system Classical.

## Déploiement Vercel

Aucun build. À la racine du dépôt : `index.html`.

- Vercel > Add New > Project > importer ce dépôt
- Framework Preset : **Other**
- Build Command : *(vide)*
- Output Directory : *(vide / racine)*

## Contenu

| Fichier | Rôle |
| --- | --- |
| `index.html` | Accueil |
| `collection.html` | la collection, avec filtres par catégorie |
| `piece.html` | fiche produit, la pièce étant choisie par `?id=` (ex. `piece.html?id=etau`) |
| `atelier.html` | l'atelier |
| `contact.html` | contact et formulaire de démonstration |
| `styles.css` | tokens et composants du design system Classical, `@font-face` inclus |
| `main.js` | bascule FR/EN, panier, filtres, fiche produit — partagé par les cinq pages |
| `fonts/` | Cormorant Garamond et Lora, en sous-ensembles `.woff2` |
| `images/` | les compositions géométriques, une par pièce, en `.svg` |
| `source/Elya Jewellry.dc.html` | le fichier de design éditable |
| `source/styles.css` | tokens et composants du design system Classical |
| `source/support.js` | runtime nécessaire au fichier de design |

Cinq pages statiques ordinaires, en-tête et pied de page identiques, liens relatifs.
Bascule FR/EN et panier de démonstration inclus : tous deux sont conservés d'une
page à l'autre dans `localStorage`.

## Remplacer les visuels

Chaque visuel produit est une composition géométrique, un fichier `.svg` dans `images/`, appelé par un `<img>` dans un conteneur en `position: absolute; inset: 0`. Pour passer aux vraies photos, remplacer le fichier dans `images/` ou changer le `src`. Le nom du fichier suit le champ `glyph` de la pièce dans `main.js`.
