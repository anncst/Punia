import React from 'react'
import { NavbarTitleButton } from './components/Navbar/NavbarTitleButton'
import { Navbar } from './components/Navbar/Navbar'
import { NavbarContextProvider } from './components/Navbar/NavbarContext'

function App() {
  return (
    <div>
      <NavbarContextProvider>
        <>
          <Navbar />
          <NavbarTitleButton />
        </>
      </NavbarContextProvider>
    </div>
  )
}

export default App
