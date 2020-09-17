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