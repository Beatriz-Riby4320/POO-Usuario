
import { Usuario } from './models/Usuario'
import './App.css'

function App() {
  const usuario = new Usuario('João', 30);
  
  return (
    <>
      <p>{usuario.apresentar()}</p>
    </>
  )
}

export default App
