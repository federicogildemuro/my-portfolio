function Contact() {
    return (
        <section className="flex flex-col justify-center items-center gap-10 m-20 text-center text-color-purple">
            <p>If you find my work interesting and want to get in touch, you can reach me through...</p>

            <div className="flex justify-center items-center gap-10">
                <a
                    href="https://www.linkedin.com/in/federicogildemuro/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-color-yellow hover:underline"
                >
                    LinkedIn
                </a>

                <a
                    href="https://wa.me/5492234248732"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-color-yellow hover:underline"
                >
                    WhatsApp
                </a>

                <a
                    href="mailto:federicogildemuro@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-color-yellow hover:underline"
                >
                    E-mail
                </a>
            </div>
        </section>
    );
}

export default Contact;