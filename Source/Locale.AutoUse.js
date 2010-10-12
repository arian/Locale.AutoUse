/*
---
name: Locale.AutoUse
description: Automatically detects the Language on the page
requires: [Core/DOMReady, Core/Element, More/Locale]
provides: Locale.AutoUse
...
*/

Locale.AutoUse = function(selector, attr){
	if (!selector) selector = '*[lang]';
	if (!attr) attr = 'lang';

	var element = document.getElement(selector);
	if (!element) return Locale;

	var lang = element.get(attr),
		languages = Locale.list();

	if (!languages.contains(lang)){
		for (var i = 0, l = languages.length; i < l; i++){
			var index = languages[i].indexOf('-'),
				firstPart = languages[i].substr(0, index);

			if (firstPart == lang){
				lang = languages[i];
				break;
			}
		}
	}

	return Locale.use(lang);

};

window.addEvent('domready', Locale.AutoUse);
