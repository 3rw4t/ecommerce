import { Link } from "react-router-dom"; //link crea un link de navegacion entre rutas

function Header() {
    return (
        <header className="bg-white">
            <nav className="flex justify-between px-4 py-2 max-w-7xl mx-auto">
                <h2 className="uppercase font-serif"> <Link to="/">Clothes</Link> </h2>
                <div>
                    <Link to="/">Home</Link> | <Link to="/products">Products</Link>
                </div>
            </nav>
        </header>
    );
}

export default Header