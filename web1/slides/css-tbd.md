## Další tagy

<pre class="c-text-md" contenteditable><code class="lang-html stretch" data-noescape>&lt;h1&gt;Hlavní nadpis&lt;/h1&gt;

<span class="fragment">&lt;h2&gt;Nadpis 2. úrovně&lt;/h2&gt;</span>

<span class="fragment">&lt;ul&gt;
	&lt;li&gt;odrážkový&lt;/li&gt;
	&lt;li&gt;seznam&lt;/li&gt;
&lt;/ul&gt;</span>

<span class="fragment">&lt;div&gt;element bez významu&lt;/div&gt;</span>

<span class="fragment">&lt;br&gt; &lt;!-- zalomení řádku --&gt;</span>
</code></pre>


>>>
* dodržujte pořadí nadpisů: nejde o to jak vypadají
* jak používají web nevidomí? …
* nepárový tag!


---

# Blokové a řádkové elementy

<pre class="c-text-md" contenteditable><code class="lang-html" data-noescape><span class="fragment" >&lt;div&gt;
	Blokové elementy zaberou celou dostupnou šířku.
&lt;/div&gt;</span>

<span class="fragment" data-fragment-index="30">&lt;span&gt;Řádkové elementy zaberou jen tolik místa, kolik potřebují a nejsou samostatně na řádku. Neměly by se do nich vnořovat blokové.&lt;/span&gt;</span></code></pre>

<pre class="c-text-md fragment" contenteditable><code class="lang-css stretch" data-noescape><span class="fragment">display: block;</span>

<span class="fragment">display: inline;</span>

<span class="fragment">display: inline-block; /* hybdrid: řádkový s&nbsp;některými vlastnostmi blokového, lze mu například nastavit šířku a výšku */</span></code></pre>

---

# Třídy

<pre class="c-text-md fragment" data-fragment-index="10" contenteditable><code class="lang-html" data-noescape><span class="fragment" data-fragment-index="50">&lt;h1 class="tip"&gt;Nadpis&lt;/h1&gt;

</span><span class="fragment" data-fragment-index="10">&lt;p&gt;Odstavec textu.&lt;/p&gt;</span>

&lt;p<span class="fragment" data-fragment-index="20"> class="tip"</span><span class="fragment" data-fragment-index="10">&gt;A víte, že…?&lt;/p&gt;</span>
</code></pre>
<pre class="c-text-md fragment" contenteditable data-fragment-index="15"><code class="lang-css" data-noescape><span class="fragment" data-fragment-index="15">p<span class="fragment" data-fragment-index="30">.tip</span> { color: blue; }</span>
<span class="fragment" data-fragment-index="140">
.tip { font-weight: bold; }</span></code></pre>


>>>
* třída se použije pokud má nějaký prvek speciální vlastnosti
* nebo se vlastnosti opakují
* cvičení: obalte část obsahu do prvku div a dejte mu třídu

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


>>>
* tip? jakou barvu má 1. odstavec? jakou barvu pozadí má 2. odstavec?
* cvičení:
	* tip? jakou barvu má 3. odstavec?

---

# Vlastnosti textu

<pre class="c-text-md fragment" contenteditable><code class="lang-css stretch" data-noescape><span class="fragment">font-style: italic; /* normal */</span>

<span class="fragment">font-weight: bold;  /* nebo normal */</span>

<span class="fragment">text-align: center; /* nebo left nebo right */</span>

<span class="fragment">font-family: sans-serif; /* nebo serif */</span>

<span class="fragment">font-size: 20px; /* nebo 1.5em nebo 150% */</span>
</code></pre>


>>>
* všimněte si komentáře, ten se ignoruje, hodí se pro poznámky
* zkuste všechny použít
* rozměry: pixely (obrazovka)
* rozměry: em (dle velikosti písma rodiče)
* rozměry: procenta (u písma dle velikosti)
* některé vlastnosti se dědí a tyto jsou mezi nimi


--- 

# Pokročilé selektory

<pre class="c-text-md fragment" contenteditable data-fragment-index="10"><code class="stretch lang-css" data-noescape><span class="fragment">* { /* žolík: libovolný element */ }</span>
<span class="fragment">
h1,
h2 { /* nadpisy 1. a 2. úrovně */ }</span>

<span class="fragment">.tip h2 { /* nadpisy 2. úrovně, zanořené do prvku s třídou tip */ }</span>
</code></pre>


>>>
* zkuste všechny použít

---

# Pseudotřídy

<pre class="c-text-md fragment" contenteditable><code class="lang-css stretch" data-noescape>a { color: navy; }<span class="fragment">

a:link {color: blue;} /* nenavštívený */

a:visited {color: purple;} /* navštívený */

a:hover {color: red;} /* najetí myší */<span class="c-extra">

a:focus {color: green;} /* aktivace klávesnicí */

a:active {color: yellow;} /* při kliknutí */</span></span>
</code></pre>


>>>
* cvičení: nastylujte odkaz

---

# Na pořadí záleží

<pre class="c-text-md fragment" contenteditable data-fragment-index="10"><code class="stretch lang-css" data-noescape><span class="fragment">p {
	color: red;
	background-color: pink;
}</span>

<span class="fragment">p { color: green; }</span></code></pre>


>>>
* platí poslední nastavená hodnota vlastnosti
* zkuste sami

---

# Float

<pre class="c-text-md fragment" contenteditable><code class="lang-css stretch" data-noescape>img {
	width: 300px;
	float: right; /* nebo left, zrušit: none */
}</code></pre>


>>>
* pro obtékání např. obrázků

---

# Box-model

<pre class="c-text-md fragment" contenteditable><code class="lang-css stretch" data-noescape><span class="fragment">width: 300px;</span>
<span class="fragment">height: 100px;</span>
<span class="fragment">margin: 10px;</span>
<span class="fragment">border: 1px solid black;</span>
<span class="fragment">padding: 25px;</span></code></pre>
<img src="img/box-model.svg" style="border:0 none;box-shadow:none;">


>>>
* obalte si odstavce do tagu div a nastavte mu rozměry

