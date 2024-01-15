// JavaScript code for the slider
let currentSlide = 0;
const slides = document.querySelectorAll(".testimonial-container");
const circles = document.querySelectorAll(".circle");

function showSlide(slideIndex) {
  slides[currentSlide].classList.remove("active");
  slides[slideIndex].classList.add("active");
  circles[currentSlide].classList.remove("active");
  circles[slideIndex].classList.add("active");
  currentSlide = slideIndex;
}

function changeSlide(slideIndex) {
  showSlide(slideIndex);
}

function nextSlide() {
  const next = (currentSlide + 1) % slides.length;
  showSlide(next);
}

function prevSlide() {
  const prev = (currentSlide - 1 + slides.length) % slides.length;
  showSlide(prev);
}

setInterval(nextSlide, 20000); // Auto-advance to the next slide every 3 seconds

















