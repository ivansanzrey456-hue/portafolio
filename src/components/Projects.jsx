import { useState } from "react";
import "../styles/projects.css";
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";
import projects from "../data/projects";
import React from 'react';
function Projects() {
    const [selectedProject, setSelectedProject] = useState(null);

    return (
        <section className="projects" id="projects">
            <div className="projects-container">

                {/* Encabezado animado */}
                <div className="projects-header animate-on-scroll">
                    <span className="section-label">
                        SOLUCIONES
                    </span>
                    <h2>
                        Proyectos destacados
                    </h2>
                    <p>
                        Una selección de proyectos en los que he aplicado
                        desarrollo de software, integración tecnológica y
                        diferentes herramientas para resolver problemas reales.
                    </p>
                </div>

                {/* Mapeo dinámico aplicando animaciones con retardos en cascada */}
                <div className="projects-grid">
                    {projects.map((project, index) => {
                        // Calcula el stagger del 1 al 4 repetitivamente
                        const staggerClass = `stagger-${(index % 4) + 1}`;

                        return (
                            <div 
                                key={project.id} 
                                className={`animate-on-scroll ${staggerClass} ${project.featured ? 'project-featured-wrapper' : ''}`}
                            >
                                <ProjectCard
                                    project={project}
                                    onOpen={setSelectedProject}
                                />
                            </div>
                        );
                    })}
                </div>

                {/* Modal para detalles del proyecto */}
                <ProjectModal
                    project={selectedProject}
                    onClose={() => setSelectedProject(null)}
                />

            </div>
        </section>
    );
}

export default Projects;