import { useState } from "react"

import TablaClientes from "../tablas/TablaClientes"
import FormClientes from "../forms/FormClientes"

export const Clientes = () => {
  const [clienteSeleccionado, setClienteSeleccionado] = useState(null)
  const [recargar, setRecargar] = useState(0)

  const onSuccess = () => {
    setClienteSeleccionado(null)
    setRecargar(prev => prev + 1)
  }

  return (
    <div className="w3-margin-top">
      <h2>Tabla de <span className="textoBold">Clientes</span></h2>
      <TablaClientes setSeleccionado={setClienteSeleccionado} recargar={recargar} />
      <hr className="w3-border" />
      <FormClientes cliente={clienteSeleccionado} onSuccess={onSuccess} />
    </div>
  )
}