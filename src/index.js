require('./scss/index.scss')
var els = ['.my-name', '.my-description', '.contact'], i = 0

;(function loop () {
  var el = document.querySelector(els[i])
  el.classList.add('animated')
  el.classList.add('fadeInUp')

  if (++i < els.length) {
    setTimeout(loop, 350)
  }
})()
