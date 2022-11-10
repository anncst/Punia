import React, { useState } from 'react'
import PropTypes from 'prop-types'

export const Slider = ({ min, max }) => {
  const [value, setValue] = useState(50)

  return (
    <div>
      <input
        type="range"
        min={min}
        max={max}
        value={value}
        onChange={(event) => {
          setValue(+event.target.value)
        }}
        className="slider"
      />
      <p>{value}%</p>
    </div>
  )
}

Slider.propTypes = {
  min: PropTypes.number,
  max: PropTypes.number,
}
