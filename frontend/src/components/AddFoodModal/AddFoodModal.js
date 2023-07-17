import React, { useState } from 'react'
import Button from '../Button/Button'
import { Slider } from '../Slider/Slider'
import { NumberInput } from '../NumberInput/NumberInput'
import styles from './AddFoodModal.module.scss'
import Radio from '../Radio/Radio'

export const AddFoodModal = () => {
  const [value, setValue] = useState(50)
  const [chosen, setChosen] = useState()
  return (
    <div className={styles.form}>
      <NumberInput label="gram" placeholder="120" />
      <div className={styles.orText}>lub</div>
      <div className={styles.radioBox}>
        <Radio id="200g" name="food" onChange={setChosen} />
        <Radio id="400g" name="food" onChange={setChosen} />
        <Radio id="600g" name="food" onChange={setChosen} />
      </div>
      <div className={styles.slider}>
        <Slider min={1} max={100} value={value} setValue={setValue} />
      </div>
      <div className={styles.formButton}>
        <Button>Dodaj</Button>
      </div>
    </div>
  )
}
