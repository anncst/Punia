import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import styles from './Hamburger.module.scss'

const Hamburger = ({ setOpen, isOpen }) => (
  <button
    onClick={() => {
      setOpen(!isOpen)
    }}
    className={styles.button}
  >
    <div
      className={classNames(styles.hamburger, {
        [styles.hamburgerOpen]: isOpen,
      })}
    />
  </button>
)
Hamburger.propTypes = {
  isOpen: PropTypes.bool,
  setOpen: PropTypes.func,
}

export default Hamburger
