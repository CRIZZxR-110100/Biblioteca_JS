import { useEffect, useState } from 'react'
import { getUsuarios } from '../services/clientesServices'

function TablaClientes() {
  const [clientes, setClientes] = useState([])
  const [error, setError] = useState(null)

  useEffect(() => {
    getUsuarios()
      .then(data => setClientes(data))
      .catch(err => setError(`Error ${err.status ?? ''}: No se pudieron cargar los clientes`))
  }, [])

  if (error) return <p className="w3-text-red">{error}</p>

  return (
    <table className="w3-table w3-striped w3-bordered w3-hoverable">
      <thead>
        <tr className="w3-blue">
          <th>ID</th>
          <th>Nombre</th>
          <th>Apellido</th>
          <th>Usuario</th>
          <th>Email</th>
        </tr>
      </thead>
      <tbody>
        {clientes.map((cliente, idx) => (
          <tr key={cliente.id ?? idx}>
            <td>{cliente.id}</td>
            <td>{cliente.nombre}</td>
            <td>{cliente.apellido}</td>
            <td>{cliente.userName}</td>
            <td>{cliente.email}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default TablaClientes
