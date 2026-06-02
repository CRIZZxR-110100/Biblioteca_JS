import { getUsuarios, getUsusarioById } from './services/clientesServices';

import TablaLibros from './components/TablaLibros'
import TablaAutores from './components/TablaAutores'
import TablaClientes from './components/TablaClientes'
import TablaEmpleados from './components/TablaEmpleados'
import TablaPrestamos from './components/TablaPrestamos'

import FormLibros from './components/FormLibros'
import FormAutores from './components/FormAutores'
import FormClientes from './components/FormClientes'
import FormEmpleados from './components/FormEmpleados'
import FormPrestamos from './components/FormPrestamos'

const App = () => {
  return (
    <div>
      <FormLibros />
      <FormAutores />
      <FormClientes />
      <FormEmpleados />
      <FormPrestamos />
    </div>
  )
}

export default App