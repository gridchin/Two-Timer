jQuery(document).ready(function(){
	
	// Dial
	for (i=0;i<61;i++){
		var d = i + 1;
		var dial = d * 6;
		$('.dial').append('<li class="d' + d + '"></li>');
		$('.dial .d' + d).css("transform", "rotate(" + dial + "deg)");		
	}
	
	
	
	// Share
	$('.share_btn').click(function () {
	    $(this).fadeOut(100);
	    $('footer article').fadeIn(300);
	    return false;
	});

	$('body').click(function(e) {   
		if( !$(e.target).is('footer header, footer header a, .fb-like, .twitter-share-button, .github') ){
		    $('footer article').fadeOut(100);
	    	$('.share_btn').fadeIn(300);
		}
	});
		
})