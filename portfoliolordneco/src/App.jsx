// App.jsx
import React, { useState, useEffect, useRef } from 'react';
import './App.css';

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    const savedMode = localStorage.getItem('darkMode');
    return savedMode !== null ? JSON.parse(savedMode) : true;
  });

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
    // Inicializa o áudio
    audioRef.current = new Audio('/musicas/Breath of Fire IV - A Warring God.mp3');
    audioRef.current.loop = true; // Faz a música repetir
    
    // Cleanup ao desmontar
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