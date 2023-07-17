import React, { useContext, useState } from 'react'
import Hamburger from '../Hamburger/Hamburger'
import styles from './Navbar.module.scss'
import { NavbarContext } from './NavbarContext'

export const Navbar = () => {
  const navbarContext = useContext(NavbarContext)
  const [isOpen, setOpen] = useState(false)
  return (
    <div className={styles.navbarContainer}>
      <h1>{navbarContext.navbarTitle}</h1>
      <Hamburger setOpen={setOpen} isOpen={isOpen} />
    </div>
  )
}
