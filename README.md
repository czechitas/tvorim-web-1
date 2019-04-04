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

Pro práci na prezentaci je vhodné mít nainstalovaný [Node.js](https://nodejs.org/) (včetně `npm`).

1. Naklonujte repozitář
2. Nainstalujte závislosti příkazem `npm i` ve složce repozitáře
3. Spusťte vývojový server přes `npm start`

### Export do PDF

Do adresy stránky přidej `?print-pdf`, tj. například: `http://localhost:7410/?print-pdf` nebo i <https://czechitas.github.io/tvorim-web-1/?print-pdf>. Zobrazí se verze vhodná pro tisk a uložení do PDF.

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


#### Jak nasadit změny na Thimble

1. Přihlaš se na Thimble (pod účtem `czechitas`)
2. Otevři příslušný projekt (podle čísla, názvy se mohou lehce lišit) do nového tabu.
3. Drag&drop soubory do otevřeného projektu.
4. Klikni na _Publish_ vpravo nahoře.
5. Zavři tab.
6. Opakuj krok 2. až 5. dokud nenahraješ všechny změněné stavy.
7. Zkontroluj z odkazů v `tasks.md`, že vše je jak má být.

_Tip: Neotvírat více než jeden projekt najednou (do tabů např.) Thimble to špatně rozdýchává._


#### Automatické obnovení

Není to nutné, ale pokud si chceš ušetřit práci s obnovováním stránky při změně CSS nebo HTML, spusť v `/cviceni/` příkaz `npm install` a pomocí `npm run watch` se spustí Browsersync. 

# TODO před začátkem

- Briefing se zástupkyní czechitas:
  - pravidla a průběh jsou ve slidech a říká to lektor hned po ní (je to i ve speaker notes)
  - na kdy načasovat oběd
- Otevři si v prohlížeči:
  - slajdy
  - admin pro lístečky
  - reklamu na sponzora (ideálně vložit logo do úvodního slajdu, viz jeho speaker notes)
- Kdyby Lístečky nefungovaly, tak mít nachystané papírové

# Časový rozvrh

Počítá se s zhruba hodinovými bloky a desetiminutovými přestávkami. 

Na oběd je 40 minut, vzhledem k tomu, že je obvykle na místě to stačí.

Pokud se nestíhá ke konci, je lepší neudělat poslední úkol, než zrychlovat nebo rušit přestávku, které jsou opravdu potřeba.

Samozřejmě není potřeba dodržovat vše na minutu jednotlivé části trvají pokaždé trochu jinak. 

Smyslem přehledu níže je mít možnost si zkontrolovat, zda vše zhruba probíhá podle plánu.


|   čas | obsah                                                                    |
|------:|--------------------------------------------------------------------------|
| 10:00 | úvod organizační (Czechitas)                                             |
| 10:05 | o průběhu                                                                |
| 10:13 | Co čekat od workshopu + Teorie internetu a webu                          |
| 10:25 | Thimble: úvod + Založíme si účet na Thimble                              |
| 10:35 | Thimble: popis rozhraní + úkol 1                                         |
| 10:45 | HTML + úkol 2                                                            |
| _11:00_ | _přestávka_                                                            |
| 11:10 | struktura HTML souboru a vnořování                                       |
| 11:16 | nadpisy, odstavce, odkazy + úkol 3                                       |
| 11:30 | Další funkce Thimble                                                     |
| 11:35 | Obrázky                                                                  |
| 11:39 | licence + úkol 4                                                         |
| 11:53 | úkol 5                                                                   |
| _12:10_ | _oběd vč focení_                                                       |
| 12:50 | CSS (z čeho se skládá stránka, připojení a anatomie CSS, barvy) + úkol 7 |
| 13:13 | Vlastnosti textu, dědičnost + úkol 8                                     |
| 13:31 | Velikost textu (jednotky) + úkol 9                                       |
| _13:45_ | _přestávka_                                                            |
| 13:55 | Pozadí, div + úkol 10                                                    |
| 14:19 | Třídy + úkol 11                                                          |
| _14:40_ | _přestávka_                                                            |
| 14:50 | Box-model                                                                |
| 14:57 | výška, šířka + úkol 12                                                   |
| 15:16 | Ohraničení + úkol 13                                                     |
| 15:30 | Padding + úkol 14                                                        |
| 15:35 | Margin + úkol 15                                                         |
| _15:45_ | _přestávka_                                                            |
| 15:55 | Shrnutí box-modelu + úkol 16                                             |
| 16:11 | úkol 17                                                                  |
| 16:29 | Pokročilé selektory + úkol 18                                            |
| 16:47 | Pseudotřídy + úkol 19                                                    |
| _17:05_ | _přestávka_                                                            |
| 17:15 | Odrážkový seznam + úkol 20                                               |
| 17:30 | Blokové, řádkové, řádkově-blokové elementy + úkol 21                     |
| 17:45 | úkol 22                                                                  |
| 18:00 | úkol 23 (lze vynechat pokud se nestíhá)                                  |
| 18:13 | Publikace +  Publikujeme hotový web na internet                          |
| 18:19 | Co dál, závěr                                                            |
| _18:25_ | _konec_                                                                |

# Autoři

- Daniel Srb [@benabraham](https://github.com/benabraham)
- Tomáš Kout [@Kout](https://github.com/Kout)
- Jan Vlnas [@jnv](https://github.com/jnv)
- Jan Pobořil [@iBobik](https://github.com/iBobik)
