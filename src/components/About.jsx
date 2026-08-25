import "../styles/about.css";
import React from 'react';

function About() {
    return (
        <section className="about" id="about">
            <div className="about-container">

                {/* Encabezado animado */}
                <div className="about-header animate-on-scroll">
                    <span className="section-label">
                        SOBRE MÍ
                    </span>

                    <h2>
                        Ingeniería, desarrollo y tecnología
                    </h2>
                </div>

                <div className="about-content">

                    {/* Columna de Texto con retraso leve */}
                    <div className="about-text animate-on-scroll stagger-1">
                        <p>
                            Soy Ingeniero en Informática enfocado en el desarrollo
                            de soluciones digitales que combinan aplicaciones web,
                            bases de datos, APIs y diferentes tecnologías.
                        </p>

                        <p>
                            Mi experiencia se ha desarrollado principalmente en
                            proyectos donde es necesario conectar distintas
                            herramientas y tecnologías para resolver necesidades
                            concretas.
                        </p>

                        <p>
                            Me interesa seguir creciendo como desarrollador Full Stack,
                            fortaleciendo mis conocimientos y participando en proyectos
                            donde pueda aportar soluciones funcionales, mantenibles
                            y orientadas a resultados.
                        </p>
                    </div>

                    {/* Columna de Detalle con efecto cascada (stagger-2, 3, 4) */}
                    <div className="about-details">

                        <div className="about-detail animate-on-scroll stagger-2">
                            <span className="about-detail-number">
                                01
                            </span>
                            <div>
                                <h3>Formación</h3>
                                <p>Ingeniería en Informática</p>
                            </div>
                        </div>

                        <div className="about-detail animate-on-scroll stagger-3">
                            <span className="about-detail-number">
                                02
                            </span>
                            <div>
                                <h3>Enfoque</h3>
                                <p>Desarrollo Full Stack</p>
                            </div>
                        </div>

                        <div className="about-detail animate-on-scroll stagger-4">
                            <span className="about-detail-number">
                                03
                            </span>
                            <div>
                                <h3>Especial interés</h3>
                                <p>APIs, sistemas web e integración tecnológica</p>
                            </div>
                        </div>

                    </div>

                </div>

            </div>
        </section>
    );
}

export default About;