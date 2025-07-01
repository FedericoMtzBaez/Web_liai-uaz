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

// Vacancy application form
function setupVacancyForm() {
  const vacancyForm = document.getElementById('vacancy-form');
  const applyButtons = document.querySelectorAll('.vacancy-apply-btn');
  const formOverlay = document.querySelector('.application-form-overlay');
  const closeBtn = document.querySelector('.form-close-btn');
  const cancelBtn = document.querySelector('.form-cancel-btn');
  const selectedVacancy = document.querySelector('#selected-vacancy span');
  
  if (!vacancyForm || !formOverlay) return;
  
  // Show form when apply button is clicked
  applyButtons.forEach(button => {
    button.addEventListener('click', () => {
      const vacancyTitle = button.getAttribute('data-vacancy');
      selectedVacancy.textContent = vacancyTitle;
      
      formOverlay.classList.add('active');
      document.body.style.overflow = 'hidden'; // Prevent scrolling
    });
  });
  
  // Close form when close button is clicked
  if (closeBtn) {
    closeBtn.addEventListener('click', closeForm);
  }
  
  // Close form when cancel button is clicked
  if (cancelBtn) {
    cancelBtn.addEventListener('click', closeForm);
  }
  
  // Close form when clicking outside
  formOverlay.addEventListener('click', (e) => {
    if (e.target === formOverlay) {
      closeForm();
    }
  });
  
  // Handle form submission
  vacancyForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Simulate form submission
    setTimeout(() => {
      // Close form
      closeForm();
      
      // Show success message
      showSuccessModal();
      
      // Reset form
      vacancyForm.reset();
    }, 1000);
  });
  
  // Close form function
  function closeForm() {
    formOverlay.classList.remove('active');
    document.body.style.overflow = ''; // Re-enable scrolling
  }
  
  // Close form with Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && formOverlay.classList.contains('active')) {
      closeForm();
    }
  });
}

// Character counter
function setupCharacterCounter() {
  const textarea = document.getElementById('proposal');
  const charCount = document.getElementById('char-count');
  
  if (!textarea || !charCount) return;
  
  textarea.addEventListener('input', () => {
    const remainingChars = textarea.value.length;
    charCount.textContent = remainingChars;
    
    // Change color when approaching limit
    if (remainingChars > 450) {
      charCount.style.color = '#f44336';
    } else {
      charCount.style.color = '';
    }
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