import {Routes, Route } from "react-router-dom"; // <Routes> es el componente que contiene todas las rutas de la aplicacion y <Route> es el componente que conecta una ruta con un componente
import DefaultLayout from "../layouts/DefaultLayout.tsx";
//Pages
import Home from "../modules/home/pages/Home.tsx";
import Products from "../modules/products/pages/Products.tsx";
import NotFound from "../modules/errors/pages/NotFound.tsx";
import ProductsShow from "../modules/products/pages/ProductsShow.tsx";

function AppRoutes() {
    return (
        <Routes>
            <Route element={<DefaultLayout />}>
                <Route path="/" element={<Home />} />
                <Route path="/products" element={<Products />} />
                <Route path="/products/:id" element={<ProductsShow />} />
            </Route>

            {/* Ruta 404 */}
            <Route element={<DefaultLayout />}>
                <Route path="*" element={<NotFound />} />
            </Route>
        </Routes>
    );
}

export default AppRoutes