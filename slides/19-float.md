<!-- .slide: data-state="c-slide-inter" -->

# Float

---

## Obtékání textu kolem obrázků

<img src="img/float.png" style="border:0 none;box-shadow:none;">


>>>
* nejen obrázků, ale u nich je to nejtypičtější
* znáte z novinové sazby nebo z Wordu (ale tam je to spíš k vzteku)

---

### Vlastnost float

```css
img {
	float: left; /* nebo right */
}
```

`float: left` znamená, že obrázek se posune doleva a text ho obtéká zprava.

>>>
* A naopak `float: right` posune obrázek vpravo.
* Nejen obrázek: můžeme nechat plavat i jiné prvky. Ale to teď necháme plavat.
* zrušit lze hodnou `none`

---

<!-- .slide: data-state="c-slide-task" -->

# Obtékání obrázků

---

### Když obrázek přeteče

<img src="img/overflow.png" class="c-text-md fragment" style="border:0 none;box-shadow:none; float: right; position: relative; z-index: 1;">
 
```css
section { 
	display: flow-root;
}
```
<!-- .element: class="c-text-sm fragment" contenteditable="true" -->

>>>
* Vlastnost `display` právě s touto hodnotou ošetří, aby plovoucí prvek nepřetekl.
* Nám si teď stačí zapamatovat, že když používám float, je dobré přidat rodičovskému prvku `display: flow-root`