// App.jsx
import React, { useState, useEffect, useRef } from 'react';
import './App.css';

// Componente de Splash Screen
function SplashScreen({ onComplete }) {
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeOut(true);
      setTimeout(onComplete, 1000);
    }, 3000);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div className={`splash-screen ${fadeOut ? 'fade-out' : ''}`}>
      <div className="splash-content">
        <div className="splash-logo">
          <span className="splash-icon">🎧</span>
          <span className="splash-icon">💻</span>
          <span className="splash-icon">🚀</span>
        </div>
        <h1 className="splash-title">Lord Neco</h1>
        <div className="splash-subtitle">Eterno Estudante</div>
        <div className="splash-loader">
          <div className="loader-bar"></div>
        </div>
        <p className="splash-text">Carregando experiência...</p>
      </div>
    </div>
  );
}

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    const savedMode = localStorage.getItem('darkMode');
    return savedMode !== null ? JSON.parse(savedMode) : true;
  });
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
    if (darkMode) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const handleSplashComplete = () => {
    setShowSplash(false);
  };

  if (showSplash) {
    return <SplashScreen onComplete={handleSplashComplete} />;
  }

  return (
    <div className={`app ${darkMode ? 'dark' : 'light'}`}>
      <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <main>
        <Hero />
        <About />
        <TechStack />
        <Projects />
      </main>
      <Footer />
    </div>
  );
}

function Header({ darkMode, toggleDarkMode }) {
  const [activeSection, setActiveSection] = useState('inicio');
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    audioRef.current = new Audio('/musicas/Breath of Fire IV - A Warring God.mp3');
    audioRef.current.loop = true;
    
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  const toggleMusic = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play().catch(error => {
          console.log('Erro ao reproduzir música:', error);
        });
      }
      setIsPlaying(!isPlaying);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['inicio', 'sobre', 'projetos'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId);
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="header">
      <div className="container header-container">
        <div className="logo">
          <span className="logo-text">Portfolio Lord Neco</span>
        </div>
        <nav className="nav">
          <button 
            className={`nav-link ${activeSection === 'inicio' ? 'active' : ''}`}
            onClick={() => scrollToSection('inicio')}
          >
            Inicio
          </button>
          <button 
            className={`nav-link ${activeSection === 'sobre' ? 'active' : ''}`}
            onClick={() => scrollToSection('sobre')}
          >
            Sobre
          </button>
          <button 
            className={`nav-link ${activeSection === 'projetos' ? 'active' : ''}`}
            onClick={() => scrollToSection('projetos')}
          >
            Projetos
          </button>
        </nav>
        <div className="header-controls">
          <button className="music-player" onClick={toggleMusic} title={isPlaying ? 'Pausar música' : 'Tocar música'}>
            {isPlaying ? '🎵' : '🎧'}
            <span className="music-text">{isPlaying ? 'Tocando' : 'Tocar Música'}</span>
          </button>
          <button className="theme-toggle" onClick={toggleDarkMode}>
            {darkMode ? '☀️' : '🌙'}
          </button>
        </div>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="inicio" className="hero">
      <div className="container">
        <div className="hero-content">
          <div className="hero-image">
            <img 
              src="/oswaldovisitalight.jpeg" 
              alt="Oswaldo Lord Neco" 
              className="profile-image"
            />
          </div>
          <h1 className="hero-name">Oswaldo Lord Neco</h1>
          <p className="hero-title">Desenvolvedor & Eterno Estudante</p>
          <p className="hero-description">
            Em busca constante de conhecimento e evolução. Cada dia é uma nova oportunidade para aprender e crescer.
          </p>
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="sobre" className="about">
      <div className="container">
        <h2 className="section-title">Sobre Mim</h2>
        <div className="about-content">
          <p className="about-text">
            Sou apaixonado pela área da informática e tecnologia desde a infância. Comecei com o pacote Office 
            e hoje em dia estudo a área da programação. Somos eternos estudantes já que o conhecimento nunca 
            acaba e todo dia é um novo aprendizado.
          </p>
          <div className="contact-links">
            <a href="https://github.com/LordNecoReal" target="_blank" rel="noopener noreferrer" className="contact-link github">
              GitHub
            </a>
            <a href="https://linkedin.com/in/oswaldo-lord-neco" target="_blank" rel="noopener noreferrer" className="contact-link linkedin">
              LinkedIn
            </a>
            <a href="https://wa.me/5511999999999" target="_blank" rel="noopener noreferrer" className="contact-link whatsapp">
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function TechStack() {
  const technologies = [
    { name: 'React', icon: '⚛️', colorIcon: '🔵', color: '#61DAFB' },
    { name: 'HTML', icon: '🌐', colorIcon: '🟠', color: '#E34F26' },
    { name: 'CSS', icon: '🎨', colorIcon: '🔷', color: '#1572B6' },
    { name: 'JavaScript', icon: '📜', colorIcon: '🟡', color: '#F7DF1E' },
    { name: 'GitHub', icon: '🐙', colorIcon: '⚫', color: '#181717' },
    { name: 'SQLite', icon: '🗄️', colorIcon: '🔵', color: '#003B57' }
  ];

  const [hoveredTech, setHoveredTech] = useState(null);

  return (
    <section className="tech-stack">
      <div className="container">
        <h2 className="section-title">Tecnologias</h2>
        <div className="tech-grid">
          {technologies.map((tech) => (
            <div
              key={tech.name}
              className="tech-card"
              onMouseEnter={() => setHoveredTech(tech.name)}
              onMouseLeave={() => setHoveredTech(null)}
              style={{
                '--tech-color': tech.color
              }}
            >
              <div className="tech-icon">
                {hoveredTech === tech.name ? tech.colorIcon : tech.icon}
              </div>
              {hoveredTech === tech.name && (
                <span className="tech-name">{tech.name}</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Projects() {
  const projects = [
    {
      id: 1,
      name: 'Desafio Final Connect',
      description: 'Projeto final do curso Connect, um site completo com funcionalidades modernas e design responsivo.',
      image: '🚀',
      githubLink: 'https://github.com/LordNecoReal/DesafioFinalConnectOswaldo',
      liveLink: 'https://desafiofinalconnectoswaldo.vercel.app/'
    },
    {
      id: 2,
      name: 'Calculadora Rock',
      description: 'Uma calculadora temática de rock com design estilizado e funcionalidades completas de cálculos matemáticos.',
      image: '🎸',
      githubLink: 'https://github.com/LordNecoReal/calculadoraRock',
      liveLink: 'https://calculadorarock.vercel.app/'
    },
    {
      id: 3,
      name: 'Árvore Natalina',
      description: 'Um projeto festivo com animações interativas de árvore de Natal, ideal para celebrações e decorações digitais.',
      image: '🎄',
      githubLink: 'https://github.com/LordNecoReal/arvorenatalina2025',
      liveLink: 'https://arvorenatalina2025.vercel.app/'
    },
    {
      id: 4,
      name: 'Encanto das Bebidas',
      description: 'Plataforma dedicada ao mundo das bebidas, com catálogo interativo e informações sobre diferentes tipos de drinks.',
      image: '🍹',
      githubLink: 'https://github.com/LordNecoReal/EncantodasBebidas',
      liveLink: 'https://encantodasbebidas.vercel.app/'
    },
    {
      id: 5,
      name: 'Encantos do Lord Neco',
      description: 'Site pessoal mostrando os encantos e projetos especiais do Lord Neco, com design único e interativo.',
      image: '✨',
      githubLink: 'https://github.com/LordNecoReal/EncantosDoLordNeco',
      liveLink: 'https://encantosdolordneco.vercel.app/'
    },
    {
      id: 6,
      name: 'Pet Adopt',
      description: 'Plataforma de adoção de pets conectando animais necessitados a lares amorosos com sistema de busca e filtros.',
      image: '🐾',
      githubLink: 'https://github.com/LordNecoReal/petAdopt',
      liveLink: 'https://petadopt.vercel.app/'
    },
    {
      id: 7,
      name: 'Recicla Tech',
      description: 'Iniciativa sustentável para reciclagem de eletrônicos, conscientizando sobre descarte correto e pontos de coleta.',
      image: '♻️',
      githubLink: 'https://github.com/LordNecoReal/reciclatechlord',
      liveLink: 'https://reciclatechlord.vercel.app/'
    },
    {
      id: 8,
      name: 'Verde Ação',
      description: 'Projeto ambiental com foco em ações sustentáveis, plantio de árvores e preservação da natureza.',
      image: '🌿',
      githubLink: 'https://github.com/LordNecoReal/VerdeAcaoLord',
      liveLink: 'https://verdeacaolord.vercel.app/'
    }
  ];

  return (
    <section id="projetos" className="projects">
      <div className="container">
        <h2 className="section-title">Projetos</h2>
        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              <div className="project-image">
                <span className="project-emoji">{project.image}</span>
              </div>
              <div className="project-info">
                <h3 className="project-name">{project.name}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-buttons">
                  <a 
                    href={project.githubLink} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="project-button github-btn"
                  >
                    📦 GitHub
                  </a>
                  <a 
                    href={project.liveLink} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="project-button live-btn"
                  >
                    🌐 Ver Site
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <p className="footer-text">
          © 2026 Todos os direitos reservados | Criado por Oswaldo Lord Neco
        </p>
      </div>
    </footer>
  );
}

export default App;