/**
 * ==========================================
 * GLOBAL CAROUSEL & NAVIGATION INTERACTION SCRIPT
 * Vanilla JS Slideshow & Active Navigation Logic
 * ==========================================
 */

document.addEventListener('DOMContentLoaded', () => {
  initSlideshow();
  initActiveNavigation();
  initMobileNav();
});

/**
 * Global Header Slideshow Functionality
 */
function initSlideshow() {
  const slides = document.querySelectorAll('.slide');
  const dotsContainer = document.querySelector('.slideshow-dots');
  const prevBtn = document.querySelector('.prev-slide');
  const nextBtn = document.querySelector('.next-slide');
  const slideshowWrapper = document.querySelector('.header-slideshow');

  if (!slides.length) return;

  let currentSlide = 0;
  let slideInterval = null;
  const autoPlayDelay = 5000; // 5 seconds interval

  // Dynamically generate dots if dots container exists
  if (dotsContainer && slides.length > 1) {
    dotsContainer.innerHTML = '';
    slides.forEach((_, index) => {
      const dot = document.createElement('div');
      dot.classList.add('dot');
      if (index === 0) dot.classList.add('active');
      dot.addEventListener('click', () => goToSlide(index));
      dotsContainer.appendChild(dot);
    });
  }

  const dots = document.querySelectorAll('.dot');

  // Go to specific slide
  function goToSlide(index) {
    slides[currentSlide].classList.remove('active');
    if (dots.length) dots[currentSlide].classList.remove('active');

    currentSlide = (index + slides.length) % slides.length;

    slides[currentSlide].classList.add('active');
    if (dots.length) dots[currentSlide].classList.add('active');
  }

  // Next and Previous handlers
  function nextSlide() {
    goToSlide(currentSlide + 1);
  }

  function prevSlide() {
    goToSlide(currentSlide - 1);
  }

  // Attach button event listeners
  if (nextBtn) {
    nextBtn.addEventListener('click', (e) => {
      e.preventDefault();
      nextSlide();
      resetTimer();
    });
  }

  if (prevBtn) {
    prevBtn.addEventListener('click', (e) => {
      e.preventDefault();
      prevSlide();
      resetTimer();
    });
  }

  // Auto-play timer control
  function startTimer() {
    if (!slideInterval && slides.length > 1) {
      slideInterval = setInterval(nextSlide, autoPlayDelay);
    }
  }

  function stopTimer() {
    if (slideInterval) {
      clearInterval(slideInterval);
      slideInterval = null;
    }
  }

  function resetTimer() {
    stopTimer();
    startTimer();
  }

  // Pause auto-play on mouse hover over slideshow
  if (slideshowWrapper) {
    slideshowWrapper.addEventListener('mouseenter', stopTimer);
    slideshowWrapper.addEventListener('mouseleave', startTimer);
  }

  // Touch Swipe Support for Mobile Devices
  let touchStartX = 0;
  let touchEndX = 0;

  if (slideshowWrapper) {
    slideshowWrapper.addEventListener('touchstart', (e) => {
      touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });

    slideshowWrapper.addEventListener('touchend', (e) => {
      touchEndX = e.changedTouches[0].screenX;
      handleSwipe();
    }, { passive: true });
  }

  function handleSwipe() {
    const swipeThreshold = 50;
    if (touchEndX < touchStartX - swipeThreshold) {
      nextSlide();
      resetTimer();
    }
    if (touchEndX > touchStartX + swipeThreshold) {
      prevSlide();
      resetTimer();
    }
  }

  // Start auto-play on init
  startTimer();
}

/**
 * Highlights active page link in Sticky Navigation Bar
 */
function initActiveNavigation() {
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';
  const navLinks = document.querySelectorAll('.nav-link');

  navLinks.forEach(link => {
    const linkHref = link.getAttribute('href');
    if (linkHref === currentPath || (currentPath === '' && linkHref === 'index.html')) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
}

/**
 * Responsive Mobile Menu Toggle
 */
function initMobileNav() {
  const navToggle = document.querySelector('.nav-toggle');
  const navMenu = document.querySelector('.nav-menu');

  if (navToggle && navMenu) {
    navToggle.addEventListener('click', () => {
      navMenu.classList.toggle('mobile-open');
      const isOpen = navMenu.classList.contains('mobile-open');
      navToggle.setAttribute('aria-expanded', isOpen);
    });
  }
}
