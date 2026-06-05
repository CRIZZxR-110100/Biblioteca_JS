import { useState, useEffect } from 'react'
import { postAutor, putAutor } from '../../services/autoresServices'

function FormAutores({ autor = null, onSuccess }) {
  const isEditar = autor !== null
  const vacio = { nombre: '', apellido: '', nacionalidad: '' }

  const [form, setForm] = useState(autor ?? vacio)
  const [mensaje, setMensaje] = useState(null)
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    setForm(autor ?? vacio)
    setMensaje(null)
  }, [autor])

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)
    setMensaje(null)
    try {
      if (isEditar) {
        await putAutor(form.id, form)
        setMensaje({ tipo: 'exito', texto: 'Autor actualizado correctamente' })
      } else {
        const data = await postAutor(form)
        setMensaje({ tipo: 'exito', texto: `Autor registrado correctamente con id: ${data.id}` })
      }
      setTimeout(() => {
        onSuccess?.()
        window.scrollTo({ top: 0, behavior: 'smooth' })
      }, 1200)
    } catch (error) {
      setMensaje({ tipo: 'error', texto: `Error ${error.status ?? ''}: No se pudo ${isEditar ? 'editar' : 'registrar'} el autor` })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div id="Form" className="w3-margin-bottom">
      <h2 className="w3-margin-top">{isEditar ? 'Editar' : 'Registrar'} <span className="textoBold">Autor</span></h2>
      {mensaje && (
        <div className={`w3-panel ${mensaje.tipo === 'exito' ? 'w3-green' : 'w3-red'}`}>
          <p>{mensaje.texto}</p>
        </div>
      )}
      <form onSubmit={handleSubmit}>
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

export default FormAutores
