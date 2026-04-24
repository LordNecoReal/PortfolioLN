import React, { useState } from 'react';
import './TechStack.scss';

function TechStack() {
  const technologies = [
    { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg', color: '#61DAFB' },
    { name: 'Chrome', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/chrome/chrome-original.svg', color: '#4285F4' },
    { name: 'CSS3', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg', color: '#1572B6' },
    { name: 'HTML5', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg', color: '#E34F26' },
    { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg', color: '#F7DF1E' },
    { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg', color: '#339933' },
    { name: 'Bash', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bash/bash-original.svg', color: '#4EAA25' },
    { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg', color: '#F05032' },
    { name: 'GitHub', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg', color: '#181717' },
    { name: 'Google', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg', color: '#4285F4' },
    { name: 'NPM', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg', color: '#CB3837' },
    { name: 'SQLite', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original.svg', color: '#003B57' },
    { name: 'Trello', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/trello/trello-plain.svg', color: '#0052CC' },
    { name: 'VSCode', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg', color: '#007ACC' }
  ];

  const [hoveredTech, setHoveredTech] = useState(null);

  return (
    <section className="tech-stack section-transition">
      <div className="container">
        <h2 className="section-title">Tecnologias</h2>
        <div className="tech-grid">
          {technologies.map((tech) => (
            <div
              key={tech.name}
              className="tech-card"
              onMouseEnter={() => setHoveredTech(tech.name)}
              onMouseLeave={() => setHoveredTech(null)}
            >
              <div className="tech-icon-wrapper">
                <img 
                  src={tech.icon} 
                  alt={tech.name}
                  className={`tech-icon-img ${tech.name === 'GitHub' ? 'github-icon' : ''}`}
                />
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

export default TechStack;