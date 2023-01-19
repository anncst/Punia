import React from 'react'
import PropTypes from 'prop-types'
import styles from './Radio.module.scss'

const Radio = ({ id, name }) => (
  <div className={styles.radioContainer}>
    <input type="radio" name={name} id={id} className={styles.input} />
    <label className={styles.radio} htmlFor={id}>
      {id}
    </label>
  </div>
)

Radio.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
}
export default Radio
