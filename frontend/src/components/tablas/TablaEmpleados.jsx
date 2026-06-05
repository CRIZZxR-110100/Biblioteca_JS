import { useEffect, useState } from 'react'
import { getEmpleados, deleteEmpleado } from '../../services/empleadosServices'

function TablaEmpleados({ setSeleccionado, recargar }) {
  const [empleados, setEmpleados] = useState([])
  const [error, setError] = useState(null)

  useEffect(() => {
    getEmpleados()
      .then(data => setEmpleados(data))
      .catch(err => setError(`Error ${err.status ?? ''}: No se pudieron cargar los empleados`))
  }, [recargar])

  const borrarEmpleado = (empleado) => {
    const confirmado = window.confirm(`¿Estás seguro de que deseas borrar al empleado: "${empleado.nombre} ${empleado.apellido}"?`);

    if (confirmado) {
      deleteEmpleado(empleado.id)
        .then(() => {
          setEmpleados(empleados.filter(e => e.id !== empleado.id));
          window.alert('Empleado borrado correctamente');
        })
        .catch(err => window.alert(`Error al borrar: ${err.message}`))
    }
  }

  if (error) return <p className="w3-text-red">{error}</p>

  return (
    <table className="w3-table w3-striped w3-bordered w3-hoverable">
      <thead>
        <tr className="w3-blue">
          <th>ID</th>
          <th>Nombre</th>
          <th>Apellido</th>
          <th>Email</th>
          <th>Puesto</th>
          <th>Área</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        {empleados.map((empleado, idx) => (
          <tr key={empleado.id ?? idx}>
            <td>{empleado.id}</td>
            <td>{empleado.nombre}</td>
            <td>{empleado.apellido}</td>
            <td>{empleado.email}</td>
            <td>{empleado.puesto}</td>
            <td>{empleado.area}</td>
            <td>
              <button className="w3-margin-left w3-margin-right w3-btn w3-green w3-small"
                onClick={() => {
                  setSeleccionado(empleado)
                  window.scrollTo({ top: document.getElementById('Form').offsetTop, behavior: 'smooth' })
                }}>
                <i className="fa-solid fa-pen-to-square"></i> Editar
              </button>
              <button className="w3-margin-left w3-margin-right w3-btn w3-red w3-small"
                onClick={() => borrarEmpleado(empleado)}>
                <i className="fa-solid fa-trash"></i> Borrar
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default TablaEmpleados
