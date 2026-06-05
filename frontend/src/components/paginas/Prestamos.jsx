import TablaPrestamos from "../tablas/TablaPrestamos"
import FormPrestamos from "../forms/FormPrestamos"

export const Prestamos = () => {
  return (
    <div className="w3-margin-top">
      <TablaPrestamos />
      <hr className="w3-border"></hr>
      <FormPrestamos />
    </div>
  )
}