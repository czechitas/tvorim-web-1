# Na specificitě selektoru

<pre class="c-text-md fragment" data-fragment-index="10" contenteditable><code class="lang-html" data-noescape><span class="fragment" data-fragment-index="10">&lt;div&gt;
	&lt;p class="tip"&gt;obsah&lt;/p&gt;
&lt;/div&gt;</code></pre>
<pre class="c-text-md fragment" contenteditable data-fragment-index="30"><code class="stretch lang-css" data-noescape><span class="fragment" data-fragment-index="30">p.tip { color: red; }</span><span class="fragment" data-fragment-index="40">
p { color: green; }</span>
<span class="fragment" data-fragment-index="50">div p { color: blue; }</span></code></pre>

>>>
* ale to platí pro selektory se stejnou specificitou
* specificita je vlastně síla selektoru
* čím více tříd, tím silnejší
* pokud mají stejný počet tříd, tak je silnější ten s větším počtem tagů
* ani ten poslední selektor není silnejší než ten první
