import React from 'react';
import './SplashScreen.scss';

function SplashScreen() {
  return (
    <div className="splash-screen">
      <div className="splash-content">
        <div className="splash-icons">
          <span className="splash-icon rocket">🚀</span>
          <span className="splash-icon joystick">🎮</span>
        </div>
        <div className="splash-logo">
  <span className="splash-text">Portfólio</span>  {/* Antes era "portfolio" */}
  <span className="splash-name">Lord Neco</span>
</div>

        {/* Loader Pacman Corrigido - Boca mexendo */}
        <div className="pacman-loader">
          <div className="pacman-track">
            <div className="pacman-moving">
              <div className="pacman">
                <div className="pacman-eye"></div>
              </div>
            </div>
            <div className="dots-line">
              <span className="dot"></span>
              <span className="dot"></span>
              <span className="dot"></span>
              <span className="dot"></span>
              <span className="dot"></span>
              <span className="dot"></span>
              <span className="dot"></span>
              <span className="dot"></span>
              <span className="dot"></span>
            </div>
          </div>
        </div>

        <p className="splash-subtitle">Carregando experiências digitais...</p>
      </div>
    </div>
  );
}

export default SplashScreen;