import { useEffect, useState } from 'react'
import { getLibros, deleteLibro } from '../../services/librosServices'
import { getAutores } from '../../services/autoresServices'

function TablaLibros({ setSeleccionado, recargar }) {
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
          const autor = dataAut.find(a => a.id === libro.idAutor)

          libro.nombreAutor = autor ? `${autor.nombre} ${autor.apellido}` : libro.idAutor
        })
        setLibros(dataLib)
      })
      .catch(err => setError(`Error ${err.status ?? ''}: No se pudieron cargar los libros`))
  }, [recargar])

  const borrarLibro = (libro) => {
    const confirmado = window.confirm(`¿Estás seguro de que deseas borrar el libro: "${libro.titulo}"?`);

    if (confirmado) {
      deleteLibro(libro.id)
        .then(() => {
          setLibros(libros.filter(l => l.id !== libro.id));
          window.alert('Libro borrado correctamente');
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
          <th>Título</th>
          <th>Autor(a)</th>
          <th>Editorial</th>
          <th>Edición</th>
          <th>Año Pub.</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        {libros.map((libro, idx) => (
          <tr key={libro.id ?? idx}>
            <td>{libro.id}</td>
            <td>{libro.titulo}</td>
            <td>{libro.nombreAutor}</td>
            <td>{libro.editorial}</td>
            <td>{libro.edicion}</td>
            <td>{libro.ano_pub}</td>
            <td>
              <button className="w3-margin-left w3-margin-right w3-btn w3-green w3-small"
                onClick={() => {
                  setSeleccionado(libro)
                  window.scrollTo({ top: document.getElementById('Form').offsetTop, behavior: 'smooth' })
                }}>
                <i className="fa-solid fa-pen-to-square"></i> Editar
              </button>
              <button className="w3-margin-left w3-margin-right w3-btn w3-red w3-small"
                onClick={() => borrarLibro(libro)}>
                <i className="fa-solid fa-trash"></i> Borrar
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default TablaLibros
