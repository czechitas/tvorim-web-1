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

<!-- .slide: data-state="c-slide-task" -->

# Nastavíme obrázkům v galerii šířku

---

### Ohraničení

```css
img {
	border-width: 2px;
	border-style: solid;
	border-color: black;
}
```

<!-- .element: class="c-text-sm fragment" contenteditable="true" -->

```css
img {
	border: 2px solid black;
}

```
<!-- .element: class="c-text-sm fragment" contenteditable="true" -->

<img class="fragment" src="img/box-model-border.svg" style="border:0 none;box-shadow:none;">


>>>
* rámeček kolem prvku: různé hodnoty `border-style` (dotted, dashed, inset)

---

<!-- .slide: data-state="c-slide-task" -->

# Orámujeme obrázky

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

<!-- .slide: data-state="c-slide-task" -->

# Vnitřní odsazení obrázků

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

<!-- .slide: data-state="c-slide-task" -->

# Větší mezery mezi obrázky

---

### Box-model ‒ shrnutí

<img src="img/box-model-margin.svg" style="border:0 none;box-shadow:none;">

---

<!-- .slide: data-state="c-slide-task" -->

# Odsadíme obsah od okrajů ---> ????
