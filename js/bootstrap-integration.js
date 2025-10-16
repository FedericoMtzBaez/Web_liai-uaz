// Bootstrap Integration - Asegurar compatibilidad entre Bootstrap y navegación personalizada

export function setupBootstrapIntegration() {
  // Prevenir que Bootstrap interfiera con nuestros dropdowns personalizados
  document.addEventListener('DOMContentLoaded', () => {
    // Deshabilitar dropdowns de Bootstrap en nuestro menú personalizado
    const customDropdowns = document.querySelectorAll('#header .dropdown');
    
    customDropdowns.forEach(dropdown => {
      // Prevenir que Bootstrap maneje estos dropdowns
      dropdown.addEventListener('click', (e) => {
        e.stopPropagation();
      });
      
      // Asegurar que nuestros estilos personalizados se mantengan
      const toggle = dropdown.querySelector('.dropdown-toggle');
      const menu = dropdown.querySelector('.dropdown-menu');
      
      if (toggle && menu) {
        // Remover cualquier clase de Bootstrap que pueda interferir
        toggle.classList.remove('dropdown-toggle');
        menu.classList.remove('dropdown-menu');
        
        // Agregar nuestras clases personalizadas
        toggle.classList.add('dropdown-toggle-custom');
        menu.classList.add('dropdown-menu-custom');
      }
    });
    
    // Asegurar que el menú móvil funcione correctamente
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navMenu = document.querySelector('.nav-menu');
    
    if (mobileMenuBtn && navMenu) {
      mobileMenuBtn.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        
        // Toggle del menú móvil
        navMenu.classList.toggle('active');
        document.body.classList.toggle('menu-open');
        
        // Actualizar aria-expanded
        const isExpanded = mobileMenuBtn.getAttribute('aria-expanded') === 'true';
        mobileMenuBtn.setAttribute('aria-expanded', !isExpanded);
      });
    }
    
    // Cerrar menú móvil al hacer clic fuera
    document.addEventListener('click', (e) => {
      if (navMenu && navMenu.classList.contains('active') && 
          !navMenu.contains(e.target) && 
          !mobileMenuBtn.contains(e.target)) {
        navMenu.classList.remove('active');
        document.body.classList.remove('menu-open');
        if (mobileMenuBtn) {
          mobileMenuBtn.setAttribute('aria-expanded', 'false');
        }
      }
    });
    
    // Cerrar menú móvil al hacer clic en un enlace
    const menuLinks = document.querySelectorAll('.nav-menu a');
    menuLinks.forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        document.body.classList.remove('menu-open');
        if (mobileMenuBtn) {
          mobileMenuBtn.setAttribute('aria-expanded', 'false');
        }
      });
    });
    
    // Asegurar que los estilos de Bootstrap no interfieran con nuestros componentes
    const style = document.createElement('style');
    style.textContent = `
      /* Prevenir interferencia de Bootstrap con nuestro menú */
      #header .dropdown-toggle-custom {
        background: none !important;
        border: none !important;
        padding: 0.5rem 1rem !important;
        font-size: 1.05rem !important;
        font-weight: 500 !important;
        border-radius: 6px !important;
        text-decoration: none !important;
        transition: background 0.2s, box-shadow 0.2s !important;
        color: #333 !important;
        display: flex !important;
        align-items: center !important;
        gap: 0.5rem !important;
      }
      
      #header .dropdown-toggle-custom:hover {
        background: #cc9933 !important;
        color: black !important;
        box-shadow: 0 2px 8px rgba(0,0,0,0.07) !important;
      }
      
      #header .dropdown-menu-custom {
        position: absolute !important;
        top: 100% !important;
        left: 0 !important;
        background: white !important;
        border: 1px solid #e0e0e0 !important;
        border-radius: 8px !important;
        box-shadow: 0 4px 12px rgba(0,0,0,0.15) !important;
        min-width: 200px !important;
        z-index: 1000 !important;
        display: none !important;
        padding: 0.5rem 0 !important;
        margin-top: 0.5rem !important;
        list-style: none !important;
        margin: 0 !important;
      }
      
      #header .dropdown-menu-custom li {
        display: block !important;
      }
      
      #header .dropdown-menu-custom a {
        display: block !important;
        padding: 0.75rem 1rem !important;
        color: #333 !important;
        text-decoration: none !important;
        transition: background 0.2s !important;
        border-radius: 0 !important;
        font-size: 0.95rem !important;
      }
      
      #header .dropdown-menu-custom a:hover {
        background: #f8f9fa !important;
        color: #cc9933 !important;
      }
    `;
    document.head.appendChild(style);
  });
}
