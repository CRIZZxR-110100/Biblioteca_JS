import { useEffect, useState } from 'react'
import { getPrestamos, deletePrestamo } from '../../services/prestamosServices'
import { getUsuarios } from '../../services/clientesServices'
import { getLibros } from '../../services/librosServices'

function TablaPrestamos({ setSeleccionado, recargar }) {
  const [prestamos, setPrestamos] = useState([])
  const [error, setError] = useState(null)

  useEffect(() => {
    getPrestamos()
      .then(dataPrest => {
        return getLibros().then(dataLib => {
          return getUsuarios().then(dataClient => {
            return { dataPrest, dataLib, dataClient }
          })
        })
      })
      .then(({ dataPrest, dataLib, dataClient }) => {
        dataPrest.forEach(prestamo => {
          const cliente = dataClient.find(a => a.id === prestamo.idCliente)
          const titulo = dataLib.find(a => a.id === prestamo.idLibro)

          prestamo.nombreCliente = cliente ? `${cliente.nombre} ${cliente.apellido}` : prestamo.idCliente
          prestamo.tituloLibro = titulo ? titulo.titulo : prestamo.idLibro
        });
        setPrestamos(dataPrest)
      })
      .catch(err => setError(`Error ${err.status ?? ''}: No se pudieron cargar los préstamos`))
  }, [recargar])

  const borrarPrestamo = (prestamo) => {
    const confirmado = window.confirm(`¿Estás seguro de que deseas borrar el préstamo #${prestamo.id}?`);

    if (confirmado) {
      deletePrestamo(prestamo.id)
        .then(() => {
          setPrestamos(prestamos.filter(p => p.id !== prestamo.id));
          window.alert('Préstamo borrado correctamente');
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
          <th>Estado</th>
          <th>Libro</th>
          <th>Cliente</th>
          <th>Inicio</th>
          <th>Término</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        {prestamos.map((prestamo) => (
          <tr key={prestamo.id}>
            <td>{prestamo.id}</td>
            <td>{prestamo.estado}</td>
            <td>{prestamo.tituloLibro}</td>
            <td>{prestamo.nombreCliente}</td>
            <td>{prestamo.inicio}</td>
            <td>{prestamo.termino}</td>
            <td>
              <button className="w3-margin-left w3-margin-right w3-btn w3-green w3-small"
                onClick={() => {
                  setSeleccionado(prestamo)
                  window.scrollTo({ top: document.getElementById('Form').offsetTop, behavior: 'smooth' })
                }}>
                <i className="fa-solid fa-pen-to-square"></i> Editar
              </button>
              <button className="w3-margin-left w3-margin-right w3-btn w3-red w3-small"
                onClick={() => borrarPrestamo(prestamo)}>
                <i className="fa-solid fa-trash"></i> Borrar
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default TablaPrestamos
