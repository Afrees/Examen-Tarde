import React from 'react';
import { useState } from 'react'
import './App.css'
import { ProductoCard } from './components/ProductoCard/ProductoCard'
import { ListaSedes } from './components/ListaSedes/ListaSedes';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
  
   <ProductoCard/>
   <ListaSedes/>
  
    </>
  )
}

export default App
