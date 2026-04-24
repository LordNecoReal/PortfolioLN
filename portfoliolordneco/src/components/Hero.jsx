import React from 'react';
import './Hero.scss';

function Hero() {
  return (
    <section id="inicio" className="hero section-transition">
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

export default Hero;