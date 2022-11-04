import React, { useState } from 'react'
import classNames from 'classnames'
import styles from './Hamburger.module.scss'

const Hamburger = () => {
  const [isOpen, setOpen] = useState(false)

  return (
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
      >
        <div />
      </div>
    </button>
  )
}

export default Hamburger
