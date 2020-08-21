<!-- .slide: data-state="c-slide-inter" -->

# DevTools

>>>
* Ukážeme si jak náš zdrojový kód interpretuje prohlížeč.

---

## Nástroje pro vývojáře

* Developer tools, devTools
* Má každý moderní prohlížeč, nejlepší Chrome a Firefox.
* Zobrazí nám kód stránky tak, jak ho chápe prohlížeč.

>>>
* **ukázat** základní rozvržení okna (DOM, CSS, webová stránka)
* pozor, toto už není váš kód (i když se mu podobá), nýbrž jeho **interpretace prohlížečem**

---

## Prohlížeč ze zdrojového HTML vytvoří prvky (elementy).

>>>
* Ze značek v našem zdrojovém kód vzniknou HTML prvky webové stránky.
* **ukázat** zvýrazění prvku na stránce při pohybu v DOMu.
* DOM ~ Document Object Model = objektový model dokumentu
* Může se to zdát poněkud abstraktní, ale brzy se to objasní.

---

## Prvky/elementy

* Pro nás je podstatné, že prvky mají různé vlastnosti (velikost, barvu, odsazení).
* A my je můžeme měnit ‒ pomocí jazyka **CSS**.

>>>
* ukázat panel s CSS vlastnostmi, čímž přejdeme k výkladu o CSS
* umožňuje dělat dílčí změny v aktuálně načtené stránce, ty ale vydrží jen dokud na ní zůstáváš

---

## Spuštění DevTools

* klávesovou zkratkou <kbd>F12</kbd>, popř. <kbd>Ctrl+Shift+I</kbd> (na Macu <kbd>Cmd+Shift+I</kbd>)

nebo

* pravým myšítkem na prvek, který vás zajímá a vybrat _Prozkoumat/Inspect element_

>>>
* při běžné práci na webu je má kódér otevřeny neustále