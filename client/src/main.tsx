import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// <BrowserRouter> es el componente que envuelve toda la aplicacion y permite el enrutamiento
import { BrowserRouter } from "react-router-dom";
import './style.css'
import App from './App.tsx'



createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
)
