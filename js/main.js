$(document).ready(function() {
    $(".navigation-item a").click(function(event) {
		//console.log(event.target.href);

    	$('html, body').animate({
        	scrollTop: $(event.target.id).offset().top
    	}, 1000);
	});
});