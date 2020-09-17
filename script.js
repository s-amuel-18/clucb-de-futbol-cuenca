(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var animationCard = exports.animationCard = function animationCard(card, animacion) {
  var d = document,
      w = window,
      cardObjetivo = d.querySelectorAll(card);
  cardObjetivo.forEach(function (objetivo, i) {
    var scrollAnimation = function scrollAnimation() {
      // const scrollTop = d.documentElement.scrollTop,
      var topObjetivo = objetivo.getBoundingClientRect().top;
      if (topObjetivo - 600 <= 0) {
        objetivo.classList.add("animationtranslatexOpaciti");
      }
      // console.log(topObjetivo)
    };
    w.addEventListener("scroll", scrollAnimation);

    // console.log(objetivo.getBoundingClientRect().bottom)
  });
};

},{}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var menuStiky = exports.menuStiky = function menuStiky(menu, header) {
  var d = document,
      w = window,
      firstContent = document.querySelector(header),
      menuStiky = d.querySelector(menu),
      heightHeader = w.getComputedStyle(firstContent, null).getPropertyValue("height").split("px")[0],
      heightMenuStiky = w.getComputedStyle(menuStiky, null).getPropertyValue("height").split("px")[0];

  var scrollLimit = heightHeader - heightMenuStiky;
  var moveScroll = function moveScroll() {
    var scrollTop = w.pageXOffset || document.documentElement.scrollTop;

    if (scrollTop > scrollLimit) {
      menuStiky.classList.add("activeBcgColor");
    } else {
      menuStiky.classList.remove("activeBcgColor");
    }
  };
  w.addEventListener("scroll", moveScroll);
};

},{}],3:[function(require,module,exports){
"use strict";

var _menuStiky = require("./components/menuStiky.js");

var _animacionCard = require("./components/animacionCard.js");

(function () {
  (0, _menuStiky.menuStiky)(".menu", "#inicio");
  (0, _animacionCard.animationCard)(".objetivos-contentObjetivo", "animationtranslatexOpaciti");
})();
// (function(){
// })()

},{"./components/animacionCard.js":1,"./components/menuStiky.js":2}]},{},[3])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvanMvY29tcG9uZW50cy9hbmltYWNpb25DYXJkLmpzIiwic3JjL2pzL2NvbXBvbmVudHMvbWVudVN0aWt5LmpzIiwic3JjL2pzL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7QUNBTyxJQUFNLHdDQUFnQixTQUFoQixhQUFnQixDQUFDLElBQUQsRUFBTSxTQUFOLEVBQW9CO0FBQy9DLE1BQU0sSUFBSSxRQUFWO0FBQUEsTUFDSSxJQUFJLE1BRFI7QUFBQSxNQUVJLGVBQWUsRUFBRSxnQkFBRixDQUFtQixJQUFuQixDQUZuQjtBQUdGLGVBQWEsT0FBYixDQUFxQixVQUFDLFFBQUQsRUFBVSxDQUFWLEVBQWdCO0FBQ25DLFFBQU0sa0JBQWtCLFNBQWxCLGVBQWtCLEdBQU07QUFDNUI7QUFDSyxVQUFNLGNBQWMsU0FBUyxxQkFBVCxHQUFpQyxHQUFyRDtBQUNMLFVBQUksY0FBYyxHQUFmLElBQXVCLENBQTFCLEVBQTRCO0FBQzFCLGlCQUFTLFNBQVQsQ0FBbUIsR0FBbkI7QUFDRDtBQUNEO0FBQ0QsS0FQRDtBQVFBLE1BQUUsZ0JBQUYsV0FBNEIsZUFBNUI7O0FBR0E7QUFFRCxHQWREO0FBZUMsQ0FuQk07Ozs7Ozs7O0FDQUEsSUFBTSxnQ0FBWSxtQkFBQyxJQUFELEVBQU0sTUFBTixFQUFlO0FBQ3RDLE1BQU0sSUFBSSxRQUFWO0FBQUEsTUFDRSxJQUFJLE1BRE47QUFBQSxNQUVFLGVBQWUsU0FBUyxhQUFULENBQXVCLE1BQXZCLENBRmpCO0FBQUEsTUFHRSxZQUFZLEVBQUUsYUFBRixDQUFnQixJQUFoQixDQUhkO0FBQUEsTUFJRSxlQUFlLEVBQUUsZ0JBQUYsQ0FBbUIsWUFBbkIsRUFBZ0MsSUFBaEMsRUFBc0MsZ0JBQXRDLFdBQWlFLEtBQWpFLE9BQTZFLENBQTdFLENBSmpCO0FBQUEsTUFLRSxrQkFBa0IsRUFBRSxnQkFBRixDQUFtQixTQUFuQixFQUE2QixJQUE3QixFQUFtQyxnQkFBbkMsV0FBOEQsS0FBOUQsT0FBMEUsQ0FBMUUsQ0FMcEI7O0FBT0UsTUFBTSxjQUFjLGVBQWUsZUFBbkM7QUFDQSxNQUFNLGFBQWEsU0FBYixVQUFhLEdBQU07QUFDdkIsUUFBSSxZQUFZLEVBQUUsV0FBRixJQUFpQixTQUFTLGVBQVQsQ0FBeUIsU0FBMUQ7O0FBRUEsUUFBRyxZQUFZLFdBQWYsRUFBMkI7QUFDekIsZ0JBQVUsU0FBVixDQUFvQixHQUFwQjtBQUNELEtBRkQsTUFFSztBQUNILGdCQUFVLFNBQVYsQ0FBb0IsTUFBcEI7QUFFRDtBQUNGLEdBVEQ7QUFVQSxJQUFFLGdCQUFGLFdBQTRCLFVBQTVCO0FBQ0gsQ0FwQk07Ozs7O0FDQVA7O0FBQ0E7O0FBQ0EsQ0FBQyxZQUFVO0FBQ1Q7QUFDQTtBQUNELENBSEQ7QUFJQTtBQUNBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKXtmdW5jdGlvbiByKGUsbix0KXtmdW5jdGlvbiBvKGksZil7aWYoIW5baV0pe2lmKCFlW2ldKXt2YXIgYz1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlO2lmKCFmJiZjKXJldHVybiBjKGksITApO2lmKHUpcmV0dXJuIHUoaSwhMCk7dmFyIGE9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitpK1wiJ1wiKTt0aHJvdyBhLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsYX12YXIgcD1uW2ldPXtleHBvcnRzOnt9fTtlW2ldWzBdLmNhbGwocC5leHBvcnRzLGZ1bmN0aW9uKHIpe3ZhciBuPWVbaV1bMV1bcl07cmV0dXJuIG8obnx8cil9LHAscC5leHBvcnRzLHIsZSxuLHQpfXJldHVybiBuW2ldLmV4cG9ydHN9Zm9yKHZhciB1PVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmUsaT0wO2k8dC5sZW5ndGg7aSsrKW8odFtpXSk7cmV0dXJuIG99cmV0dXJuIHJ9KSgpIiwiZXhwb3J0IGNvbnN0IGFuaW1hdGlvbkNhcmQgPSAoY2FyZCxhbmltYWNpb24pID0+IHtcclxuICBjb25zdCBkID0gZG9jdW1lbnQsXHJcbiAgICAgIHcgPSB3aW5kb3csXHJcbiAgICAgIGNhcmRPYmpldGl2byA9IGQucXVlcnlTZWxlY3RvckFsbChjYXJkKVxyXG5jYXJkT2JqZXRpdm8uZm9yRWFjaCgob2JqZXRpdm8saSkgPT4ge1xyXG4gIGNvbnN0IHNjcm9sbEFuaW1hdGlvbiA9ICgpID0+IHtcclxuICAgIC8vIGNvbnN0IHNjcm9sbFRvcCA9IGQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvcCxcclxuICAgICAgICAgY29uc3QgdG9wT2JqZXRpdm8gPSBvYmpldGl2by5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3BcclxuICAgIGlmKCh0b3BPYmpldGl2byAtIDYwMCkgPD0gMCl7XHJcbiAgICAgIG9iamV0aXZvLmNsYXNzTGlzdC5hZGQoYGFuaW1hdGlvbnRyYW5zbGF0ZXhPcGFjaXRpYClcclxuICAgIH1cclxuICAgIC8vIGNvbnNvbGUubG9nKHRvcE9iamV0aXZvKVxyXG4gIH1cclxuICB3LmFkZEV2ZW50TGlzdGVuZXIoYHNjcm9sbGAsc2Nyb2xsQW5pbWF0aW9uKVxyXG5cclxuXHJcbiAgLy8gY29uc29sZS5sb2cob2JqZXRpdm8uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkuYm90dG9tKVxyXG5cclxufSlcclxufSIsImV4cG9ydCBjb25zdCBtZW51U3Rpa3kgPSAobWVudSxoZWFkZXIpPT57XHJcbiAgY29uc3QgZCA9IGRvY3VtZW50LFxyXG4gICAgdyA9IHdpbmRvdyxcclxuICAgIGZpcnN0Q29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoaGVhZGVyKSxcclxuICAgIG1lbnVTdGlreSA9IGQucXVlcnlTZWxlY3RvcihtZW51KSxcclxuICAgIGhlaWdodEhlYWRlciA9IHcuZ2V0Q29tcHV0ZWRTdHlsZShmaXJzdENvbnRlbnQsbnVsbCkuZ2V0UHJvcGVydHlWYWx1ZShgaGVpZ2h0YCkuc3BsaXQoYHB4YClbMF0sXHJcbiAgICBoZWlnaHRNZW51U3Rpa3kgPSB3LmdldENvbXB1dGVkU3R5bGUobWVudVN0aWt5LG51bGwpLmdldFByb3BlcnR5VmFsdWUoYGhlaWdodGApLnNwbGl0KGBweGApWzBdXHJcblxyXG4gICAgY29uc3Qgc2Nyb2xsTGltaXQgPSBoZWlnaHRIZWFkZXIgLSBoZWlnaHRNZW51U3Rpa3lcclxuICAgIGNvbnN0IG1vdmVTY3JvbGwgPSAoKSA9PiB7XHJcbiAgICAgIGxldCBzY3JvbGxUb3AgPSB3LnBhZ2VYT2Zmc2V0IHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3BcclxuXHJcbiAgICAgIGlmKHNjcm9sbFRvcCA+IHNjcm9sbExpbWl0KXtcclxuICAgICAgICBtZW51U3Rpa3kuY2xhc3NMaXN0LmFkZChgYWN0aXZlQmNnQ29sb3JgKVxyXG4gICAgICB9ZWxzZXtcclxuICAgICAgICBtZW51U3Rpa3kuY2xhc3NMaXN0LnJlbW92ZShgYWN0aXZlQmNnQ29sb3JgKVxyXG5cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgdy5hZGRFdmVudExpc3RlbmVyKGBzY3JvbGxgLG1vdmVTY3JvbGwpXHJcbn0iLCJpbXBvcnQge21lbnVTdGlreX0gZnJvbSBcIi4vY29tcG9uZW50cy9tZW51U3Rpa3kuanNcIlxuaW1wb3J0IHthbmltYXRpb25DYXJkfSBmcm9tIFwiLi9jb21wb25lbnRzL2FuaW1hY2lvbkNhcmQuanNcIlxuKGZ1bmN0aW9uKCl7XG4gIG1lbnVTdGlreShgLm1lbnVgLGAjaW5pY2lvYClcbiAgYW5pbWF0aW9uQ2FyZChgLm9iamV0aXZvcy1jb250ZW50T2JqZXRpdm9gLGBhbmltYXRpb250cmFuc2xhdGV4T3BhY2l0aWApXG59KSgpXG4vLyAoZnVuY3Rpb24oKXtcbi8vIH0pKCkiXX0=
