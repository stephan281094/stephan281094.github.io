(function() {
	var shown = false;
	var defaultOptions = {
		element: '[data-modal]'
	}

	var api = {

		open: function(modalName, callback) {
			if (shown) return;

			var modal = document.querySelector('.modal-' + modalName);
			modal.classList.add('modal-open');
			shown = true;
		},

		close: function() {
			if (!shown) return;

			var modals = document.querySelectorAll('.modal');
			for (var i = modals.length - 1; i >= 0; i--) {
				modals[i].classList.remove('modal-open');
			};

			shown = false;
		},

		listen: function listen(element) {
			if (!element) element = defaultOptions.element

			if (typeof element === 'string') {
                var elements = document.querySelectorAll(element),
                    i = elements.length;

                while (i--) {
                    listen(elements[i]);
                }

                return;
            }

			element.addEventListener('click', function(event) {
				event.stopPropagation();

				if (shown) {
					api.close();
				} else {
					api.open(element.dataset.modal);
				}
			})

			return this;
		}
	}

	document.addEventListener('keyup', function(event) {
		if (event.keyCode === 27) api.close();
	});

	this.Modal = api;
})();

window.onload = function() {
	Modal.listen();
}
