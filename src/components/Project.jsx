function Project({ project }) {
    return (
        <li className="flex flex-col justify-start items-center border-5 gap-5">
            <div className="w-full h-64 overflow-hidden">
                <img
                    src={project.image}
                    alt={`Screenshot of ${project.name}`}
                    className="w-full h-full object-fill"
                />
            </div>

            <div className="flex flex-col justify-center items-center gap-5 p-5 lg:p-10">
                <h3 className="text-2xl">{project.name}</h3>

                <div className="flex flex-wrap justify-center items-center gap-5">
                    {project.techIcons.map((icon, index) => (
                        <i key={index} className={`devicon-${icon} text-3xl`} />
                    ))}
                </div>

                <p>{project.description}</p>

                {project.github && (
                    <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-color-white hover:underline"
                        aria-label={`View the GitHub repository of ${project.name}`}
                    >
                        GitHub Repo
                    </a>
                )}

                {project.demo && (
                    <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-color-white hover:underline"
                        aria-label={`View the live demo of ${project.name}`}
                    >
                        Live Demo
                    </a>
                )}
            </div>
        </li>
    );
}

export default Project;