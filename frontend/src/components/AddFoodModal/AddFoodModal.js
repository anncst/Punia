import React, { useState } from 'react'
import Button from '../Button/Button'
import { Slider } from '../Slider/Slider'
import { NumberInput } from '../NumberInput/NumberInput'
import styles from './AddFoodModal.module.scss'

export const AddFoodModal = () => {
  const [value, setValue] = useState(50)
  return (
    <div className={styles.form}>
      <NumberInput label="gram" placeholder="120" />
      <div className={styles.orText}>lub</div>
      {/* Tutaj Radio dać */}
      <div className={styles.slider}>
        <Slider min={1} max={100} value={value} setValue={setValue} />
      </div>
      <div className={styles.formButton}>
        <Button>Dodaj</Button>
      </div>
    </div>
  )
}
