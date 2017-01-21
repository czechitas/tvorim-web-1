<!-- .slide: data-state="c-slide-break" -->

# Shrnutí

>>>
* HTML popisuje strukturu stránky => obsah
* CSS předepisuje vzhled stránky => forma
* představili jsme si různé elementy (nadpisy, odstavce, odkazy, obrázky)
* ukázali jsme si, jak k HTML souboru připojit stylopis (soubor CSS)
* představili jsme si, jakým způsobem zapisujeme pravidla, kterými měníme různé vlastnosti jednotlivých prvků
* seznámili jsme se s tagem `div`, který nám umožňuje pracovat s částmi stránky jako celky

---

<!-- .slide: data-state="c-slide-inter" -->

# Třídy

---

# Problém: jak odlišit elementy <!-- .element: class="c-sr-only" -->

```html
<p>A víte, že…?</p>

<p>Ještě jeden odstavec</p>

```
<!-- .element: class="c-text-md" contenteditable="true" -->

```css
p { color: blue; }
```
<!-- .element: class="c-text-md fragment" contenteditable="true" -->

>>>
* Co kdybych chtěl vypsat odstavce modře?
* Ale co kdybych chtěl udělat jen první odstavec modrý?

---

# Řešení: jak odlišit elementy <!-- .element: class="c-sr-only" -->

```html
<p class="tip">A víte, že…?</p>

<p>Ještě jeden odstavec</p>

```
<!-- .element: class="c-text-md" contenteditable="true" -->

```css
.tip { color: blue; }
```
<!-- .element: class="c-text-md fragment" contenteditable="true" -->

>>>
* řešením je přidat třídu, která umožňuje se zaměřit v CSS přesněji
* třída se v HTML přidává jako atribut `class`
* v CSS se zapíše s tečkou na začátku
* třídu můžeme přiřadit libovolnému počtu značek

---

# Třída platí pro více elementů <!-- .element: class="c-sr-only" -->

```html
<h1 class="tip">Tip</h1>

<p class="tip">A víte, že…?</p>

<p>Ještě jeden odstavec</p>

```
<!-- .element: class="c-text-md" contenteditable="true" -->

```css
.tip { color: blue; }
```
<!-- .element: class="c-text-md" contenteditable="true" -->

>>>
* třída se tedy použije pokud má nějaký prvek speciální vlastnosti
* nebo se skupina vlastností opakuje a chceme si tak ušetřit zápis

---

# Vícenásobné třídy

```css
.tip { color: red; }
.cool { background-color: blue; }
```
<!-- .element: class="c-text-md " contenteditable="true" -->

```html
<p class="tip">…</p>
<p class="cool">…</p>
<p class="cool tip">…</p>
```
<!-- .element: class="c-text-md " contenteditable="true" -->

>>>
* jeden atribut `class` může mít přiřazeno více hodnot ‒ tříd
* oddělujeme je mezerou

---

<!-- .slide: data-state="c-slide-task" -->

# Přidáme třídy

---

<!-- .slide: data-state="c-slide-break" -->

# Přestávka 10 min
