import { useState } from 'react'
import { postAutor } from '../services/autoresServices'

function FormAutores() {
  const [form, setForm] = useState({
    id: '',
    nombre: '',
    apellido: '',
    nacionalidad: '',
  })
  const [mensaje, setMensaje] = useState(null)
  const [isLoading, setIsLoading] = useState(false)

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)
    setMensaje(null)
    try {
      const data = await postAutor(form)
      setMensaje({ tipo: 'exito', texto: `Autor registrado correctamente con id: ${data.id}` })
      setForm({ id: '', nombre: '', apellido: '', nacionalidad: '' })
    } catch (error) {
      setMensaje({ tipo: 'error', texto: `Error ${error.status ?? ''}: No se pudo registrar el autor` })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="w3-card w3-padding w3-margin">
      <h3>Registrar Autor</h3>
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

        <label className="w3-text-blue"><b>Nombre</b></label>
        <input
          className="w3-input w3-border w3-margin-bottom"
          type="text"
          name="nombre"
          value={form.nombre}
          onChange={handleChange}
          required
        />

        <label className="w3-text-blue"><b>Apellido</b></label>
        <input
          className="w3-input w3-border w3-margin-bottom"
          type="text"
          name="apellido"
          value={form.apellido}
          onChange={handleChange}
          required
        />

        <label className="w3-text-blue"><b>Nacionalidad</b></label>
        <input
          className="w3-input w3-border w3-margin-bottom"
          type="text"
          name="nacionalidad"
          value={form.nacionalidad}
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

export default FormAutores
