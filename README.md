Locale.AutoUse
===============

Locale.AutoUse searches for a `lang` attribute, which is usually at the html tag of a document.
If a language is found and defined by Locale it will set this as default language of the page.

This plugin is an extension for Locale in MooTools More 1.3.

How To Use
-----------

Just include the Locale.AutoUse.js file in your page or build.
It will automatically search for the correct language on DOMReady.

### Manual Use

It is possible to use Locale.AutoUse manually.

	Locale.AutoUse(selector, attributeName);

#### Arguments

- selector - (*string*, defaults `*[lang]`) Any CSS selector Slick supports
- attributeName - (*string, defaults `lang`) The attribute name which contains the Language code.

#### Retur

* Locale Instance


### Notes:

- Before the document can be search for the correct language, the DOM has to be ready, so Locale.AutoUse uses DOMReady. Be sure to use `Locale.get` after the DOM is ready.

