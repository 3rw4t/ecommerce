import { Outlet } from "react-router-dom"; // <Outlet> es el componente que renderiza el componente de la ruta actual y <Link> crea un link de navegacion entre rutas
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

function DefaultLayout() {
    return (
        <>
            <Header />
            
            <main className="flex-grow min-h-[calc(100vh-4rem)]">
                <Outlet /> 
            </main>

            <Footer />
        </>
    );
}

export default DefaultLayout

