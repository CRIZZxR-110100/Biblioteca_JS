import { useState } from "react"

import TablaAutores from "../tablas/TablaAutores"
import FormAutores from "../forms/FormAutores"

export const Autores = () => {
  const [autorSeleccionado, setAutorSeleccionado] = useState(null)
  const [recargar, setRecargar] = useState(0)

  const onSuccess = () => {
    setAutorSeleccionado(null)
    setRecargar(prev => prev + 1)
  }

  return (
    <div className="w3-margin-top">
      <h2>Tabla de <span className="textoBold">Autores</span></h2>
      <TablaAutores setSeleccionado={setAutorSeleccionado} recargar={recargar} />
      <hr className="w3-border" />
      <FormAutores autor={autorSeleccionado} onSuccess={onSuccess} />
    </div>
  )
}