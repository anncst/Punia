import React from 'react'
import PropTypes from 'prop-types'
import styles from './Radio.module.scss'

const Radio = ({ id }) => (
  <div className={styles.radioContainer}>
    <input type="radio" name="food" id={id} className={styles.input} />
    <label className={styles.radio} htmlFor={id}>
      {id}
    </label>
  </div>
)

Radio.propTypes = {
  id: PropTypes.string,
}
export default Radio
