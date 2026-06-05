import { useEffect, useState } from 'react'
import { getLibros } from '../../services/librosServices'
import { getAutores } from '../../services/autoresServices'

function TablaLibros() {
  const [libros, setLibros] = useState([])
  const [error, setError] = useState(null)

  useEffect(() => {
    getLibros()
      .then(dataLib => {
        return getAutores().then(dataAut => {
          return { dataLib, dataAut }
        })
      })
      .then(({ dataLib, dataAut }) => {
        dataLib.forEach(libro => {
          libro.nombreAutores = []

          libro.idAutores.map(autor => {
            const autorEncontrado = dataAut.find(a => a.id === autor);

            libro.nombreAutores.push(`${autorEncontrado.nombre} ${autorEncontrado.apellido}`);
          })
        })
        setLibros(dataLib)
      })
      .catch(err => setError(`Error ${err.status ?? ''}: No se pudieron cargar los libros`))
  }, [])

  if (error) return <p className="w3-text-red">{error}</p>

  return (
    <table className="w3-table w3-striped w3-bordered w3-hoverable">
      <thead>
        <tr className="w3-blue">
          <th>ID</th>
          <th>Título</th>
          <th>Autores</th>
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
            <td>{libro.nombreAutores.join(', ')}</td>
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
