import { NavLink } from "react-router-dom";

export const NavBar = () => {
  return (
    <div className="w3-bar w3-blue w3-padding" id="NavBar">
      <NavLink to="/libros" className="w3-bar-item w3-button"><i className="fa-solid fa-book"></i> Libros</NavLink>
      <NavLink to="/autores" className="w3-bar-item w3-button"><i className="fa-solid fa-signature"></i> Autores</NavLink>
      <NavLink to="/clientes" className="w3-bar-item w3-button"><i className="fa-solid fa-user"></i> Clientes</NavLink>
      <NavLink to="/empleados" className="w3-bar-item w3-button"><i className="fa-solid fa-id-badge"></i> Empleados</NavLink>
      <NavLink to="/prestamos" className="w3-bar-item w3-button"><i className="fa-solid fa-arrow-right-arrow-left"></i> Préstamos</NavLink>
      <NavLink to="/" className="w3-right w3-bar-item w3-button"><i className="fa-solid fa-house"></i> Inicio</NavLink>
    </div>
  )
}