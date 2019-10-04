<!-- .slide: data-state="c-slide-inter" -->

# CSS

>>>
* Jazyk popisující vzhled elementů webové stránky.

---

## Z čeho se skládá stránka

* HTML (obsah a struktura) <!-- .element: class="fragment" -->
* CSS (vzhled) <!-- .element: class="fragment" -->
* obrázky a třeba i videa nebo zvuky (netextový obsah) <!-- .element: class="fragment" -->
* JavaScript (aplikace, animace a další) <!-- .element: class="fragment" -->

>>>
* V HTML je obsah stránky a také je v něm popsáno, jaká je struktura toho obsahu.
* V HTML se také definuje, jaké má stránka obsahovat obrázky a případné další součásti. => obsah
* CSS říká, jak mají jednotlivé prvky stránky vypadat => forma
* HTML a CSS jsou provázané, některé úpravy vzhledu v CSS závisí na konkrétní struktuře v HTML.
* Hranice mezi formou a obsahem se občas překračuje, ale tím se nyní nemusíme znepokojovat.
* netextový obsah je tzv. nahrazovaný obsah
* Javascript je programovací jazyk, který umožňuje manipulovat s prvky stránky.

---

## Anatomie CSS

<pre class="c-text-md fragment" contenteditable data-fragment-index="10"><code class="lang-css" data-noescape><span class="fragment" data-fragment-index="20">kdo</span><span class="fragment" data-fragment-index="30"> { </span>
    <span class="fragment" data-fragment-index="40">co</span><span class="fragment" data-fragment-index="50">:</span><span class="fragment" data-fragment-index="60"> jak</span><span class="fragment" data-fragment-index="70">;</span>
<span class="fragment" data-fragment-index="80">}</span>
</code>
<code class="lang-css" data-noescape><span class="fragment" data-fragment-index="120">selektor</span><span class="fragment" data-fragment-index="130"> { </span>
    <span class="fragment" data-fragment-index="140">vlastnost</span><span class="fragment" data-fragment-index="150">:</span><span class="fragment" data-fragment-index="160"> hodnota</span><span class="fragment" data-fragment-index="170">;</span><span class="fragment" data-fragment-index="1100">
    property: value;</span>
<span class="fragment" data-fragment-index="180">}</span>
</code></pre>

>>>
* Přibydou nám další méně obvyklé znaky: `{ } ;`
* selektor říká, co chceme barvit
* deklarace jak
* 1 tento řádek = pravidlo
* chyby:
 * neukončíme-li středníkem, pravidlo se ignoruje
 * neuzavřeme-li závorku, všechna následující pravidla se ignorují
* editor chyby signalizuje změnou zvýrazňovacích barev
* Repl.it ti zvýrazní uzavírací závorku předpisu, když zaparkuješ kurzor těsně za otevírací závorku.

---

## Barvy

<pre class="c-text-md fragment" contenteditable data-fragment-index="10"><code class="lang-css" data-noescape><span class="fragment" data-fragment-index="20">p</span><span class="fragment" data-fragment-index="30"> { </span>
    <span class="fragment" data-fragment-index="40">color</span><span class="fragment" data-fragment-index="50">:</span><span class="fragment" data-fragment-index="60"> white</span><span class="fragment" data-fragment-index="70">;</span><span class="fragment" data-fragment-index="100">
    background-color: black;</span>
<span class="fragment" data-fragment-index="80">}</span>
</code></pre>

>>>
* Barvy lze zapisovat více způsoby, 
* Tzv. pojmenovaných barev je omezenýpočet.
* Libovolnou barvu lze získat číselným zápisem, např. hexadecimálním.
* Repl.it ti nabídne pohodlný výběr barvy, když zaparkuješ kurzor nad řádkem, kde barvu nastavuješ. (asi ukázat)

---

## Barvy v CSS

```css
p {
    background-color: green;
    background-color: #00FF00;
    background-color: rgb(0, 255, 0);
    background-color: hsl(120, 100%, 50%);
}
```
<!-- .element: class="c-text-sm" contenteditable="true" -->

>>>
* v praxi spíše číselně, hexadecimálně
* neztrácet čas, jen zmínit, že jsou různé zápisy
* HSL: hue, saturation, luminescence ~ odstín, sytost, jas
* #rrggbb => vždy dvojciferné číslo pro barevnou složku červená|zelená|modrá
* hodnoty 0‒255, ale šestnáctkově 0‒ff
* lze doplnit i čtvrtou složku barvy: průsvitnost

---

## Připojení CSS

```html
<link
    rel="stylesheet"
    href="nazevsouboru.css"
>
```
<!-- .element: class="c-text-lg stretch" contenteditable="true" -->

>>>
* Je více způsobů, jak aplikovat CSS, my použijeme nejběžnější a to samostatný CSS soubor, připojený pomocí tagu link v hlavičce.
* `link` je další nepárový tag (nemá co obalovat, pouze říká, že a odkud se má stylopis načíst)

---

<!-- .slide: data-state="c-slide-task" -->

# Připojíme styly a obarvíme nadpisy a odkazy