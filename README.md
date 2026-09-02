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
| `index.html` | le site complet, autonome (polices, CSS et JS inclus) — c'est ce fichier qui est servi |
| `source/Elya Jewellry.dc.html` | le fichier de design éditable |
| `source/styles.css` | tokens et composants du design system Classical |
| `source/support.js` | runtime nécessaire au fichier de design |

Le site est en une seule page avec navigation interne : Accueil, Collection, Fiche produit, Atelier, Contact. Bascule FR/EN et panier de démonstration inclus.

## Remplacer les visuels

Chaque visuel produit est une composition géométrique placée dans un conteneur en `position: absolute; inset: 0`. Pour passer aux vraies photos, remplacer cette composition par un `<img>` dans le même conteneur, puis régénérer `index.html` depuis la source.
