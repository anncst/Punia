import React from 'react'
import { DateTime } from 'luxon'
import { Home } from './components/Home'
import Button from './components/Button/Button'
import InfoBox from './components/InfoBox/InfoBox'
import { NumberInput } from './components/NumberInput/NumberInput'
import { Chart } from './components/Chart/Chart'

function App() {
  const data = [
    { name: 'Page A', value: 400 },
    { name: 'amu', value: 200 },
    { name: 'mniamu', value: 300 },
    { name: 'Page B', value: 600 },
  ]
  return (
    <div>
      <Home />
      <Button>Dodaj</Button>
      <InfoBox
        text="Waga"
        value={3.5}
        unit="kg"
        change={200}
        changeUnit="g"
        date={DateTime.now()}
        color="red"
      />
      <InfoBox
        text="Waga"
        value={10}
        unit="kg"
        change={200}
        changeUnit="g"
        date={DateTime.now()}
        color="green"
      />
      <NumberInput label="Lubie punie" placeholder="Lubie Punie" />
      <Chart title="Karma" data={data} />
    </div>
  )
}

export default App
