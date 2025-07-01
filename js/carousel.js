// Carousel functionality
export function setupCarousel() {
  const carouselSlides = document.querySelectorAll('.carousel-slide');
  const indicators = document.querySelectorAll('.indicator');
  const prevBtn = document.querySelector('.carousel-controls .prev');
  const nextBtn = document.querySelector('.carousel-controls .next');
  
  let currentSlide = 0;
  let slideInterval;
  const intervalTime = 5000;

  // Function to start the automatic slideshow
  function startSlideshow() {
    slideInterval = setInterval(() => {
      changeSlide(currentSlide + 1);
    }, intervalTime);
  }

  // Function to stop the automatic slideshow
  function stopSlideshow() {
    clearInterval(slideInterval);
  }

  // Change slide function
  function changeSlide(slideIndex) {
    // Reset all slides
    carouselSlides.forEach(slide => {
      slide.classList.remove('active');
    });
    
    // Reset all indicators
    indicators.forEach(indicator => {
      indicator.classList.remove('active');
    });
    
    // Calculate the correct slide index (for looping)
    currentSlide = slideIndex % carouselSlides.length;
    if (currentSlide < 0) currentSlide = carouselSlides.length - 1;
    
    // Activate current slide and indicator
    carouselSlides[currentSlide].classList.add('active');
    indicators[currentSlide].classList.add('active');
  }

  // Event listeners for controls
  if (prevBtn) {
    prevBtn.addEventListener('click', () => {
      stopSlideshow();
      changeSlide(currentSlide - 1);
      startSlideshow();
    });
  }
  
  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      stopSlideshow();
      changeSlide(currentSlide + 1);
      startSlideshow();
    });
  }
  
  // Event listeners for indicators
  indicators.forEach((indicator, index) => {
    indicator.addEventListener('click', () => {
      stopSlideshow();
      changeSlide(index);
      startSlideshow();
    });
  });

  // Pause slideshow on hover
  const carouselContainer = document.querySelector('.carousel-container');
  if (carouselContainer) {
    carouselContainer.addEventListener('mouseenter', stopSlideshow);
    carouselContainer.addEventListener('mouseleave', startSlideshow);
  }

  // Swipe gestures for mobile
  let touchStartX = 0;
  let touchEndX = 0;
  
  if (carouselContainer) {
    carouselContainer.addEventListener('touchstart', e => {
      touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });
    
    carouselContainer.addEventListener('touchend', e => {
      touchEndX = e.changedTouches[0].screenX;
      handleSwipe();
    }, { passive: true });
  }
  
  function handleSwipe() {
    const swipeThreshold = 50;
    if (touchEndX < touchStartX - swipeThreshold) {
      // Swipe left - next slide
      stopSlideshow();
      changeSlide(currentSlide + 1);
      startSlideshow();
    }
    if (touchEndX > touchStartX + swipeThreshold) {
      // Swipe right - previous slide
      stopSlideshow();
      changeSlide(currentSlide - 1);
      startSlideshow();
    }
  }

  // Start the slideshow
  startSlideshow();
}