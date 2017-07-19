<!-- .slide: data-state="c-slide-inter" -->

# Box-model

----

### Výška a šířka

```css
.tip {
	width: 300px;
	height: 100px;
}
```
<!-- .element: class="c-text-md " contenteditable="true" -->

<img src="img/box-model-width-height.svg" style="border:0 none;box-shadow:none;">

----

<!-- .slide: data-state="c-slide-task" -->

# Nastavíme obrázkům v galerii šířku

----

### Ohraničení

```css
img {
	border-width: 2px;
	border-style: solid;
	border-color: black;
}
```

<!-- .element: class="c-text-xs fragment" contenteditable="true" -->

```css
img {
	border: 2px solid black;
}

```
<!-- .element: class="c-text-sm fragment" contenteditable="true" -->

<img class="fragment" src="img/box-model-border.svg" style="border:0 none;box-shadow:none;">


>>>
* ohraničení: vytyčuje hranici mezi prvkem a okolím (okolními prvky)
* rámeček kolem prvku: různé hodnoty `border-style` (dotted, dashed, inset)
* zkrácený zápis: tento nastaví stejný rámeček po všech stranách. Lze samozřejmě nastavovat ohrančení pro každou stranu zvlášť.

----

<!-- .slide: data-state="c-slide-task" -->

# Orámujeme obrázky

----

### Odsazení obsahu od okraje

```css
.tip {
	padding: 25px;
}
```
<!-- .element: class="c-text-md " contenteditable="true" -->

<img src="img/box-model-padding.svg" style="border:0 none;box-shadow:none;">

>>>
* „hraniční pásmo“ ‒ prostor mezi ohraničením a obsahem prvku
* 1 hodnota nastaví shodné odsazení na všech 4 stranách prvku.

----

<!-- .slide: data-state="c-slide-task" -->

# Vnitřní odsazení obrázků

----

### Odsazení od vnějších prvků

```css
.tip {
	margin: 10px;
}
```
<!-- .element: class="c-text-md " contenteditable="true" -->

<img src="img/box-model-margin.svg" style="border:0 none;box-shadow:none;">

>>>
* za hranicí prvku, v rodičovském prvku (`div`, `body`)

----

<!-- .slide: data-state="c-slide-task" -->

# Větší mezery mezi obrázky

----

### Box-model ‒ shrnutí

<img src="img/box-model-margin.svg" style="border:0 none;box-shadow:none;">

>>>
* všechny prvky na stránce bez ohledu na vizuální tvar jsou krabice/boxy
* vlastnost `width` určuje, jak má být prvek široký *včetně* ohraničení (`border`) a výplně (`padding`)
* `margin` se do šířky nezapočítává, ale ovlivňuje, kolik místa prvek ve výsledku zabere
* **Pozor při výpočtech**: nezpomeňte násobit 2: <br>
	`margin: 5px;` ubere na šířku (resp. výšku) úhrnem `10 px` => vlevo a vpravo (resp. nahoře a dole). Platí i pro `padding` a `border`.

----

<!-- .slide: data-state="c-slide-task" -->

# Odsadíme obsah od okrajů

----

# Přestávka

<!-- .slide: data-state="c-slide-break" -->


----

<!-- .slide: data-state="c-slide-task" -->

# Roztáhneme pozadí až do okraje
