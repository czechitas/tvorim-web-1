<!-- .slide: data-state="c-slide-inter" -->

# Navigace: HTML

---

## Navigace s odkazy

```html
<nav>
  <a href="">O mně</a>
  <a href="">Fotogalerie</a>
</nav>
```

>>>
* `nav` je sémantický prvek pro sadu navigačních odkazů
* často se také používá odrážkový seznam

---

## Identifikátor

```html
<section id="fotogalerie">
    <h2>Fotogalerie</h2>
    <p>Fotím od mala a ráda.</p>
</section>
```

>>>
* Hodnotu `id` si podobně jako u `class` můžeš vymyslet, jak libo **ale na rozdíl od třídy se nesmí opakovat** (jinak by pak nebyl identifikátorem).
* Protože je v rámci jedné stránky (jednoho HTML dokumentu) unikátní, hodí se třeba k tomu, že na něj můžeme odkazovat.

---

## Odkazy na sekce (kotvy)

```html
<nav>
  <a href="#omne">O mně</a>
  <a href="#galerie">Galerie</a>
</nav>
```

>>>
* Proto je značou pro odkaz `a` => z _anchor_ ~ kotva
* Hodnota `href` musí začínat `#` (hash, dvojkřížek). Tím říkáš prohlížeči: toto je kotva, odroluj stránku. Kdyby tam hash nebyl prohlížeč, by se pokusil by stáhnout soubor `omne` z internetu.

---

<!-- .slide: data-state="c-slide-task" -->

# Přidáme navigaci
