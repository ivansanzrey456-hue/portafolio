import {
    FaGithub,
    FaLinkedin,
    FaEnvelope,
    FaWhatsapp
} from "react-icons/fa";
import React from 'react';

import "../styles/footer.css";

function Footer() {

    return (

        <footer className="footer">

            <div className="footer-container">

                <div className="footer-main">

                    <div className="footer-brand">

                        <h3>
                            Ivan Sanchez Reyes
                        </h3>

                        <p>
                            Ingeniero en Informática · Full Stack Developer
                        </p>

                        <span>
                            Desarrollo de software · APIs · IoT · Integración tecnológica
                        </span>

                    </div>


                    <nav className="footer-nav">

                        <a href="#hero">
                            Inicio
                        </a>

                        <a href="#projects">
                            Proyectos
                        </a>

                        <a href="#experience">
                            Trayectoria
                        </a>

                        <a href="#solutions">
                            Soluciones
                        </a>

                        <a href="#technologies">
                            Tecnologías
                        </a>

                        <a href="#contact">
                            Contacto
                        </a>

                    </nav>


                    <div className="footer-social">

                        <a
                            href="https://github.com/ivansanzrey456-hue"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="GitHub"
                        >
                            <FaGithub />
                        </a>

                        <a
                            href="https://www.linkedin.com/in/ivansanchezreyes/"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="LinkedIn"
                        >
                            <FaLinkedin />
                        </a>

                        <a
                            href="mailto:ivans456@gmail.com"
                            aria-label="Correo electrónico"
                        >
                            <FaEnvelope />
                        </a>

                        <a
                            href="https://wa.me/527122996549"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="WhatsApp"
                        >
                            <FaWhatsapp />
                        </a>

                    </div>

                </div>


                <div className="footer-bottom">

                    <p>
                        © 2026 Ivan Sanchez Reyes. Todos los derechos reservados.
                    </p>

                    <span>
                        Ingeniería · Software · Tecnología
                    </span>

                </div>

            </div>

        </footer>

    );

}

export default Footer;