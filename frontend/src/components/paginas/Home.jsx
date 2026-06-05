export const Home = () => {
  return (
    <div>
      {/* Hero */}
      <div className="w3-container w3-padding-64 w3-center">
        <h1 className="w3-xxxlarge">Sistema de Biblioteca</h1>
        <p className="w3-large">
          Aplicación web para la gestión de libros, autores, clientes, empleados y préstamos.
        </p>
      </div>

      {/* ¿Qué puede hacer esta app? */}
      <div className="w3-container w3-content w3-padding-32">
        <h3 className="w3-text-blue w3-center">¿Qué puede hacer esta aplicación?</h3>
        <p className="w3-center w3-text-gray">
          Esta app permite administrar los datos principales de una biblioteca a través de
          tablas de consulta y formularios de registro para cada módulo.
        </p>

        <div className="w3-row-padding w3-margin-top">
          <div className="w3-section">
            <div className="w3-card w3-padding-16 w3-container">
              <h4>📚 Libros</h4>
              <ul className="w3-ul w3-border-0">
                <li className="w3-text-gray">✔ Consultar el catálogo completo de libros</li>
                <li className="w3-text-gray">✔ Ver título, editorial, edición, año de publicación y autores de cada libro</li>
                <li className="w3-text-gray">✔ Registrar nuevos libros con su información completa</li>
              </ul>
            </div>
          </div>

          <div className="w3-section">
            <div className="w3-card w3-padding-16 w3-container">
              <h4>✍️ Autores</h4>
              <ul className="w3-ul w3-border-0">
                <li className="w3-text-gray">✔ Consultar la lista de autores registrados</li>
                <li className="w3-text-gray">✔ Ver nombre, apellido y datos de cada autor</li>
                <li className="w3-text-gray">✔ Registrar nuevos autores en el sistema</li>
              </ul>
            </div>
          </div>

          <div className="w3-section">
            <div className="w3-card w3-padding-16 w3-container">
              <h4>👤 Clientes</h4>
              <ul className="w3-ul w3-border-0">
                <li className="w3-text-gray">✔ Consultar los clientes registrados en la biblioteca</li>
                <li className="w3-text-gray">✔ Ver la información de contacto de cada cliente</li>
                <li className="w3-text-gray">✔ Registrar nuevos clientes</li>
              </ul>
            </div>
          </div>

          <div className="w3-section">
            <div className="w3-card w3-padding-16 w3-container">
              <h4>🪪 Empleados</h4>
              <ul className="w3-ul w3-border-0">
                <li className="w3-text-gray">✔ Consultar el personal de la biblioteca</li>
                <li className="w3-text-gray">✔ Ver los datos de cada empleado</li>
                <li className="w3-text-gray">✔ Registrar nuevos empleados en el sistema</li>
              </ul>
            </div>
          </div>

          <div className="w3-section">
            <div className="w3-card w3-padding-16 w3-container">
              <h4>🔖 Préstamos</h4>
              <ul className="w3-ul w3-border-0">
                <li className="w3-text-gray">✔ Consultar todos los préstamos realizados</li>
                <li className="w3-text-gray">✔ Ver qué libro fue prestado, a qué cliente y por qué empleado</li>
                <li className="w3-text-gray">✔ Registrar nuevos préstamos</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Nota al pie */}
        <div className="w3-panel w3-pale-blue w3-border-left w3-border-blue w3-margin-top">
          <p>
            <b>Nota:</b> Usa la barra de navegación superior para acceder a cada módulo.
            Cada sección cuenta con una vista de tabla y un formulario de registro.
          </p>
        </div>
      </div>
    </div>
  )
}
