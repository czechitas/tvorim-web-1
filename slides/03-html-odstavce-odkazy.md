<!-- .slide: data-state="c-slide-inter" -->

# Nadpisy, odstavce a odkazy

---

## Nadpisy

```html
<h1>Web Kryštůvka Robina</h1>

<h2>Kontakt</h2>

<h3>Telefonní spojení</h3>
```

>>>
* dodržujte pořadí nadpisů: nenechte se svést tím, jak vypadají (po `h1` vždy nejprve `h2`, pak teprve `h3`)
* 6 úrovní nadpisů (`<h1>`…`<h6>`)
* obvykle bývá na jednotlivé stránce jen 1 nadpis první úrovně

---

## Odstavec

```html
<p>
	A Kryštůfek Robin a Králíček
	a všichni Králíčkovi příbuzní
	a známí se svalili… A navrch
	na tu hromadu se svalil
	vysvobozený Pú!
</p>
```
<!-- .element: class="c-text-md stretch" contenteditable="true" -->

>>>
* Jednou z nejčastěji používaných značek je vyznačování odstavce.
* Z posloupnost mezer a zalomení řádku se stane 1 mezera => text se slije, pokud ho nestrukturujeme pomocí tagů.
* Přesto si dejte na formátování kódu (odsazování, odřádkování) záležet, jinak se v tom nejde vyznat:
 * Jeden element na řádek.
 * Zanořujeme-li, odsadíme začátek řádku tabulátorem.

---

## Odkazy

```html
<a>
	nejlepší přítel
</a>
```
<!-- .element: class="c-text-md fragment current-visible fade-out" contenteditable="true" -->

```html
<a href="https://google.com">
	nejlepší přítel
</a>
```
<!-- .element: class="c-text-nd fragment current-visible" contenteditable="true" -->

>>>
* naučíme se jak udělat odkaz
* atribut je `href`, jeho hodnotou je odkaz
* hodnota do "uvozovek"
* Pomocí atributy dodáváme prohlížeči nějaká extra data, která nevyplývají ze samotného tagu. (Např. `h1` všeříkající, `a` je málo, musíme říct **kam** odkazovat.)
* atributy se píšou do otevíracího tagu nebo prostě do tagu

---

<!-- .slide: data-state="c-slide-task" -->

# Přidáme sekci _Kontakt_

>>>
* upozornit na bonus, pokud mají hotovo

---

## Další funkce Repl.it

* Zvýrazní párové značky k té, kde je právě kurzor.
* Napovídá uzavírací značku.
