<!-- .slide: data-state="c-slide-inter" -->

## Pseudotřídy

---

# Ukázka <!-- .element: class="c-sr-only" -->

```css
a { color: navy; }
```
<!-- .element: class="c-text-sm" contenteditable="true" -->

```css
a:link { color: blue; } /* nenavštívený */

a:visited { color: purple; } /* navštívený */

a:hover { color: red; } /* najetí myší */

a:focus { color: green; } /* aktivovaný */

a:active { color: yellow; } /* při kliknutí */
```
<!-- .element: class="c-text-sm fragment" contenteditable="true" -->

>>>
* Zatímco třídy si vytváří autor kódu, pseudotřídy jsou dané.
* Narozdíl od tříd se zapisují jen do CSS, na HTML není třeba sahat.

---

<!-- .slide: data-state="c-slide-task" -->

# Měníme barvu odkazů po najetí myši
