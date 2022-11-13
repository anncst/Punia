import React from 'react'
import PropTypes from 'prop-types'
import styles from './Chart.module.scss'

export const Tooltip1 = ({ label }) => (
  <div className={styles.customTooltip}>
    <p className="label">{label}</p>
  </div>
)

Tooltip1.propTypes = {
  label: PropTypes.number,
}
