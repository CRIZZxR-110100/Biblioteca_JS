import { Route, Routes, Navigate } from "react-router-dom"
import { NavBar } from "./components/NavBar.jsx"

import { Home } from "./components/paginas/Home.jsx"
import { Libros } from "./components/paginas/Libros.jsx"
import { Autores } from "./components/paginas/Autores.jsx"
import { Clientes } from "./components/paginas/Clientes.jsx"
import { Empleados } from "./components/paginas/Empleados.jsx"
import { Prestamos } from "./components/paginas/Prestamos.jsx"


const App = () => {
  return (
    <>
      <NavBar />
      <div className="w3-container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/libros" element={<Libros />} />
          <Route path="/autores" element={<Autores />} />
          <Route path="/clientes" element={<Clientes />} />
          <Route path="/empleados" element={<Empleados />} />
          <Route path="/prestamos" element={<Prestamos />} />
          <Route path="/*" element={<Navigate to='/' />} />
        </Routes>
      </div>
    </>
  )
}

export default App