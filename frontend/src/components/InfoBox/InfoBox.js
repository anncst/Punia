import React from 'react'
import PropTypes from 'prop-types'
import styles from './InfoBox.module.scss'

const InfoBox = ({ text, value, date, unit, change, changeUnit }) => {
  return (
    <div className={styles.box}>
      <div className={styles.textBox}>
        <div className={styles.text}>{text}</div>
        <div className={styles.date}>{date}</div>
      </div>
      <div className={styles.contentBox}>
        <div className={styles.value}>
          {value}
          <span className={styles.unit}>{unit}</span>
        </div>
        <div className={styles.change}>
          <span className={styles.arrow}>▲</span>
          {change}
          {changeUnit}
        </div>
      </div>
    </div>
  )
}

InfoBox.propTypes = {
  text: PropTypes.string,
  date: PropTypes.instanceOf(Date),
  value: PropTypes.number,
  unit: PropTypes.string,
  change: PropTypes.number,
  changeUnit: PropTypes.string,
}
export default InfoBox
