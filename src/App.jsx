import { useState } from 'react'
import Aplicaciones from './components/Aplicaciones/Aplicaciones'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Aplicaciones/>
    </>
  )
}

export default App
