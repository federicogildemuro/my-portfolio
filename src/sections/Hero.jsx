import { useState, useEffect } from 'react';

function Hero() {
    // State to control when the image should appear
    const [imageLoaded, setImageLoaded] = useState(false);
    // State to control when the typing animation should start
    const [startTyping, setStartTyping] = useState(false);
    // State to store the text
    const [text, setText] = useState('');
    // State to store the line index
    const [lineIndex, setLineIndex] = useState(0);
    // State to store the character index
    const [charIndex, setCharIndex] = useState(0);

    // Use effect to control the image appearance and start typing
    useEffect(() => {
        // Wait for the image to appear first
        const imageTimeout = setTimeout(() => setImageLoaded(true), 1000);
        // After the image is loaded, start typing after an additional 1 second delay
        if (imageLoaded) {
            const typingStartTimeout = setTimeout(() => setStartTyping(true), 2000);
            // Clear the timeout when the typing animation starts
            return () => clearTimeout(typingStartTimeout);
        }
        // Clear the timeout when the component is unmounted
        return () => clearTimeout(imageTimeout);
    }, [imageLoaded]);

    // Use effect to type the text
    useEffect(() => {
        // Check if the typing animation should start
        if (!startTyping) return;

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
    }, [startTyping, lineIndex, charIndex]);

    return (
        <section className="h-screen flex flex-col justify-start items-center gap-10 p-10 lg:p-20 text-center text-color-green">
            <img
                src="profile.jpg"
                alt="Pixel art portrait of Federico Gil de Muro"
                className={`w-64 h-auto object-cover border-5 ${imageLoaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-1000`}
            />

            {startTyping && (
                <p className="whitespace-pre-wrap">
                    {text}
                    <span className="animate-blink">_</span>
                </p>
            )}
        </section>
    );
}

export default Hero;