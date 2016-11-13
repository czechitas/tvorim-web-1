<!-- .slide: data-background="#b82c7f" -->

# Demo kódu

---

### Kód: výchozí

```html
<p>
	<a href="#">Code</a>
	<a href="#">Code</a>
	<a href="#">Code</a>
	<a href="#">Code</a>
	<a href="#">Code</a>
</p>
```

>>>
* výchozí vzhled kódu

---

### Kód: roztažený do&nbsp;konce

```html
<p>
	<a href="#">Code</a>
	<a href="#">Code</a>
	<a href="#">Code</a>
	<a href="#">Code</a>
	<a href="#">Code</a>
</p>
```
<!-- .element: class="stretch"  -->

---

### Kód: velikosti: c-text-xs

```html
<p>
	<a href="#">Code 1</a>
	<a href="#">Code 2</a>
	<a href="#">Code 3</a>
	<a href="#">Code 4</a>
	<a href="#">Code 5</a>
	<a href="#">Code 6</a>
	<a href="#">Code 7</a>
	<a href="#">Code 8</a>
	<a href="#">Code 9</a>
	<a href="#">Code 10</a>
	<a href="#">Code 11</a>
	<a href="#">Code 12</a>
	<a href="#">Code 13</a>
	<a href="#">Code 14</a>
	<a href="#">Code 15</a>
	<a href="#">Code 16</a>
	<a href="#">Code 17</a>
</p>
```
<!-- .element: class="c-text-xs stretch" -->

---

### Kód: velikosti: c-text-sm

```html
<p>
	<a href="#">Code 1</a>
	<a href="#">Code 2</a>
	<a href="#">Code 3</a>
	<a href="#">Code 4</a>
	<a href="#">Code 5</a>
	<a href="#">Code 6</a>
	<a href="#">Code 7</a>
	<a href="#">Code 8</a>
	<a href="#">Code 9</a>
	<a href="#">Code 10</a>
	<a href="#">Code 11</a>
</p>
```
<!-- .element: class="c-text-sm stretch" -->

---

### Kód: velikosti: výchozí

```html
<p>
	<a href="#">Code 1</a>
	<a href="#">Code 2</a>
	<a href="#">Code 3</a>
	<a href="#">Code 4</a>
	<a href="#">Code 5</a>
</p>
```
<!-- .element: class="stretch"  -->

---

### Kód: velikosti: c-text-md

```html
<p>
	<a href="#">Code 1</a>
	<a href="#">Code 2</a>
	<a href="#">Code 3</a>
	<a href="#">Code 4</a>
</p>
```
<!-- .element: class="c-text-md stretch" -->

---

### Kód: velikosti: c-text-lg

```html
<p>
	<a href="#">
		Code 1
	</a>
</p>
```
<!-- .element: class="c-text-lg stretch" -->

---

# Externí načítání kódu…

<pre class="c-text-xs"><code class="sample" sample="slides/demo-sample.html#html"></code></pre>

>>>
* načítá kód z vnějších souborů, soubor může být delší a tímto z něj ukázat jen snippet(y)
* zároveň je nutno obalit komentáři alespoň jeden snippet (nejde načíst celý soubor)

---

## … s ukázkou výsledku v iframe

<pre class="c-text-xs"><code class="sample" sample="slides/demo-sample.html#html"></code></pre>
<pre class="c-text-xs"><code class="sample" sample="slides/demo-sample.html#css" sample-type="css"></code></pre>
<pre class="c-text-xs"><code class="sample" sample="slides/demo-sample.css#css"></code></pre>
<pre class="c-text-xs"><code class="sample" sample="slides/demo-sample.html#script" sample-type="js"></code></pre>

<div class="stretch">
<iframe width="100%" height="100%" src="slides/demo-sample.html"></iframe>
</div>

>>>
* kód se automaticky reloaduje
* u inline css/js v html je potřeba nastavit typ kódu ručně