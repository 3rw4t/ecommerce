import { Link } from "react-router-dom"; //link crea un link de navegacion entre rutas

function Header() {
    return (
        <header>
            <nav>
                <Link to="/">Home</Link> | <Link to="/products">Products</Link>
            </nav>
        </header>
    );
}

export default Header