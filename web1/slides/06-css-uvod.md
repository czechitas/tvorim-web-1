<!-- .slide: data-state="c-slide-inter" -->

# CSS

>>>
Jazyk popisující vzhled prvků webové stránky.

---

# Z čeho se skládá stránka

* HTML (obsah a struktura) <!-- .element: class="fragment" -->
* CSS (vzhled) <!-- .element: class="fragment" -->
* obrázky a třeba i videa nebo zvuky (netextový obsah) <!-- .element: class="fragment" -->
* Javascript (aplikace, animace a další) <!-- .element: class="fragment" -->

>>>
* V HTML je obsah stránky a také je v něm popsáno, jaká je struktura toho obsahu.
* V HTML se také definuje, jaké má stránka obsahovat obrázky a případné další součásti.
* CSS říká, jak mají jednotlivé prvky stránky vypadat.
* Javascript je programovací jazyk, který umožňuje manipulovat s prvky stránky.

---

# Připojení CSS

```html
<link 
	rel="stylesheet"
	href="nazevsouboru.css"
>
```
<!-- .element: class="c-text-lg stretch" -->

>>>
* Je více způsobů, jak aplikovat CSS, my použijeme nejběžnější a to samostatný CSS soubor, připojený pomocí tagu link v hlavičce.

---

<pre class="c-text-md fragment" contenteditable data-fragment-index="10"><code class="lang-css" data-noescape><span class="fragment" data-fragment-index="20">selektor</span><span class="fragment" data-fragment-index="30"> { </span>
	<span class="fragment" data-fragment-index="40">vlastnost</span><span class="fragment" data-fragment-index="50">:</span><span class="fragment" data-fragment-index="60"> hodnota</span><span class="fragment" data-fragment-index="70">;</span><span class="fragment" data-fragment-index="100">
	property: value;</span>
<span class="fragment" data-fragment-index="80">}</span>
</code></pre>

---

# Barvy

<pre class="c-text-md fragment" contenteditable data-fragment-index="10"><code class="lang-css" data-noescape><span class="fragment" data-fragment-index="20">p</span><span class="fragment" data-fragment-index="30"> { </span>
	<span class="fragment" data-fragment-index="40">color</span><span class="fragment" data-fragment-index="50">:</span><span class="fragment" data-fragment-index="60"> white</span><span class="fragment" data-fragment-index="70">;</span><span class="fragment" data-fragment-index="100">
	background-color: black;</span>
<span class="fragment" data-fragment-index="80">}</span>
</code></pre>


>>>
* selektor říká co chceme barvit
* deklarace jak

---

<!-- .slide: data-state="c-slide-task" -->

# Hrajem si!

* Připoj si `styly.css` k HTML
* Nastav barvu nadpisům a textu
