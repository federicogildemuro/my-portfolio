function Hero() {
    return (
        <section id="hero" className="h-screen flex flex-col justify-center items-center text-center">
            <h2 className="text-4xl mb-4">Hi, I'm Federico</h2>
            <p className="text-lg">Full Stack Developer</p>
            <ul className="mt-4 flex gap-4">
                <li>React</li>
                <li>Node.js</li>
                <li>Express</li>
                <li>MongoDB</li>
            </ul>
        </section>
    );
}

export default Hero;
