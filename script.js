document.addEventListener('DOMContentLoaded', function() {
    // Elementos essenciais
    const loader = document.querySelector('.loader');
    const body = document.body;
    
    if (!loader) return;
  
    body.classList.add('loading');
    loader.style.display = 'flex';
    loader.style.opacity = '1';
  
    function hideLoader() {
      loader.style.transition = 'opacity 0.5s ease, visibility 0.5s';
      loader.style.opacity = '0';
      loader.style.visibility = 'hidden';
      
      setTimeout(() => {
        loader.style.display = 'none';
        body.classList.remove('loading');
        void body.offsetHeight;
        console.log('Loader removido com sucesso');
      }, 500);
    }
  
    const onWindowLoad = () => {
      hideLoader();
      window.removeEventListener('load', onWindowLoad);
      console.log('Loader escondido pelo evento load');
    };
    window.addEventListener('load', onWindowLoad);
  
    const loadTimeout = setTimeout(() => {
      if (loader.style.display !== 'none') {
        hideLoader();
        console.warn('Loader escondido pelo timeout de segurança');
      }
    }, 5000);
  
    function checkCriticalAssets() {
      const criticalAssets = [...document.querySelectorAll('img, video, iframe')];
      if (criticalAssets.length === 0) return true;
      return criticalAssets.every(asset => {
        if (asset.tagName === 'IMG') {
          return asset.complete && asset.naturalHeight !== 0;
        }
        return true;
      });
    }
  
    const assetCheckInterval = setInterval(() => {
      if (checkCriticalAssets()) {
        clearInterval(assetCheckInterval);
        clearTimeout(loadTimeout);
        hideLoader();
        console.log('Loader escondido após carregar recursos críticos');
      }
    }, 300);
  
    const escapeHandler = (e) => {
      if (e.key === 'Escape') {
        clearTimeout(loadTimeout);
        clearInterval(assetCheckInterval);
        hideLoader();
        document.removeEventListener('keydown', escapeHandler);
        console.log('Loader escondido manualmente (ESC)');
      }
    };
    document.addEventListener('keydown', escapeHandler);
  
    if (navigator.connection) {
      navigator.connection.addEventListener('change', () => {
        if (navigator.connection.effectiveType === 'offline') {
          hideLoader();
        }
      });
    }
  });
  
  document.addEventListener('DOMContentLoaded', function() {
    const menuIcon = document.querySelector('.menu-icon');
    const menu = document.getElementById('menu');
    
    if (menuIcon && menu) {
      menuIcon.addEventListener('click', function() {
        this.classList.toggle('active');
        menu.classList.toggle('active');
        document.body.classList.toggle('no-scroll', menu.classList.contains('active'));
      });
  
      document.querySelectorAll('nav ul li a').forEach(link => {
        link.addEventListener('click', () => {
          if (menu.classList.contains('active')) {
            menu.classList.remove('active');
            menuIcon.classList.remove('active');
            document.body.classList.remove('no-scroll');
          }
        });
      });
    }
  
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      });
    });
  
    function highlightActiveMenu() {
      const sections = document.querySelectorAll('section');
      const navLinks = document.querySelectorAll('nav ul li a');
      
      sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= 150 && rect.bottom >= 150) {
          const id = section.getAttribute('id');
          navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${id}`) {
              link.classList.add('active');
            }
          });
        }
      });
    }
  
    window.addEventListener('scroll', highlightActiveMenu);
    highlightActiveMenu();
  });

  document.addEventListener('DOMContentLoaded', function() {
    // Controle de submenus no menu hamburguer
    document.querySelectorAll('.has-submenu > a').forEach(link => {
      link.addEventListener('click', function(e) {
        e.preventDefault(); // Evita o comportamento padrão
        const parent = this.parentElement;
  
        // Toggling do submenu
        parent.classList.toggle('active');
        
        // Fecha os outros submenus quando um submenu é aberto
        if (parent.classList.contains('active')) {
          document.querySelectorAll('.has-submenu').forEach(item => {
            if (item !== parent) {
              item.classList.remove('active');
            }
          });
        }
      });
    });
  
    // Fechar o menu se clicar fora do menu ou do botão hamburguer
    document.addEventListener('click', function(event) {
      const menu = document.getElementById('menu');
      const menuIcon = document.querySelector('.menu-icon');
      
      if (!menu.contains(event.target) && !menuIcon.contains(event.target)) {
        menu.classList.remove('active');
        document.body.classList.remove('no-scroll');
      }
    });
  });
  