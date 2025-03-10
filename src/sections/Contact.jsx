function Contact() {
    return (
        <section className="flex flex-col justify-start items-center gap-10 p-10 lg:p-20 text-center text-color-pink">
            <p>If you find my work interesting and want to get in touch, you can reach me through...</p>

            <div className="flex flex-col sm:flex-row justify-center items-center gap-10">
                <a
                    href="https://www.linkedin.com/in/federicogildemuro/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-color-white hover:underline"
                    aria-label="Contact me on LinkedIn"
                >
                    LinkedIn
                </a>

                <a
                    href="https://wa.me/5492234248732"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-color-white hover:underline"
                    aria-label="Send me a message on WhatsApp"
                >
                    WhatsApp
                </a>

                <a
                    href="mailto:federicogildemuro@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-color-white hover:underline"
                    aria-label="Send me an email"
                >
                    E-mail
                </a>
            </div>
        </section>
    );
}

export default Contact;