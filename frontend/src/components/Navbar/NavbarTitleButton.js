import React, { useContext } from 'react'
import Button from '../Button/Button'
import { NavbarContext } from './NavbarContext'

export const NavbarTitleButton = () => {
  const navbarContext = useContext(NavbarContext)
  return (
    <Button
      onClick={() => navbarContext.setNavbarTitle(navbarContext.navBarTitle)}
    >
      Zmień tytuł
    </Button>
  )
}
