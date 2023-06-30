import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import styles from './Button.module.scss'

const Button = ({ children, color = 'blue', onClick }) => (
  <button
    className={classNames({
      [styles.blue]: color === 'blue',
      [styles.white]: color === 'white',
    })}
    onClick={onClick}
  >
    {children}
  </button>
)

Button.propTypes = { children: PropTypes.node, color: PropTypes.string }

export default Button
