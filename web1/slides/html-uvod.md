<!-- .slide: data-state="c-slide-inter" -->

# HTML

>>>
* První, co si prohlížeč stahuje, je HTML soubor: soubor obsahující informace o stránce ve formátu HTML.
* Je to textový soubor, takže ho můžete upravovat v jakémkoli textovém editoru jako je Poznámkový blok (Notepad) apod.

---

# Značkovací jazyk popisující webové stránky

>>>
* Značkovací, protože význam a strukturu dokumentu popisuje pomocí značek, anglicky tagů.

---

# Odstavec

```html
<p>
	A Kryštůfek Robin a Králíček
	a všichni Králíčkovi příbuzní
	a známí se svalili… <br>A navrch
	na tu hromadu se svalil
	vysvobozený Pú!
</p>
```
<!-- .element: class="c-text-large stretch" -->

>>>
* Jednou z nejčastěji používaných značek je vyznačování odstavce.
* Je to párový tag, má skládá se ze dvou značek, otevírací a ukončovací.
* Ty se liší pouze lomítkem, které má ukončovací značka navíc.
* Text, který jsme takto označili je mezi nimi.
* Z posloupnost mezer a zalomení řádku se stane jedna mezera.
* Přesto si dejte na formátování kódu záležet, jinak se v tom nejde vyznat.
* Další tag, který tam vidíte je nepárový a to `<br>`, který způsobí zalomení řádku.
* Jména tagů jsou většinou zkratky anglických slov, tady „paragraph“ a „break“.

---

## Základní struktura HTML


```html
<!DOCTYPE HTML>
<html>
    <head>
        <!-- vlastnosti stránky -->
    </head>
    <body>
        <!-- samotný obsah stránky -->
    </body>
</html>
```
<!-- .element: class="c-text-large stretch" -->

>>>
* Každý HTML dokument má mít tuto strukturu.
* Úplně první je tzv. doctype. Není potřeba se jím nyní zabývat, jen ho tam vždy mějte.
* Všechno ostatní je obaleno tagem `<html>`.
* V hlavičce (`<head>`) jsou definovány vlastnosti pro celou stránku. Většinou „nejsou vidět“.
* V těle stránky (`<body>`) je vlastní text stránky, obrázky atd. Většinou „je vidět“.

---

<!-- .slide: data-background="img/keyboard-cs-html.svg" -->


>>>
* Protože je pro psaní HTML potřeba některé méně časté znaky, máte na stole pomůcku pro nalezení znaků.
* Kouzelná je klávesa AltGr s kterou napíšete většinu znaků.
* Někdo může mít trochu jiné rozložení.

---

<!-- .slide: data-state="c-slide-task" -->

# Úkol

## Otevřete si v Chrome editor Thimble na adrese <a href="https://thimbleprojects.org/czechitas/60847" target="_blank">http://bit.ly/tvorim-web</a>


>>>
* Thimble je online editor, tedy funguje v prohlížeči a není třeba si tedy nic instalovat.
* Vytvořte si účet.
* Umí jen pár základních funkcí, ale to nám dneska bude vyhovovat.
* Co je na něm fajn, že rovnou ukazuje, jak stránka vypadá.
* Smažte instruktážní text a zkuste si sami přidat 2 odstavce textu.
* Kdo nepíše rychle a neví o čem, může si najít povídání o Medvídkovi Pú na Wikipedii.


* title: **cvičení**: přidat
* meta: kódování, description (význam pro vyhledávače)
* připojení dalších souborů
