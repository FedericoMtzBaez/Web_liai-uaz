// Navigation functionality
export function setupNavigation() {
  const header = document.getElementById('header');
  const navMenu = document.querySelector('.nav-menu');
  const menuBtn = document.querySelector('.mobile-menu-btn');
  const menuLinks = document.querySelectorAll('.nav-menu a');
  
  // Manejar menús desplegables
  let currentOpenDropdown = null;
  let closeTimeout = null;
  
  document.querySelectorAll('.dropdown').forEach(dropdown => {
    const toggle = dropdown.querySelector('.dropdown-toggle');
    const menu = dropdown.querySelector('.dropdown-menu');
    let isOpen = false;
    
    // Función para cerrar el menú
    const closeMenu = () => {
      if (closeTimeout) {
        clearTimeout(closeTimeout);
        closeTimeout = null;
      }
      menu.classList.remove('show');
      dropdown.classList.remove('open');
      isOpen = false;
      if (currentOpenDropdown === dropdown) {
        currentOpenDropdown = null;
      }
    };
    
    // Función para abrir el menú
    const openMenu = () => {
      // Limpiar cualquier timeout pendiente
      if (closeTimeout) {
        clearTimeout(closeTimeout);
        closeTimeout = null;
      }
      
      // Abrir este menú inmediatamente
      menu.classList.add('show');
      dropdown.classList.add('open');
      isOpen = true;
      currentOpenDropdown = dropdown;
      
      // Ajustar posición si está cerca del borde inferior (sin delay)
      requestAnimationFrame(() => {
        const rect = menu.getBoundingClientRect();
        if (rect.bottom > window.innerHeight) {
          menu.style.top = 'auto';
          menu.style.bottom = '100%';
          menu.style.marginTop = '0';
          menu.style.marginBottom = '0.5rem';
        } else {
          menu.style.top = '100%';
          menu.style.bottom = 'auto';
          menu.style.marginTop = '0.5rem';
          menu.style.marginBottom = '0';
        }
      });
    };
    
    // Función para manejar el toggle del menú
    const handleToggle = (e) => {
      e.preventDefault();
      e.stopPropagation();
      
      // Cerrar inmediatamente cualquier otro dropdown abierto
      if (currentOpenDropdown && currentOpenDropdown !== dropdown) {
        const currentMenu = currentOpenDropdown.querySelector('.dropdown-menu');
        currentMenu.classList.remove('show');
        currentOpenDropdown.classList.remove('open');
        currentOpenDropdown = null;
      }
      
      // Toggle del menú actual
      if (isOpen) {
        closeMenu();
      } else {
        openMenu();
      }
    };
    
    // Solo usar click para evitar conflictos
    toggle.addEventListener('click', handleToggle);
    
    // Prevenir que el clic en el menú lo cierre
    menu.addEventListener('click', (e) => {
      e.stopPropagation();
    });
    
    // Cerrar menú al hacer clic fuera
    document.addEventListener('click', (e) => {
      // Solo cerrar si el clic no es en el dropdown actual
      if (!dropdown.contains(e.target) && isOpen) {
        closeMenu();
      }
    });
    
    // Cerrar menú al hacer clic en un enlace del menú
    menu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        closeMenu();
      });
    });
    
    // Mantener el menú abierto cuando se hace hover sobre él
    dropdown.addEventListener('mouseenter', () => {
      if (closeTimeout) {
        clearTimeout(closeTimeout);
        closeTimeout = null;
      }
    });
    
    // Cerrar el menú cuando se sale del dropdown (con delay)
    dropdown.addEventListener('mouseleave', () => {
      if (isOpen) {
        closeTimeout = setTimeout(() => {
          closeMenu();
        }, 300); // 300ms de delay
      }
    });
    
  });
  
  // Cerrar menús al hacer scroll
  window.addEventListener('scroll', () => {
    document.querySelectorAll('.dropdown').forEach(dropdown => {
      dropdown.querySelector('.dropdown-menu').classList.remove('show');
      dropdown.classList.remove('open');
    });
    currentOpenDropdown = null;
    
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });
  
  // Ajustar menús en redimensionamiento
  window.addEventListener('resize', () => {
    if (window.innerWidth <= 992) {
      document.querySelectorAll('.dropdown').forEach(dropdown => {
        dropdown.querySelector('.dropdown-menu').classList.remove('show');
        dropdown.classList.remove('open');
      });
      currentOpenDropdown = null;
    }
  });
  
  // Mobile menu toggle
  if (menuBtn) {
    menuBtn.addEventListener('click', () => {
      navMenu.classList.toggle('active');
      document.body.classList.toggle('menu-open');
      
      // Toggle aria-expanded attribute
      const isExpanded = menuBtn.getAttribute('aria-expanded') === 'true';
      menuBtn.setAttribute('aria-expanded', !isExpanded);
    });
  }
  
  // Close menu when clicking outside
  document.addEventListener('click', (e) => {
    if (navMenu && navMenu.classList.contains('active') && 
        !navMenu.contains(e.target) && 
        !menuBtn.contains(e.target)) {
      navMenu.classList.remove('active');
      document.body.classList.remove('menu-open');
      menuBtn.setAttribute('aria-expanded', 'false');
    }
  });
  
  // Close menu when clicking on a link
  menuLinks.forEach(link => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('active');
      document.body.classList.remove('menu-open');
      if (menuBtn) menuBtn.setAttribute('aria-expanded', 'false');
    });
  });
  
  // Smooth scrolling for navigation links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      
      const targetElement = document.querySelector(targetId);
      if (!targetElement) return;
      
      const headerOffset = header.offsetHeight;
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      
      // Update active link
      menuLinks.forEach(link => link.classList.remove('active'));
      this.classList.add('active');
    });
  });
  
  // Update active menu item on scroll
  const sections = document.querySelectorAll('section[id]');
  
  window.addEventListener('scroll', () => {
    let scrollPosition = window.scrollY + header.offsetHeight + 50;
    
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      const sectionId = section.getAttribute('id');
      
      if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
        menuLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${sectionId}`) {
            link.classList.add('active');
          }
        });
      }
    });
    
    // Handle hero section specially
    if (scrollPosition < sections[0].offsetTop + sections[0].offsetHeight) {
      menuLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === '#hero') {
          link.classList.add('active');
        }
      });
    }
  });
}