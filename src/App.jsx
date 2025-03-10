import CRTScreenOn from './components/CRTScreenOn';
import Header from './components/Header';
import Hero from './sections/Hero';
import About from './sections/About';
import Projects from './sections/Projects';
import Contact from './sections/Contact';

function App() {
    return (
        <CRTScreenOn>
            <Header />
            <main className="text-sm sm:text-base md:text-lg lg:text-xl">
                <Hero />
                <About />
                <Projects />
                <Contact />
            </main>
        </CRTScreenOn>
    );
}

export default App;