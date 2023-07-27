import React, { useState } from 'react'
import { DateTime } from 'luxon'
import { Home } from './components/Home'
import Button from './components/Button/Button'
import InfoBox from './components/InfoBox/InfoBox'
import { NumberInput } from './components/NumberInput/NumberInput'
import { Slider } from './components/Slider/Slider'
import Modal from './components/Modal/Modal'
import { AddFoodModal } from './components/AddFoodModal/AddFoodModal'
import { AddWeightModal } from './components/AddWeightModal/AddWeightModal'

function App() {
  const [value, setValue] = useState(50)
  const [isFoodModalOpen, setFoodModalOpen] = useState(false)
  const [isWeightModalOpen, setWeightModalOpen] = useState(false)
  return (
    <div>
      <Home />
      <Button onClick={() => setFoodModalOpen(true)}>Dodaj karmę</Button>
      {isFoodModalOpen && (
        <Modal onClose={() => setFoodModalOpen(false)} title="Dodaj karmę">
          <AddFoodModal />
        </Modal>
      )}
      <Button onClick={() => setWeightModalOpen(true)}>Dodaj wagę</Button>
      {isWeightModalOpen && (
        <Modal onClose={() => setWeightModalOpen(false)} title="Dodaj wagę">
          <AddWeightModal />
        </Modal>
      )}
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
      <Slider min={1} max={100} value={value} setValue={setValue} />
    </div>
  )
}

export default App
