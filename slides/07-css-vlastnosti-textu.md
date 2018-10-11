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

>>>
* všimněte si komentáře, ten se ignoruje, hodí se pro poznámky nebo když chcete zkusit, jak se to chová bez nějakého kusu kódu
* zkuste všechny použít
* **dědičnost**: některé vlastnosti se dědí a tyto jsou mezi nimi
* kvůli (nejen) dědičnosti existují hodnoty `normal`, slouží k „vynulování“ vlastnosti.
* Konkrétní fonty: musí být buď na uživatelově počítači, nebo se musí ke stránce připojit (podobně jako obrázky, nebo soubory CSS). Když se nenajde/nenačte, vezme se výchozí písmo daného operačního systému => uvádíme proto univerzální hodnoty `serif`/`sans-serif`, aby prohlížeč aspoň věděl, jaký typ použít. **Pozor na licenční podmínky!** V praxi se využívají služby jako Typekit, nebo Google Fonts, které mají licenční podmínky ošetřeny.

---

<!-- .slide: data-state="c-slide-task" -->

# Upravíme písmo
