let currentSlide = 0;
const slideWidth = 320; // Largeur d'une carte + marge
const container = document.getElementById("carousel-container");
const totalSlides = container.children.length;

function updateCarousel() {
  container.style.transform = `translateX(-${currentSlide * slideWidth}px)`;
}

function nextSlide() {
  if (currentSlide < totalSlides - 1) {
    currentSlide++;
    updateCarousel();
  }
}

function prevSlide() {
  if (currentSlide > 0) {
    currentSlide--;
    updateCarousel();
  }
}