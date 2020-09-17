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