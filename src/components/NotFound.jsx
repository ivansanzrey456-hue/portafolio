// src/components/NotFound.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { FiHome, FiAlertCircle, FiSun, FiMoon } from 'react-icons/fi';
import { FaGithub } from 'react-icons/fa';
import DottedOffsetButton from './DottedOffsetButton';
import '../styles/NotFound.css';

function NotFound() {
  const [isDarkMode, setIsDarkMode] = useState(true);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={`not-found-wrapper ${isDarkMode ? 'theme-dark' : 'theme-light'}`}>
      
      {/* Botón para cambiar el tema (Claro/Oscuro) */}
      <button 
        className="theme-toggle-btn" 
        onClick={toggleTheme}
        title={isDarkMode ? "Cambiar a modo claro" : "Cambiar a modo oscuro"}
        aria-label="Toggle Theme"
      >
        {isDarkMode ? <FiSun size={20} /> : <FiMoon size={20} />}
      </button>

      <main className="not-found-container">
        
        {/* Lado izquierdo: Animación Lottie */}
        <div className="not-found-left">
          <div className="animation-card">
            <DotLottieReact
              src="https://lottie.host/a7beb1a4-d1fd-49e4-ac52-6f7ad50f2fbe/BsqgiB4qQx.json"
              loop
              autoplay
            />
          </div>
        </div>

        {/* Lado derecho: Texto informativo y Botones */}
        <div className="not-found-right">
          
          <h1 className="not-found-code">404</h1>

          <div className="not-found-badge">
            <FiAlertCircle size={16} />
            <span>Página no encontrada</span>
          </div>

          <h2 className="not-found-title">Parece que te has perdido en el código.</h2>

          <p className="not-found-description">
            Hemos rastreado cada ruta disponible y esta página ya no está transmitiendo. 
            Regresa a la base o utiliza los botones a continuación.
          </p>

          <div className="not-found-actions">

            {/* El componente Link asegura la redirección a la raíz (/) */}
            <Link to="/" style={{ textDecoration: 'none' }}>
              <DottedOffsetButton
                label="Volver al Inicio"
                addIcon={true}
                icon={{ 
                  element: <FiHome />, 
                  size: 18 
                }}
                colors={{
                  fill: isDarkMode ? "#ffffff" : "#0f172a",
                  hoverFill: isDarkMode ? "#e2e8f0" : "#000000",
                  textColor: isDarkMode ? "#0f172a" : "#ffffff",
                  hoverTextColor: isDarkMode ? "#0f172a" : "#ffffff"
                }}
                border={{
                  borderColor: isDarkMode ? "#ffffff" : "#0f172a",
                  borderStyle: "solid",
                  borderWidth: 2
                }}
                shadow={{
                  color: isDarkMode ? "#64748b" : "#94a3b8"
                }}
              />
            </Link>

          </div>

        </div>

      </main>
    </div>
  );
}

export default NotFound;