import React from 'react'
import PropTypes from 'prop-types'
import styles from './Chart.module.scss'

export const Tooltip = ({ label }) => (
  <div className={styles.customTooltip}>
    <div className="label">{label}</div>
  </div>
)

Tooltip.propTypes = {
  label: PropTypes.number,
}
