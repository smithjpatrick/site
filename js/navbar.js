
var page = document.querySelector("html");
var body = document.querySelector("body");
var navWrap = document.querySelector(".nav-wrapper");
var nav = document.querySelector(".nav");
var navBrand = document.querySelector(".nav__logo-link");
var logoImg = document.querySelector(".nav__img");
var navLink = document.querySelector(".menu__link");
var navToggle = document.querySelector(".nav__toggle");
var navMenu = document.querySelector(".nav .menu");
var navBurger = document.querySelector(".nav__burger");
var navBurgerText = document.querySelector(".nav__toggle-text");
var subMenuBtn = document.querySelector(".nav .submenu__button");
var navDdmenu = document.querySelector(".nav .submenu");
var w = window.innerWidth
|| document.documentElement.clientWidth
|| document.body.clientWidth;

//Toggle Mobile nav menu off
navToggle.addEventListener("click", function () {
menuToggle();
})
navBrand.addEventListener("click", function () {
menuClose();
})
navLink.addEventListener("click", function () {
menuClose();
})
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    menuClose();
    navToggle.focus();
  }
});

// Open the nav menu by adding or removing 
// the .mobile class to html tag
function menuToggle() {
  if (page.classList.contains("mobile")) {
    page.classList.remove("mobile");
    navBurgerText.innerHTML = "Menu";
  } else {
    page.classList.add("mobile");
    
    navBurgerText.innerHTML = "Close";
  }
};
function menuClose() {
  if (page.classList.contains("mobile")) {
    page.classList.remove("mobile");
    subMenuBtn.classList.remove("expanded");
    navBurgerText.innerHTML = "Menu";
  }
};


// when window is being resized, check for width.
// when the width is a certain value, toggle .mmobile
// class to toggle nav appearance and hide open mobile
// menu
window.addEventListener("resize", function () {
w = window.innerWidth
|| document.documentElement.clientWidth
|| document.body.clientWidth;
  if (w > 600) {
    page.classList.remove("mobile");
    navBurgerText.innerHTML = "Menu";
    navWrap.classList.remove("hidden-nav");
  } 
})


/////////////////////
//Scrolling
/////////////////////
// control appearance of nav bar:
//    shrink vs hide, etc

var navHide = 100; //scroll distance that nav hides

window.onscroll = function() {
    navScroll();
}

function navScroll() {
  
    if (document.body.scrollTop > navHide || document.documentElement.scrollTop > navHide) {
      navBrand.classList.add("nav__logo-link--small");
      navWrap.classList.add("nav--scrolled");
    } else {
      navWrap.classList.remove("nav--scrolled");
      navBrand.classList.remove("nav__logo-link--small");
      console.log("scrolled up")
    }
  };


var lastScrollTop = 0;

// element should be replaced with the actual target element on which you have applied scroll, use window in case of no target element.
window.addEventListener("scroll", function(){ // or window.addEventListener("scroll"....

   var st = window.pageYOffset || document.documentElement.scrollTop; // Credits: "https://github.com/qeremy/so/blob/master/so.dom.js#L426"

   if ((w <= 600)) {
   if (st > lastScrollTop && st > navHide ){
    // downscroll code 

    navWrap.classList.add("hidden-nav");

  } else {
      // upscroll code
      navWrap.classList.remove("hidden-nav");
   }
  }
   lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling
}, false);


//Return nav bar on focus events
nav.addEventListener("focusin", function() {
  navWrap.classList.remove("hidden-nav");
})

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    menuClose();
    subMenuBtn.classList.remove("expanded");
  }
});





  


  // Accessible navigaiton
  // https://www.a11ywithlindsey.com/blog/create-accessible-dropdown-navigation
  // Also used this resource:
  // https://gomakethings.com/how-to-get-all-of-an-elements-siblings-with-vanilla-js/

  const topLevelLinks = document.querySelectorAll('.nav__logo-link, .menu__link');

  const  focusableElements = 'button, [href], input, select, textarea';
  const navFocusableContent = nav.querySelectorAll(focusableElements);
const pageFocusElements = body.querySelectorAll(focusableElements); // select the modal by it's id
console.log(navFocusableContent.length)
console.log(pageFocusElements.length)
console.log(pageFocusElements[navFocusableContent.length])



  topLevelLinks.forEach(link => {
    if (link.nextElementSibling) {
      const subMenu = link.parentElement.lastElementChild
      const subMenuLinks = subMenu.querySelectorAll('a')
      const lastLinkIndex = subMenuLinks.length - 1
      const lastLink = subMenuLinks[lastLinkIndex]
      link.addEventListener('focus', function() {
        this.parentElement.classList.add('focus')
        subMenuLinks.forEach( function(number) {
          number.setAttribute("tabindex", "0")
        })
      })  

      lastLink.addEventListener('blur', function() {
          link.parentElement.classList.remove('focus')
          subMenuLinks.forEach( function(number) {
            console.log("number")
            console.log(number)
            number.setAttribute("tabindex", "-1")
          })
      })
    }
      
    document.addEventListener('keydown', function(e) {
        let isTabPressed = e.key === 'Tab' || e.keyCode === 9;
      
        if (!isTabPressed) {
          return;
        }
      
        if (page.classList.contains('mobile')) {
        // if shift key pressed for shift + tab combination
          if (e.shiftKey) { 
          if (document.activeElement === topLevelLinks[0]) {
            // add focus for the last focusable element
            topLevelLinks[topLevelLinks.length-1].focus(); 
            e.preventDefault();
          }
        } 
        // if tab key is pressed
        else { 
          // if focused has reached to last focusable element then focus first focusable element after pressing tab
          if (document.activeElement === topLevelLinks[topLevelLinks.length-1]) { 
            // add focus for the first focusable element
            topLevelLinks[0].focus(); 
            e.preventDefault();
          }
        }
      } 
      // IF MOBILE nav window isn't down
      else {
        // if shift key pressed for shift + tab combination
        if (e.shiftKey) { 
          if (document.activeElement === pageFocusElements[navFocusableContent.length]) {
            // navFocusableContent[1].focus(); // add focus for the last focusable element
            console.log('test')
            console.log(navFocusableContent[0])
            console.log(navFocusableContent[1])
            console.log(navFocusableContent[2])
            navFocusableContent[1].focus();
            e.preventDefault();

          }
        } 
        else { // if tab key is pressed
          if (document.activeElement === navFocusableContent[1]) { // if focused has reached to last focusable element then focus first focusable element after pressing tab
            pageFocusElements[navFocusableContent.length].focus(); // add focus for the first focusable element
            e.preventDefault();
          }
        }

      }
    });
  })

  navBrand.addEventListener("focus", function () {
    document.querySelector(".menu__item").classList.remove('focus')
  })
  navToggle.addEventListener("focus", function () {
    document.querySelector(".menu__item").classList.remove('focus')
  })

  subMenuBtn.addEventListener("blur", function () {
    document.querySelector(".menu__item").classList.remove('focus')
    console.log("click")
  })

    // toggle Dropdown menu on button click
subMenuBtn.addEventListener("click", function () {
  if (subMenuBtn.parentElement.classList.contains("focus")) {
    subMenuBtn.parentElement.classList.remove("focus");
  } else {
    subMenuBtn.parentElement.classList.add("focus");
  }
})

