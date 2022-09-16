import React from 'react'
import { Home } from './components/Home'
import Button from './components/Button/Button'
import NumberInput from './components/NumberInput/NumberInput'

function App() {
  return (
    <div>
      <Home />
      <Button>Dodaj</Button>
      <NumberInput placeholder="4,0" label="kg" />
      <NumberInput placeholder="200" label="gram" />
    </div>
  )
}

export default App
