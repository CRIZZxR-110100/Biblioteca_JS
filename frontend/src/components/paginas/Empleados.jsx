import TablaEmpleados from "../tablas/TablaEmpleados"
import FormEmpleados from "../forms/FormEmpleados"

export const Empleados = () => {
  return(
    <div className="w3-margin-top">
      <TablaEmpleados/>
      <hr className="w3-border"></hr>
      <FormEmpleados/>
    </div>
  )
}