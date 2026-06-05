import { useState } from "react"

import TablaEmpleados from "../tablas/TablaEmpleados"
import FormEmpleados from "../forms/FormEmpleados"

export const Empleados = () => {
  const [empleadoSeleccionado, setEmpleadoSeleccionado] = useState(null)
  const [recargar, setRecargar] = useState(0)

  const onSuccess = () => {
    setEmpleadoSeleccionado(null)
    setRecargar(prev => prev + 1)
  }

  return (
    <div className="w3-margin-top">
      <h2>Tabla de <span className="textoBold">Empleados</span></h2>
      <TablaEmpleados setSeleccionado={setEmpleadoSeleccionado} recargar={recargar} />
      <hr className="w3-border" />
      <FormEmpleados empleado={empleadoSeleccionado} onSuccess={onSuccess} />
    </div>
  )
}