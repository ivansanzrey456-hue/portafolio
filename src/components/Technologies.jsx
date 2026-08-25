import React from 'react';
import {
    FaCode,
    FaServer,
    FaDatabase,
    FaDesktop,
    FaMicrochip,
    FaTools
} from "react-icons/fa";

import "../styles/technologies.css";

function Technologies() {

    return (

        <section className="technologies" id="technologies">

            <div className="technologies-container">

                <div className="technologies-header">

                    <span className="section-label">
                        TECNOLOGÍAS
                    </span>

                    <h2>
                        Herramientas para construir soluciones
                    </h2>

                    <p>
                        Stack tecnológico y herramientas aplicadas en la creación de 
                        software, integración de sistemas, automatización e interacción con hardware.
                    </p>

                </div>


                <div className="technologies-grid">


                    <article className="technology-card animate-on-scroll stagger-1">
                        {/* Frontend */}

                        <div className="technology-icon">
                            <FaCode />
                        </div>

                        <span className="technology-number">
                            01
                        </span>

                        <h3>
                            Frontend
                        </h3>

                        <p>
                            Diseño y maquetación de interfaces web funcionales,
                            estructuradas y orientadas a la experiencia de usuario.
                        </p>

                        <div className="technology-tags">

                            <span>React</span>
                            <span>JavaScript</span>
                            <span>HTML</span>
                            <span>CSS</span>
                            <span>Vite</span>

                        </div>

                    </article>


                    <article className="technology-card animate-on-scroll stagger-2">
                        {/* Backend & APIs */}

                        <div className="technology-icon">
                            <FaServer />
                        </div>

                        <span className="technology-number">
                            02
                        </span>

                        <h3>
                            Backend & APIs
                        </h3>

                        <p>
                            Arquitectura de lógica de servidor y servicios API para
                            interconectar aplicaciones, bases de datos y dispositivos.
                        </p>

                        <div className="technology-tags">

                            <span>PHP</span>
                            <span>C#</span>
                            <span>Python</span>
                            <span>Flask</span>
                            <span>APIs</span>

                        </div>

                    </article>


                    <article className="technology-card animate-on-scroll stagger-3">
                        {/* Bases de datos */}

                        <div className="technology-icon">
                            <FaDatabase />
                        </div>

                        <span className="technology-number">
                            03
                        </span>

                        <h3>
                            Bases de datos
                        </h3>

                        <p>
                            Estructuración y modelado de datos para almacenar,
                            consultar y gestionar información en tiempo real.
                        </p>

                        <div className="technology-tags">

                            <span>MySQL</span>
                            <span>SQL</span>

                        </div>

                    </article>


                    <article className="technology-card animate-on-scroll stagger-4">
                        {/* Desktop & Multimedia */}

                        <div className="technology-icon">
                            <FaDesktop />
                        </div>

                        <span className="technology-number">
                            04
                        </span>

                        <h3>
                            Desktop & Multimedia
                        </h3>

                        <p>
                            Creación de aplicaciones de escritorio orientadas a
                            gestionar y monitorear contenido multimedia mediante interfaces especializadas.
                        </p>

                        <div className="technology-tags">

                            <span>Python</span>
                            <span>PyQt6</span>
                            <span>VLC</span>
                            <span>python-vlc</span>

                        </div>

                    </article>


                    <article className="technology-card animate-on-scroll stagger-5">
                        {/* IoT & Hardware */}

                        <div className="technology-icon">
                            <FaMicrochip />
                        </div>

                        <span className="technology-number">
                            05
                        </span>

                        <h3>
                            IoT & Hardware
                        </h3>

                        <p>
                            Integración entre software, electrónica,
                            sensores, actuadores y dispositivos físicos
                            para crear sistemas automatizados.
                        </p>

                        <div className="technology-tags">

                            <span>Arduino</span>
                            <span>ATmega328P</span>
                            <span>C/C++</span>
                            <span>Bluetooth</span>
                            <span>HC-06</span>

                        </div>

                    </article>


                    <article className="technology-card animate-on-scroll stagger-6">
                        {/* Herramientas */}

                        <div className="technology-icon">
                            <FaTools />
                        </div>

                        <span className="technology-number">
                            06
                        </span>

                        <h3>
                            Herramientas
                        </h3>

                        <p>
                            Ecosistema de utilidades y control de versiones
                            usados para optimizar el flujo de trabajo y el ciclo de vida del proyecto.
                        </p>

                        <div className="technology-tags">

                            <span>Git</span>
                            <span>GitHub</span>
                            <span>Arduino IDE</span>

                        </div>

                    </article>


                </div>

            </div>

        </section>

    );

}

export default Technologies;