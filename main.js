/* Élya Jewellry — comportement partagé des cinq pages.
   Porté depuis le composant React du bundle : mêmes données, mêmes libellés,
   mêmes règles d'affichage. Seule différence imposée par le passage en pages
   séparées : la langue et le panier sont conservés dans localStorage, là où la
   version monopage les gardait dans l'état du composant. */
(function () {
  'use strict';

  var PIECES = [
    { id: 'faille', name: 'Bague Faille', cat: 'main', ref: 'ELY—01',
      material: 'Acier 316L poli miroir', materialEn: '316L steel, mirror polish', price: 145, glyph: 'fold',
      desc: "Un anneau ouvert d'un seul tenant, plié à froid puis poli jusqu'à ce que la faille se lise comme une ligne de lumière. La fente se règle d'un demi-millimètre à la main.",
      descEn: 'A single open band, cold-folded then polished until the split reads as a line of light. The gap is set by hand, half a millimetre at a time.',
      specs: [['Largeur', 'Width', '4,2 mm'], ['Poids', 'Weight', '6,1 g'], ['Tailles', 'Sizes', '48 à 60'], ['Finition', 'Finish', 'Poli miroir / Mirror']] },
    { id: 'palissade', name: 'Manchette Palissade', cat: 'poignet', ref: 'ELY—02',
      material: 'Acier brossé, pliage à froid', materialEn: 'Brushed steel, cold-folded', price: 240, glyph: 'bars',
      desc: "Sept montants parallèles tenus par deux traverses. Rigide au poignet, souple à l'ouverture. Le brossé est tiré dans un seul sens, celui du bras.",
      descEn: 'Seven parallel uprights held by two crossbars. Rigid on the wrist, flexible at the opening. The brushing runs one way only — the way of the arm.',
      specs: [['Hauteur', 'Height', '32 mm'], ['Poids', 'Weight', '41 g'], ['Tour', 'Circumference', '15,5 à 18 cm'], ['Finition', 'Finish', 'Brossé / Brushed']] },
    { id: 'contrejour', name: 'Boucles Contre-jour', cat: 'oreilles', ref: 'ELY—03',
      material: 'Acier 316L, PVD or', materialEn: '316L steel, gold PVD', price: 130, glyph: 'arcs',
      desc: "Deux arcs décalés qui ne se ferment jamais tout à fait. Le PVD or est appliqué sur la face interne : la couleur n'apparaît que de trois quarts.",
      descEn: 'Two offset arcs that never quite close. The gold PVD sits on the inner face, so the colour only shows at three-quarters.',
      specs: [['Diamètre', 'Diameter', '34 mm'], ['Poids', 'Weight', '3,4 g / unité'], ['Attache', 'Fitting', 'Tige acier / Steel post'], ['Finition', 'Finish', 'PVD or / Gold PVD']] },
    { id: 'lignedefuite', name: 'Collier Ligne de Fuite', cat: 'cou', ref: 'ELY—04',
      material: 'Acier sablé, chaîne 45 cm', materialEn: 'Sandblasted steel, 45 cm chain', price: 185, glyph: 'chain',
      desc: "Une plaque effilée qui suit la clavicule au lieu de pendre. Le sablé retient la lumière au lieu de la renvoyer ; il se patine sans se marquer.",
      descEn: 'A tapered plate that follows the collarbone instead of hanging from it. The sandblasted face holds light rather than throwing it back.',
      specs: [['Longueur', 'Length', '45 cm réglable'], ['Plaque', 'Plate', '58 × 7 mm'], ['Poids', 'Weight', '12 g'], ['Finition', 'Finish', 'Sablé / Sandblasted']] },
    { id: 'serrure', name: 'Bague Serrure', cat: 'main', ref: 'ELY—05',
      material: 'Double anneau, acier poli', materialEn: 'Double band, polished steel', price: 160, glyph: 'ring',
      desc: "Deux anneaux qui tournent l'un dans l'autre et s'alignent en une seule position. On la porte pour ce geste autant que pour la pièce.",
      descEn: 'Two bands that turn within one another and line up in a single position. It is worn as much for that gesture as for the object.',
      specs: [['Largeur', 'Width', '7 mm assemblé'], ['Poids', 'Weight', '9,3 g'], ['Tailles', 'Sizes', '50 à 62'], ['Finition', 'Finish', 'Poli / Polished']] },
    { id: 'echo', name: 'Créoles Écho', cat: 'oreilles', ref: 'ELY—06',
      material: 'Acier 316L brossé, ø 28 mm', materialEn: 'Brushed 316L steel, ø 28 mm', price: 110, glyph: 'disc',
      desc: "Créole à section carrée : de face un trait, de profil un volume. Fermeture à cliquet usinée dans la même barre.",
      descEn: 'A hoop of square section: a line from the front, a volume from the side. The click closure is machined from the same bar.',
      specs: [['Diamètre', 'Diameter', '28 mm'], ['Section', 'Section', '2,5 mm carré'], ['Poids', 'Weight', '4,8 g / unité'], ['Finition', 'Finish', 'Brossé / Brushed']] },
    { id: 'etau', name: 'Bracelet Étau', cat: 'poignet', ref: 'ELY—07',
      material: 'Acier plié à froid, sans soudure', materialEn: 'Cold-folded steel, no solder', price: 210, glyph: 'clamp',
      desc: "Une seule bande refermée sur elle-même, sans soudure ni charnière. La tension du métal fait la fermeture ; elle se règle à la main, une fois.",
      descEn: 'A single band closed on itself, with no solder and no hinge. The tension of the metal is the clasp; it is set by hand, once.',
      specs: [['Largeur', 'Width', '11 mm'], ['Poids', 'Weight', '28 g'], ['Tour', 'Circumference', '16 à 19 cm'], ['Finition', 'Finish', 'Poli mat / Satin']] },
    { id: 'rivet', name: 'Piercing Rivet', cat: 'oreilles', ref: 'ELY—08',
      material: 'Acier chirurgical, filetage interne', materialEn: 'Surgical steel, internal thread', price: 95, glyph: 'stud',
      desc: "Une tête plate et un filetage interne, rien qui accroche. Dessiné pour être posé et oublié — hélix, lobe ou conque.",
      descEn: 'A flat head and an internal thread, nothing to catch. Designed to be fitted and forgotten — helix, lobe or conch.',
      specs: [['Tête', 'Head', '4 mm'], ['Barre', 'Bar', '1,2 mm × 8 mm'], ['Poids', 'Weight', '0,6 g'], ['Finition', 'Finish', 'Poli miroir / Mirror']] }
  ];

  var DEFAULT_PIECE = 'palissade';
  var byId = {};
  PIECES.forEach(function (p, i) { p.index = i; byId[p.id] = p; });

  var $ = function (sel, scope) { return (scope || document).querySelector(sel); };
  var $$ = function (sel, scope) { return Array.prototype.slice.call((scope || document).querySelectorAll(sel)); };

  function euro(n) { return n.toLocaleString('fr-FR') + ' €'; }
  function pad(i) { return String(i + 1).padStart(2, '0'); }
  function artUrl(glyph) { return 'images/' + glyph + '.svg'; }

  /* ── état conservé d'une page à l'autre ─────────────────────────────── */

  function read(key, fallback) {
    try {
      var raw = localStorage.getItem(key);
      return raw === null ? fallback : JSON.parse(raw);
    } catch (e) { return fallback; }
  }
  function write(key, value) {
    try { localStorage.setItem(key, JSON.stringify(value)); } catch (e) { /* stockage indisponible */ }
  }

  var lang = read('elya.lang', 'fr') === 'en' ? 'en' : 'fr';
  var cart = read('elya.cart', {});
  if (!cart || typeof cart !== 'object') cart = {};
  Object.keys(cart).forEach(function (k) {
    if (!byId[k] || !(cart[k] > 0)) delete cart[k];
  });

  /* ── langue ─────────────────────────────────────────────────────────── */

  function isEn() { return lang === 'en'; }

  // même mécanisme que la version monopage : data-en porte la copie anglaise,
  // data-fr mémorise la copie française au premier passage
  function swapLang(scope) {
    var en = isEn();
    $$('[data-en]', scope).forEach(function (n) {
      if (!n.dataset.fr) n.dataset.fr = n.innerHTML;
      var want = en ? n.dataset.en : n.dataset.fr;
      if (n.innerHTML !== want) n.innerHTML = want;
    });
  }

  function paintLangToggle() {
    $$('[data-lang]').forEach(function (a) {
      var on = a.getAttribute('data-lang') === lang;
      a.style.color = on ? 'var(--color-text)' : 'var(--color-neutral-500)';
    });
  }

  function setLang(next) {
    lang = next;
    write('elya.lang', lang);
    document.documentElement.lang = lang;
    renderPiece();
    renderCart();
    swapLang();
    paintLangToggle();
  }

  /* ── panier ─────────────────────────────────────────────────────────── */

  function cartCount() {
    return Object.keys(cart).reduce(function (t, k) { return t + cart[k]; }, 0);
  }
  function cartTotal() {
    return Object.keys(cart).reduce(function (t, k) { return t + byId[k].price * cart[k]; }, 0);
  }
  function saveCart() { write('elya.cart', cart); }

  function setQty(id, n) {
    if (n > 0) cart[id] = n; else delete cart[id];
    saveCart();
    renderCart();
  }

  function el(tag, style, text) {
    var n = document.createElement(tag);
    if (style) n.setAttribute('style', style);
    if (text !== undefined) n.textContent = text;
    return n;
  }

  function cartLine(p) {
    var row = el('div', 'display: flex; gap: 14px; border-bottom: 1px solid var(--color-divider); padding-bottom: 14px; margin-bottom: 14px');

    var thumb = el('div', 'width: 66px; height: 84px; flex: 0 0 auto; background: var(--color-surface); position: relative');
    var thumbInner = el('div', 'position: absolute; inset: 0');
    var img = el('img', 'display: block; width: 100%; height: 100%');
    img.src = artUrl(p.glyph);
    img.alt = '';
    img.setAttribute('aria-hidden', 'true');
    thumbInner.appendChild(img);
    thumb.appendChild(thumbInner);

    var body = el('div', 'flex: 1 1 auto; min-width: 0');
    body.appendChild(el('p', 'font-family: var(--font-heading); font-size: 18px; font-weight: 500; margin: 0 0 3px', p.name));
    var mat = el('p', 'font-size: 12px; color: var(--color-neutral-600); margin: 0 0 8px', isEn() ? p.materialEn : p.material);
    mat.setAttribute('data-en', p.materialEn);
    mat.dataset.fr = p.material;
    body.appendChild(mat);

    var row2 = el('div', 'display: flex; justify-content: space-between; align-items: center; gap: 10px');
    var stepper = el('span', 'display: inline-flex; align-items: center; border: 1px solid var(--color-divider)');
    var btnStyle = 'background: none; border: 0; cursor: pointer; padding: 4px 9px; font-family: var(--font-heading); color: var(--color-text)';
    var dec = el('button', btnStyle, '−');
    var inc = el('button', btnStyle, '+');
    dec.type = 'button';
    inc.type = 'button';
    dec.addEventListener('click', function () { setQty(p.id, cart[p.id] - 1); });
    inc.addEventListener('click', function () { setQty(p.id, cart[p.id] + 1); });
    stepper.appendChild(dec);
    stepper.appendChild(el('span', "min-width: 20px; text-align: center; font-size: 13px; font-feature-settings: 'tnum'", String(cart[p.id])));
    stepper.appendChild(inc);
    row2.appendChild(stepper);
    row2.appendChild(el('span', "font-size: 13px; font-feature-settings: 'tnum'", euro(p.price * cart[p.id])));
    body.appendChild(row2);

    row.appendChild(thumb);
    row.appendChild(body);
    return row;
  }

  function renderCart() {
    $$('[data-cart-count]').forEach(function (n) { n.textContent = String(cartCount()); });

    var host = $('[data-cart-lines]');
    if (!host) return;
    host.textContent = '';
    var ids = Object.keys(cart);
    ids.forEach(function (id) { host.appendChild(cartLine(byId[id])); });

    var empty = $('[data-cart-empty]');
    if (empty) empty.hidden = ids.length > 0;
    var total = $('[data-cart-total]');
    if (total) total.textContent = euro(cartTotal());
  }

  function openCart(open) {
    var drawer = $('[data-cart]');
    if (drawer) drawer.hidden = !open;
  }

  /* ── fiche produit ──────────────────────────────────────────────────── */

  function currentPiece() {
    var id = new URLSearchParams(location.search).get('id');
    return byId[id] || byId[DEFAULT_PIECE] || PIECES[0];
  }

  function fill(field, value, en) {
    $$('[data-field="' + field + '"]').forEach(function (n) {
      n.textContent = value;
      if (en === undefined) n.removeAttribute('data-en');
      else { n.setAttribute('data-en', en); n.dataset.fr = value; }
    });
  }

  function renderPiece() {
    var specs = $('[data-specs]');
    if (!specs) return;                       // pas sur la fiche produit
    var p = currentPiece();
    var en = isEn();

    fill('name', p.name);
    fill('ref', p.ref);
    fill('priceLabel', euro(p.price));
    fill('desc', en ? p.descEn : p.desc, p.descEn);
    $$('[data-field="desc"]').forEach(function (n) { n.dataset.fr = p.desc; });

    var fig = 'Fig. ' + pad(p.index) + ' — ';
    fill('figLabel', fig + (en ? p.materialEn : p.material), fig + p.materialEn);
    $$('[data-field="figLabel"]').forEach(function (n) { n.dataset.fr = fig + p.material; });

    var art = $('[data-art] img');
    if (art) art.src = artUrl(p.glyph);

    specs.textContent = '';
    p.specs.forEach(function (s) {
      var tr = el('tr', 'border-top: 1px solid var(--color-divider)');
      var th = el('th', 'text-align: left; font-weight: 400; padding: 10px 0; color: var(--color-neutral-600); width: 42%', en ? s[1] : s[0]);
      th.setAttribute('data-en', s[1]);
      th.dataset.fr = s[0];
      tr.appendChild(th);
      tr.appendChild(el('td', 'padding: 10px 0', s[2]));
      specs.appendChild(tr);
    });

    var related = $('[data-related]');
    if (related) {
      related.textContent = '';
      PIECES.filter(function (q) { return q.id !== p.id; }).slice(0, 4).forEach(function (q) {
        var a = document.createElement('a');
        a.href = 'piece.html?id=' + q.id;
        a.setAttribute('style', 'flex: 0 0 auto; width: clamp(220px, 25vw, 300px); border-right: 1px solid var(--color-divider); padding: 20px; color: var(--color-text)');
        var box = el('div', 'height: clamp(160px, 18vw, 220px); background: var(--color-surface); position: relative; margin-bottom: 14px');
        var inner = el('div', 'position: absolute; inset: 0');
        var img = el('img', 'display: block; width: 100%; height: 100%');
        img.src = artUrl(q.glyph);
        img.alt = '';
        img.setAttribute('aria-hidden', 'true');
        inner.appendChild(img);
        box.appendChild(inner);
        a.appendChild(box);
        a.appendChild(el('span', 'display: block; font-family: var(--font-heading); font-size: 19px; font-weight: 500', q.name));
        a.appendChild(el('span', "display: block; font-size: 13px; margin-top: 4px; font-feature-settings: 'tnum'; color: var(--color-neutral-600)", euro(q.price)));
        related.appendChild(a);
      });
    }

    document.title = p.name + ' — Élya Jewellry';
  }

  /* ── collection : filtres ───────────────────────────────────────────── */

  function applyFilter(key) {
    $$('[data-filter]').forEach(function (a) {
      var on = a.getAttribute('data-filter') === key;
      a.style.color = on ? 'var(--color-text)' : 'var(--color-neutral-500)';
      a.style.borderBottom = '1px solid ' + (on ? 'var(--color-accent)' : 'transparent');
      if (on) a.setAttribute('data-active', ''); else a.removeAttribute('data-active');
    });
    $$('[data-piece]').forEach(function (art) {
      art.hidden = key !== 'tout' && art.getAttribute('data-cat') !== key;
    });
  }

  /* ── câblage ────────────────────────────────────────────────────────── */

  function wire() {
    $$('[data-lang]').forEach(function (a) {
      a.addEventListener('click', function (e) { e.preventDefault(); setLang(a.getAttribute('data-lang')); });
    });

    $$('[data-cart-open]').forEach(function (a) {
      a.addEventListener('click', function (e) { e.preventDefault(); openCart(true); });
    });
    $$('[data-cart-close]').forEach(function (n) {
      n.addEventListener('click', function (e) { e.preventDefault(); openCart(false); });
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') openCart(false);
    });

    $$('[data-filter]').forEach(function (a) {
      a.addEventListener('click', function (e) { e.preventDefault(); applyFilter(a.getAttribute('data-filter')); });
    });

    var qtyOut = $('[data-qty]');
    if (qtyOut) {
      var qty = 1;
      var paint = function () { qtyOut.textContent = String(qty); };
      $('[data-qty-dec]').addEventListener('click', function () { qty = Math.max(1, qty - 1); paint(); });
      $('[data-qty-inc]').addEventListener('click', function () { qty += 1; paint(); });
      var add = $('[data-add]');
      if (add) {
        add.addEventListener('click', function () {
          var p = currentPiece();
          cart[p.id] = (cart[p.id] || 0) + qty;
          saveCart();
          renderCart();
          swapLang();
          openCart(true);
        });
      }
      paint();
    }

    var form = $('[data-contact-form]');
    if (form) {
      form.addEventListener('submit', function (e) {
        e.preventDefault();
        var sent = $('[data-sent]');
        if (sent) sent.hidden = false;
      });
    }
  }

  function init() {
    document.documentElement.lang = lang;
    wire();
    renderPiece();
    renderCart();
    swapLang();
    paintLangToggle();
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
