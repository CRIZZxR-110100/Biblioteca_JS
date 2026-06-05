import { useState } from "react"

import TablaPrestamos from "../tablas/TablaPrestamos"
import FormPrestamos from "../forms/FormPrestamos"

export const Prestamos = () => {
  const [prestamoSeleccionado, setPrestamoSeleccionado] = useState(null)
  const [recargar, setRecargar] = useState(0)

  const onSuccess = () => {
    setPrestamoSeleccionado(null)
    setRecargar(prev => prev + 1)
  }

  return (
    <div className="w3-margin-top">
      <h2>Tabla de <span className="textoBold">Prestamos</span></h2>
      <TablaPrestamos setSeleccionado={setPrestamoSeleccionado} recargar={recargar} />
      <hr className="w3-border" />
      <FormPrestamos prestamo={prestamoSeleccionado} onSuccess={onSuccess} />
    </div>
  )
}