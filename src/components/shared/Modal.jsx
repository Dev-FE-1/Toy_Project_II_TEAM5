import { cloneElement, createContext, useContext, useState } from 'react'
import ReactDOM from 'react-dom'
import styled from 'styled-components'

export const ModalContext = createContext()

function Modal({ children, trigger }) {
  const [isOpen, setIsOpen] = useState(false)
  const handleClose = () => {
    setIsOpen(true)
  }
  const Trigger = cloneElement(trigger, { onClick: handleClose })

  return (
    <ModalContext.Provider value={{ isOpen, setIsOpen }}>
      {Trigger}
      {isOpen && ReactDOM.createPortal(<Dimmed>{children}</Dimmed>, document.body)}
    </ModalContext.Provider>
  )
}

const Dimmed = ({ children }) => {
  const { setIsOpen } = useContext(ModalContext)

  const handleDimClick = (e) => {
    if (e.target === e.currentTarget) {
      setIsOpen(false)
    }
  }

  const Container = styled.div`
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.3);
    z-index: 100;
    display: flex;
    justify-content: center;
    align-items: center;
  `

  return <Container onClick={handleDimClick}>{children}</Container>
}

export default Modal
