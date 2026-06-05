import { useState, useEffect } from 'react'
import { postPrestamo } from '../../services/prestamosServices'
import { getLibros } from '../../services/librosServices'
import { getUsuarios } from '../../services/clientesServices'

function FormPrestamos() {
  const [form, setForm] = useState({
    estado: 'activo',
    idLibro: '',
    idCliente: '',
    inicio: '',
    termino: '',
  })
  const [libros, setLibros] = useState([])
  const [clientes, setClientes] = useState([])
  const [mensaje, setMensaje] = useState(null)
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    getLibros()
      .then(data => setLibros(data))
      .catch(() => setMensaje({ tipo: 'error', texto: 'No se pudieron cargar los libros' }))

    getUsuarios()
      .then(data => setClientes(data))
      .catch(() => setMensaje({ tipo: 'error', texto: 'No se pudieron cargar los clientes' }))
  }, [])

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)
    setMensaje(null)
    try {
      const data = await postPrestamo(form)
      setMensaje({ tipo: 'exito', texto: `Préstamo registrado correctamente con id: ${data.id}` })
      setForm({ estado: 'activo', idLibro: '', idCliente: '', inicio: '', termino: '' })
    } catch (error) {
      setMensaje({ tipo: 'error', texto: `Error ${error.status ?? ''}: No se pudo registrar el préstamo` })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="w3-card w3-padding w3-margin">
      <h3>Registrar Préstamo</h3>
      {mensaje && (
        <div className={`w3-panel ${mensaje.tipo === 'exito' ? 'w3-green' : 'w3-red'}`}>
          <p>{mensaje.texto}</p>
        </div>
      )}
      <form onSubmit={handleSubmit}>
        <label className="w3-text-blue"><b>Estado</b></label>
        <select
          className="w3-select w3-border w3-margin-bottom"
          name="estado"
          value={form.estado}
          onChange={handleChange}
        >
          <option value="activo">Activo</option>
          <option value="devuelto">Devuelto</option>
        </select>

        <label className="w3-text-blue"><b>Libro</b></label>
        <select
          className="w3-select w3-border w3-margin-bottom"
          name="idLibro"
          value={form.idLibro}
          onChange={handleChange}
          required
        >
          <option value="" disabled>-- Selecciona un libro --</option>
          {libros.map(libro => (
            <option key={libro.id} value={libro.id}>
              {libro.titulo}
            </option>
          ))}
        </select>

        <label className="w3-text-blue"><b>Cliente</b></label>
        <select
          className="w3-select w3-border w3-margin-bottom"
          name="idCliente"
          value={form.idCliente}
          onChange={handleChange}
          required
        >
          <option value="" disabled>-- Selecciona un cliente --</option>
          {clientes.map(cliente => (
            <option key={cliente.id} value={cliente.id}>
              {cliente.nombre} {cliente.apellido}
            </option>
          ))}
        </select>

        <label className="w3-text-blue"><b>Fecha de inicio</b></label>
        <input
          className="w3-input w3-border w3-margin-bottom"
          type="datetime-local"
          name="inicio"
          value={form.inicio}
          onChange={handleChange}
          required
        />

        <label className="w3-text-blue"><b>Fecha de término</b></label>
        <input
          className="w3-input w3-border w3-margin-bottom"
          type="datetime-local"
          name="termino"
          value={form.termino}
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

export default FormPrestamos
