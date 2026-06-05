import { useState, useEffect } from 'react'
import { postLibro, putLibro } from '../../services/librosServices'
import { getAutores } from '../../services/autoresServices'

function FormLibros({ libro = null, onSuccess }) {
  const isEditar = libro !== null
  const vacio = { titulo: '', idAutor: '', editorial: '', edicion: '', ano_pub: '' }

  const [form, setForm] = useState(libro ?? vacio)
  const [autores, setAutores] = useState([])
  const [mensaje, setMensaje] = useState(null)
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    getAutores()
      .then(data => setAutores(data))
      .catch(() => setMensaje({ tipo: 'error', texto: 'No se pudieron cargar los autores' }))
  }, [])

  useEffect(() => {
    setForm(libro ?? vacio)
    setMensaje(null)
  }, [libro])

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)
    setMensaje(null)
    try {
      if (isEditar) {
        await putLibro(form.id, form)
        setMensaje({ tipo: 'exito', texto: 'Libro actualizado correctamente' })
      } else {
        const data = await postLibro(form)
        setMensaje({ tipo: 'exito', texto: `Libro registrado correctamente con id: ${data.id}` })
      }
      setTimeout(() => {
        onSuccess?.()
        window.scrollTo({ top: 0, behavior: 'smooth' })
      }, 1200)
    } catch (error) {
      setMensaje({ tipo: 'error', texto: `Error ${error.status ?? ''}: No se pudo ${isEditar ? 'editar' : 'registrar'} el libro` })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div id="Form" className="w3-margin-bottom">
      <h2 className="w3-margin-top">{isEditar ? 'Editar' : 'Registrar'} <span className="textoBold">Libro</span></h2>
      {mensaje && (
        <div className={`w3-panel ${mensaje.tipo === 'exito' ? 'w3-green' : 'w3-red'}`}>
          <p>{mensaje.texto}</p>
        </div>
      )}
      <form onSubmit={handleSubmit}>
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
          {isLoading ? 'Guardando...' : isEditar ? 'Actualizar' : 'Registrar'}
        </button>

        {
          isEditar &&
          <button
            className="w3-button w3-margin-top w3-border w3-margin-left"
            type="button"
            onClick={() => {
              onSuccess?.()
              window.scrollTo({ top: 0, behavior: 'smooth' })
            }}>

            Cancelar
          </button>
        }
      </form>
    </div>
  )
}

export default FormLibros
