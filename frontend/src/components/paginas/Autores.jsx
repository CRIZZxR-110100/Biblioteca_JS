import TablaAutores from "../tablas/TablaAutores"
import FormAutores from "../forms/FormAutores"

export const Autores = () => {
  return (
    <div className="w3-margin-top">
      <TablaAutores/>
      <hr className="w3-border"></hr>
      <FormAutores/>
    </div>
  )
}