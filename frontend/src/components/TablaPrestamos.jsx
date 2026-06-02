import { useEffect, useState } from 'react'
import { getPrestamos } from '../services/prestamosServices'

function TablaPrestamos() {
  const [prestamos, setPrestamos] = useState([])
  const [error, setError] = useState(null)

  useEffect(() => {
    getPrestamos()
      .then(data => setPrestamos(data))
      .catch(err => setError(`Error ${err.status ?? ''}: No se pudieron cargar los préstamos`))
  }, [])

  if (error) return <p className="w3-text-red">{error}</p>

  return (
    <table className="w3-table w3-striped w3-bordered w3-hoverable">
      <thead>
        <tr className="w3-blue">
          <th>Estado</th>
          <th>ID Libro</th>
          <th>ID Cliente</th>
          <th>Inicio</th>
          <th>Término</th>
        </tr>
      </thead>
      <tbody>
        {prestamos.map((prestamo, idx) => (
          <tr key={idx}>
            <td>{prestamo.estado}</td>
            <td>{prestamo.idLibro}</td>
            <td>{prestamo.idCliente}</td>
            <td>{prestamo.inicio}</td>
            <td>{prestamo.termino}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default TablaPrestamos
