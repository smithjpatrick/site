var mobileBP = 600
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
  let expanded = this.getAttribute('aria-expanded') === 'true' || false;
  this.setAttribute('aria-expanded', !expanded);
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
    navBurgerText.innerHTML = "Menu";
    navToggle.setAttribute('aria-expanded', 'false')
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
  if (w > mobileBP) {
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


var lastScrollTop = 0;

// element should be replaced with the actual target element on which you have applied scroll, use window in case of no target element.
window.addEventListener("scroll", function(){ // or window.addEventListener("scroll"....
  
  var rect = document.querySelector('.hero__title').getBoundingClientRect();
  var navHide = rect.top - navWrap.offsetHeight; //scroll distance that nav hides
  

   var st = window.pageYOffset || document.documentElement.scrollTop; // Credits: "https://github.com/qeremy/so/blob/master/so.dom.js#L426"
   
   if (st > lastScrollTop && navHide < 0 ){
     // downscroll code 
     navBrand.classList.add("nav__logo-link--small");
     navWrap.classList.add("nav--scrolled");
     if ((w <= mobileBP)) {
         // on mobile, hide navbar 
         
         navWrap.classList.add("hidden-nav");
         
        }
      } else {
        // upscroll code
        navWrap.classList.remove("hidden-nav");
        if (lastScrollTop < navHide) {
          // Expand navbar at top of page
  
          navBrand.classList.remove("nav__logo-link--small");
            navWrap.classList.remove("nav--scrolled");
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
    subMenuBtn.setAttribute('aria-expanded', 'false')
  }
});





  


  // Accessible navigaiton
  // https://www.a11ywithlindsey.com/blog/create-accessible-dropdown-navigation
  // Also used this resource:
  // https://gomakethings.com/how-to-get-all-of-an-elements-siblings-with-vanilla-js/
  // and
  // https://uxdesign.cc/how-to-trap-focus-inside-modal-to-make-it-ada-compliant-6a50f9a70700#:~:text=tab%2C%20shift%20%2B%20tab%20and%20enter,pressing%20tab%20key%20multiple%20times.

  
  
  const topLevelLinks = document.querySelectorAll('.nav__logo-link, .menu__link');
    
  topLevelLinks.forEach(link => {

    const subMenu = link.parentElement.lastElementChild
    const subMenuLinks = subMenu.querySelectorAll('a')
    const lastLinkIndex = subMenuLinks.length - 1
    const lastLink = subMenuLinks[lastLinkIndex]
    if (link.nextElementSibling) {
     
      link.addEventListener('focus', function() {
        console.log("focus")
        this.parentElement.classList.add('focus')
        subMenuLinks.forEach( function(number) {
          number.setAttribute("tabindex", "0")
        })
      })  

      lastLink.addEventListener('blur', function() {
          link.parentElement.classList.remove('focus')
          subMenuLinks.forEach( function(number) {
            
            number.setAttribute("tabindex", "-1")
          })
      })
    }
      
    document.addEventListener('keydown', function(e) {
        let isTabPressed = e.key === 'Tab' || e.keyCode === 9;
      
        const  focusableElements = 'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';
  const navFocusableContent = nav.querySelectorAll(focusableElements);
const pageFocusElements = body.querySelectorAll(focusableElements); // select the modal by it's id


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
          if (document.activeElement === pageFocusElements[navFocusableContent.length+1]) {
            // navFocusableContent[1].focus(); // add focus for the last focusable element
            topLevelLinks[4].focus() || navFocusableContent[1].focus() ;
            e.preventDefault();

          }
        } 
        else { // if tab key is pressed
          if (document.activeElement === navFocusableContent[1]) { // if focused has reached to last focusable element then focus first focusable element after pressing tab
            pageFocusElements[navFocusableContent.length+1].focus(); // add focus for the first focusable element
            e.preventDefault();
          }
        }

      }
    });
  })

  navBrand.addEventListener("focus", function () {
    document.querySelector(".menu__item").classList.remove('focus')
    var subMenuLinks = document.querySelectorAll(".nav .submenu__link")
    subMenuLinks.forEach( function(number) {
      number.setAttribute("tabindex", "-1")
    })
  })
  navToggle.addEventListener("focus", function () {
    document.querySelector(".menu__item").classList.remove('focus')
  })

  // subMenuBtn.addEventListener("blur", function () {
  //   console.log("blur")
  //   document.querySelector(".menu__item").classList.remove('focus')
  // })

    // toggle Dropdown menu on button click
subMenuBtn.addEventListener("click", function () {
  
  let expanded = this.getAttribute('aria-expanded') === 'true' || false;
  this.setAttribute('aria-expanded', !expanded);
  if (subMenuBtn.parentElement.classList.contains("focus")) {
    subMenuBtn.parentElement.classList.remove("focus");
  } else {
    subMenuBtn.parentElement.classList.add("focus");
  }
})


window.onclick = function(event) {
  if (!event.target.matches('.submenu__button')) {
    var dropdowns = document.getElementsByClassName("submenu");
    console.log(document.getElementsByClassName("submenu"))
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      console.log("openDropdown: " + openDropdown)
      if (openDropdown.parentElement.classList.contains('focus')) {
        console.log("contains focus")
        openDropdown.parentElement.classList.remove('focus');
      }
    }
  }
}

document.getElementById("menu").addEventListener('click',function(event){
  event.stopPropagation();
});

