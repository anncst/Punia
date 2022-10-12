import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import styles from './InfoBox.module.scss'

const InfoBox = ({ text, value, date, unit, change, changeUnit, color }) => (
  <div className={styles.box}>
    <div className={styles.textBox}>
      <div className={styles.text}>{text}</div>
      <div className={styles.date}>{date.toLocaleString()}</div>
    </div>
    <div className={styles.contentBox}>
      <div className={styles.value}>
        {value}
        <span className={styles.unit}>{unit}</span>
      </div>
      <div className={styles.change}>
        <span
          className={classNames({
            [styles.green]: color === 'green',
            [styles.red]: color === 'red',
          })}
        >
          {color === 'green' ? '▲' : '▼'}
        </span>
        {change}
        {changeUnit}
      </div>
    </div>
  </div>
)

InfoBox.propTypes = {
  text: PropTypes.string,
  date: PropTypes.instanceOf(Date),
  value: PropTypes.number,
  unit: PropTypes.string,
  change: PropTypes.number,
  changeUnit: PropTypes.string,
  color: PropTypes.string,
}
export default InfoBox
