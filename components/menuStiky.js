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
var touchMenu = exports.touchMenu = function touchMenu(abrir, cerrar, navegacion, menuDespliegue, link) {
  var botonAbrir = document.querySelector(abrir);
  var botonCerrar = document.querySelector(cerrar);
  var navegacionTouch = document.querySelector(navegacion);
  var menuDespliegueItem = document.querySelector(menuDespliegue);
  var linkMenu = document.querySelectorAll(link);
  console.log(Array.from(linkMenu)[0]);
  navegacionTouch.addEventListener("click", function (e) {
    if (e.target == botonAbrir || e.target == Array.from(botonAbrir.children)[0] || e.target == Array.from(botonAbrir.children)[1] || e.target == Array.from(botonAbrir.children)[2]) {
      if (e.target == botonAbrir.children) {
        // botonAbrir.children.Array.from
        console.log("dsdasdsads");
      }
      menuDespliegueItem.classList.add("activeMenu");
    } else if (e.target == botonCerrar || e.target == Array.from(botonCerrar.children)[0] || e.target == Array.from(botonCerrar.children)[1] || e.target == Array.from(linkMenu)[0] || e.target == Array.from(linkMenu)[1]) {
      menuDespliegueItem.classList.remove("activeMenu");
      console.log("cerrar");
    }
  });
};