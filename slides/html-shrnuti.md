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