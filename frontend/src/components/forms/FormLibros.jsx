import { useState, useEffect } from 'react'
import { postLibro } from '../../services/librosServices'
import { getAutores } from '../../services/autoresServices'

function FormLibros() {
  const [form, setForm] = useState({
    id: '',
    titulo: '',
    idAutor: '',
    editorial: '',
    edicion: '',
    ano_pub: '',
  })
  const [autores, setAutores] = useState([])
  const [mensaje, setMensaje] = useState(null)
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    getAutores()
      .then(data => setAutores(data))
      .catch(() => setMensaje({ tipo: 'error', texto: 'No se pudieron cargar los autores' }))
  }, [])

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)
    setMensaje(null)
    try {
      // idAutores es un array en el modelo de datos
      const { idAutor, ...resto } = form
      const data = await postLibro({ ...resto, idAutores: idAutor ? [idAutor] : [] })
      setMensaje({ tipo: 'exito', texto: `Libro registrado correctamente con id: ${data.id}` })
      setForm({ id: '', titulo: '', idAutor: '', editorial: '', edicion: '', ano_pub: '' })
    } catch (error) {
      setMensaje({ tipo: 'error', texto: `Error ${error.status ?? ''}: No se pudo registrar el libro` })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="w3-card w3-padding w3-margin">
      <h3>Registrar Libro</h3>
      {mensaje && (
        <div className={`w3-panel ${mensaje.tipo === 'exito' ? 'w3-green' : 'w3-red'}`}>
          <p>{mensaje.texto}</p>
        </div>
      )}
      <form onSubmit={handleSubmit}>
        <label className="w3-text-blue"><b>ID</b></label>
        <input
          className="w3-input w3-border w3-margin-bottom"
          type="text"
          name="id"
          value={form.id}
          onChange={handleChange}
          required
        />

        <label className="w3-text-blue"><b>Título</b></label>
        <input
          className="w3-input w3-border w3-margin-bottom"
          type="text"
          name="titulo"
          value={form.titulo}
          onChange={handleChange}
          required
        />

        <label className="w3-text-blue"><b>Autor</b></label>
        <select
          className="w3-select w3-border w3-margin-bottom"
          name="idAutor"
          value={form.idAutor}
          onChange={handleChange}
          required
        >
          <option value="" disabled>-- Selecciona un autor --</option>
          {autores.map(autor => (
            <option key={autor.id} value={autor.id}>
              {autor.nombre} {autor.apellido}
            </option>
          ))}
        </select>

        <label className="w3-text-blue"><b>Editorial</b></label>
        <input
          className="w3-input w3-border w3-margin-bottom"
          type="text"
          name="editorial"
          value={form.editorial}
          onChange={handleChange}
          required
        />

        <label className="w3-text-blue"><b>Edición</b></label>
        <input
          className="w3-input w3-border w3-margin-bottom"
          type="number"
          name="edicion"
          value={form.edicion}
          onChange={handleChange}
          required
        />

        <label className="w3-text-blue"><b>Año de publicación</b></label>
        <input
          className="w3-input w3-border w3-margin-bottom"
          type="number"
          name="ano_pub"
          value={form.ano_pub}
          onChange={handleChange}
          required
        />

        <button
          className="w3-button w3-blue w3-margin-top"
          type="submit"
          disabled={isLoading}
        >
          {isLoading ? 'Guardando...' : 'Registrar'}
        </button>
      </form>
    </div>
  )
}

export default FormLibros
