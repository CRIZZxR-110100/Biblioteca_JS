import { useEffect, useState } from 'react'
import { getEmpleados } from '../../services/empleadosServices'

function TablaEmpleados() {
  const [empleados, setEmpleados] = useState([])
  const [error, setError] = useState(null)

  useEffect(() => {
    getEmpleados()
      .then(data => setEmpleados(data))
      .catch(err => setError(`Error ${err.status ?? ''}: No se pudieron cargar los empleados`))
  }, [])

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
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default TablaEmpleados
