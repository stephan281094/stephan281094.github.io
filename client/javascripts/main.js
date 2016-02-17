var app = {
  fadeElementsIn: function () {
    var els = ['h1', 'span', '.contact'],
        i   = 0

    ;(function loop () {
      var element = document.querySelector(els[i])
      element.classList.add('animated')
      element.classList.add('fadeInUp')

      if (++i < els.length) {
        setTimeout(loop, 350)
      }
    })()
  },

  contact: function () {
    document.location.href = 'mailto:stephan281094@gmail.com'
  }
}

window.onload = function () {
  window.fitText(document.querySelector('h1'))
  window.fitText(document.querySelector('span'), 2)
  document.addEventListener('touchstart', function () {}, true)
  
  app.fadeElementsIn()
}
