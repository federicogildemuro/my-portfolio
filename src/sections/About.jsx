import { frontendIcons, backendIcons, databaseIcons, toolsIcons } from '../data/technologies';

function About() {
    return (
        <section className="flex flex-col justify-start items-center gap-10 p-10 lg:p-20 text-center text-color-amber">
            <p>I'm a Full Stack Developer with a background as a former lawyer and professor, bringing a unique, multidisciplinary approach to problem-solving, leveraging skills from both legal and educational fields.</p>
            <p>My journey has taught me to be detail-oriented, adaptable, and committed to continuous learning. I thrive on challenges and always strive to improve my skills.</p>
            <p>Passionate about building innovative web applications, I enjoy exploring new technologies and crafting solutions that make a real impact.</p>
            <p>These are some of the technologies I work with...</p>

            <div className="flex flex-wrap justify-center items-center gap-5">
                <h3>Frontend:</h3>
                {frontendIcons.map((icon, index) => (
                    <i key={index} className={`${icon.class} text-3xl`} title={icon.name} aria-label={icon.name} />
                ))}
            </div>

            <div className="flex flex-wrap justify-center items-center gap-5">
                <h3>Backend:</h3>
                {backendIcons.map((icon, index) => (
                    <i key={index} className={`${icon.class} text-3xl`} title={icon.name} aria-label={icon.name} />
                ))}
            </div>

            <div className="flex flex-wrap justify-center items-center gap-5">
                <h3>Databases:</h3>
                {databaseIcons.map((icon, index) => (
                    <i key={index} className={`${icon.class} text-3xl`} title={icon.name} aria-label={icon.name} />
                ))}
            </div>

            <div className="flex flex-wrap justify-center items-center gap-5">
                <h3>Tools:</h3>
                {toolsIcons.map((icon, index) => (
                    <i key={index} className={`${icon.class} text-3xl`} title={icon.name} aria-label={icon.name} />
                ))}
            </div>

            <p>
                You can download my CV by clicking {''}
                <a
                    href="cv-federico-gil-de-muro.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-color-white hover:underline"
                    aria-label="Download CV"
                >
                    here
                </a>
            </p>
        </section>
    );
}

export default About;