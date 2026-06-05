import TablaLibros from "../tablas/TablaLibros"
import FormLibros from "../forms/FormLibros"

export const Libros = () => {
  return(
    <div className="w3-margin-top">
      <TablaLibros/>
      <hr className="w3-border"></hr>
      <FormLibros/>
    </div>
  )
}