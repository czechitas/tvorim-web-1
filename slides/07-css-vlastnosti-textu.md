<!-- .slide: data-state="c-slide-inter" -->

# Vlastnosti textu

---

# style, weight, align, family <!-- .element: class="c-sr-only" -->

```css
p {
    font-style: italic;  /* nebo normal */

    font-weight: bold; /* nebo normal */

    font-family: sans-serif; /* nebo serif */

    text-align: center; /* nebo left nebo right */
}
```
<!-- .element: class="c-text-sm stretch" contenteditable="true" -->

<p class="c-text-md">Tyto vlastnosti se **dědí**: nastavíme-li je nadřazenému (rodičovskému) prvku, přenesou se i na prvky zanořené (potomky).</p>


>>>
* všimněte si komentáře, ten se ignoruje, hodí se pro poznámky nebo když chcete zkusit, jak se to chová bez nějakého kusu kódu
* kvůli (nejen) dědičnosti existují hodnoty `normal`, slouží k „vynulování“ vlastnosti.
* Lze nastavit i konkrétní fonty, ale musí být buď na uživatelově počítači, nebo se musí ke stránce připojit (podobně jako obrázky, nebo soubory CSS). Když ho nenajde vezme výchozí písmo daného operačního systému. Proto je vhodné uvést univerzální hodnoty `serif`/`sans-serif`, aby prohlížeč alespoň věděl, jaký typ zástupného fontu použít. Vždy ale musíš respektovat licenční podmínky. V praxi se využívají služby jako Typekit, nebo Google Fonts, které mají licenční podmínky ošetřeny.
