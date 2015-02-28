# sticky-navigation
A menu that sticks to the top of the page once you scroll down past certain point

##How to use it

This code uses the JQuery library, if you don't already have in your HTML you should include it.

###prepare your HTML
First have a look at the [DEMO](http://simonxlk.github.io/sticky-navigation.html) to get an idea of what am talking about!

In my example, the menu is an unordered list inside a div with an ID of; `#menu`, this div lies inside another div with an ID of `#menu-wrapper`.
I also have a place holder called `<span id="menu-start">` this is used to measure how far from the top of the window the menu sits.


Below a variable is declared and given a value which is; the distance between the top of the window and the menu place holder. 
A place holder is used because the menu will be taken out of the page flow, but we need to remember where it should be.
```
$(document).ready(function() {
				
	//determine how far the menu is from the top
	var scrollPos = $('#menu-start').offset().top;
```
 

Next wrap a new div around the menu to prevent the content from jumping when the menu is taken out of the flow.
Give it the same height as the menu.
``` 
	$("#menu-wrapper").wrap('<div id="mholder" class="nav-placeholder"></div>');
	$(".nav-placeholder").height($("#menu-wrapper").outerHeight());
```

	

When the user scrolls down past `#menu-start` the menu will be taken out of the page flow by adding the class `fixedmenu` to it. 
`fixedmenu` has a CSS property `position:fixed` which is what takes the menu out of the page flow and keeps it at the top of the screen:  
```
	$(window).scroll(function(){
		var navPosition = $(window).scrollTop();
		if (navPosition >= scrollPos) {
			$('#menu-wrapper').addClass('fixedmenu');	
```
	
When the user scrolls back up past `#menu-start`, the `fixedmenu` class is removed and the menu re-takes its place in the page flow. 
```
		} else {
			$('#menu-wrapper').removeClass('fixedmenu');	
		}
						
	});
}); 
```

##Once again here is the [DEMO page](http://simonxlk.github.io/sticky-navigation.html)

   


