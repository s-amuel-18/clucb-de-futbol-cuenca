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

  navegacionTouch.addEventListener("click", function (e) {
    // linkMenu.forEach(link => {
    closedMenuArreglo(linkMenu);
    closedMenuArreglo(Array.from(botonCerrar.children));
    openMenuAreglo(Array.from(botonAbrir.children));
    closedMenu(botonCerrar);
    openMenu(botonAbrir);

    function closedMenuArreglo(link) {
      link.forEach(function (el) {
        closedMenu(el);
      });
    }
    function openMenuAreglo(link) {
      link.forEach(function (el) {
        openMenu(el);
      });
    }
    function closedMenu(link) {
      if (e.target == link) {
        menuDespliegueItem.classList.remove("activeMenu");
      }
    }
    function openMenu(link) {
      if (e.target == link) {
        menuDespliegueItem.classList.add("activeMenu");
      }
    }
  });
};