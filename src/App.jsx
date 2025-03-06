import Header from './components/Header';
import Hero from './sections/Hero';
import About from './sections/About';
import Projects from './sections/Projects';
import Contact from './sections/Contact';

function App() {
    return (
        <div>
            <Header />
            <main>
                <Hero />
                <About />
                <Projects />
                <Contact />
            </main>
        </div>
    );
}

export default App;