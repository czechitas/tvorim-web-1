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
* každý selektor na nový řádek, aneb za čárkou odřádkovat

---

# Kontextový selektor

```css
.tip h2 { color: blue; }
```
<!-- .element: class="c-text-lg" contenteditable="true" -->

>>>
* obarví nadpisy 2. úrovně na modro, pokud jsou v prvku s třídou `.tip`
* odpovídá zanořování v HTML
* tady má mezera význam (jinde na nich tolik nezáleží)

---

# Na pořadí záleží

<pre class="c-text-md fragment" contenteditable data-fragment-index="10"><code class="stretch lang-css" data-noescape><span class="fragment">p {
	color: red;
	background-color: pink;
}</span>

<span class="fragment">p { color: green; }</span></code></pre>

>>>
* platí poslední nastavená hodnota vlastnosti
* často se stane, že zadáte znovu tutéž vlastnost. Když dbáte na úpravu 1 pravidlo na řádek, snáz to odhalíte. (Jsou i automatizované nástroje, které to hlídají za nás.)

---

<!-- .slide: data-state="c-slide-task" -->

# Zjednodušujeme kód
