import { useEffect, useState } from 'react'
import { getAutores, deleteAutor } from '../../services/autoresServices'

function TablaAutores({ setSeleccionado, recargar }) {
  const [autores, setAutores] = useState([])
  const [error, setError] = useState(null)

  useEffect(() => {
    getAutores()
      .then(data => setAutores(data))
      .catch(err => setError(`Error ${err.status ?? ''}: No se pudieron cargar los autores`))
  }, [recargar])

  const borrarAutor = (autor) => {
    const confirmado = window.confirm(`¿Estás seguro de que deseas borrar al autor: "${autor.nombre} ${autor.apellido}"?`);

    if (confirmado) {
      deleteAutor(autor.id)
        .then(() => {
          setAutores(autores.filter(a => a.id !== autor.id));
          window.alert('Autor borrado correctamente');
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
          <th>Nacionalidad</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        {autores.map((autor, idx) => (
          <tr key={autor.id ?? idx}>
            <td>{autor.id}</td>
            <td>{autor.nombre}</td>
            <td>{autor.apellido}</td>
            <td>{autor.nacionalidad}</td>
            <td>
              <button className="w3-margin-left w3-margin-right w3-btn w3-green w3-small"
                onClick={() => {
                  setSeleccionado(autor)
                  window.scrollTo({ top: document.getElementById('Form').offsetTop, behavior: 'smooth' })
                }}>
                <i className="fa-solid fa-pen-to-square"></i> Editar
              </button>
              <button className="w3-margin-left w3-margin-right w3-btn w3-red w3-small"
                onClick={() => borrarAutor(autor)}>
                <i className="fa-solid fa-trash"></i> Borrar
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default TablaAutores
