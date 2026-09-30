import { useState } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa"; // Importamos FaLinkedin
import React from 'react';
import DottedOffsetButton from './DottedOffsetButton';
import {
    HiOutlineDocumentArrowDown,
    HiOutlineBars3,
    HiOutlineXMark
} from "react-icons/hi2";

import "../styles/navbar.css";

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    // Estado para rastrear qué enlace está activo
    const [activeSection, setActiveSection] = useState("experience");

    const handleNavClick = (sectionId) => {
        setActiveSection(sectionId);
        setMenuOpen(false);
    };

    return (
        <header className="navbar">
            <div className="navbar-container">

                <a
                    href="#hero"
                    className="navbar-logo"
                    onClick={() => setMenuOpen(false)}
                >
                    <div className="logo-symbol">&lt;ISR/&gt;</div>
                    <div className="logo-text">
                        <h3>Ivan Sanchez Reyes</h3>
                        <span>Full Stack Developer</span>
                    </div>
                </a>

                <nav className={`navbar-links ${menuOpen ? "navbar-links-open" : ""}`}>
                    <a 
                        href="#experience" 
                        className={`nav-item ${activeSection === 'experience' ? 'active' : ''}`}
                        onClick={() => handleNavClick('experience')}
                    >
                        Trayectoria
                    </a>
                    <a 
                        href="#solutions" 
                        className={`nav-item ${activeSection === 'solutions' ? 'active' : ''}`}
                        onClick={() => handleNavClick('solutions')}
                    >
                        Soluciones
                    </a>
                    <a 
                        href="#technologies" 
                        className={`nav-item ${activeSection === 'technologies' ? 'active' : ''}`}
                        onClick={() => handleNavClick('technologies')}
                    >
                        Tecnologías
                    </a>
                    <a 
                        href="#contact" 
                        className={`nav-item ${activeSection === 'contact' ? 'active' : ''}`}
                        onClick={() => handleNavClick('contact')}
                    >
                        Contacto
                    </a>
                    
                    {/* Enlaces móviles */}
                    <a
                        href="https://www.linkedin.com/in/ivansanchezreyes/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="navbar-mobile-link"
                        onClick={() => setMenuOpen(false)}
                    >
                        <FaLinkedin /> LinkedIn
                    </a>

                    <a
                        href="https://github.com/ivansanzrey456-hue"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="navbar-mobile-link"
                        onClick={() => setMenuOpen(false)}
                    >
                        <FaGithub /> GitHub
                    </a>
                    
                    <a
                        href="/CV-Sanchez_Reyes_Ivan.pdf"
                        download="CV-Sanchez_Reyes_Ivan.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="navbar-mobile-cv"
                        onClick={() => setMenuOpen(false)}
                    >
                        <HiOutlineDocumentArrowDown /> Descargar CV
                    </a>
                </nav>

                <div className="navbar-actions">
  
  {/* Ícono de LinkedIn */}
  <a
    href="https://www.linkedin.com/in/ivansanchezreyes/"
    target="_blank"
    rel="noopener noreferrer"
    title="LinkedIn"
    aria-label="Perfil de LinkedIn"
    className="navbar-icon-btn text-[#0a66c2]"
  >
    <FaLinkedin size={20} />
  </a>

  {/* Ícono de GitHub */}
  <a
    href="https://github.com/ivansanzrey456-hue"
    target="_blank"
    rel="noopener noreferrer"
    title="GitHub"
    aria-label="Perfil de GitHub"
    className="navbar-icon-btn"
  >
    <FaGithub size={20} />
  </a>

  {/* Botón Principal: Descargar CV */}
  <div className="navbar-desktop-only">
    <DottedOffsetButton
      label="Descargar CV"
      link="/CV-Sanchez_Reyes_Ivan.pdf"
      newTab={true}
      addIcon={true}
      icon={{ symbol: "↓", size: 16 }}
    />
  </div>

</div>

                <button
                    type="button"
                    className="navbar-menu-button"
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
                    aria-expanded={menuOpen}
                >
                    {menuOpen ? <HiOutlineXMark /> : <HiOutlineBars3 />}
                </button>

            </div>
        </header>
    );
}

export default Navbar;