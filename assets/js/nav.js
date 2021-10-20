// Get the hamburger element from the DOM
const hamburgerEl = document.querySelector(".hamburger");

// Get the nav links element from the DOM
const navLinksEl = document.querySelector("nav .links");
// Get all the nav link elements from the DOM as an array
const linksEl = document.querySelectorAll("nav .links .link");

// Get the flag icon from the DOM
const flagIconEl = document.querySelector("nav .links .flag-icon");

// Add an event listener function that runs every time the user clicks on the hamburger element
hamburgerEl.addEventListener("click", () => {
  // Toggle the open class for the nav links element
  navLinksEl.classList.toggle("open");

  // Loop through the array of link elements and toggle the fade class
  linksEl.forEach((linkEl) => {
    linkEl.classList.toggle("fade");
  });

  // Fade in the flag icon
  flagIconEl.classList.toggle("fade");

  // Get the currect URL
  const currentUrl = window.location.href;

  // check if it's the english or norwegian page
  // change the image of the hamburger menu to the right image path
  if (currentUrl.includes("/en/")) {
    if (navLinksEl.classList.contains("open")) {
      hamburgerEl.src = "../assets/img/icons/close.png";
    } else {
      hamburgerEl.src = "../assets/img/icons/menu.png";
    }
  } else {
    if (navLinksEl.classList.contains("open")) {
      hamburgerEl.src = "assets/img/icons/close.png";
    } else {
      hamburgerEl.src = "assets/img/icons/menu.png";
    }
  }
});
