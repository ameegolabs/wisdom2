(function($){
	$(function(){
		
		$('.sidenav').sidenav();
		$(".dropdown-trigger").dropdown({ hover: true});
		$('.collapsible').collapsible();
		$('.parallax').parallax();
		$('.slider').slider();
		$('#computerSlider').slider({height:210});
		$('#mobileSlider').slider({height:300});
		$('#computerSlider1').slider({height:280});
		$('#mobileSlider2').slider({height:470});
		
		$('#computerSlider3').slider({height:280});
		$('#mobileSlider3').slider({height:470});
		
	}); // end of document ready
})(jQuery); // end of jQuery name space
