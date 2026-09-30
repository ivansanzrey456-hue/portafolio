// src/components/NotFound.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { FiHome, FiAlertCircle, FiSun, FiMoon } from 'react-icons/fi';
import { FaGithub } from 'react-icons/fa';
import DottedOffsetButton from './DottedOffsetButton';
import '../styles/NotFound.css';

function NotFound() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const navigate = useNavigate();

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={`not-found-wrapper ${isDarkMode ? 'theme-dark' : 'theme-light'}`}>
      
      {/* Botón para cambiar de tema */}
      <button 
        className="theme-toggle-btn" 
        onClick={toggleTheme}
        title={isDarkMode ? "Cambiar a modo claro" : "Cambiar a modo oscuro"}
        aria-label="Toggle Theme"
      >
        {isDarkMode ? <FiSun size={20} /> : <FiMoon size={20} />}
      </button>

      <main className="not-found-container">
        
        {/* Lado izquierdo: Animación */}
        <div className="not-found-left">
          <div className="animation-card">
            <DotLottieReact
              src="https://lottie.host/a7beb1a4-d1fd-49e4-ac52-6f7ad50f2fbe/BsqgiB4qQx.json"
              loop
              autoplay
            />
          </div>
        </div>

        {/* Lado derecho: Texto y Botones */}
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

            {/* Botón "Volver al Inicio" con color dinámico de alta visibilidad */}
            <DottedOffsetButton
  label="Volver al Inicio"
  onClick={() => navigate('/')}
  addIcon={true}
  icon={{ 
    element: <FiHome />, 
    size: 18 
  }}
  colors={{
    // Fondo: Blanco en modo oscuro (#ffffff), Negro/Gris muy oscuro en modo claro (#0f172a)
    fill: isDarkMode ? "#ffffff" : "#0f172a",
    // Hover: Gris claro en modo oscuro, Negro puro en modo claro
    hoverFill: isDarkMode ? "#e2e8f0" : "#000000",
    // Texto: Negro en modo oscuro, Blanco en modo claro
    textColor: isDarkMode ? "#0f172a" : "#ffffff",
    hoverTextColor: isDarkMode ? "#0f172a" : "#ffffff"
  }}
  border={{
    // Borde a juego con el tema
    borderColor: isDarkMode ? "#ffffff" : "#0f172a",
    borderStyle: "solid",
    borderWidth: 2
  }}
  shadow={{
    // Sombra proyectada offset
    color: isDarkMode ? "#64748b" : "#94a3b8"
  }}
/>
          </div>

        </div>

      </main>
    </div>
  );
}

export default NotFound;