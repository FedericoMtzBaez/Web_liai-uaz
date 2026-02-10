// Main JavaScript file
import { setupCarousel } from './carousel.js';
import { setupNavigation } from './navigation.js';
import { setupTabs } from './tabs.js';
import { setupCollapsibles } from './collapsibles.js';
import { setupForms } from './forms.js';
import { setupAnimations } from './animations.js';
import { setupBanners } from './banners.js';

// DOM Content Loaded Event
document.addEventListener('DOMContentLoaded', () => {
  setupCarousel();
  setupNavigation();
  setupTabs();
  setupCollapsibles();
  setupForms();
  setupAnimations();
  setupBanners();
});