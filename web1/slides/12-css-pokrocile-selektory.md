<!-- .slide: data-state="c-slide-inter" -->

# Pokročilé selektory

---

# Vícenásobný selektor

```css
h1,
h2 { color: green; }
```
<!-- .element: class="c-text-lg" contenteditable="true" -->

>>>
* obarví nadpisy 1. a 2. úrovně na zeleno

---

# Kontextový selektor

```css
.tip h2 { color: blue; }
```
<!-- .element: class="c-text-lg" contenteditable="true" -->

>>>
* obarví nadpisy 2. úrovně na modro, pokud jsou v prvku s třídou `.tip`

---

# Na pořadí záleží

<pre class="c-text-md fragment" contenteditable data-fragment-index="10"><code class="stretch lang-css" data-noescape><span class="fragment">p {
	color: red;
	background-color: pink;
}</span>

<span class="fragment">p { color: green; }</span></code></pre>

>>>
* platí poslední nastavená hodnota vlastnosti

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

---

<!-- .slide: data-state="c-slide-task" -->

# Zjednodušujeme kód
