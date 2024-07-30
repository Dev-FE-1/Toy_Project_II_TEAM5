import styled from 'styled-components'
import { ModalContext } from './Modal'
import { useContext } from 'react'

const Dimmed = ({ children }) => {
  const { setIsOpen } = useContext(ModalContext)

  const handleDimClick = (e) => {
    if (e.target === e.currentTarget) {
      setIsOpen(false)
    }
  }

  return <Container onClick={handleDimClick}>{children}</Container>
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

export default Dimmed
