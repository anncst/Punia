import React from 'react'
import PropTypes from 'prop-types'
import Hamburger from '../Hamburger/Hamburger'
import styles from './Navbar.module.scss'

const Navbar = ({ text }) => (
  <div className={styles.navbarContainer}>
    <h1>{text}</h1>
    <Hamburger />
  </div>
)

Navbar.propTypes = {
  text: PropTypes.string,
}

export default Navbar
