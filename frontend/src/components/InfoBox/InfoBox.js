import React from 'react'
import PropTypes from 'prop-types'

const InfoBox = ({ text, value, date, unit, change, changeUnit }) => {
  return (
    <div>
      <div>{text}</div>
      <div>{date}</div>
      <div>{value}</div>
      <div>{unit}</div>
      <div>{change}</div>
      <div>{changeUnit}</div>
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
