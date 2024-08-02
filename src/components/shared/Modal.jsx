import { createContext, useEffect, useState } from 'react'
import ReactDOM from 'react-dom'
import Dimmed from './Dimmed'

export const ModalContext = createContext()

function Modal({ children, Trigger, onOpen }) {
  const [isOpen, setIsOpen] = useState(false)
  const handleOpen = () => {
    setIsOpen(true)
  }

  useEffect(() => {
    if (isOpen && onOpen) {
      onOpen()
    }
  }, [isOpen, onOpen])

  return (
    <ModalContext.Provider value={{ isOpen, setIsOpen }}>
      {Trigger && <Trigger onClick={handleOpen} />}
      {isOpen && ReactDOM.createPortal(<Dimmed>{children}</Dimmed>, document.body)}
    </ModalContext.Provider>
  )
}

export default Modal
