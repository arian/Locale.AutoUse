Locale.AutoUse
===============

Locale.AutoUse searches for a `lang` attribute, which is usually at the html tag of a document.
If a language is found and defined by Locale it will set this as default language of the page.
You can also choose to get the language of the visitor.

This plugin is an extension for Locale in MooTools More 1.3.

How To Use
-----------

Include the Locale.AutoUse.js file in your page or build.

### Function: Locale.AutoUse

It is possible to use Locale.AutoUse manually.

	Locale.AutoUse(selector, attributeName, ua);

#### Arguments

- selector - (*string*, defaults `*[lang]`) Any CSS selector Slick supports. If you set this to `navigator` it will use the visitors language.
- attributeName - (*string*, defaults `lang`) The attribute name which contains the Language code.
- ua - (*boolean*) Set this argument to `true` if you want to use the visitors language instead of the `lang` attribute. Passing the `navigator` object to the first argument will do the same.

#### Return

* Locale Instance

#### Examples

	Locale.AutoUse();

	// Search for another tag instead of the `html` tag
	Locale.AutoUse('div#languageDefinition');

	// Don't use the lang attribute, but the `data-lang` attribute
	Locale.AutoUse('div[data-lang]', 'data-lang');

	// Use the language defined by the visitors browser
	Locale.AutoUse(navigator);

	// Another way
	Locale.AutoUse(null, null, true);


### Notes:

- As of version 0.2 you have to run the `Locale.AutoUse` function manually.

