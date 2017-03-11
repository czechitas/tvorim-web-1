# Tvořím web: HTML a CSS

Materiály ke kurzu [Czechitas](http://www.czechitas.cz) _Tvořím web: HTML a CSS_. Repozitář obsahuje:

- [prezentaci](index.html),
- [zadání úkolů](slides/ukoly.md),
- [jednotlivé výsledky samostatných cvičení](cviceni/).

## Práce s prezentací

Prezentace je napsaná s knihovnou [Reveal.js](https://github.com/hakimel/reveal.js). Pro zobrazení je zapotřebí HTTP server.

Užitečné klávesové zkratky:

- `s`: zobrazí poznámky přednášejícího v novém okně
- `f`: přepne zobrazení na celou obrazovku
- `?`: zobrazí nápovědu k dalším zkratkám

### Úprava prezentace

Obsah slidů se nachází v adresáři [slides/](slides/) ve formátu Markdown s dodatečnými značkami:

- `----`: odděluje jednotlivé slidy
- `>>>`: uvazuje poznámky přednášejícího
- `<!-- .slide: data-state="tridaSlidu" -->`: na začátku slidu nastaví třídu slidu

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

## Úkoly

Zadání úkolů je v souboru [slides/ukoly.md](slides/ukoly.md) a na konci prezentace. Zadávání úkolů je připravené pro aplikaci [Lístečky](https://github.com/benabraham/listecky).

# Autoři

- Daniel Srb [@benabraham](https://github.com/benabraham)
- Tomáš Kout [@Kout](https://github.com/Kout)
- Jan Vlnas [@jnv](https://github.com/jnv)
