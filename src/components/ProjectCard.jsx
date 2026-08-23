function ProjectCard({ project, onOpen }) {

    return (

        <article
            className={`project-card ${
                project.featured ? "project-featured" : ""
            }`}
        >

            <div className="project-image">

                <img
                    src={project.image}
                    alt={project.imageAlt}
                    onContextMenu={(e) => e.preventDefault()}
                    onDragStart={(e) => e.preventDefault()}
                />

                <button
                    className="project-overlay"
                    onClick={() => onOpen(project)}
                >
                    VER PROYECTO
                </button>

            </div>


            <div className="project-content">

                <span className="project-category">
                    {project.category}
                </span>

                <h3>
                    {project.title}
                </h3>

                <p>
                    {project.description}
                </p>


                <div className="project-tags">

                    {project.technologies.map((technology) => (

                        <span key={technology}>
                            {technology}
                        </span>

                    ))}

                </div>

            </div>

        </article>

    );

}

export default ProjectCard;