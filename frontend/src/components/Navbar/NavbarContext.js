import React, { createContext, useState } from 'react'
import PropTypes from 'prop-types'

export const NavbarContext = createContext(undefined)

export const NavbarContextProvider = ({ children }) => {
  const [navbarTitle, setNavbarTitle] = useState()
  return (
    <NavbarContext.Provider value={{ navbarTitle, setNavbarTitle }}>
      {children}
    </NavbarContext.Provider>
  )
}

NavbarContextProvider.propTypes = {
  children: PropTypes.element,
}
