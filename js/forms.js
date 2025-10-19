// Forms functionality
export function setupForms() {
  setupContactForm();
  setupVacancyForm();
  setupCharacterCounter();
}

// Contact form
function setupContactForm() {
  const contactForm = document.getElementById('contact-form');
  
  if (!contactForm) return;
  
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Simulate form submission
    setTimeout(() => {
      // Show success message
      showSuccessModal();
      
      // Reset form
      contactForm.reset();
    }, 1000);
  });
}

// Success modal
function showSuccessModal() {
  const successModal = document.querySelector('.success-modal');
  const closeBtn = document.querySelector('.success-close-btn');
  
  if (!successModal) return;
  
  // Show success modal
  successModal.classList.add('active');
  document.body.style.overflow = 'hidden'; // Prevent scrolling
  
  // Close success modal when close button is clicked
  if (closeBtn) {
    closeBtn.addEventListener('click', () => {
      successModal.classList.remove('active');
      document.body.style.overflow = ''; // Re-enable scrolling
    });
  }
  
  // Close success modal when clicking outside
  successModal.addEventListener('click', (e) => {
    if (e.target === successModal) {
      successModal.classList.remove('active');
      document.body.style.overflow = ''; // Re-enable scrolling
    }
  });
  
  // Close success modal with Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && successModal.classList.contains('active')) {
      successModal.classList.remove('active');
      document.body.style.overflow = ''; // Re-enable scrolling
    }
  });
  
  // Automatically close after 5 seconds
  setTimeout(() => {
    if (successModal.classList.contains('active')) {
      successModal.classList.remove('active');
      document.body.style.overflow = ''; // Re-enable scrolling
    }
  }, 5000);
}