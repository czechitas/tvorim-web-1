<!-- .slide: data-background="#b82c7f" -->
## Mobily vyhrávají

- &gt; 50&nbsp;% přístupů na webové stránky
- &gt; 50&nbsp;% hledání na Google
- &gt; 50&nbsp;% času stráveného u internetu

>>>
Platí cca od 2014, rostoucí trend.
Mobily jsou dnes to hlavní, na co myslet při návrhu stránky.

---

# Responsive webdesign

zkráceně RWD

---

## Co je to RWD?

Cíl: optimální uživatelská zkušenost (obsah, navigace) na mnoha různých zařízeních. 

---

## Stránka se přizpůsobuje

Upravuje svoje rozložení a obsah podle prostředí, ve kterém je prohlížena.

>>>
Nejčastěji velikost dostupné zobrazovací plochy, ale lze i podle mnoha dalších kritérií (landscape, color/monochrome, print, tv, handheld, atd.).

---

## Mobile first přístup

Výchozí je rozložení pro malá mobilní zařízení.

Progresivně **vylepšujeme** pro tablety a počítače.

---

## Základní techniky RWD

- CSS Media Query
- flexibilní grid
- roztahovací obrázky

---

# Obrázky

Velký obrázek na malém zařízení = problém.

Vše se musí přizpůsobovat. 

>>>
Můžeme zmínit načítání různých obrázků pro různá rozlišení jako způsob, jak to dělat správně do budoucna.
My budeme dnes pracovat pouze s jedním obrázkem pro všechny breakpointy.

---

<!-- .slide: data-state="c-slide-task" -->

# Úkol 01

### Přidej obrázku styl, aby se zmenšoval společně s&nbsp;dostupným volným prostorem.

Otevři ukol-01.html ve složce Úkoly.

>>>
Řešení: 
img { width: 100%; }
Width nebo max-width, vysvětli rozdíl.

---

# CSS Media Query

Nejčastěji reagujeme na šířku okna prohlížeče / zařízení

(ale existuje mnoho dalších vlastností)

---

## Ukázka

```css
@media (min-width: 768px) {
	
	/* css styly */

}
```
<!-- .element: class="stretch" -->

Nejčastěji: `min-width` nebo `max-width`

<a href="slides/rwd-demo-mediaquery.html" target="blank">demo</a>

>>>
Nezapomeň - mobile first!
Nejprve v css uvedeme styly platné pro všechna zařízení, potom uvnitř media query přidáváme styly platné pro konrétní zařízení.

---

<!-- .slide: data-state="c-slide-task" -->

# Úkol 02

### Vytvoř dvousloupcový layout pro zařízení&nbsp;&gt;&nbsp;768px

Otevři ukol-02.html ve složce Úkoly.

>>>
Řešení:
@media (min-width: 768px) {
  .prvni, .druhy { width: 50%; float: left }
}
