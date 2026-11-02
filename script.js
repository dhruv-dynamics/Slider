// Elements
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const slider = document.querySelector('.slider');

let currentIndex = 0;
let slideInterval;

// Function to display a specific slide
function showSlide(index) {
  // Loop back around if index is out of bounds
  if (index >= slides.length) {
    currentIndex = 0;
  } else if (index < 0) {
    currentIndex = slides.length - 1;
  } else {
    currentIndex = index;
  }

  // Update active slide
  slides.forEach((slide) => slide.classList.remove('active'));
  slides[currentIndex].classList.add('active');

  // Update active dot
  dots.forEach((dot) => dot.classList.remove('active'));
  dots[currentIndex].classList.add('active');
}

// Next and Previous Slide functions
function nextSlide() {
  showSlide(currentIndex + 1);
}

function prevSlide() {
  showSlide(currentIndex - 1);
}

// Button Click Events
nextBtn.addEventListener('click', nextSlide);
prevBtn.addEventListener('click', prevSlide);

// Dot Click Events
dots.forEach((dot, index) => {
  dot.addEventListener('click', () => {
    showSlide(index);
  });
});

// Auto Play (Change slide every 4 seconds)
function startAutoPlay() {
  slideInterval = setInterval(nextSlide, 4000);
}

function stopAutoPlay() {
  clearInterval(slideInterval);
}

// Pause autoplay on mouse hover
slider.addEventListener('mouseenter', stopAutoPlay);
slider.addEventListener('mouseleave', startAutoPlay);

// Start slider autoplay on page load
startAutoPlay();
