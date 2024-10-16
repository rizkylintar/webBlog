// AOS Animation Initialization
AOS.init({
  duration: 1200,
  easing: 'ease-in-out',
  once: true,
  mirror: false,
});

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
      });
  });
});

// Form Validation
const form = document.querySelector('.contact-form');
form.addEventListener('submit', (e) => {
  e.preventDefault();

  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();

  if (name === '' || email === '' || message === '') {
      alert('Please fill in all fields.');
  } else {
      alert('Message sent successfully!');
      form.reset();
  }
});

// JavaScript for background slideshow
let slideIndex = 0;
const slides = document.querySelectorAll('.slideshow img');

function showSlides() {
  slides.forEach((slide, index) => {
      slide.style.opacity = '0'; // Set all images to invisible
      slide.classList.remove('active');
  });

  slideIndex++;
  if (slideIndex > slides.length) {
      slideIndex = 1;
  }

  slides[slideIndex - 1].style.opacity = '1'; // Show current slide
  slides[slideIndex - 1].classList.add('active');

  setTimeout(showSlides, 5000); // Change slide every 5 seconds
}

showSlides();

// Fade-in animation for conclusion section
document.addEventListener('DOMContentLoaded', function() {
  const conclusionSection = document.querySelector('.conclusion-section');

  const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              conclusionSection.classList.add('visible'); // Add the visible class
          } else {
              conclusionSection.classList.remove('visible'); // Remove the visible class when out of view
          }
      });
  });

  observer.observe(conclusionSection); // Observe the conclusion section
});
