<!-- .slide: data-state="c-slide-inter" -->

# HTML: shrnutí

---

# HTML značky

* existuje několik desítek HTML značek/tagů
* většinou jsou párové (obalují text, nebo jiné značky) <br> 

```html
<p><strong>tučný</strong> text</p>
```

* nepárových je menšina, např. `img`

---

# HTML atributy

* někdy mohou mít atributy, v některých případech povinné (vyplývá z podstaty věci: adresa odkazu, cesta k obrázku)
* píšou se jen do otevírací značky
* oddělují se mezerou

```html
<a href="https://seznam.cz">Seznam</a>
<img src="/obrazky/kytky/kopretina.jpg" alt="kytice kopretin">
```

>>>
* okolo = se nepíšou mezery
* název atributu je v rámci jedné značky unikátní (další s týmž názvem se ignoruje)
* hodnota atributu se píše do „uvozovek“


---

# Sémantika 

* ~ význam značek
* všechny značky (kromě 2) nesou nějaký význam (nadpis, odstavec, odkaz)

>>>
* význam je strojově čitelný, tj. rozumí mu prohlížeč či roboty
* a jak rozumí vašemu kódu prolížeč si ukážeme hned teď 

---

# DevTools

---

**Nástroje pro vývojáře** (Developer tools) má každý moderní prohlížeč.

* zobrazí kód stránky, tak jak ho chápe prohlížeč
* umožňuje dělat dílčí změny v aktuálně načtené stránce, ty ale vydrží jen dokud na ní zůstáváš

>>>
* **ukázat** základní rozvržení okna (DOM, CSS, webová stránka)
* ukázat panel s CSS vlastnostmi, čímž přejdeme k výkladu o CSS

---

DevTools spustíte na zvolené stránce:

* klávesovou zkratkou <kbd>F12</kbd>, popř. <kbd>Ctrl+Shift+I</kbd> (na Macu <kbd>Cmd+Shift+I</kbd>)

nebo

* pravým myšítkem na prvek, který vás zajímá a vybrat _Prozkoumat/Inspect element_

>>>
* toto už není váš kód, nýbrž jeho interpretace prohlížečem
* při běžné práci na webu je má kódér otevřeny neustále