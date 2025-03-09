function About() {
    return (
        <section className="flex flex-col justify-center items-center gap-10 mx-20 mb-20 text-center text-color-pink">
            <p>I'm a Full Stack Developer with a background as a former lawyer and professor, bringing a unique, multidisciplinary approach to problem-solving, leveraging skills from both legal and educational fields.</p>
            <p>My journey has taught me to be detail-oriented, adaptable, and committed to continuous learning. I thrive on challenges and always strive to improve my skills.</p>
            <p>Passionate about building innovative web applications, I enjoy exploring new technologies and crafting solutions that make a real impact.</p>
            <p>These are some of the technologies I work with...</p>

            <div className="flex justify-center items-center gap-5">
                <h3>Frontend:</h3>
                <i class="devicon-html5-plain-wordmark colored text-3xl" />
                <i class="devicon-css3-plain-wordmark colored text-3xl" />
                <i class="devicon-bootstrap-plain colored text-3xl" />
                <i class="devicon-tailwindcss-plain colored text-3xl" />
                <i class="devicon-javascript-plain colored text-3xl" />
                <i class="devicon-typescript-plain colored text-3xl" />
                <i class="devicon-angularjs-plain colored text-3xl" />
                <i class="devicon-react-plain colored text-3xl" />
            </div>

            <div className="flex justify-center items-center gap-5">
                <h3>Backend:</h3>
                <i class="devicon-c-plain colored text-xl" />
                <i class="devicon-java-plain colored text-3xl" />
                <i class="devicon-nodejs-plain-wordmark colored text-3xl" />
                <i class="devicon-express-original colored text-3xl" />
                <i class="devicon-socketio-original colored text-3xl" />
            </div>

            <div className="flex justify-center items-center gap-5">
                <h3>Databases:</h3>
                <i class="devicon-mysql-plain colored text-3xl" />
                <i class="devicon-mongodb-plain colored text-3xl" />
                <i class="devicon-firebase-plain colored text-3xl" />
            </div>

            <p>
                You can download my CV by clicking {''}
                <a
                    href="public/cv-federico-gil-de-muro.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-color-yellow hover:underline"
                >
                    here
                </a>
            </p>
        </section >
    );
}

export default About;