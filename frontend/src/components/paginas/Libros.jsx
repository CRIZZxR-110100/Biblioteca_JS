import { useState } from "react"

import TablaLibros from "../tablas/TablaLibros"
import FormLibros from "../forms/FormLibros"

export const Libros = () => {
  const [libroSeleccionado, setLibroSeleccionado] = useState(null)
  const [recargar, setRecargar] = useState(0)

  const onSuccess = () => {
    setLibroSeleccionado(null)
    setRecargar(prev => prev + 1)
  }

  return (
    <div className="w3-margin-top">
      <h2>Tabla de <span className="textoBold">Libros</span></h2>
      <TablaLibros setSeleccionado={setLibroSeleccionado} recargar={recargar} />
      <hr className="w3-border" />
      <FormLibros libro={libroSeleccionado} onSuccess={onSuccess} />
    </div>
  )
}