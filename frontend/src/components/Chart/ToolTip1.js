import React from 'react'
import PropTypes from 'prop-types'
import styles from './Chart.module.scss'

export const Tooltip1 = ({ label }) => (
  <div className={styles.customTooltip}>
    <div className="label">{label}</div>
  </div>
)

Tooltip1.propTypes = {
  label: PropTypes.number,
}
