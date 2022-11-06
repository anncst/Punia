import React from 'react'
import Button from './components/Button/Button'
import { Navbar } from './components/Navbar/Navbar'
// eslint-disable-next-line no-unused-vars
import { styles } from './App.module.scss'

function App() {
  return (
    <div>
      <Navbar text="Kocica wredna" />
      <Button>Dodaj</Button>
    </div>
  )
}

export default App
