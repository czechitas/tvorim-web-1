<!-- .slide: data-state="c-slide-inter" -->

# Přenos souboru

Co se stane, když napíšete do adresního řádku www.czechitas.cz?

>>>
* Prohlížeč dává požadavky a servery mu odpovídají, ale než se tak stane, tak proběhne toto.

---

## Zjištění IP adresy serveru: požadavek

<p class=" c-text-left"><q>prohlížeč:<br><b>„Haló, jaké je prosím číslo na www.czechitas.cz?“</b></q></p>

>>>
* Prohlížeč si zjistí „telefonní&#0160;číslo“ (IP&#0160;adresu) z&#0160;DNS&#0160;serveru

---

## Zjištění IP adresy serveru: odpověď

<p class=" c-text-right"><q>DNS server:<br><b>„74.125.0.45“</b></q></p>

---

## Získání stránky: požadavek

<p class=" c-text-left"><q>prohlížeč vytočí 74.125.0.45:<br><b>„Ahoj,<br> tady prohlížeč,<br> dáte mi prosím soubor „index.html“<br> na adrese www.czechitas.cz?<br>Jo a měl by být česky.“</b></q></p>

>>>
* Prohlížeč si zavolá o&#0160;soubor

---

## Získání stránky: odpověď

<p class=" c-text-right"><q>server:<br><b>„Ano, ten máme<br> je asi takhle ⟵⟶ velký,<br>je ještě čerstvý <br>a rovnou ho posílám.“</b></q></p>

>>>
* A server pošle soubor prohlížeči
* A někdy taky řekne: „Pardon, takový nemám 404!“ nebo „Mám, ale řekni heslo!“ nebo „Takovej tu někde byl, ale momentálně ho nemůžu najít.“
