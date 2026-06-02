import { useEffect, useState } from 'react'
import { getAutores } from '../services/autoresServices'

function TablaAutores() {
  const [autores, setAutores] = useState([])
  const [error, setError] = useState(null)

  useEffect(() => {
    getAutores()
      .then(data => setAutores(data))
      .catch(err => setError(`Error ${err.status ?? ''}: No se pudieron cargar los autores`))
  }, [])

  if (error) return <p className="w3-text-red">{error}</p>

  return (
    <table className="w3-table w3-striped w3-bordered w3-hoverable">
      <thead>
        <tr className="w3-blue">
          <th>ID</th>
          <th>Nombre</th>
          <th>Apellido</th>
          <th>Nacionalidad</th>
        </tr>
      </thead>
      <tbody>
        {autores.map((autor, idx) => (
          <tr key={autor.id ?? idx}>
            <td>{autor.id}</td>
            <td>{autor.nombre}</td>
            <td>{autor.apellido}</td>
            <td>{autor.nacionalidad}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default TablaAutores
