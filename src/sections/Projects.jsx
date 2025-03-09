function Projects() {
    return (
        <section className="flex flex-col justify-center items-center gap-10 m-20 text-center text-color-cyan">
            <h2 className="text-2xl glitch" data-text="These are some of the projects I've worked on...">These are some of the projects I've worked on...</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
                <div className="flex flex-col justify-center items-center border-5 gap-3 max-w-lg">
                    <img
                        src="simple-chat.jpg"
                        alt="Simple Chat Screenshot"
                        className="w-full object-cover"
                    />

                    <div className="flex flex-col justify-center items-center gap-5 p-10">
                        <h3 className="text-2xl">Simple Chat</h3>

                        <div className="flex align-center gap-5">
                            <i className="devicon-nodejs-plain-wordmark text-3xl" />
                            <i className="devicon-express-original text-3xl" />
                            <i className="devicon-socketio-original text-3xl" />
                            <i className="devicon-bootstrap-plain text-3xl" />
                        </div>

                        <p className="text-color-white">
                            Basic chat application where users can join a room and send messages in real-time.
                        </p>

                        <a
                            href="https://github.com/federicogildemuro/simple-chat"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-color-yellow hover:underline"
                        >
                            GitHub Repo
                        </a>

                        <a
                            href="https://husky-sordid-donkey.glitch.me/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-color-yellow hover:underline"
                        >
                            Live Demo
                        </a>
                    </div>
                </div>

                <div className="flex flex-col justify-center items-center border-5 gap-3 max-w-lg">
                    <img
                        src="kyo-sushi.jpg"
                        alt="Kyo Sushi Screenshot"
                        className="w-full object-cover"
                    />

                    <div className="flex flex-col justify-center items-center gap-5 p-10">
                        <h3 className="text-2xl">Kyo Sushi</h3>

                        <div className="flex align-center gap-5">
                            <i className="devicon-react-original text-3xl" />
                            <i className="devicon-firebase-plain text-3xl" />
                            <i className="devicon-bootstrap-plain text-3xl" />
                        </div>

                        <p className="text-color-white">
                            E-commerce website for a sushi delivery. Users can browse the menu, add items to the cart, and place an order.
                        </p>

                        <a
                            href="https://github.com/federicogildemuro/kyo-sushi"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-color-yellow hover:underline"
                        >
                            GitHub Repo
                        </a>

                        <a
                            href="https://kyo-sushi.netlify.app/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-color-yellow hover:underline"
                        >
                            Live Demo
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Projects;