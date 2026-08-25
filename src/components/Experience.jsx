import "../styles/experience.css";
import React from 'react';

function Experience() {
    return (
        <section className="experience" id="experience">
            <div className="experience-container">
                
                {/* Encabezado con animación básica */}
                <div className="experience-header animate-on-scroll">
                    <span className="section-label">TRAYECTORIA</span>
                    <h2>Experiencia construyendo soluciones</h2>
                    <p>
                        Proyectos y experiencias donde he aplicado conocimientos de desarrollo 
                        de software, integración tecnológica y solución de problemas.
                    </p>
                </div>

                {/* Timeline con elementos desfasados en cascada */}
                <div className="experience-timeline">
                    
                    <article className="experience-item animate-on-scroll stagger-1">
                        <div className="experience-marker">01</div>
                        <div className="experience-content">
                            <span className="experience-category">INNOVACIÓN TECNOLÓGICA</span>
                            <h3>INNOVATECNM</h3>
                            <p>
                                Participación en un proyecto multidisciplinario de innovación tecnológica presentado en la etapa
                                regional de Pachuca y posteriormente en la etapa nacional de Colima, colaborando en el diseño electrónico, 
                                documentación y desarrollo de la solución.
                            </p>
                            <div className="experience-tags">
                                <span>IoT</span>
                                <span>Automatización</span>
                                <span>Control</span>
                            </div>
                        </div>
                    </article>

                    <article className="experience-item animate-on-scroll stagger-2">
                        <div className="experience-marker">02</div>
                        <div className="experience-content">
                            <span className="experience-category">DESARROLLO DE SOFTWARE</span>
                            <h3>Sistemas Web Administrativos</h3>
                            <p>
                                Construcción de aplicaciones enfocadas en optimizar procesos reales mediante 
                                interfaces funcionales, lógica de negocio sólida y herramientas adaptadas a cada necesidad.
                            </p>
                            <div className="experience-tags">
                                <span>React</span>
                                <span>PHP</span>
                                <span>MySQL</span>
                            </div>
                        </div>
                    </article>

                    <article className="experience-item animate-on-scroll stagger-3">
                        <div className="experience-marker">03</div>
                        <div className="experience-content">
                            <span className="experience-category">INTEGRACIÓN TECNOLÓGICA</span>
                            <h3>APIs y soluciones conectadas</h3>
                            <p>
                                Desarrollo e integración de APIs para conectar aplicaciones, 
                                bases de datos y dispositivos especializados.
                            </p>
                            <div className="experience-tags">
                                <span>C#</span>
                                <span>Python</span>
                                <span>APIs</span>
                                <span>SQL</span>
                            </div>
                        </div>
                    </article>

                    <article className="experience-item animate-on-scroll stagger-4">
                        <div className="experience-marker">04</div>
                        <div className="experience-content">
                            <span className="experience-category">DESARROLLO MULTIMEDIA</span>
                            <h3>Herramientas de gestión y reproducción</h3>
                            <p>
                                Construcción de una interfaz de escritorio para organizar,
                                previsualizar y transmitir contenido multimedia utilizando Python, PyQt6 y VLC.
                            </p>
                            <div className="experience-tags">
                                <span>Python</span>
                                <span>PyQt6</span>
                                <span>VLC</span>
                            </div>
                        </div>
                    </article>

                </div>
            </div>
        </section>
    );
}

export default Experience;