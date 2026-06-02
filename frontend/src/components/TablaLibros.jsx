import { useEffect, useState } from 'react'
import { getLibros } from '../services/librosServices'

function TablaLibros() {
  const [libros, setLibros] = useState([])
  const [error, setError] = useState(null)

  useEffect(() => {
    getLibros()
      .then(data => setLibros(data))
      .catch(err => setError(`Error ${err.status ?? ''}: No se pudieron cargar los libros`))
  }, [])

  if (error) return <p className="w3-text-red">{error}</p>

  return (
    <table className="w3-table w3-striped w3-bordered w3-hoverable">
      <thead>
        <tr className="w3-blue">
          <th>ID</th>
          <th>Título</th>
          <th>Editorial</th>
          <th>Edición</th>
          <th>Año Pub.</th>
        </tr>
      </thead>
      <tbody>
        {libros.map((libro, idx) => (
          <tr key={libro.id ?? idx}>
            <td>{libro.id}</td>
            <td>{libro.titulo}</td>
            <td>{libro.editorial}</td>
            <td>{libro.edicion}</td>
            <td>{libro.ano_pub}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default TablaLibros
