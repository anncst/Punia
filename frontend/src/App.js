import React from 'react'
import { Home } from './components/Home'
import Button from './components/Button/Button'
import NumberInput from './components/NumberInput/NumberInput'
import InfoBox from './components/InfoBox/InfoBox'

function App() {
  return (
    <div>
      <Home />
      <Button>Dodaj</Button>
      <NumberInput placeholder="4,00" label="kg" max="10" step="0.01" />
      <NumberInput placeholder="200" label="gram" max="10" />
      <InfoBox
        text="Waga"
        value="3.50"
        unit="kg"
        change="200"
        changeUnit="g"
        date="wczoraj"
      />
    </div>
  )
}

export default App
