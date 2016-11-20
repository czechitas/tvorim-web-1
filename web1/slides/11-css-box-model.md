<!-- .slide: data-state="c-slide-inter" -->

# Box-model

---

### Výška a šířka

```css
.tip { 
	width: 300px;
	height: 100px;
}
```
<!-- .element: class="c-text-md " contenteditable="true" -->

<img src="img/box-model-width-height.svg" style="border:0 none;box-shadow:none;">

---

### Okraj

```css
.tip { 
	border: 1px solid orange;
}
```
<!-- .element: class="c-text-md " contenteditable="true" -->

<img src="img/box-model-border.svg" style="border:0 none;box-shadow:none;">

---

### Odsazení obsahu od okraje

```css
.tip { 
	padding: 25px; 
}
```
<!-- .element: class="c-text-md " contenteditable="true" -->

<img src="img/box-model-padding.svg" style="border:0 none;box-shadow:none;">

---

### Odsazení od vnějších prvků

```css
.tip { 
	margin: 10px;
}
```
<!-- .element: class="c-text-md " contenteditable="true" -->

<img src="img/box-model-margin.svg" style="border:0 none;box-shadow:none;">

---

### Omezení šířky nebo výšky

```css
.tip { 
	max-width: 500px;
	min-width: 100px;
	max-height: 200px;
	min-height: 100px;
}
```
<!-- .element: class="c-text-md " contenteditable="true" -->

---

<!-- .slide: data-state="c-slide-task" -->

# Hrajem si! A

**vycházíme z [bit.ly/tvorim10](http://bit.ly/tvorim10)**

* v patičce odsazení textu horní a dolní
* zruš odsazení všeho na stránce od jejího okraje
* nastav šířku 50% boxu s kontakty
* odsaď obsah kontaktu ať není nalepený
* vycentruj kontaktní box _(najdi si jak)_

**výsledek: [bit.ly/tvorim11a](http://bit.ly/tvorim11a)** 
<!-- .element: class="c-text-xs" -->

>>>
* margin-left/right: auto

---

<!-- .slide: data-state="c-slide-task" -->

# Hrajem si! B

**vycházíme z [bit.ly/tvorim11a](http://bit.ly/tvorim11a)**

* roztáhni pozadí až do kraje
* nastav mapě 100% šířku

**výsledek: [bit.ly/tvorim11b](http://bit.ly/tvorim11b)** 
<!-- .element: class="c-text-xs" -->

>>>
* vlož do kontaktu div
* kontaktu odstraň šířku
* omez novému 
* .obsah dostane max-width 960px a margin-left/margin-right: auto;
 