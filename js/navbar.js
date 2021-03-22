
var nav = document.querySelector(".nav");
var navToggle = document.querySelector(".nav__toggle");
var navMenu = document.querySelector(".nav__menu");
var navBurger = document.querySelector(".nav__burger");
var navBurgerText = document.querySelector(".nav__toggle-text");

navToggle.addEventListener("click", function () {
  if (nav.classList.contains("mobile")) {
    console.log("remove");
    nav.classList.remove("mobile");
    
    navBurgerText.innerHTML = "Menu";
  } else {
    console.log("add");
    nav.classList.add("mobile");
    
    navBurgerText.innerHTML = "Close";
  }
});

var navMenuHorizontal = document.querySelector(".nav__menu");
var burgerLabel = document.querySelector(".nav");

window.addEventListener("resize", function () {
  if (window.innerWidth > 600) {
    nav.classList.remove("mobile");
    navBurgerText.innerHTML = "Menu";
  }
});
