<!-- .slide: data-state="c-slide-inter" -->

# float, clearfix

---

# Float

<pre class="c-text-md fragment" contenteditable><code class="lang-css stretch" data-noescape>img {
	width: 300px;
	float: right; /* nebo left, zrušit: none */
}</code></pre>


>>>
* pro obtékání např. obrázků

---

# Vícenásobné třídy

<pre class="c-text-md fragment" data-fragment-index="10" contenteditable><code class="lang-html" data-noescape><span class="fragment" data-fragment-index="10">&lt;p class="tip"&gt;…&lt;/p&gt;</span>
<span class="fragment" data-fragment-index="10">&lt;p class="cool"&gt;…&lt;/p&gt;</span>
<span class="fragment" data-fragment-index="30">&lt;p class="cool tip"&gt;…&lt;/p&gt;</span></code></pre>

<pre class="c-text-md fragment" contenteditable data-fragment-index="20"><code class="lang-css" data-noescape><span class="fragment" data-fragment-index="20">.tip { color: red; }</span>
<span class="fragment" data-fragment-index="20">.cool { background-color: blue; }</span>
<span class="c-extra"><span class="fragment" data-fragment-index="33">.tip.cool {
	background-color: black;
	color: white;
}</span></span></code></pre>


---

<!-- .slide: data-state="c-slide-task" -->

# Hrajem si!

* float: left
* šířku
* margin mapě
* clearfix pro obsah (vícenasobna trida)
* googlení, stackoverflow
* .group:after { content: ""; display: table; clear: both; }
>>>
*

---

<!-- .slide: data-state="c-slide-break" -->

# Přestávka do 15:00
