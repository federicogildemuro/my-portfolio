import { useState, useEffect } from 'react';

function Hero() {
    // State to store the text
    const [text, setText] = useState('');
    // State to store the line index
    const [lineIndex, setLineIndex] = useState(0);
    // State to store the character index
    const [charIndex, setCharIndex] = useState(0);

    // Use effect to type the text
    useEffect(() => {
        // Lines to type
        const lines = [
            "Hi, I'm Federico.",
            "You can know more about me in this website.",
            "Feel free to reach out if you have any question.",
            "I'm looking forward to hearing from you!"
        ];

        // Function to type the text
        const typeText = () => {
            // Check if the character index is less than the line length, otherwise move to the next line
            if (charIndex < lines[lineIndex].length) {
                // Add the character to the text
                setText((prevText) => prevText + lines[lineIndex][charIndex]);
                // Increment the character index
                setCharIndex(charIndex + 1);
            } else {
                // Check if the line index is less than the lines length
                if (lineIndex < lines.length - 1) {
                    // Increment the line index
                    setLineIndex(lineIndex + 1);
                    // Reset the character index
                    setCharIndex(0);
                    // Add a new line
                    setText((prevText) => prevText + '\n');
                }
            }
        };

        // Typing speed
        const typingSpeed = 100;

        // Set interval to type the text
        const interval = setInterval(typeText, typingSpeed);

        // Clear interval when the text is fully typed
        if (lineIndex >= lines.length) clearInterval(interval);

        // Clear interval when the component is unmounted
        return () => clearInterval(interval);
    }, [lineIndex, charIndex]);

    return (
        <section className="h-screen flex flex-col justify-start items-center gap-10 p-10 lg:p-20 text-center text-color-green">
            <img
                src="profile.jpg"
                alt="Pixel art portrait of Federico Gil de Muro"
                className="w-64 h-auto object-cover border-5"
            />

            <p className="whitespace-pre-wrap">
                {text}
                <span className="animate-blink">_</span>
            </p>
        </section>
    );
}

export default Hero;