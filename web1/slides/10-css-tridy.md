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
* co kdybych chtěl udělat odstavce modré?
* ale co kdybych chtěl udělat jen první odstavec modrý?

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
* třída se v HTML přidává jako parametr `class`
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

<!-- .slide: data-state="c-slide-task" -->

# Přidáme třídy

---

<!-- .slide: data-state="c-slide-break" -->

# Přestávka 10 min
