(function() {
    var shown = false;

    var options = {
        element:   '[data-modal]',
        classOpen: 'modal-open'
    };

    var api = {

        config: function(opts) {
			if (!opts) return options;

			for (var key in opts) {
				options[key] = opts[key];
			}

			return this;
        },

        open: function(modalName, callback) {
            if (shown) return;

            var modal = document.querySelector('.modal-' + modalName);
            modal.classList.add(options.classOpen);
            shown = true;

            return this;
        },

        close: function() {
            if (!shown) return;

            var modals = document.querySelectorAll('.modal'),
            	i = modals.length;

            while (i--) {
                modals[i].classList.remove(options.classOpen);
            }

            shown = false;

            return this;
        },

        listen: function listen(element) {
            if (!element) element = options.element;

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
    };

    document.addEventListener('keyup', function(event) {
        if (event.keyCode === 27) api.close();
    });

    this.Modal = api;
})();

window.onload = function() {
    Modal.listen();
}
