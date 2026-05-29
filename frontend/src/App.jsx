import { getUsuarios, getUsusarioById } from './services/clientesServices';

const App = () => {
  getUsuarios().then(data => console.log(data))

  const userId = 0
  getUsusarioById(userId)
    .then(data => console.log(data))
    .catch(error => {
      if (error.status === 404)
        console.error(`Usuario ${userId} no encontrado`)
      else
        console.error(`Error al obtener el usuario: ${error.message}`)
    });
}

export default App