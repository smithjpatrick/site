/////////////////////////////////////
// Toggle classes
/////////////////////////////////////


// Toggle visibility class
// function togglePopup() {
//   var element = document.getElementById("popup");
//   element.classList.toggle("visible");
// }



/////////////////////////////////////
// Create element in DOM
/////////////////////////////////////

// 1. Create the button
var nodeParent = document.getElementById("popup")
console.log(nodeParent);

var nodeChild = nodeParent.children[0];
console.log(nodeChild);

var li = document.createElement("li");
li.className = "menu__item";


var button = document.createElement("button");
var att = document.createAttribute("data-clipboard-text");
att.value = "smith.j.patrick@gmail.com"
button.setAttributeNode(att);
button.innerHTML = "Copy to clipboard";
button.innerHTML += '<svg class="icon icon__ext-link icon--outline" version="1.1" id="copy" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="24px" height="24px" viewBox="0 0 24 24" enable-background="new 0 0 24 24" xml:space="preserve"> <g> <rect id="doc-2" x="8.36" y="6.332" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" width="10.64" height="14.418"/> <polyline id="doc-1" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" points=" 5,18.108 5,3.25 15.64,3.25 	"/> </g> </svg>';

button.classList.add("menu__btn");
button.classList.add("menu__link");
button.classList.add("menu__link--full-width");
button.classList.add("clipboard");
button.classList.add("animate-icon");


// 2. Append somewhere

li.appendChild(button)
nodeChild.appendChild(li);

// 3. Add event handler
button.addEventListener("click", function () {
  alert("did something");
});

/* Read 

https://css-tricks.com/use-button-element/
*/

/* from https://www.geeksforgeeks.org/toggle-class-by-adding-the-class-name-when-element-is-clicked-and-remove-when-clicked-outside/ */

// Select the button on which the 
        // class has to be toggled 
        const btn = document.querySelector(".clipboard"); 
        const element = document.querySelector("#popup"); 
        const notElement1 = document.querySelector("input"); 
        const notElement2 = document.querySelector(".navbar__link:last-child"); 
  
        // Select the entire HTML document 
        const html = document.querySelector("html"); 
  
        // Add an event listener for  
        // a click to the button 
        btn.addEventListener("click", function (e) { 
  
            // Add the required class 
            element.classList.add("visible"); 
        }); 
  
        html.addEventListener("click", function (e) { 
  
            if (e.target !== btn) 
                element.classList.remove("visible"); 
        }); 


// focus
btn.addEventListener("focus", function (e) { 
  
  // Add the required class 
  element.classList.add("visible"); 
}); 

notElement1.addEventListener("focus", function (e) { 
  
  
      element.classList.remove("visible"); 
}); 

notElement2.addEventListener("focus", function (e) { 
  
  
      element.classList.remove("visible"); 
}); 

document.querySelectorAll('.navbar__link').forEach(item => {
  item.addEventListener('focus', function (e) {
    element.classList.remove("visible"); 
  })
})