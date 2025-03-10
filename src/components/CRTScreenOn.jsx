import { useState, useEffect } from 'react';

const CRTScreenOn = ({ children }) => {
    // State to control the visibility of the content
    const [showContent, setShowContent] = useState(false);

    // Use effect to show the content after 2 seconds
    useEffect(() => {
        const timeout = setTimeout(() => setShowContent(true), 2000);
        return () => clearTimeout(timeout);
    }, []);

    return (
        <>
            {/* Show the CRT screen on effect until the content is visible */}
            {!showContent && <div className="crt-screen-on" />}
            {/* Show the content after the CRT screen on effect */}
            {showContent && children}
        </>
    );
};

export default CRTScreenOn;