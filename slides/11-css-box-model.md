<!-- .slide: data-state="c-slide-inter" -->

# Box-model

---

### Výška a šířka

```css
.tip {
	width: 300px;
	height: 100px;
	max-width: 100%;
}
```
<!-- .element: class="c-text-sm " contenteditable="true" -->

<img src="img/box-model-width-height.svg" style="border:0 none;box-shadow:none;">

>>>
* přestaneme pomalu mluvit o značkách a začneme mluvit o prvcích/elementech, které prohlížeč na stránce (na základě značek) vytvoří
* z jednotlivých prvků skládáme komponenty a z nich pak stránky
* lze také nastavi šířku/výšku minimální a maximální => `min-width`, `max-height`
* pozor na procenta u výšky: stránka je z principu nekonečná


---

<!-- .slide: data-state="c-slide-task" -->

# Nastavíme obrázkům v galerii šířku

>>>
* **Pozor** třetina (33,33%) nebude fungovat, kvůli mezerám mezi obrázky. Odkud se tam mezery berou? Vzpomeňte si na začátek: v HTML se všechno bílé místo zdrcne na délku jedné mezery. Takže obrázky, které máme v řádcích pod sebou, mezi sebou mají právě jednu mezeru. Je vícero řešení, jak se zbavit mezer, ale my to vyřešíme šířkou 32&nbsp;%.
* Tak je to ve fontendu často: i když nám něco přijde divné a nesmyslné, ve skutečnosti to vyplývá přesně z pravidel. Něco jako francouzská výslovnost… Takže jsou i výjimky.

---

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
<!-- .element: class="c-text-xs fragment" contenteditable="true" -->

<img class="fragment" src="img/box-model-border.svg" style="border:0 none;box-shadow:none;">


>>>
* ohraničení: vytyčuje hranici mezi prvkem a okolím (okolními prvky)
* rámeček kolem prvku: různé hodnoty `border-style` (dotted, dashed, inset)
* zkrácený zápis: totéž co nad; tento nastaví stejný rámeček po všech stranách. Lze samozřejmě nastavovat ohrančení pro každou stranu zvlášť.
* lze stylovat samostatně každou ze 4 stran: top, right, bottom, left (border-left)
* `border-radius` zadávají se mu délkové jednotky (rem/px/% aj.)

---

<!-- .slide: data-state="c-slide-task" -->

# Orámujeme obrázky

---

### Odsazení obsahu od okraje

```css
.tip {
	padding: 1.5rem;
}
```
<!-- .element: class="c-text-md " contenteditable="true" -->

<img src="img/box-model-padding.svg" style="border:0 none;box-shadow:none;">

>>>
* „hraniční pásmo“ ‒ prostor mezi ohraničením a obsahem prvku
* 1 hodnota nastaví shodné odsazení na všech 4 stranách prvku.

---

<!-- .slide: data-state="c-slide-task" -->

# Odsazení sekcí

---

### Odsazení od vnějších prvků

```css
.tip {
	margin: 1rem;
}
```
<!-- .element: class="c-text-md " contenteditable="true" -->

<img src="img/box-model-margin.svg" style="border:0 none;box-shadow:none;">

>>>
* za hranicí prvku, v rodičovském prvku (`section`, `body`)
* všimněte si, že margin se už do šířky prvku nezapočítává, to je důležité si uvědomit, když počítám šířku kterou mi prvky zaberou (pokud mají margin po obou stranách, zabere mi každý prvek 2 × margin + šířka)
* poznámka pod čarou: margin může nabývat i záporných hodnot (jako jediná vlastnost box modelu)

---

### Box-model ‒ shrnutí

<img src="img/box-model-margin.svg" style="border:0 none;box-shadow:none;">

>>>
* všechny prvky na stránce bez ohledu na vizuální tvar jsou krabice/boxy/obdélníky
* vlastnost `width` určuje, jak má být prvek široký *včetně* ohraničení (`border`) a výplně (`padding`)
* `margin` se do šířky nezapočítává, ale ovlivňuje, kolik místa prvek ve výsledku zabere
* **Pozor při výpočtech**: nezpomeňte násobit 2: <br>
	`margin: 5px;` ubere na šířku (resp. výšku) úhrnem `10 px` => vlevo a vpravo (resp. nahoře a dole). Platí i pro `padding` a `border`.
* výše uvedené platí pouze pokud mají všechny prvky nastaven `box-sizing: border-box;`, viz začátek CSS souboru na Repl.it
