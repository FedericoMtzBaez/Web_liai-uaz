// Animations functionality
export function setupAnimations() {
  // Animate elements when they come into view
  setupScrollAnimations();
}

// Scroll animations
function setupScrollAnimations() {
  const animatedElements = document.querySelectorAll('.animate-on-scroll');
  
  if (animatedElements.length === 0) {
    // If no elements with the class, apply it to some common elements
    const sections = document.querySelectorAll('section');
    sections.forEach((section, index) => {
      if (index % 2 === 0) {
        section.classList.add('animate-on-scroll', 'fade-in-up');
      } else {
        section.classList.add('animate-on-scroll', 'fade-in-up');
      }
    });
    
    // Apply to card elements
    const cards = document.querySelectorAll('.publication-card, .team-card, .vacancy-card, .product-card');
    cards.forEach(card => {
      card.classList.add('animate-on-scroll', 'fade-in-up');
    });
  }
  
  // Check if element is in viewport
  function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
      rect.top <= (window.innerHeight || document.documentElement.clientHeight) * 0.8 &&
      rect.bottom >= 0 &&
      rect.left <= (window.innerWidth || document.documentElement.clientWidth) &&
      rect.right >= 0
    );
  }
  
  // Function to handle scroll animations
  function handleScrollAnimations() {
    document.querySelectorAll('.animate-on-scroll').forEach(element => {
      if (isElementInViewport(element)) {
        element.classList.add('visible');
      }
    });
  }
  
  // Listen for scroll events
  window.addEventListener('scroll', handleScrollAnimations);
  
  // Trigger on page load
  handleScrollAnimations();
}