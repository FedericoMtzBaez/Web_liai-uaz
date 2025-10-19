// Navigation functionality
export function setupNavigation() {
  const header = document.getElementById('header');
  const navMenu = document.querySelector('.nav-menu');
  const menuLinks = document.querySelectorAll('.nav-menu a');
  
  function setActiveDropdownByPage() {
    const currentUrl = window.location.href;
    
    if (currentUrl.includes('cuerpo_academico')) {
      const secondDropdown = document.querySelector('.dropdown:nth-child(2) .dropdown-toggle');
      if (secondDropdown) secondDropdown.classList.add('active');
    } else {
      const firstDropdown = document.querySelector('.dropdown:first-child .dropdown-toggle');
      if (firstDropdown) firstDropdown.classList.add('active');
    }
  }

  setActiveDropdownByPage();
  
  let currentOpenDropdown = null;
  let closeTimeout = null;
  
  document.querySelectorAll('.dropdown').forEach(dropdown => {
    const toggle = dropdown.querySelector('.dropdown-toggle');
    const menu = dropdown.querySelector('.dropdown-menu');
    let isOpen = false;
    
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
    
    toggle.addEventListener('click', handleToggle);
    
    menu.addEventListener('click', (e) => {
      e.stopPropagation();
    });
    
    document.addEventListener('click', (e) => {
      if (!dropdown.contains(e.target) && isOpen) {
        closeMenu();
      }
    });
    
    menu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        closeMenu();
      });
    });
    
    dropdown.addEventListener('mouseenter', () => {
      if (closeTimeout) {
        clearTimeout(closeTimeout);
        closeTimeout = null;
      }
    });
    
    dropdown.addEventListener('mouseleave', () => {
      if (isOpen) {
        closeTimeout = setTimeout(() => {
          closeMenu();
        }, 300);
      }
    });
    
  });
  
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
  
  window.addEventListener('resize', () => {
    if (window.innerWidth <= 992) {
      document.querySelectorAll('.dropdown').forEach(dropdown => {
        dropdown.querySelector('.dropdown-menu').classList.remove('show');
        dropdown.classList.remove('open');
      });
      currentOpenDropdown = null;
    }
  });
    
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
    });
  });
  
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });
}