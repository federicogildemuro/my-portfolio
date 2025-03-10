function About() {
    return (
        <section className="flex flex-col justify-start items-center gap-10 p-10 lg:p-20 text-center text-color-amber">
            <p>I'm a Full Stack Developer with a background as a former lawyer and professor, bringing a unique, multidisciplinary approach to problem-solving, leveraging skills from both legal and educational fields.</p>
            <p>My journey has taught me to be detail-oriented, adaptable, and committed to continuous learning. I thrive on challenges and always strive to improve my skills.</p>
            <p>Passionate about building innovative web applications, I enjoy exploring new technologies and crafting solutions that make a real impact.</p>
            <p>These are some of the technologies I work with...</p>

            <div className="flex flex-wrap justify-center items-center gap-5">
                <h3>Frontend:</h3>
                <i className="devicon-html5-plain-wordmark colored text-3xl" aria-label="HTML" />
                <i className="devicon-css3-plain-wordmark colored text-3xl" aria-label="CSS" />
                <i className="devicon-sass-original colored text-3xl" aria-label="Sass" />
                <i className="devicon-bootstrap-plain colored text-3xl" aria-label="Bootstrap" />
                <i className="devicon-tailwindcss-plain colored text-3xl" aria-label="Tailwind" />
                <i className="devicon-javascript-plain colored text-3xl" aria-label="JavaScript" />
                <i className="devicon-typescript-plain colored text-3xl" aria-label="TypeScript" />
                <i className="devicon-angularjs-plain colored text-3xl" aria-label="Angular" />
                <i className="devicon-react-plain colored text-3xl" aria-label="React" />
            </div>

            <div className="flex flex-wrap justify-center items-center gap-5">
                <h3>Backend:</h3>
                <i className="devicon-c-plain colored text-xl" aria-label="C" />
                <i className="devicon-java-plain colored text-3xl" aria-label="Java" />
                <i className="devicon-nodejs-plain-wordmark colored text-3xl" aria-label="Node" />
                <i className="devicon-express-original text-3xl" aria-label="Express" />
                <i className="devicon-socketio-original text-3xl" aria-label="Socket.io" />
                <i className="devicon-handlebars-original text-3xl" aria-label="Handlebars" />
            </div>

            <div className="flex flex-wrap justify-center items-center gap-5">
                <h3>Databases:</h3>
                <i className="devicon-mysql-plain colored text-3xl" aria-label="MySQL" />
                <i className="devicon-mongodb-plain colored text-3xl" aria-label="MongoDB" />
                <i className="devicon-firebase-plain colored text-3xl" aria-label="Firebase" />
            </div>

            <p>
                You can download my CV by clicking {''}
                <a
                    href="public/cv-federico-gil-de-muro.pdf"
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