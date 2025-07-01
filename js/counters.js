// Counters functionality
export function setupCounters() {
  const counters = document.querySelectorAll('.stat-number');
  
  if (counters.length === 0) return;
  
  // Check if element is in viewport
  function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }
  
  // Animation for counting up
  function animateCounter(counter, target) {
    let current = 0;
    const increment = target / 100;
    const duration = 2000; // ms
    const step = duration / 100;
    
    const timer = setInterval(() => {
      current += increment;
      counter.textContent = Math.floor(current);
      
      if (current >= target) {
        counter.textContent = target;
        clearInterval(timer);
      }
    }, step);
  }
  
  // Start counter animation when element comes into view
  let hasRun = false;
  
  function startCounters() {
    if (hasRun) return;
    
    const statsSection = document.querySelector('.stats');
    if (!statsSection) return;
    
    if (isInViewport(statsSection)) {
      counters.forEach(counter => {
        const target = parseInt(counter.getAttribute('data-count'));
        animateCounter(counter, target);
      });
      hasRun = true;
      window.removeEventListener('scroll', startCounters);
    }
  }
  
  // Check on scroll
  window.addEventListener('scroll', startCounters);
  
  // Check on page load
  startCounters();
}