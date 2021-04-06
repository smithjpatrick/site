
var page = document.querySelector("html");
var navWrap = document.querySelector(".nav-wrapper");
var nav = document.querySelector(".nav");
var navBrand = document.querySelector(".nav__logo-link");
var logoImg = document.querySelector(".nav__img");
var navToggle = document.querySelector(".nav__toggle");
var navMenu = document.querySelector(".nav__menu");
var navBurger = document.querySelector(".nav__burger");
var navBurgerText = document.querySelector(".nav__toggle-text");
var w = window.innerWidth
|| document.documentElement.clientWidth
|| document.body.clientWidth;

navToggle.addEventListener("click", function () {

  
  if (page.classList.contains("mobile")) {
    console.log("remove");
    page.classList.remove("mobile");
    
    navBurgerText.innerHTML = "Menu";
  } else {
    console.log("add");
    page.classList.add("mobile");
    
    navBurgerText.innerHTML = "Close";
  }
});


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
var navHide = 100; //scroll distance that nav hides

window.onscroll = function() {
    myFunction();
}

function myFunction() {
  
    if (document.body.scrollTop > navHide || document.documentElement.scrollTop > navHide) {
      logoImg.classList.add("nav__img--small");
      navWrap.classList.add("nav--scrolled");
    } else {
      navWrap.classList.remove("nav--scrolled");
      logoImg.classList.remove("nav__img--small");
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


////////////////////////////////////// 
// keeping tab focus within burger menu
// https://hiddedevries.nl/en/blog/2017-01-29-using-javascript-to-trap-focus-in-an-element
////////////////////////////////
var myNodeList = document.querySelector("nav__link");

// let first = myNodeList[0];

// let last = myNodeList[myNodeList.length - 1];


// var focusableEls = nav.querySelectorAll('a[href]:not([disabled]), button:not([disabled])');
//   var firstFocusableEl = focusableEls[0];  
//   var lastFocusableEl = focusableEls[focusableEls.length - 1];
//   var KEYCODE_TAB = 9;
//   console.log(firstFocusableEl.innerHTML);
//   console.log(lastFocusableEl.innerHTML);
  
//   navMenu.addEventListener('keydown', function(e) {
//     var isTabPressed = (e.key === 'Tab' || e.keyCode === KEYCODE_TAB);

//     if (!isTabPressed) { 
//       return; 
//     }

//     if ( e.shiftKey ) /* shift + tab */ {
//       if (document.activeElement === firstFocusableEl) {
//         lastFocusableEl.focus();
//           e.preventDefault();
          
//         }
//       } else /* tab */ {
//       if (document.activeElement === lastFocusableEl) {
//         firstFocusableEl.focus();
//           e.preventDefault();
//         }
//       }
//   });
