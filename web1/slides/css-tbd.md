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


# Na pořadí záleží

<pre class="c-text-md fragment" contenteditable data-fragment-index="10"><code class="stretch lang-css" data-noescape><span class="fragment">p {
	color: red;
	background-color: pink;
}</span>

<span class="fragment">p { color: green; }</span></code></pre>


>>>
* platí poslední nastavená hodnota vlastnosti
* zkuste sami
