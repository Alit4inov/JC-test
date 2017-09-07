(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var _helpers = require('./modules/helpers');

var _helpers2 = _interopRequireDefault(_helpers);

var _nav = require('./modules/nav');

var _nav2 = _interopRequireDefault(_nav);

var _carousel = require('./modules/carousel');

var _carousel2 = _interopRequireDefault(_carousel);

var _checkemail = require('./modules/checkemail');

var _checkemail2 = _interopRequireDefault(_checkemail);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// You can write a call and import your functions in this file.
//
// This file will be compiled into app.js and will not be minified.
// Feel free with using ES6 here.

(function ($) {
  'use strict';

  // When DOM is ready

  $(function () {

    _helpers2.default.dotsEffect();
    (0, _nav2.default)();
    (0, _carousel2.default)();
    (0, _checkemail2.default)();
  });
})(jQuery);

},{"./modules/carousel":2,"./modules/checkemail":3,"./modules/helpers":4,"./modules/nav":5}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
var owlSlide = function owlSlide() {

    $('.owl-carousel').owlCarousel({
        nav: true,
        dots: false,
        loop: true,
        items: 1
    });
};

exports.default = owlSlide;

},{}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
var checkEmail = function checkEmail(email) {

	var pattern = /^[a-z0-9_-]+@[a-z0-9-]+\.[a-z]{2,6}$/i;
	var mail = $('#mail');
	var info = $('.validation-info');

	mail.blur(function validate() {
		if (mail.val() != '') {
			if (mail.val().search(pattern) == 0) {
				$('#submit').attr('disabled', false);
				info.removeClass('error');
			} else {
				$('#valid').text('Please enter valid email');
				$('#submit').attr('disabled', true);
				info.addClass('error');
			}
		} else {
			$('#valid').text('Please enter email');
			info.addClass('error');
			$('#submit').attr('disabled', true);
		}

		$(function () {
			$('.form-btn').on('click', validate);
		});
	});
};

exports.default = checkEmail;

},{}],4:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
// This is an examples of simple export.
//
// You can remove or add your own function in this file.

var DE = {
  dotsEffect: function dotsEffect() {
    var $cnt = $('#home-canvas'),
        cells = $(createCells());

    $cnt.html(cells);

    $('body').removeClass('load');

    function createCells() {
      var width = 10,
          height = 10,
          size = width * height,
          html = '<div class="entry-cells">';

      for (var i = 0; i < size; i++) {
        html += '<div class="cell cell-' + i + '"></div>';
      }

      html += '</div>';

      return html;
    }
  }
};

exports.default = DE;

},{}],5:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
var navigation = function navigation() {

    $('.m-nav-opener').on("click", function () {
        $('body').toggleClass('nav-open');
    });
    $('.m-nav-close').on("click", function () {
        $('body').removeClass('nav-open');
    });
};
exports.default = navigation;

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmNcXGpzXFxhcHAuanMiLCJzcmNcXGpzXFxtb2R1bGVzXFxjYXJvdXNlbC5qcyIsInNyY1xcanNcXG1vZHVsZXNcXGNoZWNrZW1haWwuanMiLCJzcmNcXGpzXFxtb2R1bGVzXFxoZWxwZXJzLmpzIiwic3JjXFxqc1xcbW9kdWxlc1xcbmF2LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7QUNLQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7O0FBUkE7QUFDQTtBQUNBO0FBQ0E7O0FBT0EsQ0FBRSxVQUFDLENBQUQsRUFBTztBQUNQOztBQUVBOztBQUNBLElBQUUsWUFBTTs7QUFFTixzQkFBRyxVQUFIO0FBQ0E7QUFDQTtBQUNBO0FBRUQsR0FQRDtBQVNELENBYkQsRUFhRyxNQWJIOzs7Ozs7OztBQ1ZBLElBQUksV0FBVyxTQUFYLFFBQVcsR0FBVzs7QUFFdEIsTUFBRSxlQUFGLEVBQW1CLFdBQW5CLENBQStCO0FBQzNCLGFBQUssSUFEc0I7QUFFM0IsY0FBTSxLQUZxQjtBQUczQixjQUFNLElBSHFCO0FBSTNCLGVBQU87QUFKb0IsS0FBL0I7QUFNSCxDQVJEOztrQkFVZSxROzs7Ozs7OztBQ1ZmLElBQUksYUFBYSxTQUFiLFVBQWEsQ0FBUyxLQUFULEVBQWdCOztBQUdoQyxLQUFJLFVBQVUsdUNBQWQ7QUFDQSxLQUFJLE9BQU8sRUFBRSxPQUFGLENBQVg7QUFDQSxLQUFJLE9BQU8sRUFBRSxrQkFBRixDQUFYOztBQUdBLE1BQUssSUFBTCxDQUFVLFNBQVMsUUFBVCxHQUFtQjtBQUM1QixNQUFHLEtBQUssR0FBTCxNQUFjLEVBQWpCLEVBQW9CO0FBQ2xCLE9BQUcsS0FBSyxHQUFMLEdBQVcsTUFBWCxDQUFrQixPQUFsQixLQUE4QixDQUFqQyxFQUFtQztBQUNsQyxNQUFFLFNBQUYsRUFBYSxJQUFiLENBQWtCLFVBQWxCLEVBQThCLEtBQTlCO0FBQ0EsU0FBSyxXQUFMLENBQWlCLE9BQWpCO0FBQ0EsSUFIRCxNQUdLO0FBQ0osTUFBRSxRQUFGLEVBQVksSUFBWixDQUFpQiwwQkFBakI7QUFDQSxNQUFFLFNBQUYsRUFBYSxJQUFiLENBQWtCLFVBQWxCLEVBQThCLElBQTlCO0FBQ0EsU0FBSyxRQUFMLENBQWMsT0FBZDtBQUNBO0FBQ0QsR0FURixNQVNNO0FBQ0osS0FBRSxRQUFGLEVBQVksSUFBWixDQUFpQixvQkFBakI7QUFDQSxRQUFLLFFBQUwsQ0FBYyxPQUFkO0FBQ0EsS0FBRSxTQUFGLEVBQWEsSUFBYixDQUFrQixVQUFsQixFQUE4QixJQUE5QjtBQUNBOztBQUVELElBQUUsWUFBVztBQUNWLEtBQUUsV0FBRixFQUFlLEVBQWYsQ0FBa0IsT0FBbEIsRUFBMkIsUUFBM0I7QUFDRixHQUZEO0FBSUEsRUFwQkY7QUFxQkEsQ0E3QkQ7O2tCQStCZSxVOzs7Ozs7OztBQy9CZjtBQUNBO0FBQ0E7O0FBRUEsSUFBSSxLQUFLO0FBQ1AsY0FBWSxzQkFBVztBQUNyQixRQUFJLE9BQVEsRUFBRSxjQUFGLENBQVo7QUFBQSxRQUNJLFFBQVEsRUFBRSxhQUFGLENBRFo7O0FBR0EsU0FBSyxJQUFMLENBQVUsS0FBVjs7QUFFQSxNQUFFLE1BQUYsRUFBVSxXQUFWLENBQXNCLE1BQXRCOztBQUVBLGFBQVMsV0FBVCxHQUF1QjtBQUNyQixVQUFJLFFBQVMsRUFBYjtBQUFBLFVBQ0ksU0FBUyxFQURiO0FBQUEsVUFFSSxPQUFTLFFBQVEsTUFGckI7QUFBQSxVQUdJLE9BQVMsMkJBSGI7O0FBS0EsV0FBSyxJQUFJLElBQUksQ0FBYixFQUFnQixJQUFJLElBQXBCLEVBQTBCLEdBQTFCLEVBQStCO0FBQzdCLGdCQUFRLDJCQUEyQixDQUEzQixHQUErQixVQUF2QztBQUNEOztBQUVELGNBQVEsUUFBUjs7QUFFQSxhQUFPLElBQVA7QUFDRDtBQUNGO0FBdkJNLENBQVQ7O2tCQTBCZSxFOzs7Ozs7OztBQzlCZixJQUFJLGFBQWEsU0FBYixVQUFhLEdBQVc7O0FBRXhCLE1BQUUsZUFBRixFQUFtQixFQUFuQixDQUFzQixPQUF0QixFQUErQixZQUFXO0FBQ3RDLFVBQUUsTUFBRixFQUFVLFdBQVYsQ0FBc0IsVUFBdEI7QUFDSCxLQUZEO0FBR0EsTUFBRSxjQUFGLEVBQWtCLEVBQWxCLENBQXFCLE9BQXJCLEVBQThCLFlBQVc7QUFDckMsVUFBRSxNQUFGLEVBQVUsV0FBVixDQUFzQixVQUF0QjtBQUNILEtBRkQ7QUFJSCxDQVREO2tCQVVlLFUiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiLy8gWW91IGNhbiB3cml0ZSBhIGNhbGwgYW5kIGltcG9ydCB5b3VyIGZ1bmN0aW9ucyBpbiB0aGlzIGZpbGUuXHJcbi8vXHJcbi8vIFRoaXMgZmlsZSB3aWxsIGJlIGNvbXBpbGVkIGludG8gYXBwLmpzIGFuZCB3aWxsIG5vdCBiZSBtaW5pZmllZC5cclxuLy8gRmVlbCBmcmVlIHdpdGggdXNpbmcgRVM2IGhlcmUuXHJcblxyXG5pbXBvcnQgREUgZnJvbSAnLi9tb2R1bGVzL2hlbHBlcnMnO1xyXG5pbXBvcnQgbmF2aWdhdGlvbiBmcm9tICcuL21vZHVsZXMvbmF2JztcclxuaW1wb3J0IG93bFNsaWRlIGZyb20gJy4vbW9kdWxlcy9jYXJvdXNlbCc7XHJcbmltcG9ydCBjaGVja0VtYWlsIGZyb20gJy4vbW9kdWxlcy9jaGVja2VtYWlsJztcclxuXHJcbiggKCQpID0+IHtcclxuICAndXNlIHN0cmljdCc7XHJcblxyXG4gIC8vIFdoZW4gRE9NIGlzIHJlYWR5XHJcbiAgJCgoKSA9PiB7XHJcblxyXG4gICAgREUuZG90c0VmZmVjdCgpO1xyXG4gICAgbmF2aWdhdGlvbigpO1xyXG4gICAgb3dsU2xpZGUoKTtcclxuICAgIGNoZWNrRW1haWwoKTtcclxuXHJcbiAgfSk7XHJcblxyXG59KShqUXVlcnkpOyIsInZhciBvd2xTbGlkZSA9IGZ1bmN0aW9uKCkge1xyXG5cclxuICAgICQoJy5vd2wtY2Fyb3VzZWwnKS5vd2xDYXJvdXNlbCh7XHJcbiAgICAgICAgbmF2OiB0cnVlLFxyXG4gICAgICAgIGRvdHM6IGZhbHNlLFxyXG4gICAgICAgIGxvb3A6IHRydWUsXHJcbiAgICAgICAgaXRlbXM6IDFcclxuICAgIH0pO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgb3dsU2xpZGU7XHJcbiIsInZhciBjaGVja0VtYWlsID0gZnVuY3Rpb24oZW1haWwpIHtcclxuXHJcbiAgIFxyXG5cdHZhciBwYXR0ZXJuID0gL15bYS16MC05Xy1dK0BbYS16MC05LV0rXFwuW2Etel17Miw2fSQvaTtcclxuXHR2YXIgbWFpbCA9ICQoJyNtYWlsJyk7XHJcblx0dmFyIGluZm8gPSAkKCcudmFsaWRhdGlvbi1pbmZvJyk7XHJcblx0XHJcblx0XHJcblx0bWFpbC5ibHVyKGZ1bmN0aW9uIHZhbGlkYXRlKCl7XHJcblx0XHRpZihtYWlsLnZhbCgpICE9ICcnKXtcclxuXHRcdFx0XHRpZihtYWlsLnZhbCgpLnNlYXJjaChwYXR0ZXJuKSA9PSAwKXtcclxuXHRcdFx0XHRcdCQoJyNzdWJtaXQnKS5hdHRyKCdkaXNhYmxlZCcsIGZhbHNlKTtcclxuXHRcdFx0XHRcdGluZm8ucmVtb3ZlQ2xhc3MoJ2Vycm9yJyk7XHJcblx0XHRcdFx0fWVsc2V7XHJcblx0XHRcdFx0XHQkKCcjdmFsaWQnKS50ZXh0KCdQbGVhc2UgZW50ZXIgdmFsaWQgZW1haWwnKTtcclxuXHRcdFx0XHRcdCQoJyNzdWJtaXQnKS5hdHRyKCdkaXNhYmxlZCcsIHRydWUpO1xyXG5cdFx0XHRcdFx0aW5mby5hZGRDbGFzcygnZXJyb3InKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1lbHNle1xyXG5cdFx0XHRcdCQoJyN2YWxpZCcpLnRleHQoJ1BsZWFzZSBlbnRlciBlbWFpbCcpO1xyXG5cdFx0XHRcdGluZm8uYWRkQ2xhc3MoJ2Vycm9yJyk7XHJcblx0XHRcdFx0JCgnI3N1Ym1pdCcpLmF0dHIoJ2Rpc2FibGVkJywgdHJ1ZSk7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdCQoZnVuY3Rpb24oKSB7XHJcblx0XHRcdCAgICQoJy5mb3JtLWJ0bicpLm9uKCdjbGljaycsIHZhbGlkYXRlKTtcclxuXHRcdFx0fSk7XHJcblxyXG5cdFx0fSk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjaGVja0VtYWlsO1xyXG4iLCIvLyBUaGlzIGlzIGFuIGV4YW1wbGVzIG9mIHNpbXBsZSBleHBvcnQuXHJcbi8vXHJcbi8vIFlvdSBjYW4gcmVtb3ZlIG9yIGFkZCB5b3VyIG93biBmdW5jdGlvbiBpbiB0aGlzIGZpbGUuXHJcblxyXG52YXIgREUgPSB7XHJcbiAgZG90c0VmZmVjdDogZnVuY3Rpb24oKSB7XHJcbiAgICB2YXIgJGNudCAgPSAkKCcjaG9tZS1jYW52YXMnKSxcclxuICAgICAgICBjZWxscyA9ICQoY3JlYXRlQ2VsbHMoKSk7XHJcblxyXG4gICAgJGNudC5odG1sKGNlbGxzKTtcclxuXHJcbiAgICAkKCdib2R5JykucmVtb3ZlQ2xhc3MoJ2xvYWQnKTtcclxuXHJcbiAgICBmdW5jdGlvbiBjcmVhdGVDZWxscygpIHtcclxuICAgICAgdmFyIHdpZHRoICA9IDEwLFxyXG4gICAgICAgICAgaGVpZ2h0ID0gMTAsXHJcbiAgICAgICAgICBzaXplICAgPSB3aWR0aCAqIGhlaWdodCxcclxuICAgICAgICAgIGh0bWwgICA9ICc8ZGl2IGNsYXNzPVwiZW50cnktY2VsbHNcIj4nO1xyXG5cclxuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzaXplOyBpKyspIHtcclxuICAgICAgICBodG1sICs9ICc8ZGl2IGNsYXNzPVwiY2VsbCBjZWxsLScgKyBpICsgJ1wiPjwvZGl2Pic7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGh0bWwgKz0gJzwvZGl2Pic7XHJcblxyXG4gICAgICByZXR1cm4gaHRtbDtcclxuICAgIH1cclxuICB9XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBERTsiLCJ2YXIgbmF2aWdhdGlvbiA9IGZ1bmN0aW9uKCkge1xyXG5cclxuICAgICQoJy5tLW5hdi1vcGVuZXInKS5vbihcImNsaWNrXCIsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICQoJ2JvZHknKS50b2dnbGVDbGFzcygnbmF2LW9wZW4nKTtcclxuICAgIH0pO1xyXG4gICAgJCgnLm0tbmF2LWNsb3NlJykub24oXCJjbGlja1wiLCBmdW5jdGlvbigpIHtcclxuICAgICAgICAkKCdib2R5JykucmVtb3ZlQ2xhc3MoJ25hdi1vcGVuJyk7XHJcbiAgICB9KTtcclxuXHJcbn07XHJcbmV4cG9ydCBkZWZhdWx0IG5hdmlnYXRpb247Il19
