import React, { useContext } from 'react'
import Button from '../Button/Button'
import { NavbarContext } from './NavbarContext'

export const NavbarTitleButton = () => {
  const navbarContext = useContext(NavbarContext)
  return (
    <Button
      onClick={() =>
        navbarContext.setNavbarTitle(
          `Punia ma ${Math.round(Math.random() * 200)} pcheł`
        )
      }
    >
      Zmień tytuł
    </Button>
  )
}
