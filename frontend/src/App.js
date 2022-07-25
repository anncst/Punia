import React from 'react'
import { Home } from './components/Home'
import Button from './components/Button/Button'
import AddWeight from './components/AddWeight/AddWeight'

function App() {
  // const color = 'Blue'
  return (
    <div>
      <Home />
      <Button>Dodaj</Button>
      <AddWeight />
    </div>
  )
}

export default App
