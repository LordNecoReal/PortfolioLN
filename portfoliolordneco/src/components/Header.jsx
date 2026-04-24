import React, { useState, useEffect, useRef } from 'react';
import './Header.scss';

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
        audioRef.current.play().catch(error => console.log('Erro:', error));
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
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="header">
      <div className="container header-container">
        <div className="logo">
          <span className="logo-text gradient-title">Portfólio Lord Neco</span>
        </div>
        <nav className="nav">
          <button className={`nav-link ${activeSection === 'inicio' ? 'active' : ''}`} onClick={() => scrollToSection('inicio')}>Inicio</button>
          <button className={`nav-link ${activeSection === 'sobre' ? 'active' : ''}`} onClick={() => scrollToSection('sobre')}>Sobre</button>
          <button className={`nav-link ${activeSection === 'projetos' ? 'active' : ''}`} onClick={() => scrollToSection('projetos')}>Projetos</button>
        </nav>
        <div className="header-controls">
          <button className="music-player" onClick={toggleMusic}>
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

export default Header;