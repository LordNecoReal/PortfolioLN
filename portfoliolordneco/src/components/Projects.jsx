import React, { useState } from 'react';
import './Projects.scss';

function Projects() {
  const [imageErrors, setImageErrors] = useState({});

  const projects = [
    {
      id: 1,
      name: 'Desafio Final Connect',
      description: 'Projeto final do curso Connect, um site completo com funcionalidades modernas e design responsivo.',
      image: '/imagensprojetos/desafiofinal.png',
      fallback: '🚀',
      githubLink: 'https://github.com/LordNecoReal/DesafioFinalConnectOswaldo',
      liveLink: 'https://desafiofinalconnectoswaldo.vercel.app/'
    },
    {
      id: 2,
      name: 'Calculadora Rock',
      description: 'Uma calculadora temática de rock com design estilizado e funcionalidades completas de cálculos matemáticos.',
      image: '/imagensprojetos/calculadorarock.png',
      fallback: '🎸',
      githubLink: 'https://github.com/LordNecoReal/calculadoraRock',
      liveLink: 'https://calculadorarock.vercel.app/'
    },
    {
      id: 3,
      name: 'Árvore Natalina',
      description: 'Um projeto festivo com animações interativas de árvore de Natal, ideal para celebrações e decorações digitais.',
      image: '/imagensprojetos/arvorenatalina.png',
      fallback: '🎄',
      githubLink: 'https://github.com/LordNecoReal/arvorenatalina2025',
      liveLink: 'https://arvorenatalina2025.vercel.app/'
    },
    {
      id: 4,
      name: 'Encanto das Bebidas',
      description: 'Plataforma dedicada ao mundo das bebidas, com catálogo interativo e informações sobre diferentes tipos de drinks.',
      image: '/imagensprojetos/encantodasbebidas.png',
      fallback: '🍹',
      githubLink: 'https://github.com/LordNecoReal/EncantodasBebidas',
      liveLink: 'https://encantodasbebidas.vercel.app/'
    },
    {
      id: 5,
      name: 'Encantos do Lord Neco',
      description: 'Site pessoal mostrando os encantos e projetos especiais do Lord Neco, com design único e interativo.',
      image: '/imagensprojetos/encantosdolord.png',
      fallback: '✨',
      githubLink: 'https://github.com/LordNecoReal/EncantosDoLordNeco',
      liveLink: 'https://encantosdolordneco.vercel.app/'
    },
    {
      id: 6,
      name: 'Pet Adopt',
      description: 'Plataforma de adoção de pets conectando animais necessitados a lares amorosos com sistema de busca e filtros.',
      image: '/imagensprojetos/petadopt.png',
      fallback: '🐾',
      githubLink: 'https://github.com/LordNecoReal/petAdopt',
      liveLink: 'https://petadopt.vercel.app/'
    },
    {
      id: 7,
      name: 'Recicla Tech',
      description: 'Iniciativa sustentável para reciclagem de eletrônicos, conscientizando sobre descarte correto e pontos de coleta.',
      image: '/imagensprojetos/reciclatech.png',
      fallback: '♻️',
      githubLink: 'https://github.com/LordNecoReal/reciclatechlord',
      liveLink: 'https://reciclatechlord.vercel.app/'
    },
    {
      id: 8,
      name: 'Verde Ação',
      description: 'Projeto ambiental com foco em ações sustentáveis, plantio de árvores e preservação da natureza.',
      image: '/imagensprojetos/verdeacao.png',
      fallback: '🌿',
      githubLink: 'https://github.com/LordNecoReal/VerdeAcaoLord',
      liveLink: 'https://verdeacaolord.vercel.app/'
    }
  ];

  const handleImageError = (projectId) => {
    setImageErrors(prev => ({ ...prev, [projectId]: true }));
  };

  return (
    <section id="projetos" className="projects section-transition">
      <div className="container">
        <h2 className="section-title">Projetos</h2>
        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              <div className="project-image">
                {!imageErrors[project.id] ? (
                  <img 
                    src={project.image} 
                    alt={project.name}
                    className="project-img"
                    onError={() => handleImageError(project.id)}
                  />
                ) : (
                  <span className="project-emoji">{project.fallback}</span>
                )}
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

export default Projects;