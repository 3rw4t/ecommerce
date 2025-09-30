import { Outlet, Link } from "react-router-dom";
// <Link> crea un link de navegacion entre rutas
// <Outlet> es el componente que renderiza el componente de la ruta actual

export default function DefaultLayout() {
    return (
        <>
            <header>
                <nav>
                    <Link to="/">Home</Link> | <Link to="/products">Products</Link>
                </nav>
            </header>
            
            <main>
                <Outlet /> 
            </main>

            <footer>
                <p>2025 react-router-dom</p>
            </footer>
        </>
    );
}

