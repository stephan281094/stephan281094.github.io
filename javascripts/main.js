$(document).ready(function() {
	var contactLink = $('#hero a');
	var contact 	= $('#contact');

	contactLink.click(function() {
		contact.addClass('show');
	});
});