import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import styles from './Slider.module.scss'

export const Slider = ({ min, max, value, setValue, className }) => (
  <div
    className={classNames(styles.sliderBox, className)}
    style={{ '--progress-percent': `${value}%` }}
  >
    <input
      type="range"
      min={min}
      max={max}
      value={value}
      onChange={(event) => {
        setValue(+event.target.value)
      }}
      className={styles.slider}
    />
    <div className={styles.value}>{value}%</div>
  </div>
)

Slider.propTypes = {
  min: PropTypes.number,
  max: PropTypes.number,
  value: PropTypes.number,
  setValue: PropTypes.func,
  className: PropTypes.string,
}
