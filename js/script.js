jQuery(document).ready(function(){
	
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