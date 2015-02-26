$(document).ready(function() {

	$(window).resize(function(){
		var vHeight = $(window).height();
		var topPadding = (vHeight)/(2);
		var bottomPadding = (topPadding)/(1.54);
		
		$('header > .container').css({"padding-top":topPadding, "padding-bottom":bottomPadding});
		
		var scrollOffset = 0;
		
		if($(window).width() < 768){
			scrollOffset = 70;
		}else{
			scrollOffset = 90;
		}
		
		$('.navbar').singlePageNav({
			offset: scrollOffset
		});
		
	});
	
	$(window).resize();
	
	// Close Menu on Click
	$('.navbar li a').click(function(e) {
		$('.navbar-toggle:visible').click();
    });
	
	// Highlight Links
	$('body').scrollspy({ 
		target: '.navbar',
		offset: 200
	});
});