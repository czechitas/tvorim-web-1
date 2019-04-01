<!-- .slide: data-state="c-slide-inter" -->

# HTML

>>>
Ukázat DevTools

* První, co si prohlížeč stahuje, je HTML soubor, který obsahuje informace o stránce.
* Je to textový soubor, takže ho můžete upravovat v jakémkoli textovém editoru jako je Poznámkový blok (Notepad) apod., my samozřejmě budeme používat Repl.it
* Oblíbené editory: Atom, Sublime Text, VS Code

---

## Značkovací jazyk

>>>
* HT**ML** => mark-up language = značkovací
* Značkovací, protože význam a strukturu dokumentu popisuje pomocí značek, anglicky tagů.

---

## Tag/značka
```html
<jmenotagu>
	Obsah tagu
</jmenotagu>
```
<!-- .element: class="c-text-xl stretch" contenteditable="true" -->

>>>
* Tag se skládá ze špičatých závorek, názvu tagu mezi nimi.
* Mluvíme o párovém tagu: první je otevírací a druhý je zavírací.
* Uzavírá se lomítkem za první špičatou závorkou.
* Mezi tagy je jeho obsah, tedy to co obaluje. To může být obyčejný text nebo další tag nebo tagy.
* Existují i nepárové tagy (těch je pár), upozorním, až se k nim dostaneme.
* Tagy vytvářejí v prostředí webové stránky tzv. **elementy/prvky**, z nichž se skládá každá stránka.

---

## Klávesnice <!-- .element: class="c-sr-only" -->

<!-- .slide: data-background="img/keyboard-cs-html.svg" -->

>>>
* Protože je pro psaní HTML potřeba některé méně časté znaky, máte na stole pomůcku pro nalezení znaků.
* Kouzelná je klávesa AltGr s kterou napíšete většinu znaků.
* Někdo může mít trochu jiné rozložení.
* Kdo má Mac to má jednodušší - platí to co je vytištěné na klávesnici.

---

## Tagy

```html
<h1>Hlavní nadpis</h1>

<p>odstavec</p>

<strong>důležitý text</strong>

```
<!-- .element: class="c-text-md stretch" contenteditable="true" -->

>>>
* Jména tagů jsou většinou zkratky anglických slov. Např.:
 * `h` = heading
 * `p` = paragraph

---

<!-- .slide: data-state="c-slide-task" -->

# Zkusíme si první tagy

>>>
* Všimněte si zvýrazňování otvíracích a uzavíracích značek v editoru ==> správné zanořování a uzavírání!
* Tagy se nesmí křížit, tj. nejprve uzavřu vnořený a pak teprve vnější.

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
* Úplně první je tzv. doctype. Říká prohlížeči jaký typ HTML má čekat. Není potřeba se jím nyní zabývat, jen ho tam vždy mějte.
* Všechno ostatní je uvnitř elementu `html` => je obaleno obaleno tagem `<html>`.
* V hlavičce (`<head>`) jsou definovány vlastnosti pro celou stránku. Většinou „nejsou vidět“. O hlavičce později.
* V těle stránky (`<body>`) je vlastní text stránky, obrázky atd. Většinou „je vidět“. Zde budeme nyní pracovat.
* Všimněte si odsazení. A dbejte na něj ve svém kódu.
* Všimněte si komentářů.
* _Přestávka?_
