<!-- .slide: data-state="c-slide-inter" -->

#  Navigace: CSS

---

## Blokové elementy

* zaberou celou dostupnou šířku => řadí se pod sebe

>>>
* na vaší stránce jsou to nadpisy, odstavce, divy

---

## Řádkové elementy

* zaberou jen tolik místa, kolik potřebují
* nejsou samostatně na řádku => řadí se za sebou jako slova ve větě
* nejde jim nastavit některé vlastnosti z box modelu (např. šířka, výška, horní/dolní okraj)

>>>
* na vaší stránce jsou to například odkazy, nebo důležitý text  (`strong`)
* ony jim ty vlastnosti nastavit jdou, ale neprojeví se očekávaným způsobem
* lze ale například úspěšně nastavit pravý/levý margin

---

## Řádkově-blokové elementy

* hybrid: řádkový s některými vlastnostmi blokového
* řadí se za sebou, ale lze mu nastavit šířku, výšku a okraje

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
* pomocí CSS lze ale změnit chování prvku na jiný typ

---

<!-- .slide: data-state="c-slide-task" -->

# Odkazy v navigaci na jeden řádek
