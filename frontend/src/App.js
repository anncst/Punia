import React, { useState } from 'react'
import { DateTime } from 'luxon'
import { Home } from './components/Home'
import Button from './components/Button/Button'
import InfoBox from './components/InfoBox/InfoBox'
import { NumberInput } from './components/NumberInput/NumberInput'
import { Slider } from './components/Slider/Slider'
import Radio from './components/Radio/Radio'
import styles from './App.module.scss'

function App() {
  const [chosen, setChosen] = useState()
  const [value, setValue] = useState(50)
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

      <div className={styles.radioBox}>
        <Radio id="200g" name="food" onChange={setChosen} />
        <Radio id="400g" name="food" onChange={setChosen} />
        <Radio id="600g" name="food" onChange={setChosen} />
      </div>
      <div>{chosen}</div>
      <Slider min={1} max={100} value={value} setValue={setValue} />
    </div>
  )
}

export default App
