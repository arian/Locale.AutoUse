/*
---
name: Locale.AutoUse
description: Automatically detects the Language on the page
authors: Arian Stolwijk
requires: [Core/DOMReady, Core/Element, More/Locale]
provides: Locale.AutoUse
...
*/

Locale.AutoUse = function(selector, attr, ua){

	var languages = Locale.list(),
		lang;

	if (selector == navigator) ua = true;

	if (!ua){
		if (!selector) selector = '*[lang]';
		if (!attr) attr = 'lang';
	
		var element = document.getElement(selector);
		if (!element) return Locale;
	
		lang = element.get(attr);
	} else {
		lang = navigator.language || navigator.userLanguage
	}


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
