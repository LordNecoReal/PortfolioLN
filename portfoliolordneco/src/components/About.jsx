import React from 'react';
import './About.scss';

function About() {
  return (
    <section id="sobre" className="about section-transition">
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
            <a href="https://wa.me/5521982018145" target="_blank" rel="noopener noreferrer" className="contact-link whatsapp">
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;