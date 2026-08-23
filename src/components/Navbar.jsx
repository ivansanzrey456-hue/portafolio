import { useState } from "react";
import { FaGithub } from "react-icons/fa";
import {
    HiOutlineDocumentArrowDown,
    HiOutlineBars3,
    HiOutlineXMark
} from "react-icons/hi2";

import "../styles/navbar.css";

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    const closeMenu = () => {
        setMenuOpen(false);
    };

    // Apunta dinámicamente a la carpeta public
    const cvPath = `${import.meta.env.BASE_URL}cv.pdf`;

    return (
        <header className="navbar">
            <div className="navbar-container">

                <a
                    href="#hero"
                    className="navbar-logo"
                    onClick={closeMenu}
                >
                    <div className="logo-symbol">&lt;ISR/&gt;</div>
                    <div className="logo-text">
                        <h3>Ivan Sanchez Reyes</h3>
                        <span>Full Stack Developer</span>
                    </div>
                </a>

                <nav
                    className={`navbar-links ${
                        menuOpen ? "navbar-links-open" : ""
                    }`}
                >
                    <a href="#experience" onClick={closeMenu}>
                        Trayectoria
                    </a>
                    <a href="#solutions" onClick={closeMenu}>
                        Soluciones
                    </a>
                    <a href="#technologies" onClick={closeMenu}>
                        Tecnologías
                    </a>
                    <a href="#contact" onClick={closeMenu}>
                        Contacto
                    </a>
                    <a
                        href="https://github.com/ivansanzrey456-hue"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="navbar-mobile-link"
                        onClick={closeMenu}
                    >
                        <FaGithub /> GitHub
                    </a>
                    
                    {/* CV Versión Móvil */}
                    <a
                        href="/CV-Sanchez_Reyes_Ivan.pdf"
                        download="CV-Sanchez_Reyes_Ivan.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="navbar-mobile-cv"
                        onClick={closeMenu}
                    >
                        <HiOutlineDocumentArrowDown /> Descargar CV
                    </a>
                </nav>

                <div className="navbar-actions">
                    <a
                        href="https://github.com/ivansanzrey456-hue"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="icon-button navbar-desktop-only"
                        aria-label="GitHub"
                    >
                        <FaGithub />
                    </a>

                    {/* CV Versión Escritorio (CORREGIDO) */}
                    <a
                        href="/CV-Sanchez_Reyes_Ivan.pdf"
                        download="CV-Sanchez_Reyes_Ivan.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="cv-button navbar-desktop-only"
                    >
                        <HiOutlineDocumentArrowDown />
                        <span>Descargar CV</span>
                    </a>
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