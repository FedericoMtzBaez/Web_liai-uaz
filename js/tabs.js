// Tabs functionality
export function setupTabs() {
  const tabButtons = document.querySelectorAll('.tab-btn');
  const tabPanels = document.querySelectorAll('.tab-panel');
  
  if (tabButtons.length === 0 || tabPanels.length === 0) return;
  
  tabButtons.forEach(button => {
    button.addEventListener('click', () => {
      // Get the target tab
      const targetTab = button.getAttribute('data-tab');
      const targetPanel = document.getElementById(`${targetTab}-panel`);
      
      // Remove active class from all buttons and panels
      tabButtons.forEach(btn => btn.classList.remove('active'));
      tabPanels.forEach(panel => panel.classList.remove('active'));
      
      // Add active class to clicked button and corresponding panel
      button.classList.add('active');
      targetPanel.classList.add('active');
    });
  });
  
  // Keyboard navigation for tabs
  const tabsHeader = document.querySelector('.tabs-header');
  if (tabsHeader) {
    tabsHeader.addEventListener('keydown', (e) => {
      // Get all tab buttons
      const buttons = Array.from(tabsHeader.querySelectorAll('.tab-btn'));
      const currentIndex = buttons.findIndex(btn => btn === document.activeElement);
      
      // Handle arrow keys
      switch (e.key) {
        case 'ArrowRight':
          e.preventDefault();
          const nextIndex = (currentIndex + 1) % buttons.length;
          buttons[nextIndex].focus();
          buttons[nextIndex].click();
          break;
        case 'ArrowLeft':
          e.preventDefault();
          const prevIndex = (currentIndex - 1 + buttons.length) % buttons.length;
          buttons[prevIndex].focus();
          buttons[prevIndex].click();
          break;
      }
    });
  }
}