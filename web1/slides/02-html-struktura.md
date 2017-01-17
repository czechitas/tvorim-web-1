<!-- .slide: data-state="c-slide-inter" -->

# HTML

>>>
* První, co si prohlížeč stahuje, je HTML soubor, který obsahuje informace o stránce.
* Je to textový soubor, takže ho můžete upravovat v jakémkoli textovém editoru jako je Poznámkový blok (Notepad) apod., my samozřejmě budeme používat Thimble
* Oblíbené editory: Atom, Sublime Text

---

# Značkovací jazyk

>>>
* HT**ML** => mark-up language = značkovací
* Značkovací, protože význam a strukturu dokumentu popisuje pomocí značek, anglicky tagů.

---

# Tag/značka
```html
<jmenotagu>
	Obsah tagu
</jmenotagu>
```
<!-- .element: class="c-text-xl stretch" contenteditable="true" -->

>>>
* Tag se skládá ze špičatých závorek, názvu tagu mezi nimi.
* Mluvíme o párovém tagu: na jednom místě ho otevřeme, na dalším zavřeme.
* Uzavírá se lomítkem za první špičatou závorkou.
* Mezi tagy je jeho obsah, tedy to co obaluje. To může být obyčejný text nebo další tag nebo tagy.
* Existují i nepárové tagy (těch je pár), ale k nim se dostaneme.

---

# Klávesnice <!-- .element: class="c-sr-only" -->

<!-- .slide: data-background="img/keyboard-cs-html.svg" -->

>>>
* Protože je pro psaní HTML potřeba některé méně časté znaky, máte na stole pomůcku pro nalezení znaků.
* Kouzelná je klávesa AltGr s kterou napíšete většinu znaků.
* Někdo může mít trochu jiné rozložení.

---

# Tagy

```html
<h1>Hlavní nadpis</h1>

<p>odstavec</p>

<strong>důležitý text</strong>

```
<!-- .element: class="c-text-md stretch" contenteditable="true" -->

>>>
* jak používají web nevidomí? …

---

<!-- .slide: data-state="c-slide-task" -->

# Zkusíme si první tagy

---

<!-- .slide: data-state="c-slide-break" -->

# Přestávka 10 min

---

## Základní struktura HTML

```html
<!DOCTYPE HTML>
<html>
	<head>
		<!-- vlastnosti stránky -->
	</head>
	<body>
		<!-- samotný obsah stránky -->
	</body>
</html>
```
<!-- .element: class="c-text-md stretch" contenteditable="true" -->

>>>
* HTML dokument má mít tuto strukturu.
* Úplně první je tzv. doctype. Říká prohlížeči jaké HTML má čekat. Není potřeba se jím nyní zabývat, jen ho tam vždy mějte.
* Všechno ostatní je obaleno tagem `<html>`.
* V hlavičce (`<head>`) jsou definovány vlastnosti pro celou stránku. Většinou „nejsou vidět“.
* V těle stránky (`<body>`) je vlastní text stránky, obrázky atd. Většinou „je vidět“.
* Všimněte si komentářů.
* Všimněte si odsazení.

---

<!-- .slide: data-state="c-slide-task" -->

# Založíme stránku
