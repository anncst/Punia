import React from 'react'
import Button from '../Button/Button'
import styles from './AddWeight.module.scss'

const AddWeight = () => {
  return (
    <div>
      <div className={styles.title}>Dodaj wagę</div>
      <div className={styles.boxBorder}>
        <form className={styles.form}>
          <div>
            <input
              type="text"
              name="name"
              placeholder="4,0"
              className={styles.input}
            />
            <label className={styles.label}>kg</label>
          </div>
          <div className={styles.button}>
            <Button>Dodaj</Button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default AddWeight
