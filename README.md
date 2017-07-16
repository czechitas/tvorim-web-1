# Tvořím web: HTML a CSS

Materiály ke kurzu [Czechitas](http://www.czechitas.cz) _Tvořím web: HTML a CSS_. Repozitář obsahuje:

- [slajdy](index.html),
- [zadání úkolů](slides/tasks.md),
- [jednotlivé výsledky samostatných cvičení](cviceni/).



## Slajdy


### Prezentování

Slajdy jsou vytvořené pro knihovnu [Reveal.js](https://github.com/hakimel/reveal.js). Pro zobrazení je zapotřebí spustit HTTP server. Nejsnazší je použít ten, který se využívá při úpravách.

Užitečné klávesové zkratky:

- `s`: zobrazí poznámky přednášejícího v novém okně
- `f`: přepne zobrazení na celou obrazovku
- `m`: zobrazí menu s přehledem všech slajdů
- `?`: zobrazí nápovědu k dalším zkratkám


### Úpravy

Obsah slajdů se nachází v adresáři [slides/](slides/) ve formátu Markdown s dodatečnými značkami:

- `----`: odděluje jednotlivé slajdy
- `>>>`: uvazuje poznámky přednášejícího
- `<!-- .slide: data-state="trida-slajdu" -->`: na začátku slajdu nastaví třídu slajdu

Další speciální vlastnosti jsou popsané v dokumentaci pro [Reveal.js Markdown](https://github.com/hakimel/reveal.js#markdown).

Pro práci na prezentaci je vhodné mít nainstalovaný [Node.js](https://nodejs.org/) a volitelně [Yarn](https://yarnpkg.com).

1. Naklonujte repozitář
2. Nainstalujte závislosti příkazem `yarn` ve složce repozitáře
3. Spusťte vývojový server přes `yarn start`


### Poznámky a ovládání na samostatném zařízení

Viz [Server Side Speaker Notes](https://github.com/hakimel/reveal.js#server-side-speaker-notes).

Ve složce prezentace spusťte

```
node plugin/notes-server
```

Server se spustí na `localhost:1947` a je přístupný na externí adrese. Aktuální verze však [nepodporuje mobilní zařízení](https://github.com/hakimel/reveal.js/issues/964).



## Zadání úkolů

Zadání úkolů je v souboru [slides/tasks.md](slides/tasks.md) a na konci prezentace. Zadávání úkolů je připravené pro aplikaci [Lístečky](https://github.com/benabraham/listecky) s jejímž využitím kurz počítá.



## Výsledky samostatných cvičení

Obsahují vždy kompletní data pro daný krok. Smyslem je moci ukázat jak to má po dokončení úkolu vypadat a také umožnit v případě, že někdo úkol nestihne, aby to mohl využít jako záchytný krok. 

Součást projektu je to kvůli spolupráci. 


### Úpravy

Pokud se nejedná o úpravu v posledním kroku, je potřeba vždy změnit to samé znovu ve všech následujících krocích. Všechny úpravy je potřeba následně nasadit na Thimble.


### Jak nasadit změny na Thimble

1. Nejdřív si zazipuj **obsah** každé změněné složky **zvlášť**.
2. Přihlaš se na Thimble (pod účtem `czechitas`)
3. Otevři příslušný projekt (podle čísla, názvy se mohou lehce lišit) do nového tabu.
4. Drag&drop zip do otevřeného projektu.
5. Klikni na _Publish_ vpravo nahoře.
6. Zavři tab.
7. Opakuj krok 3. až 6. dokud nenahraješ všechny změněné stavy.
8. Zkontroluj z odkazů v `tasks.md`, že vše je jak má být.

_Tip: Neotvírat více než jeden projekt najednou (do tabů např.) Thimble to špatně rozdýchává._



# Autoři

- Daniel Srb [@benabraham](https://github.com/benabraham)
- Tomáš Kout [@Kout](https://github.com/Kout)
- Jan Vlnas [@jnv](https://github.com/jnv)
