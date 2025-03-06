import Navbar from './Navbar';

function Header() {
    return (
        <header className="flex justify-between items-center p-4">
            <h1 className="text-2xl">Federico Gil de Muro</h1>
            <Navbar />
        </header>
    );
}

export default Header;