const translations = {
    pt: {
    // Hero
        homeTitle: "Alexei Goldenberg",
            homeSubtitle: "Ator | Diretor | Dramaturgo",
            aboutTitle: "Sobre",
            resumeTitle: "Currículo",
            measurementsTitle: "Medidas",
            worksTitle: "Trabalhos Realizados",
        },
        
        en: {
            homeTitle: "Alexei Goldenberg",
            homeSubtitle: "Actor | Director | Playwright",
            aboutTitle: "About",
            resumeTitle: "Resume",
            measurementsTitle: "Measurements",
            worksTitle: "Work Experience",
        
      // Menu  
      menuAbout: "Sobre",
      menuResume: "Currículo",
      menuMedia: "Mídia",
      menuGallery: "Galeria",
      menuWorkshops: "Workshops",
      menuContact: "Contato",
      
      // Seções
      aboutBio: "Olá, sou Alexei Goldenberg , ator, diretor, professor e dramaturgo com 9 anos de experiência em teatro, cinema e TV. Especializado em técnicas vocais e de expressão corporal, misturando exercícios de estudiosos como Stanislavski, Meyerhold e Meisner, busco sempre por novos trabalhos desafiadores, seja atuando, dirigindo ou ensinando. ",
      measurementsTitle: "Medidas ",
      // Continue com todos os textos...
    },
    en: {
      // Menu
      menuAbout: "About",
      menuResume: "Resume",
      menuMedia: "Media",
      menuGallery: "Gallery",
      menuWorkshops: "Workshops",
      menuContact: "Contact",
      
      // Seções
      aboutBio: "Hello, I'm Alexei Goldenberg...",
      measurementsTitle: "Physical Measurements",
      // Continue com todos os textos...
    }
  };

  let currentLanguage = 'pt'; // Idioma padrão

function changeLanguage(lang) {
  currentLanguage = lang;
  applyTranslations();
  localStorage.setItem('portfolioLanguage', lang); // Salva a preferência
}

function applyTranslations() {
  const trans = translations[currentLanguage];
  
  // Exemplo de elementos a traduzir:
  document.querySelector('#home h1').textContent = trans.homeTitle;
  document.querySelector('#home p').textContent = trans.homeSubtitle;
  document.querySelector('.cta-button').textContent = trans.ctaButton;
  document.querySelector('#about h2').textContent = trans.aboutTitle;
  // Adicione todos os elementos que precisam ser traduzidos...
}

// Verifica preferência salva ou idioma do navegador
document.addEventListener('DOMContentLoaded', () => {
  const savedLang = localStorage.getItem('portfolioLanguage');
  const browserLang = navigator.language.slice(0, 2);
  
  if (savedLang) {
    changeLanguage(savedLang);
  } else if (browserLang === 'pt' || browserLang === 'en') {
    changeLanguage(browserLang);
  }
});

// Atualize a função changeLanguage para destacar o botão ativo
function changeLanguage(lang) {
    currentLanguage = lang;
    applyTranslations();
    localStorage.setItem('portfolioLanguage', lang);
    
    // Atualiza a classe 'active' nos botões
    document.querySelectorAll('.language-switcher button').forEach(btn => {
      btn.classList.toggle('active', btn.textContent === lang.toUpperCase());
    });
  }

  function applyTranslations() {
    const trans = translations[currentLanguage];
    document.querySelectorAll('[data-translate]').forEach(el => {
      const key = el.getAttribute('data-translate');
      el.textContent = trans[key];
    });
  }

  