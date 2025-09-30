import { Outlet, Link } from "react-router-dom"; // <Outlet> es el componente que renderiza el componente de la ruta actual y <Link> crea un link de navegacion entre rutas

function DefaultLayout() {
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

export default DefaultLayout

