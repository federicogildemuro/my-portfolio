function About() {
    return (
        <section id="about" className="h-screen flex flex-col justify-center items-center">
            <h2 className="text-3xl">About Me</h2>
            <div className="w-32 h-32 bg-gray-500 mt-4"></div>
            <p className="mt-4 max-w-md text-center">
                I'm a Full Stack Developer passionate about building web applications.
            </p>
            <button className="mt-4 p-2 bg-blue-500 text-white rounded">Download CV</button>
        </section>
    );
}

export default About;