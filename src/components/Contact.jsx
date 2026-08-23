import {
    FaEnvelope,
    FaLinkedin,
    FaGithub,
    FaWhatsapp
} from "react-icons/fa";

import "../styles/contact.css";

function Contact() {
    return (
        <section className="contact" id="contact">
            <div className="contact-container">

                {/* Encabezado animado */}
                <div className="contact-header animate-on-scroll">
                    <span className="section-label">
                        CONTACTO
                    </span>

                    <h2>
                        ¿Tienes un proyecto o una idea?
                    </h2>

                    <p>
                        Abierto a colaborar en la creación de software,
                        integración de sistemas y arquitectura de soluciones
                        orientadas a resolver retos reales.
                    </p>
                </div>

                {/* Grid de tarjetas con retardos progresivos (stagger) */}
                <div className="contact-grid">

                    <a
                        href="mailto:ivansanzrey456@gmail.com"
                        className="contact-card animate-on-scroll stagger-1"
                    >
                        <div className="contact-icon">
                            <FaEnvelope />
                        </div>

                        <div className="contact-card-info">
                            <span>
                                Correo
                            </span>
                            <strong>ivansanzrey456@gmail.com</strong>
                        </div>
                    </a>

                    <a
                        href="https://www.linkedin.com/in/ivansanchezreyes/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="contact-card animate-on-scroll stagger-2"
                    >
                        <div className="contact-icon">
                            <FaLinkedin />
                        </div>

                        <div className="contact-card-info">
                            <span>
                                LinkedIn
                            </span>
                            <strong>
                                Ver perfil profesional
                            </strong>
                        </div>
                    </a>

                    <a
                        href="https://github.com/ivansanzrey456-hue"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="contact-card animate-on-scroll stagger-3"
                    >
                        <div className="contact-icon">
                            <FaGithub />
                        </div>

                        <div className="contact-card-info">
                            <span>
                                GitHub
                            </span>
                            <strong>
                                Ver repositorios
                            </strong>
                        </div>
                    </a>

                    <a
                        href="https://wa.me/527122996549"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="contact-card animate-on-scroll stagger-4"
                    >
                        <div className="contact-icon">
                            <FaWhatsapp />
                        </div>

                        <div className="contact-card-info">
                            <span>
                                WhatsApp
                            </span>
                            <strong>
                                Contactarme directamente
                            </strong>
                        </div>
                    </a>

                </div>

            </div>
        </section>
    );
}

export default Contact;