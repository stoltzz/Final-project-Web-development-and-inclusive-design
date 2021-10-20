// Get the full screen background image element from the DOM
const imgEl = document.querySelector(".fs-bg-img");
// Get the image title element from the DOM
const titleEl = document.querySelector(".fs-bg-title");
// Get the image scroll element from the DOM
const scrollEl = document.querySelector(".fs-bg-scroll-down");

// Add an event listener function that runs every time the user hovers over the image scroll element
scrollEl.addEventListener("mouseenter", () => {
  // If there's a title element, then fade it out and darken the full screen background image
  if (titleEl) titleEl.style.opacity = 0;
  imgEl.style.filter = "brightness(30%)";
});

// Add an event listener function that runs every time the user stops hovering over the image scroll element
scrollEl.addEventListener("mouseleave", () => {
  // If there's a title element, then fade it in and brighten the full screen background image
  if (titleEl) titleEl.style.opacity = 1;
  imgEl.style.filter = "brightness(60%)";
});
