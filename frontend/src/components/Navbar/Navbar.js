import React, { useState } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import Hamburger from '../Hamburger/Hamburger'
import styles from './Navbar.module.scss'

export const Navbar = ({ text }) => {
  const [isOpen, setOpen] = useState(false)
  return (
    <div
      className={classNames(styles.navbarContainer, {
        [styles.navbarOpen]: isOpen,
      })}
    >
      <div className={styles.menu}>
        <div className={styles.text}>{text}</div>
        <Hamburger isOpen={isOpen} setOpen={setOpen} />
      </div>
      {isOpen ? (
        <div className={styles.dropdown}>
          <button className={styles.button}>Dodaj wagę</button>
          <button className={styles.button}>Dodaj karmę</button>
        </div>
      ) : null}
    </div>
  )
}

Navbar.propTypes = {
  text: PropTypes.string,
}
