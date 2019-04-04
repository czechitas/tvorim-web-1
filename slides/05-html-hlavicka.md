<!-- .slide: data-state="c-slide-inter" -->

# HTML hlavička

---

# Hlavička

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
<!-- .element: class="c-text-md stretch" contenteditable="true" -->

>>>
* připomeneme si strukturu HTML dokumentu:
	* `<html>` obaluje vše
	* uvnitř dva hlavní bloky: `<head>` a `<body>`
	* doteď jsme pracovali v `<body>`
* `<head>` se „nezobrazuje“, zato obsahuje údaje, které ovlivňují vzhled a chování stránky

---

# Titulek

```html
<title>
	Název stránky
</title>
```
<!-- .element: class="c-text-xl stretch" contenteditable="true" -->

>>>
* Mezi tagy `<head></head>`
* Zobrazuje se na záložce v prohlížeči ‒ jediný z `<head>` je přímo vidět
