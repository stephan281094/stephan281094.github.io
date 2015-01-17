$(document).ready(function() {
	var screenHeight = $(window).height();

	$(window).scroll(function() {
		var scrollTop = $(window).scrollTop();
		var selector  = $('#hero .wrap');
		var opacity   = (screenHeight - scrollTop) * (1 / screenHeight);

		selector.css({
			"-webkit-transform": "translate(0, " + scrollTop / 2 + "px)",
			"-moz-transform": "translate(0, " + scrollTop / 2 + "px)",
			"transform": "translate(0, " + scrollTop / 2 + "px)",
			"opacity": opacity
		});

		console.log(opacity);
	});
});