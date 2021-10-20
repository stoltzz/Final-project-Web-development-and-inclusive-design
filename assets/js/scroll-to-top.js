// Get the scroll to top button element from the DOM
const btnEl = document.querySelector(".scroll-to-top-btn");

// Hide the scroll button when the user hasn't scrolled down enough
const scrollFunction = () => {
  if (
    document.body.scrollTop > 100 ||
    document.documentElement.scrollTop > 100
  ) {
    btnEl.style.opacity = 1;
  } else {
    btnEl.style.opacity = 0;
  }
};

// Scrolls to the top of the page invoked by the scroll to top button
const scollToTop = () => {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
};

// Run scrollFunction() when the user scrolls
window.onscroll = () => scrollFunction();
