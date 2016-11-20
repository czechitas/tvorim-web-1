<!-- .slide: data-state="c-slide-inter" -->

#  Navigace: CSS

---

## Blokové elementy

* zaberou celou dostupnou šířku

>>>
* na vaší stránce jsou to například divy

---

## Řádkové elementy

* zaberou jen tolik místa, kolik potřebují
* nejsou samostatně na řádku 

>>>
* na vaší stránce jsou to například odkazy

---

## Řádkově-blokové elementy

* hybrid: řádkový s některými vlastnostmi blokového
* lze mu například nastavit šířku a výšku

>>>
* na vaší stránce se tak chovají obrázky

---

## Typ elementu v&nbsp;CSS

```css
a { display: block; }

div { display: inline; }

li { display: inline-block; }
```
<!-- .element: class="c-text-md stretch" contenteditable="true" -->

>>>
* každý element má výchozí typ
* Podle těchto typů se nesmí vnořovat blokové do řádkových.
* pomocí CSS lze ale změnit chování prvku na jiný typ (pořád se nesmí vnořovat)

---

<!-- .slide: data-state="c-slide-task" -->

# Hrajem si!

**vycházíme z [bit.ly/tvorim17](http://bit.ly/tvorim17)**

* nastyluj menu tak, aby položky byly vedle sebe a vycentrované
* udělej efekt podbarení po najetí na polozku menu

**výsledek: [bit.ly/tvorim18](http://bit.ly/tvorim18)** 
<!-- .element: class="c-text-xs" -->

>>>
* list-style: none pro odstranění tečky
