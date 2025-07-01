// Filters functionality
export function setupFilters() {
  const filterButtons = document.querySelectorAll('.filter-btn');
  const filterItems = document.querySelectorAll('[data-category]');
  
  if (filterButtons.length === 0 || filterItems.length === 0) return;
  
  filterButtons.forEach(button => {
    button.addEventListener('click', () => {
      // Get selected filter
      const filter = button.getAttribute('data-filter');
      
      // Remove active class from all buttons
      filterButtons.forEach(btn => btn.classList.remove('active'));
      
      // Add active class to clicked button
      button.classList.add('active');
      
      // Filter items
      filterItems.forEach(item => {
        if (filter === 'all' || item.getAttribute('data-category') === filter) {
          item.style.display = '';
          item.classList.add('fade-in');
          setTimeout(() => {
            item.classList.remove('fade-in');
          }, 500);
        } else {
          item.style.display = 'none';
        }
      });
    });
  });
}