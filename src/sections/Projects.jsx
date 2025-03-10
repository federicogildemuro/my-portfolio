import projects from '../data/projects';
import Project from '../components/Project';

function Projects() {
    return (
        <section className="flex flex-col justify-start items-center gap-10 p-10 lg:p-20 text-center text-color-cyan">
            <h2>These are some of the projects I've worked on...</h2>

            <ul className="grid grid-cols-1 md:grid-cols-2 gap-10">
                {projects.map((project, index) => (
                    <Project key={index} project={project} />
                ))}
            </ul>
        </section>
    );
}

export default Projects;