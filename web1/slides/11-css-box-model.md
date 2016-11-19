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
<!-- .element: class="c-text-md " -->

<img src="img/box-model-width-height.svg" style="border:0 none;box-shadow:none;">

---

### Okraj

```css
.tip { 
	border: 1px solid orange;
}
```
<!-- .element: class="c-text-md " -->

<img src="img/box-model-border.svg" style="border:0 none;box-shadow:none;">

---

### Odsazení obsahu od okraje

```css
.tip { 
	padding: 25px; 
}
```
<!-- .element: class="c-text-md " -->

<img src="img/box-model-padding.svg" style="border:0 none;box-shadow:none;">

---

### Odsazení od vnějších prvků

```css
.tip { 
	margin: 10px;
}
```
<!-- .element: class="c-text-md " -->

<img src="img/box-model-margin.svg" style="border:0 none;box-shadow:none;">

---

### Chytré šířky a výšky

```css
.tip { 
	max-width: 100px;
	min-height: 100px;
}
```
<!-- .element: class="c-text-md " -->

---

<!-- .slide: data-state="c-slide-task" -->

# Hrajem si! A

* v patičce odsazení textu horní a dolní
* nastav celé stránce nulové okraje
* nastav šířku 50% boxu s kontakty
* odsaď obsah kontaktu ať není nalepený
* nastav mapě šířku 100%
* vycentruj kontaktní box

##### (výsledek na [bit.ly/tvorim11a](http://bit.ly/tvorim11a))
<!-- .element: class="c-text-xs c-text-right" -->

>>>
* margin-left/right: auto

---

<!-- .slide: data-state="c-slide-task" -->

# Hrajem si! B

* roztáhni pozadí až do kraje
* nastav mapě 100% šířku

(výsledek na [bit.ly/tvorim11b](http://bit.ly/tvorim11b))
<!-- .element: class="c-text-xs c-text-right" -->

>>>
* vlož do kontaktu div
* kontaktu odstraň šířku
* omez novému 
* .obsah dostane max-width 960px a margin-left/margin-right: auto;
 

