// Main JavaScript file
import { setupCarousel } from './carousel.js';
import { setupNavigation } from './navigation.js';
import { setupTabs } from './tabs.js';
import { setupCollapsibles } from './collapsibles.js';
import { setupFilters } from './filters.js';
import { setupCounters } from './counters.js';
import { setupForms } from './forms.js';
import { setupAnimations } from './animations.js';
import { setupBootstrapIntegration } from './bootstrap-integration.js';

// DOM Content Loaded Event
document.addEventListener('DOMContentLoaded', () => {
  setupCarousel();
  setupNavigation();
  setupTabs();
  setupCollapsibles();
  setupFilters();
  setupCounters();
  setupForms();
  setupAnimations();
  setupBootstrapIntegration();
});