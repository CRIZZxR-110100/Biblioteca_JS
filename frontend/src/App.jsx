import { getUsuarios, getUsusarioById } from './services/clientesServices';

const App = () => {
  getUsuarios().then(data => console.log(data))

  getUsusarioById(541).then(data => (data === 404) ? console.log(`No existe ID ${0}`) : console.log(data));
}

export default App