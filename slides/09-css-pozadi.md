<!-- .slide: data-state="c-slide-inter" -->

# Pozadí

----

## Barva pozadí

```css
p {
    background-color: green;
    background-color: #008000; 
}
```

#<span style="color:red">RR</span><span style="color:green">GG</span><span style="color:blue">BB</span> = šestnáckový zápis složek R(ed)G(reen)B(lue)

šestnáctková soustava: číslice `0‒9` a písmena `a‒f`, tj. hodnoty od `00` do `ff`

<!-- .element: class="c-text-sm stretch" contenteditable="true" -->

>>>
* barvy slovně (jak to nabízí Thimble)
* v praxi spíše číselně, hexadecimálně
* #rrggbb => vždy dvojciferné číslo pro barevnou složku červená|zelená|modrá
* hodnoty 0‒255, ale šestnáctkově 0‒ff

----

## Extra prvky

```html
<div>
    <h2>Nadpis</h2>
    <p>Úryvek novinky…</p>
    <a href="detail.html">více</a>
</div>
```

>>>
* Někdy je třeba k tomu, abychom dosáhli potřebného vizuálního efektu přidat extra prvky.
* Pak se hodí tag `<div>` => abychom mohli kouzlit s CSS, musíme nejprve upravit HTML.
* `div` jako division => oddělení
* Tagem `<div>` obalíme přislušné části stránky, se kterými chceme pracovat jako s celky.

----

<!-- .slide: data-state="c-slide-task" -->

# Nastavíme barvu pozadí
