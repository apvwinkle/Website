$('span.button').click(function() {
	$('ul.nav').slideToggle();
})

$(window).resize(function() {
	if ($(window).width() > 1000) {
		$('ul.nav').removeAttr('style');
	}
})