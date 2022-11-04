import React from 'react'
import PropTypes from 'prop-types'
import styles from './NumberInput.module.scss'

export const NumberInput = ({
  placeholder,
  label,
  value,
  id,
  onChange,
  max,
  min = 0,
  step,
}) => (
  <>
    <input
      id={id}
      placeholder={placeholder}
      value={value}
      type="number"
      onChange={onChange}
      max={max}
      min={min}
      step={step}
      className={styles.numberInput}
    />
    <label className={styles.label}>{label}</label>
  </>
)

NumberInput.propTypes = {
  id: PropTypes.string,
  placeholder: PropTypes.string,
  label: PropTypes.string,
  value: PropTypes.number,
  onChange: PropTypes.func,
  max: PropTypes.number,
  min: PropTypes.number,
  step: PropTypes.number,
}
