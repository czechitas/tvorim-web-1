<!-- .slide: data-state="c-slide-inter" -->

# Pozadí

----

## Barva pozadí

```css
p {
    background-color: green;
    background-color: hsl(120, 100%, 50%);
    background-color: rgb(0, 255, 0);
    background-color: #00FF00;
}
```
<!-- .element: class="c-text-sm" contenteditable="true" -->

>>>
* barvy slovně (jak to nabízí Thimble)
* v praxi spíše číselně, hexadecimálně
* HSL: hue, saturation, luminescence ~ odstín, sytost, jas
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
