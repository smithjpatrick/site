
      var navToggle = document.querySelector(".nav__toggle");
      var navMenu = document.querySelector(".nav__menu");
      var navBurger = document.querySelector(".nav__burger");
      var navBurgerText = document.querySelector(".nav__toggle-text");

      navToggle.addEventListener("click", function () {
        if (navMenu.classList.contains("active")) {
          console.log("remove");
          navMenu.classList.remove("active");
          navBurger.classList.remove("close");
          navBurgerText.innerHTML = "Menu";
        } else {
          console.log("add");
          navMenu.classList.add("active");
          navBurger.classList.add("close");
          navBurgerText.innerHTML = "Close";
        }
      });

      var navMenuHorizontal = document.querySelector(".nav__menu");
      var burgerLabel = document.querySelector(".nav");

      window.addEventListener("resize", function () {
        if (window.innerWidth > 600) {
          navMenu.classList.remove("active");
          navBurgerText.innerHTML = "Menu";
        }
      });
