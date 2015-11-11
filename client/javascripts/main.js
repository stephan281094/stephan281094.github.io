window.fitText(document.querySelector('h1'));
window.fitText(document.querySelector('span'), 2);

window.onload = function() {
  var els = ['h1', 'span', 'a.button'],
      i   = 0;

  (function loop() {
    var element = document.querySelector(els[i]);
    element.classList.add('animated');
    element.classList.add('fadeInUp');

    if (++i < els.length) {
      setTimeout(loop, 350);
    }
  })();
}
