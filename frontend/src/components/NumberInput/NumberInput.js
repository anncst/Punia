import React from 'react'
import PropTypes from 'prop-types'
import styles from './NumberInput.module.scss'

const NumberInput = ({
  placeholder,
  label,
  value,
  id,
  onChange,
  max = 10,
  min = 0.01,
}) => {
  return (
    <>
      <input
        id={id}
        placeholder={placeholder}
        value={value}
        type="number"
        onChange={onChange}
        max={max}
        min={min}
        className={styles.numberInput}
      ></input>
      <label className={styles.label}>{label}</label>
    </>
  )
}

NumberInput.propTypes = {
  id: PropTypes.string,
  placeholder: PropTypes.string,
  label: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  max: PropTypes.number,
  min: PropTypes.number,
}
export default NumberInput
