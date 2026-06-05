import { NavLink } from "react-router-dom";

export const NavBar = () => {
  return (
    <div className="w3-bar w3-border w3-blue">
      <NavLink to="/libros" className="w3-margin-left w3-bar-item w3-button">Libros</NavLink>
      <NavLink to="/autores" className="w3-bar-item w3-button">Autores</NavLink>
      <NavLink to="/clientes" className="w3-bar-item w3-button">Clientes</NavLink>
      <NavLink to="/empleados" className="w3-bar-item w3-button">Empleados</NavLink>
      <NavLink to="/prestamos" className="w3-bar-item w3-button">Préstamos</NavLink>
      <NavLink to="/" className="w3-margin-right w3-right w3-bar-item w3-button">Inicio</NavLink>
    </div>
  )
}