import TablaClientes from "../tablas/TablaClientes"
import FormClientes from "../forms/FormClientes"

export const Clientes = () => {
  return(
    <div className="w3-margin-top">
      <TablaClientes/>
      <hr className="w3-border"></hr>
      <FormClientes/>
    </div>
  )
}