
import { Usuario } from './models/Usuario'
import './App.css'

function App() {
  const usuario1 = new Usuario('João', 30);
  const usuario2 = new Usuario('Maria', 25);

 
  
  return (
    <>
      <p>{usuario1.apresentar()}</p>
      <p>{usuario2.apresentar()}</p>
    </>
  )
}

export default App
