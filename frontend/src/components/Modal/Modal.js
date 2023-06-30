import React, { useState } from 'react'
import CloseIcon from '@material-ui/icons'
import PropTypes from 'prop-types'
import Button from '../Button/Button'
import { Slider } from '../Slider/Slider'
import styles from './Modal.module.scss'
import { NumberInput } from '../NumberInput/NumberInput'

const Modal = ({ onClose, title }) => {
  const [value, setValue] = useState(50)
  const stopEventPropagation = (event) => {
    event.stopPropagation()
  }

  return (
    <div className={styles.modalBackground} onMouseDown={onClose}>
      <button onClick={onClose}>
        <CloseIcon />
      </button>
      <div className={styles.modal} onMouseDown={stopEventPropagation}>
        <h1>{title}</h1>
        <NumberInput label="gram" placeholder="120" />
        <Slider min={1} max={100} value={value} setValue={setValue} />
        <Button>Dodaj</Button>
      </div>
      <p className={styles.veryImportantComponent}>Punia nieładnie pachnie</p>
    </div>
  )
}

Modal.propTypes = {
  onClose: PropTypes.func,
  title: PropTypes.string,
}
export default Modal
