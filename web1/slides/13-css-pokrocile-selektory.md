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

<!-- .slide: data-state="c-slide-task" -->

# Hrajem si 13!

**vycházíme z [bit.ly/tvorim12](http://bit.ly/tvorim12)**

* uprav CSS pro barvu nadpisů na vícenásobný selektor
* přidej odkaz na Czechitas do patičky (pokud tam žádný nemáš) a obarvi všechny bíle aniž bys přidala třídu 

**výsledek: [bit.ly/tvorim13](http://bit.ly/tvorim13)** 
<!-- .element: class="c-text-xs" -->
