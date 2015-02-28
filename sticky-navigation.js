// JavaScript Document
// Author Simon Kelehan

$(document).ready(function() {
				
	//determine how far the menu is from the top
	var scrollPos = $('#menu-start').offset().top;

	//wrap a new div around the menu to prevent the content from jumping when the menu becomes fixed
	$("#menu-wrapper").wrap('<div id="mholder" class="nav-placeholder"></div>');
	//give it the same height as the menu
	$(".nav-placeholder").height($("#menu-wrapper").outerHeight());
				
	//when the user scrolls up or down the page add/remove the fixed class 
	$(window).scroll(function(){
		var navPosition = $(window).scrollTop();
		if (navPosition >= scrollPos) {
			$('#menu-wrapper').addClass('fixedmenu');	
		} else {
			$('#menu-wrapper').removeClass('fixedmenu');	
		}
						
	});
});