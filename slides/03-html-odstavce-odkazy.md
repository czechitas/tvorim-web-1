<!-- .slide: data-state="c-slide-inter" -->

# Struktura textu

---

## Nadpisy

```html
<h1>Web Kryštůfka Robina</h1>

<h2>Kontakt</h2>

<h3>Telefonní spojení</h3>
```

>>>
* dodržujte pořadí nadpisů: nenechte se svést tím, jak vypadají (po `h1` vždy nejprve `h2`, pak teprve `h3`)
* 6 úrovní nadpisů (`<h1>`…`<h6>`)
* obvykle bývá na jednotlivé stránce jen 1 nadpis první úrovně

---

## Odstavec

```html
<p>
    A Kryštůfek Robin a Králíček
    a všichni Králíčkovi příbuzní
    a známí se svalili… A navrch
    na tu hromadu se svalil
    vysvobozený Pú!
</p>
```
<!-- .element: class="c-text-md stretch" contenteditable="true" -->

>>>
* Jednou z nejčastěji používaných značek je vyznačování odstavce.
* Z posloupnost mezer a zalomení řádku se stane 1 mezera => text se slije, pokud ho nestrukturujeme pomocí tagů.
* Přesto si dejte na formátování kódu (odsazování, odřádkování) záležet, jinak se v tom nejde vyznat:
* Jeden element na řádek.
* Zanořujeme-li, odsadíme začátek řádku tabulátorem.
* `<br>` v adrese, abychom vynutili zalomení

---

<!-- .slide: data-state="c-slide-task" -->

# Vytvoříme základní strukturu stránky

>>>
* Všimněte si zvýrazňování bloků v živém náhledu ==> správné zanořování a uzavírání!

---

## Odrážkový seznam

```html
<ul>
    <li>odrážkový</li>
    <li>seznam</li>
</ul>
```

>>>
* `ul` = unordered list
* `li` = list item
* Pamatujeme na správné zanořování a odsazování vnořených prvků.
* `li` vždy musí být přímo zanořené v `ul` (nebo `ol`)
* Uvnitř `li` mohou být další prvky (nadpis, odstavec, dokonce další odrážkový seznam). My si vystačíme s odkazy.
* Bonusový úkol: nejprve dej hotovo a pak se pusť do bonusu. Není nutné bonusy vypracovat, Adélin web se bez nich obejde.

---

<!-- .slide: data-state="c-slide-task" -->

# Ceník jako odrážkový seznam

---

## Odkazy

```html
<a>
    nejlepší přítel
</a>
```
<!-- .element: class="c-text-md fragment current-visible fade-out" contenteditable="true" -->

```html
<a href="https://google.com">
    nejlepší přítel
</a>
```
<!-- .element: class="c-text-nd fragment current-visible" contenteditable="true" -->

>>>
* naučíme se jak udělat odkaz
* atribut je `href`, jeho hodnotou je odkaz
* hodnota do "uvozovek"
* Pomocí atributy dodáváme prohlížeči nějaká extra data, která nevyplývají ze samotného tagu. (Např. `h1` všeříkající, `a` je málo, musíme říct **kam** odkazovat.)
* atributy se píšou do otevíracího tagu nebo prostě do tagu

---

```html
<a href="mailto:adela@czchts.cz">
    napište mi e-mail
</a>
```

>>>
* před dvojtečkou je tzv. protokol (pro přenos stránek `http(s)`, pro e-mail `mailto`)
* nespoléhejte na to, že to bude fungovat (i když na mobilech a tabletech téměř stoprocentně): v počítači uživatele musí být nějaký poštovní program

---

<!-- .slide: data-state="c-slide-task" -->

# Přidáme odkazy

---

## Další funkce Repl.it

* HTML: Zvýraznění párové značky/tagu k té, kde je právě kurzor.
* Změní barvu textu, narazí-li na chybu.
