import { useState, useEffect } from 'react'
import { postCliente, putCliente } from '../../services/clientesServices'

function FormClientes({ cliente = null, onSuccess }) {
  const isEditar = cliente !== null
  const vacio = { nombre: '', apellido: '', userName: '', email: '' }

  const [form, setForm] = useState(cliente ?? vacio)
  const [mensaje, setMensaje] = useState(null)
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    setForm(cliente ?? vacio)
    setMensaje(null)
  }, [cliente])

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)
    setMensaje(null)
    try {
      if (isEditar) {
        await putCliente(form.id, form)
        setMensaje({ tipo: 'exito', texto: 'Cliente actualizado correctamente' })
      } else {
        const data = await postCliente(form)
        setMensaje({ tipo: 'exito', texto: `Cliente registrado correctamente con id: ${data.id}` })
      }
      setTimeout(() => {
        onSuccess?.()
        window.scrollTo({ top: 0, behavior: 'smooth' })
      }, 1200)
    } catch (error) {
      setMensaje({ tipo: 'error', texto: `Error ${error.status ?? ''}: No se pudo ${isEditar ? 'editar' : 'registrar'} el cliente` })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div id="Form" className="w3-margin-bottom">
      <h2 className="w3-margin-top">{isEditar ? 'Editar' : 'Registrar'} <span className="textoBold">Cliente</span></h2>
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

        <label className="w3-text-blue"><b>Usuario</b></label>
        <input
          className="w3-input w3-border w3-margin-bottom"
          type="text"
          name="userName"
          value={form.userName}
          onChange={handleChange}
          required
        />

        <label className="w3-text-blue"><b>Email</b></label>
        <input
          className="w3-input w3-border w3-margin-bottom"
          type="email"
          name="email"
          value={form.email}
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

export default FormClientes
