import { useState } from 'react'
import { postCliente } from '../services/clientesServices'

function FormClientes() {
  const [form, setForm] = useState({
    id: '',
    nombre: '',
    apellido: '',
    userName: '',
    email: '',
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
      const data = await postCliente(form)
      setMensaje({ tipo: 'exito', texto: `Cliente registrado correctamente con id: ${data.id}` })
      setForm({ id: '', nombre: '', apellido: '', userName: '', email: '' })
    } catch (error) {
      setMensaje({ tipo: 'error', texto: `Error ${error.status ?? ''}: No se pudo registrar el cliente` })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="w3-card w3-padding w3-margin">
      <h3>Registrar Cliente</h3>
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
          {isLoading ? 'Guardando...' : 'Registrar'}
        </button>
      </form>
    </div>
  )
}

export default FormClientes
