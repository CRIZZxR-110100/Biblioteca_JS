import { useEffect, useState } from 'react'
import { getUsuarios, deleteCliente } from '../../services/clientesServices'

function TablaClientes({ setSeleccionado, recargar }) {
  const [clientes, setClientes] = useState([])
  const [error, setError] = useState(null)

  useEffect(() => {
    getUsuarios()
      .then(data => setClientes(data))
      .catch(err => setError(`Error ${err.status ?? ''}: No se pudieron cargar los clientes`))
  }, [recargar])

  const borrarCliente = (cliente) => {
    const confirmado = window.confirm(`¿Estás seguro de que deseas borrar al cliente: "${cliente.nombre} ${cliente.apellido}"?`);

    if (confirmado) {
      deleteCliente(cliente.id)
        .then(() => {
          setClientes(clientes.filter(c => c.id !== cliente.id));
          window.alert('Cliente borrado correctamente');
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
          <th>Usuario</th>
          <th>Email</th>
          <th>Acciones</th>
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
            <td>
              <button className="w3-margin-left w3-margin-right w3-btn w3-green w3-small"
                onClick={() => {
                  setSeleccionado(cliente)
                  window.scrollTo({ top: document.getElementById('Form').offsetTop, behavior: 'smooth' })
                }}>
                <i className="fa-solid fa-pen-to-square"></i> Editar
              </button>
              <button className="w3-margin-left w3-margin-right w3-btn w3-red w3-small"
                onClick={() => borrarCliente(cliente)}>
                <i className="fa-solid fa-trash"></i> Borrar
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default TablaClientes
