require('./wasd.scss');

function easing(t) { return t<.5 ? 2*t*t : -1+(4-2*t)*t };

(function() {
  let clock = document.getElementById('stopwatch-hand').getBoundingClientRect().bottom;
  var bodyRect = document.body.getBoundingClientRect().y;
  var clockBottom = clock - bodyRect;

  document.addEventListener('scroll', function(event) {
    var angle = easing((clockBottom - window.scrollY) / clockBottom);
    angle = 360 - (360 * angle);

    document.documentElement.style.setProperty('--stopwatch-rotation',  angle + 'deg');
  });
})();