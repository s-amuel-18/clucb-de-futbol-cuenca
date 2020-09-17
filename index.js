"use strict";

var _menuStiky = require("./components/menuStiky.js");

var _animacionCard = require("./components/animacionCard.js");

(function () {
  (0, _menuStiky.menuStiky)(".menu", "#inicio");
  (0, _animacionCard.animationCard)(".objetivos-contentObjetivo", "animationtranslatexOpaciti");
  (0, _menuStiky.touchMenu)(".menu-contentHamburguesa", ".menu-closed", ".menu-navegacion", ".menu-ContentItem", ".menu-link");
})();
// (function(){
// })()