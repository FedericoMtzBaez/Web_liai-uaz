// Collapsibles functionality
export function setupCollapsibles() {
  const collapsibles = document.querySelectorAll('.collapsible');
  
  collapsibles.forEach(collapsible => {
    const button = collapsible.querySelector('.collapsible-btn');
    const content = collapsible.querySelector('.collapsible-content');
    
    if (!button || !content) return;
    
    // Initial state
    if (button.getAttribute('aria-expanded') === 'true') {
      collapsible.classList.add('active');
      content.style.maxHeight = content.scrollHeight + 'px';
    } else {
      button.setAttribute('aria-expanded', 'false');
    }
    
    // Toggle functionality
    button.addEventListener('click', () => {
      const isExpanded = collapsible.classList.contains('active');
      
      // Toggle active class
      collapsible.classList.toggle('active');
      
      // Update aria-expanded attribute
      button.setAttribute('aria-expanded', !isExpanded);
      
      // Toggle content visibility
      if (!isExpanded) {
        content.style.maxHeight = content.scrollHeight + 'px';
      } else {
        content.style.maxHeight = '0';
      }
    });
    
    // Update maxHeight on window resize
    window.addEventListener('resize', () => {
      if (collapsible.classList.contains('active')) {
        content.style.maxHeight = 'none';
        setTimeout(() => {
          content.style.maxHeight = content.scrollHeight + 'px';
        }, 10);
      }
    });
  });
}