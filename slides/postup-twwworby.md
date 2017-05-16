<!-- .slide: data-state="c-slide-inter" -->

# Postup twwworby

>>>
* existuje více postupů
* nezáleží na postupu, ale výsledku => funkční web
* postup sochařský, nejprve opracováváme na hrubo a postupně zjemňujeme
* narozdíl od sochařiny (i jiných oborů), máme výhody:
 * refactor (vs medicína, stavebnictví, vaření)
 * rozdělení na komponenty (vyjmeme součástku, vyladíme ji a vrátíme zpět)
* pomineme fázi zakázky

---

# Průzkum a definice cílů

My přeskočíme, cíl máme jasný: dokončit projekt :)


Ve skutečnosti obnáší

<ul class="c-text-sm">
    <li>marketingový průzkum</li>
    <li>analýzu stávajícího webu (při redesignu)</li>
    <li>uživatelské scénáře</li>
    <li>tvorbu person (vzoroví uživatelé)</li>
</ul>

---

# Obsah je král

Přípravu obsahu zajišťuje copywriter (na základě podkladů od klienta) a grafik (obrázky).

- texty
- obrázky
- videa, grafy aj.

<p class="fragment">Cílem je dostat <strong class="fragment highlight-red">skutečný obsah</strong> co nejdříve do prohlížeče.</p>

>>>
* ideální případ
* běžnou praxí jsou hotové texty od klienta, obrázky upravíme my, kódéři
* skutečný: nepracovat s výplňovými texty:
 * délka textů rozhoduje o rozvržení stránky
 * chybí diakritika
* platí i pro obrázky
 * kvalita, velikosti, poměr stran, barevnost…

---

# Struktura dokumentu

web = text

<ul class="c-text-sm">
    <li class="fragment">strukturujeme text pomocí HTML</li>
    <li class="fragment">základní styly:
        <ul>
            <li class="fragment">písmo</li>
            <li class="fragment">barvy</li>
        </ul>
    </li>
</ul>

>>>
* platí i v 2017

---

# Výroba jednotlivých komponent

<p class="c-text-sm">Komponentou se rozumí tlačítko, formulář, navigační liště, boční sloupec s novinkami apod.</p>

<ul class="c-text-sm">
    <li class="fragment">skicy ‒ tužka + papír</li>
    <li class="fragment">prototypy (v prohlížeči) ‒ Bootstrap, CodePen</li>
    <li class="fragment">prostor pro experimenty (záleží na rozpočtu)</li>
</ul>

>>>

---

# Rozvržení neboli layout

Mobile first!

>>>
* nejprve pro jednosloupové rozvržení na nejužších obrazovkách
* nedostatek místa nás donutí přehodnotit přítomnost prvků na stránce
* prvky si musí svou exitenci vybojovat
* nezpomínat na druhý extrém: obří monitory

---

# Testování

Již v předchozích krocích testujeme v různých prohlížečích, protože **různé prohlížeče mohou různě vykreslovat týž kód**.

<ul class="c-text-sm">
    <li class="fragment">desktopové
        <ul>
            <li class="fragment">Google Chrome</li>
            <li class="fragment">Firefox</li>
            <li class="fragment">IE 11/Edge (Windows)</li>
            <li class="fragment">Safari (Mac)</li>
        </ul>
    </li>
    <li class="fragment">mobilní
        <ul>
            <li class="fragment">iPhone</li>
            <li class="fragment">Android</li>
            <li class="fragment">Windows Phone</li>
        </ul>
    </li>
</ul>

>>>
* Jak získat prohlížeče: nainstalovat, co lze
* Problém s prohlížeči vázanými na platformu: Safari/IE+Edge
 * virtualizace
 * Browserstack ‒ profi nastroj (poměrně drahý)
* mobily a tablety
 * nevyhazovat staré mobily
 * partyzánské testování v prodejnách elektronikou

---

# DevTools

<div class="c-text-sm">
* = **Nástroje pro vývojáře** (developer tools) umí každý slušný prohlížeč
* emulace mobilních zařízení
* pohodlná změna šířky okna
* zobrazí kód stránky, styly a další užitečné info
* změny které uděláte vydrží jen do obnovení stránky
* buď <kbd>F12</kbd>, popř. <kbd>Ctrl+Shift+I</kbd> nebo pravým myšítkem na prvek, který vás zajímá a vybrat _Prozkoumat/Inspect element_
</div>

>>>
* o práci s DevTools Jirka Gracík
