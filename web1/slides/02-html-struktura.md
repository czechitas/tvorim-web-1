<!-- .slide: data-state="c-slide-inter" -->

# HTML

>>>
* První, co si prohlížeč stahuje, je HTML soubor, který obsahuje informace o stránce.
* Je to textový soubor, takže ho můžete upravovat v jakémkoli textovém editoru jako je Poznámkový blok (Notepad) apod., my samozřejmě budeme používat Thimble

---

# Značkovací jazyk

>>>
* Značkovací, protože význam a strukturu dokumentu popisuje pomocí značek, anglicky tagů.

---

# Tag
```html
<jmenotagu>
	Obsah tagu
</jmenotagu>
```
<!-- .element: class="c-text-xl stretch" contenteditable="true" -->

>>>
* Tag se skládá ze špičatých závorek, názvu tagu mezi nimi.
* Uzavírací tag má pak ještě za první závorkou lomítko.
* Mezi tagy je jeho obsah, tedy to co obaluje. To může být obyčejný text nebo další tag nebo tagy. 

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

---

<!-- .slide: data-background="img/keyboard-cs-html.svg" -->

>>>
* Protože je pro psaní HTML potřeba některé méně časté znaky, máte na stole pomůcku pro nalezení znaků.
* Kouzelná je klávesa AltGr s kterou napíšete většinu znaků.
* Někdo může mít trochu jiné rozložení.

---

# Tagy

```html
<h1>Hlavní nadpis</h1>

<h2>Nadpis 2. úrovně</h2>

<div>element bez významu</div>

```
<!-- .element: class="c-text-md stretch" contenteditable="true" -->

>>>
* dodržujte pořadí nadpisů: nejde o to jak vypadají
* jak používají web nevidomí? …

---

<!-- .slide: data-state="c-slide-task" -->

# Hrajem si 2!
* thimbleprojects.org/czechitas/136445/
* Otevři si adresu <a href="http://bit.ly/tvorim01" target="_blank">bit.ly/tvorim01</a>
* Vpravo nahoře klikni na „Upravit“.
* Vytvoř hlavní nadpis (název webu): <br>„Web Kryštůfka Robina“

**výsledek: [bit.ly/tvorim02](http://bit.ly/tvorim02)** 
<!-- .element: class="c-text-xs" -->

---

<!-- .slide: data-state="c-slide-break" -->

# Přestávka do 10:10
