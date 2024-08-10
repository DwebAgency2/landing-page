// Select the menu icon, close icon, and navbar elements
let menuIcon = document.querySelector("#menu-icon");
let closeIcon = document.querySelector("#close-icon");
let navbar = document.querySelector(".navbar");

// Function to toggle the menu visibility
const toggleMenu = () => {
  navbar.classList.toggle(".active");
  menuIcon.classList.toggle("hidden");
  closeIcon.classList.toggle("hidden");
};

// Show menu when menu icon is clicked
menuIcon.onclick = () => {
  toggleMenu();
};

// Show menu when close icon is clicked
closeIcon.onclick = () => {
  toggleMenu();
};

// Close the menu when scrolling
window.onscroll = () => {
  if (navbar.classList.contains("active")) {
    toggleMenu();
  }
};
