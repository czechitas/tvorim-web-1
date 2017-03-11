<!-- .slide: data-state="c-slide-inter" -->

## Pseudotřídy

----

# Ukázka <!-- .element: class="c-sr-only" -->

<pre class="c-text-md fragment" contenteditable><code class="lang-css stretch" data-noescape>a { color: navy; }<span class="fragment">

a:link {color: blue;} /* nenavštívený */

a:visited {color: purple;} /* navštívený */

a:hover {color: red;} /* najetí myší */<span class="c-extra">

a:focus {color: green;} /* aktivace klávesnicí */

a:active {color: yellow;} /* při kliknutí */</span></span>
</code></pre>

>>>
* Zatímco třídy si vytváří autor kódu, pseudotřídy jsou dané.
* Narozdíl od tříd se zapisují jen do CSS, na HTML není třeba sahat.

----

<!-- .slide: data-state="c-slide-task" -->

# Měníme barvu odkazů po najetí myši
