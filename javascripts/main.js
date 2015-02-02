$(document).ready(function() {
	var body = $('body');
	var modalOpen = 'modal-open';

	$('[data-toggle]').click(function() {
		$('[data-modal="' + $(this).attr('data-toggle') + '"]').toggleClass('show');
		body.toggleClass(modalOpen);
	});

	$(this).keyup(function(event){
		if (event.keyCode === 27 && body.hasClass(modalOpen)) {
			$('[data-modal]').removeClass('show');
			body.removeClass(modalOpen);
		}
	});
});