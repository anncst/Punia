import React from 'react'
import { NumberInput } from '../NumberInput/NumberInput'
import styles from './AddWeightModal.module.scss'
import Button from '../Button/Button'

export const AddWeightModal = () => (
  <div className={styles.weightForm}>
    <NumberInput
      label="kg"
      placeholder="4,0"
      className={styles.weightNumberInput}
    />
    <div>
      <Button>Dodaj</Button>
    </div>
  </div>
)
