import React from 'react'
import PropTypes from 'prop-types'
import CloseIcon from '@material-ui/icons/Close'
import styles from './Modal.module.scss'

const Modal = ({ onClose, content, title }) => {
  const stopEventPropagation = (event) => {
    event.stopPropagation()
  }

  return (
    <div className={styles.modalBackground} onMouseDown={onClose}>
      <div className={styles.modal} onMouseDown={stopEventPropagation}>
        <div className={styles.header}>
          <h1 className={styles.title}>{title}</h1>
          <button onClick={onClose} className={styles.closeButton}>
            <CloseIcon fontSize="inherit" />
          </button>
        </div>
        {content}
      </div>
    </div>
  )
}

Modal.propTypes = {
  onClose: PropTypes.func,
  title: PropTypes.string,
  content: PropTypes.object,
}
export default Modal
