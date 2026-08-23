function ProjectModal({ project, onClose }) {

    if (!project) {
        return null;
    }


    return (

        <div
            className="project-modal"
            onClick={onClose}
        >

            <div
                className="project-modal-content"
                onClick={(event) => event.stopPropagation()}
            >

                <button
                    className="project-modal-close"
                    onClick={onClose}
                    aria-label="Cerrar proyecto"
                >
                    ×
                </button>


                <span className="project-category">
                    {project.category}
                </span>


                <h2>
                    {project.title}
                </h2>


                <p className="project-modal-intro">
                    {project.modalDescription}
                </p>


                <div className="project-gallery">

                    {project.gallery.map((image, index) => (

                        <img
                            key={image.src}
                            src={image.src}
                            alt={image.alt}
                            onContextMenu={(e) => e.preventDefault()}
                            onDragStart={(e) => e.preventDefault()}
                            decoding="async"
                        />

                    ))}

                </div>


                <div className="project-modal-section">

                    <h3>
                        ¿Qué problema resuelve?
                    </h3>

                    <p>
                        {project.problem}
                    </p>

                </div>


                <div className="project-modal-section">

                    <h3>
                        Solución
                    </h3>

                    <p>
                        {project.solution}
                    </p>

                </div>


                <div className="project-modal-section">

                    <h3>
                        Mi participación
                    </h3>

                    <p>
                        {project.role}
                    </p>

                </div>


                <div className="project-modal-section">

                    <h3>
                        Funcionalidades
                    </h3>

                    <ul>

                        {project.features.map((feature) => (

                            <li key={feature}>
                                {feature}
                            </li>

                        ))}

                    </ul>

                </div>


                <div className="project-modal-section">

                    <h3>
                        Tecnologías
                    </h3>

                    <div className="project-tags">

                        {project.technologies.map((technology) => (

                            <span key={technology}>
                                {technology}
                            </span>

                        ))}

                    </div>

                </div>

            </div>

        </div>

    );

}

export default ProjectModal;