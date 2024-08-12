"use strict"

//------- adding event on multiple element

const addEventOnElements = function (elements, eventType, callback) {
  for (let i = 0, len = elements.length; i < len; i++){
    elements[i].addEventListener(eventType, callback)
  }
}

//------- navbar toggle for mobile

const navbar = document.querySelector("[data-navbar]");

const navTogglers = document.querySelectorAll("[data-nav-toggler]")

const toggleNavbar = function () {
  navbar.classList.toggle("active");
  document.body.classList.toggle("nav-active")
}


addEventOnElements(navTogglers, "click",toggleNavbar);


//------- active header when window scroll down 100px


const header = document.querySelector("[data-header]");

window.addEventListener("scroll", function() {
  if(this.window.scrollY > 100){
    header.classList.add("active")
  }else {
    header.classList.remove("active")
  }
})
