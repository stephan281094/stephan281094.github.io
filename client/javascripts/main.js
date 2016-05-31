var app = {
  fadeElementsIn: function () {
    var els = ['.my-name', '.my-description', '.contact'],
        i   = 0

    ;(function loop () {
      var element = document.querySelector(els[i])
      element.classList.add('animated')
      element.classList.add('fadeInUp')

      if (++i < els.length) {
        setTimeout(loop, 350)
      }
    })()
  }
}

window.onload = function () {
  app.fadeElementsIn()
}
