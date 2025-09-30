import './style.css'
import {Routes, Route } from "react-router-dom";
// <Routes> es el componente que contiene todas las rutas de la aplicacion
// <Route> es el componente que conecta una ruta con un componente
import DefaultLayout from './layouts/DefaultLayout.tsx';
//Pages
import Home from "./pages/Home.tsx";
import Products from "./pages/Products.tsx";
import NotFound from "./pages/errors/NotFound.tsx";

function App() {
  return (
    <Routes>
      <Route element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
      </Route>

      {/* Ruta 404 */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}


export default App
