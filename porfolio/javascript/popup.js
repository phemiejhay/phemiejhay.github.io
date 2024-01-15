/* menu pop up */

const openButton6 = document.getElementById("openPopup6");
const overlay6 = document.getElementById("popupOverlay6");
const closeButton6 = document.getElementById("closePopup6");

// Function to open the popup
openButton6.addEventListener("click", function () {
  overlay6.style.display = "block";
});

// Function to close the popup
closeButton6.addEventListener("click", function () {
  overlay6.style.display = "none";
});

// Close the popup if the user clicks outside the popup
window.addEventListener("click", function (event) {
  if (event.target === overlay6) {
    overlay6.style.display = "none";
  }
});

/* popup Xtramile headlight */
// Get the necessary elements
const openButton = document.getElementById("openPopup");
const overlay = document.getElementById("popupOverlay");
const closeButton = document.getElementById("closePopup");

// Function to open the popup
openButton.addEventListener("click", function () {
  overlay.style.display = "block";
});

// Function to close the popup
closeButton.addEventListener("click", function () {
  overlay.style.display = "none";
});

// Close the popup if the user clicks outside the popup
window.addEventListener("click", function (event) {
  if (event.target === overlay) {
    overlay.style.display = "none";
  }
});

/* dogs rock and roll website  */
// Get the necessary elements
const openButton1 = document.getElementById("openPopup1");
const overlay1 = document.getElementById("popupOverlay1");
const closeButton1 = document.getElementById("closePopup1");

// Function to open the popup
openButton1.addEventListener("click", function () {
  overlay1.style.display = "block";
});

// Function to close the popup
closeButton1.addEventListener("click", function () {
  overlay1.style.display = "none";
});

// Close the popup if the user clicks outside the popup
window.addEventListener("click", function (event) {
  if (event.target === overlay1) {
    overlay1.style.display = "none";
  }
});

popupOverlay5;

/* OC-e website pop up */

// Get the necessary elements
const openButton2 = document.getElementById("openPopup2");
const overlay2 = document.getElementById("popupOverlay2");
const closeButton2 = document.getElementById("closePopup2");

// Function to open the popup
openButton2.addEventListener("click", function () {
  overlay2.style.display = "block";
});

// Function to close the popup
closeButton2.addEventListener("click", function () {
  overlay2.style.display = "none";
});

// Close the popup if the user clicks outside the popup
window.addEventListener("click", function (event) {
  if (event.target === overlay2) {
    overlay2.style.display = "none";
  }
});

/*     AI lawyer chat bot */ /*     AI lawyer chat bot */
/*     AI lawyer chat bot */ /*     AI lawyer chat bot */

// Get the necessary elements
const openButton3 = document.getElementById("openPopup3");
const overlay3 = document.getElementById("popupOverlay3");
const closeButton3 = document.getElementById("closePopup3");

// Function to open the popup
openButton3.addEventListener("click", function () {
  overlay3.style.display = "block";
});

// Function to close the popup
closeButton3.addEventListener("click", function () {
  overlay3.style.display = "none";
});

// Close the popup if the user clicks outside the popup
window.addEventListener("click", function (event) {
  if (event.target === overlay3) {
    overlay3.style.display = "none";
  }
});

/*         Kanine world store */
const openButton4 = document.getElementById("openPopup4");
const overlay4 = document.getElementById("popupOverlay4");
const closeButton4 = document.getElementById("closePopup4");

// Function to open the popup
openButton4.addEventListener("click", function () {
  overlay4.style.display = "block";
});

// Function to close the popup
closeButton4.addEventListener("click", function () {
  overlay4.style.display = "none";
});

// Close the popup if the user clicks outside the popup
window.addEventListener("click", function (event) {
  if (event.target === overlay4) {
    overlay4.style.display = "none";
  }
});

/*         market analyst/strategist */

const openButton5 = document.getElementById("openPopup5");
const overlay5 = document.getElementById("popupOverlay5");
const closeButton5 = document.getElementById("closePopup5");

// Function to open the popup
openButton5.addEventListener("click", function () {
  overlay5.style.display = "block";
});

// Function to close the popup
closeButton5.addEventListener("click", function () {
  overlay5.style.display = "none";
});

// Close the popup if the user clicks outside the popup
window.addEventListener("click", function (event) {
  if (event.target === overlay5) {
    overlay5.style.display = "none";
  }
});

const swiper = new Swiper(".swiper", {
  // Optional parameters
  direction: "horizontal",
  loop: true,

  // cube effect

  effect: "cube",
  grabCursor: true,
  cubeEffect: {
    shadow: true,
    slideShadows: true,
    shadowOffset: 20,
    shadowScale: 0.94,
  },

  //autoplay
  autoplay: {
    delay: 5500,
    disableOnInteraction: false,
  },

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // And if we need scrollbar
  scrollbar: {
    el: ".swiper-scrollbar",
  },
});
